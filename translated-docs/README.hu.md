---
translated_at: "2026-03-26T00:47:50.907Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
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

Mesterséges intelligencia által vezérelt szövegszerkesztő: fordítás nyelvek között, átírás különböző stílusokban, átalakítás egyéni utasításokkal — több MI-szolgáltató használatával (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI és helyi Ollama). Asztali alkalmazásként (Electron) vagy saját kiszolgálón működtethető webalkalmazásként (Docker) futtatható.

- **Fordítás** — tucatnyi nyelv között, automatikus forrásnyelv-felismeréssel
- **Átírás** — helyesírás-javítás, világosabbá tétel, formális/társasági stílus, rövidítés, bővítés, szakmai szöveg
- **Átalakítás** — egyéni MI-utasítások; saját utasítások létrehozása és kezelése, opció az utasításonkénti célnyelv megadására
- **Előzmények** — teljes végrehajtási előzmények bemenő/kimenő szöveggel, szűrési lehetőségekkel és exportálási funkcióval
- **Modellek és költségek** — válasszon modelleket bármely beállított szolgáltatónál; költség- és használati irányítópult naplóval, összesítésekkel modell, művelet és nap szerint
- **UI** — többnyelvű felület (30+ nyelv, RTL-támogatással), betűtípusok, …
- **Webes mód** — többfelhasználós támogatás adminisztrátori szerepkörökkel
- **Asztali verzió** — Electron alkalmazás Windows és Linux rendszerekhez
- **Saját üzemeltetésű** — Docker kép amd64 és arm64 architektúrákhoz (Raspberry Pi-n is futtatható)

Telepítés után tekintse meg a **[Felhasználói útmutatót](USER-GUIDE.hu.md)** az összes funkció részletes áttekintéséhez.

<small>**Elérhető más nyelveken is:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Megjegyzés a felhasználói felület és dokumentáció fordításáról:** A felületen minden nyelv, az eredeti angol (UK) kivételével, mesterséges intelligencia használatával lett lefordítva; előfordulhat, hogy a szöveg pontatlan vagy tartalmaz hibákat.

</small>

<br/>

<a id="screenshots"></a>
## Képernyőképek

**Nyelvválasztó**

![Nyelvválasztó](../images/screenshots/hu/language-selector.png)

**Fordítás**

![Fordítás](../images/screenshots/hu/translate.png)

**Átalakítás – utasításszerkesztő**

![Átalakítás – utasításszerkesztő](../images/screenshots/hu/transform-prompt-edit.png)

**Irányítópult**

![Költségirányítópult](../images/screenshots/hu/dashboard-summary.png)

**Előzmények**

![Előzmények](../images/screenshots/hu/history.png)

**Beállítások – modellkiválasztás**

![Beállítások – modellkiválasztás](../images/screenshots/hu/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Tartalomjegyzék

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Gyors indítás](#gyors-inditas)
- [Telepítés](#telepites)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [OpenRouter API-kulcs beszerzése](#openrouter-api-kulcs-beszerzese)
- [Konfiguráció és környezet](#konfiguracio-es-kornyezet)
- [Fejlesztés és architektúra](#fejlesztes-es-architektura)
- [Kiadások és címkék](#kiadasok-es-cimkek)
- [Közreműködés](#kozremukodes)
- [Felelősségkizárás](#felelosssegkizaras)
- [Licenc](#licenc)

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

Cserélje le a `sk-or-your-key` részt [OpenRouter API-kulcsára](https://openrouter.ai/keys) (vagy állítson be más szolgáltató kulcsot; lásd: [Konfiguráció](#konfiguracio-es-kornyezet)). Nyissa meg a [http://localhost:5000](http://localhost:5000) címet, és változtassa meg az alapértelmezett admin jelszót, mielőtt a szolgáltatás nyilvános lenne.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Dockerben az LLM hitelesítő adatok környezeti változókkal állíthatók be, például `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (nem a webes felületen). Asztali (Electron) verzióban a kulcsokat a **Beállítások → API** menüpontban konfigurálhatja.

<br/>

**Windows**

Töltse le a legújabb `Transrewrt Telepítő x.y.z.exe` állományt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról, futtassa a telepítőt, majd indítsa el a Start menüből vagy asztali hivatkozásból. Adja meg az API-kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót be kell állítania; az OpenRouter gyakori választás ingyenes modellekhez.

<br/>

**Linux**

Töltse le a CPU-nak megfelelő `.AppImage` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról (`x64` tipikus PC-khez, `arm64` sok ARM-eszközhöz, beleértve a Raspberry Pi 4+-t), majd:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Adja meg az API-kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót konfigurálni kell; az OpenRouter gyakori választás ingyenes modellekhez.

Debian/Ubuntu rendszereken először további függőségeket kell telepíteni:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Részletekért lásd: [Telepítés → Linux](#linux-electron).

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A macOS jelenleg nem támogatott. A Transrewrt Windows, Linux és Docker rendszerekhez érhető el.

<br/>

Miután az alkalmazás fut, olvassa el az **[Felhasználói útmutatót](USER-GUIDE.hu.md)**, hogy megtudja, hogyan lehet szöveget fordítani, átírni és átalakítani, hogyan kezelheti az előképeket, és hogyan konfigurálhatja a modelleket.

<br/><br/>

<a id="installation"></a>
## Telepítés

<a id="windows-electron"></a>
### Windows (Electron)

- Töltse le a legújabb telepítőt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról.
- Futtassa a `.exe` fájlt, és kövesse a telepítő utasításait.
- Első indításkor: indítsa el az alkalmazást a Start menüből vagy az asztali hivatkozásból.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Töltse le a megfelelő `.AppImage` fájlt (`x64` vagy `arm64`) a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról.
- Futtassa: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 rendszereken, vagy használja az `...-arm64.AppImage` nevű fájlt ARM64 eszközökön.
- További függőségek (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- További információkért lásd: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Letöltés: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Állítson be legalább egy szolgáltató kulcsot környezeti változón keresztül (pl. `OPENROUTER_KEY` az OpenRouterhez). Adja át a változókat `-e` paraméterrel, vagy `docker compose` / `.env` fájllal, hogy a titkok ne kerüljenek a képbe.
- A szolgáltatói kulcsokat **nem** a webes felületen kell megadni; a szerver a környezetből olvassa be őket.

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
| Port     | `5000` (lehet leképezni a `-p 5000:5000` paraméterrel)                                                                              |
| Kötet   | Csatolja a `/app/data` könyvtárt a konfiguráció és az adatbázis megőrzéséhez                                                         |
| Környezeti változók | `PORT`, `CONFIG_PATH`, plusz az LLM kulcsok (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - lásd: [Konfiguráció](#konfiguracio-es-kornyezet) |

Forráskódból történő fordítás és futtatás: `docker compose up --build -d` vagy `pnpm docker:up` – lásd: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API-kulcs beszerzése

A Transrewrt több AI-szolgáltatót is támogat. Az [OpenRouter](https://openrouter.ai) népszerű választás, mert sok modellt egy kulccsal elérhetővé tesz, és ingyenes modelleket is kínál.

1. Regisztráljon vagy jelentkezzen be az [openrouter.ai](https://openrouter.ai) oldalon.
2. Látogasson el a [Kulcsok](https://openrouter.ai/keys) oldalra, és hozzon létre egy új kulcsot (nevezze el, és opcionálisan állítsa be a hitelkeretet). Ingyenes modelleket használhat hitel hozzáadása nélkül.
3. **Asztali (Electron):** illessze be a kulcsot a **Beállítások → API** menüpontban. **Docker:** állítsa be a környezeti változókat, például az `OPENROUTER_KEY`-t (lásd: [Gyorsindítás](#quick-start)).

Ne használja az OpenRouter **Body Builder** modelljét ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder`)) fordításhoz, újraíráshoz vagy átalakításhoz: ez a modell JSON kérést küld vissza, nem a feladathoz kész kimeneti szöveget. Lásd: [Beállítások → Modellek](USER-GUIDE.hu.md#models) a Felhasználói útmutatóban.

Más szolgáltatókat is használhat (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras), vagy helyileg futtathat modelleket az [Ollama](https://ollama.com) segítségével. A támogatott szolgáltatók és környezeti változók teljes listájáért lásd: [Konfiguráció](#configuration-and-environment).

> ⚠️ **FIGYELEM**<br/>
> Ha az Ollama-t más eszközről, tárolóról vagy szolgáltatásról használja, ne feledkezzen meg arról, hogy az Ollama-t úgy kell beállítania, hogy külső kapcsolatokat engedélyezzen (ne csak localhost).

Korlátokról, saját kulcs használatáról és egyéb információkról lásd: [OpenRouter hitelesítés](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguráció és környezet

**Konfigurációs fájlok elhelyezkedése**

| Telepítés         | Konfiguráció helye                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (használjon kötetet az adatmegőrzéshez) |

<br/>

**Környezeti változók** (csak web/Docker esetén; az Electron a helyi konfigurációs fájlt használja)

| Változó           | Alapértelmezett            | Leírás |
| ------------------ | -------------------------- | ----------- |
| `PORT`             | `5000`                     | Szerver figyelő portja |
| `CONFIG_PATH`      | `/app/data/config.json`    | Konfigurációs fájl elérési útja |
| `OPENROUTER_KEY`   | *(üres)*                   | OpenRouter API-kulcs |
| `OPENAI_KEY`       | *(üres)*                   | OpenAI API-kulcs |
| `CEREBRAS_KEY`     | *(üres)*                   | Cerebras API-kulcs |
| `ANTHROPIC_KEY`    | *(üres)*                  | Anthropic API-kulcs |
| `GOOGLE_KEY`       | *(üres)*                   | Google Gemini API-kulcs |
| `DEEPSEEK_KEY`     | *(üres)*                   | DeepSeek API-kulcs |
| `GROQ_KEY`         | *(üres)*                   | Groq API-kulcs |
| `MISTRAL_KEY`      | *(üres)*                   | Mistral API-kulcs |
| `OLLAMA_URL`       | *(üres)*                   | Ollama alap URL-je (pl. `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(üres)*                   | xAI API-kulcs |

Csak azokat a szolgáltatókat állítsa be, melyeket használ. A modellazonosítók névteresek (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, stb.).

**Költségek megjelenítése:** Az OpenRouter adott esetben pontos, számlázott költséget ad vissza. Más szolgáltatók az **OpenRouter nyilvános modellárakhoz tartozó becsült** költséget használják, ha OpenRouter-kulcs elérhető; ha nincs, akkor a nem OpenRouter költség `0`-ként jelenhet meg. A becslések nem számlák.

<br/>

**Adatok és megőrzés:** Docker esetén csatoljon egy kötetet az `/app/data` helyre, így a `config.json` és az SQLite adatbázis megmarad a tároló újraindításai során. Kötet nélkül minden adat elveszik, amikor a tároló leáll.

**Fejlesztőknek:** Egy régi, egyetlen kulcsot használó konfiguráció frissítése után állítsa vissza, vagy egyesítse a `data/config.json` fájlt az új alapértelmezett szerkezettel a `src/config-defaults/config_default.json` fájlból, ha a helyi fájl továbbra is a törlésre került mezőket (`api_key`, `api_url`, proxy beállítások) használja.

<br/>

**Web hitelesítés:**

- Alapértelmezett admin: `admin` / `transrewrt26`.
- Felhasználók kezelése: **Beállítások → Felhasználók**.
- Jelszó visszaállítása: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (forráskódból: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **FIGYELEM**<br/>
> Az alapértelmezett admin jelszót azonnal változtassa meg minden hálózatról elérhető gépen.

<br/>

Főbb beállítások (betűtípus, modellek, nyelvek stb.) elérhetők az alkalmazás Beállítások menüpontjában.

<br/><br/>

<a id="development-and-architecture"></a>

## Fejlesztés és architektúra

- **Fejlesztés:** Beállítás, fordítás, tesztelés és telepítés (Electron, Web, Docker) – lásd a következőt: **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektúra és rendszeráttekintés:** Mappastruktúra, technológiai verem, tervezési döntések – lásd a következőt: **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Kiadások és címkék

- **Git címkék** `v`* (pl. `v1.0.10`) elindítják a [kiadási munkafolyamatot](.github/workflows/release.yml). A **GitHub Kiadások** mellékelik a Windows telepítőfájlt (`.exe`) és a Linux AppImage-eket (**x64** és **arm64**).
- A **Docker-rendszerképek** a `ghcr.io/wsj-br/transrewrt` oldalra kerülnek fel. A rendszerkép címkéi megegyeznek a Git verzióval (pl. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), illetve a `latest` címkével. Több architektúra támogatott: `linux/amd64` és `linux/arm64` (pl. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Közreműködés

1. Készíts egy villáztatást a repóból.
2. Hozz létre egy funkcióágot: `git checkout -b feature/my-feature`
3. Végezd el a módosításokat, és commitold el egy érthető üzenettel.
4. Küldd fel, majd nyiss egy pull requestet a `main` ágra.

Kérjük, tartsd be az elfogadott kódstílust, és teszteld a módosításokat Electron és webes módokban is a beküldés előtt. Fordítási és tesztelési útmutatásért lásd: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Hibabejelentés:** Nyiss hibajegyet a [GitHubon](https://github.com/wsj-br/transrewrt/issues). Add meg a platformot (Windows / Linux / Docker) és az alkalmazás verzióját (az „Névjegy” ablakban vagy a Kiadások oldalon megtalálható).

<br/><br/>

<a id="disclaimer"></a>
## Felelősségkizárás

A terméknevek és ikonok tulajdonosaikhoz tartoznak, kizárólag azonosítási céllal szerepelnek. Ez a szoftver nem kapcsolódik és nincs támogatva a említett márkákhoz.

<br/><br/>

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache Licenc 2.0](LICENSE)