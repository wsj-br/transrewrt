---
translated_at: "2026-03-24T03:27:15.050Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Verzia"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licencia: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Nástroj na spracovanie textu s využitím umelej inteligencie: preklad medzi jazykmi, prepis textu v rôznych štýloch a transformácia pomocou vlastných pokynov – využíva viacero poskytovateľov umelej inteligencie (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a lokálne Ollama). Funguje ako desktopová aplikácia (Electron) alebo ako webová aplikácia hostovaná vlastnými silami (Docker).

- **Prekladanie** – medzi desiatkami jazykov vrátane automatického zisťovania výchozieho jazyka
- **Prepisovanie** – oprava gramatiky, zlepšenie prehľadnosti, formálny/neformálny štýl, skracovanie, rozširovanie, technický štýl
- **Transformácia** – vlastné pokyny pre AI; vytváranie a spravovanie pokynov, voliteľný cieľový jazyk pre každý pokyn
- **História** – kompletná história všetkých vykonaní vrátane vstupného a výstupného textu, filtrovanie a export
- **Modely a náklady** – výber modelov od akéhokoľvek nakonfigurovaného poskytovateľa; panel nákladov s denníkom v SQLite, súhrny podľa modelu/operácie/dňa
- **Používateľské rozhranie** – viacjazyčné rozhranie (30+ jazykov, podpora RTL), písma, ...
- **Webový režim** – podpora viacerých používateľov s roľami administrátora; kľúče API zostávajú na strane servera, nikdy sa nezverejňujú v prehliadači
- **Desktop** – Electron aplikácia pre Windows a Linux
- **Hostované vlastnými silami** – Docker obraz pre amd64 a arm64 (pripravené na Raspberry Pi)

Po inštalácii si pozrite **[Príručku používateľa](USER-GUIDE.sk.md)**, kde nájdete podrobný prehľad všetkých funkcií.

<small>**Prečítajte si v iných jazykoch:** [English (UK)](README.sk.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>



<br/>

**Poznámka k prekladom používateľského rozhrania a dokumentácie:** Všetky používateľské jazyky okrem angličtiny (UK) boli preložené pomocou modelov umelej inteligencie; slovné formulácie môžu byť nepresné alebo obsahovať chyby.



<a id="screenshots"></a>
## Snímky obrazovky

**Výber jazyka**

![Výber jazyka](../images/screenshots/sk/language-selector.png)

**Prekladanie**

![Prekladanie](../images/screenshots/sk/translate.png)

**Transformácia – editor pokynov**

![Transformácia – editor pokynov](../images/screenshots/sk/transform-prompt-edit.png)

**Pracovný panel**

![Panel nákladov](../images/screenshots/sk/dashboard-summary.png)

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
- [Inštalácia](#inštalácia)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Získanie OpenRouter API kľúča](#získanie-openrouter-api-kľúča)
- [Konfigurácia a prostredie](#konfigurácia-a-prostredie)
- [Vývoj a architektúra](#vývoj-a-architektúra)
- [Vydania a značky](#vydania-a-značky)
- [Prispievanie](#prispievanie)
- [Odmietnutie zodpovednosti](#odmietnutie-zodpovednosti)
- [Licencia](#licencia)

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

Nahraďte `sk-or-your-key` svojím [OpenRouter API kľúčom](https://openrouter.ai/keys) (alebo nastavte kľúče iných poskytovateľov; pozri [Konfigurácia](#konfigurácia-a-prostredie)). Otvorte [http://localhost:5000](http://localhost:5000) a pred vystavením služby zmeňte predvolené heslo administrátora.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> V Dockeri sa prihlasovacie údaje LLM nastavujú pomocou premenných prostredia, ako napr. `OPENROUTER_KEY`, `OPENAI_KEY`, … (nie cez webové rozhranie). Na ploche (Electron) môžete kľúče konfigurovať v časti **Nastavenia → API**.

<br/>

**Windows**

Stiahnite najnovší súbor `Transrewrt Setup x.y.z.exe` z časti [Vydania](https://github.com/wsj-br/transrewrt/releases), spustite inštalátor a potom spustite aplikáciu z ponuky Štart alebo cez ikonu na pracovnej ploche. Zadajte svoje API kľúče v časti **Nastavenia → API**. Musíte nakonfigurovať aspoň jedného poskytovateľa, OpenRouter je často využívaný kvôli bezplatným modelom.

<br/>

**Linux**

Stiahnite súbor `.AppImage` z časti [Vydania](https://github.com/wsj-br/transrewrt/releases), potom:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Zadajte svoje API kľúče v časti **Nastavenia → API**. Musíte nakonfigurovať aspoň jedného poskytovateľa, OpenRouter je často využívaný kvôli bezplatným modelom.

Na Debiane/Ubunte si môžete najskôr potrebovať nainštalovať dodatočné závislosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Podrobnosti nájdete v časti [Inštalácia → Linux](#linux-electron).

<br/>

> ℹ️ **POZNÁMKA**<br/>
> macOS momentálne nie je podporovaný. Transrewrt je dostupný pre Windows, Linux a Docker.

<br/>

Po spustení aplikácie si prečítajte časť **[Používateľská príručka](USER-GUIDE.sk.md)**, kde sa dozviete, ako prekladať, prepisovať a transformovať text, spravovať vstupy a konfigurovať modely.

<br/><br/>

<a id="inštalácia"></a>
## Inštalácia

<a id="windows-electron"></a>
### Windows (Electron)

- Stiahnite najnovší inštalátor z časti [Vydania](https://github.com/wsj-br/transrewrt/releases).
- Spustite súbor `.exe` a postupujte podľa pokynov inštalátora.
- Pri prvom spustení: spustite aplikáciu z ponuky Štart alebo cez odkaz na pracovnej ploche.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Stiahnite súbor `.AppImage` z časti [Vydania](https://github.com/wsj-br/transrewrt/releases).
- Spustite: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Dodatočné závislosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Ďalšie informácie nájdete v súbore [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Stiahnutie: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Nastavte aspoň jeden kľúč poskytovateľa cez premenné prostredia (napr. `OPENROUTER_KEY` pre OpenRouter). Premenné odovzdajte pomocou `-e` alebo `docker compose` / `.env`, aby sa tajomstvá nezapájali do obrazu.
- API kľúče sa **neuvádzajú** v webovom rozhraní; server ich číta z prostredia.

Príklad – pomenovaný zväzok pre trvalosť dát (kľúč OpenRouter cez premennú prostredia):

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
| Port     | `5000` (namapujte pomocou `-p 5000:5000`)                                                                              |
| Zväzok   | Pripojte `/app/data` pre trvalosť konfigurácie a databázy                                                         |
| Premenné prostredia | `PORT`, `CONFIG_PATH`, navyše kľúče LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - pozri [Konfigurácia](#konfigurácia-a-prostredie) |

Zdrojový kód môžete zostaviť a spustiť: `docker compose up --build -d` alebo `pnpm docker:up` - pozri [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="získanie-openrouter-api-kľúča"></a>

## Získanie API kľúča od OpenRouter

Transrewrt podporuje viacero poskytovateľov umelej inteligencie. [OpenRouter](https://openrouter.ai) je obľúbenou voľbou, pretože agreguje veľa modelov pod jedným kľúčom a ponúka bezplatné modely.

1. Zaregistrujte sa alebo sa prihláste na [openrouter.ai](https://openrouter.ai).
2. Otvorte stránku [Keys](https://openrouter.ai/keys) a vytvorte nový kľúč (pomenujte ho a voliteľne nastavte limit kreditu). Môžete používať bezplatné modely bez pridania kreditu.
3. **Desktop (Electron):** vložte kľúče do **Nastavenia → API**. **Docker:** nastavte premenné prostredia ako napr. `OPENROUTER_KEY` (pozri [Rýchly štart](#quick-start)).

Môžete tiež používať iných poskytovateľov (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) alebo spúšťať modely lokálne pomocou [Ollama](https://ollama.com). Úplný zoznam podporovaných poskytovateľov a premenných prostredia nájdete v časti [Konfigurácia](#configuration-and-environment).

Informácie o limitoch, BYOK a ďalších funkciách nájdete v dokumentácii [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurácia a prostredie

**Umiestnenie konfiguračných súborov**

| Nasadenie          | Umiestnenie konfigurácie                        |
| ------------------ | ---------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                        |
| Electron (Linux)   | `~/.config/transrewrt/`                        |
| Web / Docker       | `/app/data/config.json` (použite zväzok na zachovanie) |

<br/>

**Premenné prostredia** (iba pre web/Docker; Electron používa lokálny konfiguračný súbor)

| Premenná           | Predvolené               | Popis |
| ------------------ | ------------------------ | ----- |
| `PORT`             | `5000`                   | Port, na ktorom počúva server |
| `CONFIG_PATH`      | `/app/data/config.json`  | Cesta ku konfiguračnému súboru |
| `OPENROUTER_KEY`   | *(prázdne)*              | API kľúč OpenRouter |
| `OPENAI_KEY`       | *(prázdne)*              | API kľúč OpenAI |
| `ANTHROPIC_KEY`    | *(prázdne)*              | API kľúč Anthropic |
| `GOOGLE_KEY`       | *(prázdne)*              | API kľúč Google Gemini |
| `DEEPSEEK_KEY`     | *(prázdne)*              | API kľúč DeepSeek |
| `GROQ_KEY`         | *(prázdne)*              | API kľúč Groq |
| `MISTRAL_KEY`      | *(prázdne)*              | API kľúč Mistral |
| `OLLAMA_URL`       | *(prázdne)*              | Základná URL Ollamy (napr. `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(prázdne)*              | API kľúč xAI |

Konfigurujte len tých poskytovateľov, ktorých používate. ID modelov sú priestorovo rozdelené (`openrouter/…`, `openai/…`, `ollama/…`, atď.).

**Zobrazenie nákladov:** OpenRouter vracia presnú fakturovanú sumu, keď je to možné. Ostatní poskytovatelia používajú **odhadované** náklady z verejných cien modelov OpenRouter, ak je k dispozícii OpenRouter kľúč; bez neho môžu byť náklady pre ne-OpenRouter zobrazené ako `0`. Odhady nie sú faktúry.

<br/>

**Dáta a trvalosť:** Pre Docker pripojte zväzok do `/app/data`, aby `config.json` a databáza SQLite prežili reštartovanie kontajnera. Bez pripojeného zväzku sa všetky dáta strácajú po zastavení kontajnera.

**Vývojári:** Po aktualizácii, ktorá nahrádza starú konfiguráciu s jedným kľúčom, ak váš lokálny súbor stále používa odstránené polia (`api_key`, `api_url`, možnosti proxy), obnovte alebo zlúčte `data/config.json` s novým predvoleným tvarom z `src/config-defaults/config_default.json`.

<br/>

**Overenie pre web:**

- Predvolený admin: `admin` / `transrewrt26`.
- Spravujte používateľov v **Nastavenia → Používatelia**.
- Obnovenie hesla: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (zo zdrojov: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UPOZORNENIE**<br/>
> Okamžite zmeňte predvolené heslo pre administrátora na ľubovoľnom systéme prístupnom cez sieť.

<br/>

Základné nastavenia (písmo, modely, jazyky atď.) sú k dispozícii v nastaveniach aplikácie.

<br/><br/>

<a id="development-and-architecture"></a>
## Vývoj a architektúra

- **Vývoj:** Nastavenie, zostavenie, testovanie a nasadenie (Electron, Web, Docker) – pozri **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Prehľad architektúry a systému:** Štruktúra priečinkov, technologický stack, návrhové rozhodnutia – pozri **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Vydania a značky

- **Git značky** `v`* (napr. `v1.0.10`) spúšťajú pracovný postup [vydania](.github/workflows/release.yml). **Vydania na GitHub-e** obsahujú inštalátor pre Windows (`.exe`) a Linux AppImage.
- **Docker obrazy** sú publikované na `ghcr.io/wsj-br/transrewrt`. Značky obrazov zodpovedajú verzii Git (napr. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) a navyše značka `latest`. Viacarchitektonická podpora: `linux/amd64` a `linux/arm64` (napr. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Príspevky

1. Vytvorte si vlastnú vetvu úložiska (fork).
2. Vytvorte vetvu funkcie: `git checkout -b feature/moja-funkcia`
3. Uložte zmeny s jasným komentárom.
4. Nahraté zmeny a otvorte žiadosť o zlúčenie (Pull Request) do vetvy `main`.

Dodržiavajte prosím existujúci štýl kódu a otestujte svoje zmeny v režime Electron aj v webovom režime pred odoslaním. Inštrukcie na zostavenie a testovanie nájdete v súbore [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Hlásenie problémov:** Otvorte problém na [GitHub](https://github.com/wsj-br/transrewrt/issues). Uveďte vašu platformu (Windows / Linux / Docker) a verziu aplikácie (zobrazenú v dialógu O programe alebo na stránke vydania).

<br/><br/>

<a id="disclaimer"></a>
## Upozornenie

Názvy produktov a ikony patria ich príslušným vlastníkom a sú použité výlučne na identifikačné účely. Tento softvér nie je prepojený s uvedenými značkami ani nezískal ich schválenie.

<br/><br/>

<a id="license"></a>
## Licencia

Autorské práva © 2026 Waldemar Scudeller Jr.

[Apache Licencia 2.0](LICENSE)