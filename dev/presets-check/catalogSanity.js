/**
 * Detect truncated or empty provider catalogs so a bad fetch cannot mass-replace models.
 */

const fs = require("fs");
const path = require("path");

function readLastGoodCounts(filePath) {
  try {
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const counts = parsed && parsed.counts && typeof parsed.counts === "object" ? parsed.counts : {};
    /** @type {Record<string, number>} */
    const out = {};
    for (const [engine, count] of Object.entries(counts)) {
      const n = Number(count);
      if (Number.isFinite(n) && n >= 0) out[engine] = n;
    }
    return out;
  } catch {
    return {};
  }
}

function writeLastGoodCounts(filePath, counts) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const tmp = `${filePath}.${process.pid}.${Date.now()}.tmp`;
  const payload = { updatedAt: new Date().toISOString(), counts };
  fs.writeFileSync(tmp, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  fs.renameSync(tmp, filePath);
}

/**
 * @param {{ engine: string, count: number, expectCatalog: boolean, lastGoodCount?: number, shrinkRatio?: number }} opts
 */
function evaluateCatalogSanity(opts) {
  const engine = opts.engine;
  const count = Number(opts.count) || 0;
  const last = Number(opts.lastGoodCount) || 0;
  const shrinkRatio = typeof opts.shrinkRatio === "number" ? opts.shrinkRatio : 0.5;
  if (!opts.expectCatalog) {
    return { engine, status: "skipped", reason: "missing_key", count, lastGoodCount: last };
  }
  if (count <= 0) {
    return { engine, status: "suspect", reason: "empty_catalog", count, lastGoodCount: last };
  }
  if (last > 0 && count < last * shrinkRatio) {
    return { engine, status: "suspect", reason: "shrunk", count, lastGoodCount: last };
  }
  return { engine, status: "ok", reason: null, count, lastGoodCount: last, updateLastGood: count };
}

module.exports = {
  readLastGoodCounts,
  writeLastGoodCounts,
  evaluateCatalogSanity,
};
