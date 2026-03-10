import React, { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  makeStyles,
  tokens,
  Button,
  Input,
  Label,
  Checkbox,
  Slider,
} from "@fluentui/react-components";
import { ArrowLeft, Save, Trash2, X, Languages, Bot } from "lucide-react";
import TranslatePromptFieldsModal from "./TranslatePromptFieldsModal";
import ImprovePromptConfigModal from "./ImprovePromptConfigModal";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: tokens.spacingVerticalM,
    overflow: "auto",
    paddingRight: "12px",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    flexShrink: 0,
  },
  backButton: {
    flexShrink: 0,
    backgroundColor: tokens.colorNeutralBackground3,
    border: "none",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground4,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    flex: 1,
    minHeight: 0,
    marginTop: "18px",
    "& input": { color: "#fff" },
    "& textarea": { color: "#fff" },
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    marginBottom: "12px",
  },
  textarea: {
    minHeight: "140px",
    resize: "vertical",
    padding: tokens.spacingVerticalS,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  temperatureSliderGrid: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    gridTemplateRows: "auto auto",
    alignItems: "center",
    rowGap: "4px",
    columnGap: tokens.spacingHorizontalM,
  },
  temperatureValue: {
    gridColumn: "2",
    gridRow: "1",
    fontSize: "14px",
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
    textAlign: "center",
  },
  temperatureLabelLeft: {
    gridColumn: "1",
    gridRow: "2",
    fontSize: "12px",
    color: tokens.colorNeutralForeground3,
    whiteSpace: "nowrap",
  },
  temperatureSlider: {
    gridColumn: "2",
    gridRow: "2",
    width: "100%",
    minWidth: 0,
  },
  temperatureLabelRight: {
    gridColumn: "3",
    gridRow: "2",
    fontSize: "12px",
    color: tokens.colorNeutralForeground3,
    whiteSpace: "nowrap",
  },
  actionsRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
    gap: tokens.spacingVerticalS,
    flexShrink: 0,
  },
  actions: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
    flexWrap: "wrap",
    flexShrink: 0,
  },
});

/** Parse instructions from DB (JSON array string or array) to array of strings. */
function parseInstructions(value) {
  if (Array.isArray(value)) return value.filter((s) => typeof s === "string");
  if (typeof value !== "string" || !value.trim()) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((s) => typeof s === "string") : [];
  } catch (_) {
    return value.split(/\n/).map((s) => s.trim()).filter(Boolean);
  }
}

/** Format instructions array for textarea (one line per item). */
function formatInstructionsForDisplay(arr) {
  return Array.isArray(arr) ? arr.join("\n") : "";
}

/** Round value to nearest step (e.g. 0.05). */
function roundToStep(value, step) {
  return Math.round(value / step) * step;
}

/** Normalize DB/import value to boolean: true = ask for target language at run time. */
function normalizeAskTargetLanguage(value) {
  if (value === true || value === 1) return true;
  if (value === false || value === 0 || value === "0") return false;
  if (typeof value === "string" && (value === "1" || value.toLowerCase() === "true" || value.trim() !== "")) return true;
  return false;
}

const TransformPromptEditor = ({
  initialPrompt,
  onSave,
  onDelete,
  onBackToRun,
  onDraftChange,
  translate,
  translatePromptFields,
  improvePromptConfig,
  model,
  models = [],
  languages = [],
  allLanguages = [],
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const translateAbortRef = useRef(null);
  const improveAbortRef = useRef(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [instructionsText, setInstructionsText] = useState("");
  const [outputDescription, setOutputDescription] = useState("transformed");
  const [temperature, setTemperature] = useState(0.4);
  const [askTargetLanguage, setAskTargetLanguage] = useState(false);
  const [promptInstructions, setPromptInstructions] = useState("");
  const [showTranslateModal, setShowTranslateModal] = useState(false);
  const [translateTargetLang, setTranslateTargetLang] = useState("");
  const [translateLoading, setTranslateLoading] = useState(false);
  const [translateError, setTranslateError] = useState(null);
  const [showImproveModal, setShowImproveModal] = useState(false);
  const [improveLoading, setImproveLoading] = useState(false);
  const [improveError, setImproveError] = useState(null);

  useEffect(() => {
    if (initialPrompt) {
      setName(initialPrompt.name || "");
      setRole(initialPrompt.role || "");
      setInstructionsText(formatInstructionsForDisplay(parseInstructions(initialPrompt.instructions)));
      setOutputDescription(initialPrompt.output_description ?? "transformed");
      setTemperature(roundToStep(Number(initialPrompt.temperature) || 0.4, 0.05));
      setAskTargetLanguage(normalizeAskTargetLanguage(initialPrompt.target_language));
      setPromptInstructions(initialPrompt.prompt_instructions ?? "");
    } else {
      setName("");
      setRole("");
      setInstructionsText("");
      setOutputDescription("transformed");
      setTemperature(0.4);
      setAskTargetLanguage(false);
      setPromptInstructions("");
    }
  }, [initialPrompt]);

  const buildDraft = useCallback(() => {
    const instructions = instructionsText
      .split(/\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    const promptInstructionsTrimmed = promptInstructions.trim();
    return {
      name: name.trim() || "",
      role: role.trim() || "",
      instructions,
      output_description: outputDescription.trim() || "transformed",
      temperature: Math.max(0, Math.min(1, Number(temperature) || 0.4)),
      target_language: askTargetLanguage,
      prompt_instructions: promptInstructionsTrimmed || null,
    };
  }, [name, role, instructionsText, outputDescription, temperature, askTargetLanguage, promptInstructions]);

  useEffect(() => {
    onDraftChange?.(buildDraft());
  }, [buildDraft, onDraftChange]);

  const handleSave = () => {
    const payload = buildDraft();
    if (!payload.name.trim()) return;
    onSave?.(payload);
  };

  const handleDelete = () => {
    if (initialPrompt?.id != null) onDelete?.(initialPrompt);
  };

  const canShowTranslateButton = translatePromptFields && (model || (models && models.length > 0)) && typeof translatePromptFields === "function";
  const canShowImproveButton = improvePromptConfig && (model || (models && models.length > 0)) && typeof improvePromptConfig === "function";

  const openTranslateModal = () => {
    const firstLang = (languages && languages[0]) || (allLanguages && allLanguages[0]) || "";
    setTranslateTargetLang(firstLang);
    setTranslateError(null);
    setShowTranslateModal(true);
  };

  const handleTranslateCancel = () => {
    if (translateAbortRef.current) {
      translateAbortRef.current.abort();
      translateAbortRef.current = null;
    }
    setShowTranslateModal(false);
    setTranslateLoading(false);
    setTranslateError(null);
  };

  const handleTranslateConfirm = async (selectedModel) => {
    if (!translatePromptFields || !selectedModel || !translateTargetLang) return;
    const nameVal = name.trim();
    const promptInstructionsVal = promptInstructions.trim();
    const roleVal = role.trim();
    const instructionsVal = instructionsText.trim();
    const outputDescVal = outputDescription.trim();
    const fieldsObject = {};
    if (nameVal) fieldsObject.name = nameVal;
    if (promptInstructionsVal) fieldsObject.prompt_instructions = promptInstructionsVal;
    if (roleVal) fieldsObject.role = roleVal;
    if (instructionsVal) fieldsObject.instructions = instructionsVal;
    if (outputDescVal) fieldsObject.output_description = outputDescVal;
    if (Object.keys(fieldsObject).length === 0) {
      setTranslateError(t("No text to translate"));
      return;
    }
    const controller = new AbortController();
    translateAbortRef.current = controller;
    setTranslateLoading(true);
    setTranslateError(null);
    try {
      const result = await translatePromptFields(fieldsObject, translateTargetLang, selectedModel, controller.signal);
      if (result?.error) {
        setTranslateError(result.error || t("Translation failed"));
        return;
      }
      const res = result?.content;
      if (res && typeof res === "object") {
        if (res.name != null) setName(String(res.name).replace(/^\s*\n+/, "").trim());
        if (res.prompt_instructions != null) setPromptInstructions(String(res.prompt_instructions).replace(/^\s*\n+/, "").trim());
        if (res.role != null) setRole(String(res.role).replace(/^\s*\n+/, "").trim());
        if (res.instructions != null) setInstructionsText(String(res.instructions).replace(/^\s*\n+/, "").trim());
        if (res.output_description != null) setOutputDescription(String(res.output_description).replace(/^\s*\n+/, "").trim());
      }
      setShowTranslateModal(false);
    } catch (err) {
      if (err.name !== "AbortError") {
        setTranslateError(err?.message || t("Translation failed"));
      } else {
        setShowTranslateModal(false);
      }
    } finally {
      setTranslateLoading(false);
      translateAbortRef.current = null;
    }
  };

  const openImproveModal = () => {
    setImproveError(null);
    setShowImproveModal(true);
  };

  const handleImproveCancel = () => {
    if (improveAbortRef.current) {
      improveAbortRef.current.abort();
      improveAbortRef.current = null;
    }
    setShowImproveModal(false);
    setImproveLoading(false);
    setImproveError(null);
  };

  const handleImproveConfirm = async (selectedModel) => {
    if (!improvePromptConfig || !selectedModel) return;
    const payload = buildDraft();
    const controller = new AbortController();
    improveAbortRef.current = controller;
    setImproveLoading(true);
    setImproveError(null);
    try {
      const result = await improvePromptConfig(payload, selectedModel, controller.signal);
      if (result?.error) {
        setImproveError(result.error || t("Improve failed"));
        return;
      }
      const res = result?.content;
      if (res && typeof res === "object") {
        if (res.name != null) setName(String(res.name).trim());
        if (res.role != null) setRole(String(res.role).trim());
        if (res.instructions != null) setInstructionsText(formatInstructionsForDisplay(Array.isArray(res.instructions) ? res.instructions : [String(res.instructions || "")]));
        if (res.output_description != null) setOutputDescription(String(res.output_description).trim());
        if (typeof res.temperature === "number" && !Number.isNaN(res.temperature)) setTemperature(roundToStep(Math.max(0, Math.min(1, res.temperature)), 0.05));
        if (res.prompt_instructions != null) setPromptInstructions(String(res.prompt_instructions).trim());
        if (typeof res.target_language === "boolean") setAskTargetLanguage(res.target_language);
      }
      setShowImproveModal(false);
    } catch (err) {
      if (err.name !== "AbortError") {
        setImproveError(err?.message || t("Improve failed"));
      } else {
        setShowImproveModal(false);
      }
    } finally {
      setImproveLoading(false);
      improveAbortRef.current = null;
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Button
          appearance="subtle"
          icon={<ArrowLeft size={18} />}
          onClick={onBackToRun}
          className={styles.backButton}
          aria-label={t("Back to Run")}
        >
          {t("Back to Run")}
        </Button>
      </div>
      <div className={styles.form}>
        <div className={styles.field}>
          <Label htmlFor="transform-prompt-name">{t("Prompt name")}</Label>
          <Input
            id="transform-prompt-name"
            value={name}
            onChange={(_, data) => setName(data.value)}
            placeholder={t("e.g. Summarize")}
          />
        </div>
        <div className={styles.field}>
          <Label htmlFor="transform-prompt-instructions-line">{t("Prompt instructions (optional)")}</Label>
          <Input
            id="transform-prompt-instructions-line"
            value={promptInstructions}
            onChange={(_, data) => setPromptInstructions(data.value)}
            placeholder={t("e.g. Keep it under 3 sentences.")}
            aria-label={t("Prompt instructions")}
          />
        </div>
        <div className={styles.field}>
          <Label htmlFor="transform-prompt-role">{t("Model Role")}</Label>
          <Input
            id="transform-prompt-role"
            value={role}
            onChange={(_, data) => setRole(data.value)}
            placeholder={t("e.g. You are a helpful assistant.")}
          />
        </div>
        <div className={styles.field}>
          <Label htmlFor="transform-prompt-instructions">{t("Model Instructions (one per line)")}</Label>
          <textarea
            id="transform-prompt-instructions"
            className={styles.textarea}
            value={instructionsText}
            onChange={(e) => setInstructionsText(e.target.value)}
            placeholder={t("- First instruction\n- Second instruction")}
            aria-label={t("Instructions")}
          />
        </div>
        <div className={styles.field}>
          <Label htmlFor="transform-prompt-output-desc">{t("Output description (e.g. transformed, summarized, etc.)")}</Label>
          <Input
            id="transform-prompt-output-desc"
            value={outputDescription}
            onChange={(_, data) => setOutputDescription(data.value)}
            placeholder={t("transformed")}
          />
        </div>
        <div className={styles.field}>
          <Label htmlFor="transform-prompt-temperature">{t("Temperature (0.0 → 1.0)")}</Label>
          <div className={styles.temperatureSliderGrid}>
            <div className={styles.temperatureValue}>{temperature.toFixed(2)}</div>
            <span className={styles.temperatureLabelLeft}>
              {t("Deterministic/Consistent output")}
            </span>
            <Slider
              id="transform-prompt-temperature"
              className={styles.temperatureSlider}
              min={0}
              max={1}
              step={0.05}
              value={temperature}
              onChange={(_, data) => setTemperature(data.value)}
              aria-label={t("Temperature")}
            />
            <span className={styles.temperatureLabelRight}>
              {t("Creative/Varied output")}
            </span>
          </div>
        </div>
        <div className={styles.field}>
          <Checkbox
            id="transform-prompt-ask-target-lang"
            label={t("Ask for target language")}
            checked={askTargetLanguage}
            onChange={(_, data) => setAskTargetLanguage(!!data.checked)}
            aria-label={t("Ask for target language when running this prompt")}
          />
        </div>
      </div>
      <div className={styles.actionsRow}>
        <div className={styles.actions}>
          <Button appearance="primary" icon={<Save size={16} />} onClick={handleSave}>
            {t("Save")}
          </Button>
          <Button appearance="secondary" icon={<X size={16} />} onClick={onBackToRun}>
            {t("Cancel")}
          </Button>
          {initialPrompt?.id != null && (
            <Button appearance="secondary" icon={<Trash2 size={16} />} onClick={handleDelete}>
              {t("Delete")}
            </Button>
          )}
        </div>
        <div className={styles.actions}>
          {canShowImproveButton && (
            <Button
              appearance="secondary"
              icon={<Bot size={16} />}
              onClick={openImproveModal}
            >
              {t("Improve prompt")}
            </Button>
          )}
          {canShowTranslateButton && (
            <Button
              appearance="secondary"
              icon={<Languages size={16} />}
              onClick={openTranslateModal}
            >
              {t("Translate prompt")}
            </Button>
          )}
        </div>
      </div>
      {showTranslateModal && (
        <TranslatePromptFieldsModal
          open={showTranslateModal}
          targetLang={translateTargetLang}
          onTargetLangChange={setTranslateTargetLang}
          onConfirm={handleTranslateConfirm}
          onCancel={handleTranslateCancel}
          languages={languages}
          allLanguages={allLanguages}
          models={models}
          model={model}
          loading={translateLoading}
          error={translateError}
        />
      )}
      {showImproveModal && (
        <ImprovePromptConfigModal
          open={showImproveModal}
          model={model}
          models={models}
          onConfirm={handleImproveConfirm}
          onCancel={handleImproveCancel}
          loading={improveLoading}
          error={improveError}
        />
      )}
    </div>
  );
};

export default TransformPromptEditor;
