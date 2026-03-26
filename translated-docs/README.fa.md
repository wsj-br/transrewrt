---
translated_at: "2026-03-26T00:52:47.097Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="نشان Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="نسخه"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="مجوز: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="پلتفرم">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

ابزار متن مبتنی بر هوش مصنوعی: ترجمه بین زبان‌ها، بازنویسی با سبک‌های مختلف و تبدیل با دستورات سفارشی — با استفاده از چندین ارائه‌دهنده هوش مصنوعی (OpenRouter، OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI و Ollama محلی). قابل اجرا به‌عنوان یک برنامه دسکتاپ (Electron) یا یک برنامه تحت وب مستقرشده توسط کاربر (Docker).

- **ترجمه** — بین ده‌ها زبان با تشخیص خودکار زبان مبدأ
- **بازنویسی** — رفع ایرادات دستوری، بهبود وضوح، رسمی/غیررسمی، کوتاه‌کردن، گسترش دادن، فنی‌سازی
- **تبدیل** — دستورات هوش مصنوعی سفارشی؛ ایجاد و مدیریت دستورات، زبان مقصد اختیاری برای هر دستور
- **تاریخچه** — تاریخچه کامل اجرا با متن ورودی/خروجی، فیلترکردن و قابلیت صدور
- **مدل‌ها و هزینه** — انتخاب مدل از هر ارائه‌دهنده پیکربندی‌شده؛ صفحه‌های داشبورد هزینه و مصرف با سوابق و خلاصه‌ها بر اساس مدل/عملیات/روز
- **رابط کاربری** — رابط چندزبانه (30+ زبان، پشتیبانی از چپ‌به‌راست)، فونت‌ها و غیره
- **حالت وب** — پشتیبانی از چند کاربر همراه با نقش‌های مدیریتی
- **دسکتاپ** — برنامه Electron برای ویندوز و لینوکس
- **مستقرشده توسط کاربر** — تصویر Docker برای amd64 و arm64 (آماده برای Raspberry Pi)

پس از نصب، **[راهنمای کاربر](USER-GUIDE.fa.md)** را برای مرور کامل تمام ویژگی‌ها مشاهده کنید.

<small>**مطالعه به زبان‌های دیگر:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **توجه درباره ترجمه‌های رابط کاربری و مستندات:** تمام زبان‌های رابط به‌جز انگلیسی (بریتانیا) که زبان اصلی است، با استفاده از مدل‌های هوش مصنوعی ترجمه شده‌اند؛ ممکن است عبارات نادقیق یا دارای اشتباهات باشند.

</small>

<br/>

<a id="screenshots"></a>
## تصاویر نمایشی

**گزینشگر زبان**

![گزینشگر زبان](../images/screenshots/fa/language-selector.png)

**ترجمه**

![ترجمه](../images/screenshots/fa/translate.png)

**تبدیل - ویرایشگر دستورات**

![تبدیل - ویرایشگر دستورات](../images/screenshots/fa/transform-prompt-edit.png)

**داشبورد**

![داشبورد هزینه](../images/screenshots/fa/dashboard-summary.png)

**تاریخچه**

![تاریخچه](../images/screenshots/fa/history.png)

**تنظیمات - انتخاب مدل**

![تنظیمات - انتخاب مدل](../images/screenshots/fa/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## فهرست مطالب

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [شروع سریع](#quick-start)
- [نصب](#installation)
  - [ویندوز (الکترون)](#windows-electron)
  - [لینوکس (الکترون)](#linux-electron)
  - [داکر](#docker)
- [دریافت کلید API OpenRouter](#getting-an-openrouter-api-key)
- [پیکربندی و محیط](#configuration-and-environment)
- [توسعه و معماری](#development-and-architecture)
- [انتشارات و برچسب‌ها](#releases-and-tags)
- [همکاری در پروژه](#contributing)
- [سلب مسئولیت](#disclaimer)
- [مجوز](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## شروع سریع

**داکر (توصیه‌شده برای میزبانی شخصی)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` را با [کلید API OpenRouter](https://openrouter.ai/keys) خود جایگزین کنید (یا کلیدهای سایر ارائه‌دهندگان را تنظیم کنید؛ به بخش [پیکربندی](#configuration-and-environment) مراجعه کنید). آدرس [http://localhost:5000](http://localhost:5000) را باز کرده و قبل از انتشار سرویس، رمز عبور پیش‌فرض مدیر را تغییر دهید.

<br/>

> ℹ️ **توجه**<br/>
> در داکر، اعتبارنامه‌های LLM با متغیرهای محیطی مانند `OPENROUTER_KEY`، `OPENAI_KEY`، `CEREBRAS_KEY` و غیره تنظیم می‌شوند (نه در رابط کاربری وب). در نسخه دسکتاپ (الکترون) کلیدها را از طریق **تنظیمات → API** پیکربندی کنید.

<br/>

**ویندوز**

آخرین فایل `Transrewrt Setup x.y.z.exe` را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید، نصب‌کننده را اجرا کرده و سپس از طریق منوی شروع یا میانبر دسکتاپ اجرا کنید. کلیدهای API خود را در بخش **تنظیمات → API** وارد کنید. شما باید حداقل یک ارائه‌دهنده را تنظیم کنید، OpenRouter برای مدل‌های رایگان گزینه رایجی است.

<br/>

**لینوکس**

فایل `.AppImage` متناسب با پردازنده خود را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید (`x64` برای رایانه‌های معمولی، `arm64` برای دستگاه‌های ARM شامل رزبری پای 4 به بالا)، سپس:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

کلیدهای API خود را در بخش **تنظیمات → API** وارد کنید. شما باید حداقل یک ارائه‌دهنده را تنظیم کنید، OpenRouter برای مدل‌های رایگان گزینه رایجی است.

در دبیان/اوبونتو ممکن است ابتدا باید وابستگی‌های اضافی را نصب کنید:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

برای جزئیات بیشتر به [نصب → لینوکس](#linux-electron) مراجعه کنید.

<br/>

> ℹ️ **توجه**<br/>
> پشتیبانی از macOS در حال حاضر وجود ندارد. Transrewrt برای ویندوز، لینوکس و داکر در دسترس است.

<br/>

پس از اجرای برنامه، به منظور یادگیری نحوه ترجمه، بازنویسی و تبدیل متن، مدیریت پِرامپت‌ها و پیکربندی مدل‌ها، به **[راهنمای کاربر](USER-GUIDE.fa.md)** مراجعه کنید.

<br/><br/>

<a id="installation"></a>
## نصب

<a id="windows-electron"></a>
### ویندوز (الکترون)

- آخرین نصب‌کننده را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
- فایل `.exe` را اجرا کرده و مراحل نصب را دنبال کنید.
- اولین اجرا: برنامه را از منوی شروع یا میانبر دسکتاپ راه‌اندازی کنید.

<br/>

<a id="linux-electron"></a>
### لینوکس (الکترون)

- فایل `.AppImage` مناسب (`x64` یا `arm64`) را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
- اجرا: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` برای x86_64/amd64، یا استفاده از نام فایل `...-arm64.AppImage` در ARM64.
- وابستگی‌های اضافی (دبیان/اوبونتو): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- برای اطلاعات بیشتر به [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) مراجعه کنید.

<br/>

<a id="docker"></a>
### داکر

- دریافت: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- حداقل یک کلید ارائه‌دهنده را از طریق محیط تنظیم کنید (مثلاً `OPENROUTER_KEY` برای OpenRouter). متغیرها را با `-e` یا `docker compose` / `.env` منتقل کنید تا اطلاعات محرمانه در تصویر ثبت نشود.
- کلیدهای ارائه‌دهنده در رابط کاربری وب وارد نمی‌شوند؛ سرور آن‌ها را از محیط می‌خواند.

مثال - حجم نام‌گذاری‌شده برای ذخیره‌سازی (کلید OpenRouter از طریق محیط):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| گزینه   | توضیح                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| پورت     | `5000` (با استفاده از `-p 5000:5000` تخصیص دهید)                                                                              |
| حجم   | مونت کردن `/app/data` برای ذخیره‌سازی پیکربندی و پایگاه داده                                                         |
| متغیرهای محیطی | `PORT`، `CONFIG_PATH` و همچنین کلیدهای LLM (`OPENROUTER_KEY`، `OPENAI_KEY` و غیره) - به بخش [پیکربندی](#configuration-and-environment) مراجعه کنید |

برای ساخت و اجرا از سورس: `docker compose up --build -d` یا `pnpm docker:up` - برای اطلاعات بیشتر به [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) مراجعه کنید.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## دریافت کلید API OpenRouter

Transrewrt از ارائه‌دهندگان متعدد هوش مصنوعی پشتیبانی می‌کند. [OpenRouter](https://openrouter.ai) یکی از گزینه‌های محبوب است، زیرا بسیاری از مدل‌ها را زیر یک کلید جمع‌آوری می‌کند و مدل‌های رایگان نیز ارائه می‌دهد.

1. در [openrouter.ai](https://openrouter.ai) ثبت‌نام کنید یا وارد شوید.
2. به صفحه [Keys](https://openrouter.ai/keys) بروید و یک کلید جدید ایجاد کنید (نامی برای آن تعیین کنید و به صورت اختیاری می‌توانید سقف اعتبار تعیین کنید). می‌توانید بدون افزودن اعتبار، از مدل‌های رایگان استفاده کنید.
3. **نسخه دسکتاپ (الکترون):** کلیدها را در بخش **تنظیمات → API** وارد کنید. **داکر:** متغیرهای محیطی مانند `OPENROUTER_KEY` را تنظیم کنید (نگاه کنید به [شروع سریع](#quick-start)).

از مدل **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) برای ترجمه، بازنویسی یا تبدیل استفاده نکنید: این مدل بار درخواست‌های JSON را بازمی‌گرداند، نه متن نهایی برای این وظایف. برای اطلاعات بیشتر به بخش [تنظیمات → مدل‌ها](USER-GUIDE.fa.md#models) در راهنمای کاربر مراجعه کنید.

همچنین می‌توانید از ارائه‌دهندگان دیگر (OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، Cerebras) استفاده کنید یا مدل‌ها را به صورت محلی با [Ollama](https://ollama.com) اجرا کنید. برای مشاهده لیست کامل ارائه‌دهندگان پشتیبانی‌شده و متغیرهای محیطی، به بخش [پیکربندی](#configuration-and-environment) مراجعه کنید.

> ⚠️ **اخطار**<br/>
> اگر Ollama را از یک دستگاه دیگر، کانتینر یا سرویس دیگری استفاده می‌کنید، حتماً آن را طوری تنظیم کنید که اتصالات خارجی را بپذیرد (نه فقط localhost).

<br/><br/>

برای محدودیت‌ها، استفاده از کلید شخصی (BYOK) و اطلاعات بیشتر، به [احراز هویت OpenRouter](https://openrouter.ai/docs/api/reference/authentication) مراجعه کنید.

<br/><br/>

<a id="configuration-and-environment"></a>
## پیکربندی و محیط

**مکان‌های فایل پیکربندی**

| نسخه‌دهی          | مکان پیکربندی                                      |
| ------------------ | ------------------------------------------------- |
| الکترون (ویندوز)  | `%APPDATA%\transrewrt\`                           |
| الکترون (لینوکس)   | `~/.config/transrewrt/`                           |
| وب / داکر          | `/app/data/config.json` (برای داشتن داده‌های دائمی از volume استفاده کنید) |

<br/>

**متغیرهای محیطی** (فقط وب/داکر؛ الکترون از فایل پیکربندی محلی استفاده می‌کند)

| متغیر            | پیش‌فرض                | توضیحات |
| ---------------- | ---------------------- | -------- |
| `PORT`           | `5000`                 | پورت شنود سرور |
| `CONFIG_PATH`    | `/app/data/config.json`| مسیر فایل پیکربندی |
| `OPENROUTER_KEY` | *(خالی)*               | کلید API OpenRouter |
| `OPENAI_KEY`     | *(خالی)*               | کلید API OpenAI |
| `CEREBRAS_KEY`   | *(خالی)*               | کلید API Cerebras |
| `ANTHROPIC_KEY`  | *(خالی)*               | کلید API Anthropic |
| `GOOGLE_KEY`     | *(خالی)*               | کلید API Google Gemini |
| `DEEPSEEK_KEY`   | *(خالی)*               | کلید API DeepSeek |
| `GROQ_KEY`       | *(خالی)*               | کلید API Groq |
| `MISTRAL_KEY`    | *(خالی)*               | کلید API Mistral |
| `OLLAMA_URL`     | *(خالی)*               | آدرس پایه Ollama (مثل `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(خالی)*               | کلید API xAI |

فقط ارائه‌دهندگانی را که استفاده می‌کنید پیکربندی کنید. شناسه‌های مدل دارای فضای نام هستند (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` و غیره).

**نمایش هزینه:** OpenRouter در صورت امکان هزینه دقیق صورت‌حساب را برمی‌گرداند. برای ارائه‌دهندگان دیگر، در صورت وجود کلید OpenRouter، **هزینه تقریبی** بر اساس قیمت عمومی مدل‌های OpenRouter استفاده می‌شود؛ بدون کلید OpenRouter، ممکن است هزینه سایر ارائه‌دهندگان `0` نمایش داده شود. این تخمین‌ها فاکتور نیستند.

<br/>

**داده‌ها و دوام:** برای داکر، یک volume را در مسیر `/app/data` متصل کنید تا فایل `config.json` و پایگاه‌داده SQLite پس از راه‌اندازی مجدد کانتینر حفظ شوند. بدون volume، تمام داده‌ها پس از توقف کانتینر از بین می‌روند.

**برنامه‌نویسان:** پس از دریافت تغییراتی که پیکربندی قدیمی تک‌کلیدی را جایگزین می‌کنند، اگر فایل محلی شما هنوز از فیلدهای حذف‌شده (`api_key`, `api_url`, گزینه‌های پروکسی`) استفاده می‌کند، `data/config.json` را با فرم جدید پیش‌فرض از `src/config-defaults/config_default.json` بازنشانی یا ادغام کنید.

<br/>

**احراز هویت وب:**

- کاربر پیش‌فرض مدیر: `admin` / `transrewrt26`.
- مدیریت کاربران در بخش **تنظیمات → کاربران**.
- تغییر رمز عبور: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (از کد منبع: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **اخطار**<br/>
> رمز عبور پیش‌فرض مدیر را بلافاصله در هر میزبانی که قابل دسترسی از شبکه است تغییر دهید.

<br/>

تنظیمات مهم (فونت، مدل‌ها، زبان‌ها و غیره) در بخش تنظیمات برنامه در دسترس هستند.

<br/><br/>

<a id="development-and-architecture"></a>

## توسعه و معماری

- **توسعه:** تنظیمات، ساخت، تست و انتشار (الکترون، وب، داکر) - نگاه کنید به **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **ساختار معماری و سیستم:** ساختار پوشه‌ها، پشته فناوری و تصمیمات طراحی - نگاه کنید به **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## انتشارات و برچسب‌ها

- **برچسب‌های Git** `v`* (مثلاً `v1.0.10`) فعال‌کنندهٔ [پروندهٔ گردش‌کار انتشار](.github/workflows/release.yml) هستند. **انتشارات گیتهاب** شامل نصب‌کنندهٔ نسخهٔ ویندوز (`.exe`) و نسخه‌های AppImage لینوکس (**x64** و **arm64**) می‌شوند.
- **تصاویر داکر** در `ghcr.io/wsj-br/transrewrt` منتشر می‌شوند. برچسب‌های تصویر با نسخهٔ Git مطابقت دارند (مثلاً `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) علاوه بر برچسب `latest`. چند معماری: `linux/amd64` و `linux/arm64` (مثلاً برای رزبری‌پای).

<br/><br/>

<a id="contributing"></a>
## مشارکت در پروژه

1. مخزن را دوخته کنید (فُرک کنید).
2. یک شاخه ویژگی ایجاد کنید: `git checkout -b feature/my-feature`
3. تغییرات خود را با یک پیام واضح تحویل بدهید (کامیت کنید).
4. تغییرات را منتشر کنید و یک درخواست ادغام (Pull Request) نسبت به شاخهٔ `main` باز کنید.

لطفاً از سبک کدنویسی موجود پیروی کنید و تغییرات خود را قبل از ارسال در دو حالت الکترون و وب تست کنید. برای دستورالعمل‌های ساخت و تست، نگاه کنید به [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**گزارش مشکلات:** یک موضوع جدید در [گیتهاب](https://github.com/wsj-br/transrewrt/issues) باز کنید. اطلاعات پلتفرم خود (ویندوز / لینوکس / داکر) و نسخهٔ برنامه (که در بخش درباره یا صفحهٔ انتشارات نمایش داده شده) را اضافه کنید.

<br/><br/>

<a id="disclaimer"></a>
## انکار مسئولیت

نام‌ها و آیکون‌های محصولات متعلق به صاحبان آنهاست و صرفاً به منظور شناسایی استفاده شده‌اند. این نرم‌افزار با هیچ یک از برندهای ذکر شده رابطهٔ رسمی ندارد و تاییدیه‌ای از سوی آنها نیز دریافت نکرده است.

<br/><br/>

<a id="license"></a>
## مجوز

کپی‌رایت © 2026 والدمار اسکودلر جونیور.

[مجوز آپاچی نسخهٔ 2.0](LICENSE)