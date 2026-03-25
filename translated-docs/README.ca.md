---
translated_at: "2026-03-25T22:07:43.344Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logotip de Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versió"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Llicència: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Eina de text amb IA: tradueix entre idiomes, reescriu en diferents estils i transforma amb indicacions personalitzades — utilitzant múltiples proveïdors d'IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i Ollama local). Funciona com a aplicació d'escriptori (Electron) o com a aplicació web autoallotjada (Docker).

- **Traduir** — entre desenes d'idiomes, amb detecció automàtica de l'idioma d'origen
- **Reescriure** — corregir gramàtica, millorar la claredat, formal/informal, escurçar, ampliar, tècnic
- **Transformar** — indicacions personalitzades d'IA; crea i gestiona indicacions, idioma de destinació opcional per cada indicació
- **Historial** — historial complet d'execucions amb text d'entrada i sortida, filtres i exportació
- **Models i costos** — tria models de qualsevol proveïdor configurat; taulells de costos i ús amb registre, resums per model/operació/dia
- **Interfície** — interfície multilingüe (més de 30 idiomes, suport RTL), fonts, ...
- **Mode web** — suport multiusuari amb rols d'administrador
- **Escriptori** — aplicació Electron per a Windows i Linux
- **Autoallotjada** — imatge Docker per a amd64 i arm64 (preparat per Raspberry Pi)

Un cop instal·lada, consulteu la **[Guia d'Usuari](USER-GUIDE.ca.md)** per a una descripció completa de totes les funcionalitats.

<small>**Llegiu en altres idiomes:** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sobre les traduccions de la interfície i la documentació:** Tots els idiomes de la interfície, excepte l'anglès (UK) original, 
> s'han traduït mitjançant models d'IA; l'expressió pot ser imprecisa o contenir errors.

</small>

<br/>

<a id="screenshots"></a>
## Captures de pantalla

**Selector d'idioma**

![Selector d'idioma](../images/screenshots/ca/language-selector.png)

**Traduir**

![Traduir](../images/screenshots/ca/translate.png)

**Transformar - editor d'indicacions**

![Transformar - editor d'indicacions](../images/screenshots/ca/transform-prompt-edit.png)

**Taulell**

![Taulell de costos](../images/screenshots/ca/dashboard-summary.png)

**Historial**

![Historial](../images/screenshots/ca/history.png)

**Configuració - selecció de models**

![Configuració - selecció de models](../images/screenshots/ca/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Taula de continguts

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Inici ràpid](#quick-start)
- [Instal·lació](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obtenció d'una clau API d'OpenRouter](#getting-an-openrouter-api-key)
- [Configuració i entorn](#configuration-and-environment)
- [Desenvolupament i arquitectura](#development-and-architecture)
- [Publicacions i etiquetes](#releases-and-tags)
- [Contribució](#contributing)
- [Avís legal](#disclaimer)
- [Llicència](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Inici ràpid

**Docker (recomanat per autogestionar)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Substituïu `sk-or-your-key` per la vostra [clau API d'OpenRouter](https://openrouter.ai/keys) (o configureu claus d'altres proveïdors; vegeu [Configuració](#configuration-and-environment)). Obriu [http://localhost:5000](http://localhost:5000) i canvieu la contrasenya d'administrador predeterminada abans d'exposar el servei.

<br/>

> ℹ️ **NOTA**<br/>
> En Docker, les credencials de LLM es configuren amb variables d'entorn com `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (no a través de la interfície web). En l'equip (Electron) configureu les claus a **Configuració → API**.

<br/>

**Windows**

Descarregueu l'últim `Transrewrt Setup x.y.z.exe` de [Publicacions](https://github.com/wsj-br/transrewrt/releases), executeu el instal·lador i, després, inicieu l'aplicació pel menú d'Inici o l'accés directe d'escriptori. Introduïu les claus API a **Configuració → API**. Heu de configurar com a mínim un proveïdor; OpenRouter és habitual per a models gratuïts.

<br/>

**Linux**

Descarregueu l'`.AppImage` adequat per al vostre processador de [Publicacions](https://github.com/wsj-br/transrewrt/releases) (`x64` per ordinadors típics, `arm64` per dispositius ARM, incloent Raspberry Pi 4+), i llavors:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduïu les claus API a **Configuració → API**. Heu de configurar com a mínim un proveïdor; OpenRouter és habitual per a models gratuïts.

A Debian/Ubuntu pot caler instal·lar dependències addicionals abans:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Vegeu [Instal·lació → Linux](#linux-electron) per més detalls.

<br/>

> ℹ️ **NOTA**<br/>
> macOS no és actualment compatible. Transrewrt està disponible per a Windows, Linux i Docker.

<br/>

Un cop l'aplicació estigui en funcionament, consulteu el **[Manual d'usuari](USER-GUIDE.ca.md)** per saber com traduir, reescriure i transformar text, gestionar indicacions i configurar models.

<br/><br/>

<a id="installation"></a>
## Instal·lació

<a id="windows-electron"></a>
### Windows (Electron)

- Descarregueu l'instal·lador més recent des de [Publicacions](https://github.com/wsj-br/transrewrt/releases).
- Executeu el `.exe` i seguiu les instruccions de l'instal·lador.
- Primera execució: inicieu l'aplicació des del menú d'Inici o des de l'accés directe d'escriptori.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descarregueu l'`.AppImage` adequat (`x64` o `arm64`) des de [Publicacions](https://github.com/wsj-br/transrewrt/releases).
- Executeu: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` en x86_64/amd64, o utilitzeu el nom de fitxer `...-arm64.AppImage` en ARM64.
- Dependències addicionals (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Vegeu [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per obtenir més informació.

<br/>

<a id="docker"></a>
### Docker

- Descarrega: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Establiu com a mínim una clau de proveïdor mitjançant l'entorn (per exemple `OPENROUTER_KEY` per a OpenRouter). Passeu les variables amb `-e` o mitjançant `docker compose` / `.env` perquè els secrets no quedin incrustats a la imatge.
- Les claus del proveïdor **no** es poden introduir a la interfície web; el servidor les llegeix des de l'entorn.

Exemple - volum amb nom per a persistència (clau OpenRouter via entorn):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opció    | Descripció                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (mapat amb `-p 5000:5000`)                                                                              |
| Volum    | Munteu `/app/data` per a persistència de la configuració i la base de dades                                   |
| Variables d'entorn | `PORT`, `CONFIG_PATH`, més claus LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - vegeu [Configuració](#configuration-and-environment) |

Per compilar i executar des del codi font: `docker compose up --build -d` o `pnpm docker:up` - vegeu [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obtenir una clau API d'OpenRouter

Transrewrt admet diversos proveïdors d'IA. [OpenRouter](https://openrouter.ai) és una opció popular perquè agrega múltiples models sota una sola clau i ofereix models gratuïts.

1. Registreu-vos o inicieu sessió a [openrouter.ai](https://openrouter.ai).
2. Obriu la pàgina de [Claus](https://openrouter.ai/keys) i creeu una nova clau (doneu-li un nom i, opcionalment, estableixeu un límit de crèdit). Podeu utilitzar models gratuïts sense afegir crèdit.
3. **Ordinador (Electron):** enganxeu les claus a **Configuració → API**. **Docker:** definiu variables d'entorn com `OPENROUTER_KEY` (vegeu [Inici ràpid](#quick-start)).

No utilitzeu el model **Body Builder** d'OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) per traduir, reescriure o transformar: retorna càrregues útils de sol·licituds JSON, no el text completat per aquestes tasques. Vegeu [Configuració → Models](USER-GUIDE.ca.md#models) al Manual d'usuari.

També podeu utilitzar altres proveïdors (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o executar models localment amb [Ollama](https://ollama.com). Consulteu [Configuració](#configuration-and-environment) per obtenir la llista completa de proveïdors compatibles i variables d'entorn.

> ⚠️ **ADVERTÈNCIA**<br/>
> Si utilitzeu Ollama des d'un altre dispositiu, contenidor o servei, recordeu configurar Ollama per permetre connexions externes (no només localhost).


Per a límits, BYOK i més, consulteu [autenticació d'OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuració i entorn

**Ubicacions del fitxer de configuració**

| Desplegament         | Ubicació del fitxer de configuració              |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (utilitzeu un volum per persistir-ho) |

<br/>

**Variables d'entorn** (només web/Docker; Electron utilitza el fitxer de configuració local)

| Variable         | Per defecte             | Descripció |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port d'escolta del servidor |
| `CONFIG_PATH`    | `/app/data/config.json` | Ruta al fitxer de configuració |
| `OPENROUTER_KEY` | *(buit)*                | Clau API d'OpenRouter |
| `OPENAI_KEY`     | *(buit)*                | Clau API d'OpenAI |
| `CEREBRAS_KEY`   | *(buit)*                | Clau API de Cerebras |
| `ANTHROPIC_KEY`  | *(buit)*                | Clau API d'Anthropic |
| `GOOGLE_KEY`     | *(buit)*                | Clau API de Google Gemini |
| `DEEPSEEK_KEY`   | *(buit)*                | Clau API de DeepSeek |
| `GROQ_KEY`       | *(buit)*                | Clau API de Groq |
| `MISTRAL_KEY`    | *(buit)*                | Clau API de Mistral |
| `OLLAMA_URL`     | *(buit)*                | URL base d'Ollama (p. ex. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(buit)*                | Clau API de xAI |

Configureu només els proveïdors que utilitzeu. Els ID de models tenen espai de noms (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Mostra de costos:** OpenRouter retorna el cost facturat exacte quan és aplicable. Altres proveïdors utilitzen el cost **estimat** a partir dels preus públics dels models d'OpenRouter si està disponible una clau d'OpenRouter; sinó, el cost de no-OpenRouter pot mostrar-se com a `0`. Les estimacions no són factures.

<br/>

**Dades i persistència:** Per a Docker, monteu un volum a `/app/data` per tal que `config.json` i la base de dades SQLite persisteixin entre reinicis del contenidor. Sense un volum, totes les dades es perden quan el contenidor s'aturi.

**Desenvolupadors:** Després de descarregar canvis que substitueixen la configuració antiga d'una sola clau, reinicieu o combineu `data/config.json` amb la nova estructura per defecte des de `src/config-defaults/config_default.json` si el vostre fitxer local encara utilitza camps eliminats (`api_key`, `api_url`, opcions de servidor intermedi).

<br/>

**Autenticació web:**

- Administrador per defecte: `admin` / `transrewrt26`.
- Gestionau usuaris a **Configuració → Usuaris**.
- Reinicieu una contrasenya: `docker exec <contenidor> reset-web-password '<nom d'usuari>' '<nova contrasenya>'`
  (des del codi font: `pnpm run reset-web-password -- <nom d'usuari> <nova contrasenya>`)

<br/>

> ⚠️ **ADVERTÈNCIA**<br/>
> Canvieu immediatament la contrasenya d'administrador per defecte a qualsevol amfitrió accessible a través de xarxa.

<br/>

Els paràmetres principals (tipus de lletra, models, idiomes, etc.) estan disponibles a la configuració de l'aplicació.

<br/><br/>

<a id="development-and-architecture"></a>

## Desenvolupament i arquitectura

- **Desenvolupament:** Configuració, construcció, proves i desplegament (Electron, Web, Docker) - consulteu **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitectura i visió general del sistema:** Estructura de carpetes, tecnologies utilitzades, decisions de disseny - consulteu **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versions i etiquetes

- Les **etiquetes de Git** `v`* (per exemple, `v1.0.10`) activen el [flux de treball de publicació](.github/workflows/release.yml). Les **Versions de GitHub** inclouen l'instal·lador per a Windows (`.exe`) i imatges AppImage per a Linux (**x64** i **arm64**).
- Les **imatges Docker** s'han publicat a `ghcr.io/wsj-br/transrewrt`. Les etiquetes de les imatges coincideixen amb la versió de Git (per exemple, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) a més de la etiqueta `latest`. Multi-arquitectura: `linux/amd64` i `linux/arm64` (per exemple, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Col·laboració

1. Bifurqueu el repositori.
2. Creeu una branca de funcionalitat: `git checkout -b feature/my-feature`
3. Feu un commit dels vostres canvis amb un missatge clar.
4. Pugeu el codi i obriu una sol·licitud d'extracció (Pull Request) contra `main`.

Seguiu l'estil de codi existent i proveu els vostres canvis tant en mode Electron com en mode web abans de fer la sol·licitud. Consulteu [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per a instruccions sobre com compilar i provar.

<br/>

**Informar de problemes:** Obriu un problema a [GitHub](https://github.com/wsj-br/transrewrt/issues). Incloeu la vostra plataforma (Windows / Linux / Docker) i la versió de l'aplicació (mostrada al diàleg Quant a o a la pàgina de versions).

<br/><br/>

<a id="disclaimer"></a>
## Avís legal

Els noms i icones de productes pertanyen als seus respectius propietaris i s'utilitzen únicament amb finalitats d'identificació. Aquest programari no està afiliat ni patrocinat per cap de les marques esmentades.

<br/><br/>

<a id="license"></a>
## Llicència

Copyright © 2026 Waldemar Scudeller Jr.

[Llicència Apache 2.0](LICENSE)