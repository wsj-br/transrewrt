import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import configManager from "../utils/config/configManager";
import apiService from "../services/apiService";
import webAPI from "../utils/api/webApiClient";
import * as sessionExpiredHandler from "../utils/misc/sessionExpiredHandler";
import { FREE_MODEL_ID, UI_LANGUAGES } from "../constants";
import { useCostTracking } from "../hooks/useCostTracking";
import { useModelManagement } from "../hooks/useModelManagement";
import i18n, { loadLocale } from "../i18n";

// Create the context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [settings, setSettings] = useState(configManager.getAll());

  const [allModels, setAllModels] = useState([]);
  const [availableModels, setAvailableModels] = useState(
    configManager.get("available_models") || [],
  );
  const [topLanguages, setTopLanguages] = useState(() =>
    configManager.get("top_languages") || [],
  );
  const [loading, setLoading] = useState(false);
  const [configLoading, setConfigLoading] = useState(true);
  const [error, setError] = useState(null);
  const [needsLogin, setNeedsLogin] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);
  const [apiKeyStatus, setApiKeyStatus] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // Web mode: any 401 from API triggers login modal via this callback
  useEffect(() => {
    const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;
    if (!isWeb) return;
    sessionExpiredHandler.register(() => {
      setNeedsLogin(true);
      setSessionExpired(true);
    });
    return () => sessionExpiredHandler.register(null);
  }, []);

  // Watch for changes in settings.top_languages and update topLanguages state
  useEffect(() => {
    setTopLanguages(settings.top_languages || []);
  }, [settings.top_languages]);

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

        let rawLangs = configManager.get("top_languages");
        if (!rawLangs?.length && configManager.get("available_languages")?.length) {
          rawLangs = configManager.get("available_languages");
          configManager.set("top_languages", rawLangs);
        }
        if (rawLangs && rawLangs.length > 0) {
          setTopLanguages(rawLangs);
        } else {
          const loadedLanguages = UI_LANGUAGES.map((l) => l.englishName);
          setTopLanguages(loadedLanguages);
          configManager.set("top_languages", loadedLanguages);
        }

        setSettings(configManager.getAll());
      } catch (err) {
        setError("Failed to load languages");
        console.error(err);
      }
    };

    const init = async () => {
      setConfigLoading(true);
      try {
        await configManager.loadConfig();
        loadLanguages();
        const uiLocale = configManager.get("ui_locale") || "en-GB";
        await loadLocale(uiLocale);
        i18n.changeLanguage(uiLocale);
        const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;
        if (isWeb) {
          if (webAPI.checkAuth) {
            try {
              const auth = await webAPI.checkAuth();
              if (auth && auth.ok) {
                setCurrentUser({
                  username: auth.username,
                  role: auth.role || "user",
                  mustChangePassword: auth.mustChangePassword,
                });
              }
            } catch (e) {
              if (e && e.status === 401) {
                setNeedsLogin(true);
                setSessionExpired(true);
              }
            }
          }
          if (webAPI.getApiStatus) {
            const status = await webAPI.getApiStatus();
            setApiKeyStatus(status);
          }
        }
      } catch (err) {
        if (err && err.status === 401) {
          setNeedsLogin(true);
          setSessionExpired(true);
        } else {
          setError("Failed to load config");
          console.error(err);
        }
      } finally {
        setConfigLoading(false);
      }
    };

    init();

    // Listen for settings updates from other windows (Electron only)
    let settingsCallback = null;
    if (window.electronAPI && window.electronAPI.onSettingsUpdated) {
      settingsCallback = () => {
        configManager.loadConfig().then(async () => {
          setSettings(configManager.getAll());
          setAvailableModels(configManager.get("available_models") || []);
          const rawLangs = configManager.get("top_languages") || [];
          setTopLanguages(rawLangs);
          apiService.setBaseUrl(
            configManager.get("api_url") || "https://openrouter.ai/api/v1",
          );
          const uiLocale = configManager.get("ui_locale") || "en-GB";
          await loadLocale(uiLocale);
          i18n.changeLanguage(uiLocale);
        });
      };
      window.electronAPI.onSettingsUpdated(settingsCallback);
    }

    return () => {
      if (window.electronAPI?.removeSettingsUpdated && settingsCallback) {
        window.electronAPI.removeSettingsUpdated(settingsCallback);
      }
    };
  }, []);

  // --- Settings persistence pattern ---
  // setSetting(key, value): persist a single key; use for form fields and discrete updates (e.g. last_used_model, settings_active_tab).
  // updateSettings({ ... }): persist multiple keys at once; use when batching related changes (e.g. language + mode from the same UI).
  // Both update React state and notify other windows (Electron). Prefer setSetting for single-key updates to avoid overwriting other keys.
  const updateSettings = async (newSettings) => {
    await configManager.setAll(newSettings);
    const updatedSettings = configManager.getAll();
    setSettings(updatedSettings);

    // Update the API service base URL when settings change
    apiService.setBaseUrl(
      updatedSettings.api_url || "https://openrouter.ai/api/v1",
    );
    
    // Update topLanguages state if top_languages changed
    if (newSettings.top_languages !== undefined) {
      setTopLanguages(newSettings.top_languages || []);
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
    
    // Update topLanguages state when top_languages changes
    if (key === "top_languages") {
      // Create a new array reference to ensure React detects the change
      const newLangs = Array.isArray(value) ? [...value] : (value || []);
      setTopLanguages(newLangs);
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

  const { writeLastApiResult, logApiCall, applyCostToResult } = useCostTracking();
  const { removeModelFromList, isUnavailableModelError, handleUnavailableModel } = useModelManagement(
    configManager,
    setSetting,
    setError
  );

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

      result.model_used = result.model || model;
      await applyCostToResult(setSetting, result);

      await writeLastApiResult({
        type: "translate",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });

      logApiCall("translate", result, {
        source_lang: sourceLang || "",
        target_lang: targetLang || "",
      });

      // Log to cost DB / server: include selected target language for this run
      const translatePayload = {
        timestamp: new Date().toISOString(),
        type: "translate",
        model: result.model_used || model,
        source_lang: sourceLang || null,
        target_lang: targetLang || null,
        rewrite_style: null,
        request_bytes: result.request_bytes ?? null,
        response_bytes: result.response_bytes ?? null,
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        tps: (() => {
          const totalTokens = (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
          const durationSec = result.duration_ms ? result.duration_ms / 1000 : 0;
          return durationSec > 0 ? totalTokens / durationSec : null;
        })(),
        username: currentUser?.username ?? null,
      };
      if (typeof window !== "undefined" && window.electronAPI?.logApiCall) {
        window.electronAPI.logApiCall(translatePayload).catch((err) => console.warn("[Electron] appDb log failed:", err));
      }
      if (typeof window !== "undefined" && !window.electronAPI?.getConfig && webAPI.logApiCall) {
        webAPI.logApiCall(translatePayload);
      }

      return result;
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      if (isUnavailableModelError(err)) {
        return await handleUnavailableModel(model);
      }
      setError("Translation failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Translate prompt fields (JSON object in one request; same prompt style as generate-translations)
  const translatePromptFields = async (fieldsObject, targetLang, model, signal = null) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiService.translatePromptFieldsJson(fieldsObject, targetLang, model, signal);
      if (result.error) return result;
      result.model_used = result.model || model;
      await applyCostToResult(setSetting, result);
      await writeLastApiResult({
        type: "translate-prompt",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });
      logApiCall("translate-prompt", result, { target_lang: targetLang || "" });
      const payload = {
        timestamp: new Date().toISOString(),
        type: "transform",
        model: result.model_used || model,
        target_lang: targetLang || null,
        transform_prompt: "Translate prompt (button)",
        request_bytes: result.request_bytes ?? null,
        response_bytes: result.response_bytes ?? null,
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        username: currentUser?.username ?? null,
      };
      if (typeof window !== "undefined" && window.electronAPI?.logApiCall) {
        window.electronAPI.logApiCall(payload).catch((err) => console.warn("[Electron] appDb log failed:", err));
      }
      if (typeof window !== "undefined" && !window.electronAPI?.getConfig && webAPI.logApiCall) {
        webAPI.logApiCall(payload);
      }
      return result;
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      if (isUnavailableModelError(err)) {
        return await handleUnavailableModel(model);
      }
      setError("Translation failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Improve prompt config (role, instructions, temperature) via model; returns improved JSON
  const improvePromptConfig = async (configObject, model, signal = null) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiService.improvePromptConfigJson(configObject, model, signal);
      if (result.error) return result;
      result.model_used = result.model || model;
      await applyCostToResult(setSetting, result);
      await writeLastApiResult({
        type: "improve-prompt-config",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });
      logApiCall("improve-prompt-config", result, {});
      const payload = {
        timestamp: new Date().toISOString(),
        type: "transform",
        model: result.model_used || model,
        target_lang: null,
        transform_prompt: "Improve prompt (button)",
        request_bytes: result.request_bytes ?? null,
        response_bytes: result.response_bytes ?? null,
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        username: currentUser?.username ?? null,
      };
      if (typeof window !== "undefined" && window.electronAPI?.logApiCall) {
        window.electronAPI.logApiCall(payload).catch((err) => console.warn("[Electron] appDb log failed:", err));
      }
      if (typeof window !== "undefined" && !window.electronAPI?.getConfig && webAPI.logApiCall) {
        webAPI.logApiCall(payload);
      }
      return result;
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      if (isUnavailableModelError(err)) {
        return await handleUnavailableModel(model);
      }
      setError("Improve prompt config failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Generate prompt config from user description; returns JSON with name, prompt_instructions, role, instructions, output_description, temperature
  const generatePromptConfig = async (userDescription, model, signal = null) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiService.generatePromptConfigJson(userDescription, model, signal);
      if (result.error) return result;
      result.model_used = result.model || model;
      await applyCostToResult(setSetting, result);
      await writeLastApiResult({
        type: "generate-prompt-config",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });
      logApiCall("generate-prompt-config", result, {});
      const payload = {
        timestamp: new Date().toISOString(),
        type: "transform",
        model: result.model_used || model,
        target_lang: null,
        transform_prompt: "Generate prompt (button)",
        request_bytes: result.request_bytes ?? null,
        response_bytes: result.response_bytes ?? null,
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        username: currentUser?.username ?? null,
      };
      if (typeof window !== "undefined" && window.electronAPI?.logApiCall) {
        window.electronAPI.logApiCall(payload).catch((err) => console.warn("[Electron] appDb log failed:", err));
      }
      if (typeof window !== "undefined" && !window.electronAPI?.getConfig && webAPI.logApiCall) {
        webAPI.logApiCall(payload);
      }
      return result;
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      if (isUnavailableModelError(err)) {
        return await handleUnavailableModel(model);
      }
      setError("Generate prompt config failed");
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

      result.model_used = result.model || model;
      await applyCostToResult(setSetting, result);

      await writeLastApiResult({
        type: "rewrite",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });

      logApiCall("rewrite", result, { rewrite_style: style || "" });

      const rewritePayload = {
        timestamp: new Date().toISOString(),
        type: "rewrite",
        model: result.model_used || model,
        source_lang: null,
        target_lang: null,
        rewrite_style: style || null,
        request_bytes: result.request_bytes ?? null,
        response_bytes: result.response_bytes ?? null,
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        tps: (() => {
          const totalTokens = (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
          const durationSec = result.duration_ms ? result.duration_ms / 1000 : 0;
          return durationSec > 0 ? totalTokens / durationSec : null;
        })(),
        username: currentUser?.username ?? null,
      };
      if (typeof window !== "undefined" && window.electronAPI?.logApiCall) {
        window.electronAPI.logApiCall(rewritePayload).catch((err) => console.warn("[Electron] appDb log failed:", err));
      }
      if (typeof window !== "undefined" && !window.electronAPI?.getConfig && webAPI.logApiCall) {
        webAPI.logApiCall(rewritePayload);
      }

      return result;
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      if (isUnavailableModelError(err)) {
        return await handleUnavailableModel(model);
      }
      setError("Rewrite failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Transform text with custom prompt (cost tracking: same as translate/rewrite — updates total_cost for Settings > Cost tracking)
  const transform = async (text, promptConfig, model, targetLang = null, signal = null) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiService.transform(text, promptConfig, model, targetLang, signal);

      result.model_used = result.model || model;
      await applyCostToResult(setSetting, result);

      await writeLastApiResult({
        type: "transform",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });

      logApiCall("transform", result, {
        transform_prompt: promptConfig?.name ?? "",
        target_lang: targetLang ?? null,
      });

      // Log to cost DB / server: include selected target language for this run
      const transformPayload = {
        timestamp: new Date().toISOString(),
        type: "transform",
        model: result.model_used || model,
        source_lang: null,
        target_lang: targetLang ?? null,
        rewrite_style: null,
        transform_prompt: promptConfig?.name ?? null,
        request_bytes: result.request_bytes ?? null,
        response_bytes: result.response_bytes ?? null,
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        tps: (() => {
          const totalTokens = (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
          const durationSec = result.duration_ms ? result.duration_ms / 1000 : 0;
          return durationSec > 0 ? totalTokens / durationSec : null;
        })(),
        username: currentUser?.username ?? null,
      };
      if (typeof window !== "undefined" && window.electronAPI?.logApiCall) {
        window.electronAPI.logApiCall(transformPayload).catch((err) => console.warn("[Electron] appDb log failed:", err));
      }
      if (typeof window !== "undefined" && !window.electronAPI?.getConfig && webAPI.logApiCall) {
        webAPI.logApiCall(transformPayload);
      }

      return result;
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      if (isUnavailableModelError(err)) {
        return await handleUnavailableModel(model);
      }
      setError("Transform failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const handleWebLogin = (userInfo) => {
    const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;
    if (!isWeb) return;
    setCurrentUser(userInfo);
    setNeedsLogin(false);
    setSessionExpired(false);
    setError(null);
    if (typeof window !== "undefined" && window.history?.replaceState) {
      window.history.replaceState(window.history.state, "", window.location.href);
    }
    configManager.loadConfig().then(() => setSettings(configManager.getAll()));
    if (webAPI.getApiStatus) {
      webAPI.getApiStatus().then((status) => setApiKeyStatus(status));
    }
  };

  const handleWebLogout = async () => {
    const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;
    if (!isWeb) return;
    await webAPI.logout();
    setCurrentUser(null);
    setNeedsLogin(true);
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
      if (err && err.status === 401) setNeedsLogin(true);
      console.error("Failed to fetch models:", err);
      setError("Failed to fetch models");
      return [];
    }
  };

  // Electron: set currentUser from OS username (no login in Electron)
  React.useEffect(() => {
    if (typeof window === "undefined" || !window.electronAPI?.getOsUsername) return;
    window.electronAPI.getOsUsername().then((name) => {
      setCurrentUser({
        username: name || "User",
        role: "admin",
        mustChangePassword: false,
      });
    }).catch(() => {
      setCurrentUser({ username: "User", role: "admin", mustChangePassword: false });
    });
  }, []);

  const contextValue = {
    settings,
    models: availableModels,
    allModels,
    availableModels,
    topLanguages,
    loading,
    configLoading,
    error,
    setError,
    needsLogin,
    setNeedsLogin,
    sessionExpired,
    currentUser,
    handleWebLogin,
    handleWebLogout,
    apiKeyStatus,
    updateSettings,
    setSetting,
    translate,
    translatePromptFields,
    improvePromptConfig,
    generatePromptConfig,
    rewrite,
    transform,
    fetchModels,
    removeModelFromList,
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
