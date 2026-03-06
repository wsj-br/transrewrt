import React, { useState } from "react";
import { makeStyles, tokens, Dropdown, Option } from "@fluentui/react-components";
import { Bot, Trash2 } from "lucide-react";
import ProviderIcon from "./ProviderIcon";
import ConfirmModal from "./ConfirmModal";

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
    color: tokens.colorNeutralForeground3,
    cursor: "pointer",
  },
  removeButtonHover: {
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      color: tokens.colorNeutralForeground1,
    },
  },
  removeButtonDisabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  modelSelect: {
    minWidth: "300px",
    "& .fui-Dropdown__trigger": {
      borderRadius: "0 !important",
      border: "none !important",
      borderBottom: `2px solid ${tokens.colorNeutralStroke1} !important`,
      backgroundColor: "transparent !important",
      paddingLeft: "0 !important",
      paddingRight: "0 !important",
    },
    "& .fui-Dropdown__trigger:hover": {
      borderBottomColor: `${tokens.colorNeutralForeground1} !important`,
    },
    "& .fui-Dropdown__trigger:focus-visible": {
      borderBottomColor: `${tokens.colorBrandBackground} !important`,
      borderBottomWidth: "3px !important",
    },
  },
});

const ModelSelector = ({ models = [], currentModel, onModelChange, onIconClick, onRemoveModel }) => {
  const styles = useStyles();
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

  // Determine model display name and provider
  const getModelInfo = (model) => {
    if (!model) return { name: "", provider: "" };
    const parts = model.split("/");
    return {
      name: parts.length > 1 ? parts[parts.length - 1] : model,
      provider: parts.length > 1 ? parts[0] : "",
    };
  };

  // Sort models alphabetically by name
  const sortedModels = [...models].sort((a, b) => {
    const infoA = getModelInfo(a);
    const infoB = getModelInfo(b);
    return infoA.name.localeCompare(infoB.name);
  });

  // Determine which model to show icon for (current or first in original list)
  const displayModel = currentModel || models[0] || "";
  const displayInfo = getModelInfo(displayModel);

  const iconContent = (
    <>
      {displayInfo.provider ? (
        <ProviderIcon provider={displayInfo.provider} size={18} />
      ) : (
        <Bot size={18} />
      )}
    </>
  );

  return (
    <div className={styles.container}>
      {onIconClick ? (
        <button
          type="button"
          className={`${styles.modelIcon} ${styles.modelIconButton} ${styles.modelIconButtonHover}`}
          onClick={onIconClick}
          title="Open Settings → Models"
          aria-label="Open Settings to manage models"
        >
          {iconContent}
        </button>
      ) : (
        <div className={styles.modelIcon}>{iconContent}</div>
      )}
      <Dropdown
        appearance="underline"
        value={currentModel || models[0] || ""}
        selectedOptions={
          currentModel ? [currentModel] : models.length > 0 ? [models[0]] : []
        }
        onOptionSelect={(e, data) => onModelChange(data.optionValue)}
        className={styles.modelSelect}
        aria-label="Select Model"
      >
        {sortedModels.map((model) => {
          const { name, provider } = getModelInfo(model);
          const displayName = provider ? `${name} (${provider})` : name;
          return (
            <Option key={model} value={model}>
               {provider && (
                 <span style={{ marginRight: "8px", display: "inline-flex", alignItems: "center" }}>
                   <ProviderIcon provider={provider} size={16} />
                 </span>
               )}
              {displayName}
            </Option>
          );
        })}
      </Dropdown>
      {onRemoveModel && (
        <button
          type="button"
          className={`${styles.removeButton} ${styles.removeButtonHover} ${!canRemove ? styles.removeButtonDisabled : ""}`}
          onClick={handleRemoveClick}
          disabled={!canRemove}
          title={canRemove ? "Remove this model from your list" : "At least one model must remain"}
          aria-label="Remove current model from list"
        >
          <Trash2 size={16} />
        </button>
      )}
      {showRemoveConfirm && (
        <ConfirmModal
          title="Remove model"
          message="Remove this model from your list? The next model in the list will be selected."
          confirmLabel="Remove"
          cancelLabel="Cancel"
          onConfirm={handleConfirmRemove}
          onCancel={handleCancelRemove}
          danger
        />
      )}
    </div>
  );
};

export default ModelSelector;
