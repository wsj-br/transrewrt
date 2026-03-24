---
translated_at: "2026-03-24T02:06:35.086Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="لوگوی Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="نسخه"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="مجوز: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="پلتفرم">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

ابزار متنی مبتنی بر هوش مصنوعی: ترجمه بین زبان‌ها، بازنویسی به سبک‌های مختلف و تبدیل متن با دستورات سفارشی — با استفاده از چندین ارائه‌دهنده هوش مصنوعی (OpenRouter، OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI و Ollama محلی). قابل اجرا به صورت برنامه رومیزی (Electron) یا برنامه تحت وب مستقرشده توسط کاربر (Docker).

- **ترجمه** — بین ده‌ها زبان، با تشخیص خودکار زبان مبدأ
- **بازنویسی** — اصلاح دستور زبان، بهبود وضوح، فرمول‌بندی رسمی/غیررسمی، خلاصه‌کردن، گسترش دادن، تبدیل به متون تخصصی
- **تبدیل** — دستورات سفارشی هوش مصنوعی؛ ایجاد و مدیریت دستورات، امکان تعیین زبان مقصد اختیاری برای هر دستور
- **تاریخچه** — تاریخچه کامل اجراها همراه با متن ورودی و خروجی، امکان فیلتر کردن و صدور داده‌ها
- **مدل‌ها و هزینه‌ها** — انتخاب مدل از هر ارائه‌دهنده پیکربندی‌شده؛ داشبورد هزینه با ثبت در SQLite، خلاصه‌های مبتنی بر مدل/عملیات/روز
- **رابط کاربری** — رابط چندزبانه (بیش از 30 زبان، پشتیبانی از زبان‌های راست‌به‌چپ)، قلم‌ها، ...
- **حالت وب** — پشتیبانی از چندکاربره با نقش‌های مدیریتی؛ کلیدهای API در سمت سرور باقی می‌مانند و هرگز در مرورگر نمایش داده نمی‌شوند
- **نسخه رومیزی** — برنامه Electron برای ویندوز و لینوکس
- **مستقرشده توسط کاربر** — تصویر Docker برای amd64 و arm64 (سازگار با Raspberry Pi)

پس از نصب، برای دیدن راهنمای کامل تمام ویژگی‌ها به **[راهنمای کاربر](USER-GUIDE.fa.md)** مراجعه کنید.

<small>**مطالعه به زبان‌های دیگر:** [English (UK)](README.fa.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>


<br/>

**توجه درباره ترجمه‌های رابط کاربری و مستندات:** تمام زبان‌های رابط کاربری به جز انگلیسی (UK) با استفاده از مدل‌های هوش مصنوعی ترجمه شده‌اند؛ ممکن است بیان‌ها دقیق نباشند یا دارای اشتباهاتی باشند.



<a id="screenshots"></a>
## تصاویر از برنامه

**انتخابگر زبان**

![انتخابگر زبان](../images/screenshots/fa/language-selector.png)

**ترجمه**

![ترجمه](../images/screenshots/fa/translate.png)

**تبدیل — ویرایشگر دستورات**

![تبدیل — ویرایشگر دستورات](../images/screenshots/fa/transform-prompt-edit.png)

**داشبورد**

![داشبورد هزینه](../images/screenshots/fa/dashboard-summary.png)

**تاریخچه**

![تاریخچه](../images/screenshots/fa/history.png)

**تنظیمات — انتخاب مدل**

![تنظیمات — انتخاب مدل](../images/screenshots/fa/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## فهرست مطالب

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [شروع سریع](#quick-start)
- [نصب](#installation)
  - [ویندوز (الکترون)](#windows-electron)
  - [لینوکس (الکترون)](#linux-electron)
  - [دوکر](#docker)
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

**دوکر (توصیه‌شده برای میزبانی خودکار)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

عبارت `sk-or-your-key` را با [کلید API OpenRouter](https://openrouter.ai/keys) خود جایگزین کنید (یا کلید سایر ارائه‌دهندگان را تنظیم کنید؛ بخش [پیکربندی](#configuration-and-environment) را ببینید). آدرس [http://localhost:5000](http://localhost:5000) را باز کنید و قبل از نمایش عمومی سرویس، رمز عبور پیش‌فرض مدیر را تغییر دهید.

<br/>

> ℹ️ **توجه**<br/>
> در دوکر، اعتبارهای LLM با متغیرهای محیطی مانند `OPENROUTER_KEY`، `OPENAI_KEY` و غیره تنظیم می‌شوند (نه در رابط کاربری تحت وب). در نسخه دسکتاپ (الکترون)، کلیدها را در بخش **تنظیمات → API** تنظیم می‌کنید.

<br/>

**ویندوز**

از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) آخرین فایل `Transrewrt Setup x.y.z.exe` را دانلود کنید، نصب‌کننده را اجرا کنید و سپس برنامه را از منوی شروع یا میان‌بر دسکتاپ اجرا کنید. کلید API خود را در بخش **تنظیمات → API** وارد کنید. شما باید حداقل یک ارائه‌دهنده را پیکربندی کنید، که OpenRouter برای مدل‌های رایگان متداول است.

<br/>

**لینوکس**

فایل `.AppImage` را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید، سپس:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

کلیدهای API خود را در بخش **تنظیمات → API** وارد کنید. شما باید حداقل یک ارائه‌دهنده را پیکربندی کنید، که OpenRouter برای مدل‌های رایگان متداول است.

در توزیع‌های دبیان/اوبونتو ممکن است ابتدا نیاز به نصب وابستگی‌های اضافی داشته باشید:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

جزئیات بیشتر در بخش [نصب → لینوکس](#linux-electron) موجود است.

<br/>

> ℹ️ **توجه**<br/>
> سیستم عامل macOS در حال حاضر پشتیبانی نمی‌شود. Transrewrt برای ویندوز، لینوکس و دوکر در دسترس است.

<br/>

پس از راه‌اندازی برنامه، [راهنمای کاربر](USER-GUIDE.fa.md) را بخوانید تا بیاموزید چگونه متن را ترجمه، بازنویسی و تغییر دهید، پرامپت‌ها را مدیریت کنید و مدل‌ها را پیکربندی کنید.

<br/><br/>

<a id="installation"></a>
## نصب

<a id="windows-electron"></a>
### ویندوز (الکترون)

- آخرین نصب‌کننده را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
- فایل `.exe` را اجرا کرده و مراحل نصب را دنبال کنید.
- در اجرای اول: برنامه را از منوی شروع یا میان‌بر دسکتاپ اجرا کنید.

<br/>

<a id="linux-electron"></a>
### لینوکس (الکترون)

- فایل `.AppImage` را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
- اجرا: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- وابستگی‌های اضافی (دبیان/اوبونتو): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- برای اطلاعات بیشتر به [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) مراجعه کنید.

<br/>

<a id="docker"></a>
### دوکر

- دریافت تصویر: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- حداقل یک کلید ارائه‌دهنده را از طریق متغیرهای محیط (مثلاً `OPENROUTER_KEY` برای OpenRouter) تنظیم کنید. از `-e` یا `docker compose` / `.env` برای انتقال متغیرها استفاده کنید تا اطلاعات محرمانه در تصویر ذخیره نشوند.
- کلیدهای ارائه‌دهنده در رابط کاربری تحت وب وارد نمی‌شوند؛ سرور آن‌ها را از محیط می‌خواند.

مثال — استفاده از حجم نام‌گذاری‌شده برای حفظ داده (کلید OpenRouter از طریق متغیر محیطی):

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
|--------|-------------------------------------------------------------------------------------------------------------|
| پورت   | `5000` (با استفاده از `-p 5000:5000` نگاشت شود)                                                                              |
| حجم    | `/app/data` را برای حفظ تنظیمات و پایگاه داده mount کنید                                                         |
| متغیرهای محیطی | `PORT`, `CONFIG_PATH`، و همچنین کلیدهای LLM (`OPENROUTER_KEY`, `OPENAI_KEY` و غیره) - بخش [پیکربندی](#configuration-and-environment) را ببینید |

برای ساخت و اجرای محلی از سورس: `docker compose up --build -d` یا `pnpm docker:up` - بخش [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) را ببینید.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## دریافت کلید API OpenRouter

Transrewrt از چندین ارائه‌دهنده هوش مصنوعی پشتیبانی می‌کند. [OpenRouter](https://openrouter.ai) یک انتخاب محبوب است، زیرا بسیاری از مدل‌ها را زیر یک کلید جمع‌آوری می‌کند و مدل‌های رایگانی نیز ارائه می‌دهد.

1. در [openrouter.ai](https://openrouter.ai) ثبت‌نام کنید یا وارد شوید.
2. صفحهٔ [Keys](https://openrouter.ai/keys) را باز کنید و یک کلید جدید ایجاد کنید (نام آن را تعیین کنید و در صورت تمایل محدودیت اعتبار قرار دهید). می‌توانید بدون افزودن اعتبار از مدل‌های رایگان استفاده کنید.
3. **دسکتاپ (الکترون):** کلیدها را در **تنظیمات → API** وارد کنید. **داکر:** متغیرهای محیطی مانند `OPENROUTER_KEY` را تنظیم کنید (نگاه کنید به [شروع سریع](#quick-start)).

همچنین می‌توانید از سایر ارائه‌دهندگان (OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI) استفاده کنید یا مدل‌ها را به‌صورت محلی با [Ollama](https://ollama.com) اجرا کنید. برای دیدن فهرست کامل ارائه‌دهندگان پشتیبانی‌شده و متغیرهای محیطی، بخش [پیکربندی](#configuration-and-environment) را مشاهده کنید.

برای محدودیت‌ها، استفاده از کلید شخصی (BYOK) و اطلاعات بیشتر، صفحهٔ [athentication در OpenRouter](https://openrouter.ai/docs/api/reference/authentication) را ببینید.

<br/><br/>

<a id="configuration-and-environment"></a>
## پیکربندی و محیط

**مکان‌های فایل پیکربندی**

| روش اجرا         | مکان پیکربندی                                  |
| ------------------ | ------------------------------------------------ |
| الکترون (ویندوز)  | `%APPDATA%\transrewrt\`                          |
| الکترون (لینوکس)   | `~/.config/transrewrt/`                          |
| وب / داکر          | `/app/data/config.json` (از ولوم برای ماندگاری استفاده کنید) |

<br/>

**متغیرهای محیطی** (فقط وب/داکر؛ الکترون از فایل پیکربندی محلی استفاده می‌کند)

| متغیر             | پیش‌فرض               | توضیحات |
| ------------------ | --------------------- | ------- |
| `PORT`             | `5000`                | پورت گوش دادن سرور |
| `CONFIG_PATH`      | `/app/data/config.json` | مسیر فایل پیکربندی |
| `OPENROUTER_KEY`   | *(تهی)*                | کلید API OpenRouter |
| `OPENAI_KEY`       | *(تهی)*                | کلید API OpenAI |
| `ANTHROPIC_KEY`    | *(تهی)*                | کلید API Anthropic |
| `GOOGLE_KEY`       | *(تهی)*                | کلید API Google Gemini |
| `DEEPSEEK_KEY`     | *(تهی)*                | کلید API DeepSeek |
| `GROQ_KEY`         | *(تهی)*                | کلید API Groq |
| `MISTRAL_KEY`      | *(تهی)*                | کلید API Mistral |
| `OLLAMA_URL`       | *(تهی)*                | آدرس پایهٔ Ollama (مثلاً `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(تهی)*                | کلید API xAI |

فقط ارائه‌دهندگانی را پیکربندی کنید که از آنها استفاده می‌کنید. شناسه مدل‌ها فضای نام‌دار هستند (`openrouter/…`, `openai/…`, `ollama/…` و غیره).

**نمایش هزینه:** OpenRouter در صورت امکان، هزینه واقعی صورتحساب را برمی‌گرداند. سایر ارائه‌دهندگان از **هزینه تخمینی** بر اساس قیمت عمومی مدل‌های OpenRouter استفاده می‌کنند در صورتی که یک کلید OpenRouter موجود باشد؛ در غیر این صورت، هزینه‌های غیر OpenRouter ممکن است `0` نشان داده شوند. این تخمین‌ها فاکتور رسمی نیستند.

<br/>

**داده‌ها و ماندگاری:** در داکر، یک ولوم را در `/app/data` متصل کنید تا `config.json` و پایگاه داده SQLite بین راه‌اندازی‌های مجدد کانتینر حفظ شوند. بدون ولوم، تمام داده‌ها پس از متوقف شدن کانتینر از دست می‌روند.

**توسعه‌دهندگان:** پس از دریافت تغییراتی که پیکربندی قدیمی تک‌کلیدی را جایگزین می‌کنند، در صورتی که فایل محلی شما هنوز از فیلدهای حذف‌شده (`api_key`, `api_url`, گزینه‌های پروکسی) استفاده می‌کند، فایل `data/config.json` را با ساختار پیش‌فرض جدید از `src/config-defaults/config_default.json` ریست کنید یا ادغام نمایید.

<br/>

**احراز هویت وب:**

- مدیر پیش‌فرض: `admin` / `transrewrt26`.
- مدیریت کاربران در بخش **تنظیمات → کاربران**.
- تغییر رمز: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (از منبع: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **هشدار**<br/>
> بلافاصله پس از اجرای برنامه روی هر سرویس‌دهنده‌ای که از شبکه قابل دسترسی است، رمز عبور پیش‌فرض مدیر را تغییر دهید.

<br/>

تنظیمات مهم (فونت، مدل‌ها، زبان‌ها و غیره) از طریق بخش تنظیمات برنامه در دسترس هستند.

<br/><br/>

<a id="development-and-architecture"></a>
## توسعه و معماری

- **توسعه:** راه‌اندازی، ساخت، تست و انتشار (الکترون، وب، داکر) — نگاه کنید به **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **مرور معماری و سیستم:** ساختار پوشه‌ها، پشته فناوری، تصمیمات طراحی — نگاه کنید به **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## انتشارات و برچسب‌ها

- **برچسب‌های Git** با پیشوند `v`* (مثلاً `v1.0.10`) فعال‌سازی [فرآیند انتشار](.github/workflows/release.yml) می‌شوند. **انتشارات GitHub** شامل نصب‌کننده ویندوز (`.exe`) و فایل AppImage لینوکس می‌شوند.
- **تصاویر داکر** در `ghcr.io/wsj-br/transrewrt` منتشر می‌شوند. برچسب تصاویر با نسخه Git مطابقت دارند (مثلاً `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) به علاوه برچسب `latest`. معماری چندگانه: `linux/amd64` و `linux/arm64` (مثلاً برای رزبری پای).

<br/><br/>

<a id="contributing"></a>
## همکاری در توسعه

1. مخزن را برای خود کپی‌برداری کنید.
2. یک شاخه ویژگی ایجاد کنید: `git checkout -b feature/my-feature`
3. تغییرات خود را با پیامی شفاف ذخیره کنید.
4. تغییرات را ارسال کنید و یک درخواست ادغام (Pull Request) نسبت به شاخه `main` باز کنید.

لطفاً سبک کدنویسی موجود را رعایت کنید و قبل از ارسال، تغییرات خود را در هر دو حالت Electron و وب تست کنید. دستورالعمل‌های ساخت و تست را در [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) مشاهده کنید.

<br/>

**گزارش مشکلات:** یک مشکل جدید در [GitHub](https://github.com/wsj-br/transrewrt/issues) ایجاد کنید. سیستم‌عامل خود (ویندوز / لینوکس / داکر) و نسخه برنامه (که در کادر درباره یا در صفحه انتشارات نمایش داده می‌شود) را ذکر کنید.

<br/><br/>

<a id="disclaimer"></a>
## سلب مسئولیت

نام و آیکون محصولات متعلق به صاحبان آن‌ها بوده و صرفاً جهت شناسایی استفاده شده‌اند. این نرم‌افزار با هیچ یک از برندهای ذکر شده همکاری یا تأیید رسمی نداشته است.

<br/><br/>

<a id="license"></a>
## مجوز

کپی‌رایت © 2026 والدرمار اسکودلر جونیور

[مجوز آپاچی 2.0](LICENSE)