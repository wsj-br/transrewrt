---
translated_at: "2026-03-29T01:54:31.161Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="شعار Transrewrt" />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="الإصدار"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="الرخصة: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="المنصة">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="رِياكت 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="إلكترون 41">
</p>

أداة نصية مدعومة بالذكاء الاصطناعي: الترجمة بين اللغات، وإعادة الصياغة بأساليب مختلفة، والتحويل باستخدام موجهات مخصصة — باستخدام عدة مزودي ذكاء اصطناعي (OpenRouter، OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، وOllama محليًا). تعمل كتطبيق سطح مكتب (Electron) أو كتطبيق ويب مُستضاف ذاتيًا (Docker).

- **الترجمة** — بين عشرات اللغات، مع اكتشاف تلقائي للغة المصدر
- **إعادة الصياغة** — تصحيح القواعد، تحسين الوضوح، صيغة رسمية/غير رسمية، تقصير، توسيع، صياغة تقنية
- **التحويل** — أوامر ذكاء اصطناعي مخصصة؛ إنشاء وإدارة الأوامر، اختيار اللغة الهدف لكل أمر بشكل اختياري
- **السجل** — سجل تنفيذ كامل يشمل النصوص المدخلة والمنتجة، مع إمكانية التصفية والتصدير
- **النماذج والتكلفة** — اختر النماذج من أي مزوّد تم تهيئته؛ لوحات مراقبة التكلفة والاستخدام مع سجلات وتلخيصات حسب النموذج أو العملية أو اليوم
- **واجهة المستخدم** — واجهة متعددة اللغات (30+ لغة، تدعم الكتابة من اليمين لليسار)، خطوط، ...
- **الوضع الويب** — دعم المستخدمين المتعددين مع أدوار المشرفين
- **نسخة سطح المكتب** — تطبيق Electron لنظامي Windows وLinux
- **الاستضافة الذاتية** — صورة Docker معدة لجهاز Raspberry Pi ولطرازات amd64 وarm64

بعد التثبيت، راجع **[دليل المستخدم](USER-GUIDE.ar.md)** للحصول على شرح تفصيلي لكافة الميزات.

<small>**اقرأ باللغات الأخرى:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **ملاحظة حول ترجمة الواجهة والتوثيق:** تم ترجمة جميع لغات الواجهة باستثناء اللغة الإنجليزية (المملكة المتحدة) الأصلية
> باستخدام نماذج الذكاء الاصطناعي؛ لذا قد تكون الصياغة غير دقيقة أو تحتوي على أخطاء.

</small>

<br/>

<a id="screenshots"></a>

## لقطات الشاشة

**محدد اللغة**

![محدد اللغة](../images/screenshots/ar/language-selector.png)

**ترجمة**

![ترجمة](../images/screenshots/ar/translate.png)

**تحويل - محرر الموجهات**

![تحويل - محرر الموجهات](../images/screenshots/ar/transform-prompt-edit.png)

**لوحة التحكم**

![ملخص لوحة التحكم — الاستخدام](../images/screenshots/ar/dashboard-summary.png)

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
  - [دبلكر](#docker)
  - [إعداد المنطقة الزمنية](#configuring-the-timezone)
- [الحصول على مفتاح واجهة برمجة تطبيقات OpenRouter](#getting-an-openrouter-api-key)
- [التكوين والبيئة](#configuration-and-environment)
- [التطوير والهياكل](#development-and-architecture)
- [إبلاغ عن المشاكل](#reporting-issues)
- [إقرار بالتنازل عن المسؤولية](#disclaimer)
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

استبدل `sk-or-your-key` بمفتاح [API الخاص بـ OpenRouter](https://openrouter.ai/keys) (أو اضبط مفاتيح مزوّد آخر؛ انظر [الإعدادات والبيئة](#configuration-and-environment)). افتح [http://localhost:5000](http://localhost:5000) وغيّر كلمة مرور المسؤول الافتراضية قبل تعريض الخدمة للخارج.

<br/>

> ℹ️ **ملاحظة**<br/>
> عند استخدام Docker، يتم تعيين بيانات اعتماد نموذج اللغة الكبير (LLM) باستخدام متغيرات البيئة مثل `OPENROUTER_API_KEY`، `OPENAI_API_KEY`، `CEREBRAS_API_KEY`، … (وليس من خلال واجهة الويب). أما على سطح المكتب (Electron)، فتتم تهيئة المفاتيح من خلال **الإعدادات → API**.

<br/>

**ويندوز**

قم بتنزيل أحدث إصدار `Transrewrt Setup x.y.z.exe` من [الإصدارات](https://github.com/wsj-br/transrewrt/releases)، ثم قم بتشغيل برنامج التثبيت، ثم ابدأ التطبيق من قائمة ابدأ أو من اختصار على سطح المكتب. أدخل مفاتيح واجهة برمجة التطبيقات (API) الخاصة بك في **الإعدادات → واجهة برمجة التطبيقات (API)**. يجب عليك تهيئة موفر واحد على الأقل، ويُعد OpenRouter شائعًا للنماذج المجانية.

<br/>

**لينكس**

قم بتنزيل ملف `.AppImage` المناسب لمعالجك من [الإصدارات](https://github.com/wsj-br/transrewrt/releases) (`x64` لأجهزة الكمبيوتر النموذجية، و`arm64` للعديد من أجهزة ARM بما في ذلك Raspberry Pi 4 فما فوق)، ثم:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

أدخل مفاتيح واجهة برمجة التطبيقات (API) الخاصة بك في **الإعدادات → واجهة برمجة التطبيقات (API)**. يجب عليك تهيئة موفر واحد على الأقل، ويُعد OpenRouter شائعًا للنماذج المجانية.

على أنظمة ديبيان/أوبونتو قد تحتاج إلى تثبيت تبعيات إضافية أولًا:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

انظر [التثبيت → لينكس](#linux-electron) للحصول على التفاصيل.

<br/>

> ℹ️ **ملاحظة**<br/>

> نظام macOS غير مدعوم حاليًا. يتوفر Transrewrt لأنظمة Windows وLinux وDocker.

<br/>

بمجرد تشغيل التطبيق، راجع **[دليل المستخدم](USER-GUIDE.ar.md)** لمعرفة كيفية ترجمة النصوص وإعادة صياغتها وتحويلها، وإدارة المُحفزات، وتكوين النماذج.

<br/><br/>

<a id="installation"></a>

## التثبيت

<a id="windows-electron"></a>

### ويندوز (إلكترون)

- قم بتنزيل أحدث برنامج تثبيت من [إصدارات](https://github.com/wsj-br/transrewrt/releases).
- شغّل ملف `.exe` واتبع التعليمات في معالج التثبيت.
- عند التشغيل الأول: ابدأ التطبيق من قائمة البدء أو من اختصار على سطح المكتب.

<br/>

> ℹ️ **ملاحظة**<br/>
> قد تُظهر ويندوز أحد التحذيرات الأمنية التالية (وهو أمر طبيعي بالنسبة للتطبيقات غير الموقعة أو التطبيقات المستقلة):
>   - **تحكم حساب المستخدم (UAC)**: "هل تريد السماح لهذا التطبيق من ناشر غير معروف بإجراء تغييرات على جهازك؟" → انقر فوق **نعم**.
>   - **مايكروسوفت ديفندر سمارت شيلد**: "ويندوز قام بحماية جهازك" → انقر فوق **مزيد من المعلومات** → **التشغيل على أية حال**.
>
> يحدث هذا بسبب أن التطبيق غير موقع من مايكروسوفت أو أحد الناشرين الكبار — ولكن من الآمن تنزيله إذا تم الحصول عليه من إصداراتنا الرسمية على GitHub
>  (تحقق من مجموع تدقيق SHA256 أدناه).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- قم بتنزيل ملف `.AppImage` المناسب (`x64` أو `arm64`) من [الإصدارات](https://github.com/wsj-br/transrewrt/releases).
- التشغيل: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` على أجهزة x86_64/amd64، أو استخدم اسم الملف `...-arm64.AppImage` على منصات ARM64.
- التبعيات الإضافية (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- انظر [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) للمزيد.

<br/>

<a id="docker"></a>

### دوكر

- استرجاع: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- قم بتعيين مفتاح موفر واحد على الأقل عبر البيئة (مثلاً `OPENROUTER_API_KEY` لمنصة OpenRouter). قم بتمرير المتغيرات باستخدام `-e` أو عبر `docker compose` / `.env` حتى لا تُدمج الأسرار داخل الصورة.
- **لا يتم** إدخال مفاتيح المزود في واجهة الويب؛ بل يقوم الخادم بقرائتها من بيئة التشغيل.

مثال — إنشاء مجلد مُسَمّى للحفاظ على البيانات (باستخدام مفتاح OpenRouter من البيئة):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

أو إذا كنت تفضل استخدام Docker Compose، فاستخدم:

```
# قم بتنزيل ملف التكوين
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# قم بتعديل الملف لإضافة مفاتيح API وتعديل المنطقة الزمنية (TZ)
vi transrewrt.yml
# تشغيل الحاوية
docker compose -f transrewrt.yml up -d

انظر [التكوين](#configuration-and-environment) للاطلاع على جميع المتغيرات البيئية، مثل `PORT` و`CONFIG_PATH` و`TZ` ومفاتيح نماذج اللغة الكبيرة (``OPENROUTER_API_KEY``، ``OPENAI_API_KEY``، ...).

<a id="configuring-the-timezone"></a>

### تهيئة المنطقة الزمنية

تتبع واجهة المستخدم الخاصة بالتطبيق التاريخ والساعة حسب إعدادات **المتصفح** المحلية والمنطقة الزمنية. أما من أجل سلوك **الخادم** (مثل تسجيل الأحداث وغيرها)، فإن الحاوية تستخدم متغير البيئة `TZ`. والإعداد الافتراضي هو `TZ=Europe/London`.

لاستخدام منطقة زمنية مختلفة، قم بتعيين `TZ` في ملف Compose الخاص بك، على سبيل المثال:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

أو قم بتمريره عند تشغيل الحاوية (Docker):

```bash
--env TZ=America/Sao_Paulo
```

في العديد من أنظمة استضافة لينكس، يمكنك نسخ اسم المنطقة الزمنية الخاصة بالنظام باستخدام الأمر التالي:

```bash
echo TZ=\"$(</etc/timezone)\"
```

تُحفظ قائمة بأسماء المناطق الزمنية الصالحة في [قاعدة بيانات tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (ويكيبيديا).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## الحصول على مفتاح API من OpenRouter

يدعم Transrewrt العديد من موفري الذكاء الاصطناعي. وتعتبر منصة [OpenRouter](https://openrouter.ai) خياراً شائعاً لأنها تجمع العديد من النماذج تحت مفتاح واحد وتوفر نماذج مجانية.

1. سجّل حساباً جديداً أو سجّل الدخول عبر [openrouter.ai](https://openrouter.ai).
2. افتح صفحة [Keys](https://openrouter.ai/keys) وأنشئ مفتاحاً جديداً (سمّه، ويمكنك وضع حد ائتماني اختيارياً). يمكنك استخدام النماذج المجانية دون إضافة رصيد.
3. **النسخة المكتبية (Electron):** الصق المفاتيح في **الإعدادات → API**. **Docker:** اضبط متغيرات البيئة مثل `OPENROUTER_API_KEY` (راجِع [البدء السريع](#quick-start)).

لا تستخدم نموذج **Body Builder** الخاص بـ OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) للترجمة أو إعادة الصياغة أو التحويل: لأنه يُرجع محتوى طلب بصيغة JSON، وليس النص المُكتمل لهذه المهام. راجع [الإعدادات → النماذج](USER-GUIDE.ar.md#models) في الدليل التعليمي.

يمكنك أيضًا استخدام موفري خدمة آخرين (OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، Cerebras) أو تشغيل النماذج محليًا باستخدام [Ollama](https://ollama.com). راجع قسم [التكوين والبيئة](#configuration-and-environment) للحصول على قائمة كاملة بالموفرات المدعومة والمتغيرات البيئية.

> ⚠️ **تحذير**<br/>
> إذا كنت تستخدم Ollama من جهاز آخر أو حاوية أو خدمة، فتذكر تهيئة Ollama للسماح بالاتصالات الخارجية (ليست الاتصالات من النوع localhost فقط).

للاطلاع على معلومات حول الحدود، وحق الاستخدام (BYOK)، وأكثر من ذلك، يُرجى زيارة [مصادقة OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## التهيئة والبيئة

**مواقع ملفات التهيئة**

| نشر التطبيق         | موقع التهيئة                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| الويب / Docker     | `/app/data/config.json` (استخدم وحدة تخزين للحفاظ عليها) |

<br/>

**متغيرات البيئة** (الويب/داكر فقط؛ يُستخدم تطبيق إلكترون ملف الإعدادات المحلي)

| المتغير | القيمة الافتراضية | الوصف |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | منفذ استماع الخادم |
| `CONFIG_PATH`    | `/app/data/config.json` | مسار ملف التكوين |
| `TZ`             | `Europe/London`         | التوقيت الزمني حسب معايير IANA للوقت على الخادم (السجلات، إلخ)؛ واجهة المستخدم لا تزال تتبع متصفح المستخدم. انظر [Docker → timezone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(فارغ)*               | مفتاح واجهة برمجة تطبيقات OpenRouter |
| `OPENAI_API_KEY`     | *(فارغ)*               | مفتاح واجهة برمجة تطبيقات OpenAI |
| `CEREBRAS_API_KEY`   | *(فارغ)*               | مفتاح واجهة برمجة تطبيقات Cerebras |
| `ANTHROPIC_API_KEY`  | *(فارغ)*               | مفتاح واجهة برمجة تطبيقات Anthropic |
| `GOOGLE_API_KEY`     | *(فارغ)*               | مفتاح واجهة برمجة تطبيقات Google Gemini |
| `DEEPSEEK_API_KEY`   | *(فارغ)*               | مفتاح واجهة برمجة تطبيقات DeepSeek |
| `GROQ_API_KEY`       | *(فارغ)*               | مفتاح واجهة برمجة تطبيقات Groq |
| `MISTRAL_API_KEY`    | *(فارغ)*               | مفتاح واجهة برمجة تطبيقات Mistral |
| `OLLAMA_URL`     | *(فارغ)*               | رابط Ollama الأساسي (مثلاً `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(فارغ)*               | مفتاح واجهة برمجة تطبيقات xAI |

قم بتهيئة موفري الخدمة الذين تستخدمهم فقط. تكون معرفات النماذج ضمن نطاقات أسماء (`openrouter/…`، `openai/…`، `cerebras/…`، `ollama/…`، إلخ).

**عرض التكاليف:** تقوم OpenRouter بإرجاع التكلفة الفعلية بالضبط عند الحاجة. وتستخدم موفري الخدمة الآخرون تكلفة **مقدرة** استنادًا إلى أسعار النماذج العامة من OpenRouter عندما يكون مفتاح OpenRouter متاحًا؛ وإذا لم يكن المفتاح متاحًا، فقد تُعرض التكلفة الخاصة غير التابعة لـ OpenRouter كقيمة `0`. الملاحظة: التقديرات ليست فواتير.

<br/>

**البيانات والثبات:** بالنسبة لـ Docker، يجب ربط مجلد خارجي (volume) مع المسار `/app/data` لحفظ ملف `config.json` وقاعدة بيانات SQLite عند إعادة تشغيل الحاوية. إذا لم يتم توصيل مجلد خارجي، فستُفقد جميع البيانات عند إيقاف الحاوية.

**المطورون:** بعد استيراد التحديثات التي تستبدل تهيئة المفتاح المنفرد القديمة، يُرجى إعادة تعيين أو دمج ملف `data/config.json` مع الشكل الافتراضي الجديد من `src/config-defaults/config_default.json` إذا كان ملفك المحلي لا يزال يستخدم الحقول التي تم إزالتها (`api_key`، `api_url`، خيارات الوكيل).

<br/>

**المصادقة عبر الويب:**

- المستخدم الافتراضي (المسؤول): `admin` / `transrewrt26`.
- إدارة المستخدمين من خلال القائمة **الإعدادات → المستخدمون**.

- إعادة تعيين كلمة المرور: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (من المصدر: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **تحذير**<br/>
> قم بتغيير كلمة المرور الافتراضية للمسؤول فورًا على أي جهاز يمكن الوصول إليه عبر الشبكة.

<br/>

تتوفر الإعدادات الرئيسية (الخط، النماذج، اللغات، إلخ) في إعدادات التطبيق.

<br/><br/>

<a id="development-and-architecture"></a>

## التطوير والهندسة المعمارية

- **التطوير:** الإعداد، البناء، الاختبار والنشر (Electron، الويب، Docker) - انظر **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **نظرة عامة على البنية والсистем:** هيكلة المجلدات، مكدس التقنيات، القرارات التصميمية - انظر **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## الإبلاغ عن المشكلات

افتح تذكرة على [GitHub](https://github.com/wsj-br/transrewrt/issues). تأكد من تضمين نظامك (ويندوز / لينكس / دوكر) وإصدار التطبيق (موجود في نافذة "حول" أو على صفحة الإصدارات).

<br/><br/>

<a id="disclaimer"></a>

## إخلاء مسؤولية

أسماء المنتجات والأيقونات مملوكة لأصحابها المعنيين وتُستخدم فقط في الغرض التعريفي. هذا البرنامج لا ينتمي إلى أي من العلامات التجارية المذكورة، ولا يُؤيدها.

<br/><br/>

<a id="license"></a>

## الترخيص

حقوق النشر © 2026 والديمار سكوديلر جونيور.

[رخصة أباتشي 2.0](LICENSE)