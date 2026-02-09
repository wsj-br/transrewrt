 import React from "react";
 import { makeStyles, tokens, Dropdown, Option } from "@fluentui/react-components";
 import { Bot } from "lucide-react";
 import ProviderIcon from "./ProviderIcon";

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

const ModelSelector = ({ models = [], currentModel, onModelChange }) => {
  const styles = useStyles();

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

  return (
    <div className={styles.container}>
      <div className={styles.modelIcon}>
        {displayInfo.provider ? (
          <ProviderIcon provider={displayInfo.provider} size={18} />
        ) : (
          <Bot size={18} />
        )}
      </div>
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
    </div>
  );
};

export default ModelSelector;
