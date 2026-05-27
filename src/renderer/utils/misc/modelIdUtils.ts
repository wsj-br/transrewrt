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

/**
 * Lexicographic order of full stored model ids (`api_calls.model` / summary `model`). Case-sensitive UTF-16 order;
 * use for tie-breaks or when raw path order is intended.
 */
export function compareStoredModelIdStrings(a: unknown, b: unknown): number {
  const sa = String(a ?? "");
  const sb = String(b ?? "");
  if (sa < sb) return -1;
  if (sa > sb) return 1;
  return 0;
}

/**
 * Dashboard **Model** column order: same tail string as {@link modelFooterDisplayId} (strip `openrouter/`, then last `/` segment),
 * natural/numeric string compare — so e.g. `.../google/gemma-...` sorts before `.../z-ai/glm-...` by tail (`gemma` vs `glm`), not by full path (`google` vs `z-ai`).
 * Tie-break: {@link compareStoredModelIdStrings}.
 */
export function compareModelIdsByFooterDisplay(modelIdA: unknown, modelIdB: unknown): number {
  const fa = modelFooterDisplayId(modelIdA);
  const fb = modelFooterDisplayId(modelIdB);
  const cmp = fa.localeCompare(fb, undefined, { numeric: true, sensitivity: "base" });
  if (cmp !== 0) return cmp;
  return compareStoredModelIdStrings(modelIdA, modelIdB);
}

/**
 * First path segment must match a configured multi-llm-ts engine (same set as `src/shared/llm`
 * `ENGINE_IDS`). OpenRouter catalog slugs look like `qwen/qwen3.5-flash` and must be stored as
 * `openrouter/qwen/qwen3.5-flash` for `resolveEngine`. Preset JSON often omits the `openrouter/`
 * prefix; this normalizes those ids for API calls.
 */
const DIRECT_LLM_ENGINE_PREFIXES = new Set([
  "openrouter",
  "openai",
  "anthropic",
  "google",
  "deepseek",
  "groq",
  "mistralai",
  "ollama",
  "xai",
  "cerebras",
]);

/** Retired or invalid OpenRouter paths still found in older presets.json → current catalog id. */
const OPENROUTER_PRESET_CANONICAL_ALIASES: Record<string, string> = {
  "openrouter/qwen/qwen3.5-flash": "openrouter/qwen/qwen3.5-flash-02-23",
};

function applyOpenRouterPresetAliases(canonical: string): string {
  const c = String(canonical || "").trim();
  if (!c) return c;
  return OPENROUTER_PRESET_CANONICAL_ALIASES[c] || OPENROUTER_PRESET_CANONICAL_ALIASES[c.toLowerCase()] || c;
}

/**
 * @param modelId - Preset `model_id` or shorthand vendor/model slug
 * @returns Canonical id for LLM streaming (`resolveEngine`)
 */
export function canonicalModelIdFromPresetModelId(modelId: string): string {
  const id = String(modelId || "").trim();
  if (!id) return id;
  let out: string;
  if (id.startsWith("openrouter/")) {
    out = id;
  } else {
    const slash = id.indexOf("/");
    if (slash <= 0) return applyOpenRouterPresetAliases(id);
    const engine = id.slice(0, slash).toLowerCase();
    out = DIRECT_LLM_ENGINE_PREFIXES.has(engine) ? id : `openrouter/${id}`;
  }
  return applyOpenRouterPresetAliases(out);
}
