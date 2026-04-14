import { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, Text, Input } from "@fluentui/react-components";
import { Key, Eye, EyeOff, ExternalLink } from "lucide-react";
import PropTypes from "prop-types";
import webAPI from "../utils/api/webApiClient";
import iconsWithFiles from "../assets/icons_with_files.json";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;
const OLLAMA_URL = "https://ollama.com/";

const normalizeProviderKey = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

function findProviderUrlById(providerId, providers) {
  const needle = normalizeProviderKey(providerId);
  if (!needle) return "";
  const match = (providers || []).find(
    (entry) => normalizeProviderKey(entry?.provider_id) === needle,
  );
  return match?.url || "";
}

function openExternalUrl(url) {
  if (!url) return;
  if (window.electronAPI?.openExternalUrl) {
    window.electronAPI.openExternalUrl(url).catch(() => {});
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

/** Success/error use semantic colours; in-progress uses regular body colour. */
function testStatusMessageColor(status) {
  if (status === "success") return "var(--colorPaletteGreenForeground1)";
  if (status === "testing") return "var(--colorNeutralForeground1)";
  return "var(--colorPaletteRedForeground1)";
}

/**
 * Localized provider test success line (keys must match src/shared/llm/index.js PROVIDER_TEST_SUCCESS_I18N).
 * @param {{ key: string, params?: Record<string, string> } | undefined} successI18n
 * @param {(key: string) => string} t
 * @returns {string | null}
 */
function formatProviderTestSuccessMessage(successI18n, t) {
  if (!successI18n || typeof successI18n.key !== "string") return null;
  const { key, params } = successI18n;
  if (key === "Ollama configuration is working.") {
    return t("Ollama configuration is working.");
  }
  if (key === "{{provider}} credentials are valid.") {
    return t("{{provider}} credentials are valid.", params || {});
  }
  return null;
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
  docUrl,
  onOpenDoc,
  docLinkLabel,
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
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
          <Label style={{ display: "block", marginBottom: 0 }}>{label}</Label>
          {docUrl ? (
            <button
              type="button"
              onClick={() => onOpenDoc(docUrl)}
              aria-label={docLinkLabel}
              title={docLinkLabel}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--colorNeutralForeground2)",
                padding: 0,
              }}
            >
              <ExternalLink size={14} />
            </button>
          ) : null}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <span style={inputBoxStyle}>
            <span style={configuredMessageStyle}>
              {configuredMessage}
            </span>
          </span>
          <Button
            appearance="secondary"
            onClick={onEdit}
            aria-label={editLabel}
            size="small"
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
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
        <Label htmlFor={id} style={{ display: "block", marginBottom: 0 }}>
          {label}
        </Label>
        {docUrl ? (
          <button
            type="button"
            onClick={() => onOpenDoc(docUrl)}
            aria-label={docLinkLabel}
            title={docLinkLabel}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--colorNeutralForeground2)",
              padding: 0,
            }}
          >
            <ExternalLink size={14} />
          </button>
        ) : null}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <div style={{ position: "relative", display: "inline-flex" }}>
          <Input
            id={id}
            type={showPassword ? "text" : "password"}
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            style={{ width: "400px", minWidth: "300px", paddingInlineEnd: "36px" }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide" : "Show"}
            style={{
              position: "absolute",
              insetInlineEnd: "8px",
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
        <Button appearance="secondary" onClick={onSave} size="small">
          {saveLabel}
        </Button>
        {configured && (
          <Button appearance="subtle" onClick={onCancel} size="small">
            {cancelLabel}
          </Button>
        )}
        {!configured && (
          <Button
            appearance="secondary"
            onClick={onTest}
            disabled={testState?.status === "testing"}
            size="small"
          >
            {testState?.status === "testing" ? "Testing..." : "Test"}
          </Button>
        )}
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
  docUrl: PropTypes.string,
  onOpenDoc: PropTypes.func,
  docLinkLabel: PropTypes.string,
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
  { key: "cerebras_api_key", labelKey: "Cerebras API key", placeholder: "" },
];

const SettingsApiTab = ({
  localSettings,
  onSettingChange,
  onTestApi,
  currentUserRole,
}) => {
  const { t } = useTranslation();
  const [editingKey, setEditingKey] = useState(null);
  const [draftValues, setDraftValues] = useState({});
  const [webProviderStatus, setWebProviderStatus] = useState([]);
  const [testResults, setTestResults] = useState({});
  const savedOllamaBaseUrl = localSettings.ollama_base_url ?? "http://localhost:11434";
  const [ollamaDraft, setOllamaDraft] = useState(savedOllamaBaseUrl);

  const providerByKey = useMemo(() => {
    const map = {};
    for (const { key } of PROVIDER_SECRET_FIELDS) {
      map[key] = key.replace("_api_key", "");
    }
    return map;
  }, []);

  const providerDocUrlByKey = useMemo(() => {
    const out = {};
    for (const { key } of PROVIDER_SECRET_FIELDS) {
      const provider = key.replace("_api_key", "");
      out[key] = findProviderUrlById(provider, iconsWithFiles);
    }
    return out;
  }, []);

  useEffect(() => {
    if (!isWeb || currentUserRole !== "admin") return;
    webAPI
      .getProviderKeysStatus()
      .then((rows) => setWebProviderStatus(rows.filter((r) => r.provider !== "ollama")))
      .catch(() => setWebProviderStatus([]));
  }, [currentUserRole]);

  useEffect(() => {
    setOllamaDraft(savedOllamaBaseUrl);
  }, [savedOllamaBaseUrl]);

  const runProviderTest = async (provider, overrideValue) => {
    setTestResults((prev) => ({
      ...prev,
      [provider]: { status: "testing", message: t("Testing...") },
    }));
    const result = await onTestApi({ provider, overrideValue });
    let message = result.message || "";
    if (result.status === "success") {
      const translated = formatProviderTestSuccessMessage(result.successI18n, t);
      if (translated != null) message = translated;
    }
    setTestResults((prev) => ({
      ...prev,
      [provider]: { status: result.status, message },
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

          <div style={{ paddingInlineStart: "24px" }}>
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
                const draftValue = draftValues[key] ?? "";
                const overrideValue =
                  isEditing || !configured ? (draftValue ?? "").trim() : undefined;
                return (
                  <SecretField
                    key={key}
                    id={`api-${key}`}
                    label={t(labelKey)}
                    placeholder={placeholder}
                    configured={configured}
                    value={configured && !isEditing ? "" : draftValue}
                    onChange={(nextValue) =>
                      setDraftValues((prev) => ({ ...prev, [key]: nextValue }))
                    }
                    onSave={() => {
                      const trimmed = (draftValue ?? "").trim();
                      onSettingChange(key, trimmed);
                      setDraftValues((prev) => ({ ...prev, [key]: "" }));
                      setEditingKey(null);
                    }}
                    onCancel={() => {
                      setDraftValues((prev) => ({ ...prev, [key]: "" }));
                      setEditingKey(null);
                    }}
                    onEdit={() => {
                      setEditingKey(key);
                      setDraftValues((prev) => ({ ...prev, [key]: "" }));
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
                    docUrl={providerDocUrlByKey[key]}
                    onOpenDoc={openExternalUrl}
                    docLinkLabel={t("Open provider website")}
                  />
                );
              })}
            </div>

            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                <Label htmlFor="ollama-base-url" style={{ display: "block", marginBottom: 0 }}>
                  {t("Ollama base URL")}
                </Label>
                <button
                  type="button"
                  onClick={() => openExternalUrl(OLLAMA_URL)}
                  aria-label={t("Open Ollama website")}
                  title={t("Open Ollama website")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--colorNeutralForeground2)",
                    padding: 0,
                  }}
                >
                  <ExternalLink size={14} />
                </button>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Input
                    id="ollama-base-url"
                    type="text"
                    value={ollamaDraft}
                    onChange={(e) => setOllamaDraft(e.target.value)}
                    onBlur={() => {
                      const next = (ollamaDraft ?? "").trim();
                      if (next !== savedOllamaBaseUrl) {
                        onSettingChange("ollama_base_url", next);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key !== "Enter") return;
                      e.currentTarget.blur();
                    }}
                    placeholder="http://localhost:11434"
                    style={{ width: "400px", minWidth: "300px" }}
                  />
                  <Text
                    as="p"
                    size={200}
                    style={{ marginTop: "6px", marginBottom: 0, color: "var(--colorNeutralForeground3)" }}
                  >
                    {t("Use http://localhost:11434 if you are running Ollama on this machine.")}
                  </Text>
                </div>
                <Button
                  appearance="secondary"
                  onClick={() => runProviderTest("ollama", (ollamaDraft ?? "").trim())}
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
                💡 <strong>{t("Don't want to pay?")}</strong> {t("Generate a free API key with Openrouter, Cerebras, Google, Groq, Mistral AI, or install Ollama to run models locally without any API key.")}
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
          <div style={{ paddingInlineStart: "24px" }}>
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
                          style={{ marginInlineStart: "48px" }}
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
