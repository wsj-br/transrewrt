---
translated_at: "2026-03-26T00:55:21.195Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versiune"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licență: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platformă">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Instrument de text bazat pe IA: traducere între limbi, rescriere în stiluri diferite și transformare cu întrebări personalizate — folosind mai mulți furnizori de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI și Ollama local). Rulează ca aplicație desktop (Electron) sau aplicație web auto-găzduită (Docker).

- **Traducere** — între zeci de limbi, cu detectare automată a limbii sursă
- **Rescriere** — corectarea gramaticii, îmbunătățirea clarității, stil formal/informal, scurtare, extindere, stil tehnic
- **Transformare** — întrebări personalizate de IA; creați și gestionați întrebări, limbă țintă opțională pentru fiecare întrebare
- **Istoric** — istoric complet al execuțiilor, cu textul de intrare/ieșire, filtrare și export
- **Modele și costuri** — alegeți modele din orice furnizor configurat; tablouri de bord pentru costuri și utilizare cu jurnal, rezumate pe model/funcție/zi
- **Interfață** — interfață multilingvă (30+ limbi, suport RTL), fonturi, ...
- **Mod web** — suport pentru utilizatori multipli cu roluri de administrator
- **Desktop** — aplicație Electron pentru Windows și Linux
- **Auto-găzduit** — imagine Docker pentru amd64 și arm64 (compatibilă cu Raspberry Pi)

Odată instalat, consultați **[Ghidul utilizatorului](USER-GUIDE.ro.md)** pentru o prezentare cuprinzătoare a tuturor funcțiilor.

<small>**Traducere în alte limbi:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Notă privind traducerea interfeței și a documentației:** Toate limbile interfeței, cu excepția limbii engleze (UK), au fost traduse folosind modele de IA; formularea poate fi imprecisă sau conține erori.

</small>

<br/>

<a id="screenshots"></a>
## Capturi de ecran

**Selectorul de limbă**

![Selector de limbă](../images/screenshots/ro/language-selector.png)

**Traducere**

![Traducere](../images/screenshots/ro/translate.png)

**Transformare - editor de întrebări**

![Transformare - editor de întrebări](../images/screenshots/ro/transform-prompt-edit.png)

**Tablou de bord**

![Tablou de bord pentru costuri](../images/screenshots/ro/dashboard-summary.png)

**Istoric**

![Istoric](../images/screenshots/ro/history.png)

**Setări - selecția modelului**

![Setări - selecția modelului](../images/screenshots/ro/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Cuprins

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Pornire rapidă](#pornire-rapida)
- [Instalare](#instalare)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obținerea unei chei API OpenRouter](#obtinerea-unei-chei-api-openrouter)
- [Configurare și mediu](#configurare-si-mediu)
- [Dezvoltare și arhitectură](#dezvoltare-si-arhitectura)
- [Versiuni și etichete](#versiuni-si-etichete)
- [Contribuție](#contributie)
- [Declinare de răspundere](#declinare-de-raspundere)
- [Licență](#licenta)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Pornire rapidă

**Docker (recomandat pentru auto-găzduire)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Înlocuiți `sk-or-your-key` cu [cheia dvs. API OpenRouter](https://openrouter.ai/keys) (sau setați cheile altor furnizori; vezi [Configurare](#configurare-si-mediu)). Deschideți [http://localhost:5000](http://localhost:5000) și schimbați parola implicită de administrator înainte de a expune serviciul.

<br/>

> ℹ️ **NOTĂ**<br/>
> În Docker, acreditările LLM sunt setate prin variabile de mediu precum `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (nu în interfața web). Pe desktop (Electron) configurați cheile în **Setări → API**.

<br/>

**Windows**

Descărcați cel mai recent `Transrewrt Setup x.y.z.exe` din [Versiuni](https://github.com/wsj-br/transrewrt/releases), rulați instalatorul, apoi lansați aplicația din meniul Start sau de pe scurtătura de pe desktop. Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este frecvent utilizat pentru modele gratuite.

<br/>

**Linux**

Descărcați `.AppImage` pentru procesorul dvs. din [Versiuni](https://github.com/wsj-br/transrewrt/releases) (`x64` pentru PC-uri tipice, `arm64` pentru multe dispozitive ARM, inclusiv Raspberry Pi 4+), apoi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este frecvent utilizat pentru modele gratuite.

Pe Debian/Ubuntu poate fi necesar să instalați mai întâi dependențe suplimentare:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Consultați [Instalare → Linux](#linux-electron) pentru detalii.

<br/>

> ℹ️ **NOTĂ**<br/>
> macOS nu este momentan suportat. Transrewrt este disponibil pentru Windows, Linux și Docker.

<br/>

Odată ce aplicația rulează, consultați **[Ghidul utilizatorului](USER-GUIDE.ro.md)** pentru a învăța cum să traduceți, rescrieți și transformați textul, să gestionați prompt-urile și să configurați modelele.

<br/><br/>

<a id="installation"></a>
## Instalare

<a id="windows-electron"></a>
### Windows (Electron)

- Descărcați cel mai recent instalator din [Versiuni](https://github.com/wsj-br/transrewrt/releases).
- Rulați fișierul `.exe` și urmați instrucțiunile instalatorului.
- Prima execuție: lansați aplicația din meniul Start sau de pe scurtătura de pe desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descărcați fișierul `.AppImage` corespunzător (`x64` sau `arm64`) din [Versiuni](https://github.com/wsj-br/transrewrt/releases).
- Rulați: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` pe x86_64/amd64, sau utilizați numele fișierului `...-arm64.AppImage` pe ARM64.
- Dependențe suplimentare (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consultați [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pentru mai multe informații.

<br/>

<a id="docker"></a>
### Docker

- Descărcați imaginea: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Setați cel puțin o cheie de furnizor prin mediu (de exemplu, `OPENROUTER_KEY` pentru OpenRouter). Pasați variabilele folosind `-e` sau `docker compose` / `.env` pentru ca secretele să nu fie încorporate în imagine.
- Cheile furnizorilor **nu** se introduc în interfața web; serverul le citește din mediul de execuție.

Exemplu – volum denumit pentru persistență (cheia OpenRouter printr-un mediu):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opțiune   | Descriere                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (mapați cu `-p 5000:5000`)                                                                              |
| Volum    | Montați `/app/data` pentru persistența configurației și a bazei de date                                        |
| Variabile de mediu | `PORT`, `CONFIG_PATH`, plus cheile LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, ...) - consultați [Configurare](#configurare-si-mediu) |

Pentru a construi și rula din sursă: `docker compose up --build -d` sau `pnpm docker:up` - consultați [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obținerea unei chei API OpenRouter

Transrewrt suportă mai mulți furnizori de IA. [OpenRouter](https://openrouter.ai) este o alegere populară deoarece agregă multe modele sub o singură cheie și oferă modele gratuite.

1. Înregistrează-te sau autentifică-te pe [openrouter.ai](https://openrouter.ai).
2. Accesează pagina [Keys](https://openrouter.ai/keys) și creează o cheie nouă (denumește-o și, opțional, setează un limită de credit). Poți folosi modele gratuite fără a adăuga credit.
3. **Desktop (Electron):** lipește cheile în **Settings → API**. **Docker:** setează variabilele de mediu precum `OPENROUTER_KEY` (vezi [Quick start](#quick-start)).

Nu folosi modelul **Body Builder** al OpenRouter-ului ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pentru traducere, rescriere sau transformare: acesta returnează sarcini utile JSON, nu textul finalizat pentru aceste sarcini. Vezi [Settings → Models](USER-GUIDE.ro.md#models) din Ghidul utilizatorului.

De asemenea, poți utiliza și alți furnizori (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) sau rula modele local cu [Ollama](https://ollama.com). Consultă [Configuration](#configuration-and-environment) pentru lista completă a furnizorilor suportați și variabilelor de mediu.

> ⚠️ **AVERTIZARE**<br/>
> Dacă utilizezi Ollama de pe un alt dispozitiv, container sau serviciu, asigură-te că îl configurezi să permită conexiuni externe (nu doar localhost).

Pentru limite, BYOK și altele, consultă [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configurare și mediu

**Locații fișiere de configurare**

| Deploiere          | Locație configurare                             |
| ------------------ | ----------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Web / Docker       | `/app/data/config.json` (folosește un volum pentru persistență) |

<br/>

**Variabile de mediu** (doar web/Docker; Electron folosește fișierul local de configurare)

| Variabilă          | Implicit               | Descriere |
| ------------------ | ---------------------- | --------- |
| `PORT`             | `5000`                 | Portul pe care ascultă serverul |
| `CONFIG_PATH`      | `/app/data/config.json`| Calea către fișierul de configurare |
| `OPENROUTER_KEY`   | *(gol)*                | Cheia API OpenRouter |
| `OPENAI_KEY`       | *(gol)*                | Cheia API OpenAI |
| `CEREBRAS_KEY`     | *(gol)*                | Cheia API Cerebras |
| `ANTHROPIC_KEY`    | *(gol)*                | Cheia API Anthropic |
| `GOOGLE_KEY`       | *(gol)*                | Cheia API Google Gemini |
| `DEEPSEEK_KEY`     | *(gol)*                | Cheia API DeepSeek |
| `GROQ_KEY`         | *(gol)*                | Cheia API Groq |
| `MISTRAL_KEY`      | *(gol)*                | Cheia API Mistral |
| `OLLAMA_URL`       | *(gol)*                | URL-ul de bază Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(gol)*                | Cheia API xAI |

Configurează doar furnizorii pe care îi folosești. ID-urile modelelor sunt grupate în nume spațiate (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Afișare costuri:** OpenRouter returnează costul exact facturat dacă este aplicabil. Alți furnizori folosesc costuri **estimate** din prețurile publice ale modelelor OpenRouter, dacă este disponibilă o cheie OpenRouter; în lipsa acesteia, costurile non-OpenRouter pot apărea ca `0`. Estimările nu sunt facturi.

<br/>

**Date și persistență:** Pentru Docker, montați un volum la `/app/data` pentru ca fișierul `config.json` și baza de date SQLite să persiste între repornirile containerului. Fără un volum, toate datele se vor pierde când containerul se oprește.

**Dezvoltatori:** După extragerea de modificări care înlocuiesc vechea configurație cu o singură cheie, resetați sau îmbinați `data/config.json` cu noua formă implicită din `src/config-defaults/config_default.json`, dacă fișierul local încă folosește câmpuri eliminate (`api_key`, `api_url`, opțiuni proxy).

<br/>

**Autentificare web:**

- Administrator implicit: `admin` / `transrewrt26`.
- Gestionați utilizatorii în **Settings → Users**.
- Resetare parolă: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (din sursă: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **AVERTIZARE**<br/>
> Schimbați imediat parola implicită de administrator pe orice host accesibil din rețea.

<br/>

Setările principale (font, modele, limbi, etc.) sunt disponibile în setările aplicației.

<br/><br/>

<a id="development-and-architecture"></a>

## Dezvoltare și arhitectură

- **Dezvoltare:** Configurare, compilare, testare și distribuire (Electron, Web, Docker) - vezi **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Prezentare generală a arhitecturii și a sistemului:** Structura directoarelor, tehnologiile utilizate, deciziile de proiectare - vezi **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Lansări și etichete

- **Etichetele Git** `v`* (de exemplu, `v1.0.10`) declanșează [fluxul de lucru pentru lansare](.github/workflows/release.yml). **Lansările GitHub** atașează instalatorul pentru Windows (`.exe`) și fișierele Linux AppImage (**x64** și **arm64**).
- **Imaginile Docker** sunt publicate la `ghcr.io/wsj-br/transrewrt`. Etichetele imaginilor corespund versiunii Git (de exemplu, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) și, în plus, `latest`. Multi-arch: `linux/amd64` și `linux/arm64` (de exemplu, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribuție

1. Copiază repozitoriul.
2. Creează o ramură pentru funcționalitate: `git checkout -b feature/my-feature`
3. Comite modificările cu un mesaj clar.
4. Trimite schimbările și deschide o cerere de combinare (Pull Request) către `main`.

Urmărește stilul existent de cod și testează-ți modificările atât în modul Electron, cât și în cel web înainte de a le trimite. Consultă [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pentru instrucțiuni privind compilarea și testarea.

<br/>

**Raportarea problemelor:** Deschide o problemă pe [GitHub](https://github.com/wsj-br/transrewrt/issues). Include platforma ta (Windows / Linux / Docker) și versiunea aplicației (afișată în dialogul Despre sau pe pagina Lansări).

<br/><br/>

<a id="disclaimer"></a>
## Declinarea răspunderii

Numele și iconurile produselor aparțin proprietarilor lor respectivi și sunt utilizate exclusiv în scop de identificare. Acest software nu este afiliat cu niciuna dintre mărcile menționate și nu este susținut de acestea.

<br/><br/>

<a id="license"></a>
## Licență

Drepturi de autor © 2026 Waldemar Scudeller Jr.

[Licența Apache 2.0](LICENSE)