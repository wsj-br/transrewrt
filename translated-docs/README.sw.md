---
translated_at: "2026-03-26T01:05:22.234Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo la Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Toleo"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Leseni: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Jukwaa">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Zana za maandishi yenye nguvu za AI: tafsiri kati ya lugha mbalimbali, andika upya kwa mandhari tofauti, na ubadilishe kwa kuelekeza kwa kiasi (prompts) cha watumiaji — kutumia mlete wa wakurasa wa AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, na Ollama mahali). Inatumika kama programu ya kompyuta (Electron) au programu ya wavuti inayohifadhiwa na mtu mmoja (Docker).

- **Tafsiri** — kati ya lugha kubwa, na ukaguzi otomatiki wa lugha ya awali
- **Andika upya** — sahihi sarufi, bonyeza ufahamu, ya rasmi/ya kawaida, fupisha, ondoa, ya kisayansi
- **Badilisha** — maagizo ya AI ya watumiaji; unda na usimamie maagizo, lugha ya mwisho si lazima kwa kila agizo
- **Historia** — historia kamili ya utekelezaji ikiwa ni pamoja na maandishi ya awali/ya mwisho, kuchuja, na kuhamisha nje
- **Vifaa & gharama** — chagua vifaa kutoka kikundi chochote kilichowekwa; dashibodi za gharama na matumizi pamoja na taarifa, muhtasari kwa kufuatia kifaa/kitendo/siku
- **UI** — kiolesura kinachohusiana (zaidi ya 30 lugha, msaada wa kirensha-kulia-kushoto)
- **Njia ya wavuti** — msaada wa watumiaji wengi kwa wakamili
- **Chombo cha sarafu** — programu ya Electron kwa Windows na Linux
- **Inahifadhimwa mahali** — picha ya Docker kwa amd64 & arm64 (inajirudiwa kwa Raspberry Pi)

Baada ya kuwekwa, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kwa mchoro wa kimsingi wa vipengele vyote.

<small>**Soma kwa lugha nyingine:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Kumbuka juu ya tafsiri za UI na nyaraka kikuhusiano:** Lugha zote za chombo bila ya kisasa cha Kingereza (UK)
> zimetafsiriwa kwa kutumia vifaa vya AI; maneno yanaweza kuwa ya pana au kuwa na makosa.

</small>

<br/>

<a id="screenshots"></a>
## Picha za skrini

**Kichaguzi cha lugha**

![Kichaguzi cha lugha](../images/screenshots/sw/language-selector.png)

**Tafsiri**

![Tafsiri](../images/screenshots/sw/translate.png)

**Badilisha - kihaririwa cha maagizo**

![Badilisha - kihaririwa cha maagizo](../images/screenshots/sw/transform-prompt-edit.png)

**Dashibodi**

![Dashibodi ya gharama](../images/screenshots/sw/dashboard-summary.png)

**Historia**

![Historia](../images/screenshots/sw/history.png)

**Mipangilio - kuchagua kifaa**

![Mipangilio - kuchagua kifaa](../images/screenshots/sw/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Orodha ya Mada

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Kuanza Haraka](#quick-start)
- [Sakinisha](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Kupata ufunguo wa OpenRouter API](#getting-an-openrouter-api-key)
- [Usanidi na mazingira](#configuration-and-environment)
- [Maendeleo na muundo](#development-and-architecture)
- [Maporomoko na lebo](#releases-and-tags)
- [Kuchangia](#contributing)
- [Taarifa ya uokoa](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Kuanza Haraka

**Docker (inapendekezwa kwa kuweka serikali mwenyewe)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Badilisha `sk-or-your-key` kwa ufunguo wako wa [OpenRouter API](https://openrouter.ai/keys) (au weka ufunguo wa mtoa mwingine; angalia [Usanidi](#configuration-and-environment)). Fungua [http://localhost:5000](http://localhost:5000) na badilisha nenosiri la msimamizi kabla ya kufunua huduma hiyo.

<br/>

> ℹ️ **TAARIFA**<br/>
> Katika Docker, vitambulisho vya LLM vinawekwa kwa kutumia kinyume kama vile `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (si kwa njia ya UI ya wavuti). Katika kompyuta (Electron) hutengeneza ufunguo kwenye **Mipangilio → API**.

<br/>

**Windows**

Pakua mpokezi wa mwisho wa `Transrewrt Setup x.y.z.exe` kutoka sehemu ya [Maporomoko](https://github.com/wsj-br/transrewrt/releases), sarufu mpokezi, kisha anza kwa kutumia menyu ya Sasa au ikono cha desktop. Weka ufunguo wako wa API kwenye **Mipangilio → API**. Unahitaji kusakinisha mtoa angalau mmoja, OpenRouter ni wa kawaida kwa mitindo ya bure.

<br/>

**Linux**

Pakua `.AppImage` kwa CPU yako kutoka sehemu ya [Maporomoko](https://github.com/wsj-br/transrewrt/releases) (`x64` kwa kompyuta rahisi, `arm64` kwa kifaa kirefu cha ARM, kama vile Raspberry Pi 4+), kisha:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Weza ufunguo wako wa API kwenye **Mipangilio → API**. Unahitaji kusakinisha mtoa angalau mmoja, OpenRouter ni wa kawaida kwa mitindo ya bure.

Kwenye Debian/Ubuntu unaweza kuwa unahitaji kusakinisha zaidi ya dependensi kwanza:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Angalia [Sakinisha → Linux](#linux-electron) kwa maelezo.

<br/>

> ℹ️ **TAARIFA**<br/>
> macOS haijaweza kushinikizia sasa. Transrewrt ipatikana kwa Windows, Linux, na Docker.

<br/>

Mara baada ya kuweza kuinua programu, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** ili kujifunza jinsi ya kutafsiri, kuandika upya, na kubadili maandishi, kusimamia maagizo, na kusanidi mitindo.

<br/><br/>

<a id="installation"></a>
## Usanidi

<a id="windows-electron"></a>
### Windows (Electron)

- Pakua mpokezi wa mwisho kutoka [Maporomoko](https://github.com/wsj-br/transrewrt/releases).
- Sarufu `.exe` na fuata maelekezo ya mpokezi.
- Kuanza kwa mara ya kwanza: anza programu kutoka kwenye menyu ya Sasa au ikono cha desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Pakua `.AppImage` sahihi (`x64` au `arm64`) kutoka [Maporomoko](https://github.com/wsj-br/transrewrt/releases).
- Ikanuse: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` kwenye x86_64/amd64, au tumia jina la faili `...-arm64.AppImage` kwenye ARM64.
- Zana zaidi (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Angalia [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kwa maelezo zaidi.

<br/>

<a id="docker"></a>
### Docker

- Pakua: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Weka angalau mmoja wa mtoaji kwa njia ya mazingira (kama vile `OPENROUTER_API_KEY` kwa OpenRouter). Tungeza kinyume kwa `-e` au kwa kutumia `docker compose` / `.env` ili vitambulisho visichanganyiki kwenye picha.
- Ufunguo wa mtoaji **hauwezi** kuandikwa kwenye UI ya wavuti; seriver inasoma kuma kwa mazingira.

Mfano - kiasi kimewekwa kwa ajili ya kuendelea (ufunguo wa OpenRouter kwa ajili ya mazingira):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Chaguo   | Maelezo                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Lango     | `5000` (unganisha kwa `-p 5000:5000`)                                                                              |
| Kiasi   | Sanii `/app/data` kwa ajili ya uendelezaji wa usanidi na hifadhi ya takwimu                                                         |
| Kinyume  | `PORT`, `CONFIG_PATH`, pamoja na ufunguo wa LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - angalia [Usanidi](#configuration-and-environment) |

Ili kujenga na kuanza kutoka kwa chanzo: `docker compose up --build -d` au `pnpm docker:up` - angalia [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Kupata ufunguo wa OpenRouter API

Transrewrt unatumia mtoaji mbalimbali wa AI. [OpenRouter](https://openrouter.ai) ni chaguo bora kwa sababu unakusanya ziada ya mitambo kwa ufunguo mmoja na unatoa mitambo ya bure.

1. Jiandikishe au uingie kwenye [openrouter.ai](https://openrouter.ai).
2. Fungua ukurasa wa [Vifunguo](https://openrouter.ai/keys) utekeleze ufunguo mpya (jitayarisha jina, na si lazima uweke kikomo cha sifa). Unaweza kutumia mitambo ya bure bila kuongeza sifa.
3. **Kivinjari (Electron):** wachangie ufunguo katika **Mipangilio → API**. **Docker:** weka ambatisho kama vile `OPENROUTER_API_KEY` (tazama [Kuanza haraka](#quick-start)).

Usitumie ufunguo wa OpenRouter wa muduli wa **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kwa kutafsiri, kuandikisha upya, au kubadili: unarudisha vyanzo vinavyotumika kutuma ombi la JSON, si maandishi yaliyotimia kwa zoezi hilo. Angalia [Mipangilio → Mitambo](USER-GUIDE.sw.md#models) katika Mwongozi wa Mtumiaji.

Unaweza pia kutumia mtoaji mengine (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) au kuendesha mitambo kwenye kivinjari chako kwa [Ollama](https://ollama.com). Angalia [Uwiano na Mazingira](#configuration-and-environment) ili kupata orodha kamili ya mtoaji waliowezeshwa na ambatisho zinazotumika.

> ⚠️ **ONYO**<br/>
> Ukifanya kutumia Ollama kutoka kifaa kingine, kikabati, au huduma, kumbuka kusawazisha Ollama ili kuruhusu muungano wa nje (si localhost tu).


Kwa vikomo, BYOK, na zaidi, angalia [Ubao wa OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Uwiano na mazingira

**Mahali pa faili ya maelezo ya usanidi**

| Usanidi         | Mahali pa maelezo ya usanidi                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Kivinjari / Docker | `/app/data/config.json` (tumia kikabati ili kuhifadhi data) |

<br/>

**Ambatisho za mazingira** (kwa kivinjari/Docker tu; Electron hutumia faili ya maelezo ya kivinjari)

| Ambatisho         | Chaguo-msingi                 | Maelezo |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Lango la kusikiliza kwa seva |
| `CONFIG_PATH`    | `/app/data/config.json` | Njia kuelekea faili ya usanidi |
| `OPENROUTER_API_KEY` | *(hakuna)*               | Ufunguo wa OpenRouter API |
| `OPENAI_API_KEY`     | *(hakuna)*               | Ufunguo wa OpenAI API |
| `CEREBRAS_API_KEY`   | *(hakuna)*               | Ufunguo wa Cerebras API |
| `ANTHROPIC_API_KEY`  | *(hakuna)*               | Ufunguo wa Anthropic API |
| `GOOGLE_API_KEY`     | *(hakuna)*               | Ufunguo wa Google Gemini API |
| `DEEPSEEK_API_KEY`   | *(hakuna)*               | Ufunguo wa DeepSeek API |
| `GROQ_API_KEY`       | *(hakuna)*               | Ufunguo wa Groq API |
| `MISTRAL_API_KEY`    | *(hakuna)*               | Ufunguo wa Mistral API |
| `OLLAMA_URL`     | *(hakuna)*               | URL ya msingi wa Ollama (mfano: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(hakuna)*               | Ufunguo wa xAI API |

Wasilisha tu mtoaji uliowasili kutumia. Viambatisho vya muduli vina sehemu zinazopangwa (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, n.k.).

**Onyesho la gharama:** OpenRouter hurudisha gharama halisi ya malipo ikiwa ni sawa. Mtoaji mengine hutumia gharama **imehesabiwa kwa mawazo** kutoka bei kamili ya muduli ya OpenRouter ikiwa ufunguo wa OpenRouter unapatikana; bila hiyo, gharama ya sio ya OpenRouter inaweza kuonekana kama `0`. Maoni hayana maana kwamba ni fahari.

<br/>

**Data na uhifadhi:** Kwa Docker, fumba kikabati pande za `/app/data` ili `config.json` na msingi wa SQLite uweze kuendelea kushughulikia baada ya kuanzisha upya kikabati. Bila kikabati, data yote hutofautiana mara tu kikabati kimesimama.

**Wanawaike:** Baada ya kupokea mabadiliko ambayo yanabadilisha mpangilio wa zamani wa ufunguo mmoja, zima au uunganishe `data/config.json` na mfumo mpya kutoka `src/config-defaults/config_default.json` kama faili yako ya kivinjari bado inatumia vipengele vilivyofutwa (`api_key`, `api_url`, chaguo za kiambo).

<br/>

**Ubao wa wavuti:**

- Msimamizi wa msingi: `admin` / `transrewrt26`.
- Dhibiti watumiaji kwenye **Mipangilio → Wanatumiaji**.
- Zima nywila: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (kutoka chanzo: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ONYO**<br/>
> Badilisha nywila ya msimamizi wa msingi haraka iwezekanavyo kwenye kila wavuti inayowezeshwa muungano.

<br/>

Mipangilio muhimu (fonti, mitambo, lugha, n.k.) yanapatikana kwenye Sehemu ya Mipangilio ya programu.

<br/><br/>

<a id="development-and-architecture"></a>

## Maendeleo na miundo

- **Maendeleo:** Weka, jitenga, jaribu, na uwasilishe (Electron, Web, Docker) - angalia **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Muundo na matokeo ya mfumo:** Miongozo ya folda, zana za teknolojia, uamuzi wa kinambo - angalia **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Matoleo na lebo

- **Lebo za Git** `v`* (mfano `v1.0.10`) zinazalisha kazi ya [toleo](.github/workflows/release.yml). **Matoleo ya GitHub** hubiri mfululizo wa Windows (`.exe`) na Matoleo ya Linux (AppImages) (**x64** na **arm64**).
- **Picha za Docker** zinawasilishwa kwenye `ghcr.io/wsj-br/transrewrt`. Lebo za picha zinaweza kulingana na toleo la Git (mfano `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) pamoja na `latest`. Arch ya nyingi: `linux/amd64` na `linux/arm64` (mfano Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Mchango

1. Fanya nakala ya hifadhi.
2. Unda tawi la vipengele: `git checkout -b feature/my-feature`
3. Wasilisha mabadiliko yako kwa ujumbe wazi.
4. Pigania mabadiliko kwa `main`.

Tafadhali ufuata mtindo wa msimbo uliopo na ujaribu mabadiliko yako katika rejimu za Electron na Web kabla ya kuwasilisha. Angalia [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kwa maelekezo ya kujiendeleza na kujaribu.

<br/>

**Kuwasilisha matatizo:** Fungua tatizo kwenye [GitHub](https://github.com/wsj-br/transrewrt/issues). Jumuisha platform yako (Windows / Linux / Docker) na toleo la programu (linavyoonyeshwa kwenye sehemu ya "Kuhusu" au ukurasa wa Matoleo).

<br/><br/>

<a id="disclaimer"></a>
## Tahadhari

Majina na alama za bidhaa ni milipu kwa wahusika wao na hutumika kwa ajili ya uteuzi tu. Programu hii haichangiani au kumpokea chini kampuni wowote ya wale wamebainishwa.

<br/><br/>

<a id="license"></a>
## Leseni

Haki za nakala © 2026 Waldemar Scudeller Jr.

[Leseni ya Apache 2.0](LICENSE)