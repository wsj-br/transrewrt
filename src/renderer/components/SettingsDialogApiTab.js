import React, { useState, useEffect } from 'react';
import { Button, tokens, Label, Text, Input, Checkbox } from '@fluentui/react-components';
import { Key, DollarSign, Copy } from 'lucide-react';

const SettingsDialogApiTab = ({
  localSettings,
  showApiKey,
  apiTestStatus,
  apiTestMessage,
  onSettingChange,
  onShowApiKeyChange,
  onTestApi,
}) => {
  const handleCopyCost = () => {
    const cost = parseFloat(localSettings.total_cost || 0).toFixed(6);
    navigator.clipboard.writeText(cost);
  };

  return (
    <div className="tab-content">
      {/* API Configuration Section */}
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '16px' }}>
          <Key size={20} />
          API Configuration
        </Text>
        <div style={{ marginBottom: '16px' }}>
          <Label htmlFor="api-url" style={{ display: 'block', marginBottom: '6px' }}>
            API URL:
          </Label>
          <Input
            id="api-url"
            type="text"
            value={localSettings.api_url || 'https://openrouter.ai/api/v1'}
            onChange={(e) => onSettingChange('api_url', e.target.value)}
            placeholder="https://openrouter.ai/api/v1"
            style={{ width: 'auto', minWidth: '400px' }}
          />
        </div>
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

      {/* Cost Tracking Section */}
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '16px' }}>
          <DollarSign size={20} />
          Cost Tracking
        </Text>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '16px', fontWeight: 600 }}>Total Cost:</span>
            <span style={{ fontSize: '18px', fontWeight: 700, color: tokens.colorStatusSuccessForeground1 }}>
              ${parseFloat(localSettings.total_cost || 0).toFixed(6)}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Button
              appearance="secondary"
              size="small"
              onClick={handleCopyCost}
              icon={<Copy size={14} />}
            >
              Copy Value
            </Button>
            <Button
              appearance="secondary"
              size="small"
              onClick={() => onSettingChange('total_cost', 0)}
            >
              Reset Cost
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDialogApiTab;
