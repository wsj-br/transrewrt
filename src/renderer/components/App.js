import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { mergeClasses } from "@fluentui/react-components";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import ConfirmModal from "./ConfirmModal";
import LoginModal from "./LoginModal";
import ApiKeyModal from "./ApiKeyModal";
import { getTranslatePanels, getRewritePanels, getTransformPanels } from "./workspace";
import { useAppContext } from "../contexts/AppContext";
import webAPI from "../utils/webApiClient";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { usePasteHandler } from "../hooks/usePasteHandler";
import { useDebouncedProcess } from "../hooks/useDebouncedProcess";
import { useProcessing } from "../hooks/useProcessing";
import { useTransformPrompts } from "../hooks/useTransformPrompts";
import { ALL_AVAILABLE_LANGUAGES } from "../utils/languageConstants";
import { formatElapsedMmSs, formatCostDisplay, getInputStats, getOutputStats } from "../utils/formatUtils";
import useAppStyles from "../hooks/useAppStyles";
import { isWeb } from "../constants";
import "../styles/main.css";

const App = () => {
  const styles = useAppStyles();
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
  const showApiKeyModal = !apiKeyWarningDismissed && (apiKeyProblem || electronApiKeyMissing);

  // Language selection states
  const [sourceLanguage, setSourceLanguage] = useState(() => settings.source_language || "Detect Language");
  const [targetLanguage, setTargetLanguage] = useState(() => settings.target_language || "Spanish");

  // Track if initial config has been loaded
  const [configLoaded, setConfigLoaded] = useState(false);

  // Style selection state (persisted as rewrite_style)
  const [rewriteStyle, setRewriteStyle] = useState(() => settings.rewrite_style || "Check Spelling & Grammar");

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

  // Mark config as loaded after initial render
  useEffect(() => {
    // Check if we have meaningful settings (config has been loaded)
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
      lang => !ALL_AVAILABLE_LANGUAGES.includes(lang)
    );
    return [...ALL_AVAILABLE_LANGUAGES, ...customLangs].sort((a, b) => a.localeCompare(b));
  }, [languages]);

  const outputMeta = `${isProcessing || elapsedTime > 0 ? `Time: ${formatElapsedMmSs(elapsedTime)} | ` : ""}${!isProcessing && lastRunCost > 0 ? `Cost: ${formatCostDisplay(lastRunCost)} | ` : ""}Total: ${formatCostDisplay(settings.total_cost || 0)}${tokensPerSecond ? ` | TPS: ${tokensPerSecond.toFixed(1)}` : ""}`;

  const { leftPanel, rightPanel } =
    currentMode === "translate"
      ? getTranslatePanels({
          styles,
          sourceLanguage,
          setSourceLanguage,
          targetLanguage,
          setTargetLanguage,
          languages,
          allLanguages,
          inputText,
          setInputText,
          outputText,
          setOutputTextTranslate,
          inputStats,
          outputStats,
          clearInput,
          copyOutput,
          pasteToInput,
          handlePasteEvent,
          settings,
          handleRunAction,
          isProcessing,
          processingModeRef,
          outputMeta,
          lastRunModel,
        })
      : currentMode === "rewrite"
        ? getRewritePanels({
            styles,
            rewriteStyle,
            setRewriteStyle,
            inputText,
            setInputText,
            outputText,
            setOutputTextRewrite,
            inputStats,
            outputStats,
            clearInput,
            copyOutput,
            pasteToInput,
            handlePasteEvent,
            settings,
            handleRunAction,
            isProcessing,
            processingModeRef,
            outputMeta,
            lastRunModel,
          })
        : getTransformPanels({
            styles,
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
            inputTextTransform,
            setInputTextTransform,
            outputTextTransform,
            setOutputTextTransform,
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
            clearInput,
            pasteToInput,
            handlePasteEvent,
            settings,
            handleRunAction,
            isProcessing,
            setShowLoadSampleConfirm,
            loadSampleLoading,
            outputMeta,
            lastRunModel,
          });

  if (configLoading) {
    if (isWeb) {
      return (
        <div id="root" className={styles.webOuterNoMargin} data-web-outer>
          <div className={styles.webFrameSquare}>
            <div className={styles.loadingWebInner}>
              <span>Loading settings…</span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div id="root" className={mergeClasses(styles.root, styles.loadingRoot)}>
        <span>Loading settings…</span>
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
            title="Delete prompt"
            message={`Delete the prompt "${transformPromptToDelete.name || "Untitled"}"? This cannot be undone.`}
            confirmLabel="Delete"
            cancelLabel="Cancel"
            onConfirm={handleConfirmTransformDelete}
            onCancel={() => setTransformPromptToDelete(null)}
            danger
          />
        )}
        {showLoadSampleConfirm && (
          <ConfirmModal
            title="Load sample prompts"
            message="Import the sample prompts from the app config?"
            confirmLabel="Load"
            cancelLabel="Cancel"
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
          title="Delete prompt"
          message={`Delete the prompt "${transformPromptToDelete.name || "Untitled"}"? This cannot be undone.`}
          confirmLabel="Delete"
          cancelLabel="Cancel"
          onConfirm={handleConfirmTransformDelete}
          onCancel={() => setTransformPromptToDelete(null)}
        />
      )}
      {showLoadSampleConfirm && (
        <ConfirmModal
          title="Load sample prompts"
          message="Import the sample prompts from the app config?"
          confirmLabel="Load"
          cancelLabel="Cancel"
          onConfirm={handleConfirmLoadSamplePrompts}
          onCancel={() => setShowLoadSampleConfirm(false)}
        />
      )}
    </div>
  );
};

export default App;
