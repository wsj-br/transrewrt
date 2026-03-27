---
translated_at: "2026-03-26T00:39:35.594Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
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

एआई संचालित पाठ उपकरण: बहुभाषी अनुवाद, विभिन्न शैलियों में पुन: लेखन और कस्टम प्रॉम्प्ट्स के साथ परिवर्तन — कई एआई प्रदाताओं (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, और स्थानीय Ollama) का उपयोग करके। डेस्कटॉप ऐप (Electron) या स्व-होस्टेड वेब ऐप (Docker) के रूप में चलता है।

- **अनुवाद** — दर्जनों भाषाओं के बीच, स्वत: स्रोत भाषा का पता लगाकर
- **पुन: लेखन** — व्याकरण सुधार, स्पष्टता बढ़ाएँ, औपचारिक/अनौपचारिक, संक्षिप्त करें, विस्तार करें, तकनीकी रूपांतरण
- **परिवर्तन** — कस्टम एआई प्रॉम्प्ट्स; प्रॉम्प्ट बनाएँ और प्रबंधित करें, प्रत्येक प्रॉम्प्ट के लिए वैकल्पिक लक्ष्य भाषा
- **इतिहास** — पूर्ण निष्पादन इतिहास, इनपुट/आउटपुट पाठ के साथ, फ़िल्टरिंग और निर्यात की सुविधा
- **मॉडल और लागत** — किसी भी कॉन्फ़िगर किए गए प्रदाता से मॉडल चुनें; लागत और उपयोग डैशबोर्ड, लॉग, मॉडल/ऑपरेशन/दिन के अनुसार सारांश
- **यूआई** — बहुभाषी इंटरफ़ेस (30+ भाषाएँ, RTL समर्थन), फ़ॉन्ट, ...
- **वेब मोड** — एडमिन भूमिकाओं के साथ बहु-उपयोगकर्ता सहायता
- **डेस्कटॉप** — विंडोज़ और लिनक्स के लिए इलेक्ट्रॉन ऐप
- **स्व-होस्टेड** — amd64 & arm64 (रास्पबेरी पाई-तैयार) के लिए डॉकर इमेज

एक बार स्थापित होने के बाद, सभी सुविधाओं की पूर्ण जानकारी के लिए **[उपयोगकर्ता गाइड](USER-GUIDE.hi.md)** देखें।

<small>**अन्य भाषाओं में पढ़ें:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **यूआई और दस्तावेज़ीकरण अनुवाद पर टिप्पणी:** मूल अंग्रेजी (यूके) के अलावा सभी इंटरफ़ेस भाषाओं को एआई मॉडल का उपयोग करके अनुवादित किया गया है; शब्दावली अशुद्ध या त्रुटियाँ शामिल हो सकती हैं।

</small>

<br/>

<a id="screenshots"></a>
## स्क्रीनशॉट

**भाषा चयनकर्ता**

![भाषा चयनकर्ता](../images/screenshots/hi/language-selector.png)

**अनुवाद**

![अनुवाद](../images/screenshots/hi/translate.png)

**परिवर्तन - प्रॉम्प्ट संपादक**

![परिवर्तन - प्रॉम्प्ट संपादक](../images/screenshots/hi/transform-prompt-edit.png)

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
  - [विंडोज (इलेक्ट्रॉन)](#windows-electron)
  - [लिनक्स (इलेक्ट्रॉन)](#linux-electron)
  - [डॉकर](#docker)
- [ओपनराउटर API कुंजी प्राप्त करना](#getting-an-openrouter-api-key)
- [कॉन्फ़िगरेशन और वातावरण](#configuration-and-environment)
- [विकास और आर्किटेक्चर](#development-and-architecture)
- [रिलीज़ और टैग्स](#releases-and-tags)
- [योगदान कैसे दें](#contributing)
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

`sk-or-your-key` को अपनी [ओपनराउटर एपीआई कुंजी](https://openrouter.ai/keys) से बदलें (या अन्य प्रदाता की कुंजियाँ सेट करें; देखें [कॉन्फ़िगरेशन](#configuration-and-environment))। [http://localhost:5000](http://localhost:5000) खोलें और सेवा को बाहर करने से पहले डिफ़ॉल्ट एडमिन पासवर्ड बदलें।

<br/>

> ℹ️ **नोट**<br/>
> डॉकर में, LLM क्रेडेंशियल्स को `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … जैसे वातावरण चरों के साथ सेट किया जाता है (वेब यूआई में नहीं)। डेस्कटॉप (इलेक्ट्रॉन) पर, आप **सेटिंग्स → API** में कुंजियाँ कॉन्फ़िगर करते हैं।

<br/>

**विंडोज**

[रिलीज़](https://github.com/wsj-br/transrewrt/releases) से नवीनतम `Transrewrt Setup x.y.z.exe` डाउनलोड करें, इंस्टालर को चलाएँ, फिर स्टार्ट मेनू या डेस्कटॉप शॉर्टकट से लॉन्च करें। **सेटिंग्स → API** में अपनी एपीआई कुंजियाँ दर्ज करें। आपको कम से कम एक प्रदाता कॉन्फ़िगर करना होगा, मुफ्त मॉडल्स के लिए ओपनराउटर आम है।

<br/>

**लिनक्स**

[रिलीज़](https://github.com/wsj-br/transrewrt/releases) से अपने सीपीयू के लिए `.AppImage` डाउनलोड करें (`x64` सामान्य पीसी के लिए, `arm64` कई एआरएम उपकरणों के लिए, रास्पबेरी पाई 4+ सहित), फिर:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**सेटिंग्स → API** में अपनी एपीआई कुंजियाँ दर्ज करें। आपको कम से कम एक प्रदाता कॉन्फ़िगर करना होगा, मुफ्त मॉडल्स के लिए ओपनराउटर आम है।

डेबियन/उबंटू पर आपको पहले अतिरिक्त आश्रितताएँ इंस्टॉल करने की आवश्यकता हो सकती है:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

विवरण के लिए [इंस्टॉलेशन → लिनक्स](#linux-electron) देखें।

<br/>

> ℹ️ **नोट**<br/>
> मैकओएस वर्तमान में समर्थित नहीं है। ट्रांसरीराइट विंडोज, लिनक्स और डॉकर के लिए उपलब्ध है।

<br/>

एप्लिकेशन चलने के बाद, पाठ का अनुवाद, पुनर्लेखन और रूपांतरण करना, प्रॉम्प्ट्स प्रबंधित करना और मॉडल्स कॉन्फ़िगर करना सीखने के लिए **[यूज़र गाइड](USER-GUIDE.hi.md)** देखें।

<br/><br/>

<a id="installation"></a>
## स्थापना

<a id="windows-electron"></a>
### विंडोज (इलेक्ट्रॉन)

- [रिलीज़](https://github.com/wsj-br/transrewrt/releases) से नवीनतम इंस्टालर डाउनलोड करें।
- `.exe` चलाएँ और इंस्टालर का पालन करें।
- पहली बार चलाना: एप्लिकेशन को स्टार्ट मेनू या डेस्कटॉप शॉर्टकट से शुरू करें। 

<br/>

<a id="linux-electron"></a>
### लिनक्स (इलेक्ट्रॉन)

- [रिलीज़](https://github.com/wsj-br/transrewrt/releases) से मेल खाने वाला `.AppImage` (`x64` या `arm64`) डाउनलोड करें।
- चलाएँ: x86_64/amd64 पर `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`, या ARM64 पर `...-arm64.AppImage` फ़ाइल नाम का उपयोग करें।
- अतिरिक्त आश्रितताएँ (डेबियन/उबंटू): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- अधिक के लिए [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) देखें।

<br/>

<a id="docker"></a>
### डॉकर

- पुल करें: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- कम से कम एक प्रदाता कुंजी को वातावरण के माध्यम से सेट करें (उदाहरण के लिए ओपनराउटर के लिए `OPENROUTER_API_KEY`)। `-e` या `docker compose` / `.env` के साथ चरों को पास करें ताकि गुप्त क्रेडेंशियल्स इमेज में न जमा हों।
- प्रदाता की कुंजियाँ वेब यूआई में **नहीं दर्ज** की जाती हैं; सर्वर उन्हें वातावरण से पढ़ता है।

उदाहरण - प्रचलन के लिए एक नामित वॉल्यूम (env के माध्यम से ओपनराउटर कुंजी):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| विकल्प   | विवरण                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| पोर्ट     | `5000` (`-p 5000:5000` के साथ मैप करें)                                                                              |
| वॉल्यूम   | कॉन्फ़िग और डेटाबेस प्रचलन के लिए `/app/data` माउंट करें                                                         |
| वातावरण चर | `PORT`, `CONFIG_PATH`, साथ ही LLM कुंजियाँ (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - देखें [कॉन्फ़िगरेशन](#configuration-and-environment) |

स्रोत से बनाने और चलाने के लिए: `docker compose up --build -d` या `pnpm docker:up` - देखें [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## ओपनराउटर एपीआई कुंजी प्राप्त करना

ट्रांसरिवर्ट कई एआई प्रदाताओं का समर्थन करता है। [ओपनराउटर](https://openrouter.ai) एक लोकप्रिय विकल्प है क्योंकि इसमें एक ही कुंजी के तहत कई मॉडल समाहित हैं और यह निःशुल्क मॉडल प्रदान करता है।

1. [openrouter.ai](https://openrouter.ai) पर साइन अप करें या लॉग इन करें।
2. [Keys](https://openrouter.ai/keys) पृष्ठ खोलें और एक नई कुंजी बनाएं (इसका नाम दें, और वैकल्पिक रूप से एक क्रेडिट सीमा सेट करें)। आप क्रेडिट जोड़े बिना निःशुल्क मॉडल का उपयोग कर सकते हैं।
3. **डेस्कटॉप (इलेक्ट्रॉन):** **सेटिंग्स → एपीआई** में कुंजी चिपकाएं। **डॉकर:** एन्वायरनमेंट वेरिएबल्स जैसे `OPENROUTER_API_KEY` सेट करें (देखें [शीघ्र सुरुआत](#quick-start))।

अनुवाद, पुनर्लेखन या परिवर्तन के लिए ओपनराउटर के **बॉडी बिल्डर** मॉडल ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) का उपयोग न करें: यह तैयार पाठ के बजाय JSON अनुरोध पेलोड लौटाता है। समर्थित मॉडल्स के लिए उपयोगकर्ता गाइड में [सेटिंग्स → मॉडल](USER-GUIDE.hi.md#models) देखें।

आप अन्य प्रदाता भी प्रयोग कर सकते हैं (ओपनएआई, एंथ्रोपिक, गूगल जेमिनी, डीपसीक, ग्रॉक, मिस्ट्रल, एक्सएआई, सेरेब्रास) या [ओलामा](https://ollama.com) के साथ स्थानीय रूप से मॉडल चला सकते हैं। समर्थित प्रदाताओं और पर्यावरण चरों की पूरी सूची के लिए [कॉन्फ़िगरेशन](#configuration-and-environment) देखें।

> ⚠️ **चेतावनी**<br/>
> यदि आप किसी दूसरे उपकरण, कंटेनर या सेवा से ओलामा का उपयोग कर रहे हैं, तो सुनिश्चित करें कि ओलामा को बाहरी कनेक्शन (केवल लोकलहोस्ट नहीं) की अनुमति देने के लिए कॉन्फ़िगर किया गया है।

सीमाओं, बीवाईओके और अधिक के लिए, [ओपनराउटर प्रमाणीकरण](https://openrouter.ai/docs/api/reference/authentication) देखें।

<br/><br/>

<a id="configuration-and-environment"></a>
## कॉन्फ़िगरेशन और पर्यावरण

**कॉन्फ़िग फ़ाइल स्थान**

| डिप्लॉयमेंट         | कॉन्फ़िग स्थान                                   |
| ------------------ | ------------------------------------------------- |
| इलेक्ट्रॉन (विंडोज़) | `%APPDATA%\transrewrt\`                           |
| इलेक्ट्रॉन (लिनक्स)   | `~/.config/transrewrt/`                           |
| वेब / डॉकर       | `/app/data/config.json` (स्थायी रखने के लिए वॉल्यूम का उपयोग करें) |

<br/>

**पर्यावरण चर** (केवल वेब/डॉकर; इलेक्ट्रॉन स्थानीय कॉन्फ़िग फ़ाइल का उपयोग करता है)

| चर         | डिफ़ॉल्ट                 | विवरण |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | सर्वर सुनने वाला पोर्ट |
| `CONFIG_PATH`    | `/app/data/config.json` | कॉन्फ़िग फ़ाइल का मार्ग |
| `OPENROUTER_API_KEY` | *(खाली)*               | ओपनराउटर एपीआई कुंजी |
| `OPENAI_API_KEY`     | *(खाली)*               | ओपनएआई एपीआई कुंजी |
| `CEREBRAS_API_KEY`   | *(खाली)*               | सेरेब्रास एपीआई कुंजी |
| `ANTHROPIC_API_KEY`  | *(खाली)*               | एंथ्रोपिक एपीआई कुंजी |
| `GOOGLE_API_KEY`     | *(खाली)*               | गूगल जेमिनी एपीआई कुंजी |
| `DEEPSEEK_API_KEY`   | *(खाली)*               | डीपसीक एपीआई कुंजी |
| `GROQ_API_KEY`       | *(खाली)*               | ग्रॉक एपीआई कुंजी |
| `MISTRAL_API_KEY`    | *(खाली)*               | मिस्ट्रल एपीआई कुंजी |
| `OLLAMA_URL`     | *(खाली)*               | ओलामा बेस यूआरएल (उदा॰ `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(खाली)*               | एक्सएआई एपीआई कुंजी |

केवल उन प्रदाताओं को कॉन्फ़िगर करें जिनका आप उपयोग करते हैं। मॉडल आईडी नामस्थानित हैं (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, आदि)।

**लागत प्रदर्शन:** जहां लागू हो, ओपनराउटर बिल की गई लागत का सटीक उत्तर देता है। सभी अन्य प्रदाता ओपनराउटर की सार्वजनिक मॉडल मूल्य नीति से **अनुमानित** लागत का उपयोग करते हैं जब ओपनराउटर की कुंजी उपलब्ध होती है; इसके बिना, ओपनराउटर नहीं की लागत `0` के रूप में दिखाई दे सकती है। अनुमान बिल नहीं हैं।

<br/>

**डेटा और स्थायित्व:** डॉकर के लिए, `/app/data` पर एक वॉल्यूम माउंट करें ताकि `config.json` और SQLite डेटाबेस कंटेनर पुनः आरंभ के दौरान बरकरार रहें। बिना वॉल्यूम के, कंटेनर बंद होने पर सभी डेटा खो जाता है।

**डेवलपर्स:** पुराने सिंगल-की कॉन्फ़िग को बदलने वाले परिवर्तन खींचने के बाद, अगर आपकी स्थानीय फ़ाइल अभी भी हटाए गए फ़ील्ड्स (`api_key`, `api_url`, प्रॉक्सी विकल्प) का उपयोग कर रही है, तो `data/config.json` को `src/config-defaults/config_default.json` में नए डिफ़ॉल्ट आकार के साथ रीसेट या मर्ज करें।

<br/>

**वेब प्रमाणीकरण:**

- डिफ़ॉल्ट एडमिन: `admin` / `transrewrt26`।
- **सेटिंग्स → उपयोगकर्ता** में उपयोगकर्ताओं का प्रबंधन करें।
- किसी पासवर्ड को रीसेट करें: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (स्रोत से: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **चेतावनी**<br/>
> किसी भी नेटवर्क-एक्सेसिबल होस्ट पर डिफ़ॉल्ट एडमिन पासवर्ड तुरंत बदलें।

<br/>

मुख्य सेटिंग्स (फ़ॉन्ट, मॉडल, भाषाएँ, आदि) एप्लिकेशन सेटिंग्स में उपलब्ध हैं।

<br/><br/>

<a id="development-and-architecture"></a>

## विकास और संरचना

- **विकास:** सेटअप, बिल्ड, परीक्षण और तैनाती (Electron, Web, Docker) - देखें **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **संरचना और प्रणाली का अवलोकन:** फ़ोल्डर संरचना, तकनीकी स्टैक, डिज़ाइन निर्णय - देखें **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## रिलीज़ और टैग

- **Git टैग** `v`* (जैसे `v1.0.10`) [रिलीज़ वर्कफ़्लो](.github/workflows/release.yml) को सक्रिय करते हैं। **GitHub रिलीज़** में Windows इंस्टॉलर (`.exe`) और Linux AppImage (**x64** और **arm64**) शामिल होते हैं।
- **Docker इमेज** `ghcr.io/wsj-br/transrewrt` पर प्रकाशित किए जाते हैं। इमेज टैग Git संस्करण के मेल खाते हैं (जैसे `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) और `latest` भी शामिल है। मल्टी-आर्क: `linux/amd64` और `linux/arm64` (जैसे रास्पबेरी पाई)।

<br/><br/>

<a id="contributing"></a>
## योगदान

1. रिपॉज़िटरी की फोर्क करें।
2. एक फीचर शाखा बनाएँ: `git checkout -b feature/my-feature`
3. स्पष्ट संदेश के साथ अपने परिवर्तन कमिट करें।
4. पुश करें और `main` के विरुद्ध एक पुल रिक्वेस्ट खोलें।

कृपया प्रस्तुत करने से पहले मौजूदा कोड शैली का पालन करें और Electron और वेब दोनों मोड में अपने परिवर्तनों का परीक्षण करें। बिल्ड और परीक्षण निर्देशों के लिए [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) देखें।

<br/>

**समस्याएँ रिपोर्ट करना:** [GitHub](https://github.com/wsj-br/transrewrt/issues) पर एक इश्यू खोलें। अपने प्लेटफॉर्म (विंडोज़ / लिनक्स / डॉकर) और ऐप संस्करण (About डायलॉग या रिलीज़ पेज पर दिखाया गया) शामिल करें।

<br/><br/>

<a id="disclaimer"></a>
## अस्वीकरण

उत्पाद नाम और आइकन उनके संबंधित मालिकों के स्वामित्व में हैं और केवल पहचान के उद्देश्य से उपयोग किए जाते हैं। यह सॉफ़्टवेयर उल्लिखित ब्रांडों में से किसी से संबद्ध या उनके द्वारा समर्थित नहीं है।

<br/><br/>

<a id="license"></a>
## लाइसेंस

कॉपीराइट © 2026 वाल्डेमार स्कूडेलर जूनियर।

[Apache लाइसेंस 2.0](LICENSE)