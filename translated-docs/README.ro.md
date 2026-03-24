---
translated_at: "2026-03-24T02:49:40.200Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Versiune"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licență: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platformă">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Unelte textuale avansate cu AI: traducere între limbile lumii, rescriere în diferite stiluri și transformări prin prompturi personalizate — folosind mai mulți furnizori de AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI și Ollama local). Rulează ca aplicație desktop (Electron) sau aplicație web auto-găzduită (Docker).

- **Traducere** — între zeci de limbi, cu detectare automată a limbii sursă
- **Rescriere** — corecție gramaticală, claritate, stil formal/informal, prescurtare, extindere, stil tehnic
- **Transformare** — prompturi AI personalizate; creați și gestionați prompturi, limbă țintă opțională per prompt
- **Istoric** — istoric complet de execuție cu textul de intrare/ieșire, filtrare și export
- **Modele și costuri** — alegeți modele din orice furnizor configurat; panou de control al costurilor cu jurnal SQLite, rezumate pe model/operațiune/zi
- **Interfață** — interfață multilingvă (30+ limbi, suport pentru RTL), fonturi, ...
- **Mod web** — suport multi-utilizator cu roluri de administrator; cheile API rămân pe server, niciodată expuse în browser
- **Desktop** — aplicație Electron pentru Windows și Linux
- **Auto-găzduit** — imagine Docker pentru amd64 și arm64 (compatibil Raspberry Pi)

Odată instalat, consultați **[Ghidul Utilizatorului](USER-GUIDE.ro.md)** pentru o prezentare completă a tuturor funcțiilor.

<small>**Traduceri disponibile:** [English (UK)](README.ro.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**Notă privind traducerile interfeței și documentației:** Toate limbile de interfață, cu excepția englezei (UK), au fost traduse automat cu modele de inteligență artificială; redactarea poate fi imprecisă sau conține erori.



<a id="screenshots"></a>
## Capturi de ecran

**Selector de limbă**

![Selector de limbă](../images/screenshots/ro/language-selector.png)

**Traducere**

![Traducere](../images/screenshots/ro/translate.png)

**Transformare – editor de prompturi**

![Transformare – editor de prompturi](../images/screenshots/ro/transform-prompt-edit.png)

**Panou de control**

![Panou de costuri](../images/screenshots/ro/dashboard-summary.png)

**Istoric**

![Istoric](../images/screenshots/ro/history.png)

**Setări – selecție model**

![Setări – selecție model](../images/screenshots/ro/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Cuprins

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Pornire rapidă](#pornire-rapidă)
- [Instalare](#instalare)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obținerea unei chei API OpenRouter](#obținerea-unei-chei-api-openrouter)
- [Configurare și mediu](#configurare-și-mediu)
- [Dezvoltare și arhitectură](#dezvoltare-și-arhitectură)
- [Versiuni și etichete](#versiuni-și-etichete)
- [Contribuție](#contribuție)
- [Declin de răspundere](#declin-de-răspundere)
- [Licență](#licență)

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

Înlocuiți `sk-or-your-key` cu [cheia dvs. API OpenRouter](https://openrouter.ai/keys) (sau setați cheile altor furnizori; vedeți [Configurare](#configurare-și-mediu)). Deschideți [http://localhost:5000](http://localhost:5000) și modificați parola implicită de administrator înainte de a expune serviciul.

<br/>

> ℹ️ **NOTĂ**<br/>
> În Docker, acreditările LLM sunt setate prin variabile de mediu precum `OPENROUTER_KEY`, `OPENAI_KEY`, ... (nu în interfața web). Pe desktop (Electron), configurați cheile în **Setări → API**.

<br/>

**Windows**

Descărcați cel mai recent fișier `Transrewrt Setup x.y.z.exe` de la [Versiuni](https://github.com/wsj-br/transrewrt/releases), rulați instalatorul, apoi lansați aplicația din meniul Start sau de pe scurtătura de pe desktop. Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este frecvent utilizat pentru modele gratuite.

<br/>

**Linux**

Descărcați fișierul `.AppImage` de la [Versiuni](https://github.com/wsj-br/transrewrt/releases), apoi:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este frecvent utilizat pentru modele gratuite.

Pe Debian/Ubuntu poate fi necesar să instalați mai întâi dependențe suplimentare:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Detalii în [Instalare → Linux](#linux-electron).

<br/>

> ℹ️ **NOTĂ**<br/>
> macOS nu este suportat în prezent. Transrewrt este disponibil pentru Windows, Linux și Docker.

<br/>

Odată ce aplicația rulează, consultați **[Ghidul utilizatorului](USER-GUIDE.ro.md)** pentru a învăța cum să traduceți, rescrieți și transformați textul, să gestionați prompt-urile și să configurați modelele.

<br/><br/>

<a id="installation"></a>
## Instalare

<a id="windows-electron"></a>
### Windows (Electron)

- Descărcați cel mai recent instalator de la [Versiuni](https://github.com/wsj-br/transrewrt/releases).
- Rulați fișierul `.exe` și urmați instrucțiunile instalatorului.
- La prima rulare: porniți aplicația din meniul Start sau de pe scurtătura de pe desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descărcați fișierul `.AppImage` de la [Versiuni](https://github.com/wsj-br/transrewrt/releases).
- Rulați: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Dependențe suplimentare (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consultați [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pentru mai multe informații.

<br/>

<a id="docker"></a>
### Docker

- Descărcați imaginea: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Setați cel puțin o cheie de furnizor prin variabile de mediu (de exemplu `OPENROUTER_KEY` pentru OpenRouter). Transmiteți variabilele cu `-e` sau prin `docker compose` / `.env`, astfel încât secretele să nu fie incluse în imagine.
- Cheile furnizorilor **nu** se introduc în interfața web; serverul le citește din mediul de execuție.

Exemplu - volum cu nume pentru persistență (cheia OpenRouter prin variabilă de mediu):

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
| Volum    | Montați `/app/data` pentru persistența configurației și bazei de date                                         |
| Variabile de mediu | `PORT`, `CONFIG_PATH`, plus cheile LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - vedeți [Configurare](#configurare-și-mediu) |

Pentru a construi și rula din sursă: `docker compose up --build -d` sau `pnpm docker:up` - vedeți [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obținerea unei chei API OpenRouter

Transrewrt suportă mai mulți furnizori de AI. [OpenRouter](https://openrouter.ai) este o alegere populară deoarece adună multe modele sub o singură cheie și oferă modele gratuite.

1. Înregistrați-vă sau autentificați-vă la [openrouter.ai](https://openrouter.ai).
2. Accesați pagina [Keys](https://openrouter.ai/keys) și creați o cheie nouă (numiți-o, și opțional setați un limită de credit). Puteți utiliza modele gratuite fără a adăuga credit.
3. **Desktop (Electron):** inserați cheile în **Settings → API**. **Docker:** setați variabilele de mediu precum `OPENROUTER_KEY` (vezi [Quick start](#quick-start)).

De asemenea, puteți folosi alți furnizori (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) sau rulați modele local cu [Ollama](https://ollama.com). Consultați [Configuration](#configuration-and-environment) pentru lista completă a furnizorilor susținuți și variabilelor de mediu.

Pentru limite, BYOK și alte informații, accesați [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configurație și mediu

**Locații fișiere configurație**

| Tip instalare       | Locație configurație                             |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (folosiți un volum pentru persistență) |

<br/>

**Variabile de mediu** (doar web/Docker; Electron folosește fișierul de config local)

| Variabilă          | Implicit               | Descriere |
| ------------------ | ---------------------- | --------- |
| `PORT`             | `5000`                 | Portul pe care ascultă serverul |
| `CONFIG_PATH`      | `/app/data/config.json`| Calea către fișierul de configurație |
| `OPENROUTER_KEY`   | *(gol)*                | Cheia API OpenRouter |
| `OPENAI_KEY`       | *(gol)*                | Cheia API OpenAI |
| `ANTHROPIC_KEY`    | *(gol)*                | Cheia API Anthropic |
| `GOOGLE_KEY`       | *(gol)*                | Cheia API Google Gemini |
| `DEEPSEEK_KEY`     | *(gol)*                | Cheia API DeepSeek |
| `GROQ_KEY`         | *(gol)*                | Cheia API Groq |
| `MISTRAL_KEY`      | *(gol)*                | Cheia API Mistral |
| `OLLAMA_URL`       | *(gol)*                | URL-ul de bază pentru Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(gol)*                | Cheia API xAI |

Configurați doar furnizorii pe care îi folosiți. ID-urile modelelor sunt grupate în namespace uri (`openrouter/…`, `openai/…`, `ollama/…`, etc.).

**Afișarea costurilor:** OpenRouter returnează costul exact facturat, dacă este cazul. Alți furnizori utilizează costuri **estimative** pe baza prețurilor publice ale modelelor OpenRouter, atunci când este disponibilă o cheie OpenRouter; în lipsa acesteia, costurile non-OpenRouter pot apărea ca `0`. Estimările nu sunt facturi.

<br/>

**Date și persistență:** Pentru Docker, montați un volum la `/app/data`, astfel încât `config.json` și baza de date SQLite să persiste după repornirea containerului. Fără un volum, toate datele se pierd la oprirea containerului.

**Dezvoltatori:** După preluarea modificărilor care înlocuiesc vechea configurație monofilară cu cheie unică, reinițializați sau combinați `data/config.json` cu noul format implicit din `src/config-defaults/config_default.json`, dacă fișierul local încă folosește câmpuri eliminate (`api_key`, `api_url`, opțiuni proxy).

<br/>

**Autentificare web:**

- Administrator implicit: `admin` / `transrewrt26`.
- Gestionarea utilizatorilor în **Settings → Users**.
- Resetarea parolei: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (din sursă: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATENȚIE**<br/>
> Schimbați imediat parola implicită a administratorului pentru orice gazdă la care se poate accesa printr-o rețea.

<br/>

Setările principale (font, modele, limbi, etc.) sunt disponibile în setările aplicației.

<br/><br/>

<a id="development-and-architecture"></a>
## Dezvoltare și arhitectură

- **Dezvoltare:** Configurare, construcție, testare și deploare (Electron, Web, Docker) - vezi **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arhitectură și prezentare generală a sistemului:** Structură directoare, tehnologii folosite, decizii de proiectare - vezi **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Lansări și etichete

- **Etichetele Git** `v`* (de exemplu `v1.0.10`) declanșează [fluxul de lucru de lansare](.github/workflows/release.yml). **Lansările GitHub** includ instalatorul pentru Windows (`.exe`) și fișierul AppImage pentru Linux.
- **Imaginile Docker** sunt publicate pe `ghcr.io/wsj-br/transrewrt`. Etichetele imaginilor corespund versiunii Git (de exemplu `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), plus eticheta `latest`. Arhitecturi multiple: `linux/amd64` și `linux/arm64` (de exemplu Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribuție

1. Derivează (fork) depozitul.
2. Creează o ramură pentru funcționalitate: `git checkout -b feature/my-feature`
3. Comite modificările cu un mesaj clar.
4. Transmite (push) și deschide o cerere de îmbinare (Pull Request) către `main`.

Te rugăm să urmezi stilul existent de codificare și să testezi modificările atât în modul Electron, cât și în cel web înainte de trimitere. Vezi [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pentru instrucțiuni de construire și testare.

<br/>

**Raportarea problemelor:** Deschide o problemă pe [GitHub](https://github.com/wsj-br/transrewrt/issues). Include platforma ta (Windows / Linux / Docker) și versiunea aplicației (afișată în fereastra Despre sau pe pagina Lansări).

<br/><br/>

<a id="disclaimer"></a>
## Declin de răspundere

Numele și pictogramele produselor aparțin deținătorilor lor respectivi și sunt utilizate doar în scop de identificare. Acest software nu este afiliat cu niciunul dintre brandurile menționate și nu este susținut de acestea.

<br/><br/>

<a id="license"></a>
## Licență

Copyright © 2026 Waldemar Scudeller Jr.

[Licența Apache 2.0](LICENSE)