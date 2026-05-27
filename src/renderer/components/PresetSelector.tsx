import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { presetDisplayDescription, presetDisplayName } from "@/utils/presets/presetDisplay";
import type { Preset } from "@/utils/presets/presetsTypes";

/**
 * Easy mode: pick a preset (name + description). No provider / route UI.
 */
function PresetSelector({
  presets = [],
  selectedPresetId,
  onPresetChange,
  onOpenSettingsGeneral,
  uiLocale,
  sourceLocale = "en-GB",
}) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  if (!presets.length) return null;

  const resolvedUiLocale = uiLocale || i18n.language || "en-GB";

  const sorted = [...presets].sort((a, b) =>
    presetDisplayName(a as Preset, resolvedUiLocale, sourceLocale).localeCompare(
      presetDisplayName(b as Preset, resolvedUiLocale, sourceLocale),
      undefined,
      { sensitivity: "base" },
    ),
  );

  const current =
    sorted.find((s) => s.id === selectedPresetId) ?? sorted[0];
  const displayName = presetDisplayName(current as Preset, resolvedUiLocale, sourceLocale);

  return (
    <div className="flex min-w-0 max-w-full flex-wrap items-center justify-end gap-x-2 gap-y-1">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={cn(
              "flex min-w-0 max-w-full items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-start outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-ring sm:max-w-[min(320px,calc(100vw-120px))]",
            )}
            aria-label={t("Select preset")}
            title={displayName}
            data-testid="preset-selector"
          >
            <span className="min-w-0 flex-1 truncate text-sm font-semibold leading-snug">
              {displayName}
            </span>
            <ChevronDown className="h-3 w-3 shrink-0 text-muted-foreground/50" aria-hidden />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="min-w-[300px] max-w-[min(560px,calc(100vw-24px))] max-h-[min(400px,70vh)] overflow-y-auto"
          data-testid="preset-selector-menu"
        >
          {sorted.map((preset) => {
            const isSelected = preset.id === (selectedPresetId || sorted[0]?.id);
            const slug = String(preset.id).replace(/\//g, "-");
            return (
              <DropdownMenuItem
                key={preset.id}
                data-testid={`preset-option-${slug}`}
                onClick={() => onPresetChange(preset.id)}
                className="flex w-full min-w-0 items-start gap-2 py-2"
              >
                {isSelected ? (
                  <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                ) : (
                  <span className="mt-0.5 w-3.5 shrink-0" aria-hidden />
                )}
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold leading-snug">
                    {presetDisplayName(preset as Preset, resolvedUiLocale, sourceLocale)}
                  </span>
                  {presetDisplayDescription(preset as Preset, resolvedUiLocale, sourceLocale) ? (
                    <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                      {presetDisplayDescription(preset as Preset, resolvedUiLocale, sourceLocale)}
                    </span>
                  ) : null}
                </span>
              </DropdownMenuItem>
            );
          })}
          {onOpenSettingsGeneral ? (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  onOpenSettingsGeneral();
                  setOpen(false);
                }}
              >
                {t("Open Settings → General")}
              </DropdownMenuItem>
            </>
          ) : null}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

PresetSelector.propTypes = {
  presets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      model_ids: PropTypes.objectOf(PropTypes.string),
      prompt_hint: PropTypes.string,
      translated_name: PropTypes.objectOf(PropTypes.string),
      translated_description: PropTypes.objectOf(PropTypes.string),
    }),
  ),
  selectedPresetId: PropTypes.string,
  onPresetChange: PropTypes.func.isRequired,
  onOpenSettingsGeneral: PropTypes.func,
  uiLocale: PropTypes.string,
  sourceLocale: PropTypes.string,
};

export default PresetSelector;
