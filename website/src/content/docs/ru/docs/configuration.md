---
title: Конфигурация
description: >-
  Расположение файлов конфигурации, переменные среды Docker, режим
  конфиденциальности и веб-аутентификация.
translation_last_updated: '2026-07-17T21:14:48.255Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: ru
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - google/gemini-2.5-flash
  - meta-llama/llama-3.3-70b-instruct
---



## Расположение файлов конфигурации

| Развертывание | Расположение конфигурации |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Веб / Docker | `/app/data/config.json` (используйте том для сохранения) |

## Переменные среды (веб / Docker)

Electron использует локальный файл конфигурации. Только для веб-сервера/сервера Docker:

| Переменная | Описание |
| --- | --- |
| `PORT` | Порт прослушивания сервера (по умолчанию `5000`) |
| `CONFIG_PATH` | Путь к файлу конфигурации (по умолчанию `/app/data/config.json`) |
| `TZ` | Часовой пояс для серверного времени (по умолчанию `Europe/London`) |
| `HISTORY_DISABLED` | Принудительное отключение истории выполнения (`true` / `1`) |
| `OPENROUTER_API_KEY` | Ключ API OpenRouter |
| `OPENAI_API_KEY` | Ключ API OpenAI |
| `CEREBRAS_API_KEY` | Ключ API Cerebras |
| `ANTHROPIC_API_KEY` | Ключ API Anthropic |
| `GOOGLE_API_KEY` | Ключ API Google Gemini |
| `DEEPSEEK_API_KEY` | Ключ API DeepSeek |
| `GROQ_API_KEY` | Ключ API Groq |
| `MISTRAL_API_KEY` | Ключ API Mistral |
| `LOCAL_LLM_URL` | Полный базовый URL-адрес API, совместимого с OpenAI, для локального сервера (включая путь, например, Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Ключ API xAI |
| `NVIDIA_API_KEY` | Ключ API NVIDIA |
| `ALIBABA_API_KEY` | Ключ API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Ключ API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Отображаемое имя для пользовательского провайдера, совместимого с OpenAI |
| `CUSTOM_PROVIDER_URL` | Базовый URL для пользовательского провайдера, совместимого с OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Ключ API для пользовательского провайдера |

Все три переменные `CUSTOM_PROVIDER_*` обязательны при использовании пользовательского конечной точки. Модели отображаются в режиме **Advanced** как `{providerName}/…`.

## Режим конфиденциальности

Установите `HISTORY_DISABLED` в `true` или `1` на веб-сервере/Docker-процессе и/или основном процессе Electron, чтобы принудительно отключить историю, независимо от `config.json` или индивидуальных предпочтений. Это отключает хранение истории ввода/вывода, блокирует **Настройки → Общие настройки → История** и блокирует связанные с историей API.

## Сохранение данных (Docker)

Монтируйте том в `/app/data`, чтобы `config.json` и база данных SQLite сохранились после перезапуска контейнера. Без тома данные теряются при остановке контейнера.

## Веб-аутентификация

- По умолчанию админ: `admin` / `transrewrt26`
- Управление пользователями в **Настройки → Пользователи**
- Сброс пароля:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Немедленно измените пароль администратора по умолчанию на любом сетевом доступном хосте.
:::

## Отображение стоимости

OpenRouter возвращает точную оплаченную стоимость, когда это применимо. Другие провайдеры используют **оценочную** стоимость из публичной модели ценообразования OpenRouter, когда доступен ключ OpenRouter. Оценки не являются счетами.

Интерфейс настроек (шрифты, модели, история, резервные копии) см. в разделе [Настройки](/docs/settings/).
