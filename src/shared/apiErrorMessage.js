/**
 * Browser-safe API error helpers (no Node / LLM dependencies).
 */

/** i18n key (key-as-default) for invalid/disabled/missing OpenRouter API keys. */
const OPENROUTER_KEY_INVALID_MESSAGE =
  "OpenRouter API key is invalid, disabled, or not found.";

/**
 * Human-readable message from JSON API error bodies (e.g. OpenRouter `{ error: { message } }`).
 * @param {unknown} data - Parsed response body or fragment
 * @param {string} [fallback]
 * @returns {string}
 */
function extractApiErrorMessage(data, fallback = "Request failed") {
  if (data == null) return fallback;
  if (typeof data === "string" && data.trim()) return data.trim();
  if (typeof data !== "object") return fallback;
  const err = /** @type {{ error?: unknown; message?: unknown }} */ (data).error;
  if (typeof err === "string" && err.trim()) return err.trim();
  if (err && typeof err === "object") {
    const msg = /** @type {{ message?: unknown }} */ (err).message;
    if (typeof msg === "string" && msg.trim()) return msg.trim();
  }
  const top = /** @type {{ message?: unknown }} */ (data).message;
  if (typeof top === "string" && top.trim()) return top.trim();
  return fallback;
}

/**
 * Whether an OpenRouter `/key` (or similar) error indicates invalid or missing API key auth.
 * @param {unknown} message
 * @returns {boolean}
 */
function isOpenRouterKeyAuthFailureMessage(message) {
  if (typeof message !== "string" || !message.trim()) return false;
  const m = message.trim().toLowerCase();
  return (
    /missing authentication/i.test(m) ||
    /invalid credentials/i.test(m) ||
    /\bunauthorized\b/i.test(m) ||
    /authentication required/i.test(m) ||
    /invalid api key/i.test(m) ||
    /api key.*(invalid|not valid|required)/i.test(m) ||
    /^http 401\b/i.test(m) ||
    /\buser not found\b/i.test(m)
  );
}

/**
 * Map cryptic OpenRouter auth errors (e.g. "User not found.") to a clear i18n key.
 * @param {unknown} message
 * @returns {string}
 */
function normalizeOpenRouterKeyErrorMessage(message) {
  if (typeof message !== "string" || !message.trim()) return "";
  const trimmed = message.trim();
  if (isOpenRouterKeyAuthFailureMessage(trimmed)) {
    return OPENROUTER_KEY_INVALID_MESSAGE;
  }
  return trimmed;
}

module.exports = {
  OPENROUTER_KEY_INVALID_MESSAGE,
  extractApiErrorMessage,
  isOpenRouterKeyAuthFailureMessage,
  normalizeOpenRouterKeyErrorMessage,
};
