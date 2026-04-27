import TextPanel from "../TextPanel";
import LanguageSelector from "../LanguageSelector";
import { workspaceCtaRowClassName } from "./workspaceLayoutClasses";
import { workspaceOutputFooterWithModel } from "./workspaceOutputFooter";
import { Button } from "@/components/ui/button";
import { Zap, Square, ArrowRightLeft } from "lucide-react";

/** Removes key symbols (⇧, ↵) from translated shortcut text and trims. */
function stripKeySymbols(str) {
  return String(str).replace(/[⇧↵]/g, "").trim();
}

/**
 * Returns { leftPanel, rightPanel } for translate mode.
 */
export function getTranslatePanels({ common, input, output, options }) {
  const { t, settings, isProcessing, processingModeRef, handleRunAction, lastRunModel, outputMeta } = common;
  const { sourceLanguage, setSourceLanguage, targetLanguage, setTargetLanguage } = options;

  const shortcutLabel =
    settings?.enter_behavior === "Shift-Execute"
      ? `(${stripKeySymbols(t("⇧ SHIFT"))}+${stripKeySymbols(t("ENTER ↵"))})`
      : `(${stripKeySymbols(t("ENTER ↵"))})`;

  const leftPanel = (
    <div className="flex flex-col h-full gap-3">
      <div className="flex items-center min-h-10">
        <LanguageSelector
          label={t("From:")}
          value={sourceLanguage}
          onChange={setSourceLanguage}
          detectLanguage={true}
          dataTestId="translate-from"
          iconClassName="text-emerald-500"
          iconStrokeWidth={1.6}
        />
      </div>
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
          className="min-w-44 h-11 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 gap-2 shadow-[0_0_22px_rgba(0,209,160,0.35)] hover:shadow-[0_0_32px_rgba(0,209,160,0.5)] transition-shadow duration-200"
        >
          {isProcessing ? <Square className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
          {isProcessing
            ? `${t("Stop")} ${processingModeRef?.current === "translate" ? t("Translate") : t("Rewrite")}`
            : t("Translate")}
          {!isProcessing && (
            <span className="text-xs opacity-80 font-normal">{shortcutLabel}</span>
          )}
        </Button>
      </div>
    </div>
  );

  const rightPanel = (
    <div className="flex flex-col h-full gap-3">
      <div className="flex items-center min-h-10">
        <LanguageSelector
          label={t("To:")}
          value={targetLanguage}
          onChange={setTargetLanguage}
          targetListSameAsSource={true}
          dataTestId="translate-to"
          iconClassName="text-emerald-500"
          iconStrokeWidth={1.6}
        />
      </div>
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
        />
      </div>
      <div className={workspaceCtaRowClassName} aria-hidden="true" />
    </div>
  );

  return { leftPanel, rightPanel };
}
