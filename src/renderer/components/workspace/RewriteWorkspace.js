import React from "react";
import { tokens, Button } from "@fluentui/react-components";
import TextPanel from "../TextPanel";
import StyleSelector from "../StyleSelector";
import { Zap, Square } from "lucide-react";
import { REWRITE_STYLES } from "../../constants";

/**
 * Returns { leftPanel, rightPanel } for rewrite mode.
 */
export function getRewritePanels({
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
}) {
  const leftPanelControls = (
    <StyleSelector
      label="Style:"
      value={rewriteStyle}
      onChange={setRewriteStyle}
      styles={REWRITE_STYLES}
      iconColor={tokens.colorPaletteLavenderBorderActive}
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
            ? `Stop ${processingModeRef?.current === "rewrite" ? "Rewrite" : "Translate"}`
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
      <div className={styles.panelControls} />
      <div className={styles.panelFill}>
        <TextPanel
          title="Output"
          text={outputText}
          onTextChange={setOutputTextRewrite}
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
