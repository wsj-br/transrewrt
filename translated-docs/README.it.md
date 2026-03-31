---
translation_last_updated: '2026-03-31T22:57:24.390Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: it
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Indice**

- [Screenshot](#screenshots)
- [Indice](#table-of-contents)
- [Avvio rapido](#quick-start)
- [Installazione](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Configurazione del fuso orario](#configuring-the-timezone)
- [Come ottenere una chiave API OpenRouter](#getting-an-openrouter-api-key)
- [Configurazione e ambiente](#configuration-and-environment)
- [Sviluppo e architettura](#development-and-architecture)
- [Segnalazione di problemi](#reporting-issues)
- [Avviso legale](#disclaimer)
- [Licenza](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

**Leggi in altre lingue:**
[Inglese (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [Inglese (USA)](README.en-US.md) · [Filippino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)

> **Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia, eccetto l'originale Inglese (UK),
> sono state tradotte utilizzando modelli di IA; il testo potrebbe essere impreciso o contenere errori.

## Screenshot

**Selettore lingua**

Selettore della lingua

**Traduci**

Traduci

**Trasformazione - editor di prompt**

Trasformazione - editor di prompt

**Dashboard**

Riepilogo della Dashboard — utilizzo

**Cronologia**

Cronologia

**Impostazioni - selezione modello**

Impostazioni - selezione del modello

## Indice

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

> ℹ️ **NOTA**  
>
> In Docker, le credenziali LLM sono impostate tramite variabili d'ambiente come `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (non nell'interfaccia web). Su desktop (Electron) configuri le chiavi in **Impostazioni → API**.

**Windows**

Scarica l'ultima versione di `Transrewrt Setup x.y.z.exe` da [Rilasci](https://github.com/wsj-br/transrewrt/releases), esegui il programma di installazione, quindi avvia l'app dal menu Start o tramite collegamento sul desktop. Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per i modelli gratuiti.

**Linux**

Scarica il file `.AppImage` per la tua CPU da [Rilasci](https://github.com/wsj-br/transrewrt/releases) (`x64` per PC tipici, `arm64` per molti dispositivi ARM, inclusi Raspberry Pi 4+), quindi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per i modelli gratuiti.

**Messaggi della console:** Le versioni Linux pacchettizzate (`x64` e `arm64` AppImages) sopprimono gli avvisi di deprecazione di Node nel terminale (ad esempio il modulo integrato `punycode`). Se Chromium visualizza errori GPU / EGL come “GLES3 non supportato” ma l'app funziona, puoi eliminarli disattivando l'accelerazione hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Questo vale anche per amd64; modifica il nome del file in base al tuo download. Vedi [Installazione → Linux (Electron)](#linux-electron) per maggiori dettagli.

Su Debian/Ubuntu potresti aver bisogno di librerie aggiuntive di **esecuzione** che Chromium si aspetta (spesso già presenti sui desktop completi). Usa **`libnotify4`** per le notifiche desktop—**non** `libnotify-dev` (che serve per compilare software, non per eseguire l'AppImage pacchettizzata):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Immagini minime o personalizzate potrebbero comunque fallire a causa di un file `.so` mancante; installa il pacchetto indicato nell'errore (extra comuni: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Alcuni ambienti richiedono FUSE per eseguire AppImages (ad esempio `libfuse2` su Ubuntu 22.04+), oppure usa `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

Vedi [Installazione → Linux](#linux-electron) per lo stesso riepilogo.

> ℹ️ **NOTA**  
>
> macOS non è attualmente supportato. Transrewrt è disponibile per Windows, Linux e Docker.

Una volta avviata l'app, consulta la **[Guida Utente](USER-GUIDE.it.md)** per imparare come tradurre, riscrivere e trasformare testi, gestire prompt e configurare modelli.

## Installazione

### Windows (Electron)

- Scarica l'ultimo programma di installazione da [Rilasci](https://github.com/wsj-br/transrewrt/releases).
- Esegui il file `.exe` e segui le istruzioni del programma di installazione.
- Primo avvio: avvia l'app dal menu Start o tramite collegamento sul desktop.

> ℹ️ **NOTA**  
>
> Windows potrebbe mostrare uno di questi avvisi di sicurezza (normale per app non firmate o indie):
>
> - **Controllo dell'account utente (UAC)**: "Consenti a questa app proveniente da un editore sconosciuto di apportare modifiche al dispositivo?" → Fare clic su **Sì**.
> - **Microsoft Defender SmartScreen**: "Windows ha protetto il PC" → Fare clic su **Altre informazioni** → **Esegui comunque**.
>
> Questo accade perché l'app non è firmata da Microsoft o da un editore importante—è sicura se scaricata dalle nostre release ufficiali su GitHub
>  (verificare il checksum SHA256 riportato di seguito).

### Linux (Electron)

- Scaricare il file `.AppImage` corrispondente (`x64` o `arm64`) da [Releases](https://github.com/wsj-br/transrewrt/releases).
- Eseguire: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` su x86_64/amd64, oppure usare il nome file `...-arm64.AppImage` su ARM64.
- **Librerie di runtime Debian/Ubuntu** (Electron/Chromium; stesso di [Avvio rapido → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — usare **`libnotify4`**, non `libnotify-dev`. Su sistemi minimi, installare eventuali librerie `.so` mancanti segnalate nel terminale; spesso sono necessari componenti aggiuntivi come `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`. L'AppImage potrebbe richiedere `libfuse2` (Ubuntu 22.04+) o `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Messaggi GPU:** Chromium potrebbe registrare errori di inizializzazione GPU o EGL su alcuni sistemi (soprattutto ARM); l'app può comunque funzionare normalmente. Per evitare questi messaggi, avviare disabilitando l'accelerazione hardware: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (o il nome file `arm64` corrispondente).

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

## Ottenere una chiave API OpenRouter

Transrewrt supporta diversi provider di intelligenza artificiale. [OpenRouter](https://openrouter.ai) è una scelta popolare perché aggrega molti modelli sotto un'unica chiave e offre modelli gratuiti.

1. Registrati o accedi su [openrouter.ai](https://openrouter.ai).
2. Apri la pagina [Keys](https://openrouter.ai/keys) e crea una nuova chiave (assegnale un nome e, opzionalmente, un limite di credito). Puoi usare modelli gratuiti senza aggiungere credito.
3. **Desktop (Electron):** incolla le chiavi in **Impostazioni → API**. **Docker:** imposta le variabili d'ambiente come `OPENROUTER_API_KEY` (vedi [Avvio rapido](#quick-start)).

Non utilizzare il modello **Body Builder** di OpenRouter (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) per tradurre, riscrivere o trasformare: restituisce payload JSON delle richieste, non il testo completato per queste attività. Vedere [Impostazioni → Modelli](USER-GUIDE.it.md#models) nella Guida per l'Utente.

Puoi anche utilizzare altri provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) oppure eseguire modelli localmente con [Ollama](https://ollama.com). Consulta [Configuration](#configuration-and-environment) per l'elenco completo dei provider supportati e delle variabili d'ambiente.

> ⚠️ **ATTENZIONE**  
>
> Se si utilizza Ollama da un altro dispositivo, contenitore o servizio, ricordarsi di configurare Ollama per consentire connessioni esterne (non solo localhost).

Per limiti, BYOK e altro, vedere [autenticazione OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

## Configurazione e ambiente

**Percorsi del file di configurazione**

| Deploy         | Posizione della configurazione                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (utilizzare un volume per la persistenza) |

**Variabili d'ambiente** (solo web/Docker; Electron utilizza il file di configurazione locale)

| Variabile             | Predefinito                 | Descrizione                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Porta di ascolto del server                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | Percorso del file di configurazione                                                                                                     |
| `TZ`                 | `Europe/London`         | Fuso orario IANA per l'orario lato server (log, ecc.); l'interfaccia utente segue comunque il browser. Vedere [Docker → fuso orario](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(vuoto)*               | Chiave API OpenRouter                                                                                                          |
| `OPENAI_API_KEY`     | *(vuoto)*               | Chiave API OpenAI                                                                                                              |
| `CEREBRAS_API_KEY`   | *(vuoto)*               | Chiave API Cerebras                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(vuoto)*               | Chiave API Anthropic                                                                                                           |
| `GOOGLE_API_KEY`     | *(vuoto)*               | Chiave API Google Gemini                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(vuoto)*               | Chiave API DeepSeek                                                                                                            |
| `GROQ_API_KEY`       | *(vuoto)*               | Chiave API Groq                                                                                                                |
| `MISTRAL_API_KEY`    | *(vuoto)*               | Chiave API Mistral                                                                                                             |
| `OLLAMA_URL`         | *(vuoto)*               | URL base Ollama (ad es. `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(vuoto)*               | Chiave API xAI                                                                                                                 |

Configurare solo i provider utilizzati. Gli ID modello sono organizzati in namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ecc.).

**Visualizzazione costo:** OpenRouter restituisce il costo fatturato esatto quando applicabile. Gli altri provider utilizzano il costo **stimato** basato sui prezzi pubblici dei modelli di OpenRouter quando è disponibile una chiave OpenRouter; in assenza di questa, il costo dei provider non OpenRouter potrebbe risultare `0`. Le stime non costituiscono fatture.

**Dati e persistenza:** Per Docker, montare un volume in `/app/data` in modo che `config.json` e il database SQLite persistano tra i riavvii del container. Senza un volume, tutti i dati vengono persi alla chiusura del container.

**Sviluppatori:** Dopo aver scaricato modifiche che sostituiscono la vecchia configurazione a chiave singola, resettare o unire `data/config.json` con la nuova struttura predefinita presente in `src/config-defaults/config_default.json`, se il file locale utilizza ancora campi rimossi (`api_key`, `api_url`, opzioni proxy).

**Autenticazione web:**

- Amministratore predefinito: `admin` / `transrewrt26`.
- Gestire gli utenti in **Impostazioni → Utenti**.
- Reimpostare una password: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (da sorgente: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **AVVISO**  
>
> Cambia immediatamente la password predefinita dell'amministratore su qualsiasi host accessibile dalla rete.

Le impostazioni principali (carattere, modelli, lingue, ecc.) sono disponibili nelle Impostazioni dell'applicazione.

## Sviluppo e architettura

- **Sviluppo:** Configurazione, build, test e deploy (Electron, Web, Docker) - vedere **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architettura e panoramica del sistema:** Struttura delle cartelle, stack tecnologico, decisioni di progettazione - vedere **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Segnalazione di problemi

Apri una segnalazione su [GitHub](https://github.com/wsj-br/transrewrt/issues). Includi la tua piattaforma (Windows / Linux / Docker) e la versione dell'app (indicata nella finestra Informazioni o nella pagina delle versioni).

## Dichiarazione di non responsabilità

I nomi dei prodotti e le icone appartengono ai rispettivi proprietari e sono utilizzati solo a scopo identificativo. Questo software non è affiliato né approvato da nessuno dei marchi menzionati.

## Licenza

Diritti d'autore © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
