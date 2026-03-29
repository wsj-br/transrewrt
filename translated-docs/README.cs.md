---
translated_at: "2026-03-29T01:54:33.843Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Verze"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licence: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Nástroj s využitím umělé inteligence: překládání mezi jazyky, přepis v různých stylech a úprava pomocí vlastních pokynů – s využitím více poskytovatelů umělé inteligence (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a lokální Ollama). Spouští se jako desktopová aplikace (Electron) nebo jako webová aplikace hostovaná samostatně (Docker).

- **Překlad** — mezi desítkami jazyků s automatickým rozpoznáním zdrojového jazyka  
- **Přepsání** — oprava gramatiky, zlepšení srozumitelnosti, formální/neformální styl, zkracování, rozšiřování, technický styl  
- **Transformace** — vlastní AI pokyny; vytváření a správa pokynů, volitelný cílový jazyk pro každý pokyn  
- **Historie** — úplná historie provádění včetně vstupního a výstupního textu, filtrování a export  
- **Modely a náklady** — výběr modelů z jakéhokoli nakonfigurovaného poskytovatele; řídicí panely pro náklady a využití, protokol, souhrny podle modelu/operace/dne  
- **Uživatelské rozhraní** — multilingvní rozhraní (30+ jazyků, podpora zprava doleva), písma, ...  
- **Webový režim** — podpora více uživatelů s administrátorskými rolemi  
- **Desktop** — aplikace Electron pro Windows a Linux  
- **Vlastní hostování** — image Docker pro amd64 a arm64 (připraveno pro Raspberry Pi)  

Po instalaci si přečtěte **[Průvodce uživatele](USER-GUIDE.cs.md)**, který podrobně popisuje všechny funkce.

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [Angličtina (UK)](README.cs.md) · [Portugalština (BR)](README.pt-BR.md) · [Arabština](README.ar.md) · [Bengálština](README.bn.md) · [Katalánština](README.ca.md) · [Zjednodušená čínština](README.zh-CN.md) · [Tradiční čínština](README.zh-TW.md) · [Chroatština](README.hr.md) · [Čeština](README.cs.md) · [Nizozemština](README.nl.md) · [Angličtina (US)](README.en-US.md) · [Filipínština](README.tl.md) · [Francouzština](README.fr.md) · [Němčina](README.de.md) · [Řečtina](README.el.md) · [Hindština](README.hi.md) · [Maďarština](README.hu.md) · [Italština](README.it.md) · [Japonština](README.ja.md) · [Javánština](README.jv.md) · [Korejština](README.ko.md) · [Malajština](README.ms.md) · [Perština](README.fa.md) · [Polština](README.pl.md) · [Portugalština (PT)](README.pt-PT.md) · [Ruština](README.ru.md) · [Slovenština](README.sl.md) · [Španělština](README.es.md) · [Srbština (Latinka)](README.sr-Latn.md) · [Ručně](README.sv.md) · [Tamilština](README.ta.md) · [Telugština](README.te.md) · [Thajština](README.th.md) · [Turkština](README.tr.md) · [Ukrajinština](README.uk.md) · [Vietnamština](README.vi.md) </small>

# Transrewrt

![Logo](assets/icon.png)

**Transrewrt** je jednoduchá desktopová aplikace pro přepis a překlad textu, která umožňuje různým modelům umělé inteligence (AI) překládat a přepisovat váš text, například GPT, Mistral, Llama atd.

Je vytvořena pomocí [OpenRouter](https://openrouter.ai/), [Electron](https://www.electronjs.org/) a [React](https://react.dev/) a je volně inspirována uživatelským rozhraním [HuggingChat](https://huggingface.co/chat/). Více informací o OpenRouter najdete [zde](https://openrouter.ai/docs), abyste porozuměli, jak Transrewrt funguje. Aplikaci můžete používat zdarma, ale při pravidelném používání vám může dojít povolené množství volných toků, které OpenRouter poskytuje zdarma (aktuálně 100 tisíc toků za měsíc), a budete muset přejít na prémiový plán na OpenRouteru. V současnosti **Transrewrt nepodporuje poskytovatele API, mimo OpenRouter**.

## Obsah

- [Rychlý start](#rychlý-start)
- [Přidání klíče OpenRouter API](#přidání-klíče-openrouter-api)
- [Kompilace z binárních souborů](#kompilace-z-binárních-souborů)
- [Nastavení (pokročilé)](#nastavení-pokročilé)
- [Podílejte se](#podílejte-se)
- [Podpora projektu](#podpora-projektu)
- [Licence](#licence)

## Rychlý start

1. Nejdříve si stáhněte a nainstalujte aktuální verzi z [sekce vydání](https://github.com/natesales/transrewrt/releases).
2. Pro použití Transrewrt bude potřeba účet OpenRouter. Pokud ještě nemáte účet, vytvořte si ho [zde](https://openrouter.ai/).
3. Vyberte model podle svých požadavků a upravte [nastavení](#nastavení-pokročilé) podle potřeby.

## Přidání klíče OpenRouter API

Aby bylo možné používat služby AI prostřednictvím OpenRouter, Transrewrt vyžaduje klíč vašeho API. Pro jeho získání:

1. Přihlaste se na [OpenRouter](https://openrouter.ai/).
2. Přejděte na stránku nastavení: `Uživatelský profil` → `Nastavení`.
3. Vytvořte nový klíč API pro osobní použití.
4. Zkopírujte vygenerovaný klíč a vložte ho do pole „Klíč OpenRouter API“ v Transrewrt.
   ![Snímek obrazovky](assets/screenshot.png)

## Kompilace z binárních souborů

Můžete také sestavit Transrewrt z binárních souborů pro různé operační systémy:

### Linux

#### Debian/Ubuntu

```bash
./build.sh debian
```

#### Fedora

```bash
./build.sh fedora
```

### macOS

```bash
./build.sh macos
```

### Windows

```bash
bash build.sh windows
```

## Nastavení (pokročilé)

Ve výchozím nastavení bude aplikace převádět vše, co napíšete v levém sloupci, do cílového jazyka v pravém sloupci.

Zobrazí se tlačítko "Vložit" na pravé straně, které zkopíruje přeložený text do schránky. Pokud chcete automatické vkládání, můžete to povolit v nastavení. Toto nastavení umožňuje automatické vkládání přeloženého textu do aktivní aplikace, což je velmi užitečné, pokud potřebujete překládat dlouhé pasáže bez nutnosti ručního vkládání.

Existuje také tlačítko pro opětovné přepsání textu, které požádá model o jinou verzi aktuálně zobrazeného textu v pravém sloupci. To může být užitečné, pokud chcete, aby model přepsal text a jiným způsobem, zachovávaje sémantický význam. Můžete také požádat o „formální“ nebo „neformální“ verzi textu, pokud daný model podporuje.

Můžete také předvolit, jaké pokyny by měly být zaslány modelu pro každou úpravu. Existují dvě proměnné, které můžete používat v pokynech:
- `{text}` je vstupní text poskytnutý uživatelem
- `{lang}` je cílový jazyk

Například toto pokyn: "Přepiš následující text: \"{text}\", na: {lang}" upraví každý text zadaný uživatelem na požadovaný jazyk. Výchozí pokyn je napsán obecně, aby fungoval s velkým množstvím AI modelů.

Existuje také volba pro výběr modelu pro textové vkládání, ve které můžete vybrat libovolný model podporovaný OpenRouterem.

## Podílejte se

Transrewrt je open-source projekt, a kód je dostupný v [GitHub repozitáři](https://github.com/natesales/transrewrt). Pokud chcete projekt vylepšit, opravit chyby nebo přidat funkce, otevřete prosím pull request.

Pokud naleznete chyby nebo máte nápady na vylepšení, vytvořte [issue na GitHubu](https://github.com/natesales/transrewrt/issues).

## Podpora projektu

Pokud se vám aplikace líbí, zvažte prosím [podporu vývojáře nákupem kávy](https://www.buymeacoffee.com/natesales) 🫶

## Licence

Tento projekt je licencován pod GNU General Public License v3.0. Podrobnosti naleznete v souboru [LICENSE](LICENSE).

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Poznámka k překladům uživatelského rozhraní a dokumentace:** Všechny jazyky rozhraní kromě původního anglického (UK)
> byly přeloženy pomocí AI modelů; slovní vyjádření mohou být nepřesná nebo obsahovat chyby.

</small>

<br/>

<a id="screenshots"></a>

## Snímky obrazovky

**Výběr jazyka**

![Výběr jazyka](../images/screenshots/cs/language-selector.png)

**Překlad**

![Překlad](../images/screenshots/cs/translate.png)

**Transformace – editor výzev**

![Transformace – editor výzev](../images/screenshots/cs/transform-prompt-edit.png)

**Přehled**

![Přehled – využití](../images/screenshots/cs/dashboard-summary.png)

**Historie**

![Historie](../images/screenshots/cs/history.png)

**Nastavení – výběr modelu**

![Nastavení – výběr modelu](../images/screenshots/cs/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Obsah

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

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
- [Upozornění](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

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

Nahraďte `sk-or-your-key` svým [klíčem OpenRouter API](https://openrouter.ai/keys) (nebo nastavte klíče jiných poskytovatelů; viz [Nastavení](#configuration-and-environment)). Otevřete [http://localhost:5000](http://localhost:5000) a změňte výchozí administrátorské heslo ještě předtím, než službu zpřístupníte.

<br/>

> ℹ️ **Poznámka**<br/>
> V Dockeru se přihlašovací údaje k LLM nastavují pomocí proměnných prostředí jako `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nikoli ve webovém rozhraní). Na ploše (Electron) klíče nastavujete v části **Nastavení → API**.

<br/>

**Windows**

Stáhněte si nejnovější soubor `Transrewrt Setup x.y.z.exe` z části [Releases](https://github.com/wsj-br/transrewrt/releases), spusťte instalační program a poté spusťte aplikaci přes nabídku Start nebo zkratku na ploše. Zadejte své API klíče v sekci **Nastavení → API**. Musíte nakonfigurovat alespoň jednoho poskytovatele, OpenRouter je běžný pro modely zdarma.

<br/>

**Linux**

Stáhněte si soubor `.AppImage` pro vaši CPU z části [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` pro běžné počítače, `arm64` pro mnoho zařízení s architekturou ARM, včetně Raspberry Pi 4+), poté:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadejte své API klíče v sekci **Nastavení → API**. Musíte nakonfigurovat alespoň jednoho poskytovatele, OpenRouter je běžný pro modely zdarma.

V Debianu/Ubuntuu možná budete muset nejprve nainstalovat dodatečné závislosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Podrobnosti najdete v části [Instalace → Linux](#linux-electron).

<br/>

> ℹ️ **POZNÁMKA**<br/>

> macOS není momentálně podporováno. Transrewrt je dostupný pro Windows, Linux a Docker.

<br/>

Jakmile běží aplikace, podívejte se na **[Průvodce uživatele](USER-GUIDE.cs.md)**, kde se dozvíte, jak překládat, přepisovat a transformovat text, spravovat výzvy a konfigurovat modely.

<br/><br/>

<a id="installation"></a>

## Instalace

<a id="windows-electron"></a>

### Windows (Electron)

- Stáhněte si nejnovější instalační program z [Releases](https://github.com/wsj-br/transrewrt/releases).
- Spusťte soubor `.exe` a následujte pokyny instalátoru.
- Při prvním spuštění: spusťte aplikaci z nabídky Start nebo přes zástupce na ploše.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Windows mohou zobrazit jedno z těchto upozornění na zabezpečení (běžné u nepodepsaných nebo samostatných aplikací):
>   - **Řízení účtů uživatelů (UAC)**: „Chcete povolit této aplikaci od neznámého vydavatele provést změny na vašem zařízení?“ → Klikněte na **Ano**.
>   - **Microsoft Defender SmartScreen**: „Windows chrání váš počítač“ → Klikněte na **Další informace** → **Přesto spustit**.
>
> K tomu dochází, protože aplikace není podepsaná společností Microsoft ani velkým vydavatelem – je bezpečná, pokud byla stažena z našich oficiálních vydání na GitHubu
> (ověřte kontrolní součet SHA256 uvedený níže).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Stáhněte si odpovídající `.AppImage` (`x64` nebo `arm64`) z [Releases](https://github.com/wsj-br/transrewrt/releases).
- Spusťte: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, případně použijte soubor `...-arm64.AppImage` na ARM64.
- Další závislosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Další informace viz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>

### Docker

- Stažení: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Nastavte alespoň jeden klíč poskytovatele prostřednictvím proměnné prostředí (např. `OPENROUTER_API_KEY` pro OpenRouter). Proměnné předejte pomocí `-e` nebo `docker compose` / `.env`, aby tajemství nebyla ztvrdlá v obraze.
- Klíče poskytovatelů se **nepoužívají** ve webovém rozhraní; server je čte z prostředí.

Příklad – pojmenovaný svazek pro trvalost dat (klíč OpenRouter přes proměnnou prostředí):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

nebo pokud dáváte přednost Docker Compose, použijte:

```
# stažení souboru compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# upravte soubor a přidejte API_KEYS a upravte časové pásmo (TZ)
vi transrewrt.yml
# spuštění kontejneru
docker compose -f transrewrt.yml up -d

Viz [Konfigurace](#configuration-and-environment) pro všechny proměnné prostředí, jako jsou `PORT`, `CONFIG_PATH`, `TZ` a klíče LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Nastavení časového pásma

Datum a čas v uživatelském rozhraní aplikace se řídí **nastavením prohlížeče** (místním prostředím a časovým pásmem). Co se týče chování na **straně serveru** (např. protokolování a podobné funkce), kontejner používá proměnnou prostředí `TZ`. Výchozí hodnota je `TZ=Europe/London`.

Chcete-li použít jiné časové pásmo, nastavte `TZ` ve svém souboru Compose, například:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Nebo ji předejte při spouštění kontejneru (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Na mnoha systémech Linux můžete získat název časového pásma systému pomocí:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Seznam platných názvů časových pásem je udržován v [databázi tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedie).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Získání API klíče OpenRouter

Transrewrt podporuje více poskytovatelů umělé inteligence. [OpenRouter](https://openrouter.ai) je oblíbenou volbou, protože nabízí mnoho modelů pod jedním klíčem a poskytuje i bezplatné modely.

1. Zaregistrujte se nebo se přihlaste na [openrouter.ai](https://openrouter.ai).
2. Otevřete stránku [Klíče](https://openrouter.ai/keys) a vytvořte nový klíč (zadejte mu jméno a volitelně nastavte limit kreditu). Bez přidání kreditu můžete používat bezplatné modely.
3. **Desktop (Electron):** vložte klíč do **Nastavení → API**. **Docker:** nastavte proměnné prostředí, například `OPENROUTER_API_KEY` (viz [Rychlý start](#quick-start)).

Nepoužívejte model **Body Builder** od OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pro překlad, přepsání nebo transformaci: tento model vrací datové části požadavku ve formátu JSON, nikoli dokončený text pro tyto úkoly. Viz [Nastavení → Modely](USER-GUIDE.cs.md#models) v uživatelské příručce.

Můžete také použít další poskytovatele (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) nebo spouštět modely lokálně pomocí [Ollama](https://ollama.com). Úplný seznam podporovaných poskytovatelů a proměnných prostředí najdete v části [Konfigurace](#configuration-and-environment).

> ⚠️ **UPOZORNĚNÍ**<br/>
> Pokud používáte Ollama z jiného zařízení, kontejneru nebo služby, nezapomeňte nakonfigurovat Ollama tak, aby umožňoval externí připojení (ne pouze localhost).

Informace o limitech, BYOK a dalších funkcích najdete na stránce [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfigurace a prostředí

**Umístění konfiguračních souborů**

| Nasazení           | Umístění konfigurace                              |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (pro trvalost použijte svazek) |

<br/>

**Proměnné prostředí** (pouze web/Docker; Electron používá místní konfigurační soubor)

| Proměnná | Výchozí | Popis |
| -------- | ------- | ----- |
| `PORT` | `5000` | Port, na kterém naslouchá server |
| `CONFIG_PATH` | `/app/data/config.json` | Cesta k souboru s konfigurací |
| `TZ` | `Europe/London` | Časové pásmo ve formátu IANA pro čas na straně serveru (logování atd.); uživatelské rozhraní stále následuje nastavení prohlížeče. Viz [Docker → časové pásmo](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(prázdné)* | Klíč k API OpenRouter |
| `OPENAI_API_KEY` | *(prázdné)* | Klíč k API OpenAI |
| `CEREBRAS_API_KEY` | *(prázdné)* | Klíč k API Cerebras |
| `ANTHROPIC_API_KEY` | *(prázdné)* | Klíč k API Anthropic |
| `GOOGLE_API_KEY` | *(prázdné)* | Klíč k API Google Gemini |
| `DEEPSEEK_API_KEY` | *(prázdné)* | Klíč k API DeepSeek |
| `GROQ_API_KEY` | *(prázdné)* | Klíč k API Groq |
| `MISTRAL_API_KEY` | *(prázdné)* | Klíč k API Mistral |
| `OLLAMA_URL` | *(prázdné)* | Základní adresa Ollamy (např. `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(prázdné)* | Klíč k API xAI |

Konfigurujte pouze poskytovatele, které používáte. ID modelů jsou rozdělena do jmenných prostorů (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, atd.).

**Zobrazení nákladů:** OpenRouter vrací přesné vyúčtované náklady, pokud je to možné. Ostatní poskytovatelé používají **odhadované** náklady z veřejných cenových seznamů modelů OpenRouter, pokud je dostupný klíč OpenRouter; v opačném případě mohou být náklady pro jiné než OpenRouter přístupy zobrazeny jako `0`. Odhady nejsou fakturami.

<br/>

**Ukládání dat a trvalost:** Pro Docker připojte svazek (volume) do adresáře `/app/data`, aby soubor `config.json` a databáze SQLite přežily restart kontejneru. Bez připojeného svazku budou všechna data ztracena po zastavení kontejneru.

**Vývojáři:** Po stažení změn, které nahrazují starší konfiguraci s jedním klíčem, obnovte nebo sloučte soubor `data/config.json` s novou výchozí strukturou ze souboru `src/config-defaults/config_default.json`, pokud váš místní soubor stále obsahuje zrušená pole (`api_key`, `api_url`, proxy nastavení).

<br/>

**Webová autentizace:**

- Výchozí administrátor: `admin` / `transrewrt26`.
- Správa uživatelů v **Nastavení → Uživatelé**.

- Resetování hesla: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (ze zdroje: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>
> Okamžitě změňte výchozí administrátorské heslo na všech zařízeních přístupných z sítě.

<br/>

Nastavení klíčových parametrů (písmo, modely, jazyky atd.) je k dispozici v nastavení aplikace.

<br/><br/>

<a id="development-and-architecture"></a>

## Vývoj a architektura

- **Vývoj:** Nastavení, sestavení, testování a nasazení (Electron, Web, Docker) – viz **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektura a přehled systému:** Struktura složek, technologický zásobník, návrhová rozhodnutí – viz **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Hlášení problémů

Otevřete záznam o problému na [GitHubu](https://github.com/wsj-br/transrewrt/issues). Uveďte svou platformu (Windows / Linux / Docker) a verzi aplikace (uvedeno v dialogu O aplikaci nebo na stránce Vydání).

<br/><br/>

<a id="disclaimer"></a>

## Zřeknutí se odpovědnosti

Názvy produktů a ikony patří příslušným vlastníkům a používají se pouze pro identifikační účely. Tento software není spjatý s žádnou z uvedených značek, ani nemá jejich oficiální podporu.

<br/><br/>

<a id="license"></a>

## Licence

Autorská práva © 2026 Waldemar Scudeller Jr.

[Licence Apache 2.0](LICENSE)