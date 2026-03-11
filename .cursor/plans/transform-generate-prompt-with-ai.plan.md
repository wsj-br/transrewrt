# Plan: Generate prompt with AI (Transform Prompt Editor)

## Overview

Add a "Generate prompt with AI" button in the Transform > Edit mode (Prompt Editor) that opens a modal. The user describes what they want; the app calls the API with a dedicated prompt to produce a JSON config (name, prompt_instructions, role, instructions, output_description, temperature). The editor fields are populated and the user can edit/review before saving. Cancel closes the modal or aborts an in-flight request. Also change the Transform sidebar icon from Sparkles to WandSparkles.

---

## 1. Button placement and UI (TransformPromptEditor)

**File:** `src/renderer/components/TransformPromptEditor.js`

- **Header layout:** Put the new button in the same row as "Back to Run", right-aligned in the gap between that button and the "Prompt name" section below.
  - Use a flex row for the header: `display: flex`, `alignItems: "center"`, `justifyContent: "space-between"` (or left group + right group with `marginLeft: "auto"` on the right group) so "Back to Run" stays left and the new button sits on the right.
  - Keep existing vertical spacing (e.g. `marginTop` on `.form`) so the distance from the header row to the "Prompt name" label is unchanged.
- **Button:** Label **"Generate prompt with AI"**, icon **Sparks** from `lucide-react` (e.g. `<Sparkles />` or the literal "Sparks" icon — confirm exact export name in lucide; if "Sparks" is not available, use **WandSparkles** for the button to differentiate from sidebar). *Clarification:* User asked for "Sparks" on the button; lucide has `Sparkles` and `WandSparkles`. Use **Sparkles** for the button (sparkles = AI generation) and reserve **WandSparkles** for the sidebar (see section 6).
- **Visibility:** Show the button when `generatePromptConfig` is available and there is a model (same pattern as `canShowImproveButton` / `canShowTranslateButton`): `(model || (models && models.length > 0)) && typeof generatePromptConfig === "function"`.

---

## 2. New modal component (GeneratePromptConfigModal)

**New file:** `src/renderer/components/GeneratePromptConfigModal.js`

- **Design:** Mirror `TranslatePromptFieldsModal` / `ImprovePromptConfigModal`: overlay + centered modal, same tokens (e.g. `colorNeutralBackground1`, `shadow28`), same title/body/actions spacing.
- **Content:**
  - **Model selector:** Same as Translate/Improve modals — use `ModelSelector` with `models`, `currentModel`, `onModelChange`; label e.g. "Model to generate prompt".
  - **Input:** Single multiline or single-line input for "What do you want the prompt to do?" (or similar). Use Fluent `Input` or `Textarea`; ensure label is visible and i18n-ready.
- **Actions:**
  - **Cancel:** Calls `onCancel`. During generation, Cancel should trigger abort (parent passes abort and modal just calls `onCancel`; parent aborts and closes — see section 3).
  - **Generate:** Calls `onConfirm(selectedModel, userDescription)`. Disable when `loading` or when model/description is empty.
- **Props:** `open`, `model`, `models`, `onConfirm`, `onCancel`, `loading`, `error`; optionally a ref or callback so parent can pass abort. Parent will use `onCancel` to abort (same as Translate modal).
- **Loading state:** Show spinner on Generate button and disable Cancel semantics only for "closing" (Cancel still calls `onCancel`; parent will abort when loading). Button text: "Generate" / "Generating…" when loading.

---

## 3. Integrate modal and generation flow (TransformPromptEditor)

**File:** `src/renderer/components/TransformPromptEditor.js`

- **Props:** Add `generatePromptConfig` and ensure it is passed from the parent (TransformWorkspace → AppContext). Signature: `generatePromptConfig(userDescription, model, signal)` returning a promise of `{ content: { name, prompt_instructions, role, instructions, output_description, temperature }, error? }`.
- **State:** `showGenerateModal`, `generateLoading`, `generateError`, `generateAbortRef` (ref to `AbortController`).
- **Handlers:**
  - **Open modal:** Set `showGenerateModal` true, clear error, reset description if stored in local state.
  - **Cancel:** Same as Translate: if `generateAbortRef.current` exists, call `abort()` and set ref to null; then close modal, set loading false, clear error.
  - **Confirm (Generate):** Call `generatePromptConfig(description, selectedModel, controller.signal)`. On success, map `content` into existing state: `name`, `prompt_instructions`, `role`, `instructions` (array → formatted for textarea via `formatInstructionsForDisplay`), `output_description`, `temperature` (clamped and rounded). Then close modal. On error, set `generateError`. On `AbortError`, just close modal. In `finally`, set loading false and clear abort ref.
- **Abort:** Use a new `AbortController` per Generate; store in `generateAbortRef.current` so Cancel can abort and the request will reject with AbortError.

---

## 4. API and prompt (apiService + prompts.json)

**File:** `src/renderer/services/apiService.js`

- Add method: `generatePromptConfigJson(userDescription, model, signal = null)`.
  - Build user message from `userDescription` (e.g. "Generate a transform prompt configuration for the following request. Return ONLY a valid JSON object with keys: name, prompt_instructions, role, instructions, output_description, temperature. ...").
  - Call `_streamChatCompletion` with system prompt from `prompts.generate_prompt_config` (see below), the user message, `model`, temperature (e.g. 0.3), `signal`, and a log label e.g. `"generate-prompt-config"`.
  - Parse response as JSON (strip markdown/code fences if present); return `{ ...result, content: parsed }` or `{ error: "..." }` on parse failure or non-object.

**File:** `src/config-defaults/prompts.json`

- Add top-level key `generate_prompt_config` with a `system` array (same shape as `translate_prompt_fields` / `improve_prompt_config`). Instructions should:
  - Define the task: given the user’s free-text description, output a single JSON object with: `name`, `prompt_instructions`, `role`, `instructions` (array of strings), `output_description`, `temperature` (number 0–1).
  - Require valid JSON only, no markdown, no explanation; first character `{`, last `}`.
  - Describe meaning of each field briefly so the model fills them appropriately for a "transform" prompt (e.g. summarization, rewriting, formatting).

---

## 5. AppContext wiring

**File:** `src/renderer/contexts/AppContext.js`

- Add `generatePromptConfig`: async function that calls `apiService.generatePromptConfigJson(userDescription, model, signal)`, handles loading/setError, applies cost and logging (same pattern as `translatePromptFields` / `improvePromptConfig`). Log type e.g. `"generate-prompt-config"` and a payload similar to improve (type `"transform"`, `transform_prompt: "Generate prompt (button)"`).
- Export `generatePromptConfig` in the context value and ensure it’s passed to the Transform workspace (and down to TransformPromptEditor).

**Files:** `src/renderer/components/App.js`, `src/renderer/components/workspace/TransformWorkspace.js`

- Pass `generatePromptConfig` from App context into TransformWorkspace and from there into `TransformPromptEditor`.

---

## 6. Sidebar icon: Sparkles → WandSparkles

**File:** `src/renderer/components/Sidebar.js`

- Replace Transform nav item icon from `Sparkles` to `WandSparkles`.
- Import: `import { ..., WandSparkles } from "lucide-react"` and use `icon: WandSparkles` for the transform nav item.

**Other usages of Transform/Sparkles (consistency):**

- **SettingsPanel.js:** Transform option in settings — change to `WandSparkles` so the "Transform" concept uses the same icon everywhere in the app.
- **TransformPromptSelector.js:** Icon next to transform prompt — change to `WandSparkles`.
- **MainContent.js:** Toolbar icon for transform mode — change to `WandSparkles`.
- **SettingsDialogModelsTab.js:** References to Transform (e.g. model list by mode) — use `WandSparkles` where it represents the Transform mode.

Apply the same icon change in these files so "Transform" is consistently WandSparkles; the Prompt Editor button stays "Generate prompt with AI" with **Sparkles** (or Sparks if we add it) to indicate "AI generation" action.

---

## 7. i18n

- Add literal strings for extraction (key-as-default): e.g. "Generate prompt with AI", "Generate prompt configuration" (modal title), "What should this prompt do?", "Model to generate prompt", "Generate", "Generating…". Use `t('...')` at definition and add to extract script scope.
- Run `pnpm run i18n:extract` after adding new UI strings.

---

## 8. CHANGELOG

**File:** `dev/CHANGELOG.md`

- Under **Unreleased** > **Added**: "Transform Prompt Editor: 'Generate prompt with AI' button and modal to generate prompt config (name, instructions, role, output description, temperature) from a short user description; Cancel closes or aborts generation."
- Under **Changed**: "Sidebar and app-wide Transform mode icon updated from Sparkles to WandSparkles."

---

## Implementation order (suggested)

1. **prompts.json** — Add `generate_prompt_config.system`.
2. **apiService.js** — Add `generatePromptConfigJson`.
3. **AppContext.js** — Add and export `generatePromptConfig`.
4. **GeneratePromptConfigModal.js** — New modal (model selector + description input + Cancel/Generate).
5. **TransformPromptEditor.js** — Header layout (flex + right-aligned button), state/handlers, render modal, wire `generatePromptConfig`.
6. **TransformWorkspace.js** and **App.js** — Pass `generatePromptConfig` prop.
7. **Sidebar.js** — Sparkles → WandSparkles for Transform.
8. **SettingsPanel.js, TransformPromptSelector.js, MainContent.js, SettingsDialogModelsTab.js** — Use WandSparkles for Transform where applicable.
9. **i18n** — New strings; run extract.
10. **dev/CHANGELOG.md** — Entries as above.

---

## Notes

- **Sparks vs Sparkles:** User requested "Sparks" for the button. Lucide has `Sparkles` and `WandSparkles`. Use **Sparkles** for "Generate prompt with AI" and **WandSparkles** for the Transform mode icon. If a "Sparks" icon is later added to lucide, the button can be switched to that.
- **Abort:** Reuse the same pattern as Translate: one ref, one controller per request, abort on Cancel when loading.
- **Validation:** Optional: validate parsed JSON has expected keys and types before applying to state; otherwise show a generic error and keep modal open.
