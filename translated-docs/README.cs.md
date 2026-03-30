---
translation_last_updated: '2026-03-30T00:45:57.438Z'
source_file_mtime: '2026-03-29T23:51:36.506Z'
source_file_hash: fa17b974cbf42a93
translation_language: cs
source_file_path: README.md
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

<small>**Přečtěte si v jiných jazycích:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Poznámka k překladům uživatelského rozhraní a dokumentace:** Všechny jazyky rozhraní kromě původní angličtiny (UK)
> byly přeloženy pomocí modelů AI; formulace mohou být nepřesné nebo obsahovat chyby.

</small>

<br/>

<a id="screenshots"></a>
## Snímky obrazovky

**Výběr jazyka**

![Language selector](../images/screenshots/cs/language-selector.png)

**Překlad**

![Translate](../images/screenshots/cs/translate.png)

**Transformace – editor promptů**

![Transform - prompt editor](../images/screenshots/cs/transform-prompt-edit.png)

**Dashboard**

![Dashboard summary — usage](../images/screenshots/cs/dashboard-summary.png)

**Historie**

![History](../images/screenshots/cs/history.png)

**Nastavení – výběr modelu**

![Settings - model selection](../images/screenshots/cs/settings-models.png)

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
- [Zřeknutí se záruk](#disclaimer)
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

Nahraďte `sk-or-your-key` svým [klíčem OpenRouter API](https://openrouter.ai/keys) (nebo nastavte klíče jiných poskytovatelů; viz [Konfigurace](#configuration-and-environment)). Otevřete [http://localhost:5000](http://localhost:5000) a změňte výchozí heslo správce před tím, než službu zpřístupníte.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> V Dockeru jsou přihlašovací údaje k LLM nastaveny pomocí proměnných prostředí, jako je `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nikoli ve webovém uživatelském rozhraní). Na ploše (Electron) klíče konfigurujete v **Nastavení → API**.

<br/>

**Windows**

Stáhněte si nejnovější `Transrewrt Setup x.y.z.exe` z části [Releases](https://github.com/wsj-br/transrewrt/releases), spusťte instalační program a poté spusťte aplikaci z nabídky Start nebo z ikony na ploše. Zadejte své klíče API v **Nastavení → API**. Musíte nakonfigurovat alespoň jednoho poskytovatele, OpenRouter je běžný pro modely zdarma.

<br/>

**Linux**

Stáhněte si `.AppImage` pro váš procesor z části [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` pro běžné počítače, `arm64` pro mnoho zařízení ARM, včetně Raspberry Pi 4+), poté:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadejte své klíče API v **Nastavení → API**. Musíte nakonfigurovat alespoň jednoho poskytovatele, OpenRouter je běžný pro modely zdarma.

Ve Debianu/Ubuntu možná budete muset nejprve nainstalovat další závislosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Podrobnosti naleznete v části [Instalace → Linux](#linux-electron).

<br/>

> ℹ️ **POZNÁMKA**<br/>
> macOS není v současné době podporován. Transrewrt je dostupný pro Windows, Linux a Docker.

<br/>

Jakmile běží aplikace, podívejte se do **[Uživatelské příručky](USER-GUIDE.cs.md)**, kde se dozvíte, jak překládat, přepisovat a transformovat text, spravovat výzvy a konfigurovat modely.

<br/><br/>

<a id="installation"></a>
## Instalace

<a id="windows-electron"></a>
### Windows (Electron)

- Stáhněte si nejnovější instalační program z části [Releases](https://github.com/wsj-br/transrewrt/releases).
- Spusťte `.exe` a postupujte podle pokynů instalačního programu.
- Při prvním spuštění: spusťte aplikaci z nabídky Start nebo z ikony na ploše.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Windows mohou zobrazit jedno z těchto upozornění na zabezpečení (běžné u nepodepsaných nebo nezávislých aplikací):
>   - **Kontrola účtu uživatele (UAC)**: „Chcete povolit této aplikaci od neznámého vydavatele provést změny na vašem zařízení?“ → Klikněte na **Ano**.
>   - **Microsoft Defender SmartScreen**: „Windows chrání váš počítač“ → Klikněte na **Další informace** → **Přesto spustit**.
>
> K tomu dochází, protože aplikace není podepsána společností Microsoft nebo větším vydavatelem – je bezpečná, pokud byla stažena z našich oficiálních GitHub Releases
>  (ověřte kontrolní součet SHA256 uvedený níže).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Stáhněte odpovídající `.AppImage` soubor (`x64` nebo `arm64`) z [Releases](https://github.com/wsj-br/transrewrt/releases).
- Spusťte: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, nebo použijte soubor s názvem `...-arm64.AppImage` na ARM64.
- Další závislosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Více informací naleznete v [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
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

<a id="configuring-the-timezone"></a>
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

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Získání OpenRouter API klíče

Transrewrt podporuje více poskytovatelů umělé inteligence. [OpenRouter](https://openrouter.ai) je oblíbenou volbou, protože agreguje mnoho modelů pod jedním klíčem a nabízí modely zdarma.

1. Zaregistrujte se nebo se přihlaste na [openrouter.ai](https://openrouter.ai).
2. Otevřete stránku [Keys](https://openrouter.ai/keys) a vytvořte nový klíč (pojmenujte ho a volitelně nastavte limit kreditu). Můžete používat modely zdarma bez přidání kreditu.
3. **Desktop (Electron):** vložte klíče v **Nastavení → API**. **Docker:** nastavte proměnné prostředí jako `OPENROUTER_API_KEY` (viz [Rychlý start](#quick-start)).

Nepoužívejte OpenRouterův model **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pro překlad, přepis ani transformaci: vrací datové části JSON požadavků, nikoli dokončený text pro tyto úkoly. Viz [Nastavení → Modely](USER-GUIDE.cs.md#models) v Uživatelské příručce.

Můžete také použít jiné poskytovatele (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) nebo spouštět modely lokálně pomocí [Ollama](https://ollama.com). Úplný seznam podporovaných poskytovatelů a proměnných prostředí najdete v části [Konfigurace](#configuration-and-environment).

> ⚠️ **UPOZORNĚNÍ**<br/>
> Pokud používáte Ollama z jiného zařízení, kontejneru nebo služby, nezapomeňte Ollama nakonfigurovat tak, aby povoloval externí připojení (ne pouze localhost).

Informace o limitech, BYOK a dalším najdete v části [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurace a prostředí

**Umístění konfiguračních souborů**

| Nasazení         | Umístění konfigurace                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (použijte svazek pro trvalé uložení) |

<br/>

**Proměnné prostředí** (pouze web/Docker; Electron používá lokální konfigurační soubor)

| Proměnná         | Výchozí hodnota                 | Popis |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port, na kterém naslouchá server |
| `CONFIG_PATH`    | `/app/data/config.json` | Cesta ke konfiguračnímu souboru |
| `TZ`             | `Europe/London`         | IANA časové pásmo pro čas na straně serveru (protokolování atd.); uživatelské rozhraní stále sleduje prohlížeč. Viz [Docker → timezone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(prázdné)*               | OpenRouter API klíč |
| `OPENAI_API_KEY`     | *(prázdné)*               | OpenAI API klíč |
| `CEREBRAS_API_KEY`   | *(prázdné)*               | Cerebras API klíč |
| `ANTHROPIC_API_KEY`  | *(prázdné)*               | Anthropic API klíč |
| `GOOGLE_API_KEY`     | *(prázdné)*               | Google Gemini API klíč |
| `DEEPSEEK_API_KEY`   | *(prázdné)*               | DeepSeek API klíč |
| `GROQ_API_KEY`       | *(prázdné)*               | Groq API klíč |
| `MISTRAL_API_KEY`    | *(prázdné)*               | Mistral API klíč |
| `OLLAMA_URL`     | *(prázdné)*               | Základní URL Ollama (např. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(prázdné)*               | xAI API klíč |

Nakonfigurujte pouze poskytovatele, které používáte. Identifikátory modelů jsou rozděleny do jmenných prostorů (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, atd.).

**Zobrazení nákladů:** OpenRouter vrací přesné vyúčtované náklady, pokud je to možné. Ostatní poskytovatelé používají **odhadované** náklady z veřejných cenových informací modelů OpenRouter, pokud je k dispozici klíč OpenRouter; bez něj mohou být náklady jiných poskytovatelů zobrazeny jako `0`. Odhady nejsou fakturami.

<br/>

**Data a trvalost:** Pro Docker připojte svazek do `/app/data`, aby `config.json` a databáze SQLite přetrvávaly při restartu kontejneru. Bez svazku jsou všechna data ztracena po zastavení kontejneru.

**Vývojáři:** Po stažení změn, které nahrazují starou konfiguraci s jedním klíčem, obnovte nebo sloučte `data/config.json` s novým výchozím tvarem z `src/config-defaults/config_default.json`, pokud váš lokální soubor stále používá odstraněná pole (`api_key`, `api_url`, proxy možnosti).

<br/>

**Webová autentizace:**

- Výchozí správce: `admin` / `transrewrt26`.
- Správa uživatelů v **Nastavení → Uživatelé**.
- Obnovení hesla: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (ze zdroje: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>
> Okamžitě změňte výchozí heslo správce na jakémkoli hostiteli s přístupem do sítě.

<br/>

Základní nastavení (písmo, modely, jazyky atd.) jsou k dispozici v nastavení aplikace.

<br/><br/>

<a id="development-and-architecture"></a>
## Vývoj a architektura

- **Vývoj:** Nastavení, sestavení, testování a nasazení (Electron, Web, Docker) – viz **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektura a přehled systému:** Struktura složek, technologický stack, návrhová rozhodnutí – viz **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Hlášení problémů

Otevřete problém na [GitHubu](https://github.com/wsj-br/transrewrt/issues). Uveďte svou platformu (Windows / Linux / Docker) a verzi aplikace (zobrazenou v dialogu O aplikaci nebo na stránce Releases).

<br/><br/>

<a id="disclaimer"></a>
## Zřeknutí se zodpovědnosti

Názvy produktů a ikony patří jejich příslušným vlastníkům a používají se pouze pro účely identifikace. Tento software není spojen s žádnými z uvedených značek ani jimi není schválen.

<br/><br/>

<a id="license"></a>
## Licence

Autorská práva © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
