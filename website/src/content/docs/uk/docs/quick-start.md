---
title: Швидкий старт
description: >-
  Встановіть Transrewrt на Windows або Linux, або запустіть самостійно
  розміщений веб-додаток Docker.
translation_last_updated: '2026-07-17T14:59:03.578Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: uk
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



Оберіть шлях, який вам підходить. Усі вони безкоштовні та з відкритим вихідним кодом (Apache 2.0).

## Docker (самостійно розміщений веб-додаток)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Замініть `PROVIDER_API_KEY=sk-or-your-key` на свій ключ API від обраного провайдера (див. підтримувані варіанти в [Конфігурації](/docs/configuration/)).

Потім відкрийте [http://localhost:5000](http://localhost:5000) і **змініть стандартний пароль адміністратора** перед тим, як відкривати доступ до сервісу.

:::caution
У Docker облікові дані LLM встановлюються за допомогою змінних середовища (наприклад, `PROVIDER_API_KEY`). Вони **не** вводяться в веб-інтерфейсі. На робочому столі ви налаштовуєте ключі в **Налаштування → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Завантажте останній `Transrewrt Setup x.y.z.exe` з [Релізів](https://github.com/wsj-br/transrewrt/releases).
2. Запустіть інсталятор.
3. Відкрийте програму та введіть ключі API в **Налаштуваннях → API**. Налаштуйте принаймні одного провайдера; OpenRouter є поширеним вибором для безкоштовних моделей.

:::note
Windows може показувати попередження UAC або SmartScreen для непідписаних інді-додатків. Віддавайте перевагу завантаженням з офіційної сторінки GitHub Releases та перевіряйте контрольні суми, коли вони опубліковані.
:::

## Linux

Завантажте `.AppImage` для вашого процесора з [Релізів](https://github.com/wsj-br/transrewrt/releases) (`x64` або `arm64`, включаючи Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введіть ключі API в **Налаштуваннях → API**.

Якщо Chromium видає помилки GPU / EGL, але програма працює, ви можете вимкнути апаратне прискорення:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS наразі не підтримується. Transrewrt доступний для Windows, Linux та Docker.
:::

## Наступні кроки

1. [Отримайте ключ API](/docs/api-key/)
2. Запустіть простий переклад, щоб переконатися, що все працює
3. Прочитайте посібники [Переклад](/docs/translate/), [Переписування](/docs/rewrite/) та [Трансформація](/docs/transform/)
