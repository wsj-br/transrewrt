# Task: Locale assets cleanup — remove stale SVG translation references

## Goal

Remove stale references to SVG translation from `package.json` scripts and `dev/DEVELOPMENT.md`. SVG translation (`ai-i18n-tools translate-svg`) is called by the composite `i18n:translate` script and has a dedicated `i18n:translate:svg` script, but neither `features.translateSVG` is set nor an `svg` block exists in `ai-i18n-tools.config.json`. This makes `translate-svg` a silent no-op on every `pnpm i18n:translate` run and the DEVELOPMENT.md entries mislead readers into thinking SVG translation is configured.

Also add a note to DEVELOPMENT.md documenting the screenshot workflow as Pattern B (per-locale folder) from the ai-i18n-tools locale assets guide.

## Background

`ai-i18n-tools.config.json` has:

```json
"features": {
  "extractUIStrings": true,
  "translateUIStrings": true,
  "translateMarkdown": true
}
```

No `translateSVG` key. No `svg` block. `translate-svg` runs harmlessly (no-op) but wastes time and is confusing.

`package.json` scripts:
- `"i18n:translate"`: `"ai-i18n-tools translate-ui && ai-i18n-tools translate-svg && ai-i18n-tools translate-docs"` — the middle step is a no-op
- `"i18n:translate:svg"`: `"ai-i18n-tools translate-svg"` — dedicated but unconfigured

Screenshot PNG files follow Pattern B (per-locale folder): `images/screenshots/<locale>/<name>.png`. The `take-screenshots.js` script writes to all locales. `translate-docs` rewrites the locale segment via `regexAdjustments`. This workflow is correct and needs no code changes — only documentation.

## Pre-conditions — verify before starting

1. Run `pnpm i18n:translate` and confirm it currently completes without error (even though `translate-svg` is a no-op).
2. Search `dev/DEVELOPMENT.md` for `translate-svg` and confirm it appears in at least two places: the UI/docs command table around line 388 and the Useful Commands Summary table around line 585.

## Exact file changes

### Step 1 — `package.json`: fix the composite `i18n:translate` script

Line 34 — remove `ai-i18n-tools translate-svg &&` from the middle of the composite command:

Before:
```json
"i18n:translate": "ai-i18n-tools translate-ui && ai-i18n-tools translate-svg && ai-i18n-tools translate-docs",
```

After:
```json
"i18n:translate": "ai-i18n-tools translate-ui && ai-i18n-tools translate-docs",
```

### Step 2 — `package.json`: update the dedicated `i18n:translate:svg` script

Line 36 — replace the body with an informational echo so callers get a clear message instead of a silent no-op:

Before:
```json
"i18n:translate:svg": "ai-i18n-tools translate-svg",
```

After:
```json
"i18n:translate:svg": "echo \"SVG translation is not configured. To enable it: set features.translateSVG and add a svg block in ai-i18n-tools.config.json.\"",
```

### Step 3 — `dev/DEVELOPMENT.md`: update the UI translations command table

Find the two rows for `i18n:translate:svg` and `i18n:translate` in the "UI translations and documentation" section (around lines 388–389):

Before (two rows):
```
| `pnpm run i18n:translate:svg`                   | Translate configured SVG assets via OpenRouter (see `ai-i18n-tools translate-svg --help`)                                                                                                  |
| `pnpm run i18n:translate`                       | Runs `translate-ui`, then `translate-svg`, then `translate-docs`                                                                                                                           |
```

After:
```
| `pnpm run i18n:translate:svg`                   | Not currently configured — prints an informational message. To enable SVG translation: set `features.translateSVG` and add an `svg` block in `ai-i18n-tools.config.json`.                 |
| `pnpm run i18n:translate`                       | Runs `translate-ui`, then `translate-docs`                                                                                                                                                 |
```

Also update the paragraph below the table that mentions optional SVG translation. Find this line (around line 381):

Before:
```
...Extract, UI translation, optional SVG translation, and markdown documentation translation share one config file...
```

After:
```
...Extract, UI translation, and markdown documentation translation share one config file...
```

### Step 4 — `dev/DEVELOPMENT.md`: update the Useful Commands Summary table

Find the two rows in the "UI translations and docs" section of the Useful Commands Summary (around lines 585–587):

Before:
```
| `pnpm run i18n:translate:svg`  | Translate configured SVG assets via OpenRouter                                                         |
...
| `pnpm run i18n:translate`      | `translate-ui`, then `translate-svg`, then `translate-docs`                                          |
```

After:
```
| `pnpm run i18n:translate:svg`  | Not currently configured — prints informational message (SVG translation requires `features.translateSVG` + `svg` block in config) |
...
| `pnpm run i18n:translate`      | `translate-ui`, then `translate-docs`                                                                |
```

### Step 5 — `dev/DEVELOPMENT.md`: add screenshot workflow note

In the "Documentation translation" paragraph (around line 401), after the existing sentence about `documentations` post-processing and screenshot paths, add:

```
Screenshots follow Pattern B (per-locale folder): `images/screenshots/<locale>/<name>.png`. The `take-screenshots.js` script writes PNG files for all locales; `translate-docs` rewrites the locale segment via `postProcessing.regexAdjustments`. See the [ai-i18n-tools locale assets guide](https://github.com/wsj-br/ai-i18n-tools/blob/main/docs/locale-assets.md) for full documentation of this pattern.
```

## Verification steps

Run these after completing all steps:

1. `pnpm i18n:translate` — confirm it completes; `translate-svg` should not appear in the output.
2. `pnpm run i18n:translate:svg` — confirm it prints the informational message and exits 0.
3. `grep -n "translate-svg" dev/DEVELOPMENT.md` — confirm every remaining occurrence is clearly annotated as unconfigured; no entry implies SVG translation is active.

## Files NOT to touch

- `ai-i18n-tools.config.json` — correct as-is (no SVG block is intentional)
- `scripts/take-screenshots.js` — PNG workflow is correct; no changes needed
- `images/screenshots/` tree — layout is correct (Pattern B); no changes needed
- Any translated markdown files under `translated-docs/`
