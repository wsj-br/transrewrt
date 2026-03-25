---
translated_at: "2026-03-25T22:22:04.705Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logó" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Verzió"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenc: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-alapú szövegfeldolgozó eszköz: nyelvek közötti fordítás, stílusváltás, egyéni utasításokkal történő átalakítás – több AI-szolgáltató használatával (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI és helyi Ollama). Futtatható asztali alkalmazásként (Electron) vagy önállóan futó webalkalmazásként (Docker).

- **Fordítás** — több tucat nyelv között, automatikus forrásnyelv-felismeréssel
- **Átírás** — helyesírás javítása, érthetőség növelése, formális/mendemes, rövidítés, bővítés, technikai stílus
- **Átalakítás** — egyéni AI-utasítások; utasítások létrehozása és kezelése, nyelvcél megadható utasításonként
- **Előzmények** — teljes végrehajtási előzmények, bemenet/kimenet szövegekkel, szűrési lehetőségekkel és exportálással
- **Modellek és költség** — modellek választhatók bármely beállított szolgáltatótól; költség- és használatimérő-eszközök naplózással, összegzésekkel modellek, műveletek és napok szerint
- **Felület** — többnyelvű felhasználói felület (több mint 30 nyelv, RTL támogatással), betűtípusok, ...
- **Web mód** — többfelhasználós támogatás adminisztrátori szerepkörökkel
- **Asztali változat** — Electron alkalmazás Windows és Linux rendszerekre
- **Önállóan futtatható** — Docker kép amd64 & arm64 architektúrákhoz (Raspberry Pi-kompatibilis)

Telepítés után tekintse meg a **[Felhasználói útmutató](USER-GUIDE.hu.md)** minden funkció bemutatását.

<small>**Más nyelveken is elérhető:** [English (UK)](README.hu.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Megjegyzés a felhasználói felület és a dokumentáció fordításához:** Az eredeti angol (UK) nyelven kívüli összes felület fordítása mesterséges intelligenciát használt; a szöveg fordítása pontatlan vagy hibás lehet.

</small>

<br/>

<a id="screenshots"></a>
## Képernyőképek

**Nyelvválasztó**

![Nyelvválasztó](../images/screenshots/hu/language-selector.png)

**Fordítás**

![Fordítás](../images/screenshots/hu/translate.png)

**Átalakítás – utasítás szerkesztő**

![Átalakítás – utasítás szerkesztő](../images/screenshots/hu/transform-prompt-edit.png)

**Vezérlőpult**

![Költségmérő vezérlőpult](../images/screenshots/hu/dashboard-summary.png)

**Előzmények**

![Előzmények](../images/screenshots/hu/history.png)

**Beállítások – modell kiválasztása**

![Beállítások – modell kiválasztása](../images/screenshots/hu/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Tartalomjegyzék

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Gyors indítás](#quick-start)
- [Telepítés](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [OpenRouter API-kulcs beszerzése](#getting-an-openrouter-api-key)
- [Konfiguráció és környezet](#configuration-and-environment)
- [Fejlesztés és architektúra](#development-and-architecture)
- [Kiadások és címkék](#releases-and-tags)
- [Közreműködés](#contributing)
- [Felelősség kizárása](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Gyors indítás

**Docker (ajánlott önálló üzemeltetéshez)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Helyettesítse be a `sk-or-your-key` részt a saját [OpenRouter API-kulcsával](https://openrouter.ai/keys) (vagy állítson be más szolgáltatói kulcsokat; lásd: [Konfiguráció](#configuration-and-environment)). Nyissa meg a [http://localhost:5000](http://localhost:5000) címet, és szolgáltatás elérhetővé tétele előtt módosítsa az alapértelmezett admin jelszót.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Dockerben az LLM-hitelesítő adatok környezeti változókkal (például `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, …) vannak beállítva (nem a webes felhasználói felületen). Asztali (Electron) verzióban pedig a **Beállítások → API** menüpontban.

<br/>

**Windows**

Töltse le a legfrissebb `Transrewrt Setup x.y.z.exe` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldaláról, futtassa a telepítőt, majd indítsa el a Start menüből vagy munkaasztali hivatkozásból. Adja meg az API-kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót konfigurálnia kell, az OpenRouter a leggyakoribb ingyenes modellekhez.

<br/>

**Linux**

Töltse le a CPU-nak megfelelő `.AppImage` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldaláról (`x64` tipikus PC-khez, `arm64` sok ARM-eszközhöz, beleértve a Raspberry Pi 4+-t is), majd:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Adja meg az API-kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót konfigurálnia kell, az OpenRouter a leggyakoribb ingyenes modellekhez.

Debian/Ubuntu esetén előfordulhat, hogy először további függőségeket kell telepítenie:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Részletekért lásd: [Telepítés → Linux](#linux-electron).

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Jelenleg macOS nincs támogatva. A Transrewrt Windowsra, Linuxra és Dockerre érhető el.

<br/>

Miután az alkalmazás fut, olvassa el a **[Felhasználói útmutatót](USER-GUIDE.hu.md)**, hogy megtanulja, hogyan fordíthat, írhat át és alakíthat szöveget, hogyan kezelheti a promptokat, valamint hogyan konfigurálhatja a modelleket.

<br/><br/>

<a id="installation"></a>
## Telepítés

<a id="windows-electron"></a>
### Windows (Electron)

- Töltse le a legfrissebb telepítőt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldaláról.
- Futtassa a `.exe` fájlt, és kövesse a telepítő utasításait.
- Első indításkor: indítsa el az alkalmazást a Start menüből vagy munkaasztali hivatkozásból.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Töltse le a megfelelő `.AppImage` fájlt (`x64` vagy `arm64`) a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldaláról.
- Futtassa: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 gépeken, vagy használja az `...-arm64.AppImage` fájlnevet ARM64 rendszereken.
- További függőségek (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- További információk: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Letöltés: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Állítson be legalább egy szolgáltatói kulcsot környezeti változóban (például `OPENROUTER_KEY` az OpenRouterhez). A változókat az `-e` kapcsolóval vagy `docker compose` / `.env` fájllal adja át, hogy a bizalmas adatok ne kerüljenek a képbe.
- A szolgáltatói kulcsokat **nem** a webes felhasználói felületen adja meg; a szerver a környezetből olvassa őket.

Példa - elnevezett kötet az adatmegőrzéshez (OpenRouter kulcs környezeti változóban):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Beállítás | Leírás                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (lehet átirányítani a `-p 5000:5000` kapcsolóval)                                                                              |
| Kötet   | Csatolja a `/app/data` mappát a konfiguráció és az adatbázis megőrzéséhez                                                         |
| Környezeti változók | `PORT`, `CONFIG_PATH`, valamint LLM kulcsok (`OPENROUTER_KEY`, `OPENAI_KEY`, …) – lásd: [Konfiguráció](#configuration-and-environment) |

Forráskódból történő buildelés és futtatás: `docker compose up --build -d` vagy `pnpm docker:up` – lásd: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API-kulcs beszerzése

A Transrewrt több AI-szolgáltatót támogat. Az [OpenRouter](https://openrouter.ai) egy népszerű választás, mert sok modellt egyetlen kulccsal elérhetővé tesz, és ingyenes modelleket is kínál.

1. Regisztrálj vagy jelentkezz be az [openrouter.ai](https://openrouter.ai) oldalon.
2. Nyisd meg a [Kulcsok](https://openrouter.ai/keys) oldalt, és hozz létre egy új kulcsot (nevezd el, és opcionálisan állíts be hitelkorlátot). Ingyenes modelleket használhatsz hitel hozzáadása nélkül.
3. **Asztali (Electron):** illeszd be a kulcsot a **Beállítások → API** menüpontban. **Docker:** állítsd be a környezeti változókat (pl. `OPENROUTER_KEY`, lásd: [Gyors indítás](#quick-start)).

Ne használd az OpenRouter **Body Builder** modelljét ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) fordításhoz, átíráshoz vagy átalakításhoz: ez a modell JSON kérésfeladatot ad vissza, nem a feladatokhoz tartozó befejezett szöveget. Lásd: [Beállítások → Modellek](USER-GUIDE.hu.md#models) a Felhasználói útmutatóban.

Más szolgáltatókat is használhatsz (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras), vagy helyben futtathatsz modelleket az [Ollama](https://ollama.com) segítségével. Lásd: [Konfiguráció](#configuration-and-environment) a támogatott szolgáltatók teljes listájáért és a környezeti változókért.

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Ha az Ollama-t más eszközön, konténerben vagy szolgáltatásban használod, győződj meg róla, hogy az Ollama engedélyezi a külső kapcsolatokat (ne csak localhost-on legyen elérhető).

Korlátokra, saját kulcs használatára (BYOK) és egyebekre lásd az [OpenRouter hitelesítés](https://openrouter.ai/docs/api/reference/authentication) dokumentációját.

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguráció és környezet

**Konfigurációs fájlok helye**

| Telepítés         | Konfiguráció helye                                  |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (kötést használj az adatmegőrzéshez) |

<br/>

**Környezeti változók** (csak web/Docker esetén; az Electron a helyi konfigurációs fájlt használja)

| Változó         | Alapértelmezett           | Leírás |
| ---------------- | ------------------------- | ------ |
| `PORT`           | `5000`                    | Szerver figyelő portja |
| `CONFIG_PATH`    | `/app/data/config.json`   | A konfigurációs fájl elérési útja |
| `OPENROUTER_KEY` | *(üres)*                  | OpenRouter API-kulcs |
| `OPENAI_KEY`     | *(üres)*                  | OpenAI API-kulcs |
| `CEREBRAS_KEY`   | *(üres)*                  | Cerebras API-kulcs |
| `ANTHROPIC_KEY`  | *(üres)*                  | Anthropic API-kulcs |
| `GOOGLE_KEY`     | *(üres)*                  | Google Gemini API-kulcs |
| `DEEPSEEK_KEY`   | *(üres)*                  | DeepSeek API-kulcs |
| `GROQ_KEY`       | *(üres)*                  | Groq API-kulcs |
| `MISTRAL_KEY`    | *(üres)*                  | Mistral API-kulcs |
| `OLLAMA_URL`     | *(üres)*                  | Ollama alap URL-je (pl. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(üres)*                  | xAI API-kulcs |

Csak az általad használt szolgáltatókat konfiguráld. A modellazonosítók névteresek (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, stb.).

**Költsékmegjelenítés:** Az OpenRouter indokolt esetben a ténylegesen felszámított költséget adja vissza. Más szolgáltatók esetében az **becsült** költség jelenik meg az OpenRouter nyilvános árazása alapján, amennyiben rendelkezésre áll OpenRouter-kulcs; ha nincs, más szolgáltatók költsége `0` lehet. A becslések nem számlák.

<br/>

**Adatok és adatmegőrzés:** Docker esetén kösd be egy kötetet a `/app/data` helyre, hogy a `config.json` és az SQLite adatbázis megmaradjon a konténer újraindításai között. Kötet nélkül minden adat elveszik, amikor a konténer leáll.

**Fejlesztőknek:** Ha frissítést hajtasz végre, amely lecseréli a régi egyetlen kulcsos konfigurációt, akkor add vissza vagy egyesítsd a `data/config.json` fájlt az új alapértelmezett szerkezettel a `src/config-defaults/config_default.json` fájlból, ha a helyi fájlod még használja a megszűnt mezőket (`api_key`, `api_url`, proxybeállítások).

<br/>

**Webes hitelesítés:**

- Alapértelmezett admin: `admin` / `transrewrt26`.
- Felhasználók kezelése: **Beállítások → Felhasználók**.
- Jelszó visszaállítása: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (forráskódból: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Azonnal változtasd meg az alapértelmezett admin jelszót minden hálózaton elérhető gépen.

<br/>

A kulcsbeállítások (betűtípus, modellek, nyelvek, stb.) az alkalmazás Beállítások menüpontjában érhetők el.

<br/><br/>

<a id="development-and-architecture"></a>

## Fejlesztés és architektúra

- **Fejlesztés:** Telepítés, fordítás, tesztelés és üzembe helyezés (Electron, Web, Docker) – lásd a **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** dokumentumot.
- **Architektúra és rendszeráttekintés:** Mappastruktúra, technológiai stack, tervezési döntések – lásd a **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** dokumentumot.

<br/><br/>

<a id="releases-and-tags"></a>
## Kiadások és címkék

- A **Git címkék** `v`* formátumúak (pl. `v1.0.10`) és a [kiadási munkafolyamatot](.github/workflows/release.yml) indítják el. A **GitHub Kiadások** tartalmazzák a Windows telepítőt (`.exe`) és Linux AppImage-eket (**x64** és **arm64**).
- A **Docker képek** a `ghcr.io/wsj-br/transrewrt` tárhelyre kerülnek. A képcímkék a Git verzióval megegyezőek (pl. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) és kiegészülnek a `latest` címkével. Több platformon használható: `linux/amd64` és `linux/arm64` (pl. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Közreműködés

1. Készíts egy másolatot a tárhelyről (fork).
2. Hozz létre egy új funkcióággat: `git checkout -b feature/my-feature`
3. Készíts commitot a változásaidról egyértelmű üzenettel.
4. Küldd fel a módosításokat, majd nyiss egy Pull Requestet a `main` ágra.

Kérjük, kövesd az aktuális kódstílust, és teszteld a változtatásaidat Electron és webes módban is beküldés előtt. A fordítási és tesztelési utasításokat lásd a [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) fájlban.

<br/>

**Hibajelentések:** Nyiss hibajegyet a [GitHubon](https://github.com/wsj-br/transrewrt/issues). Add meg a platformodat (Windows / Linux / Docker) és az alkalmazás verzióját (amely az „Névjegy” ablakban vagy a Kiadások oldalon található).

<br/><br/>

<a id="disclaimer"></a>
## Felelősségi nyilatkozat

A terméknevek és ikonok a jogosultak tulajdonát képezik, kizárólag azonosítási céllal kerülnek felhasználásra. Ez a szoftver nem kapcsolódik semmilyen módon, sem támogatást nem kap a megemlített márkákhoz.

<br/><br/>

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)