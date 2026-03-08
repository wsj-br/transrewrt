import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { mergeClasses } from "@fluentui/react-components";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import ConfirmModal from "./ConfirmModal";
import LoginModal from "./LoginModal";
import ApiKeyModal from "./ApiKeyModal";
import { getTranslatePanels, getRewritePanels, getTransformPanels } from "./workspace";
import { useAppContext } from "../contexts/AppContext";
import webAPI from "../utils/api/webApiClient";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { usePasteHandler } from "../hooks/usePasteHandler";
import { useDebouncedProcess } from "../hooks/useDebouncedProcess";
import { useProcessing } from "../hooks/useProcessing";
import { useTransformPrompts } from "../hooks/useTransformPrompts";
import { ALL_CONTENT_LANGUAGE_NAMES, isPredefinedContentLanguage } from "../utils/misc/languageConstants";
import { formatElapsedMmSs, formatCostDisplay, getInputStats, getOutputStats } from "../utils/misc/formatUtils";
import useAppStyles from "../hooks/useAppStyles";
import { isWeb } from "../constants";
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

const App = () => {
  const styles = useAppStyles();
  const { t } = useTranslation();
  const { settings, translate, rewrite, transform, languages, models, updateSettings, setSetting, removeModelFromList, needsLogin, sessionExpired, handleWebLogin, apiKeyStatus, configLoading, setError } =
    useAppContext();

  const [currentMode, setCurrentMode] = useState(() => settings.app_mode || "translate");
  const [currentView, setCurrentView] = useState(() => (settings.web_view === "settings" ? "settings" : "workspace"));
  const hasRestoredViewRef = useRef(false);
  // Independent input/output per mode so switching translate ↔ rewrite keeps each view's content
  const [inputTextTranslate, setInputTextTranslate] = useState("");
  const [outputTextTranslate, setOutputTextTranslate] = useState("");
  const [inputTextRewrite, setInputTextRewrite] = useState("");
  const [outputTextRewrite, setOutputTextRewrite] = useState("");
  const [apiKeyWarningDismissed, setApiKeyWarningDismissed] = useState(false);
  const apiKeyProblem = isWeb && apiKeyStatus && (!apiKeyStatus.apiKeySet || !apiKeyStatus.apiKeyValid);
  const electronApiKeyMissing = !isWeb && (!settings?.api_key || String(settings?.api_key).trim() === "");
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

  // Track if initial config has been loaded
  const [configLoaded, setConfigLoaded] = useState(false);

  // Style selection state (persisted as rewrite_style)
  const [rewriteStyle, setRewriteStyle] = useState(() => settings.rewrite_style || "Check Spelling & Grammar");
  const [showOutputDiff, setShowOutputDiff] = useState(false);

  // Determine active model safely (needed by useTransformPrompts and useProcessing)
  const activeModel = useMemo(() => {
    if (!models || models.length === 0) return null;
    if (settings.last_used_model && models.includes(settings.last_used_model)) {
      return settings.last_used_model;
    }
    return models[0];
  }, [models, settings.last_used_model]);

  const {
    transformPrompts,
    transformPromptId,
    transformEditMode,
    editingPrompt,
    inputTextTransform,
    setInputTextTransform,
    outputTextTransform,
    setOutputTextTransform,
    transformTargetLang,
    setTransformTargetLang,
    transformTestInput,
    setTransformTestInput,
    transformTestOutput,
    setTransformTestOutput,
    transformTestMeta,
    transformTestRunning,
    transformEditorDraft,
    setTransformEditorDraft,
    transformPromptToDelete,
    setTransformPromptToDelete,
    showLoadSampleConfirm,
    setShowLoadSampleConfirm,
    loadSampleLoading,
    selectedTransformPrompt,
    showTransformLangSelector,
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

  const inputText = currentMode === "translate" ? inputTextTranslate : currentMode === "rewrite" ? inputTextRewrite : inputTextTransform;
  const outputText = currentMode === "translate" ? outputTextTranslate : currentMode === "rewrite" ? outputTextRewrite : outputTextTransform;
  const setInputText = currentMode === "translate" ? setInputTextTranslate : currentMode === "rewrite" ? setInputTextRewrite : setInputTextTransform;
  const setOutputText = currentMode === "translate" ? setOutputTextTranslate : currentMode === "rewrite" ? setOutputTextRewrite : setOutputTextTransform;

  // Sync targetLanguage from settings when config loads
  useEffect(() => {
    if (settings && settings.target_language && settings.target_language !== targetLanguage) {
      setTargetLanguage(settings.target_language);
    }
  }, [settings.target_language]);

  // Sync sourceLanguage from settings when config loads
  useEffect(() => {
    if (settings && settings.source_language && settings.source_language !== sourceLanguage) {
      setSourceLanguage(settings.source_language);
    }
  }, [settings.source_language]);

  // Sync currentMode from settings when config loads
  useEffect(() => {
    if (settings?.app_mode) {
      setCurrentMode(settings.app_mode);
    }
  }, [settings.app_mode]);

  // Restore main view (workspace vs settings vs dashboard) from state once when config has loaded
  useEffect(() => {
    if (hasRestoredViewRef.current || !settings || Object.keys(settings).length === 0) return;
    const view = settings.web_view;
    if (view === "settings" || view === "workspace" || view === "dashboard") {
      hasRestoredViewRef.current = true;
      setCurrentView(view);
    }
  }, [settings, settings?.web_view]);

  // Sync rewriteStyle from settings when config loads
  useEffect(() => {
    if (settings?.rewrite_style) {
      setRewriteStyle(settings.rewrite_style);
    }
  }, [settings.rewrite_style]);

  // Persist target language when it changes, but only after config is loaded
  useEffect(() => {
    if (configLoaded && targetLanguage) {
      updateSettings({ target_language: targetLanguage });
    }
  }, [targetLanguage, configLoaded]);

  // Persist source language when it changes, but only after config is loaded
  useEffect(() => {
    if (configLoaded && sourceLanguage) {
      updateSettings({ source_language: sourceLanguage });
    }
  }, [sourceLanguage, configLoaded]);

  // Persist rewrite style when it changes, but only after config is loaded
  useEffect(() => {
    if (configLoaded && rewriteStyle) {
      updateSettings({ rewrite_style: rewriteStyle });
    }
  }, [rewriteStyle, configLoaded]);

  // Mark config as loaded after we have settings (used for persist effects and API key modal gating)
  useEffect(() => {
    if (settings && Object.keys(settings).length > 0) {
      setConfigLoaded(true);
    }
  }, [settings]);

  const {
    isProcessing,
    elapsedTime,
    tokensPerSecond,
    lastRunCost,
    lastRunModel,
    rewriteOutputIsModelResult,
    handleTranslate,
    handleRewrite,
    handleTransform,
    processingModeRef,
    handleRunAction,
    handleRunActionStartOnly,
  } = useProcessing({
    translate,
    rewrite,
    transform,
    activeModel,
    settings,
    updateSettings,
    setSetting,
    currentMode,
    setCurrentMode,
    inputTextTranslate,
    setOutputTextTranslate,
    targetLanguage,
    sourceLanguage,
    inputTextRewrite,
    setOutputTextRewrite,
    rewriteStyle,
    inputTextTransform,
    setOutputTextTransform,
    transformPrompts,
    transformPromptId,
    showTransformLangSelector,
    transformTargetLang,
  });

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
  }, [isWeb, needsLogin, currentView, currentMode]);

  const copyOutput = () => {
    navigator.clipboard.writeText(outputText);
  };

  const inputStats = () => getInputStats(inputText);
  const outputStats = () => getOutputStats(outputText);

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

  useKeyboardShortcuts(handleRunAction, inputText, settings.enter_behavior, clearInput, currentView);

  // Apply theme
  useEffect(() => {
    document.body.className = settings.theme || "light";
  }, [settings.theme]);

  // Get all languages (predefined + any custom languages from settings)
  const allLanguages = useMemo(() => {
    const selectedSet = new Set(languages);
    const customLangs = Array.from(selectedSet).filter(
      (lang) => !isPredefinedContentLanguage(lang),
    );
    return [...ALL_CONTENT_LANGUAGE_NAMES, ...customLangs].sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }),
    );
  }, [languages]);

  const outputMeta = `${isProcessing || elapsedTime > 0 ? `Time: ${formatElapsedMmSs(elapsedTime)} | ` : ""}${!isProcessing && lastRunCost > 0 ? `Cost: ${formatCostDisplay(lastRunCost)} | ` : ""}Total: ${formatCostDisplay(settings.total_cost || 0)}${tokensPerSecond ? ` | TPS: ${tokensPerSecond.toFixed(1)}` : ""}`;

  const common = {
    t,
    styles,
    settings,
    isProcessing,
    processingModeRef,
    handleRunAction,
    lastRunModel,
    outputMeta,
  };

  const { leftPanel, rightPanel } =
    currentMode === "translate"
      ? getTranslatePanels({
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
          },
          options: {
            sourceLanguage,
            setSourceLanguage,
            targetLanguage,
            setTargetLanguage,
            languages,
            allLanguages,
          },
        })
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
            },
            options: {
              rewriteStyle,
              setRewriteStyle,
              showOutputDiff,
              setShowOutputDiff,
              outputIsModelResult: rewriteOutputIsModelResult,
            },
          })
        : getTransformPanels({
            common,
            input: {
              text: inputTextTransform,
              setText: setInputTextTransform,
              getStats: () => getInputStats(inputTextTransform),
              clear: clearInput,
              pasteToInput,
              handlePasteEvent,
            },
            output: {
              text: outputTextTransform,
              setText: setOutputTextTransform,
              getStats: () => getOutputStats(outputTextTransform),
              copy: () => navigator.clipboard.writeText(outputTextTransform),
            },
            options: {
              transformEditMode,
              editingPrompt,
              transformPrompts,
              transformPromptId,
              selectedTransformPrompt,
              showTransformLangSelector,
              transformTargetLang,
              setTransformTargetLang,
              languages,
              allLanguages,
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
          });

  if (configLoading) {
    const loadingContent = (
      <div className={styles.loadingScreen}>
        <LoadingLogoSvg className={styles.loadingScreenLogo} />
        <span className={styles.loadingScreenText}>{t("Loading…")}</span>
      </div>
    );
    if (isWeb) {
      return (
        <div id="root" className={styles.webOuterNoMargin} data-web-outer>
          <div className={styles.webFrameSquare}>
            <div className={styles.loadingWebInner}>
              {loadingContent}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div id="root" className={mergeClasses(styles.root, styles.loadingRoot)}>
        {loadingContent}
      </div>
    );
  }

  if (isWeb) {
    const useMargin = settings.web_margin !== false;
    const webOuterClass = useMargin ? styles.webOuter : styles.webOuterNoMargin;
    const webFrameClass = useMargin ? styles.webFrame : styles.webFrameSquare;
    return (
      <>
        <div id="root" className={webOuterClass} data-web-outer>
          <div className={webFrameClass}>
            <div className={styles.rootInWeb}>
              {isWeb && needsLogin && (
                <LoginModal onSuccess={handleWebLogin} sessionExpired={sessionExpired} />
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
                  onSettingsClick={() => {
                    setCurrentView("settings");
                    if (isWeb) setSetting("web_view", "settings");
                  }}
                />
                <MainContent
                  view={currentView}
                  currentMode={currentMode}
                  models={models}
                  activeModel={activeModel}
                  onModelChange={(model) => updateSettings({ last_used_model: model })}
                  onOpenSettingsModels={() => {
                    updateSettings({ settings_active_tab: "models" });
                    setCurrentView("settings");
                    if (isWeb) setSetting("web_view", "settings");
                  }}
                  onRemoveModel={removeModelFromList}
                  leftPanel={leftPanel}
                  rightPanel={rightPanel}
                />
              </div>
            </div>
          </div>
        </div>
        {transformPromptToDelete != null && (
          <ConfirmModal
            title={t("Delete prompt")}
            message={t('Delete the prompt "{{name}}"? This cannot be undone.', { name: transformPromptToDelete.name || t("Untitled") })}
            confirmLabel={t("Delete")}
            cancelLabel={t("Cancel")}
            onConfirm={handleConfirmTransformDelete}
            onCancel={() => setTransformPromptToDelete(null)}
            danger
          />
        )}
        {showLoadSampleConfirm && (
          <ConfirmModal
            title={t("Load sample prompts")}
            message={t("Import the sample prompts from the app config?")}
            confirmLabel={t("Load")}
            cancelLabel={t("Cancel")}
            onConfirm={handleConfirmLoadSamplePrompts}
            onCancel={() => setShowLoadSampleConfirm(false)}
          />
        )}
      </>
    );
  }

  return (
    <div id="root" className={styles.root}>
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
          onSettingsClick={() => {
            setCurrentView("settings");
          }}
        />
        <MainContent
          view={currentView}
          currentMode={currentMode}
          models={models}
          activeModel={activeModel}
          onModelChange={(model) => updateSettings({ last_used_model: model })}
          onOpenSettingsModels={() => {
            updateSettings({ settings_active_tab: "models" });
            setCurrentView("settings");
          }}
          onRemoveModel={removeModelFromList}
          leftPanel={leftPanel}
          rightPanel={rightPanel}
        />
      </div>
      {transformPromptToDelete != null && (
        <ConfirmModal
          title={t("Delete prompt")}
          message={t('Delete the prompt "{{name}}"? This cannot be undone.', { name: transformPromptToDelete.name || t("Untitled") })}
          confirmLabel={t("Delete")}
          cancelLabel={t("Cancel")}
          onConfirm={handleConfirmTransformDelete}
          onCancel={() => setTransformPromptToDelete(null)}
        />
      )}
      {showLoadSampleConfirm && (
        <ConfirmModal
          title={t("Load sample prompts")}
          message={t("Import the sample prompts from the app config?")}
          confirmLabel={t("Load")}
          cancelLabel={t("Cancel")}
          onConfirm={handleConfirmLoadSamplePrompts}
          onCancel={() => setShowLoadSampleConfirm(false)}
        />
      )}
    </div>
  );
};

export default App;
