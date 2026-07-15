import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import configManager from "../utils/config/configManager";
import apiService from "../services/apiService";
import webAPI from "../utils/api/webApiClient";
import * as sessionExpiredHandler from "../utils/misc/sessionExpiredHandler";
import { FREE_MODEL_ID, UI_LANGUAGES } from "../constants";
import { getTextStats } from "../utils/misc/formatUtils";
import { wordAlternativeDisplayText } from "../utils/misc/wordAlternativeUtils";
import { useCostTracking } from "../hooks/useCostTracking";
import { useModelManagement } from "../hooks/useModelManagement";
import i18n, { loadLocale, SOURCE_LOCALE } from "../i18n";
import { preloadProviderIcons } from "../components/ProviderIcon";
import { loadPresetsFile, loadPresetsRemoteSyncState, syncPresetsFromRemote } from "../utils/presets/presetsManager";
import { pickDefaultEasyProvider } from "../utils/presets/configuredEasyEngines";
import {
  resolveExperienceMode,
  type EasyEngineId,
} from "../utils/presets/easyProviderConstants";
import {
  filterPresetsForEasyProvider,
  resolveEasyRuntime,
} from "../utils/presets/resolveEasyPresetModel";
import { STARTUP_FETCH_MS, STARTUP_SAFETY_MS, withTimeout } from "../utils/misc/startupUtils";
import type { LlmCallResult } from "../types/llm";

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
  const [presetsCatalog, setPresetsCatalog] = useState([]);
  const [presetsFileMeta, setPresetsFileMeta] = useState({ version: "0.0.0", updated_at: "" });
  const [presetsLastCheckedAt, setPresetsLastCheckedAt] = useState(0);
  const [presetsRefreshBusy, setPresetsRefreshBusy] = useState(false);

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
    let cancelled = false;
    const safetyTimer = setTimeout(() => {
      if (!cancelled) {
        console.warn("[AppContext] startup safety timeout — clearing loading screen");
        setConfigLoading(false);
      }
    }, STARTUP_SAFETY_MS);

    const finishLoading = () => {
      if (!cancelled) {
        setConfigLoading(false);
        clearTimeout(safetyTimer);
      }
    };

    const loadLanguages = (persist = true) => {
      try {
        let rawLangs = configManager.get("top_languages") as string[] | undefined;
        const availableLangs = configManager.get("available_languages") as string[] | undefined;
        if (!rawLangs?.length && availableLangs?.length) {
          rawLangs = availableLangs;
          if (persist) {
            configManager.set("top_languages", rawLangs);
          } else {
            configManager.config.top_languages = rawLangs;
          }
        }
        if (rawLangs && rawLangs.length > 0) {
          setTopLanguages(rawLangs);
        } else {
          const loadedLanguages = UI_LANGUAGES.map((l) => l.englishName);
          setTopLanguages(loadedLanguages);
          if (persist) {
            configManager.set("top_languages", loadedLanguages);
          } else {
            configManager.config.top_languages = loadedLanguages;
          }
        }

        setSettings(configManager.getAll());
      } catch (err) {
        setError("Failed to load languages");
        console.error(err);
      }
    };

    const runBackgroundStartup = async (isWeb: boolean, uiLocale: string) => {
      await Promise.allSettled([
        loadLocale(uiLocale).then(() => {
          if (!cancelled) i18n.changeLanguage(uiLocale);
        }),
        isWeb && webAPI.getApiStatus
          ? webAPI.getApiStatus().then((status) => {
              if (!cancelled) setApiKeyStatus(status);
            })
          : Promise.resolve(),
      ]);

      if (cancelled) return;

      const initMode = configManager.get("mode");
      if (resolveExperienceMode(initMode as string | undefined) === "easy") {
        try {
          await withTimeout(syncPresetsFromRemote(), STARTUP_FETCH_MS, "presets sync");
        } catch (e) {
          console.warn("[presets] remote update:", e);
        }
      }
      try {
        const doc = await loadPresetsFile();
        const syncState = await loadPresetsRemoteSyncState();
        if (!cancelled) {
          setPresetsCatalog(doc.presets || []);
          setPresetsFileMeta({ version: doc.version, updated_at: doc.updated_at });
          setPresetsLastCheckedAt(syncState.last_checked_at);
        }
      } catch (e) {
        console.warn("[presets] load:", e);
        if (!cancelled) {
          setPresetsCatalog([]);
          setPresetsFileMeta({ version: "0.0.0", updated_at: "" });
          setPresetsLastCheckedAt(0);
        }
      }
    };

    const init = async () => {
      setConfigLoading(true);
      const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;
      let webAuthed = false;

      try {
        if (isWeb && webAPI.checkAuth) {
          try {
            const auth = await withTimeout(webAPI.checkAuth(), STARTUP_FETCH_MS, "auth check");
            if (cancelled) return;
            if (auth?.ok) {
              webAuthed = true;
              setCurrentUser({
                username: auth.username,
                role: auth.role || "user",
                mustChangePassword: auth.mustChangePassword,
              });
            }
          } catch (e) {
            if (cancelled) return;
            if (e && e.status === 401) {
              setNeedsLogin(true);
              setSessionExpired(true);
              finishLoading();
              return;
            }
            console.warn("[AppContext] auth check failed:", e);
          }
        }

        if (isWeb && !webAuthed) {
          setNeedsLogin(true);
          finishLoading();
          return;
        }

        await withTimeout(configManager.loadConfig(), STARTUP_FETCH_MS, "config load");
        if (cancelled) return;

        loadLanguages(!isWeb || webAuthed);
        preloadProviderIcons();
        const uiLocale = String(configManager.get("ui_locale") || SOURCE_LOCALE);

        finishLoading();
        void runBackgroundStartup(isWeb, uiLocale);
      } catch (err) {
        if (cancelled) return;
        if (err && err.status === 401) {
          setNeedsLogin(true);
          setSessionExpired(true);
        } else {
          setError("Failed to load config");
          console.error(err);
        }
        finishLoading();
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
          const rawLangs = (configManager.get("top_languages") || []) as string[];
          setTopLanguages(rawLangs);
          const uiLocale = String(configManager.get("ui_locale") || SOURCE_LOCALE);
          await loadLocale(uiLocale);
          i18n.changeLanguage(uiLocale);
          const mode = configManager.get("mode");
          if (resolveExperienceMode(mode as string | undefined) === "easy") {
            try {
              await syncPresetsFromRemote();
              const doc = await loadPresetsFile();
              const syncState = await loadPresetsRemoteSyncState();
              setPresetsCatalog(doc.presets || []);
              setPresetsFileMeta({ version: doc.version, updated_at: doc.updated_at });
              setPresetsLastCheckedAt(syncState.last_checked_at);
            } catch (e) {
              console.warn("[presets] reload after settings:", e);
            }
          }
        });
      };
      window.electronAPI.onSettingsUpdated(settingsCallback);
    }

    return () => {
      cancelled = true;
      clearTimeout(safetyTimer);
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

  const applyPresetsFile = useCallback((doc: Awaited<ReturnType<typeof loadPresetsFile>>) => {
    setPresetsCatalog(doc.presets || []);
    setPresetsFileMeta({ version: doc.version, updated_at: doc.updated_at });
  }, []);

  const refreshPresetsCatalog = useCallback(
    async (options: { force?: boolean } = {}) => {
      const mode = configManager.get("mode");
      if (resolveExperienceMode(mode as string | undefined) !== "easy" && !options.force) {
        return;
      }
      setPresetsRefreshBusy(true);
      try {
        const syncResult = await syncPresetsFromRemote(options);
        const doc = await loadPresetsFile();
        applyPresetsFile(doc);
        if (syncResult?.last_checked_at) {
          setPresetsLastCheckedAt(syncResult.last_checked_at);
        } else {
          const syncState = await loadPresetsRemoteSyncState();
          setPresetsLastCheckedAt(syncState.last_checked_at);
        }
      } catch (e) {
        console.warn("[presets] refresh failed:", e);
        try {
          const doc = await loadPresetsFile();
          applyPresetsFile(doc);
          const syncState = await loadPresetsRemoteSyncState();
          setPresetsLastCheckedAt(syncState.last_checked_at);
        } catch {
          setPresetsCatalog([]);
          setPresetsFileMeta({ version: "0.0.0", updated_at: "" });
          setPresetsLastCheckedAt(0);
        }
      } finally {
        setPresetsRefreshBusy(false);
      }
    },
    [applyPresetsFile],
  );

  const setSetting = useCallback(async (key, value, options: { optimistic?: boolean } = {}) => {
    const optimistic =
      options.optimistic === true &&
      (key === "last_used_model" ||
        key === "selected_preset_id" ||
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
    if (key === "mode" && value !== "advanced") {
      await refreshPresetsCatalog();
    }
    if (window.electronAPI && window.electronAPI.notifySettingsUpdated) {
      window.electronAPI.notifySettingsUpdated();
    }
  }, [refreshPresetsCatalog]);

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

  const easyPresets = useMemo(() => {
    if (experienceMode !== "easy" || !easyProvider || easyProvider === "ollama") {
      return [];
    }
    return filterPresetsForEasyProvider(presetsCatalog, easyProvider);
  }, [experienceMode, easyProvider, presetsCatalog]);

  const ollamaEasyModels = useMemo(
    () => allModels.filter((m) => String(m.id || "").startsWith("ollama/")).map((m) => m.id),
    [allModels],
  );

  const resolvePresetRuntime = useCallback(() => {
    return resolveEasyRuntime({
      mode: settings.mode,
      easyProvider: settings.easy_provider as string | undefined,
      easyOllamaModel: settings.easy_ollama_model as string | undefined,
      selectedPresetId: settings.selected_preset_id,
      presets: presetsCatalog,
    });
  }, [
    settings.mode,
    settings.easy_provider,
    settings.easy_ollama_model,
    settings.selected_preset_id,
    presetsCatalog,
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
    if (!easyPresets.length) return;
    const id = settings.selected_preset_id;
    const valid = id && easyPresets.some((s) => s.id === id);
    if (valid) return;
    setSetting("selected_preset_id", easyPresets[0].id);
  }, [experienceMode, easyProvider, settings.selected_preset_id, easyPresets, setSetting]);

  // Translate text
  const translate = async (text, targetLang, model, sourceLang = null, signal = null) => {
    setLoading(true);
    setError(null);

    const { effectiveModel: presetModel, fallbackModel, promptHint, fromPresetCatalog } = resolvePresetRuntime();
    const effectiveModel = presetModel ?? model;

    const finalizeTranslate = async (apiResult, modelToUse) => {
      const result = apiResult;
      result.model_used = result.model || modelToUse;
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
      const translatePayload: Record<string, unknown> = {
        timestamp: new Date().toISOString(),
        type: "translate",
        model: result.model_used || modelToUse,
        prompt_tokens:
          result.usage?.prompt_tokens ??
          (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens:
          result.usage?.completion_tokens ??
          (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        tps: (() => {
          const totalTokens =
            (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
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
    };

    try {
      const result = (await apiService.translate(
        text,
        targetLang,
        effectiveModel,
        sourceLang,
        signal,
        promptHint,
      )) as LlmCallResult;
      return await finalizeTranslate(result, effectiveModel);
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      if (isUnavailableModelError(err)) {
        let finalErr = err;

        if (fromPresetCatalog && fallbackModel) {
          try {
            const fallbackResult = await apiService.translate(
              text,
              targetLang,
              fallbackModel,
              sourceLang,
              signal,
              promptHint,
            );
            return await finalizeTranslate(fallbackResult, fallbackModel);
          } catch (fallbackErr) {
            finalErr = fallbackErr;
            if (fallbackErr && fallbackErr.status === 401) setNeedsLogin(true);
            if (fallbackErr && fallbackErr.name === "AbortError") throw fallbackErr;
          }
        }

        if (isUnavailableModelError(finalErr)) {
          if (fromPresetCatalog) {
            setError(
              i18n.t(
                "The provider rejected this preset's model (missing, invalid, or not allowed). Try another preset, or switch to Advanced mode to pick a different model.",
              ),
            );
            return { error: finalErr.message };
          }
          return await handleUnavailableModel(effectiveModel);
        }
      }

      setError("Translation failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Rephrase translation: alternative wording for an existing translation
  const translateAlternative = async (
    originalText,
    existingVersions,
    targetLang,
    model,
    sourceLang = null,
    signal = null,
  ) => {
    setLoading(true);
    setError(null);

    const { effectiveModel: presetModel, fallbackModel, fromPresetCatalog } = resolvePresetRuntime();
    const effectiveModel = presetModel ?? model;

    const finalizeAlternative = async (apiResult, modelToUse) => {
      const result = apiResult;
      result.model_used = result.model || modelToUse;
      await applyCostToResult(setSetting, result);

      await writeLastApiResult({
        type: "translate_alternative",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });

      logApiCall("translate_alternative", result, {
        source_lang: sourceLang || "",
        target_lang: targetLang || "",
      });

      const altInputStats = getTextStats(typeof originalText === "string" ? originalText : "");
      const altOutputStats = getTextStats(result.content ?? "");
      const altPayload: Record<string, unknown> = {
        timestamp: new Date().toISOString(),
        type: "translate_alternative",
        model: result.model_used || modelToUse,
        prompt_tokens:
          result.usage?.prompt_tokens ??
          (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens:
          result.usage?.completion_tokens ??
          (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        tps: (() => {
          const totalTokens =
            (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
          const durationSec = result.duration_ms ? result.duration_ms / 1000 : 0;
          return durationSec > 0 ? totalTokens / durationSec : null;
        })(),
        username: currentUser?.username ?? null,
        input_chars: altInputStats.chars,
        input_words: altInputStats.words,
        input_paragraphs: altInputStats.paragraphs,
        output_chars: altOutputStats.chars,
        output_words: altOutputStats.words,
        output_paragraphs: altOutputStats.paragraphs,
      };
      if (settings.keep_execution_history !== false) {
        altPayload.input_text = typeof originalText === "string" ? originalText : "";
        altPayload.output_text = result.content ?? "";
      }
      if (typeof window !== "undefined" && window.electronAPI?.logApiCall) {
        window.electronAPI.logApiCall(altPayload).catch((err) => console.warn("[Electron] appDb log failed:", err));
      }
      if (typeof window !== "undefined" && !window.electronAPI?.getConfig && webAPI.logApiCall) {
        webAPI.logApiCall(altPayload);
      }

      return result;
    };

    try {
      const result = (await apiService.translateAlternative(
        originalText,
        existingVersions,
        targetLang,
        effectiveModel,
        sourceLang,
        signal,
      )) as LlmCallResult;
      return await finalizeAlternative(result, effectiveModel);
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      if (isUnavailableModelError(err)) {
        let finalErr = err;

        if (fromPresetCatalog && fallbackModel) {
          try {
            const fallbackResult = await apiService.translateAlternative(
              originalText,
              existingVersions,
              targetLang,
              fallbackModel,
              sourceLang,
              signal,
            );
            return await finalizeAlternative(fallbackResult, fallbackModel);
          } catch (fallbackErr) {
            finalErr = fallbackErr;
            if (fallbackErr && fallbackErr.status === 401) setNeedsLogin(true);
            if (fallbackErr && fallbackErr.name === "AbortError") throw fallbackErr;
          }
        }

        if (isUnavailableModelError(finalErr)) {
          if (fromPresetCatalog) {
            setError(
              i18n.t(
                "The provider rejected this preset's model (missing, invalid, or not allowed). Try another preset, or switch to Advanced mode to pick a different model.",
              ),
            );
            return { error: finalErr.message };
          }
          return await handleUnavailableModel(effectiveModel);
        }
      }

      setError("Alternative translation failed");
      console.error(err);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const translateWordAlternatives = async (
    fullTranslation,
    phrase,
    originalText,
    targetLang,
    model,
    sourceLang = null,
    signal = null,
  ) => {
    setLoading(true);
    setError(null);

    const { effectiveModel: presetModel, fallbackModel, fromPresetCatalog } = resolvePresetRuntime();
    const effectiveModel = presetModel ?? model;

    const finalizeWordAlternatives = async (apiResult, modelToUse) => {
      const result = apiResult;
      result.model_used = result.model || modelToUse;
      await applyCostToResult(setSetting, result);

      await writeLastApiResult({
        type: "translate_word_alternatives",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });

      logApiCall("translate_word_alternatives", result, {
        source_lang: sourceLang || "",
        target_lang: targetLang || "",
      });

      const inputStats = getTextStats(typeof originalText === "string" ? originalText : "");
      const outputStats = getTextStats(
        Array.isArray(result.alternatives)
          ? result.alternatives.map(wordAlternativeDisplayText).join(" | ")
          : "",
      );
      const payload: Record<string, unknown> = {
        timestamp: new Date().toISOString(),
        type: "translate_word_alternatives",
        model: result.model_used || modelToUse,
        prompt_tokens:
          result.usage?.prompt_tokens ??
          (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens:
          result.usage?.completion_tokens ??
          (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        tps: (() => {
          const totalTokens =
            (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
          const durationSec = result.duration_ms ? result.duration_ms / 1000 : 0;
          return durationSec > 0 ? totalTokens / durationSec : null;
        })(),
        username: currentUser?.username ?? null,
        input_chars: inputStats.chars,
        input_words: inputStats.words,
        input_paragraphs: inputStats.paragraphs,
        output_chars: outputStats.chars,
        output_words: outputStats.words,
        output_paragraphs: outputStats.paragraphs,
      };
      if (settings.keep_execution_history !== false) {
        payload.input_text = typeof originalText === "string" ? originalText : "";
        payload.output_text = Array.isArray(result.alternatives)
          ? result.alternatives.map(wordAlternativeDisplayText).join("\n")
          : "";
      }
      if (typeof window !== "undefined" && window.electronAPI?.logApiCall) {
        window.electronAPI.logApiCall(payload).catch((err) => console.warn("[Electron] appDb log failed:", err));
      }
      if (typeof window !== "undefined" && !window.electronAPI?.getConfig && webAPI.logApiCall) {
        webAPI.logApiCall(payload);
      }

      return result;
    };

    try {
      const result = (await apiService.translateWordAlternatives(
        fullTranslation,
        phrase,
        originalText,
        targetLang,
        effectiveModel,
        sourceLang,
        signal,
      )) as LlmCallResult;
      return await finalizeWordAlternatives(result, effectiveModel);
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      if (isUnavailableModelError(err)) {
        let finalErr = err;

        if (fromPresetCatalog && fallbackModel) {
          try {
            const fallbackResult = await apiService.translateWordAlternatives(
              fullTranslation,
              phrase,
              originalText,
              targetLang,
              fallbackModel,
              sourceLang,
              signal,
            );
            return await finalizeWordAlternatives(fallbackResult, fallbackModel);
          } catch (fallbackErr) {
            finalErr = fallbackErr;
            if (fallbackErr && fallbackErr.status === 401) setNeedsLogin(true);
            if (fallbackErr && fallbackErr.name === "AbortError") throw fallbackErr;
          }
        }

        if (isUnavailableModelError(finalErr)) {
          if (fromPresetCatalog) {
            setError(
              i18n.t(
                "The provider rejected this preset's model (missing, invalid, or not allowed). Try another preset, or switch to Advanced mode to pick a different model.",
              ),
            );
            return { error: finalErr.message };
          }
          return await handleUnavailableModel(effectiveModel);
        }
      }

      setError("Word alternatives failed");
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
    const { effectiveModel: presetModel, fallbackModel, fromPresetCatalog } = resolvePresetRuntime();
    const effectiveModel = presetModel ?? model;

    const finalizeTranslatePromptFields = async (apiResult, modelToUse) => {
      const result = apiResult;
      if (result.error) return result;
      result.model_used = result.model || modelToUse;
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
        model: result.model_used || modelToUse,
        target_lang: targetLang || null,
        transform_prompt: "Translate prompt (button)",
        prompt_tokens:
          result.usage?.prompt_tokens ?? (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens:
          result.usage?.completion_tokens ?? (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
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
    };

    try {
      const result = (await apiService.translatePromptFieldsJson(
        fieldsObject,
        targetLang,
        effectiveModel,
        signal,
      )) as LlmCallResult;
      return await finalizeTranslatePromptFields(result, effectiveModel);
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      let finalErr = err;
      if (isUnavailableModelError(err)) {
        if (fromPresetCatalog && fallbackModel) {
          try {
            const fallbackResult = await apiService.translatePromptFieldsJson(fieldsObject, targetLang, fallbackModel, signal);
            return await finalizeTranslatePromptFields(fallbackResult, fallbackModel);
          } catch (fallbackErr) {
            finalErr = fallbackErr;
            if (fallbackErr && fallbackErr.status === 401) setNeedsLogin(true);
            if (fallbackErr && fallbackErr.name === "AbortError") throw fallbackErr;
          }
        }

        if (isUnavailableModelError(finalErr)) {
          if (fromPresetCatalog) {
            setError(
              i18n.t(
                "The provider rejected this preset's model (missing, invalid, or not allowed). Try another preset, or switch to Advanced mode to pick a different model.",
              ),
            );
            return { error: finalErr.message };
          }
          return await handleUnavailableModel(effectiveModel);
        }
      }

      setError("Translation failed");
      console.error(finalErr);
      return { error: finalErr.message };
    } finally {
      setLoading(false);
    }
  };

  // Improve prompt config (role, instructions, temperature) via model; returns improved JSON
  const improvePromptConfig = async (configObject, model, signal = null) => {
    setLoading(true);
    setError(null);
    const { effectiveModel: presetModel, fromPresetCatalog } = resolvePresetRuntime();
    const effectiveModel = presetModel ?? model;
    try {
      const result = (await apiService.improvePromptConfigJson(
        configObject,
        effectiveModel,
        signal,
      )) as LlmCallResult;
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
        if (fromPresetCatalog) {
          setError(
            i18n.t(
              "The provider rejected this preset's model (missing, invalid, or not allowed). Try another preset, or switch to Advanced mode to pick a different model.",
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
    const { effectiveModel: presetModel, fromPresetCatalog } = resolvePresetRuntime();
    const effectiveModel = presetModel ?? model;
    try {
      const result = (await apiService.generatePromptConfigJson(
        userDescription,
        effectiveModel,
        signal,
      )) as LlmCallResult;
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
        if (fromPresetCatalog) {
          setError(
            i18n.t(
              "The provider rejected this preset's model (missing, invalid, or not allowed). Try another preset, or switch to Advanced mode to pick a different model.",
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

    const { effectiveModel: presetModel, fallbackModel, promptHint, fromPresetCatalog } = resolvePresetRuntime();
    const effectiveModel = presetModel ?? model;

    const finalizeRewrite = async (apiResult, modelToUse) => {
      const result = apiResult;
      result.model_used = result.model || modelToUse;
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
      const rewritePayload: Record<string, unknown> = {
        timestamp: new Date().toISOString(),
        type: "rewrite",
        model: result.model_used || modelToUse,
        source_lang: sourceLang || null,
        target_lang: null,
        rewrite_mode: mode || null,
        prompt_tokens:
          result.usage?.prompt_tokens ?? (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens:
          result.usage?.completion_tokens ?? (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
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
    };

    try {
      const result = (await apiService.rewrite(
        text,
        mode,
        effectiveModel,
        signal,
        sourceLang,
        promptHint,
      )) as LlmCallResult;
      return await finalizeRewrite(result, effectiveModel);
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      let finalErr = err;
      if (isUnavailableModelError(err)) {
        if (fromPresetCatalog && fallbackModel) {
          try {
            const fallbackResult = await apiService.rewrite(text, mode, fallbackModel, signal, sourceLang, promptHint);
            return await finalizeRewrite(fallbackResult, fallbackModel);
          } catch (fallbackErr) {
            finalErr = fallbackErr;
            if (fallbackErr && fallbackErr.status === 401) setNeedsLogin(true);
            if (fallbackErr && fallbackErr.name === "AbortError") throw fallbackErr;
          }
        }

        if (isUnavailableModelError(finalErr)) {
          if (fromPresetCatalog) {
            setError(
              i18n.t(
                "The provider rejected this preset's model (missing, invalid, or not allowed). Try another preset, or switch to Advanced mode to pick a different model.",
              ),
            );
            return { error: finalErr.message };
          }
          return await handleUnavailableModel(effectiveModel);
        }
      }
      setError("Rewrite failed");
      console.error(err);
      return { error: finalErr.message };
    } finally {
      setLoading(false);
    }
  };

  // Rephrase rewrite: alternative wording for an existing rewrite
  const rewriteAlternative = async (
    originalText,
    existingVersions,
    mode,
    model,
    sourceLang = null,
    signal = null,
  ) => {
    setLoading(true);
    setError(null);

    const { effectiveModel: presetModel, fallbackModel, promptHint, fromPresetCatalog } = resolvePresetRuntime();
    const effectiveModel = presetModel ?? model;

    const finalizeRewriteAlternative = async (apiResult, modelToUse) => {
      const result = apiResult;
      result.model_used = result.model || modelToUse;
      await applyCostToResult(setSetting, result);

      await writeLastApiResult({
        type: "rewrite_alternative",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });

      logApiCall("rewrite_alternative", result, {
        source_lang: sourceLang || "",
        rewrite_mode: mode || "",
      });

      const altInputStats = getTextStats(typeof originalText === "string" ? originalText : "");
      const altOutputStats = getTextStats(result.content ?? "");
      const altPayload: Record<string, unknown> = {
        timestamp: new Date().toISOString(),
        type: "rewrite_alternative",
        model: result.model_used || modelToUse,
        source_lang: sourceLang || null,
        rewrite_mode: mode || null,
        prompt_tokens:
          result.usage?.prompt_tokens ??
          (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens:
          result.usage?.completion_tokens ??
          (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        tps: (() => {
          const totalTokens = (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
          const durationSec = result.duration_ms ? result.duration_ms / 1000 : 0;
          return durationSec > 0 ? totalTokens / durationSec : null;
        })(),
        username: currentUser?.username ?? null,
        input_chars: altInputStats.chars,
        input_words: altInputStats.words,
        input_paragraphs: altInputStats.paragraphs,
        output_chars: altOutputStats.chars,
        output_words: altOutputStats.words,
        output_paragraphs: altOutputStats.paragraphs,
      };
      if (settings.keep_execution_history !== false) {
        altPayload.input_text = typeof originalText === "string" ? originalText : "";
        altPayload.output_text = result.content ?? "";
      }
      if (typeof window !== "undefined" && window.electronAPI?.logApiCall) {
        window.electronAPI.logApiCall(altPayload).catch((err) => console.warn("[Electron] appDb log failed:", err));
      }
      if (typeof window !== "undefined" && !window.electronAPI?.getConfig && webAPI.logApiCall) {
        webAPI.logApiCall(altPayload);
      }

      return result;
    };

    try {
      const result = (await apiService.rewriteAlternative(
        originalText,
        existingVersions,
        mode,
        effectiveModel,
        sourceLang,
        promptHint ?? null,
        signal,
      )) as LlmCallResult;
      return await finalizeRewriteAlternative(result, effectiveModel);
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      let finalErr = err;
      if (isUnavailableModelError(err)) {
        if (fromPresetCatalog && fallbackModel) {
          try {
            const fallbackResult = await apiService.rewriteAlternative(
              originalText,
              existingVersions,
              mode,
              fallbackModel,
              sourceLang,
              promptHint ?? null,
              signal,
            );
            return await finalizeRewriteAlternative(fallbackResult, fallbackModel);
          } catch (fallbackErr) {
            finalErr = fallbackErr;
            if (fallbackErr && fallbackErr.status === 401) setNeedsLogin(true);
            if (fallbackErr && fallbackErr.name === "AbortError") throw fallbackErr;
          }
        }
        if (isUnavailableModelError(finalErr)) {
          if (fromPresetCatalog) {
            setError(
              i18n.t(
                "The provider rejected this preset's model (missing, invalid, or not allowed). Try another preset, or switch to Advanced mode to pick a different model.",
              ),
            );
            return { error: finalErr.message };
          }
          return await handleUnavailableModel(effectiveModel);
        }
      }
      setError("Rewrite alternative failed");
      console.error(err);
      return { error: finalErr.message };
    } finally {
      setLoading(false);
    }
  };

  // Suggest word alternatives for a selected phrase in a rewrite output
  const rewriteWordAlternatives = async (
    fullRewrite,
    phrase,
    originalText,
    model,
    sourceLang = null,
    signal = null,
  ) => {
    setLoading(true);
    setError(null);

    const { effectiveModel: presetModel, fallbackModel, fromPresetCatalog } = resolvePresetRuntime();
    const effectiveModel = presetModel ?? model;

    const finalizeRewriteWordAlternatives = async (apiResult, modelToUse) => {
      const result = apiResult;
      result.model_used = result.model || modelToUse;
      await applyCostToResult(setSetting, result);

      await writeLastApiResult({
        type: "rewrite_word_alternatives",
        model: result.model_used,
        usage: result.usage,
        calculated_cost: result.calculated_cost,
        total_cost: result.total_cost,
        raw: result,
      });

      logApiCall("rewrite_word_alternatives", result, {
        source_lang: sourceLang || "",
      });

      const inputStats = getTextStats(typeof originalText === "string" ? originalText : "");
      const outputStats = getTextStats(
        Array.isArray(result.alternatives)
          ? result.alternatives.map(wordAlternativeDisplayText).join(" | ")
          : "",
      );
      const payload: Record<string, unknown> = {
        timestamp: new Date().toISOString(),
        type: "rewrite_word_alternatives",
        model: result.model_used || modelToUse,
        prompt_tokens:
          result.usage?.prompt_tokens ??
          (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens:
          result.usage?.completion_tokens ??
          (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
        duration_ms: result.duration_ms ?? null,
        cost: result.calculated_cost ?? result.usage?.cost ?? null,
        total_cost: result.total_cost ?? null,
        tps: (() => {
          const totalTokens =
            (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
          const durationSec = result.duration_ms ? result.duration_ms / 1000 : 0;
          return durationSec > 0 ? totalTokens / durationSec : null;
        })(),
        username: currentUser?.username ?? null,
        input_chars: inputStats.chars,
        input_words: inputStats.words,
        input_paragraphs: inputStats.paragraphs,
        output_chars: outputStats.chars,
        output_words: outputStats.words,
        output_paragraphs: outputStats.paragraphs,
      };
      if (settings.keep_execution_history !== false) {
        payload.input_text = typeof originalText === "string" ? originalText : "";
        payload.output_text = Array.isArray(result.alternatives)
          ? result.alternatives.map(wordAlternativeDisplayText).join("\n")
          : "";
      }
      if (typeof window !== "undefined" && window.electronAPI?.logApiCall) {
        window.electronAPI.logApiCall(payload).catch((err) => console.warn("[Electron] appDb log failed:", err));
      }
      if (typeof window !== "undefined" && !window.electronAPI?.getConfig && webAPI.logApiCall) {
        webAPI.logApiCall(payload);
      }

      return result;
    };

    try {
      const result = (await apiService.rewriteWordAlternatives(
        fullRewrite,
        phrase,
        originalText,
        effectiveModel,
        sourceLang,
        signal,
      )) as LlmCallResult;
      return await finalizeRewriteWordAlternatives(result, effectiveModel);
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      if (isUnavailableModelError(err)) {
        let finalErr = err;

        if (fromPresetCatalog && fallbackModel) {
          try {
            const fallbackResult = await apiService.rewriteWordAlternatives(
              fullRewrite,
              phrase,
              originalText,
              fallbackModel,
              sourceLang,
              signal,
            );
            return await finalizeRewriteWordAlternatives(fallbackResult, fallbackModel);
          } catch (fallbackErr) {
            finalErr = fallbackErr;
            if (fallbackErr && fallbackErr.status === 401) setNeedsLogin(true);
            if (fallbackErr && fallbackErr.name === "AbortError") throw fallbackErr;
          }
        }

        if (isUnavailableModelError(finalErr)) {
          if (fromPresetCatalog) {
            setError(
              i18n.t(
                "The provider rejected this preset's model (missing, invalid, or not allowed). Try another preset, or switch to Advanced mode to pick a different model.",
              ),
            );
            return { error: finalErr.message };
          }
          return await handleUnavailableModel(effectiveModel);
        }
      }
      setError("Rewrite word alternatives failed");
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

    const { effectiveModel: presetModel, fallbackModel, promptHint, fromPresetCatalog } = resolvePresetRuntime();
    const effectiveModel = presetModel ?? model;

    const finalizeTransform = async (apiResult, modelToUse) => {
      const result = apiResult;
      result.model_used = result.model || modelToUse;
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
      const transformPayload: Record<string, unknown> = {
        timestamp: new Date().toISOString(),
        type: "transform",
        model: result.model_used || modelToUse,
        source_lang: statedFromLang || null,
        target_lang: null,
        rewrite_mode: null,
        transform_prompt: promptConfig?.name ?? null,
        prompt_tokens:
          result.usage?.prompt_tokens ?? (result.request_bytes != null ? Math.round(result.request_bytes / 4) : null),
        completion_tokens:
          result.usage?.completion_tokens ?? (result.response_bytes != null ? Math.round(result.response_bytes / 4) : null),
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
    };

    try {
      const result = (await apiService.transform(
        text,
        promptConfig,
        effectiveModel,
        signal,
        statedFromLang,
        promptHint,
      )) as LlmCallResult;
      return await finalizeTransform(result, effectiveModel);
    } catch (err) {
      if (err.name === "AbortError") throw err;
      if (err && err.status === 401) setNeedsLogin(true);
      if (isUnavailableModelError(err)) {
        let finalErr = err;
        if (fromPresetCatalog && fallbackModel) {
          try {
            const fallbackResult = await apiService.transform(text, promptConfig, fallbackModel, signal, statedFromLang, promptHint);
            return await finalizeTransform(fallbackResult, fallbackModel);
          } catch (fallbackErr) {
            finalErr = fallbackErr;
            if (fallbackErr && fallbackErr.status === 401) setNeedsLogin(true);
            if (fallbackErr && fallbackErr.name === "AbortError") throw fallbackErr;
          }
        }

        if (isUnavailableModelError(finalErr)) {
          if (fromPresetCatalog) {
            setError(
              i18n.t(
                "The provider rejected this preset's model (missing, invalid, or not allowed). Try another preset, or switch to Advanced mode to pick a different model.",
              ),
            );
            return { error: finalErr.message };
          }
          return await handleUnavailableModel(effectiveModel);
        }
      }
      setError("Transform failed");
      console.error(err);
      return { error: (err && err.message) || "Transform failed" };
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
      await refreshPresetsCatalog();
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
        const currentSelected = (configManager.get("available_models") || []) as string[];
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
  // fetchModels is recreated each render; deps are the conditions that should trigger a fetch.
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    presets: easyPresets,
    presetsCatalog,
    presetsFileMeta,
    presetsLastCheckedAt,
    presetsRefreshBusy,
    refreshPresetsCatalog,
    easyProvider,
    ollamaEasyModels,
    setExperienceMode: (value) => setSetting("mode", value),
    setEasyProvider: (value) => setSetting("easy_provider", value),
    setEasyOllamaModel: (id) => setSetting("easy_ollama_model", id, { optimistic: true }),
    setSelectedPresetId: (id) => setSetting("selected_preset_id", id, { optimistic: true }),
    translate,
    translateAlternative,
    translateWordAlternatives,
    translatePromptFields,
    improvePromptConfig,
    generatePromptConfig,
    rewrite,
    rewriteAlternative,
    rewriteWordAlternatives,
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
