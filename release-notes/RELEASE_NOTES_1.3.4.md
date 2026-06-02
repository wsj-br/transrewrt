# Transrewrt 1.3.4 - Release Notes

**Release date:** 2026-05-30

Transrewrt 1.3.4 improves reliability on first launch and in self-hosted deployments, and makes transform prompt management more practical. The web app no longer hangs on “Loading…”, the Electron splash follows your OS light/dark theme before settings load, and the presets catalog in General Settings shows when the catalog was last updated and when the app last checked for a remote refresh. Transform prompts gain row selection, bulk delete, per-prompt export files, and export of only the prompts you choose.

## Highlights

- **Web startup reliability**: Auth-first bootstrap with a safety timeout; presets and locale load without blocking the UI; renderer no longer imports Node-only `multi-llm-ts` (fixes hang on “Loading…”).
- **Transform prompt management**: Row checkboxes (all selected by default), bulk delete toolbar, save individual prompts to `transrewrt_transform_[NAME].json`, and Export includes only selected prompts.
- **Presets catalog in Settings**: Version line shows catalog `updated_at` after the version; **Last check** shows when the app last looked for a remote catalog update.
- **Electron loading screen**: Splash follows the OS dark/light theme before app config is loaded (main-process `nativeTheme`, early body class, CSS fallback).
- **Cost Tracking**: OpenRouter auth failures (e.g. “Missing Authentication header”) map to a clear “API Key is invalid” message.

## Improvements

- **Stacked workspace layout**: Sidebar collapse/expand follows your persisted preference instead of forcing collapsed.
- **Checkbox visibility**: Unchecked boxes stay visible on muted table headers in both light and dark themes.
- **Docker builds**: Copy `pnpm-workspace.yaml` and `.npmrc` so install uses the same `minimumReleaseAgeExclude` and hoisted linker settings as local development.
- **Dependency maintenance**: `upgrade-dependencies.sh` probes for `better-sqlite3` Electron prebuild compatibility before bumping Electron; Electron pinned to ^41.7.1 until ABI 146 prebuilds ship; Dependabot sees `pnpm.overrides` duplicated in `package.json`.

## Fixes

- **Third-party notices**: `pnpm 3p-notices` handles `@jsonjoy.com/json-pointer` v1.0.2 via `licenseText` when no `LICENSE` file is present (avoids license-checker crash).

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed), see **[CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md)** — section **[1.3.4] - 2026-05-30**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.3.4` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview, installation, and quick start  
- **[USER-GUIDE](https://github.com/wsj-br/transrewrt/blob/main/USER-GUIDE.md)** — Full walkthrough of features and settings (Easy vs Advanced, presets, history)  
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, and tooling  

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](../LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
