/**
 * Disk cache for AI Suggest live-timing measurements (TTL 2h).
 * Avoids re-running translate timing for the same engine/model/sample within the window.
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const TIMING_CACHE_TTL_MS = 2 * 60 * 60 * 1000;

function defaultTimingCachePath(root) {
  return path.join(root, "presets-editor-timing-cache.json");
}

function sampleFingerprint(sampleText, promptHint) {
  const h = crypto.createHash("sha256");
  h.update(String(sampleText || ""));
  h.update("\0");
  h.update(String(promptHint || ""));
  return h.digest("hex").slice(0, 16);
}

function cacheKey(engine, modelId, fingerprint) {
  return `${engine}\0${modelId}\0${fingerprint}`;
}

function readCache(cachePath) {
  try {
    if (!fs.existsSync(cachePath)) return { entries: {} };
    const parsed = JSON.parse(fs.readFileSync(cachePath, "utf8"));
    if (!parsed || typeof parsed !== "object" || typeof parsed.entries !== "object") {
      return { entries: {} };
    }
    return { entries: parsed.entries || {} };
  } catch {
    return { entries: {} };
  }
}

function writeCache(cachePath, entries) {
  const dir = path.dirname(cachePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const tmp = `${cachePath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(
    tmp,
    JSON.stringify({ lastUpdated: new Date().toISOString(), entries }, null, 2),
    "utf8",
  );
  fs.renameSync(tmp, cachePath);
}

function isFresh(entry, now = Date.now()) {
  if (!entry || typeof entry.at !== "string") return false;
  const t = Date.parse(entry.at);
  if (!Number.isFinite(t)) return false;
  return now - t < TIMING_CACHE_TTL_MS;
}

/**
 * @param {{ cachePath: string, engine: string, modelId: string, sampleText: string, promptHint?: string | null }} opts
 * @returns {object | null} cached timing row fields or null
 */
function getCachedTiming(opts) {
  const fp = sampleFingerprint(opts.sampleText, opts.promptHint);
  const key = cacheKey(opts.engine, opts.modelId, fp);
  const { entries } = readCache(opts.cachePath);
  const entry = entries[key];
  if (!isFresh(entry)) return null;
  return {
    engine: opts.engine,
    model_id: opts.modelId,
    ok: Boolean(entry.ok),
    duration_ms: entry.duration_ms ?? null,
    duration_fmt: entry.duration_fmt ?? null,
    cost_usd: entry.cost_usd ?? null,
    cost_known: Boolean(entry.cost_known),
    prompt_tokens: entry.prompt_tokens ?? null,
    completion_tokens: entry.completion_tokens ?? null,
    error: entry.error ?? null,
    from_cache: true,
    cached_at: entry.at,
  };
}

/**
 * @param {{ cachePath: string, engine: string, modelId: string, sampleText: string, promptHint?: string | null, row: object }} opts
 */
function setCachedTiming(opts) {
  const fp = sampleFingerprint(opts.sampleText, opts.promptHint);
  const key = cacheKey(opts.engine, opts.modelId, fp);
  const { entries } = readCache(opts.cachePath);
  const row = opts.row || {};
  entries[key] = {
    at: new Date().toISOString(),
    ok: Boolean(row.ok),
    duration_ms: row.duration_ms ?? null,
    duration_fmt: row.duration_fmt ?? null,
    cost_usd: row.cost_usd ?? null,
    cost_known: Boolean(row.cost_known),
    prompt_tokens: row.prompt_tokens ?? null,
    completion_tokens: row.completion_tokens ?? null,
    error: row.error ?? null,
  };
  // Drop expired entries opportunistically
  const now = Date.now();
  for (const [k, v] of Object.entries(entries)) {
    if (!isFresh(v, now)) delete entries[k];
  }
  writeCache(opts.cachePath, entries);
}

module.exports = {
  TIMING_CACHE_TTL_MS,
  defaultTimingCachePath,
  sampleFingerprint,
  getCachedTiming,
  setCachedTiming,
};
