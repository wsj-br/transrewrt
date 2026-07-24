<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

AI-संचालित टेक्स्ट टूल: अपने स्वयं के AI प्रदाताओं (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI-संगत एंडपॉइंट्स, और स्थानीय OpenAI-संगत सर्वर जैसे Ollama, LM Studio, या llama.cpp) का उपयोग करके कस्टम प्रॉम्प्ट के साथ **अनुवाद करें**, **पुनर्लेखन करें**, और **रूपांतरण करें**। डेस्कटॉप ऐप (Windows / Linux) या स्व-होस्टेड वेब ऐप (Docker)। कोई Transrewrt क्लाउड खाता नहीं।

| | |
| --- | --- |
| **अनुवाद करें** | दर्जनों भाषाएँ, स्वतः-पहचान, शब्दावलियाँ, रीफ़्रेज़ के साथ परिष्कृत करें |
| **पुनर्लेखन करें** | स्पष्टता, टोन, लंबाई, वर्तनी और व्याकरण — एक ही भाषा |
| **रूपांतरण करें** | आपके द्वारा बनाए गए, संपादित किए गए और पुन: उपयोग किए जाने वाले कस्टम AI प्रॉम्प्ट |
| **तैनात करें** | इलेक्ट्रॉन डेस्कटॉप या डॉकर वेब (amd64 और arm64) |
| **कुंजी** | आपके प्रदाता, आपका होस्ट — आसान प्रीसेट या उन्नत मॉडल सूची |

![अनुवाद करें](../images/screenshots/hi/translate.png)

<small>**अन्य भाषाओं में पढ़ें:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## त्वरित शुरुआत

**डॉकर**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

[http://localhost:5000](http://localhost:5000) खोलें और डिफ़ॉल्ट व्यवस्थापक पासवर्ड बदलें। प्रदाता कुंजियाँ पर्यावरण चर (वेब UI नहीं) के माध्यम से सेट की जाती हैं।

**Windows** — [रिलीज़](https://github.com/wsj-br/transrewrt/releases) से `Transrewrt Setup x.y.z.exe` डाउनलोड करें, इंस्टॉल करें, फिर **सेटिंग्स → API** में कुंजियाँ जोड़ें।

**Linux** — [रिलीज़](https://github.com/wsj-br/transrewrt/releases) से `.AppImage` डाउनलोड करें, फिर:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

प्लेटफ़ॉर्म विवरण (Compose, SmartScreen, apt libs, GPU फ़्लैग, टाइमज़ोन): [त्वरित शुरुआत दस्तावेज़](https://wsj-br.github.io/transrewrt/docs/quick-start/)।

## दस्तावेज़

पूर्ण उत्पाद दस्तावेज़ (इंस्टॉल, API कुंजियाँ, गाइड, सेटिंग्स, समस्या निवारण):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [API कुंजी](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [कॉन्फ़िगरेशन](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [अनुवाद करें](https://wsj-br.github.io/transrewrt/docs/translate/) · [पुनर्लेखन करें](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [रूपांतरण करें](https://wsj-br.github.io/transrewrt/docs/transform/)
- [सामान्य समस्याएँ](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## विकास

- सेटअप, बिल्ड, परीक्षण, परिनियोजन: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- आर्किटेक्चर अवलोकन: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## समर्थन

[GitHub](https://github.com/wsj-br/transrewrt/issues) पर एक समस्या खोलें। अपना प्लेटफ़ॉर्म (Windows / Linux / Docker) और ऐप संस्करण (के बारे में संवाद या रिलीज़ पृष्ठ) शामिल करें।

## अभिस्वीकृतियाँ

प्रीसेट एडिटर में आसान-मोड पूर्व-सेट सुझाव सार्वजनिक मूल्यांकन डेटा का उपयोग करते हैं:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [आर्टिफिशियल एनालिसिस](https://artificialanalysis.ai/) (API डेटा के लिए एट्रिब्यूशन आवश्यक है)

तृतीय-पक्ष निर्भरता लाइसेंस और ये डेटा-स्रोत नोटिस [NOTICES](../NOTICES) में सूचीबद्ध हैं।

## लाइसेंस

कॉपीराइट © 2026 वाल्डेमार स्कुडेलर जूनियर।

[Apache License 2.0](../LICENSE)

उत्पाद के नाम और आइकन उनके संबंधित स्वामियों के हैं और उनका उपयोग केवल पहचान के लिए किया जाता है। यह सॉफ़्टवेयर उन ब्रांडों से संबद्ध या उनके द्वारा समर्थित नहीं है।

<small>

> **यूआई और दस्तावेज़ अनुवाद पर ध्यान दें:** मूल अंग्रेज़ी को छोड़कर सभी इंटरफ़ेस और दस्तावेज़ भाषाओं का अनुवाद [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/) का उपयोग करके एआई मॉडल द्वारा किया गया था; शब्दांकन गलत या त्रुटियों वाला हो सकता है।

</small>
