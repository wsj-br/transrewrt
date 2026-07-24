---
title: Settings
description: Compact reference for General, Models, Languages, Glossary, Cost, Transform, Users, API, and About.
---

Open **Settings** from the sidebar to customise how the app behaves.

| Tab | Desktop | Web (admin) | Web (user) | Notes |
| --- | :---: | :---: | :---: | --- |
| General Settings | yes | yes | yes | Includes **AI experience** (Easy / Advanced) |
| Models | yes | yes | yes | Only when **AI experience** is **Advanced** |
| Languages | yes | yes | yes | |
| Cost Tracking | yes | yes | — | |
| Transform | yes | yes | yes | Bulk import/export of prompts |
| Glossary | yes | yes | yes | Term pairs for translation |
| Users | — | yes | — | |
| API Config | yes | yes | — | |
| About | yes | yes | yes | |

In **Easy** mode, pick AI via presets in the toolbar and **Provider** in General Settings; the **Models** tab is hidden.

:::note
In the web version, each user has their own configuration (AI experience, provider, models/presets, languages, options, prompts). Changes do not affect other users.
:::

## General Settings

![Settings General Settings tab](/images/screenshots/en-GB/settings-general.png)

**AI experience**

- **Easy** (default): choose a **Provider**. Cloud providers use toolbar presets. **Local LLM** lists installed local models instead. **Refresh presets catalog** fetches the latest preset list from the project repository.
  - **Free (OpenRouter)** — zero-cost option routed to available free models; quality and availability may vary
  - **Standard** — lightweight and cost-efficient; best for short texts, quick drafts, and high-volume use
  - **Advanced** — high-accuracy model for complex or nuanced content, at a higher cost
  - **Technical** — tuned for code, APIs, developer docs, and structured content; preserves formatting and terminology
- **Advanced**: pick models in the toolbar; manage the list under [Models](#models).

You can also switch Easy ↔ Advanced from the toolbar preset/model menu (**Switch to Easy/Advanced mode**, above Open Settings).

**Appearance** — Theme; **Show cost information on the actions**; **Cost fraction digits**; web-only margin around the app; **Font Family** and **Size**.

**Behaviour** — **Behaviour for ENTER**; **Auto-execute on paste**; **Auto-copy result to clipboard**; **Real-time translation while typing**; **Timeout (ms)**.

**History**

- **Keep execution history** — store input/output for the [History](/docs/history/) view. Turning off asks for confirmation and can remove stored text. If labelled *disabled by the administrator*, `HISTORY_DISABLED` is set — see [Configuration](/docs/configuration/#privacy-mode).
- **Delete history data** — remove stored text by age or clear all. Does **not** delete cost totals (use Cost Tracking for that).

**Configuration Backup** (desktop and web admins)

- Optional **Include usage data in the backup**
- **Backup configuration** — ZIP with config, state, users, preferences, prompts, and optional usage data
- **Restore from backup** — confirmation dialog with options to restore and/or clear usage data

Backups can move between desktop and web; restoring a desktop backup on web applies data to the administrator user.

## Models

Available only in **Advanced** mode.

- **Available Models** (left) and **Selected Models** (right)
- Search, **Provider** chips, **Free Only**, **Refresh**, Expand/Collapse All
- Model ids use a provider prefix (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Do not use OpenRouter **Body Builder** (`openrouter/bodybuilder`) for Translate, Rewrite, or Transform — it returns JSON request payloads, not finished text.
:::

Add with **Add**; remove with **X**. The OpenRouter free model is optional — selected models may be empty. Removing the last model from the toolbar opens **Settings → Models**. If the current model becomes unavailable, the app selects the next model in the list instead of forcing the free model.

## Languages

- **Top languages** — pinned near the top of language lists in Translate and Transform
- **Custom language** — add a language missing from the built-in list

## Cost tracking

- **Total Cost**, **Copy Value**, **Reset Cost**
- **Sync with API key usage** — align with OpenRouter account usage (OpenRouter only)
- **API Key Usage** — OpenRouter details when available
- **Delete cost data** — all data or entries older than a date

OpenRouter shows actual billed cost when applicable; other providers use estimates from OpenRouter pricing. Estimates are not invoices.

:::caution
Cost data deletion cannot be undone. Export via History or Dashboard → All Calls first if you need a backup. Related input/output history for those API calls is removed too.
:::

## Transform

Bulk manage prompts: review, delete, import, export, and load sample prompts.

## Glossary

Manage term pairs applied during [translation](/docs/translate/#use-the-glossary). Each term has source/target language and source/target text.

- Add via the bottom row and **+**
- Filter by languages or text
- Import/export CSV or XLSX; download empty templates

Desktop stores the glossary locally; web stores it per user.

## Users

Web only (admins):

- Add users, update details, reset passwords, delete accounts
- **Session Timeout** — how long a login lasts (1 hour to 7 days); changes apply only to new logins
- **Revoke sessions** — sign a user out of all devices immediately

Every signed-in user (including non-admins) can change their own password or sign out from the user menu at the bottom of the sidebar.

## API Config

Configure only the providers you use: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Local LLM** (base URL for Ollama, LM Studio, llama.cpp, or similar), and an optional custom OpenAI-compatible provider.

**Web (admin):** keys come from environment variables — this page shows which are set and lets you **Test**. Restart after changing env vars. See [Configuration](/docs/configuration/).

**Desktop:** enter keys (or Local LLM URL) and **Save** / **Edit** / **Test**. Keys are stored encrypted; you cannot view the current value, only replace it.

:::tip
No paid key needed to start: use free OpenRouter models, other free-tier providers, or a local OpenAI-compatible server such as [Ollama](https://ollama.com), LM Studio, or llama.cpp (e.g. `translategemma:4b`).
:::

## About

App name, version, build date, license, third-party notices, and repository link.
