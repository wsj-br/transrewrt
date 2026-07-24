<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Outil de texte alimenté par l'IA : **traduisez**, **réécrivez** et **transformez** avec des invites personnalisées — en utilisant vos propres fournisseurs d'IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, points de terminaison compatibles OpenAI, et serveurs locaux compatibles OpenAI tels que Ollama, LM Studio ou llama.cpp). Application de bureau (Windows / Linux) ou application web auto-hébergée (Docker). Pas de compte cloud Transrewrt.

| | |
| --- | --- |
| **Traduire** | Des dizaines de langues, détection automatique, glossaires, affiner avec la reformulation |
| **Réécriture** | Clarté, ton, longueur, orthographe et grammaire — même langue |
| **Transformation** | Invites IA personnalisées que vous créez, modifiez et réutilisez |
| **Déployer** | Application de bureau Electron ou web Docker (amd64 & arm64) |
| **Clés** | Vos fournisseurs, votre hôte — Préréglages faciles ou liste de modèles avancés |

![Traduire](../images/screenshots/fr/translate.png)

<small>**Lire dans d'autres langues :** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Démarrage rapide

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

Remplacez `PROVIDER_API_KEY` par la variable de votre fournisseur (par exemple `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`). Ouvrez [http://localhost:5000](http://localhost:5000) et modifiez le mot de passe administrateur par défaut. Les clés sont définies via des variables d'environnement (et non l'interface utilisateur web).

**Windows** — Téléchargez `Transrewrt Setup x.y.z.exe` depuis [Releases](https://github.com/wsj-br/transrewrt/releases), installez, puis ajoutez les clés dans **Paramètres → API**.

**Linux** — Téléchargez le `.AppImage` depuis [Releases](https://github.com/wsj-br/transrewrt/releases), puis :

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Détails de la plateforme (Compose, SmartScreen, bibliothèques apt, drapeaux GPU, fuseau horaire) : [Documentation de démarrage rapide](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Documentation

Documentation complète du produit (installation, clés API, guides, paramètres, dépannage) :

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [Clé API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Configuration](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Traduire](https://wsj-br.github.io/transrewrt/docs/translate/) · [Réécriture](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Transformation](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Problèmes courants](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Développement

- Configuration, build, test, déploiement : [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Vue d'ensemble de l'architecture : [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Support

Ouvrez une issue sur [GitHub](https://github.com/wsj-br/transrewrt/issues). Incluez votre plateforme (Windows / Linux / Docker) et la version de l'application (boîte de dialogue À propos ou page Releases).

## Remerciements

Les suggestions de préréglages en mode Facile dans l'éditeur de préréglages utilisent les données d'évaluation publiques de :

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (attribution requise pour les données d'API)

Les licences des dépendances tierces et ces avis de source de données sont répertoriés dans [NOTICES](../NOTICES).

## Licence

Droit d'auteur © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Les noms de produits et les icônes appartiennent à leurs propriétaires respectifs et sont utilisés à des fins d'identification uniquement. Ce logiciel n'est pas affilié à ces marques ni approuvé par celles-ci.

<small>

> **Remarque sur les traductions de l'interface utilisateur et de la documentation :** Toutes les langues de l'interface et de la documentation, à l'exception de l'anglais d'origine, ont été traduites à l'aide de modèles d'IA utilisant [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/) ; la formulation peut être imprécise ou contenir des erreurs.

</small>
