---
title: Snabbstart
description: >-
  Installera Transrewrt på Windows eller Linux, eller kör den självvärdade
  Docker-webbappen.
---



Välj den väg som passar dig. Alla är gratis och öppen källkod (Apache 2.0).

## Docker (självvärdad webb)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Ersätt `PROVIDER_API_KEY` med variabeln för din leverantör (till exempel `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) och ange dess värde. Se hela listan i [Konfiguration](/docs/configuration/#environment-variables-web--docker).

Öppna sedan [http://localhost:5000](http://localhost:5000) och **ändra standardlösenordet för administratören** innan du exponerar tjänsten.

:::tip
I Docker ställs LLM-autentiseringsuppgifter in med miljövariabler (till exempel `PROVIDER_API_KEY`). De anges **inte** i webbgränssnittet. På skrivbordet konfigurerar du nycklar i **Inställningar → API-konfiguration**.
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
3. Öppna appen och ange API-nycklar i **Inställningar → API-konfiguration**. Konfigurera minst en leverantör; OpenRouter är ett vanligt val för gratismodeller.

:::note
Windows kan visa UAC- eller SmartScreen-varningar när du installerar appen. Det är säkert att installera om du laddar ner den från den officiella GitHub Releases-sidan. Klicka på ”Mer info” och ”Kör ändå” för att installera.
:::

## Linux

Ladda ner `.AppImage` för din CPU från [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` eller `arm64`, inklusive Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ange API-nycklar i **Inställningar → API-konfiguration**.

Om Chromium skriver ut GPU-/EGL-fel men appen fungerar, kan du inaktivera hårdvaruacceleration:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS stöds för närvarande inte. Transrewrt är tillgängligt för Windows, Linux och Docker.
:::

## Uppdatering

- **Windows** — ladda ner den nyare `Transrewrt Setup x.y.z.exe` från [Releases](https://github.com/wsj-br/transrewrt/releases) och kör den. Inställningar och data behålls.
- **Linux** — ladda ner den nyare `.AppImage` och ersätt den gamla filen. Inställningar och data behålls.
- **Docker** — dra den nya avbildningen och återskapa containern. Data kvarstår i `/app/data`-volymen:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Nästa steg

1. [Skaffa en API-nyckel](/docs/api-key/)
2. Kör en enkel översättning för att bekräfta att allt fungerar
3. Läs guiderna [Översätt](/docs/translate/), [Skriv om](/docs/rewrite/) och [Transformera](/docs/transform/)
