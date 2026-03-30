---
translation_last_updated: '2026-03-30T00:46:01.233Z'
source_file_mtime: '2026-03-30T00:37:44.601Z'
source_file_hash: e1b91eca0124d467
translation_language: zh-TW
source_file_path: USER-GUIDE.md
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# 使用者指南

<br/>

<a id="introduction"></a>
## 簡介

Transrewrt 可協助您以三種主要方式處理文字：

- **翻譯** - 將文字從一種語言轉換為另一種語言。
- **重寫** - 以不同的風格重新表述文字，例如更清晰、更簡短或更正式。
- **轉換** - 使用稱為提示詞的自訂 AI 指令來處理文字。

<br/>

本指南說明應用程式安裝並執行後的使用方式。安裝步驟請參閱主 **[README](README.zh-TW.md)**。

<br/>

> ℹ️ **注意**<br/>
> Transrewrt 可作為 Windows 和 Linux 的桌面應用程式，以及自架的網頁應用程式。本指南著重於應用程式的日常使用。若僅適用於某個版本的功能，將會明確標示。

<small>**以其他語言閱讀：** </small>
<small id="lang-list">[English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **關於使用者介面與文件翻譯的說明：** 除了原始的英語（英國）之外，所有介面語言皆由 AI 模型翻譯；文字可能不精確或包含錯誤。

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目錄**

- [開始之前](#before-you-start)
  - [如何取得免費的 OpenRouter API 金鑰（桌面應用程式）](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [快速入門](#getting-started)
- [視窗的主要部分](#main-parts-of-the-window)
  - [側邊欄](#sidebar)
  - [工具列](#toolbar)
  - [輸入與輸出面板](#input-and-output-panels)
- [翻譯](#translate)
  - [翻譯文字](#translate-text)
  - [語言選擇](#language-selection)
  - [實用的翻譯設定](#helpful-translation-settings)
- [重寫](#rewrite)
- [轉換](#transform)
  - [執行現有的提示詞](#run-an-existing-prompt)
  - [若您尚未有任何提示詞](#if-you-have-no-prompts-yet)
  - [快速建立提示詞](#create-a-prompt-quickly)
  - [編輯提示詞](#edit-a-prompt)
  - [使用前測試提示詞](#test-a-prompt-before-using-it)
- [儀表板](#dashboard)
  - [篩選資料](#filter-the-data)
  - [儀表板分頁](#dashboard-tabs)
  - [匯出資料](#export-data)
  - [刪除某模型的儲存記錄](#delete-stored-records-for-a-model)
- [歷史](#history)
  - [篩選資料](#filter-the-data-1)
  - [匯出歷史資料](#export-history-data)
- [設定](#settings)
  - [一般設定](#general-settings)
  - [模型](#models)
  - [語言](#languages)
  - [成本追蹤](#cost-tracking)
  - [轉換提示詞](#transform-prompts)
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
  - [費用顯示「無法取得」或似乎有誤](#cost-shows-not-available-or-seems-wrong)
  - [總費用與供應商帳單不符](#total-cost-does-not-match-my-provider-bill)
  - [側邊欄中缺少歷史頁面](#the-history-page-is-missing-from-the-sidebar)
  - [網頁應用程式：意外被重新導向至登入頁面](#web-app-redirected-to-the-login-page-unexpectedly)
  - [網頁管理員：忘記或遺失密碼](#web-admin-forgot-or-lost-a-password)
  - [儀表板未顯示其他使用者的資料（網頁版）](#dashboard-shows-no-data-for-other-users-web)
  - [我變更提示詞後遺失了編輯內容](#i-changed-a-prompt-and-lost-the-edits)
- [快速技巧](#quick-tips)
- [免責聲明](#disclaimer)
- [授權](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## 開始之前

要使用 Transrewrt，您至少需要一個 AI 供應商的存取權。支援的供應商包括：[OpenRouter](https://openrouter.ai)（整合多種模型）、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras，以及用於 local 模型的 [Ollama](https://ollama.com)。

您不需要選擇付費模型即可開始使用。一旦您新增 OpenRouter API 金鑰，應用程式就會自動啟用內建的**免費**OpenRouter 選項。這讓您能立即開始翻譯、重寫和轉換文字。或者，您也可以從 Cerebras、Google、Groq 或 Mistral AI 取得免費的 API 金鑰。

簡單來說：

- **模型** 是執行工作的 AI 引擎。模型會以**供應商前綴**列出（例如 `openrouter/…`、`openai/…`、`ollama/…`）。
- **API 金鑰**（或對 Ollama 而言是**基礎 URL**）是應用程式連接該供應商的方式。

如果您使用的是**桌面應用程式**，請在 [**設定** > **API 設定**](#api-config) 中為您使用的每個供應商新增金鑰。若僅使用 OpenRouter，請參閱下方的 [如何取得 API 金鑰](#how-to-get-an-api-key-desktop-app)。如果您不想使用 API 金鑰，可以安裝 Ollama（來自 [ollama.com](https://ollama.com)）並改用 local 模型，例如 `translategemma:4b`。

如果您使用的是**網頁版**，伺服器管理員會透過環境變數設定供應商，因此您無法直接在應用程式中輸入 API 金鑰。

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### 如何取得免費的 OpenRouter API 金鑰（桌面應用程式）

如果您使用的是桌面應用程式，請依照以下步驟操作：

1. 在您的網頁瀏覽器中前往 [OpenRouter](https://openrouter.ai)。
2. 建立帳號或登入。
3. 開啟 [Keys](https://openrouter.ai/keys) 頁面。
4. 點選按鈕建立新的 API 金鑰。
5. 為金鑰命名，以便日後辨識。
6. 複製新的 API 金鑰。
7. 返回 Transrewrt 並開啟 **設定** > **API 設定**。
8. 將金鑰貼到 **OpenRouter API 金鑰**（位於 **設定** > **API 設定**）中。
9. 點選 **測試 OpenRouter 金鑰** 以確認其正常運作。

<br/><br/>

<a id="getting-started"></a>
## 開始使用

如果您是第一次使用 Transrewrt，請依照以下順序操作：

1. 開啟應用程式。
2. 如有需要，從地球圖示選擇您的**介面語言**。
3. 如果您使用的是**桌面應用程式**，請開啟 [**設定** > **API 設定**](#api-config)，為至少一個供應商新增 API 金鑰（例如 OpenRouter），並點選 **測試** 以確認其正常運作。
4. 開啟 [**設定** > **模型**](#models) 並新增一個或多個模型至 **已選模型**。
5. 開啟 [**設定** > **語言**](#languages) 並選擇您的**常用語言**，以便最常使用的語言優先顯示。
6. 前往 **翻譯** 並執行簡單的翻譯以確認一切正常運作。
7. 一旦成功，再嘗試 **重寫** 和 **轉換**。

此順序很重要。它能避免最常見的初次使用問題：在應用程式尚未建立有效的 API 連線或尚未選擇模型之前就嘗試執行任務。

<br/><br/>

<a id="main-parts-of-the-window"></a>
## 視窗的主要部分

應用程式分為三個主要區域：

- 左側的**側邊欄**。
- 頂部的**工具列**。
- 中央的**工作區域**。

<br/>

<a id="sidebar"></a>
### 側邊欄

使用側邊欄在應用程式中導覽。您可以點擊應用程式標誌旁的圖示來收合側邊欄，以獲得更多空間。

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/zh-TW/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>翻譯</strong> 開啟翻譯工作區。</li><br/>
        <li><strong>重寫</strong> 開啟重寫工作區。</li><br/>
        <li><strong>轉換</strong> 開啟自訂提示詞工作區。</li><br/>
        <li><strong>儀表板</strong> 顯示使用量與費用資訊。</li><br/>
        <li><strong>設定</strong> 開啟設定面板。</li><br/>
        <li><strong>歷史</strong> 顯示包含輸入與輸出文字的使用歷史。</li><br/>
        <li><strong>使用者</strong> 顯示已登入使用者的使用者名稱（僅限網頁版）。</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### 工具列

工具列會根據您在應用程式中的位置而略有變化。

- 左側顯示目前頁面的名稱。
- 右側顯示**模型選擇器**和**介面語言**控制項。

**模型選擇器**可讓您選擇用於目前任務的 AI 引擎。

![Model selector](../images/screenshots/zh-TW/model-selector.png)

某些免費模型可能無法隨時使用——有時會離線或有使用上限。若發生此情況，應用程式將自動從可用清單中移除該模型。若要控制哪些模型出現，請前往[**設定** > **模型**](#models)並編輯您的模型清單。
您也可以點擊工具列中模型名稱左側的供應商圖示，直接開啟模型設定。

<br/>

**地球圖示 + 語言代碼** 可變更應用程式的介面語言，例如選單和按鈕。它**不會**變更**翻譯**功能中使用的翻譯語言。

![Interface language selector](../images/screenshots/zh-TW/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### 輸入與輸出面板

大多數工作區都使用左側的**輸入**面板和右側的**輸出**面板。

每個面板還會顯示：

| **輸入**                                                          | **輸出**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - 字元數 <br/>- 字數 <br/>- 段落數   <br/> | - 任務耗時<br/>- **TPS** (每秒代幣數)<br/>- 字元、字數與段落數<br/>- 使用的模型 |

如果您對技術術語感到疑惑：

- **代幣** 指一小段文字。您可以將其視為部分單字或短單字。
- **TPS** 表示模型每秒處理了多少個這樣的文本片段。

<br/>

您也可以在 [**設定** > **一般設定**](#general-settings) 中啟用 `在操作中顯示費用資訊` 選項，以監控每次操作的費用（若可用）和總費用。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## 翻譯

當您想要將文字從一種語言轉換為另一種語言時，請使用**翻譯**功能。

![Translate workspace](../images/screenshots/zh-TW/translate.png)

<br/>

<a id="translate-text"></a>
### 翻譯文字

1. 開啟 **翻譯**。
2. 在 **從** 中選擇一種語言。
3. 在 **到** 中選擇一種語言。
4. 在工具列中選擇一個模型。
5. 在 **輸入** 區域鍵入或貼上文字。
6. 按一下 **翻譯**。
7. 在 **輸出** 區域閱讀結果。
8. 如果要複製結果，請使用複製按鈕。

<br/>

<a id="language-selection"></a>
### 語言選擇

- **從** 可以是特定語言或 **偵測語言**。
- **到** 是你希望結果輸出的語言。

你所選的 **常用語言** 會出現在清單頂端。你可以在 [**設定** > **語言**](#languages) 中設定這些語言。

<br/>

<a id="helpful-translation-settings"></a>
### 有用的翻譯設定

在 [**設定** > **一般設定**](#general-settings) 中，你可以更改翻譯的運作方式：

- **貼上時自動翻譯**：貼上文字後立即執行翻譯。
- **自動複製結果到剪貼簿**：成功執行後自動複製結果。
- **即時翻譯（輸入時）**：在你輸入時即時執行翻譯。
- **逾時（毫秒）**：控制應用程式在執行即時翻譯前等待的時間。
- **Enter 鍵**：控制按下 `Enter` 時的行為：

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## 重寫

當你想改善措辭但不改變主要意義時，使用 **重寫**。

![Rewrite workspace](../images/screenshots/zh-TW/rewrite.png)

這對於以下情況很有用：

- 修正拼字與文法（**檢查拼字與文法**）
- 讓文字更清晰（**提升清晰度**）
- 一次產生多種不同的改寫版本（**替代版本**）
- 讓文字更正式或更口語（**正式** / **非正式**）
- 縮短或擴充文字（**縮短** / **擴充**）
- 讓文字更具技術性（**改為技術性**）

<br/>

> 💡 **提示**<br/>
> 當你使用「**檢查拼字與文法**」模式時，輸出面板中會出現一個 **顯示變更** 切換開關（位於 **複製** 旁邊）。
> 打開或關閉此開關可顯示或隱藏對你文字所做的具體修正。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## 轉換

當你希望 AI 遵循自訂指令時，使用 **轉換**。

![Transform workspace](../images/screenshots/zh-TW/transform.png)

這是應用程式中最靈活的功能區域。你可以用它來執行諸如以下的任務：

- 摘要筆記
- 將草稿文字轉為精緻的電子郵件
- 提取重點
- 將文字轉換為特定格式
- 對輸入文字進行任何其他自訂操作

<br/>

<a id="run-an-existing-prompt"></a>
### 執行現有的提示詞

1. 開啟 **轉換**。  
2. 從提示詞列表中選擇一個提示詞。  
3. 如果出現 **目標** 語言欄位，請選擇您想要的語言。  
4. 在 **輸入** 區域中輸入或貼上文字。  
5. 按一下 **轉換**。  
6. 在 **輸出** 區域中查看結果。

<br/>

<a id="if-you-have-no-prompts-yet"></a>  
### 如果您還沒有提示詞

如果您的提示詞列表是空的，請在轉換工作區中點選 **載入範例提示**。相同的控制項也始終可在 [**設定** > **轉換提示詞**](#transform-prompts) 的匯入/匯出列中找到。兩者都會新增內建範例，讓您能快速開始。

<br/>

> ℹ️ **注意**<br/>  
> 範例提示詞是以英文提供。載入後，您可以編輯提示詞並使用 **翻譯提示** 將其翻譯成您的語言。

<br/>

<a id="create-a-prompt-quickly"></a>  
### 快速建立提示詞

建立提示詞最快的方式如下：

1. 按一下 **新增提示詞**。  
2. 按一下 **生成提示**。  
3. 描述您希望提示詞執行的任務。  
4. 選擇一個模型。  
5. 讓應用程式為您建立草稿。  
6. 檢視草稿後按一下 **儲存**。

![Generate prompt](../images/screenshots/zh-TW/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>  
### 編輯提示詞

當您建立或編輯提示詞時，編輯器會出現在左側，測試區域會出現在右側。

![Transform prompt editor](../images/screenshots/zh-TW/transform-prompt-edit.png)

主要欄位包括：

- **提示詞名稱**：在提示詞列表中顯示的名稱。  
- **提示詞指示（選填）**：執行提示詞時顯示給使用者的簡短提示。  
- **模型角色**：指派給 AI 的整體角色，例如「你是一個樂於助人的助手。」  
- **模型指令（每行一個）**：您希望 AI 遵循的具體規則。  
- **輸出描述**：描述結果的簡短詞語，例如「摘要」或「重寫」。  
- **溫度 (0.0 → 1.0)**：模型的行為方式；詳見下方說明。  
- **詢問目標語言**：執行提示詞時會新增目標語言選擇器。

如果您不熟悉技術術語 **溫度**，可以這樣理解：

- **較低** 的溫度會產生更穩定、更可預測的結果。  
- **較高** 的溫度會產生更多樣化和更具創造力的結果。

您也可以使用：

- **`生成提示`**：根據簡短描述建立新的草稿  
- **`改善提示`**：優化現有的提示詞  
- **`翻譯提示`**：翻譯提示詞欄位

<br/>

> ⚠️ **警告**<br/>  
> 在點選 **`返回執行`** 之前，請先點選 **`儲存`**。如果您未儲存就返回，您的變更將會遺失。

<br/>

<a id="test-a-prompt-before-using-it"></a>  
### 使用前先測試提示詞

右側的測試面板可讓您在日常工作中使用提示詞之前，先用範例文字進行測試。

這在以下情況特別有用：

- 您正在建立新的提示詞  
- 您正在比較兩個版本的提示詞  
- 您想檢查語氣、長度或輸出格式

<br/>

> ℹ️ **注意**<br/>
> 您可以在[**設定** > **轉換提示詞**](#transform-prompts)中匯出和匯入已儲存的提示詞。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## 儀表板

使用**儀表板**來查看您使用此應用程式的程度以及相關費用（針對付費模型）。

![Dashboard summary](../images/screenshots/zh-TW/dashboard-summary.png)

<br/>

> ℹ️ **注意**<br/>
> 如果您僅使用**免費**模型，**費用**金額可能為零，且以成本為主的摘要可能看起來是空的。在**摘要**頁面中，只要在所選期間內有活動，**使用量隨時間變化**和**依模型的使用量**仍會顯示**呼叫次數**（翻譯、重寫和轉換）。

<br/>

<a id="filter-the-data"></a>
### 篩選資料

使用頂部的篩選按鈕來變更時間範圍。

![Dashboard filters](../images/screenshots/zh-TW/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> **使用者**篩選僅在網頁版中對管理員可見。一般使用者不會看到此篩選，且在桌面應用程式中也不提供此功能。

<br/>

<a id="dashboard-tabs"></a>
### 儀表板分頁

- **摘要**提供使用量和費用的總覽。包含**使用量隨時間變化**（依日期堆疊累計的每日**呼叫次數**，包含翻譯、重寫和轉換）以及**依模型的使用量**（每個模型的總**呼叫次數**，包含轉換）。
- **依使用量**按翻譯語言、重寫模式和轉換提示詞分解活動。
- **依模型**顯示您使用的模型及其費用。
- **依日期**顯示每日總計。
- **所有呼叫**顯示完整的呼叫歷史，並允許您匯出。

<br/>

<a id="export-data"></a>
### 匯出資料

儀表板表格可將資料匯出為：

- **JSON**
- **CSV**
- **XLSX**

當您在應用程式外審查活動或分享報告時，此功能非常實用。

<br/>

<a id="delete-stored-records-for-a-model"></a>
### 刪除某模型的儲存記錄

在**依模型**或**所有呼叫**中，您可以點擊「垃圾桶」圖示來移除某模型的儲存記錄。

> ⚠️ **警告**<br/>
> 刪除儲存記錄無法復原。僅在確定不再需要該歷史記錄時才使用此功能。

若要刪除所有資料或根據記錄的時間長度移除記錄，請前往[**設定** > **成本追蹤**](#cost-tracking)。在那裡您可以選擇刪除所有儲存的資料，或僅刪除早於特定日期的資料。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## 歷史

按一下 **歷史** 以查看您在 **Transrewrt** 中的操作歷史，包括每次操作的輸入和輸出。

![History page](../images/screenshots/zh-TW/history.png)

<br/>

<a id="filter-the-history"></a>
### 篩選資料

**歷史** 使用與 **儀表板** 頁面相同的篩選條件。請使用它們來選擇時間範圍。

![Dashboard filters](../images/screenshots/zh-TW/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> **使用者**篩選僅在網頁版中對管理員可見。一般使用者不會看到此篩選，且在桌面應用程式中也不提供此功能。

<br/>

<a id="export-history-data"></a>
### 匯出歷史資料

歷史頁面可將篩選後的資料匯出為：

- **JSON**
- **CSV**
- **XLSX**

當您在應用程式外審查活動或分享報告時，此功能非常實用。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## 設定

從側邊欄開啟 **設定** 以自訂應用程式行為。

可用的標籤頁取決於平台和您的角色：

| 標籤頁               | 桌面版 | Web 版 (管理員) | Web 版 (一般使用者) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | 一般設定          |   是   |     是     |        是         |
  | 模型              |   是   |     是     |        是         |
  | 語言              |   是   |     是     |        是         |
  | 成本追蹤          |   是   |     是     |         —          |
  | 轉換提示詞        |   是   |     是     |        是         |
  | 使用者            |    —    |     是     |         —          |
  | API 設定          |   是   |     是     |         —          |
  | 關於              |   是   |     是     |        是         |

<br/>

> ℹ️ **注意**<br/>
> 在 Web 版本中，每位使用者都有自己的設定。所選模型、語言、一般選項和轉換提示詞等設定皆依使用者儲存。您所做的變更不會影響其他使用者。

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### 一般設定

使用 **一般設定** 來控制輸入行為、是否為 **歷史** 儲存執行詳細資料，以及外觀設定。

**行為**

- **ENTER 鍵行為** 可選擇按下 `Enter` 時是執行任務還是插入新行。
- **貼上時自動翻譯** 在您貼上文字時立即啟動翻譯。
- **自動複製結果到剪貼簿** 會自動複製成功的結果。
- **即時翻譯（輸入時）** 在您輸入時即時翻譯。
- **逾時時間 (ms)** 設定即時翻譯的等待時間。

**歷史**

- **保留執行歷史** 控制每次翻譯、重寫和轉換是否儲存 **輸入和輸出文字** 以供側邊欄的 [**歷史**](#history) 檢視。關閉此功能時會要求確認；若確認，儲存的歷史文字將從資料庫中移除。
- **刪除歷史資料** 可讓您依時間（例如幾個月前的資料，或 **所有資料 (清除)**）使用 **刪除資料** 來移除儲存的文字。這僅影響 **歷史** 檢視中儲存的執行文字；**不會** 刪除成本或使用量總計。若要移除或修剪 **費用** 資料，請使用 [**設定** > **成本追蹤**](#cost-tracking)。

**外觀**

- **在操作上顯示成本資訊** 可控制是否顯示每次操作的費用（若可用）以及「翻譯」、「重寫」和「轉換」輸出面板上的總費用。
- **費用小數位數** 可調整費用小數點的顯示方式。
- **僅限網頁版**：**顯示應用程式周圍邊距** 可在介面周圍增加額外空間。
- **字型** 可更改文字面板中的書寫字型。
- **大小** 可調整字型大小。

**設定備份**

- **在備份中包含使用資料** — 啟用後，ZIP 檔案也會包含執行歷史和 API 呼叫資料。
- **備份設定** — 建立單一 ZIP 檔案（預設為 `transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip`，UTC 時間），其中包含 `config.json`、`state.json`、選擇性加密金鑰、使用者、偏好設定、自訂提示，以及（若已選擇）使用資料。備份成功後，確認訊息會顯示已儲存的檔案名稱。
- **從備份還原** — 會先開啟**確認對話框**。在對話框中選擇備份 ZIP 檔案（**瀏覽**／檔案選擇器，或在支援的環境中拖放），然後檢視選項：
  - **還原使用資料** — 當備份包含使用資料時，從 ZIP 中匯入使用／歷史資料；若僅需設定和提示，請勿勾選。
  - **還原前清除舊的使用資料** — 在套用備份前，清除本機現有的使用／歷史資料（可選；當您希望完全取代時使用）。

在網頁版或桌面版建立的備份皆可在另一版本中還原。當您在網頁版中還原桌面版的備份時，資料將會還原至管理員使用者。

<br/>

<a id="models"></a>
### 模型

使用 **設定** > **模型** 來選擇工具列中顯示的模型。

![Settings Models tab](../images/screenshots/zh-TW/settings-models.png)

此頁面包含兩個清單：

- 左側的 **可用模型**
- 右側的 **已選模型

實用的控制項包括：

- **搜尋模型...** 可依名稱尋找模型
- **供應商** 標籤可將清單縮小至特定引擎（OpenRouter、OpenAI、Ollama 等）
- **僅免費** 可僅顯示免費模型
- **重新整理** 可重新載入清單
- 當您依供應商排序時，可使用 **展開全部** 和 **折疊全部**

模型 ID 包含供應商前綴（例如 `openrouter/…` 與 `openai/…`）。標示如 **OpenAI (OpenRouter)** 與 **OpenAI (direct)** 可顯示流量的路由方式。

> ℹ️ **注意**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) 是路由模型，而非一般聊天模型：其回應為描述 OpenRouter API 請求主體的 JSON（例如包含 `model` 和 `messages` 的 `requests` 陣列）。若您將其用於 **翻譯**、**重寫** 或 **轉換**，輸出面板將顯示該 JSON 而非完成的文字。請為這些任務選擇一般文字模型。詳情請見 OpenRouter 上的 [Body Builder 模型頁面](https://openrouter.ai/openrouter/bodybuilder)。

操作：

- 若要新增模型，請點選 **新增** 或可用模型中的任一項目。

- 若要移除模型，請點選 **已選模型** 中該模型旁的 **X**，或在可用模型中點選項目上的 **已選**。

- 若要清除清單，請點選 **取消全選**。必要的免費模型將保留在清單中。

<br/>

> ℹ️ **注意**<br/>
> 若您不希望立即為 OpenRouter 儲值，可先啟用 **僅免費** 並選擇免費模型（無需信用卡）。您也可以使用 Ollama 在本機執行模型，無需任何 API 金鑰。

<br/>

<a id="languages"></a>
### 語言

使用 **設定** > **語言** 來管理應用程式中使用的語言清單。

- **頂級語言**會固定在 **翻譯** 和 **轉換** 的語言清單頂部。  
- **自訂語言** 可讓您新增內建清單中沒有的語言。

新增自訂語言後，它會與內建選項一起出現在語言選擇器中。

<br/>

<a id="cost-tracking"></a>
### 成本追蹤

使用 **設定** > **成本追蹤** 來管理成本資訊。

- **總費用** 顯示累計總額。  
- **複製數值** 將總金額複製到剪貼簿。  
- **重置費用** 將儲存的總金額重設為零。  
- **同步 API 金鑰使用量** 將總金額設定為與 OpenRouter 帳戶報告的使用量相符（僅限 OpenRouter）。  
- **API 金鑰使用量** 顯示 OpenRouter 的使用詳細資料（若可用）。  
- **刪除成本資料** 可移除所有資料，或僅刪除早於指定日期的資料。

**成本追蹤：** 當您使用 OpenRouter 模型時，應用程式會根據 OpenRouter 提供的成本資訊顯示實際使用量和支出。對於其他所有供應商，應用程式會使用 OpenRouter 公布的價格來估算成本；若無可用價格，估算值可能為零。

<br/>

> ℹ️ **注意**<br/>
>  所有成本數字僅供您參考，並非正式的帳單憑證。

<br/>

> ⚠️ **警告**<br/>
> 資料刪除後無法復原。刪除前，請務必透過 [**歷史**](#history) 或 [**儀表板** > **所有呼叫**](#dashboard-tabs) 備份或匯出資料，否則資料將永久遺失。  
> 每筆 API 呼叫相關的所有輸入/輸出歷史也將一併刪除。

<br/>

<a id="transform-prompts"></a>
### 轉換提示詞

使用 **設定** > **轉換提示詞** 來批量管理提示詞。

您可以：

- 檢視已儲存的提示詞  
- 刪除提示詞  
- 從檔案匯入提示詞  
- 匯出提示詞以備份或分享  
- 載入範例提示詞至提示詞清單

<br/>

<a id="users"></a>
### 使用者

使用 **使用者** 來管理網頁版中的使用者帳戶。您可以新增使用者、更新其資料、重設密碼以及刪除帳戶。

<br/>

<a id="api-config"></a>
### API 設定

支援的供應商包括：OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras，以及 **Ollama**（透過基本 URL 使用本地模型）。您只需設定您要使用的供應商。

**Web 應用程式：僅限管理員**

API 金鑰是透過系統或 Docker 環境變數進行設定 — 不需在 Web UI 中輸入。此頁面會顯示哪些供應商已設定金鑰，並可點擊 **`測試`** 按鈕測試每個供應商。

<br/>

> ℹ️ **注意**<br/>
> 若要變更 API 金鑰，請更新系統或 Docker 設定中的環境變數，並重新啟動伺服器或容器。

> ℹ️ **注意**<br/>
> **設定備份**（參見 [**一般設定** → 設定備份](#general-settings)）可將 **已解析** 的供應商金鑰嵌入 ZIP 檔案中的 `config.json`。還原該 ZIP 檔案時，**不會** 將這些金鑰複製回伺服器的持久化設定檔中 — 實際運作的金鑰仍來自環境變數與現有檔案狀態，如前述說明。

<br/>

**桌面應用程式**

使用 **API 設定** 來儲存您所使用的每個供應商的 API 金鑰。對於 Ollama，請輸入 **基本 URL** 而非 API 金鑰。

<br/>

> 💡 **提示** <br/>
> 如果您不想使用 API 金鑰或支付費用，可以 [下載 Ollama](https://ollama.com) 並在您的機器上本地免費執行模型（例如 `translategemma:4b`）。或者，您可以建立一個免費的 OpenRouter 帳戶（無需信用卡）來使用他們的免費模型，或從 Cerebras、Google、Groq 或 Mistral AI 取得免費的 API 金鑰。

<br/>

- 僅新增您需要的供應商。在 **設定** > **模型** 中，每個模型 ID 都以供應商名稱開頭（例如 `openrouter/openrouter/free`、`openai/gpt-4o`、`ollama/llama3`）。

要新增 API 金鑰，請在文字欄位中輸入值並點選 **`儲存`**。要取代現有的金鑰，請點選 **`編輯`**。要驗證金鑰是否正常運作，請點選 **`測試`**。對於 Ollama 基本 URL，請務必點選 **`測試`** 以檢查連線。

<br/>

> ℹ️ **注意**<br/>
> 您無法查看目前的 API 金鑰值。您只能使用 **`編輯`** 按鈕來取代它。
> API 金鑰會以加密方式儲存在設定中。

<br/>

<a id="about"></a>
### 關於

**關於** 標籤頁會顯示：

- 應用程式名稱
- 版本號碼
- 建置日期
- 專案儲存庫的連結

<br/><br/>

<a id="common-issues"></a>
## 常見問題

如果某些功能未如預期運作，請先檢查以下幾點。

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### 應用程式無法翻譯、重寫或轉換文字

請檢查：

- 您已在工具列中選取模型
- 至少有一個模型列在 [**設定** > **模型**](#models)
- 您的 API 設定正常運作

如果您使用的是桌面應用程式：

1. 開啟 [**設定** > **API 設定**](#api-config)。
2. 確認至少已儲存一個 API 金鑰。
3. 點選供應商旁邊的 **測試** 以確認金鑰正常運作。

<br/>

<a id="the-model-list-is-empty"></a>
### 模型清單為空

開啟 [**設定** > **模型**](#models) 並點選 **重新整理**。

如有需要：

- 搜尋模型
- 開啟 **僅免費**
- 將一個或多個模型加入 **已選模型**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### 結果太慢或太昂貴

請嘗試以下其中一項或多項：

- 選擇不同的模型
- 使用較短的輸入
- 在 [**設定** > **一般設定**](#general-settings) 中關閉 **即時翻譯（輸入時）**
- 對簡單任務使用免費模型（參見 [模型](#models)）

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### 介面語言錯誤

按一下[工具列](#toolbar)中的地球圖示，並選擇您偏好的 **介面語言**。

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### 文字太小或難以閱讀

開啟 [**設定** > **一般設定**](#general-settings) 並更改：

- **字型**
- **大小**

<br/>

<a id="dashboard-charts-are-empty"></a>
### 儀表板圖表為空

如果符合以下情況，這是正常的：

- 您僅使用 **免費模型**，且正在查看 **費用** 數據（可能為零）；**摘要** 中的 **使用量** 呼叫次數圖表仍需所選期間的資料
- 所選的 **時間篩選** 未涵蓋呼叫發生的期間 — 請嘗試選擇 **全部** 來檢查

如果在選擇 **全部** 後圖表仍然為空，請確認 [**歷史**](#history) 或 **所有呼叫** 分頁中是否有顯示呼叫記錄。

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### 費用顯示「不可用」或看起來有誤

當您透過 **OpenRouter** 使用模型時，應用程式會顯示 OpenRouter 報告的實際支出。

對於 **其他供應商**（如 OpenAI direct、Anthropic direct 等），費用是根據 OpenRouter 公布的定價資料估算的。如果找不到對應模型的價格，費用將顯示為 **不可用**，且不會計入您的累計總計。

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### 總費用與供應商帳單不符

應用程式中的所有費用數字均為 **僅供參考的估計值**，並非正式的帳單文件。

若要讓總金額更接近您實際的 OpenRouter 支出，請開啟 [**設定** > **成本追蹤**](#cost-tracking) 並點選 **同步 API 金鑰使用量**。

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### 側邊欄中遺失歷史頁面

**保留執行歷史** 可能已關閉。請開啟 [**設定** > **一般設定**](#general-settings) 並啟用此功能。請注意，啟用後並不會還原先前已刪除的歷史資料。

<br/>

<a id="web-app-session-expired"></a>
### 網頁應用程式：意外重新導向至登入頁面

您的工作階段可能已逾時，請重新登入。如果經常發生此情況，請檢查伺服器設定中的工作階段存留時間設定。

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### 網頁管理員：忘記或遺失密碼

此方法適用於 **自行架設的網頁應用程式**（Docker），不適用於桌面（Electron）應用程式。

- 如果還有其他管理員可以登入，他們可以開啟 [**設定** > **使用者**](#users)，選擇該帳號，並在那裡設定 **新密碼**。
- 如果您 **已被鎖定**，但擁有機器或容器的 **shell 存取權限**，可使用映像內附的工具重設密碼（若變更預設名稱請替換 `transrewrt`，若密碼包含空格或特殊字元請加上引號）：

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

若您從未建立其他帳號，預設管理員使用者名稱為 `admin`。當您僅傳入一個參數時，該參數將被視為 `admin` 的新密碼。

若您是從 **原始碼** 運行程式而非使用 Docker，請使用：

```bash
pnpm run reset-web-password -- <username> <new-password>
```

此指令碼會更新 SQLite 資料庫中的使用者記錄（若 `admin` 使用者不存在也可建立）。重設後，請使用新密碼登入。

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### 儀表板未顯示其他使用者的資料（網頁版）

只有 **管理員** 可透過 **使用者** 篩選器檢視所有使用者的資料。一般使用者依設計僅能看見自己的活動紀錄。

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### 我修改了提示詞卻遺失編輯內容

編輯提示詞時，請務必先點選 **儲存**，再點選 **回到執行**。

<br/><br/>

<a id="quick-tips"></a>
## 快速提示

- 請先使用 [**翻譯**](#translate) 確認您的設定正常運作，再進行 [**重寫**](#rewrite) 或 [**轉換**](#transform)。
- 使用 [**重寫**](#rewrite) 進行日常的文字優化。
- 當您需要為特定任務建立可重複使用的流程時，使用 [**轉換**](#transform)。
- 使用 [**儀表板**](#dashboard) 來監控使用狀況與費用。
- 使用 [**歷史**](#history) 來檢視過去的操作及其完整的輸入/輸出文字。
- 若您正在建立提示詞資料庫並希望妥善保存，或想與他人分享，請定期匯出提示詞（參見 [轉換提示詞](#transform-prompts)）。

<br/><br/>

<a id="disclaimer"></a>
## 免責聲明

產品名稱與圖示屬於其各自擁有者，僅供識別用途使用。本軟體未經任何提及品牌之授權或背書。

<br/><br/>

<a id="license"></a>
## 授權條款

版權所有 © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
