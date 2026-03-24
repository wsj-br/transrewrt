---
translated_at: "2026-03-24T03:42:09.102Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Логотип Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Версія"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Ліцензія: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Платформа">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Інструмент для обробки тексту на основі ШІ: переклад між мовами, переписування в різних стилях та перетворення за допомогою користувацьких запитів — з використанням кількох постачальників ШІ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI та локальний Ollama). Працює як настільний додаток (Electron) або як веб-додаток, що розміщується локально (Docker).

- **Переклад** — між десятками мов із автоматичним визначенням мови оригіналу
- **Переписати** — виправлення граматики, покращення читабельності, формальний/неформальний стиль, скорочення, розширення, технічний текст
- **Перетворити** — персоналізовані запити до ШІ; створення та керування запитами, необов'язкова цільова мова для кожного запиту
- **Історія** — повна історія виконань із вхідним та вихідним текстом, фільтрацією та експортом
- **Моделі та витрати** — вибір моделей із будь-якого налаштованого постачальника; панель витрат із журналом SQLite, підсумки за моделями/операціями/днями
- **Інтерфейс** — багатомовний інтерфейс (понад 30 мов, підтримка напрямку RTL), шрифти, ...
- **Веб-режим** — підтримка кількох користувачів з ролями адміністратора; ключі API залишаються на сервері, не відкриваються у браузері
- **Настільний додаток** — додаток Electron для Windows та Linux
- **Локальне розміщення** — образ Docker для amd64 та arm64 (готовий до роботи на Raspberry Pi)

Після встановлення ознайомтеся з **[Посібником для користувача](USER-GUIDE.uk.md)**, щоб детально вивчити всі функції.

<small>**Читати іншими мовами:** [English (UK)](README.uk.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>


<br/>

**Примітка щодо перекладів інтерфейсу та документації:** Усі мови інтерфейсу, окрім англійської (UK), перекладено за допомогою моделей ШІ; формулювання можуть бути неточними або містити помилки.



<a id="screenshots"></a>
## Знімки екрана

**Вибір мови**

![Вибір мови](../images/screenshots/uk/language-selector.png)

**Переклад**

![Переклад](../images/screenshots/uk/translate.png)

**Перетворити — редактор запитів**

![Перетворити — редактор запитів](../images/screenshots/uk/transform-prompt-edit.png)

**Панель статистики**

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
- [Версії та теги](#releases-and-tags)
- [Як зробити внесок](#contributing)
- [Заява про відповідальність](#disclaimer)
- [Ліцензія](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Швидкий старт

**Docker (рекомендовано для self-hosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Замініть `sk-or-your-key` на свій [ключ OpenRouter API](https://openrouter.ai/keys) (або встановіть ключі інших провайдерів; див. [Конфігурація](#configuration-and-environment)). Відкрийте [http://localhost:5000](http://localhost:5000) та змініть пароль адміністратора за замовчуванням, перш ніж відкривати сервіс у мережі.

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> У Docker ключі LLM налаштовуються через змінні середовища, такі як `OPENROUTER_KEY`, `OPENAI_KEY` і т.д. (не через веб-інтерфейс). У версії для робочого столу (Electron) ключі налаштовуються в **Налаштування → API**.

<br/>

**Windows**

Завантажте останній `Transrewrt Setup x.y.z.exe` із розділу [Релізи](https://github.com/wsj-br/transrewrt/releases), запустіть інсталятор і запустіть додаток через меню «Пуск» або ярлик на стільниці. Введіть свої ключі API в розділі **Налаштування → API**. Потрібно налаштувати хоча б одного провайдера; OpenRouter часто використовують для безкоштовних моделей.

<br/>

**Linux**

Завантажте `.AppImage` із розділу [Релізи](https://github.com/wsj-br/transrewrt/releases), потім:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Введіть свої ключі API в розділі **Налаштування → API**. Потрібно налаштувати хоча б одного провайдера; OpenRouter часто використовують для безкоштовних моделей.

У Debian/Ubuntu спочатку може знадобитись встановити додаткові залежності:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Детальніше див. [Встановлення → Linux](#linux-electron).

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> Підтримка macOS наразі відсутня. Transrewrt доступний для Windows, Linux і Docker.

<br/>

Після запуску додатку перегляньте **[Посібник користувача](USER-GUIDE.uk.md)**, щоб дізнатися, як перекладати, переписувати та перетворювати текст, керувати підказками та налаштовувати моделі.

<br/><br/>

<a id="installation"></a>
## Встановлення

<a id="windows-electron"></a>
### Windows (Electron)

- Завантажте останній інсталятор із розділу [Релізи](https://github.com/wsj-br/transrewrt/releases).
- Запустіть `.exe` файл і дотримуйтесь інструкцій інсталятора.
- Перший запуск: запустіть додаток через меню «Пуск» або ярлик на стільниці.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Завантажте `.AppImage` із розділу [Релізи](https://github.com/wsj-br/transrewrt/releases).
- Виконайте: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Додаткові залежності (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Див. [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) для отримання додаткової інформації.

<br/>

<a id="docker"></a>
### Docker

- Завантажте образ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Встановіть ключ хоча б одного провайдера через змінні середовища (наприклад, `OPENROUTER_KEY` для OpenRouter). Передавайте змінні через `-e` або `docker compose` / `.env`, щоб секрети не потрапили в образ.
- Ключі провайдерів **НЕ** вводяться у веб-інтерфейсі; сервер читає їх із середовища.

Приклад — іменований том для збереження даних (ключ OpenRouter через env):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Параметр     | Опис                                                                                                   |
|-------------|--------------------------------------------------------------------------------------------------------|
| Порт        | `5000` (відображення за допомогою `-p 5000:5000`)                                                       |
| Том         | Змонтуйте `/app/data` для зберігання конфігурації та бази даних                                         |
| Змінні середовища | `PORT`, `CONFIG_PATH`, а також ключі LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) — див. [Конфігурація](#configuration-and-environment) |

Щоб зібрати та запустити з вихідного коду: `docker compose up --build -d` або `pnpm docker:up` — див. [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Отримання API-ключа OpenRouter

Transrewrt підтримує кілька провайдерів штучного інтелекту. [OpenRouter](https://openrouter.ai) — популярний варіант, оскільки об’єднує багато моделей під одним ключем і пропонує безкоштовні моделі.

1. Зареєструйтеся або увійдіть на сайті [openrouter.ai](https://openrouter.ai).
2. Перейдіть на сторінку [Keys](https://openrouter.ai/keys) та створіть новий ключ (надайте йому назву, за бажанням — обмеження кредиту). Безкоштовні моделі можна використовувати без додавання кредиту.
3. **Десктоп (Electron):** вставте ключі в **Налаштування → API**. **Docker:** задайте змінні середовища, наприклад, `OPENROUTER_KEY` (див. [Швидкий старт](#quick-start)).

Також можна використовувати інших провайдерів (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) або запускати моделі локально за допомогою [Ollama](https://ollama.com). Повний перелік підтримуваних провайдерів та змінних середовища див. в розділі [Налаштування](#configuration-and-environment).

Докладніше про обмеження, BYOK тощо — див. [аутентифікація OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Налаштування та середовище

**Розташування конфігураційних файлів**

| Розгортання         | Розташування конфігурації                             |
| ------------------ | ----------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                               |
| Electron (Linux)   | `~/.config/transrewrt/`                               |
| Веб / Docker       | `/app/data/config.json` (використовуйте том для збереження) |

<br/>

**Змінні середовища** (лише для веб-та Docker-версій; Electron використовує локальний конфігураційний файл)

| Змінна           | За замовчуванням           | Опис |
| ---------------- | -------------------------- | ---- |
| `PORT`           | `5000`                     | Порт, на якому слухає сервер |
| `CONFIG_PATH`    | `/app/data/config.json`    | Шлях до конфігураційного файлу |
| `OPENROUTER_KEY` | *(порожньо)*               | Ключ API OpenRouter |
| `OPENAI_KEY`     | *(порожньо)*               | Ключ API OpenAI |
| `ANTHROPIC_KEY`  | *(порожньо)*               | Ключ API Anthropic |
| `GOOGLE_KEY`     | *(порожньо)*               | Ключ API Google Gemini |
| `DEEPSEEK_KEY`   | *(порожньо)*               | Ключ API DeepSeek |
| `GROQ_KEY`       | *(порожньо)*               | Ключ API Groq |
| `MISTRAL_KEY`    | *(порожньо)*               | Ключ API Mistral |
| `OLLAMA_URL`     | *(порожньо)*               | Базовий URL Ollama (наприклад, `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(порожньо)*               | Ключ API xAI |

Налаштовуйте лише тих провайдерів, яких використовуєте. Ідентифікатори моделей мають іменні простори (`openrouter/…`, `openai/…`, `ollama/…` тощо).

**Відображення вартості:** OpenRouter повертає точну виставлену вартість, коли це можливо. Інші провайдери використовують **приблизну** вартість на основі публічних цін на моделі OpenRouter, якщо доступний ключ OpenRouter; без нього вартість інших провайдерів може відображатися як `0`. Прогнози не є рахунками.

<br/>

**Дані та збереження їх:** Для Docker монтується том у `/app/data`, щоб `config.json` та база даних SQLite зберігалися після перезапусків контейнера. Без тому всі дані втрачаються після зупинки контейнера.

**Розробникам:** Після оновлення змін, що замінюють стару конфігурацію з єдиним ключем, скиньте або об’єднайте `data/config.json` із новим типовим форматом із `src/config-defaults/config_default.json`, якщо ваш локальний файл досі використовує видалені поля (`api_key`, `api_url`, параметри проксі).

<br/>

**Аутентифікація у веб-інтерфейсі:**

- Адмін за замовчуванням: `admin` / `transrewrt26`.
- Керуйте користувачами у розділі **Налаштування → Користувачі**.
- Скидання пароля: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (з вихідного коду: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **УВАГА**<br/>
> Негайно змініть пароль адміністратора за замовчуванням на будь-якому хості, до якого є мережевий доступ.

<br/>

Основні налаштування (шрифт, моделі, мови тощо) доступні в розділі Налаштувань додатку.

<br/><br/>

<a id="development-and-architecture"></a>
## Розробка та архітектура

- **Розробка:** Налаштування, збірка, тестування та розгортання (Electron, Веб, Docker) — див. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Архітектура та загальний огляд системи:** Структура папок, технічний стек, рішення щодо проектування — див. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Випуски та теги

- **Теги Git** `v`* (наприклад, `v1.0.10`) запускають [робочий процес випуску](.github/workflows/release.yml). **Випуски на GitHub** містять установник для Windows (`.exe`) та AppImage для Linux.
- **Docker-образи** публікуються на `ghcr.io/wsj-br/transrewrt`. Теги образів відповідають версії Git (наприклад, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), а також містять тег `latest`. Підтримка різних архітектур: `linux/amd64` та `linux/arm64` (наприклад, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Участь у розробці

1. Створіть форк репозиторію.
2. Створіть гілку для нової функції: `git checkout -b feature/my-feature`
3. Зафіксуйте зміни з чітким повідомленням.
4. Відправте зміни та створіть запит на злиття (Pull Request) у гілку `main`.

Будь ласка, дотримуйтесь існуючого стилю коду та перевіряйте свої зміни в режимах Electron та у веб-браузері перед відправленням. Інструкції зі збірки та тестування див. у файлі [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Повідомлення про помилки:** створіть питання (issue) у [GitHub](https://github.com/wsj-br/transrewrt/issues). Вкажіть свою платформу (Windows / Linux / Docker) та версію програми (відображається у діалозі «Про програму» або на сторінці випусків).

<br/><br/>

<a id="disclaimer"></a>
## Звільнення від відповідальності

Назви продуктів та піктограми належать їхнім власникам і використовуються виключно з метою ідентифікації. Цей програмний продукт не пов’язаний з жодними згаданими торговими марками і не підтримується ними.

<br/><br/>

<a id="license"></a>
## Ліцензія

Авторське право © 2026 Вальдемар Скудельєр-молодший.

[Ліцензія Apache 2.0](LICENSE)