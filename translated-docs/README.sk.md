---
translated_at: "2026-03-26T01:06:37.964Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Verzia"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licencia: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Nástroj na prácu s textom využívajúci umelú inteligenciu: preklad medzi jazykmi, prepis v rôznych štýloch a transformácia pomocou vlastných pokynov – využitím viacerých poskytovateľov AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a lokálny Ollama). Spúšťa sa ako desktopová aplikácia (Electron) alebo ako webová aplikácia hostovaná samostatne (Docker).

- **Preložiť** — medzi desiatkami jazykov, automatické rozpoznanie zdrojového jazyka
- **Prepísať** — opraviť gramatiku, zlepšiť srozumiteľnosť, formálny/neformálny štýl, skrátiť, rozšíriť, technický prepis
- **Transformovať** — vlastné pokyny pre AI; vytvárajte a spravujte pokyny, voliteľne cieľový jazyk pre každý pokyn
- **História** — úplný záznam vykonaných operácií vrátane vstupného a výstupného textu, filtrovanie a export
- **Modely a náklady** — výber modelov od akéhokoľvek nakonfigurovaného poskytovateľa; nákladové a využitie dáta s denníkom a zhrnutiami podľa modelu/operácie/dňa
- **UI** — viacjazyčné rozhranie (30+ jazykov, podpora RTL), písma, atď.
- **Webový režim** — podpora viacerých používateľov s administrátorskými rolami
- **Desktop** — Electron aplikácia pre Windows a Linux
- **Samostatne hostované** — Docker obraz pre amd64 & arm64 (pripravené pre Raspberry Pi)

Po nainštalovaní si pozrite **[Používateľskú príručku](USER-GUIDE.sk.md)**, ktorá podrobne vysvetľuje všetky funkcie.

<small>**Prečítajte si v iných jazykoch:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Poznámka k prekladom rozhrania a dokumentácie:** Všetky jazyky rozhrania okrem pôvodného angličtiny (UK)
> boli preložené pomocou modelov umelej inteligencie; preklad môže byť nepresný alebo obsahovať chyby.

</small>

<br/>

<a id="screenshots"></a>
## Snímky obrazovky

**Výber jazyka**

![Výber jazyka](../images/screenshots/sk/language-selector.png)

**Preložiť**

![Preložiť](../images/screenshots/sk/translate.png)

**Transformovať – editor pokynov**

![Transformovať – editor pokynov](../images/screenshots/sk/transform-prompt-edit.png)

**Panel**

![Panel s nákladmi](../images/screenshots/sk/dashboard-summary.png)

**História**

![História](../images/screenshots/sk/history.png)

**Nastavenia – výber modelu**

![Nastavenia – výber modelu](../images/screenshots/sk/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Obsah

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Rýchly štart](#quick-start)
- [Inštalácia](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Získanie API kľúča OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurácia a prostredie](#configuration-and-environment)
- [Vývoj a architektúra](#development-and-architecture)
- [Vydania a značky](#releases-and-tags)
- [Prispievanie](#contributing)
- [Vyhlásenie](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Rýchly štart

**Docker (odporúčané pre samo-hostovanie)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `sk-or-your-key` svojím [API kľúčom OpenRouter](https://openrouter.ai/keys) (alebo nastavte kľúče iných poskytovateľov; pozri [Konfigurácia](#configuration-and-environment)). Otvorte [http://localhost:5000](http://localhost:5000) a pred zverejnením služby zmeňte predvolené admin heslo.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Pri Dockeri sa poverenia LLM nastavujú cez premenné prostredia ako `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (nie cez webové rozhranie). Na desktopovej verzii (Electron) kľúče nastavujete v **Nastavenia → API**.

<br/>

**Windows**

Stiahnite najnovší súbor `Transrewrt Setup x.y.z.exe` z časti [Vydania](https://github.com/wsj-br/transrewrt/releases), spustite inštalátor a potom spustite aplikáciu z ponuky Start alebo z prepojenia na pracovnej ploche. Zadajte svoje API kľúče v sekcii **Nastavenia → API**. Musíte nakonfigurovať aspoň jedného poskytovateľa, OpenRouter je bežný pre bezplatné modely.

<br/>

**Linux**

Stiahnite `.AppImage` súbor pre vašu CPU z [Vydania](https://github.com/wsj-br/transrewrt/releases) (`x64` pre bežné PC, `arm64` pre mnohé zariadenia ARM vrátane Raspberry Pi 4+), potom:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadajte svoje API kľúče v sekcii **Nastavenia → API**. Musíte nakonfigurovať aspoň jedného poskytovateľa, OpenRouter je bežný pre bezplatné modely.

Na Debiane/Ubuntu možno budete musieť najskôr nainštalovať ďalšie závislosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Podrobnosti nájdete v časti [Inštalácia → Linux](#linux-electron).

<br/>

> ℹ️ **POZNÁMKA**<br/>
> macOS nie je momentálne podporované. Transrewrt je dostupný pre Windows, Linux a Docker.

<br/>

Keď je aplikácia spustená, pozrite si **[Používateľskú príručku](USER-GUIDE.sk.md)**, kde sa dozviete, ako prekladať, prepisovať a transformovať text, spravovať výzvy a konfigurovať modely.

<br/><br/>

<a id="installation"></a>
## Inštalácia

<a id="windows-electron"></a>
### Windows (Electron)

- Stiahnite posledný inštalačný súbor z [Vydania](https://github.com/wsj-br/transrewrt/releases).
- Spustite `.exe` a postupujte podľa pokynov inštalátora.
- Prvé spustenie: spustite aplikáciu z ponuky Start alebo z prepojenia na pracovnej ploche.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Stiahnite príslušný `.AppImage` súbor (`x64` alebo `arm64`) z [Vydania](https://github.com/wsj-br/transrewrt/releases).
- Spustite: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, alebo použite súbor `...-arm64.AppImage` na ARM64.
- Dodatočné závislosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Viac informácií nájdete v [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Stiahnite: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Nastavte aspoň jeden kľúč poskytovateľa prostredníctvom premenných prostredia (napr. `OPENROUTER_KEY` pre OpenRouter). Premenné odovzdávajte pomocou `-e` alebo cez `docker compose` / `.env`, aby sa tajomstvá neuložili do obrazu.
- Kľúče poskytovateľov sa **nezadávajú** cez webové rozhranie; server ich číta z prostredia.

Príklad – pomenovaný zväzok pre trvalosť údajov (kľúč OpenRouter cez premennú prostredia):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Možnosť   | Popis                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (mapujte pomocou `-p 5000:5000`)                                                                              |
| Zväzok   | Pripojte `/app/data` pre trvalosť konfigurácie a databázy                                                         |
| Premenné prostredia | `PORT`, `CONFIG_PATH`, a kľúče LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) – pozri [Konfigurácia](#configuration-and-environment) |

Na zostavenie a spustenie zo zdrojov: `docker compose up --build -d` alebo `pnpm docker:up` – pozri [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Získanie API kľúča OpenRouter

Transrewrt podporuje viaceré poskytovateľov umelej inteligencie. [OpenRouter](https://openrouter.ai) je obľúbenou voľbou, pretože agreguje veľa modelov pod jeden kľúč a ponúka aj bezplatné modely.

1. Zaregistrujte sa alebo sa prihláste na [openrouter.ai](https://openrouter.ai).
2. Otvorte stránku [Keys](https://openrouter.ai/keys) a vytvorte nový kľúč (pomenujte ho a voliteľne nastavte limit kreditu). Bezplatné modely môžete používať aj bez pridania kreditu.
3. **Desktop (Electron):** vložte kľúče do **Settings → API**. **Docker:** nastavte premenné prostredia, ako napríklad `OPENROUTER_KEY` (pozri [Rýchly štart](#quick-start)).

Nepoužívajte OpenRouterov model **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) na preklad, prepisovanie ani transformáciu: tento model vráti iba JSON dátové balíky požiadaviek, nie hotový text pre tieto úlohy. Viac informácií nájdete v časti [Settings → Models](USER-GUIDE.sk.md#models) v Používateľskej príručke.

Môžete tiež používať iných poskytovateľov (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) alebo spúšťať modely lokálne pomocou [Ollama](https://ollama.com). Úplný zoznam podporovaných poskytovateľov a premenných prostredia nájdete v časti [Konfigurácia](#configuration-and-environment).

> ⚠️ **UPOZORNENIE**<br/>
> Ak používate Ollama z iného zariadenia, kontajnera alebo služby, nezabudnite nakonfigurovať Ollama tak, aby umožňoval externé pripojenia (nie iba z localhostu).


Pre limity, BYOK a ďalšie informácie si pozrite [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurácia a prostredie

**Umiestnenie konfiguračných súborov**

| Nasadenie         | Umiestnenie konfigurácie                          |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (použite zväzok na uchovanie) |

<br/>

**Premenné prostredia** (iba web/Docker; Electron používa lokálny konfiguračný súbor)

| Premenná           | Predvolené              | Popis |
| ------------------ | ----------------------- | ----- |
| `PORT`             | `5000`                  | Port, na ktorom počúva server |
| `CONFIG_PATH`      | `/app/data/config.json` | Cesta ku konfiguračnému súboru |
| `OPENROUTER_KEY`   | *(prázdne)*             | API kľúč OpenRouter |
| `OPENAI_KEY`       | *(prázdne)*             | API kľúč OpenAI |
| `CEREBRAS_KEY`     | *(prázdne)*             | API kľúč Cerebras |
| `ANTHROPIC_KEY`    | *(prázdne)*             | API kľúč Anthropic |
| `GOOGLE_KEY`       | *(prázdne)*             | API kľúč Google Gemini |
| `DEEPSEEK_KEY`     | *(prázdne)*             | API kľúč DeepSeek |
| `GROQ_KEY`         | *(prázdne)*             | API kľúč Groq |
| `MISTRAL_KEY`      | *(prázdne)*             | API kľúč Mistral |
| `OLLAMA_URL`       | *(prázdne)*             | Základná URL Ollama (napr. `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(prázdne)*             | API kľúč xAI |

Konfigurujte len tých poskytovateľov, ktorých používate. Identifikátory modelov sú menovane oddelené (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, apod.).

**Zobrazovanie nákladov:** OpenRouter poskytuje presnú výšku účtovaného objemu, ak je to možné. Ostatní poskytovatelia používajú **odhadované** náklady podľa verejných cien modelov OpenRouter, ak je k dispozícii kľúč OpenRouter; bez neho môžu byť náklady na iných poskytovateľov zobrazené ako `0`. Odhady nie sú faktúry.

<br/>

**Dáta a trvalosť:** Pre Docker pripojte zväzok k `/app/data`, aby sa súbor `config.json` a databáza SQLite zachovali aj po reštarte kontajnera. Bez zväzku sa všetky dáta stratia po zastavení kontajnera.

**Vývojárom:** Po aktualizácii, ktorá nahrádza starú konfiguráciu s jedným kľúčom, znova nastavte alebo zlúčte `data/config.json` s novým predvoleným tvarom súboru `src/config-defaults/config_default.json`, ak váš lokálny súbor stále používa odstránené položky (`api_key`, `api_url`, proxy nastavenia).

<br/>

**Webové overenie:**

- Predvolený administrátor: `admin` / `transrewrt26`.
- Spravujte používateľov v časti **Settings → Users**.
- Obnovenie hesla: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (z kódu: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UPOZORNENIE**<br/>
> Zmeňte okamžite predvolené heslo administrátora na akejkoľvek sieti dostupnej stanici.

<br/>

Základné nastavenia (písmo, modely, jazyky atď.) sú dostupné v nastaveniach aplikácie.

<br/><br/>

<a id="development-and-architecture"></a>

## Vývoj a architektúra

- **Vývoj:** Nastavenie, zostavenie, testovanie a nasadenie (Electron, Web, Docker) – pozri **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektúra a prehľad systému:** Štruktúra priečinkov, technologický stack, návrhové rozhodnutia – pozri **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Vydania a značky

- **Git značky** `v`* (napr. `v1.0.10`) spúšťajú [pracovný tok vydania](.github/workflows/release.yml). **GitHub Releases** obsahujú inštalačný program pre Windows (`.exe`) a Linux AppImage súbory (**x64** a **arm64**).
- **Docker obrazy** sú publikované na `ghcr.io/wsj-br/transrewrt`. Značky obrazov zodpovedajú Git verzii (napr. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) a tiež značke `latest`. Viacero architektúr: `linux/amd64` a `linux/arm64` (napr. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Pridieľovanie príspevkov

1. Vytvorte si klon repozitára (fork).
2. Vytvorte vetvu pre funkciu: `git checkout -b feature/moja-funkcia`
3. Pripojte zmeny s jasnou správou.
4. Nahrajte a otvorte žiadosť o spojenie (Pull Request) proti vetve `main`.

Dodržiavajte prosím existujúci štýl kódu a otestujte svoje zmeny v režimoch Electron aj webovom pred odoslaním. Pokyny na zostavenie a testovanie nájdete v súbore [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Hlásenie problémov:** Otvorte problém na [GitHub](https://github.com/wsj-br/transrewrt/issues). Uveďte svoju platformu (Windows / Linux / Docker) a verziu aplikácie (zobrazenú v dialógu O programe alebo na stránke Vydania).

<br/><br/>

<a id="disclaimer"></a>
## Vyhlásenie

Názvy produktov a ikony patria ich príslušným vlastníkom a používajú sa výlučne na identifikačné účely. Tento softvér nie je prepojený ani schválený žiadnou z uvedených značiek.

<br/><br/>

<a id="license"></a>
## Licencia

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)