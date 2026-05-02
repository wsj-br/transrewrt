import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Languages,
  PenTool,
  WandSparkles,
  Activity,
  History,
  Settings,
  ChevronLeft,
  Menu,
  User,
  LogOut,
  KeyRound,
  Users,
  PanelLeftOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "../../../images/transrewrt_logo.png";
import { workspaceActionBarClassName } from "./workspace/workspaceLayoutClasses";

const SIDEBAR_COLLAPSED_STORAGE_KEY = "transrewrt-sidebar-collapsed";

function readStoredSidebarCollapsed(): boolean {
  try {
    return localStorage.getItem(SIDEBAR_COLLAPSED_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function persistSidebarCollapsed(collapsed: boolean) {
  try {
    localStorage.setItem(SIDEBAR_COLLAPSED_STORAGE_KEY, collapsed ? "true" : "false");
  } catch {
    /* ignore quota / private mode */
  }
}

interface NavItemDef {
  id: string;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
  testId?: string;
}

interface SidebarProps {
  currentMode: string;
  currentView: string;
  onModeChange: (mode: string) => void;
  onDashboardClick: () => void;
  onHistoryClick?: () => void;
  onSettingsClick: () => void;
  showExecutionHistory?: boolean;
  currentUser?: { username: string; role?: string } | null;
  onSignOut?: () => void;
  onChangePassword?: () => void;
  onOpenSettingsUsers?: () => void;
  /** When true (e.g. stacked workspace layout), sidebar stays icon-only without changing stored collapse preference. */
  forceCollapsed?: boolean;
}

function NavButton({
  item,
  collapsed,
  onAfterNavClick,
}: {
  item: NavItemDef;
  collapsed: boolean;
  onAfterNavClick?: () => void;
}) {
  const handleClick = () => {
    item.onClick();
    onAfterNavClick?.();
  };
  const btn = (
    <button
      type="button"
      data-testid={item.testId ?? `nav-${item.id}`}
      aria-label={item.label}
      aria-current={item.isActive ? "page" : undefined}
      onClick={handleClick}
      className={cn(
        "flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2.5 text-start text-sm font-medium transition-colors electron-no-drag",
        item.isActive
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        collapsed && "justify-center px-2",
      )}
    >
      <item.icon
        className="h-5 w-5 shrink-0"
        strokeWidth={item.isActive ? 2.2 : 1.6}
      />
      {!collapsed && <span className="flex-1 text-start">{item.label}</span>}
    </button>
  );

  if (collapsed) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>{btn}</TooltipTrigger>
        <TooltipContent side="right" className="font-medium">
          {item.label}
        </TooltipContent>
      </Tooltip>
    );
  }
  return btn;
}

function SidebarInner({
  collapsed,
  onToggleCollapse,
  onAfterNavClick,
  ...props
}: SidebarProps & {
  collapsed: boolean;
  onToggleCollapse?: () => void;
  /** Mobile sheet: close after the user picks a destination or user-menu action. */
  onAfterNavClick?: () => void;
}) {
  const { t } = useTranslation();

  const isTranslateActive =
    props.currentMode === "translate" && props.currentView === "workspace";
  const isRewriteActive =
    props.currentMode === "rewrite" && props.currentView === "workspace";
  const isTransformActive =
    props.currentMode === "transform" && props.currentView === "workspace";
  const isDashboardActive = props.currentView === "dashboard";
  const isHistoryActive = props.currentView === "history";
  const isSettingsActive = props.currentView === "settings";

  const mainNavItems: NavItemDef[] = [
    {
      id: "translate",
      label: t("Translate"),
      icon: Languages,
      isActive: isTranslateActive,
      onClick: () => props.onModeChange("translate"),
    },
    {
      id: "rewrite",
      label: t("Rewrite"),
      icon: PenTool,
      isActive: isRewriteActive,
      onClick: () => props.onModeChange("rewrite"),
    },
    {
      id: "transform",
      label: t("Transform"),
      icon: WandSparkles,
      isActive: isTransformActive,
      onClick: () => props.onModeChange("transform"),
    },
  ];

  const bottomNavItems: NavItemDef[] = [
    {
      id: "dashboard",
      label: t("Dashboard"),
      icon: Activity,
      isActive: isDashboardActive,
      onClick: () => props.onDashboardClick(),
    },
    ...(props.showExecutionHistory && props.onHistoryClick
      ? [
          {
            id: "history",
            label: t("History"),
            icon: History,
            isActive: isHistoryActive,
            onClick: () => props.onHistoryClick!(),
          },
        ]
      : []),
    {
      id: "settings",
      label: t("Settings"),
      icon: Settings,
      isActive: isSettingsActive,
      onClick: props.onSettingsClick,
    },
  ];

  const hasUserMenu =
    props.currentUser &&
    (props.onSignOut ||
      props.onChangePassword ||
      (props.currentUser.role === "admin" && props.onOpenSettingsUsers));

  return (
    <TooltipProvider>
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div
          className={cn(
            "electron-drag",
            collapsed
              ? "flex justify-center px-2 py-3"
              : "flex items-start justify-between gap-3 px-3.5 py-3",
          )}
        >
          <div className={cn("flex items-center", collapsed ? "justify-center" : "min-h-9 flex-1")}>
            {onToggleCollapse ? (
              <button
                type="button"
                className={cn(
                  "electron-no-drag rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  collapsed
                    ? "flex items-center justify-center p-1"
                    : "flex min-w-0 flex-1 flex-col items-center gap-1",
                )}
                onClick={onToggleCollapse}
                aria-label={collapsed ? t("Expand sidebar") : t("Collapse sidebar")}
                title={collapsed ? t("Expand sidebar") : t("Collapse sidebar")}
              >
                <img
                  src={Logo}
                  alt={t("Transrewrt logo")}
                  className={cn(
                    "w-auto shrink-0 object-contain",
                    collapsed ? "h-6" : "h-7",
                  )}
                />
                {!collapsed && <span className="app-name-gradient sidebar-app-name">Transrewrt</span>}
              </button>
            ) : (
              <div className="flex min-w-0 flex-1 flex-col items-center gap-1 electron-no-drag">
                <img
                  src={Logo}
                  alt={t("Transrewrt logo")}
                  className="h-7 w-auto shrink-0 object-contain"
                />
                {!collapsed && <span className="app-name-gradient sidebar-app-name">Transrewrt</span>}
              </div>
            )}
          </div>
          {!collapsed && onToggleCollapse && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground electron-no-drag"
              onClick={onToggleCollapse}
              aria-label={t("Collapse sidebar")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Main nav */}
        <nav
          className="flex-1 space-y-1 p-3 electron-no-drag"
          role="navigation"
          aria-label="Main"
          data-testid="main-nav"
        >
          {mainNavItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              collapsed={collapsed}
              onAfterNavClick={onAfterNavClick}
            />
          ))}
        </nav>

        {/* Bottom nav */}
        <nav
          className="mt-auto space-y-1 p-3 electron-no-drag"
          aria-label="Secondary"
        >
          {bottomNavItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              collapsed={collapsed}
              onAfterNavClick={onAfterNavClick}
            />
          ))}

          {/* User block */}
          {props.currentUser && hasUserMenu ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  aria-label={t("User menu")}
                  title={props.currentUser.username}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-muted-foreground hover:bg-accent hover:text-accent-foreground mt-1 electron-no-drag",
                    collapsed && "justify-center px-2",
                  )}
                >
                  <User className="h-5 w-5 shrink-0" strokeWidth={1.6} />
                  {!collapsed && (
                    <span className="truncate">{props.currentUser.username}</span>
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="start" className="w-48">
                {props.currentUser.role === "admin" && props.onOpenSettingsUsers && (
                  <DropdownMenuItem
                    onClick={() => {
                      props.onOpenSettingsUsers?.();
                      onAfterNavClick?.();
                    }}
                  >
                    <Users className="me-2 h-4 w-4" />
                    {t("User management")}
                  </DropdownMenuItem>
                )}
                {props.onChangePassword && (
                  <DropdownMenuItem
                    onClick={() => {
                      props.onChangePassword?.();
                      onAfterNavClick?.();
                    }}
                  >
                    <KeyRound className="me-2 h-4 w-4" />
                    {t("Change password")}
                  </DropdownMenuItem>
                )}
                {(props.currentUser.role === "admin" && props.onOpenSettingsUsers) ||
                props.onChangePassword ? (
                  <DropdownMenuSeparator />
                ) : null}
                {props.onSignOut && (
                  <DropdownMenuItem
                    onClick={() => {
                      props.onSignOut?.();
                      onAfterNavClick?.();
                    }}
                  >
                    <LogOut className="me-2 h-4 w-4" />
                    {t("Sign out")}
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : props.currentUser ? (
            <div
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground mt-1",
                collapsed && "justify-center px-2",
              )}
              title={props.currentUser.username}
            >
              <User className="h-5 w-5 shrink-0" strokeWidth={1.6} />
              {!collapsed && (
                <span className="truncate">{props.currentUser.username}</span>
              )}
            </div>
          ) : null}
        </nav>

        {/* Collapsed expand toggle — height matches workspace action bar so dividers align */}
        {collapsed && onToggleCollapse && (
          <div
            className={cn(
              workspaceActionBarClassName,
              "justify-center gap-0 px-0 md:px-0 electron-no-drag",
            )}
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground"
              onClick={onToggleCollapse}
              aria-label={t("Expand sidebar")}
            >
              <PanelLeftOpen className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}

export default function Sidebar(props: SidebarProps) {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(readStoredSidebarCollapsed);
  const [mobileOpen, setMobileOpen] = useState(false);
  const effectiveCollapsed = props.forceCollapsed || collapsed;

  return (
    <>
      {/* Mobile hamburger — fixed, hidden on md+ */}
      <Button
        variant="ghost"
        size="icon-sm"
        className="fixed start-4 top-2 z-50 md:hidden electron-no-drag"
        onClick={() => setMobileOpen(true)}
        aria-label={t("Open menu")}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile Sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-[194px] p-0 bg-card dark:bg-card/80 dark:backdrop-blur-xl dark:border-white/10">
          <SheetTitle className="sr-only">{t("Navigation Menu")}</SheetTitle>
          <SidebarInner
            {...props}
            collapsed={false}
            onAfterNavClick={() => setMobileOpen(false)}
          />
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden md:flex h-full min-h-0 flex-col self-stretch border-e border-border bg-card dark:bg-card/80 dark:backdrop-blur-xl dark:border-white/10 transition-all duration-300 shrink-0 electron-drag",
          effectiveCollapsed ? "w-16" : "w-[194px]",
        )}
        aria-expanded={!effectiveCollapsed}
        data-testid="app-sidebar"
      >
        <SidebarInner
          {...props}
          collapsed={effectiveCollapsed}
          onToggleCollapse={() => {
            setCollapsed((c) => {
              const next = !c;
              persistSidebarCollapsed(next);
              return next;
            });
          }}
        />
      </aside>
    </>
  );
}
