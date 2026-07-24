---
title: Problèmes courants
description: Dépannage et astuces rapides pour Transrewrt.
---



Si quelque chose ne fonctionne pas comme prévu, vérifiez d'abord ces points.

## L'application ne traduit pas, ne réécrit pas ou ne transforme pas

Vérifiez que :

- vous avez sélectionné un **préréglage** (Facile) ou un **modèle** (Avancé) dans la barre d'outils
- en mode **Facile**, **Paramètres → Paramètres généraux** a un **Fournisseur** avec une clé fonctionnelle (ou une URL LLM locale)
- en mode **Avancé**, un modèle est sélectionné dans la barre d'outils (une liste vide est autorisée, mais vous avez besoin d'au moins un modèle dans **Paramètres → Modèles** pour exécuter)
- votre configuration d'API fonctionne (ordinateur de bureau : **Paramètres → Configuration API → Tester**)

## La liste des modèles est vide

En mode **Facile**, confirmez que le **Fournisseur** est défini et que les clés/URL sont testées. Pour **LLM local**, assurez-vous que votre serveur local est en cours d'exécution et que les modèles sont chargés.

En mode **Avancé**, les modèles sélectionnés peuvent être vides. Ouvrez **Paramètres → Modèles**, cliquez sur **Actualiser** et ajoutez des modèles à **Modèles sélectionnés**. Vous pouvez éventuellement activer **Gratuit uniquement**. La suppression du dernier modèle de la barre d'outils ouvre également Paramètres → Modèles.

## Trop lent ou trop cher

- Choisissez un préréglage ou un modèle différent
- Utilisez une entrée plus courte
- Désactivez la **Traduction en temps réel pendant la saisie** dans les Paramètres généraux
- Utilisez des modèles gratuits pour les tâches simples

## Langue d'interface incorrecte

Cliquez sur l'icône du globe dans la barre d'outils et choisissez votre **Langue d'interface**.

## Texte trop petit ou difficile à lire

**Paramètres → Paramètres généraux** → modifiez la **Famille de polices** et la **Taille**.

## Le résumé du tableau de bord semble vide

C'est normal si :

- vous n'utilisez que des **modèles gratuits** et que vous consultez les chiffres de **coût** (ils peuvent être nuls) ; les KPI de nombre d'appels ont toujours besoin de données pour la période sélectionnée
- le **filtre temporel** sélectionné ne couvre pas le moment où les appels ont été effectués — essayez **Tout**

Si les KPI sont toujours à zéro après **Tout**, vérifiez l'[Historique](/docs/history/) ou Tableau de bord → **Tous les appels**.

## Le coût indique « non disponible » ou semble incorrect

OpenRouter affiche les dépenses réelles le cas échéant. Pour les autres fournisseurs, le coût est estimé à partir des tarifs OpenRouter ; si aucun prix ne correspond, le coût est indiqué comme **non disponible** et n'est pas ajouté au total.

## Le coût total ne correspond pas à ma facture de fournisseur

Les chiffres de l'application sont des **estimations à titre indicatif**, et non des factures. Pour OpenRouter, utilisez **Paramètres → Suivi des coûts → Synchroniser avec l'utilisation de la clé API**.

## Page d'historique manquante dans la barre latérale

L'option **Conserver l'historique d'exécution** est peut-être désactivée. Activez-la dans les paramètres généraux, sauf si l'historique est désactivé par l'administrateur (`HISTORY_DISABLED` — voir [Configuration](/docs/configuration/#privacy-mode)).

## Web : redirection inattendue vers la page de connexion

Votre session a peut-être expiré. Connectez-vous à nouveau. Si cela se produit fréquemment, demandez à un administrateur d'augmenter le **Délai d'expiration de la session** sous [Paramètres → Utilisateurs](/docs/settings/#users) (un administrateur a peut-être également révoqué vos sessions).

## Administration web : mot de passe oublié

Si un autre administrateur peut se connecter, il peut réinitialiser le mot de passe sous **Paramètres → Utilisateurs**. Si vous êtes bloqué mais avez un accès shell :

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Le nom d'utilisateur administrateur par défaut est `admin`. À partir d'une extraction de source : `pnpm run reset-web-password -- <username> <new-password>`.

## Le tableau de bord n'affiche aucune donnée pour les autres utilisateurs (web)

Seuls les **administrateurs** peuvent afficher d'autres utilisateurs via le filtre **Utilisateur**. Les utilisateurs réguliers ne voient que leur propre activité.

## J'ai modifié une invite et j'ai perdu mes modifications

Lorsque vous modifiez une invite de transformation, cliquez sur **Enregistrer** avant de cliquer sur **Retour à l'exécution**.

## Conseils rapides

- Commencez par [Traduire](/docs/translate/) pour confirmer votre configuration avant de réécrire ou de transformer
- Utilisez [Réécrire](/docs/rewrite/) pour les améliorations de formulation quotidiennes
- Utilisez [Transformer](/docs/transform/) pour les workflows personnalisés reproductibles
- Restez en mode **Facile** jusqu'à ce que vous ayez besoin d'ID de modèle précis
- Exportez régulièrement les invites si vous créez une bibliothèque d'invites
- Utilisez [Tableau de bord](/docs/dashboard/) et [Historique](/docs/history/) pour examiner l'utilisation et les exécutions passées

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
