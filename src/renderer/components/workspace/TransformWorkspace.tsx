import TextPanel from "../TextPanel";
import LanguageSelector from "../LanguageSelector";
import TransformPromptSelector from "../TransformPromptSelector";
import TransformPromptEditor from "../TransformPromptEditor";
import TransformTestPanel from "../TransformTestPanel";
import { Button } from "@/components/ui/button";
import { Zap, Square, Trash2, Clipboard, Copy } from "lucide-react";
import {
  workspaceActionBarClassName,
  workspaceOutputMetaClassName,
  workspaceOutputPanelHeaderRowClassName,
  workspacePaneStatsRowClassName,
} from "./workspaceLayoutClasses";
import { modelFooterDisplayId } from "../../utils/misc/modelIdUtils";

function stripKeySymbols(str) {
  return String(str).replace(/[⇧↵]/g, "").trim();
}

/**
 * Returns { leftPanel, rightPanel, actionBar? } for transform mode.
 */
export function getTransformPanels({ common, input, output, options }) {
  const { t, settings, isProcessing, handleRunAction, outputMeta, lastRunModel } = common;
  const {
    transformEditMode,
    editingPrompt,
    transformPrompts,
    transformPromptId,
    selectedTransformPrompt,
    transformFromLang,
    setTransformFromLang,
    translate,
    translatePromptFields,
    improvePromptConfig,
    generatePromptConfig,
    model,
    models,
    handleTransformPromptSelect,
    handleTransformNewPrompt,
    handleTransformEditPrompt,
    handleTransformDuplicate,
    handleOpenExportImportPrompts,
    handleTransformSave,
    handleTransformDeleteRequest,
    handleTransformBackToRun,
    setTransformEditorDraft,
    transformTestInput,
    setTransformTestInput,
    handleTransformTest,
    transformTestOutput,
    transformTestMeta,
    transformTestRunning,
    setShowLoadSampleConfirm,
    loadSampleLoading,
  } = options;

  if (transformEditMode) {
    const leftPanel = (
      <div className="flex flex-col h-full">
        <TransformPromptEditor
          initialPrompt={editingPrompt}
          onSave={handleTransformSave}
          onDelete={handleTransformDeleteRequest}
          onBackToRun={handleTransformBackToRun}
          onDraftChange={setTransformEditorDraft}
          translate={translate}
          translatePromptFields={translatePromptFields}
          improvePromptConfig={improvePromptConfig}
          generatePromptConfig={generatePromptConfig}
          model={model}
          models={models}
        />
      </div>
    );
    const rightPanel = (
      <div className="flex flex-col h-full">
        <TransformTestPanel
          testInput={transformTestInput}
          onTestInputChange={setTransformTestInput}
          onTest={handleTransformTest}
          output={transformTestOutput}
          outputMeta={transformTestMeta}
          isTesting={transformTestRunning}
          onCopy={() => navigator.clipboard.writeText(transformTestOutput)}
          fontFamily={settings?.font_family}
          fontSize={settings?.font_size}
        />
      </div>
    );
    return { leftPanel, rightPanel };
  }

  const shortcutLabel =
    settings?.enter_behavior === "Shift-Execute"
      ? `(${stripKeySymbols(t("⇧ SHIFT"))}+${stripKeySymbols(t("ENTER ↵"))})`
      : `(${stripKeySymbols(t("ENTER ↵"))})`;

  const modelId = lastRunModel ? modelFooterDisplayId(lastRunModel) : "";

  const leftPanel = (
    <div className="flex flex-col h-full gap-2">
      <div className="w-full min-w-0">
        <TransformPromptSelector
          prompts={transformPrompts}
          selectedId={transformPromptId}
          selectedName={selectedTransformPrompt?.name}
          onSelect={handleTransformPromptSelect}
          onNew={handleTransformNewPrompt}
          onEdit={handleTransformEditPrompt}
          onDuplicate={handleTransformDuplicate}
          onOpenExportImport={handleOpenExportImportPrompts}
          disabled={isProcessing}
          editActive={!!editingPrompt}
          showLoadSampleButton={transformPrompts.length === 0}
          onLoadSamplePrompts={() => setShowLoadSampleConfirm(true)}
          loadSampleLoading={loadSampleLoading}
        />
      </div>
      <div className="flex-1 min-h-0">
        <TextPanel
          title={t("Input")}
          text={input.text}
          onTextChange={input.setText}
          placeholder={t("Enter text to transform...")}
          headerMeta={selectedTransformPrompt?.prompt_instructions?.trim() || undefined}
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
          label={t("From:")}
          value={transformFromLang || "Detect Language"}
          onChange={setTransformFromLang}
          detectLanguage={true}
          hideLabel
          iconClassName="text-purple-400"
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
    <div className={workspaceActionBarClassName}>
      <Button
        variant="ghost"
        size="sm"
        className="shrink-0 gap-1.5 border border-white/10 text-muted-foreground hover:text-foreground"
        onClick={input.clear}
      >
        <Trash2 className="h-3.5 w-3.5" />
        {t("Clear")}
      </Button>
      <span className="flex-1" />
      <Button
        onClick={handleRunAction}
        disabled={!selectedTransformPrompt}
        className="h-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0 gap-2 shadow-[0_0_22px_rgba(168,85,247,0.35)] hover:shadow-[0_0_32px_rgba(168,85,247,0.5)] transition-shadow duration-200"
      >
        {isProcessing ? <Square className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
        {isProcessing ? t("Stop Transform") : t("Transform")}
        {!isProcessing && (
          <span className="text-xs opacity-80 font-normal">{shortcutLabel}</span>
        )}
      </Button>
    </div>
  );

  return { leftPanel, rightPanel, actionBar };
}
