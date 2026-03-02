import React from "react";
import { Button, Label, Text, Input, Checkbox } from "@fluentui/react-components";
import { Key } from "lucide-react";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

const SettingsDialogApiTab = ({
  localSettings,
  showApiKey,
  apiTestStatus,
  apiTestMessage,
  onSettingChange,
  onShowApiKeyChange,
  onTestApi,
}) => {
  return (
    <div className="tab-content">
      {!isWeb && (
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: 0, marginBottom: "36px" }}>
          <Key size={20} />
          API Configuration
        </Text>
        <div style={{ paddingLeft: "24px" }}>
        <div style={{ marginBottom: '16px' }}>
          <Label htmlFor="api-url" style={{ display: 'block', marginBottom: '6px' }}>
            API URL:
          </Label>
          <Input
            id="api-url"
            type="text"
            value={localSettings.api_url || 'https://openrouter.ai/api/v1'}
            onChange={(e) => onSettingChange('api_url', e.target.value)}
            placeholder={localSettings.use_transrewrt_proxy ? 'http://localhost:6500' : 'https://openrouter.ai/api/v1'}
            style={{ width: 'auto', minWidth: '400px' }}
          />
          {localSettings.use_transrewrt_proxy && (
            <Text as="p" style={{ fontSize: '12px', color: 'var(--colorNeutralForeground3)', marginTop: '4px' }}>
              When using proxy, this is the proxy base URL (e.g. http://localhost:6500).
            </Text>
          )}
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Checkbox
            id="use-transrewrt-proxy"
            checked={!!localSettings.use_transrewrt_proxy}
            onChange={(e) => onSettingChange('use_transrewrt_proxy', e.target.checked)}
          />
          <Label htmlFor="use-transrewrt-proxy" style={{ cursor: 'pointer', marginLeft: '8px' }}>
            Use Transrewrt Proxy
          </Label>
        </div>
        {localSettings.use_transrewrt_proxy && (
          <div style={{ marginBottom: '16px', marginLeft: '24px' }}>
            <Label htmlFor="key-seed" style={{ display: 'block', marginBottom: '6px' }}>
              Key Seed:
            </Label>
            <Input
              id="key-seed"
              type="password"
              value={localSettings.key_seed || ''}
              onChange={(e) => onSettingChange('key_seed', e.target.value)}
              placeholder="Shared secret with the proxy"
              style={{ width: '400px', minWidth: '300px' }}
            />
          </div>
        )}
        <div style={{ marginBottom: '16px' }}>
          <Label htmlFor="api-key" style={{ display: 'block', marginBottom: '6px' }}>
            OpenRouter API Key:
          </Label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Input
              id="api-key"
              type={showApiKey ? 'text' : 'password'}
              value={localSettings.api_key || ''}
              onChange={(e) => onSettingChange('api_key', e.target.value)}
              placeholder="sk-or-..."
              style={{ width: '400px', minWidth: '300px' }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Checkbox
                id="show-api-key"
                checked={showApiKey}
                onChange={(e) => onShowApiKeyChange(e.target.checked)}
              />
              <Label htmlFor="show-api-key" style={{ cursor: 'pointer', margin: 0 }}>
                Show
              </Label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '8px' }}>
          <Button
            appearance="primary"
            onClick={onTestApi}
            disabled={apiTestStatus === 'testing'}
            style={{ width: 'auto' }}
          >
            {apiTestStatus === 'testing' ? 'Testing...' : 'Test API Configuration'}
          </Button>
          {apiTestStatus && (
            <div
              style={{
                marginTop: '8px',
                padding: '8px',
                borderRadius: '4px',
                fontSize: '12px',
                backgroundColor: apiTestStatus === 'success' ? '#d4edda' : '#f8d7da',
                color: apiTestStatus === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${apiTestStatus === 'success' ? '#c3e6cb' : '#f5c6cb'}`
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
        <Text as="p" style={{ marginTop: 0 }}>API is configured on the server.</Text>
      )}
    </div>
  );
};

export default SettingsDialogApiTab;
