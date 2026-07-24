---
title: Clé API
description: >-
  Connectez Transrewrt à un fournisseur d'IA de votre choix en ajoutant une clé
  API, ou utilisez un modèle local à la place.
---



Transrewrt n'inclut pas sa propre IA — il envoie votre texte à un fournisseur d'IA que vous choisissez. Pour connecter un fournisseur, vous ajoutez une **clé API** : un code privé, émis par le fournisseur, qui fonctionne comme un mot de passe pour son service. Vous n'avez besoin que d'**un seul** fournisseur pour commencer, et vous n'avez pas besoin de payer : plusieurs fournisseurs proposent des modèles gratuits ou des niveaux gratuits, et vous pouvez également exécuter des modèles sur votre propre ordinateur sans aucune clé.

Les fournisseurs pris en charge incluent OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, tout point de terminaison compatible OpenAI, et les serveurs locaux compatibles OpenAI (Ollama, LM Studio, llama.cpp, et similaires).

## Étape 1 — Choisir un fournisseur

N'importe quel fournisseur pris en charge fonctionne. Si vous ne savez pas lequel choisir :

- **Gratuit pour commencer** : OpenRouter, Google Gemini, Groq, Mistral, Cerebras et NVIDIA proposent tous des modèles gratuits ou des niveaux gratuits.
- **Vous avez déjà un compte ?** Si vous utilisez déjà OpenAI, Anthropic ou un autre fournisseur pris en charge, vous pouvez simplement réutiliser ce compte.
- **Vous préférez tout garder sur votre propre ordinateur ?** Ignorez complètement la clé et utilisez un [modèle local](#using-a-local-model-instead-no-api-key) à la place.

## Étape 2 — Créer une clé API

Les étapes exactes varient légèrement selon le fournisseur, mais le schéma est le même partout :

1. Inscrivez-vous ou connectez-vous sur le site web du fournisseur. Dans **Paramètres → Configuration API** de Transrewrt, chaque fournisseur a un lien **Ouvrir le site web du fournisseur** qui vous mène au bon endroit.
2. Trouvez la page **Clés API** (parfois sous les paramètres de compte, de tableau de bord ou de développeur) et créez une nouvelle clé. Certains fournisseurs vous demandent de nommer la clé ou de définir une limite de dépenses — les deux sont facultatifs.
3. Copiez la clé. C'est une longue chaîne de lettres et de chiffres, commençant souvent par quelque chose comme `sk-`.

:::caution
Traitez une clé API comme un mot de passe : ne la partagez pas, ne la publiez pas et ne l'envoyez à personne. Si une clé est compromise, supprimez-la sur le site web du fournisseur et créez-en une nouvelle.
:::

## Étape 3 — Ajouter et tester la clé (ordinateur de bureau)

1. Dans Transrewrt, ouvrez **Paramètres → Configuration API**.
2. Collez la clé dans le champ de votre fournisseur (par exemple **Clé API Google Gemini**) et enregistrez-la.
3. Cliquez sur **Tester** à côté du champ pour confirmer que la clé fonctionne.

Une fois le test réussi, vous êtes prêt — choisissez ce fournisseur sur l'écran principal et commencez à traduire.

:::caution
Évitez le modèle **Body Builder** d'OpenRouter (`openrouter/bodybuilder`) — il renvoie des charges utiles de requête JSON, pas du texte complété. Voir [Paramètres → Modèles](/docs/settings/#models).
:::

## Utiliser un modèle local à la place (pas de clé API)

Vous pouvez exécuter des modèles sur votre propre ordinateur avec Ollama, LM Studio, llama.cpp ou un autre serveur compatible OpenAI (par exemple `google/gemma-4-e2b` via LM Studio). Rien ne quitte votre machine et aucune clé API n'est nécessaire.

Pour en connecter un, définissez l'URL de base du LLM local sur l'API de base complète, y compris le chemin — par exemple `http://localhost:11434/v1`. Sur un ordinateur de bureau, définissez cela dans **Paramètres → Configuration API** ; sur Docker, définissez plutôt la variable d'environnement `LOCAL_LLM_URL`.

:::caution
Si vous utilisez un serveur LLM local depuis un autre appareil ou conteneur, configurez-le pour autoriser les connexions externes (pas seulement localhost).
:::

## Docker / web

Si vous utilisez Transrewrt dans un navigateur, les clés sont gérées par celui qui exécute le serveur, et non saisies dans l'interface utilisateur du navigateur. L'administrateur définit les clés du fournisseur comme **variables d'environnement** sur le serveur (par exemple `PROVIDER_API_KEY`) — voir [Configuration](/docs/configuration/).

## Liste de contrôle de la première exécution

1. Ouvrez l'application et définissez la **Langue de l'interface** si nécessaire.
2. Ajoutez et testez au moins une clé de fournisseur — ou configurez un modèle local (ordinateur de bureau), ou confirmez que le serveur a des clés d'environnement (web).
3. En mode **Facile**, choisissez un **Fournisseur** dans les Paramètres généraux ; en mode **Avancé**, ajoutez des modèles sous **Paramètres → Modèles** — voir [Paramètres](/docs/settings/#general-settings) pour les deux modes.
4. Sur **Traduire**, choisissez un préréglage ou un modèle et exécutez un court test — voir [Traduire du texte](/docs/translate/).

## Si quelque chose ne fonctionne pas

- **L'authentification échoue** : vérifiez que la clé a été copiée entièrement (sans espaces avant ou après) et qu'elle n'a pas été supprimée ou désactivée sur le site web du fournisseur.
- **Les traductions échouent avec une erreur de quota ou de crédit** : les offres gratuites ont des limites quotidiennes ou mensuelles ; attendez, passez à un autre fournisseur gratuit ou ajoutez du crédit.
- **Aucun fournisseur n'apparaît en mode Facile** : ouvrez **Paramètres → Configuration de l'API** et vérifiez qu'au moins une clé (ou l'URL LLM locale) est configurée et testée.

Plus d'aide : [Problèmes courants](/docs/common-issues/).
