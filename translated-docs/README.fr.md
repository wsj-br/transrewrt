---
translated_at: "2026-03-24T01:33:03.808Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo de Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licence : Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plateforme">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Outil de traitement de texte assisté par IA : traduire entre langues, réécrire dans différents styles et transformer avec des invites personnalisées — en utilisant plusieurs fournisseurs d'IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, et Ollama local). Fonctionne comme une application de bureau (Electron) ou une application web auto-hébergée (Docker).

- **Traduire** — entre des dizaines de langues, avec détection automatique de la langue source
- **Réécrire** — corriger la grammaire, améliorer la clarté, formel/informel, raccourcir, développer, version technique
- **Transformer** — invites d'IA personnalisées ; créer et gérer des invites, langue cible optionnelle par invite
- **Historique** — historique complet des actions avec texte d'entrée et de sortie, filtres et exportation
- **Modèles et coûts** — choisir des modèles parmi tous les fournisseurs configurés ; tableau de bord des coûts avec journal SQLite, résumés par modèle/opération/jour
- **Interface utilisateur** — interface multilingue (30+ langues, prise en charge RTL), polices, etc.
- **Mode web** — prise en charge multi-utilisateurs avec rôles administrateurs ; les clés API restent côté serveur, jamais exposées au navigateur
- **Application de bureau** — application Electron pour Windows et Linux
- **Auto-hébergé** — image Docker pour amd64 et arm64 (prêt à l'emploi sur Raspberry Pi)

Une fois installé, consultez le **[Guide utilisateur](USER-GUIDE.fr.md)** pour une présentation complète de toutes les fonctionnalités.

<small>**Lire dans d'autres langues :** [English (UK)](README.fr.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>


<br/>

**Remarque concernant les traductions de l'interface et de la documentation :** Toutes les langues de l'interface, sauf l'anglais (UK), ont été traduites à l'aide de modèles d'IA ; les formulations peuvent être imprécises ou contenir des erreurs.



<a id="screenshots"></a>
## Captures d'écran

**Sélecteur de langue**

![Sélecteur de langue](../images/screenshots/fr/language-selector.png)

**Traduction**

![Traduire](../images/screenshots/fr/translate.png)

**Transformer - éditeur d'invites**

![Transformer - éditeur d'invites](../images/screenshots/fr/transform-prompt-edit.png)

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

- [Démarrage rapide](#démarrage-rapide)
- [Installation](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obtenir une clé API OpenRouter](#obtenir-une-clé-api-openrouter)
- [Configuration et environnement](#configuration-et-environnement)
- [Développement et architecture](#développement-et-architecture)
- [Versions et tags](#versions-et-tags)
- [Contribuer](#contribuer)
- [Avertissement](#avertissement)
- [Licence](#licence)

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

Remplacez `sk-or-your-key` par votre [clé API OpenRouter](https://openrouter.ai/keys) (ou définissez les clés d'autres fournisseurs ; voir [Configuration](#configuration-et-environnement)). Ouvrez [http://localhost:5000](http://localhost:5000) et modifiez le mot de passe administrateur par défaut avant d'exposer le service.

<br/>

> ℹ️ **REMARQUE**<br/>
> Avec Docker, les identifiants LLM sont définis via des variables d’environnement telles que `OPENROUTER_KEY`, `OPENAI_KEY`, … (et non via l'interface web). Sur les applications desktop (Electron), configurez les clés dans **Paramètres → API**.

<br/>

**Windows**

Téléchargez le dernier fichier `Transrewrt Setup x.y.z.exe` depuis [Releases](https://github.com/wsj-br/transrewrt/releases), exécutez l'installateur, puis lancez l’application depuis le menu Démarrer ou le raccourci bureau. Saisissez vos clés API dans **Paramètres → API**. Vous devez configurer au moins un fournisseur ; OpenRouter est couramment utilisé pour les modèles gratuits.

<br/>

**Linux**

Téléchargez le fichier `.AppImage` depuis [Releases](https://github.com/wsj-br/transrewrt/releases), puis :

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Saisissez vos clés API dans **Paramètres → API**. Vous devez configurer au moins un fournisseur ; OpenRouter est couramment utilisé pour les modèles gratuits.

Sur Debian/Ubuntu, vous devrez peut-être installer des dépendances supplémentaires au préalable :

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Voir [Installation → Linux](#linux-electron) pour plus de détails.

<br/>

> ℹ️ **REMARQUE**<br/>
> macOS n'est actuellement pas pris en charge. Transrewrt est disponible pour Windows, Linux et Docker.

<br/>

Une fois l'application lancée, consultez le **[Guide utilisateur](USER-GUIDE.fr.md)** pour apprendre à traduire, réécrire et transformer du texte, gérer les prompts et configurer les modèles.

<br/><br/>

<a id="installation"></a>
## Installation

<a id="windows-electron"></a>
### Windows (Electron)

- Téléchargez le dernier installateur depuis [Releases](https://github.com/wsj-br/transrewrt/releases).
- Exécutez le fichier `.exe` et suivez les instructions de l'installateur.
- Première exécution : lancez l'application depuis le menu Démarrer ou le raccourci bureau.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Téléchargez le fichier `.AppImage` depuis [Releases](https://github.com/wsj-br/transrewrt/releases).
- Exécutez : `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Dépendances supplémentaires (Debian/Ubuntu) : `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Voir [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pour plus d'informations.

<br/>

<a id="docker"></a>
### Docker

- Téléchargez l'image : `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Définissez au moins une clé de fournisseur via une variable d'environnement (par exemple `OPENROUTER_KEY` pour OpenRouter). Transmettez les variables avec `-e` ou via `docker compose` / `.env` pour éviter d'intégrer les secrets dans l'image.
- Les clés de fournisseurs **ne sont pas** saisies dans l'interface web ; le serveur les lit depuis l'environnement.

Exemple - volume nommé pour la persistance (clé OpenRouter via variable d'environnement) :

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Option     | Description                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| Port       | `5000` (à mapper avec `-p 5000:5000`)                                                                         |
| Volume     | Monter `/app/data` pour la persistance de la configuration et de la base de données                           |
| Variables d'environnement | `PORT`, `CONFIG_PATH`, ainsi que les clés LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - voir [Configuration](#configuration-et-environnement) |

Pour construire et lancer à partir du code source : `docker compose up --build -d` ou `pnpm docker:up` - voir [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obtenir une clé API OpenRouter

Transrewrt prend en charge plusieurs fournisseurs d'IA. [OpenRouter](https://openrouter.ai) est un choix populaire car il regroupe de nombreux modèles sous une seule clé et propose des modèles gratuits.

1. Inscrivez-vous ou connectez-vous sur [openrouter.ai](https://openrouter.ai).
2. Allez sur la page [Keys](https://openrouter.ai/keys) et créez une nouvelle clé (donnez-lui un nom, et éventuellement fixez une limite de crédits). Vous pouvez utiliser les modèles gratuits sans ajouter de crédits.
3. **Ordinateur (Electron)** : collez les clés dans **Paramètres → API**. **Docker** : définissez les variables d'environnement comme `OPENROUTER_KEY` (voir [Démarrage rapide](#démarrage-rapide)).

Vous pouvez également utiliser d'autres fournisseurs (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) ou exécuter des modèles localement avec [Ollama](https://ollama.com). Consultez la section [Configuration](#configuration-et-environnement) pour obtenir la liste complète des fournisseurs pris en charge et des variables d'environnement.

Pour plus d'informations sur les limites, BYOK et autres fonctionnalités, voir [Authentification OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-et-environnement"></a>
## Configuration et environnement

**Emplacements des fichiers de configuration**

| Déploiement         | Emplacement de la configuration                                   |
| ------------------ | ------------------------------------------------- |
| Électron (Windows) | `%APPDATA%\transrewrt\`                           |
| Électron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (utilisez un volume pour la persistance) |

<br/>

**Variables d'environnement** (uniquement web/Docker ; Électron utilise le fichier de configuration local)

| Variable         | Par défaut                 | Description |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port d'écoute du serveur |
| `CONFIG_PATH`    | `/app/data/config.json` | Chemin du fichier de configuration |
| `OPENROUTER_KEY` | *(vide)*               | Clé API OpenRouter |
| `OPENAI_KEY`     | *(vide)*               | Clé API OpenAI |
| `ANTHROPIC_KEY`  | *(vide)*               | Clé API Anthropic |
| `GOOGLE_KEY`     | *(vide)*               | Clé API Google Gemini |
| `DEEPSEEK_KEY`   | *(vide)*               | Clé API DeepSeek |
| `GROQ_KEY`       | *(vide)*               | Clé API Groq |
| `MISTRAL_KEY`    | *(vide)*               | Clé API Mistral |
| `OLLAMA_URL`     | *(vide)*               | URL de base Ollama (ex. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(vide)*               | Clé API xAI |

Configurez uniquement les fournisseurs que vous utilisez. Les identifiants de modèles sont organisés par espace de noms (`openrouter/…`, `openai/…`, `ollama/…`, etc.).

**Affichage des coûts :** OpenRouter renvoie le coût facturé exact si applicable. Les autres fournisseurs utilisent un coût **estimé** basé sur les tarifs publics des modèles d’OpenRouter quand une clé OpenRouter est disponible ; sinon, le coût des fournisseurs non-OpenRouter peut apparaître comme `0`. Les estimations ne constituent pas des factures.

<br/>

**Données et persistance :** Pour Docker, montez un volume sur `/app/data` afin que `config.json` et la base de données SQLite persistent lors des redémarrages du conteneur. Sans volume, toutes les données sont perdues à l'arrêt du conteneur.

**Développeurs :** Après avoir récupéré des modifications qui remplacent l'ancienne configuration à clé unique, réinitialisez ou fusionnez `data/config.json` avec la nouvelle structure par défaut issue de `src/config-defaults/config_default.json`, si votre fichier local utilise encore des champs supprimés (`api_key`, `api_url`, options de proxy).

<br/>

**Authentification web :**

- Administrateur par défaut : `admin` / `transrewrt26`.
- Gérer les utilisateurs via **Paramètres → Utilisateurs**.
- Réinitialiser un mot de passe : `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (depuis la source : `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATTENTION**<br/>
> Changez immédiatement le mot de passe administrateur par défaut sur tout hôte accessible depuis un réseau.

<br/>

Les principaux paramètres (police, modèles, langues, etc.) sont disponibles dans les Paramètres de l'application.

<br/><br/>

<a id="development-and-architecture"></a>
## Développement et architecture

- **Développement :** Installation, compilation, tests et déploiement (Électron, Web, Docker) - voir **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architecture et vue d'ensemble du système :** Structure des dossiers, pile technologique, choix de conception - voir **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Publications et balises

- Les **balises Git** `v`* (par exemple `v1.0.10`) déclenchent le [workflow de publication](.github/workflows/release.yml). Les **Releases GitHub** incluent l'installateur Windows (`.exe`) et l'AppImage Linux.
- Les **images Docker** sont publiées sur `ghcr.io/wsj-br/transrewrt`. Les balises des images correspondent à la version Git (par exemple `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ainsi que `latest`. Multi-architectures : `linux/amd64` et `linux/arm64` (par exemple Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribution

1. Faites un fork du dépôt.
2. Créez une branche fonctionnelle : `git checkout -b feature/my-feature`
3. Validez vos modifications avec un message explicite.
4. Poussez votre branche et ouvrez une Pull Request vers `main`.

Veuillez respecter le style de code existant et tester vos modifications en mode Electron et en mode web avant soumission. Voir [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pour les instructions de construction et de test.

<br/>

**Signalement de problèmes** : ouvrez un problème sur [GitHub](https://github.com/wsj-br/transrewrt/issues). Indiquez votre plateforme (Windows / Linux / Docker) et la version de l'application (affichée dans la boîte de dialogue À propos ou sur la page Releases).

<br/><br/>

<a id="disclaimer"></a>
## Avertissement

Les noms et icônes de produits appartiennent à leurs propriétaires respectifs et sont utilisés uniquement à des fins d'identification. Ce logiciel n'est affilié à aucun des marques mentionnées et n'est pas approuvé par celles-ci.

<br/><br/>

<a id="license"></a>
## Licence

Copyright © 2026 Waldemar Scudeller Jr.

[Licence Apache 2.0](LICENSE)