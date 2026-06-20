import { emptyRecord, nowIso, seedData, uid } from "./data.js";

const STORAGE_KEY = "ovs_studio_brain_v1";

const clone = (value) => JSON.parse(JSON.stringify(value));

export function loadStore() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    saveStore(seedData);
    return clone(seedData);
  }

  try {
    const parsed = JSON.parse(raw);
    return { ...clone(seedData), ...parsed };
  } catch {
    saveStore(seedData);
    return clone(seedData);
  }
}

export function saveStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function resetStore() {
  saveStore(seedData);
  return clone(seedData);
}

export function upsertRecord(store, collection, record) {
  const next = clone(store);
  const exists = Boolean(record.id);
  const timestamp = nowIso();
  const id = record.id || uid(collection.slice(0, -1));
  const incoming = {
    ...emptyRecord[collection],
    ...record,
    id,
    created_at: record.created_at || timestamp
  };

  if (collection === "projects") {
    incoming.updated_at = timestamp;
  }

  const index = next[collection].findIndex((item) => item.id === id);
  if (index >= 0) {
    next[collection][index] = incoming;
  } else {
    next[collection].unshift(incoming);
  }

  if (exists && collection !== "projects") {
    const project = next.projects.find((item) => item.id === incoming.project_id);
    if (project) project.updated_at = timestamp;
  }

  saveStore(next);
  return next;
}

export function deleteRecord(store, collection, id) {
  const next = clone(store);
  next[collection] = next[collection].filter((item) => item.id !== id);

  if (collection === "projects") {
    next.references = next.references.filter((item) => item.project_id !== id);
    next.prompts = next.prompts.filter((item) => item.project_id !== id);
    next.characters = next.characters.filter((item) => item.project_id !== id);
    next.deliverables = next.deliverables.filter((item) => item.project_id !== id);
  }

  saveStore(next);
  return next;
}
