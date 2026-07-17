<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Інструмент для роботи з текстом на базі ШІ: **перекладайте**, **переписуйте** та **трансформуйте** за допомогою власних підказок — використовуючи ваших власних постачальників ШІ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI-сумісні кінцеві точки та локальні OpenAI-сумісні сервери, такі як Ollama, LM Studio або llama.cpp). Десктопний застосунок (Windows / Linux) або веб-застосунок із самостійним розміщенням (Docker). Без хмарного облікового запису Transrewrt.

| | |
| --- | --- |
| **Перекласти** | Десятки мов, автовизначення, глосарії, уточнення за допомогою функції «Перефразувати» |
| **Перезапис** | Чіткість, тон, довжина, орфографія та граматика — тією ж мовою |
| **Трансформація** | Спеціальні підказки ШІ, які ви створюєте, редагуєте та повторно використовуєте |
| **Розгортання** | Настільний додаток Electron або веб-додаток Docker (amd64 та arm64) |
| **Ключі** | Ваші постачальники, ваш хост — Легкі попередні налаштування або Розширений список моделей |

![Перекласти](../images/screenshots/uk/translate.png)

<small>**Читати іншими мовами:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Швидкий старт

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Відкрийте [http://localhost:5000](http://localhost:5000) та змініть пароль адміністратора за замовчуванням. Ключі постачальника встановлюються через змінні середовища (не через веб-інтерфейс).

**Windows** — Завантажте `Transrewrt Setup x.y.z.exe` з [Релізів](https://github.com/wsj-br/transrewrt/releases), встановіть, а потім додайте ключі в **Налаштування → API**.

**Linux** — Завантажте `.AppImage` з [Релізів](https://github.com/wsj-br/transrewrt/releases), а потім:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Деталі платформи (Compose, SmartScreen, бібліотеки apt, прапорці GPU, часовий пояс): [Документація зі швидкого старту](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Документація

Повна документація продукту (встановлення, ключі API, посібники, налаштування, усунення несправностей):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [Ключ API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Конфігурація](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Перекласти](https://wsj-br.github.io/transrewrt/docs/translate/) · [Перезапис](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Трансформація](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Поширені проблеми](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Розробка

- Налаштування, збірка, тестування, розгортання: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Огляд архітектури: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Підтримка

Відкрийте проблему на [GitHub](https://github.com/wsj-br/transrewrt/issues). Вкажіть свою платформу (Windows / Linux / Docker) та версію програми (діалогове вікно «Про програму» або сторінка «Релізи»).

## Ліцензія

Авторське право © 2026 Вальдемар Скуделлер молодший.

[Apache License 2.0](../LICENSE)

Назви продуктів та іконки належать їхнім відповідним власникам і використовуються лише для ідентифікації. Це програмне забезпечення не пов’язане з цими брендами та не підтримується ними.

<small>

> **Примітка щодо перекладів інтерфейсу користувача та документації:** Усі мови інтерфейсу та документації, окрім 
> оригінальної англійської, були перекладені за допомогою моделей ШІ з використанням [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); 
> формулювання може бути неточним або містити помилки.

</small>
