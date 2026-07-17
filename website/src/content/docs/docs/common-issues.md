---
title: Common issues
description: Troubleshooting and quick tips for Transrewrt.
---

If something does not work as expected, check these points first.

## The app will not translate, rewrite, or transform

Check that:

- you have selected a **preset** (Easy) or **model** (Advanced) in the toolbar
- in **Easy** mode, **Settings → General Settings** has a **Provider** with a working key (or Local LLM URL)
- in **Advanced** mode, at least one model is listed in **Settings → Models**
- your API setup is working (desktop: **Settings → API Config → Test**)

## The model list is empty

In **Easy** mode, confirm **Provider** is set and keys/URLs are tested. For **Local LLM**, ensure your local server is running and models are loaded.

In **Advanced** mode, open **Settings → Models**, click **Refresh**, and add models to **Selected Models**. Optionally turn on **Free Only**.

## Too slow or too expensive

- Choose a different preset or model
- Use shorter input
- Turn off **Real-time translation while typing** in General Settings
- Use free models for simple tasks

## Wrong interface language

Click the globe icon in the toolbar and choose your **Interface language**.

## Text too small or hard to read

**Settings → General Settings** → change **Font Family** and **Size**.

## Dashboard Summary looks empty

This is normal if:

- you only use **free models** and you are looking at **cost** figures (they may be zero); call-count KPIs still need data for the selected period
- the selected **time filter** does not cover when calls were made — try **All**

If KPIs are still zero after **All**, check [History](/docs/history/) or Dashboard → **All Calls**.

## Cost shows "not available" or seems wrong

OpenRouter shows actual spend when applicable. For other providers, cost is estimated from OpenRouter pricing; if no price matches, cost shows as **not available** and is not added to the total.

## Total cost does not match my provider bill

Figures in the app are **estimates for reference**, not invoices. For OpenRouter, use **Settings → Cost Tracking → Sync with API key usage**.

## History page missing from the sidebar

**Keep execution history** may be off. Enable it in General Settings unless history is disabled by the administrator (`HISTORY_DISABLED` — see [Configuration](/docs/configuration/#privacy-mode)).

## Web: redirected to login unexpectedly

Your session may have timed out. Log in again. If it happens often, check server session lifetime settings.

## Web admin: forgot password

If another admin can sign in, they can reset the password under **Settings → Users**. If you are locked out but have shell access:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Default admin username is `admin`. From a source checkout: `pnpm run reset-web-password -- <username> <new-password>`.

## Dashboard shows no data for other users (web)

Only **administrators** can view other users via the **User** filter. Regular users see only their own activity.

## Changed a prompt and lost edits

When editing a Transform prompt, click **Save** before **Back to Run**.

## Quick tips

- Start with [Translate](/docs/translate/) to confirm your setup before Rewrite or Transform
- Use [Rewrite](/docs/rewrite/) for everyday wording improvements
- Use [Transform](/docs/transform/) for repeatable custom workflows
- Stay on **Easy** mode until you need fine-grained model IDs
- Export prompts regularly if you are building a prompt library
- Use [Dashboard](/docs/dashboard/) and [History](/docs/history/) to review usage and past runs

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
