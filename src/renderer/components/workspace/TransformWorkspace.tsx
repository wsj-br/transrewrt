import TextPanel from "../TextPanel";
import LanguageSelector from "../LanguageSelector";
import TransformPromptSelector from "../TransformPromptSelector";
import TransformPromptEditor from "../TransformPromptEditor";
import TransformTestPanel from "../TransformTestPanel";
import { Button } from "@/components/ui/button";
import { Zap, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { workspaceCtaRowClassName } from "./workspaceLayoutClasses";
import { workspaceOutputFooterWithModel } from "./workspaceOutputFooter";

function stripKeySymbols(str) {
  return String(str).replace(/[⇧↵]/g, "").trim();
}

/**
 * Returns { leftPanel, rightPanel } for transform mode.
 */
export function getTransformPanels({ common, input, output, options }) {
  const { t, settings, isProcessing, handleRunAction, outputMeta, lastRunModel } = common;
  const {
    transformEditMode,
    editingPrompt,
    transformPrompts,
    transformPromptId,
    selectedTransformPrompt,
    showTransformLangSelector,
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

  const leftPanel = (
    <div className="flex flex-col h-full gap-3">
      <div className="flex items-center min-h-10">
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
          disabled={!selectedTransformPrompt}
          className="min-w-44 h-11 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0 gap-2"
        >
          {isProcessing ? <Square className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
          {isProcessing ? t("Stop Transform") : t("Transform")}
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
        {showTransformLangSelector && (
          <LanguageSelector
            label={t("From:")}
            value={transformFromLang || "Detect Language"}
            onChange={setTransformFromLang}
            detectLanguage={true}
            hideLabel
            iconClassName="text-purple-400"
            iconStrokeWidth={1.6}
          />
        )}
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
