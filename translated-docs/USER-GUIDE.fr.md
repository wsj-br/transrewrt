---
translated_at: "2026-03-15T22:12:16.747Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Guide de l'utilisateur Transrewrt

<br />

<a id="introduction"></a>
## Introduction

Transrewrt vous aide à travailler avec le texte de trois manières principales :

- **Traduire** – convertit le texte d'une langue à une autre.
- **Réécrire** – reformule le texte dans un style différent, comme plus clair, plus court ou plus formel.
- **Transformer** – traite le texte à l'aide d'instructions IA personnalisées appelées invites.

<br />

Ce guide explique comment utiliser l'application une fois qu'elle est installée et en cours d'exécution. Pour les étapes d'installation, consultez le [README](../README.md) principal.

<br />

> ℹ️ **NOTE**<br/>
> Transrewrt est disponible en tant qu'application de bureau pour Windows et Linux, et en tant qu'application web auto-hébergée. Ce guide porte sur l'utilisation quotidienne de l'application. Lorsque quelque chose ne s'applique qu'à une version, cela est clairement indiqué.

<small>**Lire dans d'autres langues :** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table des matières** 

- [Avant de commencer](#avant-de-commencer)
  - [Comment obtenir une clé API (application de bureau)](#comment-obtenir-une-clé-api-application-de-bureau)
- [Premiers pas](#premiers-pas)
- [Parties principales de la fenêtre](#parties-principales-de-la-fenêtre)
  - [Barre latérale](#barre-latérale)
  - [Barre d'outils](#barre-d-outils)
  - [Panneaux d'entrée et de sortie](#panneaux-d-entrée-et-de-sortie)
- [Traduire](#traduire)
  - [Traduire du texte](#traduire-du-texte)
  - [Sélection de la langue](#sélection-de-la-langue)
  - [Paramètres de traduction utiles](#paramètres-de-traduction-utiles)
  - [Raccourcis clavier](#raccourcis-clavier)
- [Réécrire](#réécrire)
  - [Réécrire du texte](#réécrire-du-texte)
- [Transformer](#transformer)
  - [Exécuter une invite existante](#exécuter-une-invite-existante)
  - [Si vous n'avez pas encore d'invites](#si-vous-n-avez-pas-encore-d-invites)
  - [Créer une invite rapidement](#créer-une-invite-rapidement)
  - [Modifier une invite](#modifier-une-invite)
  - [Tester une invite avant de l'utiliser](#tester-une-invite-avant-de-l-utiliser)
  - [Gérer les invites sauvegardées](#gérer-les-invites-sauvegardées)
- [Tableau de bord](#tableau-de-bord)
  - [Filtrer les données](#filtrer-les-données)
  - [Onglets du tableau de bord](#onglets-du-tableau-de-bord)
  - [Exporter les données](#exporter-les-données)
  - [Supprimer les enregistrements stockés pour un modèle](#supprimer-les-enregistrements-stockés-pour-un-modèle)
- [Paramètres](#paramètres)
  - [Paramètres généraux](#paramètres-généraux)
  - [Modèles](#modèles)
  - [Langues](#langues)
  - [Suivi des coûts](#suivi-des-coûts)
  - [Invites de transformation](#invites-de-transformation)
  - [Utilisateurs](#utilisateurs)
  - [Configuration de l'API](#configuration-de-l-api)
  - [À propos](#à-propos)
- [Problèmes courants](#problèmes-courants)
  - [L'application ne traduit, ne réécrit ou ne transforme pas le texte](#l-application-ne-traduit-ne-réécrit-ou-ne-transforme-pas-le-texte)
  - [La liste des modèles est vide](#la-liste-des-modèles-est-vide)
  - [Le résultat est trop lent ou trop coûteux](#le-résultat-est-trop-lent-ou-trop-coûteux)
  - [L'interface est dans la mauvaise langue](#l-interface-est-dans-la-mauvaise-langue)
  - [Le texte est trop petit ou difficile à lire](#le-texte-est-trop-petit-ou-difficile-à-lire)
  - [J'ai modifié une invite et perdu les modifications](#j-ai-modifié-une-invite-et-perdu-les-modifications)
- [Conseils rapides](#conseils-rapides)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="avant-de-commencer"></a>

## Avant de commencer

Pour utiliser Transrewrt, vous avez besoin d'un accès au service d'IA via OpenRouter.

Vous n'avez pas besoin de choisir un modèle payant avant de commencer. L'application inclut toujours un **modèle gratuit** intégré, donc pour une utilisation normale, cela suffit pour commencer à traduire, réécrire et transformer du texte.

En termes simples :

- Un **modèle** est le moteur d'IA qui effectue le travail.
- Une **clé d'API** est votre identifiant d'accès personnel pour ce service.

Si vous utilisez l'**application de bureau**, vous aurez besoin d'une clé d'API. Pour des étapes détaillées, voir [Comment obtenir une clé d'API](#how-to-get-an-api-key-desktop-app) ci-dessous. En bref : créez un compte sur [OpenRouter](https://openrouter.ai), ouvrez la page [Keys](https://openrouter.ai/keys), créez une nouvelle clé, et collez-la dans [**Paramètres** > **Configuration API**](#api-config) dans Transrewrt.

Si vous utilisez la **version web**, le propriétaire du serveur configure généralement cela pour vous, donc vous n'aurez normalement pas à entrer une clé d'API vous-même.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Comment obtenir une clé d'API (application de bureau)

Si vous utilisez l'application de bureau, suivez ces étapes :

1. Allez sur [OpenRouter](https://openrouter.ai) dans votre navigateur web.
2. Créez un compte ou connectez-vous.
3. Ouvrez la page [Keys](https://openrouter.ai/keys).
4. Cliquez sur le bouton pour créer une nouvelle clé d'API.
5. Donnez un nom à la clé pour la reconnaître plus tard.
6. Copiez la nouvelle clé d'API.
7. Retournez à Transrewrt et ouvrez **Paramètres** > **Configuration API**.
8. Collez la clé dans **Clé d'API OpenRouter**.
9. Cliquez sur **Tester la configuration API** pour vous assurer qu'elle fonctionne.

> ℹ️ **NOTE**<br/>
> Vous pouvez commencer avec l'offre gratuite d'OpenRouter ou n'importe quel autre modèle gratuit disponible. Dans de nombreux cas, cela suffit pour commencer à utiliser Transrewrt sans choisir de modèle payant.

<br /><br />

<a id="getting-started"></a>
## Prise en main

Si c'est votre première fois avec Transrewrt, suivez cet ordre :

1. Ouvrez l'application.
2. Choisissez votre **langue d'interface** depuis l'icône du globe si nécessaire.
3. Si vous êtes sur l'**application de bureau**, ouvrez [**Paramètres** > **Configuration API**](#api-config), collez votre clé d'API OpenRouter, et cliquez sur **Tester la configuration API**.
4. Ouvrez [**Paramètres** > **Modèles**](#models) et ajoutez un ou plusieurs modèles aux **Modèles sélectionnés**.
5. Ouvrez [**Paramètres** > **Langues**](#languages) et choisissez vos **Langues principales** si vous souhaitez que vos langues les plus utilisées apparaissent en premier.
6. Allez dans **Traduire** et effectuez une traduction simple pour confirmer que tout fonctionne.
7. Une fois que cela fonctionne, essayez **Réécrire** puis **Transformer**.

Cet ordre est important. Il évite le problème le plus courant lors de la première utilisation : essayer d'exécuter une tâche avant que l'application n'ait une connexion API fonctionnelle ou un modèle sélectionné.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Composants principaux de la fenêtre

L'application est divisée en trois zones principales :

- La **barre latérale** sur la gauche.
- La **barre d'outils** en haut.
- La **zone de travail** au centre.

<br />

<a id="sidebar"></a>
### Barre latérale

Utilisez la barre latérale pour naviguer dans l'application :

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/fr/sidebar.png" alt="Barre latérale de l'application" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Traduire</strong> ouvre l'espace de travail de traduction.</li>
        <li><strong>Réécrire</strong> ouvre l'espace de travail de réécriture.</li>
        <li><strong>Transformer</strong> ouvre l'espace de travail d'invite personnalisée.</li>
        <li><strong>Tableau de bord</strong> affiche les informations d'utilisation et de coût.</li>
        <li><strong>Paramètres</strong> ouvre le panneau de configuration.</li>
        <li><strong>Utilisateur</strong> affiche le nom d'utilisateur de l'utilisateur connecté (web uniquement).</li>
      </ul>
      <br />
      <p>Vous pouvez également réduire la barre latérale pour gagner de l'espace en cliquant sur l'icône à côté du logo de l'application.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Barre d'outils

La barre d'outils change légèrement selon l'endroit où vous vous trouvez dans l'application.

- À gauche, elle affiche le nom de la page actuelle.
- À droite, elle affiche le **sélecteur de modèle** et le contrôle de **langue de l'interface**.

Le **sélecteur de modèle** vous permet de choisir quel moteur d'IA utiliser pour la tâche actuelle.

  ![Sélecteur de modèle](../images/screenshots/fr/model-selector.png)

> ℹ️ **NOTE**<br/>
> Certains modèles gratuits peuvent cesser de fonctionner temporairement s'ils ne sont pas disponibles ou ont atteint une limite d'utilisation. Si cela se produit, l'application supprimera automatiquement ce modèle de votre liste.


L'**icône globe + code langue** change la langue de l'interface de l'application, comme les menus et les boutons. Cela **ne change pas** les langues de traduction utilisées dans **Traduire**.

  ![Sélecteur de langue de l'interface](../images/screenshots/fr/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Panneaux d'entrée et de sortie

La plupart des espaces de travail utilisent un panneau **Entrée** à gauche et un panneau **Sortie** à droite.

Le panneau **Entrée** affiche :

- Compte de caractères
- Compte de mots
- Compte de paragraphes

Le panneau **Sortie** peut afficher :

- Durée de la tâche
- Coût de cette tâche
- Votre coût total cumulé
- **TPS** (tokens par seconde), qui est une mesure de vitesse simple
- Comptes de caractères, mots et paragraphes
- Le modèle utilisé

Si vous vous demandez ce que signifient les termes techniques :

- **Token** désigne un petit morceau de texte. Vous pouvez le considérer comme une partie d'un mot ou un mot court.
- **TPS** indique combien de ces morceaux de texte le modèle a traités chaque seconde.

<br /><br />

<a id="translate"></a>
## Traduction

Utilisez **Traduction** lorsque vous souhaitez convertir du texte d'une langue à une autre.

![Espace de travail Traduction](../images/screenshots/fr/translate.png)

<br />

<a id="translate-text"></a>
### Traduire du texte

1. Ouvrez **Traduction**.
2. Choisissez une langue dans **De**.
3. Choisissez une langue dans **Vers**.
4. Choisissez un modèle dans la barre d'outils.
5. Tapez ou collez du texte dans **Entrée**.
6. Cliquez sur **Traduction**.
7. Lisez le résultat dans **Sortie**.
8. Utilisez le bouton de copie si vous voulez copier le résultat.

<br />

<a id="language-selection"></a>
### Sélection de la langue

- **De** peut être une langue spécifique ou **Détecter la langue**.
- **Vers** est la langue dans laquelle vous voulez le résultat.

Vos **Langues préférées** apparaissent en haut de la liste. Vous pouvez les configurer dans [**Paramètres** > **Langues**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Paramètres de traduction utiles

Dans [**Paramètres** > **Paramètres généraux**](#general-settings), vous pouvez changer le comportement de la traduction :

- **Traduction automatique au collage** lance une traduction dès que vous collez du texte.
- **Copie automatique du résultat dans le presse-papiers** copie automatiquement le résultat après une exécution réussie.
- **Traduction en temps réel (pendant la frappe)** exécute des traductions pendant que vous tapez.
- **Délai d'attente (ms)** contrôle le temps d'attente de l'application avant d'exécuter une traduction en temps réel.

<br />

<a id="keyboard-shortcuts"></a>
### Raccourcis clavier

Dans [**Paramètres** > **Paramètres généraux**](#general-settings), **Comportement de la touche Entrée** contrôle ce qui se passe lorsque vous appuyez sur Entrée :

- **Entrée** peut exécuter la tâche et **Maj+Entrée** peut ajouter une nouvelle ligne.
- Ou l'application peut faire l'inverse.

Le raccourci actuel est également affiché sur le bouton **Traduction**.

<br /><br />

<a id="rewrite"></a>
## Réécriture

Utilisez **Réécriture** lorsque vous souhaitez améliorer la formulation sans changer le sens principal.

![Espace de travail Réécriture](../images/screenshots/fr/rewrite.png)

Cela est utile pour :

- corriger l'orthographe et la grammaire
- rendre le texte plus clair
- rendre le texte plus formel ou plus informel
- raccourcir ou développer le texte
- rendre le texte plus technique

<br />

<a id="rewrite-text"></a>
### Réécrire du texte

1. Ouvrez **Réécriture**.
2. Choisissez un **Mode**.
3. Choisissez un modèle dans la barre d'outils.
4. Tapez ou collez du texte dans **Entrée**.
5. Cliquez sur **Réécriture**.
6. Vérifiez le résultat dans **Sortie**.

Le même comportement de la touche Entrée décrit dans [**Traduction**](#keyboard-shortcuts) s'applique ici.

<br /><br />

<a id="transform"></a>
## Transformation

Utilisez **Transformation** lorsque vous souhaitez que l'IA suive un ensemble d'instructions personnalisé.

![Espace de travail Transformation](../images/screenshots/fr/transform.png)

C'est la zone la plus flexible de l'application. Vous pouvez l'utiliser pour des tâches telles que :

- résumer des notes
- transformer un texte brut en un email poli
- extraire les points clés
- convertir le texte dans un format spécifique

<br />

<a id="run-an-existing-prompt"></a>
### Exécuter un prompt existant

1. Ouvrez **Transformation**.
2. Choisissez un prompt dans la liste des prompts.
3. Si une boîte de langue **Cible** apparaît, choisissez une langue si vous le souhaitez.
4. Tapez ou collez du texte dans **Entrée**.
5. Cliquez sur **Transformation**.
6. Lisez le résultat dans **Sortie**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Si vous n'avez pas encore de prompts

Si votre liste de prompts est vide, cliquez sur **Charger des exemples de prompts**. Cela ajoute des exemples intégrés pour que vous puissiez commencer rapidement.

> ℹ️ **REMARQUE**<br/>
> Les exemples de prompts sont fournis en anglais. Après les avoir chargés, vous pouvez modifier un prompt et utiliser **Traduction du prompt** si vous souhaitez adapter le texte du prompt pour une autre langue.

<br />

<a id="create-a-prompt-quickly"></a>

### Créer un prompt rapidement

La méthode la plus rapide pour créer un prompt est :

1. Cliquez sur **Nouveau prompt**.
2. Cliquez sur **Générer un prompt**.
3. Décrivez ce que vous voulez que le prompt fasse.
4. Choisissez un modèle.
5. Laissez l'application créer un brouillon pour vous.
6. Vérifiez le brouillon et cliquez sur **Enregistrer**.

![Générer un prompt](../images/screenshots/fr/transform-generate.png)


<br />

### Modifier un prompt

Lorsque vous créez ou modifiez un prompt, l'éditeur apparaît à gauche et une zone de test à droite.

![Éditeur de prompt de transformation](../images/screenshots/fr/transform-prompt-edit.png)

Les champs principaux sont :

- **Nom du prompt** : le nom affiché dans la liste des prompts.
- **Instructions du prompt (facultatif)** : un court indice affiché à l'utilisateur lors de l'exécution du prompt.
- **Rôle du modèle** : le rôle général assigné à l'IA, par exemple « Vous êtes un assistant utile. »
- **Instructions du modèle (une par ligne)** : les règles spécifiques que vous voulez que l'IA suive.
- **Description de la sortie** : un mot court décrivant le résultat, comme « résumé » ou « réécriture ».
- **Température (0.0 → 1.0)** : un curseur de créativité.
- **Demander la langue cible** : ajoute un sélecteur de langue cible lors de l'exécution du prompt.

Si le terme technique **Température** vous est nouveau, imaginez ceci :

- Une **température plus basse** donne des résultats plus stables et prévisibles.
- Une **température plus élevée** donne plus de variété et de créativité.

Vous pouvez également utiliser :

- **`Generate prompt`** pour créer un nouveau brouillon à partir d'une description simple
- **`Improve prompt`** pour affiner un prompt existant
- **`Translate prompt`** pour traduire les champs du prompt

> ⚠️ **AVERTISSEMENT**<br/>
> Cliquez sur **`Enregistrer`** avant de cliquer sur **`Retour à l'exécution`**. Si vous revenez sans enregistrer, vos modifications seront perdues.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Tester un prompt avant de l'utiliser

Le panneau de test à droite vous permet d'essayer votre prompt avec un texte d'exemple avant de l'utiliser dans votre travail quotidien.

Cela est utile lorsque :

- vous créez un nouveau prompt
- vous comparez deux versions d'un prompt
- vous souhaitez vérifier le ton, la longueur ou le format de sortie

<br />

<a id="manage-saved-prompts"></a>
### Gérer les prompts enregistrés

Pour gérer les prompts enregistrés à un seul endroit, ouvrez [**Paramètres** > **Prompts de transformation**](#transform-prompts).

Vous y pouvez :

- lister et supprimer vos prompts
- exporter les prompts au format **JSON**, **CSV** ou **XLSX**
- importer des prompts depuis un fichier

<br /><br />

## Tableau de bord

Utilisez le **Tableau de bord** pour voir votre utilisation de l'application et son coût.

![Résumé du tableau de bord](../images/screenshots/fr/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Filtrer les données

Utilisez les boutons de filtre en haut pour changer la plage de temps.

![Filtres du tableau de bord](../images/screenshots/fr/dashboard-filter.png)

> ℹ️ **NOTE**<br/>
> Dans la version web, les administrateurs peuvent également voir un filtre **Utilisateur**. Cela leur permet de basculer entre **Tous les utilisateurs** et un utilisateur individuel.

<br />

<a id="dashboard-tabs"></a>
### Onglets du tableau de bord

- **Résumé** vous donne un aperçu de l'utilisation et du coût.
- **Par utilisation** décompose l'activité par langue de traduction, mode de réécriture et prompt de transformation.
- **Par modèle** montre quels modèles vous avez utilisés et leur coût.
- **Par jour** affiche les totaux quotidiens.
- **Tous les appels** affiche l'historique complet des appels et permet de l'exporter.

<br />

<a id="export-data"></a>
### Exporter les données

Les tableaux du tableau de bord peuvent exporter les données au format :

- **JSON**
- **CSV**
- **XLSX**

Cela est utile si vous souhaitez examiner l'activité en dehors de l'application ou partager un rapport.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Supprimer les enregistrements stockés pour un modèle

Dans **Par modèle** ou **Tous les appels**, vous pouvez supprimer les enregistrements stockés pour un modèle.

> ⚠️ **AVERTISSEMENT**<br/>
> La suppression des enregistrements stockés ne peut pas être annulée. Utilisez cette fonction seulement si vous êtes certain de ne plus avoir besoin de cet historique.

Pour supprimer toutes les données ou supprimer des enregistrements en fonction de leur ancienneté, allez dans [**Paramètres** > **Suivi des coûts**](#cost-tracking). Vous y trouverez des options pour supprimer toutes les données stockées ou seulement les données antérieures à une certaine date.

<br /><br />

<a id="settings"></a>
## Paramètres

Ouvrez **Paramètres** depuis la barre latérale pour personnaliser le comportement de l'application.

Les onglets disponibles peuvent varier :

- **Configuration de l'API** n'est disponible que dans l'application de bureau.
- **Utilisateurs** n'est disponible que dans l'application web, et uniquement pour les administrateurs.

<br />

<a id="general-settings"></a>

### Paramètres généraux

Utilisez **Paramètres généraux** pour contrôler le comportement de frappe et l'apparence.

**Comportement**

- **Comportement pour ENTRÉE** choisit si Entrée exécute la tâche ou insère une nouvelle ligne.
- **Traduction automatique au collage** démarre la traduction dès que vous collez du texte.
- **Copie automatique du résultat dans le presse-papiers** copie automatiquement les résultats réussis.
- **Traduction en temps réel (pendant la frappe)** traduit pendant que vous tapez.
- **Délai (ms)** définit le temps d'attente pour la traduction en temps réel.

**Apparence**

- **Chiffres des fractions de coût** change la façon dont les décimales de coût sont affichées.
- **Famille de polices** change la police d'écriture dans les panneaux de texte.
- **Taille** change la taille de la police.
- **Web uniquement :** **afficher une marge autour de l'application** ajoute un espace supplémentaire autour de l'interface.

<br />

<a id="models"></a>
### Modèles

Utilisez **Paramètres** > **Modèles** pour choisir les modèles qui apparaissent dans la barre d'outils.

![Onglet Modèles des paramètres](../images/screenshots/fr/settings-models.png)

La page a deux listes :

- **Modèles disponibles** à gauche
- **Modèles sélectionnés** à droite

Les contrôles utiles incluent :

- **Rechercher un modèle...** pour trouver un modèle par son nom
- **Gratuits uniquement** pour afficher uniquement les modèles gratuits
- **Actualiser** pour recharger la liste
- **Tout développer** et **Tout réduire** lorsque vous triez par fournisseur

Pour ajouter un modèle, cliquez sur **Ajouter**.

Pour supprimer un modèle, cliquez sur **X** à côté de celui-ci dans **Modèles sélectionnés**.

Pour effacer la liste, cliquez sur **Tout désélectionner**. Le modèle gratuit requis restera dans la liste.

> ℹ️ **REMARQUE**<br/>
> Si vous ne souhaitez pas ajouter de crédits à OpenRouter immédiatement, commencez par activer **Gratuits uniquement** et choisissez les modèles gratuits.

<br />

<a id="languages"></a>
### Langues

Utilisez **Paramètres** > **Langues** pour organiser les listes de langues utilisées dans l'application.

- **Langues principales** sont épinglées en haut des listes de langues dans **Traduire** et **Transformer**.
- **Langue personnalisée** vous permet d'ajouter une langue qui n'est pas dans la liste intégrée.

Si vous ajoutez une langue personnalisée, elle apparaît dans les sélecteurs de langue aux côtés des options intégrées.

<br />

<a id="cost-tracking"></a>
### Suivi des coûts

Utilisez **Paramètres** > **Suivi des coûts** pour gérer les informations de coût.

- **Coût total** affiche le total cumulé.
- **Copier la valeur** copie le total dans le presse-papiers.
- **Réinitialiser le coût** remet le total stocké à zéro.
- **Synchroniser avec l'utilisation de la clé API** définit le total pour correspondre à l'utilisation signalée par OpenRouter.
- **Utilisation de la clé API** affiche les détails d'utilisation, si disponibles.
- **Supprimer les données de coût** supprime toutes les données, ou uniquement les entrées antérieures à une date sélectionnée.

> ⚠️ **AVERTISSEMENT**<br/>
> La suppression des données est irréversible. Avant de supprimer, assurez-vous de sauvegarder vos données ou de les exporter via [**Tableau de bord** > **Tous les appels**](#dashboard-tabs), sinon elles seront définitivement perdues.

<br />

<a id="transform-prompts"></a>
### Invites de transformation

Utilisez **Paramètres** > **Invites de transformation** pour gérer les invites en masse.

Vous pouvez :

- passer en revue vos invites sauvegardées
- supprimer des invites
- importer des invites depuis un fichier
- exporter des invites pour sauvegarde ou partage

<br />

<a id="users"></a>
### Utilisateurs

**Web uniquement - administrateur uniquement**

Utilisez **Utilisateurs** pour gérer les comptes utilisateurs dans la version web. Vous pouvez ajouter des utilisateurs, mettre à jour leurs détails, réinitialiser les mots de passe et supprimer des comptes.

<br />

<a id="api-config"></a>
### Configuration de l'API

**Bureau uniquement**

Utilisez **Configuration de l'API** pour connecter l'application de bureau à OpenRouter ou à un proxy Transrewrt.

- **Clé API OpenRouter** est où vous collez votre clé.
- **URL de l'API** est l'adresse du service. Laissez-la par défaut sauf si une différente vous a été fournie.
- **Utiliser le proxy Transrewrt** achemine les requêtes via un service proxy au lieu de directement vers OpenRouter.
- **Graine de clé** apparaît lorsque l'option proxy est activée.
- **Tester la configuration de l'API** vérifie si la configuration actuelle fonctionne.

Pour des étapes détaillées sur l'obtention de votre clé API, consultez [Comment obtenir une clé API](#how-to-get-an-api-key-desktop-app) ci-dessus.

> ℹ️ **REMARQUE**<br/>
> Si vous n'êtes pas sûr de ce que signifient **URL de l'API**, **Utiliser le proxy Transrewrt** ou **Graine de clé**, laissez-les inchangés et utilisez la configuration OpenRouter par défaut. Plus d'informations sur le proxy sont disponibles dans le [dépôt du proxy Transrewrt](https://github.com/wsj-br/transrewrt-proxy).


<br />

<a id="about"></a>

### À propos

L'onglet **À propos** affiche :

- le nom de l'application
- le numéro de version
- la date de compilation
- un lien vers le dépôt du projet

<br /><br />

<a id="common-issues"></a>
## Problèmes courants

Si quelque chose ne fonctionne pas comme prévu, vérifiez d'abord les points suivants.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### L'application ne traduit, réécrit ou transforme pas le texte

Vérifiez que :

- vous avez sélectionné un modèle dans la barre d'outils
- au moins un modèle est listé dans [**Paramètres** > **Modèles**](#models)
- votre configuration API fonctionne

Si vous utilisez l'application de bureau :

1. Ouvrez [**Paramètres** > **Configuration API**](#api-config).
2. Vérifiez que votre clé API est enregistrée.
3. Cliquez sur **Tester la configuration API**.

<br />

<a id="the-model-list-is-empty"></a>
### La liste des modèles est vide

Ouvrez [**Paramètres** > **Modèles**](#models) et cliquez sur **Actualiser**.

Si nécessaire :

- recherchez un modèle
- activez **Uniquement gratuits**
- ajoutez un ou plusieurs modèles à **Modèles sélectionnés**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Le résultat est trop lent ou trop coûteux

Essayez une ou plusieurs de ces solutions :

- choisissez un modèle différent
- utilisez une entrée plus courte
- désactivez **Traduction en temps réel (pendant la saisie)** dans [**Paramètres** > **Paramètres généraux**](#general-settings)
- utilisez des modèles gratuits pour des tâches simples (voir [Modèles](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### L'interface est dans la mauvaise langue

Cliquez sur l'icône du globe dans la [barre d'outils](#toolbar) et choisissez votre **Langue de l'interface** préférée.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Le texte est trop petit ou difficile à lire

Ouvrez [**Paramètres** > **Paramètres généraux**](#general-settings) et modifiez :

- **Famille de polices**
- **Taille**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### J'ai modifié une invite et perdu les modifications

Lors de la modification d'une invite, cliquez toujours sur **Enregistrer** avant de cliquer sur **Retour à l'exécution**.

<br /><br />

<a id="quick-tips"></a>
## Conseils rapides

- Commencez par **[Traduction](#translate)** pour vérifier que votre configuration fonctionne avant de passer à **[Réécriture](#rewrite)** ou **[Transformation](#transform)**.
- Utilisez **[Réécriture](#rewrite)** pour les améliorations de formulation quotidiennes.
- Utilisez **[Transformation](#transform)** lorsque vous avez besoin d'un flux de travail reproductible pour une tâche spécifique.
- Utilisez **[Tableau de bord](#dashboard)** si vous voulez surveiller l'utilisation et les coûts.
- Exportez régulièrement les invites si vous construisez une bibliothèque d'invites que vous voulez préserver (voir **[Invites de transformation](#transform-prompts)**).

<br /><br />

<a id="disclaimer"></a>
## Avertissement

Les noms de produits et les icônes appartiennent à leurs propriétaires respectifs et sont utilisés uniquement à des fins d'identification. Ce logiciel n'est pas affilié aux marques mentionnées et n'est pas approuvé par elles.

<br /><br />

<a id="license"></a>
## Licence

Copyright © 2026 Waldemar Scudeller Jr.

[Licence Apache 2.0](LICENSE)