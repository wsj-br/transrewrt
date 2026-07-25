---
title: API key
description: Connect Transrewrt to an AI provider of your choice by adding an API key, or use a local model instead.
---

Transrewrt does not include its own AI — it sends your text to an AI provider that you choose. To connect a provider you add an **API key**: a private code, issued by the provider, that works like a password for their service. You only need **one** provider to start, and you do not need to pay: several providers offer free models or free tiers, and you can also run models on your own computer with no key at all.

Supported providers include OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, any OpenAI-compatible endpoint, and local OpenAI-compatible servers (Ollama, LM Studio, llama.cpp, and similar).

## Step 1 — Choose a provider

Any supported provider works. If you are unsure which to pick:

- **Free to start**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras, and NVIDIA all offer free models or free tiers.
- **Already have an account?** If you already use OpenAI, Anthropic, or another supported provider, you can simply reuse that account.
- **Prefer to keep everything on your own computer?** Skip the key entirely and use a [local model](#using-a-local-model-instead-no-api-key) instead.

## Step 2 — Create an API key

The exact steps vary slightly by provider, but the pattern is the same everywhere:

1. Sign up or log in on the provider's website. In Transrewrt's **Settings → API Config**, each provider has an **Open provider website** link that takes you to the right place.
2. Find the **API keys** page (sometimes under account, dashboard, or developer settings) and create a new key. Some providers ask you to name the key or set a spending limit — both are optional.
3. Copy the key. It is a long string of letters and numbers, often starting with something like `sk-`.

:::note
Treat an API key like a password: do not share it, post it, or send it to anyone. If a key leaks, delete it on the provider's website and create a new one.
:::

## Step 3 — Add and test the key (desktop)

1. In Transrewrt, open **Settings → API Config**.
2. Paste the key into the field for your provider (for example **Google Gemini API key**) and save it.
3. Click **Test** next to the field to confirm the key works.

Once the test succeeds, you are ready — pick that provider on the main screen and start translating.

## Using a local model instead (no API key)

You can run models on your own computer with Ollama, LM Studio, llama.cpp, or another OpenAI-compatible server (for example `google/gemma-4-e2b` via LM Studio). Nothing leaves your machine and no API key is needed.

To connect one, set the Local LLM base URL to the full API base, including the path — for example `http://localhost:11434/v1`. On desktop, set this in **Settings → API Config**; on Docker, set the `LOCAL_LLM_URL` environment variable instead.

:::tip
If you use a local LLM server from another device or container, configure it to allow external connections (not localhost-only).
:::

## Docker / web

If you use Transrewrt in a browser, keys are managed by whoever runs the server, not typed into the browser UI. The administrator sets provider keys as **environment variables** on the server (for example `PROVIDER_API_KEY`) — see [Configuration](/docs/configuration/).

## First-run checklist

1. Open the app and set **Interface language** if needed.
2. Add and test at least one provider key — or configure a local model (desktop), or confirm the server has env keys (web).
3. In **Easy** mode, choose a **Provider** in General Settings; in **Advanced**, add models under **Settings → Models** — see [Settings](/docs/settings/#general-settings) for the two modes.
4. On **Translate**, pick a preset or model and run a short test — see [Translate text](/docs/translate/).

## If something does not work

- **The key test fails**: check the key was copied completely (no spaces before or after), and that it has not been deleted or disabled on the provider's website.
- **Translations fail with a quota or credit error**: free tiers have daily or monthly limits; wait, switch to another free provider, or add credit.
- **No provider appears in Easy mode**: open **Settings → API Config** and confirm at least one key (or the Local LLM URL) is configured and tested.

More help: [Common issues](/docs/common-issues/).
