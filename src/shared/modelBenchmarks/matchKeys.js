/**
 * Id matching between provider catalogs, languagebench, Arena, and models.dev.
 * Exact keys come from ai-i18n-tools `src/core/model-match.ts`.
 * A stem key also drops route tags (`:batch`) and snapshot dates so
 * `deepseek-v4-flash-0731:batch` can use `DeepSeek-V4-Flash`.
 */

const ENGINE_PREFIXES = new Set([
  "openrouter",
  "openai",
  "anthropic",
  "google",
  "deepseek",
  "groq",
  "mistralai",
  "xai",
  "cerebras",
  "nvidia",
  "alibaba",
  "apifun",
  "apikeyfan",
  "local",
]);

/** languagebench BCP-47 codes for locales this app ships UI for. */
const UI_LOCALE_TO_BCP47 = {
  "en-GB": ["en"],
  ar: ["ar"],
  "zh-Hans": ["zh"],
  "zh-Hant": ["zh", "yue"],
  cs: ["cs"],
  nl: ["nl"],
  fr: ["fr"],
  de: ["de"],
  el: ["el"],
  hi: ["hi"],
  hu: ["hu"],
  it: ["it"],
  ja: ["ja"],
  ko: ["ko"],
  fa: ["fa"],
  pl: ["pl"],
  "pt-BR": ["pt"],
  ro: ["ro"],
  ru: ["ru"],
  sk: ["sk"],
  es: ["es"],
  sv: ["sv"],
  th: ["th"],
  tr: ["tr"],
  uk: ["uk"],
  vi: ["vi"],
};

/**
 * Benchmark id → catalog id tails when normalized keys still miss.
 * Keys are matched case-insensitively.
 */
const CURATED_BENCHMARK_TO_CATALOG = {
  "x-ai/grok-4.20": ["grok-4.20-0309-non-reasoning", "grok-4.20-0309-reasoning"],
  "x-ai/grok-4.20-0309": ["grok-4.20-0309-non-reasoning", "grok-4.20-0309-reasoning"],
  "deepseek/deepseek-v4-flash-20260423": ["deepseek-v4-flash"],
  "anthropic/claude-haiku-4.5": ["claude-haiku-4-5-20251001", "claude-haiku-4-5"],
  "google/gemini-3.1-flash-lite": ["gemini-3.1-flash-lite"],
  "google/gemini-3.1-pro-preview": ["gemini-3.1-pro-preview"],
};

const CHAT_BLOCK_FRAGMENTS = [
  "embedding",
  "embed-",
  "text-embedding",
  "whisper",
  "dall-e",
  "dalle",
  "tts-",
  "moderation",
  "rerank",
  "davinci",
  "babbage",
  "curie",
  "ada-002",
  "prompt-guard",
  "safeguard",
  "multi-agent",
  "gpt-image",
  "imagine-image",
  "imagine-video",
  "text-to-image",
  "text-to-video",
  "image-generation",
  "orpheus",
  "canopylabs/",
];

function stripEnginePrefix(id) {
  const s = String(id || "").trim();
  const slash = s.indexOf("/");
  if (slash <= 0) return s;
  const eng = s.slice(0, slash).toLowerCase();
  return ENGINE_PREFIXES.has(eng) ? s.slice(slash + 1) : s;
}

function normalizeMatchKey(raw) {
  let s = String(raw || "").toLowerCase().trim();
  if (!s) return "";
  s = s.replace(/^openrouter\//, "");
  s = s.replace(/^x-ai\//, "xai/");
  s = s.replace(/~/g, "");
  s = s.replace(/\s*\((?:x?high|max|low|medium|minimal|adaptive)\)\s*$/i, "");
  s = s
    .replace(/-(non-)?reasoning(-high|-low|-medium|-max|-minimal|-adaptive)?$/g, "")
    .replace(/-(high|low|medium|max|minimal|xhigh|preview|instant)(-\d{2}-\d{2})?$/g, "")
    .replace(/-preview(-\d{2}-\d{4})?$/g, "")
    .replace(/-\d{8}$/g, "")
    .replace(/-\d{6}$/g, "");
  s = s.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return s;
}

/** OpenRouter route tags. They price a route; they are not a different model. */
const ROUTE_SUFFIXES = new Set([
  "batch",
  "free",
  "extended",
  "nitro",
  "floor",
  "exacto",
  "online",
  "latest",
]);

/** MMDD snapshot suffix, so `-0731` drops and `-2507` (not a month) stays. */
function isMonthDay(digits) {
  if (!/^\d{4}$/.test(digits)) return false;
  const month = Number(digits.slice(0, 2));
  const day = Number(digits.slice(2));
  return month >= 1 && month <= 12 && day >= 1 && day <= 31;
}

/**
 * Fold a normalized match key onto the published model id.
 * Strips route tags and snapshot dates only. `v4-flash` does not become `v4-pro`,
 * and `v4.1-flash` does not become `v4-flash`.
 * @param {string} normalized
 * @returns {string}
 */
function stemMatchKey(normalized) {
  let s = String(normalized || "");
  let changed = true;
  while (s && changed) {
    changed = false;
    let next = s.replace(/-\d{4}-\d{2}-\d{2}$/, "");
    if (next !== s && next) {
      s = next;
      changed = true;
      continue;
    }
    next = s.replace(/-\d{8}$/, "");
    if (next !== s && next) {
      s = next;
      changed = true;
      continue;
    }
    next = s.replace(/-\d{6}$/, "");
    if (next !== s && next) {
      s = next;
      changed = true;
      continue;
    }
    const mmdd = s.match(/^(.*)-(\d{4})$/);
    if (mmdd && mmdd[1] && isMonthDay(mmdd[2])) {
      s = mmdd[1];
      changed = true;
      continue;
    }
    const route = s.match(/^(.*)-([a-z]+)$/);
    if (route && route[1] && ROUTE_SUFFIXES.has(route[2])) {
      s = route[1];
      changed = true;
    }
  }
  return s;
}

function addKey(keys, value) {
  const key = normalizeMatchKey(value);
  if (key) keys.add(key);
}

function keysForCatalogModel(provider, model) {
  const keys = new Set();
  addKey(keys, model.id);
  if (model.name) addKey(keys, model.name);
  addKey(keys, stripEnginePrefix(model.id));
  if (provider === "openrouter") {
    const tail = stripEnginePrefix(model.id);
    const innerSlash = tail.indexOf("/");
    if (innerSlash > 0) addKey(keys, tail.slice(innerSlash + 1));
  }
  return [...keys];
}

function keysForBenchmarkId(benchId) {
  const keys = new Set();
  addKey(keys, benchId);
  addKey(keys, stripEnginePrefix(benchId));
  const tail = stripEnginePrefix(benchId);
  const slash = tail.indexOf("/");
  if (slash > 0) addKey(keys, tail.slice(slash + 1));
  return [...keys];
}

function keysForArenaModel(row) {
  const keys = new Set();
  const stripped = String(row.model || "")
    .replace(/\s*\((?:x?high|max|low|medium|minimal|adaptive)\)\s*$/i, "")
    .trim();
  addKey(keys, row.model);
  addKey(keys, stripped);
  const vendor = String(row.vendor || "").toLowerCase();
  if (vendor && row.model) addKey(keys, `${vendor}/${row.model}`);
  if (vendor && stripped) addKey(keys, `${vendor}/${stripped}`);
  return [...keys];
}

function curatedCatalogKeys(benchId) {
  const curated =
    CURATED_BENCHMARK_TO_CATALOG[benchId] ??
    CURATED_BENCHMARK_TO_CATALOG[String(benchId || "").toLowerCase()];
  if (!curated) return [];
  return curated.flatMap((tail) => keysForBenchmarkId(tail));
}

/** True when the catalog row is a chat model a translation call can use. */
function isChatWorkflowModel(model) {
  const id = String(model.id || "").trim();
  const slash = id.lastIndexOf("/");
  const tail = (slash >= 0 ? id.slice(slash + 1) : id).toLowerCase();
  const name = String(model.name || "").toLowerCase();
  const hay = `${tail} ${name}`;
  if (CHAT_BLOCK_FRAGMENTS.some((fragment) => hay.includes(fragment))) return false;
  if (tail.startsWith("text-")) return false;
  if (/(^|\/|-)(image|video)(-|$)/.test(tail) && !/vision|multimodal/.test(hay)) return false;
  if (/(^|\/)compound(-mini)?$/.test(tail)) return false;
  if (/^gpt-5\.\d+(-\d+)?-pro(-\d{4}-\d{2}-\d{2})?$/.test(tail)) return false;
  return true;
}

/**
 * languagebench BCP-47 codes for the project's source and target locales.
 * Unknown locales use the primary subtag. An empty set falls back to `en`.
 * @param {readonly string[]} locales
 * @returns {string[]}
 */
function bcp47ForLocales(locales) {
  const codes = new Set();
  for (const locale of locales || []) {
    const trimmed = String(locale || "").trim();
    if (!trimmed) continue;
    const mapped = UI_LOCALE_TO_BCP47[trimmed];
    if (mapped) {
      for (const code of mapped) codes.add(code);
      continue;
    }
    const primary = (trimmed.split("-")[0] || "").toLowerCase();
    if (primary.length >= 2) codes.add(primary);
  }
  if (codes.size === 0) codes.add("en");
  return [...codes];
}

module.exports = {
  stripEnginePrefix,
  normalizeMatchKey,
  stemMatchKey,
  keysForCatalogModel,
  keysForBenchmarkId,
  keysForArenaModel,
  curatedCatalogKeys,
  isChatWorkflowModel,
  bcp47ForLocales,
};
