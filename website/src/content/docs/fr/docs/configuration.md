---
title: Configuration
description: >-
  Emplacements des fichiers de configuration, variables d'environnement Docker,
  mode de confidentialité et authentification web.
---



## Emplacements des fichiers de configuration

| Déploiement | Dossier de données |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (utiliser un volume pour la persistance) |

Le dossier de données contient tout ce qui mérite d'être sauvegardé :

- `config.json` — paramètres et clés API chiffrées (ordinateur de bureau)
- `state.json` — langues, modèle et état d'affichage utilisés en dernier
- `presets.json` — catalogue de préréglages en mode facile mis en cache
- `transrewrt.db` — base de données SQLite avec historique, coûts, invites, glossaire et utilisateurs (web)

Vous pouvez également créer une sauvegarde ZIP portable depuis l'application — voir [Paramètres → Paramètres généraux](/docs/settings/#general-settings).

## Persistance des données (Docker)

Montez un volume à `/app/data` afin que les fichiers de configuration et la base de données SQLite (voir [Emplacements des fichiers de configuration](#config-file-locations)) survivent aux redémarrages du conteneur. Sans volume, les données sont perdues lorsque le conteneur s'arrête.

## Variables d'environnement (web / Docker)

Electron utilise le fichier de configuration local. Pour le serveur web/Docker uniquement :

| Variable | Description |
| --- | --- |
| `PORT` | Port d'écoute du serveur (par défaut `5000`) |
| `CONFIG_PATH` | Chemin d'accès au fichier de configuration (par défaut `/app/data/config.json`) |
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
| `LOCAL_LLM_URL` | URL de base complète de l'API compatible OpenAI pour un serveur local, y compris le chemin (par exemple Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Clé API xAI |
| `NVIDIA_API_KEY` | Clé API NVIDIA |
| `ALIBABA_API_KEY` | Clé API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Clé API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Nom d'affichage pour un fournisseur personnalisé compatible OpenAI |
| `CUSTOM_PROVIDER_URL` | URL de base pour un fournisseur personnalisé compatible OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Clé API pour le fournisseur personnalisé |

Les trois variables `CUSTOM_PROVIDER_*` sont requises lors de l'utilisation d'un point de terminaison personnalisé. Les modèles apparaissent en mode **Avancé** sous la forme `{providerName}/…`.

## Variables d'environnement (ordinateur de bureau)

| Variable | Description |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Définir sur `1` pour désactiver l'accélération matérielle (utile lorsque Chromium affiche des erreurs GPU / EGL sous Linux) |
| `HISTORY_DISABLED` | Forcer la désactivation de l'historique d'exécution (`true` / `1`) — voir [Mode de confidentialité](#privacy-mode) |

## Mode de confidentialité

Définissez `HISTORY_DISABLED` sur `true` ou `1` sur le processus du serveur web/Docker et/ou le processus principal d'Electron pour forcer la désactivation de l'historique, quelles que soient les `config.json` ou les préférences de l'utilisateur. Cela désactive le stockage de l'historique d'entrée/sortie, verrouille **Paramètres → Paramètres généraux → Historique** et bloque les API liées à l'historique.

## Authentification web

- Administrateur par défaut : `admin` / `transrewrt26`
- Gérez les utilisateurs, le délai d’expiration de session et la révocation de session dans **Paramètres → Utilisateurs** — consultez [Paramètres](/docs/settings/#users)
- Chaque utilisateur connecté peut modifier son propre mot de passe ou se déconnecter à partir du menu utilisateur en bas de la barre latérale
- Réinitialiser un mot de passe :

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Modifiez le mot de passe administrateur par défaut immédiatement sur tout hôte accessible via le réseau.
:::

:::caution
Le serveur utilise le protocole HTTP en clair. Si vous l’exposez au-delà de localhost ou d’un réseau de confiance, placez-le derrière un proxy inverse avec HTTPS (par exemple Caddy, nginx ou Traefik) afin que les mots de passe et le texte ne soient pas envoyés en clair.
:::

## Affichage des coûts

OpenRouter renvoie le coût facturé exact le cas échéant. Les autres fournisseurs utilisent le coût **estimé** à partir des tarifs des modèles publics d’OpenRouter lorsqu’une clé OpenRouter est disponible. Les estimations ne sont pas des factures.

Pour l’interface utilisateur des paramètres (polices, modèles, historique, sauvegardes), consultez [Paramètres](/docs/settings/).
