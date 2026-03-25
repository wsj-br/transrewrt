---
translated_at: "2026-03-25T22:48:03.336Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
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

AI సాయుత పాఠ్య సాధనం: భాషల మధ్య అనువాదం చేయడం, వేర్వేరు శైలులలో మళ్లీ వ్రాయడం మరియు కస్టమ్ ప్రాంప్ట్లతో మార్చడం — బహుళ AI ప్రొవైడర్లను ఉపయోగించి (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, మరియు స్థానిక Ollama). డెస్క్టాప్ అప్లికేషన్ (Electron) లేదా స్వంత హోస్ట్ చేయబడిన వెబ్ అప్లికేషన్ (Docker) గా నడుస్తుంది.

- **అనువాదం** — డజన్ల కొద్దీ భాషల మధ్య, స్వయం స్ర్కిప్ట్ గుర్తింపుతో
- **మళ్లీ వ్రాయి** — వ్యాకరణాన్ని సరిచేయండి, స్పష్టతను మెరుగుపరచండి, ఔపచారిక/అనౌపచారిక, సంక్షిప్తీకరించండి, విస్తరించండి, సాంకేతికంగా మార్చండి
- **మార్చు** — కస్టమ్ AI ప్రాంప్ట్లు; ప్రాంప్ట్లు సృష్టించడం, నిర్వహించడం, ప్రతి ప్రాంప్ట్ కు ఐచ్ఛిక లక్ష్య భాష
- **చరిత్ర** — ఇన్‌పుట్/అవుట్‌పుట్ పాఠ్య ఫిల్టరింగ్ మరియు ఎగ్జార్ట్ తో పాటు పూర్తి నిర్వహణ చరిత్ర
- **మోడల్స్ & ఖర్చు** — ఏ ఆమోదిత ప్రొవైడర్ నుండైనా మోడళ్లు ఎంచుకోండి; లాగ్, మోడల్/ఆపరేషన్/రోజు వారీ సారాంశాలతో ఖర్చు మరియు ఉపయోగం డాష్‌బోర్డ్లు
- **UI** — బహుళ భాషా ఇంటర్‌ఫేస్ (30+ భాషలు, RTL మద్దతు), ఫాంట్లు, ...
- **వెబ్ మోడ్** — అడ్మిన్ పాత్రలతో బహుళ వాడుకరి మద్దతు
- **డెస్క్టాప్** — Windows మరియు Linux కోసం Electron అనువర్తనం
- **స్వంత హోస్టింగ్** — amd64 & arm64 (రాస్ప్బెర్రీ పై-సిద్ధం) కోసం Docker చిత్రం

ఇన్స్టాల్ చేసిన తర్వాత, అన్ని లక్షణాల పూర్తి పరిశీలన కోసం **[వాడుకరి మార్గదర్శి](USER-GUIDE.te.md)** చూడండి.

<small>**ఇతర భాషలలో చదవండి:** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI మరియు పత్రాల అనువాదం గురించి గమనిక:** మూల ఆంగ్లం (UK) తప్ప మిగిలిన అన్ని ఇంటర్‌ఫేస్ భాషలు
> AI మోడళ్లను ఉపయోగించి అనువదించబడ్డాయి; పదబంధాలు సరిగ్గా లేకుండా లేదా పొరుపులు కలిగి ఉండవచ్చు.

</small>

<br/>

<a id="screenshots"></a>
## స్క్రీన్‌షాట్లు

**భాష ఎంపిక**

![భాష ఎంపిక](../images/screenshots/te/language-selector.png)

**అనువాదం**

![అనువాదం](../images/screenshots/te/translate.png)

**మార్చు - ప్రాంప్ట్ ఎడిటర్**

![మార్చు - ప్రాంప్ట్ ఎడిటర్](../images/screenshots/te/transform-prompt-edit.png)

**డాష్బోర్డ్**

![ఖర్చు డాష్బోర్డ్](../images/screenshots/te/dashboard-summary.png)

**చరిత్ర**

![చరిత్ర](../images/screenshots/te/history.png)

**సెట్టింగ్లు - మోడల్ ఎంపిక**

![సెట్టింగ్లు - మోడల్ ఎంపిక](../images/screenshots/te/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## సూచీ

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [త్వరిత ప్రారంభం](#quick-start)
- [ఇన్స్టాలేషన్](#installation)
  - [విండోస్ (Electron)](#windows-electron)
  - [లినక్స్ (Electron)](#linux-electron)
  - [డాకర్](#docker)
- [ఓపెన్రౌటర్ API కీని పొందడం](#getting-an-openrouter-api-key)
- [కాన్ఫిగరేషన్ మరియు పర్యావరణం](#configuration-and-environment)
- [అభివృద్ధి మరియు స్థాపత్యం](#development-and-architecture)
- [రిలీస్లు మరియు ట్యాగ్లు](#releases-and-tags)
- [సహకారం](#contributing)
- [అస్వీకార ప్రకటన](#disclaimer)
- [లైసెన్స్](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## త్వరిత ప్రారంభం

**డాకర్ (స్వతంత్రంగా హోస్ట్ చేయడానికి సిఫార్సు చేయబడింది)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` స్థానంలో మీ [OpenRouter API key](https://openrouter.ai/keys) పెట్టండి (లేదా ఇతర ప్రొవైడర్ కీలను సెట్ చేయండి; చూడండి [Configuration](#configuration-and-environment)). [http://localhost:5000](http://localhost:5000) కి వెళ్లి, సేవను బయటపెట్టే ముందు డిఫాల్ట్ నిర్వాహక పాస్వర్డ్ మార్చండి.

<br/>

> ℹ️ **గమనిక**<br/>
> డాకర్లో, LLM అనుమతి పత్రాలు వాతావరణ చరరాశులతో ఉంటాయి, ఉదా: `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (వెబ్ UIలో కాదు). డెస్క్టాప్ (Electron)లో మీరు **Settings → API** లో కీలను నిర్వహిస్తారు.

<br/>

**విండోస్**

[రిలీస్లు](https://github.com/wsj-br/transrewrt/releases) నుండి చివరి `Transrewrt Setup x.y.z.exe` డౌన్‌లోడ్ చేసుకొని, ఇన్‌స్టాలర్ ను అమలు చేయండి, తర్వాత స్టార్ట్ మెను లేదా డెస్క్ షార్ట్‌కట్ నుండి ప్రారంభించండి. **Settings → API** లో మీ API కీలు నమోదు చేయండి. కనీసం ఒక ప్రొవైడర్‌ను నమోదు చేయాలి, ఉచిత మాడల్స్ కు ఓపెన్‌రౌటర్ సాధారణం.

<br/>

**లినక్స్**

[రిలీస్లు](https://github.com/wsj-br/transrewrt/releases) నుండి మీ CPU కు సరిపోయే `.AppImage` డౌన్‌లోడ్ చేసుకోండి (`x64` సాధారణ PCల కోసం, `arm64` అనేక ARM పరికరాల కోసం, రాస్ప్బెర్రీ పై 4+ సహా), తర్వాత:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**Settings → API** లో మీ API కీలు నమోదు చేయండి. కనీసం ఒక ప్రొవైడర్‌ను కాన్ఫిగర్ చేయాలి, ఉచిత మాడల్స్ కు ఓపెన్‌రౌటర్ సాధారణం.

డీబియన్/ఉబుంటులో, ముందుగా అదనపు అవసరాలను ఇన్‌స్టాల్ చేయాల్సి ఉండవచ్చు:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

వివరాలకు [Installation → Linux](#linux-electron) చూడండి.

<br/>

> ℹ️ **గమనిక**<br/>
> ప్రస్తుతానికి macOS మద్దతు ఇవ్వబడలేదు. విండోస్, లినక్స్ మరియు డాకర్ కోసం Transrewrt అందుబాటులో ఉంది.

<br/>

అనువర్తనం ప్రారంభమైన తర్వాత, ప్రామ్ప్ట్ నిర్వహణ, మాడల్ కాన్ఫిగరేషన్ లతో పాటు టెక్స్ట్ ను అనువదించడం, పునర్రాపించడం మరియు మార్చడం గురించి తెలుసుకోవడానికి **[యూజర్ గైడ్](USER-GUIDE.te.md)** చూడండి.

<br/><br/>

<a id="installation"></a>
## ఇన్స్టాలేషన్

<a id="windows-electron"></a>
### విండోస్ (Electron)

- [రిలీస్లు](https://github.com/wsj-br/transrewrt/releases) నుండి చివరి ఇన్‌స్టాలర్ డౌన్‌లోడ్ చేసుకోండి.
- `.exe` ను నడిపి, ఇన్‌స్టాలర్ సూచనలను అనుసరించండి.
- మొట్టమొదటి సారి నడుస్తున్నప్పుడు: స్టార్ట్ మెను లేదా డెస్క్ షార్ట్‌కుట్ నుండి అనువర్తనం ప్రారంభించండి.

<br/>

<a id="linux-electron"></a>
### లినక్స్ (Electron)

- [రిలీస్లు](https://github.com/wsj-br/transrewrt/releases) నుండి సరిపడిన `.AppImage` (`x64` లేదా `arm64`) డౌన్‌లోడ్ చేసుకోండి.
- నడుపుము: x86_64/amd64 కోసం `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`, లేదా ARM64 లో `...-arm64.AppImage` ఫైల్ పేరు ఉపయోగించండి.
- అదనపు అవసరాలు (డీబియన్/ఉబుంటు): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- మరింత కోసం [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) చూడండి.

<br/>

<a id="docker"></a>
### డాకర్

- పుల్ చేయండి: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- కనీసం ఒక ప్రొవైడర్ కీని పర్యావరణ వేరియబుల్ ద్వారా సెట్ చేయండి (ఉదా: ఓపెన్‌రౌటర్ కోసం `OPENROUTER_KEY`). రహస్యాలు ఇమేజ్‌లో కష్టంగా పొందుపరచబడకుండా ఉండేందుకు `-e` లేదా `docker compose` / `.env` ద్వారా వేరియబుల్స్ పాస్ చేయండి.
- ప్రొవైడర్ కీలు **వెబ్ UI లో** నమోదు చేయబడవు; సర్వర్ వాతావరణం నుండి వాటిని చదుసుకుంటుంది.

ఉదాహరణ - శాశ్వతత కోసం పేరు గల వాల్యూమ్ (పర్యావరణం ద్వారా ఓపెన్‌రౌటర్ కీ):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| ఎంపిక   | వివరణ                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| పోర్ట్     | `5000` ( `-p 5000:5000` తో మ్యాప్ చేయండి)                                                                              |
| వాల్యూమ్   | కాన్ఫిగ్ మరియు డేటాబేస్ శాశ్వతత కోసం `/app/data` మౌంట్ చేయండి                                                         |
| పర్యావరణ చరరాశులు | `PORT`, `CONFIG_PATH`, అలా

## ఒక ఓపెన్ రూటర్ API కీని పొందడం

Transrewrt బహుళ AI ప్రొవైడర్స్ కు మద్దతు ఇస్తుంది. ఇది ఒక్క కీ నెంగిలి చాలా మోడల్స్ సేకరిస్తుంది అలాగే ఉచిత మోడల్స్ కూడా అందిస్తుంది కాబట్టి [OpenRouter](https://openrouter.ai) ఒక ప్రసిద్ధ ఎంపిక.

1. [openrouter.ai](https://openrouter.ai) వద్ద సైన్ అప్ చేయండి లేదా లాగిన్ అవ్వండి.
2. [Keys](https://openrouter.ai/keys) పేజీని తెరిచి ఒక కొత్త కీని సృష్టించండి (దానికి పేరు పెట్టండి, మరియు ఐచ్ఛికంగా క్రెడిట్ పరిమితిని సెట్ చేయండి). క్రెడిట్ కలిపిన అవసరం లేకుండా ఉచిత మోడల్స్ ఉపయోగించవచ్చు.
3. **డెస్క్టాప్ (ఎలక్ట్రాన్):** **సెట్టింగ్స్ → API**లో కీలు పేస్ట్ చేయండి. **డాకర్:** `OPENROUTER_KEY` వంటి పర్యావరణ వేరియబుల్స్ సెట్ చేయండి (సూచిక [త్వరిత ప్రారంభం](#quick-start)).

అనువదించడం, తిరిగి వ్రాయడం లేదా మార్చడం కోసం OpenRouter యొక్క **బాడీ బిల్డర్** మోడల్ ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ఉపయోగించకండి: అది ఆ పనులకు కావలసిన పూర్తి టెక్స్ట్ కాకుండా, JSON రిక్వెస్ట్ పేలోడ్స్ తిరిగి ఇస్తుంది. మోడల్స్ కోసం [సెట్టింగ్స్ → మోడల్స్](USER-GUIDE.te.md#models)ని వాడుకరి మార్గదర్శిలో చూడండి.

మీరు ఇతర ప్రొవైడర్‌లు (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ని ఉపయోగించవచ్చు లేదా [Ollama](https://ollama.com)తో స్థానికంగా మోడల్స్ ని నడుపుకోవచ్చు. మద్దతు ఉన్న ప్రొవైడర్స్ మరియు పర్యావరణ చరరాశుల సంపూర్ణ జాబితా కోసం [కాన్ఫిగరేషన్](#configuration-and-environment) చూడండి.

> ⚠️ **హెచ్చరిక**<br/>
> మీరు మరొక పరికరం, కంటైనర్ లేదా సేవ నుండి Ollama ఉపయోగిస్తున్నట్లయితే బాహ్య కనెక్షన్లను (localhost మాత్రమే కాదు) అనుమతించడానికి Ollama ని కాన్ఫిగర్ చేయడాన్ని గుర్తుంచుకోండి.

పరిమితులు, BYOK మరియు మరింత నిర్ధారణ కొరకు, [OpenRouter ప్రాముఖ్యత](https://openrouter.ai/docs/api/reference/authentication) చూడండి.

<br/><br/>

<a id="configuration-and-environment"></a>
## కాన్ఫిగరేషన్ మరియు పర్యావరణం

**కాన్ఫిగ్ ఫైల్ స్థానాలు**

| ప్రచురణ         | కాన్ఫిగ్ స్థానం                                      |
| ------------------ | ------------------------------------------------- |
| ఎలక్ట్రాన్ (విండోస్) | `%APPDATA%\transrewrt\`                           |
| ఎలక్ట్రాన్ (లినెక్స్)   | `~/.config/transrewrt/`                           |
| వెబ్ / డాకర్       | `/app/data/config.json` (మన్ని కొనసాగించడానికి వాల్యూమ్ ఉపయోగించండి) |

<br/>

**పర్యావరణ చరరాశులు** (వెబ్/డాకర్ మాత్రమే; ఎలక్ట్రాన్ స్థానిక కాన్ఫిగ్ ఫైల్ ఉపయోగిస్తుంది)

| చరరాశి         | డిఫాల్ట్                 | వివరణ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | సర్వర్ శ్రవణ పోర్ట్ |
| `CONFIG_PATH`    | `/app/data/config.json` | కాన్ఫిగ్ ఫైల్ పాత్ |
| `OPENROUTER_KEY` | *(ఖాళీ)*               | ఓపెన్ రూటర్ API కీ |
| `OPENAI_KEY`     | *(ఖాళీ)*               | ఓపెన్ ఐ ఏఐ API కీ |
| `CEREBRAS_KEY`   | *(ఖాళీ)*               | సెరెబ్రస్ API కీ |
| `ANTHROPIC_KEY`  | *(ఖాళీ)*               | ఆంథ్రోపిక్ API కీ |
| `GOOGLE_KEY`     | *(ఖాళీ)*               | గూగుల్ జెమిని API కీ |
| `DEEPSEEK_KEY`   | *(ఖాళీ)*               | డీప్ సీక్ API కీ |
| `GROQ_KEY`       | *(ఖాళీ)*               | గ్రాక్ API కీ |
| `MISTRAL_KEY`    | *(ఖాళీ)*               | మిస్ట్రల్ API కీ |
| `OLLAMA_URL`     | *(ఖాళీ)*               | ఒల్లామా బేస్ URL (ఉదా: `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(ఖాళీ)*               | xAI API కీ |

మీరు ఉపయోగించే ప్రొవైడర్స్ మాత్రమే కాన్ఫిగర్ చేయండి. మోడల్ IDs పేరు పరిధిలో ఉంటాయి (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, మొదలైనవి).

**ఖర్చు ప్రదర్శన:** అనువర్తితం అయితే ఓపెన్ రూటర్ సరిపోయిన బిల్లింగ్ ఖర్చును తిరిగి ఇస్తుంది. ఇతర ప్రొవైడర్స్ ఓపెన్ రూటర్ కీ లభ్యమయినప్పుడు ఓపెన్ రూటర్ యొక్క పబ్లిక్ మోడల్ ధరలకు అనుగుణంగా **అంచనా** ఖర్చును ఉపయోగిస్తాయి; దాని లేకుండా, ఓపెన్ రూటర్ కానిది ఖర్చు `0`గా కనిపించవచ్చు. అంచనాలు బిల్లులు కావు.

<br/>

**డేటా మరియు స్థిరమైనది:** డాకర్ కోసం, కంటైనర్ పునఃప్రారంభాలలో `config.json` మరియు స్క్వైట్ డేటాబేస్ కొనసాగేలా ఒక వాల్యూమ్ ని `/app/data` వద్ద కుదిర్చుకోండి. వాల్యూమ్ లేకుండా, కంటైనర్ ఆగినప్పుడు అన్ని డేటా కోల్పోబడుతుంది.

**డెవలపర్స్:** పాత ఒకే కీ కాన్ఫిగ్ ని భర్తీ చేసే మార్పులను లాగిన తర్వాత, మీ స్థానిక ఫైల్ ఇంకా తొలగించబడిన ఫీల్డ్స్ (`api_key`, `api_url`, ప్రాక్సీ ఎంపికలు) ఉపయోగిస్తుంటే `data/config.json` ని `src/config-defaults/config_default.json` నుండి కొత్త డిఫాల్ట్ ఆకృతిగా రీసెట్ లేదా మర్జ్ చేయండి.

<br/>

**వెబ్ ప్రాముఖ్యత:**

- డిఫాల్ట్ నిర్వాహకుడు: `admin` / `transrewrt266`.
- సెట్టింగ్స్ → వాడుకరుల లో వాడుకరుల నిర్వహణ.
- పాస్వర్డ్ రీసెట్ చేయడం: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (మూలం నుండి: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **హెచ్చరిక**<br/>
> ఏదైనా నెట్వర్క్ యాక్సెస్ ఉన్న హోస్ట్ మీద డిఫాల్ట్ నిర్వాహక పాస్వర్డ్ వెంటనే మార్చండి.

<br/>

కీ సెట్టింగ్స్ (ఫాంట్, మోడల్స్, భాషలు, మొదలైనవి) అప్లికేషన్ సెట్టింగ్స్ లో సులభంగా లభ్యమవుతాయి.

<br/><br/>

<a id="development-and-architecture"></a>

## అభివృద్ధి మరియు సిస్టమ్ అవలోకనం

- **అభివృద్ధి:** సెటప్, బిల్డ్, పరీక్ష, మరియు డిప్లాయ్ (ఎలెక్ట్రాన్, వెబ్, డాకర్) - చూడండి **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **సిస్టమ్ అవలోకనం:** ఫోల్డర్ నిర్మాణం, సాంకేతిక పొరలు, డిజైన్ నిర్ణయాలు - చూడండి **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## రిలీజ్‌లు మరియు ట్యాగ్‌లు

- **గిట్ ట్యాగ్‌లు** `v`* (ఉదా. `v1.0.10`) [రిలీజ్ వర్క్‌ఫ్లో](.github/workflows/release.yml)కి ట్రిగ్గర్ ఇస్తాయి. **గిట్హబ్ రిలీజ్‌లు** విండోస్ ఇన్‌స్టాలర్ (`.exe`) మరియు లినక్స్ ఆప్ ఇమేజ్‌లను (**x64** మరియు **arm64**) జోడిస్తాయి.
- **డాకర్ ఇమేజ్‌లు** `ghcr.io/wsj-br/transrewrt`కి ప్రచురించబడతాయి. ఇమేజ్ ట్యాగ్‌లు గిట్ వెర్షన్‌కు సరిపోతాయి (ఉదా. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) అలాగే `latest`. మల్టీ-ఆర్క్: `linux/amd64` మరియు `linux/arm64` (ఉదా. రాస్ప్‌బెర్రీ పై).

<br/><br/>

<a id="contributing"></a>
## సహకరించడం

1. రిపొజిటరీని ఫార్క్ చేయండి.
2. ఫీచర్ బ్రాంచ్ సృష్టించండి: `git checkout -b feature/my-feature`
3. స్పష్టమైన సందేశంతో మీ మార్పులను కమిట్ చేయండి.
4. పుష్ చేసి `main`కి వ్యతిరేకంగా పుల్ రిక్వెస్ట్ ఓపెన్ చేయండి.

సమర్పించే ముందు ప్రస్తుత కోడ్ శైలిని అనుసరించండి మరియు ఎలెక్ట్రాన్ మరియు వెబ్ మోడ్‌లలో మీ మార్పులను పరీక్షించండి. బిల్డ్ మరియు పరీక్ష సూచనల కొరకు [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) చూడండి.

<br/>

**సమస్యలను నివేదించడం:** [గిట్హబ్](https://github.com/wsj-br/transrewrt/issues)లో సమస్యను ఓపెన్ చేయండి. మీ ప్లాట్‌ఫామ్ (విండోస్ / లినక్స్ / డాకర్) మరియు అప్లికేషన్ వెర్షన్ (సుమారు సంబంధిత డైలాగ్ లేదా రిలీజ్ పేజీలో చూపబడుతుంది) చేర్చండి.

<br/><br/>

<a id="disclaimer"></a>
## విడుదల పత్రం

ఉత్పత్తి పేర్లు మరియు చిహ్నాలు వాటి సంబంధిత యజమానులకు చెందినవి మరియు గుర్తింపు ఉద్దేశ్యాల కొరకు మాత్రమే ఉపయోగించబడతాయి. ఈ సాఫ్ట్వేర్ చెప్పబడిన బ్రాండ్‌లకు సంబంధించినది కాదు లేదా వాటిచే సమ్మతించబడినది కాదు.

<br/><br/>

<a id="license"></a>
## లైసెన్స్

కాపీరైట్ © 2026 వాల్డెమార్ స్కుడెలర్ జూనియర్.

[అపాచీ లైసెన్స్ 2.0](LICENSE)