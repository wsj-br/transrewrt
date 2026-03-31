/**
 * Clean up doc translation cache (`paths.cache` / cache.db) for Transrewrt:
 * 1. Orphaned DB rows: filepath points at removed sources, or segment hash only exists elsewhere — remap/delete
 * 2. Stale DB rows: `last_hit_at` NULL or `filepath` NULL/empty (run `pnpm translate:docs --force-update` first to refresh hits)
 * 3. Orphaned outputs: `paths.i18n` files matching `stem.<locale>.md(x)` with no matching source in `paths.source-files`
 *
 * Paths and source globs come from translate.config.json (same as `pnpm translate:docs`).
 *
 * Run from repo root:
 *   pnpm exec tsx scripts/translate/cache-cleanup.ts [-c config-path] [--dry-run]
 *
 * Log: `paths.cache`/cleanup_YYYY-MM-DD_HH-MM-SS.log
 * With --dry-run, no changes; non-dry-run backs up cache.db first.
 */

import { Command } from "commander";
import fs from "fs";
import path from "path";
import * as readline from "readline";
import chalk from "chalk";
import { loadConfig, normalizeLocale } from "./config";
import { TranslationCache } from "./cache";
import {
  buildExistingSegmentsSnapshot,
  expandDocSourceFiles,
  toPosixPath,
} from "./file-utils";
import { TranslationConfig } from "./types";

const program = new Command();

function askConfirmation(question: string): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(/^y(es)?$/i.test(answer.trim()));
    });
  });
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function timestampForLogfile(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const h = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  return `${y}-${m}-${d}_${h}-${min}-${s}`;
}

/** Expected posix paths: `{i18nRel}/{stem}.{locale}.md` (or .mdx if source is .mdx). */
function buildExpectedTranslatedPaths(
  config: TranslationConfig,
  cwd: string
): Set<string> {
  const i18nAbs = path.resolve(cwd, config.paths.i18n);
  const i18nRel = toPosixPath(path.relative(cwd, i18nAbs));
  const expected = new Set<string>();
  const sources = expandDocSourceFiles(config, cwd);
  for (const src of sources) {
    const stem = path.parse(src).name;
    const srcExt = path.extname(src).toLowerCase();
    const outExt = srcExt === ".mdx" ? ".mdx" : ".md";
    for (const loc of config.locales.targets) {
      expected.add(`${i18nRel}/${stem}.${loc}${outExt}`);
    }
  }
  return expected;
}

/** All `.md` / `.mdx` under `i18n` except `.cache/`. */
function listTranslatedDocOutputFiles(i18nAbs: string): string[] {
  const out: string[] = [];
  if (!fs.existsSync(i18nAbs)) return out;

  function walk(dir: string) {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      if (ent.name === ".cache") continue;
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        walk(full);
      } else if (/\.mdx?$/i.test(ent.name)) {
        out.push(full);
      }
    }
  }

  walk(i18nAbs);
  return out.sort();
}

/**
 * Delete `paths.i18n` outputs `stem.<locale>.md(x)` that are not expected from current
 * `source-files` × `locales.targets` (e.g. source doc removed or renamed).
 */
function cleanupOrphanedTranslatedDocOutputs(
  config: TranslationConfig,
  cwd: string,
  dryRun: boolean
): { deleted: number; paths: string[] } {
  const i18nAbs = path.resolve(cwd, config.paths.i18n);
  const expected = buildExpectedTranslatedPaths(config, cwd);
  const targetLocales = new Set(config.locales.targets);
  const deletedPaths: string[] = [];

  for (const fullPath of listTranslatedDocOutputFiles(i18nAbs)) {
    const rel = toPosixPath(path.relative(cwd, fullPath));
    if (expected.has(rel)) continue;

    const base = path.basename(fullPath);
    const m = base.match(/^(.+)\.([^.]+)\.(md|mdx)$/i);
    if (!m) continue;
    const [, , locRaw] = m;
    const loc = normalizeLocale(locRaw);
    if (!targetLocales.has(loc)) continue;

    deletedPaths.push(fullPath);
    if (!dryRun) {
      fs.unlinkSync(fullPath);
    }
  }

  return { deleted: deletedPaths.length, paths: deletedPaths };
}

async function main() {
  program
    .option("-c, --config <path>", "Path to translate.config.json")
    .option("--dry-run", "Report what would be deleted without making changes")
    .parse(process.argv);

  const options = program.opts();
  const dryRun = !!options.dryRun;
  const config = loadConfig(options.config);

  const cwd = process.cwd();
  const sources = expandDocSourceFiles(config, cwd);
  if (sources.length === 0) {
    console.error(
      chalk.red(
        `\n❌ No source docs found (paths.source-files). Nothing to anchor cleanup; aborting.\n`
      )
    );
    process.exit(1);
  }

  const cachePath = path.resolve(cwd, config.paths.cache);

  console.log(
    chalk.yellow(
      "\n⚠️  Before deleting “stale” cache rows, run `pnpm translate:docs --force-update` so segment cache hits refresh `last_hit_at`.\n" +
        "   Otherwise rows that were never read back can look stale and be removed.\n"
    )
  );

  if (!dryRun) {
    const confirmed = await askConfirmation(
      "Proceed with cleanup? This will delete cache rows and orphaned translated-doc files. [y/N] "
    );
    if (!confirmed) {
      console.log(chalk.gray("Cleanup cancelled."));
      process.exit(0);
    }
  }

  const cacheDbPath = path.join(cachePath, "cache.db");
  if (!dryRun && fs.existsSync(cacheDbPath)) {
    const backupPath = path.join(cachePath, `cache-${timestampForLogfile()}.db`);
    fs.copyFileSync(cacheDbPath, backupPath);
    console.log(chalk.green(`\n   Backup created: ${backupPath}`));
  }

  const logFilename = `cleanup_${timestampForLogfile()}.log`;
  const logPath = path.join(cachePath, logFilename);
  const logLines: string[] = [];

  function log(msg: string) {
    logLines.push(msg);
  }

  console.log(chalk.blue("\n📋 Scanning configured source docs and segments…"));
  const { existingFilepaths, hashToFilepath } = buildExistingSegmentsSnapshot(
    config,
    cwd
  );
  console.log(
    chalk.gray(
      `   ${sources.length} source file(s), ${existingFilepaths.size} path(s), ${hashToFilepath.size} segment hash(es)`
    )
  );

  const cache = new TranslationCache(cachePath);
  const statsBefore = cache.getStats();
  const cacheSizeBytes = fs.existsSync(cacheDbPath)
    ? fs.statSync(cacheDbPath).size
    : 0;

  console.log(
    chalk.gray(
      `   Cache: ${statsBefore.totalSegments} translation rows, ${statsBefore.totalFiles} tracked files, ${formatBytes(cacheSizeBytes)}`
    )
  );

  log(`Cleanup started at ${new Date().toISOString()}${dryRun ? " (DRY RUN - no changes made)" : ""}`);
  log(`Cache: ${statsBefore.totalSegments} translation rows, ${statsBefore.totalFiles} tracked files`);
  log("");

  console.log(
    chalk.blue(
      `\n🧹 Cleaning orphaned DB entries (removed/renamed sources)…${dryRun ? chalk.yellow(" [dry-run]") : ""}`
    )
  );
  const orphanedResult = cache.cleanupOrphanedFileTranslations(
    existingFilepaths,
    hashToFilepath,
    dryRun
  );
  const { deleted: orphanedDeleted, updated: orphanedUpdated } = orphanedResult;

  log(`=== Orphaned DB entries (deleted sources)${dryRun ? " [would be]" : ""} ===`);
  log(
    `${dryRun ? "Would delete" : "Deleted"}: ${orphanedDeleted} translation row(s) (by source_hash), ${dryRun ? "Would update" : "Updated"}: ${orphanedUpdated} row(s)`
  );
  log("");
  if (orphanedResult.deletedFilepaths.length > 0) {
    log(`Filepaths ${dryRun ? "that would be " : ""}removed from file_tracking:`);
    for (const fp of orphanedResult.deletedFilepaths.sort()) {
      log(`  - ${fp}`);
    }
    log("");
  }
  if (orphanedResult.deletedTranslations.length > 0) {
    log(
      `Translation rows ${dryRun ? "that would be " : ""}deleted (source_hash, locale, filepath):`
    );
    for (const row of orphanedResult.deletedTranslations) {
      log(`  - ${row.source_hash} | ${row.locale} | ${row.filepath}`);
    }
    log("");
  }

  console.log(
    chalk.blue(
      `🧹 Cleaning stale DB entries (last_hit_at or filepath empty)…${dryRun ? chalk.yellow(" [dry-run]") : ""}`
    )
  );
  const staleResult = cache.cleanupStaleTranslations(dryRun);
  cache.close();

  log(`=== Stale DB entries ${dryRun ? "that would be " : ""}deleted ===`);
  log(`Count: ${staleResult.count}`);
  log("");
  if (staleResult.deletedRows.length > 0) {
    log(
      `${dryRun ? "Rows that would be deleted" : "Deleted rows"} (source_hash, locale, filepath):`
    );
    for (const row of staleResult.deletedRows) {
      log(`  - ${row.source_hash} | ${row.locale} | ${row.filepath ?? "(null)"}`);
    }
  }
  log("");

  console.log(
    chalk.blue(
      `🧹 Cleaning orphaned translated-doc files under paths.i18n…${dryRun ? chalk.yellow(" [dry-run]") : ""}`
    )
  );
  const orphanedFilesResult = cleanupOrphanedTranslatedDocOutputs(
    config,
    cwd,
    dryRun
  );

  log(`=== Orphaned translated-doc files ${dryRun ? "that would be " : ""}deleted ===`);
  log(`Count: ${orphanedFilesResult.deleted}`);
  if (orphanedFilesResult.paths.length > 0) {
    log(`${dryRun ? "Files that would be deleted" : "Deleted files"}:`);
    for (const fp of orphanedFilesResult.paths.sort()) {
      log(`  - ${fp}`);
    }
  }

  if (!fs.existsSync(cachePath)) {
    fs.mkdirSync(cachePath, { recursive: true });
  }
  fs.writeFileSync(logPath, logLines.join("\n") + "\n", "utf8");
  console.log(chalk.gray(`\n   Log written to ${logPath}`));
  const summary = dryRun
    ? `Would delete ${orphanedDeleted} orphaned cache row(s), would update ${orphanedUpdated}; would delete ${staleResult.count} stale row(s); would delete ${orphanedFilesResult.deleted} orphaned file(s). (dry-run)`
    : `Orphaned cache: ${orphanedDeleted} deleted, ${orphanedUpdated} updated; Stale: ${staleResult.count} deleted; Orphaned files: ${orphanedFilesResult.deleted} deleted.`;
  console.log(chalk.green(`\n✅ ${summary}\n`));
}

main().catch((err) => {
  console.error(chalk.red(`\n❌ Error: ${err}`));
  process.exit(1);
});
