import { cn } from "@/lib/utils";
import TextPanel from "../TextPanel";
import StyleSelector from "../StyleSelector";
import LanguageSelector from "../LanguageSelector";
import {
  workspaceActionBarCenteredCtaClassName,
  workspaceOutputMetaClassName,
  workspaceOutputPanelHeaderRowClassName,
  workspacePaneStatsRowClassName,
} from "./workspaceLayoutClasses";
import { Button } from "@/components/ui/button";
import { Zap, Square, Trash2, Clipboard, Copy } from "lucide-react";
import { getRewriteModeOptions, REWRITE_MODE_KEYS } from "../../constants";
import { modelFooterDisplayId } from "../../utils/misc/modelIdUtils";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const REWRITE_MODE_GRAMMAR = REWRITE_MODE_KEYS[0]; // "Check Spelling & Grammar"

function stripKeySymbols(str) {
  return String(str).replace(/[⇧↵]/g, "").trim();
}

/**
 * Returns { leftPanel, rightPanel, workspaceTopBar, actionBar } for rewrite mode.
 */
export function getRewritePanels({ common, input, output, options }) {
  const {
    t,
    settings,
    isProcessing,
    processingModeRef,
    handleRunAction,
    lastRunModel,
    outputMeta,
    layoutMode,
  } = common;
  const isStack = layoutMode === "stack";
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

  const modelId = lastRunModel ? modelFooterDisplayId(lastRunModel) : "";

  const workspaceTopBar = (
    <div className="flex w-full min-w-0 flex-wrap items-center justify-start gap-x-6 gap-y-2">
      <StyleSelector
        label={t("Mode:")}
        value={rewriteMode}
        onChange={setRewriteMode}
        options={getRewriteModeOptions(t)}
        className="mx-0 mb-0 w-fit shrink-0"
        hugSelectWidth
      />
      {!isStack ? (
        <>
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
          {outputMeta ? (
            <span className={workspaceOutputMetaClassName} style={{ color: "rgba(var(--mode-accent-rgb), 0.8)" }}>
              {outputMeta}
            </span>
          ) : null}
        </>
      ) : null}
    </div>
  );

  const leftPanel = (
    <div className="flex flex-col h-full gap-2">
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
      {isStack ? (
        <div className={cn(workspaceOutputPanelHeaderRowClassName, "shrink-0")}>
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
          {outputMeta ? (
            <span className={workspaceOutputMetaClassName} style={{ color: "rgba(var(--mode-accent-rgb), 0.8)" }}>
              {outputMeta}
            </span>
          ) : null}
        </div>
      ) : null}
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
          showDiff={isGrammarMode ? showOutputDiff : false}
          inputTextForDiff={isGrammarMode ? input.text : undefined}
          outputIsModelResult={isGrammarMode ? outputIsModelResult : false}
          onShowDiffChange={
            isGrammarMode && setShowOutputDiff ? (checked) => setShowOutputDiff(checked) : undefined
          }
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
        <div className="flex shrink-0 items-center gap-2 ms-auto">
          {isGrammarMode && setShowOutputDiff && output.text ? (
            <div className="flex items-center gap-1.5">
              <Switch
                id="show-diff-rewrite"
                checked={showOutputDiff}
                onCheckedChange={setShowOutputDiff}
                className="h-4 w-7 data-[state=checked]:bg-blue-500"
              />
              <Label htmlFor="show-diff-rewrite" className="text-[11px] text-muted-foreground/70 cursor-pointer whitespace-nowrap">
                {t("Changes")}
              </Label>
            </div>
          ) : null}
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 shrink-0 border hover:text-muted-foreground"
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
        className="h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0 gap-2 shadow-[0_0_22px_rgba(59,130,246,0.35)] hover:shadow-[0_0_32px_rgba(59,130,246,0.5)] transition-shadow duration-200"
      >
        {isProcessing ? <Square className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
        {isProcessing
          ? `${t("Stop")} ${processingModeRef?.current === "rewrite" ? t("Rewrite") : t("Translate")}`
          : t("Rewrite")}
        {!isProcessing && (
          <span className="text-xs opacity-80 font-normal">{shortcutLabel}</span>
        )}
      </Button>
      <div className="min-w-0" aria-hidden />
    </div>
  );

  return { leftPanel, rightPanel, workspaceTopBar, actionBar };
}
