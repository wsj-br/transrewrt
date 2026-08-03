---
title: Rychlý start
description: >-
  Nainstalujte Transrewrt na Windows nebo Linux, nebo spusťte webovou aplikaci
  Docker.
---



Vyberte si cestu, která vám vyhovuje. Všechny jsou zdarma a s otevřeným zdrojovým kódem (Apache 2.0).

## Docker (webová aplikace)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `PROVIDER_API_KEY` proměnnou pro vašeho poskytovatele (například `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) a nastavte její hodnotu. Úplný seznam naleznete v [Konfiguraci](/docs/configuration/#environment-variables-web--docker).

Poté otevřete [http://localhost:5000](http://localhost:5000) a **změňte výchozí heslo správce** před zpřístupněním služby.

:::tip
V Dockeru se přihlašovací údaje LLM nastavují pomocí proměnných prostředí (například `PROVIDER_API_KEY`). **Nezadávají** se do webového uživatelského rozhraní. Na počítači nakonfigurujete klíče v **Nastavení → Konfigurace API**.
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
3. Otevřete aplikaci a zadejte klíče API v **Nastavení → Konfigurace API**. Nakonfigurujte alespoň jednoho poskytovatele; OpenRouter je běžná volba pro bezplatné modely.

:::note
Při instalaci aplikace se v systému Windows mohou zobrazit upozornění UAC nebo SmartScreen. Instalace je bezpečná, pokud si ji stáhnete z oficiální stránky GitHub Releases. Pro instalaci klikněte na „Další informace“ a „Spustit i přesto“.
:::

## Linux

Stáhněte si `.AppImage` pro váš CPU z [Vydání](https://github.com/wsj-br/transrewrt/releases) (`x64` nebo `arm64`, včetně Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadejte klíče API v **Nastavení → Konfigurace API**.

Pokud Chromium tiskne chyby GPU / EGL, ale aplikace funguje, můžete zakázat hardwarovou akceleraci:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS v současné době není podporován. Transrewrt je k dispozici pro Windows, Linux a Docker.
:::

## Aktualizace

- **Windows** – stáhněte si novější `Transrewrt Setup x.y.z.exe` z [Vydání](https://github.com/wsj-br/transrewrt/releases) a spusťte jej. Nastavení a data zůstanou zachována.
- **Linux** – stáhněte si novější `.AppImage` a nahraďte starý soubor. Nastavení a data zůstanou zachována.
- **Docker** – stáhněte nový obraz a znovu vytvořte kontejner. Data přetrvávají ve svazku `/app/data`:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Další kroky

1. [Získejte klíč API](/docs/api-key/)
2. Spusťte jednoduchý překlad, abyste potvrdili, že vše funguje
3. Přečtěte si průvodce [Překlad](/docs/translate/), [Přepsání](/docs/rewrite/) a [Transformace](/docs/transform/)
