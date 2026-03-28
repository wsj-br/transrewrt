import { useState, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { tokens, Label, Text, Dropdown, Option, Radio, RadioGroup, SpinButton, Checkbox, makeStyles, Button } from '@fluentui/react-components';
import { Settings, Palette, ClipboardCheck, RefreshCw, History, Trash2, DatabaseBackup } from 'lucide-react';
import PropTypes from 'prop-types';
import {
  getCostFractionStyleOptions,
  formatCost,
  getCostApi,
  getDeleteCutoffIso,
} from '../utils/misc/costUtils';
import { interpolateTemplate } from '../utils/misc/formatUtils';
import ConfirmModal from './ConfirmModal';
import webAPI from '../utils/api/webApiClient';

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

/** Normalize to the two supported behaviors; map legacy values for existing configs. */
function normalizeEnterBehavior(value) {
  if (value === "Shift-Execute" || value === "Shift-Translate" || value === "Newline") return "Shift-Execute";
  return "Execute";
}

const useLayoutStyles = makeStyles({
  columns: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
    gap: tokens.spacingHorizontalXXL,
    alignItems: "start",
    width: "100%",
    "@media (max-width: 800px)": {
      gridTemplateColumns: "1fr",
    },
  },
  column: {
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXL,
  },
});

const useFormStyles = makeStyles({
  label: {
    fontSize: '16px',
    fontWeight: 500,
  },
  keyBadge: {
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: '6px',
    backgroundColor: tokens.colorNeutralBackground3,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 500,
  },
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

const SettingsGeneralTab = ({
  localSettings,
  onSettingChange,
  canConfigBackup = false,
}) => {
  const layoutStyles = useLayoutStyles();
  const formStyles = useFormStyles();
  const { t, i18n } = useTranslation();
  const locale = i18n.language || 'en-GB';

  const [showDisableHistoryConfirm, setShowDisableHistoryConfirm] = useState(false);
  const [historyDeleteRange, setHistoryDeleteRange] = useState('gt_3m');
  const [historyDeleteLoading, setHistoryDeleteLoading] = useState(false);
  const [historyDeleteError, setHistoryDeleteError] = useState(null);
  const [historyDeleteSuccess, setHistoryDeleteSuccess] = useState(null);
  const [showHistoryDeleteConfirm, setShowHistoryDeleteConfirm] = useState(false);

  const [backupBusy, setBackupBusy] = useState(false);
  const [backupError, setBackupError] = useState(null);
  const [backupSuccess, setBackupSuccess] = useState(null);
  const [showRestoreBackupConfirm, setShowRestoreBackupConfirm] = useState(false);
  const [restoreClearHistory, setRestoreClearHistory] = useState(false);
  const [pendingRestoreFile, setPendingRestoreFile] = useState(null);
  const restoreFileInputRef = useRef(null);

  const historyDeleteRangeOptions = useMemo(
    () => [
      { value: 'all', label: t('all data (clear)') },
      { value: 'gt_1m', label: t('> 1 month') },
      { value: 'gt_2m', label: t('> 2 months') },
      { value: 'gt_3m', label: t('> 3 months') },
      { value: 'gt_6m', label: t('> 6 months') },
      { value: 'gt_9m', label: t('> 9 months') },
      { value: 'gt_1y', label: t('> 1 year') },
      { value: 'gt_2y', label: t('> 2 years') },
    ],
    [t],
  );

  const executeHistoryDelete = async () => {
    if (historyDeleteLoading) return;
    const costApi = getCostApi();
    if (typeof costApi.deleteExecutionHistory !== 'function') {
      setHistoryDeleteError(t('Delete operation is not available in this mode.'));
      setShowHistoryDeleteConfirm(false);
      return;
    }
    setHistoryDeleteLoading(true);
    setHistoryDeleteError(null);
    setHistoryDeleteSuccess(null);
    setShowHistoryDeleteConfirm(false);
    try {
      const cutoff = getDeleteCutoffIso(historyDeleteRange);
      await costApi.deleteExecutionHistory(cutoff, null);
      setHistoryDeleteSuccess(t('History data deleted successfully.'));
    } catch (err) {
      setHistoryDeleteError(err?.message || t('Failed to delete history data.'));
    } finally {
      setHistoryDeleteLoading(false);
    }
  };

  const confirmDisableHistory = async () => {
    const costApi = getCostApi();
    if (typeof costApi.deleteExecutionHistory === 'function') {
      try {
        await costApi.deleteExecutionHistory(null, null);
      } catch {
        /* still turn setting off */
      }
    }
    onSettingChange('keep_execution_history', false);
    setShowDisableHistoryConfirm(false);
  };

  const backupSuccessMessage = (filename) =>
    interpolateTemplate(t('Backup generated: {{filename}}'), {
      filename: filename || '',
    });

  const runConfigBackup = async () => {
    setBackupError(null);
    setBackupSuccess(null);
    setBackupBusy(true);
    try {
      if (isWeb) {
        const r = await webAPI.downloadConfigBackup();
        setBackupSuccess(backupSuccessMessage(r?.filename));
      } else if (window.electronAPI?.exportConfigBackup) {
        const r = await window.electronAPI.exportConfigBackup();
        if (r?.canceled) {
          /* user dismissed save dialog */
        } else if (r?.ok) {
          setBackupSuccess(backupSuccessMessage(r.filename));
        } else {
          setBackupError(t('Backup failed.'));
        }
      }
    } catch (err) {
      setBackupError(err?.message || t('Backup failed.'));
    } finally {
      setBackupBusy(false);
    }
  };

  const onRestoreBackupClick = () => {
    setBackupError(null);
    setBackupSuccess(null);
    if (isWeb) {
      restoreFileInputRef.current?.click();
    } else {
      setPendingRestoreFile(null);
      setRestoreClearHistory(false);
      setShowRestoreBackupConfirm(true);
    }
  };

  const onWebRestoreFileSelected = (e) => {
    const f = e.target.files?.[0];
    e.target.value = '';
    if (!f) return;
    setPendingRestoreFile(f);
    setRestoreClearHistory(false);
    setShowRestoreBackupConfirm(true);
  };

  const confirmRestoreBackup = async () => {
    if (backupBusy) return;
    setBackupBusy(true);
    setBackupError(null);
    try {
      if (isWeb) {
        if (!pendingRestoreFile) {
          throw new Error(t('No file selected.'));
        }
        await webAPI.restoreConfigBackup(pendingRestoreFile, { clearHistory: restoreClearHistory });
      } else if (window.electronAPI?.importConfigBackup) {
        const r = await window.electronAPI.importConfigBackup({ clearHistory: restoreClearHistory });
        if (r?.canceled) {
          setShowRestoreBackupConfirm(false);
          return;
        }
        if (!r?.ok) {
          throw new Error(t('Restore failed.'));
        }
      }
      setBackupSuccess(
        isWeb
          ? t('Configuration restored. You may need to sign in again. Reload the page if settings look out of date.')
          : t('Configuration restored. Reload the page if settings look out of date.'),
      );
      setShowRestoreBackupConfirm(false);
      setPendingRestoreFile(null);
    } catch (err) {
      setBackupError(err?.message || t('Restore failed.'));
    } finally {
      setBackupBusy(false);
    }
  };

  return (
    <div className="tab-content">
      <div className={layoutStyles.columns}>
        <div className={layoutStyles.column}>
      {/* Behavior Section */}
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '36px' }}>
          <Settings size={20} />
          {t('Behaviour')}
        </Text>
        <div style={{ paddingInlineStart: '24px' }}>
        <div style={{ marginBottom: '16px' }}>
          <Label style={{ display: 'block', marginBottom: '6px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span className={formStyles.label}>{t('Behaviour for ')}</span> 
              <span className={formStyles.keyBadge}>{t('ENTER ↵')}</span>
              <span className={formStyles.label}>:</span>
            </span>
          </Label>
          <RadioGroup
            id="enter-behavior"
            value={normalizeEnterBehavior(localSettings.enter_behavior)}
            onChange={(e, data) => onSettingChange('enter_behavior', data.value)}
            layout="vertical"
            style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', marginInlineStart: '32px' }}
          >
            <Radio
              value="Execute"
              label={
                <>
                  <span className={formStyles.keyBadge}>{t('ENTER ↵')}</span> {t('to translate / rewrite')}
                </>
              }
            />
            <Radio
              value="Shift-Execute"
              label={
                <>
                  <span className={formStyles.keyBadge}>{t('⇧ SHIFT')}</span>  +
                  <span className={formStyles.keyBadge}>{t('ENTER ↵')}</span>  {t('to translate / rewrite')}
                </>
              }
            />
          </RadioGroup>
        </div>
        <div className="checkbox-group" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Checkbox
              checked={localSettings.auto_translate_on_paste !== false}
              onChange={(e) => onSettingChange('auto_translate_on_paste', e.target.checked)}
            />
            <Label style={{ margin: 0 }}>{t('Auto-translate on paste')}</Label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Checkbox
              checked={localSettings.auto_copy || false}
              onChange={(e) => onSettingChange('auto_copy', e.target.checked)}
              icon={<ClipboardCheck size={16} />}
            />
            <Label style={{ margin: 0 }}>{t('Auto-copy result to clipboard')}</Label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Checkbox
              checked={localSettings.real_time_translation || false}
              onChange={(e) => onSettingChange('real_time_translation', e.target.checked)}
              icon={<RefreshCw size={16} />}
            />
            <Label style={{ margin: 0 }}>{t('Real-time translation (while typing)')}</Label>
          </div>
          <div style={{ marginInlineStart: '48px', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Label htmlFor="real-time-delay" style={{ margin: 0, whiteSpace: 'nowrap' }}>{t('Timeout (ms):')}</Label>
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

      {/* History Section */}
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '36px' }}>
          <History size={20} />
          {t('History')}
        </Text>
        <div style={{ paddingInlineStart: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Checkbox
              id="keep-execution-history"
              checked={localSettings.keep_execution_history !== false}
              onChange={(e) => {
                if (e.target.checked) {
                  onSettingChange('keep_execution_history', true);
                } else {
                  setShowDisableHistoryConfirm(true);
                }
              }}
            />
            <Label htmlFor="keep-execution-history" style={{ margin: 0, cursor: 'pointer' }}>
              {t('Keep execution history')}
            </Label>
          </div>
          <div
            className="section"
            style={{ marginTop: '24px', marginInlineStart: '0', paddingInlineStart: '0' }}
          >
            <Text
              as="h4"
              size={400}
              weight="semibold"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}
            >
              <Trash2 size={18} />
              {t('Delete history data')}
            </Text>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginInlineStart: '8px',
              }}
            >
              <span>{t('Delete entries older than:')}</span>
              <Dropdown
                appearance="underline"
                selectedOptions={[historyDeleteRange]}
                value={
                  historyDeleteRangeOptions.find((o) => o.value === historyDeleteRange)?.label || ''
                }
                onOptionSelect={(_, data) => {
                  if (data.optionValue) setHistoryDeleteRange(data.optionValue);
                }}
                style={{ minWidth: '180px' }}
              >
                {historyDeleteRangeOptions.map((opt) => (
                  <Option key={opt.value} value={opt.value}>
                    {opt.label}
                  </Option>
                ))}
              </Dropdown>
              <Button
                appearance="primary"
                disabled={historyDeleteLoading}
                onClick={() => setShowHistoryDeleteConfirm(true)}
                style={{
                  backgroundColor: tokens.colorStatusDangerBackground1,
                  color: tokens.colorNeutralForegroundOnBrand,
                }}
              >
                {historyDeleteLoading ? t('Deleting…') : t('Delete data')}
              </Button>
            </div>
            {historyDeleteError && (
              <span style={{ color: tokens.colorStatusDangerForeground1, fontSize: '13px', display: 'block', marginTop: '8px', marginInlineStart: '8px' }}>
                {historyDeleteError}
              </span>
            )}
            {historyDeleteSuccess && (
              <span style={{ color: tokens.colorStatusSuccessForeground1, fontSize: '13px', display: 'block', marginTop: '8px', marginInlineStart: '8px' }}>
                {historyDeleteSuccess}
              </span>
            )}
          </div>
        </div>
      </div>

        </div>
        <div className={layoutStyles.column}>
      {/* Appearance Section */}
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '36px' }}>
          <Palette size={20} />
          {t('Appearance')}
        </Text>
        <div style={{ paddingInlineStart: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Checkbox
            id="show-cost-on-actions"
            checked={localSettings.show_cost_on_actions !== false}
            onChange={(e) => onSettingChange('show_cost_on_actions', e.target.checked)}
          />
          <Label htmlFor="show-cost-on-actions" style={{ margin: 0, cursor: 'pointer' }}>
            {t('Show cost information on the actions')}
          </Label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
          <Label htmlFor="cost-fraction-style" style={{ margin: 0, whiteSpace: 'nowrap' }}>
            {t('Cost fraction digits:')}
          </Label>
          <Dropdown
            id="cost-fraction-style"
            appearance="underline"
            value={
              getCostFractionStyleOptions(t).find(
                (o) => o.value === (localSettings.cost_fraction_style || 'muted'),
              )?.label ?? t('Muted grey')
            }
            selectedOptions={[localSettings.cost_fraction_style || 'muted']}
            onOptionSelect={(e, data) => {
              const v = data.optionValue;
              const options = getCostFractionStyleOptions(t);
              if (v && options.some((o) => o.value === v)) {
                onSettingChange('cost_fraction_style', v);
              }
            }}
            style={{ minWidth: '120px' }}
          >
            {getCostFractionStyleOptions(t).map((o) => (
              <Option key={o.value} value={o.value}>
                {o.label}
              </Option>
            ))}
          </Dropdown>
          <span style={{ marginInlineStart: '8px', display: 'inline-flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ color: tokens.colorNeutralForeground3, fontSize: '13px' }}>{t('Sample:')}</span>
            <span
              style={{
                fontSize: '16px',
                color: tokens.colorStatusSuccessForeground1,
                whiteSpace: 'nowrap',
              }}
            >
              {formatCost(0.001234, localSettings.cost_fraction_style || 'muted', locale)}
            </span>
          </span>
        </div>
        {isWeb && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <Checkbox
              id="web-margin"
              checked={localSettings.web_margin === true}
              onChange={(e) => onSettingChange('web_margin', e.target.checked)}
            />
            <Label htmlFor="web-margin" style={{ cursor: 'pointer', margin: 0  }}>
              {t('show a margin around the app')}
            </Label>
          </div>
        )}
        <div className="form-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
            <Label htmlFor="font-family" style={{ margin: 0, whiteSpace: 'nowrap' }}>{t('Font Family:')}</Label>
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
                    {t(item.label)}
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
        <div style={{ marginTop: '8px' }}>
          <span style={{ color: tokens.colorNeutralForeground2, fontSize: '13px', fontWeight: 'bold' }}>{t('Sample:')}</span> <br />
          <div
            style={{
              marginTop: '6px',
              marginInlineStart: '32px',
              color: tokens.colorNeutralForeground2,
              wordWrap: 'break-word',
              maxWidth: '300px',
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

      {canConfigBackup && (
        <div className="section">
          <Text as="h3" size={500} weight="semibold" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '36px' }}>
            <DatabaseBackup size={20} />
            {t('Configuration Backup')}
          </Text>
          <div style={{ paddingInlineStart: '24px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
              <Button appearance="primary" disabled={backupBusy} onClick={runConfigBackup}>
                {backupBusy ? t('Working…') : t('Backup configuration')}
              </Button>
              <Button appearance="secondary" disabled={backupBusy} onClick={onRestoreBackupClick}>
                {t('Restore from backup')}
              </Button>
              {isWeb ? (
                <input
                  ref={restoreFileInputRef}
                  type="file"
                  accept=".zip,application/zip"
                  style={{ display: 'none' }}
                  onChange={onWebRestoreFileSelected}
                />
              ) : null}
            </div>
            {backupError && (
              <span style={{ color: tokens.colorStatusDangerForeground1, fontSize: '13px', display: 'block' }}>
                {backupError}
              </span>
            )}
            {backupSuccess && (
              <span style={{ color: tokens.colorStatusSuccessForeground1, fontSize: '13px', display: 'block' }}>
                {backupSuccess}
              </span>
            )}
          </div>
        </div>
      )}

        </div>
      </div>

      {showDisableHistoryConfirm && (
        <ConfirmModal
          title={t('Turn off execution history?')}
          message={t('Stored input and output text for past runs will be removed from the database. Cost tracking rows are not removed.\n\nThis cannot be undone.')}
          confirmLabel={t('Remove history and turn off')}
          cancelLabel={t('Cancel')}
          onConfirm={confirmDisableHistory}
          onCancel={() => setShowDisableHistoryConfirm(false)}
          danger
        />
      )}
      {showRestoreBackupConfirm && (
        <ConfirmModal
          title={t('Restore configuration backup?')}
          customBody={
            <div>
              <p style={{ margin: '0 0 16px 0', fontSize: '14px', lineHeight: 1.4 }}>
                {isWeb
                  ? t(
                      'This replaces users, preferences, transform prompts, and server configuration. All signed-in sessions will be logged out.\n\nThis cannot be undone.',
                    )
                  : t(
                      'This replaces local configuration files, transform prompts, and optional API history (if selected).\n\nThis cannot be undone.',
                    )}
              </p>
              <Checkbox
                id="restore-clear-history"
                checked={restoreClearHistory}
                onChange={(e) => setRestoreClearHistory(!!e.target.checked)}
                label={t('Also clear execution history and API call data (cost rows removed)')}
              />
            </div>
          }
          confirmLabel={backupBusy ? t('Working…') : t('Restore')}
          cancelLabel={t('Cancel')}
          onConfirm={confirmRestoreBackup}
          onCancel={() => {
            setShowRestoreBackupConfirm(false);
            setPendingRestoreFile(null);
          }}
          danger
        />
      )}
      {showHistoryDeleteConfirm && (
        <ConfirmModal
          title={
            historyDeleteRange === 'all'
              ? t('Delete all history text')
              : t('Delete history data by age')
          }
          message={
            historyDeleteRange === 'all'
              ? t('Permanently delete ALL stored input/output history?\n\nAPI call metadata is not removed.\n\nThis cannot be undone.')
              : interpolateTemplate(
                  t('Permanently delete history text older than {{range}}?\n\nAPI call metadata is not removed.\n\nThis cannot be undone.'),
                  {
                    range:
                      (historyDeleteRangeOptions.find((o) => o.value === historyDeleteRange)?.label ?? '').replace(
                        /^>\s*/,
                        '',
                      ) || '',
                  },
                )
          }
          confirmLabel={t('Delete')}
          cancelLabel={t('Cancel')}
          onConfirm={executeHistoryDelete}
          onCancel={() => setShowHistoryDeleteConfirm(false)}
          danger
        />
      )}
    </div>
  );
};

SettingsGeneralTab.propTypes = {
  localSettings: PropTypes.shape({
    enter_behavior: PropTypes.string,
    auto_translate_on_paste: PropTypes.bool,
    auto_copy: PropTypes.bool,
    real_time_translation: PropTypes.bool,
    real_time_delay: PropTypes.number,
    keep_execution_history: PropTypes.bool,
    show_cost_on_actions: PropTypes.bool,
    cost_fraction_style: PropTypes.string,
    web_margin: PropTypes.string,
    font_family: PropTypes.string,
    font_size: PropTypes.number,
  }).isRequired,
  onSettingChange: PropTypes.func.isRequired,
  canConfigBackup: PropTypes.bool,
};

export default SettingsGeneralTab;
