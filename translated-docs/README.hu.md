---
translation_last_updated: '2026-03-29T20:53:25.788Z'
source_file_mtime: '2026-03-29T01:54:18.655Z'
source_file_hash: 27ed6c4cec02f5e6
translation_language: hu
source_file_path: README.md
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

Mesterséges intelligenciával vezérelt szövegfeldolgozó eszköz: fordítás több tucat nyelv között, átírás különböző stílusokban, és átalakítás egyéni parancsokkal – több MI-szolgáltatót használva (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, és helyi Ollama). Asztali alkalmazásként (Electron) vagy önállóan üzemeltethető webalkalmazásként (Docker) futtatható.

- **Fordítás** — több tucat nyelv között, automatikus forrásnyelv-felismeréssel
- **Átírás** — helyesírás-javítás, érthetőség javítása, formális/informális stílus, rövidítés, kibontás, technikai szöveg
- **Átalakítás** — egyéni MI-parancsok; parancsok létrehozása és kezelése, opcionális cél nyelve parancsonként
- **Előzmények** — teljes végrehajtási előzmények bemeneti/kimeneti szöveggel, szűréssel és exportálással
- **Modellek és költség** — modellek kiválasztása bármely beállított szolgáltatótól; költség- és használati műszerfal naplóval, összegzésekkel modell/művelet/nap szerint
- **Felhasználói felület** — többnyelvű felület (több mint 30 nyelv, RTL-támogatással), betűtípusok, ...
- **Webmód** — többfelhasználós támogatás adminisztrátori szerepkörökkel
- **Asztali verzió** — Electron alkalmazás Windows és Linux rendszerekre
- **Önállóan üzemeltethető** — Docker kép amd64 és arm64 architektúrákhoz (Raspberry Pi-kompatibilis)

Telepítés után tekintse meg a **[Felhasználói útmutatót](USER-GUIDE.hu.md)** az összes funkció részletes áttekintéséhez.

<small>**Más nyelveken is elolvasható:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Megjegyzés a felhasználói felület és a dokumentáció fordításához:** A felhasználói felület minden nyelve, kivéve az eredeti angol (Egyesült Királyság) változatát, mesterséges intelligencia modellekkel lett lefordítva; a szöveg pontatlan vagy hibás lehet.

</small>

<br/>

<a id="screenshots"></a>
## Képernyőképek

**Nyelvválasztó**

![Language selector](../images/screenshots/hu/language-selector.png)

**Fordítás**

![Translate](../images/screenshots/hu/translate.png)

**Átalakítás – parancsszerkesztő**

![Transform - prompt editor](../images/screenshots/hu/transform-prompt-edit.png)

**Műszerfal**

![Dashboard summary — usage](../images/screenshots/hu/dashboard-summary.png)

**Előzmények**

![History](../images/screenshots/hu/history.png)

**Beállítások – modellkiválasztás**

![Settings - model selection](../images/screenshots/hu/settings-models.png)

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
- [Konfiguráció és környezet](#configuration-and-environment)
- [Fejlesztés és architektúra](#development-and-architecture)
- [Hibák bejelentése](#reporting-issues)
- [Felelősségkizárás](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Gyors indítás

**Docker (ajánlott saját kiszolgálón futtatáshoz)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Cserélje le a `sk-or-your-key` értéket a [OpenRouter API kulcsára](https://openrouter.ai/keys) (vagy állítson be más szolgáltatói kulcsokat; lásd: [Konfiguráció](#configuration-and-environment)). Nyissa meg a [http://localhost:5000](http://localhost:5000) címet, és módosítsa az alapértelmezett admin jelszót, mielőtt a szolgáltatás nyilvános lenne.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Dockerben az LLM hitelesítő adatok környezeti változókkal állíthatók be, például `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nem a webes felhasználói felületen). Asztali (Electron) verzióban a kulcsokat a **Beállítások → API** menüpontban konfigurálhatja.

<br/>

**Windows**

Töltse le a legújabb `Transrewrt Setup x.y.z.exe` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) közül, futtassa a telepítőt, majd indítsa el a Start menüből vagy az asztali parancsikonról. Adja meg az API kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót konfigurálnia kell, az OpenRouter gyakori választás ingyenes modellekhez.

<br/>

**Linux**

Töltse le a CPU-jának megfelelő `.AppImage` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) közül (`x64` tipikus PC-khez, `arm64` sok ARM eszközhöz, beleértve a Raspberry Pi 4+-t is), majd:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Adja meg az API kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót konfigurálnia kell, az OpenRouter gyakori választás ingyenes modellekhez.

Debian/Ubuntu rendszereken előfordulhat, hogy először további függőségeket kell telepítenie:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Részletekért lásd: [Telepítés → Linux](#linux-electron).

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> macOS jelenleg nem támogatott. A Transrewrt Windows, Linux és Docker rendszerekre érhető el.

<br/>

Miután az alkalmazás fut, tekintse meg a **[Felhasználói útmutató](USER-GUIDE.hu.md)** című részt a szöveg fordításához, átírásához és átalakításához, a promptok kezeléséhez és a modellek konfigurálásához.

<br/><br/>

<a id="installation"></a>
## Telepítés

<a id="windows-electron"></a>
### Windows (Electron)

- Töltse le a legújabb telepítőt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) közül.
- Futtassa a `.exe` fájlt, és kövesse a telepítő utasításait.
- Első indításkor: indítsa el az alkalmazást a Start menüből vagy az asztali parancsikonról.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A Windows az alábbi biztonsági figyelmeztetések egyikét jelenítheti meg (normális aláíratlan/független alkalmazásoknál):
>   - **Felhasználói fiókvezérlés (UAC)**: „Engedélyezi, hogy ez az ismeretlen kiadótól származó alkalmazás módosításokat hajtson végre az eszközén?” → Kattintson az **Igen** gombra.
>   - **Microsoft Defender SmartScreen**: „A Windows megvédte a számítógépét” → Kattintson a **További információk** lehetőségre → **Mégis futtatás**.
>
> Ez azért történik, mert az alkalmazás nincs aláírva Microsofttal vagy nagyobb kiadóval – biztonságos, ha a hivatalos GitHub kiadásainkról töltötte le
>  (ellenőrizze az alábbi SHA256 ellenőrzőösszeget).

<br/>

<a id="linux-electron"></a> ### Linux (Electron)

- Töltse le a megfelelő `.AppImage` fájlt (`x64` vagy `arm64`) innen: [Releases](https://github.com/wsj-br/transrewrt/releases).  
- Futtassa: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 rendszereken, vagy használja a `...-arm64.AppImage` fájlnevet ARM64-on.  
- További függőségek (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`  
- További információkért lásd: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a> ### Docker

- Letöltés: `docker pull ghcr.io/wsj-br/transrewrt:latest`  
- Állítson be legalább egy szolgáltatói kulcsot környezeti változóként (például `OPENROUTER_API_KEY` az OpenRouter számára). Adja át a változókat `-e` kapcsolóval vagy `docker compose` / `.env` fájllal, hogy a titkos kulcsok ne kerüljenek a képbe.  
- A szolgáltatói kulcsokat **nem** a webes felhasználói felületen adja meg; a szerver a környezeti változókból olvassa őket.

Példa – névvel ellátott kötet adatmegőrzéshez (OpenRouter kulcs környezeti változóban):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

vagy ha Docker Compose-t részesít előnyben, használja ezt:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Lásd a [Konfiguráció](#configuration-and-environment) oldalt az összes környezeti változóért, például `PORT`, `CONFIG_PATH`, `TZ` és LLM kulcsok (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a> ### Időzóna beállítása

Az alkalmazás felhasználói felületének dátum- és időbeállításai a **böngésző** helyi beállításait és időzónáját követik. **Szerveroldali** viselkedéshez (naplózás és hasonlók) a tároló a `TZ` környezeti változót használja. Az alapértelmezett érték: `TZ=Europe/London`.

Más időzóna használatához állítsa be a `TZ` értékét a Compose fájlban, például:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Vagy adja át a tároló futtatásakor (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Sok Linux rendszeren a rendszer időzóna nevét a következővel másolhatja:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Az érvényes időzóna nevek listáját a [tz adatbázis](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia) tartja karban.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a> ## OpenRouter API kulcs beszerzése

A Transrewrt több AI-szolgáltatót is támogat. Az [OpenRouter](https://openrouter.ai) népszerű választás, mert sok modellt egyesít egyetlen kulccsal, és ingyenes modelleket is kínál.

1. Regisztráljon vagy jelentkezzen be az [openrouter.ai](https://openrouter.ai) oldalon.  
2. Nyissa meg a [Kulcsok](https://openrouter.ai/keys) oldalt, és hozzon létre egy új kulcsot (nevezze el, és opcionálisan állítson be hitelkeretet). Ingyenes modelleket használhat hitel hozzáadása nélkül is.  
3. **Asztali (Electron):** illessze be a kulcsokat a **Beállítások → API** menüben. **Docker:** állítsa be a környezeti változókat, például `OPENROUTER_API_KEY` (lásd: [Gyors indítás](#quick-start)).

Ne használja az OpenRouter **Body Builder** modelljét ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) fordításhoz, átíráshoz vagy átalakításhoz: ez a modell JSON kérésadatokat ad vissza, nem a feladatokhoz szükséges kész szöveget. Lásd: [Beállítások → Modellek](USER-GUIDE.hu.md#models) a Felhasználói útmutatóban.

Használhat más szolgáltatókat is (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras), vagy helyileg futtathat modelleket [Ollama](https://ollama.com) segítségével. Lásd a [Konfiguráció](#configuration-and-environment) oldalt a támogatott szolgáltatók és környezeti változók teljes listájáért.

> ⚠️ **FIGYELMEZTETÉS**<br/>  
> Ha Ollama-t használ más eszközről, tárolóból vagy szolgáltatásból, ne feledje konfigurálni az Ollama-t úgy, hogy külső kapcsolatokat engedélyezzen (ne csak localhost).

A korlátokhoz, a saját kulcs használatához (BYOK) és egyéb információkhoz lásd: [OpenRouter hitelesítés](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguráció és környezet

**Konfigurációs fájlok helye**

| Telepítés | Konfiguráció helye |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (használj kötetet az adatmegőrzéshez) |

<br/>

**Környezeti változók** (csak web/Docker; az Electron a helyi konfigurációs fájlt használja)

| Változó | Alapértelmezett | Leírás |
| ---------------- | ----------------------- | ----------- |
| `PORT` | `5000` | A szerver figyelő portja |
| `CONFIG_PATH` | `/app/data/config.json` | A konfigurációs fájl elérési útja |
| `TZ` | `Europe/London` | Az IANA időzóna a szerveroldali időhöz (naplózás stb.); a felhasználói felület továbbra is a böngésző beállításait követi. Lásd: [Docker → időzóna](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(üres)* | OpenRouter API kulcs |
| `OPENAI_API_KEY` | *(üres)* | OpenAI API kulcs |
| `CEREBRAS_API_KEY` | *(üres)* | Cerebras API kulcs |
| `ANTHROPIC_API_KEY` | *(üres)* | Anthropic API kulcs |
| `GOOGLE_API_KEY` | *(üres)* | Google Gemini API kulcs |
| `DEEPSEEK_API_KEY` | *(üres)* | DeepSeek API kulcs |
| `GROQ_API_KEY` | *(üres)* | Groq API kulcs |
| `MISTRAL_API_KEY` | *(üres)* | Mistral API kulcs |
| `OLLAMA_URL` | *(üres)* | Ollama alap URL (pl. `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(üres)* | xAI API kulcs |

Csak azokat a szolgáltatókat konfiguráld, amelyeket használsz. A modellazonosítók névteresek (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, stb.).

**Költség megjelenítése:** Az OpenRouter alkalmazható esetben pontos számlázott költséget ad vissza. Más szolgáltatók esetén **becsült** költség jelenik meg az OpenRouter nyilvános modellárak alapján, ha OpenRouter kulcs áll rendelkezésre; ha nincs, a nem-OpenRouter költség `0` lehet. A becslések nem számlák.

<br/>

**Adatok és adatmegőrzés:** Docker esetén csatolj egy kötetet a `/app/data` helyre, hogy a `config.json` és az SQLite adatbázis megmaradjon a tároló újraindításai között. Kötet nélkül minden adat elveszik, amikor a tároló leáll.

**Fejlesztőknek:** Ha frissítést hajtasz végre, amely lecseréli a régi egyszerű kulcsos konfigurációt, akkor add vissza vagy egyesítsd a `data/config.json` fájlt az új alapértelmezett szerkezettel a `src/config-defaults/config_default.json` fájlból, ha a helyi fájlod még a megszűnt mezőket használja (`api_key`, `api_url`, proxy beállítások).

<br/>

**Webes hitelesítés:**

- Alapértelmezett admin: `admin` / `transrewrt26`.
- Felhasználók kezelése: **Beállítások → Felhasználók**.
- Jelszó visszaállítása: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (forráskódból: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **FIGYELEM**<br/>
> Azonnal változtasd meg az alapértelmezett admin jelszót minden hálózatról elérhető gépen.

<br/>

A főbb beállítások (betűtípus, modellek, nyelvek stb.) az alkalmazás Beállítások menüpontjában érhetők el.

<br/><br/>

<a id="development-and-architecture"></a>
## Fejlesztés és architektúra

- **Fejlesztés:** Telepítés, fordítás, tesztelés és telepítés (Electron, Web, Docker) – lásd: **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektúra és rendszeráttekintés:** Mappastruktúra, technológiai verem, tervezési döntések – lásd: **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Hiba bejelentése

Nyisson hibajegyet a [GitHubon](https://github.com/wsj-br/transrewrt/issues). Adja meg a platformot (Windows / Linux / Docker) és az alkalmazás verzióját (a Verzió párbeszédablakban vagy a Kiadások oldalon látható).

<br/><br/>

<a id="disclaimer"></a>
## Felelősségkizárás

A terméknevek és ikonok a jogosultak tulajdonát képezik, kizárólag azonosítási célokra használjuk őket. Ez a szoftver nem kapcsolódik a megemlített márkákhoz, és azok nem is támogatják azt.

<br/><br/>

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)
