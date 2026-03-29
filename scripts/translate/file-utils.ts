import fs from "fs";
import path from "path";
import { globSync } from "glob";
import { isIgnoredDocFile, loadTranslateIgnoreFile } from "./ignore";
import { TranslationConfig } from "./types";
import { DocumentSplitter } from "./splitter";

export function toPosixPath(p: string): string {
  return p.split(path.sep).join("/");
}

const MD_EXT = /\.(?:md|mdx)$/i;

/**
 * Resolve `paths.source-files` globs to absolute paths (same rules as translate CLI).
 */
export function expandSourceFilePatterns(patterns: string[], cwd: string): string[] {
  if (patterns.length === 0) return [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const pattern of patterns) {
    if (!pattern || typeof pattern !== "string") continue;
    const matches = globSync(pattern, {
      cwd,
      nodir: true,
      absolute: true,
      windowsPathsNoEscape: true,
    });
    for (const abs of matches) {
      if (!MD_EXT.test(abs)) continue;
      const norm = path.resolve(abs);
      if (!seen.has(norm)) {
        seen.add(norm);
        out.push(norm);
      }
    }
  }
  return out.sort();
}

export function expandDocSourceFiles(
  config: TranslationConfig,
  cwd: string
): string[] {
  return expandSourceFilePatterns(config.paths.sourceFiles ?? [], cwd);
}

/**
 * Posix paths of configured source docs + map segment content hash → source filepath (posix, cwd-relative).
 * Used by cache cleanup to detect deleted/renamed sources and remap or drop DB rows.
 */
export function buildExistingSegmentsSnapshot(
  config: TranslationConfig,
  cwd: string
): { existingFilepaths: Set<string>; hashToFilepath: Map<string, string> } {
  const existingFilepaths = new Set<string>();
  const hashToFilepath = new Map<string, string>();
  const splitter = new DocumentSplitter();
  const absFiles = expandDocSourceFiles(config, cwd);

  for (const abs of absFiles) {
    const rel = toPosixPath(path.relative(cwd, abs));
    existingFilepaths.add(rel);
    const content = fs.readFileSync(abs, "utf-8");
    const segments = splitter.split(content);
    for (const seg of segments) {
      hashToFilepath.set(seg.hash, rel);
    }
  }

  return { existingFilepaths, hashToFilepath };
}

/** All `.md` / `.mdx` under `docsDir`, respecting `.translate-ignore` when `ig` is set. */
export function getAllDocFiles(
  docsDir: string,
  ig: ReturnType<typeof loadTranslateIgnoreFile> | null
): string[] {
  const files: string[] = [];

  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) {
        files.push(fullPath);
      }
    }
  }

  walk(docsDir);
  const sorted = files.sort();
  if (!ig) return sorted;

  return sorted.filter((filepath) => !isIgnoredDocFile(filepath, docsDir, ig));
}
