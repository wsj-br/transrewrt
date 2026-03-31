import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import PropTypes from "prop-types";
import {
  Sliders,
  Database,
  Globe,
  Key,
  DollarSign,
  Info,
  WandSparkles,
  Users,
  Settings as SettingsIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAppContext } from "../contexts/AppContext";
import SettingsApiTab from "./SettingsApiTab";
import SettingsGeneralTab from "./SettingsGeneralTab";
import SettingsModelsTab from "./SettingsModelsTab";
import SettingsLanguagesTab from "./SettingsLanguagesTab";
import SettingsCostTrackingTab from "./SettingsCostTrackingTab";
import SettingsTransformPromptsTab from "./SettingsTransformPromptsTab";
import SettingsAboutTab from "./SettingsAboutTab";
import SettingsUsersTab from "./SettingsUsersTab";
import HeaderLanguageSelector from "./HeaderLanguageSelector";
import { FREE_MODEL_ID } from "../constants";
import configManager from "../utils/config/configManager";
import webAPI from "../utils/api/webApiClient";
import {
  filterEngineFromModelId,
  providerSortKeyFromModelId,
} from "../utils/misc/modelIdUtils";
import {
  isConfirmedFreeModel,
  modelCostSortValue,
} from "../utils/misc/modelPricingUtils";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

const useStyles = makeStyles({
  panel: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  header: {
    minHeight: "36px",
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  headerIcon: {
    flexShrink: 0,
    color: tokens.colorBrandForegroundInverted,
  },
  headerTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: 1.25,
    color: tokens.colorNeutralForeground1,
  },
  settingsBody: {
    flex: 1,
  },
  tabsHeaderWrap: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    width: "100%",
    gap: 0,
    overflow: "hidden",
    paddingInlineStart: "12px",
    paddingInlineEnd: "12px",
    boxSizing: "border-box",
  },
  tabsHeaderScroll: {
    flex: 1,
    minWidth: 0,
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": { display: "none" },
  },
  tabsHeaderInner: {
    display: "flex",
    alignItems: "stretch",
    width: "max-content",
    minHeight: "100%",
  },
  tabNavBtn: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    minWidth: "32px",
    height: "44px",
    padding: 0,
    border: "none",
    background: "transparent",
    color: tokens.colorBrandForegroundInverted,
    cursor: "pointer",
    transition: "color 0.15s, background 0.15s",
    ":hover": {
      color: tokens.colorBrandForegroundInverted,
      opacity: 0.9,
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
    ":disabled": {
      opacity: 0.4,
      cursor: "default",
      pointerEvents: "none",
    },
  },
  tabBtn: {
    flexShrink: 0,
    minWidth: "max-content",
    whiteSpace: "nowrap",
    overflow: "visible",
    textOverflow: "clip",
  },
});

const SettingsPanel = ({ openToTab, onOpenToTabConsumed }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { settings, allModels, currentUser, setSetting, fetchModels } =
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
  const tabStripRef = useRef(null);
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
        if (tab === "auth") return canAccessUsersTab ? "users" : "general";
        if (tab === "api" && !canAccessApiTab) return "general";
        if (tab === "users" && !canAccessUsersTab) return "general";
        if (tab === "cost" && !canAccessCostTab) return "general";
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

  const handleTestApi = async ({ provider, overrideValue } = {}) => {
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
    const allRows = [
      { value: "openrouter", label: t("OpenRouter") },
      { value: "openai", label: t("OpenAI") },
      { value: "anthropic", label: t("Anthropic") },
      { value: "google", label: t("Google") },
      { value: "deepseek", label: t("DeepSeek") },
      { value: "cerebras", label: t("Cerebras") },
      { value: "groq", label: t("Groq") },
      { value: "mistralai", label: t("Mistral") },
      { value: "ollama", label: t("Ollama") },
      { value: "xai", label: t("xAI") },
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
  }, [t, enginesWithModels]);

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

  const filteredModels = useMemo(() => {
    return allModels.filter((model) => {
      const matchesSearch =
        model.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (model.name &&
          model.name.toLowerCase().includes(searchTerm.toLowerCase()));
      let matchesEngine = true;
      if (effectiveFilterEngine) {
        matchesEngine = model.id.startsWith(`${effectiveFilterEngine}/`);
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
    if (
      window.confirm(
        "Are you sure you want to deselect all models? This will remove all selected models from the list (except the required free model).",
      )
    ) {
      const newSet = new Set([FREE_MODEL_ID]);
      setSelectedModelIds(newSet);
      setSetting("available_models", [FREE_MODEL_ID]);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSetting("settings_active_tab", tab);
    if (tab === "cost") {
      setCostTabActivationCount((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <SettingsIcon className={styles.headerIcon} size={20} strokeWidth={1.6} />
          <h2 className={styles.headerTitle}>{t("Settings")}</h2>
        </div>
        <HeaderLanguageSelector compact />
      </div>

      <div className={mergeClasses("tabs-header", styles.tabsHeaderWrap)}>
        {tabScroll.hasOverflow && (
          <button
            type="button"
            className={styles.tabNavBtn}
            onClick={() => scrollTabs(-1)}
            disabled={!tabScroll.canScrollLeft}
            aria-label={t("Previous tabs")}
          >
            <ChevronLeft size={20} className="rtl-icon-mirror" />
          </button>
        )}
        <div
          ref={tabStripRef}
          className={styles.tabsHeaderScroll}
          role="tablist"
        >
          <div className={styles.tabsHeaderInner}>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "general"}
              className={mergeClasses("tab-btn", styles.tabBtn, activeTab === "general" && "active")}
              onClick={() => handleTabChange("general")}
            >
              <Sliders size={16} /> {t("General Settings")}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "models"}
              className={mergeClasses("tab-btn", styles.tabBtn, activeTab === "models" && "active")}
              onClick={() => handleTabChange("models")}
              data-testid="settings-tab-models"
            >
              <Database size={16} /> {t("Models")}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "languages"}
              className={mergeClasses("tab-btn", styles.tabBtn, activeTab === "languages" && "active")}
              onClick={() => handleTabChange("languages")}
            >
              <Globe size={16} /> {t("Languages")}
            </button>
            {canAccessCostTab && (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "cost"}
                className={mergeClasses("tab-btn", styles.tabBtn, activeTab === "cost" && "active")}
                onClick={() => handleTabChange("cost")}
              >
                <DollarSign size={16} /> {t("Cost Tracking")}
              </button>
            )}
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "transform"}
              className={mergeClasses("tab-btn", styles.tabBtn, activeTab === "transform" && "active")}
              onClick={() => handleTabChange("transform")}
            >
              <WandSparkles size={16} /> {t("Transform")}
            </button>
            {canAccessUsersTab && (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "users"}
                className={mergeClasses("tab-btn", styles.tabBtn, activeTab === "users" && "active")}
                onClick={() => handleTabChange("users")}
              >
                <Users size={16} /> {t("Users")}
              </button>
            )}
            {canAccessApiTab && (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "api"}
                className={mergeClasses("tab-btn", styles.tabBtn, activeTab === "api" && "active")}
                onClick={() => handleTabChange("api")}
              >
                <Key size={16} /> {t("API Config")}
              </button>
            )}
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "about"}
              className={mergeClasses("tab-btn", styles.tabBtn, activeTab === "about" && "active")}
              onClick={() => handleTabChange("about")}
            >
              <Info size={16} /> {t("About")}
            </button>
          </div>
        </div>
        {tabScroll.hasOverflow && (
          <button
            type="button"
            className={styles.tabNavBtn}
            onClick={() => scrollTabs(1)}
            disabled={!tabScroll.canScrollRight}
            aria-label={t("Next tabs")}
          >
            <ChevronRight size={20} className="rtl-icon-mirror" />
          </button>
        )}
      </div>

      <div
        className={mergeClasses(
          "modal-body",
          "settings-body",
          styles.settingsBody,
        )}
      >
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
    </div>
  );
};

SettingsPanel.propTypes = {
  openToTab: PropTypes.string,
  onOpenToTabConsumed: PropTypes.func,
};

export default SettingsPanel;
