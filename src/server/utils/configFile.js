/**
 * Config and state file read/write with locking.
 * Merges with default config; strips state keys from config.
 */

const fs = require("fs");
const lockfile = require("proper-lockfile");

const STATE_KEYS = [
  "last_used_model",
  "settings_active_tab",
  "source_language",
  "target_language",
  "app_mode",
  "rewrite_mode",
  "transform_prompt",
  "web_session",
  "web_session_expires_at",
  "web_view",
];

const DEFAULT_STATE = {
  last_used_model: "openrouter/free",
  settings_active_tab: "api",
  source_language: "Detect Language",
  target_language: "Spanish",
  app_mode: "translate",
  rewrite_mode: "Check Spelling & Grammar",
  transform_prompt: null,
  web_session: "",
  web_session_expires_at: null,
  web_view: "workspace",
};

function isStateKey(key) {
  return STATE_KEYS.includes(key);
}

function stripStateKeysAndDeprecated(obj) {
  const out = { ...obj };
  STATE_KEYS.forEach((k) => delete out[k]);
  return out;
}

function canonicalStringify(obj) {
  if (obj === null || typeof obj !== "object") return JSON.stringify(obj);
  if (Array.isArray(obj))
    return "[" + obj.map(canonicalStringify).join(",") + "]";
  const keys = Object.keys(obj).sort();
  return (
    "{" +
    keys
      .map((k) => JSON.stringify(k) + ":" + canonicalStringify(obj[k]))
      .join(",") +
    "}"
  );
}

/**
 * Create config file helpers bound to paths and logger.
 * @param {string} configPath
 * @param {string} statePath
 * @param {string} defaultConfigPath
 * @param {object} log - logger with info, error
 */
function createConfigFile(configPath, statePath, defaultConfigPath, log) {
  const noop = () => {};
  const logger = log || { error: noop, info: noop };

  function readConfig() {
    const lockOpts = { realpath: false };
    let release;
    try {
      const dir = require("path").dirname(configPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      if (!fs.existsSync(configPath)) {
        fs.writeFileSync(configPath, "{}", "utf8");
      }
      release = lockfile.lockSync(configPath, lockOpts);
      let userConfig = {};
      const data = fs.readFileSync(configPath, "utf8");
      if (data.trim()) userConfig = JSON.parse(data);
      let defaultConfig = {};
      if (fs.existsSync(defaultConfigPath)) {
        defaultConfig = JSON.parse(fs.readFileSync(defaultConfigPath, "utf8"));
      }
      const merged = { ...defaultConfig, ...userConfig };
      return stripStateKeysAndDeprecated(merged);
    } catch (err) {
      logger.error("[CONFIG] Failed to load config: " + err.message, { stack: err.stack });
      return {};
    } finally {
      if (release) {
        try {
          release();
        } catch (e) {
          logger.error("[CONFIG] Failed to release config lock:", e.message);
        }
      }
    }
  }

  function writeConfig(config) {
    const lockOpts = { realpath: false };
    let release;
    try {
      const dir = require("path").dirname(configPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      if (!fs.existsSync(configPath)) fs.writeFileSync(configPath, "{}", "utf8");
      release = lockfile.lockSync(configPath, lockOpts);
      const newContent = JSON.stringify(config, null, 2);
      let current;
      try {
        current = fs.readFileSync(configPath, "utf8");
      } catch {
        current = "";
      }
      let currentParsed;
      try {
        currentParsed = current ? JSON.parse(current) : {};
      } catch {
        currentParsed = {};
      }
      if (canonicalStringify(currentParsed) === canonicalStringify(config)) {
        return true;
      }
      fs.writeFileSync(configPath, newContent, "utf8");
      logger.info("[CONFIG] Config saved.");
      return true;
    } catch (err) {
      logger.error("[CONFIG] Failed to save config: " + err.message, { stack: err.stack });
      return false;
    } finally {
      if (release) {
        try {
          release();
        } catch (e) {
          logger.error("[CONFIG] Failed to release config lock:", e.message);
        }
      }
    }
  }

  function loadState() {
    const lockOpts = { realpath: false };
    let release;
    try {
      const dir = require("path").dirname(statePath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      if (fs.existsSync(statePath)) {
        release = lockfile.lockSync(statePath, lockOpts);
        const data = fs.readFileSync(statePath, "utf8");
        const fileState = data.trim() ? JSON.parse(data) : {};
        const state = { ...DEFAULT_STATE, ...fileState };
        state.rewrite_mode = state.rewrite_mode ?? state.rewrite_style;
        return state;
      }
      const state = { ...DEFAULT_STATE };
      if (fs.existsSync(configPath)) {
        try {
          const raw = fs.readFileSync(configPath, "utf8");
          const userConfig = raw.trim() ? JSON.parse(raw) : {};
          STATE_KEYS.forEach((k) => {
            if (userConfig[k] !== undefined) state[k] = userConfig[k];
          });
          state.rewrite_mode = state.rewrite_mode ?? userConfig.rewrite_style;
        } catch { /* ignore */ }
      }
      saveState(state);
      return state;
    } catch (err) {
      logger.error("[STATE] Failed to load state: " + err.message, { stack: err.stack });
      return { ...DEFAULT_STATE };
    } finally {
      if (release) {
        try {
          release();
        } catch (e) {
          logger.error("[STATE] Failed to release state lock:", e.message);
        }
      }
    }
  }

  function saveState(state) {
    const lockOpts = { realpath: false };
    let release;
    try {
      const dir = require("path").dirname(statePath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      if (!fs.existsSync(statePath)) fs.writeFileSync(statePath, "{}", "utf8");
      release = lockfile.lockSync(statePath, lockOpts);
      let current;
      try {
        current = fs.readFileSync(statePath, "utf8");
      } catch {
        current = "";
      }
      let currentParsed;
      try {
        currentParsed = current ? JSON.parse(current) : {};
      } catch {
        currentParsed = {};
      }
      if (canonicalStringify(currentParsed) === canonicalStringify(state)) {
        return true;
      }
      fs.writeFileSync(statePath, JSON.stringify(state, null, 2), "utf8");
      return true;
    } catch (err) {
      logger.error("[STATE] Failed to save state: " + err.message, { stack: err.stack });
      return false;
    } finally {
      if (release) {
        try {
          release();
        } catch (e) {
          logger.error("[STATE] Failed to release state lock:", e.message);
        }
      }
    }
  }

  return {
    readConfig,
    writeConfig,
    loadState,
    saveState,
    isStateKey,
    stripStateKeysAndDeprecated,
    canonicalStringify,
    STATE_KEYS,
    DEFAULT_STATE,
  };
}

module.exports = {
  createConfigFile,
  STATE_KEYS,
  DEFAULT_STATE,
  isStateKey,
  stripStateKeysAndDeprecated,
  canonicalStringify,
};
