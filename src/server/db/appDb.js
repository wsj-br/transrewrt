/**
 * SQLite DB for server. Uses shared schema (src/shared/db/appSchema.js) for api_calls and custom_prompts.
 * Adds server-only users and sessions tables for web auth.
 */

const path = require("path");
const crypto = require("crypto");
const Database = require("better-sqlite3");
const argon2 = require("argon2");
const { applyAppSchema, promptTargetLanguageToDb } = require("../../shared/db/appSchema.js");
const {
  pickUserPreferenceEntries,
  stripUserKeysFromGlobalConfig,
} = require("../utils/webConfigKeys.js");
const { buildDefaultUserPreferencesPayload } = require("../utils/defaultUserPreferences.js");

/** Must match src/renderer/constants.js DEFAULT_ADMIN_* */
const DEFAULT_ADMIN_USERNAME = "admin";
const DEFAULT_ADMIN_PASSWORD = "transrewrt26";

const SESSION_STALE_GRACE_MS = 30 * 24 * 60 * 60 * 1000;

let db = null;
let log = null;

/**
 * @param {object} [configFile] - from createConfigFile (needs DEFAULT_STATE)
 * @param {string} [defaultConfigPath] - path to config_default.json
 */
async function seedDefaultAdmin(configFile, defaultConfigPath) {
  if (!db) return;
  const row = db.prepare("SELECT id FROM users LIMIT 1").get();
  if (row) return;
  const id = crypto.randomUUID();
  const now = Date.now();
  const passwordHash = await argon2.hash(DEFAULT_ADMIN_PASSWORD, {
    type: argon2.argon2id,
    memoryCost: 19456,
    timeCost: 2,
    parallelism: 1,
  });
  db.prepare(
    `INSERT INTO users (id, username, password_hash, role, created_at, last_login, last_update, must_change_password)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  ).run(id, DEFAULT_ADMIN_USERNAME, passwordHash, "admin", now, null, now, 1);
  log.info("[SERVER] Seeded default admin user (username: " + DEFAULT_ADMIN_USERNAME + ")");
  if (configFile && defaultConfigPath) {
    const payload = buildDefaultUserPreferencesPayload(defaultConfigPath, configFile.DEFAULT_STATE);
    if (Object.keys(payload).length > 0) {
      mergeUserPreferencesData(id, payload);
    }
  }
}

function initDb(dataDir, logger) {
  log = logger || { info: () => {}, warn: () => {}, error: () => {} };
  const DB_PATH = path.join(dataDir, "transrewrt.db");
  try {
    db = new Database(DB_PATH);
    applyAppSchema(db);
    db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'user',
        created_at INTEGER NOT NULL,
        last_login INTEGER,
        last_update INTEGER NOT NULL,
        must_change_password INTEGER NOT NULL DEFAULT 0
      )
    `);
    db.exec("CREATE INDEX IF NOT EXISTS idx_users_username ON users (username)");
    db.exec(`
      CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        last_seen_at INTEGER NOT NULL,
        expires_at INTEGER NOT NULL,
        last_ip TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);
    db.exec("CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions (expires_at)");
    db.exec("CREATE INDEX IF NOT EXISTS idx_sessions_last_seen_at ON sessions (last_seen_at)");
    db.exec("CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions (user_id)");
    db.exec(`
      CREATE TABLE IF NOT EXISTS user_preferences (
        user_id TEXT PRIMARY KEY,
        data TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);
    db.exec(`
      CREATE TABLE IF NOT EXISTS app_meta (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      )
    `);
  } catch (err) {
    log.error("[SERVER] Failed to init SQLite DB: " + err.message, { stack: err.stack });
    db = null;
  }
  return db;
}

function getDb() {
  return db;
}

function assignCustomPromptsToAdmin() {
  if (!db) return;
  try {
    const admin = db
      .prepare("SELECT id FROM users WHERE role = 'admin' ORDER BY created_at ASC LIMIT 1")
      .get();
    if (!admin) return;
    const result = db.prepare("UPDATE custom_prompts SET user_id = ? WHERE user_id IS NULL").run(admin.id);
    if (result.changes > 0) {
      log.info(`[SERVER] Assigned ${result.changes} legacy transform prompt(s) to admin user.`);
    }
  } catch (err) {
    log.error("[SERVER] assignCustomPromptsToAdmin: " + err.message, { stack: err.stack });
  }
}

/**
 * One-time: copy shared config+state into each user's row, then strip user keys from global files.
 * Per-user data is `{ ...config_default+DEFAULT_STATE, ...legacy }` so fresh installs match shipped defaults.
 */
function migrateUserPreferencesFromGlobalConfig(configFile, defaultConfigPath) {
  if (!db || !configFile) return;
  try {
    const done = db.prepare("SELECT value FROM app_meta WHERE key = ?").get("user_prefs_migrated_from_global");
    if (done?.value === "1") return;

    const readConfig = configFile.readConfig;
    const loadState = configFile.loadState;
    const factoryDefaults = buildDefaultUserPreferencesPayload(
      defaultConfigPath,
      configFile.DEFAULT_STATE,
    );
    const combined = { ...readConfig(), ...loadState() };
    const fromLegacy = pickUserPreferenceEntries(combined);
    const userKeys = { ...factoryDefaults, ...fromLegacy };

    const users = db.prepare("SELECT id FROM users").all();
    if (users.length === 0) return;

    const insert = db.prepare("INSERT OR IGNORE INTO user_preferences (user_id, data) VALUES (?, ?)");
    for (const u of users) {
      const exists = db.prepare("SELECT 1 FROM user_preferences WHERE user_id = ?").get(u.id);
      if (exists) continue;
      insert.run(u.id, JSON.stringify(userKeys));
    }

    const stripped = stripUserKeysFromGlobalConfig(readConfig());
    configFile.writeConfig(stripped);
    const { DEFAULT_STATE } = configFile;
    configFile.saveState({ ...DEFAULT_STATE });

    db.prepare("INSERT OR REPLACE INTO app_meta (key, value) VALUES (?, ?)").run(
      "user_prefs_migrated_from_global",
      "1",
    );
    log.info("[SERVER] Per-user preferences: migrated shared config/state into user_preferences.");
  } catch (err) {
    log.error("[SERVER] migrateUserPreferencesFromGlobalConfig: " + err.message, { stack: err.stack });
  }
}

function getUserPreferencesData(userId) {
  if (!db || !userId) return null;
  try {
    const row = db.prepare("SELECT data FROM user_preferences WHERE user_id = ?").get(userId);
    if (!row) return null;
    const parsed = JSON.parse(row.data);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function mergeUserPreferencesData(userId, partial) {
  if (!db || !userId || !partial || typeof partial !== "object") return null;
  const current = getUserPreferencesData(userId) || {};
  const next = { ...current, ...partial };
  db.prepare(
    "INSERT INTO user_preferences (user_id, data) VALUES (?, ?) ON CONFLICT(user_id) DO UPDATE SET data = excluded.data",
  ).run(userId, JSON.stringify(next));
  return next;
}

function cleanupStalledSessions(now = Date.now()) {
  if (!db) return;
  try {
    const result = db
      .prepare("DELETE FROM sessions WHERE expires_at <= ? OR last_seen_at <= ?")
      .run(now, now - SESSION_STALE_GRACE_MS);
    if (result.changes > 0) {
      log.info(`[AUTH] Cleaned up ${result.changes} expired/stalled sessions`);
    }
  } catch (err) {
    log.error("[AUTH] Failed to clean up sessions: " + err.message, { stack: err.stack });
  }
}

module.exports = {
  initDb,
  getDb,
  promptTargetLanguageToDb,
  cleanupStalledSessions,
  seedDefaultAdmin,
  assignCustomPromptsToAdmin,
  migrateUserPreferencesFromGlobalConfig,
  getUserPreferencesData,
  mergeUserPreferencesData,
};
