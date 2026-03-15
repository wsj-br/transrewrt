import { tokens, Button } from "@fluentui/react-components";
import TextPanel from "../TextPanel";
import StyleSelector from "../StyleSelector";
import { Zap, Square } from "lucide-react";
import { getRewriteModeOptions, REWRITE_MODE_KEYS } from "../../constants";

const REWRITE_MODE_GRAMMAR = REWRITE_MODE_KEYS[0]; // "Check Spelling & Grammar"

/** Removes key symbols (⇧, ↵) from translated shortcut text and trims. */
function stripKeySymbols(str) {
  return String(str).replace(/[⇧↵]/g, "").trim();
}

/**
 * Returns { leftPanel, rightPanel } for rewrite mode.
 * @param {{ common, input, output, options }} - common: shared UI/run state; input/output: text state and actions; options: rewrite mode, showOutputDiff.
 */
export function getRewritePanels({ common, input, output, options }) {
  const { t, styles, settings, isProcessing, processingModeRef, handleRunAction, lastRunModel, outputMeta } = common;
  const {
    rewriteMode,
    setRewriteMode,
    showOutputDiff = false,
    setShowOutputDiff,
    outputIsModelResult = false,
  } = options;
  const isGrammarMode = rewriteMode === REWRITE_MODE_GRAMMAR;

  const leftPanelControls = (
    <div className={styles.rewriteControlsRow}>
      <StyleSelector
        label={t("Mode:")}
        value={rewriteMode}
        onChange={setRewriteMode}
        options={getRewriteModeOptions(t)}
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
              {settings?.enter_behavior === "Shift-Execute" ? `(${stripKeySymbols(t('⇧ SHIFT'))}+${stripKeySymbols(t('ENTER ↵'))})` : `(${stripKeySymbols(t('ENTER ↵'))})`}
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
          showDiff={isGrammarMode ? showOutputDiff : false}
          inputTextForDiff={isGrammarMode ? input.text : undefined}
          outputIsModelResult={isGrammarMode ? outputIsModelResult : false}
          onDiffToggle={isGrammarMode && setShowOutputDiff ? () => setShowOutputDiff((v) => !v) : undefined}
        />
      </div>
      <div className={styles.runButtonContainer} aria-hidden="true" />
    </div>
  );

  return { leftPanel, rightPanel };
}
