---
translated_at: "2026-03-25T21:01:21.232Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt 標語](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# 使用者指南

<br/>

<a id="introduction"></a>
## 介紹

Transrewrt 可協助您以三種主要方式處理文字：

- **翻譯** - 將文字從一種語言轉換為另一種語言。
- **重寫** - 以不同風格重新措辭，例如更清晰、更簡潔或更正式。
- **轉換** - 使用稱為「提示」（prompt）的自訂 AI 指令處理文字。

<br/>

本指南說明應用程式安裝並執行後的使用方法。安裝步驟請參閱主 **[README](README.zh-TW.md)**。

<br/>

> ℹ️ **注意**<br/>
> Transrewrt 可作為 Windows 和 Linux 的桌面應用程式，以及可自行託管的網路應用程式。本指南專注於應用程式的日常使用。若某些內容僅適用於某個版本，將會明確標示。

<small>**以其他語言閱讀：** [English (UK)](USER-GUIDE.zh-TW.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **關於使用者介面和文件翻譯的提示：** 除了原始的英文（英國）之外，所有介面語言皆使用 AI 模型翻譯；文字可能不夠精確或包含錯誤。

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目錄** 

- [開始前](#before-you-start)
  - [如何取得免費的 OpenRouter API 金鑰（桌面應用程式）](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [入門](#getting-started)
- [視窗主要元件](#main-parts-of-the-window)
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
  - [若尚未有任何提示](#if-you-have-no-prompts-yet)
  - [快速建立提示](#create-a-prompt-quickly)
  - [編輯提示](#edit-a-prompt)
  - [使用前測試提示](#test-a-prompt-before-using-it)
- [儀表板](#dashboard)
  - [篩選資料](#filter-the-data)
  - [儀表板分頁](#dashboard-tabs)
  - [匯出資料](#export-data)
  - [刪除特定模型的儲存記錄](#delete-stored-records-for-a-model)
- [歷史記錄](#history)
  - [篩選資料](#filter-the-data-1)
  - [匯出歷史資料](#export-history-data)
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
  - [結果過慢或成本過高](#the-result-is-too-slow-or-too-expensive)
  - [介面語言錯誤](#the-interface-is-in-the-wrong-language)
  - [文字太小或難以閱讀](#the-text-is-too-small-or-hard-to-read)
  - [儀表板圖表為空](#dashboard-charts-are-empty)
  - [成本顯示「不可用」或看起來有誤](#cost-shows-not-available-or-seems-wrong)
  - [總成本與供應商帳單不符](#total-cost-does-not-match-my-provider-bill)
  - [側邊欄缺少歷史記錄頁面](#the-history-page-is-missing-from-the-sidebar)
  - [網路應用程式：意外被重新導向至登入頁面](#web-app-redirected-to-the-login-page-unexpectedly)
  - [儀表板未顯示其他使用者資料（網路版）](#dashboard-shows-no-data-for-other-users-web)
  - [修改提示後遺失編輯內容](#i-changed-a-prompt-and-lost-the-edits)
- [快速技巧](#quick-tips)
- [免責聲明](#disclaimer)
- [授權](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## 開始之前

若要使用 Transrewrt，您至少需要接入一個 AI 提供商。支援的提供商有：[OpenRouter](https://openrouter.ai)（整合多種模型）、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras，以及用於本地模型的 [Ollama](https://ollama.com)。

開始時您不需要選擇付費模型。只要您新增了 OpenRouter 的 API 金鑰，應用程式就會自動啟用內建的 **免費** OpenRouter 選項。讓您馬上就能開始翻譯、重寫與轉換文字。或者，您也可以從 Cerebras、Google、Groq 或 Mistral AI 獲取一個免費的 API 金鑰。

簡單來說：

- **模型** 是執行工作的 AI 引擎，模型會以 **提供者字首** 列出（例如 `openrouter/…`、`openai/…`、`ollama/…`）。
- **API 金鑰**（或對 Ollama 而言是 **基礎 URL**）是應用程式用來連接提供者的憑證。

如果您使用的是 **桌面應用程式**，請在 [**設定** > **API 設定**](#api-config) 中為您所使用的每個提供者新增金鑰。若僅使用 OpenRouter，請參見下方的 [如何取得 API 金鑰](#how-to-get-an-api-key-desktop-app)。如果您不想使用 API 金鑰，可以從 [ollama.com](https://ollama.com) 安裝 Ollama，並改用本地模型，例如 `translategemma:4b`。

如果您使用的是 **網頁版**，伺服器管理員會透過環境變數設定提供者，因此您無法直接在應用程式中輸入 API 金鑰。

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### 如何取得免費的 OpenRouter API 金鑰（桌面應用程式）

若您使用的是桌面應用程式，請依照以下步驟操作：

1. 在瀏覽器中前往 [OpenRouter](https://openrouter.ai)。
2. 建立帳戶或登入。
3. 打開 [Keys](https://openrouter.ai/keys) 頁面。
4. 點擊按鈕以建立新的 API 金鑰。
5. 為金鑰命名，以便日後辨識。
6. 複製新產生的 API 金鑰。
7. 返回 Transrewrt 並開啟 **設定** > **API 設定**。
8. 將金鑰貼入 **OpenRouter API 金鑰**（位於 **設定** > **API 設定** 中）。
9. 點選 **測試 OpenRouter 金鑰**，確認金鑰可正常運作。

<br/><br/>

<a id="getting-started"></a>
## 開始使用

如果您是首次使用 Transrewrt，請依照以下順序操作：

1. 開啟應用程式。
2. 如有需要，點擊地球圖示選擇您的 **介面語言**。
3. 若您使用 **桌面應用程式**，請開啟 [**設定** > **API 設定**](#api-config)，為至少一個提供者新增 API 金鑰（例如 OpenRouter），並點選 **測試** 以確認連線正常。
4. 開啟 [**設定** > **模型**](#models)，將一或多個模型加入 **已選模型**。
5. 開啟 [**設定** > **語言**](#languages)，設定您的 **常用語言**，讓經常使用的語言優先顯示。
6. 前往 **翻譯** 頁面，執行一次簡單的翻譯以確認所有設定皆正常運作。
7. 成功後，再試試 **重寫** 和 **轉換** 功能。

此操作順序非常重要，可避免最常見的初次使用問題：在應用程式尚未建立有效的 API 連線或選定模型之前就嘗試執行任務。

<br/><br/>

<a id="main-parts-of-the-window"></a>
## 視窗的主要組成部分

應用程式分為三個主要區域：

- 左側的 **側邊欄**。
- 上方的 **工具列**。
- 中央的 **工作區域**。

<br/>

<a id="sidebar"></a>
### 側邊欄

使用側邊欄可在應用程式中切換功能。您可點擊應用程式圖示旁的按鈕來收合側邊欄，以獲得更多空間。

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/zh-TW/sidebar.png" alt="應用程式側邊欄" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>翻譯</strong> 開啟翻譯工作區。</li><br/>
        <li><strong>重寫</strong> 開啟重寫工作區。</li><br/>
        <li><strong>轉換</strong> 開啟自訂提示詞工作區。</li><br/>
        <li><strong>儀表板</strong> 顯示使用量與成本資訊。</li><br/>
        <li><strong>設定</strong> 開啟設定面板。</li><br/>
        <li><strong>歷史記錄</strong> 顯示使用歷史，包含輸入與輸出的文字內容。</li><br/>
        <li><strong>使用者</strong> 顯示已登入使用者的使用者名稱（僅限網頁版）。</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### 工具列

工具列的外觀會根據您在應用程式中的位置而略有不同。

- 左側會顯示目前頁面的名稱。
- 右側則包含 **模型選擇器** 和 **介面語言** 控制項。

**模型選擇器** 可讓您為目前工作選擇要使用的 AI 引擎。

  ![模型選擇器](../images/screenshots/zh-TW/model-selector.png)

某些免費模型可能並非始終可用——有時它們處於離線狀態，或是有使用上限。若發生這種情況，應用程式會自動從您的可用列表中移除該模型。若要控制哪些模型顯示，請前往[**設定** > **模型**](#models) 並編輯您的模型清單。
您也可以點擊工具列中模型名稱左側的提供商圖示，直接開啟模型設定。

<br/>

**地球圖示 + 語言代碼** 可變更應用程式的介面語言（例如選單和按鈕）。這**不會**改變 **翻譯** 功能中使用的翻譯語言。

  ![介面語言選擇器](../images/screenshots/zh-TW/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### 輸入與輸出面板

大多數工作區會使用左側的 **輸入** 面板和右側的 **輸出** 面板。

每個面板還會顯示：

| **輸入**                                                          | **輸出**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - 字元數 <br/>- 字數 <br/>- 段落數   <br/> | - 工作耗時<br/>- **TPS**（每秒處理的 token 數）<br/>- 字元、字數與段落數<br/>- 使用的模型 |


若您對技術術語感到疑惑：

- **Token** 指一小段文字，可視為一個字的一部分或一個短字。
- **TPS** 表示模型每秒處理了多少個文字片段。

<br/>

您也可以在 [**設定** > **一般設定**](#general-settings) 中啟用 `在操作中顯示成本資訊` 選項，以監控每次操作的成本（若支援）以及總成本。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## 翻譯

當您想要將文字從一種語言轉換為另一種語言時，請使用 **翻譯**。

![翻譯工作區](../images/screenshots/zh-TW/translate.png)

<br/>

<a id="translate-text"></a>
### 翻譯文字

1. 開啟 **翻譯**。
2. 在 **從** 中選擇一種語言。
3. 在 **到** 中選擇一種語言。
4. 在工具列中選擇一個模型。
5. 在 **輸入** 區域鍵入或貼上文字。
6. 按下 **翻譯**。
7. 在 **輸出** 區域查看結果。
8. 如需複製結果，請使用複製按鈕。

<br/>

<a id="language-selection"></a>
### 語言選擇

- **從** 可以是特定語言，也可以選擇 **偵測語言**。
- **到** 是您希望翻譯結果輸出的目標語言。

您所設定的 **常用語言** 會出現在清單頂端。您可以在 [**設定** > **語言**](#languages) 中設定這些語言。

<br/>

<a id="helpful-translation-settings"></a>
### 實用的翻譯設定

在 [**設定** > **一般設定**](#general-settings) 中，您可以調整翻譯行為：

- **貼上時自動翻譯**：貼上文字後立即執行翻譯。
- **自動複製結果到剪貼簿**：翻譯成功後自動複製結果。
- **即時翻譯（輸入時）**：在您打字時持續執行翻譯。
- **逾時時間（毫秒）**：設定應用程式在執行即時翻譯前等待的時間。
- **Enter 鍵行為**：控制按下 `Enter` 鍵時的動作：

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## 改寫

當您想在不改變主要意義的前提下優化文字表述時，請使用 **改寫**。

![改寫工作區](../images/screenshots/zh-TW/rewrite.png)

此功能適用於：

- 修正拼字與文法
- 讓文字更清晰易懂
- 讓文字更正式或更口語
- 縮短或擴展文字內容
- 讓文字更具專業技術感

<br/>

> 💡 **小提示**<br/>
> 當您使用「**檢查拼字與文法**」模式時，輸出面板將出現一個 `顯示變更` 按鈕。
> 按下此按鈕可切換修正內容的顯示，查看或隱藏對您文字所做的具體修改。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## 轉換

當您希望 AI 遵循自訂指令時，請使用「轉換」。

![轉換工作區](../images/screenshots/zh-TW/transform.png)

這是此應用程式最靈活的功能區塊，您可用於以下各種任務：

- 摘要筆記
- 將草稿文字轉為正式郵件
- 提取重點
- 將文字轉換成特定格式
- 對輸入文字執行其他自訂操作

<br/>

<a id="run-an-existing-prompt"></a>
### 執行現有提示

1. 開啟 **轉換**。
2. 從提示列表中選擇一個提示。
3. 如果出現 **目標** 語言欄位，可選擇您需要的語言。
4. 在 **輸入** 欄位中鍵入或貼上文字。
5. 按一下 **轉換**。
6. 在 **輸出** 欄位中檢視結果。

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### 如果您尚未有提示

如果您的提示列表為空，請按一下 **載入範例提示**。這會加入內建範例，讓您快速開始使用。

<br/>

> ℹ️ **注意**<br/>
> 範例提示以英文提供。載入後，您可以編輯提示，並使用 **翻譯提示** 功能將其翻譯成您的語言。

<br/>

<a id="create-a-prompt-quickly"></a>
### 快速建立提示

最快建立提示的方法如下：

1. 按一下 **新增提示**。
2. 按一下 **產生提示**。
3. 描述您希望此提示達成的目標。
4. 選擇模型。
5. 讓應用程式為您建立草稿。
6. 檢視草稿後按一下 **儲存**。

![產生提示](../images/screenshots/zh-TW/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### 編輯提示

當您建立或編輯提示時，左側會出現編輯器，右側會出現測試區域。

![轉換提示編輯器](../images/screenshots/zh-TW/transform-prompt-edit.png)

主要欄位包括：

- **提示名稱**：顯示於提示列表中的名稱。
- **提示說明（選填）**：執行提示時顯示給使用者的簡短提示。
- **模型角色**：賦予 AI 的整體角色，例如「你是個樂於助人的助手。」
- **模型指令（每行一項）**：您希望 AI 遵循的具體規則。
- **輸出描述**：簡短描述結果類型，例如「摘要」或「重寫」。
- **溫度設定（0.0 → 1.0）**：控制模型行為，詳見下方說明。
- **詢問目標語言**：執行提示時會顯示目標語言選擇器。

若您不熟悉技術用語 **溫度**，可簡化理解如下：

- **較低** 溫度會產生較穩定、可預測的結果。
- **較高** 溫度會產生更多樣性與創意性。

您還可使用以下功能：

- **`產生提示`**：根據簡單描述建立新草稿
- **`優化提示`**：改善現有提示
- **`翻譯提示`**：翻譯提示欄位內容

<br/>

> ⚠️ **警告**<br/>
> 請在按 **`返回執行`** 之前，先按 **`儲存`**。若未儲存就返回，所有變更將會遺失。

<br/>

<a id="test-a-prompt-before-using-it"></a>
### 使用前先測試提示

右側的測試面板讓您可在日常工作使用前，先以範例文字測試提示。

此功能適用於以下情境：

- 建立全新提示時
- 比較兩個不同版本的提示時
- 想確認語氣、長度或輸出格式時

<br/>

> ℹ️ **注意**<br/>
> 您可在 [**設定** > **轉換提示**](#transform-prompts) 匯出與匯入已儲存的提示。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## 儀表板

使用 **儀表板** 可查看您的應用程式使用量與相關費用（僅限付費模型）。

![儀表板摘要](../images/screenshots/zh-TW/dashboard-summary.png)


<br/>

> ℹ️ **注意**<br/>
> 若您僅使用免費模型，與成本相關的圖表將顯示為空白。

<br/>

<a id="filter-the-data"></a>
### 篩選資料

使用頂部的篩選按鈕變更時間範圍。

![儀表板篩選器](../images/screenshots/zh-TW/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> **使用者** 篩選器僅在 Web 版本中對管理員可見。一般使用者不會看到此篩選器，且該功能在桌面應用程式中不可用。

<br/>

<a id="dashboard-tabs"></a>

### 儀表板標籤

- **概覽** 提供您使用情況和成本的總覽。
- **依使用量** 依照翻譯語言、重寫模式和轉換提示來細分活動。
- **依模型** 顯示您所使用的模型及其成本。
- **依日期** 顯示每日總計。
- **所有呼叫** 顯示完整的呼叫記錄，並允許您匯出資料。

<br/>

<a id="export-data"></a>
### 匯出資料

儀表板表格可將資料匯出為以下格式：

- **JSON**
- **CSV**
- **XLSX**

若您想在應用程式外審查活動或分享報告，此功能非常實用。

<br/>

<a id="delete-stored-records-for-a-model"></a>
### 刪除模型的儲存記錄

在 **依模型** 或 **所有呼叫** 中，您可以點擊「垃圾桶」圖示來移除特定模型的儲存記錄。

> ⚠️ **警告**<br/>
> 刪除儲存記錄是無法復原的。僅在確定不再需要該歷史記錄時才使用此功能。

若要刪除所有資料或根據資料的儲存時間刪除記錄，請前往 [**設定** > **成本追蹤**](#cost-tracking)。在那裡您可以選擇刪除所有儲存資料，或僅刪除指定日期之前的資料。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## 歷史記錄

點擊 **歷史記錄** 以檢視您在 **Transrewrt** 內的操作歷史，包括每次操作的輸入與輸出內容。

![歷史記錄頁面](../images/screenshots/zh-TW/history.png)

<br/>

<a id="filter-the-history"></a>
### 篩選資料

**歷史記錄** 使用與 **儀表板** 頁面相同的篩選器。使用它們來選取時間範圍。

![儀表板篩選器](../images/screenshots/zh-TW/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> 在網頁版中，**使用者** 篩選器僅對管理員可見。一般使用者不會看到此篩選器，且該功能在桌面應用程式中不可用。

<br/>

<a id="export-history-data"></a>
### 匯出歷史記錄資料

歷史記錄頁面可將篩選後的資料匯出為以下格式：

- **JSON**
- **CSV**
- **XLSX**

若您想在應用程式外審查活動或分享報告，此功能非常實用。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## 設定

從側邊欄開啟 **設定**，以自訂應用程式的行為。

可用的標籤依平台和您的角色而異：

  | 標籤               | 桌面版 | 網頁版（管理員） | 網頁版（一般使用者） |
  |-------------------|:-------:|:-----------:|:------------------:|
  | 一般設定          |   是   |     是     |        是         |
  | 模型              |   是   |     是     |        是         |
  | 語言              |   是   |     是     |        是         |
  | 成本追蹤          |   是   |     是     |         —          |
  | 轉換提示          |   是   |     是     |        是         |
  | 使用者            |    —    |     是     |         —          |
  | API 設定          |   是   |     是     |         —          |
  | 關於              |   是   |     是     |        是         |

<br/>

> ℹ️ **注意**<br/>
> 在網頁版中，每位使用者擁有各自的設定。所選模型、語言、一般選項和轉換提示等設定皆依使用者分別儲存。您所做的更改不會影響其他使用者。

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### 一般設定

使用 **一般設定** 來控制輸入行為、是否儲存執行細節至 **歷史記錄**，以及外觀顯示。

**行為**

- **Enter 鍵行為** 可選擇按下 `Enter` 時是要執行任務還是插入新行。
- **貼上時自動翻譯** 在您一貼上文字時即開始翻譯。
- **自動複製結果到剪貼簿** 將成功結果自動複製。
- **即時翻譯（輸入時）** 在您輸入時即進行翻譯。
- **逾時時間（毫秒）** 設定即時翻譯的等待時間。

**歷史記錄**

- **保留執行歷史** 控制每次翻譯、重寫和轉換是否儲存 **輸入與輸出文字** 以供側邊欄的 [**歷史記錄**](#history) 檢視。關閉此功能會要求確認；若您確認，已儲存的歷史文字將從資料庫中移除。
- **刪除歷史資料** 讓您能依儲存時間（例如幾個月前的資料，或 **全部資料（清除）**）使用 **刪除資料** 來移除儲存的文字。這只會影響 **歷史記錄** 檢視中儲存的執行文字；**不會** 刪除成本或使用總量。若要移除或修剪 **成本** 資料，請使用 [**設定** > **成本追蹤**](#cost-tracking)。

**外觀**

- **在操作中顯示成本資訊** 控制是否顯示每項操作的成本（若可用）以及翻譯、重寫和轉換輸出面板上的總成本。
- **成本小數位數** 更改成本小數點的顯示方式。
- **僅網頁版：** **在應用程式周圍顯示邊距** 可在介面周圍增加額外空間。
- **字型** 更改文字面板中的書寫字型。
- **大小** 更改字型大小。

<br/>

<a id="models"></a>

### 模型

使用 **設定** > **模型** 選擇要顯示在工具列中的模型。

![設定模型頁籤](../images/screenshots/zh-TW/settings-models.png)

此頁面包含兩個清單：

- 左側的 **可用模型**
- 右側的 **已選模型**

實用的控制選項包含：

- **搜尋模型...**：依名稱尋找模型
- **提供者** 標籤：將清單縮小至特定引擎（如 OpenRouter、OpenAI、Ollama 等）
- **僅限免費**：只顯示免費模型
- **重新整理**：重新載入清單
- **全部展開** 與 **全部收合**：依提供者排序時使用

模型 ID 包含提供者前綴（例如 `openrouter/…` 與 `openai/…`）。「OpenAI (OpenRouter)」與「OpenAI (直接)」等徽章顯示流量的路由方式。

> ℹ️ **注意**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) 是路由模型，而非一般聊天模型：其回應為描述 OpenRouter API 請求內容的 JSON 格式（例如帶有 `model` 與 `messages` 的 `requests` 陣列）。若您將其用於「翻譯」、「重寫」或「轉換」，輸出面板將顯示該 JSON 而非完成的文字。這些任務請選擇一般的文字模型。詳見 [Body Builder 模型頁面](https://openrouter.ai/openrouter/bodybuilder)（OpenRouter）。

操作說明：

- 若要新增模型，請點擊 **新增** 按鈕，或點選項目中任意位置。
- 若要移除模型，請在 **已選模型** 清單中點擊旁邊的 **X**，或在「可用模型」中點擊項目上的 **已選取**。
- 若要清除清單，請點擊 **取消全部選取**。必需的免費模型將保留在清單中。

<br/>

> ℹ️ **注意**<br/>
> 如果您不希望立即為 OpenRouter 帳戶儲值，請先啟用 **僅限免費** 並選擇免費模型（無需信用卡）。您也可以使用 Ollama 在本地端執行模型，無需任何 API 金鑰。

<br/>

<a id="languages"></a>
### 語言

使用 **設定** > **語言** 來管理應用程式中使用的語言清單。

- **常用語言** 將固定在「翻譯」與「轉換」功能語言清單的頂端。
- **自訂語言** 可讓您新增內建清單中沒有的語言。

新增自訂語言後，它將與內建選項一同出現在語言選擇器中。

<br/>

<a id="cost-tracking"></a>
### 成本追蹤

使用 **設定** > **成本追蹤** 來管理成本資訊。

- **總成本**：顯示累計金額。
- **複製數值**：將總金額複製到剪貼簿。
- **重設成本**：將儲存的總金額重設為零。
- **與 API 用量同步**：將總金額設定為與 OpenRouter 帳戶報告的用量一致（僅限 OpenRouter）。
- **API 用量**：顯示 OpenRouter 的用量詳細資訊（若可用）。
- **刪除成本資料**：刪除所有資料，或僅刪除指定日期之前的資料。

**成本追蹤功能說明**：當您使用 OpenRouter 模型時，應用程式會根據 OpenRouter 提供的成本資訊顯示實際用量與花費。對於其他所有提供者，應用程式會使用 OpenRouter 公布的價格進行估算；若無可用價格，估算值可能為零。

<br/>

> ℹ️ **注意**<br/>
> 所有成本數值僅供參考，並非正式的帳單憑證。

<br/>

> ⚠️ **警告**<br/>
> 資料刪除無法復原。刪除前，請務必透過 [**歷史記錄**](#history) 或 [**儀表板** > **全部呼叫**](#dashboard-tabs) 備份或匯出您的資料，否則資料將永久遺失。與每個 API 呼叫相關的所有輸入／輸出歷史記錄也將一併刪除。

<br/>

<a id="transform-prompts"></a>
### 轉換提示詞

使用 **設定** > **轉換提示詞** 進行提示詞的批量管理。

您可以：

- 查閱已儲存的提示詞
- 刪除提示詞
- 從檔案匯入提示詞
- 匯出提示詞以備份或分享

<br/>

<a id="users"></a>
### 使用者

使用 **使用者** 功能管理網頁版的使用者帳戶。您可以新增使用者、更新其資料、重設密碼以及刪除帳號。

<br/>

<a id="api-config"></a>
### API 設定

支援的提供者包含：OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras 以及 **Ollama**（透過 baseURL 執行本地模型）。您只需設定實際使用的提供者。

**網頁應用程式：僅限管理員使用**

API 金鑰透過系統或 Docker 環境變數設定，無法於網頁 UI 中輸入。此頁面會顯示哪些提供者已設定金鑰，並可點擊 **`測試`** 按鈕測試各項功能。

<br/>

> ℹ️ **注意**<br/>
> 若要變更 API 金鑰，請更新系統或 Docker 設定中的環境變數，並重新啟動伺服器或容器。

<br/>

**桌面應用程式**

使用 **API 設定** 儲存您所用提供者的 API 金鑰。對於 Ollama，請輸入 **基礎 URL** 而非 API 金鑰。

<br/>

> 💡 **提示** <br/>
> 若您不想使用 API 金鑰或支付費用，可[下載 Ollama](https://ollama.com) 並在本機免費執行模型（例如 `translategemma:4b`）。或者，您也可以建立免費的 OpenRouter 帳戶（無需信用卡）來使用其免費模型，或從 Cerebras、Google、Groq 或 Mistral AI 取得免費 API 金鑰。

<br/>

- 只新增您需要的提供者。在 **設定** > **模型** 中，每個模型 ID 皆以提供者開頭（例如 `openrouter/openrouter/free`、`openai/gpt-4o`、`ollama/llama3`）。

新增 API 金鑰時，在文字欄位中輸入值並點選 **`儲存`**。要更換現有金鑰，請點選 **`編輯`**。為確認金鑰是否正常運作，請點選 **`測試`**。對於 Ollama 的基礎 URL，請務必點選 **`測試`** 以檢查連線。

<br/>

> ℹ️ **注意**<br/>
> 您無法查看目前 API 金鑰的實際值，僅能透過 **`編輯`** 按鈕更換。
> API 金鑰會以加密形式儲存在設定中。

<br/>

<a id="about"></a>

### 關於

**關於** 標籤頁會顯示以下內容：

- 應用程式名稱
- 版本號碼
- 建置日期
- 專案倉儲的連結

<br/><br/>

<a id="common-issues"></a>
## 常見問題

如果某些功能未如預期運作，請先檢查以下幾項。

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### 應用程式無法翻譯、重寫或轉換文字

請確認：

- 工具列中已選取模型
- [**設定** > **模型**](#models) 中至少列出一個模型
- 您的 API 設定運作正常

如果您使用的是桌面應用程式：

1. 開啟 [**設定** > **API 設定**](#api-config)。
2. 確認至少已儲存一個 API 金鑰。
3. 點選供應商旁邊的 **測試** 按鈕，確認金鑰可用。

<br/>

<a id="the-model-list-is-empty"></a>
### 模型清單為空

請開啟 [**設定** > **模型**](#models)，然後按一下 **重新整理**。

如有需要：

- 搜尋特定模型
- 啟用 **僅限免費**
- 在 **選取的模型** 中新增一個或多個模型

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### 結果產生太慢或成本過高

請嘗試以下一項或多項：

- 選取不同的模型
- 縮短輸入文字長度
- 在 [**設定** > **一般設定**](#general-settings) 中關閉 **即時翻譯（輸入時）**
- 對簡單任務使用免費模型（請見 [模型](#models)）

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### 介面顯示的語言不正確

按一下 [工具列](#toolbar) 中的地球圖示，然後選擇您偏好的 **介面語言**。

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### 文字太小或難以閱讀

請開啟 [**設定** > **一般設定**](#general-settings)，並變更以下設定：

- **字型家族**
- **大小**

<br/>

<a id="dashboard-charts-are-empty"></a>
### 儀表板圖表為空白

若出現以下情況，此現象屬正常：

- 您只使用 **免費模型**（成本圖表會留白）
- 所選的 **時間篩選** 未包含實際呼叫的期間 — 請嘗試選擇 **全部** 來查看

若選擇 **全部** 後圖表仍為空白，請確認在 [**歷史記錄**](#history) 或 **所有呼叫** 分頁中是否有顯示呼叫記錄。

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### 成本顯示「無法取得」或看起來有誤

當您透過 **OpenRouter** 使用模型時，應用程式會顯示 OpenRouter 回報的實際支出。

對於 **其他供應商**（如直接使用 OpenAI、Anthropic 等），成本是根據 OpenRouter 公布的定價資料估算。若某模型找不到對應價格，成本將顯示為 **無法取得**，且不會計入您的累計總額。

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### 總成本與供應商帳單不符

應用程式內所有的成本數值僅為 **參考用的估算值**，並非正式的帳單。

若要讓總成本更接近您在 OpenRouter 的實際支出，請開啟 [**設定** > **成本追蹤**](#cost-tracking)，並點選 **與 API 金鑰用量同步**。

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### 側邊欄中缺少歷史記錄頁面

可能是 **保留執行歷史** 功能已關閉。請開啟 [**設定** > **一般設定**](#general-settings) 並啟用此功能。請注意，開啟後並不會還原先前已被刪除的歷史資料。

<br/>

<a id="web-app-session-expired"></a>
### 網頁應用程式：意外被導向登入頁面

您的工作階段可能已逾時。請重新登入。如果經常發生此問題，請檢查伺服器設定中的工作階段有效期限。

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### 儀表板未顯示其他使用者的資料（網頁版）

只有 **管理員** 可透過 **使用者** 篩選器查看所有使用者的資料。一般使用者依設計僅能查看自己的活動記錄。

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### 我修改了一個提示詞但遺失了編輯內容

編輯提示詞時，請務必先點選 **儲存**，再點選 **返回執行**。

<br/><br/>

<a id="quick-tips"></a>
## 快速提示

- 請先使用 [**翻譯**](#translate) 功能，確認設定正常運作後，再進階使用 [**重寫**](#rewrite) 或 [**轉換**](#transform)。
- 日常文字修改請使用 [**重寫**](#rewrite)。
- 若需為特定任務建立可重複使用的流程，請使用 [**轉換**](#transform)。
- 若想掌控使用情況與成本，請使用 [**儀表板**](#dashboard)。
- 若要檢視過去的操作及其完整的輸入/輸出內容，請使用 [**歷史記錄**](#history)。
- 若正在建立提示詞資料庫，建議定期匯出提示詞以確保安全（參見 [轉換提示詞](#transform-prompts)），或方便與他人共享。

<br/><br/>

<a id="disclaimer"></a>

## 免責聲明

產品名稱和圖示歸其各自所有者所有，僅用於識別目的。本軟體與所提及的任何品牌均無關聯，亦未經其認可。

<br/><br/>

<a id="license"></a>
## 授權條款

版權所有 © 2026 Waldemar Scudeller Jr.

[Apache 授權條款 2.0 版](LICENSE)