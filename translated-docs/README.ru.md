<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Текстовый инструмент на базе ИИ для **перевода**, **перезаписи** и **преобразования** с помощью пользовательских запросов. Используйте своих собственных поставщиков ИИ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, конечные точки, совместимые с OpenAI, и локальные серверы, такие как Ollama, LM Studio или llama.cpp). Запускается как настольное приложение (Windows / Linux) или как веб-приложение с самостоятельным размещением (Docker). Без облачной учетной записи Transrewrt.

## Возможности

| Возможность | Описание |
| --- | --- |
| **Перевести** | Десятки языков, автоопределение, глоссарии, уточнение с помощью перефразирования |
| **Перезапись** | Четкость, тон, длина, орфография и грамматика — на одном языке |
| **Преобразование** | Пользовательские запросы ИИ, которые вы создаете, редактируете и повторно используете |
| **Развертывание** | Настольное приложение Electron или веб-приложение Docker (amd64 и arm64) |
| **Ключи** | Ваши провайдеры, ваш хост — Простые предустановки или Расширенный список моделей |

![Перевести](../images/screenshots/ru/translate.png)

<small>**Читать на других языках:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Быстрый старт

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Замените `PROVIDER_API_KEY` на переменную вашего провайдера (например, `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`). Откройте [http://localhost:5000](http://localhost:5000) и измените пароль администратора по умолчанию. Ключи устанавливаются через переменные среды (не через веб-интерфейс).

**Windows** — Загрузите `Transrewrt Setup x.y.z.exe` из [Релизов](https://github.com/wsj-br/transrewrt/releases), установите, затем добавьте ключи в **Настройки → API**.

**Linux** — Загрузите `.AppImage` из [Релизов](https://github.com/wsj-br/transrewrt/releases), затем:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Подробности о платформе (Compose, SmartScreen, библиотеки apt, флаги GPU, часовой пояс): [Документация по быстрому старту](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Документация

Полная документация по продукту (установка, ключи API, руководства, настройки, устранение неполадок):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [Ключ API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Конфигурация](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Перевести](https://wsj-br.github.io/transrewrt/docs/translate/) · [Перезапись](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Преобразование](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Распространенные проблемы](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Разработка

- Настройка, сборка, тестирование, развертывание: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Обзор архитектуры: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Поддержка

Откройте проблему на [GitHub](https://github.com/wsj-br/transrewrt/issues). Укажите свою платформу (Windows / Linux / Docker) и версию приложения (диалоговое окно «О программе» или страница «Релизы»).

## Благодарности

Предложения пресетов в «Простом» режиме в редакторе пресетов используют общедоступные данные оценки из:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (требуется указание авторства для данных API)

Лицензии сторонних зависимостей и эти уведомления об источниках данных перечислены в [NOTICES](../NOTICES).

## Лицензия

Авторское право © 2026 Уолдемар Скуделлер мл.

[Apache License 2.0](../LICENSE)

Названия продуктов и значки принадлежат их соответствующим владельцам и используются только в целях идентификации. Это программное обеспечение не связано с этими брендами и не одобрено ими.

<small>

> **Примечание о переводах пользовательского интерфейса и документации:** Все языки интерфейса и документации, кроме английского (Великобритания), были переведены с помощью ИИ с использованием [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); формулировки могут быть неточными или содержать ошибки.

</small>
