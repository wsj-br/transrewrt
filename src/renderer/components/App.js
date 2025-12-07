import React, { useState, useEffect, useRef, useMemo } from "react";
import Header from "./Header";
import ModeSelector from "./ModeSelector";
import TextPanel from "./TextPanel";
import ResizablePanels from "./ResizablePanels";
import SettingsDialog from "./SettingsDialog";
import LanguageSelector from "./LanguageSelector";
import StyleSelector from "./StyleSelector";
import { useAppContext } from "../contexts/AppContext";
import { ALL_AVAILABLE_LANGUAGES } from "../utils/languageConstants";
import "../styles/main.css";

const App = () => {
  const { settings, translate, rewrite, languages, models, updateSettings } =
    useAppContext();
  const [currentMode, setCurrentMode] = useState("translate");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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

  // Determine active model safely
  const activeModel = useMemo(() => {
    if (!models || models.length === 0) return null;
    return models.includes(settings.last_used_model)
      ? settings.last_used_model
      : models[0];
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

  useEffect(() => {
    // Set default target language if available languages exist
    if (languages.length > 0 && targetLanguage === "Spanish") {
      setTargetLanguage(languages[0]);
    }
  }, [languages]);

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
  };

  const clearInput = () => {
    setInputText("");
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
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
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
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
    if (cost < 0.01) return `c$${(cost * 100).toFixed(4)}`;
    return `$${cost.toFixed(4)}`;
  };

  const openSettings = () => {
    if (window.electronAPI && window.electronAPI.openSettings) {
      window.electronAPI.openSettings();
    } else {
      setIsSettingsOpen(true); // Fallback for pure browser dev (though IPC should mock if needed)
    }
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

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
        inputText,
        targetLanguage,
        activeModel,
        sourceLanguage === "Detect Language" ? null : sourceLanguage,
      );

      // Calculate TPS
      const endTime = Date.now();
      const durationSeconds =
        (endTime - tpsCalculationRef.current.startTime) / 1000;
      const totalTokens =
        (result.usage?.prompt_tokens || 0) +
        (result.usage?.completion_tokens || 0);
      const tps = durationSeconds > 0 ? totalTokens / durationSeconds : 0;
      setTokensPerSecond(tps);

      // Stop timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      startTimeRef.current = null;
      setIsProcessing(false);
      setLastRunCost(result.calculated_cost || 0);
      setLastRunModel(result.model_used || lastRunModel || null);

      if (result.content) {
        const cleanedContent = result.content.replace(/^\s*\n+/, "");
        setOutputText(cleanedContent);
        // Auto-copy if enabled
        if (settings.auto_copy) {
          navigator.clipboard.writeText(cleanedContent);
        }
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
      setOutputText(`Error: ${error.message}`);
    }
  };

  const handleRewrite = async () => {
    if (!inputText.trim()) return;

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
      const result = await rewrite(inputText, rewriteStyle, activeModel);

      // Calculate TPS
      const endTime = Date.now();
      const durationSeconds =
        (endTime - tpsCalculationRef.current.startTime) / 1000;
      const totalTokens =
        (result.usage?.prompt_tokens || 0) +
        (result.usage?.completion_tokens || 0);
      const tps = durationSeconds > 0 ? totalTokens / durationSeconds : 0;
      setTokensPerSecond(tps);

      // Stop timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      startTimeRef.current = null;
      setIsProcessing(false);
      setLastRunCost(result.calculated_cost || 0);
      setLastRunModel(result.model_used || lastRunModel || null);

      if (result.content) {
        const cleanedContent = result.content.replace(/^\s*\n+/, "");
        setOutputText(cleanedContent);
        // Auto-copy if enabled
        if (settings.auto_copy) {
          navigator.clipboard.writeText(cleanedContent);
        }
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
      setOutputText(`Error: ${error.message}`);
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
    }, settings.real_time_delay || 500);
  };

  // Handle text changes with debouncing
  useEffect(() => {
    if (settings.enable_real_time_processing) {
      processText();
    }
  }, [inputText]);

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

  const handleRunAction = () => {
    if (currentMode === "translate") {
      handleTranslate();
    } else {
      handleRewrite();
    }
  };

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
      />
    ) : (
      <StyleSelector
        label="Style:"
        value={rewriteStyle}
        onChange={setRewriteStyle}
        styles={rewriteStyles}
      />
    );

  const rightPanelControls = currentMode === "translate" && (
    <LanguageSelector
      label="To:"
      value={targetLanguage}
      onChange={setTargetLanguage}
      languages={languages}
      allLanguages={allLanguages}
    />
  );

  const outputMeta = `${isProcessing || elapsedTime > 0 ? `Time: ${elapsedTime.toFixed(1)}s | ` : ""}Cost: ${formatCostDisplay(lastRunCost)} | Total: ${formatCostDisplay(settings.total_cost || 0)}${tokensPerSecond ? ` | TPS: ${tokensPerSecond.toFixed(1)}` : ""}`;

  const leftPanel = (
    <div className="panel-stack panel-stack--padded">
      <div className="panel-controls">{leftPanelControls || null}</div>
      <div className="panel-fill">
        <TextPanel
          title="Input"
          text={inputText}
          onTextChange={setInputText}
          placeholder="Enter text here..."
          footerStats={getInputStats()}
          onClear={clearInput}
          onPaste={pasteToInput}
          fontFamily={settings.font_family}
          fontSize={settings.font_size}
          textColor={settings.input_text_color}
        />
      </div>
      {!settings.enable_real_time_processing && (
        <div className="panel-spacer" aria-hidden="true" />
      )}
    </div>
  );

  const rightPanel = (
    <div className="panel-stack panel-stack--padded">
      <div className="panel-controls">{rightPanelControls || null}</div>
      <div className="panel-fill">
        <TextPanel
          title="Output"
          text={outputText}
          onTextChange={setOutputText}
          placeholder="Output will appear here..."
          readOnly={true}
          headerMeta={outputMeta}
          footerStats={`${getOutputStats()} | Model: ${lastRunModel || "N/A"}`}
          onCopy={copyOutput}
          fontFamily={settings.font_family}
          fontSize={settings.font_size}
          textColor={settings.output_text_color}
        />
      </div>
      {!settings.enable_real_time_processing && (
        <div className="run-button-container run-button-container--full">
          <button className="btn primary" onClick={handleRunAction}>
            {currentMode === "translate" ? "Translate" : "Rewrite"}
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div
      id="root"
      style={{
        fontFamily: settings.font_family || "Arial",
        fontSize: `${settings.font_size || 14}px`,
      }}
    >
      <Header
        title="Translator & Rewriter"
        onSettingsClick={openSettings}
        models={models}
        currentModel={activeModel}
        onModelChange={(model) => updateSettings({ last_used_model: model })}
      />

      <ModeSelector currentMode={currentMode} onModeChange={handleModeChange} />

      <div className="content">
        <ResizablePanels leftPanel={leftPanel} rightPanel={rightPanel} />
      </div>

      <SettingsDialog isOpen={isSettingsOpen} onClose={closeSettings} />
    </div>
  );
};

export default App;
