---
translated_at: "2026-03-27T23:15:22.454Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo la Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Toa"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Leseni: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Jukwaa">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Zana ya maandishi yenye uwezo wa AI: tafsiri kati ya lugha mbalimbali, andika upya kikamilifu, na ubadilishe kwa maagizo maalum — ukitumia tovuti nyingi za AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, na Ollama ya kawaida). Imeinuliwa kama programu ya kompyuta (Electron) au kama programu ya wavuti inayohifadhiwa na mtumiaji (Docker).

- **Tafsiri** — kati ya lugha kuna kumbe kila, na ustawi wa kiotomatiki wa lugha ya msingi
- **Andikisha upya** — sahihi sarufi, wezesha uwazi, wa rasmi/wa kawaida, fupisha, urefu, wa kisayansi
- **Badilisha** — maagizo ya AI yanayotolewa kibinafsi; unda na usimamie maagizo, lugha ya kuchukua kama moja kwa moja kwa kila maagizo
- **Historia** — historia kamili ya utekelezaji ikiwa na maandishi ya pembe juu na chini, uvunjaji, na uwezo wa kusafirisha
- **Mifumo na gharama** — chagua mifumo kutoka kwa mtoa fulani ambaye umeweka; dashibodi za gharama na matumizi pamoja na kumbukumbu, muhimu kwa kila mifumo/kitendo/siku
- **UI** — kuingiliana kibao cha lugha nyingi (zaidi ya 30, msaada wa kulia-kulia), fonti, ...
- **Hali ya wavuti** — msaada wa wanatumia wengi wenye vipaji vya usimamizi
- **Kikompyuta** — programu ya Electron kwa Windows na Linux
- **Inahifadhiwa na mtumiaji mwenyewe** — picha ya Docker kwa amd64 & arm64 (inayotayarika kwa Raspberry Pi)

Baada ya kuwekwa, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kwa muhtasari kamili wa vipengele vyote.

<small>**Soma kwa lugha nyingine:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Kurasa kuhusu tafsiri za UI na ujumbe:** Lugha zote za kuingiliana bila ya Kiingereza cha asili (UK)
> zimeanzishwa kwa kutumia mfumo wa AI; maneno yanaweza kuwa si sahihi au yaweza kuwa na makosa.

</small>

<br/>

<a id="screenshots"></a>

## Picha za skrini

**Kichagua lugha**

![Kichagua lugha](../images/screenshots/sw/language-selector.png)

**Tafsiri**

![Tafsiri](../images/screenshots/sw/translate.png)

**Badilisha - kuhariri mahojiano**

![Badilisha - kuhariri mahojiano](../images/screenshots/sw/transform-prompt-edit.png)

**Ubao wa uwakilishi**

![Ubao wa bei](../images/screenshots/sw/dashboard-summary.png)

**Historia**

![Historia](../images/screenshots/sw/history.png)

**Mipangilio - kuchagua mfumo**

![Mipangilio - kuchagua mfumo](../images/screenshots/sw/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Orodha ya Maudhui

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Anza haraka](#quick-start)
- [Sakinisha](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Pata ufunguo wa OpenRouter API](#getting-an-openrouter-api-key)
- [Upendeleo na mazingira](#configuration-and-environment)
- [Maendeleo na kipekee cha mfumo](#development-and-architecture)
- [Matoleo na kigezo](#releases-and-tags)
- [Jitoaji](#contributing)
- [Kukumbushwa](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Kuanza haraka

**Docker (inapatikana kwa ajili ya kusambaza binafsi)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Badilisha `sk-or-your-key` kwa [ufunguo wako wa OpenRouter API](https://openrouter.ai/keys) (au uweke ufunguo wa mtoa mwingine; angalia [Uwiano na Mazingira](#configuration-and-environment)). Fungua [http://localhost:5000](http://localhost:5000) na ubadilishe nenosiri la msimamizi chaguomsingi kabla ya kuwezesha huduma hiyo.

<br/>

> ℹ️ **TAARIFA**<br/>
> Katika Docker, vitambulisho vya LLM vinawekwa kwa kusaidia vigezo vya mazingira kama vile `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (sio katika UI ya wavuti). Kwenye kompyuta (Electron) unawezawezesha ufunguo kwenye **Mipangilio → API**.

<br/>

**Windows**

Pakua `Transrewrt Setup x.y.z.exe` ya hivi karibuni kutoka kwenye [Matoleo](https://github.com/wsj-br/transrewrt/releases), sajili, kisha anza kwenye menyu ya Start au kipashio cha desktop. Weka ufanisi wako wa API kwenye **Mipangilio → API**. Wanahitaji kuweza kusanidi mpangilio wa mtoa angalau mmoja, OpenRouter ni kawaida kwa vitengo vinavyopatikana kibure.

<br/>

**Linux**

Pakua `.AppImage` kwa ajili ya CPU yako kutoka kwenye [Matoleo](https://github.com/wsj-br/transrewrt/releases) (`x64` kwa kompyuta za kawaida, `arm64` kwa vifaa vingi vya ARM, ikiwemo Raspberry Pi 4+), kisha:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Weke ufanisi wako wa API kwenye **Mipangilio → API**. Wanahitaji kuweza kusanidi mpangilio wa mtoa angalau mmoja, OpenRouter ni kawaida kwa vitengo vinavyopatikana kibure.

Kwenye Debian/Ubuntu basi unahitaji kusakinisha zana mbalimbali kwanza:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Angalia [Uwekaji → Linux](#linux-electron) kwa maelezo zaidi.

<br/>

> ℹ️ **TAARIFA**<br/>
> macOS haijawezeshwaji kwa sasa. Transrewrt inapatikana kwa ajili ya Windows, Linux, na Docker.

<br/>

Baada ya programu kuanza kuendesha, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** ili ujifunze jinsi ya kutafsiri, kuandika upya, na kubadilisha maandishi, udhibiti wa maagizo, na kuweka vitengo.

<br/><br/>

<a id="installation"></a>

## Sakinisha

<a id="windows-electron"></a>
### Windows (Electron)

- Pakua mtumizi wa mpya mno kutoka [Machapisho](https://github.com/wsj-br/transrewrt/releases).
- Endesha `.exe` na fuata maagizo ya mtumizi.
- Kuanza kwa mara ya kwanza: anza programu kutoka menyu ya Kuanza au kwa kipashi cha desktope.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Pakua `.AppImage` inayofanana (`x64` au `arm64`) kutoka [Machapisho](https://github.com/wsj-br/transrewrt/releases).
- Endesha: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` kwa x86_64/amd64, au tumia jina la faili `...-arm64.AppImage` kwa ARM64.
- Zana zaidi (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Angalia [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kwa maelezo zaidi.

<br/>

<a id="docker"></a>
### Docker

- Pakua: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Weka angalau moja ya ufunguo wa mtoa kwa njia ya mazingira (kwa mfano, `OPENROUTER_API_KEY` kwa OpenRouter). Hamisha kigezo kwa kutumia `-e` au `docker compose` / `.env` ili siri isizimwe ndani ya picha.
- Ufunguo wa mtoa **hauingii** kwenye UI ya wavuti; seva unausoma kutoka kwenye mazingira.

Mfano - kiasi kilichopangwa kwa ajili ya kudumu (ufunguo wa OpenRouter kwa njia ya mazingira):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

au ikiwa unapenda kutumia Docker Compose, tumia:

# pakuza faili ya compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# hariri faili ili uongeze API_KEYS
vi transrewrt.yml
# anza kibao
docker compose -f transrewrt.yml up -d
```

<br/>

| Chaguo   | Maelezo                                                                                                                                 |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (ramba kwa `-p 5000:5000`)                                                                                                      |
| Volume   | Funga `/app/data` kwa ajili ya usimamizi wa config na kuwanyanya vyanzo vya data                                               |
| Env vars | `PORT`, `CONFIG_PATH`, pamoja na bango la LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - tazama [Usanidi](#configuration-and-environment) |

Ili jengi na uanzishe kwenye chanzo: `docker compose up --build -d` au `pnpm docker:up` - tazama [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Kupata ufunguo wa OpenRouter API

Transrewrt unampokea watoa wa AI wengi. [OpenRouter](https://openrouter.ai) ni chaguo maarufu kwa sababu unapunguza moduli mengi kwenye ufunguo mmoja na unatoa moduli ya bure.

1. Jiandikishe au ingia kwenye [openrouter.ai](https://openrouter.ai).
2. Fungua ukurasa wa [Ufunguo](https://openrouter.ai/keys) na unda ufunguo mpya (wapa jina, na kama uhitaji, weka kikomo cha mkopo). Unaweza kutumia moduli ya bure bila kuongeza mkopo.
3. **Kivinjari (Electron):** weka ufunguo kwenye **Mipangilio → API**. **Docker:** weka vipengele vya mazingira kama vile `OPENROUTER_API_KEY` (tazama [Kuanza Haraka](#quick-start)).

Usitumie mfumo wa OpenRouter **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kwa kutafsiri, kuandika upya, au kubadilisha: unarudisha vipengele vya ombi la JSON, si maandishi yaliyotimia kwa kazi hizo. Angalia [Mipangilio → Moduli](USER-GUIDE.sw.md#models) kwenye Mwongozi wa Mtumiaji.

Unaweza pia kutumia watoa wengine (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) au kuendesha moduli kibinafsi kwa kutumia [Ollama](https://ollama.com). Angalia [Upendeleo](#configuration-and-environment) kwa orodha kamili ya watoa waliopokelewa na vipengele vya mazingira.

> ⚠️ **ONDOA**<br/>
> Ikiwa unatumia Ollama kutoka kifaa kingine, chumba, au huduma, ukumbuke kuweka mpangilio wa Ollama kuidhinisha muunganisho wa nje (sio kwa localhost tu).


Kwa vikomo, BYOK, na zaidi, tazama [uthibitishaji wa OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Uwekezaji na mazingira

**Mahali pa faili ya uwekezaji**

| Usimamizi | Mahali pa uwekezaji |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (tumia kiasi cha kuhifadhi) |

<br/>

**Vigezo vya mazingira** (web/Docker tu; Electron hutumia faili ya uwekezaji wa kiongozi)

| Vigezo | Chaguo-msingi | Maelezo |
| ---------------- | ----------------------- | ----------- |
| `PORT` | `5000` | Lando la kusikiliza kwa seva |
| `CONFIG_PATH` | `/app/data/config.json` | Njia kwa faili ya uwekezaji |
| `OPENROUTER_API_KEY` | *(tupu)* | Kitufe cha API cha OpenRouter |
| `OPENAI_API_KEY` | *(tupu)* | Kitufe cha API cha OpenAI |
| `CEREBRAS_API_KEY` | *(tupu)* | Kitufe cha API cha Cerebras |
| `ANTHROPIC_API_KEY` | *(tupu)* | Kitufe cha API cha Anthropic |
| `GOOGLE_API_KEY` | *(tupu)* | Kitufe cha API cha Google Gemini |
| `DEEPSEEK_API_KEY` | *(tupu)* | Kitufe cha API cha DeepSeek |
| `GROQ_API_KEY` | *(tupu)* | Kitufe cha API cha Groq |
| `MISTRAL_API_KEY` | *(tupu)* | Kitufe cha API cha Mistral |
| `OLLAMA_URL` | *(tupu)* | URL ya msingi wa Ollama (mfano: `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(tupu)* | Kitufe cha API cha xAI |

Wekeza tu watoa ambao unawatumia. Vitambaa vya mfumo (model IDs) vina manebi (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, n.k.).

**Onesha gharama:** OpenRouter hurejesha gharama halisi ya malipo pale inapowezekana. Wawezeshaji wengine hutumia gharama **imekiria** kutoka kwa bei za wazi za OpenRouter pale kitufe cha OpenRouter kipokuwepo; bila kitufe hicho, gharama isiyo ya OpenRouter inaweza kuonekana kama `0`. Viwango hazilingani na anadi.

<br/>

**Data na uhifadhi:** Kwa Docker, weka kiasi cha kuhifadhi kwenye `/app/data` ili `config.json` na kitabu cha Punguzo cha SQLite kihifadhiwe kwenye kurudisha kwa jumba (container). Bila kiasi, data yote itapotea mara jumba linapozimwa.

**Wanaofanikiwa:** Baada ya kupata mabadiliko ambayo yanabadili uwekezaji wa ujumla wa kitufe, weka upya au uunganishe `data/config.json` ukifanya umbo mpya kutoka `src/config-defaults/config_default.json` ikiwa faili yako bado inatumia vigezo viliovumbazwa (`api_key`, `api_url`, chaguo za wavuti).

<br/>

**Uthibitishaji wa wavuti:**

- Msimamizi chaguo-msingi: `admin` / `transrewrt26`.
- Dhibiti watumiaji kwenye **Mipange → Watumiaji**.
- Weka upya siri: `docker exec <jumba> reset-web-password '<jina la mtumiaji>' '<siri mpya>'`
  (kutoka chanzo: `pnpm run reset-web-password -- <jina la mtumiaji> <siri mpya>`)

<br/>

> ⚠️ **ONYO**<br/>
> Badilisha siri ya msimamizi chaguo-msingi mara moja kwenye kipengee chochote cha mtandao kinachoweza kufikwa.

<br/>

Mipangilio muhimu (font, vitambaa, lugha, n.k.) yanapatikana kwenye Mipangilio ya programu.

<br/><br/>

<a id="development-and-architecture"></a>

## Maendeleo na usimamizi

- **Maendeleo:** Weka, jenga, jaribu, na uwasilishe (Electron, Web, Docker) - tazama **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Usimamizi na muhtasari wa mfumo:** Mbinu za folda, kiwango cha teknolojia, maamuzi ya ubunifu - tazama **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Matoleo na lebo

- **Lebo za Git** `v`* (kama vile `v1.0.10`) zinawaiita **[mchakato wa uchaguzi](.github/workflows/release.yml)**. **Matoleo ya GitHub** huambatana na kiolesura cha Windows (`.exe`) na vitambaa vya Linux AppImage (**x64** na **arm64**).
- **Picha za Docker** zinachapishwa kwa `ghcr.io/wsj-br/transrewrt`. Lebo za picha zinalingana na toleo la Git (kama vile `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) pamoja na `latest`. Aina mbalimbali: `linux/amd64` na `linux/arm64` (kama vile Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Kushirikia

1. Fanya nakala ya hifadhi.
2. Unda tawi la kipengele: `git checkout -b feature/my-feature`
3. Weka mabadiliko yako kwa ujumbe wazi.
4. Funika na wafungua Ombi la Kuvutia (Pull Request) dhidi ya `main`.

Tafadhali ufuatilie mtindo wa msimbo uliopo na ujaribu mabadiliko yako katika rejisti za Electron na web kabla ya kuwasilisha. Tazama [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kwa maelekezo ya kujenga na kujaribu.

<br/>

**Kuwasilisha matatizo:** Fungua tatizo kwenye [GitHub](https://github.com/wsj-br/transrewrt/issues). Jumuisha mfumo wako (Windows / Linux / Docker) na toleo la programu (linaloonekana katika dirisha la Kuhusu au kwenye ukurasa wa Matoleo).

<br/><br/>

<a id="disclaimer"></a>

## Toa Hatia

Jina na alama za bidhaa linamilikiwa na wamiliki wake kwa ajili ya utambulisho tu. Programu hii haifanyi kazi kama chumba cha akili na kumeshindwa kuheshimiwa na watu wowote ambao watu wanaotajwa kama watu wenye biashara.

<br/><br/>

<a id="license"></a>
## Leseni

Haki za kuleta © 2026 Waldemar Scudeller Jr.

[Leseni ya Apache 2.0](LICENSE)