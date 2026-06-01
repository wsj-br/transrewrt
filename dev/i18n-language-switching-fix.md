# i18n Language-Switching Fix — Post-Mortem

**Date:** 2026-06-01  
**Scope:** `src/renderer/`

---

## Background

UI language switching (`ui_locale` in config) was partially broken: the sidebar, Settings tabs, Dashboard cards, and several other areas stayed in the previous language (or in English on the source locale) even after selecting a different language from the globe-icon dropdown.

The issue was reported in three escalating stages:

1. Settings tab labels and memoised option lists didn't update.
2. After an attempted fix, the sidebar and several other chrome areas stopped translating entirely.
3. Dashboard > Summary, Dashboard > By Model, Settings > API Config, and Settings > About still showed the old language.

The final diagnosis on stage 3 was an **old dev-server process running in the background** (started by the IDE), which meant the browser was hitting a stale JS bundle that had none of the new code. Once the orphan process was killed and the current server was used, everything worked.

---

## Root Causes

### 1. `useMemo` label arrays depended only on `[t]`

Several components build translated option/column-label arrays inside `useMemo`:

```ts
const themeOptions = useMemo(() => [
  { value: 'system', label: t('System (follow OS)') },
  ...
], [t]);  // ← stale after language change
```

In **react-i18next v17** the `t` function is produced by `useSyncExternalStore` and its reference *can* remain stable across a language change (the snapshot identity only changes when the `revision` counter increments or `lng` changes inside the snapshot). If `t` happens to keep the same reference, the memo never recomputes and the labels stay in the previous language.

**Fix:** added `i18n.language` as an extra memo dep in every such hook:

```ts
], [t, i18n.language]);
```

Files changed: `SettingsPanel`, `SettingsGeneralTab`, `SettingsModelsTab`, `SettingsCostTrackingTab`, `SettingsUsersTab`, `DashboardTabAllCalls`, `DashboardTabByModel`, `DashboardTabByDay`, `HistoryPage`, `LanguageSelector`.

---

### 2. `bindI18nStore: 'added removed'` broke the default subscription

An earlier attempt added:

```ts
react: { bindI18nStore: 'added removed' }
```

to `i18n.init()`. This caused `useTranslation()` to re-subscribe on *store* events (`addResourceBundle` / `removeResourceBundle`) rather than relying on the standard `languageChanged` event. In react-i18next v17 this conflicted with the `useSyncExternalStore` revision mechanism and caused components (including the sidebar) to *stop* re-rendering on language changes.

**Fix:** reverted `bindI18nStore`, and instead added:

```ts
react: { bindI18n: 'languageChanged loaded' }
```

which is the standard recommendation: react on both `languageChanged` and `loaded` (the latter fires after an async bundle is added).

---

### 3. `i18n.changeLanguage()` was not awaited

`HeaderLanguageSelector` and `LoginPage` called:

```ts
await loadLocale(code);
i18n.changeLanguage(code);   // not awaited
updateSettings({ ui_locale: code });
```

`changeLanguage` is async internally (it triggers `loadResources`). Without `await`, `updateSettings` could run before `languageChanged` had fired, causing the React update triggered by the settings change to race with (or beat) the i18n update.

**Fix:** introduced `setUiLanguage(code)` helper in `hooks/useUiLanguage.tsx`:

```ts
export async function setUiLanguage(code: string): Promise<void> {
  if (!code) return;
  await loadLocale(code);
  await i18n.changeLanguage(code);
}
```

All call-sites (`HeaderLanguageSelector`, `LoginPage`, `AppContext`) now use this helper.

---

### 4. No root-level React re-render guaranteed on language change

`useTranslation()` subscribes internally via `useSyncExternalStore`, but components that call `t()` inline (without memos) will only re-render if *something* in their subtree triggers a React update. There was no guarantee that a language change propagated to every mounted component quickly enough, especially for components like the sidebar that don't re-render for any other reason.

**Fix:** added `UiLanguageProvider` (wraps the whole app in `AppRoot`) which holds the active locale in React state and updates it on `languageChanged` and `loaded`. Any component that calls `useUiLanguage()` (or is a descendant of a component that does) is guaranteed to re-render.

Key components that explicitly call `useUiLanguage()` to ensure their subtrees update: `Sidebar`, `MainContent`, `DashboardPage`.

---

### 5. Stale `useFormatLocale` hook

The old `useFormatLocale` hook read `i18n.language` directly from the i18next singleton (not from React state), so the value it returned was never reactive:

```ts
// before
export function useFormatLocale() {
  const { i18n } = useTranslation();
  return i18n.language || "en-GB";
}
```

**Fix:** rewired to `useUiLanguage()` so the returned value updates when the language changes.

---

## Files Changed

| File | Change |
|------|--------|
| `src/renderer/i18n.ts` | Added `bindI18n: 'languageChanged loaded'` |
| `src/renderer/hooks/useUiLanguage.tsx` | New file: `UiLanguageProvider`, `useUiLanguage`, `setUiLanguage` |
| `src/renderer/hooks/useFormatLocale.ts` | Rewired to `useUiLanguage()` |
| `src/renderer/components/AppRoot.tsx` | Wrapped tree in `UiLanguageProvider`; removed stale `useUiLanguage` call-pattern |
| `src/renderer/components/Sidebar.tsx` | Added `useUiLanguage()`; keyed nav items on `uiLanguage` |
| `src/renderer/components/MainContent.tsx` | Added `useUiLanguage()` |
| `src/renderer/components/DashboardPage.tsx` | Added `useUiLanguage()` |
| `src/renderer/components/HeaderLanguageSelector.tsx` | Switched to `setUiLanguage()` |
| `src/renderer/components/LoginPage.tsx` | Switched to `setUiLanguage()` |
| `src/renderer/contexts/AppContext.tsx` | Switched to `setUiLanguage()` |
| `src/renderer/components/SettingsPanel.tsx` | Added `i18n.language` to `useMemo` deps |
| `src/renderer/components/SettingsGeneralTab.tsx` | Added `i18n.language` to `useMemo` deps |
| `src/renderer/components/SettingsModelsTab.tsx` | Added `i18n.language` to `useMemo` deps |
| `src/renderer/components/SettingsCostTrackingTab.tsx` | Added `i18n.language` to `useMemo` deps |
| `src/renderer/components/SettingsUsersTab.tsx` | Added `i18n.language` to `useMemo` deps |
| `src/renderer/components/DashboardTabAllCalls.tsx` | Added `i18n.language` to `useMemo` deps |
| `src/renderer/components/DashboardTabByModel.tsx` | Added `i18n.language` to `useMemo` deps |
| `src/renderer/components/DashboardTabByDay.tsx` | Added `i18n.language` to `useMemo` deps |
| `src/renderer/components/HistoryPage.tsx` | Added `i18n.language` to `useMemo` deps |
| `src/renderer/components/LanguageSelector.tsx` | Added `i18n.language` to `useMemo` deps; destructured `i18n` |

---

## Version Considerations

### react-i18next v17 (current: 17.0.8)

- `useTranslation()` now uses `useSyncExternalStore` instead of `useState`/`useReducer`. The snapshot identity is checked by `(ready, lng, keyPrefix, revision)` — not by `t` reference alone. This means **`[t]` as a sole memo dep is insufficient** if `t`'s reference is stable; always add `i18n.language`.
- `bindI18n` defaults to `"languageChanged"`. The `loaded` event should be added when bundles are loaded dynamically (as in this project): `bindI18n: 'languageChanged loaded'`.
- `bindI18nStore` (default `""`) is for *store* mutations. Setting it to `'added removed'` is only appropriate if your translations are added/removed after init *without* a matching `changeLanguage` call. In this project bundles are always added before `changeLanguage`, so `bindI18nStore` is not needed and was causing double-update conflicts.

### i18next v26 (current: 26.3.x)

- `changeLanguage()` returns a `Promise` — always `await` it before updating any downstream state.
- `addResourceBundle(..., merge=true, overwrite=true)` marks the namespace as loaded for that language, so `hasLoadedNamespace` returns `true` immediately — no need for a backend or `initImmediate: false` workaround.

### React 18 automatic batching

State updates from async callbacks (like inside a `languageChanged` event handler) are now automatically batched in React 18. This means multiple `setState` calls inside `UiLanguageProvider`'s handler will not cause multiple renders. In React 17 they would each trigger a separate render; the fix is compatible with both.

---

## Debugging Note — Stale Dev Server

During investigation, several components appeared not to respond to any fix. The actual cause was an **orphan webpack-dev-server process** left running by a previous IDE session on port 5000. The browser was loading the old bundle from that process, not the currently running one. The fix appeared to work once the old process was killed.

**How to check for this:**

```bash
# See what is listening on the dev port
lsof -i :5000
# or
ss -tlnp | grep 5000
```

If multiple processes appear, kill the stale one(s) and hard-refresh the browser (`Ctrl+Shift+R` / `Cmd+Shift+R`).
