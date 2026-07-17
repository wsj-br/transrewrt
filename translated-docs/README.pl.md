<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Narzędzie tekstowe oparte na sztucznej inteligencji: **tłumacz**, **przerabiaj** i **transformuj** za pomocą niestandardowych promptów — korzystając z własnych dostawców AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, punktów końcowych zgodnych z OpenAI oraz lokalnych serwerów zgodnych z OpenAI, takich jak Ollama, LM Studio lub llama.cpp). Aplikacja desktopowa (Windows / Linux) lub samodzielnie hostowana aplikacja internetowa (Docker). Brak konta Transrewrt w chmurze.

| | |
| --- | --- |
| **Tłumacz** | Dziesiątki języków, automatyczne wykrywanie, słowniki, udoskonalanie za pomocą funkcji Przeróbka |
| **Przeróbka** | Klarowność, ton, długość, pisownia i gramatyka — ten sam język |
| **Transformacja** | Niestandardowe podpowiedzi AI, które tworzysz, edytujesz i ponownie wykorzystujesz |
| **Wdrażanie** | Aplikacja desktopowa Electron lub aplikacja internetowa Docker (amd64 i arm64) |
| **Klucze** | Twoi dostawcy, Twój host — Łatwe ustawienia wstępne lub Zaawansowana lista modeli |

![Tłumacz](../images/screenshots/pl/translate.png)

<small>**Przeczytaj w innych językach:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **Uwaga dotycząca tłumaczeń interfejsu i dokumentacji:** Wszystkie języki interfejsu oprócz oryginalnego angielskiego (Wielka Brytania) 
> zostały przetłumaczone przy użyciu modeli AI; sformułowania mogą być niedokładne lub zawierać błędy.

</small>

## Szybki start

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

Otwórz [http://localhost:5000](http://localhost:5000) i zmień domyślne hasło administratora. Klucze dostawcy są ustawiane za pomocą zmiennych środowiskowych (nie interfejsu internetowego).

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

## Licencja

Prawa autorskie © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Nazwy produktów i ikony należą do ich odpowiednich właścicieli i są używane wyłącznie do celów identyfikacyjnych. To oprogramowanie nie jest powiązane z tymi markami ani przez nie wspierane.
