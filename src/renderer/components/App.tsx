import { useState, useEffect, useMemo, useRef, useCallback, Fragment } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import ConfirmModal from "./ConfirmModal";
import ErrorAlertModal from "./ErrorAlertModal";
import LoginPage from "./LoginPage";
import ChangePasswordModal from "./ChangePasswordModal";
import ApiKeyModal from "./ApiKeyModal";
import { getTranslatePanels, getRewritePanels, getTransformPanels } from "./workspace";
import { type LayoutMode } from "./workspace/LayoutToggle";
import { useAppContext } from "../contexts/AppContext";
import webAPI from "../utils/api/webApiClient";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { usePasteHandler } from "../hooks/usePasteHandler";
import { useDebouncedProcess } from "../hooks/useDebouncedProcess";
import { useProcessing } from "../hooks/useProcessing";
import { useWordAlternatives } from "../hooks/useWordAlternatives";
import { useTransformPrompts } from "../hooks/useTransformPrompts";
import { useGlossaryTerms } from "../hooks/useGlossaryTerms";
import GlossaryAddModal from "./GlossaryAddModal";
import { WordAlternativesPopover } from "./WordAlternativesPopover";
import { findUILanguageEntry } from "../utils/misc/languageConstants";
import {
  formatElapsedMmSs,
  formatDecimal,
  getInputStats,
  getOutputStats,
} from "../utils/misc/formatUtils";
import { copyTextToClipboard } from "../utils/misc/clipboardUtils";
import { formatCost } from "../utils/misc/costUtils";
import { applyConfiguredTheme } from "../utils/misc/themeUtils";
import { isWeb } from "../constants";
import { MAX_TRANSLATE_VERSIONS } from "../constants/translateVersions";
import { SOURCE_LOCALE } from "../i18n";
import "../styles/main.css";

// Inline logo SVG for loading screen so it appears immediately (no image load flash)
const LoadingLogoSvg = ({ className }) => (
  <svg viewBox="0 0 198.76 127.81" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
    <defs>
      <linearGradient id="loading-lg17" x1="10.58" y1="231.9" x2="96.62" y2="299.12" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.93,0,0,.93,16.37,-84.3)"><stop stopColor="#00ff00" stopOpacity=".5" offset=".18"/><stop stopColor="#63e684" stopOpacity="1" offset=".88"/></linearGradient>
      <linearGradient id="loading-lg19" x1="76.62" y1="265.27" x2="185.8" y2="265.27" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.93,0,0,.93,23.25,-84.3)"><stop stopColor="#f2ab38" stopOpacity=".5" offset="0"/><stop stopColor="#ed7139" stopOpacity="1" offset="1"/></linearGradient>
      <linearGradient id="loading-lg24" x1="34.81" y1="256.57" x2="74.27" y2="256.57" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.93,0,0,.93,16.37,-84.3)"><stop stopColor="#29ff11" offset="0"/><stop stopColor="#7cff77" offset="1"/></linearGradient>
      <linearGradient id="loading-lg26" x1="158.12" y1="256.19" x2="110.91" y2="256.19" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.93,0,0,.93,23.25,-84.3)"><stop stopColor="#f2ab38" offset="0"/><stop stopColor="#96360c" offset="1"/></linearGradient>
    </defs>
    <g transform="translate(-6.72,-102.81)">
      <g transform="matrix(1.1,0,0,1.08,-10.3,-9.25)">
        <path fill="url(#loading-lg17)" d="m 66.17,103.55 a 50.72,49.19 0 0 0 -50.72,49.19 50.72,49.19 0 0 0 15.74,35.62 l .34,13.46 .48,19.37 13.09,-10.47 11.99,-9.59 a 50.72,49.19 0 0 0 9.08,.8 50.72,49.19 0 0 0 50.72,-49.19 50.72,49.19 0 0 0 -50.72,-49.19 z m 0,21 a 28.19,28.19 0 0 1 28.19,28.19 28.19,28.19 0 0 1 -28.19,28.19 28.19,28.19 0 0 1 -28.19,-28.19 28.19,28.19 0 0 1 28.19,-28.19 z"/>
        <path fill="url(#loading-lg19)" d="m 145.15,103.34 a 50.72,49.19 0 0 1 50.72,49.19 50.72,49.19 0 0 1 -15.74,35.62 l -.34,13.46 -.48,19.37 -13.09,-10.47 -11.99,-9.59 a 50.72,49.19 0 0 1 -9.08,.8 50.72,49.19 0 0 1 -50.72,-49.19 50.72,49.19 0 0 1 50.72,-49.19 z m 0,21 a 28.19,28.19 0 0 0 -28.19,28.19 28.19,28.19 0 0 0 28.19,28.19 28.19,28.19 0 0 0 28.19,-28.19 28.19,28.19 0 0 0 -28.19,-28.19 z"/>
        <path fill="url(#loading-lg24)" d="m 67.39,137.95 v 9.46 H 48.71 v 13.11 h 18.68 v 9.68 l 8.99,-8.06 8.99,-8.06 -8.99,-8.06 z"/>
        <path fill="url(#loading-lg26)" d="m 162.98,135.61 -21.17,20.81 -7.28,-7.17 -8.23,7.31 7.68,7.56 7.83,7.71 7.84,-7.7 20.52,-20.17 z"/>
      </g>
    </g>
  </svg>
);
LoadingLogoSvg.propTypes = { className: PropTypes.string };

const App = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || SOURCE_LOCALE;
  const { settings, translate, translateAlternative, translateWordAlternatives, translatePromptFields, improvePromptConfig, generatePromptConfig, rewrite, rewriteAlternative, rewriteWordAlternatives, transform, models, presets, easyProvider, localLlmEasyModels, updateSettings, setSetting, setSelectedPresetId, setEasyLocalLlmModel, setExperienceMode, removeModelFromList, needsLogin, sessionExpired, currentUser, handleWebLogin, handleWebLogout, apiKeyStatus, configLoading, setError } =
    useAppContext();
  const presetUiLocale = settings?.ui_locale || locale;
  const presetSourceLocale = settings?.source_locale || "en-GB";

  const [currentMode, setCurrentMode] = useState(() => settings.app_mode || "translate");
  const [currentView, setCurrentView] = useState(() => (settings.web_view === "settings" ? "settings" : "workspace"));
  const [layoutMode, setLayoutMode] = useState<LayoutMode>(() => {
    try {
      const stored = localStorage.getItem("transrewrt-layout-preference");
      if (stored === "split" || stored === "stack") return stored;
    } catch {
      // localStorage unavailable
    }
    return "split";
  });

  const handleLayoutChange = (mode: LayoutMode) => {
    setLayoutMode(mode);
    try {
      localStorage.setItem("transrewrt-layout-preference", mode);
    } catch {
      // localStorage unavailable
    }
  };

  const [openSettingsToTab, setOpenSettingsToTab] = useState(null);

  const openSettingsModels = useCallback(() => {
    updateSettings({ settings_active_tab: "models" });
    setCurrentView("settings");
    if (isWeb) setSetting("web_view", "settings");
  }, [updateSettings, setSetting]);

  const openSettingsGlossary = useCallback(() => {
    updateSettings({ settings_active_tab: "glossary" });
    setOpenSettingsToTab("glossary");
    setCurrentView("settings");
    if (isWeb) setSetting("web_view", "settings");
  }, [updateSettings, setSetting]);

  const handleRemoveModel = useCallback(
    async (modelId: string) => {
      const result = await removeModelFromList(modelId);
      if (result?.emptied) openSettingsModels();
    },
    [removeModelFromList, openSettingsModels],
  );
  const [glossaryModalOpen, setGlossaryModalOpen] = useState(false);
  const [glossaryPrefillSrcText, setGlossaryPrefillSrcText] = useState("");
  const [glossaryPrefillTgtText, setGlossaryPrefillTgtText] = useState("");
  const hasRestoredViewRef = useRef(false);
  // Independent input/output per mode so switching translate ↔ rewrite keeps each view's content
  const [inputTextTranslate, setInputTextTranslate] = useState("");
  const [outputTextTranslate, setOutputTextTranslate] = useState("");
  const [inputTextRewrite, setInputTextRewrite] = useState("");
  const [outputTextRewrite, setOutputTextRewrite] = useState("");
  const [apiKeyWarningDismissed, setApiKeyWarningDismissed] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const apiKeyProblem = isWeb && apiKeyStatus && (!apiKeyStatus.apiKeySet || !apiKeyStatus.apiKeyValid);
  const electronApiKeyMissing = !isWeb && !settings?.llm_configured;
  // Only show modal after initial load has settled (avoids flash when API key is already configured)
  const [apiKeyModalReady, setApiKeyModalReady] = useState(false);
  useEffect(() => {
    if (!configLoading) {
      const id = requestAnimationFrame(() => setApiKeyModalReady(true));
      return () => cancelAnimationFrame(id);
    }
  }, [configLoading]);
  const showApiKeyModal =
    apiKeyModalReady &&
    !apiKeyWarningDismissed &&
    (apiKeyProblem || electronApiKeyMissing);

  // Language selection states
  const [sourceLanguage, setSourceLanguage] = useState(() => settings.source_language || "Detect Language");
  const [targetLanguage, setTargetLanguage] = useState(() => settings.target_language || "Spanish");

  const swapLanguages = useCallback(() => {
    if (sourceLanguage === "Detect Language") return;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  }, [sourceLanguage, targetLanguage]);

  // Track if initial config has been loaded
  const [configLoaded, setConfigLoaded] = useState(false);

  // Rewrite mode selection state (persisted as rewrite_mode)
  const [rewriteMode, setRewriteMode] = useState(() => (settings.rewrite_mode ?? settings.rewrite_style) || "Check Spelling & Grammar");
  const [showOutputDiff, setShowOutputDiff] = useState(false);

  const normalizeTheme = (theme) => {
    if (theme === "light" || theme === "dark" || theme === "system") return theme;
    if (typeof theme === "string" && theme.trim().toLowerCase() === "system (follow os)") {
      return "system";
    }
    return "system";
  };

  // Determine active model safely (needed by useTransformPrompts and useProcessing)
  const activeModel = useMemo(() => {
    if (!models || models.length === 0) return null;
    if (settings.last_used_model && models.includes(settings.last_used_model)) {
      return settings.last_used_model;
    }
    return models[0];
  }, [models, settings.last_used_model]);

  const experienceMode = useMemo(
    () => (settings.mode === "advanced" ? "advanced" : "easy"),
    [settings.mode],
  );

  const {
    transformPrompts,
    transformPromptId,
    transformEditMode,
    editingPrompt,
    inputTextTransform,
    setInputTextTransform,
    outputTextTransform,
    setOutputTextTransform,
    transformFromLang,
    setTransformFromLang,
    transformTestInput,
    setTransformTestInput,
    transformTestOutput,
    transformTestMeta,
    transformTestRunning,
    setTransformEditorDraft,
    transformPromptToDelete,
    setTransformPromptToDelete,
    showLoadSampleConfirm,
    setShowLoadSampleConfirm,
    loadSampleLoading,
    selectedTransformPrompt,
    handleTransformPromptSelect,
    handleTransformNewPrompt,
    handleTransformEditPrompt,
    handleTransformDuplicate,
    handleTransformBackToRun,
    handleOpenExportImportPrompts,
    handleConfirmLoadSamplePrompts,
    handleTransformSave,
    handleTransformDeleteRequest,
    handleConfirmTransformDelete,
    handleTransformTest,
  } = useTransformPrompts({
    settings,
    updateSettings,
    setSetting,
    setError,
    setCurrentView,
    isWeb,
    currentMode,
    currentView,
    transform,
    activeModel,
  });

  const { terms: glossaryTermsForProcessing } = useGlossaryTerms(
    sourceLanguage,
    targetLanguage,
    currentMode === "translate" && !!settings.use_glossary,
  );

  const inputText = currentMode === "translate" ? inputTextTranslate : currentMode === "rewrite" ? inputTextRewrite : inputTextTransform;
  const outputText = currentMode === "translate" ? outputTextTranslate : currentMode === "rewrite" ? outputTextRewrite : outputTextTransform;
  const setInputText = currentMode === "translate" ? setInputTextTranslate : currentMode === "rewrite" ? setInputTextRewrite : setInputTextTransform;

  // Sync language from settings when settings change (e.g. config load). Intentionally omit
  // sourceLanguage/targetLanguage from deps so we don't overwrite the user's dropdown selection
  // when they change it (persist effect calls updateSettings async; sync would run with stale settings).
  useEffect(() => {
    if (settings?.target_language) {
      queueMicrotask(() => setTargetLanguage(settings.target_language));
    }
  }, [settings, settings?.target_language]);

  useEffect(() => {
    if (settings?.source_language) {
      queueMicrotask(() => setSourceLanguage(settings.source_language));
    }
  }, [settings, settings?.source_language]);

  // Sync currentMode from settings when config loads (deferred to avoid sync setState in effect)
  useEffect(() => {
    if (settings?.app_mode) {
      queueMicrotask(() => setCurrentMode(settings.app_mode));
    }
  }, [settings?.app_mode]);

  // Restore main view (workspace vs settings vs dashboard vs history) from state once when config has loaded
  useEffect(() => {
    if (hasRestoredViewRef.current || !settings || Object.keys(settings).length === 0) return;
    let view = settings.web_view;
    if (view === "history" && settings.keep_execution_history === false) {
      view = "workspace";
    }
    if (view === "settings" || view === "workspace" || view === "dashboard" || view === "history") {
      hasRestoredViewRef.current = true;
      queueMicrotask(() => setCurrentView(view));
    }
  }, [settings, settings?.web_view, settings?.keep_execution_history]);

  // Sync rewriteMode from settings when config loads (deferred to avoid sync setState in effect)
  useEffect(() => {
    const mode = settings?.rewrite_mode ?? settings?.rewrite_style;
    if (mode) {
      queueMicrotask(() => setRewriteMode(mode));
    }
  }, [settings?.rewrite_mode, settings?.rewrite_style]);

  // Persist target language when it changes, but only after config is loaded
  useEffect(() => {
    if (configLoaded && targetLanguage) {
      updateSettings({ target_language: targetLanguage });
    }
  }, [targetLanguage, configLoaded, updateSettings]);

  // Persist source language when it changes, but only after config is loaded
  useEffect(() => {
    if (configLoaded && sourceLanguage) {
      updateSettings({ source_language: sourceLanguage });
    }
  }, [sourceLanguage, configLoaded, updateSettings]);

  // Persist rewrite mode when it changes, but only after config is loaded
  useEffect(() => {
    if (configLoaded && rewriteMode) {
      updateSettings({ rewrite_mode: rewriteMode });
    }
  }, [rewriteMode, configLoaded, updateSettings]);

  // Mark config as loaded after we have settings (used for persist effects and API key modal gating)
  useEffect(() => {
    if (settings && Object.keys(settings).length > 0) {
      queueMicrotask(() => setConfigLoaded(true));
    }
  }, [settings]);

  const {
    isProcessing,
    elapsedTime,
    tokensPerSecond,
    lastRunCost,
    lastRunCostKind,
    lastRunModel,
    rewriteOutputIsModelResult,
    translateOutputIsModelResult,
    translateVersions,
    selectedTranslateVersion,
    setTranslateVersions,
    setSelectedTranslateVersion,
    rewriteVersions,
    selectedRewriteVersion,
    setRewriteVersions,
    setSelectedRewriteVersion,
    applyRunCostFromResult,
    processingMode,
    handleRunAction,
    handleRunActionStartOnly,
    handleAlternative,
    handleTranslateVersionChange,
    handleRewriteAlternative,
    handleRewriteVersionChange,
    actionError,
    clearActionError,
  } = useProcessing({
    translate,
    translateAlternative,
    rewrite,
    rewriteAlternative,
    transform,
    activeModel,
    settings,
    updateSettings,
    currentMode,
    setCurrentMode,
    inputTextTranslate,
    outputTextTranslate,
    setOutputTextTranslate,
    targetLanguage,
    sourceLanguage,
    inputTextRewrite,
    outputTextRewrite,
    setOutputTextRewrite,
    rewriteMode,
    inputTextTransform,
    outputTextTransform,
    setOutputTextTransform,
    transformPrompts,
    transformPromptId,
    transformFromLang,
    glossaryTerms: glossaryTermsForProcessing,
  });

  const fetchTranslateWordAlternatives = useCallback(
    (phrase, signal) =>
      translateWordAlternatives(
        outputTextTranslate,
        phrase,
        inputTextTranslate,
        targetLanguage,
        activeModel,
        sourceLanguage === "Detect Language" ? null : sourceLanguage,
        signal,
      ),
    [
      translateWordAlternatives,
      outputTextTranslate,
      inputTextTranslate,
      targetLanguage,
      activeModel,
      sourceLanguage,
    ],
  );

  const {
    popoverProps: translateWordAltPopoverProps,
    handleOutputContextMenu,
    tryOpenWordAlternativesFromTextarea,
    registerOutputTextarea,
    outputHasSelection,
    handleEscape: handleTranslateWordAltEscape,
  } = useWordAlternatives({
    onFetchAlternatives: fetchTranslateWordAlternatives,
    outputText: outputTextTranslate,
    outputIsModelResult: translateOutputIsModelResult,
    isProcessing,
    versions: translateVersions,
    setVersions: setTranslateVersions,
    setSelectedVersion: setSelectedTranslateVersion,
    setOutputText: setOutputTextTranslate,
    maxVersions: MAX_TRANSLATE_VERSIONS,
    applyRunCostFromResult,
    autoCopy: !!settings.auto_copy,
  });

  const fetchRewriteWordAlternatives = useCallback(
    (phrase, signal) =>
      rewriteWordAlternatives(
        outputTextRewrite,
        phrase,
        inputTextRewrite,
        activeModel,
        sourceLanguage === "Detect Language" ? null : sourceLanguage,
        signal,
      ),
    [
      rewriteWordAlternatives,
      outputTextRewrite,
      inputTextRewrite,
      activeModel,
      sourceLanguage,
    ],
  );

  const {
    popoverProps: rewriteWordAltPopoverProps,
    handleOutputContextMenu: handleRewriteOutputContextMenu,
    tryOpenWordAlternativesFromTextarea: tryOpenRewriteWordAlternativesFromTextarea,
    registerOutputTextarea: registerRewriteOutputTextarea,
    outputHasSelection: rewriteOutputHasSelection,
    handleEscape: handleRewriteWordAltEscape,
  } = useWordAlternatives({
    onFetchAlternatives: fetchRewriteWordAlternatives,
    outputText: outputTextRewrite,
    outputIsModelResult: rewriteOutputIsModelResult,
    isProcessing,
    versions: rewriteVersions,
    setVersions: setRewriteVersions,
    setSelectedVersion: setSelectedRewriteVersion,
    setOutputText: setOutputTextRewrite,
    maxVersions: MAX_TRANSLATE_VERSIONS,
    applyRunCostFromResult,
    autoCopy: !!settings.auto_copy,
  });

  const handleRephraseClick = useCallback(() => {
    if (tryOpenWordAlternativesFromTextarea()) return;
    handleAlternative();
  }, [handleAlternative, tryOpenWordAlternativesFromTextarea]);

  const handleRewriteRephraseClick = useCallback(() => {
    if (tryOpenRewriteWordAlternativesFromTextarea()) return;
    handleRewriteAlternative();
  }, [handleRewriteAlternative, tryOpenRewriteWordAlternativesFromTextarea]);

  const handleWordAltEscape = useCallback(() => {
    if (handleTranslateWordAltEscape()) return true;
    if (handleRewriteWordAltEscape()) return true;
    return false;
  }, [handleTranslateWordAltEscape, handleRewriteWordAltEscape]);

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
    setCurrentView("workspace");
    updateSettings({ app_mode: mode });
    if (isWeb) setSetting("web_view", "workspace");
  };

  const handleDashboardClick = () => {
    setCurrentView("dashboard");
    if (isWeb) setSetting("web_view", "dashboard");
  };

  const handleHistoryClick = () => {
    setCurrentView("history");
    if (isWeb) setSetting("web_view", "history");
  };

  useEffect(() => {
    if (settings.keep_execution_history === false && currentView === "history") {
      queueMicrotask(() => {
        setCurrentView("workspace");
        if (isWeb) setSetting("web_view", "workspace");
      });
    }
  }, [settings.keep_execution_history, currentView, setSetting]);

  const clearInput = () => {
    if (currentMode === "translate") {
      setInputTextTranslate("");
      setOutputTextTranslate("");
    } else if (currentMode === "rewrite") {
      setInputTextRewrite("");
      setOutputTextRewrite("");
    } else {
      setInputTextTransform("");
      setOutputTextTransform("");
    }
  };

  // Web mode: check session on every navigation so expired session shows login immediately
  useEffect(() => {
    if (!isWeb || needsLogin) return;
    webAPI.checkSession().catch(() => {});
  }, [needsLogin, currentView, currentMode]);

  const copyOutput = () => {
    void copyTextToClipboard(outputText).catch(() => {});
  };

  const inputStats = () => getInputStats(inputText, t);
  const outputStats = () => getOutputStats(outputText, t);

  const { pasteToInput, handlePasteEvent, shouldAutoProcessRef } = usePasteHandler(
    setInputText,
    handleRunAction,
    inputText,
    settings.auto_translate_on_paste
  );

  useDebouncedProcess(
    inputText,
    handleRunActionStartOnly,
    settings.real_time_translation,
    settings.real_time_delay,
    shouldAutoProcessRef,
    currentMode
  );

  useKeyboardShortcuts(
    handleRunAction,
    inputText,
    settings.enter_behavior,
    clearInput,
    currentView,
    handleWordAltEscape,
  );

  // Apply theme — 'light' | 'dark' | 'system' (follow OS)
  useEffect(() => applyConfiguredTheme(normalizeTheme(settings.theme)), [settings.theme]);

  const costFractionStyle = settings?.cost_fraction_style || "muted";
  const totalCostNum = Number(settings.total_cost) || 0;
  const showCostOnActions = settings?.show_cost_on_actions !== false;
  const isLastRunCostEstimated =
    lastRunCostKind === "amount" &&
    typeof lastRunModel === "string" &&
    !lastRunModel.startsWith("openrouter/");
  const costShownInline =
    showCostOnActions && !isProcessing && lastRunCostKind === "amount";
  const outputMeta = useMemo(() => {
    const segments = [];
    if (isProcessing || elapsedTime > 0) {
      segments.push(
        <span key="elapsed">
          {t("Elapsed")}: {formatElapsedMmSs(elapsedTime, locale)}
        </span>,
      );
    }
    if (showCostOnActions && !isProcessing && lastRunCostKind === "amount") {
      segments.push(
        <span key="cost">
          {t("Cost")}: {isLastRunCostEstimated ? "~" : ""}
          {formatCost(lastRunCost, costFractionStyle, locale, { mainPartSuccess: true })}
        </span>,
      );
    }
    if (showCostOnActions) {
      segments.push(
        <span key="total">
          {t("Total")}:{" "}
          {totalCostNum > 0 ? (
            formatCost(totalCostNum, costFractionStyle, locale, { mainPartSuccess: true })
          ) : (
            <span className="text-green-400">{t("free")}</span>
          )}
        </span>,
      );
    }
    if (tokensPerSecond) {
      segments.push(
        <span key="tps">
          {t("TPS")}: {formatDecimal(tokensPerSecond, locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
        </span>,
      );
    }
    if (segments.length === 0) return null;
    return (
      <>
        {segments.map((node, i) => (
          <Fragment key={node.key ?? i}>
            {i > 0 ? " | " : null}
            {node}
          </Fragment>
        ))}
      </>
    );
  }, [
    costFractionStyle,
    elapsedTime,
    isLastRunCostEstimated,
    isProcessing,
    lastRunCost,
    lastRunCostKind,
    locale,
    showCostOnActions,
    t,
    tokensPerSecond,
    totalCostNum,
  ]);

  const outputMetaCostTooltip = useMemo(() => {
    if (costShownInline || lastRunCostKind === "none") return null;
    if (lastRunCostKind === "amount") {
      return (
        <>
          {t("Cost")}: {isLastRunCostEstimated ? "~" : null}
          {formatCost(lastRunCost, costFractionStyle, locale, { mainPartSuccess: true })}
        </>
      );
    }
    if (lastRunCostKind === "free") {
      return `${t("Cost")}: ${t("free")}`;
    }
    return t("Cost not available");
  }, [
    costFractionStyle,
    costShownInline,
    isLastRunCostEstimated,
    lastRunCost,
    lastRunCostKind,
    locale,
    t,
  ]);

  const common = {
    t,
    settings,
    isProcessing,
    processingMode,
    handleRunAction,
    handleRephraseClick,
    handleTranslateVersionChange,
    handleRewriteRephraseClick,
    handleRewriteVersionChange,
    outputHasSelection,
    rewriteOutputHasSelection,
    lastRunModel,
    outputMeta,
    outputMetaCostTooltip,
    translateOutputIsModelResult,
    translateVersions,
    selectedTranslateVersion,
    rewriteVersions,
    selectedRewriteVersion,
    layoutMode,
    autoExecuteOnPaste: settings.auto_translate_on_paste !== false,
    autoCopy: !!settings.auto_copy,
    onAutoExecuteChange: (checked) => updateSettings({ auto_translate_on_paste: checked }),
    onAutoCopyChange: (checked) => updateSettings({ auto_copy: checked }),
    useGlossary: !!settings.use_glossary,
    onUseGlossaryChange: (checked) => updateSettings({ use_glossary: checked }),
    onOpenGlossaryModal: () => {
      // Read selections from translate textareas at the moment the button is clicked
      const inputTextarea = document.querySelector<HTMLTextAreaElement>('[data-panel="input"] textarea');
      const outputTextarea = document.querySelector<HTMLTextAreaElement>('[data-panel="output"] textarea');
      const inputSel = inputTextarea && inputTextarea.selectionStart !== inputTextarea.selectionEnd
        ? inputTextarea.value.substring(inputTextarea.selectionStart, inputTextarea.selectionEnd)
        : "";
      const outputSel = outputTextarea && outputTextarea.selectionStart !== outputTextarea.selectionEnd
        ? outputTextarea.value.substring(outputTextarea.selectionStart, outputTextarea.selectionEnd)
        : "";
      setGlossaryPrefillSrcText(inputSel);
      setGlossaryPrefillTgtText(outputSel);
      setGlossaryModalOpen(true);
    },
    onOpenGlossarySettings: openSettingsGlossary,
  };

  const { leftPanel, rightPanel, workspaceTopBar = null, actionBar = null } =
    currentMode === "translate"
      ? {
          ...getTranslatePanels({
            common,
            input: {
              text: inputText,
              setText: setInputText,
              getStats: inputStats,
              clear: clearInput,
              pasteToInput,
              handlePasteEvent,
            },
            output: {
              text: outputText,
              setText: setOutputTextTranslate,
              getStats: outputStats,
              copy: copyOutput,
              onContextMenu: handleOutputContextMenu,
              textareaRefCallback: registerOutputTextarea,
            },
            options: {
              sourceLanguage,
              setSourceLanguage,
              targetLanguage,
              setTargetLanguage,
              onSwapLanguages: swapLanguages,
            },
          }),
          workspaceTopBar: null,
        }
      : currentMode === "rewrite"
        ? getRewritePanels({
            common,
            input: {
              text: inputText,
              setText: setInputText,
              getStats: inputStats,
              clear: clearInput,
              pasteToInput,
              handlePasteEvent,
            },
            output: {
              text: outputText,
              setText: setOutputTextRewrite,
              getStats: outputStats,
              copy: copyOutput,
              onContextMenu: handleRewriteOutputContextMenu,
              textareaRefCallback: registerRewriteOutputTextarea,
            },
            options: {
              rewriteMode,
              setRewriteMode,
              sourceLanguage,
              setSourceLanguage,
              showOutputDiff,
              setShowOutputDiff,
              outputIsModelResult: rewriteOutputIsModelResult,
            },
          })
        : {
            ...getTransformPanels({
              common,
              input: {
                text: inputTextTransform,
                setText: setInputTextTransform,
                getStats: () => getInputStats(inputTextTransform, t),
                clear: clearInput,
                pasteToInput,
                handlePasteEvent,
              },
              output: {
                text: outputTextTransform,
                setText: setOutputTextTransform,
                getStats: () => getOutputStats(outputTextTransform, t),
                copy: () => void copyTextToClipboard(outputTextTransform).catch(() => {}),
              },
              options: {
                transformEditMode,
                editingPrompt,
                transformPrompts,
                transformPromptId,
                selectedTransformPrompt,
                transformFromLang,
                setTransformFromLang,
                translate,
                translatePromptFields,
                improvePromptConfig,
                generatePromptConfig,
                model: activeModel,
                models,
                experienceMode,
                onExperienceModeChange: setExperienceMode,
                easyProvider: easyProvider || settings.easy_provider || "openrouter",
                presets,
                selectedPresetId: settings.selected_preset_id,
                onPresetChange: (id) => setSelectedPresetId(id),
                localLlmModels: localLlmEasyModels,
                easyLocalLlmModel: settings.easy_local_llm_model,
                onEasyLocalLlmModelChange: (id) => setEasyLocalLlmModel(id),
                onOpenSettingsGeneral: () => {
                  updateSettings({ settings_active_tab: "general" });
                  setCurrentView("settings");
                  if (isWeb) setSetting("web_view", "settings");
                },
                presetUiLocale,
                presetSourceLocale,
                handleTransformPromptSelect,
                handleTransformNewPrompt,
                handleTransformEditPrompt,
                handleTransformDuplicate,
                handleOpenExportImportPrompts,
                handleTransformSave,
                handleTransformDeleteRequest,
                handleTransformBackToRun,
                setTransformEditorDraft,
                transformTestInput,
                setTransformTestInput,
                handleTransformTest,
                transformTestOutput,
                transformTestMeta,
                transformTestRunning,
                setShowLoadSampleConfirm,
                loadSampleLoading,
              },
            }),
            workspaceTopBar: null,
          };

  if (configLoading) {
    return (
      <div id="root" className="app-loading-shell">
        <div className="app-loading" role="status" aria-live="polite">
          <LoadingLogoSvg className="app-loading-logo" />
          <span className="app-loading-label">{t("Loading…")}</span>
        </div>
      </div>
    );
  }

  if (isWeb && needsLogin) {
    return (
      <div id="root" className="flex min-h-0 flex-col h-dvh" data-web-outer>
        <div className="flex-1 min-h-0 overflow-hidden flex flex-col border border-border">
          <div className="flex-1 min-h-0 flex flex-col">
            <LoginPage onSuccess={handleWebLogin} sessionExpired={sessionExpired} />
          </div>
        </div>
      </div>
    );
  }

  const loadSampleConfirmModal = showLoadSampleConfirm && (
    <ConfirmModal
      title={t("Load sample prompts")}
      message={t("Import the sample prompts from the app config?\n\nThe prompts are in English, but after the import you can translate them to {{language}}, click in Edit > Translate prompt.", {
        language: findUILanguageEntry(locale)?.label ?? t("your language"),
      })}
      confirmLabel={t("Load")}
      cancelLabel={t("Cancel")}
      onConfirm={handleConfirmLoadSamplePrompts}
      onCancel={() => setShowLoadSampleConfirm(false)}
      maxWidth="600px"
    />
  );

  const actionErrorModal = (
    <ErrorAlertModal
      open={actionError != null}
      title={actionError?.title ?? ""}
      message={actionError?.message ?? ""}
      onClose={clearActionError}
    />
  );

  if (isWeb) {
    const useMargin = settings?.web_margin === true;
    const webOuterClass = useMargin
      ? "box-border flex min-h-0 flex-col h-dvh p-[1%_1.5%]"
      : "flex min-h-0 flex-col h-dvh";
    const webFrameClass = useMargin ? "flex-1 min-h-0 overflow-hidden flex flex-col border border-border rounded" : "flex-1 min-h-0 overflow-hidden flex flex-col border border-border";
    return (
      <>
        <div id="root" className={webOuterClass} data-web-outer>
          <div className={webFrameClass}>
            <div className="flex-1 min-h-0 flex flex-col">
              {isWeb && showChangePasswordModal && (
                <ChangePasswordModal username={currentUser?.username} onClose={() => setShowChangePasswordModal(false)} />
              )}
              <ApiKeyModal
                show={showApiKeyModal}
                isWeb={isWeb}
                apiKeyStatus={apiKeyStatus}
                onDismiss={() => setApiKeyWarningDismissed(true)}
                onOpenSettings={() => setCurrentView("settings")}
              />
              <div className="app-container">
                <Sidebar
                  currentMode={currentMode}
                  currentView={currentView}
                  onModeChange={handleModeChange}
                  onDashboardClick={handleDashboardClick}
                  onHistoryClick={handleHistoryClick}
                  showExecutionHistory={settings.keep_execution_history !== false}
                  onSettingsClick={() => {
                    setCurrentView("settings");
                    if (isWeb) setSetting("web_view", "settings");
                  }}
                  currentUser={currentUser}
                  onSignOut={isWeb ? handleWebLogout : undefined}
                  onChangePassword={isWeb ? () => setShowChangePasswordModal(true) : undefined}
                  onOpenSettingsUsers={isWeb && currentUser?.role === "admin" ? () => {
                    setOpenSettingsToTab("users");
                    setCurrentView("settings");
                    if (isWeb) setSetting("web_view", "settings");
                  } : undefined}
                />
                <MainContent
                  view={currentView}
                  currentMode={currentMode}
                  models={models}
                  activeModel={activeModel}
                  onModelChange={(model) => setSetting("last_used_model", model, { optimistic: true })}
                  onOpenSettingsModels={openSettingsModels}
                  onRemoveModel={handleRemoveModel}
                  experienceMode={experienceMode}
                  onExperienceModeChange={setExperienceMode}
                  easyProvider={easyProvider || settings.easy_provider || "openrouter"}
                  presets={presets}
                  selectedPresetId={settings.selected_preset_id}
                  onPresetChange={(id) => setSelectedPresetId(id)}
                  localLlmModels={localLlmEasyModels}
                  easyLocalLlmModel={settings.easy_local_llm_model}
                  onEasyLocalLlmModelChange={(id) => setEasyLocalLlmModel(id)}
                  onOpenSettingsGeneral={() => {
                    updateSettings({ settings_active_tab: "general" });
                    setCurrentView("settings");
                    if (isWeb) setSetting("web_view", "settings");
                  }}
                  presetUiLocale={presetUiLocale}
                  presetSourceLocale={presetSourceLocale}
                  leftPanel={leftPanel}
                  rightPanel={rightPanel}
                  workspaceTopBar={workspaceTopBar}
                  actionBar={actionBar}
                  openSettingsToTab={openSettingsToTab}
                  onOpenSettingsToTabConsumed={() => setOpenSettingsToTab(null)}
                  layoutMode={layoutMode}
                  onLayoutChange={handleLayoutChange}
                />
              </div>
            </div>
          </div>
        </div>
        {transformPromptToDelete != null && (
          <ConfirmModal
            title={t("Delete prompt")}
            message={t('Delete the prompt "{{name}}"?\n\nThis cannot be undone.', { name: transformPromptToDelete.name || t("Untitled") })}
            confirmLabel={t("Delete")}
            cancelLabel={t("Cancel")}
            onConfirm={handleConfirmTransformDelete}
            onCancel={() => setTransformPromptToDelete(null)}
            danger
          />
        )}
        {loadSampleConfirmModal}
        {actionErrorModal}
        <GlossaryAddModal
          open={glossaryModalOpen}
          onClose={() => setGlossaryModalOpen(false)}
          sourceLanguage={sourceLanguage === "Detect Language" ? null : sourceLanguage}
          targetLanguage={targetLanguage}
          prefillSourceText={glossaryPrefillSrcText}
          prefillTargetText={glossaryPrefillTgtText}
          onOpenSettings={() => {
            setGlossaryModalOpen(false);
            openSettingsGlossary();
          }}
        />
        <WordAlternativesPopover {...translateWordAltPopoverProps} />
        <WordAlternativesPopover {...rewriteWordAltPopoverProps} />
      </>
    );
  }

  return (
    <div id="root" className="flex min-h-0 flex-col h-dvh">
      <ApiKeyModal
        show={showApiKeyModal}
        isWeb={isWeb}
        apiKeyStatus={apiKeyStatus}
        onDismiss={() => setApiKeyWarningDismissed(true)}
        onOpenSettings={() => setCurrentView("settings")}
      />
      <div className="app-container">
        <Sidebar
          currentMode={currentMode}
          currentView={currentView}
          onModeChange={handleModeChange}
          onDashboardClick={handleDashboardClick}
          onHistoryClick={handleHistoryClick}
          showExecutionHistory={settings.keep_execution_history !== false}
          onSettingsClick={() => setCurrentView("settings")}
        />
        <MainContent
          view={currentView}
          currentMode={currentMode}
          models={models}
          activeModel={activeModel}
          onModelChange={(model) => setSetting("last_used_model", model, { optimistic: true })}
          onOpenSettingsModels={openSettingsModels}
          onRemoveModel={handleRemoveModel}
          experienceMode={experienceMode}
          onExperienceModeChange={setExperienceMode}
          easyProvider={easyProvider || settings.easy_provider || "openrouter"}
          presets={presets}
          selectedPresetId={settings.selected_preset_id}
          onPresetChange={(id) => setSelectedPresetId(id)}
          localLlmModels={localLlmEasyModels}
          easyLocalLlmModel={settings.easy_local_llm_model}
          onEasyLocalLlmModelChange={(id) => setEasyLocalLlmModel(id)}
          onOpenSettingsGeneral={() => {
            updateSettings({ settings_active_tab: "general" });
            setCurrentView("settings");
          }}
          presetUiLocale={presetUiLocale}
          presetSourceLocale={presetSourceLocale}
          leftPanel={leftPanel}
          rightPanel={rightPanel}
          workspaceTopBar={workspaceTopBar}
          actionBar={actionBar}
          openSettingsToTab={openSettingsToTab}
          onOpenSettingsToTabConsumed={() => setOpenSettingsToTab(null)}
          layoutMode={layoutMode}
          onLayoutChange={handleLayoutChange}
        />
      </div>
      {transformPromptToDelete != null && (
        <ConfirmModal
          title={t("Delete prompt")}
          message={t('Delete the prompt "{{name}}"?\n\nThis cannot be undone.', { name: transformPromptToDelete.name || t("Untitled") })}
          confirmLabel={t("Delete")}
          cancelLabel={t("Cancel")}
          onConfirm={handleConfirmTransformDelete}
          onCancel={() => setTransformPromptToDelete(null)}
        />
      )}
      {loadSampleConfirmModal}
      {actionErrorModal}
      <GlossaryAddModal
        open={glossaryModalOpen}
        onClose={() => setGlossaryModalOpen(false)}
        sourceLanguage={sourceLanguage === "Detect Language" ? null : sourceLanguage}
        targetLanguage={targetLanguage}
        prefillSourceText={glossaryPrefillSrcText}
        prefillTargetText={glossaryPrefillTgtText}
        onOpenSettings={() => {
          setGlossaryModalOpen(false);
          openSettingsGlossary();
        }}
      />
      <WordAlternativesPopover {...translateWordAltPopoverProps} />
      <WordAlternativesPopover {...rewriteWordAltPopoverProps} />
    </div>
  );
};

export default App;
