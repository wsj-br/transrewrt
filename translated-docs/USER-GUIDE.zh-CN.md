---
translated_at: "2026-03-26T00:26:32.326Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt 横幅](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# 用户指南

<br/>

<a id="introduction"></a>
## 简介

Transrewrt 以三种主要方式帮助您处理文本：

- **翻译** - 将文本从一种语言转换为另一种语言。
- **重写** - 以不同风格重新表述文本，例如更清晰、更简短或更正式。
- **转换** - 使用称为提示（prompts）的自定义 AI 指令处理文本。

<br/>

本指南说明了在应用安装并运行后如何使用它。有关安装步骤，请参阅主 **[README](README.zh-CN.md)**。

<br/>

> ℹ️ **注意**<br/>
> Transrewrt 可作为 Windows 和 Linux 的桌面应用程序，也可作为自托管的网页应用。本指南重点介绍应用的日常使用。如果某些功能仅适用于某个版本，会明确标记说明。

<small>**阅读其他语言版本：** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **关于界面和文档翻译的说明：** 除原始英文（英国）外，所有界面语言均通过 AI 模型翻译；用词可能不够准确或包含错误。

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目录**

- [开始之前](#before-you-start)
  - [如何获取免费的 OpenRouter API 密钥（桌面应用）](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [快速上手](#getting-started)
- [窗口的主要部分](#main-parts-of-the-window)
  - [侧边栏](#sidebar)
  - [工具栏](#toolbar)
  - [输入和输出面板](#input-and-output-panels)
- [翻译](#translate)
  - [翻译文本](#translate-text)
  - [语言选择](#language-selection)
  - [有用的翻译设置](#helpful-translation-settings)
- [重写](#rewrite)
- [转换](#transform)
  - [运行现有提示](#run-an-existing-prompt)
  - [如果没有提示](#if-you-have-no-prompts-yet)
  - [快速创建提示](#create-a-prompt-quickly)
  - [编辑提示](#edit-a-prompt)
  - [使用前测试提示](#test-a-prompt-before-using-it)
- [仪表板](#dashboard)
  - [过滤数据](#filter-the-data)
  - [仪表板标签页](#dashboard-tabs)
  - [导出数据](#export-data)
  - [删除某个模型的存储记录](#delete-stored-records-for-a-model)
- [历史记录](#history)
  - [过滤数据](#filter-the-data-1)
  - [导出历史数据](#export-history-data)
- [设置](#settings)
  - [常规设置](#general-settings)
  - [模型](#models)
  - [语言](#languages)
  - [成本追踪](#cost-tracking)
  - [转换提示](#transform-prompts)
  - [用户](#users)
  - [API 配置](#api-config)
  - [关于](#about)
- [常见问题](#common-issues)
  - [应用无法翻译、重写或转换文本](#the-app-will-not-translate-rewrite-or-transform-text)
  - [模型列表为空](#the-model-list-is-empty)
  - [结果太慢或太昂贵](#the-result-is-too-slow-or-too-expensive)
  - [界面语言错误](#the-interface-is-in-the-wrong-language)
  - [文本太小或难以阅读](#the-text-is-too-small-or-hard-to-read)
  - [仪表板图表为空](#dashboard-charts-are-empty)
  - [成本显示“不可用”或看起来不正确](#cost-shows-not-available-or-seems-wrong)
  - [总成本与服务商账单不符](#total-cost-does-not-match-my-provider-bill)
  - [侧边栏缺少历史记录页面](#the-history-page-is-missing-from-the-sidebar)
  - [网页应用：意外重定向到登录页面](#web-app-redirected-to-the-login-page-unexpectedly)
  - [仪表板不显示其他用户的统计数据（网页版）](#dashboard-shows-no-data-for-other-users-web)
  - [我修改了提示但丢失了编辑内容](#i-changed-a-prompt-and-lost-the-edits)
- [快速技巧](#quick-tips)
- [免责声明](#disclaimer)
- [许可证](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## 开始前

要使用 Transrewrt，您需要至少接入一个 AI 服务提供商。支持的提供商包括：[OpenRouter](https://openrouter.ai)（聚合了多个模型）、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras，以及用于本地模型的 [Ollama](https://ollama.com)。

开始时无需选择付费模型。一旦您添加了 OpenRouter 的 API 密钥，应用将自动启用内置的 **免费** OpenRouter 选项，让您立即开始文本翻译、改写和转换。或者，您也可以从 Cerebras、Google、Groq 或 Mistral AI 获取免费的 API 密钥。

简单解释：

- **模型** 是执行任务的 AI 引擎。模型在列表中会带有 **提供商前缀**（例如 `openrouter/…`、`openai/…`、`ollama/…`）。
- **API 密钥**（对于 Ollama 则是 **基础 URL**）是应用程序连接对应提供商的方式。

如果您使用的是 **桌面应用**，请在 [**设置** > **API 配置**](#api-config) 中为每个使用的提供商添加密钥。如果仅使用 OpenRouter，请参见下方的 [如何获取 API 密钥](#how-to-get-an-api-key-desktop-app)。如果您不想使用 API 密钥，可以安装 Ollama（来自 [ollama.com](https://ollama.com)），并使用本地模型，例如 `translategemma:4b`。

如果您使用的是 **网页版**，服务器管理员会通过环境变量配置提供商，因此您无法直接在应用中输入 API 密钥。

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### 如何获取免费的 OpenRouter API 密钥（桌面应用）

如果您正在使用桌面应用，请按照以下步骤操作：

1. 在您的网络浏览器中访问 [OpenRouter](https://openrouter.ai)。
2. 注册账户或登录。
3. 打开 [Keys](https://openrouter.ai/keys) 页面。
4. 点击按钮创建一个新的 API 密钥。
5. 给密钥命名，以便日后识别。
6. 复制新创建的 API 密钥。
7. 返回 Transrewrt，打开 **设置** > **API 配置**。
8. 将密钥粘贴到 **OpenRouter API 密钥** 字段中（位于 **设置** > **API 配置**）。
9. 点击 **测试 OpenRouter 密钥** 以确认其可用。

<br/><br/>

<a id="getting-started"></a>
## 快速入门

如果这是您第一次使用 Transrewrt，请按以下顺序操作：

1. 打开应用。
2. 如有需要，点击地球图标选择您的 **界面语言**。
3. 如果您使用的是 **桌面应用**，请打开 [**设置** > **API 配置**](#api-config)，为至少一个提供商添加 API 密钥（例如 OpenRouter），并点击 **测试** 以验证其是否有效。
4. 打开 [**设置** > **模型**](#models)，将一个或多个模型添加到 **已选模型** 中。
5. 打开 [**设置** > **语言**](#languages)，设置您的 **常用语言**，以便最常用的语言优先显示。
6. 进入 **翻译** 功能，执行一次简单翻译以确认一切正常。
7. 成功后，尝试 **改写** 和 **转换** 功能。

此顺序很重要。它可以避免初次使用时最常见的问题：在尚未配置有效的 API 连接或未选择模型的情况下尝试执行任务。

<br/><br/>

<a id="main-parts-of-the-window"></a>
## 窗口的主要组成部分

应用界面分为三个主要区域：

- 左侧的 **侧边栏**。
- 顶部的 **工具栏**。
- 居中的 **工作区**。

<br/>

<a id="sidebar"></a>
### 侧边栏

使用侧边栏可在应用中导航。点击应用 logo 旁边的小图标可收起侧边栏以获得更大的工作空间。

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/zh-CN/sidebar.png" alt="应用程序侧边栏" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>翻译</strong> 打开翻译工作区。</li><br/>
        <li><strong>改写</strong> 打开文本改写工作区。</li><br/>
        <li><strong>转换</strong> 打开自定义提示词工作区。</li><br/>
        <li><strong>仪表盘</strong> 显示使用情况和成本信息。</li><br/>
        <li><strong>设置</strong> 打开设置面板。</li><br/>
        <li><strong>历史记录</strong> 显示使用历史，包含输入和输出的文本。</li><br/>
        <li><strong>用户</strong> 显示当前登录用户的用户名（仅限网页版）。</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### 工具栏

工具栏会根据您在应用中的位置略有不同。

- 在左侧，显示当前页面的名称。
- 在右侧，显示**模型选择器**和**界面语言**控制选项。

**模型选择器**允许您为当前任务选择使用的AI引擎。

  ![模型选择器](../images/screenshots/zh-CN/model-selector.png)

某些免费模型可能并非始终可用——有时它们处于离线状态或有使用上限。如果发生这种情况，应用会自动从您的可用列表中移除该模型。要控制显示哪些模型，请前往[**设置** > **模型**](#models)并编辑您的模型列表。  
您也可以通过点击工具栏中模型名称左侧的提供商图标，直接打开模型设置。

<br/>

**地球图标 + 语言代码**用于更改应用界面语言（如菜单和按钮）。它**不会**更改**翻译**功能中使用的翻译语言。

  ![界面语言选择器](../images/screenshots/zh-CN/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### 输入与输出面板

大多数工作区使用左侧的**输入**面板和右侧的**输出**面板。

每个面板还显示以下信息：

| **输入**                                                        | **输出**                                                                                                               |
|------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| - 字符数 <br/>- 单词数 <br/>- 段落数                       | - 任务耗时<br/>- **TPS**（每秒处理的 token 数）<br/>- 字符、单词和段落数量<br/>- 使用的模型 |

如果您对技术术语有疑问：

- **Token** 表示一小段文本，可以理解为一个词的一部分或一个短词。
- **TPS** 表示模型每秒处理了多少个这样的文本片段。

<br/>

您还可以在[**设置** > **常规设置**](#general-settings)中启用`在操作中显示成本信息`选项，以监控每次操作的成本（如果支持）以及总成本。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## 翻译

当您需要将文本从一种语言转换为另一种语言时，请使用**翻译**功能。

![翻译工作区](../images/screenshots/zh-CN/translate.png)

<br/>

<a id="translate-text"></a>
### 翻译文本

1. 打开**翻译**。
2. 在**从**中选择一种语言。
3. 在**到**中选择目标语言。
4. 在工具栏中选择一个模型。
5. 在**输入**框中键入或粘贴文本。
6. 点击**翻译**。
7. 在**输出**框中查看结果。
8. 如果需要复制结果，可使用复制按钮。

<br/>

<a id="language-selection"></a>
### 语言选择

- **从**可以是特定语言，也可以选择**检测语言**。
- **到**是您希望获得的目标语言。

您设定的**常用语言**将显示在列表顶部。您可以在[**设置** > **语言**](#languages)中进行设置。

<br/>

<a id="helpful-translation-settings"></a>
### 实用的翻译设置

在[**设置** > **常规设置**](#general-settings)中，您可以调整翻译的行为方式：

- **粘贴时自动翻译**：粘贴文本后立即执行翻译。
- **自动复制结果到剪贴板**：成功运行后自动复制结果。
- **实时翻译（输入时）**：在您输入时持续执行翻译。
- **超时时间（毫秒）**：控制应用在执行实时翻译前的等待时间。
- **回车键行为**：控制按下 `Enter` 键时的操作：

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## 改写

当您希望优化措辞但不改变主要含义时，请使用**改写**功能。

![改写工作区](../images/screenshots/zh-CN/rewrite.png)

此功能适用于：

- 修正拼写和语法
- 使文本更清晰
- 使文本更正式或更口语化
- 缩短或扩展文本
- 使文本更具专业性

<br/>

> 💡 **提示**<br/>
> 当您使用“**检查拼写与语法**”模式时，输出面板中会出现一个 `显示修改` 按钮。
> 点击该按钮可切换修改内容的显示，查看或隐藏对文本所做的具体更改。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## 转换

当你希望 AI 遵循自定义的一组指令时，请使用 **转换** 功能。

![转换工作区](../images/screenshots/zh-CN/transform.png)

这是应用程序中最灵活的功能区域。你可以将其用于以下任务：

- 摘要笔记
- 将草稿文本转化为一封措辞得体的邮件
- 提取关键要点
- 将文本转换为特定格式
- 对输入文本执行其他自定义操作

<br/>

<a id="run-an-existing-prompt"></a>
### 运行现有提示词

1. 打开 **转换**。
2. 从提示词列表中选择一个提示词。
3. 如果出现 **目标语言** 输入框，请选择所需语言（可选）。
4. 在 **输入** 区域键入或粘贴文本。
5. 点击 **转换**。
6. 在 **输出** 区域查看结果。

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### 如果你还没有提示词

如果你的提示词列表为空，请点击 **加载示例提示词**。这会添加内置示例，以便你快速开始使用。

<br/>

> ℹ️ **注意**<br/>
> 示例提示词以英文提供。加载后，你可以编辑提示词，并使用 **翻译提示词** 功能将其翻译成你的语言。

<br/>

<a id="create-a-prompt-quickly"></a>
### 快速创建提示词

创建提示词的最快方法是：

1. 点击 **新建提示词**。
2. 点击 **生成提示词**。
3. 描述你希望该提示词实现的功能。
4. 选择一个模型。
5. 让应用程序为你生成一个草稿。
6. 审查该草稿，然后点击 **保存**。

![生成提示词](../images/screenshots/zh-CN/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### 编辑提示词

当你创建或编辑提示词时，编辑器将显示在左侧，右侧则会出现一个测试区域。

![转换提示词编辑器](../images/screenshots/zh-CN/transform-prompt-edit.png)

主要字段包括：

- **提示词名称**：在提示词列表中显示的名称。
- **提示词说明（可选）**：运行提示词时向用户显示的简短提示。
- **模型角色**：分配给 AI 的总体角色，例如“你是一名乐于助人的助手。”
- **模型指令（每行一条）**：你希望 AI 遵循的具体规则。
- **输出描述**：简短描述输出结果类型的词语，例如“摘要”或“重写”。
- **温度（0.0 → 1.0）**：控制模型行为方式；见下文说明。
- **请求目标语言**：运行提示词时添加一个目标语言选择器。

如果你不熟悉 **温度** 这个术语，可以这样理解：

- **较低** 的温度会生成更稳定、更可预测的结果。
- **较高** 的温度会带来更多的变化性和创造性。

你还可以使用以下功能：

- **`生成提示词`**：根据简单描述创建新的提示词草稿
- **`优化提示词`**：改进现有提示词
- **`翻译提示词`**：翻译提示词中的各项内容

<br/>

> ⚠️ **警告**<br/>
> 在点击 **`返回运行`** 之前，请务必先点击 **`保存`**。如果未保存就返回，你的更改将会丢失。

<br/>

<a id="test-a-prompt-before-using-it"></a>
### 使用前测试提示词

右侧的测试面板允许你在日常工作中正式使用提示词之前，用示例文本进行测试。

这个功能在以下情况特别有用：

- 你正在创建一个新的提示词
- 你正在比较两个版本的提示词
- 你想检查输出的语气、长度或格式

<br/>

> ℹ️ **注意**<br/>
> 你可以在 [**设置** > **转换提示词**](#transform-prompts) 中导出和导入已保存的提示词。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## 仪表板

使用 **仪表板** 查看你的应用使用情况以及相关费用（适用于付费模型）。

![仪表板概览](../images/screenshots/zh-CN/dashboard-summary.png)


<br/>

> ℹ️ **注意**<br/>
> 如果你仅使用免费模型，与成本相关的图表将为空白。

<br/>

<a id="filter-the-data"></a>
### 筛选数据

使用顶部的筛选按钮更改时间范围。

![仪表板筛选器](../images/screenshots/zh-CN/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> **用户** 筛选器仅对网页版中的管理员可见。普通用户不会看到此筛选器，且该功能在桌面应用中不可用。

<br/>

<a id="dashboard-tabs"></a>

### 仪表盘标签页

- **概览** 提供使用情况和成本的总体视图。
- **按使用情况** 按翻译语言、重写模式和转换提示分解活动记录。
- **按模型** 显示您使用的模型及其花费。
- **按天** 显示每日总计。
- **全部调用** 显示完整的调用历史，您可以导出该数据。

<br/>

<a id="export-data"></a>
### 导出数据

仪表盘表格支持以下格式导出数据：

- **JSON**
- **CSV**
- **XLSX**

如果您希望在应用程序外部查看活动记录或分享报告，此功能非常有用。

<br/>

<a id="delete-stored-records-for-a-model"></a>
### 删除某个模型的存储记录

在 **按模型** 或 **全部调用** 页面中，点击“垃圾桶”图标即可删除某个模型的存储记录。

> ⚠️ **警告**<br/>
> 删除的存储记录无法恢复。请仅在确认不再需要该历史记录时使用此功能。

如需删除所有数据，或根据记录时间删除较早记录，请前往 [**设置** > **成本追踪**](#cost-tracking)。在那里您可以选择删除所有存储的数据，或仅删除某个日期之前的数据。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## 历史记录

点击 **历史记录** 查看您在 **Transrewrt** 中的操作历史，包括每次操作的输入和输出内容。

![历史记录页面](../images/screenshots/zh-CN/history.png)

<br/>

<a id="filter-the-history"></a>
### 过滤数据

**历史记录** 使用与 **仪表盘** 页面相同的过滤器。您可以使用它们来选择时间范围。

![仪表盘过滤器](../images/screenshots/zh-CN/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> 在网页版中，“用户”过滤器仅对管理员可见。普通用户不会看到此过滤器，且桌面应用程序中也不提供此功能。

<br/>

<a id="export-history-data"></a>
### 导出历史记录数据

历史记录页面可以将筛选后的数据导出为以下格式：

- **JSON**
- **CSV**
- **XLSX**

此功能适用于希望在应用程序外部查看活动记录或分享报告的场景。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## 设置

从侧边栏打开 **设置**，以自定义应用程序的行为。

可用标签页取决于平台和您的角色：

  | 标签页               | 桌面端 | 网页版（管理员） | 网页版（普通用户） |
  |-------------------|:-------:|:-----------:|:------------------:|
  | 常规设置          |   是   |     是     |        是         |
  | 模型              |   是   |     是     |        是         |
  | 语言              |   是   |     是     |        是         |
  | 成本追踪          |   是   |     是     |         —          |
  | 转换提示          |   是   |     是     |        是         |
  | 用户              |    —    |     是     |         —          |
  | API 配置          |   是   |     是     |         —          |
  | 关于              |   是   |     是     |        是         |

<br/>

> ℹ️ **注意**<br/>
> 在网页版中，每位用户都有独立的配置。所选模型、语言、常规选项和转换提示等设置均按用户保存。您所做的更改不会影响其他用户。

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### 常规设置

使用 **常规设置** 可控制输入行为、是否为 **历史记录** 保存执行详情，以及界面外观。

**行为**

- **回车键行为** 用于选择按下 `Enter` 键是执行任务还是插入新行。
- **粘贴时自动翻译** 在您粘贴文本后立即启动翻译。
- **自动复制结果到剪贴板** 自动复制成功的结果。
- **实时翻译（输入时）** 在您输入时自动进行翻译。
- **超时时间（毫秒）** 设置实时翻译的等待时间。

**历史记录**

- **保留执行历史** 控制每次翻译、重写和转换操作是否保存 **输入和输出文本**，以供侧边栏的 [**历史记录**](#history) 页面查看。关闭此选项将提示确认；确认后，已保存的历史文本将从数据库中删除。
- **删除历史数据** 允许您按时间（例如几个月前的数据，或 **全部数据（清除）**）使用 **删除数据** 功能来移除已存储的文本。此操作仅影响 **历史记录** 页面保存的执行文本，**不会** 删除成本或使用量总计。如需删除或清理 **成本** 数据，请使用 [**设置** > **成本追踪**](#cost-tracking)。

**外观**

- **在操作中显示成本信息** 控制是否在翻译、重写和转换的输出面板中显示每次操作的成本（如可用）以及总成本。
- **成本小数位数** 调整成本小数的显示方式。
- **仅限网页版**：**在应用周围显示边距** 在界面周围增加额外空间。
- **字体系列** 更改文本面板中的字体。
- **大小** 调整字体大小。

<br/>

<a id="models"></a>

### 模型

使用 **设置** > **模型** 来选择哪些模型显示在工具栏中。

![设置 - 模型选项卡](../images/screenshots/zh-CN/settings-model hon)

页面包含两个列表：

- 左侧的 **可用模型**
- 右侧的 **已选模型**

有用的控件包括：

- **搜索模型...** 按名称查找模型
- **提供方** 标签用于将列表限制为某个引擎（OpenRouter、OpenAI、Ollama 等）
- **仅免费** 仅显示免费模型
- **刷新** 重新加载列表
- 当按提供方排序时，可使用 **展开全部** 和 **收起全部**

模型 ID 包含提供方前缀（例如 `openrouter/…` 与 `openai/…`）。徽章如 **OpenAI (OpenRouter)** 与 **OpenAI (直接)** 显示了流量的路由方式。

> ℹ️ **注意**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) 是一个路由模型，而非通用聊天模型：其回复是描述 OpenRouter API 请求体的 JSON（例如包含 `model` 和 `messages` 的 `requests` 数组）。如果你将其用于 **翻译**、**重写** 或 **转换**，输出面板将显示该 JSON，而非完成后的文本。请为这些任务选择正常的文本模型。参见 OpenRouter 上的 [Body Builder 模型页面](https://openrouter.ai/openrouter/bodybuilder)。

操作说明：

- 添加模型：点击 **添加** 按钮，或点击可用模型列表中的任意位置。
- 移除模型：在 **已选模型** 列表中点击其旁边的 **X**，或在可用模型中点击条目上的 **已选**。
- 清空列表：点击 **全部取消选择**。必需的免费模型将保留在列表中。

<br/>

> ℹ️ **注意**<br/>
> 如果你不想立即为 OpenRouter 充值，可先启用 **仅免费** 并选择免费模型（无需信用卡）。你也可以使用 Ollama 在本地运行模型，无需任何 API 密钥。

<br/>

<a id="languages"></a>
### 语言

使用 **设置** > **语言** 来管理应用中使用的语言列表。

- **常用语言** 会在 **翻译** 和 **转换** 功能的语言列表顶部固定显示。
- **自定义语言** 允许你添加内置列表中没有的语言。

添加自定义语言后，它将与内置选项一同出现在语言选择器中。

<br/>

<a id="cost-tracking"></a>
### 成本追踪

使用 **设置** > **成本追踪** 来管理费用信息。

- **总成本** 显示累计总额。
- **复制数值** 将总金额复制到剪贴板。
- **重置成本** 将存储的总额重置为零。
- **与 API 使用量同步** 将总额设置为与 OpenRouter 账户报告的用量一致（仅 OpenRouter）。
- **API 使用量** 显示 OpenRouter 的使用详情（如可用）。
- **删除成本数据** 删除所有数据，或仅删除指定日期之前的数据。

**成本追踪说明**：当你使用 OpenRouter 模型时，应用会根据 OpenRouter 提供的成本信息显示实际使用和支出情况。对于其他所有提供方，应用会基于 OpenRouter 发布的价格估算成本；如价格不可用，估算值可能为零。

<br/>

> ℹ️ **注意**<br/>
> 所有成本数据仅为参考，非正式账单。

<br/>

> ⚠️ **警告**<br/>
> 数据删除后无法恢复。删除前请确保通过 [**历史记录**](#history) 或 [**仪表板** > **所有调用**](#dashboard-tabs) 备份或导出你的数据，否则数据将永久丢失。与每个 API 调用条目相关的所有输入/输出历史也将被删除。

<br/>

<a id="transform-prompts"></a>
### 转换提示词

使用 **设置** > **转换提示词** 批量管理提示词。

你可以：

- 查看已保存的提示词
- 删除提示词
- 从文件导入提示词
- 导出提示词用于备份或分享

<br/>

<a id="users"></a>
### 用户

使用 **用户** 在网页版中管理用户账户。你可以添加用户、更新其信息、重置密码以及删除账户。

<br/>

<a id="api-config"></a>
### API 配置

支持的提供方包括：OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras 和 **Ollama**（通过基础 URL 运行本地模型）。你只需配置你使用的提供方。

**Web 应用：仅管理员可用**

API 密钥通过系统或 Docker 环境变量配置——不会在 Web 界面中输入。此页面显示哪些提供方已配置密钥，并允许你点击 **`测试`** 按钮测试每个连接。

<br/>

> ℹ️ **注意**<br/>
> 要更改 API 密钥，请在系统或 Docker 配置中更新环境变量，然后重启服务器或容器。

<br/>

**桌面应用**

使用 **API 配置** 为每个使用的提供方存储 API 密钥。对于 Ollama，请输入 **基础 URL** 而非 API 密钥。

<br/>

> 💡 **提示** <br/>
> 如果你不想使用 API 密钥或为使用付费，可以 [下载 Ollama](https://ollama.com) 并在本地免费运行模型（例如 `translategemma:4b`）。或者，你可以创建一个免费的 OpenRouter 账户（无需信用卡）使用其免费模型，或从 Cerebras、Google、Groq 或 Mistral AI 获取免费 API 密钥。

<br/>

- 仅添加你需要的提供方。在 **设置** > **模型** 中，每个模型 ID 都以提供方开头（例如 `openrouter/openrouter/free`、`openai/gpt-4o`、`ollama/llama3`）。

要添加 API 密钥，将值输入文本框并点击 **`保存`**。要替换现有密钥，点击 **`编辑`**。要验证密钥是否有效，点击 **`测试`**。对于 Ollama 基础 URL，务必点击 **`测试`** 检查连接。

<br/>

> ℹ️ **注意**<br/>
> 你无法查看当前 API 密钥的值，只能通过 **`编辑`** 挌钮替换。API 密钥以加密形式存储在配置中。

<br/>

<a id="about"></a>

### 关于

**关于** 选项卡显示以下内容：

- 应用名称
- 版本号
- 构建日期
- 指向项目仓库的链接

<br/><br/>

<a id="common-issues"></a>
## 常见问题

如果某些功能未按预期工作，请先检查以下几点。

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### 应用无法翻译、重写或转换文本

请检查以下事项：

- 是否已在工具栏中选择了一个模型
- [**设置** > **模型**](#models) 中是否列出至少一个模型
- API 配置是否正常工作

如果您使用的是桌面应用程序：

1. 打开 [**设置** > **API 配置**](#api-config)。
2. 确认至少保存了一个 API 密钥。
3. 单击对应服务提供商旁边的 **测试** 按钮，确认密钥有效。

<br/>

<a id="the-model-list-is-empty"></a>
### 模型列表为空

打开 [**设置** > **模型**](#models) 并点击 **刷新**。

如有需要：

- 搜索某个模型
- 启用 **仅限免费模型**
- 在 **已选模型** 中添加一个或多个模型

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### 结果生成太慢或费用过高

尝试以下操作之一或多项：

- 选择另一个模型
- 缩短输入内容
- 在 [**设置** > **通用设置**](#general-settings) 中关闭 **实时翻译（输入时翻译）**
- 对简单任务使用免费模型（参见 [模型](#models)）

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### 界面语言不正确

点击 [工具栏](#toolbar) 中的地球图标，选择您偏好的 **界面语言**。

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### 文字太小或难以阅读

打开 [**设置** > **通用设置**](#general-settings)，修改以下设置：

- **字体**
- **字号**

<br/>

<a id="dashboard-charts-are-empty"></a>
### 仪表板图表为空

在以下情况下这是正常的：

- 您仅使用 **免费模型**（费用图表将为空）
- 所选的 **时间筛选器** 未覆盖实际调用的时间段 — 可尝试选择 **全部** 进行查看

如果选择 **全部** 后图表仍为空，请确认在 [**历史记录**](#history) 或 **全部调用** 选项卡中是否出现了调用记录。

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### 费用显示“不可用”或看起来有误

当您通过 **OpenRouter** 使用模型时，应用会显示 OpenRouter 报告的实际花费。

对于 **其他提供商**（如直接使用 OpenAI、Anthropic 等），费用是根据 OpenRouter 发布的定价数据估算得出的。如果某个模型没有匹配的价格数据，费用将显示为 **不可用**，且不会计入您的累计总额。

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### 总费用与服务提供商账单不符

应用中的所有费用均为 **仅供参阅的估算值**，并非正式账单。

若希望使总额更接近 OpenRouter 实际消费金额，可打开 [**设置** > **费用跟踪**](#cost-tracking) 并点击 **与 API 密钥用量同步**。

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### 侧边栏中缺少历史记录页面

可能关闭了 **保留执行历史** 功能。请打开 [**设置** > **通用设置**](#general-settings) 并启用该选项。请注意，启用后无法恢复之前已被删除的历史数据。

<br/>

<a id="web-app-session-expired"></a>
### 网页版应用：意外被重定向至登录页面

您的会话可能已超时，请重新登录。如果频繁发生此问题，请检查服务器配置中的会话有效期设置。

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### 仪表板不显示其他用户的数据（网页版）

只有 **管理员** 可通过 **用户** 筛选器查看所有用户的数据。普通用户按设计仅能看到自己的活动记录。

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### 我修改了提示词但丢失了编辑内容

编辑提示词时，请务必先点击 **保存**，然后再点击 **返回运行**。

<br/><br/>

<a id="quick-tips"></a>
## 快速提示

- 首先使用 [**翻译**](#translate)，确保您的配置正常运行，再尝试 [**重写**](#rewrite) 或 [**转换**](#transform)。
- 使用 [**重写**](#rewrite) 进行日常文本的优化。
- 若需为特定任务建立可重复的工作流，请使用 [**转换**](#transform)。
- 如需监控使用情况与费用，请使用 [**仪表板**](#dashboard)。
- 使用 [**历史记录**](#history) 查看以往操作及其完整的输入/输出内容。
- 若您正在构建需要保存或与他人共享的提示词库，请定期导出提示词（参见 [转换提示词](#transform-prompts)）。

<br/><br/>

<a id="disclaimer"></a>

## 免责声明

产品名称和图标归其各自所有者所有，仅用于识别目的。本软件与所提及的任何品牌均无关联，也不受其认可。

<br/><br/>

<a id="license"></a>
## 许可证

版权所有 © 2026 Waldemar Scudeller Jr.

[Apache 许可证 2.0](LICENSE)