---
title: Rychlý start
description: >-
  Nainstalujte Transrewrt na Windows nebo Linux, nebo spusťte webovou aplikaci
  Docker s vlastním hostováním.
translation_last_updated: '2026-07-17T21:14:42.229Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: cs
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



Vyberte si cestu, která vám vyhovuje. Všechny jsou zdarma a s otevřeným zdrojovým kódem (Apache 2.0).

## Docker (web s vlastním hostováním)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `PROVIDER_API_KEY=sk-or-your-key` svým API klíčem od zvoleného poskytovatele (viz podporované možnosti v [Konfiguraci](/docs/configuration/)).

Poté otevřete [http://localhost:5000](http://localhost:5000) a **změňte výchozí heslo správce**, než službu vystavíte.

:::caution
V Dockeru se přihlašovací údaje LLM nastavují pomocí proměnných prostředí (například `PROVIDER_API_KEY`). **Nezadávají** se do webového uživatelského rozhraní. Na počítači konfigurujete klíče v **Nastavení → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Stáhněte si nejnovější `Transrewrt Setup x.y.z.exe` z [Vydání](https://github.com/wsj-br/transrewrt/releases).
2. Spusťte instalační program.
3. Otevřete aplikaci a zadejte klíče API v **Nastavení → API**. Nakonfigurujte alespoň jednoho poskytovatele; OpenRouter je běžnou volbou pro bezplatné modely.

:::note
Windows mohou zobrazovat upozornění UAC nebo SmartScreen pro nepodepsané nezávislé aplikace. Upřednostňujte stahování z oficiální stránky GitHub Releases a ověřte kontrolní součty, pokud jsou zveřejněny.
:::

## Linux

Stáhněte si `.AppImage` pro váš CPU z [Vydání](https://github.com/wsj-br/transrewrt/releases) (`x64` nebo `arm64`, včetně Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadejte klíče API v **Nastavení → API**.

Pokud Chromium tiskne chyby GPU / EGL, ale aplikace funguje, můžete zakázat hardwarovou akceleraci:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS aktuálně není podporován. Transrewrt je k dispozici pro Windows, Linux a Docker.
:::

## Další kroky

1. [Získejte klíč API](/docs/api-key/)
2. Spusťte jednoduchý překlad a ověřte, že vše funguje
3. Přečtěte si průvodce [Překlad](/docs/translate/), [Přepsání](/docs/rewrite/) a [Transformace](/docs/transform/)
