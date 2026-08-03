---
title: त्वरित शुरुआत
description: विंडोज या लिनक्स पर ट्रांसरिवर्ट इंस्टॉल करें, या डॉकर वेब ऐप चलाएं।
---



वह पथ चुनें जो आपके लिए उपयुक्त हो। सभी निःशुल्क और ओपन सोर्स (अपाचे 2.0) हैं।

## डॉकर (वेब ऐप)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

अपने प्रदाता के लिए वेरिएबल के साथ `PROVIDER_API_KEY` को बदलें (उदाहरण के लिए `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) और उसका मान सेट करें। [कॉन्फ़िगरेशन](/docs/configuration/#environment-variables-web--docker) में पूरी सूची देखें।

फिर [http://localhost:5000](http://localhost:5000) खोलें और सेवा को उजागर करने से पहले **डिफ़ॉल्ट व्यवस्थापक पासवर्ड बदलें**।

:::tip
डॉकर में, एलएलएम क्रेडेंशियल पर्यावरण चर (उदाहरण के लिए `PROVIDER_API_KEY`) के साथ सेट किए जाते हैं। उन्हें वेब यूआई में दर्ज **नहीं** किया जाता है। डेस्कटॉप पर, आप **सेटिंग्स → एपीआई कॉन्फ़िग** में कुंजियाँ कॉन्फ़िगर करते हैं।
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
3. ऐप खोलें और **सेटिंग्स → एपीआई कॉन्फ़िग** में एपीआई कुंजियाँ दर्ज करें। कम से कम एक प्रदाता कॉन्फ़िगर करें; ओपनराउटर मुफ्त मॉडल के लिए एक सामान्य विकल्प है।

:::note
ऐप इंस्टॉल करते समय विंडोज यूएसी या स्मार्टस्क्रीन चेतावनियाँ दिखा सकता है। यदि आप इसे आधिकारिक गिटहब रिलीज़ पेज से डाउनलोड करते हैं तो इसे इंस्टॉल करना सुरक्षित है। इंस्टॉल करने के लिए "अधिक जानकारी" और "फिर भी चलाएँ" पर क्लिक करें।
:::

## लिनक्स

[रिलीज़](https://github.com/wsj-br/transrewrt/releases) से अपने सीपीयू के लिए `.AppImage` डाउनलोड करें (`x64` या `arm64`, जिसमें रास्पबेरी पाई 4+ शामिल है):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**सेटिंग्स → एपीआई कॉन्फ़िग** में एपीआई कुंजियाँ दर्ज करें।

यदि क्रोमियम जीपीयू / ईजीएल त्रुटियाँ प्रिंट करता है लेकिन ऐप काम करता है, तो आप हार्डवेयर त्वरण को अक्षम कर सकते हैं:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS वर्तमान में समर्थित नहीं है। ट्रांसरेवर्ट विंडोज, लिनक्स और डॉकर के लिए उपलब्ध है।
:::

## अपडेट करना

- **विंडोज** — [रिलीज़](https://github.com/wsj-br/transrewrt/releases) से नया `Transrewrt Setup x.y.z.exe` डाउनलोड करें और इसे चलाएँ। सेटिंग्स और डेटा रखे जाते हैं।
- **लिनक्स** — नया `.AppImage` डाउनलोड करें और पुरानी फ़ाइल को बदलें। सेटिंग्स और डेटा रखे जाते हैं।
- **डॉकर** — नई इमेज खींचें और कंटेनर को फिर से बनाएँ। डेटा `/app/data` वॉल्यूम में बना रहता है:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## अगले चरण

1. [एक एपीआई कुंजी प्राप्त करें](/docs/api-key/)
2. सब कुछ काम कर रहा है यह पुष्टि करने के लिए एक साधारण अनुवाद चलाएँ
3. [अनुवाद](/docs/translate/), [पुनर्लेखन](/docs/rewrite/), और [परिवर्तन](/docs/transform/) मार्गदर्शिकाएँ पढ़ें
