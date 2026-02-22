import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { makeStyles, mergeClasses, tokens, Button } from "@fluentui/react-components";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import TextPanel from "./TextPanel";
import LanguageSelector from "./LanguageSelector";
import StyleSelector from "./StyleSelector";
import LoginModal from "./LoginModal";
import { useAppContext } from "../contexts/AppContext";
import webAPI from "../utils/webApiClient";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { usePasteHandler } from "../hooks/usePasteHandler";
import { useDebouncedProcess } from "../hooks/useDebouncedProcess";
import { ALL_AVAILABLE_LANGUAGES } from "../utils/languageConstants";
import "../styles/main.css";
import { Zap, Square } from "lucide-react";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: 1,
    display: "flex",
    padding: `0 ${tokens.spacingHorizontalXL} ${tokens.spacingVerticalXL} ${tokens.spacingHorizontalXL}`,
    gap: tokens.spacingHorizontalXL,
    overflow: "hidden",
  },
  panelStack: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: 0,
    gap: "16px",
    padding: 0,
  },
  panelControls: {
    display: "flex",
    alignItems: "center",
    minHeight: "48px",
    marginBottom: tokens.spacingVerticalS,
  },
  panelFill: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
  },
  runButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: `${tokens.spacingVerticalS} 0 0 0`,
    minHeight: "44px",
    flexShrink: 0,
  },
  runButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    minWidth: "180px",
    height: "44px",
    minHeight: "44px",
    padding: `0 ${tokens.spacingHorizontalM}`,
  },
  runButtonShortcut: {
    fontSize: "12px",
    opacity: 0.8,
    fontWeight: 400,
  },
  apiKeyModalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  apiKeyModalContent: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: "8px",
    padding: "24px",
    maxWidth: "480px",
    width: "90%",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  apiKeyModalTitle: {
    marginTop: 0,
    marginBottom: "16px",
  },
  apiKeyModalMessage: {
    marginBottom: "24px",
  },
  apiKeyModalActions: {
    display: "flex",
    gap: "12px",
    justifyContent: "flex-end",
  },
  loadingRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  // Web-only: outer padding + background (margin visible on all 4 sides)
  webOuter: {
    height: "100vh",
    boxSizing: "border-box",
    padding: "1% 1.5%",
    display: "flex",
    flexDirection: "column",
  },
  // Web-only: same as webOuter but no padding (when web_margin is false)
  webOuterNoMargin: {
    height: "100vh",
    boxSizing: "border-box",
    padding: 0,
    display: "flex",
    flexDirection: "column",
  },
  // Web-only: bordered frame around the app (rounded when margin is shown)
  webFrame: {
    flex: 1,
    minHeight: 0,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #333",
    borderRadius: "4px",
  },
  // Web-only: square corners when no margin (no gap at viewport edges)
  webFrameSquare: {
    flex: 1,
    minHeight: 0,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #333",
    borderRadius: 0,
  },
  loadingWebInner: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // Root layout when inside web frame (fills frame, no fixed height)
  rootInWeb: {
    flex: 1,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
  },
});

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

/** Format seconds as "mm:ss.s" (e.g. 191.8 → "03:11.8", 8.9 → "00:08.9") */
function formatElapsedMmSs(seconds) {
  const sec = Number(seconds) || 0;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  const mm = String(m).padStart(2, "0");
  const [sInt, sFrac] = s.toFixed(1).split(".");
  const ss = String(sInt).padStart(2, "0") + "." + sFrac;
  return `${mm}:${ss}`;
}

const App = () => {
  const styles = useStyles();
  const { settings, translate, rewrite, languages, models, updateSettings, setSetting, removeModelFromList, needsLogin, sessionExpired, handleWebLogin, apiKeyStatus, configLoading } =
    useAppContext();

  const [currentMode, setCurrentMode] = useState(() => settings.app_mode || "translate");
  const [currentView, setCurrentView] = useState(() => (settings.web_view === "settings" ? "settings" : "workspace"));
  const hasRestoredViewRef = useRef(false);
  // Independent input/output per mode so switching translate ↔ rewrite keeps each view's content
  const [inputTextTranslate, setInputTextTranslate] = useState("");
  const [outputTextTranslate, setOutputTextTranslate] = useState("");
  const [inputTextRewrite, setInputTextRewrite] = useState("");
  const [outputTextRewrite, setOutputTextRewrite] = useState("");
  const inputText = currentMode === "translate" ? inputTextTranslate : inputTextRewrite;
  const outputText = currentMode === "translate" ? outputTextTranslate : outputTextRewrite;
  const setInputText = currentMode === "translate" ? setInputTextTranslate : setInputTextRewrite;
  const setOutputText = currentMode === "translate" ? setOutputTextTranslate : setOutputTextRewrite;
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

  // Restore main view (workspace vs settings) from state once when config has loaded
  useEffect(() => {
    if (hasRestoredViewRef.current || !settings || Object.keys(settings).length === 0) return;
    const view = settings.web_view;
    if (view === "settings" || view === "workspace") {
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

  // Timer and processing states
  const [isProcessing, setIsProcessing] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [tokensPerSecond, setTokensPerSecond] = useState(0);
  const [lastRunCost, setLastRunCost] = useState(0);
  const [lastRunModel, setLastRunModel] = useState(null);
  const timerRef = useRef(null);
  const tpsCalculationRef = useRef({ startTime: null, tokens: 0 });
  const startTimeRef = useRef(null);
  const abortControllerRef = useRef(null);
  const cancelledByUserRef = useRef(false);

  // Determine active model safely
  const activeModel = useMemo(() => {
    if (!models || models.length === 0) return null;

    // Check if last_used_model is still in the current models list
    if (settings.last_used_model && models.includes(settings.last_used_model)) {
      return settings.last_used_model;
    }

    // If last_used_model is stale (no longer in models list), default to first model
    return models[0];
  }, [models, settings.last_used_model]);

  // Available styles for rewrite mode
  const rewriteStyles = [
    "Check Spelling & Grammar",
    "Improve Clarity",
    "Make Formal",
    "Make Informal",
    "Shorten",
    "Expand",
    "Make Technical",
  ];

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
    setCurrentView("workspace");
    updateSettings({ app_mode: mode });
    if (isWeb) setSetting("web_view", "workspace");
  };

  const clearInput = () => {
    if (currentMode === "translate") {
      setInputTextTranslate("");
      setOutputTextTranslate("");
    } else {
      setInputTextRewrite("");
      setOutputTextRewrite("");
    }
  };

  // Cleanup timer and abort controller on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  // Web mode: check session on every navigation so expired session shows login immediately
  useEffect(() => {
    if (!isWeb || needsLogin) return;
    webAPI.checkSession().catch(() => {});
  }, [isWeb, needsLogin, currentView, currentMode]);

  const copyOutput = () => {
    navigator.clipboard.writeText(outputText);
  };

  const getInputStats = () => {
    const text = inputText;
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const paragraphs = text.trim()
      ? text.split(/\n\s*\n/).filter((p) => p.trim()).length
      : 0;

    return `Chars: ${chars} | Words: ${words} | Paragraphs: ${paragraphs}`;
  };

  const getOutputStats = () => {
    const text = outputText;
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const paragraphs = text.trim()
      ? text.split(/\n\s*\n/).filter((p) => p.trim()).length
      : 0;

    return `Chars: ${chars} | Words: ${words} | Paragraphs: ${paragraphs}`;
  };

  const formatCostDisplay = (cost) => {
    if (!cost || cost <= 0) return "free";
    return `$${cost.toFixed(5)}`;
  };

  const translateText = async (signal) => {
    const text = inputText;
    if (!text.trim()) return;

    // Start timer
    setIsProcessing(true);
    setOutputTextTranslate("translating...");
    setLastRunCost(0);
    setLastRunModel(null);
    setElapsedTime(0);
    setTokensPerSecond(0);
    startTimeRef.current = Date.now();
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!startTimeRef.current) return;
      setElapsedTime((Date.now() - startTimeRef.current) / 1000);
    }, 100);

    // Initialize TPS calculation
    tpsCalculationRef.current = {
      startTime: Date.now(),
      tokens: 0,
    };

    try {
      const result = await translate(
        text,
        targetLanguage,
        activeModel,
        sourceLanguage === "Detect Language" ? null : sourceLanguage,
        signal
      );

      // Stop timer (always)
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      startTimeRef.current = null;
      setIsProcessing(false);

      // Calculate TPS and update cost display (even when cancelled - we have usage)
      const totalTokens =
        (result.usage?.prompt_tokens || 0) +
        (result.usage?.completion_tokens || 0);
      const durationSeconds =
        (Date.now() - tpsCalculationRef.current.startTime) / 1000;
      const tps = durationSeconds > 0 ? totalTokens / durationSeconds : 0;
      setTokensPerSecond(tps);
      setLastRunCost(result.calculated_cost ?? result.usage?.cost ?? 0);
      setLastRunModel(result.model_used || result.model || lastRunModel || null);

      // If user cancelled, don't overwrite output text - keep "Translation stopped by user."
      if (cancelledByUserRef.current) {
        return;
      }

      if (result.content) {
        const cleanedContent = result.content.replace(/^\s*\n+/, "");
        setOutputTextTranslate(cleanedContent);
        // Auto-copy if enabled
        if (settings.auto_copy) {
          navigator.clipboard.writeText(cleanedContent);
        }
      }

      // Show cancellation message if cancelled
      if (result.cancelled) {
        const cancelledMessage = result.content ?
          `Translation stopped by user.\n\nPartial result captured (${totalTokens} tokens, ${result.calculated_cost ? '$' + result.calculated_cost.toFixed(5) : 'free'})` :
          "Translation stopped by user.";
        setOutputTextTranslate(cancelledMessage);
      } else if (result.error) {
        setOutputTextTranslate(`Error: ${result.error}`);
      }
    } catch (error) {
      // Stop timer on error
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      startTimeRef.current = null;
      setIsProcessing(false);
      setLastRunCost(0);
      setLastRunModel(null);
      if (error.name === 'AbortError') {
        if (!cancelledByUserRef.current) {
          setOutputTextTranslate("Translation stopped by user.");
        }
      } else {
        setOutputTextTranslate(`Error: ${error.message}`);
      }
    } finally {
      abortControllerRef.current = null;
    }
  };

  const stopProcessing = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    startTimeRef.current = null;
    setIsProcessing(false);
    abortControllerRef.current = null;
  };

  const handleTranslate = () => {
    if (isProcessing) {
      // Mark as cancelled so any late-arriving result will be ignored
      cancelledByUserRef.current = true;
      setOutputTextTranslate("Translation stopped by user.");
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      stopProcessing();
      return;
    }

    // Create new AbortController for this request
    cancelledByUserRef.current = false;
    abortControllerRef.current = new AbortController();
    translateText(abortControllerRef.current.signal);
  };

  const handleRewrite = async () => {
    if (!inputText.trim()) return;

    if (isProcessing) {
      // Mark as cancelled so any late-arriving result will be ignored
      cancelledByUserRef.current = true;
      setOutputTextRewrite("Rewrite stopped by user.");
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      stopProcessing();
      return;
    }

    // Create new AbortController for this request
    cancelledByUserRef.current = false;
    abortControllerRef.current = new AbortController();

    // Start timer
    setIsProcessing(true);
    setOutputTextRewrite("rewriting...");
    setLastRunCost(0);
    setLastRunModel(null);
    setElapsedTime(0);
    setTokensPerSecond(0);
    startTimeRef.current = Date.now();
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!startTimeRef.current) return;
      setElapsedTime((Date.now() - startTimeRef.current) / 1000);
    }, 100);

    // Initialize TPS calculation
    tpsCalculationRef.current = {
      startTime: Date.now(),
      tokens: 0,
    };

    try {
      const result = await rewrite(
        inputText,
        rewriteStyle,
        activeModel,
        abortControllerRef.current.signal
      );

      // Stop timer (always)
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      startTimeRef.current = null;
      setIsProcessing(false);

      // Update cost display (even when cancelled - we have usage)
      const totalTokens =
        (result.usage?.prompt_tokens || 0) +
        (result.usage?.completion_tokens || 0);
      const durationSeconds =
        (Date.now() - tpsCalculationRef.current.startTime) / 1000;
      const tps = durationSeconds > 0 ? totalTokens / durationSeconds : 0;
      setTokensPerSecond(tps);
      setLastRunCost(result.calculated_cost ?? result.usage?.cost ?? 0);
      setLastRunModel(result.model_used || result.model || lastRunModel || null);

      // If user cancelled, don't overwrite output text - keep "Rewrite stopped by user."
      if (cancelledByUserRef.current) {
        return;
      }

      if (result.content) {
        const cleanedContent = result.content.replace(/^\s*\n+/, "");
        setOutputTextRewrite(cleanedContent);
        // Auto-copy if enabled
        if (settings.auto_copy) {
          navigator.clipboard.writeText(cleanedContent);
        }
      }

      // Show cancellation message if cancelled
      if (result.cancelled) {
        const cancelledMessage = result.content ?
          `Rewrite stopped by user.\n\nPartial result captured (${totalTokens} tokens, ${result.calculated_cost ? '$' + result.calculated_cost.toFixed(5) : 'free'})` :
          "Rewrite stopped by user.";
        setOutputTextRewrite(cancelledMessage);
      } else if (result.error) {
        setOutputTextRewrite(`Error: ${result.error}`);
      }
    } catch (error) {
      // Stop timer on error
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      startTimeRef.current = null;
      setIsProcessing(false);
      setLastRunCost(0);
      if (error.name === 'AbortError') {
        if (!cancelledByUserRef.current) {
          setOutputTextRewrite("Rewrite stopped by user.");
        }
      } else {
        setOutputTextRewrite(`Error: ${error.message}`);
      }
    } finally {
      abortControllerRef.current = null;
    }
  };

  const handleRunAction = useCallback(() => {
    if (currentMode === "translate") {
      handleTranslate();
    } else {
      handleRewrite();
    }
  }, [currentMode, handleTranslate, handleRewrite]);

  const { pasteToInput, handlePasteEvent, shouldAutoProcessRef } = usePasteHandler(
    setInputText,
    handleRunAction,
    inputText,
    settings.auto_translate_on_paste
  );

  useDebouncedProcess(
    inputText,
    handleRunAction,
    settings.real_time_translation,
    settings.real_time_delay,
    shouldAutoProcessRef
  );

  useKeyboardShortcuts(handleRunAction, inputText, settings.enter_behavior, clearInput);

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

  const leftPanelControls =
    currentMode === "translate" ? (
      <LanguageSelector
        label="From:"
        value={sourceLanguage}
        onChange={setSourceLanguage}
        languages={languages}
        allLanguages={allLanguages}
        detectLanguage={true}
        iconColor={tokens.colorBrandForeground1}
      />
    ) : (
      <StyleSelector
        label="Style:"
        value={rewriteStyle}
        onChange={setRewriteStyle}
        styles={rewriteStyles}
        iconColor={tokens.colorPaletteLavenderBorderActive}
      />
    );

  const rightPanelControls = currentMode === "translate" && (
    <LanguageSelector
      label="To:"
      value={targetLanguage}
      onChange={setTargetLanguage}
      languages={languages}
      allLanguages={allLanguages}
      iconColor={tokens.colorStatusWarningForeground3}
    />
  );

  const outputMeta = `${isProcessing || elapsedTime > 0 ? `Time: ${formatElapsedMmSs(elapsedTime)} | ` : ""}${!isProcessing && lastRunCost > 0 ? `Cost: ${formatCostDisplay(lastRunCost)} | ` : ""}Total: ${formatCostDisplay(settings.total_cost || 0)}${tokensPerSecond ? ` | TPS: ${tokensPerSecond.toFixed(1)}` : ""}`;

  const leftPanel = (
    <div className={styles.panelStack}>
      <div className={styles.panelControls}>{leftPanelControls}</div>
      <div className={styles.panelFill}>
        <TextPanel
          title="Input"
          text={inputText}
          onTextChange={setInputText}
          placeholder="Enter text here..."
          footerStats={getInputStats()}
          onClear={clearInput}
          onPaste={pasteToInput}
          onPasteEvent={handlePasteEvent}
          fontFamily={settings?.font_family}
          fontSize={settings?.font_size}
          textColor={settings?.input_text_color}
        />
      </div>
      <div className={styles.runButtonContainer}>
        <Button
          appearance="primary"
          onClick={handleRunAction}
          className={styles.runButton}
          icon={isProcessing ? <Square size={18} /> : <Zap size={18} />}
        >
          {isProcessing
            ? `Stop ${currentMode === "translate" ? "Translate" : "Rewrite"}`
            : currentMode === "translate"
            ? "Translate"
            : "Rewrite"}
          {!isProcessing && (
            <span className={styles.runButtonShortcut}>
              {settings?.enter_behavior === "Shift-Execute" ? "(Shift+Enter)" : "(Enter)"}
            </span>
          )}
        </Button>
      </div>
    </div>
  );

  const rightPanel = (
    <div className={styles.panelStack}>
      <div className={styles.panelControls}>{rightPanelControls}</div>
      <div className={styles.panelFill}>
        <TextPanel
          title="Output"
          text={outputText}
          onTextChange={currentMode === "translate" ? setOutputTextTranslate : setOutputTextRewrite}
          placeholder="Output will appear here..."
          readOnly={true}
          headerMeta={outputMeta}
          footerStats={
            <>
              {getOutputStats()}
              <br />
              Model: {lastRunModel || "N/A"}
            </>
          }
          footerAlign="left"
          onCopy={copyOutput}
          fontFamily={settings?.font_family}
          fontSize={settings?.font_size}
          textColor={settings?.output_text_color}
        />
      </div>
      <div className={styles.runButtonContainer} aria-hidden="true" />
    </div>
  );

  // Render API key missing/invalid modal (web: server API_KEY check at startup)
  const renderApiKeyMissingModal = () => {
    if (!showApiKeyModal) return null;
    const notSet = isWeb && apiKeyStatus && !apiKeyStatus.apiKeySet;
    const message = notSet
      ? "You need to set the API_KEY environment variable on the server to use this application."
      : (apiKeyStatus && apiKeyStatus.message)
        ? apiKeyStatus.message
        : "The OpenRouter API key could not be verified. Translation and rewrite may not work.";
    return (
      <div
        className={styles.apiKeyModalOverlay}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            // Don't allow dismiss by clicking outside
          }
        }}
      >
        <div className={styles.apiKeyModalContent}>
          <h2 className={styles.apiKeyModalTitle}>API Key Required</h2>
          <p className={styles.apiKeyModalMessage}>
            {message}
          </p>
          <div className={styles.apiKeyModalActions}>
            {!notSet && (
              <Button
                appearance="secondary"
                onClick={() => setApiKeyWarningDismissed(true)}
              >
                Continue anyway
              </Button>
            )}
            <Button
              appearance="primary"
              onClick={() => {
                setApiKeyWarningDismissed(true);
                if (!notSet) setCurrentView("settings");
              }}
            >
              {notSet ? "OK" : "Open Settings"}
            </Button>
          </div>
        </div>
      </div>
    );
  };

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
      <div id="root" className={webOuterClass} data-web-outer>
        <div className={webFrameClass}>
          <div className={styles.rootInWeb}>
            {isWeb && needsLogin && (
              <LoginModal onSuccess={handleWebLogin} sessionExpired={sessionExpired} />
            )}
            {renderApiKeyMissingModal()}
            <div className="app-container">
              <Sidebar
                currentMode={currentMode}
                currentView={currentView}
                onModeChange={handleModeChange}
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
    );
  }

  return (
    <div id="root" className={styles.root}>
      {renderApiKeyMissingModal()}
      <div className="app-container">
        <Sidebar
          currentMode={currentMode}
          currentView={currentView}
          onModeChange={handleModeChange}
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
    </div>
  );
};

export default App;
