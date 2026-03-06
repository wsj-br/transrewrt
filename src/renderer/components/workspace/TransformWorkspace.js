import React from "react";
import { mergeClasses, tokens, Button } from "@fluentui/react-components";
import TextPanel from "../TextPanel";
import LanguageSelector, { MODEL_DECIDES } from "../LanguageSelector";
import TransformPromptSelector from "../TransformPromptSelector";
import TransformPromptEditor from "../TransformPromptEditor";
import TransformTestPanel from "../TransformTestPanel";
import { Zap, Square, BookOpenText } from "lucide-react";

/**
 * Returns { leftPanel, rightPanel } for transform mode (run view and edit view).
 */
export function getTransformPanels({
  styles,
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
  inputTextTransform,
  setInputTextTransform,
  outputTextTransform,
  setOutputTextTransform,
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
  clearInput,
  pasteToInput,
  handlePasteEvent,
  settings,
  handleRunAction,
  isProcessing,
  showLoadSampleConfirm,
  setShowLoadSampleConfirm,
  loadSampleLoading,
  outputMeta,
  lastRunModel,
}) {
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
            inputTextColor={settings?.input_text_color}
            outputTextColor={settings?.output_text_color}
          />
        </div>
      </div>
    );
    return { leftPanel, rightPanel };
  }

  const inputStats =
    (() => {
      const t = inputTextTransform;
      const words = t.trim() ? t.trim().split(/\s+/).length : 0;
      return `Chars: ${t.length} | Words: ${words}`;
    })();
  const outputStats =
    (() => {
      const t = outputTextTransform;
      const words = t.trim() ? t.trim().split(/\s+/).length : 0;
      return `Chars: ${t.length} | Words: ${words}`;
    })();

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
            {loadSampleLoading ? "Loading…" : "Load sample prompts"}
          </Button>
        )}
      </div>
      <div className={styles.panelFill}>
        <TextPanel
          title="Input"
          text={inputTextTransform}
          onTextChange={setInputTextTransform}
          placeholder="Enter text to transform..."
          headerMeta={selectedTransformPrompt?.prompt_instructions?.trim() || undefined}
          footerStats={inputStats}
          onClear={clearInput}
          onPaste={pasteToInput}
          onPasteEvent={handlePasteEvent}
          fontFamily={settings?.font_family}
          fontSize={settings?.font_size}
          textColor={settings?.input_text_color}
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
          {isProcessing ? "Stop Transform" : "Transform"}
          {!isProcessing && (
            <span className={styles.runButtonShortcut}>
              {settings?.enter_behavior === "Shift-Execute" ? "(Shift+Enter)" : "(Enter)"}
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
            label="Target:"
            value={transformTargetLang || MODEL_DECIDES}
            onChange={(v) => setTransformTargetLang(v === MODEL_DECIDES ? "" : v)}
            languages={languages}
            allLanguages={allLanguages}
            allowNone={true}
            iconColor={tokens.colorStatusWarningForeground3}
          />
        )}
      </div>
      <div className={styles.panelFill}>
        <TextPanel
          title="Output"
          text={outputTextTransform}
          onTextChange={setOutputTextTransform}
          placeholder="Output will appear here..."
          readOnly={true}
          headerMeta={outputMeta}
          footerStats={
            <>
              {outputStats}
              <br />
              Model: {lastRunModel || "N/A"}
            </>
          }
          footerAlign="left"
          onCopy={() => navigator.clipboard.writeText(outputTextTransform)}
          fontFamily={settings?.font_family}
          fontSize={settings?.font_size}
          textColor={settings?.output_text_color}
        />
      </div>
      <div className={styles.runButtonContainer} aria-hidden="true" />
    </div>
  );

  return { leftPanel, rightPanel };
}
