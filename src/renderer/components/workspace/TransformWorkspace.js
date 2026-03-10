import React from "react";
import { mergeClasses, tokens, Button } from "@fluentui/react-components";
import TextPanel from "../TextPanel";
import LanguageSelector from "../LanguageSelector";
import TransformPromptSelector from "../TransformPromptSelector";
import TransformPromptEditor from "../TransformPromptEditor";
import TransformTestPanel from "../TransformTestPanel";
import { Zap, Square, BookOpenText } from "lucide-react";

/**
 * Returns { leftPanel, rightPanel } for transform mode (run view and edit view).
 * @param {{ common, input, output, options }} - common: shared UI/run state; input/output: text state and actions; options: transform prompts, edit state, test panel, language selector, etc.
 */
export function getTransformPanels({ common, input, output, options }) {
  const { t, styles, settings, isProcessing, handleRunAction, outputMeta, lastRunModel } = common;
  const {
    transformEditMode,
    editingPrompt,
    transformPrompts,
    transformPromptId,
    selectedTransformPrompt,
    showTransformLangSelector,
    transformTargetLang,
    setTransformTargetLang,
    languages,
    allLanguages,
    translate,
    translatePromptFields,
    improvePromptConfig,
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
      <div className={styles.panelStack}>
        <div className={styles.panelFill}>
          <TransformPromptEditor
            initialPrompt={editingPrompt}
            onSave={handleTransformSave}
            onDelete={handleTransformDeleteRequest}
            onBackToRun={handleTransformBackToRun}
            onDraftChange={setTransformEditorDraft}
            translate={translate}
            translatePromptFields={translatePromptFields}
            improvePromptConfig={improvePromptConfig}
            model={model}
            models={models}
            languages={languages}
            allLanguages={allLanguages}
          />
        </div>
      </div>
    );
    const rightPanel = (
      <div className={styles.panelStack}>
        <div className={styles.panelFill}>
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
      </div>
    );
    return { leftPanel, rightPanel };
  }

  const leftPanel = (
    <div className={styles.panelStack}>
      <div className={mergeClasses(styles.panelControls, styles.transformPanelControlsRow)}>
        <div className={styles.transformPanelControlsLeft}>
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
          />
        </div>
        {transformPrompts.length === 0 && (
          <Button
            appearance="secondary"
            className={styles.loadSampleButton}
            icon={loadSampleLoading ? undefined : <BookOpenText size={16} />}
            onClick={() => setShowLoadSampleConfirm(true)}
            disabled={isProcessing || loadSampleLoading}
          >
            {loadSampleLoading ? t("Loading…") : t("Load sample prompts")}
          </Button>
        )}
      </div>
      <div className={styles.panelFill}>
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
      <div className={styles.runButtonContainer}>
        <Button
          appearance="primary"
          onClick={handleRunAction}
          className={styles.runButton}
          icon={isProcessing ? <Square size={18} /> : <Zap size={18} />}
          disabled={!selectedTransformPrompt}
        >
          {isProcessing ? t("Stop Transform") : t("Transform")}
          {!isProcessing && (
            <span className={styles.runButtonShortcut}>
              {settings?.enter_behavior === "Shift-Execute" ? `(${t("Shift+Enter")})` : `(${t("Enter")})`}
            </span>
          )}
        </Button>
      </div>
    </div>
  );

  const rightPanel = (
    <div className={styles.panelStack}>
      <div className={styles.panelControls}>
        {showTransformLangSelector && (
          <LanguageSelector
            label={t("Target:")}
            value={transformTargetLang || "auto"}
            onChange={(v) => setTransformTargetLang(v === "auto" ? "" : v)}
            languages={languages}
            allLanguages={allLanguages}
            targetListSameAsSource={true}
            allowNone={true}
            iconColor={tokens.colorStatusWarningForeground3}
          />
        )}
      </div>
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
