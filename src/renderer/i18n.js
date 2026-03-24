import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uiLanguages from './locales/ui-languages.json';

/**
 * Language codes (ISO 639-1 or 639-3) that use a right-to-left script.
 * Covers Arabic script (ar, fa, ur, ps, sd, ug, …), Hebrew (he, yi), Syriac (syr, aii, cld),
 * Thaana (dv), Adlam (ff), N'Ko (nqo), Hanifi Rohingya (rhg). Used to set document dir.
 * 
 * see: https://www.w3.org/International/questions/qa-scripts.en.html for more information.
 */
const RTL_LANGS = new Set([
  'ar', 'he', 'fa', 'ur', 'yi',   // Arabic script (core) + Hebrew
  'ps', 'sd', 'ug',                // Arabic script: Pashto, Sindhi, Uyghur
  'dv',                            // Thaana: Dhivehi
  'ff',                            // Adlam: Fulah
  'syr', 'aii', 'cld',             // Syriac script
  'rhg', 'nqo',                    // Hanifi Rohingya, N'Ko
]);

/**
 * @param {string} [lng] - i18n language code (e.g. 'ar', 'fa-IR')
 * @returns {'ltr' | 'rtl'}
 */
export function getTextDirection(lng) {
  const base = (lng && lng.split(/[-_]/)[0]) || '';
  return RTL_LANGS.has(base) ? 'rtl' : 'ltr';
}

function applyDirection(lng) {
  const dir = getTextDirection(lng);
  if (typeof document !== 'undefined' && document.documentElement) {
    document.documentElement.setAttribute('dir', dir);
  }
}

i18n.use(initReactI18next).init({
  resources: {},
  lng: 'en-GB',
  fallbackLng: 'en-GB',
  parseMissingKeyHandler: (key) => key,
  interpolation: { escapeValue: false },
  // Keys can contain colons (e.g. "Sample:"); disable namespace separator so they are not split
  nsSeparator: false,
});

// Normalize lookup key: extract-strings.js stores keys trimmed, so t("Label ") must resolve like t("Label")
const originalT = i18n.t.bind(i18n);
i18n.t = function (key, ...rest) {
  const normalizedKey = typeof key === 'string' ? key.trim() : key;
  return originalT(normalizedKey, ...rest);
};

i18n.on('languageChanged', (lng) => applyDirection(lng));
applyDirection(i18n.language);

const localeLoaders = Object.fromEntries(
  uiLanguages
    .filter(({ code }) => code !== 'en' && code !== 'en-GB')
    .map(({ code }) => [code, () => import(`./locales/${code}.json`)])
);

/**
 * Load a non-English locale bundle dynamically. UK English (en-GB) uses keys as-is (key-as-default); no file.
 * @param {string} lang - Language code (e.g. 'pt-BR', 'de'). No-op if 'en' or 'en-GB'.
 */
export async function loadLocale(lang) {
  if (lang === 'en' || lang === 'en-GB') return;
  const loader = localeLoaders[lang];
  if (!loader) {
    console.warn('[i18n] locale not supported:', lang);
    return;
  }
  try {
    const module = await loader();
    const data = module.default || module;
    i18n.addResourceBundle(lang, 'translation', data, true, true);
  } catch (e) {
    console.warn('[i18n] locale not found:', lang, e.message);
  }
}

export default i18n;
