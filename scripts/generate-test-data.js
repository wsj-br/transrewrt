/**
 * Generate test data for transrewrt.db (api_calls table).
 * Creates translations and rewrites with random modes, chars, timestamps (last 2 years).
 * Cost: each model gets a random cost per 1M tokens ($0.5–$15; $0 if model name contains "free").
 * Transaction cost = (request_bytes + response_bytes) / 4 / 1e6 * cost_per_1M for that model.
 * Uses sql.js so it runs without native better-sqlite3 bindings.
 *
 * Run: pnpm generate-test-data [--translations N] [--rewrites N]
 */

const path = require("path");
const fs = require("fs");

const DEFAULT_NUM_TRANSLATIONS = 600;
const DEFAULT_NUM_REWRITES = 200;

function getDataDir() {
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

const DATA_DIR = getDataDir();
const CONFIG_PATH = process.env.CONFIG_PATH || path.join(DATA_DIR, "config.json");
const DB_PATH = path.join(DATA_DIR, "transrewrt.db");

const REWRITE_STYLES = [
  "Check Spelling & Grammar",
  "Improve Clarity",
  "Make Formal",
  "Make Informal",
  "Shorten",
  "Expand",
  "Make Technical",
];

function printUsage() {
  console.log(`Usage: pnpm generate-test-data [options]

Options:
  -t, --translations N   Number of translation rows to generate (default: ${DEFAULT_NUM_TRANSLATIONS})
  -r, --rewrites N       Number of rewrite rows to generate (default: ${DEFAULT_NUM_REWRITES})
  -h, --help             Show this help and exit

Reads models and languages from data/config.json (or CONFIG_PATH).`);
}

function loadConfig() {
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error(`Config not found: ${CONFIG_PATH}`);
    process.exit(1);
  }
  let config;
  try {
    config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
  } catch (err) {
    console.error("Could not parse config:", err.message);
    process.exit(1);
  }
  if (!Array.isArray(config.available_models) || config.available_models.length === 0) {
    console.error("config.json must contain a non-empty available_models array");
    process.exit(1);
  }
  if (!Array.isArray(config.available_languages) || config.available_languages.length === 0) {
    console.error("config.json must contain a non-empty available_languages array");
    process.exit(1);
  }
  const models = config.available_models;
  const languages = ["Detect Language", ...config.available_languages];
  return { models, languages };
}

function parseArgs() {
  const argv = process.argv.slice(2);

  if (argv.includes("--help") || argv.includes("-h")) {
    printUsage();
    process.exit(0);
  }

  let numTranslations = DEFAULT_NUM_TRANSLATIONS;
  let numRewrites = DEFAULT_NUM_REWRITES;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith("-")) {
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
      if (arg === "--help" || arg === "-h") {
        continue;
      }
      console.error(`Invalid option: ${arg}`);
      printUsage();
      process.exit(1);
    }
  }
  return { numTranslations, numRewrites };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const COST_PER_1M_MIN = 0.5;
const COST_PER_1M_MAX = 15;
const CHARS_PER_TOKEN = 4;

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

function calcCost(model, requestBytes, responseBytes, costPer1MMap) {
  const per1M = costPer1MMap.get(model) ?? 0;
  const tokens = (requestBytes + responseBytes) / CHARS_PER_TOKEN;
  const cost = (tokens / 1e6) * per1M;
  return Math.round(cost * 1e6) / 1e6;
}

function randomTimestamp(fromMs, toMs) {
  const t = fromMs + Math.random() * (toMs - fromMs);
  return new Date(t).toISOString();
}

function generateRows(models, languages, numTranslations, numRewrites) {
  const now = Date.now();
  const twoYearsMs = 2 * 365.25 * 24 * 60 * 60 * 1000;
  const fromMs = now - twoYearsMs;
  const costPer1MMap = buildModelCostPer1M(models);

  const rows = [];

  for (let i = 0; i < numTranslations; i++) {
    const model = randomChoice(models);
    const sourceLang = randomChoice(languages);
    let targetLang = randomChoice(languages);
    while (targetLang === sourceLang) targetLang = randomChoice(languages);
    const requestBytes = randomInt(50, 8000);
    const responseBytes = randomInt(50, 8000);
    const durationMs = randomInt(100, 6000);
    const cost = calcCost(model, requestBytes, responseBytes, costPer1MMap);
    const totalTokens = Math.round((requestBytes + responseBytes) / CHARS_PER_TOKEN) || 1;
    const tps = durationMs > 0 ? totalTokens / (durationMs / 1000) : null;

    rows.push({
      timestamp: randomTimestamp(fromMs, now),
      type: "translate",
      model,
      source_lang: sourceLang,
      target_lang: targetLang,
      rewrite_style: null,
      request_bytes: requestBytes,
      response_bytes: responseBytes,
      duration_ms: durationMs,
      cost,
      total_cost: null,
      tps: tps !== null ? Math.round(tps * 100) / 100 : null,
    });
  }

  for (let i = 0; i < numRewrites; i++) {
    const model = randomChoice(models);
    const requestBytes = randomInt(50, 8000);
    const responseBytes = randomInt(50, 8000);
    const durationMs = randomInt(100, 6000);
    const cost = calcCost(model, requestBytes, responseBytes, costPer1MMap);
    const totalTokens = Math.round((requestBytes + responseBytes) / CHARS_PER_TOKEN) || 1;
    const tps = durationMs > 0 ? totalTokens / (durationMs / 1000) : null;

    rows.push({
      timestamp: randomTimestamp(fromMs, now),
      type: "rewrite",
      model,
      source_lang: null,
      target_lang: null,
      rewrite_style: randomChoice(REWRITE_STYLES),
      request_bytes: requestBytes,
      response_bytes: responseBytes,
      duration_ms: durationMs,
      cost,
      total_cost: null,
      tps: tps !== null ? Math.round(tps * 100) / 100 : null,
    });
  }

  rows.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  let runningTotal = 0;
  for (const row of rows) {
    runningTotal += row.cost;
    row.total_cost = Math.round(runningTotal * 1e6) / 1e6;
  }

  return rows;
}

async function main() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const { numTranslations, numRewrites } = parseArgs();
  const { models, languages } = loadConfig();

  const initSqlJs = require("sql.js");
  const SQL = await initSqlJs();

  let db;
  if (fs.existsSync(DB_PATH)) {
    const buf = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buf);
  } else {
    db = new SQL.Database();
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS api_calls (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timestamp TEXT NOT NULL,
      type TEXT NOT NULL,
      model TEXT,
      source_lang TEXT,
      target_lang TEXT,
      rewrite_style TEXT,
      request_bytes INTEGER,
      response_bytes INTEGER,
      duration_ms INTEGER,
      cost REAL,
      total_cost REAL,
      tps REAL
    )
  `);

  const rows = generateRows(models, languages, numTranslations, numRewrites);
  const insertSql = `
    INSERT INTO api_calls (timestamp, type, model, source_lang, target_lang, rewrite_style, request_bytes, response_bytes, duration_ms, cost, total_cost, tps)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  for (const row of rows) {
    db.run(insertSql, [
      row.timestamp,
      row.type,
      row.model,
      row.source_lang,
      row.target_lang,
      row.rewrite_style,
      row.request_bytes,
      row.response_bytes,
      row.duration_ms,
      row.cost,
      row.total_cost,
      row.tps,
    ]);
  }

  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(DB_PATH, buffer);
  db.close();

  const translations = rows.filter((r) => r.type === "translate").length;
  const rewrites = rows.filter((r) => r.type === "rewrite").length;
  console.log(`Generated ${translations} translations and ${rewrites} rewrites in ${DB_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
