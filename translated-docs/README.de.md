<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

KI-gestütztes Textwerkzeug zum **Übersetzen**, **Umschreiben** und **Transformieren** mit benutzerdefinierten Prompts. Verwenden Sie Ihre eigenen KI-Anbieter (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI-kompatible Endpunkte und lokale Server wie Ollama, LM Studio oder llama.cpp). Läuft als Desktop-App (Windows / Linux) oder als selbst gehostete Web-App (Docker). Kein Transrewrt-Cloud-Konto.

## Funktionen

| Fähigkeit | Beschreibung |
| --- | --- |
| **Übersetzen** | Dutzende von Sprachen, automatische Erkennung, Glossare, Verfeinerung mit Umformulieren |
| **Umschreiben** | Klarheit, Ton, Länge, Rechtschreibung & Grammatik – gleiche Sprache |
| **Transformieren** | Benutzerdefinierte KI-Prompts, die Sie erstellen, bearbeiten und wiederverwenden |
| **Bereitstellen** | Electron Desktop oder Docker Web (amd64 & arm64) |
| **Schlüssel** | Ihre Anbieter, Ihr Host – Einfache Voreinstellungen oder erweiterte Modellliste |

![Übersetzen](../images/screenshots/de/translate.png)

<small>**In anderen Sprachen lesen:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Schnellstart

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

Ersetzen Sie `PROVIDER_API_KEY` durch Ihre Anbieter-Variable (z. B. `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`). Öffnen Sie [http://localhost:5000](http://localhost:5000) und ändern Sie das Standard-Administrator-Passwort. Schlüssel werden über Umgebungsvariablen (nicht die Web-UI) festgelegt.

**Windows** – Laden Sie `Transrewrt Setup x.y.z.exe` von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter, installieren Sie es und fügen Sie dann Schlüssel unter **Einstellungen → API** hinzu.

**Linux** – Laden Sie die `.AppImage` von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter, dann:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Plattformdetails (Compose, SmartScreen, apt libs, GPU flags, Zeitzone): [Schnellstart-Dokumentation](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Dokumentation

Vollständige Produktdokumentation (Installation, API-Schlüssel, Anleitungen, Einstellungen, Fehlerbehebung):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [API-Schlüssel](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Konfiguration](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Übersetzen](https://wsj-br.github.io/transrewrt/docs/translate/) · [Umschreiben](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Transformieren](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Häufige Probleme](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Entwicklung

- Setup, Build, Test, Bereitstellung: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Architekturübersicht: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Support

Eröffnen Sie ein Issue auf [GitHub](https://github.com/wsj-br/transrewrt/issues). Geben Sie Ihre Plattform (Windows / Linux / Docker) und die App-Version (Dialogfeld „Über“ oder Seite „Releases“) an.

## Danksagungen

Vorschläge für „Einfach“-Modus-Vorgaben im Vorgaben-Editor verwenden öffentliche Bewertungsdaten von:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (Namensnennung für API-Daten erforderlich)

Lizenzen von Drittanbieter-Abhängigkeiten und diese Hinweise zu Datenquellen sind in [NOTICES](../NOTICES) aufgeführt.

## Lizenz

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Produktnamen und -symbole gehören ihren jeweiligen Inhabern und werden nur zur Identifizierung verwendet. Diese Software ist nicht mit diesen Marken verbunden oder wird von ihnen unterstützt.

<small>

> **Hinweis zu UI- und Dokumentationsübersetzungen:** Alle Oberflächen- und Dokumentationssprachen außer Englisch (UK) wurden mit KI unter Verwendung von [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/) übersetzt; die Formulierung kann ungenau sein oder Fehler enthalten.

</small>
