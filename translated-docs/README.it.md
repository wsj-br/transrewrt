---
translated_at: "2026-03-26T00:47:36.974Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo di Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/versione-1.0.15-blue" alt="Versione"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/licenza-Apache%202.0-verde" alt="Licenza: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/piattaforma-Windows%20%7C%20Linux%20%7C%20Docker-grigio chiaro" alt="Piattaforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Strumento testuale basato su intelligenza artificiale: traduci tra lingue diverse, riscrivi in stili differenti e trasforma con prompt personalizzati — utilizzando più provider di intelligenza artificiale (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama locale). Può essere eseguito come applicazione desktop (Electron) o come applicazione web autogestita (Docker).

- **Traduci** — tra decine di lingue, con rilevamento automatico della lingua di origine
- **Riscrivi** — correggi la grammatica, migliora la chiarezza, rendi formale/informale, accorcia, espandi, rendi tecnico
- **Trasforma** — prompt AI personalizzati; crea e gestisci prompt, lingua di destinazione opzionale per ogni prompt
- **Storico** — cronologia completa delle esecuzioni con testi di input/output, filtri ed esportazione
- **Modelli e costi** — scegli modelli da qualsiasi provider configurato; dashboard per costi e utilizzo con log, riepiloghi per modello/operazione/giorno
- **Interfaccia utente** — interfaccia multilingue (oltre 30 lingue, supporto RTL), caratteri, ...
- **Modalità web** — supporto multi-utente con ruoli amministrativi
- **Desktop** — applicazione Electron per Windows e Linux
- **Autogestito** — immagine Docker per amd64 e arm64 (pronta per Raspberry Pi)

Dopo l'installazione, consulta la **[Guida utente](USER-GUIDE.it.md)** per una panoramica completa di tutte le funzionalità.

<small>**Leggi in altre lingue:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia, tranne l'inglese (UK) originale, 
> sono state tradotte mediante modelli di intelligenza artificiale; il testo potrebbe risultare impreciso o contenere errori.

</small>

<br/>

<a id="screenshots"></a>
## Screenshot

**Selettore di lingua**

![Selettore di lingua](../images/screenshots/it/language-selector.png)

**Traduzione**

![Traduzione](../images/screenshots/it/translate.png)

**Trasforma - editor di prompt**

![Trasforma - editor di prompt](../images/screenshots/it/transform-prompt-edit.png)

**Dashboard**

![Dashboard dei costi](../images/screenshots/it/dashboard-summary.png)

**Cronologia**

![Cronologia](../images/screenshots/it/history.png)

**Impostazioni - selezione del modello**

![Impostazioni - selezione del modello](../images/screenshots/it/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Indice

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Avvio rapido](#quick-start)
- [Installazione](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Ottenere una chiave API OpenRouter](#getting-an-openrouter-api-key)
- [Configurazione e ambiente](#configuration-and-environment)
- [Sviluppo e architettura](#development-and-architecture)
- [Rilasci e tag](#releases-and-tags)
- [Contribuire](#contributing)
- [Dichiarazione di non responsabilità](#disclaimer)
- [Licenza](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Avvio rapido

**Docker (consigliato per l'hosting personale)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Sostituire `sk-or-your-key` con la propria [chiave API OpenRouter](https://openrouter.ai/keys) (oppure impostare chiavi di altri provider; vedere [Configurazione](#configuration-and-environment)). Aprire [http://localhost:5000](http://localhost:5000) e modificare la password amministratore predefinita prima di esporre il servizio.

<br/>

> ℹ️ **NOTA**<br/>
> In Docker, le credenziali LLM vengono impostate tramite variabili d'ambiente come `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (non nell'interfaccia web). Su desktop (Electron), si configurano le chiavi in **Impostazioni → API**.

<br/>

**Windows**

Scaricare l'ultima versione di `Transrewrt Setup x.y.z.exe` da [Rilasci](https://github.com/wsj-br/transrewrt/releases), eseguire l'installazione e quindi avviare l'applicazione dal menu Start o tramite collegamento sul desktop. Inserire le proprie chiavi API in **Impostazioni → API**. È necessario configurare almeno un provider; OpenRouter è comune per modelli gratuiti.

<br/>

**Linux**

Scaricare l'`.AppImage` adatto per il proprio processore da [Rilasci](https://github.com/wsj-br/transrewrt/releases) (`x64` per PC comuni, `arm64` per molti dispositivi ARM, inclusi Raspberry Pi 4+), quindi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Inserire le proprie chiavi API in **Impostazioni → API**. È necessario configurare almeno un provider; OpenRouter è comune per modelli gratuiti.

Su Debian/Ubuntu potrebbe essere necessario installare alcune dipendenze aggiuntive:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Per i dettagli, vedere [Installazione → Linux](#linux-electron).

<br/>

> ℹ️ **NOTA**<br/>
> macOS al momento non è supportato. Transrewrt è disponibile per Windows, Linux e Docker.

<br/>

Una volta avviata l'app, consultare la **[Guida utente](USER-GUIDE.it.md)** per imparare a tradurre, riformulare e trasformare il testo, gestire i prompt e configurare i modelli.

<br/><br/>

<a id="installation"></a>
## Installazione

<a id="windows-electron"></a>
### Windows (Electron)

- Scaricare l'ultimo programma di installazione da [Rilasci](https://github.com/wsj-br/transrewrt/releases).
- Eseguire il file `.exe` e seguire le istruzioni del programma di installazione.
- Primo avvio: avviare l'app dal menu Start o tramite collegamento sul desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Scaricare l'`.AppImage` corrispondente (`x64` o `arm64`) da [Rilasci](https://github.com/wsj-br/transrewrt/releases).
- Eseguire: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` su x86_64/amd64, oppure usare il nome file `...-arm64.AppImage` su ARM64.
- Dipendenze aggiuntive (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Per ulteriori informazioni vedere [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Scaricare: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Impostare almeno una chiave del provider tramite ambiente (ad esempio `OPENROUTER_KEY` per OpenRouter). Passare le variabili con `-e` oppure mediante `docker compose` / `.env` per evitare che i segreti siano inseriti nell'immagine.
- Le chiavi del provider **non** vengono inserite nell'interfaccia web; il server le legge dall'ambiente.

Esempio – volume con nome per la persistenza (chiave OpenRouter tramite variabile d'ambiente):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opzione  | Descrizione                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Porta    | `5000` (da mappare con `-p 5000:5000`)                                                                        |
| Volume   | Montare `/app/data` per mantenere configurazione e database                                                   |
| Variabili d'ambiente | `PORT`, `CONFIG_PATH`, più chiavi LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - vedere [Configurazione](#configuration-and-environment) |

Per eseguire la build e avviare da sorgente: `docker compose up --build -d` oppure `pnpm docker:up` - vedere [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Ottenere una chiave API di OpenRouter

Transrewrt supporta diversi fornitori di intelligenza artificiale. [OpenRouter](https://openrouter.ai) è una scelta popolare perché aggrega molti modelli sotto una singola chiave e offre modelli gratuiti.

1. Registrati o accedi su [openrouter.ai](https://openrouter.ai).
2. Apri la pagina [Keys](https://openrouter.ai/keys) e crea una nuova chiave (assegnale un nome e, opzionalmente, un limite di credito). Puoi usare modelli gratuiti senza aggiungere credito.
3. **Versione desktop (Electron):** incolla le chiavi in **Impostazioni → API**. **Docker:** imposta le variabili d'ambiente come `OPENROUTER_KEY` (vedi [Avvio rapido](#quick-start)).

Non usare il modello **Body Builder** di OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) per tradurre, riscrivere o trasformare: restituisce payload JSON delle richieste, non il testo completato per queste operazioni. Consulta [Impostazioni → Modelli](USER-GUIDE.it.md#models) nella Guida Utente.

Puoi anche utilizzare altri provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) oppure eseguire modelli in locale con [Ollama](https://ollama.com). Consulta [Configurazione](#configuration-and-environment) per l'elenco completo dei provider supportati e delle variabili d'ambiente.

> ⚠️ **ATTENZIONE**<br/>
> Se utilizzi Ollama da un altro dispositivo, contenitore o servizio, ricorda di configurare Ollama per consentire connessioni esterne (non solo localhost).

Per informazioni su limiti, BYOK e altro, visita [Autenticazione OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configurazione e ambiente

**Percorsi del file di configurazione**

| Distribuzione         | Percorso configurazione                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (usa un volume per la persistenza) |

<br/>

**Variabili d'ambiente** (solo web/Docker; Electron utilizza il file di configurazione locale)

| Variabile         | Predefinito                 | Descrizione |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Porta di ascolto del server |
| `CONFIG_PATH`    | `/app/data/config.json` | Percorso del file di configurazione |
| `OPENROUTER_KEY` | *(vuoto)*               | Chiave API di OpenRouter |
| `OPENAI_KEY`     | *(vuoto)*               | Chiave API di OpenAI |
| `CEREBRAS_KEY`   | *(vuoto)*               | Chiave API di Cerebras |
| `ANTHROPIC_KEY`  | *(vuoto)*               | Chiave API di Anthropic |
| `GOOGLE_KEY`     | *(vuoto)*               | Chiave API di Google Gemini |
| `DEEPSEEK_KEY`   | *(vuoto)*               | Chiave API di DeepSeek |
| `GROQ_KEY`       | *(vuoto)*               | Chiave API di Groq |
| `MISTRAL_KEY`    | *(vuoto)*               | Chiave API di Mistral |
| `OLLAMA_URL`     | *(vuoto)*               | URL base di Ollama (es. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(vuoto)*               | Chiave API di xAI |

Configura solo i provider che utilizzi. Gli ID del modello utilizzano namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ecc.).

**Visualizzazione costi:** OpenRouter restituisce il costo esatto fatturato quando applicabile. Gli altri provider usano un costo **stimato** basato sui prezzi pubblici dei modelli di OpenRouter, quando è disponibile una chiave OpenRouter; in caso contrario, il costo dei provider non-OpenRouter potrebbe mostrarsi come `0`. Le stime non sono fatture.

<br/>

**Dati e persistenza:** Per Docker, monta un volume in `/app/data` in modo che `config.json` e il database SQLite permangano anche dopo il riavvio del contenitore. Senza un volume, tutti i dati andranno persi quando il contenitore si fermerà.

**Sviluppatori:** Dopo aver scaricato aggiornamenti che sostituiscono la vecchia configurazione basata su chiave singola, reimposta o unisci `data/config.json` con la nuova struttura predefinita presente in `src/config-defaults/config_default.json`, se il tuo file locale utilizza ancora campi rimossi (`api_key`, `api_url`, opzioni proxy).

<br/>

**Autenticazione web:**

- Amministratore predefinito: `admin` / `transrewrt26`.
- Gestisci gli utenti in **Impostazioni → Utenti**.
- Resetta una password: `docker exec <contenitore> reset-web-password '<nome-utente>' '<nuova-password>'`
  (da sorgente: `pnpm run reset-web-password -- <nome-utente> <nuova-password>`)

<br/>

> ⚠️ **ATTENZIONE**<br/>
> Cambia immediatamente la password amministratore predefinita su qualsiasi host accessibile dalla rete.

<br/>

Le impostazioni principali (carattere, modelli, lingue, ecc.) sono disponibili nelle Impostazioni dell'applicazione.

<br/><br/>

<a id="development-and-architecture"></a>

## Sviluppo e architettura

- **Sviluppo:** Configurazione, compilazione, test e distribuzione (Electron, Web, Docker) - vedere **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architettura e panoramica del sistema:** Struttura delle cartelle, tecnologie utilizzate, scelte progettuali - vedere **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versioni e tag

- I **tag Git** `v`* (ad esempio `v1.0.10`) attivano il [flusso di lavoro di rilascio](.github/workflows/release.yml). Le **GitHub Releases** includono l'installatore per Windows (`.exe`) e AppImage per Linux (**x64** e **arm64**).
- Le **immagini Docker** vengono pubblicate su `ghcr.io/wsj-br/transrewrt`. I tag delle immagini corrispondono alla versione Git (ad esempio `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) più il tag `latest`. Multi-architettura: `linux/amd64` e `linux/arm64` (ad esempio Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contributi

1. Forkare il repository.
2. Creare un branch per la funzionalità: `git checkout -b feature/my-feature`
3. Commit delle modifiche con un messaggio chiaro.
4. Push e apertura di una Pull Request verso `main`.

Seguire lo stile di codice esistente e testare le modifiche sia in modalità Electron che web prima dell'invio. Vedere [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per le istruzioni su come compilare e testare.

<br/>

**Segnalazione di problemi:** Aprire una issue su [GitHub](https://github.com/wsj-br/transrewrt/issues). Includere il sistema operativo (Windows / Linux / Docker) e la versione dell'app (visibile nella finestra Informazioni o nella pagina delle versioni).

<br/><br/>

<a id="disclaimer"></a>
## Dichiarazione di non responsabilità

I nomi e i loghi dei prodotti appartengono ai rispettivi proprietari e sono utilizzati esclusivamente a scopo identificativo. Questo software non è affiliato né supportato da nessuno dei marchi menzionati.

<br/><br/>

<a id="license"></a>
## Licenza

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)