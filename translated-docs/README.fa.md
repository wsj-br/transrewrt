---
translation_last_updated: '2026-03-31T22:57:32.855Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: fa
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**فهرست مطالب**

- [تصاویر صفحه](../<#screenshots>)
- [فهرست مطالب](../<#table-of-contents>)
- [شروع سریع](../<#quick-start>)
- [نصب](../<#installation>)
  - [ویندوز (الکترون)](../<#windows-electron>)
  - [لینوکس (الکترون)](../<#linux-electron>)
  - [داکر](../<#docker>)
  - [پیکربندی منطقه زمانی](../<#configuring-the-timezone>)
- [دریافت کلید API OpenRouter](../<#getting-an-openrouter-api-key>)
- [پیکربندی و محیط](../<#configuration-and-environment>)
- [توسعه و معماری](../<#development-and-architecture>)
- [گزارش مشکلات](../<#reporting-issues>)
- [سلب مسئولیت](../<#disclaimer>)
- [مجوز](../<#license>)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

ابزار متنی مبتنی بر هوش مصنوعی: ترجمه بین زبان‌ها، بازنویسی با سبک‌های مختلف و تبدیل با دستورهای سفارشی — با استفاده از ارائه‌دهندگان متعدد هوش مصنوعی (OpenRouter، OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI و Ollama محلی). این ابزار به صورت برنامه دسکتاپ (Electron) یا برنامه تحت وب خودمیزبان (Docker) اجرا می‌شود.

- **ترجمه** — بین ده‌ها زبان، با تشخیص خودکار زبان منبع
- **بازنویسی** — اصلاح دستور زبان، افزایش وضوح، رسمی/غیررسمی، کوتاه‌کردن، گسترش دادن، تخصصی
- **تبدیل** — دستورهای هوش مصنوعی سفارشی؛ ایجاد و مدیریت دستورها، زبان هدف اختیاری برای هر دستور
- **تاریخچه** — تاریخچه کامل اجرای عملیات با متن ورودی/خروجی، فیلتر کردن و صادرات
- **مدل‌ها و هزینه** — انتخاب مدل از هر ارائه‌دهنده پیکربندی‌شده؛ داشبوردهای هزینه و مصرف با سیاهه، خلاصه‌ها بر اساس مدل/عملیات/روز
- **رابط کاربری** — رابط چندزبانه (بیش از 30 زبان، پشتیبانی از زبان‌های راست‌به‌چپ)، قلم‌ها، ...
- **حالت وب** — پشتیبانی چندکاربره با نقش‌های مدیر
- **دسکتاپ** — برنامه Electron برای ویندوز و لینوکس
- **خودمیزبان** — تصویر Docker برای amd64 و arm64 (آماده برای Raspberry Pi)

پس از نصب، **[راهنمای کاربر](USER-GUIDE.fa.md)** را برای مرور کامل تمام ویژگی‌ها مشاهده کنید.

**مطالعه به زبان‌های دیگر:**
[انگلیسی (بریتانیا)](../<README.md>) · [پرتغالی (برزیل)](../<translated-docs/README.pt-BR.md>) · [عربی](../<translated-docs/README.ar.md>) · [بنگالی](../<translated-docs/README.bn.md>) · [کاتالان](../<translated-docs/README.ca.md>) · [چینی ساده‌شده](../<translated-docs/README.zh-CN.md>) · [چینی سنتی](../<translated-docs/README.zh-TW.md>) · [کرواتی](../<translated-docs/README.hr.md>) · [چکی](../<translated-docs/README.cs.md>) · [هلندی](../<translated-docs/README.nl.md>) · [انگلیسی (آمریکا)](../<translated-docs/README.en-US.md>) · [فیلیپینی](../<translated-docs/README.tl.md>) · [فرانسوی](../<translated-docs/README.fr.md>) · [آلمانی](../<translated-docs/README.de.md>) · [یونانی](../<translated-docs/README.el.md>) · [هندی](../<translated-docs/README.hi.md>) · [مجاری](../<translated-docs/README.hu.md>) · [ایتالیایی](../<translated-docs/README.it.md>) · [ژاپنی](../<translated-docs/README.ja.md>) · [جاوه‌ای](../<translated-docs/README.jv.md>) · [کره‌ای](../<translated-docs/README.ko.md>) · [مالایی](../<translated-docs/README.ms.md>) · [فارسی](../<translated-docs/README.fa.md>) · [لهستانی](../<translated-docs/README.pl.md>) · [پرتغالی (پرتغال)](../<translated-docs/README.pt.md>) · [پنجابی](../<translated-docs/README.pa.md>) · [رومانیایی](../<translated-docs/README.ro.md>) · [روسی](../<translated-docs/README.ru.md>) · [اسلواکی](../<translated-docs/README.sk.md>) · [اسپانیایی](../<translated-docs/README.es.md>) · [سواحیلی](../<translated-docs/README.sw.md>) · [سوئدی](../<translated-docs/README.sv.md>) · [تلوگو](../<translated-docs/README.te.md>) · [تایلندی](../<translated-docs/README.th.md>) · [ترکی](../<translated-docs/README.tr.md>) · [اوکراینی](../<translated-docs/README.uk.md>) · [ویتنامی](../<translated-docs/README.vi.md>)

> **توجه درباره ترجمه‌های رابط کاربری و مستندات:** تمام زبان‌های رابط به جز انگلیسی (بریتانیا) که زبان اصلی است، با استفاده از مدل‌های هوش مصنوعی ترجمه شده‌اند؛ ممکن است عبارات نادقیق یا دارای خطا باشند.

## تصاویر صفحه

**انتخابگر زبان**

انتخاب‌گر زبان

**ترجمه**

ترجمه

**تبدیل - ویرایشگر دستور**

تبدیل - ویرایشگر دستور

**داشبورد**

خلاصه داشبورد — مصرف

**تاریخچه**

تاریخچه

**تنظیمات - انتخاب مدل**

تنظیمات - انتخاب مدل

## فهرست مطالب

- [شروع سریع](#quick-start)
- [نصب](#installation)
  - [ویندوز (Electron)](#windows-electron)
  - [لینوکس (Electron)](#linux-electron)
  - [Docker](#docker)
  - [پیکربندی منطقه زمانی](#configuring-the-timezone)
- [دریافت کلید API OpenRouter](#getting-an-openrouter-api-key)
- [پیکربندی و محیط](#configuration-and-environment)
- [توسعه و معماری](#development-and-architecture)
- [گزارش مشکلات](#reporting-issues)
- [سلب مسئولیت](#disclaimer)
- [مجوز](#license)

## شروع سریع

**دکر (توصیه‌شده برای میزبانی خودکار)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

عبارت `sk-or-your-key` را با کلید API خود از [OpenRouter](https://openrouter.ai/keys) جایگزین کنید (یا کلیدهای ارائه‌دهنده دیگر را تنظیم کنید؛ به [پیکربندی](#configuration-and-environment) مراجعه کنید). [http://localhost:5000](http://localhost:5000) را باز کنید و قبل از در دسترس قرار دادن سرویس، رمز عبور پیش‌فرض مدیر را تغییر دهید.

> ℹ️ **یادداشت**  
>
> در داکر، اعتبارهای LLM با متغیرهای محیطی مانند `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … تنظیم می‌شوند (نه در رابط کاربری وب). در نسخه دسکتاپ (الکترون) کلیدها را در بخش **تنظیمات → API** پیکربندی کنید.

**ویندوز**

آخرین فایل `Transrewrt Setup x.y.z.exe` را از بخش [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید، نصب‌کننده را اجرا کنید و سپس از طریق منوی شروع یا میان‌بر دسکتاپ اجرا کنید. کلیدهای API خود را در بخش **تنظیمات → API** وارد کنید. شما باید حداقل یک ارائه‌دهنده را پیکربندی کنید، OpenRouter معمولاً برای مدل‌های رایگان استفاده می‌شود.

**لینوکس**

فایل `.AppImage` مربوط به پردازنده خود را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید (`x64` برای رایانه‌های معمولی، `arm64` برای دستگاه‌های ARM از جمله رزبری پای 4+)، سپس:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

کلیدهای API خود را در بخش **تنظیمات → API** وارد کنید. شما باید حداقل یک ارائه‌دهنده را پیکربندی کنید، OpenRouter معمولاً برای مدل‌های رایگان استفاده می‌شود.

**پیام‌های کنسول:** نسخه‌های بسته‌بندی‌شده لینوکس (`x64` و `arm64` AppImages) هشدارهای منسوخ‌شده Node را در ترمینال ساکت می‌کنند (برای مثال ماژول داخلی `punycode`). اگر کرومیوم خطاهای GPU / EGL مانند «GLES3 پشتیبانی نمی‌شود» چاپ کند اما برنامه کار کند، می‌توانید با غیرفعال کردن شتاب سخت‌افزاری آن‌ها را ساکت کنید:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

این مورد در amd64 نیز صدق می‌کند؛ نام فایل را متناسب با دانلود خود تغییر دهید. برای جزئیات بیشتر به [نصب → لینوکس (الکترون)](../<#linux-electron>) مراجعه کنید.

در دبیان/اوبونتو ممکن است به کتابخانه‌های **اجرا**یی اضافی نیاز داشته باشید که کرومیوم انتظار دارد (اغلب در دسکتاپ‌های کامل وجود دارند). از **`libnotify4`** برای اعلانات دسکتاپ استفاده کنید — نه `libnotify-dev` (این برای ساخت نرم‌افزار است، نه برای اجرای AppImage بسته‌بندی‌شده):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

تصاویر حداقلی یا سفارشی ممکن است همچنان با خطای `.so` گیر کنند؛ بسته‌ای را که خطا نام می‌برد نصب کنید (بسته‌های اضافی رایج: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). برخی محیط‌ها برای اجرای AppImage به FUSE نیاز دارند (مثلاً `libfuse2` در اوبونتو 22.04+) یا از `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` استفاده کنید.

برای همین خلاصه، به [نصب → لینوکس](../<#linux-electron>) مراجعه کنید.

> ℹ️ **یادداشت**  
>
> فعلاً مک‌اواس پشتیبانی نمی‌شود. Transrewrt برای ویندوز، لینوکس و داکر در دسترس است.

پس از اجرای برنامه، از **[راهنمای کاربر](USER-GUIDE.fa.md)** برای یادگیری نحوه ترجمه، بازنویسی و تبدیل متن، مدیریت پرامپت‌ها و پیکربندی مدل‌ها استفاده کنید.

## نصب

### ویندوز (الکترون)

- آخرین نصب‌کننده را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
- فایل `.exe` را اجرا کرده و دستورالعمل‌های نصب را دنبال کنید.
- اولین اجرا: برنامه را از منوی شروع یا میان‌بر دسکتاپ اجرا کنید.

> ℹ️ **توجه**  
>
> ویندوز ممکن است یکی از این هشدارهای امنیتی را نمایش دهد (معمول برای برنامه‌های بدون امضای مایکروسافت یا ناشران بزرگ):
>
> - **کنترل حساب کاربری (UAC)**: "آیا می‌خواهید به این برنامه از یک ناشر ناشناخته اجازه دهید تا تغییراتی در دستگاه خود ایجاد کنید؟" → روی **بله** کلیک کنید.
> - **Microsoft Defender SmartScreen**: "ویندوز از کامپیوتر شما محافظت کرد" → روی **اطلاعات بیشتر** کلیک کنید → **با این حال اجرا کنید**.
>
> این اتفاق به این دلیل رخ می‌دهد که برنامه توسط مایکروسافت یا یک ناشر بزرگ امضا نشده است — در صورتی که از بخش انتشارات رسمی GitHub ما دانلود شده باشد، ایمن است
>  (جمع‌آوری SHA256 زیر را بررسی کنید).

### لینوکس (الکترون)

- فایل `.AppImage` متناسب (`x64` یا `arm64`) را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
- اجرا کنید: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` روی x86_64/amd64، یا از نام فایل `...-arm64.AppImage` روی ARM64 استفاده کنید.
- **کتابخانه‌های زمان اجرا در دبیان/اوبونتو** (الکترون/کرومیوم؛ مشابه [شروع سریع → لینوکس](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — از **`libnotify4`** استفاده کنید، نه `libnotify-dev`. در سیستم‌های حداقلی، هر کتابخانه `.so` گزارش شده در ترمینال را نصب کنید؛ افزونه‌هایی مانند `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` اغلب مورد نیاز هستند. AppImage ممکن است به `libfuse2` (اوبونتو 22.04+) یا `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage` نیاز داشته باشد.
- **پیام‌های GPU:** کرومیوم ممکن است خطاهای مربوط به راه‌اندازی GPU یا EGL را در برخی سیستم‌ها (به‌ویژه ARM) گزارش دهد؛ با این حال برنامه می‌تواند به‌طور عادی اجرا شود. برای جلوگیری از این پیام‌ها، برنامه را با غیرفعال کردن شتاب سخت‌افزاری اجرا کنید: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (یا نام فایل `arm64` شما).

### داکر

- دریافت: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- حداقل یک کلید ارائه‌دهنده را از طریق محیط تنظیم کنید (مثلاً `OPENROUTER_API_KEY` برای OpenRouter). متغیرها را با `-e` یا `docker compose` / `.env` منتقل کنید تا اطلاعات محرمانه در تصویر ذخیره نشوند.
- کلیدهای ارائه‌دهنده در رابط کاربری تحت وب وارد **نمی‌شوند**؛ سرور آن‌ها را از محیط می‌خواند.

مثال - استفاده از حجم نام‌گذاری شده برای داده‌های پایدار (کلید OpenRouter از طریق محیط):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

یا اگر ترجیح می‌دهید از Docker Compose استفاده کنید، از این روش استفاده کنید:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

برای مشاهده تمام متغیرهای محیطی مانند `PORT`، `CONFIG_PATH`، `TZ` و کلیدهای LLM (`OPENROUTER_API_KEY`، `OPENAI_API_KEY` و غیره)، به [پیکربندی](#configuration-and-environment) مراجعه کنید.

### تنظیم منطقه زمانی

تاریخ و زمان رابط کاربری برنامه، از تنظیمات محلی و منطقه زمانی **مرورگر** پیروی می‌کند. برای رفتار **سروری** (لاگ‌گیری و موارد مشابه)، کانتینر از متغیر محیطی `TZ` استفاده می‌کند. مقدار پیش‌فرض `TZ=Europe/London` است.

برای استفاده از یک منطقه زمانی دیگر، `TZ` را در فایل Compose خود تنظیم کنید، به عنوان مثال:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

یا هنگام اجرای کانتینر (داکر) آن را منتقل کنید:

```bash
--env TZ=America/Sao_Paulo
```

در بسیاری از سیستم‌های میزبان لینوکس می‌توانید نام منطقه زمانی سیستم را با دستور زیر کپی کنید:

```bash
echo TZ=\"$(</etc/timezone)\"
```

فهرستی از نام‌های معتبر منطقه زمانی در [پایگاه داده tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (ویکی‌پدیا) نگهداری می‌شود.

## دریافت کلید API OpenRouter

Transrewrt از ارائه‌دهندگان متعدد هوش مصنوعی پشتیبانی می‌کند. [OpenRouter](https://openrouter.ai) یک انتخاب محبوب است زیرا بسیاری از مدل‌ها را تحت یک کلید یکپارچه می‌کند و مدل‌های رایگانی نیز ارائه می‌دهد.

1. در [openrouter.ai](https://openrouter.ai) ثبت‌نام کنید یا وارد شوید.
2. به صفحه [Keys](https://openrouter.ai/keys) بروید و یک کلید جدید ایجاد کنید (نام آن را تعیین کنید و به صورت اختیاری محدودیت اعتبار تنظیم کنید). می‌توانید بدون افزودن اعتبار از مدل‌های رایگان استفاده کنید.
3. **دسکتاپ (الکترون):** کلیدها را در **تنظیمات → API** بچسبانید. **داکر:** متغیرهای محیطی مانند `OPENROUTER_API_KEY` را تنظیم کنید (به [شروع سریع](#quick-start) مراجعه کنید).

از مدل **Body Builder** OpenRouter (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) برای ترجمه، بازنویسی یا تبدیل استفاده نکنید: این مدل بارهای JSON درخواست را برمی‌گرداند، نه متن کامل شده برای این وظایف. به [تنظیمات → مدل‌ها](USER-GUIDE.fa.md#models) در راهنمای کاربر مراجعه کنید.

همچنین می‌توانید از ارائه‌دهندگان دیگر (OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، Cerebras) استفاده کنید یا مدل‌ها را به صورت محلی با [Ollama](https://ollama.com) اجرا کنید. برای مشاهده فهرست کامل ارائه‌دهندگان پشتیبانی شده و متغیرهای محیطی، به [پیکربندی](#configuration-and-environment) مراجعه کنید.

> ⚠️ **اخطار**  
>
> اگر از Ollama در دستگاه، کانتینر یا سرویس دیگری استفاده می‌کنید، مطمئن شوید که Ollama را برای پذیرش ارتباطات خارجی (نه فقط localhost) پیکربندی کرده‌اید.

برای محدودیت‌ها، BYOK و موارد بیشتر، به [احراز هویت OpenRouter](https://openrouter.ai/docs/api/reference/authentication) مراجعه کنید.

## پیکربندی و محیط

**مکان‌های فایل پیکربندی**

| استقرار | مکان پیکربندی |
| ------------------ | ------------------------------------------------- |
| Electron (ویندوز) | `%APPDATA%\transrewrt\` |
| Electron (لینوکس) | `~/.config/transrewrt/` |
| وب / داکر | `/app/data/config.json` (برای حفظ داده‌ها از volume استفاده کنید) |

**متغیرهای محیطی** (فقط وب/داکر؛ Electron از فایل پیکربندی محلی استفاده می‌کند)

| متغیر             | پیش‌فرض                 | توضیحات                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | پورت شنود سرور                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | مسیر فایل پیکربندی                                                                                                     |
| `TZ`                 | `Europe/London`         | منطقه زمانی IANA برای زمان سمت سرور (ثبت رویدادها و غیره); رابط کاربری همچنان دنبال مرورگر است. به [داکر → منطقه زمانی](#docker-timezone) مراجعه کنید |
| `OPENROUTER_API_KEY` | *(خالی)*               | کلید API OpenRouter                                                                                                          |
| `OPENAI_API_KEY`     | *(خالی)*               | کلید API OpenAI                                                                                                              |
| `CEREBRAS_API_KEY`   | *(خالی)*               | کلید API Cerebras                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(خالی)*               | کلید API Anthropic                                                                                                           |
| `GOOGLE_API_KEY`     | *(خالی)*               | کلید API Google Gemini                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(خالی)*               | کلید API DeepSeek                                                                                                            |
| `GROQ_API_KEY`       | *(خالی)*               | کلید API Groq                                                                                                                |
| `MISTRAL_API_KEY`    | *(خالی)*               | کلید API Mistral                                                                                                             |
| `OLLAMA_URL`         | *(خالی)*               | نشانی پایه Ollama (مثلاً `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(خالی)*               | کلید API xAI                                                                                                                 |

فقط ارائه‌دهندگانی را پیکربندی کنید که از آنها استفاده می‌کنید. شناسه‌های مدل دارای فضای نام هستند (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` و غیره).

**نمایش هزینه:** OpenRouter در صورت امکان هزینه دقیق صورتحساب شده را برمی‌گرداند. سایر ارائه‌دهندگان از **هزینه تخمینی** بر اساس قیمت عمومی مدل‌های OpenRouter استفاده می‌کنند، در صورتی که کلید OpenRouter موجود باشد؛ بدون آن، هزینه‌های غیر از OpenRouter ممکن است به صورت `0` نمایش داده شوند. این تخمین‌ها فاکتور نیستند.

**داده‌ها و حفظ اطلاعات:** برای داکر، یک volume را در مسیر `/app/data` متصل کنید تا فایل `config.json` و پایگاه داده SQLite در طول راه‌اندازی مجدد کانتینر حفظ شوند. بدون volume، تمام داده‌ها هنگام توقف کانتینر از بین می‌روند.

**توسعه‌دهندگان:** پس از دریافت تغییراتی که پیکربندی قدیمی تک‌کلیدی را جایگزین می‌کنند، در صورتی که فایل محلی شما هنوز از فیلدهای حذف‌شده استفاده می‌کند (`api_key`, `api_url`, گزینه‌های پروکسی)، فایل `data/config.json` را با ساختار پیش‌فرض جدید از `src/config-defaults/config_default.json` بازنشانی یا ادغام کنید.

**احراز هویت وب:**

- مدیر پیش‌فرض: `admin` / `transrewrt26`.
- مدیریت کاربران در بخش **تنظیمات → کاربران**.
- بازنشانی رمز عبور: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (از منبع: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **هشدار**  
>
> بلافاصله پس از دسترسی به هر میزبان قابل دسترسی از طریق شبکه، رمز عبور پیش‌فرض مدیر را تغییر دهید.

تنظیمات کلیدی (فونت، مدل‌ها، زبان‌ها و غیره) در بخش تنظیمات برنامه در دسترس هستند.

## توسعه و معماری

- **توسعه:** راه‌اندازی، ساخت، تست و استقرار (Electron، وب، داکر) - به **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** مراجعه کنید.
- **معماری و مرور سیستم:** ساختار پوشه‌ها، فناوری‌های مورد استفاده، تصمیمات طراحی - به **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** مراجعه کنید.

## گزارش مشکلات

یک مسئله در [GitHub](https://github.com/wsj-br/transrewrt/issues) باز کنید. پلتفرم خود (ویندوز / لینوکس / داکر) و نسخهٔ برنامه (که در کادر درباره یا در صفحهٔ انتشارات نشان داده شده است) را اضافه کنید.

## انصراف از مسئولیت

نام محصولات و آیکون‌ها متعلق به صاحبان خود بوده و فقط برای اهداف شناسایی استفاده شده‌اند. این نرم‌افزار با برندهای ذکر شده هیچ گونه وابستگی یا تأیید رسمی ندارد.

## مجوز

حق تکثیر © 2026 والدمر اسکودلر جونیور.

[Apache License 2.0](../LICENSE)
