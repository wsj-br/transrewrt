<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.3.7-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Outil de texte alimenté par l'IA : traduire entre langues, réécrire dans différents styles et transformer avec des prompts personnalisés - en utilisant plusieurs fournisseurs d'IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI et Ollama local). Fonctionne comme une application de bureau (Electron) ou une application web auto-hébergée (Docker).

- **Traduire** - entre des dizaines de langues, avec détection automatique de la source
- **Réécriture** - corriger la grammaire, améliorer la clarté, formel/informel, raccourcir, développer, technique
- **Transformer** - invites personnalisées par IA ; créer et gérer des invites, langue cible facultative par invite
- **Historique** - historique complet des exécutions avec texte d'entrée/de sortie, filtres et exportation
- **Facile et Avancé** - Mode Facile (par défaut) : préréglages sélectionnés par fournisseur (**Gratuit (OpenRouter)**, **Standard**, **Avancé**, **Technique** ; seuls les préréglages avec une correspondance pour le fournisseur sélectionné s'affichent), sans sélection d'ID de modèle ; Mode Avancé : liste complète des modèles provenant de vos fournisseurs configurés
- **Modèles et coût** - tableaux de bord de coût et d'utilisation (Résumé, Par modèle, Tous les appels) avec fonction d'exportation ; OpenRouter affiche les dépenses réelles, les autres fournisseurs utilisent des estimations
- **Interface utilisateur (UI)** - interface multilingue (30+ langues, prise en charge RTL), polices, ...
- **Mode Web** - prise en charge multi-utilisateur avec rôles d'administrateur
- **Bureau** - Application Electron pour Windows et Linux
- **Auto-hébergé** - Image Docker pour amd64 et arm64 (prêt à l'emploi sur Raspberry Pi)

Une fois installé, consultez le [**Guide de l'utilisateur**](USER-GUIDE.fr.md) pour une présentation complète de toutes les fonctionnalités.

<small>**Lire dans d'autres langues :** </small>
<small id="lang-list">[English (GB)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **Remarque sur les traductions de l'interface et de la documentation :** Toutes les langues de l'interface, sauf l'anglais (Royaume-Uni) d'origine, 
> ont été traduites à l'aide de modèles d'IA ; le libellé peut être imprécis ou contenir des erreurs.

</small>

<br/>

<a id="table-of-contents"></a>
## Table des matières

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Captures d'écran](#screenshots)
- [Démarrage rapide](#quick-start)
- [Obtenir une clé API OpenRouter](#getting-an-openrouter-api-key)
- [Configuration et environnement](#configuration-and-environment)
- [Développement et architecture](#development-and-architecture)
- [Signaler des problèmes](#reporting-issues)
- [Avertissement](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Captures d'écran

**Sélecteur de langue**

![Language selector](../images/screenshots/fr/language-selector.png)

**Traduire**

![Translate](../images/screenshots/fr/translate.png)

**Transformation - éditeur de prompt**

![Transform - prompt editor](../images/screenshots/fr/transform-prompt-edit.png)

**Tableau de bord**

![Dashboard summary - usage](../images/screenshots/fr/dashboard-summary.png)

**Historique**

![History](../images/screenshots/fr/history.png)

**Paramètres - sélection du modèle**

![Settings - model selection](../images/screenshots/fr/settings-general.png)

<br/><br/>

<a id="quick-start"></a>
## Démarrage rapide

<details>
<summary><b>Docker (recommandé pour l'auto-hébergement)</b></summary>

<a id="docker"></a>

<br/>

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Remplacez `sk-or-your-key` par votre [clé API OpenRouter](https://openrouter.ai/keys) (ou définissez d'autres clés de fournisseur ; voir [Configuration](#configuration-and-environment)). Ouvrez [http://localhost:5000](http://localhost:5000) et modifiez le mot de passe administrateur par défaut avant d'exposer le service.

Définissez au moins une clé de fournisseur via les variables d'environnement (par exemple `OPENROUTER_API_KEY` pour OpenRouter). Passez les variables avec `-e` ou `docker compose` / `.env` afin que les secrets ne soient pas intégrés à l'image. Les clés de fournisseur ne sont **pas** saisies dans l'interface web ; le serveur les lit depuis l'environnement.

<br/>

> ℹ️ **REMARQUE**<br/>
> Dans Docker, les identifiants LLM sont définis avec des variables d'environnement telles que `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (pas dans l'interface web). Sur le bureau (Electron), vous configurez les clés dans **Paramètres → API**.

<br/>

Ou utilisez Docker Compose :

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Consultez [Configuration](#configuration-and-environment) pour toutes les variables d'environnement, telles que `PORT`, `CONFIG_PATH`, `TZ`, et les clés LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Fuseau horaire du serveur (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

La date et l'heure de l'interface utilisateur suivent les paramètres régionaux et le fuseau horaire du **navigateur**. Pour le **comportement** côté serveur (journalisation, etc.), le conteneur utilise la variable d'environnement `TZ`. La valeur par défaut est `TZ=Europe/London`.

Pour utiliser un autre fuseau horaire, définissez `TZ` dans votre fichier Compose, par exemple :

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Ou passez-la lors de l'exécution du conteneur (Docker) :

```bash
--env TZ=America/Sao_Paulo
```

Sur de nombreux systèmes Linux, vous pouvez copier le nom du fuseau horaire système avec :

```bash
echo TZ=\"$(</etc/timezone)\"
```

Une liste des noms de fuseaux horaires valides est maintenue dans la [base de données tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipédia).

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Téléchargez le dernier `Transrewrt Setup x.y.z.exe` depuis [Releases](https://github.com/wsj-br/transrewrt/releases).
- Exécutez le `.exe` et suivez l'installation.
- Premier lancement : démarrez l'application depuis le menu Démarrer ou le raccourci bureau.
- Saisissez vos clés API dans **Paramètres → API**. Vous devez configurer au moins un fournisseur ; OpenRouter est courant pour les modèles gratuits.

<br/>

> ℹ️ **REMARQUE**<br/>
> Windows peut afficher l'un de ces avertissements de sécurité (normal pour les applications non signées ou indépendantes) :
>   - **Contrôle de compte d'utilisateur (UAC)** : « Voulez-vous autoriser cette application provenant d'un éditeur inconnu à apporter des modifications à votre appareil ? » → Cliquez sur **Oui**.
>   - **Microsoft Defender SmartScreen** : « Windows a protégé votre PC » → Cliquez sur **Plus d'infos** → **Exécuter quand même**.
>
> Cela se produit parce que l'application n'est pas signée par Microsoft ou un éditeur majeur — elle est sûre si téléchargée depuis nos versions officielles GitHub (vérifiez les sommes de contrôle sur la page [Releases](https://github.com/wsj-br/transrewrt/releases) à côté de chaque ressource).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Téléchargez le `.AppImage` pour votre processeur depuis [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` pour les PC classiques, `arm64` pour de nombreux appareils ARM, y compris Raspberry Pi 4+), puis :

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Sur x86_64/amd64, utilisez le nom de fichier `x64` ; sur ARM64, utilisez le nom `...-arm64.AppImage`.

Saisissez vos clés API dans **Paramètres → API**. Vous devez configurer au moins un fournisseur ; OpenRouter est courant pour les modèles gratuits.

**Messages de la console :** Les versions Linux empaquetées (`x64` et `arm64` AppImages) suppriment les avertissements de dépréciation de Node dans le terminal (par exemple, le module intégré `punycode`). Si Chromium affiche des erreurs GPU / EGL comme « GLES3 est non pris en charge », mais que l'application fonctionne, vous pouvez les désactiver en désactivant l'accélération matérielle :

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Cela s'applique également sur amd64 ; modifiez le nom du fichier pour qu'il corresponde à votre téléchargement.

Sur Debian/Ubuntu, vous pourriez avoir besoin de bibliothèques **d'exécution** supplémentaires requises par Chromium (elles sont souvent déjà présentes sur les installations complètes de bureau). Exécutez les commandes ci-dessous si nécessaire :

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

remplacez `libasound2t64` par `libasound2` pour `arm64`. Les installations minimales ou personnalisées peuvent toujours échouer avec un fichier `.so` manquant. Installez le paquet indiqué dans le message d'erreur (compléments fréquents : `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Dans certains environnements, vous devrez peut-être exécuter l'application à l'aide de `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **REMARQUE**<br/>
> macOS n'est actuellement pas pris en charge. Transrewrt est disponible pour Windows, Linux et Docker.

</details>

<br/>

Une fois l'application lancée, consultez le [**Guide de l'utilisateur**](USER-GUIDE.fr.md) pour apprendre à traduire, réécrire et transformer du texte, gérer les invites et configurer les modèles.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Obtenir une clé API OpenRouter

Transrewrt prend en charge plusieurs fournisseurs d'IA. [OpenRouter](https://openrouter.ai) est un choix populaire car il regroupe de nombreux modèles sous une seule clé et propose des modèles gratuits.

1. Inscrivez-vous ou connectez-vous sur [openrouter.ai](https://openrouter.ai).
2. Ouvrez la page [Keys](https://openrouter.ai/keys) et créez une nouvelle clé (nommez-la, et éventuellement définissez une limite de crédit). Vous pouvez utiliser les modèles gratuits sans ajouter de crédit.
3. **Bureau (Electron) :** collez les clés dans **Paramètres → API**. **Docker :** définissez les variables d'environnement comme `OPENROUTER_API_KEY` (voir [Démarrage rapide](#quick-start)).

N'utilisez pas le modèle **Body Builder** d'OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) pour traduire, réécrire ou transformer : il renvoie des charges utiles JSON de requête, pas le texte finalisé pour ces tâches. Consultez [Paramètres → Modèles](USER-GUIDE.fr.md#models) dans le Guide de l'utilisateur.

Vous pouvez également utiliser d'autres fournisseurs (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ou exécuter des modèles localement avec [Ollama](https://ollama.com). Consultez [Configuration](#configuration-and-environment) pour la liste complète des fournisseurs pris en charge et des variables d'environnement.

</br>

> ⚠️ **ATTENTION**<br/>
> Si vous utilisez Ollama depuis un autre appareil, conteneur ou service, pensez à configurer Ollama pour autoriser les connexions externes (pas uniquement localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuration et environnement

</br>

**Emplacements des fichiers de configuration**

| Déploiement         | Emplacement de la configuration                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (utilisez un volume pour la persistance) |

<br/>

**Variables d'environnement** (web/Docker uniquement ; Électron utilise le fichier de configuration local)

| Variable             | Description                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Port d'écoute du serveur (valeur par défaut : `5000`)                                  |
| `CONFIG_PATH`        | Chemin vers le fichier de configuration (valeur par défaut : `/app/data/config.json`)                |
| `TZ`                 | fuseau horaire pour l'heure côté serveur (journalisation, etc.) (valeur par défaut : `Europe/London`) |
| `HISTORY_DISABLED`   | Désactiver l'historique d'exécution (facultatif, valeur par défaut : `false`) |
| `OPENROUTER_API_KEY` | Clé API OpenRouter                                                           |
| `OPENAI_API_KEY`     | Clé API OpenAI                                                               |
| `CEREBRAS_API_KEY`   | Clé API Cerebras                                                             |
| `ANTHROPIC_API_KEY`  | Clé API Anthropic                                                            |
| `GOOGLE_API_KEY`     | Clé API Google Gemini                                                        |
| `DEEPSEEK_API_KEY`   | Clé API DeepSeek                                                             |
| `GROQ_API_KEY`       | Clé API Groq                                                                 |
| `MISTRAL_API_KEY`    | Clé API Mistral                                                              |
| `OLLAMA_URL`         | URL de base Ollama (par exemple `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | Clé API xAI                                                                  |

**Mode confidentialité :** Pour désactiver systématiquement le suivi de l'historique, indépendamment de `config.json` ou des préférences par utilisateur, définissez `HISTORY_DISABLED` sur `true` ou `1` (non sensible à la casse) pour le **processus serveur web/Docker** et/ou le **processus principal du bureau Electron** (par exemple, environnement système ou lanceur — pas uniquement le processeur de rendu). Cela désactive l'enregistrement de l'historique des entrées/sorties, verrouille **Paramètres → Paramètres généraux → Historique** et bloque les API liées à l'historique.

Configurez uniquement les fournisseurs que vous utilisez. Les identifiants de modèle sont organisés par espace de noms (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Affichage des coûts :** OpenRouter renvoie le coût facturé exact le cas échéant. Les autres fournisseurs utilisent le coût **estimé** provenant des tarifs publics des modèles OpenRouter lorsqu'une clé OpenRouter est disponible ; sinon, le coût non-OpenRouter peut s'afficher comme `0`. Les estimations ne constituent pas des factures.

<br/>

**Données et persistance :** Pour Docker, montez un volume sur `/app/data` afin que `config.json` et la base de données SQLite persistent après les redémarrages du conteneur. Sans volume, toutes les données sont perdues lorsque le conteneur s'arrête.

<br/>

**Authentification web :**

- Administrateur par défaut : `admin` / `transrewrt26`.
- Gérez les utilisateurs dans **Paramètres → Utilisateurs**.
- Réinitialisez un mot de passe : `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **AVERTISSEMENT**<br/>
> Changez immédiatement le mot de passe administrateur par défaut sur tout hôte accessible depuis un réseau.

<br/>

Les paramètres principaux (police, modèles, langues, etc.) sont disponibles dans les Paramètres de l'application.

<br/><br/>

<a id="development-and-architecture"></a>
## Développement et architecture

- **Développement :** Configuration, version, test et déploiement (Electron, Web, Docker) - voir [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).
- **Aperçu de l'architecture et du système :** Structure des dossiers, pile technologique, décisions de conception - voir [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md).

<br/><br/>

<a id="reporting-issues"></a>
## Signaler des problèmes

Ouvrez un ticket sur [GitHub](https://github.com/wsj-br/transrewrt/issues). Indiquez votre plateforme (Windows / Linux / Docker) et la version de l'application (affichée dans la boîte de dialogue À propos ou sur la page des versions).

<br/><br/>

<a id="disclaimer"></a>
## Clause de non-responsabilité

Les noms de produits et les icônes appartiennent à leurs propriétaires respectifs et sont utilisés uniquement à des fins d'identification. Ce logiciel n'est ni affilié ni approuvé par aucune des marques mentionnées.

<br/><br/>

<a id="license"></a>
## Licence

Droit d'auteur © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
