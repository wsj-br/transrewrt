/**
 * Display label for a content language: English name, then t(englishName) when different.
 * Uses " / " to avoid nested parentheses (e.g. "Portuguese (BR) / Português (BR)").
 * @param {{ code: string, label: string, englishName: string }} lang - Entry from UI_LANGUAGES
 * @param {(key: string) => string} t - i18n translate function (locale translations for language names)
 * @returns {string}
 */
export function getUILanguageLabel(lang, t) {
  const englishName = lang.englishName ?? lang.label;
  const translated = t(englishName);
  if (translated === englishName) return englishName;
  return `${englishName} / ${translated}`;
}

/**
 * Display label using the native label from UI_LANGUAGES (no i18n).
 * Used for the header UI language selector: "englishName / label" when different, else englishName.
 * @param {{ code: string, label: string, englishName: string }} lang - Entry from UI_LANGUAGES
 * @returns {string}
 */
export function getUILanguageLabelNative(lang) {
  const englishName = lang.englishName ?? lang.label;
  if (lang.label === englishName) return lang.label;
  return `${englishName} / ${lang.label}`;
}
