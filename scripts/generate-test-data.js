/**
 * Generate test data for transrewrt.db (api_calls + action_content).
 * DDL here must stay aligned with src/shared/db/appSchema.js (columns + action_content FK).
 * Creates translations and rewrites with random modes, chars, timestamps (last 2 months).
 * Cost: each model gets a random cost per 1M tokens ($0.5–$15; $0 if model name contains "free").
 * Transaction cost = (prompt_tokens + completion_tokens) / 1e6 * cost_per_1M for that model.
 * If a users table exists, assigns each entry a random username from it; otherwise username is null.
 * Uses sql.js so it runs without native better-sqlite3 bindings.
 *
 * Schema matches src/shared/db/appSchema.js (including input/output text stats columns).
 *
 * Each run drops action_content, clears api_calls, recreates action_content (FK to api_calls, CASCADE),
 * then inserts api_calls plus linked action_content rows (same sample input/output text per action).
 *
 * Run: pnpm generate-test-data --web|--app [options]
 */

const path = require("path");
const fs = require("fs");
const { sql } = require("../src/shared/db/appSchema.js");
const { TRANSLATION_MODELS } = require("./openrouter-script-models.js");

const DEFAULT_NUM_TRANSLATIONS = 100;
const DEFAULT_NUM_REWRITES = 50;
const DEFAULT_NUM_TRANSFORMS = 20;
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

/** Same body text for every generated action (linked in action_content). */
const SAMPLE_INPUT_TEXT =
  "AI-powered text tool: translate between languages, rewrite in different styles, and transform with custom prompts — using multiple AI providers (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, and local Ollama). Runs as a desktop app (Electron) or a self-hosted web app (Docker).";

const SAMPLE_OUTPUT_TEXT =
  "Ferramenta de texto com IA: traduza entre idiomas, reescreva em diferentes estilos e transforme com prompts personalizados — usando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama local). Funciona como um aplicativo desktop (Electron) ou como um aplicativo web autohospedado (Docker).";

/** Same rules as src/renderer/utils/misc/formatUtils.js getTextStats. */
function getTextStats(text) {
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const paragraphs = text.trim()
    ? text.split(/\n\s*\n/).filter((p) => p.trim()).length
    : 0;
  return { chars, words, paragraphs };
}

/**
 * api_calls input_* / output_* columns: chars, words, paragraphs from SAMPLE_INPUT_TEXT /
 * SAMPLE_OUTPUT_TEXT only (same strings as action_content.input_text / output_text).
 */
function statsColumnsFromSampleTexts() {
  const input = getTextStats(SAMPLE_INPUT_TEXT);
  const output = getTextStats(SAMPLE_OUTPUT_TEXT);
  return {
    input_chars: input.chars,
    input_words: input.words,
    input_paragraphs: input.paragraphs,
    output_chars: output.chars,
    output_words: output.words,
    output_paragraphs: output.paragraphs,
  };
}

function getDataDir(mode) {
  if (mode === "web") {
    return path.join(__dirname, "..", "data");
  }
  if (process.env.CONFIG_PATH) {
    return path.dirname(process.env.CONFIG_PATH);
  }
  if (process.platform === "win32") {
    const appData = process.env.APPDATA;
    if (!appData) {
      console.error("APPDATA environment variable is not set");
      process.exit(1);
    }
    return path.join(appData, "transrewrt");
  }
  return path.join(__dirname, "..", "data");
}

const REWRITE_MODES = [
  "Check Spelling & Grammar",
  "Improve Clarity",
  "Alternative versions",
  "Shorten",
  "Expand",
  "Make Formal",
  "Make Informal",
  "Make Technical",
];

const TRANSFORM_PROMPTS_PATH = path.join(__dirname, "..", "src", "config-defaults", "transform-prompts.json");

function loadTransformPrompts() {
  if (!fs.existsSync(TRANSFORM_PROMPTS_PATH)) {
    console.error(`Transform prompts file not found: ${TRANSFORM_PROMPTS_PATH}`);
    process.exit(1);
  }
  let data;
  try {
    data = JSON.parse(fs.readFileSync(TRANSFORM_PROMPTS_PATH, "utf8"));
  } catch (err) {
    console.error("Could not parse transform-prompts.json:", err.message);
    process.exit(1);
  }
  if (!Array.isArray(data)) {
    console.error("src/config-defaults/transform-prompts.json must be a JSON array");
    process.exit(1);
  }
  const names = data.map((p) => p && p.name).filter(Boolean);
  if (names.length === 0) {
    console.error("src/config-defaults/transform-prompts.json has no entries with a name field");
    process.exit(1);
  }
  return names;
}

function printUsage() {
  console.log(`Usage: pnpm generate-test-data (--web | --app) [options]

Mandatory:
  --web                  Generate test data to the web database (repo ./data)
  --app                  Use app data directory (CONFIG_PATH, APPDATA, or repo ./data)

Options:
  -t, --translations N   Number of translation rows to generate (default: ${DEFAULT_NUM_TRANSLATIONS})
  -r, --rewrites N       Number of rewrite rows to generate (default: ${DEFAULT_NUM_REWRITES})
  -f, --transforms N     Number of transform rows to generate (default: ${DEFAULT_NUM_TRANSFORMS})
  -h, --help             Show this help and exit

Reads languages from data/config.json (or CONFIG_PATH for --app). Models from
scripts/openrouter-script-models.js (same list as i18n translate script).
Transform prompt names from src/config-defaults/transform-prompts.json.
When the DB has a users table, entries get a random username from it.
Drops action_content, clears api_calls, recreates action_content (FK), then inserts rows.`);
}

function loadConfig(configPath) {
  if (!fs.existsSync(configPath)) {
    console.error(`Config not found: ${configPath}`);
    process.exit(1);
  }
  let config;
  try {
    config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  } catch (err) {
    console.error("Could not parse config:", err.message);
    process.exit(1);
  }
  if (!Array.isArray(config.top_languages) || config.top_languages.length === 0) {
    console.error("config.json must contain a non-empty top_languages array");
    process.exit(1);
  }
  const models = TRANSLATION_MODELS;
  const languages = ["Detect Language", ...config.top_languages];
  return { config, models, languages };
}

function saveTotalCost(configPath, config, totalCost) {
  const updatedConfig = {
    ...config,
    total_cost: totalCost,
  };
  fs.writeFileSync(configPath, JSON.stringify(updatedConfig, null, 2) + "\n", "utf8");
}

function parseArgs() {
  const argv = process.argv.slice(2);

  if (argv.includes("--help") || argv.includes("-h")) {
    printUsage();
    process.exit(0);
  }

  let mode = null;
  let numTranslations = DEFAULT_NUM_TRANSLATIONS;
  let numRewrites = DEFAULT_NUM_REWRITES;
  let numTransforms = DEFAULT_NUM_TRANSFORMS;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith("-")) {
      if (arg === "--web") {
        mode = "web";
        continue;
      }
      if (arg === "--app") {
        mode = "app";
        continue;
      }
      if (arg === "--translations" || arg === "-t") {
        const next = argv[i + 1];
        if (next == null || next.startsWith("-")) {
          console.error("--translations (-t) requires a number");
          printUsage();
          process.exit(1);
        }
        const n = parseInt(next, 10);
        if (Number.isNaN(n) || n < 0) {
          console.error("--translations must be a non-negative integer");
          printUsage();
          process.exit(1);
        }
        numTranslations = n;
        i++;
        continue;
      }
      if (arg === "--rewrites" || arg === "-r") {
        const next = argv[i + 1];
        if (next == null || next.startsWith("-")) {
          console.error("--rewrites (-r) requires a number");
          printUsage();
          process.exit(1);
        }
        const n = parseInt(next, 10);
        if (Number.isNaN(n) || n < 0) {
          console.error("--rewrites must be a non-negative integer");
          printUsage();
          process.exit(1);
        }
        numRewrites = n;
        i++;
        continue;
      }
      if (arg === "--transforms" || arg === "-f") {
        const next = argv[i + 1];
        if (next == null || next.startsWith("-")) {
          console.error("--transforms (-f) requires a number");
          printUsage();
          process.exit(1);
        }
        const n = parseInt(next, 10);
        if (Number.isNaN(n) || n < 0) {
          console.error("--transforms must be a non-negative integer");
          printUsage();
          process.exit(1);
        }
        numTransforms = n;
        i++;
        continue;
      }
      if (arg === "--help" || arg === "-h") {
        continue;
      }
      console.error(RED + `Unknown option: ${arg}` + RESET);
      console.error(RED + "Use --help to see usage." + RESET + "\n");
      printUsage();
      process.exit(1);
    }
  }

  if (mode === null) {
    console.error("Error: exactly one of --web or --app is required.");
    printUsage();
    process.exit(1);
  }

  return { mode, numTranslations, numRewrites, numTransforms };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const COST_PER_1M_MIN = 0.5;
const COST_PER_1M_MAX = 5;

function buildModelCostPer1M(models) {
  const unique = [...new Set(models)];
  const map = new Map();
  for (const model of unique) {
    if (model && String(model).toLowerCase().includes("free")) {
      map.set(model, 0);
    } else {
      const per1M = COST_PER_1M_MIN + Math.random() * (COST_PER_1M_MAX - COST_PER_1M_MIN);
      map.set(model, Math.round(per1M * 1e6) / 1e6);
    }
  }
  return map;
}

function calcCost(model, promptTokens, completionTokens, costPer1MMap) {
  const per1M = costPer1MMap.get(model) ?? 0;
  const totalTokens = promptTokens + completionTokens;
  const cost = (totalTokens / 1e6) * per1M;
  return Math.round(cost * 1e6) / 1e6;
}

function randomTimestamp(fromMs, toMs) {
  const t = fromMs + Math.random() * (toMs - fromMs);
  return new Date(t).toISOString();
}

function generateRows(models, languages, numTranslations, numRewrites, numTransforms, transformPromptNames, usernames) {
  const now = Date.now();
  const twoMonthsMs = 2 * 30.4375 * 24 * 60 * 60 * 1000;
  const fromMs = now - twoMonthsMs;
  const costPer1MMap = buildModelCostPer1M(models);
  const pickUser = () =>
    usernames && usernames.length > 0 ? randomChoice(usernames) : null;
  const textStats = statsColumnsFromSampleTexts();

  const rows = [];

  for (let i = 0; i < numTranslations; i++) {
    const model = randomChoice(models);
    const sourceLang = randomChoice(languages);
    let targetLang = randomChoice(languages);
    while (targetLang === sourceLang) targetLang = randomChoice(languages);
    const promptTokens = randomInt(12, 2000);
    const completionTokens = randomInt(12, 2000);
    const durationMs = randomInt(100, 6000);
    const cost = calcCost(model, promptTokens, completionTokens, costPer1MMap);
    const totalTokens = promptTokens + completionTokens;
    const tps = durationMs > 0 ? totalTokens / (durationMs / 1000) : null;

    rows.push({
      timestamp: randomTimestamp(fromMs, now),
      type: "translate",
      model,
      source_lang: sourceLang,
      target_lang: targetLang,
      rewrite_mode: null,
      transform_prompt: null,
      prompt_tokens: promptTokens,
      completion_tokens: completionTokens,
      duration_ms: durationMs,
      cost,
      tps: tps !== null ? Math.round(tps * 100) / 100 : null,
      username: pickUser(),
      ...textStats,
    });
  }

  for (let i = 0; i < numRewrites; i++) {
    const model = randomChoice(models);
    const promptTokens = randomInt(12, 2000);
    const completionTokens = randomInt(12, 2000);
    const durationMs = randomInt(100, 6000);
    const cost = calcCost(model, promptTokens, completionTokens, costPer1MMap);
    const totalTokens = promptTokens + completionTokens;
    const tps = durationMs > 0 ? totalTokens / (durationMs / 1000) : null;

    rows.push({
      timestamp: randomTimestamp(fromMs, now),
      type: "rewrite",
      model,
      source_lang: null,
      target_lang: null,
      rewrite_mode: randomChoice(REWRITE_MODES),
      transform_prompt: null,
      prompt_tokens: promptTokens,
      completion_tokens: completionTokens,
      duration_ms: durationMs,
      cost,
      tps: tps !== null ? Math.round(tps * 100) / 100 : null,
      username: pickUser(),
      ...textStats,
    });
  }

  for (let i = 0; i < numTransforms; i++) {
    const model = randomChoice(models);
    const promptTokens = randomInt(12, 2000);
    const completionTokens = randomInt(12, 2000);
    const durationMs = randomInt(100, 6000);
    const cost = calcCost(model, promptTokens, completionTokens, costPer1MMap);
    const totalTokens = promptTokens + completionTokens;
    const tps = durationMs > 0 ? totalTokens / (durationMs / 1000) : null;
    const targetLang = Math.random() < 0.4 ? randomChoice(languages) : null;

    rows.push({
      timestamp: randomTimestamp(fromMs, now),
      type: "transform",
      model,
      source_lang: null,
      target_lang: targetLang,
      rewrite_mode: null,
      transform_prompt: randomChoice(transformPromptNames),
      prompt_tokens: promptTokens,
      completion_tokens: completionTokens,
      duration_ms: durationMs,
      cost,
      tps: tps !== null ? Math.round(tps * 100) / 100 : null,
      username: pickUser(),
      ...textStats,
    });
  }

  rows.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  /** Chronologically last translate row: auto-detect → Portuguese (Brazil). */
  for (let i = rows.length - 1; i >= 0; i--) {
    if (rows[i].type === "translate") {
      rows[i].source_lang = "Detect Language";
      rows[i].target_lang = "Portuguese (BR)";
      break;
    }
  }

  return rows;
}

async function main() {
  const { mode, numTranslations, numRewrites, numTransforms } = parseArgs();
  const dataDir = getDataDir(mode);
  const configPath = process.env.CONFIG_PATH || path.join(dataDir, "config.json");
  const dbPath = path.join(dataDir, "transrewrt.db");

  console.log(`[generate-test-data] Using database: ${dbPath}`);

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const { config, models, languages } = loadConfig(configPath);
  const transformPromptNames = numTransforms > 0 ? loadTransformPrompts() : [];

  const initSqlJs = require("sql.js");
  const SQL = await initSqlJs();

  let db;
  if (fs.existsSync(dbPath)) {
    const buf = fs.readFileSync(dbPath);
    db = new SQL.Database(buf);
  } else {
    db = new SQL.Database();
  }

  /* Keep column list in sync with applyAppSchema() in src/shared/db/appSchema.js (sql.js has no shared apply). */
  db.run(`
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
  try {
    db.exec("ALTER TABLE api_calls ADD COLUMN transform_prompt TEXT");
  } catch { /* ignore */ }
  try {
    db.exec("ALTER TABLE api_calls ADD COLUMN username TEXT");
  } catch { /* ignore */ }
  for (const col of [
    "input_chars",
    "input_words",
    "input_paragraphs",
    "output_chars",
    "output_words",
    "output_paragraphs",
  ]) {
    try {
      db.exec(`ALTER TABLE api_calls ADD COLUMN ${col} INTEGER`);
    } catch { /* ignore */ }
  }

  db.run("DROP TABLE IF EXISTS action_content");
  db.run("DELETE FROM api_calls");
  try {
    db.run("DELETE FROM sqlite_sequence WHERE name = 'api_calls'");
  } catch { /* ignore */ }

  db.run("PRAGMA foreign_keys = ON");
  db.run(`
    CREATE TABLE action_content (
      api_call_id INTEGER PRIMARY KEY NOT NULL REFERENCES api_calls(id) ON DELETE CASCADE,
      input_text TEXT NOT NULL,
      output_text TEXT NOT NULL
    )
  `);

  let usernames = [];
  try {
    const tableCheck = db.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='users'");
    if (tableCheck.length > 0 && tableCheck[0].values.length > 0) {
      const result = db.exec("SELECT username FROM users");
      if (result.length > 0 && result[0].values.length > 0) {
        usernames = result[0].values.map((row) => row[0]);
      }
    }
  } catch { /* ignore */ }
  if (usernames.length > 0) {
    console.log(`Using ${usernames.length} existing user(s) for test data: ${usernames.join(", ")}`);
  }

  const rows = generateRows(models, languages, numTranslations, numRewrites, numTransforms, transformPromptNames, usernames);
  const totalCost = Math.round(
    rows.reduce((sum, row) => sum + (Number(row.cost) || 0), 0) * 1e6,
  ) / 1e6;
  const insertSql = sql.INSERT_API_CALL;
  const insertContentSql = sql.INSERT_ACTION_CONTENT;

  function readLastInsertRowid() {
    const r = db.exec("SELECT last_insert_rowid() AS id");
    if (!r.length || !r[0].values || !r[0].values.length) return null;
    return r[0].values[0][0];
  }

  for (const row of rows) {
    db.run(insertSql, [
      row.timestamp,
      row.type,
      row.model,
      row.source_lang,
      row.target_lang,
      row.rewrite_mode,
      row.transform_prompt,
      row.prompt_tokens,
      row.completion_tokens,
      row.duration_ms,
      row.cost,
      row.tps,
      row.username,
      row.input_chars,
      row.input_words,
      row.input_paragraphs,
      row.output_chars,
      row.output_words,
      row.output_paragraphs,
    ]);
    const apiCallId = readLastInsertRowid();
    if (apiCallId == null) {
      throw new Error("last_insert_rowid() missing after INSERT INTO api_calls");
    }
    db.run(insertContentSql, [apiCallId, SAMPLE_INPUT_TEXT, SAMPLE_OUTPUT_TEXT]);
  }

  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(dbPath, buffer);
  db.close();
  saveTotalCost(configPath, config, totalCost);

  const translations = rows.filter((r) => r.type === "translate").length;
  const rewrites = rows.filter((r) => r.type === "rewrite").length;
  const transforms = rows.filter((r) => r.type === "transform").length;
  console.log(`Generated ${translations} translations, ${rewrites} rewrites, and ${transforms} transforms in ${dbPath}`);
  console.log(`[generate-test-data] Updated total_cost in ${configPath}: ${totalCost.toFixed(6)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
