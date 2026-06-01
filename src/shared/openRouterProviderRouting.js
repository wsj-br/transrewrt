/**
 * OpenRouter chat-completions `provider` field: routing preferences.
 * @see https://openrouter.ai/docs/guides/routing/provider-selection
 */
const OPENROUTER_PROVIDER = {
  sort: "latency",
  allow_fallbacks: true,
};

module.exports = { OPENROUTER_PROVIDER };
