<!-- DOCTOC SKIP -->

# Transrewrt 1.1.1 - Release Notes

**Release date:** 2026-04-01

Transrewrt 1.1.1 focuses on everyday usability improvements across rewrite, transform, settings, and self-hosted deployments. This release adds a few highly visible features, improves several existing workflows, and fixes a number of rough edges that affected layout, configuration, and sign-in behavior.

## Highlights

- **Configuration backup and restore**: You can now export and restore app configuration from **Settings > General > Configuration Backup**. This supports both desktop and self-hosted setups and includes options for usage data when needed.
- **Rewrite: Alternative versions**: Rewrite mode now includes **Alternative versions** for generating several meaning-preserving reformulations in one run.
- **Transform prompt workflow improvements**: Sample prompts are easier to load, newly saved prompts stay selected, and prompt import handles duplicate names more safely.
- **Better Linux font defaults**: Appearance presets now better match common Linux environments, making the app look more natural on Linux desktops and browsers.
- **Third-party Notices in the app**: **Settings > About** now includes a built-in **Third-party Notices** viewer, plus a direct link to the Apache 2.0 license.
- **More useful dashboard usage charts**: Dashboard summary charts now show usage counts over time and by model, making activity easier to understand at a glance.

## Improvements

- **Transform defaults are more practical**: Sample transform prompts were refined for clearer instructions and better output quality.
- **Rewrite options are easier to find**: The rewrite preset order was adjusted to make common actions easier to reach.
- **Spelling and grammar review feels more consistent**: The **Show changes** control is now presented as a proper switch in the output footer.

## Fixes

- **Better browser and password manager support**: Web login, re-login, and password-change forms now work more reliably with browser autofill and password managers.
- **Improved transform layout on narrow screens**: The **Load sample prompts** action no longer overlaps the prompt selector in tight layouts.
- **Long panel metadata no longer spills into adjacent content**: Header meta text now truncates properly and shows the full value on hover when appropriate.
- **Prompt delete confirmations now display the correct prompt name** in the main transform workspace.
- **Turning off execution history is less disruptive**: The confirmation dialog now appears only when there is history to delete.
- **About dialog build time now appears correctly in Docker deployments**.
- **Self-hosted configuration restore no longer overwrites environment-based provider keys** with stale values from a backup.
- **Desktop packaging reliability improved**: Fixed a packaged Electron startup issue caused by missing runtime dependencies.
- **Docker reliability improved on Linux arm64**: Fixed a production image issue where required native bindings could be missing at runtime.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: Multi-architecture images for amd64 and arm64 (`ghcr.io/wsj-br/transrewrt:latest` or `ghcr.io/wsj-br/transrewrt:1.1.1`)

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](README.md)** - Overview, installation, and quick start
- **[USER-GUIDE](USER-GUIDE.md)** - Full walkthrough of features and settings

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.


## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
