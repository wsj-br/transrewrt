---
title: Utiliser le tableau de bord
description: >-
  Consultez l’utilisation, les coûts et les journaux d’appels — filtrez,
  exportez et gérez les enregistrements stockés.
translation_last_updated: '2026-07-17T21:14:42.776Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 689c93c2517f806f7976d570b4fc86d30ca048ce906d982429b985ad06dd9250
translation_language: fr
source_file_path: src/content/docs/docs/dashboard.md
translation_models:
  - google/gemini-2.5-flash
---



Utilisez le **Tableau de bord** pour voir dans quelle mesure vous utilisez l’application et ce qu’elle coûte (pour les modèles payants).

![Résumé du tableau de bord](/images/screenshots/fr/dashboard-summary.png)

:::note
Si vous n’utilisez que des modèles **gratuits**, les montants des coûts peuvent être nuls. Les indicateurs clés de performance (KPI) du nombre d’appels sur le **Résumé** nécessitent toujours une activité dans la période sélectionnée.
:::

## Filtrer les données

Utilisez les boutons de filtre en haut pour modifier la plage de temps.

:::note
Le filtre **Utilisateur** n’est visible que par les administrateurs dans la version web. Il n’est pas disponible sur ordinateur de bureau.
:::

## Onglets

- **Résumé** — KPI : coût total, modèles utilisés, nombre d’appels et coût par mode, coût moyen par appel, TPS moyen, principaux modèles par nombre d’appels
- **Par modèle** — appels, coût et TPS par modèle ; développez une ligne pour une répartition par mode
- **Tous les appels** — journal d’appels complet (paginé ou par cartes) avec exportation

## Exporter les données

Exportez les tableaux au format **JSON**, **CSV** ou **XLSX**.

## Supprimer les enregistrements stockés pour un modèle

Dans **Par modèle** ou **Tous les appels**, utilisez l’icône de la corbeille pour supprimer les enregistrements d’un modèle.

:::caution
La suppression est irréversible. Pour supprimer par âge ou effacer toutes les données de coût, utilisez [Paramètres → Suivi des coûts](/docs/settings/#cost-tracking).
:::

## Prochaines étapes

- [Parcourir l’historique](/docs/history/)
- [Paramètres](/docs/settings/)
- [Problèmes courants](/docs/common-issues/)
