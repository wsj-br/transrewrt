---
translated_at: "2026-03-25T22:21:31.287Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="لوگوی Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="نسخه"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="مجوز: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="پلتفرم">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

ابزار متنی هوش مصنوعی: ترجمه بین زبان‌ها، بازنویسی به سبک‌های مختلف، و دگرگونی با دستورالعمل‌های سفارشی — با استفاده از چندین ارائه‌دهنده هوش مصنوعی (OpenRouter، OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI و Ollama محلی). این ابزار به صورت برنامه دسکتاپ (Electron) یا برنامه تحت وب مستقل (Docker) اجرا می‌شود.

- **ترجمه** — بین ده‌ها زبان، با تشخیص خودکار زبان مبدأ
- **بازنویسی** — تصحیح دستور زبان، بهبود وضوح، فرمول‌بندی رسمی/غیررسمی، کوتاه‌کردن، گسترش، تخصصی‌کردن
- **تبدیل** — دستورالعمل‌های سفارشی هوش مصنوعی؛ ایجاد و مدیریت دستورالعمل‌ها، زبان مقصد اختیاری برای هر دستورالعمل
- **تاریخچه** — تاریخچه کامل اجرا با متن ورودی/خروجی، فیلترکردن و قابلیت صادر کردن
- **مدل‌ها و هزینه** — انتخاب مدل از هر ارائه‌دهنده پیکربندی‌شده؛ داشبوردهای هزینه و مصرف با سوابق، خلاصه‌ها بر اساس مدل/عملیات/روز
- **رابط کاربری** — رابط چندزبانه (بیش از 30 زبان، پشتیبانی از نوشتار راست‌به‌چپ)، فونت‌ها، ...
- **حالت تحت وب** — پشتیبانی از چند کاربر با نقش‌های مدیریتی
- **دسکتاپ** — برنامه Electron برای ویندوز و لینوکس
- **خودمیزبان** — تصویر داکر برای amd64 و arm64 (آماده برای رزبری پای)

پس از نصب، **[راهنمای کاربر](USER-GUIDE.fa.md)** را برای مرور تمام ویژگی‌ها مطالعه کنید.

<small>**مطالعه به زبان‌های دیگر:** [English (UK)](README.fa.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **تذکر درباره ترجمه‌های رابط و مستندات:** تمام زبان‌های رابط کاربری به جز انگلیسی (UK) اصلی توسط مدل‌های هوش مصنوعی ترجمه شده‌اند؛ ممکن است عبارت‌بندی‌ها دقیق نباشند یا دارای اشکالاتی باشند.

</small>

<br/>

<a id="screenshots"></a>
## تصاویر صفحه

**انتخابگر زبان**

![انتخابگر زبان](../images/screenshots/fa/language-selector.png)

**ترجمه**

![ترجمه](../images/screenshots/fa/translate.png)

**تبدیل - ویرایشگر دستورالعمل**

![تبدیل - ویرایشگر دستورالعمل](../images/screenshots/fa/transform-prompt-edit.png)

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
- [گرفتن کلید API OpenRouter](#getting-an-openrouter-api-key)
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

`sk-or-your-key` را با [کلید API OpenRouter](https://openrouter.ai/keys) خود جایگزین کنید (یا کلیدهای دیگر ارائه‌دهندگان را تنظیم کنید؛ بخش [پیکربندی](#configuration-and-environment) را ببینید). آدرس [http://localhost:5000](http://localhost:5000) را باز کنید و پیش از افشای سرویس، رمز عبور پیش‌فرض مدیر را تغییر دهید.

<br/>

> ℹ️ **یادداشت**<br/>
> در داکر، اعتبارنامه‌های مدل زبانی با متغیرهای محیطی مانند `OPENROUTER_KEY`، `OPENAI_KEY`، `CEREBRAS_KEY` و غیره تنظیم می‌شوند (نه از طریق رابط وب). در ویندوز و لینوکس (الکترون) کلیدها را از مسیر **تنظیمات → API** وارد کنید.

<br/>

**ویندوز**

آخرین فایل `Transrewrt Setup x.y.z.exe` را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید، نصب‌کننده را اجرا کنید، سپس برنامه را از منوی شروع یا میانبر دسکتاپ اجرا کنید. کلیدهای API خود را در بخش **تنظیمات → API** وارد کنید. باید حداقل یک ارائه‌دهنده کلید داشته باشید؛ OpenRouter برای مدل‌های رایگان رایج است.

<br/>

**لینوکس**

فایل `.AppImage` متناظر با پردازنده خود را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید (`x64` برای رایانه‌های معمولی، `arm64` برای دستگاه‌های ARM به‌ویژه رزبری‌پای 4 به بالا)، سپس:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

کلیدهای API خود را در بخش **تنظیمات → API** وارد کنید. شما نیاز دارید حداقل یک ارائه‌دهنده را پیکربندی کنید؛ OpenRouter برای مدل‌های رایگان رایج است.

در توزیع‌های دبیان/اوبونتو ممکن است ابتدا نیاز به نصب وابستگی‌های اضافی داشته باشید:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

برای جزئیات بیشتر، بخش [نصب → لینوکس](#linux-electron) را ببینید.

<br/>

> ℹ️ **یادداشت**<br/>
> فعلاً سیستم عامل macOS پشتیبانی نمی‌شود. Transrewrt برای ویندوز، لینوکس و داکر موجود است.

<br/>

پس از راه‌اندازی برنامه، [راهنمای کاربر](USER-GUIDE.fa.md) را برای آموزش ترجمه، بازنویسی و تبدیل متن، مدیریت دستورالعمل‌ها (prompts) و تنظیم مدل‌ها مطالعه کنید.

<br/><br/>

<a id="installation"></a>
## نصب

<a id="windows-electron"></a>
### ویندوز (الکترون)

- آخرین نصب‌کننده را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
- فایل `.exe` را اجرا و دستورالعمل‌های نصب‌کننده را دنبال کنید.
- اولین اجرا: برنامه را از منوی شروع یا میانبر دسکتاپ اجرا کنید.

<br/>

<a id="linux-electron"></a>
### لینوکس (الکترون)

- فایل `.AppImage` متناسب (`x64` یا `arm64`) را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
- اجرا: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` برای x86_64/amd64، یا فایل `...-arm64.AppImage` را روی ARM64 استفاده کنید.
- وابستگی‌های اضافی (دبیان/اوبونتو): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- برای اطلاعات بیشتر [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) را ببینید.

<br/>

<a id="docker"></a>
### داکر

- دریافت تصویر: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- حداقل یک کلید ارائه‌دهنده را از طریق متغیرهای محیطی تنظیم کنید (مثلاً `OPENROUTER_KEY` برای OpenRouter). متغیرها را با `-e` یا از طریق `docker compose` / `.env` منتقل کنید تا این اطلاعات حساس در تصویر ذخیره نشوند.
- کلیدهای ارائه‌دهندگان **در رابط وب وارد نمی‌شوند**؛ سرور آن‌ها را از محیط می‌خواند.

مثال — استفاده از حجم نام‌گذاری‌شده برای ذخیره‌سازی داده‌ها (کلید OpenRouter از طریق محیط):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| گزینه   | توضیحات                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| پورت     | `5000` (با استفاده از `-p 5000:5000` نگاشت شود)                                                                              |
| حجم   | مونت کردن `/app/data` برای ذخیره‌سازی تنظیمات و پایگاه داده                                                         |
| متغیرهای محیطی | `PORT`, `CONFIG_PATH`, و همچنین کلیدهای مدل زبانی (`OPENROUTER_KEY`, `OPENAI_KEY`, …) — بخش [پیکربندی](#configuration-and-environment) را ببینید |

برای ساخت و اجرای محلی از کد منبع: `docker compose up --build -d` یا `pnpm docker:up` — بخش [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) را ببینید.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## دریافت کلید API OpenRouter

Transrewrt از چندین ارائه‌دهنده هوش مصنوعی پشتیبانی می‌کند. [OpenRouter](https://openrouter.ai) یک انتخاب محبوب است، زیرا بسیاری از مدل‌ها را در قالب یک کلید تجمیع کرده و مدل‌های رایگانی نیز ارائه می‌دهد.

1. در [openrouter.ai](https://openrouter.ai) ثبت‌نام کنید یا وارد حساب کاربری خود شوید.
2. به صفحه [Keys](https://openrouter.ai/keys) بروید و یک کلید جدید ایجاد کنید (نامی برای آن تعیین کنید و در صورت تمایل محدودیت اعتبار مشخص نمایید). می‌توانید بدون افزودن اعتبار، از مدل‌های رایگان استفاده کنید.
3. **نسخه دسکتاپ (الکترون)**: کلید را در بخش **تنظیمات → API** وارد کنید. **دکر**: متغیرهای محیطی مانند `OPENROUTER_KEY` را تنظیم کنید (نگاه کنید به [شروع سریع](#quick-start)).

از مدل **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) برای ترجمه، بازنویسی یا تبدیل استفاده نکنید: این مدل پیلودهای درخواست JSON برمی‌گرداند، نه متن تکمیل‌شده برای آن وظایف. برای جزئیات بیشتر به بخش [تنظیمات → مدل‌ها](USER-GUIDE.fa.md#models) در راهنمای کاربر مراجعه کنید.

همچنین می‌توانید از سایر ارائه‌دهندگان (OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، Cerebras) استفاده کنید یا مدل‌ها را به صورت محلی با [Ollama](https://ollama.com) اجرا کنید. برای لیست کامل ارائه‌دهندگان پشتیبانی شده و متغیرهای محیطی، به بخش [پیکربندی](#configuration-and-environment) مراجعه کنید.

> ⚠️ **هشدار**<br/>
> اگر از Ollama از طریق دستگاه، کانتینر یا سرویس دیگری استفاده می‌کنید، مطمئن شوید که Ollama را برای پذیرش ارتباطات خارجی (نه فقط localhost) تنظیم کرده‌اید.

<br/><br/>

<a id="configuration-and-environment"></a>
## پیکربندی و محیط

**مکان‌های فایل پیکربندی**

| روش استقرار       | مسیر پیکربندی                                   |
| ------------------ | ------------------------------------------------- |
| الکترون (ویندوز)  | `%APPDATA%\transrewrt\`                           |
| الکترون (لینوکس)   | `~/.config/transrewrt/`                           |
| وب / داکر         | `/app/data/config.json` (از ولوم برای دایمی ماندن داده استفاده کنید) |

<br/>

**متغیرهای محیطی** (فقط وب/داکر؛ الکترون از فایل محلی پیکربندی استفاده می‌کند)

| متغیر             | پیش‌فرض                 | توضیحات |
| ------------------ | ----------------------- | ----------- |
| `PORT`             | `5000`                  | پورت گوش دادن سرور |
| `CONFIG_PATH`      | `/app/data/config.json` | مسیر فایل پیکربندی |
| `OPENROUTER_KEY`   | *(تهی)*                 | کلید API OpenRouter |
| `OPENAI_KEY`       | *(تهی)*                 | کلید API OpenAI |
| `CEREBRAS_KEY`     | *(تهی)*                 | کلید API Cerebras |
| `ANTHROPIC_KEY`    | *(تهی)*                 | کلید API Anthropic |
| `GOOGLE_KEY`       | *(تهی)*                 | کلید API Google Gemini |
| `DEEPSEEK_KEY`     | *(تهی)*                 | کلید API DeepSeek |
| `GROQ_KEY`         | *(تهی)*                 | کلید API Groq |
| `MISTRAL_KEY`      | *(تهی)*                 | کلید API Mistral |
| `OLLAMA_URL`       | *(تهی)*                 | آدرس پایه Ollama (مثلاً `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(تهی)*                 | کلید API xAI |

تنها ارائه‌دهندگانی را پیکربندی کنید که از آنها استفاده می‌کنید. شناسه مدل‌ها دارای فضای نام هستند (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, و غیره).

**نمایش هزینه:** OpenRouter در صورت امکان هزینه دقیق صورت‌حساب را برمی‌گرداند. سایر ارائه‌دهندگان از **هزینه تخمینی** بر اساس قیمت عمومی مدل‌های OpenRouter استفاده می‌کنند، به شرطی که کلید OpenRouter موجود باشد؛ در غیر این صورت، هزینه‌های غیر از OpenRouter ممکن است به صورت `0` نمایش داده شوند. این تخمین‌ها فاکتور رسمی نیستند.

<br/>

**داده و دایمی‌ماندن آن:** برای داکر، یک ولوم (volume) را در مسیر `/app/data` متصل کنید تا `config.json` و پایگاه داده SQLite در طول راه‌اندازی مجدد کانتینر حفظ شوند. بدون ولوم، تمام داده‌ها پس از متوقف شدن کانتینر از بین می‌روند.

**توسعه‌دهندگان:** پس از دریافت تغییراتی که پیکربندی قدیمی تک‌کلیدی را جایگزین می‌کنند، اگر فایل محلی شما همچنان از فیلدهای حذف‌شده استفاده می‌کند (`api_key`, `api_url`, گزینه‌های پروکسی)، محتوای `data/config.json` را با ساختار پیش‌فرض جدید از `src/config-defaults/config_default.json` بازنشانی یا ادغام کنید.

<br/>

**احراز هویت وب:**

- مدیر پیش‌فرض: `admin` / `transrewrt26`.
- مدیریت کاربران در بخش **تنظیمات → کاربران**.
- تغییر رمز: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (از منبع: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **هشدار**<br/>
> همین حالا و قبل از هر اقدام دیگری رمز مدیر پیش‌فرض را در هر ماشینی که قابل دسترسی از شبکه باشد تغییر دهید.

<br/>

تنظیمات مهم (فونت، مدل‌ها، زبان‌ها و غیره) در بخش تنظیمات برنامه در دسترس هستند.

<br/><br/>

<a id="development-and-architecture"></a>

## توسعه و معماری

- **توسعه:** راه‌اندازی، ساخت، تست و استقرار (الکترون، وب، داکر) - نگاه کنید به **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **معماری و مرور سیستم:** ساختار پوشه‌ها، پشته فناوری، تصمیمات طراحی - نگاه کنید به **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## نسخه‌ها و برچسب‌ها

- **برچسب‌های Git** با پیشوند `v` (مثلاً `v1.0.10`) فعال‌سازی [جریان کاری انتشار](.github/workflows/release.yml) می‌کنند. **انتشارهای GitHub** شامل نصب‌کننده ویندوز (`.exe`) و فایل‌های AppImage لینوکس (**x64** و **arm64**) هستند.
- **تصاویر داکر** در `ghcr.io/wsj-br/transrewrt` منتشر می‌شوند. برچسب‌های تصویر با نسخه Git همخوانی دارند (مثلاً `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) علاوه بر برچسب `latest`. چند معماری: `linux/amd64` و `linux/arm64` (مثلاً برای رزبری پای).

<br/><br/>

<a id="contributing"></a>
## مشارکت

1. مخزن را فورک کنید.
2. یک شاخه ویژگی بسازید: `git checkout -b feature/my-feature`
3. تغییرات خود را با یک پیام شفاف کامیت کنید.
4. فشرده (push) کرده و یک درخواست ادغام (Pull Request) نسبت به شاخه `main` باز کنید.

لطفاً سبک کد موجود را رعایت کنید و تغییرات خود را در هر دو حالت الکترون و وب قبل از ارسال تست کنید. برای راهنمایی‌های ساخت و تست به [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) مراجعه کنید.

<br/>

**گزارش مشکلات:** یک مشکل را در [GitHub](https://github.com/wsj-br/transrewrt/issues) باز کنید. پلتفرم خود را (ویندوز / لینوکس / داکر) و نسخه اپلیکیشن (که در پنجره درباره یا صفحه انتشارها نمایش داده می‌شود) ذکر کنید.

<br/><br/>

<a id="disclaimer"></a>
## سه‌گانه

نام محصولات و آیکون‌ها متعلق به صاحبان رسمی خود هستند و فقط برای اهداف شناسایی استفاده شده‌اند. این نرم‌افزار با هیچ یک از برندهای ذکرشده ارتباط یا تائید رسمی ندارد.

<br/><br/>

<a id="license"></a>
## مجوز

حق تکثیر © 2026 ولدمر اسکودلر جونیور

[مجوز آپاچی نسخه 2.0](LICENSE)