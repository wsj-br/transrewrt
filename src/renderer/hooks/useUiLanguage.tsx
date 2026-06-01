import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import i18n, { loadLocale } from "../i18n";

const UiLanguageContext = createContext("en-GB");

/** Subscribe at the app root so the full tree re-renders when the UI locale changes. */
export function UiLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState(() => i18n.language || "en-GB");

  useEffect(() => {
    const sync = () => {
      setLanguage(i18n.language || "en-GB");
    };
    i18n.on("languageChanged", sync);
    i18n.on("loaded", sync);
    return () => {
      i18n.off("languageChanged", sync);
      i18n.off("loaded", sync);
    };
  }, []);

  return (
    <UiLanguageContext.Provider value={language}>
      {children}
    </UiLanguageContext.Provider>
  );
}

/** Active UI locale; updates when `languageChanged` / `loaded` fire. */
export function useUiLanguage(): string {
  return useContext(UiLanguageContext);
}

/** Load bundle (if needed) and switch i18n language; always await before updating UI/config. */
export async function setUiLanguage(code: string): Promise<void> {
  if (!code) return;
  await loadLocale(code);
  await i18n.changeLanguage(code);
}
