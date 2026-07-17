---
title: Быстрый старт
description: >-
  Установите Transrewrt на Windows или Linux, либо запустите веб-приложение
  Docker с самостоятельным размещением.
translation_last_updated: '2026-07-17T21:14:48.475Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: ru
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



Выберите подходящий вам путь. Все они бесплатны и имеют открытый исходный код (Apache 2.0).

## Docker (веб-приложение с самостоятельным размещением)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Замените `PROVIDER_API_KEY=sk-or-your-key` на свой ключ API от выбранного вами провайдера (см. поддерживаемые варианты в [Конфигурации](/docs/configuration/)).

Затем откройте [http://localhost:5000](http://localhost:5000) и **измените пароль администратора по умолчанию**, прежде чем предоставлять доступ к сервису.

:::caution
В Docker учетные данные LLM устанавливаются с помощью переменных среды (например, `PROVIDER_API_KEY`). Они **не** вводятся в веб-интерфейсе. На рабочем столе вы настраиваете ключи в разделе **Настройки → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Загрузите последнюю версию `Transrewrt Setup x.y.z.exe` со страницы [Релизы](https://github.com/wsj-br/transrewrt/releases).
2. Запустите установщик.
3. Откройте приложение и введите ключи API в разделе **Настройки → API**. Настройте хотя бы одного провайдера; OpenRouter — это распространенный выбор для бесплатных моделей.

:::note
Windows может показывать предупреждения UAC или SmartScreen для неподписанных инди-приложений. Предпочитайте загрузки с официальной страницы GitHub Releases и проверяйте контрольные суммы, когда они опубликованы.
:::

## Linux

Загрузите `.AppImage` для вашего процессора со страницы [Релизы](https://github.com/wsj-br/transrewrt/releases) (`x64` или `arm64`, включая Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введите ключи API в разделе **Настройки → API**.

Если Chromium выдает ошибки GPU / EGL, но приложение работает, вы можете отключить аппаратное ускорение:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS в настоящее время не поддерживается. Transrewrt доступен для Windows, Linux и Docker.
:::

## Следующие шаги

1. [Получите ключ API](/docs/api-key/)
2. Выполните простой перевод, чтобы убедиться, что все работает
3. Прочитайте руководства [Перевод](/docs/translate/), [Перезапись](/docs/rewrite/) и [Преобразование](/docs/transform/)
