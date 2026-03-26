---
translated_at: "2026-03-26T00:55:48.095Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
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

Инструмент для обработки текста с ИИ: перевод между языками, переформулировка в разных стилях и преобразование с помощью пользовательских запросов — с использованием нескольких поставщиков ИИ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI и локальный Ollama). Запускается как десктопное приложение (Electron) или как веб-приложение для самостоятельного размещения (Docker).

- **Перевод** — между десятками языков с автоматическим определением исходного языка
- **Переформулировка** — исправление грамматики, улучшение ясности, формальный/неформальный стиль, сокращение, расширение, технический стиль
- **Преобразование** — пользовательские запросы к ИИ; создание и управление запросами, возможность указать целевой язык для каждого запроса
- **История** — полная история выполнения с сохранением входного и выходного текста, фильтрация и экспорт
- **Модели и расходы** — выбор моделей от любого настроенного поставщика; дашборды расходов и использования с журналом, сводками по моделям/операциям/дням
- **Интерфейс** — поддержка нескольких языков интерфейса (30+ языков, включая RTL), шрифты и др.
- **Веб-режим** — поддержка нескольких пользователей с ролями администратора
- **Десктоп** — приложение Electron для Windows и Linux
- **Собственное размещение** — образ Docker для amd64 и arm64 (готов к использованию на Raspberry Pi)

После установки ознакомьтесь с **[Руководством пользователя](USER-GUIDE.ru.md)**, в котором подробно описаны все функции.

<small>**Читать на других языках:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Примечание о переводах интерфейса и документации:** Все языки интерфейса, кроме оригинального английского (UK),
> переведены с использованием моделей ИИ; формулировки могут быть неточными или содержать ошибки.

</small>

<br/>

<a id="screenshots"></a>
## Скриншоты

**Выбор языка**

![Выбор языка](../images/screenshots/ru/language-selector.png)

**Перевод**

![Перевод](../images/screenshots/ru/translate.png)

**Преобразование — редактор запросов**

![Преобразование — редактор запросов](../images/screenshots/ru/transform-prompt-edit.png)

**Информационная панель**

![Информационная панель расходов](../images/screenshots/ru/dashboard-summary.png)

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

Замените `sk-or-your-key` на ваш [ключ API OpenRouter](https://openrouter.ai/keys) (или укажите ключи других провайдеров; см. [Конфигурация](#configuration-and-environment)). Откройте [http://localhost:5000](http://localhost:5000) и измените пароль администратора по умолчанию перед публикацией сервиса.

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> В Docker учетные данные LLM задаются с помощью переменных окружения, таких как `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (не в веб-интерфейсе). В настольной версии (Electron) вы настраиваете ключи в разделе **Настройки → API**.

<br/>

**Windows**

Скачайте последний `Transrewrt Setup x.y.z.exe` из раздела [Выпуски](https://github.com/wsj-br/transrewrt/releases), запустите установщик, затем запустите приложение через меню "Пуск" или ярлык на рабочем столе. Введите свои ключи API в разделе **Настройки → API**. Необходимо настроить, по крайней мере, одного провайдера; OpenRouter используется для бесплатных моделей.

<br/>

**Linux**

Скачайте подходящий `.AppImage` для вашего процессора из раздела [Выпуски](https://github.com/wsj-br/transrewrt/releases) (`x64` для обычных ПК, `arm64` для большинства ARM-устройств, включая Raspberry Pi 4+), затем:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введите свои ключи API в разделе **Настройки → API**. Необходимо настроить, по крайней мере, одного провайдера; OpenRouter используется для бесплатных моделей.

В Debian/Ubuntu сначала могут потребоваться дополнительные зависимости:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Подробности см. в разделе [Установка → Linux](#linux-electron).

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> macOS в настоящее время не поддерживается. Transrewrt доступна для Windows, Linux и Docker.

<br/>

После запуска приложения прочитайте **[Руководство пользователя](USER-GUIDE.ru.md)**, чтобы узнать, как переводить, переписывать и преобразовывать текст, управлять подсказками и настраивать модели.

<br/><br/>

<a id="installation"></a>
## Установка

<a id="windows-electron"></a>
### Windows (Electron)

- Скачайте последний установщик из раздела [Выпуски](https://github.com/wsj-br/transrewrt/releases).
- Запустите файл `.exe` и следуйте инструкциям установщика.
- При первом запуске: запустите приложение из меню "Пуск" или через ярлык на рабочем столе.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Скачайте соответствующий `.AppImage` (`x64` или `arm64`) из раздела [Выпуски](https://github.com/wsj-br/transrewrt/releases).
- Запустите: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` на x86_64/amd64 или используйте файл `...-arm64.AppImage` на ARM64.
- Дополнительные зависимости (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Дополнительная информация в [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Загрузите: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Установите хотя бы один ключ провайдера через переменные окружения (например, `OPENROUTER_KEY` для OpenRouter). Передавайте переменные с помощью `-e` или `docker compose` / `.env`, чтобы секреты не внедрялись в образ.
- Ключи провайдеров **не** вводятся в веб-интерфейсе; сервер считывает их из окружения.

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

| Параметр   | Описание                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Порт     | `5000` (откройте через `-p 5000:5000`)                                                                              |
| Том      | Смонтируйте `/app/data` для сохранения настроек и базы данных                                                         |
| Переменные среды | `PORT`, `CONFIG_PATH`, а также ключи LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) — см. [Конфигурация](#configuration-and-environment) |

Чтобы собрать и запустить из исходников: `docker compose up --build -d` или `pnpm docker:up` — см. [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Получение API-ключа OpenRouter

Transrewrt поддерживает несколько поставщиков ИИ. [OpenRouter](https://openrouter.ai) — популярный выбор, поскольку объединяет множество моделей под одним ключом и предоставляет бесплатные модели.

1. Зарегистрируйтесь или войдите на сайте [openrouter.ai](https://openrouter.ai).
2. Перейдите на страницу [Keys](https://openrouter.ai/keys) и создайте новый ключ (укажите имя и при необходимости установите лимит средств). Вы можете использовать бесплатные модели без добавления средств.
3. **Десктоп (Electron):** вставьте ключ в разделе **Настройки → API**. **Docker:** задайте переменные окружения, например `OPENROUTER_KEY` (см. [Быстрый старт](#quick-start)).

Не используйте модель **Body Builder** от OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) для перевода, переписывания или преобразования текста: она возвращает JSON-тела запросов, а не готовый текст. Подробнее см. в разделе [Настройки → Модели](USER-GUIDE.ru.md#models) Руководства пользователя.

Вы также можете подключить других поставщиков (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) или запускать модели локально с помощью [Ollama](https://ollama.com). Полный список поддерживаемых провайдеров и переменных окружения см. в разделе [Конфигурация](#configuration-and-environment).

> ⚠️ **ПРЕДУПРЕЖДЕНИЕ**<br/>
> Если вы используете Ollama с другого устройства, контейнера или сервиса, настройте Ollama так, чтобы разрешить внешние подключения (не только localhost).

Дополнительная информация по ограничениям, BYOK и другим параметрам — в [документации по аутентификации OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Конфигурация и переменные окружения

**Расположение конфигурационных файлов**

| Развертывание       | Расположение конфига                                  |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Веб / Docker       | `/app/data/config.json` (используйте volume для сохранения данных) |

<br/>

**Переменные окружения** (только для веб / Docker; Electron использует локальный конфигурационный файл)

| Переменная         | По умолчанию            | Описание |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Порт, на котором работает сервер |
| `CONFIG_PATH`    | `/app/data/config.json` | Путь к файлу конфигурации |
| `OPENROUTER_KEY` | *(пусто)*               | Ключ API OpenRouter |
| `OPENAI_KEY`     | *(пусто)*               | Ключ API OpenAI |
| `CEREBRAS_KEY`   | *(пусто)*               | Ключ API Cerebras |
| `ANTHROPIC_KEY`  | *(пусто)*               | Ключ API Anthropic |
| `GOOGLE_KEY`     | *(пусто)*               | Ключ API Google Gemini |
| `DEEPSEEK_KEY`   | *(пусто)*               | Ключ API DeepSeek |
| `GROQ_KEY`       | *(пусто)*               | Ключ API Groq |
| `MISTRAL_KEY`    | *(пусто)*               | Ключ API Mistral |
| `OLLAMA_URL`     | *(пусто)*               | Базовый URL Ollama (например, `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(пусто)*               | Ключ API xAI |

Настройте только тех провайдеров, которых вы планируете использовать. Идентификаторы моделей пространственны-именованы (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` и т. д.).

**Отображение стоимости:** OpenRouter возвращает точную стоимость при наличии таковой. Для других провайдеров используется **оценочная** стоимость на основе публичных цен OpenRouter, если доступен ключ OpenRouter; при его отсутствии стоимость может отображаться как `0`. Оценки не являются счетами.

<br/>

**Данные и сохранение:** Для Docker смонтируйте volume в `/app/data`, чтобы файл `config.json` и SQLite-база данных сохранились при перезапуске контейнера. Без volume все данные будут утеряны после остановки контейнера.

**Разработчикам:** после обновления из репозитория, изменяющего старую конфигурацию с одним ключом, сбросьте или объедините `data/config.json` с новой версией по умолчанию из `src/config-defaults/config_default.json`, если ваш локальный файл все ещё использует удалённые поля (`api_key`, `api_url`, параметры прокси).

<br/>

**Веб-аутентификация:**

- Администратор по умолчанию: `admin` / `transrewrt26`.
- Управление пользователями в разделе **Настройки → Пользователи**.
- Сброс пароля: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (из исходников: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ПРЕДУПРЕЖДЕНИЕ**<br/>
> Немедленно измените пароль администратора по умолчанию на любом хосте, доступном в сети.

<br/>

Основные настройки (шрифт, модели, языки и др.) доступны в разделе Настройки приложения.

<br/><br/>

<a id="development-and-architecture"></a>

## Разработка и архитектура

- **Разработка:** Настройка, сборка, тестирование и развёртывание (Electron, Web, Docker) — смотрите **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Архитектура и обзор системы:** Структура папок, технологический стек, принятые архитектурные решения — смотрите **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Релизы и теги

- **Git-теги** `v`* (например, `v1.0.10`) запускают [workflow релиза](.github/workflows/release.yml). **Релизы на GitHub** содержат установщик для Windows (`.exe`) и AppImages для Linux (**x64** и **arm64**).
- **Docker-образы** публикуются в `ghcr.io/wsj-br/transrewrt`. Теги образов совпадают с версией Git (например, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), а также используется тег `latest`. Мультиплатформенная поддержка: `linux/amd64` и `linux/arm64` (например, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Участие в проекте

1. Создайте форк репозитория.
2. Создайте ветку для новой функции: `git checkout -b feature/my-feature`
3. Сделайте коммит с понятным сообщением.
4. Выгрузите изменения и создайте запрос на слияние (Pull Request) в ветку `main`.

Следуйте принятому стилю кода и обязательно протестируйте изменения в режимах Electron и веб-приложения перед отправкой. Инструкции по сборке и тестированию смотрите в [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Сообщение об ошибках:** Откройте обращение на [GitHub](https://github.com/wsj-br/transrewrt/issues). Укажите вашу платформу (Windows / Linux / Docker) и версию приложения (отображается в окне «О программе» или на странице релизов).

<br/><br/>

<a id="disclaimer"></a>
## Отказ от ответственности

Названия продуктов и значки принадлежат их соответствующим владельцам и используются исключительно в целях идентификации. Данное программное обеспечение не связано и не поддерживается брендами, упомянутыми в проекте.

<br/><br/>

<a id="license"></a>
## Лицензия

Авторское право © 2026 Вальдемар Скудельер мл.

[Лицензия Apache 2.0](LICENSE)