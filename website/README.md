# Transrewrt website

Marketing landing page + product docs for [Transrewrt](https://github.com/wsj-br/transrewrt).

Independent pnpm project (own lockfile). Do **not** use `pnpm -w` from the Electron app root for this package.

## Commands

```bash
# from repo root
pnpm --dir website install
pnpm --dir website dev
pnpm --dir website build

# i18n pipeline (wired; translate-docs calls OpenRouter — run when ready)
pnpm --dir website i18n:status
pnpm --dir website i18n:locales
pnpm --dir website i18n:translate   # costs API usage across targetLocales

# Deploy to GitHub Pages (triggers Actions; no app release required).
# Aborts if website/ has uncommitted changes or unpushed commits (override: --allow-dirty).
pnpm website:publish                # or: pnpm --dir website publish:pages
pnpm website:publish -- --ref main --watch
pnpm website:publish:dry
```

App releases also deploy this site (Release workflow calls `website-pages.yml`). Repo **Settings → Pages → Source** must be **GitHub Actions**.

## Structure

- `/` — marketing (React islands, Tailwind v4)
- `/docs/` — Starlight docs (Get started, Guides, Settings reference, Troubleshooting)

Published at `https://wsj-br.github.io/transrewrt` (`astro.config.mjs` sets `base: '/transrewrt'`).

## i18n

Config: [`ai-i18n-tools.config.json`](./ai-i18n-tools.config.json) (separate from the app root config). Keep `targetLocales` in sync with `../ai-i18n-tools.config.json` when the app locale list changes.
