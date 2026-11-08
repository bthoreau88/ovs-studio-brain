import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const registry = JSON.parse(read("../docs/OVS_LIGHTING_REGISTRY_G01_V001.json"));
const prompts = read("../src/prompts.js");
const app = read("../src/app.js");
const master = read("../docs/OVS_LIGHTING_PROMPT_MASTER_G01_V001.md");
const authority = read("../docs/OVS_CINEMATIC_LIGHTING_SYSTEM_G01_V001.md");

assert.equal(registry.system, "OVS-LIGHT-G01");
assert.equal(registry.version, "V001");
assert.equal(registry.catalog.length, 34);
const expectedIds = Array.from({ length: 34 }, (_, i) => `LIGHT-${String(i + 1).padStart(2, "0")}`);
assert.deepEqual(registry.catalog.map((item) => item.id), expectedIds);
assert.equal(new Set(registry.catalog.map((item) => item.name)).size, 34);
for (const item of registry.catalog) {
  assert.ok(item.source_pdf_pages, `missing source pages: ${item.id}`);
  assert.ok(item.lighting_setup, `missing lighting plan: ${item.id}`);
  assert.ok(item.dramatic_use, `missing dramatic use: ${item.id}`);
  assert.ok(item.qc_trap, `missing QC trap: ${item.id}`);
}
assert.equal(registry.catalog[32].qualification, "PHOTOSENSITIVITY_HOLD");

const uiLooks = [...prompts.matchAll(/\{ id: "(LIGHT-\d{2})", name: "([^"]+)", plan:/g)];
assert.equal(uiLooks.length, 34, "Prompt Factory must expose 34 looks");
assert.deepEqual(uiLooks.map((match) => match[1]), expectedIds);
assert.deepEqual(uiLooks.map((match) => match[2]), registry.catalog.map((look) => look.name));
assert.ok(prompts.includes("OVS Lighting / Relighting Prompt"));
assert.ok(prompts.includes("INPUT A") && prompts.includes("INPUT B"));
assert.ok(prompts.includes("original recorded audio"));
assert.ok(app.includes('name="lighting_style"'));
assert.ok(app.includes("lighting_style: data.lighting_style"));
assert.ok(master.includes("MASTER") && master.includes("original audio"));
assert.ok(authority.includes("SOURCE BEFORE STYLE"));
assert.equal(registry.no_paid_generation_without_authorization, true);
assert.equal(registry.shot_canon_auto_promote, false);

console.log("PASS OVS-LIGHT-G01 V001: 34 unique treatments, source fields, app parity, provenance/safety and gates");
