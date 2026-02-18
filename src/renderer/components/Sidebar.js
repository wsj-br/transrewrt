import React from "react";
import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import { Languages, PenTool, Settings } from "lucide-react";
import Logo from "../../../transrewrt_logo.png";

const useStyles = makeStyles({
  sidebar: {
    width: "100px",
    minWidth: "100px",
    height: "100%",
    backgroundColor: tokens.colorNeutralBackground1,
    borderRight: `1px solid ${tokens.colorNeutralStroke1}`,
    display: "flex",
    flexDirection: "column",
    WebkitAppRegion: "drag",
  },
  logoSection: {
    padding: tokens.spacingVerticalM,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    WebkitAppRegion: "no-drag",
  },
  logo: {
    height: "32px",
    width: "auto",
    objectFit: "contain",
  },
  navSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: tokens.spacingVerticalS,
    padding: `${tokens.spacingVerticalM} 0`,
    WebkitAppRegion: "no-drag",
  },
  iconButton: {
    width: "100%",
    minHeight: "64px",
    borderRadius: tokens.borderRadiusMedium,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    color: tokens.colorNeutralForeground2,
    transition: "all 0.15s ease",
    position: "relative",
    padding: "8px 0",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      color: tokens.colorNeutralForeground1,
    },
  },
  iconButtonActive: {
    backgroundColor: tokens.colorNeutralBackground2,
    color: tokens.colorBrandForeground1,
    borderLeft: `3px solid ${tokens.colorBrandBackground}`,
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground2,
      color: tokens.colorBrandForeground1,
    },
  },
  iconLabel: {
    fontSize: "11px",
    fontWeight: 500,
    textAlign: "center",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footerSection: {
    padding: tokens.spacingVerticalM,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    WebkitAppRegion: "no-drag",
  },
});

const Sidebar = ({
  currentMode,
  currentView,
  onModeChange,
  onSettingsClick,
}) => {
  const styles = useStyles();
  const isSettingsActive = currentView === "settings";
  const isTranslateActive = currentMode === "translate" && currentView === "workspace";
  const isRewriteActive = currentMode === "rewrite" && currentView === "workspace";

  // Icon size for consistent rendering
  const iconSize = 24;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoSection}>
        <img
          className={styles.logo}
          src={Logo}
          alt="Transrewrt logo"
        />
      </div>

      <nav className={styles.navSection}>
        <button
          type="button"
          className={mergeClasses(styles.iconButton, isTranslateActive && styles.iconButtonActive)}
          onClick={() => onModeChange("translate")}
          aria-label="Translate"
        >
          <div className={styles.iconContainer}>
            <Languages size={iconSize} strokeWidth={isTranslateActive ? 2.5 : 1.5} />
          </div>
          <span className={styles.iconLabel}>Translate</span>
        </button>
        <button
          type="button"
          className={mergeClasses(styles.iconButton, isRewriteActive && styles.iconButtonActive)}
          onClick={() => onModeChange("rewrite")}
          aria-label="Rewrite"
        >
          <div className={styles.iconContainer}>
            <PenTool size={iconSize} strokeWidth={isRewriteActive ? 2.5 : 1.5} />
          </div>
          <span className={styles.iconLabel}>Rewrite</span>
        </button>
      </nav>

      <div className={styles.footerSection}>
        <button
          type="button"
          className={mergeClasses(styles.iconButton, isSettingsActive && styles.iconButtonActive)}
          onClick={onSettingsClick}
          aria-label="Settings"
        >
          <div className={styles.iconContainer}>
            <Settings size={iconSize} strokeWidth={isSettingsActive ? 2.5 : 1.5} />
          </div>
          <span className={styles.iconLabel}>Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
