/**
 * Routes: GET /api/presets, POST /api/presets/sync
 * Server keeps shared data/presets.json in sync with GitHub on startup and every 6 hours (all users).
 * POST /sync is for Easy-mode clients (manual refresh or switch to Easy); respects per-user mode.
 */

const fs = require("fs");
const path = require("path");
const express = require("express");
const {
  PRESETS_REMOTE_URL,
  PRESETS_REMOTE_SYNC_INTERVAL_MS,
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

function loadBundledDefault(defaultPresetsPath) {
  const raw = readFileIfExists(defaultPresetsPath);
  const parsed = raw ? parsePresetsJson(raw) : null;
  if (parsed) return parsed;
  return { version: "0.0.0", updated_at: "", presets: [] };
}

function readMergedPresets(presetsPath, defaultPresetsPath) {
  const userRaw = readFileIfExists(presetsPath);
  const userParsed = userRaw ? parsePresetsJson(userRaw) : null;
  if (userParsed) return userParsed;
  return loadBundledDefault(defaultPresetsPath);
}

async function fetchRemotePresets() {
  const res = await fetch(PRESETS_REMOTE_URL, {
    headers: { "User-Agent": "transrewrt-server-presets" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  const parsed = parsePresetsJson(text);
  if (!parsed) throw new Error("Invalid remote presets JSON");
  return parsed;
}

/**
 * First run: download catalog into data dir (or copy bundled if offline).
 */
async function bootstrapPresetsFileIfMissing(presetsPath, defaultPresetsPath, log) {
  if (fs.existsSync(presetsPath)) return;
  const dir = path.dirname(presetsPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  try {
    const remote = await fetchRemotePresets();
    fs.writeFileSync(presetsPath, `${JSON.stringify(remote, null, 2)}\n`, "utf8");
    writePresetsRemoteSyncCheckedAt(getPresetsRemoteSyncStatePath(presetsPath));
    const msg = "[presets] First run: downloaded presets.json to data directory";
    log.info(msg);
    console.log(msg);
  } catch (e) {
    const bundled = loadBundledDefault(defaultPresetsPath);
    fs.writeFileSync(presetsPath, `${JSON.stringify(bundled, null, 2)}\n`, "utf8");
    log.warn("[presets] First run: remote failed; copied bundled presets: " + (e?.message || e));
  }
}

/**
 * Fetch remote if appropriate; write presetsPath when updated.
 * @param {{ force?: boolean }} [opts]
 * @returns {Promise<{ updated: boolean, skipped?: boolean, version?: string, updated_at?: string, error?: string }>}
 */
async function syncPresetsFromRemote(presetsPath, defaultPresetsPath, log, opts = {}) {
  const force = opts.force === true;
  const statePath = getPresetsRemoteSyncStatePath(presetsPath);
  const lastChecked = readPresetsRemoteSyncCheckedAt(statePath);
  if (!force && !isPresetsRemoteSyncDue(lastChecked)) {
    const current = readMergedPresets(presetsPath, defaultPresetsPath);
    return {
      updated: false,
      skipped: true,
      version: current.version,
      updated_at: current.updated_at,
    };
  }
  try {
    const remote = await fetchRemotePresets();
    const diskExists = fs.existsSync(presetsPath);
    let localParsed;
    if (diskExists) {
      const raw = readFileIfExists(presetsPath);
      localParsed = raw ? parsePresetsJson(raw) : null;
    } else {
      localParsed = readMergedPresets(presetsPath, defaultPresetsPath);
    }
    const current = localParsed || { version: "0.0.0", updated_at: "", presets: [] };
    const write = shouldWriteRemotePresetsOverLocal({
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
    const dir = path.dirname(presetsPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(presetsPath, `${JSON.stringify(remote, null, 2)}\n`, "utf8");
    const msg = formatPresetsRemoteUpdateLog(remote, current);
    log.info(msg);
    console.log(msg);
    return {
      updated: true,
      version: remote.version,
      updated_at: remote.updated_at,
    };
  } catch (e) {
    log.warn("[presets] Remote sync failed: " + (e?.message || e));
    const current = readMergedPresets(presetsPath, defaultPresetsPath);
    return {
      updated: false,
      error: String(e?.message || e),
      version: current.version,
      updated_at: current.updated_at,
    };
  } finally {
    writePresetsRemoteSyncCheckedAt(statePath);
  }
}

/**
 * @param {string} presetsPath
 * @param {string} defaultPresetsPath
 * @param {import("../logger").Logger} log
 * @param {import("../db/appDb")} appDb
 */
function createPresetsRouter(presetsPath, defaultPresetsPath, log, appDb) {
  const router = express.Router();

  router.get("/", (req, res) => {
    try {
      const auth = req.authSession;
      if (!auth?.userId) {
        return res.status(401).json({ error: "Authentication required" });
      }
      const data = readMergedPresets(presetsPath, defaultPresetsPath);
      res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
      res.json(data);
    } catch (err) {
      log.error("[API] GET /api/presets - " + err.message, { stack: err.stack });
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
        const data = readMergedPresets(presetsPath, defaultPresetsPath);
        return res.json({
          updated: false,
          skipped: true,
          reason: "advanced",
          version: data.version,
          updated_at: data.updated_at,
        });
      }
      const force = req.body && req.body.force === true;
      const result = await syncPresetsFromRemote(presetsPath, defaultPresetsPath, log, { force });
      const data = readMergedPresets(presetsPath, defaultPresetsPath);
      res.json({
        ...result,
        version: data.version ?? result.version,
        updated_at: data.updated_at ?? result.updated_at,
      });
    } catch (err) {
      log.error("[API] POST /api/presets/sync - " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  return router;
}

/**
 * Bootstrap missing file, then sync immediately and every 6 hours (shared catalog for all users).
 * @returns {ReturnType<typeof setInterval>}
 */
function startPresetsRemoteSync(presetsPath, defaultPresetsPath, log) {
  const run = async () => {
    try {
      await bootstrapPresetsFileIfMissing(presetsPath, defaultPresetsPath, log);
    } catch (e) {
      log.warn("[presets] bootstrap: " + (e?.message || e));
    }
    try {
      await syncPresetsFromRemote(presetsPath, defaultPresetsPath, log);
    } catch (e) {
      log.warn("[presets] syncPresetsFromRemote: " + (e?.message || e));
    }
  };
  void run();
  return setInterval(() => {
    void run();
  }, PRESETS_REMOTE_SYNC_INTERVAL_MS);
}

module.exports = {
  createPresetsRouter,
  startPresetsRemoteSync,
  syncPresetsFromRemote,
  PRESETS_REMOTE_URL,
};
