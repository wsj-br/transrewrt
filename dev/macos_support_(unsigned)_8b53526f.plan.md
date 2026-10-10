---
name: macOS support (unsigned)
overview: "Add unsigned macOS (arm64 + x64 DMG) builds of the Electron app: fix the one packaged-path bug, add electron-builder mac config, add CI jobs and release upload, and document the Gatekeeper workaround."
todos:
  - id: fix-config-paths
    content: Add getPackagedContentRoot helper and use it for default config/presets paths in src/main/configPath.js
    status: pending
  - id: mac-builder-config
    content: Add mac and dmg blocks (unsigned, 512 icon) to package.json build, plus package-mac script
    status: pending
  - id: main-polish
    content: Accept input.meta for devtools shortcut in src/main/main.js
    status: pending
  - id: ci-macos
    content: Add build-macos matrix job (arm64 + x64) to release.yml, include .dmg in release assets and publish needs
    status: pending
  - id: docs-changelog
    content: Update README, dev/DEVELOPMENT.md, release-notes prompt, English website docs, and dev/CHANGELOG.md
    status: pending
  - id: verify
    content: Run pnpm run lint and validate via workflow_dispatch / on a Mac
    status: pending
isProject: false
---

# macOS support (unsigned)

Scope: Electron desktop app only. Two separate DMGs (arm64 and x64) built on native macOS runners, no code signing and no notarization. The app code is already mostly platform-neutral (`window-all-closed` / `activate` handlers exist, no Ctrl/Meta shortcuts in the renderer, default Electron menu keeps copy/paste working). It cannot be verified on this Linux machine, so CI or a real Mac is needed to test the DMG.

## 1. Fix packaged default-file paths (only real code bug)

In [src/main/configPath.js](src/main/configPath.js), `getDefaultConfigPathForLoad` and `getDefaultPresetsPathForLoad` read `dirname(process.execPath)/config/...`. On macOS, electron-builder puts `extraFiles` in `Transrewrt.app/Contents/config/`, but `execPath` is `Contents/MacOS/Transrewrt`, so the defaults would not be found.

- Add a small helper, e.g. `getPackagedContentRoot()`, returning `path.dirname(process.resourcesPath)`. This equals the app directory on Windows/Linux and `Contents/` on macOS.
- Use it in both functions when `app.isPackaged`.
- The NOTICES lookup in [src/main/main.js](src/main/main.js) (around line 643) already uses `dirname(process.resourcesPath)`, so it needs no change.
- Leave the `process.execPath`-based entries in `getConfigFilePath` alone: `userData` (`~/Library/Application Support/Transrewrt`) is checked first and is writable.

## 2. electron-builder mac config

In [package.json](package.json) `build`, add:

- `mac`: `target` dmg (arch arm64 and x64 handled per job), `category: public.app-category.productivity`, `icon` from `images/transrewrt_logo_512x512.png` (electron-builder generates the `.icns`; `transrewrt_logo.png` is 509x327 and not square, so do not use it), `identity: null` to skip signing, `hardenedRuntime: false`, `artifactName: "${productName}-${version}-${arch}.${ext}"`.
- `dmg`: simple default layout (optional title and icon).
- Add `build/electron-builder.mac-arm64.cjs` and `build/electron-builder.mac-x64.cjs` only if a per-arch override is needed; otherwise pass `--arm64` / `--x64` on the CLI, as the x64 Linux job does.
- Add `pnpm run package-mac` script mirroring `package` (build, build:main, write-build-timestamp, electron-rebuild, `electron-builder --mac dmg`).

`scripts/electron-rebuild.js` rebuilds `better-sqlite3` for the host arch, which works on a native macOS runner (Xcode CLT is preinstalled). A universal build is intentionally avoided because of the native module.

## 3. Small main-process polish

In [src/main/main.js](src/main/main.js):

- Devtools shortcut checks `input.control`; also accept `input.meta` (low priority, devtools is disabled anyway).
- Keep `resolveAppIconPath` fallback as is (macOS dock icon comes from the bundle).
- Do not add `titleBarStyle` changes unless wanted later.

## 4. CI and release

In [.github/workflows/release.yml](.github/workflows/release.yml):

- Add `build-macos` job with matrix: `macos-latest` (arm64) and an Intel runner (x64, e.g. `macos-15-intel`), same steps as `build-linux` (pnpm, Node 24, `pnpm install`, build, build:main, timestamp, electron-rebuild), then `pnpm exec electron-builder --mac dmg --arm64|--x64 --publish never`, with `CSC_IDENTITY_AUTO_DISCOVERY=false`.
- Upload `release/*.dmg` as `Transrewrt-dmg-<version>-<arch>` (name must match the `Transrewrt-*` download pattern).
- Add `build-macos` to `publish-release-assets` `needs` and add `release-assets/**/*.dmg` to its `files`.
- Update the header comment.
- Optional: a `workflow_dispatch` validation workflow like the existing AppImage ones.

## 5. Docs (English only)

- [README.md](README.md): macOS download section with the unsigned workaround: right-click the app and choose Open, or `xattr -dr com.apple.quarantine /Applications/Transrewrt.app`; note the Apple Silicon vs Intel DMGs.
- [dev/DEVELOPMENT.md](dev/DEVELOPMENT.md): macOS dev setup (Xcode CLT, Node 24, pnpm), `pnpm run package-mac`, and release artifacts table.
- [dev/release-new-version-prompt.md](dev/release-new-version-prompt.md): add macOS to the Downloads guidance.
- English website docs only; do not touch translated docs.
- [dev/CHANGELOG.md](dev/CHANGELOG.md): `Added` entry for macOS DMG builds and `Fixed` entry for the packaged default config path.

## 6. Verify

- `pnpm run lint` (eslint + typecheck) locally.
- Trigger the release workflow manually (workflow_dispatch) and confirm both DMGs build.
- On a Mac: install the DMG, bypass Gatekeeper, confirm the app starts, default config and presets load, SQLite history works, settings window opens, and configuration backup/restore works.

## Risks

- Unsigned apps show a Gatekeeper warning on first launch (documented workaround).
- A `better-sqlite3` compile problem against Electron 44 on macOS would only show up on the first CI run.