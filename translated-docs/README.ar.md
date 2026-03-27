---
translated_at: "2026-03-27T23:07:31.329Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="شعار Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="النسخة"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="الرخصة: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="المنصة">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

أداة نصية مدعومة بالذكاء الاصطناعي: ترجمة بين اللغات، إعادة صياغة بنمط مختلف، وتحويل النصوص باستخدام موجهات مخصصة — باستخدام مزودات ذكاء اصطناعي متعددة (OpenRouter، OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، وOllama محلي). تعمل كتطبيق سطح مكتب (Electron) أو تطبيق ويب يمكنك استضافته بنفسك (Docker).

- **الترجمة** — بين عشرات اللغات، مع كشف تلقائي للغة المصدر
- **إعادة الصياغة** — تصحيح القواعد، تحسين الوضوح، صيغ رسمية/غير رسمية، تقصير، توسيع، أسلوب تقني
- **التحويل** — موجهات مخصصة للذكاء الاصطناعي؛ إنشاء وإدارة الموجهات، مع إمكانية تحديد لغة الهدف لكل موجهة
- **السجل** — سجل تنفيذ كامل يحتوي النصوص المدخلة والمخرجة، مع عوامل تصفية وتصدير
- **النماذج والتكلفة** — اختيار النماذج من أي مزود تم تهيئته؛ لوحة مراقبة التكاليف والاستخدام مع سجلات، وملخصات حسب النموذج/العملية/اليوم
- **واجهة المستخدم** — واجهة متعددة اللغات (أكثر من 30 لغة، مع دعم النصوص من اليمين لليسار)، خطوط، ...
- **وضع الويب** — دعم مستخدمين متعددين مع أدوار المشرف
- **السطح المكتب** — تطبيق Electron لـ Windows وLinux
- **استضافة ذاتية** — صورة Docker معدة لـ amd64 وarm64 (جاهزة لـ Raspberry Pi)

بعد التثبيت، راجع **[دليل المستخدم](USER-GUIDE.ar.md)** للحصول على شرح تفصيلي لجميع الميزات.

<small>**اقرأ بلغات أخرى:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **ملاحظة حول ترجمات الواجهة والوثائق:** تمت ترجمة جميع لغات الواجهة باستثناء النسخة الأصلية الإنجليزية (المملكة المتحدة)
> باستخدام نماذج الذكاء الاصطناعي؛ لذا قد تكون الصياغة غير دقيقة أو تحتوي على أخطاء.

</small>

<br/>

<a id="screenshots"></a>

## لقطات الشاشة

**أداة اختيار اللغة**

![أداة اختيار اللغة](../images/screenshots/ar/language-selector.png)

**الترجمة**

![الترجمة](../images/screenshots/ar/translate.png)

**التحويل - محرر التعليمات التفصيلية (Prompt Editor)**

![التحويل - محرر التعليمات التفصيلية](../images/screenshots/ar/transform-prompt-edit.png)

**لوحة التحكم**

![لوحة تحكم التكلفة](../images/screenshots/ar/dashboard-summary.png)

**السجل**

![السجل](../images/screenshots/ar/history.png)

**الإعدادات - اختيار النموذج**

![الإعدادات - اختيار النموذج](../images/screenshots/ar/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## جدول المحتويات

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [البدء السريع](#quick-start)
- [التثبيت](#installation)
  - [ويندوز (إلكترون)](#windows-electron)
  - [لينكس (إلكترون)](#linux-electron)
  - [داكر](#docker)
- [الحصول على مفتاح واجهة برمجة تطبيقات OpenRouter](#getting-an-openrouter-api-key)
- [التكوين والبيئة](#configuration-and-environment)
- [التطوير والهندسة المعمارية](#development-and-architecture)
- [الإصدارات والوسوم](#releases-and-tags)
- [كيفية المساهمة](#contributing)
- [تحذير](#disclaimer)
- [الرخصة](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## البدء السريع

**Docker (مُفضّل للاستضافة الذاتية)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

استبدل `sk-or-your-key` بمفتاح [مفتاح OpenRouter API](https://openrouter.ai/keys) الخاص بك (أو قم بتعيين أكواد لمزوّدي خدمة آخرين؛ انظر [التكوين والبيئة](#configuration-and-environment)). افتح [http://localhost:5000](http://localhost:5000) وغيّر كلمة المرور الافتراضية قبل تعريض الخدمة للوصول.

<br/>

> ℹ️ **ملاحظة**<br/>
> في بيئة Docker، يتم تعيين بيانات اعتماد نموذج اللغة (LLM) باستخدام متغيرات البيئة مثل `OPENROUTER_API_KEY`، `OPENAI_API_KEY`، `CEREBRAS_API_KEY`، ... (وليس عبر واجهة الويب). أما في نسخة سطح المكتب (Electron)، فيتم تعيين المفاتيح من خلال **الإعدادات → API**.

<br/>

**ويندوز**

قم بتنزيل أحدث إصدار من `Transrewrt Setup x.y.z.exe` من قسم [الإصدارات](https://github.com/wsj-br/transrewrt/releases)، ثم شغّل البرنامج التثبيتي، وبعد ذلك ابدأ التطبيق من قائمة ابدأ أو من الاختصار على سطح المكتب. أدخل مفاتيح API الخاصة بك في قسم **الإعدادات → API**. يجب أن تقوم بتهيئة موفر خدمة واحد على الأقل، ويعتبر OpenRouter اختياراً شائعاً للنماذج المجانية.

<br/>

**لينكس**

نزّل ملف `.AppImage` المناسب لمعالجك من قسم [الإصدارات](https://github.com/wsj-br/transrewrt/releases) (`x64` للأجهزة العادية، `arm64` لأغلب أجهزة ARM، مثل Raspberry Pi 4 وأحدث)، ثم نفّذ:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

أدخل مفاتيح API الخاصة بك في قسم **الإعدادات → API**. يجب أن تقوم بتهيئة موفر خدمة واحد على الأقل، ويعتبر OpenRouter اختياراً شائعاً للنماذج المجانية.

في أنظمة Debian/Ubuntu قد تحتاج أولاً إلى تثبيت تبعيات إضافية:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

للاطلاع على التفاصيل، انظر [التثبيت → لينكس](#linux-electron).

<br/>

> ℹ️ **ملاحظة**<br/>
> نظام macOS غير مدعوم حالياً. يتوفر Transrewrt لأجهزة ويندوز، لينكس، وDocker.

<br/>

عند تشغيل التطبيق، راجع **[دليل المستخدم](USER-GUIDE.ar.md)** لمعرفة كيفية ترجمة النصوص، وإعادة صياغتها، وتحويلها، وإدارة الأوامر، وتكوين النماذج.

<br/><br/>

<a id="installation"></a>

## التثبيت

<a id="windows-electron"></a>
### ويندوز (إلكترون)

- قم بتنزيل أحدث ملف تثبيت من [إصدارات](https://github.com/wsj-br/transrewrt/releases).
- شغّل الملف `.exe` واتبع التعليمات الموجودة في البرنامج التثبيتي.
- التشغيل الأول: ابدأ التطبيق من قائمة "ابدأ" أو من اختصار على سطح المكتب.

<br/>

<a id="linux-electron"></a>
### لينكس (إلكترون)

- قم بتنزيل ملف `.AppImage` المناسب (`x64` أو `arm64`) من [إصدارات](https://github.com/wsj-br/transrewrt/releases).
- التشغيل: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` على أنظمة x86_64/amd64، أو استخدم اسم ملف `...-arm64.AppImage` على أنظمة ARM64.
- التبعيات الإضافية (ديبيان/أوبونتو): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- راجع [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) للحصول على مزيد من المعلومات.

<br/>

<a id="docker"></a>
### دوكر

- استرجاع الصورة: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- قم بتعيين مفتاح موفر واحد على الأقل عبر بيئة النظام (مثلاً `OPENROUTER_API_KEY` لـ OpenRouter). مرر المتغيرات باستخدام `-e` أو `docker compose` / `.env` لضمان عدم تضمين الأكواد السرية داخل الصورة.
- لا يتم إدخال أكواد الموفر في واجهة الويب؛ بل يقرؤها الخادم من بيئة النظام.

مثال – مجلد مُسَمّى للحفاظ على البيانات (مفتاح OpenRouter عبر بيئة النظام):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

أو إذا كنت تفضل استخدام Docker Compose، فاستخدم:

# تنزيل ملف الإنشاء
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# قم بتعديل الملف لإضافة مفاتيح API
vi transrewrt.yml
# تشغيل الحاوية
docker compose -f transrewrt.yml up -d
```

<br/>

| الخيار   | الوصف                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| المنفذ     | `5000` (خريطة باستخدام `-p 5000:5000`)                                                                                                       |
| الحجم   | ربط `/app/data` للحفاظ على إعدادات التهيئة وقاعدة البيانات                                                                                  |
| متغيرات البيئة | `PORT`، `CONFIG_PATH`، بالإضافة إلى مفاتيح النماذج الكبيرة (`OPENROUTER_API_KEY`، `OPENAI_API_KEY`، …) - انظر [التهيئة](#configuration-and-environment) |

لبناء المشروع وتشغيله من المصدر: `docker compose up --build -d` أو `pnpm docker:up` - انظر [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## الحصول على مفتاح واجهة برمجة تطبيقات OpenRouter

يدعم Transrewrt العديد من مزودي الذكاء الاصطناعي. يعتبر [OpenRouter](https://openrouter.ai) خيارًا شائعًا لأنه يُجمع العديد من النماذج تحت مفتاح واحد ويُقدم نماذج مجانية.

1. سجّل حسابًا أو سجّل دخولك عبر [openrouter.ai](https://openrouter.ai).
2. افتح صفحة [Keys](https://openrouter.ai/keys) وأنشئ مفتاحًا جديدًا (سمِّه، ويمكنك اختيار تحديد حد للرصيد). يمكنك استخدام النماذج المجانية دون الحاجة إلى إضافة رصيد.
3. **النسخة المكتبية (Electron):** انسخ المفاتيح في **الإعدادات → واجهة برمجة التطبيقات (API)**. **Docker:** عيّن متغيرات البيئة مثل `OPENROUTER_API_KEY` (انظر [البدء السريع](#quick-start)).

لا تستخدم نموذج **Body Builder** من OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) للترجمة أو إعادة الصياغة أو التحويل: فهو يُعيد حُمولات طلب بصيغة JSON، وليس النص الكامل المطلوب لهذه المهام. راجع [الإعدادات → النماذج](USER-GUIDE.ar.md#models) في الدليل الشامل للمستخدم.

يمكنك أيضًا استخدام مزودين آخرين (OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، Cerebras) أو تشغيل النماذج محليًا باستخدام [Ollama](https://ollama.com). راجع [التكوين](#configuration-and-environment) للحصول على القائمة الكاملة للمزودين المدعومين ومتغيرات البيئة.

> ⚠️ **تحذير**<br/>
> إذا كنت تستخدم Ollama من جهاز آخر، أو حاوية، أو خدمة، فتذكر أن تقوم بتكوين Ollama للسماح بالاتصالات الخارجية (وليست اتصالات localhost فقط).


للاطلاع على الحدود، والاستخدام حسب ملكية المفتاح (BYOK)، والمزيد، راجع [مصادقة OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## التهيئة والبيئة

**مواقع ملفات التهيئة**

| النشر | موقع التهيئة |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (استخدم وحدة تخزين للحفاظ على البيانات) |

<br/>

**المتغيرات البيئية** (للاستخدام عبر الويب/دوكير فقط؛ أما Electron فيستخدم ملف التهيئة المحلي)

| المتغير | القيمة الافتراضية | الوصف |
| ---------------- | ----------------------- | ----------- |
| `PORT` | `5000` | منفذ الاستماع للخادم |
| `CONFIG_PATH` | `/app/data/config.json` | مسار ملف التهيئة |
| `OPENROUTER_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات OpenRouter |
| `OPENAI_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات OpenAI |
| `CEREBRAS_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات Cerebras |
| `ANTHROPIC_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات Anthropic |
| `GOOGLE_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات Google Gemini |
| `DEEPSEEK_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات DeepSeek |
| `GROQ_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات Groq |
| `MISTRAL_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات Mistral |
| `OLLAMA_URL` | *(فارغ)* | عنوان URL الأساسي الخاص بـ Ollama (مثلاً: `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات xAI |

قم بتهيئة موفري الخدمات الذين تستخدمهم فقط. أسماء نماذج (Model IDs) تكون ضمن نطاقات معينة (`openrouter/…`، `openai/…`، `cerebras/…`، `ollama/…`، إلخ).

**عرض التكلفة:** يقوم OpenRouter بإرجاع التكلفة المُحوّلة بدقة عند توفرها. أما موفرو الخدمات الآخرون فيستخدمون **تكلفة تقديرية** من أسعار النماذج العامة الخاصة بـ OpenRouter عندما يكون مفتاح OpenRouter متاحًا؛ وإذا لم يكن متوفرًا، فقد تُعرض التكلفة لغير OpenRouter كقيمة `0`. الملاحظ أن التقديرات ليست فواتير.

<br/>

**البيانات والاستمرارية:** بالنسبة إلى دوكير (Docker)، يجب ربط وحدة تخزين مع المجلد `/app/data` لحفظ `config.json` وقاعدة بيانات SQLite عبر إعادة تشغيل الحاويات. بدون وحدة تخزين، ستفقد جميع البيانات عند إيقاف الحاوية.

**للمطورين:** بعد استيراد التحديثات التي تستبدل التهيئة القديمة المبنية على مفتاح واحد، قم بإعادة تعيين أو دمج ملف `data/config.json` مع البنية الافتراضية الجديدة الموجودة في `src/config-defaults/config_default.json` إذا كان ملفك المحلي ما يزال يستخدم حقولًا ملغاة (`api_key`، `api_url`، خيارات البروكسي).

<br/>

**المصادقة عبر الويب:**

- المستخدم الإداري الافتراضي: `admin` / `transrewrt26`.
- إدارة المستخدمين من خلال القائمة **الإعدادات → المستخدمون**.
- إعادة تعيين كلمة المرور: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (من المصدر: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **تنبيه**<br/>
> قم بتغيير كلمة المرور الافتراضية للمستخدم الإداري فورًا على أي جهاز يمكن الوصول إليه عبر الشبكة.

<br/>

تتوفر الإعدادات الرئيسية (الخط، النماذج، اللغات، إلخ) داخل إعدادات التطبيق.

<br/><br/>

<a id="development-and-architecture"></a>

## التطوير والبنية التحتية

- **التطوير:** الإعداد، البناء، الاختبار والنشر (Electron، الويب، Docker) - راجع **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **البنية التحتية ونظرة عامة على النظام:** هيكل المجلدات، المكونات التقنية، قرارات التصميم - راجع **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## الإصدارات والوسوم

- تحفّز **الوسوم في Git** التي تبدأ بـ `v`* (مثل `v1.0.10`) سير عمل [الإطلاق](.github/workflows/release.yml). وتُرفق **إصدارات GitHub** بملف تثبيت لنظام ويندوز (`.exe`) وملفات AppImage لأنظمة لينكس (**x64** و **arm64**).
- تُنشر **صور Docker** على `ghcr.io/wsj-br/transrewrt`. وتتطابق وسوم الصور مع رقم إصدار Git (مثلاً `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) بالإضافة إلى الوسم `latest`. متعددة المنصات: `linux/amd64` و `linux/arm64` (مثلاً لجهاز Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## المساهمة

1. قم باستنساخ المستودع.
2. أنشئ فرعًا للميزة: `git checkout -b feature/my-feature`
3. قم بتأكيد التغييرات مع رسالة واضحة.
4. ادفع التغييرات وافتح طلب دمج (Pull Request) تجاه الفرع `main`.

يرجى اتباع نمط التعليمات البرمجية الموجود، واختبار التغييرات في كل من وضع Electron ووضع الويب قبل الإرسال. راجع [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) للحصول على تعليمات البناء والاختبار.

<br/>

**الإبلاغ عن المشكلات:** افتح تذكرة في [GitHub](https://github.com/wsj-br/transrewrt/issues). يرجى تضمين نظام التشغيل الخاص بك (ويندوز / لينكس / Docker) وإصدار التطبيق (موجود في نافذة "حول" أو في صفحة الإصدارات).

<br/><br/>

<a id="disclaimer"></a>

## إخلاء المسؤولية

تنتمي أسماء المنتجات والأيقونات إلى أصحابها المعنيين وتستخدم فقط لأغراض التعريف. هذا البرنامج غير تابع بأي شكل من الأشكال للعلامات التجارية المذكورة، ولا يُصادق عليه من قِبلها.

<br/><br/>

<a id="license"></a>
## الرخصة

حقوق النشر © 2026 والديمار سكوديلر جونيور.

[رخصة أباتشي 2.0](LICENSE)