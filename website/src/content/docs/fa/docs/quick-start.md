---
title: شروع سریع
description: Transrewrt را روی ویندوز یا لینوکس نصب کنید، یا برنامه وب Docker را اجرا کنید.
---



مسیری را انتخاب کنید که برای شما مناسب است. همه رایگان و متن‌باز هستند (Apache 2.0).

## Docker (برنامه وب)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

`PROVIDER_API_KEY` را با متغیر ارائه‌دهنده خود (برای مثال `OPENROUTER_API_KEY`، `OPENAI_API_KEY`، `ANTHROPIC_API_KEY`، `XIA_API_KEY`، ...) جایگزین کرده و مقدار آن را تنظیم کنید. لیست کامل را در [پیکربندی](/docs/configuration/#environment-variables-web--docker) ببینید.

سپس [http://localhost:5000](http://localhost:5000) را باز کنید و **رمز عبور پیش‌فرض مدیر را تغییر دهید** قبل از اینکه سرویس را در معرض دید قرار دهید.

:::tip
در داکر، اعتبارنامه‌های LLM با متغیرهای محیطی (برای مثال `PROVIDER_API_KEY`) تنظیم می‌شوند. آنها در رابط کاربری وب وارد **نمی‌شوند**. در دسکتاپ، کلیدها را در **تنظیمات ← پیکربندی API** پیکربندی می‌کنید.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## ویندوز

1. جدیدترین `Transrewrt Setup x.y.z.exe` را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید.
2. نصب‌کننده را اجرا کنید.
3. برنامه را باز کنید و کلیدهای API را در **تنظیمات ← پیکربندی API** وارد کنید. حداقل یک ارائه‌دهنده را پیکربندی کنید؛ OpenRouter یک انتخاب رایج برای مدل‌های رایگان است.

:::note
ویندوز ممکن است هنگام نصب برنامه، هشدارهای UAC یا SmartScreen را نمایش دهد. اگر آن را از صفحه رسمی GitHub Releases دانلود کنید، نصب آن ایمن است. برای نصب، روی «اطلاعات بیشتر» و «به هر حال اجرا کن» کلیک کنید.
:::

## لینوکس

`.AppImage` را برای CPU خود از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید (`x64` یا `arm64`، شامل Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

کلیدهای API را در **تنظیمات ← پیکربندی API** وارد کنید.

اگر Chromium خطاهای GPU / EGL را چاپ می‌کند اما برنامه کار می‌کند، می‌توانید شتاب‌دهنده سخت‌افزاری را غیرفعال کنید:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS در حال حاضر پشتیبانی نمی‌شود. Transrewrt برای ویندوز، لینوکس و Docker در دسترس است.
:::

## به‌روزرسانی

- **ویندوز** — `Transrewrt Setup x.y.z.exe` جدیدتر را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کرده و آن را اجرا کنید. تنظیمات و داده‌ها حفظ می‌شوند.
- **لینوکس** — `.AppImage` جدیدتر را دانلود کرده و فایل قدیمی را جایگزین کنید. تنظیمات و داده‌ها حفظ می‌شوند.
- **Docker** — ایمیج جدید را pull کرده و کانتینر را دوباره ایجاد کنید. داده‌ها در حجم `/app/data` باقی می‌مانند:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## مراحل بعدی

1. [یک کلید API دریافت کنید](/docs/api-key/)
2. یک ترجمه ساده را اجرا کنید تا مطمئن شوید همه چیز کار می‌کند
3. راهنماهای [ترجمه](/docs/translate/)، [بازنویسی](/docs/rewrite/) و [تبدیل](/docs/transform/) را بخوانید
