import React, { createContext, useContext, useState, useEffect } from "react";
import configManager from "../utils/configManager";
import apiService from "../services/apiService";

// Create the context
const AppContext = createContext();

// Model pricing (price per 1K tokens)
const MODEL_PRICING = {
  "gpt-3.5-turbo": { input: 0.001, output: 0.002 },
  "gpt-4": { input: 0.03, output: 0.06 },
  "claude-2": { input: 0.008, output: 0.024 },
  "claude-instant-1": { input: 0.0008, output: 0.0024 },
  // Default fallback pricing
  default: { input: 0.01, output: 0.02 },
};

// Calculate cost based on model and token usage
const calculateCost = (model, promptTokens, completionTokens) => {
  const pricing = MODEL_PRICING[model] || MODEL_PRICING.default;
  const inputCost = (promptTokens / 1000) * pricing.input;
  const outputCost = (completionTokens / 1000) * pricing.output;
  return inputCost + outputCost;
};

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

  // Load models and languages on startup
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Set the API base URL from settings
        const currentSettings = configManager.getAll();
        apiService.setBaseUrl(
          currentSettings.api_url || "https://openrouter.ai/api/v1",
        );

        const [loadedModels, loadedLanguages] = await Promise.all([
          apiService.getModels(),
          apiService.getLanguages(),
        ]);

        if (loadedModels && loadedModels.length > 0) {
          setAllModels(loadedModels);

          // If no available models are configured, select all by default
          const currentAvailable = configManager.get("available_models");
          if (!currentAvailable || currentAvailable.length === 0) {
            const allIds = loadedModels.map((m) => m.id);
            setAvailableModels(allIds);
            configManager.set("available_models", allIds);
          }
        }

        if (loadedLanguages && loadedLanguages.length > 0) {
          setLanguages(loadedLanguages);
          // If no available languages are configured, select all (or don't overwrite user choice)
          // The python code defaults to all if empty?
          const currentLangs = configManager.get("available_languages");
          if (!currentLangs || currentLangs.length === 0) {
            configManager.set("available_languages", loadedLanguages);
          }
        }

        // Update settings state
        setSettings(configManager.getAll());
      } catch (err) {
        setError("Failed to load models and languages");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // Listen for settings updates from other windows
    if (window.electronAPI && window.electronAPI.onSettingsUpdated) {
      window.electronAPI.onSettingsUpdated(() => {
        // Reload config without triggering a full re-render of everything if possible?
        // Actually we want to re-render settings dependent values.
        configManager.loadConfig(); // Force reload from file/localstorage
        setSettings(configManager.getAll());

        // Also refresh models/availability if that changed
        setAvailableModels(configManager.get("available_models") || []);
        
        // Also refresh languages if that changed
        setLanguages(configManager.get("available_languages") || []);

        // Update API base URL just in case
        apiService.setBaseUrl(
          configManager.get("api_url") || "https://openrouter.ai/api/v1",
        );
      });
    }
  }, []);

  // Expose calculateCost function for use elsewhere
  const getCalculateCost = () => calculateCost;

  const computeCostFromUsage = (modelId, promptTokens, completionTokens) => {
    const pricing =
      allModels.find((m) => m.id === modelId)?.pricing ||
      settings.cached_models?.find((m) => m.id === modelId)?.pricing;
    const promptRate = parseFloat(pricing?.prompt ?? 0);
    const completionRate = parseFloat(pricing?.completion ?? 0);
    if (promptRate || completionRate) {
      return promptTokens * promptRate + completionTokens * completionRate;
    }
    // If pricing is missing, treat as free (avoid default/fallback pricing).
    return 0;
  };

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
  const updateSettings = (newSettings) => {
    configManager.setAll(newSettings);
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
  const setSetting = (key, value) => {
    configManager.set(key, value);
    const updatedSettings = configManager.getAll();
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
      
      // Notify other windows about the settings update
      if (window.electronAPI && window.electronAPI.notifySettingsUpdated) {
        window.electronAPI.notifySettingsUpdated();
      }
    }
    
    // Update availableModels state when available_models changes
    if (key === "available_models") {
      // Create a new array reference to ensure React detects the change
      const newModels = Array.isArray(value) ? [...value] : (value || []);
      setAvailableModels(newModels);
      
      // Notify other windows about the settings update
      if (window.electronAPI && window.electronAPI.notifySettingsUpdated) {
        window.electronAPI.notifySettingsUpdated();
      }
    }
  };

  // Translate text
  const translate = async (text, targetLang, model, sourceLang = null) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiService.translate(
        text,
        targetLang,
        model,
        sourceLang,
      );

      // Update last used model
      // Do not overwrite last_used_model here; it is persisted via user selection in the header.

      // Update total cost if applicable
      if (result.usage) {
        const { prompt_tokens = 0, completion_tokens = 0 } = result.usage;
        const calculatedCost = computeCostFromUsage(
          model,
          prompt_tokens,
          completion_tokens,
        );
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
      setError("Translation failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Rewrite text
  const rewrite = async (text, style, model) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiService.rewrite(text, style, model);

      // Update last used model
      // Do not overwrite last_used_model here; it is persisted via user selection in the header.

      // Update total cost if applicable
      if (result.usage) {
        const { prompt_tokens = 0, completion_tokens = 0 } = result.usage;
        const calculatedCost = computeCostFromUsage(
          model,
          prompt_tokens,
          completion_tokens,
        );
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
      setError("Rewrite failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
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
    calculateCost: getCalculateCost(),
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
