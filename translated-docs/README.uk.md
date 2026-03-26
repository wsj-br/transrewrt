---
translated_at: "2026-03-26T01:09:44.066Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
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

Інструмент для обробки тексту на основі ШІ: переклад між мовами, переписування різними стилями та трансформація за допомогою користувацьких запитів — з використанням кількох постачальників ШІ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI та локальний Ollama). Працює як настільний додаток (Electron) або як вебзастосунок із підтримкою розгортання власне (Docker).

- **Переклад** — між десятками мов із автоматичним визначенням вихідної мови
- **Переписання** — виправлення граматики, підвищення чіткості, формальний/неформальний, стиснення, розширення, технічне
- **Трансформація** — користувацькі запити для ШІ; створення та керування запитами, додаткова можливість визначити мову призначення для кожного запиту окремо
- **Історія** — повна історія виконань із вхідним і вихідним текстом, фільтрація та експорт
- **Моделі та вартість** — вибір моделей з будь-якого налаштованого постачальника; панелі контролю вартості та використання з журналами, зведеннями за моделями/операціями/добами
- **Інтерфейс** — багатомовний інтерфейс (понад 30 мов, підтримка RTL), шрифти, ...
- **Вебрежим** — підтримка кількох користувачів із правами адміністратора
- **Настільна версія** — додаток Electron для Windows та Linux
- **Саморозгортання** — образ Docker для amd64 і arm64 (готовий до роботи на Raspberry Pi)

Після встановлення ознайомтеся з **[User Guide](USER-GUIDE.uk.md)**, де наведено повний огляд усіх функцій.

<small>**Читати іншими мовами:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Примітка щодо перекладів інтерфейсу та документації:** Усі мови інтерфейсу, крім оригінальної англійської (UK),
> перекладені за допомогою моделей ШІ; формулювання можуть бути неточними або містити помилки.

</small>

<br/>

<a id="screenshots"></a>
## Знімки екрана

**Вибір мови**

![Вибір мови](../images/screenshots/uk/language-selector.png)

**Переклад**

![Переклад](../images/screenshots/uk/translate.png)

**Трансформація — редактор запитів**

![Трансформація — редактор запитів](../images/screenshots/uk/transform-prompt-edit.png)

**Панель управління**

![Панель вартості](../images/screenshots/uk/dashboard-summary.png)

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
- [Налаштування та середовище](#configuration-and-environment)
- [Розробка та архітектура](#development-and-architecture)
- [Випуски та теги](#releases-and-tags)
- [Як допомогти](#contributing)
- [Дисклеймер](#disclaimer)
- [Ліцензія](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Швидкий старт

**Docker (рекомендовано для самостійного хостингу)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Замініть `sk-or-your-key` на ваш [ключ OpenRouter API](https://openrouter.ai/keys) (або встановіть ключі інших провайдерів; див. [Налаштування](#configuration-and-environment)). Відкрийте [http://localhost:5000](http://localhost:5000) і змініть пароль адміністратора за замовчуванням, перш ніж виставляти сервіс у мережу.

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> У Docker, облікові дані LLM встановлюються через змінні середовища, такі як `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (не через веб-інтерфейс). У десктопному варіанті (Electron) налаштування ключів виконується в **Налаштування → API**.

<br/>

**Windows**

Скачайте останню `Transrewrt Setup x.y.z.exe` з розділу [Випуски](https://github.com/wsj-br/transrewrt/releases), запустіть інсталятор, а потім запустіть програму з меню «Пуск» або ярлика на стільниці. Введіть ваші ключі API у **Налаштування → API**. Вам потрібно налаштувати хоча б одного провайдера — OpenRouter поширений для використання безкоштовних моделей.

<br/>

**Linux**

Скачайте відповідний `.AppImage` для вашого процесора з [релізів](https://github.com/wsj-br/transrewrt/releases) (`x64` для звичайних комп'ютерів, `arm64` для багатьох ARM-пристроїв, включаючи Raspberry Pi 4+), потім:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введіть ваші ключі API у **Налаштування → API**. Вам потрібно налаштувати хоча б одного провайдера — OpenRouter поширений для використання безкоштовних моделей.

У Debian/Ubuntu може знадобитись попереднє встановлення додаткових залежностей:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Дивіться [Встановлення → Linux](#linux-electron) для деталей.

<br/>

> ℹ️ **ПРИМІТКА**<br/>
> macOS на даний момент не підтримується. Transrewrt доступний для Windows, Linux та Docker.

<br/>

Коли додаток запущено, дивіться **[Керівництво користувача](USER-GUIDE.uk.md)**, щоб дізнатися, як перекладати, переписувати та перетворювати текст, керувати запитами та налаштовувати моделі.

<br/><br/>

<a id="installation"></a>
## Встановлення

<a id="windows-electron"></a>
### Windows (Electron)

- Скачайте останній інсталятор з [релізів](https://github.com/wsj-br/transrewrt/releases).
- Запустіть `.exe` та дотримуйтесь інструкцій інсталятора.
- Перший запуск: запустіть додаток з меню «Пуск» або з ярлика на стільниці.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Скачайте відповідний `.AppImage` (`x64` або `arm64`) з [релізів](https://github.com/wsj-br/transrewrt/releases).
- Запустіть: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` на x86_64/amd64 або скористайтесь файлом `...-arm64.AppImage` на ARM64.
- Додаткові залежності (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Дивіться [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) для додаткової інформації.

<br/>

<a id="docker"></a>
### Docker

- Отримайте образ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Встановіть хоча б один ключ провайдера через змінні середовища (наприклад, `OPENROUTER_KEY` для OpenRouter). Передавайте змінні через `-e` або `docker compose` / `.env`, щоб секрети не залишалися в образі.
- Ключі провайдерів **не вводяться** у веб-інтерфейсі; сервер читає їх із середовища.

Приклад — іменований том для зберігання даних (ключ OpenRouter через змінну середовища):

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
| Порт     | `5000` (відображення через `-p 5000:5000`)                                                                              |
| Том       | Змонтуйте `/app/data`, щоб зберігати налаштування та базу даних                                                         |
| Змінні середовища | `PORT`, `CONFIG_PATH`, та ключі LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - див. [Налаштування](#configuration-and-environment) |

Для збирання та запуску з вихідного коду: `docker compose up --build -d` або `pnpm docker:up` — див. [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Отримання ключа OpenRouter API

Transrewrt підтримує кілька постачальників ШІ. [OpenRouter](https://openrouter.ai) — популярний варіант, оскільки об’єднує багато моделей під одним ключем і пропонує безкоштовні моделі.

1. Зареєструйтесь або увійдіть на сайт [openrouter.ai](https://openrouter.ai).
2. Відкрийте сторінку [Keys](https://openrouter.ai/keys) та створіть новий ключ (надайте йому назву, за бажанням — встановіть обмеження коштів). Ви можете користуватися безкоштовними моделями, не додаючи кошти.
3. **Десктоп (Electron):** вставте ключі в **Налаштування → API**. **Docker:** встановіть змінні середовища, наприклад `OPENROUTER_KEY` (див. [Швидкий старт](#quick-start)).

Не використовуйте модель **Body Builder** від OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) для перекладу, переписування чи перетворення: вона повертає JSON-навантаження запиту, а не готовий текст для цих завдань. Див. [Налаштування → Моделі](USER-GUIDE.uk.md#models) у Керівництві користувача.

Також можна використовувати інших постачальників (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) або запускати моделі локально за допомогою [Ollama](https://ollama.com). Повний список підтримуваних постачальників та змінних середовища див. у розділі [Налаштування](#configuration-and-environment).

> ⚠️ **ПОПЕРЕДЖЕННЯ**<br/>
> Якщо ви використовуєте Ollama з іншого пристрою, контейнера чи служби, не забудьте налаштувати Ollama на дозвіл зовнішніх підключень (не тільки localhost).

Детальніше про обмеження, BYOK тощо — див. [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Налаштування та середовище

**Розташування конфігураційних файлів**

| Розгортання         | Розташування конфігурації                        |
| ------------------ | ------------------------------------------------ |
| Electron (Windows) | `%APPDATA%\transrewrt\`                          |
| Electron (Linux)   | `~/.config/transrewrt/`                          |
| Веб / Docker       | `/app/data/config.json` (використовуйте volume для зберігання) |

<br/>

**Змінні середовища** (лише для веб/Docker; Electron використовує локальний конфігураційний файл)

| Змінна            | За замовчуванням        | Опис |
| ----------------- | ------------------------ | ---- |
| `PORT`            | `5000`                   | Порт, на якому слухає сервер |
| `CONFIG_PATH`     | `/app/data/config.json`  | Шлях до конфігураційного файлу |
| `OPENROUTER_KEY`  | *(порожньо)*              | Ключ API OpenRouter |
| `OPENAI_KEY`      | *(порожньо)*              | Ключ API OpenAI |
| `CEREBRAS_KEY`    | *(порожньо)*              | Ключ API Cerebras |
| `ANTHROPIC_KEY`   | *(порожньо)*              | Ключ API Anthropic |
| `GOOGLE_KEY`      | *(порожньо)*              | Ключ API Google Gemini |
| `DEEPSEEK_KEY`    | *(порожньо)*              | Ключ API DeepSeek |
| `GROQ_KEY`        | *(порожньо)*              | Ключ API Groq |
| `MISTRAL_KEY`     | *(порожньо)*              | Ключ API Mistral |
| `OLLAMA_URL`      | *(порожньо)*              | Базовий URL Ollama (наприклад, `http://host.docker.internal:11434`) |
| `XAI_KEY`         | *(порожньо)*              | Ключ API xAI |

Налаштовуйте лише тих постачальників, якими користуєтесь. Ідентифікатори моделей мають простір імен (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` тощо).

**Відображення вартості:** OpenRouter повертає точну вартість рахунку, де це можливо. Інші постачальники використовують **приблизну** вартість на основі публічних цін на моделі OpenRouter, якщо доступний ключ OpenRouter; інакше вартість, що не стосується OpenRouter, може відображатись як `0`. Розрахунки не є рахунками-фактурами.

<br/>

**Дані та збереження:** Для Docker змонтуйте volume в `/app/data`, щоб `config.json` і база даних SQLite зберігались між перезапусками контейнера. Без volume усі дані будуть втрачені після зупинки контейнера.

**Розробники:** Після отримання змін, які замінюють стару конфігурацію з єдиним ключем, скиньте або об’єднайте `data/config.json` з новою базовою структурою з `src/config-defaults/config_default.json`, якщо ваш локальний файл ще використовує видалені поля (`api_key`, `api_url`, параметри проксі).

<br/>

**Веб-аутентифікація:**

- Адміністратор за замовчуванням: `admin` / `transrewrt26`.
- Керуйте користувачами в розділі **Налаштування → Користувачі**.
- Скидання пароля: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (з коду: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ПОПЕРЕДЖЕННЯ**<br/>
> Негайно змініть пароль адміністратора за замовчуванням на будь-якому хості, доступному в мережі.

<br/>

Головні налаштування (шрифт, моделі, мови тощо) доступні в розділі Налаштування додатку.

<br/><br/>

<a id="development-and-architecture"></a>

## Розробка та архітектура

- **Розробка:** Налаштування, збірка, тестування та розгортання (Electron, Web, Docker) — див. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Огляд архітектури та системи:** Структура папок, технологічний стек, дизайн-рішення — див. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Випуски та теги

- **Git-теги** `в`* (наприклад, `в1.0.10`) запускають [процес випуску](.github/workflows/release.yml). **Випуски GitHub** містять установник для Windows (`.exe`) та AppImage для Linux (**x64** і **arm64**).
- **Docker-образи** публікуються у `ghcr.io/wsj-br/transrewrt`. Теги образів відповідають версії у Git (наприклад, `в1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) плюс тег `latest`. Багатоархітектурні: `linux/amd64` та `linux/arm64` (наприклад, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Як допомогти

1. Створіть форк репозиторію.
2. Створіть гілку для нової функції: `git checkout -b feature/my-feature`
3. Запишіть свої зміни з зрозумілим коментарем.
4. Відправте зміни та створіть запит на злиття (Pull Request) до гілки `main`.

Дотримуйтесь існуючого стилю кодування та протестуйте зміни в режимах Electron і веб перед тим, як надіслати. Інструкції щодо збірки та тестування див. у [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Повідомлення про помилки:** Створіть запит на GitHub ([https://github.com/wsj-br/transrewrt/issues](https://github.com/wsj-br/transrewrt/issues)). Вкажіть платформу (Windows / Linux / Docker) та версію програми (показана у діалозі «Про програму» або на сторінці випусків).

<br/><br/>

<a id="disclaimer"></a>
## Попередження

Назви продуктів та іконки належать їх власникам і використовуються виключно з метою ідентифікації. Цей програмний продукт не пов'язаний із зазначеними брендами і не підтримується ними.

<br/><br/>

<a id="license"></a>
## Ліцензія

Право власності © 2026 Вальдемар Скуделлер молодший.

[Ліцензія Apache 2.0](LICENSE)