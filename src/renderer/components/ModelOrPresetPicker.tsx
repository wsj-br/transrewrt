import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import ModelSelector from "./ModelSelector";
import PresetSelector from "./PresetSelector";
import type { Preset } from "@/utils/presets/presetsTypes";

export function hasModelOrPresetSelection({
  experienceMode = "advanced",
  easyProvider = "openrouter",
  model,
  models = [],
  presets = [],
  ollamaModels = [],
  easyOllamaModel,
}: {
  experienceMode?: "easy" | "advanced";
  easyProvider?: string;
  model?: string | null;
  models?: string[];
  presets?: Preset[];
  ollamaModels?: string[];
  easyOllamaModel?: string | null;
}): boolean {
  if (experienceMode === "easy") {
    if (easyProvider === "ollama") {
      return ollamaModels.length > 0 && !!(easyOllamaModel?.trim() || ollamaModels[0]);
    }
    return presets.length > 0;
  }
  return !!(model?.trim() || models.length > 0);
}

/**
 * Easy mode: preset (or Ollama model) picker. Advanced mode: model list.
 * Shared by workspace header and transform prompt modals.
 */
function ModelOrPresetPicker({
  experienceMode = "advanced" as "easy" | "advanced",
  easyProvider = "openrouter",
  models = [],
  currentModel,
  onModelChange,
  onOpenSettingsModels = undefined,
  onRemoveModel = undefined,
  presets = [],
  selectedPresetId,
  onPresetChange,
  ollamaModels = [],
  easyOllamaModel,
  onEasyOllamaModelChange,
  onOpenSettingsGeneral,
  presetUiLocale,
  presetSourceLocale = "en-GB",
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

  if (experienceMode === "easy" && presets?.length && onPresetChange) {
    return (
      <PresetSelector
        presets={presets}
        selectedPresetId={selectedPresetId || undefined}
        onPresetChange={onPresetChange}
        onOpenSettingsGeneral={onOpenSettingsGeneral}
        uiLocale={presetUiLocale}
        sourceLocale={presetSourceLocale}
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
        {t("No presets for this provider. Change provider in Settings.")}
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

ModelOrPresetPicker.propTypes = {
  experienceMode: PropTypes.oneOf(["easy", "advanced"]),
  easyProvider: PropTypes.string,
  models: PropTypes.arrayOf(PropTypes.string),
  currentModel: PropTypes.string,
  onModelChange: PropTypes.func,
  onOpenSettingsModels: PropTypes.func,
  onRemoveModel: PropTypes.func,
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

export default ModelOrPresetPicker;
