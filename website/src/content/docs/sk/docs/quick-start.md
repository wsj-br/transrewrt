---
title: Rýchly štart
description: >-
  Nainštalujte Transrewrt v systéme Windows alebo Linux, prípadne spustite
  webovú aplikáciu Docker.
---



Vyberte si cestu, ktorá vám vyhovuje. Všetky sú bezplatné a open source (Apache 2.0).

## Docker (webová aplikácia)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `PROVIDER_API_KEY` premennou pre vášho poskytovateľa (napríklad `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) a nastavte jej hodnotu. Úplný zoznam nájdete v časti [Konfigurácia](/docs/configuration/#environment-variables-web--docker).

Potom otvorte [http://localhost:5000](http://localhost:5000) a **zmeňte predvolené heslo správcu** predtým, ako sprístupníte službu.

:::tip
V Docker sa poverenia LLM nastavujú pomocou premenných prostredia (napríklad `PROVIDER_API_KEY`). **Nezadávajú** sa do webového používateľského rozhrania. Na počítači konfigurujete kľúče v časti **Nastavenia → Konfigurácia API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Stiahnite si najnovší súbor `Transrewrt Setup x.y.z.exe` z [vydaní](https://github.com/wsj-br/transrewrt/releases).
2. Spustite inštalačný program.
3. Otvorte aplikáciu a zadajte kľúče API v časti **Nastavenia → Konfigurácia rozhrania API**. Nakonfigurujte aspoň jedného poskytovateľa; OpenRouter je bežná voľba pre bezplatné modely.

:::note
Systém Windows môže pri inštalácii aplikácie zobrazovať upozornenia UAC alebo SmartScreen. Inštalácia je bezpečná, ak si ju stiahnete z oficiálnej stránky GitHub Releases. Ak chcete nainštalovať, kliknite na „Viac informácií“ a „Spustiť aj tak“.
:::

## Linux

Stiahnite si súbor `.AppImage` pre váš procesor z [vydaní](https://github.com/wsj-br/transrewrt/releases) (`x64` alebo `arm64`, vrátane Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Zadajte kľúče API v časti **Nastavenia → Konfigurácia rozhrania API**.

Ak Chromium tlačí chyby GPU / EGL, ale aplikácia funguje, môžete vypnúť hardvérovú akceleráciu:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
Systém macOS momentálne nie je podporovaný. Transrewrt je k dispozícii pre Windows, Linux a Docker.
:::

## Aktualizácia

- **Windows** — stiahnite si novší súbor `Transrewrt Setup x.y.z.exe` z [vydaní](https://github.com/wsj-br/transrewrt/releases) a spustite ho. Nastavenia a dáta sa zachovajú.
- **Linux** — stiahnite si novší súbor `.AppImage` a nahraďte starý súbor. Nastavenia a dáta sa zachovajú.
- **Docker** — stiahnite nový obraz a znova vytvorte kontajner. Dáta pretrvávajú vo zväzku `/app/data`:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Ďalšie kroky

1. [Získajte kľúč API](/docs/api-key/)
2. Spustite jednoduchý preklad, aby ste potvrdili, že všetko funguje
3. Prečítajte si príručky [Preklad](/docs/translate/), [Prepísanie](/docs/rewrite/) a [Transformácia](/docs/transform/)
