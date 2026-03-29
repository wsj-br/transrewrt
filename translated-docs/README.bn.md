---
translated_at: "2026-03-29T01:54:32.801Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt ব্যানার"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="সংস্করণ"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="লাইসেন্স: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="প্ল্যাটফর্ম">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-চালিত টেক্সট টুল: ভাষা থেকে ভাষান্তর, বিভিন্ন ধরনে পুনরায় লেখা এবং কাস্টম প্রম্পট ব্যবহার করে রূপান্তর — একাধিক AI প্রদানকারী ব্যবহার করে (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI এবং স্থানীয় Ollama)। ডেস্কটপ অ্যাপ (Electron) বা স্ব-হোস্টেড ওয়েব অ্যাপ (Docker) হিসাবে চলে।

- **অনুবাদ** — ডজন খানেক ভাষার মধ্যে স্বয়ংক্রিয় উৎস সনাক্তকরণ সহ
- **পুনরায় লেখা** — ব্যাকরণ ঠিক করা, স্পষ্টতা উন্নত করা, আনুষ্ঠানিক/অনানুষ্ঠানিক, ছোট করা, বিস্তারিত করা, প্রযুক্তিগত
- **রূপান্তর** — কাস্টম এআই প্রম্পট; প্রতিটি প্রম্পটের জন্য প্রয়োজনীয় লক্ষ্য ভাষাসহ প্রম্পট তৈরি ও পরিচালনা
- **ইতিহাস** — ইনপুট/আউটপুট টেক্সট, ফিল্টারিং এবং রপ্তানির সাথে সম্পূর্ণ ক্রিয়ান্বয়ন ইতিহাস
- **মডেল ও খরচ** — যেকোনো কনফিগার করা প্রদানকারীর কাছ থেকে মডেল নির্বাচন করুন; মডেল/অপারেশন/দিন অনুযায়ী লগ, সারসংক্ষেপের সাথে খরচ ও ব্যবহারের ড্যাশবোর্ড
- **ইউআই** — বহুভাষিক ইন্টারফেস (৩০+ ভাষা, RTL সমর্থন), ফন্ট, ...
- **ওয়েব মোড** — অ্যাডমিন রোলসহ বহু-ব্যবহারকারী সমর্থন
- **ডেস্কটপ** — উইন্ডোজ এবং লিনাক্সের জন্য ইলেক্ট্রন অ্যাপ
- **স্ব-হোস্টেড** — amd64 ও arm64 (রাস্পবেরি পাই-রেডি) এর জন্য ডকার চিত্র

ইনস্টল করার পর, সমস্ত বৈশিষ্ট্যের সম্পূর্ণ বিবরণের জন্য **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন।

<small>**অন্যান্য ভাষায় পড়ুন:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI এবং ডকুমেন্টেশন অনুবাদ সম্পর্কে নোট:** মূল ইংলিশ (যুক্তরাজ্য) ছাড়া সমস্ত ইন্টারফেস ভাষা AI মডেল ব্যবহার করে অনুবাদ করা হয়েছে; শব্দগুলি অস্পষ্ট হতে পারে অথবা ত্রুটি থাকতে পারে।

</small>

<br/>

<a id="screenshots"></a>

## স্ক্রিনশট

**ভাষা নির্বাচক**

![ভাষা নির্বাচক](../images/screenshots/bn/language-selector.png)

**অনুবাদ করুন**

![অনুবাদ করুন](../images/screenshots/bn/translate.png)

**রূপান্তর - প্রম্পট সম্পাদক**

![রূপান্তর - প্রম্পট সম্পাদক](../images/screenshots/bn/transform-prompt-edit.png)

**ড্যাশবোর্ড**

![ড্যাশবোর্ড সারসংক্ষেপ — ব্যবহার](../images/screenshots/bn/dashboard-summary.png)

**ইতিহাস**

![ইতিহাস](../images/screenshots/bn/history.png)

**সেটিংস - মডেল নির্বাচন**

![সেটিংস - মডেল নির্বাচন](../images/screenshots/bn/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## সূচিপত্র

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [দ্রুত শুরু করুন](#quick-start)
- [ইনস্টলেশন](#installation)
  - [উইন্ডোজ (ইলেকট্রন)](#windows-electron)
  - [লিনাক্স (ইলেকট্রন)](#linux-electron)
  - [ডকার](#docker)
  - [সময় অঞ্চল কনফিগার করা](#configuring-the-timezone)
- [ওপেনরাউটার API কী পাওয়া](#getting-an-openrouter-api-key)
- [কনফিগারেশন এবং পরিবেশ](#configuration-and-environment)
- [ডেভেলপমেন্ট এবং স্থাপত্য](#development-and-architecture)
- [সমস্যা রিপোর্ট করা](#reporting-issues)
- [দায় অস্বীকার](#disclaimer)
- [লাইসেন্স](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## দ্রুত শুরু করুন

**ডকার (স্ব-হোস্ট করার জন্য এটি সুপারিশ করা হয়)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` এর স্থানে আপনার [ওপেনরাউটার এপিআই কী](https://openrouter.ai/keys) ব্যবহার করুন (অথবা অন্যান্য প্রদানকারীদের কী সেট করুন; বিস্তারিত জানতে [কনফিগারেশন](#configuration-and-environment) দেখুন)। [http://localhost:5000](http://localhost:5000) খুলুন এবং সার্ভিসটি প্রকাশ করার আগে ডিফল্ট অ্যাডমিন পাসওয়ার্ড পরিবর্তন করুন।

<br/>

> ℹ️ **দ্রষ্টব্য**<br/>
> ডকার ব্যবহার করলে, LLM প্রমাণীকরণ (credentials) পরিবেশ চলকের মাধ্যমে যেমন `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … ইত্যাদির মাধ্যমে সেট করা হয় (ওয়েব ইউআই-এ নয়)। ডেস্কটপে (ইলেকট্রন), আপনি **সেটিংস → API** এ কীগুলি কনফিগার করবেন।

<br/>

**উইন্ডোজ**

নতুনতম `Transrewrt Setup x.y.z.exe` ডাউনলোড করুন [রিলিজগুলি](https://github.com/wsj-br/transrewrt/releases) থেকে, ইনস্টলার চালান, এবং তারপরে স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে চালু করুন। আপনার API কীগুলি **সেটিংস → API**-এ প্রবেশ করান। আপনাকে কমপক্ষে একটি প্রদানকারী কনফিগার করতে হবে, ফ্রি মডেলগুলির জন্য OpenRouter সাধারণ।

<br/>

**লিনাক্স**

`x64` সাধারণ পিসি এবং `arm64` Raspberry Pi 4+ সহ অনেক ARM ডিভাইসের জন্য [রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে আপনার CPU-এর জন্য `.AppImage` ডাউনলোড করুন, এবং তারপর:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

আপনার API কীগুলি **সেটিংস → API**-এ প্রবেশ করান। আপনাকে কমপক্ষে একটি প্রদানকারী কনফিগার করতে হবে, ফ্রি মডেলগুলির জন্য OpenRouter সাধারণ।

Debian/Ubuntu-এ আপনাকে সম্ভবত আগে অতিরিক্ত নির্ভরশীলতা ইনস্টল করতে হবে:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

বিস্তারিত জানার জন্য [ইনস্টলেশন → লিনাক্স](#linux-electron) দেখুন।

<br/>

> ℹ️ **নোট**<br/>

> ম্যাকওএস এখনও সমর্থিত নয়। উইন্ডোজ, লিনাক্স এবং ডকারের জন্য ট্রান্সরিওয়ার্ট উপলব্ধ।

<br/>

অ্যাপটি চালানো শুরু হলে, টেক্সট অনুবাদ, পুনরায় লেখা এবং রূপান্তর করা, প্রম্পটগুলি পরিচালনা করা এবং মডেল কনফিগার করা শিখতে **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন।

<br/><br/>

<a id="installation"></a>

## ইনস্টলেশন

<a id="windows-electron"></a>

### উইন্ডোজ (ইলেকট্রন)

- [রিলিজ](https://github.com/wsj-br/transrewrt/releases)-এ থেকে সর্বশেষ ইনস্টলার ডাউনলোড করুন।
- `.exe` ফাইলটি চালান এবং ইনস্টলার অনুসরণ করুন।
- প্রথম চালানোর সময়: স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে অ্যাপ্লিকেশনটি শুরু করুন।

<br/>

> ℹ️ **দ্রষ্টব্য**<br/>
> উইন্ডোজ আপনাকে এগুলোর মধ্যে একটি নিরাপত্তা সতর্কতা দেখাতে পারে (স্বাক্ষরিত নয়/স্বাধীন অ্যাপের জন্য স্বাভাবিক):
>   - **ইউজার অ্যাকাউন্ট কন্ট্রোল (ইউএসি)**: "আপনি কি একটি অজানা প্রকাশকের কাছ থেকে এই অ্যাপটিকে আপনার ডিভাইসে পরিবর্তন করার অনুমতি দিতে চান?" → **হ্যাঁ** ক্লিক করুন।
>   - **মাইক্রোসফ্ট ডিফেন্ডার স্মার্টস্ক্রিন**: "উইন্ডোজ আপনার পিসি সুরক্ষিত করেছে" → **আরও তথ্য** ক্লিক করুন → **যাইহোক চালান** ক্লিক করুন।
>
> যেহেতু অ্যাপটি মাইক্রোসফ্ট বা কোনো বড় প্রকাশক দ্বারা স্বাক্ষরিত নয় তাই এটি ঘটে— এটি নিরাপদ যদি আমাদের অফিসিয়াল গিটহাব রিলিজ থেকে ডাউনলোড করা হয়ে থাকে
> (নীচের এসএইচএ২৫৬ চেকসাম যাচাই করুন)।

<br/>

<a id="linux-electron"></a>

### লিনাক্স (ইলেকট্রন)

- [রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে মিলে যাওয়া `.AppImage` (`x64` বা `arm64`) ডাউনলোড করুন।
- x86_64/amd64-এ এটি চালান: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`, অথবা ARM64-এ `...-arm64.AppImage` ফাইল নামটি ব্যবহার করুন।
- অতিরিক্ত নির্ভরশীলতা (ডেবিয়ান/উবুন্টু): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- আরও জানতে [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) দেখুন।

<br/>

<a id="docker"></a>

### ডকার

- নিন: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- পরিবেশের মাধ্যমে কমপক্ষে একটি প্রোভাইডার কী সেট করুন (উদাহরণস্বরূপ ওপেনরাউটারের জন্য `OPENROUTER_API_KEY`)। গোপনীয় তথ্য ইমেজে না আটকাতে `-e` বা `docker compose` / `.env` এর সাহায্যে ভেরিয়েবলগুলি পাস করুন।
- প্রোভাইডার কীগুলি ওয়েব ইউআই-এ **প্রবেশ করানো হয় না**; সার্ভারটি পরিবেশ থেকে সেগুলি পড়ে।

উদাহরণ - ধ্রুবকতা জন্য নামযুক্ত ভলিউম (পরিবেশের মাধ্যমে ওপেনরাউটার কী):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

অথবা আপনি যদি ডকার কম্পোজ ব্যবহার করতে চান, তবে ব্যবহার করুন:

```
# কম্পোজ ফাইলটি ডাউনলোড করুন
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# API_KEYS যোগ করতে এবং সময় অঞ্চল (TZ) সামঞ্জস্য করতে ফাইলটি সম্পাদনা করুন
vi transrewrt.yml
# কনটেইনারটি চালু করুন
docker compose -f transrewrt.yml up -d

সমস্ত পরিবেশ পরিবর্তনশীল মানগুলির জন্য [কনফিগারেশন](#configuration-and-environment) দেখুন, যেমন `PORT`, `CONFIG_PATH`, `TZ`, এবং এলএলএম কী (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, ...)।

<a id="configuring-the-timezone"></a>

### সময়ক্ষেত্র কনফিগার করা

অ্যাপ্লিকেশন ইউজার ইন্টারফেসের তারিখ ও সময় অনুসরণ করে **ব্রাউজারের** স্থানীয় সেটিংস এবং সময়ক্ষেত্র। **সার্ভার-সাইড** আচরণের জন্য (লগিং ইত্যাদি), কনটেইনারটি `TZ` পরিবেশ ভেরিয়েবল ব্যবহার করে। ডিফল্ট মান হলো `TZ=Europe/London`।

অন্য সময়ক্ষেত্র ব্যবহার করতে, আপনার কম্পোজ ফাইলে `TZ` সেট করুন, উদাহরণস্বরূপ:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

অথবা কনটেইনার চালানোর সময় এটি পাস করুন (ডকার):

```bash
--env TZ=America/Sao_Paulo
```

অনেক লিনাক্স হোস্টে আপনি নিম্নোক্ত কমান্ড দিয়ে সিস্টেম সময়ক্ষেত্রের নাম কপি করতে পারেন:

```bash
echo TZ=\"$(</etc/timezone)\"
```

[টিজেড ডাটাবেজ](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (উইকিপিডিয়া) এ বৈধ সময়ক্ষেত্রের নামগুলির একটি তালিকা রয়েছে।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## একটি ওপেনরাউটার API কী পাওয়া

ট্রান্সরিরাইট বহু ধরনের AI প্রদানকারীকে সমর্থন করে। [ওপেনরাউটার](https://openrouter.ai)-এর ব্যবহার জনপ্রিয় কারণ এটি একটি একক কীয়ের মাধ্যমে বহু মডেলের সংযোগ করে এবং কিছু মডেল বিনামূল্যে প্রদান করে।

1. [openrouter.ai](https://openrouter.ai)-এ নতুন অ্যাকাউন্ট তৈরি করুন অথবা লগ ইন করুন।
2. [Keys](https://openrouter.ai/keys) পৃষ্ঠাটি খুলুন এবং একটি নতুন কী তৈরি করুন (নাম দিন, এবং ঐচ্ছিকভাবে ক্রেডিট সীমা নির্ধারণ করুন)। ক্রেডিট না যোগ করেই আপনি বিনামূল্যের মডেল ব্যবহার করতে পারেন।
3. **ডেস্কটপ (ইলেক্ট্রন):** **সেটিংস → API**-এ কী পেস্ট করুন। **ডকার:** env ভেরিয়েবল সেট করুন যেমন `OPENROUTER_API_KEY` (দেখুন [দ্রুত শুরু](#quick-start))।

অনুবাদ, পুনর্লেখন বা রূপান্তরের ক্ষেত্রে ওপেনরাউটারের **বডি বিল্ডার** মডেল ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder))-এর ব্যবহার করবেন না: এটি সম্পন্ন করা টেক্সট না দিয়ে জেসন রিকোয়েস্ট পেলোড প্রদান করে। ব্যবহারকারী গাইডে [সেটিংস → মডেল](USER-GUIDE.bn.md#models) দেখুন।

আপনি অন্যান্য প্রোভাইডারও ব্যবহার করতে পারেন (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) অথবা [Ollama](https://ollama.com)-এর সাহায্যে লোকালভাবে মডেল চালাতে পারেন। সমর্থিত প্রোভাইডার এবং পরিবেশ পরিবর্তনশীল সম্পর্কে সম্পূর্ণ তালিকা জানার জন্য দেখুন [কনফিগারেশন](#configuration-and-environment)।

> ⚠️ **সতর্কতা**<br/>
> যদি আপনি অন্য কোনও ডিভাইস, কন্টেইনার বা সার্ভিস থেকে Ollama ব্যবহার করেন, তবে Ollama-কে বাহ্যিক সংযোগের (শুধুমাত্র লোকালহোস্ট নয়) অনুমতি দেওয়ার বিষয়টি মনে রাখবেন।


সীমাবদ্ধতা, BYOK এবং আরও তথ্যের জন্য দেখুন [OpenRouter প্রমাণীকরণ](https://openrouter.ai/docs/api/reference/authentication)।

<br/><br/>

<a id="configuration-and-environment"></a>

## কনফিগারেশন এবং পরিবেশ

**কনফিগ ফাইলের অবস্থান**

| ডেপ্লয়মেন্ট | কনফিগ অবস্থান |
| ------------------ | ------------------------------------------------- |
| ইলেকট্রন (উইন্ডোজ) | `%APPDATA%\transrewrt\` |
| ইলেকট্রন (লিনাক্স) | `~/.config/transrewrt/` |
| ওয়েব / ডকার | `/app/data/config.json` (স্থায়ী করার জন্য একটি ভলিউম ব্যবহার করুন) |

<br/>

**পরিবেশগত চলক** (শুধুমাত্র ওয়েব/ডকারের জন্য; ইলেকট্রন স্থানীয় কনফিগ ফাইল ব্যবহার করে)

| ভেরিয়েবল | ডিফল্ট | বিবরণ |
| ---------------- | ----------------------- | ----------- |
| `PORT` | `5000` | সার্ভার শোনার পোর্ট |
| `CONFIG_PATH` | `/app/data/config.json` | কনফিগ ফাইলের পথ |
| `TZ` | `Europe/London` | সার্ভার-সাইড সময়ের জন্য IANA সময় অঞ্চল (লগিং ইত্যাদি); ইউআই এখনও ব্রাউজার অনুসরণ করে। দেখুন [ডকার → টাইমজোন](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(খালি)* | OpenRouter API কী |
| `OPENAI_API_KEY` | *(খালি)* | OpenAI API কী |
| `CEREBRAS_API_KEY` | *(খালি)* | Cerebras API কী |
| `ANTHROPIC_API_KEY` | *(খালি)* | Anthropic API কী |
| `GOOGLE_API_KEY` | *(খালি)* | Google Gemini API কী |
| `DEEPSEEK_API_KEY` | *(খালি)* | DeepSeek API কী |
| `GROQ_API_KEY` | *(খালি)* | Groq API কী |
| `MISTRAL_API_KEY` | *(খালি)* | Mistral API কী |
| `OLLAMA_URL` | *(খালি)* | Ollama বেস ইউআরএল (যেমন `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(খালি)* | xAI API কী |

আপনি যেসব প্রদানকারীদের ব্যবহার করেন তাদের কেবল কনফিগার করুন। মডেল আইডিগুলো নামস্থানযুক্ত (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ইত্যাদি)।

**খরচ প্রদর্শন:** যেখানে প্রযোজ্য সেখানে ওপেনরাউটার সঠিক ধার্যকৃত খরচ ফেরত দেয়। অন্যান্য প্রদানকারীদের ক্ষেত্রে ওপেনরাউটার কী উপলব্ধ থাকলে **আনুমানিক** খরচ প্রদর্শন করা হয় ওপেনরাউটারের পাবলিক মডেলের মূল্য নির্ধারণ থেকে; এটি ছাড়া, অ-ওপেনরাউটার খরচ `0` হিসাবে দেখানো হতে পারে। অনুমানগুলি চালান নয়।

<br/>

**ডেটা এবং স্থায়িত্ব:** ডকারের জন্য, `/app/data`-এ একটি ভলিউম মাউন্ট করুন যাতে `config.json` এবং এসকিউলাইট ডাটাবেস কনটেইনার পুনঃচালুকরণের মধ্য দিয়ে স্থায়ী হয়। ভলিউম ছাড়া, কনটেইনার বন্ধ হলে সমস্ত ডেটা চলে যায়।

**ডেভেলপারগণ:** পুরানো একক-কী কনফিগ প্রতিস্থাপন করে পরিবর্তনগুলো পুল করার পর, আপনার স্থানীয় ফাইলটি এখনও বাতিলকৃত ফিল্ডগুলি ব্যবহার করে ( `api_key`, `api_url`, প্রক্সি বিকল্পগুলি) তবে `data/config.json` ফাইলটি `src/config-defaults/config_default.json` থেকে নতুন ডিফল্ট ফর্মে রিসেট বা মার্জ করুন।

<br/>

**ওয়েব প্রমাণীকরণ:**

- ডিফল্ট অ্যাডমিন: `admin` / `transrewrt26`।
- ব্যবহারকারীদের **সেটিংস → ব্যবহারকারী**-তে পরিচালনা করুন।

- পাসওয়ার্ড রিসেট করুন: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (সোর্স থেকে: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **সতর্কতা**<br/>
> যেকোনো নেটওয়ার্ক-অ্যাক্সেসযোগ্য হোস্টে ডিফল্ট অ্যাডমিন পাসওয়ার্ড অবিলম্বে পরিবর্তন করুন।

<br/>

অ্যাপ্লিকেশন সেটিংসে ফন্ট, মডেল, ভাষা ইত্যাদি সেটিংস পাওয়া যাবে।

<br/><br/>

<a id="development-and-architecture"></a>

## ডেভেলপমেন্ট এবং আর্কিটেকচার

- **ডেভেলপমেন্ট:** সেটআপ, বিল্ড, টেস্ট ও ডেপ্লয় (Electron, Web, Docker) - দেখুন **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**।
- **আর্কিটেকচার এবং সিস্টেম ওভারভিউ:** ফোল্ডার স্ট্রাকচার, টেক স্ট্যাক, ডিজাইন সিদ্ধান্ত - দেখুন **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**।

<br/><br/>

<a id="reporting-issues"></a>

## সমস্যা রিপোর্ট করা

[GitHub](https://github.com/wsj-br/transrewrt/issues)-এ একটি ইস্যু খুলুন। আপনার প্ল্যাটফর্ম (উইন্ডোজ / লিনাক্স / ডকার) এবং অ্যাপের সংস্করণ (যা আবাউট ডায়ালগ বা রিলিজ পৃষ্ঠায় দেখানো হয়েছে) অন্তর্ভুক্ত করুন।

<br/><br/>

<a id="disclaimer"></a>

## ডিসক্লেইমার

পণ্যের নাম এবং আইকনগুলি তাদের সংশ্লিষ্ট মালিকদের সম্পত্তি এবং শুধুমাত্র চেনাশোনার উদ্দেশ্যে ব্যবহার করা হয়। উল্লিখিত কোনও ব্র্যান্ডের সাথে এই সফটওয়্যারের কোনও সম্পর্ক নেই এবং সেগুলি কর্তৃক অনুমোদিতও নয়।

<br/><br/>

<a id="license"></a>

## লাইসেন্স

কপিরাইট © 2026 ওয়ালডেমার স্কুডেলার জুনিয়র।

[অ্যাপাচি লাইসেন্স 2.0](LICENSE)