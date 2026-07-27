<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Instrument de text bazat pe inteligență artificială pentru **traducere**, **rescriere** și **transformare** cu prompturi personalizate. Utilizați proprii furnizori de inteligență artificială (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, puncte finale compatibile cu OpenAI și servere locale precum Ollama, LM Studio sau llama.cpp). Rulați ca aplicație desktop (Windows / Linux) sau ca aplicație web auto-găzduită (Docker). Fără cont Transrewrt cloud.

## Caracteristici

| Capacitate | Descriere |
| --- | --- |
| **Traducere** | Zeci de limbi, detectare automată, glosare, rafinare cu Parafrazare |
| **Reescriere** | Claritate, ton, lungime, ortografie și gramatică — aceeași limbă |
| **Transformare** | Prompturi AI personalizate pe care le creați, editați și reutilizați |
| **Implementare** | Desktop Electron sau web Docker (amd64 & arm64) |
| **Chei** | Furnizorii dvs., gazda dvs. — Presetări ușoare sau listă de modele avansate |

![Traducere](../images/screenshots/ro/translate.png)

<small>**Citește în alte limbi:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Pornire rapidă

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

Înlocuiți `PROVIDER_API_KEY` cu variabila furnizorului dvs. (de exemplu, `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`). Deschideți [http://localhost:5000](http://localhost:5000) și schimbați parola de Administrator implicită. Cheile sunt setate prin variabile de mediu (nu prin interfața web).

**Windows** — Descărcați `Transrewrt Setup x.y.z.exe` de la [Lansări](https://github.com/wsj-br/transrewrt/releases), instalați, apoi adăugați cheile în **Setări → API**.

**Linux** — Descărcați `.AppImage` de la [Lansări](https://github.com/wsj-br/transrewrt/releases), apoi:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Detalii platformă (Compose, SmartScreen, biblioteci apt, flag-uri GPU, fus orar): [Documentație de pornire rapidă](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Documentație

Documentație completă a produsului (instalare, chei API, ghiduri, setări, depanare):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [Cheie API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Configurare](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Traducere](https://wsj-br.github.io/transrewrt/docs/translate/) · [Reescriere](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Transformare](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Probleme comune](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Dezvoltare

- Configurare, compilare, testare, implementare: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Prezentare generală a arhitecturii: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Suport

Deschideți o problemă pe [GitHub](https://github.com/wsj-br/transrewrt/issues). Includeți platforma dvs. (Windows / Linux / Docker) și versiunea aplicației (dialogul Despre sau pagina Lansări).

## Mulțumiri

Sugestiile de presetări în modul Ușor din editorul de presetări utilizează date de evaluare publice de la:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (atribuire necesară pentru datele API)

Licențele dependențelor terțe și aceste notificări privind sursa de date sunt enumerate în [NOTICES](../NOTICES).

## Licență

Drepturi de autor © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Numele și pictogramele produselor aparțin proprietarilor respectivi și sunt utilizate doar în scopuri de identificare. Acest software nu este afiliat sau aprobat de aceste mărci.

<small>

> **Notă privind traducerile UI și ale documentației:** Toate limbile interfeței și ale documentației, cu excepția englezei (UK), au fost traduse cu AI folosind [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); formularea poate fi imprecisă sau poate conține erori.

</small>
