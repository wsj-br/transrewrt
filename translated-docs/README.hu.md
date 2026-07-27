<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

AI-alapú szöveges eszköz **fordításhoz**, **átíráshoz** és **átalakításhoz** egyéni promptokkal. Használja saját AI-szolgáltatóit (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI-kompatibilis végpontok és helyi szerverek, mint például az Ollama, LM Studio vagy llama.cpp). Futtatható asztali alkalmazásként (Windows / Linux) vagy saját üzemeltetésű webalkalmazásként (Docker). Nincs Transrewrt felhőfiók.

## Funkciók

| Képesség | Leírás |
| --- | --- |
| **Fordítás** | Több tucat nyelv, automatikus felismerés, szószedetek, finomítás átfogalmazással |
| **Átírás** | Tisztaság, hangnem, hossz, helyesírás és nyelvtan – azonos nyelven |
| **Átalakítás** | Egyéni AI-promptok, amelyeket Ön hoz létre, szerkeszt és újra felhasznál |
| **Telepítés** | Electron asztali vagy Docker web (amd64 és arm64) |
| **Kulcsok** | Az Ön szolgáltatói, az Ön gazdagépe – Egyszerű előbeállítások vagy Haladó modelllista |

![Fordítás](../images/screenshots/hu/translate.png)

<small>**Olvassa más nyelveken:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Gyorsindítás

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Cserélje le az `PROVIDER_API_KEY` elemet a szolgáltatói változóra (például `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`). Nyissa meg a [http://localhost:5000](http://localhost:5000) címet, és módosítsa az alapértelmezett rendszergazdai jelszót. A kulcsok környezeti változókon keresztül vannak beállítva (nem a webes felhasználói felületen keresztül).

**Windows** – Töltse le az `Transrewrt Setup x.y.z.exe` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról, telepítse, majd adja hozzá a kulcsokat a **Beállítások → API** menüpontban.

**Linux** – Töltse le az `.AppImage` fájlt a [Kiadások](https://github.com/wsj-br/transrewrt/releases) oldalról, majd:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Platform részletek (Compose, SmartScreen, apt libs, GPU jelzők, időzóna): [Gyorsindítási dokumentáció](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Dokumentáció

Teljes termékdokumentáció (telepítés, API kulcsok, útmutatók, beállítások, hibaelhárítás):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [API kulcs](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Konfiguráció](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Fordítás](https://wsj-br.github.io/transrewrt/docs/translate/) · [Átírás](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Átalakítás](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Gyakori problémák](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Fejlesztés

- Beállítás, buildelés, tesztelés, telepítés: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Architektúra áttekintés: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Támogatás

Nyisson egy hibajegyet a [GitHub](https://github.com/wsj-br/transrewrt/issues) oldalon. Adja meg platformját (Windows / Linux / Docker) és az alkalmazás verzióját (Névjegy párbeszédpanel vagy Kiadások oldal).

## Köszönetnyilvánítás

Az előbeállítások szerkesztőjében található Egyszerű-mód előbeállítási javaslatok nyilvános értékelési adatokat használnak a következő forrásokból:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (az API adatokhoz attribúció szükséges)

A harmadik féltől származó függőségek licencei és ezek az adatforrás-értesítések a [NOTICES](../NOTICES) fájlban találhatók.

## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

A terméknevek és ikonok a megfelelő tulajdonosok tulajdonát képezik, és csak azonosítási célokra használják őket. Ez a szoftver nem áll kapcsolatban ezekkel a márkákkal, és nem is támogatja őket.

<small>

> **Megjegyzés a felhasználói felület és a dokumentáció fordításairól:** Az angol (UK) kivételével az összes felület- és dokumentációs nyelvet AI fordította a [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/) segítségével; a megfogalmazás pontatlan lehet, vagy hibákat tartalmazhat.

</small>
