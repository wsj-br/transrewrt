---
translated_at: "2026-03-26T00:28:05.401Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt 橫幅](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# 使用者指南

<br/>

<a id="introduction"></a>
## 簡介

Transrewrt 可在以下三個方面協助您處理文字：

- **翻譯** - 將文字從一種語言轉換為另一種語言。
- **重寫** - 以不同風格重新表述文字，例如更清晰、更簡短或更正式。
- **轉換** - 使用稱為提示（prompts）的自訂 AI 指令來處理文字。

<br/>

本指南說明應用程式安裝並執行後的使用方式。安裝步驟請參閱主要的 **[README](README.zh-TW.md)**。

<br/>

> ℹ️ **注意**<br/>
> Transrewrt 可作為 Windows 和 Linux 的桌面應用程式，以及自行託管的網頁應用程式。本指南專注於應用程式的日常使用。若僅適用於某個版本的功能，將會明確標示。

<small>**閱讀其他語言版本：** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **關於使用者介面與文件翻譯的注意事項：** 除了原始英文（英國）以外，所有介面語言皆由 AI 模型進行翻譯，因此文句可能不精確或含有錯誤。

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目錄** 

- [開始之前](#before-you-start)
  - [如何取得免費的 OpenRouter API 金鑰（桌面應用程式）](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [快速入門](#getting-started)
- [視窗的主要元件](#main-parts-of-the-window)
  - [側邊欄](#sidebar)
  - [工具列](#toolbar)
  - [輸入與輸出面板](#input-and-output-panels)
- [翻譯](#translate)
  - [翻譯文字](#translate-text)
  - [語言選擇](#language-selection)
  - [實用的翻譯設定](#helpful-translation-settings)
- [重寫](#rewrite)
- [轉換](#transform)
  - [執行現有的提示](#run-an-existing-prompt)
  - [如果尚無提示](#if-you-have-no-prompts-yet)
  - [快速建立提示](#create-a-prompt-quickly)
  - [編輯提示](#edit-a-prompt)
  - [使用前測試提示](#test-a-prompt-before-using-it)
- [儀表板](#dashboard)
  - [篩選資料](#filter-the-data)
  - [儀表板分頁](#dashboard-tabs)
  - [匯出資料](#export-data)
  - [刪除某模型的儲存記錄](#delete-stored-records-for-a-model)
- [歷史記錄](#history)
  - [篩選資料](#filter-the-data-1)
  - [匯出歷史記錄資料](#export-history-data)
- [設定](#settings)
  - [一般設定](#general-settings)
  - [模型](#models)
  - [語言](#languages)
  - [成本追蹤](#cost-tracking)
  - [轉換提示](#transform-prompts)
  - [使用者](#users)
  - [API 設定](#api-config)
  - [關於](#about)
- [常見問題](#common-issues)
  - [應用程式無法翻譯、重寫或轉換文字](#the-app-will-not-translate-rewrite-or-transform-text)
  - [模型清單為空](#the-model-list-is-empty)
  - [結果太慢或太昂貴](#the-result-is-too-slow-or-too-expensive)
  - [介面語言錯誤](#the-interface-is-in-the-wrong-language)
  - [文字太小或難以閱讀](#the-text-is-too-small-or-hard-to-read)
  - [儀表板圖表為空](#dashboard-charts-are-empty)
  - [成本顯示「無法取得」或看起來有誤](#cost-shows-not-available-or-seems-wrong)
  - [總成本與服務提供者帳單不符](#total-cost-does-not-match-my-provider-bill)
  - [側邊欄中找不到歷史記錄頁面](#the-history-page-is-missing-from-the-sidebar)
  - [網頁應用程式：意外地被重新導向到登入頁面](#web-app-redirected-to-the-login-page-unexpectedly)
  - [儀表板未顯示其他使用者資料（網頁版）](#dashboard-shows-no-data-for-other-users-web)
  - [修改提示後遺失編輯內容](#i-changed-a-prompt-and-lost-the-edits)
- [快速提示](#quick-tips)
- [免責聲明](#disclaimer)
- [授權](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## 開始之前

若要使用 Transrewrt，您至少需要連接到一個 AI 提供商。支援的提供商包括：[OpenRouter](https://openrouter.ai)（彙整多種模型）、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras，以及用於本地模型的 [Ollama](https://ollama.com)。

您不需要選擇付費模型即可開始使用。只要您添加了 OpenRouter API 金鑰，應用程式就會自動啟用內建的**免費** OpenRouter 選項。這樣您就能立即開始翻譯、重寫和轉換文字。或者，您也可以從 Cerebras、Google、Groq 或 Mistral AI 獲取免費的 API 金鑰。

簡單來說：

- **模型** 是執行任務的人工智慧引擎。模型會以**提供者前置名稱**列出（例如 `openrouter/…`、`openai/…`、`ollama/…`）。
- **API 金鑰**（或對於 Ollama 而言是**基礎 URL**）是應用程式用來連接該提供者的方式。

如果您使用的是**桌面應用程式**，請在 [**設定** > **API 設定**](#api-config) 中為您使用的每個提供者新增金鑰。若僅使用 OpenRouter，請參閱下方的 [如何取得 API 金鑰](#how-to-get-an-api-key-desktop-app)。如果您不想使用 API 金鑰，可以安裝 Ollama（從 [ollama.com](https://ollama.com) 下載），並改用本地模型，例如 `translategemma:4b`。

如果您使用的是**網頁版本**，伺服器管理員會透過環境變數設定提供者，因此您無法直接在應用程式中輸入 API 金鑰。

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### 如何取得免費的 OpenRouter API 金鑰（桌面應用程式）

若您使用的是桌面應用程式，請依下列步驟操作：

1. 在瀏覽器中前往 [OpenRouter](https://openrouter.ai)。
2. 建立帳號或登入。
3. 前往 [Keys](https://openrouter.ai/keys) 頁面。
4. 按一下按鈕來建立新的 API 金鑰。
5. 為此金鑰命名，以便日後辨識。
6. 複製新建立的 API 金鑰。
7. 返回 Transrewrt，開啟 **設定** > **API 設定**。
8. 將金鑰貼入 **OpenRouter API 金鑰** 欄位（位於 **設定** > **API 設定**）。
9. 按一下 **測試 OpenRouter 金鑰** 以確認其正常運作。

<br/><br/>

<a id="getting-started"></a>
## 開始使用

如果您是第一次使用 Transrewrt，請依照以下順序操作：

1. 開啟應用程式。
2. 如有需要，點選地球圖示選擇您的**介面語言**。
3. 若您使用**桌面應用程式**，請開啟 [**設定** > **API 設定**](#api-config)，為至少一個提供者新增 API 金鑰（例如 OpenRouter），並點選 **測試** 以驗證其是否正常運作。
4. 開啟 [**設定** > **模型**](#models)，將一或多個模型加入 **已選模型** 清單中。
5. 開啟 [**設定** > **語言**](#languages)，設定您的**常用語言**，以便最常使用的語言能優先顯示。
6. 前往 **翻譯** 功能並執行簡單的翻譯，確認一切正常運作。
7. 一旦成功，再嘗試 **重寫** 和 **轉換** 功能。

此順序很重要。它可以避免最常見的初次使用問題：在應用程式尚未建立有效的 API 連線或選定模型之前就嘗試執行任務。

<br/><br/>

<a id="main-parts-of-the-window"></a>
## 視窗的主要部分

應用程式分為三個主要區域：

- 左側的**側邊欄**。
- 頂部的**工具列**。
- 中央的**工作區**。

<br/>

<a id="sidebar"></a>
### 側邊欄

使用側邊欄可在應用程式中切換不同功能。若需更多空間，可點選應用程式圖示旁的按鈕將側邊欄收合。

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/zh-TW/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>翻譯</strong>：開啟翻譯工作區。</li><br/>
        <li><strong>重寫</strong>：開啟文字重寫工作區。</li><br/>
        <li><strong>轉換</strong>：開啟自訂提示詞工作區。</li><br/>
        <li><strong>儀表板</strong>：顯示使用量與成本資訊。</li><br/>
        <li><strong>設定</strong>：開啟設定面板。</li><br/>
        <li><strong>歷史記錄</strong>：顯示使用歷史，包含輸入與輸出的文字。</li><br/>
        <li><strong>使用者</strong>：顯示已登入使用者的使用者名稱（僅限網頁版）。</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### 工具列

工具列的外觀會根據您在應用程式中的位置而略有不同。

- 左側顯示目前頁面的名稱。
- 右側顯示 **模型選擇器** 和 **介面語言** 控制項。

**模型選擇器** 讓您選擇用於目前任務的 AI 引擎。

  ![模型選擇器](../images/screenshots/zh-TW/model-selector.png)

某些免費模型可能無法隨時使用——有時是離線狀態，或有使用上限。若發生這種情況，應用程式會自動將該模型從您的可用清單中移除。若要控制哪些模型出現，請前往 [**設定** > **模型**](#models) 並編輯您的模型清單。  
您也可以直接按一下工具列中模型名稱左側的供應商圖示，以直接開啟模型設定。

<br/>

**地球圖示 + 語言代碼** 可更改應用程式的介面語言（例如選單和按鈕）。它**不會**更改在 **翻譯** 中使用的翻譯語言。

  ![介面語言選擇器](../images/screenshots/zh-TW/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### 輸入與輸出面板

大多數工作區使用左側的 **輸入** 面板和右側的 **輸出** 面板。

每個面板也會顯示以下資訊：

| **輸入**                                                          | **輸出**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - 字元數 <br/>- 字數 <br/>- 段落數   <br/> | - 任務花費的時間<br/>- **TPS**（每秒處理的 token 數）<br/>- 字元數、字數和段落數<br/>- 使用的模型 |


如果您對技術術語感到疑惑：

- **Token** 指一小段文字。您可以將其視為部分單字或短詞。
- **TPS** 指模型每秒處理的文字片段數量。

<br/>

您也可以啟用 [**設定** > **一般設定**](#general-settings) 中的選項 `在動作中顯示成本資訊`，以監控每次操作的成本（若可用）以及總成本。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## 翻譯

當您想要將文字從一種語言轉換為另一種語言時，請使用 **翻譯** 功能。

![翻譯工作區](../images/screenshots/zh-TW/translate.png)

<br/>

<a id="translate-text"></a>
### 翻譯文字

1. 開啟 **翻譯**。
2. 在 **從** 中選擇一種語言。
3. 在 **至** 中選擇一種語言。
4. 在工具列中選擇一個模型。
5. 在 **輸入** 區域鍵入或貼上文字。
6. 點選 **翻譯**。
7. 在 **輸出** 區域查看結果。
8. 如需複製結果，請使用複製按鈕。

<br/>

<a id="language-selection"></a>
### 語言選擇

- **從** 可以是特定語言，或是選擇 **偵測語言**。
- **至** 是您希望結果輸出的語言。

您所設定的 **常用語言** 將會顯示在清單頂端。您可以在 [**設定** > **語言**](#languages) 中設定這些語言。

<br/>

<a id="helpful-translation-settings"></a>
### 實用的翻譯設定

在 [**設定** > **一般設定**](#general-settings) 中，您可以更改翻譯的行為方式：

- **貼上時自動翻譯**：當您貼上文字後立即執行翻譯。
- **自動複製結果到剪貼簿**：成功執行後自動複製結果。
- **即時翻譯（輸入時）**：在您輸入時即時執行翻譯。
- **逾時時間（毫秒）**：控制應用程式在執行即時翻譯前的等待時間。
- **Enter 鍵行為**：控制按下 `Enter` 時的動作：

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## 改寫

當您希望改善文句但不改變主要意義時，請使用 **改寫** 功能。

![改寫工作區](../images/screenshots/zh-TW/rewrite.png)

這對以下用途很有幫助：

- 修正拼字與文法
- 讓文字更清晰
- 讓文字更正式或更口語化
- 縮短或擴展文字
- 讓文字更具專業技術感

<br/>

> 💡 **提示**<br/>
> 當您使用「**檢查拼字與文法**」模式時，輸出面板將出現一個 `顯示變更` 按鈕。
> 點選此按鈕可切換顯示修正內容，以顯示或隱藏對您文字所做的具體變更。


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## 轉換

當您希望 AI 遵循自訂指令時，請使用「**轉換**」功能。

![Transform 工作區](../images/screenshots/zh-TW/transform.png)

這是應用程式中最靈活的區域。您可以使用它執行以下任務：

- 摘要筆記
- 將草稿文字轉為精緻的電子郵件
- 提取重點
- 將文字轉換成特定格式
- 對輸入文字進行任何其他自訂操作

<br/>

<a id="run-an-existing-prompt"></a>
### 執行現有的提示

1. 開啟「**轉換**」。
2. 從提示列表中選擇一個提示。
3. 如果出現「**目標語言**」欄位，請依需求選擇語言。
4. 在「**輸入**」欄位中鍵入或貼上文字。
5. 按一下「**轉換**」。
6. 在「**輸出**」欄位中閱讀結果。

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### 若尚未建立提示

如果您的提示列表為空，請按一下「**載入範例提示**」。這會加入內建範例，讓您可以快速開始使用。

<br/>

> ℹ️ **注意**<br/>
> 範例提示以英文提供。載入後，您可以編輯提示，並使用「**翻譯提示**」將其翻譯成您使用的語言。

<br/>

<a id="create-a-prompt-quickly"></a>
### 快速建立提示

最快建立提示的方法如下：

1. 按一下「**新增提示**」。
2. 按一下「**產生提示**」。
3. 描述您希望此提示達成的目標。
4. 選擇一個模型。
5. 讓應用程式為您建立草稿。
6. 檢視草稿後，按一下「**儲存**」。

![Generate prompt](../images/screenshots/zh-TW/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### 編輯提示

當您在建立或編輯提示時，左側會顯示編輯器，右側則會出現測試區域。

![轉換提示編輯器](../images/screenshots/zh-TW/transform-prompt-edit.png)

主要欄位包含：

- **提示名稱**：在提示列表中顯示的名稱。
- **提示說明（選填）**：執行提示時顯示給使用者的簡短提示。
- **模型角色**：賦予 AI 的整體角色，例如「你是一個有用的助手。」
- **模型說明（每行一項）**：您希望 AI 遵循的特定規則。
- **輸出描述**：用以描述結果的簡短詞語，例如「摘要」或「重寫」。
- **溫度（0.0 → 1.0）**：模型的行為方式；詳見下方說明。
- **詢問目標語言**：執行提示時加入目標語言選擇器。

如果您不熟悉「**溫度**」這個技術術語，可以這樣理解：

- **較低**的溫度會產生更穩定、可預測的結果。
- **較高**的溫度會產生更多樣化和具創意的結果。

您也可以使用：

- **`產生提示`**：根據簡單描述建立新的提示草稿
- **`改善提示`**：優化現有的提示
- **`翻譯提示`**：翻譯提示內容欄位

<br/>

> ⚠️ **警告**<br/>
> 在按一下「**返回執行**」之前，請先按「**儲存**」。若未儲存即返回，您的變更將會遺失。

<br/>

<a id="test-a-prompt-before-using-it"></a>
### 使用提示前先測試

右側的測試面板讓您可在日常工作中使用提示之前，先用範例文字進行測試。

此功能在以下情況特別有用：

- 建立新提示時
- 比較兩個提示版本時
- 想要檢查語氣、長度或輸出格式時

<br/>

> ℹ️ **注意**<br/>
> 您可以在 [**設定** > **轉換提示**](#transform-prompts) 匯出和匯入儲存的提示。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## 儀表板

使用「**儀表板**」可查看應用程式的使用情況以及相關成本（適用於付費模型）。

![Dashboard 摘要](../images/screenshots/zh-TW/dashboard-summary.png)


<br/>

> ℹ️ **注意**<br/>
> 若您僅使用免費模型，成本相關的圖表將為空白。

<br/>

<a id="filter-the-data"></a>
### 篩選資料

使用頂部的篩選按鈕來更改時間範圍。

![Dashboard 篩選器](../images/screenshots/zh-TW/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> 「**使用者**」篩選僅在網頁版中對管理員可見。一般使用者不會看到此篩選，且桌面應用程式也不提供此功能。

<br/>

<a id="dashboard-tabs"></a>

### 儀表板分頁

- **摘要**提供使用量和成本的概覽。
- **按使用量** 將活動細分為翻譯語言、重寫模式和轉換提示。
- **按模型** 顯示您使用的模型及其花費。
- **按天數** 顯示每日總計。
- **全部呼叫** 顯示完整的呼叫記錄，並允許您匯出。

<br/>

<a id="export-data"></a>
### 匯出資料

儀表板表格可將資料匯出為：

- **JSON**
- **CSV**
- **XLSX**

如果您想在應用程式外部審查活動或分享報告，此功能非常實用。

<br/>

<a id="delete-stored-records-for-a-model"></a>
### 刪除模型的儲存記錄

在 **按模型** 或 **全部呼叫** 中，您可以點擊「垃圾桶」圖示來移除某個模型的儲存記錄。

> ⚠️ **警告**<br/>
> 刪除儲存的記錄無法復原。僅當您確定不再需要這些歷史記錄時才使用此功能。

若要刪除所有資料或根據資料的存留時間刪除記錄，請前往 [**設定** > **成本追蹤**](#cost-tracking)。在那裡您可以選擇刪除所有儲存的資料，或僅刪除特定日期之前的老舊資料。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## 歷史記錄

點擊 **歷史記錄** 即可查看您在 **Transrewrt** 中的操作歷史，包括每次操作的輸入與輸出內容。

![歷史記錄頁面](../images/screenshots/zh-TW/history.png)

<br/>

<a id="filter-the-history"></a>
### 篩選資料

**歷史記錄** 使用與 **儀表板** 頁面相同的篩選條件。請使用它們來選擇時間範圍。

![儀表板篩選器](../images/screenshots/zh-TW/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> 在網頁版中，**使用者** 篩選器僅對管理員可見。一般使用者不會看到此篩選器，且桌面應用程式中也不提供此功能。

<br/>

<a id="export-history-data"></a>
### 匯出歷史記錄資料

歷史記錄頁面可將已篩選的資料匯出為：

- **JSON**
- **CSV**
- **XLSX**

如果您想在應用程式外部審查活動或分享報告，此功能非常實用。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## 設定

從側邊欄打開 **設定**，可自訂應用程式的行為方式。

可用的分頁依平台和您的角色而異：

  | 分頁               | 桌面版 | 網頁版（管理員） | 網頁版（一般使用者） |
  |-------------------|:-------:|:-----------:|:------------------:|
  | 一般設定          |   yes   |     yes     |        yes         |
  | 模型              |   yes   |     yes     |        yes         |
  | 語言              |   yes   |     yes     |        yes         |
  | 成本追蹤          |   yes   |     yes     |         —          |
  | 轉換提示          |   yes   |     yes     |        yes         |
  | 使用者            |    —    |     yes     |         —          |
  | API 設定          |   yes   |     yes     |         —          |
  | 關於              |   yes   |     yes     |        yes         |

<br/>

> ℹ️ **注意**<br/>
> 在網頁版本中，每位使用者都有自己的設定。例如所選模型、語言、一般選項和轉換提示等設定皆為個人儲存。您所做的更改不會影響其他使用者。

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### 一般設定

使用 **一般設定** 可控制輸入行為、是否儲存執行細節至 **歷史記錄**，以及外觀顯示。

**行為**

- **Enter 鍵行為** 可選擇按下 `Enter` 時是要執行任務或插入新行。
- **貼上時自動翻譯** 可在您貼上文字後立即啟動翻譯。
- **自動複製結果到剪貼簿** 可自動複製成功的結果。
- **即時翻譯（輸入時）** 可在您輸入時同步翻譯。
- **逾時時間（毫秒）** 設定即時翻譯的等待時間。

**歷史記錄**

- **保留執行歷史** 可控制每次翻譯、重寫和轉換是否儲存 **輸入與輸出文字**，供側邊欄的 [**歷史記錄**](#history) 檢視。關閉此選項會要求確認；若您確認，儲存的歷史文字將從資料庫中刪除。
- **刪除歷史資料** 可使用 **刪除資料** 按鈕依時間（例如幾個月前的資料，或 **全部資料（清除）**）刪除儲存的文字。此操作僅影響 **歷史記錄** 檢視中保存的執行文字，**不會** 刪除成本或使用量的統計總和。若要移除或修剪 **成本** 資料，請使用 [**設定** > **成本追蹤**](#cost-tracking)。

**外觀**

- **在操作中顯示成本資訊** 可控制是否顯示每次操作的成本（若可用）以及「翻譯」、「重寫」和「轉換」輸出面板上的總成本。
- **成本小數位數** 可更改成本小數的顯示方式。
- **僅限網頁版：** **在應用程式周圍顯示邊距** 可在介面周圍增加額外空間。
- **字型家族** 可更改文字面板中的書寫字型。
- **大小** 可更改字型大小。


<br/>

<a id="models"></a>

### 模型

使用 **設定** > **模型** 來自訂工具列中顯示的模型。

![設定 - 模型分頁](../images/screenshots/zh-TW/settings-models.png)

該頁面包含兩個清單：

- 左側的 **可用模型**
- 右側的 **已選擇模型**

實用的控制功能包括：

- **搜尋模型...**：按名稱搜尋特定模型
- **提供者** 標籤：將清單限縮為單一引擎（例如 OpenRouter、OpenAI、Ollama 等）
- **僅限免費**：僅顯示免費模型
- **重新整理**：重新載入清單
- **全部展開** 和 **全部收合**：方便依提供者排序時使用

模型識別碼包含提供者前綴（例如 `openrouter/…` 與 `openai/…`）。標章如 **OpenAI (OpenRouter)** 和 **OpenAI (直接)** 用以顯示流量的路由方式。

> ℹ️ **注意**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) 是一種路由模型，而非一般對話模型：其回應為描述 OpenRouter API 請求內容的 JSON 格式（例如包含 `model` 和 `messages` 的 `requests` 陣列）。若您將其用於 **翻譯**、**重寫** 或 **轉換**，輸出面板將顯示該 JSON 而非完成的文字。請為這些任務選擇一般的文字模型。詳情請見 OpenRouter 上的 [Body Builder 模型頁面](https://openrouter.ai/openrouter/bodybuilder)。

操作方式：

 - 若要新增模型，請點選 **新增** 按鈕或可用模型項目中的任一處。

 - 若要移除模型，請於 **已選擇模型** 清單中點選其旁的 **X**，或在可用模型項目中點選 **已選擇**。

 - 若要清空清單，請點選 **全部取消選擇**。系統必要的免費模型將保留在清單中。

<br/>

> ℹ️ **注意**<br/>
> 若您不希望立即為 OpenRouter 帳戶加值，可先啟用 **僅限免費** 並選擇免費模型（無需信用卡）。您也可以使用 Ollama 在本機執行模型，無需任何 API 金鑰。

<br/>

<a id="languages"></a>
### 語言

使用 **設定** > **語言** 來管理應用程式中使用的語言清單。

- **常用語言** 會固定在 **翻譯** 和 **轉換** 功能中語言清單的頂端。
- **自訂語言** 可讓您加入內建清單中沒有的語言。

若您加入自訂語言，它將與內建選項一同出現在語言選擇器中。

<br/>

<a id="cost-tracking"></a>
### 成本追蹤

使用 **設定** > **成本追蹤** 來管理成本資訊。

- **總成本**：顯示累積金額。
- **複製數值**：將總金額複製到剪貼簿。
- **重設成本**：將儲存的總金額歸零。
- **與 API 金鑰使用量同步**：將總金額設定為符合 OpenRouter 帳戶報告的用量（僅限 OpenRouter）。
- **API 金鑰使用量**：若可用，顯示 OpenRouter 的用量詳情。
- **刪除成本資料**：可刪除所有資料，或僅刪除指定日期之前的資料。

**成本追蹤說明**：當您使用 OpenRouter 模型時，應用程式會根據 OpenRouter 提供的成本資訊顯示實際用量與花費。對於其他所有提供者，應用程式會使用 OpenRouter 公布的價格來估算成本；若無可用價格，估算值可能為零。

<br/>

> ℹ️ **注意**<br/>
> 所有成本數字僅供您參考，並非正式的帳單文件。

<br/>

> ⚠️ **警告**<br/>
> 資料刪除後無法復原。刪除前，請務必備份資料或透過 [**歷史記錄**](#history) 或 [**儀表板** > **所有呼叫**](#dashboard-tabs) 匯出資料，否則資料將永久遺失。與每個 API 呼叫項目相關的所有輸入/輸出歷史也將一併刪除。

<br/>

<a id="transform-prompts"></a>
### 轉換提示詞

使用 **設定** > **轉換提示詞** 來批量管理提示詞。

您可進行以下操作：

- 檢視已儲存的提示詞
- 刪除提示詞
- 從檔案匯入提示詞
- 匯出提示詞以進行備份或分享

<br/>

<a id="users"></a>
### 使用者

使用 **使用者** 功能可在 Web 版本中管理使用者帳號。您可以新增使用者、更新其資料、重設密碼以及刪除帳號。

<br/>

<a id="api-config"></a>
### API 設定

支援的提供者包括：OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras 以及 **Ollama**（透過基本 URL 執行本機模型）。您只需設定實際使用的提供者。

**Web 應用程式：僅限管理員**

API 金鑰係透過系統或 Docker 環境變數設定，無法於 Web 介面中輸入。此頁面會顯示哪些提供者已設定金鑰，並讓您點選 **`測試`** 按鈕來測試每一項。

<br/>

> ℹ️ **注意**<br/>
> 若要變更 API 金鑰，請更新系統或 Docker 設定中的環境變數，並重新啟動伺服器或容器。

<br/>

**桌面應用程式**

使用 **API 設定** 來儲存您所使用之各提供者的 API 金鑰。對於 Ollama，請輸入 **基本 URL** 而非 API 金鑰。

<br/>

> 💡 **提示** <br/>
> 如果您不想使用 API 金鑰或支付費用，可以 [下載 Ollama](https://ollama.com) 並在您的機器上本機執行模型（例如 `translategemma:4b`）以免費使用。 alternatively，您也可以建立免費的 OpenRouter 帳戶（無需信用卡）來使用其免費模型，或從 Cerebras、Google、Groq 或 Mistral AI 取得免費的 API 金鑰。

<br/>

- 請僅新增您需要的提供者。在 **設定** > **模型** 中，每個模型識別碼皆以提供者開頭（例如 `openrouter/openrouter/free`、`openai/gpt-4o`、`ollama/llama3`）。

要新增 API 金鑰，請在文字欄位中輸入值並點選 **`儲存`**。要更換現有金鑰，請點選 **`編輯`**。要確認金鑰是否有效，請點選 **`測試`**。對於 Ollama 的基本 URL，請務必點選 **`測試`** 以檢查連線狀態。

<br/>

> ℹ️ **注意**<br/>
> 您無法檢視現有的 API 金鑰內容，僅能透過 **`編輯`** 按鈕進行替換。
> API 金鑰會以加密方式儲存在設定中。

<br/>

<a id="about"></a>

### 關於

**關於** 標籤頁會顯示以下內容：

- 應用程式名稱
- 版本號碼
- 建置日期
- 專案資源庫的連結

<br/><br/>

<a id="common-issues"></a>
## 常見問題

如果某些功能無法如預期運作，請先檢查以下幾點。

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### 應用程式無法翻譯、改寫或轉換文字

請檢查以下項目：

- 您已在工具列中選擇模型
- [**設定** > **模型**](#models) 中至少列出一個模型
- 您的 API 設定已正確運作

如果您使用的是桌面應用程式：

1. 開啟 [**設定** > **API 設定**](#api-config)。
2. 確認至少已儲存一個 API 金鑰。
3. 點選供應商旁的 **測試** 按鈕，確認金鑰功能正常。

<br/>

<a id="the-model-list-is-empty"></a>
### 模型清單為空

請開啟 [**設定** > **模型**](#models) 並點選 **重新整理**。

如有需要：

- 搜尋特定模型
- 開啟 **僅限免費**
- 在 **已選模型** 中新增一個或多個模型

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### 結果產生太慢或成本過高

請嘗試下列方法中的一項或多項：

- 選擇其他模型
- 使用較短的輸入
- 在 [**設定** > **一般設定**](#general-settings) 中關閉 **即時翻譯（輸入時）**
- 對簡單任務使用免費模型（參見 [模型](#models)）

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### 介面語言錯誤

點選 [工具列](#toolbar) 中的地球圖示，然後選擇您偏好的 **介面語言**。

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### 文字太小或難以閱讀

請開啟 [**設定** > **一般設定**](#general-settings) 並更改：

- **字型**
- **大小**

<br/>

<a id="dashboard-charts-are-empty"></a>
### 儀表板圖表為空

在以下情況下此現象屬正常：

- 您僅使用 **免費模型**（成本圖表將為空白）
- 所選的 **時間篩選條件** 未涵蓋實際呼叫的期間 —— 請嘗試選擇 **全部** 來查看

若選擇 **全部** 後圖表仍然空白，請確認 [**歷史記錄**](#history) 或 **所有呼叫** 標籤頁中是否有出現呼叫記錄。

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### 成本顯示「無法取得」或看起來有誤

當您在透過 **OpenRouter** 使用模型時，應用程式會顯示 OpenRouter 所回報的實際花費。

對於 **其他供應商**（如直接使用 OpenAI、Anthropic 等），成本係根據 OpenRouter 公開的價格資料進行估算。若某模型無對應價格資料，成本將顯示為 **無法取得**，且不會計入您的累計總額。

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### 總成本與供應商帳單不符

應用程式內的所有成本數值僅供 **參考用的估算值**，並非正式帳單文件。

若要讓總金額更接近您真正的 OpenRouter 支出，請開啟 [**設定** > **成本追蹤**](#cost-tracking) 並點選 **與 API 金鑰用量同步**。

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### 側邊欄中缺少歷史記錄頁面

可能是 **保留執行歷史** 功能已關閉。請開啟 [**設定** > **一般設定**](#general-settings) 並啟用此功能。請注意，啟用後並不會恢復之前已刪除的歷史資料。

<br/>

<a id="web-app-session-expired"></a>
### Web 應用程式：意外被導向至登入頁面

您的會話可能已逾時，請重新登入。若此情況頻繁發生，請檢查伺服器設定中的會話有效期限設定。

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### 儀表板未顯示其他使用者資料（Web 版）

唯有 **管理員** 可透過 **使用者** 篩選功能查看所有使用者的資料。一般使用者依設計僅能看見自己的活動記錄。

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### 我修改了提示內容卻遺失編輯

當您在編輯提示時，務必先點選 **儲存**，再點選 **返回執行**。

<br/><br/>

<a id="quick-tips"></a>
## 快速提示

- 請先從 [**翻譯**](#translate) 開始，確保您的設定正常運作後，再進階使用 [**改寫**](#rewrite) 或 [**轉換**](#transform)。
- 使用 [**改寫**](#rewrite) 來進行日常文字的優化。
- 當您需要為特定任務建立可重複使用的流程時，使用 [**轉換**](#transform)。
- 使用 [**儀表板**](#dashboard) 來監控使用量與成本。
- 使用 [**歷史記錄**](#history) 來檢視過去的操作及其完整的輸入/輸出內容。
- 若您正在建立想長期保存的提示語彙庫，或希望與他人分享，請定期匯出提示（參見 [轉換提示](#transform-prompts)）。

<br/><br/>

<a id="disclaimer"></a>

## 免責聲明

產品名稱和圖示均為其各自所有者的財產，僅用於識別目的。本軟體與所提及的任何品牌均無任何隸屬關係，亦未經其認可。

<br/><br/>

<a id="license"></a>
## 授權許可

版權所有 © 2026 Waldemar Scudeller Jr.

[Apache 授權條款 2.0 版](LICENSE)