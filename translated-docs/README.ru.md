---
translated_at: "2026-03-29T01:56:10.074Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Транспбаннер Transrewrt"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Версия"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Лицензия: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Платформа">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Инструмент для обработки текста с использованием ИИ: перевод между языками, перефразирование в различных стилях и преобразование с помощью пользовательских запросов — с применением нескольких поставщиков ИИ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI и локальный Ollama). Может работать как настольное приложение (Electron) или как веб-приложение с самостоятельным размещением (Docker).

- **Перевести** — между десятками языков с автоматическим определением исходного
- **Переформулировать** — исправление грамматики, улучшение ясности, формальный/неформальный стиль, сокращение, расширение, технический текст
- **Преобразовать** — пользовательские подсказки ИИ; создание и управление подсказками, необязательный целевой язык для каждой подсказки
- **История** — полная история выполнения с вводимым и выводимым текстом, фильтрация и экспорт
- **Модели и затраты** — выбор моделей от любого настроенного поставщика; панели управления затратами и использованием с логами, сводками по моделям/операциям/дням
- **Интерфейс** — интерфейс на нескольких языках (более 30, поддержка RTL), шрифты и т.д.
- **Веб-режим** — поддержка нескольких пользователей с административными ролями
- **Приложение для ПК** — приложение Electron для Windows и Linux
- **Самостоятельное размещение** — образ Docker для amd64 и arm64 (готово для Raspberry Pi)

После установки ознакомьтесь с **[Руководством пользователя](USER-GUIDE.ru.md)** для подробного описания всех функций.

<small>**Читать на других языках:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

# TransRewrt

[![Лицензия](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/faraazahmad/transrewrt?include_prereleases)](https://github.com/faraazahmad/transrewrt/releases/latest)
[![Количество загрузок](https://img.shields.io/github/downloads/faraazahmad/transrewrt/total)](https://github.com/faraazahmad/transrewrt/releases)
[![Твит от faraaz_ahmad_](https://img.shields.io/twitter/url?label=%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F&style=social&url=https%3A%2F%2Ftwitter.com%2Ffaraaz_ahmad_%2Fstatus%2F1689974653654986757)](https://twitter.com/faraaz_ahmad_/status/1689974653654986757)

**TransRewrt** — это приложение с открытым исходным кодом, которое переводит и перефразирует тексты с помощью различных языковых моделей. Это помогает создать текст, уникальный для конкретного случая: от переписывания сообщений до генерации идей и написания эссе.

## Демонстрация

[<img src="https://img.youtube.com/vi/9028k0K3HsE/maxresdefault.jpg" width="50%">](https://www.youtube.com/watch?v=9028k0K3HsE)

## Поддерживаемые поставщики

| Поставщик | Перевод | Перефразирование |
| :--- | :---: | :---: |
| [OpenRouter](https://openrouter.ai/?via=transrewrt) | ✅ | ✅ |
| [DeepL](https://www.deepl.com/translator) | ✅ | ❌ |
| [Google Cloud Translation](https://cloud.google.com/translate) | ✅ | ❌ |
| [Yandex Translate](https://yandex.com/translate) | ✅ | ❌ |

> [!NOTE]
> Пожалуйста, учтите, что перефразирование является платной функцией и доступно только через OpenRouter. Вы будете платить только за использование, и не существует ежемесячной подписки. Чтобы начать, посетите [OpenRouter](https://openrouter.ai/), чтобы создать API-ключ.

> [!WARNING]
> В настоящее время доступны не все модели ИИ, которые предлагает OpenRouter. См. список поддерживаемых моделей ниже:

## Поддерживаемые модели ИИ

- AetherNode
- Aleph Alpha
- Alps
- Anthropic
  - Claude
  - **Claude-3**
    - `claude-3-haiku`
    - `claude-3-sonnet`
    - `claude-3-opus`
- Cohere
  - Command
- Google
  - **Gemini**
    - `gemini-pro`
- Hugging Face
- Meta
  - **LLaMA**
    - `llama-2-70b-chat`
  - **LLaMA 3**
    - `llama-3-70b-instruct`
    - `llama-3-8b-instruct`
- Microsoft
  - **Phi-3**
    - `phi-3-medium-128k-instruct`
    - `phi-3-mini-128k-instruct`
    - `phi-3-small-128k-instruct`
- Mistral AI
  - **Mistral**
    - `open-mistral-7b`
  - **Mixtral**
    - `open-mixtral-8x7b`
  - **Mixtral 8x22B**
    - `mistral-8x22b-instruct-2410`
  - **Codestral**
    - `codestral-latest`
  - **Codestral Mamba**
    - `codestral-mamba-latest`
  - **Mistral Large**
    - `mistral-large-latest`
- Nvidia
  - Nemotron
- Perplexity AI
  - **Mithril**
    - `pplx-7b-online`
    - `pplx-70b-online`
  - **Sonar**
    - `sonar-small-chat`
    - `sonar-small-online`
    - `sonar-medium-chat`
    - `sonar-medium-online`
- Pi
- xAI
  - Grok-1
  - **Grok 2**
    - `grok-2-chat-beta`
- Zylon
- 01-ai
  - Yi
    - `yi-large`

## Быстрый старт

### Установка

#### ПК

| Linux | Windows | macOS |
| :--- | :--- | :--- |
| [AppImage](https://github.com/faraazahmad/transrewrt/releases/latest/download/transrewrt-x86_64.AppImage) \| [tar.xz](https://github.com/faraazahmad/transrewrt/releases/latest/download/transrewrt-linux-x64.tar.xz) | [Установщик](https://github.com/faraazahmad/transrewrt/releases/latest/download/transrewrt-setup.exe) \| [zip](https://github.com/faraazahmad/transrewrt/releases/latest/download/transrewrt-win-x64.zip) | [dmg](https://github.com/faraazahmad/transrewrt/releases/latest/download/transrewrt.dmg) \| [zip](https://github.com/faraazahmad/transrewrt/releases/latest/download/transrewrt-macos-x64.zip) |

> [!NOTE]
> Для пользователей macOS. Если приложение не открывается, перейдите в «Настройки» → «Безопасность и конфиденциальность» и нажмите «Все равно открыть».

#### Мобильные устройства

- [APK](https://github.com/faraazahmad/transrewrt/releases/latest/download/transrewrt.apk) | [F-Droid](https://f-droid.org/ru/packages/studio.transrewrt/) | [Google Play](https://play.google.com/store/apps/details?id=studio.transrewrt)

### Установка из исходного кода

1. Установите Node.js, если он ещё не установлен: [Node.js](https://nodejs.org/)
2. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/faraazahmad/transrewrt.git
   ```
3. Перейдите в каталог проекта:
   ```bash
   cd transrewrt
   ```
4. Установите зависимости:
   ```bash
   npm install
   ```
5. Запустите приложение:
   ```bash
   npm start
   ```
   
   Или соберите приложение для своей платформы:
   ```bash
   npm run build
   ```

### Docker

1. Убедитесь, что Docker установлен: [Docker](https://docs.docker.com/get-docker/)
2. Выполните следующую команду для запуска:
   ```bash
   docker run -p 4200:4200 ghcr.io/faraazahmad/transrewrt:latest
   ```

Теперь вы можете получить доступ к приложению по адресу `http://localhost:4200`.

> [!NOTE]
> Если вы используете Apple Silicon, замените `ghcr.io/faraazahmad/transrewrt:latest` на `ghcr.io/faraazahmad/transrewrt:arm64-beta`.
> Вы можете заменить порт `4200` на нужный: `docker run -p <ваш_порт>:4200 ghcr.io/faraazahmad/transrewrt:latest`.

### Electron

[<img src="assets/electron.png" height=30>](https://www.electronjs.org)

Версии для ПК построены на базе Electron, так что вы можете склонировать репозиторий и запустить его, как обычное приложение Electron.

## Разработка

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

### Сборка приложения

```bash
npm run build
```

### Запуск приложения

```bash
npm start
```

## Как это работает?

После ввода исходного текста, языка для перевода и уровня переписывания, приложение сначала переводит текст, а затем перефразирует его. Для перевода текста используются такие инструменты, как DeepL, Google Cloud и Yandex. Для перефразирования используется OpenRouter, который действует как прокси-сервер между приложением и различными поставщиками языковых моделей.

## Статья и руководство

- [Обзор от TechTablet.in](https://techtablet.in/transrewrt-open-source-alternative-to-deepl-write-and-grammarly/)
- [Обслуживание приложения локально – руководство от LogSnail](https://logsnail.medium.com/self-hosting-transrewrt-a-step-by-step-guide-f863f7f79e1b)

## Лицензия

Этот проект распространяется под лицензией MIT — подробности см. в файле [LICENSE](LICENSE).

E.pl.md) · [Португальский (ПТ)](README.pt.md) · [Панджаби](README.pa.md) · [Румынский](README.ro.md) · [Русский](README.ru.md) · [Словацкий](README.sk.md) · [Испанский](README.es.md) · [Суахили](README.sw.md) · [Шведский](README.sv.md) · [Телугу](README.te.md) · [Тайский](README.th.md) · [Турецкий](README.tr.md) · [Украинский](README.uk.md) · [Вьетнамский](README.vi.md)</small>

<small>

> **Примечание о переводах интерфейса и документации:** Все языки интерфейса, кроме оригинального английского (Великобритания),
> были переведены с использованием моделей ИИ; формулировки могут быть неточными или содержать ошибки.

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

![Сводка панели управления — использование](../images/screenshots/ru/dashboard-summary.png)

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
  - [Настройка часового пояса](#configuring-the-timezone)
- [Получение API-ключа OpenRouter](#getting-an-openrouter-api-key)
- [Конфигурация и окружение](#configuration-and-environment)
- [Разработка и архитектура](#development-and-architecture)
- [Сообщение об ошибках](#reporting-issues)
- [Отказ от ответственности](#disclaimer)
- [Лицензия](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Быстрый старт

**Docker (рекомендуется для самостоятельного хостинга)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Замените `sk-or-your-key` на ваш [ключ OpenRouter API](https://openrouter.ai/keys) (или задайте ключи других провайдеров; см. [Конфигурация](#configuration-and-environment)). Откройте [http://localhost:5000](http://localhost:5000) и измените пароль администратора по умолчанию до предоставления доступа к сервису.

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> В Docker учётные данные для модели ИИ задаются через переменные среды, такие как `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (а не через веб-интерфейс). В настольной версии (Electron) ключи настраиваются в **Настройки → API**.

<br/>

**Windows**

Скачайте последнюю версию `Transrewrt Setup x.y.z.exe` из раздела [Releases](https://github.com/wsj-br/transrewrt/releases), запустите установщик, затем запустите приложение через меню «Пуск» или ярлык на рабочем столе. Введите свои API-ключи в разделе **Настройки → API**. Необходимо настроить как минимум одного провайдера, OpenRouter — популярный выбор для бесплатных моделей.

<br/>

**Linux**

Скачайте `.AppImage`-файл для вашего процессора из раздела [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` для обычных ПК, `arm64` для большинства ARM-устройств, в том числе Raspberry Pi 4 и выше), после чего выполните:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введите свои API-ключи в разделе **Настройки → API**. Необходимо настроить как минимум одного провайдера, OpenRouter — популярный выбор для бесплатных моделей.

В Debian/Ubuntu может потребоваться предварительная установка дополнительных зависимостей:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Подробности см. в разделе [Установка → Linux](#linux-electron).

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>

> macOS в настоящее время не поддерживается. Transrewrt доступен для Windows, Linux и Docker.

<br/>

После запуска приложения ознакомьтесь с **[Руководством пользователя](USER-GUIDE.ru.md)**, чтобы узнать, как переводить, переписывать и преобразовывать текст, управлять запросами и настраивать модели.

<br/><br/>

<a id="installation"></a>

## Установка

<a id="windows-electron"></a>

### Windows (Electron)

- Скачайте последний установщик по ссылке [Releases](https://github.com/wsj-br/transrewrt/releases).
- Запустите файл `.exe` и следуйте инструкциям установщика.
- Первый запуск: запустите приложение через меню «Пуск» или ярлык на рабочем столе.

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> Windows может показать одно из следующих предупреждений безопасности (нормально для не подписанных/независимых приложений):
>   - **Контроль учётных записей (UAC)**: "Разрешить этому приложению от неизвестного издателя вносить изменения на этом устройстве?" → Нажмите **Да**.
>   - **Microsoft Defender SmartScreen**: "Windows защитила ваш компьютер" → Нажмите **Дополнительные сведения** → **Всё равно запустить**.
>
> Это происходит потому, что приложение не подписано Microsoft или крупным издателем. Приложение безопасно, если вы скачали его из официальных релизов на GitHub
> (проверьте контрольную сумму SHA256 ниже).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Скачайте подходящий `.AppImage` (`x64` или `arm64`) из раздела [Releases](https://github.com/wsj-br/transrewrt/releases).
- Запустите: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` на x86_64/amd64, либо используйте имя файла `...-arm64.AppImage` на ARM64.
- Дополнительные зависимости (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Дополнительную информацию смотрите в [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>

### Docker

- Загрузите образ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Установите по крайней мере один ключ поставщика через переменные окружения (например, `OPENROUTER_API_KEY` для OpenRouter). Передавайте переменные с помощью `-e` или через `docker compose` / `.env`, чтобы секреты не сохранялись внутри образа.
- Ключи поставщиков **не вводятся** в веб-интерфейсе; сервер считывает их из переменных окружения.

Пример — именованный том для хранения данных (ключ OpenRouter через переменную окружения):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

либо, если вы предпочитаете использовать Docker Compose, выполните:

```
# загрузите файл compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# отредактируйте файл, добавив API-ключи и настроив часовой пояс (TZ)
vi transrewrt.yml
# запустите контейнер
docker compose -f transrewrt.yml up -d

См. раздел [Конфигурация](#configuration-and-environment) для ознакомления со всеми переменными среды, такими как `PORT`, `CONFIG_PATH`, `TZ` и ключами LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Настройка часового пояса

Дата и время в пользовательском интерфейсе приложения определяются локалью и часовым поясом **браузера**. Что касается поведения на **стороне сервера** (журналирование и аналогичные функции), контейнер использует переменную окружения `TZ`. Значение по умолчанию — `TZ=Europe/London`.

Чтобы использовать другой часовой пояс, укажите `TZ` в вашем файле Compose, например:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Или передайте её при запуске контейнера (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Во многих системах Linux вы можете скопировать имя системного часового пояса с помощью команды:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Список допустимых имён часовых поясов ведётся в [базе данных tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Википедия).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Получение API-ключа OpenRouter

Transrewrt поддерживает несколько поставщиков ИИ. [OpenRouter](https://openrouter.ai) — популярный выбор, поскольку объединяет множество моделей под одним ключом и предлагает бесплатные модели.

1. Зарегистрируйтесь или войдите на сайт [openrouter.ai](https://openrouter.ai).
2. Перейдите на страницу [Keys](https://openrouter.ai/keys) и создайте новый ключ (назовите его и, при необходимости, установите лимит средств). Вы можете использовать бесплатные модели, не пополняя счёт.
3. **Десктоп (Electron):** вставьте ключи в разделе **Настройки → API**. **Docker:** укажите переменные окружения, такие как `OPENROUTER_API_KEY` (см. [Быстрый старт](#quick-start)).

Не используйте модель **Body Builder** от OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) для перевода, переписывания или преобразования текста: она возвращает полезную нагрузку запроса в формате JSON, а не готовый текст для этих задач. См. раздел [Настройки → Модели](USER-GUIDE.ru.md#models) в руководстве пользователя.

Вы также можете использовать других провайдеров (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) или запускать модели локально с помощью [Ollama](https://ollama.com). Полный список поддерживаемых провайдеров и переменных окружения смотрите в разделе [Конфигурация](#configuration-and-environment).

> ⚠️ **ВНИМАНИЕ**<br/>
> Если вы используете Ollama с другого устройства, контейнера или сервиса, не забудьте настроить Ollama на разрешение внешних подключений (не только localhost).

Подробнее о лимитах, BYOK и другом — в документации [аутентификации OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Конфигурация и окружение

**Расположение файлов конфигурации**

| Развертывание        | Расположение конфигурации                             |
| -------------------- | ---------------------------------------------------- |
| Electron (Windows)   | `%APPDATA%\transrewrt\`                              |
| Electron (Linux)     | `~/.config/transrewrt/`                              |
| Веб / Docker         | `/app/data/config.json` (используйте том для сохранения) |

<br/>

**Переменные окружения** (только для веб-версии/Docker; Electron использует локальный конфигурационный файл)

| Переменная         | По умолчанию                 | Описание |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Порт, на котором слушает сервер |
| `CONFIG_PATH`    | `/app/data/config.json` | Путь к файлу конфигурации |
| `TZ`             | `Europe/London`         | Часовой пояс IANA для времени на стороне сервера (логирование и т.д.); интерфейс по-прежнему следует браузеру. См. [Docker → часовой пояс](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(пусто)*               | Ключ API OpenRouter |
| `OPENAI_API_KEY`     | *(пусто)*               | Ключ API OpenAI |
| `CEREBRAS_API_KEY`   | *(пусто)*               | Ключ API Cerebras |
| `ANTHROPIC_API_KEY`  | *(пусто)*               | Ключ API Anthropic |
| `GOOGLE_API_KEY`     | *(пусто)*               | Ключ API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(пусто)*               | Ключ API DeepSeek |
| `GROQ_API_KEY`       | *(пусто)*               | Ключ API Groq |
| `MISTRAL_API_KEY`    | *(пусто)*               | Ключ API Mistral |
| `OLLAMA_URL`     | *(пусто)*               | Базовый URL Ollama (например, `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(пусто)*               | Ключ API xAI |

Настройте только тех провайдеров, которых вы используете. Идентификаторы моделей используют пространства имён (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` и т.д.).

**Отображение стоимости:** OpenRouter возвращает фактическую стоимость при наличии таковой. Другие провайдеры используют **оценочную** стоимость на основе публичного ценника моделей OpenRouter, если ключ OpenRouter доступен; в противном случае стоимость вне OpenRouter может отображаться как `0`. Оценки не являются счетами-фактурами.

<br/>

**Данные и сохраняемость:** При использовании Docker подключите том в директорию `/app/data`, чтобы файл `config.json` и база данных SQLite сохранялись после перезапуска контейнера. Без подключённого тома все данные будут утеряны при остановке контейнера.

**Разработчикам:** После обновления изменений, заменяющих старую конфигурацию с одним ключом, пересоздайте или объедините `data/config.json` с новой структурой по умолчанию из `src/config-defaults/config_default.json`, если ваш локальный файл всё ещё использует удалённые поля (`api_key`, `api_url`, параметры прокси).

<br/>

**Веб-аутентификация:**

- Администратор по умолчанию: `admin` / `transrewrt26`.
- Управление пользователями в разделе **Настройки → Пользователи**.

- Сброс пароля: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (из исходного кода: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ВНИМАНИЕ**<br/>
> Немедленно смените пароль администратора по умолчанию на любом хосте, доступном в сети.

<br/>

Основные настройки (шрифты, модели, языки и т.д.) доступны в разделе «Настройки» приложения.

<br/><br/>

<a id="development-and-architecture"></a>

## Разработка и архитектура

- **Разработка:** Настройка, сборка, тестирование и развертывание (Electron, Web, Docker) — см. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Архитектура и обзор системы:** Структура папок, технологический стек, проектные решения — см. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Сообщение об ошибках

Сообщите об ошибке на [GitHub](https://github.com/wsj-br/transrewrt/issues). Укажите вашу платформу (Windows / Linux / Docker) и версию приложения (указана в окне «О программе» или на странице релизов).

<br/><br/>

<a id="disclaimer"></a>

## Отказ от ответственности

Названия продуктов и значки принадлежат их законным владельцам и используются исключительно в целях идентификации. Данное программное обеспечение не связано с упомянутыми брендами и не поддерживается ими.

<br/><br/>

<a id="license"></a>

## Лицензия

© 2026 Вальдемар Скуделлер-младший.

[Лицензия Apache 2.0](LICENSE)