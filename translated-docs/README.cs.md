---
translated_at: "2026-03-25T22:13:25.470Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Verze"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licence: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Nástroj pro text s využitím umělé inteligence: překlad mezi jazyky, prezentace ve různých stylech a úpravy vlastními dotazy – s využitím více poskytovatelů umělé inteligence (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a místní Ollama). Funguje jako desktopová aplikace (Electron) nebo samoobslužná webová aplikace (Docker).

- **Překlad** — mezi desítkami jazyků, s automatickým rozpoznáním zdrojového jazyka
- **Přepsání** — oprava gramatiky, zlepšení srozumitelnosti, formální/neformální styl, zkracování, rozšiřování, technický styl
- **Úpravy** — vlastní dotazy umělé inteligence; vytváření a správa dotazů, volitelný cílový jazyk pro každý dotaz
- **Historie** — kompletní historie provedených úprav včetně vstupního a výstupního textu, filtrování a export
- **Modely a náklady** — výběr modelů z libovolného nakonfigurovaného poskytovatele; nástěnky nákladů a využití s logy, shrnutí podle modelu/operace/dne
- **Uživatelské rozhraní** — vícejazyčné rozhraní (30+ jazyků, podpora zprava doleva), písma, ...
- **Webový režim** — podpora více uživatelů s rolemi správce
- **Desktopová verze** — aplikace Electron pro Windows a Linux
- **Samoobslužná verze** — image Docker pro amd64 & arm64 (použitelné na Raspberry Pi)

Po instalaci si přečtěte **[Uživatelskou příručku](USER-GUIDE.cs.md)**, která podrobně popisuje všechny funkce.

<small>**Přečtěte si v dalších jazycích:** [English (UK)](README.cs.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Poznámka k překladům uživatelského rozhraní a dokumentace:** Všechny jazykové verze rozhraní kromě původní angličtiny (UK)
> byly přeloženy pomocí modelů umělé inteligence; slovní volba může být nepřesná nebo obsahovat chyby.

</small>

<br/>

<a id="screenshots"></a>
## Snímky obrazovky

**Výběr jazyka**

![Výběr jazyka](../images/screenshots/cs/language-selector.png)

**Překlad**

![Překlad](../images/screenshots/cs/translate.png)

**Úpravy – editor dotazů**

![Úpravy – editor dotazů](../images/screenshots/cs/transform-prompt-edit.png)

**Nástěnka**

![Nástěnka nákladů](../images/screenshots/cs/dashboard-summary.png)

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
- [Získání klíče OpenRouter API](#getting-an-openrouter-api-key)
- [Konfigurace a prostředí](#configuration-and-environment)
- [Vývoj a architektura](#development-and-architecture)
- [Verze a značky](#releases-and-tags)
- [Přispívání](#contributing)
- [Zřeknutí se zodpovědnosti](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Rychlý start

**Docker (doporučeno pro samoobslužné hostování)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `sk-or-your-key` svým [klíčem OpenRouter API](https://openrouter.ai/keys) (nebo nastavte klíče jiných poskytovatelů; viz [Konfigurace](#configuration-and-environment)). Otevřete [http://localhost:5000](http://localhost:5000) a před vystavením služby změňte výchozí heslo správce.

<br/>

> ℹ️ **Poznámka**<br/>
> V Dockeru se přihlašovací údaje pro LLM nastavují prostřednictvím proměnných prostředí, jako jsou například `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (ne v webovém rozhraní). Na počítači (Electron) nastavujete klíče v **Nastavení → API**.

<br/>

**Windows**

Stáhněte nejnovější instalační soubor `Transrewrt Setup x.y.z.exe` z [verzí (Releases)](https://github.com/wsj-br/transrewrt/releases), spusťte instalační program a poté aplikaci spusťte pomocí nabídky Start nebo zástupce na ploše. Vložte své klíče API v **Nastavení → API**. Musíte nakonfigurovat alespoň jednoho poskytovatele, OpenRouter je častá volba pro modely zdarma.

<br/>

**Linux**

Stáhněte si `.AppImage` pro své CPU z [verzí (Releases)](https://github.com/wsj-br/transrewrt/releases) (`x64` pro běžné počítače, `arm64` pro mnoho zařízení ARM, včetně Raspberry Pi 4+), poté:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadejte svoje klíče API v **Nastavení → API**. Musíte nakonfigurovat alespoň jednoho poskytovatele, OpenRouter je častá volba pro modely zdarma.

V Debianu/Ubuntuu možná nejdříve budete muset nainstalovat další závislosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Podrobnosti viz [Instalace → Linux](#linux-electron).

<br/>

> ℹ️ **Poznámka**<br/>
> macOS není aktuálně podporováno. Transrewrt je dostupný pro Windows, Linux a Docker.

<br/>

Jakmile běží aplikace, přečtěte si **[příručku uživatele (User Guide)](USER-GUIDE.cs.md)** a dozvíte se, jak překládat, přepisovat a transformovat text, spravovat výzvy (prompty) a konfigurovat modely.

<br/><br/>

<a id="installation"></a>
## Instalace

<a id="windows-electron"></a>
### Windows (Electron)

- Stáhněte nejnovější instalační program z [verzí (Releases)](https://github.com/wsj-br/transrewrt/releases).
- Spusťte `.exe` a postupujte podle pokynů instalačního programu.
- Při prvním spuštění: spusťte aplikaci z nabídky Start nebo přes zástupce na ploše.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Stáhněte odpovídající `.AppImage` (`x64` nebo `arm64`) z [verzí (Releases)](https://github.com/wsj-br/transrewrt/releases).
- Spustit: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, nebo použijte `...-arm64.AppImage` na ARM64.
- Další závislosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Další informace naleznete v [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Stažení: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Nastavte alespoň jeden klíč poskytovatele prostřednictvím proměnné prostředí (například `OPENROUTER_KEY` pro OpenRouter). Proměnné předávájte pomocí `-e` nebo `docker compose` / `.env`, aby tajemství nebyla zabudována do obrázku.
- Klíče poskytovatelů **nejsou** zadávány v webovém rozhraní; server je čte z prostředí.

Příklad – pojmenovaný svazek pro trvalost dat (klíč OpenRouter přes proměnnou prostředí):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Možnost  | Popis                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (mapovat pomocí `-p 5000:5000`)                                                                              |
| Svazek   | Připojte `/app/data` pro trvalost konfigurace a databáze                                                         |
| Proměnné prostředí | `PORT`, `CONFIG_PATH`, plus klíče LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) – viz [Konfigurace](#configuration-and-environment) |

Pro sestavení a spuštění ze zdrojů: `docker compose up --build -d` nebo `pnpm docker:up` – viz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Získání API klíče OpenRouter

Transrewrt podporuje více poskytovatelů umělé inteligence. [OpenRouter](https://openrouter.ai) je oblíbenou volbou, protože agreguje mnoho modelů pod jedním klíčem a nabízí i bezplatné modely.

1. Zaregistrujte se nebo se přihlaste na [openrouter.ai](https://openrouter.ai).
2. Otevřete stránku [Keys](https://openrouter.ai/keys) a vytvořte nový klíč (pomenujte ho a volitelně nastavte limit kreditu). Bezplatné modely můžete používat i bez přidání kreditu.
3. **Desktop (Electron):** vložte klíče do **Nastavení → API**. **Docker:** nastavte proměnné prostředí jako `OPENROUTER_KEY` (viz [Rychlý start](#quick-start)).

Neužívejte model OpenRouteru **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pro překlad, přepis ani transformaci: vrací datové balíčky JSON, nikoli hotový text pro tyto úkoly. Viz [Nastavení → Modely](USER-GUIDE.cs.md#models) v Uživatelské příručce.

Můžete také použít jiné poskytovatele (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) nebo spouštět modely lokálně pomocí [Ollama](https://ollama.com). Úplný seznam podporovaných poskytovatelů a proměnných prostředí najdete v části [Konfigurace](#configuration-and-environment).

> ⚠️ **UPOZORNĚNÍ**<br/>
> Pokud používáte Ollama z jiného zařízení, kontejneru nebo služby, nezapomeňte Ollama nakonfigurovat tak, aby umožňoval externí připojení (ne pouze localhost).

Podrobnosti o limitech, BYOK atd. najdete v dokumentaci [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurace a prostředí

**Umístění konfiguračních souborů**

| Nasazení         | Umístění konfigurace                           |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (použijte svazek pro trvalé uložení) |

<br/>

**Proměnné prostředí** (pouze web/Docker; Electron používá místní konfigurační soubor)

| Proměnná         | Výchozí                 | Popis |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port, na kterém naslouchá server |
| `CONFIG_PATH`    | `/app/data/config.json` | Cesta ke konfiguračnímu souboru |
| `OPENROUTER_KEY` | *(prázdné)*               | API klíč OpenRouter |
| `OPENAI_KEY`     | *(prázdné)*               | API klíč OpenAI |
| `CEREBRAS_KEY`   | *(prázdné)*               | API klíč Cerebras |
| `ANTHROPIC_KEY`  | *(prázdné)*               | API klíč Anthropic |
| `GOOGLE_KEY`     | *(prázdné)*               | API klíč Google Gemini |
| `DEEPSEEK_KEY`   | *(prázdné)*               | API klíč DeepSeek |
| `GROQ_KEY`       | *(prázdné)*               | API klíč Groq |
| `MISTRAL_KEY`    | *(prázdné)*               | API klíč Mistral |
| `OLLAMA_URL`     | *(prázdné)*               | Základní URL Ollam (např. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(prázdné)*               | API klíč xAI |

Nakonfigurujte pouze ty poskytovatele, které používáte. ID modelů jsou rozdělena do jmenných prostorů (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, atd.).

**Zobrazení nákladů:** OpenRouter vrací přesné účtované náklady, pokud je to možné. Jiní poskytovatelé používají **odhadované** náklady z veřejné cenové politiky modelů OpenRouteru, pokud je k dispozici klíč OpenRouter; bez něj se náklady na jiné poskytovatele mohou zobrazovat jako `0`. Odhady nejsou faktury.

<br/>

**Data a trvalost:** Pro Docker připojte svazek do `/app/data`, aby `config.json` a databáze SQLite přetrvaly restart kontejneru. Bez svazku se při zastavení kontejneru ztratí všechna data.

**Vývojáři:** Po stažení změn, které nahrazují starou konfiguraci s jedním klíčem, obnovte nebo sloučte `data/config.json` se standardní strukturou z `src/config-defaults/config_default.json`, pokud váš místní soubor stále používá odstraněná pole (`api_key`, `api_url`, proxy nastavení).

<br/>

**Webová autentizace:**

- Výchozí administrátor: `admin` / `transrewrt26`.
- Správa uživatelů v **Nastavení → Uživatelé**.
- Reset hesla: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (ze zdrojového kódu: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>
> Ihned změňte výchozí administrátorské heslo na libovolném stroji přístupném v síti.

<br/>

Základní nastavení (písmo, modely, jazyky atd.) jsou k dispozici v Nastavení aplikace.

<br/><br/>

<a id="development-and-architecture"></a>

## Vývoj a architektura

- **Vývoj:** Nastavení, sestavení, testování a nasazení (Electron, Web, Docker) – viz **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektura a přehled systému:** Struktura složek, technologická sada, návrhová rozhodnutí – viz **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Verze a štítky

- Štítky ve **Git** `v`* (např. `v1.0.10`) spouštějí [pracovní postup pro vydání](.github/workflows/release.yml). **GitHub Releases** připojuje instalační soubor pro Windows (`.exe`) a AppImage pro Linux (**x64** a **arm64**).
- **Docker image** jsou publikovány na `ghcr.io/wsj-br/transrewrt`. Značky imagí odpovídají verzi v Gitu (např. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) a navíc `latest`. Multi-arch: `linux/amd64` a `linux/arm64` (např. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Přispívání

1. Vytvořte si vlastní fork repozitáře.
2. Vytvořte větev s funkcí: `git checkout -b feature/moje-funkce`
3. Potvrďte své změny s jasným komentářem.
4. Nahrajte změny a vytvořte Pull Request do větve `main`.

Dodržujte prosím stávající styl kódu a otestujte změny v módu Electron i ve webovém režimu před odesláním. Návod k sestavení a testování naleznete v [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Hlášení problémů:** Otevřete chybu na [GitHubu](https://github.com/wsj-br/transrewrt/issues). Uveďte svou platformu (Windows / Linux / Docker) a verzi aplikace (zobrazeno v dialogu O aplikaci nebo na stránce verzí).

<br/><br/>

<a id="disclaimer"></a>
## Zřeknutí odpovědnosti

Názvy produktů a ikony patří příslušným vlastníkům a používají se pouze za účelem identifikace. Tento software nemá žádný vztah k uvedeným značkám a není jimi schválen.

<br/><br/>

<a id="license"></a>
## Licence

Autorské právo © 2026 Waldemar Scudeller Jr.

[Apache Licence 2.0](LICENSE)