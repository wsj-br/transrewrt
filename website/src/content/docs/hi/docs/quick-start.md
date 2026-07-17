---
title: त्वरित शुरुआत
description: >-
  विंडोज या लिनक्स पर ट्रांसरेवर्ट इंस्टॉल करें, या स्व-होस्टेड डॉकर वेब ऐप
  चलाएं।
translation_last_updated: '2026-07-17T21:14:45.037Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: hi
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



वह मार्ग चुनें जो आपको सूट करता हो। सभी निःशुल्क और ओपन सोर्स (अपाचे 2.0) हैं।

## डॉकर (स्व-होस्टेड वेब)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

अपने चुने हुए प्रदाता से अपनी API कुंजी के साथ `PROVIDER_API_KEY=sk-or-your-key` को बदलें (समर्थित विकल्पों के लिए [कॉन्फ़िगरेशन](/docs/configuration/) देखें)।

फिर [http://localhost:5000](http://localhost:5000) खोलें और सेवा को उजागर करने से पहले **डिफ़ॉल्ट व्यवस्थापक पासवर्ड बदलें**।

:::caution
डॉकर में, LLM क्रेडेंशियल पर्यावरण चर (उदाहरण के लिए `PROVIDER_API_KEY`) के साथ सेट किए जाते हैं। वे वेब UI में **दर्ज नहीं** किए जाते हैं। डेस्कटॉप पर, आप **सेटिंग्स → API** में कुंजियाँ कॉन्फ़िगर करते हैं।
:::

### डॉकर कंपोज

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## विंडोज

1. [रिलीज़](https://github.com/wsj-br/transrewrt/releases) से नवीनतम `Transrewrt Setup x.y.z.exe` डाउनलोड करें।
2. इंस्टॉलर चलाएँ।
3. ऐप खोलें और **सेटिंग्स → एपीआई** में एपीआई कुंजियाँ दर्ज करें। कम से कम एक प्रदाता कॉन्फ़िगर करें; ओपनराउटर मुफ्त मॉडल के लिए एक सामान्य विकल्प है।

:::note
विंडोज अहस्ताक्षरित इंडी ऐप्स के लिए यूएसी या स्मार्टस्क्रीन चेतावनियाँ दिखा सकता है। आधिकारिक गिटहब रिलीज़ पेज से डाउनलोड को प्राथमिकता दें और प्रकाशित होने पर चेकसम सत्यापित करें।
:::

## लिनक्स

[रिलीज़](https://github.com/wsj-br/transrewrt/releases) से अपने सीपीयू के लिए `.AppImage` डाउनलोड करें (`x64` या `arm64`, जिसमें रास्पबेरी पाई 4+ शामिल है):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**सेटिंग्स → एपीआई** में एपीआई कुंजियाँ दर्ज करें।

यदि क्रोमियम जीपीयू / ईजीएल त्रुटियाँ प्रिंट करता है लेकिन ऐप काम करता है, तो आप हार्डवेयर त्वरण को अक्षम कर सकते हैं:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
मैकओएस वर्तमान में समर्थित नहीं है। ट्रांसरेवर्ट विंडोज, लिनक्स और डॉकर के लिए उपलब्ध है।
:::

## अगले कदम

1. [एक एपीआई कुंजी प्राप्त करें](/docs/api-key/)
2. यह पुष्टि करने के लिए एक साधारण अनुवाद चलाएँ कि सब कुछ काम कर रहा है
3. [अनुवाद](/docs/translate/), [पुनर्लेखन](/docs/rewrite/), और [परिवर्तन](/docs/transform/) गाइड पढ़ें
