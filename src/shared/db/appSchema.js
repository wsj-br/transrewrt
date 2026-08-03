/**
 * Shared DB schema and query SQL for api_calls, action_content, and custom_prompts.
 * Used by Electron (src/main/appDb.js) and server (src/server/db/appDb.js + routes).
 * Single source of truth so schema/query changes are made in one place.
 */

/**
 * Run CREATE TABLE for api_calls, action_content (FK to api_calls), and custom_prompts.
 * Call once after opening the DB. Enables SQLite foreign keys (required for REFERENCES / CASCADE).
 */
function applyAppSchema(db) {
  db.exec("PRAGMA foreign_keys = ON");
  db.exec(`
    CREATE TABLE IF NOT EXISTS api_calls (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timestamp TEXT NOT NULL,
      type TEXT NOT NULL,
      model TEXT,
      source_lang TEXT,
      target_lang TEXT,
      rewrite_mode TEXT,
      transform_prompt TEXT,
      prompt_tokens INTEGER,
      completion_tokens INTEGER,
      duration_ms INTEGER,
      cost REAL,
      tps REAL,
      username TEXT,
      input_chars INTEGER,
      input_words INTEGER,
      input_paragraphs INTEGER,
      output_chars INTEGER,
      output_words INTEGER,
      output_paragraphs INTEGER
    )
  `);
  migrateApiCallsToTokens(db);
  migrateApiCallsDropTotalCost(db);
  migrateApiCallsAddTextStats(db);
  migrateApiCallsRenameRewriteStyleToMode(db);
  migrateCustomPromptsUserId(db);
  migrateActionContentForeignKey(db);
  createGlossaryTermsTable(db);
}

/** Link action_content → api_calls with ON DELETE CASCADE; rebuild table if an old DB has no FK. */
function migrateActionContentForeignKey(db) {
  const exists = db
    .prepare("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'action_content'")
    .get();
  if (!exists) {
    db.exec(`
      CREATE TABLE action_content (
        api_call_id INTEGER PRIMARY KEY NOT NULL REFERENCES api_calls(id) ON DELETE CASCADE,
        input_text TEXT NOT NULL,
        output_text TEXT NOT NULL
      )
    `);
    return;
  }
  const fks = db.prepare("PRAGMA foreign_key_list(action_content)").all();
  if (fks.some((fk) => fk.table === "api_calls")) return;

  db.exec("PRAGMA foreign_keys = OFF");
  try {
    db.exec("DELETE FROM action_content WHERE api_call_id NOT IN (SELECT id FROM api_calls)");
    db.exec(`
      CREATE TABLE action_content_new (
        api_call_id INTEGER PRIMARY KEY NOT NULL REFERENCES api_calls(id) ON DELETE CASCADE,
        input_text TEXT NOT NULL,
        output_text TEXT NOT NULL
      )
    `);
    db.exec(`
      INSERT INTO action_content_new (api_call_id, input_text, output_text)
      SELECT api_call_id, input_text, output_text FROM action_content
    `);
    db.exec("DROP TABLE action_content");
    db.exec("ALTER TABLE action_content_new RENAME TO action_content");
  } finally {
    db.exec("PRAGMA foreign_keys = ON");
  }
}

/** Migrate existing api_calls from request_bytes/response_bytes to prompt_tokens/completion_tokens (4 bytes = 1 token). */
function migrateApiCallsToTokens(db) {
  const columns = db.prepare("PRAGMA table_info(api_calls)").all();
  const hasRequestBytes = columns.some((c) => c.name === "request_bytes");
  const hasPromptTokens = columns.some((c) => c.name === "prompt_tokens");
  if (!hasRequestBytes || hasPromptTokens) return;
  db.exec("ALTER TABLE api_calls ADD COLUMN prompt_tokens INTEGER");
  db.exec("ALTER TABLE api_calls ADD COLUMN completion_tokens INTEGER");
  db.exec("UPDATE api_calls SET prompt_tokens = request_bytes / 4 WHERE request_bytes IS NOT NULL");
  db.exec("UPDATE api_calls SET completion_tokens = response_bytes / 4 WHERE response_bytes IS NOT NULL");
  try {
    db.exec("ALTER TABLE api_calls DROP COLUMN request_bytes");
    db.exec("ALTER TABLE api_calls DROP COLUMN response_bytes");
  } catch {
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
  } catch {
    /* DROP COLUMN requires SQLite 3.35+; old DBs keep the column, app no longer reads/writes it */
  }
}

/** Add input/output text stats columns to api_calls if missing. */
function migrateApiCallsAddTextStats(db) {
  const columns = db.prepare("PRAGMA table_info(api_calls)").all();
  const names = new Set(columns.map((c) => c.name));
  const toAdd = [
    "input_chars",
    "input_words",
    "input_paragraphs",
    "output_chars",
    "output_words",
    "output_paragraphs",
  ];
  for (const col of toAdd) {
    if (names.has(col)) continue;
    db.exec(`ALTER TABLE api_calls ADD COLUMN ${col} INTEGER`);
  }
}

/** Rename rewrite_style to rewrite_mode (SQLite 3.35+). */
function migrateApiCallsRenameRewriteStyleToMode(db) {
  const columns = db.prepare("PRAGMA table_info(api_calls)").all();
  const names = columns.map((c) => c.name);
  const hasOld = names.includes("rewrite_style");
  const hasNew = names.includes("rewrite_mode");
  if (!hasOld || hasNew) return;
  try {
    db.exec("ALTER TABLE api_calls RENAME COLUMN rewrite_style TO rewrite_mode");
  } catch {
    /* SQLite < 3.35: column stays rewrite_style; app uses rewrite_mode in new code, so add column and backfill */
    db.exec("ALTER TABLE api_calls ADD COLUMN rewrite_mode TEXT");
    db.exec("UPDATE api_calls SET rewrite_mode = rewrite_style WHERE rewrite_style IS NOT NULL");
  }
}

/** Rebuild custom_prompts with user_id and UNIQUE(user_id, name); Electron uses user_id NULL. */
function migrateCustomPromptsUserId(db) {
  const cols = db.prepare("PRAGMA table_info(custom_prompts)").all();
  if (cols.length === 0) {
    db.exec(`
      CREATE TABLE custom_prompts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        instructions TEXT NOT NULL,
        output_description TEXT DEFAULT 'transformed',
        temperature REAL DEFAULT 0.4,
        target_language INTEGER DEFAULT 0,
        prompt_instructions TEXT,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        user_id TEXT,
        UNIQUE(user_id, name)
      )
    `);
    return;
  }
  if (cols.some((c) => c.name === "user_id")) return;
  db.exec(`
    CREATE TABLE custom_prompts_new (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      instructions TEXT NOT NULL,
      output_description TEXT DEFAULT 'transformed',
      temperature REAL DEFAULT 0.4,
      target_language INTEGER DEFAULT 0,
      prompt_instructions TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      user_id TEXT,
      UNIQUE(user_id, name)
    );
    INSERT INTO custom_prompts_new (id, name, role, instructions, output_description, temperature, target_language, prompt_instructions, created_at, updated_at, user_id)
    SELECT id, name, role, instructions, output_description, temperature, target_language, prompt_instructions, created_at, updated_at, NULL FROM custom_prompts;
    DROP TABLE custom_prompts;
    ALTER TABLE custom_prompts_new RENAME TO custom_prompts;
  `);
}

/** Create glossary_terms table if it does not exist. */
function createGlossaryTermsTable(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS glossary_terms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source_language TEXT NOT NULL,
      target_language TEXT NOT NULL,
      source_text TEXT NOT NULL,
      target_text TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      user_id TEXT,
      UNIQUE(source_language, target_language, source_text, user_id)
    )
  `);
}

function promptTargetLanguageToDb(value) {
  return value === true || value === 1 ? 1 : 0;
}

/**
 * @param {string|null} from
 * @param {string|null} to
 * @param {string|null} username
 * @param {string|null} tableAlias - e.g. "a" for JOIN queries (a.timestamp, a.username)
 */
function buildWhereFromTo(from, to, username = null, tableAlias = null) {
  const q = (field) => (tableAlias ? `${tableAlias}.${field}` : field);
  const parts = [];
  const params = [];
  if (from) {
    parts.push(`${q("timestamp")} >= ?`);
    params.push(from);
  }
  if (to) {
    parts.push(`${q("timestamp")} <= ?`);
    params.push(to);
  }
  if (username != null && username !== "") {
    parts.push(`${q("username")} = ?`);
    params.push(username);
  }
  return { where: parts.length ? " WHERE " + parts.join(" AND ") : "", params };
}

/**
 * WHERE clause for GET_EXECUTION_HISTORY: same date/username filters as buildWhereFromTo, plus
 * exclude cancelled/incomplete rows (no completion tokens or zero TPS).
 * @param {string|null} tableAlias - e.g. "a" for JOIN queries on api_calls
 */
function buildExecutionHistoryWhere(from, to, username = null, tableAlias = "a") {
  const { where, params } = buildWhereFromTo(from, to, username, tableAlias);
  const q = (field) => `${tableAlias}.${field}`;
  const completed = `${q("completion_tokens")} IS NOT NULL AND ${q("completion_tokens")} > 0 AND ${q("tps")} IS NOT NULL AND ${q("tps")} > 0`;
  const whereClause = where ? `${where} AND ${completed}` : ` WHERE ${completed}`;
  return { whereClause, params };
}

/** Placeholder for dynamic WHERE clause in query strings. Replace with buildWhereFromTo(from, to).where */
const WHERE_PLACEHOLDER = "__WHERE__";

const sql = {
  INSERT_API_CALL: `INSERT INTO api_calls (timestamp, type, model, source_lang, target_lang, rewrite_mode, transform_prompt, prompt_tokens, completion_tokens, duration_ms, cost, tps, username, input_chars, input_words, input_paragraphs, output_chars, output_words, output_paragraphs)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
  GET_SUMMARY_BY_REWRITE_MODE: `SELECT COALESCE(rewrite_mode, '(none)') AS rewrite_mode, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost
  FROM api_calls ${WHERE_PLACEHOLDER}
  GROUP BY rewrite_mode
  ORDER BY calls DESC`,
  COUNT_API_CALLS: `SELECT COUNT(*) AS total FROM api_calls${WHERE_PLACEHOLDER}`,
  /** `__ALL_CALLS_ORDER_BY__` replaced at runtime (whitelist only — see `prepareGetAllCallsSql`). */
  GET_ALL_CALLS: `SELECT id, timestamp, type, model, source_lang, target_lang, rewrite_mode, transform_prompt, prompt_tokens, completion_tokens, duration_ms, cost, tps, username, input_chars, input_words, input_paragraphs, output_chars, output_words, output_paragraphs FROM api_calls${WHERE_PLACEHOLDER} __ALL_CALLS_ORDER_BY__ LIMIT ? OFFSET ?`,
  GET_ALL_CALLS_EXPORT: `SELECT id, timestamp, type, model, source_lang, target_lang, rewrite_mode, transform_prompt, prompt_tokens, completion_tokens, duration_ms, cost, tps, username, input_chars, input_words, input_paragraphs, output_chars, output_words, output_paragraphs FROM api_calls${WHERE_PLACEHOLDER} ORDER BY timestamp DESC`,
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
  INSERT_ACTION_CONTENT: "INSERT INTO action_content (api_call_id, input_text, output_text) VALUES (?, ?, ?)",
  GET_EXECUTION_HISTORY: `SELECT a.id, a.timestamp, a.type, a.model, a.source_lang, a.target_lang, a.rewrite_mode, a.transform_prompt, a.prompt_tokens, a.completion_tokens, a.duration_ms, a.cost, a.tps, a.username, a.input_chars, a.input_words, a.input_paragraphs, a.output_chars, a.output_words, a.output_paragraphs, c.input_text, c.output_text
    FROM action_content c INNER JOIN api_calls a ON a.id = c.api_call_id${WHERE_PLACEHOLDER} ORDER BY a.timestamp DESC`,
  DELETE_ACTION_CONTENT_ALL: "DELETE FROM action_content",
  DELETE_ACTION_CONTENT_BEFORE: "DELETE FROM action_content WHERE api_call_id IN (SELECT id FROM api_calls WHERE timestamp < ?)",
  /** Electron: single-user rows use user_id IS NULL */
  CUSTOM_PROMPTS_GET_ALL: "SELECT * FROM custom_prompts WHERE user_id IS NULL ORDER BY name ASC",
  CUSTOM_PROMPTS_GET_ALL_FOR_USER: "SELECT * FROM custom_prompts WHERE user_id = ? ORDER BY name ASC",
  CUSTOM_PROMPTS_INSERT: `INSERT INTO custom_prompts (name, role, instructions, output_description, temperature, target_language, prompt_instructions, created_at, updated_at, user_id)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  CUSTOM_PROMPTS_UPDATE: `UPDATE custom_prompts SET name = ?, role = ?, instructions = ?, output_description = ?, temperature = ?, target_language = ?, prompt_instructions = ?, updated_at = ? WHERE id = ? AND user_id IS NULL`,
  CUSTOM_PROMPTS_UPDATE_FOR_USER: `UPDATE custom_prompts SET name = ?, role = ?, instructions = ?, output_description = ?, temperature = ?, target_language = ?, prompt_instructions = ?, updated_at = ? WHERE id = ? AND user_id = ?`,
  CUSTOM_PROMPTS_DELETE: "DELETE FROM custom_prompts WHERE id = ? AND user_id IS NULL",
  CUSTOM_PROMPTS_DELETE_FOR_USER: "DELETE FROM custom_prompts WHERE id = ? AND user_id = ?",
  CUSTOM_PROMPTS_DELETE_ALL: "DELETE FROM custom_prompts WHERE user_id IS NULL",
  CUSTOM_PROMPTS_DELETE_ALL_FOR_USER: "DELETE FROM custom_prompts WHERE user_id = ?",
  CUSTOM_PROMPTS_UPDATE_BY_NAME: `UPDATE custom_prompts SET role = ?, instructions = ?, output_description = ?, temperature = ?, target_language = ?, prompt_instructions = ?, updated_at = ? WHERE name = ? AND user_id IS NULL`,
  CUSTOM_PROMPTS_UPDATE_BY_NAME_FOR_USER: `UPDATE custom_prompts SET role = ?, instructions = ?, output_description = ?, temperature = ?, target_language = ?, prompt_instructions = ?, updated_at = ? WHERE name = ? AND user_id = ?`,
  /** Glossary terms — Electron uses user_id IS NULL, web uses user_id = ? */
  GLOSSARY_GET_ALL: "SELECT * FROM glossary_terms WHERE user_id IS NULL ORDER BY source_language, target_language, source_text ASC",
  GLOSSARY_GET_ALL_FOR_USER: "SELECT * FROM glossary_terms WHERE user_id = ? ORDER BY source_language, target_language, source_text ASC",
  /** Include exact pair plus "All Languages" wildcards on either side. */
  GLOSSARY_GET_BY_LANG_PAIR: `SELECT * FROM glossary_terms
    WHERE (source_language = ? OR source_language = 'All Languages')
      AND (target_language = ? OR target_language = 'All Languages')
      AND user_id IS NULL
    ORDER BY source_text ASC`,
  GLOSSARY_GET_BY_LANG_PAIR_FOR_USER: `SELECT * FROM glossary_terms
    WHERE (source_language = ? OR source_language = 'All Languages')
      AND (target_language = ? OR target_language = 'All Languages')
      AND user_id = ?
    ORDER BY source_text ASC`,
  GLOSSARY_INSERT: `INSERT INTO glossary_terms (source_language, target_language, source_text, target_text, created_at, updated_at, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
  GLOSSARY_UPDATE: `UPDATE glossary_terms SET source_language = ?, target_language = ?, source_text = ?, target_text = ?, updated_at = ? WHERE id = ? AND user_id IS NULL`,
  GLOSSARY_UPDATE_FOR_USER: `UPDATE glossary_terms SET source_language = ?, target_language = ?, source_text = ?, target_text = ?, updated_at = ? WHERE id = ? AND user_id = ?`,
  GLOSSARY_UPDATE_BY_CONFLICT: `UPDATE glossary_terms SET target_text = ?, updated_at = ? WHERE source_language = ? AND target_language = ? AND source_text = ? AND user_id IS NULL`,
  GLOSSARY_UPDATE_BY_CONFLICT_FOR_USER: `UPDATE glossary_terms SET target_text = ?, updated_at = ? WHERE source_language = ? AND target_language = ? AND source_text = ? AND user_id = ?`,
  GLOSSARY_DELETE: "DELETE FROM glossary_terms WHERE id = ? AND user_id IS NULL",
  GLOSSARY_DELETE_FOR_USER: "DELETE FROM glossary_terms WHERE id = ? AND user_id = ?",
};

function replaceWhere(sqlStr, whereClause) {
  return sqlStr.replace(WHERE_PLACEHOLDER, whereClause);
}

/**
 * SQLite expression matching {@link modelFooterDisplayId}: strip `openrouter/`, take segment after last `/`, lowercase.
 * Requires `reverse()` (SQLite 3.38+). Used for dashboard All Calls ORDER BY model.
 * @param {string} [column] — column name, default `model`
 */
function sqlExprModelFooterSortKey(column = "model") {
  const c = `COALESCE(${column}, '')`;
  const h = `(CASE WHEN ${c} LIKE 'openrouter/%' THEN substr(${c}, 13) ELSE ${c} END)`;
  return `(CASE WHEN instr(${h}, '/') = 0 THEN lower(${h}) ELSE lower(substr(${h}, length(${h}) - instr(reverse(${h}), '/') + 2)) END)`;
}

/** Maps dashboard All Calls sort keys → SQLite column names (SQL injection safe — keys only). */
const ALL_CALLS_SORT_COLUMN_SQL = {
  id: "id",
  timestamp: "timestamp",
  type: "type",
  username: "username",
  model: "model",
  cost: "cost",
  tps: "tps",
};

/**
 * Whitelisted ORDER BY for paginated All Calls.
 * @param {string} [sortKey]
 * @param {"asc"|"desc"} [sortDir]
 */
function buildAllCallsOrderByClause(sortKey, sortDir) {
  const col = ALL_CALLS_SORT_COLUMN_SQL[sortKey] ?? "id";
  const dir = sortDir === "asc" ? "ASC" : "DESC";
  if (col === "id") {
    return `ORDER BY id ${dir}`;
  }
  /** Same sort key as compact model tail (footer id), not full path — matches renderer `compareModelIdsByFooterDisplay`. */
  if (col === "model") {
    const footerKey = sqlExprModelFooterSortKey("model");
    return `ORDER BY ${footerKey} ${dir}, id DESC`;
  }
  return `ORDER BY ${col} ${dir}, id DESC`;
}

function prepareGetAllCallsSql(whereClause, sortKey, sortDir) {
  const orderClause = buildAllCallsOrderByClause(sortKey, sortDir);
  const body = sql.GET_ALL_CALLS.replace("__ALL_CALLS_ORDER_BY__", orderClause);
  return replaceWhere(body, whereClause);
}

module.exports = {
  applyAppSchema,
  promptTargetLanguageToDb,
  buildWhereFromTo,
  buildExecutionHistoryWhere,
  sql,
  replaceWhere,
  WHERE_PLACEHOLDER,
  ALL_CALLS_SORT_COLUMN_SQL,
  buildAllCallsOrderByClause,
  prepareGetAllCallsSql,
};
