---
title: Problèmes courants
description: Dépannage et astuces rapides pour Transrewrt.
translation_last_updated: '2026-07-17T14:58:54.571Z'
source_file_mtime: '2026-07-17T14:37:17.841Z'
source_file_hash: d60d2f0d1e9289639fd72ad478b6756e4638dce77acf7d2d1795a37653a97f17
translation_language: fr
source_file_path: src/content/docs/docs/common-issues.md
translation_models:
  - google/gemini-2.5-flash
---



Si quelque chose ne fonctionne pas comme prévu, vérifiez d'abord ces points.

## L'application ne traduit pas, ne réécrit pas ou ne transforme pas

Vérifiez que :

- vous avez sélectionné un **préréglage** (Facile) ou un **modèle** (Avancé) dans la barre d'outils
- en mode **Facile**, **Paramètres → Paramètres généraux** a un **Fournisseur** avec une clé fonctionnelle (ou une URL LLM locale)
- en mode **Avancé**, au moins un modèle est listé dans **Paramètres → Modèles**
- votre configuration d'API fonctionne (ordinateur de bureau : **Paramètres → Configuration de l'API → Tester**)

## La liste des modèles est vide

En mode **Facile**, vérifiez que le **Fournisseur** est défini et que les clés/URL sont testées. Pour **LLM local**, assurez-vous que votre serveur local est en cours d'exécution et que les modèles sont chargés.

En mode **Avancé**, ouvrez **Paramètres → Modèles**, cliquez sur **Actualiser**, et ajoutez des modèles à **Modèles sélectionnés**. Activez éventuellement **Gratuit uniquement**.

## Trop lent ou trop cher

- Choisissez un préréglage ou un modèle différent
- Utilisez une entrée plus courte
- Désactivez **Traduction en temps réel pendant la saisie** dans les Paramètres généraux
- Utilisez des modèles gratuits pour les tâches simples

## Langue de l'interface incorrecte

Cliquez sur l'icône du globe dans la barre d'outils et choisissez votre **Langue de l'interface**.

## Texte trop petit ou difficile à lire

**Paramètres → Paramètres généraux** → modifiez la **Famille de polices** et la **Taille**.

## Le résumé du tableau de bord semble vide

C'est normal si :

- vous utilisez uniquement des **modèles gratuits** et que vous consultez les chiffres de **coût** (ils peuvent être nuls) ; les KPI de nombre d'appels nécessitent toujours des données pour la période sélectionnée
- le **filtre temporel** sélectionné ne couvre pas la période où les appels ont été effectués — essayez **Tout**

Si les KPI sont toujours à zéro après **Tout**, vérifiez [Historique](/docs/history/) ou Tableau de bord → **Tous les appels**.

## Le coût indique "non disponible" ou semble incorrect

OpenRouter affiche les dépenses réelles le cas échéant. Pour les autres fournisseurs, le coût est estimé à partir des tarifs OpenRouter ; si aucun prix ne correspond, le coût s'affiche comme **non disponible** et n'est pas ajouté au total.

## Le coût total ne correspond pas à ma facture de fournisseur

Les chiffres de l'application sont des **estimations à titre indicatif**, pas des factures. Pour OpenRouter, utilisez **Paramètres → Suivi des coûts → Synchroniser avec l'utilisation de la clé API**.

## Page d'historique manquante dans la barre latérale

L'option **Conserver l'historique d'exécution** peut être désactivée. Activez-la dans les paramètres généraux, sauf si l'historique est désactivé par l'administrateur (`HISTORY_DISABLED` — voir [Configuration](/docs/configuration/#privacy-mode)).

## Web : redirigé vers la connexion de manière inattendue

Votre session a peut-être expiré. Connectez-vous à nouveau. Si cela se produit souvent, vérifiez les paramètres de durée de vie de la session du serveur.

## Administration Web : mot de passe oublié

Si un autre administrateur peut se connecter, il peut réinitialiser le mot de passe sous **Paramètres → Utilisateurs**. Si vous êtes bloqué mais que vous avez un accès shell :

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Le nom d'utilisateur administrateur par défaut est `admin`. À partir d'un extrait de code source : `pnpm run reset-web-password -- <username> <new-password>`.

## Le tableau de bord n'affiche aucune donnée pour les autres utilisateurs (web)

Seuls les **administrateurs** peuvent afficher les autres utilisateurs via le filtre **Utilisateur**. Les utilisateurs réguliers ne voient que leur propre activité.

## Modification d'une invite et perte des modifications

Lorsque vous modifiez une invite de transformation, cliquez sur **Enregistrer** avant de cliquer sur **Retour à l'exécution**.

## Conseils rapides

- Commencez par [Traduire](/docs/translate/) pour confirmer votre configuration avant de Réécrire ou Transformer
- Utilisez [Réécrire](/docs/rewrite/) pour les améliorations de formulation quotidiennes
- Utilisez [Transformer](/docs/transform/) pour les flux de travail personnalisés reproductibles
- Restez en mode **Facile** jusqu'à ce que vous ayez besoin d'ID de modèle précis
- Exportez régulièrement les invites si vous construisez une bibliothèque d'invites
- Utilisez [Tableau de bord](/docs/dashboard/) et [Historique](/docs/history/) pour examiner l'utilisation et les exécutions passées

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
