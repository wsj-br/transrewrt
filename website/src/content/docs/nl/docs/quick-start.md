---
title: Snelstart
description: >-
  Installeer Transrewrt op Windows of Linux, of draai de zelf-gehoste Docker
  web-app.
---



Kies het pad dat bij u past. Alle zijn gratis en open source (Apache 2.0).

## Docker (zelf-gehoste web)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Vervang `PROVIDER_API_KEY=sk-or-your-key` door uw API-sleutel van de door u gekozen provider (zie ondersteunde opties in [Configuratie](/docs/configuration/)).

Open vervolgens [http://localhost:5000](http://localhost:5000) en **wijzig het standaard beheerderswachtwoord** voordat u de service beschikbaar maakt.

:::caution
In Docker worden LLM-referenties ingesteld met omgevingsvariabelen (bijvoorbeeld `PROVIDER_API_KEY`). Ze worden **niet** ingevoerd in de web-UI. Op de desktop configureert u sleutels in **Instellingen → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Download de nieuwste `Transrewrt Setup x.y.z.exe` van [Releases](https://github.com/wsj-br/transrewrt/releases).
2. Voer het installatieprogramma uit.
3. Open de app en voer API-sleutels in bij **Instellingen → API**. Configureer ten minste één provider; OpenRouter is een veelvoorkomende keuze voor gratis modellen.

:::note
Windows kan UAC- of SmartScreen-waarschuwingen weergeven voor niet-ondertekende indie-apps. Geef de voorkeur aan downloads van de officiële GitHub Releases-pagina en verifieer checksums wanneer deze worden gepubliceerd.
:::

## Linux

Download de `.AppImage` voor uw CPU van [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` of `arm64`, inclusief Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Voer API-sleutels in bij **Instellingen → API**.

Als Chromium GPU / EGL-fouten afdrukt, maar de app werkt, kunt u hardwareversnelling uitschakelen:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS wordt momenteel niet ondersteund. Transrewrt is beschikbaar voor Windows, Linux en Docker.
:::

## Volgende stappen

1. [Haal een API-sleutel op](/docs/api-key/)
2. Voer een eenvoudige vertaling uit om te bevestigen dat alles werkt
3. Lees de handleidingen [Vertalen](/docs/translate/), [Herschrijven](/docs/rewrite/) en [Transformeren](/docs/transform/)
