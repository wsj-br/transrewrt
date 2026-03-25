---
translated_at: "2026-03-25T21:00:01.967Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt 横幅](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# 用户指南

<br/>

<a id="introduction"></a>
## 简介

Transrewrt 通过以下三种主要方式帮助您处理文本：

- **翻译** - 将文本从一种语言转换为另一种语言。
- **改写** - 以不同风格重写文本，例如更清晰、更简洁或更正式。
- **转换** - 使用称为“提示”的自定义 AI 指令处理文本。

<br/>

本指南介绍应用安装并运行后的使用方法。有关安装步骤，请参阅主 **[README](README.zh-CN.md)**。

<br/>

> ℹ️ **注意**<br/>
> Transrewrt 可作为 Windows 和 Linux 的桌面应用，以及自托管的网页应用使用。本指南侧重于应用的日常使用。如果某项功能仅适用于某一版本，会明确标注。

<small>**以其他语言阅读：** [English (UK)](USER-GUIDE.zh-CN.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **关于界面和文档翻译的说明**：除原始英文（英国）外，所有界面语言均使用AI模型翻译，表述可能不够准确或存在错误。

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目录**

- [开始之前](#before-you-start)
  - [如何获取免费的 OpenRouter API 密钥（桌面应用）](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [快速入门](#getting-started)
- [窗口的主要组成部分](#main-parts-of-the-window)
  - [侧边栏](#sidebar)
  - [工具栏](#toolbar)
  - [输入和输出面板](#input-and-output-panels)
- [翻译](#translate)
  - [翻译文本](#translate-text)
  - [语言选择](#language-selection)
  - [有用的翻译设置](#helpful-translation-settings)
- [改写](#rewrite)
- [转换](#transform)
  - [运行现有的提示](#run-an-existing-prompt)
  - [如果您还没有提示](#if-you-have-no-prompts-yet)
  - [快速创建提示](#create-a-prompt-quickly)
  - [编辑提示](#edit-a-prompt)
  - [在使用前测试提示](#test-a-prompt-before-using-it)
- [仪表板](#dashboard)
  - [筛选数据](#filter-the-data)
  - [仪表板标签页](#dashboard-tabs)
  - [导出数据](#export-data)
  - [删除某个模型的存储记录](#delete-stored-records-for-a-model)
- [历史记录](#history)
  - [筛选数据](#filter-the-data-1)
  - [导出历史数据](#export-history-data)
- [设置](#settings)
  - [常规设置](#general-settings)
  - [模型](#models)
  - [语言](#languages)
  - [成本跟踪](#cost-tracking)
  - [转换提示](#transform-prompts)
  - [用户](#users)
  - [API 配置](#api-config)
  - [关于](#about)
- [常见问题](#common-issues)
  - [应用无法翻译、改写或转换文本](#the-app-will-not-translate-rewrite-or-transform-text)
  - [模型列表为空](#the-model-list-is-empty)
  - [结果太慢或太贵](#the-result-is-too-slow-or-too-expensive)
  - [界面语言错误](#the-interface-is-in-the-wrong-language)
  - [文字太小或难以阅读](#the-text-is-too-small-or-hard-to-read)
  - [仪表板图表为空](#dashboard-charts-are-empty)
  - [成本显示“不可用”或看起来错误](#cost-shows-not-available-or-seems-wrong)
  - [总成本与服务商账单不符](#total-cost-does-not-match-my-provider-bill)
  - [侧边栏中缺少历史记录页面](#the-history-page-is-missing-from-the-sidebar)
  - [网页应用：意外重定向到登录页面](#web-app-redirected-to-the-login-page-unexpectedly)
  - [仪表板未显示其他用户的数据（网页版）](#dashboard-shows-no-data-for-other-users-web)
  - [修改提示后丢失了编辑内容](#i-changed-a-prompt-and-lost-the-edits)
- [快速提示](#quick-tips)
- [免责声明](#disclaimer)
- [许可](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## 开始之前

要使用 Transrewrt，您需要至少访问一个 AI 提供商。支持的提供商包括：[OpenRouter](https://openrouter.ai)（聚合了多种模型）、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras，以及用于本地模型的 [Ollama](https://ollama.com)。

您无需选择付费模型即可开始使用。一旦您添加了 OpenRouter 的 API 密钥，应用将自动启用一个内置的**免费** OpenRouter 选项。这使您可以立即开始翻译、改写和转换文本。或者，您也可以从 Cerebras、Google、Groq 或 Mistral AI 获取免费的 API 密钥。

简而言之：

- 一个**模型**是指执行任务的 AI 引擎。模型名称会带有**提供商前缀**（例如 `openrouter/…`、`openai/…`、`ollama/…`）。
- 一个**API 密钥**（对于 Ollama 而言则是**基础 URL**）是应用用来连接该提供商的方式。

如果您使用的是**桌面应用**，请在 [**设置** > **API 配置**](#api-config) 中为每个使用的提供商添加密钥。如果仅使用 OpenRouter，请参见下方的 [如何获取 API 密钥](#how-to-get-an-api-key-desktop-app)。如果您不想使用 API 密钥，可以安装 Ollama（来自 [ollama.com](https://ollama.com)），并改用本地模型，例如 `translategemma:4b`。

如果您使用的是**网页版**，则由服务器管理员通过环境变量配置提供商，因此您无法在应用中直接输入 API 密钥。

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### 如何获取免费的 OpenRouter API 密钥（桌面应用）

如果您使用的是桌面应用，请按照以下步骤操作：

1. 在浏览器中访问 [OpenRouter](https://openrouter.ai)。
2. 创建账户或登录。
3. 打开 [Keys](https://openrouter.ai/keys) 页面。
4. 点击按钮以创建新的 API 密钥。
5. 为密钥命名，以便日后识别。
6. 复制新生成的 API 密钥。
7. 返回 Transrewrt，打开 **设置** > **API 配置**。
8. 将密钥粘贴到 **OpenRouter API 密钥**（位于 **设置** > **API 配置** 中）。
9. 点击 **测试 OpenRouter 密钥** 以确认其有效。

<br/><br/>

<a id="getting-started"></a>
## 快速入门

如果您是首次使用 Transrewrt，请按照以下顺序操作：

1. 打开应用。
2. 如有需要，点击地球图标选择您的**界面语言**。
3. 如果您使用的是**桌面应用**，打开 [**设置** > **API 配置**](#api-config)，为至少一个提供商（例如 OpenRouter）添加 API 密钥，并点击 **测试** 以确认连接正常。
4. 打开 [**设置** > **模型**](#models)，将一个或多个模型添加到 **已选模型** 中。
5. 打开 [**设置** > **语言**](#languages)，设置您的**常用语言**，以便将最常使用的语言置顶显示。
6. 进入 **翻译** 功能并执行一次简单的翻译任务，确认一切正常运行。
7. 成功后，尝试使用 **改写** 功能，然后是 **转换** 功能。

顺序很重要。这样可以避免最常见的初次使用问题：在应用尚未建立有效的 API 连接或未选择模型时就尝试执行任务。

<br/><br/>

<a id="main-parts-of-the-window"></a>
## 窗口的主要组成部分

应用界面分为三个主要区域：

- 左侧的**侧边栏**。
- 顶部的**工具栏**。
- 中间的**工作区**。

<br/>

<a id="sidebar"></a>
### 侧边栏

使用侧边栏在应用中导航。您可以通过点击应用徽标旁的图标来收起侧边栏，以获得更大的空间。

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/zh-CN/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>翻译</strong> 打开翻译工作区。</li><br/>
        <li><strong>改写</strong> 打开文本改写工作区。</li><br/>
        <li><strong>转换</strong> 打开自定义提示词工作区。</li><br/>
        <li><strong>仪表盘</strong> 显示使用情况和成本信息。</li><br/>
        <li><strong>设置</strong> 打开设置面板。</li><br/>
        <li><strong>历史记录</strong> 显示使用历史，包括输入和输出文本。</li><br/>
        <li><strong>用户</strong> 显示已登录用户的用户名（仅限网页版）。</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### 工具栏

工具栏会根据您在应用程序中的位置略有不同。

- 左侧显示当前页面的名称。
- 右侧显示 **模型选择器** 和 **界面语言** 控件。

**模型选择器** 可让您为当前任务选择使用的 AI 引擎。

  ![模型选择器](../images/screenshots/zh-CN/model-selector.png)

部分免费模型可能并非始终可用——有时会离线或存在使用上限。如果发生这种情况，应用程序会自动从可用列表中移除该模型。若要控制显示的模型，请前往 [**设置** > **模型**](#models) 并编辑您的模型列表。  
您也可以单击工具栏中模型名称左侧的提供商图标，直接打开模型设置。

<br/>

**地球图标 + 语言代码** 用于更改应用程序界面语言（如菜单和按钮）。此设置 **不会** 改变 **翻译** 功能中使用的翻译语言。

  ![界面语言选择器](../images/screenshots/zh-CN/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### 输入和输出面板

大多数工作区使用左侧的 **输入** 面板和右侧的 **输出** 面板。

每个面板还显示以下信息：

| **输入**                                                          | **输出**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - 字符数 <br/>- 词数 <br/>- 段落数   <br/> | - 任务耗时<br/>- **TPS**（每秒处理的 token 数）<br/>- 字符、词和段落数量<br/>- 使用的模型 |

如果您对技术术语感到疑惑：

- **Token** 指一小段文本，可以理解为一个词的一部分或一个简短的词。
- **TPS** 指模型每秒处理了多少个这样的文本片段。

<br/>

您还可以通过在 [**设置** > **常规设置**](#general-settings) 中启用 `在操作中显示费用信息` 选项，来监控每次操作的费用（如支持）以及总费用。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## 翻译

当您需要将文本从一种语言转换为另一种语言时，请使用 **翻译** 功能。

![翻译工作区](../images/screenshots/zh-CN/translate.png)

<br/>

<a id="translate-text"></a>
### 翻译文本

1. 打开 **翻译**。
2. 在 **从** 中选择一种语言。
3. 在 **到** 中选择一种语言。
4. 在工具栏中选择一个模型。
5. 在 **输入** 框中键入或粘贴文本。
6. 点击 **翻译**。
7. 在 **输出** 框中查看结果。
8. 如需复制结果，可使用复制按钮。

<br/>

<a id="language-selection"></a>
### 语言选择

- **从** 可以是特定语言，也可以是 **自动检测语言**。
- **到** 是您希望输出结果所用的语言。

您选择的 **常用语言** 将显示在语言列表顶部。您可在 [**设置** > **语言**](#languages) 中进行设置。

<br/>

<a id="helpful-translation-settings"></a>
### 实用的翻译设置

在 [**设置** > **常规设置**](#general-settings) 中，您可以调整翻译功能的行为：

- **粘贴后自动翻译**：在您粘贴文本后立即执行翻译。
- **自动复制结果到剪贴板**：任务成功完成后自动复制结果。
- **实时翻译（输入时翻译）**：在您输入时持续执行翻译。
- **超时时间（毫秒）**：控制应用程序在执行实时翻译前的等待时间。
- **回车键作用**：设置按下 `Enter` 键时的行为。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## 改写

当您希望在不改变原意的前提下优化措辞时，请使用 **改写** 功能。

![改写工作区](../images/screenshots/zh-CN/rewrite.png)

该功能适用于：

- 修正拼写和语法
- 让文本更清晰
- 让文本更正式或更口语化
- 缩短或扩展文本
- 使文本更具专业性

<br/>

> 💡 **提示**<br/>
> 使用“**检查拼写与语法**”模式时，输出面板中会出现一个 `显示修改` 按钮。<br/>
> 点击该按钮可切换修正内容的显示状态，以展示或隐藏对您文本所做的具体修改。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## 转换

当你希望 AI 遵循自定义指令时，请使用 **转换** 功能。

![转换工作区](../images/screenshots/zh-CN/transform.png)

这是应用程序中最灵活的区域，可用于以下任务：

- 摘要笔记
- 将草稿文本润色为正式邮件
- 提取关键要点
- 将文本转换为特定格式
- 对输入文本执行其他自定义操作

<br/>

<a id="run-an-existing-prompt"></a>
### 运行现有提示词

1. 打开 **转换**。
2. 从提示词列表中选择一个提示词。
3. 如果出现 **目标** 语言选项框，请根据需要选择语言。
4. 在 **输入** 区域键入或粘贴文本。
5. 点击 **转换**。
6. 在 **输出** 区域查看结果。

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### 如果你还没有提示词

如果提示词列表为空，请点击 **加载示例提示词**。这会添加内置示例，帮助你快速开始使用。

<br/>

> ℹ️ **注意**<br/>
> 示例提示词以英文提供。加载后，你可以编辑提示词，并使用 **翻译提示词** 将其翻译成你的语言。

<br/>

<a id="create-a-prompt-quickly"></a>
### 快速创建提示词

创建提示词的最快方法是：

1. 点击 **新建提示词**。
2. 点击 **生成提示词**。
3. 描述你希望该提示词实现的功能。
4. 选择一个模型。
5. 让应用程序为你生成草稿。
6. 审核草稿并点击 **保存**。

![生成提示词](../images/screenshots/zh-CN/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### 编辑提示词

当你创建或编辑提示词时，左侧会显示编辑器，右侧会显示测试区域。

![转换提示词编辑器](../images/screenshots/zh-CN/transform-prompt-edit.png)

主要字段包括：

- **提示词名称**：在提示词列表中显示的名称。
- **提示词说明（可选）**：运行提示词时向用户显示的简短提示。
- **模型角色**：分配给 AI 的总体角色，例如“你是一个乐于助人的助手。”
- **模型指令（每行一条）**：你希望 AI 遵循的具体规则。
- **输出描述**：用于简要描述结果的词语，例如“摘要”或“重写”。
- **温度（0.0 → 1.0）**：控制模型行为的方式；详见下文。
- **请求目标语言**：运行提示词时添加目标语言选择器。

如果你不熟悉 **温度** 这一技术术语，可以这样理解：

- **较低** 的温度产生更稳定、更可预测的结果。
- **较高** 的温度产生更多样化和更具创造性。

你还可以使用：

- **`生成提示词`**：根据简单描述创建新的提示词草稿
- **`优化提示词`**：改进现有提示词
- **`翻译提示词`**：翻译提示词字段内容

<br/>

> ⚠️ **警告**<br/>
> 在点击 **`返回运行`** 之前，请务必先点击 **`保存`**。如果未保存就返回，你的更改将会丢失。

<br/>

<a id="test-a-prompt-before-using-it"></a>
### 在使用前测试提示词

右侧的测试面板允许你在日常工作中使用前，用示例文本测试提示词效果。

这在以下情况非常有用：

- 你正在创建新的提示词
- 你正在比较两个版本的提示词
- 你想检查语气、长度或输出格式

<br/>

> ℹ️ **注意**<br/>
> 你可以在 [**设置** > **转换提示词**](#transform-prompts) 中导出和导入已保存的提示词。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## 仪表板

使用 **仪表板** 查看你的应用程序使用情况以及费用（针对付费模型）。

![仪表板概览](../images/screenshots/zh-CN/dashboard-summary.png)

<br/>

> ℹ️ **注意**<br/>
> 如果你仅使用免费模型，与成本相关的图表将为空。

<br/>

<a id="filter-the-data"></a>
### 筛选数据

使用顶部的筛选按钮更改时间范围。

![仪表板筛选器](../images/screenshots/zh-CN/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> **用户** 筛选器仅在网页版中对管理员可见。普通用户不会看到此筛选器，且该功能在桌面应用程序中不可用。

<br/>

<a id="dashboard-tabs"></a>

### 仪表板标签页

- **概览** 提供使用情况和成本的总体信息。
- **按使用情况** 按翻译语言、重写模式和转换提示来细分操作记录。
- **按模型** 显示你使用的模型及其花费。
- **按天统计** 展示每日总计。
- **全部调用记录** 显示完整的调用历史，并支持导出。

<br/>

<a id="export-data"></a>
### 导出数据

仪表板表格支持以下格式导出数据：

- **JSON**
- **CSV**
- **XLSX**

如果你希望在应用程序外查看操作记录或分享报告，此功能将非常有用。

<br/>

<a id="delete-stored-records-for-a-model"></a>
### 删除某个模型的存储记录

在 **按模型** 或 **全部调用记录** 中，你可以点击“垃圾桶”图标来删除某个模型的存储记录。

> ⚠️ **警告**<br/>
> 删除存储记录的操作无法撤销。仅在确认不再需要该历史记录时使用。

若要删除所有数据或根据记录的时间删除旧数据，请前往 [**设置** > **成本追踪**](#cost-tracking)。在那里你可以选择删除所有存储的数据，或仅删除早于特定日期的数据。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## 历史记录

点击 **历史记录** 可查看你在 **Transrewrt** 中执行操作的记录，包括每次操作的输入和输出内容。

![历史记录页面](../images/screenshots/zh-CN/history.png)

<br/>

<a id="filter-the-history"></a>
### 筛选数据

**历史记录** 使用与 **仪表板** 页面相同的筛选条件。你可以使用它们来选择时间范围。

![仪表板筛选器](../images/screenshots/zh-CN/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> “用户”筛选器仅在网页版中对管理员可见。普通用户不会看到此筛选器，桌面应用程序中也不提供该功能。

<br/>

<a id="export-history-data"></a>
### 导出历史记录数据

历史记录页面可将筛选后的数据导出为以下格式：

- **JSON**
- **CSV**
- **XLSX**

如果你希望在应用程序外查看操作记录或分享报告，此功能将非常有用。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## 设置

从侧边栏打开 **设置**，可自定义应用程序的行为。

可用的标签页取决于平台和你的用户角色：

  | 标签页              | 桌面端 | 网页版（管理员） | 网页版（普通用户） |
  |---------------------|:------:|:--------------:|:------------------:|
  | 通用设置            |  是   |       是       |         是         |
  | 模型                |  是   |       是       |         是         |
  | 语言                |  是   |       是       |         是         |
  | 成本追踪            |  是   |       是       |         —          |
  | 转换提示            |  是   |       是       |         是         |
  | 用户                |   —   |       是       |         —          |
  | API 配置            |  是   |       是       |         —          |
  | 关于                |  是   |       是       |         是         |

<br/>

> ℹ️ **注意**<br/>
> 在网页版中，每位用户拥有独立的配置。所选模型、语言、通用选项和转换提示等设置均按用户存储。你所做的更改不会影响其他用户。

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### 通用设置

使用 **通用设置** 可控制输入行为、是否为 **历史记录** 保存执行详情以及界面外观。

**行为**

- **回车键行为**：选择按下 `Enter` 键是执行任务还是插入新行。
- **粘贴时自动翻译**：粘贴文本后立即开始翻译。
- **自动复制结果到剪贴板**：成功执行后自动复制结果。
- **实时翻译（输入时翻译）**：在输入过程中进行翻译。
- **超时时间（毫秒）**：设置实时翻译的等待时间。

**历史记录**

- **保留执行历史**：控制每次翻译、重写和转换是否保存 **输入和输出文本** 以供侧边栏 [**历史记录**](#history) 页面查看。关闭此选项时将提示确认；若确认，数据库中已保存的历史文本将被移除。
- **删除历史数据**：可通过 **删除数据** 按时间删除存储的文本（例如早于几个月的数据，或删除 **所有数据（清除）**）。此操作仅影响 **历史记录** 页面中保存的执行文本，**不会** 删除成本或使用总量。如需删除或清理 **成本** 数据，请使用 [**设置** > **成本追踪**](#cost-tracking)。

**外观**

- **在操作中显示成本信息**：控制是否在翻译、重写和转换的结果面板上显示每次操作的成本（如可用）及总成本。
- **成本小数位数**：更改成本显示的小数位数。
- **仅限网页版**：**在应用周围显示边距**，可在界面周围增加额外空间。
- **字体**：更改文本面板中的书写字体。
- **字号**：更改字体大小。

<br/>

<a id="models"></a>

### 模型

使用 **设置** > **模型** 来选择哪些模型显示在工具栏中。

![设置 - 模型选项卡](../images/screenshots/zh-CN/settings-models.png)

该页面包含两个列表：

- 左侧的 **可用模型**
- 右侧的 **已选模型**

实用控件包括：

- **搜索模型...**：通过名称查找模型
- **提供商** 标签：将列表限制为某一引擎（如 OpenRouter、OpenAI、Ollama 等）
- **仅限免费**：仅显示免费模型
- **刷新**：重新加载列表
- **全部展开** 和 **全部收起**：在按提供商排序时使用

模型 ID 包含提供商前缀（例如 `openrouter/…` 对比 `openai/…`）。“**OpenAI（OpenRouter）**” 和 “**OpenAI（直连）**” 这样的标签用于显示流量的路由方式。

> ℹ️ **注意**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) 是一个路由模型，而非通用聊天模型：它的回复是描述 OpenRouter API 请求体的 JSON（例如包含 `model` 和 `messages` 的 `requests` 数组）。如果你将其用于 **翻译**、**改写** 或 **转换** 功能，输出面板将显示该 JSON 而非最终文本。请为这些任务选择常规文本模型。详见 [Body Builder 模型页面](https://openrouter.ai/openrouter/bodybuilder)（OpenRouter 官网）。

操作说明：

- 要添加模型，请点击 **添加** 按钮，或点击该条目任意位置。
- 要移除模型，请在 **已选模型** 列表中点击其旁边的 **X** 按钮，或在“可用模型”中点击条目上的 **已选**。
- 要清空列表，请点击 **全部取消选择**。必需的免费模型将保留在列表中。

<br/>

> ℹ️ **注意**<br/>
> 如果你不想立即为 OpenRouter 充值，可先启用 **仅限免费** 并选择免费模型（无需信用卡）。你也可以使用 Ollama 在本地运行模型，无需任何 API 密钥。

<br/>

<a id="languages"></a>
### 语言

使用 **设置** > **语言** 来管理应用程序中使用的语言列表。

- **常用语言**：在 **翻译** 和 **转换** 功能的语言列表顶部固定显示。
- **自定义语言**：允许你添加不在内置列表中的语言。

添加自定义语言后，它将与内置选项一同出现在语言选择器中。

<br/>

<a id="cost-tracking"></a>
### 成本追踪

使用 **设置** > **成本追踪** 来管理费用信息。

- **总成本**：显示累计总额。
- **复制数值**：将总成本复制到剪贴板。
- **重置成本**：将存储的总额重置为零。
- **与 API 密钥使用情况同步**：将总额设置为与你的 OpenRouter 账户报告的用量一致（仅限 OpenRouter）。
- **API 密钥使用情况**：显示 OpenRouter 的用量详情（如可用）。
- **删除成本数据**：删除所有数据，或仅删除早于所选日期的条目。

**成本追踪说明**：当你使用 OpenRouter 模型时，应用会根据 OpenRouter 提供的成本信息显示实际使用量和支出。对于其他所有提供商，应用将使用 OpenRouter 公布的价格来估算成本；若无价格信息，估算值可能为零。

<br/>

> ℹ️ **注意**<br/>
> 所有成本数据仅为参考估算，非正式账单文件。

<br/>

> ⚠️ **警告**<br/>
> 数据删除不可撤销。删除前请务必备份或通过 [**历史记录**](#history) 或 [**仪表板** > **全部调用**](#dashboard-tabs) 导出数据，否则数据将永久丢失。  
> 与每次 API 调用相关的所有输入/输出历史也将被删除。

<br/>

<a id="transform-prompts"></a>
### 转换提示词

使用 **设置** > **转换提示词** 来批量管理提示词。

你可以：

- 查看已保存的提示词
- 删除提示词
- 从文件导入提示词
- 导出提示词用于备份或分享

<br/>

<a id="users"></a>
### 用户

使用 **用户** 功能在网页版中管理用户账户。你可以添加用户、更新用户信息、重置密码以及删除账户。

<br/>

<a id="api-config"></a>
### API 配置

支持的提供商包括：OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras 和 **Ollama**（通过基础 URL 使用本地模型）。你只需配置你实际使用的提供商。

**Web 应用程序：仅管理员可用**

API 密钥通过系统或 Docker 环境变量进行配置——不能在 Web UI 中输入。此页面显示哪些提供商已配置密钥，并允许你通过点击 **`测试`** 按钮测试每个连接。

<br/>

> ℹ️ **注意**<br/>
> 要更改 API 密钥，请更新系统或 Docker 配置中的环境变量，然后重启服务器或容器。

<br/>

**桌面应用程序**

使用 **API 配置** 为每个使用的提供商存储 API 密钥。对于 Ollama，请输入 **基础 URL** 而非 API 密钥。

<br/>

> 💡 **提示** <br/>
> 如果你不想使用 API 密钥或支付费用，可以 [下载 Ollama](https://ollama.com) 并在本地免费运行模型（例如 `translategemma:4b`）。另外，你也可以创建一个免费的 OpenRouter 账户（无需信用卡）来使用其免费模型，或从 Cerebras、Google、Groq 或 Mistral AI 获取免费 API 密钥。

<br/>

- 仅添加你需要的提供商。在 **设置** > **模型** 中，每个模型 ID 都以提供商名称开头（例如 `openrouter/openrouter/free`、`openai/gpt-4o`、`ollama/llama3`）。

要添加 API 密钥，请在文本框中输入值并点击 **`保存`**。要替换现有密钥，请点击 **`编辑`**。要验证密钥是否有效，请点击 **`测试`**。对于 Ollama 的基础 URL，请始终点击 **`测试`** 检查连接。

<br/>

> ℹ️ **注意**<br/>
> 你无法查看当前 API 密钥的值。只能通过 **`编辑`** 按钮进行替换。  
> API 密钥以加密形式存储在配置中。

<br/>

<a id="about"></a>

### 关于

**关于** 选项卡显示以下内容：

- 应用名称
- 版本号
- 构建日期
- 项目仓库的链接

<br/><br/>

<a id="common-issues"></a>
## 常见问题

如果某些功能未按预期工作，请先检查以下几点。

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### 应用无法翻译、重写或转换文本

请检查：

- 您已在工具栏中选择了一个模型
- [**设置** > **模型**](#models) 中至少列出一个模型
- 您的 API 配置已正常工作

如果您使用的是桌面应用：

1. 打开 [**设置** > **API 配置**](#api-config)。
2. 检查是否已保存至少一个 API 密钥。
3. 点击提供商旁边的 **测试** 按钮，确认密钥有效。

<br/>

<a id="the-model-list-is-empty"></a>
### 模型列表为空

打开 [**设置** > **模型**](#models)，然后点击 **刷新**。

如有必要：

- 搜索模型
- 开启 **仅限免费**
- 在 **已选模型** 中添加一个或多个模型

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### 结果生成太慢或成本太高

尝试以下一项或多项操作：

- 选择另一个模型
- 使用更短的输入内容
- 在 [**设置** > **常规设置**](#general-settings) 中关闭 **实时翻译（输入时）**
- 对简单任务使用免费模型（参见 [模型](#models)）

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### 界面语言不正确

点击 [工具栏](#toolbar) 中的地球图标，选择您偏好的 **界面语言**。

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### 文本太小或难以阅读

打开 [**设置** > **常规设置**](#general-settings)，更改以下选项：

- **字体**
- **字号**

<br/>

<a id="dashboard-charts-are-empty"></a>
### 仪表板图表为空

在以下情况下，此现象是正常的：

- 您仅使用 **免费模型**（费用图表将为空）
- 所选的 **时间过滤器** 没有覆盖调用发生的时间段 — 可尝试选择 **全部** 进行查看

如果选择 **全部** 后图表仍为空，请确认 [**历史记录**](#history) 或 **所有调用** 选项卡中是否显示了调用记录。

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### 费用显示“不可用”或似乎有误

当您通过 **OpenRouter** 使用模型时，应用将显示 OpenRouter 报告的实际花费。

对于 **其他提供商**（如直接使用 OpenAI、Anthropic 等），费用是根据 OpenRouter 公布的定价数据估算的。如果某个模型未找到匹配的价格，费用将显示为 **不可用**，并且不会计入您的累计总额。

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### 总费用与服务商账单不符

应用中的所有费用均为 **仅供参考的估算值**，并非正式账单。

若要使总额更接近您在 OpenRouter 的实际消费，请打开 [**设置** > **费用追踪**](#cost-tracking)，然后点击 **与 API 密钥用量同步**。

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### 侧边栏中缺少历史记录页面

**保留执行历史** 可能已关闭。请打开 [**设置** > **常规设置**](#general-settings) 并启用该选项。请注意，开启后无法恢复此前已删除的历史数据。

<br/>

<a id="web-app-session-expired"></a>
### 网页应用：意外重定向到登录页面

您的会话可能已超时，请重新登录。如果频繁发生，请检查服务器配置中的会话有效期设置。

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### 仪表板不显示其他用户的数据（网页版）

只有 **管理员** 才能通过 **用户** 过滤器查看所有用户的数据。普通用户默认只能查看自己的活动记录。

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### 我修改了一个提示词但丢失了更改

编辑提示词时，请务必在点击 **返回运行** 前先点击 **保存**。

<br/><br/>

<a id="quick-tips"></a>
## 快速提示

- 请先使用 [**翻译**](#translate) 功能，确保您的配置正常，再尝试 [**重写**](#rewrite) 或 [**转换**](#transform) 功能。
- 使用 [**重写**](#rewrite) 来进行日常文本的语句优化。
- 使用 [**转换**](#transform) 来为特定任务创建可重复的工作流程。
- 使用 [**仪表板**](#dashboard) 来监控使用情况和费用。
- 使用 [**历史记录**](#history) 来查看过去的操作及其完整的输入/输出内容。
- 如果您正在构建一个希望长期保存或与他人共享的提示词库，请定期导出提示词（参见 [转换提示词](#transform-prompts)）。

<br/><br/>

<a id="disclaimer"></a>

## 免责声明

产品名称和图标归其各自所有者所有，仅用于识别目的。本软件与所提及的任何品牌均无关联，也不受其认可。

<br/><br/>

<a id="license"></a>
## 许可证

版权所有 © 2026 Waldemar Scudeller Jr.

[Apache 许可证 2.0](LICENSE)