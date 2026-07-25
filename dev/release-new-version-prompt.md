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
5. **Format the new file** to match the newest existing notes under [`release-notes/`](https://github.com/wsj-br/transrewrt/tree/main/release-notes/), e.g. [`release-notes/RELEASE-NOTES-v1.1.1.md`](https://github.com/wsj-br/transrewrt/blob/main/release-notes/RELEASE-NOTES-v1.1.1.md) (legacy naming) or prior `RELEASE_NOTES_*.md` files:
   - Title: `# Transrewrt <version> - Release Notes`
   - **Release date:** `YYYY-MM-DD` (use the authoritative “today” from context when running this task)
   - Short opening paragraph summarizing the themes of the release (user-focused).
   - `## Highlights`— Most important user-visible changes (features, fixes, polish); not every changelog bullet verbatim.
   - When it helps readability, add `## Improvements`** and/or **`## Fixes`with grouped bullets (see prior release notes); smaller releases may fold these into Highlights only.
   - `## Getting This Release`— Point to GitHub Releases; list typical artifacts: Windows installer (x64), Linux AppImage (x64 and arm64), Docker image `ghcr.io/wsj-br/transrewrt:<version>` (and `latest` when applicable). Mention that exact filenames/checksums are on the release page.
   - `## Documentation`— Link to docs using URLs that work on the GitHub release page, for example:
     - [README](https://github.com/wsj-br/transrewrt/blob/main/README.md) — overview and quick start  
     - [Product docs](https://wsj-br.github.io/transrewrt/docs/) — install, guides, settings, troubleshooting  
     - Optional: [dev/SYSTEM-OVERVIEW.md](https://github.com/wsj-br/transrewrt/blob/main/dev/SYSTEM-OVERVIEW.md), [dev/DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md), [dev/i18n.md](https://github.com/wsj-br/transrewrt/blob/main/dev/i18n.md) when this release materially touches architecture, dev setup, or translations  
   - `## Disclaimer`— Same product-names disclaimer as in [`release-notes/RELEASE-NOTES-v1.1.1.md`](https://github.com/wsj-br/transrewrt/blob/main/release-notes/RELEASE-NOTES-v1.1.1.md).
   - `## License`— Transrewrt is under **Apache License 2.0**; copyright line and link to [`LICENSE`](https://github.com/wsj-br/transrewrt/blob/main/LICENSE) as in prior release notes.
   - Closing thank-you line optional, matching prior tone.
   - Do **not** paste the raw `[Unreleased]` changelog verbatim as the only content; synthesize highlights first. You may add a detailed changelog subsection(or collapsible summary) if useful for power users.
6. **Update `dev/CHANGELOG.md`**:
   - Move everything from `[Unreleased]` into `## [x.y.z] - YYYY-MM-DD`(today’s date).
   - Leave an empty `## Unreleased`section at the top for future work.

**Example shape** (adapt section headings to match the latest release notes under `release-notes/`):

```markdown
# Transrewrt 1.3.2 - Release Notes

**Release date:** 2026-05-03

Short intro paragraph describing what this release emphasizes for users.

## Highlights

- ...
- ...

## Getting This Release

Published builds are on the GitHub **Releases** page for this tag (Windows installer, Linux AppImages, Docker `ghcr.io/wsj-br/transrewrt:…`).

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — …
- **[Product docs](https://wsj-br.github.io/transrewrt/docs/)** — …

## Disclaimer

…

## License

… Apache License 2.0 … [LICENSE](https://github.com/wsj-br/transrewrt/blob/main/LICENSE)

---

*Thank you for using Transrewrt.*
```

**Summary:** Produce `release-notes/RELEASE_NOTES_<x.y.z>.md` in the same style as existing Transrewrt release notes, fold `CHANGELOG` `[Unreleased]` into the new version section, and leave the changelog ready for the next iteration. After merge to `main`, publish with `pnpm run release:github:dry` then `pnpm run release:github` (see [DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md#publish-the-github-release-releasegithub)).
