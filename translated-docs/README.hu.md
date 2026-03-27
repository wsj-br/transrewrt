---
translated_at: "2026-03-27T23:09:57.815Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

AI-alapú szövegeszköz: fordítás nyelvek között, átírás különböző stílusokban és átalakítás egyéni utasításokkal – több AI szolgáltatót használva (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI és helyi Ollama). Futtatható asztali alkalmazásként (Electron) vagy saját kiszolgálón üzemeltetett webes alkalmazásként (Docker).

- **Fordítás** — több tucat nyelv között, automata forrásnyelv-felismeréssel
- **Átírás** — helyesírás-javítás, érthetőség javítása, formális/informális stílus, rövidítés, bővítés, technikai átírás
- **Átalakítás** — egyéni AI utasítások; saját utasítások létrehozása és kezelése, opcionális célként megadható nyelv minden utasításnál
- **Előzmények** — teljes végrehajtási előzmények a bemeneti/kimeneti szövegekkel, szűréssel és exportálással
- **Modellek és költség** — válasszon modellt bármely beállított szolgáltatótól; költség- és használati irányítópult naplókkal, összegzésekkel modell/szolgáltatás/nap szerint
- **Felhasználói felület** — többnyelvű felhasználói felület (30+ nyelv, RTL-támogatással), betűtípusok, ...
- **Webmód** — többfelhasználós támogatás adminisztrációs szerepkörökkel
- **Asztali** — Electron alkalmazás Windows- és Linux-re
- **Saját kiszolgálóra telepíthető** — Docker-kép amd64 és arm64 architektúrához (Raspberry Pi-kompatibilis)

Telepítés után az összes szolgáltatás részletes bemutatásáért tekintse meg a **[Felhasználói útmutatót](USER-GUIDE.hu.md)**.

<small>**Más nyelveken olvasható:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Megjegyzés a felhasználói felület és a dokumentáció fordításához:** A felhasználói felületen az eredeti angol (UK) nyelv kivételével minden fordítást MI modellek készítettek; a szövegalkotás pontatlan lehet vagy tartalmazhat hibákat.

</small>

<br/>

<a id="screenshots"></a>

## Képernyőképek

**Nyelvválasztó**

![Nyelvválasztó](../images/screenshots/hu/language-selector.png)

**Fordítás**

![Fordítás](../images/screenshots/hu/translate.png)

**Átalakítás – prompt szerkesztő**

![Átalakítás – prompt szerkesztő](../images/screenshots/hu/transform-prompt-edit.png)

**Irányítópult**

![Költség irányítópult](../images/screenshots/hu/dashboard-summary.png)

**Előzmények**

![Előzmények](../images/screenshots/hu/history.png)

**Beállítások – modellkiválasztás**

![Beállítások – modellkiválasztás](../images/screenshots/hu/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Tartalomjegyzék

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Gyorsindítás](#quick-start)
- [Telepítés](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [OpenRouter API kulcs beszerzése](#getting-an-openrouter-api-key)
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

**Docker (ajánlott a saját kiszolgálón való üzemeltetéshez)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Helyettesítse a `sk-or-your-key` részt saját [OpenRouter API kulcsával](https://openrouter.ai/keys) (vagy állítson be más szolgáltatók kulcsait; lásd: [Konfiguráció és környezet](#configuration-and-environment)). Nyissa meg [http://localhost:5000](http://localhost:5000) címet, és szolgáltatás nyilvánossá tétele előtt módosítsa az alapértelmezett admin jelszót.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Dockerben az LLM hitelesítő adatokat környezeti változókkal kell beállítani, például `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nem a webes felhasználói felületen). Az asztali (Electron) verzióban a kulcsokat a **Beállítások → API** menüpontban állíthatja be.

<br/>

**Windows**

Töltse le a legfrissebb `Transrewrt Telepítő x.y.z.exe` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról, futtassa a telepítőt, majd indítsa el indítólábcról vagy asztali hivatkozásból. Adja meg API kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót konfigurálnia kell, az OpenRouter gyakori választás ingyenes modellekhez.

<br/>

**Linux**

Töltse le a CPU-jának megfelelő `.AppImage` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról (`x64` tipikus PC-hez, `arm64` sok ARM eszközhöz, beleértve a Raspberry Pi 4+ eszközöket), majd:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Adja meg API kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót konfigurálnia kell, az OpenRouter gyakori választás ingyenes modellekhez.

Debian/Ubuntu rendszereken előfordulhat, hogy először további függőségeket kell telepíteni:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Részletekért lásd: [Telepítés → Linux](#linux-electron).

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A macOS jelenleg nem támogatott. A Transrewrt Windows, Linux és Docker rendszerekre érhető el.

<br/>

Amint az alkalmazás fut, olvassa el a **[Felhasználói útmutatót](USER-GUIDE.hu.md)**-t a szövegfordítás, átírás és átalakítás, a promptok kezelése és a modellek konfigurálása témájában.

<br/><br/>

<a id="installation"></a>

## Telepítés

<a id="windows-electron"></a>
### Windows (Electron)

- Töltse le a legújabb telepítőt innen: [Releases](https://github.com/wsj-br/transrewrt/releases).
- Indítsa el a `.exe` fájlt, és kövesse a telepítő utasításait.
- Első indításkor: indítsa el az alkalmazást a Start menüből vagy az asztali parancsikonról.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Töltse le a megfelelő `.AppImage` fájlt (`x64` vagy `arm64`) innen: [Releases](https://github.com/wsj-br/transrewrt/releases).
- Futtatás: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 rendszereken, vagy használja a `...-arm64.AppImage` fájlnevet ARM64-on.
- További függőségek (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- További információkért lásd: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Letöltés: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Állítson be legalább egy szolgáltató kulcsot környezeti változóként (például `OPENROUTER_API_KEY` az OpenRouter számára). Adja át a változókat `-e` vagy `docker compose` / `.env` segítségével, hogy a titkok ne kerüljenek beépítésre a képbe.
- A szolgáltatói kulcsokat **nem** a webes felhasználói felületen adja meg; a szerver a környezeti változókból olvassa be azokat.

Példa – névvel ellátott kötet adattartóssághoz (OpenRouter kulcs környezeti változóban):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

vagy ha inkább Docker Compose-tel szeretne dolgozni, használja ezt:

# a compose fájl letöltése
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# a fájl szerkesztése az API_KEYS hozzáadásához
vi transrewrt.yml
# a tároló indítása
docker compose -f transrewrt.yml up -d
```

<br/>

| Beállítás | Leírás                                                                                                                            |
|----------|------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (lehet leképezni `-p 5000:5000` paraméterrel)                                                                              |
| Kötet    | `/app/data` csatolása a konfiguráció és az adatbázis megőrzéséhez                                                                  |
| Környezeti változók | `PORT`, `CONFIG_PATH`, valamint LLM kulcsok (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) – lásd: [Konfiguráció](#configuration-and-environment) |

Fordítás és futtatás forrásból: `docker compose up --build -d` vagy `pnpm docker:up` – lásd: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API-kulcs beszerzése

A Transrewrt több MI-szolgáltatót is támogat. Az [OpenRouter](https://openrouter.ai) népszerű választás, mivel több modellt is egyetlen kulccsal elérhetővé tesz, és ingyenes modelleket is kínál.

1. Regisztrálj vagy jelentkezz be az [openrouter.ai](https://openrouter.ai) oldalon.
2. Nyisd meg a [Kulcsok](https://openrouter.ai/keys) oldalt, és hozz létre új kulcsot (add meg a nevét, és tetszés szerint állíts be hitelkeretet). Az ingyenes modelleket hitel hozzáadása nélkül is használhatod.
3. **Asztali (Electron):** másold be a kulcsot a **Beállítások → API** menüpontba. **Docker:** állítsd be a környezeti változókat, például az `OPENROUTER_API_KEY`-t (lásd: [Gyors indítás](#quick-start)).

Ne használd az OpenRouter **Body Builder** modelljét ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder`)) fordításhoz, újraíráshoz vagy átalakításhoz: ez a modell JSON kéréscsomagokat ad vissza, nem a feladatokhoz szükséges befejezett szöveget. A felhasználói útmutatóban lásd a [Beállítások → Modellek](USER-GUIDE.hu.md#models) részt.

Más szolgáltatókat is használhatsz (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras), vagy helyben futtathatod a modelleket [Ollama](https://ollama.com) segítségével. A támogatott szolgáltatók és környezeti változók teljes listájáért lásd: [Konfiguráció](#configuration-and-environment).

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Ha Ollama-t használsz más eszközről, konténerből vagy szolgáltatásból, ne feledd úgy konfigurálni az Ollamát, hogy külső kapcsolatokat is engedélyezzen (ne csak localhostra korlátozódjon).

Korlátozásokról, saját kulcs használatáról (BYOK) és további információkról lásd: [OpenRouter hitelesítés](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Beállítások és környezet

**Konfigurációs fájlok helye**

| Telepítés | Konfiguráció helye |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux)   | `~/.config/transrewrt/` |
| Web / Docker       | `/app/data/config.json` (használj kötetet az adatok megőrzéséhez) |

<br/>

**Környezeti változók** (csak web/Docker; az Electron a helyi konfigurációs fájlt használja)

| Változó | Alapértelmezett | Leírás |
| ---------------- | ----------------------- | ----------- |
| `PORT` | `5000` | Szerver figyelő portja |
| `CONFIG_PATH` | `/app/data/config.json` | Konfigurációs fájl elérési útja |
| `OPENROUTER_API_KEY` | *(üres)* | OpenRouter API kulcs |
| `OPENAI_API_KEY` | *(üres)* | OpenAI API kulcs |
| `CEREBRAS_API_KEY` | *(üres)* | Cerebras API kulcs |
| `ANTHROPIC_API_KEY` | *(üres)* | Anthropic API kulcs |
| `GOOGLE_API_KEY` | *(üres)* | Google Gemini API kulcs |
| `DEEPSEEK_API_KEY` | *(üres)* | DeepSeek API kulcs |
| `GROQ_API_KEY` | *(üres)* | Groq API kulcs |
| `MISTRAL_API_KEY` | *(üres)* | Mistral API kulcs |
| `OLLAMA_URL` | *(üres)* | Ollama alap URL-je (pl. `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(üres)* | xAI API kulcs |

Csak azokat a szolgáltatókat konfigurálja, amelyeket használ. A modellazonosítók névteresek (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, stb.).

**Költségek megjelenítése:** Az OpenRouter pontos, számlázott költséget ad vissza, amikor lehetséges. Más szolgáltatók esetében, ha OpenRouter kulcs rendelkezésre áll, **becsült** költséget használunk az OpenRouter nyilvános árlistája alapján; az OpenRouter kulcs hiányában a nem OpenRouter-szolgáltatók költsége `0` lehet. A becslések nem számlák.

<br/>

**Adatok és megőrzés:** Docker esetén csatlakoztasson egy kötetet `/app/data` helyre, így a `config.json` és az SQLite adatbázis megőrződik a tároló újraindításai után is. Kötet nélkül minden adat elvész a tároló leállításakor.

**Fejlesztőknek:** Ha olyan módosításokat húzott le, amelyek lecserélik a régi egyszerű kulcskonfigurációt, akkor a `data/config.json` fájlt újra kell konfigurálni vagy össze kell egyeztetni az új alapértelmezett struktúrával a `src/config-defaults/config_default.json` fájlból, ha a helyi fájl még a törlésre került mezőket használja (`api_key`, `api_url`, proxy beállítások).

<br/>

**Webes hitelesítés:**

- Alapértelmezett admin: `admin` / `transrewrt26`.
- Felhasználók kezelése: **Beállítások → Felhasználók**.
- Jelszó visszaállítása: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (forráskódból: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **FIGYELEM**<br/>
> Az alapértelmezett admin jelszót azonnal változtassa meg minden hálózatról elérhető gépen.

<br/>

A főbb beállítások (betűtípus, modellek, nyelvek stb.) az alkalmazás beállításaiban érhetők el.

<br/><br/>

<a id="development-and-architecture"></a>

## Fejlesztés és architektúra

- **Fejlesztés:** Telepítés, fordítás, tesztelés és üzembe helyezés (Electron, Web, Docker) – lásd **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektúra és rendszeráttekintés:** Könyvtárstruktúra, technológiai verem, tervezési döntések – lásd **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Kiadások és címkék

- A **Git címkék** `v`* (pl. `v1.0.10`) elindítják a [kiadási munkafolyamatot](.github/workflows/release.yml). A **GitHub Releases** csatolja a Windows telepítőt (`.exe`) valamint Linux AppImage-eket (**x64** és **arm64** változatban).
- A **Docker képek** itt kerülnek közzétételre: `ghcr.io/wsj-br/transrewrt`. A képcímkék megfelelnek a Git verziószámnak (pl. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), továbbá a `latest` címke is elérhető. Több architektúra: `linux/amd64` és `linux/arm64` (pl. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Közreműködés

1. Másold el a tárházat (fork).
2. Hozz létre egy funkciós ágat: `git checkout -b feature/my-feature`
3. Véglegesítsd a módosításokat egyértelmű üzenettel.
4. Küldd el, és nyiss egy Pull Requestet a `main` ágra.

Kérjük, tartsd be a meglévő kódstílust, és teszteld a módosításaidat Electron és webes módokban is, mielőtt elküldöd. A fordítási és tesztelési utasításokat lásd a [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) fájlban.

<br/>

**Hibajelentés:** Nyiss egy hibajegyet a [GitHubon](https://github.com/wsj-br/transrewrt/issues). Add meg a platformodat (Windows / Linux / Docker) és az alkalmazás verzióját (az „Névjegy” ablakban vagy a Kiadások oldalon megtalálható).

<br/><br/>

<a id="disclaimer"></a>

## Felelősségkizárás

A terméknevek és ikonok tulajdonosukhoz tartoznak, és kizárólag azonosítási célokat szolgálnak. Ez a szoftver nem kapcsolódik semelyik említett márkához, valamint azok nem támogatják a használatát.

<br/><br/>

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache Licenc 2.0](LICENSE)