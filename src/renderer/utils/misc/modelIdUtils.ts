/**
 * Top-level engine segment in a namespaced model id (matches Settings → Models provider filter).
 * E.g. `openai/gpt-4o` → `openai`, `openrouter/google/gemini-2.5-flash` → `openrouter`.
 * @param {string} modelId
 * @returns {string}
 */
export function filterEngineFromModelId(modelId) {
  const id = String(modelId || "").trim();
  if (!id) return "";
  const slash = id.indexOf("/");
  if (slash <= 0) return "";
  return id.slice(0, slash).toLowerCase();
}

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

/**
 * Short label for compact footers: strip routing prefix, then keep only the segment after the last `/`
 * (e.g. `openrouter/qwen/qwen3-235b-a22b-2507` → `qwen3-235b-a22b-2507`; `openai/gpt-4o` → `gpt-4o`).
 * @param {string} modelId
 * @returns {string}
 */
export function modelFooterDisplayId(modelId) {
  const header = modelHeaderDisplayId(modelId);
  const trimmed = String(header || "").trim();
  if (!trimmed) return "";
  const i = trimmed.lastIndexOf("/");
  if (i < 0) return trimmed;
  const tail = trimmed.slice(i + 1).trim();
  return tail || trimmed;
}
