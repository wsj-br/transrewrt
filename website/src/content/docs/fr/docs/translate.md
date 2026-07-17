---
title: Traduire du texte
description: >-
  Convertissez du texte entre les langues, utilisez le glossaire et affinez les
  résultats avec Reformuler.
translation_last_updated: '2026-07-17T14:58:56.158Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ace9ad02a7dc82bf08090597c56e7cc82324e6250beab93fc2dbeaeed8b91675
translation_language: fr
source_file_path: src/content/docs/docs/translate.md
translation_models:
  - google/gemini-2.5-flash
---



Utilisez **Traduire** pour convertir du texte d'une langue à une autre.

![Espace de travail de traduction](/images/screenshots/fr/translate.png)

## Prérequis

- Au moins une clé de fournisseur (ordinateur de bureau) ou une clé d'environnement de serveur (web) — voir [Clé API](/docs/api-key/)
- Un **préréglage** (Facile) ou un **modèle** (Avancé) sélectionné dans la barre d'outils

## Traduire du texte

1. Ouvrez **Traduire** dans la barre latérale.
2. Choisissez une langue dans **De** (ou **Détecter la langue**).
3. Choisissez une langue dans **À**.
4. Choisissez un préréglage ou un modèle dans la barre d'outils.
5. Tapez ou collez du texte dans **Entrée**.
6. Cliquez sur **Traduire**.
7. Lisez le résultat dans **Sortie**, puis copiez si nécessaire.

Les **langues principales** apparaissent en premier dans les listes — définissez-les sous [Paramètres → Langues](/docs/settings/#languages).

## Paramètres utiles

Dans [Paramètres → Paramètres généraux](/docs/settings/#general-settings) :

- **Exécution automatique au collage** — s'exécute dès que vous collez
- **Copie automatique du résultat dans le presse-papiers** — copie après une exécution réussie
- **Traduction en temps réel pendant la saisie** — s'exécute pendant que vous tapez (peut augmenter les coûts)
- **Délai d'attente (ms)** — attente avant une exécution en temps réel
- **Comportement pour ENTRÉE** — si Entrée exécute la tâche ou insère une nouvelle ligne

## Affiner une traduction

Après une exécution réussie, **Reformuler…** et une liste déroulante de versions apparaissent à côté du sélecteur **À :** :

1. **Reformuler…** (aucune sélection) — une autre traduction complète de la même entrée. Jusqu'à **cinq** versions ; le modèle voit les versions précédentes, donc la formulation peut différer. Cliquez sur **Arrêter la traduction** pour annuler une reformulation en cours.
2. **Alternatives de mots** — sélectionnez des mots ou une courte phrase, puis faites un clic droit ou **Reformuler…**. Choisissez une alternative pour remplacer l'étendue (peut s'élargir légèrement pour la grammaire). À cinq versions, seule la version 5 est mise à jour.
3. Chaque demande de reformulation ou d'alternatives utilise à nouveau le modèle et peut entraîner des coûts supplémentaires.

## Utiliser le glossaire

Un **glossaire** est une paire de termes source/cible pour une paire de langues. Lorsqu'il est activé, les termes correspondants sont envoyés au modèle afin que la formulation préférée reste cohérente.

1. Activez **Glossaire** dans le panneau de saisie.
2. Traduisez comme d'habitude — les termes pour cette paire **De** / **À** s'appliquent automatiquement.
3. Cliquez sur **Ajouter au glossaire** (à côté de **De :**) pour capturer rapidement une nouvelle paire.
4. Gérez tous les termes dans [Paramètres → Glossaire](/docs/settings/#glossary).

:::note
Les termes du glossaire sont mis en correspondance par paire de langues. Ils ne peuvent pas être utilisés avec **Détecter la langue** comme source.
:::

## Prochaines étapes

- [Réécrire le texte](/docs/rewrite/)
- [Transformer avec des invites](/docs/transform/)
- [Problèmes courants](/docs/common-issues/)
