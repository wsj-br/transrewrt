---
translated_at: "2026-03-29T01:56:24.841Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Toa"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Leseni: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Jukwaa">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Zana ya maandishi yenye nguvu ya AI: tafsiri kati ya lugha, andika upya kwa mitindo tofauti, na ubadilishe kwa vituo vya watumiaji — kwa kutumia muhimiliki wengi wa AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, na Ollama ya kiholela). Inaendesha kama programu ya kompyuta (Electron) au kama programu ya wavuti inayosimamiwa kibinafsi (Docker).

- **Tafsiri** — kati ya lugha nyingi kwa utambulisho otomatiki wa lugha ya chanzo
- **Andika upya** — sahihisha sarufi, hoja uzuri wa kuelewa, muundo wa rasmi/usio rasmi, fupisha, urefu, kihututi
- **Badilisha** — maneno maalum ya AI; unda na usimamie maneno, lugha ya chaguo la kipekee kwa kila moja
- **Historia** — orodha kali ya matendo yote ikiwemo maandishi ya pembeji na ya pato, kupata kiotomatiki na uwezo wa kutuma nje
- **Mitindo & gharama** — chagua mitindo kutoka kwa msamaha yeyote uliowekwa; dashibodi za gharama na matumizi zenye rekodi, muhtasari kulingana na mtindo/kazi/siku
- **UI** — kiolesura kilinganishi (zaidi ya 30 lugha, msaada wa kuandika kutoka kulia kushoto), fonti, ...
- **Hali ya wavuti** — msaada wa watumiaji wangi kwa ajili ya wabalozi
- **Daftari** — programu ya Electron kwa ajili ya Windows na Linux
- **Kusimamia binafsi** — picha ya Docker kwa ajili ya amd64 & arm64 (inayotayarishwa kwa Raspberry Pi)

Baada ya kusakinisha, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kwa mchoro kamili wa vipengele vyote.

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](translated-docs/READM

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Kumbusho kuhusu tafsiri za UI na ushauri:** Lugha zote za kuleta huduma zimeletwa kwa kutumia mitambo ya AI isipokuwa Kilingeredia (UK) kama asili; maneno yanaweza kuwa si sahihi au kuwa na makosa.

</small>

<br/>

<a id="screenshots"></a>

## Wachiziwa

**Kichagua Cha Lugha**

![Kichagua Cha Lugha](../images/screenshots/sw/language-selector.png)

**Tafsiri**

![Tafsiri](../images/screenshots/sw/translate.png)

**Badilisha - kiredakti cha ombi**

![Badilisha - kiredakti cha ombi](../images/screenshots/sw/transform-prompt-edit.png)

**Dashibodi**

![Muhtasari wa dashibodi — matumizi](../images/screenshots/sw/dashboard-summary.png)

**Historia**

![Historia](../images/screenshots/sw/history.png)

**Mipangilio - kuchagua mfano**

![Mipangilio - kuchagua mfano](../images/screenshots/sw/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Mechi ya Kurasa

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Kuanza haraka](#quick-start)
- [Sakinisha](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Kumweka saa ya eneo](#configuring-the-timezone)
- [Kupata ufunguo wa OpenRouter API](#getting-an-openrouter-api-key)
- [Uwekaji na mazingira](#configuration-and-environment)
- [Uundaji na ukumbi](#development-and-architecture)
- [Kuwasilisha tatizo](#reporting-issues)
- [Hitaji la kuondolewa dhima](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Kuanza haraka

**Docker (inkubwa kwa kutoa huduma chini yako mwenyewe)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Badilisha `sk-or-your-key` kwa ufunuo wako wa [OpenRouter API](https://openrouter.ai/keys) (au weka ufunuo wa mtoa mwingine; tazama [Uwekaji](#configuration-and-environment)). Fungua [http://localhost:5000](http://localhost:5000) na ubadilishe nenosiri la msimamizi chaguo-msingi kabla ya kufunua huduma hiyo.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Katika Docker, sifa za LLM ziwakilishwa kwa kuvuta mvira kama vile `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (si kwenye mkono wa wavuti). Kwenye kompyuta (Electron) hutayarisha ufunguo katika **Mipangilio → API**.

<br/>

**Windows**

Pakua `Transrewrt Setup x.y.z.exe` moja ya kishwa kutoka kwa [Toleo](https://github.com/wsj-br/transrewrt/releases), uinunue mteja, halafu uanze kwa kutumia menyu ya Start au badala ya desktop. Ingiza ufunguo wako wa API katika **Mipangilio → API**. Unahitaji kuweka angalau mtoa mmoja, OpenRouter ni wa kawaida kwa mirihi bila malipo.

<br/>

**Linux**

Pakua `.AppImage` kwa CPU yako kutoka kwa [Toleo](https://github.com/wsj-br/transrewrt/releases) (`x64` kwa vikompyuta vya kawaida, `arm64` kwa ARM nyingi ya vifaa, ikiwemo Raspberry Pi 4+), kisha:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ingiza ufunguo wako wa API katika **Mipangilio → API**. Unahitaji kuweka angalau mtoa mmoja, OpenRouter ni wa kawaida kwa mirihi bila malipo.

Kwenye Debian/Ubuntu unaweza hitaji kusakinisha vishirikishi vingine vya ziada kwanza:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Tazama [Sakinisho → Linux](#linux-electron) kwa maelezo.

<br/>

> ℹ️ **KUNOTOA**<br/>

> macOS haiwayepo kwa sasa. Transrewrt inapatikana kwa Windows, Linux, na Docker.

<br/>

Marufiki watumiaji, baada ya kupiga mpaka programu, tazama **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kuajifunza jinsi ya kutafsiri, kuandika upya, na kubadili maandishi, usimamizi wa maneno ya mchongo, na usanidi wa mitindo.

<br/><br/>

<a id="installation"></a>

## Uwekaji

<a id="windows-electron"></a>

### Windows (Electron)

- Pakua mafaili ya usanidi kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases).
- Amuru `.exe` na fuata maelekezo ya usanidi.
- Kwa marudio ya kwanza: anza programu kutoka menyu ya Start au shortcut ya ubao.

<br/>

> ℹ️ **KODHI**<br/>
> Windows inaweza kuonyesha onyesho kimoja la usalama (kawaida kwa programu zisizosainiwa/zisizo za kampuni kubwa):
>   - **Uwajibikaji wa Akaunti ya Mtumiaji (UAC)**: "Je, ungependa kuruhusu programu hii kutoka kwa mwandishi ambaye si ajabu aifanye mabadiliko kwenye kifaa chako?" → Bonyeza **Ndio**.
>   - **Microsoft Defender SmartScreen**: "Windows imeulinda kompyuta yako" → Bonyeza **Maelezo zaidi** → **Amuru bila shaka**.
>
> Hii inatokea kwa sababu programu haijasainiwa na Microsoft au mwandishi mkuu — ni salama kama umuipakua kutoka kwenye matoleo rasmi yetu ya GitHub
> (thibitisha thamani ya SHA256 iliyopewa chini).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Pakua `.AppImage` inayofaa (`x64` au `arm64`) kutoka [Toleo](https://github.com/wsj-br/transrewrt/releases).
- Endesha: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` kwenye x86_64/amd64, au tumia jina la faili `...-arm64.AppImage` kwenye ARM64.
- Vihamisho vya ziada (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Angalia [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kwa maelezo zaidi.

<br/>

<a id="docker"></a>

### Docker

- Pakua: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Weka bango ufunguo mmoja au zaidi wa mtoa kupitia mazingira (kama anwani `OPENROUTER_API_KEY` kwa ajili ya OpenRouter). Wasilisha niamba kwa kutilia `-e` au `docker compose` / `.env` ili siri zisibakie kwenye picha.
- Ufunguo wa mtoa **hauwezi** kuwekwa kwenye kiolesura cha wavuti; server unausoma kutoka kwa mazingira.

Mfano - kiasi chenye jina cha mara kwa mara (ufunguo wa OpenRouter kwa kutumia mazingira):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

au ikiwa unapendelea kutumia Docker Compose, tumia:

```
# pata faili ya compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# hariri faili ili uongeze API_KEYS na urekebisheni saa (TZ)
vi transrewrt.yml
# anza container
docker compose -f transrewrt.yml up -d

Angalia [Ufaguzi](#configuration-and-environment) kwa kutofautisha mazingira yote, kama vile `PORT`, `CONFIG_PATH`, `TZ`, na vitufe vya LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Kusanidi u saa eneo

Tarehe na saa za kuingia kwenye programu zinazoshikana na alama na saa eneo la **kivinjari**. Kwa ajili ya tabia ya **upande wa seva** (kutangaza na zingine), kikabati hutumia mfumo wa mazingira ya `TZ`. Chaguo-msingi ni `TZ=Europe/London`.

Ikiwa unataka kutumia saa eneo tofauti, weka `TZ` katika faili yako ya Compose, kama hii:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Au usipatie ukitumia kikabati (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Katika mitaa mingi ya Linux, unaweza nakili majina ya saa ya mfumo kwa kutumia:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Orodha ya majina sahihi ya saa eneo inahifadhiwa kwenye [bazeti ya tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Kupata Kitufe cha OpenRouter API

Transrewrt kinatumia mtoa wengi wa AI. [OpenRouter](https://openrouter.ai) ni chaguo maarufu kwa sababu hununua mifumo mbalimbali kwa kutumia kitufe kimoja na inatoa mifumo ya bure.

1. Sasisha akaunti yako au ingia kwenye [openrouter.ai](https://openrouter.ai).
2. Fungua ukurasa wa [Vifunguo](https://openrouter.ai/keys) na unda ufunguo mpya (jipa jina, na si lazima uweka kikomo cha sarakata). Unaweza kutumia mifumo ya bure bila kuongeza sarakata.
3. **Kivinjari (Electron):** weka vifunguo kwenye **Mipangilio → API**. **Docker:** weka kivinjari kama vile `OPENROUTER_API_KEY` (tazama [Kuanzia Haraka](#quick-start)).

Usitumie mfumo wa OpenRouter wa **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kwa kutafsiri, kuandika upya, au kubadilisha: unarudisha data ya maombi ya JSON, si maandishi yaliyotimia kwa kazi hizo. Angalia [Mipangilio → Mifumo](USER-GUIDE.sw.md#models) kwenye Mwongozo wa Mtumiaji.

Unaweza pia kutumia mfanyakikazi mwingine (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) au kusimamia modeli vya ndani kwa kutumia [Ollama](https://ollama.com). Angalia [Usanidi](#configuration-and-environment) kwa orodha kamili ya watoaji wa kusaidiwa na kutofautiana kwa mazingira.

> ⚠️ **ONDOA**<br/>
> Ikiwa unatumia Ollama kutoka kifaa kingine, behewa, au huduma, kumbuka ukisaidie Ollama kuleta muunganisho mbalimbali (sio localhost pekee).

Kwa mipaka, BYOK, na zaidi, tazama usanidi wa [OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Usanifishaji na mazingira

**Mahali pa faili ya usanifishaji**

| Usimamizi | Mahali pa Ufunguo |
| -------- | ---------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (tumia kiasi cha kudumu) |

<br/>

**Variable za mazingira** (wa wavuti/Docker tu; Electron hutumia faili ya uwekezaji wa kijiji)

| Kigezo         | Chaguo-msingi                 | Maelezo |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Lango la kusikiliza kwa seva |
| `CONFIG_PATH`    | `/app/data/config.json` | Njia ya faili ya usanidi |
| `TZ`             | `Europe/London`         | Zona ya wakati wa IANA kwa wakati upande wa seva (kujikumbusha, n.k.); UI bado inafuata kivinjari. Angalia [Docker → zona ya wakati](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(hakuna)*               | Bango la OpenRouter API |
| `OPENAI_API_KEY`     | *(hakuna)*               | Bango la OpenAI API |
| `CEREBRAS_API_KEY`   | *(hakuna)*               | Bango la Cerebras API |
| `ANTHROPIC_API_KEY`  | *(hakuna)*               | Bango la Anthropic API |
| `GOOGLE_API_KEY`     | *(hakuna)*               | Bango la Google Gemini API |
| `DEEPSEEK_API_KEY`   | *(hakuna)*               | Bango la DeepSeek API |
| `GROQ_API_KEY`       | *(hakuna)*               | Bango la Groq API |
| `MISTRAL_API_KEY`    | *(hakuna)*               | Bango la Mistral API |
| `OLLAMA_URL`     | *(hakuna)*               | URL ya msingi wa Ollama (k.m. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(hakuna)*               | Bango la xAI API |

Wafanyakazi tu wale unaowatumia. Vitambulisho vya modeli vina nafasi (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, nk).

**Onyesho la gharama:** OpenRouter hurudisha gharama kamili iliyotakzwa ikiwa inahusiana. Wafanyakazi wengine hutumia **gharama imekadirika** kutoka kwa bei ya modeli ya OpenRouter ikiwa ufunguo wa OpenRouter unapatikana; bila yake, gharama isiyo ya OpenRouter inaweza kuonekana kama `0`. Makadirio hayatakiwi kama anwani.

<br/>

**Data na kudumu:** Kwa Docker, fungua kikundi cha `/app/data` kuhakikisha `config.json` na hifadhidata ya SQLite ipatikane baada ya kuanzisha upya kikombo. Bila kikundi, data yote inapotea wakati cha kugawanyika kikombo.

**Wanachama:** Baada ya kupata mabadiliko ambayo yanabadilisha mpangilio mmoja wa ufunuo wa zamani, weka upya au uunganishe `data/config.json` na mfano jipya kutoka `src/config-defaults/config_default.json` ikiwa faili lako bado linatumia kipengele kikichukuliwa (`api_key`, `api_url`, chaguo la proxy).

<br/>

**Uthibitishaji wa wavuti:**

- Msimamizi wa msingi: `admin` / `transrewrt26`.
- Dhibiti watumiaji katika **Mipangilio → Watumiaji**.

- Weka upya sanduku la siri: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (kutoka kwa chanzo: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ONYOBA**<br/>
> Badilisha mara moja sanduku la siri la msimamizi kwa uwezo wowote unaowezesha mtandao.

<br/>

Mipangilio muhimu (fonti, moduli, lugha, n.k.) yanapatikana katika Sehemu za Programu.

<br/><br/>

<a id="development-and-architecture"></a>

## Utengenezaji na kipekee

- **Utengenezaji:** Wekani, jengeza, jaribu, na wasilisha (Electron, Web, Docker) - tazama **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Kipekee na muhtasari wa mfumo:** Mienendo ya folda, kitanda cha teknolojia, maamuzi ya uundaji - tazama **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Kutoa matatizo

Fungua tatizo kwenye [GitHub](https://github.com/wsj-br/transrewrt/issues). Jiandikishe jukwaa lako (Windows / Linux / Docker) na toleo la programu (linalooneshwa katika sehemu ya Kuhusu au kwenye ukurasa wa Matoleo).

<br/><br/>

<a id="disclaimer"></a>

## Tahadhari

Majina na alama za bidhaa ni mali ya maombi yao na hutumiwa tu kwa ajili ya utambulisho. Programu hii haifadhiwi wala haikubaliiwa na chanzo chochote kilichoainishwa.

<br/><br/>

<a id="license"></a>

## Leseni

Copyright © 2026 Waldemar Scudeller Jr.

[Leseni ya Apache 2.0](LICENSE)