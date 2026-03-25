---
translated_at: "2026-03-25T22:13:39.633Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo de Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licence : Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plateforme">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Outil de traitement de texte alimenté par l’IA : traduire entre langues, réécrire dans différents styles, et transformer avec des invites personnalisées — en utilisant plusieurs fournisseurs d’IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, et Ollama local). Fonctionne comme une application de bureau (Electron) ou une application web auto-hébergée (Docker).

- **Traduire** — entre des dizaines de langues, avec détection automatique de la langue source
- **Réécrire** — corriger la grammaire, améliorer la clarté, passer au formel/informel, raccourcir, développer, version technique
- **Transformer** — invites personnalisées vers l’IA ; créer et gérer des invites, langue cible facultative par invite
- **Historique** — historique complet des exécutions avec texte d’entrée/sortie, filtres et exportation
- **Modèles et coûts** — choisir des modèles parmi tous les fournisseurs configurés ; tableaux de bord sur les coûts et l’utilisation avec journaux, résumés par modèle/opération/jour
- **Interface utilisateur** — interface multilingue (30+ langues, prise en charge RTL), polices, …
- **Mode web** — support multi-utilisateur avec rôles administrateur
- **Bureau** — application Electron pour Windows et Linux
- **Auto-hébergé** — image Docker pour amd64 & arm64 (compatible Raspberry Pi)

Une fois installé, consultez le **[Guide utilisateur](USER-GUIDE.fr.md)** pour une présentation complète de toutes les fonctionnalités.

<small>**Lire dans d'autres langues :** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Remarque sur les traductions de l’interface et de la documentation :** Toutes les langues de l’interface autres que l’anglais (UK) d’origine ont été traduites à l’aide de modèles d’IA ; le texte peut être imprécis ou contenir des erreurs.

</small>

<br/>

<a id="screenshots"></a>
## Captures d'écran

**Sélecteur de langue**

![Sélecteur de langue](../images/screenshots/fr/language-selector.png)

**Traduction**

![Traduction](../images/screenshots/fr/translate.png)

**Transformer - éditeur d'invite**

![Transformer - éditeur d'invite](../images/screenshots/fr/transform-prompt-edit.png)

**Tableau de bord**

![Tableau de bord des coûts](../images/screenshots/fr/dashboard-summary.png)

**Historique**

![Historique](../images/screenshots/fr/history.png)

**Paramètres - sélection du modèle**

![Paramètres - sélection du modèle](../images/screenshots/fr/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Table des matières

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Démarrage rapide](#quick-start)
- [Installation](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obtenir une clé API OpenRouter](#getting-an-openrouter-api-key)
- [Configuration et environnement](#configuration-and-environment)
- [Développement et architecture](#development-and-architecture)
- [Versions publiées et étiquettes](#releases-and-tags)
- [Contribution](#contributing)
- [Avertissement](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Démarrage rapide

**Docker (recommandé pour l'auto-hébergement)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Remplacez `sk-or-your-key` par votre [clé API OpenRouter](https://openrouter.ai/keys) (ou définissez les clés d’un autre fournisseur ; voir [Configuration](#configuration-and-environment)). Ouvrez [http://localhost:5000](http://localhost:5000) et changez le mot de passe administrateur par défaut avant d’exposer le service.

<br/>

> ℹ️ **REMARQUE**<br/>
> Avec Docker, les identifiants LLM sont définis via des variables d’environnement telles que `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (et non dans l’interface web). Sur le poste de travail (Electron), vous configurez les clés dans **Paramètres → API**.

<br/>

**Windows**

Téléchargez le dernier fichier `Transrewrt Setup x.y.z.exe` depuis [Versions](https://github.com/wsj-br/transrewrt/releases), exécutez l’installateur, puis lancez l'application depuis le menu Démarrer ou le raccourci du bureau. Saisissez vos clés API dans **Paramètres → API**. Vous devez configurer au moins un fournisseur ; OpenRouter est couramment utilisé pour les modèles gratuits.

<br/>

**Linux**

Téléchargez le fichier `.AppImage` correspondant à votre processeur depuis [Versions](https://github.com/wsj-br/transrewrt/releases) (`x64` pour les PC classiques, `arm64` pour de nombreux appareils ARM, y compris Raspberry Pi 4+), puis :

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Saisissez vos clés API dans **Paramètres → API**. Vous devez configurer au moins un fournisseur ; OpenRouter est couramment utilisé pour les modèles gratuits.

Sur Debian/Ubuntu, vous devrez peut-être installer des dépendances supplémentaires au préalable :

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Voir [Installation → Linux](#linux-electron) pour plus de détails.

<br/>

> ℹ️ **REMARQUE**<br/>
> macOS n’est actuellement pas pris en charge. Transrewrt est disponible pour Windows, Linux et Docker.

<br/>

Une fois l’application lancée, consultez le **[Guide utilisateur](USER-GUIDE.fr.md)** pour apprendre à traduire, réécrire et transformer du texte, gérer des invites, et configurer des modèles.

<br/><br/>

<a id="installation"></a>
## Installation

<a id="windows-electron"></a>
### Windows (Electron)

- Téléchargez le dernier installateur depuis [Versions](https://github.com/wsj-br/transrewrt/releases).
- Exécutez le fichier `.exe` et suivez les instructions de l’installateur.
- Premier lancement : démarrez l’application depuis le menu Démarrer ou via le raccourci du bureau.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Téléchargez le fichier `.AppImage` correspondant (`x64` ou `arm64`) depuis [Versions](https://github.com/wsj-br/transrewrt/releases).
- Exécutez : `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` sur x86_64/amd64, ou utilisez le nom de fichier `...-arm64.AppImage` sur ARM64.
- Dépendances supplémentaires (Debian/Ubuntu) : `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consultez [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pour plus d'informations.

<br/>

<a id="docker"></a>
### Docker

- Récupérez l’image : `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Définissez au moins une clé de fournisseur via une variable d’environnement (par exemple `OPENROUTER_KEY` pour OpenRouter). Passez les variables avec `-e` ou via `docker compose` / `.env` afin que les secrets ne soient pas intégrés à l’image.
- Les clés de fournisseur ne sont **pas** saisies dans l’interface web ; le serveur les lit depuis l’environnement.

Exemple – volume nommé pour la persistance (clé OpenRouter via variable d’environnement) :

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Option   | Description                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (à mapper avec `-p 5000:5000`)                                                                         |
| Volume   | Monter `/app/data` pour la persistance de la configuration et de la base de données                           |
| Variables d'environnement | `PORT`, `CONFIG_PATH`, plus les clés LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - voir [Configuration](#configuration-and-environment) |

Pour construire et exécuter depuis les sources : `docker compose up --build -d` ou `pnpm docker:up` - voir [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obtenir une clé API OpenRouter

Transrewrt prend en charge plusieurs fournisseurs d'IA. [OpenRouter](https://openrouter.ai) est un choix populaire car il regroupe de nombreux modèles sous une seule clé et propose des modèles gratuits.

1. Inscrivez-vous ou connectez-vous sur [openrouter.ai](https://openrouter.ai).
2. Accédez à la page [Keys](https://openrouter.ai/keys) et créez une nouvelle clé (nommez-la, et éventuellement définissez une limite de crédit). Vous pouvez utiliser les modèles gratuits sans ajouter de crédit.
3. **Bureau (Electron) :** collez les clés dans **Paramètres → API**. **Docker :** définissez des variables d’environnement telles que `OPENROUTER_KEY` (voir [Démarrage rapide](#quick-start)).

N’utilisez pas le modèle **Body Builder** d’OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pour traduire, réécrire ou transformer : il renvoie des charges utiles JSON de requête, pas le texte complété pour ces tâches. Voir [Paramètres → Modèles](USER-GUIDE.fr.md#models) dans le guide utilisateur.

Vous pouvez également utiliser d'autres fournisseurs (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ou exécuter des modèles localement avec [Ollama](https://ollama.com). Voir [Configuration](#configuration-and-environment) pour la liste complète des fournisseurs pris en charge et des variables d’environnement.

> ⚠️ **ATTENTION**<br/>
> Si vous utilisez Ollama depuis un autre appareil, conteneur ou service, n’oubliez pas de configurer Ollama pour autoriser les connexions externes (pas seulement localhost).


Pour plus d'informations sur les limites, BYOK, et autres, consultez [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuration et environnement

**Emplacements des fichiers de configuration**

| Déploiement         | Emplacement de la configuration                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (utilisez un volume pour la persistance) |

<br/>

**Variables d’environnement** (uniquement pour le web/Docker ; Electron utilise le fichier de configuration local)

| Variable         | Défaut                  | Description |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port d’écoute du serveur |
| `CONFIG_PATH`    | `/app/data/config.json` | Chemin vers le fichier de configuration |
| `OPENROUTER_KEY` | *(vide)*                | Clé API OpenRouter |
| `OPENAI_KEY`     | *(vide)*                | Clé API OpenAI |
| `CEREBRAS_KEY`   | *(vide)*                | Clé API Cerebras |
| `ANTHROPIC_KEY`  | *(vide)*                | Clé API Anthropic |
| `GOOGLE_KEY`     | *(vide)*                | Clé API Google Gemini |
| `DEEPSEEK_KEY`   | *(vide)*                | Clé API DeepSeek |
| `GROQ_KEY`       | *(vide)*                | Clé API Groq |
| `MISTRAL_KEY`    | *(vide)*                | Clé API Mistral |
| `OLLAMA_URL`     | *(vide)*                | URL de base Ollama (ex. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(vide)*                | Clé API xAI |

Configurez uniquement les fournisseurs que vous utilisez. Les identifiants de modèle sont espacés (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Affichage des coûts :** OpenRouter renvoie le coût facturé exact le cas échéant. Les autres fournisseurs utilisent le coût **estimé** à partir des tarifs publics des modèles d’OpenRouter lorsqu’une clé OpenRouter est disponible ; sans celle-ci, le coût des fournisseurs non-OpenRouter peut s’afficher comme `0`. Les estimations ne sont pas des factures.

<br/>

**Données et persistance :** Pour Docker, montez un volume sur `/app/data` afin que `config.json` et la base de données SQLite persistent après le redémarrage du conteneur. Sans volume, toutes les données sont perdues lorsque le conteneur s’arrête.

**Développeurs :** Après avoir récupéré des modifications remplaçant l’ancienne configuration à clé unique, réinitialisez ou fusionnez `data/config.json` avec la nouvelle structure par défaut issue de `src/config-defaults/config_default.json`, si votre fichier local utilise encore des champs supprimés (`api_key`, `api_url`, options de proxy).

<br/>

**Authentification web :**

- Administrateur par défaut : `admin` / `transrewrt26`.
- Gérez les utilisateurs via **Paramètres → Utilisateurs**.
- Réinitialisez un mot de passe : `docker exec <conteneur> reset-web-password '<nom-utilisateur>' '<nouveau-mot-de-passe>'`
  (depuis les sources : `pnpm run reset-web-password -- <nom-utilisateur> <nouveau-mot-de-passe>`)

<br/>

> ⚠️ **ATTENTION**<br/>
> Changez immédiatement le mot de passe administrateur par défaut sur tout hôte accessible via un réseau.

<br/>

Les paramètres principaux (police, modèles, langues, etc.) sont disponibles dans les Paramètres de l’application.

<br/><br/>

<a id="development-and-architecture"></a>

## Développement et architecture

- **Développement :** Configuration, construction, tests et déploiement (Electron, Web, Docker) — voir **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architecture et aperçu du système :** Structure des dossiers, pile technologique, décisions de conception — voir **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versions publiées et tags

- Les **tags Git** commençant par `v` (par exemple `v1.0.10`) déclenchent le [flux de publication](.github/workflows/release.yml). Les **Releases GitHub** incluent l'installateur Windows (`.exe`) et les AppImages Linux (**x64** et **arm64**).
- Les **images Docker** sont publiées sur `ghcr.io/wsj-br/transrewrt`. Les tags des images correspondent à la version Git (ex. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ainsi que le tag `latest`. Multi-architectures : `linux/amd64` et `linux/arm64` (par exemple, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribution

1. Faites un fork du dépôt.
2. Créez une branche fonctionnelle : `git checkout -b feature/ma-fonctionnalite`
3. Validez vos modifications avec un message clair.
4. Poussez votre branche et créez une demande de fusion (Pull Request) vers `main`.

Veuillez respecter le style de code existant et tester vos modifications en mode Electron et en mode web avant soumission. Consultez [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pour les instructions de génération et de test.

<br/>

**Signalement de bogues :** Ouvrez un ticket sur [GitHub](https://github.com/wsj-br/transrewrt/issues). Indiquez votre plateforme (Windows / Linux / Docker) et la version de l'application (indiquée dans la boîte « À propos » ou sur la page Releases).

<br/><br/>

<a id="disclaimer"></a>
## Avertissement

Les noms et icônes de produits appartiennent à leurs propriétaires respectifs et sont utilisés uniquement à des fins d'identification. Ce logiciel n'est ni affilié ni approuvé par les marques mentionnées.

<br/><br/>

<a id="license"></a>
## Licence

Copyright © 2026 Waldemar Scudeller Jr.

[License Apache 2.0](LICENSE)