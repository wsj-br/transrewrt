---
translated_at: "2026-03-24T02:50:56.435Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Логотип Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Версия"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Лицензия: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Платформа">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Инструмент для обработки текста на основе ИИ: перевод между языками, переписывание в разных стилях и преобразование с помощью пользовательских запросов — с использованием нескольких поставщиков ИИ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI и локальный Ollama). Работает как настольное приложение (Electron) или как размещённое локально веб-приложение (Docker).

- **Перевод** — между десятками языков, с автоматическим определением исходного языка
- **Переписывание** — исправление грамматики, улучшение ясности, формальный/неформальный стиль, сокращение, расширение, технический стиль
- **Преобразование** — пользовательские запросы к ИИ; создание и управление запросами, необязательный целевой язык для каждого запроса
- **История** — полная история операций с текстами ввода/вывода, фильтрация и экспорт
- **Модели и стоимость** — выбор моделей от любого настроенного поставщика; панель учёта расходов с логом SQLite, сводки по моделям/операциям/дням
- **Интерфейс** — интерфейс на нескольких языках (30+ языков, поддержка RTL), шрифты, ...
- **Веб-режим** — поддержка нескольких пользователей с административными ролями; ключи API остаются на сервере и не передаются в браузер
- **Настольное приложение** — приложение Electron для Windows и Linux
- **Размещение на своём сервере** — образ Docker для amd64 и arm64 (готов к использованию на Raspberry Pi)

После установки ознакомьтесь с **[Руководством пользователя](USER-GUIDE.ru.md)**, чтобы узнать обо всех возможностях.

<small>**Читать на других языках:** [English (UK)](README.ru.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**Примечание по переводу интерфейса и документации:** Все языковые версии интерфейса, кроме английского (UK), переведены с помощью моделей ИИ; формулировки могут быть неточными или содержать ошибки.

<br/><br/>

<a id="screenshots"></a>
## Снимки экрана

**Выбор языка**

![Выбор языка](../images/screenshots/ru/language-selector.png)

**Перевод**

![Перевод](../images/screenshots/ru/translate.png)

**Преобразование — редактор запросов**

![Преобразование — редактор запросов](../images/screenshots/ru/transform-prompt-edit.png)

**Информационная панель**

![Панель учёта расходов](../images/screenshots/ru/dashboard-summary.png)

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
- [Получение API-ключа OpenRouter](#getting-an-openrouter-api-key)
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

**Docker (рекомендуется для самостоятельного хостинга)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Замените `sk-or-your-key` на ваш [ключ API OpenRouter](https://openrouter.ai/keys) (или укажите ключи других провайдеров; см. [Конфигурация](#configuration-and-environment)). Откройте [http://localhost:5000](http://localhost:5000) и измените пароль администратора по умолчанию до того, как открывать сервис в сеть.

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> В Docker-контейнере учётные данные ИИ передаются через переменные окружения, такие как `OPENROUTER_KEY`, `OPENAI_KEY`, … (а не через веб-интерфейс). На настольной версии (Electron) ключи настраиваются в разделе **Настройки → API**.

<br/>

**Windows**

Скачайте последний установщик `Transrewrt Setup x.y.z.exe` из раздела [Releases](https://github.com/wsj-br/transrewrt/releases), запустите установку, затем запустите приложение через меню «Пуск» или ярлык на рабочем столе. Введите свои API-ключи в разделе **Настройки → API**. Необходимо настроить хотя бы одного провайдера; OpenRouter часто используется для бесплатных моделей.

<br/>

**Linux**

Скачайте файл `.AppImage` из [Releases](https://github.com/wsj-br/transrewrt/releases), после чего выполните:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Введите свои API-ключи в разделе **Настройки → API**. Необходимо настроить хотя бы одного провайдера; OpenRouter часто используется для бесплатных моделей.

В Debian/Ubuntu может потребоваться сначала установить дополнительные зависимости:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Подробности см. в разделе [Установка → Linux](#linux-electron).

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> macOS на данный момент не поддерживается. Transrewrt доступен для Windows, Linux и Docker.

<br/>

После запуска приложения ознакомьтесь с **[Руководством пользователя](USER-GUIDE.ru.md)**, чтобы узнать, как переводить, переписывать и преобразовывать тексты, управлять шаблонами и настраивать модели.

<br/><br/>

<a id="installation"></a>
## Установка

<a id="windows-electron"></a>
### Windows (Electron)

- Скачайте последний установщик из раздела [Releases](https://github.com/wsj-br/transrewrt/releases).
- Запустите файл `.exe` и следуйте инструкциям установщика.
- При первом запуске: запустите приложение через меню «Пуск» или ярлык на рабочем столе.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Скачайте файл `.AppImage` из раздела [Releases](https://github.com/wsj-br/transrewrt/releases).
- Запустите: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Дополнительные зависимости (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Подробнее см. в [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Скачайте образ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Установите ключ хотя бы одного провайдера через переменные окружения (например, `OPENROUTER_KEY` для OpenRouter). Передавайте переменные через флаг `-e` или используйте `docker compose` / `.env`, чтобы ключи не были вшиты в образ.
- Ключи провайдеров **не вводятся** в веб-интерфейсе; сервер считывает их из переменных окружения.

Пример — именованный том для сохранения данных (ключ OpenRouter через переменную окружения):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Опция     | Описание                                                                                                   |
|----------|-------------------------------------------------------------------------------------------------------------|
| Порт     | `5000` (пробросьте через `-p 5000:5000`)                                                                     |
| Том      | Подключите `/app/data`, чтобы сохранять конфигурацию и базу данных                                           |
| Переменные окружения | `PORT`, `CONFIG_PATH`, а также ключи LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) — см. [Конфигурация](#configuration-and-environment) |

Для сборки и запуска из исходников: `docker compose up --build -d` или `pnpm docker:up` — подробности см. в [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Получение API-ключа OpenRouter

Transrewrt поддерживает несколько поставщиков ИИ. [OpenRouter](https://openrouter.ai) — популярный вариант, поскольку он объединяет множество моделей под одним ключом и предлагает бесплатные модели.

1. Зарегистрируйтесь или войдите на [openrouter.ai](https://openrouter.ai).
2. Перейдите на страницу [Keys](https://openrouter.ai/keys) и создайте новый ключ (укажите имя, при желании задайте лимит кредитов). Вы можете использовать бесплатные модели, не пополняя баланс.
3. **Десктоп (Electron):** вставьте ключи в **Настройки → API**. **Docker:** устанавливайте переменные окружения, такие как `OPENROUTER_KEY` (см. [Быстрый старт](#quick-start)).

Вы также можете использовать других провайдеров (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) или запускать модели локально с помощью [Ollama](https://ollama.com). Полный список поддерживаемых провайдеров и переменных окружения смотрите в разделе [Настройка](#configuration-and-environment).

Подробнее о лимитах, BYOK (Bring Your Own Key) и других функциях — в документации [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Настройка и окружение

**Расположение конфигурационных файлов**

| Развертывание      | Расположение конфига                              |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Веб / Docker       | `/app/data/config.json` (используйте том для сохранения данных) |

<br/>

**Переменные окружения** (только для веб/Docker; в Electron используется локальный конфигурационный файл)

| Переменная         | По умолчанию             | Описание |
| ------------------ | ------------------------ | -------- |
| `PORT`             | `5000`                   | Порт, на котором запускается сервер |
| `CONFIG_PATH`      | `/app/data/config.json`  | Путь к файлу конфигурации |
| `OPENROUTER_KEY`   | *(пусто)*                | Ключ API OpenRouter |
| `OPENAI_KEY`       | *(пусто)*                | Ключ API OpenAI |
| `ANTHROPIC_KEY`    | *(пусто)*                | Ключ API Anthropic |
| `GOOGLE_KEY`       | *(пусто)*                | Ключ API Google Gemini |
| `DEEPSEEK_KEY`     | *(пусто)*                | Ключ API DeepSeek |
| `GROQ_KEY`         | *(пусто)*                | Ключ API Groq |
| `MISTRAL_KEY`      | *(пусто)*                | Ключ API Mistral |
| `OLLAMA_URL`       | *(пусто)*                | Базовый URL Ollama (напр., `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(пусто)*                | Ключ API xAI |

Настройте только тех поставщиков, которых вы используете. Идентификаторы моделей имеют пространства имён (`openrouter/…`, `openai/…`, `ollama/…` и т.д.).

**Отображение стоимости:** OpenRouter возвращает точную стоимость при её наличии. Другие провайдеры используют **оценочную** стоимость на основе публичных цен OpenRouter, если ключ OpenRouter задан; в противном случае, стоимость не-OpenRouter может отображаться как `0`. Оценочные значения — не счёт.

<br/>

**Данные и сохраняемость:** Для Docker рекомендуется монтировать том в `/app/data`, чтобы файл `config.json` и база данных SQLite сохранялись при перезапуске контейнера. Без тома все данные будут утеряны после остановки контейнера.

**Разработчикам:** После обновления кода, заменяющего старую конфигурацию с одним ключом, сбросьте или объедините `data/config.json` с новой структурой по умолчанию из `src/config-defaults/config_default.json`, если ваш локальный файл всё ещё использует удалённые поля (`api_key`, `api_url`, параметры прокси).

<br/>

**Аутентификация в веб-интерфейсе:**

- Учётная запись администратора по умолчанию: `admin` / `transrewrt26`.
- Управление пользователями: **Настройки → Пользователи**.
- Сброс пароля: `docker exec <контейнер> reset-web-password '<имя пользователя>' '<новый пароль>'`  
  (из исходников: `pnpm run reset-web-password -- <имя пользователя> <новый пароль>`)

<br/>

> ⚠️ **ВНИМАНИЕ**<br/>
> Немедленно измените пароль администратора по умолчанию на любом хосте, доступном в сети.

<br/>

Основные настройки (шрифт, модели, языки и т.д.) доступны в разделе Настройки приложения.

<br/><br/>

<a id="development-and-architecture"></a>
## Разработка и архитектура

- **Разработка:** Настройка, сборка, тестирование и развертывание (Electron, Веб, Docker) — см. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Архитектура и общая схема системы:** Структура папок, технологический стек, решения по проектированию — см. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Выпуски и теги

- **Теги Git** `v`* (например, `v1.0.10`) запускают [рабочий процесс выпуска](.github/workflows/release.yml). **Релизы на GitHub** включают установщик для Windows (`.exe`) и Linux AppImage.
- **Образы Docker** публикуются в `ghcr.io/wsj-br/transrewrt`. Теги образов соответствуют версии Git (например, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), а также есть тег `latest`. Поддерживается несколько архитектур: `linux/amd64` и `linux/arm64` (например, для Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Участие в проекте

1. Создайте форк репозитория.
2. Создайте новую ветку для функциональности: `git checkout -b feature/my-feature`
3. Зафиксируйте изменения с понятным сообщением.
4. Выгрузите изменения и создайте Pull Request в ветку `main`.

Пожалуйста, соблюдайте принятый стиль кода и протестируйте свои изменения в обоих режимах — Electron и веб-режиме — перед отправкой. Инструкции по сборке и тестированию смотрите в файле [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Сообщение об ошибках:** создайте задачу на [GitHub](https://github.com/wsj-br/transrewrt/issues). Укажите вашу платформу (Windows / Linux / Docker) и версию приложения (указана в окне «О программе» или на странице релизов).

<br/><br/>

<a id="disclaimer"></a>
## Отказ от ответственности

Названия продуктов и иконки принадлежат их законным владельцам и используются исключительно в целях идентификации. Данное программное обеспечение не связано и не поддерживается никакими из упомянутых брендов.

<br/><br/>

<a id="license"></a>
## Лицензия

Copyright © 2026 Уолдемар Скуделлер-младший.

[Лицензия Apache 2.0](LICENSE)