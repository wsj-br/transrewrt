---
translated_at: "2026-03-27T23:07:55.438Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

Eina de text amb intel·ligència artificial: tradueix entre idiomes, reformula en diferents estils i transforma amb indicacions personalitzades — utilitzant múltiples proveïdors d'IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i Ollama local). Funciona com a aplicació d'escriptori (Electron) o com a aplicació web autoallotjada (Docker).

- **Traduir** — entre desenes d'idiomes, amb detecció automàtica de l'idioma d'origen
- **Reescriure** — corregeix gramàtica, millora la claredat, formal/informal, abreuja, amplia, estil tècnic
- **Transformar** — indicacions d'IA personalitzades; crea i gestiona indicacions, amb idioma de destinació opcional per indicació
- **Historial** — historial complet d'execucions amb text d'entrada/sortida, filtres i exportació
- **Models i costos** — selecciona models de qualsevol proveïdor configurat; taulells de costos i ús amb registre, resums per model/operació/dia
- **Interfície d'usuari** — interfície multilingüe (més de 30 idiomes, suport RTL), tipus de lletra, ...
- **Mode web** — suport multiusuari amb rols d'administrador
- **Escriptori** — aplicació Electron per a Windows i Linux
- **Autoallotjada** — imatge Docker per a amd64 i arm64 (preparada per Raspberry Pi)

Un cop instal·lada, consulta la **[Guia d’usuari](USER-GUIDE.ca.md)** per un recorregut complet de totes les funcionalitats.

<small>**Llegiu en altres idiomes:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sobre les traduccions de la interfície i la documentació:** Tots els idiomes de la interfície, excepte l'anglès original (UK),
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

**Taulell d'informació**

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
- [Llançaments i etiquetes](#releases-and-tags)
- [Contribució](#contributing)
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

Substituïu `sk-or-your-key` per la vostra [clau d'API d'OpenRouter](https://openrouter.ai/keys) (o estableixeu claus d'altres proveïdors; vegeu [Configuració](#configuration-and-environment)). Obriu [http://localhost:5000](http://localhost:5000) i canvieu la contrasenya d'administrador predeterminada abans d'exposar el servei.

<br/>

> ℹ️ **NOTA**<br/>
> En Docker, les credencials dels LLM es configuren mitjançant variables d'entorn com ara `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (no en la interfície web). En l'entorn d'escriptori (Electron), configureu les claus a **Configuració → API**.

<br/>

**Windows**

Baixegeu l'últim fitxer `Transrewrt Setup x.y.z.exe` des de [Llançaments](https://github.com/wsj-br/transrewrt/releases), executeu el instal·lador i llanceu l'aplicació des del menú d'inici o des d'un accés directe d'escriptori. Introduïu les vostres claus d'API a **Configuració → API**. Heu de configurar almenys un proveïdor; OpenRouter és habitual per models gratuïts.

<br/>

**Linux**

Baixegeu el fitxer `.AppImage` adequat per al vostre processador des de [Llançaments](https://github.com/wsj-br/transrewrt/releases) (`x64` per a equips típics, `arm64` per a molts dispositius ARM, incloent Raspberry Pi 4+), i llavors:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduïu les vostres claus d'API a **Configuració → API**. Heu de configurar almenys un proveïdor; OpenRouter és habitual per models gratuïts.

En Debian/Ubuntu pot caldre instal·lar dependències addicionals primer:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Vegeu [Instal·lació → Linux](#linux-electron) per a més detalls.

<br/>

> ℹ️ **NOTA**<br/>
> macOS no és actualment compatible. Transrewrt està disponible per a Windows, Linux i Docker.

<br/>

Un cop l'aplicació s'estigui executant, consulteu la **[Guia d'usuari](USER-GUIDE.ca.md)** per aprendre a traduir, reescriure i transformar text, gestionar indicacions i configurar models.

<br/><br/>

<a id="installation"></a>

## Instal·lació

<a id="windows-electron"></a>
### Windows (Electron)

- Baixa't l'instal·lador més recent des de [Releases](https://github.com/wsj-br/transrewrt/releases).
- Executa l'arxiu `.exe` i segueix les instruccions de l'instal·lador.
- Primera execució: inicia l'aplicació des del menú d'inici o amb l'access directe d'escriptori.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descarrega l'arxiu `.AppImage` adequat (`x64` o `arm64`) des de [Releases](https://github.com/wsj-br/transrewrt/releases).
- Executa: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` a x86_64/amd64, o utilitza l'arxiu amb el nom `...-arm64.AppImage` per ARM64.
- Dependències addicionals (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Vegeu [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per a més informació.

<br/>

<a id="docker"></a>
### Docker

- Descarrega: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Configura com a mínim una clau de proveïdor mitjançant variables d'entorn (per exemple, `OPENROUTER_API_KEY` per a OpenRouter). Passa les variables amb `-e` o mitjançant `docker compose` / `.env` per tal que els secrets no quedin integrats a la imatge.
- Les claus dels proveïdors **no** s'introdueixen a la interfície web; el servidor les llegeix des de l'entorn.

Exemple: volum amb nom per a persistència (clau OpenRouter mitjançant entorn):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

o si prefereix utilitzar Docker Compose, utilitzi:

# descarrega el fitxer compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edita el fitxer per afegir les API_KEYS
vi transrewrt.yml
# inicia el contenidor
docker compose -f transrewrt.yml up -d
```

<br/>

| Opció    | Descripció                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (mapat amb `-p 5000:5000`)                                                                                                       |
| Volum    | Muntar `/app/data` per a la persistència de la configuració i la base de dades                                                                                 |
| Variables d'entorn | `PORT`, `CONFIG_PATH`, i claus LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - vegeu [Configuració](#configuration-and-environment) |

Per compilar i executar des del codi font: `docker compose up --build -d` o `pnpm docker:up` - vegeu [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Com obtenir una clau API d'OpenRouter

Transrewrt admet diversos proveïdors d'IA. [OpenRouter](https://openrouter.ai) és una opció popular perquè agrega molts models sota una única clau i ofereix models gratuïts.

1. Registra't o inicia sessió a [openrouter.ai](https://openrouter.ai).
2. Obre la pàgina de [claus](https://openrouter.ai/keys) i crea una nova clau (posa-li un nom i, opcionalment, un límit de crèdit). Pots fer servir models gratuïts sense afegir crèdit.
3. **Ordinador (Electron):** enganxa les claus a **Configuració → API**. **Docker:** configura variables d'entorn com ara `OPENROUTER_API_KEY` (vegeu [Inici ràpid](#quick-start)).

No utilitzis el model **Body Builder** d'OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) per traduir, reescriure o transformar: retorna les càrregues útils de sol·licitud JSON, no el text completat per aquestes tasques. Consulteu [Configuració → Models](USER-GUIDE.ca.md#models) al Manual d'usuari.

També podeu utilitzar altres proveïdors (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o executar models localment amb [Ollama](https://ollama.com). Vegeu [Configuració](#configuration-and-environment) per obtenir la llista completa de proveïdors compatibles i les variables d'entorn.

> ⚠️ **ADVERTÈNCIA**<br/>
> Si utilitzeu Ollama des d'un altre dispositiu, contenidor o servei, recordeu configurar Ollama per permetre connexions externes (no només localhost).


Per a límits, BYOK i més informació, consulteu [autenticació d'OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Configuració i entorn

**Ubicacions del fitxer de configuració**

| Desplegament         | Ubicació de la configuració                      |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (utilitzeu un volum per fer-la persistent) |

<br/>

**Variables d'entorn** (només web/Docker; Electron utilitza el fitxer de configuració local)

| Variable         | Per defecte             | Descripció |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port d'escolta del servidor |
| `CONFIG_PATH`    | `/app/data/config.json` | Ruta al fitxer de configuració |
| `OPENROUTER_API_KEY` | *(buit)*               | Clau d'API d'OpenRouter |
| `OPENAI_API_KEY`     | *(buit)*               | Clau d'API d'OpenAI |
| `CEREBRAS_API_KEY`   | *(buit)*               | Clau d'API de Cerebras |
| `ANTHROPIC_API_KEY`  | *(buit)*               | Clau d'API d'Anthropic |
| `GOOGLE_API_KEY`     | *(buit)*               | Clau d'API de Google Gemini |
| `DEEPSEEK_API_KEY`   | *(buit)*               | Clau d'API de DeepSeek |
| `GROQ_API_KEY`       | *(buit)*               | Clau d'API de Groq |
| `MISTRAL_API_KEY`    | *(buit)*               | Clau d'API de Mistral |
| `OLLAMA_URL`     | *(buit)*               | URL base d'Ollama (p. ex. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(buit)*               | Clau d'API de xAI |

Configureu només els proveïdors que utilitzeu. Els IDs de model estan agrupats per espai de noms (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Mostra del cost:** OpenRouter retorna el cost facturat exacte quan cal. Els altres proveïdors utilitzen un cost **estimat** basat en la tarifa pública de models d'OpenRouter si hi ha una clau d'OpenRouter disponible; en absència d'aquesta, el cost de proveïdors no-OpenRouter pot mostrar-se com a `0`. Aquests estimacions no són factures.

<br/>

**Dades i persistència:** Per a Docker, munteu un volum a `/app/data` per tal que el fitxer `config.json` i la base de dades SQLite es conservin entre reinicialitzacions del contenidor. Sense un volum, totes les dades es perden quan el contenidor s'atura.

**Desenvolupadors:** Després de baixar canvis que substitueixen la configuració antiga d'una sola clau, reinicieu o fogueu `data/config.json` amb la nova forma per defecte de `src/config-defaults/config_default.json` si el vostre fitxer local encara utilitza camps eliminats (`api_key`, `api_url`, opcions de proxy).

<br/>

**Autenticació web:**

- Administrador per defecte: `admin` / `transrewrt26`.
- Gestioneu usuaris a **Configuració → Usuaris**.
- Reinicieu una contrasenya: `docker exec <contenidor> reset-web-password '<usuari>' '<nova-contrasenya>'`
  (des del codi font: `pnpm run reset-web-password -- <usuari> <contrasenya>`)

<br/>

> ⚠️ **ADVERTÈNCIA**<br/>
> Canvieu immediatament la contrasenya d'administrador per defecte en qualsevol ordinador accessible des de la xarxa.

<br/>

Les opcions clau (tipus de lletra, models, idiomes, etc.) es poden configurar a la Configuració de l'aplicació.

<br/><br/>

<a id="development-and-architecture"></a>

## Desenvolupament i arquitectura

- **Desenvolupament:** Configuració, compilació, proves i desplegament (Electron, Web, Docker) - vegeu **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitectura i visió general del sistema:** Estructura de carpetes, tecnologies emprades, decisions de disseny - vegeu **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versions i etiquetes

- Les **etiquetes de Git** `v`* (per exemple, `v1.0.10`) activen el [flux de treball de publicació](.github/workflows/release.yml). Les **Versions de GitHub** inclouen l'instal·lador de Windows (`.exe`) i les AppImages per a Linux (**x64** i **arm64**).
- Les **imatges de Docker** es publiquen a `ghcr.io/wsj-br/transrewrt`. Les etiquetes de les imatges coincideixen amb la versió de Git (per exemple, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) a més de `latest`. Multi-arquitectura: `linux/amd64` i `linux/arm64` (per exemple, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribució

1. Fork del repositori.
2. Creeu una branca de funcionalitat: `git checkout -b feature/my-feature`
3. Feu els commits dels canvis amb un missatge clar.
4. Pujeu els canvis i obriu una sol·licitud d'extracció (Pull Request) cap a `main`.

Si us plau, seguiu l'estil de codi existent i proveu els canvis tant en mode Electron com en mode web abans de fer la seva submissió. Vegeu [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per a les instruccions de compilació i proves.

<br/>

**Informar de problemes:** Obriu un problema a [GitHub](https://github.com/wsj-br/transrewrt/issues). Incloeu la vostra plataforma (Windows / Linux / Docker) i la versió de l'aplicació (mostrada al diàleg Quant a... o a la pàgina de versions).

<br/><br/>

<a id="disclaimer"></a>

## Avís legal

Noms i icones de productes pertanyen als seus respectius propietaris i s'utilitzen només amb finalitats d'identificació. Aquest programari no està afiliat ni avalat per cap de les marques esmentades.

<br/><br/>

<a id="license"></a>
## Llicència

Copyright © 2026 Waldemar Scudeller Jr.

[Llicència Apache 2.0](LICENSE)