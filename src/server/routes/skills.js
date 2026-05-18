/**
 * Routes: GET /api/skills, POST /api/skills/sync
 * Server keeps shared data/skills.json in sync with GitHub on startup and every 6 hours (all users).
 * POST /sync is for Easy-mode clients (manual refresh or switch to Easy); respects per-user mode.
 */

const fs = require("fs");
const path = require("path");
const express = require("express");
const {
  SKILLS_REMOTE_URL,
  SKILLS_REMOTE_SYNC_INTERVAL_MS,
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

function loadBundledDefault(defaultSkillsPath) {
  const raw = readFileIfExists(defaultSkillsPath);
  const parsed = raw ? parseSkillsJson(raw) : null;
  if (parsed) return parsed;
  return { version: "0.0.0", updated_at: "", skills: [] };
}

function readMergedSkills(skillsPath, defaultSkillsPath) {
  const userRaw = readFileIfExists(skillsPath);
  const userParsed = userRaw ? parseSkillsJson(userRaw) : null;
  if (userParsed) return userParsed;
  return loadBundledDefault(defaultSkillsPath);
}

async function fetchRemoteSkills() {
  const res = await fetch(SKILLS_REMOTE_URL, {
    headers: { "User-Agent": "transrewrt-server-skills" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  const parsed = parseSkillsJson(text);
  if (!parsed) throw new Error("Invalid remote skills JSON");
  return parsed;
}

/**
 * First run: download catalog into data dir (or copy bundled if offline).
 */
async function bootstrapSkillsFileIfMissing(skillsPath, defaultSkillsPath, log) {
  if (fs.existsSync(skillsPath)) return;
  const dir = path.dirname(skillsPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  try {
    const remote = await fetchRemoteSkills();
    fs.writeFileSync(skillsPath, `${JSON.stringify(remote, null, 2)}\n`, "utf8");
    writeSkillsRemoteSyncCheckedAt(getSkillsRemoteSyncStatePath(skillsPath));
    const msg = "[skills] First run: downloaded skills.json to data directory";
    log.info(msg);
    console.log(msg);
  } catch (e) {
    const bundled = loadBundledDefault(defaultSkillsPath);
    fs.writeFileSync(skillsPath, `${JSON.stringify(bundled, null, 2)}\n`, "utf8");
    log.warn("[skills] First run: remote failed; copied bundled skills: " + (e?.message || e));
  }
}

/**
 * Fetch remote if appropriate; write skillsPath when updated.
 * @param {{ force?: boolean }} [opts]
 * @returns {Promise<{ updated: boolean, skipped?: boolean, version?: string, updated_at?: string, error?: string }>}
 */
async function syncSkillsFromRemote(skillsPath, defaultSkillsPath, log, opts = {}) {
  const force = opts.force === true;
  const statePath = getSkillsRemoteSyncStatePath(skillsPath);
  const lastChecked = readSkillsRemoteSyncCheckedAt(statePath);
  if (!force && !isSkillsRemoteSyncDue(lastChecked)) {
    const current = readMergedSkills(skillsPath, defaultSkillsPath);
    return {
      updated: false,
      skipped: true,
      version: current.version,
      updated_at: current.updated_at,
    };
  }
  try {
    const remote = await fetchRemoteSkills();
    const diskExists = fs.existsSync(skillsPath);
    let localParsed;
    if (diskExists) {
      const raw = readFileIfExists(skillsPath);
      localParsed = raw ? parseSkillsJson(raw) : null;
    } else {
      localParsed = readMergedSkills(skillsPath, defaultSkillsPath);
    }
    const current = localParsed || { version: "0.0.0", updated_at: "", skills: [] };
    const write = shouldWriteRemoteSkillsOverLocal({
      userPathExists: diskExists,
      localParsed: current,
      remoteParsed: remote,
    });
    if (!write) {
      return {
        updated: false,
        version: current.version,
        updated_at: current.updated_at,
      };
    }
    const dir = path.dirname(skillsPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(skillsPath, `${JSON.stringify(remote, null, 2)}\n`, "utf8");
    const msg = formatSkillsRemoteUpdateLog(remote, current);
    log.info(msg);
    console.log(msg);
    return {
      updated: true,
      version: remote.version,
      updated_at: remote.updated_at,
    };
  } catch (e) {
    log.warn("[skills] Remote sync failed: " + (e?.message || e));
    const current = readMergedSkills(skillsPath, defaultSkillsPath);
    return {
      updated: false,
      error: String(e?.message || e),
      version: current.version,
      updated_at: current.updated_at,
    };
  } finally {
    writeSkillsRemoteSyncCheckedAt(statePath);
  }
}

/**
 * @param {string} skillsPath
 * @param {string} defaultSkillsPath
 * @param {import("../logger").Logger} log
 * @param {import("../db/appDb")} appDb
 */
function createSkillsRouter(skillsPath, defaultSkillsPath, log, appDb) {
  const router = express.Router();

  router.get("/", (req, res) => {
    try {
      const auth = req.authSession;
      if (!auth?.userId) {
        return res.status(401).json({ error: "Authentication required" });
      }
      const data = readMergedSkills(skillsPath, defaultSkillsPath);
      res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
      res.json(data);
    } catch (err) {
      log.error("[API] GET /api/skills - " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/sync", async (req, res) => {
    try {
      const auth = req.authSession;
      if (!auth?.userId) {
        return res.status(401).json({ error: "Authentication required" });
      }
      const userPrefs = appDb.getUserPreferencesData(auth.userId) || {};
      if (!isEasyExperienceMode(userPrefs.mode)) {
        const data = readMergedSkills(skillsPath, defaultSkillsPath);
        return res.json({
          updated: false,
          skipped: true,
          reason: "advanced",
          version: data.version,
          updated_at: data.updated_at,
        });
      }
      const force = req.body && req.body.force === true;
      const result = await syncSkillsFromRemote(skillsPath, defaultSkillsPath, log, { force });
      const data = readMergedSkills(skillsPath, defaultSkillsPath);
      res.json({
        ...result,
        version: data.version ?? result.version,
        updated_at: data.updated_at ?? result.updated_at,
      });
    } catch (err) {
      log.error("[API] POST /api/skills/sync - " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  return router;
}

/**
 * Bootstrap missing file, then sync immediately and every 6 hours (shared catalog for all users).
 * @returns {ReturnType<typeof setInterval>}
 */
function startSkillsRemoteSync(skillsPath, defaultSkillsPath, log) {
  const run = async () => {
    try {
      await bootstrapSkillsFileIfMissing(skillsPath, defaultSkillsPath, log);
    } catch (e) {
      log.warn("[skills] bootstrap: " + (e?.message || e));
    }
    try {
      await syncSkillsFromRemote(skillsPath, defaultSkillsPath, log);
    } catch (e) {
      log.warn("[skills] syncSkillsFromRemote: " + (e?.message || e));
    }
  };
  void run();
  return setInterval(() => {
    void run();
  }, SKILLS_REMOTE_SYNC_INTERVAL_MS);
}

module.exports = {
  createSkillsRouter,
  startSkillsRemoteSync,
  syncSkillsFromRemote,
  SKILLS_REMOTE_URL,
};
