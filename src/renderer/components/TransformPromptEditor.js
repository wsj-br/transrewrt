import React, { useState, useEffect, useCallback } from "react";
import {
  makeStyles,
  tokens,
  Button,
  Input,
  Label,
  Dropdown,
  Option,
  SpinButton,
} from "@fluentui/react-components";
import { ArrowLeft, Save, Trash2 } from "lucide-react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: tokens.spacingVerticalM,
    overflow: "auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    flexShrink: 0,
  },
  backButton: {
    flexShrink: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    flex: 1,
    minHeight: 0,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  textarea: {
    minHeight: "120px",
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

const TransformPromptEditor = ({
  initialPrompt,
  languages = [],
  fontFamily,
  fontSize,
  textColor,
  onSave,
  onDelete,
  onBackToRun,
  onDraftChange,
}) => {
  const styles = useStyles();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [instructionsText, setInstructionsText] = useState("");
  const [outputDescription, setOutputDescription] = useState("transformed");
  const [temperature, setTemperature] = useState(0.4);
  const [targetLanguage, setTargetLanguage] = useState(null);

  useEffect(() => {
    if (initialPrompt) {
      setName(initialPrompt.name || "");
      setRole(initialPrompt.role || "");
      setInstructionsText(formatInstructionsForDisplay(parseInstructions(initialPrompt.instructions)));
      setOutputDescription(initialPrompt.output_description ?? "transformed");
      setTemperature(Number(initialPrompt.temperature) ?? 0.4);
      setTargetLanguage(initialPrompt.target_language ?? null);
    } else {
      setName("");
      setRole("");
      setInstructionsText("");
      setOutputDescription("transformed");
      setTemperature(0.4);
      setTargetLanguage(null);
    }
  }, [initialPrompt]);

  const buildDraft = useCallback(() => {
    const instructions = instructionsText
      .split(/\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    return {
      name: name.trim() || "",
      role: role.trim() || "",
      instructions,
      output_description: outputDescription.trim() || "transformed",
      temperature: Math.max(0, Math.min(1, Number(temperature) || 0.4)),
      target_language: targetLanguage && String(targetLanguage).trim() ? targetLanguage : null,
    };
  }, [name, role, instructionsText, outputDescription, temperature, targetLanguage]);

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

  const langOptions = [
    { value: "", label: "(none)" },
    ...(Array.isArray(languages) ? languages : []).map((lang) => ({
      value: typeof lang === "string" ? lang : lang.value || lang.label,
      label: typeof lang === "string" ? lang : lang.label || lang.value,
    })),
  ].filter((o) => o.value !== undefined);

  const inputStyle = {
    fontFamily: fontFamily || "inherit",
    fontSize: fontSize ? `${Number(fontSize)}px` : "14px",
    color: textColor || undefined,
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Button
          appearance="subtle"
          icon={<ArrowLeft size={18} />}
          onClick={onBackToRun}
          className={styles.backButton}
          aria-label="Back to Run"
        >
          Back to Run
        </Button>
      </div>
      <div className={styles.form}>
        <div className={styles.field}>
          <Label htmlFor="transform-prompt-name">Prompt name</Label>
          <Input
            id="transform-prompt-name"
            value={name}
            onChange={(_, data) => setName(data.value)}
            placeholder="e.g. Summarize"
            style={inputStyle}
          />
        </div>
        <div className={styles.field}>
          <Label htmlFor="transform-prompt-role">Role</Label>
          <Input
            id="transform-prompt-role"
            value={role}
            onChange={(_, data) => setRole(data.value)}
            placeholder="e.g. You are a helpful assistant."
            style={inputStyle}
          />
        </div>
        <div className={styles.field}>
          <Label htmlFor="transform-prompt-instructions">Instructions (one per line)</Label>
          <textarea
            id="transform-prompt-instructions"
            className={styles.textarea}
            value={instructionsText}
            onChange={(e) => setInstructionsText(e.target.value)}
            placeholder={"- First instruction\n- Second instruction"}
            aria-label="Instructions"
            style={inputStyle}
          />
        </div>
        <div className={styles.field}>
          <Label htmlFor="transform-prompt-output-desc">Output description</Label>
          <Input
            id="transform-prompt-output-desc"
            value={outputDescription}
            onChange={(_, data) => setOutputDescription(data.value)}
            placeholder="transformed"
            style={inputStyle}
          />
        </div>
        <div className={styles.field}>
          <Label htmlFor="transform-prompt-temperature">Temperature (0–1)</Label>
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
              aria-label="Temperature"
              style={{ width: "120px" }}
            />
          </div>
          <div className={styles.temperatureHint}>
            Low = more deterministic, consistent output. High = more creative and varied output.
          </div>
        </div>
        <div className={styles.field}>
          <Label htmlFor="transform-prompt-target-lang">Target language (optional)</Label>
          <Dropdown
            id="transform-prompt-target-lang"
            placeholder="(none)"
            value={targetLanguage ?? ""}
            selectedOptions={targetLanguage ? [String(targetLanguage)] : []}
            onOptionSelect={(_, data) => setTargetLanguage(data.optionValue && data.optionValue !== "" ? data.optionValue : null)}
            aria-label="Target language"
          >
            {langOptions.map((opt) => (
              <Option key={opt.value || "__none__"} value={opt.value || ""} text={opt.label}>
                {opt.label}
              </Option>
            ))}
          </Dropdown>
        </div>
      </div>
      <div className={styles.actions}>
        <Button appearance="primary" icon={<Save size={16} />} onClick={handleSave}>
          Save
        </Button>
        {initialPrompt?.id != null && (
          <Button appearance="secondary" icon={<Trash2 size={16} />} onClick={handleDelete}>
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};

export default TransformPromptEditor;
