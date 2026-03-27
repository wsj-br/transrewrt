---
translated_at: "2026-03-27T23:13:01.338Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="لوگوی Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="نسخه"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="لایسنس: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="پلتفرم">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

ابزار متنی مبتنی بر هوش مصنوعی: ترجمه بین زبان‌ها، بازنویسی با سبک‌های مختلف و تبدیل با دستورات سفارشی — با استفاده از چندین ارائه‌دهنده هوش مصنوعی (OpenRouter، OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI و Ollama محلی). این ابزار به صورت یک اپلیکیشن دسکتاپ (Electron) یا یک اپلیکیشن تحت وب خودمیزبان (Docker) قابل اجرا است.

- **ترجمه** — بین ده‌ها زبان، با تشخیص خودکار زبان مبدا
- **بازنویسی** — اصلاح دستور زبان، بهبود روشنی و وضوح، تبدیل به سبک رسمی/غیررسمی، کوتاه‌نویسی، گسترش و فنی‌سازی متن
- **تبدیل** — دستورات هوش مصنوعی سفارشی؛ ایجاد و مدیریت پِرامپت‌ها، همراه با امکان تعیین زبان مقصد اختیاری برای هر پرامپت
- **تاریخچه** — تاریخچه کامل اجرای عملیات با ورودی/خروجی متن، فیلتر کردن و امکان صدور (خروجی)
- **مدل‌ها و هزینه** — انتخاب مدل از هر ارائه‌دهنده راه‌اندازی شده؛ صفحه‌های کنترل هزینه و مصرف همراه با ثبت سیاه، خلاصه‌ها بر اساس مدل/عملیات/روز
- **رابط کاربری (UI)** — رابط چندزبانه (از ۳۰+ زبان، پشتیبانی از زبان‌های با راست‌چین) شامل فونت‌ها، ...
- **حالت وب** — پشتیبانی از چندکاربره با نقش‌های مدیریتی
- **دسکتاپ** — اپلیکیشن Electron برای ویندوز و لینوکس
- **خودمیزبانی** — تصویر داکر برای amd64 و arm64 (آماده برای رزبری‌پای)

پس از نصب، برای مرور کامل همه ویژگی‌ها به **[راهنمای کاربر](USER-GUIDE.fa.md)** مراجعه کنید.

<small>**خواندن به زبان‌های دیگر:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **توجه درباره ترجمه‌های رابط و مستندات:** تمام زبان‌های رابط کاربری به جز انگلیسی (بریتانیا) به‌عنوان نسخه اصلی، با استفاده از مدل‌های هوش مصنوعی ترجمه شده‌اند؛ ممکن است واژه‌گزینی‌ها دقیق نباشند یا حاوی اشکالات باشند.

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
  - [دکر](#docker)
- [دریافت کلید API OpenRouter](#getting-an-openrouter-api-key)
- [پیکربندی و محیط](#configuration-and-environment)
- [توسعه و معماری](#development-and-architecture)
- [انتشارات و برچسب‌ها](#releases-and-tags)
- [همکاری در پروژه](#contributing)
- [متناژ](#disclaimer)
- [مجوز](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## شروع سریع

**دوکر (توصیه شده برای میزبانی شخصی)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

مقدار `sk-or-your-key` را با کلید API خود از [OpenRouter](https://openrouter.ai/keys) جایگزین کنید (یا کلیدهای سایر ارائه‌دهندگان را تنظیم کنید؛ بخش [پیکربندی](#configuration-and-environment) را ببینید). آدرس [http://localhost:5000](http://localhost:5000) را باز کنید و قبل از در دسترس قرار دادن سرویس، رمز عبور پیش‌فرض مدیر را تغییر دهید.

<br/>

> ℹ️ **توجه**<br/>
> در دوکر، اطلاعات احراز هویت مدل‌های زبان بزرگ (LLM) با متغیرهای محیطی مانند `OPENROUTER_API_KEY`، `OPENAI_API_KEY`، `CEREBRAS_API_KEY` و غیره تنظیم می‌شوند (نه در رابط کاربری تحت وب). در نسخه دسکتاپ (الکترون) باید کلیدها را از طریق **تنظیمات → API** وارد کنید.

<br/>

**ویندوز**

آخرین فایل `Transrewrt Setup x.y.z.exe` را از بخش [انشعارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید، نصب کنید و سپس از طریق منوی شروع یا میانبر دسکتاپ اجرا کنید. کلیدهای API خود را در بخش **تنظیمات → API** وارد کنید. شما باید حداقل یک ارائه‌دهنده را پیکربندی کنید. OpenRouter برای مدل‌های رایگان گزینه متداولی است.

<br/>

**لینوکس**

فایل `.AppImage` مربوط به پردازنده خود را از بخش [انشعارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید (`x64` برای رایانه‌های معمولی، `arm64` برای دستگاه‌های ARM از جمله رزبری پای 4 به بالا)، سپس دستور زیر را اجرا کنید:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

کلیدهای API خود را در بخش **تنظیمات → API** وارد کنید. شما باید حداقل یک ارائه‌دهنده را پیکربندی کنید. OpenRouter برای مدل‌های رایگان گزینه متداولی است.

در توزیع‌های دبیان/اوبونتو ممکن است ابتدا نیاز به نصب وابستگی‌های اضافی باشد:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

برای جزئیات بیشتر به بخش [نصب → لینوکس](#linux-electron) مراجعه کنید.

<br/>

> ℹ️ **توجه**<br/>
> در حال حاضر سیستم عامل macOS پشتیبانی نمی‌شود. Transrewrt برای ویندوز، لینوکس و دوکر در دسترس است.

<br/>

پس از اجرای برنامه، با مراجعه به **[راهنمای کاربر](USER-GUIDE.fa.md)** یاد بگیرید چگونه متن را ترجمه، بازنویسی و تبدیل کنید، پرامپت‌ها را مدیریت کنید و مدل‌ها را پیکربندی کنید.

<br/><br/>

<a id="installation"></a>

## نصب

<a id="windows-electron"></a>
### ویندوز (الکترون)

- آخرین نسخهٔ نصب‌کننده را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
- فایل `.exe` را اجرا کرده و مراحل نصب را دنبال کنید.
- اولین اجرا: از منوی استارت یا میان‌بر دسکتاپ برنامه را شروع کنید.

<br/>

<a id="linux-electron"></a>
### لینوکس (الکترون)

- فایل `.AppImage` مناسب (‌‍`x64` یا `arm64`) را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
- اجرا: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` روی x86_64/amd64، یا فایل با نام `...-arm64.AppImage` را روی ARM64 استفاده کنید.
- وابستگی‌های اضافی (دوایان/اوبونتو): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- برای اطلاعات بیشتر به [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) مراجعه کنید.

<br/>

<a id="docker"></a>
### داکر

- دریافت: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- حداقل یک کلید ارائه‌دهنده را از طریق محیط تنظیم کنید (مثلاً `OPENROUTER_API_KEY` برای OpenRouter). متغیرها را با `-e` یا `docker compose` / `.env` منتقل کنید تا اطلاعات محرمانه در تصویر ذخیره نشوند.
- کلیدهای ارائه‌دهنده در رابط وب وارد **نمی‌شوند**؛ سرور آنها را از محیط می‌خواند.

مثال — استفاده از حجم نام‌گذاری‌شده برای ذخیره‌سازی (کلید OpenRouter از طریق محیط):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

یا اگر ترجیح می‌دهید از Docker Compose استفاده کنید:

# دانلود فایل کامپوز
```
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# ویرایش فایل برای افزودن API_KEYS
vi transrewrt.yml
# راه‌اندازی کانتینر
docker compose -f transrewrt.yml up -d
```

<br/>

| گزینه | توضیحات |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| پورت | `5000` (با استفاده از `-p 5000:5000` نگاشت شود) |
| Volume | ماونت کردن `/app/data` برای داشتن پیکربندی و دیتابیس با دوام |
| متغیرهای محیطی | `PORT`, `CONFIG_PATH` و همچنین کلیدهای مدل زبانی بزرگ (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) — به بخش [پیکربندی](#configuration-and-environment) مراجعه کنید |

برای ساخت و اجرا از روی کد اصلی: `docker compose up --build -d` یا `pnpm docker:up` — به فایل [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) مراجعه کنید.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## دریافت کلید API از OpenRouter

Transrewrt از بسیاری از ارائه‌دهندگان هوش مصنوعی پشتیبانی می‌کند. [OpenRouter](https://openrouter.ai) انتخابی محبوب است، زیرا بسیاری از مدل‌ها را زیر یک کلید جمع‌آوری می‌کند و مدل‌های رایگانی نیز ارائه می‌دهد.

1. در [openrouter.ai](https://openrouter.ai) ثبت‌نام کنید یا وارد شوید.
2. به صفحه [Keys](https://openrouter.ai/keys) بروید و یک کلید جدید ایجاد کنید (نام آن را مشخص کنید و به صورت اختیاری می‌توانید سقف اعتبار تعیین کنید). بدون نیاز به افزودن اعتبار می‌توانید از مدل‌های رایگان استفاده کنید.
3. **نسخه دسکتاپ (الکترون):** کلیدها را در بخش **Settings → API** بچسبانید. **دوکر (Docker):** متغیرهای محیطی مانند `OPENROUTER_API_KEY` را تنظیم کنید (به بخش [Quick start](#quick-start) مراجعه کنید).

از مدل **Body Builder** موجود در OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) برای ترجمه، بازنویسی یا تبدیل متن استفاده نکنید: این مدل بارهای درخواست JSON برمی‌گرداند، نه متن نهایی برای انجام این وظایف. برای اطلاعات بیشتر به بخش [Settings → Models](USER-GUIDE.fa.md#models) در راهنمای کاربر مراجعه کنید.

همچنین می‌توانید از سایر ارائه‌دهندگان (OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، Cerebras) استفاده کنید یا مدل‌ها را به صورت محلی با استفاده از [Ollama](https://ollama.com) اجرا کنید. برای مشاهده فهرست کامل ارائه‌دهندگان پشتیبانی‌شده و متغیرهای محیطی، به بخش [Configuration](#configuration-and-environment) مراجعه کنید.

> ⚠️ **هشدار**<br/>
> اگر از Ollama در دستگاه، کانتینر یا سرویس دیگری استفاده می‌کنید، مطمئن شوید که Ollama را به گونه‌ای تنظیم کرده‌اید که اتصالات خارجی (نه تنها localhost) را پذیرا باشد.


برای اطلاع از محدودیت‌ها، استفاده از کلید شخصی (BYOK) و جزئیات بیشتر، به [احراز هویت OpenRouter](https://openrouter.ai/docs/api/reference/authentication) مراجعه کنید.

<br/><br/>

<a id="configuration-and-environment"></a>

## پیکربندی و محیط

**مکان‌های فایل پیکربندی**

| استقرار | مکان پیکربندی |
|--------|-------------|
| Electron (ویندوز) | `%APPDATA%\transrewrt\` |
| Electron (لینوکس) | `~/.config/transrewrt/` |
| تحت‌شبکه / داکر | `/app/data/config.json` (از ولوم برای حفظ داده‌ها استفاده کنید) |

<br/>

**متغیرهای محیطی** (فقط وب/داکر؛ Electron از فایل محلی پیکربندی استفاده می‌کند)

| متغیر | پیش‌فرض | توضیح |
|------|--------|------|
| `PORT` | `5000` | پورت شنود سرور |
| `CONFIG_PATH` | `/app/data/config.json` | مسیر فایل پیکربندی |
| `OPENROUTER_API_KEY` | *(خالی)* | کلید API OpenRouter |
| `OPENAI_API_KEY` | *(خالی)* | کلید API OpenAI |
| `CEREBRAS_API_KEY` | *(خالی)* | کلید API Cerebras |
| `ANTHROPIC_API_KEY` | *(خالی)* | کلید API Anthropic |
| `GOOGLE_API_KEY` | *(خالی)* | کلید API گوگل Gemini |
| `DEEPSEEK_API_KEY` | *(خالی)* | کلید API DeepSeek |
| `GROQ_API_KEY` | *(خالی)* | کلید API Groq |
| `MISTRAL_API_KEY` | *(خالی)* | کلید API Mistral |
| `OLLAMA_URL` | *(خالی)* | آدرس پایه Ollama (مثلاً `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(خالی)* | کلید API xAI |

فقط ارائه‌دهندگانی را پیکربندی کنید که از آنها استفاده می‌کنید. شناسه مدل‌ها دارای فضای نام هستند (`openrouter/...`، `openai/...`، `cerebras/...`، `ollama/...` و غیره).

**نمایش هزینه:** OpenRouter در صورت امکان هزینه دقیق صورتحساب را برمی‌گرداند. سایر ارائه‌دهندگان از **هزینه تخمینی** استخراج شده از قیمت عمومی مدل‌های OpenRouter استفاده می‌کنند — در صورت داشتن کلید OpenRouter؛ بدون آن، هزینه‌های غیر از OpenRouter ممکن است `0` نمایش داده شوند. این تخمین‌ها صورتحساب نیستند.

<br/>

**داده‌ها و حفظ (persistence):** در داکر، یک ولوم را در مسیر `/app/data` متصل کنید تا فایل `config.json` و پایگاه‌داده SQLite در طول راه‌اندازی مجدد کانتینر حفظ شوند. بدون ولوم، تمام داده‌ها پس از توقف کانتینر از بین می‌روند.

**برنامه‌نویسان:** پس از دریافت تغییراتی که فایل پیکربندی قدیمی کلیدی را جایگزین می‌کنند، در صورت اینکه فایل محلی شما همچنان از فیلدهای حذف‌شده استفاده کند (`api_key`، `api_url`، گزینه‌های پروکسی)، فایل `data/config.json` را با ساختار پیش‌فرض جدید از `src/config-defaults/config_default.json` تنظیم مجدد یا ادغام کنید.

<br/>

**احراز هویت تحت‌شبکه:**

- مدیر پیش‌فرض: `admin` / `transrewrt26`.
- مدیریت کاربران در بخش **تنظیمات → کاربران**.
- بازنشانی رمز عبور: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (از منبع: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **هشدار**<br/>
> فوراً پس از راه‌اندازی روی هر سیستمی که به شبکه دسترسی دارد، رمزعبور پیش‌فرض مدیر را تغییر دهید.

<br/>

تنظیمات مهم (فونت، مدل‌ها، زبان‌ها و غیره) در قسمت تنظیمات برنامه در دسترس هستند.

<br/><br/>

<a id="development-and-architecture"></a>

## توسعه و معماری

- **توسعه:** راه‌اندازی، ساخت، تست و استقرار (الکترون، وب، داکر) - به **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** مراجعه کنید.
- **معماری و مرور کلی سیستم:** ساختار پوشه‌ها، فناوری‌های مورد استفاده و تصمیمات طراحی - به **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** مراجعه کنید.

<br/><br/>

<a id="releases-and-tags"></a>
## انتشار و برچسب‌ها

- **برچسب‌های Git** `v`* (مثلاً `v1.0.10`) فرآیند [ارسال نسخه](.github/workflows/release.yml) را فعال می‌کنند. **انتشارهای GitHub** شامل نرم‌افزار نصب‌کننده ویندوز (`.exe`) و فایل‌های AppImage مربوط به لینوکس (**x64** و **arm64**) هستند.
- **تصاویر داکر** در آدرس `ghcr.io/wsj-br/transrewrt` منتشر می‌شوند. برچسب تصاویر مطابق با نسخه Git است (مثلاً `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) و همچنین برچسب `latest` نیز وجود دارد. چند معماری: `linux/amd64` و `linux/arm64` (مثلاً برای رزبری پای).

<br/><br/>

<a id="contributing"></a>
## مشارکت

1. مخزن را دوگانه کنید.
2. شاخه ویژگی ایجاد کنید: `git checkout -b feature/my-feature`
3. تغییرات خود را با یک پیام واضح ثبت کنید.
4. تغییرات را منتشر کنید و یک درخواست ترکیب (Pull Request) نسبت به شاخه `main` باز کنید.

لطفاً از سبک کدنویسی موجود پیروی کنید و پیش از ارسال، تغییرات خود را در هر دو حالت الکترون و وب تست کنید. برای دستورالعمل‌های ساخت و تست به [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) مراجعه کنید.

<br/>

**گزارش مشکلات:** یک گزارش جدید در [GitHub](https://github.com/wsj-br/transrewrt/issues) ایجاد کنید. سیستم عامل خود (ویندوز / لینوکس / داکر) و نسخه نرم‌افزار (که در کادر درباره یا صفحه انتشار نشان داده شده است) را ذکر کنید.

<br/><br/>

<a id="disclaimer"></a>

## اخطار

نام‌ها و آیکون‌های محصولات متعلق به مالکان آن‌ها هستند و صرفاً به منظور شناسایی استفاده شده‌اند. این نرم‌افزار با هیچ‌یک از برندهای ذکر شده همکاری ندارد و توسط آن‌ها تأیید یا حمایت نمی‌شود.

<br/><br/>

<a id="license"></a>
## مجوز

کپی‌رایت © ۲۰۲۶ والدمار اسکودلر جونیور

[مجوز آپاچی 2.0](LICENSE)