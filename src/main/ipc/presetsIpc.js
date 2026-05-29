/**
 * IPC: read bundled + user presets.json; optional remote update (GitHub).
 */

const fs = require("fs");
const path = require("path");
const { getPresetsFilePath, getDefaultPresetsPathForLoad } = require("../configPath");
const {
  PRESETS_REMOTE_URL,
  parsePresetsJson,
  shouldWriteRemotePresetsOverLocal,
  formatPresetsRemoteUpdateLog,
  getPresetsRemoteSyncStatePath,
  readPresetsRemoteSyncCheckedAt,
  writePresetsRemoteSyncCheckedAt,
  isPresetsRemoteSyncDue,
  isEasyExperienceMode,
} = require("../../shared/presetsCatalog");

function readFileIfExists(p) {
  try {
    if (!p || !fs.existsSync(p)) return null;
    return fs.readFileSync(p, "utf8");
  } catch {
    return null;
  }
}

function loadBundledPresets() {
  const defPath = getDefaultPresetsPathForLoad();
  const raw = readFileIfExists(defPath);
  const parsed = raw ? parsePresetsJson(raw) : null;
  if (parsed) return parsed;
  console.warn("[presets] Bundled presets.json missing or invalid at", defPath);
  return { version: "0.0.0", updated_at: "", presets: [] };
}

function readPresetsMerged() {
  const userPath = getPresetsFilePath();
  const userRaw = readFileIfExists(userPath);
  const userParsed = userRaw ? parsePresetsJson(userRaw) : null;
  if (userParsed) return userParsed;
  return loadBundledPresets();
}

async function fetchRemotePresets() {
  const res = await fetch(PRESETS_REMOTE_URL, {
    headers: { "User-Agent": "transrewrt-electron-presets" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  const parsed = parsePresetsJson(text);
  if (!parsed) throw new Error("Invalid remote presets JSON");
  return parsed;
}

/**
 * First launch: ensure user data dir contains presets.json.
 * Advanced mode: bundled copy only. Easy mode: try remote, else bundled.
 * @param {() => object} [getConfig]
 */
async function ensureUserPresetsOnDisk(getConfig = () => ({})) {
  const userPath = getPresetsFilePath();
  if (fs.existsSync(userPath)) return { created: false };
  const dir = path.dirname(userPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const bundled = loadBundledPresets();
  if (!isEasyExperienceMode(getConfig()?.mode)) {
    fs.writeFileSync(userPath, `${JSON.stringify(bundled, null, 2)}\n`, "utf8");
    console.log("[presets] First run (advanced): copied bundled presets.json to data directory");
    return { created: true, fromBundled: true };
  }
  try {
    const remote = await fetchRemotePresets();
    fs.writeFileSync(userPath, `${JSON.stringify(remote, null, 2)}\n`, "utf8");
    writePresetsRemoteSyncCheckedAt(getPresetsRemoteSyncStatePath(userPath));
    console.log("[presets] First run: downloaded presets.json to data directory");
    return { created: true };
  } catch (e) {
    fs.writeFileSync(userPath, `${JSON.stringify(bundled, null, 2)}\n`, "utf8");
    console.warn("[presets] First run: remote failed, copied bundled presets:", e?.message || e);
    return { created: true, fromBundled: true };
  }
}

/**
 * @param {import("electron").IpcMain} ipcMain
 * @param {() => object} [getConfig]
 */
function registerPresetsIpc(ipcMain, getConfig = () => ({})) {
  ipcMain.handle("presets:read", () => {
    try {
      return readPresetsMerged();
    } catch (e) {
      console.error("[presets] read failed:", e);
      return loadBundledPresets();
    }
  });

  ipcMain.handle("presets:syncState", () => {
    try {
      const statePath = getPresetsRemoteSyncStatePath(getPresetsFilePath());
      return { last_checked_at: readPresetsRemoteSyncCheckedAt(statePath) };
    } catch {
      return { last_checked_at: 0 };
    }
  });

  ipcMain.handle("presets:updateFromRemote", async (_evt, opts = {}) => {
    const force = opts && opts.force === true;
    const current = readPresetsMerged();
    const userPath = getPresetsFilePath();
    const statePath = getPresetsRemoteSyncStatePath(userPath);
    if (!force && !isEasyExperienceMode(getConfig()?.mode)) {
      return {
        updated: false,
        skipped: true,
        reason: "advanced",
        version: current.version,
        updated_at: current.updated_at,
        last_checked_at: readPresetsRemoteSyncCheckedAt(statePath),
      };
    }
    const lastChecked = readPresetsRemoteSyncCheckedAt(statePath);
    if (!force && !isPresetsRemoteSyncDue(lastChecked)) {
      return {
        updated: false,
        skipped: true,
        version: current.version,
        updated_at: current.updated_at,
        last_checked_at: lastChecked,
      };
    }
    let result;
    try {
      const remote = await fetchRemotePresets();
      const userExists = fs.existsSync(userPath);
      let localParsed;
      if (userExists) {
        const raw = readFileIfExists(userPath);
        localParsed = raw ? parsePresetsJson(raw) : null;
      } else {
        localParsed = current;
      }
      const local = localParsed || { version: "0.0.0", updated_at: "", presets: [] };
      const write = shouldWriteRemotePresetsOverLocal({
        userPathExists: userExists,
        localParsed: local,
        remoteParsed: remote,
      });
      if (!write) {
        result = {
          updated: false,
          version: local.version,
          updated_at: local.updated_at,
        };
      } else {
        const dir = path.dirname(userPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(userPath, `${JSON.stringify(remote, null, 2)}\n`, "utf8");
        console.log(formatPresetsRemoteUpdateLog(remote, local));
        result = {
          updated: true,
          version: remote.version,
          updated_at: remote.updated_at,
        };
      }
    } catch (e) {
      console.warn("[presets] Remote update failed:", e?.message || e);
      result = {
        updated: false,
        error: String(e?.message || e),
        version: current.version,
        updated_at: current.updated_at,
      };
    } finally {
      writePresetsRemoteSyncCheckedAt(statePath);
    }
    return {
      ...result,
      last_checked_at: readPresetsRemoteSyncCheckedAt(statePath),
    };
  });
}

module.exports = {
  registerPresetsIpc,
  ensureUserPresetsOnDisk,
  PRESETS_REMOTE_URL,
};
