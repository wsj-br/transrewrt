---
translated_at: "2026-03-25T22:19:33.235Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo di Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/versione-1.0.15-blue" alt="Versione"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/licenza-Apache%202.0-verde" alt="Licenza: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/piattaforma-Windows%20%7C%20Linux%20%7C%20Docker-grigiochiaro" alt="Piattaforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Strumento testuale basato sull'intelligenza artificiale: traduci tra lingue diverse, riscrivi in stili differenti e trasforma con prompt personalizzati — utilizzando diversi fornitori di intelligenza artificiale (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama locale). Può essere eseguito come app desktop (Electron) o come app web autogestita (Docker).

- **Traduci** — tra dozzine di lingue, con rilevamento automatico della lingua di origine
- **Riscrivi** — correggi la grammatica, migliora la chiarezza, rendi formale/informale, accorci, espandi, rendi tecnico
- **Trasforma** — prompt personalizzati per l'IA; crea e gestisci prompt, con eventuale lingua di destinazione specifica per ogni prompt
- **Cronologia** — cronologia completa delle operazioni eseguite con testi inseriti e risultati ottenuti, filtro ed esportazione
- **Modelli e costi** — scegli modelli tra tutti i fornitori configurati; dashboard per costi e utilizzo con registro dettagliato e riepiloghi per modello/operazione/giorno
- **Interfaccia utente** — interfaccia multilingue (30+ lingue, supporto RTL), font, ...
- **Modalità web** — supporto multiutente con ruoli amministrativi
- **App desktop** — App Electron per Windows e Linux
- **Autogestito** — immagine Docker per amd64 e arm64 (pronta per Raspberry Pi)

Dopo l'installazione, consulta la **[Guida Utente](USER-GUIDE.it.md)** per un'introduzione completa a tutte le funzionalità.

<small>**Leggi in altre lingue:** [English (UK)](README.it.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia diverse dall'originale (inglese UK)
> sono state tradotte mediante modelli di intelligenza artificiale; la formulazione potrebbe risultare imprecisa o contenere errori.

</small>

<br/>

<a id="screenshots"></a>
## Screenshot

**Selettore lingua**

![Selettore lingua](../images/screenshots/it/language-selector.png)

**Traduci**

![Traduci](../images/screenshots/it/translate.png)

**Trasforma - editor di prompt**

![Trasforma - editor di prompt](../images/screenshots/it/transform-prompt-edit.png)

**Dashboard**

![Dashboard costi](../images/screenshots/it/dashboard-summary.png)

**Cronologia**

![Cronologia](../images/screenshots/it/history.png)

**Impostazioni - selezione modelli**

![Impostazioni - selezione modelli](../images/screenshots/it/settings-models.png)

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
- [Collaborare](#contributing)
- [Avviso legale](#disclaimer)
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
> In Docker, le credenziali del LLM vengono impostate tramite variabili d'ambiente come `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (non nell'interfaccia web). Su desktop (Electron) puoi configurare le chiavi in **Impostazioni → API**.

<br/>

**Windows**

Scarica l'ultima versione di `Transrewrt Setup x.y.z.exe` da [Release](https://github.com/wsj-br/transrewrt/releases), esegui il programma di installazione, quindi avvia l'app dal menu Start o da un collegamento sul desktop. Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per modelli gratuiti.

<br/>

**Linux**

Scarica il file `.AppImage` adatto alla tua CPU da [Release](https://github.com/wsj-br/transrewrt/releases) (`x64` per PC tipici, `arm64` per molti dispositivi ARM, incluso Raspberry Pi 4+), quindi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per modelli gratuiti.

Su Debian/Ubuntu potrebbe essere necessario installare prima dipendenze aggiuntive:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Vedi [Installazione → Linux](#linux-electron) per maggiori dettagli.

<br/>

> ℹ️ **NOTA**<br/>
> macOS non è attualmente supportato. Transrewrt è disponibile per Windows, Linux e Docker.

<br/>

Una volta avviata l'app, consulta la **[Guida utente](USER-GUIDE.it.md)** per imparare come tradurre, riscrivere e trasformare testi, gestire prompt e configurare modelli.

<br/><br/>

<a id="installation"></a>
## Installazione

<a id="windows-electron"></a>
### Windows (Electron)

- Scarica l'ultimo programma di installazione da [Release](https://github.com/wsj-br/transrewrt/releases).
- Esegui il file `.exe` e segui le istruzioni del programma di installazione.
- Primo avvio: avvia l'app dal menu Start o da un collegamento sul desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Scarica il file `.AppImage` corrispondente (`x64` o `arm64`) da [Release](https://github.com/wsj-br/transrewrt/releases).
- Esegui: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` su x86_64/amd64, oppure usa il nome file `...-arm64.AppImage` su ARM64.
- Dipendenze aggiuntive (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Vedi [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per ulteriori informazioni.

<br/>

<a id="docker"></a>
### Docker

- Scarica: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Imposta almeno una chiave provider tramite ambiente (ad esempio `OPENROUTER_KEY` per OpenRouter). Passa le variabili con `-e` o tramite `docker compose` / `.env`, in modo che i segreti non siano inclusi nell'immagine.
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

| Opzione  | Descrizione                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Porta    | `5000` (mappa con `-p 5000:5000`)                                                                             |
| Volume   | Monta `/app/data` per mantenere la configurazione e il database                                               |
| Variabili d'ambiente | `PORT`, `CONFIG_PATH`, oltre alle chiavi LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - vedi [Configurazione](#configuration-and-environment) |

Per compilare ed eseguire da codice sorgente: `docker compose up --build -d` o `pnpm docker:up` - vedi [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Ottenere una chiave API OpenRouter

Transrewrt supporta diversi fornitori di intelligenza artificiale. [OpenRouter](https://openrouter.ai) è una scelta popolare perché aggrega molti modelli sotto una singola chiave e offre modelli gratuiti.

1. Registrati o accedi su [openrouter.ai](https://openrouter.ai).
2. Apri la pagina [Keys](https://openrouter.ai/keys) e crea una nuova chiave (assegnale un nome e, opzionalmente, un limite di credito). Puoi utilizzare modelli gratuiti senza aggiungere credito.
3. **Desktop (Electron):** incolla le chiavi in **Impostazioni → API**. **Docker:** imposta le variabili d'ambiente come `OPENROUTER_KEY` (vedi [Avvio rapido](#quick-start)).

Non utilizzare il modello **Body Builder** di OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) per tradurre, riscrivere o trasformare: restituisce payload JSON delle richieste, non il testo completato per queste operazioni. Consulta [Impostazioni → Modelli](USER-GUIDE.it.md#models) nella Guida utente.

Puoi inoltre utilizzare altri fornitori (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o eseguire modelli localmente con [Ollama](https://ollama.com) Vedi [Configurazione](#configuration-and-environment) per l'elenco completo dei fornitori supportati e delle variabili d'ambiente.

> ⚠️ **ATTENZIONE**<br/>
> Se utilizzi Ollama da un altro dispositivo, contenitore o servizio, ricorda di configurare Ollama per consentire connessioni esterne (non solo localhost).

Per informazioni su limiti, BYOK e altro, consulta [autenticazione OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configurazione e ambiente

**Percorsi del file di configurazione**

| Deployment         | Posizione della configurazione                  |
| ------------------ | ----------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Web / Docker       | `/app/data/config.json` (usa un volume per la persistenza) |

<br/>

**Variabili d'ambiente** (solo web/Docker; Electron utilizza il file di configurazione locale)

| Variabile          | Predefinito             | Descrizione |
| ------------------ | ----------------------- | ----------- |
| `PORT`             | `5000`                  | Porta di ascolto del server |
| `CONFIG_PATH`      | `/app/data/config.json` | Percorso del file di configurazione |
| `OPENROUTER_KEY`   | *(vuoto)*               | Chiave API OpenRouter |
| `OPENAI_KEY`       | *(vuoto)*               | Chiave API OpenAI |
| `CEREBRAS_KEY`     | *(vuoto)*               | Chiave API Cerebras |
| `ANTHROPIC_KEY`    | *(vuoto)*               | Chiave API Anthropic |
| `GOOGLE_KEY`       | *(vuoto)*               | Chiave API Google Gemini |
| `DEEPSEEK_KEY`     | *(vuoto)*               | Chiave API DeepSeek |
| `GROQ_KEY`         | *(vuoto)*               | Chiave API Groq |
| `MISTRAL_KEY`      | *(vuoto)*               | Chiave API Mistral |
| `OLLAMA_URL`       | *(vuoto)*               | URL base di Ollama (es. `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(vuoto)*               | Chiave API xAI |

Configurare solo i fornitori in uso. Gli ID dei modelli sono organizzati in namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ecc.).

**Visualizzazione costi:** OpenRouter restituisce il costo fatturato esatto quando disponibile. Gli altri fornitori utilizzano un costo **stimato** basato sui prezzi pubblici dei modelli di OpenRouter, in presenza di una chiave OpenRouter; altrimenti, il costo dei fornitori non-OpenRouter potrebbe risultare `0`. Le stime non corrispondono a fatture.

<br/>

**Dati e persistenza:** Per Docker, montare un volume in `/app/data` in modo che `config.json` e il database SQLite siano mantenuti anche dopo i riavvii del contenitore. Senza volume, tutti i dati andranno persi alla chiusura del contenitore.

**Sviluppatori:** Dopo aver applicato aggiornamenti che sostituiscono la vecchia configurazione con chiave singola, resettare o unire `data/config.json` con la nuova struttura predefinita in `src/config-defaults/config_default.json`, se il file locale utilizza ancora campi rimossi (`api_key`, `api_url`, opzioni proxy).

<br/>

**Autenticazione web:**

- Amministratore predefinito: `admin` / `transrewrt26`.
- Gestisci utenti in **Impostazioni → Utenti**.
- Reimposta la password: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (dalla sorgente: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATTENZIONE**<br/>
> Cambia immediatamente la password amministrativa predefinita su ogni host accessibile dalla rete.

<br/>

Le impostazioni principali (font, modelli, lingue, ecc.) sono disponibili nelle Impostazioni dell'applicazione.

<br/><br/>

<a id="development-and-architecture"></a>

## Sviluppo e architettura

- **Sviluppo:** Configurazione, build, test e distribuzione (Electron, Web, Docker) - vedere **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architettura e panoramica del sistema:** Struttura delle cartelle, stack tecnologico, decisioni di progettazione - vedere **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versioni e tag

- I **tag Git** `v`* (ad esempio `v1.0.10`) attivano il [flusso di lavoro di rilascio](.github/workflows/release.yml). Le **GitHub Releases** includono il programma di installazione per Windows (`.exe`) e le AppImage Linux (**x64** e **arm64**).
- Le **immagini Docker** vengono pubblicate su `ghcr.io/wsj-br/transrewrt`. I tag delle immagini corrispondono alla versione Git (ad esempio `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) più il tag `latest`. Multi-arch: `linux/amd64` e `linux/arm64` (ad esempio Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Partecipazione

1. Effettua il fork del repository.
2. Crea un branch per la nuova funzionalità: `git checkout -b feature/my-feature`
3. Effettua il commit delle tue modifiche con un messaggio chiaro.
4. Fai il push e apri una Pull Request verso `main`.

Segui lo stile di codice esistente e testa le tue modifiche sia in modalità Electron che web prima di inviare. Vedere [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per istruzioni su build e test.

<br/>

**Segnalazione di problemi:** Apri una issue su [GitHub](https://github.com/wsj-br/transrewrt/issues). Includi la tua piattaforma (Windows / Linux / Docker) e la versione dell'app (indicata nella finestra Informazioni o nella pagina delle versioni).

<br/><br/>

<a id="disclaimer"></a>
## Dichiarazione di non responsabilità

I nomi e gli icone dei prodotti appartengono ai rispettivi proprietari e sono utilizzati esclusivamente a scopo identificativo. Questo software non è affiliato né sponsorizzato da alcun marchio menzionato.

<br/><br/>

<a id="license"></a>
## Licenza

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)