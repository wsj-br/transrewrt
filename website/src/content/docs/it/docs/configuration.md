---
title: Configurazione
description: >-
  Posizioni dei file di configurazione, variabili d'ambiente Docker, modalità
  privacy e autenticazione web.
---



## Posizioni dei file di configurazione

| Distribuzione | Cartella dati |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (usa un volume per la persistenza) |

La cartella dati contiene tutto ciò che vale la pena di salvare:

- `config.json` — impostazioni e chiavi API crittografate (desktop)
- `state.json` — lingue, modello e stato di visualizzazione usati più di recente
- `presets.json` — catalogo predefinito della modalità Easy memorizzato nella cache
- `transrewrt.db` — database SQLite con cronologia, costi, prompt, glossario e utenti (web)

Puoi anche creare un backup ZIP portatile dall'app — vedi [Impostazioni → Impostazioni generali](/docs/settings/#general-settings).

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
| `LOCAL_LLM_URL` | URL di base API completo compatibile con OpenAI per un server locale, incluso il percorso (ad esempio Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Chiave API xAI |
| `NVIDIA_API_KEY` | Chiave API NVIDIA |
| `ALIBABA_API_KEY` | Chiave API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Chiave API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Nome visualizzato per un provider personalizzato compatibile con OpenAI |
| `CUSTOM_PROVIDER_URL` | URL di base per un provider personalizzato compatibile con OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Chiave API per il provider personalizzato |

Tutte e tre le variabili `CUSTOM_PROVIDER_*` sono richieste quando si utilizza un endpoint personalizzato. I modelli appaiono in modalità **Avanzata** come `{providerName}/…`.

## Variabili d'ambiente (desktop)

| Variabile | Descrizione |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Impostare su `1` per disabilitare l'accelerazione hardware (utile quando Chromium stampa errori GPU / EGL su Linux) |
| `HISTORY_DISABLED` | Forza la disattivazione della cronologia di esecuzione (`true` / `1`) — vedi [Modalità privacy](#privacy-mode) |

## Modalità privacy

Impostare `HISTORY_DISABLED` su `true` o `1` sul processo del server web/Docker e/o sul processo principale di Electron per forzare la disattivazione della cronologia indipendentemente da `config.json` o dalle preferenze per utente. Questo disabilita la memorizzazione della cronologia di input/output, blocca **Impostazioni → Impostazioni generali → Cronologia** e blocca le API relative alla cronologia.

## Persistenza dei dati (Docker)

Montare un volume su `/app/data` in modo che i file di configurazione e il database SQLite (vedere [Posizioni dei file di configurazione](#config-file-locations)) sopravvivano ai riavvii del contenitore. Senza un volume, i dati vengono persi quando il contenitore si ferma.

## Autenticazione web

- Amministratore predefinito: `admin` / `transrewrt26`
- Gestisci utenti, timeout sessione e revoca sessione in **Impostazioni → Utenti** — vedi [Impostazioni](/docs/settings/#users)
- Ogni utente connesso può cambiare la propria password o disconnettersi dal menu utente nella parte inferiore della barra laterale
- Reimposta una password:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Cambia immediatamente la password predefinita dell'amministratore su qualsiasi host accessibile dalla rete.
:::

:::caution
Il server comunica in HTTP semplice. Se lo esponi oltre localhost o una rete fidata, mettilo dietro un proxy inverso con HTTPS (ad esempio Caddy, nginx o Traefik) in modo che password e testo non vengano inviati in chiaro.
:::

## Visualizzazione dei costi

OpenRouter restituisce il costo esatto fatturato, quando applicabile. Altri provider utilizzano il costo **stimato** basato sui prezzi pubblici dei modelli di OpenRouter, quando è disponibile una chiave OpenRouter. Le stime non sono fatture.

Per l'interfaccia utente delle impostazioni (caratteri, modelli, cronologia, backup), vedi [Impostazioni](/docs/settings/).
