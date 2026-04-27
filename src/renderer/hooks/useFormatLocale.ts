import { useTranslation } from "react-i18next";

/** Returns the current UI locale (i18n.language) for use with Intl formatters. */
export function useFormatLocale() {
  const { i18n } = useTranslation();
  return i18n.language || "en-GB";
}
