import { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, Text, Input } from "@fluentui/react-components";
import { Key, Pencil, Eye, EyeOff } from "lucide-react";
import PropTypes from "prop-types";
import webAPI from "../utils/api/webApiClient";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

/** Success/error use semantic colours; in-progress uses regular body colour. */
function testStatusMessageColor(status) {
  if (status === "success") return "var(--colorPaletteGreenForeground1)";
  if (status === "testing") return "var(--colorNeutralForeground1)";
  return "var(--colorPaletteRedForeground1)";
}

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
  onTest,
  testState,
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
          <Button
            appearance="secondary"
            onClick={onTest}
            disabled={testState?.status === "testing"}
            size="small"
          >
            {testState?.status === "testing" ? "Testing..." : "Test"}
          </Button>
        </div>
        {testState?.message ? (
          <Text
            as="p"
            size={200}
            style={{
              marginTop: "6px",
              color: testStatusMessageColor(testState.status),
            }}
          >
            {testState.message}
          </Text>
        ) : null}
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
        <Button
          appearance="secondary"
          onClick={onTest}
          disabled={testState?.status === "testing"}
          size="small"
        >
          {testState?.status === "testing" ? "Testing..." : "Test"}
        </Button>
      </div>
      {testState?.message ? (
        <Text
          as="p"
          size={200}
          style={{
            marginTop: "6px",
            color:
              testState.status === "success"
                ? "var(--colorPaletteGreenForeground1)"
                : "var(--colorPaletteRedForeground1)",
          }}
        >
          {testState.message}
        </Text>
      ) : null}
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
  onTest: PropTypes.func,
  testState: PropTypes.shape({
    status: PropTypes.string,
    message: PropTypes.string,
  }),
};

const PROVIDER_SECRET_FIELDS = [
  { key: "openrouter_api_key", labelKey: "OpenRouter API key", placeholder: "sk-or-..." },
  { key: "openai_api_key", labelKey: "OpenAI API key", placeholder: "sk-..." },
  { key: "anthropic_api_key", labelKey: "Anthropic API key", placeholder: "sk-ant-..." },
  { key: "google_api_key", labelKey: "Google Gemini API key", placeholder: "" },
  { key: "deepseek_api_key", labelKey: "DeepSeek API key", placeholder: "" },
  { key: "groq_api_key", labelKey: "Groq API key", placeholder: "" },
  { key: "mistralai_api_key", labelKey: "Mistral API key", placeholder: "" },
  { key: "xai_api_key", labelKey: "xAI API key", placeholder: "" },
];

const SettingsApiTab = ({
  localSettings,
  onSettingChange,
  onTestApi,
  currentUserRole,
}) => {
  const { t } = useTranslation();
  const [editingKey, setEditingKey] = useState(null);
  const [draftValue, setDraftValue] = useState("");
  const [webProviderStatus, setWebProviderStatus] = useState([]);
  const [testResults, setTestResults] = useState({});

  const providerByKey = useMemo(() => {
    const map = {};
    for (const { key } of PROVIDER_SECRET_FIELDS) {
      map[key] = key.replace("_api_key", "");
    }
    return map;
  }, []);

  useEffect(() => {
    if (!isWeb || currentUserRole !== "admin") return;
    webAPI
      .getProviderKeysStatus()
      .then((rows) => setWebProviderStatus(rows.filter((r) => r.provider !== "ollama")))
      .catch(() => setWebProviderStatus([]));
  }, [currentUserRole]);

  const runProviderTest = async (provider, overrideValue) => {
    setTestResults((prev) => ({
      ...prev,
      [provider]: { status: "testing", message: t("Testing...") },
    }));
    const result = await onTestApi({ provider, overrideValue });
    setTestResults((prev) => ({
      ...prev,
      [provider]: { status: result.status, message: result.message || "" },
    }));
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

          <div style={{ paddingLeft: "24px" }}>
            <Text
              as="p"
              style={{ display: "block", marginBottom: "20px", maxWidth: "560px" }}
            >
              {t("Add API keys for each provider you use.")}
            </Text>
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
                gap: "0 24px",
                width: "100%",
              }}
            >
              {PROVIDER_SECRET_FIELDS.map(({ key, labelKey, placeholder }) => {
                const configured = !!localSettings[`${key}_configured`];
                const isEditing = editingKey === key;
                const provider = providerByKey[key];
                const overrideValue = isEditing ? (draftValue ?? "").trim() : undefined;
                return (
                  <SecretField
                    key={key}
                    id={`api-${key}`}
                    label={t(labelKey)}
                    placeholder={placeholder}
                    configured={configured}
                    value={isEditing ? draftValue : ""}
                    onChange={setDraftValue}
                    onSave={() => {
                      const trimmed = (draftValue ?? "").trim();
                      onSettingChange(key, trimmed);
                      setDraftValue("");
                      setEditingKey(null);
                    }}
                    onCancel={() => {
                      setDraftValue("");
                      setEditingKey(null);
                    }}
                    onEdit={() => {
                      setEditingKey(key);
                      setDraftValue("");
                      setTestResults((prev) => {
                        const next = { ...prev };
                        delete next[provider];
                        return next;
                      });
                    }}
                    onTest={() => runProviderTest(provider, overrideValue)}
                    testState={testResults[provider]}
                    saveLabel={t("Save")}
                    cancelLabel={t("Cancel")}
                    configuredMessage={t("API key is configured")}
                    editLabel={t("Edit")}
                    isEditing={isEditing}
                  />
                );
              })}
            </div>

            <div style={{ marginBottom: "16px" }}>
              <Label htmlFor="ollama-base-url" style={{ display: "block", marginBottom: "6px" }}>
                {t("Ollama base URL")}
              </Label>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Input
                    id="ollama-base-url"
                    type="text"
                    value={localSettings.ollama_base_url ?? "http://localhost:11434"}
                    onChange={(e) => onSettingChange("ollama_base_url", e.target.value)}
                    placeholder="http://localhost:11434"
                    style={{ width: "400px", minWidth: "300px" }}
                  />
                  <Text
                    as="p"
                    size={200}
                    style={{ marginTop: "6px", marginBottom: 0, color: "var(--colorNeutralForeground3)" }}
                  >
                    {t("Local Ollama has no API key. Leave default if Ollama runs on this machine.")}
                  </Text>
                </div>
                <Button
                  appearance="secondary"
                  onClick={() => runProviderTest("ollama")}
                  disabled={testResults.ollama?.status === "testing"}
                  size="small"
                >
                  {testResults.ollama?.status === "testing" ? t("Testing...") : t("Test")}
                </Button>
              </div>
              {testResults.ollama?.message ? (
                <Text
                  as="p"
                  size={200}
                  style={{
                    marginTop: "6px",
                    color: testStatusMessageColor(testResults.ollama?.status),
                  }}
                >
                  {testResults.ollama.message}
                </Text>
              ) : null}
            </div>

            <div style={{ marginTop: "24px", padding: "12px 16px", backgroundColor: "var(--colorNeutralBackground2)", borderRadius: "6px", maxWidth: "800px" }}>
              <Text as="p" style={{ margin: 0, fontSize: "14px" }}>
                💡 <strong>{t("Don't want to pay?")}</strong> {t("Generate a free OpenRouter key (no credit card required) to use free models, or install Ollama to run models locally without any API key.")}
              </Text>
            </div>

          </div>
        </div>
      )}
      {isWeb && (
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
          <div style={{ paddingLeft: "24px" }}>
            {currentUserRole !== "admin" ? (
              <Text as="p">{t("Admin access is required.")}</Text>
            ) : (
              <>
                <Text
                  as="p"
                  style={{ display: "block", marginBottom: "20px", maxWidth: "560px" }}
                >
                  {t("These API keys are configured from Docker environment variables.")}
                </Text>
                <div style={{ display: "grid", gap: "16px", width: "fit-content" }}>
                  {webProviderStatus.map((item) => (
                    <div
                      key={item.provider}
                      style={{
                        border: "1px solid var(--colorNeutralStroke1)",
                        borderRadius: "8px",
                        padding: "10px 12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "12px",
                        }}
                      >
                        <div>
                          <Text as="div" weight="semibold" size={400}>
                            {item.label || item.provider} {" • "}
                          </Text>
                          <Text as="div" size={250} style={{ color: "var(--colorPaletteGreenForeground1)" }}>
                            {item.configured
                              ? t("API key is configured")
                              : t("API key is not configured in environment")}
                          </Text>
                        </div>
                        <Button
                          appearance="secondary"
                          size="small"
                          onClick={() => runProviderTest(item.provider)}
                          disabled={!item.configured || testResults[item.provider]?.status === "testing"}
                          style={{ marginLeft: "48px" }}
                        >
                          {testResults[item.provider]?.status === "testing" ? t("Testing...") : t("Test")}
                        </Button>
                      </div>
                      {testResults[item.provider]?.message ? (
                        <Text
                          as="p"
                          size={200}
                          style={{
                            margin: "8px 0 0 0",
                            color: testStatusMessageColor(testResults[item.provider]?.status),
                          }}
                        >
                          {testResults[item.provider]?.status === "success" ||
                          testResults[item.provider]?.status === "testing"
                            ? testResults[item.provider].message
                            : `${testResults[item.provider].message} ${t("Review this API key in your Docker environment configuration.")}`}
                        </Text>
                      ) : null}
                    </div>
                  ))}
                  {webProviderStatus.length === 0 ? (
                    <Text as="p">{t("No provider keys are currently configured in environment.")}</Text>
                  ) : null}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

SettingsApiTab.propTypes = {
  localSettings: PropTypes.object.isRequired,
  onSettingChange: PropTypes.func.isRequired,
  onTestApi: PropTypes.func.isRequired,
  currentUserRole: PropTypes.string,
};

export default SettingsApiTab;
