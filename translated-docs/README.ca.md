---
translation_last_updated: '2026-03-31T23:40:59.467Z'
source_file_mtime: '2026-03-31T23:34:44.122Z'
source_file_hash: 4c9fbb976bec3529
translation_language: ca
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Versió"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Llicència: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Eina de text amb IA: tradueix entre idiomes, reescriu en diferents estils i transforma amb prompts personalitzats — utilitzant diversos proveïdors d'IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i Ollama local). Funciona com a aplicació d'escriptori (Electron) o com a aplicació web autoallotjada (Docker).

- **Tradueix** — entre desenes d'idiomes, amb detecció automàtica de l'idioma d'origen
- **Reescriptura** — corregeix gramàtica, millora la claredat, formal/informal, escurça, amplia, tècnic
- **Transformació** — prompts personalitzats d'IA; crea i gestiona prompts, idioma de destinació opcional per a cada prompt
- **Historial** — historial complet d'execucions amb text d'entrada/sortida, filtres i exportació
- **Models i cost** — tria models de qualsevol proveïdor configurat; taulells de cost i ús amb registre, resums per model/operació/dia
- **Interfície d'usuari** — interfície multilingüe (més de 30 idiomes, suport RTL), tipus de lletra, ...
- **Mode web** — suport multiusuari amb rols d'administrador
- **Escriptori** — aplicació Electron per a Windows i Linux
- **Autoallotjat** — imatge Docker per a amd64 i arm64 (preparat per Raspberry Pi)

Un cop instal·lat, consulta la **[Guia d'usuari](USER-GUIDE.ca.md)** per una descripció completa de totes les funcions.

<small>**Llegiu en altres idiomes:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sobre les traduccions de la interfície i la documentació:** Tots els idiomes de la interfície excepte l'anglès (RU) original
> s'han traduït mitjançant models d'IA; l'expressió pot ser imprecisa o contenir errors.

</small>

<br/>

<a id="screenshots"></a>
## Captures de pantalla

**Selector d'idioma**

![Language selector](../images/screenshots/ca/language-selector.png)

**Tradueix**

![Translate](../images/screenshots/ca/translate.png)

**Transformació - editor de prompts**

![Transform - prompt editor](../images/screenshots/ca/transform-prompt-edit.png)

**Tauler**

![Dashboard summary — usage](../images/screenshots/ca/dashboard-summary.png)

**Historial**

![History](../images/screenshots/ca/history.png)

**Configuració - selecció de model**

![Settings - model selection](../images/screenshots/ca/settings-models.png)

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
  - [Configuració del fus horari](#configuring-the-timezone)
- [Obtenció d'una clau API d'OpenRouter](#getting-an-openrouter-api-key)
- [Configuració i entorn](#configuration-and-environment)
- [Desenvolupament i arquitectura](#development-and-architecture)
- [Informació de problemes](#reporting-issues)
- [Avís legal](#disclaimer)
- [Llicència](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Inici ràpid

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

Substituïu `sk-or-your-key` per la vostra [clau API d'OpenRouter](https://openrouter.ai/keys) (o configureu claus d'altres proveïdors; vegeu [Configuració](#configuration-and-environment)). Obriu [http://localhost:5000](http://localhost:5000) i canvieu la contrasenya d'admin predeterminada abans d'exposar el servei.

<br/>

> ℹ️ **NOTA**<br/>
> A Docker, les credencials dels LLM es configuren amb variables d'entorn com ara `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (no a la interfície web). A l'escriptori (Electron) configureu les claus a **Configuració → API**.

<br/>

**Windows**

Baixeu l'últim `Transrewrt Setup x.y.z.exe` de [Llançaments](https://github.com/wsj-br/transrewrt/releases), executeu el programa d'instal·lació i llanceu-lo des del menú Inici o l'accés directe d'escriptori. Introduïu les vostres claus API a **Configuració → API**. Heu de configurar com a mínim un proveïdor; OpenRouter és habitual per a models gratuïts.

<br/>

**Linux**

Baixeu el fitxer `.AppImage` per al vostre CPU des de [Llançaments](https://github.com/wsj-br/transrewrt/releases) (`x64` per a ordinadors típics, `arm64` per a molts dispositius ARM, incloent Raspberry Pi 4+), i després:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduïu les vostres claus API a **Configuració → API**. Heu de configurar com a mínim un proveïdor; OpenRouter és habitual per a models gratuïts.

**Missatges de la consola:** Les versions empaquetades per a Linux (`x64` i `arm64` AppImages) suprimeixen les advertències de desaprofitament de Node al terminal (per exemple, el mòdul integrat `punycode`). Si Chromium mostra errors de GPU / EGL com ara «GLES3 no és compatible», però l'aplicació funciona, podeu silenciar-los desactivant l'acceleració per maquinari:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Això s'aplica també a amd64; canvieu el nom del fitxer perquè coincideixi amb la vostra descàrrega. Consulteu [Instal·lació → Linux (Electron)](#linux-electron) per obtenir més detalls.

En Debian/Ubuntu potser necessiteu **biblioteques de temps d'execució** addicionals que Chromium espera (sovint ja presents en escriptoris complets). Utilitzeu **`libnotify4`** per a les notificacions d'escriptori—**no** `libnotify-dev` (això és per compilar programari, no per executar l'AppImage empaquetat):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Les imatges mínimes o personalitzades poden continuar fallant per un `.so` que falta; instal·leu el paquet que indica l'error (extras habituals: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Alguns entorns necessiten FUSE per executar AppImages (per exemple, `libfuse2` a Ubuntu 22.04+), o utilitzeu `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **NOTA**<br/>
> macOS no és compatible actualment. Transrewrt està disponible per a Windows, Linux i Docker.

<br/>

Un cop l'aplicació estigui en funcionament, consulteu la **[Guia d'usuari](USER-GUIDE.ca.md)** per aprendre com traduir, reescriure i transformar text, gestionar indicacions i configurar models.

<br/><br/>

<a id="installation"></a>
## Instal·lació

<a id="windows-electron"></a>
### Windows (Electron)

- Baixeu l'instal·lador més recent des de [Llançaments](https://github.com/wsj-br/transrewrt/releases).
- Executeu el fitxer `.exe` i seguiu les instruccions de l'instal·lador.
- Primer ús: inicieu l'aplicació des del menú Inici o l'accés directe d'escriptori.

<br/>

> ℹ️ **NOTA**<br/>
> Windows pot mostrar una d'aquestes advertències de seguretat (normal per a aplicacions no signades o independents):
>   - **Control de comptes d'usuari (UAC)**: "Voleu permetre que aquesta aplicació d'un editor desconegut realitzi canvis al vostre dispositiu?" → Feu clic a **Sí**.
>   - **Microsoft Defender SmartScreen**: "Windows ha protegit el vostre PC" → Feu clic a **Més informació** → **Executa igualment**.
>
> Això passa perquè l'aplicació no està signada per Microsoft ni per un editor important—és segura si es descarrega des de les nostres versions oficials de GitHub
>  (verifiqueu la suma de comprovació SHA256 a continuació).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descarregueu l'arxiu `.AppImage` corresponent (`x64` o `arm64`) de [Versions](https://github.com/wsj-br/transrewrt/releases).
- Executeu: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` en x86_64/amd64, o utilitzeu el nom d'arxiu `...-arm64.AppImage` en ARM64.
- **Biblioteques de temps d'execució Debian/Ubuntu** (Electron/Chromium; igual que a [Inici ràpid → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — utilitzeu **`libnotify4`**, no `libnotify-dev`. En sistemes mínims, instal·leu qualsevol `.so` que falte i que es mostri al terminal; sovint calen complements com `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`. L'AppImage pot necessitar `libfuse2` (Ubuntu 22.04+) o `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Missatges de GPU:** Chromium pot registrar errors d'inicialització de GPU o EGL en alguns sistemes (especialment ARM); l'aplicació pot continuar funcionant normalment. Per evitar aquests missatges, executeu-ho amb l'acceleració per maquinari desactivada: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (o el vostre nom d'arxiu `arm64`).

<br/>

<a id="docker"></a>
### Docker

- Descarrega: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Estableix com a mínim una clau de proveïdor mitjançant variables d'entorn (per exemple `OPENROUTER_API_KEY` per a OpenRouter). Passa les variables amb `-e` o mitjançant `docker compose` / `.env` perquè els secrets no quedin incrustats a la imatge.
- Les claus dels proveïdors **no** s'introdueixen a la interfície web; el servidor les llegeix des de l'entorn.

Exemple - volum amb nom per a persistència (clau OpenRouter via entorn):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

o si prefereixes utilitzar Docker Compose, utilitza:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Consulta [Configuració](#configuration-and-environment) per a totes les variables d'entorn, com ara `PORT`, `CONFIG_PATH`, `TZ` i claus de LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>
### Configuració del fus horari

La data i hora de la interfície d'usuari segueixen la configuració regional i el fus horari del **navegador**. Pel que fa al comportament del **servidor** (registre d'activitats i similar), el contenidor utilitza la variable d'entorn `TZ`. El valor predeterminat és `TZ=Europe/London`.

Per utilitzar un altre fus horari, estableix `TZ` al fitxer Compose, per exemple:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

O passa-la quan executa el contenidor (Docker):

```bash
--env TZ=America/Sao_Paulo
```

En molts sistemes Linux pots copiar el nom del fus horari del sistema amb:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Una llista de noms de fusos horaris vàlids es manté a la [base de dades tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Com obtenir una clau API d'OpenRouter

Transrewrt admet diversos proveïdors d'IA. [OpenRouter](https://openrouter.ai) és una opció popular perquè agrega molts models sota una sola clau i ofereix models gratuïts.

1. Registra't o inicia sessió a [openrouter.ai](https://openrouter.ai).
2. Obre la pàgina de [Keys](https://openrouter.ai/keys) i crea una nova clau (anomena-la, i opcionalment estableix un límit de crèdit). Pots utilitzar models gratuïts sense afegir crèdit.
3. **Escriptori (Electron):** enganxa les claus a **Configuració → API**. **Docker:** estableix variables d'entorn com ara `OPENROUTER_API_KEY` (consulta [Inici ràpid](#quick-start)).

No utilitzeu el model **Body Builder** d'OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) per traduir, reescriure o transformar: retorna càrregues útils JSON de sol·licitud, no el text completat per a aquestes tasques. Consulteu [Configuració → Models](USER-GUIDE.ca.md#models) al Manual d'usuari.

També pots utilitzar altres proveïdors (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o executar models localment amb [Ollama](https://ollama.com). Consulta [Configuració](#configuration-and-environment) per a la llista completa de proveïdors suportats i variables d'entorn.

> ⚠️ **ADVERTÈNCIA**<br/>
> Si esteu utilitzant Ollama des d'un altre dispositiu, contenidor o servei, recordeu configurar Ollama per permetre connexions externes (no només localhost).

Per a límits, BYOK i més, vegeu [autenticació d'OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuració i entorn

**Ubicacions del fitxer de configuració**

| Desplegament         | Ubicació de la configuració                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (useu un volum per mantenir-lo) |

<br/>

**Variables d'entorn** (només web/Docker; Electron utilitza el fitxer de configuració local)

| Variable             | Descripció                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Port d'escolta del servidor (per defecte `5000`)                             |
| `CONFIG_PATH`        | Ruta al fitxer de configuració (per defecte `/app/data/config.json`)         |
| `TZ`                 | Fus horari per a l'hora del servidor (registres, etc.) (per defecte `Europe/London`) |
| `OPENROUTER_API_KEY` | Clau API d'OpenRouter                                                        |
| `OPENAI_API_KEY`     | Clau API d'OpenAI                                                            |
| `CEREBRAS_API_KEY`   | Clau API de Cerebras                                                         |
| `ANTHROPIC_API_KEY`  | Clau API d'Anthropic                                                         |
| `GOOGLE_API_KEY`     | Clau API de Google Gemini                                                    |
| `DEEPSEEK_API_KEY`   | Clau API de DeepSeek                                                         |
| `GROQ_API_KEY`       | Clau API de Groq                                                             |
| `MISTRAL_API_KEY`    | Clau API de Mistral                                                          |
| `OLLAMA_URL`         | URL base d'Ollama (per exemple, `http://host.docker.internal:11434`)         |
| `XAI_API_KEY`        | Clau API de xAI                                                              |

Configureu només els proveïdors que utilitzeu. Els IDs de model estan amb espai de noms (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Visualització del cost:** OpenRouter retorna el cost facturat exacte quan és aplicable. Altres proveïdors utilitzen el cost **estimat** dels preus públics de models d'OpenRouter quan està disponible una clau d'OpenRouter; sense això, el cost no d'OpenRouter pot mostrar-se com a `0`. Les estimacions no són factures.

<br/>

**Dades i persistència:** Per a Docker, munteu un volum a `/app/data` perquè `config.json` i la base de dades SQLite es mantinguin entre reinicis del contenidor. Sense un volum, totes les dades es perden quan el contenidor s'atura.

**Desenvolupadors:** Després de recuperar canvis que substitueixen la configuració antiga d'una sola clau, reinicieu o combineu `data/config.json` amb la nova forma per defecte de `src/config-defaults/config_default.json` si el vostre fitxer local encara utilitza camps eliminats (`api_key`, `api_url`, opcions de proxy).

<br/>

**Autenticació web:**

- Admin per defecte: `admin` / `transrewrt26`.
- Gestioneu usuaris a **Configuració → Usuaris**.
- Reinicieu una contrasenya: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (des de codi font: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ADVERTÈNCIA**<br/>
> Canvieu immediatament la contrasenya predeterminada d'admin en qualsevol equip accessible per xarxa.

<br/>

Les opcions principals (tipus de lletra, models, idiomes, etc.) estan disponibles a la Configuració de l'aplicació.

<br/><br/>

<a id="development-and-architecture"></a>
## Desenvolupament i arquitectura

- **Desenvolupament:** Configuració, compilació, proves i desplegament (Electron, Web, Docker) - vegeu **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitectura i visió general del sistema:** Estructura de carpetes, tecnologies, decisions de disseny - vegeu **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Informació de problemes

Obriu un problema a [GitHub](https://github.com/wsj-br/transrewrt/issues). Incloeu la vostra plataforma (Windows / Linux / Docker) i la versió de l'aplicació (mostrada al diàleg Quant a o a la pàgina de Llançaments).

<br/><br/>

<a id="disclaimer"></a>
## Avís legal

Els noms dels productes i les icones pertanyen als seus respectius propietaris i s'utilitzen únicament amb finalitats d'identificació. Aquest programari no està afiliat ni patrocinat per cap de les marques esmentades.

<br/><br/>

<a id="license"></a>
## Llicència

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
