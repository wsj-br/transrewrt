<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.3-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

ابزار متنی مبتنی بر هوش مصنوعی برای **ترجمه**، **بازنویسی**، و **تبدیل** با پرامپت‌های سفارشی. از ارائه‌دهندگان هوش مصنوعی خود (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, نقاط پایانی سازگار با OpenAI، و سرورهای محلی مانند Ollama, LM Studio, یا llama.cpp) استفاده کنید. به عنوان یک برنامه دسکتاپ (ویندوز / لینوکس) یا یک برنامه وب خودمیزبان (Docker) اجرا کنید. بدون حساب ابری Transrewrt.

## ویژگی‌ها

| قابلیت | توضیحات |
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

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

`PROVIDER_API_KEY` را با متغیر ارائه‌دهنده خود جایگزین کنید (برای مثال `OPENROUTER_API_KEY`، `OPENAI_API_KEY`، `GROQ_API_KEY`). [http://localhost:5000](http://localhost:5000) را باز کرده و رمز عبور پیش‌فرض مدیر را تغییر دهید. کلیدها از طریق متغیرهای محیطی تنظیم می‌شوند (نه رابط کاربری وب).

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

## تقدیر و تشکر

پیشنهادات پیش‌تنظیم حالت آسان در ویرایشگر پیش‌تنظیم از داده‌های ارزیابی عمومی زیر استفاده می‌کنند:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (برای داده‌های API نیاز به انتساب است)

مجوزهای وابستگی شخص ثالث و این اطلاعیه‌های منبع داده در [NOTICES](../NOTICES) فهرست شده‌اند.

## مجوز

حق تألیف © 2026 والدمر اسکودلر جونیور.

[Apache License 2.0](../LICENSE)

نام‌ها و آیکون‌های محصول متعلق به صاحبان آن‌ها هستند و فقط برای شناسایی استفاده می‌شوند. این نرم‌افزار وابسته به این برندها نیست و توسط آن‌ها تأیید نشده است.

<small>

> **نکته در مورد ترجمه‌های رابط کاربری و مستندات:** تمام زبان‌های رابط کاربری و مستندات به جز انگلیسی (بریتانیا) با هوش مصنوعی با استفاده از [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/) ترجمه شده‌اند؛ ممکن است کلمات دقیق نباشند یا حاوی خطا باشند.

</small>
