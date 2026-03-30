import fs from "fs";
import path from "path";
import { TranslationConfig } from "./types";

const DEFAULT_CONFIG: TranslationConfig = {
  batchSize: 20,
  maxBatchChars: 4096,
  concurrency: 3,
  batchConcurrency: 4,
  openrouter: {
    baseUrl: "https://openrouter.ai/api/v1",
    translationModels: [
      "qwen/qwen3-235b-a22b-2507",
      "stepfun/step-3.5-flash:free",
      "anthropic/claude-3-haiku",
      "z-ai/glm-4.7-flash",
      "minimax/minimax-m2.5",
      "anthropic/claude-3.5-haiku",
    ],
    maxTokens: 8192,
    temperature: 0.2,
  },
  locales: {
    source: "en",
    targets: [],
    displayNames: {},
  },
  paths: {
    docs: "./docs",
    i18n: "./i18n",
    cache: "./.translation-cache",
    glossary: "./glossary-ui.csv",
    glossaryUser: "./glossary-user.csv",
    logFolder: ".translation-cache",
  },
  cache: {
    enabled: true,
    segmentLevel: true,
  },
};

export type LocaleResolution = {
  targets: string[];
  displayNames: Record<string, string>;
  /** All locales in file order (including source) when loaded from ui-languages.json. */
  allLanguages?: Array<{ code: string; label: string }>;
};

/**
 * Ordered OpenRouter models from config: translationModels if non-empty, else default + fallback.
 */
export function resolveTranslationModels(
  o: TranslationConfig["openrouter"]
): string[] {
  if (Array.isArray(o.translationModels) && o.translationModels.length > 0) {
    const list = o.translationModels
      .filter(
        (m): m is string => typeof m === "string" && m.trim().length > 0
      )
      .map((m) => m.trim());
    if (list.length > 0) return list;
  }
  const out: string[] = [];
  if (o.defaultModel?.trim()) {
    out.push(o.defaultModel.trim());
  }
  const fb = o.fallbackModel?.trim();
  if (fb && fb !== out[0]) {
    out.push(fb);
  }
  return out;
}

export function normalizeLocale(locale: string): string {
  const normalized = locale.trim();
  if (normalized.includes("-")) {
    const parts = normalized.split("-");
    if (parts.length === 2) {
      return `${parts[0].toLowerCase()}-${parts[1].toUpperCase()}`;
    }
  }
  return normalized.toLowerCase();
}

/**
 * Split a CLI/config value into locale codes (commas and/or ASCII whitespace).
 * Each token is passed through {@link normalizeLocale}; order is preserved, duplicates removed.
 */
export function parseLocaleList(raw: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const parts = raw
    .split(/[\s,]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  for (const part of parts) {
    const n = normalizeLocale(part);
    if (!seen.has(n)) {
      seen.add(n);
      out.push(n);
    }
  }
  return out;
}

type RawPaths = Record<string, unknown>;

function pickSourceFiles(raw: RawPaths): string[] | undefined {
  const a = raw.sourceFiles;
  const b = raw["source-files"];
  if (Array.isArray(a) && a.every((x) => typeof x === "string")) {
    return a as string[];
  }
  if (Array.isArray(b) && b.every((x) => typeof x === "string")) {
    return b as string[];
  }
  return undefined;
}

function pickLogFolder(raw: RawPaths): string | undefined {
  const a = raw.logFolder;
  const b = raw["log-folder"];
  if (typeof a === "string" && a.trim()) return a.trim();
  if (typeof b === "string" && b.trim()) return b.trim();
  return undefined;
}

/**
 * Resolve target locale codes and optional display names (from ui-languages.json or inline array).
 */
export function resolveLocales(
  targets: unknown,
  sourceLocale: string,
  configDir: string
): LocaleResolution {
  const srcNorm = normalizeLocale(sourceLocale);
  const displayNames: Record<string, string> = {};

  function setName(code: string, name: string) {
    const c = normalizeLocale(code);
    if (!c) return;
    const label = name.trim() || c;
    if (!displayNames[c]) {
      displayNames[c] = label;
    }
  }

  if (Array.isArray(targets) && targets.every((x) => typeof x === "string")) {
    const t = [...new Set((targets as string[]).map(normalizeLocale))].filter(
      (c) => c !== srcNorm
    );
    for (const c of t) {
      setName(c, c);
    }
    const sorted = t.sort();
    const allLanguages: Array<{ code: string; label: string }> = [
      { code: srcNorm, label: displayNames[srcNorm] ?? srcNorm },
      ...sorted.map((c) => ({ code: c, label: displayNames[c] ?? c })),
    ];
    return { targets: sorted, displayNames, allLanguages };
  }

  if (typeof targets === "string" && targets.trim().length > 0) {
    const targetsPath = path.isAbsolute(targets)
      ? targets
      : path.resolve(configDir, targets);
    if (!fs.existsSync(targetsPath)) {
      throw new Error(`Locale targets file not found: ${targetsPath}`);
    }
    const raw = JSON.parse(fs.readFileSync(targetsPath, "utf-8")) as unknown;
    if (!Array.isArray(raw)) {
      throw new Error(`Locale targets file must be a JSON array: ${targetsPath}`);
    }

    const targetList: string[] = [];
    const seen = new Set<string>();
    const allLanguages: Array<{ code: string; label: string }> = [];

    for (const row of raw) {
      if (!row || typeof row !== "object") continue;
      const r = row as {
        code?: unknown;
        englishName?: unknown;
        label?: unknown;
      };
      const codeRaw = typeof r.code === "string" ? r.code : "";
      if (!codeRaw.trim()) continue;
      const code = normalizeLocale(codeRaw);
      const label =
        typeof r.label === "string" && r.label.trim()
          ? r.label.trim()
          : typeof r.englishName === "string" && r.englishName.trim()
            ? r.englishName.trim()
            : code;
      const name =
        typeof r.englishName === "string" && r.englishName.trim()
          ? r.englishName.trim()
          : typeof r.label === "string" && r.label.trim()
            ? r.label.trim()
            : code;
      setName(code, name);
      allLanguages.push({ code, label });
      if (code !== srcNorm && !seen.has(code)) {
        seen.add(code);
        targetList.push(code);
      }
    }
    return { targets: targetList, displayNames, allLanguages };
  }

  return { targets: [], displayNames: {} };
}

export function loadConfig(configPath?: string): TranslationConfig {
  const resolvedPath = configPath || path.join(process.cwd(), "translate.config.json");

  if (!fs.existsSync(resolvedPath)) {
    console.warn(`Config file not found at ${resolvedPath}, using defaults`);
    return DEFAULT_CONFIG;
  }

  try {
    const fileContent = fs.readFileSync(resolvedPath, "utf-8");
    const userConfig = JSON.parse(fileContent) as Record<string, unknown>;
    const configDir = path.dirname(path.resolve(resolvedPath));

    const rawPaths = (userConfig.paths ?? {}) as RawPaths;
    const glossary =
      (typeof rawPaths.glossary === "string" && rawPaths.glossary) ||
      (typeof rawPaths["ui-glossary"] === "string" && rawPaths["ui-glossary"]) ||
      DEFAULT_CONFIG.paths.glossary;
    const glossaryUser =
      (typeof rawPaths.glossaryUser === "string" && rawPaths.glossaryUser) ||
      (typeof rawPaths["user-glossary"] === "string" && rawPaths["user-glossary"]) ||
      DEFAULT_CONFIG.paths.glossaryUser;

    const sourceLocale =
      typeof userConfig.locales === "object" &&
      userConfig.locales !== null &&
      "source" in userConfig.locales &&
      typeof (userConfig.locales as { source?: unknown }).source === "string"
        ? (userConfig.locales as { source: string }).source
        : DEFAULT_CONFIG.locales.source;

    const targetsRaw =
      typeof userConfig.locales === "object" &&
      userConfig.locales !== null &&
      "targets" in userConfig.locales &&
      (userConfig.locales as { targets?: unknown }).targets !== undefined
        ? (userConfig.locales as { targets: unknown }).targets
        : [];

    const { targets, displayNames, allLanguages } = resolveLocales(
      targetsRaw,
      sourceLocale,
      configDir
    );

    const rawLangList = userConfig["language-list-block"] as
      | Record<string, unknown>
      | undefined;
    const languageListBlock =
      rawLangList &&
      typeof rawLangList.start === "string" &&
      typeof rawLangList.end === "string" &&
      typeof rawLangList.separator === "string"
        ? {
            start: rawLangList.start,
            end: rawLangList.end,
            separator: rawLangList.separator,
          }
        : undefined;

    const rawAdjustments = userConfig["additional-adjustments"] as
      | Record<string, unknown>
      | undefined;
    const additionalAdjustments: TranslationConfig["additional-adjustments"] =
      {};
    if (rawAdjustments && typeof rawAdjustments === "object") {
      for (const [key, val] of Object.entries(rawAdjustments)) {
        if (!val || typeof val !== "object") continue;
        const r = val as { search?: unknown; replace?: unknown };
        if (typeof r.search === "string" && typeof r.replace === "string") {
          additionalAdjustments[key] = {
            search: r.search,
            replace: r.replace,
          };
        }
      }
    }

    return {
      batchSize: (userConfig.batchSize as number) ?? DEFAULT_CONFIG.batchSize,
      maxBatchChars:
        (userConfig.maxBatchChars as number) ?? DEFAULT_CONFIG.maxBatchChars,
      concurrency:
        (userConfig.concurrency as number) ?? DEFAULT_CONFIG.concurrency,
      batchConcurrency:
        (userConfig.batchConcurrency as number) ??
        DEFAULT_CONFIG.batchConcurrency,
      openrouter: {
        ...DEFAULT_CONFIG.openrouter,
        ...(userConfig.openrouter as TranslationConfig["openrouter"]),
      },
      locales: {
        source: sourceLocale,
        targets,
        displayNames,
        allLanguages,
      },
      ...(languageListBlock
        ? { "language-list-block": languageListBlock }
        : {}),
      ...(Object.keys(additionalAdjustments).length > 0
        ? { "additional-adjustments": additionalAdjustments }
        : {}),
      paths: {
        ...DEFAULT_CONFIG.paths,
        ...(userConfig.paths as TranslationConfig["paths"]),
        glossary,
        glossaryUser,
        sourceFiles: pickSourceFiles(rawPaths),
        logFolder: pickLogFolder(rawPaths) ?? DEFAULT_CONFIG.paths.logFolder,
      },
      cache: {
        ...DEFAULT_CONFIG.cache,
        ...(userConfig.cache as TranslationConfig["cache"]),
      },
    };
  } catch (error) {
    throw new Error(`Failed to parse config file: ${error}`);
  }
}

export function validateConfig(config: TranslationConfig): void {
  if (!process.env.OPENROUTER_API_KEY) {
    throw new Error("OPENROUTER_API_KEY environment variable is required");
  }

  if (!fs.existsSync(config.paths.docs)) {
    throw new Error(`Docs directory not found: ${config.paths.docs}`);
  }

  if (
    config.paths.jsonSource &&
    !fs.existsSync(config.paths.jsonSource)
  ) {
    throw new Error(`JSON source directory not found: ${config.paths.jsonSource}`);
  }

  const models = resolveTranslationModels(config.openrouter);
  if (models.length === 0) {
    throw new Error(
      "openrouter.translationModels (non-empty array), or legacy defaultModel, is required"
    );
  }

  if (!fs.existsSync(config.paths.glossary)) {
    console.warn(`Glossary file not found: ${config.paths.glossary}`);
  }
  if (config.paths.glossaryUser && !fs.existsSync(config.paths.glossaryUser)) {
    console.warn(`User glossary file not found: ${config.paths.glossaryUser}`);
  }
}
