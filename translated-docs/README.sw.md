---
translation_last_updated: '2026-03-31T23:47:39.104Z'
source_file_mtime: '2026-03-31T23:34:44.122Z'
source_file_hash: 4c9fbb976bec3529
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

Zana ya maandishi yenye nguvu za AI: tafsiri kati ya lugha, andika upya kwa mitindo tofauti, na ubadilishe kwa mandhari maalum — kutumia mtoa huduma wengi wa AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, na Ollama kijitihima). Inatumia kama programu ya kompyuta (Electron) au kama programu ya wavuti inayohifadhiwa kibinafsi (Docker).

- **Tafsiri** — kati ya lugha nyingi, na ukaguzi otomatiki wa lugha ya chanzo
- **Andika upya** — sahihi sarufi, boresha uwazi, muundo rasmi/lofani, fupisha, panua, kwa mitindo ya kiufundi
- **Badilisha** — mandhari maalum ya AI; tengeneza na usimamize mandhari, lugha ya mpangilio ya kuchagua kwa kila mandhari
- **Historia** — historia kamili ya utekelezaji ikiwa na maandishi ya pembejeo/ya pato, kupanga kwa kipengele, na toa
- **Mifano & gharama** — chagua mifano kutoka kwa mtoa huduma yeyote uliyowekwa; ubao wa gharama na matumizi kwa kumbukumbu, muhtasari kwa kifaa/kitendo/siku
- **UI** — kipindi cha lugha nyingi (zaidi ya 30, msaada wa RTL), fonti, ...
- **Kipindi cha wavuti** — msaada wa wanatumia wengi wenye majukumu ya msimamizi
- **Kipengee cha kompyuta** — programu ya Electron kwa Windows na Linux
- **Inahifadhiwa kibinafsi** — picha ya Docker kwa amd64 & arm64 (inayotayarishwa kwa Raspberry Pi)

Baada ya kusakinisha, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kwa muhtasari wa kipimo kikubwa cha vipengele vyote.

<small>**Soma katika lugha nyingine:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Kumbusho juu ya tafsiri za UI na ukweli:** Lugha zote za kipindi cha mtumiaji isipokuwa Kiingereza (Ukingereza) 
> zimeketwa kwa kutumia mifano ya AI; maandishi yanaweza kuwa si sahihi au kuwa na makosa.

</small>

<br/>

<a id="screenshots"></a>
## Picha za skrini

**Kichagua cha lugha**

![Language selector](../images/screenshots/sw/language-selector.png)

**Tafsiri**

![Translate](../images/screenshots/sw/translate.png)

**Badilisha - hariri ya mandhari**

![Transform - prompt editor](../images/screenshots/sw/transform-prompt-edit.png)

**Ubao**

![Dashboard summary — usage](../images/screenshots/sw/dashboard-summary.png)

**Historia**

![History](../images/screenshots/sw/history.png)

**Mipangilio - uteuzi wa kifaa**

![Settings - model selection](../images/screenshots/sw/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Yaliyomo

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Kuanza haraka](#quick-start)
- [Sakinisha](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Kuweka saa ya eneo](#configuring-the-timezone)
- [Kupata ufunguo wa OpenRouter API](#getting-an-openrouter-api-key)
- [Uwekaji na mazingira](#configuration-and-environment)
- [Maendeleo na utando](#development-and-architecture)
- [Ripoti ya matatizo](#reporting-issues)
- [Kuondoa wajibu](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Kuanza haraka

**Docker (inashauriwa kwa ajili ya kujitolea)**

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

<br/>

> ℹ️ **KUMBUKA**<br/>
> Katika Docker, akrediti za LLM zimewekwa kwa kutumia mabadiliko ya mazingira kama vile `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (sio katika UI ya wavuti). Kwenye desktop (Electron) unaweza kuweka akrediti katika **Mipangilio → API**.

<br/>

**Windows**

Pakua `Transrewrt Setup x.y.z.exe` ya hivi karibuni kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases), endesha kifaa cha kusanidi, kisha anza kutoka kwenye menyu ya Start au kifupisho cha dawati. Weka vifungu vako vya API katika **Mipangilio → API**. Unahitaji kusanidi angalau watoa huduma mmoja, OpenRouter ni kawaida kwa Mifano ya bure.

<br/>

**Linux**

Pakua `.AppImage` kwa CPU yako kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases) (`x64` kwa PC za kawaida, `arm64` kwa vifaa vingi vya ARM, ikiwemo Raspberry Pi 4+), kisha:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Weka vifungu vako vya API katika **Mipangilio → API**. Unahitaji kusanidi angalau watoa huduma mmoja, OpenRouter ni kawaida kwa Mifano ya bure.

**Ujumbe wa konsoli:** Matumizi ya Linux yaliyopakia (`x64` na `arm64` AppImages) huwasha onyo la Node kuhusu vitambulisho vilivyotolewa (kama vile moduli ya ndani `punycode`). Ikiwa Chromium inaonyesha makosa ya GPU / EGL kama vile “GLES3 ni isiyotumika” lakini programu inafanya kazi, unaweza kuzima kwa kutoa ushauri wa harware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Hii inatumika pia kwenye amd64; badilisha jina la faili ili linganishe na ulichopakua. Angalia [Sakinisho → Linux (Electron)](#linux-electron) kwa maelezo zaidi.

Kwenye Debian/Ubuntu labda utahitaji **maktaba ya runtime** zaidi ambazo Chromium inazitaka (mara nyingi tayari kwenye desktop kamili). Tumia **`libnotify4`** kwa arifa za desktop—**sio** `libnotify-dev` (hii ni kwa kujenga programu, si kwa kuendesha AppImage iliyopakia):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Picha rahisi au zilizobadilishwa bado zinaweza kushindwa kwa `.so` inayopokuwa; weka kifurushi kilicho na jina la makosa (ziada za kawaida: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Baadhi ya mazingira yanahitaji FUSE kuendesha AppImages (kama vile `libfuse2` kwenye Ubuntu 22.04+), au tumia `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **KUMBUKA**<br/>
> macOS haijathibitishwa. Transrewrt inapatikana kwa Windows, Linux, na Docker.

<br/>

Mara programu inapoanza, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kujifunza jinsi ya kutafsiri, kuandika upya, na kubadilisha maandishi, kudhibiti maelezo, na kusanidi Mifano.

<br/><br/>

<a id="installation"></a>
## Usakinishaji

<a id="windows-electron"></a>
### Windows (Electron)

- Pakua kifaa cha kusanidi cha hivi karibuni kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases).
- Endesha `.exe` na ufuate mchakato wa kusanidi.
- Uwiano wa kwanza: anza programu kutoka kwenye menyu ya Start au kifupisho cha dawati.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Windows inaweza kuonyesha moja ya hizi onyo za usalama (kawaida kwa programu zisizothibitishwa/huru):
>   - **Udhibiti wa Akaunti ya Mtumiaji (UAC)**: "Je, unataka kuruhusu programu hii kutoka kwa mtengenezaji asiyejulikana kufanya mabadiliko kwenye kifaa chako?" → Bonyeza **Ndio**.
>   - **Microsoft Defender SmartScreen**: "Windows ilihifadhi PC yako" → Bonyeza **Maelezo zaidi** → **Endelea kufanya**.
>
> Hii hutokea kwa sababu programu haijaandikwa na Microsoft au mtengenezaji mkubwa - ni salama ikiwa imepakuliwa kutoka kwa machofu rasmi ya GitHub yetu
>  (thibitisha checksum ya SHA256 hapa chini).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Pakua `.AppImage` inayofaa (`x64` au `arm64`) kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases).
- Endesha: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` kwenye x86_64/amd64, au tumia jina la faili `...-arm64.AppImage` kwenye ARM64.
- **Vifaa vya Debian/Ubuntu** (Electron/Chromium; sawa na [Kuanza haraka → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — tumia **`libnotify4`**, si `libnotify-dev`. Kwenye mfumo mdogo, weka vifaa vya `.so` vilivyotajwa kwenye terminal; vifaa kama vile `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` vinahitajika mara kwa mara. AppImage inaweza kuhitaji `libfuse2` (Ubuntu 22.04+) au `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Ujumbe wa GPU:** Chromium unaweza kuweka ujumbe wa GPU au makosa ya awali ya EGL kwenye baadhi ya mifumo (hasa ARM); programu bado inaweza kufanya kazi kama kawaida. Ili kuepuka ujumbe huo, endesha bila kasi ya hardware: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (au jina lako la `arm64`).

<br/>

<a id="docker"></a>
### Docker

- Pakua: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Weka angalau moja ya fomu ya mtoa huduma kupitia mazingira (kwa mfano `OPENROUTER_API_KEY` kwa OpenRouter). Hamisha kigezo kwa kutumia `-e` au `docker compose` / `.env` ili siri zisizikumbukumbu zisijumuishwe katika picha.
- Fomu za mtoa huduma **hazitumiki** kwenye UI ya wavuti; seva inasoma kutoa kwa mazingira.

Mfano - kiasi kilichopewa jina kwa ajili ya uwezo wa kudumu (fomu ya OpenRouter kupitia mazingira):

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
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Angalia [Configuration](#configuration-and-environment) kwa kigezo chote cha mazingira, kama vile `PORT`, `CONFIG_PATH`, `TZ`, na fomu za LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>
### Kusanidi saa

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

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Kupata ufunguo wa API ya OpenRouter

Transrewrt inasaidia mtoa huduma wengi wa AI. [OpenRouter](https://openrouter.ai) ni chaguo maarufu kwa sababu inakusanya mifano mingi chini ya fomu moja na inatoa mifano bure.

1. Jiandikishe au ingia kwenye [openrouter.ai](https://openrouter.ai).
2. Fungua ukurasa wa [Fomu](https://openrouter.ai/keys) na unda fomu mpya (wapa jina, na si lazima weke kikomo cha mkopo). Unaweza kutumia mifano bure bila kuongeza mkopo.
3. **Kivinjari (Electron):** bindisha fomu kwenye **Mipangilio → API**. **Docker:** weka kigezo cha mazingira kama vile `OPENROUTER_API_KEY` (angalia [Kuanza Haraka](#quick-start)).

Usitumie **Body Builder** model ya OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kwa ajili ya tafsiri, kuandika upya, au kubadilisha: inarudisha vipaketi vya ombi la JSON, sio maandishi yaliyokamilika kwa ajili ya kazi hizo. Angalia [Mipangilio → Mifano](USER-GUIDE.sw.md#models) katika Mwongozo wa Mtumiaji.

Unaweza pia kutumia mtoa huduma mengine (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) au kuendesha mifano kivinjari kwa kutumia [Ollama](https://ollama.com). Angalia [Configuration](#configuration-and-environment) kwa orodha kamili ya mtoa huduma waliopokelewa na kigezo cha mazingira.

> ⚠️ **ONYO**<br/>
> Ikiwa unatumia Ollama kutoka kifaa, kontena, au huduma nyingine, kumbuka kusanidi Ollama ili iruhusu muunganisho wa nje (sio localhost-pekee).

Kwa ajili ya vikwazo, BYOK, na zaidi, tazama [uthibitishaji wa OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Usanidi na mazingira

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

**Wanafunzi:** Baada ya kupata mabadiliko ambayo yanabadilisha usanidi wa kitufe kimoja uliopita, weka upya au uunganishe `data/config.json` na muundo mpya wa chaguo-msingi kutoka `src/config-defaults/config_default.json` ikiwa faili yako ya kijitihima bado inatumia mashamba yaliyofutwa (`api_key`, `api_url`, chaguzi za wavuti).

<br/>

**Uthibitishaji wa wavuti:**

- Msimamizi wa chaguo-msingi: `admin` / `transrewrt26`.
- Dhibiti watumiaji kwenye **Mipangilio → Watumiaji**.
- Weka upya nenosiri: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (kutoka kwa chanzo: `pnpm run reset-web-password -- <username> <new-password>`)

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
