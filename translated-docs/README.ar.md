---
translated_at: "2026-03-26T00:07:46.128Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
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

أداة نصية مدعومة بالذكاء الاصطناعي: ترجمة بين اللغات، إعادة كتابة بأساليب مختلفة، وتحويل النصوص باستخدام تعليمات مخصصة — باستخدام مزودات ذكاء اصطناعي متعددة (OpenRouter، OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، وOllama محلي). تعمل كتطبيق سطح مكتب (Electron) أو تطبيق ويب ذاتي الاستضافة (Docker).

- **الترجمة** — بين عشرات اللغات، مع اكتشاف تلقائي للغة المصدر
- **إعادة الكتابة** — إصلاح القواعد، تحسين الوضوح، شكل رسمي/غير رسمي، التقصير، التوسيع، الأسلوب التقني
- **التحويل** — تعليمات ذكاء اصطناعي مخصصة؛ إنشاء وإدارة التعليمات، مع إمكانية تعيين لغة مستهدفة لكل تعليمة
- **السجل** — سجل تنفيذ كامل يحتوي على النصوص المدخلة والمستخلصة، مع تصفية وتصدير
- **النماذج والتكلفة** — اختيار النماذج من أي مزوّد تم تهيئته؛ لوحة مراقبة للتكلفة والاستخدام مع سجل وملخصات حسب النموذج/العملية/اليوم
- **واجهة المستخدم** — واجهة متعددة اللغات (أكثر من 30 لغة، دعم كتابة من اليمين إلى اليسار)، الخطوط، وما إلى ذلك
- **الوضع الويب** — دعم المستخدمين المتعددين مع أدوار المشرف
- **سطح المكتب** — تطبيق Electron لـ Windows وLinux
- **ذاتي الاستضافة** — صورة Docker متوفرة لـ amd64 وarm64 (جاهزة لـ Raspberry Pi)

بعد التثبيت، راجع **[دليل المستخدم](USER-GUIDE.ar.md)** للحصول على دليل شامل حول جميع الميزات.

<small>**اقرأ بلغات أخرى:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **ملاحظة حول ترجمات واجهة المستخدم والتوثيق:** جميع لغات الواجهة ما عدا اللغة الأصلية الإنجليزية (المملكة المتحدة) تمت ترجمتها باستخدام نماذج ذكاء اصطناعي؛ قد تكون الصيغة غير دقيقة أو تحتوي على أخطاء.

</small>

<br/>

<a id="screenshots"></a>
## لقطات الشاشة

**محدد اللغة**

![محدد اللغة](../images/screenshots/ar/language-selector.png)

**الترجمة**

![الترجمة](../images/screenshots/ar/translate.png)

**التحويل - محرر التعليمات**

![التحويل - محرر التعليمات](../images/screenshots/ar/transform-prompt-edit.png)

**لوحة التحكم**

![لوحة تكلفة](../images/screenshots/ar/dashboard-summary.png)

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
  - [دوكير](#docker)
- [الحصول على مفتاح OpenRouter API](#getting-an-openrouter-api-key)
- [التكوين والبيئة](#configuration-and-environment)
- [التطوير والهندسة المعمارية](#development-and-architecture)
- [الإصدارات والوسم](#releases-and-tags)
- [المساهمة](#contributing)
- [إخلاء المسؤولية](#disclaimer)
- [الرخصة](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## البدء السريع

**دوكير (مُوصى به للتشغيل الذاتي)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

استبدل `sk-or-your-key` بمفتاح [OpenRouter API](https://openrouter.ai/keys) الخاص بك (أو عيّن مفاتيح مزودين آخرين؛ راجع [التكوين](#configuration-and-environment)). ثم افتح [http://localhost:5000](http://localhost:5000) وغيّر كلمة المرور الافتراضية قبل التعرض للخدمة.

<br/>

> ℹ️ **ملاحظة**<br/>
> في دوكير، تُضبط بيانات اعتماد نموذج اللغة (LLM) باستخدام متغيرات البيئة مثل `OPENROUTER_KEY`، `OPENAI_KEY`، `CEREBRAS_KEY`... (وليس من واجهة المستخدم الرسومية). أما على سطح المكتب (إلكترون) فتُضبط المفاتيح من خلال **الإعدادات → API**.

<br/>

**ويندوز**

نزّل أحدث إصدار `Transrewrt Setup x.y.z.exe` من [الإصدارات](https://github.com/wsj-br/transrewrt/releases)، وشغّل البرنامج التثبيت، ثم ابدأ التطبيق من قائمة ابدأ أو اختصار سطح المكتب. أدخل مفاتيح API في **الإعدادات → API**. يجب أن تقوم بتكوين مزود واحد على الأقل، ويُستخدم OpenRouter غالبًا مع النماذج المجانية.

<br/>

**لينكس**

نزّل ملف `.AppImage` المناسب لوحدة المعالجة المركزية الخاصة بك من [الإصدارات](https://github.com/wsj-br/transrewrt/releases) (`x64` لأجهزة الكمبيوتر الشائعة، `arm64` لمعظم أجهزة ARM بما فيها Raspberry Pi 4+)، ثم:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

أدخل مفاتيح API في **الإعدادات → API**. يجب أن تقوم بتكوين مزود واحد على الأقل، ويُستخدم OpenRouter غالبًا مع النماذج المجانية.

في ديبيان/أوبونتو قد تحتاج إلى تثبيت تبعيات إضافية أولًا:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

راجع [التثبيت → لينكس](#linux-electron) للتفاصيل.

<br/>

> ℹ️ **ملاحظة**<br/>
> نظام التشغيل macOS غير مدعوم حاليًا. يتوفر Transrewrt لنظامي ويندوز ولينكس، وكذلك عبر دوكير.

<br/>

بمجرد تشغيل التطبيق، راجع **[دليل المستخدم](USER-GUIDE.ar.md)** لتعلم كيفية ترجمة النصوص، وإعادة صياغتها، وتحويلها، وإدارة الأوامر، وتكوين النماذج.

<br/><br/>

<a id="installation"></a>
## التثبيت

<a id="windows-electron"></a>
### ويندوز (إلكترون)

- نزّل أحدث برنامج تثبيت من [الإصدارات](https://github.com/wsj-br/transrewrt/releases).
- شغّل الملف `.exe` واتبع التعليمات.
- في التشغيل الأول: ابدأ التطبيق من قائمة ابدأ أو اختصار سطح المكتب. 

<br/>

<a id="linux-electron"></a>
### لينكس (إلكترون)

- نزّل ملف `.AppImage` المناسب (`x64` أو `arm64`) من [الإصدارات](https://github.com/wsj-br/transrewrt/releases).
- شغّله: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` على x86_64/amd64، أو استخدم اسم الملف `...-arm64.AppImage` على ARM64.
- التبعيات الإضافية (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- راجع [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) لمزيد من المعلومات.

<br/>

<a id="docker"></a>
### دوكير

- جرّب: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- عيّن مفتاح مزود واحد على الأقل عبر بيئة التشغيل (مثلاً `OPENROUTER_KEY` لـ OpenRouter). مرّر المتغيرات باستخدام `-e` أو `docker compose` / `.env` حتى لا تكون الأسرار مدمجة في الصورة.
- **لا تُدخل** مفاتيح المزودين في واجهة المستخدم الرسومية؛ بل يقرأ الخادمها من بيئة التشغيل.

مثال - استخدام وحدة تخزين ذات اسم للحفاظ على البيانات (مفتاح OpenRouter عبر بيئة):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| الخيار   | الوصف                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| المنفذ     | `5000` (يُقرن باستخدام `-p 5000:5000`)                                                                              |
| وحدة التخزين   | وصل `/app/data` للحفاظ على إعدادات التكوين وقاعدة البيانات                                                   |
| متغيرات البيئة | `PORT`، `CONFIG_PATH`، بالإضافة إلى مفاتيح LLM (`OPENROUTER_KEY`، `OPENAI_KEY`، …) - راجع [التكوين](#configuration-and-environment) |

لبناء التطبيق وتشغيله من المصدر: `docker compose up --build -d` أو `pnpm docker:up` - راجع [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## الحصول على مفتاح واجهة برمجة تطبيقات OpenRouter

يدعم تطبيق Transrewrt موفري الذكاء الاصطناعي المتعددين. تُعد [OpenRouter](https://openrouter.ai) خيارًا شائعًا لأنها تدمج نماذج متعددة تحت مفتاح واحد وتوفر نماذج مجانية.

1. اشترك أو سجّل الدخول على [openrouter.ai](https://openrouter.ai).
2. افتح صفحة [Keys](https://openrouter.ai/keys) وأنشئ مفتاحًا جديدًا (سمّه، واختر بحد أقصى حد ائتماني). يمكنك استخدام النماذج المجانية دون إضافة رصيد.
3. **النسخة المكتبية (Electron):** الصق المفاتيح في **الإعدادات → واجهة برمجة التطبيقات (API)**. **Docker:** عيّن متغيرات البيئة مثل `OPENROUTER_KEY` (انظر [البدء السريع](#quick-start)).

لا تستخدم نموذج **Body Builder** من OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) للترجمة أو إعادة الصياغة أو التحويل: فهو يُرجع حُمولات طلبات بصيغة JSON، وليست النصوص المكتملة لهذه المهام. راجع [الإعدادات → النماذج](USER-GUIDE.ar.md#models) في دليل المستخدم.

يمكنك أيضًا استخدام موفرين آخرين (OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، Cerebras) أو تشغيل النماذج محليًا باستخدام [Ollama](https://ollama.com). راجع [التكوين](#configuration-and-environment) للحصول على القائمة الكاملة للموفرين المدعومين ومتغيرات البيئة.

> ⚠️ **تحذير**<br/>
> إذا كنت تستخدم Ollama من جهاز آخر، أو حاوية، أو خدمة، فتذكر تكوين Ollama للسماح بالاتصالات الخارجية (وليست محدودة بـ localhost فقط).


للاطلاع على الحدود، وخاصية "استخدم مفاتيحك الخاصة (BYOK)" والمزيد، راجع [مصادقة OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## التهيئة والبيئة

**مواقع ملف التهيئة**

| النوع              | مكان التهيئة                                  |
| ------------------ | --------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                       |
| Electron (Linux)   | `~/.config/transrewrt/`                       |
| الويب / Docker     | `/app/data/config.json` (استخدم وحدة تخزين للحفظ) |

<br/>

**متغيرات البيئة** (للويب/Docker فقط؛ Electron يستخدم ملف التهيئة المحلي)

| المتغير             | القيمة الافتراضية        | الوصف |
| ------------------- | ------------------------ | ----- |
| `PORT`              | `5000`                   | منفذ الاستماع للخادم |
| `CONFIG_PATH`       | `/app/data/config.json`  | مسار ملف التهيئة |
| `OPENROUTER_KEY`    | *(فارغ)*                 | مفتاح واجهة برمجة تطبيقات OpenRouter |
| `OPENAI_KEY`        | *(فارغ)*                 | مفتاح واجهة برمجة تطبيقات OpenAI |
| `CEREBRAS_KEY`      | *(فارغ)*                 | مفتاح واجهة برمجة تطبيقات Cerebras |
| `ANTHROPIC_KEY`     | *(فارغ)*                 | مفتاح واجهة برمجة تطبيقات Anthropic |
| `GOOGLE_KEY`        | *(فارغ)*                 | مفتاح واجهة برمجة تطبيقات Google Gemini |
| `DEEPSEEK_KEY`      | *(فارغ)*                 | مفتاح واجهة برمجة تطبيقات DeepSeek |
| `GROQ_KEY`          | *(فارغ)*                 | مفتاح واجهة برمجة تطبيقات Groq |
| `MISTRAL_KEY`       | *(فارغ)*                 | مفتاح واجهة برمجة تطبيقات Mistral |
| `OLLAMA_URL`        | *(فارغ)*                 | الرابط الأساسي لـ Ollama (مثل `http://host.docker.internal:11434`) |
| `XAI_KEY`           | *(فارغ)*                 | مفتاح واجهة برمجة تطبيقات xAI |

قم بتهيئة الموفرين الذين تستخدمهم فقط. أسماء نماذج النماذج تكون ضمن نطاقات (`openrouter/…`، `openai/…`، `cerebras/…`، `ollama/…`، إلخ).

**عرض التكلفة:** تُرجع OpenRouter التكلفة الفعلية عند توفرها. أما الموفرون الآخرون فيستخدمون **تكلفة تقديرية** من واقع تسعير النماذج العام من OpenRouter عندما يكون مفتاح OpenRouter متاحًا؛ وإذا لم يكن كذلك، فقد تظهر التكلفة من غير OpenRouter بقيمة `0`. التقديرات ليست فواتير.

<br/>

**البيانات والحفظ المستمر:** بالنسبة لـ Docker، قم بربط وحدة تخزين في المسار `/app/data` لحفظ ملف `config.json` وقاعدة بيانات SQLite عند إعادة تشغيل الحاوية. بدون هذه الوحدة، يتم فقدان جميع البيانات عند توقف الحاوية.

**للمطورين:** بعد استيراد التغييرات التي تستبدل تهيئة المفتاح الواحد القديمة، أعد تعيين أو دمج ملف `data/config.json` مع الشكل الجديد الافتراضي الموجود في `src/config-defaults/config_default.json` إذا كان ملفك المحلي لا يزال يستخدم حقولًا محذوفة (`api_key`، `api_url`، خيارات البروكسي).

<br/>

**مصادقة الويب:**

- المسؤول الافتراضي: `admin` / `transrewrt26`.
- إدارة المستخدمين في **الإعدادات → المستخدمون**.
- إعادة تعيين كلمة المرور: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (من المصدر: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **تحذير**<br/>
> قم بتغيير كلمة مرور المسؤول الافتراضية فورًا على أي جهاز يمكن الوصول إليه عبر الشبكة.

<br/>

الإعدادات المهمة (الخط، النماذج، اللغات، إلخ) متوفرة في إعدادات التطبيق.

<br/><br/>

<a id="development-and-architecture"></a>

## التطوير والهندسة المعمارية

- **التطوير:** الإعداد، البناء، الاختبار والنشر (Electron، الويب، Docker) - انظر **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **نظرة عامة على العمارة والأنظمة:** هيكل المجلدات، التقنيات المستخدمة، وقرارات التصميم - انظر **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## الإصدارات والوسوم

- تنطلق **الوسوم في Git** التي تبدأ بـ `v`* (مثلاً `v1.0.10`) تدفق [العمل لإصدار](.github/workflows/release.yml). تُرفق **إصدارات GitHub** بملف تثبيت ويندوز (`.exe`) وملفات Linux AppImage (لنسخة **x64** و **arm64**).
- يتم نشر **صور Docker** على العنوان `ghcr.io/wsj-br/transrewrt`. وتطابق وسوم الصور إصدار Git (مثلاً `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) بالإضافة إلى الوسم `latest`. دعم متعدد الأنظمة: `linux/amd64` و`linux/arm64` (مثلاً على Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## المساهمة

1. قم بإنشاء نسخة م forks من المستودع.
2. قم بإنشاء فرع للميزة: `git checkout -b feature/my-feature`
3. أضف التعديلات مع رسالة واضحة.
4. ادفع التعديلات وافتح طلب دمج (Pull Request) إلى الفرع `main`.

يرجى اتباع نمط الكود الموجود واجراء اختباراتك على طريقي Electron والويب قبل الإرسال. راجع [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) للحصول على تعليمات البناء والاختبار.

<br/>

**إبلاغ عن المشاكل:** افتح تذكرة على [GitHub](https://github.com/wsj-br/transrewrt/issues). شمل نظام التشغيل الخاص بك (Windows / Linux / Docker) وإصدار التطبيق (موجود في نافذة "حول" أو على صفحة الإصدارات).

<br/><br/>

<a id="disclaimer"></a>
## إخلاء مسؤولية

أسماء المنتجات والأيقونات مملوكة لأصحابها، وتُستخدم لأغراض التعريف فقط. هذا البرنامج غير مرتبط أو مدعوم من أي علامات تجارية مذكورة.

<br/><br/>

<a id="license"></a>
## الرخصة

جميع الحقوق محفوظة © 2026 والديمار سكوديلر جونيور.

[رخصة أباتشي 2.0](LICENSE)