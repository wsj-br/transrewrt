---
translated_at: "2026-03-27T23:03:41.798Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Логотип Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Версия"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Лицензия: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Платформа">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Инструмент для работы с текстами на базе ИИ: перевод между языками, переписывание в различных стилях и преобразование по пользовательским запросам — с использованием нескольких провайдеров ИИ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI и локальный Ollama). Работает как десктопное приложение (Electron) или как веб-приложение на собственном хосте (Docker).

- **Перевод** — между десятками языков с автоматическим определением исходного
- **Переписывание** — исправление грамматики, улучшение чёткости, формальный/неформальный стиль, сокращение, расширение, технический стиль
- **Преобразование** — пользовательские запросы ИИ; создание и управление запросами, опциональный язык результата для каждого запроса
- **История** — полная история выполнения с исходным и полученным текстом, фильтрацией и экспортом
- **Модели и затраты** — выбор моделей от любого настроенного провайдера; панели затрат и использования с логами, сводками по моделям/операциям/дням
- **Интерфейс** — интерфейс на нескольких языках (30+ языков, поддержка RTL), шрифты и др.
- **Веб-режим** — поддержка нескольких пользователей с административными ролями
- **Десктоп** — приложение на Electron для Windows и Linux
- **Размещение на своём сервере** — Docker-образ для amd64 и arm64 (готов к работе на Raspberry Pi)

После установки прочитайте **[Руководство пользователя](USER-GUIDE.ru.md)**, чтобы ознакомиться со всеми функциями.

<small>**Читать на других языках:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Примечание о переводах интерфейса и документации:** Все языковые версии интерфейса, кроме оригинальной английской (Великобритания),
> были переведены с помощью моделей ИИ; формулировки могут быть неточными или содержать ошибки.

</small>

<br/>

<a id="screenshots"></a>

## Снимки экрана

**Выбор языка**

![Выбор языка](../images/screenshots/ru/language-selector.png)

**Перевод**

![Перевод](../images/screenshots/ru/translate.png)

**Преобразование — редактор запросов**

![Преобразование — редактор запросов](../images/screenshots/ru/transform-prompt-edit.png)

**Панель управления**

![Панель анализа затрат](../images/screenshots/ru/dashboard-summary.png)

**История**

![История](../images/screenshots/ru/history.png)

**Настройки — выбор модели**

![Настройки — выбор модели](../images/screenshots/ru/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Содержание

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Быстрый старт](#quick-start)
- [Установка](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Получение API-ключа OpenRouter](#getting-an-openrouter-api-key)
- [Конфигурация и окружение](#configuration-and-environment)
- [Разработка и архитектура](#development-and-architecture)
- [Выпуски и метки](#releases-and-tags)
- [Участие в проекте](#contributing)
- [Отказ от ответственности](#disclaimer)
- [Лицензия](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Быстрый старт

**Docker (рекомендуется для самостоятельного размещения)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Замените `sk-or-your-key` на ваш [ключ API OpenRouter](https://openrouter.ai/keys) (или установите ключи других провайдеров; см. [Конфигурация](#configuration-and-environment)). Откройте [http://localhost:5000](http://localhost:5000) и измените пароль администратора по умолчанию до публикации сервиса.

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> В Docker учётные данные LLM задаются с помощью переменных окружения, таких как `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (а не в веб-интерфейсе). В настольной версии (Electron) ключи настраиваются в меню **Настройки → API**.

<br/>

**Windows**

Скачайте последний файл `Transrewrt Setup x.y.z.exe` со страницы [Releases](https://github.com/wsj-br/transrewrt/releases), запустите установщик, затем запустите приложение через меню «Пуск» или ярлык на рабочем столе. Введите свои API-ключи в разделе **Настройки → API**. Необходимо настроить хотя бы одного провайдера; OpenRouter — распространённый выбор для бесплатных моделей.

<br/>

**Linux**

Скачайте `.AppImage`-файл для вашего процессора со страницы [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` для обычных ПК, `arm64` для многих ARM-устройств, включая Raspberry Pi 4+), затем:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введите свои API-ключи в разделе **Настройки → API**. Необходимо настроить хотя бы одного провайдера; OpenRouter — распространённый выбор для бесплатных моделей.

В системах Debian/Ubuntu может потребоваться сначала установить дополнительные зависимости:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Подробности см. в разделе [Установка → Linux](#linux-electron).

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> macOS в настоящее время не поддерживается. Transrewrt доступен для Windows, Linux и Docker.

<br/>

После запуска приложения ознакомьтесь с **[Руководством пользователя](USER-GUIDE.ru.md)**, чтобы узнать, как переводить, переписывать и преобразовывать текст, управлять шаблонами и настраивать модели.

<br/><br/>

<a id="installation"></a>

## Установка

<a id="windows-electron"></a>
### Windows (Electron)

- Скачайте последний установщик из раздела [Releases](https://github.com/wsj-br/transrewrt/releases).
- Запустите `.exe` и следуйте инструкциям установщика.
- Первый запуск: запустите приложение через меню «Пуск» или ярлык на рабочем столе.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Скачайте подходящий `.AppImage` (`x64` или `arm64`) из раздела [Releases](https://github.com/wsj-br/transrewrt/releases).
- Запуск: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` для x86_64/amd64, или используйте файл `...-arm64.AppImage` для ARM64.
- Дополнительные зависимости (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Подробнее см. в [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Загрузите образ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Установите хотя бы один ключ провайдера через переменные окружения (например, `OPENROUTER_API_KEY` для OpenRouter). Передавайте переменные через `-e` или с помощью `docker compose` / `.env`, чтобы секреты не сохранялись в образе.
- Ключи провайдеров **не вводятся** через веб-интерфейс; сервер считывает их из окружения.

Пример — именованный том для постоянного хранения данных (ключ OpenRouter через переменную окружения):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

или, если вы предпочитаете использовать Docker Compose:

# загрузите файл compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# отредактируйте файл, чтобы добавить API-ключи
vi transrewrt.yml
# запустите контейнер
docker compose -f transrewrt.yml up -d
```

<br/>

| Параметр   | Описание                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Порт     | `5000` (сопоставьте с помощью `-p 5000:5000`)                                                                                                       |
| Том   | Подключите `/app/data` для сохранения конфигурации и базы данных                                                                                  |
| Переменные окружения | `PORT`, `CONFIG_PATH`, а также ключи LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) — см. [Конфигурация](#configuration-and-environment) |

Чтобы собрать и запустить из исходников: `docker compose up --build -d` или `pnpm docker:up` — см. [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Получение API-ключа OpenRouter

Transrewrt поддерживает множество провайдеров ИИ. [OpenRouter](https://openrouter.ai) — популярный выбор, поскольку он объединяет множество моделей под одним ключом и предлагает бесплатно используемые модели.

1. Зарегистрируйтесь или войдите на сайте [openrouter.ai](https://openrouter.ai).
2. Перейдите на страницу [Keys](https://openrouter.ai/keys) и создайте новый ключ (укажите имя, при необходимости установите лимит кредитов). Вы можете пользоваться бесплатными моделями, не пополняя баланс.
3. **Десктопная версия (Electron):** вставьте ключи в разделе **Настройки → API**. **Docker:** задайте переменные окружения, например `OPENROUTER_API_KEY` (см. [Быстрый старт](#quick-start)).

Не используйте модель **Body Builder** от OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) для перевода, переписывания или преобразования текста: она возвращает JSON-полезные нагрузки запросов, а не готовый результат для этих задач. См. [Настройки → Модели](USER-GUIDE.ru.md#models) в Руководстве пользователя.

Вы также можете использовать других провайдеров (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) или запускать модели локально с помощью [Ollama](https://ollama.com). Полный список поддерживаемых провайдеров и переменных окружения приведён в разделе [Конфигурация](#configuration-and-environment).

> ⚠️ **ВНИМАНИЕ**<br/>
> Если вы используете Ollama с другого устройства, контейнера или сервиса, не забудьте настроить Ollama на разрешение внешних подключений (а не только с localhost).

За информацией о лимитах, BYOK и другим возможностям обращайтесь к документации: [аутентификация OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Конфигурация и окружение

**Расположение файлов конфигурации**

| Развертывание      | Местоположение конфигурации                      |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Веб / Docker       | `/app/data/config.json` (используйте том для сохранения данных) |

<br/>

**Переменные окружения** (только для веб-версии/Docker; Electron использует локальный файл конфигурации)

| Переменная            | По умолчанию            | Описание |
| --------------------- | ----------------------- | -------- |
| `PORT`                | `5000`                  | Порт, на котором запускается сервер |
| `CONFIG_PATH`         | `/app/data/config.json` | Путь к файлу конфигурации |
| `OPENROUTER_API_KEY`  | *(пусто)*               | Ключ API OpenRouter |
| `OPENAI_API_KEY`      | *(пусто)*               | Ключ API OpenAI |
| `CEREBRAS_API_KEY`    | *(пусто)*               | Ключ API Cerebras |
| `ANTHROPIC_API_KEY`   | *(пусто)*               | Ключ API Anthropic |
| `GOOGLE_API_KEY`      | *(пусто)*               | Ключ API Google Gemini |
| `DEEPSEEK_API_KEY`    | *(пусто)*               | Ключ API DeepSeek |
| `GROQ_API_KEY`        | *(пусто)*               | Ключ API Groq |
| `MISTRAL_API_KEY`     | *(пусто)*               | Ключ API Mistral |
| `OLLAMA_URL`          | *(пусто)*               | Базовый URL Ollama (например, `http://host.docker.internal:11434`) |
| `XAI_API_KEY`         | *(пусто)*               | Ключ API xAI |

Настройте только тех провайдеров, которых вы используете. Идентификаторы моделей пространственные (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` и т.д.).

**Отображение стоимости:** OpenRouter возвращает точную стоимость при наличии такой возможности. Для остальных провайдеров используются **оценочные** значения стоимости на основе публичных цен OpenRouter при наличии ключа OpenRouter; в противном случае стоимость для провайдеров, отличных от OpenRouter, может отображаться как `0`. Оценочные данные не являются счётом.

<br/>

**Данные и сохранение:** При использовании Docker необходимо подключить том по пути `/app/data`, чтобы файл `config.json` и база данных SQLite сохранялись между перезапусками контейнера. Без подключённого тома все данные будут утеряны после остановки контейнера.

**Разработчикам:** После обновления изменений, заменяющих старый одиночный ключ конфигурации, сбросьте или объедините `data/config.json` с новой структурой по умолчанию из `src/config-defaults/config_default.json`, если ваш локальный файл по-прежнему использует удалённые поля (`api_key`, `api_url`, параметры прокси).

<br/>

**Веб-аутентификация:**

- Администратор по умолчанию: `admin` / `transrewrt26`.
- Управление пользователями в разделе **Настройки → Пользователи**.
- Сброс пароля: `docker exec <контейнер> reset-web-password '<имя_пользователя>' '<новый_пароль>'`
  (из исходников: `pnpm run reset-web-password -- <имя_пользователя> <новый_пароль>`)

<br/>

> ⚠️ **ВНИМАНИЕ**<br/>
> Немедленно измените пароль администратора по умолчанию на любом узле, доступном через сеть.

<br/>

Основные настройки (шрифт, модели, языки и т.д.) доступны в настройках приложения.

<br/><br/>

<a id="development-and-architecture"></a>

## Разработка и архитектура

- **Разработка:** Настройка, сборка, тестирование и развёртывание (Electron, Web, Docker) — см. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Архитектура и общая схема системы:** Структура папок, технологический стек, проектные решения — см. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Выпуски и теги

- **Git-теги** `v`* (например, `v1.0.10`) запускают [рабочий процесс выпуска](.github/workflows/release.yml). **GitHub Releases** включают в себя установщик для Windows (`.exe`) и AppImage-образы для Linux (**x64** и **arm64**).
- **Docker-образы** публикуются в `ghcr.io/wsj-br/transrewrt`. Теги образов соответствуют версии Git (например, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) и дополнительно тег `latest`. Поддержка нескольких архитектур: `linux/amd64` и `linux/arm64` (например, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Участие в проекте

1. Сделайте форк репозитория.
2. Создайте ветку для новой функции: `git checkout -b feature/my-feature`
3. Зафиксируйте изменения с понятным описанием.
4. Загрузите изменения и создайте Pull Request в ветку `main`.

Пожалуйста, придерживайтесь существующего стиля кода и протестируйте изменения в режимах Electron и Web перед отправкой. Инструкции по сборке и тестированию см. в файле [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Сообщение об ошибках:** Откройте issue на [GitHub](https://github.com/wsj-br/transrewrt/issues). Укажите вашу платформу (Windows / Linux / Docker) и версию приложения (указана в окне «О программе» или на странице релизов).

<br/><br/>

<a id="disclaimer"></a>

## Отказ от ответственности

Названия продуктов и иконки принадлежат их соответствующим владельцам и используются исключительно в целях идентификации. Данное программное обеспечение не связано и не поддерживается указанными брендами.

<br/><br/>

<a id="license"></a>
## Лицензия

Авторское право © 2026 Waldemar Scudeller Jr.

[Лицензия Apache 2.0](LICENSE)