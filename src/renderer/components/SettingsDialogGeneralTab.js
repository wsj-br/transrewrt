import React, { useState, useEffect } from 'react';
import { Button, tokens, Label, Text, Dropdown, Option, Input, SpinButton, Checkbox, Popover, PopoverSurface, PopoverTrigger, ColorPicker, ColorSlider, ColorArea, makeStyles } from '@fluentui/react-components';
import { Key20Regular, Money20Regular, Settings20Regular } from '@fluentui/react-icons';
import { TinyColor } from '@ctrl/tinycolor';


const useColorPickerStyles = makeStyles({
  colorPickerRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  colorPickerSliders: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  previewColor: {
    width: '50px',
    height: '50px',
    borderRadius: '4px',
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    flexShrink: 0,
  },
  colorPickerButtons: {
    display: 'flex',
    gap: '8px',
    marginTop: '12px',
  },
});

const useFormStyles = makeStyles({
  formControl: {
    width: '100%',
    '& .fui-Dropdown__trigger': {
      fontSize: '14px',
      minHeight: '32px',
      height: '32px',
    },
    '& .fui-SpinButton__input': {
      fontSize: '14px',
      minHeight: '32px',
      height: '32px',
    },
    '& .fui-SpinButton__controls': {
      height: '32px',
    },
  },
});

// Helper function to convert hex to HSV
const hexToHsv = (hex) => {
  const color = new TinyColor(hex);
  const hsv = color.toHsv();
  return { h: hsv.h, s: hsv.s, v: hsv.v, a: hsv.a ?? 1 };
};

// Helper function to convert HSV to hex
const hsvToHex = (hsv) => {
  return new TinyColor({ h: hsv.h, s: hsv.s, v: hsv.v, a: hsv.a ?? 1 }).toHexString();
};

// ColorPickerPopup Component
const ColorPickerPopup = ({ color, onChange, label }) => {
  const styles = useColorPickerStyles();
  const [previewColor, setPreviewColor] = useState(hexToHsv(color || '#ffffff'));
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleColorChange = (_, data) => {
    setPreviewColor({ ...data.color, a: data.color.a ?? 1 });
  };

  const handleOk = () => {
    const hexColor = hsvToHex(previewColor);
    onChange(hexColor);
    setPopoverOpen(false);
  };

  const handleCancel = () => {
    // Reset preview to current color
    setPreviewColor(hexToHsv(color || '#ffffff')); 
    setPopoverOpen(false);
  };

  // Update preview when color prop changes
  useEffect(() => {
    if (!popoverOpen) {
      setPreviewColor(hexToHsv(color || '#ffffff'));
    }
  }, [color, popoverOpen]);

  const currentColorHex = color || '#ffffff';
  const previewColorHex = new TinyColor(previewColor).toHexString();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Label htmlFor={`${label}-color-picker`} style={{ margin: 0 }}>
        <span>{label}:</span>
      </Label>
      <Popover
        open={popoverOpen}
        trapFocus
        onOpenChange={(_, data) => setPopoverOpen(data.open)}
      >
        <PopoverTrigger disableButtonEnhancement>
          <Button
            id={`${label}-color-picker`}
            appearance="transparent"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '4px',
                backgroundColor: currentColorHex,
                border: `1px solid ${tokens.colorNeutralStroke1}`,
                flexShrink: 0,
              }}
            />
          </Button>
        </PopoverTrigger>

        <PopoverSurface style={{ padding: '16px', minWidth: '300px' }}>
          <ColorPicker color={previewColor} onColorChange={handleColorChange}>
            <ColorArea
              inputX={{ 'aria-label': 'Saturation' }}
              inputY={{ 'aria-label': 'Brightness' }}
            />
            <div className={styles.colorPickerRow}>
              <div className={styles.colorPickerSliders}>
                <ColorSlider aria-label="Hue" />
              </div>
              <div
                className={styles.previewColor}
                style={{
                  backgroundColor: previewColorHex,
                }}
              />
            </div>
          </ColorPicker>
          <div className={styles.colorPickerButtons}>
            <Button
              appearance="primary"
              onClick={handleOk}
            >
              Ok
            </Button>
            <Button
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </PopoverSurface>
      </Popover>
    </div>
  );
};

const SettingsDialogGeneralTab = ({
  localSettings,
  showApiKey,
  apiTestStatus,
  apiTestMessage,
  onSettingChange,
  onShowApiKeyChange,
  onTestApi,
}) => {
  const formStyles = useFormStyles();
  return (
    <div className="tab-content">
      {/* API Configuration Section */}
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '16px' }}>
          <Key20Regular />
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
            style={{ width: '100%' }}
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
              style={{ flex: 1 }}
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
        <div className="form-group" style={{ marginTop: '8px' }}>
          <Button
            appearance="primary"
            onClick={onTestApi}
            disabled={apiTestStatus === 'testing'}
            style={{ width: '100%' }}
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
          <Money20Regular />
          Cost Tracking
        </Text>
        <div className="cost-row">
          <span>Total Cost: ${parseFloat(localSettings.total_cost || 0).toFixed(6)}</span>
          <Button
            appearance="secondary"
            size="small"
            onClick={() => onSettingChange('total_cost', 0)}
          >
            Reset Cost
          </Button>
        </div>
      </div>

      {/* Behavior Section */}
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '16px' }}>
          <Settings20Regular />
          Behavior
        </Text>
        <div style={{ marginBottom: '16px' }}>
          <Label htmlFor="enter-behavior" style={{ display: 'block', marginBottom: '6px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span className="key-code"
                style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  border: '2px solid #666',
                  borderRadius: '6px',
                  backgroundColor: '#f0f0f0',
                  color: '#333',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1), inset 0 -2px 0 rgba(0,0,0,0.1)',
                  textTransform: 'uppercase'
                }}
              >
                ENTER
              </span> <span> Key Behavior:</span>
            </span>
          </Label>
          <Dropdown
            id="enter-behavior"
            value={localSettings.enter_behavior || 'Translate'}
            selectedOptions={[(localSettings.enter_behavior || 'Translate')]}
            onOptionSelect={(e, data) => onSettingChange('enter_behavior', data.optionValue)}
            style={{ width: '100%' }}
          >
            <Option value="Translate">Translate / Rewrite when pressed</Option>
            <Option value="Newline">Insert a new line</Option>
            <Option value="Shift-Translate">Shift+ENTER to translate</Option>
          </Dropdown>
        </div>
        <div className="checkbox-group" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Checkbox
              checked={localSettings.auto_copy || false}
              onChange={(e) => onSettingChange('auto_copy', e.target.checked)}
              label="Auto-copy result to clipboard"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Checkbox
              checked={localSettings.real_time_translation || false}
              onChange={(e) => onSettingChange('real_time_translation', e.target.checked)}
              label="Real-time translation (while typing)"
            />
          </div>
        </div>
      </div>

      {/* Appearance Section */}
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '16px' }}>
          Appearance
        </Text>
        <div className="form-row">
          <div className="form-group">
            <Label htmlFor="font-family">Font Family:</Label>
            <Dropdown
              id="font-family"
              value={localSettings.font_family || 'Arial'}
              selectedOptions={[(localSettings.font_family || 'Arial')]}
              onOptionSelect={(e, data) => onSettingChange('font_family', data.optionValue)}
              className={formStyles.formControl}
            >
              <Option value="Arial" style={{ fontFamily: 'Arial' }}>Arial</Option>
              <Option value="Segoe UI" style={{ fontFamily: 'Segoe UI' }}>Segoe UI</Option>
              <Option value="Verdana" style={{ fontFamily: 'Verdana' }}>Verdana</Option>
              <Option value="Consolas" style={{ fontFamily: 'Consolas' }}>Consolas</Option>
              <Option value="Times New Roman" style={{ fontFamily: 'Times New Roman' }}>Times New Roman</Option>
            </Dropdown>
          </div>
          <div className="form-group narrow">
            <Label htmlFor="font-size">Size:</Label>
            <SpinButton
              id="font-size"
              value={localSettings.font_size || 14}
              onChange={(e, data) => {
                if (data.value !== undefined) {
                  onSettingChange('font_size', parseInt(data.value));
                }
              }}
              className={formStyles.formControl}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <ColorPickerPopup
              color={localSettings.input_text_color || '#ffffff'}
              onChange={(hexColor) => onSettingChange('input_text_color', hexColor)}
              label="Input Color"
            />
            <div
              style={{
                width: '25vw',
                marginTop: '8px',
                color: localSettings.input_text_color || '#ffffff',
                wordWrap: 'break-word',
                fontFamily: localSettings.font_family || 'Arial',
                fontSize: `${localSettings.font_size || 14}px`,
                lineHeight: '1.5',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nunc velit. Class aptent taciti.
            </div>
          </div>
          <div className="form-group">
            <ColorPickerPopup
              color={localSettings.output_text_color || '#ffffff'}
              onChange={(hexColor) => onSettingChange('output_text_color', hexColor)}
              label="Output Color"
            />
            <div
              style={{
                width: '25vw',
                marginTop: '8px',
                color: localSettings.output_text_color || '#ffffff',
                wordWrap: 'break-word',
                fontFamily: localSettings.font_family || 'Arial',
                fontSize: `${localSettings.font_size || 14}px`,
                lineHeight: '1.5',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nunc velit. Class aptent taciti.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDialogGeneralTab;

