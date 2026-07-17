import { Fragment, useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Key, Eye, EyeOff, ExternalLink } from "lucide-react";
import PropTypes from "prop-types";
import webAPI from "../utils/api/webApiClient";
import iconsWithFiles from "../assets/icons_with_files.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { settingsSection, settingsTabContent } from "./settings/settingsLayoutClasses";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

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

function testStatusClass(status) {
  if (status === "success") return "text-green-400";
  if (status === "testing") return "text-foreground";
  return "text-red-400";
}

function formatProviderTestSuccessMessage(successI18n, t) {
  if (!successI18n || typeof successI18n.key !== "string") return null;
  const { key, params } = successI18n;
  if (key === "Local LLM configuration is working.") {
    return t("Local LLM configuration is working.");
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

  if (configured && !isEditing) {
    return (
      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Label className="mb-0">{label}</Label>
          {docUrl ? (
            <button
              type="button"
              onClick={() => onOpenDoc(docUrl)}
              aria-label={docLinkLabel}
              title={docLinkLabel}
              className="inline-flex items-center text-muted-foreground hover:text-foreground p-0"
            >
              <ExternalLink size={13} />
            </button>
          ) : null}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center w-full max-w-[400px] min-h-[32px] px-2 py-1 border border-border rounded text-green-400 font-semibold text-sm">
            {configuredMessage}
          </span>
          <Button variant="outline" size="sm" onClick={onEdit} aria-label={editLabel}>{editLabel}</Button>
          <Button variant="outline" size="sm" onClick={onTest} disabled={testState?.status === "testing"}>
            {testState?.status === "testing" ? "Testing..." : "Test"}
          </Button>
        </div>
        {testState?.message ? (
          <p className={cn("mt-1.5 text-sm", testStatusClass(testState.status))}>
            {testState.message}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="flex items-center gap-1.5 mb-1.5">
        <Label htmlFor={id} className="mb-0">{label}</Label>
        {docUrl ? (
          <button
            type="button"
            onClick={() => onOpenDoc(docUrl)}
            aria-label={docLinkLabel}
            title={docLinkLabel}
            className="inline-flex items-center text-muted-foreground hover:text-foreground p-0"
          >
            <ExternalLink size={13} />
          </button>
        ) : null}
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <div className="relative inline-flex w-full max-w-[400px] min-w-0">
          <Input
            id={id}
            type={showPassword ? "text" : "password"}
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full min-w-0 pe-9"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide" : "Show"}
            className="absolute end-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <Button variant="outline" size="sm" onClick={onSave}>{saveLabel}</Button>
        {configured && (
          <Button variant="ghost" size="sm" onClick={onCancel}>{cancelLabel}</Button>
        )}
        {!configured && (
          <Button variant="outline" size="sm" onClick={onTest} disabled={testState?.status === "testing"}>
            {testState?.status === "testing" ? "Testing..." : "Test"}
          </Button>
        )}
      </div>
      {testState?.message ? (
        <p className={cn("mt-1.5 text-sm", testStatusClass(testState.status))}>
          {testState.message}
        </p>
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
];

const PROVIDER_SECRET_FIELDS_AFTER_CUSTOM = [
  { key: "cerebras_api_key", labelKey: "Cerebras API key", placeholder: "" },
  { key: "nvidia_api_key", labelKey: "NVIDIA API key", placeholder: "nvapi-..." },
  { key: "alibaba_api_key", labelKey: "Alibaba Cloud API key", placeholder: "" },
  { key: "apifun_api_key", labelKey: "apikey.fun API key", placeholder: "" },
];

const CUSTOM_PROVIDER_KEY = "custom_provider_api_key";
const CUSTOM_PROVIDER_NAME_KEY = "custom_provider_name";
const CUSTOM_PROVIDER_URL_KEY = "custom_provider_url";
const NVIDIA_BUILD_URL = "https://build.nvidia.com/";

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
  const savedLocalLlmBaseUrl = localSettings.local_llm_base_url ?? "http://localhost:11434/v1";
  const [localLlmDraft, setLocalLlmDraft] = useState(savedLocalLlmBaseUrl);

  const providerByKey = useMemo(() => {
    const map = {};
    for (const { key } of [...PROVIDER_SECRET_FIELDS, ...PROVIDER_SECRET_FIELDS_AFTER_CUSTOM]) {
      map[key] = key.replace("_api_key", "");
    }
    map[CUSTOM_PROVIDER_KEY] = "custom";
    return map;
  }, []);

  const providerDocUrlByKey = useMemo(() => {
    const out = {};
    for (const { key } of [...PROVIDER_SECRET_FIELDS, ...PROVIDER_SECRET_FIELDS_AFTER_CUSTOM]) {
      const provider = key.replace("_api_key", "");
      out[key] = findProviderUrlById(provider, iconsWithFiles);
    }
    return out;
  }, []);

  const savedCustomName = String(localSettings.custom_provider_name ?? "").trim();
  const savedCustomUrl = String(localSettings.custom_provider_url ?? "").trim();
  const [customNameDraft, setCustomNameDraft] = useState(savedCustomName);
  const [customUrlDraft, setCustomUrlDraft] = useState(savedCustomUrl);
  const customKeyConfigured = !!localSettings.custom_provider_api_key_configured;
  const customFullyConfigured =
    !!savedCustomName && !!savedCustomUrl && customKeyConfigured;

  useEffect(() => {
    if (!isWeb || currentUserRole !== "admin") return;
    webAPI
      .getProviderKeysStatus()
      .then((rows) => setWebProviderStatus(rows.filter((r) => r.provider !== "local")))
      .catch(() => setWebProviderStatus([]));
  }, [currentUserRole]);

  useEffect(() => {
    setLocalLlmDraft(savedLocalLlmBaseUrl);
  }, [savedLocalLlmBaseUrl]);

  useEffect(() => {
    setCustomNameDraft(savedCustomName);
  }, [savedCustomName]);

  useEffect(() => {
    setCustomUrlDraft(savedCustomUrl);
  }, [savedCustomUrl]);

  const runProviderTest = async (
    provider: string,
    overrideValue?: string,
    overrideUrl?: string,
    overrideName?: string,
  ) => {
    setTestResults((prev) => ({
      ...prev,
      [provider]: { status: "testing", message: t("Testing...") },
    }));
    const result = await onTestApi({ provider, overrideValue, overrideUrl, overrideName });
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

  const renderSecretField = ({ key, labelKey, placeholder }) => {
    const configured = !!localSettings[`${key}_configured`];
    const isEditing = editingKey === key;
    const provider = providerByKey[key];
    const draftValue = draftValues[key] ?? "";
    const overrideValue =
      isEditing || !configured ? (draftValue ?? "").trim() : undefined;
    return (
      <Fragment key={key}>
      <SecretField
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
      </Fragment>
    );
  };

  const runCustomProviderTest = () => {
    const name = (customNameDraft ?? "").trim() || savedCustomName;
    const url = (customUrlDraft ?? "").trim() || savedCustomUrl;
    const isEditingKey = editingKey === CUSTOM_PROVIDER_KEY;
    const keyDraft = draftValues[CUSTOM_PROVIDER_KEY] ?? "";
    const overrideValue =
      isEditingKey || !customKeyConfigured ? (keyDraft ?? "").trim() : undefined;
    if (!name || !url || (overrideValue !== undefined && !overrideValue)) {
      setTestResults((prev) => ({
        ...prev,
        custom: {
          status: "error",
          message: t("Custom provider name, URL, and API key are all required."),
        },
      }));
      return;
    }
    if (overrideValue === undefined && !customKeyConfigured) {
      setTestResults((prev) => ({
        ...prev,
        custom: {
          status: "error",
          message: t("Custom provider name, URL, and API key are all required."),
        },
      }));
      return;
    }
    runProviderTest("custom", overrideValue, url, name);
  };

  const customKeyDraft = draftValues[CUSTOM_PROVIDER_KEY] ?? "";
  const isEditingCustomKey = editingKey === CUSTOM_PROVIDER_KEY;

  const renderCustomProviderSection = () => (
    <div className="mb-4">
      <h4 className="text-sm font-semibold mt-0 mb-4">
        {t("Custom OpenAI-compatible provider")}
      </h4>
      {customFullyConfigured ? (
        <p className="mb-3 text-sm text-green-400 font-semibold">
          {t("Custom provider is configured")}
        </p>
      ) : null}
      <div className="flex flex-col gap-0">
        <div className="mb-4">
          <Label htmlFor="custom-provider-name" className="mb-1.5 block">
            {t("Custom provider name")}
          </Label>
          <Input
            id="custom-provider-name"
            type="text"
            value={customNameDraft}
            onChange={(e) => setCustomNameDraft(e.target.value)}
            onBlur={() => {
              const next = (customNameDraft ?? "").trim();
              if (next !== savedCustomName) {
                onSettingChange(CUSTOM_PROVIDER_NAME_KEY, next);
              }
            }}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              e.currentTarget.blur();
            }}
            placeholder="NVIDIA"
            className="w-full max-w-[400px] min-w-0"
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Label htmlFor="custom-provider-url" className="mb-0">
              {t("Custom provider URL")}
            </Label>
            <button
              type="button"
              onClick={() => openExternalUrl(NVIDIA_BUILD_URL)}
              aria-label={t("Open NVIDIA Build website")}
              title={t("Open NVIDIA Build website")}
              className="inline-flex items-center text-muted-foreground hover:text-foreground p-0"
            >
              <ExternalLink size={13} />
            </button>
          </div>
          <Input
            id="custom-provider-url"
            type="text"
            value={customUrlDraft}
            onChange={(e) => setCustomUrlDraft(e.target.value)}
            onBlur={() => {
              const next = (customUrlDraft ?? "").trim();
              if (next !== savedCustomUrl) {
                onSettingChange(CUSTOM_PROVIDER_URL_KEY, next);
              }
            }}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              e.currentTarget.blur();
            }}
            placeholder="https://integrate.api.nvidia.com/v1"
            className="w-full max-w-[400px] min-w-0"
          />
        </div>
        <SecretField
          id={`api-${CUSTOM_PROVIDER_KEY}`}
          label={t("Custom API key")}
          placeholder=""
          configured={customKeyConfigured}
          value={customKeyConfigured && !isEditingCustomKey ? "" : customKeyDraft}
          onChange={(nextValue) =>
            setDraftValues((prev) => ({ ...prev, [CUSTOM_PROVIDER_KEY]: nextValue }))
          }
          onSave={() => {
            const trimmed = (customKeyDraft ?? "").trim();
            onSettingChange(CUSTOM_PROVIDER_KEY, trimmed);
            setDraftValues((prev) => ({ ...prev, [CUSTOM_PROVIDER_KEY]: "" }));
            setEditingKey(null);
          }}
          onCancel={() => {
            setDraftValues((prev) => ({ ...prev, [CUSTOM_PROVIDER_KEY]: "" }));
            setEditingKey(null);
          }}
          onEdit={() => {
            setEditingKey(CUSTOM_PROVIDER_KEY);
            setDraftValues((prev) => ({ ...prev, [CUSTOM_PROVIDER_KEY]: "" }));
            setTestResults((prev) => {
              const next = { ...prev };
              delete next.custom;
              return next;
            });
          }}
          onTest={runCustomProviderTest}
          testState={testResults.custom}
          saveLabel={t("Save")}
          cancelLabel={t("Cancel")}
          configuredMessage={t("API key is configured")}
          editLabel={t("Edit")}
          isEditing={isEditingCustomKey}
          docUrl={NVIDIA_BUILD_URL}
          onOpenDoc={openExternalUrl}
          docLinkLabel={t("Open NVIDIA Build website")}
        />
      </div>
    </div>
  );

  const renderLocalLlmSection = () => (
    <div className="mb-4">
      <div className="flex items-center gap-1.5 mb-1.5">
        <Label htmlFor="local-llm-base-url" className="mb-0">{t("Local LLM base URL")}</Label>
      </div>
      <div className="flex items-start gap-2 flex-wrap">
        <div className="flex flex-col">
          <Input
            id="local-llm-base-url"
            type="text"
            value={localLlmDraft}
            onChange={(e) => setLocalLlmDraft(e.target.value)}
            onBlur={() => {
              const next = (localLlmDraft ?? "").trim();
              if (next !== savedLocalLlmBaseUrl) {
                onSettingChange("local_llm_base_url", next);
              }
            }}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              e.currentTarget.blur();
            }}
            placeholder="http://localhost:11434/v1"
            className="w-full max-w-[400px] min-w-0"
          />
          <p className="mt-1.5 mb-0 text-xs text-muted-foreground">
            {t(
              "Enter the full OpenAI-compatible API base URL (include the path, e.g. Ollama http://localhost:11434/v1, LM Studio http://localhost:1234/v1, llama.cpp http://localhost:8080/v1).",
            )}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => runProviderTest("local", (localLlmDraft ?? "").trim())}
          disabled={testResults.local?.status === "testing"}
        >
          {testResults.local?.status === "testing" ? t("Testing...") : t("Test")}
        </Button>
      </div>
      {testResults.local?.message ? (
        <p className={cn("mt-1.5 text-sm", testStatusClass(testResults.local?.status))}>
          {testResults.local.message}
        </p>
      ) : null}
    </div>
  );

  return (
    <div className={settingsTabContent}>
      {!isWeb && (
        <div className={settingsSection}>
          <h3 className="flex items-center gap-2 text-base font-semibold mt-0 mb-9">
            <Key size={18} />
            {t("API Configuration")}
          </h3>

          <div className="ps-6">
            <p className="block mb-5 max-w-[560px] text-sm">{t("Add API keys for each provider you use.")}</p>

            <div className="grid gap-x-6 w-full" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))" }}>
              {PROVIDER_SECRET_FIELDS.map((field) => renderSecretField(field))}
              {PROVIDER_SECRET_FIELDS_AFTER_CUSTOM.map((field) => renderSecretField(field))}
            </div>

            <div
              className="grid gap-x-6 gap-y-4 w-full mt-2"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))" }}
            >
              {renderCustomProviderSection()}
              {renderLocalLlmSection()}
            </div>

            <div className="mt-6 p-3 bg-muted rounded-md max-w-[800px]">
              <p className="m-0 text-sm">
                💡 <strong>{t("Don't want to pay?")}</strong>{" "}
                {t(
                  "Generate a free API key with Openrouter, Cerebras, Google, Groq, Mistral AI, NVIDIA, or run models locally with Ollama, LM Studio, llama.cpp, or another OpenAI-compatible server — no API key required.",
                )}
              </p>
            </div>
          </div>
        </div>
      )}
      {isWeb && (
        <div className={settingsSection}>
          <h3 className="flex items-center gap-2 text-base font-semibold mt-0 mb-9">
            <Key size={18} />
            {t("API Configuration")}
          </h3>
          <div className="ps-6">
            {currentUserRole !== "admin" ? (
              <p className="text-sm">{t("Admin access is required.")}</p>
            ) : (
              <>
                <p className="block mb-5 max-w-[560px] text-sm">{t("These API keys are configured from Docker environment variables.")}</p>
                <div className="grid grid-cols-2 gap-4 w-full max-w-5xl">
                  {webProviderStatus.map((item) => (
                    <div key={item.provider} className="border border-border rounded-lg p-[10px_12px]">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="font-semibold text-sm">{item.label || item.provider} {" • "}</div>
                          <div className={cn("text-xs", item.configured ? "text-green-400" : "text-muted-foreground")}>
                            {item.configured
                              ? t("API key is configured")
                              : t("API key is not configured in environment")}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => runProviderTest(item.provider)}
                          disabled={!item.configured || testResults[item.provider]?.status === "testing"}
                          className="ms-12"
                        >
                          {testResults[item.provider]?.status === "testing" ? t("Testing...") : t("Test")}
                        </Button>
                      </div>
                      {testResults[item.provider]?.message ? (
                        <p className={cn("mt-2 mb-0 text-sm", testStatusClass(testResults[item.provider]?.status))}>
                          {testResults[item.provider]?.status === "success" ||
                          testResults[item.provider]?.status === "testing"
                            ? testResults[item.provider].message
                            : `${testResults[item.provider].message} ${t("Review this API key in your Docker environment configuration.")}`}
                        </p>
                      ) : null}
                    </div>
                  ))}
                  {webProviderStatus.length === 0 ? (
                    <p className="text-sm">{t("No provider keys are currently configured in environment.")}</p>
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
