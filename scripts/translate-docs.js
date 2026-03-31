#!/usr/bin/env node
/**
 * Translate README.md and USER-GUIDE.md (British English) to all UI languages via OpenRouter.
 * Writes translated-docs/README.<code>.md and translated-docs/USER-GUIDE.<code>.md.
 * After translation, rewrites sibling links (README.md / USER-GUIDE.md) to README.<code>.md / USER-GUIDE.<code>.md,
 * then replaces `<small id="lang-list">…</small>` with the British English source block (canonical links; English UK → `../README.md` / `../USER-GUIDE.md`).
 * Splits source at markdown headings (outside fenced code blocks); oversized sections sub-split at paragraphs (--block-size).
 * Fenced code blocks (``` / ~~~) and GFM pipe tables are kept whole per block so joins do not split fences or table rows.
 * Per-block translations are cached under translated-docs/.cache/<locale>.json (key = SHA-256 of source block; value includes translated, model, timestamp, id).
 * Requires OPENROUTER_API_KEY (same as server/Docker). en-GB is the source (repo root), no copy. Run from project root.
 * Session log: dev/translate-docs_YYYYMMDD_HHMMSS.log; per-doc summaries append to dev/translations.log.
 * With --debug, separated source blocks are also written to dev/translate-docs-blocks_<same-stamp>.log.
 *
 *   node scripts/translate-docs.js --help
 *   OPENROUTER_API_KEY=sk-or-... pnpm run translate-docs
 *
 * Model list: scripts/openrouter-script-models.js (not app config).
 */

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { TRANSLATION_MODELS, OPENROUTER_PROVIDER } = require("./openrouter-script-models.js");

const DEFAULT_MODEL = TRANSLATION_MODELS[0];

/** @param {string} primary - from --model or DEFAULT_MODEL */
function buildModelsToTry(primary) {
  const first = primary || DEFAULT_MODEL;
  return [first, ...TRANSLATION_MODELS.filter((m) => m !== first)];
}

const DEFAULT_MAX_TOKENS = 32768; // 32KB
const DEFAULT_CONCURRENCY = 3;
/** Max parallel API calls translating blocks within one doc+locale (see --block-concurrency). */
const DEFAULT_BLOCK_CONCURRENCY = 4;
/** Max characters per block after heading-based split; larger sections sub-split at paragraph boundaries (fenced code and pipe tables stay whole). */
const DEFAULT_BLOCK_SIZE = 1024;
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
/** Per-locale JSON cache of translated blocks (keys: doc key → block hash → entry). */
const TRANSLATED_DOCS_CACHE_DIR = path.join(TRANSLATED_DOCS_DIR, ".cache");
const DEV_DIR = path.join(ROOT, "dev");
const TRANSLATIONS_SUMMARY_LOG = path.join(DEV_DIR, "translations.log");

let logFileStream = null;
/** Set in main() when --debug; appendDebugBlocks writes separated block text here. */
let debugBlocksPath = null;

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
Documents split by markdown headings (not inside code fences); large sections split further at paragraphs, keeping each fenced code block and pipe table in one piece. Block cache: translated-docs/.cache/. Requires OPENROUTER_API_KEY.

Usage:
  node scripts/translate-docs.js [options]
  OPENROUTER_API_KEY=sk-or-... pnpm run translate-docs -- [options]

Options:
  --help, -h              Show this help and exit.
  --force, -f             Force translation even when source hash matches existing file (ignore skip).
  --doc <name>            README | USER-GUIDE | both (default: both).
  --locale, -l <codes>    Translate only these locale(s), comma- or space-separated inside a single argv token (e.g. pt-BR, es, ja or --locale "pt-BR es ja").
  --model, -m <name>      OpenRouter model (default: ${DEFAULT_MODEL}).
  --max-tokens, -t <n>    Max tokens (default: ${DEFAULT_MAX_TOKENS}).
  --concurrency, -c <n>   Max parallel languages (default: ${DEFAULT_CONCURRENCY}).
  --block-concurrency, -b <n>  Max parallel blocks per language per document (default: ${DEFAULT_BLOCK_CONCURRENCY}; with defaults, up to ${DEFAULT_CONCURRENCY}×${DEFAULT_BLOCK_CONCURRENCY} simultaneous translations).
  --block-size <n>        Max characters per block after heading split; larger sections sub-split at paragraphs; fenced code blocks and pipe tables are not split (default: ${DEFAULT_BLOCK_SIZE}).
  --debug                 Write each doc’s split source blocks to dev/translate-docs-blocks_<run>.log (same run id as the session log).

Examples:
  node scripts/translate-docs.js --help
  OPENROUTER_API_KEY=sk-or-... node scripts/translate-docs.js
  OPENROUTER_API_KEY=sk-or-... node scripts/translate-docs.js --doc USER-GUIDE --locale pt-BR,es,ja
  OPENROUTER_API_KEY=sk-or-... node scripts/translate-docs.js --force

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
  let blockConcurrency = DEFAULT_BLOCK_CONCURRENCY;
  let blockSize = DEFAULT_BLOCK_SIZE;
  let debug = false;
  let help = false;
  const unknown = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--help" || arg === "-h") help = true;
    else if (arg === "--force" || arg === "-f") force = true;
    else if (arg === "--debug") debug = true;
    else if (arg === "--doc" && args[i + 1]) {
      const v = args[++i];
      if (v === "README" || v === "USER-GUIDE" || v === "both") doc = v;
    } else if (arg.startsWith("--locale=")) {
      const v = arg.split("=", 2)[1];
      locale = v;
    } else if ((arg === "--locale" || arg === "-l") && args[i + 1]) locale = args[++i];
    else if ((arg === "--model" || arg === "-m") && args[i + 1]) model = args[++i];
    else if ((arg === "--max-tokens" || arg === "-t") && args[i + 1]) {
      const n = parseInt(args[++i], 10);
      if (!Number.isNaN(n) && n > 0) maxTokens = n;
    } else if ((arg === "--concurrency" || arg === "-c") && args[i + 1]) {
      const n = parseInt(args[++i], 10);
      if (!Number.isNaN(n) && n >= 1) concurrency = n;
    } else if (arg.startsWith("--block-concurrency=")) {
      const v = arg.split("=", 2)[1];
      const n = parseInt(v, 10);
      if (!Number.isNaN(n) && n >= 1) blockConcurrency = n;
    } else if ((arg === "--block-concurrency" || arg === "-b") && args[i + 1]) {
      const n = parseInt(args[++i], 10);
      if (!Number.isNaN(n) && n >= 1) blockConcurrency = n;
    } else if (arg.startsWith("--block-size=")) {
      const v = arg.split("=", 2)[1];
      const n = parseInt(v, 10);
      if (!Number.isNaN(n) && n >= 1) blockSize = n;
    } else if (arg === "--block-size" && args[i + 1]) {
      const n = parseInt(args[++i], 10);
      if (!Number.isNaN(n) && n >= 1) blockSize = n;
    } else unknown.push(arg);
  }
  return { help, force, doc, locale, model, maxTokens, concurrency, blockConcurrency, blockSize, debug, unknown };
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

const OPENROUTER_API_KEY = (process.env.OPENROUTER_API_KEY || "").trim();
const MODEL = args.model;
const MAX_TOKENS = args.maxTokens;
const CONCURRENCY = args.concurrency;
const BLOCK_CONCURRENCY = args.blockConcurrency;
const BLOCK_SIZE = args.blockSize;

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
  const codes = args.locale.split(/[,\s]+/).map((c) => c.trim()).filter(Boolean);
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

if (!OPENROUTER_API_KEY && LANGUAGES.some((l) => l.code !== "en-GB")) {
  warn("OPENROUTER_API_KEY not set; only en-GB (source) will be done for non–en-GB locales.");
}

function hashSource(content) {
  return crypto.createHash("sha256").update(content, "utf8").digest("hex");
}

/** SHA-256 of trimmed block text (cache key). */
function hashBlock(text) {
  const t = typeof text === "string" ? text.trim() : "";
  return crypto.createHash("sha256").update(t, "utf8").digest("hex");
}

/**
 * @param {string} localeCode
 * @returns {Record<string, Record<string, { translated: string, model: string, timestamp: string, id?: string }>>}
 */
function loadCache(localeCode) {
  const p = path.join(TRANSLATED_DOCS_CACHE_DIR, `${localeCode}.json`);
  if (!fs.existsSync(p)) return {};
  try {
    const raw = fs.readFileSync(p, "utf8");
    const data = JSON.parse(raw);
    return typeof data === "object" && data !== null && !Array.isArray(data) ? data : {};
  } catch {
    warn(`cache corrupt or unreadable: ${p}; starting empty`);
    return {};
  }
}

/**
 * Sort dotted block ids ("0", "3.1", "10") for stable cache file order.
 * @param {string | undefined} a
 * @param {string | undefined} b
 */
function compareBlockIds(a, b) {
  const sa = a == null ? "" : String(a);
  const sb = b == null ? "" : String(b);
  if (!sa && !sb) return 0;
  if (!sa) return 1;
  if (!sb) return -1;
  return sa.localeCompare(sb, undefined, { numeric: true });
}

/**
 * Return a copy of the locale cache with each doc bucket's hash keys ordered by entry `id`.
 * @param {Record<string, Record<string, { translated: string, model: string, timestamp: string, id?: string }>>} cacheObj
 */
function sortCacheByBlockId(cacheObj) {
  if (typeof cacheObj !== "object" || cacheObj === null || Array.isArray(cacheObj)) {
    return cacheObj;
  }
  const out = {};
  for (const docKey of Object.keys(cacheObj).sort()) {
    const bucket = cacheObj[docKey];
    if (!bucket || typeof bucket !== "object" || Array.isArray(bucket)) {
      out[docKey] = bucket;
      continue;
    }
    const pairs = Object.entries(bucket);
    pairs.sort(([, ea], [, eb]) => compareBlockIds(ea && ea.id, eb && eb.id));
    out[docKey] = {};
    for (const [h, e] of pairs) {
      out[docKey][h] = e;
    }
  }
  return out;
}

/**
 * @param {string} localeCode
 * @param {Record<string, Record<string, { translated: string, model: string, timestamp: string, id?: string }>>} cacheObj
 */
function saveCache(localeCode, cacheObj) {
  if (!fs.existsSync(TRANSLATED_DOCS_CACHE_DIR)) {
    fs.mkdirSync(TRANSLATED_DOCS_CACHE_DIR, { recursive: true });
  }
  const p = path.join(TRANSLATED_DOCS_CACHE_DIR, `${localeCode}.json`);
  const tmp = p + ".tmp";
  const sorted = sortCacheByBlockId(cacheObj);
  fs.writeFileSync(tmp, `${JSON.stringify(sorted, null, 2)}\n`, "utf8");
  fs.renameSync(tmp, p);
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
  const sourceMtimeIso = new Date(Number(source_mtime)).toISOString();
  const lines = [
    "---",
    `translated_at: "${translated_at}"`,
    `source_hash: "${source_hash}"`,
    `source_mtime: "${sourceMtimeIso}"`,
    `model: "${(model || "").replace(/"/g, '\\"')}"`,
    "---",
    "",
  ];
  return lines.join("\n");
}

const MD_HEADING_RE = /^#{1,6}\s/;

/** True if trimmed line opens/closes a fenced code block (``` or ~~~). */
function isFenceDelimiterLine(line) {
  const t = line.trimStart();
  return /^(```|~~~)/.test(t);
}

/**
 * Split section body into text runs and complete fenced blocks (opening delimiter through closing line).
 * Prevents paragraph splitting on blank lines inside code fences; unclosed fence at EOF is one trailing fence segment.
 * @param {string} sectionText
 * @returns {{ kind: "text" | "fence", content: string }[]}
 */
function segmentFencedBlocksAndText(sectionText) {
  const lines = (typeof sectionText === "string" ? sectionText : "").split("\n");
  /** @type {{ kind: "text" | "fence", content: string }[]} */
  const segments = [];
  const textBuf = [];
  let insideFence = false;
  /** @type {string[] | null} */
  let fenceBuf = null;

  function flushText() {
    if (textBuf.length === 0) return;
    const s = textBuf.join("\n");
    textBuf.length = 0;
    if (s.length > 0) {
      segments.push({ kind: "text", content: s });
    }
  }

  for (const line of lines) {
    if (isFenceDelimiterLine(line)) {
      if (!insideFence) {
        flushText();
        insideFence = true;
        fenceBuf = [line];
      } else {
        fenceBuf.push(line);
        segments.push({ kind: "fence", content: fenceBuf.join("\n") });
        fenceBuf = null;
        insideFence = false;
      }
      continue;
    }
    if (insideFence) {
      fenceBuf.push(line);
    } else {
      textBuf.push(line);
    }
  }
  flushText();
  if (insideFence && fenceBuf != null && fenceBuf.length > 0) {
    segments.push({ kind: "fence", content: fenceBuf.join("\n") });
  }
  return segments;
}

/**
 * GFM-style pipe table row: leading pipe, another pipe later (excludes most prose with a single |).
 * @param {string} line
 */
function isMarkdownTableRowLine(line) {
  const t = typeof line === "string" ? line.trim() : "";
  if (!t || isFenceDelimiterLine(line)) return false;
  return /^\|.*\|/.test(t);
}

/**
 * Split an oversized paragraph into chunks without breaking markdown pipe tables.
 * Tables are emitted as whole units (may exceed maxSize) so block joins do not insert a blank line between rows.
 * @param {string} para
 * @param {number} maxSize
 * @returns {string[]}
 */
function splitOversizedParagraphPreservingTables(para, maxSize) {
  const lines = para.split("\n");
  /** @type {({ kind: "table", text: string } | { kind: "line", line: string })[]} */
  const runs = [];
  let i = 0;
  while (i < lines.length) {
    const ln = lines[i];
    if (isMarkdownTableRowLine(ln)) {
      const start = i;
      while (i < lines.length && isMarkdownTableRowLine(lines[i])) {
        i++;
      }
      runs.push({ kind: "table", text: lines.slice(start, i).join("\n") });
      continue;
    }
    runs.push({ kind: "line", line: ln });
    i++;
  }

  const chunks = [];
  let lineBuf = "";

  function flushLines() {
    if (lineBuf) {
      chunks.push(lineBuf);
      lineBuf = "";
    }
  }

  for (const run of runs) {
    if (run.kind === "table") {
      flushLines();
      chunks.push(run.text);
      continue;
    }
    const ln = run.line;
    const cand = lineBuf ? `${lineBuf}\n${ln}` : ln;
    if (cand.length <= maxSize) {
      lineBuf = cand;
    } else {
      flushLines();
      if (ln.length <= maxSize) {
        lineBuf = ln;
      } else {
        for (let o = 0; o < ln.length; o += maxSize) {
          chunks.push(ln.slice(o, Math.min(o + maxSize, ln.length)));
        }
      }
    }
  }
  flushLines();
  return chunks;
}

/**
 * Sub-split one section when longer than maxSize: pack text paragraphs and fenced blocks up to maxSize.
 * Fenced code is never split; pipe tables are never split mid-table (see splitOversizedParagraphPreservingTables).
 * @returns {{ text: string, heading: string | null }[]}
 */
function splitSectionByMaxSize(sectionText, maxSize, headingLine) {
  const trimmed = sectionText.trim();
  if (trimmed.length <= maxSize) {
    return [{ text: trimmed, heading: headingLine }];
  }

  /** @type {string[]} */
  const pieces = [];
  for (const seg of segmentFencedBlocksAndText(trimmed)) {
    if (seg.kind === "fence") {
      pieces.push(seg.content);
      continue;
    }
    const paras = seg.content.split(/\n\n+/).filter((p) => p.length > 0);
    for (const para of paras) {
      if (para.length > maxSize) {
        pieces.push(...splitOversizedParagraphPreservingTables(para, maxSize));
      } else {
        pieces.push(para);
      }
    }
  }

  const chunks = [];
  let current = "";
  for (const piece of pieces) {
    if (piece.length > maxSize) {
      if (current) {
        chunks.push(current);
        current = "";
      }
      chunks.push(piece);
      continue;
    }
    const candidate = current ? `${current}\n\n${piece}` : piece;
    if (candidate.length <= maxSize) {
      current = candidate;
    } else {
      if (current) {
        chunks.push(current);
      }
      current = piece;
    }
  }
  if (current) {
    chunks.push(current);
  }

  return chunks.map((text, i) => ({
    text,
    heading: i === 0 ? headingLine : null,
  }));
}

/**
 * Split at markdown headings (#–######) only outside fenced code blocks; sub-split long sections (paragraphs + whole fences/tables).
 * @returns {{ id: string, heading: string | null, text: string }[]}
 */
function splitIntoSections(content, maxSectionSize = BLOCK_SIZE) {
  const trimmed = (content && typeof content === "string") ? content.trim() : "";
  if (!trimmed) return [];

  const lines = trimmed.split(/\n/);
  let insideFence = false;
  const rawSections = [];
  let currentLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isFenceDelimiterLine(line)) {
      insideFence = !insideFence;
    }
    const isHeading = !insideFence && MD_HEADING_RE.test(line);
    if (isHeading && currentLines.length > 0) {
      rawSections.push(currentLines);
      currentLines = [];
    }
    currentLines.push(line);
  }
  if (currentLines.length > 0) {
    rawSections.push(currentLines);
  }

  const out = [];
  let sectionIndex = 0;
  for (const secLines of rawSections) {
    const text = secLines.join("\n");
    const firstLine = secLines[0] || "";
    const headingLine = MD_HEADING_RE.test(firstLine) ? firstLine : null;
    const subBlocks = splitSectionByMaxSize(text, maxSectionSize, headingLine);
    for (let j = 0; j < subBlocks.length; j++) {
      const id = j === 0 ? String(sectionIndex) : `${sectionIndex}.${j}`;
      out.push({
        id,
        heading: subBlocks[j].heading,
        text: subBlocks[j].text,
      });
    }
    sectionIndex += 1;
  }
  return out;
}

/** All block hashes currently valid for this source (for cache orphan cleanup). */
function collectBlockHashesForContent(content) {
  return new Set(splitIntoSections(content, BLOCK_SIZE).map((s) => hashBlock(s.text)));
}

function appendDebugBlocks(localeCode, docKey, sections) {
  if (!debugBlocksPath) return;
  let out = "";
  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];
    const b = s.text;
    out +=
      "\n" +
      "=".repeat(72) +
      "\n" +
      `locale: ${localeCode} | doc: ${docKey} | block ${i + 1}/${sections.length} | id: ${s.id} | ${b.length} chars` +
      "\n" +
      "=".repeat(72) +
      "\n" +
      b +
      "\n";
  }
  fs.appendFileSync(debugBlocksPath, out, "utf8");
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
- Preserve the tag \`<small id="lang-list">\` through its closing \`</small>\` exactly (same attribute \`id="lang-list"\`); do not translate language names or link targets inside that block (it is restored from source after translation).
- Do NOT add any introduction, explanation, or note before or after the translation.
- Do NOT wrap your response in a markdown code fence (no \`\`\`markdown ... \`\`\`).
- Do NOT include the original text in your response.
- Keep all internal link fragments and anchor IDs unchanged: do not translate the fragment part of links (e.g. \`#quick-start\`) or the \`id\` attribute in \`<a id="..."></a>\` anchors; only the visible link text and heading text may be translated.`;

async function translateBlock(blockContent, langName, modelOverride = null) {
  const model = modelOverride ?? MODEL;
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
      "X-Title": "Transrewrt-doc-translations",
    },
    body: JSON.stringify({
      model,
      max_tokens: MAX_TOKENS,
      provider: OPENROUTER_PROVIDER,
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

async function translateBlockWithFallback(blockContent, langName, localeCode, docKey, blockIndex) {
  const modelsToTry = buildModelsToTry(MODEL);
  let lastError = null;
  for (let mi = 0; mi < modelsToTry.length; mi++) {
    const model = modelsToTry[mi];
    log(`  ${localeCode} ${docKey} block ${blockIndex + 1}: trying model ${model}${mi > 0 ? ` (fallback ${mi + 1}/${modelsToTry.length})` : ""}...`);
    try {
      const result = await translateBlock(blockContent, langName, model);
      return result;
    } catch (e) {
      lastError = e;
      warn(`${localeCode} ${docKey} block ${blockIndex + 1} failed with ${model}:`, e.message);
    }
  }
  throw lastError || new Error("No model succeeded");
}

const LANG_LIST_SMALL_RE = /<small id="lang-list">[\s\S]*?<\/small>/;

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Extract `<small id="lang-list">...</small>` from British English source (repo root).
 * @param {string} sourceMarkdown
 * @returns {string | null}
 */
function extractLangListBlock(sourceMarkdown) {
  const m = sourceMarkdown.match(LANG_LIST_SMALL_RE);
  return m ? m[0] : null;
}

/**
 * Build the lang-list block for `translated-docs/` output: same links as source, strip `translated-docs/`,
 * and point English (UK) at the repo-root source via `../`.
 * @param {string} sourceMarkdown
 * @param {string} docKey - "README" | "USER-GUIDE"
 * @returns {string | null}
 */
function buildLangListSmallForTranslatedDoc(sourceMarkdown, docKey) {
  const block = extractLangListBlock(sourceMarkdown);
  if (!block) return null;
  let out = block
    .replace(/\]\(translated-docs\/README\./g, "](README.")
    .replace(/\]\(translated-docs\/USER-GUIDE\./g, "](USER-GUIDE.");
  if (docKey === "README") {
    out = out.replace("[English (UK)](README.md)", "[English (UK)](../README.md)");
  } else if (docKey === "USER-GUIDE") {
    out = out.replace("[English (UK)](USER-GUIDE.md)", "[English (UK)](../USER-GUIDE.md)");
  }
  return out;
}

/**
 * Replace `<small id="lang-list">...</small>` in translated output with the canonical block from source.
 * @param {string} body
 * @param {string} canonicalBlock
 * @returns {{ body: string, matched: boolean }} `matched` is true when the pattern was found (replace ran; body may be unchanged if canonical already matched).
 */
function replaceTranslatedLangListBlock(body, canonicalBlock) {
  if (!canonicalBlock) return { body, matched: false };
  if (!LANG_LIST_SMALL_RE.test(body)) return { body, matched: false };
  return { body: body.replace(LANG_LIST_SMALL_RE, canonicalBlock), matched: true };
}

/**
 * The "English (UK)" language-switcher link must point at the repo-root source (`../README.md` / `../USER-GUIDE.md`),
 * not the current locale file. `rewriteCrossDocLinksToLocale` rewrites every bare `README.md` / `USER-GUIDE.md`
 * link, which incorrectly retargets that entry too.
 */
function fixEnglishUkSwitcherLink(body, localeCode, docKey) {
  if (docKey !== "README" && docKey !== "USER-GUIDE") return body;
  const escaped = escapeRegExp(localeCode);
  const re = new RegExp(
    `\\[English \\(UK\\)\\]\\(${docKey}\\.${escaped}\\.md(#[^)]*)?\\)`,
    "g"
  );
  return body.replace(re, (_, frag) => `[English (UK)](../${docKey}.md${frag || ""})`);
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
 * Translate a single document for one locale. Mutates localeCache for this locale (saved by processLocale).
 * @param {Record<string, Record<string, { translated: string, model: string, timestamp: string, id?: string }>>} localeCache
 */
async function processDoc(locale, doc, content, localeCache) {
  const docStart = Date.now();
  const result = { cost: 0, tokens: 0, reasoning_tokens: 0, status: "ok", elapsedMs: 0 };
  const currentHash = hashSource(content);
  const outPath = path.join(TRANSLATED_DOCS_DIR, `${doc.key}.${locale.code}.md`);

  const sections = splitIntoSections(content, BLOCK_SIZE);
  if (args.debug) {
    appendDebugBlocks(locale.code, doc.key, sections);
  }

  if (!args.force && fs.existsSync(outPath)) {
    const existingContent = fs.readFileSync(outPath, "utf8");
    const parsed = parseFrontmatter(existingContent);
    if (parsed.source_hash && parsed.source_hash === currentHash) {
      log(YELLOW + `⏭️ ${locale.code} ${doc.key}: skipping (source unchanged)` + RESET);
      result.elapsedMs = Date.now() - docStart;
      return result;
    }
  }

  log(YELLOW + `🔍 ${locale.code} ${doc.key}: ${sections.length} block(s) (headings + max ${BLOCK_SIZE} chars)` + RESET);

  if (!localeCache[doc.key] || typeof localeCache[doc.key] !== "object") {
    localeCache[doc.key] = {};
  }
  const docBlockCache = localeCache[doc.key];

  const blockTasks = sections.map((sec, i) => ({ sec, i, h: hashBlock(sec.text) }));

  const blockOutcomes = await runMapWithConcurrency(blockTasks, BLOCK_CONCURRENCY, async ({ sec, i, h }) => {
    if (!args.force && docBlockCache[h]) {
      const entry = docBlockCache[h];
      docBlockCache[h] = { ...entry, id: sec.id };
      log(`  📦 ${locale.code} ${doc.key}: block ${i + 1}/${sections.length} (id ${sec.id}): cache hit`);
      return {
        ok: true,
        translated: entry.translated,
        usage: { prompt_tokens: 0, completion_tokens: 0, reasoning_tokens: 0, total_cost: 0 },
        model: entry.model,
        timestamp: entry.timestamp,
        fromCache: true,
      };
    }
    try {
      const res = await translateBlockWithFallback(sec.text, locale.englishName, locale.code, doc.key, i);
      const { translated, usage, model } = res;
      const ts = new Date().toISOString();
      docBlockCache[h] = { translated, model, timestamp: ts, id: sec.id };
      const reasoningStr = (usage.reasoning_tokens > 0) ? `, ${usage.reasoning_tokens} reasoning` : "";
      log(`  ✔️  ${locale.code} ${doc.key}: block ${i + 1}/${sections.length} (id ${sec.id}): done (${usage.prompt_tokens + usage.completion_tokens} tokens${reasoningStr})`);
      return { ok: true, translated, usage, model, timestamp: ts, fromCache: false };
    } catch (e) {
      warn(`  ❌  ${locale.code} ${doc.key} block ${i + 1} (id ${sec.id}) failed:`, e.message);
      return { ok: false, fallback: sec.text, timestamp: new Date().toISOString() };
    }
  });

  const translatedParts = [];
  const timestamps = [];
  const modelsUsed = new Set();
  for (let i = 0; i < blockOutcomes.length; i++) {
    const o = blockOutcomes[i];
    if (o.ok) {
      translatedParts.push(o.translated);
      if (o.timestamp) timestamps.push(o.timestamp);
      if (o.model) modelsUsed.add(o.model);
      result.cost += o.usage.total_cost;
      result.tokens += o.usage.prompt_tokens + o.usage.completion_tokens;
      result.reasoning_tokens += o.usage.reasoning_tokens || 0;
    } else {
      translatedParts.push(o.fallback);
      if (o.timestamp) timestamps.push(o.timestamp);
      result.status = "failed";
    }
  }

  let translatedAtIso = new Date().toISOString();
  if (timestamps.length > 0) {
    translatedAtIso = timestamps.reduce((best, t) => (new Date(t) > new Date(best) ? t : best));
  }
  const modelListStr = modelsUsed.size > 0 ? [...modelsUsed].join(", ") : MODEL;

  {
    const sourcePath = path.join(ROOT, doc.sourceFile);
    const sourceMtime = fs.statSync(sourcePath).mtimeMs;
    const body = translatedParts.join("\n\n");
    let bodyWithLocalePaths = fixEnglishUkSwitcherLink(
      rewriteCrossDocLinksToLocale(
        body
          .replace(/images\/screenshots\/en-GB\//g, `../images/screenshots/${locale.code}/`)
          .replace(/src="images\//g, 'src="../images/')
          .replace(/\]\(images\//g, '](../images/')
          .replace(/\]\(translated-docs\/README\./g, '](README.')
          .replace(/\]\(translated-docs\/USER-GUIDE\./g, '](USER-GUIDE.')
          .replace(/\]\(dev\//g, '](../dev/'),
        locale.code
      ),
      locale.code,
      doc.key
    );
    const canonicalLangList = buildLangListSmallForTranslatedDoc(content, doc.key);
    if (!canonicalLangList) {
      warn(`${locale.code} ${doc.key}: source missing <small id="lang-list">; skipped lang-list injection`);
    } else {
      const { body: patched, matched } = replaceTranslatedLangListBlock(bodyWithLocalePaths, canonicalLangList);
      bodyWithLocalePaths = patched;
      if (!matched) {
        warn(`${locale.code} ${doc.key}: translated output had no <small id="lang-list">; lang-list not replaced`);
      }
    }
    const frontmatter = buildFrontmatter({
      translated_at: translatedAtIso,
      source_hash: currentHash,
      source_mtime: sourceMtime,
      model: modelListStr,
    });
    if (!fs.existsSync(TRANSLATED_DOCS_DIR)) fs.mkdirSync(TRANSLATED_DOCS_DIR, { recursive: true });
    fs.writeFileSync(outPath, frontmatter + bodyWithLocalePaths, "utf8");
    log(BLUE + `💾 ${locale.code} - ${locale.englishName}: wrote ${doc.key} -> ${doc.key}.${locale.code}.md` + RESET);
  }
  result.elapsedMs = Date.now() - docStart;
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
    stats.byDoc = {};
    return stats;
  }

  if (!OPENROUTER_API_KEY) {
    log(`${locale.code}: skipping (no OPENROUTER_API_KEY)`);
    stats.status = "failed";
    stats.elapsedMs = Date.now() - start;
    stats.byDoc = {};
    return stats;
  }

  const localeCache = loadCache(locale.code);
  const docResults = await Promise.all(
    DOCS_TO_PROCESS.map((doc) => {
      const content = docContents[doc.key];
      if (!content) {
        return Promise.resolve({
          cost: 0,
          tokens: 0,
          reasoning_tokens: 0,
          status: "ok",
          elapsedMs: 0,
        });
      }
      return processDoc(locale, doc, content, localeCache);
    })
  );
  saveCache(locale.code, localeCache);

  stats.byDoc = {};
  for (let i = 0; i < DOCS_TO_PROCESS.length; i++) {
    const key = DOCS_TO_PROCESS[i].key;
    const r = docResults[i];
    stats.byDoc[key] = {
      cost: r.cost,
      tokens: r.tokens,
      elapsedMs: r.elapsedMs || 0,
    };
  }

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

/**
 * Run async fn(item, index) for each item with at most `limit` concurrent executions.
 * Results are in the same order as `items`.
 * @template T, R
 * @param {T[]} items
 * @param {number} limit
 * @param {(item: T, index: number) => Promise<R>} fn
 * @returns {Promise<R[]>}
 */
async function runMapWithConcurrency(items, limit, fn) {
  if (items.length === 0) return [];
  const cap = Math.max(1, Math.min(limit, items.length));
  const results = /** @type {R[]} */ (new Array(items.length));
  let nextIndex = 0;
  async function worker() {
    for (;;) {
      const i = nextIndex++;
      if (i >= items.length) return;
      results[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: cap }, () => worker()));
  return results;
}

/**
 * One line per doc run: ISO time, primary model, sum of per-locale processDoc wall times, tokens, cost.
 */
function appendDocTranslationSummaryLine(docKey, tokens, cost, elapsedMsSum) {
  const ts = new Date().toISOString();
  const elapsed = formatElapsed(elapsedMsSum);
  let costStr;
  if (cost > 0) costStr = `$${cost.toFixed(6)} USD`;
  else if (tokens > 0) costStr = "(not reported)";
  else costStr = "$0.000000 USD";
  const line = `${ts} | model: ${MODEL} | elapsed: ${elapsed} | doc: ${docKey} | tokens: ${tokens} | cost: ${costStr}\n`;
  fs.appendFileSync(TRANSLATIONS_SUMMARY_LOG, line, "utf8");
}

/**
 * Remove cache entries whose block hash no longer exists in the current source (per doc key).
 * @param {Record<string, string>} docByKey - README / USER-GUIDE source text
 */
function pruneStaleCacheEntries(docByKey) {
  if (!fs.existsSync(TRANSLATED_DOCS_CACHE_DIR)) return;
  let totalRemoved = 0;
  for (const file of fs.readdirSync(TRANSLATED_DOCS_CACHE_DIR)) {
    if (!file.endsWith(".json")) continue;
    const localeCode = path.basename(file, ".json");
    let cache;
    try {
      cache = JSON.parse(fs.readFileSync(path.join(TRANSLATED_DOCS_CACHE_DIR, file), "utf8"));
    } catch {
      warn(`cache prune: skip unreadable ${file}`);
      continue;
    }
    if (typeof cache !== "object" || cache === null || Array.isArray(cache)) continue;
    let removed = 0;
    for (const docKey of Object.keys(cache)) {
      const content = docByKey[docKey];
      if (typeof content !== "string") continue;
      const valid = collectBlockHashesForContent(content);
      const bucket = cache[docKey];
      if (!bucket || typeof bucket !== "object" || Array.isArray(bucket)) continue;
      for (const h of Object.keys(bucket)) {
        if (!valid.has(h)) {
          delete bucket[h];
          removed++;
        }
      }
      if (Object.keys(bucket).length === 0) {
        delete cache[docKey];
      }
    }
    if (removed > 0) {
      saveCache(localeCode, cache);
      totalRemoved += removed;
      log(`cache prune ${localeCode}: removed ${removed} stale block entr${removed === 1 ? "y" : "ies"}`);
    }
  }
  if (totalRemoved > 0) {
    log(`cache prune: total ${totalRemoved} stale block entr${totalRemoved === 1 ? "y" : "ies"} removed`);
  }
}

async function main() {
  if (!fs.existsSync(TRANSLATED_DOCS_DIR)) {
    fs.mkdirSync(TRANSLATED_DOCS_DIR, { recursive: true });
  }
  if (!fs.existsSync(DEV_DIR)) {
    fs.mkdirSync(DEV_DIR, { recursive: true });
  }
  const runId = logFilenameTimestamp();
  const logPath = path.join(DEV_DIR, `translate-docs_${runId}.log`);
  logFileStream = fs.createWriteStream(logPath, { flags: "a" });
  log("logging to " + logPath);

  if (args.debug) {
    debugBlocksPath = path.join(DEV_DIR, `translate-docs-blocks_${runId}.log`);
    fs.writeFileSync(
      debugBlocksPath,
      `translate-docs --debug: source blocks (headings outside fences; max ${BLOCK_SIZE} chars; paragraphs + whole fences/tables)\n${"=".repeat(72)}\n`,
      "utf8"
    );
    log("debug blocks log: " + path.relative(ROOT, debugBlocksPath));
  }

  const startTime = Date.now();
  log(
    "starting (docs: " +
      DOCS_TO_PROCESS.map((d) => d.sourceFile).join(", ") +
      "; locales: " +
      LANGUAGES.length +
      "; locale concurrency: " +
      CONCURRENCY +
      "; block concurrency: " +
      BLOCK_CONCURRENCY +
      (args.force ? "; force" : "") +
      (args.debug ? "; debug" : "") +
      ")"
  );

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

  const cleanupDocByKey = { ...docContents };
  for (const d of DOC_NAMES) {
    if (typeof cleanupDocByKey[d.key] !== "string") {
      const p = path.join(ROOT, d.sourceFile);
      if (fs.existsSync(p)) {
        cleanupDocByKey[d.key] = fs.readFileSync(p, "utf8");
      }
    }
  }
  pruneStaleCacheEntries(cleanupDocByKey);

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

  for (const doc of DOCS_TO_PROCESS) {
    let docTokens = 0;
    let docCost = 0;
    let docElapsedSum = 0;
    for (const s of allStats) {
      const b = s.byDoc && s.byDoc[doc.key];
      if (!b) continue;
      docTokens += b.tokens;
      docCost += b.cost;
      docElapsedSum += b.elapsedMs || 0;
    }
    appendDocTranslationSummaryLine(doc.key, docTokens, docCost, docElapsedSum);
  }
  log(`appended doc summaries to ${TRANSLATIONS_SUMMARY_LOG}`);
  log(`session log file: ${path.relative(ROOT, logPath)}`);
  if (debugBlocksPath) {
    log(`debug blocks file: ${path.relative(ROOT, debugBlocksPath)}`);
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
