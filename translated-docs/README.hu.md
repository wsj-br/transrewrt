---
translation_last_updated: '2026-05-21T23:12:05.013Z'
source_file_mtime: '2026-05-21T23:09:11.948Z'
source_file_hash: 8a7988e2486931ff07a063a9f29a8a2b09122dc70ddc4f0e8d6d1b22d011f008
translation_language: hu
source_file_path: README.md
translation_models:
  - openai/gpt-4o-mini
  - qwen/qwen3-235b-a22b-2507
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.3.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Mesterséges intelligencián alapuló szövegeszköz: fordítás több tucat nyelv között, átírás különböző stílusokban, és átalakítás egyéni parancsokkal – több MI-szolgáltatót használva (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI és helyi Ollama). Asztali alkalmazásként (Electron) vagy önállóan üzemeltethető webalkalmazásként (Docker) futtatható.

- **Fordítás** – tucatnyi nyelv között, automatikus forrásnyelv-felismeréssel
- **Átírás** – helyesírás-javítás, tisztaság javítása, formális/formálisabb stílus, rövidítés, bővítés, technikai szöveg
- **Átalakítás** – egyéni AI-parancsok; parancsok létrehozása és kezelése, opcionális cél nyelv parancsonként
- **Előzmények** – teljes végrehajtási előzmények bemeneti/kimeneti szöveggel, szűréssel és exportálással
- **Egyszerű és Haladó** - Egyszerű mód (alapértelmezett): válogatott készségek szolgáltatónként (**Ingyenes (OpenRouter)**, **Lite**, **Haladó**, **Műszaki**; csak a kiválasztott szolgáltatóhoz tartozó készségek jelennek meg) modellazonosítók kiválasztása nélkül; Haladó mód: teljes modell lista a konfigurált szolgáltatóktól
- **Modellek és költség** - költség- és használati irányítópultok (Összegzés, Modell szerint, Összes hívás) exportálással; az OpenRouter a tényleges kiadásokat mutatja, más szolgáltatók becsléseket használnak
- **Felhasználói felület** - többnyelvű felület (30+ nyelv, RTL támogatás), betűtípusok, ...
- **Web mód** - többfelhasználós támogatás adminisztrátori szerepkörökkel
- **Asztali alkalmazás** - Electron alkalmazás Windows és Linux rendszerekhez
- **Saját kiszolgálón futtatható** - Docker kép amd64 és arm64 architektúrákhoz (Raspberry Pi-kompatibilis)

A telepítést követően tekintse meg a [**Felhasználói útmutatót**](USER-GUIDE.hu.md) az összes funkció részletes ismertetéséhez.

<small>**Olvassa más nyelveken:** </small>
<small id="lang-list">[English (GB)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **Megjegyzés a felhasználói felület és a dokumentáció fordításához:** Az angol (UK) eredeti nyelvén kívül minden felületi nyelvet MI-modellekkel fordítottunk; a megfogalmazás pontatlan lehet vagy tartalmazhat hibákat.

</small>

<br/>

<a id="table-of-contents"></a>
## Tartalomjegyzék

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Képernyőképek](#screenshots)
- [Gyors indítás](#quick-start)
- [OpenRouter API-kulcs beszerzése](#getting-an-openrouter-api-key)
- [Beállítások és környezet](#configuration-and-environment)
- [Fejlesztés és architektúra](#development-and-architecture)
- [Hibajelentés](#reporting-issues)
- [Felelősségkizárás](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Képernyőképek

**Nyelvválasztó**

![Language selector](../images/screenshots/hu/language-selector.png)

**Fordítás**

![Translate](../images/screenshots/hu/translate.png)

**Átalakítás – parancsszerkesztő**

![Transform - prompt editor](../images/screenshots/hu/transform-prompt-edit.png)

**Műszerfal**

![Dashboard summary - usage](../images/screenshots/hu/dashboard-summary.png)

**Előzmények**

![History](../images/screenshots/hu/history.png)

**Beállítások – modellkiválasztás**

![Settings - model selection](../images/screenshots/hu/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## Gyors indítás

<details>
<summary><b>Docker (ajánlott saját kiszolgálóra)</b></summary>

<a id="docker"></a>

<br/>

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Cserélje le a(z) `sk-or-your-key` kifejezést [OpenRouter API kulcsára](https://openrouter.ai/keys) (vagy állítson be más szolgáltatói kulcsokat; lásd: [Konfiguráció](#configuration-and-environment)). Nyissa meg [http://localhost:5000](http://localhost:5000) címet, és módosítsa az alapértelmezett admin jelszót, mielőtt nyilvánossá tenné a szolgáltatást.

Állítson be legalább egy szolgáltatói kulcsot környezeti változóként (például `OPENROUTER_API_KEY` az OpenRouter-hez). Adja át a változókat `-e` vagy `docker compose` / `.env` segítségével, így a titkok nem kerülnek beégetésre a képbe. A szolgáltatói kulcsokat **nem** a webes felhasználói felületen kell megadni; a kiszolgáló a környezetből olvassa őket.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Dockerben az LLM hitelesítő adatok környezeti változókkal állíthatók be, például `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nem a webes felületen). Asztali (Electron) környezetben a kulcsokat a **Beállítások → API** menüpontban konfigurálhatja.

<br/>

Vagy használjon Docker Compose-t:

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Lásd: [Konfiguráció](#configuration-and-environment) az összes környezeti változóhoz, például `PORT`, `CONFIG_PATH`, `TZ`, és az LLM kulcsokhoz (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Kiszolgáló időzónája (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

Az alkalmazás felhasználói felületének dátuma és ideje a **böngésző** nyelvi beállításait és időzónáját követi. A **szerveroldali** viselkedéshez (naplózás és hasonlók) a konténer a `TZ` környezeti változót használja. Az alapértelmezett érték: `TZ=Europe/London`.

Más időzóna használatához állítsa be a `TZ` változót a Compose fájlban, például:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Vagy adja át futtatáskor (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Sok Linux rendszeren a rendszer időzóna neve másolható ezzel:

```bash
echo TZ=\"$(</etc/timezone)\"
```

A érvényes időzóna nevek listáját a [tz adatbázis](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia) tartja karban.

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Töltse le a legújabb `Transrewrt Setup x.y.z.exe` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról.
- Futtassa a(z) `.exe` fájlt, és kövesse a telepítő utasításait.
- Első indításkor: indítsa el az alkalmazást a Start menüből vagy az asztali parancsikonról.
- Adja meg az API kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót konfigurálni kell; az OpenRouter gyakori választás ingyenes modellekhez.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A Windows az alábbi biztonsági figyelmeztetések egyikét jelenítheti meg (normális jelenség aláíratlan/független alkalmazásoknál):
>   - **Felhasználói fiókvezérlés (UAC)**: „Engedélyezi, hogy ismeretlen kiadó alkalmazása módosításokat hajtson végre az eszközén?” → Kattintson az **Igen** gombra.
>   - **Microsoft Defender SmartScreen**: „A Windows megvédte a számítógépét” → Kattintson a **További információk** → **Mégis futtatás** lehetőségre.
>
> Ez azért történik, mert az alkalmazás nincs aláírva Microsofttól vagy nagy kiadótól – biztonságos, ha hivatalos GitHub kiadásunkról töltötte le (ellenőrizze az ellenőrzőösszegeket a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalon, minden fájl mellett).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Töltse le a `.AppImage` fájlt a processzorához a [Releases](https://github.com/wsj-br/transrewrt/releases) oldalról (`x64` tipikus PC-khez, `arm64` sok ARM eszközhöz, beleértve a Raspberry Pi 4+-t is), majd:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

x86_64/amd64 esetén használja a `x64` fájlnevet; ARM64 esetén a `...-arm64.AppImage` nevet.

Adja meg az API-kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót konfigurálnia kell; az OpenRouter gyakori választás ingyenes modellekhez.

**Konzol üzenetek:** A csomagolt Linux verziók (`x64` és `arm64` AppImages) letiltják a Node elavultsági figyelmeztetéseit a terminálban (például a beépített `punycode` modult). Ha a Chromium GPU-/EGL-hibákat ír ki, például „GLES3 is unsupported”, de az alkalmazás működik, akkor ezeket elnémíthatja a hardveres gyorsítás letiltásával:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Ez amd64 architektúrán is érvényes; módosítsa a fájlnevet a letöltött fájlnak megfelelően.

Debian/Ubuntu rendszereken további **futásidejű** könyvtárakra lehet szükség, amelyeket a Chromium igényel (ezek gyakran már jelen vannak teljes asztali telepítések esetén). Futtassa a lenti parancsokat, ha szükséges:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

cserélje le a `libasound2t64` kifejezést `libasound2`-re `arm64` esetén. Minimális vagy egyéni telepítések esetén továbbra is előfordulhat `.so` fájl hiánya. Telepítse a hibaüzenetben szereplő csomag nevét (gyakori kiegészítők: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Egyes környezetekben előfordulhat, hogy az alkalmazást `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` paranccsal kell futtatnia.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A macOS jelenleg nem támogatott. A Transrewrt Windows, Linux és Docker rendszerekre érhető el.

</details>

<br/>

Miután az alkalmazás fut, tekintse meg a [**Felhasználói útmutatót**](USER-GUIDE.hu.md), hogy megtudja, hogyan fordíthat, írhat át és alakíthat át szöveget, hogyan kezelheti a parancsokat, és hogyan konfigurálhatja a modelleket.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## OpenRouter API-kulcs beszerzése

A Transrewrt több AI-szolgáltatót is támogat. Az [OpenRouter](https://openrouter.ai) népszerű választás, mert sok modellt egyesít egyetlen kulcs alatt, és ingyenes modelleket is kínál.

1. Regisztráljon vagy jelentkezzen be az [openrouter.ai](https://openrouter.ai) oldalon.
2. Nyissa meg a [Keys](https://openrouter.ai/keys) oldalt, és hozzon létre egy új kulcsot (nevezze el, és opcionálisan állítson be hitelkeretet). Ingyenes modelleket használhat hitel hozzáadása nélkül.
3. **Asztali (Electron):** illessze be a kulcsokat a **Beállítások → API** menübe. **Docker:** állítsa be a környezeti változókat, például `OPENROUTER_API_KEY` (lásd: [Quick start](#quick-start)).

Ne használja az OpenRouter **Body Builder** modelljét ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) fordításhoz, átíráshoz vagy átalakításhoz: ez a modell JSON kéréscsomagokat ad vissza, nem a feladatokhoz szükséges befejezett szöveget. Lásd: [Beállítások → Modellek](USER-GUIDE.hu.md#models) a Felhasználói útmutatóban.

Más szolgáltatókat is használhat (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) vagy helyben futtathat modelleket az [Ollama](https://ollama.com) segítségével. Lásd: [Konfiguráció](#configuration-and-environment) a támogatott szolgáltatók és környezeti változók teljes listájáért.

</br>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Ha Ollama-t használ más eszközről, konténerből vagy szolgáltatásból, ne felejtse el konfigurálni az Ollama-t úgy, hogy külső kapcsolatokat engedélyezzen (ne csak localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguráció és környezet

</br>

**Konfigurációs fájlok helye**

| Telepítés | Konfigurációs hely |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (használjon kötetet az adatmegőrzéshez) |

<br/>

**Környezeti változók** (csak web/Docker; az Electron a helyi konfigurációs fájlt használja)

| Változó | Leírás |
|----------------------|------------------------------------------------------------------------------|
| `PORT` | A kiszolgáló figyelő portja (alapértelmezett: `5000`) |
| `CONFIG_PATH`        | A konfigurációs fájl elérési útja (alapértelmezett: `/app/data/config.json`)                |
| `TZ` | A kiszolgáló oldali időzóna (naplózás stb.) (alapértelmezett: `Europe/London`) |
| `HISTORY_DISABLED`   | Kikényszeríti az előzmények kikapcsolását (nem kötelező, alapértelmezett érték: `false`)                  |
| `OPENROUTER_API_KEY` | OpenRouter API-kulcs |
| `OPENAI_API_KEY` | OpenAI API-kulcs |
| `CEREBRAS_API_KEY` | Cerebras API-kulcs |
| `ANTHROPIC_API_KEY` | Anthropic API-kulcs |
| `GOOGLE_API_KEY` | Google Gemini API-kulcs |
| `DEEPSEEK_API_KEY` | DeepSeek API-kulcs |
| `GROQ_API_KEY` | Groq API-kulcs |
| `MISTRAL_API_KEY` | Mistral API-kulcs |
| `OLLAMA_URL` | Ollama alap URL-je (pl. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | xAI API-kulcs                                                                  |

**Adatvédelmi mód:** Az előzmények nyomon követésének kikényszerítéséhez, függetlenül a `config.json` beállítástól vagy a felhasználónkénti preferenciáktól, állítsa a `HISTORY_DISABLED` értékét `true` vagy `1` értékre (kis- és nagybetűk megkülönböztetése nélkül) a **web/Docker szerverfolyamathoz** és/vagy az **Electron asztali főfolyamathoz** (pl. rendszer- vagy indítási környezetben — nem csak a renderelő részhez). Ez letiltja a bemenet/kimenet előzmények tárolását, zárolja a **Beállítások → Általános beállítások → Előzmények** menüpontot, és blokkolja az Előzményekhez kapcsolódó API-kat.

Csak azokat a szolgáltatókat konfiguráld, amelyeket használsz. A modellazonosítók névteresek (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, stb.).

**Költségmegjelenítés:** Az OpenRouter alkalmazható esetekben a pontos számlázott költséget adja vissza. Más szolgáltatók az OpenRouter nyilvános modellárak alapján számított **becsült** költséget használják, ha rendelkezésre áll OpenRouter kulcs; ha nincs, a nem-OpenRouter költség `0` lehet. A becslések nem számlák.

<br/>

**Adatok és adatmegőrzés:** Docker esetén csatlakoztass egy kötetet `/app/data` helyre, hogy a `config.json` és az SQLite adatbázis megmaradjon a tároló újraindítása után is. Kötet nélkül minden adat elveszik, amikor a tároló leáll.

<br/>

**Webes hitelesítés:**

- Alapértelmezett admin: `admin` / `transrewrt26`.
- Felhasználók kezelése: **Beállítások → Felhasználók**.
- Jelszó visszaállítása: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Azonnal változtasd meg az alapértelmezett admin jelszót minden hálózatról elérhető gépen.

<br/>

A kulcsbeállítások (betűtípus, modellek, nyelvek, stb.) az alkalmazás Beállítások menüpontjában érhetők el.

<br/><br/>

<a id="development-and-architecture"></a>
## Fejlesztés és architektúra

- **Fejlesztés:** Beállítás, szerkesztés, tesztelés és telepítés (Electron, Web, Docker) – lásd [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).
- **Architektúra és rendszeráttekintés:** Mappastruktúra, technológiai verem, tervezési döntések – lásd [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md).

<br/><br/>

<a id="reporting-issues"></a>
## Hiba bejelentése

Nyiss hibajegyet a [GitHubon](https://github.com/wsj-br/transrewrt/issues). Add meg a platformot (Windows / Linux / Docker) és az alkalmazás verzióját (a Névjegy ablakban vagy a Kiadások oldalon látható).

<br/><br/>

<a id="disclaimer"></a>
## Felelősségkizárás

A terméknevek és ikonok a jogosultak tulajdonát képezik, kizárólag azonosítási célokra használjuk őket. Ez a szoftver nem kapcsolódik a megemlített márkákhoz, és azok nem is támogatják azt.

<br/><br/>

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
