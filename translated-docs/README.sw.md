---
translation_last_updated: '2026-04-15T22:30:24.428Z'
source_file_mtime: '2026-04-15T00:50:00.594Z'
source_file_hash: 2884acaf6ad14700c49fb45218c88034c13c229575fe804916d7e0e9a6c8adaa
translation_language: sw
source_file_path: README.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Zana ya maandishi yenye nguvu ya AI: tafsiri kati ya lugha mbalimbali, andika upya kwa mitindo tofauti, na ubadilishe kwa kutumia mandhari maalum - kwa kutumia mtoa huduma wengi wa AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, na Ollama ya kijitihima). Inafanya kazi kama programu ya kompyuta (Electron) au kama programu binafsi ya wavuti (Docker).

- **Tafsiri** - kati ya lugha kwingi, pamoja na ustawi wa kiotomatiki wa chanzo
- **Andika upya** - sahihisha sarufi, boresha uwazi, fomali/si-fomali, fupisha, panua, teknical
- **Badilisha** - mandhari maalum ya AI; tengeneza na usimamize mandhari, lugha ya mpangilio ya kushawishiwa kwa kila mandhari
- **Historia** - historia kamili ya utekelezaji ikiwa na maandishi ya pembejeo/ya pato, kuchuja, na toa
- **Mifano na gharama** - chagua mifano kutoka kwa mtoa huduma yeyote uliyowekwa; ubao wa gharama na matumizi pamoja na kumbukumbu, muhtasari kwa kifaa/kitendo/siku
- **UI** - kipengele cha kieletroni kibadilishi (zaidi ya 30 lugha, msaada wa kuelima kulia-kushoto), fonti, ...
- **Kipindi cha wavuti** - msaada wa watumiaji wengi pamoja na majukumu ya msimamizi
- **Kompyuta** - programu ya Electron kwa Windows na Linux
- **Binafsi** - picha ya Docker kwa amd64 & arm64 (inayotumika kwenye Raspberry Pi)

Baada ya kusakinisha, tazama **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kwa mchoro kamili wa vipengele vyote.

<small>**Soma kwa lugha nyingine:** </small>

<small id="lang-list">[English](../README.md) · [Português (BR)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [jv](./README.jv.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **Kumbusho la tafsiri za UI na ya ushauri:** Lugha zote za kipengele cha mtumiaji isipokuwa Kiingereza (UK) 
> zimeletwa kwa kutumia mifano ya AI; maandishi yanaweza kuwa si sahihi au kuwa na makosa.

</small>

<br/>

<a id="table-of-contents"></a>
## Orodha ya Mada

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Picha za skrini](#screenshots)
- [Kuanza haraka](#quick-start)
- [Kupata ufunguo wa OpenRouter API](#getting-an-openrouter-api-key)
- [Uwekaji na mazingira](#configuration-and-environment)
- [Uendeshaji na muundo](#development-and-architecture)
- [Kuwasilisha matatizo](#reporting-issues)
- [Kuondoa wajibu](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Picha za skrini

**Kichagua cha lugha**

![Language selector](../images/screenshots/sw/language-selector.png)

**Tafsiri**

![Translate](../images/screenshots/sw/translate.png)

**Badilisha - redakti ya mandhari**

![Transform - prompt editor](../images/screenshots/sw/transform-prompt-edit.png)

**Ubao**

![Dashboard summary - usage](../images/screenshots/sw/dashboard-summary.png)

**Historia**

![History](../images/screenshots/sw/history.png)

**Mipangilio - uteuzi wa kifaa**

![Settings - model selection](../images/screenshots/sw/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## Mwanzo wa haraka

<details>
<summary><b>Docker (inapendekezwa kwa kushirikisha kwenye mwenendo wake)</b></summary>

<a id="docker"></a>

<br/>

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Badilisha `sk-or-your-key` na ufunguo wako wa [OpenRouter API](https://openrouter.ai/keys) (au weka ufunguo wa mtoa huduma mwingine; tazama [Uwekaji](#configuration-and-environment)). Fungua [http://localhost:5000](http://localhost:5000) na ubadilishe nenosiri la msimamizi kwa awali kabla ya kufungua huduma.

Weke ufunguo wa angalau mtoa huduma mmoja kupitia mazingira (kama mfano `OPENROUTER_API_KEY` kwa OpenRouter). Hamisha vigezo kwa kutumia `-e` au `docker compose` / `.env` ili siri zisitengenezwe katika picha. Ufunguo wa mtoa huduma **hauingii** katika UI ya wavuti; seva inasoma kutoka kwa mazingira.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Katika Docker, sifa za LLM zinawekwa kwa vigezo vya mazingira kama vile `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (sio katika UI ya wavuti). Kwenye kompyuta binafsi (Electron) unawezakilisha ufunguo katika **Mipangilio → API**.

<br/>

Au tumia Docker Compose:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Tazama [Uwekaji](#configuration-and-environment) kwa vigezo vyote vya mazingira, kama vile `PORT`, `CONFIG_PATH`, `TZ`, na ufunguo wa LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Saa ya muda wa seva (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

Tarehe na saa za kiolesura cha programu hutii **lugha na saa ya muda ya kivinjari**. Kwa **tabia ya upande wa seva** (kumbukumbu na vitu vingine vya kama hivyo), wenyevi hutumia kivinjari `TZ`. Chaguo-msingi ni `TZ=Europe/London`.

Ikiwa unataka kutumia saa ya muda tofauti, weka `TZ` katika faili yako ya Compose, kama mfano:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Au hamisha kama unavyofanya wanyevi (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Kwenye Linux wengi, unaweza nakilisha jina la saa ya muda wa mfumo kwa kutumia:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Orodha ya majina sahihi ya saa za muda inahifadhiwa kwenye [hifadhidata ya tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Pakua `Transrewrt Setup x.y.z.exe` ya hivi karibuni kutoka kwenye [Matoleo](https://github.com/wsj-br/transrewrt/releases).
- Endesha `.exe` na ufuata mchaguzi.
- Kuanzia kwanza: anza programu kutoka kwenye menyu ya Start au alama ya desktop.
- Ingiza ufunguo wako wa API katika **Mipangilio → API**. Unahitaji kusanidi angalau mtoa huduma mmoja; OpenRouter ni kawaida kwa mifano bila malipo.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Windows inaweza kuonyesha onyo moja ya haya ya usalama (kawaida kwa programu zisizosainiwa/za kibinafsi):
>   - **Udhibiti wa Akaunti ya Mtumiaji (UAC)**: "Je, ungependa kuruhusu programu hii kutoka kwa msomaji asiyesaini kufanya mabadiliko kwenye kifaa chako?" → Bonyeza **Ndio**.
>   - **Microsoft Defender SmartScreen**: "Windows ililinda kompyuta yako" → Bonyeza **Taarifa zaidi** → **Endesha bado**.
>
> Hii inatokea kwa sababu programu haijasainiwa na Microsoft au msomaji mkubwa—ni salama ikiwa imepakuliwa kutoka kwenye matoleo yetu rasmi ya GitHub (thibitisha checksums kwenye ukurasa wa [Matoleo](https://github.com/wsj-br/transrewrt/releases) pamoja na kila rasilimali).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Pakua `.AppImage` kwa CPU yako kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases) (`x64` kwa kompyuta za kawaida, `arm64` kwa ARM kiasi kikubwa, ikiwemo Raspberry Pi 4+), kisha:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Kwa x86_64/amd64 tumia jina la faili `x64`; kwa ARM64 tumia jina la `...-arm64.AppImage`.

Ingiza maneno ya siri yako ya API katika **Mipangilio → API**. Unahitaji kupanga mtoa huduma angalau mmoja; OpenRouter ni ya kawaida kwa kifaa bila malipo.

**Ujumbe wa konsoli:** Matayarisho ya Linux (`x64` na `arm64` AppImages) huwasha onyo la Node kwa sababu ya matumizi yasiyotumika tena katika terminal (kama vile moduli ya ndani `punycode`). Ikiwa Chromium inachapisha makosa ya GPU / EGL kama vile “GLES3 ni isiyotumika” lakini programu inafanya kazi, unaweza kuzima kwa kutoa usimamizi wa harware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Hii inatumika pia kwa amd64; badilisha jina la faili ili lilingane na kilichopakuliwa.

Kwenye Debian/Ubuntu, unaweza kuhitaji maktaba zaidi ya **runtime** ambazo zinahitajika na Chromium (hizi mara nyingi zimeshapatikana katika mifumo ya desktop kamili). Zinazotumika kama hivyo zinaweza kutumika ikiwa zinahitajika:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

badilisha `libasound2t64` kwa `libasound2` kwa ajili ya `arm64`. Mifumo ya chini au ya kibinafsi bado yanaweza kushindwa kwa sababu ya faili ya `.so` inayopotea. Pakia kifurushi kinaochukuliwa kwenye ujumbe wa hitilafu (zaidi za kawaida: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Baadhi ya mazingira, unaweza kuhitaji kuendesha programu kwa kutumia `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **TANGAZO**<br/>
> macOS haijawezeshwa kwa sasa. Transrewrt inapatikana kwa Windows, Linux, na Docker.

</details>

<br/>

Baada ya programu kuanza, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** ili kujifunza jinsi ya kutafsiri, kuandika upya, na kubadilisha maandishi, kudumisha maombi, na kupanga mifano.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Kupata ufunguo wa OpenRouter API

Transrewrt inasaidia mtoa huduma wengi wa AI. [OpenRouter](https://openrouter.ai) ni chaguo maarufu kwa sababu inakusanya mifano mingi kwa ufunguo mmoja na inatoa mifano bila malipo.

1. Jiandikishe au ingia kwenye [openrouter.ai](https://openrouter.ai).
2. Fungua ukurasa wa [Ufunguo](https://openrouter.ai/keys) na unda ufunguo mpya (wapa jina, na si lazima weke kikomo cha mkopo). Unaweza kutumia mifano bila malipo bila kuongeza mkopo.
3. **Kompyuta (Electron):** bindisha ufunguo katika **Mipangilio → API**. **Docker:** weka vigezo vya mazingira kama vile `OPENROUTER_API_KEY` (tazama [Kuanza Haraka](#quick-start)).

Usitumie kifaa cha OpenRouter **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kwa tafsiri, kuandika upya, au kubadilisha: kinarudisha payload za JSON za ombi, si maandishi yaliyotimia kwa kazi hizo. Angalia [Mipangilio → Mifano](USER-GUIDE.sw.md#models) katika Mwongozo wa Mtumiaji.

Unaweza pia kutumia mtoa huduma wengine (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) au kuendesha mifano kwenye [Ollama](https://ollama.com). Angalia [Ugawaji](#configuration-and-environment) kwa orodha kamili ya mtoa huduma waliopokelewa na vigezo vya mazingira.

</br>

> ⚠️ **ONYO**<br/>
> Ikiwa unatumia Ollama kutoka kifaa kingine, chombo, au huduma, kumbuka kuiwezesha Ollama kuweka mawasiliano ya nje (sio localhost tu).

<br/><br/>

<a id="configuration-and-environment"></a>
## Uwekezaji na mazingira

</br>

**Mahali pa faili ya usanidi**

| Uwekaji         | Mahali pa usanidi                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (tumia kiasi cha kuwanyima) |

<br/>

**Vigezo vya mazingira** (web/Docker tu; Electron hutumia faili ya usanidi ya kijitihima)

| Vigezo             | Maelezo                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Lango la kusikiliza kwa seva  (huwekwa kwa chaguomsingi `5000`)                                  |
| `CONFIG_PATH`        | Njia kwa faili ya usanidi (huwekwa kwa chaguomsingi `/app/data/config.json)                 |
| `TZ`                 | timezone for server-side time (logging, etc.) (defaults to  `Ulaya/Maskani`) |
| `OPENROUTER_API_KEY` | OpenRouter API key                                                           |
| `OPENAI_API_KEY`     | OpenAI API key                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API key                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API key                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API key                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API key                                                             |
| `GROQ_API_KEY`       | Groq API key                                                                 |
| `MISTRAL_API_KEY`    | Mistral API key                                                              |
| `OLLAMA_URL`         | Ollama base URL (e.g. `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | Kitufe cha API cha xAI                                                                  |

Wansasishi tu watoa wanaotumia. Vitambulisho vya kifaa vina nafasi (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, n.k.).

**Onesha gharama:** OpenRouter hurudisha gharama halisi iliyotajwa wakati inapofaa. Watoa wengine hutumia gharama **inazamiwa** kutoka kwa bei ya kifaa cha OpenRouter wakati kitufe cha OpenRouter kipatikana; bila hiyo, gharama isiyo ya OpenRouter inaweza kuonekana kama `0`. Matumizi ni mapema, si anwani.

<br/>

**Data na uhifadhi:** Kwa Docker, weka kiasi kwenye `/app/data` ili `config.json` na hifadhidata ya SQLite iweze kuendelea baada ya kupanga upya wa chombo. Bila kiasi, data yote hutolewa wakati chombo kimeacha kufanya kazi.

<br/>

**Uthibitishaji wa wavuti:**

- Msimamizi wa msingi: `admin` / `transrewrt26`.
- Simamia watumiaji kwenye **Mipangilio → Watumiaji**.
- Weka upya nenosiri: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **ONYO**<br/>
> Badilisha mara moja nenosiri la msimamizi wa msingi kwenye kila mtandao unaoweza kufikia.

<br/>

Mipangilio muhimu (font, mifano, lugha, n.k.) yanapatikana kwenye Mipangilio ya programu.

<br/><br/>

<a id="development-and-architecture"></a>
## Uundaji na muundo

- **Uundaji:** Weka, jenga, jaribu, na uanzishe (Electron, Web, Docker) - tazama **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Muundo na muhtasari wa mfumo:** Mipangilio ya folda, stack ya teknolojia, maamuzi ya uundaji - tazama **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Kutoa taarifa za matatizo

Fungua tatizo kwenye [GitHub](https://github.com/wsj-br/transrewrt/issues). Jumuisha jukwaa lako (Windows / Linux / Docker) na toleo la programu (linaloonekana kwenye mswada wa Kuhusu au kwenye ukurasa wa Matoleo).

<br/><br/>

<a id="disclaimer"></a>
## Kukopa dhima

Majina ya bidhaa na ishara husidhimana na wamiliki wake na hutumika kwa kutambua tu. Programu hii haifananishi na chakula kimepokelewa na lolote la vipengele vilivyoleta.

<br/><br/>

<a id="license"></a>
## Leseni

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
