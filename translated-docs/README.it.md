---
translation_last_updated: '2026-05-24T17:53:03.631Z'
source_file_mtime: '2026-05-21T23:09:11.948Z'
source_file_hash: 8a7988e2486931ff07a063a9f29a8a2b09122dc70ddc4f0e8d6d1b22d011f008
translation_language: it
source_file_path: README.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.3.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Strumento testuale basato su AI: traduci tra lingue, riscrivi in stili diversi e trasforma con prompt personalizzati - utilizzando più provider di intelligenza artificiale (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama locale). Funziona come app desktop (Electron) o come app web autosufficiente (Docker).

- **Traduci** - tra dozzine di lingue, con rilevamento automatico dell'origine
- **Riscrivi** - correggi grammatica, migliora chiarezza, registro formale/informale, accorcia, espandi, tecnico
- **Trasforma** - prompt personalizzati con intelligenza artificiale; crea e gestisci prompt, lingua di destinazione opzionale per ogni prompt
- **Cronologia** - cronologia completa delle esecuzioni con testo in input/output, filtri ed esportazione
- **Facile e Avanzato** - Modalità Facile (predefinita): competenze selezionate per provider (**Gratuito (OpenRouter)**, **Lite**, **Avanzato**, **Tecnico**; vengono mostrate solo le competenze con un mapping per il provider selezionato) senza dover scegliere gli ID del modello; Modalità Avanzata: elenco completo dei modelli dai provider configurati
- **Modelli e costo** - dashboard su costi e utilizzo (Riepilogo, Per modello, Tutte le chiamate) con funzione di esportazione; OpenRouter mostra la spesa effettiva, per gli altri provider vengono usate stime
- **Interfaccia utente (UI)** - interfaccia multilingue (30+ lingue, supporto RTL), caratteri tipografici, ...
- **Modalità Web** - supporto multi-utente con ruoli di amministratore
- **Desktop** - App Electron per Windows e Linux
- **Self-hosted** - Immagine Docker per amd64 e arm64 (pronta per Raspberry Pi)

Una volta installato, consultare la [**Guida per l'utente**](USER-GUIDE.it.md) per una panoramica completa di tutte le funzionalità.

<small>**Leggi in altre lingue:** </small>
<small id="lang-list">[English (GB)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia, eccetto l'inglese (GB) originale, 
> sono state tradotte mediante modelli di intelligenza artificiale; il testo potrebbe essere impreciso o contenere errori.

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
- [Segnalazione problemi](#reporting-issues)
- [Dichiarazione di non responsabilità](#disclaimer)
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
<summary><b>Docker (consigliato per l'auto-ospitaggio)</b></summary>

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

Sostituisci `sk-or-your-key` con la tua [chiave API di OpenRouter](https://openrouter.ai/keys) (oppure imposta chiavi di altri provider; vedi [Configurazione](#configuration-and-environment)). Apri [http://localhost:5000](http://localhost:5000) e modifica la password amministratore predefinita prima di esporre il servizio.

Imposta almeno una chiave provider tramite variabili d'ambiente (ad esempio `OPENROUTER_API_KEY` per OpenRouter). Passa le variabili con `-e` o `docker compose` / `.env` in modo che i segreti non siano incorporati nell'immagine. Le chiavi dei provider **non vengono** inserite nell'interfaccia web; il server le legge dall'ambiente.

<br/>

> ℹ️ **NOTA**<br/>
> In Docker, le credenziali LLM sono impostate tramite variabili d'ambiente come `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (non nell'interfaccia web). Nella versione desktop (Electron) configuri le chiavi in **Impostazioni → API**.

<br/>

Oppure usa Docker Compose:

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Consulta [Configurazione](#configuration-and-environment) per tutte le variabili d'ambiente, come `PORT`, `CONFIG_PATH`, `TZ`, e le chiavi LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Fuso orario del server (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

La data e l'ora nell'interfaccia utente seguono le impostazioni locali e il fuso orario del **browser**. Per il **comportamento** lato server (registrazione log e simili), il container utilizza la variabile d'ambiente `TZ`. Il valore predefinito è `TZ=Europe/London`.

Per utilizzare un altro fuso orario, imposta `TZ` nel file Compose, ad esempio:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Oppure passala all'avvio del container (Docker):

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
- Esegui `.exe` e segui l'installazione.
- Primo avvio: avvia l'app dal menu Start o dal collegamento sul desktop.
- Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per i modelli gratuiti.

<br/>

> ℹ️ **NOTA**<br/>
> Windows potrebbe mostrare uno di questi avvisi di sicurezza (normale per app non firmate o indie):
>   - **Controllo account utente (UAC)**: "Consenti a questa app di un editore sconosciuto di apportare modifiche al dispositivo?" → Clicca **Sì**.
>   - **Microsoft Defender SmartScreen**: "Windows ha protetto il PC" → Clicca **Altre informazioni** → **Esegui comunque**.
>
> Questo accade perché l'app non è firmata da Microsoft o da un editore importante – è sicura se scaricata dai nostri rilasci ufficiali su GitHub (verifica i checksum nella pagina [Releases](https://github.com/wsj-br/transrewrt/releases) accanto a ogni risorsa).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Scarica il `.AppImage` per la tua CPU dalla pagina [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` per PC tipici, `arm64` per molti dispositivi ARM, inclusi Raspberry Pi 4+), quindi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Su x86_64/amd64 utilizza il nome file `x64`; su ARM64 utilizza il nome `...-arm64.AppImage`.

Inserisci le tue chiavi API in **Impostazioni → API**. Devi configurare almeno un provider; OpenRouter è comune per i modelli gratuiti.

**Messaggi della console:** Le versioni Linux pacchettizzate (`x64` e `arm64` AppImages) sopprimono gli avvisi di deprecazione di Node nel terminale (ad esempio il modulo integrato `punycode`). Se Chromium mostra errori GPU / EGL come “GLES3 non supportato” ma l'app funziona, puoi disattivarli disabilitando l'accelerazione hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Questo vale anche per amd64; modifica il nome del file in base al download effettuato.

Su Debian/Ubuntu potresti aver bisogno di librerie **runtime** aggiuntive richieste da Chromium (spesso già presenti nelle installazioni desktop complete). Esegui i comandi seguenti se necessario:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

sostituisci `libasound2t64` con `libasound2` per `arm64`. Installazioni minime o personalizzate potrebbero comunque fallire con un file `.so` mancante. Installa il pacchetto indicato nel messaggio di errore (extra comuni: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). In alcuni ambienti potrebbe essere necessario eseguire l'app usando `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **NOTA**<br/>
> macOS non è attualmente supportato. Transrewrt è disponibile per Windows, Linux e Docker.

</details>

<br/>

Una volta avviata l'app, consultare la [**Guida per l'utente**](USER-GUIDE.it.md) per scoprire come tradurre, riscrivere e trasformare il testo, gestire i prompt e configurare i modelli.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Ottenere una chiave API OpenRouter

Transrewrt supporta più provider di intelligenza artificiale. [OpenRouter](https://openrouter.ai) è una scelta popolare perché aggrega molti modelli sotto una singola chiave e offre modelli gratuiti.

1. Registrati o accedi su [openrouter.ai](https://openrouter.ai).
2. Apri la pagina [Keys](https://openrouter.ai/keys) e crea una nuova chiave (dalle un nome e, opzionalmente, imposta un limite di credito). Puoi usare modelli gratuiti senza aggiungere credito.
3. **Desktop (Electron):** incolla le chiavi in **Impostazioni → API**. **Docker:** imposta le variabili d'ambiente come `OPENROUTER_API_KEY` (vedi [Avvio rapido](#quick-start)).

Non utilizzare il modello **Body Builder** di OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) per tradurre, riscrivere o trasformare: restituisce payload JSON delle richieste, non il testo completato per queste attività. Consulta [Impostazioni → Modelli](USER-GUIDE.it.md#models) nella Guida Utente.

Puoi anche usare altri provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o eseguire modelli localmente con [Ollama](https://ollama.com). Consulta [Configurazione](#configuration-and-environment) per l'elenco completo dei provider supportati e delle variabili d'ambiente.

</br>

> ⚠️ **ATTENZIONE**<br/>
> Se stai usando Ollama da un altro dispositivo, contenitore o servizio, ricorda di configurare Ollama per consentire connessioni esterne (non solo localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configurazione e ambiente

</br>

**Percorsi del file di configurazione**

| Distribuzione         | Posizione configurazione                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (usa un volume per la persistenza) |

<br/>

**Variabili d'ambiente** (solo web/Docker; Electron usa il file di configurazione locale)

| Variabile             | Descrizione                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Porta di ascolto del server (predefinita: `5000`)                                  |
| `CONFIG_PATH`        | Percorso del file di configurazione (predefinito: `/app/data/config.json`)                |
| `TZ`                 | fuso orario per l'ora lato server (log, ecc.) (predefinito: `Europe/London`) |
| `HISTORY_DISABLED`   | Disattiva forzatamente la cronologia di esecuzione (opzionale, valore predefinito `false`)                  |
| `OPENROUTER_API_KEY` | Chiave API OpenRouter                                                           |
| `OPENAI_API_KEY`     | Chiave API OpenAI                                                               |
| `CEREBRAS_API_KEY`   | Chiave API Cerebras                                                             |
| `ANTHROPIC_API_KEY`  | Chiave API Anthropic                                                            |
| `GOOGLE_API_KEY`     | Chiave API Google Gemini                                                        |
| `DEEPSEEK_API_KEY`   | Chiave API DeepSeek                                                             |
| `GROQ_API_KEY`       | Chiave API Groq                                                                 |
| `MISTRAL_API_KEY`    | Chiave API Mistral                                                              |
| `OLLAMA_URL`         | URL base di Ollama (ad es. `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | Chiave API xAI                                                                  |

**Modalità privacy:** Per disattivare forzatamente la cronologia, indipendentemente da `config.json` o dalle preferenze dell'utente, impostare `HISTORY_DISABLED` su `true` o `1` (non sensibile a maiuscole/minuscole) per il **processo web/server Docker** e/o per il **processo principale desktop Electron** (ad esempio, ambiente di sistema o del launcher — non solo del renderer). Questa impostazione disabilita il salvataggio della cronologia di input/output, blocca **Impostazioni → Impostazioni generali → Cronologia** e impedisce l'uso delle API relative alla cronologia.

Configura solo i provider che utilizzi. Gli ID dei modelli sono organizzati in namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ecc.).

**Visualizzazione costo:** OpenRouter restituisce il costo fatturato esatto quando applicabile. Gli altri provider utilizzano il costo **stimato** basato sui prezzi pubblici dei modelli di OpenRouter quando è disponibile una chiave OpenRouter; in assenza di questa, il costo dei provider non OpenRouter potrebbe risultare `0`. Le stime non costituiscono fatture.

<br/>

**Dati e persistenza:** Per Docker, monta un volume in `/app/data` in modo che `config.json` e il database SQLite siano persistenti tra i riavvii del container. Senza un volume, tutti i dati vengono persi alla chiusura del container.

<br/>

**Autenticazione web:**

- Amministratore predefinito: `admin` / `transrewrt26`.
- Gestisci gli utenti in **Impostazioni → Utenti**.
- Reimposta una password: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **ATTENZIONE**<br/>
> Cambia immediatamente la password predefinita dell'amministratore su qualsiasi host accessibile dalla rete.

<br/>

Le impostazioni principali (carattere, modelli, lingue, ecc.) sono disponibili nelle Impostazioni dell'applicazione.

<br/><br/>

<a id="development-and-architecture"></a>
## Sviluppo e architettura

- **Sviluppo:** Configurazione, build, test e distribuzione (Electron, Web, Docker) - vedere [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).
- **Panoramica dell'architettura e del sistema:** Struttura delle cartelle, stack tecnologico, decisioni di progettazione - vedere [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md).

<br/><br/>

<a id="reporting-issues"></a>
## Segnalazione di problemi

Apri una segnalazione su [GitHub](https://github.com/wsj-br/transrewrt/issues). Includi la tua piattaforma (Windows / Linux / Docker) e la versione dell'app (visualizzata nella finestra Informazioni o nella pagina delle Release).

<br/><br/>

<a id="disclaimer"></a>
## Dichiarazione di non responsabilità

I nomi dei prodotti e le icone appartengono ai rispettivi proprietari e sono utilizzati solo a scopo identificativo. Questo software non è affiliato né approvato da nessuno dei marchi menzionati.

<br/><br/>

<a id="license"></a>
## Licenza

Diritti d'autore © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
