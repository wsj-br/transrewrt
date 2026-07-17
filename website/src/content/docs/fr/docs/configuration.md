---
title: Configuration
description: >-
  Emplacements des fichiers de configuration, variables d'environnement Docker,
  mode de confidentialité et authentification web.
translation_last_updated: '2026-07-17T14:58:54.738Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: fr
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - google/gemini-2.5-flash
---



## Emplacements des fichiers de configuration

| Déploiement | Emplacement de la configuration |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (utiliser un volume pour la persistance) |

## Variables d'environnement (web / Docker)

Electron utilise le fichier de configuration local. Pour le serveur web/Docker uniquement :

| Variable | Description |
| --- | --- |
| `PORT` | Port d'écoute du serveur (par défaut `5000`) |
| `CONFIG_PATH` | Chemin du fichier de configuration (par défaut `/app/data/config.json`) |
| `TZ` | Fuseau horaire pour l'heure côté serveur (par défaut `Europe/London`) |
| `HISTORY_DISABLED` | Forcer la désactivation de l'historique d'exécution (`true` / `1`) |
| `OPENROUTER_API_KEY` | Clé API OpenRouter |
| `OPENAI_API_KEY` | Clé API OpenAI |
| `CEREBRAS_API_KEY` | Clé API Cerebras |
| `ANTHROPIC_API_KEY` | Clé API Anthropic |
| `GOOGLE_API_KEY` | Clé API Google Gemini |
| `DEEPSEEK_API_KEY` | Clé API DeepSeek |
| `GROQ_API_KEY` | Clé API Groq |
| `MISTRAL_API_KEY` | Clé API Mistral |
| `LOCAL_LLM_URL` | URL de base complète de l'API compatible OpenAI pour un serveur local (incluez le chemin, par exemple Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Clé API xAI |
| `NVIDIA_API_KEY` | Clé API NVIDIA |
| `ALIBABA_API_KEY` | Clé API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Clé API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Nom d'affichage pour un fournisseur compatible OpenAI personnalisé |
| `CUSTOM_PROVIDER_URL` | URL de base pour un fournisseur compatible OpenAI personnalisé |
| `CUSTOM_PROVIDER_API_KEY` | Clé API pour le fournisseur personnalisé |

Les trois variables `CUSTOM_PROVIDER_*` sont requises lors de l'utilisation d'un point de terminaison personnalisé. Les modèles apparaissent en mode **Avancé** comme `{providerName}/…`.

## Mode de confidentialité

Définissez `HISTORY_DISABLED` sur `true` ou `1` sur le processus du serveur web/Docker et/ou le processus principal d'Electron pour forcer la désactivation de l'historique, indépendamment de `config.json` ou des préférences de l'utilisateur. Cela désactive le stockage de l'historique d'entrée/sortie, verrouille **Paramètres → Paramètres généraux → Historique** et bloque les API liées à l'historique.

## Persistance des données (Docker)

Montez un volume à `/app/data` afin que `config.json` et la base de données SQLite survivent aux redémarrages du conteneur. Sans volume, les données sont perdues lorsque le conteneur s'arrête.

## Authentification web

- Admin par défaut : `admin` / `transrewrt26`
- Gérer les utilisateurs dans **Paramètres → Utilisateurs**
- Réinitialiser un mot de passe :

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Changez immédiatement le mot de passe administrateur par défaut sur tout hôte accessible via le réseau.
:::

## Affichage des coûts

OpenRouter renvoie le coût facturé exact, le cas échéant. Les autres fournisseurs utilisent le coût **estimé** basé sur les tarifs publics des modèles d'OpenRouter lorsqu'une clé OpenRouter est disponible. Les estimations ne sont pas des factures.

Pour l'interface utilisateur des paramètres (polices, modèles, historique, sauvegardes), consultez [Paramètres](/docs/settings/).
