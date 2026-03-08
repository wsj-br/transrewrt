import "./i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import { FluentProvider, webDarkTheme } from "@fluentui/react-components";
import App from "./components/App";
import { AppProvider } from "./contexts/AppContext";

// Store root reference for HMR
let root = null;

// Function to initialize the app
const initializeApp = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    return;
  }

  // Reuse existing root if available, otherwise create new one
  if (!root) {
    root = ReactDOM.createRoot(rootElement);
  }

  // Use dark theme for Windows 11 look
  const theme = webDarkTheme;

  root.render(
    <React.StrictMode>
      <FluentProvider theme={theme}>
        <AppProvider>
          <App />
        </AppProvider>
      </FluentProvider>
    </React.StrictMode>,
  );
};

// Check if DOM is already loaded, otherwise wait for it
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  // DOM is already loaded, initialize immediately
  initializeApp();
}

// Enable Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  
  // React Fast Refresh will handle component updates automatically
  // This ensures the HMR runtime is active
}
