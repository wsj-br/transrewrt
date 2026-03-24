---
translated_at: "2026-03-24T01:50:10.265Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logó" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Verzió"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenc: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Mesterséges intelligenciával vezérelt szövegfeldolgozó eszköz: fordítás nyelvek között, stílusváltás és egyéni promptokkal történő átalakítás – több MI-szolgáltatót (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI és helyi Ollama) használva. Asztali alkalmazásként (Electron) vagy önállóan üzemeltetett webalkalmazásként (Docker) futtatható.

- **Fordítás** — tucatnyi nyelv között, automatikus forrásnyelv-felismeréssel
- **Átírás** — helyesírás-javítás, világosabbá tétel, formális/társalgási stílus, rövidítés, bővítés, technikai leírás
- **Átalakítás** — egyéni MI promptok; promptok készítése és kezelése, lehetőség célnyelv megadására promptonként
- **Előzmények** — teljes végrehajtási előzmény a bemeneti/kimeneti szövegekkel, szűrési lehetőséggel és exportálással
- **Modellek és költségek** — modellválasztás bármely beállított szolgáltatóból; költségfelügyeleti irányítópult SQLite naplózással, összefoglalók modellek/műveletek/napok szerint
- **Felhasználói felület (UI)** — többnyelvű felület (több mint 30 nyelv, RTL támogatással), betűtípusok, ...
- **Webes mód** — többfelhasználós támogatás adminisztrációs szerepkörökkel; az API-kulcsok kizárólag a szerver oldalon vannak, soha nem jelennek meg a böngészőben
- **Asztali verzió** — Electron alkalmazás Windows és Linux rendszerekre
- **Önálló üzemeltetés** — Docker-rendszerkép amd64 & arm64 architektúrákhoz (beleértve a Raspberry Pi-t is)

Telepítés után tekintse át az **[Útmutatót](USER-GUIDE.hu.md)** az összes funkció részletes ismertetéséért.

<small>**Más nyelveken olvasható:** [English (UK)](README.hu.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>



<br/>

**Megjegyzés a felhasználói felület és dokumentáció fordításához:** A brit angol nyelv kivételével minden felületfordítás mesterséges intelligenciás modell segítségével készült; a szöveg pontatlanságokat vagy hibákat tartalmazhat.



<a id="screenshots"></a>
## Képernyőképek

**Nyelvválasztó**

![Nyelvválasztó](../images/screenshots/hu/language-selector.png)

**Fordítás**

![Fordítás](../images/screenshots/hu/translate.png)

**Átalakítás – prompt szerkesztő**

![Átalakítás – prompt szerkesztő](../images/screenshots/hu/transform-prompt-edit.png)

**Irányítópult**

![Költségfelügyeleti irányítópult](../images/screenshots/hu/dashboard-summary.png)

**Előzmények**

![Előzmények](../images/screenshots/hu/history.png)

**Beállítások – modellkiválasztás**

![Beállítások – modellkiválasztás](../images/screenshots/hu/settings-models.png)

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
- [Felelősségkizárás](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Gyors indítás

**Docker (ajánlott saját üzemeltetéshez)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Helyettesítse be a `sk-or-your-key` részt a [OpenRouter API-kulcsával](https://openrouter.ai/keys) (vagy állítson be más szolgáltatói kulcsokat; lásd: [Konfiguráció](#configuration-and-environment)). Nyissa meg a [http://localhost:5000](http://localhost:5000) címet, és változtassa meg az alapértelmezett admin jelszót, mielőtt a szolgáltatás nyilvánosságra kerülne.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Dockerben az LLM hitelesítő adatokat környezeti változókkal kell beállítani, például `OPENROUTER_KEY`, `OPENAI_KEY`, … (nem a webes felhasználói felületen). Asztali (Electron) környezetben a kulcsokat a **Beállítások → API** menüpontban állíthatja be.

<br/>

**Windows**

Töltse le a legújabb `Transrewrt Setup x.y.z.exe` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról, futtassa a telepítőt, majd indítsa el a Start menüből vagy asztali hivatkozásból. Adja meg az API-kulcsait a **Beállítások → API** menüben. Legalább egy szolgáltatót be kell állítania; az OpenRouter gyakori választás ingyenes modellekhez.

<br/>

**Linux**

Töltse le az `.AppImage` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról, majd:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Adja meg az API-kulcsait a **Beállítások → API** menüben. Legalább egy szolgáltatót be kell állítania; az OpenRouter gyakori választás ingyenes modellekhez.

Debian/Ubuntu esetén előfordulhat, hogy először extra függőségeket kell telepítenie:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Részletekért lásd: [Telepítés → Linux](#linux-electron).

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Jelenleg macOS nincs támogatva. A Transrewrt Windows, Linux és Docker rendszerekre érhető el.

<br/>

Amint az alkalmazás fut, olvassa el a **[Felhasználói útmutatót](USER-GUIDE.hu.md)**, amelyből megtudhatja, hogyan lehet szöveget fordítani, átírni és átalakítani, kezelni a promptokat, valamint konfigurálni a modelleket.

<br/><br/>

<a id="installation"></a>
## Telepítés

<a id="windows-electron"></a>
### Windows (Electron)

- Töltse le a legújabb telepítőt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról.
- Futtassa a `.exe` fájlt, és kövesse a telepítő utasításait.
- Első futtatás: indítsa el az alkalmazást a Start menüből vagy asztali hivatkozásból.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Töltse le az `.AppImage` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról.
- Futtassa: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- További függőségek (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- További információkért lásd a [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) fájlt.

<br/>

<a id="docker"></a>
### Docker

- Letöltés: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Állítson be legalább egy szolgáltatói kulcsot környezeti változóban (például `OPENROUTER_KEY` az OpenRouterhez). Adja meg a változókat `-e` kapcsolóval vagy `docker compose` / `.env` fájllal, hogy a titkos kulcsok ne kerüljenek közvetlenül a rendszerképbe.
- A szolgáltatói kulcsokat **nem** a webes felhasználói felületen kell megadni; a szerver a környezetből olvassa be őket.

Példa – névvel ellátott kötet adatmegőrzéshez (OpenRouter kulcs környezeti változóból):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Beállítás   | Leírás                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (hozzárendelés `-p 5000:5000` kapcsolóval)                                                                              |
| Kötet   | `/app/data` csatolása a konfiguráció és adatbázis megőrzéséhez                                                         |
| Környezeti változók | `PORT`, `CONFIG_PATH`, valamint LLM kulcsok (`OPENROUTER_KEY`, `OPENAI_KEY`, …) – lásd: [Konfiguráció](#configuration-and-environment) |

Forráskódból történő buildelés és futtatás: `docker compose up --build -d` vagy `pnpm docker:up` – részletekért lásd: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API-kulcs beszerzése

A Transrewrt több MI-szolgáltatót is támogat. Az [OpenRouter](https://openrouter.ai) népszerű választás, mivel sok modellt egyesít egyetlen kulcson belül, és ingyenes modelleket is kínál.

1. Regisztrálj vagy jelentkezz be az [openrouter.ai](https://openrouter.ai) oldalon.
2. Nyisd meg a [Kulcsok](https://openrouter.ai/keys) oldalt, és hozz létre egy új kulcsot (nevezd el, és választhatóan állíts be hitelkeretet). Ingyenes modellek használhatók hitel hozzáadása nélkül.
3. **Asztali (Electron):** másold be a kulcsot a **Beállítások → API** részbe. **Docker:** állítsd be a környezeti változókat, például `OPENROUTER_KEY` (lásd: [Gyors indítás](#quick-start)).

Más szolgáltatókat is használhatsz (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) vagy helyben futtathatsz modelleket az [Ollama](https://ollama.com) segítségével. A támogatott szolgáltatók és környezeti változók teljes listájáért lásd a [Konfiguráció](#configuration-and-environment) fejezetet.

Az OpenRouter korlátokról, saját kulcs használatáról (BYOK) és egyebekről lásd: [OpenRouter hitelesítés](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguráció és környezet

**Konfigurációs fájlok helye**

| Telepítés          | Konfiguráció helye                           |
| ------------------ | -------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                      |
| Electron (Linux)   | `~/.config/transrewrt/`                      |
| Web / Docker       | `/app/data/config.json` (használj kötetet a megőrzéshez) |

<br/>

**Környezeti változók** (csak web/Docker; az Electron a helyi konfigurációs fájlt használja)

| Változó            | Alapértelmezett          | Leírás |
| ------------------ | ------------------------ | ------ |
| `PORT`             | `5000`                   | Szerver figyelő portja |
| `CONFIG_PATH`      | `/app/data/config.json`  | A konfigurációs fájl elérési útja |
| `OPENROUTER_KEY`   | *(üres)*                 | OpenRouter API-kulcs |
| `OPENAI_KEY`       | *(üres)*                 | OpenAI API-kulcs |
| `ANTHROPIC_KEY`    | *(üres)*                 | Anthropic API-kulcs |
| `GOOGLE_KEY`       | *(üres)*                 | Google Gemini API-kulcs |
| `DEEPSEEK_KEY`     | *(üres)*                 | DeepSeek API-kulcs |
| `GROQ_KEY`         | *(üres)*                 | Groq API-kulcs |
| `MISTRAL_KEY`      | *(üres)*                 | Mistral API-kulcs |
| `OLLAMA_URL`       | *(üres)*                 | Ollama alap URL (pl. `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(üres)*                 | xAI API-kulcs |

Csak azokat a szolgáltatókat konfiguráld, amelyeket használsz. A modell-azonosítók névtereket használnak (`openrouter/…`, `openai/…`, `ollama/…`, stb.).

**Költségmegjelenítés:** Az OpenRouter alkalmazkodó esetben az aktuálisan felszámított összeget adja vissza. Más szolgáltatóknál, ha rendelkezésre áll OpenRouter-kulcs, az OpenRouter nyilvános árképzési adatai alapján **becsült** költség jelenik meg; OpenRouter-kulcs hiányában a nem-OpenRouter szolgáltatók költsége `0`-ként jelenhet meg. A becslések nem számlák.

<br/>

**Adatok és megőrzés:** Docker esetén csatolj egy kötetet a `/app/data` helyre, hogy a `config.json` és az SQLite adatbázis megmaradjon a tároló újraindítása után. Kötet nélkül minden adat elveszik, amikor a tároló leáll.

**Fejlesztőknek:** Ha letöltötted a változásokat, amelyek lecserélik a régi egyszerű kulcsos konfigurációt, akkor a helyi `data/config.json` fájlt vissza kell állítani vagy egyesíteni kell az új alapértelmezett szerkezettel a `src/config-defaults/config_default.json` fájlból, ha a helyi fájl még a törlésre került mezőket használja (`api_key`, `api_url`, proxy beállítások).

<br/>

**Webes hitelesítés:**

- Alapértelmezett admin: `admin` / `transrewrt26`.
- Felhasználók kezelése: **Beállítások → Felhasználók**.
- Jelszó visszaállítása: `docker exec <tároló> reset-web-password '<felhasználónév>' '<új jelszó>'`
  (forráskódból: `pnpm run reset-web-password -- <felhasználónév> <új jelszó>`)

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Az alapértelmezett admin jelszót azonnal cseréld le minden hálózatról elérhető gépen.

<br/>

Alapvető beállítások (betűtípus, modellek, nyelvek stb.) az alkalmazás Beállítások menüpontjában érhetők el.

<br/><br/>

<a id="development-and-architecture"></a>
## Fejlesztés és architektúra

- **Fejlesztés:** Beállítás, fordítás, tesztelés, telepítés (Electron, Web, Docker) – lásd: **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektúra és rendszer áttekintése:** Mappaszerkezet, technológiai verem, tervezési döntések – lásd: **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Kiadások és címkék

- A **Git címkék** `v`* (például `v1.0.10`) elindítják a [kiadási munkafolyamatot](.github/workflows/release.yml). A **GitHub Releases** mellékelni fogja a Windows telepítőt (`.exe`) és a Linux AppImage fájlt.
- A **Docker képek** itt lesznek közzétéve: `ghcr.io/wsj-br/transrewrt`. A képcímkék megegyeznek a Git verzióval (pl. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), valamint a `latest` címkével. Több architektúrára is: `linux/amd64` és `linux/arm64` (pl. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Közreműködés

1. Készíts egy másolatot az adattárból.
2. Hozz létre egy funkcióágat: `git checkout -b feature/my-feature`
3. Végezd el a változtatásokat egyértelmű üzenettel.
4. Küldd el és nyiss egy beágyazási kérelmet (`Pull Request`) az `main` ágba.

Kérjük, kövesd a meglévő kód stílust, és teszteld a módosításokat Electron és webes módokon is, mielőtt elküldenéd. A fordítási és tesztelési utasításokért lásd a [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) fájlt.

<br/>

**Hibabejelentés:** Nyiss egy hibajegyet a [GitHubon](https://github.com/wsj-br/transrewrt/issues). Add meg a platformodat (Windows / Linux / Docker) és az alkalmazás verzióját (ez látható az „Információ” párbeszédablakban vagy a Kiadások oldalon).

<br/><br/>

<a id="disclaimer"></a>
## Felelősségkizárás

A terméknevek és -ikonok tulajdonosaikhoz tartoznak, és kizárólag azonosítási célból használjuk őket. Ez a szoftver semmilyen módon nem kapcsolódik a megnevezett márkákhoz, és azok nem támogatják.

<br/><br/>

<a id="license"></a>
## Licenc

Copyright © 2026 Waldemar Scudeller Jr.

[Apache Licenc 2.0](LICENSE)