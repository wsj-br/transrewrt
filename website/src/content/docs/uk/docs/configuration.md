---
title: Конфігурація
description: >-
  Розташування файлів конфігурації, змінні середовища Docker, режим
  конфіденційності та веб-автентифікація.
translation_last_updated: '2026-07-17T14:59:02.671Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: uk
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - google/gemini-2.5-flash
---



## Розташування файлів конфігурації

| Розгортання | Розташування конфігурації |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (використовуйте том для збереження) |

## Змінні середовища (веб / Docker)

Electron використовує локальний файл конфігурації. Лише для веб-сервера/сервера Docker:

| Змінна | Опис |
| --- | --- |
| `PORT` | Порт прослуховування сервера (за замовчуванням `5000`) |
| `CONFIG_PATH` | Шлях до файлу конфігурації (за замовчуванням `/app/data/config.json`) |
| `TZ` | Часовий пояс для серверного часу (за замовчуванням `Europe/London`) |
| `HISTORY_DISABLED` | Примусове вимкнення історії виконання (`true` / `1`) |
| `OPENROUTER_API_KEY` | Ключ API OpenRouter |
| `OPENAI_API_KEY` | Ключ API OpenAI |
| `CEREBRAS_API_KEY` | Ключ API Cerebras |
| `ANTHROPIC_API_KEY` | Ключ API Anthropic |
| `GOOGLE_API_KEY` | Ключ API Google Gemini |
| `DEEPSEEK_API_KEY` | Ключ API DeepSeek |
| `GROQ_API_KEY` | Ключ API Groq |
| `MISTRAL_API_KEY` | Ключ API Mistral |
| `LOCAL_LLM_URL` | Повна базова URL-адреса API, сумісна з OpenAI, для локального сервера (включно зі шляхом, наприклад, Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Ключ API xAI |
| `NVIDIA_API_KEY` | Ключ API NVIDIA |
| `ALIBABA_API_KEY` | Ключ API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Ключ API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Відображуване ім'я для користувацького провайдера, сумісного з OpenAI |
| `CUSTOM_PROVIDER_URL` | Базова URL-адреса для користувацького провайдера, сумісного з OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Ключ API для користувацького провайдера |

Усі три змінні `CUSTOM_PROVIDER_*` є обов'язковими при використанні користувацької кінцевої точки. Моделі з'являються в режимі **Advanced** як `{providerName}/…`.

## Режим конфіденційності

Встановіть `HISTORY_DISABLED` на `true` або `1` у процесі веб/Docker сервера та/або головному процесі Electron, щоб примусово вимкнути історію незалежно від `config.json` або налаштувань для кожного користувача. Це вимикає збереження історії введення/виведення, блокує **Settings → General Settings → History** та блокує API, пов'язані з історією.

## Збереження даних (Docker)

Змонтуйте том за адресою `/app/data`, щоб `config.json` та база даних SQLite зберігалися після перезапуску контейнера. Без тому дані будуть втрачені при зупинці контейнера.

## Веб-автентифікація

- Адміністратор за замовчуванням: `admin` / `transrewrt26`
- Керування користувачами в **Settings → Users**
- Скинути пароль:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Негайно змініть пароль адміністратора за замовчуванням на будь-якому доступному в мережі хості.
:::

## Відображення вартості

OpenRouter повертає точну виставлену вартість, якщо це можливо. Інші провайдери використовують **орієнтовну** вартість з публічних цін на моделі OpenRouter, якщо доступний ключ OpenRouter. Оцінки не є рахунками-фактурами.

Щоб дізнатися про інтерфейс користувача налаштувань (шрифти, моделі, історія, резервні копії), див. [Налаштування](/docs/settings/).
