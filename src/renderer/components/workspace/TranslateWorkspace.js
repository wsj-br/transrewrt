import { tokens, Button } from "@fluentui/react-components";
import TextPanel from "../TextPanel";
import LanguageSelector from "../LanguageSelector";
import { Zap, Square } from "lucide-react";

/** Removes key symbols (⇧, ↵) from translated shortcut text and trims. */
function stripKeySymbols(str) {
  return String(str).replace(/[⇧↵]/g, "").trim();
}

/**
 * Returns { leftPanel, rightPanel } for translate mode.
 * @param {{ common, input, output, options }} - common: shared UI/run state; input/output: text state and actions; options: source/target language and language lists.
 */
export function getTranslatePanels({ common, input, output, options }) {
  const { t, styles, settings, isProcessing, processingModeRef, handleRunAction, lastRunModel, outputMeta } = common;
  const { sourceLanguage, setSourceLanguage, targetLanguage, setTargetLanguage } = options;

  const leftPanelControls = (
    <LanguageSelector
      label={t("From:")}
      value={sourceLanguage}
      onChange={setSourceLanguage}
      detectLanguage={true}
      iconColor={tokens.colorBrandForeground1}
      dataTestId="translate-from"
    />
  );
  const rightPanelControls = (
    <LanguageSelector
      label={t("To:")}
      value={targetLanguage}
      onChange={setTargetLanguage}
      targetListSameAsSource={true}
      iconColor={tokens.colorStatusWarningForeground3}
      dataTestId="translate-to"
    />
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
            ? `${t("Stop")} ${processingModeRef?.current === "translate" ? t("Translate") : t("Rewrite")}`
            : t("Translate")}
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
      <div className={styles.panelControls}>{rightPanelControls}</div>
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
        />
      </div>
      <div className={styles.runButtonContainer} aria-hidden="true" />
    </div>
  );

  return { leftPanel, rightPanel };
}
