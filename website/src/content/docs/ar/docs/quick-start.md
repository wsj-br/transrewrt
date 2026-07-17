---
title: بدء سريع
description: >-
  ثبّت Transrewrt على Windows أو Linux، أو شغّل تطبيق الويب Docker المستضاف
  ذاتيًا.
---



اختر المسار الذي يناسبك. جميعها مجانية ومفتوحة المصدر (Apache 2.0).

## Docker (ويب مستضاف ذاتيًا)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

استبدل `PROVIDER_API_KEY=sk-or-your-key` بمفتاح API الخاص بك من المزود الذي اخترته (راجع الخيارات المدعومة في [التكوين](/docs/configuration/)).

ثم افتح [http://localhost:5000](http://localhost:5000) و**غيّر كلمة مرور المسؤول الافتراضية** قبل عرض الخدمة.

:::caution
في Docker، يتم تعيين بيانات اعتماد LLM باستخدام متغيرات البيئة (على سبيل المثال `PROVIDER_API_KEY`). لا يتم **إدخالها** في واجهة المستخدم على الويب. على سطح المكتب، يمكنك تكوين المفاتيح في **الإعدادات → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. نزّل أحدث `Transrewrt Setup x.y.z.exe` من [الإصدارات](https://github.com/wsj-br/transrewrt/releases).
2. شغّل المثبت.
3. افتح التطبيق وأدخل مفاتيح API في **الإعدادات ← API**. قم بتكوين موفر واحد على الأقل؛ OpenRouter هو خيار شائع للنماذج المجانية.

:::note
قد يعرض Windows تحذيرات UAC أو SmartScreen للتطبيقات المستقلة غير الموقعة. يُفضل التنزيلات من صفحة إصدارات GitHub الرسمية والتحقق من المجموع الاختباري عند النشر.
:::

## Linux

نزّل `.AppImage` لوحدة المعالجة المركزية الخاصة بك من [الإصدارات](https://github.com/wsj-br/transrewrt/releases) (`x64` أو `arm64`، بما في ذلك Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

أدخل مفاتيح API في **الإعدادات ← API**.

إذا طبع Chromium أخطاء GPU / EGL ولكن التطبيق يعمل، يمكنك تعطيل تسريع الأجهزة:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
نظام macOS غير مدعوم حاليًا. Transrewrt متاح لأنظمة Windows وLinux وDocker.
:::

## الخطوات التالية

1. [الحصول على مفتاح API](/docs/api-key/)
2. قم بتشغيل ترجمة بسيطة للتأكد من أن كل شيء يعمل
3. اقرأ أدلة [الترجمة](/docs/translate/)، و[إعادة الكتابة](/docs/rewrite/)، و[التحويل](/docs/transform/)
