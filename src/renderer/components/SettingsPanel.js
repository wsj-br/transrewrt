import React, { useState, useEffect, useMemo } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import { Sliders, Database, Globe, Key, Lock, DollarSign } from "lucide-react";
import { useAppContext } from "../contexts/AppContext";
import SettingsDialogApiTab from "./SettingsDialogApiTab";
import SettingsDialogGeneralTab from "./SettingsDialogGeneralTab";
import SettingsDialogModelsTab from "./SettingsDialogModelsTab";
import SettingsDialogLanguagesTab from "./SettingsDialogLanguagesTab";
import SettingsDialogAuthTab from "./SettingsDialogAuthTab";
import SettingsDialogCostTrackingTab from "./SettingsDialogCostTrackingTab";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.readConfig;

const useStyles = makeStyles({
  panel: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  header: {
    padding: "16px 24px",
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
  },
  headerTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: 600,
  },
});

const SettingsPanel = () => {
  const styles = useStyles();
  const {
    settings,
    allModels,
    updateSettings,
    setSetting,
    fetchModels,
  } = useAppContext();

  const [localSettings, setLocalSettings] = useState({});
  const [activeTab, setActiveTab] = useState("general"); // Will be set from settings on mount/update

  const [searchTerm, setSearchTerm] = useState("");
  const [filterFree, setFilterFree] = useState(false);
  const [expandedProviders, setExpandedProviders] = useState(new Set());
  const [selectedModelIds, setSelectedModelIds] = useState(new Set());
  const [sortBy, setSortBy] = useState("provider-asc");

  const [selectedLanguages, setSelectedLanguages] = useState(new Set());
  const [customLanguage, setCustomLanguage] = useState("");

  const [showApiKey, setShowApiKey] = useState(false);
  const [apiTestStatus, setApiTestStatus] = useState(null);
  const [apiTestMessage, setApiTestMessage] = useState("");
  const [modelsLoading, setModelsLoading] = useState(false);
  const [modelsError, setModelsError] = useState(null);

  const FREE_MODEL_ID = "openrouter/free";

  useEffect(() => {
    setLocalSettings({ ...settings });
    const modelsWithFree = new Set([FREE_MODEL_ID, ...(settings.available_models || [])]);
    setSelectedModelIds(modelsWithFree);
    setSelectedLanguages(new Set(settings.available_languages || []));
    let tab = settings.settings_active_tab || "general";
    if (tab === "auth" && !isWeb) tab = "general";
    if (tab === "api" && isWeb) tab = "general";
    setActiveTab(tab);
  }, [settings]);

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

  const handleSettingChange = (key, value) => {
    const newSettings = { ...localSettings, [key]: value };
    setLocalSettings(newSettings);
    setSetting(key, value);
    if (key === "api_url" || key === "api_key") {
      setApiTestStatus(null);
      setApiTestMessage("");
    }
  };

  const handleTestApi = async () => {
    const apiUrl = localSettings.api_url || "https://openrouter.ai/api/v1";
    const apiKey = localSettings.api_key || "";

    if (!apiUrl.trim()) {
      setApiTestStatus("error");
      setApiTestMessage("API URL is required");
      return;
    }
    if (!apiKey.trim()) {
      setApiTestStatus("error");
      setApiTestMessage("API Key is required");
      return;
    }

    setApiTestStatus("testing");
    setApiTestMessage("Testing connection...");

    try {
      const normalizedUrl = apiUrl.trim().replace(/\/$/, "");
      const testUrl = `${normalizedUrl}/key`;
      const response = await fetch(testUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer":
            "https://github.com/wsj-br/poliverb",
          "X-Title": "Poliverb",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.error?.message) errorMessage = errorData.error.message;
        } catch (e) {
          /* ignore */
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      if (data && (data.data || data.id || response.ok)) {
        const keyInfo = data.data || data;
        setApiTestStatus("success");
        const keyLabel = keyInfo.label || keyInfo.id || "API key";
        setApiTestMessage(
          `Success! Connected to API. Valid API key: ${keyLabel}`
        );
      } else {
        setApiTestStatus("error");
        setApiTestMessage(
          "Connection successful but unexpected response. Check your API key permissions."
        );
      }
    } catch (error) {
      setApiTestStatus("error");
      setApiTestMessage(`Connection failed: ${error.message}`);
    }
  };

  const toggleModelSelection = (modelId) => {
    if (modelId === FREE_MODEL_ID && selectedModelIds.has(FREE_MODEL_ID)) return;
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
        ascending ? a.localeCompare(b) : b.localeCompare(a)
      );
      const sortedGroups = {};
      sortedProviders.forEach(
        (provider) => (sortedGroups[provider] = groupedModels[provider])
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
        "Are you sure you want to deselect all models? This will remove all selected models from the list (except the required free model)."
      )
    ) {
      const newSet = new Set([FREE_MODEL_ID]);
      setSelectedModelIds(newSet);
      setSetting("available_models", [FREE_MODEL_ID]);
    }
  };

  // Handle tab changes - explicitly persist the active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSetting('settings_active_tab', tab);
  };

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Settings</h2>
      </div>

      <div className="tabs-header">
        <button
          type="button"
          className={`tab-btn ${activeTab === "general" ? "active" : ""}`}
          onClick={() => handleTabChange("general")}
        >
          <Sliders size={16} /> Behavior & Appearance
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === "models" ? "active" : ""}`}
          onClick={() => handleTabChange("models")}
        >
          <Database size={16} /> Models
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === "languages" ? "active" : ""}`}
          onClick={() => handleTabChange("languages")}
        >
          <Globe size={16} /> Languages
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === "cost" ? "active" : ""}`}
          onClick={() => handleTabChange("cost")}
        >
          <DollarSign size={16} /> Cost Tracking
        </button>
        {!isWeb && (
          <button
            type="button"
            className={`tab-btn ${activeTab === "api" ? "active" : ""}`}
            onClick={() => handleTabChange("api")}
          >
            <Key size={16} /> API Config
          </button>
        )}
        {isWeb && (
          <button
            type="button"
            className={`tab-btn ${activeTab === "auth" ? "active" : ""}`}
            onClick={() => handleTabChange("auth")}
          >
            <Lock size={16} /> Authentication
          </button>
        )}
      </div>

      <div className="modal-body settings-body" style={{ flex: 1 }}>
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
          />
        )}

        {!isWeb && activeTab === "api" && (
          <SettingsDialogApiTab
            localSettings={localSettings}
            showApiKey={showApiKey}
            apiTestStatus={apiTestStatus}
            apiTestMessage={apiTestMessage}
            onSettingChange={handleSettingChange}
            onShowApiKeyChange={setShowApiKey}
            onTestApi={handleTestApi}
          />
        )}

        {isWeb && activeTab === "auth" && <SettingsDialogAuthTab />}
      </div>
    </div>
  );
};

export default SettingsPanel;
