---
title: Clé API
description: >-
  Obtenez une clé API OpenRouter gratuite et connectez d'autres fournisseurs
  d'IA à Transrewrt.
---



Transrewrt a besoin d'accéder à au moins un fournisseur d'IA. Vous n'avez **pas** besoin d'un modèle payant pour commencer : OpenRouter propose des modèles gratuits après l'ajout d'une clé, et plusieurs autres fournisseurs proposent également des niveaux gratuits.

Les fournisseurs pris en charge incluent [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, tout point de terminaison compatible OpenAI, et les serveurs locaux compatibles OpenAI (Ollama, LM Studio, llama.cpp, et similaires).

## Facile vs Avancé

- Mode **Facile** (par défaut) : choisissez un **préréglage** (Gratuit (OpenRouter), Standard, Avancé ou Technique) mappé à un **fournisseur**. Seuls les préréglages avec un mappage pour le fournisseur actuel apparaissent.
- Mode **Avancé** : choisissez les modèles directement. Les identifiants de modèle utilisent un préfixe de fournisseur (par exemple `openrouter/…`, `openai/…`, `local/…`).

## Clé OpenRouter gratuite (ordinateur de bureau)

1. Allez sur [openrouter.ai](https://openrouter.ai) et inscrivez-vous ou connectez-vous.
2. Ouvrez la page [Clés](https://openrouter.ai/keys) et créez une nouvelle clé (nommez-la ; limite de crédit facultative). Vous pouvez utiliser des modèles gratuits sans ajouter de crédit.
3. Dans Transrewrt, ouvrez **Paramètres → Configuration API**, collez la clé dans **Clé API OpenRouter** et cliquez sur **Tester la clé OpenRouter**.

:::caution
N'utilisez pas le modèle **Body Builder** d'OpenRouter (`openrouter/bodybuilder`) pour la traduction, la réécriture ou la transformation — il renvoie des charges utiles de requête JSON, pas du texte complet.
:::

## Autres options gratuites

Vous pouvez également obtenir des clés API gratuites auprès de Cerebras, Google, Groq, Mistral AI ou [NVIDIA](https://build.nvidia.com/) (API compatible OpenAI), ou exécuter des modèles localement avec Ollama, LM Studio, llama.cpp ou un autre serveur compatible OpenAI (par exemple `translategemma:4b` via Ollama). Définissez l'URL de base du LLM local sur la base API complète (incluez le chemin, par exemple `http://localhost:11434/v1`) dans les paramètres (ordinateur de bureau) ou `LOCAL_LLM_URL` (Docker).

:::caution
Si vous utilisez un serveur LLM local depuis un autre appareil ou conteneur, configurez-le pour autoriser les connexions externes (pas seulement localhost).
:::

## Docker / web

Définissez les clés du fournisseur en tant que **variables d'environnement** sur le serveur (par exemple `PROVIDER_API_KEY`). Les utilisateurs ne peuvent pas saisir les clés dans l'interface utilisateur du navigateur. Consultez [Configuration](/docs/configuration/).

## Liste de contrôle de la première exécution

1. Ouvrez l'application et définissez la **langue de l'interface** si nécessaire.
2. Ajoutez et testez au moins une clé de fournisseur (ordinateur de bureau) ou confirmez que le serveur dispose de clés d'environnement (web).
3. En mode **Facile**, choisissez un **Fournisseur** dans les paramètres généraux ; en mode **Avancé**, ajoutez des modèles sous **Paramètres → Modèles**.
4. Sur **Traduire**, choisissez un préréglage ou un modèle et exécutez un court test — voir [Traduire du texte](/docs/translate/).
