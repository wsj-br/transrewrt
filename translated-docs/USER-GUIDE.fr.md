---
translated_at: "2026-03-25T21:23:13.904Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Bannière Transrewrt](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Guide de l'utilisateur

<br/>

<a id="introduction"></a>
## Introduction

Transrewrt vous aide à travailler avec du texte de trois manières principales :

- **Traduire** - convertir du texte d'une langue à une autre.
- **Réécrire** - reformuler un texte dans un style différent, par exemple plus clair, plus court ou plus formel.
- **Transformer** - traiter le texte à l'aide d'instructions personnalisées basées sur l'IA, appelées « prompts ».

<br/>

Ce guide explique comment utiliser l'application une fois installée et en cours d'exécution. Pour les étapes d'installation, consultez le fichier **[README](README.fr.md)** principal.

<br/>

> ℹ️ **REMARQUE**<br/>
> Transrewrt est disponible sous forme d'application de bureau pour Windows et Linux, ainsi que sous forme d'application web auto-hébergée. Ce guide se concentre sur l'utilisation courante de l'application. Lorsqu'une information concerne uniquement une version, cela est clairement indiqué.

<small>**Lire dans d'autres langues :** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Remarque sur les traductions de l'interface et de la documentation :** Toutes les langues de l'interface, à l'exception de l'anglais (Royaume-Uni) d'origine,
> ont été traduites à l'aide de modèles d'IA ; certaines formulations peuvent être imprécises ou comporter des erreurs.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table des matières** 

- [Avant de commencer](#before-you-start)
  - [Comment obtenir une clé API OpenRouter gratuite (application de bureau)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Premiers pas](#getting-started)
- [Éléments principaux de la fenêtre](#main-parts-of-the-window)
  - [Barre latérale](#sidebar)
  - [Barre d'outils](#toolbar)
  - [Panneaux d'entrée et de sortie](#input-and-output-panels)
- [Traduire](#translate)
  - [Traduire du texte](#translate-text)
  - [Sélection de la langue](#language-selection)
  - [Paramètres utiles pour la traduction](#helpful-translation-settings)
- [Réécrire](#rewrite)
- [Transformer](#transform)
  - [Exécuter un prompt existant](#run-an-existing-prompt)
  - [Si vous n'avez encore aucun prompt](#if-you-have-no-prompts-yet)
  - [Créer rapidement un prompt](#create-a-prompt-quickly)
  - [Modifier un prompt](#edit-a-prompt)
  - [Tester un prompt avant de l'utiliser](#test-a-prompt-before-using-it)
- [Tableau de bord](#dashboard)
  - [Filtrer les données](#filter-the-data)
  - [Onglets du tableau de bord](#dashboard-tabs)
  - [Exporter les données](#export-data)
  - [Supprimer les enregistrements stockés pour un modèle](#delete-stored-records-for-a-model)
- [Historique](#history)
  - [Filtrer les données](#filter-the-data-1)
  - [Exporter les données de l'historique](#export-history-data)
- [Paramètres](#settings)
  - [Paramètres généraux](#general-settings)
  - [Modèles](#models)
  - [Langues](#languages)
  - [Suivi des coûts](#cost-tracking)
  - [Prompts de transformation](#transform-prompts)
  - [Utilisateurs](#users)
  - [Configuration de l'API](#api-config)
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
  - [Le tableau de bord n'affiche aucune donnée pour les autres utilisateurs (web)](#dashboard-shows-no-data-for-other-users-web)
  - [J'ai modifié un prompt et perdu mes modifications](#i-changed-a-prompt-and-lost-the-edits)
- [Conseils rapides](#quick-tips)
- [Avertissement](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Avant de commencer

Pour utiliser Transrewrt, vous avez besoin d'un accès à au moins un fournisseur d'IA. Les fournisseurs pris en charge sont : [OpenRouter](https://openrouter.ai) (qui regroupe de nombreux modèles), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, et [Ollama](https://ollama.com) pour les modèles locaux.

Vous n'avez pas besoin de choisir un modèle payant pour commencer. Dès que vous ajoutez votre clé API OpenRouter, l'application active automatiquement une option OpenRouter intégrée **gratuite**. Cela vous permet de commencer immédiatement à traduire, réécrire et transformer du texte. Vous pouvez également obtenir gratuitement une clé API auprès de Cerebras, Google, Groq ou Mistral AI.

En termes simples :

- Un **modèle** est le moteur IA qui effectue le travail. Les modèles sont indiqués avec un **préfixe de fournisseur** (par exemple `openrouter/…`, `openai/…`, `ollama/…`).
- Une **clé API** (ou, pour Ollama, une **URL de base**) est le moyen par lequel l’application contacte ce fournisseur.

Si vous utilisez l’**application de bureau**, ajoutez les clés dans [**Paramètres** > **Configuration API**](#api-config) pour chaque fournisseur utilisé. Pour une utilisation uniquement avec OpenRouter, consultez ci-dessous [Comment obtenir une clé API](#how-to-get-an-api-key-desktop-app). Si vous ne souhaitez pas utiliser de clé API, vous pouvez installer Ollama (depuis [ollama.com](https://ollama.com)) et utiliser des modèles locaux, comme `translategemma:4b`.

Si vous utilisez la **version web**, les fournisseurs sont configurés par le propriétaire du serveur via des variables d’environnement, vous ne pouvez donc pas entrer de clés API directement dans l’application.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Obtenir une clé API OpenRouter gratuite (application de bureau)

Si vous utilisez l’application de bureau, suivez ces étapes :

1. Rendez-vous sur [OpenRouter](https://openrouter.ai) avec votre navigateur web.
2. Créez un compte ou connectez-vous.
3. Ouvrez la page [Keys](https://openrouter.ai/keys).
4. Cliquez sur le bouton pour créer une nouvelle clé API.
5. Donnez un nom à la clé afin de pouvoir l’identifier plus tard.
6. Copiez la nouvelle clé API.
7. Revenez à Transrewrt et ouvrez **Paramètres** > **Configuration API**.
8. Collez la clé dans **Clé API OpenRouter** (sous **Paramètres** > **Configuration API**).
9. Cliquez sur **Tester la clé OpenRouter** pour vérifier qu’elle fonctionne.

<br/><br/>

<a id="getting-started"></a>
## Premiers pas

Si vous utilisez Transrewrt pour la première fois, suivez cet ordre :

1. Ouvrez l’application.
2. Si nécessaire, choisissez votre **langue d’interface** à partir de l’icône du globe.
3. Si vous utilisez l’**application de bureau**, ouvrez [**Paramètres** > **Configuration API**](#api-config), ajoutez une clé API pour au moins un fournisseur (par exemple OpenRouter), puis cliquez sur **Tester** pour vérifier que cela fonctionne.
4. Ouvrez [**Paramètres** > **Modèles**](#models) et ajoutez un ou plusieurs modèles à **Modèles sélectionnés**.
5. Ouvrez [**Paramètres** > **Langues**](#languages) et choisissez vos **Langues principales** si vous souhaitez que vos langues les plus utilisées apparaissent en premier.
6. Allez dans **Traduction** et effectuez une traduction simple pour confirmer que tout fonctionne.
7. Une fois que cela fonctionne, essayez **Réécriture**, puis **Transformation**.

Cet ordre est important. Il évite le problème le plus courant en cas de première utilisation : essayer d’exécuter une tâche avant que l’application n’ait une connexion API opérationnelle ou un modèle sélectionné.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Parties principales de la fenêtre

L’application est divisée en trois zones principales :

- La **barre latérale** sur la gauche.
- La **barre d’outils** en haut.
- La **zone de travail** au centre.

<br/>

<a id="sidebar"></a>
### Barre latérale

Utilisez la barre latérale pour naviguer dans l’application. Vous pouvez réduire la barre latérale pour gagner de l’espace en cliquant sur l’icône à côté du logo de l’application.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/fr/sidebar.png" alt="Barre latérale de l'application" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduction</strong> ouvre l’espace de travail de traduction.</li><br/>
        <li><strong>Réécriture</strong> ouvre l’espace de travail de réécriture.</li><br/>
        <li><strong>Transformation</strong> ouvre l’espace de travail avec invite personnalisée.</li><br/>
        <li><strong>Tableau de bord</strong> affiche les informations d’utilisation et de coût.</li><br/>
        <li><strong>Paramètres</strong> ouvre le panneau des paramètres.</li><br/>
        <li><strong>Historique</strong> affiche l’historique des utilisations avec le texte saisi et le texte obtenu.</li><br/>
        <li><strong>Utilisateur</strong> affiche le nom de l’utilisateur connecté (version web uniquement).</li>
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

Certains modèles gratuits peuvent ne pas toujours être disponibles — parfois ils sont hors ligne ou soumis à une limite d'utilisation. Si cela se produit, l'application supprimera automatiquement ce modèle de votre liste disponible. Pour contrôler les modèles affichés, rendez-vous dans [**Réglages** > **Modèles**](#models) et modifiez votre liste de modèles.  
Vous pouvez également ouvrir directement les paramètres du modèle en cliquant sur l'icône du fournisseur située à gauche du nom du modèle dans la barre d'outils.

<br/>

L'**icône du globe + code langue** permet de modifier la langue de l'interface de l'application (menus, boutons, etc.). Elle **ne change pas** les langues utilisées pour les traductions dans **Traduire**.

  ![Sélecteur de langue de l'interface](../images/screenshots/fr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panneaux d'entrée et de sortie

La plupart des espaces de travail utilisent un volet **Entrée** à gauche et un voletidepez110📌EDHOLDHOTHOTHOTHOTHGTCTCTCTCTCTCTCTCTCTIBCTCTCTCTCTCTCTCTCCTCCCTCCTCCTCTCTLILICCLMLICCLILLCZLCGLCLCLGLCLCCLCLGCLCLCLCLCGLCLCLCLCLCLCLICLCLCLCLLCLCLCLCLCLCLLCGLCLGLCCLCLLLLLCLLCLCLCLCLCLCLCLCLCLCLCLLCLCKLCLCLCLLLCLCLCLCCLCLCZLCLLCLCLCLCLCLCLLCLCLCLCLCLCLCLCLCLCLSCBCLLCLCCLCCLLCCLLCLCLCLLCLCLLCLCLCLCLLCLCLCLCLCCLCLCLCCLCCLCLCLCLCLCLCLCLCZCMLCLCLCLCLGCLCLCLMCLCLCLCLCLCLCLCCLCLCLCLCLCCCLCCLCLCLCLLCLGLMLCLCLCLMLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLLCLCLCLCLCPLCLCLCLCLCCLCLCLCLCLMLCMLCLLCLCLGLCLCLCLLCLCCLCLMLCLCLCLCLALCLCLLCGLCLCLCCLCLLGLCLCLCLCLCLMLCLTCLCGLCLCLCLCLLCLCLCLCLCLCLCLCLCLSSCLCLCLCLCLCLSLMCLCLGLCLILCLCLCLCLNCLCLCLLLLCCLCLCCLGLLCLLCMLLCLCLGLCLCLCCLCLCLLCLGLMLCLMLCLCLSLCLCLCLCLCLMCCLCLCMLCLCCLCLLCLLCCLLCLLCLCCLCLICCLDCLLLCLCCLCLLLGLCCLCLCLCLCLCLLCCLCLCLCLCLLCCLKLLCLCLCLLCLCLLCLSSCLLGCLCLCLLLCLCLCLCLCLLCLCLCLCLCLCCLLCLCLCLCLCLGLLCCLCLCLCLCCLCLCLLLLLCLLMLCLCLCCLCLCLCLCLCLCLCLCLGLCCLSCBCLLCLCLMLCCLCLBCLCLCLCLCMLCLCLCLCCLCLLLCLCGCLCLDCLLLLCCLCCLGMLCCLCCLLCLCMLCLCLGCCLLCLCLCLCLCLMLLCLCLCCLLLCLCLCCLLGCCLCLCLCLCLMLCLDCLCMLCCLCLGLCMCLCLCLCLCCLLCLCLCLCGLCLCLCLCLLCLCLLCLCLCLCCLCLCLCLLCLBCLLCLCHCLCLLDCLCCLLLLLQGCCLCCLCLCCLGLCLCLCLGLCCLCLCLCLCCLQDCCLGLCCLCMCLCLCLCCLCLCCLLCGLCCLLCLCCLCLCLLCCLLCLCLCLCLCCLCLLGLCLCLCLCCLLGLCCLCLCLCLCLLCLCLCLCMCLCLLCLCLCLCLCLCLCCLCLLCLLCCLCLCLCCLLCLCLCLCLCLCLCLMLCLCLCLLCLCCLLCLGLCLCLLCLCLCLCLCLCLLCLCLCLDCLCLLGLCLCDLCLCCLGCLCCLCLLCLCCLLCLCLCCLCLMCLCLCLLCLLCCLGMLGLCLLCLCLQLCLCLKDCCLMLCLCLCLKCLCLCLCCLLCLCLCLLCMLLCLCLCLCLCLLCCLCLLCCLCLCLCLCLCLCLCLCLCCLLCLCLCLCLLLLLLCLCLCCLCLCLCGLLCLCLLLLLCCLMLCGLCLCLCLDCCLCLCLCCLCLCLLCLCLCLCLCLCLCLCLCLCLGLALCMLCLCLCLCCLCLCLCLCLCLCCLCLCLCLCLCLCLCLZCCLMLCLGLCLCLCLLCLCLCLCCLCLCMLCCLDCLCLCLCLLCLLCLCCLCLCLCLCLMLCLCCLLCLLCSCCLLCLALCLCLCLCLULCLCCLCLCLMLCCLCLLCLGLCLDCLCLCLCLMLLCGLCLCCLCLCLWCLCLCLLLLLCLCLCLGLCMLCLLGLCLCLDMLLLCLDCLCLCLCLCLCLCLCLCLMCLCLCLCLCLLCLCLCLCLCLLLCLDLCLCLCLCLCLCLCLKCLCLCLCLGMLCLCLCLLCLLCLCTCLCCLCLCLMLCLCLLCLCLCCLCLCLCLLCLLCLLLCLLCCLCLCCLCLCLCLLCLCCLLCLCLLGLCLLLLLCCLDCLCCLCLLLCLCCLCLCLCLCLLCLCMLCLCLLCLCCLLSCLCLLCLLCLSLCLCLCLCLCLCLCLCLLCMLCLCCLCLCLCLCLCLCLCLCLCCLMELCLCMLCLCLCLCCLCLCLLCLCLCLCLLCLCLCLCLMLCLCLOCLCLCLCLCLLCLCLCLLCLGLCLCLMLCLCLMLLCLCLCCLILSCMCLLCLCCLCLCKCLLLLLCLCLLCLLCMLLCLCLLCLCLLCMCLCLCLCLCLCLMCLLCLCLLCLCLGLCLLCLCLLLLGLCLCL.CLCLCLGLLCLCCLGLCLCLCLCLCLCLCLLLCCLKCLLCLCLCCLCLCMLCLCCLGLCLCLCCKLCCLLLLLLLLLLLCLGCLCCLLCCLGLCLCLCLCLCCLMLCLCLCLCLCLCCLCLCLCLCLCCLCLGLCLMCLLCSSLCMLCLGLMLCLCLCLMCLCMLCLCLLCLLCMLLGLCLBCLLCLCLCLCLMLCLCLLECLCLCLMLCLKLCLCLLLCLLGLCLCLLLLLCLCCCMLCCLCLLCLCLCCLCLCLLCLCQLCCLCCLILCLCCLLCLCLCLLLLLLCLLCLCLLCLCCLCLCLLCLGLCLCLCLCLCLCLMLGCLLLCLCLDLCLCLCLCLMLLCLCLCLCLLCLCLDLCLSCLLCLCLMLCLCLCLCLGMLCLCCLILMCLCLCLICCLFLIADCLCLCLFLGCLCLMLCLLCLCLCLCLLCLCLCCLCLDCLLCLCLILCLCLCLCLCLCLMCLCLCLLLLLJLCLCLCMLLCLCLLCLCLCCLLCLCLCLCLCLCLCLCLLCRLCLGLCLLCLCLCLCLLCLCLCLGLCLCLCLCLCLLLCLCMLCLCLCLCLCMCLCLMLCLCLCLCMLCLCLCLCCLCLCLLCLCLCPLCLHLCLCCLLCLILCLCLCCLCLCLCLCLCLCLCLCLLLLSTCLMCCLCLCLCLCLCLCLLCMLCLCCLCLLCLCLCLCLCLCLCLCMCLCLSCMLCLGCLCLDLKCLCLLCLCLCCLLLMLCLCLCLCLDCLCLCLCLCLSCXILCLCLSCULCLLCMLCLCLCLCLCCTCLCLCLCLCLFCLCLCLCLALCLCLCLGLCLCLCCLCLCLCLCLCGCLGCLNCLCLCMCLCLLCCLCLCLCLDCLCLCLCLFLCLCILCLCLLLLLCLCLCDCCLCLALLCLCLCLCLCLCCLCCLCLCLKCLCLCLDGLLCLCCLKLCLCLCLCLCLCLCLCLCLCLCLCLCLCLFLCLCMLCLCLCLJCLHLCLLLLLCLCLCLCLCLCLCLCLCLCLCLCLLCLDCLCDCLCLCLCLMLCLCLCLCLCCLCLMLCLCLCLCLDCCLCLCLCLCLCLCLCLLLCLLCMLCLCCLCLCLMCLCLCLCLLLLCLCLCLCLCLCLGCLCLCLCLCLCLCLCLMCLCLCLCLCLCLLCCLCLCLCLCLCLCLCLCLCLGLKCLCLCLCLCLLLCLCLFLDLCLCLCLMVLCLCLCLCLLCCLCLCLCLCLCLCMELLMLCLCLCLSLCLGLCLCLCLCLCLMLCLCLCLLLLCLCLCLGCLCLCLCLCLCLCLCLICCLCLCLNCLCLCLCKCLCLCLLCCLCLCLCLCLCLCLCCLLCLCLLCCLOLCLELCLLCLCLGCLLCMLCLCLCLCLCLCLCLLCCLCLCLLCLCLCLSCCLLCLCLSLCLCLCLCCCCCLCLCLCLCLCLULLLLLCCLCLCLCLCPLCMCLCLCLCLCLCLCTCLCLCLLLLLCLCLCLLCCLCLCLCLCLCLCLCLCLCLCLCLLCLCLCLCLMLCLCLLLLLCLCLMLCMCLCCCLCLCLMLCLLCLCLCLCLCLGLCLCLDLCLLCCLCLCLLCPLCLCLCLCLCLCLCLGLCLCLCLCMLLCLCLCLCLGCLCLCLCLCLCLLCLCLCLCMLCLCLCLCLCLCLCLCLCLCLCLCLMCLCLCLCLCLCLCLGLCLCLCLCLCLGLCLCLCLCLCCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCCLLCCLSCCLLLLLCLLCLCLCLCLCLCLCCCLCLLCLLLCLLLLLCLCLCLCLCLGLCLCLCLCLCLMLCLCLCLCLCLMLCLCCMLCLCLCLLGCLCLCLMLGCLCLCLCLCLCLCLCLQLCLCLGLCCLLLCLCLCLCLCCLCLDLGLCLCLCLCLCLCLCLCLCLCCLCRLCLCLCLCLCLLLCLCLCLCLGLCLCLCGCLLCLCLCLCLGLCCLCLCLCLCLLLCLCLCCLCLCLCLCLCLCLBLCLCLCLCLLCCHCGLCLCLLGCLCLCLCLCLCLCLCLCLCLCLCLCLLLLLLDCLGLCLCLCLCLCLCLCLCLCLCLCLCLCLLCCLLLCLLLCLHCLCLCLCLCLCLCLKLCLKCLCLDCLCLCLCLCLCLCLCLCLCLCLCCLCLCLCLCCCLCLCLCLCLCLCLCLLCCLCCLCCMCLCLCLCLCLCLCLCLCLCLCLCLLCLCLCLCLMLCLCLCLCLCLCLCLMLCLCLCLCLGLCLCCLCLCLCLCLCLCLCLCLCTCLCLCLCLCLCLCLCLHCLCLCLCLLLLLCLCLMLCCCCCLMLDLCLMLCLCLCLCLCLCLCLCLCCLLLMLCLMLCLCLCLCLCLPLCLCCLCLLLCCLSCCLCLCLCLCLSCULGCLCLCLCLCLCLCLCLCLCLCLDMLCLCLCLCLCLCLCLCLCLMLCLCLCLCLCLCLCLCLCLCLCLCLCLCCLCLCLLCCLCLCLCLSCCLLLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCMLCLCLLCLCLCLCMCLCLCLCLCCLCCLCCLCLCLCLLCLGLLCLCLCLCLCLCLCLCLCLCGLCLLCLCLCLCLMLCMLCLCLCLCCCLLLCLCLCLCLZCLCLCLLCCLCLCLCLCLCLCLCLCLCLCLCLCLCLLLLLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLKCLCLCLCLCLCLCLCLCLCCLCLCLCLCLCLCLCLLLCLCLCLCLGLCLCLCLCLCLCLCLCLCLLCLCLCLKLCLCLCLCLCLCLLCLCLCLCCLCLCLCCLCLLLLLCLCLCLCLCLCLCLCLCLCLULCLCLCLLCCLCLCLLLCLCLCLCLCLLLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLMNCLCLLCLCLLCLCLCLCLCHCLCLCLCLCLCLCCLLTLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLSLCLCLCCLCLCLGLCLCLLLCMCLCLCLCLMLCLCLCLCLCLCLCLCLCLCLCCLCLMLCLCLCCLSSCLCLCLMLCLCLMLCLCLCLLECLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCMCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLLCLCLCLCLCLGCLCLCLLCCLCLCLCCLCLCLCLCMLCLCLLLLLCLCLGLCLCLCLCLLLLLCLCLCLLLCCLLLLLLLLLLLCLGLCLCLCLCLCLLCLCLMLCLLCLCLLLLLLLLLLLLLCLCLCLDCCLCLLLLLCLCLCLCLCLCLCLLLLLCLCLCLCLCLCLLLCLMLCLZCLCLLLLLCLLMCLCLLLLLCLLLCLCLLLCLCLCLCLCLLLLLCLCLLLCLCLCLCLCLCLCLCLLLLLCLDLCLCLCLKCLCLCLLCLCLCLCLCLCLCLCLLCLCLCLCLHCLCLCLCLCLCLCLCLCLCLCLCLCLCLLMLCLCLCLLLLLCLCLLCCLCLCLCLCLCLCLCLCLCLCLCLCLLCLCLCLCLCLCLLCLCLCLCLMLCLCLCLCLCLCLCLCLGLCLCLCLCLCLCLCLCLCLCCLCLCLCLCLLCCLGLCLLLCLILCCLLLCLCLLLCLCTCLCLCLCCLCLCLCLCLCLDLCLGCLCLCLCLLCLCLCLCLCMLCLCLCLCLCLCLLCMNCLALCLCLCLCLLCLCLCLCLGLCLCLLCLCLCLCLCLCLCLCLDLCLCLCLOCALLLLLCHCLCCCCMLCLCLCLICCLLCLCLCLCLCLLCCCCCLCLCLCLCLGLCLCLCLCLCLCLLCLCCLCLCLCLCLCLLCCLCLLCLCLCLCLCLCLCLCLCLCLDLCLCLCLLLLLCLHLLLLLCLCLCLLLLLCCLCLCLCLCLHCLCLCLLCLCLCLCLLCLLLLLCLCLCLCLMLELCCLCLCLCKCLCLCLCLCLCLCLCLCLCLCLCLCLCLULCLCLCLCLCLCLCLCLCLCLCLCMCLCLCLCLCLMLCLCLCLCLCLCLCCLLCLCLCLCLCLCLCLCLCLCLCLCLLCLCLLCLCLCLCLCLCLCCLCLCLCLCLCLCLCLCLCLCLMLCLCLCLCLCLCLCLCLCLLLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLCLSCCLCLCLCLCLMCLCDLMLCLCLCLCLCLCHCLCLDCLCLCLCLCLCLMLCLCLCLMCLLCLCCCCCLLCLCLCLCLCLLDCLCLCLCLLCLCCLCLCLMLCLCLLCCLCLGLCLCLCLCLCLCLCLCLCLCLCLCLCLLCLCLLLCLLCLCLDDCMCLCLCLCLCLCLLLCLCLCLCLMLCLCLCLCLCLLLCLCLCLCLLLCLCLCLCLCLLLLLCMCHCLCLLCLLLCLCLCLCLLCLCLCLCLCLCLCLCLMLCLMLCLCLCLCLLCLCLCLCLCLLCTCLMLCLCLCLLCLCLLLCLCLLLCLCLLLLLCCLCLCLCLCLCLULCLCLCLCMCLCLCLCLCLCLCLGCLCLCLZLCLCLCLCLCLCLCLCLCLLLLLGCLCLCLLLCLCLCLCLCLCLCLCLCLGLCLCLSLCLCLCLCLCLCLMLCLCLCLCLLCCLMLCLCLCLCLCLLLLLCLCLCLCLCLCLLLLLCLCLCLCLLLLCLCLCLCLCLLLLLCLCLCLHCLCLCLLCCLCLCLLLCMCLCLCLLCLCLLMLCLCLCLCLCLCCLCLCLCLCLCLCLCLCLGLCLCLCLLLLLCCTCLCLCLLCLCLMCLCLCLKCLCLCLGLCLCLCLCLCLCC-LCLCLCLLLCLCLCLULCLGCLLCLCLCLCLCLGLCLCLDCLCLLLLLLLCCLCLCHCLLCOMCLCLILCLCLCLCLLLLLLLLLCLCLCLMLCL

## Transformer

Utilisez **Transformer** lorsque vous souhaitez que l’IA suive un ensemble d’instructions personnalisées.

![Espace de travail Transformer](../images/screenshots/fr/transform.png)

Il s'agit de la zone la plus souple de l'application. Vous pouvez l'utiliser pour des tâches telles que :

- résumer des notes
- transformer un texte brut en e-mail soigné
- extraire des points clés
- convertir un texte dans un format spécifique
- toute autre action personnalisée sur le texte saisi

<br/>

<a id="run-an-existing-prompt"></a>
### Exécuter une instruction existante

1. Ouvrez **Transformer**.
2. Choisissez une instruction dans la liste d’instructions.
3. Si une zone **Langue cible** apparaît, sélectionnez une langue si vous le souhaitez.
4. Saisissez ou collez du texte dans **Entrée**.
5. Cliquez sur **Transformer**.
6. Lisez le résultat dans **Sortie**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Si vous n’avez aucune instruction pour le moment

Si votre liste d’instructions est vide, cliquez sur **Charger des exemples d’instructions**. Cela ajoute des exemples intégrés afin que vous puissiez commencer rapidement.

<br/>

> ℹ️ **REMARQUE**<br/>
> Les exemples d’instructions sont fournis en anglais. Après les avoir chargés, vous pouvez modifier une instruction et utiliser **Traduire l’instruction** pour la traduire dans votre langue.

<br/>

<a id="create-a-prompt-quickly"></a>
### Créer rapidement une instruction

La méthode la plus rapide pour créer une instruction est la suivante :

1. Cliquez sur **Nouvelle instruction**.
2. Cliquez sur **Générer une instruction**.
3. Décrivez ce que vous souhaitez que l’instruction fasse.
4. Choisissez un modèle.
5. Laissez l’application créer un brouillon pour vous.
6. Vérifiez le brouillon puis cliquez sur **Enregistrer**.

![Générer une instruction](../images/screenshots/fr/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Modifier une instruction

Lorsque vous créez ou modifiez une instruction, l’éditeur s’affiche à gauche et une zone de test apparaît à droite.

![Éditeur d’instruction de transformation](../images/screenshots/fr/transform-prompt-edit.png)

Les principaux champs sont :

- **Nom de l’instruction** : le nom affiché dans la liste des instructions.
- **Instructions de l’instruction (facultatif)** : un court indice affiché à l’utilisateur lors de l’exécution de l’instruction.
- **Rôle de l’IA** : le rôle général attribué à l’IA, par exemple « Vous êtes un assistant utile. »
- **Instructions de l’IA (une par ligne)** : les règles spécifiques que vous souhaitez que l’IA suive.
- **Description du résultat** : un mot court décrivant le résultat, comme « résumé » ou « reformulation ».
- **Température (0,0 → 1,0)** : le comportement du modèle ; voir ci-dessous.
- **Demander la langue cible** : ajoute un sélecteur de langue cible lorsque l’instruction est exécutée.

Si le terme technique **Température** est nouveau pour vous, pensez-y comme suit :

- Une **basse** température donne des résultats plus stables et prévisibles.
- Une **haute** température donne plus de variété et de créativité.

Vous pouvez également utiliser :

- **`Générer une instruction`** pour créer un nouveau brouillon à partir d’une description simple
- **`Améliorer l’instruction`** pour perfectionner une instruction existante
- **`Traduire l’instruction`** pour traduire les champs de l’instruction

<br/>

> ⚠️ **ATTENTION**<br/>
> Cliquez sur **`Enregistrer`** avant de cliquer sur **`Retour à l’exécution`**. Si vous revenez en arrière sans enregistrer, vos modifications seront perdues.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Tester une instruction avant de l’utiliser

Le panneau de test situé à droite vous permet d'essayer votre instruction avec un texte d'exemple avant de l'utiliser dans votre travail quotidien.

Cela est utile lorsque :

- vous créez une nouvelle instruction
- vous comparez deux versions d’une instruction
- vous souhaitez vérifier le ton, la longueur ou le format du résultat

<br/>

> ℹ️ **REMARQUE**<br/>
> Vous pouvez exporter et importer les instructions enregistrées dans [**Paramètres** > **Instructions de transformation**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Tableau de bord

Utilisez **Tableau de bord** pour voir l’utilisation que vous faites de l’application et les coûts associés (pour les modèles payants).

![Résumé du tableau de bord](../images/screenshots/fr/dashboard-summary.png)


<br/>

> ℹ️ **REMARQUE**<br/>
> Si vous utilisez uniquement des modèles gratuits, les graphiques liés aux coûts seront vides.

<br/>

<a id="filter-the-data"></a>
### Filtrer les données

Utilisez les boutons de filtre en haut pour modifier la période affichée.

![Filtres du tableau de bord](../images/screenshots/fr/dashboard-filter.png)

<br/>

> ℹ️ **REMARQUE**<br/>
> Le filtre **Utilisateur** n’est visible que pour les administrateurs dans la version web. Les utilisateurs standard ne verront pas ce filtre, et il n’est pas disponible dans l’application de bureau.

<br/>

<a id="dashboard-tabs"></a>

### Onglets du tableau de bord

- **Résumé** vous donne un aperçu de l'utilisation et des coûts.
- **Par utilisation** décompose l'activité par langue de traduction, mode de réécriture et invite de transformation.
- **Par modèle** indique quels modèles vous avez utilisés et leur coût.
- **Par jour** affiche les totaux quotidiens.
- **Tous les appels** montre l'historique complet des appels et vous permet de l'exporter.

<br/>

<a id="export-data"></a>
### Exporter des données

Les tableaux du tableau de bord peuvent exporter les données au format :

- **JSON**
- **CSV**
- **XLSX**

Cela peut être utile si vous souhaitez consulter l'activité en dehors de l'application ou partager un rapport.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Supprimer les enregistrements stockés pour un modèle

Dans l'onglet **Par modèle** ou **Tous les appels**, vous pouvez supprimer les enregistrements stockés pour un modèle en cliquant sur l'icône « corbeille ».

> ⚠️ **AVERTISSEMENT**<br/>
> La suppression des enregistrements stockés est irréversible. N’utilisez cette fonction que si vous êtes certain de ne plus avoir besoin de cet historique.

Pour supprimer toutes les données ou supprimer des enregistrements selon leur ancienneté, rendez-vous dans [**Paramètres** > **Suivi des coûts**](#cost-tracking). Vous y trouverez des options pour supprimer toutes les données stockées ou uniquement celles antérieures à une certaine date.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historique

Cliquez sur **Historique** pour visualiser l'historique de vos actions dans **Transrewrt**, y compris les données d'entrée et de sortie de chaque opération.

![Page Historique](../images/screenshots/fr/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrer les données

**Historique** utilise les mêmes filtres que la page **Tableau de bord**. Utilisez-les pour sélectionner la plage horaire.

![Filtres du tableau de bord](../images/screenshots/fr/dashboard-filter.png)

<br/>

> ℹ️ **REMARQUE**<br/>
> Le filtre **Utilisateur** n’est visible que pour les administrateurs dans la version web. Les utilisateurs normaux ne voient pas ce filtre, et il n’est pas disponible dans l’application de bureau.

<br/>

<a id="export-history-data"></a>
### Exporter les données d’historique

La page d’historique peut exporter les données filtrées aux formats :

- **JSON**
- **CSV**
- **XLSX**

Cela peut être utile si vous souhaitez consulter l'activité en dehors de l'application ou partager un rapport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Paramètres

Ouvrez **Paramètres** depuis la barre latérale pour personnaliser le comportement de l'application.

Les onglets disponibles dépendent de la plateforme et de votre rôle :

  | Onglet                     | Bureau | Web (admin) | Web (utilisateur standard) |
  |----------------------------|:------:|:-----------:|:--------------------------:|
  | Paramètres généraux        |  oui   |     oui     |             oui            |
  | Modèles                    |  oui   |     oui     |             oui            |
  | Langues                    |  oui   |     oui     |             oui            |
  | Suivi des coûts            |  oui   |     oui     |              —             |
  | Invites de transformation  |  oui   |     oui     |             oui            |
  | Utilisateurs               |   —    |     oui     |              —             |
  | Configuration API          |  oui   |     oui     |              —             |
  | À propos                   |  oui   |     oui     |             oui            |

<br/>

> ℹ️ **REMARQUE**<br/>
> Dans la version web, chaque utilisateur possède sa propre configuration. Les paramètres tels que les modèles sélectionnés, les langues, les options générales et les invites de transformation sont stockés par utilisateur. Les modifications que vous effectuez n’affectent pas les autres utilisateurs.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Paramètres généraux

Utilisez **Paramètres généraux** pour contrôler le comportement du clavier, l’enregistrement des détails d’exécution dans **l’Historique**, ainsi que l’apparence.

**Comportement**

- **Comportement de la touche ENTRÉE** permet de choisir si `Entrée` lance la tâche ou insère un saut de ligne.
- **Traduction automatique au collage** déclenche la traduction dès que vous collez du texte.
- **Copier automatiquement le résultat dans le presse-papiers** copie automatiquement les résultats réussis.
- **Traduction en temps réel (pendant la frappe)** traduit pendant que vous tapez.
- **Délai d’attente (ms)** définit la durée d’attente pour la traduction en temps réel.

**Historique**

- **Conserver l’historique des exécutions** détermine si chaque traduction, réécriture et transformation enregistrent le **texte d’entrée et de sortie** pour la vue [**Historique**](#history) dans la barre latérale. Désactiver cette option demande une confirmation ; si vous confirmez, les textes d’historique stockés sont supprimés de la base de données.
- **Supprimer les données d’historique** vous permet de supprimer les textes stockés en fonction de leur ancienneté (par exemple, plus vieux que quelques mois, ou **toutes les données (effacer)**) via **Supprimer les données**. Cela n’affecte que les textes d’exécution sauvegardés pour la vue **Historique** ; cela ne supprime **pas** les totaux de coût ou d’utilisation. Pour supprimer ou réduire les données de **coût**, utilisez [**Paramètres** > **Suivi des coûts**](#cost-tracking).

**Apparence**

- **Afficher les informations de coût sur les actions** contrôle l’affichage du coût par opération (si disponible) et du coût total sur les panneaux de sortie de Traduction, Réécriture et Transformation.
- **Nombre de décimales pour le coût** modifie l’affichage des décimales du coût.
- **Web uniquement :** **afficher une marge autour de l’application** ajoute un espace supplémentaire autour de l’interface.
- **Famille de polices** modifie la police utilisée dans les panneaux de texte.
- **Taille** modifie la taille de la police.

<br/>

<a id="models"></a>

### Modèles

Utilisez **Paramètres** > **Modèles** pour choisir quels modèles apparaissent dans la barre d'outils.

![Onglet Modèles des paramètres](../images/screenshots/fr/settings-models.png)

La page contient deux listes :

- **Modèles disponibles** à gauche
- **Modèles sélectionnés** à droite

Les contrôles utiles incluent :

- **Rechercher des modèles...** pour trouver un modèle par nom
- Les boutons **Fournisseur** pour affiner la liste selon un moteur (OpenRouter, OpenAI, Ollama, etc.)
- **Uniquement gratuits** pour afficher uniquement les modèles gratuits
- **Actualiser** pour recharger la liste
- **Tout développer** et **Tout réduire** lorsque vous triez par fournisseur

Les identifiants de modèles incluent le préfixe du fournisseur (par exemple `openrouter/…` contre `openai/…`). Les badges tels que **OpenAI (OpenRouter)** ou **OpenAI (direct)** indiquent comment le trafic est routé.

> ℹ️ **REMARQUE**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) est un modèle routeur, pas un modèle de discussion général : sa réponse est un JSON décrivant les corps de requêtes de l'API OpenRouter (par exemple un tableau `requests` contenant `model` et `messages`). Si vous l'utilisez pour **Traduire**, **Réécrire** ou **Transformer**, le panneau de sortie affichera ce JSON au lieu d'un texte finalisé. Choisissez un modèle de texte normal pour ces tâches. Consultez la [page du modèle Body Builder](https://openrouter.ai/openrouter/bodybuilder) sur OpenRouter.

Actions :

- Pour ajouter un modèle, cliquez sur **Ajouter** ou n'importe où dans l'entrée.

- Pour supprimer un modèle, cliquez sur **X** à côté de celui-ci dans **Modèles sélectionnés**, ou sur **Sélectionné** dans l'entrée des Modèles disponibles.

- Pour effacer la liste, cliquez sur **Tout désélectionner**. Le modèle gratuit obligatoire restera dans la liste.

<br/>

> ℹ️ **REMARQUE**<br/>
> Si vous ne souhaitez pas créditer immédiatement votre compte OpenRouter, commencez par activer **Uniquement gratuit** et sélectionnez les modèles gratuits (aucune carte bancaire requise). Vous pouvez aussi utiliser Ollama pour exécuter des modèles localement sans clé API.

<br/>

<a id="languages"></a>
### Langues

Utilisez **Paramètres** > **Langues** pour organiser les listes de langues utilisées dans l'application.

- **Langues favorites** sont épinglées en haut des listes de langues dans **Traduire** et **Transformer**.
- **Langue personnalisée** vous permet d'ajouter une langue qui ne figure pas dans la liste intégrée.

Si vous ajoutez une langue personnalisée, elle apparaît dans les sélecteurs de langue avec les options intégrées.

<br/>

<a id="cost-tracking"></a>
### Suivi des coûts

Utilisez **Paramètres** > **Suivi des coûts** pour gérer les informations de coût.

- **Coût total** affiche le total cumulé.
- **Copier la valeur** copie le total dans le presse-papiers.
- **Réinitialiser le coût** remet le total stocké à zéro.
- **Synchroniser avec l'utilisation de la clé API** ajuste le total selon l'utilisation indiquée par votre compte OpenRouter (OpenRouter uniquement).
- **Utilisation de la clé API** affiche les détails d'utilisation OpenRouter, s'il est disponible.
- **Supprimer les données de coût** supprime toutes les données ou uniquement celles antérieures à une date choisie.

**Suivi des coûts :** Lorsque vous utilisez des modèles OpenRouter, l'application affiche votre consommation réelle et vos dépenses basées sur les données de coût fournies par OpenRouter. Pour tous les autres fournisseurs, l'application estime les coûts à partir des tarifs publiés par OpenRouter. Si aucun prix n'est disponible, l'estimation peut être nulle.

<br/>

> ℹ️ **REMARQUE**<br/>
> Tous les montants indiqués sont des estimations à titre informatif uniquement, et ne constituent pas des factures officielles.

<br/>

> ⚠️ **ATTENTION**<br/>
> La suppression des données est irréversible. Avant de supprimer, assurez-vous de sauvegarder vos données ou de les exporter via [**Historique**](#history) ou [**Tableau de bord** > **Tous les appels**](#dashboard-tabs), sinon elles seront perdues définitivement. Tout l'historique des entrées et sorties lié à chaque appel API sera également supprimé.

<br/>

<a id="transform-prompts"></a>
### Messages de transformation

Utilisez **Paramètres** > **Messages de transformation** pour gérer les messages en bloc.

Vous pouvez :

- consulter vos messages sauvegardés
- supprimer des messages
- importer des messages depuis un fichier
- exporter des messages pour sauvegarde ou partage

<br/>

<a id="users"></a>
### Utilisateurs

Utilisez **Utilisateurs** pour gérer les comptes d'utilisateur dans la version web. Vous pouvez ajouter des utilisateurs, mettre à jour leurs informations, réinitialiser leurs mots de passe et supprimer des comptes.

<br/>

<a id="api-config"></a>
### Configuration API

Les fournisseurs pris en charge sont : OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras et **Ollama** (modèles locaux via une URL de base). Vous n'avez besoin de configurer que les fournisseurs que vous utilisez.

**Application web : administrateur uniquement**

Les clés API sont configurées via des variables d'environnement du système ou de Docker – elles ne sont pas saisies dans l'interface web. Cette page indique quels fournisseurs ont une clé configurée et vous permet de les tester en cliquant sur le bouton **`Tester`**.

<br/>

> ℹ️ **REMARQUE**<br/>
> Pour modifier une clé API, mettez à jour la variable d'environnement dans votre système ou votre configuration Docker, puis redémarrez le serveur ou le conteneur.

<br/>

**Application de bureau**

Utilisez **Configuration API** pour stocker les clés API pour chaque fournisseur utilisé. Pour Ollama, saisissez l'**URL de base** au lieu d'une clé API.

<br/>

> 💡 **Conseil** <br/>
> Si vous ne souhaitez pas utiliser de clé API ou payer des frais d'utilisation, vous pouvez [télécharger Ollama](https://ollama.com) et exécuter des modèles (tels que `translategemma:4b`) localement sur votre machine gratuitement. Sinon, vous pouvez créer un compte OpenRouter gratuit (aucune carte bancaire requise) pour utiliser leurs modèles gratuits, ou obtenir une clé API gratuite auprès de Cerebras, Google, Groq ou Mistral AI.

<br/>

- Ajoutez uniquement les fournisseurs dont vous avez besoin. Dans **Paramètres** > **Modèles**, chaque identifiant de modèle commence par le fournisseur (par exemple `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Pour ajouter une clé API, saisissez la valeur dans le champ texte et cliquez sur **`Enregistrer`**. Pour remplacer une clé existante, cliquez sur **`Modifier`**. Pour vérifier que la clé fonctionne, cliquez sur **`Tester`**. Pour l'URL de base d'Ollama, cliquez toujours sur **`Tester`** pour vérifier la connexion.

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
3. Cliquez sur **Tester** à côté du fournisseur pour confirmer que la clé fonctionne.

<br/>

<a id="the-model-list-is-empty"></a>
### La liste des modèles est vide

Ouvrez [**Paramètres** > **Modèles**](#models) et cliquez sur **Actualiser**.

Si nécessaire :

- recherchez un modèle
- activez **Uniquement gratuits**
- ajoutez un ou plusieurs modèles aux **Modèles sélectionnés**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Le résultat est trop lent ou trop coûteux

Essayez une ou plusieurs de ces options :

- choisissez un modèle différent
- utilisez une entrée plus courte
- désactivez la **Traduction en temps réel (pendant la saisie)** dans [**Paramètres** > **Paramètres généraux**](#general-settings)
- utilisez des modèles gratuits pour les tâches simples (voir [Modèles](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### L'interface est dans la mauvaise langue

Cliquez sur l'icône globe dans la [barre d'outils](#toolbar) et choisissez votre **Langue de l'interface** préférée.

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
- le **filtre de temps** sélectionné ne couvre pas la période où des appels ont été effectués — essayez **Tout** pour vérifier

Si les graphiques restent vides après avoir sélectionné **Tout**, vérifiez que des appels apparaissent dans l'onglet [**Historique**](#history) ou dans l'onglet **Tous les appels**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Le coût affiche « non disponible » ou semble incorrect

Lorsque vous utilisez des modèles via **OpenRouter**, l'application affiche vos dépenses réelles telles que rapportées par OpenRouter.

Pour les **autres fournisseurs** (OpenAI direct, Anthropic direct, etc.), le coût est estimé à partir des données tarifaires publiées par OpenRouter. Si aucun prix correspondant n'est trouvé pour un modèle, le coût apparaîtra comme **non disponible** et ne sera pas ajouté à votre total en cours.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Le coût total ne correspond pas à ma facture fournisseur

Tous les chiffres de coût dans l'application sont des **estimations à titre indicatif**, et non des factures officielles.

Pour rapprocher le total de vos dépenses réelles sur OpenRouter, ouvrez [**Paramètres** > **Suivi des coûts**](#cost-tracking) et cliquez sur **Synchroniser avec l'utilisation de la clé API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La page Historique est absente de la barre latérale

L'option **Conserver l'historique des exécutions** est peut-être désactivée. Ouvrez [**Paramètres** > **Paramètres généraux**](#general-settings) et activez-la. Notez que son activation ne restaure pas les données d'historique précédemment supprimées.

<br/>

<a id="web-app-session-expired"></a>
### Application web : redirection inattendue vers la page de connexion

Votre session a peut-être expiré. Connectez-vous à nouveau. Si cela se produit fréquemment, vérifiez la configuration du serveur concernant la durée de vie des sessions.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Le tableau de bord n'affiche aucune donnée pour les autres utilisateurs (web)

Seuls les **administrateurs** peuvent visualiser les données de tous les utilisateurs via le filtre **Utilisateur**. Par conception, les utilisateurs standards ne voient que leurs propres activités.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### J'ai modifié une invite et perdu mes modifications

Lors de la modification d'une invite, cliquez toujours sur **Enregistrer** avant de cliquer sur **Retour à l'exécution**.

<br/><br/>

<a id="quick-tips"></a>
## Conseils rapides

- Commencez par [**Traduire**](#translate) pour vous assurer que votre configuration fonctionne avant de passer à [**Réécrire**](#rewrite) ou [**Transformer**](#transform).
- Utilisez [**Réécrire**](#rewrite) pour améliorer couramment vos formulations.
- Utilisez [**Transformer**](#transform) lorsque vous avez besoin d'un flux de travail reproductible pour une tâche spécifique.
- Utilisez [**Tableau de bord**](#dashboard) si vous souhaitez surveiller votre utilisation et vos coûts.
- Utilisez [**Historique**](#history) pour revoir les opérations passées ainsi que leurs entrées et sorties complètes.
- Exportez régulièrement vos invites si vous constituez une bibliothèque d'invites que vous souhaitez garder en sécurité (voir [Invites de transformation](#transform-prompts)) ou si vous souhaitez les partager avec d'autres.

<br/><br/>

<a id="disclaimer"></a>

## Avertissement

Les noms de produits et les icônes appartiennent à leurs propriétaires respectifs et sont utilisés uniquement à des fins d'identification. Ce logiciel n'est pas affilié à, ni approuvé par, aucune des marques mentionnées.

<br/><br/>

<a id="license"></a>
## Licence

Droit d'auteur © 2026 Waldemar Scudeller Jr.

[Licence Apache 2.0](LICENSE)