import React, { useState, useEffect } from 'react';
import { Button, tokens, Label, Text, Dropdown, Option, Radio, RadioGroup, Input, SpinButton, Checkbox, Popover, PopoverSurface, PopoverTrigger, ColorPicker, ColorSlider, ColorArea, makeStyles } from '@fluentui/react-components';
import { Settings, Palette, ClipboardCheck, RefreshCw } from 'lucide-react';
import { TinyColor } from '@ctrl/tinycolor';

const DEFAULT_FONT = 'Verdana';

const FONT_OPTIONS = [
  { type: 'header', value: '__sans__', label: '— Sans-serif —' },
  { type: 'font', value: 'system-ui', label: 'system-ui' },
  { type: 'font', value: 'Segoe UI', label: 'Segoe UI' },
  { type: 'font', value: 'Verdana', label: 'Verdana' },
  { type: 'header', value: '__serif__', label: '— Serif —' },
  { type: 'font', value: 'Georgia', label: 'Georgia' },
  { type: 'font', value: 'Times New Roman', label: 'Times New Roman' },
  { type: 'font', value: 'Cambria', label: 'Cambria' },
  { type: 'header', value: '__mono__', label: '— Monospace —' },
  { type: 'font', value: 'ui-monospace', label: 'ui-monospace' },
  { type: 'font', value: 'Consolas', label: 'Consolas' },
  { type: 'font', value: 'Menlo', label: 'Menlo' },
];

const FONT_VALUES = FONT_OPTIONS.filter((o) => o.type === 'font').map((o) => o.value);

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

// ColorPickerPopup Component remains unchanged (copy from previous version with Palette icon fixes if needed)
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

/** Normalize to the two supported behaviors; map legacy values for existing configs. */
function normalizeEnterBehavior(value) {
  if (value === "Shift-Execute" || value === "Shift-Translate" || value === "Newline") return "Shift-Execute";
  return "Execute";
}

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

// Helper functions for color conversion
const hexToHsv = (hex) => {
  const color = new TinyColor(hex);
  const hsv = color.toHsv();
  return { h: hsv.h, s: hsv.s, v: hsv.v, a: hsv.a ?? 1 };
};

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
    setPreviewColor(hexToHsv(color || '#ffffff'));
    setPopoverOpen(false);
  };

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
  onSettingChange,
}) => {
  const formStyles = useFormStyles();

  return (
    <div className="tab-content">
      {/* Behavior Section */}
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '36px' }}>
          <Settings size={20} />
          Behavior
        </Text>
        <div style={{ paddingLeft: '24px' }}>
        <div style={{ marginBottom: '16px' }}>
          <Label style={{ display: 'block', marginBottom: '6px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span
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
          <RadioGroup
            id="enter-behavior"
            value={normalizeEnterBehavior(localSettings.enter_behavior)}
            onChange={(e, data) => onSettingChange('enter_behavior', data.value)}
            layout="vertical"
            style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', marginLeft: '32px' }}
          >
            <Radio value="Execute" label="ENTER to translate / rewrite" />
            <Radio value="Shift-Execute" label="SHIFT+ENTER to translate / rewrite" />
          </RadioGroup>
        </div>
        <div className="checkbox-group" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Checkbox
              checked={localSettings.auto_translate_on_paste !== false}
              onChange={(e) => onSettingChange('auto_translate_on_paste', e.target.checked)}
            />
            <Label style={{ margin: 0 }}>Auto-translate on paste</Label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Checkbox
              checked={localSettings.auto_copy || false}
              onChange={(e) => onSettingChange('auto_copy', e.target.checked)}
              icon={<ClipboardCheck size={16} />}
            />
            <Label style={{ margin: 0 }}>Auto-copy result to clipboard</Label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Checkbox
              checked={localSettings.real_time_translation || false}
              onChange={(e) => onSettingChange('real_time_translation', e.target.checked)}
              icon={<RefreshCw size={16} />}
            />
            <Label style={{ margin: 0 }}>Real-time translation (while typing)</Label>
          </div>
          <div style={{ marginLeft: '48px', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Label htmlFor="real-time-delay" style={{ margin: 0, whiteSpace: 'nowrap' }}>Timeout (ms):</Label>
            <SpinButton
              id="real-time-delay"
              value={localSettings.real_time_delay || 1000}
              onChange={(e, data) => {
                const value = parseInt(data.value);
                if (!isNaN(value) && value >= 0) {
                  onSettingChange('real_time_delay', value);
                }
              }}
              min={0}
              step={100}
              style={{ width: '120px' }}
            />
          </div>
        </div>
        </div>
      </div>

      {/* Appearance Section */}
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '36px' }}>
          <Palette size={20} />
          Appearance
        </Text>
        <div style={{ paddingLeft: '24px' }}>
        {isWeb && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <Checkbox
              id="web-margin"
              checked={localSettings.web_margin !== false}
              onChange={(e) => onSettingChange('web_margin', e.target.checked)}
            />
            <Label htmlFor="web-margin" style={{ cursor: 'pointer', margin: 0  }}>
              show a margin around the app
            </Label>
          </div>
        )}
        <div className="form-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
            <Label htmlFor="font-family" style={{ margin: 0, whiteSpace: 'nowrap' }}>Font Family:</Label>
            <Dropdown
              id="font-family"
              appearance="underline"
              value={localSettings.font_family || DEFAULT_FONT}
              selectedOptions={[(localSettings.font_family || DEFAULT_FONT)]}
              onOptionSelect={(e, data) => {
                const v = data.optionValue;
                if (v && FONT_VALUES.includes(v)) onSettingChange('font_family', v);
              }}
              style={{ width: 'auto', minWidth: '200px' }}
            >
              {localSettings.font_family && !FONT_VALUES.includes(localSettings.font_family) ? (
                <Option value={localSettings.font_family} style={{ fontFamily: localSettings.font_family }}>
                  {localSettings.font_family}
                </Option>
              ) : null}
              {FONT_OPTIONS.map((item) =>
                item.type === 'header' ? (
                  <Option key={item.value} value={item.value} disabled>
                    {item.label}
                  </Option>
                ) : (
                  <Option key={item.value} value={item.value} style={{ fontFamily: item.value }}>
                    {item.label}
                  </Option>
                )
              )}
            </Dropdown>
            <Label htmlFor="font-size" style={{ margin: 0, whiteSpace: 'nowrap' }}>Size:</Label>
            <SpinButton
              id="font-size"
              value={localSettings.font_size || 14}
              onChange={(e, data) => {
                if (data.value !== undefined) {
                  onSettingChange('font_size', parseInt(data.value));
                }
              }}
              style={{ width: '80px' }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <ColorPickerPopup
              color={localSettings.input_text_color || '#ffffff'}
              onChange={(hexColor) => onSettingChange('input_text_color', hexColor)}
              label="Input Color"
            />
            <div
              style={{
                width: '250px',
                marginTop: '4px',
                color: localSettings.input_text_color || '#ffffff',
                wordWrap: 'break-word',
                fontFamily: localSettings.font_family || DEFAULT_FONT,
                fontSize: `${localSettings.font_size || 14}px`,
                lineHeight: '1.5',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nunc velit. Class aptent taciti.
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <ColorPickerPopup
              color={localSettings.output_text_color || '#ffffff'}
              onChange={(hexColor) => onSettingChange('output_text_color', hexColor)}
              label="Output Color"
            />
            <div
              style={{
                width: '250px',
                marginTop: '4px',
                color: localSettings.output_text_color || '#ffffff',
                wordWrap: 'break-word',
                fontFamily: localSettings.font_family || DEFAULT_FONT,
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
    </div>
  );
};

export default SettingsDialogGeneralTab;
