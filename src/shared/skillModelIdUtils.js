/**
 * Canonical model id helpers for Easy-mode skills (mirrors renderer modelIdUtils.ts).
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

/** Retired or invalid OpenRouter paths still found in older skills.json → current catalog id. */
const OPENROUTER_SKILL_CANONICAL_ALIASES = {
  "openrouter/qwen/qwen3.5-flash": "openrouter/qwen/qwen3.5-flash-02-23",
};

function applyOpenRouterSkillAliases(canonical) {
  const c = String(canonical || "").trim();
  if (!c) return c;
  return (
    OPENROUTER_SKILL_CANONICAL_ALIASES[c] ||
    OPENROUTER_SKILL_CANONICAL_ALIASES[c.toLowerCase()] ||
    c
  );
}

/**
 * @param {string} modelId - Skill model_id or shorthand vendor/model slug
 * @returns {string}
 */
function canonicalModelIdFromSkillModelId(modelId) {
  const id = String(modelId || "").trim();
  if (!id) return id;
  let out;
  if (id.startsWith("openrouter/")) {
    out = id;
  } else {
    const slash = id.indexOf("/");
    if (slash <= 0) return applyOpenRouterSkillAliases(id);
    const engine = id.slice(0, slash).toLowerCase();
    out = DIRECT_LLM_ENGINES.has(engine) ? id : `openrouter/${id}`;
  }
  return applyOpenRouterSkillAliases(out);
}

/**
 * @param {string} engine
 * @param {string} raw
 * @returns {string}
 */
function canonicalForEngine(engine, raw) {
  const id = String(raw || "").trim();
  if (!id) return "";
  if (id.startsWith(`${engine}/`)) return applyOpenRouterSkillAliases(id);
  const slash = id.indexOf("/");
  if (slash > 0) {
    const first = id.slice(0, slash).toLowerCase();
    if (DIRECT_LLM_ENGINES.has(first)) return applyOpenRouterSkillAliases(id);
  }
  if (engine === "openrouter") {
    if (id.startsWith("openrouter/")) return applyOpenRouterSkillAliases(id);
    if (slash <= 0) return applyOpenRouterSkillAliases(id);
    return applyOpenRouterSkillAliases(`openrouter/${id}`);
  }
  if (slash <= 0) return applyOpenRouterSkillAliases(`${engine}/${id}`);
  return applyOpenRouterSkillAliases(`${engine}/${id}`);
}

module.exports = {
  DIRECT_LLM_ENGINES,
  OPENROUTER_SKILL_CANONICAL_ALIASES,
  applyOpenRouterSkillAliases,
  canonicalModelIdFromSkillModelId,
  canonicalForEngine,
};
