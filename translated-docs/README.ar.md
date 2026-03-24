---
translated_at: "2026-03-24T00:50:49.426Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="شعار Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="الإصدار"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="رخصة: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="المنصة">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

أداة نصية مدعومة بالذكاء الاصطناعي: ترجم بين اللغات، أعد صياغة النصوص بأنماط مختلفة، وطبّق تحويلات باستخدام أوامر مخصصة — وذلك عبر استخدام عدة موفري ذكاء اصطناعي (OpenRouter، OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، وOllama المحلي). يمكن تشغيلها كتطبيق سطح مكتب (Electron) أو تطبيق ويب قابل الاستضافة ذاتيًا (Docker).

- **الترجمة** — بين عشرات اللغات، مع كشف تلقائي للغة المصدر
- **إعادة الصياغة** — تصحيح القواعد، تحسين الوضوح، الصيغة الرسمية/غير الرسمية، التقصير، التوسيع، الصيغة الفنية
- **التحويل** — أوامر مخصصة للذكاء الاصطناعي؛ إنشاء وإدارة الأوامر، مع إمكانية تحديد لغة مستهدفة لكل أمر على حدة
- **السجل** — سجل تنفيذ كامل يحتوي على النصوص المدخلة والمخرجة، مع إمكانية التصفية والتصدير
- **النماذج والتَّكلفة** — اختيار النماذج من أي مزوّد تم تهيئته؛ لوحة تقارير تُظهر التكاليف مع تسجيل في SQLite، وموجزات حسب النموذج/العملية/اليوم
- **واجهة المستخدم** — واجهة متعددة اللغات (أكثر من 30 لغة، مع دعم الكتابة من اليمين لليسار)، خطوط، إلخ
- **الوضع الوِب** — دعم عدة مستخدمين مع أدوار المشرف؛ مفاتيح API تبقى على الخادم ولا تُعرض أبدًا للمتصفح
- **نسخة سطح المكتب** — تطبيق Electron لأنظمة Windows وLinux
- **استضافة ذاتية** — صورة Docker متوفرة بنِظامي amd64 وarm64 (جاهزة لجهاز Raspberry Pi)

بعد التثبيت، راجع دليل **[المستخدم](USER-GUIDE.ar.md)** للحصول على شرح شامل لكافة الميزات.

<small>**اقرأ باللغات الأخرى:** [الإنجليزية (المملكة المتحدة)](README.ar.md) · [البرتغالية (البرازيل)](README.pt-BR.md) · [العربية](README.ar.md) · [البنغالية](README.bn.md) · [الكاتالانية](README.ca.md) · [الصينية المبسطة](README.zh-CN.md) · [الصينية التقليدية](README.zh-TW.md) · [الكرواتية](README.hr.md) · [التشيكية](README.cs.md) · [الهولندية](README.nl.md) · [الإنجليزية (الولايات المتحدة)](README.en-US.md) · [الفلبينية](README.tl.md) · [الفرنسية](README.fr.md) · [الألمانية](README.de.md) · [اليونانية](README.el.md) · [الهندية](README.hi.md) · [الهنغارية](README.hu.md) · [الإيطالية](README.it.md) · [اليابانية](README.ja.md) · [الجاوية](README.jv.md) · [الكورية](README.ko.md) · [الماليزية](README.ms.md) · [الفارسية](README.fa.md) · [البولندية](README.pl.md) · [البرتغالية (البرتغال)](README.pt.md) · [البنجابية](README.pa.md) · [الرومانية](README.ro.md) · [الروسية](README.ru.md) · [السلوفاكية](README.sk.md) · [الإسبانية](README.es.md) · [السواحيلية](README.sw.md) · [السويدية](README.sv.md) · [التيلوغوية](README.te.md) · [التايلاندية](README.th.md) · [التركية](README.tr.md) · [الأوكرانية](README.uk.md) · [الفيتنامية](README.vi.md)</small>

<br/>

**ملاحظة حول ترجمات واجهة المستخدم والوثائق:** تم ترجمة جميع لغات الواجهة باستثناء الإنجليزية (المملكة المتحدة) باستخدام نماذج ذكاء اصطناعي؛ وقد تكون الصياغة غير دقيقة أو تحتوي على أخطاء.

<a id="table-of-contents"></a>
## لقطات الشاشة

**مُحدِّد اللغة**

![مُحدِّد اللغة](../images/screenshots/ar/language-selector.png)

**الترجمة**

![الترجمة](../images/screenshots/ar/translate.png)

**التحويل - محرر الأوامر**

![التحويل - محرر الأوامر](../images/screenshots/ar/transform-prompt-edit.png)

**لوحة التحكم**

![لوحة تقارير التكاليف](../images/screenshots/ar/dashboard-summary.png)

**السجل**

![السجل](../images/screenshots/ar/history.png)

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
- [التطوير والبنية](#development-and-architecture)
- [الإصدارات والوسوم](#releases-and-tags)
- [كيفية المساهمة](#contributing)
- [إخلاء مسؤولية](#disclaimer)
- [الرخصة](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## البدء السريع

**Docker (مُوصى به للخدمة الذاتية)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

استبدل `sk-or-your-key` بمفتاح [OpenRouter API](https://openrouter.ai/keys) الخاص بك (أو عيّن مفاتيح مزوّد آخر؛ راجع [التكوين](#configuration-and-environment)). افتح [http://localhost:5000](http://localhost:5000) وغيّر كلمة مرور المدير الافتراضية قبل إتاحة الخدمة.

<br/>

> ℹ️ **ملاحظة**<br/>
> في Docker، تُعيّن بيانات اعتماد نموذج اللغة من خلال متغيرات البيئة مثل `OPENROUTER_KEY`، `OPENAI_KEY`، ... (وليس عبر واجهة الويب). في الإصدار المكتبي (Electron)، تقوم بضبط المفاتيح من خلال **الإعدادات → API**.

<br/>

**ويندوز**

نزّل أحدث نسخة من `Transrewrt Setup x.y.z.exe` من قسم [الإصدارات](https://github.com/wsj-br/transrewrt/releases)، شغّل المثبت، ثم ابدأ التطبيق من قائمة "ابدأ" أو الاختصار على سطح المكتب. أدخل مفاتيح API الخاصة بك في **الإعدادات → API**. يتعيّن عليك تهيئة موفر واحد على الأقل، وغالبًا يستخدم OpenRouter مع النماذج المجانية.

<br/>

**لينكس**

نزّل ملف `.AppImage` من [الإصدارات](https://github.com/wsj-br/transrewrt/releases)، ثم:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

أدخل مفاتيح API الخاصة بك في **الإعدادات → API**. يجب تهيئة موفر واحد على الأقل، ويُستخدم عادةً OpenRouter مع النماذج المجانية.

في ديبيان/أوبونتو، قد تحتاج لتثبيت تبعيات إضافية أولاً:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

راجع [التثبيت → لينكس](#linux-electron) للتفاصيل.

<br/>

> ℹ️ **ملاحظة**<br/>
> نظام macOS غير مدعوم حاليًا. يتوفر تطبيق Transrewrt لأنظمة ويندوز، ولينكس، و Docker.

<br/>

بعد تشغيل التطبيق، راجع **[الدليل التعليمي](USER-GUIDE.ar.md)** لتتعلم كيفية ترجمة النصوص، إعادة صياغتها، وتحويلها، وإدارة التعليمات، وتهيئة النماذج.

<br/><br/>

<a id="installation"></a>
## التثبيت

<a id="windows-electron"></a>
### ويندوز (Electron)

- نزّل أحدث إصدار من المثبت من [الإصدارات](https://github.com/wsj-br/transrewrt/releases).
- شغّل الملف `.exe` واتبع خطوات التثبيت.
- في أول تشغيل: ابدأ التطبيق من قائمة "ابدأ" أو من الاختصار على سطح المكتب.

<br/>

<a id="linux-electron"></a>
### لينكس (Electron)

- نزّل ملف `.AppImage` من [الإصدارات](https://github.com/wsj-br/transrewrt/releases).
- شغّله: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- التبعيات الإضافية (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- راجع الملف [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) لمزيد من المعلومات.

<br/>

<a id="docker"></a>
### Docker

- اجلب الصورة: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- عيّن مفتاح موفر واحد على الأقل من خلال بيئة النظام (مثلاً `OPENROUTER_KEY` لـ OpenRouter). مرر المتغيرات باستخدام `-e` أو `docker compose` / `.env` لضمان عدم تضمين الأسرار داخل الصورة.
- **لا** يتم إدخال مفاتيح المزودين من خلال واجهة الويب؛ بل يقرأها الخادم من بيئة النظام.

مثال - استخدام مجلد مخصص لحفظ البيانات (مفتاح OpenRouter من خلال بيئة النظام):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| الخيار  | الوصف |
|--------|-------|
| المنفذ | `5000` (يمكن تعيينه باستخدام `-p 5000:5000`) |
| المجلد | ربط `/app/data` للحفاظ على التكوين وقاعدة البيانات |
| متغيرات البيئة | `PORT`، `CONFIG_PATH`، إضافة إلى مفاتيح النماذج الكبيرة (`OPENROUTER_KEY`، `OPENAI_KEY`، ...) - راجع [التكوين](#configuration-and-environment) |

لبناء التطبيق وتشغيله من المصدر: `docker compose up --build -d` أو `pnpm docker:up` - راجع [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## الحصول على مفتاح واجهة برمجة تطبيقات OpenRouter

يدعم Transrewrt العديد من مزودي الذكاء الاصطناعي. تُعد [OpenRouter](https://openrouter.ai) خياراً شائعاً لأنها تجمع العديد من النماذج تحت مفتاح واحد وتوفر نماذج مجانية.

1. سجّل حسابك أو سجّل دخولك عبر [openrouter.ai](https://openrouter.ai).
2. افتح صفحة [Keys](https://openrouter.ai/keys) وأنشئ مفتاحاً جديداً (سمّه، ويمكنك تحديد حد ائتمان اختيارياً). يمكنك استخدام النماذج المجانية دون إضافة رصيد.
3. **النسخة المكتبية (Electron):** الصق المفاتيح في **الإعدادات → API**. **Docker:** اضبط متغيرات البيئة مثل `OPENROUTER_KEY` (انظر [البدء السريع](#quick-start)).

كما يمكنك استخدام مزودين آخرين (OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI) أو تشغيل النماذج محليًا باستخدام [Ollama](https://ollama.com). راجع [التكوين](#configuration-and-environment) للحصول على القائمة الكاملة للمزودين المدعومين ومتغيرات البيئة.

للاطلاع على الحدود، وسياسة استخدام المفتاح الخاص (BYOK)، والمزيد، يُرجى مراجعة [مصادقة OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## التكوين والبيئة

**مواقع ملفات التكوين**

| التوزيع              | موقع التكوين                                   |
| --------------------- | --------------------------------------------- |
| Electron (Windows)    | `%APPDATA%\transrewrt\`                       |
| Electron (Linux)      | `~/.config/transrewrt/`                       |
| الويب / Docker        | `/app/data/config.json` (استخدم وحدة تخزين للحفظ الدائم) |

<br/>

**متغيرات البيئة** (للنسخة الويب / Docker فقط؛ بينما تستخدم Electron ملف التكوين المحلي)

| المتغير               | القيمة الافتراضية          | الوصف |
| --------------------- | -------------------------- | ----- |
| `PORT`                | `5000`                     | منفذ الاستماع للخادم |
| `CONFIG_PATH`         | `/app/data/config.json`    | مسار ملف التكوين |
| `OPENROUTER_KEY`      | *(فارغ)*                   | مفتاح واجهة برمجة تطبيقات OpenRouter |
| `OPENAI_KEY`          | *(فارغ)*                   | مفتاح واجهة برمجة تطبيقات OpenAI |
| `ANTHROPIC_KEY`       | *(فارغ)*                   | مفتاح واجهة برمجة تطبيقات Anthropic |
| `GOOGLE_KEY`          | *(فارغ)*                   | مفتاح واجهة برمجة تطبيقات Google Gemini |
| `DEEPSEEK_KEY`        | *(فارغ)*                   | مفتاح واجهة برمجة تطبيقات DeepSeek |
| `GROQ_KEY`            | *(فارغ)*                   | مفتاح واجهة برمجة تطبيقات Groq |
| `MISTRAL_KEY`         | *(فارغ)*                   | مفتاح واجهة برمجة تطبيقات Mistral |
| `OLLAMA_URL`          | *(فارغ)*                   | الرابط الأساسي لـ Ollama (مثال: `http://host.docker.internal:11434`) |
| `XAI_KEY`             | *(فارغ)*                   | مفتاح واجهة برمجة تطبيقات xAI |

يجب عليك تهيئة مزودي الخدمة الذين تستخدمهم فقط. تُصنّف أسماء النماذج حسب النطاق (`openrouter/…`، `openai/…`، `ollama/…`، إلخ).

**عرض التكلفة:** يُرجع OpenRouter التكلفة الفعلية عند تطبيقها. أما المزودون الآخرون فيستخدمون **تكلفة تقديرية** من تسعير النماذج العامة لـ OpenRouter عند توفر مفتاح OpenRouter؛ وإذا لم يكن متوفراً، فقد تظهر التكلفة غير المخصصة لـ OpenRouter كقيمة `0`. هذه التقديرات ليست فواتير.

<br/>

**البيانات والثبات:** بالنسبة لـ Docker، قم بتوصيل وحدة تخزين في المسار `/app/data` للحفاظ على ملف `config.json` وقاعدة بيانات SQLite حتى عند إعادة تشغيل الحاوية. وفي حال عدم استخدام وحدة تخزين، ستفقد جميع البيانات عند إيقاف الحاوية.

**المطورون:** بعد سحب التحديثات التي تستبدل إعدادات المفتاح المفرد القديمة، قم بإعادة تعيين أو دمج ملف `data/config.json` مع البنية الافتراضية الجديدة من `src/config-defaults/config_default.json` إذا كان ملفك المحلي لا يزال يستخدم حقولاً تم إزالتها (`api_key`، `api_url`، خيارات البروكسي).

<br/>

**مصادقة الويب:**

- المسؤول الافتراضي: `admin` / `transrewrt26`.
- إدارة المستخدمين من خلال **الإعدادات → المستخدمون**.
- إعادة تعيين كلمة المرور: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (من المصدر: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **تحذير**<br/>
> يجب تغيير كلمة مرور المسؤول الافتراضية فوراً على أي جهاز يمكن الوصول إليه عبر الشبكة.

<br/>

الإعدادات الأساسية (الخط، النماذج، اللغات، إلخ) متوفرة في إعدادات التطبيق.

<br/><br/>

<a id="development-and-architecture"></a>
## التطوير والهندسة المعمارية

- **التطوير:** الإعداد، البناء، الاختبار، والنشر (Electron، Web، Docker) - راجع **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **الهيكل المعماري والنظام الشامل:** هيكل المجلدات، المكدس التقني، قرارات التصميم - راجع **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## الإصدارات والعلامات

- **علامات Git** `v`* (مثل `v1.0.10`) تُفعّل [تدفق الإصدار](.github/workflows/release.yml). وتُرفق **إصدارات GitHub** بملف التثبيت لنظام التشغيل Windows (`.exe`) ونظام Linux بصيغة AppImage.
- تُنشَر **صور Docker** إلى `ghcr.io/wsj-br/transrewrt`. وتتوافق علامات الصور مع إصدار Git (مثلاً `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) بالإضافة إلى العلامة `latest`. تدعم بنى متعددة: `linux/amd64` و`linux/arm64` (مثلاً على Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## المساهمة

1. قم بإنشاء نسخة عن المستودع.
2. أنشئ فرعاً لميزة جديدة: `git checkout -b feature/my-feature`
3. أرسل تعديلاتك برسالة واضحة.
4. ادفع التغييرات وافتح طلب دمج (Pull Request) ضد الفرع `main`.

يرجى اتباع نمط الكود الحالي وتجريب التغييرات في وضعَي Electron والويب قبل إرسالها. راجع [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) للحصول على تعليمات البناء والاختبار.

<br/>

**إبلاغ عن مشكلات:** افتح بلاغاً على [GitHub](https://github.com/wsj-br/transrewrt/issues). واحرص على تضمين نظامك (Windows / Linux / Docker) وإصدار التطبيق (موجود في نافذة "حول" أو صفحة الإصدارات).

<br/><br/>

<a id="disclaimer"></a>
## إخلاء مسؤولية

أسماء المنتجات والأيقونات مملوكة لأصحابها المعتمدين وتُستخدم لأغراض التعريف فقط. هذا البرنامج لا ينتمي إلى أي من العلامات التجارية المذكورة، ولا يُصادق عليه من قبلها.

<br/><br/>

<a id="license"></a>
## الرخصة

حقوق النشر © 2026 والديمار سكوديلر جونيور.

[رخصة Apache 2.0](LICENSE)