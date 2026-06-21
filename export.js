export function projectBundle(store, projectId) {
  const project = store.projects.find((item) => item.id === projectId);
  if (!project) return null;

  return {
    project,
    references: store.references.filter((item) => item.project_id === projectId),
    prompts: store.prompts.filter((item) => item.project_id === projectId),
    characters: store.characters.filter((item) => item.project_id === projectId),
    deliverables: store.deliverables.filter((item) => item.project_id === projectId),
    exported_at: new Date().toISOString()
  };
}

export function toMarkdown(bundle) {
  const lines = [
    `# ${bundle.project.name}`,
    "",
    `Type: ${bundle.project.type}`,
    `Status: ${bundle.project.status}`,
    "",
    "## Objective",
    bundle.project.objective || "Not set.",
    "",
    "## Audience",
    bundle.project.audience || "Not set.",
    "",
    "## Brand Rules",
    bundle.project.brand_rules || "Not set.",
    "",
    "## Visual Territory",
    bundle.project.visual_territory || "Not set.",
    "",
    "## Wrong If",
    bundle.project.wrong_if_rules || "Not set.",
    "",
    "## References"
  ];

  bundle.references.forEach((reference) => {
    lines.push(
      `### ${reference.title}`,
      `- URL: ${reference.url || "Not set"}`,
      `- Rights: ${reference.rights_status}`,
      `- Tags: ${(reference.tags || []).join(", ")}`,
      `- OVS translation: ${reference.ovs_translation || "Not set"}`,
      `- Do not copy: ${reference.do_not_copy || "Not set"}`,
      ""
    );
  });

  lines.push("## Prompts");
  bundle.prompts.forEach((prompt) => {
    lines.push(`### ${prompt.title}`, `Type: ${prompt.prompt_type}`, "", prompt.prompt_text || "Not set.", "");
  });

  lines.push("## Characters");
  bundle.characters.forEach((character) => {
    lines.push(`### ${character.name}`, character.identity_lock || "Not set.", `Wardrobe: ${character.wardrobe || "Not set"}`, "");
  });

  lines.push("## Deliverables");
  bundle.deliverables.forEach((deliverable) => {
    lines.push(
      `### ${deliverable.title}`,
      `- Format: ${deliverable.format}`,
      `- Status: ${deliverable.status}`,
      `- Approval: ${deliverable.approval_status}`,
      `- Notes: ${deliverable.notes || "Not set"}`,
      ""
    );
  });

  return lines.join("\n");
}

export function downloadText(filename, text, type = "text/plain") {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
