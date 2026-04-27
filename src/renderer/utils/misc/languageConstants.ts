/**
 * Content language helpers derived from UI_LANGUAGES (single source of truth in constants.js).
 */

import { UI_LANGUAGES } from "../../constants";

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

/**
 * Find UI language entry by English name or by BCP 47 code (so stored "most used" or legacy code values display consistently).
 * @param {string} value - English name (e.g. "French") or code (e.g. "fr")
 * @returns {{ code: string, label: string, englishName: string } | undefined}
 */
export function findUILanguageEntry(value) {
  if (!value || typeof value !== "string") return undefined;
  return (
    UI_LANGUAGES.find((l) => l.englishName === value) ??
    UI_LANGUAGES.find((l) => l.code === value)
  );
}
