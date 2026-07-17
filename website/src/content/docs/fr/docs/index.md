---
title: Présentation
description: >-
  Qu'est-ce que Transrewrt et comment trouver les documents d'installation, les
  guides et les paramètres.
translation_last_updated: '2026-07-17T14:58:55.365Z'
source_file_mtime: '2026-07-17T14:36:51.471Z'
source_file_hash: 6dfcf9cb19e3422d75511ecc06eda72e014214c3e34d95f7fec6d8a05c01896f
translation_language: fr
source_file_path: src/content/docs/docs/index.md
translation_models:
  - google/gemini-2.5-flash
---



**Transrewrt** est un outil textuel open-source basé sur l'IA pour :

- **Traduire** — entre des dizaines de langues, avec détection automatique de la source et glossaires
- **Réécrire** — corriger la grammaire, améliorer la clarté, changer le ton ou la longueur
- **Transformer** — exécuter vos propres invites IA personnalisées sur n'importe quel texte

Il prend en charge de nombreux fournisseurs d'IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, les points de terminaison compatibles OpenAI et les serveurs locaux compatibles OpenAI tels qu'Ollama, LM Studio ou llama.cpp). Exécutez-le en tant qu'**application de bureau** (Windows/Linux) ou **application web auto-hébergée** (Docker).

Vos clés, vos modèles, votre hôte — il n'y a pas de compte cloud Transrewrt.

## Organisation de la fenêtre

- **Barre latérale** — Traduire, Réécrire, Transformer, Tableau de bord, Historique, Paramètres (et l'utilisateur connecté sur le web)
- **Barre d'outils** — titre de la page, sélecteur de **préréglage** (Facile) ou de **modèle** (Avancé), et **Langue de l'interface** (icône globe ; ne modifie pas Traduire de/vers)
- **Zone de travail** — Panneaux d'entrée et de sortie avec les comptes, le temps, les TPS et le coût optionnel

Par défaut, l'application fonctionne en mode **Facile** : choisissez un **préréglage** et un **fournisseur** dans les paramètres. Passez en mode **Avancé** sous [Paramètres → Paramètres généraux](/docs/settings/#general-settings) pour une liste complète des modèles.

## Démarrer

1. [Démarrage rapide](/docs/quick-start/) — installer la version de bureau ou exécuter avec Docker
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
