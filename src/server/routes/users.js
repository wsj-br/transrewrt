/**
 * Routes: GET/POST /api/users, PUT /api/users/:id, POST /api/users/:id/change-password,
 * POST /api/users/:id/revoke-sessions, DELETE /api/users/:id.
 * Admin only. The user with username "admin" cannot be deleted.
 */

const crypto = require("crypto");
const express = require("express");
const argon2 = require("argon2");

async function hashPassword(password) {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 19456,
    timeCost: 2,
    parallelism: 1,
  });
}

function requireAdmin(req, res, next) {
  if (req.authSession?.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
}

/**
 * @param {function} getDb
 * @param {object} log
 */
module.exports = function createUsersRouter(getDb, log) {
  const router = express.Router();

  router.use(requireAdmin);

  router.get("/users", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    try {
      const rows = db.prepare(
        "SELECT id, username, role, created_at, last_login, last_update, must_change_password FROM users ORDER BY username ASC",
      ).all();
      res.json({ users: rows });
    } catch (err) {
      log.error("[API] GET /api/users - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/users", async (req, res) => {
    try {
      const { username, password, role, must_change_password } = req.body || {};
      if (!username || typeof username !== "string" || !password || typeof password !== "string") {
        return res.status(400).json({ error: "Username and password required" });
      }
      const normalizedUsername = username.trim();
      if (!normalizedUsername) {
        return res.status(400).json({ error: "Username required" });
      }
      const r = role === "admin" ? "admin" : "user";
      const mustChange = must_change_password === true || must_change_password === 1 ? 1 : 0;
      const db = getDb();
      if (!db) return res.status(503).json({ error: "Database unavailable" });
      const existing = db.prepare("SELECT id FROM users WHERE LOWER(username) = ?").get(normalizedUsername.toLowerCase());
      if (existing) {
        return res.status(409).json({ error: "Username already exists" });
      }
      const id = crypto.randomUUID();
      const now = Date.now();
      const passwordHash = await hashPassword(password);
      db.prepare(
        `INSERT INTO users (id, username, password_hash, role, created_at, last_login, last_update, must_change_password)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      ).run(id, normalizedUsername, passwordHash, r, now, null, now, mustChange);
      res.status(201).json({
        id,
        username: normalizedUsername,
        role: r,
        created_at: now,
        last_login: null,
        last_update: now,
        must_change_password: mustChange,
      });
    } catch (err) {
      log.error("[API] POST /api/users - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.put("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { username, role, must_change_password } = req.body || {};
      const db = getDb();
      if (!db) return res.status(503).json({ error: "Database unavailable" });
      const user = db.prepare("SELECT id, username, role FROM users WHERE id = ?").get(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      if (user.username === "admin" && role !== undefined && role !== "admin") {
        return res.status(400).json({ error: "Admin user role cannot be changed" });
      }
      let newUsername = user.username;
      if (username !== undefined && typeof username === "string") {
        const trimmed = username.trim();
        if (!trimmed) return res.status(400).json({ error: "Username cannot be empty" });
        if (trimmed.toLowerCase() !== user.username.toLowerCase()) {
          const existing = db.prepare("SELECT id FROM users WHERE LOWER(username) = ?").get(trimmed.toLowerCase());
          if (existing) return res.status(409).json({ error: "Username already exists" });
          newUsername = trimmed;
        }
      }
      const newRole = role === "admin" ? "admin" : role === "user" ? "user" : user.role;
      const mustChange = must_change_password === true || must_change_password === 1 ? 1 : 0;
      const now = Date.now();
      db.prepare(
        "UPDATE users SET username = ?, role = ?, last_update = ?, must_change_password = ? WHERE id = ?",
      ).run(newUsername, user.username === "admin" ? "admin" : newRole, now, mustChange, id);
      const updated = db.prepare(
        "SELECT id, username, role, created_at, last_login, last_update, must_change_password FROM users WHERE id = ?",
      ).get(id);
      res.json(updated);
    } catch (err) {
      log.error("[API] PUT /api/users/:id - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/users/:id/change-password", async (req, res) => {
    try {
      const { id } = req.params;
      const { newPassword } = req.body || {};
      if (!newPassword || typeof newPassword !== "string" || newPassword.length < 1) {
        return res.status(400).json({ error: "New password required" });
      }
      const db = getDb();
      if (!db) return res.status(503).json({ error: "Database unavailable" });
      const user = db.prepare("SELECT id FROM users WHERE id = ?").get(id);
      if (!user) return res.status(404).json({ error: "User not found" });
      const now = Date.now();
      const passwordHash = await hashPassword(newPassword);
      db.prepare("UPDATE users SET password_hash = ?, last_update = ?, must_change_password = 0 WHERE id = ?").run(
        passwordHash,
        now,
        id,
      );
      res.json({ success: true });
    } catch (err) {
      log.error("[API] POST /api/users/:id/change-password - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/users/:id/revoke-sessions", (req, res) => {
    try {
      const { id } = req.params;
      const db = getDb();
      if (!db) return res.status(503).json({ error: "Database unavailable" });
      const user = db.prepare("SELECT id FROM users WHERE id = ?").get(id);
      if (!user) return res.status(404).json({ error: "User not found" });
      const result = db.prepare("DELETE FROM sessions WHERE user_id = ?").run(id);
      res.json({ success: true, revoked: result.changes });
    } catch (err) {
      log.error("[API] POST /api/users/:id/revoke-sessions - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.delete("/users/:id", (req, res) => {
    try {
      const { id } = req.params;
      const db = getDb();
      if (!db) return res.status(503).json({ error: "Database unavailable" });
      const user = db.prepare("SELECT id, username FROM users WHERE id = ?").get(id);
      if (!user) return res.status(404).json({ error: "User not found" });
      if (user.username === "admin") {
        return res.status(400).json({ error: "Admin user cannot be deleted" });
      }
      db.prepare("DELETE FROM sessions WHERE user_id = ?").run(id);
      db.prepare("DELETE FROM users WHERE id = ?").run(id);
      res.json({ success: true });
    } catch (err) {
      log.error("[API] DELETE /api/users/:id - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
