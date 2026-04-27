/**
 * Shared layout utilities for settings views (replaces legacy main.css
 * .tab-content, .section, .settings-body, .languages-section, .tabs-header).
 */

/** Scrollable inner area for each settings tab. */
export const settingsTabContent =
  "flex-1 m-0 w-full min-w-0 min-h-0 box-border overflow-y-auto overflow-x-auto py-4 px-4 md:px-8";

/** Languages tab — vertical scroll, no horizontal scrollbar on the tab root. */
export const settingsTabContentLanguages =
  "flex-1 m-0 w-full min-w-0 min-h-0 box-border overflow-y-auto overflow-x-hidden py-4 px-4 md:px-8";

/** Standard bordered section stack inside a tab. */
export const settingsSection =
  "mb-6 pb-6 border-b border-border w-full box-border max-w-full last:border-b-0";

/** Languages tab subsection (tighter vertical rhythm than settingsSection). */
export const settingsLanguagesSection =
  "mb-4 pb-4 border-b border-border w-full box-border max-w-full last:border-b-0";

/** Settings panel main scroll region (replaces .modal-body + .settings-body). */
export const settingsPanelBody =
  "flex flex-col flex-1 min-h-0 w-full box-border overflow-auto";

/** Tab strip under the settings header. */
export const settingsTabStrip =
  "flex items-center border-b border-border shrink-0 min-w-0 overflow-hidden bg-[color-mix(in_oklch,var(--foreground)_6%,var(--background))] p-0";

/** Tab buttons in the strip (minimal global-only behaviour as utilities). */
export const settingsTabButton =
  "cursor-pointer shrink-0 min-w-max whitespace-nowrap overflow-visible text-clip";

/** Form field group in settings (was .form-group). */
export const settingsFormGroup = "mb-4 flex-1 min-w-0 max-w-full";

/**
 * Models tab root — full-height split layout, no outer padding (was .tab-content + .models-tab).
 */
export const settingsModelsTabRoot =
  "flex flex-col flex-1 h-full min-h-0 w-full max-w-full box-border overflow-hidden p-0 m-0 max-[1200px]:h-auto max-[1200px]:min-h-full max-[1200px]:overflow-visible";
