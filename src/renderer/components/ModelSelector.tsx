import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Bot, Trash2, Check, ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import ProviderIcon from "./ProviderIcon";
import ConfirmModal from "./ConfirmModal";
import { modelHeaderDisplayId, providerSortKeyFromModelId } from "../utils/misc/modelIdUtils";
import { modelRouteBadgeProps } from "../utils/misc/modelRouteBadge";
import { flipUiArrowsForRtl } from "../utils/misc/formatUtils";
import { getTextDirection } from "ai-i18n-tools/runtime";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
  const iconProv = providerSortKeyFromModelId(displayModel);

  return (
    <div className="flex min-w-0 max-w-full flex-wrap items-center justify-end gap-x-1 gap-y-1">
      {onIconClick ? (
        <button
          type="button"
          className="flex shrink-0 items-center text-emerald-500 p-1 rounded hover:bg-accent transition-colors"
          onClick={onIconClick}
          title={flipUiArrowsForRtl(t("Open Settings → Models"), isRtl)}
          aria-label={t("Open Settings to manage models")}
        >
          {displayModel ? <ProviderIcon provider={iconProv} size={18} /> : <Bot size={18} />}
        </button>
      ) : (
        <div className="flex shrink-0 items-center text-emerald-500 p-1">
          {displayModel ? <ProviderIcon provider={iconProv} size={18} /> : <Bot size={18} />}
        </div>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex min-w-0 max-w-full flex-1 items-center gap-1 overflow-hidden text-start border-b-2 border-border hover:border-foreground focus-visible:border-primary transition-colors px-0 py-1 outline-none bg-transparent sm:min-w-[200px] sm:max-w-[320px] sm:flex-initial"
            aria-label={t("Select Model")}
            title={displayModel}
            data-testid="model-selector"
          >
            <span className="flex-1 min-w-0 overflow-hidden">
              {displayModel ? <ModelPickerRow modelId={displayModel} t={t} iconSize={16} showIcon={false} /> : null}
            </span>
            <ChevronDown size={14} className="shrink-0 text-muted-foreground" />
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
