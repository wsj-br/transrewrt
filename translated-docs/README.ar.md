<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

أداة نصية مدعومة بالذكاء الاصطناعي: **ترجمة**، و**إعادة كتابة**، و**تحويل** باستخدام مطالبات مخصصة — باستخدام موفري الذكاء الاصطناعي الخاصين بك (OpenRouter، وOpenAI، وAnthropic، وGoogle Gemini، وDeepSeek، وGroq، وMistral، وxAI، وCerebras، وNVIDIA، وAlibaba Cloud، وapikey.fun، ونقاط نهاية متوافقة مع OpenAI، وخوادم محلية متوافقة مع OpenAI مثل Ollama، وLM Studio، أو llama.cpp). تطبيق سطح مكتب (Windows / Linux) أو تطبيق ويب مستضاف ذاتيًا (Docker). لا يوجد حساب سحابي لـ Transrewrt.

| | |
| --- | --- |
| **ترجمة** | عشرات اللغات، الكشف التلقائي، المسارد، التحسين باستخدام إعادة الصياغة |
| **إعادة كتابة** | الوضوح، النبرة، الطول، الإملاء والقواعد — نفس اللغة |
| **تحويل** | مطالبات الذكاء الاصطناعي المخصصة التي تنشئها وتعدلها وتعيد استخدامها |
| **نشر** | سطح مكتب Electron أو ويب Docker (amd64 و arm64) |
| **المفاتيح** | مزودوك، مضيفك — إعدادات مسبقة سهلة أو قائمة نماذج متقدمة |

![ترجمة](../images/screenshots/ar/translate.png)

<small>**اقرأ باللغات الأخرى:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## بدء سريع

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

افتح [http://localhost:5000](http://localhost:5000) وقم بتغيير كلمة مرور المسؤول الافتراضية. يتم تعيين مفاتيح المزود عبر متغيرات البيئة (وليس واجهة الويب).

**Windows** — قم بتنزيل `Transrewrt Setup x.y.z.exe` من [الإصدارات](https://github.com/wsj-br/transrewrt/releases)، ثم قم بالتثبيت، ثم أضف المفاتيح في **الإعدادات ← API**.

**Linux** — قم بتنزيل `.AppImage` من [الإصدارات](https://github.com/wsj-br/transrewrt/releases)، ثم:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

تفاصيل المنصة (Compose، SmartScreen، مكتبات apt، علامات GPU، المنطقة الزمنية): [وثائق البدء السريع](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## الوثائق

وثائق المنتج الكاملة (التثبيت، مفاتيح API، الأدلة، الإعدادات، استكشاف الأخطاء وإصلاحها):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [مفتاح API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [التكوين](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [ترجمة](https://wsj-br.github.io/transrewrt/docs/translate/) · [إعادة كتابة](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [تحويل](https://wsj-br.github.io/transrewrt/docs/transform/)
- [المشكلات الشائعة](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## التطوير

- الإعداد، البناء، الاختبار، النشر: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- نظرة عامة على البنية: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## الدعم

افتح مشكلة على [GitHub](https://github.com/wsj-br/transrewrt/issues). قم بتضمين نظامك الأساسي (Windows / Linux / Docker) وإصدار التطبيق (مربع حوار حول أو صفحة الإصدارات).

## الترخيص

حقوق النشر © 2026 والديمار سكوديلر جونيور.

[Apache License 2.0](../LICENSE)

أسماء المنتجات وأيقوناتها مملوكة لأصحابها وتُستخدم لأغراض التعريف فقط. هذا البرنامج ليس تابعًا لتلك العلامات التجارية أو معتمدًا منها.

<small>

> **ملاحظة حول ترجمات واجهة المستخدم والوثائق:** تم ترجمة جميع لغات الواجهة والوثائق باستثناء اللغة الإنجليزية الأصلية باستخدام نماذج الذكاء الاصطناعي باستخدام [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/)؛
> قد تكون الصياغة غير دقيقة أو تحتوي على أخطاء.

</small>
