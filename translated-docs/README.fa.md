<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

ابزار متنی مبتنی بر هوش مصنوعی: **ترجمه**، **بازنویسی**، و **تبدیل** با پرامپت‌های سفارشی — با استفاده از ارائه‌دهندگان هوش مصنوعی خودتان (OpenRouter، OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، Cerebras، NVIDIA، Alibaba Cloud، apikey.fun، نقاط پایانی سازگار با OpenAI، و سرورهای محلی سازگار با OpenAI مانند Ollama، LM Studio، یا llama.cpp). برنامه دسکتاپ (ویندوز / لینوکس) یا برنامه وب خودمیزبان (Docker). بدون حساب ابری Transrewrt.

| | |
| --- | --- |
| **ترجمه** | ده‌ها زبان، تشخیص خودکار، واژه‌نامه‌ها، بهبود با بازنویسی |
| **بازنویسی** | وضوح، لحن، طول، املا و گرامر — همان زبان |
| **تبدیل** | اعلان‌های هوش مصنوعی سفارشی که شما ایجاد، ویرایش و استفاده مجدد می‌کنید |
| **استقرار** | دسکتاپ Electron یا وب Docker (amd64 و arm64) |
| **کلیدها** | ارائه‌دهندگان شما، میزبان شما — پیش‌تنظیمات آسان یا لیست مدل پیشرفته |

![ترجمه](../images/screenshots/fa/translate.png)

<small>**خواندن به زبان‌های دیگر:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## شروع سریع

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

[http://localhost:5000](http://localhost:5000) را باز کنید و رمز عبور پیش‌فرض مدیر را تغییر دهید. کلیدهای ارائه‌دهنده از طریق متغیرهای محیطی (نه رابط کاربری وب) تنظیم می‌شوند.

**ویندوز** — `Transrewrt Setup x.y.z.exe` را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید، نصب کنید، سپس کلیدها را در **تنظیمات ← API** اضافه کنید.

**لینوکس** — `.AppImage` را از [انتشارات](https://github.com/wsj-br/transrewrt/releases) دانلود کنید، سپس:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

جزئیات پلتفرم (Compose، SmartScreen، apt libs، پرچم‌های GPU، منطقه زمانی): [مستندات شروع سریع](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## مستندات

مستندات کامل محصول (نصب، کلیدهای API، راهنماها، تنظیمات، عیب‌یابی):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [کلید API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [پیکربندی](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [ترجمه](https://wsj-br.github.io/transrewrt/docs/translate/) · [بازنویسی](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [تبدیل](https://wsj-br.github.io/transrewrt/docs/transform/)
- [مشکلات رایج](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## توسعه

- راه‌اندازی، ساخت، آزمایش، استقرار: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- نمای کلی معماری: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## پشتیبانی

یک مشکل را در [GitHub](https://github.com/wsj-br/transrewrt/issues) باز کنید. پلتفرم خود (ویندوز / لینوکس / Docker) و نسخه برنامه (گفتگوی درباره یا صفحه انتشارات) را ذکر کنید.

## مجوز

حق تألیف © 2026 والدمر اسکودلر جونیور.

[Apache License 2.0](../LICENSE)

نام‌ها و آیکون‌های محصولات متعلق به صاحبان مربوطه هستند و فقط برای شناسایی استفاده می‌شوند. این نرم‌افزار به این برندها وابسته نیست و توسط آن‌ها تأیید نشده است.

<small>

> **نکته‌ای درباره ترجمه‌های رابط کاربری و مستندات:** همه زبان‌های رابط کاربری و مستندات، به جز انگلیسی اصلی، با استفاده از مدل‌های هوش مصنوعی و با [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/) ترجمه شده‌اند؛
> ممکن است کلمات دقیق نباشند یا حاوی خطا باشند.

</small>
