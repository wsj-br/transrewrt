/**
 * Web server: which config keys stay in global config.json (admin-only) vs per-user SQLite prefs.
 */

const { CONFIG_KEY_BY_ENGINE, CUSTOM_CONFIG_KEYS } = require("../../shared/llm");

const SERVER_GLOBAL_KEYS = new Set([
  ...Object.values(CONFIG_KEY_BY_ENGINE),
  CUSTOM_CONFIG_KEYS.name,
  CUSTOM_CONFIG_KEYS.url,
  "web_session_timeout",
]);

function isServerGlobalKey(key) {
  return SERVER_GLOBAL_KEYS.has(key);
}

/**
 * Keys that belong in user_preferences JSON (everything else from a merged config+state read).
 * Server-global keys are excluded.
 */
function pickUserPreferenceEntries(obj) {
  if (!obj || typeof obj !== "object") return {};
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (isServerGlobalKey(k)) continue;
    if (k === "web_session" || k === "web_session_expires_at") continue;
    out[k] = v;
  }
  return out;
}

/**
 * For GET /api/config: attach server-global values only for admin.
 */
function pickServerGlobalEntries(globalConfig, includeValues) {
  if (!includeValues) return {};
  const out = {};
  for (const k of SERVER_GLOBAL_KEYS) {
    if (globalConfig[k] !== undefined) out[k] = globalConfig[k];
  }
  return out;
}

module.exports = {
  SERVER_GLOBAL_KEYS,
  isServerGlobalKey,
  pickUserPreferenceEntries,
  pickServerGlobalEntries,
};
