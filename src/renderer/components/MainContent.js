import React, { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, tokens, Spinner } from "@fluentui/react-components";
import { Languages, PenTool, Sparkles, BarChart3 } from "lucide-react";
import ModelSelector from "./ModelSelector";
import HeaderLanguageSelector from "./HeaderLanguageSelector";
import ResizablePanels from "./ResizablePanels";

const SettingsPanel = lazy(() => import("./SettingsPanel"));
const DashboardPage = lazy(() => import("../features/dashboard/components/DashboardPage"));

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
    minHeight: "36px",
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    flexShrink: 0,
  },
  toolbarRight: {
    display: "flex",
    alignItems: "center",
    gap: "48px",
  },
  globeWrap: {
    marginLeft: "4px",
  },
  toolbarLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  toolbarIcon: {
    flexShrink: 0,
    color: tokens.colorBrandForegroundInverted,
  },
  modeIndicator: {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: 1.25,
    color: tokens.colorNeutralForeground1,
    textTransform: "capitalize",
  },
  content: {
    flex: 1,
    display: "flex",
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalL} ${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
    gap: tokens.spacingHorizontalL,
    overflow: "hidden",
    minHeight: 0,
  },
  contentFill: {
    flex: 1,
    minWidth: 0,
    minHeight: 0,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
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
  const { t } = useTranslation();

  if (view === "settings") {
    return (
      <main className={styles.mainPanel}>
        <Suspense fallback={<div className={styles.mainPanel} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner size="large" label={t("Loading settings…")} /></div>}>
          <SettingsPanel />
        </Suspense>
      </main>
    );
  }

  if (view === "dashboard") {
    return (
      <main className={styles.mainPanel}>
        <div className={styles.workspace}>
          <div className={styles.toolbar}>
            <div className={styles.toolbarLeft}>
              <BarChart3 className={styles.toolbarIcon} size={20} strokeWidth={1.6} />
              <span className={styles.modeIndicator}>{t("Dashboard")}</span>
            </div>
            <div className={styles.toolbarRight}>
              <span className={styles.globeWrap}>
                <HeaderLanguageSelector compact />
              </span>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.contentFill}>
              <Suspense fallback={<div className={styles.mainPanel} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner size="large" label={t("Loading dashboard…")} /></div>}>
                <DashboardPage />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.mainPanel}>
      <div className={styles.workspace}>
        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            {currentMode === "translate" && <Languages className={styles.toolbarIcon} size={20} strokeWidth={1.6} />}
            {currentMode === "rewrite" && <PenTool className={styles.toolbarIcon} size={20} strokeWidth={1.6} />}
            {currentMode === "transform" && <Sparkles className={styles.toolbarIcon} size={20} strokeWidth={1.6} />}
            <span className={styles.modeIndicator}>
              {currentMode === "translate" ? t("Translate") : currentMode === "rewrite" ? t("Rewrite") : t("Transform")}
            </span>
          </div>
          <div className={styles.toolbarRight}>
            <ModelSelector
              models={models}
              currentModel={activeModel}
              onModelChange={onModelChange}
              onIconClick={onOpenSettingsModels}
              onRemoveModel={onRemoveModel}
            />
            <span className={styles.globeWrap}>
              <HeaderLanguageSelector compact />
            </span>
          </div>
        </div>
        <div className={styles.content}>
          <ResizablePanels leftPanel={leftPanel} rightPanel={rightPanel} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
