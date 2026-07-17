---
title: Réécrire le texte
description: >-
  Améliorer la formulation dans la même langue — clarté, ton, longueur,
  grammaire, etc.
translation_last_updated: '2026-07-17T14:58:55.664Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ca70a1d16518bb9193c83911bfb7be66b19076c48b914b92aba4e9a17f67740f
translation_language: fr
source_file_path: src/content/docs/docs/rewrite.md
translation_models:
  - google/gemini-2.5-flash
---



Utilisez **Réécrire** pour améliorer la formulation sans changer le sens principal. Le texte reste dans la même langue.

![Espace de travail de réécriture](/images/screenshots/fr/rewrite.png)

Les modes incluent :

- **Vérifier l'orthographe et la grammaire**
- **Améliorer la clarté**
- **Versions alternatives** (plusieurs reformulations en une seule exécution)
- **Rendre formel** / **Rendre informel**
- **Raccourcir** / **Développer**
- **Rendre technique**

## Réécrire le texte

1. Ouvrez **Réécrire**.
2. Choisissez un **Mode**.
3. Définissez éventuellement la langue de votre texte dans **De** (ou laissez **Détecter la langue**).
4. Saisissez ou collez le texte dans **Entrée**.
5. Cliquez sur **Réécrire**.
6. Lisez le résultat dans **Sortie**.

:::tip
Dans **Vérifier l'orthographe et la grammaire**, un interrupteur **Afficher les modifications** apparaît à côté de **Copier**. Activez-le pour afficher ou masquer les corrections.
:::

:::note
**Versions alternatives** renvoie plusieurs reformulations en une **seule** exécution, séparées par `----`. Cela diffère de **Reformuler…**, qui construit un historique des versions au fil du temps.
:::

## Affiner une réécriture

Après une exécution réussie, **Reformuler…** et le menu déroulant des versions apparaissent du côté de la sortie (même idée que [Traduire](/docs/translate/#refine-a-translation), mais le texte reste dans la même langue et conserve le **Mode** actuel) :

1. **Reformuler…** (aucune sélection) — une autre réécriture complète avec une formulation différente. Jusqu'à cinq versions. Cliquez sur **Arrêter la réécriture** pour annuler.
2. **Alternatives de mots** — sélectionnez du texte, puis faites un clic droit ou **Reformuler…**.
3. Chaque requête peut entraîner des coûts d'utilisation.

## Prochaines étapes

- [Traduire du texte](/docs/translate/)
- [Transformer avec des invites](/docs/transform/)
- [Problèmes courants](/docs/common-issues/)
