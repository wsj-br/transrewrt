import path from "path";
import chalk from "chalk";
import { normalizeLocale } from "./config";
import { toPosixPath } from "./file-utils";
import type { TranslationConfig } from "./types";

const ADJUSTMENT_PLACEHOLDER_RE = /\$\{([a-zA-Z][a-zA-Z0-9_]*)\}/g;

/**
 * Plain `pattern` uses flag `g`. Slash form `/pattern/flags` only works when `pattern` contains no `/`
 * (otherwise the last `/` is parsed as the end delimiter and the regex is wrong).
 */
export function parseAdjustmentSearchToRegExp(search: string): RegExp {
  const trimmed = search.trim();
  if (trimmed.startsWith("/")) {
    const lastSlash = trimmed.lastIndexOf("/");
    if (lastSlash > 0) {
      const pattern = trimmed.slice(1, lastSlash);
      let flags = trimmed.slice(lastSlash + 1);
      const allowed = new Set([..."gimsuy"]);
      flags = [...flags].filter((c) => allowed.has(c)).join("");
      if (!flags.includes("g")) flags += "g";
      return new RegExp(pattern, flags);
    }
  }
  return new RegExp(trimmed, "g");
}

export function interpolateAdjustmentTemplate(
  template: string,
  vars: Record<string, string>
): string {
  return template.replace(ADJUSTMENT_PLACEHOLDER_RE, (full, key: string) => {
    if (Object.prototype.hasOwnProperty.call(vars, key)) return vars[key]!;
    return full;
  });
}

export function buildAdditionalAdjustmentVars(
  sourceAbs: string,
  translatedAbs: string,
  sourceLocaleRaw: string,
  translatedLocaleRaw: string
): Record<string, string> {
  const src = path.normalize(path.resolve(sourceAbs));
  const tr = path.normalize(path.resolve(translatedAbs));
  const sourceLocale = normalizeLocale(sourceLocaleRaw);
  const translatedLocale = normalizeLocale(translatedLocaleRaw);
  return {
    sourceFullPath: toPosixPath(src),
    sourceFilename: path.basename(src),
    sourceBaseName: path.parse(src).name,
    sourceExtension: path.extname(src),
    translatedFullPath: toPosixPath(tr),
    translatedFilename: path.basename(tr),
    translatedBaseName: path.parse(tr).name,
    translatedExtension: path.extname(tr),
    sourceLocale,
    translatedLocale,
    sourceBasedir: toPosixPath(path.dirname(src)),
    translatedBasedir: toPosixPath(path.dirname(tr)),
  };
}

/**
 * Applies each configured regex replace to the **entire** translated markdown body (matter `content` only,
 * not YAML frontmatter), before `rewriteDocLinksForI18nOutput`. Not limited to URL/path substrings.
 */
export function applyAdditionalAdjustmentsToBody(
  body: string,
  adjustments: TranslationConfig["additional-adjustments"] | undefined,
  vars: Record<string, string>,
  verbose: boolean,
  docStem: string
): string {
  if (!adjustments || Object.keys(adjustments).length === 0) return body;
  let out = body;
  for (const [name, rule] of Object.entries(adjustments)) {
    try {
      const re = parseAdjustmentSearchToRegExp(rule.search);
      const replacement = interpolateAdjustmentTemplate(rule.replace, vars);
      out = out.replace(re, () => replacement);
    } catch (e) {
      if (verbose) {
        console.warn(
          chalk.yellow(
            `   ${docStem}: additional-adjustments "${name}" skipped (invalid regex): ${e}`
          )
        );
      }
    }
  }
  return out;
}
