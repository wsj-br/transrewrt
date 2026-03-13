/**
 * Routes: POST /api/calls, GET /api/calls/total-cost, summary-*, all, delete-by-model, DELETE /api/calls
 * Uses src/shared/db/appSchema.js for SQL and buildWhereFromTo.
 */

const express = require("express");
const { buildWhereFromTo, sql, replaceWhere } = require("../../shared/db/appSchema.js");

/**
 * @param {function} getDb
 * @param {function} setSessionRefreshCookie
 * @param {object} log
 */
module.exports = function createCallsRouter(getDb, setSessionRefreshCookie, log) {
  const router = express.Router();

  router.post("/calls", (req, res) => {
    setSessionRefreshCookie(req, res);
    const db = getDb();
    if (!db) {
      return res.status(503).json({ error: "Database unavailable" });
    }
    try {
      const b = req.body || {};
      const username = req.authSession?.username ?? b.username ?? null;
      const timestamp = b.timestamp || new Date().toLocaleString();
      const type = b.type || "";
      const model = b.model || "";
      const source_lang = b.source_lang || "";
      const target_lang = b.target_lang || "";
      const rewrite_style = b.rewrite_style || "";
      const transform_prompt = b.transform_prompt ?? null;
      const prompt_tokens = b.prompt_tokens ?? (b.request_bytes != null ? Math.round(b.request_bytes / 4) : null);
      const completion_tokens = b.completion_tokens ?? (b.response_bytes != null ? Math.round(b.response_bytes / 4) : null);
      const dur = b.duration_ms ?? 0;
      const cost = b.cost ?? 0;

      db.prepare(sql.INSERT_API_CALL).run(
        timestamp,
        type,
        model,
        source_lang,
        target_lang,
        rewrite_style,
        transform_prompt,
        prompt_tokens,
        completion_tokens,
        dur,
        cost,
        b.tps ?? null,
        username,
        b.input_chars ?? null,
        b.input_words ?? null,
        b.input_paragraphs ?? null,
        b.output_chars ?? null,
        b.output_words ?? null,
        b.output_paragraphs ?? null,
      );
      res.json({ success: true });
    } catch (err) {
      log.error("[API] POST /api/calls - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/calls/total-cost", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    try {
      const { where, params } = buildWhereFromTo(req.query.from, req.query.to, req.query.username);
      const sqlStr = where ? "SELECT COALESCE(SUM(cost), 0) AS total_cost FROM api_calls" + where : sql.GET_TOTAL_COST;
      const row = where ? db.prepare(sqlStr).get(...params) : db.prepare(sqlStr).get();
      const total_cost = row?.total_cost ?? 0;
      res.json({ total_cost });
    } catch (err) {
      log.error("[API] GET /api/calls/total-cost - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/calls/summary-by-function", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    try {
      const { where, params } = buildWhereFromTo(req.query.from, req.query.to, req.query.username);
      const rows = db.prepare(replaceWhere(sql.GET_SUMMARY_BY_FUNCTION, where)).all(...params);
      const totalCalls = rows.reduce((s, r) => s + r.calls, 0);
      const totalCost = rows.reduce((s, r) => s + (r.cost || 0), 0);
      rows.push({ function: "Total", calls: totalCalls, cost: totalCost });
      res.json({ rows });
    } catch (err) {
      log.error("[API] GET /api/calls/summary-by-function - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  function fullWhereForType(type, from, to, username) {
    const { where, params } = buildWhereFromTo(from, to, username);
    const andPart = where ? where.replace(" WHERE ", "") : "";
    return { where: " WHERE type = '" + type + "'" + (andPart ? " AND " + andPart : ""), params };
  }

  router.get("/calls/summary-by-model", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    try {
      const { where, params } = buildWhereFromTo(req.query.from, req.query.to, req.query.username);
      const rows = db.prepare(replaceWhere(sql.GET_SUMMARY_BY_MODEL, where)).all(...params);
      let weightedTpsNum = 0;
      let weightedTpsDenom = 0;
      const totals = rows.reduce(
        (acc, r) => {
          const tc = r.translation_calls || 0;
          const rc = r.rewrite_calls || 0;
          const trc = r.transform_calls || 0;
          const totalCalls = tc + rc + trc;
          const avgTps =
            r.avg_tps != null && Number(r.avg_tps) > 0 ? Number(r.avg_tps) : null;
          if (avgTps != null && totalCalls > 0) {
            weightedTpsNum += avgTps * totalCalls;
            weightedTpsDenom += totalCalls;
          }
          return {
            translation_calls: acc.translation_calls + tc,
            rewrite_calls: acc.rewrite_calls + rc,
            transform_calls: acc.transform_calls + trc,
            translation_cost: acc.translation_cost + (r.translation_cost || 0),
            rewrite_cost: acc.rewrite_cost + (r.rewrite_cost || 0),
            transform_cost: acc.transform_cost + (r.transform_cost || 0),
          };
        },
        {
          translation_calls: 0,
          rewrite_calls: 0,
          transform_calls: 0,
          translation_cost: 0,
          rewrite_cost: 0,
          transform_cost: 0,
        },
      );
      const totalAvgTps =
        weightedTpsDenom > 0 ? weightedTpsNum / weightedTpsDenom : null;
      rows.push({ model: "Total", ...totals, avg_tps: totalAvgTps });
      res.json({ rows });
    } catch (err) {
      log.error("[API] GET /api/calls/summary-by-model - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/calls/summary-by-day", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    try {
      const { where, params } = buildWhereFromTo(req.query.from, req.query.to, req.query.username);
      const rows = db.prepare(replaceWhere(sql.GET_SUMMARY_BY_DAY, where)).all(...params);
      res.json({ rows });
    } catch (err) {
      log.error("[API] GET /api/calls/summary-by-day - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/calls/summary-by-target-lang", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    try {
      const { where, params } = fullWhereForType("translate", req.query.from, req.query.to, req.query.username);
      const rows = db.prepare(replaceWhere(sql.GET_SUMMARY_BY_TARGET_LANG, where)).all(...params);
      res.json({ rows });
    } catch (err) {
      log.error("[API] GET /api/calls/summary-by-target-lang - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/calls/summary-by-rewrite-style", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    try {
      const { where, params } = fullWhereForType("rewrite", req.query.from, req.query.to, req.query.username);
      const rows = db.prepare(replaceWhere(sql.GET_SUMMARY_BY_REWRITE_STYLE, where)).all(...params);
      res.json({ rows });
    } catch (err) {
      log.error("[API] GET /api/calls/summary-by-rewrite-style - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/calls/summary-by-transform-prompt", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    try {
      const { where, params } = fullWhereForType("transform", req.query.from, req.query.to, req.query.username);
      const rows = db.prepare(replaceWhere(sql.GET_SUMMARY_BY_TRANSFORM_PROMPT, where)).all(...params);
      res.json({ rows });
    } catch (err) {
      log.error("[API] GET /api/calls/summary-by-transform-prompt - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/calls/all", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    try {
      const { where, params } = buildWhereFromTo(req.query.from, req.query.to, req.query.username);
      const page = Math.max(1, parseInt(req.query.page, 10) || 1);
      const pageSize = Math.min(200, Math.max(1, parseInt(req.query.pageSize, 10) || 50));
      const total = db.prepare(replaceWhere(sql.COUNT_API_CALLS, where)).get(...params)?.total ?? 0;
      const offset = (page - 1) * pageSize;
      const rows = db.prepare(replaceWhere(sql.GET_ALL_CALLS, where)).all(...params, pageSize, offset);
      res.json({ rows, total, page, pageSize });
    } catch (err) {
      log.error("[API] GET /api/calls/all - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/calls/export", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    try {
      const { where, params } = buildWhereFromTo(req.query.from, req.query.to, req.query.username);
      const limit = Math.min(10000, Math.max(1, parseInt(req.query.limit, 10) || 10000));
      const stmt = db.prepare(replaceWhere(sql.GET_ALL_CALLS_EXPORT, where));
      const rows = stmt.all(...params).slice(0, limit);
      res.json({ rows });
    } catch (err) {
      log.error("[API] GET /api/calls/export - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/calls/summary-by-day-paginated", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    try {
      const { where, params } = buildWhereFromTo(req.query.from, req.query.to, req.query.username);
      const page = Math.max(1, parseInt(req.query.page, 10) || 1);
      const pageSize = Math.min(200, Math.max(1, parseInt(req.query.pageSize, 10) || 50));
      const total = db.prepare(replaceWhere(sql.COUNT_DISTINCT_DAYS, where)).get(...params)?.total ?? 0;
      const offset = (page - 1) * pageSize;
      const rows = db.prepare(replaceWhere(sql.GET_SUMMARY_BY_DAY_PAGINATED, where)).all(...params, pageSize, offset);
      res.json({ rows, total, page, pageSize });
    } catch (err) {
      log.error("[API] GET /api/calls/summary-by-day-paginated - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/calls/delete-by-model", (req, res) => {
    setSessionRefreshCookie(req, res);
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const model =
      req.body && req.body.model != null ? String(req.body.model).trim() : "";
    if (!model) {
      return res.status(400).json({ error: "Model name is required" });
    }
    try {
      const result = db.prepare(sql.DELETE_API_CALLS_BY_MODEL).run(model);
      res.json({ success: true, deleted: result.changes });
    } catch (err) {
      log.error("[API] POST /api/calls/delete-by-model - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.delete("/calls", (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database unavailable" });
    const from = req.query.from || null;
    const to = req.query.to || null;
    try {
      if (!from && !to) {
        db.prepare(sql.DELETE_API_CALLS).run();
      } else {
        db.prepare(sql.DELETE_API_CALLS_BEFORE).run(from || to);
      }
      res.json({ success: true });
    } catch (err) {
      log.error("[API] DELETE /api/calls - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
