---
translated_at: "2026-03-29T01:55:14.033Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="ट्रांसरीवर्ट बैनर"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="संस्करण"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="लाइसेंस: एपाचे 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="प्लेटफॉर्म">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="रिएक्ट 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="इलेक्ट्रॉन 41">
</p>

कृत्रिम बुद्धिमत्ता से संचालित पाठ उपकरण: कई एआई प्रदाताओं (ओपनराउटर, ओपनएआई, एंथ्रोपिक, गूगल जीमिनी, डीपसीक, ग्रॉक, मिस्ट्रल, एक्सएआई और स्थानीय ओलामा) का उपयोग करते हुए भाषाओं के बीच अनुवाद करना, विभिन्न शैलियों में पुनर्लेखन करना और अनुकूल संकेतों के साथ रूपांतरण करना। डेस्कटॉप ऐप (इलेक्ट्रॉन) या स्वयं-होस्टेड वेब ऐप (डॉकर) के रूप में चलता है।

- **अनुवाद** — दर्जनों भाषाओं के बीच, स्वचालित स्रोत संस्करण के साथ
- **पुनर्लेखन** — व्याकरण सुधारें, स्पष्टता बढ़ाएं, औपचारिक/अनौपचारिक, संक्षिप्त करें, विस्तार करें, तकनीकी
- **परिवर्तन** — कस्टम एआई प्रॉम्प्ट; प्रॉम्प्ट बनाएं और प्रबंधित करें, प्रत्येक प्रॉम्प्ट के लिए वैकल्पिक लक्ष्य भाषा
- **इतिहास** — पूर्ण निष्पादन इतिहास इनपुट/आउटपुट पाठ के साथ, फ़िल्टरिंग और निर्यात करने की सुविधा
- **मॉडल और लागत** — किसी भी विन्यस्त प्रदाता से मॉडल चुनें; लागत और उपयोग डैशबोर्ड लॉग के साथ, मॉडल/ऑपरेशन/दिन के अनुसार सारांश
- **यूआई** — बहुभाषी इंटरफ़ेस (30+ भाषाएँ, RTL समर्थन), फ़ॉन्ट, ...
- **वेब मोड** — एडमिन भूमिकाओं के साथ बहु-उपयोगकर्ता समर्थन
- **डेस्कटॉप** — विंडोज और लिनक्स के लिए इलेक्ट्रॉन ऐप
- **स्व-होस्टेड** — amd64 और arm64 (रास्पबेरी पाई-तैयार) के लिए डॉकर इमेज

स्थापित होने के बाद, सभी सुविधाओं के पूर्ण प्रदर्शन के लिए **[उपयोगकर्ता गाइड](USER-GUIDE.hi.md)** देखें।

<small>**अन्य भाषाओं में पढ़ें:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI और प्रलेखन अनुवाद पर टिप्पणी:** मूल अंग्रेजी (यूके) के अलावा सभी इंटरफ़ेस भाषाओं का अनुवाद AI मॉडल का उपयोग करके किया गया था; शब्दों का चयन अस्पष्ट या त्रुटियाँ हो सकती है।

</small>

<br/>

<a id="screenshots"></a>

## स्क्रीनशॉट

**भाषा चयनकर्ता**

![भाषा चयनकर्ता](../images/screenshots/hi/language-selector.png)

**अनुवाद करें**

![अनुवाद करें](../images/screenshots/hi/translate.png)

**ट्रांसफॉर्म - प्रॉम्प्ट संपादक**

![ट्रांसफॉर्म - प्रॉम्प्ट संपादक](../images/screenshots/hi/transform-prompt-edit.png)

**डैशबोर्ड**

![डैशबोर्ड सारांश — उपयोग](../images/screenshots/hi/dashboard-summary.png)

**इतिहास**

![इतिहास](../images/screenshots/hi/history.png)

**सेटिंग्स - मॉडल चयन**

![सेटिंग्स - मॉडल चयन](../images/screenshots/hi/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## सूची

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [त्वरित शुरुआत](#quick-start)
- [स्थापना](#installation)
  - [विंडोज (इलेक्ट्रॉन)](#windows-electron)
  - [लिनक्स (इलेक्ट्रॉन)](#linux-electron)
  - [डॉकर](#docker)
  - [समय क्षेत्र कॉन्फ़िगर करना](#configuring-the-timezone)
- [ओपनराउटर एपीआई कुंजी प्राप्त करना](#getting-an-openrouter-api-key)
- [कॉन्फ़िगरेशन और पर्यावरण](#configuration-and-environment)
- [विकास और संरचना](#development-and-architecture)
- [समस्याएँ रिपोर्ट करना](#reporting-issues)
- [अस्वीकरण](#disclaimer)
- [लाइसेंस](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## त्वरित प्रारंभ

**डॉकर (स्व-होस्टिंग के लिए अनुशंसित)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` को अपनी [OpenRouter API कुंजी](https://openrouter.ai/keys) के साथ बदलें (या अन्य प्रदाता की कुंजियाँ सेट करें; [कॉन्फ़िगरेशन](#configuration-and-environment) देखें)। [http://localhost:5000](http://localhost:5000) खोलें और सेवा को प्रकाशित करने से पहले डिफ़ॉल्ट एडमिन पासवर्ड बदलें।

<br/>

> ℹ️ **नोट**<br/>
> डॉकर में, LLM प्रमाणपत्रों को `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … जैसे पर्यावरण चरों के साथ सेट किया जाता है (वेब यूआई में नहीं)। डेस्कटॉप (Electron) पर आप **सेटिंग्स → API** में कुंजियाँ कॉन्फ़िगर करते हैं।

<br/>

**विंडोज़**

`Transrewrt Setup x.y.z.exe` को [स्रोत](https://github.com/wsj-br/transrewrt/releases) से डाउनलोड करें, इंस्टालर चलाएं, फिर स्टार्ट मेनू या डेस्कटॉप शॉर्टकट से लॉन्च करें। अपनी API कुंजियाँ **सेटिंग्स → API** में दर्ज करें। आपको कम से कम एक प्रदाता कॉन्फ़िगर करने की आवश्यकता है, मुफ्त मॉडल के लिए OpenRouter आम है।

<br/>

**लिनक्स**

अपने CPU के लिए `.AppImage` फ़ाइल [स्रोत](https://github.com/wsj-br/transrewrt/releases) से डाउनलोड करें (`x64` सामान्य पीसी के लिए, `arm64` कई ARM उपकरणों के लिए, जिसमें Raspberry Pi 4+ शामिल है), फिर निम्न कमांड चलाएँ:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.App stretching
```

अपनी API कुंजियाँ **सेटिंग्स → API** में दर्ज करें। आपको कम से कम एक प्रदाता कॉन्फ़िगर करने की आवश्यकता है, मुफ्त मॉडल के लिए OpenRouter आम है।

Debian/Ubuntu पर आपको पहले कुछ अतिरिक्त निर्भरताएँ इंस्टॉल करने की आवश्यकता हो सकती है:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

विस्तृत जानकारी के लिए [इंस्टॉलेशन → लिनक्स](#linux-electron) देखें।

<br/>

> ℹ️ **नोट**<br/>

> macOS को वर्तमान में समर्थन नहीं दिया गया है। Transrewrt Windows, Linux और Docker के लिए उपलब्ध है।

<br/>

एप्लिकेशन चलने के बाद, पाठ अनुवादित करने, पुनर्लेखन करने और परिवर्तित करने, प्रॉम्प्ट प्रबंधित करने और मॉडल कॉन्फ़िगर करने के बारे में जानने के लिए **[उपयोगकर्ता मार्गदर्शिका](USER-GUIDE.hi.md)** देखें।

<br/><br/>

<a id="installation"></a>

## स्थापना

<a id="windows-electron"></a>

### विंडोज (इलेक्ट्रॉन)

- [रिलीज़ेज़](https://github.com/wsj-br/transrewrt/releases) से नवीनतम इंस्टॉलर डाउनलोड करें।
- `.exe` फ़ाइल चलाएं और इंस्टॉलर के निर्देशों का पालन करें।
- पहली बार चलाना: स्टार्ट मेनू या डेस्कटॉप शॉर्टकट से ऐप शुरू करें।

<br/>

> ℹ️ **नोट**<br/>
> विंडोज इनमें से कोई एक सुरक्षा चेतावनी दिखा सकता है (अनसाइन किए गए/स्वतंत्र ऐप्स के लिए सामान्य):
>   - **यूजर अकाउंट कंट्रोल (UAC)**: "क्या आप अज्ञात प्रकाशक के इस ऐप को अपने डिवाइस पर परिवर्तन करने की अनुमति देना चाहते हैं?" → **हां** पर क्लिक करें।
>   - **माइक्रोसॉफ्ट डिफेंडर स्मार्टस्क्रीन**: "विंडोज ने आपके पीसी की सुरक्षा की" → **अधिक जानकारी** पर क्लिक करें → **फिर भी चलाएं**।
>
> ऐसा इसलिए होता है क्योंकि ऐप पर माइक्रोसॉफ्ट या किसी प्रमुख प्रकाशक का साइनेचर नहीं होता — यह सुरक्षित है यदि आपने इसे हमारे आधिकारिक गिटहब रिलीज़ से डाउनलोड किया है
> (नीचे SHA256 चेकसम की पुष्टि करें)।

<br/>

<a id="linux-electron"></a>

### लिनक्स (इलेक्ट्रॉन)

- [रिलीज़](https://github.com/wsj-br/transrewrt/releases) से मेल खाने वाली `.AppImage` फ़ाइल (`x64` या `arm64`) डाउनलोड करें।
- चलाएँ: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 पर, या ARM64 पर `...-arm64.AppImage` फ़ाइलनेम का उपयोग करें।
- अतिरिक्त निर्भरताएँ (डेबियन/उबंटू): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- अधिक जानकारी के लिए [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) देखें।

<br/>

<a id="docker"></a>

### डॉकर

- पुल करें: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- पर्यावरण के माध्यम से कम से कम एक प्रदाता कुंजी सेट करें (उदाहरण के लिए OpenRouter के लिए `OPENROUTER_API_KEY`। रहस्य चित्र में न शामिल हों इसके लिए `-e` या `docker compose` / `.env` के साथ चर पास करें।)
- **वेब यूआई में प्रदाता कुंजियाँ दर्ज नहीं की जातीं;** सर्वर उन्हें पर्यावरण से पढ़ता है।

उदाहरण - स्थायित्व के लिए नामित वॉल्यूम (पर्यावरण के माध्यम से OpenRouter कुंजी):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

या यदि आप डॉकर कंपोज का उपयोग करना पसंद करते हैं, तो उपयोग करें:

```bash
# कंपोज फ़ाइल डाउनलोड करें
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# API_KEYS जोड़ने और समयक्षेत्र (TZ) समायोजित करने के लिए फ़ाइल संपादित करें
vi transrewrt.yml
# कंटेनर शुरू करें
docker compose -f transrewrt.yml up -d

सभी वातावरण चरों जैसे `PORT`, `CONFIG_PATH`, `TZ`, तथा LLM कुंजियों (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) के लिए [कॉन्फ़िगरेशन](#configuration-and-environment) देखें।

<a id="configuring-the-timezone"></a>

### समयक्षेत्र को कॉन्फ़िगर करना

एप्लिकेशन उपयोगकर्ता इंटरफ़ेस की तिथि और समय **ब्राउज़र** के स्थान और समयक्षेत्र का अनुसरण करते हैं। **सर्वर-साइड** व्यवहार (लॉगिंग और इसी तरह) के लिए, कंटेनर `TZ` पर्यावरण चर का उपयोग करता है। डिफ़ॉल्ट मान `TZ=Europe/London` है।

अन्य समयक्षेत्र का उपयोग करने के लिए, अपनी कंपोज़ फ़ाइल में `TZ` को सेट करें, उदाहरण के लिए:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

या कंटेनर चलाते समय इसे पास करें (डॉकर):

```bash
--env TZ=America/Sao_Paulo
```

कई लिनक्स होस्ट्स पर आप निम्न कमांड के साथ सिस्टम समयक्षेत्र का नाम कॉपी कर सकते हैं:

```bash
echo TZ=\"$(</etc/timezone)\"
```

मान्य समयक्षेत्र नामों की सूची [tz डेटाबेस](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (विकिपीडिया) में बनाए रखी गई है।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## ओपनरूटर एपीआई कुंजी प्राप्त करना

ट्रांसरीराइट कई एआई प्रदाताओं का समर्थन करता है। [ओपनरूटर](https://openrouter.ai) एक लोकप्रिय विकल्प है क्योंकि यह एक ही कुंजी के तहत कई मॉडलों को जोड़ता है और निःशुल्क मॉडल प्रदान करता है।

1. [openrouter.ai](https://openrouter.ai) पर साइन अप करें या लॉग इन करें।
2. [Keys](https://openrouter.ai/keys) पृष्ठ खोलें और एक नई कुंजी बनाएँ (इसका नाम दें, और वैकल्पिक रूप से एक क्रेडिट सीमा सेट करें)। आप क्रेडिट जोड़े बिना निःशुल्क मॉडल का उपयोग कर सकते हैं।
3. **डेस्कटॉप (इलेक्ट्रॉन):** कुंजियों को **सेटिंग्स → एपीआई** में पेस्ट करें। **डॉकर:** `OPENROUTER_API_KEY` जैसे env चर सेट करें (देखें [त्वरित प्रारंभ](#quick-start))।

अनुवाद, पुनर्लेखन या रूपांतरण के लिए ओपनरूटर के **बॉडी बिल्डर** मॉडल ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) का उपयोग न करें: यह उन कार्यों के लिए पूर्ण पाठ नहीं, बल्कि JSON अनुरोध पेलोड लौटाता है। उपयोगकर्ता गाइड में [सेटिंग्स → मॉडल](USER-GUIDE.hi.md#models) देखें।

आप अन्य प्रदाताओं (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) का उपयोग कर सकते हैं या [Ollama](https://ollama.com) के साथ स्थानीय रूप से मॉडल चला सकते हैं। समर्थित प्रदाताओं और वातावरण चर की पूरी सूची के लिए [कॉन्फ़िगरेशन](#configuration-and-environment) देखें।

> ⚠️ **चेतावनी**<br/>
> यदि आप किसी अन्य डिवाइस, कंटेनर या सेवा से Ollama का उपयोग कर रहे हैं, तो ध्यान रखें कि Ollama को बाहरी कनेक्शन (केवल लोकलहोस्ट नहीं) की अनुमति देने के लिए कॉन्फ़िगर करें।


सीमाओं, BYOK, और अन्य जानकारी के लिए, [OpenRouter प्रमाणीकरण](https://openrouter.ai/docs/api/reference/authentication) देखें।

<br/><br/>

<a id="configuration-and-environment"></a>

## विन्यास और वातावरण

**कॉन्फ़िग फ़ाइलों के स्थान**

| डिप्लॉयमेंट | कॉन्फ़िग स्थान |
| ------------------ | ------------------------------------------------- |
| इलेक्ट्रॉन (विंडोज़) | `%APPDATA%\transrewrt\` |
| इलेक्ट्रॉन (लिनक्स) | `~/.config/transrewrt/` |
| वेब / डॉकर | `/app/data/config.json` (स्थायी रखने के लिए एक वॉल्यूम का उपयोग करें) |

<br/>

**वातावरण परिवर्तनशील** (केवल वेब/डॉकर; इलेक्ट्रॉन स्थानीय कॉन्फ़िगरेशन फ़ाइल का उपयोग करता है)

| चर | डिफ़ॉल्ट | विवरण |
| ---------------- | ----------------------- | ----------- |
| `PORT` | `5000` | सर्वर सुनने का पोर्ट |
| `CONFIG_PATH` | `/app/data/config.json` | कॉन्फ़िग फ़ाइल का मार्ग |
| `TZ` | `Europe/London` | सर्वर-साइड समय (लॉगिंग, आदि) के लिए IANA समयक्षेत्र; यूआई अभी भी ब्राउज़र का पालन करता है। देखें [डॉकर → समयक्षेत्र](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(खाली)* | OpenRouter API कुंजी |
| `OPENAI_API_KEY` | *(खाली)* | OpenAI API कुंजी |
| `CEREBRAS_API_KEY` | *(खाली)* | Cerebras API कुंजी |
| `ANTHROPIC_API_KEY` | *(खाली)* | Anthropic API कुंजी |
| `GOOGLE_API_KEY` | *(खाली)* | Google Gemini API कुंजी |
| `DEEPSEEK_API_KEY` | *(खाली)* | DeepSeek API कुंजी |
| `GROQ_API_KEY` | *(खाली)* | Groq API कुंजी |
| `MISTRAL_API_KEY` | *(खाली)* | Mistral API कुंजी |
| `OLLAMA_URL` | *(खाली)* | Ollama बेस URL (उदा. `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(खाली)* | xAI API कुंजी |

केवल उन प्रदाताओं को कॉन्फ़िगर करें जिनका आप उपयोग करते हैं। मॉडल आईडी नामस्थानित होती हैं (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, आदि)।

**लागत प्रदर्शन:** जहां लागू हो, OpenRouter सटीक शुल्क लागत लौटाता है। अन्य प्रदाता तब तक **अनुमानित** लागत का उपयोग करते हैं जब तक OpenRouter की उपलब्ध हो, OpenRouter की सार्वजनिक मॉडल मूल्य नीति से; यदि OpenRouter की नहीं है, तो गैर-OpenRouter लागत `0` के रूप में दिख सकती है। अनुमान बिल नहीं होते हैं।

<br/>

**डेटा और स्थायित्व:** डॉकर के लिए, `/app/data` पर एक वॉल्यूम माउंट करें ताकि `config.json` और SQLite डेटाबेस कंटेनर पुनः आरंभ के दौरान बरकरार रहें। बिना वॉल्यूम के, कंटेनर रुकने पर सभी डेटा खो जाता है।

**डेवलपर्स:** पुराने एकल-कुंजी कॉन्फ़िग को बदलने वाले परिवर्तन खींचने के बाद, यदि आपकी स्थानीय फ़ाइल अभी भी हटाए गए फ़ील्ड (`api_key`, `api_url`, प्रॉक्सी विकल्प) का उपयोग कर रही है, तो `data/config.json` को `src/config-defaults/config_default.json` में नए डिफ़ॉल्ट आकार के साथ रीसेट या मर्ज करें।

<br/>

**वेब प्रमाणीकरण:**

- डिफ़ॉल्ट एडमिन: `admin` / `transrewrt26`।
- **सेटिंग्स → उपयोगकर्ता** में उपयोगकर्ताओं का प्रबंधन करें।

- पासवर्ड रीसेट करें: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (स्रोत से: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **चेतावनी**<br/>
> किसी भी नेटवर्क-एक्सेसिबल होस्ट पर तुरंत डिफ़ॉल्ट एडमिन पासवर्ड बदलें।

<br/>

महत्वपूर्ण सेटिंग्स (फ़ॉन्ट, मॉडल, भाषाएँ, आदि) एप्लिकेशन सेटिंग्स में उपलब्ध हैं।

<br/><br/>

<a id="development-and-architecture"></a>

## विकास और आर्किटेक्चर

- **विकास:** सेटअप, बिल्ड, परीक्षण और तैनाती (इलेक्ट्रॉन, वेब, डॉकर) — देखें **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**।
- **आर्किटेक्चर और सिस्टम अवलोकन:** फ़ोल्डर संरचना, तकनीकी स्टैक, डिज़ाइन निर्णय — देखें **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**।

<br/><br/>

<a id="reporting-issues"></a>

## समस्याओं की रिपोर्ट करना

[GitHub](https://github.com/wsj-br/transrewrt/issues) पर एक इश्यू खोलें। अपने प्लेटफॉर्म (विंडोज़ / लिनक्स / डॉकर) और ऐप संस्करण (जो 'बारे में' संवाद या 'रिलीज़' पृष्ठ पर दिखाया गया है) के बारे में जानकारी शामिल करें।

<br/><br/>

<a id="disclaimer"></a>

## अस्वीकरण

उत्पाद नाम और आइकन उनके संबंधित मालिकों के स्वामित्व में हैं तथा केवल पहचान के उद्देश्य से उपयोग किए जाते हैं। यह सॉफ्टवेयर उल्लिखित किसी भी ब्रांड से संबद्ध या समर्थित नहीं है।

<br/><br/>

<a id="license"></a>

## लाइसेंस

कॉपीराइट © 2026 वाल्डेमार स्कूडेलर जूनियर।

[एपाचे लाइसेंस 2.0](LICENSE)