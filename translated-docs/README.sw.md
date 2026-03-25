---
translated_at: "2026-03-25T22:25:48.713Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Alama ya Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Toleo"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Leseni: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Jukwaa">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Zana ya maandishi yenye nguvu za utawala wa kisawe: tafsiri kati ya lugha, andika kwa njia mbili, na ubadilishe kwa kutumia masharti maalum — kwa kutumia mtoa AI wengi (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, na Ollama ya lokal). Inafanya kazi kama programu ya kompyuta (Electron) au kama programu ya wavuti inayoendeshwa mwenyewe (Docker).

- **Tafsiri** — kati ya lugha kubwa, na udhibiti otomatiki wa lugha ya awali
- **Andika upya** — sahihi sarufi, fanikisha ufahamu, kifakuluzi/kisarehe, fupisha, ongeza, teknolojia
- **Ubudilishe** — masharti maalum ya AI; utengeneze na usimamie masharti, chaguo la lugha ya kipato kwa kila sharti
- **Historia** — historia kamili ya utekelezaji ikiwa na maandishi ya pembe juu/taarifa, vipengele vya kupanga na uwezo wa kuhamisha
- **Mifumo na gharama** — chagua mifumo kutoka kwa mpokeaji unachopangia; vyumba vya ujumbe na matumizi kwa kumbukumbu, muhtasari kwa mfumo/kitendo/siku
- **UI** — kiolesura cha lugha mbili (lugh 30+, msaada wa kulia-kushoto), vifuniko, ...
- **Njia ya wavuti** — msaada wa watumiaji wengi kwa mafungu ya msimamizi
- **Kompyuta** — programu ya Electron kwa Windows na Linux
- **Inayoendeshwa mwenyewe** — picha ya Docker kwa amd64 & arm64 (inayotayarishwa kwa Raspberry Pi)

Baada ya kuweka, tazama **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kwa mchoro kamili wa vipengele vyote.

<small>**Soma kwa lugha nyingine:** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Kumbusho kuhusu tafsiri za UI na usajili wa vyombo:** Lugha zote za kiolesura isipokuwa asili ya Kiingereza (UK)
> zimepatikana kwa kutumia mfumo wa AI; maneno yanaweza kuwa ya pana au kuwa nao makosa.

</small>

<br/>

<a id="screenshots"></a>
## Picha za ekran

**Kichagua lugha**

![Kichagua lugha](../images/screenshots/sw/language-selector.png)

**Tafsiri**

![Tafsiri](../images/screenshots/sw/translate.png)

**Mabadiliko - kihariri cha sharti**

![Mabadiliko - kihariri cha sharti](../images/screenshots/sw/transform-prompt-edit.png)

**Dashibodi**

![Dashibodi ya gharama](../images/screenshots/sw/dashboard-summary.png)

**Historia**

![Historia](../images/screenshots/sw/history.png)

**Mipangilio - kuchagua mfumo**

![Mipangilio - kuchagua mfumo](../images/screenshots/sw/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Orodha ya maudhui

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Kuanza haraka](#kuanza-haraka)
- [Sakinisha](#sakinisha)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Kupata ufunguo wa OpenRouter API](#kupata-ufunguo-wa-openrouter-api)
- [Uwekaji na mazingira](#uwekaji-na-mazingira)
- [Ukuzaji na utamaduni](#ukuzaji-na-utamaduni)
- [Toka na lebo](#toka-na-lebo)
- [Kuchangia](#kuchangia)
- [Kujitolea](#kujitolea)
- [Leseni](#leseni)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="kuanza-haraka"></a>
## Kuanza haraka

**Docker (inapaswa kutumia kwa kuhifadhi mtandaoni binafsi)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Badilisha `sk-or-your-key` kwa [ufunguo wako wa OpenRouter API](https://openrouter.ai/keys) (au weka ufunguo wa mtoa mwingine; tazama [Uwekaji](#uwekaji-na-mazingira)). Fungua [http://localhost:5000](http://localhost:5000) na mabadiliko ya nenosiri la msimamizi kabla ya kuifungua huduma hiyo.

<br/>

> ℹ️ **KINGA**<br/>
> Katika Docker, vitambulisho vya LLM vinawekwa kwa kusawazisha mazingira kama vile `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (sio katika wizi wa wavuti). Kwenye kompyuta ya mkononi (Electron) unaweka vifunguo katika **Mipangilio → API**.

<br/>

**Windows**

Pakua kitabakazi cha kisichozungumzika `Transrewrt Setup x.y.z.exe` kutoka [Toka](https://github.com/wsj-br/transrewrt/releases), sajili kibodi, kisha anza kwa kutumia menyu ya Start au kiungo cha kioja. Weka vifunguo vyako vya API katika **Mipangilio → API**. Unahitaji kuweka angalau mtoa mmoja, OpenRouter ni wa kawaida kwa mitindo ya bure.

<br/>

**Linux**

Pakua `.AppImage` kwa CPU yako kutoka [Toka](https://github.com/wsj-br/transrewrt/releases) (`x64` kwa kompyuta za kawaida, `arm64` kwa kifaa cha ARM kama vile Raspberry Pi 4+), kisha:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Weke vifunguo vyako vya API katika **Mipangilio → API**. Unahitaji kuweka angalau mtoa mmoja, OpenRouter ni wa kawaida kwa mitindo ya bure.

Kwenye Debian/Ubuntu unaweza kuhitaji kuweka tegemezi zaidi kwanza:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Tazama [Sakinisha → Linux](#linux-electron) kwa maelezo.

<br/>

> ℹ️ **KINGA**<br/>
> macOS haipokei kwa sasa. Transrewrt inapatikana kwa Windows, Linux, na Docker.

<br/>

Baada ya kuinua programu, tazama **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kujifunza jinsi ya kutafsiri, kuandika upya, na kubadili maandiko, kusimamia maombi, na kuweka mitindo.

<br/><br/>

<a id="sakinisha"></a>
## Sakinisha

<a id="windows-electron"></a>
### Windows (Electron)

- Pakua kibodi cha kisichozungumzika kutoka [Toka](https://github.com/wsj-br/transrewrt/releases).
- Inua `.exe` na fuata maelekezo ya kibodi.
- Kwa mara ya kwanza: anza programu kutoka kwenye menyu ya Start au kiungo cha kioja.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Pakua `.AppImage` sahihi (`x64` au `arm64`) kutoka [Toka](https://github.com/wsj-br/transrewrt/releases).
- Inua: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` kwa x86_64/amd64, au tumia jina la faili `...-arm64.AppImage` kwenye ARM64.
- Tegemezi zaidi (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Angalia [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kwa zaidi.

<br/>

<a id="docker"></a>
### Docker

- Pakua: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Weka angalau jina la mtoa mmoja kupitia mazingira (kama vile `OPENROUTER_KEY` kwa OpenRouter). Tumia kusawazishe mara kwa mara kwa `-e` au `docker compose` / `.env` ili siri zisichong'wanywe katika picha.
- Vifunguo vya mtoa **haviwekwi** katika wizi wa wavuti; server unayasoma kutoka kwa mazingira.

Mfano - kiasi kinachotumika kwa uhifadhi (ufunguo wa OpenRouter kupitia mazingira):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Chaguo   | Maelezo                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (kang'anyi kwa `-p 5000:5000`)                                                                              |
| Kiasi    | Weka `/app/data` kwa ajili ya uhifadhi wa maelezo na hifadhi ya data                                                         |
| Mazingira | `PORT`, `CONFIG_PATH`, pamoja na vifunguo vya LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - tazama [Uwekaji](#uwekaji-na-mazingira) |

Ili kujenga na kuinua kutoka chanzo: `docker compose up --build -d` au `pnpm docker:up` - tazama [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="kupata-ufunguo-wa-openrouter-api"></a>

## Kupata ufunguo wa OpenRouter API

Transrewrt unasaidia toa huduma tofauti za AI. [OpenRouter](https://openrouter.ai) ni chaguo bora kwa sababu inakusanya mfano mwingi kwa ufunguo mmoja na inatoa mifano ya bure.

1. Jiandikishe au uingie kwenye [openrouter.ai](https://openrouter.ai).
2. Fungua ukurasa wa [Ufunguo](https://openrouter.ai/keys) na unda ufunguo mpya (wapa jina, na kama utamwisho, weka kikomo cha sarakani). Unaweza kutumia mifano ya bure bila kuongeza sarakani.
3. **Kifaa cha ofisini (Electron):** wachangie ufunguo kwenye **Mipangilio → API**. **Docker:** weka kibambo cha mazingira kama vile `OPENROUTER_KEY` (tazama [Kuanza Haraka](#quick-start)).

Usitumie mfano wa OpenRouter **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kwa kutafsiri, kuandika upya, au kubadili: unatupa mawasiliano ya JSON, si maandishi yaliyotimia kwa kazi hizo. Angalia [Mipangilio → Mifano](USER-GUIDE.sw.md#models) kwenye Mwongozo wa Mtumiaji.

Pia unaweza kutumia toa huduma wengine (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) au kuendesha mifano lokalini kwa [Ollama](https://ollama.com). Tazama [Uwekezaji](#configuration-and-environment) kwa orodha kamili ya toa huduma wanasaidiwa na kibambo cha mazingira.

> ⚠️ **ONYO**<br/>
> Ikiwa unatumia Ollama kutoka kifaa kingine, kikabioni, au huduma, usiisahau kumwekeza Ollama kumruhusu muungano wa nje (siyo localhost tu).


Kwa mifumo, BYOK, na zaidi, tazama [uthibitishaji wa OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Uwekezaji na mazingira

**Makorongo ya faili ya mipangilio**

| Uwekezaji         | Mahali pa Mipangilio                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Mtandao / Docker   | `/app/data/config.json` (tumia kikombe kuhifadhi) |

<br/>

**Kibambo cha mazingira** (mtandao/Docker tu; Electron hutumia faili ya mipangilio ya kijiji)

| Kibambo         | Chaguo-msingi                 | Maelezo |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Lango la kikasha cha utamaduni |
| `CONFIG_PATH`    | `/app/data/config.json` | Mahali pa faili ya mipangilio |
| `OPENROUTER_KEY` | *(tupu)*               | Ufunguo wa OpenRouter API |
| `OPENAI_KEY`     | *(tupu)*               | Ufunguo wa OpenAI API |
| `CEREBRAS_KEY`   | *(tupu)*               | Ufunguo wa Cerebras API |
| `ANTHROPIC_KEY`  | *(tupu)*               | Ufunguo wa Anthropic API |
| `GOOGLE_KEY`     | *(tupu)*               | Ufunguo wa Google Gemini API |
| `DEEPSEEK_KEY`   | *(tupu)*               | Ufunguo wa DeepSeek API |
| `GROQ_KEY`       | *(tupu)*               | Ufunguo wa Groq API |
| `MISTRAL_KEY`    | *(tupu)*               | Ufunguo wa Mistral API |
| `OLLAMA_URL`     | *(tupu)*               | URL msingi wa Ollama (mfano: `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(tupu)*               | Ufunguo wa xAI API |

Weka tu toa huduma uliyotumia. Vitambaa vya mfano vinapewa nafasi (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, n.k.).

**Onesha gharama:** OpenRouter inarudisha gharama halisi inayochukuliwa ikiwa inahusika. Watoa huduma wengine wanatumia gharama **imehesabiwa** kutoka bei ya mfano wa umma wa OpenRouter ikiwa ufunguo wa OpenRouter umeamilika; bila hiyo, gharama isiyofaa OpenRouter inaweza kuonekana kama `0`. Mampanga si ankovi.

<br/>

**Data na uhifadhi:** Kwa Docker, imilishia kikombe kwenye `/app/data` ili `config.json` na hifadhi ya SQLite zichinjwe baada ya kuanza upya kikashaka. Bila kikombe, data yote hutupwa wakati kikashaka kinapopitwa.

**Maendelezao:** Baada ya kupokea mabadiliko ambayo yamebadili mpangilio wa ufunguo mmoja wa zamani, weka upya au uunganishe `data/config.json` na muundo mpya wa chaguo-msingi kutoka `src/config-defaults/config_default.json` ikiwa faili yako ya kijiji bado inatumia shambani zilizofutwa (`api_key`, `api_url`, chaguo za kirai).

<br/>

**Utiihuduma wa mtandao:**

- Msimamizi wa msingi: `admin` / `transrewrt26`.
- Dhibiti watumiaji kwenye **Mipangilio → Watumiaji**.
- Weka upya nenosiri: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (kutoka kibukini: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ONYO**<br/>
> Badaa siri ya msimamizi wa chaguo-msingi haraka iwezekanavyo kwenye kifaa chochote kinachopokea mtandao.

<br/>

Mipangilio muhimu (fonti, mifano, lugha, n.k.) ipatikana katika Mipangilio ya programu.

<br/><br/>

<a id="development-and-architecture"></a>

## Maendeleo na muundo wa mfumo

- **Maendeleo:** Sasishi, jenga, jaribu na uwasilishe (Electron, Web, Docker) - angalia **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Muundo wa mfumo na muhtasari wake:** Mfumo wa folda, vitu(vinavyotumika kujenga mfumo), maamuzi ya uundaji - angalia **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Matoleo na lebo

- **Lebo za Git** `v`* (kama vile `v1.0.10`) zinawezesha [mtiririko wa uchaguzi](.github/workflows/release.yml). **Matoleo ya GitHub** huchanganya mpokaji wa Windows (`.exe`) na Matoleo ya Linux AppImage (**x64** na **arm64**).
- **Picha za Docker** zinatolewa kwa `ghcr.io/wsj-br/transrewrt`. Lebo za picha zinafanana na toleo la Git (kama vile `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) pamoja na `latest`. Arch ya mbalimbali: `linux/amd64` na `linux/arm64` (kama vile Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Michezo

1. Fanya nakala ya repoherezo.
2. Unda tawi la sifa: `git checkout -b feature/my-feature`
3. Thibitisha mabadiliko yako kwa ujumbe wazi.
4. Pepea na fungua Ombi la Kupokea kwa `main`.

Tafadhali fuata mtindo wa msimbo unaofaa na majaribu ya mabadiliko yako katika rejisti za Electron na web kabla ya kutuma. Angalia [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kwa maelekezo ya kujenga na kujaribu.

<br/>

**Kutoa mchanganuo:** Fungua mchanganuo kwenye [GitHub](https://github.com/wsj-br/transrewrt/issues). Jiunge na jukwali lako (Windows / Linux / Docker) na toleo la programu (linaloonekana kwenye dirisha la Kuhusu au ukurasa wa Matoleo).

<br/><br/>

<a id="disclaimer"></a>
## Tahadhari

Majina na alama za bidhaa ni ya wamiliki wake na hutumiwa kwa ajili ya kutambulisha tu. Programu hii haina uhusiano wa familia au ushauri wake kama ile ya alama zilizoelezwa.

<br/><br/>

<a id="license"></a>
## Leseni

Copyright © 2026 Waldemar Scudeller Jr.

[Leseni ya Apache 2.0](LICENSE)