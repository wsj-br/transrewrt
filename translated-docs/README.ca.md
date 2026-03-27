---
translated_at: "2026-03-26T00:25:57.525Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Icona del Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versió"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Llicència: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Eina de text amb IA: tradueix entre idiomes, reescriu en diferents estils i transforma amb indicacions personalitzades, utilitzant múltiples proveïdors d'IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i Ollama local). Funciona com a aplicació d'escriptori (Electron) o com a aplicació web autoallotjada (Docker).

- **Traduir** — entre desenes d'idiomes, amb detecció automàtica de l'idioma d'origen
- **Reescriure** — corretgir gramàtica, millorar la claredat, formal/informal, acurçar, ampliar, tècnic
- **Transformar** — indicacions personalitzades d'IA; crear i gestionar indicacions, idioma de destinació opcional per indicació
- **Historial** — historial complet d'execucions amb text d'entrada/sortida, filtres i exportació
- **Models i cost** — tria de models de qualsevol proveïdor configurat; panells de cost i ús amb registre, resums per model/operació/dia
- **Interfície** — interfície multilingüe (més de 30 idiomes, suport RTL), tipus de lletra, ...
- **Mode web** — suport multiusuari amb rols d'administrador
- **Escriptori** — aplicació Electron per a Windows i Linux
- **Autoallotjat** — imatge Docker per a amd64 i arm64 (preparat per Raspberry Pi)

Un cop instal·lat, vegeu el **[Manual d'usuari](USER-GUIDE.ca.md)** per una guia completa de totes les funcionalitats.

<small>**Llegeix en altres idiomes:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sobre traduccions de la interfície i documentació:** Tots els idiomes de la interfície excepte l'anglès (UK) original
> han estat traduïts mitjançant models d'IA; la redacció pot ser imprecisa o contenir errors.

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

**Panell**

![Panell de costos](../images/screenshots/ca/dashboard-summary.png)

**Historial**

![Historial](../images/screenshots/ca/history.png)

**Configuració - selecció de model**

![Configuració - selecció de model](../images/screenshots/ca/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Taula de continguts

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Començament ràpid](#quick-start)
- [Instal·lació](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obtenció d'una clau API d'OpenRouter](#getting-an-openrouter-api-key)
- [Configuració i entorn](#configuration-and-environment)
- [Desenvolupament i arquitectura](#development-and-architecture)
- [Publicacions i etiquetes](#releases-and-tags)
- [Col·laboració](#contributing)
- [Avís legal](#disclaimer)
- [Llicència](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Començament ràpid

**Docker (recomanat per autoallotjament)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Substituïu `sk-or-your-key` per la vostra [clau API d'OpenRouter](https://openrouter.ai/keys) (o configureu claus d'altres proveïdors; vegeu [Configuració](#configuration-and-environment)). Obriu [http://localhost:5000](http://localhost:5000) i canvieu la contrasenya predeterminada abans d'exposar el servei.

<br/>

> ℹ️ **NOTA**<br/>
> A Docker, les credencials dels LLM es configuren mitjançant variables d'entorn com `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (no en la interfície web). A l'escriptori (Electron) configureu les claus a **Configuració → API**.

<br/>

**Windows**

Baixeu el darrer `Transrewrt Setup x.y.z.exe` de [Publicacions](https://github.com/wsj-br/transrewrt/releases), executeu el programari d'instal·lació i inicieu-lo des del menú Inici o un accés directe d'escriptori. Introduïu les vostres claus API a **Configuració → API**. Heu de configurar almenys un proveïdor; OpenRouter és comú per als models gratuïts.

<br/>

**Linux**

Baixeu el fitxer `.AppImage` per al vostre processador des de [Publicacions](https://github.com/wsj-br/transrewrt/releases) (`x64` per a ordinadors típics, `arm64` per a molts dispositius ARM, incloent Raspberry Pi 4+), després:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduïu les vostres claus API a **Configuració → API**. Heu de configurar almenys un proveïdor; OpenRouter és comú per als models gratuïts.

A Debian/Ubuntu podria caldre instal·lar dependències addicionals primer:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Vegeu [Instal·lació → Linux](#linux-electron) per a més detalls.

<br/>

> ℹ️ **NOTA**<br/>
> macOS no està actualment suportat. Transrewrt està disponible per a Windows, Linux i Docker.

<br/>

Un cop l'aplicació s'estigui executant, vegeu el **[Guia d'usuari](USER-GUIDE.ca.md)** per aprendre com traduir, reescriure i transformar text, gestionar indicacions i configurar models.

<br/><br/>

<a id="installation"></a>
## Instal·lació

<a id="windows-electron"></a>
### Windows (Electron)

- Baixeu el darrer instal·lador de [Publicacions](https://github.com/wsj-br/transrewrt/releases).
- Executeu el fitxer `.exe` i seguïu el procediment d'instal·lació.
- Primera execució: inicieu l'aplicació des del menú Inici o un accés directe d'escriptori. 

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Baixeu l'`.AppImage` corresponent (`x64` o `arm64`) de [Publicacions](https://github.com/wsj-br/transrewrt/releases).
- Executeu: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` en x86_64/amd64, o feu servir el nom del fitxer `...-arm64.AppImage` en ARM64.
- Dependències addicionals (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consulteu [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per a més informació.

<br/>

<a id="docker"></a>
### Docker

- Descarregueu: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Configureu almenys una clau de proveïdor mitjançant variables d'entorn (per exemple, `OPENROUTER_API_KEY` per a OpenRouter). Passeu les variables amb `-e` o utilitzeu `docker compose` / `.env` perquè els secrets no s'inclouen dins la imatge.
- Les claus del proveïdor **no** s'introdueixen a la interfície web; el servidor les llegeix des de l'entorn.

Exemple - volum amb nom per a persistència (clau OpenRouter mitjançant entorn):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opció    | Descripció                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (mapatge amb `-p 5000:5000`)                                                                     |
| Volum    | Munteu `/app/data` per a persistència de configuració i base de dades                                   |
| Variables d'entorn | `PORT`, `CONFIG_PATH`, a més de claus LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - vegeu [Configuració](#configuration-and-environment) |

Per compilar i executar des del codi font: `docker compose up --build -d` o `pnpm docker:up`. Vegeu [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Com obtenir una clau API d'OpenRouter

Transrewrt admet diversos proveïdors d'IA. [OpenRouter](https://openrouter.ai) és una opció popular perquè agrupa molts models sota una sola clau i ofereix models gratuïts.

1. Registra't o inicia sessió a [openrouter.ai](https://openrouter.ai).
2. Obre la pàgina de [Keys](https://openrouter.ai/keys) i crea una nova clau (posa-li un nom i, opcionalment, estableix un límit de crèdit). Pots utilitzar models gratuïts sense afegir crèdit.
3. **Escriptori (Electron):** enganxa les claus a **Configuració → API**. **Docker:** estableix variables d'entorn com ara `OPENROUTER_API_KEY` (vegeu [Inici ràpid](#quick-start)).

No utilitzis el model **Body Builder** d'OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) per traduir, reescriure o transformar: retorna les càrregues útils de les sol·licituds en format JSON, no el text completat per a aquestes tasques. Consulteu [Configuració → Models](USER-GUIDE.ca.md#models) al Manual d'usuari.

També podeu utilitzar altres proveïdors (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o executar models localment amb [Ollama](https://ollama.com). Vegeu [Configuració](#configuration-and-environment) per obtenir la llista completa dels proveïdors admesos i les variables d'entorn.

> ⚠️ **AVIS**<br/>
> Si utilitzeu Ollama des d'un altre dispositiu, contenidor o servei, recordeu configurar Ollama per permetre connexions externes (no només localhost).

Per a límits, BYOK i més informació, consulteu [autenticació d'OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuració i entorn

**Ubicacions del fitxer de configuració**

| Desplegament         | Ubicació de la configuració                             |
| -------------------- | ------------------------------------------------------- |
| Electron (Windows)   | `%APPDATA%\transrewrt\`                                 |
| Electron (Linux)     | `~/.config/transrewrt/`                                 |
| Web / Docker         | `/app/data/config.json` (useu un volum per persistir)   |

<br/>

**Variables d'entorn** (només web/Docker; Electron utilitza el fitxer de configuració local)

| Variable         | Per defecte             | Descripció |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port d'escolta del servidor |
| `CONFIG_PATH`    | `/app/data/config.json` | Ruta al fitxer de configuració |
| `OPENROUTER_API_KEY` | *(buit)*                | Clau API d'OpenRouter |
| `OPENAI_API_KEY`     | *(buit)*                | Clau API d'OpenAI |
| `CEREBRAS_API_KEY`   | *(buit)*                | Clau API de Cerebras |
| `ANTHROPIC_API_KEY`  | *(buit)*                | Clau API d'Anthropic |
| `GOOGLE_API_KEY`     | *(buit)*                | Clau API de Google Gemini |
| `DEEPSEEK_API_KEY`   | *(buit)*                | Clau API de DeepSeek |
| `GROQ_API_KEY`       | *(buit)*                | Clau API de Groq |
| `MISTRAL_API_KEY`    | *(buit)*                | Clau API de Mistral |
| `OLLAMA_URL`     | *(buit)*                | URL base d'Ollama (p. ex. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(buit)*                | Clau API de xAI |

Configureu només els proveïdors que utilitzeu. Els ID de models estan organitzats per espais de noms (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Mostra de costos:** OpenRouter retorna el cost facturat exacte quan és aplicable. Altres proveïdors utilitzen **el cost estimat** a partir de la tarifa pública de models d'OpenRouter quan hi ha una clau d'OpenRouter disponible; si no, el cost dels no-OpenRouter pot mostrar-se com `0`. Les estimacions no són factures.

<br/>

**Dades i persistència:** Per a Docker, munteu un volum a `/app/data` perquè `config.json` i la base de dades SQLite puguin persistir entre reinicis del contenidor. Sense volum, totes les dades es perden en aturar el contenidor.

**Desenvolupadors:** Després d'actualitzar canvis que substitueixen l'antiga configuració de clau única, restabliu o combineu `data/config.json` amb la nova forma per defecte de `src/config-defaults/config_default.json` si el vostre fitxer local encara fa servir camps eliminats (`api_key`, `api_url`, opcions de servidor intermedi).

<br/>

**Autenticació web:**

- Administrador per defecte: `admin` / `transrewrt26`.
- Gestioneu usuaris a **Configuració → Usuaris**.
- Reinicieu una contrasenya: `docker exec <contenidor> reset-web-password '<nom_usuari>' '<nova_contrasenya>'`
  (des de la font: `pnpm run reset-web-password -- <nom_usuari> <nova_contrasenya>`)

<br/>

> ⚠️ **AVIS**<br/>
> Canvieu immediatament la contrasenya d'administrador per defecte en qualsevol equip accessible per xarxa.

<br/>

Els paràmetres principals (tipus de lletra, models, idiomes, etc.) estan disponibles a la Configuració de l'aplicació.

<br/><br/>

<a id="development-and-architecture"></a>

## Desenvolupament i arquitectura

- **Desenvolupament:** Configuració, construcció, proves i desplegament (Electron, Web, Docker) - vegeu **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Visió general de l'arquitectura i del sistema:** Estructura de carpetes, tecnologies utilitzades, decisions de disseny - vegeu **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versions i etiquetes

- Les **etiquetes de Git** `v`* (per exemple, `v1.0.10`) activen el [flux de treball de publicació](.github/workflows/release.yml). Les **versions de GitHub** inclouen el instal·lador per a Windows (`.exe`) i fitxers Linux AppImage (**x64** i **arm64**).
- Les **imatges de Docker** es publiquen a `ghcr.io/wsj-br/transrewrt`. Les etiquetes de les imatges coincideixen amb la versió de Git (per exemple, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) a més de l'etiqueta `latest`. Multiarquitectura: `linux/amd64` i `linux/arm64` (per exemple, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Col·laboració

1. Realitzeu una bifurcació del repositori.
2. Creeu una branca de funcionalitat: `git checkout -b feature/my-feature`.
3. Feu commit dels vostres canvis amb un missatge clar.
4. Pujeu-los i obriu una sol·licitud d'extracció (Pull Request) cap a `main`.

Seguiu l'estil de codi existent i proveu els vostres canvis tant en mode Electron com en mode web abans de fer la sol·licitud. Consulteu [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per obtenir instruccions sobre com construir i provar.

<br/>

**Informar d'incidències:** Obriu una incidència a [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclòs la vostra plataforma (Windows / Linux / Docker) i la versió de l'aplicació (disponible al diàleg 'Quant a' o a la pàgina de Versions).

<br/><br/>

<a id="disclaimer"></a>
## Avís legal

Els noms i icones dels productes pertanyen als seus respectius propietaris i s'utilitzen només amb finalitats d'identificació. Aquest programari no té cap vincle ni és aprovat per cap de les marques esmentades.

<br/><br/>

<a id="license"></a>
## Llicència

Copyright © 2026 Waldemar Scudeller Jr.

[Llicència Apache 2.0](LICENSE)