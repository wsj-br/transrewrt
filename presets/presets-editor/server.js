/**
 * Dev-only presets catalog editor: serves static UI + JSON APIs.
 * Run: pnpm run presets-editor (from repo root). Uses `process.env` only — export keys in the shell (or source `.env` before starting Node). Does not read `.env` itself. `OPENROUTER_API_KEY` is required for Test model and Translate missing; the model list uses the public OpenRouter /models catalog (same breadth as Settings when online).
 */

const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");
const express = require("express");

const ROOT = path.join(__dirname, "..", "..");

/** Server console output for the dev presets editor (repo root; gitignored). */
const LOG_FILE_PATH = path.join(ROOT, "presets-editor.log");
const LOG_FILE_MAX_BYTES = 2 * 1024 * 1024;

const sessionStartIso = new Date().toISOString();
let sessionErrorCount = 0;

function logFileTimestampSuffix(iso) {
  return String(iso || new Date().toISOString()).replace(/[:.]/g, "-");
}

function rotatedLogPathForSession(iso, attempt) {
  const suffix = logFileTimestampSuffix(iso);
  const name = attempt > 0 ? `presets-editor-${suffix}-${attempt}.log` : `presets-editor-${suffix}.log`;
  return path.join(ROOT, name);
}

/** Move the active log aside so each server run starts a fresh `presets-editor.log`. */
function rotateCurrentLogFile() {
  if (!fs.existsSync(LOG_FILE_PATH)) return null;
  let attempt = 0;
  let rotatedPath = rotatedLogPathForSession(sessionStartIso, attempt);
  while (fs.existsSync(rotatedPath)) {
    attempt += 1;
    rotatedPath = rotatedLogPathForSession(sessionStartIso, attempt);
  }
  fs.renameSync(LOG_FILE_PATH, rotatedPath);
  return rotatedPath;
}

function formatLogArg(arg) {
  if (arg instanceof Error) {
    return arg.stack || arg.message || String(arg);
  }
  if (typeof arg === "object" && arg !== null) {
    try {
      return JSON.stringify(arg);
    } catch {
      return String(arg);
    }
  }
  return String(arg);
}

function trimLogFileIfNeeded() {
  try {
    if (!fs.existsSync(LOG_FILE_PATH)) return;
    const stat = fs.statSync(LOG_FILE_PATH);
    if (stat.size <= LOG_FILE_MAX_BYTES) return;
    const raw = fs.readFileSync(LOG_FILE_PATH, "utf8");
    const keep = raw.slice(-Math.floor(LOG_FILE_MAX_BYTES * 0.75));
    fs.writeFileSync(
      LOG_FILE_PATH,
      `[presets-editor] Log truncated (${new Date().toISOString()})\n${keep}`,
      "utf8",
    );
  } catch (e) {
    process.stderr.write(`[presets-editor] Could not trim log file: ${e.message}\n`);
  }
}

function appendLogLine(level, args) {
  const msg = args.map(formatLogArg).join(" ");
  const line = `${new Date().toISOString()} [${level}] ${msg}\n`;
  if (level === "ERROR") sessionErrorCount += 1;
  try {
    trimLogFileIfNeeded();
    fs.appendFileSync(LOG_FILE_PATH, line, "utf8");
  } catch {
    /* ignore disk errors — console still prints */
  }
}

function initPresetsEditorLogFile() {
  try {
    const rotatedFrom = rotateCurrentLogFile();
    const bannerParts = [`--- presets-editor session ${sessionStartIso} (pid ${process.pid}) ---`];
    if (rotatedFrom) {
      bannerParts.push(`Rotated previous log: ${path.basename(rotatedFrom)}`);
    }
    fs.writeFileSync(LOG_FILE_PATH, `\n${bannerParts.join("\n")}\n`, "utf8");
  } catch {
    /* ignore */
  }
}

function installConsoleLogCapture() {
  const orig = {
    log: console.log.bind(console),
    warn: console.warn.bind(console),
    error: console.error.bind(console),
  };
  console.log = (...args) => {
    appendLogLine("LOG", args);
    orig.log(...args);
  };
  console.warn = (...args) => {
    appendLogLine("WARN", args);
    orig.warn(...args);
  };
  console.error = (...args) => {
    appendLogLine("ERROR", args);
    orig.error(...args);
  };
}

initPresetsEditorLogFile();
installConsoleLogCapture();

const {
  mergeKeys,
  resolveEngine,
  engineConfigured,
  OPENROUTER_BASE,
  listLlmEnvVarsPresent,
  ENV_KEY_BY_ENGINE,
  streamCompletion,
} = require("../../src/shared/llm/index.js");
const { OPENROUTER_PROVIDER } = require("../../src/shared/openRouterProviderRouting.js");
const {
  isOpenRouterLatestAlias,
} = require("../../src/shared/openRouterLatestAlias.js");
const {
  ensureOpenRouterDiskCache,
  defaultCachePath,
  OPENROUTER_DISK_TTL_MS,
  stripOpenRouterPathPart,
  resolveEndpointsQueryPath,
} = require("./openRouterDiskCache.js");
const {
  runTranslatePresetsBenchmark,
  normalizeSampleText,
  formatDurationMs,
  BENCHMARK_DEFAULT_SAMPLE_TEXT_PT,
  BENCHMARK_SOURCE_LANG,
  BENCHMARK_TARGET_LANG,
} = require("../presets-shared/translatePresetsBenchmark.js");
const {
  suggestPresetModels,
  loadPresetBenchmarks,
  presetsBenchmarkCachePath,
  rankEngineModels,
  normalizeSuggestion,
} = require("../presets-shared/suggestModels.js");
const {
  parsePresetsJson,
  bumpPatchVersion,
  serializePresetsCatalog,
} = require("../../src/shared/presetsCatalog.js");
const {
  EASY_CLOUD_ENGINES,
  configureProviderCatalog,
  ensureProviderCatalogDiskCache,
  loadEngineModelsCatalog,
  isEngineCatalogCached,
  getProviderCatalogIdSets,
} = require("../../src/shared/presetsProviderCatalog.js");

const REPO_PRESETS_PATH = path.join(ROOT, "easy-mode-config", "presets.json");
const UI_LANGUAGES_PATH = path.join(ROOT, "src", "renderer", "locales", "ui-languages.json");
const CONFIG_DEFAULT_PATH = path.join(ROOT, "src", "config-defaults", "config_default.json");
const PACKAGE_JSON_PATH = path.join(ROOT, "package.json");
const DATA_PRESETS_PATH =
  process.env.PRESETS_EDITOR_DATA_PRESETS_PATH || path.join(ROOT, "data", "presets.json");

/** On-disk provider catalogs for the dev presets editor (repo root; gitignored). */
const PROVIDER_CATALOGS_DISK_CACHE_PATH = path.join(ROOT, "presets-editor-provider-catalogs.json");
const OPENROUTER_DISK_CACHE_PATH = defaultCachePath(ROOT);
const BENCHMARK_SCORES_CACHE_PATH = presetsBenchmarkCachePath(ROOT);

/** Write one NDJSON record and flush so the browser stream updates promptly. */
function writeSuggestNdjson(res, obj) {
  if (!res || res.writableEnded) return false;
  try {
    res.write(`${JSON.stringify(obj)}\n`);
    if (typeof res.flush === "function") res.flush();
    return true;
  } catch {
    return false;
  }
}

configureProviderCatalog({
  cachePath: PROVIDER_CATALOGS_DISK_CACHE_PATH,
  logLabel: "presets-editor",
});

function envKeyForEngine(engine) {
  return ENV_KEY_BY_ENGINE[engine] || "";
}

const HOST = process.env.PRESETS_EDITOR_HOST || "127.0.0.1";
const PORT = Number(process.env.PRESETS_EDITOR_PORT) || 8765;

/** URL shown in logs / opened in the default browser (0.0.0.0 is not a valid browser host). */
function publicEditorUrl() {
  const h =
    HOST === "0.0.0.0" || HOST === "::" || HOST === "[::]" ? "127.0.0.1" : HOST === "::1" ? "127.0.0.1" : HOST;
  return `http://${h}:${PORT}/`;
}

function openDefaultBrowser(url) {
  const skip = process.env.PRESETS_EDITOR_NO_OPEN;
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
        console.warn("[presets-editor] Could not open browser:", err.message);
      });
      child.unref();
    } catch (err) {
      console.warn("[presets-editor] Could not open browser:", err.message);
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

/** Transrewrt semver from root package.json (major.minor drive presets catalog bumps). */
function getAppVersion() {
  const pkg = readJsonFile(PACKAGE_JSON_PATH);
  const v = pkg && typeof pkg.version === "string" ? pkg.version.trim() : "";
  return v || "0.0.0";
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
  return parsePresetsJson(text);
}

function atomicWriteUtf8(filePath, contents) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const tmp = `${filePath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmp, contents, "utf8");
  fs.renameSync(tmp, filePath);
}

function savePresetsCatalog(catalog) {
  stripLegacySuggestionModels(catalog);
  const validated = validateCatalog(catalog);
  if (!validated) {
    const err = new Error("Invalid presets catalog (expected version, presets array, etc.)");
    err.status = 400;
    throw err;
  }
  validated.version = bumpPatchVersion(validated.version, getAppVersion());
  validated.updated_at = new Date().toISOString();
  const serialized = serializePresetsCatalog(validated);
  atomicWriteUtf8(REPO_PRESETS_PATH, serialized);
  try {
    atomicWriteUtf8(DATA_PRESETS_PATH, serialized);
  } catch (e) {
    const err = new Error(
      `Saved repo catalog but failed to copy to data dir (${DATA_PRESETS_PATH}): ${e.message}`,
    );
    err.status = 500;
    err.dataMirrorError = true;
    throw err;
  }
  return validated;
}

async function openRouterChatNonStream({
  keysMap,
  canonicalModelId,
  messages,
  temperature = 0,
  max_tokens = 256,
  signal,
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
      "X-Title": "Transrewrt presets-editor (dev)",
    },
    body: JSON.stringify(body),
    signal,
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
      console.warn(`[presets-editor] suggest: catalog for ${engine}:`, e.message);
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

const CATALOG_MODEL_FIELDS = [
  { key: "translation_model", label: "translation_model" },
  { key: "translation_model_fallback", label: "translation_model_fallback" },
];

function pruneInvalidCatalogModelFields(catalog, idSets) {
  if (!catalog || typeof catalog !== "object") return 0;
  let pruned = 0;
  for (const { key, label } of CATALOG_MODEL_FIELDS) {
    const raw = catalog[key];
    if (typeof raw !== "string" || !raw.trim()) continue;
    const id = raw.trim();
    const slash = id.indexOf("/");
    const engine = slash > 0 ? id.slice(0, slash).toLowerCase() : "";
    if (!engine) {
      console.warn(`[presets-editor] ${label}: invalid id (no engine prefix); clearing: ${id}`);
      delete catalog[key];
      pruned += 1;
      continue;
    }
    const set = idSets[engine];
    if (!set || set.size === 0) continue;
    if (set.has(id)) continue;
    console.warn(`[presets-editor] ${label} is not in the provider model catalog; clearing: ${id}`);
    delete catalog[key];
    pruned += 1;
  }
  if (pruned > 0) {
    console.log(
      `[presets-editor] Cleared ${pruned} top-level catalog model field(s) not in provider catalogs (save from editor to persist).`,
    );
  }
  return pruned;
}

function loadRepoPresetsCatalogFromDisk() {
  const raw = fs.readFileSync(REPO_PRESETS_PATH, "utf8");
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    const hint = e.message || String(e);
    const err = new Error(
      "The presets catalog could not be loaded because the file is not valid JSON. " +
        "Open easy-mode-config/presets.json in your editor and fix the syntax—often a comma after the last item in a list, or a missing } or ]. " +
        `(Details: ${hint})`,
    );
    err.status = 400;
    throw err;
  }
  stripLegacySuggestionModels(data);
  if (!data || typeof data !== "object" || !Array.isArray(data.presets)) {
    const err = new Error(
      "The presets catalog file is valid JSON but is not in the shape this editor expects. " +
        'The root of the file should be one object with a property named "presets" whose value is an array of preset objects. ' +
        "Compare with the stock easy-mode-config/presets.json in the repository if you are unsure.",
    );
    err.status = 400;
    throw err;
  }
  return data;
}

/** In-memory catalog after validation (served to the UI). */
let editorPresetsCatalog = null;
/** @type {Promise<{ pruned: number }> | null} */
let editorPresetsPreparePromise = null;
/** Serializes disk read + model validation (startup vs Reload must not overlap). */
let catalogRefreshTail = Promise.resolve();

function enqueueCatalogRefresh(task) {
  const run = catalogRefreshTail.then(task);
  catalogRefreshTail = run.catch(() => {});
  return run;
}

async function refreshEditorPresetsCatalog({ reload = false } = {}) {
  return enqueueCatalogRefresh(async () => {
    const keysMap = mergeKeys({}, process.env);
    if (reload) {
      console.log(
        "[presets-editor] Reloading easy-mode-config/presets.json from disk (provider catalog cache unchanged unless expired)…",
      );
    } else {
      console.log("[presets-editor] Validating top-level catalog models against provider catalogs…");
    }
    const { idSets } = await getProviderCatalogIdSets(keysMap, {
      cachePath: PROVIDER_CATALOGS_DISK_CACHE_PATH,
    });
    const catalog = JSON.parse(JSON.stringify(loadRepoPresetsCatalogFromDisk()));
    const pruned = pruneInvalidCatalogModelFields(catalog, idSets);
    editorPresetsCatalog = catalog;
    return { pruned };
  });
}

function ensureEditorPresetsPrepared() {
  if (!editorPresetsPreparePromise) {
    editorPresetsPreparePromise = refreshEditorPresetsCatalog({ reload: false }).catch((e) => {
      editorPresetsPreparePromise = null;
      console.warn("[presets-editor] Could not validate catalog models:", e.message || String(e));
      throw e;
    });
  }
  return editorPresetsPreparePromise;
}

// Deterministic suggest: rank provider catalogs. No LLM call.
function stripLegacySuggestionModels(catalog) {
  if (!catalog || typeof catalog !== "object") return;
  delete catalog.suggestion_model;
  delete catalog.suggestion_model_fallback;
}

function suggestionLocales() {
  const codes = loadUiLanguages()
    .map((row) => (row && row.code ? String(row.code).trim() : ""))
    .filter(Boolean);
  const source = getSourceLocale();
  if (source && !codes.includes(source)) codes.push(source);
  return codes;
}

function benchmarkWarnings(benchmarks) {
  const sources = benchmarks && benchmarks.sources ? benchmarks.sources : {};
  const out = [];
  if (sources.languagebench && sources.languagebench.error) {
    out.push(`languagebench: ${sources.languagebench.error}`);
  }
  if (sources.arena && sources.arena.error) out.push(`Arena: ${sources.arena.error}`);
  if (sources.modelsDev && sources.modelsDev.error) out.push(`models.dev: ${sources.modelsDev.error}`);
  return out;
}

function rankFields(row) {
  if (!row || !row.id) return null;
  return {
    id: row.id,
    rank: row.rank,
    index: row.index,
    chrf: row.chrf,
    arenaScore: row.arenaScore,
    blendedPerMTokens: row.blendedPerMTokens,
    frontierLayer: row.frontierLayer,
    dominatedBy: row.dominatedBy || null,
  };
}

function suggestionsFromRank(byEngine) {
  const suggestions = {};
  for (const [engine, picked] of Object.entries(byEngine || {})) {
    const primary = rankFields(picked && picked.primary);
    if (!primary) continue;
    const fallback = rankFields(picked.fallback);
    suggestions[engine] = {
      model_id: primary.id,
      primary,
      ...(fallback && fallback.id !== primary.id ? { fallback_id: fallback.id, fallback } : {}),
    };
  }
  return suggestions;
}

function throwIfAborted(signal) {
  if (signal?.aborted) {
    const err = new Error("Aborted");
    err.name = "AbortError";
    throw err;
  }
}

/**
 * @param {unknown} raw
 * @returns {string[] | null} null = no filter (all presets)
 */
function normalizeSuggestPresetIds(raw) {
  if (raw == null) return null;
  if (!Array.isArray(raw)) return [];
  const ids = raw
    .map((id) => (typeof id === "string" ? id.trim() : ""))
    .filter(Boolean);
  return [...new Set(ids)];
}

/**
 * @param {{ validated: object, presetIds?: string[] | null, refreshBenchmarks?: boolean, signal?: AbortSignal, resNdjson?: { write: (chunk: string) => void } }} p
 */
async function runSuggestModelsJobs({
  validated,
  presetIds = null,
  refreshBenchmarks = false,
  signal,
  resNdjson,
}) {
  const suggestable = (validated.presets || []).filter((s) => s && typeof s.id === "string" && s.id);
  const presets = presetIds == null ? suggestable : suggestable.filter((s) => presetIds.includes(s.id));
  const errors = [];
  const results = {};
  const emit = (obj) => {
    if (resNdjson) writeSuggestNdjson(resNdjson, obj);
  };

  const keysMap = mergeKeys({}, process.env);
  const { catalogsByEngine } = await prefetchEngineCatalogs(keysMap, emit);

  emit({
    type: "start",
    totalPresets: presets.length,
    refreshBenchmarks: Boolean(refreshBenchmarks),
  });
  emit({
    type: "log",
    message:
      presetIds == null
        ? `Processing ${presets.length} preset(s).`
        : `Processing ${presets.length} selected preset(s).`,
  });

  let benchmarks;
  try {
    emit({
      type: "log",
      message: refreshBenchmarks
        ? "Refreshing benchmark cache (languagebench + Arena Score + models.dev)…"
        : "Loading benchmark cache (languagebench + Arena Score + models.dev)…",
    });
    throwIfAborted(signal);
    benchmarks = await loadPresetBenchmarks(BENCHMARK_SCORES_CACHE_PATH, {
      refresh: Boolean(refreshBenchmarks),
    });
    const warnings = benchmarkWarnings(benchmarks);
    for (const warning of warnings) emit({ type: "log", message: warning, error: true });
    emit({ type: "log", message: "Benchmark cache ready. Ranking catalogs deterministically." });
  } catch (e) {
    if (e?.name === "AbortError" || signal?.aborted) {
      emit({ type: "log", message: "Suggestion run cancelled.", error: true });
      return { results, errors, snapshot: buildModelIdsSnapshot(validated.presets), cancelled: true };
    }
    const message = e.message || String(e);
    errors.push(message);
    emit({ type: "log", message: `Benchmark cache unavailable: ${message}`, error: true });
    return { results, errors, snapshot: buildModelIdsSnapshot(validated.presets), cancelled: false };
  }

  const locales = suggestionLocales();
  try {
    for (const preset of presets) {
      throwIfAborted(signal);
      emit({ type: "job", status: "running", presetId: preset.id });
      const policy = preset.suggestion && typeof preset.suggestion === "object" ? preset.suggestion : {};
      const cap = policy.profile === "free" ? "$0/1M" : policy.max_price == null || policy.max_price === "" ? "no cap" : `$${policy.max_price}/1M`;
      emit({
        type: "log",
        message: `Ranking “${preset.id}” (${policy.profile || "default"}, ${cap})…`,
      });
      const ranked = suggestPresetModels({
        preset,
        catalogsByEngine,
        benchmarks,
        locales,
      });
      const suggestions = suggestionsFromRank(ranked.byEngine);
      if (!Object.keys(suggestions).length) {
        const msg = `${preset.id}: no ranked model for the providers already on this preset`;
        errors.push(msg);
        emit({ type: "log", message: msg, error: true });
        emit({ type: "job", status: "error", presetId: preset.id, error: msg });
        continue;
      }
      results[preset.id] = suggestions;
      emit({
        type: "log",
        message: `Ranked ${Object.keys(suggestions).length} provider(s) for “${preset.id}”.`,
      });
      emit({
        type: "job",
        status: "ok",
        presetId: preset.id,
        suggestions,
        benchmarkProfile: ranked.suggestion.profile,
      });
    }
  } catch (e) {
    if (e?.name === "AbortError" || signal?.aborted) {
      emit({ type: "log", message: "Suggestion run cancelled.", error: true });
      return { results, errors, snapshot: buildModelIdsSnapshot(validated.presets), cancelled: true };
    }
    throw e;
  }

  emit({ type: "log", message: `All ${presets.length} preset job(s) finished.` });
  return { results, errors, snapshot: buildModelIdsSnapshot(validated.presets), cancelled: false };
}

function buildModelIdsSnapshot(presets) {
  const snap = {};
  for (const preset of presets || []) {
    if (!preset || typeof preset.id !== "string") continue;
    const mids =
      preset.model_ids && typeof preset.model_ids === "object" ? preset.model_ids : {};
    const fids =
      preset.fallback_ids && typeof preset.fallback_ids === "object" ? preset.fallback_ids : {};
    snap[preset.id] = {
      model_ids: { ...mids },
      fallback_ids: { ...fids },
    };
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

async function translatePresetLocale({
  keysMap,
  modelId,
  sourceLocale,
  preset,
  targetLocale,
  targetEnglishName,
}) {
  const needName = isMissingTranslation(preset.translated_name, targetLocale);
  const needDesc = isMissingTranslation(preset.translated_description, targetLocale);
  if (!needName && !needDesc) {
    return { skipped: true };
  }

  const jsonKeys = [needName ? "t_name" : null, needDesc ? "t_desc" : null].filter(Boolean).join(" and ");
  const system = `You translate short UI strings for a desktop app preset picker. Reply with ONLY a compact JSON object (no markdown fences) with keys: ${jsonKeys}. Values must be plain strings in the target language. Preserve meaning; stay concise like the source.`;

  const parts = [];
  parts.push(`Target locale code: ${targetLocale}`);
  if (targetEnglishName) parts.push(`Target language (English name): ${targetEnglishName}`);
  parts.push(`Source locale: ${sourceLocale}`);
  parts.push(`Preset id: ${preset.id}`);
  if (needName) parts.push(`Source name: ${JSON.stringify(preset.name || "")}`);
  if (needDesc) parts.push(`Source description: ${JSON.stringify(preset.description || "")}`);

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

async function translatePresetLocaleCaught(params) {
  try {
    return await translatePresetLocale(params);
  } catch (e) {
    return { error: e.message || String(e) };
  }
}

/**
 * Try primary OpenRouter model, then optional fallback if the first attempt fails.
 * @param {{ emit?: (o: object) => void, preset: object, targetLocale: string }} ctx
 */
async function translatePresetLocaleWithFallback({
  keysMap,
  primaryModelId,
  fallbackModelId,
  sourceLocale,
  preset,
  targetLocale,
  targetEnglishName,
  emit,
}) {
  const base = {
    keysMap,
    sourceLocale,
    preset,
    targetLocale,
    targetEnglishName,
  };
  let r = await translatePresetLocaleCaught({ ...base, modelId: primaryModelId });
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
      presetId: preset.id,
      locale: targetLocale,
      primaryError: r.error,
    });
  }

  const r2 = await translatePresetLocaleCaught({ ...base, modelId: fb });
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

async function runPool(items, concurrency, worker, opts = {}) {
  const signal = opts.signal;
  let i = 0;
  async function runner() {
    while (i < items.length) {
      if (signal?.aborted) {
        const err = new Error("Aborted");
        err.name = "AbortError";
        throw err;
      }
      const idx = i++;
      const item = items[idx];
      await worker(item, idx);
    }
  }
  const n = Math.min(concurrency, items.length || 1);
  await Promise.all(Array.from({ length: n }, () => runner()));
}

function mirrorSourceLocaleIntoMaps(presets, sourceLocale) {
  for (const preset of presets) {
    if (!preset || typeof preset !== "object") continue;
    if (!preset.translated_name || typeof preset.translated_name !== "object") preset.translated_name = {};
    if (!preset.translated_description || typeof preset.translated_description !== "object") {
      preset.translated_description = {};
    }
    preset.translated_name[sourceLocale] = preset.name || "";
    preset.translated_description[sourceLocale] = preset.description || "";
  }
}

function buildTranslateJobs(validated, sourceLocale, uiLangs) {
  const targets = uiLangs.filter((row) => row && row.code && row.code !== sourceLocale);
  const jobs = [];
  for (const preset of validated.presets) {
    if (!preset || typeof preset.id !== "string") continue;
    for (const row of targets) {
      const code = row.code;
      const needName = isMissingTranslation(preset.translated_name, code);
      const needDesc = isMissingTranslation(preset.translated_description, code);
      if (!needName && !needDesc) continue;
      jobs.push({
        preset,
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
    const { r, usedFallback } = await translatePresetLocaleWithFallback({
      keysMap,
      primaryModelId,
      fallbackModelId,
      sourceLocale,
      preset: job.preset,
      targetLocale: job.targetLocale,
      targetEnglishName: job.targetEnglishName,
      emit,
    });
    if (r.skipped) {
      emit({
        type: "job",
        status: "skipped",
        presetId: job.preset.id,
        locale: job.targetLocale,
      });
      return;
    }
    if (r.error) {
      const msg = `${job.preset.id} / ${job.targetLocale}: ${r.error}`;
      errors.push(msg);
      emit({
        type: "job",
        status: "error",
        presetId: job.preset.id,
        locale: job.targetLocale,
        error: r.error,
      });
      return;
    }
    if (!job.preset.translated_name || typeof job.preset.translated_name !== "object") {
      job.preset.translated_name = {};
    }
    if (!job.preset.translated_description || typeof job.preset.translated_description !== "object") {
      job.preset.translated_description = {};
    }
    let nameDone = false;
    let descDone = false;
    if (r.t_name) {
      job.preset.translated_name[job.targetLocale] = r.t_name;
      filled++;
      nameDone = true;
    }
    if (r.t_desc) {
      job.preset.translated_description[job.targetLocale] = r.t_desc;
      filled++;
      descDone = true;
    }
    emit({
      type: "job",
      status: "ok",
      presetId: job.preset.id,
      locale: job.targetLocale,
      name: nameDone,
      desc: descDone,
      usedFallback: Boolean(usedFallback),
    });
  });

  mirrorSourceLocaleIntoMaps(validated.presets, sourceLocale);
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
    repoPresetsPath: path.relative(ROOT, REPO_PRESETS_PATH),
    dataPresetsPath: path.relative(ROOT, DATA_PRESETS_PATH),
    repoPresetsAbsolute: REPO_PRESETS_PATH,
    dataPresetsAbsolute: DATA_PRESETS_PATH,
    logFilePath: path.relative(ROOT, LOG_FILE_PATH),
    logFileAbsolute: LOG_FILE_PATH,
    sessionStart: sessionStartIso,
    sessionErrorCount,
    hasSessionErrors: sessionErrorCount > 0,
  });
});

app.get("/api/logs", (_req, res) => {
  try {
    let content = "";
    if (fs.existsSync(LOG_FILE_PATH)) {
      content = fs.readFileSync(LOG_FILE_PATH, "utf8");
    }
    res.json({
      path: path.relative(ROOT, LOG_FILE_PATH),
      absolutePath: LOG_FILE_PATH,
      content,
      sessionStart: sessionStartIso,
      sessionErrorCount,
      hasSessionErrors: sessionErrorCount > 0,
    });
  } catch (e) {
    res.status(500).json({ error: e.message || String(e) });
  }
});

app.get("/api/ui-languages", (_req, res) => {
  res.json(loadUiLanguages());
});

app.get("/api/presets", async (req, res) => {
  try {
    const wantReload = String(req.query.reload || "") === "1";
    let pruned = 0;
    if (wantReload) {
      const result = await refreshEditorPresetsCatalog({ reload: true });
      pruned = result?.pruned ?? 0;
    } else {
      await ensureEditorPresetsPrepared();
    }
    if (wantReload) {
      res.setHeader("X-Editor-Presets-Models-Pruned", String(pruned));
    }
    if (editorPresetsCatalog) {
      return res.json(editorPresetsCatalog);
    }
    res.json(loadRepoPresetsCatalogFromDisk());
  } catch (e) {
    if (e.status === 400) {
      return res.status(400).json({ error: e.message || String(e) });
    }
    if (e.code === "ENOENT") {
      const rel = path.relative(ROOT, REPO_PRESETS_PATH).replace(/\\/g, "/");
      return res.status(404).json({
        error:
          "The presets catalog file was not found. " +
          `The editor reads ${rel} in your project copy. Restore that file (for example from version control) or run the project from the repository root.`,
      });
    }
    console.error("[presets-editor] GET /api/presets:", e);
    res.status(500).json({
      error:
        "Something went wrong while reading the presets catalog from disk. " +
        "Check that the file is not open in another program with a lock, and that you have permission to read it. If the problem continues, restart the presets editor server.",
    });
  }
});

app.put("/api/presets", (req, res) => {
  try {
    const saved = savePresetsCatalog(req.body);
    editorPresetsCatalog = saved;
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

    const force = String(req.query.force || "") === "1";

    if (engine === "openrouter") {
      const cache = await ensureOpenRouterDiskCache({
        root: ROOT,
        baseUrl: OPENROUTER_BASE,
        apiKey: keysMap.openrouter_api_key,
        force,
        cachePath: OPENROUTER_DISK_CACHE_PATH,
        log: (msg) => console.log(`[presets-editor] ${msg}`),
      });
      const ageMin = Math.round((Date.now() - new Date(cache.lastUpdated).getTime()) / 60000);
      return res.json({
        data: cache.models,
        source: force ? "openrouter_disk_cache_refresh" : "openrouter_disk_cache",
        engine,
        cached: !force,
        lastUpdated: cache.lastUpdated,
        cacheAgeMinutes: ageMin,
      });
    }

    if (!engineConfigured(engine, keysMap)) {
      const ek = envKeyForEngine(engine);
      return res.status(400).json({
        error: ek
          ? `No API key for ${engine} (set ${ek} in the environment to load the catalog). You can still type a model id manually.`
          : `Provider ${engine} is not configured.`,
      });
    }

    const cached = !force && isEngineCatalogCached(engine);
    const data = await loadEngineModelsCatalog(engine, keysMap, { force });
    const source = cached ? "getAllModels_cached" : "getAllModels";
    res.json({ data, source, engine, cached });
  } catch (e) {
    res.status(500).json({ error: e.message || String(e) });
  }
});

app.post("/api/presets/model-ranks", async (req, res) => {
  try {
    const engine = String((req.body && req.body.engine) || "")
      .trim()
      .toLowerCase();
    if (!EASY_CLOUD_ENGINES.some((p) => p.id === engine)) {
      return res.status(400).json({ error: `Unknown engine "${engine}"` });
    }
    const keysMap = mergeKeys({}, process.env);
    if (engine !== "openrouter" && !engineConfigured(engine, keysMap)) {
      return res.json({ ranks: [] });
    }
    let catalog = [];
    if (engine === "openrouter") {
      const cache = await ensureOpenRouterDiskCache({
        root: ROOT,
        baseUrl: OPENROUTER_BASE,
        apiKey: keysMap.openrouter_api_key,
        cachePath: OPENROUTER_DISK_CACHE_PATH,
        log: (msg) => console.log(`[presets-editor] ${msg}`),
      });
      catalog = cache.models || [];
    } else {
      catalog = await loadEngineModelsCatalog(engine, keysMap);
    }
    const benchmarks = await loadPresetBenchmarks(BENCHMARK_SCORES_CACHE_PATH, {});
    const suggestion = normalizeSuggestion({
      id: req.body && req.body.preset_id,
      suggestion: req.body && req.body.suggestion,
    });
    const ranked = rankEngineModels({
      provider: engine,
      catalog,
      benchmarks,
      suggestion,
      locales: suggestionLocales(),
    });
    res.json({
      ranks: ranked.map((row) => ({ id: row.id, rank: row.rank, index: row.index })),
    });
  } catch (e) {
    res.status(500).json({ error: e.message || String(e) });
  }
});

const PERF_TOP_LEVEL_KEYS = ["translation_model", "translation_model_fallback"];

function collectOpenRouterRefsForPerf(catalog) {
  const refs = [];
  for (const key of PERF_TOP_LEVEL_KEYS) {
    const raw = catalog[key];
    if (typeof raw === "string" && raw.startsWith("openrouter/")) {
      refs.push({ setting: key, modelId: raw });
    }
  }
  const presets = Array.isArray(catalog.presets) ? catalog.presets : [];
  for (const preset of presets) {
    if (!preset?.id) continue;
    const primary = preset?.model_ids?.openrouter;
    if (typeof primary === "string" && primary.startsWith("openrouter/")) {
      refs.push({ setting: preset.id, modelId: primary });
    }
    const fallback = preset?.fallback_ids?.openrouter;
    if (typeof fallback === "string" && fallback.startsWith("openrouter/")) {
      refs.push({ setting: `${preset.id}.fallback`, modelId: fallback });
    }
  }
  return refs;
}

async function loadOpenRouterEditorCache(force) {
  const keysMap = mergeKeys({}, process.env);
  return ensureOpenRouterDiskCache({
    root: ROOT,
    baseUrl: OPENROUTER_BASE,
    apiKey: keysMap.openrouter_api_key,
    force: Boolean(force),
    cachePath: OPENROUTER_DISK_CACHE_PATH,
    log: (msg) => console.log(`[presets-editor] ${msg}`),
  });
}

app.post("/api/models/openrouter-performance-summary", async (req, res) => {
  try {
    const rawPaths = Array.isArray(req.body?.paths) ? req.body.paths : [];
    const paths = [
      ...new Set(
        rawPaths
          .map((p) => stripOpenRouterPathPart(p))
          .filter((p) => typeof p === "string" && p.includes("/")),
      ),
    ];
    if (!paths.length) {
      return res.json({ stats: {} });
    }

    const force = Boolean(req.body?.force);
    const cache = await loadOpenRouterEditorCache(force);
    /** @type {Record<string, object | null>} */
    const stats = {};
    for (const pathPart of paths) {
      stats[pathPart] = Object.prototype.hasOwnProperty.call(cache.performanceByPath, pathPart)
        ? cache.performanceByPath[pathPart]
        : null;
    }

    res.json({ stats, lastUpdated: cache.lastUpdated });
  } catch (e) {
    console.error("[presets-editor] POST /api/models/openrouter-performance-summary:", e);
    res.status(500).json({ error: e.message || String(e) });
  }
});

app.get("/api/performance", async (req, res) => {
  try {
    await ensureEditorPresetsPrepared();
    const catalog = editorPresetsCatalog || loadRepoPresetsCatalogFromDisk();
    const refs = collectOpenRouterRefsForPerf(catalog);

    const force = String(req.query.force || "") === "1";
    const cache = await loadOpenRouterEditorCache(force);
    const openRouterCatalogRows = cache.catalogRows;

    function endpointsPathForModelId(modelId) {
      const pathPart = stripOpenRouterPathPart(modelId);
      const { queryPath } = resolveEndpointsQueryPath(pathPart, openRouterCatalogRows);
      const resolvedModel =
        isOpenRouterLatestAlias(pathPart) && queryPath !== pathPart ? queryPath : null;
      return { queryPath, resolvedModel };
    }

    const rows = refs.map((ref) => {
      const model = stripOpenRouterPathPart(ref.modelId);
      const { queryPath, resolvedModel } = endpointsPathForModelId(ref.modelId);
      const endpoints = cache.endpointsByQueryPath[queryPath] || [];
      return {
        setting: ref.setting,
        model,
        resolved_model: resolvedModel,
        endpoints,
      };
    });

    res.json({ generated_at: cache.lastUpdated, rows });
  } catch (e) {
    console.error("[presets-editor] GET /api/performance:", e);
    res.status(500).json({ error: e.message || String(e) });
  }
});

app.post("/api/presets/test-model", async (req, res) => {
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

function writeTranslateBenchmarkSse(res, event, data) {
  res.write(`event: ${event}\n`);
  res.write(`data: ${JSON.stringify(data)}\n\n`);
  if (typeof res.flush === "function") res.flush();
}

function formatBenchmarkCostUsd(costUsd, costKnown) {
  if (costUsd == null || Number.isNaN(Number(costUsd))) return "—";
  if (!costKnown && Number(costUsd) === 0) return "—";
  return "$" + Number(costUsd).toFixed(6);
}

function logTranslateBenchmarkRowComplete(ctx, row) {
  const { index, total, preset_id, slot, engine } = ctx || {};
  const enginePart = engine ? ` ${engine}` : "";
  const slotPart = slot ? ` ${slot}` : "";
  let suffix;
  if (row && row.ok) {
    const parts = [];
    if (row.duration_fmt) parts.push(row.duration_fmt);
    parts.push(formatBenchmarkCostUsd(row.cost_usd, row.cost_known));
    suffix = " — " + parts.join(", ");
  } else {
    suffix = " — failed";
  }
  console.log(
    `[presets-editor] translate-benchmark: ${index}/${total} (${preset_id}${enginePart}${slotPart})${suffix}`,
  );
}

/** @returns {{ engines: string[], skipUnconfigured: boolean } | { error: string }} */
function resolveTranslateBenchmarkProvider(providerRaw) {
  const knownIds = EASY_CLOUD_ENGINES.map((p) => p.id);
  const knownSet = new Set(knownIds);
  const provider =
    providerRaw == null || providerRaw === ""
      ? "openrouter"
      : String(providerRaw).trim();
  if (provider === "all") {
    return { engines: knownIds, skipUnconfigured: true };
  }
  if (!knownSet.has(provider)) {
    return {
      error:
        'provider must be "all" or one of: ' + knownIds.join(", "),
    };
  }
  return { engines: [provider], skipUnconfigured: false };
}

function logTranslateBenchmarkFinished(startedAt, finishedAt, result) {
  const wallMs = new Date(finishedAt).getTime() - new Date(startedAt).getTime();
  const wallFmt = formatDurationMs(wallMs);
  const costFmt = formatBenchmarkCostUsd(
    result.total_cost_usd,
    result.total_cost_known,
  );
  let msg = `[presets-editor] translate-benchmark: finished — ${wallFmt}, ${costFmt}`;
  if (result.total_cost_partial) msg += " (partial costs)";
  console.log(msg);
}

function buildTranslateBenchmarkResponsePayload(startedAt, finishedAt, result) {
  return {
    started_at: startedAt,
    finished_at: finishedAt,
    sample_text: result.sample_text,
    source_lang: result.source_lang,
    target_lang: result.target_lang,
    rows: result.rows,
    total_cost_usd: result.total_cost_usd,
    total_cost_known: result.total_cost_known,
    total_cost_partial: result.total_cost_partial,
  };
}

app.get("/api/presets/translate-benchmark/defaults", (_req, res) => {
  res.json({
    default_sample_text: BENCHMARK_DEFAULT_SAMPLE_TEXT_PT,
    source_lang: BENCHMARK_SOURCE_LANG,
    target_lang: BENCHMARK_TARGET_LANG,
  });
});

app.post("/api/presets/translate-benchmark", async (req, res) => {
  try {
    await ensureEditorPresetsPrepared();
    const catalog = editorPresetsCatalog || loadRepoPresetsCatalogFromDisk();
    const presets = Array.isArray(catalog?.presets) ? catalog.presets : [];
    const keysMap = mergeKeys({}, process.env);

    const providerResolved = resolveTranslateBenchmarkProvider(req.body?.provider);
    if (providerResolved.error) {
      return res.status(400).json({ error: providerResolved.error });
    }
    const { engines, skipUnconfigured } = providerResolved;

    if (!skipUnconfigured) {
      const engine = engines[0];
      if (!engineConfigured(engine, keysMap)) {
        const ek = envKeyForEngine(engine) || String(engine).toUpperCase() + "_API_KEY";
        return res.status(400).json({
          error:
            ek +
            " is not set. Export it in the shell before starting the presets editor.",
        });
      }
    } else if (!engines.some((eng) => engineConfigured(eng, keysMap))) {
      return res.status(400).json({
        error:
          "No configured providers to benchmark. Export at least one Easy-mode provider API key in the shell before starting the presets editor.",
      });
    }

    const bodyText =
      req.body && typeof req.body.sample_text === "string" ? req.body.sample_text : "";
    const sampleText = normalizeSampleText(bodyText);

    const presetIdsRaw =
      req.body && Array.isArray(req.body.preset_ids) ? req.body.preset_ids : null;
    if (!presetIdsRaw || !presetIdsRaw.length) {
      return res.status(400).json({ error: "preset_ids must be a non-empty array" });
    }
    const idSet = new Set(
      presetIdsRaw.map((id) => String(id).trim()).filter(Boolean),
    );
    const selectedPresets = presets.filter((p) => p && p.id && idSet.has(p.id));
    if (!selectedPresets.length) {
      return res.status(400).json({ error: "No matching presets for preset_ids" });
    }

    const includeFallback = req.body?.include_fallback !== false;

    const wantStream =
      (req.body && req.body.stream === true) ||
      String(req.query.stream || "") === "1";

    const startedAt = new Date().toISOString();
    const engineLabel =
      engines.length === 1 ? engines[0] : "all (" + engines.join(", ") + ")";
    console.log(
      "[presets-editor] translate-benchmark: starting…" +
        " provider=" +
        engineLabel +
        (includeFallback ? " (main + fallback)" : " (main only)"),
    );

    const hooks = {};
    const runOpts = {
      presets: selectedPresets,
      keysMap,
      sample_text: sampleText,
      include_fallback: includeFallback,
      engines,
      skip_unconfigured: skipUnconfigured,
    };

    if (wantStream) {
      res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache, no-transform");
      res.setHeader("Connection", "keep-alive");
      res.flushHeaders?.();

      hooks.onProgress = (p) => {
        writeTranslateBenchmarkSse(res, "progress", p);
      };
      hooks.onRow = (row, ctx) => {
        logTranslateBenchmarkRowComplete(ctx, row);
        writeTranslateBenchmarkSse(res, "row", row);
      };

      try {
        const result = await runTranslatePresetsBenchmark({
          ...runOpts,
          onProgress: hooks.onProgress,
          onRow: hooks.onRow,
        });
        const finishedAt = new Date().toISOString();
        logTranslateBenchmarkFinished(startedAt, finishedAt, result);
        writeTranslateBenchmarkSse(
          res,
          "done",
          buildTranslateBenchmarkResponsePayload(startedAt, finishedAt, result),
        );
        res.end();
      } catch (streamErr) {
        writeTranslateBenchmarkSse(res, "error", {
          error: streamErr.message || String(streamErr),
        });
        res.end();
      }
      return;
    }

    hooks.onRow = (row, ctx) => {
      logTranslateBenchmarkRowComplete(ctx, row);
    };

    const result = await runTranslatePresetsBenchmark({
      ...runOpts,
      onProgress: hooks.onProgress,
      onRow: hooks.onRow,
    });

    const finishedAt = new Date().toISOString();
    logTranslateBenchmarkFinished(startedAt, finishedAt, result);

    res.json(buildTranslateBenchmarkResponsePayload(startedAt, finishedAt, result));
  } catch (e) {
    console.error("[presets-editor] POST /api/presets/translate-benchmark:", e);
    const msg = e.message || String(e);
    const status =
      msg.includes("API_KEY") ||
      msg.includes("not set") ||
      msg.includes("No configured providers") ||
      msg.includes("No models to benchmark")
        ? 400
        : 500;
    res.status(status).json({ error: msg });
  }
});

app.post("/api/presets/translate-missing", async (req, res) => {
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
      const saved = savePresetsCatalog(validated);
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
    const saved = savePresetsCatalog(validated);
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

app.post("/api/presets/suggest-models", async (req, res) => {
  const catalog = req.body && req.body.catalog ? req.body.catalog : null;
  const validated = validateCatalog(catalog);
  if (!validated) {
    return res.status(400).json({ error: "Invalid catalog in body" });
  }

  const presetIdsFilter = normalizeSuggestPresetIds(req.body && req.body.preset_ids);
  if (presetIdsFilter && presetIdsFilter.length === 0) {
    return res.status(400).json({
      error: "preset_ids must include at least one preset",
    });
  }
  const refreshRaw = req.body && req.body.refresh_benchmarks;
  const refreshBenchmarks =
    refreshRaw === true || refreshRaw === 1 || refreshRaw === "1" || refreshRaw === "true";
  const suggestableIds = new Set(
    (validated.presets || [])
      .filter((s) => s && typeof s.id === "string" && s.id)
      .map((s) => s.id),
  );
  if (presetIdsFilter) {
    const unknown = presetIdsFilter.filter((id) => !suggestableIds.has(id));
    if (unknown.length) {
      return res.status(400).json({
        error: `Unknown or non-suggestable preset id(s): ${unknown.join(", ")}`,
      });
    }
  }

  const wantStream = String(req.query.stream || "") === "1";

  // Abort only when the *response* is closed before it finishes.
  // Do not listen to req "close"/"aborted" — those fire when the POST body is fully
  // read, which wrongly cancels the job immediately after catalogs load.
  const abortController = new AbortController();
  let responseFinished = false;
  const onResponseFinish = () => {
    responseFinished = true;
  };
  const onResponseClosedEarly = () => {
    if (!responseFinished && !abortController.signal.aborted) {
      abortController.abort();
    }
  };
  res.on("finish", onResponseFinish);
  res.on("close", onResponseClosedEarly);

  if (wantStream) {
    res.status(200);
    res.setHeader("Content-Type", "application/x-ndjson; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    if (typeof res.flushHeaders === "function") res.flushHeaders();
    if (res.socket && typeof res.socket.setNoDelay === "function") {
      try {
        res.socket.setNoDelay(true);
      } catch {
        /* ignore */
      }
    }

    let errors = [];
    let results = {};
    let snapshot = {};
    try {
      const out = await runSuggestModelsJobs({
        validated,
        presetIds: presetIdsFilter,
        refreshBenchmarks,
        signal: abortController.signal,
        resNdjson: res,
      });
      results = out.results;
      errors = out.errors;
      snapshot = out.snapshot;
      if (!res.writableEnded) {
        writeSuggestNdjson(res, {
          type: "done",
          ok: !out.cancelled,
          cancelled: Boolean(out.cancelled),
          results,
          snapshot,
          errors,
          refreshBenchmarks,
          ...(out.cancelled ? { error: "Cancelled" } : {}),
        });
        res.end();
      }
    } catch (e) {
      if (!res.writableEnded) {
        writeSuggestNdjson(res, {
          type: "done",
          ok: false,
          cancelled: e?.name === "AbortError",
          results,
          snapshot,
          errors: [...errors, e.message || String(e)],
          error: e.message || String(e),
        });
        res.end();
      }
    } finally {
      res.off("finish", onResponseFinish);
      res.off("close", onResponseClosedEarly);
    }
    return;
  }

  let errors = [];
  let results = {};
  let snapshot = {};
  try {
    const out = await runSuggestModelsJobs({
      validated,
      presetIds: presetIdsFilter,
      refreshBenchmarks,
      signal: abortController.signal,
      resNdjson: null,
    });
    results = out.results;
    errors = out.errors;
    snapshot = out.snapshot;
    if (out.cancelled) {
      return res.status(499).json({
        ok: false,
        cancelled: true,
        results,
        snapshot,
        errors,
        error: "Cancelled",
        refreshBenchmarks,
      });
    }
    res.json({
      ok: true,
      results,
      snapshot,
      errors,
      refreshBenchmarks,
    });
  } catch (e) {
    const status = e?.name === "AbortError" ? 499 : e.status || 500;
    res.status(status).json({
      ok: false,
      cancelled: e?.name === "AbortError",
      results,
      snapshot,
      errors: [...errors, e.message || String(e)],
      error: e.message || String(e),
    });
  } finally {
    res.off("finish", onResponseFinish);
    res.off("close", onResponseClosedEarly);
  }
});

const publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir));
/** Shared brand assets (same files as the main app). */
app.use("/images", express.static(path.join(ROOT, "images")));

// Do not pass a listen callback: Express wires that same function to `error` via `once()`,
// so EADDRINUSE still runs "success" logs while the server never binds, then Node exits ~0.
const server = app.listen(PORT, HOST);
server.on("error", (err) => {
  console.error("[presets-editor] HTTP server failed to start:", err.message || String(err));
  if (err.code === "EADDRINUSE") {
    console.error(
      `[presets-editor] Port ${PORT} is already in use. Set PRESETS_EDITOR_PORT to another port or stop the other process.`,
    );
  }
  process.exit(1);
});
server.on("listening", () => {
  const url = publicEditorUrl();
  console.log(`[presets-editor] ${url}`);
  console.log(`[presets-editor] Repo catalog: ${REPO_PRESETS_PATH}`);
  console.log(`[presets-editor] Data mirror:  ${DATA_PRESETS_PATH}`);
  console.log(`[presets-editor] Provider catalog cache: ${PROVIDER_CATALOGS_DISK_CACHE_PATH} (TTL 2h)`);
  console.log(
    `[presets-editor] OpenRouter models/pricing/performance cache: ${OPENROUTER_DISK_CACHE_PATH} (TTL ${OPENROUTER_DISK_TTL_MS / 3600000}h)`,
  );
  console.log(
    `[presets-editor] Benchmark scores cache: ${BENCHMARK_SCORES_CACHE_PATH} (TTL 7d; languagebench + Arena Score + models.dev)`,
  );
  loadOpenRouterEditorCache(false).catch((e) => {
    console.warn("[presets-editor] OpenRouter disk cache warm-up failed:", e.message || String(e));
  });
  console.log(`[presets-editor] Server log file: ${LOG_FILE_PATH}`);
  ensureEditorPresetsPrepared().catch((e) => {
    console.warn("[presets-editor] Catalog model validation failed:", e.message || String(e));
  });
  const present = listLlmEnvVarsPresent();
  console.log(
    `[presets-editor] LLM env (non-empty): ${present.length ? present.join(", ") : "(none — set OPENROUTER_API_KEY for this Node process, e.g. same shell: $env:OPENROUTER_API_KEY on Windows)"}`,
  );
  console.log("[presets-editor] Press Ctrl+C to stop.");
  try {
    if (process.stdin.isTTY) process.stdin.resume();
  } catch {
    /* ignore */
  }
  setTimeout(() => openDefaultBrowser(url), 400);
});
