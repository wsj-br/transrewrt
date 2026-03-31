---
translation_last_updated: '2026-03-31T22:57:45.567Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: sk
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah**

- [Snímky obrazovky](#screenshots)
- [Obsah](#table-of-contents)
- [Rýchly štart](#quick-start)
- [Inštalácia](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Konfigurácia časového pásma](#configuring-the-timezone)
- [Získanie kľúča OpenRouter API](#getting-an-openrouter-api-key)
- [Konfigurácia a prostredie](#configuration-and-environment)
- [Vývoj a architektúra](#development-and-architecture)
- [Hlásenie problémov](#reporting-issues)
- [Zrieknutie sa zodpovednosti](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Nástroj na spracovanie textu s využitím umelej inteligencie: preklad medzi jazykmi, prepis v rôznych štýloch a transformácia pomocou vlastných výziev – s využitím viacerých poskytovateľov umelej inteligencie (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a lokálny Ollama). Spustiteľný ako desktopová aplikácia (Electron) alebo ako samostatne hostovaná webová aplikácia (Docker).

- **Preložiť** — medzi desiatkami jazykov, s automatickým zisťovaním zdrojového jazyka
- **Prepísať** — opraviť gramatiku, zlepšiť zrozumiteľnosť, formálny/neformálny štýl, skrátiť, rozšíriť, technický štýl
- **Transformovať** — vlastné výzvy pre AI; vytváranie a správa výziev, voliteľný cieľový jazyk pre každú výzvu
- **História** — kompletná história vykonaní s vstupným/výstupným textom, filtrovanie a export
- **Modely a náklady** — výber modelov od akéhokoľvek nakonfigurovaného poskytovateľa; nástenky nákladov a využitia s denníkom, zhrnutiami podľa modelu/operácie/dňa
- **UI** — viacjazyčné rozhranie (30+ jazykov, podpora RTL), písma, ...
- **Webový režim** — podpora viacerých používateľov s rolami správcu
- **Desktop** — aplikácia Electron pre Windows a Linux
- **Samostatne hostované** — obraz Docker pre amd64 a arm64 (pripravené pre Raspberry Pi)

Po inštalácii si prečítajte **[Používateľskú príručku](USER-GUIDE.sk.md)**, ktorá obsahuje podrobný prehľad všetkých funkcií.

**Prečítajte si v iných jazykoch:**
[Angličtina (VB)](../README.md) · [Portugalčina (BR)](README.pt-BR.md) · [Arabčina](README.ar.md) · [Bengálčina](README.bn.md) · [Katalánčina](README.ca.md) · [Zjednodušená čínština](README.zh-CN.md) · [Tradičná čínština](README.zh-TW.md) · [Chorvátčina](README.hr.md) · [Čeština](README.cs.md) · [Holandčina](README.nl.md) · [Angličtina (USA)](README.en-US.md) · [Filipínčina](README.tl.md) · [Francúzština](README.fr.md) · [Nemčina](README.de.md) · [Gréčtina](README.el.md) · [Hindčina](README.hi.md) · [Maďarčina](README.hu.md) · [Taliančina](README.it.md) · [Japončina](README.ja.md) · [Javánčina](README.jv.md) · [Kórejčina](README.ko.md) · [Malajčina](README.ms.md) · [Perzština](README.fa.md) · [Poľština](README.pl.md) · [Portugalčina (PT)](README.pt.md) · [Punjábčina](README.pa.md) · [Rumunčina](README.ro.md) · [Ruština](README.ru.md) · [Slovenčina](README.sk.md) · [Španielčina](README.es.md) · [Svahilčina](README.sw.md) · [Švédčina](README.sv.md) · [Telugčina](README.te.md) · [Thajčina](README.th.md) · [Turečtina](README.tr.md) · [Ukrajinčina](README.uk.md) · [Vietnamčina](README.vi.md)

> **Poznámka k prekladom rozhrania a dokumentácie:** Všetky jazyky rozhrania okrem pôvodnej angličtiny (VB)
> boli preložené pomocou modelov umelej inteligencie; slovné znenie môže byť nepresné alebo obsahovať chyby.

## Snímky obrazovky

**Výber jazyka**

Výber jazyka

**Preložiť**

Preložiť

**Transformovať – editor výziev**

Transformovať – editor výziev

**Nástenka**

Zhrnutie nástenky – využitie

**História**

História

**Nastavenia – výber modelu**

Nastavenia – výber modelu

## Obsah

- [Rýchly štart](#quick-start)
- [Inštalácia](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Nastavenie časového pásma](#configuring-the-timezone)
- [Získanie API kľúča OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurácia a prostredie](#configuration-and-environment)
- [Vývoj a architektúra](#development-and-architecture)
- [Hlásenie problémov](#reporting-issues)
- [Zrieknutie sa zodpovednosti](#disclaimer)
- [Licencia](#license)

## Rýchly štart

**Docker (odporúčané pre samostatné hostovanie)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `sk-or-your-key` svojím [OpenRouter API kľúčom](https://openrouter.ai/keys) (alebo nastavte kľúče iných poskytovateľov; pozri [Konfigurácia](#configuration-and-environment)). Otvorte [http://localhost:5000](http://localhost:5000) a zmeňte predvolené heslo správcu pred tým, ako službu zverejníte.

> ℹ️ **Poznámka**  
>
> V prostredí Docker sa poverenia LLM nastavujú pomocou premenných prostredia, ako napríklad `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nie cez webové rozhranie). Na desktopovej verzii (Electron) kľúče konfigurujete v **Nastavenia → API**.

**Windows**

Stiahnite najnovší súbor `Transrewrt Setup x.y.z.exe` z časti [Releases](https://github.com/wsj-br/transrewrt/releases), spustite inštalátor a potom spustite aplikáciu z ponuky Štart alebo z odkazu na ploche. Zadajte svoje API kľúče v **Nastavenia → API**. Musíte nakonfigurovať aspoň jedného poskytovateľa, OpenRouter je bežný pre modely zadarmo.

**Linux**

Stiahnite súbor `.AppImage` pre svoj procesor z časti [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` pre bežné počítače, `arm64` pre mnohé zariadenia ARM vrátane Raspberry Pi 4+), potom:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadajte svoje API kľúče v **Nastavenia → API**. Musíte nakonfigurovať aspoň jedného poskytovateľa, OpenRouter je bežný pre modely zadarmo.

**Správy v konzole:** Balíčky pre Linux (`x64` a `arm64` AppImages) potláčajú upozornenia Node o zastaralosti v termináli (napríklad vstavaný modul `punycode`). Ak Chromium zobrazuje chyby GPU / EGL, napríklad „GLES3 nie je podporované“, ale aplikácia funguje, môžete ich potlačiť vypnutím hardvérovej akcelerácie:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

To platí aj pre amd64; upravte názov súboru podľa vášho sťahovania. Viac podrobností nájdete v časti [Inštalácia → Linux (Electron)](#linux-electron).

V systémoch Debian/Ubuntu môžu byť potrebné dodatočné **bežiace** knižnice, ktoré Chromium očakáva (často už prítomné na kompletných desktopových systémoch). Pre oznámenia na pracovnej ploche použite **`libnotify4`** – **nie** `libnotify-dev` (to slúži na vývoj softvéru, nie na spúšťanie zabaleného AppImage):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Minimálne alebo vlastné inštalácie môžu naďalej zlyhať kvôli chýbajúcemu `.so`; nainštalujte balík, ktorý je uvedený v chybovej správe (časté doplnky: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Niektoré prostredia vyžadujú FUSE na spustenie AppImages (napr. `libfuse2` na Ubuntu 22.04+), alebo použite `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

Rovnaké zhrnutie nájdete v časti [Inštalácia → Linux](#linux-electron).

> ℹ️ **Poznámka**  
>
> macOS nie je momentálne podporovaný. Transrewrt je dostupný pre Windows, Linux a Docker.

Keď je aplikácia spustená, pozrite si **[Používateľskú príručku](USER-GUIDE.sk.md)**, kde sa dozviete, ako prekladať, prepisovať a transformovať text, spravovať výzvy a konfigurovať modely.

## Inštalácia

### Windows (Electron)

- Stiahnite najnovší inštalátor z [Releases](https://github.com/wsj-br/transrewrt/releases).
- Spustite súbor `.exe` a postupujte podľa inštalátora.
- Pri prvom spustení: spustite aplikáciu z ponuky Štart alebo z odkazu na ploche.

> ℹ️ **Poznámka**  
>
> Windows môže zobraziť jedno z týchto upozornení na bezpečnosť (bežné pre nepodpísané alebo nezávislé aplikácie):
>
> - **Kontrola účtu používateľa (UAC)**: „Chcete umožniť tejto aplikácii od neznámeho vydavateľa zmeniť váš počítač?“ → Kliknite na **Áno**.
> - **Microsoft Defender SmartScreen**: „Windows ochránil váš počítač“ → Kliknite na **Ďalšie informácie** → **Aj napriek tomu spustiť**.
>
> K tomu dochádza preto, lebo aplikácia nie je podpísaná spoločnosťou Microsoft ani veľkým vydavateľom – je bezpečná, ak bola stiahnutá z našich oficiálnych vydania na GitHub-e
>  (overte kontrolný súčet SHA256 uvedený nižšie).

### Linux (Electron)

- Stiahnite si zodpovedajúci súbor `.AppImage` (`x64` alebo `arm64`) z časti [Vydania](https://github.com/wsj-br/transrewrt/releases).
- Spustite: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, alebo použite súbor s názvom `...-arm64.AppImage` na ARM64.
- **Bežiace knižnice Debian/Ubuntu** (Electron/Chromium; rovnaké ako v časti [Rýchly štart → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — použite **`libnotify4`**, nie `libnotify-dev`. Na minimálnych systémoch nainštalujte všetky chýbajúce `.so`, ktoré sú hlásené v termináli; často sú potrebné doplnky ako `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`. AppImage môže vyžadovať `libfuse2` (Ubuntu 22.04+) alebo `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Správy GPU:** Chromium môže zaznamenávať chyby inicializácie GPU alebo EGL na niektorých systémoch (najmä ARM); aplikácia sa môže napriek tomu bežne spustiť. Ak chcete tieto správy zabrániť, spustite aplikáciu s vypnutým hardvérovým zrýchlením: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (alebo použite názov pre `arm64`).

### Docker

- Stiahnite obrázok: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Nastavte aspoň jeden kľúč poskytovateľa prostredníctvom premenných prostredia (napr. `OPENROUTER_API_KEY` pre OpenRouter). Premenné odovzdajte pomocou `-e` alebo cez `docker compose` / `.env`, aby sa tajomstvá nezapracovali do obrazu.
- Kľúče poskytovateľov sa **nezadávajú** v webovom rozhraní; server ich číta z premenných prostredia.

Príklad – pomenovaný zväzok pre trvalosť (kľúč OpenRouter cez premenné prostredia):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

alebo ak uprednostňujete Docker Compose, použite:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Zoznam všetkých premenných prostredia, ako napr. `PORT`, `CONFIG_PATH`, `TZ` a kľúče LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …), nájdete v časti [Konfigurácia](#configuration-and-environment).

### Konfigurácia časovej zóny

Dátum a čas v užívateľskom rozhraní aplikácie nasledujú **prehliadačové** lokalizácie a časové pásmo. Pre **serverové** správanie (napr. logovanie) kontajner používa premennú prostredia `TZ`. Predvolená hodnota je `TZ=Europe/London`.

Ak chcete použiť iné časové pásmo, nastavte `TZ` vo vašom súbore Compose, napríklad:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Alebo ju odovzdajte pri spustení kontajnera (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Na mnohých Linuxových systémoch môžete názov systémového časového pásma skopírovať príkazom:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Zoznam platných názvov časových pásiem je udržiavaný v [tz databáze](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

## Získanie API kľúča OpenRouter

Transrewrt podporuje viacerých poskytovateľov umelej inteligencie. [OpenRouter](https://openrouter.ai) je obľúbenou voľbou, pretože agreguje množstvo modelov pod jedným kľúčom a ponúka aj modely zadarmo.

1. Zaregistrujte sa alebo sa prihláste na [openrouter.ai](https://openrouter.ai).
2. Otvorte stránku [Keys](https://openrouter.ai/keys) a vytvorte nový kľúč (pomenujte ho a voliteľne nastavte limit kreditu). Môžete používať modely zadarmo bez pridania kreditu.
3. **Desktop (Electron):** vložte kľúče do **Nastavenia → API**. **Docker:** nastavte premenné prostredia ako `OPENROUTER_API_KEY` (pozri [Rýchly štart](#quick-start)).

Nepoužívajte model **Body Builder** od OpenRouter (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) na preklad, prepisovanie alebo transformáciu: tento model vracia iba JSON dátové zaťaženie požiadavky, nie dokončený text pre tieto úlohy. Viac informácií nájdete v časti [Nastavenia → Modely](USER-GUIDE.sk.md#models) v Používateľskej príručke.

Môžete tiež použiť iných poskytovateľov (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) alebo spúšťať modely lokálne pomocou [Ollama](https://ollama.com). Úplný zoznam podporovaných poskytovateľov a premenných prostredia nájdete v časti [Konfigurácia](#configuration-and-environment).

> ⚠️ **VAROVANIE**  
>
> Ak používate Ollamu z iného zariadenia, kontajnera alebo služby, nezabudnite nakonfigurovať Ollamu tak, aby umožnila externé pripojenia (nie iba localhost).

Pre limity, BYOK a ďalšie informácie pozrite [OpenRouter overenie totožnosti](https://openrouter.ai/docs/api/reference/authentication).

## Konfigurácia a prostredie

**Umiestnenia konfiguračných súborov**

| Nasadenie         | Umiestnenie konfigurácie                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (použite zväzok na uchovanie) |

**Premenné prostredia** (iba web/Docker; Electron používa lokálny konfiguračný súbor)

| Premenná              | Predvolené              | Popis                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Port, na ktorom počúva server                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | Cesta k konfiguračnému súboru                                                                                                     |
| `TZ`                 | `Europe/London`         | IANA časová zóna pre čas na strane servera (logovanie atď.); používateľské rozhranie stále sleduje prehliadač. Viac v časti [Docker → časová zóna](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(prázdne)*             | API kľúč OpenRouter                                                                                                          |
| `OPENAI_API_KEY`     | *(prázdne)*             | API kľúč OpenAI                                                                                                              |
| `CEREBRAS_API_KEY`   | *(prázdne)*             | API kľúč Cerebras                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(prázdne)*             | API kľúč Anthropic                                                                                                           |
| `GOOGLE_API_KEY`     | *(prázdne)*             | API kľúč Google Gemini                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(prázdne)*             | API kľúč DeepSeek                                                                                                            |
| `GROQ_API_KEY`       | *(prázdne)*             | API kľúč Groq                                                                                                                |
| `MISTRAL_API_KEY`    | *(prázdne)*             | API kľúč Mistral                                                                                                             |
| `OLLAMA_URL`         | *(prázdne)*             | Základné URL Ollamy (napr. `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(prázdne)*             | API kľúč xAI                                                                                                                 |

Nakonfigurujte len poskytovateľov, ktorých používate. Identifikátory modelov sú menovane (napr. `openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, atď.).

**Zobrazenie nákladov:** OpenRouter vracia presné vyúčtované náklady, keď je to možné. Ostatní poskytovatelia používajú **odhadované** náklady z verejného cenníka modelov OpenRouter, ak je k dispozícii kľúč OpenRouter; bez neho môžu náklady pre ne-OpenRouter poskytovateľov zobraziť ako `0`. Odhady nie sú faktúrami.

**Údaje a trvalosť:** Pre Docker pripojte zväzok do `/app/data`, aby sa `config.json` a databáza SQLite uchovávali aj po reštarte kontajnera. Bez zväzku sa všetky údaje stratia po zastavení kontajnera.

**Vývojári:** Po stiahnutí zmien, ktoré nahradzujú starú konfiguráciu s jedným kľúčom, obnovte alebo zlúčte `data/config.json` s novým predvoleným tvarom z `src/config-defaults/config_default.json`, ak váš lokálny súbor stále používa odstránené polia (`api_key`, `api_url`, proxy možnosti).

**Overenie totožnosti na webe:**

- Predvolený správca: `admin` / `transrewrt26`.
- Správa používateľov v **Nastavenia → Používatelia**.
- Obnovenie hesla: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (zo zdrojového kódu: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **UPOZORNENIE**  
>
> Okamžite zmeňte predvolené heslo správcu na akomkoľvek hostiteľovi prístupnom cez sieť.

Kľúčové nastavenia (písmo, modely, jazyky atď.) sú k dispozícii v nastaveniach aplikácie.

## Vývoj a architektúra

- **Vývoj:** Nastavenie, zostavenie, testovanie a nasadenie (Electron, Web, Docker) – pozrite **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektúra a prehľad systému:** Štruktúra priečinkov, technologický zásobník, návrhové rozhodnutia – pozrite **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Nahlásenie problémov

Otvorte problém na [GitHub](https://github.com/wsj-br/transrewrt/issues). Uveďte svoju platformu (Windows / Linux / Docker) a verziu aplikácie (uvedená v dialógu O aplikácii alebo na stránke Releases).

## Zrieknutie sa zodpovednosti

Názvy produktov a ikony patria ich príslušným vlastníkom a používajú sa výlučne na identifikačné účely. Tento softvér nie je spojený ani odporúčaný žiadnou z uvedených značiek.

## Licencia

Autorské práva © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
