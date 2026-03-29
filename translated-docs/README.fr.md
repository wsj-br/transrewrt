---
translated_at: "2026-03-29T01:54:38.706Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Bannière Transrewrt"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licence : Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plateforme">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Outil de traitement de texte alimenté par IA : traduction entre langues, réécriture dans différents styles et transformation à l’aide d’invites personnalisées — en utilisant plusieurs fournisseurs d’IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI et Ollama local). Fonctionne comme une application de bureau (Electron) ou une application web auto-hébergée (Docker).

- **Traduire** — entre des dizaines de langues, avec détection automatique de la langue source
- **Réécrire** — corriger la grammaire, améliorer la clarté, formel/informel, raccourcir, développer, rédaction technique
- **Transformer** — invites personnalisées à l'IA ; créer et gérer des invites, langue cible facultative par invite
- **Historique** — historique complet des exécutions avec texte d'entrée/sortie, filtres et exportation
- **Modèles et coûts** — choisir des modèles parmi n'importe quel fournisseur configuré ; tableaux de bord des coûts et de l'utilisation avec journaux, résumés par modèle/opération/jour
- **Interface utilisateur** — interface multilingue (30+ langues, prise en charge des langues de droite à gauche), polices, etc.
- **Mode web** — prise en charge multi-utilisateurs avec rôles administrateurs
- **Application de bureau** — application Electron pour Windows et Linux
- **Auto-hébergement** — image Docker pour amd64 et arm64 (prêt à l'emploi sur Raspberry Pi)

Une fois installé, consultez le **[Guide de l'utilisateur](USER-GUIDE.fr.md)** pour une présentation complète de toutes les fonctionnalités.

<small>**Lire dans d'autres langues :** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Remarque sur les traductions de l'interface et de la documentation :** Toutes les langues de l'interface, sauf l'anglais (Royaume-Uni) d'origine,
> ont été traduites à l'aide de modèles d'intelligence artificielle ; les formulations peuvent être imprécises ou comporter des erreurs.

</small>

<br/>

<a id="screenshots"></a>

## Captures d'écran

**Sélecteur de langue**

![Sélecteur de langue](../images/screenshots/fr/language-selector.png)

**Traduire**

![Traduire](../images/screenshots/fr/translate.png)

**Transformer - éditeur d'invite**

![Transformer - éditeur d'invite](../images/screenshots/fr/transform-prompt-edit.png)

**Tableau de bord**

![Tableau de bord - résumé des utilisations](../images/screenshots/fr/dashboard-summary.png)

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
  - [Configuration du fuseau horaire](#configuring-the-timezone)
- [Obtenir une clé API OpenRouter](#getting-an-openrouter-api-key)
- [Configuration et environnement](#configuration-and-environment)
- [Développement et architecture](#development-and-architecture)
- [Signaler des problèmes](#reporting-issues)
- [Avertissement](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Démarrage rapide

**Docker (recommandé pour l'auto-hébergement)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Remplacez `sk-or-your-key` par votre [clé API OpenRouter](https://openrouter.ai/keys) (ou configurez les clés d'autres fournisseurs ; voir [Configuration](#configuration-et-environnement)). Ouvrez [http://localhost:5000](http://localhost:5000) et modifiez le mot de passe administrateur par défaut avant d'exposer le service.

<br/>

> ℹ️ **REMARQUE**<br/>
> Avec Docker, les identifiants LLM sont définis via des variables d’environnement telles que `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (et non via l’interface web). Sur le poste de travail (Electron), vous configurez les clés dans **Paramètres → API**.

<br/>

**Windows**

Téléchargez le dernier fichier `Transrewrt Setup x.y.z.exe` depuis la section [Releases](https://github.com/wsj-br/transrewrt/releases), exécutez le programme d'installation, puis lancez l'application depuis le menu Démarrer ou le raccourci sur le bureau. Saisissez vos clés API dans **Paramètres → API**. Vous devez configurer au moins un fournisseur ; OpenRouter est couramment utilisé pour les modèles gratuits.

<br/>

**Linux**

Téléchargez le fichier `.AppImage` correspondant à votre processeur depuis la section [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` pour les ordinateurs classiques, `arm64` pour de nombreux appareils ARM, y compris Raspberry Pi 4+), puis exécutez :

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

> macOS n'est actuellement pas pris en charge. Transrewrt est disponible pour Windows, Linux et Docker.

<br/>

Une fois l'application lancée, consultez le **[Guide de l'utilisateur](USER-GUIDE.fr.md)** pour apprendre à traduire, réécrire et transformer du texte, gérer les invites et configurer les modèles.

<br/><br/>

<a id="installation"></a>

## Installation

<a id="windows-electron"></a>

### Windows (Electron)

- Téléchargez le dernier installateur depuis [Releases](https://github.com/wsj-br/transrewrt/releases).
- Exécutez le fichier `.exe` et suivez les instructions de l'installateur.
- Premier lancement : démarrez l'application depuis le menu Démarrer ou le raccourci sur le bureau.

<br/>

> ℹ️ **REMARQUE**<br/>
> Windows peut afficher l'un de ces avertissements de sécurité (normal pour les applications non signées ou indépendantes) :
>   - **Contrôle de compte d'utilisateur (UAC)** : « Voulez-vous autoriser cette application provenant d'un éditeur inconnu à apporter des modifications à votre appareil ? » → Cliquez sur **Oui**.
>   - **Microsoft Defender SmartScreen** : « Windows a protégé votre PC » → Cliquez sur **Plus d’informations** → **Exécuter quand même**.
>
> Cela se produit parce que l'application n'est pas signée par Microsoft ou un éditeur majeur — elle est sûre si vous l'avez téléchargée depuis nos publications officielles sur GitHub
> (vérifiez la somme de contrôle SHA256 indiquée ci-dessous).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Téléchargez le fichier `.AppImage` correspondant (`x64` ou `arm64`) depuis [Releases](https://github.com/wsj-br/transrewrt/releases).
- Exécutez : `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` sur x86_64/amd64, ou utilisez le nom de fichier `...-arm64.AppImage` sur ARM64.
- Dépendances supplémentaires (Debian/Ubuntu) : `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Voir [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) pour plus d'informations.

<br/>

<a id="docker"></a>

### Docker

- Télécharger l'image : `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Définir au moins une clé de fournisseur via une variable d'environnement (par exemple `OPENROUTER_API_KEY` pour OpenRouter). Transmettez les variables avec l'option `-e` ou via `docker compose` / `.env`, afin que les clés secrètes ne soient pas intégrées à l'image.
- Les clés de fournisseur ne sont **pas** saisies dans l'interface web ; le serveur les lit depuis l'environnement.

Exemple – volume nommé pour la persistance (clé OpenRouter via variable d'environnement) :

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

ou, si vous préférez utiliser Docker Compose, utilisez :

```
# téléchargez le fichier compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# modifiez le fichier pour ajouter les API_KEYS et ajuster le fuseau horaire (TZ)
vi transrewrt.yml
# démarrez le conteneur
docker compose -f transrewrt.yml up -d

Voir [Configuration](#configuration-and-environment) pour toutes les variables d'environnement, telles que `PORT`, `CONFIG_PATH`, `TZ` et les clés LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, etc.).

<a id="configuring-the-timezone"></a>

### Configuration du fuseau horaire

La date et l'heure de l'interface utilisateur de l'application suivent les paramètres régionaux et le fuseau horaire du **navigateur**. Pour le comportement côté **serveur** (journalisation, etc.), le conteneur utilise la variable d'environnement `TZ`. La valeur par défaut est `TZ=Europe/London`.

Pour utiliser un autre fuseau horaire, définissez `TZ` dans votre fichier Compose, par exemple :

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Ou indiquez-la lors de l'exécution du conteneur (Docker) :

```bash
--env TZ=America/Sao_Paulo
```

Sur de nombreux systèmes hôtes Linux, vous pouvez copier le nom du fuseau horaire système avec la commande suivante :

```bash
echo TZ=\"$(</etc/timezone)\"
```

Une liste des noms de fuseaux horaires valides est tenue à jour dans la [base de données tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipédia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obtenir une clé API OpenRouter

Transrewrt prend en charge plusieurs fournisseurs d'IA. [OpenRouter](https://openrouter.ai) est un choix populaire car il regroupe de nombreux modèles sous une seule clé et propose des modèles gratuits.

1. Inscrivez-vous ou connectez-vous sur [openrouter.ai](https://openrouter.ai).
2. Accédez à la page [Keys](https://openrouter.ai/keys) et créez une nouvelle clé (donnez-lui un nom, et éventuellement fixez une limite de crédit). Vous pouvez utiliser les modèles gratuits sans ajouter de crédit.
3. **Version bureau (Electron)** : collez les clés dans **Paramètres → API**. **Docker** : définissez les variables d'environnement comme `OPENROUTER_API_KEY` (voir [Démarrage rapide](#quick-start)).

N'utilisez pas le modèle **Body Builder** d'OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pour traduire, réécrire ou transformer du texte : il renvoie des charges utiles JSON, et non le texte complété pour ces tâches. Consultez [Paramètres → Modèles](USER-GUIDE.fr.md#models) du Guide utilisateur.

Vous pouvez également utiliser d'autres fournisseurs (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ou exécuter des modèles localement avec [Ollama](https://ollama.com). Consultez la section [Configuration](#configuration-et-environnement) pour obtenir la liste complète des fournisseurs pris en charge et des variables d'environnement.

> ⚠️ **ATTENTION**<br/>
> Si vous utilisez Ollama depuis un autre appareil, conteneur ou service, pensez à configurer Ollama pour autoriser les connexions externes (pas uniquement localhost).

Pour les limitations, BYOK et plus encore, consultez l'[authentification OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-et-environnement"></a>

## Configuration et environnement

**Emplacements des fichiers de configuration**

| Déploiement         | Emplacement de la configuration                                   |
| --------------------| ------------------------------------------------------------------ |
| Électron (Windows)  | `%APPDATA%\transrewrt\`                                            |
| Électron (Linux)    | `~/.config/transrewrt/`                                            |
| Web / Docker        | `/app/data/config.json` (utilisez un volume pour la persistance) |

<br/>

**Variables d'environnement** (web/Docker uniquement ; Electron utilise le fichier de configuration local)

| Variable           | Valeur par défaut            | Description |
| ------------------ | ---------------------------- | ----------- |
| `PORT`             | `5000`                       | Port d'écoute du serveur |
| `CONFIG_PATH`      | `/app/data/config.json`      | Chemin vers le fichier de configuration |
| `TZ`               | `Europe/London`              | Fuseau horaire IANA pour l'heure côté serveur (journalisation, etc.) ; l'interface suit toujours celle du navigateur. Voir [Docker → fuseau horaire](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(vide)*                     | Clé API OpenRouter |
| `OPENAI_API_KEY`     | *(vide)*                     | Clé API OpenAI |
| `CEREBRAS_API_KEY`   | *(vide)*                     | Clé API Cerebras |
| `ANTHROPIC_API_KEY`  | *(vide)*                     | Clé API Anthropic |
| `GOOGLE_API_KEY`     | *(vide)*                     | Clé API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(vide)*                     | Clé API DeepSeek |
| `GROQ_API_KEY`       | *(vide)*                     | Clé API Groq |
| `MISTRAL_API_KEY`    | *(vide)*                     | Clé API Mistral |
| `OLLAMA_URL`         | *(vide)*                     | URL de base pour Ollama (par exemple `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(vide)*                     | Clé API xAI |

Configurez uniquement les fournisseurs que vous utilisez. Les identifiants de modèles sont organisés par espace de noms (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Affichage des coûts :** OpenRouter retourne le coût facturé exact le cas échéant. Pour les autres fournisseurs, des coûts **estimés** sont utilisés, basés sur les tarifs publics des modèles OpenRouter s’il existe une clé OpenRouter ; à défaut, le coût des fournisseurs autres qu’OpenRouter peut s’afficher à `0`. Les estimations ne constituent pas des factures.

<br/>

**Données et persistance :** Pour Docker, montez un volume sur `/app/data` afin que `config.json` et la base de données SQLite persistent lors des redémarrages du conteneur. Sans volume, toutes les données sont perdues lorsque le conteneur s’arrête.

**Développeurs :** Après avoir récupéré des modifications remplaçant l’ancienne configuration à clé unique, réinitialisez ou fusionnez `data/config.json` avec la nouvelle structure par défaut provenant de `src/config-defaults/config_default.json`, si votre fichier local utilise encore des champs supprimés (`api_key`, `api_url`, options de proxy).

<br/>

**Authentification web :**

- Administrateur par défaut : `admin` / `transrewrt26`.
- Gérez les utilisateurs dans **Paramètres → Utilisateurs**.

- Réinitialiser un mot de passe : `docker exec <conteneur> reset-web-password '<nom-utilisateur>' '<nouveau-mot-de-passe>'`  
  (depuis les sources : `pnpm run reset-web-password -- <nom-utilisateur> <nouveau-mot-de-passe>`)

<br/>

> ⚠️ **ATTENTION**<br/>
> Changez immédiatement le mot de passe administrateur par défaut sur tout hôte accessible depuis le réseau.

<br/>

Les paramètres principaux (police, modèles, langues, etc.) sont accessibles dans les Paramètres de l'application.

<br/><br/>

<a id="development-and-architecture"></a>

## Développement et architecture

- **Développement :** Installation, construction, tests et déploiement (Electron, Web, Docker) - voir **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architecture et aperçu du système :** Structure des dossiers, pile technologique, décisions de conception - voir **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Signaler des problèmes

Ouvrez un ticket sur [GitHub](https://github.com/wsj-br/transrewrt/issues). Indiquez votre plateforme (Windows / Linux / Docker) et la version de l'application (indiquée dans la fenêtre À propos ou sur la page Releases).

<br/><br/>

<a id="disclaimer"></a>

## Avis de non-responsabilité

Les noms et les icônes des produits appartiennent à leurs propriétaires respectifs et sont utilisés uniquement à des fins d'identification. Ce logiciel n'est pas affilié à, ni approuvé par, l'une des marques mentionnées.

<br/><br/>

<a id="license"></a>

## Licence

Copyright © 2026 Waldemar Scudeller Jr.

[Licence Apache 2.0](LICENSE)