/**
 * Provider key for grouping/sorting: OpenRouter rows use inner vendor (e.g. openai for openrouter/openai/gpt-4o).
 * @param {string} modelId
 * @returns {string}
 */
export function providerSortKeyFromModelId(modelId) {
  const id = modelId || "";
  if (!id) return "other";
  if (id.startsWith("openrouter/")) {
    const inner = id.slice("openrouter/".length);
    const first = inner.split("/")[0];
    return (first || "openrouter").toLowerCase();
  }
  return (id.split("/")[0] || "other").toLowerCase();
}

/**
 * Header / dropdown label: strip `openrouter/` so both routes show `vendor/model`
 * (e.g. `openrouter/google/gemini-2.5-flash` → `google/gemini-2.5-flash`).
 * @param {string} modelId
 * @returns {string}
 */
export function modelHeaderDisplayId(modelId) {
  const id = String(modelId || "").trim();
  if (id.startsWith("openrouter/")) return id.slice("openrouter/".length);
  return id;
}
