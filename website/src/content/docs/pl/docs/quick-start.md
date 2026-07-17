---
title: Szybki start
description: >-
  Zainstaluj Transrewrt w systemie Windows lub Linux albo uruchom samodzielną
  aplikację internetową Docker.
translation_last_updated: '2026-07-17T14:58:58.938Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: pl
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



Wybierz ścieżkę, która Ci odpowiada. Wszystkie są bezpłatne i open source (Apache 2.0).

## Docker (aplikacja internetowa hostowana samodzielnie)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Zastąp `PROVIDER_API_KEY=sk-or-your-key` swoim kluczem API od wybranego dostawcy (zobacz obsługiwane opcje w [Konfiguracji](/docs/configuration/)).

Następnie otwórz [http://localhost:5000](http://localhost:5000) i **zmień domyślne hasło administratora**, zanim udostępnisz usługę.

:::caution
W Dockerze, poświadczenia LLM są ustawiane za pomocą zmiennych środowiskowych (na przykład `PROVIDER_API_KEY`). **Nie** wprowadza się ich w interfejsie użytkownika. Na komputerze stacjonarnym klucze konfiguruje się w **Ustawienia → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Pobierz najnowszą wersję `Transrewrt Setup x.y.z.exe` z [Wydań](https://github.com/wsj-br/transrewrt/releases).
2. Uruchom instalator.
3. Otwórz aplikację i wprowadź klucze API w **Ustawienia → API**. Skonfiguruj co najmniej jednego dostawcę; OpenRouter to popularny wybór dla bezpłatnych modeli.

:::note
System Windows może wyświetlać ostrzeżenia UAC lub SmartScreen dla niepodpisanych aplikacji niezależnych. Preferuj pobieranie z oficjalnej strony wydań GitHub i weryfikuj sumy kontrolne, gdy są publikowane.
:::

## Linux

Pobierz `.AppImage` dla swojego procesora z [Wydań](https://github.com/wsj-br/transrewrt/releases) (`x64` lub `arm64`, w tym Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Wprowadź klucze API w **Ustawienia → API**.

Jeśli Chromium wyświetla błędy GPU / EGL, ale aplikacja działa, możesz wyłączyć akcelerację sprzętową:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
System macOS nie jest obecnie obsługiwany. Transrewrt jest dostępny dla systemów Windows, Linux i Docker.
:::

## Następne kroki

1. [Uzyskaj klucz API](/docs/api-key/)
2. Uruchom proste tłumaczenie, aby potwierdzić, że wszystko działa
3. Przeczytaj przewodniki [Tłumaczenie](/docs/translate/), [Przepisywanie](/docs/rewrite/) i [Transformacja](/docs/transform/)
