import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import {
  Languages,
  PenTool,
  Sparkles,
  BarChart3,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import Logo from "../../../images/transrewrt_logo.png";

const SIDEBAR_WIDTH_EXPANDED = 190;
const SIDEBAR_WIDTH_COLLAPSED = 72;

const useStyles = makeStyles({
  sidebar: {
    width: `${SIDEBAR_WIDTH_EXPANDED}px`,
    minWidth: `${SIDEBAR_WIDTH_COLLAPSED}px`,
    height: "100%",
    backgroundColor: "#12141d",
    borderRight: "1px solid rgba(85, 66, 66, 0.08)",
    display: "flex",
    flexDirection: "column",
    WebkitAppRegion: "drag",
    transition: "width 0.2s ease",
  },
  sidebarCollapsed: {
    width: `${SIDEBAR_WIDTH_COLLAPSED}px`,
  },
  logoSection: {
    padding: "12px 14px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: "8px",
    WebkitAppRegion: "no-drag",
  },
  logoRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "12px",
    minHeight: "36px",
  },
  logoBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    flex: 1,
    minWidth: 0,
  },
  logoSectionCollapsed: {
    alignItems: "center",
    padding: "12px 8px",
    gap: "8px",
  },
  logo: {
    height: "28px",
    width: "auto",
    objectFit: "contain",
    flexShrink: 0,
  },
  logoCollapsed: {
    height: "24px",
  },
  appName: {
    fontSize: "18px",
    fontWeight: 700,
    fontFamily:
      "'Segoe UI', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: "-0.5px",
    display: "block",
    color: "transparent",
    background:
      "linear-gradient(90deg, #84cc16 0%, #a3e635 40%, #fb923c 60%, #f97316 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  collapseButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px",
    margin: 0,
    border: "none",
    borderRadius: "6px",
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.4)",
    cursor: "pointer",
    flexShrink: 0,
    minWidth: "28px",
    transition: "color 0.15s ease, background-color 0.15s ease",
    ":hover": {
      color: "rgba(255, 255, 255, 0.7)",
      backgroundColor: "rgba(255, 255, 255, 0.06)",
    },
  },
  collapseButtonCollapsed: {
    padding: "4px",
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
  navSectionCollapsed: {
    padding: "8px 6px",
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
  navItemCollapsed: {
    justifyContent: "center",
    padding: "12px",
  },
  navItemLabelHidden: {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: 0,
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    whiteSpace: "nowrap",
    border: 0,
  },
  navItemActive: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    color: "#ffffff",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: "4px",
    WebkitAppRegion: "no-drag",
  },
  footerSectionCollapsed: {
    padding: "8px 6px",
  },
});

const Sidebar = ({
  currentMode,
  currentView,
  onModeChange,
  onDashboardClick,
  onSettingsClick,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const isSettingsActive = currentView === "settings";
  const isDashboardActive = currentView === "dashboard";
  const isTranslateActive =
    currentMode === "translate" && currentView === "workspace";
  const isRewriteActive =
    currentMode === "rewrite" && currentView === "workspace";
  const isTransformActive =
    currentMode === "transform" && currentView === "workspace";

  const iconSize = 20;

  const navItems = [
    {
      id: "translate",
      label: t("Translate"),
      icon: Languages,
      isActive: isTranslateActive,
      onClick: () => onModeChange("translate"),
    },
    {
      id: "rewrite",
      label: t("Rewrite"),
      icon: PenTool,
      isActive: isRewriteActive,
      onClick: () => onModeChange("rewrite"),
    },
    {
      id: "transform",
      label: t("Transform"),
      icon: Sparkles,
      isActive: isTransformActive,
      onClick: () => onModeChange("transform"),
    },
  ];

  return (
    <aside
      className={mergeClasses(styles.sidebar, collapsed && styles.sidebarCollapsed)}
      aria-expanded={!collapsed}
    >
      <div
        className={mergeClasses(
          styles.logoSection,
          collapsed && styles.logoSectionCollapsed,
        )}
      >
        {collapsed ? (
          <>
            <button
              type="button"
              className={mergeClasses(
                styles.collapseButton,
                styles.collapseButtonCollapsed,
              )}
              onClick={() => setCollapsed((c) => !c)}
              aria-label={t("Expand sidebar")}
              title={t("Expand sidebar")}
            >
              <PanelLeftOpen size={18} strokeWidth={1.6} />
            </button>
            <img
              className={mergeClasses(styles.logo, styles.logoCollapsed)}
              src={Logo}
              alt={t("Transrewrt logo")}
            />
          </>
        ) : (
          <div className={styles.logoRow}>
            <div className={styles.logoBlock}>
              <img
                className={styles.logo}
                src={Logo}
                alt={t("Transrewrt logo")}
              />
              <span className={styles.appName}>Transrewrt</span>
            </div>
            <button
              type="button"
              className={styles.collapseButton}
              onClick={() => setCollapsed((c) => !c)}
              aria-label={t("Collapse sidebar")}
              title={t("Collapse sidebar")}
            >
              <PanelLeftClose size={18} strokeWidth={1.6} />
            </button>
          </div>
        )}
      </div>

      <nav
        className={mergeClasses(
          styles.navSection,
          collapsed && styles.navSectionCollapsed,
        )}
        role="navigation"
        aria-label="Main"
      >
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              className={mergeClasses(
                styles.navItem,
                item.isActive && styles.navItemActive,
                collapsed && styles.navItemCollapsed,
              )}
              onClick={item.onClick}
              aria-label={item.label}
              aria-current={item.isActive ? "page" : undefined}
              title={item.label}
            >
              <span className={styles.navItemIcon}>
                <IconComponent
                  size={iconSize}
                  strokeWidth={item.isActive ? 2.2 : 1.6}
                />
              </span>
              <span
                className={mergeClasses(
                  styles.navItemLabel,
                  collapsed && styles.navItemLabelHidden,
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div
        className={mergeClasses(
          styles.footerSection,
          collapsed && styles.footerSectionCollapsed,
        )}
      >
        <button
          type="button"
          className={mergeClasses(
            styles.navItem,
            isDashboardActive && styles.navItemActive,
            collapsed && styles.navItemCollapsed,
          )}
          onClick={() => onDashboardClick?.()}
          aria-label={t("Dashboard")}
          aria-current={isDashboardActive ? "page" : undefined}
          title={t("Dashboard")}
        >
          <span className={styles.navItemIcon}>
            <BarChart3
              size={iconSize}
              strokeWidth={isDashboardActive ? 2.2 : 1.6}
            />
          </span>
          <span
            className={mergeClasses(
              styles.navItemLabel,
              collapsed && styles.navItemLabelHidden,
            )}
          >
            {t("Dashboard")}
          </span>
        </button>
        <button
          type="button"
          className={mergeClasses(
            styles.navItem,
            isSettingsActive && styles.navItemActive,
            collapsed && styles.navItemCollapsed,
          )}
          onClick={onSettingsClick}
          aria-label={t("Settings")}
          aria-current={isSettingsActive ? "page" : undefined}
          title={t("Settings")}
        >
          <span className={styles.navItemIcon}>
            <Settings
              size={iconSize}
              strokeWidth={isSettingsActive ? 2.2 : 1.6}
            />
          </span>
          <span
            className={mergeClasses(
              styles.navItemLabel,
              collapsed && styles.navItemLabelHidden,
            )}
          >
            {t("Settings")}
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
