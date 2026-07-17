---
title: التكوين
description: مواقع ملفات التكوين، ومتغيرات بيئة Docker، ووضع الخصوصية، ومصادقة الويب.
---



## مواقع ملفات التكوين

| النشر | موقع التكوين |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| الويب / Docker | `/app/data/config.json` (استخدم وحدة تخزين للاستمرار) |

## متغيرات البيئة (الويب / Docker)

يستخدم Electron ملف التكوين المحلي. لخادم الويب/Docker فقط:

| المتغير | الوصف |
| --- | --- |
| `PORT` | منفذ استماع الخادم (الافتراضي `5000`) |
| `CONFIG_PATH` | المسار إلى ملف التكوين (الافتراضي `/app/data/config.json`) |
| `TZ` | المنطقة الزمنية للوقت من جانب الخادم (الافتراضي `Europe/London`) |
| `HISTORY_DISABLED` | فرض إيقاف سجل التنفيذ (`true` / `1`) |
| `OPENROUTER_API_KEY` | مفتاح OpenRouter API |
| `OPENAI_API_KEY` | مفتاح OpenAI API |
| `CEREBRAS_API_KEY` | مفتاح Cerebras API |
| `ANTHROPIC_API_KEY` | مفتاح Anthropic API |
| `GOOGLE_API_KEY` | مفتاح Google Gemini API |
| `DEEPSEEK_API_KEY` | مفتاح DeepSeek API |
| `GROQ_API_KEY` | مفتاح Groq API |
| `MISTRAL_API_KEY` | مفتاح Mistral API |
| `LOCAL_LLM_URL` | عنوان URL الأساسي لواجهة برمجة التطبيقات المتوافق تمامًا مع OpenAI لخادم محلي (يتضمن المسار، على سبيل المثال Ollama `http://host.docker.internal:11434/v1`، LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | مفتاح واجهة برمجة تطبيقات xAI |
| `NVIDIA_API_KEY` | مفتاح واجهة برمجة تطبيقات NVIDIA |
| `ALIBABA_API_KEY` | مفتاح واجهة برمجة تطبيقات Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | مفتاح واجهة برمجة تطبيقات apikey.fun |
| `CUSTOM_PROVIDER_NAME` | اسم العرض لموفّر مخصص متوافق مع OpenAI |
| `CUSTOM_PROVIDER_URL` | عنوان URL الأساسي لموفّر مخصص متوافق مع OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | مفتاح واجهة برمجة التطبيقات للموفّر المخصص |

جميع المتغيرات الثلاثة `CUSTOM_PROVIDER_*` مطلوبة عند استخدام نقطة نهاية مخصصة. تظهر النماذج في وضع **متقدم** على أنها `{providerName}/…`.

## وضع الخصوصية

اضبط `HISTORY_DISABLED` إلى `true` أو `1` على عملية الخادم الويب / Docker وعملية Electron الرئيسية لإلغاء التاريخ بشكل مستمر بغض النظر عن `config.json` أو تفضيلات المستخدم. هذا يتعطّل تخزين تاريخ الإدخال / الإخراج ، ويقفل **الإعدادات → إعدادات عامة → التاريخ** ، ويتعطّل واجهات برمجة التطبيقات المتعلقة بالتاريخ.

## استمرارية البيانات (Docker)

ثبت حجمًا في `/app/data` بحيث يبقى `config.json` وقاعدة بيانات SQLite حية بعد إعادة تشغيل الحاوية. بدون حجم ، تُفقد البيانات عند توقف الحاوية.

## المصادقة على الويب

- الإدارة الافتراضية: `admin` / `transrewrt26`
- إدارة المستخدمين في **الإعدادات → المستخدمين**
- إعادة تعيين كلمة المرور:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
غير كلمة المرور الافتراضية للإدارة على الفور على أي مضيف يمكن الوصول إليه عبر الشبكة.
:::

## عرض التكلفة

يعيد OpenRouter التكلفة الفعلية المحسوبة عند توافرها. يستخدم الموفرون الآخرون **التكلفة المقدرة** من تسعير نموذج OpenRouter العام عند توافر مفتاح OpenRouter. لا تعتبر التقديرات فواتير.

لواجهة مستخدم الإعدادات (الخطوط، النماذج، السجل، النسخ الاحتياطية)، راجع [الإعدادات](/docs/settings/).
