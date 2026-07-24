---
title: Швидкий старт
description: >-
  Встановіть Transrewrt на Windows або Linux, або запустіть самостійно
  розміщений веб-додаток Docker.
---



Оберіть шлях, який вам підходить. Усі вони безкоштовні та з відкритим вихідним кодом (Apache 2.0).

## Docker (самостійно розміщений веб-додаток)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Замініть `PROVIDER_API_KEY` змінною для вашого провайдера (наприклад, `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) і встановіть її значення. Повний список дивіться в [Конфігурації](/docs/configuration/#environment-variables-web--docker).

Потім відкрийте [http://localhost:5000](http://localhost:5000) і **змініть пароль адміністратора за замовчуванням** перед тим, як відкривати доступ до сервісу.

:::caution
У Docker облікові дані LLM встановлюються за допомогою змінних середовища (наприклад, `PROVIDER_API_KEY`). Вони **не** вводяться в веб-інтерфейсі. На робочому столі ви налаштовуєте ключі в **Налаштування → Конфігурація API**.
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
3. Відкрийте програму та введіть ключі API в **Налаштуваннях → Конфігурація API**. Налаштуйте принаймні одного провайдера; OpenRouter є поширеним вибором для безкоштовних моделей.

:::note
Windows може показувати попередження UAC або SmartScreen для непідписаних інді-додатків. Віддавайте перевагу завантаженням з офіційної сторінки GitHub Releases та перевіряйте контрольні суми, коли вони опубліковані.
:::

## Linux

Завантажте `.AppImage` для вашого процесора з [Релізів](https://github.com/wsj-br/transrewrt/releases) (`x64` або `arm64`, включаючи Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Введіть ключі API в **Налаштуваннях → Конфігурація API**.

Якщо Chromium виводить помилки GPU / EGL, але програма працює, ви можете вимкнути апаратне прискорення:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS наразі не підтримується. Transrewrt доступний для Windows, Linux та Docker.
:::

## Оновлення

- **Windows** — завантажте новіший `Transrewrt Setup x.y.z.exe` з [Релізів](https://github.com/wsj-br/transrewrt/releases) та запустіть його. Налаштування та дані зберігаються.
- **Linux** — завантажте новіший `.AppImage` та замініть старий файл. Налаштування та дані зберігаються.
- **Docker** — завантажте новий образ та перестворіть контейнер. Дані зберігаються в томі `/app/data`:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Наступні кроки

1. [Отримайте ключ API](/docs/api-key/)
2. Виконайте простий переклад, щоб переконатися, що все працює
3. Прочитайте посібники [Переклад](/docs/translate/), [Переписування](/docs/rewrite/) та [Трансформація](/docs/transform/)
