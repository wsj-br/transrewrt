/**
 * Provider model catalog fetch/cache for presets editor and presets-check.
 */

const fs = require("fs");
const https = require("https");
const path = require("path");

const { getAllModels, engineConfigured, OPENROUTER_BASE } = require("./llm/index.js");
const { canonicalForEngine } = require("./presetModelIdUtils.js");

const CATALOG_DISK_TTL_MS = 2 * 60 * 60 * 1000;
const FREE_MODEL_ID = "openrouter/openrouter/free";

/** Cloud engines for Easy-mode model_ids (no Local LLM). */
const EASY_CLOUD_ENGINES = [
  { id: "openrouter", label: "OpenRouter" },
  { id: "openai", label: "OpenAI" },
  { id: "anthropic", label: "Anthropic" },
  { id: "google", label: "Google Gemini" },
  { id: "deepseek", label: "DeepSeek" },
  { id: "groq", label: "Groq" },
  { id: "mistralai", label: "Mistral" },
  { id: "xai", label: "xAI" },
  { id: "cerebras", label: "Cerebras" },
];

/** @type {string | null} */
let defaultCachePath = null;
/** @type {string} */
let logLabel = "presets-catalog";

/** @type {Map<string, Array<{ id: string, name?: string }>>} */
const engineCatalogCache = new Map();
/** @type {Array<{ id: string }> | null} */
let allModelsCache = null;
/** @type {Promise<Array<{ id: string }>> | null} */
let allModelsInFlight = null;
/** @type {Promise<void> | null} */
let providerCatalogDiskInitPromise = null;

/**
 * @param {{ cachePath?: string, logLabel?: string }} opts
 */
function configureProviderCatalog(opts = {}) {
  if (opts.cachePath) defaultCachePath = opts.cachePath;
  if (opts.logLabel) logLabel = opts.logLabel;
}

function logMsg(level, ...args) {
  const fn = level === "warn" ? console.warn : console.log;
  fn(`[${logLabel}]`, ...args);
}

function resolveCachePath(opts = {}) {
  return opts.cachePath || defaultCachePath || path.join(process.cwd(), "presets-editor-provider-catalogs.json");
}

function modelsForEngineFromCatalog(allModels, engine) {
  const prefix = `${engine}/`;
  return (Array.isArray(allModels) ? allModels : [])
    .filter((m) => m && typeof m.id === "string" && m.id.startsWith(prefix))
    .map((m) => ({
      id: m.id,
      displayId: m.id.slice(prefix.length),
      name: m.name || m.id,
      pricing: m.pricing || { prompt: 0, completion: 0 },
    }));
}

function openRouterPickerDisplayId(canonicalId) {
  const id = String(canonicalId || "").trim();
  if (id.startsWith("openrouter/")) return id.slice("openrouter/".length);
  return id;
}

function openRouterCanonicalFromApiModelId(apiId) {
  const inner = String(apiId || "").trim();
  if (!inner) return "";
  return inner.startsWith("openrouter/") ? inner : `openrouter/${inner}`;
}

function topProviderStringFromRow(row) {
  const tp = row.top_provider;
  if (typeof tp === "string" && tp.trim()) return tp.trim();
  return "openrouter";
}

function filterOpenRouterModels(models) {
  const list = Array.isArray(models) ? models : [];
  const out = list.filter((m) => m && typeof m.id === "string" && m.id.startsWith("openrouter/"));
  const ids = new Set(out.map((m) => m.id));
  if (!ids.has(FREE_MODEL_ID)) {
    out.unshift({
      id: FREE_MODEL_ID,
      displayId: openRouterPickerDisplayId(FREE_MODEL_ID),
      name: "OpenRouter Free",
      top_provider: "openrouter",
      pricing: { prompt: 0, completion: 0 },
    });
  }
  return out.map((m) => ({
    ...m,
    displayId: m.displayId || openRouterPickerDisplayId(m.id),
  }));
}

function fetchOpenRouterModelsJsonHttps(urlStr, headers) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const opts = {
      hostname: u.hostname,
      port: u.port || 443,
      path: `${u.pathname}${u.search}`,
      method: "GET",
      headers,
    };
    const req = https.request(opts, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        const body = Buffer.concat(chunks).toString("utf8");
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`OpenRouter HTTPS ${res.statusCode}: ${body.slice(0, 300)}`));
          return;
        }
        try {
          resolve(JSON.parse(body));
        } catch (err) {
          reject(err);
        }
      });
    });
    req.on("error", reject);
    req.setTimeout(120000, () => {
      req.destroy();
      reject(new Error("OpenRouter /models request timeout"));
    });
    req.end();
  });
}

async function fetchOpenRouterModelsJson(keysMap) {
  const orKey = (keysMap.openrouter_api_key || "").trim();
  const headers = {
    Accept: "application/json",
    "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
    "X-Title": "Transrewrt presets-catalog",
    "User-Agent":
      "Mozilla/5.0 (compatible; Transrewrt-presets-catalog/1.0; +https://github.com/wsj-br/transrewrt)",
  };
  if (orKey) headers.Authorization = `Bearer ${orKey}`;
  const url = `${OPENROUTER_BASE}/models`;
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      const err = new Error(`OpenRouter GET /models failed: HTTP ${res.status} ${t.slice(0, 200)}`);
      err.status = res.status;
      throw err;
    }
    return await res.json();
  } catch (e) {
    logMsg("warn", "fetch() for OpenRouter /models failed, retrying via https:", e.message);
    return fetchOpenRouterModelsJsonHttps(url, headers);
  }
}

async function fetchOpenRouterPublicModelsList(keysMap) {
  const json = await fetchOpenRouterModelsJson(keysMap);
  const rows = Array.isArray(json.data) ? json.data : [];
  const byId = new Map();
  for (const row of rows) {
    if (!row || typeof row.id !== "string") continue;
    const canonical = openRouterCanonicalFromApiModelId(row.id);
    if (!canonical) continue;
    const p = parseFloat(row.pricing?.prompt);
    const c = parseFloat(row.pricing?.completion);
    byId.set(canonical, {
      id: canonical,
      displayId: openRouterPickerDisplayId(canonical),
      name: (typeof row.name === "string" && row.name.trim()) || openRouterPickerDisplayId(canonical),
      top_provider: topProviderStringFromRow(row),
      pricing: {
        prompt: Number.isFinite(p) ? p : 0,
        completion: Number.isFinite(c) ? c : 0,
      },
    });
  }
  const out = Array.from(byId.values());
  if (out.length === 0) {
    throw new Error("OpenRouter /models returned no models (empty or invalid `data` array)");
  }
  logMsg("log", `OpenRouter catalog: ${out.length} models`);
  return out;
}

function isEngineCatalogCached(engine) {
  return engineCatalogCache.has(engine);
}

function readCatalogDiskCacheFile(cachePath) {
  try {
    if (!fs.existsSync(cachePath)) return null;
    const raw = fs.readFileSync(cachePath, "utf8");
    const parsed = JSON.parse(raw);
    const lastUpdatedStr =
      typeof parsed.lastUpdated === "string" ? parsed.lastUpdated.trim() : "";
    const lastUpdated = lastUpdatedStr ? new Date(lastUpdatedStr) : null;
    if (!lastUpdated || Number.isNaN(lastUpdated.getTime())) return null;
    const catalogsByEngine =
      parsed.catalogsByEngine && typeof parsed.catalogsByEngine === "object"
        ? parsed.catalogsByEngine
        : null;
    if (!catalogsByEngine) return null;
    return { lastUpdated, lastUpdatedISO: lastUpdatedStr, catalogsByEngine };
  } catch (e) {
    logMsg("warn", "Could not read provider catalog cache file:", e.message);
    return null;
  }
}

function isCatalogDiskCacheFresh(lastUpdated) {
  return Date.now() - lastUpdated.getTime() < CATALOG_DISK_TTL_MS;
}

function hydrateEngineCatalogCacheFromDisk(catalogsByEngine) {
  engineCatalogCache.clear();
  for (const { id: engine } of EASY_CLOUD_ENGINES) {
    const raw = catalogsByEngine[engine];
    const list = Array.isArray(raw) ? raw : [];
    engineCatalogCache.set(engine, list);
  }
}

function collectEngineCatalogsFromMemory() {
  /** @type {Record<string, Array<{ id: string, name?: string }>>} */
  const catalogsByEngine = {};
  for (const { id: engine } of EASY_CLOUD_ENGINES) {
    catalogsByEngine[engine] = engineCatalogCache.get(engine) || [];
  }
  return catalogsByEngine;
}

function writeCatalogDiskCache(catalogsByEngine, cachePath) {
  const lastUpdated = new Date().toISOString();
  const payload = { lastUpdated, catalogsByEngine };
  try {
    const dir = path.dirname(cachePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(cachePath, JSON.stringify(payload, null, 2), "utf8");
    logMsg("log", `Wrote provider catalog cache (${cachePath}, ${lastUpdated})`);
  } catch (e) {
    logMsg("warn", "Could not write provider catalog cache file:", e.message);
  }
  return lastUpdated;
}

async function getAllModelsCached(keysMap, opts = {}) {
  const force = Boolean(opts.force);
  if (force) allModelsCache = null;
  if (!force && allModelsCache) return allModelsCache;
  if (!allModelsInFlight) {
    allModelsInFlight = getAllModels(keysMap)
      .then((list) => {
        allModelsCache = list;
        return list;
      })
      .finally(() => {
        allModelsInFlight = null;
      });
  }
  return allModelsInFlight;
}

async function fetchEngineCatalogFromProviders(engine, keysMap) {
  let list = [];
  if (engine === "openrouter") {
    try {
      list = await fetchOpenRouterPublicModelsList(keysMap);
    } catch (e) {
      logMsg("warn", "OpenRouter public list failed:", e.message);
      const all = await getAllModelsCached(keysMap, { force: true });
      list = filterOpenRouterModels(all);
    }
    list = filterOpenRouterModels(list);
  } else if (engineConfigured(engine, keysMap)) {
    const all = await getAllModelsCached(keysMap, { force: false });
    list = modelsForEngineFromCatalog(all, engine);
  }
  return list;
}

/**
 * @param {Record<string, string>} keysMap
 * @param {{ cachePath?: string }} [opts]
 */
async function refreshAllEngineCatalogsFromProviders(keysMap, opts = {}) {
  const cachePath = resolveCachePath(opts);
  logMsg("log", "Refreshing provider catalogs from APIs…");
  engineCatalogCache.clear();
  allModelsCache = null;
  allModelsInFlight = null;

  /** @type {Record<string, Array<{ id: string, name?: string }>>} */
  const catalogsByEngine = {};
  for (const { id: engine, label } of EASY_CLOUD_ENGINES) {
    let list = [];
    try {
      if (engine === "openrouter" || engineConfigured(engine, keysMap)) {
        list = await fetchEngineCatalogFromProviders(engine, keysMap);
      }
    } catch (e) {
      logMsg("warn", `catalog refresh for ${engine}:`, e.message);
      list = [];
    }
    catalogsByEngine[engine] = list;
    engineCatalogCache.set(engine, list);
    logMsg("log", `  ${label || engine}: ${list.length} model(s)`);
  }
  writeCatalogDiskCache(catalogsByEngine, cachePath);
  return catalogsByEngine;
}

async function initProviderCatalogDiskCache(keysMap, opts = {}) {
  const force = Boolean(opts.force);
  const cachePath = resolveCachePath(opts);
  if (!force) {
    const disk = readCatalogDiskCacheFile(cachePath);
    if (disk && isCatalogDiskCacheFresh(disk.lastUpdated)) {
      hydrateEngineCatalogCacheFromDisk(disk.catalogsByEngine);
      const ageMin = Math.round((Date.now() - disk.lastUpdated.getTime()) / 60000);
      logMsg("log", `Provider catalogs loaded from disk cache (${disk.lastUpdatedISO}, ${ageMin} min old)`);
      return;
    }
    if (disk) {
      logMsg("log", `Provider catalog disk cache expired (${disk.lastUpdatedISO}); refreshing…`);
    }
  }
  await refreshAllEngineCatalogsFromProviders(keysMap, opts);
}

function ensureProviderCatalogDiskCache(keysMap, opts = {}) {
  const force = Boolean(opts.force);
  if (force) {
    providerCatalogDiskInitPromise = initProviderCatalogDiskCache(keysMap, { ...opts, force: true }).catch(
      (e) => {
        providerCatalogDiskInitPromise = null;
        throw e;
      },
    );
    return providerCatalogDiskInitPromise;
  }
  if (!providerCatalogDiskInitPromise) {
    providerCatalogDiskInitPromise = initProviderCatalogDiskCache(keysMap, opts).catch((e) => {
      providerCatalogDiskInitPromise = null;
      throw e;
    });
  }
  return providerCatalogDiskInitPromise;
}

async function loadEngineModelsCatalog(engine, keysMap, opts = {}) {
  const force = Boolean(opts.force);
  if (force) {
    await ensureProviderCatalogDiskCache(keysMap, { ...opts, force: true });
    return engineCatalogCache.get(engine) || [];
  }

  await ensureProviderCatalogDiskCache(keysMap, opts);
  if (engineCatalogCache.has(engine)) {
    return engineCatalogCache.get(engine);
  }

  const list = await fetchEngineCatalogFromProviders(engine, keysMap);
  engineCatalogCache.set(engine, list);
  writeCatalogDiskCache(collectEngineCatalogsFromMemory(), resolveCachePath(opts));
  return list;
}

function modelIdTail(id) {
  const s = String(id || "").trim();
  const i = s.lastIndexOf("/");
  return (i >= 0 ? s.slice(i + 1) : s).toLowerCase();
}

/**
 * Models Transrewrt can drive via OpenAI-compatible chat completions.
 * @param {{ id?: string, displayId?: string, name?: string }} m
 */
function isTransrewrtWorkflowModel(m) {
  const tail = modelIdTail(m?.id || m?.displayId);
  const name = String(m?.name || "").toLowerCase();
  const hay = `${tail} ${name}`;
  const block = [
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
    // Not usable via chat-completions translate/rewrite/transform:
    "prompt-guard",
    "safeguard",
    "multi-agent",
    "gpt-image",
    "imagine-image",
    "imagine-video",
    "text-to-image",
    "text-to-video",
    "image-generation",
    "orpheus", // Groq TTS (terms-gated, not chat)
    "canopylabs/",
  ];
  if (block.some((s) => hay.includes(s))) return false;
  if (tail.startsWith("text-")) return false;
  // Trailing / mid-path image|video specialty models (xAI grok-imagine-*, etc.)
  if (/(^|\/|-)(image|video)(-|$)/.test(tail) && !/vision|multimodal/.test(hay)) {
    return false;
  }
  // Groq Compound agent endpoints are not plain chat completions for Easy-mode.
  if (/(^|\/)compound(-mini)?$/.test(tail)) return false;
  if (/^gpt-5\.\d+(-\d+)?-pro(-\d{4}-\d{2}-\d{2})?$/.test(tail)) return false;
  return true;
}

function buildIdSets(catalogsByEngine) {
  /** @type {Record<string, Set<string>>} */
  const idSets = {};
  for (const { id: engine } of EASY_CLOUD_ENGINES) {
    const list = catalogsByEngine[engine] || [];
    idSets[engine] = new Set(list.map((m) => m.id));
  }
  return idSets;
}

/**
 * Load provider catalogs from memory/disk cache (TTL); refetch APIs only when cache expired.
 * @param {Record<string, string>} keysMap
 * @param {{ cachePath?: string, force?: boolean }} [opts]
 */
async function getProviderCatalogIdSets(keysMap, opts = {}) {
  await ensureProviderCatalogDiskCache(keysMap, opts);
  const catalogsByEngine = collectEngineCatalogsFromMemory();
  return { catalogsByEngine, idSets: buildIdSets(catalogsByEngine) };
}

module.exports = {
  CATALOG_DISK_TTL_MS,
  EASY_CLOUD_ENGINES,
  FREE_MODEL_ID,
  configureProviderCatalog,
  modelsForEngineFromCatalog,
  filterOpenRouterModels,
  openRouterPickerDisplayId,
  openRouterCanonicalFromApiModelId,
  fetchOpenRouterPublicModelsList,
  isEngineCatalogCached,
  refreshAllEngineCatalogsFromProviders,
  ensureProviderCatalogDiskCache,
  loadEngineModelsCatalog,
  isTransrewrtWorkflowModel,
  buildIdSets,
  getProviderCatalogIdSets,
  canonicalForEngine,
};
