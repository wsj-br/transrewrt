---
translation_last_updated: '2026-04-02T12:43:49.783Z'
source_file_mtime: '2026-04-02T12:39:14.838Z'
source_file_hash: 0826245f792850f3
translation_language: sw
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Bendera"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/toleo-1.1.1-blue" alt="Toleo"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/leseni-Apache%202.0-green" alt="Leseni: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platfomu-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platfomu">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Zana ya maandishi yenye nguvu za AI: tafsiri kati ya lugha, andika upya kwa mitindo tofauti, na ubadilishe kwa mandhari maalum - kutumia mtoa huduma wengi wa AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, na Ollama kijitihima). Inatumia kama programu ya kompyuta (Electron) au kama programu ya wavuti inayohifadhiwa kibinafsi (Docker).

- **Tafsiri** - kati ya lugha nyingi, na ukaguzi otomatiki wa lugha ya chanzo
- **Andika upya** - sahihi sarufi, boresha uwazi, muundo rasmi/lofani, fupisha, panua, kwa mitindo ya kiufundi
- **Badilisha** - mandhari maalum ya AI; tengeneza na usimamize mandhari, lugha ya mpangilio ya kuchagua kwa kila mandhari
- **Historia** - historia kamili ya utekelezaji ikiwa na maandishi ya pembejeo/ya pato, kupanga kwa kipengele, na toa
- **Mifano & gharama** - chagua mifano kutoka kwa mtoa huduma yeyote uliyowekwa; ubao wa gharama na matumizi kwa kumbukumbu, muhtasari kwa kifaa/kitendo/siku
- **UI** - kipindi cha lugha nyingi (zaidi ya 30, msaada wa RTL), fonti, ...
- **Kipindi cha wavuti** - msaada wa wanatumia wengi wenye majukumu ya msimamizi
- **Kipengee cha kompyuta** - programu ya Electron kwa Windows na Linux
- **Inahifadhiwa kibinafsi** - picha ya Docker kwa amd64 & arm64 (inayotayarishwa kwa Raspberry Pi)

Baada ya kusakinisha, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kwa muhtasari wa kipimo kikubwa cha vipengele vyote.

<small>**Soma katika lugha nyingine:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Kumbusho juu ya tafsiri za UI na ukweli:** Lugha zote za kipindi cha mtumiaji isipokuwa Kiingereza (Ukingereza) 
> zimeketwa kwa kutumia mifano ya AI; maandishi yanaweza kuwa si sahihi au kuwa na makosa.

</small>

<br/>

<a id="table-of-contents"></a>
## Yaliyomo

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Picha za skrini](#screenshots)
- [Anza haraka](#quick-start)
- [Kupata ufunguo wa API wa OpenRouter](#getting-an-openrouter-api-key)
- [Mipangilio na mazingira](#configuration-and-environment)
- [Uboreshaji na usanidi](#development-and-architecture)
- [Kuripoti masuala](#reporting-issues)
- [Kanusho](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Picha za skrini

**Kichagua cha lugha**

![Language selector](../images/screenshots/sw/language-selector.png)

**Tafsiri**

![Translate](../images/screenshots/sw/translate.png)

**Badilisha - hariri ya mandhari**

![Transform - prompt editor](../images/screenshots/sw/transform-prompt-edit.png)

**Ubao**

![Dashboard summary - usage](../images/screenshots/sw/dashboard-summary.png)

**Historia**

![History](../images/screenshots/sw/history.png)

**Mipangilio - uteuzi wa kifaa**

![Settings - model selection](../images/screenshots/sw/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## Kuanza haraka

<details>
<summary><b>Docker (inashauriwa kwa ajili ya kujitolea)</b></summary>

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

Badilisha `sk-or-your-key` kufungua [kifungu cha API cha OpenRouter](https://openrouter.ai/keys) (au weka vifungu vya watoa huduma wengine; angalia [Mipangilio](#configuration-and-environment)). Fungua [http://localhost:5000](http://localhost:5000) na ubadilishe nenosiri la msimamizi la chaguo-msingi kabla ya kufichua huduma.

Weka angalau ufunguo mmoja wa mtoa huduma kupitia mazingira (kwa mfano `OPENROUTER_API_KEY` kwa OpenRouter). Pitisha vigezo na `-e` au `docker compose` / `.env` ili siri zisizochongwa kwenye picha. Ufunguo wa mtoa huduma **hauingiiwi** kwenye UI ya mtandao; seva inasoma kutoka mazingira.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Katika Docker, akrediti za LLM zimewekwa kwa kutumia mabadiliko ya mazingira kama vile `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (sio katika UI ya wavuti). Kwenye desktop (Electron) unaweza kuweka akrediti katika **Mipangilio → API**.

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

Angalia [Configuration](#configuration-and-environment) kwa kigezo chote cha mazingira, kama vile `PORT`, `CONFIG_PATH`, `TZ`, na fomu za LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Saa ya seva (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

Saa na tarehe za kiolesura cha programu zinaziamua **browser** na saa ya eneo lake. Kwa ajili ya **tabia ya upande wa seva** (kutambua na vitu vingine), wanyama hutumia kigezo cha mazingira `TZ`. Chaguo-msingi ni `TZ=Europe/London`.

Ikiwa unataka kutumia saa ya eneo nyingine, weka `TZ` katika faili yako ya Compose, kwa mfano:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Au hamisha kigezo wakati wa kuendesha wanyama (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Kwenye Linux wengi, unaweza nakili jina la saa ya mfumo kwa kutumia:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Orodha ya majina sahihi ya saa ya eneo inahifadhiwa kwenye [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Pakua `Transrewrt Setup x.y.z.exe` ya hivi karibuni kutoka kwa [Matoleo](https://github.com/wsj-br/transrewrt/releases).
- Zindua `.exe` na fuata kiwanja cha ufunguaji.
- Ufungue wa kwanza: anza programu kutoka kwenye menyu ya Kuanza au kifupisho cha dawati.
- Ingiza ufunguo wako wa API katika **Mipangilio → API**. Unahitaji kusanidi angalau mtoa huduma mmoja; OpenRouter ni kawaida kwa mifano ya bure.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Windows inaweza kuonyesha moja ya maonyo haya ya usalama (ni kawaida kwa programu zisizo na saini/za kujitegemea):
>   - **Udhibiti wa Akaunti ya Mtumiaji (UAC)**: "Je, unataka kuruhusu programu hii kutoka kwa mchuzi asiyejulikana kufanya mabadiliko kwenye kifaa chako?" → Bofya **Ndio**.
>   - **Microsoft Defender SmartScreen**: "Windows imelinda PC yako" → Bofya **Maelezo zaidi** → **Endelea kwa namna yoyote**.
>
> Hii hutokea kwa sababu programu haijasainiwa na Microsoft au mchuzi mkuu-ni salama ikiwa imepakuliwa kutoka kwa matoleo yetu ya GitHub rasmi (thibitisha checksums kwenye ukurasa wa [Matoleo](https://github.com/wsj-br/transrewrt/releases) pamoja na kila kipengele).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Pakua `.AppImage` kwa CPU yako kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases) (`x64` kwa PC za kawaida, `arm64` kwa vifaa vingi vya ARM, ikiwemo Raspberry Pi 4+), kisha:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Kwenye x86_64/amd64 tumia jina la faili la `x64`; kwenye ARM64 tumia jina la `...-arm64.AppImage`.

Ingiza ufunguo wako wa API katika **Mipangilio → API**. Unahitaji kusanidi angalau mtoa huduma mmoja; OpenRouter ni kawaida kwa mifano ya bure.

**Ujumbe wa konsoli:** Matumizi ya Linux yaliyopakia (`x64` na `arm64` AppImages) huwasha onyo la Node kuhusu vitambulisho vilivyotolewa (kama vile moduli ya ndani `punycode`). Ikiwa Chromium inaonyesha makosa ya GPU / EGL kama vile “GLES3 ni isiyotumika” lakini programu inafanya kazi, unaweza kuzima kwa kutoa ushauri wa harware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Hii inatumika kwenye amd64 pia; badilisha jina la faili ili liendane na kile ulichopakua.

Kwenye Debian/Ubuntu, unaweza kuhitaji maktaba za ziada za **runtime** zinazohitajika na Chromium (hizi mara nyingi zipo tayari kwenye ufungaji wa dawati kamili). Zindisha amri hapo chini ikiwa inahitajika:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

badilisha `libasound2t64` na `libasound2` kwa `arm64`. Ufungaji wa kiwango cha chini au maalum bado inaweza kushindwa na faili ya `.so` iliyokosekana. Sakinisha kifungu kilichoitwa kwenye ujumbe wa kosa (viongozo vya kawaida: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Katika mazingira yanayofaa, unaweza kuhitaji kuzindua programu kwa kutumia `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **KUMBUKA**<br/>
> macOS haijathibitishwa. Transrewrt inapatikana kwa Windows, Linux, na Docker.

</details>

<br/>

Mara programu inapoanza, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kujifunza jinsi ya kutafsiri, kuandika upya, na kubadilisha maandishi, kudhibiti maelezo, na kusanidi Mifano.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Kupata ufunguo wa API ya OpenRouter

Transrewrt inasaidia mtoa huduma wengi wa AI. [OpenRouter](https://openrouter.ai) ni chaguo maarufu kwa sababu inakusanya mifano mingi chini ya fomu moja na inatoa mifano bure.

1. Jiandikishe au ingia kwenye [openrouter.ai](https://openrouter.ai).
2. Fungua ukurasa wa [Fomu](https://openrouter.ai/keys) na unda fomu mpya (wapa jina, na si lazima weke kikomo cha mkopo). Unaweza kutumia mifano bure bila kuongeza mkopo.
3. **Kivinjari (Electron):** bindisha fomu kwenye **Mipangilio → API**. **Docker:** weka kigezo cha mazingira kama vile `OPENROUTER_API_KEY` (angalia [Kuanza Haraka](#quick-start)).

Usitumie **Body Builder** model ya OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kwa ajili ya tafsiri, kuandika upya, au kubadilisha: inarudisha vipaketi vya ombi la JSON, sio maandishi yaliyokamilika kwa ajili ya kazi hizo. Angalia [Mipangilio → Mifano](USER-GUIDE.sw.md#models) katika Mwongozo wa Mtumiaji.

Unaweza pia kutumia mtoa huduma mengine (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) au kuendesha mifano kivinjari kwa kutumia [Ollama](https://ollama.com). Angalia [Configuration](#configuration-and-environment) kwa orodha kamili ya mtoa huduma waliopokelewa na kigezo cha mazingira.

</br>

> ⚠️ **ONYO**<br/>
> Ikiwa unatumia Ollama kutoka kifaa, kontena, au huduma nyingine, kumbuka kusanidi Ollama ili iruhusu muunganisho wa nje (sio localhost-pekee).

<br/><br/>

<a id="configuration-and-environment"></a>
## Usanidi na mazingira

</br>

**Mahali pa faili ya usanidi**

| Uwekaji | Mahali pa usanidi |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (tumia kiasi cha kudumu) |

<br/>

**Vigezo vya mazingira** (web/Docker tu; Electron hutumia faili ya usanidi ya kijitihima)

| Kitu             | Maelezo                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Lango la kusikiliza la seva (chaguo-msingi ni `5000`)                                  |
| `CONFIG_PATH`        | Njia ya faili la usanidi (chaguo-msingi ni `/app/data/config.json)                 |
| `TZ`                 | saa za eneo kwa ajili ya wakati wa seva (kuandika kumbukumbu, n.k.) (chaguo-msingi ni  `Europe/London`) |
| `OPENROUTER_API_KEY` | Ufunguo wa API ya OpenRouter                                                           |
| `OPENAI_API_KEY`     | Ufunguo wa API ya OpenAI                                                               |
| `CEREBRAS_API_KEY`   | Ufunguo wa API ya Cerebras                                                             |
| `ANTHROPIC_API_KEY`  | Ufunguo wa API ya Anthropic                                                            |
| `GOOGLE_API_KEY`     | Ufunguo wa API ya Google Gemini                                                        |
| `DEEPSEEK_API_KEY`   | Ufunguo wa API ya DeepSeek                                                             |
| `GROQ_API_KEY`       | Ufunguo wa API ya Groq                                                                 |
| `MISTRAL_API_KEY`    | Ufunguo wa API ya Mistral                                                              |
| `OLLAMA_URL`         | URL ya msingi wa Ollama (k.m. `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | Ufunguo wa API ya xAI                                                                  |

Washa wizara tu ambazo unayotumia. Vitambulisho vya kifaa vina nafasi ya jina (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, n.k.).

**Onesha gharama:** OpenRouter hurudisha gharama halisi iliyotajwa pale inapofaa. Watokeaji wengine hutumia gharama **inayozamiwa** kutoka kwa bei ya kifaa cha OpenRouter ikiwa kitufe cha OpenRouter kiko; bila hiyo, gharama isiyo ya OpenRouter inaweza kuonekana kama `0`. Takwimu zinazozamiwa zisichukuliwa kama anwani.

<br/>

**Data na udumu:** Kwa Docker, weka kiasi cha kudumu kwenye `/app/data` ili `config.json` na hifadhidata ya SQLite zilinde baada ya kuanza upya wa chombo. Bila kiasi, data yote hutolewa wakati wa kuzima chombo.

<br/>

**Uthibitishaji wa wavuti:**

- Msimamizi wa chaguo-msingi: `admin` / `transrewrt26`.
- Simamia watumiaji katika **Mipangilio → Watumiaji**.
- Rekebisha nenosiri: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **ONYO**<br/>
> Badilisha nenosiri la msimamizi mara moja kwenye kila kikoa kinachopatikana kwenye mtandao.

<br/>

Mipangilio muhimu (fonti, mifano, lugha, n.k.) yanapatikana kwenye Mipangilio ya programu.

<br/><br/>

<a id="development-and-architecture"></a>
## Maendeleo na utando

- **Uundaji:** Weka, jenga, jaribu, na uweke (Electron, Web, Docker) - tazama **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Muhtasari wa architekia na mfumo:** Mwisho wa folda, stack ya teknolojia, maamuzi ya uundaji - tazama **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Kutoa taarifa za matatizo

Fungua tatizo kwenye [GitHub](https://github.com/wsj-br/transrewrt/issues). Jumuisha jukwaa lako (Windows / Linux / Docker) na toleo la programu (linaloonyeshwa kwenye kisanduku cha Kuhusu au kwenye ukurasa wa Matoleo).

<br/><br/>

<a id="disclaimer"></a>
## Deni

Majina ya bidhaa na ishara husidhimana na wamiliki wake na hutumika kwa kutambua tu. Programu hii haifananishi na chakula kimepokelewa na lolote la vipengele vilivyoleta.

<br/><br/>

<a id="license"></a>
## Leseni

Haki za kuleta © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
