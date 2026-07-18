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
  localLlmModels = [],
  easyLocalLlmModel,
}: {
  experienceMode?: "easy" | "advanced";
  easyProvider?: string;
  model?: string | null;
  models?: string[];
  presets?: Preset[];
  localLlmModels?: string[];
  easyLocalLlmModel?: string | null;
}): boolean {
  if (experienceMode === "easy") {
    if (easyProvider === "local") {
      return localLlmModels.length > 0 && !!(easyLocalLlmModel?.trim() || localLlmModels[0]);
    }
    return presets.length > 0;
  }
  return !!(model?.trim() || models.length > 0);
}

/**
 * Easy mode: preset (or Local LLM model) picker. Advanced mode: model list.
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
  localLlmModels = [],
  easyLocalLlmModel,
  onEasyLocalLlmModelChange,
  onOpenSettingsGeneral,
  presetUiLocale,
  presetSourceLocale = "en-GB",
}) {
  const { t } = useTranslation();

  if (experienceMode === "easy" && easyProvider === "local") {
    if (localLlmModels.length > 0 && onEasyLocalLlmModelChange) {
      return (
        <ModelSelector
          models={localLlmModels}
          currentModel={easyLocalLlmModel || localLlmModels[0]}
          onModelChange={onEasyLocalLlmModelChange}
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
          {t("Configure Local LLM or choose another provider in Settings.")}
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

  if (!onModelChange) return null;

  if (!models.length) {
    if (!onOpenSettingsModels) return null;
    return (
      <button
        type="button"
        className="text-sm text-muted-foreground underline-offset-2 hover:underline"
        onClick={onOpenSettingsModels}
      >
        {t("Open Settings → Models")}
      </button>
    );
  }

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
  localLlmModels: PropTypes.arrayOf(PropTypes.string),
  easyLocalLlmModel: PropTypes.string,
  onEasyLocalLlmModelChange: PropTypes.func,
  onOpenSettingsGeneral: PropTypes.func,
  presetUiLocale: PropTypes.string,
  presetSourceLocale: PropTypes.string,
};

export default ModelOrPresetPicker;
