import { useMemo } from "react";
import { useAppContext } from "../contexts/AppContext";
import {
  ALL_CONTENT_LANGUAGE_NAMES,
  isPredefinedContentLanguage,
} from "../utils/misc/languageConstants";

/**
 * Returns topLanguages from config and allLanguages (predefined + custom from top).
 * Used by LanguageSelector and TransformPromptEditor so they don't need these as props.
 */
export function useContentLanguageLists() {
  const { topLanguages = [] } = useAppContext();

  const allLanguages = useMemo(() => {
    const selectedSet = new Set(topLanguages);
    const customLangs = Array.from(selectedSet).filter(
      (lang) => !isPredefinedContentLanguage(lang),
    );
    return [...ALL_CONTENT_LANGUAGE_NAMES, ...customLangs].sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }),
    );
  }, [topLanguages]);

  return { topLanguages, allLanguages };
}
