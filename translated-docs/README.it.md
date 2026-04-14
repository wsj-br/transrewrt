---
translation_last_updated: '2026-04-02T12:41:09.754Z'
source_file_mtime: '2026-04-02T12:39:14.838Z'
source_file_hash: 0826245f792850f3
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

Strumento testuale basato su IA: traduci tra lingue diverse, riscrivi in stili differenti e trasforma con prompt personalizzati - utilizzando diversi provider di IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama locale). Funziona come app desktop (Electron) o come app web autogestita (Docker).

- **Traduci** - tra dozzine di lingue, con rilevamento automatico della lingua sorgente
- **Riscrittura** - correggi grammatica, migliora chiarezza, formale/informale, accorcia, espandi, tecnico
- **Trasformazione** - prompt personalizzati per IA; crea e gestisci prompt, lingua di destinazione opzionale per ogni prompt
- **Cronologia** - cronologia completa delle esecuzioni con testo in ingresso/uscita, filtri ed esportazione
- **Modelli e costo** - scegli modelli da qualsiasi provider configurato; dashboard di costo e utilizzo con log, riepiloghi per modello/operazione/giorno
- **Interfaccia utente** - interfaccia multilingue (30+ lingue, supporto RTL), font, ...
- **Modalità web** - supporto multi-utente con ruoli amministratore
- **Desktop** - app Electron per Windows e Linux
- **Autogestito** - immagine Docker per amd64 e arm64 (pronto per Raspberry Pi)

Dopo l'installazione, consulta la **[Guida Utente](USER-GUIDE.it.md)** per una panoramica completa di tutte le funzionalità.

<small>**Leggi in altre lingue:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia, eccetto l'originale Inglese (UK),
> sono state tradotte utilizzando modelli di IA; il testo potrebbe essere impreciso o contenere errori.

</small>

<br/>

<a id="table-of-contents"></a>
## Indice

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Screenshot](#screenshots)
- [Avvio rapido](#quick-start)
- [Ottenere una chiave API OpenRouter](#getting-an-openrouter-api-key)
- [Configurazione e ambiente](#configuration-and-environment)
- [Sviluppo e architettura](#development-and-architecture)
- [Segnalazione di problemi](#reporting-issues)
- [Avviso legale](#disclaimer)
- [Licenza](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Schermate

**Selettore lingua**

![Language selector](../images/screenshots/it/language-selector.png)

**Traduci**

![Translate](../images/screenshots/it/translate.png)

**Trasformazione - editor di prompt**

![Transform - prompt editor](../images/screenshots/it/transform-prompt-edit.png)

**Dashboard**

![Dashboard summary - usage](../images/screenshots/it/dashboard-summary.png)

**Cronologia**

![History](../images/screenshots/it/history.png)

**Impostazioni - selezione modello**

![Settings - model selection](../images/screenshots/it/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## Avvio rapido

<details>
<summary><b>Docker (consigliato per l'hosting autonomo)</b></summary>

<a id="docker"></a>

<br/>

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

Imposta almeno una chiave di provider tramite ambiente (ad esempio `OPENROUTER_API_KEY` per OpenRouter). Passa le variabili con `-e` o `docker compose` / `.env` in modo che i segreti non vengano inclusi nell'immagine. Le chiavi del provider **non** vanno inserite nell'interfaccia web; il server le legge dall'ambiente.

<br/>

> ℹ️ **NOTA**<br/>
> In Docker, le credenziali LLM vengono impostate tramite variabili d'ambiente come `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (non nell'interfaccia web). Sul desktop (Electron) configuri le chiavi in **Impostazioni → API**.

<br/>

Oppure usa Docker Compose:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Consulta [Configuration](#configuration-and-environment) per tutte le variabili d'ambiente, come `PORT`, `CONFIG_PATH`, `TZ` e le chiavi LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Fuso orario del server (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

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

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Scarica l'ultima versione di `Transrewrt Setup x.y.z.exe` da [Releases](https://github.com/wsj-br/transrewrt/releases).
- Esegui il file `.exe` e segui le istruzioni dell'installer.
- Primo avvio: avvia l'app dal menu Start o dal collegamento sul desktop.
- Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per i modelli gratuiti.

<br/>

> ℹ️ **NOTA**<br/>
> Windows potrebbe mostrare uno di questi avvisi di sicurezza (normale per app non firmate o indie):
>   - **Controllo account utente (UAC)**: "Consentire a questa app di un editore sconosciuto di apportare modifiche al dispositivo?" → Clicca su **Sì**.
>   - **Microsoft Defender SmartScreen**: "Windows ha protetto il PC" → Clicca su **Altre informazioni** → **Esegui comunque**.
>
> Questo accade perché l'app non è firmata da Microsoft o da un editore importante-è sicura se scaricata dalle nostre release ufficiali su GitHub (verifica i checksum nella pagina [Releases](https://github.com/wsj-br/transrewrt/releases) accanto a ogni risorsa).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Scarica il file `.AppImage` per la tua CPU da [Rilasci](https://github.com/wsj-br/transrewrt/releases) (`x64` per PC tipici, `arm64` per molti dispositivi ARM, inclusi Raspberry Pi 4+), quindi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Su x86_64/amd64 usa il nome file `x64`; su ARM64 usa il nome `...-arm64.AppImage`.

Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per i modelli gratuiti.

**Messaggi della console:** Le versioni Linux pacchettizzate (`x64` e `arm64` AppImages) sopprimono gli avvisi di deprecazione di Node nel terminale (ad esempio il modulo integrato `punycode`). Se Chromium visualizza errori GPU / EGL come “GLES3 non supportato” ma l'app funziona, puoi eliminarli disattivando l'accelerazione hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Questo vale anche per amd64; cambia il nome del file in base al download effettuato.

Su Debian/Ubuntu potrebbero essere necessarie ulteriori librerie di **runtime** richieste da Chromium (spesso già presenti sulle installazioni desktop complete). Esegui i comandi seguenti se necessario:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

sostituisci `libasound2t64` con `libasound2` per `arm64`. Le installazioni minime o personalizzate potrebbero comunque fallire con un file `.so` mancante. Installa il pacchetto indicato nel messaggio di errore (tra gli extra comuni: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). In alcuni ambienti potrebbe essere necessario eseguire l'app usando `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **NOTA**<br/>
> macOS attualmente non è supportato. Transrewrt è disponibile per Windows, Linux e Docker.

</details>

<br/>

Una volta avviata l'app, consulta la **[Guida Utente](USER-GUIDE.it.md)** per imparare come tradurre, riscrivere e trasformare testi, gestire prompt e configurare modelli.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Ottenere una chiave API OpenRouter

Transrewrt supporta diversi provider di intelligenza artificiale. [OpenRouter](https://openrouter.ai) è una scelta popolare perché aggrega molti modelli sotto un'unica chiave e offre modelli gratuiti.

1. Registrati o accedi su [openrouter.ai](https://openrouter.ai).
2. Apri la pagina [Keys](https://openrouter.ai/keys) e crea una nuova chiave (assegnale un nome e, opzionalmente, un limite di credito). Puoi usare modelli gratuiti senza aggiungere credito.
3. **Desktop (Electron):** incolla le chiavi in **Impostazioni → API**. **Docker:** imposta le variabili d'ambiente come `OPENROUTER_API_KEY` (vedi [Avvio rapido](#quick-start)).

Non utilizzare il modello **Body Builder** di OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) per tradurre, riscrivere o trasformare: restituisce payload JSON delle richieste, non il testo completato per tali attività. Consulta [Impostazioni → Modelli](USER-GUIDE.it.md#models) nella Guida Utente.

Puoi anche utilizzare altri provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) oppure eseguire modelli localmente con [Ollama](https://ollama.com). Consulta [Configuration](#configuration-and-environment) per l'elenco completo dei provider supportati e delle variabili d'ambiente.

</br>

> ⚠️ **ATTENZIONE**<br/>
> Se utilizzi Ollama da un altro dispositivo, contenitore o servizio, ricorda di configurare Ollama per consentire connessioni esterne (non solo localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configurazione e ambiente

</br>

**Percorsi del file di configurazione**

| Deploy         | Posizione della configurazione                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (utilizzare un volume per la persistenza) |

<br/>

**Variabili d'ambiente** (solo web/Docker; Electron utilizza il file di configurazione locale)

| Variabile             | Descrizione                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Porta di ascolto del server (predefinita: `5000`)                            |
| `CONFIG_PATH`        | Percorso del file di configurazione (predefinito: `/app/data/config.json`)   |
| `TZ`                 | fuso orario per l'orario lato server (log, ecc.) (predefinito: `Europe/London`) |
| `OPENROUTER_API_KEY` | Chiave API OpenRouter                                                        |
| `OPENAI_API_KEY`     | Chiave API OpenAI                                                            |
| `CEREBRAS_API_KEY`   | Chiave API Cerebras                                                          |
| `ANTHROPIC_API_KEY`  | Chiave API Anthropic                                                         |
| `GOOGLE_API_KEY`     | Chiave API Google Gemini                                                     |
| `DEEPSEEK_API_KEY`   | Chiave API DeepSeek                                                          |
| `GROQ_API_KEY`       | Chiave API Groq                                                              |
| `MISTRAL_API_KEY`    | Chiave API Mistral                                                           |
| `OLLAMA_URL`         | URL base Ollama (es. `http://host.docker.internal:11434`)                    |
| `XAI_API_KEY`        | Chiave API xAI                                                               |

Configurare solo i provider utilizzati. Gli ID modello sono organizzati in namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ecc.).

**Visualizzazione costo:** OpenRouter restituisce il costo fatturato esatto quando applicabile. Gli altri provider utilizzano il costo **stimato** basato sui prezzi pubblici dei modelli di OpenRouter quando è disponibile una chiave OpenRouter; in assenza di questa, il costo dei provider non OpenRouter potrebbe risultare `0`. Le stime non costituiscono fatture.

<br/>

**Dati e persistenza:** Per Docker, montare un volume in `/app/data` in modo che `config.json` e il database SQLite persistano tra i riavvii del container. Senza un volume, tutti i dati vengono persi alla chiusura del container.

<br/>

**Autenticazione web:**

- Amministratore predefinito: `admin` / `transrewrt26`.
- Gestisci gli utenti in **Impostazioni → Utenti**.
- Reimposta una password: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **AVVISO**<br/>
> Modifica immediatamente la password predefinita dell'amministratore su qualsiasi host accessibile dalla rete.

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
