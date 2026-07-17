import { resolveUiLanguage } from './locale';
import stringsCatalog from './strings.json';

export type TranslateFn = (source: string) => string;

type StringsEntry = {
  source: string;
  translated?: Record<string, string>;
};

/**
 * Resolve `t('English source')` via flat `{locale}.json` from `translate-ui`.
 * Keys are the source-locale string literals (same as in `strings.json` entries).
 */
export function makeT(flat: Record<string, string>): TranslateFn {
  return (source: string) => {
    const translated = flat[source];
    return typeof translated === 'string' && translated.trim() !== '' ? translated : source;
  };
}

/** Build a flat source→translation map from the committed `strings.json` catalog. */
function flatFromCatalog(code: string): Record<string, string> {
  const flat: Record<string, string> = {};
  for (const entry of Object.values(stringsCatalog as Record<string, StringsEntry>)) {
    const translated = entry.translated?.[code];
    if (typeof translated === 'string' && translated.trim() !== '') {
      flat[entry.source] = translated;
    }
  }
  return flat;
}

/**
 * Load flat UI bundle for a locale (SSG: resolved at build time).
 *
 * Uses `strings.json` (committed) rather than `locales/*.json` (gitignored
 * generate-on-translate output), so CI/GitHub Pages builds get translations.
 */
export async function loadFlatBundle(
  astroLocale: string | undefined,
): Promise<Record<string, string>> {
  const { code, isSourceLocale } = resolveUiLanguage(astroLocale);
  if (isSourceLocale) {
    return {};
  }
  return flatFromCatalog(code);
}
