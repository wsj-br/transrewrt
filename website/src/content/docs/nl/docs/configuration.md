---
title: Configuratie
description: >-
  Locaties van configuratiebestanden, Docker-omgevingsvariabelen, privacymodus
  en webauthenticatie.
---



## Locaties van configuratiebestanden

| Implementatie | Gegevensmap |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (gebruik een volume voor persistentie) |

De gegevensmap bevat alles wat de moeite waard is om een back-up van te maken:

- `config.json` — instellingen en (desktop) versleutelde API-sleutels
- `state.json` — laatst gebruikte talen, model en weergavestatus
- `presets.json` — gecachte Easy-mode presets catalogus
- `transrewrt.db` — SQLite-database met geschiedenis, kosten, prompts, woordenlijst en (web)gebruikers

Je kunt ook een draagbare back-up-ZIP maken vanuit de app — zie [Instellingen → Algemene instellingen](/docs/settings/#general-settings).

## Omgevingsvariabelen (web / Docker)

Electron gebruikt het lokale configuratiebestand. Alleen voor de web/Docker-server:

| Variabele | Beschrijving |
| --- | --- |
| `PORT` | Server luisterpoort (standaard `5000`) |
| `CONFIG_PATH` | Pad naar het configuratiebestand (standaard `/app/data/config.json`) |
| `TZ` | Tijdzone voor server-side tijd (standaard `Europe/London`) |
| `HISTORY_DISABLED` | Geschiedenis van uitvoering forceren (`true` / `1`) |
| `OPENROUTER_API_KEY` | OpenRouter API-sleutel |
| `OPENAI_API_KEY` | OpenAI API-sleutel |
| `CEREBRAS_API_KEY` | Cerebras API-sleutel |
| `ANTHROPIC_API_KEY` | Anthropic API-sleutel |
| `GOOGLE_API_KEY` | Google Gemini API-sleutel |
| `DEEPSEEK_API_KEY` | DeepSeek API-sleutel |
| `GROQ_API_KEY` | Groq API-sleutel |
| `MISTRAL_API_KEY` | Mistral API-sleutel |
| `LOCAL_LLM_URL` | Volledige OpenAI-compatibele API-basis-URL voor een lokale server, inclusief het pad (bijvoorbeeld Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API-sleutel |
| `NVIDIA_API_KEY` | NVIDIA API-sleutel |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API-sleutel |
| `APIFUN_API_KEY` | apikey.fun API-sleutel |
| `CUSTOM_PROVIDER_NAME` | Weergavenaam voor een aangepaste OpenAI-compatibele provider |
| `CUSTOM_PROVIDER_URL` | Basis-URL voor een aangepaste OpenAI-compatibele provider |
| `CUSTOM_PROVIDER_API_KEY` | API-sleutel voor de aangepaste provider |

Alle drie de `CUSTOM_PROVIDER_*`-variabelen zijn vereist bij het gebruik van een aangepast eindpunt. Modellen verschijnen in de modus **Geavanceerd** als `{providerName}/…`.

## Omgevingsvariabelen (desktop)

| Variabele | Beschrijving |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Instellen op `1` om hardwareversnelling uit te schakelen (handig wanneer Chromium GPU-/EGL-fouten afdrukt op Linux) |
| `HISTORY_DISABLED` | Uitvoeringsgeschiedenis forceren (`true` / `1`) — zie [Privacymodus](#privacy-mode) |

## Privacymodus

Stel `HISTORY_DISABLED` in op `true` of `1` op het web-/Docker-serverproces en/of het Electron-hoofdproces om de geschiedenis geforceerd uit te schakelen, ongeacht `config.json` of gebruikersvoorkeuren. Dit schakelt het opslaan van invoer-/uitvoergeschiedenis uit, vergrendelt **Instellingen → Algemene instellingen → Geschiedenis** en blokkeert geschiedenisgerelateerde API's.

## Gegevenspersistentie (Docker)

Koppel een volume aan `/app/data` zodat de configuratiebestanden en de SQLite-database (zie [Locaties van configuratiebestanden](#config-file-locations)) containerherstarts overleven. Zonder een volume gaan gegevens verloren wanneer de container stopt.

## Webauthenticatie

- Standaardbeheerder: `admin` / `transrewrt26`
- Beheer gebruikers, sessietime-out en sessie-intrekking in **Instellingen → Gebruikers** — zie [Instellingen](/docs/settings/#users)
- Elke aangemelde gebruiker kan zijn eigen wachtwoord wijzigen of zich afmelden via het gebruikersmenu onderaan de zijbalk
- Een wachtwoord opnieuw instellen:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Wijzig het standaard beheerderswachtwoord onmiddellijk op elke netwerktoegankelijke host.
:::

:::caution
De server spreekt gewone HTTP. Als u deze buiten localhost of een vertrouwd netwerk beschikbaar stelt, plaats deze dan achter een reverse proxy met HTTPS (bijvoorbeeld Caddy, nginx of Traefik), zodat wachtwoorden en tekst niet onversleuteld worden verzonden.
:::

## Kostenweergave

OpenRouter retourneert de exacte gefactureerde kosten indien van toepassing. Andere providers gebruiken **geschatte** kosten van de openbare modelprijzen van OpenRouter wanneer een OpenRouter-sleutel beschikbaar is. Schattingen zijn geen facturen.

Voor de gebruikersinterface van Instellingen (lettertypen, modellen, geschiedenis, back-ups), zie [Instellingen](/docs/settings/).
