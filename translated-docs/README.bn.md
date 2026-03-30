---
translation_last_updated: '2026-03-30T00:45:51.906Z'
source_file_mtime: '2026-03-29T23:51:36.506Z'
source_file_hash: fa17b974cbf42a93
translation_language: bn
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt ব্যানার"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="সংস্করণ"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="লাইসেন্স: অ্যাপাচি 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="প্ল্যাটফর্ম">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-চালিত টেক্সট টুল: বিভিন্ন ভাষায় অনুবাদ করুন, বিভিন্ন শৈলীতে পুনর্লিখন করুন এবং কাস্টম প্রম্পট ব্যবহার করে রূপান্তর করুন — একাধিক AI প্রদানকারী (ওপেনরাউটার, ওপেনএআই, অ্যানথ্রোপিক, গুগল জেমিনি, ডিপসিক, গ্রোক, মিস্ট্রাল, এক্সএআই এবং স্থানীয় ওলামা) ব্যবহার করে। ডেস্কটপ অ্যাপ (ইলেকট্রন) বা স্ব-হোস্টেড ওয়েব অ্যাপ (ডকার) হিসাবে চালানো যায়।

- **অনুবাদ** — ডজন খানেক ভাষার মধ্যে, স্বয়ংক্রিয় উৎস সনাক্তকরণ সহ
- **পুনর্লিখন** — ব্যাকরণ ঠিক করুন, স্পষ্টতা উন্নত করুন, আনুষ্ঠানিক/অনানুষ্ঠানিক, সংক্ষিপ্ত করুন, বিস্তৃত করুন, প্রযুক্তিগত
- **রূপান্তর** — কাস্টম AI প্রম্পট; প্রম্পট তৈরি করুন এবং পরিচালনা করুন, প্রতিটি প্রম্পটের জন্য ঐচ্ছিক লক্ষ্য ভাষা
- **ইতিহাস** — ইনপুট/আউটপুট টেক্সট, ফিল্টারিং এবং এক্সপোর্ট সহ সম্পূর্ণ কার্যকরী ইতিহাস
- **মডেল এবং খরচ** — যেকোনো কনফিগার করা প্রদানকারী থেকে মডেল নির্বাচন করুন; লগ, মডেল/অপারেশন/দিন অনুযায়ী সারাংশ সহ খরচ এবং ব্যবহারের ড্যাশবোর্ড
- **UI** — বহুভাষিক ইন্টারফেস (30+ ভাষা, RTL সমর্থন), ফন্ট, ...
- **ওয়েব মোড** — অ্যাডমিন ভূমিকা সহ বহু-ব্যবহারকারী সমর্থন
- **ডেস্কটপ** — উইন্ডোজ এবং লিনাক্সের জন্য ইলেকট্রন অ্যাপ
- **স্ব-হোস্টেড** — amd64 এবং arm64 (রাস্পবেরি পাই-রেডি) এর জন্য ডকার ইমেজ

ইনস্টল করার পর, সমস্ত বৈশিষ্ট্যের সম্পূর্ণ গাইড দেখতে **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন।

<small>**অন্যান্য ভাষায় পড়ুন:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI এবং ডকুমেন্টেশন অনুবাদ সম্পর্কে দ্রষ্টব্য:** মূল ইংরেজি (যুক্তরাজ্য) ছাড়া সমস্ত ইন্টারফেস ভাষা AI মডেল ব্যবহার করে অনুবাদ করা হয়েছে; শব্দচয়ন অস্পষ্ট হতে পারে বা ত্রুটি থাকতে পারে।

</small>

<br/>

<a id="screenshots"></a>
## স্ক্রিনশট

**ভাষা নির্বাচক**

![Language selector](../images/screenshots/bn/language-selector.png)

**অনুবাদ**

![Translate](../images/screenshots/bn/translate.png)

**রূপান্তর - প্রম্পট সম্পাদক**

![Transform - prompt editor](../images/screenshots/bn/transform-prompt-edit.png)

**ড্যাশবোর্ড**

![Dashboard summary — usage](../images/screenshots/bn/dashboard-summary.png)

**ইতিহাস**

![History](../images/screenshots/bn/history.png)

**সেটিংস - মডেল নির্বাচন**

![Settings - model selection](../images/screenshots/bn/settings-models.png)

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
  - [টাইমজোন কনফিগার করা](#configuring-the-timezone)
- [ওপেনরাউটার API কী পাওয়া](#getting-an-openrouter-api-key)
- [কনফিগারেশন এবং পরিবেশ](#configuration-and-environment)
- [ডেভেলপমেন্ট এবং আর্কিটেকচার](#development-and-architecture)
- [সমস্যা রিপোর্ট করা](#reporting-issues)
- [দাবি অস্বীকার](#disclaimer)
- [লাইসেন্স](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## দ্রুত শুরু করুন

**ডকার (স্ব-হোস্টিংয়ের জন্য সুপারিশকৃত)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key`-এর স্থানে আপনার [ওপেনরাউটার API কী](https://openrouter.ai/keys) ব্যবহার করুন (অথবা অন্যান্য প্রদানকারীদের কী সেট করুন; [কনফিগারেশন](#configuration-and-environment) দেখুন)। [http://localhost:5000](http://localhost:5000) খুলুন এবং সার্ভিস প্রকাশ করার আগে ডিফল্ট অ্যাডমিন পাসওয়ার্ড পরিবর্তন করুন।

<br/>

> ℹ️ **নোট**<br/>
> ডকারে, LLM ক্রেডেনশিয়ালগুলি পরিবেশ ভেরিয়েবল যেমন `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … দিয়ে সেট করা হয় (ওয়েব UI-তে নয়)। ডেস্কটপে (ইলেকট্রন) আপনি **সেটিংস → API**-এ কী কনফিগার করবেন।

<br/>

**উইন্ডোজ**

[রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে সর্বশেষ `Transrewrt সেটআপ x.y.z.exe` ডাউনলোড করুন, ইনস্টলার চালান, তারপর স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে চালু করুন। **সেটিংস → API**-এ আপনার API কী প্রবেশ করান। আপনাকে কমপক্ষে একটি প্রদানকারী কনফিগার করতে হবে, বিনামূল্যে মডেলের জন্য ওপেনরাউটার সাধারণত ব্যবহৃত হয়।

<br/>

**লিনাক্স**

[রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে আপনার CPU-এর জন্য `.AppImage` ডাউনলোড করুন (`x64` সাধারণ পিসি-এর জন্য, `arm64` অনেক ARM ডিভাইসের জন্য, রাস্পবেরি পাই 4+ সহ), তারপর:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**সেটিংস → API**-এ আপনার API কী প্রবেশ করান। আপনাকে কমপক্ষে একটি প্রদানকারী কনফিগার করতে হবে, বিনামূল্যে মডেলের জন্য ওপেনরাউটার সাধারণত ব্যবহৃত হয়।

ডেবিয়ান/উবুন্টুতে আপনার প্রথমে অতিরিক্ত ডিপেন্ডেন্সি ইনস্টল করতে হতে পারে:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

বিস্তারিত জানতে [ইনস্টলেশন → লিনাক্স](#linux-electron) দেখুন।

<br/>

> ℹ️ **নোট**<br/>
> ম্যাকওএস বর্তমানে সমর্থিত নয়। উইন্ডোজ, লিনাক্স এবং ডকারের জন্য Transrewrt উপলব্ধ।

<br/>

অ্যাপটি চালু হওয়ার পর, টেক্সট অনুবাদ, পুনর্লিখন এবং রূপান্তর করা, প্রম্পট পরিচালনা করা এবং মডেল কনফিগার করা সম্পর্কে জানতে **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন।

<br/><br/>

<a id="installation"></a>
## ইনস্টলেশন

<a id="windows-electron"></a>
### উইন্ডোজ (ইলেকট্রন)

- [রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে সর্বশেষ ইনস্টলার ডাউনলোড করুন।
- `.exe` ফাইলটি চালান এবং ইনস্টলার অনুসরণ করুন।
- প্রথম বার চালানোর সময়: স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে অ্যাপটি শুরু করুন।

<br/>

> ℹ️ **নোট**<br/>
> উইন্ডোজ এই ধরনের নিরাপত্তা সতর্কতা দেখাতে পারে (সাইন না করা/স্বাধীন অ্যাপের জন্য সাধারণ):
>   - **ব্যবহারকারী অ্যাকাউন্ট কন্ট্রোল (UAC)**: "আপনি কি আপনার ডিভাইসে অপরিচিত প্রকাশকের এই অ্যাপটির পরিবর্তন করার অনুমতি দিতে চান?" → **হ্যাঁ** ক্লিক করুন।
>   - **মাইক্রোসফট ডিফেন্ডার স্মার্টস্ক্রিন**: "উইন্ডোজ আপনার পিসি সুরক্ষিত করেছে" → **আরও তথ্য** ক্লিক করুন → **তবুও চালান**।
>
> কারণ অ্যাপটি মাইক্রোসফট বা বড় প্রকাশক দ্বারা সাইন করা নয়—এটি নিরাপদ যদি আমাদের অফিসিয়াল গিটহাব রিলিজ থেকে ডাউনলোড করা হয়
> (নীচের SHA256 চেকসাম যাচাই করুন)।

<br/>

<a id="linux-electron"></a>
### লিনাক্স (ইলেকট্রন)

- [রিলিজগুলি](https://github.com/wsj-br/transrewrt/releases) থেকে মিলে যাওয়া `.AppImage` (`x64` বা `arm64`) ডাউনলোড করুন।
- চালান: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64-এ, অথবা ARM64-এ `...-arm64.AppImage` ফাইলনাম ব্যবহার করুন।
- অতিরিক্ত নির্ভরতা (ডেবিয়ান/উবুন্টু): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- আরও জানতে [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) দেখুন।

<br/>

<a id="docker"></a>
### ডকার

- পুল করুন: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- কমপক্ষে একটি প্রদানকারী কী পরিবেশের মাধ্যমে সেট করুন (উদাহরণস্বরূপ ওপেনরাউটারের জন্য `OPENROUTER_API_KEY`)। গোপন তথ্য ইমেজে না থাকার জন্য `-e` বা `docker compose` / `.env` ব্যবহার করে চলকগুলি পাস করুন।
- প্রদানকারী কীগুলি **ওয়েব ইউআই-এ প্রবেশ করা হয় না**; সার্ভার পরিবেশ থেকে এগুলি পড়ে।

উদাহরণ - স্থায়িত্বের জন্য নামযুক্ত ভলিউম (পরিবেশের মাধ্যমে ওপেনরাউটার কী):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

অথবা আপনি যদি ডকার কম্পোজ ব্যবহার করতে পছন্দ করেন, তবে ব্যবহার করুন:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

`PORT`, `CONFIG_PATH`, `TZ`, এবং এলএলএম কী (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) সহ সমস্ত পরিবেশ চলকের জন্য [কনফিগারেশন](#configuration-and-environment) দেখুন।

<a id="configuring-the-timezone"></a>
### সময়ক্ষেত্র কনফিগার করা

অ্যাপ্লিকেশন ইন্টারফেসের তারিখ এবং সময় **ব্রাউজারের** স্থানীয় সেটিংস এবং সময়ক্ষেত্র অনুসরণ করে। **সার্ভার-সাইড** আচরণের (লগিং এবং অনুরূপ) জন্য, কনটেইনার `TZ` পরিবেশ চলক ব্যবহার করে। ডিফল্ট হল `TZ=Europe/London`।

অন্য সময়ক্ষেত্র ব্যবহার করতে, আপনার কম্পোজ ফাইলে `TZ` সেট করুন, উদাহরণস্বরূপ:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

অথবা কনটেইনার চালানোর সময় পাস করুন (ডকার):

```bash
--env TZ=America/Sao_Paulo
```

অনেক লিনাক্স হোস্টে আপনি সিস্টেম সময়ক্ষেত্রের নাম কপি করতে পারেন এইভাবে:

```bash
echo TZ=\"$(</etc/timezone)\"
```

[tz ডাটাবেস](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (উইকিপিডিয়া) এ বৈধ সময়ক্ষেত্রের নামগুলির একটি তালিকা রয়েছে।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## ওপেনরাউটার এপিআই কী পাওয়া

ট্রান্সরিওয়ার্ট একাধিক এআই প্রদানকারীকে সমর্থন করে। [ওপেনরাউটার](https://openrouter.ai) একটি জনপ্রিয় পছন্দ কারণ এটি একটি কী-এর অধীনে অনেকগুলি মডেল একত্রিত করে এবং বিনামূল্যে মডেল অফার করে।

1. [openrouter.ai](https://openrouter.ai) এ সাইন আপ করুন বা লগ ইন করুন।
2. [কী](https://openrouter.ai/keys) পৃষ্ঠাটি খুলুন এবং একটি নতুন কী তৈরি করুন (এটি নাম দিন, এবং ঐচ্ছিকভাবে একটি ক্রেডিট সীমা সেট করুন)। ক্রেডিট যোগ না করেই আপনি বিনামূল্যে মডেলগুলি ব্যবহার করতে পারেন।
3. **ডেস্কটপ (ইলেকট্রন):** **সেটিংস → এপিআই**-এ কী পেস্ট করুন। **ডকার:** `OPENROUTER_API_KEY` এর মতো পরিবেশ চলক সেট করুন (দেখুন [দ্রুত শুরু](#quick-start))।

অনুবাদ, পুনর্লিখন বা রূপান্তরের জন্য ওপেনরাউটারের **বডি বিল্ডার** মডেল ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ব্যবহার করবেন না: এটি সম্পূর্ণ টেক্সট না দিয়ে জেসন অনুরোধ পেলোড ফেরত দেয়। ব্যবহারকারী গাইডে [সেটিংস → মডেল](USER-GUIDE.bn.md#models) দেখুন।

আপনি অন্যান্য প্রদানকারী (ওপেনএআই, অ্যানথ্রোপিক, গুগল জেমিনি, ডিপসিক, গ্রোক, মিস্ট্রাল, এক্সএআই, সেরেব্রাস) ব্যবহার করতে পারেন বা [ওলামা](https://ollama.com) সহ স্থানীয়ভাবে মডেল চালাতে পারেন। সমর্থিত প্রদানকারী এবং পরিবেশ চলকগুলির সম্পূর্ণ তালিকার জন্য [কনফিগারেশন](#configuration-and-environment) দেখুন।

> ⚠️ **সতর্কতা**<br/>
> যদি আপনি অন্য ডিভাইস, কনটেইনার বা সেবা থেকে ওলামা ব্যবহার করেন, তবে মনে রাখবেন ওলামা কে বাহ্যিক সংযোগ (শুধুমাত্র লোকালহোস্ট নয়) অনুমতি দেওয়ার জন্য কনফিগার করতে হবে।

সীমাবদ্ধতা, BYOK এবং আরও অনেক কিছুর জন্য, [ওপেনরাউটার প্রমাণীকরণ](https://openrouter.ai/docs/api/reference/authentication) দেখুন।

<br/><br/>

<a id="configuration-and-environment"></a>
## কনফিগারেশন এবং পরিবেশ

**কনফিগ ফাইলের অবস্থান**

| ডেপ্লয়মেন্ট         | কনফিগের অবস্থান                                   |
| ------------------ | ------------------------------------------------- |
| ইলেকট্রন (উইন্ডোজ) | `%APPDATA%\transrewrt\`                           |
| ইলেকট্রন (লিনাক্স)   | `~/.config/transrewrt/`                           |
| ওয়েব / ডকার       | `/app/data/config.json` (স্থায়ী করতে ভলিউম ব্যবহার করুন)

<br/>

**পরিবেশ চলক** (শুধুমাত্র ওয়েব/ডকারের জন্য; ইলেকট্রন স্থানীয় কনফিগ ফাইল ব্যবহার করে)

| চলক         | ডিফল্ট                 | বিবরণ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | সার্ভার শোনার পোর্ট |
| `CONFIG_PATH`    | `/app/data/config.json` | কনফিগ ফাইলের পথ |
| `TZ`             | `Europe/London`         | সার্ভার-সাইড সময়ের জন্য IANA সময়ক্ষেত্র (লগিং ইত্যাদি); UI এখনও ব্রাউজার অনুসরণ করে। দেখুন [ডকার → সময়ক্ষেত্র](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(খালি)*               | ওপেনরাউটার API কী |
| `OPENAI_API_KEY`     | *(খালি)*               | ওপেনএআই API কী |
| `CEREBRAS_API_KEY`   | *(খালি)*               | সেরেব্রাস API কী |
| `ANTHROPIC_API_KEY`  | *(খালি)*               | অ্যানথ্রোপিক API কী |
| `GOOGLE_API_KEY`     | *(খালি)*               | গুগল জেমিনি API কী |
| `DEEPSEEK_API_KEY`   | *(খালি)*               | ডিপসিক API কী |
| `GROQ_API_KEY`       | *(খালি)*               | গ্রোক API কী |
| `MISTRAL_API_KEY`    | *(খালি)*               | মিস্ট্রাল API কী |
| `OLLAMA_URL`     | *(খালি)*               | ওলামা বেস ইউআরএল (যেমন `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(খালি)*               | এক্সএআই API কী

শুধুমাত্র আপনি যে প্রদানকারীদের ব্যবহার করেন তাদের কনফিগার করুন। মডেল আইডি নেমস্পেস করা হয় (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ইত্যাদি)।

**খরচ প্রদর্শন:** ওপেনরাউটার প্রযোজ্য ক্ষেত্রে সঠিক বিল করা খরচ প্রদান করে। অন্যান্য প্রদানকারীরা ওপেনরাউটার কী উপলব্ধ থাকলে ওপেনরাউটারের পাবলিক মডেল মূল্য থেকে **আনুমানিক** খরচ ব্যবহার করে; এটি ছাড়া, ওপেনরাউটার নয় এমন খরচ `0` হিসাবে দেখানো যেতে পারে। অনুমানগুলি চালান নয়।

<br/>

**ডেটা এবং স্থায়িত্ব:** ডকারের জন্য, `/app/data`-এ একটি ভলিউম মাউন্ট করুন যাতে `config.json` এবং SQLite ডাটাবেস কনটেইনার পুনরায় চালু হওয়ার সময় স্থায়ী থাকে। ভলিউম ছাড়া, কনটেইনার থামানোর সময় সমস্ত ডেটা হারিয়ে যায়।

**ডেভেলপারদের জন্য:** পুরানো একক-কী কনফিগকে প্রতিস্থাপন করে পরিবর্তন টানার পর, আপনার স্থানীয় ফাইল এখনও সরানো ক্ষেত্রগুলি ব্যবহার করে (যেমন `api_key`, `api_url`, প্রক্সি বিকল্প) তবে `data/config.json` রিসেট বা মার্জ করুন `src/config-defaults/config_default.json`-এর নতুন ডিফল্ট আকৃতির সাথে।

<br/>

**ওয়েব প্রমাণীকরণ:**

- ডিফল্ট অ্যাডমিন: `admin` / `transrewrt26`।
- **সেটিংস → ব্যবহারকারীরা**-এ ব্যবহারকারীদের পরিচালনা করুন।
- পাসওয়ার্ড রিসেট করুন: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (সোর্স থেকে: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **সতর্কতা**<br/>
> যেকোনো নেটওয়ার্ক-অ্যাক্সেসযোগ্য হোস্টে অবিলম্বে ডিফল্ট অ্যাডমিন পাসওয়ার্ড পরিবর্তন করুন।

<br/>

কী সেটিংস (ফন্ট, মডেল, ভাষা ইত্যাদি) অ্যাপ্লিকেশন সেটিংসে উপলব্ধ।

<br/><br/>

<a id="development-and-architecture"></a>
## ডেভেলপমেন্ট এবং আর্কিটেকচার

- **ডেভেলপমেন্ট:** সেটআপ, বিল্ড, পরীক্ষা এবং ডেপ্লয় (ইলেকট্রন, ওয়েব, ডকার) - দেখুন **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**।
- **আর্কিটেকচার এবং সিস্টেম ওভারভিউ:** ফোল্ডার কাঠামো, টেক স্ট্যাক, ডিজাইন সিদ্ধান্ত - দেখুন **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**।

<br/><br/>

<a id="reporting-issues"></a>
## সমস্যা রিপোর্ট করা

[GitHub](https://github.com/wsj-br/transrewrt/issues) এ একটি ইস্যু খুলুন। আপনার প্ল্যাটফর্ম (Windows / Linux / Docker) এবং অ্যাপ সংস্করণ (About ডায়ালগ বা Releases পৃষ্ঠায় দেখানো হয়েছে) অন্তর্ভুক্ত করুন।

<br/><br/>

<a id="disclaimer"></a>
## ডিসক্লেইমার

পণ্যের নাম ও আইকন তাদের নিজ নিজ মালিকদের সম্পত্তি এবং শুধুমাত্র শনাক্তকরণের উদ্দেশ্যে ব্যবহৃত। এই সফ্টওয়্যারটি উল্লিখিত কোনো ব্র্যান্ডের সাথে সম্পর্কিত বা তাদের দ্বারা অনুমোদিত নয়।

<br/><br/>

<a id="license"></a>
## লাইসেন্স

কপিরাইট © 2026 ওয়ালডেমার স্কুডেলার জুনিয়র।

[Apache License 2.0](../LICENSE)
