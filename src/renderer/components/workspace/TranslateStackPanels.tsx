import type { MouseEvent, ReactNode } from "react";
import LanguageSelector from "../LanguageSelector";
import TextPanel from "../TextPanel";
import {
  workspaceActionBarCenteredCtaClassName,
  workspaceOutputPanelHeaderRowClassName,
  workspacePaneModelIdClassName,
  workspacePaneStatsRowClassName,
  workspacePaneStatsTextClassName,
} from "./workspaceLayoutClasses";
import { WorkspaceOutputMeta } from "./WorkspaceOutputMeta";
import { WorkspaceBehaviourSwitch } from "./WorkspaceBehaviourSwitch";
import { Button } from "@/components/ui/button";
import { Zap, Square, ArrowRightLeft, Clipboard, Copy, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { modelFooterDisplayId } from "../../utils/misc/modelIdUtils";
import { TranslateRephraseControls } from "./TranslateRephraseControls";

/** Removes key symbols (⇧, ↵) from translated shortcut text and trims. */
function stripKeySymbols(str: string) {
  return String(str).replace(/[⇧↵]/g, "").trim();
}

/** Icon-only control: thin circular border, matches split workspace pane actions. */
const paneIconButtonClass =
  "h-7 w-7 shrink-0 rounded-full border border-white/8 text-muted-foreground/50 hover:bg-accent hover:text-muted-foreground";
const paneCopyButtonClass =
  "h-7 w-7 shrink-0 rounded-full border hover:bg-white/5 hover:text-muted-foreground";

/**
 * Stacked translate workspace: From + swap above input; To + run metadata above output (same pattern as split translate / Transform).
 */
export function getTranslateStackPanels({
  common,
  input,
  output,
  options,
}: {
  common: {
    t: (key: string) => string;
    settings?: { enter_behavior?: string; font_family?: string; font_size?: number };
    isProcessing: boolean;
    processingMode?: string | null;
    handleRunAction: () => void;
    handleRephraseClick?: () => void;
    handleTranslateVersionChange?: (version: string) => void;
    outputHasSelection?: boolean;
    lastRunModel?: string | null;
    outputMeta?: ReactNode;
    outputMetaCostTooltip?: string | null;
    translateOutputIsModelResult?: boolean;
    translateVersions?: string[];
    selectedTranslateVersion?: number;
    autoExecuteOnPaste?: boolean;
    autoCopy?: boolean;
    onAutoExecuteChange?: (checked: boolean) => void;
    onAutoCopyChange?: (checked: boolean) => void;
  };
  input: {
    text: string;
    setText: (v: string) => void;
    getStats: () => string;
    clear: () => void;
    pasteToInput: () => void;
    handlePasteEvent?: (pasted: string) => void;
  };
  output: {
    text: string;
    setText: (v: string) => void;
    getStats: () => string;
    copy: () => void;
    onContextMenu?: (e: MouseEvent<HTMLTextAreaElement>) => void;
    textareaRefCallback?: (node: HTMLTextAreaElement | null) => void;
  };
  options: {
    sourceLanguage: string;
    setSourceLanguage: (v: string) => void;
    targetLanguage: string;
    setTargetLanguage: (v: string) => void;
    onSwapLanguages?: () => void;
  };
}) {
  const {
    t,
    settings,
    isProcessing,
    processingMode,
    handleRunAction,
    handleRephraseClick,
    handleTranslateVersionChange,
    outputHasSelection = false,
    lastRunModel,
    outputMeta,
    outputMetaCostTooltip,
    translateOutputIsModelResult = false,
    translateVersions = [],
    selectedTranslateVersion = 1,
    autoExecuteOnPaste = true,
    autoCopy = false,
    onAutoExecuteChange,
    onAutoCopyChange,
  } = common;

  const {
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
    onSwapLanguages,
  } = options;

  const shortcutLabel =
    settings?.enter_behavior === "Shift-Execute"
      ? `(${stripKeySymbols(t("⇧ SHIFT"))}+${stripKeySymbols(t("ENTER ↵"))})`
      : `(${stripKeySymbols(t("ENTER ↵"))})`;

  const canSwap = sourceLanguage !== "Detect Language";
  const modelId = lastRunModel ? modelFooterDisplayId(lastRunModel) : "";

  const leftPanel = (
    <div className="flex min-h-0 flex-1 flex-col gap-2">
      <div className="flex min-h-10 flex-wrap items-center gap-2">
        <LanguageSelector
          label={t("From:")}
          value={sourceLanguage}
          onChange={setSourceLanguage}
          detectLanguage={true}
          dataTestId="translate-from"
          iconClassName="text-emerald-500"
          iconStrokeWidth={1.6}
          hugSelectWidth
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-9 w-9 shrink-0 rounded-full border-white/10 bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground"
          onClick={() => onSwapLanguages?.()}
          disabled={!canSwap}
          title={t("Swap languages")}
          aria-label={t("Swap languages")}
        >
          <ArrowRightLeft className="h-4 w-4" />
        </Button>
      </div>
      <div className="min-h-0 flex-1">
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
        <span className={`${workspacePaneStatsTextClassName} flex-1`}>
          {input.getStats()}
        </span>
        <div className="flex shrink-0 items-center gap-2 ms-auto">
          {onAutoExecuteChange ? (
            <WorkspaceBehaviourSwitch
              id="workspace-auto-execute-translate-stack"
              label={t("Auto-execute")}
              checked={autoExecuteOnPaste}
              onCheckedChange={onAutoExecuteChange}
              title={t("Auto-execute on paste")}
            />
          ) : null}
          <Button
            variant="ghost"
            size="icon"
            className={paneIconButtonClass}
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
    <div className="flex min-h-0 flex-1 flex-col gap-2">
      <div className={cn(workspaceOutputPanelHeaderRowClassName, "shrink-0")}>
        <LanguageSelector
          label={t("To:")}
          value={targetLanguage}
          onChange={setTargetLanguage}
          targetListSameAsSource={true}
          dataTestId="translate-to"
          iconClassName="text-emerald-500"
          iconStrokeWidth={1.6}
          hugSelectWidth
        />
        <TranslateRephraseControls
          t={t}
          isProcessing={isProcessing}
          translateOutputIsModelResult={translateOutputIsModelResult}
          translateVersions={translateVersions}
          selectedTranslateVersion={selectedTranslateVersion}
          outputHasSelection={outputHasSelection}
          onRephrase={() => handleRephraseClick?.()}
          onVersionChange={(version) => handleTranslateVersionChange?.(version)}
        />
        {outputMeta ? (
          <WorkspaceOutputMeta tooltip={outputMetaCostTooltip}>
            {outputMeta}
          </WorkspaceOutputMeta>
        ) : null}
      </div>
      <div className="min-h-0 flex-1">
        <TextPanel
          title={t("Output")}
          text={output.text}
          onTextChange={output.setText}
          placeholder={t("Output will appear here...")}
          readOnly
          onContextMenu={output.onContextMenu}
          textareaRefCallback={output.textareaRefCallback}
          fontFamily={settings?.font_family}
          fontSize={settings?.font_size}
          outputTint={true}
          hideFooter
        />
      </div>
      <div className={workspacePaneStatsRowClassName}>
        <span className={workspacePaneStatsTextClassName}>
          {output.getStats()}
        </span>
        {modelId ? (
          <span
            className={workspacePaneModelIdClassName}
            style={{ color: "rgba(var(--mode-accent-rgb), 0.35)" }}
            title={lastRunModel || undefined}
          >
            {modelId}
          </span>
        ) : null}
        <div className="flex shrink-0 items-center gap-2 ms-auto">
          {onAutoCopyChange ? (
            <WorkspaceBehaviourSwitch
              id="workspace-auto-copy-translate-stack"
              label={t("Auto-copy")}
              checked={autoCopy}
              onCheckedChange={onAutoCopyChange}
              title={t("Auto-copy result to clipboard")}
            />
          ) : null}
          <Button
            variant="ghost"
            size="icon"
            className={paneCopyButtonClass}
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
          className="shrink-0 gap-1.5 rounded-full border border-white/10 text-muted-foreground hover:text-foreground"
          onClick={input.clear}
        >
          <Trash2 className="h-3.5 w-3.5" />
          {t("Clear")}
        </Button>
      </div>
      <Button
        data-testid="translate-run-button"
        onClick={handleRunAction}
        className="h-10 rounded-full border-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_22px_rgba(0,209,160,0.35)] transition-shadow duration-200 hover:from-emerald-600 hover:to-teal-700 hover:shadow-[0_0_32px_rgba(0,209,160,0.5)] gap-2"
      >
        {isProcessing ? <Square className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
        {isProcessing
          ? `${t("Stop")} ${processingMode === "translate" || processingMode === "translate_alternative" ? t("Translate") : t("Rewrite")}`
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
