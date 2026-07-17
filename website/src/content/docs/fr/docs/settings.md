---
title: Paramètres
description: >-
  Référence compacte pour Général, Modèles, Langues, Glossaire, Coût,
  Transformer, Utilisateurs, API et À propos.
translation_last_updated: '2026-07-17T21:14:43.346Z'
source_file_mtime: '2026-07-17T14:37:21.849Z'
source_file_hash: 492e5fd37f4a6b282502282d4f2728047a0d09ae8c30334b3c8388a5ce6e9f68
translation_language: fr
source_file_path: src/content/docs/docs/settings.md
translation_models:
  - google/gemini-2.5-flash
---



Ouvrez les **Paramètres** depuis la barre latérale pour personnaliser le comportement de l'application.

| Onglet | Bureau | Web (administrateur) | Web (utilisateur) | Notes |
| --- | :---: | :---: | :---: | --- |
| Paramètres généraux | oui | oui | oui | Inclut l'**expérience IA** (Facile / Avancée) |
| Modèles | oui | oui | oui | Uniquement lorsque l'**expérience IA** est **Avancée** |
| Langues | oui | oui | oui | |
| Suivi des coûts | oui | oui | — | |
| Transformer | oui | oui | oui | Importation/exportation en masse des invites |
| Glossaire | oui | oui | oui | Paires de termes pour la traduction |
| Utilisateurs | — | oui | — | |
| Configuration API | oui | oui | — | |
| À propos | oui | oui | oui | |

En mode **Facile**, choisissez l'IA via les préréglages dans la barre d'outils et le **Fournisseur** dans les Paramètres généraux ; l'onglet **Modèles** est masqué.

:::note
Dans la version web, chaque utilisateur a sa propre configuration (expérience IA, fournisseur, modèles/préréglages, langues, options, invites). Les modifications n'affectent pas les autres utilisateurs.
:::

## Paramètres généraux

**Expérience IA**

- **Facile** (par défaut) : choisissez un **Fournisseur**. Les fournisseurs cloud utilisent des préréglages de barre d'outils (**Gratuit (OpenRouter)**, **Standard**, **Avancé**, **Technique**). **LLM local** répertorie les modèles locaux installés. **Actualiser le catalogue de préréglages** récupère la dernière liste de préréglages du référentiel du projet.
- **Avancé** : choisissez les modèles dans la barre d'outils ; gérez la liste sous [Modèles](#models).

**Apparence** — Thème ; **Afficher les informations de coût sur les actions** ; **Chiffres fractionnaires du coût** ; marge autour de l'application (web uniquement) ; **Famille de polices** et **Taille**.

**Comportement** — **Comportement pour ENTRÉE** ; **Exécution automatique au collage** ; **Copie automatique du résultat dans le presse-papiers** ; **Traduction en temps réel pendant la saisie** ; **Délai d'expiration (ms)**.

**Historique**

- **Conserver l'historique d'exécution** — stocke les entrées/sorties pour la vue [Historique](/docs/history/). La désactivation demande une confirmation et peut supprimer le texte stocké. Si l'option est *désactivée par l'administrateur*, `HISTORY_DISABLED` est défini — voir [Configuration](/docs/configuration/#privacy-mode).
- **Supprimer les données d'historique** — supprime le texte stocké par ancienneté ou efface tout. Ne supprime **pas** les totaux de coûts (utilisez le Suivi des coûts pour cela).

**Sauvegarde de la configuration** (administrateurs de bureau et web)

- Optionnel **Inclure les données d'utilisation dans la sauvegarde**
- **Sauvegarder la configuration** — ZIP avec la configuration, l'état, les utilisateurs, les préférences, les invites et les données d'utilisation optionnelles
- **Restaurer à partir de la sauvegarde** — boîte de dialogue de confirmation avec des options pour restaurer et/ou effacer les données d'utilisation

Les sauvegardes peuvent être déplacées entre le bureau et le web ; la restauration d'une sauvegarde de bureau sur le web applique les données à l'utilisateur administrateur.

## Modèles

Disponible uniquement en mode **Avancé**.

![Onglet Modèles des paramètres](/images/screenshots/fr/settings-general.png)

- **Modèles disponibles** (à gauche) et **Modèles sélectionnés** (à droite)
- Recherche, puces **Fournisseur**, **Gratuit uniquement**, **Actualiser**, Développer/Réduire tout
- Les identifiants de modèle utilisent un préfixe de fournisseur (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
N'utilisez pas OpenRouter **Body Builder** (`openrouter/bodybuilder`) pour Traduire, Réécrire ou Transformer — il renvoie des charges utiles de requête JSON, pas du texte fini.
:::

Ajouter avec **Ajouter** ; supprimer avec **X**. **Désélectionner tout** conserve le modèle gratuit requis.

## Langues

- **Langues principales** — épinglées près du haut des listes de langues dans Traduire et Transformer
- **Langue personnalisée** — ajoute une langue manquante dans la liste intégrée

## Suivi des coûts

- **Coût total**, **Copier la valeur**, **Réinitialiser le coût**
- **Synchroniser avec l'utilisation de la clé API** — s'aligner sur l'utilisation du compte OpenRouter (OpenRouter uniquement)
- **Utilisation de la clé API** — détails OpenRouter si disponibles
- **Supprimer les données de coût** — toutes les données ou les entrées antérieures à une date

OpenRouter affiche le coût réel facturé le cas échéant ; les autres fournisseurs utilisent des estimations basées sur les tarifs OpenRouter. Les estimations ne sont pas des factures.

:::caution
La suppression des données de coût est irréversible. Exportez d'abord via Historique ou Tableau de bord → Tous les appels si vous avez besoin d'une sauvegarde. L'historique d'entrée/sortie lié à ces appels API est également supprimé.
:::

## Transformer

Gérez les invites en masse : examinez, supprimez, importez, exportez et chargez des exemples d'invites.

## Glossaire

Gérez les paires de termes appliquées lors de la [traduction](/docs/translate/#use-the-glossary). Chaque terme a une langue source/cible et un texte source/cible.

- Ajouter via la rangée du bas et **+**
- Filtrer par langues ou texte
- Importer/exporter CSV ou XLSX ; télécharger des modèles vides

Le bureau stocke le glossaire localement ; le web le stocke par utilisateur.

## Utilisateurs

Web uniquement (administrateurs) : ajouter des utilisateurs, mettre à jour les détails, réinitialiser les mots de passe, supprimer des comptes.

## Configuration de l'API

Configurez uniquement les fournisseurs que vous utilisez : OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **LLM local** (URL de base pour Ollama, LM Studio, llama.cpp, ou similaire), et un fournisseur compatible OpenAI personnalisé facultatif.

**Web (administrateur) :** les clés proviennent des variables d'environnement — cette page indique celles qui sont définies et vous permet de les **Tester**. Redémarrez après avoir modifié les variables d'environnement. Voir [Configuration](/docs/configuration/).

**Bureau :** saisissez les clés (ou l'URL du LLM local) et **Enregistrer** / **Modifier** / **Tester**. Les clés sont stockées chiffrées ; vous ne pouvez pas afficher la valeur actuelle, seulement la remplacer.

:::tip
Aucune clé payante n'est nécessaire pour commencer : utilisez les modèles OpenRouter gratuits, d'autres fournisseurs de niveau gratuit, ou un serveur local compatible OpenAI tel que [Ollama](https://ollama.com), LM Studio, ou llama.cpp (par exemple `translategemma:4b`).
:::

## À propos

Nom de l'application, version, date de compilation, licence, avis de tiers et lien vers le dépôt.
