<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-پاورڈ ٹیکسٹ ٹول: زبانوں کے درمیان ترجمہ کریں، مختلف انداز میں دوبارہ لکھیں، اور کسٹم پرامپٹس کے ساتھ تبدیل کریں - متعدد AI پرووائیڈرز (OpenRouter، OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، Cerebras، NVIDIA، Alibaba Cloud، apikey.fun، کوئی بھی OpenAI-مطابق فراہم کنندہ، اور مقامی Ollama) کا استعمال کرتے ہوئے۔ ڈیسک ٹاپ ایپ (Electron) یا سیلف ہوسٹڈ ویب ایپ (Docker) کے طور پر چلتا ہے۔

- **ترجمہ کریں** - درجن بھر بولیاں دے وچکار، خودکار ماخذ دی شناخت دے نال
- **دوبارہ لکھو** - گرامر ٹھیک کرو، وضاحت بہتر کرو، رسمی/غیر رسمی، مختصر کرو، پھیلاؤ، تکنیکی
- **تبدیل کرو** - کسٹم AI پرامپٹ؛ پرامپٹ بناؤ اتے منظم کرو، ہر پرامپٹ لئی اختیاری ہدف زبان
- **لغت** - ہر زبان دے جوڑے لئی ماخذ/ہدف اصطلاح دے جوڑے سٹور کرو اتے ترجمہ دے دوران اوہناں نوں لاگو کرو تاکہ چُنیاں گئیاں اصطلاحاں مستقل رہن؛ سیٹنگاں وچ اصطلاحاں دا انتظام کرو (شامل کرو/ترمیم کریں/مٹاؤ، CSV/XLSX درآمد اتے ٹیمپلیٹ برآمد کرو)
- **تاریخچہ** - ان پٹ/آؤٹ پٹ متن، فلٹرنگ، اتے برآمد دے نال مکمل ایگزیکیوشن تاریخچہ
- **آسان اتے اعلیٰ** - آسان موڈ (ڈیفالٹ): پرووائیڈر دے مطابق تیار کردہ پری سیٹ (**مفت (اوپن راؤٹر)**، **معیاری**، **اعلیٰ**، **تکنیکی**؛ صرف منتخب پرووائیڈر لئی میپنگ والے پری سیٹ ظاہر ہوندے ہن) ماڈل ID چُنے بغیر؛ اعلیٰ موڈ: تہاڈے کنفیگرڈ پرووائیڈراں توں مکمل ماڈل لسٹ
- **ماڈل اتے لاگت** - لاگت اتے ورتوں دے ڈیش بورڈ (خلاصہ، ماڈل دے لحاظ نال، ساریاں کالز) برآمد دے نال؛ اوپن راؤٹر اصل خرچ دکھاندا اے، دوجے پرووائیڈر اندازے ورتدے ہن
- **UI** - بہو-لسانی انٹرفیس (30+ بولیاں، RTL سپورٹ)، فونٹس، ...
- **ویب موڈ** - ایڈمن رولاں دے نال بہو-یوزر سپورٹ
- **ڈیسک ٹاپ** - ونڈوز اتے لینکس لئی الیکٹران ایپ
- **سیلف-ہوسٹڈ** - amd64 اتے arm64 (راسپیری پائی-تیار) لئی ڈاکر امیج

اک واری انسٹال ہون توں بعد، ساریاں خصوصیات دے مکمل واک تھرو لئی [**یوزر گائیڈ**](USER-GUIDE.pa-PK.md) دیکھو۔

<small>**ہور بولیاں وچ پڑھو:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [Hindi (Roman)](./README.hi-Latn.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [پنجابی](./README.pa-PK.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **UI اتے دستاویزات دے ترجمے بارے نوٹ:** اصل انگریزی (برطانیہ) توں علاوہ ساریاں انٹرفیس بولیاں
> AI ماڈلاں دی ورتوں کردے ہوئے ترجمہ کیتیاں گئیاں سن؛ شبد بندی غیر واضح ہو سکدی اے یا غلطیاں ہو سکدیاں ہن۔

</small>

<br/>

<a id="table-of-contents"></a>
## مواد دی فہرست

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [سکرین شاٹس](#screenshots)
- [فوری شروع](#quick-start)
- [اک اوپن راؤٹر API کلید حاصل کرنا](#getting-an-openrouter-api-key)
- [کنفیگریشن اتے ماحول](#configuration-and-environment)
- [ترقی اتے فن تعمیر](#development-and-architecture)
- [مسائل دی رپورٹ کرنا](#reporting-issues)
- [اعلان](#disclaimer)
- [لائسنس](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## سکرین شاٹس

**زبان چُنن والا**

![Language selector](../images/screenshots/pa-PK/language-selector.png)

**ترجمہ کریں**

![Translate](../images/screenshots/pa-PK/translate.png)

**تبدیل کرو - پرامپٹ ایڈیٹر**

![Transform - prompt editor](../images/screenshots/pa-PK/transform-prompt-edit.png)

**ڈیش بورڈ**

![Dashboard summary - usage](../images/screenshots/pa-PK/dashboard-summary.png)

**تاریخچہ**

![History](../images/screenshots/pa-PK/history.png)

**سیٹنگاں - ماڈل سلیکشن**

![Settings - model selection](../images/screenshots/pa-PK/settings-general.png)

<br/><br/>

<a id="quick-start"></a>
## فوری آغاز

<details>
<summary><b>ڈاکر (خود میزبانی لئی تجویز کردہ)</b></summary>

<a id="docker"></a>

<br/>

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` نوں اپنی [اوپن راؤٹر API کی](https://openrouter.ai/keys) نال تبدیل کرو (یا ہور پرووائیڈر کیز سیٹ کرو؛ [کنفیگریشن](#configuration-and-environment) ویکھو)۔ [http://localhost:5000](http://localhost:5000) کھولو تے سروس نوں ظاہر کرن توں پہلاں ڈیفالٹ ایڈمن پاس ورڈ تبدیل کرو۔

ماحول دے ذریعے گھٹ توں گھٹ اک پرووائیڈر کی سیٹ کرو (مثال دے طور تے اوپن راؤٹر لئی `OPENROUTER_API_KEY`)۔ متغیرات نوں `-e` یا `docker compose` / `.env` نال پاس کرو تاکہ راز امیج وچ شامل نہ ہون۔ پرووائیڈر کیز ویب UI وچ داخل **نہیں** کیتیاں جاندیاں؛ سرور اوہناں نوں ماحول توں پڑھدا اے۔

<br/>

> ℹ️ **نوٹ**<br/>
> ڈاکر وچ، LLM کریڈینشلز ماحول دے متغیرات جداں کہ `OPENROUTER_API_KEY`، `OPENAI_API_KEY`، `CEREBRAS_API_KEY`، … (ویب UI وچ نہیں) نال سیٹ کیتے جاندے نیں۔ ڈیسک ٹاپ (الیکٹران) اُتے تُسی **سیٹنگاں → API** وچ کیز کنفیگر کردے او۔

<br/>

یا ڈاکر کمپوز استعمال کرو:

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

سارے ماحول دے متغیرات لئی [کنفیگریشن](#configuration-and-environment) ویکھو، جداں کہ `PORT`، `CONFIG_PATH`، `TZ`، تے LLM کیز (`OPENROUTER_API_KEY`، `OPENAI_API_KEY`، …)۔

</details>

<br/>

<details>
<summary><b>سرور ٹائم زون (ڈاکر)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

ایپلیکیشن یوزر انٹرفیس دی تاریخ تے ویلا **براؤزر** دے لوکیل تے ٹائم زون دی پیروی کردا اے۔ **سرور سائیڈ** رویہ (لاگنگ تے اِسے طرحاں دے) لئی، کنٹینر `TZ` ماحول دے متغیر نوں استعمال کردا اے۔ ڈیفالٹ `TZ=Europe/London` اے۔

کوئی ہور ٹائم زون استعمال کرن لئی، اپنے کمپوز فائل وچ `TZ` سیٹ کرو، مثال دے طور تے:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

یا کنٹینر چلاؤندے ویلے پاس کرو (ڈاکر):

```bash
--env TZ=America/Sao_Paulo
```

بہت سارے لینکس ہوسٹس اُتے تُسی سسٹم ٹائم زون دا نام اِنج کاپی کر سکدے او:

```bash
echo TZ=\"$(</etc/timezone)\"
```

درست ٹائم زون کے ناموں کی ایک فہرست [tz ڈیٹا بیس](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (ویکیپیڈیا) میں برقرار رکھی گئی ہے۔

</details>

<br/>

<details>
<summary><b>ونڈوز</b></summary>

<a id="windows-electron"></a>

<br/>

- [ریلیز](https://github.com/wsj-br/transrewrt/releases) سے تازہ ترین `Transrewrt Setup x.y.z.exe` ڈاؤن لوڈ کریں۔
- `.exe` چلائیں اور انسٹالر کی پیروی کریں۔
- پہلی بار چلائیں: سٹارٹ مینو یا ڈیسک ٹاپ شارٹ کٹ سے ایپ شروع کریں۔
- اپنی API کیز **سیٹنگز → API** میں درج کریں۔ آپ کو کم از کم ایک پرووائیڈر کنفیگر کرنے کی ضرورت ہے؛ مفت ماڈلز کے لیے اوپن راؤٹر عام ہے۔

<br/>

> ℹ️ **نوٹ**<br/>
> ونڈوز ان سیکیورٹی وارننگز میں سے ایک دکھا سکتا ہے (غیر دستخط شدہ/انڈی ایپس کے لیے عام):
> - **یوزر اکاؤنٹ کنٹرول (UAC)**: "کیا آپ اس ایپ کو کسی نامعلوم پبلشر سے اپنے آلے میں تبدیلیاں کرنے کی اجازت دینا چاہتے ہیں؟" → **ہاں** پر کلک کریں۔
> - **مائیکروسافٹ ڈیفنڈر سمارٹ سکرین**: "ونڈوز نے آپ کے پی سی کو محفوظ کیا" → **مزید معلومات** پر کلک کریں → **پھر بھی چلائیں**۔
>
> ایسا اس لیے ہوتا ہے کیونکہ ایپ مائیکروسافٹ یا کسی بڑے پبلشر کے ذریعے دستخط شدہ نہیں ہے-اگر اسے ہماری آفیشل گٹ ہب ریلیز سے ڈاؤن لوڈ کیا گیا ہے تو یہ محفوظ ہے (ہر اثاثے کے ساتھ [ریلیز](https://github.com/wsj-br/transrewrt/releases) صفحہ پر چیک سمز کی تصدیق کریں)۔

<br/>

</details>

<br/>

<details>
<summary><b>لینکس</b></summary>

<a id="linux-electron"></a>

<br/>

[ریلیز](https://github.com/wsj-br/transrewrt/releases) سے اپنے CPU کے لیے `.AppImage` ڈاؤن لوڈ کریں (عام PCs کے لیے `x64`، Raspberry Pi 4+ سمیت بہت سے ARM آلات کے لیے `arm64`)، پھر:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

x86_64/amd64 پر `x64` فائل کا نام استعمال کریں؛ ARM64 پر `...-arm64.AppImage` نام استعمال کریں۔

اپنی API کیز **سیٹنگز → API** میں درج کریں۔ آپ کو کم از کم ایک پرووائیڈر کنفیگر کرنے کی ضرورت ہے؛ مفت ماڈلز کے لیے اوپن راؤٹر عام ہے۔

**کنسول پیغامات:** پیکجڈ لینکس بلڈز (`x64` اور `arm64` AppImages) ٹرمینل میں نوڈ کی فرسودگی کی وارننگز کو دباتے ہیں (مثال کے طور پر بلٹ ان `punycode` ماڈیول)۔ اگر کرومیم GPU / EGL کی غلطیاں پرنٹ کرتا ہے جیسے کہ "GLES3 غیر تعاون یافتہ ہے" لیکن ایپ کام کرتی ہے، تو آپ ہارڈویئر ایکسلریشن کو غیر فعال کرکے انہیں خاموش کر سکتے ہیں:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

یہ amd64 پر بھی لاگو ہوتا ہے؛ فائل کا نام اپنی ڈاؤن لوڈ سے ملنے کے لیے تبدیل کریں۔

ڈیبیان/اوبنٹو پر، آپ کو کرومیم کے لیے درکار اضافی **رن ٹائم** لائبریریوں کی ضرورت پڑ سکتی ہے (یہ اکثر مکمل ڈیسک ٹاپ انسٹالیشنز پر پہلے سے موجود ہوتی ہیں)۔ اگر ضرورت ہو تو نیچے دیے گئے کمانڈز چلائیں:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

`arm64` کے لیے `libasound2t64` کو `libasound2` سے بدل دیں۔ کم سے کم یا کسٹم انسٹالیشنز اب بھی ایک گمشدہ `.so` فائل کے ساتھ ناکام ہو سکتی ہیں۔ غلطی کے پیغام میں نامزد پیکیج انسٹال کریں (عام اضافی: `libatk1.0-0`، `libatk-bridge2.0-0`، `libgbm1`، `libdrm2`). کچھ ماحول میں، آپ کو `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` کا استعمال کرتے ہوئے ایپ چلانے کی ضرورت پڑ سکتی ہے۔

<br/>

> ℹ️ **نوٹ**<br/>
> macOS فی الحال تعاون یافتہ نہیں ہے۔ Transrewrt ونڈوز، لینکس، اور ڈاکر کے لیے دستیاب ہے۔

</details>

<br/>

ایک بار جب ایپ چل رہی ہو، تو متن کا ترجمہ کرنے، دوبارہ لکھنے، اور تبدیل کرنے، پرامپٹس کا انتظام کرنے، اور ماڈلز کو کنفیگر کرنے کا طریقہ سیکھنے کے لیے [**یوزر گائیڈ**](USER-GUIDE.pa-PK.md) دیکھیں۔

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## اوپن راؤٹر ای پی آئی کا کلید حاصل کرنا

Transrewrt کئی ای آئی فراہم کرنے والوں کی حمایت کرتا ہے۔ [OpenRouter](https://openrouter.ai) ایک مقبول انتخاب ہے کیونکہ وہ ایک ہی کلید کے تحت کئی ماڈلز کو یکجا کرتا ہے اور مفت ماڈلز کی پیشکش کرتا ہے۔

1. رجسٹر ہو جائیں یا [openrouter.ai](https://openrouter.ai) پر لاگ ان کرو۔
2. [کلیدیں](https://openrouter.ai/keys) صفحہ کھولیں اور نئی کلید بناؤ (نام دیں، اور ممکنہ طور پر کریڈٹ لیمٹ سیٹ کریں۔ آپ کو کریڈٹ شامل کرنے کے بغیر مفت ماڈل استعمال کرنے کا موقع ہے۔
3. **ڈیسکٹاپ (الیکٹران):** کلیدیں **سیٹنگاں → API** میں پیسٹ کرو۔ **ڈوکر:** ماحول متغیرات جیسے `OPENROUTER_API_KEY` سیٹ کریں (دیکھیں [تیز شروعات](#quick-start)۔

ترجمہ، دوبارہ لکھنا، یا تبدیل کرنے کے لیے اوپن راؤٹر کے **بادی بلڈر** ماڈل ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) کا استعمال نہ کریں: یہ ان کاموں کے لیے مکمل شدہ متن کے بجائے جیسن درخواست پیٹ لوڈز واپس کرتا ہے۔ دیکھیں [سیٹنگز → ماڈلز](USER-GUIDE.pa-PK.md#models) یوزر گائیڈ میں۔

آپ دیگر پرووائیڈرز (OpenAI، Anthropic، Google Gemini، DeepSeek، Groq، Mistral، xAI، Cerebras، NVIDIA، Alibaba Cloud، apikey.fun، کوئی بھی OpenAI-مطابق فراہم کنندہ) بھی استعمال کر سکتے ہیں یا [Ollama](https://ollama.com) کے ساتھ ماڈلز کو مقامی طور پر چلا سکتے ہیں۔ تعاون یافتہ پرووائیڈرز اور انوائرنمنٹ ویری ایبلز کی مکمل فہرست کے لیے [کنفیگریشن](#configuration-and-environment) دیکھیں۔

</br>

> ⚠️ **وارننگ**<br/>
> اگر آپ دوسرے آلے، کنٹینر، یا سروس سے اولاما کا استعمال کر رہے ہیں، تو یاد رکھیں کہ اولاما کو بیرونی کنکشنز کی اجازت دینے کے لیے (لوکل ہوسٹ کے بجائے) کنفیگر کریں۔

<br/><br/>

<a id="configuration-and-environment"></a>
## کنفیگریشن اور ماحول

</br>

**کنفیگ فائل لوکیشن**

| ڈپلویمنٹ         | کنفیگ لوکیشن                                   |
| ------------------ | ------------------------------------------------- |
| الیکٹران (ونڈوز) | `%APPDATA%\transrewrt\`                           |
| الیکٹران (لینکس)   | `~/.config/transrewrt/`                           |
| ویب / ڈاکر       | `/app/data/config.json` (برقرار رہنے کے لیے ایک وولیوم کا استعمال کریں) |

<br/>

**ماحولیاتی ویریبلز** (ویب/ڈاکر کے لیے صرف؛ الیکٹران مقامی کنفیگ فائل کا استعمال کرتا ہے)

| ویری ایبل                  | تفصیل                                                                             |
|---------------------------|-----------------------------------------------------------------------------------------|
| `PORT`                    | سرور سننے والا پورٹ (ڈیفالٹ `5000`)                                             |
| `CONFIG_PATH`        | کنفیگ فائل کا پاتھ (ڈیفالٹ `/app/data/config.json` پر)                |
| `TZ`                 | سرور سائڈ ٹائم زون (لاگنگ وغیرہ) (ڈیفالٹ  `Europe/London` پر) |
| `HISTORY_DISABLED`   | ایگزیکوشن ہسٹری آف کو زبردستی کریں (اختیاری، ڈیفالٹ `false` پر)                  |
| `OPENROUTER_API_KEY` | اوپن راؤٹر ای پی آئی کلید                                                           |
| `OPENAI_API_KEY` | OpenAI API کی                                                                |
| `CEREBRAS_API_KEY` | Cerebras API کی                                                              |
| `ANTHROPIC_API_KEY` | Anthropic API کی                                                             |
| `GOOGLE_API_KEY` | گوگل جیمنی API کی                                                            |
| `DEEPSEEK_API_KEY` | DeepSeek API کی                                                              |
| `GROQ_API_KEY` | Groq API کی                                                                  |
| `MISTRAL_API_KEY` | Mistral API کی                                                               |
| `OLLAMA_URL` | Ollama بیس URL (مثلاً `http://host.docker.internal:11434`)                                             |
| `XAI_API_KEY` | xAI API کی                                                                   |
| `NVIDIA_API_KEY`          | NVIDIA API کلید                                                                          |
| `ALIBABA_API_KEY`         | Alibaba Cloud (DashScope) API کلید                                                       |
| `APIFUN_API_KEY`          | apikey.fun API کلید                                                                      |
| `CUSTOM_PROVIDER_NAME` | کسٹم OpenAI-مطابق فراہم کنندہ لئی ڈسپلے نام (تِناں کسٹم ویری ایبلز درکار نیں) |
| `CUSTOM_PROVIDER_URL`     | کسٹم OpenAI-مطابق فراہم کنندہ کے لیے بیس URL (مثلاً `https://my-llm.example.com/v1`) |
| `CUSTOM_PROVIDER_API_KEY` | کسٹم OpenAI-مطابق فراہم کنندہ لئی API کی                                     |

**کسٹم OpenAI-مطابق فراہم کنندہ (ویب/Docker):** کسی بھی OpenAI-مطابق اینڈ پوائنٹ کے لیے جو اوپر دی گئی بلٹ ان فہرست میں نہیں ہے (مثلاً سیلف ہوسٹڈ سرور یا گیٹ وے)، تمام تین `CUSTOM_PROVIDER_*` ویری ایبلز سیٹ کریں — مثال کے طور پر `CUSTOM_PROVIDER_NAME=MyProvider`، `CUSTOM_PROVIDER_URL=https://my-llm.example.com/v1`، اور مماثل API کلید۔ ماڈلز **اعلیٰ** موڈ میں سیٹنگز → ماڈلز کے تحت `MyProvider/…` جیسے ID کے ساتھ ظاہر ہوتے ہیں (پرووائیڈر کا نام بطور سابقہ)۔

**پرائیویسی موڈ:** ہسٹری دے ٹریک نوں `config.json` یا فی یوزر ترجیحات توں قطع نظر بند کرن لئی، **ویب/ڈاکر سرور پروسیس** تے/یا **الیکٹران ڈیسک ٹاپ مین پروسیس** (مثلاً سسٹم یا لانچر ماحول — صرف رینڈرر نہیں) لئی `HISTORY_DISABLED` نوں `true` یا `1` (کیس-غیر حساس) اُتے سیٹ کرو۔ ایہ ان پٹ/آؤٹ پٹ ہسٹری نوں محفوظ کرن نوں غیر فعال کردا اے، **سیٹنگاں → عام سیٹنگاں → ہسٹری** نوں لاک کردا اے، تے ہسٹری نال متعلقہ APIs نوں بلاک کردا اے۔

صرف اوہ پرووائیڈرز کنفیگر کرو جیہڑے تُسی ورتدے او۔ ماڈل آئی ڈیز نیم اسپیسڈ نیں (`openrouter/…`، `openai/…`، `cerebras/…`، `ollama/…`، `{providerName}/…` کسٹم اینڈ پوائنٹس لئی، وغیرہ)۔

**لاگت دا ڈسپلے:** اوپن راؤٹر لاگو ہون اُتے درست بل شدہ لاگت واپس کردا اے۔ دوجے پرووائیڈرز اوپن راؤٹر دی عوامی ماڈل قیمت توں **تخمینہ** لاگت ورتدے نیں جدوں اوپن راؤٹر کی دستیاب ہووے؛ ایہدے بغیر، غیر اوپن راؤٹر لاگت `0` دے طور اُتے ظاہر ہو سکدی اے۔ تخمینے انوائس نہیں ہوندے۔

<br/>

**ڈیٹا تے مستقل مزاجی:** ڈاکر لئی، `/app/data` اُتے اک والیوم ماؤنٹ کرو تاکہ `config.json` تے SQLite ڈیٹا بیس کنٹینر دے دوبارہ شروع ہون اُتے برقرار رہن۔ والیوم دے بغیر، کنٹینر دے بند ہون اُتے سارا ڈیٹا ضائع ہو جاندا اے۔

<br/>

**ویب تصدیق:**

- ڈیفالٹ ایڈمن: `admin` / `transrewrt26`۔
- **سیٹنگاں → ورتن والے** وچ ورتن والےآں دا انتظام کرو۔
- پاس ورڈ ری سیٹ کرو: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **خبردار**<br/>
> کسے وی نیٹ ورک توں قابل رسائی ہوسٹ اُتے ڈیفالٹ ایڈمن پاس ورڈ نوں فوراً تبدیل کرو۔

<br/>

کلیدی سیٹنگاں (فونٹ، ماڈل، بولیاں وغیرہ) ایپلیکیشن سیٹنگاں میں دستیاب ہیں۔

<br/><br/>

<a id="development-and-architecture"></a>
## ڈیولپمنٹ اور آرکیٹیکچر

- **ڈیولپمنٹ:** سیٹ اپ، بلڈ، جانچ، اور تعیناتی (الیکٹران، ویب، ڈوکر) - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) دیکھیں۔
- **آرکیٹیکچر اور سسٹم کا جائزہ:** فولڈر کا ڈھانچہ، ٹیک اسٹیک، ڈیزائن کے فیصلے - [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md) دیکھیں۔

<br/><br/>

<a id="reporting-issues"></a>
## مسائل کی اطلاع دینا

[GitHub](https://github.com/wsj-br/transrewrt/issues) پر ایک مسئلہ کھولیں۔ اپنا پلیٹ فارم (ونڈوز / لینکس / ڈوکر) اور ایپ ورژن (کے بارے میں ڈائیلاگ میں یا ریلیز پیج پر دکھایا گیا) شامل کریں۔

<br/><br/>

<a id="disclaimer"></a>
## دستبرداری

پروڈکٹ کے نام اور آئیکنز ان کے متعلقہ مالکان کی ملکیت ہیں اور صرف شناخت کے مقاصد کے لیے استعمال ہوتے ہیں۔ یہ سافٹ ویئر کسی بھی مذکورہ برانڈ سے وابستہ یا اس کی توثیق شدہ نہیں ہے۔

<br/><br/>

<a id="license"></a>
## لائسنس

کاپی رائٹ © 2026 والڈیمار سکوڈیلا جونیئر۔

[Apache License 2.0](../LICENSE)
