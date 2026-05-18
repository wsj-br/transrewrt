/**
 * IPC: read bundled + user skills.json; optional remote update (GitHub).
 */

const fs = require("fs");
const path = require("path");
const { getSkillsFilePath, getDefaultSkillsPathForLoad } = require("../configPath");
const {
  SKILLS_REMOTE_URL,
  parseSkillsJson,
  shouldWriteRemoteSkillsOverLocal,
  formatSkillsRemoteUpdateLog,
  getSkillsRemoteSyncStatePath,
  readSkillsRemoteSyncCheckedAt,
  writeSkillsRemoteSyncCheckedAt,
  isSkillsRemoteSyncDue,
  isEasyExperienceMode,
} = require("../../shared/skillsCatalog");

function readFileIfExists(p) {
  try {
    if (!p || !fs.existsSync(p)) return null;
    return fs.readFileSync(p, "utf8");
  } catch {
    return null;
  }
}

function loadBundledSkills() {
  const defPath = getDefaultSkillsPathForLoad();
  const raw = readFileIfExists(defPath);
  const parsed = raw ? parseSkillsJson(raw) : null;
  if (parsed) return parsed;
  console.warn("[skills] Bundled skills.json missing or invalid at", defPath);
  return { version: "0.0.0", updated_at: "", skills: [] };
}

function readSkillsMerged() {
  const userPath = getSkillsFilePath();
  const userRaw = readFileIfExists(userPath);
  const userParsed = userRaw ? parseSkillsJson(userRaw) : null;
  if (userParsed) return userParsed;
  return loadBundledSkills();
}

async function fetchRemoteSkills() {
  const res = await fetch(SKILLS_REMOTE_URL, {
    headers: { "User-Agent": "transrewrt-electron-skills" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  const parsed = parseSkillsJson(text);
  if (!parsed) throw new Error("Invalid remote skills JSON");
  return parsed;
}

/**
 * First launch: ensure user data dir contains skills.json.
 * Advanced mode: bundled copy only. Easy mode: try remote, else bundled.
 * @param {() => object} [getConfig]
 */
async function ensureUserSkillsOnDisk(getConfig = () => ({})) {
  const userPath = getSkillsFilePath();
  if (fs.existsSync(userPath)) return { created: false };
  const dir = path.dirname(userPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const bundled = loadBundledSkills();
  if (!isEasyExperienceMode(getConfig()?.mode)) {
    fs.writeFileSync(userPath, `${JSON.stringify(bundled, null, 2)}\n`, "utf8");
    console.log("[skills] First run (advanced): copied bundled skills.json to data directory");
    return { created: true, fromBundled: true };
  }
  try {
    const remote = await fetchRemoteSkills();
    fs.writeFileSync(userPath, `${JSON.stringify(remote, null, 2)}\n`, "utf8");
    writeSkillsRemoteSyncCheckedAt(getSkillsRemoteSyncStatePath(userPath));
    console.log("[skills] First run: downloaded skills.json to data directory");
    return { created: true };
  } catch (e) {
    fs.writeFileSync(userPath, `${JSON.stringify(bundled, null, 2)}\n`, "utf8");
    console.warn("[skills] First run: remote failed, copied bundled skills:", e?.message || e);
    return { created: true, fromBundled: true };
  }
}

/**
 * @param {import("electron").IpcMain} ipcMain
 * @param {() => object} [getConfig]
 */
function registerSkillsIpc(ipcMain, getConfig = () => ({})) {
  ipcMain.handle("skills:read", () => {
    try {
      return readSkillsMerged();
    } catch (e) {
      console.error("[skills] read failed:", e);
      return loadBundledSkills();
    }
  });

  ipcMain.handle("skills:updateFromRemote", async (_evt, opts = {}) => {
    const force = opts && opts.force === true;
    const current = readSkillsMerged();
    if (!force && !isEasyExperienceMode(getConfig()?.mode)) {
      return {
        updated: false,
        skipped: true,
        reason: "advanced",
        version: current.version,
        updated_at: current.updated_at,
      };
    }
    const userPath = getSkillsFilePath();
    const statePath = getSkillsRemoteSyncStatePath(userPath);
    const lastChecked = readSkillsRemoteSyncCheckedAt(statePath);
    if (!force && !isSkillsRemoteSyncDue(lastChecked)) {
      return {
        updated: false,
        skipped: true,
        version: current.version,
        updated_at: current.updated_at,
      };
    }
    try {
      const remote = await fetchRemoteSkills();
      const userExists = fs.existsSync(userPath);
      let localParsed;
      if (userExists) {
        const raw = readFileIfExists(userPath);
        localParsed = raw ? parseSkillsJson(raw) : null;
      } else {
        localParsed = current;
      }
      const local = localParsed || { version: "0.0.0", updated_at: "", skills: [] };
      const write = shouldWriteRemoteSkillsOverLocal({
        userPathExists: userExists,
        localParsed: local,
        remoteParsed: remote,
      });
      if (!write) {
        return {
          updated: false,
          version: local.version,
          updated_at: local.updated_at,
        };
      }
      const dir = path.dirname(userPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(userPath, `${JSON.stringify(remote, null, 2)}\n`, "utf8");
      console.log(formatSkillsRemoteUpdateLog(remote, local));
      return {
        updated: true,
        version: remote.version,
        updated_at: remote.updated_at,
      };
    } catch (e) {
      console.warn("[skills] Remote update failed:", e?.message || e);
      return {
        updated: false,
        error: String(e?.message || e),
        version: current.version,
        updated_at: current.updated_at,
      };
    } finally {
      writeSkillsRemoteSyncCheckedAt(statePath);
    }
  });
}

module.exports = {
  registerSkillsIpc,
  ensureUserSkillsOnDisk,
  SKILLS_REMOTE_URL,
};
