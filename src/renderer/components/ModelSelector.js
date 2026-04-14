import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  makeStyles,
  tokens,
  Popover,
  PopoverTrigger,
  PopoverSurface,
  MenuList,
  MenuItem,
  Button,
  Badge,
} from "@fluentui/react-components";
import { ChevronDownRegular } from "@fluentui/react-icons";
import { Bot, Trash2, Check } from "lucide-react";
import PropTypes from "prop-types";
import ProviderIcon from "./ProviderIcon";
import ConfirmModal from "./ConfirmModal";
import { modelHeaderDisplayId, providerSortKeyFromModelId } from "../utils/misc/modelIdUtils";
import { modelRouteBadgeProps } from "../utils/misc/modelRouteBadge";
import { flipUiArrowsForRtl } from "../utils/misc/formatUtils";
import { getTextDirection } from "ai-i18n-tools/runtime";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  modelIcon: {
    display: "flex",
    alignItems: "center",
    color: tokens.colorStatusSuccessForeground3,
  },
  modelIconButton: {
    display: "flex",
    alignItems: "center",
    padding: tokens.spacingVerticalXS,
    margin: `0 ${tokens.spacingVerticalXXS} 0 -${tokens.spacingVerticalXXS}`,
    border: "none",
    borderRadius: tokens.borderRadiusSmall,
    background: "transparent",
    color: "inherit",
    cursor: "pointer",
  },
  modelIconButtonHover: {
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  removeButton: {
    display: "flex",
    alignItems: "center",
    padding: tokens.spacingVerticalXS,
    margin: `0 -${tokens.spacingVerticalXXS} 0 0`,
    border: "none",
    borderRadius: tokens.borderRadiusSmall,
    background: "transparent",
    color: tokens.colorNeutralForeground4 ?? "rgba(255, 255, 255, 0.45)",
    cursor: "pointer",
  },
  removeButtonHover: {
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      color: tokens.colorNeutralForeground3,
    },
  },
  removeButtonDisabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  modelTrigger: {
    minWidth: "300px",
    maxWidth: "min(420px, 100vw - 120px)",
    justifyContent: "space-between",
    borderRadius: "0 !important",
    border: "none !important",
    borderBottom: `2px solid ${tokens.colorNeutralStroke1} !important`,
    backgroundColor: "transparent !important",
    paddingInlineStart: "0 !important",
    paddingInlineEnd: "0 !important",
    paddingTop: `${tokens.spacingVerticalXS} !important`,
    paddingBottom: `${tokens.spacingVerticalXS} !important`,
    height: "auto",
    ":hover": {
      borderBottomColor: `${tokens.colorNeutralForeground1} !important`,
    },
    ":focus-visible": {
      borderBottomColor: `${tokens.colorBrandBackground} !important`,
      borderBottomWidth: "3px !important",
    },
  },
  triggerInner: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    overflow: "hidden",
    flex: 1,
    minWidth: 0,
    textAlign: "start",
  },
  triggerLabel: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontWeight: 500,
    fontSize: tokens.fontSizeBase300,
  },
  popoverSurface: {
    minWidth: "420px",
    width: "max-content",
    maxWidth: "min(900px, calc(100vw - 24px))",
    maxHeight: "min(400px, 70vh)",
    overflowY: "auto",
    overflowX: "visible",
    padding: tokens.spacingVerticalXS,
    boxSizing: "border-box",
  },
  menuListFull: {
    width: "100%",
    minWidth: 0,
  },
  menuItemModel: {
    maxWidth: "none !important",
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    alignItems: "center",
    [`& .fui-MenuItem__content`]: {
      display: "flex",
      minWidth: 0,
      flex: 1,
    },
  },
  pickerRow: {
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr) auto",
    alignItems: "center",
    columnGap: tokens.spacingHorizontalS,
    width: "100%",
    minWidth: 0,
  },
  pickerRowLabel: {
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontWeight: 500,
  },
  badgeNoShrink: {
    flexShrink: 0,
  },
  badgeSlot: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    justifySelf: "end",
  },
  selectedMenuItem: {
    color: tokens.colorBrandForeground1,
  },
});

function ModelPickerRow({ modelId, t, styles, iconSize = 16, showIcon = true }) {
  const displayId = modelHeaderDisplayId(modelId);
  const iconProv = providerSortKeyFromModelId(modelId);
  const route = modelRouteBadgeProps(modelId, t);
  return (
    <div className={styles.pickerRow}>
      {showIcon ? <ProviderIcon provider={iconProv} size={iconSize} /> : null}
      <span className={styles.pickerRowLabel}>{displayId}</span>
      <span className={styles.badgeSlot}>
        <Badge appearance="outline" size="small" color={route.color} className={styles.badgeNoShrink}>
          {route.text}
        </Badge>
      </span>
    </div>
  );
}

ModelPickerRow.propTypes = {
  modelId: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
  iconSize: PropTypes.number,
  showIcon: PropTypes.bool,
};

const ModelSelector = ({ models = [], currentModel, onModelChange, onIconClick, onRemoveModel }) => {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const isRtl = getTextDirection(i18n.language) === "rtl";
  const [open, setOpen] = useState(false);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const canRemove = models.length > 1 && onRemoveModel && currentModel;

  const handleRemoveClick = () => {
    if (!canRemove || !currentModel) return;
    setShowRemoveConfirm(true);
  };

  const handleConfirmRemove = () => {
    setShowRemoveConfirm(false);
    if (currentModel) onRemoveModel(currentModel);
  };

  const handleCancelRemove = () => {
    setShowRemoveConfirm(false);
  };

  if (models.length === 0) return null;

  const sortedModels = [...models].sort((a, b) =>
    modelHeaderDisplayId(a).localeCompare(modelHeaderDisplayId(b), undefined, { sensitivity: "base" }),
  );

  const displayModel = currentModel || models[0] || "";
  const iconProv = providerSortKeyFromModelId(displayModel);

  const iconContent = (
    <>
      {displayModel ? (
        <ProviderIcon provider={iconProv} size={18} />
      ) : (
        <Bot size={18} />
      )}
    </>
  );

  const handleSelectModel = (model) => {
    if (!model) return;
    setOpen(false);
    onModelChange(model);
  };

  return (
    <div className={styles.container}>
      {onIconClick ? (
        <button
          type="button"
          className={`${styles.modelIcon} ${styles.modelIconButton} ${styles.modelIconButtonHover}`}
          onClick={onIconClick}
          title={flipUiArrowsForRtl(t("Open Settings → Models"), isRtl)}
          aria-label={t("Open Settings to manage models")}
        >
          {iconContent}
        </button>
      ) : (
        <div className={styles.modelIcon}>{iconContent}</div>
      )}
      <Popover
        open={open}
        onOpenChange={(_, data) => setOpen(data.open)}
        positioning={{ position: "below", align: "end", autoSize: "width", onPositioningEnd: () => {} }}
      >
        <PopoverTrigger disableButtonEnhancement>
          <Button
            appearance="transparent"
            className={styles.modelTrigger}
            aria-label={t("Select Model")}
            title={displayModel}
            data-testid="model-selector"
            icon={<ChevronDownRegular />}
            iconPosition="after"
          >
            <span className={styles.triggerInner}>
              {displayModel ? (
                <ModelPickerRow modelId={displayModel} t={t} styles={styles} iconSize={16} showIcon={false} />
              ) : null}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverSurface className={styles.popoverSurface} data-testid="model-selector-menu">
          <MenuList className={styles.menuListFull}>
            {sortedModels.map((model) => {
              const isSelected = model === (currentModel || models[0]);
              const optionSlug = String(model).replace(/\//g, "-");
              return (
                <MenuItem
                  key={model}
                  data-testid={`model-option-${optionSlug}`}
                  onClick={() => handleSelectModel(model)}
                  icon={
                    isSelected ? (
                      <Check size={16} />
                    ) : (
                      <Check size={16} style={{ opacity: 0 }} aria-hidden />
                    )
                  }
                  className={`${styles.menuItemModel} ${isSelected ? styles.selectedMenuItem : ""}`}
                >
                  <ModelPickerRow modelId={model} t={t} styles={styles} iconSize={16} />
                </MenuItem>
              );
            })}
          </MenuList>
        </PopoverSurface>
      </Popover>
      {onRemoveModel && (
        <button
          type="button"
          className={`${styles.removeButton} ${styles.removeButtonHover} ${!canRemove ? styles.removeButtonDisabled : ""}`}
          onClick={handleRemoveClick}
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
          onCancel={handleCancelRemove}
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
