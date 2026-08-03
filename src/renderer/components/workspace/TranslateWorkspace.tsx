import TextPanel from "../TextPanel";
import LanguageSelector from "../LanguageSelector";
import {
  workspaceActionBarCenteredCtaClassName,
  workspaceOutputPanelHeaderRowClassName,
  workspacePaneModelIdClassName,
  workspacePaneStatsRowClassName,
  workspacePaneStatsTextClassName,
} from "./workspaceLayoutClasses";
import { getTranslateStackPanels } from "./TranslateStackPanels";
import { RephraseControls } from "./RephraseControls";
import { WorkspaceOutputMeta } from "./WorkspaceOutputMeta";
import { WorkspaceBehaviourSwitch } from "./WorkspaceBehaviourSwitch";
import { WorkspaceActionBarVersionLink } from "./WorkspaceActionBarVersionLink";
import { Button } from "@/components/ui/button";
import { Zap, Square, Trash2, Clipboard, Copy, BookPlus, BookOpen } from "lucide-react";
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

  const {
    t,
    settings,
    isProcessing,
    processingMode,
    handleRunAction,
    handleRephraseClick,
    handleTranslateVersionChange,
    outputHasSelection,
    lastRunModel,
    outputMeta,
    outputMetaCostTooltip,
    translateOutputIsModelResult,
    translateVersions = [],
    selectedTranslateVersion = 1,
    autoExecuteOnPaste,
    autoCopy,
    onAutoExecuteChange,
    onAutoCopyChange,
    useGlossary,
    onUseGlossaryChange,
    onOpenGlossaryModal,
    onOpenGlossarySettings,
  } = common;
  const { sourceLanguage, setSourceLanguage, targetLanguage, setTargetLanguage } = options;

  const shortcutLabel =
    settings?.enter_behavior === "Shift-Execute"
      ? `(${stripKeySymbols(t("⇧ SHIFT"))}+${stripKeySymbols(t("ENTER ↵"))})`
      : `(${stripKeySymbols(t("ENTER ↵"))})`;

  const modelId = lastRunModel ? modelFooterDisplayId(lastRunModel) : "";

  const leftPanel = (
    <div className="flex flex-col h-full gap-2" data-panel="input">
      <div className="flex items-center min-h-10 gap-2">
        <LanguageSelector
          label={t("From:")}
          value={sourceLanguage}
          onChange={setSourceLanguage}
          detectLanguage={true}
          dataTestId="translate-from"
          iconClassName="text-emerald-500"
          iconStrokeWidth={1.6}
        />
        {useGlossary && (
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={onOpenGlossaryModal}
            title={t("Add to Glossary")}
            aria-label={t("Add to Glossary")}
          >
            <BookPlus className="h-3.5 w-3.5" />
          </Button>
        )}
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
        <span className={`${workspacePaneStatsTextClassName} flex-1`}>
          {input.getStats()}
        </span>
        <div className="flex shrink-0 items-center gap-2 ms-auto">
          <WorkspaceBehaviourSwitch
            id="workspace-use-glossary-translate"
            label={t("Glossary")}
            checked={!!useGlossary}
            onCheckedChange={onUseGlossaryChange}
            title={t("Use glossary during translation")}
          />
          <WorkspaceBehaviourSwitch
            id="workspace-auto-execute-translate"
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
        <RephraseControls
          t={t}
          isProcessing={isProcessing}
          outputIsModelResult={!!translateOutputIsModelResult}
          versions={translateVersions}
          selectedVersion={selectedTranslateVersion}
          outputHasSelection={!!outputHasSelection}
          onRephrase={handleRephraseClick}
          onVersionChange={handleTranslateVersionChange}
          rephraseButtonTestId="translate-rephrase-button"
          versionSelectAriaLabel={t("Translation version")}
          maxVersionsTooltip={t("Maximum of 5 translation versions reached")}
        />
        {outputMeta ? (
          <WorkspaceOutputMeta tooltip={outputMetaCostTooltip}>
            {outputMeta}
          </WorkspaceOutputMeta>
        ) : null}
      </div>
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
          {useGlossary && (
            <Button
              variant="link"
              size="sm"
              className="h-8 gap-1.5 text-xs text-muted-foreground [&:hover]:text-blue-600 dark:[&:hover]:text-blue-400 [&:hover]:underline"
              onClick={onOpenGlossarySettings}
              title={t("Open Glossary Settings")}
            >
              <BookOpen size={14} />
              <span className="hidden md:inline">{t("Glossary")}</span>
            </Button>
          )}
          <WorkspaceBehaviourSwitch
            id="workspace-auto-copy-translate"
            label={t("Auto-copy")}
            checked={autoCopy}
            onCheckedChange={onAutoCopyChange}
            title={t("Auto-copy result to clipboard")}
          />
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
      <WorkspaceActionBarVersionLink />
    </div>
  );

  return { leftPanel, rightPanel, actionBar };
}
