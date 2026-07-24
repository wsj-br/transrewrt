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

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

استبدل `PROVIDER_API_KEY` بالمتغير الخاص بموفرك (على سبيل المثال `OPENROUTER_API_KEY`، `OPENAI_API_KEY`، `ANTHROPIC_API_KEY`، `XIA_API_KEY`، ...) واضبط قيمته. راجع القائمة الكاملة في [التكوين](/docs/configuration/#environment-variables-web--docker).

ثم افتح [http://localhost:5000](http://localhost:5000) و**غيّر كلمة مرور المسؤول الافتراضية** قبل عرض الخدمة.

:::caution
في Docker، يتم تعيين بيانات اعتماد LLM باستخدام متغيرات البيئة (على سبيل المثال `PROVIDER_API_KEY`). إنها **ليست** مدخلة في واجهة الويب. على سطح المكتب، تقوم بتكوين المفاتيح في **الإعدادات → تكوين API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. قم بتنزيل أحدث `Transrewrt Setup x.y.z.exe` من [الإصدارات](https://github.com/wsj-br/transrewrt/releases).
2. قم بتشغيل المثبت.
3. افتح التطبيق وأدخل مفاتيح API في **الإعدادات ← تكوين API**. قم بتكوين مزود واحد على الأقل؛ OpenRouter هو خيار شائع للنماذج المجانية.

:::note
قد يعرض Windows تحذيرات UAC أو SmartScreen للتطبيقات المستقلة غير الموقعة. يفضل التنزيلات من صفحة إصدارات GitHub الرسمية والتحقق من المجموع الاختباري عند النشر.
:::

## Linux

قم بتنزيل `.AppImage` لوحدة المعالجة المركزية الخاصة بك من [الإصدارات](https://github.com/wsj-br/transrewrt/releases) (`x64` أو `arm64`، بما في ذلك Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

أدخل مفاتيح API في **الإعدادات ← تكوين API**.

إذا طبع Chromium أخطاء GPU / EGL ولكن التطبيق يعمل، يمكنك تعطيل تسريع الأجهزة:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
نظام التشغيل macOS غير مدعوم حاليًا. Transrewrt متاح لأنظمة Windows وLinux وDocker.
:::

## التحديث

- **Windows** — قم بتنزيل `Transrewrt Setup x.y.z.exe` الأحدث من [الإصدارات](https://github.com/wsj-br/transrewrt/releases) وقم بتشغيله. يتم الاحتفاظ بالإعدادات والبيانات.
- **Linux** — قم بتنزيل `.AppImage` الأحدث واستبدل الملف القديم. يتم الاحتفاظ بالإعدادات والبيانات.
- **Docker** — اسحب الصورة الجديدة وأعد إنشاء الحاوية. تستمر البيانات في وحدة تخزين `/app/data`:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## الخطوات التالية

1. [احصل على مفتاح API](/docs/api-key/)
2. قم بإجراء ترجمة بسيطة للتأكد من أن كل شيء يعمل
3. اقرأ أدلة [الترجمة](/docs/translate/)، و[إعادة الكتابة](/docs/rewrite/)، و[التحويل](/docs/transform/)
