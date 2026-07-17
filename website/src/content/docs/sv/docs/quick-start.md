---
title: Snabbstart
description: >-
  Installera Transrewrt på Windows eller Linux, eller kör den självvärdade
  Docker-webbappen.
translation_last_updated: '2026-07-17T14:59:03.550Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: sv
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



Välj den väg som passar dig. Alla är gratis och öppen källkod (Apache 2.0).

## Docker (självvärdad webb)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ersätt `PROVIDER_API_KEY=sk-or-your-key` med din API-nyckel från din valda leverantör (se alternativ som stöds i [Konfiguration](/docs/configuration/)).

Öppna sedan [http://localhost:5000](http://localhost:5000) och **ändra standardlösenordet för administratören** innan du exponerar tjänsten.

:::caution
I Docker ställs LLM-autentiseringsuppgifter in med miljövariabler (till exempel `PROVIDER_API_KEY`). De anges **inte** i webbgränssnittet. På skrivbordet konfigurerar du nycklar i **Inställningar → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Ladda ner den senaste `Transrewrt Setup x.y.z.exe` från [Releases](https://github.com/wsj-br/transrewrt/releases).
2. Kör installationsprogrammet.
3. Öppna appen och ange API-nycklar under **Inställningar → API**. Konfigurera minst en leverantör; OpenRouter är ett vanligt val för gratismodeller.

:::note
Windows kan visa UAC- eller SmartScreen-varningar för osignerade indieappar. Föredra nedladdningar från den officiella GitHub Releases-sidan och verifiera kontrollsummor när de publiceras.
:::

## Linux

Ladda ner `.AppImage` för din CPU från [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` eller `arm64`, inklusive Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ange API-nycklar under **Inställningar → API**.

Om Chromium skriver ut GPU-/EGL-fel men appen fungerar kan du inaktivera hårdvaruacceleration:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS stöds för närvarande inte. Transrewrt är tillgängligt för Windows, Linux och Docker.
:::

## Nästa steg

1. [Skaffa en API-nyckel](/docs/api-key/)
2. Kör en enkel översättning för att bekräfta att allt fungerar
3. Läs guiderna [Översätt](/docs/translate/), [Skriv om](/docs/rewrite/) och [Transformera](/docs/transform/)
