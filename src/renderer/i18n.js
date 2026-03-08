import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/** Language codes that use right-to-left script (e.g. Arabic, Hebrew). */
const RTL_LANGS = new Set(['ar', 'he', 'fa', 'ur', 'yi']);

function applyDirection(lng) {
  const base = (lng && lng.split(/[-_]/)[0]) || '';
  const dir = RTL_LANGS.has(base) ? 'rtl' : 'ltr';
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
});

i18n.on('languageChanged', (lng) => applyDirection(lng));
applyDirection(i18n.language);

const localeLoaders = {
  'pt-BR': () => import('./locales/pt-BR.json'),
  de: () => import('./locales/de.json'),
  fr: () => import('./locales/fr.json'),
  es: () => import('./locales/es.json'),
  ar: () => import('./locales/ar.json'),
  bn: () => import('./locales/bn.json'),
  nl: () => import('./locales/nl.json'),
  'en-US': () => import('./locales/en-US.json'),
  hi: () => import('./locales/hi.json'),
  it: () => import('./locales/it.json'),
  ja: () => import('./locales/ja.json'),
  jv: () => import('./locales/jv.json'),
  ms: () => import('./locales/ms.json'),
  'zh-CN': () => import('./locales/zh-CN.json'),
  pl: () => import('./locales/pl.json'),
  pt: () => import('./locales/pt.json'),
  pa: () => import('./locales/pa.json'),
  ro: () => import('./locales/ro.json'),
  ru: () => import('./locales/ru.json'),
  te: () => import('./locales/te.json'),
  uk: () => import('./locales/uk.json'),
  wuu: () => import('./locales/wuu.json'),
};

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
