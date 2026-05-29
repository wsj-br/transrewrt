<!-- DOCTOC SKIP -->

# Transrewrt 1.2.1 - Release Notes

**Release date:** 2026-05-03

Transrewrt 1.2.1 delivers a full visual and structural refresh of the desktop and web UI: Fluent UI has been replaced by Tailwind CSS v4 with shadcn/Radix primitives, glass-style workspaces, and a clearer split/stack layout with a dedicated bottom action bar. The dashboard is streamlined around KPI cards and sortable, mobile-friendly tables; settings (especially Models), history, and self-hosted behaviour gained many responsive and accessibility-minded fixes. Administrators can optionally disable execution history via environment variable; Docker and Windows installs are more reliable; and dependency overrides address recent security advisories.

## Highlights

- **New UI stack**: Complete migration from Fluent UI to Tailwind v4 + shadcn/Radix across translate, rewrite, transform, settings, dashboard, history, and login — TypeScript support, Geist font, collapsible sidebar, mobile navigation sheet, and consistent glass panels with mode-coloured ambient glow (translate / rewrite / transform).
- **Workspace experience**: Split vs stacked layout toggle (persisted), bottom action bar for Translate / Rewrite / Transform and Clear, icon-only pane actions with tooltips, improved stacked panels and metadata placement, language swap for translate, compact model selector with provider icon, and broader clipboard fallback when `navigator.clipboard` is unavailable.
- **Dashboard**: Summary focused on KPI cards (charts removed from this flow); By Model and All Calls support column sorting, compact model labels, top-three model cards, expandable rows/cards on mobile, and clearer cost display (no stray `[object Object]`).
- **Settings & models**: Wide and narrow layouts refined for Models (scroll regions, pill tabs, badges); General gains a Light / Dark / System theme control; About and General layouts widened and tightened; Transform prompts include a visible export/import format label.
- **Administrators & hosting**: Optional `HISTORY_DISABLED` env var locks off execution history and related UI; web history is always scoped to the signed-in user; configuration backup export merges admin preferences for Electron import; Docker ships root `NOTICES`; third-party notices load correctly behind reverse-proxy path prefixes.
- **Quality & packaging**: pnpm as the sole package manager; SQLite WAL mode and graceful shutdown; Windows NSIS installer fixes for upgrades and “app running” detection; security-related pnpm overrides for transitive dependencies.

## Improvements

- **Theming**: Larger radius, rounded-full primary actions with mode glow, glassmorphism on cards and sidebar in dark mode, blueprint grid on rewrite diff, mode-tinted output panels (`--mode-output-*`), and readable light-theme output/muted text.
- **Navigation**: Sidebar collapse/expand from brand/logo clicks (persisted preference), Activity icon, aligned header heights, mobile nav sheet closes after navigation.
- **Language & locale**: Language lists show names in the selected UI language only; wider header language menu; Punjabi label entity fix; dropdown lists scroll when long.
- **Developer workflow**: Default dev ports moved to **4030** (Webpack / API); `eslint` ignores `dist-main/`; docs and scripts cleaned up (`NOTICES` naming, DEVELOPMENT/SYSTEM-OVERVIEW updates).

## Fixes

- Light theme regressions (splash CSS scope, dashboard KPI formatting, mobile `100dvh` so the workspace action bar stays visible, z-index for dropdowns over modals).
- Models tab nested scrollbars, clipping, and narrow-viewport layout issues; Users tab and settings tables on small screens.
- Web/Docker: `GET /NOTICES`, backup ZIP `config.json` merge logic, local timestamps on backup filenames.
- Electron/build: `tailwindcss` devDependency for pnpm strict layout, TDZ fix for `swapLanguages`, SQLite checkpoint on exit.

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed / Security / Removed), see **[CHANGELOG.md](CHANGELOG.md)** — section **1.2.1 - 2026-05-03**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.2.1` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](../README.md)** — Overview, installation, and quick start  
- **[USER-GUIDE](../USER-GUIDE.md)** — Full walkthrough of features and settings  
- **[SYSTEM-OVERVIEW.md](SYSTEM-OVERVIEW.md)** — Architecture and runtime modes (updated for current UI stack)  
- **[DEVELOPMENT.md](DEVELOPMENT.md)** — Local setup and tooling  
- **[i18n.md](i18n.md)** — UI translation workflow  

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](../LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
