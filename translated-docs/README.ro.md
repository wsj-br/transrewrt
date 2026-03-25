---
translated_at: "2026-03-25T22:27:03.810Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versiune"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licență: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platformă">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Un instrument pentru text bazat pe AI: traduci între limbi, rescrii în stiluri diferite și transformi cu instrucțiuni personalizate — folosind mai mulți furnizori de AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI și Ollama local). Rulează ca o aplicație desktop (Electron) sau ca o aplicație web auto-găzduită (Docker).

- **Traducere** — între zeci de limbi, cu detectare automată a limbii sursă
- **Rescriere** — corectarea gramaticii, îmbunătățirea clarității, stil formal/informal, scurtare, extindere, limbaj tehnic
- **Transformare** — prompturi personalizate de AI; creează și gestionează prompturi, limbă țintă opțională pe fiecare prompt
- **Istoric** — istoric complet al execuțiilor, cu text de intrare/ieșire, filtrare și posibilitate de export
- **Modele și costuri** — alege modele din orice furnizor configurat; tablouri de bord pentru costuri și utilizare cu jurnale, rezumate pe model/operațiune/zi
- **Interfață** — interfață multilingvă (30+ limbi, suport RTL), fonturi, ...
- **Mod web** — suport pentru mai mulți utilizatori cu roluri de administrator
- **Aplicație desktop** — aplicație Electron pentru Windows și Linux
- **Auto-găzduită** — imagine Docker pentru amd64 și arm64 (gata de utilizare pe Raspberry Pi)

După instalare, consultați **[Ghidul utilizatorului](USER-GUIDE.ro.md)** pentru o prezentare completă a tuturor funcțiilor.

<small>**Accesibil în alte limbi:** [English (UK)](README.ro.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Notă privind traducerile interfeței și ale documentației:** Toate limbile interfeței, cu excepția limbii engleze (UK) originale,
> au fost traduse folosind modele AI; exprimarea poate fi imprecisă sau conține erori.

</small>

<br/>

<a id="screenshots"></a>
## Capturi de ecran

**Selector de limbă**

![Selector de limbă](../images/screenshots/ro/language-selector.png)

**Traducere**

![Traducere](../images/screenshots/ro/translate.png)

**Transformare - editor de prompt**

![Transformare - editor de prompt](../images/screenshots/ro/transform-prompt-edit.png)

**Tablou de bord**

![Tablou de bord costuri](../images/screenshots/ro/dashboard-summary.png)

**Istoric**

![Istoric](../images/screenshots/ro/history.png)

**Setări - selecție model**

![Setări - selecție model](../images/screenshots/ro/settings-models.png)

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
- [Contribuire](#contribuire)
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

Înlocuiți `sk-or-your-key` cu cheia dvs. [OpenRouter API](https://openrouter.ai/keys) (sau setați cheile altor furnizori; vezi [Configurare](#configurare-si-mediu)). Deschideți [http://localhost:5000](http://localhost:5000) și schimbați parola implicită pentru administrator înainte de a expune serviciul.

<br/>

> ℹ️ **NOTĂ**<br/>
> În Docker, credențialele LLM sunt stabilite prin variabile de mediu precum `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (nu în interfața web). Pe desktop (Electron) configurați cheile în **Setări → API**.

<br/>

**Windows**

Descărcați cea mai recentă versiune `Transrewrt Setup x.y.z.exe` din [Versiuni](https://github.com/wsj-br/transrewrt/releases), rulați instalatorul, apoi lansați aplicația din meniul Start sau de pe scurtătura de pe desktop. Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este cel mai frecvent utilizat pentru modele gratuite.

<br/>

**Linux**

Descărcați fișierul `.AppImage` potrivit pentru CPU-ul dvs. din [Versiuni](https://github.com/wsj-br/transrewrt/releases) (`x64` pentru calculatoare obișnuite, `arm64` pentru multe dispozitive ARM, inclusiv Raspberry Pi 4+), apoi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduceți cheile API în **Setări → API**. Trebuie să configurați cel puțin un furnizor; OpenRouter este cel mai frecvent utilizat pentru modele gratuite.

Pe Debian/Ubuntu este posibil să trebuie să instalați mai întâi dependențe suplimentare:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Consultați [Instalare → Linux](#linux-electron) pentru detalii.

<br/>

> ℹ️ **NOTĂ**<br/>
> macOS nu este în prezent suportat. Transrewrt este disponibil pentru Windows, Linux și Docker.

<br/>

Odată ce aplicația rulează, consultați **[Ghidul utilizatorului](USER-GUIDE.ro.md)** pentru a afla cum să traduceți, rescrieți și transformați textul, cum să gestionați prompt-urile și să configurați modelele.

<br/><br/>

<a id="installation"></a>
## Instalare

<a id="windows-electron"></a>
### Windows (Electron)

- Descărcați cel mai recent instalator din [Versiuni](https://github.com/wsj-br/transrewrt/releases).
- Rulați fișierul `.exe` și urmați pașii instalatorului.
- Prima rulare: lansați aplicația din meniul Start sau de pe scurtătura de pe desktop. 

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descărcați fișierul `.AppImage` corespunzător (`x64` sau `arm64`) din [Versiuni](https://github.com/wsj-br/transrewrt/releases).
- Rulați: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` pe x86_64/amd64 sau folosiți numele fișierului `...-arm64.AppImage` pe ARM64.
- Dependențe suplimentare (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consultați [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pentru mai multe informații.

<br/>

<a id="docker"></a>
### Docker

- Descărcați: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Setează cel puțin o cheie furnizor prin variabile de mediu (de exemplu `OPENROUTER_KEY` pentru OpenRouter). Transmiteți variabilele cu `-e` sau folosiți `docker compose` / `.env` astfel încât secretele să nu fie incluse în imagine.
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
| Volum    | Montați `/app/data` pentru persistența configurării și bazei de date                                                         |
| Variabile de mediu | `PORT`, `CONFIG_PATH`, plus cheile LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - vezi [Configurare](#configurare-si-mediu) |

Pentru a construi și rula din sursă: `docker compose up --build -d` sau `pnpm docker:up` - vezi [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obținerea unei chei API OpenRouter

Transrewrt suportă mai mulți furnizori de inteligență artificială. [OpenRouter](https://openrouter.ai) este o opțiune populară deoarece agregă multe modele într-o singură cheie și oferă modele gratuite.

1. Înregistrați-vă sau autentificați-vă la [openrouter.ai](https://openrouter.ai).
2. Deschideți pagina [Keys](https://openrouter.ai/keys) și creați o nouă cheie (denumiți-o și, opțional, setați un limită de credit). Puteți folosi modele gratuite fără a adăuga credit.
3. **Desktop (Electron):** lipiți cheile în **Settings → API**. **Docker:** setați variabile de mediu (env vars) precum `OPENROUTER_KEY` (vezi [Quick start](#quick-start)).

Nu utilizați modelul OpenRouter **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pentru traducere, rescriere sau transformare: acesta returnează doar corpul cererii JSON, nu textul finalizat necesar pentru acele sarcini. Consultați [Settings → Models](USER-GUIDE.ro.md#models) din Ghidul Utilizatorului.

Puteți de asemenea folosi alți furnizori (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) sau rula modele local cu [Ollama](https://ollama.com). Consultați [Configuration](#configuration-and-environment) pentru lista completă a furnizorilor susținuți și a variabilelor de mediu.

> ⚠️ **ATENȚIE**<br/>
> Dacă utilizați Ollama de pe un alt dispozitiv, container sau serviciu, nu uitați să configurați Ollama pentru a permite conexiuni externe (nu doar localhost).

Pentru limite, BYOK și alte informații, consultați [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configurare și mediu

**Locații fișier configurație**

| Deploiere          | Locație configurație                             |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (folosiți un volum pentru persistență) |

<br/>

**Variabile de mediu** (doar pentru web/Docker; Electron folosește fișierul local de configurație)

| Variabilă         | Implicit                 | Descriere |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Portul pe care ascultă serverul |
| `CONFIG_PATH`    | `/app/data/config.json` | Calea către fișierul de configurație |
| `OPENROUTER_KEY` | *(gol)*                 | Cheia API OpenRouter |
| `OPENAI_KEY`     | *(gol)*                 | Cheia API OpenAI |
| `CEREBRAS_KEY`   | *(gol)*                 | Cheia API Cerebras |
| `ANTHROPIC_KEY`  | *(gol)*                 | Cheia API Anthropic |
| `GOOGLE_KEY`     | *(gol)*                 | Cheia API Google Gemini |
| `DEEPSEEK_KEY`   | *(gol)*                 | Cheia API DeepSeek |
| `GROQ_KEY`       | *(gol)*                 | Cheia API Groq |
| `MISTRAL_KEY`    | *(gol)*                 | Cheia API Mistral |
| `OLLAMA_URL`     | *(gol)*                 | URL-ul de bază Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(gol)*                 | Cheia API xAI |

Configurați doar furnizorii pe care îi folosiți. ID-urile modelelor sunt organizate pe spații de nume (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` etc.).

**Afișarea costurilor:** OpenRouter returnează costul exact facturat atunci când este aplicabil. Alți furnizori folosesc **costuri estimate** bazate pe prețurile publice ale modelelor OpenRouter când este disponibilă o cheie OpenRouter; în lipsa acesteia, costul furnizorilor non-OpenRouter poate apărea ca `0`. Estimările nu sunt facturi.

<br/>

**Date și persistență:** Pentru Docker, montați un volum la `/app/data` pentru ca `config.json` și baza de date SQLite să persiste după repornirile containerului. Fără un volum, toate datele se pierd atunci când containerul se oprește.

**Dezvoltatori:** După ce preluați modificările care înlocuiesc configurația veche bazată pe o singură cheie, reinițializați sau combinați `data/config.json` cu noua structură implicită din `src/config-defaults/config_default.json` dacă fișierul local încă folosește câmpuri eliminate (`api_key`, `api_url`, opțiuni proxy).

<br/>

**Autentificare web:**

- Administrator implicit: `admin` / `transrewrt26`.
- Gestionarea utilizatorilor se face în **Settings → Users**.
- Resetarea parolei: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (din cod sursă: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATENȚIE**<br/>
> Schimbați imediat parola implicită a contului de administrator pe orice gazdă accesibilă în rețea.

<br/>

Setările principale (font, modele, limbi etc.) sunt disponibile în secțiunea Settings a aplicației.

<br/><br/>

<a id="development-and-architecture"></a>

## Dezvoltare și arhitectură

- **Dezvoltare:** Configurare, construcție, testare și lansare (Electron, Web, Docker) - consultați **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Prezentare generală a arhitecturii și a sistemului:** Structura dosarelor, tehnologiile utilizate, deciziile de proiectare - consultați **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Lansări și etichete

- **Etichetele Git** `v`* (de exemplu `v1.0.10`) declanșează [fluxul de lucru pentru lansare](.github/workflows/release.yml). **Lansările GitHub** atașează instalatorul pentru Windows (`.exe`) și imaginile AppImage pentru Linux (**x64** și **arm64**).
- **Imaginile Docker** sunt publicate la `ghcr.io/wsj-br/transrewrt`. Etichetele imaginilor corespund versiunii Git (de exemplu `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) plus `latest`. Arhitectură multiplă: `linux/amd64` și `linux/arm64` (de exemplu Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribuție

1. Creați o copie a depozitului (fork).
2. Creați o ramură pentru funcționalitate: `git checkout -b feature/my-feature`
3. Comiteți modificările cu un mesaj clar.
4. Încărcați modificările și deschideți o cerere de tragere (Pull Request) către `main`.

Vă rugăm să respectați stilul existent de cod și să testați modificările în ambele moduri: Electron și web, înainte de a le trimite. Consultați [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pentru instrucțiuni privind construcția și testarea.

<br/>

**Raportarea problemelor:** Deschideți o problemă pe [GitHub](https://github.com/wsj-br/transrewrt/issues). Incluziți platforma dumneavoastră (Windows / Linux / Docker) și versiunea aplicației (afișată în fereastra Despre sau pe pagina Lansări).

<br/><br/>

<a id="disclaimer"></a>
## Declinarea responsabilității

Numele de produse și iconițele aparțin deținătorilor lor respectivi și sunt utilizate doar în scop de identificare. Acest soft nu este afiliat sau susținut de niciuna dintre mărcile menționate.

<br/><br/>

<a id="license"></a>
## Licență

Drepturi de autor © 2026 Waldemar Scudeller Jr.

[Licența Apache 2.0](LICENSE)