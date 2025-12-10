import React from "react";
import { 
  Button, 
  makeStyles,
  tokens,
  Dropdown,
  Option
} from "@fluentui/react-components";
import { Settings20Filled, BrainCircuitRegular } from "@fluentui/react-icons";
import Logo from "../../../TR_logo_withoutblackbox.png";

const useStyles = makeStyles({
  header: {
    height: "64px",
    backgroundColor: tokens.colorNeutralBackground1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: tokens.spacingHorizontalM,
    paddingRight: tokens.spacingHorizontalM,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    WebkitAppRegion: "drag",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  logo: {
    height: "32px",
    width: "auto",
    objectFit: "contain",
  },
  title: {
    fontSize: "14px",
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
    letterSpacing: "0.5px",
  },
  headerControls: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    WebkitAppRegion: "no-drag",
  },
  modelSelector: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  modelSelect: {
    minWidth: "200px",
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

const Header = ({
  title,
  onSettingsClick,
  models = [],
  currentModel,
  onModelChange,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <img
          className={styles.logo}
          src={Logo}
          alt="Translator & Rewriter logo"
        />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.headerControls}>
        {models.length > 0 && (
          <div className={styles.modelSelector}>
            <label style={{ display: 'flex', alignItems: 'center', 
              gap: '6px', fontSize: '14px', fontWeight: 300, color: tokens.colorNeutralForeground1, 
              marginRight: '8px' }}>
              <BrainCircuitRegular fontSize='24px' color={tokens.colorStatusSuccessForeground3} />
              Model:
            </label>
            <Dropdown
              appearance="underline"
              value={currentModel || models[0] || ""}
              selectedOptions={currentModel ? [currentModel] : (models.length > 0 ? [models[0]] : [])}
              onOptionSelect={(e, data) => onModelChange(data.optionValue)}
              className={styles.modelSelect}
              aria-label="Select Model"
            >
              {models.map((model) => (
                <Option key={model} value={model}>
                  {model}
                </Option>
              ))}
            </Dropdown>
          </div>
        )}
        <Button
          appearance="outline"
          icon={<Settings20Filled />}
          onClick={onSettingsClick}
          title="Settings"
        />
      </div>
    </div>
  );
};

export default Header;
