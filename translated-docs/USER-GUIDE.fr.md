---
translated_at: "2026-03-29T01:53:14.913Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Bannière Transrewrt](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Guide utilisateur

<br/>

<a id="introduction"></a>

## Introduction

Transrewrt vous aide à travailler avec du texte de trois manières principales :

- **Traduire** - convertir du texte d'une langue à une autre.
- **Réécrire** - reformuler un texte dans un style différent, par exemple plus clair, plus concis ou plus formel.
- **Transformer** - traiter du texte à l'aide d'instructions personnalisées d'intelligence artificielle appelées invites.

<br/>

Ce guide explique comment utiliser l'application une fois installée et en fonctionnement. Pour les étapes d'installation, consultez le fichier **[README](README.fr.md)** principal.

<br/>

> ℹ️ **REMARQUE**<br/>
> Transrewrt est disponible sous forme d'application de bureau pour Windows et Linux, ainsi que sous forme d'application web auto-hébergée. Ce guide se concentre sur l'utilisation courante de l'application. Lorsqu'une fonctionnalité ne s'applique qu'à une seule version, elle est clairement indiquée.

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](translated-docs/US

ER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Portugais (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Roumain](USER-GUIDE.ro.md) · [Russe](USER-GUIDE.ru.md) · [Slovaque](USER-GUIDE.sk.md) · [Espagnol](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Suédois](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [Thaï](USER-GUIDE.th.md) · [Turc](USER-GUIDE.tr.md) · [Ukrainien](USER-GUIDE.uk.md) · [Vietnamien](USER-GUIDE.vi.md)</small>

<small>

> **Note sur les traductions de l'interface et de la documentation :** Toutes les langues de l'interface, à l'exception de l'anglais (Royaume-Uni) d'origine,  
> ont été traduites à l'aide de modèles d'intelligence artificielle ; le libellé peut être imprécis ou contenir des erreurs.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table des matières**

- [Avant de commencer](#before-you-start)
  - [Comment obtenir une clé API OpenRouter gratuite (application de bureau)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Bien démarrer](#getting-started)
- [Parties principales de la fenêtre](#main-parts-of-the-window)
  - [Barre latérale](#sidebar)
  - [Barre d'outils](#toolbar)
  - [Panneaux d'entrée et de sortie](#input-and-output-panels)
- [Traduire](#translate)
  - [Traduire un texte](#translate-text)
  - [Sélection de la langue](#language-selection)
  - [Paramètres utiles pour la traduction](#helpful-translation-settings)
- [Réécrire](#rewrite)
- [Transformer](#transform)
  - [Exécuter une commande existante](#run-an-existing-prompt)
  - [Si vous n'avez pas encore de commandes](#if-you-have-no-prompts-yet)
  - [Créer une commande rapidement](#create-a-prompt-quickly)
  - [Modifier une commande](#edit-a-prompt)
  - [Tester une commande avant de l'utiliser](#test-a-prompt-before-using-it)
- [Tableau de bord](#dashboard)
  - [Filtrer les données](#filter-the-data)
  - [Onglets du tableau de bord](#dashboard-tabs)
  - [Exporter les données](#export-data)

- [Supprimer les enregistrements stockés pour un modèle](#delete-stored-records-for-a-model)
- [Historique](#history)
  - [Filtrer les données](#filter-the-data-1)
  - [Exporter les données d'historique](#export-history-data)
- [Paramètres](#settings)
  - [Paramètres généraux](#general-settings)
  - [Modèles](#models)
  - [Langues](#languages)
  - [Suivi des coûts](#cost-tracking)
  - [Transformer les invites](#transform-prompts)
  - [Utilisateurs](#users)
  - [Configuration API](#api-config)
  - [À propos](#about)
- [Problèmes courants](#common-issues)
  - [L'application ne traduit, ne réécrit ni ne transforme pas le texte](#the-app-will-not-translate-rewrite-or-transform-text)
  - [La liste des modèles est vide](#the-model-list-is-empty)
  - [Le résultat est trop lent ou trop coûteux](#the-result-is-too-slow-or-too-expensive)
  - [L'interface est dans la mauvaise langue](#the-interface-is-in-the-wrong-language)
  - [Le texte est trop petit ou difficile à lire](#the-text-is-too-small-or-hard-to-read)
  - [Les graphiques du tableau de bord sont vides](#dashboard-charts-are-empty)

- [Le coût affiche « non disponible » ou semble incorrect](#cost-shows-not-available-or-seems-wrong)
  - [Le coût total ne correspond pas à la facture de mon fournisseur](#total-cost-does-not-match-my-provider-bill)
  - [La page Historique est absente de la barre latérale](#the-history-page-is-missing-from-the-sidebar)
  - [Application web : redirection inattendue vers la page de connexion](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administration web : mot de passe oublié ou perdu](#web-admin-forgot-or-lost-a-password)
  - [Le tableau de bord n'affiche aucune donnée pour les autres utilisateurs (web)](#dashboard-shows-no-data-for-other-users-web)
  - [J'ai modifié une invite et perdu mes modifications](#i-changed-a-prompt-and-lost-the-edits)
- [Conseils rapides](#quick-tips)
- [Avertissement](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Avant de commencer

Pour utiliser Transrewrt, vous devez avoir accès à au moins un fournisseur d'IA. Les fournisseurs pris en charge sont : [OpenRouter](https://openrouter.ai) (qui regroupe de nombreux modèles), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, et [Ollama](https://ollama.com) pour les modèles locaux.

Vous n'avez pas besoin de choisir un modèle payant pour commencer. Dès que vous ajoutez votre clé API OpenRouter, l'application active automatiquement une option OpenRouter intégrée **gratuite**. Cela vous permet de commencer immédiatement à traduire, réécrire et transformer du texte. Sinon, vous pouvez également obtenir une clé API gratuite auprès de Cerebras, Google, Groq ou Mistral AI.

En termes simples :

- Un **modèle** est le moteur d'IA qui effectue le travail. Les modèles sont listés avec un **préfixe de fournisseur** (par exemple `openrouter/…`, `openai/…`, `ollama/…`).
- Une **clé API** (ou, pour Ollama, une **URL de base**) permet à l'application de se connecter à ce fournisseur.

Si vous utilisez l'**application de bureau**, ajoutez les clés dans [**Paramètres** > **Configuration API**](#api-config) pour chaque fournisseur que vous utilisez. Pour une utilisation uniquement avec OpenRouter, consultez ci-dessous la section [Comment obtenir une clé API](#how-to-get-an-api-key-desktop-app). Si vous ne souhaitez pas utiliser de clé API, vous pouvez installer Ollama (à partir de [ollama.com](https://ollama.com)) et utiliser des modèles locaux, tels que `translategemma:4b`.

Si vous utilisez la **version web**, l'administrateur du serveur configure les fournisseurs via des variables d'environnement ; vous ne pouvez donc pas saisir directement les clés API dans l'application.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Comment obtenir une clé API OpenRouter gratuite (application de bureau)

Si vous utilisez l'application de bureau, suivez ces étapes :

1. Rendez-vous sur [OpenRouter](https://openrouter.ai) avec votre navigateur web.
2. Créez un compte ou connectez-vous.
3. Ouvrez la page [Clés](https://openrouter.ai/keys).
4. Cliquez sur le bouton pour créer une nouvelle clé API.
5. Donnez un nom à la clé afin de pouvoir l'identifier ultérieurement.
6. Copiez la nouvelle clé API.
7. Revenez à Transrewrt et ouvrez **Paramètres** > **Configuration API**.
8. Collez la clé dans le champ **Clé API OpenRouter** (sous **Paramètres** > **Configuration API**).
9. Cliquez sur **Tester la clé OpenRouter** pour vous assurer qu'elle fonctionne.

<br/><br/>

<a id="getting-started"></a>

## Bien démarrer

Si c'est votre première utilisation de Transrewrt, suivez ces étapes dans l'ordre :

1. Ouvrez l'application.
2. Si nécessaire, choisissez votre **langue d'interface** via l'icône du globe.
3. Si vous utilisez l'**application de bureau**, ouvrez [**Paramètres** > **Configuration API**](#api-config), ajoutez une clé API pour au moins un fournisseur (par exemple OpenRouter), puis cliquez sur **Tester** pour vérifier que cela fonctionne.
4. Ouvrez [**Paramètres** > **Modèles**](#models) et ajoutez un ou plusieurs modèles à **Modèles sélectionnés**.
5. Ouvrez [**Paramètres** > **Langues**](#languages) et choisissez vos **Langues principales** si vous souhaitez que vos langues les plus utilisées apparaissent en premier.
6. Allez dans **Traduire** et effectuez une traduction simple pour confirmer que tout fonctionne.
7. Une fois cela fonctionnel, essayez **Réécrire**, puis **Transformer**.

L'ordre est important. Il permet d'éviter le problème le plus courant à la première utilisation : tenter d'exécuter une tâche avant que l'application ne dispose d'une connexion API opérationnelle ou d'un modèle sélectionné.

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

Utilisez la barre latérale pour vous déplacer dans l'application. Vous pouvez réduire la barre latérale pour gagner de la place en cliquant sur l'icône située à côté du logo de l'application.

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
        <li><strong>Historique</strong> affiche l'historique des utilisations avec les textes saisis et les résultats.</li><br/>
        <li><strong>Utilisateur</strong> affiche le nom de l'utilisateur connecté (web uniquement).</li>
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

Le **sélecteur de modèle** vous permet de choisir quel moteur d'IA utiliser pour la tâche en cours.

  ![Sélecteur de modèle](../images/screenshots/fr/model-selector.png)

Certains modèles gratuits peuvent ne pas toujours être disponibles — parfois ils sont hors ligne ou ont un plafond d'utilisation. Si cela se produit, l'application supprimera automatiquement ce modèle de votre liste disponible. Pour contrôler les modèles affichés, rendez-vous dans [**Paramètres** > **Modèles**](#models) et modifiez votre liste de modèles.  
Vous pouvez également ouvrir les paramètres du modèle directement en cliquant sur l'icône du fournisseur située à gauche du nom du modèle dans la barre d'outils.

<br/>

L'**icône de globe + le code de langue** permettent de changer la langue de l'interface de l'application (comme les menus et les boutons). Cela ne change **pas** les langues de traduction utilisées dans **Traduire**.

![Sélecteur de langue de l'interface](../images/screenshots/fr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Panneaux d'entrée et de sortie

La plupart des espaces de travail utilisent un panneau **Entrée** à gauche et un panneau **Sortie** à droite.

Chaque panneau affiche également :

| **Entrée**                                                          | **Sortie**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Nombre de caractères <br/>- Nombre de mots <br/>- Nombre de paragraphes   <br/> | - Durée de la tâche<br/>- **TPS** (tokens par seconde)<br/>- Nombre de caractères, de mots et de paragraphes<br/>- Le modèle utilisé |

Si vous vous interrogez sur les termes techniques :

- **Token** signifie un petit fragment de texte. Vous pouvez le considérer comme une partie d'un mot ou un mot court.
- **TPS** indique combien de ces fragments de texte le modèle a traités chaque seconde.

<br/>

Vous pouvez également surveiller le coût de chaque opération (si disponible) ainsi que le coût total, en activant l'option `Afficher les informations de coût sur les actions` dans [**Paramètres** > **Paramètres généraux**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Traduire

Utilisez **Traduire** lorsque vous souhaitez convertir un texte d'une langue à une autre.

![Espace de travail Traduire](../images/screenshots/fr/translate.png)

<br/>

<a id="translate-text"></a>

### Traduire du texte

1. Ouvrir **Traduire**.
2. Choisir une langue dans **De**.
3. Choisir une langue dans **Vers**.
4. Choisir un modèle dans la barre d'outils.
5. Saisir ou coller du texte dans **Entrée**.
6. Cliquer sur **Traduire**.
7. Lire le résultat dans **Sortie**.
8. Utiliser le bouton de copie si vous souhaitez copier le résultat.

<br/>

<a id="language-selection"></a>

### Sélection de la langue

- **De** peut être une langue spécifique ou **Détection automatique de la langue**.
- **À** est la langue dans laquelle vous souhaitez obtenir le résultat.

Vos **Langues principales** sélectionnées apparaissent en haut de la liste. Vous pouvez les définir dans [**Paramètres** > **Langues**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Paramètres utiles pour la traduction

Dans [**Paramètres** > **Paramètres généraux**](#general-settings), vous pouvez modifier le comportement de la traduction :

- **Traduire automatiquement au collage** lance une traduction dès que vous collez du texte.
- **Copier automatiquement le résultat dans le presse-papiers** copie le résultat automatiquement après une traduction réussie.
- **Traduction en temps réel (pendant la saisie)** lance des traductions pendant que vous tapez.
- **Délai d'attente (ms)** ajuste la durée d'attente de l'application avant d'effectuer une traduction en temps réel.
- **Entrée (Enter)** détermine ce qui se produit lorsque vous appuyez sur `Entrée` :

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Réécrire

Utilisez **Réécrire** lorsque vous souhaitez améliorer la formulation sans en changer le sens principal.

![Espace de travail Réécrire](../images/screenshots/fr/rewrite.png)

Ceci est utile pour :

- corriger l'orthographe et la grammaire (**Vérifier l'orthographe et la grammaire**)
- rendre le texte plus clair (**Améliorer la clarté**)
- obtenir plusieurs reformulations distinctes en un seul passage (**Versions alternatives**)
- rendre le texte plus formel ou plus informel (**Formel** / **Familier**)
- raccourcir ou développer le texte (**Raccourcir** / **Développer**)
- donner un ton plus technique au texte (**Rendre technique**)

<br/>

> 💡 **ASTUCE**<br/>
> Lorsque vous utilisez le mode « **Vérifier l'orthographe et la grammaire** », un interrupteur **Afficher les modifications** apparaît dans le panneau de sortie (à côté de **Copier**).
> Activez-le ou désactivez-le pour afficher ou masquer les corrections spécifiques appliquées à votre texte.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformer

Utilisez **Transformer** lorsque vous souhaitez que l'IA suive un ensemble personnalisé d'instructions.

![Espace de travail Transformer](../images/screenshots/fr/transform.png)

Il s'agit de la zone la plus souple de l'application. Vous pouvez l'utiliser pour des tâches telles que :

- résumer des notes
- transformer un texte brut en e-mail soigné
- extraire les points clés
- convertir un texte dans un format spécifique
- toute autre activité personnalisée sur le texte d'entrée

<br/>

<a id="run-an-existing-prompt"></a>

### Exécuter une invite existante

1. Ouvrez **Transform**.
2. Choisissez une invite dans la liste des invites.
3. Si une zone **Langue cible** apparaît, sélectionnez une langue si vous le souhaitez.
4. Saisissez ou collez du texte dans **Input**.
5. Cliquez sur **Transform**.
6. Lisez le résultat dans **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Si vous n'avez pas encore de prompts

Si votre liste de prompts est vide, cliquez sur **Charger des prompts d'exemple** dans l'espace de travail Transform. Ce même bouton est toujours disponible dans [**Paramètres** > **Transform Prompts**](#transform-prompts), sur la ligne d'import/export. Les deux options ajoutent des exemples intégrés afin que vous puissiez commencer rapidement.

<br/>

> ℹ️ **REMARQUE**<br/>
> Les prompts d'exemple sont fournis en anglais. Après les avoir chargés, vous pouvez modifier un prompt et utiliser **Traduire le prompt** pour le traduire dans votre langue.

<br/>

<a id="create-a-prompt-quickly"></a>

### Créer un prompt rapidement

Le moyen le plus rapide de créer un prompt est le suivant :

1. Cliquez sur **Nouveau prompt**.
2. Cliquez sur **Générer un prompt**.
3. Décrivez ce que vous souhaitez que le prompt accomplisse.
4. Choisissez un modèle.
5. Laissez l'application créer un brouillon pour vous.
6. Vérifiez le brouillon puis cliquez sur **Enregistrer**.

![Générer un prompt](../images/screenshots/fr/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Modifier une invite

Lorsque vous créez ou modifiez une invite, l'éditeur s'affiche à gauche et une zone de test apparaît à droite.

![Éditeur d'invites Transform](../images/screenshots/fr/transform-prompt-edit.png)

Les champs principaux sont :

- **Nom de l'invite** : le nom affiché dans la liste des invites.
- **Instructions de l'invite (facultatif)** : un bref indicateur affiché à l'utilisateur lors de l'exécution de l'invite.
- **Rôle du modèle** : le rôle général attribué à l'IA, par exemple « Vous êtes un assistant utile. »
- **Instructions du modèle (une par ligne)** : les règles spécifiques que vous souhaitez que l'IA suive.
- **Description du résultat** : un mot court décrivant le résultat, comme « résumé » ou « réécriture ».
- **Température (0,0 → 1,0)** : le comportement du modèle ; voir ci-dessous.
- **Demander la langue cible** : ajoute un sélecteur de langue cible lorsque l'invite est exécutée.

Si le terme technique **Température** vous est inconnu, pensez-y de la manière suivante :

- Une température **plus basse** donne des résultats plus stables et prévisibles.

- Une température **plus élevée** donne plus de variété et de créativité.

Vous pouvez également utiliser :

- **`Générer une invite`** pour créer un nouveau brouillon à partir d'une description simple
- **`Améliorer l'invite`** pour affiner une invite existante
- **`Traduire l'invite`** pour traduire les champs de l'invite

<br/>

> ⚠️ **ATTENTION**<br/>
> Cliquez sur **`Enregistrer`** avant de cliquer sur **`Retour à l'exécution`**. Si vous revenez en arrière sans enregistrer, vos modifications seront perdues.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Tester une invite avant de l'utiliser

Le panneau de test situé à droite vous permet d'essayer votre invite avec un texte d'exemple avant de l'utiliser dans votre travail quotidien.

Cela est utile dans les cas suivants :

- lorsque vous créez une nouvelle invite
- lorsque vous comparez deux versions d'une invite
- lorsque vous souhaitez vérifier le ton, la longueur ou le format de sortie

<br/>

> ℹ️ **REMARQUE**<br/>
> Vous pouvez exporter et importer des invites enregistrées dans [**Paramètres** > **Transformations d'invites**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Tableau de bord

Utilisez le **Tableau de bord** pour voir à quel point vous utilisez l'application et les coûts associés (pour les modèles payants).

![Résumé du tableau de bord](../images/screenshots/fr/dashboard-summary.png)


<br/>

> ℹ️ **REMARQUE**<br/>
> Si vous utilisez uniquement des modèles **gratuits**, les montants de **coût** peuvent être nuls et les résumés axés sur les coûts peuvent sembler vides. Dans l'onglet **Résumé**, **Utilisation dans le temps** et **Utilisation par modèle** affichent tout de même le **nombre d'appels** (traduction, réécriture et transformation) lorsque vous avez une activité durant la période sélectionnée.

<br/>

<a id="filter-the-data"></a>

### Filtrer les données

Utilisez les boutons de filtrage en haut pour modifier la plage de temps.

![Filtres du tableau de bord](../images/screenshots/fr/dashboard-filter.png)

<br/>

> ℹ️ **REMARQUE**<br/>
> Le filtre **Utilisateur** est uniquement visible par les administrateurs dans la version web. Les utilisateurs standards ne voient pas ce filtre, et il n'est pas disponible dans l'application de bureau.

<br/>

<a id="dashboard-tabs"></a>

### Onglets du tableau de bord

- **Résumé** vous donne un aperçu de l'utilisation et des coûts. Il inclut un graphique **Utilisation dans le temps** (cumul empilé par jour du **nombre d'appels** pour traduire, réécrire et transformer) et **Utilisation par modèle** (**nombre total d'appels par modèle**, y compris la transformation).
- **Par utilisation** détaille l'activité par langue de traduction, mode de réécriture et invite de transformation.
- **Par modèle** indique quels modèles vous avez utilisés et leurs coûts.
- **Par jour** affiche les totaux quotidiens.
- **Tous les appels** montre l'historique complet des appels et vous permet de l'exporter.

<br/>

<a id="export-data"></a>

### Exporter des données

Les tableaux de bord peuvent exporter les données au format :

- **JSON**
- **CSV**
- **XLSX**

Ceci est utile si vous souhaitez consulter l'activité en dehors de l'application ou partager un rapport.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Supprimer les enregistrements stockés pour un modèle

Dans **Par modèle** ou **Tous les appels**, vous pouvez supprimer les enregistrements stockés pour un modèle en cliquant sur l'icône « corbeille ».

> ⚠️ **ATTENTION**<br/>
> La suppression des enregistrements stockés est irréversible. N'utilisez cette fonction que si vous êtes certain de ne plus avoir besoin de cet historique.

Pour supprimer toutes les données ou éliminer les enregistrements en fonction de leur ancienneté, rendez-vous dans [**Paramètres** > **Suivi des coûts**](#cost-tracking). Vous y trouverez des options pour supprimer toutes les données stockées ou uniquement celles antérieures à une certaine date.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Historique

Cliquez sur **Historique** pour consulter l'historique de vos actions dans **Transrewrt**, incluant les entrées et sorties de chaque opération.

![Page Historique](../images/screenshots/fr/history.png)

<br/>

<a id="filter-the-history"></a>

### Filtrer les données

La section **Historique** utilise les mêmes filtres que la page **Tableau de bord**. Utilisez-les pour sélectionner la plage de temps.

![Filtres du tableau de bord](../images/screenshots/fr/dashboard-filter.png)

<br/>

> ℹ️ **REMARQUE**<br/>
> Le filtre **Utilisateur** est uniquement visible par les administrateurs dans la version web. Les utilisateurs standard ne verront pas ce filtre, et il n'est pas disponible dans l'application de bureau.

<br/>

<a id="export-history-data"></a>

### Exporter les données d'historique

La page d'historique permet d'exporter les données filtrées au format :

- **JSON**
- **CSV**
- **XLSX**

Cela peut être utile si vous souhaitez consulter l'activité en dehors de l'application ou partager un rapport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Paramètres

Ouvrez **Paramètres** depuis la barre latérale pour personnaliser le fonctionnement de l'application.

Les onglets disponibles dépendent de la plateforme et de votre rôle :

| Onglet | Bureau | Web (admin) | Web (utilisateur classique) |
|-------------------|:-------:|:-----------:|:------------------:|
| Paramètres généraux | oui | oui | oui |
| Modèles | oui | oui | oui |
| Langues | oui | oui | oui |
| Suivi des coûts | oui | oui | — |
| Transformations de prompts | oui | oui | oui |
| Utilisateurs | — | oui | — |
| Configuration API | oui | oui | — |
| À propos | oui | oui | oui |

<br/>

> ℹ️ **REMARQUE**<br/>
> Dans la version web, chaque utilisateur dispose de sa propre configuration. Les paramètres tels que les modèles sélectionnés, les langues, les options générales et les invites de transformation sont stockés pour chaque utilisateur. Les modifications que vous apportez n'affectent pas les autres utilisateurs.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>

### Paramètres généraux

Utilisez les **Paramètres généraux** pour contrôler le comportement de saisie, le stockage ou non des détails d'exécution dans l'**Historique** et l'apparence.

**Comportement**

- **Comportement de la touche ENTRÉE** permet de choisir si `Entrée` exécute la tâche ou insère une nouvelle ligne.
- **Traduire automatiquement au collage** lance la traduction dès que vous collez du texte.
- **Copier automatiquement le résultat dans le presse-papiers** copie automatiquement les résultats réussis.
- **Traduction en temps réel (pendant la saisie)** traduit pendant que vous tapez.
- **Délai d'attente (ms)** définit le temps d'attente pour la traduction en temps réel.

**Historique**

- **Conserver l'historique des exécutions** détermine si chaque traduction, réécriture ou transformation enregistre le **texte d'entrée et de sortie** pour la vue latérale [**Historique**](#history). Désactiver cette option demande une confirmation ; si vous confirmez, les textes historiques stockés seront supprimés de la base de données.

- **Supprimer les données d'historique** permet de supprimer le texte stocké en fonction de son âge (par exemple, plus vieux que quelques mois, ou **toutes les données (effacer)**), à l’aide de **Supprimer les données**. Cela affecte uniquement le texte d’exécution enregistré dans la vue **Historique** ; cela ne supprime **pas** les totaux de coût ou d'utilisation. Pour supprimer ou réduire les données de **coût**, utilisez [**Paramètres** > **Suivi des coûts**](#cost-tracking).

**Apparence**

- **Afficher les informations de coût sur les actions** contrôle l'affichage du coût par opération (si disponible) et du coût total sur les panneaux de sortie de Traduction, de Réécriture et de Transformation.
- **Précision décimale des coûts** modifie l'affichage des décimales des coûts.
- **Web uniquement :** **Afficher une marge autour de l'application** ajoute un espace supplémentaire autour de l'interface.
- **Famille de polices** modifie la police utilisée dans les panneaux de texte.
- **Taille** modifie la taille de la police.

**Sauvegarde de la configuration**

- **Inclure les données d'utilisation dans la sauvegarde** — lorsqu'elle est activée, l'archive ZIP contient également l'historique des exécutions et les données des appels API.

- **Sauvegarder la configuration** — crée un fichier ZIP unique (`transrewrt-config-backup-AAAA-MM-JJ_HHMMSS.zip` en heure UTC par défaut) contenant `config.json`, `state.json`, la clé de chiffrement facultative, les utilisateurs, les préférences, les invites personnalisées et les données d'utilisation si vous avez choisi de les inclure. Après une sauvegarde réussie, une confirmation affiche le nom du fichier enregistré.
- **Restaurer à partir d'une sauvegarde** — ouvre d'abord une **boîte de dialogue de confirmation**. Sélectionnez le fichier ZIP de sauvegarde dans la boîte de dialogue (**Parcourir** / sélecteur de fichiers ou glisser-déposer, selon les plateformes prises en charge), puis vérifiez les options :
  - **Restaurer les données d'utilisation** — importe l'historique/utilisation du fichier ZIP s'il avait été sauvegardé avec les données d'utilisation incluses ; laissez décoché si vous souhaitez uniquement restaurer les paramètres et invites.
  - **Effacer les anciennes données d'utilisation avant la restauration** — supprime les données d'utilisation/historique existantes sur cette installation avant d'appliquer la sauvegarde (optionnel ; à utiliser lorsque vous souhaitez effectuer un remplacement complet).

Les sauvegardes créées dans la version web ou la version ordinateur peuvent être restaurées dans l'autre version. Lors de la restauration d'une sauvegarde ordinateur dans la version web, les données seront restaurées pour l'utilisateur administrateur.


<br/>

<a id="models"></a>

### Modèles

Utilisez **Paramètres** > **Modèles** pour choisir quels modèles apparaissent dans la barre d'outils.

![Onglet Modèles des paramètres](../images/screenshots/fr/settings-models.png)

La page contient deux listes :

- **Modèles disponibles** à gauche
- **Modèles sélectionnés** à droite

Les contrôles utiles incluent :

- **Rechercher des modèles...** pour trouver un modèle par son nom
- Les boutons **Fournisseur** pour filtrer la liste selon un moteur donné (OpenRouter, OpenAI, Ollama, etc.)
- **Uniquement gratuits** pour afficher seulement les modèles gratuits
- **Actualiser** pour recharger la liste
- **Développer tout** et **Réduire tout** lorsque vous triez par fournisseur

Les identifiants des modèles incluent le préfixe du fournisseur (par exemple `openrouter/…` vs `openai/…`). Des badges tels que **OpenAI (OpenRouter)** ou **OpenAI (direct)** indiquent la façon dont le trafic est acheminé.

> ℹ️ **REMARQUE**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) est un modèle de routage, et non un modèle de chat général : sa réponse est un objet JSON décrivant les corps de requête de l'API OpenRouter (par exemple, un tableau `requests` contenant `model` et `messages`). Si vous l'utilisez pour une action de **traduction**, de **réécriture** ou de **transformation**, le panneau de sortie affichera ce JSON au lieu d'un texte finalisé. Choisissez un modèle de texte standard pour ces tâches. Consultez la [page du modèle Body Builder](https://openrouter.ai/openrouter/bodybuilder) sur OpenRouter.

Actions :

 - Pour ajouter un modèle, cliquez sur **Ajouter** ou n'importe où dans l'entrée.

 - Pour supprimer un modèle, cliquez sur **X** à côté de celui-ci dans **Modèles sélectionnés** ou sur **Sélectionné** dans la liste des modèles disponibles.

 - Pour effacer la liste, cliquez sur **Tout désélectionner**. Le modèle gratuit obligatoire restera dans la liste.

<br/>

> ℹ️ **REMARQUE**<br/>

> Si vous ne souhaitez pas ajouter de crédits à OpenRouter immédiatement, commencez par activer l'option **Gratuit uniquement** et choisissez les modèles gratuits (aucune carte bancaire requise). Vous pouvez également utiliser Ollama pour exécuter des modèles localement, sans clé API.

<br/>

<a id="languages"></a>

### Langues

Utilisez **Paramètres** > **Langues** pour organiser les listes de langues utilisées dans l'application.

- Les **langues favorites** sont épinglées près du haut des listes de langues dans **Traduire** et **Transformer**.
- La **langue personnalisée** vous permet d'ajouter une langue qui ne figure pas dans la liste intégrée.

Si vous ajoutez une langue personnalisée, elle apparaît dans les sélecteurs de langue aux côtés des options intégrées.

<br/>

<a id="cost-tracking"></a>

### Suivi des coûts

Utilisez **Paramètres** > **Suivi des coûts** pour gérer les informations relatives aux coûts.

- **Coût total** affiche le total cumulé.
- **Copier la valeur** copie le montant total dans le presse-papiers.
- **Réinitialiser le coût** remet le total enregistré à zéro.
- **Synchroniser avec l'utilisation de la clé API** ajuste le total pour qu'il corresponde à l'utilisation indiquée par votre compte OpenRouter (OpenRouter uniquement).
- **Utilisation de la clé API** affiche les détails d'utilisation OpenRouter, si disponibles.
- **Supprimer les données de coût** élimine toutes les données, ou uniquement les entrées antérieures à une date sélectionnée.

**Suivi des coûts :** Lorsque vous utilisez des modèles OpenRouter, l'application affiche votre utilisation réelle et vos dépenses en fonction des données de coût fournies par OpenRouter. Pour tous les autres fournisseurs, l'application estime les coûts à partir des tarifs publiés par OpenRouter ; si un tarif n'est pas accessible, l'estimation peut être nulle.

<br/>

> ℹ️ **REMARQUE**<br/>
>  **Tous les montants indiqués sont des estimations à titre indicatif uniquement et ne constituent pas des factures officielles.**

<br/>

> ⚠️ **AVERTISSEMENT**<br/>

> La suppression des données ne peut pas être annulée. Avant de supprimer, assurez-vous de sauvegarder vos données ou de les exporter via [**Historique**](#history)  
> ou [**Tableau de bord** > **Tous les appels**](#dashboard-tabs), sinon elles seront perdues définitivement.  
> Tout l'historique des entrées/sorties associé à chaque entrée d'appel API sera également supprimé.


<br/>

<a id="transform-prompts"></a>

### Transformer les invites

Utilisez **Paramètres** > **Transformer les invites** pour gérer les invites en masse.

Vous pouvez :

- consulter vos invites enregistrées
- supprimer des invites
- importer des invitations à partir d'un fichier
- exporter des invitations pour sauvegarde ou partage
- charger des exemples d'invites dans la liste des invites

<br/>

<a id="users"></a>

### Utilisateurs

Utilisez **Utilisateurs** pour gérer les comptes d'utilisateurs dans la version web. Vous pouvez ajouter des utilisateurs, mettre à jour leurs informations, réinitialiser leurs mots de passe et supprimer des comptes.

<br/>

<a id="api-config"></a>

### Configuration de l'API

Les fournisseurs pris en charge sont : OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras et **Ollama** (modèles locaux via une URL de base). Vous n'avez besoin de configurer que les fournisseurs que vous utilisez.

**Application web : administrateur uniquement**

Les clés API sont configurées via des variables d'environnement système ou Docker — elles ne sont pas saisies dans l'interface web. Cette page indique quels fournisseurs ont une clé configurée et vous permet de les tester en cliquant sur le bouton **`Test`**.

<br/>

> ℹ️ **REMARQUE**<br/>
> Pour modifier une clé API, mettez à jour la variable d'environnement dans votre configuration système ou Docker, puis redémarrez le serveur ou le conteneur.

> ℹ️ **REMARQUE**<br/>

> **Sauvegardes de configuration** (voir [**Paramètres généraux** → Sauvegarde de configuration](#general-settings)) peuvent intégrer les clés de fournisseur **résolues** dans le `config.json` du fichier ZIP. La restauration de ce ZIP ne copie **pas** ces clés dans le fichier de configuration persisté du serveur — les clés actives proviennent toujours de l'environnement et de l'état du fichier existant, comme décrit ci-dessus.

<br/>

**Application de bureau**

Utilisez **Configuration API** pour stocker les clés API de chaque fournisseur que vous utilisez. Pour Oll anima, saisissez l'**URL de base** au lieu d'une clé API.


<br/>

> 💡 **Conseil** <br/>
> Si vous ne souhaitez pas utiliser une clé API ni payer pour l'utilisation, vous pouvez [télécharger Ollama](https://ollama.com) et exécuter des modèles (comme `translategemma:4b`) localement sur votre machine gratuitement. En alternative, vous pouvez créer un compte OpenRouter gratuit (sans carte de crédit requise) pour utiliser leurs modèles gratuits, ou obtenir une clé API gratuite auprès de Cerebras, Google, Groq ou Mistral AI.

<br/>

- Ajoutez uniquement les fournisseurs dont vous avez besoin. Dans **Paramètres** > **Modèles**, chaque identifiant de modèle commence par le nom du fournisseur (par exemple `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Pour ajouter une clé API, saisissez la valeur dans le champ de texte et cliquez sur **`Enregistrer`**. Pour remplacer une clé existante, cliquez sur **`Modifier`**. Pour vérifier qu'une clé fonctionne, cliquez sur **`Tester`**. Pour l'URL de base d'Ollama, cliquez toujours sur **`Tester`** afin de vérifier la connexion.

<br/>

> ℹ️ **REMARQUE**<br/>
> Vous ne pouvez pas voir la valeur actuelle d'une clé API. Vous pouvez uniquement la remplacer en utilisant le bouton **`Modifier`**.
> Les clés API sont stockées chiffrées dans la configuration.

<br/>

<a id="about"></a>

### À propos

L'onglet **À propos** affiche :

- le nom de l'application
- le numéro de version
- la date de compilation
- un lien vers le référentiel du projet

<br/><br/>

<a id="common-issues"></a>

## Problèmes courants

Si quelque chose ne fonctionne pas comme prévu, vérifiez d'abord les points suivants.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### L'application ne traduira, ne réécrira ni ne transformera pas le texte

Vérifiez que :

- vous avez sélectionné un modèle dans la barre d'outils
- au moins un modèle est répertorié dans [**Paramètres** > **Modèles**](#models)
- votre configuration API fonctionne

Si vous utilisez l'application de bureau :

1. Ouvrez [**Paramètres** > **Configuration API**](#api-config).
2. Vérifiez qu'au moins une clé API est enregistrée.
3. Cliquez sur **Tester** à côté du fournisseur pour confirmer que la clé fonctionne.

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

- choisissez un modèle différent ;
- utilisez une entrée plus courte ;
- désactivez la **traduction en temps réel (pendant la saisie)** dans [**Paramètres** > **Paramètres généraux**](#general-settings) ;
- utilisez des modèles gratuits pour les tâches simples (voir [Modèles](#models)).

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### L'interface est dans la mauvaise langue

Cliquez sur l'icône de globe dans la [barre d'outils](#toolbar) et choisissez votre **langue d'interface** préférée.

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

- vous utilisez uniquement des **modèles gratuits** et que vous consultez les données de **coût** (celles-ci peuvent être nulles) ; les graphiques du nombre d'appels d'**utilisation** dans l'onglet **Résumé** nécessitent toujours des données de la période sélectionnée
- le **filtre temporel** sélectionné ne couvre pas la période durant laquelle les appels ont eu lieu — essayez **Tout** pour vérifier

Si les graphiques restent vides après avoir sélectionné **Tout**, vérifiez que des appels apparaissent dans l'onglet [**Historique**](#history) ou dans l'onglet **Tous les appels**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Le coût affiche « non disponible » ou semble incorrect

Lorsque vous utilisez des modèles via **OpenRouter**, l'application affiche vos dépenses réelles indiquées par OpenRouter.

Pour les **autres fournisseurs** (OpenAI direct, Anthropic direct, etc.), le coût est estimé à partir des données tarifaires publiées par OpenRouter. Si aucun tarif correspondant n’est trouvé pour un modèle, le coût apparaîtra comme **non disponible** et ne sera pas ajouté à votre total cumulé.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Le coût total ne correspond pas à la facture de mon fournisseur

Tous les montants indiqués dans l'application sont des **estimations fournies à titre indicatif uniquement**, et ne constituent pas des factures officielles.

Pour rapprocher le total de vos dépenses réelles sur OpenRouter, ouvrez [**Paramètres** > **Suivi des coûts**](#cost-tracking) puis cliquez sur **Synchroniser avec l'utilisation de la clé API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### La page Historique est manquante dans la barre latérale

L’option **Conserver l’historique des exécutions** peut être désactivée. Ouvrez [**Paramètres** > **Paramètres généraux**](#general-settings) et activez-la. Notez que son activation ne restaure pas les données d’historique précédemment supprimées.

<br/>

<a id="web-app-session-expired"></a>

### Application web : redirection inattendue vers la page de connexion

Votre session a pu expirer. Veuillez vous reconnecter. Si ce problème survient fréquemment, vérifiez la configuration du serveur concernant la durée de vie des sessions.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Panneau d'administration web : mot de passe oublié ou perdu

Ceci concerne l'**application web auto-hébergée** (Docker), et non l'application bureautique (Electron).

- Si un autre administrateur peut encore se connecter, celui-ci peut ouvrir [**Paramètres** > **Utilisateurs**](#users), sélectionner le compte, puis définir un **nouveau mot de passe**.
- Si vous êtes **bloqué hors du système** mais disposez d'un **accès shell** à la machine ou au conteneur, réinitialisez le mot de passe à l’aide de l’utilitaire fourni avec l’image (remplacez `transrewrt` si vous avez modifié le nom par défaut, et mettez le mot de passe entre guillemets s’il contient des espaces ou des caractères spéciaux) :

```bash
docker exec transrewrt reset-web-password '<nom_utilisateur>' '<nouveau_mot_de_passe>'
```

Le nom d’utilisateur administrateur par défaut est `admin`, si vous n’avez jamais créé d’autres comptes. Lorsque vous ne fournissez qu’un seul argument, il est traité comme le nouveau mot de passe pour `admin`.

Si vous exécutez l’application depuis un **dépôt source** plutôt que depuis Docker, utilisez :

```bash
pnpm run reset-web-password -- <nom_utilisateur> <nouveau_mot_de_passe>

Le script met à jour l'enregistrement de l'utilisateur dans la base de données SQLite (et peut créer l'utilisateur `admin` s'il est manquant). Après la réinitialisation, connectez-vous avec le nouveau mot de passe.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Le tableau de bord n'affiche aucune donnée pour les autres utilisateurs (web)

Seuls les **administrateurs** peuvent afficher les données de tous les utilisateurs via le filtre **Utilisateur**. Par conception, les utilisateurs standards ne voient que leurs propres activités.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### J'ai modifié une invite et perdu mes modifications

Lors de la modification d'une invite, cliquez toujours sur **Enregistrer** avant de cliquer sur **Retour à l'exécution**.

<br/><br/>

<a id="quick-tips"></a>

## Conseils rapides

- Commencez par [**Traduire**](#translate) pour vous assurer que votre configuration fonctionne avant de passer à [**Réécrire**](#rewrite) ou à [**Transformer**](#transform).
- Utilisez [**Réécrire**](#rewrite) pour améliorer quotidiennement le choix des mots.
- Utilisez [**Transformer**](#transform) lorsque vous avez besoin d'un flux de travail reproductible pour une tâche spécifique.
- Utilisez le [**Tableau de bord**](#dashboard) si vous souhaitez surveiller l'utilisation et les coûts.
- Utilisez l'option [**Historique**](#history) pour consulter les opérations passées ainsi que l'intégralité des textes d'entrée et de sortie.
- Exportez régulièrement vos invites si vous constituez une bibliothèque d'invites à préserver (voir [Invites de transformation](#transform-prompts)) ou si vous souhaitez les partager avec d'autres.

<br/><br/>

<a id="disclaimer"></a>

## Avertissement

Les noms et les icônes des produits appartiennent à leurs propriétaires respectifs et sont utilisés uniquement à des fins d'identification. Ce logiciel n'est pas affilié à, ni endossé par, l'une des marques mentionnées.

<br/><br/>

<a id="license"></a>

## Licence

Copyright © 2026 Waldemar Scudeller Jr.

[Licence Apache 2.0](LICENSE)