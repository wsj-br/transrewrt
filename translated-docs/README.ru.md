---
translated_at: "2026-03-25T22:26:29.210Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
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

Инструмент для обработки текста на основе ИИ: перевод между языками, переписывание в разных стилях и преобразование с помощью пользовательских запросов — с использованием нескольких поставщиков ИИ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI и локальный Ollama). Работает как десктопное приложение (Electron) или как самохостинговое веб-приложение (Docker).

- **Перевод** — между десятками языков с автоматическим определением исходного
- **Переписывание** — исправление грамматики, повышение ясности, формальный/неформальный стиль, сокращение, расширение, технические тексты
- **Преобразование** — пользовательские запросы к ИИ; создание и управление запросами, опциональный целевой язык для каждого запроса
- **История** — полная история операций с текстом на входе и выходе, фильтрация и экспорт
- **Модели и расходы** — выбор моделей у любого настроенного провайдера; панели учёта расходов и использования с логами, сводками по моделям/операциям/дням
- **Интерфейс** — интерфейс на нескольких языках (30+ языков, поддержка RTL), шрифты, ...
- **Веб-режим** — поддержка нескольких пользователей с административными ролями
- **Десктоп** — приложение Electron для Windows и Linux
- **Самохостинг** — образ Docker для amd64 и arm64 (готов к работе на Raspberry Pi)

После установки ознакомьтесь с **[Руководством пользователя](USER-GUIDE.ru.md)** — подробное описание всех функций.

<small>**Читать на других языках:** [English (UK)](README.ru.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Примечание о переводах интерфейса и документации:** Все языки интерфейса, кроме исходного английского (UK), 
> переведены с помощью моделей ИИ; формулировки могут быть неточными или содержать ошибки.

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

**Информационная панель**

![Панель расходов](../images/screenshots/ru/dashboard-summary.png)

**История**

![История](../images/screenshots/ru/history.png)

**Настройки — выбор моделей**

![Настройки — выбор моделей](../images/screenshots/ru/settings-models.png)

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
- [Получение ключа API OpenRouter](#getting-an-openrouter-api-key)
- [Конфигурация и окружение](#configuration-and-environment)
- [Разработка и архитектура](#development-and-architecture)
- [Выпуски и теги](#releases-and-tags)
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

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Замените `sk-or-your-key` на ваш [ключ API OpenRouter](https://openrouter.ai/keys) (или укажите ключи других провайдеров; см. [Конфигурация](#configuration-and-environment)). Откройте [http://localhost:5000](http://localhost:5000) и смените пароль администратора по умолчанию перед публичным использованием сервиса.

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> В Docker-контейнере учётные данные LLM-моделей задаются через переменные среды, такие как `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (не через веб-интерфейс). На ПК (Electron) задавать ключи нужно в разделе **Настройки → API**.

<br/>

**Windows**

Скачайте последний `Transrewrt Setup x.y.z.exe` из раздела [Releases](https://github.com/wsj-br/transrewrt/releases), установите с помощью установщика, затем запустите из меню «Пуск» или через ярлык на рабочем столе. Введите свои API-ключи в разделе **Настройки → API**. Необходимо настроить хотя бы одного поставщика, OpenRouter — популярный вариант для бесплатных моделей.

<br/>

**Linux**

Скачайте `.AppImage` версию под ваш процессор из раздела [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` для обычных ПК, `arm64` для многих ARM-устройств, включая Raspberry Pi 4+), затем выполните:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введите свои API-ключи в разделе **Настройки → API**. Необходимо настроить хотя бы одного поставщика; OpenRouter — популярный вариант для бесплатных моделей.

В Debian/Ubuntu может потребоваться сначала установить дополнительные зависимости:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Подробности см. в разделе [Установка → Linux](#linux-electron).

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> macOS в данный момент не поддерживается. Transrewrt доступен для Windows, Linux и Docker.

<br/>

После запуска приложения ознакомьтесь с документом **[Руководство пользователя](USER-GUIDE.ru.md)**, чтобы узнать, как переводить, переписывать и преобразовывать текст, управлять шаблонами и настраивать модели.

<br/><br/>

<a id="installation"></a>
## Установка

<a id="windows-electron"></a>
### Windows (Electron)

- Скачайте последний установщик из раздела [Releases](https://github.com/wsj-br/transrewrt/releases).
- Запустите `.exe` файл и следуйте инструкциям установщика.
- При первом запуске: запустите приложение через меню «Пуск» или ярлык на рабочем столе.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Скачайте подходящий `.AppImage` (`x64` или `arm64`) из раздела [Releases](https://github.com/wsj-br/transrewrt/releases).
- Запустите: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` на x86_64/amd64 или используйте файл `...-arm64.AppImage` на ARM64.
- Дополнительные зависимости (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- См. подробнее [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Загрузите образ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Задайте хотя бы один ключ поставщика через переменные окружения (например, `OPENROUTER_KEY` для OpenRouter). Передавайте переменные через `-e` или `docker compose` / `.env`, чтобы секреты не сохранялись внутри образа.
- API-ключи **не вводятся** через веб-интерфейс; сервер читает их из окружения.

Пример: именованный том для сохранения данных (ключ OpenRouter через переменную окружения):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Параметр   | Описание                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Порт     | `5000` (настроить через `-p 5000:5000`)                                                                              |
| Том      | Смонтируйте `/app/data` для сохранения настроек и базы данных                                                         |
| Переменные окружения | `PORT`, `CONFIG_PATH`, а также ключи LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) — см. [Конфигурация](#configuration-and-environment) |

Для сборки и запуска из исходников: `docker compose up --build -d` или `pnpm docker:up` — см. [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Получение API-ключа OpenRouter

Transrewrt поддерживает несколько провайдеров ИИ. [OpenRouter](https://openrouter.ai) — популярный выбор, так как он объединяет множество моделей под одним ключом и предлагает бесплатные модели.

1. Зарегистрируйтесь или войдите на сайт [openrouter.ai](https://openrouter.ai).
2. Перейдите на страницу [Keys](https://openrouter.ai/keys) и создайте новый ключ (укажите имя, при желании установите лимит средств). Для использования бесплатных моделей добавление средств не требуется.
3. **Десктоп (Electron):** вставьте ключи в разделе **Настройки → API**. **Docker:** устанавливайте переменные окружения, например `OPENROUTER_KEY` (см. [Быстрый старт](#quick-start)).

Не используйте модель **Body Builder** от OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) для перевода, переписывания или преобразования текста: она возвращает JSON-данные запроса, а не готовый текст. См. [Настройки → Модели](USER-GUIDE.ru.md#models) в Руководстве пользователя.

Вы также можете использовать других провайдеров (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) или запускать модели локально с помощью [Ollama](https://ollama.com). Полный список поддерживаемых провайдеров и переменных окружения смотрите в разделе [Конфигурация](#configuration-and-environment).

> ⚠️ **ВНИМАНИЕ**<br/>
> Если вы используете Ollama с другого устройства, контейнера или службы, не забудьте настроить Ollama на разрешение внешних подключений (а не только localhost).

Дополнительную информацию о лимитах, BYOK и другом смотрите в разделе [Аутентификация OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Конфигурация и окружение

**Расположение конфигурационных файлов**

| Развертывание      | Расположение конфигурации                         |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Веб / Docker       | `/app/data/config.json` (используйте том для сохранения) |

<br/>

**Переменные окружения** (только для веб / Docker; в Electron используется локальный конфигурационный файл)

| Переменная         | По умолчанию            | Описание |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Порт, на котором запускается сервер |
| `CONFIG_PATH`    | `/app/data/config.json` | Путь к конфигурационному файлу |
| `OPENROUTER_KEY` | *(пусто)*               | API-ключ OpenRouter |
| `OPENAI_KEY`     | *(пусто)*               | API-ключ OpenAI |
| `CEREBRAS_KEY`   | *(пусто)*               | API-ключ Cerebras |
| `ANTHROPIC_KEY`  | *(пусто)*               | API-ключ Anthropic |
| `GOOGLE_KEY`     | *(пусто)*               | API-ключ Google Gemini |
| `DEEPSEEK_KEY`   | *(пусто)*               | API-ключ DeepSeek |
| `GROQ_KEY`       | *(пусто)*               | API-ключ Groq |
| `MISTRAL_KEY`    | *(пусто)*               | API-ключ Mistral |
| `OLLAMA_URL`     | *(пусто)*               | Базовый URL Ollama (например, `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(пусто)*               | API-ключ xAI |

Настраивайте только тех провайдеров, которых вы используете. Идентификаторы моделей имеют пространство имён (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` и т.д.).

**Отображение стоимости:** OpenRouter возвращает точную фактическую стоимость при наличии данных. Другие провайдеры используют **оценочную** стоимость, основанную на публичных тарифах OpenRouter, если доступен ключ OpenRouter; в противном случае стоимость для не-OpenRouter может отображаться как `0`. Оценки не являются счетами.

<br/>

**Данные и сохранение:** Для Docker смонтируйте том в директорию `/app/data`, чтобы файл `config.json` и база данных SQLite сохранялись при перезапуске контейнера. Без тома все данные будут утеряны после остановки контейнера.

**Разработчикам:** После обновления, в котором заменяется старая конфигурация с одним ключом, сбросьте или объедините `data/config.json` с новой структурой по умолчанию из `src/config-defaults/config_default.json`, если в вашем локальном файле всё ещё используются удалённые поля (`api_key`, `api_url`, параметры прокси).

<br/>

**Веб-аутентификация:**

- Администратор по умолчанию: `admin` / `transrewrt26`.
- Управление пользователями: **Настройки → Пользователи**.
- Сброс пароля: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (из исходников: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ВНИМАНИЕ**<br/>
> Немедленно измените пароль администратора по умолчанию на любом хосте, доступном в сети.

<br/>

Основные настройки (шрифт, модели, языки и т.д.) доступны в разделе Настройки приложения.

<br/><br/>

<a id="development-and-architecture"></a>

## Разработка и архитектура

- **Разработка:** Настройка, сборка, тестирование и развёртывание (Electron, Web, Docker) — см. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Архитектура и обзор системы:** Структура папок, технологический стек, принятые проектные решения — см. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Релизы и теги

- **Git-теги** `v`* (например, `v1.0.10`) запускают [рабочий процесс релиза](.github/workflows/release.yml). **GitHub Releases** содержат установщик для Windows (`.exe`) и Linux AppImages (**x64** и **arm64**).
- **Docker-образы** публикуются в `ghcr.io/wsj-br/transrewrt`. Теги образов соответствуют версии Git (например, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), а также доступны с тегом `latest`. Мультиархитектурные: `linux/amd64` и `linux/arm64` (например, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Участие в проекте

1. Создайте форк репозитория.
2. Создайте новую ветку для функциональности: `git checkout -b feature/my-feature`.
3. Зафиксируйте изменения с понятным сообщением.
4. Загрузите изменения и создайте запрос на включение (Pull Request) в ветку `main`.

Пожалуйста, придерживайтесь существующего стиля кода и тестируйте изменения в режимах Electron и веб-приложения перед отправкой. Подробные инструкции по сборке и тестированию см. в [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Сообщение об ошибках:** Создайте запрос на [GitHub](https://github.com/wsj-br/transrewrt/issues). Укажите платформу (Windows / Linux / Docker) и версию приложения (указана в диалоге «О программе» или на странице релизов).

<br/><br/>

<a id="disclaimer"></a>
## Отказ от ответственности

Названия продуктов и иконки принадлежат их законным владельцам и используются исключительно в целях идентификации. Данное программное обеспечение не связано и не поддерживается какими-либо из упомянутых брендов.

<br/><br/>

<a id="license"></a>
## Лицензия

Авторское право © 2026 Вальдемар Скуделлер мл.

[Лицензия Apache 2.0](LICENSE)