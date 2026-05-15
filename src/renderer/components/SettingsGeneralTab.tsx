import { useState, useMemo, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Settings, Palette, ClipboardCheck, RefreshCw, History, Trash2, DatabaseBackup, Sun, Moon, Monitor, Sparkles } from 'lucide-react';
import PropTypes from 'prop-types';
import {
  getCostFractionStyleOptions,
  formatCost,
  getCostApi,
  getDeleteCutoffIso,
} from '../utils/misc/costUtils';
import ConfirmModal from './ConfirmModal';
import webAPI from '../utils/api/webApiClient';
import { getAppearanceFontOptions, resolveAppearanceFontFamilyCss } from '../utils/misc/appearanceFontOptions';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { settingsSection, settingsTabContent } from "./settings/settingsLayoutClasses";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

function getAppearanceFontContext() {
  const isWebMode = typeof window !== "undefined" && !window.electronAPI?.getConfig;
  const platform =
    !isWebMode && typeof window.electronAPI?.getRuntimePlatform === "function"
      ? window.electronAPI.getRuntimePlatform()
      : undefined;
  return getAppearanceFontOptions({ isElectron: !isWebMode, platform });
}

function normalizeEnterBehavior(value) {
  if (value === "Shift-Execute" || value === "Shift-Translate" || value === "Newline") return "Shift-Execute";
  return "Execute";
}

function normalizeTheme(value) {
  if (value === "system" || value === "light" || value === "dark") return value;
  if (typeof value === "string" && value.trim().toLowerCase() === "system (follow os)") {
    return "system";
  }
  return "system";
}

const SettingsGeneralTab = ({
  localSettings,
  onSettingChange,
  canConfigBackup = false,
}) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || 'en-GB';

  const { options: FONT_OPTIONS, defaultFont: DEFAULT_FONT, fontValues: FONT_VALUES } = useMemo(() => {
    const { options, defaultFont } = getAppearanceFontContext();
    const fontValues = options.filter((o) => o.type === "font").map((o) => o.value);
    return { options, defaultFont, fontValues };
  }, []);

  const themeOptions = useMemo(() => [
    { value: 'system', label: t('System (follow OS)'), icon: Monitor },
    { value: 'light', label: t('Light'), icon: Sun },
    { value: 'dark', label: t('Dark'), icon: Moon },
  ], [t]);

  const historyAdminDisabled = localSettings.history_disabled_by_administrator === true;

  const [showDisableHistoryConfirm, setShowDisableHistoryConfirm] = useState(false);
  const selectedTheme = normalizeTheme(localSettings.theme);
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
  const [restoreUsageData, setRestoreUsageData] = useState(false);
  const [backupIncludeUsage, setBackupIncludeUsage] = useState(false);
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

  const onUncheckKeepExecutionHistory = useCallback(async () => {
    const costApi = getCostApi();
    if (typeof costApi.getExecutionHistory !== 'function') {
      setShowDisableHistoryConfirm(true);
      return;
    }
    try {
      const rows = await costApi.getExecutionHistory(null, null, null, 1);
      if (Array.isArray(rows) && rows.length > 0) {
        setShowDisableHistoryConfirm(true);
      } else {
        onSettingChange('keep_execution_history', false);
      }
    } catch {
      setShowDisableHistoryConfirm(true);
    }
  }, [onSettingChange]);

  const backupSuccessMessage = (filename) =>
    t('Backup generated: {{filename}}', { filename: filename || '' });

  const runConfigBackup = async () => {
    setBackupError(null);
    setBackupSuccess(null);
    setBackupBusy(true);
    try {
      if (isWeb) {
        const r = await webAPI.downloadConfigBackup({ includeUsageData: backupIncludeUsage });
        setBackupSuccess(backupSuccessMessage(r?.filename));
      } else if (window.electronAPI?.exportConfigBackup) {
        const r = await window.electronAPI.exportConfigBackup({ includeUsageData: backupIncludeUsage });
        if (r?.canceled) { /* user dismissed */ }
        else if (r?.ok) { setBackupSuccess(backupSuccessMessage(r.filename)); }
        else { setBackupError(t('Backup failed.')); }
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
    setPendingRestoreFile(null);
    setRestoreClearHistory(false);
    setRestoreUsageData(false);
    if (restoreFileInputRef.current) restoreFileInputRef.current.value = '';
    setShowRestoreBackupConfirm(true);
  };

  const onRestoreBackupFileSelected = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setPendingRestoreFile(f);
  };

  const confirmRestoreBackup = async () => {
    if (backupBusy) return;
    setBackupBusy(true);
    setBackupError(null);
    try {
      if (isWeb) {
        if (!pendingRestoreFile) throw new Error(t('No file selected.'));
        await webAPI.restoreConfigBackup(pendingRestoreFile, { clearHistory: restoreClearHistory, restoreUsageData });
      } else if (window.electronAPI?.importConfigBackup) {
        if (!pendingRestoreFile) throw new Error(t('No file selected.'));
        const getPath = window.electronAPI.getPathForFile;
        if (typeof getPath !== 'function') throw new Error(t('Restore failed.'));
        let filePath;
        try { filePath = getPath(pendingRestoreFile); } catch { filePath = ''; }
        if (!filePath) throw new Error(t('No file selected.'));
        const r = await window.electronAPI.importConfigBackup({ filePath, clearHistory: restoreClearHistory, restoreUsageData });
        if (!r?.ok) throw new Error(t('Restore failed.'));
      }
      setBackupSuccess(isWeb ? t('Configuration restored. You may need to sign in again.') : t('Configuration restored.'));
      setShowRestoreBackupConfirm(false);
      setPendingRestoreFile(null);
    } catch (err) {
      setBackupError(err?.message || t('Restore failed.'));
    } finally {
      setBackupBusy(false);
    }
  };

  const kbdCls = "inline-block px-2 py-0.5 rounded bg-muted font-mono text-xs font-medium border border-border";
  const sectionTitleCls = "mb-5 mt-0 flex items-center gap-2 text-base font-semibold";
  const experienceMode = localSettings.mode === "advanced" ? "advanced" : "regular";

  return (
    <div className={settingsTabContent}>
      <div className="mx-auto mb-5 w-full min-w-0 max-w-6xl">
        <div className={cn(settingsSection, "!mb-0")}>
          <h3 className={sectionTitleCls}>
            <Sparkles size={18} />
            {t("AI experience")}
          </h3>
          <div className="ps-6 flex flex-col gap-3">
            <p className="m-0 text-sm text-muted-foreground">
              {t("Choose how you select the model for Translate, Rewrite, and Transform.")}
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => onSettingChange("mode", "regular")}
                aria-pressed={experienceMode === "regular"}
                className={cn(
                  "flex flex-1 flex-col items-start gap-1 rounded-lg border px-4 py-3 text-start text-sm transition-colors sm:min-w-[200px] sm:flex-initial",
                  experienceMode === "regular"
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-muted/30 text-muted-foreground hover:bg-muted/50",
                )}
              >
                <span className="font-semibold">{t("Regular")}</span>
                <span className="text-xs text-muted-foreground">
                  {t("Curated skills — no need to know model names.")}
                </span>
              </button>
              <button
                type="button"
                onClick={() => onSettingChange("mode", "advanced")}
                aria-pressed={experienceMode === "advanced"}
                className={cn(
                  "flex flex-1 flex-col items-start gap-1 rounded-lg border px-4 py-3 text-start text-sm transition-colors sm:min-w-[200px] sm:flex-initial",
                  experienceMode === "advanced"
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-muted/30 text-muted-foreground hover:bg-muted/50",
                )}
              >
                <span className="font-semibold">{t("Advanced")}</span>
                <span className="text-xs text-muted-foreground">
                  {t("Pick models directly from your OpenRouter list.")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 gap-5 lg:grid-cols-2 lg:items-stretch">
          {/* Appearance Section */}
          <div className={cn(settingsSection, "!mb-0", "h-full")}>
            <h3 className={sectionTitleCls}>
              <Palette size={18} />
              {t('Appearance')}
            </h3>
            <div className="ps-6">
              {/* Theme */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <Label className="m-0 whitespace-nowrap text-sm">{t('Theme:')}</Label>
                <div className="flex gap-1 rounded-md border border-input p-0.5 bg-muted">
                  {themeOptions.map(({ value, label, icon: Icon }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => onSettingChange('theme', value)}
                      title={label}
                      aria-label={label}
                      aria-pressed={selectedTheme === value}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded text-sm font-medium transition-colors ${
                        selectedTheme === value
                          ? 'bg-background text-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon size={14} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3.5">
                <Checkbox
                  id="show-cost-on-actions"
                  checked={localSettings.show_cost_on_actions !== false}
                  onCheckedChange={(c) => onSettingChange('show_cost_on_actions', !!c)}
                />
                <Label htmlFor="show-cost-on-actions" className="m-0 cursor-pointer">{t('Show cost information on the actions')}</Label>
              </div>
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <Label htmlFor="cost-fraction-style" className="m-0 whitespace-nowrap text-sm">{t('Cost fraction digits:')}</Label>
                <Select
                  value={localSettings.cost_fraction_style || 'muted'}
                  onValueChange={(v) => {
                    const opts = getCostFractionStyleOptions(t);
                    if (v && opts.some((o) => o.value === v)) onSettingChange('cost_fraction_style', v);
                  }}
                >
                  <SelectTrigger id="cost-fraction-style" className="min-w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {getCostFractionStyleOptions(t).map((o) => (
                      <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="ms-2 inline-flex items-baseline gap-1.5">
                  <span className="text-muted-foreground text-xs">{t('Sample:')}</span>
                  <span className="text-base text-green-400 whitespace-nowrap">
                    {formatCost(0.001234, localSettings.cost_fraction_style || 'muted', locale)}
                  </span>
                </span>
              </div>
              {isWeb && (
                <div className="flex items-center gap-2 mb-4">
                  <Checkbox
                    id="web-margin"
                    checked={localSettings.web_margin === true}
                    onCheckedChange={(c) => onSettingChange('web_margin', !!c)}
                  />
                  <Label htmlFor="web-margin" className="cursor-pointer m-0">{t('show a margin around the app')}</Label>
                </div>
              )}
              <div className="mb-4 flex flex-col gap-3">
                <div className="flex min-w-0 max-w-full flex-nowrap items-center gap-2">
                  <Label htmlFor="font-family" className="m-0 shrink-0 whitespace-nowrap text-sm">{t('Font Family:')}</Label>
                  <Select
                    value={localSettings.font_family || DEFAULT_FONT}
                    onValueChange={(v) => {
                      if (v && FONT_VALUES.includes(v)) onSettingChange('font_family', v);
                    }}
                  >
                    <SelectTrigger id="font-family" className="h-8 min-w-0 flex-1 sm:min-w-[200px] sm:flex-initial sm:w-[min(100%,280px)]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {localSettings.font_family && !FONT_VALUES.includes(localSettings.font_family) && (
                        <SelectItem
                          value={localSettings.font_family}
                          style={{ fontFamily: resolveAppearanceFontFamilyCss(localSettings.font_family) || localSettings.font_family }}
                        >
                          {localSettings.font_family}
                        </SelectItem>
                      )}
                      {FONT_OPTIONS.map((item) =>
                        item.type === 'header' ? (
                          <SelectItem key={item.value} value={item.value} disabled>{t(item.label)}</SelectItem>
                        ) : (
                          <SelectItem
                            key={item.value}
                            value={item.value}
                            style={{ fontFamily: resolveAppearanceFontFamilyCss(item.value) || item.value }}
                          >
                            {item.label}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-nowrap items-center gap-2">
                  <Label htmlFor="font-size" className="m-0 shrink-0 whitespace-nowrap text-sm">{t('Size:')}</Label>
                  <input
                    id="font-size"
                    type="number"
                    min={8}
                    max={32}
                    value={localSettings.font_size || 14}
                    onChange={(e) => {
                      const v = parseInt(e.target.value);
                      if (!isNaN(v)) onSettingChange('font_size', v);
                    }}
                    className="h-8 w-[70px] shrink-0 px-2 border border-input rounded-md bg-background text-sm"
                  />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-muted-foreground text-xs font-bold">{t('Sample:')}</span>
                <div
                  className="mt-1.5 ms-8 text-foreground/90 break-words max-w-[300px] leading-relaxed"
                  style={{
                    fontFamily: resolveAppearanceFontFamilyCss(localSettings.font_family || DEFAULT_FONT) || localSettings.font_family || DEFAULT_FONT,
                    fontSize: `${localSettings.font_size || 14}px`,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nunc velit. Class aptent taciti.
                </div>
              </div>
            </div>
          </div>

          {/* Behaviour Section */}
          <div className={cn(settingsSection, "!mb-0", "h-full")}>
            <h3 className={sectionTitleCls}>
              <Settings size={18} />
              {t('Behaviour')}
            </h3>
            <div className="ps-6">
              <div className="mb-4">
                <label className="block mb-1.5 text-sm font-medium">
                  <span className="inline-flex items-center gap-2">
                    {t('Behaviour for ')}
                    <span className={kbdCls}>{t('ENTER ↵')}</span>:
                  </span>
                </label>
                <div className="flex flex-col gap-2 mt-2 ms-8">
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name="enter-behavior"
                      value="Execute"
                      checked={normalizeEnterBehavior(localSettings.enter_behavior) === "Execute"}
                      onChange={() => onSettingChange('enter_behavior', 'Execute')}
                      className="accent-primary"
                    />
                    <span className={kbdCls}>{t('ENTER ↵')}</span> {t('to translate / rewrite')}
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name="enter-behavior"
                      value="Shift-Execute"
                      checked={normalizeEnterBehavior(localSettings.enter_behavior) === "Shift-Execute"}
                      onChange={() => onSettingChange('enter_behavior', 'Shift-Execute')}
                      className="accent-primary"
                    />
                    <span className={kbdCls}>{t('⇧ SHIFT')}</span> + <span className={kbdCls}>{t('ENTER ↵')}</span> {t('to translate / rewrite')}
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="auto-translate-on-paste"
                    checked={localSettings.auto_translate_on_paste !== false}
                    onCheckedChange={(c) => onSettingChange('auto_translate_on_paste', !!c)}
                  />
                  <Label htmlFor="auto-translate-on-paste" className="cursor-pointer m-0">{t('Auto-translate on paste')}</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="auto-copy"
                    checked={localSettings.auto_copy || false}
                    onCheckedChange={(c) => onSettingChange('auto_copy', !!c)}
                  />
                  <Label htmlFor="auto-copy" className="cursor-pointer m-0 flex items-center gap-1.5">
                    <ClipboardCheck size={14} />
                    {t('Auto-copy result to clipboard')}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="real-time-translation"
                    checked={localSettings.real_time_translation || false}
                    onCheckedChange={(c) => onSettingChange('real_time_translation', !!c)}
                  />
                  <Label htmlFor="real-time-translation" className="cursor-pointer m-0 flex items-center gap-1.5">
                    <RefreshCw size={14} />
                    {t('Real-time translation while typing (⚠️ This may increase usage costs)')}
               
                  </Label>
                </div>
                <div className="ms-12 mt-2 flex items-center gap-2">
                  <Label htmlFor="real-time-delay" className="m-0 whitespace-nowrap text-sm">{t('Timeout (ms):')}</Label>
                  <input
                    id="real-time-delay"
                    type="number"
                    min={0}
                    step={100}
                    value={localSettings.real_time_delay || 1000}
                    onChange={(e) => {
                      const v = parseInt(e.target.value);
                      if (!isNaN(v) && v >= 0) onSettingChange('real_time_delay', v);
                    }}
                    className="w-[100px] h-8 px-2 border border-input rounded-md bg-background text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

        {/* History */}
        <div
          className={cn(
            settingsSection,
            "!mb-0",
            "h-full",
            !canConfigBackup && "lg:col-span-2",
          )}
        >
            <h3 className="mb-5 mt-0 flex w-full min-h-0 flex-wrap items-center gap-x-2 gap-y-1 text-base font-semibold">
              <span className="flex min-w-0 flex-1 items-center gap-2">
                <History size={18} />
                {t('History')}
              </span>
              {historyAdminDisabled ? (
                <span className="ms-auto shrink-0 text-end text-xs font-normal text-muted-foreground">
                  {t('disabled by the administrator')}
                </span>
              ) : null}
            </h3>
            <div
              className={cn(
                "ps-6",
                historyAdminDisabled && "pointer-events-none opacity-50",
              )}
            >
              <div className="flex items-center gap-2 mb-4">
                <Checkbox
                  id="keep-execution-history"
                  checked={localSettings.keep_execution_history !== false}
                  disabled={historyAdminDisabled}
                  onCheckedChange={(c) => {
                    if (historyAdminDisabled) return;
                    if (c) onSettingChange('keep_execution_history', true);
                    else void onUncheckKeepExecutionHistory();
                  }}
                />
                <Label htmlFor="keep-execution-history" className={cn("m-0", historyAdminDisabled ? "cursor-not-allowed" : "cursor-pointer")}>{t('Keep execution history')}</Label>
              </div>
              <div
                className={cn(
                  "mt-5 rounded-xl border border-border/60 bg-muted/25 p-4 dark:border-white/10 dark:bg-muted/15",
                )}
              >
                <h4 className="mb-3 mt-0 flex items-center gap-2 text-sm font-semibold">
                  <Trash2 size={16} />
                  {t('Delete history data')}
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm">{t('Delete entries older than:')}</span>
                  <Select value={historyDeleteRange} onValueChange={setHistoryDeleteRange} disabled={historyAdminDisabled}>
                    <SelectTrigger className="min-w-[180px]" disabled={historyAdminDisabled}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {historyDeleteRangeOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="destructive"
                    size="sm"
                    disabled={historyDeleteLoading || historyAdminDisabled}
                    onClick={() => setShowHistoryDeleteConfirm(true)}
                  >
                    {historyDeleteLoading ? t('Deleting…') : t('Delete data')}
                  </Button>
                </div>
                {historyDeleteError && (
                  <span className="text-red-400 text-sm block mt-2 ms-2">{historyDeleteError}</span>
                )}
                {historyDeleteSuccess && (
                  <span className="text-green-400 text-sm block mt-2 ms-2">{historyDeleteSuccess}</span>
                )}
              </div>
            </div>
        </div>

        {canConfigBackup && (
            <div className={cn(settingsSection, "!mb-0", "h-full")}>
              <h3 className={sectionTitleCls}>
                <DatabaseBackup size={18} />
                {t('Configuration Backup')}
              </h3>
              <div className="ps-6">
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="backup-include-usage"
                      checked={backupIncludeUsage}
                      onCheckedChange={(c) => setBackupIncludeUsage(!!c)}
                    />
                    <Label htmlFor="backup-include-usage" className="m-0 cursor-pointer">{t('Include usage data in the backup')}</Label>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5 items-center mb-3">
                  <Button size="sm" disabled={backupBusy} onClick={runConfigBackup}>
                    {backupBusy ? t('Working…') : t('Backup configuration')}
                  </Button>
                  <Button variant="outline" size="sm" disabled={backupBusy} onClick={onRestoreBackupClick}>
                    {t('Restore from backup')}
                  </Button>
                </div>
                {backupError && <span className="text-red-400 text-xs block">{backupError}</span>}
                {backupSuccess && <span className="text-green-400 text-xs block">{backupSuccess}</span>}
              </div>
            </div>
        )}
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
              <p className="m-0 mb-4 text-sm leading-snug">
                {isWeb
                  ? t('This replaces users, preferences, transform prompts, and server configuration. All signed-in sessions will be logged out.\n\nThis cannot be undone.')
                  : t('This replaces local configuration files, transform prompts, and optional API history (if selected).\n\nThis cannot be undone.')}
              </p>
              <div className="mb-4 flex flex-wrap items-center gap-2.5">
                <input
                  ref={restoreFileInputRef}
                  type="file"
                  accept=".zip,application/zip"
                  className="hidden"
                  onChange={onRestoreBackupFileSelected}
                />
                <Button variant="outline" size="sm" type="button" onClick={() => restoreFileInputRef.current?.click()}>
                  {t('Select backup ZIP…')}
                </Button>
                <span className="text-xs text-muted-foreground break-all">
                  {pendingRestoreFile?.name || t('No file selected yet.')}
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="restore-usage-data"
                    checked={restoreUsageData}
                    onCheckedChange={(c) => setRestoreUsageData(!!c)}
                  />
                  <Label htmlFor="restore-usage-data" className="m-0 cursor-pointer">{t('Restore the usage data')}</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="restore-clear-history"
                    checked={restoreClearHistory}
                    onCheckedChange={(c) => setRestoreClearHistory(!!c)}
                  />
                  <Label htmlFor="restore-clear-history" className="m-0 cursor-pointer">{t('Clear the old usage data before restoring')}</Label>
                </div>
              </div>
            </div>
          }
          confirmLabel={backupBusy ? t('Working…') : t('Restore')}
          cancelLabel={t('Cancel')}
          onConfirm={confirmRestoreBackup}
          onCancel={() => {
            setShowRestoreBackupConfirm(false);
            setPendingRestoreFile(null);
            if (restoreFileInputRef.current) restoreFileInputRef.current.value = '';
          }}
          confirmDisabled={backupBusy || !pendingRestoreFile}
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
              : t('Permanently delete history text older than {{range}}?\n\nAPI call metadata is not removed.\n\nThis cannot be undone.', {
                  range: (historyDeleteRangeOptions.find((o) => o.value === historyDeleteRange)?.label ?? '').replace(/^>\s*/, '') || '',
                })
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
    theme: PropTypes.string,
    enter_behavior: PropTypes.string,
    auto_translate_on_paste: PropTypes.bool,
    auto_copy: PropTypes.bool,
    real_time_translation: PropTypes.bool,
    real_time_delay: PropTypes.number,
    keep_execution_history: PropTypes.bool,
    history_disabled_by_administrator: PropTypes.bool,
    show_cost_on_actions: PropTypes.bool,
    cost_fraction_style: PropTypes.string,
    web_margin: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    font_family: PropTypes.string,
    font_size: PropTypes.number,
  }).isRequired,
  onSettingChange: PropTypes.func.isRequired,
  canConfigBackup: PropTypes.bool,
};

export default SettingsGeneralTab;
