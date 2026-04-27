import { useState, useEffect } from "react";
import { getTextDirection } from "ai-i18n-tools/runtime";
import i18n from "../i18n";

/**
 * Current UI text direction from the active i18n language (FluentProvider + document).
 * @returns {'ltr' | 'rtl'}
 */
export function useDirection() {
  const [dir, setDir] = useState(() => getTextDirection(i18n.language));

  useEffect(() => {
    const handler = (lng) => {
      setDir(getTextDirection(lng));
    };
    i18n.on("languageChanged", handler);
    return () => {
      i18n.off("languageChanged", handler);
    };
  }, []);

  return dir;
}
