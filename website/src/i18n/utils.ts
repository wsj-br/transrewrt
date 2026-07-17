import { resolveUiLanguage } from './locale';
import type { TranslateFn } from './t';

/** BCP-47 code from `ui-languages.json` for the active locale. */
export function resolvePageLocale(astroLocale: string | undefined): string {
  return resolveUiLanguage(astroLocale).code;
}

/** Returns the bound `t` for the active locale (Astro i18n recipe helper). */
export function useTranslations(_lang: string, t: TranslateFn): TranslateFn {
  return t;
}
