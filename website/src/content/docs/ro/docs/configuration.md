---
title: Configurație
description: >-
  Locații fișiere de configurare, variabile de mediu Docker, mod de
  confidențialitate și autentificare web.
---



## Locații fișiere de configurare

| Implementare | Folder de date |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (utilizați un volum pentru persistență) |

Folderul de date conține tot ce merită să fie salvat:

- `config.json` — setări și chei API criptate (desktop)
- `state.json` — limbi utilizate ultima dată, model și stare de vizualizare
- `presets.json` — catalog de presetări Easy-mode cache-uit
- `transrewrt.db` — bază de date SQLite cu istoric, costuri, prompturi, glosar și utilizatori (web)

Puteți crea și o arhivă ZIP de backup portabilă din aplicație — consultați [Setări → Setări generale](/docs/settings/#general-settings).

## Persistența datelor (Docker)

Montați un volum la `/app/data` astfel încât fișierele de configurare și baza de date SQLite (vezi [Locațiile fișierelor de configurare](#config-file-locations)) să supraviețuiască repornirilor containerului. Fără un volum, datele se pierd la oprirea containerului.

## Variabile de mediu (web / Docker)

Electron utilizează fișierul de configurare local. Doar pentru serverul web/Docker:

| Variabilă | Descriere |
| --- | --- |
| `PORT` | Portul de ascultare al serverului (implicit `5000`) |
| `CONFIG_PATH` | Calea către fișierul de configurare (implicit `/app/data/config.json`) |
| `TZ` | Fus orar pentru ora de pe server (implicit `Europe/London`) |
| `HISTORY_DISABLED` | Forțează dezactivarea istoricului de execuție (`true` / `1`) |
| `OPENROUTER_API_KEY` | Cheie API OpenRouter |
| `OPENAI_API_KEY` | Cheie API OpenAI |
| `CEREBRAS_API_KEY` | Cheie API Cerebras |
| `ANTHROPIC_API_KEY` | Cheie API Anthropic |
| `GOOGLE_API_KEY` | Cheie API Google Gemini |
| `DEEPSEEK_API_KEY` | Cheia API DeepSeek |
| `GROQ_API_KEY` | Cheia API Groq |
| `MISTRAL_API_KEY` | Cheia API Mistral |
| `LOCAL_LLM_URL` | URL-ul de bază complet al API-ului compatibil OpenAI pentru un server local, inclusiv calea (de exemplu, Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Cheia API xAI |
| `NVIDIA_API_KEY` | Cheia API NVIDIA |
| `ALIBABA_API_KEY` | Cheia API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Cheia API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Numele afișat pentru un furnizor personalizat compatibil OpenAI |
| `CUSTOM_PROVIDER_URL` | URL-ul de bază pentru un furnizor personalizat compatibil OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Cheia API pentru furnizorul personalizat |

Toate cele trei variabile `CUSTOM_PROVIDER_*` sunt necesare atunci când utilizați un punct final personalizat. Modelele apar în modul **Avansat** ca `{providerName}/…`.

## Variabile de mediu (desktop)

| Variabilă | Descriere |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Setați la `1` pentru a dezactiva accelerarea hardware (util atunci când Chromium afișează erori GPU / EGL pe Linux) |
| `HISTORY_DISABLED` | Forțează dezactivarea istoricului de execuție (`true` / `1`) — vezi [Modul de confidențialitate](#privacy-mode) |

## Modul de confidențialitate

Setați `HISTORY_DISABLED` la `true` sau `1` în procesul serverului web/Docker și/sau în procesul principal Electron pentru a forța dezactivarea istoricului, indiferent de `config.json` sau de preferințele per utilizator. Aceasta dezactivează stocarea istoricului de intrare/ieșire, blochează **Setări → Setări generale → Istoric** și blochează API-urile legate de Istoric.

## Autentificare web

- Administrator implicit: `admin` / `transrewrt26`
- Gestionați utilizatorii, expirarea sesiunii și revocarea sesiunii în **Setări → Utilizatori** — consultați [Setări](/docs/settings/#users)
- Fiecare utilizator autentificat își poate schimba propria parolă sau se poate deconecta din meniul de utilizator din partea de jos a barei laterale
- Resetați o parolă:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Schimbați parola implicită de administrator imediat pe orice gazdă accesibilă în rețea.
:::

:::caution
Serverul utilizează HTTP simplu. Dacă îl expuneți dincolo de localhost sau o rețea de încredere, plasați-l în spatele unui proxy invers cu HTTPS (de exemplu, Caddy, nginx sau Traefik), astfel încât parolele și textul să nu fie trimise în clar.
:::

## Afișarea costului

OpenRouter returnează costul facturat exact, atunci când este cazul. Alți furnizori utilizează costul **estimat** din prețurile publice ale modelelor OpenRouter atunci când este disponibilă o cheie OpenRouter. Estimările nu sunt facturi.

Pentru interfața de utilizator a Setărilor (fonturi, modele, istoric, backup-uri), consultați [Setări](/docs/settings/).
