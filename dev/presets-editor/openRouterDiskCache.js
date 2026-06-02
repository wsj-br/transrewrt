/**
 * Dev presets-editor: disk cache for OpenRouter models, pricing, and endpoint performance.
 * File: presets-editor-openrouter-cache.json (repo root, gitignored). TTL: 6 hours.
 */

const fs = require("fs");
const path = require("path");

const {
  isOpenRouterLatestAlias,
  resolveOpenRouterLatestAlias,
} = require("../../src/shared/openRouterLatestAlias.js");
const { summarizeEndpointPerformance } = require("../../src/shared/openRouterEndpointPerformance.js");
const {
  FREE_MODEL_ID,
  isTransrewrtWorkflowModel,
  openRouterCanonicalFromApiModelId,
  openRouterPickerDisplayId,
} = require("../../src/shared/presetsProviderCatalog.js");

const OPENROUTER_DISK_TTL_MS = 6 * 60 * 60 * 1000;
const ENDPOINT_FETCH_CONCURRENCY = 16;

/** @type {object | null} */
let memoryCache = null;
/** @type {Promise<object> | null} */
let refreshInFlight = null;

function defaultCachePath(root) {
  return path.join(root, "presets-editor-openrouter-cache.json");
}

function topProviderStringFromRow(row) {
  const tp = row?.top_provider;
  if (typeof tp === "string" && tp.trim()) return tp.trim();
  return "openrouter";
}

function parseLastUpdated(iso) {
  if (typeof iso !== "string" || !iso.trim()) return null;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? null : d;
}

function isCacheFresh(lastUpdated) {
  const d = lastUpdated instanceof Date ? lastUpdated : parseLastUpdated(lastUpdated);
  if (!d) return false;
  return Date.now() - d.getTime() < OPENROUTER_DISK_TTL_MS;
}

function readDiskCache(cachePath) {
  try {
    if (!fs.existsSync(cachePath)) return null;
    const parsed = JSON.parse(fs.readFileSync(cachePath, "utf8"));
    const lastUpdated = parseLastUpdated(parsed?.lastUpdated);
    if (!lastUpdated) return null;
    if (!Array.isArray(parsed?.models)) return null;
    if (!Array.isArray(parsed?.catalogRows)) return null;
    return {
      lastUpdated: lastUpdated.toISOString(),
      models: parsed.models,
      catalogRows: parsed.catalogRows,
      performanceByPath:
        parsed.performanceByPath && typeof parsed.performanceByPath === "object"
          ? parsed.performanceByPath
          : {},
      endpointsByQueryPath:
        parsed.endpointsByQueryPath && typeof parsed.endpointsByQueryPath === "object"
          ? parsed.endpointsByQueryPath
          : {},
    };
  } catch {
    return null;
  }
}

function writeDiskCache(cachePath, payload) {
  const dir = path.dirname(cachePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const tmp = `${cachePath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(payload, null, 2), "utf8");
  fs.renameSync(tmp, cachePath);
}

function stripOpenRouterPathPart(modelIdOrPath) {
  const s = String(modelIdOrPath || "").trim();
  return s.startsWith("openrouter/") ? s.slice("openrouter/".length) : s;
}

function resolveEndpointsQueryPath(pathPart, catalogRows) {
  const normalized = stripOpenRouterPathPart(pathPart);
  if (isOpenRouterLatestAlias(normalized)) {
    const resolved = resolveOpenRouterLatestAlias(normalized, catalogRows);
    if (resolved) return { queryPath: resolved, pathPart: normalized };
  }
  return { queryPath: normalized, pathPart: normalized };
}

function slimCatalogRows(rows) {
  return rows
    .filter((row) => row && typeof row.id === "string")
    .map((row) => ({
      id: row.id,
      pricing: row.pricing,
      context_length: row.context_length,
      created: row.created,
    }));
}

function parseOpenRouterPickerPricing(raw) {
  if (!raw || typeof raw !== "object") return null;
  const p = parseFloat(raw.prompt);
  const c = parseFloat(raw.completion);
  const hasP = Number.isFinite(p);
  const hasC = Number.isFinite(c);
  if (!hasP && !hasC) return null;
  return { prompt: hasP ? p : null, completion: hasC ? c : null };
}

function buildPickerModels(rows) {
  /** @type {Map<string, object>} */
  const byId = new Map();
  for (const row of rows) {
    if (!row || typeof row.id !== "string") continue;
    const canonical = openRouterCanonicalFromApiModelId(row.id);
    if (!canonical) continue;
    const model = {
      id: canonical,
      displayId: openRouterPickerDisplayId(canonical),
      name:
        (typeof row.name === "string" && row.name.trim()) ||
        openRouterPickerDisplayId(canonical),
      top_provider: topProviderStringFromRow(row),
      pricing: parseOpenRouterPickerPricing(row.pricing),
    };
    if (!isTransrewrtWorkflowModel(model)) continue;
    byId.set(canonical, model);
  }
  if (!byId.has(FREE_MODEL_ID)) {
    byId.set(FREE_MODEL_ID, {
      id: FREE_MODEL_ID,
      displayId: openRouterPickerDisplayId(FREE_MODEL_ID),
      name: "OpenRouter Free",
      top_provider: "openrouter",
      pricing: { prompt: 0, completion: 0 },
    });
  }
  return Array.from(byId.values()).map((m) => ({
    ...m,
    displayId: m.displayId || openRouterPickerDisplayId(m.id),
  }));
}

async function fetchOpenRouterModelsJson(baseUrl, apiKey) {
  const headers = {
    Accept: "application/json",
    "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
    "X-Title": "Transrewrt presets-editor",
  };
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;
  const res = await fetch(`${baseUrl}/models`, { headers });
  if (!res.ok) {
    const t = await res.text().catch(() => "");
    throw new Error(`OpenRouter GET /models failed: HTTP ${res.status} ${t.slice(0, 200)}`);
  }
  const json = await res.json();
  const rows = Array.isArray(json.data) ? json.data : [];
  if (!rows.length) throw new Error("OpenRouter /models returned no models");
  return rows;
}

async function fetchEndpointsForQueryPath(baseUrl, apiKey, queryPath) {
  const slash = queryPath.indexOf("/");
  if (slash <= 0) return [];
  const author = encodeURIComponent(queryPath.slice(0, slash));
  const slug = encodeURIComponent(queryPath.slice(slash + 1));
  const headers = { Accept: "application/json" };
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;
  const res = await fetch(`${baseUrl}/models/${author}/${slug}/endpoints`, { headers });
  const json = await res.json().catch(() => ({}));
  return Array.isArray(json.data?.endpoints) ? json.data.endpoints : [];
}

async function mapWithConcurrency(items, limit, fn) {
  const results = new Array(items.length);
  let index = 0;
  async function worker() {
    while (index < items.length) {
      const i = index++;
      results[i] = await fn(items[i], i);
    }
  }
  const workers = Array.from({ length: Math.min(limit, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

/**
 * @param {{ root: string, baseUrl: string, apiKey?: string, log?: (msg: string) => void }} opts
 */
async function buildOpenRouterDiskCache(opts) {
  const log = typeof opts.log === "function" ? opts.log : () => {};
  const apiKey = (opts.apiKey || "").trim();
  const baseUrl = String(opts.baseUrl || "").replace(/\/+$/, "");

  log("Fetching OpenRouter model catalog…");
  const rows = await fetchOpenRouterModelsJson(baseUrl, apiKey);
  const catalogRows = slimCatalogRows(rows);
  const models = buildPickerModels(rows);

  /** @type {Map<string, string>} */
  const queryPathByDisplayId = new Map();
  for (const m of models) {
    const pathPart = m.displayId || openRouterPickerDisplayId(m.id);
    queryPathByDisplayId.set(pathPart, resolveEndpointsQueryPath(pathPart, catalogRows).queryPath);
  }

  const uniqueQueryPaths = [...new Set(queryPathByDisplayId.values())];
  log(`Fetching endpoint performance for ${uniqueQueryPaths.length} model(s)…`);

  /** @type {Record<string, object[]>} */
  const endpointsByQueryPath = {};
  let done = 0;
  await mapWithConcurrency(uniqueQueryPaths, ENDPOINT_FETCH_CONCURRENCY, async (queryPath) => {
    try {
      endpointsByQueryPath[queryPath] = await fetchEndpointsForQueryPath(baseUrl, apiKey, queryPath);
    } catch {
      endpointsByQueryPath[queryPath] = [];
    }
    done += 1;
    if (done % 25 === 0 || done === uniqueQueryPaths.length) {
      log(`  …endpoint data ${done}/${uniqueQueryPaths.length}`);
    }
  });

  /** @type {Record<string, object | null>} */
  const performanceByPath = {};
  for (const [pathPart, queryPath] of queryPathByDisplayId.entries()) {
    const endpoints = endpointsByQueryPath[queryPath] || [];
    performanceByPath[pathPart] = summarizeEndpointPerformance(endpoints);
  }

  const lastUpdated = new Date().toISOString();
  return {
    lastUpdated,
    models,
    catalogRows,
    performanceByPath,
    endpointsByQueryPath,
  };
}

/**
 * @param {{ root: string, baseUrl: string, apiKey?: string, force?: boolean, log?: (msg: string) => void, cachePath?: string }} opts
 */
async function ensureOpenRouterDiskCache(opts) {
  const root = opts.root || process.cwd();
  const cachePath = opts.cachePath || defaultCachePath(root);
  const force = Boolean(opts.force);

  if (!force && memoryCache && isCacheFresh(memoryCache.lastUpdated)) {
    return memoryCache;
  }

  if (!force) {
    const disk = readDiskCache(cachePath);
    if (disk && isCacheFresh(disk.lastUpdated)) {
      memoryCache = disk;
      return memoryCache;
    }
  }

  if (refreshInFlight) return refreshInFlight;

  refreshInFlight = buildOpenRouterDiskCache(opts)
    .then((built) => {
      writeDiskCache(cachePath, built);
      memoryCache = built;
      return memoryCache;
    })
    .finally(() => {
      refreshInFlight = null;
    });

  return refreshInFlight;
}

function getOpenRouterDiskCacheSync() {
  return memoryCache;
}

module.exports = {
  OPENROUTER_DISK_TTL_MS,
  defaultCachePath,
  isCacheFresh,
  ensureOpenRouterDiskCache,
  getOpenRouterDiskCacheSync,
  stripOpenRouterPathPart,
  resolveEndpointsQueryPath,
};
