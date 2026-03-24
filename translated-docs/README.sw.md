---
translated_at: "2026-03-24T03:10:25.830Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Alamisho la Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Toa"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Leseni: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Jukwaa">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Zana ya maandishi yenye uwezo wa ziada kutumia AI: tafsiri kati ya lugha, andika upya kwa mistili mbaya, na ubadilishe kwa matamanio maalum — kwa kutumia mpikaji wengi wa AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, na Ollama ya kijiji). Inafanya kazi kama programu ya kompyuta (Electron) au kama programu binafsi ya wavuti (Docker).

- **Tafsiri** — kati ya lugha kubwa, yenye kipimo cha kiotomatiki cha chanzo
- **Andika upya** — sahihi sarufi, boresha wazi, rasmi/isyerasmi, fupisha, ubadilishe, teknolojia
- **Badili** — maagizo ya AI ya kibinafsi; unda na uongozwe maagizo, lugha ya kibinafsi kwa kila maagizo
- **Historia** — historia kamili ya utekelezaji ikiwa ni pamoja na maandishi ya pembe nilizokwama/za kuzalisha, kuchuja, na uwasilishaji
- **Mifumo na gharama** — chagua mifumo kutoka kwa mpikaji yeyote uliowekewa; dashibodi ya gharama yenye kumbukumbu la SQLite, muhtasari kwa mfumo/uendeshaji/siku
- **UI** — kwenye kila lugha (zaidi ya 30, msaada wa RTL), fonti, ...
- **Njia ya wavuti** — msaada wa watumiaji wengi wenye majukumu ya msimamizi; unywele wa API hukaa upande wa seva, hauwezi kuonekana kwenye kivinjari
- **Kompyuta** — programu ya Electron kwa Windows na Linux
- **Kibinafsi** — picha ya Docker kwa amd64 & arm64 (inayotayarishwa kwa Raspberry Pi)

Baada ya kusakinisha, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kwa mwendeshaji kamili wa vipengele vyote.

<small>**Soma kwa lugha nyingine:** [Kiingereza (UK)](README.sw.md) · [Kiporotugali (BR)](README.pt-BR.md) · [Kiarabu](README.ar.md) · [Bangla](README.bn.md) · [Kikatala](README.ca.md) · [Kichina (Rahisi)](README.zh-CN.md) · [Kichina (Kilichozingatiwa)](README.zh-TW.md) · [Kihorwati](README.hr.md) · [Kicheko](README.cs.md) · [Kiholandi](README.nl.md) · [Kiingereza (USA)](README.en-US.md) · [Kifilipino](README.tl.md) · [Kifaransa](README.fr.md) · [Kijerumani](README.de.md) · [Kigiriki](README.el.md) · [Kihindi](README.hi.md) · [Kihunagari](README.hu.md) · [Kitaliano](README.it.md) · [Kijapani](README.ja.md) · [Basa Jawa](README.jv.md) · [Kikorea](README.ko.md) · [Bahasa Melayu](README.ms.md) · [Fasi](README.fa.md) · [Kipolishi](README.pl.md) · [Kiporotugali (PT)](README.pt.md) · [Punjabi](README.pa.md) · [Kienyewe](README.ro.md) · [Kirusi](README.ru.md) · [Kislovaki](README.sk.md) · [Kihispania](README.es.md) · [Kiswahili](README.sw.md) · [Kiswidi](README.sv.md) · [Telugu](README.te.md) · [Kithai](README.th.md) · [Kituruki](README.tr.md) · [Kiukraini](README.uk.md) · [Kivietinamu](README.vi.md)</small>


<br/>

**Maelezo ya tafsiri ya UI na wa kiswahili:** Lugha zote za kuingiza zisizo za Kiingereza (UK) zimeletwa kwa kutumia moduli ya AI; maandishi yanaweza sio sahihi kamili au kuwa na makosa.



<a id="screenshots"></a>
## Picha

**Chaguzi ya lugha**

![Chaguzi ya lugha](../images/screenshots/sw/language-selector.png)

**Tafsiri**

![Tafsiri](../images/screenshots/sw/translate.png)

**Badilisha - hariri wa maagizo**

![Badilisha - hariri wa maagizo](../images/screenshots/sw/transform-prompt-edit.png)

**Dashibodi**

![Dashibodi ya gharama](../images/screenshots/sw/dashboard-summary.png)

**Historia**

![Historia](../images/screenshots/sw/history.png)

**Mipangilio - chaguo la mfumo**

![Mipangilio - chaguo la mfumo](../images/screenshots/sw/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Orodha ya Yaliyomo

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Kuanza haraka](#quick-start)
- [Sakinisha](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Kupata ufunguo wa OpenRouter API](#getting-an-openrouter-api-key)
- [Uwianzo na mazingira](#configuration-and-environment)
- [Uundaji na sura ya mfumo](#development-and-architecture)
- [Matoleo na vibambo](#releases-and-tags)
- [Kuchangia](#contributing)
- [Taarifa ya kuondoa wajibu](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Kuanza haraka

**Docker (inapendekezewa kwa kuwafungua wengine mfumo)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Badilisha `sk-or-your-key` kwa [ufunguo wako wa OpenRouter API](https://openrouter.ai/keys) (au weka ufunguo wa mtoa mwingine; angalia [Uwianzo](#configuration-and-environment)). Fungua [http://localhost:5000](http://localhost:5000) na ubadilishe nenosiri la msimamizi kwa chini kabla ya kuweka huduma hiyo wazi.

<br/>

> ℹ️ **TAARIFA**<br/>
> Katika Docker, vitambulishi vya LLM vinawekwa kwa vigezo vya mazingira kama vile `OPENROUTER_KEY`, `OPENAI_KEY`, … (sio kwa UI ya wavuti). Kwa kompyuta (Electron), unaweka vifunguo kwenye **Mipangilio → API**.

<br/>

**Windows**

Pakua `Transrewrt Setup x.y.z.exe` ya hivi karibuni kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases), kimbia mwenzi, kisha uanzishe kupitia orodha ya Start au alan ulio kwenye desktop. Weka vitambulishi vyako vya API kwenye **Mipangilio → API**. Unahitaji kusakinisha mtoa angalau mmoja; OpenRouter ni wa kawaida kwa madelosi ya bure.

<br/>

**Linux**

Pakua `.AppImage` kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases), kisha:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Wekea vitambulishi vyako vya API kwenye **Mipangilio → API**. Unahitaji kusakinisha mtoa angalau mmoja; OpenRouter ni wa kawaida kwa madelosi ya bure.

Kwenye Debian/Ubuntu labda unahitaji kusakinisha zaidi ya misingi wa awali kwanza:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Angalia [Sakinisha → Linux](#linux-electron) kwa maelezo zaidi.

<br/>

> ℹ️ **TAARIFA**<br/>
> macOS hayasemekani sasa. Transrewrt ipatikana kwa Windows, Linux na Docker.

<br/>

Baada ya kuanzia programu, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** ili kujifunza jinsi ya kutafsiri, kuandika upya, kubadili maandishi, kusimamia maombi, na kusawazisha madela.

<br/><br/>

<a id="installation"></a>
## Sakinisha

<a id="windows-electron"></a>
### Windows (Electron)

- Pakua mwenzi wa hivi karibuni kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases).
- Kimbia `.exe` na fuata mwelekeo wa mwenzi.
- Kimbilio cha kwanza: anzisha programu kupitia orodha ya Start au alan la desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Pakua `.AppImage` kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases).
- Kimbia: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Zaidi ya misingi ya awali (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Angalia [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kwa maelezo zaidi.

<br/>

<a id="docker"></a>
### Docker

- Pakua: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Weka angalau mmoja wa ufunguo wa mtoa kupitia mazingira (kama vile `OPENROUTER_KEY` kwa OpenRouter). Hamisha vigezo kwa `-e` au `docker compose` / `.env` ili vitambulishi visiweke kwenye taswira.
- Vitambulishi vya mtoa **havisitolewe** kwenye UI ya wavuti; seva inayosoma vigezo kutoka kwenye mazingira.

Mfano - kiasi kilichopakwa kwa ufanisi (ufunguo wa OpenRouter kwa njia ya mazingira):

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
| Port     | `5000` (uunganisho kwa `-p 5000:5000`)                                                                              |
| Kiasi    | Weka `/app/data` kwa ajili ya ufanisi wa usanidi na hifadhi ya data                                                         |
| Vigezo vya mazingira | `PORT`, `CONFIG_PATH`, pamoja na vifunguo vya LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - angalia [Uwianzo](#configuration-and-environment) |

Ili jengi na kimbia kutoka kwa chanzo: `docker compose up --build -d` au `pnpm docker:up` - angalia [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Kupata ufunguo wa OpenRouter API

Transrewrt una mchango kwa mfanyabiashara mbalimbali wa AI. [OpenRouter](https://openrouter.ai) ni chaguo maarufu kwa sababu inakusanya tarakimu nyingi kwa ufunguo mmoja inatoa maktaba bure.

1. Jiandikishe au ingia kwenye [openrouter.ai](https://openrouter.ai).
2. Fungua ukurasa wa [Ufunguo](https://openrouter.ai/keys) na unda ufunguo mpya (litokeza jina, na si lazima weke kikomo cha mkopo). Unaweza kutumia maktaba ya bure bila kuongeza mkopo.
3. **Kivinjari (Electron):** fungua ufunuo kwenye **Mipangilio → API**. **Docker:** weka vigezo vya mazingira kama vile `OPENROUTER_KEY` (tazama [Kuanza haraka](#quick-start)).

Unaweza pia kutumia mfanyabiashara wengine (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) au kuendesha maktaba kwa njia ya lokal kwa kutumia [Ollama](https://ollama.com). Angalia [Uwekaji na Mazingira](#configuration-and-environment) kwa orodha kamili ya wafanyabiashara wamesimamiwa na vigezo vya mazingira.

Kwa kikomo, BYOK, na zaidi, tazama [uthibitishaji wa OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Uwekaji na mazingira

**Mahali pa faili ya usanidi**

| Kusambazaji         | Mahali pa usanidi                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (tumia kiasi cha kuifanya iendeleapo) |

<br/>

**Vigezo vya mazingira** (kwa wavuti/Docker tu; Electron hutumia faili ya usanidi ya lokalini)

| Vigezo         | Chaguo-msingi                 | Maelezo |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Lango la kusikiliza kwa seva |
| `CONFIG_PATH`    | `/app/data/config.json` | Njia kwa faili ya usanidi |
| `OPENROUTER_KEY` | *(tupu)*               | Ufunguo wa OpenRouter API |
| `OPENAI_KEY`     | *(tupu)*               | Ufunguo wa OpenAI API |
| `ANTHROPIC_KEY`  | *(tupu)*               | Ufunguo wa Anthropic API |
| `GOOGLE_KEY`     | *(tupu)*               | Ufunguo wa Google Gemini API |
| `DEEPSEEK_KEY`   | *(tupu)*               | Ufunguo wa DeepSeek API |
| `GROQ_KEY`       | *(tupu)*               | Ufunguo wa Groq API |
| `MISTRAL_KEY`    | *(tupu)*               | Ufunguo wa Mistral API |
| `OLLAMA_URL`     | *(tupu)*               | URL ya msingi wa Ollama (k.m. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(tupu)*               | Ufunguo wa xAI API |

Wekeza tu wafanyabiashara ambao unawatumia. Vigezo vya maktaba vinachukuliwa kwa sehemu (`openrouter/…`, `openai/…`, `ollama/…`, n.k.).

**Onesha gharama:** OpenRouter hurudisha gharama halisi ya malipo palipofanana. Wafanyabiashara wengine hutumia gharama **imehesabiwa** kutoka kwa bei ya openRouter ya umma ya maktaba iwapo kuna ufunguo wa OpenRouter; bila huo, gharama isiyo ya OpenRouter inaweza kuonekana kama `0`. Maelezo hayana ukosi wa mwaliko.

<br/>

**Data na uendelezaji:** Kwa Docker, funga kiasi kwenye `/app/data` ili `config.json` na hifadhidata ya SQLite iweze kuendelea baada ya kuanza upya wa chumba. Bila kiasi, data yote itapotea unaposimama chumba.

**Waukilishi:** Baada ya kupata mabadiliko ambayo inabadilisha mpangilio wa ufunguo mmoja wa zamani, sawa au warejesha `data/config.json` kwa mpangilio mpya wa msingi kutoka kwenye `src/config-defaults/config_default.json` kama faili yako halisi bado inatumia vigezo viliovumbazwa (`api_key`, `api_url`, chaguo za proxy).

<br/>

**Utiaji kwenye wavuti:**

- Msimamizi wa msingi: `admin` / `transrewrt26`.
- Dhibiti watumiaji kwenye **Mipangilio → Watumiaji**.
- Warejesha password: `docker exec <chumba> reset-web-password '<jina la mtumiaji>' '<password mpya>'`
  (toka kwa chanzo: `pnpm run reset-web-password -- <jina la mtumiaji> <password mpya>`)

<br/>

> ⚠️ **ONYO**<br/>
> Badilisha password ya msimamizi wa msingi haraka iwezekanavyo kwenye kila mhusiano uliopo.

<br/>

Mipangilio muhimu (fonti, maktaba, lugha, n.k.) yanapatikana kwenye Mipangilio ya programu.

<br/><br/>

<a id="development-and-architecture"></a>
## Maendeleo na muundo

- **Maendeleo:** Sanidi, jenga, jaribu, na washihirika (Electron, Web, Docker) - tazama **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Muundo na muhtasari wa mfumo:** Miongozo ya folda, stack ya teknolojia, maamuzi ya uundaji - tazama **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Matoleo na Lebo

- **Lebo za Git** `v`* (k.m. `v1.0.10`) zinawasilishia muongo wa matoleo [release workflow](.github/workflows/release.yml). **Matoleo ya GitHub** yanapakia mtafiti wa Windows (`.exe`) na Linux AppImage.
- **Picha za Docker** zinapakiawa kwa `ghcr.io/wsj-br/transrewrt`. Lebo za picha zinalingana na toleo la Git (k.m. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) pamoja na `latest`. Arch ya nyingi: `linux/amd64` na `linux/arm64` (k.m. Raspberry Pi).

<br/><br/>

<a id="wachangiaji"></a>
## Kuwasilisha Michango

1. Fanya kazi ya mkopo (fork) ya ghala.
2. Unda matawi ya sifa: `git checkout -b feature/my-feature`
3. Fanya kamilisho (commit) kwa ujumbe wazi.
4. Funga na washilie Ombi la Pull kwa `main`.

Tafadhali fuata kauli ya msimbo uliopo na majaribio ya mabadiliko yako katika rejimu za Electron na wavuti kabla ya kuwasilisha. Angalia [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kwa maelekezo ya kujenga na kujaribu.

<br/>

**Kuwasilisha matatizo:** Fungua tatizo kwenye [GitHub](https://github.com/wsj-br/transrewrt/issues). Jumuisha mfumo wako (Windows / Linux / Docker) na toleo la programu (linazoelezea katika sehemu ya Kuhusu au kwenye ukurasa wa Matoleo).

<br/><br/>

<a id="tafadhali-taja"></a>
## Taarifa Muhimu

Majina na alama za bidhaa ni milipyo kwa wamiliki wake wa kila moja na yana tumika kwa kusitiza tu. Programu hii haifanyi kushiriki au kupokea ushauri kutoka kwa vipengele fulani vilivyotajwa.

<br/><br/>

<a id="leseni"></a>
## Leseni

Copyright © 2026 Waldemar Scudeller Jr.

[Leseni ya Apache 2.0](LICENSE)