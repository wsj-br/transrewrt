---
translated_at: "2026-03-26T00:10:08.086Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt লোগো" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="সংস্করণ"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="লাইসেন্স: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="প্ল্যাটফর্ম">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

এআই-চালিত পাঠ্য টুল: বিভিন্ন ভাষা থেকে ভাষান্তর, বিভিন্ন ধরনের কায়দায় পুনঃলেখন এবং প্রয়োগযোগ্য কাস্টম টিপস দিয়ে রূপান্তর করুন — একাধিক এআই প্রদানকারী ব্যবহার করে (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI এবং স্থানীয় Ollama). একটি ডেস্কটপ অ্যাপ (Electron) বা স্ব-হোস্টেড ওয়েব অ্যাপ (ডকার) হিসাবে চলবে।

- **ভাষান্তর** — ডজন খানেক ভাষায়, স্বয়ংক্রিয় উৎস সনাক্তকরণ সহ
- **পুনঃলেখন** — ব্যাকরণ ঠিক করুন, পরিষ্কারতা বাড়ান, আনুষ্ঠানিক/অনানুষ্ঠানিক, সংক্ষিপ্তকরণ, প্রসারিত করুন, প্রযুক্তিগত
- **রূপান্তর** — কাস্টম এআই হিন্টস; হিন্টস তৈরি করুন এবং পরিচালনা করুন, নির্দিষ্ট প্রতিটি হিন্টের জন্য লক্ষ্য ভাষা ঐচ্ছিক
- **ইতিহাস** — ইনপুট/আউটপুট পাঠ্য, ফিল্টারিং এবং রপ্তানির সাথে পূর্ণ নির্বাহ ইতিহাস
- **মডেল এবং খরচ** — যেকোনো কনফিগার করা প্রদানকারী থেকে মডেল নির্বাচন করুন; লগ, মডেল/অপারেশন/দিন অনুযায়ী সারাংশ সহ খরচ এবং ব্যবহারের ড্যাশবোর্ড
- **ইউআই** — বহুভাষিক ইন্টারফেস (30+ ভাষা, RTL সহায়তা), ফন্ট, ...
- **ওয়েব মোড** — অ্যাডমিন ভূমিকা সহ একাধিক ব্যবহারকারীর জন্য সমর্থন
- **ডেস্কটপ** — উইন্ডোজ এবং লিনাক্সের জন্য Electron অ্যাপ
- **স্ব-হোস্টেড** — amd64 & arm64 (Raspberry Pi-প্রস্তুত) এর জন্য ডকার ইমেজ

ইনস্টল করার পরে, সমস্ত বৈশিষ্ট্যগুলির সম্পূর্ণ বিবরণের জন্য **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন।

<small>**অন্য ভাষায় পড়ুন:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI এবং নথি অনুবাদ সম্পর্কে নোট:** আসল ইংরেজি (যুক্তরাজ্য) ছাড়া এই ইন্টারফেসের সমস্ত ভাষা
> এআই মডেল ব্যবহার করে অনুবাদ করা হয়েছে; ভাষার ব্যবহার অস্পষ্ট হতে পারে বা ভুল থাকতে পারে।

</small>

<br/>

<a id="screenshots"></a>
## স্ক্রিনশট

**ভাষা নির্বাচক**

![ভাষা নির্বাচক](../images/screenshots/bn/language-selector.png)

**ভাষান্তর**

![ভাষান্তর](../images/screenshots/bn/translate.png)

**রূপান্তর - হিন্ট এডিটর**

![রূপান্তর - হিন্ট এডিটর](../images/screenshots/bn/transform-prompt-edit.png)

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
- [একটি ওপেনরাউটার API কী পাওয়া](#getting-an-openrouter-api-key)
- [কনফিগারেশন এবং পরিবেশ](#configuration-and-environment)
- [ডেভেলপমেন্ট এবং স্থাপত্য](#development-and-architecture)
- [রিলিজ এবং ট্যাগ](#releases-and-tags)
- [অবদান](#contributing)
- [দাবি অস্বীকার](#disclaimer)
- [লাইসেন্স](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## দ্রুত শুরু

**ডকার (সেলফ-হোস্টিংয়ের জন্য সুপারিশকৃত)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key`-এর জায়গায় আপনার [OpenRouter API কী](https://openrouter.ai/keys) ব্যবহার করুন (অথবা অন্য প্রদানকারীর কী সেট করুন; [কনফিগারেশন](#configuration-and-environment) দেখুন)। [http://localhost:5000](http://localhost:5000) খুলুন এবং সার্ভিস প্রকাশ করার আগে পূর্বনির্ধারিত অ্যাডমিন পাসওয়ার্ড পরিবর্তন করুন।

<br/>

> ℹ️ **নোট**<br/>
> ডকারে, LLM ক্রেডেনশিয়ালগুলি `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, …-এর মতো পরিবেশ ভেরিয়েবল ব্যবহার করে সেট করা হয় (ওয়েব UI-এ নয়)। ডেস্কটপে (ইলেকট্রন), আপনি **সেটিংস → API**-এ কী কনফিগার করবেন। কমপক্ষে একটি প্রদানকারী কনফিগার করা প্রয়োজন; বিনামূল্যের মডেলগুলির জন্য OpenRouter সাধারণত ব্যবহৃত হয়।

<br/>

**উইন্ডোজ**

[Releases](https://github.com/wsj-br/transrewrt/releases) থেকে সর্বশেষ `Transrewrt Setup x.y.z.exe` ডাউনলোড করুন, ইনস্টলার চালান, তারপর স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে লঞ্চ করুন। **Settings → API**-এ আপনার API কী প্রবেশ করান। কমপক্ষে একটি প্রদানকারী কনফিগার করা প্রয়োজন; বিনামূল্যের মডেলগুলির জন্য OpenRouter সাধারণত ব্যবহৃত হয়।

<br/>

**লিনাক্স**

[Releases](https://github.com/wsj-br/transrewrt/releases) থেকে আপনার CPU-এর জন্য উপযুক্ত `.AppImage` ডাউনলোড করুন (`x64` সাধারণ পিসির জন্য, `arm64` অনেক ARM ডিভাইসের জন্য, রাস্পবেরি পাই 4+ সহ), তারপর:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**Settings → API**-এ আপনার API কী প্রবেশ করান। কমপক্ষে একটি প্রদানকারী কনফিগার করা প্রয়োজন; বিনামূল্যের মডেলগুলির জন্য OpenRouter সাধারণত ব্যবহৃত হয়।

ডেবিয়ান/উবুন্টুতে আপনাকে প্রথমে অতিরিক্ত ডিপেন্ডেন্সি ইনস্টল করতে হতে পারে:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

বিস্তারিত জানতে [ইনস্টলেশন → লিনাক্স](#linux-electron) দেখুন।

<br/>

> ℹ️ **নোট**<br/>
> বর্তমানে ম্যাকওএস সমর্থিত নয়। উইন্ডোজ, লিনাক্স এবং ডকারের জন্য Transrewrt উপলব্ধ।

<br/>

অ্যাপ চালু হয়ে গেলে, **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন যাতে আপনি টেক্সট অনুবাদ, পুনঃলেখা এবং রূপান্তর করা, অনুরোধগুলি পরিচালনা করা এবং মডেল কনফিগার করা সম্পর্কে শিখতে পারেন।

<br/><br/>

<a id="installation"></a>
## ইনস্টলেশন

<a id="windows-electron"></a>
### উইন্ডোজ (ইলেকট্রন)

- [Releases](https://github.com/wsj-br/transrewrt/releases) থেকে সর্বশেষ ইনস্টলার ডাউনলোড করুন।
- `.exe` চালান এবং ইনস্টলার অনুসরণ করুন।
- প্রথম বার চালানোর সময়: স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে অ্যাপ শুরু করুন।

<br/>

<a id="linux-electron"></a>
### লিনাক্স (ইলেকট্রন)

- [Releases](https://github.com/wsj-br/transrewrt/releases) থেকে মিলে যাওয়া `.AppImage` (`x64` বা `arm64`) ডাউনলোড করুন।
- চালান: x86_64/amd64-এ `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`, অথবা ARM64-এ `...-arm64.AppImage` ফাইলনাম ব্যবহার করুন।
- অতিরিক্ত ডিপেন্ডেন্সি (ডেবিয়ান/উবুন্টু): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- আরও জানতে [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) দেখুন।

<br/>

<a id="docker"></a>
### ডকার

- পুল করুন: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- পরিবেশের মাধ্যমে কমপক্ষে একটি প্রদানকারী কী সেট করুন (উদাহরণস্বরূপ OpenRouter-এর জন্য `OPENROUTER_API_KEY`)। গোপন কীগুলি ইমেজে জমাট বাঁধার আগে `-e` বা `docker compose` / `.env` এর মাধ্যমে ভেরিয়েবলগুলি পাস করুন।
- প্রদানকারীর কীগুলি ওয়েব UI-এ প্রবেশ করানো **হয় না**; সার্ভারটি পরিবেশ থেকে সেগুলি পড়ে।

উদাহরণ - ধারাবাহিকতার জন্য নামযুক্ত ভলিউম (env এর মাধ্যমে OpenRouter কী):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| বিকল্প   | বিবরণ                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| পোর্ট     | `5000` ( `-p 5000:5000` ব্যবহার করে ম্যাপ করুন)                                                                              |
| ভলিউম   | কনফিগ এবং ডাটাবেস ধারাবাহিকতার জন্য `/app/data` মাউন্ট করুন                                                         |
| পরিবেশ ভেরিয়েবল | `PORT`, `CONFIG_PATH`, পাশাপাশি LLM কী (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - [কনফিগারেশন](#configuration-and-environment) দেখুন |

সোর্স থেকে তৈরি করে চালানোর জন্য: `docker compose up --build -d` বা `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) দেখুন।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## একটি ওপেনরাউটার API কী পাওয়া

ট্রান্সরিওয়ার্ট বহু এআই সরবরাহকারীকে সমর্থন করে। [ওপেনরাউটার](https://openrouter.ai) একটি জনপ্রিয় পছন্দ কারণ এটি একটি একক কীয়ের মাধ্যমে অসংখ্য মডেলকে একত্রিত করে এবং বিনামূল্যে মডেল সরবরাহ করে।

1. [openrouter.ai](https://openrouter.ai-এ সাইন আপ করুন অথবা লগ ইন করুন।
2. [Keys](https://openrouter.ai/keys) পৃষ্ঠাটি খুলুন এবং একটি নতুন কী তৈরি করুন (এটিকে নাম দিন, এবং ঐচ্ছিকভাবে একটি ক্রেডিট সীমা নির্ধারণ করুন)। আপনি ক্রেডিট যোগ না করেই বিনামূল্যে মডেল ব্যবহার করতে পারেন।
3. **ডেস্কটপ (ইলেকট্রন):** কীগুলি **Settings → API**-এ পেস্ট করুন। **ডকার:** `OPENROUTER_API_KEY` এর মতো এনভি ভেরিয়েবল সেট করুন (দেখুন [দ্রুত শুরু](#quick-start))।

অনুবাদ, পুনঃলেখন বা রূপান্তরের জন্য ওপেনরাউটারের **বডি বিল্ডার** মডেল ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ব্যবহার করবেন না: এটি সম্পূর্ণ টেক্সট না দিয়ে জেসন অনুরোধ পেলোড প্রদান করে। ব্যবহারকারী গাইডে [Settings → Models](USER-GUIDE.bn.md#models) দেখুন।

আপনি অন্যান্য প্রদানকারীও ব্যবহার করতে পারেন (ওপেনএআই, অ্যানথ্রোপিক, গুগল জেমিনি, ডিপসিক, গ্রক, মিস্ট্রাল, এক্সএআই, সেরেব্রাস) অথবা [ওলামা](https://ollama.com)-র মাধ্যমে স্থানীয়ভাবে মডেল চালাতে পারেন। সমর্থিত প্রদানকারী ও এনভিরনমেন্ট ভেরিয়েবলগুলির সম্পূর্ণ তালিকার জন্য [কনফিগারেশন](#configuration-and-environment) দেখুন।

> ⚠️ **সতর্কতা**<br/>
> আপনি যদি অন্য ডিভাইস, কনটেইনার বা পরিষেবা থেকে ওলামা ব্যবহার করেন, তাহলে ওলামাকে লোকালহোস্ট-শুধুমাত্র না হয়ে বাহ্যিক সংযোগের জন্য সক্ষম করার জন্য কনফিগার করতে ভুলবেন না।

<br/><br/>

<a id="configuration-and-environment"></a>
## কনফিগারেশন ও এনভিরনমেন্ট

**কনফিগ ফাইলের অবস্থান**

| ডেপ্লয়মেন্ট         | কনফিগের অবস্থান                                   |
| ------------------ | ------------------------------------------------- |
| ইলেকট্রন (উইন্ডোজ) | `%APPDATA%\transrewrt\`                           |
| ইলেকট্রন (লিনাক্স)   | `~/.config/transrewrt/`                           |
| ওয়েব / ডকার       | `/app/data/config.json` (স্থায়ী রাখার জন্য একটি ভলিউম ব্যবহার করুন) |

<br/>

**পরিবেশগত চলক** (শুধুমাত্র ওয়েব/ডকার; ইলেকট্রন স্থানীয় কনফিগ ফাইল ব্যবহার করে)

| চলক         | পূর্বনির্ধারিত                 | বিবরণ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | সার্ভারের শুনছে পোর্ট |
| `CONFIG_PATH`    | `/app/data/config.json` | কনফিগ ফাইলটির পাথ |
| `OPENROUTER_API_KEY` | *(খালি)*               | ওপেনরাউটার এপিআই কী |
| `OPENAI_API_KEY`     | *(খালি)*               | ওপেনএআই এপিআই কী |
| `CEREBRAS_API_KEY`   | *(খালি)*               | সেরেব্রাস এপিআই কী |
| `ANTHROPIC_API_KEY`  | *(খালি)*               | অ্যানথ্রোপিক এপিআই কী |
| `GOOGLE_API_KEY`     | *(খালি)*               | গুগল জেমিনি এপিআই কী |
| `DEEPSEEK_API_KEY`   | *(খালি)*               | ডিপসিক এপিআই কী |
| `GROQ_API_KEY`       | *(খালি)*               | গ্রক এপিআই কী |
| `MISTRAL_API_KEY`    | *(খালি)*               | মিস্ট্রাল এপিআই কী |
| `OLLAMA_URL`     | *(খালি)*               | ওলামার বেজ ইউআরএল (যেমন `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(খালি)*               | এক্সএআই এপিআই কী |

শুধুমাত্র আপনি যে প্রদানকারীদের ব্যবহার করেন তাদের কনফিগার করুন। মডেল আইডি নেমস্পেস করা হয় (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ইত্যাদি)।

**খরচ প্রদর্শন:** প্রযোজ্য ক্ষেত্রে ওপেনরাউটার সঠিক বিল করা খরচ ফেরত দেয়। অন্য প্রদানকারীরা ওপেনরাউটারের পাবলিক মডেল মূল্য থেকে **অনুমানকৃত** খরচ ব্যবহার করে যখন একটি ওপেনরাউটার কী পাওয়া যায়; তা না হলে নন-ওপেনরাউটার খরচ `0` হিসেবে দেখানো হতে পারে। অনুমানগুলি বিল নয়।

<br/>

**ডেটা ও স্থায়িত্ব:** ডকারের জন্য, `/app/data`-এ একটি ভলিউম মাউন্ট করুন যাতে `config.json` এবং স্কুলাইট ডাটাবেজ কনটেইনার পুনঃচালনার পরেও সংরক্ষিত থাকে। ভলিউম ছাড়া, কনটেইনার থামলে সমস্ত ডেটা হারিয়ে যায়।

**ডেভেলপারদের জন্য:** পুরানো একক-কী কনফিগ প্রতিস্থাপন করা পরিবর্তন টানার পর, আপনার স্থানীয় ফাইলে সরানো ফিল্ডগুলি এখনও ব্যবহৃত হয় (`api_key`, `api_url`, প্রক্সি বিকল্প), তবে `src/config-defaults/config_default.json` থেকে নতুন পূর্বনির্ধারিত আকার ব্যবহার করে `data/config.json` রিসেট বা মার্জ করুন।

<br/>

**ওয়েব প্রমাণীকরণ:**

- পূর্বনির্ধারিত অ্যাডমিন: `admin` / `transrewrt26`।
- **Settings → Users**-এ ব্যবহারকারীদের পরিচালনা করুন।
- পাসওয়ার্ড রিসেট করুন: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (উৎস থেকে: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **সতর্কতা**<br/>
> কোনো নেটওয়ার্ক-প্রবেশযোগ্য হোস্টে অবিলম্বে পূর্বনির্ধারিত অ্যাডমিন পাসওয়ার্ড পরিবর্তন করুন।

<br/>

কী সেটিংস (ফন্ট, মডেল, ভাষা, ইত্যাদি) অ্যাপ্লিকেশন সেটিংসে উপলব্ধ।

<br/><br/>

<a id="development-and-architecture"></a>

## ডেভেলপমেন্ট ও স্থাপত্য

- **ডেভেলপমেন্ট:** সেটআপ, বিল্ড, পরীক্ষা ও ডিপ্লয় (Electron, Web, Docker) - দেখুন **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**।
- **স্থাপত্য ও সিস্টেম ওভারভিউ:** ফোল্ডার কাঠামো, টেক স্ট্যাক, ডিজাইন সিদ্ধান্ত - দেখুন **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**।

<br/><br/>

<a id="releases-and-tags"></a>
## রিলিজ ও ট্যাগ

- **গিট ট্যাগ** `v`* (যেমন `v1.0.10`) [রিলিজ ওয়ার্কফ্লো](.github/workflows/release.yml) চালু করে। **GitHub রিলিজ** উইন্ডোজ ইনস্টলার (`.exe`) এবং লিনাক্স AppImage সংযুক্ত করে (**x64** এবং **arm64**)।
- **ডকার ইমেজ** `ghcr.io/wsj-br/transrewrt`-এ প্রকাশিত হয়। ইমেজ ট্যাগগুলি গিট সংস্করণের সাথে মেলে (যেমন `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) এবং `latest`ও অন্তর্ভুক্ত। মাল্টি-আর্ক: `linux/amd64` এবং `linux/arm64` (যেমন রাস্পবেরি পাই)।

<br/><br/>

<a id="contributing"></a>
## অবদান রাখা

1. রিপোজিটোরির ফোর্ক তৈরি করুন।
2. একটি ফিচার ব্রাঞ্চ তৈরি করুন: `git checkout -b feature/my-feature`
3. স্পষ্ট মেসেজ সহ আপনার পরিবর্তনগুলি কমিট করুন।
4. পুশ করুন এবং `main`-কে লক্ষ্য করে একটি পুল রিকোয়েস্ট খুলুন।

দয়া করে জমা দেওয়ার আগে বিদ্যমান কোড স্টাইল অনুসরণ করুন এবং Electron এবং ওয়েব মোড উভয়েই আপনার পরিবর্তনগুলি পরীক্ষা করুন। বিল্ড ও টেস্টের নির্দেশাবলীর জন্য [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) দেখুন।

<br/>

**সমস্যা রিপোর্ট করা:** [GitHub](https://github.com/wsj-br/transrewrt/issues)-এ একটি ইস্যু খুলুন। আপনার প্ল্যাটফর্ম (উইন্ডোজ / লিনাক্স / ডকার) এবং অ্যাপ সংস্করণ (About ডায়ালগ বা রিলিজ পৃষ্ঠায় প্রদর্শিত) অবশ্যই অন্তর্ভুক্ত করুন।

<br/><br/>

<a id="disclaimer"></a>
## ডিসক্লেইমার

পণ্য নাম ও আইকনগুলি তাদের যথাক্রমিক মালিকদের সম্পত্তি এবং শুধুমাত্র চেনাশোনার উদ্দেশ্যে ব্যবহার করা হয়। এই সফটওয়্যারটি উল্লেখিত কোন ব্র্যান্ডের সাথে সম্পর্কিত বা পৃষ্ঠপোষকতা করা হয়নি।

<br/><br/>

<a id="license"></a>
## লাইসেন্স

কপিরাইট © 2026 ওয়ালডেমার স্কুডেলার জুনিয়র।

[আপাচি লাইসেন্স 2.0](LICENSE)