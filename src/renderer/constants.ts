/** Default web admin credentials (first-login message, etc.). Server (appDb, auth) must use matching values. */
export const DEFAULT_ADMIN_USERNAME = "admin";
export const DEFAULT_ADMIN_PASSWORD = "transrewrt26";

/** Model ID for the free tier model; kept in the catalog when OpenRouter is available, but optional in the selected list. */
export const FREE_MODEL_ID = "openrouter/openrouter/free";

/** Remote Easy-mode presets catalog (this repo). Used by Electron IPC and web server auto-update. */
export const PRESETS_REMOTE_URL =
  "https://raw.githubusercontent.com/wsj-br/transrewrt/refs/heads/main/easy-mode-config/presets.json";

/** True when running in web/Docker mode (no Electron). */
export const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

/** UI language options for interface language selector (Settings and header globe). Each has code, native label, and English name. Source: locales/ui-languages.json */
import uiLanguages from "./locales/ui-languages.json";

export type UiLanguageEntry = {
  code: string;
  label: string;
  englishName: string;
  direction: "ltr" | "rtl";
  isSourceLocale?: boolean;
};

export const UI_LANGUAGES = [...(uiLanguages as UiLanguageEntry[])].sort((a, b) => {
  if (a.isSourceLocale && !b.isSourceLocale) return -1;
  if (!a.isSourceLocale && b.isSourceLocale) return 1;
  return a.englishName.localeCompare(b.englishName, "en", { sensitivity: "base" });
});

/** Value keys for rewrite modes (used for persistence/API). */
export const REWRITE_MODE_KEYS = [
  "Check Spelling & Grammar",
  "Improve Clarity",
  "Alternative versions",
  "Shorten",
  "Expand",
  "Make Formal",
  "Make Informal",
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
    { value: "Alternative versions", label: t("Alternative versions") },
    { value: "Shorten", label: t("Shorten") },
    { value: "Expand", label: t("Expand") },
    { value: "Make Formal", label: t("Make Formal") },
    { value: "Make Informal", label: t("Make Informal") },
    { value: "Make Technical", label: t("Make Technical") },
  ];
}
