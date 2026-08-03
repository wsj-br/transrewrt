/**
 * Locale list for Starlight / Astro.
 * Keep in sync with website/ai-i18n-tools.config.json → targetLocales
 * and website/src/i18n/ui-languages.json (via `pnpm run i18n:locales`).
 *
 * Starlight route/folder keys are lowercase (`pt-br`, `zh-hans`) because the
 * content loader lowercases entry IDs. BCP-47 tags stay in `lang` (and in
 * flat UI bundles / screenshot folders as `pt-BR`, `zh-Hans`).
 * English (UK) uses the special `root` key (no URL prefix).
 */

export const SOURCE_LOCALE = 'en-GB';

/** BCP-47 target locales — mirrored from ai-i18n-tools.config.json (A–Z by English name). */
export const TARGET_LOCALES = [
  'ar',
  'zh-Hans',
  'zh-Hant',
  'cs',
  'nl',
  'fr',
  'de',
  'el',
  'hi',
  'hu',
  'it',
  'ja',
  'ko',
  'fa',
  'pl',
  'pt-BR',
  'ro',
  'ru',
  'sk',
  'es',
  'sv',
  'th',
  'tr',
  'uk',
  'vi',
];

/** Starlight URL / content-folder segment for a BCP-47 code. */
export function toStarlightLocaleKey(code) {
  return String(code).trim().toLowerCase();
}

/**
 * Starlight built-in UI dictionaries use `zh-CN` / `zh-TW` (not `zh-Hans` /
 * `zh-Hant`). Route folders stay lowercase BCP-47 (`zh-hans`); only `lang`
 * is remapped so TOC chrome and other UI strings resolve.
 */
export function toStarlightUiLang(code) {
  if (code === 'zh-Hans') return 'zh-CN';
  if (code === 'zh-Hant') return 'zh-TW';
  return code;
}

const RTL = new Set(['ar', 'fa']);

const LABELS = {
  'en-GB': 'English (UK)',
  'pt-BR': 'Português (Brasil)',
  ar: 'العربية',
  'zh-Hans': '简体中文',
  'zh-Hant': '繁體中文',
  cs: 'Čeština',
  nl: 'Nederlands',
  hi: 'हिन्दी',
  fr: 'Français',
  de: 'Deutsch',
  el: 'Ελληνικά',
  hu: 'Magyar',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  fa: 'فارسی',
  pl: 'Polski',
  ro: 'Română',
  ru: 'Русский',
  sk: 'Slovenčina',
  es: 'Español',
  sv: 'Svenska',
  th: 'ไทย',
  tr: 'Türkçe',
  uk: 'Українська',
  vi: 'Tiếng Việt',
};

/** Starlight `locales` config object (lowercase keys, BCP-47 `lang`). */
export const starlightLocales = {
  root: {
    label: LABELS['en-GB'],
    lang: SOURCE_LOCALE,
  },
  ...Object.fromEntries(
    TARGET_LOCALES.map((code) => [
      toStarlightLocaleKey(code),
      {
        label: LABELS[code] ?? code,
        lang: toStarlightUiLang(code),
        ...(RTL.has(code) ? { dir: 'rtl' } : {}),
      },
    ]),
  ),
};

/** Seed list for marketing LanguagePicker (en-GB first). Prefer ui-languages.json at runtime. */
export const ALL_LOCALES = [
  { code: SOURCE_LOCALE, label: LABELS['en-GB'], route: 'root', dir: 'ltr' },
  ...TARGET_LOCALES.map((code) => ({
    code,
    label: LABELS[code] ?? code,
    route: toStarlightLocaleKey(code),
    dir: RTL.has(code) ? 'rtl' : 'ltr',
  })),
];
