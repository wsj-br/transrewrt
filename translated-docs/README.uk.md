---
translated_at: "2026-03-25T22:44:03.772Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Логотип Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Версія"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Ліцензія: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Платформа">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Інструмент для роботи з текстом із використанням штучного інтелекту: переклад між мовами, переписування в різних стилях, перетворення за допомогою користувацьких запитів — із застосуванням декількох постачальників ШІ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI та локальний Ollama). Може працювати як настільна програма (Electron) або як веб-застосунок, розміщений на власному сервері (Docker).

- **Переклад** — між десятками мов із автоматичним визначенням вихідної мови
- **Переписати** — виправлення граматики, підвищення зрозумілості, формальний/неформальний стиль, скорочення, розширення, технічний текст
- **Перетворити** — користувацькі запити ШІ; створення та керування запитами, можливість вказати мову результату для кожного запиту
- **Історія** — повна історія виконань із вхідними та вихідними текстами, фільтрацією та експортом
- **Моделі та вартість** — вибір моделей від будь-якого налаштованого постачальника; панелі витрат та використання із журналом, підсумками за моделями/операціями/днями
- **Інтерфейс** — багатомовний інтерфейс (понад 30 мов, підтримка RTL), шрифти, ...
- **Веб-режим** — підтримка кількох користувачів із адміністративними ролями
- **Настільна версія** — програма Electron для Windows та Linux
- **Саморозміщення** — образ Docker для amd64 та arm64 (підходить для Raspberry Pi)

Після встановлення перегляньте **[Посібник користувача](USER-GUIDE.uk.md)**, щоб детально ознайомитися з усіма функціями.

<small>**Читайте іншими мовами:** [English (UK)](README.uk.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Примітка щодо перекладу інтерфейсу та документації:** Усі мови інтерфейсу, крім оригінальної (англійської UK),
> були перекладені за допомогою моделей ШІ; формулювання можуть бути неточними або містити помилки.

</small>

<br/>

<a id="screenshots"></a>
## Знімки екрана

**Вибір мови**

![Вибір мови](../images/screenshots/uk/language-selector.png)

**Переклад**

![Переклад](../images/screenshots/uk/translate.png)

**Перетворити — редактор запитів**

![Перетворити — редактор запитів](../images/screenshots/uk/transform-prompt-edit.png)

**Панель стану**

![Панель витрат](../images/screenshots/uk/dashboard-summary.png)

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
- [Отримання ключа OpenRouter API](#getting-an-openrouter-api-key)
- [Конфігурація та середовище](#configuration-and-environment)
- [Розробка та архітектура](#development-and-architecture)
- [Випуски та теги](#releases-and-tags)
- [Як допомагати](#contributing)
- [Попередження](#disclaimer)
- [Ліцензія](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Швидкий старт

**Docker (рекомендовано для розгортання власного сервера)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Замініть `sk-or-your-key` на ваш [ключ OpenRouter API](https://openrouter.ai/keys) (або встановіть ключі інших провайдерів; див. [Конфігурація](#configuration-and-environment)). Відкрийте [http://localhost:5000](http://localhost:5000) та змініть пароль адміністратора за замовчуванням, перш ніж робити сервіс доступним ззовні.

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> У Docker ключі LLM задаються через змінні середовища, такі як `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (не через веб-інтерфейс). У версії для настільного комп’ютера (Electron) ключі налаштовуються в **Налаштування → API**.

<br/>

**Windows**

Завантажте останній файл `Transrewrt Setup x.y.z.exe` із розділу [Випуски](https://github.com/wsj-br/transrewrt/releases), запустіть установник, потім відкрийте програму через меню «Пуск» або ярлик на робочому столі. Уведіть ваші ключі API в **Налаштування → API**. Вам потрібно налаштувати хоча б одного провайдера; OpenRouter — найпоширеніший варіант для безкоштовних моделей.

<br/>

**Linux**

Завантажте файл `.AppImage` для вашого процесора з розділу [Випуски](https://github.com/wsj-br/transrewrt/releases) (`x64` для звичайних ПК, `arm64` для багатьох ARM-пристроїв, включаючи Raspberry Pi 4+), потім виконайте:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Уведіть ваші ключі API в **Налаштування → API**. Вам потрібно налаштувати хоча б одного провайдера; OpenRouter — найпоширеніший варіант для безкоштовних моделей.

У Debian/Ubuntu може знадобитися попередня встановити додаткові залежності:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Детальніше див. у розділі [Встановлення → Linux](#linux-electron).

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> macOS наразі не підтримується. Transrewrt доступний для Windows, Linux та Docker.

<br/>

Після запуску програми ознайомтеся з **[Посібником для користувача](USER-GUIDE.uk.md)**, щоб дізнатися, як перекладати, переформулювати та перетворювати текст, керувати підказками та налаштовувати моделі.

<br/><br/>

<a id="installation"></a>
## Встановлення

<a id="windows-electron"></a>
### Windows (Electron)

- Завантажте найновіший установник із розділу [Випуски](https://github.com/wsj-br/transrewrt/releases).
- Запустіть файл `.exe` та дотримуйтесь інструкцій установника.
- Перший запуск: запустіть програму через меню «Пуск» або ярлик на робочому столі.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Завантажте відповідний файл `.AppImage` (`x64` або `arm64`) із розділу [Випуски](https://github.com/wsj-br/transrewrt/releases).
- Виконайте: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` у x86_64/amd64 або скористайтеся файлом `...-arm64.AppImage` для ARM64.
- Додаткові залежності (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Див. [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) для подальшої інформації.

<br/>

<a id="docker"></a>
### Docker

- Завантажте образ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Встановіть принаймні один ключ провайдера через змінні середовища (наприклад, `OPENROUTER_KEY` для OpenRouter). Передавайте змінні через `-e` або `docker compose` / `.env`, щоб секрети не вбудовувались у образ.
- Ключі провайдерів **не вводяться** у веб-інтерфейсі; сервер читає їх із середовища.

Приклад — іменований том для зберігання даних (ключ OpenRouter передається через змінну середовища):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Параметр | Опис                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Порт     | `5000` (використовуйте `-p 5000:5000` для пробросу)                                                                              |
| Том      | Закріпіть `/app/data` для зберігання конфігурації та бази даних                                                         |
| Змінні середовища | `PORT`, `CONFIG_PATH`, плюс ключі LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - див. [Конфігурація](#configuration-and-environment) |

Щоб зібрати та запустити з вихідного коду: `docker compose up --build -d` або `pnpm docker:up` - див. [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Отримання ключа OpenRouter API

Transrewrt підтримує кілька постачальників ШІ. [OpenRouter](https://openrouter.ai) — популярний варіант, оскільки він об’єднує багато моделей під одним ключем і пропонує безкоштовні моделі.

1. Зареєструйтеся або увійдіть на сайт [openrouter.ai](https://openrouter.ai).
2. Перейдіть на сторінку [Keys](https://openrouter.ai/keys) та створіть новий ключ (надайте йому назву, за бажанням — встановіть обмеження щодо кредиту). Ви можете використовувати безкоштовні моделі без поповнення кредиту.
3. **Десктоп (Electron):** вставте ключі в розділі **Налаштування → API**. **Docker:** встановіть змінні середовища, такі як `OPENROUTER_KEY` (див. [Швидкий старт](#quick-start)).

Не використовуйте модель **Body Builder** від OpenRouter (`openrouter/bodybuilder`) для перекладу, переписування або перетворення: вона повертає завантаження JSON-запитів, а не готовий текст для цих завдань. Див. [Налаштування → Моделі](USER-GUIDE.uk.md#models) у Користувацькому посібнику.

Ви також можете використовувати інших постачальників (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) або запускати моделі локально за допомогою [Ollama](https://ollama.com). Див. [Налаштування](#configuration-and-environment) для повного списку підтримуваних постачальників та змінних середовища.

> ⚠️ **ПОПЕРЕДЖЕННЯ**<br/>
> Якщо ви використовуєте Ollama з іншого пристрою, контейнера чи сервісу, не забудьте налаштувати Ollama на дозвіл зовнішніх підключень (не тільки з localhost).


Для обмежень, використання власних ключів (BYOK) та іншої інформації див. [аутентифікація OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Налаштування та середовище

**Розташування файлів конфігурації**

| Розгортання          | Розташування конфігурації                         |
| -------------------- | ------------------------------------------------- |
| Electron (Windows)   | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)     | `~/.config/transrewrt/`                           |
| Web / Docker         | `/app/data/config.json` (використовуйте том для збереження) |

<br/>

**Змінні середовища** (лише для web/Docker; Electron використовує локальний конфігураційний файл)

| Змінна               | За замовчуванням       | Опис |
| -------------------- | ----------------------- | ----------- |
| `PORT`               | `5000`                  | Порт, на якому слухає сервер |
| `CONFIG_PATH`        | `/app/data/config.json` | Шлях до конфігураційного файлу |
| `OPENROUTER_KEY`     | *(порожнє)*             | Ключ API OpenRouter |
| `OPENAI_KEY`         | *(порожнє)*             | Ключ API OpenAI |
| `CEREBRAS_KEY`       | *(порожнє)*             | Ключ API Cerebras |
| `ANTHROPIC_KEY`      | *(порожнє)*             | Ключ API Anthropic |
| `GOOGLE_KEY`         | *(порожнє)*             | Ключ API Google Gemini |
| `DEEPSEEK_KEY`       | *(порожнє)*             | Ключ API DeepSeek |
| `GROQ_KEY`           | *(порожнє)*             | Ключ API Groq |
| `MISTRAL_KEY`        | *(порожнє)*             | Ключ API Mistral |
| `OLLAMA_URL`         | *(порожнє)*             | Базовий URL Ollama (наприклад, `http://host.docker.internal:11434`) |
| `XAI_KEY`            | *(порожнє)*             | Ключ API xAI |

Налаштовуйте лише тих постачальників, яких використовуєте. Ідентифікатори моделей є просторово іменованими (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` тощо).

**Відображення вартості:** OpenRouter повертає точну оплачену вартість, коли це можливо. Інші постачальники використовують **оцінену** вартість на основі публічних цін на моделі OpenRouter, якщо доступний ключ OpenRouter; без цього ключа вартість, що не стосується OpenRouter, може відображатися як `0`. Оцінки не є рахунками-фактурами.

<br/>

**Дані та збереження:** Для Docker змонтуєте том у `/app/data`, щоб файл `config.json` та база даних SQLite зберігалися під час перезапуску контейнера. Без тому всі дані втрачаються після зупинки контейнера.

**Розробники:** Після отримання змін, які замінюють стару конфігурацію з одним ключем, скиньте або об’єднайте `data/config.json` з новим типовим форматом із `src/config-defaults/config_default.json`, якщо ваш локальний файл досі використовує видалені поля (`api_key`, `api_url`, параметри проксі).

<br/>

**Аутентифікація веб-інтерфейсу:**

- Типовий адміністратор: `admin` / `transrewrt26`.
- Управління користувачами — у розділі **Налаштування → Користувачі**.
- Скидання пароля: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (з вихідного коду: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ПОПЕРЕДЖЕННЯ**<br/>
> Негайно змініть типовий пароль адміністратора на будь-якому хості, доступному з мережі.

<br/>

Основні параметри (шрифт, моделі, мови тощо) можна налаштувати в розділі Налаштування додатку.

<br/><br/>

<a id="development-and-architecture"></a>

## Розробка та архітектура

- **Розробка:** Налаштування, збірка, тестування та розгортання (Electron, Web, Docker) — дивіться **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Архітектура та огляд системи:** Структура каталогів, технологічний стек, архітектурні рішення — дивіться **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Версії та теги

- **Git-теги** `v`* (наприклад, `v1.0.10`) запускають [процес випуску версії](.github/workflows/release.yml). У **випусках GitHub** додаються установник Windows (`.exe`) та AppImage-файли для Linux (**x64** і **arm64**).
- **Docker-образи** публікуються до `ghcr.io/wsj-br/transrewrt`. Теги образів відповідають версії Git (наприклад, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) та додатково `latest`. Мультиархітектурна підтримка: `linux/amd64` та `linux/arm64` (наприклад, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Як допомогти

1. Створіть форк репозиторію.
2. Створіть гілку для функції: `git checkout -b feature/my-feature`.
3. Запишіть зміни з чітким коментарем.
4. Відправте зміни та створіть запит на злиття (Pull Request) до гілки `main`.

Будь ласка, дотримуйтесь існуючого стилю коду та обов’язково протестуйте зміни у режимах Electron і веб перед відправленням. Інструкції щодо збірки та тестування див. у [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Повідомлення про помилки:** Відкрийте питання на [GitHub](https://github.com/wsj-br/transrewrt/issues). Вкажіть платформу (Windows / Linux / Docker) і версію програми (показана у вікні «Про програму» чи на сторінці випусків).

<br/><br/>

<a id="disclaimer"></a>
## Звільнення від відповідальності

Назви товарів і логотипи належать відповідним власникам і використовуються виключно з метою ідентифікації. Цей програмний продукт не пов’язаний із зазначеними брендами, а також не схвалюється ними.

<br/><br/>

<a id="license"></a>
## Ліцензія

Авторське право © 2026 Вальдемар Скюделлер мл.

[Ліцензія Apache 2.0](LICENSE)