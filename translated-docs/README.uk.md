---
translated_at: "2026-03-27T23:16:31.767Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

Інструмент для обробки тексту з підтримкою штучного інтелекту: переклад між мовами, перефразування у різних стилях і перетворення за допомогою користувацьких запитів — із використанням декількох постачальників ШІ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI та локальний Ollama). Працює як настільний додаток (Electron) або як веб-застосунок для самостійного розгортання (Docker).

- **Переклад** — між десятками мов із автоматичним визначенням мови оригіналу
- **Переписання** — виправлення граматики, підвищення зрозумілості, формальний/неформальний стиль, скорочення, розширення, технічний текст
- **Перетворення** — користувацькі запити до ШІ; створення та керування запитами, необов’язкова цільова мова для кожного запиту
- **Історія** — повна історія виконання з вхідним і вихідним текстом, фільтрація та експорт
- **Моделі та вартість** — вибір моделей із будь-якого налаштованого постачальника; панелі вартості та використання з журналами, підсумками за моделями/операціями/днями
- **Інтерфейс** — багатомовний інтерфейс (понад 30 мов, підтримка RTL), шрифти, ...
- **Веб-режим** — підтримка кількох користувачів із ролями адміністратора
- **Настільна версія** — застосунок на Electron для Windows та Linux
- **Самостійне розгортання** — образ Docker для amd64 та arm64 (підходить для Raspberry Pi)

Після встановлення ознайомтеся з **[Посібником користувача](USER-GUIDE.uk.md)**, щоб детально вивчити всі функції.

<small>**Читати іншими мовами:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Примітка щодо перекладу інтерфейсу та документації:** Усі мови інтерфейсу, крім оригіналу англійської (UK),
> були перекладені за допомогою моделей ШІ; формулювання можуть бути неточними або містити помилки.

</small>

<br/>

<a id="screenshots"></a>

## Знімки екрана

**Вибір мови**

![Вибір мови](../images/screenshots/uk/language-selector.png)

**Переклад**

![Переклад](../images/screenshots/uk/translate.png)

**Трансформація – редактор запитів**

![Трансформація – редактор запитів](../images/screenshots/uk/transform-prompt-edit.png)

**Інформаційна панель**

![Панель вартості](../images/screenshots/uk/dashboard-summary.png)

**Історія**

![Історія](../images/screenshots/uk/history.png)

**Налаштування – вибір моделі**

![Налаштування – вибір моделі](../images/screenshots/uk/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Зміст

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Швидкий початок](#quick-start)
- [Встановлення](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Отримання ключа OpenRouter API](#getting-an-openrouter-api-key)
- [Конфігурація та середовище](#configuration-and-environment)
- [Розробка та архітектура](#development-and-architecture)
- [Випуски та мітки](#releases-and-tags)
- [Як зробити внесок](#contributing)
- [Правова оголошення](#disclaimer)
- [Ліцензія](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Швидкий старт

**Docker (рекомендується для самостійного розгортання)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Замініть `sk-or-your-key` на ваш [ключ OpenRouter API](https://openrouter.ai/keys) (або встановіть ключі інших провайдерів; див. [Налаштування](#configuration-and-environment)). Відкрийте [http://localhost:5000](http://localhost:5000) та змініть пароль адміністратора за замовчуванням перед тим, як робити сервіс доступним ззовні.

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> У Docker, облікові дані LLM встановлюються через змінні середовища, як-от `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (не через веб-інтерфейс). У настільній версії (Electron) ключі налаштовуються в розділі **Налаштування → API**.

<br/>

**Windows**

Завантажте останній `Transrewrt Setup x.y.z.exe` з [релізів](https://github.com/wsj-br/transrewrt/releases), запустіть інсталятор і запустіть програму через меню «Пуск» або ярлик на робочому столі. Введіть свої ключі API в розділі **Налаштування → API**. Вам потрібно налаштувати хоча б одного провайдера; OpenRouter — популярний варіант для безкоштовних моделей.

<br/>

**Linux**

Завантажте `.AppImage` для вашого процесора з [релізів](https://github.com/wsj-br/transrewrt/releases) (`x64` для звичайних ПК, `arm64` для багатьох ARM-пристроїв, включаючи Raspberry Pi 4+), потім виконайте:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введіть свої ключі API в розділі **Налаштування → API**. Вам потрібно налаштувати хоча б одного провайдера; OpenRouter — популярний варіант для безкоштовних моделей.

У Debian/Ubuntu може знадобитися попередня установка додаткових залежностей:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Детальніше див. у розділі [Установка → Linux](#linux-electron).

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> Підтримка macOS наразі відсутня. Transrewrt доступний для Windows, Linux і Docker.

<br/>

Після запуску додатка ознайомтеся з **[Посібником користувача](USER-GUIDE.uk.md)**, щоб дізнатися, як перекладати, переписувати та перетворювати текст, керувати промптами та налаштовувати моделі.

<br/><br/>

<a id="installation"></a>

## Встановлення

<a id="windows-electron"></a>
### Windows (Electron)

- Завантажте найновіший установник з розділу [Releases](https://github.com/wsj-br/transrewrt/releases).
- Запустіть `.exe` файл та дотримуйтесь інструкцій установника.
- Перший запуск: запустіть додаток через меню «Пуск» або ярлик на робочому столі.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Завантажте відповідний `.AppImage` файл (`x64` або `arm64`) з розділу [Releases](https://github.com/wsj-br/transrewrt/releases).
- Запуск: виконайте `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` для x86_64/amd64, або використовуйте файл `...-arm64.AppImage` для платформи ARM64.
- Додаткові залежності (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Дивіться [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) для більш детальної інформації.

<br/>

<a id="docker"></a>
### Docker

- Завантажте образ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Встановіть хоча б один ключ постачальника через змінні оточення (наприклад, `OPENROUTER_API_KEY` для OpenRouter). Передавайте змінні за допомогою `-e` або `docker compose` / `.env`, щоб секрети не потрапили в образ.
- Ключі постачальників **не вводяться** в веб-інтерфейсі; сервер зчитує їх з оточення.

Приклад — іменований том для збереження даних (ключ OpenRouter через змінну оточення):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

або, якщо ви віддаєте перевагу Docker Compose, скористайтеся:

# завантажте файл компонування
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# відредагуйте файл, щоб додати API_KEYS
vi transrewrt.yml
# запустіть контейнер
docker compose -f transrewrt.yml up -d
```

<br/>

| Параметр   | Опис                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Порт     | `5000` (відобразіть за допомогою `-p 5000:5000`)                                                                                                       |
| Том      | Монтування `/app/data` для збереження конфігурації та бази даних                                                                                  |
| Змінні середовища | `PORT`, `CONFIG_PATH`, а також ключі LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) — див. [Конфігурація](#configuration-and-environment) |

Щоб зібрати та запустити з вихідного коду: `docker compose up --build -d` або `pnpm docker:up` — див. [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Отримання API-ключа OpenRouter

Transrewrt підтримує кілька провайдерів штучного інтелекту. [OpenRouter](https://openrouter.ai) — популярний варіант, оскільки об'єднує багато моделей під одним ключем і пропонує безкоштовні моделі.

1. Зареєструйтеся або увійдіть на сайт [openrouter.ai](https://openrouter.ai).
2. Відкрийте сторінку [Keys](https://openrouter.ai/keys) та створіть новий ключ (надайте йому назву, і за бажанням встановіть ліміт коштів). Ви можете використовувати безкоштовні моделі, не поповнюючи рахунок.
3. **Десктоп (Electron):** вставте ключі в розділі **Налаштування → API**. **Docker:** встановіть змінні середовища, такі як `OPENROUTER_API_KEY` (див. [Швидкий старт](#quick-start)).

Не використовуйте модель **Body Builder** від OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) для перекладу, переписування чи перетворення: вона повертає JSON-навантаження запитів, а не готовий текст для цих завдань. Див. [Налаштування → Моделі](USER-GUIDE.uk.md#models) у Користувацькому посібнику.

Ви також можете використовувати інших провайдерів (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) або запускати моделі локально за допомогою [Ollama](https://ollama.com). Див. [Налаштування](#configuration-and-environment), щоб побачити повний список підтримуваних провайдерів і змінних середовища.

> ⚠️ **ПОПЕРЕДЖЕННЯ**<br/>
> Якщо ви використовуєте Ollama з іншого пристрою, контейнера чи сервісу, не забудьте налаштувати Ollama на прийняття зовнішніх підключень (не лише localhost).

Для отримання інформації щодо обмежень, BYOK тощо, див. [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Налаштування та середовище

**Розташування файлів конфігурації**

| Розгортання          | Розташування конфігурації                           |
| --------------------- | --------------------------------------------------- |
| Electron (Windows)    | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)      | `~/.config/transrewrt/`                           |
| Веб / Docker          | `/app/data/config.json` (використовуйте том для зберігання) |

<br/>

**Змінні середовища** (лише веб/Docker; Electron використовує локальний файл конфігурації)

| Змінна               | За замовчуванням         | Опис |
| -------------------- | ------------------------ | ---- |
| `PORT`               | `5000`                   | Порт, на якому слухає сервер |
| `CONFIG_PATH`        | `/app/data/config.json`  | Шлях до файлу конфігурації |
| `OPENROUTER_API_KEY` | *(порожньо)*              | Ключ API OpenRouter |
| `OPENAI_API_KEY`     | *(порожньо)*              | Ключ API OpenAI |
| `CEREBRAS_API_KEY`   | *(порожньо)*              | Ключ API Cerebras |
| `ANTHROPIC_API_KEY`  | *(порожньо)*              | Ключ API Anthropic |
| `GOOGLE_API_KEY`     | *(порожньо)*              | Ключ API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(порожньо)*              | Ключ API DeepSeek |
| `GROQ_API_KEY`       | *(порожньо)*              | Ключ API Groq |
| `MISTRAL_API_KEY`    | *(порожньо)*              | Ключ API Mistral |
| `OLLAMA_URL`         | *(порожньо)*              | Базовий URL Ollama (наприклад, `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(порожньо)*              | Ключ API xAI |

Налаштовуйте лише тих постачальників, яких використовуєте. Ідентифікатори моделей мають простір імен (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` тощо).

**Відображення вартості:** OpenRouter повертає точну суму рахунку, коли це можливо. Інші постачальники використовують **розрахункову** вартість на основі публічних цін OpenRouter, якщо доступний ключ OpenRouter; в іншому випадку вартість не-OpenRouter може відображатися як `0`. Розрахунки не є офіційними рахунками.

<br/>

**Дані та збереження:** Для Docker створіть том у каталозі `/app/data`, щоб файл `config.json` та база даних SQLite зберігалися після перезапуску контейнера. Без тому всі дані втрачаються після зупинки контейнера.

**Розробники:** Після оновлення змін, які замінюють стару конфігурацію з одним ключем, скиньте або об'єднайте `data/config.json` з новою структурою за замовчуванням із `src/config-defaults/config_default.json`, якщо ваш локальний файл ще використовує видалені поля (`api_key`, `api_url`, параметри проксі).

<br/>

**Веб-аутентифікація:**

- Адміністратор за замовчуванням: `admin` / `transrewrt26`.
- Керуйте користувачами в розділі **Налаштування → Користувачі**.
- Скидання пароля: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (з вихідного коду: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ПОПЕРЕДЖЕННЯ**<br/>
> Негайно змініть пароль адміністратора за замовчуванням на будь-якому хості, доступному у мережі.

<br/>

Основні параметри (шрифт, моделі, мови тощо) доступні в Налаштуваннях програми.

<br/><br/>

<a id="development-and-architecture"></a>

## Розробка та архітектура

- **Розробка:** Налаштування, збірка, тестування та розгортання (Electron, Web, Docker) — див. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Архітектура та огляд системи:** Структура папок, технологічний стек, архітектурні рішення — див. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Релізи та теги

- **Git-теги** `v`* (наприклад, `v1.0.10`) запускають [робочий процес релізу](.github/workflows/release.yml). **GitHub Releases** додають Windows-установник (`.exe`) та Linux AppImage (**x64** та **arm64**).
- **Docker-образи** публікуються в `ghcr.io/wsj-br/transrewrt`. Теги образів відповідають Git-версії (наприклад, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), а також використовується тег `latest`. Мультиархітектура: `linux/amd64` та `linux/arm64` (наприклад, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Як приєднатися до розробки

1. Зробіть форк репозиторію.
2. Створіть гілку для функції: `git checkout -b feature/my-feature`
3. Запишіть зміни з'ясовним коментарем.
4. Відправте зміни та створіть Pull Request до гілки `main`.

Будь ласка, дотримуйтесь існуючого стилю коду та перевіряйте свої зміни в режимах Electron і веб перед відправкою. Інструкції щодо збірки та тестування наведені в [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Повідомлення про помилки:** Створюйте issue на [GitHub](https://github.com/wsj-br/transrewrt/issues). Вкажіть вашу платформу (Windows / Linux / Docker) та версію додатка (вказана у діалозі «Про програму» або на сторінці релізів).

<br/><br/>

<a id="disclaimer"></a>

## Відмова від відповідальності

Назви та іконки продуктів належать їх власникам і використовуються виключно з метою ідентифікації. Це програмне забезпечення не пов’язане зі згаданими брендами і не підтримується ними.

<br/><br/>

<a id="license"></a>
## Ліцензія

Авторське право © 2026 Вальдемар Скуделлер молодший.

[Ліцензія Apache 2.0](LICENSE)