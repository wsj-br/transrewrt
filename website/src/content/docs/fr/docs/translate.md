---
title: Traduire du texte
description: >-
  Convertissez du texte entre les langues, utilisez le glossaire et affinez les
  résultats avec Reformuler.
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

## Disposition et clavier

- **Bascule de disposition** — les boutons au-dessus des panneaux basculent entre les dispositions d'entrée/sortie **côte à côte** et **empilées**. Le choix s'applique à Traduire, Réécrire et Transformer et est mémorisé sur cet appareil.
- **Entrée** ou **Maj+Entrée** exécute la tâche, selon le **Comportement pour ENTRÉE** (voir ci-dessus).
- **Échap** efface le panneau d'entrée (ou ferme d'abord un menu ou une boîte de dialogue ouvert).

## Affiner une traduction

Après une exécution réussie, **Reformuler…** et une liste déroulante de versions apparaissent à côté du sélecteur **À :** :

1. **Reformuler…** (aucune sélection) — une autre traduction complète de la même entrée. Jusqu'à **cinq** versions ; le modèle voit les versions précédentes, de sorte que la formulation peut différer. Cliquez sur **Arrêter la traduction** pour annuler une reformulation en cours.
2. **Alternatives de mots** — sélectionnez des mots ou une courte phrase, puis faites un clic droit ou **Reformuler…**. Choisissez une alternative pour remplacer l'étendue (peut s'élargir légèrement pour la grammaire). À cinq versions, seule la version 5 est mise à jour.
3. Chaque demande de reformulation ou d'alternatives utilise à nouveau le modèle et peut entraîner des coûts supplémentaires.

## Utiliser le glossaire

Un **glossaire** est une paire de termes source/cible pour une paire de langues. Lorsqu'il est activé, les termes correspondants sont envoyés au modèle afin que la formulation préférée reste cohérente.

1. Activez le **Glossaire** dans le panneau de saisie.
2. Traduisez comme d'habitude — les termes pour cette paire **De** / **À** s'appliquent automatiquement.
3. Cliquez sur **Ajouter au glossaire** (à côté de **De :**) pour capturer rapidement une nouvelle paire.
4. Gérez tous les termes dans [Paramètres → Glossaire](/docs/settings/#glossary).

:::note
Les termes du glossaire sont mis en correspondance par paire de langues. Ils ne peuvent pas être utilisés avec la **Détection de la langue** comme source.
:::

## Prochaines étapes

- [Réécrire le texte](/docs/rewrite/)
- [Transformer avec des invites](/docs/transform/)
- [Problèmes courants](/docs/common-issues/)
