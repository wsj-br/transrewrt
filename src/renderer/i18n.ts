import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uiLanguages from './locales/ui-languages.json';
import stringsJson from './locales/strings.json';
import {
  defaultI18nInitOptions,
  setupKeyAsDefaultT,
  makeLoadLocale,
  makeLocaleLoadersFromManifest,
  applyDirection,
} from 'ai-i18n-tools/runtime';

/** Must match `sourceLocale` in ai-i18n-tools.config.json */
export const SOURCE_LOCALE = 'en-GB';

void i18n.use(initReactI18next).init(defaultI18nInitOptions(SOURCE_LOCALE));

setupKeyAsDefaultT(i18n, { stringsJson });

i18n.on('languageChanged', applyDirection);
applyDirection(i18n.language);

const localeLoaders = makeLocaleLoadersFromManifest(
  uiLanguages,
  SOURCE_LOCALE,
  (code) => () => import(`./locales/${code}.json`),
);

export const loadLocale = makeLoadLocale(i18n, localeLoaders, SOURCE_LOCALE);
export default i18n;
