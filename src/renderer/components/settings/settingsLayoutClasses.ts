/**
 * Shared layout utilities for settings views (replaces legacy main.css
 * .tab-content, .section, .settings-body, .languages-section, .tabs-header).
 */

/** Scrollable inner area for each settings tab (padding matches workspace grid). */
export const settingsTabContent =
  "flex-1 m-0 w-full min-w-0 min-h-0 box-border overflow-y-auto overflow-x-auto py-4 px-4 md:px-6";

/** Languages tab — vertical scroll, no horizontal scrollbar on the tab root. */
export const settingsTabContentLanguages =
  "flex-1 m-0 w-full min-w-0 min-h-0 box-border overflow-y-auto overflow-x-hidden py-4 px-4 md:px-6";

/**
 * Section block — glass card stack aligned with workspace `TextPanel` / dashboard cards
 * (rounded-2xl, dark semi-transparent blur, white/10 border).
 */
export const settingsSection =
  "mb-6 w-full max-w-full rounded-2xl border border-border bg-card p-5 shadow-sm box-border last:mb-0 dark:border-white/10 dark:bg-card/75 dark:backdrop-blur-xl";

/** Languages tab subsection (tighter vertical rhythm than settingsSection). */
export const settingsLanguagesSection =
  "mb-4 w-full max-w-full rounded-xl border border-border bg-card p-4 shadow-sm box-border last:mb-0 dark:border-white/10 dark:bg-card/75 dark:backdrop-blur-xl";

/** Settings panel main scroll region (replaces .modal-body + .settings-body). */
export const settingsPanelBody =
  "flex flex-col flex-1 min-h-0 w-full box-border overflow-auto bg-background";

/** Tab strip — glass bar under header (workspace-style chrome). */
export const settingsTabStrip =
  "flex shrink-0 min-w-0 items-center gap-1 border-b border-border bg-card/95 px-3 py-2 backdrop-blur-md dark:border-white/10 dark:bg-card/55";

/** Tab buttons — minimal base; combine with pill active/idle classes in SettingsPanel. */
export const settingsTabButton =
  "cursor-pointer shrink-0 overflow-visible text-clip transition-colors duration-200";

/** Active tab pill — emerald accent (same family as Translate / sidebar brand). */
export const settingsTabPillActive =
  "rounded-full border border-emerald-500/35 bg-emerald-500/15 px-4 py-2 text-sm font-medium text-foreground shadow-[0_0_18px_rgba(52,211,153,0.22)]";

/** Idle tab pill — matches LayoutToggle idle / header pills. */
export const settingsTabPillIdle =
  "rounded-full border border-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:border-white/10 hover:bg-white/5 hover:text-foreground";

/** Form field group in settings (was .form-group). */
export const settingsFormGroup = "mb-4 flex-1 min-w-0 max-w-full";

/**
 * Models tab root — full-height split layout, no outer padding (was .tab-content + .models-tab).
 */
export const settingsModelsTabRoot =
  "flex flex-col flex-1 h-full min-h-0 w-full max-w-full box-border overflow-hidden p-0 m-0 max-[1200px]:h-auto max-[1200px]:min-h-full max-[1200px]:overflow-visible";
