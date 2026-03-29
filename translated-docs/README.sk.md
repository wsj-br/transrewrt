---
translation_last_updated: '2026-03-29T20:53:42.886Z'
source_file_mtime: '2026-03-29T01:54:18.655Z'
source_file_hash: 27ed6c4cec02f5e6
translation_language: sk
source_file_path: README.md
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

Nástroj na spracovanie textu s využitím umelej inteligencie: preklad medzi jazykmi, prepis v rôznych štýloch a transformácia pomocou vlastných výziev – s využitím viacerých poskytovateľov umelej inteligencie (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a lokálny Ollama). Spustiteľný ako desktopová aplikácia (Electron) alebo ako samostatne hostovaná webová aplikácia (Docker).

- **Preložiť** — medzi desiatkami jazykov, s automatickým zisťovaním zdrojového jazyka
- **Prepísať** — opraviť gramatiku, zlepšiť zrozumiteľnosť, formálny/neformálny štýl, skrátiť, rozšíriť, technický štýl
- **Transformovať** — vlastné výzvy pre AI; vytváranie a správa výziev, voliteľný cieľový jazyk pre každú výzvu
- **História** — kompletná história vykonaní s vstupným/výstupným textom, filtrovanie a export
- **Modely a náklady** — výber modelov od akéhokoľvek nakonfigurovaného poskytovateľa; nástenky nákladov a využitia s denníkom, zhrnutiami podľa modelu/operácie/dňa
- **UI** — viacjazyčné rozhranie (30+ jazykov, podpora RTL), písma, ...
- **Webový režim** — podpora viacerých používateľov s rolami správcu
- **Desktop** — aplikácia Electron pre Windows a Linux
- **Samostatne hostované** — obraz Docker pre amd64 a arm64 (pripravené pre Raspberry Pi)

Po inštalácii si prečítajte **[Používateľskú príručku](USER-GUIDE.sk.md)**, ktorá obsahuje podrobný prehľad všetkých funkcií.

<small>**Prečítajte si v iných jazykoch:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Poznámka k prekladom rozhrania a dokumentácie:** Všetky jazyky rozhrania okrem pôvodnej angličtiny (VB)
> boli preložené pomocou modelov umelej inteligencie; slovné znenie môže byť nepresné alebo obsahovať chyby.

</small>

<br/>

<a id="screenshots"></a>
## Snímky obrazovky

**Výber jazyka**

![Language selector](../images/screenshots/sk/language-selector.png)

**Preložiť**

![Translate](../images/screenshots/sk/translate.png)

**Transformovať – editor výziev**

![Transform - prompt editor](../images/screenshots/sk/transform-prompt-edit.png)

**Nástenka**

![Dashboard summary — usage](../images/screenshots/sk/dashboard-summary.png)

**História**

![History](../images/screenshots/sk/history.png)

**Nastavenia – výber modelu**

![Settings - model selection](../images/screenshots/sk/settings-models.png)

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
  - [Nastavenie časového pásma](#configuring-the-timezone)
- [Získanie API kľúča OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurácia a prostredie](#configuration-and-environment)
- [Vývoj a architektúra](#development-and-architecture)
- [Hlásenie problémov](#reporting-issues)
- [Zrieknutie sa zodpovednosti](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Rýchly štart

**Docker (odporúčané pre samostatné hostovanie)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `sk-or-your-key` svojím [OpenRouter API kľúčom](https://openrouter.ai/keys) (alebo nastavte kľúče iných poskytovateľov; pozri [Konfigurácia](#configuration-and-environment)). Otvorte [http://localhost:5000](http://localhost:5000) a zmeňte predvolené heslo správcu pred tým, ako službu zverejníte.

<br/>

> ℹ️ **Poznámka**<br/>
> V Dockeri sa prihlasovacie údaje LLM nastavujú prostredníctvom premenných prostredia, ako napríklad `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nie cez webové rozhranie). Na desktopovej verzii (Electron) kľúče konfigurujete v **Nastavenia → API**.

<br/>

**Windows**

Stiahnite najnovší súbor `Transrewrt Setup x.y.z.exe` z časti [Releases](https://github.com/wsj-br/transrewrt/releases), spustite inštalátor a potom spustite aplikáciu z ponuky Štart alebo z odkazu na ploche. Zadajte svoje API kľúče v **Nastavenia → API**. Musíte nakonfigurovať aspoň jedného poskytovateľa, OpenRouter je bežný pre modely zadarmo.

<br/>

**Linux**

Stiahnite súbor `.AppImage` pre svoj procesor z časti [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` pre bežné počítače, `arm64` pre mnohé zariadenia ARM vrátane Raspberry Pi 4+), potom:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadajte svoje API kľúče v **Nastavenia → API**. Musíte nakonfigurovať aspoň jedného poskytovateľa, OpenRouter je bežný pre modely zadarmo.

V systémoch Debian/Ubuntu možno budete musieť najskôr nainštalovať dodatočné závislosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Podrobnosti nájdete v časti [Inštalácia → Linux](#linux-electron).

<br/>

> ℹ️ **Poznámka**<br/>
> macOS nie je momentálne podporovaný. Transrewrt je dostupný pre Windows, Linux a Docker.

<br/>

Keď je aplikácia spustená, pozrite si **[Používateľskú príručku](USER-GUIDE.sk.md)**, kde sa dozviete, ako prekladať, prepisovať a transformovať text, spravovať výzvy a konfigurovať modely.

<br/><br/>

<a id="installation"></a>
## Inštalácia

<a id="windows-electron"></a>
### Windows (Electron)

- Stiahnite najnovší inštalátor z [Releases](https://github.com/wsj-br/transrewrt/releases).
- Spustite súbor `.exe` a postupujte podľa inštalátora.
- Pri prvom spustení: spustite aplikáciu z ponuky Štart alebo z odkazu na ploche.

<br/>

> ℹ️ **Poznámka**<br/>
> Windows môže zobraziť jedno z týchto varovaní o bezpečnosti (bežné pre nepodpísané alebo nezávislé aplikácie):
>   - **Kontrola účtu používateľa (UAC)**: „Chcete povoliť tejto aplikácii od neznámeho vydavateľa, aby vykonala zmeny na vašom zariadení?“ → Kliknite na **Áno**.
>   - **Microsoft Defender SmartScreen**: „Windows ochránilo vaše PC“ → Kliknite na **Ďalšie informácie** → **Napriek tomu spustiť**.
>
> K tomu dochádza preto, lebo aplikácia nie je podpísaná spoločnosťou Microsoft ani veľkým vydavateľom – je bezpečná, ak bola stiahnutá z našich oficiálnych vydania na GitHub-e
>  (overte kontrolný súčet SHA256 uvedený nižšie).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Stiahnite si zodpovedajúci `.AppImage` (`x64` alebo `arm64`) zo sekcie [Releases](https://github.com/wsj-br/transrewrt/releases).
- Spustite: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, alebo použite súbor `...-arm64.AppImage` na ARM64.
- Dodatočné závislosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Viac informácií nájdete v [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Stiahnite obrázok: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Nastavte aspoň jeden kľúč poskytovateľa prostredníctvom premenných prostredia (napr. `OPENROUTER_API_KEY` pre OpenRouter). Premenné odovzdajte pomocou `-e` alebo cez `docker compose` / `.env`, aby sa tajomstvá nezapracovali do obrazu.
- Kľúče poskytovateľov sa **nezadávajú** v webovom rozhraní; server ich číta z premenných prostredia.

Príklad – pomenovaný zväzok pre trvalosť (kľúč OpenRouter cez premenné prostredia):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

alebo ak uprednostňujete Docker Compose, použite:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Zoznam všetkých premenných prostredia, ako napr. `PORT`, `CONFIG_PATH`, `TZ` a kľúče LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …), nájdete v časti [Konfigurácia](#configuration-and-environment).

<a id="configuring-the-timezone"></a>
### Konfigurácia časového pásma

Dátum a čas v užívateľskom rozhraní aplikácie nasledujú **prehliadačové** lokalizácie a časové pásmo. Pre **serverové** správanie (napr. logovanie) kontajner používa premennú prostredia `TZ`. Predvolená hodnota je `TZ=Europe/London`.

Ak chcete použiť iné časové pásmo, nastavte `TZ` vo vašom súbore Compose, napríklad:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Alebo ju odovzdajte pri spustení kontajnera (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Na mnohých Linuxových systémoch môžete názov systémového časového pásma skopírovať príkazom:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Zoznam platných názvov časových pásiem je udržiavaný v [tz databáze](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Získanie OpenRouter API kľúča

Transrewrt podporuje viacerých poskytovateľov umelej inteligencie. [OpenRouter](https://openrouter.ai) je obľúbenou voľbou, pretože agreguje množstvo modelov pod jedným kľúčom a ponúka aj modely zadarmo.

1. Zaregistrujte sa alebo sa prihláste na [openrouter.ai](https://openrouter.ai).
2. Otvorte stránku [Keys](https://openrouter.ai/keys) a vytvorte nový kľúč (pomenujte ho a voliteľne nastavte limit kreditu). Môžete používať modely zadarmo bez pridania kreditu.
3. **Desktop (Electron):** vložte kľúče do **Nastavenia → API**. **Docker:** nastavte premenné prostredia ako `OPENROUTER_API_KEY` (pozri [Rýchly štart](#quick-start)).

Nepoužívajte OpenRouterov model **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) na preklad, prepisovanie alebo transformáciu: tento model vracia iba JSON dátové balíky, nie hotový text pre tieto úlohy. Pozrite si [Nastavenia → Modely](USER-GUIDE.sk.md#models) v Používateľskej príručke.

Môžete tiež použiť iných poskytovateľov (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) alebo spúšťať modely lokálne pomocou [Ollama](https://ollama.com). Úplný zoznam podporovaných poskytovateľov a premenných prostredia nájdete v časti [Konfigurácia](#configuration-and-environment).

> ⚠️ **UPOZORNENIE**<br/>
> Ak používate Ollama z iného zariadenia, kontajnera alebo služby, nezabudnite nakonfigurovať Ollama tak, aby umožňoval externé pripojenia (nie iba localhost).

Pre limity, BYOK a ďalšie informácie pozrite [OpenRouter overenie totožnosti](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurácia a prostredie

**Umiestnenia konfiguračných súborov**

| Nasadenie         | Umiestnenie konfigurácie                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (použite zväzok na uchovanie) |

<br/>

**Premenné prostredia** (iba web/Docker; Electron používa lokálny konfiguračný súbor)

| Premenná         | Predvolené                 | Popis |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port, na ktorom počúva server |
| `CONFIG_PATH`    | `/app/data/config.json` | Cesta ku konfiguračnému súboru |
| `TZ`             | `Europe/London`         | IANA časové pásmo pre čas na strane servera (logovanie atď.); používateľské rozhranie stále nasleduje prehliadač. Pozri [Docker → časové pásmo](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(prázdne)*               | API kľúč OpenRouter |
| `OPENAI_API_KEY`     | *(prázdne)*               | API kľúč OpenAI |
| `CEREBRAS_API_KEY`   | *(prázdne)*               | API kľúč Cerebras |
| `ANTHROPIC_API_KEY`  | *(prázdne)*               | API kľúč Anthropic |
| `GOOGLE_API_KEY`     | *(prázdne)*               | API kľúč Google Gemini |
| `DEEPSEEK_API_KEY`   | *(prázdne)*               | API kľúč DeepSeek |
| `GROQ_API_KEY`       | *(prázdne)*               | API kľúč Groq |
| `MISTRAL_API_KEY`    | *(prázdne)*               | API kľúč Mistral |
| `OLLAMA_URL`     | *(prázdne)*               | Základné URL Ollamy (napr. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(prázdne)*               | API kľúč xAI |

Nakonfigurujte len poskytovateľov, ktorých používate. Identifikátory modelov sú menovane (napr. `openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, atď.).

**Zobrazenie nákladov:** OpenRouter vracia presné vyúčtované náklady, keď je to možné. Ostatní poskytovatelia používajú **odhadované** náklady z verejného cenníka modelov OpenRouter, ak je k dispozícii kľúč OpenRouter; bez neho môžu náklady pre ne-OpenRouter poskytovateľov zobraziť ako `0`. Odhady nie sú faktúrami.

<br/>

**Údaje a trvalosť:** Pre Docker pripojte zväzok do `/app/data`, aby sa `config.json` a databáza SQLite uchovávali aj po reštarte kontajnera. Bez zväzku sa všetky údaje stratia po zastavení kontajnera.

**Vývojári:** Po stiahnutí zmien, ktoré nahradzujú starú konfiguráciu s jedným kľúčom, obnovte alebo zlúčte `data/config.json` s novým predvoleným tvarom z `src/config-defaults/config_default.json`, ak váš lokálny súbor stále používa odstránené polia (`api_key`, `api_url`, proxy možnosti).

<br/>

**Overenie totožnosti na webe:**

- Predvolený správca: `admin` / `transrewrt26`.
- Správa používateľov v **Nastavenia → Používatelia**.
- Obnovenie hesla: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (zo zdrojového kódu: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UPOZORNENIE**<br/>
> Zmeňte okamžite predvolené heslo správcu na akomkoľvek hostiteľovi s prístupom k sieti.

<br/>

Kľúčové nastavenia (písmo, modely, jazyky atď.) sú k dispozícii v nastaveniach aplikácie.

<br/><br/>

<a id="development-and-architecture"></a>
## Vývoj a architektúra

- **Vývoj:** Nastavenie, zostavenie, testovanie a nasadenie (Electron, Web, Docker) – pozrite **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektúra a prehľad systému:** Štruktúra priečinkov, technologický zásobník, návrhové rozhodnutia – pozrite **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Hlásenie problémov

Otvorte problém na [GitHub](https://github.com/wsj-br/transrewrt/issues). Uveďte svoju platformu (Windows / Linux / Docker) a verziu aplikácie (uvedená v dialógu O aplikácii alebo na stránke Releases).

<br/><br/>

<a id="disclaimer"></a>
## Zrieknutie sa zodpovednosti

Názvy produktov a ikony patria ich príslušným vlastníkom a používajú sa výlučne na identifikačné účely. Tento softvér nie je spojený ani odporúčaný žiadnou z uvedených značiek.

<br/><br/>

<a id="license"></a>
## Licencia

Autorské práva © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)
