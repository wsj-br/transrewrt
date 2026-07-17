import uiLanguages from './ui-languages.json';

export type UiLanguageRow = (typeof uiLanguages)[number];

/** Canonical key aligning route segments with manifest BCP-47 codes. */
function canonicalLocaleKey(code: string): string {
  return code.trim().toLowerCase();
}

/**
 * URL / Starlight folder segment for a locale.
 * Lowercase so paths match Starlight content IDs (`pt-br`, `zh-hans`).
 */
export function toRouteLocale(code: string): string {
  const row = resolveUiLanguage(code);
  if (row.isSourceLocale) {
    return 'root';
  }
  return canonicalLocaleKey(row.code);
}

/** Homepage path for a UI language code (`/` for the source locale). */
export function homePathForLocale(code: string): string {
  const row = resolveUiLanguage(code);
  if (row.isSourceLocale) {
    return '/';
  }
  return `/${toRouteLocale(row.code)}/`;
}

/** Row from `ui-languages.json` for the active locale (falls back to source). */
export function resolveUiLanguage(locale: string | undefined): UiLanguageRow {
  const key = canonicalLocaleKey(locale ?? 'en-GB');
  const row = uiLanguages.find((entry) => canonicalLocaleKey(entry.code) === key);
  if (row) {
    return row;
  }
  return uiLanguages.find((entry) => entry.isSourceLocale) ?? uiLanguages[0]!;
}

/** Source locale first, then A–Z by `englishName`. */
export function sortLanguagesByEnglishName<T extends { englishName: string; isSourceLocale?: boolean }>(
  languages: readonly T[],
): T[] {
  return [...languages].sort((a, b) => {
    if (a.isSourceLocale && !b.isSourceLocale) return -1;
    if (!a.isSourceLocale && b.isSourceLocale) return 1;
    return a.englishName.localeCompare(b.englishName, 'en', { sensitivity: 'base' });
  });
}
