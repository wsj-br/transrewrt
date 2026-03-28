/**
 * Read locales/strings.json, translate missing entries via OpenRouter, write flat locale JSONs.
 * Requires OPENROUTER_API_KEY (same as server/Docker). Run after extract-strings.js.
 * Model list: scripts/openrouter-script-models.js (not app config).
 *
 * Use --help for usage and options.
 *   node scripts/generate-translations.js --help
 *
 * On runs that translate at least one string, appends one cost/summary line to dev/translations.log.
 * Unique source strings pending translation are printed after "done", before the totalizer (console + session log; not translations.log).
 * All log/warn/err output is also copied to dev/generate-translations-YYYYMMDD-HHMMSS.log for that run.
 */

const fs = require("fs");
const path = require("path");
const util = require("util");
const { TRANSLATION_MODELS, OPENROUTER_PROVIDER } = require("./openrouter-script-models.js");

const DEFAULT_MODEL = TRANSLATION_MODELS[0];

/** @param {string} primary - from --model or DEFAULT_MODEL */
function buildModelsToTry(primary) {
  const first = primary || DEFAULT_MODEL;
  return [first, ...TRANSLATION_MODELS.filter((m) => m !== first)];
}

const DEFAULT_MAX_TOKENS = 32768;
const CHUNK = 50;
/** Max number of languages to translate in parallel (reduces total time). */
const PARALLEL_LANGUAGES = 4;

const GREEN = "\x1b[32m";
const BLUE = "\x1b[34m";
const RED = "\x1b[31m";
const BROWN = "\x1b[33m";
const RESET = "\x1b[0m";

function timestamp() {
  return new Date().toTimeString().slice(0, 8);
}
function formatElapsed(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
/** Set to [] after argv validation; each line mirrors console (no ANSI strip). */
let generateTranslationsSessionLines = null;

function log(...args) {
  const prefix = `${timestamp()} - `;
  console.log(prefix, ...args);
  if (generateTranslationsSessionLines) {
    generateTranslationsSessionLines.push(prefix + util.format(...args));
  }
}
function warn(...args) {
  const prefix = `${timestamp()} - `;
  console.warn(prefix, ...args);
  if (generateTranslationsSessionLines) {
    generateTranslationsSessionLines.push(prefix + util.format(...args));
  }
}
function err(...args) {
  const prefix = `${timestamp()} - `;
  console.error(prefix, ...args);
  if (generateTranslationsSessionLines) {
    generateTranslationsSessionLines.push(prefix + util.format(...args));
  }
}

function printHelp() {
  log(BLUE + `
Generate translations for UI strings using OpenRouter.

Reads src/renderer/locales/strings.json (from i18n:extract), translates missing
entries per language via OpenRouter, and writes flat locale JSON files
(pt-BR.json, de.json, fr.json, es.json). Requires OPENROUTER_API_KEY.

Usage:
  node scripts/generate-translations.js [options]
  pnpm run i18n:translate -- [options]

Options:
  --help, -h              Show this help and exit.
  --show-strings, -s      List source strings that need translation (key + text) per language.
  --force, -f             Translate all strings again (ignore existing translations).
  --model, -m <name>      OpenRouter model to use (default: ${DEFAULT_MODEL}).
  --max-tokens, -t <n>    Max tokens for completion (default: ${DEFAULT_MAX_TOKENS}).
  --locale, -l <codes>   Translate only these locale(s). Comma- or space-separated inside a single argv token (e.g. --locale=pt-BR,es or --locale "pt-BR es").

Examples:
  node scripts/generate-translations.js --help
  node scripts/generate-translations.js --show-strings
  node scripts/generate-translations.js
  node scripts/generate-translations.js --force
  node scripts/generate-translations.js -l pt-BR
  node scripts/generate-translations.js -m openai/gpt-4o
  node scripts/generate-translations.js -f -m anthropic/claude-sonnet-4

`+ RESET);
}



function parseArgs() {
  const args = process.argv.slice(2);
  let force = false;
  let showStrings = false;
  let model = DEFAULT_MODEL;
  let maxTokens = DEFAULT_MAX_TOKENS;
  let help = false;
  let locale = null;
  const unknown = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--help" || arg === "-h") {
      help = true;
    } else if (arg === "--show-strings" || arg === "-s") {
      showStrings = true;
    } else if (arg === "--force" || arg === "-f") {
      force = true;
    } else if ((arg === "--model" || arg === "-m") && args[i + 1]) {
      model = args[++i];
    } else if ((arg === "--max-tokens" || arg === "-t") && args[i + 1]) {
      const n = parseInt(args[++i], 10);
      if (!Number.isNaN(n) && n > 0) maxTokens = n;
    } else if (arg.startsWith("--locale=")) {
      locale = arg.split("=", 2)[1];
    } else if ((arg === "--locale" || arg === "-l") && args[i + 1]) {
      locale = args[++i];
    } else {
      unknown.push(arg);
    }
  }
  return { force, showStrings, model, maxTokens, help, locale, unknown };
}

const parsed = parseArgs();
const { force, showStrings, model: cliModel, maxTokens, help, locale: localeFilter, unknown } = parsed;

if (help) {
  printHelp();
  process.exit(0);
}
if (unknown.length > 0) {
  console.error(RED + "Unknown option(s): " + unknown.join(", ") + RESET);
  console.error(RED + "Use --help to see usage." + RESET + "\n");
  process.exit(1);
}

function sessionLogFileStamp(d = new Date()) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

const GENERATE_TRANSLATIONS_SESSION_LOG = path.join(
  process.cwd(),
  "dev",
  `generate-translations-${sessionLogFileStamp()}.log`,
);

generateTranslationsSessionLines = [];

function flushGenerateTranslationsSessionLog() {
  if (!generateTranslationsSessionLines) return;
  const dir = path.dirname(GENERATE_TRANSLATIONS_SESSION_LOG);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    GENERATE_TRANSLATIONS_SESSION_LOG,
    generateTranslationsSessionLines.join("\n") + (generateTranslationsSessionLines.length ? "\n" : ""),
    "utf8",
  );
}

function exitProcess(code) {
  flushGenerateTranslationsSessionLog();
  process.exit(code);
}

const STRINGS_FILE = path.join(process.cwd(), "src", "renderer", "locales", "strings.json");
const LOCALES_DIR = path.join(process.cwd(), "src", "renderer", "locales");
const UI_LANGUAGES_PATH = path.join(process.cwd(), "src", "renderer", "locales", "ui-languages.json");
const OPENROUTER_API_KEY = (process.env.OPENROUTER_API_KEY || "").trim();
const MODEL = cliModel;
const MAX_TOKENS = maxTokens;

let LANGUAGES = [];
/** Set of locale codes that are in ui-languages.json (used to prune orphaned translations from strings.json). */
let ALLOWED_LOCALE_CODES = new Set();
if (fs.existsSync(UI_LANGUAGES_PATH)) {
  const uiLanguages = JSON.parse(fs.readFileSync(UI_LANGUAGES_PATH, "utf8"));
  const all = Array.isArray(uiLanguages)
    ? uiLanguages.map((l) => ({ code: l.code, name: l.englishName }))
    : [];
  // Source language: no translation needed; keys are already UK English. Skip so we don't call API or write en-GB.json.
  LANGUAGES = all.filter((l) => l.code !== "en-GB" && l.code !== "en");
  ALLOWED_LOCALE_CODES = new Set(all.map((l) => l.code));
}

if (!fs.existsSync(STRINGS_FILE)) {
  err("Run i18n:extract first to create strings.json");
  exitProcess(1);
}

if (LANGUAGES.length === 0) {
  err("No languages in src/renderer/locales/ui-languages.json");
  exitProcess(1);
}

if (localeFilter) {
  const codes = String(localeFilter)
    .split(/[,\s]+/)
    .map((c) => c.trim())
    .filter(Boolean);

  const sourceCodes = new Set(["en-GB", "en"]);
  const requestedNonSource = codes.filter((c) => !sourceCodes.has(c));
  const ignoredSource = codes.filter((c) => sourceCodes.has(c));

  if (ignoredSource.length > 0) {
    log(`Ignoring source locale(s) in --locale filter: ${ignoredSource.join(", ")}.`);
  }

  if (requestedNonSource.length === 0) {
    log("No target locales requested (only source locales). Nothing to translate.");
    exitProcess(0);
  }

  const byCode = new Map(LANGUAGES.map((l) => [l.code, l]));
  const matched = [];
  const invalid = [];
  for (const code of requestedNonSource) {
    const lang = byCode.get(code);
    if (lang) matched.push(lang);
    else invalid.push(code);
  }

  if (invalid.length > 0) {
    err(`Locale(s) not in ui-languages.json: ${invalid.join(", ")}`);
    exitProcess(1);
  }

  LANGUAGES = matched;
  log(LANGUAGES.length === 1 ? `single locale: ${LANGUAGES[0].code}` : `filtering to ${LANGUAGES.length} locale(s): ${LANGUAGES.map((l) => l.code).join(", ")}`);
}

if (!OPENROUTER_API_KEY) {
  warn("OPENROUTER_API_KEY not set; will only write locale files from existing strings.json");
}

if (force) {
  log("--force: will translate all strings for each language");
}
log(BLUE + `🤖 model: ${MODEL}, max_tokens: ${MAX_TOKENS}` + RESET);
if (LANGUAGES.length > 1) {
  log(BLUE + `🌐 ${LANGUAGES.length} languages; up to ${Math.min(PARALLEL_LANGUAGES, LANGUAGES.length)} in parallel` + RESET);
}

const strings = JSON.parse(fs.readFileSync(STRINGS_FILE, "utf8"));
// Remove redundant en-GB entries (source language; keys are used as-is at runtime).
let stringsCleaned = false;
for (const entry of Object.values(strings)) {
  if (entry.translated && entry.translated["en-GB"] !== undefined) {
    delete entry.translated["en-GB"];
    stringsCleaned = true;
  }
}
if (stringsCleaned) {
  fs.writeFileSync(STRINGS_FILE, JSON.stringify(strings, null, 2), "utf8");
  log(BLUE + "Removed redundant en-GB entries from strings.json" + RESET);
}
const entries = Object.entries(strings);

if (showStrings) {
  log("Strings that need translation (no API calls, no files written).\n");
  for (const lang of LANGUAGES) {
    const missing = force
      ? entries
      : entries.filter(([, entry]) => !entry.translated[lang.code]);
    log(`--- ${lang.code} - ${lang.name} (${lang.name}): ${missing.length} strings ---`);
    for (const [key, entry] of missing) {
      const source = (entry.source || "").replace(/\n/g, "\\n");
      log(`  ${key}: ${JSON.stringify(source)}`);
    }
    log("");
  }
  exitProcess(0);
}

const usageTotal = {
  prompt_tokens: 0,
  completion_tokens: 0,
  total_cost: 0,
};

function extractUsage(data) {
  const u = data.usage || {};
  const rawCost =
    data.total_cost ?? data.cost ?? u.total_cost ?? u.cost;
  const cost = typeof rawCost === "number" && !Number.isNaN(rawCost)
    ? rawCost
    : typeof rawCost === "string"
      ? Number.parseFloat(rawCost) || 0
      : 0;
  return {
    prompt_tokens: Number(u.prompt_tokens) || 0,
    completion_tokens: Number(u.completion_tokens) || 0,
    total_cost: cost,
  };
}

// eslint-disable-next-line no-unused-vars -- reserved for future use
function abortWithError(message, details = null) {
  err("\nERROR:", message);
  if (details != null) {
    err("Details:");
    if (details instanceof Error) {
      err(details.stack || details.message);
      if (details.cause) err("Cause:", details.cause);
    } else if (typeof details === "object") {
      err(JSON.stringify(details, null, 2));
    } else {
      err(details);
    }
  }
  exitProcess(1);
}

const SYSTEM_PROMPT = `You are a professional UI/UX translator specializing in software interfaces.

RULES:
- Translate UI labels, buttons, tooltips, menu items, and status messages
- Preserve capitalization style (Title Case stays Title Case, ALL CAPS stays ALL CAPS)
- Preserve leading/trailing whitespace exactly
- Keep placeholders unchanged: {{variable}}, {0}, %s, %d, :value
- Keep HTML tags unchanged: <strong>, <br/>, etc.
- Use informal/familiar tone where natural for the target language (e.g. "tu" not "vous" in French UI)
- Short strings (1-3 words) must stay short — do not expand them
- You MUST respond with ONLY a valid JSON array, nothing else
- No markdown, no code fences, no explanation, no preamble, no postamble
- First character of your response must be [ and last character must be ]`;

function translateBatchError(message, details = null) {
  const err = new Error(message);
  if (details != null) err.details = details;
  return err;
}

async function translateBatch(texts, langName, modelOverride = null) {
  if (!OPENROUTER_API_KEY) return { translated: texts.map(() => null), usage: { prompt_tokens: 0, completion_tokens: 0, total_cost: 0 } };
  const model = modelOverride ?? MODEL;
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
      "X-Title": "Transrewrt-ui-translations",
    },
    body: JSON.stringify({
      model,
      max_tokens: MAX_TOKENS,
      provider: OPENROUTER_PROVIDER,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Translate these ${texts.length} UI strings to ${langName} and return a JSON array:

${JSON.stringify(texts, null, 2)}

Respond with ONLY the JSON array. No other text.`,
        },
      ],
    }),
  });

  const responseText = await response.text();
  let data;
  try {
    data = JSON.parse(responseText);
  } catch (e) {
    throw translateBatchError("Response is not valid JSON", {
      status: response.status,
      statusText: response.statusText,
      parseError: e.message,
    });
  }

  if (!response.ok) {
    throw translateBatchError(`API request failed: ${response.status} ${response.statusText}`, {
      status: response.status,
      statusText: response.statusText,
      body: data,
    });
  }

  if (data.error) {
    throw translateBatchError("API returned an error", {
      error: data.error,
      fullResponse: data,
    });
  }

  const usage = extractUsage(data);
  usageTotal.prompt_tokens += usage.prompt_tokens;
  usageTotal.completion_tokens += usage.completion_tokens;
  usageTotal.total_cost += usage.total_cost;

  const content = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
  const cleaned = content.trim().replace(/^```(?:json)?\s*|\s*```$/g, "").trim();
  let translated;
  try {
    translated = JSON.parse(cleaned);
  } catch (e) {
    throw translateBatchError("Model response is not valid JSON array", {
      parseError: e.message,
      rawContent: content,
    });
  }
  return { translated, usage };
}

function logUsage(label, usage, totalSoFar) {
  const { prompt_tokens, completion_tokens, total_cost } = usage;
  const tokens = prompt_tokens + completion_tokens;
  const costStr = total_cost > 0 ? `$${total_cost.toFixed(6)} USD` : (tokens > 0 ? "(no cost reported)" : "no API calls");
  const totalStr = totalSoFar != null && totalSoFar > 0 ? `; total so far: $${totalSoFar.toFixed(6)} USD` : "";
  log(GREEN + `💵 ${label}: ${tokens} tokens (${prompt_tokens} prompt + ${completion_tokens} completion), ${costStr}${totalStr}` + RESET);
}

/**
 * @param {{ code: string; name: string }} lang
 * @param {{ writeStringsFile?: boolean; langProgress?: { completed: number; total: number }; sourcesNeedingTranslationThisRun?: Set<string> }} options - writeStringsFile: if false, do not write STRINGS_FILE (caller writes once after parallel batch). langProgress: run-level language completion counts (e.g. parallel batch header done/total). sourcesNeedingTranslationThisRun: collect unique source strings (logged to console at end).
 */
async function generateForLang(lang, options = {}) {
  const writeStringsFile = options.writeStringsFile !== false;
  const langProgress = options.langProgress;
  const sourcesSet = options.sourcesNeedingTranslationThisRun;
  const usageBefore = {
    prompt_tokens: usageTotal.prompt_tokens,
    completion_tokens: usageTotal.completion_tokens,
    total_cost: usageTotal.total_cost,
  };

  const missing = force
    ? entries
    : entries.filter(([, entry]) => !entry.translated[lang.code]);
  if (missing.length === 0) {
    log(`${lang.code} - ${lang.name}: up to date`);
  } else {
    if (sourcesSet) {
      for (const [, entry] of missing) {
        sourcesSet.add(entry.source ?? "");
      }
    }
    log(`${lang.code} - ${lang.name}: ${missing.length} strings to translate`);
    const modelsToTry = buildModelsToTry(MODEL);
    for (let i = 0; i < missing.length; i += CHUNK) {
      const chunk = missing.slice(i, i + CHUNK);
      const sources = chunk.map(([, v]) => v.source);
      const chunkNum = Math.floor(i / CHUNK) + 1;
      const chunkTotal = Math.ceil(missing.length / CHUNK);
      log(`  ${lang.code} - ${lang.name} chunk ${chunkNum}/${chunkTotal} starting (model: ${modelsToTry[0]})`);
      let result = null;
      let lastError = null;
      for (const model of modelsToTry) {
        if (model !== modelsToTry[0]) {
          log(`  ${lang.code} - ${lang.name} chunk ${chunkNum}/${chunkTotal} starting (model: ${model})`);
        }
        try {
          result = await translateBatch(sources, lang.name, model);
          break;
        } catch (e) {
          lastError = e;
          warn(`${lang.code} chunk ${chunkNum}/${chunkTotal} failed with ${model}:`, e.message);
        }
      }
      if (result) {
        chunk.forEach(([h], idx) => {
          if (result.translated[idx]) strings[h].translated[lang.code] = result.translated[idx];
        });
        log(`  ${lang.code} - ${lang.name} chunk ${chunkNum}/${chunkTotal} done`);
      } else {
        warn(`${lang.code} - ${lang.name} chunk ${chunkNum}/${chunkTotal} skipped (all ${modelsToTry.length} models failed). Last: ${lastError?.message}`);
      }
    }
    if (writeStringsFile) {
      fs.writeFileSync(STRINGS_FILE, JSON.stringify(strings, null, 2), "utf8");
    }
  }

  const locale = {};
  for (const entry of Object.values(strings)) {
    const tx = entry.translated[lang.code];
    if (tx) locale[entry.source] = tx;
  }
  const localePath = path.join(LOCALES_DIR, `${lang.code}.json`);
  fs.writeFileSync(localePath, JSON.stringify(locale, null, 2), "utf8");
  log(`${lang.code} - ${lang.name}: wrote ${Object.keys(locale).length} strings to ${localePath}`);

  const usageForLang = {
    prompt_tokens: usageTotal.prompt_tokens - usageBefore.prompt_tokens,
    completion_tokens: usageTotal.completion_tokens - usageBefore.completion_tokens,
    total_cost: usageTotal.total_cost - usageBefore.total_cost,
  };
  logUsage(`${lang.code} - ${lang.name} cost`, usageForLang, usageTotal.total_cost);

  if (langProgress) langProgress.completed += 1;

  return missing.length; // 0 when already up to date
}

(async () => {
  try {
  const startTime = Date.now();
  if (!fs.existsSync(LOCALES_DIR)) {
    fs.mkdirSync(LOCALES_DIR, { recursive: true });
  }
  let totalStringsTranslated = 0;
  /** Unique `source` texts that were missing (or slated for --force) in at least one target locale this run. */
  const sourcesNeedingTranslationThisRun = new Set();
  const langProgress = { completed: 0, total: LANGUAGES.length };
  const runParallel = LANGUAGES.length > 1;
  if (runParallel) {
    for (let i = 0; i < LANGUAGES.length; i += PARALLEL_LANGUAGES) {
      const batch = LANGUAGES.slice(i, i + PARALLEL_LANGUAGES);
      const langList = batch.map(l => `${l.name} (${l.code})`).join(' • ');
      log(BROWN + "------------------------------------------------------------------------------------------------------------" + RESET);
      log(BROWN + " 🚀 Running in parallel:    " + langList + "   " + langProgress.completed + "/" + langProgress.total + RESET);
      log(BROWN + "------------------------------------------------------------------------------------------------------------" + RESET);
      const results = await Promise.all(
        batch.map((lang) =>
          generateForLang(lang, {
            writeStringsFile: false,
            langProgress,
            sourcesNeedingTranslationThisRun,
          }),
        ),
      );
      totalStringsTranslated += results.reduce((a, n) => a + n, 0);
      log(BLUE + "💾 Writing strings.json" + RESET);
      fs.writeFileSync(STRINGS_FILE, JSON.stringify(strings, null, 2), "utf8");
    }
  } else {
    totalStringsTranslated += await generateForLang(LANGUAGES[0], {
      langProgress,
      sourcesNeedingTranslationThisRun,
    });
  }

  // Remove from strings.json any translated keys for locales not in ui-languages.json.
  let removedByLocale = {};
  let anyRemoved = false;
  for (const entry of Object.values(strings)) {
    if (!entry.translated) continue;
    for (const code of Object.keys(entry.translated)) {
      if (!ALLOWED_LOCALE_CODES.has(code)) {
        removedByLocale[code] = (removedByLocale[code] || 0) + 1;
        delete entry.translated[code];
        anyRemoved = true;
      }
    }
  }
  if (anyRemoved) {
    fs.writeFileSync(STRINGS_FILE, JSON.stringify(strings, null, 2), "utf8");
    const totalRemoved = Object.values(removedByLocale).reduce((a, n) => a + n, 0);
    log(`Pruned ${totalRemoved} orphaned translation(s) from strings.json (locales not in ui-languages.json): ${Object.entries(removedByLocale).map(([c, n]) => `${c}: ${n}`).join(", ")}`);
  }

  const totalTokens = usageTotal.prompt_tokens + usageTotal.completion_tokens;

  if (sourcesNeedingTranslationThisRun.size > 0) {
    log(" ");
    log("--- strings needing translation (consolidated from all languages) ---");
    for (const s of Array.from(sourcesNeedingTranslationThisRun).sort()) {
      log("  " + BROWN + JSON.stringify(s) + RESET);
    }
  }

  log(" ");
  log("--- totalizer ---");
  log("  " + BLUE + `time elapsed: ${formatElapsed(Date.now() - startTime)}` + RESET);
  log("  " + BLUE + `total strings translated: ${totalStringsTranslated}` + RESET);
  log("  " + BLUE + `total tokens: ${totalTokens} (${usageTotal.prompt_tokens} prompt + ${usageTotal.completion_tokens} completion)` + RESET);
  if (usageTotal.total_cost > 0) {
    log("  " + BLUE + `total cost: $${usageTotal.total_cost.toFixed(6)} USD` + RESET);
  } else if (totalTokens > 0) {
    log("total cost: (not reported by API; enable usage accounting for cost)");
  }
  log("---");

  if (totalStringsTranslated > 0) {
    const elapsed = formatElapsed(Date.now() - startTime);
    const costStr = usageTotal.total_cost > 0 ? `$${usageTotal.total_cost.toFixed(6)} USD` : "(not reported)";
    const logLine = `${new Date().toISOString()} | model: ${MODEL} | elapsed: ${elapsed} | strings: ${totalStringsTranslated} | tokens: ${totalTokens} | cost: ${costStr}\n`;
    const logPath = path.join(process.cwd(), "dev", "translations.log");
    const devDir = path.dirname(logPath);
    if (!fs.existsSync(devDir)) fs.mkdirSync(devDir, { recursive: true });
    fs.appendFileSync(logPath, logLine, "utf8");
  }
  } finally {
    flushGenerateTranslationsSessionLog();
  }
})();
