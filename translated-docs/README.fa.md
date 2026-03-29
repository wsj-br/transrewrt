---
translated_at: "2026-03-29T01:55:37.319Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="ترانس‌رایتر بنر" />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="نسخه"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="مجوز: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="سکو">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

ابزار متنی هوش مصنوعی: ترجمه بین زبان‌ها، بازنویسی با سبک‌های مختلف و تبدیل با دستورالعمل‌های سفارشی — با استفاده از چندین ارائه‌دهنده هوش مصنوعی (OpenRouter، OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI و Ollama محلی). این ابزار به صورت یک برنامه دسکتاپ (Electron) یا یک برنامه وب مستقرشده توسط کاربر (Docker) اجرا می‌شود.

- **ترجمه** — بین ده‌ها زبان، با تشخیص خودکار زبان مبدأ  
- **بازنویسی** — رفع اشکال دستور زبان، بهبود وضوح، تبدیل به سبک رسمی/غیررسمی، کوتاه‌سازی، گسترش، تخصصی‌سازی  
- **تبدیل** — دستورهای هوش مصنوعی سفارشی؛ ایجاد و مدیریت دستورها، زبان مقصد اختیاری برای هر دستور  
- **تاریخچه** — تاریخچه کامل اجرا با متن ورودی/خروجی، فیلتر کردن و صدور داده  
- **مدل‌ها و هزینه** — انتخاب مدل از هر ارائه‌دهندهٔ پیکربندی‌شده؛ داشبوردهای هزینه و مصرف با سوابق و خلاصه‌ها بر اساس مدل/عملکرد/روز  
- **رابط کاربری** — رابط چندزبانه (۳۰+ زبان، پشتیبانی از زبان‌های راست‌به‌چپ)، فونت‌ها، ...  
- **حالت وب** — پشتیبانی چندکاربره با نقش‌های مدیریتی  
- **نرم‌افزار رومیزی** — برنامه الکترون برای ویندوز و لینوکس  
- **میزبانی خودکار** — تصویر داکر برای amd64 و arm64 (آماده برای رزبری‌پای)  

پس از نصب، **[راهنمای کاربر](USER-GUIDE.fa.md)** را برای مرور کامل تمامی ویژگی‌ها مشاهده کنید.

<small>**خواندن به زبان‌های دیگر:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **توجه به ترجمههای رابط کاربری و مستندات:** تمام زبانهای رابط کاربری به جز انگلیسی بریتانیا (اصلی)
> با استفاده از مدل‌های هوش مصنوعی ترجمه شده‌اند؛ ممکن است عبارات نادقیق باشند یا دارای اشتباه باشند.

</small>

<br/>

<a id="screenshots"></a>

## تصاویر

**انتخابگر زبان**

![انتخابگر زبان](../images/screenshots/fa/language-selector.png)

**ترجمه**

![ترجمه](../images/screenshots/fa/translate.png)

**تبدیل - ویرایشگر دستورالعمل**

![تبدیل - ویرایشگر دستورالعمل](../images/screenshots/fa/transform-prompt-edit.png)

**داشبورد**

![خلاصه داشبورد — استفاده](../images/screenshots/fa/dashboard-summary.png)

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
  - [پیکربندی منطقه زمانی](#configuring-the-timezone)
- [دریافت کلید API OpenRouter](#getting-an-openrouter-api-key)
- [پیکربندی و محیط](#configuration-and-environment)
- [توسعه و معماری](#development-and-architecture)
- [گزارش مشکلات](#reporting-issues)
- [متناژ](#disclaimer)
- [مجوز](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## شروع سریع

**داکر (توصیهشده برای میزبانی شخصی)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` را با کلید API خود از [OpenRouter](https://openrouter.ai/keys) جایگزین کنید (یا کلیدهای سایر ارائهدهندگان را تنظیم کنید؛ به [پیکربندی](#configuration-and-environment) مراجعه کنید). سپس آدرس [http://localhost:5000](http://localhost:5000) را باز کنید و قبل از انتشار سرویس، رمز عبور پیشفرض مدیر را تغییر دهید.

<br/>

> ℹ️ **تذکر**<br/>
> در داکر، اعتبارنامههای مدل زبانی بزرگ با متغیرهای محیطی مانند `OPENROUTER_API_KEY`، `OPENAI_API_KEY`، `CEREBRAS_API_KEY` و غیره تنظیم میشوند (نه در رابط کاربری اینترنتی). در محیط دسکتاپ (الکترون)، کلیدها را در بخش **تنظیمات → API** تنظیم کنید.

<br/>

**ویندوز**

آخرین نسخهٔ `Transrewrt Setup x.y.z.exe` را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید، برنامه را نصب کنید و سپس از منوی شروع یا میانبر دسکتاپ اجرا کنید. کلیدهای API خود را در بخش **تنظیمات → API** وارد کنید. باید حداقل یک ارائه‌دهنده را پیکربندی کنید. OpenRouter برای مدل‌های رایگان متداول است.

<br/>

**لینوکس**

فایل `.AppImage` مناسب پردازنده خود را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید (`x64` برای رایانه‌های معمولی، `arm64` برای بسیاری از دستگاه‌های ARM از جمله رزبری‌پای 4 به بالا) و سپس دستورات زیر را اجرا کنید:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

کلیدهای API خود را در بخش **تنظیمات → API** وارد کنید. باید حداقل یک ارائه‌دهنده را پیکربندی کنید. OpenRouter برای مدل‌های رایگان متداول است.

در توزیع‌های دبیان/اوبونتو ممکن است ابتدا نیاز به نصب وابستگی‌های اضافی باشد:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

برای جزئیات بیشتر به بخش [نصب → لینوکس](#linux-electron) مراجعه کنید.

<br/>

> ℹ️ **یادداشت**<br/>

> فعلاً سیستم عامل macOS پشتیبانی نمی‌شود. Transrewrt برای ویندوز، لینوکس و Docker در دسترس است.

<br/>

پس از اجرای برنامه، برای آشنایی با نحوه ترجمه، بازنویسی و تبدیل متن، مدیریت دستورات (prompts) و پیکربندی مدل‌ها، به **[راهنمای کاربر](USER-GUIDE.fa.md)** مراجعه کنید.

<br/><br/>

<a id="installation"></a>

## نصب

<a id="windows-electron"></a>

### ویندوز (الکترون)

- آخرین نسخهٔ نصب‌کننده را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
- فایل `.exe` را اجرا کرده و مراحل نصب را دنبال کنید.
- اولین اجرا: برنامه را از منوی شروع یا میان‌بر دسکتاپ راه‌اندازی کنید.

<br/>

> ℹ️ **تذکر**<br/>
> ویندوز ممکن است یکی از این هشدارهای امنیتی را نمایش دهد (متعارف برای برنامه‌های بدون امضای دیجیتال/مستقل):
>   - **کنترل حساب کاربری (UAC)**: "آیا می‌خواهید اجازه دهید این برنامه از یک ناشر ناشناخته تغییراتی در دستگاه شما ایجاد کند؟" → روی **بله** کلیک کنید.
>   - **Microsoft Defender SmartScreen**: "ویندوز PC شما را محافظت کرده است" → روی **اطلاعات بیشتر** کلیک کنید → **با این حال اجرا کن**.
>
> این اتفاق به این دلیل رخ می‌دهد که برنامه توسط مایکروسافت یا یک ناشر بزرگ امضا نشده است — اما در صورتی که نسخه‌ای از انتشارات رسمی گیت‌هاب ما دانلود کرده باشید، ایمن است
> (چک‌سام SHA256 زیر را تأیید کنید).

<br/>

<a id="linux-electron"></a>

### لینوکس (الکترون)

- فایل `.AppImage` مربوطه (`x64` یا `arm64`) را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
- اجرا کنید: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` روی x86_64/amd64، یا در ARM64 از نام فایل `...-arm64.AppImage` استفاده کنید.
- وابستگی‌های اضافی (دسی/اوبونتو): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- برای اطلاعات بیشتر به [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) مراجعه کنید.

<br/>

<a id="docker"></a>

### داکر

- دریافت: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- حداقل یک کلید فراهم‌کننده را از طریق محیط (مثلاً `OPENROUTER_API_KEY` برای OpenRouter) تنظیم کنید. متغیرها را با استفاده از `-e` یا `docker compose` / `.env` منتقل کنید تا اطلاعات محرمانه در تصویر ذخیره نشوند.
- کلیدهای فراهم‌کننده در رابط کاربری وب وارد **نمی‌شوند**؛ بلکه سرور آنها را از محیط می‌خواند.

مثال — حجم نامدار برای حفظ داده‌ها (کلید OpenRouter از طریق محیط):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

یا اگر ترجیح می‌دهید از Docker Compose استفاده کنید، دستورات زیر را اجرا کنید:

```
# فایل کامپوز را دانلود کنید
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# فایل را ویرایش کنید تا API_KEYS را اضافه کرده و منطقه زمانی (TZ) را تنظیم کنید
vi transrewrt.yml
# کانتینر را راه‌اندازی کنید
docker compose -f transrewrt.yml up -d

[پیکربندی](#configuration-and-environment) را برای تمام متغیرهای محیطی مانند `PORT`، `CONFIG_PATH`، `TZ` و کلیدهای مدل‌های زبانی بزرگ (LLM) (`OPENROUTER_API_KEY`، `OPENAI_API_KEY` و غیره) ببینید.

<a id="configuring-the-timezone"></a>

### پیکربندی منطقه زمانی

تاریخ و زمان رابط کاربری برنامه بر اساس تنظیمات محلی و منطقه زمانی **مرورگر** تعیین می‌شود. برای رفتار **سروری** (مانند ثبت لاگ و عملکردهای مشابه)، کانتینر از متغیر محیطی `TZ` استفاده می‌کند. مقدار پیش‌فرض `TZ=Europe/London` است.

برای استفاده از یک منطقه زمانی دیگر، مقدار `TZ` را در فایل کامپوز خود تنظیم کنید، به عنوان مثال:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

یا هنگام اجرای کانتینر آن را مشخص کنید (دوکر):

```bash
--env TZ=America/Sao_Paulo
```

در بسیاری از سیستم‌های میزبان لینوکس می‌توانید نام منطقه زمانی سیستم را با دستور زیر کپی کنید:

```bash
echo TZ=\"$(</etc/timezone)\"
```

فهرستی از نام‌های معتبر منطقه زمانی در [پایگاه داده tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (ویکی‌پدیا) نگهداری می‌شود.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## دریافت کلید API OpenRouter

ترانس‌رایت از چندین ارائه‌دهنده هوش مصنوعی پشتیبانی می‌کند. [OpenRouter](https://openrouter.ai) یکی از گزینه‌های محبوب است، زیرا بسیاری از مدل‌ها را تحت یک کلید جمع‌آوری می‌کند و مدل‌های رایگانی ارائه می‌دهد.

1. در [openrouter.ai](https://openrouter.ai) ثبت‌نام کنید یا وارد شوید.
2. صفحه [Keys](https://openrouter.ai/keys) را باز کنید و یک کلید جدید ایجاد کنید (نامی برای آن تعیین کنید و در صورت تمایل سقف اعتبار تعیین کنید). می‌توانید بدون افزودن اعتبار از مدل‌های رایگان استفاده کنید.
3. **دسکتاپ (الکترون):** کلیدها را در بخش **تنظیمات → API** قرار دهید. **داکر:** متغیرهای محیطی مانند `OPENROUTER_API_KEY` را تنظیم کنید (به بخش [شروع سریع](#quick-start) مراجعه کنید).

از مدل **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) برای ترجمه، بازنویسی یا تبدیل استفاده نکنید: این مدل بارهای درخواست JSON برمی‌گرداند، نه متن کامل‌شده برای این وظایف. به بخش [تنظیمات → مدل‌ها](USER-GUIDE.fa.md#models) در راهنمای کاربر مراجعه کنید.

شما همچنین می‌توانید از سایر ارائه‌دهندگان (OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، Cerebras) استفاده کنید یا مدل‌ها را به‌صورت محلی با [Ollama](https://ollama.com) اجرا کنید. برای مشاهدهٔ فهرست کامل ارائه‌دهندگان پشتیبانی‌شده و متغیرهای محیطی، بخش [پیکربندی](#configuration-and-environment) را ببینید.

> ⚠️ **اخطار**<br/>
> اگر از Ollama از طریق دستگاه، کانتینر یا سرویس دیگری استفاده می‌کنید، مطمئن شوید که Ollama را به گونه‌ای پیکربندی کرده‌اید که اتصالات خارجی (نه فقط localhost) را پذیرا باشد.

برای اطلاع از محدودیت‌ها، استفاده از کلید خودتان (BYOK) و سایر جزئیات، به بخش [احراز هویت OpenRouter](https://openrouter.ai/docs/api/reference/authentication) مراجعه کنید.

<br/><br/>

<a id="configuration-and-environment"></a>

## تنظیمات و محیط

**مکان‌های فایل پیکربندی**

| استقرار | مسیر پیکربندی |
| ------------------ | ------------------------------------------------- |
| الکترون (ویندوز) | `%APPDATA%\transrewrt\` |
| الکترون (لینوکس) | `~/.config/transrewrt/` |
| وب / داکر | `/app/data/config.json` (از حجم برای حفظ داده‌ها استفاده کنید) |

<br/>

**متغیرهای محیطی** (فقط در وب/دکر؛ الکترون از فایل پیکربندی محلی استفاده می‌کند)

| متغیر | پیش‌فرض | توضیح |
| ---------------- | ----------------------- | ----------- |
| `PORT` | `5000` | پورت شنود سرور |
| `CONFIG_PATH` | `/app/data/config.json` | مسیر فایل پیکربندی |
| `TZ` | `Europe/London` | منطقه زمانی IANA برای زمان سمت سرور (ورود به سیستم و غیره)؛ رابط کاربری همچنان دنبال مرورگر است. ببینید [داکر → منطقه زمانی](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(خالی)* | کلید API OpenRouter |
| `OPENAI_API_KEY` | *(خالی)* | کلید API OpenAI |
| `CEREBRAS_API_KEY` | *(خالی)* | کلید API Cerebras |
| `ANTHROPIC_API_KEY` | *(خالی)* | کلید API Anthropic |
| `GOOGLE_API_KEY` | *(خالی)* | کلید API Google Gemini |
| `DEEPSEEK_API_KEY` | *(خالی)* | کلید API DeepSeek |
| `GROQ_API_KEY` | *(خالی)* | کلید API Groq |
| `MISTRAL_API_KEY` | *(خالی)* | کلید API Mistral |
| `OLLAMA_URL` | *(خالی)* | آدرس پایه Ollama (مثلاً `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(خالی)* | کلید API xAI |

فقط ارائه‌دهندگانی که استفاده می‌کنید را پیکربندی کنید. شناسه مدل‌ها دارای فضای نام هستند (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` و غیره).

**نمایش هزینه:** OpenRouter در صورت امکان، دقیق‌ترین هزینه صورتحساب‌شده را برمی‌گرداند. سایر ارائه‌دهندگان از **هزینه تخمینی** بر اساس نرخ عمومی مدل‌های OpenRouter استفاده می‌کنند، به شرطی که کلید OpenRouter موجود باشد؛ بدون آن، هزینه‌های غیر از OpenRouter ممکن است به صورت `0` نمایش داده شود. توجه داشته باشید که تخمین‌ها معادل صورتحساب نیستند.

<br/>

**داده‌ها و پایداری:** برای داکر، یک ولوم را در مسیر `/app/data` اتصال دهید تا `config.json` و پایگاه داده SQLite بین راه‌اندازی‌های مجدد کانتینر حفظ شوند. بدون ولوم، تمام داده‌ها پس از توقف کانتینر از بین می‌روند.

**توسعه‌دهندگان:** پس از بارگیری تغییراتی که پیکربندی قدیمی تک‌کلیدی را جایگزین می‌کنند، اگر فایل محلی شما هنوز از فیلدهای حذف‌شده استفاده می‌کند (`api_key`, `api_url`, گزینه‌های پروکسی)، باید فایل `data/config.json` را با ساختار پیش‌فرض جدید موجود در `src/config-defaults/config_default.json` بازنشانی یا ادغام کنید.

<br/>

**احراز هویت وب:**

- مدیر پیش‌فرض: `admin` / `transrewrt26`.
- مدیریت کاربران در بخش **تنظیمات → کاربران**.

- بازنشانی گذرواژه: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (از کد اصلی: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **هشدار**<br/>
> فوراً پسورد پیش‌فرض مدیر را در هر میزبانی که قابل دسترسی از شبکه است، تغییر دهید.

<br/>

تنظیمات مهم (فونت، مدل‌ها، زبان‌ها و غیره) در بخش تنظیمات برنامه در دسترس هستند.

<br/><br/>

<a id="development-and-architecture"></a>

## توسعه و معماری

- **توسعه:** تنظیمات، ساخت، تست و استقرار (الکترون، وب، داکر) - نگاه کنید به **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **معماری و مرور سیستم:** ساختار پوشه‌ها، پشته فناوری، تصمیمات طراحی - نگاه کنید به **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting"></-issues"></a>

## گزارش مشکلات

یک مشکل را در [GitHub](https://github.com/wsj-br/transrewrt/issues) گزارش کنید. سیستم عامل خود (ویندوز / لینوکس / داکر) و نسخهٔ برنامه (که در پنجرهٔ درباره یا در صفحهٔ Releases نمایش داده می‌شود) را ارسال کنید.

<br/><br/>

<a id="disclaimer"></a>

## انصراف از مسئولیت

نام‌ها و آیکون‌های محصولات متعلق به صاحبان مربوطه هستند و صرفاً برای اهداف شناسایی استفاده شده‌اند. این نرم‌افزار با هیچ یک از برندهای ذکر شده همکاری ندارد و تأییدی از سوی آن‌ها دریافت نکرده است.

<br/><br/>

<a id="license"></a>

## مجوز

حق تکثیر © 2026 والدمر اسکودلر جونیور

[مجوز آپاچی نسخه 2.0](LICENSE)