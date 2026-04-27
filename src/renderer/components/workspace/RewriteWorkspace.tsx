import TextPanel from "../TextPanel";
import StyleSelector from "../StyleSelector";
import LanguageSelector from "../LanguageSelector";
import { workspaceCtaRowClassName } from "./workspaceLayoutClasses";
import { workspaceOutputFooterWithModel } from "./workspaceOutputFooter";
import { Button } from "@/components/ui/button";
import { Zap, Square } from "lucide-react";
import { getRewriteModeOptions, REWRITE_MODE_KEYS } from "../../constants";

const REWRITE_MODE_GRAMMAR = REWRITE_MODE_KEYS[0]; // "Check Spelling & Grammar"

function stripKeySymbols(str) {
  return String(str).replace(/[⇧↵]/g, "").trim();
}

/**
 * Returns { leftPanel, rightPanel, workspaceTopBar } for rewrite mode.
 * `workspaceTopBar` spans the full workspace width above the input/output grid
 * (Mode left, From right, single row).
 */
export function getRewritePanels({ common, input, output, options }) {
  const { t, settings, isProcessing, processingModeRef, handleRunAction, lastRunModel, outputMeta } = common;
  const {
    rewriteMode,
    setRewriteMode,
    sourceLanguage,
    setSourceLanguage,
    showOutputDiff = false,
    setShowOutputDiff,
    outputIsModelResult = false,
  } = options;
  const isGrammarMode = rewriteMode === REWRITE_MODE_GRAMMAR;

  const shortcutLabel =
    settings?.enter_behavior === "Shift-Execute"
      ? `(${stripKeySymbols(t("⇧ SHIFT"))}+${stripKeySymbols(t("ENTER ↵"))})`
      : `(${stripKeySymbols(t("ENTER ↵"))})`;

  const workspaceTopBar = (
    <div className="flex w-full min-w-0 flex-nowrap items-center justify-start gap-x-6 gap-y-0">
      <StyleSelector
        label={t("Mode:")}
        value={rewriteMode}
        onChange={setRewriteMode}
        options={getRewriteModeOptions(t)}
        className="mx-0 mb-0 w-fit shrink-0"
        hugSelectWidth
      />
      <LanguageSelector
        label={t("From:")}
        value={sourceLanguage}
        onChange={setSourceLanguage}
        detectLanguage={true}
        dataTestId="rewrite-from"
        hugSelectWidth
        hideLabel
        iconClassName="text-blue-400"
        iconStrokeWidth={1.6}
      />
    </div>
  );

  const leftPanel = (
    <div className="flex flex-col h-full gap-3">
      <div className="flex-1 min-h-0">
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
      <div className={workspaceCtaRowClassName}>
        <Button
          onClick={handleRunAction}
          className="min-w-44 h-11 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0 gap-2"
        >
          {isProcessing ? <Square className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
          {isProcessing
            ? `${t("Stop")} ${processingModeRef?.current === "rewrite" ? t("Rewrite") : t("Translate")}`
            : t("Rewrite")}
          {!isProcessing && (
            <span className="text-xs opacity-80 font-normal">{shortcutLabel}</span>
          )}
        </Button>
      </div>
    </div>
  );

  const rightPanel = (
    <div className="flex flex-col h-full gap-3">
      <div className="flex-1 min-h-0">
        <TextPanel
          title={t("Output")}
          text={output.text}
          onTextChange={output.setText}
          placeholder={t("Output will appear here...")}
          readOnly={true}
          headerMeta={outputMeta}
          footerStats={workspaceOutputFooterWithModel(output.getStats(), lastRunModel, t)}
          footerAlign="left"
          onCopy={output.copy}
          fontFamily={settings?.font_family}
          fontSize={settings?.font_size}
          showDiff={isGrammarMode ? showOutputDiff : false}
          inputTextForDiff={isGrammarMode ? input.text : undefined}
          outputIsModelResult={isGrammarMode ? outputIsModelResult : false}
          onShowDiffChange={
            isGrammarMode && setShowOutputDiff ? (checked) => setShowOutputDiff(checked) : undefined
          }
        />
      </div>
      <div className={workspaceCtaRowClassName} aria-hidden="true" />
    </div>
  );

  return { leftPanel, rightPanel, workspaceTopBar };
}
