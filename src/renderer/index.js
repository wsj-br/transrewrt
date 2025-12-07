import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import SettingsDialog from "./components/SettingsDialog";
import AppContext, { AppProvider } from "./contexts/AppContext";

// Check query params for routing
const urlParams = new URLSearchParams(window.location.search);
const isSettingsWindow = urlParams.get("window") === "settings";

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  if (isSettingsWindow) {
    // Add specific class for window-specific styling
    document.body.classList.add("settings-window");

    root.render(
      <React.StrictMode>
        <AppProvider>
          {/* We render SettingsDialog directly, passing isOpen=true and dummy onClose (or one that closes window) */}
          <SettingsPage />
        </AppProvider>
      </React.StrictMode>,
    );
  } else {
    root.render(
      <React.StrictMode>
        <AppProvider>
          <App />
        </AppProvider>
      </React.StrictMode>,
    );
  }
});

// A wrapper component for Settings in independent mode
const SettingsPage = () => {
  // We can use a simplified version of SettingsDialog or just the same component with specific props
  // We need to handle 'close' by closing the window
  return (
    <div className="settings-page-container">
      <AppWrapperForDialog />
    </div>
  );
};

const AppWrapperForDialog = () => {
  const { settings } = useContext(AppContext);
  if (!settings) return null;

  return (
    <SettingsDialog
      isOpen={true}
      onClose={() => window.close()}
      isStandalone={true}
    />
  );
};
