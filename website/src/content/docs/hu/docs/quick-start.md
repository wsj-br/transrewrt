---
title: Gyorsindítás
description: >-
  Telepítse a Transrewrt alkalmazást Windowsra vagy Linuxra, vagy futtassa az
  önállóan üzemeltetett Docker webalkalmazást.
translation_last_updated: '2026-07-17T14:58:59.565Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: hu
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



Válassza ki az Önnek megfelelő utat. Mindegyik ingyenes és nyílt forráskódú (Apache 2.0).

## Docker (önállóan üzemeltetett web)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Cserélje le az `PROVIDER_API_KEY=sk-or-your-key` elemet a választott szolgáltatótól származó API-kulcsára (lásd a támogatott lehetőségeket a [Konfiguráció](/docs/configuration/) részben).

Ezután nyissa meg a [http://localhost:5000](http://localhost:5000) címet, és **változtassa meg az alapértelmezett rendszergazdai jelszót**, mielőtt elérhetővé tenné a szolgáltatást.

:::caution
Dockerben az LLM hitelesítő adatok környezeti változókkal vannak beállítva (például `PROVIDER_API_KEY`). Ezek **nincsenek** beírva a webes felhasználói felületre. Asztali számítógépen a kulcsokat a **Beállítások → API** menüpontban konfigurálhatja.
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
3. Nyissa meg az alkalmazást, és adja meg az API kulcsokat a **Beállítások → API** menüpontban. Konfiguráljon legalább egy szolgáltatót; az OpenRouter gyakori választás az ingyenes modellekhez.

:::note
A Windows UAC vagy SmartScreen figyelmeztetéseket jeleníthet meg az aláíratlan független alkalmazások esetében. Előnyben részesítse a hivatalos GitHub Kiadások oldalról történő letöltéseket, és ellenőrizze az ellenőrző összegeket, amikor közzéteszik.
:::

## Linux

Töltse le a `.AppImage` fájlt a CPU-jához a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról (`x64` vagy `arm64`, beleértve a Raspberry Pi 4+-t is):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Adja meg az API kulcsokat a **Beállítások → API** menüpontban.

Ha a Chromium GPU / EGL hibákat jelez, de az alkalmazás működik, letilthatja a hardveres gyorsítást:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
A macOS jelenleg nem támogatott. A Transrewrt elérhető Windows, Linux és Docker rendszerekre.
:::

## Következő lépések

1. [API kulcs beszerzése](/docs/api-key/)
2. Futtasson egy egyszerű fordítást, hogy megbizonyosodjon arról, minden működik
3. Olvassa el a [Fordítás](/docs/translate/), [Újraírás](/docs/rewrite/) és [Átalakítás](/docs/transform/) útmutatókat
