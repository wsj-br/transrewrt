---
translated_at: "2026-03-27T23:08:34.008Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Verze"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licence: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Nástroj pro práci s textem s podporou umělé inteligence: překládání mezi jazyky, přepis ve různých stylech a úprava pomocí vlastních výzev — využívající více poskytovatelů umělé inteligence (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a místní Ollama). Spouští se jako desktopová aplikace (Electron) nebo jako webová aplikace hostovaná na vlastním serveru (Docker).

- **Překlad** — mezi desítkami jazyků, s automatickým rozpoznáním výchozího jazyka
- **Přepis** — oprava gramatiky, zlepšení srozumitelnosti, formální/neformální styl, zkrácení, rozšíření, technický styl
- **Úprava** — vlastní výzvy pro umělou inteligenci; vytváření a správa výzev, volitelný cílový jazyk pro každou výzvu
- **Historie** — úplná historie operací s vstupním a výstupním textem, filtrování a export
- **Modely a náklady** — výběr modelů od jakéhokoli nakonfigurovaného poskytovatele; statistiky nákladů a využití s protokolem, shrnutí podle modelu/operace/dne
- **Uživatelské rozhraní** — vícejazyčné rozhraní (30+ jazyků, podpora RTL), písmo, ...
- **Webový režim** — podpora více uživatelů s rolí správce
- **Desktopová verze** — aplikace Electron pro Windows a Linux
- **Samohostovaná** — Docker image pro architektury amd64 & arm64 (připraveno na Raspberry Pi)

Po instalaci si přečtěte **[Uživatelskou příručku](USER-GUIDE.cs.md)**, která podrobně popisuje všechny funkce.

<small>**Číst v jiných jazycích:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Poznámka k překladům uživatelského rozhraní a dokumentace:** Všechny jazykové verze uživatelského rozhraní kromě originální angličtiny (UK)
> byly přeloženy pomocí modelů umělé inteligence; formulace mohou být nepřesné nebo obsahovat chyby.

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

**Nástěnka**

![Nákladová nástěnka](../images/screenshots/cs/dashboard-summary.png)

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
- [Získání OpenRouter API klíče](#getting-an-openrouter-api-key)
- [Konfigurace a prostředí](#configuration-and-environment)
- [Vývoj a architektura](#development-and-architecture)
- [Verze a značky](#releases-and-tags)
- [Přispívání](#contributing)
- [Právní upozornění](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Rychlý start

**Docker (doporučeno pro self-hosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Hodnotu `sk-or-your-key` nahraďte vaším [klíčem OpenRouter API](https://openrouter.ai/keys) (nebo nastavte klíče jiných poskytovatelů; viz [Konfigurace](#configuration-and-environment)). Otevřete [http://localhost:5000](http://localhost:5000) a změňte výchozí administrační heslo, než bude služba přístupná zvenku.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> V Dockeru se přihlašovací údaje pro LLM zadávají pomocí proměnných prostředí, např. `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ne v webovém rozhraní). Na desktopu (Electron) klíče nastavujete v sekci **Nastavení → API**.

<br/>

**Windows**

Stáhněte nejnovější `Transrewrt Setup x.y.z.exe` z části [Releases](https://github.com/wsj-br/transrewrt/releases), spusťte instalační program a pak aplikaci spusťte z nabídky Start nebo přes zkratku na ploše. Zadejte své klíče API v sekci **Nastavení → API**. Musíte nakonfigurovat alespoň jednoho poskytovatele; OpenRouter je běžný volbou pro bezplatné modely.

<br/>

**Linux**

Stáhněte `.AppImage` pro vaše CPU z části [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` pro běžné počítače, `arm64` pro mnoho zařízení s architekturou ARM, včetně Raspberry Pi 4+), poté:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadejte své klíče API v sekci **Nastavení → API**. Musíte nakonfigurovat alespoň jednoho poskytovatele; OpenRouter je běžný volbou pro bezplatné modely.

Ve Debianu/Ubuntuu může být třeba nejprve nainstalovat další závislosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Podrobnosti viz [Instalace → Linux](#linux-electron).

<br/>

> ℹ️ **POZNÁMKA**<br/>
> macOS není v současnosti podporován. Transrewrt je dostupný pro Windows, Linux a Docker.

<br/>

Po spuštění aplikace si přečtěte **[Uživatelskou příručku](USER-GUIDE.cs.md)**, kde se dozvíte, jak překládat, přepisovat a transformovat texty, spravovat výzvy (prompts) a konfigurovat modely.

<br/><br/>

<a id="installation"></a>

## Instalace

<a id="windows-electron"></a>
### Windows (Electron)

- Stáhněte si nejnovější instalační program z [verzí (Releases)](https://github.com/wsj-br/transrewrt/releases).
- Spusťte soubor `.exe` a postupujte podle pokynů instalátoru.
- Při prvním spuštění: spusťte aplikaci z nabídky Start nebo přes zástupce na ploše.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Stáhněte si odpovídající soubor `.AppImage` (`x64` nebo `arm64`) z [verzí (Releases)](https://github.com/wsj-br/transrewrt/releases).
- Spusťte: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, nebo použijte soubor `...-arm64.AppImage` na ARM64.
- Další závislosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Více informací naleznete v [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Stažení: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Nastavte alespoň jeden klíč poskytovatele prostřednictvím proměnné prostředí (například `OPENROUTER_API_KEY` pro OpenRouter). Proměnné předejte pomocí `-e` nebo prostřednictvím `docker compose` / `.env`, aby se tajemství neuložila natvrdo do image.
- Klíče poskytovatelů se **nepoužívají** v webovém rozhraní; server je čte z prostředí.

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

# stažení souboru compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# upravte soubor pro přidání klíčů API
vi transrewrt.yml
# spuštění kontejneru
docker compose -f transrewrt.yml up -d
```

<br/>

| Možnost   | Popis                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (mapování pomocí `-p 5000:5000`)                                                                                                       |
| Svazek   | Připojte `/app/data` pro trvalé uložení konfigurace a databáze                                                                                  |
| Proměnné prostředí | `PORT`, `CONFIG_PATH`, a klíče LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - viz [Konfigurace](#configuration-and-environment) |

Pro sestavení a spuštění ze zdrojového kódu: `docker compose up --build -d` nebo `pnpm docker:up` - viz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Získání API klíče OpenRouter

Transrewrt podporuje více poskytovatelů umělé inteligence. [OpenRouter](https://openrouter.ai) je oblíbenou volbou, protože agreguje mnoho modelů pod jedním klíčem a nabízí i bezplatné modely.

1. Zaregistrujte se nebo se přihlaste na [openrouter.ai](https://openrouter.ai).
2. Otevřete stránku [Klíče](https://openrouter.ai/keys) a vytvořte nový klíč (zadejte název, případně nastavte limit kreditu). Bez přidání kreditu můžete používat bezplatné modely.
3. **Desktop (Electron):** vložte klíče do **Nastavení → API**. **Docker:** nastavte proměnné prostředí, například `OPENROUTER_API_KEY` (viz [Rychlý start](#quick-start)).

Nepoužívejte model **Body Builder** od OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pro překlad, přepis nebo transformaci: tento model vrací JSON datové části požadavků, nikoli dokončený text pro tyto úkoly. Viz [Nastavení → Modely](USER-GUIDE.cs.md#models) v uživatelské příručce.

Můžete také použít jiné poskytovatele (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) nebo spouštět modely lokálně pomocí [Ollama](https://ollama.com). Úplný seznam podporovaných poskytovatelů a proměnných prostředí najdete v části [Konfigurace](#configuration-and-environment).

> ⚠️ **UPOZORNĚNÍ**<br/>
> Pokud používáte Ollama z jiného zařízení, kontejneru nebo služby, nezapomeňte Ollama nakonfigurovat tak, aby umožňoval externí připojení (ne pouze připojení z localhostu).


Další informace o limitech, vlastním klíči (BYOK) a dalším najdete na [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfigurace a prostředí

**Umístění konfiguračních souborů**

| Nasazení         | Umístění konfigurace                                   |
| ---------------- | ------------------------------------------------------ |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (pro trvalost použijte svazek) |

<br/>

**Proměnné prostředí** (pouze web/Docker; Electron používá místní konfigurační soubor)

| Proměnná         | Výchozí                 | Popis |
| ---------------- | ----------------------- | ----- |
| `PORT`           | `5000`                  | Port, na kterém naslouchá server |
| `CONFIG_PATH`    | `/app/data/config.json` | Cesta ke konfiguračnímu souboru |
| `OPENROUTER_API_KEY` | *(prázdné)*               | API klíč OpenRouter |
| `OPENAI_API_KEY`     | *(prázdné)*               | API klíč OpenAI |
| `CEREBRAS_API_KEY`   | *(prázdné)*               | API klíč Cerebras |
| `ANTHROPIC_API_KEY`  | *(prázdné)*               | API klíč Anthropic |
| `GOOGLE_API_KEY`     | *(prázdné)*               | API klíč Google Gemini |
| `DEEPSEEK_API_KEY`   | *(prázdné)*               | API klíč DeepSeek |
| `GROQ_API_KEY`       | *(prázdné)*               | API klíč Groq |
| `MISTRAL_API_KEY`    | *(prázdné)*               | API klíč Mistral |
| `OLLAMA_URL`     | *(prázdné)*               | Základní URL Ollama (např. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(prázdné)*               | API klíč xAI |

Nakonfigurujte pouze poskytovatele, které používáte. Identifikátory modelů jsou rozděleny do jmenných prostorů (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, atd.).

**Zobrazení nákladů:** OpenRouter vrací přesné fakturované náklady, pokud je to možné. Ostatní poskytovatelé používají **odhadované** náklady z veřejných cenových tabulek modelů OpenRouter, pokud je k dispozici klíč OpenRouter; bez něj mohou být náklady na jiné než OpenRouter zobrazovány jako `0`. Odhady nejsou fakturami.

<br/>

**Data a trvalost:** U Dockeru připojte svazek do `/app/data`, aby `config.json` a databáze SQLite přetrvaly mezi restarty kontejneru. Bez svazku se všechna data ztratí po zastavení kontejneru.

**Vývojáři:** Po stažení změn, které nahrazují starou jednoklíčovou konfiguraci, obnovte nebo sloučte `data/config.json` s novým výchozím tvarem z `src/config-defaults/config_default.json`, pokud váš místní soubor stále používá zrušená pole (`api_key`, `api_url`, možnosti proxy).

<br/>

**Webové ověřování:**

- Výchozí administrátor: `admin` / `transrewrt26`.
- Spravujte uživatele v **Nastavení → Uživatelé**.
- Reset hesla: `docker exec <kontejner> reset-web-password '<uživatelské_jméno>' '<nové_heslo>'`
  (ze zdroje: `pnpm run reset-web-password -- <uživatelské_jméno> <nové_heslo>`)

<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>
> Okamžitě změňte výchozí administrační heslo na každém zařízení dostupném v síti.

<br/>

Hlavní nastavení (písmo, modely, jazyky atd.) jsou k dispozici v nastavení aplikace.

<br/><br/>

<a id="development-and-architecture"></a>

## Vývoj a architektura

- **Vývoj:** Nastavení, sestavení, testování a nasazení (Electron, Web, Docker) – viz **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektura a přehled systému:** Struktura složek, technologický stack, návrhová rozhodnutí – viz **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Verze a značky

- **Git značky** `v`* (např. `v1.0.10`) spouští [pracovní postup vydání](.github/workflows/release.yml). **GitHub Releases** obsahuje instalační soubor pro Windows (`.exe`) a Linux AppImage (**x64** a **arm64**).
- **Docker obrázky** jsou publikovány na `ghcr.io/wsj-br/transrewrt`. Značky obrázků odpovídají verzím Git (např. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) plus `latest`. Multi-arch: `linux/amd64` a `linux/arm64` (např. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Přispějte nám

1. Vystavte fork repozitáře.
2. Vytvořte větev pro novou funkci: `git checkout -b feature/moje-funkce`
3. Potvrďte své změny s jasným popisem.
4. Nahrajte změny a vytvořte Pull Request do větve `main`.

Dodržujte prosím stávající styl kódu a před odesláním otestujte změny v režimu Electron i ve webovém režimu. Pokyny pro sestavení a testování najdete v souboru [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Hlášení chyb:** Otevřete záznam na [GitHubu](https://github.com/wsj-br/transrewrt/issues). Uveďte svou platformu (Windows / Linux / Docker) a verzi aplikace (uvedeno v dialogu O aplikaci nebo na stránce Relase).

<br/><br/>

<a id="disclaimer"></a>

## Upozornění

Názvy produktů a ikony patří příslušným vlastníkům a jsou použity pouze pro identifikační účely. Tento software není spojen s žádnou z zmíněných značek a není také jejich schválen.

<br/><br/>

<a id="license"></a>
## Licence

Autorská práva © 2026 Waldemar Scudeller Jr.

[Apache Licence 2.0](LICENSE)