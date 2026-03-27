---
translated_at: "2026-03-27T23:09:53.254Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo di Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versione"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenza: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Piattaforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Strumento testuale basato su AI: traduci tra lingue diverse, riscrivi con stili differenti e trasforma usando prompt personalizzati — utilizzando più provider di IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama locale). Può essere eseguito come app desktop (Electron) o come app web auto-ospitata (Docker).

- **Traduci** — tra dozzine di lingue, con rilevamento automatico della lingua sorgente
- **Riscrivi** — correggi la grammatica, migliora la chiarezza, rendi formale/informale, abbrevia, espandi, adatta a documenti tecnici
- **Trasforma** — prompt personalizzati per l'IA; crea e gestisci prompt, con lingua di destinazione opzionale per ogni singolo prompt
- **Cronologia** — cronologia completa delle operazioni eseguite con testi di input/output, filtri ed esportazione
- **Modelli e costi** — scegli modelli da qualsiasi provider configurato; dashboard per costi e utilizzo con log e riepiloghi per modello/operazione/giorno
- **Interfaccia utente** — interfaccia multilingue (oltre 30 lingue, supporto per testi RTL), font, ...
- **Modalità Web** — supporto multi-utente con ruoli amministratore
- **Desktop** — app Electron per Windows e Linux
- **Auto-ospitato** — immagine Docker per amd64 & arm64 (pronta per Raspberry Pi)

Dopo l'installazione, consulta la **[Guida Utente](USER-GUIDE.it.md)** per una panoramica completa di tutte le funzionalità.

<small>**Leggi in altre lingue:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia, ad eccezione dell'originale inglese (UK),
> sono state tradotte mediante modelli di intelligenza artificiale; la formulazione potrebbe essere imprecisa o contenere errori.

</small>

<br/>

<a id="screenshots"></a>

## Schermate

**Selettore della lingua**

![Selettore della lingua](../images/screenshots/it/language-selector.png)

**Traduci**

![Traduci](../images/screenshots/it/translate.png)

**Trasforma - editor del prompt**

![Trasforma - editor del prompt](../images/screenshots/it/transform-prompt-edit.png)

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
- [Versioni e tag](#releases-and-tags)
- [Contributi](#contributing)
- [Dichiarazione di non responsabilità](#disclaimer)
- [Licenza](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Avvio rapido

**Docker (consigliato per l'auto-ospitazione)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Sostituisci `sk-or-your-key` con la tua [chiave API di OpenRouter](https://openrouter.ai/keys) (oppure imposta chiavi di altri provider; vedi [Configurazione](#configuration-and-environment)). Apri [http://localhost:5000](http://localhost:5000) e modifica la password amministratore predefinita prima di esporre il servizio.

<br/>

> ℹ️ **NOTE**<br/>
> In Docker, le credenziali LLM vengono impostate tramite variabili d'ambiente come `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (non nell'interfaccia web). Nella versione desktop (Electron), configuri le chiavi in **Impostazioni → API**.

<br/>

**Windows**

Scarica l'ultimo file `Transrewrt Setup x.y.z.exe` da [Rilasci](https://github.com/wsj-br/transrewrt/releases), esegui l'installer, quindi avvia l'app dal menu Start o tramite collegamento sul desktop. Inserisci le tue chiavi API in **Impostazioni → API**. È necessario configurare almeno un provider; OpenRouter è comune per modelli gratuiti.

<br/>

**Linux**

Scarica il file `.AppImage` adatto al tuo processore da [Rilasci](https://github.com/wsj-br/transrewrt/releases) (`x64` per PC tipici, `arm64` per molti dispositivi ARM, inclusi Raspberry Pi 4+), quindi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per modelli gratuiti.

Su Debian/Ubuntu potrebbe essere necessario installare prima alcune dipendenze aggiuntive:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Vedi [Installazione → Linux](#linux-electron) per maggiori dettagli.

<br/>

> ℹ️ **NOTE**<br/>
> macOS al momento non è supportato. Transrewrt è disponibile per Windows, Linux e Docker.

<br/>

Una volta avviata l'app, consultare la **[Guida utente](USER-GUIDE.it.md)** per imparare a tradurre, riformulare e trasformare il testo, gestire i prompt e configurare i modelli.

<br/><br/>

<a id="installation"></a>

## Installazione

<a id="windows-electron"></a>
### Windows (Electron)

- Scarica l'ultima versione dell'installer da [Releases](https://github.com/wsj-br/transrewrt/releases).
- Esegui il file `.exe` e segui le indicazioni del programma di installazione.
- Prima esecuzione: avvia l'app dal menu Start o tramite il collegamento sul desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Scarica il file `.AppImage` corrispondente (`x64` o `arm64`) da [Releases](https://github.com/wsj-br/transrewrt/releases).
- Esegui: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` su x86_64/amd64, oppure utilizza il file `...-arm64.AppImage` su ARM64.
- Dipendenze aggiuntive (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consulta [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per ulteriori informazioni.

<br/>

<a id="docker"></a>
### Docker

- Scarica l'immagine: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Imposta almeno una chiave del provider tramite variabile d'ambiente (ad esempio `OPENROUTER_API_KEY` per OpenRouter). Passa le variabili con `-e` o tramite `docker compose` / `.env` in modo che i dati sensibili non vengano inclusi nell'immagine.
- Le chiavi dei provider **non** vanno inserite nell'interfaccia web; il server le legge dall'ambiente.

Esempio - volume nominato per la persistenza (chiave OpenRouter tramite env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

oppure, se preferisci usare Docker Compose, utilizza:

# scarica il file compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# modifica il file per aggiungere le API_KEYS
vi transrewrt.yml
# avvia il container
docker compose -f transrewrt.yml up -d
```

<br/>

| Opzione  | Descrizione                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Porta    | `5000` (da mappare con `-p 5000:5000`)                                                                                                  |
| Volume   | Montare `/app/data` per la configurazione e la persistenza del database                                                                |
| Variabili d'ambiente | `PORT`, `CONFIG_PATH`, oltre alle chiavi LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - vedi [Configurazione](#configuration-and-environment) |

Per compilare ed eseguire da sorgente: `docker compose up --build -d` oppure `pnpm docker:up` - vedere [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Ottenere una chiave API di OpenRouter

Transrewrt supporta diversi fornitori di intelligenza artificiale. [OpenRouter](https://openrouter.ai) è una scelta popolare poiché aggrega molti modelli sotto un'unica chiave e offre modelli gratuiti.

1. Registrati o accedi su [openrouter.ai](https://openrouter.ai).
2. Apri la pagina [Keys](https://openrouter.ai/keys) e crea una nuova chiave (assegnale un nome e, facoltativamente, un limite di credito). Puoi utilizzare modelli gratuiti senza dover aggiungere credito.
3. **Desktop (Electron):** incolla le chiavi in **Impostazioni → API**. **Docker:** imposta le variabili d'ambiente come `OPENROUTER_API_KEY` (vedi [Avvio rapido](#quick-start)).

Non utilizzare il modello **Body Builder** di OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) per tradurre, riscrivere o trasformare: restituisce payload JSON delle richieste, non il testo completato per queste attività. Vedi [Impostazioni → Modelli](USER-GUIDE.it.md#models) nella Guida per l'utente.

Puoi inoltre utilizzare altri fornitori (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o eseguire modelli localmente con [Ollama](https://ollama.com). Consulta [Configurazione](#configuration-and-environment) per l'elenco completo dei fornitori supportati e le relative variabili d'ambiente.

> ⚠️ **ATTENZIONE**<br/>
> Se utilizzi Ollama da un altro dispositivo, contenitore o servizio, ricorda di configurare Ollama per consentire connessioni esterne (non limitate a localhost).

Per informazioni su limiti, BYOK e altro, consulta [Autenticazione OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Configurazione e ambiente

**Percorsi del file di configurazione**

| Distribuzione      | Percorso configurazione                            |
| ------------------ | -------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                            |
| Electron (Linux)   | `~/.config/transrewrt/`                            |
| Web / Docker       | `/app/data/config.json` (usa un volume per la persistenza) |

<br/>

**Variabili d'ambiente** (solo web/Docker; Electron utilizza il file di configurazione locale)

| Variabile            | Predefinito               | Descrizione |
| -------------------- | ------------------------- | ----------- |
| `PORT`               | `5000`                    | Porta di ascolto del server |
| `CONFIG_PATH`        | `/app/data/config.json`   | Percorso del file di configurazione |
| `OPENROUTER_API_KEY` | *(vuoto)*                 | Chiave API OpenRouter |
| `OPENAI_API_KEY`     | *(vuoto)*                 | Chiave API OpenAI |
| `CEREBRAS_API_KEY`   | *(vuoto)*                 | Chiave API Cerebras |
| `ANTHROPIC_API_KEY`  | *(vuoto)*                 | Chiave API Anthropic |
| `GOOGLE_API_KEY`     | *(vuoto)*                 | Chiave API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(vuoto)*                 | Chiave API DeepSeek |
| `GROQ_API_KEY`       | *(vuoto)*                 | Chiave API Groq |
| `MISTRAL_API_KEY`    | *(vuoto)*                 | Chiave API Mistral |
| `OLLAMA_URL`         | *(vuoto)*                 | URL base di Ollama (es. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(vuoto)*                 | Chiave API xAI |

Configurare solo i provider utilizzati. Gli ID dei modelli sono organizzati in namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ecc.).

**Visualizzazione costi:** OpenRouter restituisce il costo effettivo addebitato quando applicabile. Gli altri provider utilizzano un costo **stimato** basato sui prezzi pubblici dei modelli di OpenRouter, se disponibile una chiave OpenRouter; in caso contrario, il costo dei provider non OpenRouter potrebbe risultare `0`. Le stime non corrispondono a fatture.

<br/>

**Dati e persistenza:** Per Docker, montare un volume in `/app/data` in modo che `config.json` e il database SQLite persistano dopo il riavvio del contenitore. Senza un volume, tutti i dati andranno persi all'arresto del contenitore.

**Sviluppatori:** Dopo aver scaricato modifiche che sostituiscono la vecchia configurazione a chiave singola, reimpostare o unire `data/config.json` con la nuova struttura predefinita presente in `src/config-defaults/config_default.json`, se il file locale contiene ancora campi rimossi (`api_key`, `api_url`, opzioni proxy).

<br/>

**Autenticazione web:**

- Amministratore predefinito: `admin` / `transrewrt26`.
- Gestione utenti in **Impostazioni → Utenti**.
- Reimposta password: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (da sorgente: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATTENZIONE**<br/>
> Modificare immediatamente la password predefinita dell'amministratore su qualsiasi host accessibile da rete.

<br/>

Le impostazioni principali (carattere, modelli, lingue, ecc.) sono disponibili nelle Impostazioni dell'applicazione.

<br/><br/>

<a id="development-and-architecture"></a>

## Sviluppo e architettura

- **Sviluppo:** Configurazione, build, test e distribuzione (Electron, Web, Docker) - vedere **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Panoramica su architettura e sistema:** Struttura delle cartelle, stack tecnologico, decisioni di progettazione - vedere **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versioni e tag

- I **tag Git** `v`* (ad esempio `v1.0.10`) attivano il [flusso di lavoro di rilascio](.github/workflows/release.yml). Le **GitHub Releases** allegano l'installer per Windows (`.exe`) e gli AppImage Linux (**x64** e **arm64**).
- Le **immagini Docker** vengono pubblicate su `ghcr.io/wsj-br/transrewrt`. I tag delle immagini corrispondono alla versione Git (ad esempio `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) più il tag `latest`. Multi-arch: `linux/amd64` e `linux/arm64` (ad esempio Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribuire

1. Effettua il fork del repository.
2. Crea un branch per la nuova funzionalità: `git checkout -b feature/my-feature`
3. Esegui il commit delle tue modifiche con un messaggio chiaro.
4. Effettua il push e apri una Pull Request verso `main`.

Segui lo stile di codice esistente e testa le tue modifiche sia in modalità Electron che web prima di inviare. Consulta [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per istruzioni su build e test.

<br/>

**Segnalazione problemi:** Apri una issue su [GitHub](https://github.com/wsj-br/transrewrt/issues). Includi il tuo sistema operativo (Windows / Linux / Docker) e la versione dell'app (indicata nella finestra Informazioni oppure nella pagina delle Versioni).

<br/><br/>

<a id="disclaimer"></a>

## Dichiarazione di non responsabilità

I nomi dei prodotti e le icone appartengono ai rispettivi proprietari e sono utilizzati unicamente a scopo identificativo. Questo software non è affiliato né sponsorizzato da nessuno dei marchi menzionati.

<br/><br/>

<a id="license"></a>
## Licenza

Diritti d'autore © 2026 Waldemar Scudeller Jr.

[Licenza Apache 2.0](LICENSE)