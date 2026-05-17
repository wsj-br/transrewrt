import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import ModelSelector from "./ModelSelector";
import SkillSelector from "./SkillSelector";
import type { Skill } from "@/utils/skills/skillsTypes";

export function hasModelOrSkillSelection({
  experienceMode = "advanced",
  easyProvider = "openrouter",
  model,
  models = [],
  skills = [],
  ollamaModels = [],
  easyOllamaModel,
}: {
  experienceMode?: "easy" | "advanced";
  easyProvider?: string;
  model?: string | null;
  models?: string[];
  skills?: Skill[];
  ollamaModels?: string[];
  easyOllamaModel?: string | null;
}): boolean {
  if (experienceMode === "easy") {
    if (easyProvider === "ollama") {
      return ollamaModels.length > 0 && !!(easyOllamaModel?.trim() || ollamaModels[0]);
    }
    return skills.length > 0;
  }
  return !!(model?.trim() || models.length > 0);
}

/**
 * Easy mode: skill (or Ollama model) picker. Advanced mode: model list.
 * Shared by workspace header and transform prompt modals.
 */
function ModelOrSkillPicker({
  experienceMode = "advanced",
  easyProvider = "openrouter",
  models = [],
  currentModel,
  onModelChange,
  onOpenSettingsModels,
  onRemoveModel,
  skills = [],
  selectedSkillId,
  onSkillChange,
  ollamaModels = [],
  easyOllamaModel,
  onEasyOllamaModelChange,
  onOpenSettingsGeneral,
  skillUiLocale,
  skillSourceLocale = "en-GB",
}) {
  const { t } = useTranslation();

  if (experienceMode === "easy" && easyProvider === "ollama") {
    if (ollamaModels.length > 0 && onEasyOllamaModelChange) {
      return (
        <ModelSelector
          models={ollamaModels}
          currentModel={easyOllamaModel || ollamaModels[0]}
          onModelChange={onEasyOllamaModelChange}
          onIconClick={onOpenSettingsGeneral}
        />
      );
    }
    if (onOpenSettingsGeneral) {
      return (
        <button
          type="button"
          className="text-sm text-muted-foreground underline-offset-2 hover:underline"
          onClick={onOpenSettingsGeneral}
        >
          {t("Configure Ollama or choose another provider in Settings.")}
        </button>
      );
    }
    return null;
  }

  if (experienceMode === "easy" && skills?.length && onSkillChange) {
    return (
      <SkillSelector
        skills={skills}
        selectedSkillId={selectedSkillId || undefined}
        onSkillChange={onSkillChange}
        onOpenSettingsGeneral={onOpenSettingsGeneral}
        uiLocale={skillUiLocale}
        sourceLocale={skillSourceLocale}
      />
    );
  }

  if (experienceMode === "easy") {
    if (!onOpenSettingsGeneral) return null;
    return (
      <button
        type="button"
        className="text-sm text-muted-foreground underline-offset-2 hover:underline"
        onClick={onOpenSettingsGeneral}
      >
        {t("No skills for this provider. Change provider in Settings.")}
      </button>
    );
  }

  if (!models.length || !onModelChange) return null;

  return (
    <ModelSelector
      models={models}
      currentModel={currentModel}
      onModelChange={onModelChange}
      onIconClick={onOpenSettingsModels}
      onRemoveModel={onRemoveModel}
    />
  );
}

ModelOrSkillPicker.propTypes = {
  experienceMode: PropTypes.oneOf(["easy", "advanced"]),
  easyProvider: PropTypes.string,
  models: PropTypes.arrayOf(PropTypes.string),
  currentModel: PropTypes.string,
  onModelChange: PropTypes.func,
  onOpenSettingsModels: PropTypes.func,
  onRemoveModel: PropTypes.func,
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

export default ModelOrSkillPicker;
