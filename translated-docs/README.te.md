---
translated_at: "2026-03-26T01:10:35.991Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt లోగో" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="వెర్షన్"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="లైసెన్స్: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="వేదిక">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI సామర్థ్యం కలిగిన పాఠ్య సాధనం: భాషల మధ్య అనువాదం, విభిన్న శైలులలో మళ్లీ రాయడం మరియు కస్టమ్ ప్రాంప్ట్లతో మార్పులు చేయడం — బహుళ AI ప్రొవైడర్లను ఉపయోగించి (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, మరియు స్థానిక Ollama). డెస్క్టాప్ అప్లికేషన్‌గా (Electron) లేదా స్వంతంగా హోస్ట్ చేయబడిన వెబ్ అప్లికేషన్‌గా (Docker) ఇది నడుస్తుంది.

- **అనువాదం** — పదిహేనుకు పైగా భాషల మధ్య, స్వయంచాలక మూల భాష గుర్తింపుతో
- **మళ్లీ రాయడం** — వ్యాకరణాన్ని సరిచేయడం, అంతర్గత అర్థాన్ని మెరుగుపరచడం, ఔపచారిక/అనౌపచారిక శైలి, సంక్షిప్తీకరణం, విస్తరణ, సాంకేతిక శైలి
- **మార్పు** — కస్టమ్ AI ప్రాంప్ట్లు; ప్రాంప్ట్లను సృష్టించడం, నిర్వహించడం మరియు ప్రతి ప్రాంప్ట్‌కు ఐచ్ఛిక లక్ష్య భాష
- **చరిత్ర** — ఇన్‌పుట్/అవుట్‌పుట్ పాఠ్యంతో పాటుగా పూర్తి నిర్వహణ చరిత్ర, వడపోత మరియు ఎగుమతి
- **మోడల్స్ & ఖర్చు** — సరిపడిన ఏదైనా ప్రొవైడర్ నుండి మోడల్స్‌ను ఎంచుకోండి; లాగ్, మోడల్/ఆపరేషన్/రోజు వారీ సారాంశాలతో ఖర్చు మరియు ఉపయోగ డాష్‌బోర్డ్
- **UI** — బహుళ భాషా ఇంటర్ఫేస్ (30+ భాషలు, RTL మద్దతు), అక్షరాలు, ...
- **వెబ్ మోడ్** — నిర్వాహక పాత్రలతో బహుళ-వాడుకరి మద్దతు
- **డెస్క్టాప్** — విండోస్ మరియు లినక్స్ కోసం ఎలక్ట్రాన్ అప్లికేషన్
- **స్వంతంగా హోస్ట్ చేయబడింది** — amd64 & arm64 (రాస్ప్బెర్రీ పై-సిద్ధం) కోసం డాకర్ చిత్రం

స్థాపించిన తర్వాత, అన్ని లక్షణాల పూర్తి వాకింగ్ కోసం **[వినియోగదారు మార్గదర్శి](USER-GUIDE.te.md)** చూడండి.

<small>**ఇతర భాషల్లో చదవండి:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI మరియు పత్రాల అనువాదాలపై గమనిక:** మూల ఆంగ్లం (UK) తప్ప, ఇతర అన్ని ఇంటర్ఫేస్ భాషలు AI మోడల్స్ ఉపయోగించి అనువదించబడ్డాయి; పరిభాష సరిగ్గా లేకపోవచ్చు లేదా పొరపాట్లు కలిగి ఉండవచ్చు.

</small>

<br/>

<a id="screenshots"></a>
## స్క్రీన్‌షాట్లు

**భాషా ఎంపికదారు**

![భాషా ఎంపికదారు](../images/screenshots/te/language-selector.png)

**అనువాదం**

![అనువాదం](../images/screenshots/te/translate.png)

**మార్చడం - ప్రాంప్ట్ ఎడిటర్**

![మార్చడం - ప్రాంప్ట్ ఎడిటర్](../images/screenshots/te/transform-prompt-edit.png)

**డాష్‌బోర్డ్**

![ఖర్చు డాష్‌బోర్డ్](../images/screenshots/te/dashboard-summary.png)

**చరిత్ర**

![చరిత్ర](../images/screenshots/te/history.png)

**సెట్టింగ్లు - మోడల్ ఎంపిక**

![సెట్టింగ్లు - మోడల్ ఎంపిక](../images/screenshots/te/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## విషయసూచిక

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [త్వరిత ప్రారంభం](#quick-start)
- [ఇన్‌స్టాలేషన్](#installation)
  - [విండోస్ (ఎలక్ట్రాన్)](#windows-electron)
  - [లినక్స్ (ఎలక్ట్రాన్)](#linux-electron)
  - [డాకర్](#docker)
- [ఓపెన్‌రౌటర్ API కీ పొందడం](#getting-an-openrouter-api-key)
- [కాన్ఫిగరేషన్ మరియు పరిసరాలు](#configuration-and-environment)
- [అభివృద్ధి మరియు ఆర్కిటెక్చర్](#development-and-architecture)
- [విడుదలలు మరియు ట్యాగులు](#releases-and-tags)
- [సహకారం](#contributing)
- [అస్వీకార పత్రం](#disclaimer)
- [లైసెన్స్](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## త్వరిత ప్రారంభం

**డాకర్ (స్వీయఃలక్ష్యాల కోసం సిఫార్సు చేయబడింది)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` స్థానంలో [ఓపెన్‌రౌటర్ API కీ](https://openrouter.ai/keys) ని ఉపయోగించండి (లేదా ఇతర ప్రొవైడర్ కీలు సెట్ చేయండి; [కాన్ఫిగరేషన్](#configuration-and-environment) చూడండి). [http://localhost:5000](http://localhost:5000) ను తెరిచి, సేవను బహిర్గతం చేయడానికి ముందు డిఫాల్ట్ అడ్మిన్ పాస్వర్డ్‌ను మార్చండి.

<br/>

> ℹ️ **గమనిక**<br/>
> డాకర్‌లో, LLM ప్రమాణపత్రాలు `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY` వంటి పరిసర వేరియబుల్స్‌తో సెట్ చేయబడతాయి (వెబ్ UIలో కాదు). డెస్క్‌టాప్ (ఎలక్ట్రాన్)లో **సెట్టింగ్స్ → API** లో మీ కీలు కాన్పిగర్ చేస్తారు.

<br/>

**విండోస్**

[విడుదలలు](https://github.com/wsj-br/transrewrt/releases) నుండి చివరి `Transrewrt Setup x.y.z.exe` ని డౌన్‌లోడ్ చేసుకొని, ఇన్‌స్టాలర్‌ను రన్ చేయండి, తర్వాత స్టార్ట్ మెనూ లేదా డెస్క్‌టాప్ షార్ట్‌కట్ నుండి ప్రారంభించండి. **సెట్టింగ్స్ → API** లో మీ API కీలు నమోదు చేయండి. మీరు కనీసం ఒక ప్రొవైడర్‌ను కాన్పిగర్ చేయాలి, ఉచిత మోడళ్లకు ఓపెన్‌రౌటర్ సాధారణమయింది.

<br/>

**లినక్స్**

[విడుదలలు](https://github.com/wsj-br/transrewrt/releases) నుండి మీ CPUకు అనుకూలమైన `.AppImage` డౌన్‌లోడ్ చేసుకోండి (`x64` సాధారణ పిసిల కోసం, `arm64` చాలా ARM పరికరాలు, రాస్ప్బెర్రీ పై 4+ సహా), తర్వాత:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**సెట్టింగ్స్ → API** లో మీ API కీలు నమోదు చేయండి. మీరు కనీసం ఒక ప్రొవైడర్‌ను కాన్ఫిగర్ చేయాలి, ఉచిత మోడళ్లకు ఓపెన్‌రౌటర్ సాధారణమయింది.

Debian/Ubuntuలో మీరు ముందుగా అదనపు అవసరాలను ఇన్‌స్టాల్ చేయాల్సి ఉండవచ్చు:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

వివరాలకు [ఇన్‌స్టాలేషన్ → లినక్స్](#linux-electron) చూడండి.

<br/>

> ℹ️ **గమనిక**<br/>
> macOS ప్రస్తుతం మద్దతు ఇవ్వడం లేదు. Transrewrt Windows, Linux, మరియు Docker కోసం అందుబాటులో ఉంది.

<br/>

అప్లికేషన్ పనిచేస్తున్న తర్వాత, పాఠ్యాన్ని అనువదించడం, తిరిగి రాయడం, మార్చడం, ప్రాంప్ట్ లను నిర్వహించడం మరియు మోడళ్లను కాన్ఫిగర్ చేయడం వంటివి నేర్చుకోవడానికి **[యూజర్ గైడ్](USER-GUIDE.te.md)** చూడండి.

<br/><br/>

<a id="installation"></a>
## ఇన్‌స్టాలేషన్

<a id="windows-electron"></a>
### విండోస్ (ఎలక్ట్రాన్)

- [విడుదలలు](https://github.com/wsj-br/transrewrt/releases) నుండి చివరి ఇన్‌స్టాలర్‌ను డౌన్‌లోడ్ చేసుకోండి.
- `.exe` ను రన్ చేసి, ఇన్‌స్టాలర్‌ను అనుసరించండి.
- మొదటి రన్: స్టార్ట్ మెనూ లేదా డెస్క్‌టాప్ షార్ట్‌కట్ నుండి అప్లికేషన్‌ను ప్రారంభించండి.

<br/>

<a id="linux-electron"></a>
### లినక్స్ (ఎలక్ట్రాన్)

- [విడుదలలు](https://github.com/wsj-br/transrewrt/releases) నుండి సరిపడిన `.AppImage` (`x64` లేదా `arm64`) డౌన్‌లోడ్ చేసుకోండి.
- రన్ చేయండి: x86_64/amd64 పై `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`, లేదా ARM64 లో `...-arm64.AppImage` ఫైల్ పేరు ఉపయోగించండి.
- అదనపు అవసరాలు (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- మరింత వివరాలకు [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) చూడండి.

<br/>

<a id="docker"></a>
### డాకర్

- పుల్: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- పరిసరాల ద్వారా కనీసం ఒక ప్రొవైడర్ కీ సెట్ చేయండి (ఉదాహరణకు, ఓపెన్‌రౌటర్ కోసం `OPENROUTER_KEY`). రహస్యాలు ఇమేజ్‌లో చొరబడకుండా ఉండేందుకు `-e` లేదా `docker compose` / `.env` తో వేరియబుల్స్ పాస్ చేయండి.
- ప్రొవైడర్ కీలు వెబ్ UIలో **ఉపయోగించబడవు**; సర్వర్ పరిసరాల నుండి వాటిని చదుస్తుంది.

ఉదాహరణ - కొనసాగే కోసం పేరు కలిగిన వాల్యూమ్ (పరిసర వేరియబుల్ ద్వారా ఓపెన్‌రౌటర్ కీ):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| ఐచ్ఛికం | వివరణ |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| పోర్ట్ | `5000` ( `-p 5000:5000` తో మ్యాప్ చేయండి) |
| వాల్యూమ్ | కాన్ఫిగరేషన్ మరియు డేటాబేస్ కొనసాగింపు కోసం `/app/data` మౌంట్ చేయండి |
| పరిసర వేరియబుల్స్ | `PORT`, `CONFIG_PATH`, ప్లస్ LLM కీలు (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - [కాన్ఫిగరేషన్](#configuration-and-environment) చూడండి |

మూలం నుండి రూపొందించడం మరియు రన్ చేయడం: `docker compose up --build -d` లేదా `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) చూడండి.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## ఒక ఓపెన్ రూటర్ API కీని పొందడం

ట్రాన్స్రీవ్రిట్ బహుళ AI ప్రొవైడర్లను మద్దతు ఇస్తుంది. [ఓపెన్ రూటర్](https://openrouter.ai) ఒక కీ కింద చాలా మోడళ్లను సమాహారం చేసి, ఉచిత మోడళ్లను అందించడం వల్ల ఇది ప్రజాదరణ పొందింది.

1. [openrouter.ai](https://openrouter.ai) లో సైన్ అప్ చేసుకోండి లేదా లాగిన్ అవ్వండి.
2. [Keys](https://openrouter.ai/keys) పేజీని తెరచి కొత్త కీని సృష్టించండి (పేరు ఇవ్వండి, ఎంపికను బట్టి క్రెడిట్ పరిమితిని సెట్ చేయండి). క్రెడిట్ జోడించకుండానే ఉచిత మోడళ్లను ఉపయోగించవచ్చు.
3. **డెస్క్‌టాప్ (ఎలక్ట్రాన్):** **సెట్టింగ్స్ → API** లో కీలను పేస్ట్ చేయండి. **డాకర్:** `OPENROUTER_KEY` వంటి వాతావరణ వేరియబుల్స్‌ను సెట్ చేయండి ( [త్వరిత ప్రారంభం](#quick-start) చూడండి).

అనువాదం, తిరిగి రాయడం లేదా మార్చడం కోసం ఓపెన్ రూటర్ **బాడీ బిల్డర్** మోడల్ ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ఉపయోగించవద్దు: ఆ పనుల కోసం పూర్తి చేసిన టెక్స్ట్ కాకుండా JSON రిక్వెస్ట్ పేలోడ్స్ ను ఇస్తుంది. సహాయ పుస్తకంలోని [సెట్టింగ్స్ → మోడళ్లు](USER-GUIDE.te.md#models) చూడండి.

మీరు ఇతర ప్రొవైడర్లను (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ఉపయోగించవచ్చు లేదా [Ollama](https://ollama.com)తో స్థానికంగా మోడళ్లను నడుపుకోవచ్చు. మద్దతు ఇచ్చిన ప్రొవైడర్ల మరియు వాతావరణ వేరియబుల్స్ పూర్తి జాబితా కోసం [కాన్ఫిగరేషన్](#configuration-and-environment) చూడండి.

> ⚠️ **హెచ్చరిక**<br/>
> మీరు మరొక పరికరం, కంటైనర్ లేదా సేవ నుండి Ollama ఉపయోగిస్తుంటే, బాహ్య కనెక్షన్లను (localhost-మాత్రమే కాకుండా) అనుమతించడానికి Ollamaని కాన్ఫిగర్ చేయాలని గుర్తుంచుకోండి.

పరిమితులు, BYOK మరియు ఇంకా ఎక్కువ వివరాలకు [OpenRouter ప్రామాణీకరణ](https://openrouter.ai/docs/api/reference/authentication) చూడండి.

<br/><br/>

<a id="configuration-and-environment"></a>
## కాన్ఫిగరేషన్ మరియు వాతావరణం

**కాన్ఫిగరేషన్ ఫైల్ స్థానాలు**

| డిప్లాయ్ మెంట్         | కాన్ఫిగర్ లొకేశన్                                   |
| ------------------ | ------------------------------------------------- |
| ఎలెక్ట్రాన్ (Windows) | `%APPDATA%\transrewrt\`                           |
| ఎలెక్ట్రాన్ (Linux)   | `~/.config/transrewrt/`                           |
| వెబ్ / డాకర్       | `/app/data/config.json` (స్థిరత ఉంచడానికి వాల్యూమ్ ఉపయోగించండి) |

<br/>

**పర్యావరణ వేరియబుళ్లు** (వెబ్/డాకర్ కొరకు మాత్రమే; ఎలెక్ట్రాన్ స్థానిక కాన్ఫిగ్ ఫైల్ ఉపయోగిస్తుంది)

| వేరియబుల్         | డిఫాల్ట్                 | వివరణ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | సర్వర్ వినడానికి పోర్ట్ |
| `CONFIG_PATH`    | `/app/data/config.json` | కాన్ఫిగరేషన్ ఫైల్ మార్గం |
| `OPENROUTER_KEY` | *(ఖాళీగా ఉంది)*               | ఓపెన్ రూటర్ API కీ |
| `OPENAI_KEY`     | *(ఖాళీగా ఉంది)*               | OpenAI API కీ |
| `CEREBRAS_KEY`   | *(ఖాళీగా ఉంది)*               | Cerebras API కీ |
| `ANTHROPIC_KEY`  | *(ఖాళీగా ఉంది)*               | Anthropic API కీ |
| `GOOGLE_KEY`     | *(ఖాళీగా ఉంది)*               | Google Gemini API కీ |
| `DEEPSEEK_KEY`   | *(ఖాళీగా ఉంది)*               | DeepSeek API కీ |
| `GROQ_KEY`       | *(ఖాళీగా ఉంది)*               | Groq API కీ |
| `MISTRAL_KEY`    | *(ఖాళీగా ఉంది)*               | Mistral API కీ |
| `OLLAMA_URL`     | *(ఖాళీగా ఉంది)*               | Ollama బేస్ URL (ఉదా: `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(ఖాళీగా ఉంది)*               | xAI API కీ |

మీరు ఉపయోగించే ప్రొవైడర్ల మాత్రమే కాన్ఫిగర్ చేయండి. మోడల్ ఐడిలు పేర్లతో విభజించబడతాయి (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, మొదలైనవి).

**ఖర్చు ప్రదర్శన:** ఓపెన్ రూటర్ వర్తించే చోట ఖచ్చితమైన బిల్లింగ్ ఖర్చు ఇస్తుంది. ఓపెన్ రూటర్ కీ ఉన్నట్లయితే ఇతర ప్రొవైడర్లు ఓపెన్ రూటర్ యొక్క సార్వజనిక మోడల్ ధరల నుండి **అంచనా** వేసిన ఖర్చు ఉపయోగిస్తాయి; లేకుంటే, ఓపెన్ రూటర్ కాని ఖర్చు `0`గా చూపబడవచ్చు. అంచనాలు బిల్లులు కావు.

<br/>

**డేటా మరియు స్థిరత:** డాకర్ కోసం, `/app/data` వద్ద ఒక వాల్యూమ్‌ను మౌంట్ చేయండి, అలా చేయడం వల్ల `config.json` మరియు స్క్వాలైట్ డేటాబేస్ కంటైనర్ రీస్టార్ట్ ల మధ్య స్థిరంగా ఉంటాయి. వాల్యూమ్ లేకుండా, కంటైనర్ ఆపినప్పుడు అన్ని డేటా కోల్పోతారు.

**డెవలపర్లు:** పాత ఏక-కీ కాన్ఫిగ్‌ను భర్తీ చేసే మార్పులు పుల్ చేసిన తర్వాత, మీ స్థానిక ఫైల్ తొలగించబడిన ఫీల్డ్‌లను ఉపయోగిస్తుంటే (`api_key`, `api_url`, ప్రాక్సీ ఐచ్చికాలు), `data/config.json`ని `src/config-defaults/config_default.json` లోని కొత్త డిఫాల్ట్ ఆకృతితో రీసెట్ చేయండి లేదా విలీనం చేయండి.

<br/>

**వెబ్ ప్రామాణీకరణ:**

- డిఫాల్ట్ నిర్వాహకి: `admin` / `transrewrt26`.
- **సెట్టింగ్స్ → వాడుకరులు**లో వాడుకరులను నిర్వహించండి.
- పాస్‌వర్డ్ రీసెట్ చేయడానికి: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (కోడ్ వనరు నుండి: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **హెచ్చరిక**<br/>
> ఏదైనా నెట్‌వర్క్-యాక్సిసబుల్ హోస్ట్ లో డిఫాల్ట్ నిర్వాహకి పాస్‌వర్డ్‌ను వెంటనే మార్చండి.

<br/>

కీలకమైన సెట్టింగ్స్ (అక్షరమాలు, మోడళ్లు, భాషలు, మొదలైనవి) అప్లికేషన్ సెట్టింగ్స్ లో అందుబాటులో ఉంటాయి.

<br/><br/>

<a id="development-and-architecture"></a>

## అభివృద్ధి మరియు వ్యవస్థాపన

- **అభివృద్ధి:** సెటప్, బిల్డ్, పరీక్ష మరియు ప్రచురణ (ఎలెక్ట్రాన్, వెబ్, డాకర్) - చూడండి **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **వ్యవస్థాపన మరియు సిస్టమ్ సమీక్ష:** ఫోల్డర్ నిర్మాణం, టెక్ స్టాక్, డిజైన్ నిర్ణయాలు - చూడండి **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## రిలీస్‌లు మరియు ట్యాగ్‌లు

- **గిట్ ట్యాగ్‌లు** `v`* (ఉదా: `v1.0.10`) [రిలీస్ వర్క్‌ఫ్లో](.github/workflows/release.yml)ని ప్రారంభిస్తాయి. **గిట్‌హబ్ రిలీస్‌లు** విండోస్ ఇన్‌స్టాలర్ (`.exe`) మరియు లినక్స్ ఆప్ ఇమేజీలను (**x64** మరియు **arm64**) జత చేస్తాయి.
- **డాకర్ ఇమేజ్‌లు** `ghcr.io/wsj-br/transrewrt`కి ప్రచురించబడతాయి. ఇమేజ్ ట్యాగ్‌లు గిట్ వెర్షన్‌ను అనుసరిస్తాయి (ఉదా: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ఇంకా `latest`. మల్టీ-ఆర్క్: `linux/amd64` మరియు `linux/arm64` (ఉదా: రాస్ప్బెర్రీ పై).

<br/><br/>

<a id="contributing"></a>
## సహకరించడం

1. రిపోజిటరీని ఫోర్క్ చేయండి.
2. ఫీచర్ శాఖని సృష్టించండి: `git checkout -b feature/my-feature`
3. స్పష్టమైన సందేశంతో మీ మార్పులను కమిట్ చేయండి.
4. పుష్ చేసి, `main` శాఖకు వ్యతిరేకంగా పుల్ రిక్వెస్ట్ తెరవండి.

సమర్పించే ముందు ఎలెక్ట్రాన్ మరియు వెబ్ మోడ్‌లలో మీ మార్పులను పరీక్షించడానికి ఉన్న కోడ్ స్టైల్‌ను పాటించండి. బిల్డ్ మరియు పరీక్ష సూచనలకు [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) చూడండి.

<br/>

**సమస్యలను నివేదించడం:** [GitHub](https://github.com/wsj-br/transrewrt/issues)పై సమస్యను తెరవండి. మీ ప్లాట్‌ఫారమ్ (విండోస్ / లినక్స్ / డాకర్) మరియు యాప్ వెర్షన్ (అబౌట్ డైలాగ్ లేదా రిలీస్ పేజీలో చూపబడింది) చేర్చండి.

<br/><br/>

<a id="disclaimer"></a>
## ప్రకటన

ఉత్పత్తి పేర్లు మరియు చిహ్నాలు వాటికి సంబంధించిన కలిగినవారికి చెందినవి మరియు గుర్తింపు ప్రయోజనాల కొరకు మాత్రమే ఉపయోగించబడతాయి. ఈ సాఫ్ట్‌వేర్ పేర్కొన్న ఏదైనా బ్రాండ్‌లతో సంబంధం లేదు లేదా మద్దతు ఇవ్వబడలేదు.

<br/><br/>

<a id="license"></a>
## లైసెన్స్

కాపీరైట్ © 2026 వాల్డెమార్ స్కుడెలర్ జూనియర్.

[Apache License 2.0](LICENSE)