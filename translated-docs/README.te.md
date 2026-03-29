---
translated_at: "2026-03-28T23:06:04.142Z"
source_hash: "e9ea44c8ee71135cfaa88417e93be66dde6feae3d1970ce7c2ff555de1fc3376"
source_mtime: "2026-03-28T22:34:35.283Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt బ్యానర్"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="వెర్షన్"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="లైసెన్స్: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="వేదిక">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-శక్తితో కూడిన టెక్స్ట్ టూల్: భాషల మధ్య అనువాదం చేయడం, వేర్వేరు శైలులలో తిరిగి వ్రాయడం మరియు కస్టమ్ ప్రాంప్ట్లతో మార్చడం — బహుళ AI ప్రొవైడర్లను ఉపయోగించి (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, మరియు స్థానిక Ollama). ఇది డెస్క్టాప్ అప్లికేషన్ (Electron) లేదా స్వతంత్రంగా హోస్ట్ చేయబడిన వెబ్ అప్లికేషన్ (Docker) గా పనిచేస్తుంది.

- **అనువాదం** — డజన్ల కొద్దీ భాషల మధ్య, స్వయంచాలక మూల గుర్తింపుతో
- **తిరిగి రాయండి** — వ్యాకరణాన్ని సరిచేయండి, స్పష్టతను మెరుగుపరుచుకోండి, ఔపచారిక/అనౌపచారిక, సంక్షిప్తీకరించండి, విస్తరించండి, సాంకేతిక
- **మార్చండి** — అనుకూల AI ప్రాంప్ట్లు; ప్రతి ప్రాంప్ట్కు లక్ష్య భాషను ఐచ్ఛికంగా ఎంచుకొని ప్రాంప్ట్లను సృష్టించండి మరియు నిర్వహించండి
- **చరిత్ర** — పూర్తి నిర్వహణ చరిత్ర, ఇన్‌పుట్/అవుట్‌పుట్ పాఠంతో కూడినది, ఫిల్టరింగ్ మరియు ఎగుమతి
- **నమూనాలు & ఖర్చు** — ఏదైనా కాన్ఫిగర్ చేయబడిన ప్రొవైడర్ నుండి నమూనాలను ఎంచుకోండి; లాగ్, నమూనా/కార్యాచరణ/రోజు వారీ సారాంశాలతో ఖర్చు మరియు వినియోగ డాష్‌బోర్డ్‌లు
- **UI** — బహుభాషా ఇంటర్‌ఫేస్ (30+ భాషలు, RTL మద్దతు), ఫాంట్లు, ...
- **వెబ్ మోడ్** — కొన్ని కీలకపాత్ర కలిగిన సూపర్వైజర్ సహాయంతో బహుళ వాడుకరి మద్దతు
- **డెస్క్‌టాప్** — విండోస్ మరియు లినక్స్ కోసం ఎలెక్ట్రాన్ అప్లికేషన్
- **సొంత-హోస్ట్ చేయబడినవి** — amd64 & arm64 (రాస్ప్బెర్రీ పై-సిద్ధంగా) కోసం డాకర్ ఇమేజ్

స్థాపించిన తర్వాత అన్ని లక్షణాలకు సమగ్ర మార్గదర్శకం కోసం **[యూజర్ గైడ్](USER-GUIDE.te.md)** చూడండి.

<small>**ఇతర భాషలలో చదవండి:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI మరియు పత్రీకరణ అనువాదాల గురించి గమనిక:** ప్రాథమిక ఇంగ్లీష్ (UK) తప్ప మిగిలిన అన్ని ఇంటర్‌ఫేస్ భాషలు 
> AI మోడల్స్ ఉపయోగించి అనువదించబడ్డాయి; భాష స్పష్టంగా లేదా లోపాలు కలిగి ఉండవచ్చు.

</small>

<br/>

<a id="screenshots"></a>

## స్క్రీన్‌షాట్లు

**భాషా ఎంపిక**

![భాషా ఎంపిక](../images/screenshots/te/language-selector.png)

**అనువదించు**

![అనువదించు](../images/screenshots/te/translate.png)

**పరివర్తన - ప్రాంప్ట్ ఎడిటర్**

![పరివర్తన - ప్రాంప్ట్ ఎడిటర్](../images/screenshots/te/transform-prompt-edit.png)

**డాష్‌బోర్డ్**

![డాష్‌బోర్డ్ సారాంశం — ఉపయోగం](../images/screenshots/te/dashboard-summary.png)

**చరిత్ర**

![చరిత్ర](../images/screenshots/te/history.png)

**సెట్టింగులు - మోడల్ ఎంపిక**

![సెట్టింగులు - మోడల్ ఎంపిక](../images/screenshots/te/settings-models.png)

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
- [ఓపెన్‌రౌటర్ API కీని పొందడం](#getting-an-openrouter-api-key)
- [కాన్ఫిగరేషన్ మరియు పరిసరాలు](#configuration-and-environment)
- [అభివృద్ధి మరియు ఆర్కిటెక్చర్](#development-and-architecture)
- [సమస్యలను నివేదించడం](#reporting-issues)
- [అస్వీకరణ](#disclaimer)
- [లైసెన్స్](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## త్వరిత ప్రారంభం

**డాకర్ (స్వీయ-హోస్టింగ్‌కు సిఫార్సు చేయబడింది)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key`ని మీ [OpenRouter API కీ](https://openrouter.ai/keys)తో భర్తీ చేయండి (లేదా ఇతర ప్రొవైడర్ కీలను అమర్చండి; [కాన్ఫిగరేషన్](#configuration-and-environment) చూడండి). [http://localhost:5000](http://localhost:5000)ని తెరిచి, సేవను బహిర్గతం చేయడానికి ముందు డిఫాల్ట్ నిర్వాహక పాస్వర్డ్‌ను మార్చండి.

<br/>

> ℹ️ **గమనిక**<br/>
> డాకర్‌లో, LLM ప్రమాణపత్రాలు `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … వంటి పర్యావరణ వేరియబుల్స్ ద్వారా అమర్చబడతాయి (వెబ్ యూజర్ ఇంటర్ఫేస్‌లో కాదు). డెస్క్టాప్ (ఎలక్ట్రాన్)లో మీరు **సెట్టింగ్స్ → API**లో కీలను నెలకొల్పుతారు.

<br/>

**విండోస్**

తాజా `Transrewrt Setup x.y.z.exe` ని [రిలీజ్‌లు](https://github.com/wsj-br/transrewrt/releases) నుండి డౌన్‌లోడ్ చేసుకోండి, ఇన్‌స్టాలర్‌ను నడిపి, ఆపై స్టార్ట్ మెనూ లేదా డెస్క్‌టాప్ షార్ట్‌కట్ ద్వారా ప్రారంభించుకోండి. **సెట్టింగ్స్ → API** లో మీ API కీలను నమోదు చేయండి. మీరు కనీసం ఒక ప్రొవైడర్‌ను కాన్ఫిగర్ చేయాలి, ఉచిత మోడళ్లకు ఓపెన్‌రౌటర్ సాధారణం.

<br/>

**లినక్స్**

తక్కువ PCలకు `x64`, చాలా ARM పరికరాలకు (రాస్ప్బెర్రీ పై 4+ సహా) `arm64` ను ఉపయోగించి [రిలీజ్‌లు](https://github.com/wsj-br/transrewrt/releases) నుండి మీ CPUకు సరిపోయే `.AppImage` డౌన్‌లోడ్ చేసుకోండి, ఆపై:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**సెట్టింగ్స్ → API** లో మీ API కీలు నమోదు చేయండి. మీరు కనీసం ఒక ప్రొవైడర్‌ను కాన్ఫిగర్ చేయాలి, ఉచిత మోడళ్లకు ఓపెన్‌రౌటర్ సాధారణం.

Debian/Ubuntu లో అదనపు ఆధారాలను ముందుగా ఇన్‌స్టాల్ చేయాల్సి ఉండవచ్చు:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

వివరాలకు [ఇన్‌స్టాలేషన్ → లినక్స్](#linux-electron) చూడండి.

<br/>

> ℹ️ **గమనిక**<br/>

> ప్రస్తుతం macOS ఇంకా మద్దతు ఇవ్వబడలేదు. ట్రాన్స్రీవర్ట్ Windows, Linux మరియు Docker కోసం అందుబాటులో ఉంది.

<br/>

అప్లికేషన్ నడుస్తున్నప్పుడు, టెక్స్ట్‌ను అనువదించడం, తిరిగి వ్రాయడం మరియు మార్చడం, ప్రాంప్ట్‌లను నిర్వహించడం మరియు మోడల్‌లను ఎలా కాన్ఫిగర్ చేయాలో తెలుసుకోవడానికి **[వినియోగదారు మార్గదర్శకం](USER-GUIDE.te.md)** చూడండి.

<br/><br/>

<a id="installation"></a>

## ఇన్‌స్టాలేషన్

<a id="windows-electron"></a>

### విండోస్ (ఎలక్ట్రాన్)

- [రిలీజ్‌లు](https://github.com/wsj-br/transrewrt/releases) నుండి తాజా ఇన్స్టాలర్‌ను డౌన్‌లోడ్ చేసుకోండి.
- `.exe` ఫైల్‌ను రన్ చేసి, ఇన్స్టాలర్ సూచనలను అనుసరించండి.
- మొదటిసారి రన్ చేయడం: ప్రారంభ మెనూ లేదా డెస్క్‌టాప్ షార్ట్‌కట్ నుండి అప్లికేషన్‌ను ప్రారంభించండి.

<br/>

> ℹ️ **గమనిక**<br/>
> విండోస్ ఈ కింది భద్రతా హెచ్చరికలలో ఒకదాన్ని చూపించవచ్చు (సంతకం చేయని/స్వతంత్ర అప్లికేషన్‌లకు సాధారణం):
>   - **యూజర్ అకౌంట్ కంట్రోల్ (UAC)**: "తెలియని ప్రచురణకర్త యొక్క ఈ అనువర్తనం మీ పరికరంలో మార్పులు చేయడానికి మీరు అనుమతిస్తున్నారా?" → **అవును** పై క్లిక్ చేయండి.
>   - **మైక్రోసాఫ్ట్ డిఫెండర్ స్మార్ట్‌స్క్రీన్**: "విండోస్ మీ PC ను రక్షించింది" → **మరిన్ని సమాచారం** → **అయినా రన్ చేయి** పై క్లిక్ చేయండి.
>
> ఎందుకంటే ఈ అప్లికేషన్ మైక్రోసాఫ్ట్ లేదా పెద్ద ప్రచురణకర్త ద్వారా సంతకం చేయబడలేదు—మేము అధికారిక గిట్‌హబ్ రిలీజ్‌ల నుండి డౌన్‌లోడ్ చేసుకుంటే ఇది సురక్షితం
> (క్రింద ఉన్న SHA256 చెక్‌సమ్‌ను ధృవీకరించండి).

<br/>

<a id="linux-electron"></a>

### లినక్స్ (ఎలెక్ట్రాన్)

- [రిలీజ్‌లు](https://github.com/wsj-br/transrewrt/releases) వద్ద నుండి సరిపోయే `.AppImage` ని (`x64` లేదా `arm64`) డౌన్‌లోడ్ చేసుకోండి.
- x86_64/amd64లో `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` అని రన్ చేయండి లేదా ARM64లో `...-arm64.AppImage` ఫైల్ పేరు ఉపయోగించండి.
- అదనపు అవసరాలు (డెబియన్/ఉబుంటు): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- ఇంకా తెలుసుకోవడానికి [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) చూడండి.

<br/>

<a id="docker"></a>

### డాకర్

- పుల్ చేయండి: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- పర్యావరణం ద్వారా కనీసం ఒక ప్రొవైడర్ కీని సెట్ చేయండి (ఉదా: OpenRouter కోసం `OPENROUTER_API_KEY`). రహస్యాలు ఇమేజీలో చొప్పించబడకుండా, `-e` లేదా `docker compose` / `.env`తో వేరియబుల్స్ పాస్ చేయండి.
- ప్రొవైడర్ కీలు వెబ్ UIలో **ప్రవేశపెట్టబడవు**; సర్వర్ వాటిని పర్యావరణం నుండి చదుస్తుంది.

ఉదాహరణ - స్థిరత్వానికి పేరుతో కూడిన వాల్యూమ్ (పర్యావరణం ద్వారా OpenRouter కీ):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

ఇంకా Docker Compose ఉపయోగించడం మీకు నచ్చితే, ఉపయోగించండి:

```
# కాంపోజ్ ఫైల్‌ను డౌన్‌లోడ్ చేయండి
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# API_KEYS జోడించడానికి ఫైల్‌ను సవరించండి
vi transrewrt.yml
# కంటైనర్‌ను ప్రారంభించండి
docker compose -f transrewrt.yml up -d
```

<br/>

| ఎంపిక | వివరణ |
|--------|-------|
| పోర్ట్ | `5000` (`-p 5000:5000`తో మ్యాప్ చేయబడింది) |
| వాల్యూమ్ | కాన్ఫిగ్ మరియు డేటాబేస్ పారిశుధ్యం కోసం `/app/data` మౌంట్ చేయండి |
| పర్యావరణ వేరియబుల్స్ | `PORT`, `CONFIG_PATH`, ప్లస్ LLM కీలు (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - [కాన్ఫిగరేషన్](#configuration-and-environment) చూడండి |

సోర్స్ నుండి బిల్డ్ చేసి నడుపుటకు: `docker compose up --build -d` లేదా `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) చూడండి.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## ఓపెన్‌రౌటర్ ఐపిఎస్ కీ పొందడం

ట్రాన్స్‌రీవ్రిట్ అనేక ఏఐ ప్రొవైడర్‌లను మద్దతు ఇస్తుంది. [ఓపెన్‌రౌటర్](https://openrouter.ai) అనేక మోడల్‌లను ఒకే కీ కింద కలుపుతుంది మరియు ఉచిత మోడల్‌లను అందిస్తుంది కాబట్టి ఇది సరసమైన ఎంపిక.

1. [openrouter.ai](https://openrouter.ai) లో సైన్ అప్ లేదా లాగిన్ అవ్వండి.
2. [Keys](https://openrouter.ai/keys) పేజీ తెరిచి, కొత్త కీ సృష్టించండి (పేరు ఇవ్వండి, ఎంపికను బట్టి క్రెడిట్ పరిమితిని సెట్ చేయండి). క్రెడిట్ జోడించకుండా ఉచిత మోడల్‌లను ఉపయోగించవచ్చు.
3. **డెస్క్‌టాప్ (ఎలక్ట్రాన్):** **సెట్టింగ్‌లు → ఐపిఎస్** లో కీ పేస్ట్ చేయండి. **డాకర్:** `OPENROUTER_API_KEY` వంటి ఎన్విరాన్మెంట్ వేరియబుల్స్ సెట్ చేయండి (చూడండి [త్వరిత ప్రారంభం](#quick-start)).

అనువాదం, పునర్వ్రాత, లేదా మార్పు కోసం ఓపెన్ రౌటర్ యొక్క **బాడీ బిల్డర్ మాడల్** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ఉపయోగించవద్దు: ఇది ఆ పనులకు పూర్తి కాబోయే టెక్స్ట్ కాకుండా JSON రిక్వెస్ట్ పేలోడ్లను అందిస్తుంది. వినియోగదారు మార్గదర్శకిలో [సెట్టింగ్‌లు → మోడల్‌లు](USER-GUIDE.te.md#models) చూడండి.

మీరు ఇతర ప్రొవైడర్లను (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ఉపయోగించవచ్చు లేదా [Ollama](https://ollama.com)తో స్థానికంగా మోడల్స్ నడుపుతారు. మద్దతు ఇచ్చే ప్రొవైడర్లు మరియు పర్యావరణ వేరియబుల్స్ సంపూర్ణ జాబితా కొరకు [కాన్ఫిగరేషన్](#configuration-and-environment)ని చూడండి.

> ⚠️ **హెచ్చరిక**<br/>
> మీరు మరొక పరికరం, కంటైనర్ లేదా సేవ నుండి Ollama ఉపయోగిస్తుంటే, Ollamaని బాహ్య కనెక్షన్లకు (కేవలం localhost కాదు) అనుమతించడానికి కాన్ఫిగర్ చేయడం గుర్తుంచుకోండి.

పరిమితులు, BYOK, మరియు మరిన్నింటి కొరకు, [OpenRouter ప్రామాణీకరణ](https://openrouter.ai/docs/api/reference/authentication)ని చూడండి.

<br/><br/>

<a id="configuration-and-environment"></a>

## కాన్ఫిగరేషన్ మరియు పర్యావరణం

**కాన్ఫిగ్ ఫైల్ స్థానాలు**

| ప్రాధాన్యత         | కాన్ఫిగ్ స్థానం                                  |
| ------------------ | ------------------------------------------------- |
| ఎలక్ట్రాన్ (విండోస్) | `%APPDATA%\transrewrt\`                           |
| ఎలక్ట్రాన్ (లినక్స్)  | `~/.config/transrewrt/`                           |
| వెబ్ / డాకర్       | `/app/data/config.json` (స్థిరత కోసం సంపుటి ఉపయోగించండి) |

<br/>

**పర్యావరణ వేరియబుల్స్** (వెబ్/డాకర్ మాత్రమే; ఎలక్ట్రాన్ స్థానిక కాన్ఫిగ్ ఫైల్ ఉపయోగిస్తుంది)

| వేరియబుల్          | డిఫాల్ట్                  | వివరణ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | సర్వర్ విందించి పోర్ట్ |
| `CONFIG_PATH`    | `/app/data/config.json` | కాన్ఫిగ్ ఫైల్ పాథ్ |
| `OPENROUTER_API_KEY` | *(ఖాళీ)*               | ఓపెన్‌రూటర్ API కీ |
| `OPENAI_API_KEY`     | *(ఖాళీ)*               | ఓపెన్‌ఎఐ API కీ |
| `CEREBRAS_API_KEY`   | *(ఖాళీ)*               | సెరెబ్రస్ API కీ |

| `ANTHROPIC_API_KEY`  | *(ఖాళీ)*               | Anthropic API కీ |
| `GOOGLE_API_KEY`     | *(ఖాళీ)*               | Google Gemini API కీ |
| `DEEPSEEK_API_KEY`   | *(ఖాళీ)*               | DeepSeek API కీ |
| `GROQ_API_KEY`       | *(ఖాళీ)*               | Groq API కీ |
| `MISTRAL_API_KEY`    | *(ఖాళీ)*               | Mistral API కీ |
| `OLLAMA_URL`     | *(ఖాళీ)*               | Ollama బేస్ URL (ఉదా: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(ఖాళీ)*               | xAI API కీ |

మీరు ఉపయోగించే ప్రొవైడర్స్ మాత్రమే సెటప్ చేయండి. మోడల్ IDలు నేమ్‌స్పేస్ చేయబడతాయి (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, మొదలైనవి).

**ఖర్చు ప్రదర్శన:** OpenRouter సందర్భానుసారం ఖచ్చితమైన బిల్లు ఖర్చును తిరిగి ఇస్తుంది. ఇతర ప్రొవైడర్స్ OpenRouter కీ లభిస్తే OpenRouter యొక్క పబ్లిక్ మోడల్ ధరల ప్రకారం **అంచనా** ఖర్చుని ఉపయోగిస్తాయి; లేకపోతే, నాన్-OpenRouter ఖర్చు `0`గా కనిపించవచ్చు. అంచనాలు బిల్లులు కావు.

<br/>

**డేటా మరియు స్థిరత్వం:** Docker కోసం, `/app/data` వద్ద ఒక వాల్యూమ్‌ని మౌంట్ చేయండి కాబట్టి `config.json` మరియు SQLite డేటాబేస్ కంటైనర్ రీస్టార్ట్‌ల సమయంలో కొనసాగుతాయి. వాల్యూమ్ లేకుండా, కంటైనర్ ఆగిపోయినప్పుడు అన్ని డేటా పోతుంది.

**డెవలపర్స్:** పాత single-key కాన్ఫిగ్‌ను భర్తీ చేసే మార్పులు తీసుకురావడానికి తరువాత, మీ స్థానిక ఫైల్ ఇప్పటికీ తొలగించిన ఫీల్డ్‌లను (`api_key`, `api_url`, ప్రాక్సీ ఐచ్ఛికాలు) ఉపయోగిస్తుంటే, `src/config-defaults/config_default.json` లోని కొత్త డిఫాల్ట్ ఆకృతితో కలిపి `data/config.json`ని రీసెట్ చేయండి.

<br/>

**వెబ్ ప్రామాణీకరణ:**

- డిఫాల్ట్ నిర్వాహకుడు: `admin` / `transrewrt26`.
- **సెట్టింగ్స్ → వాడుకరులు**లో వాడుకరులను నిర్వహించండి.
- పాస్‌వర్డ్ పునరుద్ధరించు: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (మూలం నుండి: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **హెచ్చరిక**<br/>
> ఏదైనా నెట్‌వర్క్-యాక్సిసబుల్ హోస్ట్ లో డిఫాల్ట్ నిర్వాహకుడి పాస్‌వర్డ్‌ను తక్షణం మార్చండి.

<br/>

కీలక సెట్టింగ్స్ (ఫాంట్, మోడల్స్, భాషలు, మొదలైనవి) అప్లికేషన్ సెట్టింగ్స్ లో అందుబాటులో ఉన్నాయి.

<br/><br/>

<a id="development-and-architecture"></a>

## అభివృద్ధి మరియు నిర్మాణం

- **అభివృద్ధి:** సెటప్, బిల్డ్, పరీక్ష మరియు ఇన్స్టాల్ చేయడం (ఎలక్ట్రాన్, వెబ్, డాకర్) - **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** చూడండి.
- **వాస్తుశిల్పం మరియు సిస్టమ్ అవలోకనం:** స్థాపన నిర్మాణం, టెక్ స్టాక్, డిజైన్ నిర్ణయాలు - **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** చూడండి.

<br/><br/>

<a id="reporting-issues"></a>

## సమస్యలను నివేదించడం

[GitHub](https://github.com/wsj-br/transrewrt/issues)లో ఒక సమస్యను తెరవండి. మీ ప్లాట్‌ఫారమ్ (Windows / Linux / Docker) మరియు అప్లికేషన్ వెర్షన్ (About డైలాగ్ లో లేదా Releases పేజీలో చూపబడింది) ని చేర్చండి.

<br/><br/>

<a id="disclaimer"></a>

## అస్వీకరణ

ఉత్పత్తి పేర్లు మరియు చిహ్నాలు వాటి యొక్క సంబంధిత యజమానులకు చెందినవి మరియు గుర్తింపు ప్రయోజనాల కొరకు మాత్రమే ఉపయోగించబడ్డాయి. పేర్కొన్న వాటిలో ఏ బ్రాండ్‌తోనూ ఈ సాఫ్ట్‌వేర్ సంబంధం కలిగి లేదు లేదా ప్రోత్సహించబడలేదు.

<br/><br/>

<a id="license"></a>

## లైసెన్స్

కాపీరైట్ © 2026 వాల్డెమార్ స్కుడెల్లర్ జూనియర్.

[అపాచీ లైసెన్స్ 2.0](LICENSE)