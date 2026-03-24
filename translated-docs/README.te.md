---
translated_at: "2026-03-24T03:48:39.697Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt లోగో" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="వెర్షన్"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="లైసెన్స్: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="వేదిక">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

ఎఐ-సామర్థ్య పొందిన పాఠ్య సాధనం: భాషల మధ్య అనువదించడం, వివిధ శైలులలో మళ్లీ వ్రాయడం మరియు కస్టమ్ ప్రాంప్‌లతో మార్చడం — బహుళ ఎఐ ప్రొవైడర్లను ఉపయోగించి (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI మరియు స్థానిక Ollama). డెస్క్‌టాప్ అప్లికేషన్ (Electron) లేదా స్వంతంగా హోస్ట్ చేసుకునే వెబ్ అప్లికేషన్ (Docker) గా పనిచేస్తుంది.

- **అనువాదం** — డజన్ల కొద్దీ భాషల మధ్య, ఆటోమేటిక్ సోర్స్ గుర్తింపుతో
- **మళ్లీ వ్రాయండి** — వ్యాకరణాన్ని సరిచేయండి, స్పష్టతను మెరుగుపరచండి, ఔపచారిక/అనౌపచారిక, సంక్షిప్తం చేయండి, విస్తరించండి, సాంకేతికత
- **మార్చడం** — కస్టమ్ ఎఐ ప్రాంప్‌లు; ప్రాంప్‌లను సృష్టించండి మరియు నిర్వహించండి, ప్రతి ప్రాంప్ కు ఐచ్ఛిక లక్ష్య భాష
- **చరిత్ర** — ఇన్‌పుట్/అవుట్‌పుట్ పాఠ్యంతో సహితం సంపూర్ణ అమలు చరిత్ర, వడపోత మరియు ఎగుమతి చేయడం
- **మోడల్స్ & ఖర్చు** — ఏదైనా కాన్ఫిగర్ చేసిన ప్రొవైడర్ నుండి మోడల్స్ ఎంచుకోండి; SQLite లాగ్‌తో కూడిన ఖర్చు డాష్‌బోర్డ్, మోడల్/ఆపరేషన్/రోజు వారీ సారాంశాలు
- **UI** — బహుళ భాషా ఇంటర్ఫేస్ (30+ భాషలు, RTL మద్దతు), ఫాంట్లు, ...
- **వెబ్ మోడ్** — అడ్మిన్ పాత్రలతో బహుళ వాడుకరుల మద్దతు; API కీలు సర్వర్ పక్కనే నిల్వ చేస్తాయి, బ్రౌజర్‌కు ఎప్పుడూ బహిర్గతం కావు
- **డెస్క్‌టాప్** — విండోస్ మరియు లినక్స్ కోసం Electron అప్లికేషన్
- **స్వంతంగా హోస్ట్ చేసుకోవడం** — amd64 & arm64 (రాస్ప్బెర్రీ పైకి సిద్ధంగా) కోసం Docker ఇమేజ్

ఇన్‌స్టాల్ చేసిన తర్వాత, అన్ని లక్షణాల పూర్తి నడక కోసం **[ఉపయోగ మార్గదర్శి](USER-GUIDE.te.md)** చూడండి.

<small>**ఇతర భాషలలో చదవండి:** [English (UK)](README.te.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>



<br/>

**UI మరియు డాక్యుమెంటేషన్ అనువాదాలపై గమనిక:** ఇంగ్లీష్ (UK) తప్ప మిగిలిన అన్ని ఇంటర్ఫేస్ భాషలు AI మోడళ్లను ఉపయోగించి అనువదించబడ్డాయి; పదబంధం సరిగా లేదా తప్పులను కలిగి ఉండవచ్చు.



<a id="screenshots"></a>
## స్క్రీన్‌షాట్లు

**భాష ఎంపికదారు**

![భాష ఎంపికదారు](../images/screenshots/te/language-selector.png)

**అనువాదం**

![అనువాదం](../images/screenshots/te/translate.png)

**మార్చడం - ప్రాంప్ ఎడిటర్**

![మార్చడం - ప్రాంప్ ఎడిటర్](../images/screenshots/te/transform-prompt-edit.png)

**డాష్‌బోర్డ్**

![ఖర్చు డాష్‌బోర్డ్](../images/screenshots/te/dashboard-summary.png)

**చరిత్ర**

![చరిత్ర](../images/screenshots/te/history.png)

**సెట్టింగ్స్ - మోడల్ ఎంపిక**

![సెట్టింగ్స్ - మోడల్ ఎంపిక](../images/screenshots/te/settings-models.png)

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
- [ఓపెన్‌రూటర్ API కీ పొందడం](#getting-an-openrouter-api-key)
- [కాన్ఫిగరేషన్ మరియు పర్యావరణం](#configuration-and-environment)
- [అభివృద్ధి మరియు ఆర్కిటెక్చర్](#development-and-architecture)
- [రిలీజ్‌లు మరియు ట్యాగ్‌లు](#releases-and-tags)
- [సహకరించడం](#contributing)
- [అస్వీకారణ](#disclaimer)
- [లైసెన్స్](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## త్వరిత ప్రారంభం

**డాకర్ (స్వంతంగా హోస్ట్ చేయడానికి సిఫార్సు చేయబడింది)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key`ని మీ [ఓపెన్‌రూటర్ API కీ](https://openrouter.ai/keys)తో భర్తీ చేయండి (లేదా ఇతర ప్రొవైడర్ కీలను సెట్ చేయండి; [కాన్ఫిగరేషన్](#configuration-and-environment) చూడండి). [http://localhost:5000](http://localhost:5000) వద్ద తెరవండి మరియు సేవను బహిర్గతం చేయడానికి ముందు డిఫాల్ట్ అడ్మిన్ పాస్‌వర్డ్‌ను మార్చండి.

<br/>

> ℹ️ **గమనిక**<br/>
> డాకర్‌లో, LLM అనుమతి పత్రాలను `OPENROUTER_KEY`, `OPENAI_KEY`, … వంటి పర్యావరణ వేరియబుల్స్ ద్వారా సెట్ చేస్తారు (వెబ్ ఐయులో కాదు). డెస్క్‌టాప్ (ఎలక్ట్రాన్)లో మీరు **సెట్టింగ్స్ → API** లో కీలను కాన్ఫిగర్ చేస్తారు.

<br/>

**విండోస్**

[రిలీజ్‌లు](https://github.com/wsj-br/transrewrt/releases) నుండి చివరి `Transrewrt Setup x.y.z.exe` ని డౌన్‌లోడ్ చేసుకొని, ఇన్‌స్టాలర్ ను అమలు చేసి, అప్పుడు స్టార్ట్ మెను లేదా డెస్క్‌టాప్ షార్ట్‌కట్ ద్వారా ప్రారంభించండి. మీ API కీలను **సెట్టింగ్స్ → API** లో ప్రవేశపెట్టండి. స్వలభ్య మోడల్స్ కోసం సాధారణంగా ఉపయోగించే ఓపెన్ రూటర్‌తో సహా కనీసం ఒక ప్రొవైడర్‌ని కాన్ఫిగర్ చేయాలి.

<br/>

**లినక్స్**

[రిలీజ్‌లు](https://github.com/wsj-br/transrewrt/releases) నుండి `.AppImage` డౌన్‌లోడ్ చేసుకొని, అప్పుడు:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

మీ API కీలను **సెట్టింగ్స్ → API** లో ప్రవేశపెట్టండి. స్వలభ్య మోడల్స్ కోసం సాధారణంగా ఉపయోగించే ఓపెన్ రూటర్‌తో సహా కనీసం ఒక ప్రొవైడర్‌ని కాన్ఫిగర్ చేయాలి.

Debian/Ubuntuలో, ముందు అదనపు అవసరాలను స్థాపించాల్సి ఉండవచ్చు:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

వివరాలకు [ఇన్‌స్టాలేషన్ → లినక్స్](#linux-electron) చూడండి.

<br/>

> ℹ️ **గమనిక**<br/>
> ప్రస్తుతం macOS మద్దతు లేదు. ట్రాన్స్‌రీవ్ర్ట్ విండోస్, లినక్స్ మరియు డాకర్ కోసం లభ్యంలో ఉంది.

<br/>

ఈ అప్లికేషన్ ప్రారంభమైన తర్వాత, టెక్స్ట్‌ను అనువదించడం, పునరావృతం చేయడం మరియు పరివర్తించడం, ప్రాంప్ట్‌లను నిర్వహించడం మరియు మోడల్స్‌ను కాన్ఫిగర్ చేయడం లాంటివి తెలుసుకోవడానికి **[వినియోగదారు మార్గదర్శి](USER-GUIDE.te.md)** చూడండి.

<br/><br/>

<a id="installation"></a>
## ఇన్‌స్టాలేషన్

<a id="windows-electron"></a>
### విండోస్ (ఎలక్ట్రాన్)

- [రిలీజ్‌లు](https://github.com/wsj-br/transrewrt/releases) నుండి చివరి ఇన్‌స్టాలర్‌ను డౌన్‌లోడ్ చేసుకోండి.
- `.exe` ని అమలు చేసి, ఇన్‌స్టాలర్ సూచనలను అనుసరించండి.
- మొదటి ప్రయత్నం: ప్రారంభ మెను లేదా డెస్క్‌టాప్ షార్ట్‌కట్ నుండి అప్లికేషన్‌ను ప్రారంభించండి.

<br/>

<a id="linux-electron"></a>
### లినక్స్ (ఎలక్ట్రాన్)

- [రిలీజ్‌లు](https://github.com/wsj-br/transrewrt/releases) నుండి `.AppImage` డౌన్‌లోడ్ చేసుకోండి.
- అమలు చేయండి: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- అదనపు అవసరాలు (డీబియన్/ఉబుంటు): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- మరిన్ని వివరాలకు [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) చూడండి.

<br/>

<a id="docker"></a>
### డాకర్

- పుల్ చేయండి: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- పర్యావరణం ద్వారా కనీసం ఒక ప్రొవైడర్ కీని సెట్ చేయండి (ఉదాహరణకు, ఓపెన్ రూటర్ కోసం `OPENROUTER_KEY`). రహస్యాలు ఇమేజ్ లో ఉండకుండా ఉండేందుకు, `-e` లేదా `docker compose` / `.env` ద్వారా వేరియబుల్స్‌ను పాస్ చేయండి.
- ప్రొవైడర్ కీలు వెబ్ ఐయులో **ప్రవేశపెట్టబడవు**; సర్వర్ పర్యావరణం నుండి చదువుతుంది.

ఉదాహరణ - స్థిరత్వం కోసం పేరు గల వాల్యూమ్ (పర్యావరణ ద్వారా OpenRouter కీ):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| ఐచ్ఛికం   | వివరణ                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| పోర్ట్     | `5000` ( `-p 5000:5000`తో మ్యాప్ చేయం

## ఓపెన్‌రౌటర్ API కీని పొందడం

ట్రాన్స్రివ్రైట్ అనేక ఏఐ సరఫరాదారులను మద్దతు ఇస్తుంది. [ఓపెన్‌రౌటర్](https://openrouter.ai) అనేక మోడళ్లను ఒకే కీలో సమీకరిస్తుంది మరియు ఉచిత మోడళ్లను అందిస్తుంది కాబట్టి ఇది సరసమైన ఎంపిక.

1. [openrouter.ai](https://openrouter.ai) వద్ద సైన్ అప్ చేయండి లేదా లాగిన్ అవ్వండి.
2. [Keys](https://openrouter.ai/keys) పేజీని తెరిచి, కొత్త కీని సృష్టించండి (పేరు పెట్టండి, ఎంపికను బట్టి క్రెడిట్ పరిమితిని సెట్ చేయండి). మీరు క్రెడిట్ జోడించకుండానే ఉచిత మోడళ్లను ఉపయోగించవచ్చు.
3. **డెస్క్‌టాప్ (ఎలక్ట్రాన్):** **సెట్టింగ్స్ → API** వద్ద కీలను పేస్ట్ చేయండి. **డాకర్:** పర్యావరణ వేరియబుల్స్‌ను అమర్చండి, ఉదా: `OPENROUTER_KEY` (చూడండి [త్వరిత ప్రారంభం](#quick-start)).

మీరు ఇతర సరఫరాదారులను (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) ఉపయోగించవచ్చు లేదా [Ollama](https://ollama.com) తో స్థానికంగా మోడళ్లను నడుపుతుంది. మద్దతు ఇచ్చిన సరఫరాదారుల సంపూర్ణ జాబితా మరియు పర్యావరణ వేరియబుల్స్ కోసం [కాన్ఫిగరేషన్](#configuration-and-environment) చూడండి.

పరిమితులు, BYOK మరియు మరిన్ని వివరాల కోసం, [OpenRouter ప్రమాణీకరణ](https://openrouter.ai/docs/api/reference/authentication) చూడండి.

<br/><br/>

<a id="configuration-and-environment"></a>
## కాన్ఫిగరేషన్ మరియు పర్యావరణం

**కాన్ఫిగ్ ఫైల్ స్థానాలు**

| డిప్లాయ్మెంట్         | కాన్ఫిగ్ స్థానం                                   |
| ------------------ | ------------------------------------------------- |
| ఎలక్ట్రాన్ (Windows) | `%APPDATA%\transrewrt\`                           |
| ఎలక్ట్రాన్ (Linux)   | `~/.config/transrewrt/`                           |
| వెబ్ / డాకర్       | `/app/data/config.json` (శాశ్వతంగా ఉంచుటకు వాల్యూమ్ ఉపయోగించండి) |

<br/>

**పర్యావరణ వేరియబుల్స్** (వెబ్/డాకర్ మాత్రమే; ఎలక్ట్రాన్ స్థానిక కాన్ఫిగ్ ఫైల్ ఉపయోగిస్తుంది)

| వేరియబుల్         | డిఫాల్ట్                 | వివరణ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | సర్వర్ విందించే పోర్ట్ |
| `CONFIG_PATH`    | `/app/data/config.json` | కాన్ఫిగ్ ఫైల్ కు మార్గం |
| `OPENROUTER_KEY` | *(ఖాళీ)*               | ఓపెన్‌రౌటర్ API కీ |
| `OPENAI_KEY`     | *(ఖాళీ)*               | ఓపెన్‌ఏఐ API కీ |
| `ANTHROPIC_KEY`  | *(ఖాళీ)*               | ఆంథ్రోపిక్ API కీ |
| `GOOGLE_KEY`     | *(ఖాళీ)*               | గూగుల్ జెమిని API కీ |
| `DEEPSEEK_KEY`   | *(ఖాళీ)*               | డీప్‌సీక్ API కీ |
| `GROQ_KEY`       | *(ఖాళీ)*               | గ్రాక్ API కీ |
| `MISTRAL_KEY`    | *(ఖాళీ)*               | మిస్ట్రల్ API కీ |
| `OLLAMA_URL`     | *(ఖాళీ)*               | ఓలామా బేస్ URL (ఉదా: `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(ఖాళీ)*               | xAI API కీ |

మీరు ఉపయోగించే సరఫరాదారుల మాత్రమే కాన్ఫిగర్ చేయండి. మోడల్ ఐడిలను నామవ్యవస్థలో ఉంచుతారు (`openrouter/…`, `openai/…`, `ollama/…`, మొదలైనవి).

**ఖర్చు ప్రదర్శన:** వర్తిస్తే, ఓపెన్‌రౌటర్ ఖచ్చితమైన బిల్లు కోసం ఖర్చును తిరిగి ఇస్తుంది. ఇతర సరఫరాదారులు ఓపెన్‌రౌటర్ సార్వజనిక మోడల్ ధరల నుండి **అంచనాకు** వచ్చే ఖర్చును ఉపయోగిస్తాయి, ఒకవేళ ఓపెన్‌రౌటర్ కీ అందుబాటులో ఉంటే; అలాంటి కీ లేకపోతే, ఓపెన్‌రౌటర్ కాని ఖర్చు `0`గా చూపబడవచ్చు. అంచనాలు బిల్లులు కావు.

<br/>

**డేటా మరియు స్థిరత్వం:** డాకర్ కోసం, కాంటెయినర్ పునఃప్రారంభాల ప్రతిసారి `/app/data` వద్ద వాల్యూమ్ మౌంట్ చేయండి, తద్వారా `config.json` మరియు SQLite డేటాబేస్ శాశ్వతంగా ఉంటాయి. వాల్యూమ్ లేకుంటే, కాంటెయినర్ ఆపినప్పుడు అన్నీ డేటా కోల్పోతుంది.

**అభివృద్ధిదారులు:** పాత ఏకైక-కీ కాన్ఫిగరేషన్ ను భర్తీ చేసే మార్పులను పుల్ చేసిన తర్వాత, మీ స్థానిక ఫైల్ `api_key`, `api_url`, ప్రాక్సీ ఐచ్ఛికాలు వంటి తొలగించిన ఫీల్డ్‌లను ఉపయోగించినట్లయితే, `src/config-defaults/config_default.json` లోని కొత్త డిఫాల్ట్ ఆకృతితో `data/config.json` ని రీసెట్ లేదా కలపండి.

<br/>

**వెబ్ ప్రమాణీకరణ:**

- డిఫాల్ట్ అడ్మిన్: `admin` / `transrewrt26`.
- **సెట్టింగ్స్ → వాడుకరులు** వద్ద వాడుకరులను నిర్వహించండి.
- పాస్‌వర్డ్ రీసెట్ చేయడానికి: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (మూలం నుండి: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **హెచ్చరిక**<br/>
> ఏదైనా నెట్‌వర్క్-యాక్సిసబుల్ హోస్ట్ వద్ద వెంటనే డిఫాల్ట్ అడ్మిన్ పాస్‌వర్డ్ ని మార్చండి.

<br/>

కీ సెట్టింగ్‌లు (ఫాంట్, మోడళ్లు, భాషలు, మొదలైనవి) అనువర్తన సెట్టింగ్‌లలో లభ్యం.

<br/><br/>

<a id="development-and-architecture"></a>
## అభివృద్ధి మరియు ఆర్కిటెక్చర్

- **అభివృద్ధి:** సెటప్, బిల్డ్, పరీక్ష మరియ

## విడుదలలు మరియు ట్యాగులు

- **Git ట్యాగులు** `v`* (ఉదా: `v1.0.10`) [విడుదల పనిప్రవాహాన్ని](.github/workflows/release.yml) ప్రారంభిస్తాయి. **GitHub రిలీజ్‌లు** విండోస్ ఇన్‌స్టాలర్ (`.exe`) మరియు Linux AppImage లను జోడిస్తాయి.
- **డాకర్ ఇమేజీలు** `ghcr.io/wsj-br/transrewrt`కి ప్రచురించబడతాయి. ఇమేజ్ ట్యాగులు Git వెర్షన్‌తో సరిపోతాయి (ఉదా: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) మరియు `latest` కూడా. మల్టీ-ఆర్క్: `linux/amd64` మరియు `linux/arm64` (ఉదా: Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## సహకరించండి

1. రిపోజిటరీని ఫార్క్ చేయండి.
2. ఒక ఫీచర్ బ్రాంచ్ సృష్టించండి: `git checkout -b feature/my-feature`
3. స్పష్టమైన సందేశంతో మీ మార్పులను కమిట్ చేయండి.
4. పుష్ చేసి `main`కు ఎదురుగా పుల్ రిక్వెస్ట్ తెరవండి.

సమర్పించే ముందు ప్రస్తుతం ఉన్న కోడ్ శైలిని అనుసరించండి మరియు Electron మరియు వెబ్ రెండు మోడ్‌లలో మీ మార్పులను పరీక్షించండి. నిర్మాణం మరియు పరీక్ష సూచనల కొరకు [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)ని చూడండి.

<br/>

**సమస్యలను నివేదించడం:** [GitHub](https://github.com/wsj-br/transrewrt/issues)లో ఒక సమస్యను తెరవండి. మీ ప్లాట్‌ఫామ్ (విండోస్ / లినక్స్ / డాకర్) మరియు అప్లికేషన్ వెర్షన్ (సుమారు డైలాగ్ లో లేదా రిలీజ్ పేజీలో చూపబడింది) చేర్చండి.

<br/><br/>

<a id="disclaimer"></a>
## విడుదల చేయడం

ఉత్పత్తి పేర్లు మరియు చిహ్నాలు వాటి సంబంధిత యజమానులకు చెందినవి మరియు గుర్తింపు ప్రయోజనాల కొరకు మాత్రమే ఉపయోగించబడతాయి. ఈ సాఫ్ట్‌వేర్ చెప్పబడిన ఏ బ్రాండ్‌లతో అనుబంధం కలిగి ఉండదు లేదా వాటిచే అనుమతించబడదు.

<br/><br/>

<a id="license"></a>
## లైసెన్స్

కాపీరైట్ © 2026 వాల్డేమార్ స్కుడెలర్ జూనియర్.

[అపాచీ లైసెన్స్ 2.0](LICENSE)