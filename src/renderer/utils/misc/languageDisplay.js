/**
 * Display label for a UI language (header/Settings): English name first, then local name (label) when different.
 * Uses " / " to avoid nested parentheses (e.g. "Portuguese (BR) / Português (BR)").
 * @param {{ code: string, label: string, englishName: string }} lang - Entry from UI_LANGUAGES
 * @param {(key: string) => string} t - i18n translate function (unused for UI list; native label is used)
 * @returns {string}
 */
export function getUILanguageLabel(lang, t) {
  const englishName = lang.englishName ?? lang.label;
  if (lang.label === englishName) return lang.label;
  return `${englishName} / ${lang.label}`;
}
