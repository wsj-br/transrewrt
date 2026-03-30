---
translation_last_updated: '2026-03-30T00:46:14.095Z'
source_file_mtime: '2026-03-29T23:51:36.506Z'
source_file_hash: fa17b974cbf42a93
translation_language: it
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Versione"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenza: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Piattaforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Strumento testuale basato su IA: traduci tra lingue diverse, riscrivi in stili differenti e trasforma con prompt personalizzati — utilizzando diversi provider di IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama locale). Funziona come app desktop (Electron) o come app web autogestita (Docker).

- **Traduci** — tra dozzine di lingue, con rilevamento automatico della lingua sorgente
- **Riscrittura** — correggi grammatica, migliora chiarezza, formale/informale, accorcia, espandi, tecnico
- **Trasformazione** — prompt personalizzati per IA; crea e gestisci prompt, lingua di destinazione opzionale per ogni prompt
- **Cronologia** — cronologia completa delle esecuzioni con testo in ingresso/uscita, filtri ed esportazione
- **Modelli e costo** — scegli modelli da qualsiasi provider configurato; dashboard di costo e utilizzo con log, riepiloghi per modello/operazione/giorno
- **Interfaccia utente** — interfaccia multilingue (30+ lingue, supporto RTL), font, ...
- **Modalità web** — supporto multi-utente con ruoli amministratore
- **Desktop** — app Electron per Windows e Linux
- **Autogestito** — immagine Docker per amd64 e arm64 (pronto per Raspberry Pi)

Dopo l'installazione, consulta la **[Guida Utente](USER-GUIDE.it.md)** per una panoramica completa di tutte le funzionalità.

<small>**Leggi in altre lingue:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia, eccetto l'originale Inglese (UK),
> sono state tradotte utilizzando modelli di IA; il testo potrebbe essere impreciso o contenere errori.

</small>

<br/>

<a id="screenshots"></a>
## Screenshot

**Selettore lingua**

![Language selector](../images/screenshots/it/language-selector.png)

**Traduci**

![Translate](../images/screenshots/it/translate.png)

**Trasformazione - editor di prompt**

![Transform - prompt editor](../images/screenshots/it/transform-prompt-edit.png)

**Dashboard**

![Dashboard summary — usage](../images/screenshots/it/dashboard-summary.png)

**Cronologia**

![History](../images/screenshots/it/history.png)

**Impostazioni - selezione modello**

![Settings - model selection](../images/screenshots/it/settings-models.png)

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
- [Ottenere una chiave API OpenRouter](#getting-an-openrouter-api-key)
- [Configurazione e ambiente](#configuration-and-environment)
- [Sviluppo e architettura](#development-and-architecture)
- [Segnalazione problemi](#reporting-issues)
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

Sostituisci `sk-or-your-key` con la tua [chiave API di OpenRouter](https://openrouter.ai/keys) (oppure imposta le chiavi di altri provider; vedi [Configurazione](#configuration-and-environment)). Apri [http://localhost:5000](http://localhost:5000) e cambia la password amministratore predefinita prima di esporre il servizio.

<br/>

> ℹ️ **NOTA**<br/>
> In Docker, le credenziali LLM sono impostate tramite variabili d'ambiente come `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (non nell'interfaccia web). Su desktop (Electron) puoi configurare le chiavi in **Impostazioni → API**.

<br/>

**Windows**

Scarica l'ultima versione di `Transrewrt Setup x.y.z.exe` da [Rilasci](https://github.com/wsj-br/transrewrt/releases), esegui il programma di installazione, quindi avvia l'app dal menu Start o tramite collegamento sul desktop. Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per i modelli gratuiti.

<br/>

**Linux**

Scarica il file `.AppImage` per la tua CPU da [Rilasci](https://github.com/wsj-br/transrewrt/releases) (`x64` per PC tipici, `arm64` per molti dispositivi ARM, inclusi Raspberry Pi 4+), quindi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per i modelli gratuiti.

Su Debian/Ubuntu potrebbe essere necessario installare prima dipendenze aggiuntive:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Vedi [Installazione → Linux](#linux-electron) per i dettagli.

<br/>

> ℹ️ **NOTA**<br/>
> macOS attualmente non è supportato. Transrewrt è disponibile per Windows, Linux e Docker.

<br/>

Una volta avviata l'app, consulta la **[Guida Utente](USER-GUIDE.it.md)** per imparare come tradurre, riscrivere e trasformare testi, gestire prompt e configurare modelli.

<br/><br/>

<a id="installation"></a>
## Installazione

<a id="windows-electron"></a>
### Windows (Electron)

- Scarica l'ultimo programma di installazione da [Rilasci](https://github.com/wsj-br/transrewrt/releases).
- Esegui il file `.exe` e segui le istruzioni del programma di installazione.
- Primo avvio: avvia l'app dal menu Start o tramite collegamento sul desktop.

<br/>

> ℹ️ **NOTA**<br/>
> Windows potrebbe mostrare uno di questi avvisi di sicurezza (normale per app non firmate o indipendenti):
>   - **Controllo account utente (UAC)**: "Consenti a questa app di un editore sconosciuto di apportare modifiche al dispositivo?" → Clicca su **Sì**.
>   - **Microsoft Defender SmartScreen**: "Windows ha protetto il PC" → Clicca su **Altre informazioni** → **Esegui comunque**.
>
> Questo accade perché l'app non è firmata da Microsoft o da un editore importante—è sicura se scaricata dai nostri rilasci ufficiali su GitHub
>  (verifica l'hash SHA256 riportato sotto).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Scarica il file `.AppImage` corrispondente (`x64` o `arm64`) da [Releases](https://github.com/wsj-br/transrewrt/releases).
- Esegui: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` su x86_64/amd64, oppure usa il nome file `...-arm64.AppImage` su ARM64.
- Dipendenze aggiuntive (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consulta [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per ulteriori informazioni.

<br/>

<a id="docker"></a>
### Docker

- Scarica l'immagine: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Imposta almeno una chiave del provider tramite variabile d'ambiente (ad esempio `OPENROUTER_API_KEY` per OpenRouter). Passa le variabili con `-e` o tramite `docker compose` / `.env` in modo che i segreti non vengano inclusi nell'immagine.
- Le chiavi dei provider **non** vengono inserite nell'interfaccia web; il server le legge dall'ambiente.

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

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Consulta [Configuration](#configuration-and-environment) per tutte le variabili d'ambiente, come `PORT`, `CONFIG_PATH`, `TZ` e le chiavi LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>
### Configurazione del fuso orario

La data e l'ora nell'interfaccia utente seguono le impostazioni locali e il fuso orario del **browser**. Per il comportamento lato **server** (logging e simili), il container utilizza la variabile d'ambiente `TZ`. Il valore predefinito è `TZ=Europe/London`.

Per utilizzare un altro fuso orario, imposta `TZ` nel file Compose, ad esempio:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Oppure passala durante l'esecuzione del container (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Su molti sistemi Linux puoi copiare il nome del fuso orario di sistema con:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Un elenco dei nomi validi di fuso orario è mantenuto nel [database tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Ottenere una chiave API OpenRouter

Transrewrt supporta diversi provider di intelligenza artificiale. [OpenRouter](https://openrouter.ai) è una scelta popolare perché aggrega molti modelli sotto un'unica chiave e offre modelli gratuiti.

1. Registrati o accedi su [openrouter.ai](https://openrouter.ai).
2. Apri la pagina [Keys](https://openrouter.ai/keys) e crea una nuova chiave (assegnale un nome e, opzionalmente, un limite di credito). Puoi usare modelli gratuiti senza aggiungere credito.
3. **Desktop (Electron):** incolla le chiavi in **Impostazioni → API**. **Docker:** imposta le variabili d'ambiente come `OPENROUTER_API_KEY` (vedi [Avvio rapido](#quick-start)).

Non utilizzare il modello **Body Builder** di OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) per tradurre, riscrivere o trasformare: restituisce payload JSON delle richieste, non il testo completato per queste operazioni. Consulta [Impostazioni → Modelli](USER-GUIDE.it.md#models) nella Guida Utente.

Puoi anche utilizzare altri provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) oppure eseguire modelli localmente con [Ollama](https://ollama.com). Consulta [Configuration](#configuration-and-environment) per l'elenco completo dei provider supportati e delle variabili d'ambiente.

> ⚠️ **ATTENZIONE**<br/>
> Se utilizzi Ollama da un altro dispositivo, container o servizio, ricorda di configurare Ollama per consentire connessioni esterne (non solo localhost).

Per limiti, BYOK e altro, vedere [autenticazione OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configurazione e ambiente

**Percorsi del file di configurazione**

| Deploy         | Posizione della configurazione                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (utilizzare un volume per la persistenza) |

<br/>

**Variabili d'ambiente** (solo web/Docker; Electron utilizza il file di configurazione locale)

| Variabile         | Predefinito                 | Descrizione |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Porta di ascolto del server |
| `CONFIG_PATH`    | `/app/data/config.json` | Percorso del file di configurazione |
| `TZ`             | `Europe/London`         | Fuso orario IANA per l'orario lato server (logging, ecc.); l'interfaccia utente segue comunque il browser. Vedere [Docker → timezone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(vuoto)*               | Chiave API OpenRouter |
| `OPENAI_API_KEY`     | *(vuoto)*               | Chiave API OpenAI |
| `CEREBRAS_API_KEY`   | *(vuoto)*               | Chiave API Cerebras |
| `ANTHROPIC_API_KEY`  | *(vuoto)*               | Chiave API Anthropic |
| `GOOGLE_API_KEY`     | *(vuoto)*               | Chiave API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(vuoto)*               | Chiave API DeepSeek |
| `GROQ_API_KEY`       | *(vuoto)*               | Chiave API Groq |
| `MISTRAL_API_KEY`    | *(vuoto)*               | Chiave API Mistral |
| `OLLAMA_URL`     | *(vuoto)*               | URL base Ollama (es. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(vuoto)*               | Chiave API xAI |

Configurare solo i provider utilizzati. Gli ID modello sono organizzati in namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ecc.).

**Visualizzazione costo:** OpenRouter restituisce il costo fatturato esatto quando applicabile. Gli altri provider utilizzano il costo **stimato** basato sui prezzi pubblici dei modelli di OpenRouter quando è disponibile una chiave OpenRouter; in assenza di questa, il costo dei provider non OpenRouter potrebbe risultare `0`. Le stime non costituiscono fatture.

<br/>

**Dati e persistenza:** Per Docker, montare un volume in `/app/data` in modo che `config.json` e il database SQLite persistano tra i riavvii del container. Senza un volume, tutti i dati vengono persi alla chiusura del container.

**Sviluppatori:** Dopo aver scaricato modifiche che sostituiscono la vecchia configurazione a chiave singola, resettare o unire `data/config.json` con la nuova struttura predefinita presente in `src/config-defaults/config_default.json`, se il file locale utilizza ancora campi rimossi (`api_key`, `api_url`, opzioni proxy).

<br/>

**Autenticazione web:**

- Amministratore predefinito: `admin` / `transrewrt26`.
- Gestire gli utenti in **Impostazioni → Utenti**.
- Reimpostare una password: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (da sorgente: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATTENZIONE**<br/>
> Modificare immediatamente la password amministratore predefinita su qualsiasi host accessibile dalla rete.

<br/>

Le impostazioni principali (carattere, modelli, lingue, ecc.) sono disponibili nelle Impostazioni dell'applicazione.

<br/><br/>

<a id="development-and-architecture"></a>
## Sviluppo e architettura

- **Sviluppo:** Configurazione, build, test e deploy (Electron, Web, Docker) - vedere **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architettura e panoramica del sistema:** Struttura delle cartelle, stack tecnologico, decisioni di progettazione - vedere **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Segnalazione di problemi

Apri una segnalazione su [GitHub](https://github.com/wsj-br/transrewrt/issues). Includi la tua piattaforma (Windows / Linux / Docker) e la versione dell'app (indicata nella finestra Informazioni o nella pagina delle versioni).

<br/><br/>

<a id="disclaimer"></a>
## Dichiarazione di non responsabilità

I nomi dei prodotti e le icone appartengono ai rispettivi proprietari e sono utilizzati solo a scopo identificativo. Questo software non è affiliato né approvato da nessuno dei marchi menzionati.

<br/><br/>

<a id="license"></a>
## Licenza

Diritti d'autore © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
