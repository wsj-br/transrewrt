#!/usr/bin/env node
/**
 * Reset a user's password (web multi-user mode).
 * Usage: reset-web-password <new-password>
 *    or: reset-web-password <username> <new-password>
 *
 * If username is omitted, "admin" is used. If the user does not exist, they are
 * created with admin role. The user's "must change password on next login" flag
 * is always cleared after reset.
 *
 * Uses the same data directory as the server (CONFIG_PATH env or data/config.json).
 * The password is hashed with Argon2id and stored in the users table.
 * For best results, stop the server before running (SQLite single-writer).
 */

const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const argon2 = require("argon2");
const Database = require("better-sqlite3");

const CONFIG_PATH =
  process.env.CONFIG_PATH ||
  path.join(__dirname, "..", "data", "config.json");

const RED = "\x1b[31m";
const RESET = "\x1b[0m";

function printHelp() {
  console.log(`Reset a user's password (web multi-user mode).

Usage: reset-web-password [username] <new-password>

  username     Optional (default: admin). Created with admin role if missing.
  new-password Mandatory; stored hashed (Argon2id). Same data dir as server (CONFIG_PATH or data/config.json).

Options:
  --help, -h   Show this help and exit.

Example: reset-web-password mypassword
         reset-web-password bob mypassword
`);
}

async function hashPassword(password) {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 19456,
    timeCost: 2,
    parallelism: 1,
  });
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.includes("--help") || argv.includes("-h")) {
    printHelp();
    process.exit(0);
  }
  const unknown = argv.filter((a) => typeof a === "string" && a.startsWith("-"));
  if (unknown.length > 0) {
    console.error(RED + "Unknown option(s): " + unknown.join(", ") + RESET);
    console.error(RED + "Use --help to see usage." + RESET + "\n");
    process.exit(1);
  }
  const arg1 = argv[0];
  const arg2 = argv[1];
  const username = arg2 !== undefined ? arg1 : "admin";
  const newPassword = arg2 !== undefined ? arg2 : arg1;

  if (newPassword === undefined || newPassword === "") {
    console.error("Usage: reset-web-password [username] <new-password>");
    console.error("  username is optional (default: admin).");
    console.error("  new-password is mandatory (plain text).");
    process.exit(1);
  }

  const dataDir = path.dirname(CONFIG_PATH);
  const DB_PATH = path.join(dataDir, "transrewrt.db");

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  let db;
  try {
    db = new Database(DB_PATH);
  } catch (err) {
    console.error("Could not open database at", DB_PATH, ":", err.message);
    console.error("Ensure the server has been run at least once, or create the data directory.");
    process.exit(2);
  }

  try {
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

    const existing = db.prepare("SELECT id, username FROM users WHERE username = ?").get(username);
    const now = Date.now();
    const passwordHash = await hashPassword(newPassword);

    if (existing) {
      db.prepare(
        "UPDATE users SET password_hash = ?, last_update = ?, must_change_password = 0 WHERE username = ?"
      ).run(passwordHash, now, username);
      console.log(`User "${username}" password updated; must-change-password flag cleared.`);
    } else {
      const id = crypto.randomUUID();
      db.prepare(
        `INSERT INTO users (id, username, password_hash, role, created_at, last_login, last_update, must_change_password)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      ).run(id, username, passwordHash, "admin", now, null, now, 0);
      console.log(`User "${username}" created with admin role and the given password.`);
    }
  } catch (err) {
    if (err.message && /database is locked|SQLITE_BUSY/i.test(err.message)) {
      console.error("Database is locked. Stop the server and try again.");
    } else {
      console.error("Error:", err.message);
    }
    process.exit(3);
  } finally {
    if (db) db.close();
  }
}

main();
