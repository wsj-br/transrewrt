---
title: Konfiguration
description: >-
  Platser för konfigurationsfiler, Docker-miljövariabler, sekretessläge och
  webbautentisering.
---



## Platser för konfigurationsfiler

| Distribution | Konfigurationsplats |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Webb / Docker | `/app/data/config.json` (använd en volym för att bevara) |

## Miljövariabler (webb / Docker)

Electron använder den lokala konfigurationsfilen. Endast för webb-/Docker-servern:

| Variabel | Beskrivning |
| --- | --- |
| `PORT` | Serverns lyssningsport (standard `5000`) |
| `CONFIG_PATH` | Sökväg till konfigurationsfilen (standard `/app/data/config.json`) |
| `TZ` | Tidszon för serverns tid (standard `Europe/London`) |
| `HISTORY_DISABLED` | Tvinga avstängning av exekveringshistorik (`true` / `1`) |
| `OPENROUTER_API_KEY` | OpenRouter API-nyckel |
| `OPENAI_API_KEY` | OpenAI API-nyckel |
| `CEREBRAS_API_KEY` | Cerebras API-nyckel |
| `ANTHROPIC_API_KEY` | Anthropic API-nyckel |
| `GOOGLE_API_KEY` | Google Gemini API-nyckel |
| `DEEPSEEK_API_KEY` | DeepSeek API-nyckel |
| `GROQ_API_KEY` | Groq API-nyckel |
| `MISTRAL_API_KEY` | Mistral API-nyckel |
| `LOCAL_LLM_URL` | Full OpenAI-kompatibel API-bas-URL för en lokal server (inkludera sökvägen, t.ex. Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API-nyckel |
| `NVIDIA_API_KEY` | NVIDIA API-nyckel |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API-nyckel |
| `APIFUN_API_KEY` | apikey.fun API-nyckel |
| `CUSTOM_PROVIDER_NAME` | Visningsnamn för en anpassad OpenAI-kompatibel leverantör |
| `CUSTOM_PROVIDER_URL` | Bas-URL för en anpassad OpenAI-kompatibel leverantör |
| `CUSTOM_PROVIDER_API_KEY` | API-nyckel för den anpassade leverantören |

Alla tre variablerna `CUSTOM_PROVIDER_*` krävs när du använder en anpassad slutpunkt. Modeller visas i **Avancerat** läge som `{providerName}/…`.

## Sekretessläge

Ställ in `HISTORY_DISABLED` till `true` eller `1` på webb-/Docker-serverprocessen och/eller Electron-huvudprocessen för att tvinga av historik oavsett `config.json` eller användarinställningar. Detta inaktiverar lagring av in-/utdatahistorik, låser **Inställningar → Allmänna inställningar → Historik** och blockerar historikrelaterade API:er.

## Data beständighet (Docker)

Montera en volym vid `/app/data` så att `config.json` och SQLite-databasen överlever omstarter av containern. Utan en volym förloras data när containern stoppas.

## Webbautentisering

- Standardadministratör: `admin` / `transrewrt26`
- Hantera användare i **Inställningar → Användare**
- Återställ ett lösenord:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Ändra standardadministratörslösenordet omedelbart på alla nätverksåtkomliga värdar.
:::

## Kostnadsvisning

OpenRouter returnerar exakt fakturerad kostnad när det är tillämpligt. Andra leverantörer använder **uppskattad** kostnad från OpenRouters offentliga modellprissättning när en OpenRouter-nyckel är tillgänglig. Uppskattningar är inte fakturor.

För inställningar i användargränssnittet (typsnitt, modeller, historik, säkerhetskopior), se [Inställningar](/docs/settings/).
