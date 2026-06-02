import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Trash2, Check, ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import ConfirmModal from "./ConfirmModal";
import ProviderIcon from "./ProviderIcon";
import { modelHeaderDisplayId, providerSortKeyFromModelId } from "../utils/misc/modelIdUtils";
import { modelRouteBadgeProps } from "../utils/misc/modelRouteBadge";
import { flipUiArrowsForRtl, getTextDirection } from "ai-i18n-tools/runtime";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

function ModelPickerRow({ modelId, t, iconSize = 16, showIcon = true }) {
  const displayId = modelHeaderDisplayId(modelId);
  const iconProv = providerSortKeyFromModelId(modelId);
  const route = modelRouteBadgeProps(modelId, t);
  return (
    <div
      className={cn(
        "grid w-full min-w-0 items-center gap-x-2 overflow-hidden",
        showIcon
          ? "grid-cols-[auto_minmax(0,1fr)_auto]"
          : "grid-cols-[minmax(0,1fr)_auto]",
      )}
    >
      {showIcon ? <ProviderIcon provider={iconProv} size={iconSize} /> : null}
      <span className="min-w-0 truncate text-sm font-medium leading-snug">
        {displayId}
      </span>
      <span className="flex justify-end items-center">
        <span className={cn(
          "text-xs px-1.5 py-0.5 rounded border font-medium shrink-0",
          route.color === "success" ? "border-green-500/50 text-green-500" :
          route.color === "warning" ? "border-yellow-500/50 text-yellow-500" :
          route.color === "error" ? "border-red-500/50 text-red-500" :
          "border-border text-muted-foreground"
        )}>
          {route.text}
        </span>
      </span>
    </div>
  );
}

ModelPickerRow.propTypes = {
  modelId: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  iconSize: PropTypes.number,
  showIcon: PropTypes.bool,
};

const ModelSelector = ({ models = [], currentModel, onModelChange, onIconClick, onRemoveModel }) => {
  const { t, i18n } = useTranslation();
  const isRtl = getTextDirection(i18n.language) === "rtl";
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const canRemove = models.length > 1 && onRemoveModel && currentModel;

  const handleConfirmRemove = () => {
    setShowRemoveConfirm(false);
    if (currentModel) onRemoveModel(currentModel);
  };

  if (models.length === 0) return null;

  const sortedModels = [...models].sort((a, b) =>
    modelHeaderDisplayId(a).localeCompare(modelHeaderDisplayId(b), undefined, { sensitivity: "base" }),
  );

  const displayModel = currentModel || models[0] || "";

  const modelsSettingsLabel = flipUiArrowsForRtl(t("Open Settings → Models"), isRtl);

  return (
    <div className="flex min-w-0 max-w-full flex-wrap items-center justify-end gap-x-2 gap-y-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={cn(
              "flex min-w-0 max-w-full items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-start outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-ring sm:max-w-[min(320px,calc(100vw-120px))]",
            )}
            aria-label={t("Select Model")}
            title={displayModel}
            data-testid="model-selector"
          >
            <span className="flex shrink-0 items-center" aria-hidden>
              <ProviderIcon
                provider={providerSortKeyFromModelId(displayModel)}
                size={16}
              />
            </span>
            <span className="min-w-0 flex-1 truncate font-mono text-xs text-muted-foreground">
              {displayModel ? modelHeaderDisplayId(displayModel) : ""}
            </span>
            <ChevronDown className="h-3 w-3 shrink-0 text-muted-foreground/50" aria-hidden />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="min-w-[300px] max-w-[min(600px,calc(100vw-24px))] max-h-[min(400px,70vh)] overflow-y-auto"
          data-testid="model-selector-menu"
        >
          {sortedModels.map((model) => {
            const isSelected = model === (currentModel || models[0]);
            const optionSlug = String(model).replace(/\//g, "-");
            return (
              <DropdownMenuItem
                key={model}
                data-testid={`model-option-${optionSlug}`}
                onClick={() => onModelChange(model)}
                className="flex items-center gap-2 w-full min-w-0"
              >
                {isSelected ? (
                  <Check size={14} className="shrink-0 text-primary" />
                ) : (
                  <span className="w-3.5 shrink-0" aria-hidden />
                )}
                <span className="flex-1 min-w-0">
                  <ModelPickerRow modelId={model} t={t} iconSize={16} />
                </span>
              </DropdownMenuItem>
            );
          })}
          {onIconClick ? (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  onIconClick();
                }}
              >
                {modelsSettingsLabel}
              </DropdownMenuItem>
            </>
          ) : null}
        </DropdownMenuContent>
      </DropdownMenu>
      {onRemoveModel && (
        <button
          type="button"
          className={cn(
            "flex shrink-0 items-center p-1 rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
            !canRemove && "opacity-40 cursor-not-allowed pointer-events-none"
          )}
          onClick={() => canRemove && setShowRemoveConfirm(true)}
          disabled={!canRemove}
          title={canRemove ? t("Remove this model from your list") : t("At least one model must remain")}
          aria-label={t("Remove current model from list")}
        >
          <Trash2 size={12} />
        </button>
      )}
      {showRemoveConfirm && (
        <ConfirmModal
          title={t("Remove model")}
          message={t("Remove this model from your list?\n\nThe next model in the list will be selected.")}
          confirmLabel={t("Remove")}
          cancelLabel={t("Cancel")}
          onConfirm={handleConfirmRemove}
          onCancel={() => setShowRemoveConfirm(false)}
          danger
        />
      )}
    </div>
  );
};

ModelSelector.propTypes = {
  models: PropTypes.arrayOf(PropTypes.string),
  currentModel: PropTypes.string,
  onModelChange: PropTypes.func.isRequired,
  onIconClick: PropTypes.func,
  onRemoveModel: PropTypes.func,
};

export default ModelSelector;
