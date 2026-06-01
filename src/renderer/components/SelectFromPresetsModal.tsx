import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProviderIcon from "./ProviderIcon";
import { presetDisplayDescription, presetDisplayName } from "@/utils/presets/presetDisplay";
import {
  buildPresetProviderRows,
  presetProviderRowModelIds,
} from "@/utils/presets/resolveEasyPresetModel";
import { EASY_PROVIDER_LABEL_KEYS } from "@/utils/presets/easyProviderConstants";
import type { EasyCloudEngineId } from "@/utils/presets/easyProviderConstants";
import type { Preset } from "@/utils/presets/presetsTypes";

const PRESET_SOURCE_LOCALE = "en-GB";

function displayModelLabel(
  modelId: string,
  allModels: Array<{ id?: string; name?: string }>,
  getModelName: (model: { id?: string; name?: string }) => string,
): string {
  const model = allModels.find((m) => m.id === modelId);
  if (model) return getModelName(model);
  const slash = modelId.lastIndexOf("/");
  if (slash >= 0) return modelId.slice(slash + 1);
  return modelId;
}

const SelectFromPresetsModal = ({
  open,
  onClose,
  presets = [],
  configuredCloudEngines = [],
  allModels = [],
  onLoadModels,
  getModelName,
}) => {
  const { t, i18n } = useTranslation();
  const uiLocale = i18n.language || PRESET_SOURCE_LOCALE;

  const sortedPresets = useMemo(
    () =>
      [...presets].sort((a, b) =>
        presetDisplayName(a as Preset, uiLocale, PRESET_SOURCE_LOCALE).localeCompare(
          presetDisplayName(b as Preset, uiLocale, PRESET_SOURCE_LOCALE),
          undefined,
          { sensitivity: "base" },
        ),
      ),
    [presets, uiLocale],
  );

  const [selectedPresetId, setSelectedPresetId] = useState("");
  const [loadedProviders, setLoadedProviders] = useState(() => new Set<string>());

  useEffect(() => {
    if (!open) return;
    const first = sortedPresets[0]?.id ?? "";
    queueMicrotask(() => {
      setSelectedPresetId(first);
      setLoadedProviders(new Set());
    });
  }, [open, sortedPresets]);

  useEffect(() => {
    queueMicrotask(() => setLoadedProviders(new Set()));
  }, [selectedPresetId]);

  const selectedPreset = useMemo(
    () => sortedPresets.find((p) => p.id === selectedPresetId) ?? sortedPresets[0] ?? null,
    [sortedPresets, selectedPresetId],
  );

  const providerRows = useMemo(() => {
    if (!selectedPreset) return [];
    return buildPresetProviderRows(
      selectedPreset as Preset,
      configuredCloudEngines as EasyCloudEngineId[],
    );
  }, [selectedPreset, configuredCloudEngines]);

  const loadRow = (row: ReturnType<typeof buildPresetProviderRows>[number]) => {
    onLoadModels(presetProviderRowModelIds(row));
    setLoadedProviders((prev) => new Set(prev).add(row.provider));
  };

  const loadAll = () => {
    const ids: string[] = [];
    for (const row of providerRows) {
      for (const id of presetProviderRowModelIds(row)) {
        if (!ids.includes(id)) ids.push(id);
      }
    }
    onLoadModels(ids);
    setLoadedProviders(new Set(providerRows.map((row) => row.provider)));
  };

  const allProvidersLoaded =
    providerRows.length > 0 && providerRows.every((row) => loadedProviders.has(row.provider));

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 p-4">
      <div
        className="bg-card border border-border rounded-lg shadow-2xl p-6 w-full max-w-[640px] max-h-[min(90vh,720px)] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="select-from-presets-title"
      >
        <h2
          id="select-from-presets-title"
          className="flex items-center gap-2 text-lg font-semibold mb-4 shrink-0"
        >
          <Layers size={18} className="shrink-0 text-emerald-500" strokeWidth={1.6} aria-hidden />
          {t("Select from presets")}
        </h2>

        {sortedPresets.length === 0 ? (
          <p className="text-sm text-muted-foreground mb-6">{t("No presets available.")}</p>
        ) : (
          <div className="flex flex-col gap-4 min-h-0 flex-1">
            <div className="flex flex-col gap-1.5 shrink-0">
              <Label htmlFor="preset-select">{t("Preset")}</Label>
              <Select
                value={selectedPreset?.id ?? ""}
                onValueChange={setSelectedPresetId}
              >
                <SelectTrigger id="preset-select" className="w-full">
                  <SelectValue placeholder={t("Preset")} />
                </SelectTrigger>
                <SelectContent position="popper" className="z-[10050]">
                  {sortedPresets.map((preset) => (
                    <SelectItem key={preset.id} value={preset.id}>
                      {presetDisplayName(preset as Preset, uiLocale, PRESET_SOURCE_LOCALE)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedPreset &&
              presetDisplayDescription(selectedPreset as Preset, uiLocale, PRESET_SOURCE_LOCALE) ? (
                <p className="text-xs text-muted-foreground leading-snug">
                  {presetDisplayDescription(selectedPreset as Preset, uiLocale, PRESET_SOURCE_LOCALE)}
                </p>
              ) : null}
            </div>

            <div
              className={cn(
                "flex min-h-0 flex-1 flex-col gap-3 rounded-xl border p-3",
                "border-emerald-500/25 bg-emerald-500/10",
                "dark:border-emerald-800/45 dark:bg-emerald-950/30",
              )}
            >
              {providerRows.length > 0 ? (
                <div className="flex justify-end shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-500/30 bg-background/60 hover:bg-emerald-500/15 dark:border-emerald-700/50 dark:bg-background/20"
                    onClick={loadAll}
                    disabled={allProvidersLoaded}
                  >
                    {allProvidersLoaded ? t("Loaded") : t("Load all")}
                  </Button>
                </div>
              ) : null}

              <div className="min-h-0 flex-1 overflow-y-auto max-h-[min(420px,55vh)] [scrollbar-width:thin] pe-1">
                {providerRows.length === 0 ? (
                  <p className="text-sm text-muted-foreground px-1">
                    {t("No providers with API keys are configured for this preset.")}
                  </p>
                ) : (
                  <div className="flex flex-col gap-2.5">
                    {providerRows.map((row) => {
                      const labelKey = EASY_PROVIDER_LABEL_KEYS[row.provider];
                      const isLoaded = loadedProviders.has(row.provider);
                      return (
                        <div
                          key={row.provider}
                          className={cn(
                            "rounded-lg border p-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3",
                            "border-emerald-500/20 bg-card",
                            "dark:border-emerald-800/35",
                          )}
                        >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1.5">
                            <ProviderIcon provider={row.provider} size={14} />
                            <span className="font-semibold text-sm">
                              {labelKey ? t(labelKey) : row.provider}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground space-y-0.5 ps-[22px]">
                            <div>
                              <span className="text-foreground/80">{t("Main model")}: </span>
                              {displayModelLabel(row.mainId, allModels, getModelName)}
                            </div>
                            {row.fallbackId ? (
                              <div>
                                <span className="text-foreground/80">{t("Fallback model")}: </span>
                                {displayModelLabel(row.fallbackId, allModels, getModelName)}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="shrink-0 self-end sm:self-center"
                          onClick={() => loadRow(row)}
                          disabled={isLoaded}
                        >
                          {isLoaded ? t("Loaded") : t("Load")}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-2 mt-6 shrink-0">
          <Button variant="outline" onClick={onClose}>
            {t("Close")}
          </Button>
        </div>
      </div>
    </div>
  );
};

SelectFromPresetsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  presets: PropTypes.array,
  configuredCloudEngines: PropTypes.arrayOf(PropTypes.string),
  allModels: PropTypes.arrayOf(PropTypes.object),
  onLoadModels: PropTypes.func.isRequired,
  getModelName: PropTypes.func.isRequired,
};

export default SelectFromPresetsModal;
