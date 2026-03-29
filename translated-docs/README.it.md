---
translated_at: "2026-03-29T01:55:05.352Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner" />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Versione"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenza: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Piattaforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Strumento testuale basato sull'IA: traduci tra lingue diverse, riscrivi in stili differenti e trasforma con prompt personalizzati — utilizzando diversi provider di intelligenza artificiale (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama locale). Può essere eseguito come app desktop (Electron) o come app web autosufficiente (Docker).

- **Traduci** — tra dozzine di lingue, con rilevamento automatico della lingua di origine
- **Riscrivi** — correggi grammatica, migliora chiarezza, scrivi in forma formale/informale, accorcia, espandi, versione tecnica
- **Trasforma** — prompt personalizzati con intelligenza artificiale; crea e gestisci prompt, lingua di destinazione facoltativa per ogni prompt
- **Cronologia** — cronologia completa delle operazioni con testo di input/output, filtri ed esportazione
- **Modelli e costi** — scegli modelli da qualsiasi provider configurato; dashboard di costi e utilizzo con registro e riepiloghi per modello/operazione/giorno
- **Interfaccia utente** — interfaccia multilingue (30+ lingue, supporto RTL), font, ...
- **Modalità web** — supporto multi-utente con ruoli amministrativi
- **Desktop** — app Electron per Windows e Linux
- **Auto-ospitato** — immagine Docker per amd64 e arm64 (pronta per Raspberry Pi)

Una volta installato, consulta la **[Guida Utente](USER-GUIDE.it.md)** per una panoramica completa di tutte le funzionalità.

<small>**Leggi in altre lingue:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia, ad eccezione dell'originale inglese (UK), 
> sono state tradotte utilizzando modelli di intelligenza artificiale; il testo potrebbe essere impreciso o contenere errori.

</small>

<br/>

<a id="screenshots"></a>

## Schermate

**Selettore della lingua**

![Selettore della lingua](../images/screenshots/it/language-selector.png)

**Traduci**

![Traduci](../images/screenshots/it/translate.png)

**Trasforma - editor dei prompt**

![Trasforma - editor dei prompt](../images/screenshots/it/transform-prompt-edit.png)

**Cruscotto**

![Cruscotto - riepilogo utilizzo](../images/screenshots/it/dashboard-summary.png)

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
  - [Configurazione del fuso orario](#configuring-the-timezone)
- [Ottenere una chiave API di OpenRouter](#getting-an-openrouter-api-key)
- [Configurazione e ambiente](#configuration-and-environment)
- [Sviluppo e architettura](#development-and-architecture)
- [Segnalazione di problemi](#reporting-issues)
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

Sostituisci `sk-or-your-key` con la tua [chiave API OpenRouter](https://openrouter.ai/keys) (oppure imposta le chiavi di altri provider; vedi [Configurazione](#configuration-and-environment)). Apri [http://localhost:5000](http://localhost:5000) e cambia la password amministratore predefinita prima di esporre il servizio.

<br/>

> ℹ️ **NOTA**<br/>
> In Docker, le credenziali del modello linguistico (LLM) vengono impostate tramite variabili d'ambiente come `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (non dall'interfaccia web). Nella versione desktop (Electron), le chiavi vanno configurate in **Impostazioni → API**.

<br/>

**Windows**

Scarica l'ultimo `Transrewrt Setup x.y.z.exe` da [Releases](https://github.com/wsj-br/transrewrt/releases), esegui il programma di installazione, quindi avvialo dal menu Start o tramite il collegamento sul desktop. Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per modelli gratuiti.

<br/>

**Linux**

Scarica il file `.AppImage` per la tua CPU da [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` per PC tipici, `arm64` per molti dispositivi ARM, inclusi Raspberry Pi 4+), quindi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per modelli gratuiti.

Su Debian/Ubuntu potrebbe essere necessario installare prima alcune dipendenze aggiuntive:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Per maggiori dettagli, consulta [Installazione → Linux](#linux-electron).

<br/>

> ℹ️ **NOTA**<br/>

> macOS non è attualmente supportato. Transrewrt è disponibile per Windows, Linux e Docker.

<br/>

Una volta avviata l'app, consulta la **[Guida Utente](USER-GUIDE.it.md)** per imparare come tradurre, riscrivere e trasformare il testo, gestire i prompt e configurare i modelli.

<br/><br/>

<a id="installation"></a>

## Installazione

<a id="windows-electron"></a>

### Windows (Electron)

- Scarica l'ultima versione del programma di installazione dalla pagina [Releases](https://github.com/wsj-br/transrewrt/releases).
- Esegui il file `.exe` e segui le istruzioni del programma di installazione.
- Primo avvio: avvia l'app dal menu Start o dal collegamento sul desktop.

<br/>

> ℹ️ **NOTA**<br/>
> Windows potrebbe mostrare uno di questi avvisi di sicurezza (normale per app non firmate o indie):
>   - **Controllo account utente (UAC)**: "Si desidera consentire a questa app di un editore sconosciuto di apportare modifiche al dispositivo?" → Clicca su **Sì**.
>   - **Microsoft Defender SmartScreen**: "Windows ha protetto il PC" → Clicca su **Altre informazioni** → **Esegui comunque**.
>
> Questo accade perché l'app non è firmata da Microsoft o da un editore importante, ma è sicura se scaricata dalle nostre release ufficiali su GitHub
>  (verifica il checksum SHA256 indicato di seguito).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Scarica il file `.AppImage` corrispondente (`x64` o `arm64`) da [Releases](https://github.com/wsj-br/transrewrt/releases).
- Esegui: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` su x86_64/amd64, oppure utilizza il nome file `...-arm64.AppImage` su ARM64.
- Dipendenze aggiuntive (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Vedi [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per ulteriori informazioni.

<br/>

<a id="docker"></a>

### Docker

- Scarica l'immagine: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Imposta almeno una chiave del provider tramite variabile d'ambiente (ad esempio `OPENROUTER_API_KEY` per OpenRouter). Passa le variabili con `-e` o tramite `docker compose` / `.env`, in modo che le chiavi segrete non vengano incluse nell'immagine.
- Le chiavi dei provider **non** vanno inserite nell'interfaccia web; il server le legge dall'ambiente.

Esempio - volume con nome per la persistenza (chiave OpenRouter tramite variabile d'ambiente):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

oppure, se preferisci usare Docker Compose, usa:

```bash
# scarica il file compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# modifica il file per aggiungere le API_KEYS e impostare il fuso orario (TZ)
vi transrewrt.yml
# avvia il contenitore
docker compose -f transrewrt.yml up -d

Vedere [Configurazione](#configuration-and-environment) per tutte le variabili d'ambiente, come `PORT`, `CONFIG_PATH`, `TZ` e le chiavi per i modelli linguistici (LLM) (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Configurazione del fuso orario

La data e l’ora dell'interfaccia utente dell'applicazione seguono il fuso orario e le impostazioni locali del **browser**. Per quanto riguarda il comportamento lato **server** (registrazione log e simili), il container utilizza la variabile d'ambiente `TZ`. Il valore predefinito è `TZ=Europe/London`.

Per utilizzare un fuso orario diverso, impostare `TZ` nel file Compose, ad esempio:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Oppure passarlo durante l'esecuzione del container (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Su molte distribuzioni Linux è possibile copiare il nome del fuso orario di sistema con il seguente comando:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Un elenco dei nomi validi di fusi orari è mantenuto nel [database tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Ottenere una chiave API di OpenRouter

Transrewrt supporta diversi fornitori di intelligenza artificiale. [OpenRouter](https://openrouter.ai) è una scelta popolare perché aggrega molti modelli sotto un'unica chiave e offre modelli gratuiti.

1. Iscriviti o accedi su [openrouter.ai](https://openrouter.ai).
2. Apri la pagina [Chiavi (Keys)](https://openrouter.ai/keys) e crea una nuova chiave (dai un nome e, opzionalmente, imposta un limite di credito). Puoi usare modelli gratuiti senza aggiungere credito.
3. **Desktop (Electron):** inserisci le chiavi in **Impostazioni → API**. **Docker:** imposta le variabili d'ambiente come `OPENROUTER_API_KEY` (vedi [Avvio rapido](#quick-start)).

Non utilizzare il modello **Body Builder** di OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) per tradurre, riscrivere o trasformare: restituisce solo il payload della richiesta in formato JSON, non il testo completato per queste attività. Consulta [Impostazioni → Modelli](USER-GUIDE.it.md#models) nella Guida per l'utente.

Puoi anche utilizzare altri provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) oppure eseguire modelli in locale con [Ollama](https://ollama.com). Consulta [Configurazione](#configuration-and-environment) per l'elenco completo dei provider supportati e delle variabili d'ambiente.

> ⚠️ **ATTENZIONE**<br/>
> Se utilizzi Ollama da un altro dispositivo, contenitore o servizio, ricordati di configurare Ollama per consentire connessioni esterne (non solo localhost).


Per informazioni sui limiti, BYOK e altro, consulta [autenticazione OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Configurazione e ambiente

**Percorsi dei file di configurazione**

| Distribuzione      | Posizione della configurazione                     |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (usare un volume per mantenerla) |

<br/>

**Variabili d'ambiente** (solo web/Docker; Electron utilizza il file di configurazione locale)

| Variabile         | Predefinita                 | Descrizione |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Porta di ascolto del server |
| `CONFIG_PATH`    | `/app/data/config.json` | Percorso del file di configurazione |
| `TZ`             | `Europe/London`         | Fuso orario IANA per l'orario lato server (log, ecc.); l'interfaccia utente segue comunque il fuso del browser. Vedi [Docker → fuso orario](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(vuota)*               | Chiave API di OpenRouter |
| `OPENAI_API_KEY`     | *(vuota)*               | Chiave API di OpenAI |
| `CEREBRAS_API_KEY`   | *(vuota)*               | Chiave API di Cerebras |
| `ANTHROPIC_API_KEY`  | *(vuota)*               | Chiave API di Anthropic |
| `GOOGLE_API_KEY`     | *(vuota)*               | Chiave API di Google Gemini |
| `DEEPSEEK_API_KEY`   | *(vuota)*               | Chiave API di DeepSeek |
| `GROQ_API_KEY`       | *(vuota)*               | Chiave API di Groq |
| `MISTRAL_API_KEY`    | *(vuota)*               | Chiave API di Mistral |
| `OLLAMA_URL`     | *(vuota)*               | URL base di Ollama (es. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(vuota)*               | Chiave API di xAI |

Configura solo i provider che utilizzi. Gli ID dei modelli sono organizzati in spazi dei nomi (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ecc.).

**Visualizzazione costi:** OpenRouter restituisce il costo fatturato effettivo quando applicabile. Gli altri provider utilizzano un costo **stimato** basato sui prezzi pubblici dei modelli di OpenRouter, qualora sia disponibile una chiave OpenRouter; in assenza di questa, il costo dei provider non OpenRouter potrebbe risultare `0`. Le stime non equivalgono a fatture.

<br/>

**Dati e persistenza:** Per Docker, monta un volume nella directory `/app/data` in modo che `config.json` e il database SQLite siano mantenuti anche dopo il riavvio del contenitore. In assenza di un volume, tutti i dati andranno persi alla chiusura del contenitore.

**Sviluppatori:** Dopo aver recuperato aggiornamenti che sostituiscono la vecchia configurazione basata su singola chiave, ripristina o unisci il file `data/config.json` con la nuova struttura predefinita presente in `src/config-defaults/config_default.json`, qualora il tuo file locale continui a utilizzare campi rimossi (`api_key`, `api_url`, opzioni proxy).

<br/>

**Autenticazione web:**

- Amministratore predefinito: `admin` / `transrewrt26`.
- Gestisci gli utenti in **Impostazioni → Utenti**.

- Reimposta una password: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (da sorgente: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATTENZIONE**<br/>
> Cambia immediatamente la password predefinita dell'amministratore su qualsiasi host accessibile dalla rete.

<br/>

Impostazioni principali (carattere, modelli, lingue, ecc.) sono disponibili nelle Impostazioni dell'applicazione.

<br/><br/>

<a id="development-and-architecture"></a>

## Sviluppo e architettura

- **Sviluppo:** Configurazione, compilazione, test e distribuzione (Electron, Web, Docker) - vedere **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architettura e panoramica del sistema:** Struttura delle cartelle, stack tecnologico, decisioni di progettazione - vedere **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Segnalazione di problemi

Apri una segnalazione su [GitHub](https://github.com/wsj-br/transrewrt/issues). Includi la tua piattaforma (Windows / Linux / Docker) e la versione dell'app (visualizzata nella finestra Informazioni oppure sulla pagina delle versioni).

<br/><br/>

<a id="disclaimer"></a>

## Disclaimer

I nomi e le icone dei prodotti appartengono ai rispettivi proprietari e sono utilizzati esclusivamente a scopo identificativo. Questo software non è affiliato né supportato da nessuno dei marchi menzionati.

<br/><br/>

<a id="license"></a>

## Licenza

Copyright © 2026 Waldemar Scudeller Jr.

[Licenza Apache 2.0](LICENSE)