/**
 * Canonical model id helpers for Easy-mode presets (mirrors renderer modelIdUtils.ts).
 */

const DIRECT_LLM_ENGINES = new Set([
  "openrouter",
  "openai",
  "anthropic",
  "google",
  "deepseek",
  "groq",
  "mistralai",
  "local",
  "xai",
  "cerebras",
  "nvidia",
  "alibaba",
  "apifun",
]);

/** Retired or invalid OpenRouter paths still found in older presets.json → current catalog id. */
const OPENROUTER_PRESET_CANONICAL_ALIASES = {
  "openrouter/qwen/qwen3.5-flash": "openrouter/qwen/qwen3.5-flash-02-23",
};

function applyOpenRouterPresetAliases(canonical) {
  const c = String(canonical || "").trim();
  if (!c) return c;
  return (
    OPENROUTER_PRESET_CANONICAL_ALIASES[c] ||
    OPENROUTER_PRESET_CANONICAL_ALIASES[c.toLowerCase()] ||
    c
  );
}

/**
 * Strip a redundant leading `models/` segment from a provider model id.
 * Google's OpenAI-compatible `GET /models` returns ids like `models/gemini-2.5-flash`;
 * we store/call them as `google/gemini-2.5-flash` (same shape as multi-llm-ts / OpenRouter).
 *
 * @param {string} modelId - Full canonical id or provider-native inner id
 * @returns {string}
 */
function stripRedundantModelsPathSegment(modelId) {
  const s = String(modelId || "").trim();
  if (!s) return s;
  const slash = s.indexOf("/");
  if (slash > 0) {
    const first = s.slice(0, slash).toLowerCase();
    if (DIRECT_LLM_ENGINES.has(first)) {
      let rest = s.slice(slash + 1);
      while (rest.toLowerCase().startsWith("models/")) {
        rest = rest.slice("models/".length);
      }
      return rest ? `${s.slice(0, slash + 1)}${rest}` : s.slice(0, slash);
    }
  }
  let inner = s;
  while (inner.toLowerCase().startsWith("models/")) {
    inner = inner.slice("models/".length);
  }
  return inner;
}

/**
 * @param {string} modelId - Preset model_id or shorthand vendor/model slug
 * @returns {string}
 */
function canonicalModelIdFromPresetModelId(modelId) {
  const id = String(modelId || "").trim();
  if (!id) return id;
  let out;
  if (id.startsWith("openrouter/")) {
    out = id;
  } else {
    const slash = id.indexOf("/");
    if (slash <= 0) return applyOpenRouterPresetAliases(stripRedundantModelsPathSegment(id));
    const engine = id.slice(0, slash).toLowerCase();
    out = DIRECT_LLM_ENGINES.has(engine) ? id : `openrouter/${id}`;
  }
  return applyOpenRouterPresetAliases(stripRedundantModelsPathSegment(out));
}

/**
 * @param {string} engine
 * @param {string} raw
 * @returns {string}
 */
function canonicalForEngine(engine, raw) {
  const id = String(raw || "").trim();
  if (!id) return "";
  let out;
  if (id.startsWith(`${engine}/`)) {
    out = id;
  } else {
    const slash = id.indexOf("/");
    if (slash > 0) {
      const first = id.slice(0, slash).toLowerCase();
      if (DIRECT_LLM_ENGINES.has(first)) {
        out = id;
      } else if (engine === "openrouter") {
        out = `openrouter/${id}`;
      } else {
        out = `${engine}/${id}`;
      }
    } else if (engine === "openrouter") {
      out = id;
    } else {
      out = `${engine}/${id}`;
    }
  }
  return applyOpenRouterPresetAliases(stripRedundantModelsPathSegment(out));
}

module.exports = {
  DIRECT_LLM_ENGINES,
  OPENROUTER_PRESET_CANONICAL_ALIASES,
  applyOpenRouterPresetAliases,
  stripRedundantModelsPathSegment,
  canonicalModelIdFromPresetModelId,
  canonicalForEngine,
};
