# Transrewrt 1.3.5 - Release Notes

**Release date:** 2026-06-02

Transrewrt 1.3.5 focuses on the presets editor and model settings: faster OpenRouter model browsing with on-disk caching, clearer pricing and endpoint performance in the picker, and more resilient editing when the dev server drops. Settings improvements include local-timezone presets catalog timestamps, in-app confirmation for bulk model deselection, and a quick way to add preset main/fallback models to your selection. The UI translation stack is aligned with ai-i18n-tools for easier locale maintenance.

## Highlights

- **Presets editor — OpenRouter cache**: Models, pricing, and endpoint performance are cached on disk (`presets-editor-openrouter-cache.json`, 6h TTL); the model picker and Performance page read from cache (`?force=1` or Refresh to rebuild).
- **Presets editor — model picker**: Shows best-provider latency P90 (seconds) and throughput P90 (tok/s) on the pricing row; displays “Pricing not available” instead of $0 when OpenRouter has no price data.
- **Presets editor — reliability**: Connection-lost overlay when the server stops or is unreachable (health check every 10s and on failed API calls; auto-dismiss when the server returns).
- **OpenRouter routing**: Provider routing prefers lowest latency (`sort: "latency"`) instead of highest throughput.
- **Settings → Models**: **Select from presets** adds preset main/fallback models per configured provider (with Load all); **Deselect All** uses the in-app modal and clearer outline button styling.
- **Settings → General**: Presets catalog version and **Last check** timestamps use the browser/system timezone when available (Docker `TZ` fallback on web).

## Improvements

- **i18n runtime**: Aligned with ai-i18n-tools (`setupKeyAsDefaultT`, `makeLocaleLoadersFromManifest`, `SOURCE_LOCALE` fallbacks, `flipUiArrowsForRtl`); added `i18n:dashboard` and `i18n:locales` scripts.
- **Screenshot tooling**: `take-screenshots` forces dark theme in config/user prefs and loads Noto web fonts for bn, hi, ko, pa, te, th so locale screenshots render correctly.
- **Release CI**: GitHub release workflow uses Node 24 artifact actions (`upload-artifact@v7`, `download-artifact@v8`, `action-gh-release@v3`).

## Fixes

- **i18n**: Removed unnecessary complexity (`UiLanguageProvider`, `setUiLanguage`, extra memo deps); root cause of a reported locale issue was a stale dev-server process.

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed), see **[CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md)** — section **[1.3.5] - 2026-06-02**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.3.5` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview, installation, and quick start  
- **[USER-GUIDE](https://github.com/wsj-br/transrewrt/blob/main/USER-GUIDE.md)** — Full walkthrough of features and settings (Easy vs Advanced, presets, history)  
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, and tooling  
- **[i18n.md](https://github.com/wsj-br/transrewrt/blob/main/dev/i18n.md)** — UI translation workflow (`i18n:extract`, `i18n:translate`, new dashboard/locales scripts)

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](../LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
