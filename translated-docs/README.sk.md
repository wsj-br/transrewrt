---
translated_at: "2026-03-25T22:25:32.464Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Verzia"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licencia: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI nástroj na prácu s textom: preklad medzi jazykmi, prepis v rôznych štýloch a transformácia pomocou vlastných pokynov – s využitím viacerých poskytovateľov AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a lokálne Ollama). Beží ako desktopová aplikácia (Electron) alebo ako samo-hostovaná webová aplikácia (Docker).

- **Preklad** — medzi desiatkami jazykov, s automatickým rozpoznaním zdrojového jazyka
- **Prepis** — oprava gramatiky, zlepšenie jasnosti, formálny/neformálny štýl, skrátenie, rozšírenie, technický prepis
- **Transformácia** — vlastné pokyny pre AI; vytváranie a spravovanie pokynov, voliteľný cieľový jazyk pre každý pokyn
- **História** — kompletný záznam vykonaných operácií s vstupným/výstupným textom, filtrovanie a export
- **Modely a náklady** — výber modelov od akéhokoľvek nakonfigurovaného poskytovateľa; nástenky pre sledovanie ceny a využitia s denníkmi, súhrnmi podľa modelu/operácie/dňa
- **UI** — viacjazyčné rozhranie (30+ jazykov, podpora RTL), písma, ...
- **Webový režim** — podpora viacerých používateľov s administrátorskými rolami
- **Desktop** — aplikácia Electron pre Windows a Linux
- **Samo-hostované** — Docker obraz pre amd64 & arm64 (pripravené na Raspberry Pi)

Po inštalácii si prečítajte **[Používateľskú príručku](USER-GUIDE.sk.md)**, ktorá poskytuje podrobný návod na všetky funkcie.

<small>**Prečítajte si v iných jazykoch:** [English (UK)](README.sk.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Poznámka k prekladom rozhrania a dokumentácie:** Všetky jazykové verzie rozhrania okrem originálnej angličtiny (UK)
> boli preložené pomocou modelov umelej inteligencie; preto sa môže vyskytnúť nepresné alebo chybné znenie.

</small>

<br/>

<a id="screenshots"></a>
## Snímky obrazovky

**Výber jazyka**

![Výber jazyka](../images/screenshots/sk/language-selector.png)

**Preklad**

![Preklad](../images/screenshots/sk/translate.png)

**Transformácia – editor pokynov**

![Transformácia – editor pokynov](../images/screenshots/sk/transform-prompt-edit.png)

**Nástenka**

![Nástenka nákladov](../images/screenshots/sk/dashboard-summary.png)

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
- [Získanie OpenRouter API kľúča](#getting-an-openrouter-api-key)
- [Konfigurácia a prostredie](#configuration-and-environment)
- [Vývoj a architektúra](#development-and-architecture)
- [Verzie a označenia](#releases-and-tags)
- [Prispievanie](#contributing)
- [Zrieknutie sa zodpovednosti](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Rýchly štart

**Docker (odporúčané pre vlastné hostovanie)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `sk-or-your-key` svojím [OpenRouter API kľúčom](https://openrouter.ai/keys) (alebo nastavte kľúč iného poskytovateľa; pozri [Konfigurácia](#configuration-and-environment)). Otvorte [http://localhost:5000](http://localhost:5000) a pred zverejnením služby zmeňte predvolené admin heslo.

<br/>

> ℹ️ **Poznámka**<br/>
> V Dockeri sa poverenia LLM nastavujú prostredníctvom premenných prostredia ako `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (nie cez webové rozhranie). Na počítači (Electron) kľúče konfigurujete v **Nastavenia → API**.

<br/>

**Windows**

Stiahnite najnovší `Transrewrt Setup x.y.z.exe` zo stránky [Verzie](https://github.com/wsj-br/transrewrt/releases), spustite inštalátor a potom spustite aplikáciu z ponuky Štart alebo skratky na ploche. Zadajte svoje API kľúče v **Nastavenia → API**. Musíte nakonfigurovať aspoň jedného poskytovateľa; OpenRouter je bežný pre bezplatné modely.

<br/>

**Linux**

Stiahnite si `.AppImage` pre svoj procesor z [Verzií](https://github.com/wsj-br/transrewrt/releases) (`x64` pre typické PC, `arm64` pre mnoho zariadení ARM vrátane Raspberry Pi 4+), potom:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadajte svoje API kľúče v **Nastavenia → API**. Musíte nakonfigurovať aspoň jedného poskytovateľa; OpenRouter je bežný pre bezplatné modely.

V Debiane/Ubuntu možno budete musieť najprv nainštalovať navyše závislosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Detaily nájdete v časti [Inštalácia → Linux](#linux-electron).

<br/>

> ℹ️ **Poznámka**<br/>
> macOS nie je momentálne podporované. Transrewrt je dostupný pre Windows, Linux a Docker.

<br/>

Keď je aplikácia spustená, pozrite si **[Používateľský sprievodca](USER-GUIDE.sk.md)**, kde sa dozviete, ako prekladať, prepisovať a transformovať text, ako spravovať výzvy (prompty) a konfigurovať modely.

<br/><br/>

<a id="installation"></a>
## Inštalácia

<a id="windows-electron"></a>
### Windows (Electron)

- Stiahnite najnovší inštalátor zo stránky [Verzie](https://github.com/wsj-br/transrewrt/releases).
- Spustite `.exe` súbor a postupujte podľa pokynov inštalátora.
- Prvé spustenie: spustite aplikáciu z ponuky Štart alebo zo zástupcu na ploche.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Stiahnite zodpovedajúci `.AppImage` súbor (`x64` alebo `arm64`) zo stránky [Verzie](https://github.com/wsj-br/transrewrt/releases).
- Spustenie: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, alebo použite súbor s názvom `...-arm64.AppImage` na ARM64.
- Navyše potrebné balíčky (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Ďalšie informácie nájdete v súbore [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Stiahni: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Nastavte aspoň jeden kľúč poskytovateľa prostredníctvom premenných prostredia (napr. `OPENROUTER_KEY` pre OpenRouter). Premenné odovzdajte cez `-e` alebo použite `docker compose` / `.env`, aby sa tajomstvá neukladali do obrazu.
- Kľúče poskytovateľov sa **neuvádzajú** v webovom rozhraní; server ich číta z prostredia.

Príklad – pomenovaný zväzok pre trvalosť (OpenRouter kľúč cez prem. prostredia):

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
| Port     | `5000` (mapovanie pomocou `-p 5000:5000`)                                                                              |
| Zväzok   | Pripojenie `/app/data` pre trvalosť konfigurácie a databázy                                                         |
| Prem. prostredia | `PORT`, `CONFIG_PATH`, plus kľúče LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - pozri [Konfigurácia](#configuration-and-environment) |

Na zostavenie a spustenie zo zdrojového kódu: `docker compose up --build -d` alebo `pnpm docker:up` - pozri [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Získanie API kľúča pre OpenRouter

Transrewrt podporuje viacero poskytovateľov umelého inteligencie. [OpenRouter](https://openrouter.ai) je obľúbenou voľbou, pretože ponúka prístup k mnohým modelom cez jeden kľúč a navyše poskytuje aj bezplatné modely.

1. Zaregistrujte sa alebo sa prihláste na stránke [openrouter.ai](https://openrouter.ai).
2. Otvorte stránku [Keys](https://openrouter.ai/keys) a vytvorte nový kľúč (pozvánkujte ho a voliteľne nastavte limit kreditu). Môžete používať bezplatné modely bez nutnosti pridania kreditu.
3. **Desktop (Electron):** vložte kľúče do **Nastavenia → API**. **Docker:** nastavte premenné prostredia, napr. `OPENROUTER_KEY` (pozri [Rýchly štart](#quick-start)).

Nepoužívajte model **Body Builder** od OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pre preklad, prepisovanie alebo transformáciu: tento model vracia len JSON s dátami požiadavku, nie hotový text. Viac informácií nájdete v časti [Nastavenia → Modely](USER-GUIDE.sk.md#models) v používateľskej príručke.

Môžete tiež použiť iných poskytovateľov (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) alebo spustiť modely lokálne pomocou [Ollama](https://ollama.com). Úplný zoznam podporovaných poskytovateľov a premenných prostredia viď [Konfigurácia](#configuration-and-environment).

> ⚠️ **UPOZORNENIE**<br/>
> Ak používate Ollama z iného zariadenia, kontajnera alebo služby, nezabudnite nakonfigurovať Ollama tak, aby umožnil externé pripojenie (nie iba localhost).

Viac o limitoch, vlastných kľúčoch (BYOK) a ďalších funkciách nájdete na stránke [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurácia a prostredie

**Umiestnenia konfiguračných súborov**

| Nasadenie         | Umiestnenie konfigurácie                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (využite zväzok na trvalé uloženie) |

<br/>

**Premenné prostredia** (iba web/Docker; Electron používa lokálny konfiguračný súbor)

| Premenná         | Predvolená hodnota                 | Popis |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port, na ktorom beží server |
| `CONFIG_PATH`    | `/app/data/config.json` | Cesta ku konfiguračnému súboru |
| `OPENROUTER_KEY` | *(prázdne)*             | API kľúč OpenRouter |
| `OPENAI_KEY`     | *(prázdne)*             | API kľúč OpenAI |
| `CEREBRAS_KEY`   | *(prázdne)*             | API kľúč Cerebras |
| `ANTHROPIC_KEY`  | *(prázdne)*             | API kľúč Anthropic |
| `GOOGLE_KEY`     | *(prázdne)*             | API kľúč Google Gemini |
| `DEEPSEEK_KEY`   | *(prázdne)*             | API kľúč DeepSeek |
| `GROQ_KEY`       | *(prázdne)*             | API kľúč Groq |
| `MISTRAL_KEY`    | *(prázdne)*             | API kľúč Mistral |
| `OLLAMA_URL`     | *(prázdne)*             | Základná URL Ollama (napr. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(prázdne)*             | API kľúč xAI |

Konfigurujte len tých poskytovateľov, ktorých skutočne používate. ID modelov majú svoje menné priestory (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, atď.).

**Zobrazenie nákladov:** OpenRouter vracia presné účtovné náklady, keď je to možné. Ostatní poskytovatelia používajú **odhadované** náklady podľa verejnej cenníkovej politiky OpenRouteru, ak je dostupný OpenRouter kľúč; bez neho sa náklady na iných poskytovateľov môžu zobraziť ako `0`. Odhady nie sú faktúry.

<br/>

**Dáta a trvalosť:** Pre Docker pripevnite zväzok (volume) ku `/app/data`, aby `config.json` a databáza SQLite prežili reštart kontajnera. Bez zväzku sa všetky dáta stratia po zastavení kontajnera.

**Vývojári:** Po stiahnutí zmien, ktoré nahradili starý jednotný konfiguračný súbor s kľúčom, obnovte alebo zlúčte súbor `data/config.json` s novou východiskovou štruktúrou z `src/config-defaults/config_default.json`, ak váš lokálny súbor stále používa odstránené polia (`api_key`, `api_url`, proxy nastavenia).

<br/>

**Autenentifikácia cez web:**

- Predvolený administrátor: `admin` / `transrewrt26`.
- Správa používateľov v **Nastavenia → Používatelia**.
- Reset hesla: `docker exec <kontajner> reset-web-password '<používateľ>' '<nové-heslo>'`
  (zo zdrojákov: `pnpm run reset-web-password -- <používateľ> <nové-heslo>`)

<br/>

> ⚠️ **UPOZORNENIE**<br/>
> Zmeňte predvolené administrátorské heslo okamžite na akejkoľvek sieti prístupnej službe.

<br/>

Hlavné nastavenia (písmo, modely, jazyky atď.) sú dostupné v Nastaveniach aplikácie.

<br/><br/>

<a id="development-and-architecture"></a>

## Vývoj a architektúra

- **Vývoj:** Nastavenie, zostavenie, testovanie a nasadenie (Electron, Web, Docker) – pozrite si **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Prehľad architektúry a systému:** Štruktúra priečinkov, technológie a návrhové rozhodnutia – pozrite si **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Vydania a značky

- **Git značky** `v`* (napr. `v1.0.10`) spúšťajú [pracovný postup vydania](.github/workflows/release.yml). **GitHub Releases** zverejňujú inštalačný súbor pre Windows (`.exe`) a Linux AppImage súbory (**x64** a **arm64**).
- **Docker image** sú publikované na `ghcr.io/wsj-br/transrewrt`. Mená značiek obrazov zodpovedajú verzii Git (napr. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) a navyše `latest`. Viacrozhranová podpora: `linux/amd64` a `linux/arm64` (napr. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Príspevky

1. Skopírujte repozitár (fork).
2. Vytvorte vetvu pre funkciu: `git checkout -b feature/moja-funkcia`
3. Uložte zmeny s jasným komentárom.
4. Pushnite zmeny a otvorte Pull Request do vetvy `main`.

Dodržiavajte prosím existujúci štýl kódu a otestujte svoje zmeny v režimoch Electron aj Web pred odoslaním. Pokyny na zostavenie a testovanie nájdete v súbore [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Hlásenie chýb:** Otvorte problém na [GitHub](https://github.com/wsj-br/transrewrt/issues). Uveďte svoju platformu (Windows / Linux / Docker) a verziu aplikácie (zobrazená v dialógu O programe alebo na stránke vydania).

<br/><br/>

<a id="disclaimer"></a>
## Vyhlásenie

Názvy produktov a ikony patria ich vlastníkom a používajú sa výlučne na identifikačné účely. Tento softvér nie je spätý s žiadnou z uvedených značiek a nie je ich schválený.

<br/><br/>

<a id="license"></a>
## Licencia

Autorské právo © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)