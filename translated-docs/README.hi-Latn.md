<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-sanchalit text tool: Bhashayein ke beech Anuvaad karein, alag-alag shailiyon mein Phir se likhen, aur custom prompts ke saath Badlen - kayi AI providers (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, kisi bhi OpenAI-compatible provider, aur local Ollama) ka upyog karte hue. Desktop app (Electron) ke roop mein ya self-hosted web app (Docker) ke roop mein chalta hai.

- **Anuvaad karein** - darjanon bhashaon ke beech, automatic source detection ke saath
- **Phir se likhen** - grammar theek karein, spashtata sudharein, aupcharik/anaupcharik, chhota karein, vistaar karein, takniki
- **Badlen** - custom AI prompts; prompts banayein aur prabandhit karein, har prompt ke liye vaikalpik lakshya bhasha
- **Shabdakosh** - har bhasha jodi ke liye source/lakshya shabd jodein store karein aur anuvaad ke dauraan unhein apply karein taaki chune gaye shabd sthir rahen; Settings mein shabdon ka prabandhan karein (jodein/edit karein/delete karein, CSV/XLSX import aur template export)
- **Itihaas** - input/output text, filtering, aur export ke saath poora execution itihaas
- **Aasaan & Unnat** - Aasaan mode (default): provider ke anusaar curated presets (**Muft (OpenRouter)**, **Standard**, **Unnat**, **Takniki**; keval vah presets dikhte hain jinmein chune gaye provider ke liye mapping ho) model IDs chune bina; Unnat mode: aapke configured providers se poori model list
- **Models & laagat** - laagat aur upyog dashboards (Saraansh, Model ke anusaar, Sabhi Calls) export ke saath; OpenRouter vaastavik kharch dikhata hai, anya providers anumaanit upyog karte hain
- **UI** - bahubhashi interface (30+ bhashayein, RTL support), fonts, ...
- **Web mode** - admin roles ke saath multi-user support
- **Desktop** - Windows aur Linux ke liye Electron app
- **Self-hosted** - amd64 & arm64 (Raspberry Pi-ready) ke liye Docker image

Install hone ke baad, sabhi features ke poore walkthrough ke liye [**User Guide**](USER-GUIDE.hi-Latn.md) dekhen.

<small>**Anya bhashaon mein padhen:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [Hindi (Roman)](./README.hi-Latn.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [پنجابی](./README.pa-PK.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **UI aur documentation anuwadon par dhyan dein:** Original English (UK) ko chhodkar sabhi interface bhashaon ka anuvaad AI models ka upyog karke kiya gaya tha;
> shabdon mein ashuddhi ya galatiyan ho sakti hain.

</small>

<br/>

<a id="table-of-contents"></a>
## Vishay Suchi

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Screenshots](#screenshots)
- [Turant shuru karein](#quick-start)
- [OpenRouter API key prapt karna](#getting-an-openrouter-api-key)
- [Configuration aur environment](#configuration-and-environment)
- [Development aur architecture](#development-and-architecture)
- [Samasyaon ki report karna](#reporting-issues)
- [Disclaimer](#disclaimer)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Screenshots

**Bhasha chunne wala**

![Language selector](../images/screenshots/hi-Latn/language-selector.png)

**Anuvaad karein**

![Translate](../images/screenshots/hi-Latn/translate.png)

**Badlen - prompt editor**

![Transform - prompt editor](../images/screenshots/hi-Latn/transform-prompt-edit.png)

**Dashboard**

![Dashboard summary - usage](../images/screenshots/hi-Latn/dashboard-summary.png)

**Itihaas**

![History](../images/screenshots/hi-Latn/history.png)

**Settings - model selection**

![Settings - model selection](../images/screenshots/hi-Latn/settings-general.png)

<br/><br/>

<a id="quick-start"></a>
## Turant shuru karen

<details>
<summary><b>Docker (self-hosting ke liye anushansit)</b></summary>

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

`sk-or-your-key` ko apni [OpenRouter API key](https://openrouter.ai/keys) se badlen (ya anya provider keys set karen; [Configuration](#configuration-and-environment) dekhen). [http://localhost:5000](http://localhost:5000) kholen aur service ko expose karne se pehle default admin password badlen.

Environment ke madhyam se kam se kam ek provider key set karen (udaharan ke liye OpenRouter ke liye `OPENROUTER_API_KEY`). Variables ko `-e` ya `docker compose` / `.env` ke saath pass karen taki secrets image mein bake na hon. Provider keys web UI mein darj **nahi** ki jaati hain; server unhe environment se padhta hai.

<br/>

> ℹ️ **NOTE**<br/>
> Docker mein, LLM credentials environment variables jaise ki `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (web UI mein nahi) ke saath set kiye jaate hain. Desktop (Electron) par aap **Settings → API** mein keys configure karte hain.

<br/>

Ya Docker Compose ka upyog karen:

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Sabhi environment variables ke liye [Configuration](#configuration-and-environment) dekhen, jaise ki `PORT`, `CONFIG_PATH`, `TZ`, aur LLM keys (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Server timezone (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

Application user interface ki tarikh aur samay **browser** ke locale aur timezone ka palan karte hain. **Server-side** vyavahar (logging aur is tarah ke) ke liye, container `TZ` environment variable ka upyog karta hai. Default `TZ=Europe/London` hai.

Dusre timezone ka upyog karne ke liye, apne Compose file mein `TZ` set karen, udaharan ke liye:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Ya container chalate samay ise pass karen (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Kai Linux hosts par aap system timezone naam ko iske saath copy kar sakte hain:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Valid timezone naamon ki ek suchi [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia) mein rakhi jaati hai.

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- [Releases](https://github.com/wsj-br/transrewrt/releases) se latest `Transrewrt Setup x.y.z.exe` download karein.
- `.exe` run karein aur installer ko follow karein.
- Pehli baar run karein: Start menu ya desktop shortcut se app shuru karein.
- Apni API keys **Settings → API** mein enter karein. Aapko kam se kam ek provider configure karna hoga; OpenRouter muft models ke liye common hai.

<br/>

> ℹ️ **NOTE**<br/>
> Windows inmein se koi ek security warning dikha sakta hai (unsigned/indie apps ke liye normal):
> - **User Account Control (UAC)**: "Kya aap is app ko ek agyat publisher se apne device mein badlav karne ki anumati dena chahte hain?" → **Haan** par click karein.
> - **Microsoft Defender SmartScreen**: "Windows ne aapke PC ko surakshit rakha" → **More info** → **Run anyway** par click karein.
>
> Aisa isliye hota hai kyunki app Microsoft ya kisi bade publisher dwara signed nahi hai - agar ise hamari official GitHub releases se download kiya gaya hai to yeh surakshit hai (har asset ke saath [Releases](https://github.com/wsj-br/transrewrt/releases) page par checksums verify karein).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

[Releases](https://github.com/wsj-br/transrewrt/releases) se apne CPU ke liye `.AppImage` download karein (typical PCs ke liye `x64`, kai ARM devices ke liye `arm64`, jismein Raspberry Pi 4+ bhi shamil hai), phir:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

x86_64/amd64 par `x64` filename ka upyog karein; ARM64 par `...-arm64.AppImage` naam ka upyog karein.

Apni API keys **Settings → API** mein enter karein. Aapko kam se kam ek provider configure karna hoga; OpenRouter muft models ke liye common hai.

**Console messages:** Packaged Linux builds (`x64` aur `arm64` AppImages) terminal mein Node deprecation warnings ko dabate hain (jaise ki built-in `punycode` module). Agar Chromium GPU / EGL errors print karta hai jaise ki “GLES3 is unsupported” lekin app kaam karta hai, to aap hardware acceleration ko disable karke unhein chup kara sakte hain:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Yeh amd64 par bhi lagu hota hai; filename ko apne download se match karne ke liye badlen.

Debian/Ubuntu par, aapko Chromium dwara avashyak atirikt **runtime** libraries ki zaroorat ho sakti hai (yeh aksar full desktop installations par pehle se maujood hote hain). Agar zaroorat ho to neeche diye gaye commands run karein:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

`arm64` ke liye `libasound2t64` ko `libasound2` se badlen. Minimal ya custom installs ab bhi ek missing `.so` file ke saath fail ho sakte hain. Error message mein naamit package install karein (common extras: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Kuch environments mein, aapko `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` ka upyog karke app run karne ki zaroorat ho sakti hai.

<br/>

> ℹ️ **NOTE**<br/>
> macOS filhaal supported nahi hai. Transrewrt Windows, Linux, aur Docker ke liye uplabdh hai.

</details>

<br/>

Ek baar jab app chal raha ho, to text ko anuvaad karne, phir se likhne, aur badalne, prompts ko manage karne, aur models ko configure karne ke tareeke seekhne ke liye [**User Guide**](USER-GUIDE.hi-Latn.md) dekhein.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Ek OpenRouter API key praapt karna

Transrewrt kai AI providers ko support karta hai. [OpenRouter](https://openrouter.ai) ek lokpriya vikalp hai kyuki yah kai models ko ek key ke tahat ekatrit karta hai aur muft models pradaan karta hai.

1. [openrouter.ai](https://openrouter.ai) par sign up ya login karen.
2. [Keys](https://openrouter.ai/keys) page kholein aur ek nayi key banayein (ise naam dein, aur vikalp roop se ek credit seema set karen). Aap bina credit jode muft models ka upyog kar sakte hain.
3. **Desktop (Electron):** keys ko **Settings → API** mein paste karen. **Docker:** env vars set karen jaise ki `OPENROUTER_API_KEY` ([Quick start](#quick-start) dekhen).

Translate, rewrite, ya transform ke liye OpenRouter ke **Body Builder** model ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ka upyog na karen: yah JSON request payloads lautata hai, na ki un kaaryon ke liye poora kiya gaya text. User Guide mein [Settings → Models](USER-GUIDE.hi-Latn.md#models) dekhen.

Aap anya providers (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, koi bhi OpenAI-compatible provider) ka bhi upyog kar sakte hain ya [Ollama](https://ollama.com) ke saath models ko sthaniya roop se chala sakte hain. Samarthit providers aur environment variables ki poori suchi ke liye [Configuration](#configuration-and-environment) dekhenge.

</br>

> ⚠️ **WARNING**<br/>
> Yadi aap Ollama ka upyog kisi anya device, container, ya service se kar rahe hain, to Ollama ko external connections (localhost-only nahi) ki anumati dene ke liye configure karna yaad rakhen.

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuration aur environment

</br>

**Config file locations**

| Deployment | Config location |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (persist karne ke liye ek volume ka upyog karen) |

<br/>

**Environment variables** (keval web/Docker; Electron sthaniya config file ka upyog karta hai)

| Variable                  | Description                                                                             |
|---------------------------|-----------------------------------------------------------------------------------------|
| `PORT`                    | Server sunne wala port  (default `5000` hai)                                             |
| `CONFIG_PATH` | Config file ka path (defaults to `/app/data/config.json`) |
| `TZ` | Server-side time ke liye timezone (logging, etc.) (defaults to `Europe/London`) |
| `HISTORY_DISABLED` | Execution history ko band karne ke liye force karen (optional, defaults to `false`) |
| `OPENROUTER_API_KEY` | OpenRouter API key |
| `OPENAI_API_KEY`     | OpenAI API key                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API key                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API key                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API key                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API key                                                             |
| `GROQ_API_KEY`       | Groq API key                                                                 |
| `MISTRAL_API_KEY`    | Mistral API key                                                              |
| `OLLAMA_URL`         | Ollama base URL (jaise ki `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | xAI API key                                                                  |
| `NVIDIA_API_KEY`          | NVIDIA API key                                                                          |
| `ALIBABA_API_KEY`         | Alibaba Cloud (DashScope) API key                                                       |
| `APIFUN_API_KEY`          | apikey.fun API key                                                                      |
| `CUSTOM_PROVIDER_NAME` | Custom OpenAI-compatible provider ke liye display naam (teeno custom vars zaroori hain) |
| `CUSTOM_PROVIDER_URL`     | Custom OpenAI-compatible provider ke liye aadhar URL (jaise ki `https://my-llm.example.com/v1`) |
| `CUSTOM_PROVIDER_API_KEY` | Custom OpenAI-compatible provider ke liye API key                         |

**Custom OpenAI-compatible provider (web/Docker):** upar ki suchi mein nahin hone wale kisi bhi OpenAI-compatible endpoint ke liye (jaise ki ek self-hosted server ya gateway), teeno `CUSTOM_PROVIDER_*` variables set karein — udaaharan ke liye `CUSTOM_PROVIDER_NAME=MyProvider`, `CUSTOM_PROVIDER_URL=https://my-llm.example.com/v1`, aur matching API key. Models **Unnat** mode mein Settings → Models ke tahat ids jaise ki `MyProvider/…` (provider naam prefix ke saath) ke saath dikhai dete hain.

**Privacy mode:** History track ko `config.json` ya prati-upbhokta preferences ki parwah kiye bina band karne ke liye, **web/Docker server process** aur/ya **Electron desktop main process** (jaise system ya launcher environment — kewal renderer nahi) ke liye `HISTORY_DISABLED` ko `true` ya `1` (case-insensitive) par set karein. Yah input/output history ko store karna disable karta hai, **Settings → General Settings → History** ko lock karta hai, aur History-related APIs ko block karta hai.

Kewal un providers ko configure karein jinhe aap upyog karte hain. Model IDs namespaced hain (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, `{providerName}/…` custom endpoints ke liye, aadi).

**Laagat display:** OpenRouter lagu hone par sahi billed laagat wapas karta hai. Anya providers OpenRouter ke public model pricing se **anumanit** laagat ka upyog karte hain jab OpenRouter key uplabdh hoti hai; iske bina, non-OpenRouter laagat `0` ke roop mein dikhai de sakti hai. Anuman invoice nahi hote hain.

<br/>

**Data aur persistence:** Docker ke liye, `/app/data` par ek volume mount karein taaki `config.json` aur SQLite database container restarts ke dauraan bane rahein. Volume ke bina, container rukne par sabhi data kho jaata hai.

<br/>

**Web authentication:**

- Default admin: `admin` / `transrewrt26`.
- **Settings → Users** mein upbhoktaon ko manage karein.
- Ek password reset karein: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **WARNING**<br/>
> Kisi bhi network-accessible host par default admin password ko turant badlein.

<br/>

Mukhya settings (font, models, bhashayein, aadi) application Settings mein uplabdh hain.

<br/><br/>

<a id="development-and-architecture"></a>
## Vikas aur architecture

- **Vikas:** Setup, nirmaan, parikshan, aur deploy (Electron, Web, Docker) - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) dekhein.
- **Architecture aur system ka sankshipt vivaran:** Folder structure, tech stack, design nirnay - [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md) dekhein.

<br/><br/>

<a id="reporting-issues"></a>
## Samasyaon ki report karna

[GitHub](https://github.com/wsj-br/transrewrt/issues) par ek issue kholen. Apna platform (Windows / Linux / Docker) aur app sanskarana (About dialog mein ya Releases page par dikhaya gaya) shamil karein.

<br/><br/>

<a id="disclaimer"></a>
## Disclaimer

Utpaad ke naam aur icon unke sambandhit malikon ke hain aur keval pehchan ke uddeshya se upyog kiye jaate hain. Yeh software kisi bhi ullekhit brand se sambandhit ya samarthit nahi hai.

<br/><br/>

<a id="license"></a>
## License

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
