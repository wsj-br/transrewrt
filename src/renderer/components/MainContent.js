import React from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import ModelSelector from "./ModelSelector";
import ResizablePanels from "./ResizablePanels";
import SettingsPanel from "./SettingsPanel";

const useStyles = makeStyles({
  mainPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    overflow: "hidden",
    backgroundColor: tokens.colorNeutralBackground2,
  },
  workspace: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
    overflow: "hidden",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    flexShrink: 0,
  },
  modeIndicator: {
    fontSize: "18px",
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
    textTransform: "capitalize",
  },
  content: {
    flex: 1,
    display: "flex",
    padding: `0 ${tokens.spacingHorizontalL} ${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
    gap: tokens.spacingHorizontalL,
    overflow: "hidden",
    minHeight: 0,
  },
});

const MainContent = ({
  view,
  // Workspace props
  currentMode,
  models,
  activeModel,
  onModelChange,
  onOpenSettingsModels,
  onRemoveModel,
  leftPanel,
  rightPanel,
}) => {
  const styles = useStyles();

  if (view === "settings") {
    return (
      <main className={styles.mainPanel}>
        <SettingsPanel />
      </main>
    );
  }

  return (
    <main className={styles.mainPanel}>
      <div className={styles.workspace}>
        <div className={styles.toolbar}>
          <span className={styles.modeIndicator}>
            {currentMode === "translate" ? "Translate" : "Rewrite"}
          </span>
          <ModelSelector
            models={models}
            currentModel={activeModel}
            onModelChange={onModelChange}
            onIconClick={onOpenSettingsModels}
            onRemoveModel={onRemoveModel}
          />
        </div>
        <div className={styles.content}>
          <ResizablePanels leftPanel={leftPanel} rightPanel={rightPanel} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
