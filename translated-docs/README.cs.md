---
translation_last_updated: '2026-03-31T22:56:59.008Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: cs
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah**

- [Snímky obrazovky](#screenshots)
- [Obsah dokumentu](#table-of-contents)
- [Rychlý start](#quick-start)
- [Instalace](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Nastavení časového pásma](#configuring-the-timezone)
- [Získání OpenRouter API klíče](#getting-an-openrouter-api-key)
- [Konfigurace a prostředí](#configuration-and-environment)
- [Vývoj a architektura](#development-and-architecture)
- [Hlášení problémů](#reporting-issues)
- [Zřeknutí se záruk](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Nástroj pro práci s textem s využitím AI: překlad mezi jazyky, přepis v různých stylech a transformace pomocí vlastních promptů – s využitím více poskytovatelů AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a lokální Ollama). Spouští se jako desktopová aplikace (Electron) nebo jako samostatně hostovaná webová aplikace (Docker).

- **Přeložit** — mezi desítkami jazyků, s automatickým zjištěním zdrojového jazyka
- **Přepis** — oprava gramatiky, zlepšení srozumitelnosti, formální/neformální styl, zkrácení, rozšíření, technický styl
- **Transformace** — vlastní prompty AI; vytváření a správa promptů, volitelný cílový jazyk pro každý prompt
- **Historie** — úplná historie provedených akcí s vstupním a výstupním textem, filtrování a export
- **Modely a cena** — výběr modelů od libovolného nakonfigurovaného poskytovatele; dashboardy nákladů a využití s logy, shrnutí podle modelu/operace/dne
- **UI** — vícejazyčné rozhraní (30+ jazyků, podpora RTL), písma, ...
- **Webový režim** — podpora více uživatelů s rolemi správce
- **Desktop** — aplikace Electron pro Windows a Linux
- **Samostatně hostované** — Docker image pro amd64 a arm64 (připraveno pro Raspberry Pi)

Po instalaci si přečtěte **[Uživatelskou příručku](USER-GUIDE.cs.md)**, která obsahuje podrobný průvodce všemi funkcemi.

**Přečtěte si v jiných jazycích:**
[Angličtina (UK)](../README.md) · [Portugalština (BR)](README.pt-BR.md) · [Arabština](README.ar.md) · [Bengálština](README.bn.md) · [Katalánština](README.ca.md) · [Zjednodušená čínština](README.zh-CN.md) · [Tradiční čínština](README.zh-TW.md) · [Chorvatština](README.hr.md) · [Čeština](README.cs.md) · [Nizozemština](README.nl.md) · [Angličtina (US)](README.en-US.md) · [Filipínština](README.tl.md) · [Francouzština](README.fr.md) · [Němčina](README.de.md) · [Řečtina](README.el.md) · [Hindština](README.hi.md) · [Maďarština](README.hu.md) · [Italština](README.it.md) · [Japonština](README.ja.md) · [Javánština](README.jv.md) · [Korejština](README.ko.md) · [Malajština](README.ms.md) · [Perština](README.fa.md) · [Polština](README.pl.md) · [Portugalština (PT)](README.pt.md) · [Pandžábština](README.pa.md) · [Rumunština](README.ro.md) · [Ruština](README.ru.md) · [Slovenština](README.sk.md) · [Španělština](README.es.md) · [Svahilština](README.sw.md) · [Švédština](README.sv.md) · [Telugština](README.te.md) · [Thajština](README.th.md) · [Turečtina](README.tr.md) · [Ukrajinština](README.uk.md) · [Vietnamština](README.vi.md)

> **Poznámka k překladům uživatelského rozhraní a dokumentace:** Všechny jazyky rozhraní kromě původní angličtiny (UK)
> byly přeloženy pomocí modelů AI; formulace mohou být nepřesné nebo obsahovat chyby.

## Snímky obrazovky

**Výběr jazyka**

Výběr jazyka

**Překlad**

Přeložit

**Transformace – editor promptů**

Transformace – editor promptu

**Dashboard**

Přehled na Dashboardu – využití

**Historie**

Historie

**Nastavení – výběr modelu**

Nastavení – výběr modelu

## Obsah dokumentu

- [Rychlý start](#quick-start)
- [Instalace](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Nastavení časového pásma](#configuring-the-timezone)
- [Získání klíče OpenRouter API](#getting-an-openrouter-api-key)
- [Konfigurace a prostředí](#configuration-and-environment)
- [Vývoj a architektura](#development-and-architecture)
- [Hlášení problémů](#reporting-issues)
- [Zřeknutí se záruk](#disclaimer)
- [Licence](#license)

## Rychlý start

**Docker (doporučeno pro samoobslužné hostování)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `sk-or-your-key` svým [klíčem OpenRouter API](https://openrouter.ai/keys) (nebo nastavte klíče jiných poskytovatelů; viz [Konfigurace](#configuration-and-environment)). Otevřete [http://localhost:5000](http://localhost:5000) a změňte výchozí heslo správce před tím, než službu zpřístupníte.

> ℹ️ **POZNÁMKA**  
>
> V Dockeru se přihlašovací údaje k LLM nastavují pomocí proměnných prostředí, jako je `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nikoli přes webové rozhraní). Na desktopu (Electron) klíče konfigurujete v **Nastavení → API**.

**Windows**

Stáhněte si nejnovější `Transrewrt Setup x.y.z.exe` z části [Releases](https://github.com/wsj-br/transrewrt/releases), spusťte instalační program a poté spusťte aplikaci z nabídky Start nebo z ikony na ploše. Zadejte své klíče API v **Nastavení → API**. Musíte nakonfigurovat alespoň jednoho poskytovatele, OpenRouter je běžný pro modely zdarma.

**Linux**

Stáhněte si `.AppImage` pro váš procesor z části [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` pro běžné počítače, `arm64` pro mnoho zařízení ARM, včetně Raspberry Pi 4+), poté:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadejte své klíče API v **Nastavení → API**. Musíte nakonfigurovat alespoň jednoho poskytovatele, OpenRouter je běžný pro modely zdarma.

**Zprávy v konzoli:** Balíčky pro Linux (`x64` a `arm64` AppImages) potlačují varování Node o zastaralosti v terminálu (například vestavěný modul `punycode`). Pokud Chromium zobrazuje chyby GPU/EGL, například „GLES3 není podporován“, ale aplikace funguje, můžete je potlačit vypnutím hardwarové akcelerace:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

To platí i pro amd64; upravte název souboru podle stažené verze. Více podrobností viz [Instalace → Linux (Electron)](#linux-electron).

Ve Debianu/Ubuntu můžete potřebovat dodatečné **běhové** knihovny, které Chromium očekává (často již přítomné na plných desktopových prostředích). Pro oznámení na ploše použijte **`libnotify4`** – **nikoli** `libnotify-dev` (to slouží pro vývoj softwaru, ne pro spouštění balíčků AppImage):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Minimální nebo vlastní image mohou stále selhat kvůli chybějícímu `.so`; nainstalujte balíček uvedený v chybové zprávě (běžné doplňky: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Některá prostředí vyžadují FUSE pro spuštění AppImages (např. `libfuse2` na Ubuntu 22.04+), nebo použijte `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

Stejný přehled najdete v části [Instalace → Linux](#linux-electron).

> ℹ️ **POZNÁMKA**  
>
> macOS není momentálně podporován. Transrewrt je dostupný pro Windows, Linux a Docker.

Jakmile běží aplikace, podívejte se do **[Uživatelské příručky](USER-GUIDE.cs.md)**, kde se dozvíte, jak překládat, přepisovat a transformovat text, spravovat výzvy a konfigurovat modely.

## Instalace

### Windows (Electron)

- Stáhněte si nejnovější instalační program z části [Releases](https://github.com/wsj-br/transrewrt/releases).
- Spusťte `.exe` a postupujte podle pokynů instalačního programu.
- Při prvním spuštění: spusťte aplikaci z nabídky Start nebo z ikony na ploše.

> ℹ️ **POZNÁMKA**  
> 
> Windows může zobrazit jedno z těchto upozornění na zabezpečení (běžné u nepodepsaných nebo nezávislých aplikací):
> 
> - **Kontrola účtu uživatele (UAC)**: „Chcete povolit této aplikaci od neznámého vydavatele provést změny na vašem zařízení?“ → Klikněte na **Ano**.
> - **Microsoft Defender SmartScreen**: „Windows ochránil váš počítač“ → Klikněte na **Další informace** → **Přesto spustit**.
> 
> K tomu dochází, protože aplikace není podepsaná společností Microsoft nebo jiným velkým vydavatelem – je bezpečná, pokud byla stažena z našich oficiálních vydání na GitHubu
>  (ověřte kontrolní součet SHA256 uvedený níže).

### Linux (Electron)

- Stáhněte odpovídající `.AppImage` soubor (`x64` nebo `arm64`) z [Releases](https://github.com/wsj-br/transrewrt/releases).
- Spusťte: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, nebo použijte soubor `...-arm64.AppImage` na ARM64.
- **Knihovny runtime pro Debian/Ubuntu** (Electron/Chromium; stejné jako v [Rychlý start → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — použijte **`libnotify4`**, nikoli `libnotify-dev`. Na minimálních systémech nainstalujte chybějící `.so` soubory hlášené v terminálu; často jsou vyžadovány doplňky jako `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`. AppImage může vyžadovat `libfuse2` (Ubuntu 22.04+) nebo `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Zprávy GPU:** Chromium může hlásit chyby inicializace GPU nebo EGL na některých systémech (zejména ARM); aplikace může běžet normálně. Chcete-li se těmto zprávám vyhnout, spusťte aplikaci s vypnutým hardwarovým akcelerováním: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (nebo váš soubor pro `arm64`).

### Docker

- Stažení: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Nastavte alespoň jeden klíč poskytovatele prostřednictvím proměnné prostředí (například `OPENROUTER_API_KEY` pro OpenRouter). Proměnné předejte pomocí `-e` nebo `docker compose` / `.env`, aby se tajemství neuložila do image.
- Klíče poskytovatelů se **ne** zadávají do webového rozhraní; server je čte z prostředí.

Příklad – pojmenovaný svazek pro trvalost (klíč OpenRouter přes proměnnou prostředí):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

nebo pokud dáváte přednost použití Docker Compose, použijte:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Seznam všech proměnných prostředí, jako jsou `PORT`, `CONFIG_PATH`, `TZ` a klíče LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …), naleznete v části [Konfigurace](#configuration-and-environment).

### Nastavení časového pásma

Datum a čas v uživatelském rozhraní aplikace následují **prohlížečové** nastavení lokalizace a časového pásma. Pro **serverové** chování (např. protokolování) používá kontejner proměnnou prostředí `TZ`. Výchozí hodnota je `TZ=Europe/London`.

Chcete-li použít jiné časové pásmo, nastavte `TZ` ve svém souboru Compose, například:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Nebo ji předejte při spouštění kontejneru (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Na mnoha Linuxových systémech můžete název systémového časového pásma zkopírovat pomocí:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Seznam platných názvů časových pásem je udržován v [databázi tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

## Získání OpenRouter API klíče

Transrewrt podporuje více poskytovatelů umělé inteligence. [OpenRouter](https://openrouter.ai) je oblíbenou volbou, protože agreguje mnoho modelů pod jedním klíčem a nabízí modely zdarma.

1. Zaregistrujte se nebo se přihlaste na [openrouter.ai](https://openrouter.ai).
2. Otevřete stránku [Keys](https://openrouter.ai/keys) a vytvořte nový klíč (pojmenujte ho a volitelně nastavte limit kreditu). Můžete používat modely zdarma bez přidání kreditu.
3. **Desktop (Electron):** vložte klíče v **Nastavení → API**. **Docker:** nastavte proměnné prostředí jako `OPENROUTER_API_KEY` (viz [Rychlý start](#quick-start)).

Nepoužívejte OpenRouterův model **Body Builder** (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) pro překlad, přepis nebo transformaci: vrací datové části JSON požadavku, nikoli dokončený text pro tyto úkoly. Viz [Nastavení → Modely](USER-GUIDE.cs.md#models) v Uživatelské příručce.

Můžete také použít jiné poskytovatele (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) nebo spouštět modely lokálně pomocí [Ollama](https://ollama.com). Úplný seznam podporovaných poskytovatelů a proměnných prostředí najdete v části [Konfigurace](#configuration-and-environment).

> ⚠️ **UPOZORNĚNÍ**  
> 
> Pokud používáte Ollama z jiného zařízení, kontejneru nebo služby, nezapomeňte nakonfigurovat Ollama tak, aby umožňoval externí připojení (ne pouze localhost).

Informace o limitech, BYOK a dalším najdete v části [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

## Konfigurace a prostředí

**Umístění konfiguračních souborů**

| Nasazení         | Umístění konfigurace                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (použijte svazek pro trvalé uložení) |

**Proměnné prostředí** (pouze web/Docker; Electron používá lokální konfigurační soubor)

| Proměnná             | Výchozí                 | Popis                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Port, na kterém naslouchá server                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | Cesta ke konfiguračnímu souboru                                                                                                     |
| `TZ`                 | `Europe/London`         | IANA časové pásmo pro čas na straně serveru (protokolování atd.); uživatelské rozhraní stále sleduje prohlížeč. Viz [Docker → časové pásmo](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(prázdné)*               | OpenRouter API klíč                                                                                                          |
| `OPENAI_API_KEY`     | *(prázdné)*               | OpenAI API klíč                                                                                                              |
| `CEREBRAS_API_KEY`   | *(prázdné)*               | Cerebras API klíč                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(prázdné)*               | Anthropic API klíč                                                                                                           |
| `GOOGLE_API_KEY`     | *(prázdné)*               | Google Gemini API klíč                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(prázdné)*               | DeepSeek API klíč                                                                                                            |
| `GROQ_API_KEY`       | *(prázdné)*               | Groq API klíč                                                                                                                |
| `MISTRAL_API_KEY`    | *(prázdné)*               | Mistral API klíč                                                                                                             |
| `OLLAMA_URL`         | *(prázdné)*               | Základní URL Ollama (např. `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(prázdné)*               | xAI API klíč                                                                                                                 |

Nakonfigurujte pouze poskytovatele, které používáte. Identifikátory modelů jsou rozděleny do jmenných prostorů (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, atd.).

**Zobrazení nákladů:** OpenRouter vrací přesné vyúčtované náklady, pokud je to možné. Ostatní poskytovatelé používají **odhadované** náklady z veřejných cenových informací modelů OpenRouter, pokud je k dispozici klíč OpenRouter; bez něj mohou být náklady jiných poskytovatelů zobrazeny jako `0`. Odhady nejsou fakturami.

**Data a trvalost:** Pro Docker připojte svazek do `/app/data`, aby `config.json` a databáze SQLite přetrvávaly při restartu kontejneru. Bez svazku jsou všechna data ztracena po zastavení kontejneru.

**Vývojáři:** Po stažení změn, které nahrazují starou konfiguraci s jedním klíčem, obnovte nebo sloučte `data/config.json` s novým výchozím tvarem z `src/config-defaults/config_default.json`, pokud váš lokální soubor stále používá odstraněná pole (`api_key`, `api_url`, proxy možnosti).

**Webová autentizace:**

- Výchozí správce: `admin` / `transrewrt26`.
- Správa uživatelů v **Nastavení → Uživatelé**.
- Obnovení hesla: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (ze zdroje: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **UPOZORNĚNÍ**  
>
> Okamžitě změňte výchozí heslo správce na všech hostitelích přístupných přes síť.

Základní nastavení (písmo, modely, jazyky atd.) jsou k dispozici v nastavení aplikace.

## Vývoj a architektura

- **Vývoj:** Nastavení, sestavení, testování a nasazení (Electron, Web, Docker) – viz **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektura a přehled systému:** Struktura složek, technologický stack, návrhová rozhodnutí – viz **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Hlášení problémů

Otevřete problém na [GitHubu](https://github.com/wsj-br/transrewrt/issues). Uveďte svou platformu (Windows / Linux / Docker) a verzi aplikace (zobrazenou v dialogu O aplikaci nebo na stránce Releases).

## Zřeknutí se zodpovědnosti

Názvy produktů a ikony patří jejich příslušným vlastníkům a používají se pouze pro účely identifikace. Tento software není spojen s žádnými z uvedených značek ani jimi není schválen.

## Licence

Autorská práva © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
