import { FluentProvider, webDarkTheme } from "@fluentui/react-components";
import App from "./App";
import { AppProvider } from "../contexts/AppContext";
import { useDirection } from "../hooks/useDirection";

const theme = webDarkTheme;

/**
 * Wraps FluentProvider with reactive `dir` from the active UI language (RTL locales).
 */
export default function AppRoot() {
  const dir = useDirection();

  return (
    <FluentProvider theme={theme} dir={dir}>
      <AppProvider>
        <App />
      </AppProvider>
    </FluentProvider>
  );
}
