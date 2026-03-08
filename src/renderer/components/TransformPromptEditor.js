import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  makeStyles,
  tokens,
  Button,
  Input,
  Label,
  Checkbox,
  SpinButton,
} from "@fluentui/react-components";
import { ArrowLeft, Save, Trash2, X } from "lucide-react";

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
  temperatureHint: {
    fontSize: "12px",
    color: tokens.colorNeutralForeground3,
    marginTop: "4px",
    lineHeight: 1.4,
  },
  sliderRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
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
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [instructionsText, setInstructionsText] = useState("");
  const [outputDescription, setOutputDescription] = useState("transformed");
  const [temperature, setTemperature] = useState(0.4);
  const [askTargetLanguage, setAskTargetLanguage] = useState(false);
  const [promptInstructions, setPromptInstructions] = useState("");

  useEffect(() => {
    if (initialPrompt) {
      setName(initialPrompt.name || "");
      setRole(initialPrompt.role || "");
      setInstructionsText(formatInstructionsForDisplay(parseInstructions(initialPrompt.instructions)));
      setOutputDescription(initialPrompt.output_description ?? "transformed");
      setTemperature(Number(initialPrompt.temperature) ?? 0.4);
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
          <Label htmlFor="transform-prompt-temperature">{t("Temperature (0–1)")}</Label>
          <div className={styles.sliderRow}>
            <SpinButton
              id="transform-prompt-temperature"
              min={0}
              max={1}
              step={0.1}
              value={temperature}
              onChange={(_, data) => {
                const v = parseFloat(data.value);
                if (!Number.isNaN(v) && v >= 0 && v <= 1) setTemperature(v);
              }}
              aria-label={t("Temperature")}
              style={{ width: "120px" }}
            />
          </div>
          <div className={styles.temperatureHint}>
            {t("Low = more deterministic, consistent output. High = more creative and varied output.")}
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
    </div>
  );
};

export default TransformPromptEditor;
