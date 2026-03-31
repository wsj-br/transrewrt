---
translation_last_updated: '2026-03-31T22:57:45.538Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: ro
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Cuprins**

- [Capturi de ecran](#screenshots)
- [Cuprins](#table-of-contents)
- [Pornire rapidă](#quick-start)
- [Instalare](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Configurarea fusului orar](#configuring-the-timezone)
- [Obținerea unei chei API OpenRouter](#getting-an-openrouter-api-key)
- [Configurare și mediu](#configuration-and-environment)
- [Dezvoltare și arhitectură](#development-and-architecture)
- [Raportarea problemelor](#reporting-issues)
- [Declinare de responsabilitate](#disclaimer)
- [Licență](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Instrument text AI: traduce între limbi, rescrie în stiluri diferite și transformă cu prompturi personalizate — utilizând mai mulți furnizori de AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI și Ollama local). Rulează ca aplicație desktop (Electron) sau aplicație web auto-găzduită (Docker).

- **Traduce** — între zeci de limbi, cu detectare automată a limbii sursă
- **Rescriere** — corectare gramaticală, îmbunătățește claritatea, stil formal/informal, scurtează, extinde, tehnic
- **Transformare** — prompturi AI personalizate; creează și gestionează prompturi, limbă țintă opțională per prompt
- **Istoric** — istoric complet al execuțiilor cu text de intrare/ieșire, filtrare și export
- **Modele și cost** — alege modele din orice furnizor configurat; panouri de cost și utilizare cu jurnal, rezumate pe model/operațiune/zi
- **Interfață utilizator** — interfață multilingvă (peste 30 de limbi, suport RTL), fonturi, ...
- **Mod web** — suport pentru mai mulți utilizatori cu roluri de administrator
- **Desktop** — aplicație Electron pentru Windows și Linux
- **Auto-găzduit** — imagine Docker pentru amd64 și arm64 (pregătit pentru Raspberry Pi)

După instalare, consultați **[Ghidul utilizatorului](USER-GUIDE.ro.md)** pentru o prezentare completă a tuturor funcțiilor.

**Citește în alte limbi:**
[Engleză (Marea Britanie)](../README.md) · [Portugheză (BR)](README.pt-BR.md) · [Arabă](README.ar.md) · [Bengali](README.bn.md) · [Catalană](README.ca.md) · [Chineză (simplificată)](README.zh-CN.md) · [Chineză (tradițională)](README.zh-TW.md) · [Croata](README.hr.md) · [Cehă](README.cs.md) · [Olandeză](README.nl.md) · [Engleză (SUA)](README.en-US.md) · [Filipineză](README.tl.md) · [Franceză](README.fr.md) · [Germană](README.de.md) · [Greacă](README.el.md) · [Hindi](README.hi.md) · [Maghiară](README.hu.md) · [Italiană](README.it.md) · [Japoneză](README.ja.md) · [Javaneză](README.jv.md) · [Coreeană](README.ko.md) · [Malaeză](README.ms.md) · [Persană](README.fa.md) · [Poloneză](README.pl.md) · [Portugheză (PT)](README.pt.md) · [Punjabi](README.pa.md) · [Română](README.ro.md) · [Rusă](README.ru.md) · [Slovacă](README.sk.md) · [Spaniolă](README.es.md) · [Swahili](README.sw.md) · [Suedeză](README.sv.md) · [Telugu](README.te.md) · [Tailandeză](README.th.md) · [Turcă](README.tr.md) · [Ucraineană](README.uk.md) · [Vietnameză](README.vi.md)

> **Notă privind traducerile interfeței și documentației:** Toate limbile interfeței, cu excepția englezei (Marea Britanie), 
> au fost traduse folosind modele AI; formularea poate fi imprecisă sau conține erori.

## Capturi de ecran

**Selector de limbă**

Selector de limbă

**Traducere**

Traduce

**Transformare - editor de prompturi**

Transformare - editor de prompt

**Panou de control**

Rezumat panou de control — utilizare

**Istoric**

Istoric

**Setări - selecție model**

Setări - selecție model

## Cuprins

- [Pornire rapidă](#quick-start)
- [Instalare](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Configurarea fusului orar](#configuring-the-timezone)
- [Obținerea unei chei API OpenRouter](#getting-an-openrouter-api-key)
- [Configurare și mediu](#configuration-and-environment)
- [Dezvoltare și arhitectură](#development-and-architecture)
- [Raportarea problemelor](#reporting-issues)
- [Declinare de răspundere](#disclaimer)
- [Licență](#license)

## Pornire rapidă

**Docker (recomandat pentru auto-găzduire)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Înlocuiți `sk-or-your-key` cu cheia dvs. API [OpenRouter](https://openrouter.ai/keys) (sau setați alte chei de furnizor; consultați [Configurare](#configuration-and-environment)). Deschideți [http://localhost:5000](http://localhost:5000) și schimbați parola implicită de administrator înainte de a expune serviciul.

> ℹ️ **NOTĂ**  
>
> În Docker, acreditările LLM sunt setate cu variabile de mediu precum `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nu în interfața web). Pe desktop (Electron), configurați cheile în **Setări → API**.

**Windows**

Descărcați cel mai recent `Transrewrt Setup x.y.z.exe` din [Versiuni](https://github.com/wsj-br/transrewrt/releases), rulați instalatorul, apoi lansați aplicația din meniul Start sau printr-o pictogramă de pe desktop. Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este frecvent utilizat pentru modele gratuite.

**Linux**

Descărcați fișierul `.AppImage` potrivit pentru procesorul dvs. din [Versiuni](https://github.com/wsj-br/transrewrt/releases) (`x64` pentru PC-uri obișnuite, `arm64` pentru multe dispozitive ARM, inclusiv Raspberry Pi 4+), apoi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este frecvent utilizat pentru modele gratuite.

**Mesaje în consolă:** Versiunile empaachetate pentru Linux (`x64` și `arm64` AppImages) suprimă avertismentele de depreciere Node din terminal (de exemplu modulul integrat `punycode`). Dacă Chromium afișează erori GPU / EGL precum „GLES3 este nesuportat”, dar aplicația funcționează, le puteți elimina prin dezactivarea accelerării hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Aceasta se aplică și pe amd64; modificați numele fișierului să corespundă descărcării dumneavoastră. Consultați [Instalare → Linux (Electron)](#linux-electron) pentru mai multe detalii.

Pe Debian/Ubuntu s-ar putea să aveți nevoie de biblioteci suplimentare la **rulare** pe care Chromium le așteaptă (de obicei deja prezente pe desktop-urile complete). Utilizați **`libnotify4`** pentru notificări desktop—**nu** `libnotify-dev` (aceasta este pentru construirea de software, nu pentru rularea AppImage-ului empaachetat):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Imaginile minime sau personalizate s-ar putea să continue să eșueze din cauza unui fișier `.so` lipsă; instalați pachetul indicat în mesajul de eroare (extras comun: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Unele medii necesită FUSE pentru a rula AppImages (de exemplu `libfuse2` pe Ubuntu 22.04+), sau utilizați `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

Consultați [Instalare → Linux](#linux-electron) pentru același rezumat.

> ℹ️ **NOTĂ**  
>
> macOS nu este în prezent suportat. Transrewrt este disponibil pentru Windows, Linux și Docker.

Odată ce aplicația rulează, consultați **[Ghidul utilizatorului](USER-GUIDE.ro.md)** pentru a învăța cum să traduceți, rescrieți și transformați text, să gestionați prompturile și să configurați modelele.

## Instalare

### Windows (Electron)

- Descărcați cel mai recent instalator din [Versiuni](https://github.com/wsj-br/transrewrt/releases).
- Rulați fișierul `.exe` și urmați pașii instalatorului.
- La prima rulare: porniți aplicația din meniul Start sau printr-o pictogramă de pe desktop.

> ℹ️ **NOTĂ**  
>
> Windows poate afișa una dintre aceste avertizări de securitate (normal pentru aplicații nesemnate/independente):
>
> - **Controlul contului de utilizator (UAC)**: „Doriți să permiteți acestui aplicații de la un editor necunoscut să facă modificări pe dispozitivul dvs.?“ → Faceți clic pe **Da**.
> - **Microsoft Defender SmartScreen**: „Windows v-a protejat PC-ul“ → Faceți clic pe **Mai multe informații** → **Execută oricum**.
>
> Acest lucru se întâmplă deoarece aplicația nu este semnată de Microsoft sau de un editor major — este sigură dacă a fost descărcată din lansările noastre oficiale de pe GitHub
>  (verificați suma de control SHA256 de mai jos).

### Linux (Electron)

- Descărcați fișierul `.AppImage` corespunzător (`x64` sau `arm64`) din [Lansări](https://github.com/wsj-br/transrewrt/releases).
- Rulați: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` pe x86_64/amd64, sau utilizați numele fișierului `...-arm64.AppImage` pe ARM64.
- **Biblioteci de runtime Debian/Ubuntu** (Electron/Chromium; la fel ca în [Pornire rapidă → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — utilizați **`libnotify4`**, nu `libnotify-dev`. Pe sistemele minime, instalați orice `.so` care lipsește și este raportat în terminal; adesea sunt necesare extensii precum `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`. AppImage poate necesita `libfuse2` (Ubuntu 22.04+) sau `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Mesaje GPU:** Chromium poate înregistra erori de inițializare GPU sau EGL pe unele sisteme (în special ARM); aplicația poate totuși rula normal. Pentru a evita aceste mesaje, lansați cu accelerarea hardware dezactivată: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (sau numele fișierului dvs. `arm64`).

### Docker

- Descărcați imaginea: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Setați cel puțin o cheie furnizor prin variabile de mediu (de exemplu `OPENROUTER_API_KEY` pentru OpenRouter). Transmiteți variabilele cu `-e` sau prin `docker compose` / `.env`, astfel încât secretele să nu fie încorporate în imagine.
- Cheile furnizorului **nu** se introduc în interfața web; serverul le citește din mediul de execuție.

Exemplu - volum denumit pentru persistență (cheie OpenRouter prin variabilă de mediu):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

sau, dacă preferați să folosiți Docker Compose, utilizați:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Consultați [Configuration](#configuration-and-environment) pentru toate variabilele de mediu, cum ar fi `PORT`, `CONFIG_PATH`, `TZ` și cheile LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

### Configurarea fusului orar

Data și ora din interfața aplicației urmează **browserul** din punct de vedere al localizării și fusului orar. Pentru comportamentul la nivel de **server** (jurnalizare și similar), containerul folosește variabila de mediu `TZ`. Implicit este `TZ=Europe/London`.

Pentru a utiliza un alt fus orar, setați `TZ` în fișierul Compose, de exemplu:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Sau transmiteți-o la rularea containerului (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Pe multe sisteme Linux puteți copia numele fusului orar al sistemului cu:

```bash
echo TZ=\"$(</etc/timezone)\"
```

O listă cu numele valide ale fusurilor orare este menținută în [baza de date tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

## Obținerea unei chei API OpenRouter

Transrewrt suportă mai mulți furnizori de IA. [OpenRouter](https://openrouter.ai) este o alegere populară deoarece agregă multe modele sub o singură cheie și oferă modele gratuite.

1. Înregistrați-vă sau autentificați-vă la [openrouter.ai](https://openrouter.ai).
2. Accesați pagina [Keys](https://openrouter.ai/keys) și creați o cheie nouă (denumiți-o și, opțional, setați un limită de credit). Puteți folosi modele gratuite fără a adăuga credit.
3. **Desktop (Electron):** lipiți cheile în **Setări → API**. **Docker:** setați variabilele de mediu precum `OPENROUTER_API_KEY` (consultați [Quick start](#quick-start)).

Nu utilizați modelul **Body Builder** al OpenRouter (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) pentru traducere, rescriere sau transformare: acesta returnează sarcini utile JSON, nu textul completat pentru aceste sarcini. Consultați [Setări → Modele](USER-GUIDE.ro.md#models) din Ghidul utilizatorului.

Puteți utiliza și alți furnizori (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) sau rulați modele local cu [Ollama](https://ollama.com). Consultați [Configuration](#configuration-and-environment) pentru lista completă a furnizorilor suportați și variabilele de mediu.

> ⚠️ **ATENȚIE**  
>
> Dacă utilizați Ollama de pe un alt dispozitiv, container sau serviciu, rețineți să configurați Ollama pentru a permite conexiuni externe (nu doar localhost).

Pentru limite, BYOK și alte informații, consultați [autentificarea OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

## Configurare și mediu

**Locații fișier de configurare**

| Deploare         | Locație configurație                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (utilizați un volum pentru persistență) |

**Variabile de mediu** (doar web/Docker; Electron folosește fișierul de configurare local)

| Variabilă             | Implicit                 | Descriere                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Portul pe care ascultă serverul                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | Calea către fișierul de configurare                                                                                                     |
| `TZ`                 | `Europe/London`         | Fusul orar IANA pentru timpul de pe server (jurnalizare etc.); interfața urmează totuși browserul. Consultați [Docker → fus orar](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(gol)*               | Cheia API OpenRouter                                                                                                          |
| `OPENAI_API_KEY`     | *(gol)*               | Cheia API OpenAI                                                                                                              |
| `CEREBRAS_API_KEY`   | *(gol)*               | Cheia API Cerebras                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(gol)*               | Cheia API Anthropic                                                                                                           |
| `GOOGLE_API_KEY`     | *(gol)*               | Cheia API Google Gemini                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(gol)*               | Cheia API DeepSeek                                                                                                            |
| `GROQ_API_KEY`       | *(gol)*               | Cheia API Groq                                                                                                                |
| `MISTRAL_API_KEY`    | *(gol)*               | Cheia API Mistral                                                                                                             |
| `OLLAMA_URL`         | *(gol)*               | URL-ul de bază Ollama (de exemplu, `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(gol)*               | Cheia API xAI                                                                                                                 |

Configurați doar furnizorii pe care îi utilizați. ID-urile modelelor sunt spațiate (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Afișare cost:** OpenRouter returnează costul facturat exact atunci când este aplicabil. Alți furnizori utilizează costul **estimat** din prețurile publice ale modelelor OpenRouter atunci când este disponibilă o cheie OpenRouter; fără aceasta, costul non-OpenRouter poate apărea ca `0`. Estimările nu sunt facturi.

**Date și persistență:** Pentru Docker, montați un volum la `/app/data` astfel încât `config.json` și baza de date SQLite să persiste între repornirile containerului. Fără un volum, toate datele se pierd când containerul se oprește.

**Dezvoltatori:** După ce preluați modificările care înlocuiesc vechea configurație cu o singură cheie, resetați sau combinați `data/config.json` cu noua formă implicită din `src/config-defaults/config_default.json`, dacă fișierul local încă utilizează câmpuri eliminate (`api_key`, `api_url`, opțiuni proxy).

**Autentificare web:**

- Administrator implicit: `admin` / `transrewrt26`.
- Gestionarea utilizatorilor în **Setări → Utilizatori**.
- Resetarea parolei: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (din sursă: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **ATENȚIE**  
>
> Schimbați imediat parola implicită de administrator pe orice host accesibil din rețea.

Setările principale (font, modele, limbi etc.) sunt disponibile în Setări aplicație.

## Dezvoltare și arhitectură

- **Dezvoltare:** Configurare, build, teste și deploare (Electron, Web, Docker) - consultați **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arhitectură și prezentare generală a sistemului:** Structura foldere, tehnologii utilizate, decizii de design - consultați **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Raportarea problemelor

Deschideți o problemă pe [GitHub](https://github.com/wsj-br/transrewrt/issues). Includeți platforma dvs. (Windows / Linux / Docker) și versiunea aplicației (afișată în dialogul Despre sau pe pagina Releases).

## Declinare de responsabilitate

Numele produselor și pictogramele aparțin proprietarilor respectivi și sunt utilizate doar în scopuri de identificare. Acest software nu este afiliat cu și nu este susținut de niciunul dintre brandurile menționate.

## Licență

Drepturi de autor © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
