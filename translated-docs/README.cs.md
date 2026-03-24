---
translated_at: "2026-03-24T01:21:29.305Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Verze"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licence: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Nástroj na zpracování textu s využitím umělé inteligence: překládejte mezi jazyky, přepisujte do různých stylů a transformujte pomocí vlastních pokynů – s podporou více AI poskytovatelů (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a lokální Ollama). Funguje jako desktopová aplikace (Electron) nebo webová aplikace pro vlastní hostování (Docker).

- **Překlad** — mezi desítkami jazyků, včetně automatické detekce výchozího jazyka
- **Přepisování** — oprava gramatiky, zlepšení srozumitelnosti, formální/neformální styl, zkracování, rozšiřování, technický styl
- **Transformace** — vlastní pokyny pro AI; vytvářejte a spravujte pokyny, volitelný cílový jazyk pro každý pokyn
- **Historie** — kompletní záznam provedených operací s vstupním a výstupním textem, filtrem a možností exportu
- **Modely a náklady** — vybírejte modely z jakéhokoli nakonfigurovaného poskytovatele; přehled nákladů s protokolem v SQLite, shrnutí podle modelu/operace/dne
- **Uživatelské rozhraní** — vícejazyčné rozhraní (30+ jazyků, podpora RTL), písma,...
- **Webový režim** — podpora více uživatelů s rolí správce; klíče API zůstávají na straně serveru a nejsou nikdy vystaveny prohlížeči
- **Desktop** — desktopová aplikace pro Windows a Linux
- **Vlastní hostování** — image pro Docker pro architekturu amd64 a arm64 (vhodné i pro Raspberry Pi)

Po instalaci si přečtěte **[Průvodce uživatele](USER-GUIDE.cs.md)**, který podrobně popisuje všechny funkce.

<small>**Přečtěte si v jiných jazycích:** [Angličtina (UK)](README.cs.md) · [Portugalština (BR)](README.pt-BR.md) · [Arabština](README.ar.md) · [Bengálština](README.bn.md) · [Katalánština](README.ca.md) · [Zjednodušená čínština](README.zh-CN.md) · [Tradiční čínština](README.zh-TW.md) · [Chorvatština](README.hr.md) · [Čeština](README.cs.md) · [Nizozemština](README.nl.md) · [Angličtina (US)](README.en-US.md) · [Filipínština](README.tl.md) · [Francouzština](README.fr.md) · [Němčina](README.de.md) · [Řečtina](README.el.md) · [Hindština](README.hi.md) · [Maďarština](README.hu.md) · [Italština](README.it.md) · [Japonština](README.ja.md) · [Jávština](README.jv.md) · [Korejština](README.ko.md) · [Malajština](README.ms.md) · [Perština](README.fa.md) · [Polština](README.pl.md) · [Portugalština (PT)](README.pt.md) · [Punjabština](README.pa.md) · [Rumunština](README.ro.md) · [Ruština](README.ru.md) · [Slovenština](README.sk.md) · [Španělština](README.es.md) · [Svahilština](README.sw.md) · [Švédština](README.sv.md) · [Telugština](README.te.md) · [Thajština](README.th.md) · [Turečtina](README.tr.md) · [Ukrajinština](README.uk.md) · [Vietnamština](README.vi.md)</small>

<br/>

**Poznámka k překladům rozhraní a dokumentace:** Všechny jazykové verze rozhraní s výjimkou angličtiny (UK) byly přeloženy s využitím modelů umělé inteligence. Proto mohou být formulace nepřesné nebo obsahovat chyby.

<a id="screenshots"></a>
## Snímky obrazovky

**Výběr jazyka**

![Výběr jazyka](../images/screenshots/cs/language-selector.png)

**Překlad**

![Překlad](../images/screenshots/cs/translate.png)

**Transformace – editor pokynů**

![Transformace – editor pokynů](../images/screenshots/cs/transform-prompt-edit.png)

**Řídicí panel**

![Řídicí panel nákladů](../images/screenshots/cs/dashboard-summary.png)

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

**Docker (doporučeno pro samostatné hostování)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `sk-or-your-key` svým [OpenRouter API klíčem](https://openrouter.ai/keys) (nebo nastavte klíč jiného poskytovatele; viz [Konfigurace](#configuration-and-environment)). Otevřete [http://localhost:5000](http://localhost:5000) a změňte výchozí admin heslo před tím, než službu zpřístupníte.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> V Dockeru se přihlašovací údaje k LLM nastavují prostřednictvím proměnných prostředí, např. `OPENROUTER_KEY`, `OPENAI_KEY`, … (nikoli přes webové rozhraní). Na ploše (Electron) nastavujete klíče v **Nastavení → API**.

<br/>

**Windows**

Stáhněte si nejnovější `Transrewrt Setup x.y.z.exe` z části [Verze](https://github.com/wsj-br/transrewrt/releases), spusťte instalátor a poté spusťte aplikaci z nabídky Start nebo z ikony na pracovní ploše. Zadejte své klíče API v **Nastavení → API**. Musíte nakonfigurovat alespoň jednoho poskytovatele; OpenRouter je běžná volba pro bezplatné modely.

<br/>

**Linux**

Stáhněte soubor `.AppImage` z [verzí](https://github.com/wsj-br/transrewrt/releases), poté:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Zadejte své API klíče v **Nastavení → API**. Je třeba nakonfigurovat alespoň jednoho poskytovatele; OpenRouter je běžný poskytovatel bezplatných modelů.

V Debianu/Ubuntu možná budete muset nejprve nainstalovat další závislosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Podrobnosti naleznete v sekci [Instalace → Linux](#linux-electron).

<br/>

> ℹ️ **POZNÁMKA**<br/>
> macOS není aktuálně podporován. Transrewrt je dostupný pro Windows, Linux a Docker.

<br/>

Jakmile běží aplikace, přečtěte si **[Uživatelskou příručku](USER-GUIDE.cs.md)**, kde se dozvíte, jak překládat, přepisovat a transformovat text, spravovat výzvy (prompty) a konfigurovat modely.

<br/><br/>

<a id="installation"></a>
## Instalace

<a id="windows-electron"></a>
### Windows (Electron)

- Stáhněte si nejnovější instalační program z [verzí](https://github.com/wsj-br/transrewrt/releases).
- Spusťte `.exe` a postupujte podle pokynů instalátoru.
- Poprvé: spusťte aplikaci z nabídky Start nebo zkratky na ploše.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Stáhněte si `.AppImage` ze [verzí](https://github.com/wsj-br/transrewrt/releases).
- Spusťte: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Doplňkové závislosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Další informace viz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Stažení: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Nastavte alespoň jeden klíč poskytovatele prostřednictvím proměnné prostředí (např. `OPENROUTER_KEY` pro OpenRouter). Proměnné předejte pomocí `-e` nebo `docker compose` / `.env`, aby se tajemství nedostala do obrazu.
- Klíče poskytovatelů **se** nezadávají přes webové rozhraní; server je čte z prostředí.

Příklad – pojmenovaný svazek pro trvalá data (OpenRouter klíč přes proměnnou prostředí):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Možnost   | Popis                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (mapujte pomocí `-p 5000:5000`)                                                                  |
| Svazek   | Připojte `/app/data` pro trvalé uložení konfigurace a databáze                                          |
| Proměnné prostředí | `PORT`, `CONFIG_PATH`, a klíče k LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) – viz [Konfigurace](#configuration-and-environment) |

Sestavení a spuštění ze zdrojového kódu: `docker compose up --build -d` nebo `pnpm docker:up` – viz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Získání OpenRouter API klíče

Transrewrt podporuje více poskytovatelů umělé inteligence. [OpenRouter](https://openrouter.ai) je oblíbenou volbou, protože agreguje mnoho modelů pod jeden klíč a nabízí i zdarma dostupné modely.

1. Zaregistrujte se nebo se přihlaste na [openrouter.ai](https://openrouter.ai).
2. Otevřete stránku [Keys](https://openrouter.ai/keys) a vytvořte nový klíč (zadejte mu název a volitelně nastavte limit kreditu). Můžete používat zdarma dostupné modely i bez přidání kreditu.
3. **Desktop (Electron):** klíče vkládejte do **Nastavení → API**. **Docker:** nastavte proměnné prostředí, například `OPENROUTER_KEY` (viz [Rychlý start](#quick-start)).

Můžete také používat jiné poskytovatele (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) nebo spouštět modely lokálně pomocí [Ollama](https://ollama.com). Úplný seznam podporovaných poskytovatelů a proměnných prostředí najdete v části [Konfigurace](#configuration-and-environment).

Informace o limitech, použití vlastních klíčů (BYOK) a dalších funkcích najdete v dokumentaci [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurace a prostředí

**Umístění konfiguračních souborů**

| Nasazení         | Umístění konfigurace                             |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (použijte svazek pro trvalé uložení) |

<br/>

**Proměnné prostředí** (pouze webová verze/Docker; Electron používá místní konfigurační soubor)

| Proměnná         | Výchozí                 | Popis |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port, na kterém naslouchá server |
| `CONFIG_PATH`    | `/app/data/config.json` | Cesta ke konfiguračnímu souboru |
| `OPENROUTER_KEY` | *(prázdné)*             | OpenRouter API klíč |
| `OPENAI_KEY`     | *(prázdné)*             | OpenAI API klíč |
| `ANTHROPIC_KEY`  | *(prázdné)*             | Anthropic API klíč |
| `GOOGLE_KEY`     | *(prázdné)*             | Google Gemini API klíč |
| `DEEPSEEK_KEY`   | *(prázdné)*             | DeepSeek API klíč |
| `GROQ_KEY`       | *(prázdné)*             | Groq API klíč |
| `MISTRAL_KEY`    | *(prázdné)*             | Mistral API klíč |
| `OLLAMA_URL`     | *(prázdné)*             | Základní URL Ollama (např. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(prázdné)*             | xAI API klíč |

Nakonfigurujte pouze ty poskytovatele, které používáte. Identifikátory modelů jsou jmennými prostory (`openrouter/…`, `openai/…`, `ollama/…`, atd.).

**Zobrazení nákladů:** OpenRouter vrací přesné fakturované náklady, pokud je to možné. Jiní poskytovatelé používají **odhad** nákladů z veřejných cenových struktur modelů OpenRouteru, pokud je dostupný OpenRouter klíč; bez něj mohou být náklady na jiné poskytovatele zobrazeny jako `0`. Odhady nejsou faktury.

<br/>

**Data a trvalost:** Pro Docker připojte svazek (volume) do `/app/data`, abyste zajistili, že `config.json` a databáze SQLite přetrvaly restart kontejneru. Bez svazku se všechna data ztratí při zastavení kontejneru.

**Vývojáři:** Po stažení změn, které nahrádějí starou konfiguraci s jediným klíčem, si buďto obnovte nebo sloučte `data/config.json` s novým výchozím tvarem z `src/config-defaults/config_default.json`, pokud váš místní soubor stále používá odstraněná pole (`api_key`, `api_url`, možnosti proxy).

<br/>

**Webové ověřování:**

- Výchozí administrátor: `admin` / `transrewrt26`.
- Správa uživatelů: **Nastavení → Uživatelé**.
- Obnovení hesla: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (ze zdrojového kódu: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>
> Okamžitě změňte výchozí heslo administrátora na každém zařízení přístupném z sítě.

<br/>

Základní nastavení (písmo, modely, jazyky atd.) jsou dostupná v nastaveních aplikace.

<br/><br/>

<a id="development-and-architecture"></a>
## Vývoj a architektura

- **Vývoj:** Nastavení, sestavení, testování a nasazení (Electron, Web, Docker) – viz **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Přehled architektury a systému:** Struktura složek, technologický stack, rozhodnutí o návrhu – viz **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Vydání a štítky

- **Git štítky** `v`* (například `v1.0.10`) spouštějí [pracovní postup vydání](.github/workflows/release.yml). **GitHub Releases** přidávají Windows instalační soubor (`.exe`) a Linux AppImage.
- **Docker image** jsou publikovány do `ghcr.io/wsj-br/transrewrt`. Značky imagí odpovídají verzi Git (např. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) a navíc `latest`. Multi-arch: `linux/amd64` a `linux/arm64` (např. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Přispívání

1. Vytvořte kopii repozitáře.
2. Vytvořte větev s funkcí: `git checkout -b feature/moje-funkce`
3. Potvrďte své změny s jasným popisem.
4. Nahrajte a otevřete Pull Request proti větvi `main`.

Dodržujte prosím stávající styl kódu a otestujte své změny v režimu Electron i webovém před odesláním. Pokyny k sestavení a testování najdete v souboru [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Hlášení chyb:** Otevřete záležitost na [GitHubu](https://github.com/wsj-br/transrewrt/issues). Uveďte svou platformu (Windows / Linux / Docker) a verzi aplikace (zobrazenou v dialogu O aplikaci nebo na stránce Vydání).

<br/><br/>

<a id="disclaimer"></a>
## Zřeknutí se odpovědnosti

Názvy produktů a ikony patří příslušným vlastníkům a používají se pouze pro identifikační účely. Tento software není spjatý s žádnými zmíněnými značkami a není jimi podporován.

<br/><br/>

<a id="license"></a>
## Licence

Autorská práva © 2026 Waldemar Scudeller Jr.

[Licence Apache 2.0](LICENSE)