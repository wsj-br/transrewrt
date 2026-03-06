# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Use conventional types (Added, Changed, Fixed, etc.) and short descriptions.

## Unreleased

- **Changed**: Dashboard > All Calls: horizontal scroll is now a floating bar at the bottom of the visible area; table header row is sticky; vertical scrollbar is transparent and overlays the last column (no gap between table border and content).
- **Added**: Settings > General: sample of cost fraction digits style next to the dropdown so users can preview the format without changing tabs.
- **Fixed**: Settings > General: cost fraction sample now uses same formatting as Cost tracking tab (formatCost + success green styling) so subscript/muted/superscript/small are visible.
- **Changed**: Dashboard Summary tab: responsive layout (clamp for gaps, fonts, padding) to avoid scrollbar; KPI cards equal-sized with text confined (overflow/ellipsis); Usage pie chart larger (reduced margins, outerRadius 85%); Cost by model Y-axis width increased so model names show without truncation.
- **Changed**: Dashboard: new "By type" tab with Translation target, Rewrite style, and Transform prompt charts; Summary tab reformatted to 2×2 grid (KPI + Usage Split row 1, Cost over time + Cost by model row 2).
- **Changed**: Settings > Transform: on successful import, clear the export message so only the import result line is shown (one action log line).
- **Changed**: Transform run-mode target language: single option "Auto" (styled in blue like "Detect Language"); when selected or default, target language is not sent to the model.
- **Changed**: Dev documentation (SYSTEM-OVERVIEW.md, Development.md) updated: Transform in architecture diagram and folder structure; app DB (api_calls, custom_prompts) and appDb.js; hooks and config/custom-prompts.json; test note for Transform.
- **Fixed**: After saving a new transform prompt in edit mode, the new prompt was not selected because the settings-sync effect overwrote the selection with stale settings; effect now skips overwriting when the current selection matches a prompt whose name differs from settings (just-saved case).
- **Fixed**: App.js "Cannot access 'inputTextTransform' before initialization" by moving `activeModel` useMemo and `useTransformPrompts()` above the derived `inputText`/`outputText`/setters so transform state is defined before use.
- **Changed**: Renamed `src/main/costDb.js` to `appDb.js` and IPC channels from `costDb:*` to `appDb:*`; export `registerAppDbHandlers`. The module is the app’s SQLite DB (api_calls + custom_prompts), not only cost logging.
- **Changed**: Webpack performance limits raised (maxAssetSize / maxEntrypointSize to 2.5 MiB) so production build no longer warns on current vendors and entrypoint size.
- **Changed**: App.js refactored into maintainable modules: `setError` exposed from AppContext; styles moved to `useAppStyles.js`; format/stat helpers to `formatUtils.js`; `isWeb` and `REWRITE_STYLES` to `constants.js`; processing logic (translate/rewrite/transform run, timer, cost) to `useProcessing.js`; transform prompts CRUD and test panel to `useTransformPrompts.js`; workspace panels split by mode into `workspace/TranslateWorkspace.js`, `workspace/RewriteWorkspace.js`, `workspace/TransformWorkspace.js`; API key modal to `ApiKeyModal.js`. App.js is now a thin orchestrator.
- **Changed**: Transform page uses same behaviour as Translate: Enter key behaviour (Shift+Enter or Enter from Settings > General), auto-run on paste when "Auto-translate on paste" is on, auto-copy result when "Auto-result to clipboard" is on; Escape clears input. Real-time translation remains translate-only (no real-time transform).
- **Fixed**: Transform runs now update total cost in Settings > Cost tracking the same way as translate and rewrite; applyCostToResult is awaited so config is persisted before continuing.
- **Changed**: Transform page target language selector: added "(none)" option at top; when "(none)" or empty, target language is not sent to the model.
- **Changed**: Transform prompt config: "Target language (optional)" dropdown replaced with checkbox "Ask for target language". DB column `custom_prompts.target_language` is now boolean (INTEGER 0/1); migration converts existing TEXT values. Run mode shows target language selector only when flag is true; selector aligned with Output panel (same row as Translate "To:").
- **Changed**: Cost/API log now explicitly registers the selected target language for translate and transform runs (payload and logApiCall extra).
- **Changed**: Documentation (README, SYSTEM-OVERVIEW) updated with app description: translate, rewrite, and transform text using AI.
- **Fixed**: CSV import (Settings > Transform): correctly decode escaped quotes (`""` → `"`) so fields containing quotation marks round-trip; export was already RFC 4180–compliant.
- **Added**: Cancel button in prompt edit form (between Save and Delete) that returns to execution mode (same as Back to Run).
- **Added**: Optional "Prompt instructions" field (single line) in prompt edit form; stored in DB as `prompt_instructions`; when set, shown in Transform Input panel header row (right-aligned, muted).
- **Changed**: Transform toolbar icon buttons (Edit, Add, Duplicate, Import/Export): default slate-400; hover white + soft pill background with transition; Edit shows blue when editing is active; Import/Export default slate-500.
- **Changed**: Transform prompt row: Edit button before Add (closer to dropdown); dropdown appearance set to "underline".
- **Changed**: Load sample prompts uses same duplicate-name resolution as file import ("Name (1)", "Name (2)", etc.); shared `resolveDuplicateNames` in `promptUtils.js`.
- **Changed**: "Load sample prompts" button: light green background and BookOpenText icon.
- **Changed**: Delete confirmation modals: confirm button uses red background and white text; cancel button unchanged.
- **Added**: Trash icon in custom prompts table (Settings > Transform) on the prompt name cell; click shows confirmation modal and deletes the prompt on confirm.
- **Changed**: Settings > Transform import: prompts with a name that already exists are added as copies with "Name (1)", "Name (2)", etc., instead of overwriting.
- **Added**: "Load sample prompts" button (right-aligned on Transform prompt row) with confirmation modal; imports prompts from `config/custom-prompts.json` in merge mode.
- **Added**: Export/Import button on Transform page (prompt selection row) that opens Settings > Transform tab.



