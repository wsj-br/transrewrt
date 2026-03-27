---
translated_at: "2026-03-27T23:16:00.521Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt లోగో" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="సంస్కరణ"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="లైసెన్స్: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="వేదిక">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI సాయంతో గల పాఠ్య సాధనం: భాషల మధ్య అనువాదం, వివిధ శైలులలో పునర్రచన మరియు స్వంత ప్రాంప్ట్లతో పరివర్తన — పలు AI సేవా సమాచారదాతలను ఉపయోగించి (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, మరియు స్థానిక Ollama). ఇది డెస్క్టాప్ అనువర్తనంగా (ఎలక్ట్రాన్) లేదా స్వంతంగా హోస్ట్ చేసుకునే వెబ్ అనువర్తనంగా (డాకర్) నడుస్తుంది.

- **అనువాదం** — పలు డజన్ల భాషల మధ్య, స్వయంచాలక మూల భాష గుర్తింపుతో
- **పునర్రచన** — వ్యాకరణాన్ని సరిచేయడం, స్పష్టత పెంచడం, ఔపచారిక/అనౌపచారిక, సంక్షిప్తం చేయడం, విస్తరణ, సాంకేతికం
- **పరివర్తన** — కస్టమ్ AI ప్రాంప్ట్లు; ప్రాంప్ట్లను సృష్టించడం, పరిపాలించడం, ప్రతి ప్రాంప్ట్ కు ఐచ్ఛిక లక్ష్య భాష
- **చరిత్ర** — ఇన్పుట్/అవుట్పుట్ పాఠ్యంతో, వడపోత మరియు ఎగుమతితో పాటుగా సంపూర్ణ కార్యరూపాంతరం చరిత్ర
- **మోడల్స్ & ఖర్చు** — ఏదైనా కాన్ఫిగర్ చేసిన సేవా సమాచారదాత నుండి మోడల్స్ ఎంపిక; లాగ్, మోడల్/ఆపరేషన్/రోజు వారీ సారాంశాలతో ఖర్చు మరియు ఉపయోగ డాష్బోర్డ్స్
- **UI** — బహుభాషా ఇంటర్ఫేస్ (30+ భాషలు, RTL మద్దతు), ఫాంట్లు, ...
- **వెబ్ మోడ్** — నిర్వాహక పాత్రలతో బహు వాడుకరి మద్దతు
- **డెస్క్టాప్** — విండోస్ మరియు లినక్స్ కోసం ఎలక్ట్రాన్ అనువర్తనం
- **స్వంతంగా హోస్ట్ చేసుకోవడం** — amd64 & arm64 (రాస్ప్బెర్రీ పై-సిద్ధం) కోసం డాకర్ ఇమేజ్

స్థాపించిన తర్వాత, అన్ని లక్షణాల యొక్క పూర్తి చూపుకోసం **[వినియోగదారు మార్గదర్శి](USER-GUIDE.te.md)** చూడండి.

<small>**ఇతర భాషలలో చదవండి:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI మరియు పత్రాల అనువాదాలకు సంబంధించి గమనిక:** అసలు ఆంగ్లం (యుకె) తప్ప మిగిలిన ఇంటర్ఫేస్ భాషలన్నింటినీ 
> AI మోడళ్లను ఉపయోగించి అనువదించారు; పదబంధాలు ఖచ్చితంగా ఉండకపోవచ్చు లేదా దోషాలను కలిగి ఉండవచ్చు.

</small>

<br/>

<a id="screenshots"></a>

## స్క్రీన్‌షాట్లు

**భాష ఎంపిక పెట్టె**

![భాష ఎంపిక పెట్టె](../images/screenshots/te/language-selector.png)

**అనువాదం**

![అనువాదం](../images/screenshots/te/translate.png)

**పరివర్తన - ప్రాంప్ట్ సవరణి**

![పరివర్తన - ప్రాంప్ట్ సవరణి](../images/screenshots/te/transform-prompt-edit.png)

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
- [ఇన్స్టాలేషన్](#installation)
  - [విండోస్ (ఎలక్ట్రాన్)](#windows-electron)
  - [లినక్స్ (ఎలక్ట్రాన్)](#linux-electron)
  - [డాకర్](#docker)
- [ఓపెన్‌రౌటర్ API కీని పొందడం](#getting-an-openrouter-api-key)
- [కాన్ఫిగరేషన్ మరియు పర్యావరణం](#configuration-and-environment)
- [అభివృద్ధి మరియు స్థాపత్యం](#development-and-architecture)
- [విడుదలలు మరియు ట్యాగ్లు](#releases-and-tags)
- [సహకరించడం](#contributing)
- [అస్వీకరణ](#disclaimer)
- [లైసెన్స్](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## త్వరిత ప్రారంభం

**డాకర్ (స్వయంగా హోస్ట్ చేయడానికి సిఫార్సు చేయబడింది)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

[`OpenRouter API కీ`](https://openrouter.ai/keys)తో `sk-or-your-key` ను భర్తీ చేయండి (లేదా ఇతర ప్రొవైడర్ కీలను సెట్ చేయండి; చూడండి [కాన్ఫిగరేషన్](#configuration-and-environment)). [http://localhost:5000](http://localhost:5000) ను తెరిచి, సేవను బహిర్గతం చేయడానికి ముందు డిఫాల్ట్ నిర్వాహక పాస్వర్డును మార్చండి.

<br/>

> ℹ️ **గమనిక**<br/>
> డాకర్‌లో, LLM అనుమతి ధృవీకరణ డేటాను `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … వంటి పర్యావరణ వేరియబుల్స్ ద్వారా సెట్ చేస్తారు (వెబ్ UI లో కాదు). డెస్క్‌టాప్ (ఎలక్ట్రాన్) లో మీరు **సెట్టింగ్స్ → API**లో కీలను కాన్ఫిగర్ చేస్తారు.

<br/>

**విండోస్**

[రిలీజ్‌ల](https://github.com/wsj-br/transrewrt/releases) నుండి చివరి `Transrewrt Setup x.y.z.exe` డౌన్‌లోడ్ చేసుకోండి, ఇన్‌స్టాలర్ ను రన్ చేయండి, తర్వాత స్టార్ట్ మెను లేదా డెస్క్‌టాప్ షార్ట్‌కట్ నుండి ప్రారంభించండి. **సెట్టింగ్స్ → API**లో మీ ఐపిఐ కీలను నమోదు చేయండి. కనీసం ఒక ప్రొవైడర్‌ను కాన్ఫిగర్ చేయాల్సి ఉంటుంది, ఉచిత మోడల్స్ కోసం సాధారణంగా OpenRouter ఉపయోగిస్తారు.

<br/>

**లినక్స్**

మీ CPU కు సంబంధించిన `.AppImage` ని [రిలీజ్‌లు](https://github.com/wsj-br/transrewrt/releases) నుండి డౌన్‌లోడ్ చేసుకోండి (`x64` సాధారణ కంప్యూటర్ల కోసం, `arm64` రాస్ప్బెర్రీ పై 4+ సహా చాలా ARM పరికరాలకు), తర్వాత:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**సెట్టింగ్స్ → API**లో మీ API కీలను నమోదు చేయండి. కనీసం ఒక ప్రొవైడర్‌ను కాన్ఫిగర్ చేయాల్సి ఉంటుంది, ఉచిత మోడళ్లకు OpenRouter సాధారణం.

Debian/Ubuntuలో మీరు ముందుగా అదనపు అవసరమైన డేటాను ఇన్‌స్టాల్ చేయాల్సి ఉండవచ్చు:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

వివరాలకు [ఇన్‌స్టాలేషన్ → లినక్స్](#linux-electron) చూడండి.

<br/>

> ℹ️ **గమనిక**<br/>
> ప్రస్తుతం macOS కి మద్దతు లేదు. Transrewrt Windows, Linux మరియు డాకర్ కోసం అందుబాటులో ఉంది.

<br/>

యాప్ నడుస్తున్నప్పుడు, పాఠాన్ని అనువదించడం, తిరిగి వ్రాయడం, మార్చడం, సూచనలను నిర్వహించడం మరియు మోడళ్లను కాన్ఫిగర్ చేయడం వంటి వాటిని తెలుసుకోవడానికి **[వినియోగదారు మార్గదర్శి](USER-GUIDE.te.md)** చూడండి.

<br/><br/>

<a id="installation"></a>

## ఇన్‌స్టాలేషన్

<a id="windows-electron"></a>
### విండోస్ (ఎలక్ట్రాన్)

- [రిలీస్‌లు](https://github.com/wsj-br/transrewrt/releases) నుండి చివరి ఇన్‌స్టాలర్‌ని డౌన్‌లోడ్ చేసుకోండి.
- `.exe` ని రన్ చేయండి మరియు ఇన్‌స్టాలర్ సూచనలను అనుసరించండి.
- మొదటి రన్: స్టార్ట్ మెను లేదా డెస్క్‌టాప్ షార్ట్‌కట్ ద్వారా యాప్‌ని ప్రారంభించండి.

<br/>

<a id="linux-electron"></a>
### లినక్స్ (ఎలక్ట్రాన్)

- [రిలీస్‌లు](https://github.com/wsj-br/transrewrt/releases) నుండి తగిన `.AppImage` (`x64` లేదా `arm64`) ఫైల్‌ని డౌన్‌లోడ్ చేయండి.
- రన్ చేయండి: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 కోసం, లేదా ARM64 కోసం `...-arm64.AppImage` ఫైల్ పేరును ఉపయోగించండి.
- అదనపు డిపెండెన్సీలు (డెబియన్/ఉబుంటు): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- మరింత సమాచారం కోసం [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) చూడండి.

<br/>

<a id="docker"></a>
### డాకర్

- పుల్ చేయండి: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- వాతావరణ ద్వారా కనీసం ఒక ప్రొవైడర్ కీని సెట్ చేయండి (ఉదాహరణకు OpenRouter కోసం `OPENROUTER_API_KEY`). రహస్యాలు ఇమేజ్‌లో నిల్వ చేయబడకుండా `-e` లేదా `docker compose` / `.env` తో వేరియబుల్స్‌ని పాస్ చేయండి.
- ప్రొవైడర్ కీలు వెబ్ UIలో **ప్రవేశపెట్టబడవు**; సర్వర్ వాటిని వాతావరణం నుండి చదుస్తుంది.

ఉదాహరణ - స్థిరత కోసం పేరు గల వాల్యూమ్ (env ద్వారా OpenRouter కీ):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

లేదా మీరు Docker Compose ఉపయోగించడానికి ఇష్టపడితే, ఉపయోగించండి:

# కాంపోజ్ ఫైల్‌ను డౌన్‌లోడ్ చేయండి
```
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# ఐపీఐ_కీలు జోడించడానికి ఫైల్ ని సవరించండి
vi transrewrt.yml
# కంటెయినర్ ని ప్రారంభించండి
docker compose -f transrewrt.yml up -d
```

<br/>

| ఎంపిక   | వివరణ                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| పోర్ట్     | `5000` ( `-p 5000:5000` తో మ్యాప్ చేయబడింది)                                                                                                       |
| వాల్యూమ్   | కాన్ఫిగ్ మరియు డేటాబేస్ స్థిరత కోసం `/app/data` మౌంట్ చేయండి                                                                                  |
| పర్యావరణ వేరియబుల్స్ | `PORT`, `CONFIG_PATH`, ప్లస్ ఎల్ఎల్ఎమ్ కీలు (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - [కాన్ఫిగరేషన్](#configuration-and-environment) చూడండి |

సోర్స్ నుండి నిర్మాణం చేసి నడపడానికి: `docker compose up --build -d` లేదా `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) చూడండి.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## ఓపెన్రౌటర్ API కీ పొందడం

ట్రాన్స్రీవ్రైట్ బహుళ AI సరఫరాదారులను మద్దతు ఇస్తుంది. [ఓపెన్రౌటర్](https://openrouter.ai) అనేక మోడళ్లను ఒక కీ కింద సమూహపరచడంతోపాటు ఉచిత మోడళ్లు అందించడం కారణంగా ఇది ప్రాచుర్యం పొందింది.

1. [openrouter.ai](https://openrouter.ai) లో సైన్ అప్ చేసుకోండి లేదా లాగిన్ అవ్వండి.
2. [Keys](https://openrouter.ai/keys) పేజీకి వెళ్లి కొత్త కీని సృష్టించండి (దానికి పేరు పెట్టండి, సున్నా క్రెడిట్ పరిమితి ఉంటే దాన్ని అమలు చేయొచ్చు). క్రెడిట్ జోడించకుండానే ఉచిత మోడళ్లను ఉపయోగించొచ్చు.
3. **డెస్క్టాప్ (ఎలెక్ట్రాన్):** **సెట్టింగ్స్ → API** లో కీలను పేస్ట్ చేయండి. **డాకర్:** `OPENROUTER_API_KEY` వంటి పర్యావరణ వేరియబుల్స్ సెట్ చేయండి (చూడండి [త్వరిత ప్రారంభం](#quick-start)).

అనువదించడం, తిరిగి వ్రాయడం లేదా మార్చడం కోసం ఓపెన్రౌటర్ యొక్క **బాడీ బిల్డర్** మోడల్ ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ని వాడకండి: ఇది ఆ పనులకు పూర్తయిన టెక్స్ట్ కాకుండా, JSON రిక్వెస్ట్ పేలోడ్లను తిరిగి ఇస్తుంది. వాడుకరి మార్గదర్శకంలో [సెట్టింగ్స్ → మోడళ్లు](USER-GUIDE.te.md#models) చూడండి.

ఇతర సరఫరాదారులను కూడా ఉపయోగించవచ్చు (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) లేదా [Ollama](https://ollama.com)తో స్థానికంగా మోడళ్లను నడపవచ్చు). మద్దతు ఉన్న సరఫరాదారుల పూర్తి జాబితా మరియు పర్యావరణ వేరియబుల్స్ కోసం [కాన్ఫిగరేషన్](#configuration-and-environment) చూడండి.

> ⚠️ **హెచ్చరిక**<br/>
> మీరు మరొక పరికరం, కంటైనర్ లేదా సేవ నుండి Ollama ఉపయోగిస్తున్నట్లయితే, బాహ్య కనెక్షన్లను అనుమతించడానికి (కేవలం లోకల్హోస్ట్ మాత్రమే కాకుండా) Ollamaని కాన్ఫిగర్ చేయడం గుర్తుంచుకోండి.

పరిమితులు, BYOK మరియు ఇతరత్రా కోసం, [ఓపెన్రౌటర్ ప్రమాణీకరణ](https://openrouter.ai/docs/api/reference/authentication) చూడండి.

<br/><br/>

<a id="configuration-and-environment"></a>

## కాన్ఫిగరేషన్ మరియు పరిసరాలు

**కాన్ఫిగ్ ఫైల్ స్థానాలు**

| డిప్లాయ్మెంట్         | కాన్ఫిగ్ స్థానం                                  |
| ------------------ | ------------------------------------------------- |
| ఎలక్ట్రాన్ (విండోస్) | `%APPDATA%\transrewrt\`                           |
| ఎలక్ట్రాన్ (లైనక్స్)   | `~/.config/transrewrt/`                           |
| వెబ్ / డాకర్       | `/app/data/config.json` (నిలువచేయుటకు వాల్యూమ్ ఉపయోగించండి) |

<br/>

**పరిసర వేరియబుల్స్** (కేవలం వెబ్/డాకర్; ఎలక్ట్రాన్ స్థానిక కాన్ఫిగ్ ఫైల్ ఉపయోగిస్తుంది)

| వేరియబుల్         | డిఫాల్ట్                  | వివరణ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | సర్వర్ వినడానికి పోర్ట్ |
| `CONFIG_PATH`    | `/app/data/config.json` | కాన్ఫిగ్ ఫైల్ కు పాత్ |
| `OPENROUTER_API_KEY` | *(ఖాళీ)*               | OpenRouter API కీ |
| `OPENAI_API_KEY`     | *(ఖాళీ)*               | OpenAI API కీ |
| `CEREBRAS_API_KEY`   | *(ఖాళీ)*               | Cerebras API కీ |
| `ANTHROPIC_API_KEY`  | *(ఖాళీ)*               | Anthropic API కీ |
| `GOOGLE_API_KEY`     | *(ఖాళీ)*               | గూగుల్ జెమిని API కీ |
| `DEEPSEEK_API_KEY`   | *(ఖాళీ)*               | డీప్సీక్ API కీ |
| `GROQ_API_KEY`       | *(ఖాళీ)*               | Groq API కీ |
| `MISTRAL_API_KEY`    | *(ఖాళీ)*               | Mistral API కీ |
| `OLLAMA_URL`     | *(ఖాళీ)*               | Ollama బేస్ URL (ఉదా: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(ఖాళీ)*               | xAI API కీ |

మీరు ఉపయోగించే ప్రొవైడర్స్ మాత్రమే కాన్ఫిగర్ చేయండి. మాడల్ ID లు నేమ్‌స్పేస్ కాబడ్డాయి (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, మొదలైనవి).

**ఖర్చు ప్రదర్శన:** OpenRouter సంబంధిత సందర్భాలలో ఖచ్చితమైన బిల్ అయిన ఖర్చును తిరిగి ఇస్తుంది. ఇతర ప్రొవైడర్స్ OpenRouter పబ్లిక్ మాడల్ ధరలను ఆధారంగా తీసుకుని **అంచనా** వేసిన ధరను ఉపయోగిస్తాయి; అది లేకపోతే, నాన్-OpenRouter ఖర్చు `0`గా ప్రదర్శించబడుతుంది. అంచనాలు బిల్లులు కావు.

<br/>

**డేటా మరియు పాటిష్ట్యం:** డాకర్ కోసం, `/app/data` వద్ద ఒక వాల్యూమ్‌ను మౌంట్ చేయండి, తద్వారా `config.json` మరియు SQLite డేటాబేస్ కంటైనర్ పునఃప్రారంభాల సమయంలో కొనసాగుతాయి. వాల్యూమ్ లేకుంటే, కంటైనర్ ఆపినప్పుడు అన్ని డేటా కోల్పోబడుతుంది.

**డెవలపర్లు:** పాత సింగిల్-కీ కాన్ఫిగ్‌ను భర్తీ చేసే మార్పులను తీసుకురావడానికి తరువాత, మీ స్థానిక ఫైల్ ఇంకా తొలగించబడిన ఫీల్డ్స్ (`api_key`, `api_url`, ప్రాక్సీ ఐచ్ఛికాలు) ఉపయోగిస్తుంటే, `src/config-defaults/config_default.json` నుండి కొత్త డిఫాల్ట్ ఆకృతితో `data/config.json` పునరుద్ధరించండి లేదా విలీనం చేయండి.

<br/>

**వెబ్ ప్రాముఖ్యత:**

- డిఫాల్ట్ అడ్మిన్: `admin` / `transrewrt26`.
- సెట్టింగ్స్ → వాడుకరులలో వాడుకరులను నిర్వహించండి.
- పాస్‌వర్డ్ పునరుద్ధరించడానికి: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (సోర్స్ నుండి: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **హెచ్చరిక**<br/>
> ఏదైనా నెట్‌వర్క్-యాక్సెసిబుల్ హోస్ట్‌లో డిఫాల్ట్ అడ్మిన్ పాస్‌వర్డ్‌ను తక్షణమే మార్చండి.

<br/>

కీలక సెట్టింగ్స్ (ఫాంట్, మాడళ్లు, భాషలు, మొదలైనవి) అప్లికేషన్ సెట్టింగ్స్ లో అందుబాటులో ఉంటాయి.

<br/><br/>

<a id="development-and-architecture"></a>

## అభివృద్ధి మరియు ఆర్కిటెక్చర్

- **అభివృద్ధి:** సెటప్, బిల్డ్, పరీక్ష మరియు డిప్లాయ్ (Electron, Web, Docker) - **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** చూడండి.
- **ఆర్కిటెక్చర్ మరియు సిస్టమ్ అవలోకనం:** ఫోల్డర్ నిర్మాణం, టెక్ స్టాక్, డిజైన్ నిర్ణయాలు - **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** చూడండి.

<br/><br/>

<a id="releases-and-tags"></a>
## రిలీజ్‌లు మరియు టాగ్‌లు

- **గిట్ టాగ్‌లు** `v`* (ఉదా: `v1.0.10`) [రిలీజ్ వర్క్‌ఫ్లో](.github/workflows/release.yml) ప్రారంభిస్తాయి. **GitHub రిలీజ్‌లు** విండోస్ ఇన్‌స్టాలర్ (`.exe`) మరియు లినక్స్ AppImages (**x64** మరియు **arm64**) ని అనుబంధిస్తాయి.
- **డాకర్ ఇమేజీలను** `ghcr.io/wsj-br/transrewrt`కు ప్రచురిస్తారు. ఇమేజ్ టాగ్‌లు గిట్ వెర్షన్‌తో సరిపోతాయి (ఉదా: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) అలాగే `latest` కూడా. మల్టీ-అర్చ్: `linux/amd64` మరియు `linux/arm64` (ఉదా: రాస్ప్బెర్రీ పై).

<br/><br/>

<a id="contributing"></a>
## సహకరించడం

1. రిపోజిటరీని ఫోర్క్ చేయండి.
2. ఫీచర్ బ్రాంచ్ సృష్టించండి: `git checkout -b feature/my-feature`
3. స్పష్టమైన సందేశంతో మీ మార్పులను కమిట్ చేయండి.
4. పుష్ చేసి `main`కు వ్యతిరేకంగా పుల్ రిక్వెస్ట్ తెరవండి.

దయచేసి సమర్పించే ముందు ఉన్న కోడ్ శైలిని పాటించండి మరియు Electron మరియు వెబ్ రెండు మోడ్‌లలో మీ మార్పులను పరీక్షించండి. బిల్డ్ మరియు పరీక్ష సూచనల కొరకు [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) చూడండి.

<br/>

**సమస్యలు నమోదు చేయడం:** [GitHub](https://github.com/wsj-br/transrewrt/issues)లో ఒక సమస్యను నమోదు చేయండి. మీ ప్లాట్‌ఫామ్ (విండోస్ / లినక్స్ / డాకర్) మరియు యాప్ వెర్షన్ (ఏబౌట్ డైలాగ్ లేదా రిలీజ్‌ల పేజీలో చూపబడింది) చేర్చండి.

<br/><br/>

<a id="disclaimer"></a>

## అస్వీకరణ

ఉత్పత్తి పేర్లు మరియు ఐకాన్లు వాటి సంబంధిత యజమానులకు చెందినవి మరియు గుర్తింపు ప్రయోజనాల కొరకు మాత్రమే ఉపయోగించబడ్డాయి. పేర్కొన్న బ్రాండ్లతో ఈ సాఫ్ట్‌వేర్ సంబంధం కలిగి ఉండదు లేదా వాటి మద్దతు పొందలేదు.

<br/><br/>

<a id="license"></a>
## లైసెన్స్

కాపీరైట్ © 2026 వాల్డెమార్ స్కుడెలర్ జూనియర్.

[అపాచీ లైసెన్స్ 2.0](LICENSE)