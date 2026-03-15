/** Default web admin credentials (first-login message, etc.). Server (appDb, auth) must use matching values. */
export const DEFAULT_ADMIN_USERNAME = "admin";
export const DEFAULT_ADMIN_PASSWORD = "transrewrt26";

/** Model ID for the free tier model; always included in the list and cannot be removed. */
export const FREE_MODEL_ID = "openrouter/free";

/** True when running in web/Docker mode (no Electron). */
export const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

/** UI language options for interface language selector (Settings and header globe). Each has code, native label, and English name. Source: locales/ui-languages.json */
import uiLanguages from "./locales/ui-languages.json";
export const UI_LANGUAGES = uiLanguages;

/** Value keys for rewrite modes (used for persistence/API). */
export const REWRITE_MODE_KEYS = [
  "Check Spelling & Grammar",
  "Improve Clarity",
  "Make Formal",
  "Make Informal",
  "Shorten",
  "Expand",
  "Make Technical",
];

/**
 * Returns rewrite mode options with translated labels for dropdowns.
 * @param {(key: string) => string} t - i18n translate function
 * @returns {{ value: string, label: string }[]}
 */
export function getRewriteModeOptions(t) {
  return [
    { value: "Check Spelling & Grammar", label: t("Check Spelling & Grammar") },
    { value: "Improve Clarity", label: t("Improve Clarity") },
    { value: "Make Formal", label: t("Make Formal") },
    { value: "Make Informal", label: t("Make Informal") },
    { value: "Shorten", label: t("Shorten") },
    { value: "Expand", label: t("Expand") },
    { value: "Make Technical", label: t("Make Technical") },
  ];
}
