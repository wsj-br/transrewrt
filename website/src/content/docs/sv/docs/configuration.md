---
title: Konfiguration
description: >-
  Platser för konfigurationsfiler, Docker-miljövariabler, sekretessläge och
  webbautentisering.
---



## Platser för konfigurationsfiler

| Distribution | Datamapp |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Webb / Docker | `/app/data/` (använd en volym för att bevara) |

Datamappen innehåller allt som är värt att säkerhetskopiera:

- `config.json` — inställningar och (skrivbords)krypterade API-nycklar
- `state.json` — senast använda språk, modell och visningsläge
- `presets.json` — cachelagrad katalog med Easy-mode-förinställningar
- `transrewrt.db` — SQLite-databas med historik, kostnader, prompter, ordlista och (webb)användare

Du kan också skapa en portabel säkerhetskopia i ZIP-format från appen – se [Inställningar → Allmänna inställningar](/docs/settings/#general-settings).

## Datapersistens (Docker)

Montera en volym vid `/app/data` så att konfigurationsfilerna och SQLite-databasen (se [Konfigurationsfilplatser](#config-file-locations)) överlever omstarter av containern. Utan en volym förloras data när containern stoppas.

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
| `LOCAL_LLM_URL` | Fullständig OpenAI-kompatibel API-bas-URL för en lokal server, inklusive sökvägen (till exempel Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API-nyckel |
| `NVIDIA_API_KEY` | NVIDIA API-nyckel |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API-nyckel |
| `APIFUN_API_KEY` | apikey.fun API-nyckel |
| `CUSTOM_PROVIDER_NAME` | Visningsnamn för en anpassad OpenAI-kompatibel leverantör |
| `CUSTOM_PROVIDER_URL` | Bas-URL för en anpassad OpenAI-kompatibel leverantör |
| `CUSTOM_PROVIDER_API_KEY` | API-nyckel för den anpassade leverantören |

Alla tre variablerna `CUSTOM_PROVIDER_*` krävs när du använder en anpassad slutpunkt. Modeller visas i **Avancerat** läge som `{providerName}/…`.

## Miljövariabler (skrivbord)

| Variabel | Beskrivning |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Ställ in på `1` för att inaktivera hårdvaruacceleration (användbart när Chromium skriver ut GPU-/EGL-fel på Linux) |
| `HISTORY_DISABLED` | Tvinga exekveringshistorik av (`true` / `1`) – se [Sekretessläge](#privacy-mode) |

## Sekretessläge

Ställ in `HISTORY_DISABLED` på `true` eller `1` på webb-/Docker-serverprocessen och/eller Electron-huvudprocessen för att tvinga historiken av oavsett `config.json` eller användarinställningar. Detta inaktiverar lagring av in-/utdatahistorik, låser **Inställningar → Allmänna inställningar → Historik** och blockerar historikrelaterade API:er.

## Webbautentisering

- Standardadministratör: `admin` / `transrewrt26`
- Hantera användare, tidsgräns för session och återkallande av session i **Inställningar → Användare** – se [Inställningar](/docs/settings/#users)
- Varje inloggad användare kan ändra sitt eget lösenord eller logga ut från användarmenyn längst ned i sidofältet
- Återställ ett lösenord:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Ändra standardadministratörslösenordet omedelbart på alla nätverksåtkomliga värdar.
:::

:::caution
Servern använder vanlig HTTP. Om du exponerar den utanför localhost eller ett betrott nätverk, placera den bakom en omvänd proxy med HTTPS (till exempel Caddy, nginx eller Traefik) så att lösenord och text inte skickas i klartext.
:::

## Kostnadsvisning

OpenRouter returnerar exakt fakturerad kostnad när det är tillämpligt. Andra leverantörer använder **beräknad** kostnad från OpenRouters offentliga modellprissättning när en OpenRouter-nyckel är tillgänglig. Uppskattningar är inte fakturor.

För användargränssnittet för inställningar (teckensnitt, modeller, historik, säkerhetskopior), se [Inställningar](/docs/settings/).
