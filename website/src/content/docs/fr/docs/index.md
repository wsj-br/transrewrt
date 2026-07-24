---
title: Présentation
description: >-
  Qu'est-ce que Transrewrt et comment trouver les guides d'installation et les
  documents de paramètres.
---



**Transrewrt** est un outil textuel open-source alimenté par l'IA pour :

- **Traduire** — entre des dizaines de langues, avec détection automatique de la source et glossaires
- **Réécrire** — corriger la grammaire, améliorer la clarté, changer le ton ou la longueur
- **Transformer** — exécuter vos propres invites IA personnalisées sur n'importe quel texte

Il prend en charge de nombreux fournisseurs d'IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, les points de terminaison compatibles OpenAI et les serveurs locaux compatibles OpenAI tels qu'Ollama, LM Studio ou llama.cpp). Exécutez-le en tant qu'**application de bureau** (Windows / Linux) ou **application web auto-hébergée** (Docker).

Vos clés, vos modèles, votre hôte — il n'y a pas de compte cloud Transrewrt.

## Organisation de la fenêtre

![Espace de travail de traduction](/images/screenshots/fr/translate.png)

- **Barre latérale** — la navigation principale : Traduire, Réécrire, Transformer, Tableau de bord, Historique, Paramètres (et l’utilisateur connecté sur le web).
- **Barre d’outils** — le titre de la page, le sélecteur de **préréglage** (Facile) ou de **modèle** (Avancé), la **langue de l’interface** (icône de globe ; ne modifie pas Traduire de/vers), et l’aide (**?**) renvoyant à cette documentation. Le menu de préréglage/modèle peut également **Passer en mode Facile/Avancé** (au-dessus d’Ouvrir les paramètres).
- **Zone de travail** — les panneaux d’entrée et de sortie, avec les décomptes, la durée, le TPS et le coût facultatif. La barre d’action affiche un petit lien de **version** de l’application (en bas à droite) vers le site GitHub Pages.

Par défaut, l'application s'exécute en mode **Facile** : choisissez un **préréglage** et un **fournisseur** dans les paramètres. Passez en mode **Avancé** sous [Paramètres → Paramètres généraux](/docs/settings/#general-settings) pour une liste complète des modèles, ou utilisez le commutateur dans le menu préréglage/modèle de la barre d'outils.

## Démarrer

1. [Démarrage rapide](/docs/quick-start/) — installer l'application de bureau ou l'exécuter avec Docker
2. [Clé API](/docs/api-key/) — connecter une clé OpenRouter gratuite ou un autre fournisseur
3. [Configuration](/docs/configuration/) — variables d'environnement, chemins de configuration, authentification web

## Guides

- [Traduire du texte](/docs/translate/)
- [Réécrire du texte](/docs/rewrite/)
- [Transformer avec des invites](/docs/transform/)
- [Utiliser le tableau de bord](/docs/dashboard/)
- [Parcourir l'historique](/docs/history/)

## Référence et aide

- [Paramètres](/docs/settings/)
- [Problèmes courants](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
