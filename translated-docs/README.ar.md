---
translated_at: "2026-03-25T22:07:04.661Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="شعار Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="الإصدار"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="الترخيص: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="المنصة">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

أداة نصية مدعومة بالذكاء الاصطناعي: الترجمة بين اللغات، وإعادة الصياغة بأساليب مختلفة، وتحويل النصوص باستخدام أوامر مخصصة — وذلك باستخدام عدة مزودي ذكاء اصطناعي (مثل OpenRouter وOpenAI وAnthropic وGoogle Gemini وDeepSeek وGroq وMistral وxAI، ومخدم Ollama محلياً). يمكن تشغيلها كتطبيق سطح مكتب (Electron) أو كتطبيق ويب يمكن استضافته ذاتياً (عبر Docker).

- **الترجمة** — بين عشرات اللغات، مع اكتشاف تلقائي للغة المصدر
- **إعادة الصياغة** — تصحيح القواعد، تحسين الوضوح، أسلوب رسمي/غير رسمي، تقصير، توسيع، صياغة تقنية
- **التحويل** — أوامر ذكاء اصطناعي مخصصة؛ إنشاء وإدارة الأوامر، مع إمكانية تحديد لغة مستهدفة لكل أمر
- **الأرشيف** — سجل كامل للاستخدام مع النصوص المدخلة والمخرجة، والتصفية، والتصدير
- **النماذج والتكلفة** — اختيار النماذج من أي مزود تم تهيئته؛ لوحات مراقبة للتكاليف والاستخدام مع السجلات، وتلخيص الاستخدام حسب النموذج/العملية/اليوم
- **واجهة المستخدم** — واجهة متعددة اللغات (أكثر من 30 لغة، مع دعم الكتابة من اليمين إلى اليسار)، خطوط، وما إلى ذلك
- **وضع الويب** — دعم المستخدمين المتعددين مع أدوار الإدارة
- **سطح المكتب** — تطبيق Electron لنظامي Windows وLinux
- **الاستضافة الذاتية** — صورة Docker متوافقة مع معالجات amd64 وarm64 (جاهزة لجهاز Raspberry Pi)

بعد التثبيت، راجع **[دليل المستخدم](USER-GUIDE.ar.md)** للحصول على شرح كامل لجميع الميزات.

<small>**قراءة بلغات أخرى:** [English (UK)](README.ar.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **ملاحظة حول ترجمات الواجهة والوثائق:** تم ترجمة جميع لغات الواجهة ما عدا الإنجليزية (المملكة المتحدة) الأصلية باستخدام نماذج ذكاء اصطناعي؛ وقد تكون الصيغ غير دقيقة أو تحتوي على أخطاء.

</small>

<br/>

<a id="screenshots"></a>
## لقطات الشاشة

**محدد اللغة**

![محدد اللغة](../images/screenshots/ar/language-selector.png)

**الترجمة**

![الترجمة](../images/screenshots/ar/translate.png)

**التحويل - محرر الأوامر**

![التحويل - محرر الأوامر](../images/screenshots/ar/transform-prompt-edit.png)

**لوحة التحكم**

![لوحة تحليل التكلفة](../images/screenshots/ar/dashboard-summary.png)

**الأرشيف**

![الأرشيف](../images/screenshots/ar/history.png)

**الإعدادات - اختيار النموذج**

![الإعدادات - اختيار النموذج](../images/screenshots/ar/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## فهرس المحتويات

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [البدء السريع](#quick-start)
- [التثبيت](#installation)
  - [ويندوز (Electron)](#windows-electron)
  - [لينكس (Electron)](#linux-electron)
  - [Docker](#docker)
- [الحصول على مفتاح OpenRouter API](#getting-an-openrouter-api-key)
- [التكوين والبيئة](#configuration-and-environment)
- [التطوير والهندسة](#development-and-architecture)
- [الإصدارات والوسوم](#releases-and-tags)
- [كيفية المساهمة](#contributing)
- [إخلاء المسؤولية](#disclaimer)
- [الترخيص](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## البدء السريع

**Docker (مُوصى به للتشغيل الذاتي)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

استبدل `sk-or-your-key` بمفتاح [OpenRouter API](https://openrouter.ai/keys) الخاص بك (أو قم بتعيين مفاتيح موفر آخر؛ راجع [التكوين](#configuration-and-environment)). افتح [http://localhost:5000](http://localhost:5000) وغيّر كلمة مرور المسؤول الافتراضية قبل نشر الخدمة.

<br/>

> ℹ️ **ملاحظة**<br/>
> في Docker، يتم تعيين بيانات اعتماد نموذج اللغة الكبير (LLM) باستخدام متغيرات البيئة مثل `OPENROUTER_KEY` و`OPENAI_KEY` و`CEREBRAS_KEY`، ... (وليست من واجهة الويب). أما على سطح المكتب (Electron)، فتتم تهيئة المفاتيح من خلال **الإعدادات → API**.

<br/>

**ويندوز**

قم بتنزيل آخر إصدار من `Transrewrt Setup x.y.z.exe` من صفحة [الإصدارات](https://github.com/wsj-br/transrewrt/releases)، ثم شغّل البرنامج التثبيتي، وابدأ تشغيله من قائمة ابدأ أو اختصار سطح المكتب. أدخل مفاتيح API الخاصة بك في علامة التبويب **الإعدادات → API**. تحتاج إلى تهيئة مزود واحد على الأقل، ويعد OpenRouter خيارًا شائعًا للنماذج المجانية.

<br/>

**لينكس**

قم بتنزيل ملف `.AppImage` المناسب لمعالجك من [الإصدارات](https://github.com/wsj-br/transrewrt/releases) (`x64` لأجهزة الحاسوب النموذجية، و`arm64` لأغلب الأجهزة التي تعمل بمعمارية ARM، مثل راسبيري باي 4 فما فوق)، ثم نفّذ ما يلي:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

أدخل مفاتيح API الخاصة بك في **الإعدادات → API**. يجب تهيئة مزود واحد على الأقل، ويعد OpenRouter الخيار الشائع للنماذج المجانية.

على أنظمة ديبيان/أوبونتو، قد تحتاج إلى تثبيت حزم إضافية أولاً:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

انظر [Installation → Linux](#linux-electron) للمزيد من التفاصيل.

<br/>

> ℹ️ **ملاحظة**<br/>
> نظام macOS غير مدعوم حاليًا. يتوفر Transrewrt لأنظمة ويندوز ولينكس وDocker.

<br/>

بمجرد تشغيل التطبيق، اطلع على [**دليل المستخدم (User Guide)**](USER-GUIDE.ar.md) لمعرفة كيفية ترجمة النصوص وإعادة صياغتها وتحويلها، وإدارة المطالبات، وتكوين النماذج.

<br/><br/>

<a id="installation"></a>
## التثبيت

<a id="windows-electron"></a>
### ويندوز (Electron)

- قم بتنزيل أحدث برنامج تثبيت من [الإصدارات](https://github.com/wsj-br/transrewrt/releases).
- شغّل ملف `.exe` ثم اتبع التعليمات في البرنامج التثبيتي.
- عند التشغيل لأول مرة: ابدأ التطبيق من قائمة ابدأ أو الاختصار على سطح المكتب.

<br/>

<a id="linux-electron"></a>
### لينكس (Electron)

- قم بتنزيل ملف `.AppImage` المناسب (إما `x64` أو `arm64`) من [الإصدارات](https://github.com/wsj-br/transrewrt/releases).
- نفّذ الأمر التالي: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` على أنظمة x86_64/amd64، أو استخدم اسم ملف `...-arm64.AppImage` على معالجات ARM64.
- التبعيات الإضافية (لأنظمة ديبيان/أوبونتو): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- راجع [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) للمزيد.

<br/>

<a id="docker"></a>
### Docker

- جرّب: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- عيّن مفتاح مزود واحد على الأقل عبر بيئة النظام (مثل `OPENROUTER_KEY` لمستخدمي OpenRouter). مرر المتغيرات باستخدام `-e` أو `docker compose` / `.env` لضمان عدم إدراج الأسرار داخل الصورة.
- **لا يتم** إدخال مفاتيح المزود من خلال واجهة الويب؛ بل يقوم الخادم بقراءتها مباشرة من بيئة النظام.

مثال - استخدام مجلد مُسمى للحفاظ على البيانات (مفتاح OpenRouter عبر البيئة):

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
| المنفذ     | `5000` (يتم ربطه باستخدام `-p 5000:5000`)                                                                              |
| المجلد | ربط `/app/data` للحفاظ على التكوين وقاعدة البيانات                                                    |
| متغيرات البيئة | `PORT`، `CONFIG_PATH`، بالإضافة إلى مفاتيح LLM (`OPENROUTER_KEY`، `OPENAI_KEY`، …) - راجع [التكوين](#configuration-and-environment) |

لبناء تشغيل من المصدر: `docker compose up --build -d` أو `pnpm docker:up` - انظر [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## الحصول على مفتاح واجهة برمجة تطبيقات OpenRouter

يدعم Transrewrt العديد من مزودي الذكاء الاصطناعي. ويشتهر [OpenRouter](https://openrouter.ai) لأنه يجمع العديد من النماذج تحت مفتاح واحد ويقدم نماذج مجانية.

1. سجّل حسابًا أو سجل الدخول عبر [openrouter.ai](https://openrouter.ai).
2. افتح صفحة [Keys](https://openrouter.ai/keys) وأنشئ مفتاحًا جديدًا (سمّه، ويمكنك تحديد حد ائتمان اختياريًا). يمكنك استخدام النماذج المجانية دون إضافة رصيد.
3. **النسخة المكتبية (Electron):** الصق المفاتيح في **الإعدادات → واجهة برمجة التطبيقات (API)**. **Docker:** قم بتعيين متغيرات البيئة مثل `OPENROUTER_KEY` (انظر [البدء السريع](#quick-start)).

لا تستخدم نموذج **Body Builder** الخاص بـ OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) للترجمة أو إعادة الصياغة أو التحويل: لأنه يُرجع حمولات طلب بتنسيق JSON، وليس النص المكتمل لهذه المهام. راجع [الإعدادات → النماذج](USER-GUIDE.ar.md#models) في الدليل التعليمي.

يمكنك أيضًا استخدام مزودين آخرين (OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، Cerebras) أو تشغيل النماذج محليًا باستخدام [Ollama](https://ollama.com). راجع [التكوين](#configuration-and-environment) للحصول على قائمة كاملة بالمزودين الداعمين والمتغيرات البيئية.

> ⚠️ **تحذير**<br/>
> إذا كنت تستخدم Ollama من جهاز آخر أو حاوية أو خدمة، فتذكر تهيئة Ollama للسماح بالاتصالات الخارجية (ليست فقط على localhost).

للمزيد حول الحدود، ونموذج "استخدم مفتاحك الخاص" (BYOK)، وغير ذلك، راجع [مصادقة OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## الإعداد والبيئة

**مواقع ملفات الإعداد**

| النشر | موقع الإعداد |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| الويب / Docker | `/app/data/config.json` (استخدم تخزينًا مثبتًا للحفاظ على البيانات) |

<br/>

**متغيرات البيئة** (للويب/Docker فقط؛ بينما Electron يستخدم ملف الإعداد المحلي)

| المتغير | القيمة الافتراضية | الوصف |
| ---------------- | ----------------------- | ----------- |
| `PORT` | `5000` | منفذ الاستماع للخادم |
| `CONFIG_PATH` | `/app/data/config.json` | مسار ملف الإعداد |
| `OPENROUTER_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات OpenRouter |
| `OPENAI_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات OpenAI |
| `CEREBRAS_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات Cerebras |
| `ANTHROPIC_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات Anthropic |
| `GOOGLE_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات Google Gemini |
| `DEEPSEEK_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات DeepSeek |
| `GROQ_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات Groq |
| `MISTRAL_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات Mistral |
| `OLLAMA_URL` | *(فارغ)* | عنوان URL الأساسي لـ Ollama (مثلاً: `http://host.docker.internal:11434`) |
| `XAI_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات xAI |

يجب أن تقوم بتهيئة المزودين الذين تستخدمهم فقط. وتتبع معرفات النماذج مجالات معينة (`openrouter/…`، `openai/…`، `cerebras/…`، `ollama/…`، إلخ.).

**عرض التكلفة:** تقوم OpenRouter بإعادة التكلفة الفعلية المستحقة عند توفرها. أما المزودون الآخرون فيستخدمون التكلفة **المُقدّرة** استنادًا إلى أسعار النماذج العامة من OpenRouter إن توفر مفتاح OpenRouter؛ وإذا لم يتوفر، فقد تُعرض تكلفة المزودين غير التابعين لـ OpenRouter كقيمة `0`. هذه التقديرات ليست فواتير.

<br/>

**البيانات وحُسن البقاء (persistence):** للنظام يعمل بـ Docker، قم بتركيب تخزين (volume) في المسار `/app/data` لضمان بقاء `config.json` وقاعدة بيانات SQLite عند إعادة تشغيل الحاوية. في حال عدم استخدام تخزين، ستُفقد جميع البيانات عند توقف الحاوية.

**المطورون:** بعد استرجاع التحديثات التي تُستبدل فيها صيغة الإعداد القديمة ذات المفتاح الفردي، قم بإعادة تعيين أو دمج `data/config.json` مع البنية الافتراضية الجديدة من `src/config-defaults/config_default.json` إذا كان ملفك المحلي لا يزال يستخدم الحقول الملغاة (`api_key`، `api_url`، خيارات البروكسي).

<br/>

**مصادقة الويب:**

- المسؤول الافتراضي: `admin` / `transrewrt26`.
- إدارة المستخدمين من خلال **الإعدادات → المستخدمون**.
- إعادة تعيين كلمة المرور: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (من المصدر: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **تحذير**<br/>
> قم بتغيير كلمة مرور المسؤول الافتراضية فورًا على أي خادم يمكن الوصول إليه عبر الشبكة.

<br/>

تتوفر الإعدادات المهمة (الخط، النماذج، اللغات، إلخ) داخل إعدادات التطبيق.

<br/><br/>

<a id="development-and-architecture"></a>

## التطوير والهندسة المعمارية

- **التطوير:** الإعداد، والبناء، والاختبار، والنشر (Electron، الويب، Docker) - انظر **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **الهندسة المعمارية ونظرة عامة على النظام:** هيكل المجلدات، الحزمة التقنية، وقرارات التصميم - انظر **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## الإصدارات والوسوم

- تُشغّل **الوسوم في Git** `v`* (مثلاً `v1.0.10`) عملية [مخطط الإصدار](.github/workflows/release.yml). وتأرفق **إصدارات GitHub** ملفات التثبيت الخاصة بنظام ويندوز (`.exe`) وصيغ AppImage الخاصة بنظام لينكس (**x64** و **arm64**).
- تُنشر **صور Docker** على `ghcr.io/wsj-br/transrewrt`. وتتطابق وسوم الصور مع إصدار Git (مثلاً `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) بالاضافة إلى الوسم `latest`. متعددة الأنظمة: `linux/amd64` و `linux/arm64` (مثلاً على جهاز Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## المساهمة

1. قم بعمل نسخة (Fork) من المستودع.
2. أنشئ فرع ميزة: `git checkout -b feature/my-feature`
3. أرسل تعديلاتك مع رسالة واضحة.
4. ادفع التعديلات وافتح طلب سحب (Pull Request) إلى الفرع `main`.

يُرجى اتباع نمط الكود القائم واختبار التغييرات الخاصة بك في كلا الوضعين (Electron والويب) قبل إرسالها. راجع [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) للحصول على تعليمات البناء والاختبار.

<br/>

**إبلاغ عن المشاكل:** افتح تذكرة (Issue) على [GitHub](https://github.com/wsj-br/transrewrt/issues). وقم بتضمين نظامك (ويندوز / لينكس / Docker) وإصدار التطبيق (موجود في نافذة "حول" أو صفحة الإصدارات).

<br/><br/>

<a id="disclaimer"></a>
## إخلاء المسؤولية

أسماء المنتجات والأيقونات مملوكة لأصحابها وتصنفهم لأغراض التعريف فقط. هذا البرنامج غير تابع بأي من العلامات التجارية المذكورة ولا يخضع لموافقتها.

<br/><br/>

<a id="license"></a>
## الترخيص

حقوق النشر © 2026 والديمار سكودلر جونيور.

[ترخيص أباتشي 2.0](LICENSE)