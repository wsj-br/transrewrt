---
translated_at: "2026-03-29T01:56:14.637Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Verzia"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licencia: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Nástroj pre text s využitím umelej inteligencie: preklad medzi jazykmi, prepis v rôznych štýloch a úpravy pomocou vlastných príkazov – pomocou viacerých poskytovateľov AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a lokálneho Ollama). Môže bežať ako desktopová aplikácia (Electron) alebo ako samostatne hostovaná webová aplikácia (Docker).

- **Preklad** — medzi desiatkami jazykov, s automatickou detekciou zdrojového jazyka
- **Preformulovanie** — oprava gramatiky, zlepšenie jasnosti, formálny/neformálny štýl, skracovanie, rozširovanie, technický obsah
- **Transformácia** — vlastné AI výzvy; vytváranie a správa výziev, voliteľný cieľový jazyk pre každú výzvu
- **História** — kompletná história spustení vrátane vstupného a výstupného textu, filtrovanie a export
- **Modely a náklady** — výber modelov od akéhokoľvek nakonfigurovaného poskytovateľa; nákladové a využitie prehľady s logmi, súhrnmi podľa modelu/operácie/dňa
- **UI** — viacjazyčné rozhranie (30+ jazykov, podpora RTL), písma, ...
- **Webový režim** — podpora pre viacerých používateľov s administrátorskými rolami
- **Desktop** — Electron aplikácia pre Windows a Linux
- **Hostované na vlastnom serveri** — Docker obraz pre amd64 a arm64 (pripravené na Raspberry Pi)

Po inštalácii si prečítajte **[Návod pre používateľa](USER-GUIDE.sk.md)**, ktorý vám podrobne predstaví všetky funkcie.

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Svenska](README.sv.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md) · [中文 (香港)](README.zh-HK.md)</small>

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Poznámka k prekladom používateľského rozhrania a dokumentácie:** Všetky jazyky rozhrania okrem pôvodného angličtiny (UK)
> boli preložené pomocou AI modelov; formulácie môžu byť nepresné alebo obsahovať chyby.

</small>

<br/>

<a id="screenshots"></a>

## Snímky obrazovky

**Výber jazyka**

![Výber jazyka](../images/screenshots/sk/language-selector.png)

**Preložiť**

![Preložiť](../images/screenshots/sk/translate.png)

**Transformovať – editor výzvy**

![Transformovať – editor výzvy](../images/screenshots/sk/transform-prompt-edit.png)

**Hlavný panel**

![Hlavný panel – zhrnutie využitia](../images/screenshots/sk/dashboard-summary.png)

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
  - [Nastavenie časovej zóny](#configuring-the-timezone)
- [Získanie OpenRouter API kľúča](#getting-an-openrouter-api-key)
- [Konfigurácia a prostredie](#configuration-and-environment)
- [Vývoj a architektúra](#development-and-architecture)
- [Hlásenie chýb](#reporting-issues)
- [Odmietnutie zodpovednosti](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Rýchly štart

**Docker (odporúča sa pre samoobslužné hostovanie)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `sk-or-your-key` svojím [API kľúčom OpenRouter](https://openrouter.ai/keys) (alebo nastavte kľúče iných poskytovateľov; pozri [Nastavenie a prostredie](#configuration-and-environment)). Otvorte [http://localhost:5000](http://localhost:5000) a pred zverejnením služby zmeňte predvolené heslo pre správcu.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> V Dockeri sa poverenia pre LLM nastavujú prostredníctvom premenných prostredia ako `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nie cez webové rozhranie). Na desktopovej verzii (Electron) kľúče nastavujete v **Nastavenia → API**.

<br/>

**Windows**

Stiahnite najnovší súbor `Transrewrt Setup x.y.z.exe` z časti [Releases](https://github.com/wsj-br/transrewrt/releases), spustite inštalátor a potom spustite aplikáciu z ponuky Štart alebo prostredníctvom zástupcu na ploche. Zadajte svoje API kľúče v sekcii **Nastavenia → API**. Musíte nakonfigurovať aspoň jedného poskytovateľa, OpenRouter je často používaný pre bezplatné modely.

<br/>

**Linux**

Stiahnite súbor `.AppImage` pre svoj procesor z časti [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` pre bežné počítače, `arm64` pre mnohé zariadenia ARM vrátane Raspberry Pi 4+), potom:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadajte svoje API kľúče v sekcii **Nastavenia → API**. Musíte nakonfigurovať aspoň jedného poskytovateľa, OpenRouter je často používaný pre bezplatné modely.

V distribúciách Debian/Ubuntu môže byť potrebné najskôr nainštalovať dodatočné závislosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Podrobnosti nájdete v časti [Inštalácia → Linux](#linux-electron).

<br/>

> ℹ️ **Poznámka**<br/>

> macOS nie je momentálne podporovaný. Transrewrt je dostupný pre Windows, Linux a Docker.

<br/>

Keď je aplikácia spustená, pozrite si **[Užívateľskú príručku](USER-GUIDE.sk.md)**, kde sa dozviete, ako prekladať, prepisovať a transformovať text, spravovať výzvy a konfigurovať modely.

<br/><br/>

<a id="installation"></a>

## Inštalácia

<a id="windows-electron"></a>

### Windows (Electron)

- Stiahnite si najnovší inštalátor z [verzií](https://github.com/wsj-br/transrewrt/releases).
- Spustite súbor `.exe` a postupujte podľa pokynov inštalátora.
- Pri prvom spustení: spustite aplikáciu z ponuky Start alebo prostredníctvom ikony na pracovnej ploche.

<br/>

> ℹ️ **Poznámka**<br/>
> Windows môže zobraziť jedno z týchto upozornení na bezpečnosť (pre nezabalené alebo samostatne vyvíjané aplikácie je to bežné):
>   - **Kontrola účtu používateľa (UAC)**: „Chcete povoliť tejto aplikácii od neznámeho vydavateľa, aby vykonala zmeny na vašom zariadení?“ → Kliknite na **Áno**.
>   - **SmartScreen aplikácie Microsoft Defender**: „Windows ochránilo váš počítač“ → Kliknite na **Ďalšie informácie** → **Aj napriek tomu spustiť**.
>
> Toto sa objavuje preto, lebo aplikácia nie je podpísaná spoločnosťou Microsoft ani iným veľkým vydavateľom – je bezpečná, ak bola stiahnutá z našich oficiálnych verzií na GitHub-e
> (overte kontrolný súčet SHA256 uvedený nižšie).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Stiahnite si zodpovedajúci súbor `.AppImage` (`x64` alebo `arm64`) z [Releases](https://github.com/wsj-br/transrewrt/releases).
- Spustite: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, alebo použite súbor `...-arm64.AppImage` na ARM64.
- Dodatočné závislosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Viac informácií nájdete v [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>

### Docker

- Stiahnite si obrázok: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Nastavte aspoň jeden kľúč poskytovateľa prostredníctvom premenných prostredia (napríklad `OPENROUTER_API_KEY` pre OpenRouter). Premenné odovzdajte pomocou `-e` alebo cez `docker compose` / `.env`, aby sa tajomstvá neuložili do obrazu.
- Kľúče poskytovateľov sa **nepoužívajú** vo webovej aplikácii; server ich číta z prostredia.

Príklad – pomenovaný zväzok pre trvalosť (kľúč OpenRouter cez premenné prostredia):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

alebo ak uprednostňujete použitie Docker Compose, použite:

```bash
# stiahnite si súbor compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# upravte súbor, aby ste pridali API_KEY a upravili časové pásmo (TZ)
vi transrewrt.yml
# spustite kontajner
docker compose -f transrewrt.yml up -d

Pozrite si časť [Konfigurácia](#configuration-and-environment) pre všetky premenné prostredia, ako napríklad `PORT`, `CONFIG_PATH`, `TZ` a kľúče LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Konfigurácia časovej zóny

Dátum a čas v užívateľskom rozhraní aplikácie nasledujú **lokálnu časovú zónu** prehliadača. Pre **serverové** funkcie (napr. zaznamenávanie udalostí) kontajner používa premennú prostredia `TZ`. Štandardne je nastavená na `TZ=Europe/London`.

Ak chcete použiť inú časovú zónu, nastavte hodnotu `TZ` vo svojom súbore Compose, napríklad:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Alebo ju zadajte pri spustení kontajnera (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Na mnohých Linuxových systémoch môžete názov systémovej časovej zóny skopírovať príkazom:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Zoznam platných názvov časových zón je udržiavaný v [databáze tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipédia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Získanie API kľúča od OpenRouter

Transrewrt podporuje viacerých poskytovateľov umelej inteligencie. [OpenRouter](https://openrouter.ai) je obľúbenou voľbou, pretože agreguje veľa modelov pod jedným kľúčom a ponúka bezplatné modely.

1. Registrujte sa alebo sa prihláste na [openrouter.ai](https://openrouter.ai).
2. Otvorte stránku [Keys](https://openrouter.ai/keys) a vytvorte nový kľúč (pomenujte ho a voliteľne nastavte limit kreditu). Bez pridania kreditu môžete využívať bezplatné modely.
3. **Desktop (Electron):** vložte kľúče v časti **Nastavenia → API**. **Docker:** nastavte premenné prostredia, napríklad `OPENROUTER_API_KEY` (pozrite si časť [Rýchly štart](#quick-start)).

Neodporúča sa využívať OpenRouterov model **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) na preklad, prepisovanie alebo transformáciu: tento model vracia JSON dátové balíky požiadaviek, nie dokončený text pre tieto úlohy. Pozrite si časť [Nastavenia → Modely](USER-GUIDE.sk.md#models) v Používateľskom sprievodcovi.

Môžete použiť aj iné poskytovateľov (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) alebo spustiť modely lokálne pomocou [Ollama](https://ollama.com). Kompletný zoznam podporovaných poskytovateľov a premenných prostredia nájdete v časti [Konfigurácia](#configuration-and-environment).

> ⚠️ **UPOZORNENIE**<br/>
> Ak používate Ollamu z iného zariadenia, kontajnera alebo služby, nezabudnite Ollamu nakonfigurovať tak, aby umožnila externé pripojenia (nie iba lokálne).

Ďalšie informácie o obmedzeniach, BYOK a ďalších funkciách nájdete v časti [OpenRouter authenticácia](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfigurácia a prostredie

**Umiestnenie konfiguračných súborov**

| Nasadenie          | Umiestnenie konfigurácie                           |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (na ukladanie použite zväzok) |

<br/>

**Premenné prostredia** (iba pre webovú verziu/Docker; Electron používa lokálny konfiguračný súbor)

| Premenná           | Predvolené              | Popis |
| ------------------ | ----------------------- | ----- |
| `PORT`             | `5000`                  | Port, na ktorom počúva server |
| `CONFIG_PATH`      | `/app/data/config.json` | Cesta k súboru s konfiguráciou |
| `TZ`               | `Europe/London`         | IANA časové pásmo pre čas na strane servera (napr. zaznamenávanie udalostí); používateľské rozhranie stále sleduje čas vo webovom prehliadači. Viac informácií: [Docker → časové pásmo](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(prázdne)*             | API kľúč pre OpenRouter |
| `OPENAI_API_KEY`     | *(prázdne)*             | API kľúč pre OpenAI |
| `CEREBRAS_API_KEY`   | *(prázdne)*             | API kľúč pre Cerebras |
| `ANTHROPIC_API_KEY`  | *(prázdne)*             | API kľúč pre Anthropic |
| `GOOGLE_API_KEY`     | *(prázdne)*             | API kľúč pre Google Gemini |
| `DEEPSEEK_API_KEY`   | *(prázdne)*             | API kľúč pre DeepSeek |
| `GROQ_API_KEY`       | *(prázdne)*             | API kľúč pre Groq |
| `MISTRAL_API_KEY`    | *(prázdne)*             | API kľúč pre Mistral |
| `OLLAMA_URL`         | *(prázdne)*             | Základná URL adresa Ollamy (napr. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(prázdne)*             | API kľúč pre xAI |

Nakonfigurujte len poskytovateľov, ktorých používate. Identifikátory modelov sú rozdelené do menných priestorov (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, atď.).

**Zobrazenie nákladov:** OpenRouter vracia presné fakturované náklady, ak sú aplikovateľné. Ostatní poskytovatelia používajú **odhadované** náklady na základe verejného cenového súboru modelov OpenRouter, pokiaľ je dostupný kľúč OpenRouter; bez neho môžu byť náklady ne-OpenRouter zobrazené ako `0`. Odhady nie sú faktúry.

<br/>

**Údaje a trvalosť:** Pre Docker pripojte zväzok do zložky `/app/data`, aby sa `config.json` a databáza SQLite zachovali aj po reštarte kontajnera. Bez zväzku sa všetky údaje stratia po zastavení kontajnera.

**Vývojári:** Po stiahnutí zmien, ktoré nahrádzajú starú konfiguráciu s jedným kľúčom, obnovte alebo zlúčte `data/config.json` s novou predvolenou štruktúrou z `src/config-defaults/config_default.json`, ak vaš súbor ešte používa odstránené polia (`api_key`, `api_url`, proxy nastavenia).

<br/>

**Webové prihlasovanie:**

- Predvolený administrátor: `admin` / `transrewrt26`.
- Používateľov spravujte v **Nastavenia → Používatelia**.

- Obnovenie hesla: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (zo zdroja: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UPOZORNENIE**<br/>
> Okamžite zmeňte predvolené heslo pre administrátora na akomkoľvek zariadení prístupnom cez sieť.

<br/>

V nastaveniach aplikácie sú k dispozícii základné nastavenia (písmo, modely, jazyky atď.).

<br/><br/>

<a id="development-and-architecture"></a>

## Vývoj a architektúra

- **Vývoj:** Inštalácia, zostavenie, testovanie a nasadenie (Electron, Web, Docker) – pozrite si **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektúra a prehľad systému:** Štruktúra priečinkov, technologický stoh, rozhodnutia o návrhu – pozrite si **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Nahlásenie problémov

Otvorte problém na [GitHub](https://github.com/wsj-br/transrewrt/issues). Uveďte svoju platformu (Windows / Linux / Docker) a verziu aplikácie (uvedenú v dialógu O aplikácii alebo na stránke Vydania).

<br/><br/>

<a id="disclaimer"></a>

## Zrieknutie sa zodpovednosti

Názvy produktov a ikony patria ich príslušným vlastníkom a používajú sa výlučne na účely identifikácie. Tento softvér nie je prepojený ani schválený žiadnou z uvedených značiek.

<br/><br/>

<a id="license"></a>

## Licencia

Autorské práva © 2026 Waldemar Scudeller Jr.

[Apache licencia 2.0](LICENSE)