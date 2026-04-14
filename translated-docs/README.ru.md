---
translation_last_updated: '2026-04-02T12:42:14.021Z'
source_file_mtime: '2026-04-02T12:39:14.838Z'
source_file_hash: 0826245f792850f3
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

Инструмент для обработки текста на основе ИИ: перевод между языками, переписывание в разных стилях и трансформация с помощью пользовательских промптов - с использованием нескольких провайдеров ИИ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI и локально установленный Ollama). Работает как настольное приложение (Electron) или как самохостинговое веб-приложение (Docker).

- **Перевести** - между десятками языков, с автоматическим определением исходного языка
- **Рерайт** - исправление грамматики, улучшение ясности, формальный/неформальный стиль, сокращение, расширение, технический стиль
- **Трансформация** - пользовательские промпты ИИ; создание и управление промптами, необязательный целевой язык для каждого промпта
- **История** - полная история выполнения с вводом/выводом текста, фильтрацией и экспорт
- **Модели и стоимость** - выбор моделей из любого настроенного провайдера; панели мониторинга стоимости и использования с логами, сводками по модели/операции/дню
- **Интерфейс** - интерфейс на нескольких языках (более 30 языков, поддержка RTL), шрифты, ...
- **Веб-режим** - поддержка нескольких пользователей с ролями администратора
- **Настольное приложение** - приложение Electron для Windows и Linux
- **Самохостинг** - образ Docker для amd64 и arm64 (готов к работе на Raspberry Pi)

После установки ознакомьтесь с **[Руководством пользователя](USER-GUIDE.ru.md)** для подробного обзора всех функций.

<small>**Читать на других языках:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Примечание о переводах интерфейса и документации:** Все языки интерфейса, кроме оригинального английского (Великобритания),
> были переведены с помощью моделей ИИ; формулировки могут быть неточными или содержать ошибки.

</small>

<br/>

<a id="table-of-contents"></a>
## Содержание

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Скриншоты](#screenshots)
- [Быстрый старт](#quick-start)
- [Получение API-ключа OpenRouter](#getting-an-openrouter-api-key)
- [Конфигурация и окружение](#configuration-and-environment)
- [Разработка и архитектура](#development-and-architecture)
- [Сообщение об ошибках](#reporting-issues)
- [Отказ от ответственности](#disclaimer)
- [Лицензия](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Скриншоты

**Выбор языка**

![Language selector](../images/screenshots/ru/language-selector.png)

**Перевести**

![Translate](../images/screenshots/ru/translate.png)

**Трансформация - редактор промптов**

![Transform - prompt editor](../images/screenshots/ru/transform-prompt-edit.png)

**Панель мониторинга**

![Dashboard summary - usage](../images/screenshots/ru/dashboard-summary.png)

**История**

![History](../images/screenshots/ru/history.png)

**Настройки - выбор модели**

![Settings - model selection](../images/screenshots/ru/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## Быстрый старт

<details>
<summary><b>Docker (рекомендуется для самостоятельного размещения)</b></summary>

<a id="docker"></a>

<br/>

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

Установите хотя бы один ключ провайдера через переменные окружения (например, `OPENROUTER_API_KEY` для OpenRouter). Передавайте переменные с помощью `-e` или `docker compose` / `.env`, чтобы секреты не попадали в образ. Ключи провайдеров **не вводятся** в веб-интерфейсе; сервер считывает их из окружения.

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> В Docker учетные данные LLM задаются с помощью переменных окружения, таких как `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (не в веб-интерфейсе). На настольной версии (Electron) вы настраиваете ключи в разделе **Настройки → API**.

<br/>

Или используйте Docker Compose:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

См. [Конфигурация](#configuration-and-environment) для всех переменных окружения, таких как `PORT`, `CONFIG_PATH`, `TZ` и ключи LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Часовой пояс сервера (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

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

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Скачайте последний файл `Transrewrt Setup x.y.z.exe` из раздела [Releases](https://github.com/wsj-br/transrewrt/releases).
- Запустите `.exe` и следуйте инструкциям установщика.
- При первом запуске: запустите приложение через меню «Пуск» или ярлык на рабочем столе.
- Введите свои API-ключи в разделе **Настройки → API**. Необходимо настроить хотя бы одного провайдера; OpenRouter часто используется для бесплатных моделей.

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> В Windows может появиться одно из следующих предупреждений безопасности (нормально для приложений без подписи или независимых разработчиков):
>   - **Контроль учётных записей (UAC)**: «Разрешить этому приложению от неизвестного издателя вносить изменения на этом устройстве?» → Нажмите **Да**.
>   - **Microsoft Defender SmartScreen**: «Windows защитила ваш компьютер» → Нажмите **Дополнительные сведения** → **Всё равно запустить**.
>
> Это происходит потому, что приложение не подписано Microsoft или крупным издателем - оно безопасно, если загружено с официальных релизов на GitHub (проверьте контрольные суммы на странице [Releases](https://github.com/wsj-br/transrewrt/releases) рядом с каждым файлом).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Скачайте `.AppImage` для вашего процессора из [релизов](https://github.com/wsj-br/transrewrt/releases) (`x64` для обычных ПК, `arm64` для многих ARM-устройств, включая Raspberry Pi 4+), затем:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Для x86_64/amd64 используйте имя файла с пометкой `x64`; для ARM64 - имя с пометкой `...-arm64.AppImage`.

Введите свои API-ключи в разделе **Настройки → API**. Необходимо настроить хотя бы одного провайдера; OpenRouter часто используется для бесплатных моделей.

**Сообщения консоли:** Упакованные сборки для Linux (`x64` и `arm64` AppImages) подавляют предупреждения об устаревании Node в терминале (например, встроенного модуля `punycode`). Если Chromium выводит ошибки GPU / EGL, такие как «GLES3 не поддерживается», но приложение работает, вы можете отключить их, отключив аппаратное ускорение:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Это также относится к amd64; измените имя файла в соответствии со скачанным.

В Debian/Ubuntu могут потребоваться дополнительные **библиотеки выполнения**, необходимые для Chromium (они часто уже присутствуют в полных десктопных установках). При необходимости выполните приведённые ниже команды:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

замените `libasound2t64` на `libasound2` для `arm64`. В минимальных или пользовательских установках может по-прежнему возникать ошибка из-за отсутствующего `.so` файла. Установите пакет с именем, указанным в сообщении об ошибке (часто требуются: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). В некоторых средах может потребоваться запуск приложения с помощью `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **ПРИМЕЧАНИЕ**<br/>
> macOS в настоящее время не поддерживается. Transrewrt доступен для Windows, Linux и Docker.

</details>

<br/>

После запуска приложения ознакомьтесь с **[Руководством пользователя](USER-GUIDE.ru.md)**, чтобы узнать, как переводить, переписывать и трансформировать текст, управлять промптами и настраивать модели.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Получение API-ключа OpenRouter

Transrewrt поддерживает несколько провайдеров ИИ. [OpenRouter](https://openrouter.ai) - популярный выбор, поскольку объединяет множество моделей под одним ключом и предлагает бесплатные модели.

1. Зарегистрируйтесь или войдите на [openrouter.ai](https://openrouter.ai).
2. Перейдите на страницу [Keys](https://openrouter.ai/keys) и создайте новый ключ (укажите название и, при желании, лимит средств). Вы можете использовать бесплатные модели без пополнения баланса.
3. **Десктоп (Electron):** вставьте ключи в **Настройки → API**. **Docker:** задайте переменные окружения, такие как `OPENROUTER_API_KEY` (см. [Быстрый старт](#quick-start)).

Не используйте модель **Body Builder** от OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) для перевода, рерайта или трансформации: она возвращает JSON-полезные нагрузки запросов, а не готовый текст для этих задач. См. [Настройки → Модели](USER-GUIDE.ru.md#models) в Руководстве пользователя.

Вы также можете использовать других провайдеров (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) или запускать модели локально с помощью [Ollama](https://ollama.com). Полный список поддерживаемых провайдеров и переменных окружения см. в [Конфигурации](#configuration-and-environment).

</br>

> ⚠️ **ВНИМАНИЕ**<br/>
> Если вы используете Ollama с другого устройства, контейнера или службы, не забудьте настроить Ollama на разрешение внешних подключений (не только localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Конфигурация и окружение

</br>

**Расположение файлов конфигурации**

| Развертывание         | Расположение конфигурации                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Веб / Docker       | `/app/data/config.json` (используйте том для сохранения) |

<br/>

**Переменные окружения** (только для веб/Docker; Electron использует локальный файл конфигурации)

| Переменная             | Описание                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Порт, на котором слушает сервер (по умолчанию `5000`)                                  |
| `CONFIG_PATH`        | Путь к файлу конфигурации (по умолчанию `/app/data/config.json`)                 |
| `TZ`                 | часовой пояс для серверного времени (логи и т.д.) (по умолчанию `Europe/London`) |
| `OPENROUTER_API_KEY` | API-ключ OpenRouter                                                           |
| `OPENAI_API_KEY`     | API-ключ OpenAI                                                               |
| `CEREBRAS_API_KEY`   | API-ключ Cerebras                                                             |
| `ANTHROPIC_API_KEY`  | API-ключ Anthropic                                                            |
| `GOOGLE_API_KEY`     | API-ключ Google Gemini                                                        |
| `DEEPSEEK_API_KEY`   | API-ключ DeepSeek                                                             |
| `GROQ_API_KEY`       | API-ключ Groq                                                                 |
| `MISTRAL_API_KEY`    | API-ключ Mistral                                                              |
| `OLLAMA_URL`         | Базовый URL Ollama (например, `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | API-ключ xAI                                                                  |

Настройте только тех провайдеров, которых вы используете. Идентификаторы моделей пространственно разделены (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` и т.д.).

**Отображение стоимости:** OpenRouter возвращает точную стоимость списания, когда это возможно. Другие провайдеры используют **примерную** стоимость из публичного прайс-листа моделей OpenRouter, если ключ OpenRouter доступен; без него стоимость не-OpenRouter может отображаться как `0`. Оценки не являются счетами.

<br/>

**Данные и сохранность:** Для Docker смонтируйте том в `/app/data`, чтобы файл `config.json` и база данных SQLite сохранялись при перезапуске контейнера. Без тома все данные будут потеряны при остановке контейнера.

<br/>

**Веб-аутентификация:**

- Администратор по умолчанию: `admin` / `transrewrt26`.
- Управление пользователями в разделе **Настройки → Пользователи**.
- Сброс пароля: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **ПРЕДУПРЕЖДЕНИЕ**<br/>
> Немедленно измените пароль администратора по умолчанию на любом хосте, доступном в сети.

<br/>

Основные настройки (шрифт, модели, языки и т.д.) доступны в разделе Настройки приложения.

<br/><br/>

<a id="development-and-architecture"></a>
## Разработка и архитектура

- **Разработка:** Установка, сборка, тестирование и развертывание (Electron, Веб, Docker) - см. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Архитектура и обзор системы:** Структура папок, технологический стек, архитектурные решения - см. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

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
