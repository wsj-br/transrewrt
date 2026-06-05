"use strict";

/**
 * Takes screenshots of the Transrewrt web app (Translate, Rewrite, Transform, History, etc.)
 * and saves them to images/screenshots/.
 *
 * Prerequisites:
 * - Web app running (e.g. pnpm run dev:web → http://localhost:5500).
 * - Set ADMIN_USERNAME and ADMIN_PASSWORD in the environment (required; script exits if missing).
 *
 * Usage: pnpm run take-screenshots [--screenshot=NAME[,NAME...]] [--locale=CODE[,CODE...]]
 *   Unknown flags, invalid `--screenshot=` names, and `--locale` filters that match nothing are rejected at startup (before config/DB/server/browser).
 *   --screenshot=…  (or --screen=…)  One or more sets, comma- or space-separated (e.g. --screenshot=translate,rewrite).
 *   --locale=CODE      (comma- or space-separated) Only run for these locale(s). On PowerShell, quote commas: '--locale=pt-BR,es' or use spaces: --locale=pt-BR es.
 * Env: BASE_URL (default http://localhost:5500), ADMIN_USERNAME, ADMIN_PASSWORD, HEADLESS (default true; set to false to see browser).
 *       HISTORY_DISABLED must not be true/1 (checked after CLI validation): exit so the History screenshot can work (match the web server env, e.g. `.env`).
 *       PUPPETEER_EXECUTABLE_PATH: path to Chrome/Chromium (use on Linux ARM / Raspberry Pi where the bundled binary is x64 only).
 *
 * Before capture, the script sets Easy mode (`mode`, `easy_provider`, `selected_preset_id`), dark `theme`,
 * and `top_languages` in data/config.json and (web) in SQLite user_preferences for ADMIN_USERNAME so the UI matches across runs.
 *
 * Before capture, loads Noto Sans families from Google Fonts (Bengali, Devanagari, KR, Gurmukhi,
 * Telugu, Thai) and applies a global font stack so UI locales like bn, hi, ko, pa, te, th render
 * correctly when system Chromium lacks those scripts (Geist only covers Latin).
 *
 * Screenshots are taken in every UI language from src/renderer/locales/ui-languages.json and saved
 * under images/screenshots/LANGCODE/ (e.g. images/screenshots/pt-BR/rewrite.png). Session logs are written
 * to dev/take-screenshots-YYYYMMDD-HHMMSS.log. Navigation/setup runs once per screenshot type in en-GB;
 * then the UI language is cycled and each capture is saved in that language's folder.
 */

const fs = require("fs");
const path = require("path");
const util = require("util");
const puppeteer = require("puppeteer");
const sharp = require("sharp");
const Database = require("better-sqlite3");
const {
  applyAppSchema,
  sql,
  promptTargetLanguageToDb,
  buildExecutionHistoryWhere,
  replaceWhere,
} = require("../src/shared/db/appSchema.js");
const { isHistoryDisabledByEnv } = require("../src/shared/historyEnv.js");

const BASE_URL = process.env.BASE_URL || "http://localhost:5500";

/** Transform screenshot flows select this prompt; seeded into custom_prompts if missing. */
const DICTIONARY_ENTRY_PROMPT_NAME = "Dictionary Entry";
const DICTIONARY_ENTRY_PROMPT_SLUG = "dictionary-entry";
const TRANSFORM_PROMPTS_PATH = path.join(__dirname, "..", "src", "config-defaults", "transform-prompts.json");
const UI_LANGUAGES_PATH = path.join(__dirname, "..", "src", "renderer", "locales", "ui-languages.json");

function loadUILanguages() {
  const raw = JSON.parse(fs.readFileSync(UI_LANGUAGES_PATH, "utf8"));
  return Array.isArray(raw) ? raw : [];
}

/** Loads `ui-languages.json` and applies `--locale=` filter when set. */
function loadAndFilterUILanguages(localeFilter) {
  let list = loadUILanguages();
  if (localeFilter && localeFilter.length > 0) {
    const codes = new Set(localeFilter);
    list = list.filter((l) => codes.has(l.code));
  }
  return list;
}

function parseArgs() {
  const out = { help: false, screenshotFilters: null, localeFilter: null, unknown: [] };
  const argv = process.argv.slice(2);
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") {
      out.help = true;
    } else if (arg.startsWith("--screenshot=") || arg.startsWith("--screen=")) {
      const raw = arg.split("=", 2)[1].trim();
      const names = raw ? [...new Set(raw.split(/[,\s]+/).map((c) => c.trim()).filter(Boolean))] : [];
      out.screenshotFilters = names.length > 0 ? names : [];
    } else if (arg.startsWith("--locale=")) {
      const val = arg.split("=", 2)[1].trim();
      // PowerShell parses unquoted "a,b,c" after = as an array, then passes "a b c" as one argv token - split on whitespace too.
      out.localeFilter = val ? val.split(/[,\s]+/).map((c) => c.trim()).filter(Boolean) : null;
    } else if (arg === "--locale" || arg === "-l") {
      const next = argv[i + 1];
      if (next == null) {
        out.unknown.push(arg);
      } else {
        // Accept both comma- and whitespace-separated lists in a single argv token.
        out.localeFilter = String(next)
          .split(/[,\s]+/)
          .map((c) => c.trim())
          .filter(Boolean);
        if (out.localeFilter.length === 0) out.localeFilter = null;
        i++;
      }
    } else {
      out.unknown.push(arg);
    }
  }
  return out;
}

function printHelp(availableScreenshotNames) {
  const baseUrl = process.env.BASE_URL || "http://localhost:5500";
  const setList =
    availableScreenshotNames && availableScreenshotNames.length > 0
      ? availableScreenshotNames.map((n) => `    ${n}`).join("\n")
      : "    (none configured)";
  console.log(BLUE + `
Take screenshots of the Transrewrt web app (Translate, Rewrite, Transform, etc.)
and save them to images/screenshots/<locale>/.

Prerequisites:
  - Web app running (e.g. pnpm run dev:web → ${baseUrl}).
  - ADMIN_USERNAME and ADMIN_PASSWORD set in the environment (required; script exits if missing).

Usage:
  node scripts/take-screenshots.js [options]
  pnpm run take-screenshots -- [options]

Options:
  --help, -h              Show this help and exit.
  --screenshot=LIST       (or --screen=LIST)  Run only these screenshot sets. Comma- or space-separated
                          names (e.g. --screenshot=translate,rewrite). Omit to run all sets below.
  --locale=CODE            Only run for these locale(s). Comma- or space-separated (e.g. --locale=pt-BR,es,ja).
  --locale CODE, -l CODE  Only run for these locale(s). The locale list must be a single argv token: --locale pt-BR,es,ja or --locale "pt-BR es ja".

Configured screenshot sets (${availableScreenshotNames?.length ?? 0}):
${setList}

Environment:
  BASE_URL                   Base URL of the web app (default: ${baseUrl}).
  ADMIN_USERNAME             Admin username for web login.
  ADMIN_PASSWORD             Admin password for web login.
  HEADLESS                   Set to "false" to see the browser (default: true).
  PUPPETEER_EXECUTABLE_PATH  Path to Chrome/Chromium (e.g. on Linux ARM if bundled binary is x64 only).

Screenshots are taken per UI language from src/renderer/locales/ui-languages.json and saved under
images/screenshots/<code>/ (e.g. images/screenshots/pt-BR/rewrite.png). A session log file is written to
dev/take-screenshots-YYYYMMDD-HHMMSS.log.

Examples:
  node scripts/take-screenshots.js --help
  pnpm run take-screenshots
  pnpm run take-screenshots -- --screenshot=translate
  pnpm run take-screenshots -- --screenshot=translate,rewrite,history
  pnpm run take-screenshots -- --locale=pt-BR,ja


` + RESET);
}

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const BLUE = "\x1b[34m";
const RESET = "\x1b[0m";
const CHECK = "\u2713";
const CROSS = "\u2717";

function getDataDir() {
  if (process.env.CONFIG_PATH) {
    return path.dirname(process.env.CONFIG_PATH);
  }
  return path.join(__dirname, "..", "data");
}

const SCREENSHOT_TOP_LANGUAGES = ["English (UK)", "Portuguese (BR)", "Spanish"];
/** Fixed dark theme for marketing screenshots (avoids light UI when theme is system + OS is light). */
const SCREENSHOT_THEME = "dark";
/** Google Fonts CSS2 URL — Noto families for scripts Geist does not cover. */
const SCREENSHOT_NOTO_FONTS_URL =
  "https://fonts.googleapis.com/css2?" +
  [
    "family=Noto+Sans+Bengali:wght@400;700",
    "family=Noto+Sans+Devanagari:wght@400;700",
    "family=Noto+Sans+KR:wght@400;700",
    "family=Noto+Sans+Gurmukhi:wght@400;700",
    "family=Noto+Sans+Telugu:wght@400;700",
    "family=Noto+Sans+Thai:wght@400;700",
  ].join("&") +
  "&display=swap";
const SCREENSHOT_FONT_FAMILY_STACK =
  '"Geist", "Noto Sans Bengali", "Noto Sans Devanagari", "Noto Sans KR", "Noto Sans Gurmukhi", "Noto Sans Telugu", "Noto Sans Thai", system-ui, sans-serif';
const SCREENSHOT_FONT_STYLE_ID = "transrewrt-screenshot-fonts";
/** Easy mode preset id shown in the toolbar (Standard preset in easy-mode-config/presets.json). */
const SCREENSHOT_DEFAULT_PRESET_ID = "standard";
const SCREENSHOT_EASY_PROVIDER = "openrouter";
/** Resolved OpenRouter model for Standard preset — used in execution history sample rows. */
const SCREENSHOT_HISTORY_MODEL_ID = "openrouter/qwen/qwen3-235b-a22b";
/** Canonical translate sample for History screenshots (list is ordered by timestamp DESC). */
const HISTORY_SAMPLE_INPUT =
  "AI-powered text tool: translate between languages, rewrite in different styles, and transform with custom prompts - using multiple AI providers (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, and local Ollama). Runs as a desktop app (Electron) or a self-hosted web app (Docker).";
const HISTORY_SAMPLE_OUTPUT =
  "Ferramenta de texto com IA: traduza entre idiomas, reescreva em diferentes estilos e transforme com prompts personalizados - usando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama local). Funciona como um aplicativo desktop (Electron) ou como um aplicativo web autohospedado (Docker).";

function screenshotPresetOptionSelector(presetId) {
  const slug = String(presetId).replace(/\//g, "-");
  return `[data-testid="preset-option-${slug}"]`;
}

/**
 * Web: merged config uses per-user SQLite prefs for these keys. Electron: `data/config.json`.
 * Ensures screenshot runs use Easy mode with the Standard preset and consistent top languages.
 */
function applyScreenshotConfigConsistency() {
  const dataDir = getDataDir();
  const configPath = path.join(dataDir, "config.json");
  let cfg = {};
  if (fs.existsSync(configPath)) {
    try {
      cfg = JSON.parse(fs.readFileSync(configPath, "utf8"));
    } catch (err) {
      log("Screenshot config: could not parse %s: %s (using {}).", configPath, err.message);
      cfg = {};
    }
  }
  cfg.mode = "easy";
  cfg.easy_provider = SCREENSHOT_EASY_PROVIDER;
  cfg.selected_preset_id = SCREENSHOT_DEFAULT_PRESET_ID;
  cfg.theme = SCREENSHOT_THEME;
  cfg.top_languages = [...SCREENSHOT_TOP_LANGUAGES];
  fs.mkdirSync(path.dirname(configPath), { recursive: true });
  fs.writeFileSync(configPath, JSON.stringify(cfg, null, 2) + "\n", "utf8");
  log(
    "Screenshot config: wrote Easy mode (preset %s, provider %s), theme %s, and top_languages to %s.",
    SCREENSHOT_DEFAULT_PRESET_ID,
    SCREENSHOT_EASY_PROVIDER,
    SCREENSHOT_THEME,
    configPath,
  );

  const username =
    process.env.ADMIN_USERNAME != null && String(process.env.ADMIN_USERNAME).trim()
      ? String(process.env.ADMIN_USERNAME).trim()
      : null;
  if (!username) {
    return;
  }
  const dbPath = path.join(dataDir, "transrewrt.db");
  if (!fs.existsSync(dbPath)) {
    log("Screenshot config: no DB at %s; skipped user_preferences.", dbPath);
    return;
  }
  let db;
  try {
    db = new Database(dbPath);
    applyAppSchema(db);
    const row = db.prepare("SELECT id FROM users WHERE username = ?").get(username);
    if (!row) {
      log("Screenshot config: no user %s in users table; config.json only.", username);
      return;
    }
    const prefRow = db.prepare("SELECT data FROM user_preferences WHERE user_id = ?").get(row.id);
    let current = {};
    if (prefRow && prefRow.data) {
      try {
        const parsed = JSON.parse(prefRow.data);
        if (parsed && typeof parsed === "object") current = parsed;
      } catch {
        /* keep current = {} */
      }
    }
    const next = {
      ...current,
      mode: "easy",
      easy_provider: SCREENSHOT_EASY_PROVIDER,
      selected_preset_id: SCREENSHOT_DEFAULT_PRESET_ID,
      theme: SCREENSHOT_THEME,
      top_languages: [...SCREENSHOT_TOP_LANGUAGES],
    };
    db.prepare(
      "INSERT INTO user_preferences (user_id, data) VALUES (?, ?) ON CONFLICT(user_id) DO UPDATE SET data = excluded.data",
    ).run(row.id, JSON.stringify(next));
    log("Screenshot config: merged into user_preferences for %s.", username);
  } catch (err) {
    log("Screenshot config: user_preferences merge failed: %s", err.message);
  } finally {
    if (db) db.close();
  }
}

function ensureDictionaryEntryPrompt() {
  const dataDir = getDataDir();
  const dbPath = path.join(dataDir, "transrewrt.db");
  if (!fs.existsSync(path.dirname(dbPath))) {
    log("Data directory %s does not exist; skipping prompt ensure (no DB).", dataDir);
    return;
  }
  let db;
  try {
    db = new Database(dbPath);
    applyAppSchema(db);
    const existing = db.prepare("SELECT 1 FROM custom_prompts WHERE name = ?").get(DICTIONARY_ENTRY_PROMPT_NAME);
    if (existing) {
      log("Prompt '%s' already in custom_prompts.", DICTIONARY_ENTRY_PROMPT_NAME);
      db.close();
      return;
    }
  } catch (err) {
    log("Could not open DB at %s: %s", dbPath, err.message);
    if (db) db.close();
    return;
  }
  if (!fs.existsSync(TRANSFORM_PROMPTS_PATH)) {
    log("Transform prompts file not found: %s", TRANSFORM_PROMPTS_PATH);
    db.close();
    return;
  }
  let prompts;
  try {
    prompts = JSON.parse(fs.readFileSync(TRANSFORM_PROMPTS_PATH, "utf8"));
  } catch (err) {
    log("Could not parse %s: %s", TRANSFORM_PROMPTS_PATH, err.message);
    db.close();
    return;
  }
  const entry = Array.isArray(prompts)
    ? prompts.find((p) => p && p.name === DICTIONARY_ENTRY_PROMPT_NAME)
    : null;
  if (!entry) {
    log("'%s' not found in %s.", DICTIONARY_ENTRY_PROMPT_NAME, TRANSFORM_PROMPTS_PATH);
    db.close();
    return;
  }
  const now = new Date().toISOString();
  const instructions =
    typeof entry.instructions === "string"
      ? entry.instructions
      : JSON.stringify(entry.instructions || []);
  const promptInstructions =
    entry.prompt_instructions != null && String(entry.prompt_instructions).trim()
      ? String(entry.prompt_instructions).trim()
      : null;
  try {
    db.prepare(sql.CUSTOM_PROMPTS_INSERT).run(
      entry.name,
      entry.role || "",
      instructions,
      entry.output_description ?? "transformed",
      entry.temperature ?? 0.4,
      promptTargetLanguageToDb(entry.target_language),
      promptInstructions,
      entry.created_at || now,
      now,
      null,
    );
    log("Imported '%s' into custom_prompts from %s.", DICTIONARY_ENTRY_PROMPT_NAME, TRANSFORM_PROMPTS_PATH);
  } catch (err) {
    log("Failed to insert '%s': %s", DICTIONARY_ENTRY_PROMPT_NAME, err.message);
  }
  db.close();
}

/**
 * Ensures the first **translate** row in execution history (same order as History page: timestamp DESC,
 * mixed types) uses the canonical sample input - that is what `prepareHistory` clicks. If it already does,
 * skip insert to avoid duplicate sample rows.
 */
function ensureHistorySampleForScreenshots() {
  const dataDir = getDataDir();
  const dbPath = path.join(dataDir, "transrewrt.db");
  if (!fs.existsSync(path.dirname(dbPath))) {
    log("Data directory %s does not exist; skipping history sample.", dataDir);
    return;
  }
  let db;
  try {
    db = new Database(dbPath);
    applyAppSchema(db);
  } catch (err) {
    log("Could not open DB for history sample: %s", err.message);
    if (db) db.close();
    return;
  }
  try {
    const { whereClause, params } = buildExecutionHistoryWhere(null, null, null, "a");
    const q = replaceWhere(sql.GET_EXECUTION_HISTORY, whereClause);
    const rows = db.prepare(q).all(...params);
    const firstTranslate = rows.find((r) => r && r.type === "translate");
    if (firstTranslate && firstTranslate.input_text === HISTORY_SAMPLE_INPUT) {
      log("First translate in history list is already the screenshot sample; skipping insert.");
      db.close();
      return;
    }
  } catch (err) {
    log("Could not read execution history for sample check: %s", err.message);
    db.close();
    return;
  }
  const now = new Date().toISOString();
  const username =
    process.env.ADMIN_USERNAME != null && String(process.env.ADMIN_USERNAME).trim()
      ? String(process.env.ADMIN_USERNAME).trim()
      : null;
  const inputText = HISTORY_SAMPLE_INPUT;
  const outputText = HISTORY_SAMPLE_OUTPUT;
  try {
    const insertCall = db.prepare(sql.INSERT_API_CALL);
    const insertContent = db.prepare(sql.INSERT_ACTION_CONTENT);
    const tx = db.transaction(() => {
      const info = insertCall.run(
        now,
        "translate",
        SCREENSHOT_HISTORY_MODEL_ID,
        "Detect Language",
        "pt-BR",
        "",
        null,
        12,
        48,
        1200,
        0.0001,
        42.5,
        username,
        inputText.length,
        8,
        1,
        outputText.length,
        12,
        1,
      );
      insertContent.run(info.lastInsertRowid, inputText, outputText);
    });
    tx();
    log("Inserted execution history sample translate row (newest timestamp → first in list).");
  } catch (err) {
    log("Failed to insert history sample: %s", err.message);
  }
  db.close();
}

const OUT_DIR = path.join(__dirname, "..", "images", "screenshots");
const LOG_DIR = path.join(__dirname, "..", "dev");
let logStream = null;
/** When inside a screenshot set loop, prepended to log lines (e.g. "  "). Deeper indent for "Selected"/"Saved" uses 5 spaces. */
let logIndent = "";

function getTimestamp() {
  const d = new Date();
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

/** Wall-clock duration as HH:MM:SS (same idea as translate-docs). */
function formatElapsed(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function initLogFile() {
  const d = new Date();
  const Y = d.getFullYear();
  const M = String(d.getMonth() + 1).padStart(2, "0");
  const D = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  fs.mkdirSync(LOG_DIR, { recursive: true });
  const logPath = path.join(LOG_DIR, `take-screenshots-${Y}${M}${D}-${h}${m}${s}.log`);
  logStream = fs.createWriteStream(logPath, { flags: "a" });
  return logPath;
}

function log(msg, ...args) {
  let indent = logIndent;
  let red = false;
  if (args.length > 0 && args[args.length - 1] != null && typeof args[args.length - 1] === "object" && ("indent" in args[args.length - 1] || "red" in args[args.length - 1])) {
    const opts = args.pop();
    if (opts.indent === 2) indent = "     ";
    if (opts.red) red = true;
  }
  const ts = getTimestamp();
  const formatted = args.length > 0 ? util.format(msg, ...args) : msg;
  const content = `${indent}${formatted}`;
  const line = `${ts} - ${red ? RED + content + RESET : content}`;
  console.log(line);
  if (logStream && logStream.writable) {
    logStream.write(line + "\n");
  }
}

function getChromeExecutablePath() {
  const fromEnv = process.env.PUPPETEER_EXECUTABLE_PATH;
  if (fromEnv && fs.existsSync(fromEnv)) return fromEnv;
  if (fromEnv) return null;
  const commonPaths = [
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/google-chrome",
  ];
  for (const p of commonPaths) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

async function checkAppResponding() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(BASE_URL, { signal: controller.signal });
    clearTimeout(timeout);
    return res.ok || res.status < 500;
  } catch {
    clearTimeout(timeout);
    return false;
  }
}
const HEADLESS = process.env.HEADLESS !== "false";
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2500;

const SCREENSHOTS = [
  { name: "translate", prepare: prepareTranslate, capture: captureTranslate },
  { name: "rewrite", prepare: prepareRewrite, capture: captureRewrite },
  { name: "transform", prepare: prepareTransform, capture: captureTransform },
  { name: "transform-prompt-edit", prepare: prepareTransformNewPrompt, capture: captureTransformNewPrompt, finalTeardown: finalTeardownTransformPromptEdit },
  { name: "transform-generate", initialPrepare: initialPrepareTransformGenerate, prepare: prepareTransformGenerate, capture: captureTransformGenerate, teardown: teardownTransformGenerate, finalTeardown: finalTeardownTransformGenerate, prepareTeardownPerLocale: true },
  { name: "dashboard-summary", prepare: prepareDashboardSummary, capture: captureDashboardSummary },
  { name: "dashboard-filter", prepare: prepareDashboardFilter, capture: captureDashboardFilter },
  { name: "settings-general", prepare: prepareSettingsGeneral, capture: captureSettingsGeneral },
  { name: "language-selector", prepare: prepareLanguageSelector, capture: captureLanguageSelector },
  { name: "preset-selector", prepare: preparePresetSelector, capture: capturePresetSelector },
  { name: "sidebar", prepare: prepareSidebar, capture: captureSidebar },
  { name: "history", prepare: prepareHistory, capture: captureHistory },
];

/** Exit 1 if `--screenshot=` names are not all in `SCREENSHOTS` (run before DB/server/browser). */
function assertValidScreenshotCliFilters(screenshotFilters) {
  if (screenshotFilters == null || screenshotFilters.length === 0) return;
  const available = new Set(SCREENSHOTS.map((s) => s.name));
  const unknown = screenshotFilters.filter((n) => !available.has(n));
  if (unknown.length === 0) return;
  console.error(
    RED +
      "Unknown screenshot set(s): " +
      unknown.join(", ") +
      "; available: " +
      [...available].join(", ") +
      RESET,
  );
  console.error(RED + "Use --help to list valid names." + RESET + "\n");
  process.exit(1);
}

async function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForSelector(page, selector, options = {}) {
  await page.waitForSelector(selector, { timeout: 15000, ...options });
}

async function waitForSelectorWithRetry(page, selector, options = {}) {
  const { maxRetries = MAX_RETRIES, retryDelayMs = RETRY_DELAY_MS, timeout = 10000 } = options;
  const selectorOpts = { timeout };
  if (options.visible !== undefined) selectorOpts.visible = options.visible;
  let lastErr;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await page.waitForSelector(selector, selectorOpts);
      return;
    } catch (err) {
      lastErr = err;
      if (attempt < maxRetries) {
        log("Selector %s not found (attempt %d/%d), retrying in %ds...", selector, attempt, maxRetries, retryDelayMs / 1000);
        await wait(retryDelayMs);
      }
    }
  }
  throw lastErr;
}

/** Summary tab mounts `[data-testid="dashboard-tabpanel-summary"]` only after cost data has loaded. */
async function waitForDashboardSummaryReady(page) {
  await waitForSelector(page, "[data-testid=\"dashboard-tabpanel-summary\"]", { timeout: 30000 });
}

async function clickByTestId(page, testId) {
  const sel = `[data-testid="${testId}"]`;
  log("Waiting for [data-testid=%s]", testId);
  await waitForSelector(page, sel);
  log("Clicking [data-testid=%s]", testId);
  await page.click(sel);
  await wait(400);
}

const APP_SHELL_TIMEOUT_MS = 30000;

async function ensureAppShell(page) {
  const hasNav = await page.$("[data-testid=\"main-nav\"]");
  if (hasNav) {
    log("App shell (main nav) already visible.");
    return;
  }
  log("Waiting for app shell (main nav), timeout %ds...", APP_SHELL_TIMEOUT_MS / 1000);
  try {
    await waitForSelector(page, "[data-testid=\"main-nav\"]", { timeout: APP_SHELL_TIMEOUT_MS });
    log("App shell ready.");
  } catch (err) {
    log(
      "The main app (sidebar) did not appear within %ds. If the app shows a login page, set ADMIN_USERNAME and ADMIN_PASSWORD. If login was attempted, check credentials and that the server accepted the login.",
      APP_SHELL_TIMEOUT_MS / 1000
    );
    throw err;
  }
}

async function maybeLogin(page) {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const loginVisible = await page.$("#login-username");
  if (!loginVisible) {
    log("No login form detected.");
    return;
  }
  if (!username || !password) {
    log("Login form visible but ADMIN_USERNAME/ADMIN_PASSWORD not set; skipping login.");
    return;
  }
  log("Login form detected; submitting credentials...");
  await page.type("#login-username", username, { delay: 50 });
  await page.type("#login-password", password, { delay: 50 });
  await page.click('form button[type="submit"]');
  log("Waiting 3s for login to complete...");
  await wait(3000);
}

async function setUILanguage(page, targetCode, options = {}) {
  const { index, total, englishName } = options;
  if (index != null && total != null) {
    log("Setting UI language %d/%d to %s (%s)...", index, total, targetCode, englishName != null ? englishName : targetCode);
  } else {
    log("Setting UI language to %s...", targetCode);
  }
  const getFirstVisibleCenter = async (selectors) =>
    page.evaluate((selectorList) => {
      const isVisible = (el) => {
        if (!el || !(el instanceof HTMLElement)) return false;
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          rect.width > 0 &&
          rect.height > 0
        );
      };
      for (const selector of selectorList) {
        const nodes = Array.from(document.querySelectorAll(selector));
        const visible = nodes.find(isVisible);
        if (!visible) continue;
        visible.scrollIntoView({ block: "center", inline: "center" });
        const r = visible.getBoundingClientRect();
        return {
          selector,
          x: Math.round(r.left + r.width / 2),
          y: Math.round(r.top + r.height / 2),
        };
      }
      return null;
    }, selectors);

  const clickVisibleBySelectors = async (selectors) => {
    const target = await getFirstVisibleCenter(selectors);
    if (!target) return "";
    await page.mouse.click(target.x, target.y);
    return target.selector;
  };

  const triggerSelectors = [
    // Preferred: header language trigger (avoid any non-header controls).
    "header [data-testid=\"language-selector-trigger\"][aria-label=\"Interface language\"]",
    "header [data-testid=\"language-selector-trigger\"]",
    "[data-testid=\"language-selector-trigger\"][aria-label=\"Interface language\"]",
    "[data-testid=\"language-selector-trigger\"]",
  ];

  // Short, bounded polling: avoid long waits if the selector is not rendered in current view/layout.
  let triggerSelectorUsed = "";
  for (let attempt = 1; attempt <= 6; attempt++) {
    triggerSelectorUsed = await clickVisibleBySelectors(triggerSelectors);
    if (triggerSelectorUsed) break;
    await wait(500);
  }
  if (!triggerSelectorUsed) {
    log("Language selector trigger not visible/clickable; skipping UI language change.");
    return;
  }
  log("Opened language menu via selector: %s", triggerSelectorUsed);
  await wait(200);
  const optionSelectors = [
    `[data-testid="language-selector"] [data-testid="language-option-${targetCode}"]`,
    `[role="menu"] [data-testid="language-option-${targetCode}"]`,
    `[data-testid="language-option-${targetCode}"]`,
  ];
  let optionSelectorUsed = await clickVisibleBySelectors(optionSelectors);
  if (!optionSelectorUsed && targetCode === "en-GB") {
    // In many runs en-GB is already active; avoid expensive waits/retries for the bootstrap pass.
    log("Language option %s not visible; assuming already active and continuing.", targetCode);
    await page.keyboard.press("Escape");
    await wait(150);
    return;
  }
  if (!optionSelectorUsed) {
    await wait(200);
    optionSelectorUsed = await clickVisibleBySelectors(optionSelectors);
  }
  if (!optionSelectorUsed) {
    log("Language option %s not found; continuing.", targetCode);
    await page.keyboard.press("Escape");
    await wait(150);
    return;
  }
  await wait(450);
  const triggerText = await page.evaluate(() => {
    const btn =
      document.querySelector("header [data-testid=\"language-selector-trigger\"][aria-label=\"Interface language\"]")
      || document.querySelector("[data-testid=\"language-selector-trigger\"][aria-label=\"Interface language\"]")
      || document.querySelector("header [data-testid=\"language-selector-trigger\"]")
      || document.querySelector("[data-testid=\"language-selector-trigger\"]");
    return btn ? String(btn.textContent || "").trim() : "";
  });
  if (triggerText && triggerText !== targetCode) {
    // One retry when the menu interaction did not apply.
    await page.keyboard.press("Escape");
    await wait(100);
    const secondTrigger = await clickVisibleBySelectors(triggerSelectors);
    if (secondTrigger) {
      await wait(150);
      const secondOption = await clickVisibleBySelectors(optionSelectors);
      if (secondOption) await wait(450);
    }
  }
  const finalTriggerText = await page.evaluate(() => {
    const btn =
      document.querySelector("header [data-testid=\"language-selector-trigger\"][aria-label=\"Interface language\"]")
      || document.querySelector("[data-testid=\"language-selector-trigger\"][aria-label=\"Interface language\"]")
      || document.querySelector("header [data-testid=\"language-selector-trigger\"]")
      || document.querySelector("[data-testid=\"language-selector-trigger\"]");
    return btn ? String(btn.textContent || "").trim() : "";
  });
  if (finalTriggerText && finalTriggerText !== targetCode) {
    throw new Error(`UI language did not switch to ${targetCode} (current: ${finalTriggerText})`);
  }
  log("Selected %s via %s (header now: %s).", targetCode, optionSelectorUsed, finalTriggerText || "(unknown)", { indent: 2 });
}

async function setScreenshotDefaultPreset(page) {
  const presetId = SCREENSHOT_DEFAULT_PRESET_ID;
  log("Selecting default screenshot preset %s...", presetId);
  const triggerSel = "[data-testid=\"preset-selector\"]";
  const trigger = await page.$(triggerSel);
  if (!trigger) {
    log("Preset selector not found; continuing.");
    return;
  }
  const combobox = await page.$(`${triggerSel} [role="combobox"], ${triggerSel} button`);
  if (combobox) {
    await combobox.click();
  } else {
    await trigger.click();
  }
  await wait(300);
  const optionSel = screenshotPresetOptionSelector(presetId);
  const optionReady = await page.waitForSelector(optionSel, { timeout: 8000 }).then(() => true).catch(() => false);
  if (!optionReady) {
    log("Preset option for %s not found (%s); continuing.", presetId, optionSel);
    await page.keyboard.press("Escape");
    await wait(200);
    return;
  }
  await wait(200);
  await page.click(optionSel);
  log("Selected preset %s.", presetId);
  await wait(400);
  await page.keyboard.press("Escape");
  await wait(200);
}

/** Set Translate page From: Detect Language, To: Portuguese (BR). Run after setScreenshotDefaultPreset. */
async function setTranslateFromToLanguages(page) {
  await clickByTestId(page, "nav-translate");
  await wait(500);
  const fromSel = "[data-testid=\"translate-from\"]";
  const fromTrigger = await page.$(`${fromSel} [role="combobox"], ${fromSel} button`);
  if (fromTrigger) await fromTrigger.click();
  else await page.click(fromSel);
  await wait(400);
  await clickByTestId(page, "translate-from-option-detect-language");
  await wait(600);
  const toSel = "[data-testid=\"translate-to\"]";
  const toTrigger = await page.$(`${toSel} [role="combobox"], ${toSel} button`);
  if (toTrigger) await toTrigger.click();
  else await page.click(toSel);
  await wait(500);
  const toOptionSelectors = [
    "[data-testid=\"translate-to-option-pt-br\"]",
    "[data-testid=\"translate-to-option-portuguese-br\"]",
    "[data-testid-code=\"translate-to-option-pt-br\"]",
  ];
  let optionEl = null;
  for (const sel of toOptionSelectors) {
    optionEl = await page.$(sel);
    if (optionEl) break;
  }
  if (!optionEl) {
    await page.waitForSelector("[role=\"listbox\"]", { timeout: 3000 }).catch(() => null);
    await wait(300);
    for (const sel of toOptionSelectors) {
      optionEl = await page.$(sel);
      if (optionEl) break;
    }
  }
  if (!optionEl) {
    const clicked = await page.evaluate(() => {
      const listbox = document.querySelector("[role=\"listbox\"]");
      if (!listbox) return false;
      const option = Array.from(listbox.querySelectorAll("[role=\"option\"]")).find(
        (el) => el.getAttribute("value") === "pt-BR" || (el.textContent && el.textContent.includes("Portuguese") && el.textContent.includes("BR"))
      );
      if (option) {
        option.click();
        return true;
      }
      return false;
    });
    if (!clicked) {
      log("Translate To option pt-BR/Portuguese (BR) not found; pressing Escape.");
      await page.keyboard.press("Escape");
      await wait(200);
      return;
    }
  } else {
    await optionEl.click();
  }
  await wait(400);
  log("Set Translate From: Detect Language, To: Portuguese (BR).");
}

async function prepareTranslate(page) {
  await clickByTestId(page, "nav-translate");
  await wait(500);
}

async function captureTranslate(page, filePath) {
  await page.screenshot({ path: filePath });
}

async function prepareRewrite(page) {
  await clickByTestId(page, "nav-rewrite");
  await wait(500);
}

async function captureRewrite(page, filePath) {
  await page.screenshot({ path: filePath });
}

async function prepareTransform(page) {
  await clickByTestId(page, "nav-transform");
  await wait(500);
  const promptSel = "[data-testid=\"prompt-selector\"]";
  const hasTrigger = await page.$(promptSel);
  if (hasTrigger) {
    const combobox = await page.$(`${promptSel} [role="combobox"], ${promptSel} button`);
    if (combobox) await combobox.click();
    else await page.click(promptSel);
    await wait(400);
    const optionSel = `[data-testid="prompt-option-${DICTIONARY_ENTRY_PROMPT_SLUG}"]`;
    const opt = await page.$(optionSel);
    if (opt) {
      await opt.click();
      await wait(300);
    } else {
      log("Prompt option %s not found; continuing.", DICTIONARY_ENTRY_PROMPT_SLUG);
    }
  }
}

async function captureTransform(page, filePath) {
  await page.screenshot({ path: filePath });
}

async function prepareTransformNewPrompt(page) {
  await clickByTestId(page, "nav-transform");
  await wait(500);
  await clickByTestId(page, "new-prompt-button");
  await wait(600);
}

async function captureTransformNewPrompt(page, filePath) {
  await page.screenshot({ path: filePath });
}

/** After transform-prompt-edit captures, return to Transform run view so the app is in a known state (e.g. when using --screenshot=). */
async function finalTeardownTransformPromptEdit(page) {
  const backToRun = await page.$("[data-testid=\"transform-editor-back-to-run\"]");
  if (backToRun) {
    await backToRun.click();
    await wait(400);
  }
}

/** Runs once before the locale loop: Transform → select prompt → Edit prompt (opens editor). */
async function initialPrepareTransformGenerate(page) {
  await clickByTestId(page, "nav-transform");
  await wait(500);
  // If we're still in the transform editor (e.g. from transform-prompt-edit), go back to run view so prompt-selector is visible
  const backToRun = await page.$("[data-testid=\"transform-editor-back-to-run\"]");
  if (backToRun) {
    await backToRun.click();
    await wait(600);
  }
  // Open prompt dropdown and select Dictionary Entry so "Edit prompt" is visible
  const selectorTrigger = await page.$("[data-testid=\"prompt-selector\"] [role=\"combobox\"]");
  if (selectorTrigger) {
    await selectorTrigger.click();
    await wait(400);
  } else {
    await page.click("[data-testid=\"prompt-selector\"]");
    await wait(400);
  }
  await clickByTestId(page, `prompt-option-${DICTIONARY_ENTRY_PROMPT_SLUG}`);
  await wait(400);
  await clickByTestId(page, "edit-prompt-button");
  await wait(600);
}

/** Per-locale: open the Generate prompt modal (we are already in the editor). */
async function prepareTransformGenerate(page) {
  await clickByTestId(page, "generate-prompt-button");
  await wait(600);
}

async function captureTransformGenerate(page, filePath) {
  const clip = await page.evaluate(() => {
    const modal = document.querySelector("[data-testid=\"generate-prompt-modal\"]");
    if (!modal) return null;
    const r = modal.getBoundingClientRect();
    const padding = 4;
    return {
      x: Math.max(0, Math.round(r.left - padding)),
      y: Math.max(0, Math.round(r.top - padding)),
      width: Math.round(r.width + padding * 2),
      height: Math.round(r.height + padding * 2),
    };
  });
  if (clip) {
    await page.screenshot({ path: filePath, clip });
  } else {
    await page.screenshot({ path: filePath });
  }
}

async function teardownTransformGenerate(page) {
  // Use data-testid so closing works regardless of translated "Cancel" label
  const cancel = await page.$("[data-testid=\"generate-prompt-cancel\"]");
  if (cancel) await cancel.click();
  else await page.keyboard.press("Escape");
  await wait(200);
  // Stay in editor; next locale will set language and open modal again
}

/** After all transform-generate captures, return to Transform run view. */
async function finalTeardownTransformGenerate(page) {
  const backToRun = await page.$("[data-testid=\"transform-editor-back-to-run\"]");
  if (backToRun) {
    await backToRun.click();
    await wait(400);
  }
}

async function prepareDashboardSummary(page) {
  await clickByTestId(page, "nav-dashboard");
  log("Waiting for dashboard summary to load...");
  await waitForDashboardSummaryReady(page);
}

async function captureDashboardSummary(page, filePath) {
  await page.screenshot({ path: filePath });
}

async function prepareSettingsGeneral(page) {
  await clickByTestId(page, "nav-settings");
  await wait(500);
  await clickByTestId(page, "settings-tab-general");
  await wait(500);
}

async function captureSettingsGeneral(page, filePath) {
  await page.screenshot({ path: filePath });
}

let screenshotWebFontsLoaded = false;

/**
 * Loads Noto web fonts and applies a global font stack so bn/hi/ko/pa/te/th (and the language menu)
 * render correctly in headless Chromium when system fonts are missing.
 */
async function ensureScreenshotWebFonts(page) {
  if (screenshotWebFontsLoaded) return;
  log("Loading Noto web fonts for Indic/Korean/Thai UI scripts...");
  try {
    await page.evaluate(
      async (fontUrl, fontStack, styleId) => {
        if (document.getElementById(styleId)) return;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = fontUrl;
        document.head.appendChild(link);
        await new Promise((resolve) => {
          link.onload = () => resolve();
          link.onerror = () => resolve();
          setTimeout(resolve, 8000);
        });
        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `body, body * { font-family: ${fontStack} !important; }`;
        document.head.appendChild(style);
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }
      },
      SCREENSHOT_NOTO_FONTS_URL,
      SCREENSHOT_FONT_FAMILY_STACK,
      SCREENSHOT_FONT_STYLE_ID,
    );
    screenshotWebFontsLoaded = true;
    log("Noto web fonts loaded.");
  } catch (err) {
    log("Could not load Noto web fonts (non-fatal): %s", err.message);
  }
}

async function prepareLanguageSelector(page) {
  await ensureScreenshotWebFonts(page);
}

async function captureLanguageSelector(page, filePath) {
  const triggerSel = "[data-testid=\"language-selector-trigger\"]";
  await waitForSelector(page, triggerSel);
  await page.click(triggerSel);
  await waitForSelector(page, "[role=\"menu\"]", { visible: true });
  await wait(400);
  const clip = await page.evaluate(() => {
    const btn = document.querySelector("[data-testid=\"language-selector-trigger\"]");
    if (!btn) return null;
    const padding = 12;
    let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
    const addRect = (r) => {
      x1 = Math.min(x1, r.left);
      y1 = Math.min(y1, r.top);
      x2 = Math.max(x2, r.right);
      y2 = Math.max(y2, r.bottom);
    };
    addRect(btn.getBoundingClientRect());
    const menu = document.querySelector("[role=\"menu\"]");
    if (menu) addRect(menu.getBoundingClientRect());
    document.querySelectorAll("[role=\"menuitem\"]").forEach((el) => addRect(el.getBoundingClientRect()));
    if (x1 === Infinity) return null;
    return {
      x: Math.max(0, Math.round(x1 - padding)),
      y: Math.max(0, Math.round(y1 - padding)),
      width: Math.round(x2 - x1 + padding * 2),
      height: Math.round(y2 - y1 + padding * 2),
    };
  });
  if (clip) {
    const buffer = await page.screenshot({ clip, encoding: "binary" });
    const halfW = Math.round(clip.width / 2);
    const halfH = Math.round(clip.height / 2);
    await sharp(buffer).resize(halfW, halfH).toFile(filePath);
  } else {
    await page.screenshot({ path: filePath });
  }
  await page.keyboard.press("Escape");
  await wait(200);
}

async function preparePresetSelector(page) {
  await clickByTestId(page, "nav-translate");
  await wait(600);
}

async function capturePresetSelector(page, filePath) {
  const triggerSel = "[data-testid=\"preset-selector\"]";
  const combobox = await page.$(`${triggerSel} [role="combobox"], ${triggerSel} button`);
  if (combobox) await combobox.click();
  else await page.click(triggerSel);
  await wait(500);
  const clip = await page.evaluate(() => {
    const trigger = document.querySelector("[data-testid=\"preset-selector\"]");
    if (!trigger) return null;
    const listbox =
      document.querySelector("[data-testid=\"preset-selector-menu\"]") ||
      document.querySelector("[role=\"listbox\"]");
    const padding = 8;
    let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
    const addRect = (el) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        x1 = Math.min(x1, r.left);
        y1 = Math.min(y1, r.top);
        x2 = Math.max(x2, r.right);
        y2 = Math.max(y2, r.bottom);
      }
    };
    let el = trigger;
    while (el && !el.previousElementSibling) el = el.parentElement;
    if (el && el.previousElementSibling) addRect(el.previousElementSibling);
    addRect(trigger);
    addRect(listbox);
    if (x1 === Infinity) return null;
    return {
      x: Math.max(0, Math.round(x1 - padding)),
      y: Math.max(0, Math.round(y1 - padding)),
      width: Math.round(x2 - x1 + padding * 2),
      height: Math.round(y2 - y1 + padding * 2),
    };
  });
  if (clip) {
    await page.screenshot({ path: filePath, clip });
  } else {
    await page.screenshot({ path: filePath });
  }
  await page.keyboard.press("Escape");
  await wait(200);
}

async function prepareSidebar(page) {
  await clickByTestId(page, "nav-translate");
  await wait(400);
}

async function prepareHistory(page) {
  await clickByTestId(page, "nav-history");
  await wait(600);
  const translateSel = '[data-testid="history-list-item"][data-history-type="translate"]';
  log("Waiting for first translate history item...");
  await waitForSelectorWithRetry(page, translateSel, { timeout: 15000 });
  await page.click(translateSel);
  await wait(600);
}

async function captureHistory(page, filePath) {
  await page.screenshot({ path: filePath });
}

async function captureSidebar(page, filePath) {
  const sidebar = await page.$("[data-testid=\"app-sidebar\"]");
  if (!sidebar) return;
  const originalStyles = await page.evaluate((el) => {
    const nav = el.querySelector("[data-testid=\"main-nav\"]");
    const prev = { asideHeight: el.style.height, navFlex: nav ? nav.style.flex : null };
    el.style.height = "auto";
    if (nav) nav.style.flex = "0 0 auto";
    return prev;
  }, sidebar);
  await wait(150);
  try {
    const clip = await page.evaluate(() => {
      const sidebarEl = document.querySelector("[data-testid=\"app-sidebar\"]");
      if (!sidebarEl) return null;
      const r = sidebarEl.getBoundingClientRect();
      let bottom = r.bottom;
      const footer = sidebarEl.children[2];
      if (footer) {
        const buttons = footer.querySelectorAll("button");
        const lastBtn = buttons.length ? buttons[buttons.length - 1] : null;
        if (lastBtn) {
          const br = lastBtn.getBoundingClientRect();
          if (br.height > 0) bottom = br.bottom;
        }
      }
      return { x: Math.round(r.left), y: Math.round(r.top), width: Math.round(r.width), height: Math.round(bottom - r.top) };
    });
    if (clip) {
      const buffer = await page.screenshot({ clip, encoding: "binary" });
      const metadata = await sharp(buffer).metadata();
      const imgWidth = metadata.width || clip.width;
      const imgHeight = metadata.height || clip.height;
      if (!imgWidth || !imgHeight) {
        throw new Error("Sidebar screenshot metadata is missing dimensions.");
      }
      // Keep top/bottom slices from original image, then scale final output.
      const KEEP_TOP_ORIGINAL = 240;
      const KEEP_BOTTOM_ORIGINAL = 240;
      const SCALE = 0.7;
      const topHeight = Math.max(1, Math.min(KEEP_TOP_ORIGINAL, imgHeight));
      const remainingAfterTop = Math.max(1, imgHeight - topHeight);
      const bottomHeight = Math.max(1, Math.min(KEEP_BOTTOM_ORIGINAL, remainingAfterTop));
      const bottomStart = Math.max(0, imgHeight - bottomHeight);
      const finalWidth = Math.max(1, Math.round(imgWidth * SCALE));
      const finalHeight = Math.max(1, Math.round((topHeight + bottomHeight) * SCALE));
      // Build both slices as raw RGBA and concatenate rows directly to avoid
      // any `composite` dimension checks.
      const topRaw = await sharp(buffer)
        .extract({ left: 0, top: 0, width: imgWidth, height: topHeight })
        .ensureAlpha()
        .raw()
        .toBuffer();
      const bottomRaw = await sharp(buffer)
        .extract({ left: 0, top: bottomStart, width: imgWidth, height: bottomHeight })
        .ensureAlpha()
        .raw()
        .toBuffer();
      const stitchedRaw = Buffer.concat([topRaw, bottomRaw]);
      await sharp(stitchedRaw, {
        raw: {
          width: imgWidth,
          height: topHeight + bottomHeight,
          channels: 4,
        },
      })
        .resize(finalWidth, finalHeight)
        .png()
        .toFile(filePath);
    }
  } finally {
    await page.evaluate((styles) => {
      const sidebarEl = document.querySelector("[data-testid=\"app-sidebar\"]");
      if (!sidebarEl) return;
      sidebarEl.style.height = styles.asideHeight;
      const nav = sidebarEl.querySelector("[data-testid=\"main-nav\"]");
      if (nav && styles.navFlex != null) nav.style.flex = styles.navFlex;
    }, originalStyles);
  }
}

async function prepareDashboardFilter(page) {
  await clickByTestId(page, "nav-dashboard");
  await wait(600);
}

async function captureDashboardFilter(page, filePath) {
  const clip = await page.evaluate(() => {
    const row = document.querySelector("[data-testid=\"dashboard-filter-row\"]");
    if (!row) return null;
    let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
    for (const child of row.children) {
      const r = child.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        x1 = Math.min(x1, r.left);
        y1 = Math.min(y1, r.top);
        x2 = Math.max(x2, r.right);
        y2 = Math.max(y2, r.bottom);
      }
    }
    if (x1 === Infinity) return null;
    const padding = 4;
    return {
      x: Math.max(0, Math.round(x1 - padding)),
      y: Math.max(0, Math.round(y1 - padding)),
      width: Math.round(x2 - x1 + padding * 2),
      height: Math.round(y2 - y1 + padding * 2),
    };
  });
  if (clip) await page.screenshot({ path: filePath, clip });
  else await page.screenshot({ path: filePath });
}

function printSummaryTable(uiLanguages, screenshotSets, captureResults) {
  const langColWidth = 28;
  const cellWidth = 10;
  const names = screenshotSets.map((s) => s.name);
  const headerCells = ["Language".padEnd(langColWidth), ...names.map((n) => n.padStart(cellWidth))];
  const header = " " + headerCells.join(" | ");
  const sep = "-".repeat(header.length);
  const line = (parts) => " " + parts.join(" | ");

  log("Summary:");
  log(header);
  log(sep);
  for (const lang of uiLanguages) {
    const code = lang.code;
    const englishName = lang.englishName || code;
    const label = `${code} (${englishName})`;
    const labelCell = (label.length <= langColWidth ? label : label.slice(0, langColWidth - 2) + "..").padEnd(langColWidth);
    const cells = [labelCell];
    for (const { name } of screenshotSets) {
      const ok = captureResults[code] && captureResults[code][name];
      const symbol = ok ? `${GREEN}${CHECK}${RESET}` : `${RED}${CROSS}${RESET}`;
      const leftSp = " ".repeat(Math.floor((cellWidth - 1) / 2));
      const rightSp = " ".repeat(cellWidth - 1 - Math.floor((cellWidth - 1) / 2));
      cells.push(leftSp + symbol + rightSp);
    }
    log(line(cells));
  }
  log(sep);
}

async function main() {
  const args = parseArgs();
  if (args.help) {
    printHelp(SCREENSHOTS.map((s) => s.name));
    process.exit(0);
  }
  if (args.unknown.length > 0) {
    console.error(RED + "Unknown option(s): " + args.unknown.join(", ") + RESET);
    console.error(RED + "Use --help to see usage." + RESET + "\n");
    process.exit(1);
  }

  assertValidScreenshotCliFilters(args.screenshotFilters);

  let screenshotSets = SCREENSHOTS;
  if (args.screenshotFilters != null && args.screenshotFilters.length > 0) {
    const pick = new Set(args.screenshotFilters);
    screenshotSets = SCREENSHOTS.filter((s) => pick.has(s.name));
  }

  let uiLanguages = loadAndFilterUILanguages(args.localeFilter);
  if (args.localeFilter && args.localeFilter.length > 0) {
    log("Filtering to %d locale(s): %s", uiLanguages.length, args.localeFilter.join(", "));
  }
  if (uiLanguages.length === 0) {
    console.error(
      RED + "No UI languages found or matched filter in " + UI_LANGUAGES_PATH + RESET,
    );
    process.exit(1);
  }

  if (isHistoryDisabledByEnv()) {
    console.error(
      RED +
        "HISTORY_DISABLED is set to true in the environment. The History screenshot needs execution history enabled on the server." +
        RESET,
    );
    console.error(
      "Set HISTORY_DISABLED to false (or unset it) in `.env` and for the web server process, restart the server, then run this script again.",
    );
    process.exit(1);
  }

  log("Loaded %d UI languages; will capture each screenshot per language.", uiLanguages.length);

  const adminUser = process.env.ADMIN_USERNAME;
  const adminPass = process.env.ADMIN_PASSWORD;
  const hasUser = adminUser != null && String(adminUser).trim() !== "";
  const hasPass = adminPass != null && String(adminPass).trim() !== "";
  if (!hasUser || !hasPass) {
    console.error(
      RED +
        "ADMIN_USERNAME and ADMIN_PASSWORD must both be set in the environment (required for web login during screenshots)." +
        RESET,
    );
    console.error(
      "Set them in `.env` (loaded by your shell or tooling) or export before running, e.g.:",
    );
    console.error("  ADMIN_USERNAME=admin ADMIN_PASSWORD=yourpassword pnpm run take-screenshots\n");
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const logPath = initLogFile();
  log("Log file: %s", logPath);
  const sessionStartMs = Date.now();

  log("Ensuring prompt '%s' exists in custom_prompts...", DICTIONARY_ENTRY_PROMPT_NAME);
  ensureDictionaryEntryPrompt();
  ensureHistorySampleForScreenshots();
  applyScreenshotConfigConsistency();

  log("Checking if server is online at %s...", BASE_URL);
  if (!(await checkAppResponding())) {
    log("The application is not responding at %s.", BASE_URL, { red: true });
    log("Start it first with: pnpm run dev:web", { red: true });
    if (logStream) logStream.end();
    process.exit(1);
  }
  log("Server is responding.");
  log("Output directory: %s", OUT_DIR);

  const executablePath = getChromeExecutablePath();
  const launchOptions = {
    headless: HEADLESS,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  };
  if (executablePath) {
    launchOptions.executablePath = executablePath;
    log("Using browser: %s", executablePath);
  }
  log("Launching browser (headless: %s)...", HEADLESS);
  const browser = await puppeteer.launch(launchOptions);

  const page = await browser.newPage();
  log("Setting viewport to 1920×1080.");
  await page.setViewport({ width: 1920, height: 1080 });

  log("Clearing browser cache...");
  try {
    const cdp = await page.createCDPSession();
    await cdp.send("Network.clearBrowserCache");
  } catch (err) {
    log("Could not clear cache (non-fatal): %s", err.message);
  }

  log("Navigating to %s...", BASE_URL);
  try {
    await page.goto(BASE_URL, { waitUntil: "networkidle2", timeout: 20000 });
  } catch (e) {
    log("Failed to load %s: %s", BASE_URL, e.message);
    log("Ensure the web app is running (e.g. pnpm run dev:web).");
    await browser.close();
    if (logStream) logStream.end();
    process.exit(1);
  }
  log("Page loaded.");

  log("Waiting 2s for initial render...");
  await wait(2000);
  await maybeLogin(page);
  await ensureAppShell(page);
  await ensureScreenshotWebFonts(page);

  if (args.screenshotFilters != null && args.screenshotFilters.length > 0) {
    log("Filtering to screenshot set(s): %s", args.screenshotFilters.join(", "));
  }

  await setUILanguage(page, "en-GB");
  await setScreenshotDefaultPreset(page);
  await setTranslateFromToLanguages(page);

  const captureResults = {};
  const totalLangs = uiLanguages.length;

  const setTotal = screenshotSets.length;
  for (let setIndex = 0; setIndex < screenshotSets.length; setIndex++) {
    const set = screenshotSets[setIndex];
    const { name, prepare, capture, teardown, finalTeardown, prepareTeardownPerLocale, initialPrepare } = set;
    const setNum = setIndex + 1;
    log("--------------------------------");
    log("Screenshot set: %s (%d/%d)", name, setNum, setTotal);
    logIndent = "  ";
    try {
      if (!prepareTeardownPerLocale) {
        await prepare(page);
      } else if (initialPrepare) {
        log("Running initial prepare (get to editor) for %s", name);
        await initialPrepare(page);
        await wait(400);
      }
      for (let i = 0; i < uiLanguages.length; i++) {
        const lang = uiLanguages[i];
        const code = lang.code;
        const langDir = path.join(OUT_DIR, code);
        fs.mkdirSync(langDir, { recursive: true });
        const filePath = path.join(langDir, `${name}.png`);
        let saved = false;
        for (let attempt = 1; attempt <= MAX_RETRIES && !saved; attempt++) {
          try {
            await setUILanguage(page, code, {
              index: i + 1,
              total: totalLangs,
              englishName: lang.englishName,
            });
            await wait(400);
            if (prepareTeardownPerLocale) {
              await prepare(page);
              await wait(400);
            }
            await capture(page, filePath);
            log("Saved %s/%s.png", code, name, { indent: 2 });
            saved = true;
            if (prepareTeardownPerLocale && teardown) {
              await teardown(page);
              await wait(200);
            }
          } catch (err) {
            if (prepareTeardownPerLocale && teardown) {
              try {
                await teardown(page);
              } catch {
                // ignore teardown error when capture failed
              }
            }
            if (attempt < MAX_RETRIES) {
              log("Attempt %d/%d failed for %s.%s: %s; retrying in %ds...", attempt, MAX_RETRIES, name, code, err.message, RETRY_DELAY_MS / 1000);
              await wait(RETRY_DELAY_MS);
            } else {
              log("%s.%s failed after %d attempts: %s", name, code, MAX_RETRIES, err.message);
            }
          }
        }
        if (!captureResults[code]) captureResults[code] = {};
        captureResults[code][name] = saved;
      }
      if (!prepareTeardownPerLocale && teardown) await teardown(page);
      if (finalTeardown) {
        log("Running final teardown for %s", name);
        await finalTeardown(page);
      }
    } catch (err) {
      log("Prepare/capture for %s failed: %s", name, err.message);
      for (const lang of uiLanguages) {
        if (!captureResults[lang.code]) captureResults[lang.code] = {};
        captureResults[lang.code][name] = false;
      }
    } finally {
      logIndent = "";
    }
  }

  printSummaryTable(uiLanguages, screenshotSets, captureResults);

  log("Closing browser.");
  await browser.close();
  log("Done. Screenshots in %s", OUT_DIR);

  const elapsedMs = Date.now() - sessionStartMs;
  log("Elapsed: %s", formatElapsed(elapsedMs));
  log("Session log available at: %s", path.resolve(logPath));
  if (logStream) {
    logStream.end();
    logStream = null;
  }
}

main().catch((err) => {
  const ts = getTimestamp();
  const line = `${ts} - ${err && err.message ? err.message : String(err)}`;
  console.error(line);
  if (logStream && logStream.writable) {
    logStream.write(line + "\n");
    logStream.end();
  }
  process.exit(1);
});
