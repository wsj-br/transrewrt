---
title: Utiliser le tableau de bord
description: >-
  Consultez l'utilisation, les coûts et les journaux d'appels — filtrez,
  exportez et gérez les enregistrements stockés.
---



Utilisez le **Tableau de bord** pour voir votre utilisation de l'application et son coût (pour les modèles payants).

![Résumé du tableau de bord](/images/screenshots/fr/dashboard-summary.png)

:::note
Les montants des coûts peuvent s'afficher comme **0 $** si vous utilisez des modèles gratuits, si le fournisseur ne prend pas en charge le suivi des coûts ou si vous utilisez un LLM local. Les KPI de nombre d'appels sur le **Résumé** reflètent l'utilisation réelle, quoi qu'il arrive — ils ne sont à zéro que s'il n'y a eu aucune activité pendant la période sélectionnée.
:::

## Filtrer les données

Utilisez les boutons de filtre en haut pour modifier la plage de temps.

Le filtre **Utilisateur** n'est visible que par les administrateurs dans la version web ; il n'est pas disponible sur le bureau.

## Onglets

- **Résumé** — KPI : coût total, modèles utilisés, nombre d'appels et coût par mode, coût moyen par appel, TPS moyen, meilleurs modèles par nombre d'appels
- **Par modèle** — appels, coût et TPS par modèle ; développez une ligne pour une ventilation par mode
- **Tous les appels** — journal complet des appels (paginé ou cartes) avec exportation

## Exporter les données

Exportez les tableaux au format **JSON**, **CSV** ou **XLSX**.

## Supprimer les enregistrements stockés pour un modèle

Dans **Par modèle** ou **Tous les appels**, utilisez l'icône de la corbeille pour supprimer les enregistrements d'un modèle.

:::caution
La suppression est irréversible. Pour supprimer par âge ou effacer toutes les données de coût, utilisez [Paramètres → Suivi des coûts](/docs/settings/#cost-tracking).
:::

## Prochaines étapes

- [Parcourir l'historique](/docs/history/)
- [Paramètres](/docs/settings/)
- [Problèmes courants](/docs/common-issues/)
