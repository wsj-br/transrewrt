import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import {
  Sliders,
  Database,
  Globe,
  Key,
  DollarSign,
  Info,
  Sparkles,
  Users,
  Settings as SettingsIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAppContext } from "../contexts/AppContext";
import SettingsDialogApiTab from "./SettingsDialogApiTab";
import SettingsDialogGeneralTab from "./SettingsDialogGeneralTab";
import SettingsDialogModelsTab from "./SettingsDialogModelsTab";
import SettingsDialogLanguagesTab from "./SettingsDialogLanguagesTab";
import SettingsDialogCostTrackingTab from "./SettingsDialogCostTrackingTab";
import SettingsDialogTransformPromptsTab from "./SettingsDialogTransformPromptsTab";
import SettingsDialogAboutTab from "./SettingsDialogAboutTab";
import SettingsDialogUsersTab from "./SettingsDialogUsersTab";
import HeaderLanguageSelector from "./HeaderLanguageSelector";
import { FREE_MODEL_ID } from "../constants";
import configManager from "../utils/config/configManager";
import apiService from "../services/apiService";

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
    paddingLeft: "12px",
    paddingRight: "12px",
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
  const { settings, allModels, currentUser, updateSettings, setSetting, fetchModels } =
    useAppContext();

  const [localSettings, setLocalSettings] = useState({});
  const [activeTab, setActiveTab] = useState(null); // Restored from settings on mount; no tab selected until then to avoid flash

  const [searchTerm, setSearchTerm] = useState("");
  const [filterFree, setFilterFree] = useState(false);
  const [expandedProviders, setExpandedProviders] = useState(new Set());
  const [selectedModelIds, setSelectedModelIds] = useState(new Set());
  const [sortBy, setSortBy] = useState("provider-asc");

  const [selectedLanguages, setSelectedLanguages] = useState(new Set());
  const [customLanguage, setCustomLanguage] = useState("");

  const [apiTestStatus, setApiTestStatus] = useState(null);
  const [apiTestMessage, setApiTestMessage] = useState("");
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
    setLocalSettings({ ...settings });
    const modelsWithFree = new Set([
      FREE_MODEL_ID,
      ...(settings.available_models || []),
    ]);
    setSelectedModelIds(modelsWithFree);
    setSelectedLanguages(new Set(settings.available_languages || []));
    // Restore active tab once per mount. Prefer openToTab (e.g. from sidebar "User management"),
    // then configManager, then context.
    if (!hasRestoredTabRef.current) {
      hasRestoredTabRef.current = true;
      let tab =
        openToTab ||
        configManager.get("settings_active_tab") ||
        settings.settings_active_tab ||
        "general";
      if (tab === "auth") tab = isWeb && currentUser?.role === "admin" ? "users" : "general";
      if (tab === "api" && isWeb) tab = "general";
      if (tab === "users" && (!isWeb || currentUser?.role !== "admin")) tab = "general";
      setActiveTab(tab);
      if (tab && configManager.get("settings_active_tab") !== tab) {
        setSetting("settings_active_tab", tab);
      }
      if (openToTab) onOpenToTabConsumed?.();
    }
  }, [settings, openToTab, onOpenToTabConsumed, currentUser?.role]);

  useEffect(() => {
    if (activeTab === "users" && (!isWeb || currentUser?.role !== "admin")) {
      setActiveTab("general");
      setSetting("settings_active_tab", "general");
    }
  }, [activeTab, isWeb, currentUser?.role, setSetting]);

  useEffect(() => {
    if (allModels.length === 0) {
      setModelsLoading(true);
      fetchModels()
        .then(() => setModelsLoading(false))
        .catch((err) => {
          setModelsError(err.message || "Failed to load models");
          setModelsLoading(false);
        });
    }
  }, [allModels.length, fetchModels]);

  const DEFAULT_API_URL = "https://openrouter.ai/api/v1";

  const handleSettingChange = (key, value) => {
    let newSettings = { ...localSettings, [key]: value };
    if (key === "use_transrewrt_proxy" && !value) {
      newSettings = { ...newSettings, api_url: DEFAULT_API_URL };
      setSetting("api_url", DEFAULT_API_URL);
    }
    setLocalSettings(newSettings);
    setSetting(key, value);
    if (key === "api_url" || key === "api_key" || key === "use_transrewrt_proxy" || key === "key_seed") {
      setApiTestStatus(null);
      setApiTestMessage("");
    }
  };

  const handleTestApi = async (overrides) => {
    if (!window.electronAPI?.testApiConfiguration) return;
    const apiUrl = localSettings.api_url || "https://openrouter.ai/api/v1";
    setApiTestStatus("testing");
    setApiTestMessage("Testing connection...");
    try {
      const result = await window.electronAPI.testApiConfiguration({
        apiUrl,
        use_transrewrt_proxy: !!localSettings.use_transrewrt_proxy,
        apiKeyOverride: overrides?.apiKey,
        keySeedOverride: overrides?.keySeed,
      });
      setApiTestStatus(result.status);
      setApiTestMessage(result.message || "");
    } catch (error) {
      setApiTestStatus("error");
      setApiTestMessage(error?.message || "Connection failed");
    }
  };

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
      let matchesFree = true;
      if (filterFree) {
        const pricing = model.pricing || {};
        const isFree =
          parseFloat(pricing.prompt || 0) === 0 &&
          parseFloat(pricing.completion || 0) === 0;
        matchesFree = isFree;
      }
      return matchesSearch && matchesFree;
    });
  }, [allModels, searchTerm, filterFree]);

  const getModelName = (model) => {
    if (model.name) {
      const nameParts = model.name.split(":");
      if (nameParts.length > 1) return nameParts.slice(1).join(":");
    }
    const id = model.id || "";
    const idParts = id.split(":");
    if (idParts.length > 1) return idParts.slice(1).join(":");
    const slashParts = id.split("/");
    if (slashParts.length > 1) return slashParts.slice(1).join("/");
    return model.name || id;
  };

  const getModelCost = (model) => {
    const pricing = model.pricing || {};
    return (
      parseFloat(pricing.prompt || 0) + parseFloat(pricing.completion || 0)
    );
  };

  const groupedModels = useMemo(() => {
    const groups = {};
    filteredModels.forEach((model) => {
      const provider = model.id.split("/")[0] || "Other";
      if (!groups[provider]) groups[provider] = [];
      groups[provider].push(model);
    });
    return groups;
  }, [filteredModels]);

  const sortedModelsData = useMemo(() => {
    const [sortType, sortDir] = sortBy.split("-");
    const ascending = sortDir === "asc";
    if (sortType === "provider") {
      const sortedProviders = Object.keys(groupedModels).sort((a, b) =>
        ascending ? a.localeCompare(b) : b.localeCompare(a),
      );
      const sortedGroups = {};
      sortedProviders.forEach(
        (provider) => (sortedGroups[provider] = groupedModels[provider]),
      );
      return { type: "grouped", data: sortedGroups };
    }
    const sorted = [...filteredModels].sort((a, b) => {
      let comparison = 0;
      if (sortType === "cost") {
        comparison = getModelCost(a) - getModelCost(b);
      } else if (sortType === "model") {
        comparison = getModelName(a)
          .toLowerCase()
          .localeCompare(getModelName(b).toLowerCase());
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
            <ChevronLeft size={20} />
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
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "cost"}
              className={mergeClasses("tab-btn", styles.tabBtn, activeTab === "cost" && "active")}
              onClick={() => handleTabChange("cost")}
            >
              <DollarSign size={16} /> {t("Cost Tracking")}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "transform"}
              className={mergeClasses("tab-btn", styles.tabBtn, activeTab === "transform" && "active")}
              onClick={() => handleTabChange("transform")}
            >
              <Sparkles size={16} /> {t("Transform")}
            </button>
            {isWeb && currentUser?.role === "admin" && (
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
            {!isWeb && (
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
            <ChevronRight size={20} />
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
          <SettingsDialogGeneralTab
            localSettings={localSettings}
            onSettingChange={handleSettingChange}
          />
        )}

        {activeTab === "models" && (
          <SettingsDialogModelsTab
            allModels={allModels}
            selectedModelIds={selectedModelIds}
            searchTerm={searchTerm}
            filterFree={filterFree}
            sortBy={sortBy}
            expandedProviders={expandedProviders}
            sortedModelsData={sortedModelsData}
            modelsLoading={modelsLoading}
            modelsError={modelsError}
            onSearchTermChange={setSearchTerm}
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
          <SettingsDialogLanguagesTab
            selectedLanguages={selectedLanguages}
            customLanguage={customLanguage}
            onSelectedLanguagesChange={setSelectedLanguages}
            onCustomLanguageChange={setCustomLanguage}
            onSetting={setSetting}
          />
        )}

        {activeTab === "cost" && (
          <SettingsDialogCostTrackingTab
            localSettings={localSettings}
            onSettingChange={handleSettingChange}
            isTabActive={costTabActivationCount}
          />
        )}

        {activeTab === "transform" && <SettingsDialogTransformPromptsTab />}

        {isWeb && currentUser?.role === "admin" && activeTab === "users" && (
          <SettingsDialogUsersTab />
        )}

        {!isWeb && activeTab === "api" && (
          <SettingsDialogApiTab
            localSettings={localSettings}
            hasApiKey={!!settings.api_key_configured}
            hasKeySeed={!!settings.key_seed_configured}
            apiTestStatus={apiTestStatus}
            apiTestMessage={apiTestMessage}
            onSettingChange={handleSettingChange}
            onTestApi={handleTestApi}
          />
        )}

        {activeTab === "about" && <SettingsDialogAboutTab />}
      </div>
    </div>
  );
};

export default SettingsPanel;
