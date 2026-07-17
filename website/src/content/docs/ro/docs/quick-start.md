---
title: Pornire rapidă
description: >-
  Instalați Transrewrt pe Windows sau Linux sau rulați aplicația web Docker
  auto-găzduită.
translation_last_updated: '2026-07-17T21:14:48.144Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: ro
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



Alegeți calea care vi se potrivește. Toate sunt gratuite și open source (Apache 2.0).

## Docker (web auto-găzduit)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Înlocuiți `PROVIDER_API_KEY=sk-or-your-key` cu cheia API de la furnizorul ales (vedeți opțiunile acceptate în [Configurare](/docs/configuration/)).

Apoi deschideți [http://localhost:5000](http://localhost:5000) și **schimbați parola de administrator implicită** înainte de a expune serviciul.

:::caution
În Docker, acreditările LLM sunt setate cu variabile de mediu (de exemplu `PROVIDER_API_KEY`). Acestea **nu** sunt introduse în interfața web. Pe desktop, configurați cheile în **Setări → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Descărcați cel mai recent `Transrewrt Setup x.y.z.exe` de la [Lansări](https://github.com/wsj-br/transrewrt/releases).
2. Rulați programul de instalare.
3. Deschideți aplicația și introduceți cheile API în **Setări → API**. Configurați cel puțin un furnizor; OpenRouter este o alegere comună pentru modele gratuite.

:::note
Windows poate afișa avertismente UAC sau SmartScreen pentru aplicațiile independente nesemnate. Preferă descărcările de pe pagina oficială GitHub Releases și verifică sumele de control atunci când sunt publicate.
:::

## Linux

Descărcați `.AppImage` pentru CPU-ul dvs. de la [Lansări](https://github.com/wsj-br/transrewrt/releases) (`x64` sau `arm64`, inclusiv Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduceți cheile API în **Setări → API**.

Dacă Chromium afișează erori GPU / EGL, dar aplicația funcționează, puteți dezactiva accelerarea hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS nu este acceptat în prezent. Transrewrt este disponibil pentru Windows, Linux și Docker.
:::

## Pașii următori

1. [Obțineți o cheie API](/docs/api-key/)
2. Rulați o traducere simplă pentru a confirma că totul funcționează
3. Citiți ghidurile [Traducere](/docs/translate/), [Rescriere](/docs/rewrite/) și [Transformare](/docs/transform/)
