---
translated_at: "2026-03-27T23:13:30.042Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

Instrument de text bazat pe IA: traduce între limbi, rescrie în stiluri diferite și transformă utilizând instrucțiuni personalizate — cu ajutorul mai multor furnizori AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI și Ollama local). Rulează ca aplicație desktop (Electron) sau aplicație web auto-găzduită (Docker).

- **Traducere** — între zeci de limbi, cu detectare automată a limbii sursă
- **Rescriere** — corectare gramaticală, îmbunătățire a clarității, stil formal/informal, scurtare, extindere, limbaj tehnic
- **Transformare** — instrucțiuni personalizate de IA; creează și gestionează instrucțiuni, limbă țintă opțională per instrucțiune
- **Istoric** — istoric complet al execuțiilor cu textele de intrare/ieșire, filtrare și export
- **Modele și costuri** — alege modele de la orice furnizor configurat; tablouri de bord pentru costuri și utilizare cu jurnal, rezumate pe model/ operațiune/zi
- **Interfață** — interfață multilingvă (peste 30 de limbi, suport RTL), fonturi, ...
- **Mod web** — suport pentru mai mulți utilizatori cu roluri administrative
- **Desktop** — aplicație Electron pentru Windows și Linux
- **Auto-găzduit** — imagine Docker pentru amd64 și arm64 (gata pentru Raspberry Pi)

Odată instalat, consultați **[Ghidul utilizatorului](USER-GUIDE.ro.md)** pentru o prezentare completă a tuturor funcțiilor.

<small>**Citiți în alte limbi:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Notă privind traducerile interfeței și documentației:** Toate limbile interfeței, cu excepția limbii engleze (UK) originale,
> au fost traduse utilizând modele de inteligență artificială; exprimarea poate fi imprecisă sau poate conține erori.

</small>

<br/>

<a id="screenshots"></a>

## Capturi ecran

**Selectorul de limbă**

![Selectorul de limbă](../images/screenshots/ro/language-selector.png)

**Traducere**

![Traducere](../images/screenshots/ro/translate.png)

**Transformare – editor de prompt**

![Transformare – editor de prompt](../images/screenshots/ro/transform-prompt-edit.png)

**Panoul de control**

![Panou de control](../images/screenshots/ro/dashboard-summary.png)

**Istoric**

![Istoric](../images/screenshots/ro/history.png)

**Setări – selectarea modelului**

![Setări – selectarea modelului](../images/screenshots/ro/settings-models.png)

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
- [Obținerea unei chei API OpenRouter](#getting-an-openrouter-api-key)
- [Configurare și mediu](#configuration-and-environment)
- [Dezvoltare și arhitectură](#development-and-architecture)
- [Versiuni și etichete](#releases-and-tags)
- [Contribuție](#contributing)
- [Declin de răspundere](#disclaimer)
- [Licență](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Pornire rapidă

**Docker (recomandat pentru auto-gazduire)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Înlocuiți `sk-or-your-key` cu cheia dumneavoastră [OpenRouter API](https://openrouter.ai/keys) (sau setați cheile altor furnizori; vezi [Configurare](#configuration-and-environment)). Deschideți [http://localhost:5000](http://localhost:5000) și schimbați parola implicită de administrator înainte de a expune serviciul.

<br/>

> ℹ️ **NOTĂ**<br/>
> În Docker, acreditările LLM sunt setate prin variabile de mediu precum `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nu în interfața web). Pe desktop (Electron), configurați cheile în **Setări → API**.

<br/>

**Windows**

Descărcați cel mai recent fișier `Transrewrt Setup x.y.z.exe` din [Versiuni](https://github.com/wsj-br/transrewrt/releases), rulați instalatorul, apoi lansați aplicația din meniul Start sau prin scurtătura de pe desktop. Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este frecvent utilizat pentru modelele gratuite.

<br/>

**Linux**

Descărcați fișierul `.AppImage` corespunzător procesorului dumneavoastră din [Versiuni](https://github.com/wsj-br/transrewrt/releases) (`x64` pentru calculatoare obișnuite, `arm64` pentru multe dispozitive ARM, inclusiv Raspberry Pi 4+), apoi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este frecvent utilizat pentru modelele gratuite.

Pe Debian/Ubuntu s-ar putea să trebuiască să instalați mai întâi dependențe suplimentare:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Consultați [Instalare → Linux](#linux-electron) pentru detalii.

<br/>

> ℹ️ **NOTĂ**<br/>
> macOS nu este în prezent suportat. Transrewrt este disponibil pentru Windows, Linux și Docker.

<br/>

Odată ce aplicația este lansată, consultați **[Ghidul utilizatorului](USER-GUIDE.ro.md)** pentru a afla cum să traduceți, rescrieți și transformați text, să gestionați prompturile și să configurați modelele.

<br/><br/>

<a id="installation"></a>

## Instalare

<a id="windows-electron"></a>
### Windows (Electron)

- Descărcați cel mai recent instalator de la [Releases](https://github.com/wsj-br/transrewrt/releases).
- Rulați fișierul `.exe` și urmați pașii instalerului.
- La prima utilizare: porniți aplicația din meniul Start sau de pe scurtătura de pe desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descărcați fișierul `.AppImage` potrivit (`x64` sau `arm64`) de la [Releases](https://github.com/wsj-br/transrewrt/releases).
- Rulare: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` pe x86_64/amd64, sau folosiți numele fișierului `...-arm64.AppImage` pe ARM64.
- Dependențe suplimentare (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consultați [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pentru mai multe informații.

<br/>

<a id="docker"></a>
### Docker

- Descărcare imagine: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Setați cel puțin o cheie de furnizor prin mediu (de exemplu `OPENROUTER_API_KEY` pentru OpenRouter). Pasați variabilele cu `-e` sau prin `docker compose` / `.env`, astfel încât secretele să nu fie incluse în imagine.
- Cheile de furnizor **nu** se introduc în interfața web; serverul le citește din mediul de execuție.

Exemplu – volum denumit pentru persistență (cheia OpenRouter prin variabilă de mediu):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

sau, dacă preferați să utilizați Docker Compose, utilizați:

# descărcați fișierul compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# editați fișierul pentru a adăuga API_KEYS
vi transrewrt.yml
# porniți containerul
docker compose -f transrewrt.yml up -d
```

<br/>

| Opțiune   | Descriere                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (mapați cu `-p 5000:5000`)                                                                                                       |
| Volum    | Montați `/app/data` pentru persistența configurației și a bazei de date                                                                                  |
| Variabile de mediu | `PORT`, `CONFIG_PATH`, plus cheile LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - vezi [Configurare](#configuration-and-environment) |

Pentru a compila și rula din sursă: `docker compose up --build -d` sau `pnpm docker:up` - vezi [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obținerea unei chei API OpenRouter

Transrewrt acceptă mai mulți furnizori de inteligență artificială. [OpenRouter](https://openrouter.ai) este o alegere populară deoarece oferă acces la multe modele printr-o singură cheie și include modele gratuite.

1. Înregistrați-vă sau autentificați-vă pe [openrouter.ai](https://openrouter.ai).
2. Accesați pagina [Keys](https://openrouter.ai/keys) și creați o nouă cheie (dați-i un nume, opțional setați un limită de credit). Puteți utiliza modele gratuite fără a adăuga credit.
3. **Aplicație desktop (Electron):** inserați cheile în **Settings → API**. **Docker:** setați variabilele de mediu, cum ar fi `OPENROUTER_API_KEY` (vezi [Quick start](#quick-start)).

Nu folosiți modelul **Body Builder** al OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pentru traducere, rescriere sau transformare: acesta returnează corpuri de cereri JSON, nu textul finalizat pentru aceste sarcini. Consultați [Settings → Models](USER-GUIDE.ro.md#models) din Ghidul Utilizatorului.

De asemenea, puteți utiliza alți furnizori (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) sau rula modele local cu [Ollama](https://ollama.com). Consultați [Configuration](#configuration-and-environment) pentru lista completă de furnizori suportați și variabile de mediu.

> ⚠️ **ATENȚIE**<br/>
> Dacă utilizați Ollama de pe un alt dispozitiv, container sau serviciu, rețineți să configurați Ollama să permită conexiuni externe (nu doar localhost).

Pentru informații despre limite, BYOK și altele, consultați [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Configurare și mediu

**Locații fișier de configurare**

| Implementare      | Locație configurare                             |
| ------------------ | ----------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Web / Docker       | `/app/data/config.json` (folosiți un volum pentru persistență) |

<br/>

**Variabile de mediu** (doar web / Docker; Electron folosește fișierul local de configurare)

| Variabilă               | Implicit                  | Descriere |
| ------------------------ | ------------------------- | --------- |
| `PORT`                   | `5000`                    | Portul pe care ascultă serverul |
| `CONFIG_PATH`            | `/app/data/config.json`   | Calea către fișierul de configurare |
| `OPENROUTER_API_KEY`     | *(vid)*                   | Cheia API OpenRouter |
| `OPENAI_API_KEY`         | *(vid)*                   | Cheia API OpenAI |
| `CEREBRAS_API_KEY`       | *(vid)*                   | Cheia API Cerebras |
| `ANTHROPIC_API_KEY`      | *(vid)*                   | Cheia API Anthropic |
| `GOOGLE_API_KEY`         | *(vid)*                   | Cheia API Google Gemini |
| `DEEPSEEK_API_KEY`       | *(vid)*                   | Cheia API DeepSeek |
| `GROQ_API_KEY`           | *(vid)*                   | Cheia API Groq |
| `MISTRAL_API_KEY`        | *(vid)*                   | Cheia API Mistral |
| `OLLAMA_URL`             | *(vid)*                   | URL-ul de bază Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`            | *(vid)*                   | Cheia API xAI |

Configurați doar furnizorii pe care îi utilizați. ID-urile modelelor sunt separate prin spațiu de nume (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Afișare costuri:** OpenRouter returnează costul exact facturat atunci când este aplicabil. Alți furnizori utilizează **costuri estimate** din prețurile publice ale modelelor OpenRouter, dacă este disponibilă o cheie OpenRouter; altfel, costurile non-OpenRouter pot fi afișate ca `0`. Estimările nu sunt facturi.

<br/>

**Date și persistență:** Pentru Docker, montați un volum în `/app/data` astfel încât `config.json` și baza de date SQLite să persiste după repornirea containerului. Fără un volum, toate datele sunt pierdute la oprirea containerului.

**Dezvoltatori:** După actualizarea modificărilor care înlocuiesc vechea configurare cu o singură cheie, reinițializați sau combinați `data/config.json` cu noua structură implicită din `src/config-defaults/config_default.json`, dacă fișierul local încă utilizează câmpuri eliminate (`api_key`, `api_url`, opțiuni proxy).

<br/>

**Autentificare web:**

- Administrator implicit: `admin` / `transrewrt26`.
- Gestionarea utilizatorilor în **Setări → Utilizatori**.
- Resetare parolă: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (din sursă: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATENȚIE**<br/>
> Schimbați imediat parola implicită de administrator pentru orice gazdă accesibilă prin rețea.

<br/>

Setările principale (font, modele, limbi etc.) sunt disponibile în Setările aplicației.

<br/><br/>

<a id="development-and-architecture"></a>

## Dezvoltare și arhitectură

- **Dezvoltare:** Configurare, construcție, testare și distribuire (Electron, Web, Docker) - vezi **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Achitectură și prezentare generală a sistemului:** Structura directoarelor, tehnologiile utilizate, deciziile de proiectare - vezi **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versiuni și etichete

- **Etichetele Git** `v`* (de exemplu `v1.0.10`) declanșează [fluxul de lucru pentru lansare](.github/workflows/release.yml). **Lansările GitHub** includ instalatorul pentru Windows (`.exe`) și fișierele AppImage pentru Linux (**x64** și **arm64**).
- **Imaginile Docker** sunt publicate la `ghcr.io/wsj-br/transrewrt`. Etichetele imaginilor corespund versiunii Git (de exemplu, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) plus eticheta `latest`. Arhitectură multiplă: `linux/amd64` și `linux/arm64` (de exemplu, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribuție

1. Creează un fork al repository-ului.
2. Creează o ramură pentru funcționalitate: `git checkout -b feature/my-feature`
3. Comite modificările cu un mesaj clar.
4. Transmite modificările și deschide o cerere de integrare (Pull Request) către `main`.

Te rugăm să respecți stilul existent de cod și să testezi modificările în ambele moduri (Electron și web) înainte de trimitere. Consultă [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pentru instrucțiuni privind construcția și testarea.

<br/>

**Raportarea problemelor:** Deschideți o problemă pe [GitHub](https://github.com/wsj-br/transrewrt/issues). Includeți platforma (Windows / Linux / Docker) și versiunea aplicației (afișată în fereastra „Despre” sau pe pagina de Lansări).

<br/><br/>

<a id="disclaimer"></a>

## Declinare de răspundere

Numele și iconițele produselor aparțin deținătorilor lor și sunt utilizate doar în scop de identificare. Acest software nu este asociat sau susținut de niciuna dintre mărcile menționate.

<br/><br/>

<a id="license"></a>
## Licență

Drepturi de autor © 2026 Waldemar Scudeller Jr.

[Licența Apache 2.0](LICENSE)