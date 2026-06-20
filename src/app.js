import {
  deliverableStatuses,
  emptyRecord,
  navItems,
  projectStatuses,
  rightsStatuses,
  uid
} from "./data.js";
import { downloadText, projectBundle, toMarkdown } from "./export.js";
import { buildPrompt, promptTemplates } from "./prompts.js";
import { searchStore } from "./search.js";
import { deleteRecord, loadStore, resetStore, saveStore, upsertRecord } from "./storage.js";

let store = loadStore();
let notice = "";

const app = document.querySelector("#app");
const esc = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const byId = (collection, id) => store[collection].find((item) => item.id === id);
const projectName = (id) => byId("projects", id)?.name || "Unassigned";
const tagText = (tags = []) => (Array.isArray(tags) ? tags.join(", ") : tags || "");
const scoreAverage = (reference) =>
  Math.round(
    ["mood_score", "structure_score", "texture_score", "ovs_fit_score", "originality_score"].reduce(
      (sum, key) => sum + Number(reference[key] || 0),
      0
    ) / 5
  );

const route = () => {
  const [name = "dashboard", id = ""] = location.hash.replace("#", "").split("/");
  return { name, id };
};

const setNotice = (message) => {
  notice = message;
  render();
  window.setTimeout(() => {
    if (notice === message) {
      notice = "";
      render();
    }
  }, 2200);
};

const field = (name, label, value, type = "text", options = {}) => {
  if (type === "textarea") {
    return `<label class="field"><span>${label}</span><textarea name="${name}" rows="${
      options.rows || 3
    }">${esc(value)}</textarea></label>`;
  }

  if (type === "select") {
    return `<label class="field"><span>${label}</span><select name="${name}">${options.items
      .map((item) => `<option value="${esc(item.value ?? item)}" ${String(value) === String(item.value ?? item) ? "selected" : ""}>${esc(item.label ?? item)}</option>`)
      .join("")}</select></label>`;
  }

  if (type === "range") {
    return `<label class="field score-field"><span>${label}</span><input name="${name}" type="range" min="1" max="10" value="${esc(value || 5)}" /><output>${esc(value || 5)}</output></label>`;
  }

  return `<label class="field"><span>${label}</span><input name="${name}" type="${type}" value="${esc(value)}" /></label>`;
};

function collectForm(form, collection) {
  const formData = new FormData(form);
  const data = { ...emptyRecord[collection] };

  for (const [key, value] of formData.entries()) {
    if (key === "tags" || key === "linked_references") {
      data[key] = value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    } else if (key.endsWith("_score") || key === "quality_score") {
      data[key] = Number(value);
    } else {
      data[key] = value.trim();
    }
  }

  return data;
}

function projectOptions(selected = "") {
  return [{ value: "", label: "Select project" }, ...store.projects.map((project) => ({ value: project.id, label: project.name }))].map(
    (item) => `<option value="${esc(item.value)}" ${item.value === selected ? "selected" : ""}>${esc(item.label)}</option>`
  );
}

function referenceOptions(selected = "", projectId = "") {
  const references = projectId ? store.references.filter((item) => item.project_id === projectId) : store.references;
  return [{ value: "", label: "No reference" }, ...references.map((reference) => ({ value: reference.id, label: reference.title }))].map(
    (item) => `<option value="${esc(item.value)}" ${item.value === selected ? "selected" : ""}>${esc(item.label)}</option>`
  );
}

function shell(content) {
  const { name } = route();
  const activeIndex = navItems.findIndex(([id]) => id === name) + 1;
  return `
    <aside class="sidebar">
      <a class="brand" href="#dashboard" aria-label="OVS Studio Brain dashboard">
        <img src="./assets/logos/ovs_umbrella_primary.png" alt="OVS umbrella skull logo" />
      </a>
      <div class="rail-title"><span>Studio Brain</span><small>Creative operating memory</small></div>
      <nav>
        ${navItems
          .map(
            ([id, label], index) =>
              `<a href="#${id}" class="${name === id ? "active" : ""}" data-route="${id}"><b>${String(index + 1).padStart(2, "0")}</b><span>${esc(label)}</span></a>`
          )
          .join("")}
      </nav>
      <div class="sidebar-foot">
        <span>Memory index</span>
        <strong>${String(activeIndex).padStart(2, "0")} / ${String(navItems.length).padStart(2, "0")}</strong>
        <small>${store.projects.length} projects on file</small>
      </div>
    </aside>
    <main class="workspace workspace-${name}">
      <header class="topbar">
        <div class="page-identity">
          <span>OVS / SB</span>
          <strong>${pageTitle()}</strong>
          <i aria-hidden="true"></i>
        </div>
        <div class="top-control" aria-label="Studio Brain system status">
          <span>Studio Brain</span><i aria-hidden="true"></i><span>Operating Memory / ${new Date().getFullYear()}</span><span>v1.1.0</span>
        </div>
        <div class="top-actions">
          <input class="quick-search" data-quick-search placeholder="Search studio memory" />
          <a class="button primary" href="#projects/new">New project</a>
        </div>
      </header>
      ${notice ? `<div class="notice">${esc(notice)}</div>` : ""}
      ${content}
    </main>
    ${systemConsole()}
  `;
}

function pageTitle() {
  const { name, id } = route();
  if (name === "projects" && id && id !== "new") return byId("projects", id)?.name || "Project Detail";
  if (name === "references" && id && id !== "new") return byId("references", id)?.title || "Reference Decode";
  return navItems.find(([key]) => key === name)?.[1] || "Dashboard";
}

function metric(index, label, value, detail) {
  return `<article class="metric"><b>${index}</b><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>`;
}

function systemConsole() {
  const recordCount = ["projects", "references", "prompts", "characters", "deliverables"].reduce(
    (total, collection) => total + store[collection].length,
    0
  );
  const syncTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return `<footer class="system-console">
    <div class="console-state"><span>Console</span><strong><i></i>Connected</strong></div>
    <dl>
      <div><dt>Task flow</dt><dd>Operational</dd></div>
      <div><dt>Memory bank</dt><dd>${recordCount} records</dd></div>
      <div><dt>Active project</dt><dd>${esc(store.projects[0]?.name || "Unassigned")}</dd></div>
      <div><dt>Last sync</dt><dd>${syncTime}</dd></div>
    </dl>
    <a class="console-target" href="#search" aria-label="Open Studio Brain search"><span></span></a>
  </footer>`;
}

function dashboard() {
  const activeProjects = store.projects.filter((item) => item.status !== "Archived").length;
  const needsRights = store.references.filter((item) => !["Cleared", "Public domain", "Client supplied"].includes(item.rights_status)).length;
  const needsQc = store.deliverables.filter((item) => item.approval_status !== "Approved").length;
  const recentReferences = store.references.slice(0, 4);
  const promptQueue = store.prompts.slice(0, 4);
  const characters = store.characters.slice(0, 3);
  const activeProject = store.projects[0];
  const deliverables = store.deliverables.slice(0, 3);

  return `
    <section class="spatial-dashboard">
      <div class="coordinate coordinate-left" aria-hidden="true"><span>N 34.0522°</span><span>W 118.2437°</span></div>
      <div class="coordinate coordinate-right" aria-hidden="true"><span>TIME ${new Date().toLocaleTimeString([], { hour12: false })}</span><span>UTC -07:00</span></div>

      <article class="active-project-banner">
        <span>Active project</span>
        <h2>${esc(activeProject?.name || "Create first project")}</h2>
        <a href="#projects/${esc(activeProject?.id || "new")}">Open</a>
      </article>

      <article class="spatial-panel overview-panel">
        <header><span>Studio overview</span></header>
        <dl class="overview-list">
          <div><dt>${activeProjects}</dt><dd>Active projects</dd></div>
          <div><dt>${store.references.length}</dt><dd>References</dd></div>
          <div><dt>${store.prompts.length}</dt><dd>Prompts</dd></div>
          <div><dt>${store.deliverables.length}</dt><dd>Deliverables</dd></div>
        </dl>
      </article>

      <article class="project-core">
        <div class="core-orbit" aria-hidden="true"></div>
        <img class="dossier" src="./assets/product/ovs-dossier.png" alt="Black OVS project dossier" />
        <img class="dossier-logo" src="./assets/logos/ovs_umbrella_primary.png" alt="Omnia Vanitas Studios" />
        <div class="dossier-label"><span>OVS dossier</span><strong>No. ${String(store.projects.length).padStart(4, "0")} / OAC / ${new Date().getFullYear()}</strong></div>
      </article>

      <article class="spatial-panel references-panel">
        <header><span>Recent references</span><a href="#references/new">Capture</a></header>
        <h3>Rights + Decode</h3>
        <div class="stack-list">${recentReferences.map(referenceRow).join("") || empty("No references yet.")}</div>
      </article>

      <article class="spatial-panel factory-panel">
        <header><span>Factory output</span><a href="#prompts">Generate</a></header>
        <div class="stack-list">${promptQueue.map(promptRow).join("") || empty("No prompts yet.")}</div>
      </article>

      <article class="spatial-panel characters-panel">
        <header><span>Characters</span><a href="#characters">View all</a></header>
        <ol>${characters.map((character) => `<li><b>${esc(character.name)}</b><span>${esc(character.performance_notes || "Identity locked")}</span></li>`).join("") || `<li><b>No characters</b><span>Identity bank empty</span></li>`}</ol>
      </article>

      <article class="command-deck">
        <section>
          <span>Prompt queue</span>
          <h3>${esc(promptQueue[0]?.title || "No queued prompt")}</h3>
          <small>${esc(promptQueue[0]?.prompt_type || "Factory ready")}</small>
          <a class="button ghost" href="#prompts">Generate</a>
        </section>
        <section>
          <span>QC + Delivery</span>
          <h3>Approval Board</h3>
          <ul class="qc-mini">
            <li><i class="${needsRights ? "open" : "done"}"></i>Reference rights notes</li>
            <li><i class="${needsQc ? "open" : "done"}"></i>Deliverable approval</li>
            <li><i class="done"></i>Project objective</li>
            <li><i class="done"></i>OVS identity lock</li>
          </ul>
        </section>
        <section>
          <span>Export center</span>
          <a class="deck-action" href="#export">Export</a>
          <ul class="export-list">${deliverables.map((deliverable) => `<li><b>${esc(deliverable.title)}</b><small>${esc(deliverable.format)}</small></li>`).join("") || `<li><b>Project package</b><small>JSON / Markdown</small></li>`}</ul>
        </section>
      </article>

      <aside class="system-rail">
        <div><span>Rights</span><strong>${needsRights}</strong></div>
        <div><span>Needs QC</span><strong>${needsQc}</strong></div>
        <div><span>Queue</span><strong>${store.prompts.length}</strong></div>
        <div><span>Status</span><strong>Ready</strong></div>
      </aside>
    </section>
  `;
}

function empty(text) {
  return `<p class="empty">${esc(text)}</p>`;
}

function badge(text) {
  return `<span class="badge">${esc(text)}</span>`;
}

function referenceRow(reference) {
  return `<a class="list-row" href="#references/${esc(reference.id)}">
    <span><strong>${esc(reference.title)}</strong><small>${esc(projectName(reference.project_id))}</small></span>
    <span class="right-meta">${badge(reference.rights_status)}<em>${scoreAverage(reference)}/10</em></span>
  </a>`;
}

function promptRow(prompt) {
  return `<a class="list-row" href="#prompts">
    <span><strong>${esc(prompt.title)}</strong><small>${esc(prompt.prompt_type)} · ${esc(projectName(prompt.project_id))}</small></span>
    <span class="right-meta"><em>${esc(prompt.version)}</em></span>
  </a>`;
}

function projectsPage(id) {
  if (id) return projectDetail(id);

  return `
    <section class="two-column">
      <article class="panel">
        <div class="panel-head"><div><p>Project Intake</p><h2>New memory hub</h2></div></div>
        ${projectForm()}
      </article>
      <article class="panel wide">
        <div class="panel-head"><div><p>Projects</p><h2>${store.projects.length} studio hubs</h2></div></div>
        <div class="table">
          ${store.projects
            .map(
              (project) => `<a class="table-row" href="#projects/${esc(project.id)}">
                <strong>${esc(project.name)}</strong>
                <span>${esc(project.type)}</span>
                ${badge(project.status)}
                <small>${esc(project.updated_at?.slice(0, 10) || project.created_at?.slice(0, 10))}</small>
              </a>`
            )
            .join("")}
        </div>
      </article>
    </section>
  `;
}

function projectDetail(id) {
  const project = id === "new" ? emptyRecord.projects : byId("projects", id);
  if (!project) return missing("Project not found");
  const related = {
    references: store.references.filter((item) => item.project_id === id),
    prompts: store.prompts.filter((item) => item.project_id === id),
    characters: store.characters.filter((item) => item.project_id === id),
    deliverables: store.deliverables.filter((item) => item.project_id === id)
  };

  return `
    <section class="detail-grid">
      <article class="panel">
        <div class="panel-head">
          <div><p>Project Detail</p><h2>${esc(project.name || "New project")}</h2></div>
          ${project.id ? `<button class="button danger" data-delete="projects" data-id="${esc(project.id)}">Delete</button>` : ""}
        </div>
        ${projectForm(project)}
      </article>
      <aside class="panel">
        <div class="panel-head"><div><p>Traceability</p><h2>Linked memory</h2></div></div>
        <div class="trace-grid">
          ${metric("01", "References", related.references.length, "Captured")}
          ${metric("02", "Prompts", related.prompts.length, "Generated")}
          ${metric("03", "Characters", related.characters.length, "Identity locks")}
          ${metric("04", "Deliverables", related.deliverables.length, "Tracked")}
        </div>
        <div class="button-row">
          <a class="button ghost" href="#references/new">Add reference</a>
          <a class="button ghost" href="#prompts">Generate prompt</a>
          <a class="button ghost" href="#export">Export package</a>
        </div>
      </aside>
    </section>
  `;
}

function projectForm(project = emptyRecord.projects) {
  return `<form data-form="projects" data-id="${esc(project.id || "")}" class="entity-form">
    <div class="form-grid">
      ${field("name", "Name", project.name)}
      ${field("type", "Type", project.type)}
      ${field("status", "Status", project.status, "select", { items: projectStatuses })}
      ${field("deliverables", "Deliverables", project.deliverables)}
    </div>
    ${field("objective", "Objective", project.objective, "textarea")}
    ${field("audience", "Audience", project.audience, "textarea")}
    ${field("brand_rules", "Brand rules", project.brand_rules, "textarea")}
    ${field("visual_territory", "Visual territory", project.visual_territory, "textarea")}
    ${field("wrong_if_rules", "Wrong-if rules", project.wrong_if_rules, "textarea")}
    <button class="button primary" type="submit">${project.id ? "Save project" : "Create project"}</button>
  </form>`;
}

function referencesPage(id) {
  if (id) return referenceDetail(id);
  const tags = [...new Set(store.references.flatMap((item) => item.tags || []))].sort();

  return `
    <section class="filter-bar">
      <select data-filter="reference-project"><option value="">All projects</option>${projectOptions()}</select>
      <select data-filter="reference-rights"><option value="">All rights</option>${rightsStatuses.map((item) => `<option>${esc(item)}</option>`).join("")}</select>
      <select data-filter="reference-tag"><option value="">All tags</option>${tags.map((item) => `<option>${esc(item)}</option>`).join("")}</select>
      <a class="button primary" href="#references/new">Capture reference</a>
    </section>
    <section class="two-column">
      <article class="panel">
        <div class="panel-head"><div><p>Reference Capture</p><h2>Decode input</h2></div></div>
        ${referenceForm()}
      </article>
      <article class="panel wide">
        <div class="panel-head"><div><p>References</p><h2>Source memory</h2></div></div>
        <div class="stack-list" data-reference-list>
          ${store.references.map(referenceRow).join("") || empty("No references captured.")}
        </div>
      </article>
    </section>
  `;
}

function referenceDetail(id) {
  const reference = id === "new" ? emptyRecord.references : byId("references", id);
  if (!reference) return missing("Reference not found");

  return `
    <section class="detail-grid">
      <article class="panel">
        <div class="panel-head">
          <div><p>Reference Detail / Decode View</p><h2>${esc(reference.title || "New reference")}</h2></div>
          ${reference.id ? `<button class="button danger" data-delete="references" data-id="${esc(reference.id)}">Delete</button>` : ""}
        </div>
        ${referenceForm(reference)}
      </article>
      <aside class="panel decode-panel">
        <div class="panel-head"><div><p>Decode Score</p><h2>${reference.id ? `${scoreAverage(reference)}/10 OVS fit` : "Ready"}</h2></div></div>
        <dl class="definition-list">
          <div><dt>Surface</dt><dd>${esc(reference.surface_read || "Not decoded")}</dd></div>
          <div><dt>Structure</dt><dd>${esc(reference.structure_read || "Not decoded")}</dd></div>
          <div><dt>Production</dt><dd>${esc(reference.production_read || "Not decoded")}</dd></div>
          <div><dt>Emotion</dt><dd>${esc(reference.emotional_read || "Not decoded")}</dd></div>
          <div><dt>OVS Translation</dt><dd>${esc(reference.ovs_translation || "Not decoded")}</dd></div>
          <div><dt>Do Not Copy</dt><dd>${esc(reference.do_not_copy || "Not decoded")}</dd></div>
        </dl>
      </aside>
    </section>
  `;
}

function referenceForm(reference = emptyRecord.references) {
  return `<form data-form="references" data-id="${esc(reference.id || "")}" class="entity-form">
    <div class="form-grid">
      <label class="field"><span>Project</span><select name="project_id">${projectOptions(reference.project_id)}</select></label>
      ${field("title", "Title", reference.title)}
      ${field("url", "Source URL", reference.url, "url")}
      ${field("source_type", "Source type", reference.source_type)}
      ${field("rights_status", "Rights", reference.rights_status, "select", { items: rightsStatuses })}
      ${field("tags", "Tags", tagText(reference.tags))}
    </div>
    <div class="score-grid">
      ${field("mood_score", "Mood", reference.mood_score, "range")}
      ${field("structure_score", "Structure", reference.structure_score, "range")}
      ${field("texture_score", "Texture", reference.texture_score, "range")}
      ${field("ovs_fit_score", "OVS fit", reference.ovs_fit_score, "range")}
      ${field("originality_score", "Originality", reference.originality_score, "range")}
    </div>
    ${field("surface_read", "Surface read", reference.surface_read, "textarea")}
    ${field("structure_read", "Structure read", reference.structure_read, "textarea")}
    ${field("production_read", "Production read", reference.production_read, "textarea")}
    ${field("emotional_read", "Emotional read", reference.emotional_read, "textarea")}
    ${field("ovs_translation", "OVS translation", reference.ovs_translation, "textarea")}
    ${field("do_not_copy", "Do not copy", reference.do_not_copy, "textarea")}
    ${field("original_take", "Original take", reference.original_take, "textarea")}
    <button class="button primary" type="submit">${reference.id ? "Save reference" : "Capture reference"}</button>
  </form>`;
}

function promptsPage() {
  const firstProject = store.projects[0]?.id || "";
  const firstReference = store.references.find((item) => item.project_id === firstProject)?.id || "";

  return `
    <section class="detail-grid">
      <article class="panel">
        <div class="panel-head"><div><p>Prompt Factory</p><h2>Generate OVS-aligned prompts</h2></div></div>
        <form class="entity-form" data-generate-prompt>
          <div class="form-grid">
            <label class="field"><span>Project</span><select name="project_id">${projectOptions(firstProject)}</select></label>
            <label class="field"><span>Reference</span><select name="reference_id">${referenceOptions(firstReference, firstProject)}</select></label>
            <label class="field"><span>Template</span><select name="prompt_type">${promptTemplates.map((item) => `<option>${esc(item.name)}</option>`).join("")}</select></label>
            ${field("title", "Title", "")}
          </div>
          <button class="button primary" type="submit">Generate prompt</button>
        </form>
      </article>
      <article class="panel">
        <div class="panel-head"><div><p>Stored Prompts</p><h2>${store.prompts.length} blocks</h2></div></div>
        <div class="prompt-list">
          ${store.prompts.map(promptCard).join("") || empty("No prompt blocks stored.")}
        </div>
      </article>
    </section>
  `;
}

function promptCard(prompt) {
  return `<article class="prompt-card">
    <div class="panel-head">
      <div><p>${esc(prompt.prompt_type)}</p><h3>${esc(prompt.title)}</h3><small>${esc(projectName(prompt.project_id))} · ${esc(prompt.model_target)}</small></div>
      <div class="button-row">
        <button class="button ghost" data-copy="${esc(prompt.id)}">Copy</button>
        <button class="button danger" data-delete="prompts" data-id="${esc(prompt.id)}">Delete</button>
      </div>
    </div>
    <pre>${esc(prompt.prompt_text)}</pre>
    <small>Quality ${esc(prompt.quality_score)}/10 · ${esc(prompt.version)} · Wrong if: ${esc(prompt.wrong_if_rules || "Not set")}</small>
  </article>`;
}

function charactersPage() {
  return entityPage({
    collection: "characters",
    intro: "Character Locks",
    title: "Identity continuity",
    form: characterForm,
    row: (character) => `<a class="table-row" href="#characters">
      <strong>${esc(character.name)}</strong><span>${esc(projectName(character.project_id))}</span><small>${esc(character.wardrobe)}</small>
      <button class="button danger" data-delete="characters" data-id="${esc(character.id)}">Delete</button>
    </a>`
  });
}

function characterForm(character = emptyRecord.characters) {
  return `<form data-form="characters" data-id="${esc(character.id || "")}" class="entity-form">
    <div class="form-grid">
      <label class="field"><span>Project</span><select name="project_id">${projectOptions(character.project_id)}</select></label>
      ${field("name", "Name", character.name)}
      ${field("linked_references", "Linked references", tagText(character.linked_references))}
    </div>
    ${field("identity_lock", "Identity lock", character.identity_lock, "textarea")}
    ${field("wardrobe", "Wardrobe", character.wardrobe, "textarea")}
    ${field("face_notes", "Face notes", character.face_notes, "textarea")}
    ${field("performance_notes", "Performance notes", character.performance_notes, "textarea")}
    <button class="button primary" type="submit">Save character</button>
  </form>`;
}

function deliverablesPage() {
  return entityPage({
    collection: "deliverables",
    intro: "Deliverables",
    title: "Output tracker",
    form: deliverableForm,
    row: (deliverable) => `<div class="table-row">
      <strong>${esc(deliverable.title)}</strong><span>${esc(deliverable.format)}</span>${badge(deliverable.status)}
      <small>${esc(deliverable.approval_status)}</small>
      <button class="button danger" data-delete="deliverables" data-id="${esc(deliverable.id)}">Delete</button>
    </div>`
  });
}

function deliverableForm(deliverable = emptyRecord.deliverables) {
  return `<form data-form="deliverables" data-id="${esc(deliverable.id || "")}" class="entity-form">
    <div class="form-grid">
      <label class="field"><span>Project</span><select name="project_id">${projectOptions(deliverable.project_id)}</select></label>
      ${field("title", "Title", deliverable.title)}
      ${field("format", "Format", deliverable.format)}
      ${field("status", "Status", deliverable.status, "select", { items: deliverableStatuses })}
      ${field("approval_status", "Approval", deliverable.approval_status, "select", { items: ["Needs QC", "Changes requested", "Approved"] })}
      ${field("export_path", "Export path", deliverable.export_path)}
      ${field("publish_link", "Publish link", deliverable.publish_link, "url")}
    </div>
    ${field("notes", "Notes", deliverable.notes, "textarea")}
    <button class="button primary" type="submit">Save deliverable</button>
  </form>`;
}

function entityPage({ collection, intro, title, form, row }) {
  return `
    <section class="two-column">
      <article class="panel">
        <div class="panel-head"><div><p>${intro}</p><h2>New record</h2></div></div>
        ${form()}
      </article>
      <article class="panel wide">
        <div class="panel-head"><div><p>${intro}</p><h2>${title}</h2></div></div>
        <div class="table">${store[collection].map(row).join("") || empty("No records yet.")}</div>
      </article>
    </section>
  `;
}

function searchPage() {
  return `
    <section class="panel">
      <div class="panel-head"><div><p>Studio Brain Search</p><h2>Search everything</h2></div></div>
      <input class="search-input" data-search-page placeholder="Search projects, references, prompts, characters, deliverables" autofocus />
      <div class="search-results" data-search-results>${empty("Type to search across studio memory.")}</div>
    </section>
  `;
}

function exportPage() {
  const selected = store.projects[0]?.id || "";
  return `
    <section class="detail-grid">
      <article class="panel">
        <div class="panel-head"><div><p>Export Center</p><h2>Project handoff package</h2></div></div>
        <label class="field"><span>Project</span><select data-export-project>${projectOptions(selected)}</select></label>
        <div class="button-row">
          <button class="button primary" data-export-json>Export JSON</button>
          <button class="button ghost" data-export-md>Export Markdown</button>
        </div>
        <div data-export-preview class="export-preview">${exportPreview(selected)}</div>
      </article>
      <article class="panel">
        <div class="panel-head"><div><p>QC Checklist</p><h2>Before packaging</h2></div></div>
        ${qcChecklist()}
      </article>
    </section>
  `;
}

function exportPreview(projectId) {
  const bundle = projectBundle(store, projectId);
  if (!bundle) return empty("Select a project to preview export contents.");
  return `<dl class="definition-list">
    <div><dt>Project</dt><dd>${esc(bundle.project.name)}</dd></div>
    <div><dt>References</dt><dd>${bundle.references.length}</dd></div>
    <div><dt>Prompts</dt><dd>${bundle.prompts.length}</dd></div>
    <div><dt>Characters</dt><dd>${bundle.characters.length}</dd></div>
    <div><dt>Deliverables</dt><dd>${bundle.deliverables.length}</dd></div>
  </dl>`;
}

function settingsPage() {
  return `
    <section class="detail-grid">
      <article class="panel">
        <div class="panel-head"><div><p>Brand System / Strict Asset</p><h2>OVS identity lock</h2></div></div>
        <div class="identity-lock">
          <img src="./assets/logos/ovs_umbrella_primary.png" alt="Official Omnia Vanitas Studios umbrella skull lockup" />
          <dl class="definition-list">
            <div><dt>Primary mark</dt><dd>Use the supplied umbrella-skull and Omnia Vanitas Studios wordmark intact.</dd></div>
            <div><dt>Never</dt><dd>Redraw, simplify, substitute, recolor, rotate, crop, or generate a look-alike.</dd></div>
            <div><dt>Clear space</dt><dd>Keep the lockup isolated from controls, rules, and editorial display type.</dd></div>
          </dl>
        </div>
        <div class="reference-strip">
          <img src="./assets/identity/editorial-poster-01.png" alt="OVS editorial identity reference" />
          <img src="./assets/identity/editorial-web-01.png" alt="OVS website identity reference" />
          <img src="./assets/identity/editorial-poster-02.png" alt="OVS poster identity reference" />
        </div>
      </article>
      <article class="panel">
        <div class="panel-head"><div><p>Local Data</p><h2>Storage controls</h2></div></div>
        <p class="lead">The MVP uses browser localStorage so it runs without a backend. Export important project packages before resetting.</p>
        <div class="button-row">
          <button class="button ghost" data-backup-store>Download full backup</button>
          <button class="button danger" data-reset-store>Reset seed data</button>
        </div>
      </article>
    </section>
  `;
}

function qcChecklist() {
  const items = [
    "Project objective and audience are set",
    "Reference rights notes are explicit",
    "Decode fields include do-not-copy rules",
    "Prompt includes OVS translation and wrong-if rules",
    "Deliverables have approval status",
    "Export includes JSON or Markdown handoff"
  ];
  return `<ul class="qc-list">${items.map((item) => `<li><input type="checkbox" /> <span>${esc(item)}</span></li>`).join("")}</ul>`;
}

function missing(text) {
  return `<section class="panel">${empty(text)}<a class="button ghost" href="#dashboard">Return to dashboard</a></section>`;
}

function renderReferencesList() {
  const projectId = document.querySelector('[data-filter="reference-project"]')?.value || "";
  const rights = document.querySelector('[data-filter="reference-rights"]')?.value || "";
  const tag = document.querySelector('[data-filter="reference-tag"]')?.value || "";
  const items = store.references.filter((reference) => {
    const projectMatch = !projectId || reference.project_id === projectId;
    const rightsMatch = !rights || reference.rights_status === rights;
    const tagMatch = !tag || (reference.tags || []).includes(tag);
    return projectMatch && rightsMatch && tagMatch;
  });
  const list = document.querySelector("[data-reference-list]");
  if (list) list.innerHTML = items.map(referenceRow).join("") || empty("No references match these filters.");
}

function renderSearchResults(query, target) {
  const results = searchStore(store, query);
  target.innerHTML =
    results
      .map(
        (result) => `<a class="search-result" href="#${result.collection === "prompts" ? "prompts" : result.collection}/${esc(result.id)}">
          ${badge(result.collection)}
          <strong>${esc(result.title)}</strong>
          <small>${esc(result.body)}</small>
        </a>`
      )
      .join("") || empty(query ? "No matching studio memory found." : "Type to search across studio memory.");
}

function bindEvents() {
  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const collection = form.dataset.form;
      const record = collectForm(form, collection);
      if (form.dataset.id) record.id = form.dataset.id;
      const existing = record.id ? byId(collection, record.id) : {};
      store = upsertRecord(store, collection, { ...existing, ...record });
      setNotice(`${collection.slice(0, -1)} saved`);
      if (collection === "projects" && !form.dataset.id) {
        location.hash = `#projects/${store.projects[0].id}`;
      }
    });
  });

  document.querySelector("[data-generate-prompt]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const project = byId("projects", data.project_id) || store.projects[0];
    const reference = byId("references", data.reference_id) || store.references.find((item) => item.project_id === project?.id) || store.references[0];
    const character = store.characters.find((item) => item.project_id === project?.id) || store.characters[0] || {};
    const promptText = buildPrompt(data.prompt_type, { project, reference, character });
    const template = promptTemplates.find((item) => item.name === data.prompt_type);
    store = upsertRecord(store, "prompts", {
      ...emptyRecord.prompts,
      id: uid("prompt"),
      project_id: project.id,
      reference_id: reference?.id || "",
      prompt_type: data.prompt_type,
      title: data.title || `${data.prompt_type} · ${project.name}`,
      prompt_text: promptText,
      model_target: template?.target || "LLM",
      wrong_if_rules: project.wrong_if_rules,
      quality_score: 7
    });
    setNotice("Prompt generated");
  });

  document.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const { delete: collection, id } = event.currentTarget.dataset;
      if (window.confirm(`Delete this ${collection.slice(0, -1)}?`)) {
        store = deleteRecord(store, collection, id);
        setNotice(`${collection.slice(0, -1)} deleted`);
        if (route().id === id) location.hash = `#${collection}`;
      }
    });
  });

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const prompt = byId("prompts", button.dataset.copy);
      await navigator.clipboard.writeText(prompt.prompt_text);
      setNotice("Prompt copied to clipboard");
    });
  });

  document.querySelectorAll('[data-filter^="reference"]').forEach((input) => {
    input.addEventListener("change", renderReferencesList);
  });

  document.querySelector("[data-search-page]")?.addEventListener("input", (event) => {
    renderSearchResults(event.target.value, document.querySelector("[data-search-results]"));
  });

  document.querySelector("[data-quick-search]")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      location.hash = "#search";
      window.setTimeout(() => {
        const input = document.querySelector("[data-search-page]");
        const target = document.querySelector("[data-search-results]");
        if (input && target) {
          input.value = event.target.value;
          renderSearchResults(event.target.value, target);
        }
      });
    }
  });

  document.querySelector("[data-export-project]")?.addEventListener("change", (event) => {
    document.querySelector("[data-export-preview]").innerHTML = exportPreview(event.target.value);
  });

  document.querySelector("[data-export-json]")?.addEventListener("click", () => {
    const projectId = document.querySelector("[data-export-project]").value;
    const bundle = projectBundle(store, projectId);
    if (bundle) downloadText(`${bundle.project.name.replaceAll(" ", "-").toLowerCase()}-handoff.json`, JSON.stringify(bundle, null, 2), "application/json");
  });

  document.querySelector("[data-export-md]")?.addEventListener("click", () => {
    const projectId = document.querySelector("[data-export-project]").value;
    const bundle = projectBundle(store, projectId);
    if (bundle) downloadText(`${bundle.project.name.replaceAll(" ", "-").toLowerCase()}-handoff.md`, toMarkdown(bundle), "text/markdown");
  });

  document.querySelector("[data-backup-store]")?.addEventListener("click", () => {
    downloadText("ovs-studio-brain-backup.json", JSON.stringify(store, null, 2), "application/json");
  });

  document.querySelector("[data-reset-store]")?.addEventListener("click", () => {
    if (window.confirm("Reset local data to seed records?")) {
      store = resetStore();
      setNotice("Seed data restored");
    }
  });

  document.querySelectorAll(".score-field input").forEach((input) => {
    input.addEventListener("input", () => {
      input.closest(".score-field").querySelector("output").textContent = input.value;
    });
  });
}

function render() {
  const { name, id } = route();
  const pages = {
    dashboard,
    projects: () => projectsPage(id),
    references: () => referencesPage(id),
    prompts: promptsPage,
    characters: charactersPage,
    deliverables: deliverablesPage,
    search: searchPage,
    export: exportPage,
    settings: settingsPage
  };

  app.innerHTML = shell((pages[name] || dashboard)());
  bindEvents();
}

window.addEventListener("hashchange", render);
if (!location.hash) location.hash = "#dashboard";
render();
