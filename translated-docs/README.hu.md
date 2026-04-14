---
translation_last_updated: '2026-04-02T12:41:55.210Z'
source_file_mtime: '2026-04-02T12:39:14.838Z'
source_file_hash: 0826245f792850f3
translation_language: hu
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Bannere"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Verzió"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenc: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Mesterséges intelligenciával vezérelt szövegfeldolgozó eszköz: fordítás több tucat nyelv között, átírás különböző stílusokban, és átalakítás egyéni parancsokkal – több MI-szolgáltatót használva (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, és helyi Ollama). Asztali alkalmazásként (Electron) vagy önállóan üzemeltethető webalkalmazásként (Docker) futtatható.

- **Fordítás** - több tucat nyelv között, automatikus forrásnyelv-felismeréssel
- **Átírás** - helyesírás-javítás, érthetőség javítása, formális/informális stílus, rövidítés, kibontás, technikai szöveg
- **Átalakítás** - egyéni MI-parancsok; parancsok létrehozása és kezelése, opcionális cél nyelve parancsonként
- **Előzmények** - teljes végrehajtási előzmények bemeneti/kimeneti szöveggel, szűréssel és exportálással
- **Modellek és költség** - modellek kiválasztása bármely beállított szolgáltatótól; költség- és használati műszerfal naplóval, összegzésekkel modell/művelet/nap szerint
- **Felhasználói felület** - többnyelvű felület (több mint 30 nyelv, RTL-támogatással), betűtípusok, ...
- **Webmód** - többfelhasználós támogatás adminisztrátori szerepkörökkel
- **Asztali verzió** - Electron alkalmazás Windows és Linux rendszerekre
- **Önállóan üzemeltethető** - Docker kép amd64 és arm64 architektúrákhoz (Raspberry Pi-kompatibilis)

Telepítés után tekintse meg a **[Felhasználói útmutatót](USER-GUIDE.hu.md)** az összes funkció részletes áttekintéséhez.

<small>**Más nyelveken olvasható:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Megjegyzés a felhasználói felület és a dokumentáció fordításához:** A felhasználói felület minden nyelve, kivéve az eredeti angol (Egyesült Királyság) változatát, mesterséges intelligencia modellekkel lett lefordítva; a szöveg pontatlan vagy hibás lehet.

</small>

<br/>

<a id="table-of-contents"></a>
## Tartalomjegyzék

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Képernyőképek](#screenshots)
- [Gyorsindítás](#quick-start)
- [OpenRouter API kulcs beszerzése](#getting-an-openrouter-api-key)
- [Konfiguráció és környezet](#configuration-and-environment)
- [Fejlesztés és architektúra](#development-and-architecture)
- [Hibák jelentése](#reporting-issues)
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
<summary><b>Docker (ajánlott saját üzemeltetéshez)</b></summary>

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

Cserélje le a `sk-or-your-key` értéket a [OpenRouter API kulcsára](https://openrouter.ai/keys) (vagy állítson be más szolgáltatói kulcsokat; lásd: [Konfiguráció](#configuration-and-environment)). Nyissa meg a [http://localhost:5000](http://localhost:5000) címet, és módosítsa az alapértelmezett admin jelszót, mielőtt a szolgáltatás nyilvános lenne.

Állítson be legalább egy szolgáltató kulcsot a környezeti változókon keresztül (például `OPENROUTER_API_KEY` az OpenRouter-hez). Adja át a változókat a `-e` kapcsolóval vagy a `docker compose` / `.env` segítségével, hogy a titkok ne legyenek beépítve a képbe. A szolgáltató kulcsokat **nem** kell beírni a web felhasználói felületre; a szerver a környezetből olvassa őket.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Dockerben az LLM hitelesítő adatokat környezeti változókkal kell beállítani, például `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nem a webes felhasználói felületen). Asztali (Electron) környezetben a kulcsokat a **Beállítások → API** menüpontban konfigurálhatja.

<br/>

Vagy használja a Docker Compose-t:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Lásd a [Konfiguráció](#configuration-and-environment) oldalt az összes környezeti változóért, például `PORT`, `CONFIG_PATH`, `TZ` és LLM kulcsok (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Szerver időzóna (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

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

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Töltse le a legújabb `Transrewrt Setup x.y.z.exe` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról.
- Futtassa a `.exe` fájlt és kövesse a telepítőt.
- Első indítás: indítsa az alkalmazást a Start menüből vagy az asztali parancsikonról.
- Adja meg API kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót be kell állítania; az OpenRouter gyakori az ingyenes modellekhez.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A Windows megjeleníthet egyik ilyen biztonsági figyelmeztetést (normális aláíratlan/indie alkalmazásoknál):
>   - **Felhasználói fiókokontroll (UAC)**: "Engedélyezi, hogy ez az alkalmazás egy ismeretlen kiadótól módosítsa az eszközét?" → Kattintson **Igen**.
>   - **Microsoft Defender SmartScreen**: "A Windows védelmezte a számítógépét" → Kattintson **További információ** → **Futtatás mindenképpen**.
>
> Ez azért történik, mert az alkalmazást nem írta alá a Microsoft vagy egy nagyobb kiadó – biztonságos, ha a hivatalos GitHub kiadásainkról tölti le (ellenőrizze a checksum-okat a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalon az egyes fájlok mellett).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Töltse le a CPU-jának megfelelő `.AppImage` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) közül (`x64` tipikus PC-khez, `arm64` sok ARM eszközhöz, beleértve a Raspberry Pi 4+-t is), majd:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

x86_64/amd64 architektúrákon használja a `x64` fájlnevet; ARM64-en használja a `...-arm64.AppImage` nevet.

Adja meg API kulcsait a **Beállítások → API** menüpontban. Legalább egy szolgáltatót be kell állítania; az OpenRouter gyakori az ingyenes modellekhez.

**Konzolüzenetek:** A csomagolt Linux verziók (`x64` és `arm64` AppImages) elnyomják a Node elavult figyelmeztetéseit a terminálban (például a beépített `punycode` modul esetén). Ha a Chromium GPU-/EGL-hibákat ír ki, például „GLES3 nem támogatott”, de az alkalmazás működik, ezeket elnémíthatja a hardveres gyorsítás letiltásával:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Ez az amd64-re is érvényes; módosítsa a fájlnevet a letöltésének megfelelően.

Debian/Ubuntu rendszereken szükség lehet a Chromium által igényelt további **futási idő** könyvtárakra (ezek gyakran már jelen vannak a teljes asztali telepítésekben). Futtassa az alábbi parancsokat, ha szükséges:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

cserélje le a `libasound2t64`-et `libasound2`-re `arm64` esetén.  Minimális vagy egyéni telepítések még mindig hibázhatnak egy hiányzó `.so` fájllal. Telepítse a hibaüzenetben említett csomagot (gyakori extrák: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Egyes környezetekben az alkalmazást a `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` paranccsal kell futtatni.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> macOS jelenleg nem támogatott. A Transrewrt Windows, Linux és Docker rendszerekre érhető el.

</details>

<br/>

Miután az alkalmazás fut, tekintse meg a **[Felhasználói útmutató](USER-GUIDE.hu.md)** című részt a szöveg fordításához, átírásához és átalakításához, a promptok kezeléséhez és a modellek konfigurálásához.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## OpenRouter API-kulcs beszerzése

A Transrewrt több AI-szolgáltatót is támogat. Az [OpenRouter](https://openrouter.ai) népszerű választás, mert sok modellt egyesít egyetlen kulccsal, és ingyenes modelleket is kínál.

1. Regisztráljon vagy jelentkezzen be az [openrouter.ai](https://openrouter.ai) oldalon.  
2. Nyissa meg a [Kulcsok](https://openrouter.ai/keys) oldalt, és hozzon létre egy új kulcsot (nevezze el, és opcionálisan állítson be hitelkeretet). Ingyenes modelleket használhat hitel hozzáadása nélkül is.  
3. **Asztali (Electron):** illessze be a kulcsokat a **Beállítások → API** menüben. **Docker:** állítsa be a környezeti változókat, például `OPENROUTER_API_KEY` (lásd: [Gyors indítás](#quick-start)).

Ne használja az OpenRouter **Body Builder** modelljét ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) fordításhoz, átíráshoz vagy átalakításhoz: ez a modell JSON kérésadatokat ad vissza, nem a feladatokhoz szükséges befejezett szöveget. Lásd: [Beállítások → Modellek](USER-GUIDE.hu.md#models) a Felhasználói útmutatóban.

Használhat más szolgáltatókat is (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras), vagy helyileg futtathat modelleket [Ollama](https://ollama.com) segítségével. Lásd a [Konfiguráció](#configuration-and-environment) oldalt a támogatott szolgáltatók és környezeti változók teljes listájáért.

</br>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Ha Ollama-t más eszközről, konténerből vagy szolgáltatásból használ, ne feledje, hogy az Ollama-t úgy kell konfigurálni, hogy engedélyezze a külső kapcsolatokat (ne csak localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguráció és környezet

</br>

**Konfigurációs fájlok helye**

| Telepítés | Konfiguráció helye |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (használj kötetet az adatmegőrzéshez) |

<br/>

**Környezeti változók** (csak web/Docker; az Electron a helyi konfigurációs fájlt használja)

| Változó                | Leírás                                                                           |
|------------------------|----------------------------------------------------------------------------------|
| `PORT`                 | Szerver figyelő portja (alapértelmezett: `5000`)                                 |
| `CONFIG_PATH`          | Konfigurációs fájl elérési útja (alapértelmezett: `/app/data/config.json`)       |
| `TZ`                   | Szerveroldali időzóna (naplózás stb.) (alapértelmezett: `Europe/London`)         |
| `OPENROUTER_API_KEY`   | OpenRouter API-kulcs                                                               |
| `OPENAI_API_KEY`       | OpenAI API-kulcs                                                                   |
| `CEREBRAS_API_KEY`     | Cerebras API-kulcs                                                                 |
| `ANTHROPIC_API_KEY`    | Anthropic API-kulcs                                                                |
| `GOOGLE_API_KEY`       | Google Gemini API-kulcs                                                            |
| `DEEPSEEK_API_KEY`     | DeepSeek API-kulcs                                                                 |
| `GROQ_API_KEY`         | Groq API-kulcs                                                                     |
| `MISTRAL_API_KEY`      | Mistral API-kulcs                                                                  |
| `OLLAMA_URL`           | Ollama alap URL (pl. `http://host.docker.internal:11434`)                         |
| `XAI_API_KEY`          | xAI API-kulcs                                                                      |

Csak azokat a szolgáltatókat konfiguráld, amelyeket használsz. A modellazonosítók névteresek (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, stb.).

**Költség megjelenítése:** Az OpenRouter alkalmazható esetben pontos számlázott költséget ad vissza. Más szolgáltatók esetén **becsült** költség jelenik meg az OpenRouter nyilvános modellárak alapján, ha OpenRouter kulcs áll rendelkezésre; ha nincs, a nem-OpenRouter költség `0` lehet. A becslések nem számlák.

<br/>

**Adatok és adatmegőrzés:** Docker esetén csatolj egy kötetet a `/app/data` helyre, hogy a `config.json` és az SQLite adatbázis megmaradjon a tároló újraindításai között. Kötet nélkül minden adat elveszik, amikor a tároló leáll.

<br/>

**Webes hitelesítés:**

- Alapértelmezett admin: `admin` / `transrewrt26`.
- Felhasználók kezelése a **Beállítások → Felhasználók** menüpontban.
- Jelszó visszaállítása: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Azonnal változtassa meg az alapértelmezett admin jelszót minden hálózatról elérhető gépen.

<br/>

A főbb beállítások (betűtípus, modellek, nyelvek stb.) az alkalmazás Beállítások menüpontjában érhetők el.

<br/><br/>

<a id="development-and-architecture"></a>
## Fejlesztés és architektúra

- **Fejlesztés:** Telepítés, fordítás, tesztelés és telepítés (Electron, Web, Docker) – lásd: **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektúra és rendszeráttekintés:** Mappastruktúra, technológiai verem, tervezési döntések – lásd: **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Hibák bejelentése

Nyisson hibajegyet a [GitHubon](https://github.com/wsj-br/transrewrt/issues). Adja meg a platformot (Windows / Linux / Docker) és az alkalmazás verzióját (a Verzió párbeszédablakban vagy a Kiadások oldalon látható).

<br/><br/>

<a id="disclaimer"></a>
## Felelősségkizárás

A terméknevek és ikonok a jogosultak tulajdonát képezik, kizárólag azonosítási célokra használjuk őket. Ez a szoftver nem kapcsolódik a megemlített márkákhoz, és azok nem is támogatják azt.

<br/><br/>

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
