/**
 * Shared OpenRouter model ids and routing for CLI scripts (i18n, docs, test data).
 * Not loaded from app config.json.
 */

/** OpenRouter: prefer highest-throughput provider; allow backup providers. https://openrouter.ai/docs/guides/routing/provider-selection */
const OPENROUTER_PROVIDER = {
  sort: "throughput",
  allow_fallbacks: true,
};

const TRANSLATION_MODELS = [
  "qwen/qwen3-235b-a22b-2507",
  "stepfun/step-3.5-flash:free",
  "anthropic/claude-3-haiku",
  "z-ai/glm-4.7-flash",
  "minimax/minimax-m2.5",
  "anthropic/claude-3.5-haiku",
];

module.exports = { TRANSLATION_MODELS, OPENROUTER_PROVIDER };
