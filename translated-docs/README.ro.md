---
translated_at: "2026-03-29T01:55:46.669Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
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

Unelte textuale bazate pe IA: tradu între limbi, rescrie în stiluri diferite și transformă folosind cereri personalizate — utilizând mai mulți furnizori de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI și Ollama local). Rulează ca aplicație desktop (Electron) sau ca aplicație web auto-găzduită (Docker).

- **Traducere** — între zeci de limbi, cu detectare automată a limbii sursă
- **Rescriere** — corectarea gramaticii, îmbunătățirea clarității, stil formal/informal, scurtare, extindere, limbaj tehnic
- **Transformare** — prompturi personalizate de inteligență artificială; creați și gestionați prompturi, limbă țintă opțională pentru fiecare prompt
- **Istoric** — istoric complet al execuțiilor cu textele de intrare/ieșire, filtre și export
- **Modele și costuri** — alegerea modelelor din orice furnizor configurat; tablouri de bord pentru costuri și utilizare cu jurnale și rezumate pe model/operațiune/zi
- **Interfață** — interfață multilingvă (peste 30 de limbi, suport pentru text de la dreapta la stânga), fonturi etc.
- **Mod web** — suport pentru mai mulți utilizatori, cu roluri de administrator
- **Aplicație desktop** — aplicație Electron pentru Windows și Linux
- **Auto-găzduit** — imagine Docker pentru amd64 și arm64 (compatibil cu Raspberry Pi)

Odată instalat, consultați **[Ghidul utilizatorului](USER-GUIDE.ro.md)** pentru o prezentare completă a tuturor funcțiilor.

<small>**Citiți în alte limbi:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Notă privind traducerile interfeței și ale documentației:** Toate limbile interfeței, cu excepția celei engleze originale (UK),
> au fost traduse folosind modele de inteligență artificială; formularea poate fi imprecisă sau conține erori.

</small>

<br/>

<a id="screenshots"></a>

## Capturi de ecran

**Selector de limbă**

![Selector de limbă](../images/screenshots/ro/language-selector.png)

**Traducere**

![Traducere](../images/screenshots/ro/translate.png)

**Transformare - editor de prompturi**

![Transformare - editor de prompturi](../images/screenshots/ro/transform-prompt-edit.png)

**Tablou de bord**

![Tablou de bord – utilizare](../images/screenshots/ro/dashboard-summary.png)

**Istoric**

![Istoric](../images/screenshots/ro/history.png)

**Setări - selectarea modelului**

![Setări - selectarea modelului](../images/screenshots/ro/settings-models.png)

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
- [Declin de responsabilitate](#disclaimer)
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

Înlocuiți `sk-or-your-key` cu cheia dumneavoastră [OpenRouter API key](https://openrouter.ai/keys) (sau setați cheile altor furnizori; vezi [Configurare](#configuration-and-environment)). Deschideți [http://localhost:5000](http://localhost:5000) și schimbați parola implicită de administrator înainte de a expune serviciul.

<br/>

> ℹ️ **NOTĂ**<br/>
> În Docker, acreditările LLM sunt setate folosind variabile de mediu precum `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nu în interfața web). Pe desktop (Electron), configurați cheile în **Setări → API**.

<br/>

**Windows**

Descărcați cel mai recent `Transrewrt Setup x.y.z.exe` de la [Releases](https://github.com/wsj-br/transrewrt/releases), rulați instalatorul, apoi lansați aplicația din meniul Start sau de pe scurtătura de pe desktop. Introduceți cheile API în **Settings → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este comun pentru modele gratuite.

<br/>

**Linux**

Descărcați fișierul `.AppImage` potrivit pentru procesorul dumneavoastră de la [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` pentru calculatoarele obișnuite, `arm64` pentru multe dispozitive ARM, inclusiv Raspberry Pi 4+), apoi executați:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduceți cheile API în **Settings → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este comun pentru modele gratuite.

Pe Debian/Ubuntu s-ar putea să fie necesar să instalați mai întâi dependențe suplimentare:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Consultați [Installation → Linux](#linux-electron) pentru detalii.

<br/>

> ℹ️ **NOTĂ**<br/>

> macOS nu este în prezent suportat. Transrewrt este disponibil pentru Windows, Linux și Docker.

<br/>

Odată pornită aplicația, consultați **[Ghidul utilizatorului](USER-GUIDE.ro.md)** pentru a afla cum să traduceți, rescrieți și transformați textul, să gestionați prompt-urile și să configurați modelele.

<br/><br/>

<a id="installation"></a>

## Instalare

<a id="windows-electron"></a>

### Windows (Electron)

- Descărcați cel mai recent instalator de la [Rilăsări](https://github.com/wsj-br/transrewrt/releases).
- Rulați fișierul `.exe` și urmați pașii instalatorului.
- La prima rulare: porniți aplicația din meniul Start sau din scurtătura de pe desktop.

<br/>

> ℹ️ **NOTĂ**<br/>
> Windows poate afișa una dintre aceste avertizări de securitate (normal pentru aplicații nesemnate/independente):
>   - **Controlul contului de utilizator (UAC)**: „Doriți să permiteți acestui aplicație de la un editor necunoscut să efectueze modificări pe dispozitivul dvs.?” → Apăsați pe **Da**.
>   - **Microsoft Defender SmartScreen**: „Windows a protejat PC-ul dvs.” → Apăsați pe **Mai multe informații** → **Execută oricum**.
>
> Acest lucru se întâmplă deoarece aplicația nu este semnată de Microsoft sau de un editor major — este sigură dacă a fost descărcată din rilăsările oficiale de pe GitHub (verificați suma de control SHA256 de mai jos).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Descărcați fișierul `.AppImage` potrivit (`x64` sau `arm64`) de la [Versiuni](https://github.com/wsj-br/transrewrt/releases).
- Rulați: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` pe x86_64/amd64, sau folosiți numele fișierului `...-arm64.AppImage` pe ARM64.
- Dependențe suplimentare (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consultați [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pentru mai multe informații.

<br/>

<a id="docker"></a>

### Docker

- Descărcare: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Configurați cel puțin o cheie de furnizor prin variabila de mediu (de exemplu `OPENROUTER_API_KEY` pentru OpenRouter). Puteți transmite variabilele folosind `-e` sau `docker compose` / `.env` astfel încât secretele să nu fie incluse în imagine.
- **Nu** introduceți cheile furnizorului în interfața web; serverul le citește din mediul de execuție.

Exemplu – volum cu nume pentru persistență (cheia OpenRouter prin variabila de mediu):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

sau, dacă preferați să utilizați Docker Compose, folosiți:

```
# descărcați fișierul de compunere
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# editați fișierul pentru a adăuga API_KEYS și a ajusta fusul orar (TZ)
vi transrewrt.yml
# porniți containerul
docker compose -f transrewrt.yml up -d

Consultați [Configurare](#configuration-and-environment) pentru toate variabilele de mediu, precum `PORT`, `CONFIG_PATH`, `TZ` și cheile pentru LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Configurarea fusului orar

Data și ora din interfața aplicației urmează setările locale și fusul orar ale **browserului**. Pentru comportamentul de pe **partea serverului** (jurnale și activități similare), containerul utilizează variabila de mediu `TZ`. Valoarea implicită este `TZ=Europe/London`.

Pentru a utiliza un alt fus orar, setați `TZ` în fișierul dvs. Compose, de exemplu:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Sau transmiteți-o la rularea containerului (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Pe multe sisteme de operare Linux puteți copia numele fusului orar al sistemului folosind:

```bash
echo TZ=\"$(</etc/timezone)\"
```

O listă cu denumirile valide ale fusurilor orare este menținută în [baza de date tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obținerea unei chei API OpenRouter

Transrewrt susține mai mulți furnizori de inteligență artificială. [OpenRouter](https://openrouter.ai) este o alegere populară deoarece oferă acces la numeroase modele printr-o singură cheie și pune la dispoziție modele gratuite.

1. Înregistrează-te sau autentifică-te pe [openrouter.ai](https://openrouter.ai).
2. Accesează pagina [Keys](https://openrouter.ai/keys) și creează o cheie nouă (dă-i un nume și, opțional, stabilește o limită de credit). Poți folosi modele gratuite fără a adăuga credit.
3. **Aplicație desktop (Electron):** lipește cheile în **Setări → API**. **Docker:** configurează variabilele de mediu precum `OPENROUTER_API_KEY` (vezi [Pornire rapidă](#quick-start)).

Nu folosi modelul **Body Builder** al OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pentru traducere, rescriere sau transformare: acesta returnează corpuri de cereri JSON, nu textul finalizat pentru aceste sarcini. Vezi [Setări → Modele](USER-GUIDE.ro.md#models) din Ghidul utilizatorului.

De asemenea, puteți utiliza și alți furnizori (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) sau puteți rula modele local cu [Ollama](https://ollama.com). Consultați [Configurare](#configuration-and-environment) pentru lista completă a furnizorilor susținuți și a variabilelor de mediu.

> ⚠️ **ATENȚIE**<br/>
> Dacă utilizați Ollama de pe un alt dispozitiv, container sau serviciu, asigurați-vă că configurați Ollama să permită conexiuni externe (nu doar localhost).

Pentru detalii despre limite, BYOK și altele, consultați [autentificarea OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Configurare și mediu

**Locații fișiere de configurare**

| Implementare         | Locația configurației                                   |
| -------------------- | ------------------------------------------------------- |
| Electron (Windows)   | `%APPDATA%\transrewrt\`                                 |
| Electron (Linux)     | `~/.config/transrewrt/`                                 |
| Web / Docker         | `/app/data/config.json` (utilizați un volum pentru persistență) |

<br/>

**Variabile de mediu** (doar pentru web/Docker; Electron folosește fișierul local de configurare)

| Variabilă         | Implicit                 | Descriere |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Portul pe care ascultă serverul |
| `CONFIG_PATH`    | `/app/data/config.json` | Calea către fișierul de configurare |
| `TZ`             | `Europe/London`         | Fusul orar IANA pentru timpul de pe server (jurnalizare etc.); interfața utilizatorului urmează tot timpul browser-ului. Vezi [Docker → fus orar](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(gol)*               | Cheia API OpenRouter |
| `OPENAI_API_KEY`     | *(gol)*               | Cheia API OpenAI |
| `CEREBRAS_API_KEY`   | *(gol)*               | Cheia API Cerebras |
| `ANTHROPIC_API_KEY`  | *(gol)*               | Cheia API Anthropic |
| `GOOGLE_API_KEY`     | *(gol)*               | Cheia API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(gol)*               | Cheia API DeepSeek |
| `GROQ_API_KEY`       | *(gol)*               | Cheia API Groq |
| `MISTRAL_API_KEY`    | *(gol)*               | Cheia API Mistral |
| `OLLAMA_URL`     | *(gol)*               | URL-ul de bază pentru Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(gol)*               | Cheia API xAI |

Configurați doar furnizorii pe care îi utilizați. ID-urile modelelor sunt organizate în nume spațiale (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Afișarea costurilor:** OpenRouter returnează costul facturat exact atunci când este aplicabil. Alți furnizori utilizează costuri **estimative** din prețurile publice ale modelelor OpenRouter atunci când este disponibilă o cheie OpenRouter; în lipsa acesteia, costul furnizorilor non-OpenRouter poate apărea ca `0`. Estimările nu sunt facturi.

<br/>

**Date și persistență:** Pentru Docker, montați un volum în `/app/data` astfel încât `config.json` și baza de date SQLite să persiste după repornirea containerului. Fără volum, toate datele sunt pierdute când containerul se oprește.

**Dezvoltatori:** După actualizarea modificărilor care înlocuiesc vechea configurație cu cheie unică, resetați sau combinați fișierul `data/config.json` cu noua formă implicită din `src/config-defaults/config_default.json` dacă fișierul local încă folosește câmpuri eliminate (`api_key`, `api_url`, opțiuni proxy).

<br/>

**Autentificare web:**

- Administrator implicit: `admin` / `transrewrt26`.
- Gestionarea utilizatorilor în **Setări → Utilizatori**.

- Resetați o parolă: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (din sursă: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATENȚIE**<br/>
> Schimbați imediat parola implicită de administrator pe orice gazdă accesibilă din rețea.

<br/>

Setările principale (font, modele, limbile etc.) sunt disponibile în Setările aplicației.

<br/><br/>

<a id="development-and-architecture"></a>

## Dezvoltare și arhitectură

- **Dezvoltare:** Configurare, construcție, testare și implementare (Electron, Web, Docker) - consultați **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arhitectură și prezentare generală a sistemului:** Structura dosarelor, tehnologiile utilizate, decizii de design - consultați **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Raportarea problemelor

Deschideți o problemă pe [GitHub](https://github.com/wsj-br/transrewrt/issues). Includeți platforma dvs. (Windows / Linux / Docker) și versiunea aplicației (afișată în dialogul Despre sau pe pagina Releases).

<br/><br/>

<a id="disclaimer"></a>

## Declin de responsabilitate

Numele și iconurile produselor aparțin deținătorilor lor respectivi și sunt utilizate doar în scop de identificare. Acest software nu este afiliat cu sau susținut de niciuna dintre mărcile menționate.

<br/><br/>

<a id="license"></a>

## Licență

Copyright © 2026 Waldemar Scudeller Jr.

[Licența Apache 2.0](LICENSE)