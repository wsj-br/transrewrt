/**
 * IPC handlers for config, state, debug file writes, and build timestamp.
 */

const path = require("path");
const fs = require("fs");
const { app, BrowserWindow } = require("electron");

function configUnchanged(existing, value) {
  if (existing === value) return true;
  if (
    typeof value === "object" &&
    value !== null &&
    typeof existing === "object" &&
    existing !== null
  ) {
    return JSON.stringify(existing) === JSON.stringify(value);
  }
  return false;
}

/**
 * Register config-related IPC handlers.
 * @param {import("electron").IpcMain} ipcMain
 * @param {object} ctx - Context from main.js
 * @param {() => object} ctx.getConfigCache
 * @param {() => object} ctx.getStateCache
 * @param {(c: object) => void} ctx.setConfigCache
 * @param {(s: object) => void} ctx.setStateCache
 * @param {() => object} ctx.loadConfigFromFile
 * @param {(config: object) => boolean} ctx.saveConfigToFile
 * @param {() => object} ctx.loadStateFromFile
 * @param {(state: object) => boolean} ctx.saveStateToFile
 * @param {(key: string) => boolean} ctx.isStateKey
 * @param {(config: object) => string} ctx.canonicalConfigString
 * @param {() => string|null} ctx.getBuildTimestamp
 */
function registerConfigIpc(ipcMain, ctx) {
  const {
    getConfigCache,
    getStateCache,
    setConfigCache,
    setStateCache,
    saveConfigToFile,
    saveStateToFile,
    isStateKey,
    canonicalConfigString,
    getBuildTimestamp,
  } = ctx;

  const notifySettingsUpdated = () => {
    BrowserWindow.getAllWindows().forEach((win) => {
      if (win && !win.isDestroyed()) win.webContents.send("settings-updated");
    });
  };

  ipcMain.handle("config:get", () => {
    const cache = getConfigCache();
    const state = getStateCache();
    const sanitized = { ...cache };
    delete sanitized.api_key;
    delete sanitized.key_seed;
    sanitized.api_key_configured = !!(
      cache.api_key && String(cache.api_key).trim()
    );
    sanitized.key_seed_configured = !!(
      cache.key_seed && String(cache.key_seed).trim()
    );
    return Promise.resolve({ ...sanitized, ...state });
  });

  ipcMain.handle("config:set", (_, key, value) => {
    if (key === undefined) return Promise.resolve(false);
    const configCache = getConfigCache();
    const stateCache = getStateCache();
    if (isStateKey(key)) {
      if (configUnchanged(stateCache[key], value)) return Promise.resolve(true);
      const next = { ...stateCache, [key]: value };
      setStateCache(next);
      const ok = saveStateToFile(next);
      if (ok) notifySettingsUpdated();
      return Promise.resolve(ok);
    }
    if (configUnchanged(configCache[key], value)) return Promise.resolve(true);
    const next = { ...configCache, [key]: value };
    setConfigCache(next);
    const ok = saveConfigToFile(next);
    if (ok) notifySettingsUpdated();
    return Promise.resolve(ok);
  });

  ipcMain.handle("config:setAll", (_, newConfig) => {
    if (typeof newConfig !== "object") return Promise.resolve(false);
    const configPart = {};
    const statePart = {};
    Object.keys(newConfig).forEach((k) => {
      if (k === "api_key" || k === "key_seed") return;
      if (isStateKey(k)) statePart[k] = newConfig[k];
      else configPart[k] = newConfig[k];
    });
    let configSaved = false;
    let stateSaved = false;
    const configCache = getConfigCache();
    const stateCache = getStateCache();
    if (Object.keys(configPart).length > 0) {
      const nextConfig = { ...configCache, ...configPart };
      if (
        canonicalConfigString(configCache) !== canonicalConfigString(nextConfig)
      ) {
        setConfigCache(nextConfig);
        configSaved = saveConfigToFile(nextConfig);
      }
    }
    if (Object.keys(statePart).length > 0) {
      const nextState = { ...stateCache, ...statePart };
      if (
        canonicalConfigString(stateCache) !== canonicalConfigString(nextState)
      ) {
        setStateCache(nextState);
        stateSaved = saveStateToFile(nextState);
      }
    }
    if (configSaved || stateSaved) notifySettingsUpdated();
    return Promise.resolve(true);
  });

  ipcMain.handle("config:getSecretsForRequest", () => {
    const cache = getConfigCache();
    return Promise.resolve({
      api_key: cache.api_key ?? "",
      key_seed: cache.key_seed ?? "",
    });
  });

  ipcMain.handle("write-last-api-result", (_, payload) => {
    try {
      const dir = app.getPath("userData");
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const filePath = path.join(dir, "last_api_result.json");
      const MAX_RAW_CHUNKS = 20;
      let toWrite = payload;
      if (payload && Array.isArray(payload.raw) && payload.raw.length > MAX_RAW_CHUNKS) {
        toWrite = { ...payload, raw: payload.raw.slice(0, MAX_RAW_CHUNKS) };
      }
      const json = JSON.stringify(toWrite, null, 2);
      fs.writeFileSync(filePath, json, "utf8");
      return Promise.resolve(true);
    } catch (err) {
      console.error("Failed to write last_api_result.json", err);
      return Promise.resolve(false);
    }
  });

  ipcMain.handle("write-debug-file", (_, filename, data) => {
    try {
      const dir = app.getPath("userData");
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const filePath = path.join(dir, filename);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
      return Promise.resolve(true);
    } catch (err) {
      console.error(`Failed to write ${filename}:`, err);
      return Promise.resolve(false);
    }
  });

  ipcMain.handle("write-proxy-debug-log", (_, line) => {
    try {
      const dir = app.getPath("userData");
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const filePath = path.join(dir, "proxy-debug.log");
      const timestamp = new Date().toISOString();
      fs.appendFileSync(filePath, `${timestamp} ${line}\n`, "utf8");
      return Promise.resolve(true);
    } catch (err) {
      console.error("Failed to write proxy-debug.log", err);
      return Promise.resolve(false);
    }
  });

  ipcMain.handle("get-build-timestamp", () =>
    Promise.resolve(getBuildTimestamp()),
  );
}

module.exports = { registerConfigIpc };
