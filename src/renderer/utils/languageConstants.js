/**
 * Content language helpers derived from UI_LANGUAGES (single source of truth in constants.js).
 */

import { UI_LANGUAGES } from "../constants";

/** Sorted list of predefined content language names (English). */
export const ALL_CONTENT_LANGUAGE_NAMES = [...UI_LANGUAGES]
  .map((l) => l.englishName)
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }));

/**
 * @param {string} name - English language name
 * @returns {boolean}
 */
export function isPredefinedContentLanguage(name) {
  return UI_LANGUAGES.some((l) => l.englishName === name);
}

/**
 * @param {string} name - English language name
 * @returns {string|undefined} BCP 47 code or undefined
 */
export function codeFromEnglishName(name) {
  return UI_LANGUAGES.find((l) => l.englishName === name)?.code;
}
