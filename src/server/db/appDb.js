/**
 * SQLite DB for server. Uses shared schema (src/shared/db/appSchema.js) for api_calls and custom_prompts.
 * Adds server-only sessions table for web auth.
 */

const path = require("path");
const Database = require("better-sqlite3");
const { applyAppSchema, promptTargetLanguageToDb } = require("../../shared/db/appSchema.js");

const SESSION_STALE_GRACE_MS = 30 * 24 * 60 * 60 * 1000;

let db = null;
let log = null;

function initDb(dataDir, logger) {
  log = logger || { info: () => {}, warn: () => {}, error: () => {} };
  const DB_PATH = path.join(dataDir, "transrewrt.db");
  try {
    db = new Database(DB_PATH);
    applyAppSchema(db);
    db.exec(`
      CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY,
        created_at INTEGER NOT NULL,
        last_seen_at INTEGER NOT NULL,
        expires_at INTEGER NOT NULL,
        last_ip TEXT
      )
    `);
    db.exec("CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions (expires_at)");
    db.exec("CREATE INDEX IF NOT EXISTS idx_sessions_last_seen_at ON sessions (last_seen_at)");
    try {
      db.exec("ALTER TABLE sessions ADD COLUMN last_ip TEXT");
    } catch (_) {}
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
};
