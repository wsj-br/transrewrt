/**
 * Dev-only skills catalog editor: serves static UI + JSON APIs.
 * Run: pnpm run dev:skills-editor (from repo root). Uses `process.env` only (e.g. export `OPENROUTER_API_KEY` in the same shell, or configure your tool to pass env vars into the Node process). Does not read `.env`. `OPENROUTER_API_KEY` is required for Test model and Translate missing; the model list uses the public OpenRouter /models catalog (same breadth as Settings when online).
 */

const path = require("path");
const fs = require("fs");
const https = require("https");
const { spawn } = require("child_process");
const express = require("express");

const ROOT = path.join(__dirname, "..", "..");

const {
  mergeKeys,
  getAllModels,
  resolveEngine,
  engineConfigured,
  OPENROUTER_BASE,
  listLlmEnvVarsPresent,
  ENV_KEY_BY_ENGINE,
  streamCompletion,
} = require("../../src/shared/llm/index.js");
const { OPENROUTER_PROVIDER } = require("../../src/shared/openRouterProviderRouting.js");
const { parseSkillsJson } = require("../../src/shared/skillsCatalog.js");

const REPO_SKILLS_PATH = path.join(ROOT, "easy-mode-config", "skills.json");
const UI_LANGUAGES_PATH = path.join(ROOT, "src", "renderer", "locales", "ui-languages.json");
const CONFIG_DEFAULT_PATH = path.join(ROOT, "src", "config-defaults", "config_default.json");
const DATA_SKILLS_PATH =
  process.env.SKILLS_EDITOR_DATA_SKILLS_PATH || path.join(ROOT, "data", "skills.json");

/** On-disk provider catalogs for the dev skills editor (repo root; gitignored). */
const PROVIDER_CATALOGS_DISK_CACHE_PATH = path.join(ROOT, "skills-editor-provider-catalogs.json");
const CATALOG_DISK_TTL_MS = 2 * 60 * 60 * 1000;

const FREE_MODEL_ID = "openrouter/openrouter/free";

/** Cloud engines for Easy-mode `model_ids` (no Ollama — end users pick local models in the app). */
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

function envKeyForEngine(engine) {
  return ENV_KEY_BY_ENGINE[engine] || "";
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
const HOST = process.env.SKILLS_EDITOR_HOST || "127.0.0.1";
const PORT = Number(process.env.SKILLS_EDITOR_PORT) || 8765;

/** URL shown in logs / opened in the default browser (0.0.0.0 is not a valid browser host). */
function publicEditorUrl() {
  const h =
    HOST === "0.0.0.0" || HOST === "::" || HOST === "[::]" ? "127.0.0.1" : HOST === "::1" ? "127.0.0.1" : HOST;
  return `http://${h}:${PORT}/`;
}

function openDefaultBrowser(url) {
  const skip = process.env.SKILLS_EDITOR_NO_OPEN;
  if (skip === "1" || skip === "true" || skip === "yes") return;
  /** Detached + unref so the browser launcher never keeps (or destabilizes) the Node event loop. */
  const launch = (file, args) => {
    try {
      const child = spawn(file, args, {
        detached: true,
        stdio: "ignore",
        windowsHide: true,
      });
      child.on("error", (err) => {
        console.warn("[skills-editor] Could not open browser:", err.message);
      });
      child.unref();
    } catch (err) {
      console.warn("[skills-editor] Could not open browser:", err.message);
    }
  };
  if (process.platform === "win32") {
    launch("cmd", ["/c", "start", "", url]);
  } else if (process.platform === "darwin") {
    launch("open", [url]);
  } else {
    launch("xdg-open", [url]);
  }
}

function readJsonFile(p) {
  try {
    const raw = fs.readFileSync(p, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function getSourceLocale() {
  const cfg = readJsonFile(CONFIG_DEFAULT_PATH);
  const s = cfg && typeof cfg.source_locale === "string" ? cfg.source_locale.trim() : "";
  return s || "en-GB";
}

function loadUiLanguages() {
  const arr = readJsonFile(UI_LANGUAGES_PATH);
  return Array.isArray(arr) ? arr : [];
}

function validateCatalog(obj) {
  const text = JSON.stringify(obj);
  return parseSkillsJson(text);
}

function atomicWriteUtf8(filePath, contents) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const tmp = `${filePath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmp, contents, "utf8");
  fs.renameSync(tmp, filePath);
}

function saveSkillsCatalog(catalog) {
  const validated = validateCatalog(catalog);
  if (!validated) {
    const err = new Error("Invalid skills catalog (expected version, skills array, etc.)");
    err.status = 400;
    throw err;
  }
  validated.updated_at = new Date().toISOString();
  const serialized = `${JSON.stringify(validated, null, 2)}\n`;
  atomicWriteUtf8(REPO_SKILLS_PATH, serialized);
  try {
    atomicWriteUtf8(DATA_SKILLS_PATH, serialized);
  } catch (e) {
    const err = new Error(
      `Saved repo catalog but failed to copy to data dir (${DATA_SKILLS_PATH}): ${e.message}`,
    );
    err.status = 500;
    err.dataMirrorError = true;
    throw err;
  }
  return validated;
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

/** Strip the routing prefix for picker labels (matches `modelHeaderDisplayId` in the app). */
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

/**
 * @param {string} urlStr
 * @param {Record<string, string>} headers
 * @returns {Promise<unknown>}
 */
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
    "X-Title": "Transrewrt skills-editor (dev)",
    "User-Agent":
      "Mozilla/5.0 (compatible; Transrewrt-skills-editor/1.0; +https://github.com/wsj-br/transrewrt)",
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
    console.warn("[skills-editor] fetch() for OpenRouter /models failed, retrying via https:", e.message);
    return fetchOpenRouterModelsJsonHttps(url, headers);
  }
}

/**
 * Full OpenRouter catalog for the dev UI (matches Settings → Models OpenRouter rows).
 * Uses GET /v1/models which works without an API key; optional Bearer for key-specific behaviour.
 * @param {Record<string, string>} keysMap
 * @returns {Promise<Array<{ id: string, displayId: string, name: string, top_provider?: string, pricing: { prompt: number, completion: number } }>>}
 */
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
  console.log(`[skills-editor] OpenRouter catalog: ${out.length} models`);
  return out;
}

/** @type {Map<string, Array<{ id: string, name?: string }>>} */
const engineCatalogCache = new Map();
/** @type {Array<{ id: string, name?: string }> | null} */
let openRouterCatalogCache = null;
/** @type {Array<{ id: string }> | null} */
let allModelsCache = null;
/** @type {Promise<Array<{ id: string }>> | null} */
let allModelsInFlight = null;
/** @type {Promise<void> | null} */
let providerCatalogDiskInitPromise = null;

function isEngineCatalogCached(engine) {
  return engineCatalogCache.has(engine);
}

function readCatalogDiskCacheFile() {
  try {
    if (!fs.existsSync(PROVIDER_CATALOGS_DISK_CACHE_PATH)) return null;
    const raw = fs.readFileSync(PROVIDER_CATALOGS_DISK_CACHE_PATH, "utf8");
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
    console.warn("[skills-editor] Could not read provider catalog cache file:", e.message);
    return null;
  }
}

function isCatalogDiskCacheFresh(lastUpdated) {
  return Date.now() - lastUpdated.getTime() < CATALOG_DISK_TTL_MS;
}

function hydrateEngineCatalogCacheFromDisk(catalogsByEngine) {
  engineCatalogCache.clear();
  openRouterCatalogCache = null;
  for (const { id: engine } of EASY_CLOUD_ENGINES) {
    const raw = catalogsByEngine[engine];
    const list = Array.isArray(raw) ? raw : [];
    engineCatalogCache.set(engine, list);
    if (engine === "openrouter" && list.length) openRouterCatalogCache = list;
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

function writeCatalogDiskCache(catalogsByEngine) {
  const lastUpdated = new Date().toISOString();
  const payload = { lastUpdated, catalogsByEngine };
  try {
    fs.writeFileSync(PROVIDER_CATALOGS_DISK_CACHE_PATH, JSON.stringify(payload, null, 2), "utf8");
    console.log(
      `[skills-editor] Wrote provider catalog cache (${PROVIDER_CATALOGS_DISK_CACHE_PATH}, ${lastUpdated})`,
    );
  } catch (e) {
    console.warn("[skills-editor] Could not write provider catalog cache file:", e.message);
  }
  return lastUpdated;
}

/**
 * @param {Record<string, string>} keysMap
 * @param {{ force?: boolean }} [opts]
 */
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

/**
 * Fetch one engine's catalog from provider APIs (no disk / session cache).
 * @param {string} engine
 * @param {Record<string, string>} keysMap
 */
async function fetchEngineCatalogFromProviders(engine, keysMap) {
  let list = [];
  if (engine === "openrouter") {
    try {
      list = await fetchOpenRouterPublicModelsList(keysMap);
    } catch (e) {
      console.warn("[skills-editor] OpenRouter public list failed:", e.message);
      const all = await getAllModelsCached(keysMap, { force: true });
      list = filterOpenRouterModels(all);
    }
    list = filterOpenRouterModels(list);
    openRouterCatalogCache = list;
  } else if (engineConfigured(engine, keysMap)) {
    const all = await getAllModelsCached(keysMap, { force: false });
    list = modelsForEngineFromCatalog(all, engine);
  }
  return list;
}

/**
 * Refresh every Easy cloud engine from APIs and persist to disk.
 * @param {Record<string, string>} keysMap
 */
async function refreshAllEngineCatalogsFromProviders(keysMap) {
  console.log("[skills-editor] Refreshing provider catalogs from APIs…");
  engineCatalogCache.clear();
  openRouterCatalogCache = null;
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
      console.warn(`[skills-editor] catalog refresh for ${engine}:`, e.message);
      list = [];
    }
    catalogsByEngine[engine] = list;
    engineCatalogCache.set(engine, list);
    console.log(`[skills-editor]   ${label || engine}: ${list.length} model(s)`);
  }
  writeCatalogDiskCache(catalogsByEngine);
  return catalogsByEngine;
}

/**
 * Load disk cache when fresh (< 2h); otherwise refresh from providers and write disk file.
 * @param {Record<string, string>} keysMap
 * @param {{ force?: boolean }} [opts]
 */
async function initProviderCatalogDiskCache(keysMap, opts = {}) {
  const force = Boolean(opts.force);
  if (!force) {
    const disk = readCatalogDiskCacheFile();
    if (disk && isCatalogDiskCacheFresh(disk.lastUpdated)) {
      hydrateEngineCatalogCacheFromDisk(disk.catalogsByEngine);
      const ageMin = Math.round((Date.now() - disk.lastUpdated.getTime()) / 60000);
      console.log(
        `[skills-editor] Provider catalogs loaded from disk cache (${disk.lastUpdatedISO}, ${ageMin} min old)`,
      );
      return;
    }
    if (disk) {
      console.log(
        `[skills-editor] Provider catalog disk cache expired (${disk.lastUpdatedISO}); refreshing…`,
      );
    }
  }
  await refreshAllEngineCatalogsFromProviders(keysMap);
}

/**
 * @param {Record<string, string>} keysMap
 * @param {{ force?: boolean }} [opts]
 */
function ensureProviderCatalogDiskCache(keysMap, opts = {}) {
  const force = Boolean(opts.force);
  if (force) {
    providerCatalogDiskInitPromise = initProviderCatalogDiskCache(keysMap, { force: true }).catch(
      (e) => {
        providerCatalogDiskInitPromise = null;
        throw e;
      },
    );
    return providerCatalogDiskInitPromise;
  }
  if (!providerCatalogDiskInitPromise) {
    providerCatalogDiskInitPromise = initProviderCatalogDiskCache(keysMap).catch((e) => {
      providerCatalogDiskInitPromise = null;
      throw e;
    });
  }
  return providerCatalogDiskInitPromise;
}

/**
 * Load (and cache) the model list for one Easy cloud engine. Uses in-memory + on-disk cache
 * (2h TTL at repo root); `force` refetches all providers and rewrites the disk file.
 * @param {string} engine
 * @param {Record<string, string>} keysMap
 * @param {{ force?: boolean }} [opts]
 */
async function loadEngineModelsCatalog(engine, keysMap, opts = {}) {
  const force = Boolean(opts.force);
  if (force) {
    await ensureProviderCatalogDiskCache(keysMap, { force: true });
    return engineCatalogCache.get(engine) || [];
  }

  await ensureProviderCatalogDiskCache(keysMap);
  if (engineCatalogCache.has(engine)) {
    return engineCatalogCache.get(engine);
  }

  const list = await fetchEngineCatalogFromProviders(engine, keysMap);
  engineCatalogCache.set(engine, list);
  writeCatalogDiskCache(collectEngineCatalogsFromMemory());
  return list;
}

async function openRouterChatNonStream({
  keysMap,
  canonicalModelId,
  messages,
  temperature = 0,
  max_tokens = 256,
}) {
  const { engine, innerModelId } = resolveEngine(canonicalModelId);
  if (engine !== "openrouter") {
    const err = new Error("Only OpenRouter models are supported");
    err.status = 400;
    throw err;
  }
  if (!engineConfigured("openrouter", keysMap)) {
    const err = new Error("OpenRouter API key is not configured (OPENROUTER_API_KEY)");
    err.status = 400;
    throw err;
  }
  const apiKey = (keysMap.openrouter_api_key || "").trim();
  const body = {
    model: innerModelId,
    messages,
    temperature,
    max_tokens,
    provider: OPENROUTER_PROVIDER,
    stream: false,
  };
  const t0 = Date.now();
  const res = await fetch(`${OPENROUTER_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
      "X-Title": "Transrewrt skills-editor (dev)",
    },
    body: JSON.stringify(body),
  });
  const latencyMs = Date.now() - t0;
  const errText = await res.text().catch(() => "");
  if (!res.ok) {
    let msg = `OpenRouter HTTP ${res.status}`;
    try {
      const j = JSON.parse(errText);
      if (j?.error?.message) msg = j.error.message;
    } catch {
      if (errText) msg = errText.slice(0, 500);
    }
    const err = new Error(msg);
    err.status = res.status;
    err.latencyMs = latencyMs;
    throw err;
  }
  let data;
  try {
    data = JSON.parse(errText);
  } catch {
    const err = new Error("Invalid JSON from OpenRouter");
    err.status = 502;
    err.latencyMs = latencyMs;
    throw err;
  }
  const content = data?.choices?.[0]?.message?.content;
  const text = typeof content === "string" ? content : "";
  return { text: text.trim(), latencyMs, raw: data };
}

/** @see dev/OpenRouter internet access for prompts.md */
async function openRouterChatWithWebSearch({
  keysMap,
  canonicalModelId,
  messages,
  temperature = 0.2,
  max_tokens = 4096,
}) {
  const { engine, innerModelId } = resolveEngine(canonicalModelId);
  if (engine !== "openrouter") {
    const err = new Error("Only OpenRouter models are supported");
    err.status = 400;
    throw err;
  }
  if (!engineConfigured("openrouter", keysMap)) {
    const err = new Error("OpenRouter API key is not configured (OPENROUTER_API_KEY)");
    err.status = 400;
    throw err;
  }
  const apiKey = (keysMap.openrouter_api_key || "").trim();
  const body = {
    model: innerModelId,
    messages,
    temperature,
    max_tokens,
    provider: OPENROUTER_PROVIDER,
    stream: false,
    tools: [{ type: "openrouter:web_search" }],
  };
  const t0 = Date.now();
  const res = await fetch(`${OPENROUTER_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
      "X-Title": "Transrewrt skills-editor (dev)",
    },
    body: JSON.stringify(body),
  });
  const latencyMs = Date.now() - t0;
  const errText = await res.text().catch(() => "");
  if (!res.ok) {
    let msg = `OpenRouter HTTP ${res.status}`;
    try {
      const j = JSON.parse(errText);
      if (j?.error?.message) msg = j.error.message;
    } catch {
      if (errText) msg = errText.slice(0, 500);
    }
    const err = new Error(msg);
    err.status = res.status;
    err.latencyMs = latencyMs;
    throw err;
  }
  let data;
  try {
    data = JSON.parse(errText);
  } catch {
    const err = new Error("Invalid JSON from OpenRouter");
    err.status = 502;
    err.latencyMs = latencyMs;
    throw err;
  }
  const content = data?.choices?.[0]?.message?.content;
  const text = typeof content === "string" ? content : "";
  return { text: text.trim(), latencyMs, raw: data };
}

const DIRECT_LLM_ENGINES = new Set([
  "openrouter",
  "openai",
  "anthropic",
  "google",
  "deepseek",
  "groq",
  "mistralai",
  "ollama",
  "xai",
  "cerebras",
]);

function canonicalForEngine(engine, raw) {
  const id = String(raw || "").trim();
  if (!id) return "";
  if (id.startsWith(`${engine}/`)) return id;
  const slash = id.indexOf("/");
  if (slash > 0) {
    const first = id.slice(0, slash).toLowerCase();
    if (DIRECT_LLM_ENGINES.has(first)) return id;
  }
  if (engine === "openrouter") {
    if (id.startsWith("openrouter/")) return id;
    if (slash <= 0) return id;
    return `openrouter/${id}`;
  }
  if (slash <= 0) return `${engine}/${id}`;
  return `${engine}/${id}`;
}

function parseJsonFromModelText(text) {
  const s = String(text || "")
    .replace(/```json\n?/gi, "")
    .replace(/```\n?/g, "")
    .trim();

  // Fast path: whole string is valid JSON
  try {
    return JSON.parse(s);
  } catch (_) {}

  // Slow path: model mixed reasoning text with the JSON object.
  // Walk forward trying each '{' as a start, paired with the last '}' working
  // backwards — handles preamble, postamble, and truncated reasoning text.
  const lastClose = s.lastIndexOf("}");
  if (lastClose < 0) throw new Error("No JSON object found in response");

  let start = s.indexOf("{");
  while (start >= 0 && start < lastClose) {
    try {
      return JSON.parse(s.slice(start, lastClose + 1));
    } catch (_) {
      start = s.indexOf("{", start + 1);
    }
  }
  throw new Error("No valid JSON object found in response");
}

async function prefetchEngineCatalogs(keysMap, emit) {
  /** @type {Record<string, Array<{ id: string, name?: string }>>} */
  const catalogsByEngine = {};
  /** @type {Record<string, Set<string>>} */
  const idSets = {};

  if (emit) {
    emit({ type: "log", message: "Loading model catalogs for all cloud providers…" });
  }
  await ensureProviderCatalogDiskCache(keysMap);

  for (const { id: engine, label } of EASY_CLOUD_ENGINES) {
    let list = [];
    try {
      const cached = isEngineCatalogCached(engine);
      if (engine === "openrouter" || engineConfigured(engine, keysMap)) {
        if (emit) {
          emit({
            type: "log",
            message: cached
              ? `Using cached ${label || engine} model list…`
              : engine === "openrouter"
                ? "Fetching OpenRouter model list…"
                : `Fetching ${label || engine} model list…`,
          });
        }
        list = await loadEngineModelsCatalog(engine, keysMap);
      } else if (emit) {
        emit({
          type: "log",
          message: `Skipping ${label || engine} catalog (no API key in environment).`,
        });
      }
    } catch (e) {
      console.warn(`[skills-editor] suggest: catalog for ${engine}:`, e.message);
      if (emit) {
        emit({ type: "log", message: `Failed to load ${label || engine}: ${e.message}`, error: true });
      }
      list = [];
    }
    catalogsByEngine[engine] = list;
    idSets[engine] = new Set(list.map((m) => m.id));
    if (emit) {
      emit({
        type: "log",
        message: `${label || engine}: ${list.length} model(s) loaded.`,
      });
    }
  }
  return { catalogsByEngine, idSets };
}

// --- AI Suggest: prompts and user-message assembly (edit together) ---

const TRANSREWRT_SUGGEST_CONTEXT = `Context:
- Transrewrt is an AI-powered text processing app available as a desktop (Windows/Linux) and self-hosted web app. It has three core modes: Translate (between languages, with auto-detect), Rewrite (restyle or improve text using presets like clarity, formal/informal, shorten/expand), and Transform (apply custom AI prompts for tasks like summarising, formatting, or extracting key points).
- It connects to AI providers (OpenRouter, OpenAI, Anthropic, Gemini, Ollama, and others) via API keys, with the active model selected per session. The Dashboard tracks usage and estimated cost, and History stores the full input/output of past operations.
- The primary user is a regular user for translations, reviews and transformations, and uses the app as part of broader text-processing workflows.
- Every Easy-mode skill runs through Transrewrt's chat-completions pipeline (system + user messages, streamed text output). Models must support that chat API on the provider — not legacy v1/completions-only endpoints, embeddings, speech, image generation, or rerankers.`;

const SUGGEST_CATALOG_CAP = 200;

const SUGGEST_SYSTEM = `You are an expert at matching LLM capabilities to product "skills" in Transrewrt (Easy mode presets).
Use web search to look up current model availability, benchmarks, performance, and pricing for any providers you are unsure about.
Once you have gathered enough information, your ENTIRE response MUST be ONLY the raw JSON object — no preamble, no explanation, no markdown, no commentary.
The response must start with { and end with }. Any text outside the JSON object will cause a parse failure.

Selection guidelines:
- For each provider, the model_id MUST be copied exactly from that provider's catalog "id" field in the user message. Do not invent, guess, or substitute ids from web search or memory.
- If a provider's catalog is empty or missing, omit that provider from suggestions (do not guess a model_id).
- Only suggest models that work with chat-style text generation (multi-turn messages in, assistant text out). Never pick completion-only, embedding, moderation, rerank, TTS, STT, or image-only models — they will fail at runtime with errors like "not a chat model" / "use v1/completions".
- Prefer mainstream chat/instruct models (e.g. GPT-4o/4.1, Claude Sonnet/Haiku, Gemini Flash/Pro, Llama/Mistral/Qwen chat variants). When unsure from web search, pick a well-known chat model from that provider's catalog list instead of an experimental or API-surface-specific id.
- For skills named or described as "fast", "quick", or "lightweight": prefer the highest-throughput, lowest-latency chat model at a reasonable cost.
- For skills named or described as "advanced", "quality", or "best": prefer high-capability chat models; avoid the most expensive tier unless clearly superior.
- For domain-specific skills (technical, legal, …): prefer chat models known for accuracy in that domain.`;

const SUGGEST_USER_SKILL_HEADER = "Skill to configure:";

const SUGGEST_USER_TASK =
  "Task: For each cloud provider below that has models in its catalog, suggest the single best model for this skill.";

const SUGGEST_USER_JSON_SHAPE =
  'Return JSON exactly in this shape:\n{"skill_id":"<id>","suggestions":{"openrouter":{"model_id":"openrouter/...","reason":"short"},"openai":{...},...}}';

const SUGGEST_USER_CATALOG_RULES = [
  'Each model_id MUST be an exact copy of an "id" from that provider\'s models array below.',
  "Do not use model names, slugs, or ids from web search unless they appear verbatim in that provider's list.",
  "Only choose ids from the lists below: they are already filtered to chat-compatible models for Transrewrt's translate/rewrite/transform workflow.",
  "Never suggest completion-only, embedding, audio, image, or rerank models (even if web search mentions them).",
  "Skip providers with an empty models array (shown: 0).",
]
  .map((line) => `- ${line}`)
  .join("\n");

const SUGGEST_USER_MODELS_HEADER =
  "Available models per provider (subset if list is large; only ids from these lists are valid):";

const SUGGEST_USER_OUTPUT_RULE =
  "IMPORTANT: Output ONLY the JSON object. Do not write anything before or after it.";

/** Tail segment after the last "/" in a canonical or display model id. */
function modelIdTail(id) {
  const s = String(id || "").trim();
  const i = s.lastIndexOf("/");
  return (i >= 0 ? s.slice(i + 1) : s).toLowerCase();
}

/**
 * Models Transrewrt can drive via multi-llm-ts chat completions (translate / rewrite / transform).
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
  ];
  if (block.some((s) => hay.includes(s))) return false;
  if (tail.startsWith("text-")) return false;
  // OpenAI completion-only GPT-5.x Pro endpoints (not v1/chat/completions).
  if (/^gpt-5\.\d+(-\d+)?-pro(-\d{4}-\d{2}-\d{2})?$/.test(tail)) return false;
  return true;
}

function compactCatalogForPrompt(models, engine) {
  const list = (Array.isArray(models) ? models : [])
    .filter(isTransrewrtWorkflowModel)
    .map((m) => ({ id: m.id, name: m.name || m.id }))
    .sort((a, b) => (a.name || a.id).localeCompare(b.name || b.id));
  const capped = list.slice(0, SUGGEST_CATALOG_CAP);
  return { engine, count: list.length, shown: capped.length, models: capped };
}

function buildSuggestUserMessage(skill, catalogsByEngine) {
  const engineSummaries = EASY_CLOUD_ENGINES.map((p) =>
    compactCatalogForPrompt(catalogsByEngine[p.id] || [], p.id),
  );
  const parts = [
    TRANSREWRT_SUGGEST_CONTEXT,
    "",
    SUGGEST_USER_SKILL_HEADER,
    `id: ${skill.id}`,
    `name: ${JSON.stringify(skill.name || "")}`,
    `description: ${JSON.stringify(skill.description || "")}`,
    `prompt_hint (behavior instructions appended to prompts): ${JSON.stringify(skill.prompt_hint || "")}`,
    "",
    SUGGEST_USER_TASK,
    SUGGEST_USER_JSON_SHAPE,
    "",
    `Provider keys (use these object keys): ${EASY_CLOUD_ENGINES.map((p) => p.id).join(", ")}`,
    "",
    "Catalog rules:",
    SUGGEST_USER_CATALOG_RULES,
    "",
    SUGGEST_USER_MODELS_HEADER,
    JSON.stringify(engineSummaries),
    "",
    SUGGEST_USER_OUTPUT_RULE,
  ];
  return parts.join("\n");
}

function normalizeSuggestResponse(parsed, skill, idSets) {
  const out = {};
  const rawSuggestions =
    parsed && parsed.suggestions && typeof parsed.suggestions === "object"
      ? parsed.suggestions
      : parsed && typeof parsed === "object"
        ? parsed
        : {};

  for (const { id: engine } of EASY_CLOUD_ENGINES) {
    const row = rawSuggestions[engine];
    if (!row || typeof row !== "object") continue;
    const rawId =
      typeof row.model_id === "string"
        ? row.model_id
        : typeof row.modelId === "string"
          ? row.modelId
          : "";
    const canonical = canonicalForEngine(engine, rawId);
    if (!canonical) continue;
    const catalogIds = idSets[engine];
    if (!catalogIds || !catalogIds.size || !catalogIds.has(canonical)) continue;
    if (!isTransrewrtWorkflowModel({ id: canonical })) continue;
    const reason =
      typeof row.reason === "string" && row.reason.trim() ? row.reason.trim().slice(0, 500) : "";
    out[engine] = {
      model_id: canonical,
      reason,
    };
  }
  return out;
}

async function suggestModelsForSkill({
  keysMap,
  modelId,
  skill,
  catalogsByEngine,
  idSets,
  useWebSearch = true,
}) {
  const userMsg = buildSuggestUserMessage(skill, catalogsByEngine);
  const messages = [
    { role: "system", content: SUGGEST_SYSTEM },
    { role: "user", content: userMsg },
  ];
  const callOpts = { keysMap, canonicalModelId: modelId, messages, temperature: 0.2, max_tokens: 4096 };
  const { text } = useWebSearch
    ? await openRouterChatWithWebSearch(callOpts)
    : await openRouterChatNonStream(callOpts);

  let parsed;
  try {
    parsed = parseJsonFromModelText(text);
  } catch {
    return { error: `Could not parse suggestion JSON for ${skill.id}: ${text.slice(0, 200)}` };
  }

  const suggestions = normalizeSuggestResponse(parsed, skill, idSets);
  if (!Object.keys(suggestions).length) {
    return { error: `No provider suggestions in model response for ${skill.id}` };
  }
  return { ok: true, suggestions };
}

async function suggestModelsForSkillCaught(params) {
  try {
    return await suggestModelsForSkill(params);
  } catch (e) {
    return { error: e.message || String(e) };
  }
}

async function suggestModelsForSkillWithFallback({
  keysMap,
  primaryModelId,
  fallbackModelId,
  skill,
  catalogsByEngine,
  idSets,
  emit,
}) {
  const base = { keysMap, skill, catalogsByEngine, idSets };
  let r = await suggestModelsForSkillCaught({ ...base, modelId: primaryModelId, useWebSearch: true });
  if (!r.error) return { r, usedFallback: false };

  const fb = String(fallbackModelId || "").trim();
  if (!fb.startsWith("openrouter/") || fb === primaryModelId) {
    return { r, usedFallback: false };
  }

  if (emit) {
    emit({
      type: "job",
      status: "retry",
      skillId: skill.id,
      primaryError: r.error,
    });
    emit({
      type: "log",
      message: `Retrying “${skill.id}” with fallback model (no web search)…`,
      error: true,
    });
  }

  // Fallback skips web search: faster and avoids mixed-content parse failures.
  const r2 = await suggestModelsForSkillCaught({ ...base, modelId: fb, useWebSearch: false });
  if (!r2.error) {
    return { r: r2, usedFallback: true, primaryError: r.error };
  }
  return {
    r: {
      error: `Primary failed (${r.error}); fallback failed (${r2.error || "unknown"})`,
    },
    usedFallback: true,
    primaryError: r.error,
  };
}

/**
 * @param {unknown} raw
 * @returns {string[] | null} null = no filter (all suggestable skills)
 */
function normalizeSuggestSkillIds(raw) {
  if (raw == null) return null;
  if (!Array.isArray(raw)) return [];
  const ids = raw
    .map((id) => (typeof id === "string" ? id.trim() : ""))
    .filter((id) => id && id !== "free-router");
  return [...new Set(ids)];
}

/**
 * @param {{ validated: object, primaryModelId: string, fallbackModelId: string, keysMap: object, skillIds?: string[] | null, resNdjson?: { write: (chunk: string) => void } }} p
 */
async function runSuggestModelsJobs({
  validated,
  primaryModelId,
  fallbackModelId,
  keysMap,
  skillIds = null,
  resNdjson,
}) {
  const suggestable = (validated.skills || []).filter(
    (s) => s && typeof s.id === "string" && s.id !== "free-router",
  );
  const skills =
    skillIds == null
      ? suggestable
      : suggestable.filter((s) => skillIds.includes(s.id));
  const errors = [];
  const results = {};

  const emit = (obj) => {
    if (resNdjson) resNdjson.write(`${JSON.stringify(obj)}\n`);
  };

  const { catalogsByEngine, idSets } = await prefetchEngineCatalogs(keysMap, emit);

  emit({
    type: "start",
    totalSkills: skills.length,
    suggestionModel: primaryModelId,
    suggestionFallback: fallbackModelId || null,
  });
  emit({
    type: "log",
    message:
      skillIds == null
        ? `Processing ${skills.length} skill(s) (skipping free-router).`
        : `Processing ${skills.length} selected skill(s).`,
  });

  const concurrency = 2;
  await runPool(skills, concurrency, async (skill) => {
    emit({ type: "job", status: "running", skillId: skill.id });
    emit({ type: "log", message: `Processing skill “${skill.id}”…` });
    emit({
      type: "log",
      message: `Calling OpenRouter (${primaryModelId}) with web search for “${skill.id}”…`,
    });
    const { r, usedFallback } = await suggestModelsForSkillWithFallback({
      keysMap,
      primaryModelId,
      fallbackModelId,
      skill,
      catalogsByEngine,
      idSets,
      emit,
    });
    if (r.error) {
      const msg = `${skill.id}: ${r.error}`;
      errors.push(msg);
      emit({ type: "log", message: `Error for “${skill.id}”: ${r.error}`, error: true });
      emit({
        type: "job",
        status: "error",
        skillId: skill.id,
        error: r.error,
      });
      return;
    }
    results[skill.id] = r.suggestions;
    const providerCount = r.suggestions ? Object.keys(r.suggestions).length : 0;
    emit({
      type: "log",
      message: `Received ${providerCount} provider suggestion(s) for “${skill.id}”.`,
    });
    emit({
      type: "job",
      status: "ok",
      skillId: skill.id,
      suggestions: r.suggestions,
      usedFallback: Boolean(usedFallback),
    });
  });

  return { results, errors, snapshot: buildModelIdsSnapshot(validated.skills) };
}

function buildModelIdsSnapshot(skills) {
  const snap = {};
  for (const skill of skills || []) {
    if (!skill || typeof skill.id !== "string") continue;
    const mids =
      skill.model_ids && typeof skill.model_ids === "object" ? skill.model_ids : {};
    snap[skill.id] = { ...mids };
  }
  return snap;
}

function pickLocaleString(map, key) {
  if (!map || typeof map !== "object") return "";
  const k = String(key || "").trim();
  if (!k) return "";
  if (typeof map[k] === "string" && map[k].trim()) return map[k];
  const lower = k.toLowerCase();
  for (const [code, value] of Object.entries(map)) {
    if (code.toLowerCase() === lower && typeof value === "string" && value.trim()) return value;
  }
  return "";
}

function isMissingTranslation(map, localeCode) {
  return !pickLocaleString(map, localeCode);
}

async function translateSkillLocale({
  keysMap,
  modelId,
  sourceLocale,
  skill,
  targetLocale,
  targetEnglishName,
}) {
  const needName = isMissingTranslation(skill.translated_name, targetLocale);
  const needDesc = isMissingTranslation(skill.translated_description, targetLocale);
  if (!needName && !needDesc) {
    return { skipped: true };
  }

  const jsonKeys = [needName ? "t_name" : null, needDesc ? "t_desc" : null].filter(Boolean).join(" and ");
  const system = `You translate short UI strings for a desktop app skill picker. Reply with ONLY a compact JSON object (no markdown fences) with keys: ${jsonKeys}. Values must be plain strings in the target language. Preserve meaning; stay concise like the source.`;

  const parts = [];
  parts.push(`Target locale code: ${targetLocale}`);
  if (targetEnglishName) parts.push(`Target language (English name): ${targetEnglishName}`);
  parts.push(`Source locale: ${sourceLocale}`);
  parts.push(`Skill id: ${skill.id}`);
  if (needName) parts.push(`Source name: ${JSON.stringify(skill.name || "")}`);
  if (needDesc) parts.push(`Source description: ${JSON.stringify(skill.description || "")}`);

  const userMsg = `${parts.join("\n")}\n\nReturn JSON only, e.g. {"t_name":"...","t_desc":"..."} — omit keys you were not asked for.`;

  const { text } = await openRouterChatNonStream({
    keysMap,
    canonicalModelId: modelId,
    messages: [
      { role: "system", content: system },
      { role: "user", content: userMsg },
    ],
    temperature: 0.2,
    max_tokens: 2048,
  });

  let parsed;
  try {
    const cleaned = text.replace(/^[\s`]*json\s*/i, "").replace(/```json\n?/gi, "").replace(/```\n?/g, "").trim();
    parsed = JSON.parse(cleaned);
  } catch {
    return { error: `Could not parse translation JSON for ${targetLocale}: ${text.slice(0, 200)}` };
  }

  const out = {};
  if (needName && typeof parsed.t_name === "string" && parsed.t_name.trim()) {
    out.t_name = parsed.t_name.trim();
  } else if (needName) {
    return { error: `Missing t_name in model response for ${targetLocale}` };
  }
  if (needDesc && typeof parsed.t_desc === "string" && parsed.t_desc.trim()) {
    out.t_desc = parsed.t_desc.trim();
  } else if (needDesc) {
    return { error: `Missing t_desc in model response for ${targetLocale}` };
  }
  return { ok: true, ...out };
}

async function translateSkillLocaleCaught(params) {
  try {
    return await translateSkillLocale(params);
  } catch (e) {
    return { error: e.message || String(e) };
  }
}

/**
 * Try primary OpenRouter model, then optional fallback if the first attempt fails.
 * @param {{ emit?: (o: object) => void, skill: object, targetLocale: string }} ctx
 */
async function translateSkillLocaleWithFallback({
  keysMap,
  primaryModelId,
  fallbackModelId,
  sourceLocale,
  skill,
  targetLocale,
  targetEnglishName,
  emit,
}) {
  const base = {
    keysMap,
    sourceLocale,
    skill,
    targetLocale,
    targetEnglishName,
  };
  let r = await translateSkillLocaleCaught({ ...base, modelId: primaryModelId });
  if (r.skipped) return { r, usedFallback: false };
  if (!r.error) return { r, usedFallback: false };

  const fb = String(fallbackModelId || "").trim();
  if (!fb.startsWith("openrouter/") || fb === primaryModelId) {
    return { r, usedFallback: false };
  }

  if (emit) {
    emit({
      type: "job",
      status: "retry",
      skillId: skill.id,
      locale: targetLocale,
      primaryError: r.error,
    });
  }

  const r2 = await translateSkillLocaleCaught({ ...base, modelId: fb });
  if (r2.skipped) {
    return { r, usedFallback: true };
  }
  if (!r2.error) {
    return { r: r2, usedFallback: true, primaryError: r.error };
  }
  return {
    r: {
      error: `Primary failed (${r.error}); fallback failed (${r2.error || "unknown"})`,
    },
    usedFallback: true,
    primaryError: r.error,
  };
}

async function runPool(items, concurrency, worker) {
  let i = 0;
  async function runner() {
    while (i < items.length) {
      const idx = i++;
      const item = items[idx];
      await worker(item, idx);
    }
  }
  const n = Math.min(concurrency, items.length || 1);
  await Promise.all(Array.from({ length: n }, () => runner()));
}

function mirrorSourceLocaleIntoMaps(skills, sourceLocale) {
  for (const skill of skills) {
    if (!skill || typeof skill !== "object") continue;
    if (!skill.translated_name || typeof skill.translated_name !== "object") skill.translated_name = {};
    if (!skill.translated_description || typeof skill.translated_description !== "object") {
      skill.translated_description = {};
    }
    skill.translated_name[sourceLocale] = skill.name || "";
    skill.translated_description[sourceLocale] = skill.description || "";
  }
}

function buildTranslateJobs(validated, sourceLocale, uiLangs) {
  const targets = uiLangs.filter((row) => row && row.code && row.code !== sourceLocale);
  const jobs = [];
  for (const skill of validated.skills) {
    if (!skill || typeof skill.id !== "string") continue;
    for (const row of targets) {
      const code = row.code;
      const needName = isMissingTranslation(skill.translated_name, code);
      const needDesc = isMissingTranslation(skill.translated_description, code);
      if (!needName && !needDesc) continue;
      jobs.push({
        skill,
        targetLocale: code,
        targetEnglishName: row.englishName || row.label || code,
        needName,
        needDesc,
      });
    }
  }
  return jobs;
}

/**
 * @param {object} p
 * @param {{ write: (chunk: string) => void }} [p.resNdjson] If set, writes NDJSON lines for progress (does not end response).
 * @returns {Promise<{ filled: number, errors: string[] }>}
 */
async function runTranslateMissingJobs({
  validated,
  primaryModelId,
  fallbackModelId,
  keysMap,
  sourceLocale,
  uiLangs,
  resNdjson,
}) {
  const jobs = buildTranslateJobs(validated, sourceLocale, uiLangs);
  const errors = [];
  let filled = 0;
  const concurrency = 4;

  const emit = (obj) => {
    if (resNdjson) resNdjson.write(`${JSON.stringify(obj)}\n`);
  };

  let missingSlots = 0;
  for (const j of jobs) {
    missingSlots += (j.needName ? 1 : 0) + (j.needDesc ? 1 : 0);
  }
  emit({ type: "start", totalJobs: jobs.length, missingSlots });

  await runPool(jobs, concurrency, async (job) => {
    const { r, usedFallback } = await translateSkillLocaleWithFallback({
      keysMap,
      primaryModelId,
      fallbackModelId,
      sourceLocale,
      skill: job.skill,
      targetLocale: job.targetLocale,
      targetEnglishName: job.targetEnglishName,
      emit,
    });
    if (r.skipped) {
      emit({
        type: "job",
        status: "skipped",
        skillId: job.skill.id,
        locale: job.targetLocale,
      });
      return;
    }
    if (r.error) {
      const msg = `${job.skill.id} / ${job.targetLocale}: ${r.error}`;
      errors.push(msg);
      emit({
        type: "job",
        status: "error",
        skillId: job.skill.id,
        locale: job.targetLocale,
        error: r.error,
      });
      return;
    }
    if (!job.skill.translated_name || typeof job.skill.translated_name !== "object") {
      job.skill.translated_name = {};
    }
    if (!job.skill.translated_description || typeof job.skill.translated_description !== "object") {
      job.skill.translated_description = {};
    }
    let nameDone = false;
    let descDone = false;
    if (r.t_name) {
      job.skill.translated_name[job.targetLocale] = r.t_name;
      filled++;
      nameDone = true;
    }
    if (r.t_desc) {
      job.skill.translated_description[job.targetLocale] = r.t_desc;
      filled++;
      descDone = true;
    }
    emit({
      type: "job",
      status: "ok",
      skillId: job.skill.id,
      locale: job.targetLocale,
      name: nameDone,
      desc: descDone,
      usedFallback: Boolean(usedFallback),
    });
  });

  mirrorSourceLocaleIntoMaps(validated.skills, sourceLocale);
  return { filled, errors };
}

const app = express();
app.use(express.json({ limit: "32mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/meta", (_req, res) => {
  const sourceLocale = getSourceLocale();
  res.json({
    sourceLocale,
    repoSkillsPath: path.relative(ROOT, REPO_SKILLS_PATH),
    dataSkillsPath: path.relative(ROOT, DATA_SKILLS_PATH),
    repoSkillsAbsolute: REPO_SKILLS_PATH,
    dataSkillsAbsolute: DATA_SKILLS_PATH,
  });
});

app.get("/api/ui-languages", (_req, res) => {
  res.json(loadUiLanguages());
});

app.get("/api/skills", (_req, res) => {
  try {
    const raw = fs.readFileSync(REPO_SKILLS_PATH, "utf8");
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      const hint = e.message || String(e);
      return res.status(400).json({
        error:
          "The skills catalog could not be loaded because the file is not valid JSON. " +
          "Open easy-mode-config/skills.json in your editor and fix the syntax—often a comma after the last item in a list, or a missing } or ]. " +
          `(Details: ${hint})`,
      });
    }
    if (!data || typeof data !== "object" || !Array.isArray(data.skills)) {
      return res.status(400).json({
        error:
          "The skills catalog file is valid JSON but is not in the shape this editor expects. " +
          "The root of the file should be one object with a property named \"skills\" whose value is an array of skill objects. " +
          "Compare with the stock easy-mode-config/skills.json in the repository if you are unsure.",
      });
    }
    res.json(data);
  } catch (e) {
    if (e.code === "ENOENT") {
      const rel = path.relative(ROOT, REPO_SKILLS_PATH).replace(/\\/g, "/");
      return res.status(404).json({
        error:
          "The skills catalog file was not found. " +
          `The editor reads ${rel} in your project copy. Restore that file (for example from version control) or run the project from the repository root.`,
      });
    }
    console.error("[skills-editor] GET /api/skills:", e);
    res.status(500).json({
      error:
        "Something went wrong while reading the skills catalog from disk. " +
        "Check that the file is not open in another program with a lock, and that you have permission to read it. If the problem continues, restart the skills editor server.",
    });
  }
});

app.put("/api/skills", (req, res) => {
  try {
    const saved = saveSkillsCatalog(req.body);
    res.json({ ok: true, catalog: saved });
  } catch (e) {
    const status = e.status || 500;
    res.status(status).json({ error: e.message || String(e), dataMirrorError: Boolean(e.dataMirrorError) });
  }
});

app.get("/api/providers", (_req, res) => {
  try {
    const keysMap = mergeKeys({}, process.env);
    const providers = EASY_CLOUD_ENGINES.map((p) => ({
      engine: p.id,
      label: p.label,
      configured: engineConfigured(p.id, keysMap),
      envKey: envKeyForEngine(p.id),
    }));
    res.json({ providers });
  } catch (e) {
    res.status(500).json({ error: e.message || String(e) });
  }
});

app.get("/api/models", async (req, res) => {
  try {
    const keysMap = mergeKeys({}, process.env);
    const engine = String(req.query.engine || "openrouter")
      .trim()
      .toLowerCase();
    const known = EASY_CLOUD_ENGINES.some((p) => p.id === engine);
    if (!known) {
      return res.status(400).json({ error: `Unknown engine "${engine}"` });
    }

    if (engine !== "openrouter" && !engineConfigured(engine, keysMap)) {
      const ek = envKeyForEngine(engine);
      return res.status(400).json({
        error: ek
          ? `No API key for ${engine} (set ${ek} in the environment to load the catalog). You can still type a model id manually.`
          : `Provider ${engine} is not configured.`,
      });
    }

    const force = String(req.query.force || "") === "1";
    const cached = !force && isEngineCatalogCached(engine);
    const data = await loadEngineModelsCatalog(engine, keysMap, { force });
    const source =
      engine === "openrouter"
        ? cached
          ? "openrouter_public_models_cached"
          : "openrouter_public_models"
        : cached
          ? "getAllModels_cached"
          : "getAllModels";
    res.json({ data, source, engine, cached });
  } catch (e) {
    res.status(500).json({ error: e.message || String(e) });
  }
});

app.post("/api/skills/test-model", async (req, res) => {
  const modelId = req.body && typeof req.body.modelId === "string" ? req.body.modelId.trim() : "";
  if (!modelId || !modelId.includes("/")) {
    return res.status(400).json({
      ok: false,
      error: "modelId must be a canonical id (e.g. openrouter/..., openai/gpt-4o)",
    });
  }
  try {
    const keysMap = mergeKeys({}, process.env);
    const { engine } = resolveEngine(modelId);
    if (!engineConfigured(engine, keysMap)) {
      const ek = envKeyForEngine(engine);
      return res.status(400).json({
        ok: false,
        error: ek
          ? `No API key for ${engine} (${ek} not set)`
          : `Provider ${engine} is not configured`,
      });
    }
    const t0 = Date.now();
    let preview = "";
    if (engine === "openrouter") {
      const { text, latencyMs } = await openRouterChatNonStream({
        keysMap,
        canonicalModelId: modelId,
        messages: [{ role: "user", content: "Reply with exactly: OK" }],
        temperature: 0,
        max_tokens: 8,
      });
      preview = text.slice(0, 200);
      return res.json({ ok: true, latencyMs, preview, wallMs: Date.now() - t0 });
    }
    await streamCompletion(
      modelId,
      [{ role: "user", content: "Reply with exactly: OK" }],
      { keysMap, temperature: 0 },
      {
        onText(chunk) {
          preview += chunk;
        },
      },
    );
    const latencyMs = Date.now() - t0;
    res.json({
      ok: true,
      latencyMs,
      preview: preview.trim().slice(0, 200),
      wallMs: Date.now() - t0,
    });
  } catch (e) {
    res.status(e.status && e.status >= 400 && e.status < 600 ? e.status : 500).json({
      ok: false,
      error: e.message || String(e),
      status: e.status,
      latencyMs: e.latencyMs,
    });
  }
});

app.post("/api/skills/translate-missing", async (req, res) => {
  const catalog = req.body && req.body.catalog ? req.body.catalog : null;
  const validated = validateCatalog(catalog);
  if (!validated) {
    return res.status(400).json({ error: "Invalid catalog in body" });
  }

  const bodyModelId =
    req.body && typeof req.body.modelId === "string" ? req.body.modelId.trim() : "";
  const fromCatalog =
    typeof validated.translation_model === "string" ? validated.translation_model.trim() : "";
  const primaryModelId = fromCatalog || bodyModelId;
  if (!primaryModelId.startsWith("openrouter/")) {
    return res.status(400).json({
      error: "catalog.translation_model must be an OpenRouter canonical id (openrouter/...)",
    });
  }

  const fallbackModelId =
    typeof validated.translation_model_fallback === "string"
      ? validated.translation_model_fallback.trim()
      : "";

  const sourceLocale = getSourceLocale();
  const uiLangs = loadUiLanguages();
  const keysMap = mergeKeys({}, process.env);
  if (!engineConfigured("openrouter", keysMap)) {
    return res.status(400).json({ error: "OPENROUTER_API_KEY is not set" });
  }

  const wantStream = String(req.query.stream || "") === "1";

  if (wantStream) {
    res.status(200);
    res.setHeader("Content-Type", "application/x-ndjson; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    if (typeof res.flushHeaders === "function") res.flushHeaders();

    let filled = 0;
    let errors = [];
    try {
      const result = await runTranslateMissingJobs({
        validated,
        primaryModelId,
        fallbackModelId,
        keysMap,
        sourceLocale,
        uiLangs,
        resNdjson: res,
      });
      filled = result.filled;
      errors = result.errors;
      const saved = saveSkillsCatalog(validated);
      res.write(
        `${JSON.stringify({
          type: "done",
          ok: true,
          filled,
          errors,
          catalog: saved,
        })}\n`,
      );
      res.end();
    } catch (e) {
      try {
        res.write(
          `${JSON.stringify({
            type: "done",
            ok: false,
            filled,
            errors: [...errors, e.message || String(e)],
            error: e.message || String(e),
            dataMirrorError: Boolean(e.dataMirrorError),
          })}\n`,
        );
      } catch {
        /* ignore */
      }
      res.end();
    }
    return;
  }

  let filled = 0;
  let errors = [];
  try {
    const result = await runTranslateMissingJobs({
      validated,
      primaryModelId,
      fallbackModelId,
      keysMap,
      sourceLocale,
      uiLangs,
      resNdjson: null,
    });
    filled = result.filled;
    errors = result.errors;
    const saved = saveSkillsCatalog(validated);
    res.json({
      ok: true,
      filled,
      errors,
      catalog: saved,
    });
  } catch (e) {
    const status = e.status || 500;
    res.status(status).json({
      ok: false,
      filled,
      errors: [...errors, e.message || String(e)],
      dataMirrorError: Boolean(e.dataMirrorError),
    });
  }
});

app.post("/api/skills/suggest-models", async (req, res) => {
  const catalog = req.body && req.body.catalog ? req.body.catalog : null;
  const validated = validateCatalog(catalog);
  if (!validated) {
    return res.status(400).json({ error: "Invalid catalog in body" });
  }

  const fromCatalog =
    typeof validated.suggestion_model === "string" ? validated.suggestion_model.trim() : "";
  const primaryModelId = fromCatalog;
  if (!primaryModelId.startsWith("openrouter/")) {
    return res.status(400).json({
      error: "catalog.suggestion_model must be an OpenRouter canonical id (openrouter/...)",
    });
  }

  const fallbackModelId =
    typeof validated.suggestion_model_fallback === "string"
      ? validated.suggestion_model_fallback.trim()
      : "";

  const keysMap = mergeKeys({}, process.env);
  if (!engineConfigured("openrouter", keysMap)) {
    return res.status(400).json({ error: "OPENROUTER_API_KEY is not set" });
  }

  const skillIdsFilter = normalizeSuggestSkillIds(req.body && req.body.skill_ids);
  if (skillIdsFilter && skillIdsFilter.length === 0) {
    return res.status(400).json({
      error: "skill_ids must include at least one skill (excluding free-router)",
    });
  }
  const suggestableIds = new Set(
    (validated.skills || [])
      .filter((s) => s && typeof s.id === "string" && s.id !== "free-router")
      .map((s) => s.id),
  );
  if (skillIdsFilter) {
    const unknown = skillIdsFilter.filter((id) => !suggestableIds.has(id));
    if (unknown.length) {
      return res.status(400).json({
        error: `Unknown or non-suggestable skill id(s): ${unknown.join(", ")}`,
      });
    }
  }

  const wantStream = String(req.query.stream || "") === "1";

  if (wantStream) {
    res.status(200);
    res.setHeader("Content-Type", "application/x-ndjson; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    if (typeof res.flushHeaders === "function") res.flushHeaders();

    let errors = [];
    let results = {};
    let snapshot = {};
    try {
      const out = await runSuggestModelsJobs({
        validated,
        primaryModelId,
        fallbackModelId,
        keysMap,
        skillIds: skillIdsFilter,
        resNdjson: res,
      });
      results = out.results;
      errors = out.errors;
      snapshot = out.snapshot;
      res.write(
        `${JSON.stringify({
          type: "done",
          ok: true,
          results,
          snapshot,
          errors,
        })}\n`,
      );
      res.end();
    } catch (e) {
      try {
        res.write(
          `${JSON.stringify({
            type: "done",
            ok: false,
            results,
            snapshot,
            errors: [...errors, e.message || String(e)],
            error: e.message || String(e),
          })}\n`,
        );
      } catch {
        /* ignore */
      }
      res.end();
    }
    return;
  }

  let errors = [];
  let results = {};
  let snapshot = {};
  try {
    const out = await runSuggestModelsJobs({
      validated,
      primaryModelId,
      fallbackModelId,
      keysMap,
      skillIds: skillIdsFilter,
      resNdjson: null,
    });
    results = out.results;
    errors = out.errors;
    snapshot = out.snapshot;
    res.json({
      ok: true,
      results,
      snapshot,
      errors,
    });
  } catch (e) {
    const status = e.status || 500;
    res.status(status).json({
      ok: false,
      results,
      snapshot,
      errors: [...errors, e.message || String(e)],
      error: e.message || String(e),
    });
  }
});

const publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir));

// Do not pass a listen callback: Express wires that same function to `error` via `once()`,
// so EADDRINUSE still runs "success" logs while the server never binds, then Node exits ~0.
const server = app.listen(PORT, HOST);
server.on("error", (err) => {
  console.error("[skills-editor] HTTP server failed to start:", err.message || String(err));
  if (err.code === "EADDRINUSE") {
    console.error(
      `[skills-editor] Port ${PORT} is already in use. Set SKILLS_EDITOR_PORT to another port or stop the other process.`,
    );
  }
  process.exit(1);
});
server.on("listening", () => {
  const url = publicEditorUrl();
  console.log(`[skills-editor] ${url}`);
  console.log(`[skills-editor] Repo catalog: ${REPO_SKILLS_PATH}`);
  console.log(`[skills-editor] Data mirror:  ${DATA_SKILLS_PATH}`);
  console.log(`[skills-editor] Provider catalog cache: ${PROVIDER_CATALOGS_DISK_CACHE_PATH} (TTL 2h)`);
  const keysMap = mergeKeys({}, process.env);
  ensureProviderCatalogDiskCache(keysMap).catch((e) => {
    console.warn("[skills-editor] Provider catalog cache init failed:", e.message || String(e));
  });
  const present = listLlmEnvVarsPresent();
  console.log(
    `[skills-editor] LLM env (non-empty): ${present.length ? present.join(", ") : "(none — set OPENROUTER_API_KEY for this Node process, e.g. same shell: $env:OPENROUTER_API_KEY on Windows)"}`,
  );
  console.log("[skills-editor] Press Ctrl+C to stop.");
  try {
    if (process.stdin.isTTY) process.stdin.resume();
  } catch {
    /* ignore */
  }
  setTimeout(() => openDefaultBrowser(url), 400);
});
