import React, { useState, useEffect, useRef, useMemo } from "react";
import { makeStyles, tokens, Button } from "@fluentui/react-components";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import TextPanel from "./TextPanel";
import LanguageSelector from "./LanguageSelector";
import StyleSelector from "./StyleSelector";
import { useAppContext } from "../contexts/AppContext";
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
});

const App = () => {
  const styles = useStyles();
  const { settings, translate, rewrite, languages, models, updateSettings } =
    useAppContext();
  
  const [currentMode, setCurrentMode] = useState("translate");
  const [currentView, setCurrentView] = useState("workspace");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [showApiKeyMissing, setShowApiKeyMissing] = useState(false);

  // Language selection states
  const [sourceLanguage, setSourceLanguage] = useState("Detect Language");
  const [targetLanguage, setTargetLanguage] = useState("Spanish");

  // Style selection state
  const [rewriteStyle, setRewriteStyle] = useState("Check Spelling & Grammar");

  // Timer and processing states
  const [isProcessing, setIsProcessing] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [tokensPerSecond, setTokensPerSecond] = useState(0);
  const [lastRunCost, setLastRunCost] = useState(0);
  const [lastRunModel, setLastRunModel] = useState(null);
  const timerRef = useRef(null);
  const debounceRef = useRef(null);
  const tpsCalculationRef = useRef({ startTime: null, tokens: 0 });
  const startTimeRef = useRef(null);
  const inputTextRef = useRef("");
  const shouldAutoProcessRef = useRef(false);
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

  // Check for missing API key on startup and after settings change
  useEffect(() => {
    const apiKey = settings?.api_key;
    if (!apiKey || apiKey.trim() === "") {
      setShowApiKeyMissing(true);
      setCurrentView("settings");
    } else {
      setShowApiKeyMissing(false);
    }
  }, [settings?.api_key]);

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

  useEffect(() => {
    // Set default target language if available languages exist
    if (languages.length > 0 && targetLanguage === "Spanish") {
      setTargetLanguage(languages[0]);
    }
  }, [languages]);

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
    setCurrentView("workspace");
  };

  const clearInput = () => {
    setInputText("");
    setOutputText("");
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

  const copyOutput = () => {
    navigator.clipboard.writeText(outputText);
  };

  const pasteToInput = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        setInputText(text);
        // Automatically translate/rewrite after pasting (when setting enabled)
        if (text.trim() && settings.auto_translate_on_paste !== false) {
          setTimeout(() => {
            handleRunAction();
          }, 150);
        }
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };

  const handlePasteEvent = (pastedText) => {
    // This is called when text is pasted into the textarea
    // Set the flag immediately so the useEffect can catch it (only when auto-translate on paste is enabled)
    if (pastedText && pastedText.trim() && settings.auto_translate_on_paste !== false) {
      shouldAutoProcessRef.current = true;
      // Also trigger processing directly after state update
      // Use multiple attempts to ensure we catch the state update
      const attemptProcess = (attempt = 0) => {
        if (attempt > 10) return; // Max 10 attempts (500ms)
        setTimeout(() => {
          // Check if state has been updated with the pasted text
          const currentText = inputTextRef.current;
          if (currentText && currentText.includes(pastedText.trim().substring(0, 10))) {
            // State has been updated, process it
            shouldAutoProcessRef.current = false;
            handleRunAction();
          } else {
            // State not updated yet, try again
            attemptProcess(attempt + 1);
          }
        }, 50);
      };
      attemptProcess();
    }
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

  const translateText = async (textToTranslate, signal) => {
    const text = textToTranslate || inputText;
    if (!text.trim()) return;

    // Start timer
    setIsProcessing(true);
    setOutputText("translating...");
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
        setOutputText(cleanedContent);
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
        setOutputText(cancelledMessage);
      } else if (result.error) {
        setOutputText(`Error: ${result.error}`);
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
          setOutputText("Translation stopped by user.");
        }
      } else {
        setOutputText(`Error: ${error.message}`);
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
      setOutputText("Translation stopped by user.");
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      stopProcessing();
      return;
    }

    // Create new AbortController for this request
    cancelledByUserRef.current = false;
    abortControllerRef.current = new AbortController();
    translateText(inputText, abortControllerRef.current.signal);
  };

  const handleRewrite = async () => {
    if (!inputText.trim()) return;

    if (isProcessing) {
      // Mark as cancelled so any late-arriving result will be ignored
      cancelledByUserRef.current = true;
      setOutputText("Rewrite stopped by user.");
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
    setOutputText("rewriting...");
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
        setOutputText(cleanedContent);
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
        setOutputText(cancelledMessage);
      } else if (result.error) {
        setOutputText(`Error: ${result.error}`);
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
          setOutputText("Rewrite stopped by user.");
        }
      } else {
        setOutputText(`Error: ${error.message}`);
      }
    } finally {
      abortControllerRef.current = null;
    }
  };

  const handleRunAction = () => {
    if (currentMode === "translate") {
      handleTranslate();
    } else {
      handleRewrite();
    }
  };

  // Debounced processing function
  const processText = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      if (inputText.trim()) {
        handleRunAction();
      }
    }, settings.real_time_delay || 1000);
  };

  // Update ref whenever inputText changes
  useEffect(() => {
    inputTextRef.current = inputText;
    
    // If paste event triggered auto-process, handle it after state update
    if (shouldAutoProcessRef.current && inputText.trim()) {
      shouldAutoProcessRef.current = false;
      // Use a small delay to ensure state is fully updated and all effects have run
      setTimeout(() => {
        handleRunAction();
      }, 50);
      return; // Don't process via real-time translation if we're auto-processing from paste
    }
  }, [inputText]);

  // Handle text changes with debouncing
  useEffect(() => {
    // Only process if real-time translation is explicitly enabled (true)
    // and we're not auto-processing from a paste event
    if (settings.real_time_translation === true && !shouldAutoProcessRef.current) {
      processText();
    }
  }, [inputText, settings.real_time_translation]);

  // Apply theme
  useEffect(() => {
    document.body.className = settings.theme || "light";
  }, [settings.theme]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ctrl+Enter or Cmd+Enter to process text
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        handleRunAction();
      }

      // Enter key behavior based on settings
      if (event.key === "Enter" && !event.ctrlKey && !event.metaKey) {
        const behavior = settings.enter_behavior || "Translate";
        const hasText = inputText.trim();

        if (behavior === "Translate" && hasText) {
          event.preventDefault();
          handleRunAction();
        } else if (
          behavior === "Shift-Translate" &&
          event.shiftKey &&
          hasText
        ) {
          event.preventDefault();
          handleRunAction();
        }
        // "Newline" or other behaviors fall through to default Enter
      }

      // Escape to clear input
      if (event.key === "Escape") {
        clearInput();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    inputText,
    currentMode,
    sourceLanguage,
    targetLanguage,
    rewriteStyle,
    settings.enter_behavior,
  ]);

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
        iconColor={tokens.colorBrandForeground1}
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

  const outputMeta = `${isProcessing || elapsedTime > 0 ? `Time: ${elapsedTime.toFixed(1)}s | ` : ""}${!isProcessing && lastRunCost > 0 ? `Cost: ${formatCostDisplay(lastRunCost)} | ` : ""}Total: ${formatCostDisplay(settings.total_cost || 0)}${tokensPerSecond ? ` | TPS: ${tokensPerSecond.toFixed(1)}` : ""}`;

  const leftPanel = (
    <div className={styles.panelStack}>
      <div className={styles.panelControls}>{leftPanelControls || null}</div>
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
      <div className={styles.runButtonContainer} style={{ visibility: 'hidden' }}>
        <Button style={{ minWidth: "180px", height: "44px" }} disabled>
          Spacer
        </Button>
      </div>
    </div>
  );

  const rightPanel = (
    <div className={styles.panelStack}>
      <div className={styles.panelControls}>{rightPanelControls || null}</div>
      <div className={styles.panelFill}>
        <TextPanel
          title="Output"
          text={outputText}
          onTextChange={setOutputText}
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
            <span style={{ fontSize: "12px", opacity: 0.8, fontWeight: 400 }}>
              (Ctrl+Enter)
            </span>
          )}
        </Button>
      </div>
    </div>
  );

  // Render API key missing modal
  const renderApiKeyMissingModal = () => {
    if (!showApiKeyMissing) return null;
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}
        onClick={(e) => {
          // Prevent clicks inside modal from closing
          if (e.target === e.currentTarget) {
            // Don't allow dismiss by clicking outside; user must set API key
          }
        }}
      >
        <div
          style={{
            backgroundColor: tokens.colorNeutralBackground1,
            borderRadius: '8px',
            padding: '24px',
            maxWidth: '480px',
            width: '90%',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            border: `1px solid ${tokens.colorNeutralStroke1}`,
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: '16px' }}>API Key Required</h2>
          <p style={{ marginBottom: '24px' }}>
            To use the Translator & Rewriter, you need to configure your OpenRouter API key.
            Please open Settings to add your API key.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
            <Button
              appearance="primary"
              onClick={() => {
                setShowApiKeyMissing(false);
                setCurrentView("settings");
              }}
            >
              Open Settings
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="root" className={styles.root}>
      {renderApiKeyMissingModal()}
      <div className="app-container">
        <Sidebar
          currentMode={currentMode}
          currentView={currentView}
          onModeChange={handleModeChange}
          onSettingsClick={() => setCurrentView("settings")}
        />
        <MainContent
          view={currentView}
          currentMode={currentMode}
          models={models}
          activeModel={activeModel}
          onModelChange={(model) => updateSettings({ last_used_model: model })}
          leftPanel={leftPanel}
          rightPanel={rightPanel}
        />
      </div>
    </div>
  );
};

export default App;
