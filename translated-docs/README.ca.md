---
translated_at: "2026-03-24T01:10:01.027Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logotip de Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Versió"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Llicència: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Eina de text amb IA: tradueix entre idiomes, reescriu en diferents estils i transforma amb indicacions personalitzades — utilitzant múltiples proveïdors d’IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i Ollama local). Funciona com a aplicació d’escriptori (Electron) o com a aplicació web autoallotjada (Docker).

- **Traduir** — entre desenes d’idiomes, amb detecció automàtica de l’idioma d’origen
- **Reescriure** — corregir gramàtica, millorar la claredat, formal/informal, resumir, estendre, tècnic
- **Transformar** — indicacions personalitzades d’IA; crea i gestiona indicacions, idioma de destinació opcional per a cada indicació
- **Historial** — historial complet d’execucions amb text d’entrada i sortida, filtres i exportació
- **Models i costos** — tria models de qualsevol proveïdor configurat; tauler de control de costos amb registre SQLite, resums per model/operació/dia
- **Interfície** — interfície multilingüe (més de 30 idiomes, suport RTL), tipografies, ...
- **Mode web** — suport multiusuari amb rols d’administrador; les claus d’API romanen al servidor, mai exposades al navegador
- **Escriptori** — aplicació Electron per a Windows i Linux
- **Autoallotjat** — imatge Docker per a amd64 i arm64 (preparat per Raspberry Pi)

Un cop instal·lat, consulta la **[Guia d’usuari](USER-GUIDE.ca.md)** per obtenir una descripció completa de totes les funcionalitats.

<small>**Llegeix en altres idiomes:** [Anglès (UK)](README.ca.md) · [Portuguès (BR)](README.pt-BR.md) · [Àrab](README.ar.md) · [Bengalí](README.bn.md) · [Català](README.ca.md) · [Xinès simplificat](README.zh-CN.md) · [Xinès tradicional](README.zh-TW.md) · [Croata](README.hr.md) · [Txec](README.cs.md) · [Neerlandès](README.nl.md) · [Anglès (US)](README.en-US.md) · [Filipí](README.tl.md) · [Francès](README.fr.md) · [Alemany](README.de.md) · [Grec](README.el.md) · [Hindi](README.hi.md) · [Hongarès](README.hu.md) · [Italià](README.it.md) · [Japonès](README.ja.md) · [Javanès](README.jv.md) · [Coreà](README.ko.md) · [Malai](README.ms.md) · [Persa](README.fa.md) · [Polonès](README.pl.md) · [Portuguès (PT)](README.pt.md) · [Panjabi](README.pa.md) · [Romanès](README.ro.md) · [Rus](README.ru.md) · [Eslovac](README.sk.md) · [Castellà](README.es.md) · [Swahili](README.sw.md) · [Suec](README.sv.md) · [Telugu](README.te.md) · [Tailandès](README.th.md) · [Turc](README.tr.md) · [Ucraïnès](README.uk.md) · [Vietnamita](README.vi.md)</small>


<br/>

**Nota sobre les traduccions de la interfície i la documentació:** Tots els idiomes de la interfície, excepte l’anglès (UK), han estat traduïts mitjançant models d’IA; l’expressió pot ser imprecisa o contenir errors.



<a id="screenshots"></a>
## Captures de pantalla

**Selector d’idiomes**

![Selector d’idiomes](../images/screenshots/ca/language-selector.png)

**Traduir**

![Traduir](../images/screenshots/ca/translate.png)

**Transformar - editor d’indicacions**

![Transformar - editor d’indicacions](../images/screenshots/ca/transform-prompt-edit.png)

**Tauler de control**

![Tauler de control de costos](../images/screenshots/ca/dashboard-summary.png)

**Historial**

![Historial](../images/screenshots/ca/history.png)

**Configuració - selecció de models**

![Configuració - selecció de models](../images/screenshots/ca/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Taula de continguts

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Inici ràpid](#inici-ràpid)
- [Instal·lació](#instal·lació)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obtenció d'una clau API d'OpenRouter](#obtenció-duna-clau-api-dopenrouter)
- [Configuració i entorn](#configuració-i-entorn)
- [Desenvolupament i arquitectura](#desenvolupament-i-arquitectura)
- [Llençaments i etiquetes](#llençaments-i-etiquetes)
- [Col·laboració](#col·laboració)
- [Avís legal](#avís-legal)
- [Llicència](#llicència)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="inici-ràpid"></a>
## Inici ràpid

**Docker (recomanat per autoallotjament)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Substituïu `sk-or-your-key` per la vostra [clau API d'OpenRouter](https://openrouter.ai/keys) (o configureu claus d'altres proves; vegeu [Configuració](#configuració-i-entorn)). Obriu [http://localhost:5000](http://localhost:5000) i canvieu la contrasenya d'administrador per defecte abans d'exposar el servei.

<br/>

> ℹ️ **NOTA**<br/>
> Amb Docker, les credencials dels LLM es configuren mitjançant variables d'entorn com ara `OPENROUTER_KEY`, `OPENAI_KEY`, … (no a través de la interfície web). Amb l'aplicació d'escriptori (Electron) les claus es configuren a **Configuració → API**.

<br/>

**Windows**

Baixeu l'última versió de `Transrewrt Setup x.y.z.exe` des de [Llençaments](https://github.com/wsj-br/transrewrt/releases), executeu el programa d'instal·lació i llanceu l'aplicació des del menú d'inici o l'accés directe d'escriptori. Introduïu les claus API a **Configuració → API**. Cal configurar almenys un proveïdor; OpenRouter és habitual per a models gratuïts.

<br/>

**Linux**

Baixeu el fitxer `.AppImage` des de [Llençaments](https://github.com/wsj-br/transrewrt/releases), i després:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Introduïu les claus API a **Configuració → API**. Cal configurar almenys un proveïdor; OpenRouter és habitual per a models gratuïts.

A Debian/Ubuntu potser calgui instal·lar dependències addicionals:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Vegeu [Instal·lació → Linux](#linux-electron) per més detalls.

<br/>

> ℹ️ **NOTA**<br/>
> macOS no està suportat actualment. Transrewrt està disponible per a Windows, Linux i Docker.

<br/>

Un cop l'aplicació estigui en marxa, consulteu el **[Guia d'usuari](USER-GUIDE.ca.md)** per aprendre a traduir, reescriure i transformar textos, gestionar indicacions i configurar models.

<br/><br/>

<a id="instal·lació"></a>
## Instal·lació

<a id="windows-electron"></a>
### Windows (Electron)

- Baixeu el darrer instal·lador des de [Llençaments](https://github.com/wsj-br/transrewrt/releases).
- Executeu el fitxer `.exe` i seguiu les instruccions de l'instal·lador.
- Primera execució: inicieu l'aplicació des del menú d'inici o un accés directe d'escriptori.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Baixeu el fitxer `.AppImage` des de [Llençaments](https://github.com/wsj-br/transrewrt/releases).
- Executeu: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Dependències addicionals (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Vegeu [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per més informació.

<br/>

<a id="docker"></a>
### Docker

- Baixeu: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Configureu almenys una clau de proveïdor mitjançant variables d'entorn (per exemple `OPENROUTER_KEY` per a OpenRouter). Passeu les variables amb `-e` o `docker compose` / `.env` per tal que les contrasenyes no quedin incrustades a la imatge.
- Les claus del proveïdor **no** s'introdueixen a la interfície web; el servidor les llegeix des de l'entorn.

Exemple - volum amb nom per persistència (clau OpenRouter via entorn):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opció   | Descripció                                                                                                |
| -------- | ---------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (assigneu amb `-p 5000:5000`)                                                                       |
| Volum    | Montegeu `/app/data` per a la persistència de configuració i base de dades                                 |
| Variables d'entorn | `PORT`, `CONFIG_PATH`, i claus de LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - vegeu [Configuració](#configuració-i-entorn) |

Per compilar i executar des del codi font: `docker compose up --build -d` o `pnpm docker:up` - vegeu [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="obtenció-duna-clau-api-dopenrouter"></a>

## Com obtenir una clau API d'OpenRouter

Transrewrt admet diversos proveïdors d'IA. [OpenRouter](https://openrouter.ai) és una opció popular perquè agrega molts models sota una única clau i ofereix models gratuïts.

1. Registreu-vos o inicieu sessió a [openrouter.ai](https://openrouter.ai).
2. Obriu la pàgina de [Claus](https://openrouter.ai/keys) i creeu una nova clau (doneu-li un nom i, opcionalment, establiu un límit de crèdit). Podeu utilitzar models gratuïts sense afegir crèdit.
3. **Ordinador (Electron):** enganxeu les claus a **Configuració → API**. **Docker:** definiu variables d'entorn com ara `OPENROUTER_KEY` (vegeu [Inici ràpid](#quick-start)).

També podeu utilitzar altres proveïdors (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) o executar models localment amb [Ollama](https://ollama.com). Vegeu [Configuració](#configuration-and-environment) per obtenir la llista completa de proveïdors suportats i variables d'entorn.

Per a límits, BYOK i més informació, consulteu [Autenticació d'OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuració i entorn

**Ubicacions del fitxer de configuració**

| Desplegament       | Ubicació de la configuració                      |
| ------------------ | ------------------------------------------------ |
| Electron (Windows) | `%APPDATA%\transrewrt\`                          |
| Electron (Linux)   | `~/.config/transrewrt/`                          |
| Web / Docker       | `/app/data/config.json` (utilitzeu un volum per persistir) |

<br/>

**Variables d'entorn** (només web/Docker; Electron utilitza el fitxer de configuració local)

| Variable         | Per defecte             | Descripció |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port d'escolta del servidor |
| `CONFIG_PATH`    | `/app/data/config.json` | Ruta al fitxer de configuració |
| `OPENROUTER_KEY` | *(buit)*                | Clau API d'OpenRouter |
| `OPENAI_KEY`     | *(buit)*                | Clau API d'OpenAI |
| `ANTHROPIC_KEY`  | *(buit)*                | Clau API d'Anthropic |
| `GOOGLE_KEY`     | *(buit)*                | Clau API de Google Gemini |
| `DEEPSEEK_KEY`   | *(buit)*                | Clau API de DeepSeek |
| `GROQ_KEY`       | *(buit)*                | Clau API de Groq |
| `MISTRAL_KEY`    | *(buit)*                | Clau API de Mistral |
| `OLLAMA_URL`     | *(buit)*                | URL base d'Ollama (p. ex. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(buit)*                | Clau API de xAI |

Configureu només els proveïdors que utilitzeu. Els IDs dels models tenen espai de noms (`openrouter/…`, `openai/…`, `ollama/…`, etc.).

**Visualització de costos:** OpenRouter retorna el cost facturat exacte quan escau. Els altres proveïdors utilitzen un cost **estimat** basat en els preus públics dels models d'OpenRouter si hi ha una clau d'OpenRouter disponible; si no, el cost dels altres proveïdors pot mostrar-se com a `0`. Els estimats no són factures.

<br/>

**Dades i persistència:** Per a Docker, munteu un volum a `/app/data` perquè `config.json` i la base de dades SQLite persisteixin entre reinicialitzacions del contenidor. Sense un volum, totes les dades es perden quan s'atura el contenidor.

**Desenvolupadors:** Després d'actualitzar canvis que substitueixen l'antiga configuració basada en una sola clau, restabliu o combineu `data/config.json` amb la nova estructura per defecte de `src/config-defaults/config_default.json` si el vostre fitxer local encara fa servir camps eliminats (`api_key`, `api_url`, opcions de proxy).

<br/>

**Autenticació web:**

- Administrador per defecte: `admin` / `transrewrt26`.
- Gestioneu usuaris a **Configuració → Usuaris**.
- Reinicieu una contrasenya: `docker exec <contenidor> reset-web-password '<nom_usuari>' '<nova_contrasenya>'`
  (des del codi font: `pnpm run reset-web-password -- <nom_usuari> <nova_contrasenya>`)

<br/>

> ⚠️ **AVÍS**<br/>
> Canvieu immediatament la contrasenya per defecte de l'administrador en qualsevol equip accessible per xarxa.

<br/>

Els principals paràmetres (tipus de lletra, models, idiomes, etc.) es troben a la configuració de l'aplicació.

<br/><br/>

<a id="development-and-architecture"></a>
## Desenvolupament i arquitectura

- **Desenvolupament:** Configuració, construcció, proves i desplegament (Electron, Web, Docker) - consulteu **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitectura i visió general del sistema:** Estructura de carpetes, tecnologies, decisions de disseny - consulteu **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Versions i etiquetes

- Les **etiquetes de Git** `v`* (per exemple, `v1.0.10`) activen el [flux de treball de publicació](.github/workflows/release.yml). Les **publicacions de GitHub** inclouen el programa d'instal·lació per a Windows (`.exe`) i l'AppImage per a Linux.
- Les **imatges de Docker** es publiquen a `ghcr.io/wsj-br/transrewrt`. Les etiquetes de les imatges coincideixen amb la versió de Git (per exemple, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), a més de l'etiqueta `latest`. Multi-arquitectura: `linux/amd64` i `linux/arm64` (per exemple, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribució

1. Crea un fork del repositori.
2. Crea una branca de funcionalitat: `git checkout -b feature/my-feature`
3. Fes un commit dels canvis amb un missatge clar.
4. Puja els canvis i obre una sol·licitud d'incorporació (Pull Request) cap a `main`.

Si us plau, segueix l'estil de codi existent i prova els canvis tant en mode Electron com en mode web abans de presentar-los. Consulta [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) per obtenir instruccions de compilació i proves.

<br/>

**Informar de problemes:** Obre una incidència a [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclou la teva plataforma (Windows / Linux / Docker) i la versió de l'aplicació (mostrada al diàleg "Quant a" o a la pàgina de versions). 

<br/><br/>

<a id="disclaimer"></a>
## Avís legal

Els noms i icones de productes pertanyen als seus respectius propietaris i s'utilitzen només amb finalitats d'identificació. Aquest programari no està afiliat ni endosat per cap de les marques esmentades.

<br/><br/>

<a id="license"></a>
## Llicència

Copyright © 2026 Waldemar Scudeller Jr.

[Llicència Apache 2.0](LICENSE)