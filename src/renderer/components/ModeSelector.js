import React from 'react';
import { 
  makeStyles,
  tokens,
  ToggleButton
} from "@fluentui/react-components";

const useStyles = makeStyles({
  modeSelector: {
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    backgroundColor: tokens.colorNeutralBackground1,
    display: "flex",
    justifyContent: "center",
  },
  modeSelectorInner: {
    backgroundColor: tokens.colorNeutralBackground2,
    padding: "4px",
    borderRadius: tokens.borderRadiusSmall,
    display: "inline-flex",
    gap: "4px",
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  modeButton: {
    minWidth: "100px",
    "&[aria-pressed='true']": {
      backgroundColor: tokens.colorBrandBackground,
      color: tokens.colorBrandForeground1,
    },
  },
});

const ModeSelector = ({ currentMode, onModeChange }) => {
  const styles = useStyles();

  return (
    <div className={styles.modeSelector}>
      <div className={styles.modeSelectorInner}>
        <ToggleButton
          className={styles.modeButton}
          checked={currentMode === 'translate'}
          onClick={() => onModeChange('translate')}
        >
          Translate
        </ToggleButton>
        <ToggleButton
          className={styles.modeButton}
          checked={currentMode === 'rewrite'}
          onClick={() => onModeChange('rewrite')}
        >
          Rewrite
        </ToggleButton>
      </div>
    </div>
  );
};

export default ModeSelector;