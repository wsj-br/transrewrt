#!/usr/bin/env node
/**
 * Remove session logs from translation tooling and cache DB backups under the doc-translate cache dir.
 * Keeps translated-docs/.cache/cache.db (and never deletes non-matching files).
 *
 *   pnpm clear-logs
 *   pnpm clear-logs --dry-run
 */

const fs = require("fs");
const path = require("path");

const SESSION_LOG_NAME_RES = [
  /^generate-translations-.+\.log$/,
  /^translate-docs_.+\.log$/,
  /^translate-docs-blocks_.+\.log$/,
];

/** Backups and ancillary logs next to cache.db — not the live cache.db */
const CACHE_ARTIFACT_NAME_RES = [
  /^cache-.+\.db$/,
  /^cleanup_.+\.log$/,
  /^debug-traffic-.+\.log$/,
];

function loadTranslateConfig(cwd) {
  const p = path.join(cwd, "translate.config.json");
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

/** @param {string} dir */
function listFileNames(dir) {
  if (!fs.existsSync(dir)) return [];
  const st = fs.statSync(dir);
  if (!st.isDirectory()) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile())
    .map((d) => d.name);
}

function matchesAny(name, regexes) {
  return regexes.some((re) => re.test(name));
}

/**
 * @param {string} dir
 * @param {RegExp[]} regexes
 * @param {boolean} dryRun
 * @returns {number}
 */
function removeMatchingFiles(dir, regexes, dryRun) {
  let n = 0;
  const abs = path.resolve(dir);
  for (const name of listFileNames(abs)) {
    if (name === "cache.db") continue;
    if (!matchesAny(name, regexes)) continue;
    const full = path.join(abs, name);
    const rel = path.relative(process.cwd(), full);
    if (dryRun) {
      console.log(`would remove ${rel}`);
    } else {
      fs.unlinkSync(full);
      console.log(`removed ${rel}`);
    }
    n += 1;
  }
  return n;
}

function uniqueResolvedDirs(paths) {
  const seen = new Set();
  const out = [];
  for (const p of paths) {
    if (!p) continue;
    const key = path.resolve(p);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(key);
  }
  return out;
}

function main() {
  const cwd = process.cwd();
  const dryRun = process.argv.includes("--dry-run");

  const cfg = loadTranslateConfig(cwd);
  const cacheDir =
    (cfg?.paths?.cache && path.resolve(cwd, cfg.paths.cache)) ||
    path.join(cwd, "translated-docs", ".cache");

  const rawLog =
    cfg?.paths?.logFolder ??
    cfg?.paths?.["log-folder"] ??
    ".translation-cache";
  const logDir = path.resolve(cwd, rawLog);

  const logDirs = uniqueResolvedDirs([
    path.join(cwd, "dev"),
    logDir,
  ]);

  let total = 0;
  for (const dir of logDirs) {
    total += removeMatchingFiles(dir, SESSION_LOG_NAME_RES, dryRun);
  }
  total += removeMatchingFiles(cacheDir, CACHE_ARTIFACT_NAME_RES, dryRun);

  const suffix = dryRun ? " (dry run)" : "";
  console.log(`\n${dryRun ? "Would remove" : "Removed"} ${total} file(s)${suffix}.`);
}

main();
