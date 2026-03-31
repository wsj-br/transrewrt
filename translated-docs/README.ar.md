---
translation_last_updated: '2026-03-31T23:41:04.312Z'
source_file_mtime: '2026-03-31T23:34:44.122Z'
source_file_hash: 4c9fbb976bec3529
translation_language: ar
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="الإصدار"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="الرخصة: أباتشي 2.0"></a>
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
> في Docker، يتم تعيين بيانات اعتماد نموذج اللغة الكبير (LLM) باستخدام متغيرات البيئة مثل `OPENROUTER_API_KEY`، `OPENAI_API_KEY`، `CEREBRAS_API_KEY`، ... (وليس في واجهة المستخدم الويب). على سطح المكتب (Electron) تقوم بتكوين المفاتيح في **الإعدادات → API**.

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

**رسائل وحدة التحكم:** تُخفي إصدارات لينكس المُعبأة (`x64` و`arm64` AppImages) تحذيرات إيقاف دعم نود في الطرفية (مثلاً الوحدة المضمنة `punycode`). إذا طبعت كروميوم أخطاء GPU / EGL مثل "GLES3 غير مدعوم" ولكن التطبيق يعمل، يمكنك كتمها عن طريق تعطيل التسارع المادي:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

ينطبق ذلك على amd64 أيضًا؛ غيّر اسم الملف ليتطابق مع تنزيلك. راجع [التثبيت → لينكس (إلكترون)](#linux-electron) لمزيد من التفاصيل.

على ديبيان/أوبونتو قد تحتاج إلى مكتبات تشغيل إضافية يتوقعها كروميوم (غالبًا موجودة بالفعل على أجهزة سطح المكتب الكاملة). استخدم **`libnotify4`** للإشعارات على سطح المكتب—وليس** `libnotify-dev` (هذا مخصص لبناء البرمجيات، وليس لتشغيل ملف AppImage المعبأ):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

قد تفشل الصور المُصغّرة أو المخصصة بسبب نقص ملف `.so`؛ قم بتثبيت الحزمة التي يُسمّيها الخطأ (إضافات شائعة: `libatk1.0-0`، `libatk-bridge2.0-0`، `libgbm1`، `libdrm2`). بعض البيئات تحتاج إلى FUSE لتشغيل ملفات AppImages (مثلاً `libfuse2` على أوبونتو 22.04+)، أو استخدم `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **ملاحظة**<br/>
> نظام التشغيل macOS غير مدعوم حاليًا. يتوفر Transrewrt لنظامي التشغيل Windows وLinux، وDocker.

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
> قد يعرض ويندوز أحد تحذيرات الأمان التالية (وهو أمر طبيعي للتطبيقات غير الموقعة أو المستقلة):
>   - **التحكم بحساب المستخدم (UAC)**: "هل تريد السماح لهذا التطبيق من ناشر غير معروف بإجراء تغييرات على جهازك؟" → انقر فوق **نعم**.
>   - **Microsoft Defender SmartScreen**: "ويندوز قام بحماية جهازك" → انقر فوق **مزيد من المعلومات** → **تشغيل على أي حال**.
>
> يحدث هذا لأن التطبيق غير موقع من قبل Microsoft أو ناشر رئيسي — وهو آمن إذا تم تنزيله من إصدارات GitHub الرسمية لدينا
>  (تحقق من مجموع التحقق SHA256 أدناه).

<br/>

<a id="linux-electron"></a>
### لينكس (Electron)

- قم بتنزيل ملف `.AppImage` المناسب (`x64` أو `arm64`) من [الإصدارات](https://github.com/wsj-br/transrewrt/releases).
- قم بالتشغيل: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` على x86_64/amd64، أو استخدم اسم ملف `...-arm64.AppImage` على ARM64.
- **مكتبات التشغيل لـ ديبيان/أوبنتو** (إلكترون/كروميوم؛ مثل [البدء السريع → لينكس](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — استخدم **`libnotify4`**، وليس `libnotify-dev`. في الأنظمة المبسطة، قم بتثبيت أي ملف `.so` مفقود يظهر في الطرفية؛ غالبًا ما تكون المكونات الإضافية مثل `libatk1.0-0`، `libatk-bridge2.0-0`، `libgbm1`، `libdrm2` مطلوبة. قد يحتاج AppImage إلى `libfuse2` (أوبنتو 22.04+) أو `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **رسائل وحدة معالجة الرسومات (GPU):** قد يقوم كروميوم بتسجيل أخطاء تهيئة GPU أو EGL على بعض الأنظمة (خاصة ARM)؛ لكن التطبيق لا يزال بإمكانه العمل بشكل طبيعي. لتجنب هذه الرسائل، قم بالتشغيل مع إيقاف التسارع المادي: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (أو اسم ملفك الخاص بـ `arm64`).

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
## الحصول على مفتاح واجهة برمجة تطبيقات OpenRouter

يدعم Transrewrt العديد من موفري الذكاء الاصطناعي. يُعد [أوبن روتر](https://openrouter.ai) خيارًا شائعًا لأنه يجمع العديد من النماذج تحت مفتاح واحد ويوفر نماذج مجانية.

1. سجّل حسابًا أو سجّل الدخول على [openrouter.ai](https://openrouter.ai).
2. افتح صفحة [مفاتيح](https://openrouter.ai/keys) وأنشئ مفتاحًا جديدًا (سمّه، ويمكنك اختيار تحديد حد ائتماني). يمكنك استخدام النماذج المجانية دون إضافة رصيد.
3. **النسخة المكتبية (إلكترون):** الصق المفاتيح في **الإعدادات → واجهة برمجة التطبيقات (API)**. **دوكر:** عيّن متغيرات البيئة مثل `OPENROUTER_API_KEY` (انظر [البدء السريع](#quick-start)).

لا تستخدم نموذج **Body Builder** من OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) للترجمة أو إعادة الصياغة أو التحويل: فهو يُرجع حُمولات طلب JSON، وليس النص المكتمل لتلك المهام. راجع [الإعدادات → النماذج](USER-GUIDE.ar.md#models) في دليل المستخدم.

يمكنك أيضًا استخدام موفرين آخرين (أوبن إي آي، أنثروبيك، جوجل جيميني، ديب سيك، غروك، ميسترال، إكس إيه آي، Cerebras) أو تشغيل النماذج محليًا باستخدام [أولاما](https://ollama.com). راجع [التكوين](#configuration-and-environment) للحصول على القائمة الكاملة للموفرين المدعومين ومتغيرات البيئة.

> ⚠️ **تحذير**<br/>
> إذا كنت تستخدم Ollama من جهاز آخر أو حاوية أو خدمة، فتذكر تهيئة Ollama للسماح بالاتصالات الخارجية (وليس localhost فقط).

للمزيد حول الحدود، واستخدام المفتاح الخاص بك (BYOK)، وغيرها، راجع [مصادقة أوبن روتر](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## التهيئة والبيئة

**مواقع ملفات الإعدادات**

| النشر | موقع الإعدادات |
| ------------------ | ------------------------------------------------- |
| إلكترون (ويندوز) | `%APPDATA%\transrewrt\` |
| إلكترون (لينكس) | `~/.config/transrewrt/` |
| ويب / دوكر | `/app/data/config.json` (استخدم مجلدًا مشتركًا للحفاظ على البيانات) |

<br/>

**المتغيرات البيئية** (للويب/دوكر فقط؛ إلكترون يستخدم ملف الإعدادات المحلي)

| المتغير             | الوصف                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | منفذ الاستماع للخادم (الافتراضي `5000`)                                  |
| `CONFIG_PATH`        | مسار ملف التهيئة (الافتراضي `/app/data/config.json`)                 |
| `TZ`                 | المنطقة الزمنية للوقت من جانب الخادم (السجلات، إلخ) (الافتراضي `Europe/London`) |
| `OPENROUTER_API_KEY` | مفتاح واجهة برمجة تطبيقات OpenRouter                                                           |
| `OPENAI_API_KEY`     | مفتاح واجهة برمجة تطبيقات OpenAI                                                               |
| `CEREBRAS_API_KEY`   | مفتاح واجهة برمجة تطبيقات Cerebras                                                             |
| `ANTHROPIC_API_KEY`  | مفتاح واجهة برمجة تطبيقات Anthropic                                                            |
| `GOOGLE_API_KEY`     | مفتاح واجهة برمجة تطبيقات Google Gemini                                                        |
| `DEEPSEEK_API_KEY`   | مفتاح واجهة برمجة تطبيقات DeepSeek                                                             |
| `GROQ_API_KEY`       | مفتاح واجهة برمجة تطبيقات Groq                                                                 |
| `MISTRAL_API_KEY`    | مفتاح واجهة برمجة تطبيقات Mistral                                                              |
| `OLLAMA_URL`         | الرابط الأساسي لأولاما (مثلاً `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | مفتاح واجهة برمجة تطبيقات xAI                                                                  |

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
> قم بتغيير كلمة المرور الافتراضية للمسؤول فورًا على أي مضيف يمكن الوصول إليه عبر الشبكة.

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
