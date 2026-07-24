# Transrewrt Agent Context and Guidelines

Welcome agent! This file provides essential system context, stack specifications, rules, and workflows for working on the Transrewrt repository. Follow these instructions strictly.

## 1. Project Context & Tech Stack

Transrewrt is an AI-powered text translation, rewriting, and transformation tool that supports two runtime environments from a single codebase:
- **Electron (Desktop)**: Runs locally on Windows/Linux. Loads local config via preload IPC, directly invokes OpenRouter and other vendor APIs in the main process, and opens a separate window/modal for settings.
- **Web/Docker**: Runs as an Express server in a container. Exposes a REST API, proxies LLM calls (keys reside on the server), and opens settings as an inline modal.

### Language & Module Boundaries
- **Frontend / Renderer** ([src/renderer/](file:///home/wsj/src/transrewrt/src/renderer)): Built with React 19 and **TypeScript** (`.ts`, `.tsx`). Uses ES Modules (`import`/`export`).
- **Backend / Server** ([src/server/](file:///home/wsj/src/transrewrt/src/server)): Built with Express 5 and **JavaScript** (`.js`). Uses **CommonJS** (`require`).
- **Electron Main / Preload** ([src/main/](file:///home/wsj/src/transrewrt/src/main)): Built with Electron 43 and **JavaScript** (`.js`). Uses **CommonJS** (`require`).
- **Shared Code** ([src/shared/](file:///home/wsj/src/transrewrt/src/shared)): Node-compatible utility files in **JavaScript** (`.js`) using **CommonJS** (`require`).

### Styling & UI Components
- **Tailwind CSS v4**: Active styling system, configured in [src/renderer/styles/tailwind.css](file:///home/wsj/src/transrewrt/src/renderer/styles/tailwind.css).
- **UI Primitives**: Uses Radix UI primitives/shadcn components inside [src/renderer/components/ui/](file:///home/wsj/src/transrewrt/src/renderer/components/ui).
- **Theme Support**: Light and dark mode support is tied to the `body.dark` class.

## 2. Key Directories & Core Entrypoints

- Electron Main: [src/main/main.js](file:///home/wsj/src/transrewrt/src/main/main.js)
- Preload Script: [src/main/preload.js](file:///home/wsj/src/transrewrt/src/main/preload.js)
- Web Express Entry: [src/server/index.js](file:///home/wsj/src/transrewrt/src/server/index.js)
- Shared LLM Wrapper: [src/shared/llm/index.js](file:///home/wsj/src/transrewrt/src/shared/llm/index.js)
- Database Schema: [src/shared/db/appSchema.js](file:///home/wsj/src/transrewrt/src/shared/db/appSchema.js)
- React Entrypoint: [src/renderer/index.tsx](file:///home/wsj/src/transrewrt/src/renderer/index.tsx)
- React Components: [src/renderer/components/](file:///home/wsj/src/transrewrt/src/renderer/components)
- Application Contexts: [src/renderer/contexts/](file:///home/wsj/src/transrewrt/src/renderer/contexts)
- UI Language Files: [src/renderer/locales/](file:///home/wsj/src/transrewrt/src/renderer/locales)

For detailed system details, consult [dev/SYSTEM-OVERVIEW.md](file:///home/wsj/src/transrewrt/dev/SYSTEM-OVERVIEW.md).

## 3. Dependencies & Overrides

- **Package Manager**: **pnpm** (defined by `packageManager` in `package.json`). Do not use npm or yarn.
- **Dependency Overrides**: Must be placed in [pnpm-workspace.yaml](file:///home/wsj/src/transrewrt/pnpm-workspace.yaml) under the `overrides` key.
  > [!IMPORTANT]
  > Do **not** use a top-level `overrides` block in `package.json` as pnpm will ignore it. Always modify `pnpm-workspace.yaml` and run `pnpm install` to update the lockfile.
- **Dependency Exclusions**: Any version constraints or age exclusions must be configured under `minimumReleaseAgeExclude` in `pnpm-workspace.yaml`.

## 4. Internationalization (i18n)

Transrewrt uses a workflow based on `ai-i18n-tools` + `react-i18next` (key-as-default).
- Before changing UI strings, localization settings, or translations, read the [dev/ai-i18n-tools-context.md](file:///home/wsj/src/transrewrt/dev/ai-i18n-tools-context.md) file.
- **Source Locale**: Must match `en-GB`.
- **English-only edits**: Change only English (source-locale) UI strings and documentation. Do **not** hand-edit translated locale files or non-English docs; `ai-i18n-tools` performs those translations.
- **Localization Files**:
  - Configuration: `ai-i18n-tools.config.json`
  - Master catalog: [strings.json](file:///home/wsj/src/transrewrt/src/renderer/locales/strings.json)
  - Transformed flat locales: `src/renderer/locales/{locale}.json`
  - Language list: [ui-languages.json](file:///home/wsj/src/transrewrt/src/renderer/locales/ui-languages.json)
- **Useful Scripts**:
  - Extract keys: `pnpm run i18n:extract`
  - Synchronize catalogs: `pnpm run i18n:sync`
  - Translate using LLM: `pnpm run i18n:translate` (requires `OPENROUTER_API_KEY`)
  - Update language manifests: `pnpm run i18n:locales`

## 5. Development & Verification Flow

Before completing any task, ensure the workspace remains clean, compiles, and passes quality checks:
- **Type Checking**: Run `pnpm run typecheck` (`tsc --noEmit`) to verify React TypeScript code compiles without errors.
- **Linting**: Run `pnpm run lint` (`eslint . && pnpm run typecheck`) and fix any warnings or errors. Use `pnpm run lint:fix` if needed.
- **Dev Servers**:
  - Run `pnpm run dev` to start the Electron app and watch files locally.
  - Run `pnpm run dev:web` to run the Express server and React app in a web-based local dev workflow.

For more development scripts and troubleshooting, see [dev/DEVELOPMENT.md](file:///home/wsj/src/transrewrt/dev/DEVELOPMENT.md).

## 6. Minimal Context (Each New Chat)

- **Search First**: Prefer searching the codebase using ripgrep or semantic search over making assumptions about APIs, DB schemas, or code layout.
- **Be Minimalist**: Only open or reference files that are directly related to the current task.
- **Be Focused**: Keep responses concise and focused. Do not repeat large system or project summaries unless explicitly requested by the user.

## 7. Documentation & Markdown Rules

- **English source only**: Edit documentation only in English (the source locale). Do **not** update translated docs in other languages (for example `website/src/content/docs/{locale}/…`, `translated-docs/`). Translations are produced by `ai-i18n-tools` (e.g. `translate-docs` / `sync`); agents must not hand-maintain non-English documentation.
- Do **not** use bold formatting around inline code—avoid putting asterisks outside a backtick span. Use plain `code` spans, or apply emphasis and code styling separately; never nest both on the same element.
  - *Correct*: The config file `config.json` or `**Important**: check config.json`
  - *Incorrect*: Avoid wrapping backticks inside asterisks (such as putting double asterisks outside backticks).
- Do **not** use bold formatting around links—avoid putting asterisks outside a link. Use plain `[link text](url)` spans, or apply emphasis and link styling separately; never nest both on the same element. If needed, bold the text *inside* the link brackets.
  - *Correct*: `[**link text**](url)` or `[link text](url)`
  - *Incorrect*: Avoid putting asterisks surrounding a markdown link (such as putting double asterisks outside the link brackets).

## 8. CHANGELOG Rule

- For **any notable change** (new features, bugs fixed, refactorings, configuration adjustments, or dependency changes), **add an entry** under the **Unreleased** section of [dev/CHANGELOG.md](file:///home/wsj/src/transrewrt/dev/CHANGELOG.md).
- Do **not** write changelog entries for documentation-only changes.
- Use **Keep a Changelog** type headings: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, or `Security`.
- Use a single, short line per change. Avoid duplicating full git commit messages.
