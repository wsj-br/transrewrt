# Transrewrt 1.3.2 - Release Notes

**Release date:** 2026-05-22

Transrewrt 1.3.2 focuses on keeping the Easy-mode skills catalog healthy in production and polishing the developer tooling around it. A new cron-friendly **skill-check** CLI validates model ids against live provider catalogs, applies fuzzy replacements when endpoints disappear, and can commit updates back to GitHub with NTFY notifications. The skills editor gains a persistent server log for easier debugging, workspace cleanup scripts now sweep stray log files, and the former **Regular** skill is renamed **Lite** to reflect its lightweight tier.

## Highlights

- **Dev skill-check** (`dev/skill-check/`, `pnpm run skill-check`): Validates Easy-mode `skills.json` model ids against live provider catalogs, fuzzy-replaces unavailable models (improved family matching and duplicate-dot normalization), commits/pushes only `easy-mode-config/skills.json` from an isolated runtime (`pnpm run skill-check:install`), logs changes, and sends NTFY notifications. Shared provider catalog logic lives in `src/shared/skillsProviderCatalog.js`.
- **Skills editor logging**: Server console output is written to `skills-editor.log` at the repo root (previous run rotated on startup); **Server log** button in the header; startup alert when the session log contains errors.
- **Lite skill**: The **Regular** skill is renamed **Lite** with an updated description (“Fast, lightweight, and cost-efficient…”) to better match the lightweight model tier.
- **Workspace cleanup**: `scripts/clean-workspace.sh` and `scripts/clean-workspace.ps1` remove repository `.log` files (excluding `node_modules`, `.git`, `dist`, `release`, `documentation/node_modules`) plus dev skill-check and skills-editor cache/log artifacts.

## Improvements

- **pnpm 11**: `pnpm.overrides` and `pnpm.allowedDeprecatedVersions` moved from `package.json` to `pnpm-workspace.yaml` (pnpm 11 config location).
- **Skill-check install**: Never overwrites existing `config.json` or `run.sh`; skips copying `config.example.json` when `config.json` already exists.

## Fixes

- **Skill-check git push**: Rebase on `origin/main` before push so stale shallow clones do not fail with “fetch first” when SSH auth is fine.
- **Skill-check fuzzy match**: Collapse duplicate dots in ids (e.g. `laguna-m..1` → `laguna-m.1`), prefer same model family (`laguna-m` vs `laguna-xs`), and tie-break on string similarity instead of capping bonus scores at 1.0.
- **Lint**: Removed duplicate export key in `skillsProviderCatalog.js`.

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed), see **[CHANGELOG.md](CHANGELOG.md)** — section **[1.3.2] - 2026-05-22**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.3.2` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview, installation, and quick start  
- **[USER-GUIDE](https://github.com/wsj-br/transrewrt/blob/main/USER-GUIDE.md)** — Full walkthrough of features and settings (Easy vs Advanced, skills, history)  
- **[skill-check/README.md](skill-check/README.md)** — Skills model availability checker (cron install, NTFY, fuzzy replacement)  
- **[skills-editor/README.md](skills-editor/README.md)** — Development skills catalog editor  
- **[DEVELOPMENT.md](DEVELOPMENT.md)** — Local setup and tooling  

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](../LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
