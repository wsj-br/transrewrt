---
title: Avvio rapido
description: >-
  Installa Transrewrt su Windows o Linux, oppure esegui l'applicazione web
  Docker self-hosted.
---



Scegli il percorso più adatto a te. Tutti sono gratuiti e open source (Apache 2.0).

## Docker (web self-hosted)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Sostituisci `PROVIDER_API_KEY` con la variabile del tuo provider (ad esempio `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) e impostane il valore. Vedi l'elenco completo in [Configurazione](/docs/configuration/#environment-variables-web--docker).

Quindi apri [http://localhost:5000](http://localhost:5000) e **cambia la password di amministrazione predefinita** prima di esporre il servizio.

:::caution
In Docker, le credenziali LLM sono impostate con variabili d'ambiente (ad esempio `PROVIDER_API_KEY`). **Non** vengono inserite nell'interfaccia utente web. Sul desktop, configuri le chiavi in **Impostazioni → Configurazione API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Scarica l'ultimo `Transrewrt Setup x.y.z.exe` da [Releases](https://github.com/wsj-br/transrewrt/releases).
2. Esegui il programma di installazione.
3. Apri l'app e inserisci le chiavi API in **Impostazioni → Configurazione API**. Configura almeno un provider; OpenRouter è una scelta comune per i modelli gratuiti.

:::note
Windows potrebbe mostrare avvisi UAC o SmartScreen per app indipendenti non firmate. Preferisci i download dalla pagina ufficiale di GitHub Releases e verifica i checksum quando pubblicati.
:::

## Linux

Scarica il `.AppImage` per la tua CPU da [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` o `arm64`, incluso Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Inserisci le chiavi API in **Impostazioni → Configurazione API**.

Se Chromium stampa errori GPU / EGL ma l'app funziona, puoi disabilitare l'accelerazione hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS non è attualmente supportato. Transrewrt è disponibile per Windows, Linux e Docker.
:::

## Aggiornamento

- **Windows** — scarica il nuovo `Transrewrt Setup x.y.z.exe` da [Releases](https://github.com/wsj-br/transrewrt/releases) ed eseguilo. Le impostazioni e i dati vengono mantenuti.
- **Linux** — scarica il nuovo `.AppImage` e sostituisci il vecchio file. Le impostazioni e i dati vengono mantenuti.
- **Docker** — esegui il pull della nuova immagine e ricrea il container. I dati persistono nel volume `/app/data`:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Passaggi successivi

1. [Ottieni una chiave API](/docs/api-key/)
2. Esegui una semplice traduzione per confermare che tutto funzioni
3. Leggi le guide [Traduci](/docs/translate/), [Riscrivi](/docs/rewrite/) e [Trasforma](/docs/transform/)
