<!-- DOCTOC SKIP -->

# Transrewrt 1.3.3 - Release Notes

**Release date:** 2026-05-27

Transrewrt 1.3.3 polishes day-to-day translate, rewrite, and transform workflows and completes the rename of Easy-mode **skills** to **presets** across the app, APIs, and developer tools. Workspace footers gain quick toggles for auto-execute and auto-copy, output metrics show cost on hover, and switch styling follows each mode’s accent. Easy-mode presets can define per-provider fallback models with an automatic retry, and token limits are estimated from input size so runs are less likely to reserve huge context windows. Maintainer tooling adds a GitHub release script, a hardened presets checker, and several fixes to the presets editor and AI Suggestion flow.

## Highlights

- **Presets (formerly skills)**: Easy-mode catalog, APIs (`/api/presets`), UI labels, dev tools (`presets-editor`, `presets-check`), and docs use **preset** nomenclature; screenshot scripts use Easy mode with the Standard preset.
- **Workspace footers**: Toggle **Auto-execute on paste** (renamed from “Auto-translate on paste”) and **Auto-copy** on translate, rewrite, and transform pages, synced with General Settings; switches use mode accent colours when on.
- **Output metrics**: Hover the elapsed/TPS line to see last-run cost when inline cost is hidden; tooltip styling matches theme borders and cost digit settings.
- **Auto-copy on Electron**: Clipboard write goes through the main process so auto-copy after a run works without requiring a click.
- **Per-provider fallback models**: Easy-mode presets support `fallback_ids` with a one-time retry when the primary model fails; presets editor AI Suggestion and `presets-check` validate fallback ids.
- **Smarter `max_tokens` estimates**: Translate, rewrite, and transform estimate limits from input size and task type (instead of reserving the model default, e.g. 65536).
- **GitHub release workflow**: `pnpm run release:github` / `release:github:dry` create releases from `release-notes/RELEASE_NOTES_<version>.md` via `scripts/release.sh`.

## Improvements

- **Presets catalog**: `presets.json` keeps metadata (`version`, `updated_at`, translation/suggestion models) at the top and `presets` last; presets-check logs start/finish per preset.
- **Presets editor**: Reload re-reads `easy-mode-config/presets.json` from disk; header labels sync after catalog fetch; AI Suggest review lets you keep or apply primary/fallback per provider; `max_tokens` raised for thinking-mode models.
- **UI polish**: Consistent toggle (`Switch`) styling in light and dark; tooltips use themed background with a thin border and no arrow; removed duplicate Clear icon on input pane stats (Clear remains in the action bar; Esc still clears).
- **Dev workflow**: Webpack dev watch ignores `images/screenshots/` so `pnpm take-screenshots` does not rebuild on every PNG; `i18n:translate:svg` is a separate script with a clear message when SVG translation is not configured.

## Fixes

- **Mode accent switches**: Workspace `switch-accent` toggles use each page’s mode colour in rewrite/transform, not a fixed green; auto-execute label matches auto-copy styling.
- **Presets editor**: AI Suggestion preset checkboxes use correct ids after rename; per-provider `fallback_ids` fields and review UI work in the preset form.
- **Presets-check**: NTFY notifications tolerate Unicode punctuation in titles; production install bundles `llm/estimateMaxTokens.js`; `run.sh` matches production (ssh-agent, `.env`, deploy key).
- **Vertical alignment**: Output metrics and footer controls align consistently in the header row and pane footer.

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed), see **[CHANGELOG.md](../dev/CHANGELOG.md)** — section **[1.3.3] - 2026-05-27**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.3.3` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](../README.md)** — Overview, installation, and quick start  
- **[USER-GUIDE](../USER-GUIDE.md)** — Full walkthrough of features and settings (Easy vs Advanced, presets, history)  
- **[presets-check/README.md](../dev/presets-check/README.md)** — Presets model availability checker (cron install, NTFY, fuzzy replacement)  
- **[presets-editor/README.md](../dev/presets-editor/README.md)** — Development presets catalog editor  
- **[DEVELOPMENT.md](../dev/DEVELOPMENT.md)** — Local setup, `release:github`, and tooling  

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](../LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
