import { cn } from "@/lib/utils";
import TextPanel from "../TextPanel";
import StyleSelector from "../StyleSelector";
import LanguageSelector from "../LanguageSelector";
import {
  workspaceActionBarCenteredCtaClassName,
  workspaceOutputPanelHeaderRowClassName,
  workspacePaneModelIdClassName,
  workspacePaneStatsRowClassName,
  workspacePaneStatsTextClassName,
} from "./workspaceLayoutClasses";
import { WorkspaceOutputMeta } from "./WorkspaceOutputMeta";
import { WorkspaceBehaviourSwitch } from "./WorkspaceBehaviourSwitch";
import { RephraseControls } from "./RephraseControls";
import { Button } from "@/components/ui/button";
import { Zap, Square, Trash2, Clipboard, Copy } from "lucide-react";
import { getRewriteModeOptions } from "../../constants";
import { modelFooterDisplayId } from "../../utils/misc/modelIdUtils";
import { Switch, switchAccentClassName } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

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
    processingMode,
    handleRunAction,
    handleRewriteRephraseClick,
    handleRewriteVersionChange,
    rewriteOutputHasSelection,
    lastRunModel,
    outputMeta,
    outputMetaCostTooltip,
    layoutMode,
    rewriteVersions = [],
    selectedRewriteVersion = 1,
    autoExecuteOnPaste,
    autoCopy,
    onAutoExecuteChange,
    onAutoCopyChange,
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

  const rephraseControls = (
    <RephraseControls
      t={t}
      isProcessing={isProcessing}
      outputIsModelResult={!!outputIsModelResult}
      versions={rewriteVersions}
      selectedVersion={selectedRewriteVersion}
      outputHasSelection={!!rewriteOutputHasSelection}
      onRephrase={handleRewriteRephraseClick}
      onVersionChange={handleRewriteVersionChange}
      rephraseButtonTestId="rewrite-rephrase-button"
      versionSelectAriaLabel={t("Version")}
      maxVersionsTooltip={t("Maximum of 5 versions reached")}
    />
  );

  const shortcutLabel =
    settings?.enter_behavior === "Shift-Execute"
      ? `(${stripKeySymbols(t("⇧ SHIFT"))}+${stripKeySymbols(t("ENTER ↵"))})`
      : `(${stripKeySymbols(t("ENTER ↵"))})`;

  const modelId = lastRunModel ? modelFooterDisplayId(lastRunModel) : "";

  const modeSelector = (
    <StyleSelector
      label={t("Mode:")}
      value={rewriteMode}
      onChange={setRewriteMode}
      options={getRewriteModeOptions(t)}
      className="mx-0 mb-0 w-fit shrink-0"
      hugSelectWidth
    />
  );

  const fromSelector = (
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
  );

  // Split: Mode/From (left) and Rephrase/meta (right) share one row aligned to the two columns.
  // Stack: top bar keeps Mode only; From + Rephrase + meta sit above the output panel.
  const workspaceTopBar = isStack ? (
    <div className="flex w-full min-w-0 flex-wrap items-center justify-start gap-x-6 gap-y-2">
      {modeSelector}
    </div>
  ) : (
    <div className="grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-2 md:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">
      <div className="flex min-h-10 min-w-0 flex-wrap items-center gap-x-6 gap-y-2">
        {modeSelector}
        {fromSelector}
      </div>
      <div className={cn(workspaceOutputPanelHeaderRowClassName, "min-h-10")}>
        {rephraseControls}
        {outputMeta ? (
          <WorkspaceOutputMeta tooltip={outputMetaCostTooltip}>
            {outputMeta}
          </WorkspaceOutputMeta>
        ) : null}
      </div>
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
        <span className={`${workspacePaneStatsTextClassName} flex-1`}>
          {input.getStats()}
        </span>
        <div className="flex shrink-0 items-center gap-2 ms-auto">
          <WorkspaceBehaviourSwitch
            id="workspace-auto-execute-rewrite"
            label={t("Auto-execute")}
            checked={autoExecuteOnPaste}
            onCheckedChange={onAutoExecuteChange}
            title={t("Auto-execute on paste")}
          />
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
    <div className="flex flex-col h-full gap-2" data-panel="output">
      {isStack ? (
        <div className={cn(workspaceOutputPanelHeaderRowClassName, "shrink-0")}>
          {fromSelector}
          {rephraseControls}
          {outputMeta ? (
            <WorkspaceOutputMeta tooltip={outputMetaCostTooltip}>
              {outputMeta}
            </WorkspaceOutputMeta>
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
          onContextMenu={output.onContextMenu}
          textareaRefCallback={output.textareaRefCallback}
          fontFamily={settings?.font_family}
          fontSize={settings?.font_size}
          outputTint={true}
          showDiff={showOutputDiff}
          inputTextForDiff={input.text}
          outputIsModelResult={outputIsModelResult}
          onShowDiffChange={
            setShowOutputDiff ? (checked) => setShowOutputDiff(checked) : undefined
          }
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
          <WorkspaceBehaviourSwitch
            id="workspace-auto-copy-rewrite"
            label={t("Auto-copy")}
            checked={autoCopy}
            onCheckedChange={onAutoCopyChange}
            title={t("Auto-copy result to clipboard")}
          />
          {setShowOutputDiff ? (
            <div className="flex shrink-0 items-center gap-1.5">
              <Switch
                id="show-diff-rewrite"
                checked={showOutputDiff}
                onCheckedChange={setShowOutputDiff}
                className={switchAccentClassName}
              />
              <Label
                htmlFor="show-diff-rewrite"
                className={cn(
                  "m-0 cursor-pointer whitespace-nowrap text-[11px] leading-none",
                  showOutputDiff
                    ? "text-[rgba(var(--mode-accent-rgb),0.9)]"
                    : "text-muted-foreground/70",
                )}
              >
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
          ? `${t("Stop")} ${processingMode === "rewrite" || processingMode === "rewrite_alternative" ? t("Rewrite") : t("Translate")}`
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
