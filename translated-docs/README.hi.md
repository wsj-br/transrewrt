---
translated_at: "2026-03-24T01:34:13.896Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt लोगो" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="संस्करण"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="लाइसेंस: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="प्लेटफॉर्म">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

कृत्रिम बुद्धिमत्ता से समर्थित पाठ उपकरण: भाषाओं के बीच अनुवाद करें, विभिन्न शैलियों में पुनर्लेखित करें और कस्टम प्रॉम्प्ट के साथ परिवर्तित करें — कई एआई प्रदाताओं का उपयोग करके (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, और स्थानीय Ollama)। डेस्कटॉप ऐप (Electron) या स्व-होस्टेड वेब ऐप (Docker) के रूप में चलाएं।

- **अनुवाद करें** — दर्जनों भाषाओं के बीच, स्वचालित स्रोत भाषा का पता लगाकर
- **पुनर्लेखित करें** — व्याकरण सुधारें, स्पष्टता सुधारें, औपचारिक/अनौपचारिक, संक्षिप्त करें, विस्तारित करें, तकनीकी करें
- **परिवर्तित करें** — कस्टम एआई प्रॉम्प्ट; प्रॉम्प्ट बनाएं और प्रबंधित करें, प्रत्येक प्रॉम्प्ट के लिए वैकल्पिक लक्ष्य भाषा
- **इतिहास** — इनपुट/आउटपुट पाठ के साथ पूर्ण निष्पादन इतिहास, फ़िल्टरिंग और निर्यात के साथ
- **मॉडल और लागत** — किसी भी कॉन्फ़िगर किए गए प्रदाता से मॉडल चुनें; SQLite लॉग के साथ लागत डैशबोर्ड, मॉडल/ऑपरेशन/दिन के आधार पर सारांश
- **यूआई** — बहुभाषी इंटरफ़ेस (30+ भाषाएँ, RTL समर्थन), फ़ॉन्ट, ...
- **वेब मोड** — एडमिन भूमिकाओं के साथ बहु-उपयोगकर्ता समर्थन; API कुंजियाँ सर्वर-साइड रहती हैं, ब्राउज़र में कभी उजागर नहीं होतीं
- **डेस्कटॉप** — Windows और Linux के लिए Electron ऐप
- **स्व-होस्टेड** — amd64 & arm64 (Raspberry Pi-तैयार) के लिए Docker छवि

एक बार स्थापित होने के बाद, सभी सुविधाओं की पूर्ण समीक्षा के लिए **[उपयोगकर्ता मार्गदर्शिका](USER-GUIDE.hi.md)** देखें।

<small>**अन्य भाषाओं में पढ़ें:** [अंग्रेजी (यूके)](README.hi.md) · [पुर्तगाली (ब्राज़ील)](README.pt-BR.md) · [अरबी](README.ar.md) · [बांग्ला](README.bn.md) · [कैटालान](README.ca.md) · [सरलीकृत चीनी](README.zh-CN.md) · [पारंपरिक चीनी](README.zh-TW.md) · [क्रोएशियाई](README.hr.md) · [चेक](README.cs.md) · [डच](README.nl.md) · [अंग्रेजी (संयुक्त राज्य)](README.en-US.md) · [फिलिपीनो](README.tl.md) · [फ्रेंच](README.fr.md) · [जर्मन](README.de.md) · [ग्रीक](README.el.md) · [हिंदी](README.hi.md) · [हंगेरियाई](README.hu.md) · [इतालवी](README.it.md) · [जापानी](README.ja.md) · [जावा](README.jv.md) · [कोरियाई](README.ko.md) · [मलय](README.ms.md) · [फ़ारसी](README.fa.md) · [पोलिश](README.pl.md) · [पुर्तगाली (पीटी)](README.pt.md) · [पंजाबी](README.pa.md) · [रोमानियाई](README.ro.md) · [रूसी](README.ru.md) · [स्लोवाक](README.sk.md) · [स्पेनिश](README.es.md) · [स्वाहिली](README.sw.md) · [स्वीडिश](README.sv.md) · [तेलुगू](README.te.md) · [थाई](README.th.md) · [तुर्की](README.tr.md) · [यूक्रेनियाई](README.uk.md) · [वियतनामी](README.vi.md)</small>

<br/>

**ध्यान दें (UI और दस्तावेज़ीकरण अनुवाद)**: अंग्रेज़ी (यूके) के अलावा सभी इंटरफ़ेस भाषाओं का अनुवाद एआई मॉडल के जरिए किया गया है; शाब्दिक व्याख्या अशुद्ध या त्रुटियाँ हो सकती हैं।

<a id="screenshots"></a>
## स्क्रीनशॉट

**भाषा चयनकर्ता**

![भाषा चयनकर्ता](../images/screenshots/hi/language-selector.png)

**अनुवाद**

![अनुवाद](../images/screenshots/hi/translate.png)

**परिवर्तित करें - प्रॉम्प्ट संपादक**

![परिवर्तित करें - प्रॉम्प्ट संपादक](../images/screenshots/hi/transform-prompt-edit.png)

**डैशबोर्ड**

![लागत डैशबोर्ड](../images/screenshots/hi/dashboard-summary.png)

**इतिहास**

![इतिहास](../images/screenshots/hi/history.png)

**सेटिंग्स - मॉडल चयन**

![सेटिंग्स - मॉडल चयन](../images/screenshots/hi/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## सामग्री सूची

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [त्वरित शुरुआत](#quick-start)
- [स्थापना](#installation)
  - [विंडोज़ (इलेक्ट्रॉन)](#windows-electron)
  - [लिनक्स (इलेक्ट्रॉन)](#linux-electron)
  - [डॉकर](#docker)
- [ओपनरूटर API कुंजी प्राप्त करना](#getting-an-openrouter-api-key)
- [कॉन्फ़िगरेशन और वातावरण](#configuration-and-environment)
- [विकास और संरचना](#development-and-architecture)
- [रिलीज़ और टैग](#releases-and-tags)
- [योगदान देना](#contributing)
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

`sk-or-your-key` को अपनी [ओपनरूटर API कुंजी](https://openrouter.ai/keys) से बदलें (या अन्य प्रदाता की कुंजियाँ सेट करें; [कॉन्फ़िगरेशन](#configuration-and-environment) देखें)। [http://localhost:5000](http://localhost:5000) खोलें और सेवा को खुले तौर पर उपलब्ध कराने से पहले डिफ़ॉल्ट एडमिन पासवर्ड बदलें।

<br/>

> ℹ️ **नोट**<br/>
> डॉकर में, एलएलएम क्रेडेंशियल्स को `OPENROUTER_KEY`, `OPENAI_KEY`, … जैसे पर्यावरण चर के साथ सेट किया जाता है (वेब यूआई में नहीं)। डेस्कटॉप (इलेक्ट्रॉन) पर आप **सेटिंग्स → API** में कुंजियाँ कॉन्फ़िगर करते हैं।

<br/>

**विंडोज़**

[रिलीज़](https://github.com/wsj-br/transrewrt/releases) से नवीनतम `Transrewrt Setup x.y.z.exe` डाउनलोड करें, इंस्टॉलर चलाएं, फिर स्टार्ट मेनू या डेस्कटॉप शॉर्टकट से लॉन्च करें। **सेटिंग्स → API** में अपनी API कुंजियाँ दर्ज करें। आपको कम से कम एक प्रदाता कॉन्फ़िगर करना होगा, मुफ्त मॉडल के लिए ओपनरूटर आम है।

<br/>

**लिनक्स**

[रिलीज़](https://github.com/wsj-br/transrewrt/releases) से `.AppImage` डाउनलोड करें, फिर:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

**सेटिंग्स → API** में अपनी API कुंजियाँ दर्ज करें। आपको कम से कम एक प्रदाता कॉन्फ़िगर करना होगा, मुफ्त मॉडल के लिए ओपनरूटर आम है।

डेबियन/उबंटू पर आपको पहले कुछ अतिरिक्त निर्भरताएँ स्थापित करने की आवश्यकता हो सकती है:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

विवरण के लिए [स्थापना → लिनक्स](#linux-electron) देखें।

<br/>

> ℹ️ **नोट**<br/>
> macOS फ़िलहाल समर्थित नहीं है। Transrewrt विंडोज़, लिनक्स और डॉकर के लिए उपलब्ध है।

<br/>

एप्लिकेशन चलने के बाद, टेक्स्ट अनुवादित करने, पुनर्लेखन करने और परिवर्तित करने, प्रॉम्प्ट्स प्रबंधित करने तथा मॉडल कॉन्फ़िगर करने के बारे में जानने के लिए **[उपयोगकर्ता गाइड](USER-GUIDE.hi.md)** देखें।

<br/><br/>

<a id="installation"></a>
## स्थापना

<a id="windows-electron"></a>
### विंडोज़ (इलेक्ट्रॉन)

- [रिलीज़](https://github.com/wsj-br/transrewrt/releases) से नवीनतम इंस्टॉलर डाउनलोड करें।
- `.exe` फ़ाइल चलाएँ और इंस्टॉलर के निर्देशों का पालन करें।
- पहली बार चलाना: स्टार्ट मेनू या डेस्कटॉप शॉर्टकट से एप्लिकेशन शुरू करें।

<br/>

<a id="linux-electron"></a>
### लिनक्स (इलेक्ट्रॉन)

- [रिलीज़](https://github.com/wsj-br/transrewrt/releases) से `.AppImage` डाउनलोड करें।
- चलाएँ: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- अतिरिक्त निर्भरताएँ (डेबियन/उबंटू): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- अधिक जानकारी के लिए [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) देखें।

<br/>

<a id="docker"></a>
### डॉकर

- निकालें: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- पर्यावरण के माध्यम से कम से कम एक प्रदाता कुंजी सेट करें (उदाहरण के लिए ओपनरूटर के लिए `OPENROUTER_KEY`)। गुप्त जानकारी इमेज में शामिल न हो इसके लिए `-e` या `docker compose` / `.env` के साथ चर पास करें।
- प्रदाता कुंजियाँ वेब यूआई में **नहीं** दर्ज की जाती हैं; सर्वर उन्हें पर्यावरण से पढ़ता है।

उदाहरण - स्थायित्व के लिए नामित वॉल्यूम (पर्यावरण के माध्यम से ओपनरूटर कुंजी):

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
| पोर्ट     | `5000` (मैप करने के लिए `-p 5000:5000` का उपयोग करें)                                                                              |
| वॉल्यूम   | कॉन्फ़िग और डेटाबेस स्थायित्व के लिए `/app/data` माउंट करें                                                         |
| पर्यावरण चर | `PORT`, `CONFIG_PATH`, और एलएलएम कुंजियाँ (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - विवरण [कॉन्फ़िगरेशन](#configuration-and-environment) में देखें |

स्रोत से बनाने और चलाने के लिए: `docker compose up --build -d` या `pnpm docker:up` - विवरण के लिए [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) देखें।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## ओपनराउटर API कुंजी प्राप्त करना

ट्रांसरिव्र्ट कई एआई प्रदाताओं का समर्थन करता है। [ओपनराउटर](https://openrouter.ai) एक लोकप्रिय विकल्प है क्योंकि यह एक ही कुंजी के तहत कई मॉडल्स को एकत्रित करता है और निःशुल्क मॉडल प्रदान करता है।

1. [openrouter.ai](https://openrouter.ai) पर साइन अप करें या लॉग इन करें।
2. [Keys](https://openrouter.ai/keys) पृष्ठ खोलें और एक नई कुंजी बनाएँ (नाम दें, और वैकल्पिक रूप से एक श्रेय सीमा सेट करें)। आप श्रेय जोड़े बिना निःशुल्क मॉडल का उपयोग कर सकते हैं।
3. **डेस्कटॉप (इलेक्ट्रॉन):** कुंजियाँ **सेटिंग्स → API** में पेस्ट करें। **डॉकर:** `OPENROUTER_KEY` जैसे वातावरण चर सेट करें (देखें [त्वरित प्रारंभ](#quick-start))।

आप अन्य प्रदाताओं (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) का भी उपयोग कर सकते हैं या [Ollama](https://ollama.com) के साथ स्थानीय रूप से मॉडल चला सकते हैं। समर्थित प्रदाताओं और वातावरण चरों की पूरी सूची के लिए [कॉन्फ़िगरेशन](#configuration-and-environment) देखें।

सीमाओं, BYOK और अधिक जानकारी के लिए, [ओपनराउटर प्रमाणीकरण](https://openrouter.ai/docs/api/reference/authentication) देखें।

<br/><br/>

<a id="configuration-and-environment"></a>
## कॉन्फ़िगरेशन और वातावरण

**कॉन्फ़िगरेशन फ़ाइल के स्थान**

| तैनाती          | कॉन्फ़िगरेशन स्थान                            |
| ---------------- | ------------------------------------------------- |
| इलेक्ट्रॉन (विंडोज़) | `%APPDATA%\transrewrt\`                           |
| इलेक्ट्रॉन (लिनक्स)   | `~/.config/transrewrt/`                           |
| वेब / डॉकर       | `/app/data/config.json` (बनाए रखने के लिए एक वॉल्यूम का उपयोग करें) |

<br/>

**वातावरण चर** (केवल वेब/डॉकर; इलेक्ट्रॉन स्थानीय कॉन्फ़िगरेशन फाइल का उपयोग करता है)

| चर             | डिफ़ॉल्ट               | विवरण |
| --------------- | --------------------- | ----- |
| `PORT`          | `5000`                | सर्वर सुनने वाला पोर्ट |
| `CONFIG_PATH`   | `/app/data/config.json` | कॉन्फ़िगरेशन फाइल का मार्ग |
| `OPENROUTER_KEY`| *(खाली)*               | ओपनराउटर API कुंजी |
| `OPENAI_KEY`    | *(खाली)*               | OpenAI API कुंजी |
| `ANTHROPIC_KEY` | *(खाली)*               | Anthropic API कुंजी |
| `GOOGLE_KEY`    | *(खाली)*               | Google Gemini API कुंजी |
| `DEEPSEEK_KEY`  | *(खाली)*               | DeepSeek API कुंजी |
| `GROQ_KEY`      | *(खाली)*               | Groq API कुंजी |
| `MISTRAL_KEY`   | *(खाली)*               | Mistral API कुंजी |
| `OLLAMA_URL`    | *(खाली)*               | ओलामा बेस URL (उदा. `http://host.docker.internal:11434`) |
| `XAI_KEY`       | *(खाली)*               | xAI API कुंजी |

केवल उन प्रदाताओं को कॉन्फ़िगर करें जिनका आप उपयोग कर रहे हैं। मॉडल आईडी नामस्थानित होते हैं (`openrouter/…`, `openai/…`, `ollama/…`, आदि)।

**लागत प्रदर्शन:** जहाँ लागू होता है, ओपनराउटर सटीक बिल की गई लागत लौटाता है। अन्य प्रदाता ओपनराउटर की सार्वजनिक मॉडल मूल्य नीति से **अनुमानित** लागत का उपयोग करते हैं यदि ओपनराउटर कुंजी उपलब्ध है; यदि नहीं, तो ओपनराउटर नहीं वाली लागत `0` के रूप में दिख सकती है। अनुमान बिल नहीं हैं।

<br/>

**डेटा और प्रतिधारण:** डॉकर के लिए, `/app/data` पर एक वॉल्यूम लगाएं ताकि कॉन्फ़िगरेशन फाइल और SQLite डेटाबेस कंटेनर पुनः आरंभ के बाद भी बना रहे। वॉल्यूम के बिना, कंटेनर बंद होने पर सभी डेटा खो जाएगा।

**डेवलपर्स:** पुराने एकल-कुंजी कॉन्फ़िगरेशन को बदलने वाले परिवर्तनों को पुल करने के बाद, यदि आपकी स्थानीय फाइल अभी भी हटाए गए फ़ील्ड (`api_key`, `api_url`, प्रॉक्सी विकल्प) का उपयोग करती है, तो `data/config.json` को `src/config-defaults/config_default.json` से नए डिफ़ॉल्ट आकृति में रीसेट या मर्ज करें।

<br/>

**वेब प्रमाणीकरण:**

- डिफ़ॉल्ट एडमिन: `admin` / `transrewrt26`।
- **सेटिंग्स → उपयोगकर्ता** में उपयोगकर्ताओं का प्रबंधन करें।
- पासवर्ड रीसेट करना: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (स्रोत से: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **चेतावनी**<br/>
> किसी भी नेटवर्क से जुड़े होस्ट पर डिफ़ॉल्ट एडमिन पासवर्ड तुरंत बदलें।

<br/>

आवश्यक सेटिंग्स (फ़ॉन्ट, मॉडल, भाषाएँ, आदि) एप्लिकेशन सेटिंग्स में उपलब्ध हैं।

<br/><br/>

<a id="development-and-architecture"></a>
## विकास और वास्तुकला

- **विकास:** सेटअप, बनाना, परीक्षण और तैनात करना (इलेक्ट्रॉन, वेब, डॉकर) - देखें **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**।
- **वास्तुकला और सिस्टम अवलोकन:** फ़ोल्डर संरचना, तकनीकी स्टैक, डिज़ाइन निर्णय - देखें **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**।

<br/><br/>

<a id="releases-and-tags"></a>

## संस्करण और टैग

- **गिट टैग** `v`* (उदाहरण के लिए `v1.0.10`) [रिलीज़ वर्कफ़्लो](.github/workflows/release.yml) को ट्रिगर करते हैं। **गिटहब रिलीज़** विंडोज इंस्टॉलर (`.exe`) और लिनक्स ऐपइमेज को संलग्न करते हैं।
- **डॉकर इमेज** को `ghcr.io/wsj-br/transrewrt` पर प्रकाशित किया जाता है। इमेज टैग गिट संस्करण से मेल खाते हैं (उदाहरण के लिए `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) और इसके साथ `latest` भी शामिल है। मल्टी-आर्क: `linux/amd64` और `linux/arm64` (जैसे रास्पबेरी पाई के लिए)।

<br/><br/>

<a id="contributing"></a>
## योगदान देना

1. रिपॉज़िटरी की फोर्क करें।
2. एक फीचर ब्रांच बनाएँ: `git checkout -b feature/my-feature`
3. स्पष्ट संदेश के साथ अपने परिवर्तन प्रतिबद्ध करें।
4. पुश करें और `main` के खिलाफ एक पुल रिक्वेस्ट खोलें।

कृपया सबमिट करने से पहले मौजूदा कोड शैली का पालन करें और इलेक्ट्रॉन तथा वेब मोड दोनों में अपने परिवर्तनों का परीक्षण करें। बिल्ड और टेस्ट निर्देश के लिए [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) देखें।

<br/>

**समस्या रिपोर्ट करना:** [गिटहब](https://github.com/wsj-br/transrewrt/issues) पर एक इश्यू खोलें। अपना प्लेटफ़ॉर्म (विंडोज / लिनक्स / डॉकर) और ऐप संस्करण (एबाउट डायलॉग में या रिलीज़ पृष्ठ पर दिखाया गया) शामिल करें।

<br/><br/>

<a id="disclaimer"></a>
## अस्वीकरण

उत्पाद नाम और आइकन उनके संबंधित मालिकों के स्वामित्व में हैं और केवल पहचान के उद्देश्य के लिए उपयोग किए जाते हैं। यह सॉफ़्टवेयर किसी भी उल्लिखित ब्रांड के साथ संबद्ध या उसके द्वारा समर्थित नहीं है।

<br/><br/>

<a id="license"></a>
## लाइसेंस

कॉपीराइट © 2026 वाल्डेमार स्कुडेलर जूनियर।

[एपाचे लाइसेंस 2.0](LICENSE)