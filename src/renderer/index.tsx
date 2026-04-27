import "./i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoot from "./components/AppRoot";

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

  root.render(
    <React.StrictMode>
      <AppRoot />
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
