import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import configManager from "../utils/configManager";
import apiService from "../services/apiService";
import { ALL_AVAILABLE_LANGUAGES } from "../utils/languageConstants";

// Create the context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [settings, setSettings] = useState(configManager.getAll());

  const [allModels, setAllModels] = useState([]);
  const [availableModels, setAvailableModels] = useState(
    configManager.get("available_models") || [],
  );
  const [languages, setLanguages] = useState(
    configManager.get("available_languages") || [],
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Watch for changes in settings.available_languages and update languages state
  useEffect(() => {
    const currentLangs = settings.available_languages || [];
    // Always update to ensure we have the latest from settings
    // Create a new array reference to trigger re-renders
    setLanguages([...currentLangs]);
  }, [settings.available_languages]);

  // Watch for changes in settings.available_models and update availableModels state
  useEffect(() => {
    const currentModels = settings.available_models || [];
    // Always update to ensure we have the latest from settings
    // Create a new array reference to trigger re-renders
    setAvailableModels([...currentModels]);
  }, [settings.available_models]);

  // Load config and languages on startup (models are loaded when Settings opens)
  useEffect(() => {
    const loadLanguages = () => {
      try {
        const currentSettings = configManager.getAll();
        apiService.setBaseUrl(
          currentSettings.api_url || "https://openrouter.ai/api/v1",
        );

        const currentLangs = configManager.get("available_languages");
        if (currentLangs && currentLangs.length > 0) {
          setLanguages(currentLangs);
        } else {
          const loadedLanguages = ALL_AVAILABLE_LANGUAGES;
          if (loadedLanguages && loadedLanguages.length > 0) {
            setLanguages(loadedLanguages);
            configManager.set("available_languages", loadedLanguages);
          }
        }

        setSettings(configManager.getAll());
      } catch (err) {
        setError("Failed to load languages");
        console.error(err);
      }
    };

    const init = async () => {
      await configManager.loadConfig();
      loadLanguages();
    };

    init();

    // Listen for settings updates from other windows (Electron only)
    if (window.electronAPI && window.electronAPI.onSettingsUpdated) {
      window.electronAPI.onSettingsUpdated(() => {
        configManager.loadConfig().then(() => {
          setSettings(configManager.getAll());
          setAvailableModels(configManager.get("available_models") || []);
          setLanguages(configManager.get("available_languages") || []);
          apiService.setBaseUrl(
            configManager.get("api_url") || "https://openrouter.ai/api/v1",
          );
        });
      });
    }
  }, []);

  const writeLastApiResult = (payload) => {
    try {
      const electronRequire =
        typeof window !== "undefined" && window.require ? window.require : null;
      if (!electronRequire) return;
      const fs = electronRequire("fs");
      const path = electronRequire("path");
      const filePath = path.join(process.cwd(), "last_api_result.json");
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), "utf8");
    } catch (err) {
      console.error("Failed to write last_api_result.json", err);
    }
  };

  // Update settings
  const updateSettings = async (newSettings) => {
    await configManager.setAll(newSettings);
    const updatedSettings = configManager.getAll();
    setSettings(updatedSettings);

    // Update the API service base URL when settings change
    apiService.setBaseUrl(
      updatedSettings.api_url || "https://openrouter.ai/api/v1",
    );
    
    // Update languages state if available_languages changed
    if (newSettings.available_languages !== undefined) {
      setLanguages(newSettings.available_languages || []);
    }
    
    // Update availableModels state if available_models changed
    if (newSettings.available_models !== undefined) {
      setAvailableModels(newSettings.available_models || []);
    }
  };

  // Update a single setting
  const setSetting = async (key, value) => {
    await configManager.set(key, value);
    // Ensure we get a fresh copy of all settings to trigger React re-render
    // Use JSON parse/stringify to ensure deep copy and new reference
    const allSettings = configManager.getAll();
    const updatedSettings = JSON.parse(JSON.stringify(allSettings));
    setSettings(updatedSettings);

    // Update the API service base URL when settings change
    if (key === "api_url") {
      apiService.setBaseUrl(value || "https://openrouter.ai/api/v1");
    }
    
    // Update languages state when available_languages changes
    if (key === "available_languages") {
      // Create a new array reference to ensure React detects the change
      const newLanguages = Array.isArray(value) ? [...value] : (value || []);
      setLanguages(newLanguages);
    }
    
    // Update availableModels state when available_models changes
    if (key === "available_models") {
      // Create a new array reference to ensure React detects the change
      const newModels = Array.isArray(value) ? [...value] : (value || []);
      setAvailableModels(newModels);
    }
    
    // Notify other windows about the settings update (for all settings)
    if (window.electronAPI && window.electronAPI.notifySettingsUpdated) {
      window.electronAPI.notifySettingsUpdated();
    }
  };

  // Translate text
  const translate = async (text, targetLang, model, sourceLang = null, signal = null) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiService.translate(
        text,
        targetLang,
        model,
        sourceLang,
        signal,
      );

      // Update last used model
      // Do not overwrite last_used_model here; it is persisted via user selection in the header.

      // Update total cost if applicable
      if (result.usage) {
        const calculatedCost = result.usage.cost || 0;
        const newTotalCost = (settings.total_cost || 0) + calculatedCost;
        setSetting("total_cost", newTotalCost);
        result.calculated_cost = calculatedCost;
        result.total_cost = newTotalCost;
      }

      result.model_used = result.model || model;

      writeLastApiResult({
        type: "translate",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });

      return result;
    } catch (err) {
      if (err.name === "AbortError") throw err;
      setError("Translation failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Rewrite text
  const rewrite = async (text, style, model, signal = null) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiService.rewrite(text, style, model, signal);

      // Update last used model
      // Do not overwrite last_used_model here; it is persisted via user selection in the header.

      // Update total cost if applicable
      if (result.usage) {
        const calculatedCost = result.usage.cost || 0;
        const newTotalCost = (settings.total_cost || 0) + calculatedCost;
        setSetting("total_cost", newTotalCost);
        result.calculated_cost = calculatedCost;
        result.total_cost = newTotalCost;
      }

      result.model_used = result.model || model;

      writeLastApiResult({
        type: "rewrite",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });

      return result;
    } catch (err) {
      if (err.name === "AbortError") throw err;
      setError("Rewrite failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Fetch models from API (called when Settings opens)
  const fetchModels = async () => {
    try {
      // Set the API base URL from settings
      const currentSettings = configManager.getAll();
      apiService.setBaseUrl(
        currentSettings.api_url || "https://openrouter.ai/api/v1",
      );

      const loadedModels = await apiService.getModels();

      if (loadedModels && loadedModels.length > 0) {
        const loadedModelIds = new Set(loadedModels.map(m => m.id));

        // Get current selections
        const currentSelected = configManager.get("available_models") || [];
        const selectedSet = new Set(currentSelected);

        // Filter out any selected models that are no longer available
        const invalidModels = Array.from(selectedSet).filter(id => !loadedModelIds.has(id));
        if (invalidModels.length > 0) {
          console.warn(`[fetchModels] Removing ${invalidModels.length} deprecated models from selection:`, invalidModels);
          selectedSet.clear();
          // Re-add only valid models
          currentSelected.forEach(id => {
            if (loadedModelIds.has(id)) {
              selectedSet.add(id);
            }
          });
          // Save the updated selection
          configManager.set("available_models", Array.from(selectedSet));
        }

        // Always ensure "openrouter/free" is available
        const FREE_MODEL_ID = "openrouter/free";
        if (!loadedModelIds.has(FREE_MODEL_ID)) {
          console.log(`[fetchModels] Adding special model "${FREE_MODEL_ID}" to the model list`);
          loadedModels.push({
            id: FREE_MODEL_ID,
            name: "OpenRouter Free",
            top_provider: "openrouter",
            pricing: { prompt: 0, completion: 0 },
          });
        }

        // Ensure "openrouter/free" is always selected
        selectedSet.add(FREE_MODEL_ID);

        setAllModels(loadedModels);

        // Update available models with the synchronized selection (always includes free model)
        const validAvailableModels = Array.from(selectedSet);
        setAvailableModels(validAvailableModels);
        configManager.set("available_models", validAvailableModels);

        // Update settings state to reflect the change
        setSettings(configManager.getAll());

        // Also validate the last_used_model
        const lastUsed = settings.last_used_model;
        if (lastUsed && !loadedModelIds.has(lastUsed) && lastUsed !== FREE_MODEL_ID) {
          console.warn(`[fetchModels] Last used model "${lastUsed}" is no longer available. Resetting to free model.`);
          setSetting("last_used_model", FREE_MODEL_ID);
        } else if (!lastUsed) {
          // If no last_used_model set, default to free model
          setSetting("last_used_model", FREE_MODEL_ID);
        }
      }

      return loadedModels || [];
    } catch (err) {
      console.error("Failed to fetch models:", err);
      setError("Failed to fetch models");
      return [];
    }
  };

  // Context value
  const contextValue = {
    settings,
    models: availableModels, // Expose user selected models as 'models' for backward compat
    allModels, // Expose full list for settings
    availableModels,
    languages,
    loading,
    error,
    updateSettings,
    setSetting,
    translate,
    rewrite,
    fetchModels, // Function to fetch models from API
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// Hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppContext;
