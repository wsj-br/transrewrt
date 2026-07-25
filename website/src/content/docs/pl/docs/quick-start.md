---
title: Szybki start
description: >-
  Zainstaluj Transrewrt w systemie Windows lub Linux albo uruchom samodzielnie
  hostowaną aplikację internetową Docker.
---



Wybierz ścieżkę, która Ci odpowiada. Wszystkie są bezpłatne i open source (Apache 2.0).

## Docker (samodzielnie hostowana aplikacja internetowa)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Zastąp `PROVIDER_API_KEY` zmienną dla swojego dostawcy (na przykład `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) i ustaw jej wartość. Pełną listę znajdziesz w [Konfiguracji](/docs/configuration/#environment-variables-web--docker).

Następnie otwórz [http://localhost:5000](http://localhost:5000) i **zmień domyślne hasło administratora** przed udostępnieniem usługi.

:::tip
W Dockerze poświadczenia LLM są ustawiane za pomocą zmiennych środowiskowych (na przykład `PROVIDER_API_KEY`). **Nie** wprowadza się ich w interfejsie użytkownika. Na komputerze stacjonarnym klucze konfiguruje się w **Ustawienia → Konfiguracja API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Pobierz najnowszy plik `Transrewrt Setup x.y.z.exe` z [Wydań](https://github.com/wsj-br/transrewrt/releases).
2. Uruchom instalator.
3. Otwórz aplikację i wprowadź klucze API w **Ustawienia → Konfiguracja API**. Skonfiguruj co najmniej jednego dostawcę; OpenRouter jest często wybieranym rozwiązaniem dla darmowych modeli.

:::note
System Windows może wyświetlać ostrzeżenia UAC lub SmartScreen podczas instalacji aplikacji. Instalacja jest bezpieczna, jeśli pobierzesz ją z oficjalnej strony GitHub Releases. Kliknij „Więcej informacji” i „Uruchom mimo to”, aby zainstalować.
:::

## Linux

Pobierz plik `.AppImage` dla swojego procesora z [Wydań](https://github.com/wsj-br/transrewrt/releases) (`x64` lub `arm64`, w tym Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Wprowadź klucze API w **Ustawienia → Konfiguracja API**.

Jeśli Chromium wyświetla błędy GPU / EGL, ale aplikacja działa, możesz wyłączyć akcelerację sprzętową:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
System macOS nie jest obecnie obsługiwany. Transrewrt jest dostępny dla systemów Windows, Linux i Docker.
:::

## Aktualizacja

- **Windows** — pobierz nowszy plik `Transrewrt Setup x.y.z.exe` z [Wydań](https://github.com/wsj-br/transrewrt/releases) i uruchom go. Ustawienia i dane zostaną zachowane.
- **Linux** — pobierz nowszy plik `.AppImage` i zastąp stary plik. Ustawienia i dane zostaną zachowane.
- **Docker** — pobierz nowy obraz i utwórz ponownie kontener. Dane są przechowywane w woluminie `/app/data`:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Następne kroki

1. [Uzyskaj klucz API](/docs/api-key/)
2. Wykonaj proste tłumaczenie, aby potwierdzić, że wszystko działa
3. Przeczytaj przewodniki [Tłumaczenie](/docs/translate/), [Przepisywanie](/docs/rewrite/) i [Transformacja](/docs/transform/)
