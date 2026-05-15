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

/** First launch: ensure user data dir contains skills.json (download or copy bundled). */
async function ensureUserSkillsOnDisk() {
  const userPath = getSkillsFilePath();
  if (fs.existsSync(userPath)) return { created: false };
  const dir = path.dirname(userPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  try {
    const remote = await fetchRemoteSkills();
    fs.writeFileSync(userPath, `${JSON.stringify(remote, null, 2)}\n`, "utf8");
    console.log("[skills] First run: downloaded skills.json to data directory");
    return { created: true };
  } catch (e) {
    const bundled = loadBundledSkills();
    fs.writeFileSync(userPath, `${JSON.stringify(bundled, null, 2)}\n`, "utf8");
    console.warn("[skills] First run: remote failed, copied bundled skills:", e?.message || e);
    return { created: true, fromBundled: true };
  }
}

/**
 * @param {import("electron").IpcMain} ipcMain
 */
function registerSkillsIpc(ipcMain) {
  ipcMain.handle("skills:read", () => {
    try {
      return readSkillsMerged();
    } catch (e) {
      console.error("[skills] read failed:", e);
      return loadBundledSkills();
    }
  });

  ipcMain.handle("skills:updateFromRemote", async () => {
    try {
      const remote = await fetchRemoteSkills();
      const userPath = getSkillsFilePath();
      const userExists = fs.existsSync(userPath);
      let localParsed;
      if (userExists) {
        const raw = readFileIfExists(userPath);
        localParsed = raw ? parseSkillsJson(raw) : null;
      } else {
        localParsed = readSkillsMerged();
      }
      const current = localParsed || { version: "0.0.0", updated_at: "", skills: [] };
      const write = shouldWriteRemoteSkillsOverLocal({
        userPathExists: userExists,
        localParsed: current,
        remoteParsed: remote,
      });
      if (!write) {
        return { updated: false, version: current.version };
      }
      const dir = path.dirname(userPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(userPath, `${JSON.stringify(remote, null, 2)}\n`, "utf8");
      console.log(
        `[skills] Updated skills.json to version ${remote.version} (was ${current.version || "bundled"})`,
      );
      return { updated: true, version: remote.version };
    } catch (e) {
      console.warn("[skills] Remote update failed:", e?.message || e);
      return { updated: false, error: String(e?.message || e) };
    }
  });
}

module.exports = {
  registerSkillsIpc,
  ensureUserSkillsOnDisk,
  SKILLS_REMOTE_URL,
};
