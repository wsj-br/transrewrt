#!/usr/bin/env node
/**
 * Translate README.md and USER-GUIDE.md (British English) to all UI languages via OpenRouter.
 * Writes translated-docs/README.<code>.md and translated-docs/USER-GUIDE.<code>.md.
 * After translation, rewrites sibling links (README.md / USER-GUIDE.md) to README.<code>.md / USER-GUIDE.<code>.md.
 * Sends the whole document per call; if larger than 16k chars, splits at nearest markdown section.
 * Requires OPENROUTER_KEY (same as server/Docker). en-GB is the source (repo root), no copy. Run from project root.
 *
 *   node scripts/translate-docs.js --help
 *   OPENROUTER_KEY=sk-or-... pnpm run translate-docs
 *
 * Model list: scripts/openrouter-script-models.js (not app config).
 */

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { TRANSLATION_MODELS } = require("./openrouter-script-models.js");

const DEFAULT_MODEL = TRANSLATION_MODELS[0];

/** @param {string} primary - from --model or DEFAULT_MODEL */
function buildModelsToTry(primary) {
  const first = primary || DEFAULT_MODEL;
  return [first, ...TRANSLATION_MODELS.filter((m) => m !== first)];
}

const DEFAULT_MAX_TOKENS = 32768; // 32KB
const DEFAULT_CONCURRENCY = 4;
const BLOCK_SIZE = 4096; // 4KB
const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";

const DOC_NAMES = [
  { key: "README", sourceFile: "README.md" },
  { key: "USER-GUIDE", sourceFile: "USER-GUIDE.md" },
];

const ROOT = process.cwd();
const UI_LANGUAGES_PATH = path.join(ROOT, "src", "renderer", "locales", "ui-languages.json");
const TRANSLATED_DOCS_DIR = path.join(ROOT, "translated-docs");

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
  console.warn(YELLOW + prefix, ...args, RESET);
  if (logFileStream && logFileStream.writable) {
    logFileStream.write(prefix + "[WARN] " + toLogLine(...args) + "\n");
  }
}
function err(...args) {
  const prefix = `${timestamp()} - `;
  console.error(RED + prefix, ...args, RESET);
  if (logFileStream && logFileStream.writable) {
    logFileStream.write(prefix + "[ERROR] " + toLogLine(...args) + "\n");
  }
}

function printHelp() {
  log(BLUE + `
Translate README.md and USER-GUIDE.md to all UI languages (source: British English).
Output: translated-docs/README.<code>.md, translated-docs/USER-GUIDE.<code>.md.
Documents are sent whole; if > 16k chars they are split at markdown section boundaries. Requires OPENROUTER_KEY.

Usage:
  node scripts/translate-docs.js [options]
  OPENROUTER_KEY=sk-or-... pnpm run translate-docs -- [options]

Options:
  --help, -h              Show this help and exit.
  --force, -f             Force translation even when source hash matches existing file (ignore skip).
  --doc <name>            README | USER-GUIDE | both (default: both).
  --locale, -l <codes>    Translate only these locale(s), comma-separated (e.g. pt-BR, es, ja).
  --model, -m <name>      OpenRouter model (default: ${DEFAULT_MODEL}).
  --max-tokens, -t <n>    Max tokens (default: ${DEFAULT_MAX_TOKENS}).
  --concurrency, -c <n>   Max parallel languages (default: ${DEFAULT_CONCURRENCY}).

Examples:
  node scripts/translate-docs.js --help
  OPENROUTER_KEY=sk-or-... node scripts/translate-docs.js
  OPENROUTER_KEY=sk-or-... node scripts/translate-docs.js --doc USER-GUIDE --locale pt-BR,es,ja
  OPENROUTER_KEY=sk-or-... node scripts/translate-docs.js --force

`+ RESET);
}

function parseArgs() {
  const args = process.argv.slice(2);
  let force = false;
  let doc = "both";
  let locale = null;
  let model = DEFAULT_MODEL;
  let maxTokens = DEFAULT_MAX_TOKENS;
  let concurrency = DEFAULT_CONCURRENCY;
  let help = false;
  const unknown = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--help" || arg === "-h") help = true;
    else if (arg === "--force" || arg === "-f") force = true;
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
    } else unknown.push(arg);
  }
  return { help, force, doc, locale, model, maxTokens, concurrency, unknown };
}

const args = parseArgs();
if (args.help) {
  printHelp();
  process.exit(0);
}
if (args.unknown.length > 0) {
  console.error(RED + "Unknown option(s): " + args.unknown.join(", ") + RESET);
  console.error(RED + "Use --help to see usage." + RESET + "\n");
  process.exit(1);
}

const OPENROUTER_KEY = (process.env.OPENROUTER_KEY || "").trim();
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
  err("--doc must be README, USER-GUIDE, or both");
  process.exit(1);
}

if (args.locale) {
  const codes = args.locale.split(",").map((c) => c.trim()).filter(Boolean);
  const byCode = new Map(LANGUAGES.map((l) => [l.code, l]));
  const matched = [];
  const invalid = [];
  for (const code of codes) {
    const lang = byCode.get(code);
    if (lang) matched.push(lang);
    else invalid.push(code);
  }
  if (invalid.length > 0) {
    err(`Locale(s) not in ui-languages.json: ${invalid.join(", ")}`);
    process.exit(1);
  }
  LANGUAGES = matched;
}

if (LANGUAGES.length === 0) {
  err("No languages in ui-languages.json");
  process.exit(1);
}

if (!OPENROUTER_KEY && LANGUAGES.some((l) => l.code !== "en-GB")) {
  warn("OPENROUTER_KEY not set; only en-GB (source) will be done for non–en-GB locales.");
}

function hashSource(content) {
  return crypto.createHash("sha256").update(content, "utf8").digest("hex");
}

/**
 * Parse YAML frontmatter from the start of a file. Returns { source_hash } or {} if missing/invalid.
 */
function parseFrontmatter(fileContent) {
  if (typeof fileContent !== "string" || !fileContent.startsWith("---\n")) return {};
  const end = fileContent.indexOf("\n---", 4);
  if (end === -1) return {};
  const block = fileContent.slice(4, end);
  const out = {};
  for (const line of block.split("\n")) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) {
      let val = m[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      out[m[1].trim()] = val;
    }
  }
  return out;
}

function buildFrontmatter({ translated_at, source_hash, source_mtime, model }) {
  const lines = [
    "---",
    `translated_at: "${translated_at}"`,
    `source_hash: "${source_hash}"`,
    `source_mtime: ${Number(source_mtime)}`,
    `model: "${(model || "").replace(/"/g, '\\"')}"`,
    "---",
    "",
  ];
  return lines.join("\n");
}

/**
 * Split document into blocks of at most maxChars, cutting at the nearest markdown heading.
 * If the whole document fits, returns [content]. Otherwise splits at ^#{1,6} boundaries.
 * If a single section is itself > maxChars it is returned as one oversized block.
 */
function splitIntoBlocks(content, maxChars = BLOCK_SIZE) {
  const trimmed = (content && typeof content === "string") ? content.trim() : "";
  if (!trimmed) return [];
  if (trimmed.length <= maxChars) return [trimmed];

  const blocks = [];
  const lines = trimmed.split(/\n/);
  const headingRe = /^#{1,6}\s/;
  let current = "";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isHeading = headingRe.test(line);
    const lineWithSep = (current ? "\n" : "") + line;
    const wouldExceed = current.length + lineWithSep.length > maxChars;
    if (current && wouldExceed) {
      if (isHeading) {
        blocks.push(current.trim());
        current = line;
      } else {
        current += lineWithSep;
      }
    } else {
      current = current ? current + lineWithSep : line;
    }
  }
  if (current.trim()) blocks.push(current.trim());
  return blocks;
}

function extractUsage(data) {
  const u = data.usage || {};
  const rawCost = data.total_cost ?? data.cost ?? u.total_cost ?? u.cost;
  const cost = typeof rawCost === "number" && !Number.isNaN(rawCost)
    ? rawCost
    : typeof rawCost === "string"
      ? Number.parseFloat(rawCost) || 0
      : 0;
  const details = u.completion_tokens_details || {};
  const reasoning_tokens = Number(details.reasoning_tokens ?? u.reasoning_tokens) || 0;
  return {
    prompt_tokens: Number(u.prompt_tokens) || 0,
    completion_tokens: Number(u.completion_tokens) || 0,
    reasoning_tokens,
    total_cost: cost,
  };
}

const DOC_SYSTEM_PROMPT = `You are a professional translator for technical documentation.

Translate the following markdown document (or document block) from British English to the target language.
Your entire response must be the translated markdown and nothing else.

RULES:
- Preserve markdown structure (headers, lists, bold, links, code fences).
- Keep fenced code blocks and inline code spans (backtick-wrapped) unchanged.
- Keep URLs, [text](url), ![alt](path) link targets unchanged; translate only the visible link text where appropriate.
- Keep HTML tags and attribute values that are paths or technical (e.g. alt text can be translated).
- Keep product names as-is: Transrewrt, OpenRouter, Electron, Docker, unless there is a common localized form.
- Do NOT add any introduction, explanation, or note before or after the translation.
- Do NOT wrap your response in a markdown code fence (no \`\`\`markdown ... \`\`\`).
- Do NOT include the original text in your response.
- Keep all internal link fragments and anchor IDs unchanged: do not translate the fragment part of links (e.g. \`#quick-start\`) or the \`id\` attribute in \`<a id="..."></a>\` anchors; only the visible link text and heading text may be translated.`;

async function translateBlock(blockContent, langName, modelOverride = null) {
  const model = modelOverride ?? MODEL;
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_KEY}`,
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
          content: `Translate this markdown to ${langName}.\n\n${blockContent}`,
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
  return { translated, usage, model };
}

async function translateBlockWithFallback(blockContent, langName, docKey, blockIndex) {
  const modelsToTry = buildModelsToTry(MODEL);
  let lastError = null;
  for (let mi = 0; mi < modelsToTry.length; mi++) {
    const model = modelsToTry[mi];
    log(`  ${docKey} block ${blockIndex + 1}: trying model ${model}${mi > 0 ? ` (fallback ${mi + 1}/${modelsToTry.length})` : ""}...`);
    try {
      const result = await translateBlock(blockContent, langName, model);
      return result;
    } catch (e) {
      lastError = e;
      warn(`${docKey} block ${blockIndex + 1} failed with ${model}:`, e.message);
    }
  }
  throw lastError || new Error("No model succeeded");
}

/**
 * Point cross-doc links at the locale file in translated-docs/ (same folder as output).
 * Handles optional #fragments and legacy ../README.md from older script versions.
 */
function rewriteCrossDocLinksToLocale(body, localeCode) {
  const readme = (_, frag) => `](README.${localeCode}.md${frag || ""})`;
  const userGuide = (_, frag) => `](USER-GUIDE.${localeCode}.md${frag || ""})`;
  return body
    .replace(/\]\(\.\.\/README\.md(#[^)]*)?\)/g, readme)
    .replace(/\]\(\.\.\/USER-GUIDE\.md(#[^)]*)?\)/g, userGuide)
    .replace(/\]\(README\.md(#[^)]*)?\)/g, readme)
    .replace(/\]\(USER-GUIDE\.md(#[^)]*)?\)/g, userGuide);
}

function logUsage(label, usage, totalSoFar) {
  const { prompt_tokens, completion_tokens, reasoning_tokens, total_cost } = usage;
  const tokens = prompt_tokens + completion_tokens;
  const costStr = total_cost > 0 ? `$${total_cost.toFixed(6)} USD` : (tokens > 0 ? "(no cost reported)" : "no API calls");
  const totalStr = totalSoFar != null && totalSoFar > 0 ? `; total so far: $${totalSoFar.toFixed(6)} USD` : "";
  const reasoningStr = reasoning_tokens > 0 ? `, ${reasoning_tokens} reasoning` : "";
  log(GREEN + `💵 ${label}: ${tokens} tokens (${prompt_tokens} prompt + ${completion_tokens} completion${reasoningStr}), ${costStr}${totalStr}` + RESET);
}

/**
 * Translate a single document for one locale. Returns cost/tokens/status for aggregation.
 * Used so docs (README, USER-GUIDE) can run in parallel within a locale.
 */
async function processDoc(locale, doc, content) {
  const result = { cost: 0, tokens: 0, reasoning_tokens: 0, status: "ok" };
  const currentHash = hashSource(content);
  const outPath = path.join(TRANSLATED_DOCS_DIR, `${doc.key}.${locale.code}.md`);
  if (!args.force && fs.existsSync(outPath)) {
    const existingContent = fs.readFileSync(outPath, "utf8");
    const parsed = parseFrontmatter(existingContent);
    if (parsed.source_hash && parsed.source_hash === currentHash) {
      log(YELLOW + `⏭️ ${locale.code} ${doc.key}: skipping (source unchanged)` + RESET);
      return result;
    }
  }

  const blocks = splitIntoBlocks(content);
  log(YELLOW + `🔍 ${locale.code} ${doc.key}: ${blocks.length} block(s) (max ${BLOCK_SIZE} chars each)` + RESET);

  const translatedParts = [];
  let modelUsed = null;

  for (let i = 0; i < blocks.length; i++) {
    try {
      const res = await translateBlockWithFallback(blocks[i], locale.englishName, doc.key, i);
      const { translated, usage, model } = res;
      translatedParts.push(translated);
      if (modelUsed == null) modelUsed = model;
      result.cost += usage.total_cost;
      result.tokens += usage.prompt_tokens + usage.completion_tokens;
      result.reasoning_tokens += usage.reasoning_tokens || 0;
      const reasoningStr = (usage.reasoning_tokens > 0) ? `, ${usage.reasoning_tokens} reasoning` : "";
      log(`  ✔️  ${locale.code} ${doc.key}: block ${i + 1}/${blocks.length}: done (${usage.prompt_tokens + usage.completion_tokens} tokens${reasoningStr})`);
    } catch (e) {
      warn(`  ❌  ${locale.code} ${doc.key} block ${i + 1} failed:`, e.message);
      result.status = "failed";
      translatedParts.push(blocks[i]);
    }
  }

  {
    const sourcePath = path.join(ROOT, doc.sourceFile);
    const sourceMtime = fs.statSync(sourcePath).mtimeMs;
    const body = translatedParts.join("\n\n");
    const bodyWithLocalePaths = rewriteCrossDocLinksToLocale(
      body
        .replace(/images\/screenshots\/en-GB\//g, `../images/screenshots/${locale.code}/`)
        .replace(/src="images\//g, 'src="../images/')
        .replace(/\]\(images\//g, '](../images/')
        .replace(/\]\(translated-docs\/README\./g, '](README.')
        .replace(/\]\(translated-docs\/USER-GUIDE\./g, '](USER-GUIDE.')
        .replace(/\]\(dev\//g, '](../dev/'),
      locale.code
    );
    const frontmatter = buildFrontmatter({
      translated_at: new Date().toISOString(),
      source_hash: currentHash,
      source_mtime: sourceMtime,
      model: modelUsed || MODEL,
    });
    if (!fs.existsSync(TRANSLATED_DOCS_DIR)) fs.mkdirSync(TRANSLATED_DOCS_DIR, { recursive: true });
    fs.writeFileSync(outPath, frontmatter + bodyWithLocalePaths, "utf8");
    log(BLUE + `💾 ${locale.code} - ${locale.englishName}: wrote ${doc.key} -> ${doc.key}.${locale.code}.md` + RESET);
  }
  return result;
}

async function processLocale(locale, docContents) {
  const start = Date.now();
  const stats = {
    code: locale.code,
    englishName: locale.englishName,
    docs: DOCS_TO_PROCESS.map((d) => d.key).join(", "),
    elapsedMs: 0,
    cost: 0,
    tokens: 0,
    reasoning_tokens: 0,
    status: "ok",
  };

  log("--------------------------------"	);
  log(`starting locale: ${locale.code} (${locale.englishName})`);

  if (locale.code === "en-GB") {
    log(`en-GB: source (repo root ${DOCS_TO_PROCESS.map((d) => d.sourceFile).join(", ")}); no copy`);
    stats.elapsedMs = Date.now() - start;
    stats.status = "source";
    return stats;
  }

  if (!OPENROUTER_KEY) {
    log(`${locale.code}: skipping (no OPENROUTER_KEY)`);
    stats.status = "failed";
    stats.elapsedMs = Date.now() - start;
    return stats;
  }

  const docResults = await Promise.all(
    DOCS_TO_PROCESS.map((doc) => {
      const content = docContents[doc.key];
      if (!content) return Promise.resolve({ cost: 0, tokens: 0, reasoning_tokens: 0, status: "ok" });
      return processDoc(locale, doc, content);
    })
  );

  stats.cost = docResults.reduce((s, r) => s + r.cost, 0);
  stats.tokens = docResults.reduce((s, r) => s + r.tokens, 0);
  stats.reasoning_tokens = docResults.reduce((s, r) => s + (r.reasoning_tokens || 0), 0);
  if (docResults.some((r) => r.status === "failed")) stats.status = "failed";

  stats.elapsedMs = Date.now() - start;
  if (stats.status === "ok") {
    logUsage(`${locale.code} - ${locale.englishName} cost`, { prompt_tokens: 0, completion_tokens: stats.tokens, reasoning_tokens: stats.reasoning_tokens, total_cost: stats.cost }, stats.cost);
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
  if (!fs.existsSync(TRANSLATED_DOCS_DIR)) {
    fs.mkdirSync(TRANSLATED_DOCS_DIR, { recursive: true });
  }
  const logPath = path.join(TRANSLATED_DOCS_DIR, `translate-docs_${logFilenameTimestamp()}.log`);
  logFileStream = fs.createWriteStream(logPath, { flags: "a" });
  log("logging to " + logPath);

  const startTime = Date.now();
  log("starting (docs: " + DOCS_TO_PROCESS.map((d) => d.sourceFile).join(", ") + "; locales: " + LANGUAGES.length + "; concurrency: " + CONCURRENCY + (args.force ? "; force" : "") + ")");

  const docContents = {};
  for (const doc of DOCS_TO_PROCESS) {
    const p = path.join(ROOT, doc.sourceFile);
    if (!fs.existsSync(p)) {
      err(`${doc.sourceFile} not found`);
      if (logFileStream) {
        logFileStream.end();
        logFileStream = null;
      }
      process.exit(1);
    }
    log(`loading source: ${doc.sourceFile}...`);
    docContents[doc.key] = fs.readFileSync(p, "utf8");
    log(`loaded ${doc.sourceFile}: ${docContents[doc.key].length} chars`);
  }

  log("processing locales (batches of " + CONCURRENCY + ")...");
  const allStats = await runInBatches(
    LANGUAGES,
    CONCURRENCY,
    (locale) => processLocale(locale, docContents)
  );

  const totalElapsed = Date.now() - startTime;
  const totalCost = allStats.reduce((s, r) => s + r.cost, 0);
  const totalTokens = allStats.reduce((s, r) => s + r.tokens, 0);
  const totalReasoningTokens = allStats.reduce((s, r) => s + (r.reasoning_tokens || 0), 0);

  log("\ndone");
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
  log(`total time: ${formatElapsed(totalElapsed)}`);
  const reasoningSummary = totalReasoningTokens > 0 ? `, ${totalReasoningTokens} reasoning` : "";
  log(`total tokens: ${totalTokens} (${allStats.reduce((a, s) => a + (s.tokens || 0), 0)} from API${reasoningSummary})`);
  if (totalCost > 0) {
    log(`total cost: $${totalCost.toFixed(6)} USD`);
  } else if (totalTokens > 0) {
    log("total cost: (not reported by API)");
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
