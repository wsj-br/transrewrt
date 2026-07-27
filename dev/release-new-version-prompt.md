Create a new release notes file `release-notes/RELEASE_NOTES_<x.y.z>.md` for **Transrewrt** using the instructions below. This file is used by [`scripts/release.mjs`](https://github.com/wsj-br/transrewrt/blob/main/scripts/release.mjs) (`pnpm run release:github`) and supports the [GitHub release](https://github.com/wsj-br/transrewrt/releases) process (publish triggers [.github/workflows/release.yml](https://github.com/wsj-br/transrewrt/blob/main/.github/workflows/release.yml): Windows installer, Linux AppImages, Docker on GHCR, and GitHub Pages for `website/`).

**Before you start:** run checks that mirror what CI runs before packaging:

1. `CI=true pnpm install --frozen-lockfile` (plain `pnpm install` can miss override/lockfile mismatches that fail release CI)
2. `CI=true pnpm --dir website install --frozen-lockfile` (same check for the marketing/docs site lockfile)
3. `pnpm lint`
4. `pnpm build` then `pnpm build:main`

Fix any failures. Optionally run `pnpm package` on your machine for a full Electron packaging smoke test (slow; CI runs this on Windows/Linux).

There is no automated unit/integration test script in `package.json` (`pnpm test` is a stub); do not assume a test suite unless one was added.

**Instructions:**

1. **Read** `package.json` for the target version (`x.y.z`). If you are cutting the release, the version should already be bumped on your branch.
2. After bumping `version` in `package.json`, run `pnpm update-version` so the README version badge, `website/package.json`, marketing `VERSION`, and other synced references stay aligned ([`scripts/update-version.js`](https://github.com/wsj-br/transrewrt/blob/main/scripts/update-version.js)).
3. **Open `dev/CHANGELOG.md`.**
4. **Copy all entries under** `## Unreleased` up to (but not including) the next `## [` heading (the previous shipped version).
5. **Format the new file** to match the newest existing notes under [`release-notes/`](https://github.com/wsj-br/transrewrt/tree/main/release-notes/), especially [`release-notes/RELEASE_NOTES_1.6.2.md`](https://github.com/wsj-br/transrewrt/blob/main/release-notes/RELEASE_NOTES_1.6.2.md):
   - Title: `# Transrewrt <version> - Release Notes`
   - **Release date:** `YYYY-MM-DD` (use the authoritative “today” from context when running this task)
   - Short opening paragraph summarizing the themes of the release (user-focused).
   - Horizontal rule (`---`), then `## Changes`
     - First line: point readers to the full changelog for this version, e.g. [CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md) — section **`[x.y.z] - YYYY-MM-DD`**.
     - Group content into collapsible `<details>` blocks (not top-level `##` headings). Use these summaries when content exists:
       - **Highlights** — Most important user-visible changes (features, fixes, polish); not every changelog bullet verbatim.
       - **Improvements** — Smaller polish, tooling, packaging, CI, and quality-of-life items.
       - **Fixes** — Bug fixes.
       - **Documentation** — Links to README, product docs, and relevant `dev/` docs (see below).
     - Smaller releases may omit empty `<details>` blocks (e.g. no separate Improvements) but keep the same overall shape.
   - `## License` — Transrewrt is under **Apache License 2.0**; copyright line and link to [`LICENSE`](https://github.com/wsj-br/transrewrt/blob/main/LICENSE) as in prior release notes.
     - Under License, include a collapsible **Disclaimer** `<details>` with the same product-names disclaimer as in [`release-notes/RELEASE_NOTES_1.6.2.md`](https://github.com/wsj-br/transrewrt/blob/main/release-notes/RELEASE_NOTES_1.6.2.md), plus a link to [`NOTICES`](https://github.com/wsj-br/transrewrt/blob/main/NOTICES).
   - `## Downloads` — User-facing download guidance matching [`RELEASE_NOTES_1.6.2.md`](https://github.com/wsj-br/transrewrt/blob/main/release-notes/RELEASE_NOTES_1.6.2.md): Windows `.exe` installer (64-bit), Linux `.AppImage` (x64 or arm64), Docker pull `ghcr.io/wsj-br/transrewrt:<version>` (or `latest`), noting x64 and arm64. End with a link to that release’s Assets: `https://github.com/wsj-br/transrewrt/releases/tag/<version>`.
   - Closing thank-you line after a horizontal rule, matching prior tone.
   - Do **not** paste the raw `[Unreleased]` changelog verbatim as the only content; synthesize Highlights / Improvements / Fixes first.
6. **Update `dev/CHANGELOG.md`**:
   - Move everything from `[Unreleased]` into `## [x.y.z] - YYYY-MM-DD` (today’s date).
   - Leave an empty `## Unreleased` section at the top for future work.

**Example shape** (adapt content to the release; keep this structure):

```markdown
# Transrewrt 1.6.2 - Release Notes

**Release date:** 2026-07-25

Short intro paragraph describing what this release emphasizes for users.

---

## Changes

For a complete, line-by-line list of changes (Added / Changed / Fixed), see [CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md) — section **[1.6.2] - 2026-07-25**.

<details>
<summary><strong>Highlights</strong></summary>

- **Topic**: …
- **Topic**: …

</details>

<details>
<summary><strong>Improvements</strong></summary>

- **Topic**: …
- **Topic**: …

</details>

<details>
<summary><strong>Fixes</strong></summary>

- **Topic**: …
- **Topic**: …

</details>

<details>
<summary><strong>Documentation</strong></summary>

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview and quick start
- **[Product docs](https://wsj-br.github.io/transrewrt/docs/)** — Install, guides, settings, and troubleshooting
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, `website:publish`, and pre-release checks
- **[SYSTEM-OVERVIEW.md](https://github.com/wsj-br/transrewrt/blob/main/dev/SYSTEM-OVERVIEW.md)** — Architecture (LLM wrapper and providers)

</details>


## License

Copyright © YYYY Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](https://github.com/wsj-br/transrewrt/blob/main/LICENSE).

<details>
<summary><strong>Disclaimer</strong></summary>

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

See [NOTICES](https://github.com/wsj-br/transrewrt/blob/main/NOTICES) for more details on third-party dependencies and data sources.

</details>

## Downloads

- **Windows**: Download the `.exe` installer (64-bit) from the Assets section below.
- **Linux**: Download the `.AppImage` for either x64 or arm64 from the Assets section below.
- **Docker**: Pull using `ghcr.io/wsj-br/transrewrt:x.y.z` (or `latest` for the newest release). Both x64 and arm64 are supported.

See [Assets](https://github.com/wsj-br/transrewrt/releases/tag/x.y.z) for exact filenames and checksums.


---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
```

**Documentation links** (inside the Documentation `<details>`): always include README and product docs; add `DEVELOPMENT.md`, `SYSTEM-OVERVIEW.md`, and/or [`dev/i18n.md`](https://github.com/wsj-br/transrewrt/blob/main/dev/i18n.md) when this release materially touches architecture, dev setup, or translations.

**Summary:** Produce `release-notes/RELEASE_NOTES_<x.y.z>.md` in the same style as [`RELEASE_NOTES_1.6.2.md`](https://github.com/wsj-br/transrewrt/blob/main/release-notes/RELEASE_NOTES_1.6.2.md), fold `CHANGELOG` `[Unreleased]` into the new version section, and leave the changelog ready for the next iteration. After merge to `main`, publish with `pnpm run release:github:dry` then `pnpm run release:github` (see [DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md#publish-the-github-release-releasegithub)).
