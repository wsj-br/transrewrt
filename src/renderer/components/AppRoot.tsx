import { useEffect } from "react";
import App from "./App";
import { AppProvider } from "../contexts/AppContext";
import { useDirection } from "../hooks/useDirection";
import { UiLanguageProvider } from "../hooks/useUiLanguage";

export default function AppRoot() {
  const dir = useDirection();

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <UiLanguageProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </UiLanguageProvider>
  );
}
