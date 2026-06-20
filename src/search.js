const flatten = (value) => {
  if (Array.isArray(value)) return value.join(" ");
  if (value && typeof value === "object") return Object.values(value).join(" ");
  return value || "";
};

export function searchStore(store, query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return Object.entries(store).flatMap(([collection, items]) =>
    items
      .filter((item) => Object.values(item).map(flatten).join(" ").toLowerCase().includes(normalized))
      .map((item) => ({
        collection,
        id: item.id,
        title: item.name || item.title,
        body: Object.values(item).map(flatten).join(" ").slice(0, 240)
      }))
  );
}
