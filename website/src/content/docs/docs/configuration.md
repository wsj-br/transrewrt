---
title: Configuration
description: Config file locations, Docker environment variables, privacy mode, and web authentication.
---

## Config file locations

| Deployment | Config location |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (use a volume to persist) |

## Environment variables (web / Docker)

Electron uses the local config file. For the web/Docker server only:

| Variable | Description |
| --- | --- |
| `PORT` | Server listening port (default `5000`) |
| `CONFIG_PATH` | Path to the config file (default `/app/data/config.json`) |
| `TZ` | Timezone for server-side time (default `Europe/London`) |
| `HISTORY_DISABLED` | Force execution history off (`true` / `1`) |
| `OPENROUTER_API_KEY` | OpenRouter API key |
| `OPENAI_API_KEY` | OpenAI API key |
| `CEREBRAS_API_KEY` | Cerebras API key |
| `ANTHROPIC_API_KEY` | Anthropic API key |
| `GOOGLE_API_KEY` | Google Gemini API key |
| `DEEPSEEK_API_KEY` | DeepSeek API key |
| `GROQ_API_KEY` | Groq API key |
| `MISTRAL_API_KEY` | Mistral API key |
| `LOCAL_LLM_URL` | Full OpenAI-compatible API base URL for a local server (include the path, e.g. Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API key |
| `NVIDIA_API_KEY` | NVIDIA API key |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API key |
| `APIFUN_API_KEY` | apikey.fun API key |
| `CUSTOM_PROVIDER_NAME` | Display name for a custom OpenAI-compatible provider |
| `CUSTOM_PROVIDER_URL` | Base URL for a custom OpenAI-compatible provider |
| `CUSTOM_PROVIDER_API_KEY` | API key for the custom provider |

All three `CUSTOM_PROVIDER_*` variables are required when using a custom endpoint. Models appear in **Advanced** mode as `{providerName}/…`.

## Privacy mode

Set `HISTORY_DISABLED` to `true` or `1` on the web/Docker server process and/or the Electron main process to force history off regardless of `config.json` or per-user preferences. This disables storing input/output history, locks **Settings → General Settings → History**, and blocks History-related APIs.

## Data persistence (Docker)

Mount a volume at `/app/data` so `config.json` and the SQLite database survive container restarts. Without a volume, data is lost when the container stops.

## Web authentication

- Default admin: `admin` / `transrewrt26`
- Manage users in **Settings → Users**
- Reset a password:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Change the default admin password immediately on any network-accessible host.
:::

## Cost display

OpenRouter returns exact billed cost when applicable. Other providers use **estimated** cost from OpenRouter’s public model pricing when an OpenRouter key is available. Estimates are not invoices.

For Settings UI (fonts, models, history, backups), see [Settings](/docs/settings/).
