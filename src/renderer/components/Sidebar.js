import { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, mergeClasses } from "@fluentui/react-components";
import PropTypes from "prop-types";
import {
  Popover,
  PopoverTrigger,
  PopoverSurface,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import {
  Languages,
  PenTool,
  WandSparkles,
  BarChart3,
  History,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
  LogOut,
  KeyRound,
  User,
  Users,
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
    textAlign: "start",
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
  userBlock: {
    marginTop: "8px",
    paddingTop: "8px",
  },
  userTrigger: {
    width: "100%",
    minHeight: "40px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    color: "#e0e0e0",
    padding: "8px 12px",
    fontSize: "13px",
    textAlign: "start",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.06)",
    },
  },
  userTriggerCollapsed: {
    justifyContent: "center",
    padding: "8px",
  },
  userIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "#e0e0e0",
  },
  userLabel: {
    flex: 1,
    minWidth: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "14px",
    marginInlineStart: "4px",
    fontWeight: 700,
  },
  userLabelHidden: {
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
  menuIcon: {
    display: "inline-flex",
    marginInlineEnd: "8px",
    verticalAlign: "middle",
  },
});

const Sidebar = ({
  currentMode,
  currentView,
  onModeChange,
  onDashboardClick,
  onHistoryClick,
  onSettingsClick,
  showExecutionHistory = true,
  currentUser,
  onSignOut,
  onChangePassword,
  onOpenSettingsUsers,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const isSettingsActive = currentView === "settings";
  const isDashboardActive = currentView === "dashboard";
  const isHistoryActive = currentView === "history";
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
      icon: WandSparkles,
      isActive: isTransformActive,
      onClick: () => onModeChange("transform"),
    },
  ];

  return (
    <aside
      className={mergeClasses(styles.sidebar, collapsed && styles.sidebarCollapsed)}
      aria-expanded={!collapsed}
      data-testid="app-sidebar"
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
        data-testid="main-nav"
      >
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              data-testid={`nav-${item.id}`}
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
          data-testid="nav-dashboard"
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
        {showExecutionHistory && onHistoryClick && (
          <button
            type="button"
            data-testid="nav-history"
            className={mergeClasses(
              styles.navItem,
              isHistoryActive && styles.navItemActive,
              collapsed && styles.navItemCollapsed,
            )}
            onClick={() => onHistoryClick()}
            aria-label={t("History")}
            aria-current={isHistoryActive ? "page" : undefined}
            title={t("History")}
          >
            <span className={styles.navItemIcon}>
              <History size={iconSize} strokeWidth={isHistoryActive ? 2.2 : 1.6} />
            </span>
            <span
              className={mergeClasses(
                styles.navItemLabel,
                collapsed && styles.navItemLabelHidden,
              )}
            >
              {t("History")}
            </span>
          </button>
        )}
        <button
          type="button"
          data-testid="nav-settings"
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
        {currentUser && (
          <div className={styles.userBlock}>
            {onSignOut || onChangePassword || (currentUser.role === "admin" && onOpenSettingsUsers) ? (
              <Popover
                open={userMenuOpen}
                onOpenChange={(_, data) => setUserMenuOpen(data.open)}
                positioning={{ position: "top", align: "start", onPositioningEnd: () => {} }}
              >
                <PopoverTrigger disableButtonEnhancement>
                  <button
                    type="button"
                    className={mergeClasses(
                      styles.userTrigger,
                      collapsed && styles.userTriggerCollapsed,
                    )}
                    aria-label={t("User menu")}
                    title={currentUser.username}
                  >
                    <span className={styles.userIcon}>
                      <User size={20} />
                    </span>
                    <span
                      className={mergeClasses(
                        styles.userLabel,
                        collapsed && styles.userLabelHidden,
                      )}
                    >
                      {currentUser.username}
                    </span>
                  </button>
                </PopoverTrigger>
                <PopoverSurface>
                  <MenuList>
                    {currentUser.role === "admin" && onOpenSettingsUsers && (
                      <MenuItem
                        onClick={() => {
                          setUserMenuOpen(false);
                          onOpenSettingsUsers();
                        }}
                      >
                        <Users size={16} className={styles.menuIcon} />
                        {t("User management")}
                      </MenuItem>
                    )}
                    {onChangePassword && (
                      <MenuItem
                        onClick={() => {
                          setUserMenuOpen(false);
                          onChangePassword();
                        }}
                      >
                        <KeyRound size={16} className={styles.menuIcon} />
                        {t("Change password")}
                      </MenuItem>
                    )}
                    {onSignOut && (
                      <MenuItem
                        onClick={() => {
                          setUserMenuOpen(false);
                          onSignOut();
                        }}
                      >
                        <LogOut size={16} className={styles.menuIcon} />
                        {t("Sign out")}
                      </MenuItem>
                    )}
                  </MenuList>
                </PopoverSurface>
              </Popover>
            ) : (
              <div
                className={mergeClasses(
                  styles.userTrigger,
                  collapsed && styles.userTriggerCollapsed,
                )}
                title={currentUser.username}
              >
                <span className={styles.userIcon}>
                  <User size={20} />
                </span>
                <span
                  className={mergeClasses(
                    styles.userLabel,
                    collapsed && styles.userLabelHidden,
                  )}
                >
                  {currentUser.username}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  currentMode: PropTypes.string.isRequired,
  currentView: PropTypes.string.isRequired,
  onModeChange: PropTypes.func.isRequired,
  onDashboardClick: PropTypes.func.isRequired,
  onHistoryClick: PropTypes.func,
  onSettingsClick: PropTypes.func.isRequired,
  showExecutionHistory: PropTypes.bool,
  currentUser: PropTypes.object,
  onSignOut: PropTypes.func,
  onChangePassword: PropTypes.func,
  onOpenSettingsUsers: PropTypes.func,
};

export default Sidebar;
