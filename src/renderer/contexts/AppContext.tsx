import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import configManager from "../utils/config/configManager";
import apiService from "../services/apiService";
import webAPI from "../utils/api/webApiClient";
import * as sessionExpiredHandler from "../utils/misc/sessionExpiredHandler";
import { FREE_MODEL_ID, UI_LANGUAGES } from "../constants";
import { getTextStats } from "../utils/misc/formatUtils";
import { useCostTracking } from "../hooks/useCostTracking";
import { useModelManagement } from "../hooks/useModelManagement";
import i18n, { loadLocale } from "../i18n";
import { preloadProviderIcons } from "../components/ProviderIcon";
import { loadSkillsFile, updateSkillsFromRemoteElectron } from "../utils/skills/skillsManager";
import { listConfiguredEasyEngines, pickDefaultEasyProvider } from "../utils/skills/configuredEasyEngines";
import {
  resolveExperienceMode,
  type EasyEngineId,
} from "../utils/skills/easyProviderConstants";
import {
  filterSkillsForEasyProvider,
  resolveEasyRuntime,
} from "../utils/skills/resolveEasySkillModel";

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
  const [skillsCatalog, setSkillsCatalog] = useState([]);

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
        preloadProviderIcons();
        const uiLocale = configManager.get("ui_locale") || "en-GB";
        const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

        const localePromise = loadLocale(uiLocale);
        const authPromise = isWeb && webAPI.checkAuth
          ? webAPI.checkAuth().then(
              (auth) => {
                if (auth && auth.ok) {
                  setCurrentUser({
                    username: auth.username,
                    role: auth.role || "user",
                    mustChangePassword: auth.mustChangePassword,
                  });
                }
              },
              (e) => {
                if (e && e.status === 401) {
                  setNeedsLogin(true);
                  setSessionExpired(true);
                }
              }
            )
          : Promise.resolve();
        const statusPromise =
          isWeb && webAPI.getApiStatus ? webAPI.getApiStatus().then((status) => setApiKeyStatus(status)) : Promise.resolve();

        await Promise.all([localePromise, authPromise, statusPromise]);
        try {
          await updateSkillsFromRemoteElectron();
        } catch (e) {
          console.warn("[skills] remote update:", e);
        }
        try {
          const doc = await loadSkillsFile();
          setSkillsCatalog(doc.skills || []);
        } catch (e) {
          console.warn("[skills] load:", e);
          setSkillsCatalog([]);
        }
        i18n.changeLanguage(uiLocale);
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
          const uiLocale = configManager.get("ui_locale") || "en-GB";
          await loadLocale(uiLocale);
          i18n.changeLanguage(uiLocale);
          try {
            await updateSkillsFromRemoteElectron();
            const doc = await loadSkillsFile();
            setSkillsCatalog(doc.skills || []);
          } catch (e) {
            console.warn("[skills] reload after settings:", e);
          }
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
  // Memoized so consumers can use them in effect deps without triggering infinite persist loops (e.g. App.js sync effects).
  const updateSettings = useCallback(async (newSettings) => {
    await configManager.setAll(newSettings);
    const updatedSettings = configManager.getAll();
    setSettings(updatedSettings);

    if (newSettings.top_languages !== undefined) {
      setTopLanguages(newSettings.top_languages || []);
    }
    if (newSettings.available_models !== undefined) {
      setAvailableModels(newSettings.available_models || []);
    }
  }, []);

  const setSetting = useCallback(async (key, value, options = {}) => {
    const optimistic =
      options.optimistic === true &&
      (key === "last_used_model" ||
        key === "selected_skill_id" ||
        key === "easy_ollama_model");

    if (optimistic) {
      const previousSettings = configManager.getAll();
      configManager.config[key] = value;
      setSettings((prev) => ({ ...prev, [key]: value }));
      configManager.set(key, value).catch((err) => {
        console.error("[AppContext] Failed to persist setting:", err);
        configManager.config[key] = previousSettings[key];
        setSettings(configManager.getAll());
        setError("Failed to save model preference");
      });
      if (window.electronAPI && window.electronAPI.notifySettingsUpdated) {
        window.electronAPI.notifySettingsUpdated();
      }
      return;
    }

    await configManager.set(key, value);
    const allSettings = configManager.getAll();
    const updatedSettings = JSON.parse(JSON.stringify(allSettings));
    setSettings(updatedSettings);

    if (key === "top_languages") {
      const newLangs = Array.isArray(value) ? [...value] : (value || []);
      setTopLanguages(newLangs);
    }
    if (key === "available_models") {
      const newModels = Array.isArray(value) ? [...value] : (value || []);
      setAvailableModels(newModels);
    }
    if (window.electronAPI && window.electronAPI.notifySettingsUpdated) {
      window.electronAPI.notifySettingsUpdated();
    }
  }, []);

  const refreshSkillsCatalog = useCallback(async () => {
    try {
      await updateSkillsFromRemoteElectron();
      const doc = await loadSkillsFile();
      setSkillsCatalog(doc.skills || []);
    } catch (e) {
      console.warn("[skills] refresh failed:", e);
      setSkillsCatalog([]);
    }
  }, []);

  const { writeLastApiResult, logApiCall, applyCostToResult } = useCostTracking();
  const { removeModelFromList, isUnavailableModelError, handleUnavailableModel } = useModelManagement(
    configManager,
    setSetting,
    setError
  );

  const isWebRuntime =
    typeof window !== "undefined" && !window.electronAPI?.getConfig;
  const serverConfiguredEngines = useMemo(() => {
    if (!isWebRuntime) return null;
    const arr = apiKeyStatus?.configuredEngines;
    return Array.isArray(arr) ? arr : [];
  }, [isWebRuntime, apiKeyStatus]);

  const experienceMode = resolveExperienceMode(settings.mode as string | undefined);
  const easyProvider = (settings.easy_provider as EasyEngineId | undefined) || null;

  const easySkills = useMemo(() => {
    if (experienceMode !== "easy" || !easyProvider || easyProvider === "ollama") {
      return [];
    }
    return filterSkillsForEasyProvider(skillsCatalog, easyProvider);
  }, [experienceMode, easyProvider, skillsCatalog]);

  const ollamaEasyModels = useMemo(
    () => allModels.filter((m) => String(m.id || "").startsWith("ollama/")).map((m) => m.id),
    [allModels],
  );

  const resolveSkillRuntime = useCallback(() => {
    return resolveEasyRuntime({
      mode: settings.mode,
      easyProvider: settings.easy_provider as string | undefined,
      easyOllamaModel: settings.easy_ollama_model as string | undefined,
      selectedSkillId: settings.selected_skill_id,
      skills: skillsCatalog,
    });
  }, [
    settings.mode,
    settings.easy_provider,
    settings.easy_ollama_model,
    settings.selected_skill_id,
    skillsCatalog,
  ]);

  useEffect(() => {
    if (configLoading) return;
    if (settings.mode === "advanced") return;
    if (settings.mode !== "easy") {
      setSetting("mode", "easy");
    }
  }, [configLoading, settings.mode, setSetting]);

  useEffect(() => {
    if (experienceMode === "advanced") return;
    const next = pickDefaultEasyProvider(settings, serverConfiguredEngines);
    if (!next) return;
    if (settings.easy_provider !== next) {
      setSetting("easy_provider", next);
    }
  }, [experienceMode, settings, setSetting, serverConfiguredEngines]);

  useEffect(() => {
    if (experienceMode === "advanced") return;
    if (easyProvider !== "ollama") return;
    if (ollamaEasyModels.length === 0) return;
    const current = (settings.easy_ollama_model || "").trim();
    if (current && ollamaEasyModels.includes(current)) return;
    setSetting("easy_ollama_model", ollamaEasyModels[0]);
  }, [
    experienceMode,
    easyProvider,
    ollamaEasyModels,
    settings.easy_ollama_model,
    setSetting,
  ]);

  useEffect(() => {
    if (experienceMode === "advanced") return;
    if (easyProvider === "ollama") return;
    if (!easySkills.length) return;
    const id = settings.selected_skill_id;
    const valid = id && easySkills.some((s) => s.id === id);
    if (valid) return;
    setSetting("selected_skill_id", easySkills[0].id);
  }, [experienceMode, easyProvider, settings.selected_skill_id, easySkills, setSetting]);

  // Translate text
  const translate = async (text, targetLang, model, sourceLang = null, signal = null) => {
    setLoading(true);
    setError(null);

    const { effectiveModel: skillModel, promptHint, fromSkillCatalog } = resolveSkillRuntime();
    const effectiveModel = skillModel ?? model;

    try {
      const result = await apiService.translate(
        text,
        targetLang,
        effectiveModel,
        sourceLang,
        signal,
        promptHint,
      );

      result.model_used = result.model || effectiveModel;
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
      const translateInputStats = getTextStats(typeof text === "string" ? text : "");
      const translateOutputStats = getTextStats(result.content ?? "");
      const translatePayload = {
        timestamp: new Date().toISOString(),
        type: "translate",
        model: result.model_used || effectiveModel,
        prompt_tokens: result.usage?.prompt_tokens ?? (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens: result.usage?.completion_tokens ?? (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        tps: (() => {
          const totalTokens = (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
          const durationSec = result.duration_ms ? result.duration_ms / 1000 : 0;
          return durationSec > 0 ? totalTokens / durationSec : null;
        })(),
        username: currentUser?.username ?? null,
        input_chars: translateInputStats.chars,
        input_words: translateInputStats.words,
        input_paragraphs: translateInputStats.paragraphs,
        output_chars: translateOutputStats.chars,
        output_words: translateOutputStats.words,
        output_paragraphs: translateOutputStats.paragraphs,
      };
      if (settings.keep_execution_history !== false) {
        translatePayload.input_text = typeof text === "string" ? text : "";
        translatePayload.output_text = result.content ?? "";
      }
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
        if (fromSkillCatalog) {
          setError(
            i18n.t(
              "The provider rejected this skill's model (missing, invalid, or not allowed). Try another skill, or switch to Advanced mode to pick a different model.",
            ),
          );
          return { error: err.message };
        }
        return await handleUnavailableModel(effectiveModel);
      }
      setError("Translation failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Translate prompt fields (JSON object in one request; same prompt style as ai-i18n-tools translate-ui)
  const translatePromptFields = async (fieldsObject, targetLang, model, signal = null) => {
    setLoading(true);
    setError(null);
    const { effectiveModel: skillModel, fromSkillCatalog } = resolveSkillRuntime();
    const effectiveModel = skillModel ?? model;
    try {
      const result = await apiService.translatePromptFieldsJson(fieldsObject, targetLang, effectiveModel, signal);
      if (result.error) return result;
      result.model_used = result.model || effectiveModel;
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
        model: result.model_used || effectiveModel,
        target_lang: targetLang || null,
        transform_prompt: "Translate prompt (button)",
        prompt_tokens: result.usage?.prompt_tokens ?? (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens: result.usage?.completion_tokens ?? (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
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
        if (fromSkillCatalog) {
          setError(
            i18n.t(
              "The provider rejected this skill's model (missing, invalid, or not allowed). Try another skill, or switch to Advanced mode to pick a different model.",
            ),
          );
          return { error: err.message };
        }
        return await handleUnavailableModel(effectiveModel);
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
    const { effectiveModel: skillModel, fromSkillCatalog } = resolveSkillRuntime();
    const effectiveModel = skillModel ?? model;
    try {
      const result = await apiService.improvePromptConfigJson(configObject, effectiveModel, signal);
      if (result.error) return result;
      result.model_used = result.model || effectiveModel;
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
        model: result.model_used || effectiveModel,
        target_lang: null,
        transform_prompt: "Improve prompt (button)",
        prompt_tokens: result.usage?.prompt_tokens ?? (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens: result.usage?.completion_tokens ?? (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
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
        if (fromSkillCatalog) {
          setError(
            i18n.t(
              "The provider rejected this skill's model (missing, invalid, or not allowed). Try another skill, or switch to Advanced mode to pick a different model.",
            ),
          );
          return { error: err.message };
        }
        return await handleUnavailableModel(effectiveModel);
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
    const { effectiveModel: skillModel, fromSkillCatalog } = resolveSkillRuntime();
    const effectiveModel = skillModel ?? model;
    try {
      const result = await apiService.generatePromptConfigJson(userDescription, effectiveModel, signal);
      if (result.error) return result;
      result.model_used = result.model || effectiveModel;
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
        model: result.model_used || effectiveModel,
        target_lang: null,
        transform_prompt: "Generate prompt (button)",
        prompt_tokens: result.usage?.prompt_tokens ?? (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens: result.usage?.completion_tokens ?? (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
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
        if (fromSkillCatalog) {
          setError(
            i18n.t(
              "The provider rejected this skill's model (missing, invalid, or not allowed). Try another skill, or switch to Advanced mode to pick a different model.",
            ),
          );
          return { error: err.message };
        }
        return await handleUnavailableModel(effectiveModel);
      }
      setError("Generate prompt config failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Rewrite text
  const rewrite = async (text, mode, model, signal = null, sourceLang = null) => {
    setLoading(true);
    setError(null);

    const { effectiveModel: skillModel, promptHint, fromSkillCatalog } = resolveSkillRuntime();
    const effectiveModel = skillModel ?? model;

    try {
      const result = await apiService.rewrite(text, mode, effectiveModel, signal, sourceLang, promptHint);

      result.model_used = result.model || effectiveModel;
      await applyCostToResult(setSetting, result);

      await writeLastApiResult({
        type: "rewrite",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });

      logApiCall("rewrite", result, { rewrite_mode: mode || "", source_lang: sourceLang || "" });

      const rewriteInputStats = getTextStats(typeof text === "string" ? text : "");
      const rewriteOutputStats = getTextStats(result.content ?? "");
      const rewritePayload = {
        timestamp: new Date().toISOString(),
        type: "rewrite",
        model: result.model_used || effectiveModel,
        source_lang: sourceLang || null,
        target_lang: null,
        rewrite_mode: mode || null,
        prompt_tokens: result.usage?.prompt_tokens ?? (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens: result.usage?.completion_tokens ?? (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        tps: (() => {
          const totalTokens = (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
          const durationSec = result.duration_ms ? result.duration_ms / 1000 : 0;
          return durationSec > 0 ? totalTokens / durationSec : null;
        })(),
        username: currentUser?.username ?? null,
        input_chars: rewriteInputStats.chars,
        input_words: rewriteInputStats.words,
        input_paragraphs: rewriteInputStats.paragraphs,
        output_chars: rewriteOutputStats.chars,
        output_words: rewriteOutputStats.words,
        output_paragraphs: rewriteOutputStats.paragraphs,
      };
      if (settings.keep_execution_history !== false) {
        rewritePayload.input_text = typeof text === "string" ? text : "";
        rewritePayload.output_text = result.content ?? "";
      }
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
        if (fromSkillCatalog) {
          setError(
            i18n.t(
              "The provider rejected this skill's model (missing, invalid, or not allowed). Try another skill, or switch to Advanced mode to pick a different model.",
            ),
          );
          return { error: err.message };
        }
        return await handleUnavailableModel(effectiveModel);
      }
      setError("Rewrite failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Transform text with custom prompt (cost tracking: same as translate/rewrite - updates total_cost for Settings > Cost tracking)
  const transform = async (text, promptConfig, model, signal = null, statedFromLang = null) => {
    setLoading(true);
    setError(null);

    const { effectiveModel: skillModel, promptHint, fromSkillCatalog } = resolveSkillRuntime();
    const effectiveModel = skillModel ?? model;

    try {
      const result = await apiService.transform(
        text,
        promptConfig,
        effectiveModel,
        signal,
        statedFromLang,
        promptHint,
      );

      result.model_used = result.model || effectiveModel;
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
        source_lang: statedFromLang || "",
      });

      // Log to cost DB / server: include From language used in the system prompt when set
      const transformInputStats = getTextStats(typeof text === "string" ? text : "");
      const transformOutputStats = getTextStats(result.content ?? "");
      const transformPayload = {
        timestamp: new Date().toISOString(),
        type: "transform",
        model: result.model_used || effectiveModel,
        source_lang: statedFromLang || null,
        target_lang: null,
        rewrite_mode: null,
        transform_prompt: promptConfig?.name ?? null,
        prompt_tokens: result.usage?.prompt_tokens ?? (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens: result.usage?.completion_tokens ?? (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        tps: (() => {
          const totalTokens = (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
          const durationSec = result.duration_ms ? result.duration_ms / 1000 : 0;
          return durationSec > 0 ? totalTokens / durationSec : null;
        })(),
        username: currentUser?.username ?? null,
        input_chars: transformInputStats.chars,
        input_words: transformInputStats.words,
        input_paragraphs: transformInputStats.paragraphs,
        output_chars: transformOutputStats.chars,
        output_words: transformOutputStats.words,
        output_paragraphs: transformOutputStats.paragraphs,
      };
      if (settings.keep_execution_history !== false) {
        transformPayload.input_text = typeof text === "string" ? text : "";
        transformPayload.output_text = result.content ?? "";
      }
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
        if (fromSkillCatalog) {
          setError(
            i18n.t(
              "The provider rejected this skill's model (missing, invalid, or not allowed). Try another skill, or switch to Advanced mode to pick a different model.",
            ),
          );
          return { error: err.message };
        }
        return await handleUnavailableModel(effectiveModel);
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
    configManager.loadConfig().then(async () => {
      setSettings(configManager.getAll());
      await refreshSkillsCatalog();
    });
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

        // Always ensure free route model is available
        if (!loadedModelIds.has(FREE_MODEL_ID)) {
          console.log(`[fetchModels] Adding special model "${FREE_MODEL_ID}" to the model list`);
          loadedModels.push({
            id: FREE_MODEL_ID,
            name: "OpenRouter Free",
            top_provider: "openrouter",
            pricing: { prompt: 0, completion: 0 },
          });
        }

        // Ensure the free model id is always selected
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

  useEffect(() => {
    if (experienceMode !== "easy" || easyProvider !== "ollama") return;
    if (allModels.length > 0) return;
    fetchModels().catch(() => {});
  }, [experienceMode, easyProvider, allModels.length]);

  // Electron: set currentUser from OS username (no login in Electron)
  useEffect(() => {
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
    skills: easySkills,
    skillsCatalog,
    easyProvider,
    ollamaEasyModels,
    setExperienceMode: (value) => setSetting("mode", value),
    setEasyProvider: (value) => setSetting("easy_provider", value),
    setEasyOllamaModel: (id) => setSetting("easy_ollama_model", id, { optimistic: true }),
    setSelectedSkillId: (id) => setSetting("selected_skill_id", id, { optimistic: true }),
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

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
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
