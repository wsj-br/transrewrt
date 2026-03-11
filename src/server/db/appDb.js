/**
 * SQLite DB for server. Uses shared schema (src/shared/db/appSchema.js) for api_calls and custom_prompts.
 * Adds server-only users and sessions tables for web auth.
 */

const path = require("path");
const crypto = require("crypto");
const Database = require("better-sqlite3");
const argon2 = require("argon2");
const { applyAppSchema, promptTargetLanguageToDb } = require("../../shared/db/appSchema.js");

/** Must match src/renderer/constants.js DEFAULT_ADMIN_* */
const DEFAULT_ADMIN_USERNAME = "admin";
const DEFAULT_ADMIN_PASSWORD = "transrewrt26";

const SESSION_STALE_GRACE_MS = 30 * 24 * 60 * 60 * 1000;

let db = null;
let log = null;

async function seedDefaultAdmin() {
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
  } catch (err) {
    log.error("[SERVER] Failed to init SQLite DB: " + err.message, { stack: err.stack });
    db = null;
  }
  return db;
}

function getDb() {
  return db;
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
};
