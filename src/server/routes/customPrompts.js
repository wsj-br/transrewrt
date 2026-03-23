/**
 * Routes: GET/POST/PUT/DELETE /api/custom-prompts, GET export, POST import
 * Uses src/shared/db/appSchema.js for SQL. Rows are scoped to the logged-in user.
 */

const express = require("express");
const { sql } = require("../../shared/db/appSchema.js");

/**
 * @param {function} getDb
 * @param {function} promptTargetLanguageToDb
 * @param {function} setSessionRefreshCookie
 * @param {object} log
 */
module.exports = function createCustomPromptsRouter(
  getDb,
  promptTargetLanguageToDb,
  setSessionRefreshCookie,
  log,
) {
  const router = express.Router();

  router.get("/custom-prompts", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const userId = req.authSession?.userId;
    if (!userId) return res.status(401).json({ error: "Authentication required" });
    try {
      const rows = db.prepare(sql.CUSTOM_PROMPTS_GET_ALL_FOR_USER).all(userId);
      res.json(rows);
    } catch (err) {
      log.error("[API] GET /api/custom-prompts - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/custom-prompts", (req, res) => {
    setSessionRefreshCookie(req, res);
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const userId = req.authSession?.userId;
    if (!userId) return res.status(401).json({ error: "Authentication required" });
    try {
      const b = req.body || {};
      const now = new Date().toISOString();
      const instructions = typeof b.instructions === "string" ? b.instructions : JSON.stringify(b.instructions || []);
      const promptInstructions =
        b.prompt_instructions != null && String(b.prompt_instructions).trim()
          ? String(b.prompt_instructions).trim()
          : null;
      const result = db.prepare(sql.CUSTOM_PROMPTS_INSERT).run(
        b.name || "",
        b.role || "",
        instructions,
        b.output_description ?? "transformed",
        b.temperature ?? 0.4,
        promptTargetLanguageToDb(b.target_language),
        promptInstructions,
        now,
        now,
        userId,
      );
      res.status(201).json({ id: result.lastInsertRowid, success: true });
    } catch (err) {
      log.error("[API] POST /api/custom-prompts - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.put("/custom-prompts/:id", (req, res) => {
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
      const instructions = typeof b.instructions === "string" ? b.instructions : JSON.stringify(b.instructions || []);
      const promptInstructions =
        b.prompt_instructions != null && String(b.prompt_instructions).trim()
          ? String(b.prompt_instructions).trim()
          : null;
      const result = db.prepare(sql.CUSTOM_PROMPTS_UPDATE_FOR_USER).run(
        b.name || "",
        b.role || "",
        instructions,
        b.output_description ?? "transformed",
        b.temperature ?? 0.4,
        promptTargetLanguageToDb(b.target_language),
        promptInstructions,
        now,
        id,
        userId,
      );
      if (result.changes === 0) return res.status(404).json({ error: "Prompt not found" });
      res.json({ success: true });
    } catch (err) {
      log.error("[API] PUT /api/custom-prompts/:id - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.delete("/custom-prompts/:id", (req, res) => {
    setSessionRefreshCookie(req, res);
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const userId = req.authSession?.userId;
    if (!userId) return res.status(401).json({ error: "Authentication required" });
    try {
      const id = parseInt(req.params.id, 10);
      if (!Number.isFinite(id)) return res.status(400).json({ error: "Invalid id" });
      const result = db.prepare(sql.CUSTOM_PROMPTS_DELETE_FOR_USER).run(id, userId);
      if (result.changes === 0) return res.status(404).json({ error: "Prompt not found" });
      res.json({ success: true });
    } catch (err) {
      log.error("[API] DELETE /api/custom-prompts/:id - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/custom-prompts/export", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const userId = req.authSession?.userId;
    if (!userId) return res.status(401).json({ error: "Authentication required" });
    try {
      const rows = db.prepare(sql.CUSTOM_PROMPTS_GET_ALL_FOR_USER).all(userId);
      res.json(rows);
    } catch (err) {
      log.error("[API] GET /api/custom-prompts/export - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/custom-prompts/import", (req, res) => {
    setSessionRefreshCookie(req, res);
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const userId = req.authSession?.userId;
    if (!userId) return res.status(401).json({ error: "Authentication required" });
    try {
      const body = Array.isArray(req.body) ? req.body : req.body?.prompts || [];
      const mode = req.body?.mode || "merge";
      const now = new Date().toISOString();
      if (mode === "replace") {
        db.prepare(sql.CUSTOM_PROMPTS_DELETE_ALL_FOR_USER).run(userId);
      }
      const insert = db.prepare(sql.CUSTOM_PROMPTS_INSERT);
      const update = db.prepare(sql.CUSTOM_PROMPTS_UPDATE_BY_NAME_FOR_USER);
      let count = 0;
      for (const p of body) {
        if (!p || !p.name) continue;
        const instructions = typeof p.instructions === "string" ? p.instructions : JSON.stringify(p.instructions || []);
        const promptInstructions =
          p.prompt_instructions != null && String(p.prompt_instructions).trim()
            ? String(p.prompt_instructions).trim()
            : null;
        try {
          insert.run(
            p.name,
            p.role || "",
            instructions,
            p.output_description ?? "transformed",
            p.temperature ?? 0.4,
            promptTargetLanguageToDb(p.target_language),
            promptInstructions,
            p.created_at || now,
            now,
            userId,
          );
          count++;
        } catch (e) {
          if (mode === "merge" && /UNIQUE constraint/.test(e.message)) {
            update.run(
              p.role || "",
              instructions,
              p.output_description ?? "transformed",
              p.temperature ?? 0.4,
              promptTargetLanguageToDb(p.target_language),
              promptInstructions,
              now,
              p.name,
              userId,
            );
            count++;
          } else {
            throw e;
          }
        }
      }
      res.json({ success: true, count });
    } catch (err) {
      log.error("[API] POST /api/custom-prompts/import - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
