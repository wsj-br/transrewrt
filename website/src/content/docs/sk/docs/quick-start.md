---
title: Rýchly štart
description: >-
  Nainštalujte Transrewrt v systéme Windows alebo Linux, prípadne spustite
  samoobslužnú webovú aplikáciu Docker.
translation_last_updated: '2026-07-17T14:59:03.858Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: sk
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
  - meta-llama/llama-3.3-70b-instruct
  - openai/gpt-4o-mini
---



Vyberte si cestu, ktorá vám vyhovuje. Všetky sú bezplatné a s otvoreným zdrojovým kódom (Apache 2.0).

## Docker (samoobslužná webová aplikácia)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `PROVIDER_API_KEY=sk-or-your-key` svojim API kľúčom od vášho vybraného poskytovateľa (pozri podporované možnosti v [Konfigurácia](/docs/configuration/)).

Potom otvorte [http://localhost:5000](http://localhost:5000) a **zmeňte predvolené heslo správcu** predtým, než službu vystavíte.

:::caution
V Dockeri sú poverenia LLM nastavené pomocou premenných prostredia (napríklad `PROVIDER_API_KEY`). **Nie sú** zadané v webovom UI. Na desktopovej verzii konfiguruješ kľúče v **Nastavenia → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Stiahnite si najnovší `Transrewrt Setup x.y.z.exe` z [Vydaní](https://github.com/wsj-br/transrewrt/releases).
2. Spustite inštalačný program.
3. Otvorte aplikáciu a zadajte kľúče API v časti **Nastavenia → API**. Nakonfigurujte aspoň jedného poskytovateľa; OpenRouter je bežnou voľbou pre bezplatné modely.

:::note
Windows môže zobrazovať upozornenia UAC alebo SmartScreen pre nepodpísané nezávislé aplikácie. Uprednostňujte sťahovanie z oficiálnej stránky GitHub Releases a overte kontrolné súčty, keď sú zverejnené.
:::

## Linux

Stiahnite si `.AppImage` pre váš procesor z [Vydaní](https://github.com/wsj-br/transrewrt/releases) (`x64` alebo `arm64`, vrátane Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadajte kľúče API v časti **Nastavenia → API**.

Ak Chromium vypisuje chyby GPU / EGL, ale aplikácia funguje, môžete vypnúť hardvérovú akceleráciu:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS momentálne nie je podporovaný. Transrewrt je k dispozícii pre Windows, Linux a Docker.
:::

## Ďalšie kroky

1. [Získajte kľúč API](/docs/api-key/)
2. Spustite jednoduchý preklad, aby ste potvrdili, že všetko funguje
3. Prečítajte si príručky [Preložiť](/docs/translate/), [Prepísať](/docs/rewrite/) a [Transformovať](/docs/transform/)
