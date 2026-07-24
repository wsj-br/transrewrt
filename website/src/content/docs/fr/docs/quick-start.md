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

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Remplacez `PROVIDER_API_KEY` par la variable de votre fournisseur (par exemple `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) et définissez sa valeur. Consultez la liste complète dans [Configuration](/docs/configuration/#environment-variables-web--docker).

Ouvrez ensuite [http://localhost:5000](http://localhost:5000) et **modifiez le mot de passe administrateur par défaut** avant d'exposer le service.

:::caution
Dans Docker, les identifiants LLM sont définis avec des variables d'environnement (par exemple `PROVIDER_API_KEY`). Ils ne sont **pas** saisis dans l'interface utilisateur web. Sur ordinateur, vous configurez les clés dans **Paramètres → Configuration de l'API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Téléchargez le dernier `Transrewrt Setup x.y.z.exe` depuis [Versions](https://github.com/wsj-br/transrewrt/releases).
2. Exécutez le programme d'installation.
3. Ouvrez l'application et saisissez les clés API dans **Paramètres → Configuration API**. Configurez au moins un fournisseur ; OpenRouter est un choix courant pour les modèles gratuits.

:::note
Windows peut afficher des avertissements UAC ou SmartScreen pour les applications indépendantes non signées. Préférez les téléchargements depuis la page officielle des versions de GitHub et vérifiez les sommes de contrôle lorsqu'elles sont publiées.
:::

## Linux

Téléchargez le `.AppImage` pour votre CPU depuis [Versions](https://github.com/wsj-br/transrewrt/releases) (`x64` ou `arm64`, y compris Raspberry Pi 4+) :

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Saisissez les clés API dans **Paramètres → Configuration API**.

Si Chromium affiche des erreurs GPU / EGL mais que l'application fonctionne, vous pouvez désactiver l'accélération matérielle :

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS n'est pas pris en charge actuellement. Transrewrt est disponible pour Windows, Linux et Docker.
:::

## Mise à jour

- **Windows** — téléchargez le nouveau `Transrewrt Setup x.y.z.exe` depuis [Versions](https://github.com/wsj-br/transrewrt/releases) et exécutez-le. Les paramètres et les données sont conservés.
- **Linux** — téléchargez le nouveau `.AppImage` et remplacez l'ancien fichier. Les paramètres et les données sont conservés.
- **Docker** — tirez la nouvelle image et recréez le conteneur. Les données persistent dans le volume `/app/data` :

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Prochaines étapes

1. [Obtenez une clé API](/docs/api-key/)
2. Exécutez une traduction simple pour confirmer que tout fonctionne
3. Lisez les guides [Traduire](/docs/translate/), [Réécrire](/docs/rewrite/) et [Transformer](/docs/transform/)
