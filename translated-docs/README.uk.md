---
translation_last_updated: '2026-03-31T23:48:09.667Z'
source_file_mtime: '2026-03-31T23:34:44.122Z'
source_file_hash: 4c9fbb976bec3529
translation_language: uk
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Версія"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Ліцензія: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Платформа">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Інструмент для обробки тексту на основі ШІ: переклад між мовами, перефразування в різних стилях та трансформація за допомогою користувацьких промптів — з використанням декількох постачальників ШІ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI та локальний Ollama). Працює як настільний додаток (Electron) або самостійно розміщений веб-додаток (Docker).

- **Перекласти** — між десятками мов, з автоматичним визначенням мови джерела
- **Перефразування** — виправлення граматики, покращення ясності, формальний/неформальний стиль, скорочення, розширення, технічний стиль
- **Трансформація** — користувацькі промпти ШІ; створення та керування промптами, необов’язкова цільова мова для кожного промпту
- **Історія** — повна історія виконання з вхідним/вихідним текстом, фільтрацією та експортом
- **Моделі та вартість** — вибір моделей з будь-якого налаштованого постачальника; панелі вартості та використання з журналом, зведеннями за моделями/операціями/днями
- **Інтерфейс користувача** — багатомовний інтерфейс (понад 30 мов, підтримка RTL), шрифти, ...
- **Веб-режим** — підтримка кількох користувачів із ролями адміністратора
- **Настільний додаток** — додаток Electron для Windows та Linux
- **Самостійне розміщення** — образ Docker для amd64 та arm64 (готовий до використання на Raspberry Pi)

Після встановлення перегляньте **[Керівництво користувача](USER-GUIDE.uk.md)** для повного огляду всіх функцій.

<small>**Читати іншими мовами:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Примітка щодо перекладів інтерфейсу та документації:** Усі мови інтерфейсу, окрім оригінальної англійської (Великобританія),
> були перекладені за допомогою моделей ШІ; формулювання можуть бути неточними або містити помилки.

</small>

<br/>

<a id="screenshots"></a>
## Знімки екрана

**Вибір мови**

![Language selector](../images/screenshots/uk/language-selector.png)

**Перекласти**

![Translate](../images/screenshots/uk/translate.png)

**Трансформація — редактор промптів**

![Transform - prompt editor](../images/screenshots/uk/transform-prompt-edit.png)

**Панель**

![Dashboard summary — usage](../images/screenshots/uk/dashboard-summary.png)

**Історія**

![History](../images/screenshots/uk/history.png)

**Налаштування — вибір моделі**

![Settings - model selection](../images/screenshots/uk/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Зміст

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Швидкий старт](#quick-start)
- [Встановлення](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Налаштування часовго поясу](#configuring-the-timezone)
- [Отримання ключа API OpenRouter](#getting-an-openrouter-api-key)
- [Налаштування та середовище](#configuration-and-environment)
- [Розробка та архітектура](#development-and-architecture)
- [Повідомлення про проблеми](#reporting-issues)
- [Застереження](#disclaimer)
- [Ліцензія](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Швидкий старт

**Docker (рекомендовано для самостійного хостингу)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Замініть `sk-or-your-key` на свій [ключ API OpenRouter](https://openrouter.ai/keys) (або встановіть ключі інших постачальників; див. [Конфігурація](#configuration-and-environment)). Відкрийте [http://localhost:5000](http://localhost:5000) і змініть пароль адміністратора за замовчуванням, перш ніж виставляти сервіс у мережу.

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> У Docker ключі LLM встановлюються через змінні середовища, такі як `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (не через веб-інтерфейс). На настільній версії (Electron) налаштуйте ключі в розділі **Налаштування → API**.

<br/>

**Windows**

Завантажте останній `Transrewrt Setup x.y.z.exe` з [релізів](https://github.com/wsj-br/transrewrt/releases), запустіть установник, потім запустіть програму через меню «Пуск» або ярлик на робочому столі. Введіть свої ключі API в розділі **Налаштування → API**. Потрібно налаштувати принаймні одного постачальника; OpenRouter — поширений варіант для безкоштовних моделей.

<br/>

**Linux**

Завантажте `.AppImage` для вашого процесора з [релізів](https://github.com/wsj-br/transrewrt/releases) (`x64` для звичайних ПК, `arm64` для багатьох пристроїв ARM, включаючи Raspberry Pi 4+), потім:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введіть свої ключі API в розділі **Налаштування → API**. Потрібно налаштувати принаймні одного постачальника; OpenRouter — поширений варіант для безкоштовних моделей.

**Повідомлення консолі:** Упаковані збірки для Linux (`x64` та `arm64` AppImages) приховують попередження про застарілість Node у терміналі (наприклад, вбудований модуль `punycode`). Якщо Chromium виводить помилки GPU / EGL, такі як «GLES3 не підтримується», але додаток працює, їх можна вимкнути, відключивши апаратне прискорення:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Це стосується також amd64; змініть ім’я файлу відповідно до вашого завантаження. Див. [Встановлення → Linux (Electron)](#linux-electron) для додаткових відомостей.

У Debian/Ubuntu можуть знадобитися додаткові **виконавчі** бібліотеки, які очікує Chromium (часто вже присутні на повноцінних стільницях). Використовуйте **`libnotify4`** для сповіщень на стільниці — **не** `libnotify-dev` (це для збирання програмного забезпечення, а не для запуску упакованого AppImage):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Мінімальні або спеціальні образи можуть все ще завершуватися з помилкою про відсутній `.so`; встановіть пакет, названий у повідомленні про помилку (поширені додаткові пакети: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). У деяких середовищах потрібен FUSE для запуску AppImages (наприклад, `libfuse2` у Ubuntu 22.04+), або використовуйте `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> macOS наразі не підтримується. Transrewrt доступний для Windows, Linux та Docker.

<br/>

Після запуску додатка ознайомтеся з **[Посібником для користувача](USER-GUIDE.uk.md)**, щоб дізнатися, як перекладати, перефразовувати та трансформувати текст, керувати запитами та налаштовувати моделі.

<br/><br/>

<a id="installation"></a>
## Встановлення

<a id="windows-electron"></a>
### Windows (Electron)

- Завантажте останній установник з [релізів](https://github.com/wsj-br/transrewrt/releases).
- Запустіть `.exe` та дотримуйтесь інструкцій установника.
- При першому запуску: запустіть додаток через меню «Пуск» або ярлик на робочому столі.

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> Windows може показати одне з таких попереджень безпеки (нормально для непідписаних/незалежних додатків):
>   - **Контроль облікових записів користувача (UAC)**: "Чи дозволити цьому додатку від невідомого видавця вносити зміни на вашому пристрої?" → Натисніть **Так**.
>   - **Microsoft Defender SmartScreen**: "Windows захистив ваш комп’ютер" → Натисніть **Докладніше** → **Все одно запустити**.
>
> Це відбувається тому, що додаток не підписаний Microsoft або великим видавцем — він безпечний, якщо ви завантажили його з нашого офіційного релізу на GitHub
>  (перевірте контрольну суму SHA256 нижче).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Завантажте відповідний `.AppImage` (`x64` або `arm64`) з [релізів](https://github.com/wsj-br/transrewrt/releases).
- Запустіть: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` для x86_64/amd64 або використовуйте файл `...-arm64.AppImage` для ARM64.
- **Бібліотеки часу виконання Debian/Ubuntu** (Electron/Chromium; такі самі, як у [Швидкий старт → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — використовуйте **`libnotify4`**, а не `libnotify-dev`. У мінімальних системах встановлюйте будь-які відсутні `.so`, які виводяться в терміналі; часто потрібні додаткові компоненти, такі як `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`. AppImage може потребувати `libfuse2` (Ubuntu 22.04+) або `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Повідомлення GPU:** Chromium може виводити помилки ініціалізації GPU або EGL у деяких системах (особливо ARM); додаток все одно може працювати нормально. Щоб уникнути цих повідомлень, запустіть з вимкненою апаратною акселерацією: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (або ваш файл для `arm64`).

<br/>

<a id="docker"></a>
### Docker

- Отримайте образ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Встановіть принаймні один ключ постачальника через змінні середовища (наприклад, `OPENROUTER_API_KEY` для OpenRouter). Передавайте змінні за допомогою `-e` або `docker compose` / `.env`, щоб секрети не потрапляли в образ.
- Ключі постачальників **не** вводяться у веб-інтерфейсі; сервер читає їх із середовища.

Приклад — іменований том для збереження даних (ключ OpenRouter через змінну середовища):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

або, якщо ви віддаєте перевагу Docker Compose, використовуйте:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Див. [Конфігурація](#configuration-and-environment) для всіх змінних середовища, таких як `PORT`, `CONFIG_PATH`, `TZ` та ключі LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>
### Налаштування часового поясу

Дата та час у інтерфейсі користувача дотримуються локалі та часового поясу **браузера**. Для **поведінки на стороні сервера** (логування тощо) контейнер використовує змінну середовища `TZ`. За замовчуванням встановлено `TZ=Europe/London`.

Щоб використовувати інший часовий пояс, встановіть `TZ` у вашому файлі Compose, наприклад:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Або передайте її під час запуску контейнера (Docker):

```bash
--env TZ=America/Sao_Paulo
```

На багатьох Linux-хостах ви можете скопіювати назву системного часового поясу за допомогою:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Список дійсних назв часових поясів підтримується в [базі даних tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Отримання ключа API OpenRouter

Transrewrt підтримує кілька постачальників штучного інтелекту. [OpenRouter](https://openrouter.ai) — популярний варіант, оскільки об’єднує багато моделей під одним ключем і пропонує безкоштовні моделі.

1. Зареєструйтеся або увійдіть на [openrouter.ai](https://openrouter.ai).
2. Відкрийте сторінку [Keys](https://openrouter.ai/keys) та створіть новий ключ (надайте йому назву, і за бажанням встановіть ліміт коштів). Ви можете використовувати безкоштовні моделі без додавання коштів.
3. **Desktop (Electron):** вставте ключі в **Налаштування → API**. **Docker:** встановіть змінні середовища, такі як `OPENROUTER_API_KEY` (див. [Швидкий старт](#quick-start)).

Не використовуйте модель **Body Builder** від OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) для перекладу, перефразування чи трансформації: вона повертає JSON-навантаження запитів, а не готовий текст для цих завдань. Див. [Налаштування → Моделі](USER-GUIDE.uk.md#models) у користувацькому посібнику.

Ви також можете використовувати інших постачальників (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) або запускати моделі локально за допомогою [Ollama](https://ollama.com). Див. [Конфігурація](#configuration-and-environment) для повного списку підтримуваних постачальників та змінних середовища.

> ⚠️ **ПОПЕРЕДЖЕННЯ**<br/>
> Якщо ви використовуєте Ollama з іншого пристрою, контейнера чи служби, не забудьте налаштувати Ollama для дозволу зовнішніх підключень (не тільки localhost).

Щодо обмежень, BYOK тощо, див. [аутентифікація OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Налаштування та середовище

**Розташування файлів конфігурації**

| Розгортання         | Розташування конфігурації                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Веб / Docker       | `/app/data/config.json` (використовуйте том для збереження) |

<br/>

**Змінні середовища** (лише для веб/Docker; Electron використовує локальний файл конфігурації)

| Змінна             | Опис                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Порт, на якому слухає сервер (за замовчуванням `5000`)                                  |
| `CONFIG_PATH`        | Шлях до файлу конфігурації (за замовчуванням `/app/data/config.json`)                 |
| `TZ`                 | часовий пояс для серверного часу (логування тощо) (за замовчуванням `Europe/London`) |
| `OPENROUTER_API_KEY` | Ключ API OpenRouter                                                           |
| `OPENAI_API_KEY`     | Ключ API OpenAI                                                               |
| `CEREBRAS_API_KEY`   | Ключ API Cerebras                                                             |
| `ANTHROPIC_API_KEY`  | Ключ API Anthropic                                                            |
| `GOOGLE_API_KEY`     | Ключ API Google Gemini                                                        |
| `DEEPSEEK_API_KEY`   | Ключ API DeepSeek                                                             |
| `GROQ_API_KEY`       | Ключ API Groq                                                                 |
| `MISTRAL_API_KEY`    | Ключ API Mistral                                                              |
| `OLLAMA_URL`         | Базова URL-адреса Ollama (наприклад, `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | Ключ API xAI                                                                  |

Налаштовуйте лише тих постачальників, яких використовуєте. Ідентифікатори моделей мають простір імен (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, тощо).

**Відображення вартості:** OpenRouter повертає точну виставлену вартість, коли це можливо. Інші постачальники використовують **приблизну** вартість із публічного ціноутворення моделей OpenRouter, якщо ключ OpenRouter доступний; без нього вартість не-OpenRouter може відображатися як `0`. Оцінки не є рахунками.

<br/>

**Дані та збереження:** Для Docker змонтуйте том у `/app/data`, щоб `config.json` та база даних SQLite зберігалися після перезапуску контейнера. Без тому всі дані будуть втрачені після зупинки контейнера.

**Розробники:** Після отримання змін, які замінюють стару конфігурацію з одним ключем, скиньте або об’єднайте `data/config.json` з новою формою за замовчуванням із `src/config-defaults/config_default.json`, якщо ваш локальний файл ще використовує видалені поля (`api_key`, `api_url`, параметри проксі).

<br/>

**Веб-аутентифікація:**

- Адміністратор за замовчуванням: `admin` / `transrewrt26`.
- Керуйте користувачами в розділі **Налаштування → Користувачі**.
- Скиньте пароль: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (з коду: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ПОПЕРЕДЖЕННЯ**<br/>
> Негайно змініть пароль адміністратора за замовчуванням на будь-якому хості, доступному в мережі.

<br/>

Основні параметри (шрифт, моделі, мови тощо) доступні в Налаштуваннях додатку.

<br/><br/>

<a id="development-and-architecture"></a>
## Розробка та архітектура

- **Розробка:** Налаштування, збірка, тестування та розгортання (Electron, Веб, Docker) — див. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Архітектура та огляд системи:** Структура папок, технологічний стек, рішення щодо дизайну — див. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Повідомлення про проблеми

Відкрийте питання на [GitHub](https://github.com/wsj-br/transrewrt/issues). Вкажіть вашу платформу (Windows / Linux / Docker) та версію програми (вказана у діалозі «Про програму» або на сторінці релізів).

<br/><br/>

<a id="disclaimer"></a>
## Звільнення від відповідальності

Назви продуктів та іконки належать їхнім відповідним власникам і використовуються лише з метою ідентифікації. Це програмне забезпечення не пов'язане з жодним із згаданих брендів і не схвалене ними.

<br/><br/>

<a id="license"></a>
## Ліцензія

Авторське право © 2026 Вальдемар Скуделлер-молодший.

[Apache License 2.0](../LICENSE)
