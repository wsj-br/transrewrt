/**
 * Fetch Arena (LMArena) text leaderboard scores from the official Hugging Face
 * dataset (CC-BY-4.0). Uses the `text` subset, `latest` split, `overall` category.
 *
 * Source: https://huggingface.co/datasets/lmarena-ai/leaderboard-dataset
 */

import { parquetReadObjects } from "hyparquet";

const ARENA_DATASET = "lmarena-ai/leaderboard-dataset";
const ARENA_SUBSET = "text";
const ARENA_CATEGORY = "overall";
const HF_TREE_URL = `https://huggingface.co/api/datasets/${ARENA_DATASET}/tree/main/${ARENA_SUBSET}`;
const HF_RESOLVE_BASE = `https://huggingface.co/datasets/${ARENA_DATASET}/resolve/main`;
export const ARENA_DATASET_URL = `https://huggingface.co/datasets/${ARENA_DATASET}`;
export const ARENA_LEADERBOARD = ARENA_SUBSET;

/**
 * @param {string} url
 * @param {{ timeoutMs?: number }} [opts]
 * @returns {Promise<ArrayBuffer>}
 */
async function fetchArrayBuffer(url, { timeoutMs = 120000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status} for ${url}: ${body.slice(0, 200)}`);
    }
    return await res.arrayBuffer();
  } finally {
    clearTimeout(timer);
  }
}

/**
 * @param {string} url
 * @param {{ timeoutMs?: number }} [opts]
 */
async function fetchJson(url, { timeoutMs = 30000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status} for ${url}: ${body.slice(0, 200)}`);
    }
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

/**
 * @param {unknown} listing
 * @returns {string} path relative to the dataset root (e.g. text/latest-00000-of-00001.parquet)
 */
function pickLatestParquetPath(listing) {
  const files = Array.isArray(listing) ? listing : [];
  const latest = files
    .map((row) => String(row?.path || ""))
    .filter((p) => /\/latest-\d+-of-\d+\.parquet$/i.test(p) || /^latest-\d+-of-\d+\.parquet$/i.test(p));
  if (!latest.length) {
    throw new Error(`no latest-*.parquet under ${ARENA_SUBSET}/ in ${ARENA_DATASET}`);
  }
  latest.sort();
  const chosen = latest[latest.length - 1];
  return chosen.includes("/") ? chosen : `${ARENA_SUBSET}/${chosen}`;
}

/**
 * @param {ArrayBuffer} buf
 */
function asyncBufferFromArrayBuffer(buf) {
  return {
    byteLength: buf.byteLength,
    slice: (start, end) => buf.slice(start, end),
  };
}

/**
 * Fetch the current text / overall Arena Score snapshot.
 * @returns {Promise<{
 *   models: Array<{ model: string, vendor: string, score: number, publishDate: string|null }>,
 *   fetched: boolean,
 *   error: string|null,
 *   leaderboard: string,
 *   snapshotDate: string|null,
 *   parquetPath: string|null,
 * }>}
 */
export async function fetchArenaTextLatestOverall() {
  try {
    const listing = await fetchJson(HF_TREE_URL, { timeoutMs: 30000 });
    const parquetPath = pickLatestParquetPath(listing);
    const parquetUrl = `${HF_RESOLVE_BASE}/${parquetPath}`;
    const buf = await fetchArrayBuffer(parquetUrl, { timeoutMs: 120000 });
    const rows = await parquetReadObjects({
      file: asyncBufferFromArrayBuffer(buf),
      columns: ["model_name", "organization", "rating", "category", "leaderboard_publish_date"],
    });

    /** @type {Array<{ model: string, vendor: string, score: number, publishDate: string|null }>} */
    const models = [];
    let snapshotDate = null;
    for (const row of rows || []) {
      if (String(row?.category || "").toLowerCase() !== ARENA_CATEGORY) continue;
      const model = String(row?.model_name || "").trim();
      const vendor = String(row?.organization || "").trim();
      const score = Number(row?.rating);
      if (!model || !Number.isFinite(score)) continue;
      const publishDate =
        typeof row?.leaderboard_publish_date === "string" && row.leaderboard_publish_date.trim()
          ? row.leaderboard_publish_date.trim().slice(0, 10)
          : null;
      if (publishDate && (!snapshotDate || publishDate > snapshotDate)) snapshotDate = publishDate;
      models.push({ model, vendor, score, publishDate });
    }

    return {
      models,
      fetched: Boolean(models.length),
      error: models.length ? null : "arena latest parquet had no overall-category rows",
      leaderboard: ARENA_LEADERBOARD,
      snapshotDate,
      parquetPath,
    };
  } catch (e) {
    return {
      models: [],
      fetched: false,
      error: e.message || String(e),
      leaderboard: ARENA_LEADERBOARD,
      snapshotDate: null,
      parquetPath: null,
    };
  }
}
