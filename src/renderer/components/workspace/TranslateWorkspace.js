import React from "react";
import { tokens, Button } from "@fluentui/react-components";
import TextPanel from "../TextPanel";
import LanguageSelector from "../LanguageSelector";
import { Zap, Square } from "lucide-react";

/**
 * Returns { leftPanel, rightPanel } for translate mode.
 */
export function getTranslatePanels({
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
}) {
  const leftPanelControls = (
    <LanguageSelector
      label="From:"
      value={sourceLanguage}
      onChange={setSourceLanguage}
      languages={languages}
      allLanguages={allLanguages}
      detectLanguage={true}
      iconColor={tokens.colorBrandForeground1}
    />
  );
  const rightPanelControls = (
    <LanguageSelector
      label="To:"
      value={targetLanguage}
      onChange={setTargetLanguage}
      languages={languages}
      allLanguages={allLanguages}
      iconColor={tokens.colorStatusWarningForeground3}
    />
  );

  const leftPanel = (
    <div className={styles.panelStack}>
      <div className={styles.panelControls}>{leftPanelControls}</div>
      <div className={styles.panelFill}>
        <TextPanel
          title="Input"
          text={inputText}
          onTextChange={setInputText}
          placeholder="Enter text here..."
          footerStats={inputStats()}
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
            ? `Stop ${processingModeRef?.current === "translate" ? "Translate" : "Rewrite"}`
            : "Translate"}
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
          onTextChange={setOutputTextTranslate}
          placeholder="Output will appear here..."
          readOnly={true}
          headerMeta={outputMeta}
          footerStats={
            <>
              {outputStats()}
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

  return { leftPanel, rightPanel };
}
