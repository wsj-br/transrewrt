---
translation_last_updated: '2026-03-30T00:46:24.823Z'
source_file_mtime: '2026-03-29T23:51:36.506Z'
source_file_hash: fa17b974cbf42a93
translation_language: ro
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Versiune"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licență: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platformă">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

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

<small>**Citiți în alte limbi:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Notă privind traducerile interfeței și documentației:** Toate limbile interfeței, cu excepția englezei (Marea Britanie), 
> au fost traduse folosind modele AI; formularea poate fi imprecisă sau conține erori.

</small>

<br/>

<a id="screenshots"></a>
## Capturi de ecran

**Selector de limbă**

![Language selector](../images/screenshots/ro/language-selector.png)

**Traducere**

![Translate](../images/screenshots/ro/translate.png)

**Transformare - editor de prompturi**

![Transform - prompt editor](../images/screenshots/ro/transform-prompt-edit.png)

**Panou de control**

![Dashboard summary — usage](../images/screenshots/ro/dashboard-summary.png)

**Istoric**

![History](../images/screenshots/ro/history.png)

**Setări - selecție model**

![Settings - model selection](../images/screenshots/ro/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Cuprins

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

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

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
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

<br/>

> ℹ️ **NOTĂ**<br/>
> În Docker, acreditările LLM sunt setate prin variabile de mediu precum `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nu în interfața web). Pe desktop (Electron), configurați cheile în **Setări → API**.

<br/>

**Windows**

Descărcați cel mai recent `Transrewrt Setup x.y.z.exe` din [Versiuni](https://github.com/wsj-br/transrewrt/releases), rulați instalatorul, apoi lansați aplicația din meniul Start sau printr-o pictogramă de pe desktop. Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este frecvent utilizat pentru modele gratuite.

<br/>

**Linux**

Descărcați fișierul `.AppImage` potrivit pentru procesorul dvs. din [Versiuni](https://github.com/wsj-br/transrewrt/releases) (`x64` pentru PC-uri obișnuite, `arm64` pentru multe dispozitive ARM, inclusiv Raspberry Pi 4+), apoi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este frecvent utilizat pentru modele gratuite.

Pe Debian/Ubuntu s-ar putea să fie necesar să instalați mai întâi dependențe suplimentare:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Consultați [Instalare → Linux](#linux-electron) pentru detalii.

<br/>

> ℹ️ **NOTĂ**<br/>
> macOS nu este în prezent suportat. Transrewrt este disponibil pentru Windows, Linux și Docker.

<br/>

Odată ce aplicația rulează, consultați **[Ghidul utilizatorului](USER-GUIDE.ro.md)** pentru a învăța cum să traduceți, rescrieți și transformați text, să gestionați prompturile și să configurați modelele.

<br/><br/>

<a id="installation"></a>
## Instalare

<a id="windows-electron"></a>
### Windows (Electron)

- Descărcați cel mai recent instalator din [Versiuni](https://github.com/wsj-br/transrewrt/releases).
- Rulați fișierul `.exe` și urmați pașii instalatorului.
- La prima rulare: porniți aplicația din meniul Start sau printr-o pictogramă de pe desktop.

<br/>

> ℹ️ **NOTĂ**<br/>
> Windows poate afișa una dintre aceste avertizări de securitate (normal pentru aplicații nesemnate/independente):
>   - **Controlul contului de utilizator (UAC)**: „Doriți să permiteți acestui aplicații de la un editor necunoscut să facă modificări pe dispozitivul dvs.?“ → Faceți clic pe **Da**.
>   - **Microsoft Defender SmartScreen**: „Windows v-a protejat PC-ul“ → Faceți clic pe **Mai multe informații** → **Execută oricum**.
>
> Acest lucru se întâmplă deoarece aplicația nu este semnată de Microsoft sau de un editor major — este sigură dacă a fost descărcată din versiunile noastre oficiale de pe GitHub
>  (verificați suma de control SHA256 de mai jos).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descărcați fișierul `.AppImage` potrivit (`x64` sau `arm64`) din [Releases](https://github.com/wsj-br/transrewrt/releases).
- Rulați: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` pe x86_64/amd64, sau folosiți numele fișierului `...-arm64.AppImage` pe ARM64.
- Dependențe suplimentare (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consultați [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pentru mai multe informații.

<br/>

<a id="docker"></a>
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

<a id="configuring-the-timezone"></a>
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

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Obținerea unei chei API OpenRouter

Transrewrt suportă mai mulți furnizori de IA. [OpenRouter](https://openrouter.ai) este o alegere populară deoarece agregă multe modele sub o singură cheie și oferă modele gratuite.

1. Înregistrați-vă sau autentificați-vă la [openrouter.ai](https://openrouter.ai).
2. Accesați pagina [Keys](https://openrouter.ai/keys) și creați o cheie nouă (denumiți-o și, opțional, setați un limită de credit). Puteți folosi modele gratuite fără a adăuga credit.
3. **Desktop (Electron):** lipiți cheile în **Setări → API**. **Docker:** setați variabilele de mediu precum `OPENROUTER_API_KEY` (consultați [Quick start](#quick-start)).

Nu utilizați modelul **Body Builder** al OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pentru traducere, rescriere sau transformare: acesta returnează sarcini utile JSON, nu textul finalizat pentru aceste sarcini. Consultați [Setări → Modele](USER-GUIDE.ro.md#models) din Ghidul Utilizatorului.

Puteți utiliza și alți furnizori (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) sau rulați modele local cu [Ollama](https://ollama.com). Consultați [Configuration](#configuration-and-environment) pentru lista completă a furnizorilor suportați și variabilele de mediu.

> ⚠️ **ATENȚIE**<br/>
> Dacă utilizați Ollama de pe un alt dispozitiv, container sau serviciu, asigurați-vă că îl configurați pe Ollama să permită conexiuni externe (nu doar localhost).

Pentru limite, BYOK și alte informații, consultați [autentificarea OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configurare și mediu

**Locații fișier de configurare**

| Deploare         | Locație configurație                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (utilizați un volum pentru persistență) |

<br/>

**Variabile de mediu** (doar web/Docker; Electron folosește fișierul de configurare local)

| Variabilă         | Implicit                 | Descriere |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Portul pe care ascultă serverul |
| `CONFIG_PATH`    | `/app/data/config.json` | Calea către fișierul de configurare |
| `TZ`             | `Europe/London`         | Fusul orar IANA pentru timpul de pe server (jurnalizare etc.); interfața urmează totuși browserul. Consultați [Docker → fus orar](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(gol)*               | Cheia API OpenRouter |
| `OPENAI_API_KEY`     | *(gol)*               | Cheia API OpenAI |
| `CEREBRAS_API_KEY`   | *(gol)*               | Cheia API Cerebras |
| `ANTHROPIC_API_KEY`  | *(gol)*               | Cheia API Anthropic |
| `GOOGLE_API_KEY`     | *(gol)*               | Cheia API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(gol)*               | Cheia API DeepSeek |
| `GROQ_API_KEY`       | *(gol)*               | Cheia API Groq |
| `MISTRAL_API_KEY`    | *(gol)*               | Cheia API Mistral |
| `OLLAMA_URL`     | *(gol)*               | URL de bază Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(gol)*               | Cheia API xAI |

Configurați doar furnizorii pe care îi utilizați. ID-urile modelelor sunt spațiate (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Afișare cost:** OpenRouter returnează costul facturat exact atunci când este aplicabil. Alți furnizori utilizează costul **estimat** din prețurile publice ale modelelor OpenRouter atunci când este disponibilă o cheie OpenRouter; fără aceasta, costul non-OpenRouter poate apărea ca `0`. Estimările nu sunt facturi.

<br/>

**Date și persistență:** Pentru Docker, montați un volum la `/app/data` astfel încât `config.json` și baza de date SQLite să persiste între repornirile containerului. Fără un volum, toate datele se pierd când containerul se oprește.

**Dezvoltatori:** După ce preluați modificările care înlocuiesc vechea configurație cu o singură cheie, resetați sau combinați `data/config.json` cu noua formă implicită din `src/config-defaults/config_default.json`, dacă fișierul local încă utilizează câmpuri eliminate (`api_key`, `api_url`, opțiuni proxy).

<br/>

**Autentificare web:**

- Administrator implicit: `admin` / `transrewrt26`.
- Gestionarea utilizatorilor în **Setări → Utilizatori**.
- Resetarea parolei: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (din sursă: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATENȚIE**<br/>
> Schimbați imediat parola implicită de administrator pe orice gazdă accesibilă prin rețea.

<br/>

Setările principale (font, modele, limbi etc.) sunt disponibile în Setări aplicație.

<br/><br/>

<a id="development-and-architecture"></a>
## Dezvoltare și arhitectură

- **Dezvoltare:** Configurare, build, teste și deploare (Electron, Web, Docker) - consultați **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arhitectură și prezentare generală a sistemului:** Structura foldere, tehnologii utilizate, decizii de design - consultați **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Raportarea problemelor

Deschideți o problemă pe [GitHub](https://github.com/wsj-br/transrewrt/issues). Includeți platforma dvs. (Windows / Linux / Docker) și versiunea aplicației (afișată în dialogul Despre sau pe pagina Releases).

<br/><br/>

<a id="disclaimer"></a>
## Renunțare la răspundere

Numele produselor și pictogramele aparțin proprietarilor respectivi și sunt utilizate doar în scopuri de identificare. Acest software nu este afiliat cu și nu este susținut de niciunul dintre brandurile menționate.

<br/><br/>

<a id="license"></a>
## Licență

Drepturi de autor © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
