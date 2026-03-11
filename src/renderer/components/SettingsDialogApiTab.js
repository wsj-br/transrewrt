import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, Text, Input, Checkbox } from "@fluentui/react-components";
import { Key, Pencil, Eye, EyeOff } from "lucide-react";
import PropTypes from "prop-types";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

const SecretField = ({
  id,
  label,
  placeholder,
  configured,
  value,
  onChange,
  onSave,
  onCancel,
  onEdit,
  saveLabel,
  cancelLabel,
  configuredMessage,
  editLabel,
  isEditing,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputBoxStyle = {
    width: "400px",
    minWidth: "300px",
    minHeight: "32px",
    padding: "4px 8px",
    boxSizing: "border-box",
    borderRadius: "4px",
    border: "1px solid var(--colorNeutralStroke1)",
    display: "inline-flex",
    alignItems: "center",
  };
  const configuredMessageStyle = {
    color: "var(--colorPaletteGreenForeground1)",
    fontSize: "14px",
    fontWeight: 600,
  };

  if (configured && !isEditing) {
    return (
      <div style={{ marginBottom: "16px" }}>
        <Label style={{ display: "block", marginBottom: "6px" }}>{label}</Label>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <span style={inputBoxStyle}>
            <span style={configuredMessageStyle}>
              {configuredMessage}
            </span>
          </span>
          <Button
            appearance="subtle"
            icon={<Pencil size={16} />}
            onClick={onEdit}
            aria-label={editLabel}
            style={{ minWidth: "auto" }}
          >
            {editLabel}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: "16px" }}>
      <Label htmlFor={id} style={{ display: "block", marginBottom: "6px" }}>
        {label}
      </Label>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <div style={{ position: "relative", display: "inline-flex" }}>
          <Input
            id={id}
            type={showPassword ? "text" : "password"}
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            style={{ width: "400px", minWidth: "300px", paddingRight: "36px" }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide" : "Show"}
            style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "var(--colorNeutralForeground2)",
            }}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <Button appearance="primary" onClick={onSave} size="small">
          {saveLabel}
        </Button>
        {configured && (
          <Button appearance="subtle" onClick={onCancel} size="small">
            {cancelLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

SecretField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  configured: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  onEdit: PropTypes.func,
  saveLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  configuredMessage: PropTypes.string,
  editLabel: PropTypes.string,
  isEditing: PropTypes.bool,
};

const SettingsDialogApiTab = ({
  localSettings,
  hasApiKey,
  hasKeySeed,
  apiTestStatus,
  apiTestMessage,
  onSettingChange,
  onTestApi,
}) => {
  const { t } = useTranslation();
  const [editingApiKey, setEditingApiKey] = useState(false);
  const [editingKeySeed, setEditingKeySeed] = useState(false);
  const [newApiKey, setNewApiKey] = useState("");
  const [newKeySeed, setNewKeySeed] = useState("");

  const handleSaveApiKey = () => {
    const trimmed = (newApiKey ?? "").trim();
    if (trimmed) onSettingChange("api_key", trimmed);
    setNewApiKey("");
    setEditingApiKey(false);
  };

  const handleCancelApiKey = () => {
    setNewApiKey("");
    setEditingApiKey(false);
  };

  const handleSaveKeySeed = () => {
    const trimmed = (newKeySeed ?? "").trim();
    if (trimmed) onSettingChange("key_seed", trimmed);
    setNewKeySeed("");
    setEditingKeySeed(false);
  };

  const handleCancelKeySeed = () => {
    setNewKeySeed("");
    setEditingKeySeed(false);
  };

  const getTestOverrides = () => {
    const overrides = {};
    if (editingApiKey && (newApiKey ?? "").trim()) overrides.apiKey = newApiKey.trim();
    if (editingKeySeed && (newKeySeed ?? "").trim()) overrides.keySeed = newKeySeed.trim();
    return Object.keys(overrides).length ? overrides : undefined;
  };

  return (
    <div className="tab-content">
      {!isWeb && (
        <div className="section">
          <Text
            as="h3"
            size={500}
            weight="semibold"
            style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: 0, marginBottom: "36px" }}
          >
            <Key size={20} />
            {t("API Configuration")}
          </Text>

          {/* API Configuration section */}
          <div style={{ paddingLeft: "24px" }}>
            <SecretField
              id="api-key"
              label={t("OpenRouter API Key:")}
              placeholder="sk-or-..."
              configured={hasApiKey}
              value={newApiKey}
              onChange={setNewApiKey}
              onSave={handleSaveApiKey}
              onCancel={handleCancelApiKey}
              onEdit={() => setEditingApiKey(true)}
              saveLabel={t("Save")}
              cancelLabel={t("Cancel")}
              configuredMessage={t("API key is configured")}
              editLabel={t("Edit")}
              isEditing={editingApiKey}
            />

            {/* API URL input */}
            <div style={{ marginBottom: "16px" }}>
              <Label htmlFor="api-url" style={{ display: "block", marginBottom: "6px" }}>
                {t("API URL:")}
              </Label>
              <Input
                id="api-url"
                type="text"
                value={localSettings.api_url || "https://openrouter.ai/api/v1"}
                onChange={(e) => onSettingChange("api_url", e.target.value)}
                placeholder={
                  localSettings.use_transrewrt_proxy ? "http://localhost:6500" : "https://openrouter.ai/api/v1"
                }
                style={{ width: "auto", minWidth: "400px" }}
              />
              {localSettings.use_transrewrt_proxy && (
                <Text
                  as="p"
                  style={{
                    fontSize: "12px",
                    color: "var(--colorNeutralForeground3)",
                    marginTop: "4px",
                    marginLeft: "24px",
                  }}
                >
                  {t("When using proxy, this is the proxy base URL (e.g. http://your.server:6500).")}
                </Text>
              )}
            </div>

            {/* Use Transrewrt Proxy checkbox */}
            <div style={{ marginBottom: "16px" }}>
              <Checkbox
                id="use-transrewrt-proxy"
                checked={!!localSettings.use_transrewrt_proxy}
                onChange={(e) => onSettingChange("use_transrewrt_proxy", e.target.checked)}
              />
              <Label htmlFor="use-transrewrt-proxy" style={{ cursor: "pointer", marginLeft: "8px" }}>
                {t("Use Transrewrt Proxy")}
              </Label>
            </div>

            {localSettings.use_transrewrt_proxy && (
              <div style={{ marginLeft: "24px" }}>
                <SecretField
                  id="key-seed"
                  label={t("Key Seed:")}
                  placeholder={t("Shared secret with the proxy")}
                  configured={hasKeySeed}
                  value={newKeySeed}
                  onChange={setNewKeySeed}
                  onSave={handleSaveKeySeed}
                  onCancel={handleCancelKeySeed}
                  onEdit={() => setEditingKeySeed(true)}
                  saveLabel={t("Save")}
                  cancelLabel={t("Cancel")}
                  configuredMessage={t("Key Seed is configured")}
                  editLabel={t("Edit")}
                  isEditing={editingKeySeed}
                />
              </div>
            )}

            {/* Test API Configuration button */}
            <div style={{ marginTop: "8px" }}>
              <Button
                appearance="primary"
                onClick={() => onTestApi(getTestOverrides())}
                disabled={apiTestStatus === "testing"}
                style={{ width: "auto" }}
              >
                {apiTestStatus === "testing" ? t("Testing...") : t("Test API Configuration")}
              </Button>
              {/* API Test Status message */}
              {apiTestStatus && (
                <div
                  style={{
                    marginTop: "8px",
                    padding: "8px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    backgroundColor: apiTestStatus === "success" ? "#d4edda" : "#f8d7da",
                    color: apiTestStatus === "success" ? "#155724" : "#721c24",
                    border: `1px solid ${apiTestStatus === "success" ? "#c3e6cb" : "#f5c6cb"}`,
                  }}
                >
                  {apiTestMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {isWeb && (
        <Text as="p" style={{ marginTop: 0 }}>
          {t("API is configured on the server.")}
        </Text>
      )}
    </div>
  );
};

SettingsDialogApiTab.propTypes = {
  localSettings: PropTypes.shape({
    api_url: PropTypes.string,
    use_transrewrt_proxy: PropTypes.bool,
  }).isRequired,
  hasApiKey: PropTypes.bool,
  hasKeySeed: PropTypes.bool,
  apiTestStatus: PropTypes.string,
  apiTestMessage: PropTypes.string,
  onSettingChange: PropTypes.func.isRequired,
  onTestApi: PropTypes.func.isRequired,
};

export default SettingsDialogApiTab;
