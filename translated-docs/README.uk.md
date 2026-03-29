---
translated_at: "2026-03-28T23:08:13.629Z"
source_hash: "e9ea44c8ee71135cfaa88417e93be66dde6feae3d1970ce7c2ff555de1fc3376"
source_mtime: "2026-03-28T22:34:35.283Z"
model: "qwen/qwen3-235b-a22b-2507"
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

Інструмент для роботи з текстом на основі ШІ: перекладайте між мовами, переписуйте в різних стилях і створюйте зміни за допомогою власних запитів — з використанням кількох постачальників ШІ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, і локальний Ollama). Працює як настільна програма (Electron) або як веб-застосунок, що розміщується самостійно (Docker).

- **Переклад** — між десятками мов із автоматичним визначенням мови оригіналу  
- **Перефразування** — виправлення граматики, покращення чіткості, формальний/неформальний стиль, скорочення, розширення, технічний текст  
- **Трансформація** — користувацькі інструкції для ШІ; створюйте та керуйте інструкціями, можливість вказати мову для кожної окремо  
- **Історія** — повна історія виконання з вхідними та вихідними текстами, фільтрація та експорт  
- **Моделі та вартість** — вибір моделей від будь-якого налаштованого провайдера; панелі вартості та використання з логами, зведеними даними за моделями/операціями/днями  
- **Інтерфейс** — багатомовний інтерфейс (30+ мов, підтримка RTL), шрифти тощо  
- **Веб-режим** — підтримка кількох користувачів із ролями адміністраторів  
- **Десктопна версія** — застосунок Electron для Windows та Linux  
- **Самохостинг** — образ Docker для amd64 та arm64 (підходить для Raspberry Pi)  

Після встановлення ознайомтеся з **[Посібником для користувача](USER-GUIDE.uk.md)**, щоб детально переглянути всі функції.

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](translated-docs/READM

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Примітка щодо перекладів інтерфейсу та документації:** Усі мови інтерфейсу, крім оригінальної англійської (Велика Британія),
> були перекладені за допомогою моделей штучного інтелекту; формулювання може бути неточним або містити помилки.

</small>

<br/>

<a id="screenshots"></a>

## Знімки екрана

**Вибір мови**

![Вибір мови](../images/screenshots/uk/language-selector.png)

**Переклад**

![Переклад](../images/screenshots/uk/translate.png)

**Перетворення — редактор запитів**

![Перетворення — редактор запитів](../images/screenshots/uk/transform-prompt-edit.png)

**Інформаційна панель**

![Інформаційна панель — використання](../images/screenshots/uk/dashboard-summary.png)

**Історія**

![Історія](../images/screenshots/uk/history.png)

**Налаштування — вибір моделі**

![Налаштування — вибір моделі](../images/screenshots/uk/settings-models.png)

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
- [Отримання OpenRouter API-ключа](#getting-an-openrouter-api-key)
- [Налаштування та середовище](#configuration-and-environment)
- [Розробка та архітектура](#development-and-architecture)
- [Повідомлення про проблеми](#reporting-issues)
- [Попередження](#disclaimer)
- [Ліцензія](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Швидкий старт

**Docker (рекомендовано для автономного хостингу)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Замініть `sk-or-your-key` на ваш [ключ OpenRouter API](https://openrouter.ai/keys) (або вкажіть ключі інших провайдерів; див. [Налаштування](#configuration-and-environment)). Відкрийте [http://localhost:5000](http://localhost:5000) і змініть пароль адміністратора за замовчуванням, перш ніж виставляти сервіс у мережу.

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> У Docker дані для аутентифікації LLM встановлюються через змінні середовища, такі як `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (а не через веб-інтерфейс). На настільній версії (Electron) ключі налаштовуються в розділі **Налаштування → API**.

<br/>

**Windows**

Завантажте останній `Transrewrt Setup x.y.z.exe` з [релізів](https://github.com/wsj-br/transrewrt/releases), запустіть інсталятор, а потім запустіть програму з меню «Пуск» або ярлика на робочому столі. Введіть ваші API-ключі в розділі **Налаштування → API**. Потрібно налаштувати хоча б одного постачальника; OpenRouter поширений для безкоштовних моделей.

<br/>

**Linux**

Завантажте `.AppImage`-файл для вашого процесора з [релізів](https://github.com/wsj-br/transrewrt/releases) (`x64` для типових ПК, `arm64` для багатьох ARM-пристроїв, включаючи Raspberry Pi 4+), а потім виконайте:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введіть ваші API-ключі в розділі **Налаштування → API**. Потрібно налаштувати хоча б одного постачальника; OpenRouter поширений для безкоштовних моделей.

У Debian/Ubuntu може знадобитися спочатку встановити додаткові залежності:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Деталі див. у розділі [Встановлення → Linux](#linux-electron).

<br/>

> ℹ️ **ПРИМІТКА**<br/>

> Наразі macOS не підтримується. Transrewrt доступний для Windows, Linux та Docker.

<br/>

Після запуску додатка перегляньте **[Посібник користувача](USER-GUIDE.uk.md)**, щоб дізнатися, як перекладати, переписувати та перетворювати текст, керувати запитами та налаштовувати моделі.

<br/><br/>

<a id="installation"></a>

## Установка

<a id="windows-electron"></a>

### Windows (Electron)

- Завантажте найновіший установник зі сторінки [Releases](https://github.com/wsj-br/transrewrt/releases).
- Запустіть файл `.exe` та дотримуйтесь інструкцій установника.
- Під час першого запуску: запустіть додаток через меню «Пуск» або ярлик на робочому столі.

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> Windows може показати одне з таких попереджень безпеки (нормальне явище для додатків без підпису або незалежних розробників):
>   - **Контроль облікових записів (UAC)**: «Чи дозволити цьому додатку від невідомого видавця вносити зміни до вашого пристрою?» → Натисніть **Так**.
>   - **Microsoft Defender SmartScreen**: «Windows захистила ваш комп’ютер» → Натисніть **Додаткові відомості** → **Все одно запустити**.
>
> Це відбувається тому, що додаток не підписаний Microsoft чи великим видавцем — він безпечний, якщо ви завантажили його з нашої офіційної сторінки релізів на GitHub
>  (перевірте контрольну суму SHA256 нижче).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Завантажте відповідний `.AppImage` (`x64` або `arm64`) з [релізів](https://github.com/wsj-br/transrewrt/releases).
- Виконайте: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` для x86_64/amd64 або використовуйте ім'я файлу `...-arm64.AppImage` для ARM64.
- Додаткові залежності (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Див. [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) для отримання додаткової інформації.

<br/>

<a id="docker"></a>

### Docker

- Завантаження: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Встановіть хоча б один ключ провайдера через змінні середовища (наприклад, `OPENROUTER_API_KEY` для OpenRouter). Передавайте змінні за допомогою `-e` або `docker compose` / `.env`, щоб секрети не записувались безпосередньо в образ.
- Ключі провайдерів **не** вводяться у веб-інтерфейсі; сервер читає їх із середовища.

Приклад — іменований том для збереження даних (ключ OpenRouter через змінну середовища):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

або, якщо ви надаєте перевагу використовувати Docker Compose:

```bash
# завантажте файл compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# відредагуйте файл, щоб додати API_KEYS
vi transrewrt.yml
# запустіть контейнер
docker compose -f transrewrt.yml up -d

| Параметр   | Опис                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Порт     | `5000` (відображення за допомогою `-p 5000:5000`)                                                                                                       |
| Том      | Монтування `/app/data` для збереження конфігурації та бази даних                                                                                  |
| Змінні середовища | `PORT`, `CONFIG_PATH`, а також ключі LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) – див. [Конфігурація](#configuration-and-environment) |

Щоб зібрати та запустити з вихідного коду: `docker compose up --build -d` або `pnpm docker:up` – див. [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Отримання API-ключа OpenRouter

Transrewrt підтримує кілька постачальників штучного інтелекту. [OpenRouter](https://openrouter.ai) — популярний варіант, оскільки об’єднує багато моделей під одним ключем і пропонує безкоштовні моделі.

1. Зареєструйтеся або увійдіть на [openrouter.ai](https://openrouter.ai).
2. Відкрийте сторінку [Keys](https://openrouter.ai/keys) та створіть новий ключ (надайте йому назву, за бажанням — обмеження за коштами). Ви можете використовувати безкоштовні моделі, не додаючи кошти.
3. **Десктопна версія (Electron):** вставте ключі в розділі **Налаштування → API**. **Docker:** задайте змінні середовища, наприклад `OPENROUTER_API_KEY` (див. [Швидкий старт](#quick-start)).

Не використовуйте модель **Body Builder** від OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) для перекладу, переписування чи перетворення: вона повертає JSON із даними запиту, а не готовий текст для цих завдань. Див. [Налаштування → Моделі](USER-GUIDE.uk.md#models) у Користувацькому посібнику.

Ви також можете використовувати інших провайдерів (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) або запускати моделі локально за допомогою [Ollama](https://ollama.com). Дивіться [Налаштування](#configuration-and-environment), щоб отримати повний список підтримуваних провайдерів та змінних середовища.

> ⚠️ **ПОПЕРЕДЖЕННЯ**<br/>
> Якщо ви використовуєте Ollama з іншого пристрою, контейнера або служби, не забудьте налаштувати Ollama на дозвіл зовнішніх підключень (не тільки локальних).

Щодо обмежень, BYOK та іншого, дивіться [аутентифікацію OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Налаштування та середовище

**Розташування файлів конфігурації**

| Розгортання         | Розташування конфігурації                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Веб / Docker       | `/app/data/config.json` (використовуйте том для зберігання) |

<br/>

**Змінні середовища** (лише для веб-версії/Docker; Electron використовує локальний файл конфігурації)

| Змінна         | За замовчуванням                 | Опис |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Порт, на якому працює сервер |
| `CONFIG_PATH`    | `/app/data/config.json` | Шлях до файлу конфігурації |
| `OPENROUTER_API_KEY` | *(порожньо)*            | Ключ API OpenRouter |
| `OPENAI_API_KEY`     | *(порожньо)*            | Ключ API OpenAI |
| `CEREBRAS_API_KEY`   | *(порожньо)*            | Ключ API Cerebras |

| `ANTHROPIC_API_KEY`  | *(порожньо)*               | Ключ API Anthropic |
| `GOOGLE_API_KEY`     | *(порожньо)*               | Ключ API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(порожньо)*               | Ключ API DeepSeek |
| `GROQ_API_KEY`       | *(порожньо)*               | Ключ API Groq |
| `MISTRAL_API_KEY`    | *(порожньо)*               | Ключ API Mistral |
| `OLLAMA_URL`         | *(порожньо)*               | Базовий URL Ollama (наприклад, `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(порожньо)*               | Ключ API xAI |

Налаштовуйте лише тих постачальників, яких використовуєте. Ідентифікатори моделей мають простір імен (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` тощо).

**Відображення вартості:** OpenRouter повертає точну виставлену вартість, коли це можливо. Інші постачальники використовують **розраховану** вартість на основі публічних тарифів моделей від OpenRouter, якщо ключ OpenRouter доступний; без нього вартість неприв’язаних до OpenRouter послуг може відображатися як `0`. Оцінки не є офіційними рахунками.

<br/>

**Дані та збереження:** Для Docker змонтуйте том у `/app/data`, щоб `config.json` та база даних SQLite зберігалися після перезапуску контейнера. Якщо том не налаштовано, усі дані будуть втрачені після зупинки контейнера.

**Розробникам:** Після отримання змін, які замінюють стару конфігурацію з єдиним ключем, скиньте або об’єднайте `data/config.json` з новою типовою структурою з `src/config-defaults/config_default.json`, якщо ваш локальний файл ще використовує видалені поля (`api_key`, `api_url`, параметри проксі).

<br/>

**Веб-аутентифікація:**

- Типовий адміністратор: `admin` / `transrewrt26`.
- Керуйте користувачами в розділі **Налаштування → Користувачі**.
- Скинути пароль: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (з вихідного коду: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ПОПЕРЕДЖЕННЯ**<br/>
> Негайно змініть типовий пароль адміністратора на будь-якому хості, доступному в мережі.

<br/>

Основні параметри (шрифт, моделі, мови тощо) доступні в налаштуваннях програми.

<br/><br/>

<a id="development-and-architecture"></a>

## Розробка та архітектура

- **Розробка:** Налаштування, збірка, тестування та розгортання (Electron, Web, Docker) — дивіться **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Архітектура та огляд системи:** Структура папок, технологічний стек, дизайн-рішення — дивіться **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)****.

<br/><br/>

<a id="reporting-issues"></a>

## Повідомлення про проблеми

Створіть проблему на [GitHub](https://github.com/wsj-br/transrewrt/issues). Вкажіть вашу платформу (Windows / Linux / Docker) та версію додатка (вказана у вікні «Про програму» або на сторінці релізів).

<br/><br/>

<a id="disclaimer"></a>

## Звільнення від відповідальності

Назви продуктів та іконки належать їх відповідним власникам і використовуються виключно з метою ідентифікації. Це програмне забезпечення не пов'язане з будь-якими згаданими брендами та не підтримується ними.

<br/><br/>

<a id="license"></a>

## Ліцензія

© 2026 Вальдемар Скудельєр молодший.

[Ліцензія Apache 2.0](LICENSE)