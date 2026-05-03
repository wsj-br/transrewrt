import TextPanel from "../TextPanel";
import LanguageSelector from "../LanguageSelector";
import {
  workspaceActionBarCenteredCtaClassName,
  workspaceOutputMetaClassName,
  workspaceOutputPanelHeaderRowClassName,
  workspacePaneStatsRowClassName,
} from "./workspaceLayoutClasses";
import { getTranslateStackPanels } from "./TranslateStackPanels";
import { Button } from "@/components/ui/button";
import { Zap, Square, Trash2, Clipboard, Copy } from "lucide-react";
import { modelFooterDisplayId } from "../../utils/misc/modelIdUtils";

/** Removes key symbols (⇧, ↵) from translated shortcut text and trims. */
function stripKeySymbols(str) {
  return String(str).replace(/[⇧↵]/g, "").trim();
}

/**
 * Returns { leftPanel, rightPanel, actionBar } for translate mode.
 */
export function getTranslatePanels({ common, input, output, options }) {
  if (common.layoutMode === "stack") {
    return getTranslateStackPanels({ common, input, output, options });
  }

  const { t, settings, isProcessing, processingModeRef, handleRunAction, lastRunModel, outputMeta } = common;
  const { sourceLanguage, setSourceLanguage, targetLanguage, setTargetLanguage } = options;

  const shortcutLabel =
    settings?.enter_behavior === "Shift-Execute"
      ? `(${stripKeySymbols(t("⇧ SHIFT"))}+${stripKeySymbols(t("ENTER ↵"))})`
      : `(${stripKeySymbols(t("ENTER ↵"))})`;

  const modelId = lastRunModel ? modelFooterDisplayId(lastRunModel) : "";

  const leftPanel = (
    <div className="flex flex-col h-full gap-2">
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
          onPasteEvent={input.handlePasteEvent}
          fontFamily={settings?.font_family}
          fontSize={settings?.font_size}
          hideFooter
        />
      </div>
      <div className={workspacePaneStatsRowClassName}>
        <span className="text-[11px] text-muted-foreground/60 min-w-0 flex-1 truncate">
          {input.getStats()}
        </span>
        <div className="flex shrink-0 items-center gap-1 ms-auto">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 border border-white/8 text-muted-foreground/50 hover:text-muted-foreground"
            onClick={input.clear}
            title={t("Clear (Esc)")}
            aria-label={t("Clear (Esc)")}
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 border border-white/8 text-muted-foreground/50 hover:text-muted-foreground"
            onClick={input.pasteToInput}
            title={t("Paste")}
            aria-label={t("Paste")}
          >
            <Clipboard className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );

  const rightPanel = (
    <div className="flex flex-col h-full gap-2">
      <div className={workspaceOutputPanelHeaderRowClassName}>
        <LanguageSelector
          label={t("To:")}
          value={targetLanguage}
          onChange={setTargetLanguage}
          targetListSameAsSource={true}
          dataTestId="translate-to"
          iconClassName="text-emerald-500"
          iconStrokeWidth={1.6}
        />
        {outputMeta ? (
          <span className={workspaceOutputMetaClassName} style={{ color: "rgba(var(--mode-accent-rgb), 0.8)" }}>
            {outputMeta}
          </span>
        ) : null}
      </div>
      <div className="flex-1 min-h-0">
        <TextPanel
          title={t("Output")}
          text={output.text}
          onTextChange={output.setText}
          placeholder={t("Output will appear here...")}
          readOnly={true}
          fontFamily={settings?.font_family}
          fontSize={settings?.font_size}
          outputTint={true}
          hideFooter
        />
      </div>
      <div className={workspacePaneStatsRowClassName}>
        <span className="text-[11px] text-muted-foreground/60 min-w-0 truncate">
          {output.getStats()}
        </span>
        {modelId ? (
          <span
            className="shrink-0 font-mono text-[10.5px] truncate"
            style={{ color: "rgba(var(--mode-accent-rgb), 0.35)" }}
            title={lastRunModel || undefined}
          >
            {modelId}
          </span>
        ) : null}
        <Button
          variant="ghost"
          size="icon"
          className="ms-auto h-7 w-7 shrink-0 border hover:text-muted-foreground"
          style={{
            borderColor: "rgba(var(--mode-accent-rgb), 0.2)",
            color: "rgba(var(--mode-accent-rgb), 0.9)",
          }}
          onClick={output.copy}
          title={t("Copy")}
          aria-label={t("Copy")}
        >
          <Copy className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );

  const actionBar = (
    <div className={workspaceActionBarCenteredCtaClassName}>
      <div className="flex min-w-0 justify-self-start">
        <Button
          variant="ghost"
          size="sm"
          className="shrink-0 gap-1.5 border border-white/10 text-muted-foreground hover:text-foreground"
          onClick={input.clear}
        >
          <Trash2 className="h-3.5 w-3.5" />
          {t("Clear")}
        </Button>
      </div>
      <Button
        onClick={handleRunAction}
        className="h-10 rounded-full border-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_22px_rgba(0,209,160,0.35)] transition-shadow duration-200 hover:from-emerald-600 hover:to-teal-700 hover:shadow-[0_0_32px_rgba(0,209,160,0.5)] gap-2"
      >
        {isProcessing ? <Square className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
        {isProcessing
          ? `${t("Stop")} ${processingModeRef?.current === "translate" ? t("Translate") : t("Rewrite")}`
          : t("Translate")}
        {!isProcessing && (
          <span className="text-xs font-normal opacity-80">{shortcutLabel}</span>
        )}
      </Button>
      <div className="min-w-0" aria-hidden />
    </div>
  );

  return { leftPanel, rightPanel, actionBar };
}
