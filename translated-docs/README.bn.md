---
translated_at: "2026-03-27T23:08:09.516Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

AI-চালিত টেক্সট টুল: একাধিক AI প্রদানকারী (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI এবং স্থানীয় Ollama) ব্যবহার করে বিভিন্ন ভাষায় অনুবাদ করুন, বিভিন্ন শৈলীতে পুনরায় লিখুন এবং কাস্টম প্রম্পটগুলির সাহায্যে রূপান্তর করুন —। ডেস্কটপ অ্যাপ (Electron) বা স্ব-হোস্ট ওয়েব অ্যাপ (Docker) হিসেবে চালানো যায়।

- **অনুবাদ** — ডজন খানেক ভাষায়, স্বয়ংক্রিয় উৎস সনাক্তকরণ সহ
- **পুনঃলেখন** — ব্যাকরণ ঠিক করুন, স্পষ্টতা উন্নত করুন, আনুষ্ঠানিক/অনানুষ্ঠানিক, সংক্ষেপণ, প্রসারণ, প্রযুক্তিগত
- **রূপান্তর** — কাস্টম AI প্রম্পট; প্রম্পট তৈরি এবং পরিচালনা করুন, প্রতিটি প্রম্পটের জন্য ঐচ্ছিক লক্ষ্য ভাষা
- **ইতিহাস** — ইনপুট/আউটপুট টেক্সট, ফিল্টারিং এবং এক্সপোর্ট সহ পূর্ণাঙ্গ এক্সিকিউশন ইতিহাস
- **মডেল ও খরচ** — যেকোনো কনফিগার করা প্রদানকারী থেকে মডেল পছন্দ করুন; লগ, মডেল/অপারেশন/দিন অনুযায়ী সারাংশ সহ খরচ এবং ব্যবহারের ড্যাশবোর্ড
- **UI** — বহুভাষিক ইন্টারফেস (৩০+ ভাষা, RTL সমর্থন), ফন্ট, ...
- **ওয়েব মোড** — প্রশাসক ভূমিকা সহ বহু-ব্যবহারকারী সমর্থন
- **ডেস্কটপ** — উইন্ডোজ এবং লিনাক্সের জন্য Electron অ্যাপ
- **স্ব-হোস্টেড** — amd64 ও arm64 (Raspberry Pi-তে প্রস্তুত) এর জন্য Docker ইমেজ

ইনস্টল করার পর, সমস্ত বৈশিষ্ট্যের জন্য **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন।

<small>**অন্যান্য ভাষায় পড়ুন:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI এবং ব্যাখ্যামূলক লেখা অনুবাদ সম্পর্কে নোট:** মূল ইংরাজি (যুক্তরাজ্য) ছাড়া সকল ইন্টারফেস ভাষা
> AI মডেল তৈরি করে অনূদিত হয়েছে; শব্দচয়ন অস্পষ্ট হতে পারে বা ভুল থাকতে পারে।

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

- [দ্রুত শুরু করুন](#quick-start)
- [ইনস্টলেশন](#installation)
  - [উইন্ডোজ (ইলেকট্রন)](#windows-electron)
  - [লিনাক্স (ইলেকট্রন)](#linux-electron)
  - [ডকার](#docker)
- [একটি ওপেনরাউটার API কী পাওয়া](#getting-an-openrouter-api-key)
- [কনফিগারেশন এবং পরিবেশ](#configuration-and-environment)
- [ডেভেলপমেন্ট এবং আর্কিটেকচার](#development-and-architecture)
- [রিলিজ এবং ট্যাগ](#releases-and-tags)
- [অবদান রাখুন](#contributing)
- [দায় অস্বীকার](#disclaimer)
- [লাইসেন্স](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## দ্রুত শুরু

**ডকার (স্ব-হোস্ট করার জন্য সুপারিশ করা হয়েছে)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key`-কে আপনার [ওপেনরাউটার এপিআই কী](https://openrouter.ai/keys) দিয়ে প্রতিস্থাপন করুন (অথবা অন্যান্য প্রদানকারীর কী সেট করুন; [কনফিগারেশন এবং পরিবেশ](#configuration-and-environment) দেখুন)। [http://localhost:5000](http://localhost:5000)-এ যান এবং পরিষেবাটি এক্সপোজ করার আগে ডিফল্ট অ্যাডমিন পাসওয়ার্ড পরিবর্তন করুন।

<br/>

> ℹ️ **দ্রষ্টব্য**<br/>
> ডকারে, এলএলএম ক্রেডেনশিয়ালগুলি পরিবেশ ভেরিয়েবল যেমন `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … দিয়ে সেট করা হয় (ওয়েব ইউআই-তে নয়)। ডেস্কটপ (ইলেকট্রন) এ, আপনি **সেটিংস → এপিআই**-তে কী কনফিগার করেন।

<br/>

**উইন্ডোজ**

[রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে সর্বশেষ `Transrewrt Setup x.y.z.exe` ডাউনলোড করুন, ইনস্টলার চালান এবং তারপর স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে চালু করুন। **সেটিংস → এপিআই**-তে আপনার এপিআই কীগুলি প্রবেশ করান। আপনাকে অন্তত একটি প্রদানকারী কনফিগার করতে হবে, ফ্রি মডেলের জন্য ওপেনরাউটার সাধারণ।

<br/>

**লিনাক্স**

আপনার সিপিইউ-এর জন্য `.AppImage` ডাউনলোড করুন [রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে (`x64` সাধারণ পিসি-এর জন্য, `arm64` অনেক আর্ম ডিভাইসের জন্য, রাস্পবেরি পাই 4+ সহ), তারপর:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**সেটিংস → এপিআই**-তে আপনার এপিআই কীগুলি প্রবেশ করান। আপনাকে অন্তত একটি প্রদানকারী কনফিগার করতে হবে, ফ্রি মডেলের জন্য ওপেনরাউটার সাধারণ।

ডেবিয়ান/উবুন্টুতে আপনার প্রথমে অতিরিক্ত নির্ভরতা ইনস্টল করতে হতে পারে:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

বিস্তারিত জানার জন্য [ইনস্টলেশন → লিনাক্স](#linux-electron) দেখুন।

<br/>

> ℹ️ **দ্রষ্টব্য**<br/>
> ম্যাকওএস বর্তমানে সমর্থিত নয়। উইন্ডোজ, লিনাক্স এবং ডকারের জন্য ট্রান্সরেওয়ার্ট উপলব্ধ।

<br/>

অ্যাপটি চলমান হওয়ার পর, টেক্সট অনুবাদ, পুনরায় লেখা এবং রূপান্তর করা, প্রম্পটগুলি পরিচালনা করা এবং মডেল কনফিগার করা সম্পর্কে জানতে **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন।

<br/><br/>

<a id="installation"></a>

## স্থাপন

<a id="windows-electron"></a>
### উইন্ডোজ (ইলেকট্রন)

- [রিলিজ](https://github.com/wsj-br/transrewrt/releases)-এর কাছ থেকে সর্বশেষ ইনস্টলারটি ডাউনলোড করুন।
- `.exe` ফাইলটি চালান এবং ইনস্টলার অনুসরণ করুন।
- প্রথম বার চালানো: স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে অ্যাপটি শুরু করুন।

<br/>

<a id="linux-electron"></a>
### লিনাক্স (ইলেকট্রন)

- [রিলিজ](https://github.com/wsj-br/transrewrt/releases)-এর কাছ থেকে মিলে যাওয়া `.AppImage` ফাইল ডাউনলোড করুন (`x64` বা `arm64`)।
- চালান: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 এবং ARM64-এর জন্য `...-arm64.AppImage` ফাইলনাম ব্যবহার করুন।
- অতিরিক্ত ডিপেন্ডেন্সি (ডেবিয়ান/উবুন্টু): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- আরও তথ্যের জন্য [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) দেখুন।

<br/>

<a id="docker"></a>
### ডকার

- পুল করুন: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- পরিবেশের মাধ্যমে কমপক্ষে একটি প্রদানকারী কী সেট করুন (উদাহরণস্বরূপ ওপেনরাউটারের জন্য `OPENROUTER_API_KEY`)। -e বা `docker compose` / `.env` ব্যবহার করে পরিবর্তনশীলগুলি পাস করুন যাতে গোপন কীগুলি ইমেজে প্রোগ্রামিংয়ের মাধ্যমে না ঢুকে পড়ে।
- প্রদানকারী কীগুলি ওয়েব ইউআই-এ প্রবেশ করা হয় **না**; সার্ভারটি পরিবেশ থেকে সেগুলি পড়ে।

উদাহরণ - স্থায়িত্বের জন্য নামকৃত ভলিউম (পরিবেশের মাধ্যমে ওপেনরাউটার কী):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

বা আপনি যদি ডকার কমপোজ ব্যবহার করতে পছন্দ করেন, নিচেরটি ব্যবহার করুন:

# কম্পোজ ফাইলটি ডাউনলোড করুন
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# API_KEYS যোগ করতে ফাইলটি সম্পাদনা করুন
vi transrewrt.yml
# কনটেইনারটি চালু করুন
docker compose -f transrewrt.yml up -d
```

<br/>

| বিকল্প | বিবরণ |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| পোর্ট | `5000` ( `-p 5000:5000` ব্যবহার করে ম্যাপ করুন) |
| ভলিউম | কনফিগ এবং ডাটাবেস পার্সিসটেন্সের জন্য `/app/data` মাউন্ট করুন |
| পরিবেশ চলক | `PORT`, `CONFIG_PATH`, এবং LLM কী ( `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - [কনফিগারেশন](#configuration-and-environment) দেখুন |

সোর্স থেকে তৈরি করে চালানোর জন্য: `docker compose up --build -d` অথবা `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) দেখুন।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## একটি OpenRouter API কী পাওয়ার পদ্ধতি

ট্রান্সরিরাইট একাধিক AI প্রদানকারীকে সমর্থন করে। [OpenRouter](https://openrouter.ai) একটি জনপ্রিয় পছন্দ কারণ এটি একটি কীতে একাধিক মডেলের সংমিশ্রণ করে এবং বিনামূল্যের মডেল অফার করে।

1. [openrouter.ai](https://openrouter.ai)-এ সাইন আপ করুন অথবা লগ ইন করুন।
2. [Keys](https://openrouter.ai/keys) পৃষ্ঠাটি খুলুন এবং একটি নতুন কী তৈরি করুন (এটির নাম দিন এবং ঐচ্ছিকভাবে একটি ক্রেডিট সীমা সেট করুন)। আপনি ক্রেডিট না যোগ করেই বিনামূল্যের মডেল ব্যবহার করতে পারেন।
3. **ডেস্কটপ (Electron):** **সেটিংস → API**-এ কীগুলি পেস্ট করুন। **ডকার:** `OPENROUTER_API_KEY` এর মতো পরিবেশ পরিবর্তনশীলগুলি সেট করুন (দেখুন [দ্রুত শুরু](#quick-start))।

অনুবাদ, পুনঃলেখন বা রূপান্তরের জন্য OpenRouter-এর **বডি বিল্ডার** মডেল ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ব্যবহার করবেন না: এটি সম্পূর্ণ টেক্সট না দিয়ে শুধুমাত্র JSON অনুরোধ পেলওয়্যালগুলি প্রদান করে। ব্যবহারকারী গাইডে [সেটিংস → মডেল](USER-GUIDE.bn.md#models) দেখুন।

আপনি অন্যান্য প্রদানকারীদেরও ব্যবহার করতে পারেন (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) অথবা [Ollama](https://ollama.com)-এর সাহায্যে স্থানীয়ভাবে মডেল চালাতে পারেন। সমর্থিত প্রদানকারীদের এবং পরিবেশ পরিবর্তনশীলগুলির পূর্ণ তালিকার জন্য [কনফিগারেশন](#configuration-and-environment) দেখুন।

> ⚠️ **সতর্কতা**<br/>
> যদি আপনি অন্য কোনো ডিভাইস, কনটেইনার বা সেবা থেকে Ollama ব্যবহার করেন, তাহলে অবশ্যই Ollama-কে বাহ্যিক সংযোগ গ্রহণের অনুমতি দিন (শুধুমাত্র লোকালহোস্ট নয়)।

সীমাবদ্ধতা, BYOK এবং সম্পর্কিত অন্যান্য বিষয়গুলির জন্য, [OpenRouter অথেনটিকেশন](https://openrouter.ai/docs/api/reference/authentication) দেখুন।

<br/><br/>

<a id="configuration-and-environment"></a>

## কনফিগারেশন ও পরিবেশ

**কনফিগ ফাইলের অবস্থান**

| ডেপ্লয়মেন্ট         | কনফিগের অবস্থান                                   |
| ------------------ | ------------------------------------------------- |
| ইলেকট্রন (উইন্ডোজ) | `%APPDATA%\transrewrt\`                           |
| ইলেকট্রন (লিনাক্স)   | `~/.config/transrewrt/`                           |
| ওয়েব / ডকার       | `/app/data/config.json` (স্থায়ী রাখতে ভলিউম ব্যবহার করুন) |

<br/>

**পরিবেশ চলক** (শুধুমাত্র ওয়েব/ডকারের জন্য; ইলেকট্রনে স্থানীয় কনফিগ ফাইল ব্যবহৃত হয়)

| চলক         | ডিফল্ট                 | বিবরণ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | সার্ভার শোনার পোর্ট |
| `CONFIG_PATH`    | `/app/data/config.json` | কনফিগ ফাইলের পথ |
| `OPENROUTER_API_KEY` | *(খালি)*               | OpenRouter API কী |
| `OPENAI_API_KEY`     | *(খালি)*               | OpenAI API কী |
| `CEREBRAS_API_KEY`   | *(খালি)*               | Cerebras API কী |
| `ANTHROPIC_API_KEY`  | *(খালি)*               | Anthropic API কী |
| `GOOGLE_API_KEY`     | *(খালি)*               | Google Gemini API কী |
| `DEEPSEEK_API_KEY`   | *(খালি)*               | DeepSeek API কী |
| `GROQ_API_KEY`       | *(খালি)*               | Groq API কী |
| `MISTRAL_API_KEY`    | *(খালি)*               | Mistral API কী |
| `OLLAMA_URL`     | *(খালি)*               | Ollama বেস URL (উদা. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(খালি)*               | xAI API কী |

শুধুমাত্র আপনার ব্যবহৃত সরবরাহকারীদের কনফিগার করুন। মডেল আইডি নেমস্পেসযুক্ত (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ইত্যাদি)।

**খরচ প্রদর্শন:** OpenRouter প্রযোজ্য ক্ষেত্রে ঠিক বিলকৃত খরচ প্রদান করে। অন্যান্য সরবরাহকারীরা OpenRouter-এর পাবলিক মডেল প্রাইসিং থেকে **আনুমানিক** খরচ ব্যবহার করে যদি একটি OpenRouter কী উপস্থিত থাকে; এটি ছাড়া, অ-OpenRouter খরচ `0` হিসাবে প্রদর্শিত হতে পারে। আনুমানিক খরচ ইনভয়েস নয়।

<br/>

**ডেটা ও স্থায়িত্ব:** ডকার-এর জন্য `/app/data` এ একটি ভলিউম মাউন্ট করুন যাতে `config.json` এবং SQLite ডাটাবেস কনটেইনার পুনরায় চালুর মাধ্যমে স্থায়ী থাকে। ভলিউম ছাড়া, কনটেইনার বন্ধ হওয়ার সাথে সাথে সমস্ত ডেটা হারিয়ে যায়।

**ডেভেলপারদের জন্য:** যদি আপনার স্থানীয় ফাইলের মধ্যে পুরনো ফিল্ডগুলি (`api_key`, `api_url`, প্রক্সি অপশন) এখনও থাকে, তবে পুরনো এককের কী কনফিগ প্রতিস্থাপন করার পর পরিবর্তনগুলি পুনরুদ্ধার করার পর `data/config.json` ফাইলটি `src/config-defaults/config_default.json` এর সাথে রিসেট বা মার্জ করুন।

<br/>

**ওয়েব প্রমাণীকরণ:**

- ডিফল্ট অ্যাডমিন: `admin` / `transrewrt26`.
- ব্যবহারকারীদের পরিচালনা করুন **সেটিংস → ব্যবহারকারীদের** অপশনে।
- পাসওয়ার্ড রিসেট করুন: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (উৎস থেকে: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **সতর্কতা**<br/>
> যেকোনো নেটওয়ার্ক অ্যাক্সেসযুক্ত হোস্টে ডিফল্ট অ্যাডমিন পাসওয়ার্ড অবিলম্বে পরিবর্তন করুন।

<br/>

মূল সেটিংস (ফন্ট, মডেল, ভাষা ইত্যাদি) অ্যাপ্লিকেশনের সেটিংসে উপলব্ধ।

<br/><br/>

<a id="development-and-architecture"></a>

## ডেভেলপমেন্ট এবং আর্কিটেকচার

- **ডেভেলপমেন্ট:** সেটআপ, বিল্ড, টেস্ট এবং ডেপ্লয় করুন (Electron, Web, Docker) - দেখুন **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**।
- **আর্কিটেকচার এবং সিস্টেম ওভারভিউ:** ফোল্ডার স্ট্রাকচার, টেক স্ট্যাক, ডিজাইন সিদ্ধান্ত - দেখুন **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**।

<br/><br/>

<a id="releases-and-tags"></a>
## রিলিজ এবং ট্যাগ

- **Git ট্যাগ** `v`* (যেমন `v1.0.10`) [রিলিজ ওয়ার্কফ্লো](.github/workflows/release.yml)-এ ট্রিগার করে। **GitHub রিলিজগুলো** উইন্ডোজ ইনস্টলার (`.exe`) এবং লিনাক্স AppImage-গুলো (**x64** এবং **arm64**) সংযুক্ত করে।
- **ডকার ইমেজগুলো** `ghcr.io/wsj-br/transrewrt`-এ প্রকাশিত হয়। ইমেজ ট্যাগগুলো Git ভার্সনের সাথে মিলে যায় (যেমন `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) এবং `latest`-ও অন্তর্ভুক্ত করে। মাল্টি-আর্ক: `linux/amd64` এবং `linux/arm64` (যেমন র্যাসপবেরি পাই)।

<br/><br/>

<a id="contributing"></a>
## অবদান রাখা

1. রিপোজিটোরি ফোর্ক করুন।
2. একটি ফিচার ব্রাঞ্চ তৈরি করুন: `git checkout -b feature/my-feature`
3. পরিষ্কার মেসেজ সহ আপনার পরিবর্তনগুলি কমিট করুন।
4. পুশ করুন এবং `main` ব্রাঞ্চে একটি পুল রিকোয়েস্ট খুলুন।

দয়া করে জমা দেওয়ার আগে বিদ্যমান কোড স্টাইল অনুসরণ করুন এবং Electron এবং ওয়েব মোড উভয়েই আপনার পরিবর্তনগুলো পরীক্ষা করুন। বিল্ড এবং টেস্টের নির্দেশনার জন্য [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) দেখুন।

<br/>

**সমস্যা রিপোর্ট করা:** [GitHub](https://github.com/wsj-br/transrewrt/issues)-এ একটি ইস্যু খুলুন। আপনার প্ল্যাটফর্ম (উইন্ডোজ / লিনাক্স / ডকার) এবং অ্যাপের ভার্সন (About ডায়ালগে বা রিলিজ পৃষ্ঠায় প্রদর্শিত) অবশ্যই উল্লেখ করুন।

<br/><br/>

<a id="disclaimer"></a>

## ডিসক্লেইমার

পণ্যের নাম এবং আইকনগুলি এদের সংশ্লিষ্ট মালিকদের সম্পত্তি এবং শুধুমাত্র চিহ্নিতকরণের উদ্দেশ্যে ব্যবহৃত হয়েছে। উল্লেখিত কোন ব্র্যান্ডের সাথে এই সফটওয়্যারের কোন সম্পর্ক নেই এবং এদের দ্বারা অনুমোদিতও নয়।

<br/><br/>

<a id="license"></a>
## লাইসেন্স

কপিরাইট © 2026 ওয়ালডিমার স্কুডেলার জুনিয়র।

[আপাচি লাইসেন্স 2.0](LICENSE)