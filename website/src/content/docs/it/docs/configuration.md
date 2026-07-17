---
title: Configurazione
description: >-
  Posizioni dei file di configurazione, variabili d'ambiente Docker, modalità
  privacy e autenticazione web.
translation_last_updated: '2026-07-17T14:58:58.082Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: it
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - google/gemini-2.5-flash
---



## Posizioni dei file di configurazione

| Distribuzione | Posizione della configurazione |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (usa un volume per la persistenza) |

## Variabili d'ambiente (web / Docker)

Electron usa il file di configurazione locale. Solo per il server web/Docker:

| Variabile | Descrizione |
| --- | --- |
| `PORT` | Porta di ascolto del server (predefinita `5000`) |
| `CONFIG_PATH` | Percorso del file di configurazione (predefinito `/app/data/config.json`) |
| `TZ` | Fuso orario per l'ora lato server (predefinito `Europe/London`) |
| `HISTORY_DISABLED` | Forza la disattivazione della cronologia di esecuzione (`true` / `1`) |
| `OPENROUTER_API_KEY` | Chiave API OpenRouter |
| `OPENAI_API_KEY` | Chiave API OpenAI |
| `CEREBRAS_API_KEY` | Chiave API Cerebras |
| `ANTHROPIC_API_KEY` | Chiave API Anthropic |
| `GOOGLE_API_KEY` | Chiave API Google Gemini |
| `DEEPSEEK_API_KEY` | Chiave API DeepSeek |
| `GROQ_API_KEY` | Chiave API Groq |
| `MISTRAL_API_KEY` | Chiave API Mistral |
| `LOCAL_LLM_URL` | URL di base completa dell'API compatibile con OpenAI per un server locale (includere il percorso, ad esempio Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Chiave API xAI |
| `NVIDIA_API_KEY` | Chiave API NVIDIA |
| `ALIBABA_API_KEY` | Chiave API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Chiave API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Nome visualizzato per un provider personalizzato compatibile con OpenAI |
| `CUSTOM_PROVIDER_URL` | URL di base per un provider personalizzato compatibile con OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Chiave API per il provider personalizzato |

Tutte e tre le variabili `CUSTOM_PROVIDER_*` sono richieste quando si utilizza un endpoint personalizzato. I modelli appaiono in modalità **Avanzata** come `{providerName}/…`.

## Modalità privacy

Imposta `HISTORY_DISABLED` su `true` o `1` nel processo del server web/Docker e/o nel processo principale di Electron per forzare la disattivazione della cronologia indipendentemente da `config.json` o dalle preferenze per utente. Questo disabilita la memorizzazione della cronologia di input/output, blocca **Impostazioni → Impostazioni generali → Cronologia** e blocca le API relative alla cronologia.

## Persistenza dei dati (Docker)

Monta un volume su `/app/data` in modo che `config.json` e il database SQLite sopravvivano ai riavvii del container. Senza un volume, i dati vengono persi quando il container si ferma.

## Autenticazione web

- Amministratore predefinito: `admin` / `transrewrt26`
- Gestisci gli utenti in **Impostazioni → Utenti**
- Reimposta una password:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Cambia immediatamente la password predefinita dell'amministratore su qualsiasi host accessibile dalla rete.
:::

## Visualizzazione dei costi

OpenRouter restituisce il costo esatto fatturato, ove applicabile. Altri provider utilizzano il costo **stimato** basato sui prezzi pubblici dei modelli di OpenRouter quando è disponibile una chiave OpenRouter. Le stime non sono fatture.

Per l'interfaccia utente delle impostazioni (caratteri, modelli, cronologia, backup), vedere [Impostazioni](/docs/settings/).
