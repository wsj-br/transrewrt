---
title: Быстрый старт
description: >-
  Установите Transrewrt на Windows, Linux или macOS, либо запустите
  веб-приложение Docker.
---



Выберите подходящий вам путь. Все они бесплатны и имеют открытый исходный код (Apache 2.0).

## Docker (веб-приложение)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Замените `PROVIDER_API_KEY` переменной для вашего провайдера (например, `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY` и т. д.) и задайте ее значение. Полный список см. в разделе [Конфигурация](/docs/configuration/#environment-variables-web--docker).

Затем откройте [http://localhost:5000](http://localhost:5000) и **измените пароль администратора по умолчанию**, прежде чем предоставлять доступ к сервису.

:::tip
В Docker учетные данные LLM устанавливаются с помощью переменных среды (например, `PROVIDER_API_KEY`). Они **не** вводятся в веб-интерфейсе. На рабочем столе вы настраиваете ключи в разделе **Settings → API Config**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Загрузите последнюю версию `Transrewrt Setup x.y.z.exe` из [Релизов](https://github.com/wsj-br/transrewrt/releases).
2. Запустите установщик.
3. Откройте приложение и введите ключи API в разделе **Настройки → Конфигурация API**. Настройте хотя бы одного провайдера; OpenRouter — распространенный выбор для бесплатных моделей.

:::note
Windows может показывать предупреждения UAC или SmartScreen при установке приложения. Устанавливать безопасно, если вы загружаете его с официальной страницы GitHub Releases. Нажмите «Подробнее» и «Все равно запустить», чтобы установить.
:::

## Linux

Загрузите `.AppImage` для вашего процессора из [Релизов](https://github.com/wsj-br/transrewrt/releases) (`x64` или `arm64`, включая Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введите ключи API в разделе **Настройки → Конфигурация API**.

Если Chromium выдает ошибки GPU / EGL, но приложение работает, вы можете отключить аппаратное ускорение:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

## macOS

Скачайте `.dmg` для вашего Mac из [Релизов](https://github.com/wsj-br/transrewrt/releases):

- **Apple Silicon** — `Transrewrt-x.y.z-arm64.dmg`
- **Intel** — `Transrewrt-x.y.z-x64.dmg`

Откройте образ диска и перетащите Transrewrt в Приложения. Введите ключи API в **Настройки → Конфигурация API**.

:::noteСборка для macOS не подписана (нет нотариального заверения Apple). Gatekeeper блокирует первый запуск. Щелкните правой кнопкой мыши `Transrewrt.app` и выберите **Открыть**, затем подтвердите **Открыть**.
:::

Или очистите атрибут карантина:

```bash
xattr -dr com.apple.quarantine /Applications/Transrewrt.app
```

## Обновление

- **Windows** — скачайте более новую версию `Transrewrt Setup x.y.z.exe` из [Релизов](https://github.com/wsj-br/transrewrt/releases) и запустите ее. Настройки и данные сохраняются.
- **Linux** — скачайте более новую версию `.AppImage` и замените старый файл. Настройки и данные сохраняются.
- **macOS** — скачайте более новую версию `.dmg`, откройте ее и перетащите Transrewrt в Приложения, заменив существующее приложение. Настройки и данные сохраняются.
- **Docker** — извлеките новый образ и пересоздайте контейнер. Данные сохраняются в томе `/app/data`:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Следующие шаги

1. [Получите ключ API](/docs/api-key/)
2. Выполните простой перевод, чтобы убедиться, что все работает
3. Прочитайте руководства [Перевод](/docs/translate/), [Переписывание](/docs/rewrite/) и [Преобразование](/docs/transform/)
