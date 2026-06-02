import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Save, Trash2, X, Languages, Bot, Sparkles } from "lucide-react";
import PropTypes from "prop-types";
import { useContentLanguageLists } from "../hooks/useContentLanguageLists";
import TransformTranslateModal from "./TransformTranslateModal";
import TransformImproveModal from "./TransformImproveModal";
import TransformGenerateModal from "./TransformGenerateModal";
import { hasModelOrPresetSelection } from "./ModelOrPresetPicker";
import { flipUiArrowsForRtl, getTextDirection } from "ai-i18n-tools/runtime";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
/** Parse instructions from DB (JSON array string or array) to array of strings. */
function parseInstructions(value) {
  if (Array.isArray(value)) return value.filter((s) => typeof s === "string");
  if (typeof value !== "string" || !value.trim()) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((s) => typeof s === "string") : [];
  } catch {
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

/** Normalize DB/import value to boolean: true = show From language selector at run time (`target_language` column). */
function normalizeAskFromLanguageFlag(value) {
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
  translatePromptFields,
  improvePromptConfig,
  generatePromptConfig,
  model,
  models = [],
  experienceMode = "advanced" as "easy" | "advanced",
  easyProvider = "openrouter",
  presets = [],
  selectedPresetId,
  onPresetChange,
  ollamaModels = [],
  easyOllamaModel,
  onEasyOllamaModelChange,
  onOpenSettingsGeneral,
  presetUiLocale,
  presetSourceLocale = "en-GB",
}) => {
  const { t, i18n } = useTranslation();
  const isRtl = getTextDirection(i18n.language) === "rtl";
  const { topLanguages, allLanguages } = useContentLanguageLists();
  const translateAbortRef = useRef(null);
  const improveAbortRef = useRef(null);
  const generateAbortRef = useRef(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [instructionsText, setInstructionsText] = useState("");
  const [outputDescription, setOutputDescription] = useState("transformed");
  const [temperature, setTemperature] = useState(0.4);
  const [askFromLanguage, setAskFromLanguage] = useState(false);
  const [promptInstructions, setPromptInstructions] = useState("");
  const [showTranslateModal, setShowTranslateModal] = useState(false);
  const [translateTargetLang, setTranslateTargetLang] = useState("");
  const [translateLoading, setTranslateLoading] = useState(false);
  const [translateError, setTranslateError] = useState(null);
  const [showImproveModal, setShowImproveModal] = useState(false);
  const [improveLoading, setImproveLoading] = useState(false);
  const [improveError, setImproveError] = useState(null);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [generateLoading, setGenerateLoading] = useState(false);
  const [generateError, setGenerateError] = useState(null);

  useEffect(() => {
    if (initialPrompt) {
      setName(initialPrompt.name || "");
      setRole(initialPrompt.role || "");
      setInstructionsText(formatInstructionsForDisplay(parseInstructions(initialPrompt.instructions)));
      setOutputDescription(initialPrompt.output_description ?? "transformed");
      setTemperature(roundToStep(Number(initialPrompt.temperature) || 0.4, 0.05));
      setAskFromLanguage(normalizeAskFromLanguageFlag(initialPrompt.target_language));
      setPromptInstructions(initialPrompt.prompt_instructions ?? "");
    } else {
      setName("");
      setRole("");
      setInstructionsText("");
      setOutputDescription("transformed");
      setTemperature(0.4);
      setAskFromLanguage(false);
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
      temperature: Number((Math.max(0, Math.min(1, Number(temperature) || 0.4))).toFixed(2)),
      target_language: askFromLanguage,
      prompt_instructions: promptInstructionsTrimmed || null,
    };
  }, [name, role, instructionsText, outputDescription, temperature, askFromLanguage, promptInstructions]);

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

  const pickerReady = hasModelOrPresetSelection({
    experienceMode,
    easyProvider,
    model,
    models,
    presets,
    ollamaModels,
    easyOllamaModel,
  });
  const canShowTranslateButton = translatePromptFields && pickerReady && typeof translatePromptFields === "function";
  const canShowImproveButton = improvePromptConfig && pickerReady && typeof improvePromptConfig === "function";
  const canShowGenerateButton = generatePromptConfig && pickerReady && typeof generatePromptConfig === "function";

  const transformModalPickerProps = {
    experienceMode,
    easyProvider,
    presets,
    selectedPresetId,
    onPresetChange,
    ollamaModels,
    easyOllamaModel,
    onEasyOllamaModelChange,
    onOpenSettingsGeneral,
    presetUiLocale,
    presetSourceLocale,
  };

  const openTranslateModal = () => {
    const firstLang = (topLanguages && topLanguages[0]) || (allLanguages && allLanguages[0]) || "";
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
    if (!translatePromptFields || !translateTargetLang) return;
    if (experienceMode === "advanced" && !selectedModel) return;
    const nameVal = name.trim();
    const promptInstructionsVal = promptInstructions.trim();
    const roleVal = role.trim();
    const instructionsVal = instructionsText.trim();
    const outputDescVal = outputDescription.trim();
    const fieldsObject: Record<string, string> = {};
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
    if (!improvePromptConfig) return;
    if (experienceMode === "advanced" && !selectedModel) return;
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
        if (typeof res.target_language === "boolean") setAskFromLanguage(res.target_language);
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

  const openGenerateModal = () => {
    setGenerateError(null);
    setShowGenerateModal(true);
  };

  const handleGenerateCancel = () => {
    if (generateAbortRef.current) {
      generateAbortRef.current.abort();
      generateAbortRef.current = null;
    }
    setShowGenerateModal(false);
    setGenerateLoading(false);
    setGenerateError(null);
  };

  const handleGenerateConfirm = async (selectedModel, userDescription) => {
    if (!generatePromptConfig || !userDescription) return;
    if (experienceMode === "advanced" && !selectedModel) return;
    const controller = new AbortController();
    generateAbortRef.current = controller;
    setGenerateLoading(true);
    setGenerateError(null);
    try {
      const result = await generatePromptConfig(userDescription, selectedModel, controller.signal);
      if (result?.error) {
        setGenerateError(result.error || t("Generate failed"));
        return;
      }
      const res = result?.content;
      if (res && typeof res === "object") {
        if (res.name != null) setName(String(res.name).trim());
        if (res.prompt_instructions != null) setPromptInstructions(String(res.prompt_instructions).trim());
        if (res.role != null) setRole(String(res.role).trim());
        if (res.instructions != null) setInstructionsText(formatInstructionsForDisplay(Array.isArray(res.instructions) ? res.instructions : [String(res.instructions || "")]));
        if (res.output_description != null) setOutputDescription(String(res.output_description).trim());
        if (typeof res.temperature === "number" && !Number.isNaN(res.temperature)) setTemperature(roundToStep(Math.max(0, Math.min(1, res.temperature)), 0.05));
      }
      setShowGenerateModal(false);
    } catch (err) {
      if (err.name !== "AbortError") {
        setGenerateError(err?.message || t("Generate failed"));
      } else {
        setShowGenerateModal(false);
      }
    } finally {
      setGenerateLoading(false);
      generateAbortRef.current = null;
    }
  };

  return (
    <div className="flex flex-col h-full overflow-auto pe-3 gap-4">
      <div className="flex flex-col shrink-0">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBackToRun}
            aria-label={t("Back to Run")}
            data-testid="transform-editor-back-to-run"
          >
            <ArrowLeft size={16} className="rtl-icon-mirror" />
            {t("Back to Run")}
          </Button>
        </div>
        {canShowGenerateButton && (
          <div className="flex justify-end -mt-3">
            <Button
              variant="outline"
              size="sm"
              className="bg-emerald-950/40 border-emerald-800 text-emerald-200 hover:bg-emerald-900/50 hover:text-emerald-100"
              onClick={openGenerateModal}
              data-testid="generate-prompt-button"
            >
              <Sparkles size={14} />
              {t("Generate prompt")}
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5 mb-1">
          <Label htmlFor="transform-prompt-name">{t("Prompt name")}</Label>
          <Input
            id="transform-prompt-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("e.g. Summarise")}
            dir="auto"
          />
        </div>
        <div className="flex flex-col gap-1.5 mb-1">
          <Label htmlFor="transform-prompt-instructions-line">{t("Prompt instructions (optional)")}</Label>
          <Input
            id="transform-prompt-instructions-line"
            value={promptInstructions}
            onChange={(e) => setPromptInstructions(e.target.value)}
            placeholder={t("e.g. Keep it under 3 sentences.")}
            aria-label={t("Prompt instructions")}
          />
        </div>
        <div className="flex flex-col gap-1.5 mb-1">
          <Label htmlFor="transform-prompt-role">{t("Model Role")}</Label>
          <Input
            id="transform-prompt-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder={t("e.g. You are a helpful assistant.")}
            dir="auto"
          />
        </div>
        <div className="flex flex-col gap-1.5 mb-1">
          <Label htmlFor="transform-prompt-instructions">{t("Model Instructions (one per line)")}</Label>
          <textarea
            id="transform-prompt-instructions"
            dir="auto"
            value={instructionsText}
            onChange={(e) => setInstructionsText(e.target.value)}
            placeholder={t("- First instruction\n- Second instruction")}
            aria-label={t("Instructions")}
            className="min-h-[100px] resize-y p-2 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
          />
        </div>
        <div className="flex flex-col gap-1.5 mb-1">
          <Label htmlFor="transform-prompt-output-desc">{t("Output description (e.g. transformed, summarised, etc.)")}</Label>
          <Input
            id="transform-prompt-output-desc"
            value={outputDescription}
            onChange={(e) => setOutputDescription(e.target.value)}
            placeholder={t("transformed")}
            dir="auto"
          />
        </div>
        <div className="flex flex-col gap-1.5 mb-1">
          <Label htmlFor="transform-prompt-temperature">
            {flipUiArrowsForRtl(t("Temperature (0.0 → 1.0)"), isRtl)}
          </Label>
          <div className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] items-center gap-x-3 gap-y-1">
            <div className="col-start-2 row-start-1 text-sm font-semibold text-center">{temperature.toFixed(2)}</div>
            <span className="col-start-1 row-start-2 text-xs text-muted-foreground whitespace-nowrap">{t("Deterministic/Consistent output")}</span>
            <input
              id="transform-prompt-temperature"
              type="range"
              className="col-start-2 row-start-2 w-full min-w-0 accent-primary"
              min={0}
              max={1}
              step={0.05}
              value={temperature}
              onChange={(e) => setTemperature(Number(Number(e.target.value).toFixed(2)))}
              aria-label={t("Temperature")}
            />
            <span className="col-start-3 row-start-2 text-xs text-muted-foreground whitespace-nowrap">{t("Creative/Varied output")}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full flex-wrap gap-2 shrink-0">
        <div className="flex gap-2 flex-wrap shrink-0">
          <Button size="sm" onClick={handleSave}>
            <Save size={14} />
            {t("Save")}
          </Button>
          <Button variant="outline" size="sm" onClick={onBackToRun}>
            <X size={14} />
            {t("Cancel")}
          </Button>
          {initialPrompt?.id != null && (
            <Button variant="outline" size="sm" onClick={handleDelete}>
              <Trash2 size={14} />
              {t("Delete")}
            </Button>
          )}
        </div>
        <div className="flex gap-2 flex-wrap shrink-0">
          {canShowImproveButton && (
            <Button variant="outline" size="sm" onClick={openImproveModal}>
              <Bot size={14} />
              {t("Improve prompt")}
            </Button>
          )}
          {canShowTranslateButton && (
            <Button variant="outline" size="sm" onClick={openTranslateModal}>
              <Languages size={14} />
              {t("Translate prompt")}
            </Button>
          )}
        </div>
      </div>
      {showTranslateModal && (
        <TransformTranslateModal
          open={showTranslateModal}
          targetLang={translateTargetLang}
          onTargetLangChange={setTranslateTargetLang}
          onConfirm={handleTranslateConfirm}
          onCancel={handleTranslateCancel}
          models={models}
          model={model}
          loading={translateLoading}
          error={translateError}
          {...transformModalPickerProps}
        />
      )}
      {showImproveModal && (
        <TransformImproveModal
          open={showImproveModal}
          model={model}
          models={models}
          onConfirm={handleImproveConfirm}
          onCancel={handleImproveCancel}
          loading={improveLoading}
          error={improveError}
          {...transformModalPickerProps}
        />
      )}
      {showGenerateModal && (
        <TransformGenerateModal
          open={showGenerateModal}
          model={model}
          models={models}
          onConfirm={handleGenerateConfirm}
          onCancel={handleGenerateCancel}
          loading={generateLoading}
          error={generateError}
          {...transformModalPickerProps}
        />
      )}
    </div>
  );
};

TransformPromptEditor.propTypes = {
  initialPrompt: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    role: PropTypes.string,
    instructions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    output_description: PropTypes.string,
    temperature: PropTypes.number,
    target_language: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    prompt_instructions: PropTypes.string,
  }),
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
  onBackToRun: PropTypes.func,
  onDraftChange: PropTypes.func,
  translatePromptFields: PropTypes.func,
  improvePromptConfig: PropTypes.func,
  generatePromptConfig: PropTypes.func,
  model: PropTypes.string,
  models: PropTypes.arrayOf(PropTypes.string),
  experienceMode: PropTypes.oneOf(["easy", "advanced"]),
  easyProvider: PropTypes.string,
  presets: PropTypes.array,
  selectedPresetId: PropTypes.string,
  onPresetChange: PropTypes.func,
  ollamaModels: PropTypes.arrayOf(PropTypes.string),
  easyOllamaModel: PropTypes.string,
  onEasyOllamaModelChange: PropTypes.func,
  onOpenSettingsGeneral: PropTypes.func,
  presetUiLocale: PropTypes.string,
  presetSourceLocale: PropTypes.string,
};

export default TransformPromptEditor;
