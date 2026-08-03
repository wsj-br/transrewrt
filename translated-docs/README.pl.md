<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.3-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Narzędzie tekstowe oparte na sztucznej inteligencji do **tłumaczenia**, **przepisywania** i **transformacji** z niestandardowymi podpowiedziami. Korzystaj z własnych dostawców AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, punktów końcowych zgodnych z OpenAI oraz lokalnych serwerów, takich jak Ollama, LM Studio lub llama.cpp). Uruchom jako aplikację desktopową (Windows / Linux) lub samodzielnie hostowaną aplikację internetową (Docker). Brak konta Transrewrt w chmurze.

## Funkcje

| Możliwość | Opis |
| --- | --- |
| **Tłumacz** | Dziesiątki języków, automatyczne wykrywanie, słowniki, dopracowywanie za pomocą funkcji Parafrazuj |
| **Przeróbka** | Klarowność, ton, długość, pisownia i gramatyka — ten sam język |
| **Transformacja** | Niestandardowe podpowiedzi AI, które tworzysz, edytujesz i ponownie wykorzystujesz |
| **Wdrażanie** | Aplikacja desktopowa Electron lub aplikacja internetowa Docker (amd64 i arm64) |
| **Klucze** | Twoi dostawcy, Twój host — Łatwe ustawienia wstępne lub Zaawansowana lista modeli |

![Tłumacz](../images/screenshots/pl/translate.png)

<small>**Przeczytaj w innych językach:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Szybki start

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

Zastąp `PROVIDER_API_KEY` zmienną dostawcy (na przykład `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`). Otwórz [http://localhost:5000](http://localhost:5000) i zmień domyślne hasło administratora. Klucze są ustawiane za pomocą zmiennych środowiskowych (nie interfejsu użytkownika sieci web).

**Windows** — Pobierz `Transrewrt Setup x.y.z.exe` z [Wydań](https://github.com/wsj-br/transrewrt/releases), zainstaluj, a następnie dodaj klucze w **Ustawienia → API**.

**Linux** — Pobierz `.AppImage` z [Wydań](https://github.com/wsj-br/transrewrt/releases), a następnie:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Szczegóły platformy (Compose, SmartScreen, biblioteki apt, flagi GPU, strefa czasowa): [Dokumentacja szybkiego startu](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Dokumentacja

Pełna dokumentacja produktu (instalacja, klucze API, przewodniki, ustawienia, rozwiązywanie problemów):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [Klucz API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Konfiguracja](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Tłumacz](https://wsj-br.github.io/transrewrt/docs/translate/) · [Przeróbka](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Transformacja](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Częste problemy](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Rozwój

- Konfiguracja, kompilacja, testowanie, wdrażanie: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Przegląd architektury: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Wsparcie

Otwórz zgłoszenie na [GitHub](https://github.com/wsj-br/transrewrt/issues). Podaj swoją platformę (Windows / Linux / Docker) i wersję aplikacji (okno O aplikacji lub strona Wydań).

## Podziękowania

Sugestie presetów w trybie Łatwym w edytorze presetów korzystają z publicznych danych ewaluacyjnych z:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (wymagana atrybucja dla danych API)

Licencje zależności stron trzecich i te informacje o źródłach danych są wymienione w [NOTICES](../NOTICES).

## Licencja

Prawa autorskie © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Nazwy produktów i ikony należą do ich właścicieli i są używane wyłącznie w celach identyfikacyjnych. To oprogramowanie nie jest powiązane z tymi markami ani przez nie wspierane.

<small>

> **Uwaga dotycząca tłumaczeń interfejsu użytkownika i dokumentacji:** Wszystkie języki interfejsu i dokumentacji, z wyjątkiem angielskiego (Wielka Brytania), zostały przetłumaczone za pomocą sztucznej inteligencji przy użyciu [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); sformułowania mogą być niedokładne lub zawierać błędy.

</small>
