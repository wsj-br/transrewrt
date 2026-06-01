import { useUiLanguage } from "./useUiLanguage";

/** Returns the current UI locale for use with Intl formatters and `t()` memo deps. */
export function useFormatLocale(): string {
  return useUiLanguage();
}
