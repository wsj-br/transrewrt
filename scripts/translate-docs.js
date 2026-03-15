#!/usr/bin/env node
/**
 * Translate README.md and USER-GUIDE.md (British English) to all UI languages via OpenRouter.
 * Writes translated-docs/README.<code>.md and translated-docs/USER-GUIDE.<code>.md.
 * Section-based chunking with hash cache in translated-docs/.section-cache/ (only changed sections sent to API).
 * Requires API_KEY for translation; en-GB is the source (repo root), no copy. Run from project root.
 *
 *   node scripts/translate-docs.js --help
 *   API_KEY=sk-or-... pnpm run translate-docs
 */

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const DEFAULT_MODEL = "anthropic/claude-3-haiku";
const ALTERNATIVE_MODELS = [
  "qwen/qwen3-235b-a22b-2507",
  "z-ai/glm-4.7-flash",
  "minimax/minimax-m2.5",
  "anthropic/claude-3.5-haiku",
  "anthropic/claude-haiku-4.5",
];
const DEFAULT_MAX_TOKENS = 32768;
const DEFAULT_CONCURRENCY = 4;
const MAX_SECTION_CHARS = 8000;

const DOC_NAMES = [
  { key: "README", sourceFile: "README.md" },
  { key: "USER-GUIDE", sourceFile: "USER-GUIDE.md" },
];

const ROOT = process.cwd();
const UI_LANGUAGES_PATH = path.join(ROOT, "src", "renderer", "locales", "ui-languages.json");
const TRANSLATED_DOCS_DIR = path.join(ROOT, "translated-docs");
const SECTION_CACHE_DIR = path.join(TRANSLATED_DOCS_DIR, ".section-cache");
const DOCS_DIR = path.join(ROOT, "docs");

let logFileStream = null;

function timestamp() {
  return new Date().toTimeString().slice(0, 8);
}
function logFilenameTimestamp() {
  const d = new Date();
  const Y = d.getFullYear();
  const M = String(d.getMonth() + 1).padStart(2, "0");
  const D = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  return `${Y}${M}${D}_${h}${m}${s}`;
}
function formatElapsed(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
function toLogLine(...args) {
  return args.map((a) => (typeof a === "object" && a !== null ? JSON.stringify(a) : String(a))).join(" ");
}
function log(...args) {
  const prefix = `${timestamp()} - `;
  console.log(prefix, ...args);
  if (logFileStream && logFileStream.writable) {
    logFileStream.write(prefix + toLogLine(...args) + "\n");
  }
}
function warn(...args) {
  const prefix = `${timestamp()} - `;
  console.warn(prefix, ...args);
  if (logFileStream && logFileStream.writable) {
    logFileStream.write(prefix + "[WARN] " + toLogLine(...args) + "\n");
  }
}
function err(...args) {
  const prefix = `${timestamp()} - `;
  console.error(prefix, ...args);
  if (logFileStream && logFileStream.writable) {
    logFileStream.write(prefix + "[ERROR] " + toLogLine(...args) + "\n");
  }
}

function printHelp() {
  log(`
Translate README.md and USER-GUIDE.md to all UI languages (source: British English).
Output: translated-docs/README.<code>.md, translated-docs/USER-GUIDE.<code>.md.
Section cache: translated-docs/.section-cache/ (only changed sections are sent to API). Requires API_KEY.

Usage:
  node scripts/translate-docs.js [options]
  API_KEY=sk-or-... pnpm run translate-docs -- [options]

Options:
  --help, -h              Show this help and exit.
  --dry-run, -d            List what would be translated; no API calls or file writes.
  --retranslate, -r        Ignore section cache; translate all sections.
  --doc <name>             README | USER-GUIDE | both (default: both).
  --locale, -l <code>      Translate only this locale (e.g. pt-BR, ja).
  --model, -m <name>       OpenRouter model (default: ${DEFAULT_MODEL}).
  --max-tokens, -t <n>     Max tokens (default: ${DEFAULT_MAX_TOKENS}).
  --concurrency, -c <n>    Max parallel languages (default: ${DEFAULT_CONCURRENCY}).

Examples:
  node scripts/translate-docs.js --help
  node scripts/translate-docs.js --dry-run
  API_KEY=sk-or-... node scripts/translate-docs.js
  API_KEY=sk-or-... node scripts/translate-docs.js --doc USER-GUIDE --locale pt-BR
`);
}

function parseArgs() {
  const args = process.argv.slice(2);
  let dryRun = false;
  let retranslate = false;
  let doc = "both";
  let locale = null;
  let model = DEFAULT_MODEL;
  let maxTokens = DEFAULT_MAX_TOKENS;
  let concurrency = DEFAULT_CONCURRENCY;
  let help = false;
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--help" || arg === "-h") help = true;
    else if (arg === "--dry-run" || arg === "-d") dryRun = true;
    else if (arg === "--retranslate" || arg === "-r") retranslate = true;
    else if (arg === "--doc" && args[i + 1]) {
      const v = args[++i];
      if (v === "README" || v === "USER-GUIDE" || v === "both") doc = v;
    } else if ((arg === "--locale" || arg === "-l") && args[i + 1]) locale = args[++i];
    else if ((arg === "--model" || arg === "-m") && args[i + 1]) model = args[++i];
    else if ((arg === "--max-tokens" || arg === "-t") && args[i + 1]) {
      const n = parseInt(args[++i], 10);
      if (!Number.isNaN(n) && n > 0) maxTokens = n;
    } else if ((arg === "--concurrency" || arg === "-c") && args[i + 1]) {
      const n = parseInt(args[++i], 10);
      if (!Number.isNaN(n) && n >= 1) concurrency = n;
    }
  }
  return { help, dryRun, retranslate, doc, locale, model, maxTokens, concurrency };
}

const args = parseArgs();
if (args.help) {
  printHelp();
  process.exit(0);
}

const API_KEY = process.env.API_KEY;
const MODEL = args.model;
const MAX_TOKENS = args.maxTokens;
const CONCURRENCY = args.concurrency;

let LANGUAGES = [];
if (fs.existsSync(UI_LANGUAGES_PATH)) {
  const raw = JSON.parse(fs.readFileSync(UI_LANGUAGES_PATH, "utf8"));
  LANGUAGES = (Array.isArray(raw) ? raw : []).map((l) => ({
    code: l.code,
    label: l.label || l.englishName,
    englishName: l.englishName || l.code,
  }));
}

const DOCS_TO_PROCESS = args.doc === "both"
  ? DOC_NAMES
  : DOC_NAMES.filter((d) => d.key === args.doc);
if (DOCS_TO_PROCESS.length === 0) {
  err("[translate-docs] --doc must be README, USER-GUIDE, or both");
  process.exit(1);
}

if (args.locale) {
  const match = LANGUAGES.find((l) => l.code === args.locale);
  if (!match) {
    err(`[translate-docs] Locale "${args.locale}" not in ui-languages.json`);
    process.exit(1);
  }
  LANGUAGES = [match];
}

if (LANGUAGES.length === 0) {
  err("[translate-docs] No languages in ui-languages.json");
  process.exit(1);
}

if (!API_KEY && LANGUAGES.some((l) => l.code !== "en-GB")) {
  warn("[translate-docs] API_KEY not set; only en-GB (source) will be done for non–en-GB locales.");
}

function hashSection(content) {
  return crypto.createHash("sha256").update(content, "utf8").digest("hex").slice(0, 16);
}

function splitIntoSections(content, maxChars = MAX_SECTION_CHARS) {
  const sections = [];
  const parts = content.split(/(?=^## )/m);
  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    if (trimmed.length <= maxChars) {
      sections.push(trimmed);
      continue;
    }
    const subParts = trimmed.split(/(?=^### )/m);
    let current = "";
    for (const sp of subParts) {
      if (current.length + sp.length <= maxChars) {
        current += (current ? "\n\n" : "") + sp.trim();
        continue;
      }
      if (current) {
        sections.push(current);
        current = "";
      }
      if (sp.length > maxChars) {
        const lines = sp.split(/\n/);
        let chunk = "";
        for (const line of lines) {
          if (chunk.length + line.length + 1 > maxChars && chunk) {
            sections.push(chunk.trim());
            chunk = "";
          }
          chunk += (chunk ? "\n" : "") + line;
        }
        if (chunk.trim()) sections.push(chunk.trim());
      } else {
        current = sp.trim();
      }
    }
    if (current) sections.push(current);
  }
  return sections;
}

function loadCache(docKey) {
  const p = path.join(SECTION_CACHE_DIR, `${docKey}.json`);
  if (!fs.existsSync(p)) return {};
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch (e) {
    warn(`[translate-docs] Could not load cache ${p}:`, e.message);
    return {};
  }
}

function saveCache(docKey, cache) {
  if (!fs.existsSync(SECTION_CACHE_DIR)) {
    fs.mkdirSync(SECTION_CACHE_DIR, { recursive: true });
  }
  const p = path.join(SECTION_CACHE_DIR, `${docKey}.json`);
  fs.writeFileSync(p, JSON.stringify(cache, null, 2), "utf8");
}

function pruneCache(cache, validHashes) {
  const set = new Set(validHashes);
  let removed = 0;
  for (const hash of Object.keys(cache)) {
    if (!set.has(hash)) {
      delete cache[hash];
      removed++;
    }
  }
  return removed;
}

function extractUsage(data) {
  const u = data.usage || {};
  const rawCost = data.total_cost ?? data.cost ?? u.total_cost ?? u.cost;
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

const DOC_SYSTEM_PROMPT = `You are a professional translator for technical documentation.

Translate the following markdown section from British English to the target language.

RULES:
- Preserve markdown structure (headers, lists, bold, links, code fences).
- Keep fenced code blocks unchanged (content and language tag).
- Keep URLs, [text](url), ![alt](path) link targets unchanged; translate only the visible link text where appropriate.
- Keep HTML tags and attribute values that are paths or technical (e.g. alt text can be translated).
- Keep product names as-is: Transrewrt, OpenRouter, Electron, Docker, unless there is a common localized form.
- Output ONLY the translated markdown. No preamble, no explanation, no code fence around the whole response.`;

async function translateSection(sectionContent, langName, modelOverride = null) {
  const model = modelOverride ?? MODEL;
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
      "X-Title": "Transrewrt-doc-translations",
    },
    body: JSON.stringify({
      model,
      max_tokens: MAX_TOKENS,
      messages: [
        { role: "system", content: DOC_SYSTEM_PROMPT },
        {
          role: "user",
          content: `Translate this markdown section to ${langName}.\n\n${sectionContent}`,
        },
      ],
    }),
  });
  const responseText = await response.text();
  let data;
  try {
    data = JSON.parse(responseText);
  } catch (e) {
    throw new Error(`Response not JSON: ${e.message}`);
  }
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  if (data.error) {
    throw new Error(data.error.message || JSON.stringify(data.error));
  }
  const content = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
  const translated = content.trim().replace(/^```(?:markdown)?\s*|\s*```$/g, "").trim();
  const usage = extractUsage(data);
  return { translated, usage };
}

async function translateSectionWithFallback(sectionContent, langName, docKey, chunkIndex) {
  const modelsToTry = [MODEL, ...ALTERNATIVE_MODELS.filter((m) => m !== MODEL)];
  let lastError = null;
  for (let mi = 0; mi < modelsToTry.length; mi++) {
    const model = modelsToTry[mi];
    log(`[translate-docs] ${docKey} chunk ${chunkIndex + 1}: trying model ${model}${mi > 0 ? ` (fallback ${mi + 1}/${modelsToTry.length})` : ""}...`);
    try {
      const result = await translateSection(sectionContent, langName, model);
      return result;
    } catch (e) {
      lastError = e;
      warn(`[translate-docs] ${docKey} ${langName} chunk ${chunkIndex + 1} failed with ${model}:`, e.message);
    }
  }
  throw lastError || new Error("No model succeeded");
}

function logUsage(label, usage, totalSoFar) {
  const { prompt_tokens, completion_tokens, total_cost } = usage;
  const tokens = prompt_tokens + completion_tokens;
  const costStr = total_cost > 0 ? `$${total_cost.toFixed(6)} USD` : (tokens > 0 ? "(no cost reported)" : "no API calls");
  const totalStr = totalSoFar != null && totalSoFar > 0 ? `; total so far: $${totalSoFar.toFixed(6)} USD` : "";
  log(`[translate-docs] ${label}: ${tokens} tokens (${prompt_tokens} prompt + ${completion_tokens} completion), ${costStr}${totalStr}`);
}

async function processLocale(locale, docContents, caches, retranslate, dryRun) {
  const start = Date.now();
  const stats = {
    code: locale.code,
    englishName: locale.englishName,
    docs: DOCS_TO_PROCESS.map((d) => d.key).join(", "),
    elapsedMs: 0,
    cost: 0,
    tokens: 0,
    status: "ok",
    cacheUpdates: {},
  };

  log(`[translate-docs] starting locale: ${locale.code} (${locale.englishName})`);

  if (locale.code === "en-GB") {
    log(`[translate-docs] en-GB: source (repo root ${DOCS_TO_PROCESS.map((d) => d.sourceFile).join(", ")}); no copy`);
    stats.elapsedMs = Date.now() - start;
    stats.status = "source";
    return stats;
  }

  if (!API_KEY) {
    log(`[translate-docs] ${locale.code}: skipping (no API_KEY)`);
    stats.status = "failed";
    stats.elapsedMs = Date.now() - start;
    return stats;
  }

  let totalCost = 0;
  let totalTokens = 0;

  for (const doc of DOCS_TO_PROCESS) {
    const content = docContents[doc.key];
    if (!content) continue;

    log(`[translate-docs] ${locale.code} ${doc.key}: splitting into sections (max ${MAX_SECTION_CHARS} chars)...`);
    const sections = splitIntoSections(content);
    log(`[translate-docs] ${locale.code} ${doc.key}: split into ${sections.length} chunk(s)`);

    log(`[translate-docs] ${locale.code} ${doc.key}: calculating hashes for ${sections.length} section(s)...`);
    const hashes = sections.map((s) => hashSection(s));
    log(`[translate-docs] ${locale.code} ${doc.key}: hashes: ${hashes.join(", ")}`);

    const cache = JSON.parse(JSON.stringify(caches[doc.key] || {}));
    const validHashes = new Set(hashes);
    const pruned = pruneCache(cache, validHashes);
    if (pruned > 0) {
      log(`[translate-docs] ${locale.code} ${doc.key}: pruned ${pruned} orphan hash(es) from cache`);
    }

    const translatedParts = [];
    let docFailed = false;
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const hash = hashes[i];
      const cached = !retranslate && cache[hash] && cache[hash][locale.code];
      if (cached) {
        log(`[translate-docs] ${locale.code} ${doc.key}: chunk ${i + 1}/${sections.length}: using cache (hash ${hash})`);
        translatedParts.push(cached);
        continue;
      }
      if (dryRun) {
        log(`[translate-docs] ${locale.code} ${doc.key}: chunk ${i + 1}/${sections.length}: would translate`);
        translatedParts.push(`[would translate chunk ${i + 1}]`);
        continue;
      }
      log(`[translate-docs] ${locale.code} ${doc.key}: chunk ${i + 1}/${sections.length}: sending to OpenRouter (hash ${hash})...`);
      try {
        const { translated, usage } = await translateSectionWithFallback(section, locale.englishName, doc.key, i);
        log(`[translate-docs] ${locale.code} ${doc.key}: chunk ${i + 1}/${sections.length}: done (${usage.prompt_tokens + usage.completion_tokens} tokens)`);
        translatedParts.push(translated);
        if (!cache[hash]) cache[hash] = {};
        cache[hash][locale.code] = translated;
        if (!stats.cacheUpdates[doc.key]) stats.cacheUpdates[doc.key] = {};
        if (!stats.cacheUpdates[doc.key][hash]) stats.cacheUpdates[doc.key][hash] = {};
        stats.cacheUpdates[doc.key][hash][locale.code] = translated;
        totalCost += usage.total_cost;
        totalTokens += usage.prompt_tokens + usage.completion_tokens;
      } catch (e) {
        warn(`[translate-docs] ${locale.code} ${doc.key} chunk ${i + 1} failed:`, e.message);
        docFailed = true;
        translatedParts.push(section);
      }
    }
    if (!dryRun) {
      const outPath = path.join(TRANSLATED_DOCS_DIR, `${doc.key}.${locale.code}.md`);
      if (!fs.existsSync(TRANSLATED_DOCS_DIR)) fs.mkdirSync(TRANSLATED_DOCS_DIR, { recursive: true });
      log(`[translate-docs] ${locale.code} ${doc.key}: writing ${doc.key}.${locale.code}.md...`);
      fs.writeFileSync(outPath, translatedParts.join("\n\n"), "utf8");
      log(`[translate-docs] ${locale.code} - ${locale.englishName}: wrote ${doc.key} -> ${doc.key}.${locale.code}.md`);
    }
    if (docFailed) stats.status = "failed";
  }

  stats.elapsedMs = Date.now() - start;
  stats.cost = totalCost;
  stats.tokens = totalTokens;
  if (stats.status === "ok" && !dryRun) {
    logUsage(`${locale.code} - ${locale.englishName} cost`, { prompt_tokens: 0, completion_tokens: stats.tokens, total_cost: stats.cost }, stats.cost);
  }
  return stats;
}

async function runInBatches(items, batchSize, fn) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...(await Promise.all(batch.map(fn))));
  }
  return results;
}

async function main() {
  if (!fs.existsSync(DOCS_DIR)) {
    fs.mkdirSync(DOCS_DIR, { recursive: true });
  }
  const logPath = path.join(DOCS_DIR, `translate-docs_${logFilenameTimestamp()}.log`);
  logFileStream = fs.createWriteStream(logPath, { flags: "a" });
  log("[translate-docs] logging to " + logPath);

  const startTime = Date.now();
  log("[translate-docs] starting (docs: " + DOCS_TO_PROCESS.map((d) => d.sourceFile).join(", ") + "; locales: " + LANGUAGES.length + "; concurrency: " + CONCURRENCY + (args.retranslate ? "; retranslate" : "") + ")");

  const docContents = {};
  for (const doc of DOCS_TO_PROCESS) {
    const p = path.join(ROOT, doc.sourceFile);
    if (!fs.existsSync(p)) {
      err(`[translate-docs] ${doc.sourceFile} not found`);
      if (logFileStream) {
        logFileStream.end();
        logFileStream = null;
      }
      process.exit(1);
    }
    log(`[translate-docs] loading source: ${doc.sourceFile}...`);
    docContents[doc.key] = fs.readFileSync(p, "utf8");
    log(`[translate-docs] loaded ${doc.sourceFile}: ${docContents[doc.key].length} chars`);
  }

  log("[translate-docs] loading section caches...");
  const caches = {};
  for (const doc of DOCS_TO_PROCESS) {
    caches[doc.key] = loadCache(doc.key);
    const count = Object.keys(caches[doc.key]).length;
    log(`[translate-docs] cache ${doc.key}: ${count} section hash(es)`);
  }

  if (args.dryRun) {
    log("[translate-docs] Dry run: no API calls, no files written.");
    for (const locale of LANGUAGES) {
      const docList = DOCS_TO_PROCESS.map((d) => d.key).join(", ");
      if (locale.code === "en-GB") {
        log(`  ${locale.code} - ${locale.englishName}: source (repo root) ${docList}`);
      } else {
        log(`  ${locale.code} - ${locale.englishName}: translate ${docList}`);
      }
    }
    if (logFileStream) {
      logFileStream.end();
      logFileStream = null;
    }
    process.exit(0);
  }

  log("[translate-docs] processing locales (batches of " + CONCURRENCY + ")...");
  const allStats = await runInBatches(
    LANGUAGES,
    CONCURRENCY,
    (locale) => processLocale(locale, docContents, caches, args.retranslate, false)
  );

  log("[translate-docs] merging cache updates from all locales...");
  for (const s of allStats) {
    if (s.cacheUpdates && typeof s.cacheUpdates === "object") {
      for (const [docKey, updates] of Object.entries(s.cacheUpdates)) {
        if (!caches[docKey]) caches[docKey] = {};
        for (const [hash, byLocale] of Object.entries(updates)) {
          if (!caches[docKey][hash]) caches[docKey][hash] = {};
          Object.assign(caches[docKey][hash], byLocale);
        }
      }
    }
  }
  log("[translate-docs] pruning orphan hashes and saving caches...");
  for (const doc of DOCS_TO_PROCESS) {
    const content = docContents[doc.key];
    if (content && caches[doc.key]) {
      const hashes = splitIntoSections(content).map((s) => hashSection(s));
      const pruned = pruneCache(caches[doc.key], hashes);
      if (pruned > 0) {
        log(`[translate-docs] pruned ${pruned} orphan(s) from ${doc.key} cache`);
      }
    }
    if (caches[doc.key] && Object.keys(caches[doc.key]).length > 0) {
      saveCache(doc.key, caches[doc.key]);
      log(`[translate-docs] saved ${doc.key} cache (${Object.keys(caches[doc.key]).length} hashes)`);
    }
  }

  const totalElapsed = Date.now() - startTime;
  const totalCost = allStats.reduce((s, r) => s + r.cost, 0);
  const totalTokens = allStats.reduce((s, r) => s + r.tokens, 0);

  log("\n[translate-docs] done");
  log("--- summary ---");
  const col = (str, w) => String(str).padEnd(w).slice(0, w);
  const localeW = 10;
  const nameW = 22;
  const docsW = 22;
  const timeW = 10;
  const costW = 14;
  const statusW = 8;
  const sep = " | ";
  log(col("Locale", localeW) + sep + col("English name", nameW) + sep + col("Docs", docsW) + sep + col("Time", timeW) + sep + col("Cost", costW) + sep + col("Status", statusW));
  log("-".repeat(localeW + nameW + docsW + timeW + costW + statusW + sep.length * 5));
  for (const s of allStats) {
    const costStr = s.cost > 0 ? `$${s.cost.toFixed(6)}` : (s.status === "source" ? "$0.00" : "(no cost)");
    log(
      col(s.code, localeW) + sep +
      col(s.englishName, nameW) + sep +
      col(s.docs, docsW) + sep +
      col(formatElapsed(s.elapsedMs), timeW) + sep +
      col(costStr, costW) + sep +
      col(s.status, statusW)
    );
  }
  log("");
  log(`[translate-docs] total time: ${formatElapsed(totalElapsed)}`);
  log(`[translate-docs] total tokens: ${totalTokens} (${allStats.reduce((a, s) => a + (s.tokens || 0), 0)} from API)`);
  if (totalCost > 0) {
    log(`[translate-docs] total cost: $${totalCost.toFixed(6)} USD`);
  } else if (totalTokens > 0) {
    log("[translate-docs] total cost: (not reported by API)");
  }
  if (logFileStream) {
    logFileStream.end();
    logFileStream = null;
  }
}

main().catch((e) => {
  err("[translate-docs]", e.message || e);
  if (logFileStream) {
    logFileStream.end();
    logFileStream = null;
  }
  process.exit(1);
});
