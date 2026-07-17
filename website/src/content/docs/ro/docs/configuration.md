---
title: Configurație
description: >-
  Locații fișiere de configurare, variabile de mediu Docker, mod de
  confidențialitate și autentificare web.
---



## Locații fișiere de configurare

| Implementare | Locație configurare |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (utilizați un volum pentru persistență) |

## Variabile de mediu (web / Docker)

Electron utilizează fișierul de configurare local. Doar pentru serverul web/Docker:

| Variabilă | Descriere |
| --- | --- |
| `PORT` | Portul de ascultare al serverului (implicit `5000`) |
| `CONFIG_PATH` | Calea către fișierul de configurare (implicit `/app/data/config.json`) |
| `TZ` | Fus orar pentru ora de pe server (implicit `Europe/London`) |
| `HISTORY_DISABLED` | Forțează dezactivarea istoricului execuției (`true` / `1`) |
| `OPENROUTER_API_KEY` | Cheia API OpenRouter |
| `OPENAI_API_KEY` | Cheia API OpenAI |
| `CEREBRAS_API_KEY` | Cheia API Cerebras |
| `ANTHROPIC_API_KEY` | Cheia API Anthropic |
| `GOOGLE_API_KEY` | Cheia API Google Gemini |
| `DEEPSEEK_API_KEY` | Cheia API DeepSeek |
| `GROQ_API_KEY` | Cheia API Groq |
| `MISTRAL_API_KEY` | Cheia API Mistral |
| `LOCAL_LLM_URL` | URL-ul de bază complet al API-ului compatibil OpenAI pentru un server local (includeți calea, de exemplu Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Cheia API xAI |
| `NVIDIA_API_KEY` | Cheia API NVIDIA |
| `ALIBABA_API_KEY` | Cheia API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Cheia API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Numele afișat pentru un furnizor personalizat compatibil cu OpenAI |
| `CUSTOM_PROVIDER_URL` | URL-ul de bază pentru un furnizor personalizat compatibil cu OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Cheia API pentru furnizorul personalizat |

Toate cele trei variabile `CUSTOM_PROVIDER_*` sunt necesare atunci când utilizați un punct final personalizat. Modelele apar în modul **Avansat** ca `{providerName}/…`.

## Modul de confidențialitate

Setați `HISTORY_DISABLED` la `true` sau `1` în procesul serverului web/Docker și/sau în procesul principal Electron pentru a forța dezactivarea istoricului, indiferent de `config.json` sau de preferințele fiecărui utilizator. Aceasta dezactivează stocarea istoricului de intrare/ieșire, blochează **Setări → Setări generale → Istoric** și blochează API-urile legate de istoric.

## Persistența datelor (Docker)

Montați un volum la `/app/data` astfel încât `config.json` și baza de date SQLite să supraviețuiască repornirilor containerului. Fără un volum, datele se pierd la oprirea containerului.

## Autentificare web

- Administrator implicit: `admin` / `transrewrt26`
- Gestionați utilizatorii în **Setări → Utilizatori**
- Resetați o parolă:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Schimbați imediat parola implicită de administrator pe orice gazdă accesibilă în rețea.
:::

## Afișarea costurilor

OpenRouter returnează costul exact facturat, atunci când este cazul. Alți furnizori utilizează costul **estimat** din prețurile publice ale modelelor OpenRouter, atunci când este disponibilă o cheie OpenRouter. Estimările nu sunt facturi.

Pentru interfața de utilizator Setări (fonturi, modele, istoric, backup-uri), consultați [Setări](/docs/settings/).
