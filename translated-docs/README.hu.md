---
translation_last_updated: '2026-03-31T22:57:15.906Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: hu
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tartalomjegyzék**

- [Képernyőképek](#screenshots)
- [Tartalomjegyzék](#table-of-contents)
- [Gyors indítás](#quick-start)
- [Telepítés](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Időzóna beállítása](#configuring-the-timezone)
- [OpenRouter API kulcs beszerzése](#getting-an-openrouter-api-key)
- [Konfiguráció és környezet](#configuration-and-environment)
- [Fejlesztés és architektúra](#development-and-architecture)
- [Hibák jelentése](#reporting-issues)
- [Felelősségkizárás](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

**Más nyelveken olvasható:**
[Angol (Egyesült Királyság)](../README.md) · [Portugál (Brazília)](README.pt-BR.md) · [Arab](README.ar.md) · [Bengáli](README.bn.md) · [Katalán](README.ca.md) · [Egyszerűsített kínai](README.zh-CN.md) · [Hagyományos kínai](README.zh-TW.md) · [Horvát](README.hr.md) · [Cseh](README.cs.md) · [Holland](README.nl.md) · [Angol (USA)](README.en-US.md) · [Filippínó](README.tl.md) · [Francia](README.fr.md) · [Német](README.de.md) · [Görög](README.el.md) · [Hindi](README.hi.md) · [Magyar](README.hu.md) · [Olasz](README.it.md) · [Japán](README.ja.md) · [Jávai](README.jv.md) · [Koreai](README.ko.md) · [Maláj](README.ms.md) · [Perzsa](README.fa.md) · [Lengyel](README.pl.md) · [Portugál (PT)](README.pt.md) · [Pandzsábi](README.pa.md) · [Román](README.ro.md) · [Orosz](README.ru.md) · [Szlovák](README.sk.md) · [Spanyol](README.es.md) · [Szvahéli](README.sw.md) · [Svéd](README.sv.md) · [Telugu](README.te.md) · [Thai](README.th.md) · [Török](README.tr.md) · [Ukrán](README.uk.md) · [Vietnami](README.vi.md)

> **Megjegyzés a felhasználói felület és a dokumentáció fordításához:** A felhasználói felület minden nyelve, kivéve az eredeti angol (Egyesült Királyság) változatát, mesterséges intelligencia modellekkel lett lefordítva; a szöveg pontatlan vagy hibás lehet.

## Képernyőképek

**Nyelvválasztó**

Nyelvválasztó

**Fordítás**

Fordítás

**Átalakítás – parancsszerkesztő**

Átalakítás – parancsszerkesztő

**Műszerfal**

Műszerfal összegzése – használat

**Előzmények**

Előzmények

**Beállítások – modellkiválasztás**

Beállítások – modellválasztás

## Tartalomjegyzék

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

> ℹ️ **MEGJEGYZÉS**  
>
> Dockerben az LLM hitelesítő adatokat környezeti változókkal kell beállítani, például `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nem a webes felhasználói felületen). Asztali (Electron) verzióban a kulcsokat a **Beállítások → API** menüpontban konfigurálhatja.

**Windows**

Töltse le a legújabb `Transrewrt Setup x.y.z.exe` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) közül, futtassa a telepítőt, majd indítsa el a Start menüből vagy az asztali parancsikonról. Adja meg az API kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót konfigurálnia kell, az OpenRouter gyakori választás ingyenes modellekhez.

**Linux**

Töltse le a CPU-jának megfelelő `.AppImage` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) közül (`x64` tipikus PC-khez, `arm64` sok ARM eszközhöz, beleértve a Raspberry Pi 4+-t is), majd:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Adja meg az API kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót konfigurálnia kell, az OpenRouter gyakori választás ingyenes modellekhez.

**Konzolüzenetek:** A csomagolt Linux verziók (`x64` és `arm64` AppImages) elnyomják a Node elavult figyelmeztetéseit a terminálban (például a beépített `punycode` modul esetén). Ha a Chromium GPU-/EGL-hibákat ír ki, például „GLES3 nem támogatott”, de az alkalmazás működik, ezeket elnémíthatja a hardveres gyorsítás letiltásával:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Ez amd64 architektúrán is érvényes; módosítsa a fájlnév megfelelő letöltéshez. Részletesebb információkért lásd: [Telepítés → Linux (Electron)](#linux-electron).

Debian/Ubuntu rendszereken szükség lehet további **futásidejű** könyvtárakra, amelyeket a Chromium vár (ezek gyakran már megtalálhatók teljes asztali környezetekben). Használja a **`libnotify4`** csomagot az asztali értesítésekhez – **ne** a `libnotify-dev`-et (ez fejlesztéshez szükséges, nem az AppImage futtatásához):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Minimális vagy testreszabott rendszerképek továbbra is hiányzó `.so` miatt meghibásodhatnak; telepítse a hibaüzenetben szereplő csomagot (gyakori kiegészítők: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Egyes környezetekben az AppImages futtatásához FUSE szükséges (pl. `libfuse2` Ubuntu 22.04+ rendszereken), vagy használja az `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` parancsot.

Ugyanez az összefoglaló megtalálható itt: [Telepítés → Linux](#linux-electron).

> ℹ️ **MEGJEGYZÉS**  
>
> macOS jelenleg nem támogatott. A Transrewrt Windows, Linux és Docker rendszerekre érhető el.

Miután az alkalmazás fut, tekintse meg a **[Felhasználói útmutató](USER-GUIDE.hu.md)** című részt a szöveg fordításához, átírásához és átalakításához, a promptok kezeléséhez és a modellek konfigurálásához.

## Telepítés

### Windows (Electron)

- Töltse le a legújabb telepítőt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) közül.
- Futtassa a `.exe` fájlt, és kövesse a telepítő utasításait.
- Első indításkor: indítsa el az alkalmazást a Start menüből vagy az asztali parancsikonról.

> ℹ️ **MEGJEGYZÉS**  
>
> A Windows a következő biztonsági figyelmeztetések egyikét jelenítheti meg (normális jelenség aláíratlan/független alkalmazásoknál):
>
> - **Felhasználói fiókvezérlés (UAC)**: „Engedélyezni szeretné, hogy ez az ismeretlen kiadótól származó alkalmazás módosításokat hajtson végre az eszközén?” → Kattintson az **Igen** gombra.
> - **Microsoft Defender SmartScreen**: „A Windows megvédte a számítógépét” → Kattintson a **További információk** lehetőségre → majd a **Mégis futtatás** gombra.
>
> Ez azért fordulhat elő, mert az alkalmazás nincs aláírva Microsoft vagy más nagy kiadó által – biztonságos, ha a hivatalos GitHub Release-inkről töltötte le
>  (ellenőrizze az alábbi SHA256 ellenőrzőösszeget).

### Linux (Electron)

- Töltse le a megfelelő `.AppImage` fájlt (`x64` vagy `arm64`) a [Releases](https://github.com/wsj-br/transrewrt/releases) oldalról.
- Futtatás: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 rendszereken, vagy használja az `...-arm64.AppImage` fájlnevet ARM64-on.
- **Debian/Ubuntu futtatókörnyezeti könyvtárak** (Electron/Chromium; ugyanaz, mint a [Gyors indítás → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — használja a **`libnotify4`** csomagot, ne a `libnotify-dev`-et. Minimális rendszereken telepítse a terminálban jelzett hiányzó `.so` fájlokat; gyakran szükségesek kiegészítő csomagok, mint például `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`. Az AppImage-hez szükség lehet a `libfuse2` csomagra (Ubuntu 22.04+) vagy használja az `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage` parancsot.
- **GPU üzenetek:** Chromium GPU- vagy EGL-inicializálási hibákat jelenthet egyes rendszereken (különösen ARM-on); az alkalmazás még így is normálisan futtatható. Ezek elkerüléséhez kapcsolja ki a hardveres gyorsítást: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (vagy a megfelelő `arm64` fájlnevet).

### Docker

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

### Időzóna beállítása

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

## OpenRouter API-kulcs beszerzése

A Transrewrt több AI-szolgáltatót is támogat. Az [OpenRouter](https://openrouter.ai) népszerű választás, mert sok modellt egyesít egyetlen kulccsal, és ingyenes modelleket is kínál.

1. Regisztráljon vagy jelentkezzen be az [openrouter.ai](https://openrouter.ai) oldalon.  
2. Nyissa meg a [Kulcsok](https://openrouter.ai/keys) oldalt, és hozzon létre egy új kulcsot (nevezze el, és opcionálisan állítson be hitelkeretet). Ingyenes modelleket használhat hitel hozzáadása nélkül is.  
3. **Asztali (Electron):** illessze be a kulcsokat a **Beállítások → API** menüben. **Docker:** állítsa be a környezeti változókat, például `OPENROUTER_API_KEY` (lásd: [Gyors indítás](#quick-start)).

Ne használja az OpenRouter **Body Builder** modelljét (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) fordításhoz, átíráshoz vagy átalakításhoz: ez a modell JSON kérésadatokat ad vissza, nem a feladatokhoz szükséges kész szöveget. Lásd: [Beállítások → Modellek](USER-GUIDE.hu.md#models) a Felhasználói útmutatóban.

Használhat más szolgáltatókat is (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras), vagy helyileg futtathat modelleket [Ollama](https://ollama.com) segítségével. Lásd a [Konfiguráció](#configuration-and-environment) oldalt a támogatott szolgáltatók és környezeti változók teljes listájáért.

> ⚠️ **FIGYELMEZTETÉS**  
>
> Ha Ollama-t más eszközről, konténerből vagy szolgáltatásból használ, ne feledje konfigurálni az Ollama-t úgy, hogy engedélyezze a külső kapcsolatokat (ne csak localhost).

A korlátokhoz, a saját kulcs használatához (BYOK) és egyéb információkhoz lásd: [OpenRouter hitelesítés](https://openrouter.ai/docs/api/reference/authentication).

## Konfiguráció és környezet

**Konfigurációs fájlok helye**

| Telepítés | Konfiguráció helye |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (használj kötetet az adatmegőrzéshez) |

**Környezeti változók** (csak web/Docker; az Electron a helyi konfigurációs fájlt használja)

| Változó                | Alapértelmezett         | Leírás                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | A szerver figyelő portja                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | A konfigurációs fájl elérési útja                                                                                                     |
| `TZ`                 | `Europe/London`         | IANA időzóna a szerveroldali időhöz (naplózás stb.); a felhasználói felület továbbra is a böngésző időzónáját követi. Lásd: [Docker → időzóna](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(üres)*               | OpenRouter API-kulcs                                                                                                          |
| `OPENAI_API_KEY`     | *(üres)*               | OpenAI API-kulcs                                                                                                              |
| `CEREBRAS_API_KEY`   | *(üres)*               | Cerebras API-kulcs                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(üres)*               | Anthropic API-kulcs                                                                                                           |
| `GOOGLE_API_KEY`     | *(üres)*               | Google Gemini API-kulcs                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(üres)*               | DeepSeek API-kulcs                                                                                                            |
| `GROQ_API_KEY`       | *(üres)*               | Groq API-kulcs                                                                                                                |
| `MISTRAL_API_KEY`    | *(üres)*               | Mistral API-kulcs                                                                                                             |
| `OLLAMA_URL`         | *(üres)*               | Ollama alap URL (pl. `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(üres)*               | xAI API-kulcs                                                                                                                 |

Csak azokat a szolgáltatókat konfiguráld, amelyeket használsz. A modellazonosítók névteresek (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, stb.).

**Költség megjelenítése:** Az OpenRouter alkalmazható esetben pontos számlázott költséget ad vissza. Más szolgáltatók esetén **becsült** költség jelenik meg az OpenRouter nyilvános modellárak alapján, ha OpenRouter kulcs áll rendelkezésre; ha nincs, a nem-OpenRouter költség `0` lehet. A becslések nem számlák.

**Adatok és adatmegőrzés:** Docker esetén csatolj egy kötetet a `/app/data` helyre, hogy a `config.json` és az SQLite adatbázis megmaradjon a tároló újraindításai között. Kötet nélkül minden adat elveszik, amikor a tároló leáll.

**Fejlesztőknek:** Ha frissítést hajtasz végre, amely lecseréli a régi egyszerű kulcsos konfigurációt, akkor add vissza vagy egyesítsd a `data/config.json` fájlt az új alapértelmezett szerkezettel a `src/config-defaults/config_default.json` fájlból, ha a helyi fájlod még a megszűnt mezőket használja (`api_key`, `api_url`, proxy beállítások).

**Webes hitelesítés:**

- Alapértelmezett admin: `admin` / `transrewrt26`.
- Felhasználók kezelése: **Beállítások → Felhasználók**.
- Jelszó visszaállítása: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (forráskódból: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **FIGYELMEZTETÉS**  
>
> Az alapértelmezett admin jelszót azonnal változtassa meg minden hálózatról elérhető gépen.

A főbb beállítások (betűtípus, modellek, nyelvek stb.) az alkalmazás Beállítások menüpontjában érhetők el.

## Fejlesztés és architektúra

- **Fejlesztés:** Telepítés, fordítás, tesztelés és telepítés (Electron, Web, Docker) – lásd: **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektúra és rendszeráttekintés:** Mappastruktúra, technológiai verem, tervezési döntések – lásd: **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Hiba bejelentése

Nyisson hibajegyet a [GitHubon](https://github.com/wsj-br/transrewrt/issues). Adja meg a platformot (Windows / Linux / Docker) és az alkalmazás verzióját (a Verzió párbeszédablakban vagy a Kiadások oldalon látható).

## Felelősségkizárás

A terméknevek és ikonok a jogosultak tulajdonát képezik, kizárólag azonosítási célokra használjuk őket. Ez a szoftver nem kapcsolódik a megemlített márkákhoz, és azok nem is támogatják azt.

## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
