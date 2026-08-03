---
title: Gyorsindítás
description: >-
  Telepítse a Transrewrt alkalmazást Windowsra vagy Linuxra, vagy futtassa a
  Docker webalkalmazást.
---



Válassza ki az Önnek megfelelő utat. Mindegyik ingyenes és nyílt forráskódú (Apache 2.0).

## Docker (webalkalmazás)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Cserélje ki az `PROVIDER_API_KEY` változót a szolgáltatójának megfelelő változóra (például `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...), és állítsa be az értékét. A teljes listát a [Konfiguráció](/docs/configuration/#environment-variables-web--docker) részben találja.

Ezután nyissa meg a [http://localhost:5000](http://localhost:5000) címet, és **változtassa meg az alapértelmezett adminisztrátori jelszót**, mielőtt elérhetővé tenné a szolgáltatást.

:::tip
Dockerben az LLM hitelesítő adatok környezeti változókkal (például `PROVIDER_API_KEY`) vannak beállítva. Ezeket **nem** a webes felhasználói felületen kell megadni. Asztali gépen a kulcsokat a **Beállítások → API konfiguráció** menüpontban konfigurálhatja.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Töltse le a legújabb `Transrewrt Setup x.y.z.exe` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról.
2. Futtassa a telepítőt.
3. Nyissa meg az alkalmazást, és adja meg az API kulcsokat a **Beállítások → API konfiguráció** menüpontban. Konfiguráljon legalább egy szolgáltatót; az OpenRouter gyakori választás az ingyenes modellekhez.

:::note
A Windows UAC vagy SmartScreen figyelmeztetéseket jeleníthet meg az alkalmazás telepítésekor. Biztonságos a telepítés, ha a hivatalos GitHub Releases oldalról tölti le. A telepítéshez kattintson a „További információ” és a „Futtatás mindenképpen” gombokra.
:::

## Linux

Töltse le a `.AppImage` fájlt a CPU-jához a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról (`x64` vagy `arm64`, beleértve a Raspberry Pi 4+-t is):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Adja meg az API kulcsokat a **Beállítások → API konfiguráció** menüpontban.

Ha a Chromium GPU / EGL hibákat ír ki, de az alkalmazás működik, letilthatja a hardveres gyorsítást:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
A macOS jelenleg nem támogatott. A Transrewrt elérhető Windows, Linux és Docker rendszerekre.
:::

## Frissítés

- **Windows** – töltse le az újabb `Transrewrt Setup x.y.z.exe` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról, és futtassa. A beállítások és az adatok megmaradnak.
- **Linux** – töltse le az újabb `.AppImage` fájlt, és cserélje le a régi fájlt. A beállítások és az adatok megmaradnak.
- **Docker** – húzza le az új képet, és hozza létre újra a tárolót. Az adatok megmaradnak a `/app/data` kötetben:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Következő lépések

1. [API kulcs beszerzése](/docs/api-key/)
2. Futtasson egy egyszerű fordítást, hogy megbizonyosodjon arról, hogy minden működik
3. Olvassa el a [Fordítás](/docs/translate/), [Átírás](/docs/rewrite/) és [Átalakítás](/docs/transform/) útmutatókat
