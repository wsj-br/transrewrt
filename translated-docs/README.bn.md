---
translated_at: "2026-03-24T00:56:05.814Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt লোগো" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="সংস্করণ"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="লাইসেন্স: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="প্ল্যাটফর্ম">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI চালিত টেক্সট টুল: ভাষাগুলির মধ্যে অনুবাদ করুন, বিভিন্ন ধরনে পুনরায় লিখুন এবং কাস্টম প্রম্পটগুলি ব্যবহার করে রূপান্তর করুন — একাধিক AI প্রদানকারী (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI এবং স্থানীয় Ollama) ব্যবহার করে। এটি ডেস্কটপ অ্যাপ (Electron) বা স্ব-হোস্টেড ওয়েব অ্যাপ (Docker) হিসাবে চলে।

- **অনুবাদ** — ডজন খানেক ভাষার মধ্যে, স্বয়ংক্রিয় উৎস সনাক্তকরণ সহ
- **পুনরায় লেখা** — ব্যাকরণ ঠিক করুন, স্পষ্টতা উন্নত করুন, আনুষ্ঠানিক/অনানুষ্ঠানিক, সংক্ষিপ্ত, প্রসারিত, প্রযুক্তিগত করুন
- **রূপান্তর** — কাস্টম AI প্রম্পট; প্রম্পট তৈরি এবং পরিচালনা করুন, প্রম্পট অনুযায়ী ঐচ্ছিক লক্ষ্য ভাষা
- **ইতিহাস** — ইনপুট/আউটপুট টেক্সট সহ পূর্ণ কার্যকরী ইতিহাস, ফিল্টারিং এবং রপ্তানি করুন
- **মডেল এবং খরচ** — যে কোনো কনফিগার করা প্রদানকারী থেকে মডেল নির্বাচন করুন; SQLite লগ সহ খরচ ড্যাশবোর্ড, মডেল/অপারেশন/দিন অনুযায়ী সংক্ষিপ্ত বিবরণ
- **ইউআই** — বহুভাষিক ইন্টারফেস (৩০+ ভাষা, RTL সমর্থন), ফন্ট, ...
- **ওয়েব মোড** — প্রশাসক ভূমিকা সহ বহু-ব্যবহারকারী সমর্থন; API কি সার্ভার-সাইডে থাকবে, ব্রাউজারে কখনোই উন্মুক্ত হবে না
- **ডেস্কটপ** — Windows এবং Linux এর জন্য Electron অ্যাপ
- **স্ব-হোস্টেড** — amd64 & arm64 (Raspberry Pi-র জন্য প্রস্তুত) এর জন্য Docker ইমেজ

ইনস্টল করার পর, সমস্ত বৈশিষ্ট্যের জন্য সম্পূর্ণ ব্যাখ্যা জানতে **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন।

<small>**অন্যান্য ভাষায় পড়ুন:** [English (UK)](README.bn.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**UI এবং নথিপত্র অনুবাদ সম্পর্কে নোট:** ইংরেজি (UK) বাদে সমস্ত ইন্টারফেস ভাষা AI মডেল ব্যবহার করে অনুবাদ করা হয়েছে; এতে বক্তব্য অস্পষ্ট হতে পারে অথবা কিছু ভুল থাকতে পারে।

<a id="screenshots"></a>
## স্ক্রিনশট

**ভাষা নির্বাচক**

![ভাষা নির্বাচক](../images/screenshots/bn/language-selector.png)

**অনুবাদ**

![অনুবাদ](../images/screenshots/bn/translate.png)

**রূপান্তর - প্রম্পট সম্পাদক**

![রূপান্তর - প্রম্পট সম্পাদক](../images/screenshots/bn/transform-prompt-edit.png)

**ড্যাশবোর্ড**

![খরচ ড্যাশবোর্ড](../images/screenshots/bn/dashboard-summary.png)

**ইতিহাস**

![ইতিহাস](../images/screenshots/bn/history.png)

**সেটিংস - মডেল নির্বাচন**

![সেটিংস - মডেল নির্বাচন](../images/screenshots/bn/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## সূচিপত্র

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
- [দ্রুত শুরু](#quick-start)
- [ইনস্টলেশন](#installation)
  - [উইন্ডোজ (ইলেকট্রন)](#windows-electron)
  - [লিনাক্স (ইলেকট্রন)](#linux-electron)
  - [ডকার](#docker)
- [ওপেনরাউটার API কী পাওয়া](#getting-an-openrouter-api-key)
- [কনফিগারেশন এবং পরিবেশ](#configuration-and-environment)
- [ডেভেলপমেন্ট এবং আর্কিটেকচার](#development-and-architecture)
- [রিলিজ এবং ট্যাগ](#releases-and-tags)
- [অবদান](#contributing)
- [ডিসক্লেইমার](#disclaimer)
- [লাইসেন্স](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## দ্রুত শুরু

**ডকার (সেলফ-হোস্টিংয়ের জন্য প্রস্তাবিত)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key`-কে আপনার [OpenRouter API কী](https://openrouter.ai/keys)-এর সাথে প্রতিস্থাপন করুন (বা অন্যান্য প্রদানকারীর কী সেট করুন; দেখুন [কনফিগারেশন](#configuration-and-environment))। [http://localhost:5000](http://localhost:5000) খুলুন এবং পরিষেবাটি প্রকাশ করার আগে ডিফল্ট এডমিন পাসওয়ার্ড পরিবর্তন করুন।

<br/>

> ℹ️ **নোট**<br/>
> ডকারে, LLM ক্রেডেনশিয়ালগুলি `OPENROUTER_KEY`, `OPENAI_KEY`, … ইত্যাদি পরিবেশ ভেরিয়েবলগুলির মাধ্যমে সেট করা হয় (ওয়েব UI-এ নয়)। ডেস্কটপে (ইলেকট্রন) আপনি **সেটিংস → API**-এ কী কনফিগার করুন।

<br/>

**উইন্ডোজ**

[রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে সর্বশেষ `Transrewrt Setup x.y.z.exe` ডাউনলোড করুন, ইনস্টলার চালান, তারপর স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে চালু করুন। আপনার API কীগুলি **সেটিংস → API**-এ প্রবেশ করান। আপনার অন্তত একটি প্রদানকারী কনফিগার করা দরকার, ফ্রি মডেলের জন্য OpenRouter সাধারণ।

<br/>

**লিনাক্স**

[রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে `.AppImage` ডাউনলোড করুন, তারপর:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

আপনার API কীগুলি **সেটিংস → API**-এ প্রবেশ করান। আপনার অন্তত একটি প্রদানকারী কনফিগার করা প্রয়োজন, ফ্রি মডেলের জন্য OpenRouter সাধারণ।

ডেবিয়ান/উবুন্টুতে, আপনার প্রথমে অতিরিক্ত নির্ভরশীলতা ইনস্টল করা প্রয়োজন হতে পারে:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

বিস্তারিত জানার জন্য [ইনস্টলেশন → লিনাক্স](#linux-electron) দেখুন।

<br/>

> ℹ️ **নোট**<br/>
> ম্যাকওএস এখনও সমর্থিত নয়। ট্রান্সরিওয়ার্ট উইন্ডোজ, লিনাক্স এবং ডকারের জন্য উপলব্ধ।

<br/>

অ্যাপটি চালু হওয়ার পরে, **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন যাতে পাঠ্য অনুবাদ করা, পুনরায় লেখা, রূপান্তর করা, প্রম্পট পরিচালনা এবং মডেল কনফিগার করা শিখতে পারেন।

<br/><br/>

<a id="installation"></a>
## ইনস্টলেশন

<a id="windows-electron"></a>
### উইন্ডোজ (ইলেকট্রন)

- [রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে সর্বশেষ ইনস্টলার ডাউনলোড করুন।
- `.exe` ফাইলটি চালান এবং ইনস্টলার অনুসরণ করুন।
- প্রথম চালানোর সময়: স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে অ্যাপ চালু করুন।

<br/>

<a id="linux-electron"></a>
### লিনাক্স (ইলেকট্রন)

- [রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে `.AppImage` ডাউনলোড করুন।
- চালান: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- অতিরিক্ত নির্ভরশীলতা (ডেবিয়ান/উবুন্টু): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) দেখুন আরও জানার জন্য।

<br/>

<a id="docker"></a>
### ডকার

- পুল করুন: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- পরিবেশের মাধ্যমে অন্তত একটি প্রদানকারী কী সেট করুন (উদাহরণস্বরূপ OpenRouter-এর জন্য `OPENROUTER_KEY`)। গোপনীয়তা যেন ইমেজের মধ্যে আটকানো না হয়, সেজন্য `-e` বা `docker compose` / `.env` ব্যবহার করে ভেরিয়েবলগুলি পাস করুন।
- প্রদানকারী কীগুলি ওয়েব UI-তে প্রবেশ করানো হয় না; সার্ভার পরিবেশ থেকে এগুলি পড়ে।

উদাহরণ - স্থায়িত্বের জন্য নামযুক্ত ভলিউম (env-এর মাধ্যমে OpenRouter কী):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| অপশন   | বিবরণ                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| পোর্ট     | `5000` (ম্যাপ করুন `-p 5000:5000` এর সাথে)                                                                              |
| ভলিউম   | কনফিগ এবং ডাটাবেস স্থায়িত্বের জন্য `/app/data` মাউন্ট করুন                                                         |
| পরিবেশ ভেরিয়েবল | `PORT`, `CONFIG_PATH`, পাশাপাশি LLM কী (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - দেখুন [কনফিগারেশন](#configuration-and-environment) |

সোর্স থেকে বিল্ড ও রান করতে: `docker compose up --build -d` বা `pnpm docker:up` - দেখুন [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## একটি ওপেনরাউটার API কী পাওয়া

ট্রান্সরিওয়ার্ট একাধিক এআই প্রদানকারীর সাপোর্ট করে। [ওপেনরাউটার](https://openrouter.ai) একটি জনপ্রিয় পছন্দ কারণ এটি একটি মূল কীয়ের নিচে অনেকগুলি মডেলকে একত্রিত করে এবং বিনামূল্যে মডেল প্রদান করে।

1. [openrouter.ai](https://openrouter.ai)-এ সাইন আপ করুন বা লগ ইন করুন।
2. [Keys](https://openrouter.ai/keys) পৃষ্ঠাটি খুলুন এবং একটি নতুন কী তৈরি করুন (এটি নাম দিন, এবং ঐচ্ছিকভাবে একটি ক্রেডিট লিমিট সেট করুন)। আপনি বিনামূল্যের মডেল ব্যবহার করতে পারেন ক্রেডিট না যোগ করেই।
3. **ডেস্কটপ (ইলেকট্রন):** **সেটিংস → API**-এ কীগুলি পেস্ট করুন। **ডকার:** পরিবেশ চলকগুলি যেমন `OPENROUTER_KEY` সেট করুন (দেখুন [দ্রুত শুরু](#quick-start))।

আপনি অন্যান্য প্রদানকারীদেরও (ওপেনএআই, অ্যানথ্রোপিক, গুগল জেমিনি, ডিপসীক, গ্রক, মিস্ট্রাল, এক্সএআই) ব্যবহার করতে পারেন অথবা [ওলামা](https://ollama.com)-এর সাহায্যে স্থানীয়ভাবে মডেল চালাতে পারেন। সাপোর্টেড প্রদানকারী এবং পরিবেশ চলকগুলির পূর্ণ তালিকার জন্য [কনফিগারেশন](#configuration-and-environment) দেখুন।

সীমাবদ্ধতা, বিআইওকে, এবং আরও তথ্যের জন্য দেখুন [ওপেনরাউটার প্রমাণীকরণ](https://openrouter.ai/docs/api/reference/authentication)।

<br/><br/>

<a id="configuration-and-environment"></a>
## কনফিগারেশন এবং পরিবেশ

**কনফিগ ফাইলের অবস্থান**

| ডেপ্লয়মেন্ট         | কনফিগ অবস্থান                                    |
| ------------------ | ------------------------------------------------- |
| ইলেকট্রন (উইন্ডোজ) | `%APPDATA%\transrewrt\`                           |
| ইলেকট্রন (লিনাক্স)   | `~/.config/transrewrt/`                           |
| ওয়েব / ডকার       | `/app/data/config.json` (স্থায়ী রাখতে ভলিউম ব্যবহার করুন) |

<br/>

**পরিবেশ চলক** (শুধুমাত্র ওয়েব/ডকারের জন্য; ইলেকট্রন স্থানীয় কনফিগ ফাইল ব্যবহার করে)

| চলক         | ডিফল্ট                 | বিবরণ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | সার্ভার শোনার পোর্ট |
| `CONFIG_PATH`    | `/app/data/config.json` | কনফিগ ফাইলের পথ |
| `OPENROUTER_KEY` | *(খালি)*               | ওপেনরাউটার API কী |
| `OPENAI_KEY`     | *(খালি)*               | ওপেনএআই API কী |
| `ANTHROPIC_KEY`  | *(খালি)*               | অ্যানথ্রোপিক API কী |
| `GOOGLE_KEY`     | *(খালি)*               | গুগল জেমিনি API কী |
| `DEEPSEEK_KEY`   | *(খালি)*               | ডিপসীক API কী |
| `GROQ_KEY`       | *(খালি)*               | গ্রক API কী |
| `MISTRAL_KEY`    | *(খালি)*               | মিস্ট্রাল API কী |
| `OLLAMA_URL`     | *(খালি)*               | ওলামা বেস URL (যেমন `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(খালি)*               | এক্সএআই API কী |

শুধুমাত্র আপনি যে প্রদানকারীদের ব্যবহার করেন তাদের কনফিগার করুন। মডেল আইডি নেমস্পেস করা হয়েছে (`openrouter/...`, `openai/...`, `ollama/...`, ইত্যাদি)।

**খরচ প্রদর্শন:** ওপেনরাউটার প্রযোজ্য ক্ষেত্রে বিল হওয়া নির্ভুল খরচ ফেরত দেয়। প্রদানকারীদের অন্যান্যরা তখন ওপেনরাউটার কী উপলব্ধ থাকলে ওপেনরাউটারের পাবলিক মডেল মূল্য থেকে **আনুমানিক** খরচ ব্যবহার করে; তা না হলে, ওপেনরাউটার না হওয়া খরচ `0` হিসাবে দেখানো হতে পারে। আনুমানিকগুলি ইনভয়েস নয়।

<br/>

**ডেটা এবং স্থায়িত্ব:** ডকারের জন্য, `/app/data`-এ একটি ভলিউম মাউন্ট করুন যাতে `config.json` এবং SQLite ডাটাবেস কনটেইনার পুনঃচালু করার সময় স্থায়ী থাকে। ভলিউম ছাড়া, কনটেইনার বন্ধ হওয়ার সাথে সাথে সমস্ত ডেটা হারিয়ে যাবে।

**ডেভেলপার বাহিনী:** পুরানো একক-কী কনফিগকে প্রতিস্থাপন করা পরিবর্তনগুলি টানার পর, `data/config.json` ফাইলটি `src/config-defaults/config_default.json`-এর নতুন ডিফল্ট আকারের সাথে রিসেট বা একত্রিত করুন যদি আপনার স্থানীয় ফাইলটি এখনও সরিয়ে নেওয়া ফিল্ডগুলি (`api_key`, `api_url`, প্রক্সি বিকল্প) ব্যবহার করে।

<br/>

**ওয়েব প্রমাণীকরণ:**

- ডিফল্ট অ্যাডমিন: `admin` / `transrewrt26`।
- **সেটিংস → ব্যবহারকারীদের** মধ্যে ব্যবহারকারীদের পরিচালনা করুন।
- পাসওয়ার্ড রিসেট করুন: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (উৎস থেকে: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **সতর্কতা**<br/>
> যেকোনো নেটওয়ার্ক-প্রবেশযোগ্য হোস্টে দ্রুততম পদ্ধতিতে ডিফল্ট অ্যাডমিন পাসওয়ার্ডটি পরিবর্তন করুন।

<br/>

কী-সেটিংস (ফন্ট, মডেল, ভাষা ইত্যাদি) অ্যাপ্লিকেশন সেটিংসে উপলব্ধ।

<br/><br/>

<a id="development-and-architecture"></a>
## ডেভেলপমেন্ট এবং আর্কিটেকচার

- **ডেভেলপমেন্ট:** সেটআপ, বিল্ড, টেস্ট এবং ডেপ্লয় করুন (ইলেকট্রন, ওয়েব, ডকার) - দেখুন **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**।
- **আর্কিটেকচার এবং সিস্টেম ওভারভিউ:** ফোল্ডার কাঠামো, টেক স্ট্যাক, ডিজাইন সিদ্ধান্ত - দেখুন **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**।

<br/><br/>

<a id="releases-and-tags"></a>

## রিলিজ এবং ট্যাগ

- **গিট ট্যাগ** `v`* (যেমন `v1.0.10`) [রিলিজ ওয়ার্কফ্লো](.github/workflows/release.yml) চালু করে। **গিটহাব রিলিজ** উইন্ডোজ ইনস্টলার (`.exe`) এবং লিনাক্স অ্যাপইমেজ সংযুক্ত করে।
- **ডকার ইমেজ** `ghcr.io/wsj-br/transrewrt`-এ প্রকাশিত হয়। ইমেজ ট্যাগগুলি গিট সংস্করণের সাথে মিলে যায় (যেমন `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) এবং `latest` ট্যাগও থাকে। মাল্টি-আর্ক: `linux/amd64` এবং `linux/arm64` (যেমন রাস্পবেরি পাই)।

<br/><br/>

<a id="contributing"></a>
## অবদান রাখা

1. রিপোজিটোরি ফোর্ক করুন।
2. একটি ফিচার ব্রাঞ্চ তৈরি করুন: `git checkout -b feature/my-feature`
3. স্পষ্ট বার্তাসহ আপনার পরিবর্তনগুলি কমিট করুন।
4. পুশ করুন এবং `main`-এর বিরুদ্ধে একটি পুল রিকোয়েস্ট খুলুন।

দয়া করে জমা দেওয়ার আগে বিদ্যমান কোড স্টাইল অনুসরণ করুন এবং ইলেকট্রন ও ওয়েব উভয় মোডেই আপনার পরিবর্তনগুলি পরীক্ষা করুন। বিল্ড ও পরীক্ষা নির্দেশনার জন্য [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) দেখুন।

<br/>

**সমস্যা রিপোর্ট করা:** [গিটহাব](https://github.com/wsj-br/transrewrt/issues)-এ একটি ইস্যু খুলুন। আপনার প্ল্যাটফর্ম (উইন্ডোজ / লিনাক্স / ডকার) এবং অ্যাপ সংস্করণ (সম্পর্কে ডায়ালগ বা রিলিজ পৃষ্ঠায় প্রদর্শিত) অন্তর্ভুক্ত করুন।

<br/><br/>

<a id="disclaimer"></a>
## ডিসক্লেইমার

পণ্যের নাম এবং আইকনগুলি তাদের সংশ্লিষ্ট মালিকদের সম্পত্তি এবং শুধুমাত্র চেনাশোনার উদ্দেশ্যে ব্যবহৃত হয়। এই সফটওয়্যারটি উল্লিখিত ব্র্যান্ডগুলির সাথে কোনো সম্পর্কিত বা তাদের অনুমোদিত নয়।

<br/><br/>

<a id="license"></a>
## লাইসেন্স

কপিরাইট © 2026 ওয়ালডেমার স্কুডেলার জুনিয়র।

[অ্যাপাচি লাইসেন্স 2.0](LICENSE)