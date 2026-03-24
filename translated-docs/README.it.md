---
translated_at: "2026-03-24T01:48:40.939Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo di Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Versione"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenza: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/piattaforma-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Piattaforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Strumento testuale basato su intelligenza artificiale: traduci tra diverse lingue, riscrivi in stili diversi e trasforma con prompt personalizzati — utilizzando diversi provider di intelligenza artificiale (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama locale). Funziona come applicazione desktop (Electron) o come applicazione web self-hosted (Docker).

- **Traduci** — tra decine di lingue, con rilevamento automatico della lingua di origine
- **Riscrivi** — correggi la grammatica, migliora la chiarezza, forma formale/informale, abbrevia, espandi, rendi tecnico
- **Trasforma** — prompt personalizzati con intelligenza artificiale; crea e gestisci prompt, lingua di destinazione opzionale per ciascun prompt
- **Cronologia** — cronologia completa delle operazioni con testi iniziali e finali, filtri ed esportazione
- **Modelli e costi** — scegli i modelli da qualsiasi provider configurato; dashboard dei costi con log in SQLite, riepiloghi per modello/operazione/giorno
- **Interfaccia utente** — interfaccia multilingue (più di 30 lingue, supporto RTL), font, ...
- **Modalità web** — supporto multi-utente con ruoli amministrativi; le chiavi API rimangono lato server, mai esposte al browser
- **Desktop** — app Electron per Windows e Linux
- **Self-hosted** — immagine Docker per amd64 e arm64 (pronta per Raspberry Pi)

Una volta installato, consultare la **[Guida Utente](USER-GUIDE.it.md)** per una panoramica completa di tutte le funzionalità.

<small>**Leggi in altre lingue:** [English (UK)](README.it.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia, ad eccezione dell'inglese (UK), sono state tradotte utilizzando modelli di intelligenza artificiale; il testo potrebbe risultare impreciso o contenere errori.

<a id="screenshots"></a>
## Screenshot

**Selettore lingua**

![Selettore lingua](../images/screenshots/it/language-selector.png)

**Traduci**

![Traduci](../images/screenshots/it/translate.png)

**Trasforma - editor di prompt**

![Trasforma - editor di prompt](../images/screenshots/it/transform-prompt-edit.png)

**Dashboard**

![Dashboard dei costi](../images/screenshots/it/dashboard-summary.png)

**Cronologia**

![Cronologia](../images/screenshots/it/history.png)

**Impostazioni - selezione modello**

![Impostazioni - selezione modello](../images/screenshots/it/settings-models.png)

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
- [Come ottenere una chiave API OpenRouter](#getting-an-openrouter-api-key)
- [Configurazione e ambiente](#configuration-and-environment)
- [Sviluppo e architettura](#development-and-architecture)
- [Versioni e tag](#releases-and-tags)
- [Contributi](#contributing)
- [Dichiarazione di non responsabilità](#disclaimer)
- [Licenza](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Avvio rapido

**Docker (consigliato per l'hosting autonomo)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Sostituisci `sk-or-your-key` con la tua [chiave API OpenRouter](https://openrouter.ai/keys) (oppure imposta chiavi di altri provider; vedi [Configurazione](#configuration-and-environment)). Apri [http://localhost:5000](http://localhost:5000) e modifica la password amministratore predefinita prima di esporre il servizio.

<br/>

> ℹ️ **NOTA**<br/>
> In Docker, le credenziali LLM sono configurate tramite variabili d'ambiente come `OPENROUTER_KEY`, `OPENAI_KEY`, … (non nell'interfaccia web). Sulle applicazioni desktop (Electron) le chiavi vengono impostate in **Impostazioni → API**.

<br/>

**Windows**

Scarica l'ultima versione di `Transrewrt Setup x.y.z.exe` da [Versioni (Releases)](https://github.com/wsj-br/transrewrt/releases), esegui il programma di installazione, quindi avvia l'app dal menu Start o dal collegamento sul desktop. Inserisci le tue chiavi API in **Impostazioni → API**. È necessario configurare almeno un provider; OpenRouter è comune per modelli gratuiti.

<br/>

**Linux**

Scarica il file `.AppImage` da [Versioni (Releases)](https://github.com/wsj-br/transrewrt/releases), quindi:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Inserisci le tue chiavi API in **Impostazioni → API**. È necessario configurare almeno un provider; OpenRouter è comune per modelli gratuiti.

Su Debian/Ubuntu potrebbe essere necessario installare prima alcune dipendenze aggiuntive:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Vedi [Installazione → Linux](#linux-electron) per maggiori dettagli.

<br/>

> ℹ️ **NOTA**<br/>
> macOS non è attualmente supportato. Transrewrt è disponibile per Windows, Linux e Docker.

<br/>

Una volta avviata l'applicazione, consulta la **[Guida Utente (User Guide)](USER-GUIDE.it.md)** per imparare come tradurre, riformulare e trasformare testi, gestire prompt e configurare modelli.

<br/><br/>

<a id="installation"></a>
## Installazione

<a id="windows-electron"></a>
### Windows (Electron)

- Scarica l'ultimo programma di installazione da [Versioni (Releases)](https://github.com/wsj-br/transrewrt/releases).
- Esegui il file `.exe` e segui le istruzioni del programma di installazione.
- Primo avvio: avvia l'app dal menu Start o dal collegamento sul desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Scarica il file `.AppImage` da [Versioni (Releases)](https://github.com/wsj-br/transrewrt/releases).
- Esegui: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Dipendenze aggiuntive (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Vedi [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per ulteriori informazioni.

<br/>

<a id="docker"></a>
### Docker

- Scarica l'immagine: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Imposta almeno una chiave del provider tramite variabile d'ambiente (ad esempio `OPENROUTER_KEY` per OpenRouter). Passa le variabili con `-e` o tramite `docker compose` / `.env` in modo che i segreti non siano incorporati nell'immagine.
- Le chiavi dei provider **non** vanno inserite nell'interfaccia web; il server le legge dall'ambiente.

Esempio - volume con nome per la persistenza (chiave OpenRouter tramite variabile d'ambiente):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opzione   | Descrizione                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Porta     | `5000` (mappala con `-p 5000:5000`)                                                                           |
| Volume   | Monta `/app/data` per mantenere configurazioni e database                                                      |
| Variabili d'ambiente | `PORT`, `CONFIG_PATH`, più chiavi LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - vedi [Configurazione](#configuration-and-environment) |

Per costruire ed eseguire da sorgente: `docker compose up --build -d` oppure `pnpm docker:up` - vedi [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Ottenere una chiave API di OpenRouter

Transrewrt supporta diversi fornitori di intelligenza artificiale. [OpenRouter](https://openrouter.ai) è una scelta popolare perché raggruppa molti modelli sotto un'unica chiave e offre modelli gratuiti.

1. Registrati o accedi su [openrouter.ai](https://openrouter.ai).
2. Apri la pagina [Keys](https://openrouter.ai/keys) e crea una nuova chiave (assegnale un nome e, opzionalmente, un limite di credito). Puoi usare modelli gratuiti senza dover aggiungere credito.
3. **Desktop (Electron):** incolla le chiavi in **Impostazioni → API**. **Docker:** imposta variabili d'ambiente come `OPENROUTER_KEY` (vedi [Avvio rapido](#quick-start)).

Puoi inoltre utilizzare altri provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) o eseguire modelli in locale con [Ollama](https://ollama.com). Vedi [Configurazione](#configuration-and-environment) per l'elenco completo dei provider supportati e delle variabili d'ambiente.

Per informazioni su limiti, BYOK e altro, consulta [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configurazione e ambiente

**Percorsi del file di configurazione**

| Installazione      | Percorso della configurazione                    |
| ------------------ | ------------------------------------------------ |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                          |
| Web / Docker       | `/app/data/config.json` (usa un volume per mantenerlo persistente) |

<br/>

**Variabili d'ambiente** (solo web/Docker; Electron utilizza il file di configurazione locale)

| Variabile          | Predefinito               | Descrizione |
| ------------------ | ------------------------- | ----------- |
| `PORT`             | `5000`                    | Porta di ascolto del server |
| `CONFIG_PATH`      | `/app/data/config.json`   | Percorso del file di configurazione |
| `OPENROUTER_KEY`   | *(vuoto)*                 | Chiave API OpenRouter |
| `OPENAI_KEY`       | *(vuoto)*                 | Chiave API OpenAI |
| `ANTHROPIC_KEY`    | *(vuoto)*                 | Chiave API Anthropic |
| `GOOGLE_KEY`       | *(vuoto)*                 | Chiave API Google Gemini |
| `DEEPSEEK_KEY`     | *(vuoto)*                 | Chiave API DeepSeek |
| `GROQ_KEY`         | *(vuoto)*                 | Chiave API Groq |
| `MISTRAL_KEY`      | *(vuoto)*                 | Chiave API Mistral |
| `OLLAMA_URL`       | *(vuoto)*                 | URL base di Ollama (ad es. `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(vuoto)*                 | Chiave API xAI |

Configura soltanto i provider che utilizzi. Gli ID dei modelli sono organizzati in namespace (`openrouter/…`, `openai/…`, `ollama/…`, ecc.).

**Visualizzazione dei costi:** OpenRouter restituisce il costo fatturato esatto quando disponibile. Per gli altri provider vengono utilizzati dei costi **stimati** basati sulle tariffe pubbliche di OpenRouter, se è presente una chiave OpenRouter; altrimenti, il costo dei provider non-OpenRouter potrebbe risultare `0`. Le stime non sono fatture.

<br/>

**Dati e persistenza:** Per Docker, monta un volume in `/app/data` in modo che `config.json` e il database SQLite siano persistenti dopo il riavvio del contenitore. Senza un volume, tutti i dati andranno persi alla chiusura del contenitore.

**Sviluppatori:** Dopo aver aggiornato il codice con modifiche che rimpiazzano la vecchia configurazione a chiave singola, reimposta o unisci `data/config.json` con la struttura predefinita aggiornata in `src/config-defaults/config_default.json`, se il tuo file locale usa ancora campi rimossi (`api_key`, `api_url`, opzioni proxy).

<br/>

**Autenticazione Web:**

- Amministratore predefinito: `admin` / `transrewrt26`.
- Gestisci gli utenti in **Impostazioni → Utenti**.
- Per reimpostare una password: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (da codice sorgente: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATTENZIONE**<br/>
> Cambia immediatamente la password predefinita dell'amministratore su qualsiasi host accessibile dalla rete.

<br/>

Le impostazioni principali (tipo di carattere, modelli, lingue, ecc.) sono disponibili nelle Impostazioni dell'applicazione.

<br/><br/>

<a id="development-and-architecture"></a>
## Sviluppo e architettura

- **Sviluppo:** Configurazione, compilazione, test e distribuzione (Electron, Web, Docker) - vedi **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Panoramica su architettura e sistema:** Struttura delle cartelle, tecnologie utilizzate, decisioni di progettazione - vedi **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Versioni e tag

- I **tag di Git** `v`* (ad esempio `v1.0.10`) attivano il [flusso di lavoro della versione](.github/workflows/release.yml). Le **GitHub Releases** includono il programma di installazione per Windows (`.exe`) e l'AppImage per Linux.
- Le **immagini Docker** vengono pubblicate su `ghcr.io/wsj-br/transrewrt`. I tag delle immagini corrispondono alla versione Git (ad esempio `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) oltre al tag `latest`. Supporto multi-architettura: `linux/amd64` e `linux/arm64` (ad esempio Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribuire

1. Effettua il fork del repository.
2. Crea un branch per la nuova funzionalità: `git checkout -b feature/my-feature`
3. Effettua il commit delle modifiche con un messaggio chiaro.
4. Pubblica e apri una Pull Request verso `main`.

Segui lo stile di codice esistente e verifica le tue modifiche sia nella modalità Electron che web prima dell'invio. Consulta il file [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per istruzioni su compilazione e test.

<br/>

**Segnalazione problemi:** Apri una segnalazione su [GitHub](https://github.com/wsj-br/transrewrt/issues). Specifica la tua piattaforma (Windows / Linux / Docker) e la versione dell'app (visualizzata nella finestra Informazioni oppure nella pagina delle versioni).

<br/><br/>

<a id="disclaimer"></a>
## Dichiarazione di non responsabilità

I nomi e i loghi dei prodotti appartengono ai rispettivi proprietari e sono utilizzati esclusivamente a scopo identificativo. Questo software non è affiliato né sponsorizzato da alcuna delle marche menzionate.

<br/><br/>

<a id="license"></a>
## Licenza

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)