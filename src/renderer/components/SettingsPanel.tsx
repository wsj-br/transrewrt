import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import {
  Sliders,
  Database,
  Globe,
  Key,
  DollarSign,
  Info,
  WandSparkles,
  Users,
  BookOpen,
  Settings as SettingsIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppContext } from "../contexts/AppContext";
import SettingsApiTab from "./SettingsApiTab";
import SettingsGeneralTab from "./SettingsGeneralTab";
import SettingsModelsTab from "./SettingsModelsTab";
import SettingsLanguagesTab from "./SettingsLanguagesTab";
import SettingsCostTrackingTab from "./SettingsCostTrackingTab";
import SettingsTransformPromptsTab from "./SettingsTransformPromptsTab";
import SettingsAboutTab from "./SettingsAboutTab";
import SettingsUsersTab from "./SettingsUsersTab";
import SettingsGlossaryTab from "./SettingsGlossaryTab";
import HeaderLanguageSelector from "./HeaderLanguageSelector";
import ConfirmModal from "./ConfirmModal";
import { FREE_MODEL_ID } from "../constants";
import configManager from "../utils/config/configManager";
import webAPI from "../utils/api/webApiClient";
import {
  canonicalModelIdFromPresetModelId,
  filterEngineFromModelId,
  providerSortKeyFromModelId,
} from "../utils/misc/modelIdUtils";
import { listConfiguredEasyEngines } from "../utils/presets/configuredEasyEngines";
import {
  settingsPanelBody,
  settingsTabButton,
  settingsTabPillActive,
  settingsTabPillIdle,
  settingsTabStrip,
} from "./settings/settingsLayoutClasses";
import {
  isConfirmedFreeModel,
  modelCostSortValue,
} from "../utils/misc/modelPricingUtils";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

/** Below Tailwind `md` (768px): use a compact settings nav instead of horizontal tab strip. */
function useIsBelowMd() {
  const [below, setBelow] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false,
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setBelow(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return below;
}

const SettingsPanel = ({ openToTab, onOpenToTabConsumed }) => {
  const { t } = useTranslation();
  const { settings, allModels, currentUser, setSetting, fetchModels, presetsCatalog, apiKeyStatus } =
    useAppContext();

  const [localSettings, setLocalSettings] = useState({});
  const [activeTab, setActiveTab] = useState(null); // Restored from settings on mount; no tab selected until then to avoid flash

  const [searchTerm, setSearchTerm] = useState("");
  const [filterEngine, setFilterEngine] = useState("");
  const [filterFree, setFilterFree] = useState(false);
  const [expandedProviders, setExpandedProviders] = useState(new Set());
  const [selectedModelIds, setSelectedModelIds] = useState(new Set());
  const [sortBy, setSortBy] = useState("provider-asc");

  const [selectedLanguages, setSelectedLanguages] = useState(new Set());
  const [customLanguage, setCustomLanguage] = useState("");

  const [modelsLoading, setModelsLoading] = useState(false);
  const [modelsError, setModelsError] = useState(null);
  const hasRestoredTabRef = useRef(false); // in web mode, later context updates can overwrite; only restore tab once per mount
  const [costTabActivationCount, setCostTabActivationCount] = useState(0);
  const [showDeselectAllConfirm, setShowDeselectAllConfirm] = useState(false);
  const tabStripRef = useRef(null);
  const tabButtonRefs = useRef(new Map());
  const [tabScroll, setTabScroll] = useState({
    hasOverflow: false,
    canScrollLeft: false,
    canScrollRight: false,
  });
  const TAB_SCROLL_PX = 180;

  const updateTabScrollState = useCallback(() => {
    const el = tabStripRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const hasOverflow = scrollWidth > clientWidth + 1;
    setTabScroll({
      hasOverflow,
      canScrollLeft: hasOverflow && scrollLeft > 0,
      canScrollRight: hasOverflow && scrollLeft < scrollWidth - clientWidth - 1,
    });
  }, []);

  const canAccessApiTab = !isWeb || currentUser?.role === "admin";
  const canAccessUsersTab = isWeb && currentUser?.role === "admin";
  const canAccessCostTab = !isWeb || currentUser?.role === "admin";
  const canConfigBackup = !isWeb || currentUser?.role === "admin";
  const isBelowMd = useIsBelowMd();
  const experienceMode = settings.mode === "advanced" ? "advanced" : "easy";

  const settingsTabs = useMemo(
    () => [
      {
        id: "general",
        icon: <Sliders size={15} />,
        label: t("General Settings"),
        testId: "settings-tab-general",
      },
      ...(experienceMode === "advanced"
        ? [
            {
              id: "models",
              icon: <Database size={15} />,
              label: t("Models"),
              testId: "settings-tab-models",
            },
          ]
        : []),
      { id: "languages", icon: <Globe size={15} />, label: t("Languages") },
      ...(canAccessCostTab
        ? [{ id: "cost", icon: <DollarSign size={15} />, label: t("Cost Tracking") }]
        : []),
      { id: "transform", icon: <WandSparkles size={15} />, label: t("Transform") },
      { id: "glossary", icon: <BookOpen size={15} />, label: t("Glossary") },
      ...(canAccessUsersTab
        ? [{ id: "users", icon: <Users size={15} />, label: t("Users") }]
        : []),
      ...(canAccessApiTab
        ? [{ id: "api", icon: <Key size={15} />, label: t("API Config") }]
        : []),
      { id: "about", icon: <Info size={15} />, label: t("About") },
    ],
    [t, canAccessCostTab, canAccessUsersTab, canAccessApiTab, experienceMode],
  );

  const selectedTabMeta = useMemo(
    () => settingsTabs.find((tab) => tab.id === (activeTab ?? "general")),
    [settingsTabs, activeTab],
  );

  useEffect(() => {
    const el = tabStripRef.current;
    if (!el) return;
    updateTabScrollState();
    const ro = new ResizeObserver(updateTabScrollState);
    ro.observe(el);
    el.addEventListener("scroll", updateTabScrollState);
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", updateTabScrollState);
    };
  }, [updateTabScrollState, activeTab]);

  /** Wide layout: keep the active tab pill fully visible inside the horizontal strip. */
  useEffect(() => {
    if (isBelowMd || activeTab == null) return;
    const btn = tabButtonRefs.current.get(activeTab);
    const strip = tabStripRef.current;
    if (!btn || !strip) return;
    const id = requestAnimationFrame(() => {
      btn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    });
    return () => cancelAnimationFrame(id);
  }, [activeTab, isBelowMd, settingsTabs]);

  const scrollTabs = useCallback((direction) => {
    const el = tabStripRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * TAB_SCROLL_PX, behavior: "smooth" });
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      setLocalSettings({ ...settings });
      const modelsWithFree = new Set([
        FREE_MODEL_ID,
        ...(settings.available_models || []),
      ]);
      setSelectedModelIds(modelsWithFree);
      setSelectedLanguages(new Set(settings.top_languages || []));
      const normalizeTab = (tab) => {
        const exp = settings.mode === "advanced" ? "advanced" : "easy";
        if (tab === "auth") return canAccessUsersTab ? "users" : "general";
        if (tab === "api" && !canAccessApiTab) return "general";
        if (tab === "users" && !canAccessUsersTab) return "general";
        if (tab === "cost" && !canAccessCostTab) return "general";
        if (tab === "models" && exp !== "advanced") return "general";
        return tab || "general";
      };
      // When openToTab is set (e.g. sidebar "User management"), always switch to that tab
      // so it works even if Settings is already open on another tab.
      if (openToTab) {
        hasRestoredTabRef.current = true;
        const tab = normalizeTab(openToTab);
        setActiveTab(tab);
        if (configManager.get("settings_active_tab") !== tab) {
          setSetting("settings_active_tab", tab);
        }
        onOpenToTabConsumed?.();
      } else if (!hasRestoredTabRef.current) {
        hasRestoredTabRef.current = true;
        let tab =
          configManager.get("settings_active_tab") ||
          settings.settings_active_tab ||
          "general";
        tab = normalizeTab(tab);
        setActiveTab(tab);
        if (configManager.get("settings_active_tab") !== tab) {
          setSetting("settings_active_tab", tab);
        }
      }
    });
  }, [settings, openToTab, onOpenToTabConsumed, canAccessApiTab, canAccessUsersTab, canAccessCostTab, setSetting]);

  useEffect(() => {
    if ((activeTab === "users" && !canAccessUsersTab) || (activeTab === "api" && !canAccessApiTab)) {
      queueMicrotask(() => {
        setActiveTab("general");
        setSetting("settings_active_tab", "general");
      });
    }
  }, [activeTab, canAccessUsersTab, canAccessApiTab, setSetting]);

  useEffect(() => {
    if (experienceMode === "easy" && activeTab === "models") {
      queueMicrotask(() => {
        setActiveTab("general");
        setSetting("settings_active_tab", "general");
      });
    }
  }, [experienceMode, activeTab, setSetting]);

  useEffect(() => {
    if (allModels.length === 0) {
      queueMicrotask(() => setModelsLoading(true));
      fetchModels()
        .then(() => setModelsLoading(false))
        .catch((err) => {
          setModelsError(err.message || "Failed to load models");
          setModelsLoading(false);
        });
    }
  }, [allModels.length, fetchModels]);

  const handleSettingChange = (key, value) => {
    setLocalSettings((prev) => ({ ...prev, [key]: value }));
    setSetting(key, value);
  };

  const handleTestApi = async ({
    provider,
    overrideValue,
    overrideUrl,
    overrideName,
  }: {
    provider?: string;
    overrideValue?: string;
    overrideUrl?: string;
    overrideName?: string;
  } = {}) => {
    const normalizedProvider = String(provider || "").trim();
    if (!normalizedProvider) {
      return { status: "error", message: "Provider is required." };
    }

    if (isWeb && webAPI.testProviderApiKey) {
      return webAPI.testProviderApiKey(normalizedProvider);
    }

    if (!window.electronAPI?.testProviderApiKey) {
      return { status: "error", message: "API test is not available." };
    }

    try {
      const result = await window.electronAPI.testProviderApiKey({
        provider: normalizedProvider,
        overrideValue,
        overrideUrl,
        overrideName,
      });
      return result;
    } catch (error) {
      return {
        status: "error",
        message: error?.message || "Connection failed",
      };
    }
  };

  /** Engines that have at least one model in the catalog (same source as /api/llm/models / Electron fetch). */
  const enginesWithModels = useMemo(() => {
    const set = new Set();
    for (const m of allModels || []) {
      const eng = filterEngineFromModelId(m.id);
      if (eng) set.add(eng);
    }
    return set;
  }, [allModels]);

  const engineFilterOptions = useMemo(() => {
    const customName = String(localSettings.custom_provider_name || "").trim();
    const customFilterKey = customName.toLowerCase();
    const allRows = [
      { value: "openrouter", label: t("OpenRouter") },
      { value: "openai", label: t("OpenAI") },
      { value: "anthropic", label: t("Anthropic") },
      { value: "google", label: t("Google") },
      { value: "deepseek", label: t("DeepSeek") },
      { value: "cerebras", label: t("Cerebras") },
      { value: "groq", label: t("Groq") },
      { value: "mistralai", label: t("Mistral") },
      { value: "local", label: t("Local LLM") },
      { value: "xai", label: t("xAI") },
      { value: "nvidia", label: t("NVIDIA") },
      { value: "alibaba", label: t("Alibaba Cloud") },
      { value: "apifun", label: t("apikey.fun") },
      ...(customName ? [{ value: customFilterKey, label: customName }] : []),
    ];
    const allLabel = { value: "", label: t("All providers") };
    if (enginesWithModels.size === 0) {
      return [allLabel];
    }
    const rows = allRows
      .filter((row) => enginesWithModels.has(row.value))
      .sort((a, b) =>
        a.label.localeCompare(b.label, undefined, { sensitivity: "base" }),
      );
    return [allLabel, ...rows];
  }, [t, enginesWithModels, localSettings.custom_provider_name]);

  const allowedEngineFilterValues = useMemo(
    () =>
      new Set(
        (engineFilterOptions || []).map((o) => o.value).filter(Boolean),
      ),
    [engineFilterOptions],
  );
  const effectiveFilterEngine =
    filterEngine && allowedEngineFilterValues.has(filterEngine)
      ? filterEngine
      : "";

  const toggleModelSelection = (modelId) => {
    if (modelId === FREE_MODEL_ID && selectedModelIds.has(FREE_MODEL_ID))
      return;
    const newSet = new Set(selectedModelIds);
    if (newSet.has(modelId)) newSet.delete(modelId);
    else newSet.add(modelId);
    setSelectedModelIds(newSet);
    setSetting("available_models", Array.from(newSet));
  };

  const configuredCloudEngines = useMemo(
    () =>
      listConfiguredEasyEngines(settings, apiKeyStatus?.configuredEngines).filter(
        (e) => e !== "local",
      ),
    [settings, apiKeyStatus],
  );

  const loadPresetModels = useCallback(
    (modelIds) => {
      const newSet = new Set(selectedModelIds);
      newSet.add(FREE_MODEL_ID);
      for (const raw of modelIds) {
        const id = canonicalModelIdFromPresetModelId(String(raw).trim());
        if (id) newSet.add(id);
      }
      setSelectedModelIds(newSet);
      setSetting("available_models", Array.from(newSet));
    },
    [selectedModelIds, setSetting],
  );

  const filteredModels = useMemo(() => {
    return allModels.filter((model) => {
      const matchesSearch =
        model.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (model.name &&
          model.name.toLowerCase().includes(searchTerm.toLowerCase()));
      let matchesEngine = true;
      if (effectiveFilterEngine) {
        matchesEngine =
          filterEngineFromModelId(model.id) === effectiveFilterEngine;
      }
      let matchesFree = true;
      if (filterFree) {
        matchesFree = isConfirmedFreeModel(model);
      }
      return matchesSearch && matchesEngine && matchesFree;
    });
  }, [allModels, searchTerm, effectiveFilterEngine, filterFree]);

  const getModelName = (model) => {
    if (model.name) {
      const nameParts = model.name.split(":");
      if (nameParts.length > 1) return nameParts.slice(1).join(":").trim();
    }
    const id = model.id || "";
    const idParts = id.split(":");
    if (idParts.length > 1) return idParts.slice(1).join(":").trim();
    const slashParts = id.split("/");
    if (slashParts.length > 1) return slashParts.slice(1).join("/").trim();
    return model.name || id;
  };

  const groupedModels = useMemo(() => {
    const groups = {};
    filteredModels.forEach((model) => {
      const provider = providerSortKeyFromModelId(model.id);
      if (!groups[provider]) groups[provider] = [];
      groups[provider].push(model);
    });
    return groups;
  }, [filteredModels]);

  const sortedModelsData = useMemo(() => {
    const [sortType, sortDir] = (sortBy || "model-asc").split("-");
    const ascending = sortDir === "asc";
    const modelSortKey = (m) =>
      String(getModelName(m) ?? m?.id ?? "").trim().toLowerCase();
    const providerSortKey = (p) => String(p ?? "").toLowerCase();

    if (sortType === "provider") {
      const sortedProviders = Object.keys(groupedModels).sort((a, b) => {
        const cmp = providerSortKey(a).localeCompare(providerSortKey(b));
        return ascending ? cmp : -cmp;
      });
      const sortedGroups = {};
      sortedProviders.forEach(
        (provider) => (sortedGroups[provider] = groupedModels[provider]),
      );
      return { type: "grouped", data: sortedGroups };
    }
    const sorted = [...filteredModels].sort((a, b) => {
      let comparison = 0;
      if (sortType === "cost") {
        comparison = modelCostSortValue(a) - modelCostSortValue(b);
      } else if (sortType === "model") {
        comparison = modelSortKey(a).localeCompare(modelSortKey(b));
      }
      return ascending ? comparison : -comparison;
    });
    return { type: "flat", data: sorted };
  }, [filteredModels, groupedModels, sortBy]);

  const toggleProvider = (provider) => {
    const newSet = new Set(expandedProviders);
    if (newSet.has(provider)) newSet.delete(provider);
    else newSet.add(provider);
    setExpandedProviders(newSet);
  };

  const expandAll = () =>
    setExpandedProviders(new Set(Object.keys(groupedModels)));
  const collapseAll = () => setExpandedProviders(new Set());

  const deselectAllModels = () => {
    if (selectedModelIds.size === 0) return;
    setShowDeselectAllConfirm(true);
  };

  const confirmDeselectAllModels = () => {
    const newSet = new Set([FREE_MODEL_ID]);
    setSelectedModelIds(newSet);
    setSetting("available_models", [FREE_MODEL_ID]);
    setShowDeselectAllConfirm(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSetting("settings_active_tab", tab);
    if (tab === "cost") {
      setCostTabActivationCount((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <header className="flex min-h-14 shrink-0 flex-row flex-nowrap items-center gap-x-2 border-b border-border bg-card px-4 py-2.5 ps-16 md:gap-x-4 md:px-6 md:py-3 md:ps-6 dark:bg-card/75 dark:backdrop-blur-xl">
        <div className="flex min-h-0 min-w-0 flex-1 items-center gap-3">
          <SettingsIcon className="shrink-0 text-emerald-500" size={20} strokeWidth={1.6} />
          <h2 className="min-w-0 flex-1 truncate text-lg font-semibold md:flex-initial">{t("Settings")}</h2>
        </div>
        <div className="flex shrink-0 items-center justify-end">
          <HeaderLanguageSelector compact />
        </div>
      </header>

      <div className={cn(settingsTabStrip, "ps-2 pe-2 md:ps-3 md:pe-3")}>
        {isBelowMd ? (
          <div className="w-full min-w-0 px-1 py-0.5">
            {/*
              Radix Select renders the menu in a portal with theme tokens (popover); icons match wide tab strip.
            */}
            <Select
              value={activeTab ?? "general"}
              onValueChange={handleTabChange}
            >
              <SelectTrigger
                id="settings-tab-select"
                data-testid="settings-tab-select"
                className="h-10 w-full min-w-0 text-base shadow-xs [&_[data-slot=select-value]]:min-w-0 [&_[data-slot=select-value]]:flex-1"
                aria-label={t("Choose a settings section")}
              >
                <SelectValue placeholder={t("Choose a settings section")}>
                  {selectedTabMeta ? (
                    <span className="flex min-w-0 items-center gap-1.5">
                      <span className="inline-flex shrink-0 [&_svg]:shrink-0">
                        {selectedTabMeta.icon}
                      </span>
                      <span className="min-w-0 truncate">{selectedTabMeta.label}</span>
                    </span>
                  ) : null}
                </SelectValue>
              </SelectTrigger>
              <SelectContent position="popper" align="start" className="z-[10050]">
                {settingsTabs.map(({ id, icon, label, testId }) => (
                  <SelectItem
                    key={id}
                    value={id}
                    {...(testId ? { "data-testid": testId } : {})}
                  >
                    <span className="flex w-full items-center gap-1.5">
                      <span className="inline-flex shrink-0 [&_svg]:shrink-0">{icon}</span>
                      <span className="min-w-0 flex-1">{label}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : (
          <>
            {tabScroll.hasOverflow && (
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
                onClick={() => scrollTabs(-1)}
                disabled={!tabScroll.canScrollLeft}
                aria-label={t("Previous tabs")}
              >
                <ChevronLeft size={20} className="rtl-icon-mirror" />
              </button>
            )}
            <div
              ref={tabStripRef}
              className="flex-1 min-w-0 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
              role="tablist"
            >
              <div className="flex w-max items-center gap-2 px-1 py-0.5">
                {settingsTabs.map(({ id, icon, label, testId }) => (
                  <button
                    key={id}
                    ref={(el) => {
                      if (el) tabButtonRefs.current.set(id, el);
                      else tabButtonRefs.current.delete(id);
                    }}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === id}
                    data-testid={testId}
                    className={cn(
                      settingsTabButton,
                      "flex items-center gap-1.5 whitespace-nowrap",
                      activeTab === id ? settingsTabPillActive : settingsTabPillIdle,
                    )}
                    onClick={() => handleTabChange(id)}
                  >
                    {icon} {label}
                  </button>
                ))}
              </div>
            </div>
            {tabScroll.hasOverflow && (
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
                onClick={() => scrollTabs(1)}
                disabled={!tabScroll.canScrollRight}
                aria-label={t("Next tabs")}
              >
                <ChevronRight size={20} className="rtl-icon-mirror" />
              </button>
            )}
          </>
        )}
      </div>

      <div className={settingsPanelBody}>
        {activeTab === "general" && (
          <SettingsGeneralTab
            localSettings={localSettings}
            onSettingChange={handleSettingChange}
            canConfigBackup={canConfigBackup}
          />
        )}

        {activeTab === "models" && (
          <SettingsModelsTab
            allModels={allModels}
            selectedModelIds={selectedModelIds}
            searchTerm={searchTerm}
            filterEngine={effectiveFilterEngine}
            engineFilterOptions={engineFilterOptions}
            filterFree={filterFree}
            sortBy={sortBy}
            expandedProviders={expandedProviders}
            sortedModelsData={sortedModelsData}
            modelsLoading={modelsLoading}
            modelsError={modelsError}
            onSearchTermChange={setSearchTerm}
            onFilterEngineChange={setFilterEngine}
            onFilterFreeChange={setFilterFree}
            onSortByChange={setSortBy}
            onRefreshModels={() => {
              setModelsLoading(true);
              setModelsError(null);
              fetchModels()
                .then(() => setModelsLoading(false))
                .catch((err) => {
                  setModelsError(err.message || "Failed to refresh models");
                  setModelsLoading(false);
                });
            }}
            onToggleProvider={toggleProvider}
            onExpandAll={expandAll}
            onCollapseAll={collapseAll}
            onToggleModelSelection={toggleModelSelection}
            onDeselectAllModels={deselectAllModels}
            getModelName={getModelName}
            presets={presetsCatalog}
            configuredCloudEngines={configuredCloudEngines}
            onLoadPresetModels={loadPresetModels}
          />
        )}

        {activeTab === "languages" && (
          <SettingsLanguagesTab
            selectedLanguages={selectedLanguages}
            customLanguage={customLanguage}
            onSelectedLanguagesChange={setSelectedLanguages}
            onCustomLanguageChange={setCustomLanguage}
            onSetting={setSetting}
          />
        )}

        {canAccessCostTab && activeTab === "cost" && (
          <SettingsCostTrackingTab
            localSettings={localSettings}
            onSettingChange={handleSettingChange}
            isTabActive={costTabActivationCount}
          />
        )}

        {activeTab === "transform" && <SettingsTransformPromptsTab />}
        {activeTab === "glossary" && <SettingsGlossaryTab />}

        {canAccessUsersTab && activeTab === "users" && (
          <SettingsUsersTab />
        )}

        {canAccessApiTab && activeTab === "api" && (
          <SettingsApiTab
            localSettings={localSettings}
            onSettingChange={handleSettingChange}
            onTestApi={handleTestApi}
            currentUserRole={currentUser?.role || "user"}
          />
        )}

        {activeTab === "about" && <SettingsAboutTab />}
      </div>

      {showDeselectAllConfirm && (
        <ConfirmModal
          title={t("Deselect all models?")}
          message={t(
            "Are you sure you want to deselect all models? This will remove all selected models from the list (except the required free model).",
          )}
          confirmLabel={t("Deselect All")}
          cancelLabel={t("Cancel")}
          onConfirm={confirmDeselectAllModels}
          onCancel={() => setShowDeselectAllConfirm(false)}
          danger
        />
      )}
    </div>
  );
};

SettingsPanel.propTypes = {
  openToTab: PropTypes.string,
  onOpenToTabConsumed: PropTypes.func,
};

export default SettingsPanel;
