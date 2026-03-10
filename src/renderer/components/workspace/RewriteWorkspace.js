import React from "react";
import { tokens, Button } from "@fluentui/react-components";
import TextPanel from "../TextPanel";
import StyleSelector from "../StyleSelector";
import { Zap, Square } from "lucide-react";
import { getRewriteStyleOptions, REWRITE_STYLE_KEYS } from "../../constants";

const REWRITE_STYLE_GRAMMAR = REWRITE_STYLE_KEYS[0]; // "Check Spelling & Grammar"

/**
 * Returns { leftPanel, rightPanel } for rewrite mode.
 * @param {{ common, input, output, options }} - common: shared UI/run state; input/output: text state and actions; options: rewrite style, showOutputDiff.
 */
export function getRewritePanels({ common, input, output, options }) {
  const { t, styles, settings, isProcessing, processingModeRef, handleRunAction, lastRunModel, outputMeta } = common;
  const {
    rewriteStyle,
    setRewriteStyle,
    showOutputDiff = false,
    setShowOutputDiff,
    outputIsModelResult = false,
  } = options;
  const isGrammarStyle = rewriteStyle === REWRITE_STYLE_GRAMMAR;

  const leftPanelControls = (
    <div className={styles.rewriteControlsRow}>
      <StyleSelector
        label={t("Style:")}
        value={rewriteStyle}
        onChange={setRewriteStyle}
        options={getRewriteStyleOptions(t)}
        iconColor={tokens.colorPaletteLavenderBorderActive}
      />
    </div>
  );

  const leftPanel = (
    <div className={styles.panelStack}>
      <div className={styles.panelControls}>{leftPanelControls}</div>
      <div className={styles.panelFill}>
        <TextPanel
          title={t("Input")}
          text={input.text}
          onTextChange={input.setText}
          placeholder={t("Enter text here...")}
          footerStats={input.getStats()}
          onClear={input.clear}
          onPaste={input.pasteToInput}
          onPasteEvent={input.handlePasteEvent}
          fontFamily={settings?.font_family}
          fontSize={settings?.font_size}
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
            ? `${t("Stop")} ${processingModeRef?.current === "rewrite" ? t("Rewrite") : t("Translate")}`
            : t("Rewrite")}
          {!isProcessing && (
            <span className={styles.runButtonShortcut}>
              {settings?.enter_behavior === "Shift-Execute" ? `(${t("Shift+Enter")})` : `(${t("Enter")})`}
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
          title={t("Output")}
          text={output.text}
          onTextChange={output.setText}
          placeholder={t("Output will appear here...")}
          readOnly={true}
          headerMeta={outputMeta}
          footerStats={
            <>
              {output.getStats()}
              <br />
              {t("Model:")} {lastRunModel || t("N/A")}
            </>
          }
          footerAlign="left"
          onCopy={output.copy}
          fontFamily={settings?.font_family}
          fontSize={settings?.font_size}
          showDiff={isGrammarStyle ? showOutputDiff : false}
          inputTextForDiff={isGrammarStyle ? input.text : undefined}
          outputIsModelResult={isGrammarStyle ? outputIsModelResult : false}
          onDiffToggle={isGrammarStyle && setShowOutputDiff ? () => setShowOutputDiff((v) => !v) : undefined}
        />
      </div>
      <div className={styles.runButtonContainer} aria-hidden="true" />
    </div>
  );

  return { leftPanel, rightPanel };
}
