/**
 * Transrewrt markdown doc translation (OpenRouter), using segment batching from the shared translate toolkit.
 * Reads `paths.source-files` globs from translate.config.json and writes `basename.<locale>.md` under `paths.i18n`.
 */

import { Command, InvalidArgumentError } from "commander";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import matter from "gray-matter";
import { Glossary } from "./glossary";
import { TranslationCache } from "./cache";
import { DocumentSplitter } from "./splitter";
import { Translator } from "./translator";
import {
  loadConfig,
  validateConfig,
  normalizeLocale,
  parseLocaleList,
  resolveTranslationModels,
} from "./config";
import {
  segmentMarkdownUrlCountsMatch,
  validateTranslation,
} from "./validator";
import {
  BatchTranslationError,
  TranslationConfig,
  TranslationStats,
  Segment,
} from "./types";
import { isIgnoredDocFile, loadTranslateIgnoreFile } from "./ignore";
import {
  expandSourceFilePatterns,
  getAllDocFiles,
  toPosixPath,
} from "./file-utils";
import {
  applyAdditionalAdjustmentsToBody,
  buildAdditionalAdjustmentVars,
} from "./additional-adjustments";
import { protectMarkdownUrls, restoreMarkdownUrls } from "./url-placeholders";
import {
  protectAdmonitionSyntax,
  restoreAdmonitionSyntax,
} from "./admonition-placeholders";
import { protectDocAnchors, restoreDocAnchors } from "./anchor-placeholders";
import { setupLogOutput } from "./log-output";
import { AsyncSemaphore, runMapWithConcurrency } from "./concurrency";

const program = new Command();

function parsePositiveInt(optionLabel: string, value: string): number {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n) || n < 1) {
    throw new InvalidArgumentError(
      `${optionLabel} must be a positive integer (got "${value}")`
    );
  }
  return n;
}

/** Elapsed wall time as MM:SS (minutes and seconds zero-padded). */
function formatElapsedMmSs(ms: number): string {
  const safe = Math.max(0, Math.floor(ms));
  const totalSeconds = Math.floor(safe / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

const MD_EXT = /\.mdx?$/i;

const DEFAULT_LANGUAGE_LIST_BLOCK = {
  start: '<small id="lang-list">',
  end: "</small>",
  separator: " · ",
} as const;

type LanguageListBlockConfig = {
  start: string;
  end: string;
  separator: string;
};

function resolveLanguageListBlockConfig(
  config: TranslationConfig
): LanguageListBlockConfig {
  const raw = config["language-list-block"];
  return {
    start: raw?.start ?? DEFAULT_LANGUAGE_LIST_BLOCK.start,
    end: raw?.end ?? DEFAULT_LANGUAGE_LIST_BLOCK.end,
    separator: raw?.separator ?? DEFAULT_LANGUAGE_LIST_BLOCK.separator,
  };
}

function splitBodyLines(body: string): string[] {
  return body.split(/\r?\n/);
}

function joinBodyLines(lines: string[]): string {
  return lines.join("\n");
}

/**
 * Find the language-list block by scanning lines for `cfg.start` then `cfg.end` (no regex across lines).
 */
function extractLanguageListBlock(
  body: string,
  cfg: LanguageListBlockConfig
): { block: string; startLine: number; endLine: number } | null {
  const lines = splitBodyLines(body);
  const startLine = lines.findIndex((line) => line.includes(cfg.start));
  if (startLine === -1) return null;

  let endLine = startLine;
  if (lines[startLine].includes(cfg.end)) {
    endLine = startLine;
  } else {
    const found = lines.findIndex(
      (line, idx) => idx > startLine && line.includes(cfg.end)
    );
    if (found === -1) return null;
    endLine = found;
  }

  const block = lines.slice(startLine, endLine + 1).join("\n");
  return { block, startLine, endLine };
}

function replaceLanguageListBlockInBody(
  body: string,
  cfg: LanguageListBlockConfig,
  replacement: string
): { body: string; replaced: boolean } {
  const ext = extractLanguageListBlock(body, cfg);
  if (!ext) return { body, replaced: false };
  const lines = splitBodyLines(body);
  const replacementLines = splitBodyLines(replacement);
  const newLines = [
    ...lines.slice(0, ext.startLine),
    ...replacementLines,
    ...lines.slice(ext.endLine + 1),
  ];
  return { body: joinBodyLines(newLines), replaced: true };
}

/**
 * Build `<start>…<end>` language switcher with paths relative to `paths.docs` (source perspective).
 */
function generateLangListBlock(
  sourceBasename: string,
  allLanguages: Array<{ code: string; label: string }>,
  sourceLocale: string,
  i18nPrefix: string,
  langListCfg: LanguageListBlockConfig
): string {
  const srcNorm = normalizeLocale(sourceLocale);
  const ext = path.extname(sourceBasename);
  const stem = ext ? path.basename(sourceBasename, ext) : sourceBasename;
  const parts: string[] = [];
  for (const { code, label } of allLanguages) {
    const c = normalizeLocale(code);
    const href =
      c === srcNorm
        ? sourceBasename
        : i18nPrefix
          ? `${i18nPrefix}/${stem}.${c}${ext}`
          : `${stem}.${c}${ext}`;
    parts.push(`[${label}](${href})`);
  }
  return `${langListCfg.start}${parts.join(langListCfg.separator)}${langListCfg.end}`;
}

/**
 * If the language list in the source file differs from the canonical block, rewrite the file.
 * Only the markdown body (after frontmatter) is scanned — same as translated post-process.
 */
function maybeSyncLanguageListInSource(
  filepath: string,
  content: string,
  canonicalBlock: string,
  langListCfg: LanguageListBlockConfig
): { content: string; updated: boolean } {
  const parsed = matter(content);
  const ext = extractLanguageListBlock(parsed.content, langListCfg);
  if (!ext) return { content, updated: false };
  if (ext.block === canonicalBlock) return { content, updated: false };
  const { body: newBody } = replaceLanguageListBlockInBody(
    parsed.content,
    langListCfg,
    canonicalBlock
  );
  const newContent = matter.stringify(newBody, parsed.data);
  fs.writeFileSync(filepath, newContent, "utf-8");
  return { content: newContent, updated: true };
}

function rewriteOneRelativePathForI18nOutput(
  pathOnly: string,
  query: string,
  fragment: string,
  locale: string,
  i18nPrefix: string,
  depthPrefix: string,
  sourceFileBasenames: string[],
  currentSourceBasename: string
): string {
  const pathTrim = pathOnly.replace(/^\.\//u, "").trim();
  if (!pathTrim) return `${pathOnly}${query}${fragment}`;

  let rest = pathTrim;
  const prefixWithSlash = i18nPrefix ? `${i18nPrefix}/` : "";
  if (prefixWithSlash && rest.startsWith(prefixWithSlash)) {
    rest = rest.slice(prefixWithSlash.length);
    return `${rest}${query}${fragment}`;
  }

  const base = path.posix.basename(rest);
  if (base === currentSourceBasename) {
    return `${depthPrefix}${base}${query}${fragment}`;
  }
  if (
    sourceFileBasenames.includes(base) &&
    base !== currentSourceBasename
  ) {
    const ext = path.extname(base);
    const stem = ext ? path.basename(base, ext) : base;
    return `${stem}.${locale}${ext}${query}${fragment}`;
  }

  return `${depthPrefix}${rest}${query}${fragment}`;
}

/**
 * Adjust markdown links and `src="…"` for files written under `paths.i18n` (config-driven).
 */
function rewriteDocLinksForI18nOutput(
  body: string,
  locale: string,
  i18nPrefix: string,
  depthPrefix: string,
  sourceFileBasenames: string[],
  currentSourceBasename: string
): string {
  const rewriteUrl = (trimmed: string): string => {
    if (!trimmed) return trimmed;
    if (/^#/u.test(trimmed)) return trimmed;
    if (/^(?:https?:|mailto:)/iu.test(trimmed)) return trimmed;
    if (trimmed.startsWith("//")) return trimmed;

    const hashIdx = trimmed.indexOf("#");
    const pathQuery = hashIdx >= 0 ? trimmed.slice(0, hashIdx) : trimmed;
    const fragment = hashIdx >= 0 ? trimmed.slice(hashIdx) : "";

    const qIdx = pathQuery.indexOf("?");
    const pathOnly = qIdx >= 0 ? pathQuery.slice(0, qIdx) : pathQuery;
    const query = qIdx >= 0 ? pathQuery.slice(qIdx) : "";

    if (!pathOnly) return trimmed;
    if (/^[a-zA-Z]:[\\/]/u.test(pathOnly)) return trimmed;

    const newPath = rewriteOneRelativePathForI18nOutput(
      pathOnly,
      query,
      fragment,
      locale,
      i18nPrefix,
      depthPrefix,
      sourceFileBasenames,
      currentSourceBasename
    );
    return newPath;
  };

  let out = body.replace(/\[[^\]]*\]\(([^)]+)\)/g, (full) => {
    const sep = full.indexOf("](");
    if (sep === -1) return full;
    const textPart = full.slice(0, sep + 1);
    const rawUrl = full.slice(sep + 2, -1);
    return `${textPart}(${rewriteUrl(rawUrl.trim())})`;
  });

  out = out.replace(/src="([^"]*)"/g, (_full, url: string) => {
    return `src="${rewriteUrl(url.trim())}"`;
  });

  return out;
}

/**
 * LLMs sometimes drop the closing ** on a line that should be fully bold (e.g. doctoc
 * "**Table of Contents**" → "**Sumário" with no terminator). Repair only when the line
 * opens with ** and contains no second ** (avoids touching list items or multi-bold lines).
 */
function repairOrphanOpeningBoldLines(markdown: string): string {
  return markdown
    .split("\n")
    .map((line) => {
      const trimmedEnd = line.trimEnd();
      const trailingWs = line.slice(trimmedEnd.length);
      const content = trimmedEnd;
      if (!content.startsWith("**")) return line;
      if (content.indexOf("**", 2) !== -1) return line;
      if (content.length <= 2) return line;
      return `${content}**${trailingWs}`;
    })
    .join("\n");
}

/**
 * Replace the translated doc's language switcher with a canonical block (source-relative links).
 * Call only with the **full** markdown body after `splitter.reassemble()` — never on a single segment.
 */
function replaceTranslatedLanguageListInMarkdownBody(
  body: string,
  docStem: string,
  verbose: boolean,
  currentSourceBasename: string,
  allLanguages: Array<{ code: string; label: string }> | undefined,
  sourceLocale: string,
  i18nPrefix: string,
  langListCfg: LanguageListBlockConfig
): string {
  if (!allLanguages || allLanguages.length === 0) return body;
  const canonicalBlock = generateLangListBlock(
    currentSourceBasename,
    allLanguages,
    sourceLocale,
    i18nPrefix,
    langListCfg
  );
  const { body: patched, replaced } = replaceLanguageListBlockInBody(
    body,
    langListCfg,
    canonicalBlock
  );
  if (replaced) return patched;
  if (verbose) {
    console.warn(
      chalk.yellow(
        `   ${docStem}: translated output had no language-list block (${langListCfg.start}…${langListCfg.end}); lang-list not replaced`
      )
    );
  }
  return body;
}

function applyTransrewrtDocPostProcess(
  assembledMarkdown: string,
  locale: string,
  docStem: string,
  verbose: boolean,
  i18nPrefix: string,
  depthPrefix: string,
  sourceFileBasenames: string[],
  currentSourceBasename: string,
  langListCfg: LanguageListBlockConfig,
  allLanguages: Array<{ code: string; label: string }> | undefined,
  sourceLocale: string,
  sourceFileAbsPath: string,
  outputFileAbsPath: string,
  additionalAdjustments: TranslationConfig["additional-adjustments"] | undefined
): string {
  const parsed = matter(assembledMarkdown);
  let body = parsed.content;
  body = repairOrphanOpeningBoldLines(body);
  const adjVars = buildAdditionalAdjustmentVars(
    sourceFileAbsPath,
    outputFileAbsPath,
    sourceLocale,
    locale
  );
  body = applyAdditionalAdjustmentsToBody(
    body,
    additionalAdjustments,
    adjVars,
    verbose,
    docStem
  );

  // Whole reassembled body only (see `replaceTranslatedLanguageListInMarkdownBody`); before link rewrite.
  body = replaceTranslatedLanguageListInMarkdownBody(
    body,
    docStem,
    verbose,
    currentSourceBasename,
    allLanguages,
    sourceLocale,
    i18nPrefix,
    langListCfg
  );

  body = rewriteDocLinksForI18nOutput(
    body,
    locale,
    i18nPrefix,
    depthPrefix,
    sourceFileBasenames,
    currentSourceBasename
  );

  return matter.stringify(body, parsed.data);
}

function getOutputPath(filepath: string, locale: string, i18nDir: string): string {
  const ext = path.extname(filepath);
  const stem = ext ? path.basename(filepath, ext) : path.basename(filepath);
  return path.join(path.resolve(i18nDir), `${stem}.${locale}.md`);
}

/** Same protection pipeline as the main translate loop (admonitions → anchors → URLs). */
function prepareSegmentForTranslation(
  segment: Segment,
  glossary: Glossary,
  locale: string
): {
  glossaryHints: string[];
  protectedContent: string;
  urlMap: string[];
  htmlAnchors: string[];
  docusaurusHeadingIds: string[];
  openMap: string[];
  endMap: string[];
} {
  const glossaryHints = glossary.findTermsInText(segment.content, locale);
  const {
    protected: admonitionProtected,
    openMap,
    endMap,
  } = protectAdmonitionSyntax(segment.content);
  const {
    protected: anchorProtected,
    htmlAnchors,
    docusaurusHeadingIds,
  } = protectDocAnchors(admonitionProtected);
  const { protected: protectedContent, urlMap } =
    protectMarkdownUrls(anchorProtected);
  return {
    glossaryHints,
    protectedContent,
    urlMap,
    htmlAnchors,
    docusaurusHeadingIds,
    openMap,
    endMap,
  };
}

function addTranslationMetadata(
  content: string,
  sourceFileMtime: string,
  sourceFileHash: string,
  locale: string,
  relativePath: string
): string {
  const { data: frontMatter, content: body } = matter(content);
  frontMatter.translation_last_updated = new Date().toISOString();
  frontMatter.source_file_mtime = sourceFileMtime;
  frontMatter.source_file_hash = sourceFileHash;
  frontMatter.translation_language = locale;
  frontMatter.source_file_path = relativePath;
  return matter.stringify(body, frontMatter);
}

async function translateFile(
  filepath: string,
  locale: string,
  config: TranslationConfig,
  glossary: Glossary,
  cache: TranslationCache,
  translator: Translator,
  splitter: DocumentSplitter,
  stats: TranslationStats,
  dryRun: boolean,
  verbose: boolean,
  force: boolean = false,
  /** Re-run file even when file_tracking matches; still read segment cache (unlike --force). */
  forceUpdate: boolean = false,
  debugTrafficPath?: string,
  noCacheRead: boolean = false,
  segmentHitKeys?: Set<string>,
  noBatch: boolean = false,
  batchConcurrency: number = 1
): Promise<void> {
  const fileStartTime = Date.now();
  const cwd = process.cwd();
  const relativePath = path.relative(cwd, filepath);
  const cachePath = toPosixPath(relativePath);
  const outputPath = getOutputPath(filepath, locale, config.paths.i18n);
  const docStem = path.parse(filepath).name;
  const currentSourceBasename = path.basename(filepath);

  const langListCfg = resolveLanguageListBlockConfig(config);
  const i18nRelDir = path.relative(
    path.resolve(config.paths.docs),
    path.resolve(config.paths.i18n)
  );
  const i18nPrefix = toPosixPath(i18nRelDir);
  const depth = i18nPrefix === "" ? 0 : i18nPrefix.split("/").length;
  const depthPrefix = "../".repeat(depth);
  const sourceFiles = expandSourceFilePatterns(
    config.paths.sourceFiles ?? [],
    cwd
  );
  const sourceFileBasenames = sourceFiles.map((f) => path.basename(f));
  const sourceLocaleNorm = normalizeLocale(config.locales.source);

  let content = fs.readFileSync(filepath, "utf-8");

  if (
    config.locales.allLanguages &&
    config.locales.allLanguages.length > 0 &&
    !dryRun
  ) {
    const canonicalLangList = generateLangListBlock(
      currentSourceBasename,
      config.locales.allLanguages,
      sourceLocaleNorm,
      i18nPrefix,
      langListCfg
    );
    const sync = maybeSyncLanguageListInSource(
      filepath,
      content,
      canonicalLangList,
      langListCfg
    );
    if (sync.updated) {
      content = sync.content;
      if (verbose) {
        console.log(
          chalk.cyan(`📝 Updated language list in source: ${relativePath}`)
        );
      }
    }
  }

  const fileHash = TranslationCache.computeHash(content);

  const sourceStats = fs.statSync(filepath);
  const sourceFileMtime = sourceStats.mtime.toISOString();

  if (force) {
    cache.clearFile(cachePath, locale);
    if (verbose) {
      console.log(
        chalk.yellow(`  🔄 Force mode: cleared cache for ${relativePath}`)
      );
    }
  }

  const cachedFileHash = cache.getFileStatus(cachePath, locale);
  const outputFileExists = fs.existsSync(outputPath);

  if (!force && !forceUpdate && cachedFileHash === fileHash && outputFileExists) {
    stats.filesSkipped++;
    if (verbose) {
      console.log(chalk.gray(`⏭️  Skipped (unchanged): ${relativePath}`));
    }
    return;
  }

  if (!outputFileExists && cachedFileHash === fileHash && !force) {
    if (verbose) {
      console.log(chalk.gray(`🔄 Recreating missing file: ${relativePath}`));
    }
  }

  stats.filesProcessed++;
  const segments = splitter.split(content);
  const totalSegments = segments.length;
  const translatableSegments = segments.filter((s) => s.translatable).length;
  const result: Segment[] = segments.map((s) => ({ ...s }));
  let fileSegmentsCached = 0;
  let fileSegmentsTranslated = 0;
  let fileCost = 0;

  const batchSize = config.batchSize ?? 20;
  const maxBatchChars = config.maxBatchChars ?? 2000;

  interface BatchItem {
    segmentIndex: number;
    segment: Segment;
    protectedContent: string;
    urlMap: string[];
    htmlAnchors: string[];
    docusaurusHeadingIds: string[];
    openMap: string[];
    endMap: string[];
    glossaryHints: string[];
  }
  const batchQueue: BatchItem[] = [];
  let batchChars = 0;
  const apiConc = Math.max(1, Math.floor(batchConcurrency));
  const pendingBatchApi: Promise<void>[] = [];
  const batchApiSem =
    !noBatch && apiConc > 1 ? new AsyncSemaphore(apiConc) : null;
  const pendingSingleApi: Promise<void>[] = [];
  const singleApiSem =
    noBatch && apiConc > 1 ? new AsyncSemaphore(apiConc) : null;

  // console.log(chalk.cyan(`\n  📄 ${relativePath}`));
  console.log(
    chalk.yellow(
      `🔃 ${locale} ${relativePath}: ${totalSegments} segment(s) (${translatableSegments} translatable)`
    )
  );

  const formatElapsedTime = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const segRangeLabel = (indices0: number[]): string => {
    if (indices0.length === 0) return "";
    const sorted = [...indices0].sort((a, b) => a - b);
    const a = sorted[0] + 1;
    const b = sorted[sorted.length - 1] + 1;
    if (a === b) return `segment ${a}/${totalSegments}`;
    return `segments ${a}–${b}/${totalSegments}`;
  };

  const lineHint = (startLine?: number): string =>
    startLine != null ? ` (line ${startLine})` : "";

  const logSegmentCacheHit = (idx0: number, startLine?: number) => {
    console.log(
      chalk.gray(
        `📦 ${locale} ${relativePath}: segment ${idx0 + 1}/${totalSegments}${lineHint(startLine)}: cache hit`
      )
    );
  };

  const logSegmentDone = (
    idx0: number,
    totalTokens: number,
    startLine?: number
  ) => {
    console.log(
      chalk.green(
        `✔️  ${locale} ${relativePath}: segment ${idx0 + 1}/${totalSegments}${lineHint(startLine)}: done (${totalTokens} tokens)`
      )
    );
  };

  const logBatchDone = (items: BatchItem[], totalTokens: number) => {
    const idxs = items.map((b) => b.segmentIndex);
    const n = items.length;
    console.log(
      chalk.green(
        `✔️  ${locale} ${relativePath}: ${segRangeLabel(idxs)} (${n} segment${n === 1 ? "" : "s"} in batch, ${totalTokens} tokens)`
      )
    );
  };

  const flushBatch = async (items: BatchItem[]) => {
    if (items.length === 0) return;

    const segmentsForApi = items.map((b) => ({
      ...b.segment,
      content: b.protectedContent,
    }));
    const mergedGlossary = [...new Set(items.flatMap((b) => b.glossaryHints))];

    try {
      const batchResult = await translator.translateBatch(
        segmentsForApi,
        locale,
        mergedGlossary,
        relativePath
      );

      stats.totalTokens += batchResult.usage.totalTokens;
      if (
        batchResult.cost !== undefined &&
        batchResult.cost !== null &&
        !isNaN(batchResult.cost) &&
        batchResult.cost > 0
      ) {
        stats.totalCost += batchResult.cost;
        fileCost += batchResult.cost;
      }

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const rawTranslation = batchResult.translations.get(i);
        if (rawTranslation === undefined) continue;
        const urlRestored = restoreMarkdownUrls(rawTranslation, item.urlMap);
        const anchorsRestored = restoreDocAnchors(
          urlRestored,
          item.htmlAnchors,
          item.docusaurusHeadingIds
        );
        const restoredContent = restoreAdmonitionSyntax(
          anchorsRestored,
          item.openMap,
          item.endMap
        );

        fileSegmentsTranslated++;
        stats.segmentsTranslated++;

        cache.setSegment(
          item.segment.hash,
          locale,
          item.segment.content,
          restoredContent,
          batchResult.model,
          cachePath,
          item.segment.startLine
        );
        segmentHitKeys?.add(`${item.segment.hash}|${locale}`);
        result[item.segmentIndex] = { ...item.segment, content: restoredContent };
      }

      logBatchDone(items, batchResult.usage.totalTokens);
    } catch (error) {
      if (error instanceof BatchTranslationError) {
        if (verbose) {
          console.warn(
            chalk.yellow(
              `⚠️  ${locale} ${relativePath}: batch failed (expected ${error.expected} <t> segments, got ${error.received}); falling back to single-segment API calls`
            )
          );
        }
        for (const item of items) {
          try {
            const trResult = await translator.translate(
              item.protectedContent,
              locale,
              item.glossaryHints,
              relativePath
            );
            const urlRestored = restoreMarkdownUrls(trResult.content, item.urlMap);
            const anchorsRestored = restoreDocAnchors(
              urlRestored,
              item.htmlAnchors,
              item.docusaurusHeadingIds
            );
            const restoredContent = restoreAdmonitionSyntax(
              anchorsRestored,
              item.openMap,
              item.endMap
            );

            fileSegmentsTranslated++;
            stats.segmentsTranslated++;
            stats.totalTokens += trResult.usage.totalTokens;
            if (
              trResult.cost !== undefined &&
              trResult.cost !== null &&
              !isNaN(trResult.cost)
            ) {
              if (trResult.cost > 0) {
                stats.totalCost += trResult.cost;
                fileCost += trResult.cost;
              }
            }

            cache.setSegment(
              item.segment.hash,
              locale,
              item.segment.content,
              restoredContent,
              trResult.model,
              cachePath,
              item.segment.startLine
            );
            segmentHitKeys?.add(`${item.segment.hash}|${locale}`);
            result[item.segmentIndex] = { ...item.segment, content: restoredContent };
            logSegmentDone(
              item.segmentIndex,
              trResult.usage.totalTokens,
              item.segment.startLine
            );
            await new Promise((resolve) => setTimeout(resolve, 100));
          } catch (singleError) {
            console.error(
              chalk.red(
                `\n  ❌ Failed to translate segment ${item.segmentIndex + 1}/${totalSegments} in ${relativePath}: ${singleError}`
              )
            );
            result[item.segmentIndex] = item.segment;
          }
        }
      } else {
        throw error;
      }
    }
  };

  const enqueueBatchApiCall = async (items: BatchItem[]): Promise<void> => {
    if (items.length === 0) return;
    if (batchApiSem) {
      pendingBatchApi.push(batchApiSem.use(() => flushBatch(items)));
    } else {
      await flushBatch(items);
    }
  };

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (!segment.translatable) {
      continue;
    }

    const cachedTranslation =
      noCacheRead || force
        ? null
        : cache.getSegment(segment.hash, locale, cachePath, segment.startLine);
    if (cachedTranslation) {
      fileSegmentsCached++;
      stats.segmentsCached++;
      segmentHitKeys?.add(`${segment.hash}|${locale}`);
      result[i] = { ...segment, content: cachedTranslation };
      // logSegmentCacheHit(i, segment.startLine);
      continue;
    }

    if (dryRun) {
      fileSegmentsTranslated++;
      stats.segmentsTranslated++;
      console.log(
        chalk.yellow(
          `🔃 ${locale} ${relativePath}: segment ${i + 1}/${totalSegments}${lineHint(segment.startLine)}: dry-run`
        )
      );
      continue;
    }

    const glossaryHints = glossary.findTermsInText(segment.content, locale);
    // Admonitions → HTML / {#id} anchors → markdown URLs; restore URLs → anchors → admonitions.
    const {
      protected: admonitionProtected,
      openMap,
      endMap,
    } = protectAdmonitionSyntax(segment.content);
    const {
      protected: anchorProtected,
      htmlAnchors,
      docusaurusHeadingIds,
    } = protectDocAnchors(admonitionProtected);
    const { protected: protectedContent, urlMap } =
      protectMarkdownUrls(anchorProtected);

    if (debugTrafficPath) {
      try {
        const meta = [
          `filename: ${relativePath}`,
          `segment number: ${i + 1}`,
          `segment source_hash: ${segment.hash}`,
          "text to be translated:",
          protectedContent,
          "",
        ].join("\n");
        fs.appendFileSync(debugTrafficPath, meta, "utf-8");
      } catch {
        // ignore write errors
      }
    }

    if (noBatch) {
      const runSingleApiCall = async () => {
        try {
          const trResult = await translator.translate(
            protectedContent,
            locale,
            glossaryHints,
            relativePath
          );
          const urlRestored = restoreMarkdownUrls(trResult.content, urlMap);
          const anchorsRestored = restoreDocAnchors(
            urlRestored,
            htmlAnchors,
            docusaurusHeadingIds
          );
          const restoredContent = restoreAdmonitionSyntax(
            anchorsRestored,
            openMap,
            endMap
          );

          fileSegmentsTranslated++;
          stats.segmentsTranslated++;
          stats.totalTokens += trResult.usage.totalTokens;
          if (
            trResult.cost !== undefined &&
            trResult.cost !== null &&
            !isNaN(trResult.cost) &&
            trResult.cost > 0
          ) {
            stats.totalCost += trResult.cost;
            fileCost += trResult.cost;
          }

          cache.setSegment(
            segment.hash,
            locale,
            segment.content,
            restoredContent,
            trResult.model,
            cachePath,
            segment.startLine
          );
          segmentHitKeys?.add(`${segment.hash}|${locale}`);
          result[i] = { ...segment, content: restoredContent };
          logSegmentDone(i, trResult.usage.totalTokens, segment.startLine);
          await new Promise((resolve) => setTimeout(resolve, 100));
        } catch (error) {
          console.error(
            chalk.red(
              `\n  ❌ Failed to translate segment ${i + 1}/${totalSegments} in ${relativePath}: ${error}`
            )
          );
          result[i] = segment;
        }
      };
      if (singleApiSem) {
        pendingSingleApi.push(singleApiSem.use(runSingleApiCall));
      } else {
        await runSingleApiCall();
      }
    } else {
      batchQueue.push({
        segmentIndex: i,
        segment,
        protectedContent,
        urlMap,
        htmlAnchors,
        docusaurusHeadingIds,
        openMap,
        endMap,
        glossaryHints,
      });
      batchChars += protectedContent.length;

      if (batchQueue.length >= batchSize || batchChars >= maxBatchChars) {
        const toFlush = [...batchQueue];
        batchQueue.length = 0;
        batchChars = 0;
        await enqueueBatchApiCall(toFlush);
      }
    }
  }

  if (!noBatch && batchQueue.length > 0) {
    const toFlush = [...batchQueue];
    batchQueue.length = 0;
    await enqueueBatchApiCall(toFlush);
  }

  await Promise.all(pendingSingleApi);
  await Promise.all(pendingBatchApi);

  const translatedSegments = result;

  const validation = validateTranslation(segments, translatedSegments);
  if (validation.warnings.length > 0) {
    console.warn(chalk.yellow(`⚠️  Validation warnings in ${relativePath}:`));
    for (const w of validation.warnings) {
      console.warn(chalk.yellow(`     - ${w.message}`));
    }
  }

  if (!dryRun) {
    const retryIdxs = [
      ...new Set(
        validation.warnings
          .filter((w) => w.alternateModelRetry && w.segmentIndex !== undefined)
          .map((w) => w.segmentIndex!)
      ),
    ].sort((a, b) => a - b);
    const models = translator.getConfiguredModels();
    if (retryIdxs.length > 0 && models.length > 1) {
      for (const i of retryIdxs) {
        const segment = segments[i];
        const current = result[i];
        if (!segment?.translatable || !current) continue;
        if (segmentMarkdownUrlCountsMatch(segment.content, current.content)) {
          continue;
        }

        const prep = prepareSegmentForTranslation(segment, glossary, locale);
        let fixed = false;
        for (let m = 1; m < models.length && !fixed; m++) {
          try {
            console.log(
              chalk.cyan(
                `  ↻ ${locale} ${relativePath}: segment ${i + 1}/${totalSegments}: retrying (markdown link count) from model index ${m} (${models[m]})…`
              )
            );
            const trResult = await translator.translate(
              prep.protectedContent,
              locale,
              prep.glossaryHints,
              relativePath,
              m
            );
            const urlRestored = restoreMarkdownUrls(
              trResult.content,
              prep.urlMap
            );
            const anchorsRestored = restoreDocAnchors(
              urlRestored,
              prep.htmlAnchors,
              prep.docusaurusHeadingIds
            );
            const restoredContent = restoreAdmonitionSyntax(
              anchorsRestored,
              prep.openMap,
              prep.endMap
            );
            if (!segmentMarkdownUrlCountsMatch(segment.content, restoredContent)) {
              continue;
            }

            cache.setSegment(
              segment.hash,
              locale,
              segment.content,
              restoredContent,
              trResult.model,
              cachePath,
              segment.startLine
            );
            segmentHitKeys?.add(`${segment.hash}|${locale}`);
            result[i] = { ...segment, content: restoredContent };
            stats.totalTokens += trResult.usage.totalTokens;
            if (
              trResult.cost !== undefined &&
              trResult.cost !== null &&
              !isNaN(trResult.cost) &&
              trResult.cost > 0
            ) {
              stats.totalCost += trResult.cost;
              fileCost += trResult.cost;
            }
            fixed = true;
            console.log(
              chalk.green(
                `  ✔️  ${locale} ${relativePath}: segment ${i + 1} link count OK with ${trResult.model}`
              )
            );
          } catch (e) {
            console.warn(
              chalk.yellow(
                `⚠️  ${locale} ${relativePath}: segment ${i + 1} retry (model index ${m}) failed: ${e}`
              )
            );
          }
        }
        if (!fixed) {
          console.warn(
            chalk.yellow(
              `⚠️  ${locale} ${relativePath}: segment ${i + 1} still has URL/link count mismatch after alternate models`
            )
          );
        }
      }

      const validationAfter = validateTranslation(segments, result);
      if (validationAfter.warnings.length > 0) {
        console.warn(
          chalk.yellow(`⚠️  Validation warnings after retries in ${relativePath}:`)
        );
        for (const w of validationAfter.warnings) {
          console.warn(chalk.yellow(`     - ${w.message}`));
        }
      }
    }
  }

  if (!validation.valid) {
    console.warn(chalk.yellow(`⚠️  Validation issues in ${relativePath}:`));
    const maxSnippetLen = 200;
    for (const issue of validation.issues) {
      console.warn(chalk.yellow(`     - ${issue.message}`));
      if (verbose && issue.segmentIndex !== undefined) {
        const idx = issue.segmentIndex;
        const src = segments[idx];
        const trn = translatedSegments[idx];
        if (src && trn) {
          const srcSnippet =
            src.content.length > maxSnippetLen
              ? src.content.slice(0, maxSnippetLen) + "..."
              : src.content;
          const trnSnippet =
            trn.content.length > maxSnippetLen
              ? trn.content.slice(0, maxSnippetLen) + "..."
              : trn.content;
          console.warn(
            chalk.gray(`       [segment ${idx}] source (${src.content.length} chars):`)
          );
          console.warn(
            chalk.gray(`         ${srcSnippet.replace(/\n/g, "\n         ")}`)
          );
          console.warn(
            chalk.gray(
              `       [segment ${idx}] translated (${trn.content.length} chars):`
            )
          );
          console.warn(
            chalk.gray(`         ${trnSnippet.replace(/\n/g, "\n         ")}`)
          );
        }
      }
    }
  }

  let translatedContent = splitter.reassemble(translatedSegments);

  if (!dryRun) {
    // Post-process (incl. language-list replacement) runs on this full string only, not per segment.
    translatedContent = applyTransrewrtDocPostProcess(
      translatedContent,
      locale,
      docStem,
      verbose,
      i18nPrefix,
      depthPrefix,
      sourceFileBasenames,
      currentSourceBasename,
      langListCfg,
      config.locales.allLanguages,
      config.locales.source,
      path.resolve(filepath),
      path.resolve(outputPath),
      config["additional-adjustments"]
    );
    translatedContent = addTranslationMetadata(
      translatedContent,
      sourceFileMtime,
      fileHash,
      locale,
      cachePath
    );
  }

  if (!dryRun) {
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(outputPath, translatedContent);

    cache.setFileStatus(cachePath, locale, fileHash);
  }

  const fileTime = Date.now() - fileStartTime;
  stats.totalTimeMs += fileTime;
  stats.fileTimes.push(fileTime);

  const fileTimeFormatted = formatElapsedTime(fileTime);
  const cachedCount = fileSegmentsCached;
  const translatedCount = fileSegmentsTranslated;
  const fileCostStr = fileCost > 0 ? `$${fileCost.toFixed(4)}` : "$0.0000";

  console.log(
    chalk.blue(
      `✅ ${relativePath} → ${path.basename(outputPath)} (${cachedCount} cached, ${translatedCount} new) - ${fileTimeFormatted} - ${fileCostStr}`
    )
  );
}

async function main() {
  program
    .name("translate-docs")
    .description(
      "Translate repo markdown (translate.config.json source-files) via OpenRouter"
    )
    .option(
      "-l, --locale <codes>",
      "Translate only these locale(s), comma- or space-separated (e.g. pt-BR,es,fr)"
    )
    .option(
      "-p, --path <path>",
      "Translate one file or all .md/.mdx under a directory (overrides config source-files)"
    )
    .option("--dry-run", "Show what would be translated without making changes")
    .option(
      "--no-cache",
      "Ignore cache (force API calls) but still persist new translations"
    )
    .option(
      "--force",
      "Re-translate files: clear file tracking and ignore segment cache for those files (not combinable with --force-update)"
    )
    .option(
      "--force-update",
      "Re-process files even when file tracking matches source hash; still use segment cache (not combinable with --force)"
    )
    .option("-v, --verbose", "Show detailed output")
    .option("--stats", "Show cache statistics and exit")
    .option("--clear-cache [locale]", "Clear translation cache")
    .option(
      "--debug-traffic [path]",
      "Log OpenRouter request/response to a file (optional path; default file under translation cache)"
    )
    .option(
      "--no-batch",
      "Use single-segment translation instead of batch (one API call per segment)"
    )
    .option(
      "-j, --concurrency <n>",
      "Max parallel target locales (default: 3 or translate.config.json)",
      (v: string) => parsePositiveInt("Concurrency (-j)", v)
    )
    .option(
      "-b, --batch-concurrency <n>",
      "Max parallel translation API calls per locale per file (batch mode: one call = multiple segments; --no-batch: one segment per call; default: 4 or translate.config.json)",
      (v: string) => parsePositiveInt("Batch concurrency (-b)", v)
    )
    .option("-c, --config <path>", "Path to config file")
    .configureHelp({ helpWidth: 100 })
    .exitOverride((err) => {
      if (
        err.code === "commander.helpDisplayed" ||
        err.code === "commander.versionDisplayed"
      ) {
        process.exit(err.exitCode);
      }
      if (
        err.code === "commander.unknownOption" ||
        err.code === "commander.unknownCommand" ||
        err.code === "commander.missingArgument"
      ) {
        console.error(chalk.red(`\n❌ ${err.message}\n`));
        program.outputHelp();
        process.exit(1);
      }
      throw err;
    });

  let options: ReturnType<typeof program.opts>;
  try {
    program.parse(process.argv);
    options = program.opts();
  } catch (error: unknown) {
    if (error instanceof Error) {
      const errorMsg = error.message.toLowerCase();
      if (
        errorMsg.includes("unknown option") ||
        errorMsg.includes("unexpected argument") ||
        errorMsg.includes("error") ||
        errorMsg.includes("invalid")
      ) {
        console.error(chalk.red(`\n❌ ${error.message}\n`));
        program.outputHelp();
        process.exit(1);
      }
    }
    throw error;
  }

  try {
    if (options.force && options.forceUpdate) {
      console.error(
        chalk.red(
          `\n❌ Error: use either --force or --force-update, not both.\n` +
            `   --force: ignore segment cache and clear file tracking for processed files.\n` +
            `   --force-update: re-run outputs using file tracking skip only; segment cache still applies.\n`
        )
      );
      program.outputHelp();
      process.exit(1);
    }

    const config = loadConfig(options.config);
    const logDir = path.resolve(
      process.cwd(),
      config.paths.logFolder ?? ".translation-cache"
    );
    const { logPath } = setupLogOutput({
      cacheDir: logDir,
      prefix: "translate-docs",
    });
    const ignoreMatcher = loadTranslateIgnoreFile(process.cwd());

    if (options.stats) {
      const cache = new TranslationCache(config.paths.cache);
      const cacheStats = cache.getStats();
      console.log(chalk.bold("\n📊 Cache Statistics:"));
      console.log(`   Cached segments: ${cacheStats.totalSegments}`);
      console.log(`   Tracked files: ${cacheStats.totalFiles}`);
      console.log(`   By locale:`);
      for (const [loc, count] of Object.entries(cacheStats.byLocale)) {
        console.log(`     - ${loc}: ${count}`);
      }
      cache.close();
      return;
    }

    if (options.clearCache !== undefined) {
      const cache = new TranslationCache(config.paths.cache);
      let locale: string | undefined;
      if (typeof options.clearCache === "string") {
        locale = normalizeLocale(options.clearCache);
        if (
          config.locales.targets.length > 0 &&
          !config.locales.targets.includes(locale)
        ) {
          console.error(
            chalk.red(
              `\n❌ Error: Locale "${locale}" not found in configuration.\n`+
                `   Available locales: ${config.locales.targets.join(", ")}`
            )
          );
          cache.close();
          process.exit(1);
        }
      }
      cache.clear(locale);
      console.log(
        chalk.blue(`✅ Cache cleared${locale ? ` for ${locale}` : ""}`)
      );
      cache.close();
      return;
    }

    validateConfig(config);

    if (config.locales.targets.length === 0) {
      console.error(
        chalk.red(
          `\n❌ locales.targets is empty. Set locales.targets in translate.config.json ` +
            `(JSON array of codes or path to ui-languages.json).\n`
        )
      );
      process.exit(1);
    }

    const cache = new TranslationCache(config.paths.cache);
    let cacheClosed = false;
    const closeCacheOnce = () => {
      if (!cacheClosed) {
        cacheClosed = true;
        cache.close();
      }
    };
    const glossary = new Glossary(
      config.paths.glossary,
      config.paths.glossaryUser,
      config.locales.targets
    );
    const docSplitter = new DocumentSplitter();
    const noCacheRead = options.cache === false;

    let debugTrafficPath: string | undefined;
    if (options.debugTraffic) {
      const defaultPath = path.join(
        config.paths.cache,
        `debug-traffic-${new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19)}.log`
      );
      debugTrafficPath =
        typeof options.debugTraffic === "string"
          ? options.debugTraffic
          : defaultPath;
      const dir = path.dirname(debugTrafficPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const header =
        `Translation debug traffic - started ${new Date().toISOString()}\n` +
        `Traffic is logged only when segments are sent to the API (not when served from cache).\n` +
        `Use --no-cache to force API calls and capture request/response.\n\n`;
      fs.writeFileSync(debugTrafficPath, header, "utf-8");
    }
    const translator = new Translator(config, debugTrafficPath ?? null);

    let locales: string[];
    if (options.locale) {
      locales = parseLocaleList(options.locale);
      if (locales.length === 0) {
        console.error(
          chalk.red(
            `\n❌ Error: --locale has no valid codes (use comma- or space-separated list, e.g. pt-BR,es,fr).\n`
          )
        );
        process.exit(1);
      }
      const unknown = locales.filter(
        (c) => !config.locales.targets.includes(c)
      );
      if (unknown.length > 0) {
        console.error(
          chalk.red(
            `\n❌ Error: Locale(s) not in configuration: ${unknown.join(", ")}\n` +
              `   Available locales: ${config.locales.targets.join(", ")}`
          )
        );
        process.exit(1);
      }
    } else {
      locales = config.locales.targets;
    }

    let files: string[];
    if (options.path) {
      const resolvedPath = path.resolve(options.path);
      if (!fs.existsSync(resolvedPath)) {
        console.error(chalk.red(`\n❌ Error: Path not found: ${resolvedPath}`));
        process.exit(1);
      }
      const st = fs.statSync(resolvedPath);
      if (st.isDirectory()) {
        files = getAllDocFiles(resolvedPath, ignoreMatcher);
        if (files.length === 0) {
          console.warn(
            chalk.yellow(
              `\n⚠️  Warning: No markdown files found in directory: ${resolvedPath}`
            )
          );
        }
      } else {
        const docsRoot = path.resolve(config.paths.docs);
        const ignored =
          ignoreMatcher &&
          isIgnoredDocFile(resolvedPath, docsRoot, ignoreMatcher);
        files =
          MD_EXT.test(resolvedPath) && !ignored ? [resolvedPath] : [];
        if (files.length === 0 && MD_EXT.test(resolvedPath)) {
          console.warn(
            chalk.yellow(`\n⚠️  File ignored by .translate-ignore: ${resolvedPath}`)
          );
        }
      }
    } else {
      const pats = config.paths.sourceFiles;
      if (!pats || pats.length === 0) {
        throw new Error(
          "translate.config.json must set paths.source-files (non-empty array of paths/globs)"
        );
      }
      files = expandSourceFilePatterns(pats, process.cwd());
    }

    const docsRoot = path.resolve(config.paths.docs);
    if (ignoreMatcher) {
      files = files.filter(
        (f) => !isIgnoredDocFile(f, docsRoot, ignoreMatcher)
      );
    }

    if (options.verbose && ignoreMatcher) {
      console.log(
        chalk.gray(
          `   Ignore file: ${path.join(process.cwd(), ".translate-ignore")}`
        )
      );
    }

    const segmentHitKeys = new Set<string>();

    console.log(
      chalk.bold(
        `\n🌐 Translating ${files.length} file(s) to ${locales.length} locale(s)\n`
      )
    );
    console.log(chalk.cyan("Models (try in order): ")+chalk.magenta(resolveTranslationModels(config.openrouter).join(", "))
    );
    console.log(chalk.cyan(`Glossary terms: `)+chalk.magenta(`${glossary.size}`));
    console.log(chalk.cyan(`Output: `)+chalk.magenta(`${path.resolve(config.paths.i18n)}`));
    console.log(chalk.cyan(`Output log: `)+chalk.magenta(`${logPath}`));
    if (debugTrafficPath) {
      console.log(chalk.cyan(`Debug traffic log: `)+chalk.magenta(`${debugTrafficPath}`));
    }
    const localeConcurrency = Math.max(
      1,
      Math.floor(options.concurrency ?? config.concurrency ?? 3)
    );
    const batchConcurrency = Math.max(
      1,
      Math.floor(
        options.batchConcurrency ?? config.batchConcurrency ?? 4
      )
    );
    console.log(chalk.cyan(`Locale concurrency: `)+ chalk.magenta(`${localeConcurrency}`));
    console.log(chalk.cyan(`Parallel API calls per file: `)+ chalk.magenta(`${batchConcurrency}`));
    console.log("");

    if (options.dryRun) {
      console.log(chalk.yellow("⚠️  Dry run mode - no changes will be made\n"));
    }
    if (options.batch === false) {
      console.log(
        chalk.yellow(
          "⚠️  Single-segment mode (--no-batch) - one API call per segment\n"
        )
      );
    }

    if (files.length === 0) {
      console.warn(chalk.yellow("No files to translate."));
      closeCacheOnce();
      return;
    }

    const totalStats: TranslationStats = {
      filesProcessed: 0,
      filesSkipped: 0,
      segmentsCached: 0,
      segmentsTranslated: 0,
      totalTokens: 0,
      totalCost: 0,
      totalTimeMs: 0,
      fileTimes: [],
    };

    try {
      const translateWallStart = Date.now();
      const perLocaleResults = await runMapWithConcurrency(
        locales,
        localeConcurrency,
        async (locale) => {
          // console.log(chalk.bold.blue(`\n📝 Translating to ${locale}:`));

          const localeStats: TranslationStats = {
            filesProcessed: 0,
            filesSkipped: 0,
            segmentsCached: 0,
            segmentsTranslated: 0,
            totalTokens: 0,
            totalCost: 0,
            totalTimeMs: 0,
            fileTimes: [],
          };

          for (const filepath of files) {
            await translateFile(
              filepath,
              locale,
              config,
              glossary,
              cache,
              translator,
              docSplitter,
              localeStats,
              options.dryRun || false,
              options.verbose || false,
              options.force || false,
              options.forceUpdate || false,
              debugTrafficPath,
              noCacheRead,
              segmentHitKeys,
              options.batch === false,
              batchConcurrency
            );
          }

          return { locale, localeStats };
        }
      );
      const translateWallMs = Date.now() - translateWallStart;

      for (const { locale, localeStats } of perLocaleResults) {
        totalStats.filesProcessed += localeStats.filesProcessed;
        totalStats.filesSkipped += localeStats.filesSkipped;
        totalStats.segmentsCached += localeStats.segmentsCached;
        totalStats.segmentsTranslated += localeStats.segmentsTranslated;
        totalStats.totalTokens += localeStats.totalTokens;
        totalStats.totalCost += localeStats.totalCost;
        totalStats.totalTimeMs += localeStats.totalTimeMs;
        totalStats.fileTimes.push(...localeStats.fileTimes);

        if (localeStats.totalTimeMs > 0) {
          console.log(
            chalk.gray(
              `   [${locale}] Time: ${formatElapsedMmSs(localeStats.totalTimeMs)}`
            )
          );
        }
      }

      console.log(chalk.bold.green("\n✅ Translation complete!\n"));
      console.log(chalk.bold("📊 Summary:"));
      console.log(
        `   Total elapsed time: ${formatElapsedMmSs(translateWallMs)}`
      );
      console.log(`   Total files processed: ${totalStats.filesProcessed}`);
      console.log(`   Total files skipped: ${totalStats.filesSkipped}`);
      console.log(`   Segments from cache: ${totalStats.segmentsCached}`);
      console.log(`   Segments translated: ${totalStats.segmentsTranslated}`);
      console.log(
        `   Total tokens used: ${totalStats.totalTokens.toLocaleString()}`
      );

      if (totalStats.segmentsTranslated > 0) {
        if (totalStats.totalCost > 0) {
          console.log(`   Total cost: $${totalStats.totalCost.toFixed(6)}`);
        } else {
          console.log(`   Total cost: $0.00 (cost data not available from API)`);
        }
      } else {
        console.log(`   Total cost: $0.00 (all segments from cache)`);
      }

      if (debugTrafficPath && totalStats.segmentsTranslated === 0) {
        try {
          fs.appendFileSync(
            debugTrafficPath,
            `========== NO API REQUESTS (all segments from cache) ==========\n` +
              `No OpenRouter requests were made in this run. Use --no-cache to force translation and capture request/response traffic.\n\n`,
            "utf-8"
          );
        } catch {
          // ignore
        }
      }

      // const cacheStats = cache.getStats();
      // console.log(chalk.gray("\n   Cache segments by locale:"));
      // for (const [loc, count] of Object.entries(cacheStats.byLocale)) {
      //   console.log(chalk.gray(`     - ${loc}: ${count}`));
      // }

      const resetCount = cache.resetLastHitAtForUnhitMarkdown(segmentHitKeys);
      if (resetCount > 0 && options.verbose) {
        console.log(
          chalk.gray(
            `   Reset last_hit_at for ${resetCount} unhit markdown cache row(s)`
          )
        );
      }
    } finally {
      closeCacheOnce();
    }
  } catch (error) {
    console.error(chalk.red(`\n❌ Error: ${error}`));
    process.exit(1);
  }
}

main();
