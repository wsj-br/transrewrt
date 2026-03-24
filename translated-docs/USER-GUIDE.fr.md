---
translated_at: "2026-03-24T01:37:15.930Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Bannière Transrewrt](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Guide de l'utilisateur

<br/>

<a id="introduction"></a>
## Introduction

Transrewrt vous aide à travailler avec le texte de trois façons principales :

- **Traduire** : convertir un texte d'une langue vers une autre.
- **Réécrire** : reformuler un texte dans un style différent (plus clair, plus concis ou plus formel, par exemple).
- **Transformer** : traiter du texte à l'aide d'instructions personnalisées basées sur l'IA, appelées « prompts ».

<br/>

Ce guide explique comment utiliser l'application une fois installée et lancée. Pour les étapes d'installation, veuillez consulter le fichier **[README](README.fr.md)** principal.

<br/>

> ℹ️ **REMARQUE**<br/>
> Transrewrt est disponible en tant qu'application de bureau pour Windows et Linux, ainsi qu'en application web auto-hébergée. Ce guide se concentre sur l'utilisation courante de l'application. Lorsqu'une fonctionnalité concerne exclusivement une version, cela est clairement indiqué.

<small>**Lire dans d'autres langues :** [English (UK)](USER-GUIDE.fr.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table des matières**

- [Avant de commencer](#avant-de-commencer)
  - [Comment obtenir une clé API OpenRouter gratuite (application de bureau)](#comment-obtenir-une-clé-api-openrouter-gratuite-application-de-bureau)
- [Premiers pas](#premiers-pas)
- [Composants principaux de la fenêtre](#composants-principaux-de-la-fenêtre)
  - [Barre latérale](#barre-latérale)
  - [Barre d'outils](#barre-doutils)
  - [Panneaux d'entrée et de sortie](#panneaux-dentrée-et-de-sortie)
- [Traduire](#traduire)
  - [Traduire du texte](#traduire-du-texte)
  - [Sélection de la langue](#sélection-de-la-langue)
  - [Paramètres utiles pour la traduction](#paramètres-utiles-pour-la-traduction)
  - [Raccourcis clavier](#raccourcis-clavier)
- [Réécrire](#réécrire)
  - [Réécrire du texte](#réécrire-du-texte)
- [Transformer](#transformer)
  - [Exécuter un prompt existant](#exécuter-un-prompt-existant)
  - [Si vous n'avez pas encore de prompts](#si-vous-navez-pas-encore-de-prompts)
  - [Créer un prompt rapidement](#créer-un-prompt-rapidement)
  - [Modifier un prompt](#modifier-un-prompt)
  - [Tester un prompt avant utilisation](#tester-un-prompt-avant-utilisation)
  - [Gérer les prompts enregistrés](#gérer-les-prompts-enregistrés)
- [Tableau de bord](#tableau-de-bord)
  - [Filtrer les données](#filtrer-les-données)
  - [Onglets du tableau de bord](#onglets-du-tableau-de-bord)
  - [Exporter les données](#exporter-les-données)
  - [Supprimer les enregistrements stockés pour un modèle](#supprimer-les-enregistrements-stockés-pour-un-modèle)
- [Historique](#historique)
  - [Filtrer les données](#filtrer-les-données-1)
  - [Exporter les données de l'historique](#exporter-les-données-de-lhistorique)
- [Paramètres](#paramètres)
  - [Paramètres généraux](#paramètres-généraux)
  - [Modèles](#modèles)
  - [Langues](#langues)
  - [Suivi des coûts](#suivi-des-coûts)
  - [Prompts de transformation](#prompts-de-transformation)
  - [Utilisateurs](#utilisateurs)
  - [Configuration de l'API](#configuration-de-lapi)
  - [À propos](#à-propos)
- [Problèmes fréquents](#problèmes-fréquents)
  - [L'application ne traduit pas, ne réécrit pas ou ne transforme pas le texte](#lapplication-ne-traduit-pas-ne-réécrit-pas-ou-ne-transforme-pas-le-texte)
  - [La liste des modèles est vide](#la-liste-des-modèles-est-vide)
  - [Le résultat est trop lent ou trop coûteux](#le-résultat-est-trop-lent-ou-trop-coûteux)
  - [L'interface est dans une langue incorrecte](#linterface-est-dans-une-langue-incorrecte)
  - [Le texte est trop petit ou difficile à lire](#le-texte-est-trop-petit-ou-difficile-à-lire)
  - [Les graphiques du tableau de bord sont vides](#les-graphiques-du-tableau-de-bord-sont-vides)
  - [Le coût affiche « non disponible » ou semble incorrect](#le-coût-affiche-non-disponible-ou-semble-incorrect)
  - [Le coût total ne correspond pas à ma facture](#le-coût-total-ne-correspond-pas-à-ma-facture)
  - [La page Historique est absente de la barre latérale](#la-page-historique-est-absente-de-la-barre-latérale)
  - [Application web : redirection inattendue vers la page de connexion](#application-web-redirection-inattendue-vers-la-page-de-connexion)
  - [Le tableau de bord ne montre aucune donnée pour les autres utilisateurs (web)](#le-tableau-de-bord-ne-montre-aucune-donnée-pour-les-autres-utilisateurs-web)
  - [J'ai modifié un prompt et perdu mes modifications](#jai-modifié-un-prompt-et-perdu-mes-modifications)
- [Conseils rapides](#conseils-rapides)
- [Avertissement](#avertissement)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Avant de commencer

Pour utiliser Transrewrt, vous devez avoir accès à au moins un fournisseur d'IA. Les fournisseurs pris en charge sont : [OpenRouter](https://openrouter.ai) (qui regroupe de nombreux modèles), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, et [Ollama](https://ollama.com) pour les modèles locaux.

Vous n'avez pas besoin de choisir un modèle payant pour commencer. Dès que vous ajoutez votre clé API OpenRouter, l'application active automatiquement une option OpenRouter **gratuite** intégrée. Cela vous permet de commencer immédiatement à traduire, réécrire et transformer du texte.

En termes simples :

- Un **modèle** est le moteur d'IA qui effectue le travail. Les modèles sont listés avec un **préfixe de fournisseur** (par exemple `openrouter/…`, `openai/…`, `ollama/…`).
- Une **clé API** (ou, pour Ollama, une **URL de base**) est le moyen par lequel l'application contacte ce fournisseur.

Si vous utilisez l'**application de bureau**, ajoutez les clés dans [**Paramètres** > **Configuration API**](#api-config) pour chaque fournisseur que vous utilisez. Pour une utilisation uniquement avec OpenRouter, consultez ci-dessous [Comment obtenir une clé API](#how-to-get-an-api-key-desktop-app). Si vous ne souhaitez pas utiliser de clé API, vous pouvez installer Ollama (depuis [ollama.com](https://ollama.com)) et utiliser des modèles locaux à la place.

Si vous utilisez la **version web**, le propriétaire du serveur configure les fournisseurs via des variables d'environnement, vous n'avez donc normalement pas à entrer vous-même de clés API.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Comment obtenir une clé API OpenRouter gratuite (application de bureau)

Si vous utilisez l'application de bureau, suivez ces étapes :

1. Rendez-vous sur [OpenRouter](https://openrouter.ai) avec votre navigateur web.
2. Créez un compte ou connectez-vous.
3. Ouvrez la page [Clés](https://openrouter.ai/keys).
4. Cliquez sur le bouton pour créer une nouvelle clé API.
5. Donnez un nom à la clé afin de pouvoir l'identifier par la suite.
6. Copiez la nouvelle clé API.
7. Revenez à Transrewrt et ouvrez **Paramètres** > **Configuration API**.
8. Collez la clé dans **Clé API OpenRouter** (sous **Paramètres** > **Configuration API**).
9. Cliquez sur **Tester la clé OpenRouter** pour vous assurer qu'elle fonctionne.

<br/>

> ℹ️ **REMARQUE**<br/>
> Vous pouvez commencer avec le routage gratuit d'OpenRouter ou n'importe quel autre modèle gratuit disponible, sans avoir à saisir de carte bancaire. Dans de nombreux cas, cela suffit pour commencer à utiliser Transrewrt sans avoir à choisir un modèle payant. Sinon, vous pouvez utiliser Ollama pour exécuter des modèles localement sans aucune clé API.

<br/><br/>

<a id="getting-started"></a>
## Premiers pas

Si c'est votre première utilisation de Transrewrt, suivez ces étapes dans l'ordre :

1. Ouvrez l'application.
2. Choisissez votre **langue d'interface** à partir de l'icône du globe si nécessaire.
3. Si vous utilisez l'**application de bureau**, ouvrez [**Paramètres** > **Configuration API**](#api-config), ajoutez une clé API pour au moins un fournisseur (par exemple OpenRouter), puis cliquez sur **Tester** pour vérifier qu'elle fonctionne.
4. Ouvrez [**Paramètres** > **Modèles**](#models) et ajoutez un ou plusieurs modèles à **Modèles sélectionnés**.
5. Ouvrez [**Paramètres** > **Langues**](#languages) et choisissez vos **Langues principales** si vous souhaitez que vos langues les plus utilisées apparaissent en premier.
6. Allez dans **Traduire** et effectuez une traduction simple pour confirmer que tout fonctionne.
7. Une fois que cela fonctionne, essayez **Réécriture**, puis **Transformer**.

Cet ordre est important. Il permet d'éviter le problème le plus courant lors de la première utilisation : tenter d'exécuter une tâche avant que l'application n'ait une connexion API fonctionnelle ou un modèle sélectionné.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Parties principales de la fenêtre

L'application est divisée en trois zones principales :

- La **barre latérale** sur la gauche.
- La **barre d'outils** en haut.
- La **zone de travail** au centre.

<br/>

<a id="sidebar"></a>
### Barre latérale

Utilisez la barre latérale pour naviguer dans l'application. Vous pouvez la réduire pour gagner de l'espace en cliquant sur l'icône à côté du logo de l'application.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/fr/sidebar.png" alt="Barre latérale de l'application" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduire</strong> ouvre l'espace de travail de traduction.</li><br/>
        <li><strong>Réécrire</strong> ouvre l'espace de travail de réécriture.</li><br/>
        <li><strong>Transformer</strong> ouvre l'espace de travail des invites personnalisées.</li><br/>
        <li><strong>Tableau de bord</strong> affiche les informations sur l'utilisation et les coûts.</li><br/>
        <li><strong>Paramètres</strong> ouvre le panneau des paramètres.</li><br/>
        <li><strong>Historique</strong> affiche l'historique des utilisations avec le texte entré et le texte généré.</li><br/>
        <li><strong>Utilisateur</strong> affiche le nom de l'utilisateur connecté (version web uniquement).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barre d'outils

La barre d'outils change légèrement selon l'endroit où vous vous trouvez dans l'application.

- À gauche, elle affiche le nom de la page actuelle.
- À droite, elle affiche le **sélecteur de modèle** et le contrôle de la **langue de l'interface**.

Le **sélecteur de modèle** vous permet de choisir quel moteur d’intelligence artificielle utiliser pour la tâche en cours.

  ![Sélecteur de modèle](../images/screenshots/fr/model-selector.png)

> ℹ️ **REMARQUE**<br/>
> Certains modèles gratuits peuvent ne pas toujours être disponibles — parfois ils sont hors ligne ou soumis à une limite d'utilisation. Dans ce cas, l'application supprimera automatiquement ce modèle de votre liste disponible.<br/>
> Pour contrôler les modèles affichés, rendez-vous dans [**Paramètres** > **Modèles**](#models) et modifiez votre liste de modèles.  
> Vous pouvez également ouvrir les paramètres du modèle directement en cliquant sur l’icône du fournisseur située à gauche du nom du modèle dans la barre d'outils.

<br/>

L'**icône du globe + code langue** modifie la langue de l'interface de l'application (menus, boutons, etc.), mais **ne change pas** les langues de traduction utilisées dans **Traduire**.

  ![Sélecteur de langue de l'interface](../images/screenshots/fr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panneaux d'entrée et de sortie

La plupart des espaces de travail utilisent un panneau **Entrée** à gauche et un panneau **Sortie** à droite.

Le panneau **Entrée** affiche :

- Le nombre de caractères
- Le nombre de mots
- Le nombre de paragraphes

Le panneau **Sortie** peut afficher :

- La durée de la tâche
- Le coût de la tâche (si disponible)
- Le coût total cumulé
- Le **TPS** (tokens par seconde)
- Le nombre de caractères, de mots et de paragraphes
- Le modèle utilisé

Si vous vous interrogez sur les termes techniques :

- Un **token** correspond à un petit fragment de texte. Vous pouvez l’imaginer comme une partie d’un mot ou un mot court.
- Le **TPS** indique combien de ces fragments textuels le modèle a traités chaque seconde.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traduire

Utilisez **Traduire** lorsque vous souhaitez convertir du texte d’une langue à une autre.

![Espace de travail Traduire](../images/screenshots/fr/translate.png)

<br/>

<a id="translate-text"></a>
### Traduire du texte

1. Ouvrez **Traduire**.
2. Choisissez une langue dans **De**.
3. Choisissez une langue dans **Vers**.
4. Choisissez un modèle dans la barre d'outils.
5. Saisissez ou collez du texte dans **Entrée**.
6. Cliquez sur **Traduire**.
7. Lisez le résultat dans **Sortie**.
8. Utilisez le bouton de copie si vous souhaitez copier le résultat.

<br/>

<a id="language-selection"></a>
### Sélection des langues

- **De** peut être une langue spécifique ou **Détection automatique**.
- **Vers** est la langue dans laquelle vous souhaitez obtenir le résultat.

Vos **Langues principales** sélectionnées apparaissent en haut de la liste. Vous pouvez les définir dans [**Paramètres** > **Langues**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Paramètres utiles pour la traduction

Dans [**Paramètres** > **Paramètres généraux**](#general-settings), vous pouvez modifier le comportement de la traduction :

- **Traduire automatiquement au collage** lance une traduction dès que vous collez du texte.
- **Copier automatiquement le résultat dans le presse-papiers** copie le résultat automatiquement après une traduction réussie.
- **Traduction en temps réel (pendant la saisie)** lance des traductions pendant que vous tapez.
- **Délai d’attente (ms)** définit combien de temps l’application attend avant de lancer une traduction en temps réel.

<br/>

<a id="keyboard-shortcuts"></a>
### Raccourcis clavier

Dans [**Paramètres** > **Paramètres généraux**](#general-settings), l’option **Comportement de la touche Entrée** détermine ce qu’il se passe lorsque vous appuyez sur `Entrée` :

- **Entrée** peut lancer la tâche tandis que **Maj+Entrée** insère un saut de ligne.
- Ou l’application peut faire l’inverse.

Le mode actuel est également indiqué sur le bouton **Traduire**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Réécrire

Utilisez **Réécrire** lorsque vous souhaitez améliorer l’expression sans modifier le sens principal.

![Espace de travail Réécrire](../images/screenshots/fr/rewrite.png)

Cela est utile pour :

- corriger l’orthographe et la grammaire
- rendre le texte plus clair
- rendre le texte plus formel ou plus familier
- raccourcir ou développer le texte
- donner un ton plus technique au texte

<br/>

<a id="rewrite-text"></a>

### Réécrire du texte

1. Ouvrez **Réécriture**.
2. Choisissez un **mode**.
3. Sélectionnez un modèle dans la barre d'outils.
4. Saisissez ou collez votre texte dans **Entrée**.
5. Cliquez sur **Réécrire**.
6. Consultez le résultat dans **Sortie**.

Le même comportement de la touche Entrée décrit dans [**Traduire**](#keyboard-shortcuts) s'applique ici.

<br/>

> 💡 **ASTUCE**<br/>
> Lorsque vous utilisez le mode « Corriger l'orthographe et la grammaire », un bouton `Afficher les modifications` apparaît dans le panneau de sortie.
> Cliquez sur ce bouton pour activer ou désactiver l'affichage des corrections, montrant ou masquant les modifications spécifiques apportées à votre texte.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Transformer

Utilisez **Transformer** lorsque vous souhaitez que l'IA suive un ensemble d'instructions personnalisées.

![Espace de travail Transformer](../images/screenshots/fr/transform.png)

Il s'agit de la zone la plus souple de l'application. Vous pouvez l'utiliser pour des tâches telles que :

- résumer des notes
- transformer un texte brut en e-mail soigné
- extraire les points clés
- convertir un texte dans un format spécifique

<br/>

<a id="run-an-existing-prompt"></a>
### Exécuter une instruction existante

1. Ouvrez **Transformer**.
2. Choisissez une instruction dans la liste d'instructions.
3. Si une zone **Langue cible** apparaît, sélectionnez une langue si nécessaire.
4. Saisissez ou collez du texte dans **Entrée**.
5. Cliquez sur **Transformer**.
6. Lisez le résultat dans **Sortie**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Si vous n'avez pas encore d'instructions

Si votre liste d'instructions est vide, cliquez sur **Charger des exemples d'instructions**. Cela ajoute des exemples intégrés pour que vous puissiez commencer rapidement.

<br/>

> ℹ️ **REMARQUE**<br/>
> Les instructions exemples sont fournies en anglais. Après les avoir chargées, vous pouvez modifier une instruction et utiliser **Traduire l'instruction** pour la traduire dans votre langue.

<br/>

<a id="create-a-prompt-quickly"></a>
### Créer rapidement une instruction

La méthode la plus rapide pour créer une instruction est la suivante :

1. Cliquez sur **Nouvelle instruction**.
2. Cliquez sur **Générer une instruction**.
3. Décrivez ce que vous souhaitez que l'instruction fasse.
4. Choisissez un modèle.
5. Laissez l'application créer un brouillon pour vous.
6. Vérifiez le brouillon puis cliquez sur **Enregistrer**.

![Générer une instruction](../images/screenshots/fr/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Modifier une instruction

Lorsque vous créez ou modifiez une instruction, l'éditeur s'affiche à gauche et une zone de test apparaît à droite.

![Éditeur d'instruction Transformer](../images/screenshots/fr/transform-prompt-edit.png)

Les principaux champs sont :

- **Nom de l'instruction** : le nom qui s'affiche dans la liste des instructions.
- **Instructions (facultatif)** : un bref indicateur affiché à l'utilisateur lors de l'exécution de l'instruction.
- **Rôle du modèle** : le rôle général attribué à l'IA, par exemple « Vous êtes un assistant utile. »
- **Instructions du modèle (une par ligne)** : les règles spécifiques que vous souhaitez que l'IA suive.
- **Description de la sortie** : un mot court décrivant le résultat, par exemple « résumé » ou « réécriture ».
- **Température (0,0 → 1,0)** : le comportement du modèle ; voir ci-dessous.
- **Demander la langue cible** : ajoute un sélecteur de langue cible lors de l'exécution de l'instruction.

Si le terme technique **Température** vous est inconnu, pensez-y comme suit :

- Une température **plus basse** donne des résultats plus stables et prévisibles.
- Une température **plus élevée** donne plus de variété et de créativité.

Vous pouvez également utiliser :

- **`Générer une instruction`** pour créer un nouveau brouillon à partir d'une simple description
- **`Améliorer l'instruction`** pour affiner une instruction existante
- **`Traduire l'instruction`** pour traduire les champs de l'instruction

<br/>

> ⚠️ **ATTENTION**<br/>
> Cliquez sur **`Enregistrer`** avant de cliquer sur **`Retour à l'exécution`**. Si vous revenez en arrière sans enregistrer, vos modifications seront perdues.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Tester une instruction avant de l'utiliser

Le panneau de test à droite vous permet d'essayer votre instruction avec du texte d'exemple avant de l'utiliser dans votre travail quotidien.

C’est utile lorsque :

- vous créez une nouvelle instruction
- vous comparez deux versions d'une instruction
- vous souhaitez vérifier le ton, la longueur ou le format de sortie

<br/>

<a id="manage-saved-prompts"></a>
### Gérer les instructions enregistrées

Pour gérer vos instructions dans un seul endroit, ouvrez [**Paramètres** > **Instructions Transformer**](#transform-prompts).

Vous pouvez alors :

- lister et supprimer vos instructions
- exporter les instructions au format **JSON**, **CSV** ou **XLSX**
- importer des instructions à partir d'un fichier

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Tableau de bord

Utilisez le **Tableau de bord** pour voir l'utilisation que vous faites de l'application et les coûts associés (pour les modèles payants).

![Résumé du tableau de bord](../images/screenshots/fr/dashboard-summary.png)


<br/>

> ℹ️ **REMARQUE**<br/>
> Si vous n'utilisez que des modèles gratuits, les graphiques liés au coût seront vides.

<br/>

<a id="filter-the-data"></a>
### Filtrer les données

Utilisez les boutons de filtre en haut pour modifier la plage temporelle.

![Filtres du tableau de bord](../images/screenshots/fr/dashboard-filter.png)

<br/>

> ℹ️ **REMARQUE**<br/>
> Le filtre **Utilisateur** n'est visible que pour les administrateurs dans la version web. Les utilisateurs standard ne verront pas ce filtre, et il n'est pas disponible dans l'application de bureau.

<br/>

<a id="dashboard-tabs"></a>
### Onglets du tableau de bord

- **Résumé** vous donne un aperçu de l'utilisation et des coûts.
- **Par utilisation** décompose l'activité par langue de traduction, mode de réécriture et invite de transformation.
- **Par modèle** indique quels modèles vous avez utilisés et leurs coûts.
- **Par jour** affiche les totaux quotidiens.
- **Tous les appels** montre l'historique complet des appels et vous permet de l'exporter.

<br/>

<a id="export-data"></a>
### Exporter les données

Les tableaux du tableau de bord permettent d'exporter les données au format :

- **JSON**
- **CSV**
- **XLSX**

Cela peut être utile si vous souhaitez analyser l'activité en dehors de l'application ou partager un rapport.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Supprimer les enregistrements conservés pour un modèle

Dans les onglets **Par modèle** ou **Tous les appels**, vous pouvez supprimer les enregistrements conservés pour un modèle en cliquant sur l'icône de « corbeille ».

> ⚠️ **ATTENTION**<br/>
> La suppression des enregistrements conservés est irréversible. Utilisez cette fonction uniquement si vous êtes certain de ne plus avoir besoin de cet historique.

Pour supprimer toutes les données ou supprimer des enregistrements selon leur ancienneté, rendez-vous dans [**Paramètres** > **Suivi des coûts**](#cost-tracking). Vous y trouverez des options pour supprimer toutes les données stockées ou uniquement celles antérieures à une certaine date.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historique

Cliquez sur **Historique** pour afficher l'historique de vos actions dans **Transrewrt**, y compris les entrées et sorties de chaque opération.

![Page Historique](../images/screenshots/fr/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrer l'historique

L'onglet **Historique** utilise les mêmes filtres que la page **Tableau de bord**. Utilisez-les pour sélectionner la plage temporelle.

![Filtres du tableau de bord](../images/screenshots/fr/dashboard-filter.png)

<br/>

> ℹ️ **REMARQUE**<br/>
> Le filtre **Utilisateur** n'est visible que pour les administrateurs dans la version web. Les utilisateurs standard ne verront pas ce filtre, et il n'est pas disponible dans l'application de bureau.

<br/>

<a id="export-history-data"></a>
### Exporter les données de l'historique

La page Historique permet d'exporter les données filtrées aux formats suivants :

- **JSON**
- **CSV**
- **XLSX**

Cela peut être utile si vous souhaitez analyser les activités en dehors de l'application ou partager un rapport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Paramètres

Ouvrez **Paramètres** depuis la barre latérale pour personnaliser le comportement de l'application.

Les onglets disponibles dépendent de la plateforme et de votre rôle :

  | Onglet                   | Bureau | Web (admin) | Web (utilisateur standard) |
  |---------------------------|:------:|:-----------:|:--------------------------:|
  | Paramètres généraux       |  oui   |     oui     |             oui            |
  | Modèles                   |  oui   |     oui     |             oui            |
  | Langues                   |  oui   |     oui     |             oui            |
  | Suivi des coûts           |  oui   |     oui     |              —             |
  | Invites de transformation |  oui   |     oui     |             oui            |
  | Utilisateurs              |   —    |     oui     |              —             |
  | Configuration API         |  oui   |     oui     |              —             |
  | À propos                  |  oui   |     oui     |             oui            |

<br/>

> ℹ️ **REMARQUE**<br/>
> Dans la version web, chaque utilisateur dispose de sa propre configuration. Les paramètres tels que les modèles sélectionnés, les langues, les options générales et les invites de transformation sont stockés individuellement. Les modifications que vous effectuez n'affectent pas les autres utilisateurs.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Paramètres généraux

Utilisez les **Paramètres généraux** pour contrôler le comportement de saisie, l’enregistrement des détails d’exécution dans l’onglet **Historique**, ainsi que l’apparence.

**Comportement**

- **Comportement de la touche ENTRÉE** permet de choisir si `Entrée` exécute la tâche ou insère une nouvelle ligne.
- **Traduire automatiquement au collage** lance la traduction aussitôt que vous collez du texte.
- **Copier automatiquement le résultat dans le presse-papiers** copie les résultats réussis automatiquement.
- **Traduction en temps réel (pendant la saisie)** traduit pendant que vous tapez.
- **Délai d’expiration (ms)** définit le temps d’attente pour la traduction en temps réel.

**Historique**

- **Conserver l’historique des exécutions** détermine si chaque traduction, réécriture et transformation enregistre le **texte d’entrée et de sortie** pour l’affichage dans le volet latéral [**Historique**](#history). Désactiver cette option demande une confirmation ; si vous confirmez, les données historiques stockées sont supprimées de la base de données.
- **Supprimer les données d’historique** vous permet de supprimer les textes stockés selon leur ancienneté (par exemple, plus vieux que quelques mois, ou **toutes les données (effacement)**) en utilisant **Supprimer les données**. Ceci concerne uniquement les textes d’exécution sauvegardés pour l’affichage **Historique** ; cela ne supprime **pas** les totaux des coûts ou de l’utilisation. Pour supprimer ou réduire les données de **coût**, utilisez [**Paramètres** > **Suivi des coûts**](#cost-tracking).

**Apparence**

- **Nombre de décimales pour les coûts** modifie l’affichage des chiffres décimaux.
- **Web uniquement :** **ajouter une marge autour de l’application** ajoute un espace supplémentaire autour de l’interface.
- **Famille de polices** modifie la police utilisée dans les zones de texte.
- **Taille** modifie la taille de la police.


<br/>

<a id="models"></a>
### Modèles

Utilisez **Paramètres** > **Modèles** pour choisir quels modèles apparaissent dans la barre d’outils.

![Onglet Modèles des paramètres](../images/screenshots/fr/settings-models.png)

La page contient deux listes :

- **Modèles disponibles** à gauche
- **Modèles sélectionnés** à droite

Les contrôles utiles comprennent :

- **Rechercher des modèles...** pour trouver un modèle par nom
- Les boutons **Fournisseur** pour filtrer la liste selon un moteur (OpenRouter, OpenAI, Ollama, …)
- **Uniquement gratuits** pour n’afficher que les modèles gratuits
- **Actualiser** pour recharger la liste
- **Tout développer** et **Tout réduire** lorsque vous triez par fournisseur

Les identifiants des modèles incluent le préfixe du fournisseur (par exemple `openrouter/…` vs `openai/…`). Les badges comme **OpenAI (OpenRouter)** vs **OpenAI (direct)** indiquent comment le trafic est acheminé.

Actions :

 - Pour ajouter un modèle, cliquez sur **Ajouter** ou n’importe où sur l’entrée.

 - Pour supprimer un modèle, cliquez sur **X** à côté dans **Modèles sélectionnés**, ou sur **Sélectionné** dans l’entrée des modèles disponibles.

 - Pour vider la liste, cliquez sur **Tout désélectionner**. Le modèle gratuit obligatoire restera dans la liste.

<br/>

> ℹ️ **REMARQUE**<br/>
> Si vous ne souhaitez pas ajouter de crédits à OpenRouter immédiatement, commencez par activer **Uniquement gratuits** et sélectionnez les modèles gratuits (carte bancaire non requise). Vous pouvez également utiliser Ollama pour exécuter des modèles localement sans aucune clé API.

<br/>

<a id="languages"></a>
### Langues

Utilisez **Paramètres** > **Langues** pour organiser les listes de langues utilisées dans l’application.

- **Langues favorites** sont épinglées en haut des listes de langues dans **Traduire** et **Transformer**.
- **Langue personnalisée** vous permet d’ajouter une langue absente de la liste intégrée.

Si vous ajoutez une langue personnalisée, elle apparaît dans les sélecteurs de langues aux côtés des options intégrées.

<br/>

<a id="cost-tracking"></a>
### Suivi des coûts

Utilisez **Paramètres** > **Suivi des coûts** pour gérer les informations de coût.

- **Coût total** affiche le cumul en cours.
- **Copier la valeur** copie le total dans le presse-papiers.
- **Réinitialiser le coût** remet le total enregistré à zéro.
- **Synchroniser avec l’utilisation de la clé API** ajuste le total pour qu’il corresponde à l’utilisation indiquée par votre compte OpenRouter (uniquement OpenRouter).
- **Utilisation de la clé API** affiche les détails d’utilisation d’OpenRouter, si disponibles.
- **Supprimer les données de coût** supprime toutes les données ou uniquement celles antérieures à une date sélectionnée.

**Suivi des coûts :** Lorsque vous utilisez des modèles OpenRouter, l’application affiche votre utilisation et vos dépenses réelles basées sur les données d’OpenRouter. Pour tous les autres fournisseurs, l’application estime les coûts à partir des prix publiés par OpenRouter ; si aucun prix n’est disponible, l’estimation peut être nulle.

<br/>

> ℹ️ **REMARQUE**<br/>
> **Tous les montants indiqués sont des estimations à titre indicatif uniquement, et ne constituent pas des factures officielles.**


<br/>

> ⚠️ **ATTENTION**<br/>
> La suppression des données est irréversible. Avant de supprimer, assurez-vous de sauvegarder vos données ou de les exporter via [**Tableau de bord** > **Tous les appels**](#dashboard-tabs), sinon elles seront perdues définitivement. <br/>
> Tous les historiques liés à chaque entrée d’appel API seront également supprimés.


<br/>

<a id="transform-prompts"></a>

### Transformer les invites

Utilisez **Paramètres** > **Transformer les invites** pour gérer les invites en masse.

Vous pouvez :

- consulter vos invites enregistrées
- supprimer des invites
- importer des invites depuis un fichier
- exporter des invites pour sauvegarde ou partage

<br/>

<a id="users"></a>
### Utilisateurs

**Web : administrateur uniquement**

Utilisez **Utilisateurs** pour gérer les comptes utilisateurs dans la version web. Vous pouvez ajouter des utilisateurs, mettre à jour leurs informations, réinitialiser les mots de passe et supprimer les comptes.

<br/>

<a id="api-config"></a>
### Configuration de l'API

Les fournisseurs pris en charge sont : OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, et **Ollama** (modèles locaux via une URL de base). Vous n'avez besoin de configurer que les fournisseurs que vous utilisez.

**Application web : administrateur uniquement**

Les clés API sont configurées via les variables d'environnement du système ou de Docker — elles ne sont pas saisies dans l'interface web. Cette page indique quels fournisseurs disposent d'une clé configurée et vous permet de les tester en cliquant sur le bouton **`Test`**.

<br/>

> ℹ️ **REMARQUE**<br/>
> Pour modifier une clé API, mettez à jour la variable d'environnement dans votre configuration système ou Docker, puis redémarrez le serveur ou le conteneur.

<br/>

**Application de bureau**

Utilisez **Configuration API** pour enregistrer les clés API de chaque fournisseur utilisé. Pour Ollama, saisissez l'**URL de base** à la place d'une clé API.

<br/>

> 💡 **Conseil** <br/>
> Si vous ne souhaitez pas utiliser de clé API ni payer pour l'utilisation, vous pouvez [télécharger Ollama](https://ollama.com) et exécuter des modèles localement sur votre machine gratuitement. Sinon, vous pouvez créer un compte OpenRouter gratuit (aucune carte bancaire requise) pour utiliser leurs modèles gratuits.

- Ajoutez uniquement les fournisseurs dont vous avez besoin. Dans **Paramètres** > **Modèles**, chaque identifiant de modèle commence par le fournisseur (par exemple `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Pour ajouter une clé API, saisissez la valeur dans le champ texte et cliquez sur **`Enregistrer`**. Pour remplacer une clé existante, cliquez sur **`Modifier`**. Pour vérifier si une clé fonctionne, cliquez sur **`Test`**.

<br/>

> ℹ️ **REMARQUE**<br/>
> Vous ne pouvez pas voir la valeur actuelle d'une clé API. Vous pouvez uniquement la remplacer à l'aide du bouton **`Modifier`**.
> Les clés API sont stockées chiffrées dans le fichier de configuration.

<br/>

Pour des étapes détaillées sur l'obtention d'une clé OpenRouter, consultez [Comment obtenir une clé API](#how-to-get-an-api-key-desktop-app) ci-dessus.



<br/>

<a id="about"></a>
### À propos

L'onglet **À propos** affiche :

- le nom de l'application
- le numéro de version
- la date de build
- un lien vers le dépôt du projet

<br/><br/>

<a id="common-issues"></a>
## Problèmes courants

Si quelque chose ne fonctionne pas comme prévu, vérifiez d'abord les points suivants.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### L'application ne traduit pas, ne réécrit pas ou ne transforme pas le texte

Vérifiez que :

- vous avez sélectionné un modèle dans la barre d'outils
- au moins un modèle est répertorié dans [**Paramètres** > **Modèles**](#models)
- votre configuration API fonctionne

Si vous utilisez l'application de bureau :

1. Ouvrez [**Paramètres** > **Configuration API**](#api-config).
2. Vérifiez qu'au moins une clé API est enregistrée.
3. Cliquez sur **Test** à côté du fournisseur pour confirmer que la clé fonctionne.

<br/>

<a id="the-model-list-is-empty"></a>
### La liste des modèles est vide

Ouvrez [**Paramètres** > **Modèles**](#models) et cliquez sur **Actualiser**.

Si nécessaire :

- recherchez un modèle
- activez **Gratuits uniquement**
- ajoutez un ou plusieurs modèles à **Modèles sélectionnés**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Le résultat est trop lent ou trop coûteux

Essayez une ou plusieurs de ces solutions :

- choisissez un modèle différent
- utilisez une entrée plus courte
- désactivez la **Traduction en temps réel (pendant la saisie)** dans [**Paramètres** > **Paramètres généraux**](#general-settings)
- utilisez des modèles gratuits pour les tâches simples (voir [Modèles](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### L'interface est dans la mauvaise langue

Cliquez sur l'icône du globe dans la [barre d'outils](#toolbar) et choisissez votre **Langue de l'interface** préférée.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Le texte est trop petit ou difficile à lire

Ouvrez [**Paramètres** > **Paramètres généraux**](#general-settings) et modifiez :

- **Famille de polices**
- **Taille**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Les graphiques du tableau de bord sont vides

Ceci est normal si :

- vous utilisez uniquement des **modèles gratuits** (les graphiques des coûts seront vides)
- le **filtre temporel** sélectionné ne couvre pas la période où des appels ont été effectués — essayez **Tout** pour vérifier

Si les graphiques restent vides après avoir sélectionné **Tout**, vérifiez que des appels apparaissent dans [**Historique**](#history) ou dans l'onglet **Tous les appels**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Le coût indique « non disponible » ou semble incorrect

Lorsque vous utilisez des modèles via **OpenRouter**, l'application affiche vos dépenses réelles telles que rapportées par OpenRouter.

Pour les **autres fournisseurs** (OpenAI direct, Anthropic direct, etc.), le coût est estimé à partir des données de tarification publiées par OpenRouter. Si aucun prix correspondant n’est trouvé pour un modèle, le coût apparaîtra comme **non disponible** et ne sera pas ajouté à votre total cumulé.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Le coût total ne correspond pas à la facture de mon fournisseur

Tous les montants indiqués dans l'application sont des **estimations fournies à titre indicatif uniquement**, et non des factures officielles.

Pour rapprocher le total de vos dépenses réelles sur OpenRouter, ouvrez [**Paramètres** > **Suivi des coûts**](#cost-tracking) et cliquez sur **Synchroniser avec l'utilisation de la clé API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La page Historique est manquante dans la barre latérale

L'option **Conserver l'historique des exécutions** est peut-être désactivée. Allez dans [**Paramètres** > **Paramètres généraux**](#general-settings) et activez-la. Veuillez noter qu'activer cette option ne permet pas de récupérer les données d'historique supprimées auparavant.

<br/>

<a id="web-app-session-expired"></a>
### Application web : redirection inattendue vers la page de connexion

Votre session a peut-être expiré. Veuillez vous reconnecter. Si cela se produit fréquemment, vérifiez la configuration du serveur concernant les paramètres de durée de vie de session.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Le tableau de bord n'affiche aucune donnée pour les autres utilisateurs (version web)

Seuls les **administrateurs** peuvent afficher les données de tous les utilisateurs via le filtre **Utilisateur**. Par conception, les utilisateurs réguliers ne voient que leurs propres activités.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### J'ai modifié une invite et j'ai perdu mes modifications

Lorsque vous modifiez une invite, veillez toujours à cliquer sur **Enregistrer** avant de cliquer sur **Retour à l'exécution**.

<br/><br/>

<a id="quick-tips"></a>
## Conseils rapides

- Commencez par [**Traduire**](#translate) pour vous assurer que votre configuration fonctionne avant de passer à [**Réécrire**](#rewrite) ou [**Transformer**](#transform).
- Utilisez [**Réécrire**](#rewrite) pour améliorer quotidiennement vos formulations.
- Utilisez [**Transformer**](#transform) lorsque vous avez besoin d'un flux de travail répétable pour une tâche spécifique.
- Utilisez [**Tableau de bord**](#dashboard) si vous souhaitez surveiller votre utilisation et vos coûts.
- Utilisez [**Historique**](#history) pour revoir les opérations antérieures ainsi que leurs textes d'entrée et de sortie complets.
- Exportez régulièrement vos invites si vous construisez une bibliothèque d'invites que vous souhaitez préserver (voir [Transformer des invites](#transform-prompts)) ou que vous souhaitez partager avec d'autres.

<br/><br/>

<a id="disclaimer"></a>
## Avertissement

Les noms et logos des produits appartiennent à leurs propriétaires respectifs et sont utilisés uniquement à des fins d'identification. Ce logiciel n'est ni affilié ni approuvé par aucune des marques mentionnées.

<br/><br/>

<a id="license"></a>
## Licence

Copyright © 2026 Waldemar Scudeller Jr.

[Licence Apache 2.0](LICENSE)