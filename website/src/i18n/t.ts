import { resolveUiLanguage } from './locale';

export type TranslateFn = (source: string) => string;

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

const bundleModules = import.meta.glob<{ default: Record<string, string> }>(
  './locales/*.json',
);

function bundlePathForCode(code: string): string {
  return `./locales/${code}.json`;
}

/** Load flat UI bundle for a locale (SSG: resolved at build time). */
export async function loadFlatBundle(
  astroLocale: string | undefined,
): Promise<Record<string, string>> {
  const { code, isSourceLocale } = resolveUiLanguage(astroLocale);
  if (isSourceLocale) {
    return {};
  }
  const loader = bundleModules[bundlePathForCode(code)];
  if (!loader) {
    return {};
  }
  const mod = await loader();
  return mod.default ?? {};
}
