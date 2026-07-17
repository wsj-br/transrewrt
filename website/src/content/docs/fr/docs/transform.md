---
title: Transformer avec des invites
description: >-
  Exécutez des instructions d'IA personnalisées — créez, modifiez, testez et
  gérez les invites de transformation.
translation_last_updated: '2026-07-17T14:58:56.004Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 07b5d140803063510c7c9fecf67a2f99e3aab3040116733a3126939b0c82e16e
translation_language: fr
source_file_path: src/content/docs/docs/transform.md
translation_models:
  - google/gemini-2.5-flash
---



Utilisez **Transformer** lorsque vous souhaitez que l'IA suive des instructions personnalisées — résumer, peaufiner un e-mail, extraire les points clés, reformater du texte ou tout autre flux de travail que vous définissez.

![Espace de travail Transformer](/images/screenshots/fr/transform.png)

## Exécuter une invite existante

1. Ouvrez **Transformer**.
2. Choisissez une invite dans la liste.
3. Si une boîte de langue **De** apparaît, définissez une langue si vous le souhaitez.
4. Tapez ou collez du texte dans **Entrée**.
5. Cliquez sur **Transformer**.
6. Lisez le résultat dans **Sortie**.

## Charger des exemples d'invites

Si la liste est vide, cliquez sur **Charger des exemples d'invites** dans l'espace de travail Transformer (également disponible sous [Paramètres → Transformer](/docs/settings/#transform)). Les exemples sont en anglais ; après le chargement, modifiez une invite et utilisez **Traduire l'invite** si nécessaire.

## Créer une invite

1. Cliquez sur **Nouvelle invite**.
2. Cliquez sur **Générer l'invite**.
3. Décrivez ce que vous voulez que l'invite fasse.
4. Choisissez un préréglage (Facile) ou un modèle (Avancé).
5. Examinez le brouillon et cliquez sur **Enregistrer**.

## Modifier une invite

L'éditeur est à gauche ; une zone de test est à droite.

![Éditeur d'invites de transformation](/images/screenshots/fr/transform-prompt-edit.png)

Champs principaux :

- **Nom de l'invite** — affiché dans la liste des invites
- **Instructions de l'invite (facultatif)** — brève indication lors de l'exécution de l'invite
- **Rôle du modèle** — rôle global de l'IA
- **Instructions du modèle (une par ligne)** — règles à suivre
- **Description de la sortie** — courte étiquette pour le résultat (par exemple, résumé)
- **Température (0.0 → 1.0)** — plus elle est basse, plus c'est stable ; plus elle est haute, plus c'est varié
- **Demander la langue cible** — ajoute un sélecteur de langue lors de l'exécution

Aides : **Générer l'invite**, **Améliorer l'invite**, **Traduire l'invite** (Facile utilise des préréglages ; Avancé utilise la liste des modèles).

:::caution
Cliquez sur **Enregistrer** avant de cliquer sur **Retour à l'exécution**. Revenir en arrière sans enregistrer annule les modifications.
:::

## Tester avant l'utilisation quotidienne

Utilisez le panneau de test de droite avec un exemple de texte lors de la création ou de la comparaison d'invites.

Exportez et importez des invites en masse sous [Paramètres → Transformer](/docs/settings/#transform).

## Prochaines étapes

- [Paramètres](/docs/settings/)
- [Historique de navigation](/docs/history/)
- [Problèmes courants](/docs/common-issues/)
