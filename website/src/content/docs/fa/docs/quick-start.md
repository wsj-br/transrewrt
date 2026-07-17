---
title: شروع سریع
description: >-
  Transrewrt را روی ویندوز یا لینوکس نصب کنید، یا برنامه وب Docker خودمیزبان را
  اجرا کنید.
translation_last_updated: '2026-07-17T14:58:58.859Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: fa
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



مسیری را انتخاب کنید که برای شما مناسب است. همه رایگان و متن‌باز هستند (Apache 2.0).

## Docker (وب خودمیزبان)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`PROVIDER_API_KEY=sk-or-your-key` را با کلید API خود از ارائه‌دهنده انتخابی خود جایگزین کنید (گزینه‌های پشتیبانی شده را در [پیکربندی](/docs/configuration/) ببینید).

سپس [http://localhost:5000](http://localhost:5000) را باز کنید و **رمز عبور پیش‌فرض مدیر را تغییر دهید** قبل از اینکه سرویس را در معرض دید قرار دهید.

:::caution
در Docker، اعتبارنامه‌های LLM با متغیرهای محیطی تنظیم می‌شوند (برای مثال `PROVIDER_API_KEY`). آنها در رابط کاربری وب وارد **نمی‌شوند**. در دسکتاپ، کلیدها را در **تنظیمات ← API** پیکربندی می‌کنید.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## ویندوز

1. آخرین `Transrewrt Setup x.y.z.exe` را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
2. نصب‌کننده را اجرا کنید.
3. برنامه را باز کنید و کلیدهای API را در **تنظیمات ← API** وارد کنید. حداقل یک ارائه‌دهنده را پیکربندی کنید؛ OpenRouter یک انتخاب رایج برای مدل‌های رایگان است.

:::note
ویندوز ممکن است هشدارهای UAC یا SmartScreen را برای برنامه‌های مستقل بدون امضا نشان دهد. دانلودها را از صفحه رسمی GitHub Releases ترجیح دهید و در صورت انتشار، چک‌سام‌ها را تأیید کنید.
:::

## لینوکس

`.AppImage` را برای CPU خود از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید (`x64` یا `arm64`، شامل Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

کلیدهای API را در **تنظیمات ← API** وارد کنید.

اگر Chromium خطاهای GPU / EGL را چاپ می‌کند اما برنامه کار می‌کند، می‌توانید شتاب سخت‌افزاری را غیرفعال کنید:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS در حال حاضر پشتیبانی نمی‌شود. Transrewrt برای ویندوز، لینوکس و Docker در دسترس است.
:::

## مراحل بعدی

1. [یک کلید API دریافت کنید](/docs/api-key/)
2. یک ترجمه ساده را اجرا کنید تا مطمئن شوید همه چیز کار می‌کند
3. راهنماهای [ترجمه](/docs/translate/)، [بازنویسی](/docs/rewrite/) و [تبدیل](/docs/transform/) را بخوانید
