#!/usr/bin/env node
/**
 * Reset the web UI password from the command line.
 * Usage: node scripts/reset-web-password.js <new-password>
 *
 * Uses the same config file as the server (CONFIG_PATH env or data/config.json).
 * The password is hashed with Argon2id before being stored.
 */

const path = require("path");
const fs = require("fs");
const argon2 = require("argon2");
const lockfile = require("proper-lockfile");

const CONFIG_PATH =
  process.env.CONFIG_PATH ||
  path.join(__dirname, "..", "data", "config.json");

async function hashPassword(password) {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 19456,
    timeCost: 2,
    parallelism: 1,
  });
}

async function main() {
  const newPassword = process.argv[2];
  if (newPassword === undefined || newPassword === "") {
    console.error("Usage: node scripts/reset-web-password.js <new-password>");
    console.error("  new-password is mandatory (plain text).");
    process.exit(1);
  }

  const dir = path.dirname(CONFIG_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(CONFIG_PATH)) {
    fs.writeFileSync(CONFIG_PATH, "{}", "utf8");
  }

  let release;
  try {
    release = lockfile.lockSync(CONFIG_PATH, { realpath: false });
  } catch (err) {
    console.error("Could not lock config file (is the server running?):", err.message);
    process.exit(2);
  }

  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf8");
    const config = raw.trim() ? JSON.parse(raw) : {};
    config.web_password_hash = await hashPassword(newPassword);
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf8");
    console.log("Web password updated successfully.");
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(3);
  } finally {
    try {
      release();
    } catch (_) {}
  }
}

main();
