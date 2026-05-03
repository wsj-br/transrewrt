---
translation_last_updated: '2026-05-03T19:25:42.078Z'
source_file_mtime: '2026-05-03T19:23:10.979Z'
source_file_hash: 4cdedbca026824e05d992b1cfb80ca557b1abc530ee66d940b19a35ce0ba9dc3
translation_language: ro
source_file_path: README.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.2.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Instrument text AI: traduce între limbi, rescrie în stiluri diferite și transformă cu prompturi personalizate – utilizând mai mulți furnizori de AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI și Ollama local). Rulează ca aplicație desktop (Electron) sau aplicație web auto-găzduită (Docker).

- **Traducere** - între zeci de limbi, cu detectare automată a sursei
- **Rescriere** - corectarea gramaticii, îmbunătățirea clarității, stil formal/informal, scurtare, extindere, conținut tehnic
- **Transformare** - prompturi personalizate AI; creare și gestionare prompturi, limbă destinație opțională pentru fiecare prompt
- **Istoric** - istoric complet al execuțiilor cu text de intrare/ieșire, filtrare și export
- **Modele și costuri** - alegeți modele din orice furnizor configurat; tablouri de bord pentru costuri și utilizare cu jurnale, rezumate pe model/operațiune/zi
- **Interfață utilizator (UI)** - interfață multilingvă (peste 30 de limbi, suport RTL), fonturi, ...
- **Mod web** - suport pentru mai mulți utilizatori cu roluri de administrator
- **Aplicație desktop** - aplicație Electron pentru Windows și Linux
- **Auto-găzduit** - imagine Docker pentru amd64 și arm64 (compatibil cu Raspberry Pi)

Odată instalat, consultați [**Ghidul utilizatorului**](USER-GUIDE.ro.md) pentru o prezentare completă a tuturor funcțiilor.

<small>**Citește în alte limbi:** </small>
<small id="lang-list">[English (GB)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **Notă privind traducerile interfeței și documentației:** Toate limbile de interfață, cu excepția limbii engleze originale (UK),
> au fost traduse folosind modele AI; formularea poate fi imprecisă sau conține erori.

</small>

<br/>

<a id="table-of-contents"></a>
## Cuprins

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Capturi de ecran](#screenshots)
- [Pornire rapidă](#quick-start)
- [Obținerea unei chei API OpenRouter](#getting-an-openrouter-api-key)
- [Configurare și mediu](#configuration-and-environment)
- [Dezvoltare și arhitectură](#development-and-architecture)
- [Raportarea problemelor](#reporting-issues)
- [Declin de răspundere](#disclaimer)
- [Licență](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Capturi de ecran

**Selector de limbă**

![Language selector](../images/screenshots/ro/language-selector.png)

**Traduce**

![Translate](../images/screenshots/ro/translate.png)

**Transformare - editor de prompturi**

![Transform - prompt editor](../images/screenshots/ro/transform-prompt-edit.png)

**Panou de control**

![Dashboard summary - usage](../images/screenshots/ro/dashboard-summary.png)

**Istoric**

![History](../images/screenshots/ro/history.png)

**Setări - selecție model**

![Settings - model selection](../images/screenshots/ro/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## Pornire rapidă

<details>
<summary><b>Docker (recomandat pentru auto-găzduire)</b></summary>

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

Înlocuiți `sk-or-your-key` cu [cheia dvs. API OpenRouter](https://openrouter.ai/keys) (sau setați chei pentru alți furnizori; consultați [Configurare](#configuration-and-environment)). Deschideți [http://localhost:5000](http://localhost:5000) și schimbați parola implicită de administrator înainte de a expune serviciul.

Setați cel puțin o cheie de furnizor prin variabile de mediu (de exemplu `OPENROUTER_API_KEY` pentru OpenRouter). Transmiteți variabilele cu `-e` sau `docker compose` / `.env` astfel încât secretele să nu fie încorporate în imagine. Cheile furnizorului **nu sunt** introduse în interfața web; serverul le citește din mediul de execuție.

<br/>

> ℹ️ **NOTĂ**<br/>
> În Docker, acreditările LLM sunt setate cu variabile de mediu precum `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nu în interfața web). Pe desktop (Electron), configurați cheile în **Setări → API**.

<br/>

Sau utilizați Docker Compose:

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Consultați [Configurare](#configuration-and-environment) pentru toate variabilele de mediu, cum ar fi `PORT`, `CONFIG_PATH`, `TZ`, și cheile LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Fusul orar al serverului (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

Data și ora din interfața aplicației urmează **setările regionale și fusul orar ale browserului**. Pentru comportamentul **la nivel de server** (jurnalizare și similar), containerul utilizează variabila de mediu `TZ`. Valoarea implicită este `TZ=Europe/London`.

Pentru a utiliza un alt fus orar, setați `TZ` în fișierul dvs. Compose, de exemplu:

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

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Descărcați ultima versiune `Transrewrt Setup x.y.z.exe` de la [Releases](https://github.com/wsj-br/transrewrt/releases).
- Rulați fișierul `.exe` și urmați instrucțiunile instalatorului.
- La prima rulare: porniți aplicația din meniul Start sau din scurtătura de pe desktop.
- Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este frecvent utilizat pentru modele gratuite.

<br/>

> ℹ️ **NOTĂ**<br/>
> Windows poate afișa una dintre aceste avertizări de securitate (normal pentru aplicații nesemnate/independente):
>   - **Controlul contului de utilizator (UAC)**: „Doriți să permiteți acestui aplicații de la un editor necunoscut să facă modificări pe dispozitivul dvs.?" → Faceți clic pe **Da**.
>   - **Microsoft Defender SmartScreen**: „Windows v-a protejat PC-ul" → Faceți clic pe **Mai multe informații** → **Execută oricum**.
>
> Acest lucru se întâmplă deoarece aplicația nu este semnată de Microsoft sau de un editor major — este sigură dacă a fost descărcată din lansările noastre oficiale de pe GitHub (verificați sumele de control pe pagina [Releases](https://github.com/wsj-br/transrewrt/releases) alături de fiecare fișier).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Descărcați `.AppImage` pentru procesorul dumneavoastră de la [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` pentru PC-uri obișnuite, `arm64` pentru multe dispozitive ARM, inclusiv Raspberry Pi 4+), apoi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Pe x86_64/amd64 folosiți numele fișierului `x64`; pe ARM64 folosiți numele `...-arm64.AppImage`.

Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este frecvent utilizat pentru modele gratuite.

**Mesaje în consolă:** Versiunile empaachetate pentru Linux (`x64` și `arm64` AppImages) suprimă avertismentele de deprecieri Node în terminal (de exemplu, modulul încorporat `punycode`). Dacă Chromium afișează erori GPU / EGL precum „GLES3 este nesuportat”, dar aplicația funcționează, le puteți dezactiva prin oprirea accelerării hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Aceasta se aplică și pe amd64; modificați numele fișierului să corespundă descărcării dumneavoastră.

Pe Debian/Ubuntu, s-ar putea să aveți nevoie de biblioteci suplimentare de **rulare** necesare de Chromium (acestea sunt adesea deja prezente în instalațiile complete de desktop). Rulați comenzile de mai jos dacă este necesar:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

înlocuiți `libasound2t64` cu `libasound2` pentru `arm64`. Instalările minime sau personalizate ar putea totuși eșua cu un fișier `.so` lipsă. Instalați pachetul indicat în mesajul de eroare (elemente suplimentare comune: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). În unele medii, s-ar putea să trebuiască să rulați aplicația folosind `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **NOTĂ**<br/>
> macOS nu este în prezent suportat. Transrewrt este disponibil pentru Windows, Linux și Docker.

</details>

<br/>

Odată ce aplicația rulează, consultați [**Ghidul utilizatorului**](USER-GUIDE.ro.md) pentru a învăța cum să traduceți, rescrieți și transformați textul, să gestionați prompturile și să configurați modelele.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Obținerea unei chei API OpenRouter

Transrewrt susține mai mulți furnizori de IA. [OpenRouter](https://openrouter.ai) este o alegere populară deoarece agregă multe modele sub o singură cheie și oferă modele gratuite.

1. Înregistrați-vă sau autentificați-vă la [openrouter.ai](https://openrouter.ai).
2. Accesați pagina [Keys](https://openrouter.ai/keys) și creați o cheie nouă (dați-i un nume și, opțional, setați un limită de credit). Puteți utiliza modele gratuite fără a adăuga credit.
3. **Desktop (Electron):** lipiți cheile în **Setări → API**. **Docker:** setați variabilele de mediu precum `OPENROUTER_API_KEY` (consultați [Pornire rapidă](#quick-start)).

Nu folosiți modelul **Body Builder** al OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pentru traducere, rescriere sau transformare: acesta returnează sarcini JSON, nu textul finalizat pentru aceste sarcini. Consultați [Setări → Modele](USER-GUIDE.ro.md#models) din Ghidul utilizatorului.

Puteți utiliza și alți furnizori (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) sau rula modele local cu [Ollama](https://ollama.com). Consultați [Configurare](#configuration-and-environment) pentru lista completă a furnizorilor susținuți și variabilelor de mediu.

</br>

> ⚠️ **ATENȚIE**<br/>
> Dacă utilizați Ollama de la un alt dispozitiv, container sau serviciu, rețineți să configurați Ollama să permită conexiuni externe (nu doar localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configurare și mediu

</br>

**Locații fișiere de configurare**

| Deploare         | Locație configurație                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (folosiți un volum pentru persistență) |

<br/>

**Variabile de mediu** (doar web/Docker; Electron folosește fișierul de configurare local)

| Variabilă             | Descriere                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Portul pe care ascultă serverul (implicit `5000`)                                  |
| `CONFIG_PATH`        | Calea către fișierul de configurare (implicit `/app/data/config.json`)                |
| `TZ`                 | fus orar pentru timpul de pe server (jurnalizare etc.) (implicit `Europe/London`) |
| `HISTORY_DISABLED`   | Activează dezactivarea istoricului execuției (opțional, implicit `false`)                  |
| `OPENROUTER_API_KEY` | Cheie API OpenRouter                                                           |
| `OPENAI_API_KEY`     | Cheie API OpenAI                                                               |
| `CEREBRAS_API_KEY`   | Cheie API Cerebras                                                             |
| `ANTHROPIC_API_KEY`  | Cheie API Anthropic                                                            |
| `GOOGLE_API_KEY`     | Cheie API Google Gemini                                                        |
| `DEEPSEEK_API_KEY`   | Cheie API DeepSeek                                                             |
| `GROQ_API_KEY`       | Cheie API Groq                                                                 |
| `MISTRAL_API_KEY`    | Cheie API Mistral                                                              |
| `OLLAMA_URL`         | URL de bază Ollama (ex: `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | Cheie API xAI                                                                  |

**Modul de confidențialitate:** Pentru a forța dezactivarea urmăririi istoricului indiferent de `config.json` sau de preferințele pe utilizator, setați `HISTORY_DISABLED` la `true` sau `1` (fără distincție între majuscule și minuscule) pentru **procesul server web/Docker** și/sau **procesul principal desktop Electron** (de exemplu, mediul sistemului sau al lansatorului — nu doar renderer-ul). Aceasta dezactivează stocarea istoricului intrare/ieșire, blochează **Setări → Setări generale → Istoric** și blochează API-urile legate de Istoric.

Configurați doar furnizorii pe care îi utilizați. ID-urile modelelor sunt separate prin namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Afișare cost:** OpenRouter returnează costul exact facturat atunci când este aplicabil. Alți furnizori folosesc costul **estimat** din prețurile publice ale modelelor OpenRouter atunci când este disponibilă o cheie OpenRouter; fără aceasta, costul non-OpenRouter poate apărea ca `0`. Estimările nu sunt facturi.

<br/>

**Date și persistență:** Pentru Docker, montați un volum la `/app/data` astfel încât `config.json` și baza de date SQLite să persiste la repornirile containerului. Fără un volum, toate datele se pierd când containerul se oprește.

<br/>

**Autentificare web:**

- Administrator implicit: `admin` / `transrewrt26`.
- Gestionarea utilizatorilor în **Setări → Utilizatori**.
- Resetare parolă: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **ATENȚIE**<br/>
> Schimbați imediat parola implicită a administratorului pe orice host accesibil din rețea.

<br/>

Setările principale (font, modele, limbi etc.) sunt disponibile în Setări aplicației.

<br/><br/>

<a id="development-and-architecture"></a>
## Dezvoltare și arhitectură

- **Dezvoltare:** Configurare, build, testare și deploy (Electron, Web, Docker) - consultați [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).
- **Arhitectură și prezentare generală a sistemului:** Structura directoarelor, tehnologiile utilizate, decizii de proiectare - consultați [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md).

<br/><br/>

<a id="reporting-issues"></a>
## Raportarea problemelor

Deschideți o problemă pe [GitHub](https://github.com/wsj-br/transrewrt/issues). Includeți platforma (Windows / Linux / Docker) și versiunea aplicației (afișată în dialogul Despre sau pe pagina Releases).

<br/><br/>

<a id="disclaimer"></a>
## Declinare de răspundere

Numele produselor și pictogramele aparțin proprietarilor respectivi și sunt utilizate doar în scopuri de identificare. Acest software nu este afiliat cu și nu este susținut de niciunul dintre brandurile menționate.

<br/><br/>

<a id="license"></a>
## Licență

Drepturi de autor © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
