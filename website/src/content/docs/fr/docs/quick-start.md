---
title: Démarrage rapide
description: >-
  Installez Transrewrt sur Windows ou Linux, ou exécutez l'application web
  Docker auto-hébergée.
---



Choisissez le chemin qui vous convient. Tous sont gratuits et open source (Apache 2.0).

## Docker (web auto-hébergé)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Remplacez `PROVIDER_API_KEY=sk-or-your-key` par votre clé API de votre fournisseur choisi (voir les options prises en charge dans [Configuration](/docs/configuration/)).

Ouvrez ensuite [http://localhost:5000](http://localhost:5000) et **modifiez le mot de passe administrateur par défaut** avant d'exposer le service.

:::caution
Dans Docker, les identifiants LLM sont définis avec des variables d'environnement (par exemple `PROVIDER_API_KEY`). Ils ne sont **pas** saisis dans l'interface utilisateur web. Sur le bureau, vous configurez les clés dans **Paramètres → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Téléchargez le dernier `Transrewrt Setup x.y.z.exe` depuis [Releases](https://github.com/wsj-br/transrewrt/releases).
2. Exécutez l'installateur.
3. Ouvrez l'application et saisissez les clés API dans **Paramètres → API**. Configurez au moins un fournisseur ; OpenRouter est un choix courant pour les modèles gratuits.

:::note
Windows peut afficher des avertissements UAC ou SmartScreen pour les applications indépendantes non signées. Préférez les téléchargements depuis la page officielle GitHub Releases et vérifiez les sommes de contrôle lorsqu'elles sont publiées.
:::

## Linux

Téléchargez le `.AppImage` pour votre CPU depuis [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` ou `arm64`, y compris Raspberry Pi 4+) :

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Saisissez les clés API dans **Paramètres → API**.

Si Chromium affiche des erreurs GPU / EGL mais que l'application fonctionne, vous pouvez désactiver l'accélération matérielle :

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS n'est pas pris en charge actuellement. Transrewrt est disponible pour Windows, Linux et Docker.
:::

## Prochaines étapes

1. [Obtenez une clé API](/docs/api-key/)
2. Exécutez une traduction simple pour confirmer que tout fonctionne
3. Lisez les guides [Traduire](/docs/translate/), [Réécrire](/docs/rewrite/) et [Transformer](/docs/transform/)
