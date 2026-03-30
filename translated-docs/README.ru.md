---
translation_last_updated: '2026-03-30T00:46:24.829Z'
source_file_mtime: '2026-03-29T23:51:36.506Z'
source_file_hash: fa17b974cbf42a93
translation_language: ru
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Версия"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Лицензия: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Платформа">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Инструмент для обработки текста на основе ИИ: перевод между языками, переписывание в разных стилях и трансформация с помощью пользовательских промптов — с использованием нескольких провайдеров ИИ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI и локально установленный Ollama). Работает как настольное приложение (Electron) или как самохостинговое веб-приложение (Docker).

- **Перевести** — между десятками языков, с автоматическим определением исходного языка
- **Рерайт** — исправление грамматики, улучшение ясности, формальный/неформальный стиль, сокращение, расширение, технический стиль
- **Трансформация** — пользовательские промпты ИИ; создание и управление промптами, необязательный целевой язык для каждого промпта
- **История** — полная история выполнения с вводом/выводом текста, фильтрацией и экспорт
- **Модели и стоимость** — выбор моделей из любого настроенного провайдера; панели мониторинга стоимости и использования с логами, сводками по модели/операции/дню
- **Интерфейс** — интерфейс на нескольких языках (более 30 языков, поддержка RTL), шрифты, ...
- **Веб-режим** — поддержка нескольких пользователей с ролями администратора
- **Настольное приложение** — приложение Electron для Windows и Linux
- **Самохостинг** — образ Docker для amd64 и arm64 (готов к работе на Raspberry Pi)

После установки ознакомьтесь с **[Руководством пользователя](USER-GUIDE.ru.md)** для подробного обзора всех функций.

<small>**Читать на других языках:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Примечание о переводах интерфейса и документации:** Все языки интерфейса, кроме оригинального английского (Великобритания),
> были переведены с помощью моделей ИИ; формулировки могут быть неточными или содержать ошибки.

</small>

<br/>

<a id="screenshots"></a>
## Скриншоты

**Выбор языка**

![Language selector](../images/screenshots/ru/language-selector.png)

**Перевести**

![Translate](../images/screenshots/ru/translate.png)

**Трансформация — редактор промптов**

![Transform - prompt editor](../images/screenshots/ru/transform-prompt-edit.png)

**Панель мониторинга**

![Dashboard summary — usage](../images/screenshots/ru/dashboard-summary.png)

**История**

![History](../images/screenshots/ru/history.png)

**Настройки — выбор модели**

![Settings - model selection](../images/screenshots/ru/settings-models.png)

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
- [Получение ключа API OpenRouter](#getting-an-openrouter-api-key)
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

Замените `sk-or-your-key` на ваш [ключ API OpenRouter](https://openrouter.ai/keys) (или установите ключи других провайдеров; см. [Конфигурация](#configuration-and-environment)). Откройте [http://localhost:5000](http://localhost:5000) и измените пароль администратора по умолчанию перед публикацией сервиса.

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> В Docker учетные данные LLM задаются через переменные окружения, такие как `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (не в веб-интерфейсе). В настольной версии (Electron) вы настраиваете ключи в разделе **Настройки → API**.

<br/>

**Windows**

Скачайте последний файл `Transrewrt Setup x.y.z.exe` из [релизов](https://github.com/wsj-br/transrewrt/releases), запустите установщик, затем запустите приложение через меню «Пуск» или ярлык на рабочем столе. Введите ваши API-ключи в разделе **Настройки → API**. Необходимо настроить хотя бы одного провайдера; OpenRouter часто используется для бесплатных моделей.

<br/>

**Linux**

Скачайте `.AppImage` для вашего процессора из [релизов](https://github.com/wsj-br/transrewrt/releases) (`x64` для обычных ПК, `arm64` для многих ARM-устройств, включая Raspberry Pi 4+), затем:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введите ваши API-ключи в разделе **Настройки → API**. Необходимо настроить хотя бы одного провайдера; OpenRouter часто используется для бесплатных моделей.

В Debian/Ubuntu может потребоваться сначала установить дополнительные зависимости:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Подробности см. в разделе [Установка → Linux](#linux-electron).

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> macOS в настоящее время не поддерживается. Transrewrt доступен для Windows, Linux и Docker.

<br/>

После запуска приложения ознакомьтесь с **[Руководством пользователя](USER-GUIDE.ru.md)**, чтобы узнать, как переводить, переписывать и трансформировать текст, управлять промптами и настраивать модели.

<br/><br/>

<a id="installation"></a>
## Установка

<a id="windows-electron"></a>
### Windows (Electron)

- Скачайте последний установщик из [релизов](https://github.com/wsj-br/transrewrt/releases).
- Запустите `.exe` и следуйте инструкциям установщика.
- При первом запуске: запустите приложение через меню «Пуск» или ярлык на рабочем столе.

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> Windows может показать одно из следующих предупреждений безопасности (нормально для неподписанных/независимых приложений):
>   - **Контроль учётных записей (UAC)**: «Разрешить ли этому приложению от неизвестного издателя вносить изменения на этом устройстве?» → Нажмите **Да**.
>   - **Microsoft Defender SmartScreen**: «Windows защитила ваш компьютер» → Нажмите **Дополнительные сведения** → **Всё равно запустить**.
>
> Это происходит потому, что приложение не подписано Microsoft или крупным издателем — оно безопасно, если скачано из официальных релизов на GitHub
>  (проверьте контрольную сумму SHA256 ниже).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Скачайте соответствующий `.AppImage` (`x64` или `arm64`) из [релизов](https://github.com/wsj-br/transrewrt/releases).
- Запустите: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` на x86_64/amd64 или используйте имя файла `...-arm64.AppImage` на ARM64.
- Дополнительные зависимости (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Подробнее см. в [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Загрузите: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Установите хотя бы один ключ провайдера через переменные окружения (например, `OPENROUTER_API_KEY` для OpenRouter). Передавайте переменные с помощью `-e` или `docker compose` / `.env`, чтобы секреты не попадали в образ.
- Ключи провайдеров **не вводятся** в веб-интерфейсе; сервер считывает их из переменных окружения.

Пример — именованный том для сохранения данных (ключ OpenRouter через env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

или, если вы предпочитаете использовать Docker Compose, используйте:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

См. [Конфигурация](#configuration-and-environment) для всех переменных окружения, таких как `PORT`, `CONFIG_PATH`, `TZ` и ключи LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>
### Настройка часового пояса

Дата и время в пользовательском интерфейсе приложения следуют локали и часовому поясу **браузера**. Для **серверного** поведения (логирование и т.п.) контейнер использует переменную окружения `TZ`. По умолчанию установлено `TZ=Europe/London`.

Чтобы использовать другой часовой пояс, задайте `TZ` в файле Compose, например:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Или передайте при запуске контейнера (Docker):

```bash
--env TZ=America/Sao_Paulo
```

На многих Linux-хостах вы можете скопировать имя системного часового пояса с помощью:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Список допустимых имён часовых поясов ведётся в [базе данных tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Получение API-ключа OpenRouter

Transrewrt поддерживает несколько провайдеров ИИ. [OpenRouter](https://openrouter.ai) — популярный выбор, поскольку объединяет множество моделей под одним ключом и предлагает бесплатные модели.

1. Зарегистрируйтесь или войдите на [openrouter.ai](https://openrouter.ai).
2. Перейдите на страницу [Keys](https://openrouter.ai/keys) и создайте новый ключ (укажите название и, при желании, лимит средств). Вы можете использовать бесплатные модели без пополнения баланса.
3. **Десктоп (Electron):** вставьте ключи в **Настройки → API**. **Docker:** задайте переменные окружения, такие как `OPENROUTER_API_KEY` (см. [Быстрый старт](#quick-start)).

Не используйте модель **Body Builder** от OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) для перевода, рерайта или трансформации: она возвращает JSON-полезную нагрузку запроса, а не готовый текст для этих задач. См. [Настройки → Модели](USER-GUIDE.ru.md#models) в Руководстве пользователя.

Вы также можете использовать других провайдеров (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) или запускать модели локально с помощью [Ollama](https://ollama.com). Полный список поддерживаемых провайдеров и переменных окружения см. в [Конфигурации](#configuration-and-environment).

> ⚠️ **ВНИМАНИЕ**<br/>
> Если вы используете Ollama с другого устройства, контейнера или сервиса, не забудьте настроить Ollama на разрешение внешних подключений (не только localhost).

Для получения информации о лимитах, BYOK и другом см. [аутентификация OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Конфигурация и окружение

**Расположение файлов конфигурации**

| Развертывание         | Расположение конфигурации                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Веб / Docker       | `/app/data/config.json` (используйте том для сохранения) |

<br/>

**Переменные окружения** (только для веб/Docker; Electron использует локальный файл конфигурации)

| Переменная         | По умолчанию                 | Описание |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Порт, на котором слушает сервер |
| `CONFIG_PATH`    | `/app/data/config.json` | Путь к файлу конфигурации |
| `TZ`             | `Europe/London`         | Часовой пояс IANA для серверного времени (логи и т.д.); интерфейс по-прежнему следует за браузером. См. [Docker → часовой пояс](#docker-timezone) |
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

Настройте только тех провайдеров, которых вы используете. Идентификаторы моделей пространственно разделены (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` и т.д.).

**Отображение стоимости:** OpenRouter возвращает точную стоимость списания, когда это возможно. Другие провайдеры используют **примерную** стоимость из публичного прайс-листа моделей OpenRouter, если ключ OpenRouter доступен; без него стоимость не-OpenRouter может отображаться как `0`. Оценки не являются счетами.

<br/>

**Данные и сохранность:** Для Docker смонтируйте том в `/app/data`, чтобы файл `config.json` и база данных SQLite сохранялись при перезапуске контейнера. Без тома все данные будут потеряны при остановке контейнера.

**Разработчикам:** После обновления изменений, заменяющих старую конфигурацию с одним ключом, сбросьте или объедините `data/config.json` с новой структурой по умолчанию из `src/config-defaults/config_default.json`, если ваш локальный файл всё ещё использует удалённые поля (`api_key`, `api_url`, параметры прокси).

<br/>

**Веб-аутентификация:**

- Администратор по умолчанию: `admin` / `transrewrt26`.
- Управление пользователями в разделе **Настройки → Пользователи**.
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

- **Разработка:** Установка, сборка, тестирование и развертывание (Electron, Веб, Docker) — см. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Архитектура и обзор системы:** Структура папок, технологический стек, архитектурные решения — см. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Сообщение об ошибках

Сообщите о проблеме на [GitHub](https://github.com/wsj-br/transrewrt/issues). Укажите вашу платформу (Windows / Linux / Docker) и версию приложения (указана в диалоговом окне «О программе» или на странице релизов).

<br/><br/>

<a id="disclaimer"></a>
## Отказ от ответственности

Названия продуктов и значки принадлежат их соответствующим владельцам и используются исключительно в целях идентификации. Данное программное обеспечение не связано ни с одним из упомянутых брендов и не одобрено ими.

<br/><br/>

<a id="license"></a>
## Лицензия

Авторское право © 2026 Уолдемар Скуделлер мл.

[Apache License 2.0](../LICENSE)
