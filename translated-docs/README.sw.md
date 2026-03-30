---
translation_last_updated: '2026-03-30T00:46:30.250Z'
source_file_mtime: '2026-03-29T23:51:36.506Z'
source_file_hash: fa17b974cbf42a93
translation_language: sw
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Toleo"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Leseni: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Jukwaa">
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

<small>**Soma katika lugha zingine:** </small>
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
## Orodha ya Mada

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
## Anwani ya haraka

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
> Katika Docker, vifungu vya LLM vinawekwa kwa kutumia vigezo vya mazingira kama vile `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (sio katika kiolesura cha mtandao). Kwenye dawati (Electron) unasanidi vifungu katika **Mipangilio → API**.

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

Kwenye Debian/Ubuntu unaweza kuhitaji kusanidi vizingiti vya ziada kwanza:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Angalia [Usanidi → Linux](#linux-electron) kwa maelezo.

<br/>

> ℹ️ **KUMBUKA**<br/>
> macOS haisaidiwi kwa sasa. Transrewrt inapatikana kwa Windows, Linux, na Docker.

<br/>

Mara programu inapoanza, angalia **[Mwongozo wa Mtumiaji](USER-GUIDE.sw.md)** kujifunza jinsi ya kutafsiri, kuandika upya, na kubadilisha maandishi, kudhibiti maelezo, na kusanidi Mifano.

<br/><br/>

<a id="installation"></a>
## Usanidi

<a id="windows-electron"></a>
### Windows (Electron)

- Pakua kifaa cha kusanidi cha hivi karibuni kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases).
- Endesha `.exe` na ufuate mchakato wa kusanidi.
- Uwiano wa kwanza: anza programu kutoka kwenye menyu ya Start au kifupisho cha dawati.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Windows inaweza kuonyesha moja ya maonyo haya ya usalama (ni kawaida kwa programu zisizo-sainiwi/za kujitolea):
>   - **Udhibiti wa Akaunti ya Mtumiaji (UAC)**: "Je, unataka kuruhusu programu hii kutoka kwa mchongaji asiyejulikana kufanya mabadiliko kwenye kifaa chako?" → Bonyeza **Ndio**.
>   - **Microsoft Defender SmartScreen**: "Windows imelinda PC yako" → Bonyeza **Maelezo zaidi** → **Endesha kwa njia yoyote**.
>
> Hii hutokea kwa sababu programu haijasainiwi na Microsoft au mchongaji mkuu—ni salama ikiwa imepakuliwa kutoka kwa matoleo yetu ya GitHub rasmi
>  (thibitisha checksum ya SHA256 hapa chini).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Pakua `.AppImage` inayofaa (`x64` au `arm64`) kutoka [Matoleo](https://github.com/wsj-br/transrewrt/releases).
- Endesha: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` kwenye x86_64/amd64, au tumia jina la faili `...-arm64.AppImage` kwenye ARM64.
- Zana za ziada (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Angalia [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kwa maelezo zaidi.

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
### Kuweka saa ya eneo

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
## Kupata fomu ya OpenRouter API

Transrewrt inasaidia mtoa huduma wengi wa AI. [OpenRouter](https://openrouter.ai) ni chaguo maarufu kwa sababu inakusanya mifano mingi chini ya fomu moja na inatoa mifano bure.

1. Jiandikishe au ingia kwenye [openrouter.ai](https://openrouter.ai).
2. Fungua ukurasa wa [Fomu](https://openrouter.ai/keys) na unda fomu mpya (wapa jina, na si lazima weke kikomo cha mkopo). Unaweza kutumia mifano bure bila kuongeza mkopo.
3. **Kivinjari (Electron):** bindisha fomu kwenye **Mipangilio → API**. **Docker:** weka kigezo cha mazingira kama vile `OPENROUTER_API_KEY` (angalia [Kuanza Haraka](#quick-start)).

Usitumie kifaa cha OpenRouter cha **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kwa tafsiri, kuandika upya, au kubadilisha: kinarudisha payload za JSON za ombi, si maandishi yaliyomalizika kwa ajili ya zoezi hizo. Angalia [Mipangilio → Mifano](USER-GUIDE.sw.md#models) kwenye Mwongozo wa Mtumiaji.

Unaweza pia kutumia mtoa huduma mengine (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) au kuendesha mifano kivinjari kwa kutumia [Ollama](https://ollama.com). Angalia [Configuration](#configuration-and-environment) kwa orodha kamili ya mtoa huduma waliopokelewa na kigezo cha mazingira.

> ⚠️ **ONAKIWA**<br/>
> Ikiwa unatumia Ollama kutoka kifaa kingine, wanyama, au huduma, kumbuka kuweka Ollama kuitii muunganisho kutoka nje (sio localhost tu).

Kwa ajili ya vikwazo, BYOK, na zaidi, tazama [uthibitishaji wa OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Uwiano na mazingira

**Mahali pa faili ya usanidi**

| Uwekaji | Mahali pa usanidi |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (tumia kiasi cha kudumu) |

<br/>

**Vigezo vya mazingira** (web/Docker tu; Electron hutumia faili ya usanidi ya kijitihima)

| Vigezo | Chaguo-msingi | Maelezo |
| ---------------- | ----------------------- | ----------- |
| `PORT` | `5000` | Lango la kusikiliza kwa seva |
| `CONFIG_PATH` | `/app/data/config.json` | Njia kwa faili ya usanidi |
| `TZ` | `Europe/London` | Zona ya wakati ya IANA kwa wakati wa upande wa seva (kujikumbusha, n.k.); UI bado inafuata kivinjari. Angalia [Docker → zona ya wakati](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(hakuna)* | Kitufe cha API cha OpenRouter |
| `OPENAI_API_KEY` | *(hakuna)* | Kitufe cha API cha OpenAI |
| `CEREBRAS_API_KEY` | *(hakuna)* | Kitufe cha API cha Cerebras |
| `ANTHROPIC_API_KEY` | *(hakuna)* | Kitufe cha API cha Anthropic |
| `GOOGLE_API_KEY` | *(hakuna)* | Kitufe cha API cha Google Gemini |
| `DEEPSEEK_API_KEY` | *(hakuna)* | Kitufe cha API cha DeepSeek |
| `GROQ_API_KEY` | *(hakuna)* | Kitufe cha API cha Groq |
| `MISTRAL_API_KEY` | *(hakuna)* | Kitufe cha API cha Mistral |
| `OLLAMA_URL` | *(hakuna)* | URL ya msingi wa Ollama (kama vile `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(hakuna)* | Kitufe cha API cha xAI |

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
> Badilisha mara moja nenosiri la msimamizi wa chaguo-msingi kwenye kila kivinjari ambacho linapatikana kwenye mtandao.

<br/>

Mipangilio muhimu (fonti, mifano, lugha, n.k.) yanapatikana kwenye Mipangilio ya programu.

<br/><br/>

<a id="development-and-architecture"></a>
## Uundaji na architekia

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
