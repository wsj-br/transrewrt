/**
 * Factory defaults for web user_preferences: ship `config_default.json` merged with
 * DEFAULT_STATE from configFile, minus server-only keys (same shape as GET /api/config).
 */

const fs = require("fs");
const { pickUserPreferenceEntries } = require("./webConfigKeys.js");

/**
 * @param {string} defaultConfigPath - path to config_default.json
 * @param {object} [defaultState] - e.g. createConfigFile().DEFAULT_STATE
 * @returns {Record<string, unknown>}
 */
function buildDefaultUserPreferencesPayload(defaultConfigPath, defaultState) {
  let fileDefaults = {};
  try {
    if (defaultConfigPath && fs.existsSync(defaultConfigPath)) {
      fileDefaults = JSON.parse(fs.readFileSync(defaultConfigPath, "utf8"));
    }
  } catch {
    /* ignore */
  }
  const state = defaultState && typeof defaultState === "object" ? defaultState : {};
  const merged = { ...fileDefaults, ...state };
  return pickUserPreferenceEntries(merged);
}

module.exports = {
  buildDefaultUserPreferencesPayload,
};
