---
title: پیکربندی
description: مکان‌های فایل پیکربندی، متغیرهای محیطی داکر، حالت حریم خصوصی و احراز هویت وب.
---



## مکان‌های فایل پیکربندی

| استقرار | مکان پیکربندی |
| --- | --- |
| Electron (ویندوز) | `%APPDATA%\transrewrt\` |
| Electron (لینوکس) | `~/.config/transrewrt/` |
| وب / داکر | `/app/data/config.json` (برای پایداری از یک volume استفاده کنید) |

## متغیرهای محیطی (وب / داکر)

Electron از فایل پیکربندی محلی استفاده می‌کند. فقط برای سرور وب/داکر:

| متغیر | توضیحات |
| --- | --- |
| `PORT` | پورت گوش دادن سرور (پیش‌فرض `5000`) |
| `CONFIG_PATH` | مسیر فایل پیکربندی (پیش‌فرض `/app/data/config.json`) |
| `TZ` | منطقه زمانی برای زمان سمت سرور (پیش‌فرض `Europe/London`) |
| `HISTORY_DISABLED` | اجبار به خاموش کردن تاریخچه اجرا (`true` / `1`) |
| `OPENROUTER_API_KEY` | کلید API OpenRouter |
| `OPENAI_API_KEY` | کلید API OpenAI |
| `CEREBRAS_API_KEY` | کلید API Cerebras |
| `ANTHROPIC_API_KEY` | کلید API Anthropic |
| `GOOGLE_API_KEY` | کلید API Google Gemini |
| `DEEPSEEK_API_KEY` | کلید API DeepSeek |
| `GROQ_API_KEY` | کلید API Groq |
| `MISTRAL_API_KEY` | کلید API Mistral |
| `LOCAL_LLM_URL` | URL پایه API سازگار با OpenAI کامل برای یک سرور محلی (مسیر را نیز شامل شود، مثلاً Ollama `http://host.docker.internal:11434/v1`، LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | کلید API xAI |
| `NVIDIA_API_KEY` | کلید API NVIDIA |
| `ALIBABA_API_KEY` | کلید API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | کلید API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | نام نمایشی برای یک ارائه‌دهنده سفارشی سازگار با OpenAI |
| `CUSTOM_PROVIDER_URL` | نشانی وب پایه برای یک ارائه‌دهنده سفارشی سازگار با OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | کلید API برای ارائه‌دهنده سفارشی |

هر سه متغیر `CUSTOM_PROVIDER_*` هنگام استفاده از یک نقطه پایانی سفارشی مورد نیاز هستند. مدل‌ها در حالت **پیشرفته** به صورت `{providerName}/…` ظاهر می‌شوند.

## حالت حریم خصوصی

`HISTORY_DISABLED` را روی `true` یا `1` در فرآیند سرور وب/داکر و/یا فرآیند اصلی Electron تنظیم کنید تا تاریخچه را صرف نظر از `config.json` یا ترجیحات هر کاربر، اجباری غیرفعال کنید. این کار ذخیره تاریخچه ورودی/خروجی را غیرفعال می‌کند، **تنظیمات ← تنظیمات عمومی ← تاریخچه** را قفل می‌کند و APIهای مربوط به تاریخچه را مسدود می‌کند.

## پایداری داده (داکر)

یک حجم را در `/app/data` سوار کنید تا `config.json` و پایگاه داده SQLite پس از راه‌اندازی مجدد کانتینر باقی بمانند. بدون حجم، داده‌ها هنگام توقف کانتینر از بین می‌روند.

## احراز هویت وب

- مدیر پیش‌فرض: `admin` / `transrewrt26`
- مدیریت کاربران در **تنظیمات ← کاربران**
- بازنشانی رمز عبور:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
رمز عبور پیش‌فرض مدیر را بلافاصله در هر هاست قابل دسترسی از طریق شبکه تغییر دهید.
:::

## نمایش هزینه

OpenRouter در صورت لزوم هزینه دقیق صورت‌حساب را برمی‌گرداند. سایر ارائه‌دهندگان از هزینه **تخمینی** از قیمت‌گذاری عمومی مدل OpenRouter استفاده می‌کنند، در صورتی که کلید OpenRouter در دسترس باشد. تخمین‌ها صورت‌حساب نیستند.

برای رابط کاربری تنظیمات (فونت‌ها، مدل‌ها، تاریخچه، پشتیبان‌گیری)، به [تنظیمات](/docs/settings/) مراجعه کنید.
