import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Loader2 } from "lucide-react";
import ModelOrSkillPicker, { hasModelOrSkillSelection } from "./ModelOrSkillPicker";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const transformModalPickerPropTypes = {
  experienceMode: PropTypes.oneOf(["easy", "advanced"]),
  easyProvider: PropTypes.string,
  skills: PropTypes.array,
  selectedSkillId: PropTypes.string,
  onSkillChange: PropTypes.func,
  ollamaModels: PropTypes.arrayOf(PropTypes.string),
  easyOllamaModel: PropTypes.string,
  onEasyOllamaModelChange: PropTypes.func,
  onOpenSettingsGeneral: PropTypes.func,
  skillUiLocale: PropTypes.string,
  skillSourceLocale: PropTypes.string,
};

const TransformImproveModal = ({
  open,
  model,
  models = [],
  onConfirm,
  onCancel,
  loading = false,
  error = null,
  experienceMode = "advanced",
  easyProvider = "openrouter",
  skills = [],
  selectedSkillId,
  onSkillChange,
  ollamaModels = [],
  easyOllamaModel,
  onEasyOllamaModelChange,
  onOpenSettingsGeneral,
  skillUiLocale,
  skillSourceLocale = "en-GB",
}) => {
  const { t } = useTranslation();
  const [selectedModel, setSelectedModel] = useState(model || "");

  useEffect(() => {
    if (open) queueMicrotask(() => setSelectedModel(model || ""));
  }, [open, model]);

  if (!open) return null;

  const canRun = hasModelOrSkillSelection({
    experienceMode,
    easyProvider,
    model: selectedModel,
    models,
    skills,
    ollamaModels,
    easyOllamaModel,
  });

  const pickerLabel =
    experienceMode === "easy" && easyProvider !== "ollama"
      ? t("Skill")
      : t("Select the model to improve the prompt");

  const handleConfirm = () =>
    onConfirm(experienceMode === "advanced" ? selectedModel : model);

  const showPicker = experienceMode === "advanced" ? models.length > 0 : true;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60">
      <div className="bg-card border border-border rounded-lg shadow-2xl p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-5">{t("Improve prompt configuration")}</h2>
        <div className="mb-5 flex flex-col gap-4">
          {showPicker && (
            <div className="flex flex-col gap-1.5">
              <Label>{pickerLabel}</Label>
              <ModelOrSkillPicker
                experienceMode={experienceMode}
                easyProvider={easyProvider}
                models={models}
                currentModel={selectedModel}
                onModelChange={setSelectedModel}
                skills={skills}
                selectedSkillId={selectedSkillId}
                onSkillChange={onSkillChange}
                ollamaModels={ollamaModels}
                easyOllamaModel={easyOllamaModel}
                onEasyOllamaModelChange={onEasyOllamaModelChange}
                onOpenSettingsGeneral={onOpenSettingsGeneral}
                skillUiLocale={skillUiLocale}
                skillSourceLocale={skillSourceLocale}
              />
            </div>
          )}
          {error && <p className="text-sm text-destructive break-words">{error}</p>}
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>{t("Cancel")}</Button>
          <Button onClick={handleConfirm} disabled={loading || !canRun}>
            {loading && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
            {loading ? t("Improving…") : t("Improve")}
          </Button>
        </div>
      </div>
    </div>
  );
};

TransformImproveModal.propTypes = {
  open: PropTypes.bool.isRequired,
  model: PropTypes.string,
  models: PropTypes.arrayOf(PropTypes.string),
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  ...transformModalPickerPropTypes,
};

export default TransformImproveModal;
