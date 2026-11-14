# Transrewrt 1.7.2 - Release Notes

**Release date:** 2026-11-14

Transrewrt 1.7.2 clears Translate, Rewrite, and Transform with Escape and puts the cursor back in the input box. The presets editor and presets-check skip provider batch routes and keep the standard chat model.


---

## Changes

For a complete, line-by-line list of changes (Added / Changed / Fixed), see [CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md) — section **[1.7.2] - 2026-11-14**.

<details>
<summary><strong>Highlights</strong></summary>

- **Escape**: In Translate, Rewrite, and Transform, Escape clears the input and output boxes and moves the cursor to the input box.

</details>

<details>
<summary><strong>Improvements</strong></summary>

- **Batch routes**: The presets editor and presets-check ignore provider batch routes (`:batch` ids and names ending in `(batch)`) and keep the standard chat model.

</details>

<details>
<summary><strong>Documentation</strong></summary>

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview and quick start
- **[Product docs](https://wsj-br.github.io/transrewrt/docs/)** — Install, guides, settings, and troubleshooting

</details>


## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](https://github.com/wsj-br/transrewrt/blob/main/LICENSE).

<details>
<summary><strong>Disclaimer</strong></summary>

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

See [NOTICES](https://github.com/wsj-br/transrewrt/blob/main/NOTICES) for more details on third-party dependencies and data sources.

</details>

## Downloads

- **Windows**: Download the `.exe` installer (64-bit) from the Assets section below.
- **Linux**: Download the `.AppImage` for either x64 or arm64 from the Assets section below.
- **macOS**: Download the unsigned `.dmg` for Apple Silicon (`arm64`) or Intel (`x64`) from the Assets section below. On first launch, right-click the app and choose Open, or run `xattr -dr com.apple.quarantine /Applications/Transrewrt.app`.
- **Docker**: Pull using `ghcr.io/wsj-br/transrewrt:1.7.2` (or `latest` for the newest release). Both x64 and arm64 are supported.

See [Assets](https://github.com/wsj-br/transrewrt/releases/tag/1.7.2) for exact filenames and checksums.


---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
