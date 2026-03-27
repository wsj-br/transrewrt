---
translated_at: "2026-03-27T23:10:10.508Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt लोगो" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="संस्करण"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="लाइसेंस: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="प्लेटफॉर्म">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

एआई-संचालित पाठ उपकरण: कई एआई प्रदाताओं (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, और स्थानीय Ollama) का उपयोग करके भाषाओं के बीच अनुवाद, विभिन्न शैलियों में पुनर्लेखन, और अनुकूलित संकेतों के साथ परिवर्तन —। डेस्कटॉप ऐप (Electron) या स्वयं-होस्टेड वेब ऐप (Docker) के रूप में चलता है।

- **अनुवाद** — दर्जनों भाषाओं के बीच, स्वचालित स्रोत का पता लगाने के साथ
- **पुनर्लेखन** — व्याकरण सुधारें, स्पष्टता बढ़ाएँ, औपचारिक/अनौपचारिक, छोटा करें, विस्तार करें, तकनीकी
- **परिवर्तन** — अनुकूलित एआई संकेत; संकेत बनाएँ और प्रबंधित करें, प्रति संकेत वैकल्पिक लक्ष्य भाषा
- **इतिहास** — इनपुट/आउटपुट पाठ के साथ पूर्ण निष्पादन इतिहास, फ़िल्टरिंग और निर्यात
- **मॉडल और लागत** — किसी भी विन्यस्त प्रदाता से मॉडल चुनें; लॉग, मॉडल/ऑपरेशन/दिन के अनुसार सारांश के साथ लागत और उपयोग डैशबोर्ड
- **यूआई** — बहुभाषी इंटरफ़ेस (30+ भाषाएँ, RTL समर्थन), फॉंट, ...
- **वेब मोड** — प्रशासक भूमिकाओं के साथ बहु-उपयोगकर्ता समर्थन
- **डेस्कटॉप** — Windows और Linux के लिए Electron ऐप
- **स्वयं-होस्टेड** — amd64 और arm64 (रास्पबेरी पाई-तैयार) के लिए Docker छवि

स्थापित करने के बाद, सभी सुविधाओं के पूर्ण दिशानिर्देश के लिए **[उपयोगकर्ता निर्देशिका](USER-GUIDE.hi.md)** देखें।

<small>**अन्य भाषाओं में पढ़ें:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **यूआई और दस्तावेजीकरण अनुवाद पर टिप्पणी:** मूल अंग्रेजी (यूके) के अलावा सभी इंटरफ़ेस भाषाओं का अनुवाद एआई मॉडलों का उपयोग करके किया गया था; शब्दावली अशुद्ध हो सकती है या त्रुटियाँ हो सकती हैं।

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

![लागत डैशबोर्ड](../images/screenshots/hi/dashboard-summary.png)

**इतिहास**

![इतिहास](../images/screenshots/hi/history.png)

**सेटिंग्स - मॉडल चयन**

![सेटिंग्स - मॉडल चयन](../images/screenshots/hi/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## विषय सूची

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [त्वरित शुरुआत](#quick-start)
- [स्थापना](#installation)
  - [विंडोज़ (इलेक्ट्रॉन)](#windows-electron)
  - [लिनक्स (इलेक्ट्रॉन)](#linux-electron)
  - [डॉकर](#docker)
- [ओपनराउटर API कुंजी प्राप्त करना](#getting-an-openrouter-api-key)
- [विन्यास और पर्यावरण](#configuration-and-environment)
- [विकास और आर्किटेक्चर](#development-and-architecture)
- [रिलीज़ और टैग](#releases-and-tags)
- [योगदान देना](#contributing)
- [अस्वीकरण](#disclaimer)
- [लाइसेंस](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## त्वरित शुरुआत

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

`sk-or-your-key` को अपनी [OpenRouter API कुंजी](https://openrouter.ai/keys) से बदलें (या अन्य प्रदाता की कुंजियाँ सेट करें; देखें [विन्यास](#configuration-and-environment))। [http://localhost:5000](http://localhost:5000) खोलें और सेवा को बाहरी पहुँच के लिए उपलब्ध कराने से पहले डिफ़ॉल्ट एडमिन पासवर्ड बदलें।

<br/>

> ℹ️ **नोट**<br/>
> डॉकर में, एलएलएम (LLM) प्रमाणपत्रों को वातावरण चर जैसे `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … के साथ सेट किया जाता है (वेब यूआई में नहीं)। डेस्कटॉप (इलेक्ट्रॉन) पर आप **सेटिंग्स → API** में कुंजियाँ कॉन्फ़िगर करते हैं।

<br/>

**विंडोज़**

[रिलीज़](https://github.com/wsj-br/transrewrt/releases) से नवीनतम `Transrewrt Setup x.y.z.exe` डाउनलोड करें, इंस्टॉलर चलाएं, फिर स्टार्ट मेनू या डेस्कटॉप शॉर्टकट से लॉन्च करें। अपनी API कुंजियाँ **सेटिंग्स → API** में दर्ज करें। आपको कम से कम एक प्रदाता कॉन्फ़िगर करना होगा, मुफ्त मॉडल के लिए ओपनरूटर (OpenRouter) आमतौर पर उपयोग किया जाता है।

<br/>

**लिनक्स**

अपने CPU के लिए `.AppImage` डाउनलोड करें [रिलीज़](https://github.com/wsj-br/transrewrt/releases) से (`x64` सामान्य पीसी के लिए, `arm64` कई आरएम (ARM) डिवाइस, रास्पबेरी पाई 4+ सहित, के लिए), फिर:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

अपनी API कुंजियाँ **सेटिंग्स → API** में दर्ज करें। आपको कम से कम एक प्रदाता कॉन्फ़िगर करना होगा, मुफ्त मॉडल के लिए ओपनरूटर (OpenRouter) आमतौर पर उपयोग किया जाता है।

डेबियन/उबंटू पर आपको पहले कुछ अतिरिक्त निर्भरताएं इंस्टॉल करने की आवश्यकता हो सकती है:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

विवरण के लिए देखें [इंस्टालेशन → लिनक्स](#linux-electron)।

<br/>

> ℹ️ **नोट**<br/>
> मैकओएस वर्तमान में समर्थित नहीं है। ट्रांसरीवर्ट विंडोज़, लिनक्स और डॉकर के लिए उपलब्ध है।

<br/>

एक बार ऐप चलने लगे, पाठ अनुवादित करने, पुनर्लेखन करने और रूपांतरित करने, प्रॉम्प्ट्स प्रबंधित करने और मॉडल्स कॉन्फ़िगर करने के बारे में जानने के लिए **[उपयोगकर्ता निर्देश](USER-GUIDE.hi.md)** देखें।

<br/><br/>

<a id="installation"></a>

## स्थापना

<a id="windows-electron"></a>
### विंडोज़ (इलेक्ट्रॉन)

- [रिलीज़ेज़](https://github.com/wsj-br/transrewrt/releases) से नवीनतम इंस्टॉलर डाउनलोड करें।
- `.exe` फ़ाइल चलाएं तथा इंस्टॉलर के निर्देशों का पालन करें।
- पहली बार चलाने पर: स्टार्ट मेनू या डेस्कटॉप शॉर्टकट से ऐप शुरू करें।

<br/>

<a id="linux-electron"></a>
### लिनक्स (इलेक्ट्रॉन)

- [रिलीज़ेज़](https://github.com/wsj-br/transrewrt/releases) से संगत `.AppImage` (`x64` या `arm64`) डाउनलोड करें।
- चलाएँ: x86_64/amd64 पर `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`, या ARM64 पर `...-arm64.AppImage` फ़ाइलनाम का उपयोग करें।
- अतिरिक्त आश्रितताएँ (डेबियन/उबंटू): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- अधिक जानकारी के लिए [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) देखें।

<br/>

<a id="docker"></a>
### डॉकर

- डाउनलोड करें: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- कम से कम एक प्रदाता कुंजी वातावरण के माध्यम से सेट करें (उदाहरण के लिए OpenRouter के लिए `OPENROUTER_API_KEY`)। गुप्त कुंजियों को चित्र में स्थायी रूप से न जमा दें, इसलिए `-e` या `docker compose` / `.env` के माध्यम से चर पारित करें।
- प्रदाता कुंजियां वेब UI में **दर्ज नहीं** की जाती हैं; सर्वर उन्हें वातावरण से पढ़ता है।

उदाहरण - स्थायित्व के लिए नामांकित वॉल्यूम (पर्यावरण के माध्यम से OpenRouter कुंजी):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

या यदि आप डॉकर कॉम्पोज़ का उपयोग करना पसंद करते हैं, तो निम्न का उपयोग करें:

# कम्पोज़ फ़ाइल डाउनलोड करें
```
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# API_KEYS जोड़ने के लिए फ़ाइल संपादित करें
vi transrewrt.yml
# कंटेनर शुरू करें
docker compose -f transrewrt.yml up -d
```

<br/>

| विकल्प    | विवरण                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| पोर्ट     | `5000` ( `-p 5000:5000` के साथ मैप करें)                                                                                              |
| वॉल्यूम  | कॉन्फ़िग और डेटाबेस स्थायित्व के लिए `/app/data` माउंट करें                                                                           |
| पर्यावरण चर | `PORT`, `CONFIG_PATH`, और LLM कुंजियाँ (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - [कॉन्फ़िगरेशन](#configuration-and-environment) देखें |

स्रोत से बनाने और चलाने के लिए: `docker compose up --build -d` या `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) देखें।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## ओपनरूटर API कुंजी प्राप्त करना

ट्रांसरीवर्ट कई एआई प्रदाताओं को समर्थन करता है। [ओपनरूटर](https://openrouter.ai) एक लोकप्रिय विकल्प है क्योंकि यह एक ही कुंजी के तहत कई मॉडल्स को एकत्र करता है और मुफ्त मॉडल्स प्रदान करता है।

1. [openrouter.ai](https://openrouter.ai) पर साइन अप करें या लॉग इन करें।
2. [Keys](https://openrouter.ai/keys) पृष्ठ खोलें और एक नई कुंजी बनाएं (इसका नाम दें, और वैकल्पिक रूप से क्रेडिट सीमा निर्धारित करें)। आप क्रेडिट जोड़े बिना मुफ्त मॉडल्स का उपयोग कर सकते हैं।
3. **डेस्कटॉप (इलेक्ट्रॉन):** **सेटिंग्स → API** में कुंजियाँ पेस्ट करें। **डॉकर:** `OPENROUTER_API_KEY` जैसे वातावरण चर सेट करें (देखें [त्वरित शुरुआत](#quick-start))।

अनुवाद, पुनर्लेखन या परिवर्तन के लिए ओपनरूटर के **बॉडी बिल्डर** मॉडल ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) का उपयोग न करें: यह उन कार्यों के लिए पूर्ण पाठ के बजाय JSON अनुरोध पेलोड लौटाता है। समर्थित मॉडल्स के लिए उपयोगकर्ता गाइड में [सेटिंग्स → मॉडल्स](USER-GUIDE.hi.md#models) देखें।

आप अन्य प्रदाताओं (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) का उपयोग भी कर सकते हैं या [Ollama](https://ollama.com) के साथ स्थानीय रूप से मॉडल चला सकते हैं। समर्थित प्रदाताओं और वातावरण चरों की पूर्ण सूची के लिए [कॉन्फ़िगरेशन](#configuration-and-environment) देखें।

> ⚠️ **चेतावनी**<br/>
> यदि आप दूसरे उपकरण, कंटेनर या सेवा से ओलामा का उपयोग कर रहे हैं, तो याद रखें कि ओलामा को बाहरी कनेक्शन (केवल लोकलहोस्ट नहीं) की अनुमति देने के लिए कॉन्फ़िगर करें।

सीमाओं, BYOK और अधिक जानकारी के लिए, [ओपनरूटर प्रमाणीकरण](https://openrouter.ai/docs/api/reference/authentication) देखें।

<br/><br/>

<a id="configuration-and-environment"></a>

## कॉन्फ़िगरेशन और वातावरण

**कॉन्फ़िग फ़ाइल के स्थान**

| डिप्लॉयमेंट         | कॉन्फ़िग स्थान                                   |
| ------------------ | ------------------------------------------------- |
| इलेक्ट्रॉन (विंडोज) | `%APPDATA%\transrewrt\`                           |
| इलेक्ट्रॉन (लिनक्स)   | `~/.config/transrewrt/`                           |
| वेब / डॉकर       | `/app/data/config.json` (स्थायी डेटा के लिए वॉल्यूम का उपयोग करें) |

<br/>

**पर्यावरण चर** (केवल वेब/डॉकर; इलेक्ट्रॉन स्थानीय कॉन्फ़िग फ़ाइल का उपयोग करता है)

| चर         | डिफ़ॉल्ट                 | विवरण |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | सर्वर सुनने वाला पोर्ट |
| `CONFIG_PATH`    | `/app/data/config.json` | कॉन्फ़िग फ़ाइल का मार्ग |
| `OPENROUTER_API_KEY` | *(खाली)*               | ओपनरूटर एपीआई कुंजी |
| `OPENAI_API_KEY`     | *(खाली)*               | ओपनएआई एपीआई कुंजी |
| `CEREBRAS_API_KEY`   | *(खाली)*               | सेरेब्रस एपीआई कुंजी |
| `ANTHROPIC_API_KEY`  | *(खाली)*               | एंथ्रोपिक एपीआई कुंजी |
| `GOOGLE_API_KEY`     | *(खाली)*               | गूगल जेमिनी एपीआई कुंजी |
| `DEEPSEEK_API_KEY`   | *(खाली)*               | डीपसीक एपीआई कुंजी |
| `GROQ_API_KEY`       | *(खाली)*               | ग्रॉक एपीआई कुंजी |
| `MISTRAL_API_KEY`    | *(खाली)*               | मिस्ट्रल एपीआई कुंजी |
| `OLLAMA_URL`     | *(खाली)*               | ओलामा बेस URL (उदाहरण: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(खाली)*               | एक्सएआई एपीआई कुंजी |

केवल उन प्रदाताओं को कॉन्फ़िगर करें जिनका आप उपयोग कर रहे हैं। मॉडल आईडी नामस्थानित होते हैं (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, आदि)।

**लागत प्रदर्शन:** ओपनरूटर जहां उपयुक्त हो, सटीक बिलिंग लागत लौटाता है। अन्य प्रदाता तब तक **अनुमानित** लागत का उपयोग करते हैं जब तक ओपनरूटर की पब्लिक मॉडल प्राइसिंग से ओपनरूटर की कुंजी उपलब्ध होती है; इसके बिना, गैर-ओपनरूटर लागत `0` के रूप में दिखाई दे सकती है। अनुमान बिल नहीं होते हैं।

<br/>

**डेटा और स्थायित्व:** डॉकर के लिए, `/app/data` पर एक वॉल्यूम माउंट करें ताकि `config.json` और स्क्वाइलाइट डेटाबेस कंटेनर पुनः आरंभ के दौरान सहेजे रहें। वॉल्यूम के बिना, कंटेनर रुकने पर सभी डेटा खो जाता है।

**डेवलपर्स:** पुराने सिंगल-की कॉन्फ़िग को बदलने वाले परिवर्तन लेने के बाद, यदि आपकी स्थानीय फ़ाइल अभी भी हटाए गए फ़ील्ड्स (`api_key`, `api_url`, प्रॉक्सी विकल्प) का उपयोग कर रही है, तो `data/config.json` को `src/config-defaults/config_default.json` से नए डिफ़ॉल्ट आकार के साथ रीसेट या मर्ज करें।

<br/>

**वेब प्रमाणीकरण:**

- डिफ़ॉल्ट एडमिन: `admin` / `transrewrt26`।
- उपयोगकर्ताओं को **सेटिंग्स → उपयोगकर्ता** में प्रबंधित करें।
- पासवर्ड रीसेट करना: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (स्रोत से: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **चेतावनी**<br/>
> किसी भी नेटवर्क-एक्सेसिबल होस्ट पर तुरंत डिफ़ॉल्ट एडमिन पासवर्ड बदलें।

<br/>

महत्वपूर्ण सेटिंग्स (फ़ॉन्ट, मॉडल, भाषाएँ, आदि) एप्लिकेशन सेटिंग्स में उपलब्ध हैं।

<br/><br/>

<a id="development-and-architecture"></a>

## विकास और वास्तुकला

- **विकास:** सेटअप, बिल्ड, परीक्षण और तैनाती (इलेक्ट्रॉन, वेब, डॉकर) - देखें **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**।
- **वास्तुकला और सिस्टम अवलोकन:** फ़ोल्डर संरचना, तकनीकी स्टैक, डिज़ाइन निर्णय - देखें **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**।

<br/><br/>

<a id="releases-and-tags"></a>
## रिलीज़ और टैग

- **Git टैग** `v`* (जैसे `v1.0.10`) [रिलीज़ वर्कफ़्लो](.github/workflows/release.yml) को सक्षम करते हैं। **GitHub रिलीज़** विंडोज इंस्टॉलर (`.exe`) और लिनक्स AppImages (**x64** और **arm64**) संलग्न करते हैं।
- **डॉकर इमेज** को `ghcr.io/wsj-br/transrewrt` पर प्रकाशित किया गया है। इमेज टैग Git संस्करण से मेल खाते हैं (जैसे `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) और `latest` के साथ। मल्टी-आर्क: `linux/amd64` और `linux/arm64` (जैसे रास्पबेरी पाई)।

<br/><br/>

<a id="contributing"></a>
## योगदान करें

1. रिपॉजिटरी की फोर्क करें।
2. एक फीचर ब्रांच बनाएँ: `git checkout -b feature/my-feature`
3. अपने परिवर्तनों को स्पष्ट संदेश के साथ कमिट करें।
4. पुश करें और `main` के खिलाफ एक पुल रिक्वेस्ट खोलें।

कृपया सबमिट करने से पहले मौजूदा कोड शैली का पालन करें और इलेक्ट्रॉन और वेब मोड दोनों में अपने परिवर्तनों का परीक्षण करें। बिल्ड और परीक्षण निर्देशों के लिए [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) देखें।

<br/>

**मुद्दों की रिपोर्टिंग:** [GitHub](https://github.com/wsj-br/transrewrt/issues) पर एक मुद्दा खोलें। अपने प्लेटफॉर्म (विंडोज / लिनक्स / डॉकर) और ऐप संस्करण (एबाउट डायलॉग या रिलीज़ पृष्ठ पर दिखाया गया) शामिल करें।

<br/><br/>

<a id="disclaimer"></a>

## अस्वीकरण

उत्पाद नाम और आइकन उनके संबंधित मालिकों के संपदा हैं तथा केवल पहचान के उद्देश्य से उपयोग किए जाते हैं। इस सॉफ़्टवेयर का उल्लिखित ब्रांडों से कोई संबंध नहीं है और न ही उनका समर्थन करता है।

<br/><br/>

<a id="license"></a>
## लाइसेंस

कॉपीराइट © 2026 वाल्डेमार स्कूडेलर जूनियर।

[एपाचे लाइसेंस 2.0](LICENSE)