import { lazy, Suspense, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { Languages, PenTool, WandSparkles, Activity, History, Loader2 } from "lucide-react";
import ModelOrPresetPicker from "./ModelOrPresetPicker";
import HeaderLanguageSelector from "./HeaderLanguageSelector";
import LayoutToggle, { type LayoutMode } from "./workspace/LayoutToggle";
import type { Preset } from "@/utils/presets/presetsTypes";

const SettingsPanel = lazy(() => import("./SettingsPanel"));
const DashboardPage = lazy(() => import("./DashboardPage"));
const HistoryPage = lazy(() => import("./HistoryPage"));

function LoadingFallback({ label }) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      {label && <span className="ms-2 text-sm text-muted-foreground">{label}</span>}
    </div>
  );
}

function AppHeader({
  icon,
  title,
  right,
  titleTrailing,
  /** Below md: put `right` (model + layout controls) on a second row; Dashboard/History stay one row. */
  stackRightBelowMd = false,
}: {
  icon: ReactNode;
  title: ReactNode;
  right?: ReactNode;
  /** Shown after title on small screens only (e.g. language control in workspace). */
  titleTrailing?: ReactNode;
  stackRightBelowMd?: boolean;
}) {
  return (
    <header
      className={cn(
        "w-full min-w-0 shrink-0 border-b border-border bg-card px-4 py-2.5 ps-16 md:px-6 md:py-3 md:ps-6",
        stackRightBelowMd
          ? "flex min-h-0 flex-col gap-2 md:min-h-14 md:flex-row md:flex-nowrap md:items-center md:gap-x-4 md:gap-y-0"
          : "flex min-h-14 flex-row flex-nowrap items-center gap-x-2 md:gap-x-4",
      )}
    >
      <div className="flex min-h-0 min-w-0 max-w-full flex-1 items-center gap-3">
        {icon}
        <h1 className="min-w-0 flex-1 truncate text-lg font-semibold md:flex-initial">{title}</h1>
        {titleTrailing ? (
          <div className="ms-auto shrink-0 md:hidden">{titleTrailing}</div>
        ) : null}
      </div>
      {right && (
        <div
          className={cn(
            "flex min-w-0 shrink-0 flex-nowrap items-center justify-end gap-x-2 md:gap-x-8",
            stackRightBelowMd && "w-full min-w-0 md:w-auto",
          )}
        >
          {right}
        </div>
      )}
    </header>
  );
}

function WorkspaceGrid({ leftPanel, rightPanel, workspaceTopBar, layoutMode, actionBar }: {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  workspaceTopBar: ReactNode;
  layoutMode: LayoutMode;
  actionBar?: ReactNode;
}) {
  const isSplit = layoutMode === "split";
  return (
    <div className="flex flex-1 min-h-0 flex-col overflow-hidden">
      <div className="flex flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        <div className="flex flex-1 min-h-0 flex-col gap-4 p-4 md:p-6 min-w-0 w-full">
          {workspaceTopBar}
          <div
            className={cn(
              "transition-all duration-300",
              isSplit
                ? "grid flex-1 grid-cols-1 gap-4 min-h-0 min-w-0 md:grid-cols-2 md:items-stretch md:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]"
                : "flex min-h-0 flex-1 flex-col gap-4 min-w-0",
            )}
          >
            <div
              className={cn(
                "flex min-w-0 flex-col",
                isSplit ? "h-full min-h-[300px] md:min-h-0" : "min-h-0 flex-1",
              )}
            >
              {leftPanel}
            </div>
            <div
              className={cn(
                "flex min-w-0 flex-col",
                isSplit ? "h-full min-h-[300px] md:min-h-0" : "min-h-0 flex-1",
              )}
            >
              {rightPanel}
            </div>
          </div>
        </div>
      </div>
      {actionBar}
    </div>
  );
}

const MainContent = ({
  view,
  currentMode,
  models,
  activeModel,
  onModelChange,
  onOpenSettingsModels,
  onRemoveModel,
  experienceMode = "easy",
  easyProvider = "openrouter",
  presets = [],
  selectedPresetId,
  onPresetChange,
  ollamaModels = [],
  easyOllamaModel,
  onEasyOllamaModelChange,
  onOpenSettingsGeneral,
  presetUiLocale,
  presetSourceLocale = "en-GB",
  leftPanel,
  rightPanel,
  workspaceTopBar,
  actionBar,
  openSettingsToTab,
  onOpenSettingsToTabConsumed,
  layoutMode,
  onLayoutChange,
}: {
  view: string;
  currentMode?: string;
  models?: string[];
  activeModel?: string;
  onModelChange?: (model: string) => void;
  onOpenSettingsModels?: () => void;
  onRemoveModel?: (model: string) => void;
  experienceMode?: "easy" | "advanced";
  easyProvider?: string;
  presets?: Preset[];
  selectedPresetId?: string | null;
  onPresetChange?: (presetId: string) => void;
  ollamaModels?: string[];
  easyOllamaModel?: string | null;
  onEasyOllamaModelChange?: (modelId: string) => void;
  onOpenSettingsGeneral?: () => void;
  /** UI locale for presets catalog labels (falls back to i18n.language in PresetSelector). */
  presetUiLocale?: string;
  /** Locale of canonical preset `name` / `description` in the JSON catalog. */
  presetSourceLocale?: string;
  leftPanel?: ReactNode;
  rightPanel?: ReactNode;
  workspaceTopBar?: ReactNode;
  actionBar?: ReactNode;
  openSettingsToTab?: string;
  onOpenSettingsToTabConsumed?: () => void;
  layoutMode: LayoutMode;
  onLayoutChange: (mode: LayoutMode) => void;
}) => {
  const { t } = useTranslation();

  if (view === "settings") {
    return (
      <main className="flex min-h-0 flex-1 flex-col min-w-0 overflow-hidden bg-background" data-view="settings">
        <Suspense fallback={<LoadingFallback label={t("Loading settings…")} />}>
          <SettingsPanel
            openToTab={openSettingsToTab}
            onOpenToTabConsumed={onOpenSettingsToTabConsumed}
          />
        </Suspense>
      </main>
    );
  }

  if (view === "dashboard") {
    return (
      <main className="flex min-h-0 flex-1 flex-col min-w-0 overflow-hidden bg-background">
        <AppHeader
          icon={<Activity className="h-5 w-5 text-emerald-500" strokeWidth={1.6} />}
          title={t("Dashboard")}
          right={<HeaderLanguageSelector compact />}
        />
        <div className="flex flex-1 min-h-0 min-w-0 overflow-auto p-4 md:p-6">
          <div className="flex w-full min-w-0 flex-1 flex-col min-h-0">
            <Suspense fallback={<LoadingFallback label={t("Loading dashboard…")} />}>
              <DashboardPage />
            </Suspense>
          </div>
        </div>
      </main>
    );
  }

  if (view === "history") {
    return (
      <main className="flex min-h-0 flex-1 flex-col min-w-0 overflow-hidden bg-background">
        <AppHeader
          icon={<History className="h-5 w-5 text-orange-400" strokeWidth={1.6} />}
          title={t("History")}
          right={<HeaderLanguageSelector compact />}
        />
        <div className="flex flex-1 min-h-0 min-w-0 overflow-auto p-4 md:p-6">
          <div className="flex w-full min-w-0 flex-1 flex-col min-h-0">
            <Suspense fallback={<LoadingFallback label={t("Loading…")} />}>
              <HistoryPage />
            </Suspense>
          </div>
        </div>
      </main>
    );
  }

  const modeIcon = {
    translate: <Languages className="h-5 w-5 text-emerald-500" strokeWidth={1.6} />,
    rewrite: <PenTool className="h-5 w-5 text-blue-400" strokeWidth={1.6} />,
    transform: <WandSparkles className="h-5 w-5 text-purple-400" strokeWidth={1.6} />,
  }[currentMode];

  const modeTitle = {
    translate: t("Translate"),
    rewrite: t("Rewrite"),
    transform: t("Transform"),
  }[currentMode] ?? currentMode;

  return (
    <main className="flex min-h-0 flex-1 flex-col min-w-0 overflow-hidden bg-background" data-mode={currentMode}>
      <AppHeader
        icon={modeIcon}
        title={modeTitle}
        titleTrailing={<HeaderLanguageSelector compact />}
        stackRightBelowMd
        right={
          <>
            <ModelOrPresetPicker
              experienceMode={experienceMode}
              easyProvider={easyProvider}
              models={models}
              currentModel={activeModel}
              onModelChange={onModelChange}
              onOpenSettingsModels={onOpenSettingsModels}
              onRemoveModel={onRemoveModel}
              presets={presets}
              selectedPresetId={selectedPresetId}
              onPresetChange={onPresetChange}
              ollamaModels={ollamaModels}
              easyOllamaModel={easyOllamaModel}
              onEasyOllamaModelChange={onEasyOllamaModelChange}
              onOpenSettingsGeneral={onOpenSettingsGeneral}
              presetUiLocale={presetUiLocale}
              presetSourceLocale={presetSourceLocale}
            />
            <div className="hidden md:block">
              <HeaderLanguageSelector compact />
            </div>
            <LayoutToggle
              layoutMode={layoutMode}
              onLayoutChange={onLayoutChange}
              currentMode={currentMode}
            />
          </>
        }
      />
      <WorkspaceGrid
        leftPanel={leftPanel}
        rightPanel={rightPanel}
        workspaceTopBar={workspaceTopBar}
        actionBar={actionBar}
        layoutMode={layoutMode}
      />
    </main>
  );
};

export default MainContent;
