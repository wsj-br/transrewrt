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
  "ollama",
  "xai",
  "cerebras",
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
    if (slash <= 0) return applyOpenRouterPresetAliases(id);
    const engine = id.slice(0, slash).toLowerCase();
    out = DIRECT_LLM_ENGINES.has(engine) ? id : `openrouter/${id}`;
  }
  return applyOpenRouterPresetAliases(out);
}

/**
 * @param {string} engine
 * @param {string} raw
 * @returns {string}
 */
function canonicalForEngine(engine, raw) {
  const id = String(raw || "").trim();
  if (!id) return "";
  if (id.startsWith(`${engine}/`)) return applyOpenRouterPresetAliases(id);
  const slash = id.indexOf("/");
  if (slash > 0) {
    const first = id.slice(0, slash).toLowerCase();
    if (DIRECT_LLM_ENGINES.has(first)) return applyOpenRouterPresetAliases(id);
  }
  if (engine === "openrouter") {
    if (id.startsWith("openrouter/")) return applyOpenRouterPresetAliases(id);
    if (slash <= 0) return applyOpenRouterPresetAliases(id);
    return applyOpenRouterPresetAliases(`openrouter/${id}`);
  }
  if (slash <= 0) return applyOpenRouterPresetAliases(`${engine}/${id}`);
  return applyOpenRouterPresetAliases(`${engine}/${id}`);
}

module.exports = {
  DIRECT_LLM_ENGINES,
  OPENROUTER_PRESET_CANONICAL_ALIASES,
  applyOpenRouterPresetAliases,
  canonicalModelIdFromPresetModelId,
  canonicalForEngine,
};
