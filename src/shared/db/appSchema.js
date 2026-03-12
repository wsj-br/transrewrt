/**
 * Shared DB schema and query SQL for api_calls and custom_prompts.
 * Used by Electron (src/main/appDb.js) and server (src/server/db/appDb.js + routes).
 * Single source of truth so schema/query changes are made in one place.
 */

/** Run CREATE TABLE for api_calls and custom_prompts. Call once after opening the DB. */
function applyAppSchema(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS api_calls (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timestamp TEXT NOT NULL,
      type TEXT NOT NULL,
      model TEXT,
      source_lang TEXT,
      target_lang TEXT,
      rewrite_style TEXT,
      transform_prompt TEXT,
      prompt_tokens INTEGER,
      completion_tokens INTEGER,
      duration_ms INTEGER,
      cost REAL,
      tps REAL,
      username TEXT
    )
  `);
  migrateApiCallsToTokens(db);
  migrateApiCallsDropTotalCost(db);
  db.exec(`
    CREATE TABLE IF NOT EXISTS custom_prompts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      role TEXT NOT NULL,
      instructions TEXT NOT NULL,
      output_description TEXT DEFAULT 'transformed',
      temperature REAL DEFAULT 0.4,
      target_language INTEGER DEFAULT 0,
      prompt_instructions TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `);
}

/** Migrate existing api_calls from request_bytes/response_bytes to prompt_tokens/completion_tokens (4 bytes = 1 token). */
function migrateApiCallsToTokens(db) {
  const columns = db.prepare("PRAGMA table_info(api_calls)").all();
  const hasRequestBytes = columns.some((c) => c.name === "request_bytes");
  const hasPromptTokens = columns.some((c) => c.name === "prompt_tokens");
  if (!hasRequestBytes || hasPromptTokens) return;
  try {
    db.exec("ALTER TABLE api_calls ADD COLUMN prompt_tokens INTEGER");
    db.exec("ALTER TABLE api_calls ADD COLUMN completion_tokens INTEGER");
    db.exec("UPDATE api_calls SET prompt_tokens = request_bytes / 4 WHERE request_bytes IS NOT NULL");
    db.exec("UPDATE api_calls SET completion_tokens = response_bytes / 4 WHERE response_bytes IS NOT NULL");
  } catch (err) {
    throw err;
  }
  try {
    db.exec("ALTER TABLE api_calls DROP COLUMN request_bytes");
    db.exec("ALTER TABLE api_calls DROP COLUMN response_bytes");
  } catch (_) {
    /* DROP COLUMN requires SQLite 3.35+; old columns remain, app uses new ones */
  }
}

/** Drop total_cost from api_calls if present (column was deprecated; total is derived from SUM(cost)). */
function migrateApiCallsDropTotalCost(db) {
  const columns = db.prepare("PRAGMA table_info(api_calls)").all();
  const hasTotalCost = columns.some((c) => c.name === "total_cost");
  if (!hasTotalCost) return;
  try {
    db.exec("ALTER TABLE api_calls DROP COLUMN total_cost");
  } catch (_) {
    /* DROP COLUMN requires SQLite 3.35+; old DBs keep the column, app no longer reads/writes it */
  }
}

function promptTargetLanguageToDb(value) {
  return value === true || value === 1 ? 1 : 0;
}

function buildWhereFromTo(from, to, username = null) {
  const parts = [];
  const params = [];
  if (from) {
    parts.push("timestamp >= ?");
    params.push(from);
  }
  if (to) {
    parts.push("timestamp <= ?");
    params.push(to);
  }
  if (username != null && username !== "") {
    parts.push("username = ?");
    params.push(username);
  }
  return { where: parts.length ? " WHERE " + parts.join(" AND ") : "", params };
}

/** Placeholder for dynamic WHERE clause in query strings. Replace with buildWhereFromTo(from, to).where */
const WHERE_PLACEHOLDER = "__WHERE__";

const sql = {
  INSERT_API_CALL: `INSERT INTO api_calls (timestamp, type, model, source_lang, target_lang, rewrite_style, transform_prompt, prompt_tokens, completion_tokens, duration_ms, cost, tps, username)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  GET_TOTAL_COST: "SELECT COALESCE(SUM(cost), 0) AS total_cost FROM api_calls",
  GET_SUMMARY_BY_FUNCTION: `SELECT type AS function, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost FROM api_calls ${WHERE_PLACEHOLDER} GROUP BY type`,
  GET_SUMMARY_BY_MODEL: `SELECT model,
    SUM(CASE WHEN type = 'translate' THEN 1 ELSE 0 END) AS translation_calls,
    SUM(CASE WHEN type = 'rewrite' THEN 1 ELSE 0 END) AS rewrite_calls,
    SUM(CASE WHEN type = 'transform' THEN 1 ELSE 0 END) AS transform_calls,
    SUM(CASE WHEN type = 'translate' THEN COALESCE(cost, 0) ELSE 0 END) AS translation_cost,
    SUM(CASE WHEN type = 'rewrite' THEN COALESCE(cost, 0) ELSE 0 END) AS rewrite_cost,
    SUM(CASE WHEN type = 'transform' THEN COALESCE(cost, 0) ELSE 0 END) AS transform_cost,
    AVG(CASE WHEN tps IS NOT NULL AND tps > 0 THEN tps ELSE NULL END) AS avg_tps
  FROM api_calls ${WHERE_PLACEHOLDER}
  GROUP BY model`,
  GET_SUMMARY_BY_DAY: `SELECT date(timestamp) AS day,
    SUM(CASE WHEN type = 'translate' THEN 1 ELSE 0 END) AS translation_calls,
    SUM(CASE WHEN type = 'rewrite' THEN 1 ELSE 0 END) AS rewrite_calls,
    SUM(CASE WHEN type = 'transform' THEN 1 ELSE 0 END) AS transform_calls,
    SUM(CASE WHEN type = 'translate' THEN COALESCE(cost, 0) ELSE 0 END) AS translation_cost,
    SUM(CASE WHEN type = 'rewrite' THEN COALESCE(cost, 0) ELSE 0 END) AS rewrite_cost,
    SUM(CASE WHEN type = 'transform' THEN COALESCE(cost, 0) ELSE 0 END) AS transform_cost
  FROM api_calls ${WHERE_PLACEHOLDER}
  GROUP BY date(timestamp)
  ORDER BY day DESC`,
  GET_SUMMARY_BY_TARGET_LANG: `SELECT COALESCE(target_lang, '(none)') AS target_lang, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost
  FROM api_calls ${WHERE_PLACEHOLDER}
  GROUP BY target_lang
  ORDER BY calls DESC`,
  GET_SUMMARY_BY_TRANSFORM_PROMPT: `SELECT COALESCE(transform_prompt, '(none)') AS transform_prompt, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost
  FROM api_calls ${WHERE_PLACEHOLDER}
  GROUP BY transform_prompt
  ORDER BY calls DESC`,
  GET_SUMMARY_BY_REWRITE_STYLE: `SELECT COALESCE(rewrite_style, '(none)') AS rewrite_style, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost
  FROM api_calls ${WHERE_PLACEHOLDER}
  GROUP BY rewrite_style
  ORDER BY calls DESC`,
  COUNT_API_CALLS: `SELECT COUNT(*) AS total FROM api_calls${WHERE_PLACEHOLDER}`,
  GET_ALL_CALLS: `SELECT id, timestamp, type, model, source_lang, target_lang, rewrite_style, transform_prompt, prompt_tokens, completion_tokens, duration_ms, cost, tps, username FROM api_calls${WHERE_PLACEHOLDER} ORDER BY timestamp DESC LIMIT ? OFFSET ?`,
  GET_ALL_CALLS_EXPORT: `SELECT id, timestamp, type, model, source_lang, target_lang, rewrite_style, transform_prompt, prompt_tokens, completion_tokens, duration_ms, cost, tps, username FROM api_calls${WHERE_PLACEHOLDER} ORDER BY timestamp DESC`,
  COUNT_DISTINCT_DAYS: `SELECT COUNT(DISTINCT date(timestamp)) AS total FROM api_calls${WHERE_PLACEHOLDER}`,
  GET_SUMMARY_BY_DAY_PAGINATED: `SELECT date(timestamp) AS day,
    SUM(CASE WHEN type = 'translate' THEN 1 ELSE 0 END) AS translation_calls,
    SUM(CASE WHEN type = 'rewrite' THEN 1 ELSE 0 END) AS rewrite_calls,
    SUM(CASE WHEN type = 'transform' THEN 1 ELSE 0 END) AS transform_calls,
    SUM(CASE WHEN type = 'translate' THEN COALESCE(cost, 0) ELSE 0 END) AS translation_cost,
    SUM(CASE WHEN type = 'rewrite' THEN COALESCE(cost, 0) ELSE 0 END) AS rewrite_cost,
    SUM(CASE WHEN type = 'transform' THEN COALESCE(cost, 0) ELSE 0 END) AS transform_cost
  FROM api_calls${WHERE_PLACEHOLDER}
  GROUP BY date(timestamp) ORDER BY day DESC LIMIT ? OFFSET ?`,
  DELETE_API_CALLS: "DELETE FROM api_calls",
  DELETE_API_CALLS_BEFORE: "DELETE FROM api_calls WHERE timestamp < ?",
  DELETE_API_CALLS_BY_MODEL: "DELETE FROM api_calls WHERE model = ?",
  CUSTOM_PROMPTS_GET_ALL: "SELECT * FROM custom_prompts ORDER BY name ASC",
  CUSTOM_PROMPTS_INSERT: `INSERT INTO custom_prompts (name, role, instructions, output_description, temperature, target_language, prompt_instructions, created_at, updated_at)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  CUSTOM_PROMPTS_UPDATE: `UPDATE custom_prompts SET name = ?, role = ?, instructions = ?, output_description = ?, temperature = ?, target_language = ?, prompt_instructions = ?, updated_at = ? WHERE id = ?`,
  CUSTOM_PROMPTS_DELETE: "DELETE FROM custom_prompts WHERE id = ?",
  CUSTOM_PROMPTS_DELETE_ALL: "DELETE FROM custom_prompts",
  CUSTOM_PROMPTS_UPDATE_BY_NAME: `UPDATE custom_prompts SET role = ?, instructions = ?, output_description = ?, temperature = ?, target_language = ?, prompt_instructions = ?, updated_at = ? WHERE name = ?`,
};

function replaceWhere(sqlStr, whereClause) {
  return sqlStr.replace(WHERE_PLACEHOLDER, whereClause);
}

module.exports = {
  applyAppSchema,
  promptTargetLanguageToDb,
  buildWhereFromTo,
  sql,
  replaceWhere,
  WHERE_PLACEHOLDER,
};
