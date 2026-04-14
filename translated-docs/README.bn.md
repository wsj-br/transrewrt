---
translation_last_updated: '2026-04-09T23:21:51.802Z'
source_file_mtime: '2026-04-07T18:28:53.551Z'
source_file_hash: 0826245f792850f3
translation_language: bn
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt ব্যানার"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="সংস্করণ"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="লাইসেন্স: অ্যাপাচি ২.০"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="প্ল্যাটফর্ম">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-চালিত টেক্সট টুল: বিভিন্ন ভাষায় অনুবাদ করুন, বিভিন্ন শৈলীতে পুনর্লিখন করুন এবং কাস্টম প্রম্পট ব্যবহার করে রূপান্তর করুন - একাধিক AI প্রদানকারী (ওপেনরাউটার, ওপেনএআই, অ্যানথ্রোপিক, গুগল জেমিনি, ডিপসিক, গ্রোক, মিস্ট্রাল, এক্সএআই এবং স্থানীয় ওলামা) ব্যবহার করে। ডেস্কটপ অ্যাপ (ইলেকট্রন) বা স্ব-হোস্টেড ওয়েব অ্যাপ (ডকার) হিসাবে চালানো যায়।

- **অনুবাদ** - ডজন খানেক ভাষার মধ্যে, স্বয়ংক্রিয় উৎস সনাক্তকরণ সহ
- **পুনর্লিখন** - ব্যাকরণ ঠিক করুন, স্পষ্টতা উন্নত করুন, আনুষ্ঠানিক/অনানুষ্ঠানিক, সংক্ষিপ্ত করুন, বিস্তৃত করুন, প্রযুক্তিগত
- **রূপান্তর** - কাস্টম AI প্রম্পট; প্রম্পট তৈরি করুন এবং পরিচালনা করুন, প্রতিটি প্রম্পটের জন্য ঐচ্ছিক লক্ষ্য ভাষা
- **ইতিহাস** - ইনপুট/আউটপুট টেক্সট, ফিল্টারিং এবং এক্সপোর্ট সহ সম্পূর্ণ কার্যকরী ইতিহাস
- **মডেল এবং খরচ** - যেকোনো কনফিগার করা প্রদানকারী থেকে মডেল নির্বাচন করুন; লগ, মডেল/অপারেশন/দিন অনুযায়ী সারাংশ সহ খরচ এবং ব্যবহারের ড্যাশবোর্ড
- **UI** - বহুভাষিক ইন্টারফেস (30+ ভাষা, RTL সমর্থন), ফন্ট, ...
- **ওয়েব মোড** - অ্যাডমিন ভূমিকা সহ বহু-ব্যবহারকারী সমর্থন
- **ডেস্কটপ** - উইন্ডোজ এবং লিনাক্সের জন্য ইলেকট্রন অ্যাপ
- **স্ব-হোস্টেড** - amd64 এবং arm64 (রাস্পবেরি পাই-রেডি) এর জন্য ডকার ইমেজ

ইনস্টল করার পর, সমস্ত বৈশিষ্ট্যের সম্পূর্ণ গাইড দেখতে **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন।

<small>**অন্যান্য ভাষায় পড়ুন:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI এবং ডকুমেন্টেশন অনুবাদ সম্পর্কে দ্রষ্টব্য:** মূল ইংরেজি (যুক্তরাজ্য) ছাড়া সমস্ত ইন্টারফেস ভাষা AI মডেল ব্যবহার করে অনুবাদ করা হয়েছে; শব্দচয়ন অস্পষ্ট হতে পারে বা ত্রুটি থাকতে পারে।

</small>

<br/>

<a id="table-of-contents"></a>
## সূচিপত্র

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [স্ক্রিনশট](#screenshots)
- [দ্রুত শুরু করা](#quick-start)
- [ওপেনরাউটার এপিআই কী পাওয়া](#getting-an-openrouter-api-key)
- [কনফিগারেশন এবং পরিবেশ](#configuration-and-environment)
- [ডেভেলপমেন্ট এবং আর্কিটেকচার](#development-and-architecture)
- [সমস্যা রিপোর্ট করা](#reporting-issues)
- [ডিসক্লেইমার](#disclaimer)
- [লাইসেন্স](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## স্ক্রিনশট

**ভাষা নির্বাচক**

![Language selector](../images/screenshots/bn/language-selector.png)

**অনুবাদ**

![Translate](../images/screenshots/bn/translate.png)

**রূপান্তর - প্রম্পট সম্পাদক**

![Transform - prompt editor](../images/screenshots/bn/transform-prompt-edit.png)

**ড্যাশবোর্ড**

![Dashboard summary - usage](../images/screenshots/bn/dashboard-summary.png)

**ইতিহাস**

![History](../images/screenshots/bn/history.png)

**সেটিংস - মডেল নির্বাচন**

![Settings - model selection](../images/screenshots/bn/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## দ্রুত শুরু করুন

<details>
<summary><b>ডকার (সেলফ-হোস্টিংয়ের জন্য সুপারিশকৃত)</b></summary>

<a id="docker"></a>

<br/>

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

পরিবেশের মাধ্যমে কমপক্ষে একটি প্রদানকারীর কী সেট করুন (উদাহরণস্বরূপ ওপেনরাউটারের জন্য `OPENROUTER_API_KEY`)। গোপনীয়তা যেন ইমেজে না থাকে তা নিশ্চিত করতে `-e` বা `ডকার কম্পোজ` / `.env` এর মাধ্যমে ভেরিয়েবল পাস করুন। প্রদানকারীর কীগুলি **ওয়েব ইউআই-এ প্রবেশ করানো হয় না**; সার্ভার পরিবেশ থেকে এগুলি পড়ে।

<br/>

> ℹ️ **নোট**<br/>
> ডকারে, LLM ক্রেডেনশিয়ালগুলি পরিবেশ ভেরিয়েবল যেমন `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … দিয়ে সেট করা হয় (ওয়েব UI-তে নয়)। ডেস্কটপে (Electron) আপনি **সেটিংস → API**-তে কী কনফিগার করবেন।

<br/>

অথবা ডকার কম্পোজ ব্যবহার করুন:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

`PORT`, `CONFIG_PATH`, `TZ`, এবং এলএলএম কী (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) সহ সমস্ত পরিবেশ চলকের জন্য [কনফিগারেশন](#configuration-and-environment) দেখুন।

</details>

<br/>

<details>
<summary><b>সার্ভার সময়ক্ষেপ (ডকার)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

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

</details>

<br/>

<details>
<summary><b>উইন্ডোজ</b></summary>

<a id="windows-electron"></a>

<br/>

- [রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে সর্বশেষ `Transrewrt সেটআপ x.y.z.exe` ডাউনলোড করুন।
- `.exe` ফাইলটি চালান এবং ইনস্টলার অনুসরণ করুন।
- প্রথম চালানোর সময়: স্টার্ট মেনু বা ডেস্কটপ শর্টকাট থেকে অ্যাপ শুরু করুন।
- **সেটিংস → এপিআই**-এ আপনার এপিআই কী প্রবেশ করান। আপনাকে কমপক্ষে একটি প্রদানকারী কনফিগার করতে হবে; বিনামূল্যে মডেলের জন্য ওপেনরাউটার সাধারণত ব্যবহৃত হয়।

<br/>

> ℹ️ **নোট**<br/>
> উইন্ডোজ এই ধরনের নিরাপত্তা সতর্কতা দেখাতে পারে (স্বাক্ষরিত নয় বা স্বাধীন অ্যাপের জন্য স্বাভাবিক):
>   - **ব্যবহারকারী অ্যাকাউন্ট কন্ট্রোল (UAC)**: "আপনি কি অজ্ঞাত প্রকাশকের এই অ্যাপটিকে আপনার ডিভাইসে পরিবর্তন করার অনুমতি দিতে চান?" → **হ্যাঁ** ক্লিক করুন।
>   - **মাইক্রোসফট ডিফেন্ডার স্মার্টস্ক্রিন**: "উইন্ডোজ আপনার পিসি সুরক্ষিত করেছে" → **আরও তথ্য** ক্লিক করুন → **তবুও চালান** ক্লিক করুন।
>
> এটি ঘটে কারণ অ্যাপটি মাইক্রোসফট বা কোনো প্রধান প্রকাশক দ্বারা স্বাক্ষরিত নয়-এটি নিরাপদ যদি এটি আমাদের অফিসিয়াল গিটহাব রিলিজ থেকে ডাউনলোড করা হয় (প্রতিটি অ্যাসেটের পাশে [রিলিজ](https://github.com/wsj-br/transrewrt/releases) পৃষ্ঠায় চেকসাম যাচাই করুন)।

<br/>

</details>

<br/>

<details>
<summary><b>লিনাক্স</b></summary>

<a id="linux-electron"></a>

<br/>

[রিলিজ](https://github.com/wsj-br/transrewrt/releases) থেকে আপনার CPU-এর জন্য `.AppImage` ডাউনলোড করুন (`x64` সাধারণ পিসি-এর জন্য, `arm64` অনেক ARM ডিভাইসের জন্য, রাস্পবেরি পাই 4+ সহ), তারপর:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

x86_64/amd64-এ `x64` ফাইলনাম ব্যবহার করুন; ARM64-এ `...-arm64.AppImage` নাম ব্যবহার করুন।

আপনার এপিআই কীগুলি **সেটিংস → এপিআই**-এ প্রবেশ করান। আপনাকে কমপক্ষে একটি প্রদানকারী কনফিগার করতে হবে; বিনামূল্যে মডেলের জন্য ওপেনরাউটার সাধারণত ব্যবহৃত হয়।

**কনসোল মেসেজ:** প্যাকেজ করা লিনাক্স বিল্ড (`x64` এবং `arm64` AppImages) টার্মিনালে নোড অবচয় সতর্কতা চাপিয়ে দেয় (উদাহরণস্বরূপ অন্তর্নির্মিত `punycode` মডিউল)। যদি ক্রোমিয়াম "GLES3 সমর্থিত নয়" এর মতো GPU / EGL ত্রুটি প্রিন্ট করে কিন্তু অ্যাপ কাজ করে, তবে আপনি হার্ডওয়্যার ত্বরণ অক্ষম করে সেগুলি নীরব করতে পারেন:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

এটি amd64-এও প্রযোজ্য; আপনার ডাউনলোড অনুযায়ী ফাইলনাম পরিবর্তন করুন।

ডেবিয়ান/উবুন্টুতে, আপনার ক্রোমিয়াম দ্বারা প্রয়োজনীয় অতিরিক্ত **রানটাইম** লাইব্রেরি প্রয়োজন হতে পারে (এগুলি সাধারণত সম্পূর্ণ ডেস্কটপ ইনস্টলেশনে ইতিমধ্যে উপস্থিত থাকে)। প্রয়োজন হলে নীচের কমান্ডগুলি চালান:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

`libasound2t64`-এর পরিবর্তে `arm64`-এর জন্য `libasound2` ব্যবহার করুন। ন্যূনতম বা কাস্টম ইনস্টলেশনে এখনও `.so` ফাইল অনুপস্থিত হওয়ার কারণে ব্যর্থ হতে পারে। ত্রুটি বার্তায় উল্লিখিত প্যাকেজটি ইনস্টল করুন (সাধারণ অতিরিক্ত: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`)। কিছু পরিবেশে, আপনাকে `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` ব্যবহার করে অ্যাপটি চালাতে হতে পারে।

<br/>

> ℹ️ **নোট**<br/>
> ম্যাকওএস বর্তমানে সমর্থিত নয়। উইন্ডোজ, লিনাক্স এবং ডকারের জন্য Transrewrt উপলব্ধ।

</details>

<br/>

অ্যাপটি চালু হওয়ার পর, টেক্সট অনুবাদ, পুনর্লিখন এবং রূপান্তর করা, প্রম্পট পরিচালনা করা এবং মডেল কনফিগার করা সম্পর্কে জানতে **[ব্যবহারকারী গাইড](USER-GUIDE.bn.md)** দেখুন।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## একটি OpenRouter API কী পাওয়া

ট্রান্সরিওয়ার্ট একাধিক এআই প্রদানকারীকে সমর্থন করে। [ওপেনরাউটার](https://openrouter.ai) একটি জনপ্রিয় পছন্দ কারণ এটি একটি কী-এর অধীনে অনেকগুলি মডেল একত্রিত করে এবং বিনামূল্যে মডেল অফার করে।

1. [openrouter.ai](https://openrouter.ai) এ সাইন আপ করুন বা লগ ইন করুন।
2. [কী](https://openrouter.ai/keys) পৃষ্ঠাটি খুলুন এবং একটি নতুন কী তৈরি করুন (এটি নাম দিন, এবং ঐচ্ছিকভাবে একটি ক্রেডিট সীমা সেট করুন)। ক্রেডিট যোগ না করেই আপনি বিনামূল্যে মডেলগুলি ব্যবহার করতে পারেন।
3. **ডেস্কটপ (ইলেকট্রন):** **সেটিংস → এপিআই**-এ কী পেস্ট করুন। **ডকার:** `OPENROUTER_API_KEY` এর মতো পরিবেশ চলক সেট করুন (দেখুন [দ্রুত শুরু](#quick-start))।

অনুবাদ, পুনর্লিখন বা রূপান্তরের জন্য OpenRouter-এর **বডি বিল্ডার** মডেল ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ব্যবহার করবেন না: এটি সম্পূর্ণ টেক্সট নয়, বরং সেই কাজগুলির জন্য JSON অনুরোধ পেলোড ফেরত দেয়। ব্যবহারকারী গাইডে [সেটিংস → মডেল](USER-GUIDE.bn.md#models) দেখুন।

আপনি অন্যান্য প্রদানকারী (ওপেনএআই, অ্যানথ্রোপিক, গুগল জেমিনি, ডিপসিক, গ্রোক, মিস্ট্রাল, এক্সএআই, সেরেব্রাস) ব্যবহার করতে পারেন বা [ওলামা](https://ollama.com) সহ স্থানীয়ভাবে মডেল চালাতে পারেন। সমর্থিত প্রদানকারী এবং পরিবেশ চলকগুলির সম্পূর্ণ তালিকার জন্য [কনফিগারেশন](#configuration-and-environment) দেখুন।

</br>

> ⚠️ **সতর্কতা**<br/>
> যদি আপনি অন্য ডিভাইস, কনটেইনার বা সেবা থেকে Ollama ব্যবহার করেন, তবে বাহ্যিক সংযোগের অনুমতি দেওয়ার জন্য Ollama কনফিগার করতে ভুলবেন না (শুধুমাত্র localhost নয়)।

<br/><br/>

<a id="configuration-and-environment"></a>
## কনফিগারেশন এবং পরিবেশ

</br>

**কনফিগ ফাইলের অবস্থান**

| ডেপ্লয়মেন্ট         | কনফিগের অবস্থান                                   |
| ------------------ | ------------------------------------------------- |
| ইলেকট্রন (উইন্ডোজ) | `%APPDATA%\transrewrt\`                           |
| ইলেকট্রন (লিনাক্স)   | `~/.config/transrewrt/`                           |
| ওয়েব / ডকার       | `/app/data/config.json` (স্থায়ী করতে ভলিউম ব্যবহার করুন)

<br/>

**পরিবেশ চলক** (শুধুমাত্র ওয়েব/ডকারের জন্য; ইলেকট্রন স্থানীয় কনফিগ ফাইল ব্যবহার করে)

| ভেরিয়েবল             | বিবরণ                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | সার্ভার শোনার পোর্ট  (ডিফল্ট `5000`)                                  |
| `CONFIG_PATH`        | কনফিগ ফাইলের পথ (ডিফল্ট `/app/data/config.json)`                 |
| `TZ`                 | সার্ভার-সাইড সময়ের জন্য সময় অঞ্চল (লগিং, ইত্যাদি) (ডিফল্ট `Europe/London`) |
| `OPENROUTER_API_KEY` | OpenRouter API কী                                                           |
| `OPENAI_API_KEY`     | OpenAI API কী                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API কী                                                             |
| `ANTHROPIC_API_KEY`  | অ্যানথ্রোপিক API কী                                                            |
| `GOOGLE_API_KEY`     | গুগল জেমিনি API কী                                                        |
| `DEEPSEEK_API_KEY`   | ডিপসিক API কী                                                             |
| `GROQ_API_KEY`       | গ্রোক API কী                                                                 |
| `MISTRAL_API_KEY`    | মিস্ট্রাল API কী                                                              |
| `OLLAMA_URL`         | ওলামা বেস ইউআরএল (যেমন `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | এক্সএআই API কী                                                                  |

শুধুমাত্র আপনি যে প্রদানকারীদের ব্যবহার করেন তাদের কনফিগার করুন। মডেল আইডি নেমস্পেস করা হয় (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ইত্যাদি)।

**খরচ প্রদর্শন:** ওপেনরাউটার প্রযোজ্য ক্ষেত্রে সঠিক বিল করা খরচ প্রদান করে। অন্যান্য প্রদানকারীরা ওপেনরাউটার কী উপলব্ধ থাকলে ওপেনরাউটারের পাবলিক মডেল মূল্য থেকে **আনুমানিক** খরচ ব্যবহার করে; এটি ছাড়া, ওপেনরাউটার নয় এমন খরচ `0` হিসাবে দেখানো যেতে পারে। অনুমানগুলি চালান নয়।

<br/>

**ডেটা এবং স্থায়িত্ব:** ডকারের জন্য, `/app/data`-এ একটি ভলিউম মাউন্ট করুন যাতে `config.json` এবং SQLite ডাটাবেস কনটেইনার পুনরায় চালু হওয়ার সময় স্থায়ী থাকে। ভলিউম ছাড়া, কনটেইনার থামানোর সময় সমস্ত ডেটা হারিয়ে যায়।

<br/>

**ওয়েব প্রমাণীকরণ:**

- ডিফল্ট অ্যাডমিন: `admin` / `transrewrt26`।
- **সেটিংস → ব্যবহারকারীরা**-এ ব্যবহারকারীদের পরিচালনা করুন।
- পাসওয়ার্ড রিসেট করুন: `ডকার এক্সিক <কনটেইনার> রিসেট-ওয়েব-পাসওয়ার্ড '<ব্যবহারকারীর নাম>' '<নতুন পাসওয়ার্ড>'`

<br/>

> ⚠️ **সতর্কতা**<br/>
> যেকোনো নেটওয়ার্ক-অ্যাক্সেসযোগ্য হোস্টে ডিফল্ট অ্যাডমিন পাসওয়ার্ড তাৎক্ষণিকভাবে পরিবর্তন করুন।

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
