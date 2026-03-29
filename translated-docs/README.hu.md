---
translated_at: "2026-03-29T01:55:10.493Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Verzió"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenc: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Mesterséges intelligenciával támogatott szövegfeldolgozó eszköz: nyelvek közötti fordítás, különböző stílusokban történő újraírás, valamint egyéni utasításokkal végzett átalakítás több MI-szolgáltatón keresztül (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI és helyi Ollama). Asztali alkalmazásként (Electron) vagy önkiszolgáló webalkalmazásként (Docker) futtatható.

- **Fordítás** – tucatnyi nyelv között, automatikus forráskód észleléssel
- **Újraírás** – helyesírási hibák javítása, érthetőség növelése, formális vagy informális stílus, rövidítés, kiterjesztés, technikai szövegek
- **Átalakítás** – egyéni AI promptok; promptok létrehozása és kezelése, választható célként megadott nyelv minden promptnál
- **Előzmények** – teljes végrehajtási előzmények bemeneti/kimeneti szöveggel, szűrési és exportálási lehetőségek
- **Modellek és költségek** – választható modellek bármely beállított szolgáltatónál; költség- és használatjelentések naplózással, összegzések modelleken/műveleteken/napokonként
- **Felhasználói felület (UI)** – többnyelvű felhasználói felület (30+ nyelv, RTL támogatás), betűtípusok stb.
- **Webes mód** – többfelhasználós támogatás adminisztrátori szerepkörökkel
- **Asztali alkalmazás** – Electron alkalmazás Windows és Linux rendszerekre
- **Önálló üzemeltetés** – Docker-rendszerkép amd64 és arm64 architektúrákhoz (Raspberry Pi kompatibilis)

Telepítés után tekintse meg a **[Felhasználói útmutatót](USER-GUIDE.hu.md)** az összes funkció részletes áttekintéséhez.

<small>**Más nyelveken olvasható:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Megjegyzés a felhasználói felület és a dokumentáció fordításához:** Az összes felhasználói nyelv kivéve az eredeti angol (Egyesült Királyság) 
> mesterséges intelligencia modellek segítségével lett lefordítva; a szöveg megfogalmazása pontatlan lehet vagy tartalmazhat hibákat.

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

![Irányítópult – használat](../images/screenshots/hu/dashboard-summary.png)

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
  - [Időzóna beállítása](#configuring-the-timezone)
- [OpenRouter API-kulcs beszerzése](#getting-an-openrouter-api-key)
- [Beállítás és környezet](#configuration-and-environment)
- [Fejlesztés és architektúra](#development-and-architecture)
- [Hibabejelentés](#reporting-issues)
- [Felelősségkizárás](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Gyors indítás

**Docker (ajánlott helyi üzemeltetéshez)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Helyettesítsd a `sk-or-your-key` részt a [OpenRouter API kulcsoddal](https://openrouter.ai/keys) (vagy állíts be más szolgáltatói kulcsokat; lásd: [Konfiguráció](#configuration-and-environment)). Nyisd meg a [http://localhost:5000](http://localhost:5000) oldalt, és változtasd meg az alapértelmezett admin jelszót, mielőtt a szolgáltatást elérhetővé tennéd.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Dockerben az LLM hitelesítő adatokat környezeti változókkal kell beállítani, pl. `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nem a webes felületen). Asztali (Electron) verzióban a kulcsokat a **Beállítások → API** menüben állíthatod be.

<br/>

**Windows**

Töltse le a legújabb `Transrewrt Telepítő x.y.z.exe` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról, futtassa a telepítőt, majd indítsa el a Start menüből vagy az asztalon lévő gyorsindító ikonról. Adja meg az API kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót be kell állítania; az OpenRouter gyakori választás ingyenes modellekhez.

<br/>

**Linux**

Töltse le a CPU-jának megfelelő `.AppImage` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról (`x64` tipikus PC-khez, `arm64` sok ARM-eszközhöz, többek között a Raspberry Pi 4+hoz), majd:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.App CompletableFuture
```

Adja meg az API kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót be kell állítania; az OpenRouter gyakori választás ingyenes modellekhez.

Debian/Ubuntu rendszereken előfordulhat, hogy először további függőségeket kell telepítenie:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Részletek: [Telepítés → Linux](#linux-electron).

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>

> A macOS jelenleg nem támogatott. A Transrewrt Windows, Linux és Docker rendszerekre érhető el.

<br/>

Miután az alkalmazás fut, olvassa el a **[Felhasználói útmutatót](USER-GUIDE.hu.md)**, amelyből megtudhatja, hogyan kell szöveget fordítani, újraírni és átalakítani, hogyan kezelheti a promptokat, és hogyan konfigurálhatja a modelleket.

<br/><br/>

<a id="installation"></a>

## Telepítés

<a id="windows-electron"></a>

### Windows (Electron)

- Töltsd le a legújabb telepítőt innen: [Kiadványok](https://github.com/wsj-br/transrewrt/releases).
- Futtasd az `.exe` fájlt, és kövesd a telepítő utasításait.
- Első indításkor: indítsd az alkalmazást a Start menüből vagy az asztali parancsikonról.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A Windows a következő biztonsági figyelmeztetéseket jelenítheti meg (normális jelenség aláíratlan/független alkalmazások esetén):
>   - **Felhasználói fiókvezérlés (UAC)**: "Engedélyezed, hogy ez az ismeretlen kiadó által készített alkalmazás módosításokat hajtson végre az eszközödön?" → Kattints a **Igen** gombra.
>   - **Microsoft Defender SmartScreen**: "A Windows megvédte a számítógépedet" → Kattints a **További információ** lehetőségre → majd az **Ennek ellenére futtatás** gombra.
>
> Ez azért fordulhat elő, mert az alkalmazás nincs aláírva Microsoft vagy más nagy kiadó által – biztonságos, ha hivatalos GitHub kiadványainkból töltötted le
>  (ellenőrizd az alábbi SHA256 ellenőrzőösszeget).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Töltse le a megfelelő `.AppImage` fájlt (`x64` vagy `arm64`) a [Releases](https://github.com/wsj-br/transrewrt/releases) oldalról.
- Futtassa: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 rendszereken, vagy használja a `...-arm64.AppImage` fájlnevet ARM64-on.
- További függőségek (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- További információkért lásd: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>

### Docker

- Letöltés: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Állíts be legalább egy szolgáltatói kulcsot környezeti változóként (például `OPENROUTER_API_KEY` az OpenRouter számára). Add át a változókat `-e` kapcsolóval vagy `docker compose` / `.env` fájllal, így a titkos kulcsok nem kerülnek beégetésre a képbe.
- A szolgáltatói kulcsokat **nem** a webes felhasználói felületen adod meg; a szerver a környezeti változókból olvassa őket.

Példa – névvel ellátott kötet adatmegőrzéshez (OpenRouter kulcs környezeti változóban):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

vagy ha Docker Compose-t részesítesz előnyben, használd ezt:

```bash
# töltse le a compose fájlt
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# szerkeszd a fájlt, hogy hozzáadd az API_KEYS-t és állítsd be az időzónát (TZ)
vi transrewrt.yml
# indítsd el a tárolót
docker compose -f transrewrt.yml up -d

Lásd: [Konfiguráció](#configuration-and-environment) az összes környezeti változóhoz, mint például a `PORT`, `CONFIG_PATH`, `TZ`, és az LLM kulcsok (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Időzóna beállítása

Az alkalmazás felhasználói felületének dátum- és időbeállításai a **böngésző** nyelvi és időzóna-beállításait követik. **Szerveroldali** működéshez (naplózás és hasonlók) a tároló a `TZ` környezeti változót használja. Az alapértelmezett érték: `TZ=Europe/London`.

Más időzóna használatához állítsa be a `TZ` változót a Compose fájlban, például:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Vagy adja meg a tároló indításakor (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Sok Linux alapú rendszeren az alábbi paranccsal másolhatja ki a rendszer időzóna-nevét:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Az érvényes időzóna-nevek listája a [tz adatbázisban](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia) található.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API-kulcs beszerzése

A Transrewrt több AI-szolgáltatót is támogat. Az [OpenRouter](https://openrouter.ai) egy népszerű választás, mivel számos modellt összegyűjt egyetlen kulcs alá, és ingyenes modelleket is kínál.

1. Regisztrálj vagy jelentkezz be az [openrouter.ai](https://openrouter.ai) oldalon.
2. Nyisd meg a [Kulcsok](https://openrouter.ai/keys) oldalt, és hozz létre egy új kulcsot (add neki egy nevet, és opcionálisan állíts be hitelkeretet). Ingyenes modelleket használhatsz akkor is, ha nem adsz hozzá hitelt.
3. **Asztali (Electron):** illeszd be a kulcsot a **Beállítások → API** részben. **Docker:** állítsd be a környezeti változókat, például az `OPENROUTER_API_KEY` értéket (lásd: [Gyors indítás](#quick-start)).

Ne használd az OpenRouter **Body Builder** modelljét ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) átirásra, fordításra vagy átalakításra: ez a modell JSON kérések hasznos terhelését adja vissza, nem pedig a feladatokhoz tartozó befejezett szöveget. További információkért lásd a Felhasználói útmutató [Beállítások → Modellek](USER-GUIDE.hu.md#models) fejezetét.

Más szolgáltatókat is használhatsz (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras), vagy helyileg futtathatsz modelleket [Ollama](https://ollama.com) segítségével. A támogatott szolgáltatók és környezeti változók teljes listájáért lásd a [Konfiguráció](#configuration-and-environment) részt.

> ⚠️ **FIGYELEM**<br/>
> Ha más eszközről, konténerből vagy szolgáltatásból használod az Ollama-t, ne feledd konfigurálni az Ollama-t úgy, hogy külső kapcsolatokat engedélyezzen (ne csak localhost-ra korlátozódjon).

Korlátokról, saját kulcs (BYOK) használatról és egyebekről lásd az [OpenRouter hitelesítést](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Beállítások és környezet

**Beállítófájlok helye**

| Telepítés          | Konfiguráció helye                                |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (használj kötetet a mentéshez) |

<br/>

**Környezeti változók** (csak web/Docker; az Electron a helyi konfigurációs fájlt használja)

| Változó | Alapértelmezett | Leírás |
| ------ | -------------- | ----- |
| `PORT` | `5000` | A szerver figyelő portja |
| `CONFIG_PATH` | `/app/data/config.json` | A konfigurációs fájl elérési útja |
| `TZ` | `Europe/London` | Az IANA időzóna a szerveroldali időhöz (naplózás, stb.); a felhasználói felület továbbra is a böngésző időzónáját követi. Lásd: [Docker → időzóna](#docker-timezone) |
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

**Költségmegjelenítés:** Az OpenRouter, ahol alkalmazható, a tényleges számlázott költséget adja vissza. Más szolgáltatók az OpenRouter nyilvános modellárainak **becsült** költségét használják, ha rendelkezésre áll OpenRouter kulcs; ellenkező esetben a nem OpenRouter költség `0`-ként jelenhet meg. A becslések nem számlák.

<br/>

**Adatok és adatmegőrzés:** Docker esetén csatoljon egy kötetet a `/app/data` helyre, így a `config.json` és az SQLite adatbázis megmarad a tároló újraindításai között. Kötet nélkül az összes adat elveszik a tároló leállításakor.

**Fejlesztők:** A régi egyetlen kulcsból álló konfigurációt felváltó módosítások letöltése után állítsa vissza vagy egyesítse a `data/config.json`-t az új alapértelmezett szerkezettel a `src/config-defaults/config_default.json` fájlból, ha a helyi fájl továbbra is a megszüntetett mezőket használja (`api_key`, `api_url`, proxy beállítások).

<br/>

**Webes hitelesítés:**

- Alapértelmezett admin: `admin` / `transrewrt26`.
- Felhasználók kezelése: **Beállítások → Felhasználók**.

- Jelszó visszaállítása: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (forrásból: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **FIGYELEM**<br/>
> Az alapértelmezett admin jelszót azonnal változtassa meg minden hálózatról elérhető gépen.

<br/>

A kulcsfontosságú beállítások (betűtípus, modellek, nyelvek stb.) az alkalmazás Beállítások menüpontjában érhetők el.

<br/><br/>

<a id="development-and-architecture"></a>

## Fejlesztés és architektúra

- **Fejlesztés:** Beállítás, fordítás, tesztelés és telepítés (Electron, Web, Docker) – lásd a **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** fájlt.
- **Architektúra és rendszeráttekintés:** Mappaszerkezet, technológiai verem, tervezési döntések – lásd a **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** fájlt.

<br/><br/>

<a id="reporting-issues"></a>

## Hibabejelentés

Nyisson hibajegyet a [GitHubon](https://github.com/wsj-br/transrewrt/issues). Adja meg a platformot (Windows / Linux / Docker) és az alkalmazás verzióját (ez látható az „Erről” párbeszédablakban vagy a Kiadások oldalon).

<br/><br/>

<a id="disclaimer"></a>

## Felelősségkizárás

A terméknevek és ikonok a jogosult tulajdonában állnak, és kizárólag azonosítási célra kerülnek felhasználásra. Ez a szoftver semmilyen módon nem kapcsolódik a megemlített márkákhoz, és azok nem támogatják azt.

<br/><br/>

<a id="license"></a>

## Licenc

Copyright © 2026 Waldemar Scudeller Jr.

[Apache Licenc 2.0](LICENSE)