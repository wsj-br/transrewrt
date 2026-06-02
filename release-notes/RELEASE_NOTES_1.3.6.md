# Transrewrt 1.3.6 - Release Notes

**Release date:** 2026-06-02

Transrewrt 1.3.6 is a reliability release for desktop users: translate, rewrite, and transform streaming on Electron no longer drop output because of IPC ordering, OpenRouter stream deltas are parsed consistently, and invalid API keys show a clear message instead of a cryptic provider error. Maintenance updates cover the Windows upgrade-tools script and GitHub Actions for dependency auditing.

## Highlights

- **Electron streaming**: Preload resolves LLM output from the `llm:stream` invoke result (not `llm:end`), fixing an IPC race that dropped all streamed text on translate, rewrite, and transform.
- **OpenRouter deltas**: Shared `streamChoiceToString` handles multipart `content`, `delta.text`, and `message.content`; empty successful runs show a clear message instead of staying on “Translating…”.
- **API key errors**: Invalid or disabled OpenRouter keys surface a clear OpenRouter API key error instead of “User not found.”

## Fixes

- **`scripts/upgrade-tools.ps1`**: Inline `node -e` uses forward-slash paths on Windows so backslashes are not mangled as JavaScript escapes when updating `packageManager`.

## Improvements

- **CI**: `pnpm-audit` workflow uses Node 24 runtimes (`checkout@v6`, `pnpm/action-setup@v5`, `setup-node@v6`, `create-pull-request@v8`).

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed), see **[CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md)** — section **[1.3.6] - 2026-06-02**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.3.6` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview, installation, and quick start  
- **[USER-GUIDE](https://github.com/wsj-br/transrewrt/blob/main/USER-GUIDE.md)** — Full walkthrough of features and settings  
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, and pre-release checks

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](https://github.com/wsj-br/transrewrt/blob/main/LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
