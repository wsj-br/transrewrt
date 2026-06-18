/**
 * Routes: GET/POST/PUT/DELETE /api/glossary, GET by-lang-pair, POST import
 * Uses src/shared/db/appSchema.js for SQL. Rows are scoped to the logged-in user.
 */

const express = require("express");
const { sql } = require("../../shared/db/appSchema.js");

/**
 * @param {function} getDb
 * @param {function} setSessionRefreshCookie
 * @param {object} log
 */
module.exports = function createGlossaryRouter(getDb, setSessionRefreshCookie, log) {
  const router = express.Router();

  router.get("/glossary", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const userId = req.authSession?.userId;
    if (!userId) return res.status(401).json({ error: "Authentication required" });
    try {
      const rows = db.prepare(sql.GLOSSARY_GET_ALL_FOR_USER).all(userId);
      res.json(rows);
    } catch (err) {
      log.error("[API] GET /api/glossary - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/glossary/by-lang-pair", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const userId = req.authSession?.userId;
    if (!userId) return res.status(401).json({ error: "Authentication required" });
    try {
      const { source, target } = req.query;
      if (!source || !target) return res.status(400).json({ error: "source and target query params required" });
      const rows = db.prepare(sql.GLOSSARY_GET_BY_LANG_PAIR_FOR_USER).all(source, target, userId);
      res.json(rows);
    } catch (err) {
      log.error("[API] GET /api/glossary/by-lang-pair - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/glossary", (req, res) => {
    setSessionRefreshCookie(req, res);
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const userId = req.authSession?.userId;
    if (!userId) return res.status(401).json({ error: "Authentication required" });
    try {
      const b = req.body || {};
      const now = new Date().toISOString();
      try {
        const result = db.prepare(sql.GLOSSARY_INSERT).run(
          b.source_language || "",
          b.target_language || "",
          b.source_text || "",
          b.target_text || "",
          now,
          now,
          userId,
        );
        res.status(201).json({ id: result.lastInsertRowid, success: true, updated: false });
      } catch (e) {
        if (/UNIQUE constraint/.test(e.message)) {
          db.prepare(sql.GLOSSARY_UPDATE_BY_CONFLICT_FOR_USER).run(
            b.target_text || "",
            now,
            b.source_language || "",
            b.target_language || "",
            b.source_text || "",
            userId,
          );
          const row = db.prepare("SELECT id FROM glossary_terms WHERE source_language = ? AND target_language = ? AND source_text = ? AND user_id = ?").get(b.source_language || "", b.target_language || "", b.source_text || "", userId);
          res.json({ id: row?.id ?? null, success: true, updated: true });
        } else {
          throw e;
        }
      }
    } catch (err) {
      log.error("[API] POST /api/glossary - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.put("/glossary/:id", (req, res) => {
    setSessionRefreshCookie(req, res);
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const userId = req.authSession?.userId;
    if (!userId) return res.status(401).json({ error: "Authentication required" });
    try {
      const id = parseInt(req.params.id, 10);
      if (!Number.isFinite(id)) return res.status(400).json({ error: "Invalid id" });
      const b = req.body || {};
      const now = new Date().toISOString();
      const result = db.prepare(sql.GLOSSARY_UPDATE_FOR_USER).run(
        b.source_language || "",
        b.target_language || "",
        b.source_text || "",
        b.target_text || "",
        now,
        id,
        userId,
      );
      if (result.changes === 0) return res.status(404).json({ error: "Term not found" });
      res.json({ success: true });
    } catch (err) {
      log.error("[API] PUT /api/glossary/:id - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.delete("/glossary/:id", (req, res) => {
    setSessionRefreshCookie(req, res);
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const userId = req.authSession?.userId;
    if (!userId) return res.status(401).json({ error: "Authentication required" });
    try {
      const id = parseInt(req.params.id, 10);
      if (!Number.isFinite(id)) return res.status(400).json({ error: "Invalid id" });
      const result = db.prepare(sql.GLOSSARY_DELETE_FOR_USER).run(id, userId);
      if (result.changes === 0) return res.status(404).json({ error: "Term not found" });
      res.json({ success: true });
    } catch (err) {
      log.error("[API] DELETE /api/glossary/:id - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/glossary/import", (req, res) => {
    setSessionRefreshCookie(req, res);
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const userId = req.authSession?.userId;
    if (!userId) return res.status(401).json({ error: "Authentication required" });
    try {
      const list = Array.isArray(req.body) ? req.body : req.body?.terms || [];
      const now = new Date().toISOString();
      const insert = db.prepare(sql.GLOSSARY_INSERT);
      const update = db.prepare(sql.GLOSSARY_UPDATE_BY_CONFLICT_FOR_USER);
      let count = 0;
      for (const t of list) {
        if (!t?.source_text || !t?.target_text || !t?.source_language || !t?.target_language) continue;
        try {
          insert.run(t.source_language, t.target_language, t.source_text, t.target_text, t.created_at || now, now, userId);
          count++;
        } catch (e) {
          if (/UNIQUE constraint/.test(e.message)) {
            update.run(t.target_text, now, t.source_language, t.target_language, t.source_text, userId);
            count++;
          } else {
            throw e;
          }
        }
      }
      res.json({ success: true, count });
    } catch (err) {
      log.error("[API] POST /api/glossary/import - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
