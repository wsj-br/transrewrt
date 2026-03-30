---
translation_last_updated: '2026-03-30T00:45:51.897Z'
source_file_mtime: '2026-03-29T23:51:36.506Z'
source_file_hash: fa17b974cbf42a93
translation_language: ar
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="الإصدار"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="الرخصة: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="المنصة">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

أداة نصية مدعومة بالذكاء الاصطناعي: ترجمة بين اللغات، وإعادة صياغة بنمط مختلف، وتحويل باستخدام أوامر مخصصة — باستخدام موفري ذكاء اصطناعي متعددين (أوبن روتر، أوبن إي آي، أنثروبيك، جوجل جيميني، ديب سيك، غروك، ميسترال، إكس إيه آي، وأولاما محلي). تعمل كتطبيق سطح مكتب (إلكترون) أو تطبيق ويب ذاتي الاستضافة (دوكير).

- **ترجمة** — بين عشرات اللغات، مع كشف تلقائي للمصدر
- **إعادة صياغة** — إصلاح القواعد، تحسين الوضوح، شكل رسمي/غير رسمي، اختصار، توسيع، تقني
- **تحويل** — أوامر ذكاء اصطناعي مخصصة؛ إنشاء وإدارة الأوامر، مع إمكانية تحديد اللغة المستهدفة لكل أمر
- **السجل** — سجل تنفيذ كامل يحتوي على نص الإدخال والإخراج، مع تصفية وتصدير
- **النماذج والتكلفة** — اختيار النماذج من أي مزود مهيأ؛ لوحات معلومات بالتكلفة والاستخدام مع سجلات، وملخصات حسب النموذج/العملية/اليوم
- **واجهة المستخدم** — واجهة متعددة اللغات (أكثر من 30 لغة، مع دعم الكتابة من اليمين لليسار)، خطوط، ...
- **الوضع الويب** — دعم مستخدمين متعددين مع أدوار المسؤول
- **سطح المكتب** — تطبيق إلكترون لنظامي ويندوز ولينكس
- **ذاتي الاستضافة** — صورة دوكير لـ amd64 و arm64 (جاهزة لـ Raspberry Pi)

بعد التثبيت، راجع **[دليل المستخدم](USER-GUIDE.ar.md)** للحصول على شرح كامل لجميع الميزات.

<small>**اقرأ بلغات أخرى:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **ملاحظة حول ترجمات واجهة المستخدم والوثائق:** تم ترجمة جميع لغات الواجهة باستثناء الإنجليزية (المملكة المتحدة) الأصلية باستخدام نماذج ذكاء اصطناعي؛ وقد تكون الصياغة غير دقيقة أو تحتوي على أخطاء.

</small>

<br/>

<a id="screenshots"></a>
## لقطات الشاشة

**محدد اللغة**

![Language selector](../images/screenshots/ar/language-selector.png)

**ترجمة**

![Translate](../images/screenshots/ar/translate.png)

**تحويل - محرر الأوامر**

![Transform - prompt editor](../images/screenshots/ar/transform-prompt-edit.png)

**لوحة المعلومات**

![Dashboard summary — usage](../images/screenshots/ar/dashboard-summary.png)

**السجل**

![History](../images/screenshots/ar/history.png)

**الإعدادات - اختيار النموذج**

![Settings - model selection](../images/screenshots/ar/settings-models.png)

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
  - [تهيئة المنطقة الزمنية](#configuring-the-timezone)
- [الحصول على مفتاح واجهة برمجة تطبيقات أوبن روتر](#getting-an-openrouter-api-key)
- [التكوين والبيئة](#configuration-and-environment)
- [التطوير والهندسة المعمارية](#development-and-architecture)
- [الإبلاغ عن المشكلات](#reporting-issues)
- [إخلاء المسؤولية](#disclaimer)
- [الرخصة](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## البدء السريع

**Docker (مُوصى به للاستضافة الذاتية)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

استبدل `sk-or-your-key` بمفتاح [مفتاح واجهة برمجة تطبيقات أوبن روتر](https://openrouter.ai/keys) (أو عيّن مفاتيح موفر آخر؛ انظر [التكوين](#configuration-and-environment)). افتح [http://localhost:5000](http://localhost:5000) وغيّر كلمة المرور الافتراضية قبل تعريض الخدمة للخارج.

<br/>

> ℹ️ **ملاحظة**<br/>
> في Docker، يتم تعيين بيانات اعتماد نموذج اللغة الكبير باستخدام متغيرات البيئة مثل `OPENROUTER_API_KEY`، `OPENAI_API_KEY`، `CEREBRAS_API_KEY`، … (وليست في واجهة المستخدم الويب). في الإصدار المكتبي (Electron)، تقوم بتكوين المفاتيح في **الإعدادات → واجهة برمجة التطبيقات (API)**.

<br/>

**ويندوز**

قم بتنزيل أحدث إصدار من `Transrewrt Setup x.y.z.exe` من [الإصدارات](https://github.com/wsj-br/transrewrt/releases)، شغّل المثبت، ثم ابدأ التشغيل من قائمة ابدأ أو اختصار سطح المكتب. أدخل مفاتيح واجهة برمجة التطبيقات (API) الخاصة بك في **الإعدادات → واجهة برمجة التطبيقات (API)**. تحتاج إلى تكوين موفر واحد على الأقل، ويُعد أوبن روتر شائعًا للنماذج المجانية.

<br/>

**لينكس**

قم بتنزيل ملف `.AppImage` المناسب لمعالجك من [الإصدارات](https://github.com/wsj-br/transrewrt/releases) (`x64` لأجهزة الكمبيوتر النموذجية، `arm64` لمعظم أجهزة ARM، بما في ذلك Raspberry Pi 4+)، ثم:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

أدخل مفاتيح واجهة برمجة التطبيقات (API) الخاصة بك في **الإعدادات → واجهة برمجة التطبيقات (API)**. تحتاج إلى تكوين موفر واحد على الأقل، ويُعد أوبن روتر شائعًا للنماذج المجانية.

في ديبيان/أوبونتو، قد تحتاج إلى تثبيت تبعيات إضافية أولاً:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

راجع [التثبيت → لينكس](#linux-electron) للتفاصيل.

<br/>

> ℹ️ **ملاحظة**<br/>
> نظام macOS غير مدعوم حاليًا. يتوفر Transrewrt لويندوز، ولينكس، وDocker.

<br/>

بمجرد تشغيل التطبيق، راجع **[دليل المستخدم](USER-GUIDE.ar.md)** لمعرفة كيفية ترجمة النصوص، وإعادة صياغتها، وتحويلها، وإدارة الموجهات، وتكوين النماذج.

<br/><br/>

<a id="installation"></a>
## التثبيت

<a id="windows-electron"></a>
### ويندوز (Electron)

- قم بتنزيل أحدث مثبت من [الإصدارات](https://github.com/wsj-br/transrewrt/releases).
- شغّل ملف `.exe` واتبع خطوات المثبت.
- عند التشغيل الأول: ابدأ التطبيق من قائمة ابدأ أو اختصار سطح المكتب.

<br/>

> ℹ️ **ملاحظة**<br/>
> قد تعرض ويندوز أحد تحذيرات الأمان التالية (وهو أمر طبيعي للتطبيقات غير الموقعة أو المستقلة):
>   - **التحكم بحساب المستخدم (UAC)**: "هل تريد السماح لهذا التطبيق من ناشر غير معروف بإجراء تغييرات على جهازك؟" → انقر فوق **نعم**.
>   - **Microsoft Defender SmartScreen**: "ويندوز قام بحمايتك" → انقر فوق **مزيد من المعلومات** → **التشغيل على أي حال**.
>
> يحدث هذا لأن التطبيق غير موقع من قِبل مايكروسوفت أو ناشر رئيسي — وهو آمن إذا تم تنزيله من إصدارات GitHub الرسمية لدينا
>  (تحقق من مجموع التحقق SHA256 أدناه).

<br/>

<a id="linux-electron"></a>
### لينكس (إلكترون)

- قم بتنزيل ملف `.AppImage` المناسب (`x64` أو `arm64`) من [الإصدارات](https://github.com/wsj-br/transrewrt/releases).
- شغّل الأمر: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` على x86_64/amd64، أو استخدم اسم الملف `...-arm64.AppImage` على ARM64.
- التبعيات الإضافية (ديبيان/أوبونتو): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- راجع [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) للمزيد.

<br/>

<a id="docker"></a>
### دوكر

- جلب: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- قم بتعيين مفتاح موفر واحد على الأقل عبر البيئة (مثلاً `OPENROUTER_API_KEY` لأوبن روتر). مرر المتغيرات باستخدام `-e` أو `docker compose` / `.env` لضمان عدم تضمين الأسرار داخل الصورة.
- **لا يتم** إدخال مفاتيح الموفرين في واجهة الويب؛ بل يقوم الخادم بقراءتها من البيئة.

مثال - استخدام وحدة تخزين مسماة للحفاظ على البيانات (مفتاح أوبن روتر عبر البيئة):

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
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

راجع [التكوين](#configuration-and-environment) للحصول على جميع متغيرات البيئة، مثل `PORT` و`CONFIG_PATH` و`TZ` ومفاتيح نماذج الذكاء الاصطناعي (`OPENROUTER_API_KEY` و`OPENAI_API_KEY`، ...).

<a id="configuring-the-timezone"></a>
### تهيئة المنطقة الزمنية

يتبع تنسيق التاريخ والوقت في واجهة المستخدم **متصفح** المستخدم من حيث اللغة والمنطقة الزمنية. أما من ناحية **الخادم** (مثل السجلات)، فإن الحاوية تستخدم متغير البيئة `TZ`. القيمة الافتراضية هي `TZ=Europe/London`.

للاستخدام بمنطقة زمنية أخرى، عيّن `TZ` في ملف Compose الخاص بك، مثلاً:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

أو مرره عند تشغيل الحاوية (دوكر):

```bash
--env TZ=America/Sao_Paulo
```

على العديد من أنظمة لينكس، يمكنك نسخ اسم المنطقة الزمنية للنظام باستخدام:

```bash
echo TZ=\"$(</etc/timezone)\"
```

يتم الحفاظ على قائمة بأسماء المناطق الزمنية الصالحة في [قاعدة بيانات tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (ويكيبيديا).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## الحصول على مفتاح OpenRouter API

يدعم Transrewrt العديد من موفري الذكاء الاصطناعي. يُعد [أوبن روتر](https://openrouter.ai) خيارًا شائعًا لأنه يجمع العديد من النماذج تحت مفتاح واحد ويوفر نماذج مجانية.

1. سجّل حسابًا أو سجّل الدخول على [openrouter.ai](https://openrouter.ai).
2. افتح صفحة [مفاتيح](https://openrouter.ai/keys) وأنشئ مفتاحًا جديدًا (سمّه، ويمكنك اختيار تحديد حد ائتماني). يمكنك استخدام النماذج المجانية دون إضافة رصيد.
3. **النسخة المكتبية (إلكترون):** الصق المفاتيح في **الإعدادات → واجهة برمجة التطبيقات (API)**. **دوكر:** عيّن متغيرات البيئة مثل `OPENROUTER_API_KEY` (انظر [البدء السريع](#quick-start)).

لا تستخدم نموذج **Body Builder** من أوبن روتر ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) للترجمة أو إعادة الصياغة أو التحويل: فهو يُرجع حُمولات طلب بصيغة JSON، وليس النص المكتمل لهذه المهام. راجع [الإعدادات → النماذج](USER-GUIDE.ar.md#models) في دليل المستخدم.

يمكنك أيضًا استخدام موفرين آخرين (أوبن إي آي، أنثروبيك، جوجل جيميني، ديب سيك، غروك، ميسترال، إكس إيه آي، Cerebras) أو تشغيل النماذج محليًا باستخدام [أولاما](https://ollama.com). راجع [التكوين](#configuration-and-environment) للحصول على القائمة الكاملة للموفرين المدعومين ومتغيرات البيئة.

> ⚠️ **تحذير**<br/>
> إذا كنت تستخدم أولاما من جهاز آخر أو حاوية أو خدمة، فتذكر تهيئة أولاما للسماح بالاتصالات الخارجية (وليس localhost فقط).

للمزيد حول الحدود، واستخدام المفتاح الخاص بك (BYOK)، وغيرها، راجع [مصادقة أوبن روتر](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## الإعدادات والبيئة

**مواقع ملفات الإعدادات**

| النشر | موقع الإعدادات |
| ------------------ | ------------------------------------------------- |
| إلكترون (ويندوز) | `%APPDATA%\transrewrt\` |
| إلكترون (لينكس) | `~/.config/transrewrt/` |
| ويب / دوكر | `/app/data/config.json` (استخدم مجلدًا مشتركًا للحفاظ على البيانات) |

<br/>

**المتغيرات البيئية** (للويب/دوكر فقط؛ إلكترون يستخدم ملف الإعدادات المحلي)

| المتغير | القيمة الافتراضية | الوصف |
| ---------------- | ----------------------- | ----------- |
| `PORT` | `5000` | منفذ الاستماع للخادم |
| `CONFIG_PATH` | `/app/data/config.json` | مسار ملف الإعدادات |
| `TZ` | `Europe/London` | المنطقة الزمنية حسب معيار IANA لوقت الخادم (السجلات، إلخ)؛ واجهة المستخدم تتبع ما يحدده المتصفح. راجع [دوكر → المنطقة الزمنية](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات أوبن روتر |
| `OPENAI_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات أوبن إي آي |
| `CEREBRAS_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات Cerebras |
| `ANTHROPIC_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات أنثروبيك |
| `GOOGLE_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات جوجل جيميني |
| `DEEPSEEK_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات ديب سيك |
| `GROQ_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات غروك |
| `MISTRAL_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات ميسترال |
| `OLLAMA_URL` | *(فارغ)* | الرابط الأساسي لأولاما (مثل `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(فارغ)* | مفتاح واجهة برمجة تطبيقات إكس إيه آي |

قم بتكوين موفري الخدمة الذين تستخدمهم فقط. أسماء النماذج تتبع تسمية مساحات (مثل `openrouter/…`، `openai/…`، `cerebras/…`، `ollama/…`، إلخ).

**عرض التكلفة:** يُرجع أوبن روتر التكلفة المُفَاتَرة الفعلية عند توفرها. أما موفرو الخدمة الآخرون فيستخدمون **تكلفة مقدرة** من أسعار النماذج العامة لأوبن روتر عند توفر مفتاح أوبن روتر؛ وإذا لم يكن المفتاح متاحًا، فقد تُعرض التكلفة غير المرتبطة بأوبن روتر كـ `0`. هذه التقديرات ليست فواتير رسمية.

<br/>

**البيانات والثبات:** بالنسبة لدوكر، قم بربط مجلد مشترك في `/app/data` لضمان استمرارية ملف `config.json` وقاعدة بيانات SQLite عند إعادة تشغيل الحاوية. بدون مجلد مشترك، تُفقد جميع البيانات عند إيقاف الحاوية.

**للمطورين:** بعد استيراد التحديثات التي تستبدل إعداد المفتاح الواحد القديم، قم بإعادة تعيين أو دمج ملف `data/config.json` مع الشكل الجديد الافتراضي من `src/config-defaults/config_default.json` إذا كان ملفك المحلي لا يزال يستخدم حقولًا تم إزالتها (`api_key`، `api_url`، خيارات البروكسي).

<br/>

**مصادقة الويب:**

- المسؤول الافتراضي: `admin` / `transrewrt26`.
- إدارة المستخدمين من خلال **الإعدادات → المستخدمين**.
- إعادة تعيين كلمة المرور: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (من المصدر: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **تحذير**<br/>
> قم بتغيير كلمة مرور المسؤول الافتراضية فورًا على أي جهاز يمكن الوصول إليه عبر الشبكة.

<br/>

تتوفر الإعدادات الرئيسية (الخط، النماذج، اللغات، إلخ) في إعدادات التطبيق.

<br/><br/>

<a id="development-and-architecture"></a>
## التطوير والهندسة المعمارية

- **التطوير:** الإعداد، البناء، الاختبار، والنشر (إلكترون، ويب، دوكر) - راجع **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **الهندسة المعمارية ونظرة عامة على النظام:** هيكل المجلدات، المكدس التقني، قرارات التصميم - راجع **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## الإبلاغ عن المشكلات

افتح تذكرة على [GitHub](https://github.com/wsj-br/transrewrt/issues). قم بتضمين نظام التشغيل الخاص بك (Windows / Linux / Docker) وإصدار التطبيق (موضح في نافذة "حول" أو على صفحة الإصدارات).

<br/><br/>

<a id="disclaimer"></a>
## إخلاء المسؤولية

أسماء المنتجات والأيقونات ملك لأصحابها وتُستخدم لأغراض التعريف فقط. هذا البرنامج غير تابع لأي من العلامات التجارية المذكورة أو معتمد منها.

<br/><br/>

<a id="license"></a>
## الترخيص

حقوق النشر © 2026 والديمار سكوديلر جونيور.

[Apache License 2.0](../LICENSE)
