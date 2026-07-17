---
title: API key
description: Get a free OpenRouter API key and connect other AI providers to Transrewrt.
---

Transrewrt needs access to at least one AI provider. You do **not** need a paid model to begin: OpenRouter offers free models after you add a key, and several other providers also offer free tiers.

Supported providers include [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, any OpenAI-compatible endpoint, and local OpenAI-compatible servers (Ollama, LM Studio, llama.cpp, and similar).

## Easy vs Advanced

- **Easy** mode (default): choose a **preset** (Free (OpenRouter), Standard, Advanced, or Technical) mapped to a **provider**. Only presets with a mapping for the current provider appear.
- **Advanced** mode: pick models directly. Model ids use a provider prefix (for example `openrouter/…`, `openai/…`, `local/…`).

## Free OpenRouter key (desktop)

1. Go to [openrouter.ai](https://openrouter.ai) and sign up or log in.
2. Open the [Keys](https://openrouter.ai/keys) page and create a new key (name it; optional credit limit). You can use free models without adding credit.
3. In Transrewrt, open **Settings → API Config**, paste the key into **OpenRouter API key**, and click **Test OpenRouter key**.

:::caution
Do not use OpenRouter’s **Body Builder** model (`openrouter/bodybuilder`) for translate, rewrite, or transform — it returns JSON request payloads, not completed text.
:::

## Other free options

You can also obtain free API keys from Cerebras, Google, Groq, Mistral AI, or [NVIDIA](https://build.nvidia.com/) (OpenAI-compatible API), or run models locally with Ollama, LM Studio, llama.cpp, or another OpenAI-compatible server (for example `translategemma:4b` via Ollama). Set the Local LLM base URL to the full API base (include the path, e.g. `http://localhost:11434/v1`) in Settings (desktop) or `LOCAL_LLM_URL` (Docker).


:::caution
If you use a local LLM server from another device or container, configure it to allow external connections (not localhost-only).
:::


## Docker / web

Set provider keys as **environment variables** on the server (for example `PROVIDER_API_KEY`). Users cannot type keys into the browser UI. See [Configuration](/docs/configuration/).


## First-run checklist

1. Open the app and set **Interface language** if needed.
2. Add and test at least one provider key (desktop) or confirm the server has env keys (web).
3. In **Easy** mode, choose a **Provider** in General Settings; in **Advanced**, add models under **Settings → Models**.
4. On **Translate**, pick a preset or model and run a short test — see [Translate text](/docs/translate/).
