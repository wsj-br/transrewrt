import React from "react";
import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import { Languages, PenTool, Settings } from "lucide-react";
import Logo from "../../../images/transrewrt_logo.png";

const useStyles = makeStyles({
  sidebar: {
    width: "220px",
    minWidth: "220px",
    height: "100%",
    backgroundColor: "#12141d",
    borderRight: "1px solid rgba(255, 255, 255, 0.08)",
    display: "flex",
    flexDirection: "column",
    WebkitAppRegion: "drag",
  },
  logoSection: {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "12px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
    WebkitAppRegion: "no-drag",
  },
  logo: {
    height: "28px",
    width: "auto",
    objectFit: "contain",
  },
  appName: {
    fontSize: "18px",
    fontWeight: 700,
    fontFamily:
      "'Segoe UI', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: "-0.5px",
    display: "inline-block",
    background:
      "linear-gradient(90deg, #84cc16 0%, #a3e635 40%, #fb923c 60%, #f97316 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  navSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: "12px 8px",
    gap: "4px",
    WebkitAppRegion: "no-drag",
  },
  navItem: {
    width: "100%",
    minHeight: "48px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "12px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    color: "#e0e0e0",
    transition: "all 0.2s ease",
    padding: "10px 12px",
    fontFamily:
      "'Segoe UI', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "left",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.06)",
    },
  },
  navItemActive: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    color: "#ffffff",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: "3px",
      height: "24px",
      backgroundColor: "#fb923c",
      borderRadius: "0 2px 2px 0",
    },
  },
  navItemIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  navItemLabel: {
    flex: 1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  footerSection: {
    padding: "12px 8px",
    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: "4px",
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
  const isTranslateActive =
    currentMode === "translate" && currentView === "workspace";
  const isRewriteActive =
    currentMode === "rewrite" && currentView === "workspace";

  const iconSize = 20;

  const navItems = [
    {
      id: "translate",
      label: "Translate",
      icon: Languages,
      isActive: isTranslateActive,
      onClick: () => onModeChange("translate"),
    },
    {
      id: "rewrite",
      label: "Rewrite",
      icon: PenTool,
      isActive: isRewriteActive,
      onClick: () => onModeChange("rewrite"),
    },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoSection}>
        <img className={styles.logo} src={Logo} alt="Transrewrt logo" />
        <span className={styles.appName}>Transrewrt</span>
      </div>

      <nav className={styles.navSection} role="navigation" aria-label="Main">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              className={mergeClasses(
                styles.navItem,
                item.isActive && styles.navItemActive,
              )}
              onClick={item.onClick}
              aria-label={item.label}
              aria-current={item.isActive ? "page" : undefined}
            >
              <span className={styles.navItemIcon}>
                <IconComponent
                  size={iconSize}
                  strokeWidth={item.isActive ? 2.2 : 1.6}
                />
              </span>
              <span className={styles.navItemLabel}>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className={styles.footerSection}>
        <button
          type="button"
          className={mergeClasses(
            styles.navItem,
            isSettingsActive && styles.navItemActive,
          )}
          onClick={onSettingsClick}
          aria-label="Settings"
          aria-current={isSettingsActive ? "page" : undefined}
        >
          <span className={styles.navItemIcon}>
            <Settings
              size={iconSize}
              strokeWidth={isSettingsActive ? 2.2 : 1.6}
            />
          </span>
          <span className={styles.navItemLabel}>Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
