---
translated_at: "2026-03-25T22:10:41.368Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
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

AI-চালিত টেক্সট টুল: ভাষা অনুবাদ, বিভিন্ন ধরনে পুনঃলেখা এবং কাস্টম প্রম্পট দিয়ে রূপান্তর – একাধিক AI প্রদানকারী ব্যবহার করে (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI এবং স্থানীয় Ollama)। ডেস্কটপ অ্যাপ (Electron) বা স্ব-হোস্টেড ওয়েব অ্যাপ (Docker) হিসেবে চালানো যায়।

- **অনুবাদ** — দুইশতাধিক ভাষায়, স্বয়ংক্রিয়ভাবে উৎস ভাষা শনাক্তকরণ সহ
- **পুনঃলেখা** — ব্যাকরণ ঠিক করা, পরিষ্কারতা বাড়ানো, আনুষ্ঠানিক/অনানুষ্ঠানিক, সংক্ষেপণ, প্রসারিত করা, প্রযুক্তিগত শৈলীতে
- **রূপান্তর** — কাস্টম AI প্রম্পট; প্রম্পট তৈরি ও পরিচালনা করা, প্রম্পট অনুযায়ী লক্ষ্য ভাষা নির্বাচন (ঐচ্ছিক)
- **ইতিহাস** — পূর্ণ ক্রিয়াকলাপের ইতিহাস সহ ইনপুট/আউটপুট টেক্সট, ফিল্টার এবং রপ্তানির সুবিধা
- **মডেল ও খরচ** — কোনো কনফিগার করা প্রদানকারী থেকে মডেল নির্বাচন; লগ, মডেল/ক্রিয়াকলাপ/দিন অনুযায়ী সারসংক্ষেপ সহ খরচ ও ব্যবহারের ড্যাশবোর্ড
- **ইউআই** — বহুভাষিক ইন্টারফেস (30+ ভাষা, RTL সমর্থন), ফন্টস, ...
- **ওয়েব মোড** — প্রশাসক ভূমিকা সহ একাধিক ব্যবহারকারীর জন্য সমর্থন
- **ডেস্কটপ** — Windows এবং Linux-এর জন্য Electron অ্যাপ
- **স্ব-হোস্টেড** — amd64 & arm64 (রাস্পবেরি পাই প্রস্তুত) জন্য Docker ছবি

ইনস্টল করার পর, সম্পূর্ণ বৈশিষ্ট্যগুলির জন্য দেখুন **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)**.

<small>**অন্যান্য ভাষায় পড়ুন:** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI এবং নথি অনুবাদ সম্পর্কে নোট:** মূল ইংরেজি (UK) ছাড়া সমস্ত ইন্টারফেস ভাষা AI মডেল ব্যবহার করে অনূদিত হয়েছে; শব্দচয়ন অস্পষ্ট বা ত্রুটিপূর্ণ হতে পারে।

</small>

<br/>

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


- [দ্রুত শুরু করুন](#quick-start)
- [ইনস্টলেশন](#installation)
  - [উইন্ডোজ (Electron)](#windows-electron)
  - [লিনাক্স (Electron)](#linux-electron)
  - [ডকার](#docker)
- [একটি ওপেনরাউটার এপিআই কী পাওয়া](#getting-an-openrouter-api-key)
- [কনফিগারেশন এবং পরিবেশ](#configuration-and-environment)
- [ডেভেলপমেন্ট এবং আর্কিটেকচার](#development-and-architecture)
- [রিলিজ এবং ট্যাগ](#releases-and-tags)
- [অবদান রাখা](#contributing)
- [দাবি অস্বীকার](#disclaimer)
- [লাইসেন্স](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## দ্রুত শুরু করুন

**ডকার (সেলফ-হোস্টিংয়ের জন্য সুপারিশকৃত)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key`-এর জায়গায় [OpenRouter API key](https://openrouter.ai/keys)-এর সাথে আপনার কী ব্যবহার করুন (অথবা অন্যান্য প্রোভাইডার কী সেট করুন; দেখুন [কনফিগারেশন](#configuration-and-environment))। [http://localhost:5000](http://localhost:5000) খুলুন এবং সার্ভিসটি প্রকাশ করার আগে ডিফল্ট অ্যাডমিন পাসওয়ার্ড পরিবর্তন করুন।

<br/>

> ℹ️ **দ্রষ্টব্য**<br/>
> ডকারে, LLM ক্রেডেনশিয়ালগুলি `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, ... এর মতো পরিবেশ ভেরিয়েবল ব্যবহার করে সেট করা হয় (ওয়েব UI-তে নয়)। ডেস্কটপে (Electron) আপনি **Settings → API**-তে কী কনফিগার করেন।

<br/>

**উইন্ডোজ**

[রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে সর্বশেষ `Transrewrt Setup x.y.z.exe` ডাউনলোড করুন, ইনস্টলারটি চালান, তারপর স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে চালু করুন। **Settings → API**-এ আপনার API কীগুলি প্রবেশ করান। আপনাকে অন্তত একটি প্রোভাইডার কনফিগার করতে হবে, বিনামূল্যে মডেলের জন্য ওপেনরাউটার সাধারণত ব্যবহৃত হয়।

<br/>

**লিনাক্স**

[রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে আপনার CPU-এর জন্য `.AppImage` ডাউনলোড করুন (`x64` সাধারণ PC-এর জন্য, `arm64` অনেক ARM ডিভাইসের জন্য, রাস্পবেরি পাই 4+ সহ), তারপর:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

আপনার API কীগুলি **Settings → API**-এ প্রবেশ করান। আপনাকে অন্তত একটি প্রোভাইডার কনফিগার করতে হবে, বিনামূল্যে মডেলের জন্য ওপেনরাউটার সাধারণত ব্যবহৃত হয়।

Debian/Ubuntu-এ আপনাকে প্রথমে অতিরিক্ত নির্ভরতা ইনস্টল করতে হতে পারে:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

বিস্তারিত জানতে [ইনস্টলেশন → লিনাক্স](#linux-electron) দেখুন।

<br/>

> ℹ️ **দ্রষ্টব্য**<br/>
> ম্যাকওএস বর্তমানে সমর্থিত নয়। উইন্ডোজ, লিনাক্স এবং ডকারের জন্য Transrewrt উপলভ্য।

<br/>

অ্যাপটি চালু হওয়ার পর, টেক্সট অনুবাদ, পুনরায় লেখা এবং রূপান্তর করা, অনুরোধগুলি পরিচালনা করা এবং মডেল কনফিগার করার পদ্ধতি জানতে **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন।

<br/><br/>

<a id="installation"></a>
## ইনস্টলেশন

<a id="windows-electron"></a>
### উইন্ডোজ (Electron)

- [রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে সর্বশেষ ইনস্টলার ডাউনলোড করুন।
- `.exe` ফাইলটি চালান এবং ইনস্টলারের নির্দেশনা অনুসরণ করুন।
- প্রথম বার চালানোর সময়: স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে অ্যাপটি শুরু করুন।

<br/>

<a id="linux-electron"></a>
### লিনাক্স (Electron)

- [রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে সঠিক `.AppImage` ডাউনলোড করুন (`x64` বা `arm64`)।
- চালান: x86_64/amd64-এ `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`, অথবা ARM64-এ `...-arm64.AppImage` ফাইলনেম ব্যবহার করুন।
- অতিরিক্ত নির্ভরতা (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- আরও জানতে [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) দেখুন।

<br/>

<a id="docker"></a>
### ডকার

- পুল করুন: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- পরিবেশের মাধ্যমে অন্তত একটি প্রোভাইডার কী সেট করুন (যেমন OpenRouter-এর জন্য `OPENROUTER_KEY`)। রহস্য ইমেজে স্থায়ীভাবে না রাখতে `-e` বা `docker compose` / `.env` এর মাধ্যমে ভেরিয়েবলগুলি পাস করুন।
- প্রোভাইডার কীগুলি ওয়েব UI-তে প্রবেশ করানো **হয় না**; সার্ভার পরিবেশ থেকে এগুলি পড়ে।

উদাহরণ - স্থায়িত্বের জন্য নামকৃত ভলিউম (env এর মাধ্যমে OpenRouter কী):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| বিকল্প | বিবরণ |
|--------|--------|
| পোর্ট | `5000` (`-p 5000:5000` দিয়ে ম্যাপ করুন) |
| ভলিউম | কনফিগ এবং ডাটাবেসের স্থায়িত্বের জন্য `/app/data` মাউন্ট করুন |
| পরিবেশ ভেরিয়েবল | `PORT`, `CONFIG_PATH`, পাশাপাশি LLM কী (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - দেখুন [কনফিগারেশন](#configuration-and-environment) |

সোর্স থেকে বিল্ড করুন এবং চালান: `docker compose up --build -d` বা `pnpm docker:up` - দেখুন [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## ওপেনরাউটার এপিআই কী পাওয়া

ট্রান্সরিওয়ার্ট একাধিক এআই প্রদানকারীর সমর্থন করে। [OpenRouter](https://openrouter.ai) একটি জনপ্রিয় পছন্দ কারণ এটি একটি মূল কী-এর অধীনে অনেকগুলি মডেলকে একত্রিত করে এবং ফ্রি মডেল সরবরাহ করে।

1. [openrouter.ai](https://openrouter.ai)-এ সাইন আপ করুন অথবা লগ ইন করুন।
2. [Keys](https://openrouter.ai/keys) পৃষ্ঠাটি খুলুন এবং একটি নতুন কী তৈরি করুন (এটি নামকরণ করুন, এবং ঐচ্ছিকভাবে ক্রেডিট সীমা সেট করুন)। আপনি ক্রেডিট না যোগ করেই ফ্রি মডেল ব্যবহার করতে পারেন।
3. **ডেস্কটপ (ইলেকট্রন):** **সেটিংস → এপিআই**-এ কীগুলি পেস্ট করুন। **ডকার:** `OPENROUTER_KEY` এর মতো পরিবেশ ভেরিয়েবল সেট করুন (দেখুন [দ্রুত শুরু](#quick-start))।

অনুবাদ, পুনঃলেখন বা রূপান্তরের জন্য OpenRouter-এর **বডি বিল্ডার** মডেল ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ব্যবহার করবেন না: এটি সম্পন্ন পাঠ্য নয় বরং JSON অনুরোধ পেলোড ফেরত দেয়। ব্যবহারকারী গাইডে [সেটিংস → মডেল](USER-GUIDE.bn.md#models) দেখুন।

আপনি অন্যান্য প্রদানকারীদের (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) বা [Ollama](https://ollama.com)-এর সাথে স্থানীয়ভাবে মডেল চালাতে পারেন। সমর্থিত প্রদানকারী এবং পরিবেশ ভেরিয়েবলগুলির সম্পূর্ণ তালিকার জন্য [কনফিগারেশন](#configuration-and-environment) দেখুন।

> ⚠️ **সতর্কবার্তা**<br/>
> আপনি যদি অন্য ডিভাইস, কনটেইনার বা সেবা থেকে Ollama ব্যবহার করেন, তবে আপনাকে বাহ্যিক সংযোগ (শুধুমাত্র localhost নয়) অনুমতি দেওয়ার জন্য Ollama কনফিগার করতে হবে।

সীমা, BYOK, এবং আরও বিস্তারিত জানার জন্য [OpenRouter প্রমাণীকরণ](https://openrouter.ai/docs/api/reference/authentication) দেখুন।

<br/><br/>

<a id="configuration-and-environment"></a>
## কনফিগারেশন এবং পরিবেশ

**কনফিগ ফাইল অবস্থান**

| বিন্যাস         | কনফিগ অবস্থান                                   |
| ------------------ | ------------------------------------------------- |
| ইলেকট্রন (উইন্ডোজ) | `%APPDATA%\transrewrt\`                           |
| ইলেকট্রন (লিনাক্স)   | `~/.config/transrewrt/`                           |
| ওয়েব / ডকার       | `/app/data/config.json` (স্থায়ী রাখতে ভলিউম ব্যবহার করুন) |

<br/>

**পরিবেশ ভেরিয়েবল** (শুধুমাত্র ওয়েব/ডকার; ইলেকট্রন স্থানীয় কনফিগ ফাইল ব্যবহার করে)

| ভেরিয়েবল         | ডিফল্ট                 | বিবরণ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | সার্ভার শোনার পোর্ট |
| `CONFIG_PATH`    | `/app/data/config.json` | কনফিগ ফাইলের পাথ |
| `OPENROUTER_KEY` | *(খালি)*               | OpenRouter এপিআই কী |
| `OPENAI_KEY`     | *(খালি)*               | OpenAI এপিআই কী |
| `CEREBRAS_KEY`   | *(খালি)*               | Cerebras এপিআই কী |
| `ANTHROPIC_KEY`  | *(খালি)*               | Anthropic এপিআই কী |
| `GOOGLE_KEY`     | *(খালি)*               | Google Gemini এপিআই কী |
| `DEEPSEEK_KEY`   | *(খালি)*               | DeepSeek এপিআই কী |
| `GROQ_KEY`       | *(খালি)*               | Groq এপিআই কী |
| `MISTRAL_KEY`    | *(খালি)*               | Mistral এপিআই কী |
| `OLLAMA_URL`     | *(খালি)*               | Ollama বেস URL (উদাহরণস্বরূপ `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(খালি)*               | xAI এপিআই কী |

শুধুমাত্র আপনি যে প্রদানকারীগুলো ব্যবহার করছেন তা কনফিগার করুন। মডেল আইডি নেমস্পেসযুক্ত (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ইত্যাদি)।

**খরচ প্রদর্শন:** OpenRouter প্রযোজ্য ক্ষেত্রে যথাযথ বিল করা খরচ ফেরত দেয়। অন্যান্য প্রদানকারীরা OpenRouter-এর পাবলিক মডেল মূল্য থেকে **আনুমানিক** খরচ ব্যবহার করে যখন একটি OpenRouter কী উপলব্ধ থাকে; অন্যথায়, non-OpenRouter খরচ `0` হিসাবে দেখানো হতে পারে। আনুমানিকগুলি বিল নয়।

<br/>

**ডেটা এবং স্থায়িত্ব:** ডকারের ক্ষেত্রে, কনটেইনার পুনরারম্ভের সময় `config.json` এবং SQLite ডাটাবেজ স্থায়ী রাখতে `/app/data`-এ একটি ভলিউম মাউন্ট করুন। ভলিউম ছাড়া, কনটেইনার বন্ধ হয়ে গেলে সমস্ত ডেটা হারিয়ে যাবে।

**ডেভেলপারদের জন্য:** পুরনো একক কী কনফিগকে প্রতিস্থাপন করে আসা পরিবর্তনগুলি পুল করার পর, আপনার স্থানীয় ফাইল এখনও সরানো ক্ষেত্রগুলি (`api_key`, `api_url`, প্রক্সি বিকল্প) ব্যবহার করলে `data/config.json` ফাইল রিসেট বা নতুন ডিফল্ট আকার সহ `src/config-defaults/config_default.json` থেকে একত্রিত করুন।

<br/>

**ওয়েব প্রমাণীকরণ:**

- ডিফল্ট অ্যাডমিন: `admin` / `transrewrt26`.
- **সেটিংস → ব্যবহারকারীদের** মধ্যে ব্যবহারকারীদের পরিচালনা করুন।
- পাসওয়ার্ড রিসেট করুন: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (উৎস থেকে: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **সতর্কবার্তা**<br/>
> যেকোনো নেটওয়ার্ক-এক্সেসিবল হোস্টে ডিফল্ট অ্যাডমিন পাসওয়ার্ড তাৎক্ষণিক পরিবর্তন করুন।

<br/>

ফন্ট, মডেল, ভাষা ইত্যাদি মতো কী সেটিংস অ্যাপ্লিকেশন সেটিংসে উপলব্ধ।

<br/><br/>

<a id="development-and-architecture"></a>

## ডেভেলপমেন্ট এবং স্থাপত্য

- **ডেভেলপমেন্ট:** সেটআপ, বিল্ড, পরীক্ষা এবং প্রকাশ (Electron, ওয়েব, Docker) - দেখুন **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**।
- **স্থাপত্য ও সিস্টেম ওভারভিউ:** ফোল্ডার স্ট্রাকচার, টেক স্ট্যাক, ডিজাইন সিদ্ধান্ত - দেখুন **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**।

<br/><br/>

<a id="releases-and-tags"></a>
## রিলিজ এবং ট্যাগ

- **Git ট্যাগ** `v`* (যেমন `v1.0.10`) [রিলিজ ওয়ার্কফ্লো](.github/workflows/release.yml) সক্রিয় করে। **গিটহাব রিলিজ**-এ উইন্ডোজ ইনস্টলার (`.exe`) এবং লিনাক্স AppImage ( **x64** এবং **arm64** ) সংযুক্ত করা হয়।
- **ডকার ইমেজ** `ghcr.io/wsj-br/transrewrt`-এ প্রকাশিত হয়। ইমেজ ট্যাগগুলি Git সংস্করণের সাথে মেলে (যেমন `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) এবং `latest`-এর সাথে। মাল্টি-আর্ক: `linux/amd64` এবং `linux/arm64` (যেমন রাস্পবেরি পাই)।

<br/><br/>

<a id="contributing"></a>
## অবদান

1. রিপোজিটরি ফর্ক করুন।
2. একটি ফিচার ব্রাঞ্চ তৈরি করুন: `git checkout -b feature/my-feature`
3. স্পষ্ট মেসেজ দিয়ে আপনার পরিবর্তনগুলি কমিট করুন।
4. পুশ করুন এবং `main`-এর বিরুদ্ধে একটি পুল রিকোয়েস্ট খুলুন।

আপনি জমা দেওয়ার আগে বিদ্যমান কোড স্টাইল অনুসরণ করুন এবং Electron এবং ওয়েব মোড উভয়েই আপনার পরিবর্তনগুলি পরীক্ষা করুন। বিল্ড এবং পরীক্ষার নির্দেশাবলীর জন্য [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) দেখুন।

<br/>

**সমস্যা রিপোর্ট করা:** [গিটহাবে](https://github.com/wsj-br/transrewrt/issues) একটি ইস্যু খুলুন। আপনার প্ল্যাটফর্ম (উইন্ডোজ / লিনাক্স / ডকার) এবং অ্যাপ সংস্করণ (প্রদর্শিত 'কী সম্পর্কে' ডায়ালগ বা রিলিজ পৃষ্ঠায়) অন্তর্ভুক্ত করুন।

<br/><br/>

<a id="disclaimer"></a>
## ডিসক্লেইমার

পণ্যের নাম এবং আইকনগুলি তাদের সংশ্লিষ্ট মালিকদের সম্পত্তি, এবং শুধুমাত্র চেনাশোনার উদ্দেশ্যে ব্যবহৃত হয়। এই সফটওয়্যার উল্লিখিত কোনও ব্র্যান্ডের সাথে সংশ্লিষ্ট বা তাদের দ্বারা অনুমোদিত নয়।

<br/><br/>

<a id="license"></a>
## লাইসেন্স

কপিরাইট © 2026 ওয়ালডেমার স্কুডেলার জুনিয়র।

[Apache License 2.0](LICENSE)