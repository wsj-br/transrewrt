---
translated_at: "2026-03-15T22:03:00.092Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Transrewrt 使用者指南

<br />

<a id="introduction"></a>
## 簡介

Transrewrt 主要透過三種方式協助您處理文字：

- **翻譯** - 將文字從一種語言轉換為另一種語言。
- **重寫** - 以不同風格（例如更清晰、更簡短或更正式）重新表述文字。
- **轉換** - 使用稱為提示詞的自訂 AI 指示來處理文字。

<br />

本指南說明如何在安裝並執行應用程式後使用它。如需安裝步驟，請參閱主要的 [README](../README.md)。

<br />

> ℹ️ **注意**<br/>
> Transrewrt 提供適用於 Windows 和 Linux 的桌面應用程式，以及可自行託管的網路應用程式。本指南專注於應用的日常使用。若某功能僅適用於特定版本，將會明確標示。

<small>**以其他語言閱讀：** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目錄** 

- [開始之前](#before-you-start)
  - [如何取得 API 金鑰（桌面應用程式）](#how-to-get-an-api-key-desktop-app)
- [快速開始](#getting-started)
- [視窗的主要部分](#main-parts-of-the-window)
  - [側邊欄](#sidebar)
  - [工具列](#toolbar)
  - [輸入與輸出面板](#input-and-output-panels)
- [翻譯](#translate)
  - [翻譯文字](#translate-text)
  - [語言選擇](#language-selection)
  - [有用的翻譯設定](#helpful-translation-settings)
  - [鍵盤快速鍵](#keyboard-shortcuts)
- [重寫](#rewrite)
  - [重寫文字](#rewrite-text)
- [轉換](#transform)
  - [執行現有的提示詞](#run-an-existing-prompt)
  - [如果您還沒有提示詞](#if-you-have-no-prompts-yet)
  - [快速建立提示詞](#create-a-prompt-quickly)
  - [編輯提示詞](#edit-a-prompt)
  - [使用前先測試提示詞](#test-a-prompt-before-using-it)
  - [管理已儲存的提示詞](#manage-saved-prompts)
- [儀表板](#dashboard)
  - [篩選資料](#filter-the-data)
  - [儀表板分頁](#dashboard-tabs)
  - [匯出資料](#export-data)
  - [刪除特定模型的儲存記錄](#delete-stored-records-for-a-model)
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
  - [我修改了提示詞但遺失了編輯內容](#i-changed-a-prompt-and-lost-the-edits)
- [實用技巧](#quick-tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## 開始之前

要使用 Transrewrt，你需要透過 OpenRouter 存取 AI 服務。

你不需要在開始前選擇付費模型。應用程式始终包含一個**內建免費**模型，因此對於一般用途來說，這足以開始翻譯、改寫和轉換文字。

用簡單的話來說：

- **模型** 是執行工作的人工智慧引擎。
- **API 金鑰** 是你存取該服務的個人憑證。

如果你使用的是**Desktop 應用程式**，你将需要一個 API 金鑰。詳細步驟請參閱下方的[如何取得 API 金鑰 (Desktop 應用程式)](#how-to-get-an-api-key-desktop-app)。簡而言之：在 [OpenRouter](https://openrouter.ai) 建立帳戶，開啟 [金鑰](https://openrouter.ai/keys) 頁面，建立一個新金鑰，然後將它貼到 Transrewrt 的 [**設定** > **API 設定**](#api-config) 中。

如果你使用的是**網頁版**，伺服器擁有者通常會為你設定好，因此你通常不需要自行輸入 API 金鑰。

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### 如何取得 API 金鑰 (Desktop 應用程式)

如果你使用 Desktop 應用程式，請按照以下步驟操作：

1. 在瀏覽器中前往 [OpenRouter](https://openrouter.ai)。
2. 建立帳戶或登入。
3. 開啟 [金鑰](https://openrouter.ai/keys) 頁面。
4. 點擊按鈕建立新的 API 金鑰。
5. 為金鑰命名，以便日後辨識。
6. 複製新的 API 金鑰。
7. 返回 Transrewrt 並打開 **設定** > **API 設定**。
8. 將金鑰貼到 **OpenRouter API 金鑰** 欄位。
9. 點擊 **測試 API 設定** 以確保其正常運作。

> ℹ️ **注意**<br/>
> 你可以從 OpenRouter 的免費路由或任何其他可用的免費模型開始。在許多情況下，這已經足夠開始使用 Transrewrt，而無需選擇付費模型。

<br /><br />

<a id="getting-started"></a>
## 快速入門

如果你是第一次使用 Transrewrt，請按照以下順序操作：

1. 開啟應用程式。
2. 如有需要，從地球圖示選擇你的**介面語言**。
3. 如果你使用的是**Desktop 應用程式**，請打開 [**設定** > **API 設定**](#api-config)，貼上你的 OpenRouter API 金鑰，然後點擊 **測試 API 設定**。
4. 打開 [**設定** > **模型**](#models)，並將一個或多個模型新增到**已選模型**中。
5. 打開 [**設定** > **語言**](#languages)，如果你希望最常使用的語言排在前面，請選擇你的**慣用語言**。
6. 前往 **翻譯** 並執行一個簡單的翻譯來確認一切正常運作。
7. 一旦成功，試試 **改寫**，然後試試 **轉換**。

這個順序很重要。它能預防最常見的首次使用問題：在應用程式擁有可運作的 API 連線或已選擇模型之前，就嘗試執行任務。

<br /><br />

<a id="main-parts-of-the-window"></a>
## 視窗的主要部分

應用程式分為三個主要區域：

- 左側的**側邊欄**。
- 頂部的**工具列**。
- 中央的**工作區域**。

<br />

<a id="sidebar"></a>
### 側邊欄

使用側邊欄在應用程式中移動：

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/zh-TW/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>翻譯</strong> 開啟翻譯工作區。</li>
        <li><strong>改寫</strong> 開啟改寫工作區。</li>
        <li><strong>轉換</strong> 開啟自訂提示詞工作區。</li>
        <li><strong>儀表板</strong> 顯示使用量和成本資訊。</li>
        <li><strong>設定</strong> 開啟設定面板。</li>
        <li><strong>使用者</strong> 顯示已登入使用者的使用者名稱 (僅限網頁版)。</li>
      </ul>
      <br />
      <p>你还可以通过点击应用程式標誌旁边的图标来折叠侧边栏，以获得更多空间。</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### 工具列

工具列會根據你在應用程式中的位置略有變化。

- 在左側，它顯示當前頁面名稱。
- 在右側，它顯示**模型選擇器**和**介面語言**控制項。

**模型選擇器** 允許你選擇用於當前任務的 AI 引擎。

  ![Model selector](../images/screenshots/zh-TW/model-selector.png)

> ℹ️ **注意**<br/>
> 如果某些免費模型無法使用或達到使用限制，它們可能會暫時停止運作。如果發生這種情況，應用程式會自動將該模型從你的列表中移除。


**地球圖示 + 語言代碼** 會變更應用程式介面語言（例如選單和按鈕）。它**不會**變更 **翻譯** 中使用的翻譯語言。

  ![Interface language selector](../images/screenshots/zh-TW/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### 輸入和輸出面板

大多數工作區使用左側的**輸入**面板和右側的**輸出**面板。

**輸入**面板顯示：

- 字元計數
- 單字計數
- 段落計數

**輸出**面板可以顯示：

- 任務花費時間
- 該任務的成本
- 您的累計總成本
- **TPS**（每秒處理的 token 數），這是一個簡單的速度衡量指標
- 字元、單字和段落計數
- 使用的模型

如果您對技術術語感到困惑：

- **Token** 指的是文本的一小塊。您可以將其視為一個單字的一部分或一個短單字。
- **TPS** 指的是模型每秒處理多少個這樣的文本區塊。

<br /><br />

<a id="translate"></a>
## 翻譯

使用**翻譯**當您想將文本從一種語言轉換為另一種語言時。

![翻譯工作區](../images/screenshots/zh-TW/translate.png)

<br />

<a id="translate-text"></a>
### 翻譯文本

1. 打開**翻譯**。
2. 在**從**中選擇語言。
3. 在**到**中選擇語言。
4. 在工具列中選擇模型。
5. 在**輸入**中輸入或貼上文本。
6. 點擊**翻譯**。
7. 在**輸出**中讀取結果。
8. 如果您想複製結果，請使用複制按鈕。

<br />

<a id="language-selection"></a>
### 語言選擇

- **從**可以是特定語言或**檢測語言**。
- **到**是您希望結果使用的語言。

您選擇的**頂級語言**會出現在列表頂部。您可以在[**設置** > **語言**](#languages)中設置這些。

<br />

<a id="helpful-translation-settings"></a>
### 有用的翻譯設置

在[**設置** > **一般設置**](#general-settings)中，您可以更改翻譯的行為：

- **貼上時自動翻譯** 在您貼上文本後立即運行翻譯。
- **自動複製結果到剪貼板** 在成功運行後自動複製結果。
- **即時翻譯（打字時）** 在您打字時運行翻譯。
- **超時（毫秒）** 控制應用程式在運行即時翻譯前等待的時間。

<br />

<a id="keyboard-shortcuts"></a>
### 鍵盤快捷鍵

在[**設置** > **一般設置**](#general-settings)中，**Enter 鍵行為** 控制按 Enter 鍵時發生的事情：

- **Enter** 鍵可以運行任務，**Shift+Enter** 可以新增一行。
- 或者應用程式可以反過來做。

當前快捷鍵也會顯示在**翻譯**按鈕上。

<br /><br />

<a id="rewrite"></a>
## 重寫

使用**重寫**當您想改善措辭而不改變主要含義時。

![重寫工作區](../images/screenshots/zh-TW/rewrite.png)

這對於以下方面很有用：

- 修正拼寫和語法
- 使文本更清晰
- 使文本更正式或更非正式
- 縮短或擴展文本
- 使文本聽起來更技術性

<br />

<a id="rewrite-text"></a>
### 重寫文本

1. 打開**重寫**。
2. 選擇一個**模式**。
3. 在工具列中選擇模型。
4. 在**輸入**中輸入或貼上文本。
5. 點擊**重寫**。
6. 在**輸出**中審查結果。

在[**翻譯**](#keyboard-shortcuts)中描述的相同 Enter 鍵行為也適用於此。

<br /><br />

<a id="transform"></a>
## 轉換

使用**轉換**當您希望 AI 遵循自定義指令集時。

![轉換工作區](../images/screenshots/zh-TW/transform.png)

這是應用程式中最靈活的區域。您可以用它來執行諸如以下任務：

- 總結筆記
- 將粗糙文本轉變為精美的郵件
- 提取關鍵點
- 將文本轉換為特定格式

<br />

<a id="run-an-existing-prompt"></a>
### 運行現有的提示

1. 打開**轉換**。
2. 從提示列表中選擇一個提示。
3. 如果出現**目標**語言框，請選擇一個語言（如果需要）。
4. 在**輸入**中輸入或貼上文本。
5. 點擊**轉換**。
6. 在**輸出**中讀取結果。

<br />

<a id="if-you-have-no-prompts-yet"></a>
### 如果您還沒有提示

如果您的提示列表為空，請點擊**載入示例提示**。這會添加內置示例，讓您可以快速開始。

> ℹ️ **注意**<br/>
> 示例提示以英文提供。載入後，您可以編輯提示並使用**翻譯提示**來適應另一種語言的提示文本。

<br />

<a id="create-a-prompt-quickly"></a>

### 快速建立提示

建立提示最快的方式是：

1. 點擊 **New prompt**。
2. 點擊 **Generate prompt**。
3. 描述你希望提示完成的工作。
4. 選擇一個模型。
5. 讓應用程式為你建立草稿。
6. 檢閱草稿並點擊 **Save**。

![Generate prompt](../images/screenshots/zh-TW/transform-generate.png)


<br />

### 編輯提示

當你建立或編輯提示時，編輯器會出現在左側，測試區域會出現在右側。

![Transform prompt editor](../images/screenshots/zh-TW/transform-prompt-edit.png)

主要欄位如下：

- **Prompt name**：提示清單中顯示的名稱。
- **Prompt instructions (optional)**：執行提示時向用戶顯示的简短提示。
- **Model Role**：分配給 AI 的整體角色，例如 'You are a helpful assistant.'
- **Model Instructions (one per line)**：你希望 AI 遵循的具體規則（每行一項）。
- **Output description**：描述輸出的簡短詞語，例如 'summary' 或 'rewrite'。
- **Temperature (0.0 → 1.0)**：創造力滑桿。
- **Ask for target language**：在執行提示時新增目標語言選擇器。

如果你對 **Temperature**（溫度）這個技術術語不熟悉，可以這樣理解：

- **較低** 的溫度會產生更穩定、可預測的結果。
- **較高** 的溫度會產生更多樣化和創造性的結果。

你还可以使用：

- **`Generate prompt`** 從簡單描述建立新草稿
- **`Improve prompt`** 優化現有提示
- **`Translate prompt`** 翻譯提示欄位

> ⚠️ **警告**<br/>
> 在點擊 **`Back to Run`** 之前，請務必點擊 **`Save`**。如果未儲存就返回，你的更改將會遺失。

<br />

<a id="test-a-prompt-before-using-it"></a>
### 使用前測試提示

右側的測試面板讓你在日常工作使用提示之前，先用示例文字試用你的提示。

這在以下情況下很有用：

- 你正在建立新提示
- 你正在比較兩個版本的提示
- 你想檢查語氣、長度或輸出格式

<br />

<a id="manage-saved-prompts"></a>
### 管理儲存的提示

要集中管理儲存的提示，請開啟 [**設定** > **轉換提示**](#transform-prompts)。

在那裡你可以：

- 列出並刪除你的提示
- 將提示匯出為 **JSON**、**CSV** 或 **XLSX**
- 從檔案匯入提示

<br /><br />

## 儀表板

使用 **儀表板** 查看你的應用程式使用量及相關費用。

![Dashboard summary](../images/screenshots/zh-TW/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### 篩選資料

使用顶部的篩選按鈕更改時間範圍。

![Dashboard filters](../images/screenshots/zh-TW/dashboard-filter.png)

> ℹ️ **注意**<br/>
> 在網路版本中，管理員可能還會看到 **使用者** 篩選器。這讓他們可以在 **所有使用者** 和單個使用者之間切換。

<br />

<a id="dashboard-tabs"></a>
### 儀表板分頁

- **摘要** 提供使用量和成本的概覽。
- **按使用情況** 按翻譯語言、重寫模式和轉換提示分解活動。
- **按模型** 顯示你使用了哪些模型及其成本。
- **按天** 顯示每日總計。
- **所有呼叫** 顯示完整的呼叫紀錄並允許你匯出。

<br />

<a id="export-data"></a>
### 匯出資料

儀表板表格可以匯出以下格式的資料：

- **JSON**
- **CSV**
- **XLSX**

如果你想在應用程式之外檢視活動或分享報告，這會很有用。

<br />

<a id="delete-stored-records-for-a-model"></a>
### 刪除模型的儲存紀錄

在 **按模型** 或 **所有呼叫** 中，你可以刪除模型的儲存紀錄。

> ⚠️ **警告**<br/>
> 刪除儲存的紀錄無法復原。只有當你確定不再需要該歷史記錄時才使用此功能。

要刪除所有資料或根據年齡刪除紀錄，請前往 [**設定** > **費用追蹤**](#cost-tracking)。在那裡你會找到刪除所有儲存資料或僅刪除超過特定日期的資料的選項。

<br /><br />

<a id="settings"></a>
## 設定

從側邊欄開啟 **設定** 來自訂應用程式的行為。

可用的分頁可能會有所不同：

- **API 配置** 僅在桌面應用程式中可用。
- **使用者** 僅在網路應用程式中可用，且僅限管理員。

<br />

<a id="general-settings"></a>

### 一般設定

使用 **一般設定** 來控制打字行為和外觀。

**行為**

- **ENTER 鍵行為** 選擇 Enter 是執行任務還是插入新行。
- **貼上時自動翻譯** 在貼上文字後立即開始翻譯。
- **自動複製結果到剪貼板** 自動複製成功的結果。
- **即時翻譯（打字時）** 在您打字時進行翻譯。
- **超時（毫秒）** 設定即時翻譯的等待時間。

**外觀**

- **成本小數位數** 變更成本小數的顯示方式。
- **字體家族** 變更文字面板中的書寫字體。
- **大小** 變更字體大小。
- **僅限 Web：** **在應用程式周圍顯示邊距** 在介面周圍增加額外空間。

<br />

<a id="models"></a>
### 模型

使用 **設定** > **模型** 來選擇要顯示在工具列中的模型。

![設定 模型 標籤頁](../images/screenshots/zh-TW/settings-models.png)

頁面有兩個清單：

- 左側的 **可用模型**
- 右側的 **已選模型**

實用的控制項包括：

- **搜尋模型...** 依名稱尋找模型
- **僅限免費** 只顯示免費模型
- **重新整理** 重新載入清單
- **全部展開** 和 **全部摺疊** 當您依提供者排序時

要新增模型，請點擊 **新增**。

要移除模型，請在 **已選模型** 中點擊其旁边的 **X**。

要清除清單，請點擊 **取消全部選擇**。必需的免費模型將保留在清單中。

> ℹ️ **注意**<br/>
> 如果您不想立即向 OpenRouter 添加額度，請先啟用 **僅限免費** 並選擇免費模型。

<br />

<a id="languages"></a>
### 語言

使用 **設定** > **語言** 來組織應用程式中使用的語言清單。

- **頂部語言** 會固定在 **翻譯** 和 **轉換** 中語言清單的頂部附近。
- **自訂語言** 讓您可以新增一個不在內建清單中的語言。

如果您新增自訂語言，它會出現在語言選擇器中，與內建選項並列。

<br />

<a id="cost-tracking"></a>
### 成本追蹤

使用 **設定** > **成本追蹤** 來管理成本資訊。

- **總成本** 顯示累計總額。
- **複製數值** 將總額複製到剪貼板。
- **重設成本** 將儲存的總額重置為零。
- **與 API 金鑰使用量同步** 將總額設定為與 OpenRouter 報告的使用量相符。
- **API 金鑰使用量** 顯示使用詳情（如果可用）。
- **刪除成本資料** 刪除所有資料，或僅刪除早於所選日期的條目。

> ⚠️ **警告**<br/>
> 資料刪除無法復原。刪除前，請確保備份您的資料或透過 [**儀表板** > **所有通話**](#dashboard-tabs) 匯出，否則它將永久丟失。

<br />

<a id="transform-prompts"></a>
### 轉換提示詞

使用 **設定** > **轉換提示詞** 來批量管理提示詞。

您可以：

- 檢閱您儲存的提示詞
- 刪除提示詞
- 從檔案匯入提示詞
- 匯出提示詞以進行備份或分享

<br />

<a id="users"></a>
### 使用者

**僅限 Web - 僅限管理員**

使用 **使用者** 來管理網路版本中的使用者帳戶。您可以新增使用者、更新他們的詳細資料、重設密碼和刪除帳戶。

<br />

<a id="api-config"></a>
### API 設定

**僅限桌面版**

使用 **API 設定** 將桌面應用程式連接到 OpenRouter 或 Transrewrt 代理伺服器。

- **OpenRouter API 金鑰** 是您貼上金鑰的地方。
- **API URL** 是服務地址。除非您被給了不同的位址，否則請保留預設值。
- **使用 Transrewrt 代理** 將請求透過代理服務路由，而不是直接發送到 OpenRouter。
- **金鑰種子** 在啟用代理選項時出現。
- **測試 API 設定** 檢查目前設定是否正常運作。

有關如何獲取 API 金鑰的詳細步驟，請參閱上方的 [如何獲取 API 金鑰（桌面應用程式）](#how-to-get-an-api-key-desktop-app)。

> ℹ️ **注意**<br/>
> 如果不確定 **API URL**、**使用 Transrewrt 代理** 或 **金鑰種子** 的意義，請保持不變並使用預設的 OpenRouter 設定。有關代理的更多資訊請參閱 [Transrewrt Proxy 存放庫](https://github.com/wsj-br/transrewrt-proxy)。


<br />

<a id="about"></a>

### 關於

**關於** 分頁會顯示：

- 應用程式名稱
- 版本號碼
- 建置日期
- 專案儲存庫連結

<br /><br />

<a id="common-issues"></a>
## 常見問題

如果某些功能未如預期運作，請先檢查以下幾點。

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### 應用程式無法翻譯、改寫或轉換文本

請確認：

- 您已在工具列中選擇了模型
- [**設定** > **模型**](#models) 中至少列出一個模型
- 您的 API 設定正常運作

如果您正在使用桌面版應用程式：

1. 開啟 [**設定** > **API 配置**](#api-config)。
2. 檢查您的 API 金鑰是否已儲存。
3. 點擊 **測試 API 配置**。

<br />

<a id="the-model-list-is-empty"></a>
### 模型清單為空

開啟 [**設定** > **模型**](#models) 並點擊 **重新整理**。

如有需要：

- 搜尋模型
- 開啟 **僅限免費**
- 將一個或多個模型新增至 **已選模型**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### 結果太慢或太昂貴

請嘗試以下一项或多項：

- 選擇不同的模型
- 使用較短的輸入
- 在 [**設定** > **一般設定**](#general-settings) 中關閉 **即時翻譯（輸入時）**
- 對簡單任務使用免費模型（請參見 [模型](#models)）

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### 介面語言錯誤

點擊 [工具列](#toolbar) 中的地球圖示，並選擇您偏好的 **介面語言**。

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### 文字太小或难以阅读

開啟 [**設定** > **一般設定**](#general-settings) 並變更：

- **字型**
- **大小**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### 我修改了提示詞並遺失了編輯內容

編輯提示詞時，請務必在點擊 **返回執行** 之前先點擊 **儲存**。

<br /><br />

<a id="quick-tips"></a>
## 快速提示

- 先從 [**翻譯**](#translate) 開始，確保您的設定正常運作，之後再進行 [**改寫**](#rewrite) 或 [**轉換**](#transform)。
- 使用 [**改寫**](#rewrite) 進行日常用詞改進。
- 當您需要為特定任務建立可重複的工作流程時，請使用 [**轉換**](#transform)。
- 如果您想要監控使用量和成本，請使用 [**儀表板**](#dashboard)。
- 如果您建立了想要保存的提示詞庫，請定期匯出提示詞（請參見 [轉換提示詞](#transform-prompts)）。

<br /><br />

<a id="disclaimer"></a>
## 免責聲明

產品名稱與圖標屬於其各自的擁有者，且僅供識別目的使用。本軟體與任何提及之品牌均無任何附屬或背書關係。

<br /><br />

<a id="license"></a>
## 許可證

版權所有 © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)