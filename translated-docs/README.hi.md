---
translated_at: "2026-03-25T22:15:41.968Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
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

एआई-संचालित पाठ उपकरण: कई एआई प्रदाता (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI और स्थानीय Ollama) का उपयोग करके भाषाओं के बीच अनुवाद करें, विभिन्न शैलियों में पुनर्लेखित करें और अनुकूल संकेतों के साथ परिवर्तित करें — डेस्कटॉप ऐप (Electron) या स्व-होस्ट किए गए वेब ऐप (Docker) के रूप में चलाएं।

- **अनुवाद** — दर्जनों भाषाओं के बीच, स्वचालित स्रोत का पता लगाने के साथ
- **पुनर्लेखन** — व्याकरण ठीक करें, स्पष्टता में सुधार करें, औपचारिक/अनौपचारिक, छोटा करें, विस्तार करें, तकनीकी शैली में बदलें
- **परिवर्तन** — अनुकूल एआई संकेत; संकेत बनाएं और प्रबंधित करें, संकेत के अनुसार लक्ष्य भाषा वैकल्पिक
- **इतिहास** — इनपुट/आउटपुट पाठ के साथ पूर्ण निष्पादन इतिहास, फ़िल्टरिंग और निर्यात
- **मॉडल और लागत** — किसी भी कॉन्फ़िगर किए गए प्रदाता के मॉडल चुनें; लॉग, मॉडल/संचालन/दिन के अनुसार सारांश के साथ लागत और उपयोग डैशबोर्ड
- **यूआई** — बहुभाषी इंटरफेस (30+ भाषाएं, RTL समर्थन), फ़ॉन्ट, ...
- **वेब मोड** — एडमिन भूमिकाओं के साथ बहु-उपयोगकर्ता समर्थन
- **डेस्कटॉप** — Windows और Linux के लिए Electron ऐप
- **स्व-होस्ट किया गया** — amd64 और arm64 (रास्पबेरी पाई तैयार) के लिए Docker इमेज

एक बार स्थापित होने के बाद, सभी सुविधाओं के पूर्ण मार्गदर्शन के लिए **[उपयोगकर्ता मार्गदर्शिका](USER-GUIDE.hi.md)** देखें।

<small>**अन्य भाषाओं में पढ़ें:** [English (UK)](README.hi.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **यूआई और प्रलेखन अनुवाद पर टिप्पणी:** मूल अंग्रेजी (UK) के अलावा सभी इंटरफेस भाषाओं का अनुवाद एआई मॉडल का उपयोग करके किया गया था; शब्दावली अशुद्ध या त्रुटियां हो सकती हैं।

</small>

<br/>

<a id="screenshots"></a>
## स्क्रीनशॉट

**भाषा चयनकर्ता**

![भाषा चयनकर्ता](../images/screenshots/hi/language-selector.png)

**अनुवाद**

![अनुवाद](../images/screenshots/hi/translate.png)

**परिवर्तन - संकेत संपादक**

![परिवर्तन - संकेत संपादक](../images/screenshots/hi/transform-prompt-edit.png)

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
- [ओपनराउटर एपीआई कुंजी प्राप्त करना](#getting-an-openrouter-api-key)
- [कॉन्फ़िगरेशन और वातावरण](#configuration-and-environment)
- [विकास और संरचना](#development-and-architecture)
- [रिलीज़ और टैग](#releases-and-tags)
- [योगदान](#contributing)
- [अस्वीकरण](#disclaimer)
- [लाइसेंस](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## त्वरित शुरुआत

**डॉकर (स्वयं होस्ट करने के लिए अनुशंसित)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` को अपनी [ओपनराउटर एपीआई कुंजी](https://openrouter.ai/keys) से प्रतिस्थापित करें (या अन्य प्रदाता कुंजी सेट करें; [कॉन्फ़िगरेशन](#configuration-and-environment) देखें)। [http://localhost:5000](http://localhost:5000) खोलें और सेवा को प्रकाशित करने से पहले डिफ़ॉल्ट एडमिन पासवर्ड बदलें।

<br/>

> ℹ️ **नोट**<br/>
> डॉकर में, एलएलएम प्रमाणपत्र वातावरण चर जैसे `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … के साथ सेट किए जाते हैं (वेब यूआई में नहीं)। डेस्कटॉप (इलेक्ट्रॉन) पर आप **सेटिंग्स → एपीआई** में कुंजियाँ कॉन्फ़िगर करते हैं।

<br/>

**विंडोज़**

[रिलीज़](https://github.com/wsj-br/transrewrt/releases) से नवीनतम `Transrewrt Setup x.y.z.exe` डाउनलोड करें, इंस्टॉलर चलाएं, फिर स्टार्ट मेनू या डेस्कटॉप शॉर्टकट से लॉन्च करें। **सेटिंग्स → एपीआई** में अपनी एपीआई कुंजियाँ दर्ज करें। आपको कम से कम एक प्रदाता कॉन्फ़िगर करना होगा, मुफ्त मॉडल के लिए ओपनराउटर सामान्य है।

<br/>

**लिनक्स**

[रिलीज़](https://github.com/wsj-br/transrewrt/releases) से अपने सीपीयू के लिए `.AppImage` डाउनलोड करें (`x64` सामान्य पीसी के लिए, `arm64` कई आर्म उपकरणों के लिए, रास्पबेरी पाई 4+ सहित), फिर:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**सेटिंग्स → एपीआई** में अपनी एपीआई कुंजियाँ दर्ज करें। आपको कम से कम एक प्रदाता कॉन्फ़िगर करना होगा, मुफ्त मॉडल के लिए ओपनराउटर सामान्य है।

डेबियन/उबंटू पर आपको पहले अतिरिक्त निर्भरताएँ इंस्टॉल करनी पड़ सकती हैं:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

विवरण के लिए [स्थापना → लिनक्स](#linux-electron) देखें।

<br/>

> ℹ️ **नोट**<br/>
> मैकओएस वर्तमान में समर्थित नहीं है। ट्रांस्रेवर्ट विंडोज़, लिनक्स और डॉकर के लिए उपलब्ध है।

<br/>

एक बार ऐप चलने लगे, पाठ अनुवादित करने, पुनर्लेखित करने और रूपांतरित करने, प्रॉम्प्ट प्रबंधित करने और मॉडल कॉन्फ़िगर करने के तरीके के बारे में जानने के लिए **[उपयोगकर्ता गाइड](USER-GUIDE.hi.md)** देखें।

<br/><br/>

<a id="installation"></a>
## स्थापना

<a id="windows-electron"></a>
### विंडोज़ (इलेक्ट्रॉन)

- [रिलीज़](https://github.com/wsj-br/transrewrt/releases) से नवीनतम इंस्टॉलर डाउनलोड करें।
- `.exe` चलाएं और इंस्टॉलर का अनुसरण करें।
- पहली बार चलाएं: स्टार्ट मेनू या डेस्कटॉप शॉर्टकट से ऐप प्रारंभ करें।

<br/>

<a id="linux-electron"></a>
### लिनक्स (इलेक्ट्रॉन)

- [रिलीज़](https://github.com/wsj-br/transrewrt/releases) से मिलता-जुलता `.AppImage` (`x64` या `arm64`) डाउनलोड करें।
- चलाएं: x86_64/amd64 पर `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`, या ARM64 पर `...-arm64.AppImage` फ़ाइलनेम का उपयोग करें।
- अतिरिक्त निर्भरताएँ (डेबियन/उबंटू): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- अधिक जानकारी के लिए [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) देखें।

<br/>

<a id="docker"></a>
### डॉकर

- खींचें: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- कम से कम एक प्रदाता कुंजी वातावरण के माध्यम से सेट करें (उदाहरण के लिए `OPENROUTER_KEY` ओपनराउटर के लिए)। गुप्त कुंजियों को छवि में स्थायी रूप से न शामिल करने के लिए `-e` या `docker compose` / `.env` के साथ चर पास करें।
- प्रदाता कुंजियों को वेब यूआई में **नहीं** दर्ज किया जाता है; सर्वर उन्हें वातावरण से पढ़ता है।

उदाहरण - स्थायित्व के लिए नामित वॉल्यूम (env के माध्यम से ओपनराउटर कुंजी):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| विकल्प   | विवरण                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| पोर्ट    | `5000` (मैप करने के लिए `-p 5000:5000` का उपयोग करें)                                                                              |
| वॉल्यूम  | कॉन्फ़िग और डेटाबेस स्थायित्व के लिए `/app/data` माउंट करें                                                         |
| पर्यावरण चर | `PORT`, `CONFIG_PATH`, साथ में एलएलएम कुंजियाँ (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - [कॉन्फ़िगरेशन](#configuration-and-environment) देखें |

स्रोत से बनाने और चलाने के लिए: `docker compose up --build -d` या `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) देखें।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## ओपनराउटर API कुंजी प्राप्त करना

ट्रांसरीवर्ट कई AI प्रदाताओं का समर्थन करता है। [ओपनराउटर](https://openrouter.ai) एक लोकप्रिय विकल्प है क्योंकि यह एक ही कुंजी के तहत कई मॉडल्स को एकत्रित करता है और मुफ्त मॉडल्स प्रदान करता है।

1. [openrouter.ai](https://openrouter.ai) पर साइन अप करें या लॉग इन करें।
2. [Keys](https://openrouter.ai/keys) पृष्ठ खोलें और एक नई कुंजी बनाएं (इसका नाम दें और वैकल्पिक रूप से क्रेडिट सीमा सेट करें)। आप क्रेडिट जोड़े बिना मुफ्त मॉडल्स का उपयोग कर सकते हैं।
3. **डेस्कटॉप (इलेक्ट्रॉन):** **सेटिंग्स → API** में कुंजी डालें। **डॉकर:** पर्यावरण चर जैसे `OPENROUTER_KEY` सेट करें (देखें [त्वरित प्रारंभ](#quick-start))।

अनुवाद, पुनर्लेखन या परिवर्तन हेतु ओपनराउटर के **बॉडी बिल्डर** मॉडल ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) का उपयोग न करें: यह JSON अनुरोध पेलोड वापस करता है, इन कार्यों के लिए पूर्ण पाठ नहीं। समर्थित मॉडल्स के लिए उपयोगकर्ता मार्गदर्शिका में [सेटिंग्स → मॉडल्स](USER-GUIDE.hi.md#models) देखें।

आप अन्य प्रदाताओं (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) का भी उपयोग कर सकते हैं या [Ollama](https://ollama.com) के साथ मॉडल्स स्थानीय रूप से चला सकते हैं। समर्थित प्रदाताओं और पर्यावरण चर की पूर्ण सूची के लिए [कॉन्फ़िगरेशन](#configuration-and-environment) देखें।

> ⚠️ **चेतावनी**<br/>
> यदि आप दूसरे डिवाइस, कंटेनर या सेवा से ओलामा का उपयोग कर रहे हैं, तो ओलामा को बाहरी कनेक्शन की अनुमति देने के लिए कॉन्फ़िगर करना याद रखें (केवल लोकलहोस्ट नहीं)।

सीमाओं, BYOK और अधिक जानकारी के लिए, [ओपनराउटर प्रमाणीकरण](https://openrouter.ai/docs/api/reference/authentication) देखें।

<br/><br/>

<a id="configuration-and-environment"></a>
## कॉन्फ़िगरेशन और पर्यावरण

**कॉन्फ़िग फ़ाइल स्थान**

| डिप्लॉयमेंट         | कॉन्फ़िग स्थान                                   |
| ------------------ | ------------------------------------------------- |
| इलेक्ट्रॉन (विंडोज़) | `%APPDATA%\transrewrt\`                           |
| इलेक्ट्रॉन (लिनक्स)   | `~/.config/transrewrt/`                           |
| वेब / डॉकर       | `/app/data/config.json` (स्थायित्व हेतु वॉल्यूम का उपयोग करें) |

<br/>

**पर्यावरण चर** (केवल वेब/डॉकर के लिए; इलेक्ट्रॉन स्थानीय कॉन्फ़िग फ़ाइल का उपयोग करता है)

| चर         | डिफ़ॉल्ट                 | विवरण |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | सर्वर सुनने वाला पोर्ट |
| `CONFIG_PATH`    | `/app/data/config.json` | कॉन्फ़िग फ़ाइल का पथ |
| `OPENROUTER_KEY` | *(खाली)*               | ओपनराउटर API कुंजी |
| `OPENAI_KEY`     | *(खाली)*               | ओपनएआई एपीआई कुंजी |
| `CEREBRAS_KEY`   | *(खाली)*               | सेरेब्रास एपीआई कुंजी |
| `ANTHROPIC_KEY`  | *(खाली)*               | एंथ्रोपिक एपीआई कुंजी |
| `GOOGLE_KEY`     | *(खाली)*               | गूगल जेमिनी एपीआई कुंजी |
| `DEEPSEEK_KEY`   | *(खाली)*               | डीपसीक एपीआई कुंजी |
| `GROQ_KEY`       | *(खाली)*               | ग्रॉक एपीआई कुंजी |
| `MISTRAL_KEY`    | *(खाली)*               | मिस्ट्रल एपीआई कुंजी |
| `OLLAMA_URL`     | *(खाली)*               | ओलामा बेस URL (उदाहरण: `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(खाली)*               | xAI एपीआई कुंजी |

केवल उन प्रदाताओं को कॉन्फ़िगर करें जिनका आप उपयोग करते हैं। मॉडल आईडी नामस्थानित हैं (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, आदि)।

**लागत प्रदर्शन:** जहां लागू हो, ओपनराउटर सटीक बिल की गई लागत वापस करता है। अन्य प्रदाता जब ओपनराउटर कुंजी उपलब्ध हो, तो ओपनराउटर की सार्वजनिक मॉडल कीमतों से **अनुमानित** लागत का उपयोग करते हैं; यदि नहीं, तो ओपनराउटर नहीं, उसकी लागत `0` के रूप में दिख सकती है। अनुमान चालान नहीं होते हैं।

<br/>

**डेटा और स्थायित्व:** डॉकर के लिए, `/app/data` पर एक वॉल्यूम लगाएं ताकि `config.json` और SQLite डेटाबेस कंटेनर रीस्टार्ट के बाद भी बना रहे। बिना वॉल्यूम के, कंटेनर बंद होने पर सभी डेटा खो जाता है।

**डेवलपर्स:** पुराने एकल-कुंजी कॉन्फ़िग को बदलने वाले परिवर्तनों को पुल करने के बाद, यदि आपकी स्थानीय फ़ाइल अभी भी हटाए गए फ़ील्ड्स (`api_key`, `api_url`, प्रॉक्सी विकल्प) का उपयोग करती है, तो `data/config.json` को `src/config-defaults/config_default.json` से नए डिफॉल्ट आकार के साथ रीसेट या मर्ज करें।

<br/>

**वेब प्रमाणीकरण:**

- डिफ़ॉल्ट एडमिन: `admin` / `transrewrt26`।
- **सेटिंग्स → उपयोगकर्ता** में उपयोगकर्ताओं का प्रबंधन करें।
- किसी पासवर्ड को रीसेट करने के लिए: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (स्रोत से: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **चेतावनी**<br/>
> किसी भी नेटवर्क-एक्सेसिबल होस्ट पर डिफ़ॉल्ट एडमिन पासवर्ड को तुरंत बदल दें।

<br/>

मुख्य सेटिंग्स (फ़ॉन्ट, मॉडल, भाषाएँ, आदि) एप्लिकेशन सेटिंग्स में उपलब्ध हैं।

<br/><br/>

<a id="development-and-architecture"></a>

## विकास एवं संरचना

- **विकास:** सेटअप, बिल्ड, परीक्षण और तैनाती (इलेक्ट्रॉन, वेब, डॉकर) - देखें **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**।
- **संरचना एवं सिस्टम अवलोकन:** फ़ोल्डर संरचना, तकनीकी स्टैक, डिज़ाइन निर्णय - देखें **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**।

<br/><br/>

<a id="releases-and-tags"></a>
## रिलीज़ एवं टैग

- **गिट टैग** `v`* (जैसे `v1.0.10`) [रिलीज़ वर्कफ़्लो](.github/workflows/release.yml) को सक्रिय करते हैं। **GitHub रिलीज़** में विंडोज इंस्टॉलर (`.exe`) और लिनक्स ऐपइमेज़ (**x64** और **arm64**) जुड़े होते हैं।
- **डॉकर इमेज़** को `ghcr.io/wsj-br/transrewrt` पर प्रकाशित किया जाता है। इमेज़ टैग गिट संस्करण के मेल खाते हैं (जैसे, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) साथ ही `latest` भी। मल्टी-आर्क: `linux/amd64` और `linux/arm64` (जैसे, रास्पबेरी पाई)।

<br/><br/>

<a id="contributing"></a>
## योगदान

1. रिपॉजिटरी की फोर्क बनाएँ।
2. एक फ़ीचर ब्रांच बनाएँ: `git checkout -b feature/my-feature`
3. स्पष्ट संदेश के साथ अपने परिवर्तन समर्पित करें।
4. पुश करें और `main` की तुलना में एक पुल रिक्वेस्ट खोलें।

कृपया मौजूदा कोड शैली का पालन करें और सबमिट करने से पहले इलेक्ट्रॉन और वेब दोनों मोड में अपने परिवर्तनों का परीक्षण करें। बिल्ड और परीक्षण निर्देशों के लिए [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) देखें।

<br/>

**समस्या रिपोर्ट करना:** [GitHub](https://github.com/wsj-br/transrewrt/issues) पर एक मुद्दा खोलें। अपने प्लेटफॉर्म (विंडोज / लिनक्स / डॉकर) और ऐप संस्करण (बारे में संवाद या रिलीज़ पृष्ठ में दिखाया गया) शामिल करें।

<br/><br/>

<a id="disclaimer"></a>
## अस्वीकरण

उत्पाद नाम और आइकन उनके संबंधित मालिकों के स्वामित्व में हैं और केवल पहचान के उद्देश्य से उपयोग किए जाते हैं। इस सॉफ्टवेयर का उल्लिखित ब्रांडों से कोई संबंध नहीं है और न ही उनके द्वारा समर्थित है।

<br/><br/>

<a id="license"></a>
## लाइसेंस

कॉपीराइट © 2026 वॉल्डेमार स्कूडेलर जूनियर।

[अपाचे लाइसेंस 2.0](LICENSE)