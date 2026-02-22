# Plan: Web margin option and API key encryption

## 1. Web margin checkbox (General settings + App layout)

### 1.1 Add checkbox in Settings → General (Appearance)

- **File:** `src/renderer/components/SettingsDialogGeneralTab.js`
- **Placement:** Right after the "Appearance" heading and before the "Font Family:" row (i.e. after the `</Text>` that closes the Appearance title, before the first `<div className="form-row">` that contains Font Family).
- **Behavior:**
  - Add a checkbox: label e.g. "Show margin in web app" (or "Include margin in web application").
  - Bind to `localSettings.web_margin`; default to `true` if undefined (to match `config_default.json`).
  - On change, call `onSettingChange('web_margin', checked)`.
- **Persistence:** Already supported: `web_margin` is in `config_default.json` and will be read/saved by existing config flow (configManager / Electron IPC or web API). No extra persistence code.

### 1.2 Apply margin only when `web_margin` is true (web mode)

- **File:** `src/renderer/components/App.js`
- **Current behavior:** In web mode, the root uses `styles.webOuter` (padding `1% 1.5%`) and `styles.webFrame` for both the loading state and the main app.
- **Change:**
  - Add a second style (e.g. `webOuterNoMargin`) that matches `webOuter` but with `padding: 0` (so margin is only visible when desired).
  - **Loading branch (lines 782–793):** When `configLoading` and `isWeb`, we don’t have `settings` yet. Use the no-margin outer (e.g. `webOuterNoMargin`) so the loading screen has no margin until config is loaded.
  - **Main web branch (lines 801–838):** Use `styles.webOuter` when `isWeb && settings.web_margin === true`, otherwise use `styles.webOuterNoMargin`. So margin is applied only in web mode when `web_margin` is true.
- **Data:** `settings` comes from `useAppContext()`; `settings.web_margin` is already part of config, so no change to context/config shape.

---

## 2. Encrypt `api_key` in config (Electron only)

**Scope:** Electron app only. Web app continues to use server/env for API key; no encryption in web or server config.

### 2.1 Where to implement

- **Config directory:** Same as `config.json`. In main process, config path is from `getConfigFilePath()`; config directory = `path.dirname(getConfigFilePath())`. So key file path = `path.join(path.dirname(getConfigFilePath()), 'transrewrt.key')`.
- **Key file:** `transrewrt.key` in that directory. Content: single line, e.g. 32-byte key as hex (64 chars) or base64. If file missing, create it with a cryptographically random key and write it once.

### 2.2 Encryption format and algorithm

- **Algorithm:** AES-256 (e.g. AES-256-CBC or AES-256-GCM) using Node `crypto`.
- **Stored value:** To distinguish from legacy plain values, use a prefix, e.g. `enc:` + base64(iv + ciphertext). On read, if `api_key` is a string and starts with `enc:`, treat as encrypted and decrypt; otherwise use as plain (legacy).
- **Key:** Read from `transrewrt.key` (create with `crypto.randomBytes(32)` if missing). Use this only in the main process; never send to renderer.

### 2.3 Main process changes (`src/main/main.js`)

1. **Helpers (no IPC):**
   - `getConfigDir()` → `path.dirname(getConfigFilePath())`.
   - `getKeyFilePath()` → `path.join(getConfigDir(), 'transrewrt.key')`.
   - `getOrCreateEncryptionKey()`: if `transrewrt.key` exists, read and return the key (trim, decode from hex or base64 as chosen); if not, generate 32 random bytes, write to `transrewrt.key` (e.g. as hex), return key.
   - `isEncryptedApiKey(value)`: true if `typeof value === 'string' && value.startsWith('enc:')`.
   - `decryptApiKey(encryptedValue)`: parse `enc:` + base64, extract IV and ciphertext, decrypt with key from `getOrCreateEncryptionKey()`, return plain string.
   - `encryptApiKey(plainValue)`: if empty, return `''`; otherwise get key, generate IV, encrypt, return `'enc:' + base64(iv + ciphertext)`.

2. **Load (in-memory config is always plain):**
   - In `loadConfigFromFile()`, after merging default and user config (so we have `merged`), before assigning to `configCache`:
     - If `merged.api_key` is set and `isEncryptedApiKey(merged.api_key)` then set `merged.api_key = decryptApiKey(merged.api_key)` (catch errors and fall back to empty or keep encrypted and treat as invalid).
     - If `merged.api_key` is set and not encrypted, leave as-is (legacy plain). Optionally you can re-encrypt on next save (see below).
   - Then run existing `stripStateKeysAndDeprecated(merged)` and assign to `configCache`. So `configCache.api_key` is always plain in memory.

3. **Save (persist encrypted):**
   - In `saveConfigToFile(config)`:
     - Build object to write: `const toWrite = { ...config };`
     - If `toWrite.api_key` is a non-empty string and we’re using encryption for Electron: set `toWrite.api_key = encryptApiKey(toWrite.api_key)` (so on disk it’s encrypted). If empty, leave as `''`.
     - Write `toWrite` to the config file instead of `config`.

4. **IPC:** No API change. `config:get` returns `{ ...configCache, ...stateCache }`, so renderer always receives plain `api_key`. On `config:set` or `config:setAll`, when the key is `api_key` and we’re in Electron, the value from the renderer is plain; we store it in `configCache` as plain (so in-memory stays plain) and when we next call `saveConfigToFile(configCache)` we encrypt only at write time as above. So:
   - In `config:set`: when `key === 'api_key'`, still do `configCache[key] = value` (plain). When we call `saveConfigToFile(configCache)`, the save logic encrypts `api_key` before writing.
   - Same for `config:setAll`: config part is merged into `configCache` as-is (plain); save encrypts when writing.

5. **Migration:** Existing configs have plain `api_key`. First time we load, we don’t treat it as encrypted (no `enc:` prefix), so we leave it plain in memory. First time we save (any config change), we write it back encrypted. So no separate migration step.

### 2.4 Renderer / Settings tab

- **No decryption in renderer.** Main always exposes plain `api_key` via `config:get`. So:
  - **SettingsDialogApiTab.js:** No change to how the field is read or displayed; `localSettings.api_key` is already plain. When the user saves, `onSettingChange('api_key', value)` sends the plain value; main will encrypt before writing to disk as in 2.3.
- **apiService / configManager:** No change; they keep using `config.api_key` as they do today (plain in memory in Electron, from server in web).

### 2.5 Edge cases

- **Key file creation:** Create only when we need to encrypt (e.g. first time we save a non-empty `api_key` or on first read of an encrypted value). Alternatively create at first use of `getOrCreateEncryptionKey()` when config dir is available (e.g. at app startup or first config load). Prefer creating the key file once when the config directory is first used (e.g. in `loadConfigFromFile` or when saving), so we don’t create it if the user never uses the Electron app with an API key.
- **Decrypt failure:** If `decryptApiKey` throws (e.g. wrong key or corrupted data), clear `api_key` or set to empty and optionally log; don’t crash.
- **Empty api_key:** Never encrypt empty string; store as `""` so existing “no key” behavior is unchanged.

---

## 3. File change summary

| # | File | Change |
|---|------|--------|
| 1 | `src/renderer/components/SettingsDialogGeneralTab.js` | Add "Include margin in web application" checkbox after Appearance title, before Font Family; bind to `web_margin`, `onSettingChange('web_margin', …)`. |
| 2 | `src/renderer/components/App.js` | Add `webOuterNoMargin` style (no padding). Loading (web): use no-margin outer. Main web: use `webOuter` only when `settings.web_margin === true`, else `webOuterNoMargin`. |
| 3 | `src/main/main.js` | Add `getConfigDir`, `getKeyFilePath`, `getOrCreateEncryptionKey`, `isEncryptedApiKey`, `decryptApiKey`, `encryptApiKey`. In `loadConfigFromFile` decrypt `api_key` when encrypted. In `saveConfigToFile` encrypt `api_key` before writing. No renderer changes. |

---

## 4. Testing (short)

- **Web margin:** Toggle in General; reload or re-open settings and confirm it persists; in web build confirm margin appears only when checked.
- **API key encryption:** Set API key in Electron, close app, open `config.json` and confirm `api_key` is not plain text (e.g. starts with `enc:`). Open settings and confirm key still shows and API test works. Confirm `transrewrt.key` exists in config directory after first save with non-empty key.
