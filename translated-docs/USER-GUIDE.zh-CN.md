---
translation_last_updated: '2026-04-27T21:41:32.511Z'
source_file_mtime: '2026-04-27T17:00:19.020Z'
source_file_hash: 253d03c03bd028d8119ce13e1d810e974a386f3e98054a9e750d5ecfbf1c76d0
translation_language: zh-CN
source_file_path: USER-GUIDE.md
translation_models:
  - openai/gpt-4o-mini
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# 用户指南

<br/>

<a id="introduction"></a>
## 简介

Transrewrt 可通过以下三种主要方式帮助您处理文本：

- **翻译** - 将文本从一种语言转换为另一种语言。
- **改写** - 以不同风格重新表述文本，例如更清晰、更简短或更正式。
- **转换** - 使用称为提示词的自定义 AI 指令处理文本。

<br/>

本指南说明了应用安装并运行后如何使用它。有关安装步骤，请参阅主 **[README](README.zh-CN.md)**。

<br/>

> ℹ️ **注意**<br/>
> Transrewrt 可作为 Windows 和 Linux 的桌面应用，以及自托管的网页应用使用。本指南重点介绍应用的日常使用。若某项内容仅适用于一个版本，会明确标注。

<small>**阅读其他语言版本：** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **关于用户界面和文档翻译的说明：** 除原始英文（英国）外，
> 所有界面语言均由 AI 模型翻译，措辞可能不够准确或存在错误。

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目录**

- [开始之前](#before-you-start)
  - [如何获取免费的 OpenRouter API 密钥（桌面应用）](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [入门](#getting-started)
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
  - [如果你还没有提示](#if-you-have-no-prompts-yet)
  - [快速创建提示](#create-a-prompt-quickly)
  - [编辑提示](#edit-a-prompt)
  - [使用前测试提示](#test-a-prompt-before-using-it)
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
  - [应用无法翻译、重写或转换文本](#the-app-will-not-translate-rewrite-or-transform-text)
  - [模型列表为空](#the-model-list-is-empty)
  - [结果太慢或太贵](#the-result-is-too-slow-or-too-expensive)
  - [界面语言错误](#the-interface-is-in-the-wrong-language)
  - [文字太小或难以阅读](#the-text-is-too-small-or-hard-to-read)
  - [仪表板图表为空](#dashboard-charts-are-empty)
  - [成本显示“不可用”或看起来错误](#cost-shows-not-available-or-seems-wrong)
  - [总成本与服务商账单不符](#total-cost-does-not-match-my-provider-bill)
  - [侧边栏中缺少历史记录页面](#the-history-page-is-missing-from-the-sidebar)
  - [Web 应用：意外重定向到登录页面](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web 管理端：忘记或丢失密码](#web-admin-forgot-or-lost-a-password)
  - [仪表板未显示其他用户的数据（Web）](#dashboard-shows-no-data-for-other-users-web)
  - [我修改了提示但丢失了编辑内容](#i-changed-a-prompt-and-lost-the-edits)
- [快速提示](#quick-tips)
- [免责声明](#disclaimer)
- [许可证](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## 开始之前

要使用 Transrewrt，您需要至少接入一个 AI 提供商。支持的提供商包括：[OpenRouter](https://openrouter.ai)（聚合了多个模型）、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras，以及用于本地模型的 [Ollama](https://ollama.com)。

您无需选择付费模型即可开始使用。一旦添加了您的 OpenRouter API 密钥，应用将自动启用内置的 **免费** OpenRouter 选项。这使您可以立即开始翻译、改写和转换文本。或者，您也可以从 Cerebras、Google、Groq 或 Mistral AI 获取免费的 API 密钥。

简单来说：

- **模型** 是执行任务的 AI 引擎。模型会以 **提供商前缀** 列出（例如 `openrouter/…`、`openai/…`、`ollama/…`）。
- **API 密钥**（或对于 Ollama 为 **基础 URL**）是应用连接该提供商的方式。

如果使用 **桌面应用**，请在 [**设置** > **API 配置**](#api-config) 中为你使用的每个提供商添加密钥。如果仅使用 OpenRouter，请参阅下方的 [如何获取 API 密钥](#how-to-get-an-api-key-desktop-app)。如果不想使用 API 密钥，可以安装 Ollama（来自 [ollama.com](https://ollama.com)）并改用本地模型，例如 `translategemma:4b`。

如果使用 **网页版**，服务器管理员会通过环境变量配置提供商，因此你无法直接在应用中输入 API 密钥。

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### 如何获取免费的 OpenRouter API 密钥（桌面应用）

如果使用桌面应用，请按以下步骤操作：

1. 在浏览器中访问 [OpenRouter](https://openrouter.ai)。
2. 创建账户或登录。
3. 打开 [密钥](https://openrouter.ai/keys) 页面。
4. 点击按钮创建新的 API 密钥。
5. 为密钥命名，以便日后识别。
6. 复制新生成的 API 密钥。
7. 返回 Transrewrt 并打开 **设置** > **API 配置**。
8. 将密钥粘贴到 **OpenRouter API 密钥**（位于 **设置** > **API 配置** 下）。
9. 点击 **测试 OpenRouter 密钥** 以确保其正常工作。

<br/><br/>

<a id="getting-started"></a>
## 入门指南

如果是首次使用 Transrewrt，请按以下顺序操作：

1. 打开应用。
2. 如有需要，通过地球图标选择您的 **界面语言**。
3. 如果您使用的是 **桌面应用**，请打开 [**设置** > **API 配置**](#api-config)，为至少一个提供商（例如 OpenRouter）添加 API 密钥，并点击 **测试** 以验证其是否正常工作。
4. 打开 [**设置** > **模型**](#models)，并将一个或多个模型添加到 **已选模型** 中。
5. 打开 [**设置** > **语言**](#languages)，如果希望常用语言优先显示，请设置您的 **常用语言**。
6. 进入 **翻译** 功能并执行一次简单翻译，确认一切正常。
7. 成功后，尝试 **重写** 和 **转换** 功能。

此顺序很重要。它可避免最常见的首次使用问题：在应用尚未建立有效 API 连接或未选择模型时就尝试执行任务。

<br/><br/>

<a id="main-parts-of-the-window"></a>
## 窗口的主要部分

该应用分为三个主要区域：

- 左侧的 **侧边栏**。
- 顶部的 **工具栏**。
- 中间的 **工作区**。

<br/>

<a id="sidebar"></a>
### 侧边栏

使用侧边栏在应用中导航。点击应用标志旁的图标可收起侧边栏以获得更大空间。

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
        <li><strong>改写</strong> 打开改写工作区。</li><br/>
        <li><strong>转换</strong> 打开自定义提示词工作区。</li><br/>
        <li><strong>仪表盘</strong> 显示使用情况和费用信息。</li><br/>
        <li><strong>设置</strong> 打开设置面板。</li><br/>
        <li><strong>历史</strong> 显示包含输入和输出文本的使用历史。</li><br/>
        <li><strong>用户</strong> 显示已登录用户的用户名（仅限网页版）。</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### 工具栏

工具栏会根据你在应用中的位置略有变化。

- 左侧显示当前页面名称。
- 右侧显示 **模型选择器** 和 **界面语言** 控件。

**模型选择器** 可让您为当前任务选择要使用的 AI 引擎。

![Model selector](../images/screenshots/zh-CN/model-selector.png)

某些免费模型可能并非始终可用——有时它们处于离线状态或有使用上限。如果发生这种情况，应用程序将自动从您的可用列表中移除该模型。要控制显示的模型，请转到[**设置** > **模型**](#models)并编辑您的模型列表。  
您也可以通过点击工具栏中模型名称左侧的提供商图标，直接打开模型设置。

<br/>

**地球图标 + 语言代码** 用于更改应用界面语言，例如菜单和按钮。它**不会** 更改 **翻译** 功能中使用的翻译语言。

![Interface language selector](../images/screenshots/zh-CN/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### 输入和输出面板

大多数工作区使用左侧的 **输入** 面板和右侧的 **输出** 面板。

每个面板还显示：

| **输入**                                                          | **输出**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - 字符数 <br/>- 词数 <br/>- 段落数 <br/> | - 任务耗时<br/>- **TPS**（每秒代币数）<br/>- 字符、词和段落数量<br/>- 所使用的模型 |

如果您对这些技术术语感到疑惑：

- **代币** 指一小段文本。您可以将其理解为一个词的一部分或一个短词。
- **TPS** 表示模型每秒处理的文本片段数量。

<br/>

您还可以在[**设置** > **常规设置**](#general-settings)中启用选项`Show cost information on the actions`，以监控每次操作的费用（如果可用）和总费用。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## 翻译

当您需要将文本从一种语言转换为另一种语言时，请使用**翻译**。

![Translate workspace](../images/screenshots/zh-CN/translate.png)

<br/>

<a id="translate-text"></a>
### 翻译文本

1. 打开 **翻译**。
2. 在 **从** 中选择一种语言。
3. 在 **到** 中选择一种语言。
4. 在工具栏中选择一个模型。
5. 在 **输入** 区域键入或粘贴文本。
6. 点击 **翻译**。
7. 在 **输出** 区域查看结果。
8. 如需复制结果，请使用复制按钮。

<br/>

<a id="language-selection"></a>
### 语言选择

- **From** 可以是特定语言或**检测语言**。
- **To** 是您希望结果输出的语言。

您选择的**首选语言** 会显示在列表顶部。您可以在[**设置** > **语言**](#languages)中设置这些语言。

<br/>

<a id="helpful-translation-settings"></a>
### 有用的翻译设置

在[**设置** > **常规设置**](#general-settings)中，您可以更改翻译的行为方式：

- **粘贴时自动翻译** 在您粘贴文本后立即执行翻译。
- **自动将结果复制到剪贴板** 在成功运行后自动复制结果。
- **实时翻译（输入时）** 在您输入时持续执行翻译。
- **超时时间（毫秒）** 控制应用在执行实时翻译前的等待时间。
- **回车键**用于控制按下 `Enter` 时发生的行为：

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## 改写

当您希望改进措辞但不改变主要含义时，请使用 **改写** 功能。

![Rewrite workspace](../images/screenshots/zh-CN/rewrite.png)

这适用于以下情况：

- 修正拼写和语法（**检查拼写和语法**）
- 使文本更清晰（**提升清晰度**）
- 一次运行中生成多个不同的改写版本（**替代版本**）
- 使文本更正式或更非正式（**正式** / **非正式**）
- 缩短或扩展文本（**缩短** / **扩展**）
- 使文本更具技术性（**转为技术性文本**）

<br/>

> 💡 **提示**<br/>
> 当您使用“**检查拼写和语法**”模式时，输出面板中会显示一个 **显示更改** 开关（位于 **复制** 按钮旁边）。
> 打开或关闭该开关，以显示或隐藏对文本所做的具体修改。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## 转换

当您希望 AI 遵循自定义指令集时，请使用 **转换** 功能。

![Transform workspace](../images/screenshots/zh-CN/transform.png)

这是应用中最灵活的部分。您可以将其用于以下任务：

- 摘要笔记内容
- 将草稿文本转化为格式规范的电子邮件
- 提取关键要点
- 将文本转换为特定格式
- 对输入文本执行任何其他自定义操作

<br/>

<a id="run-an-existing-prompt"></a>
### 运行现有提示词

1. 打开 **转换**。
2. 从提示列表中选择一个提示。
3. 如果出现 **目标**语言框，请选择所需语言。
4. 在 **输入**框中键入或粘贴文本。
5. 点击 **转换**。
6. 在 **输出**中查看结果。

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### 如果您还没有提示词

如果您的提示词列表为空，请在“转换”工作区中点击 **加载示例提示词**。相同的控件始终位于 [**设置** > **转换提示词**](#transform-prompts) 的导出/导入行中。两者都会添加内置示例，以便您快速开始使用。

<br/>

> ℹ️ **注意**<br/>
> 示例提示词以英文提供。加载后，您可以编辑提示词并使用 **翻译提示** 将其翻译成您的语言。

<br/>

<a id="create-a-prompt-quickly"></a>
### 快速创建提示词

创建提示词的最快方法是：

1. 点击 **新建提示**。
2. 点击 **生成提示**。
3. 描述您希望该提示实现的功能。
4. 选择一个模型。
5. 让应用为您创建草稿。
6. 审核草稿后点击 **保存**。

![Generate prompt](../images/screenshots/zh-CN/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### 编辑提示词

创建或编辑提示词时，编辑器会显示在左侧，测试区域会显示在右侧。

![Transform prompt editor](../images/screenshots/zh-CN/transform-prompt-edit.png)

主要字段包括：

- **提示名称**：在提示列表中显示的名称。
- **提示说明（可选）**：运行提示时向用户显示的简短提示。
- **模型角色**：分配给 AI 的总体角色，例如“你是一个有用的助手。”
- **模型指令（每行一条）**：您希望 AI 遵循的具体规则。
- **输出描述**：描述结果的简短词语，例如“摘要”或“重写”。
- **温度（0.0 → 1.0）**：控制模型行为方式；详见下文。
- **请求目标语言**：运行提示时添加目标语言选择器。

如果技术术语 **温度** 对您来说是新的，可以这样理解：

- **较低** 的温度会产生更稳定、更可预测的结果。
- **较高** 的温度会产生更多样化和更具创造性的结果。

您还可以使用：

- **`Generate prompt`** 根据简要描述创建新草稿
- **`Improve prompt`** 优化现有提示词
- **`Translate prompt`** 翻译提示词字段

<br/>

> ⚠️ **警告**<br/>
> 请先点击 **`Save`**，再点击 **`Back to Run`**。如果未保存就返回，您的更改将丢失。

<br/>

<a id="test-a-prompt-before-using-it"></a>
### 在使用前测试提示词

右侧的测试面板允许您在日常工作中使用提示词之前，用示例文本进行尝试。

这在以下情况中非常有用：

- 您正在构建新的提示词
- 您正在比较两个版本的提示词
- 您希望检查语气、长度或输出格式

<br/>

> ℹ️ **注意**<br/>
> 您可以在 [**设置** > **转换提示词**](#transform-prompts) 中导出和导入已保存的提示词。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## 仪表盘

使用 **仪表盘** 查看您对应用程序的使用情况以及产生的费用（针对付费模型）。

![Dashboard summary](../images/screenshots/zh-CN/dashboard-summary.png)

<br/>

> ℹ️ **注意**<br/>
> 如果您仅使用 **免费** 模型，**费用** 金额可能为零，且以成本为重点的摘要可能看起来为空。在 **摘要** 中，**随时间的使用情况** 和 **按模型的使用情况** 仍会显示所选时间段内的 **调用次数**（翻译、改写和转换）。

<br/>

<a id="filter-the-data"></a>
### 筛选数据

使用顶部的筛选按钮更改时间范围。

![Dashboard filters](../images/screenshots/zh-CN/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> **用户** 筛选器仅在网页版中对管理员可见。普通用户将看不到此筛选器，且桌面应用程序中不可用。

<br/>

<a id="dashboard-tabs"></a>
### 仪表盘标签页

- **摘要**提供使用情况和成本的概览。包括 **使用情况随时间变化**（按天统计的累积 **调用次数**，涵盖翻译、重写和转换）和 **按模型统计使用情况**（每个模型的总 **调用次数**，包括转换）。
- **按使用情况**按翻译语言、重写模式和转换提示分解活动。
- **按模型**显示您使用的模型及其成本。
- **按天**显示每日总计。
- **所有调用**显示完整的调用历史记录，并允许您导出。

<br/>

<a id="export-data"></a>
### 导出数据

仪表盘表格可导出以下格式的数据：

- **JSON**
- **CSV**
- **XLSX**

如果要查看应用外的活动或共享报告，此功能非常有用。

<br/>

<a id="delete-stored-records-for-a-model"></a>
### 删除某个模型的存储记录

在 **按模型** 或 **所有调用** 中，您可以通过点击“垃圾桶”图标来删除某个模型的存储记录。

> ⚠️ **警告**<br/>
> 删除存储记录无法撤销。仅在确认不再需要该历史记录时使用此操作。

如需删除所有数据或根据记录的创建时间删除记录，请前往[**设置** > **费用跟踪**](#cost-tracking)。在那里，您可以选择删除所有存储的数据，或仅删除早于特定日期的数据。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## 历史

单击 **历史** 以查看您在 **Transrewrt** 中的操作历史记录，包括每次操作的输入和输出。

![History page](../images/screenshots/zh-CN/history.png)

<br/>

<a id="filter-the-history"></a>
### 筛选数据

**历史** 使用与 **仪表盘** 页面相同的筛选条件。使用它们来选择时间范围。

![Dashboard filters](../images/screenshots/zh-CN/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> **用户** 筛选器仅在网页版中对管理员可见。普通用户将看不到此筛选器，且桌面应用程序中不可用。

<br/>

<a id="export-history-data"></a>
### 导出历史数据

历史页面可以将筛选后的数据导出为以下格式：

- **JSON**
- **CSV**
- **XLSX**

如果要查看应用外的活动或共享报告，此功能非常有用。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## 设置

从侧边栏打开 **设置** 以自定义应用的行为。

可用的选项卡取决于平台和您的角色：

| 标签页               | 桌面端 | 网页端（管理员） | 网页端（普通用户） |
  |-------------------|:-------:|:-----------:|:------------------:|
  | 常规设置  |   是   |     是     |        是         |
  | 模型            |   是   |     是     |        是         |
  | 语言         |   是   |     是     |        是         |
  | 成本追踪     |   是   |     是     |         -          |
  | 转换提示 |   是   |     是     |        是         |
  | 用户             |    -    |     是     |         -          |
  | API 配置        |   是   |     是     |         -          |
  | 关于             |   是   |     是     |        是         |

<br/>

> ℹ️ **注意**<br/>
> 在网页版中，每个用户都有自己的配置。所选模型、语言、常规选项和转换提示词等设置均按用户存储。您所做的更改不会影响其他用户。

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### 常规设置

使用 **常规设置** 来控制输入行为、是否为 **历史** 保存执行详情以及外观显示。

**行为**

- **回车键行为** 用于选择 `Enter` 是运行任务还是插入新行。
- **粘贴时自动翻译** 在您粘贴文本后立即开始翻译。
- **将翻译结果自动复制到剪贴板** 会自动复制成功的翻译结果。
- **实时翻译（输入时）** 在您输入时进行翻译。
- **超时（毫秒）** 设置实时翻译的等待时间。

**历史**

- **保留执行历史** 控制每次翻译、改写和转换是否在侧边栏的 [**历史**](#history) 视图中保存 **输入和输出文本**。关闭此功能会要求确认；若确认，已存储的历史文本将从数据库中移除。
- **删除历史数据** 允许您按时间（例如几个月前的数据，或 **所有数据（清除）**）使用 **删除数据** 功能移除已存储的文本。这仅影响 **历史** 视图中保存的执行文本；**不会** 删除费用或使用总量。要删除或清理 **费用** 数据，请使用 [**设置** > **费用跟踪**](#cost-tracking)。

**外观**

- **在操作中显示费用信息**控制是否显示每次操作的费用（如可用）以及“翻译”、“重写”和“转换”输出面板中的总费用。
- **费用小数位数**更改费用小数的显示方式。
- **仅限网页端：** **在应用周围显示边距**会在界面周围添加额外空间。
- **字体家族**更改文本面板中的书写字体。
- **字号**更改字体大小。

**配置备份**

- **在备份中包含使用数据** —— 启用后，ZIP 文件还将包含执行历史和 API 调用数据。
- **备份配置** —— 创建一个单独的 ZIP 文件（默认为 UTC 时间的 `transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip`），其中包含 `config.json`、`state.json`、可选的加密密钥、用户、偏好设置、自定义提示以及（如果已启用）使用数据。备份成功后，确认信息将显示保存的文件名。
- **从备份恢复** —— 首先打开一个**确认对话框**。在对话框中选择备份 ZIP 文件（**浏览** / 文件选择器，或在支持的环境中拖放），然后查看选项：
  - **恢复使用数据** —— 当备份 ZIP 包含使用数据时，导入使用历史；如果只想恢复设置和提示，请取消勾选。
  - **恢复前清除旧的使用数据** —— 在应用备份前删除当前安装中的现有使用/历史记录（可选；当您希望完全替换时使用）。

在网页版或桌面版中创建的备份均可在另一版本中恢复。在网页版中恢复桌面版备份时，数据将恢复到管理员用户。

<br/>

<a id="models"></a>
### 模型

使用 **设置** > **模型** 来选择工具栏中显示的模型。

![Settings Models tab](../images/screenshots/zh-CN/settings-models.png)

该页面包含两个列表：

- 左侧的 **可用模型**
- 右侧的 **已选模型**

有用的控件包括：

- **搜索模型...** 按名称查找模型
- **提供商** 标签用于将列表限制为一个引擎（OpenRouter、OpenAI、Ollama 等）
- **仅显示免费模型** 仅显示免费模型
- **刷新** 重新加载模型列表
- 当按提供商排序时，可使用 **展开全部** 和 **收起全部**

模型 ID 包含提供商前缀（例如 `openrouter/…` 与 `openai/…`）。徽章如 **OpenAI (OpenRouter)** 与 **OpenAI (直接)** 显示了流量的路由方式。

> ℹ️ **注意**<br/>
> **OpenRouter Body Builder**（`openrouter/bodybuilder`）是一个路由模型，而非通用聊天模型：其回复是描述 OpenRouter API 请求体的 JSON（例如包含 `requests`、`model` 和 `messages` 的数组）。如果你将其用于 **翻译**、**改写** 或 **转换**，输出面板将显示该 JSON 而非完成的文本。请为这些任务选择正常的文本模型。参见 OpenRouter 上的 [Body Builder 模型页面](https://openrouter.ai/openrouter/bodybuilder)。

操作：

- 要添加模型，请点击 **添加** 或可用模型列表中的任意位置。

- 要移除模型，请点击 **已选模型** 中对应模型旁的 **X**，或在可用模型条目上点击 **已选择**。

- 要清除列表，请点击 **取消全选**。必需的免费模型将保留在列表中。

<br/>

> ℹ️ **注意**<br/>
> 如果你不想立即向 OpenRouter 添加信用额度，可先启用 **仅免费** 并选择免费模型（无需信用卡）。你也可以使用 Ollama 在本地运行模型，无需任何 API 密钥。

<br/>

<a id="languages"></a>
### 语言

使用 **设置** > **语言** 来管理应用中使用的语言列表。

- **常用语言** 会固定在 **翻译** 和 **转换** 功能的语言列表顶部附近。
- **自定义语言** 允许你添加内置列表中没有的语言。

如果你添加了自定义语言，它将与内置选项一起出现在语言选择器中。

<br/>

<a id="cost-tracking"></a>
### 费用跟踪

使用 **设置** > **费用跟踪** 来管理费用信息。

- **总费用** 显示累计总额。
- **复制数值** 将总额复制到剪贴板。
- **重置费用** 将存储的总额重置为零。
- **与 API 密钥用量同步** 将总额设置为与您的 OpenRouter 账户报告的用量一致（仅 OpenRouter 支持）。
- **API 密钥用量** 显示 OpenRouter 的使用详情（如可用）。
- **删除费用数据** 删除所有数据，或仅删除早于指定日期的条目。

**费用跟踪：** 当你使用 OpenRouter 模型时，应用会根据 OpenRouter 提供的成本信息显示你实际的使用量和支出。对于所有其他提供商，应用会使用 OpenRouter 发布的价格来估算成本；如果价格不可用，估算值可能为零。

<br/>

> ℹ️ **注意**<br/>
>  **所有费用数据仅为参考，非正式账单。**

<br/>

> ⚠️ **警告**<br/>
> 数据删除无法撤销。删除前，请务必通过 [**历史**](#history) 
> 或 [**仪表盘** > **所有调用**](#dashboard-tabs) 备份或导出您的数据，否则数据将永久丢失。
> 与每个 API 调用条目相关的所有输入/输出历史也将被删除。

<br/>

<a id="transform-prompts"></a>
### 转换提示词

使用 **设置** > **转换提示词** 批量管理提示词。

您可以：

- 查看已保存的提示词
- 删除提示词
- 从文件导入提示词
- 导出提示词用于备份或分享
- 将示例提示词加载到提示词列表中

<br/>

<a id="users"></a>
### 用户

使用 **用户** 在网页版中管理用户账户。您可以添加用户、更新其信息、重置密码以及删除账户。

<br/>

<a id="api-config"></a>
### API 配置

支持的提供商有：OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras，以及 **Ollama**（通过基础 URL 使用本地模型）。您只需配置您使用的提供商。

**仅限网页应用管理员使用**

API 密钥通过系统或 Docker 环境变量进行配置——不会在网页界面中输入。此页面显示哪些提供商已配置密钥，并允许您点击 **`Test`** 按钮测试每个提供商。

<br/>

> ℹ️ **注意**<br/>
> 若要更改 API 密钥，请在您的系统或 Docker 配置中更新环境变量，并重启服务器或容器。

> ℹ️ **注意**<br/>
> **配置备份**（参见 [**常规设置** → 配置备份](#general-settings)）可将 **已解析** 的提供商密钥嵌入 ZIP 文件中的 `config.json`。恢复该 ZIP 文件 **不会** 将这些密钥复制回服务器的持久化配置文件中——运行中的密钥仍来自环境变量和现有文件状态，如前所述。

<br/>

**桌面应用程序**

使用 **API 配置** 为每个使用的提供商存储 API 密钥。对于 Ollama，请输入 **基础 URL** 而非 API 密钥。

<br/>

> 💡 **提示** <br/>
> 如果您不想使用 API 密钥或支付使用费用，可以 [下载 Ollama](https://ollama.com) 并在本地机器上免费运行模型（例如 `translategemma:4b`）。或者，您可以创建一个免费的 OpenRouter 账户（无需信用卡）来使用其免费模型，或从 Cerebras、Google、Groq 或 Mistral AI 获取免费 API 密钥。

<br/>

- 仅添加您需要的提供商。在 **设置** > **模型** 中，每个模型 ID 都以提供商开头（例如 `openrouter/openrouter/free`、`openai/gpt-4o`、`ollama/llama3`）。

要添加 API 密钥，请在文本框中输入值并点击 **`Save`**。要替换现有密钥，请点击 **`Edit`**。要验证密钥是否有效，请点击 **`Test`**。对于 Ollama 基础 URL，请始终点击 **`Test`** 以检查连接。

<br/>

> ℹ️ **注意**<br/>
> 您无法查看当前 API 密钥的值。只能使用 **`Edit`** 按钮替换它。
> API 密钥以加密形式存储在配置中。

<br/>

<a id="about"></a>
### 关于

**关于** 选项卡显示：

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
### 应用无法翻译、改写或转换文本

请检查：

- 您已在工具栏中选择了一个模型
- 至少有一个模型列在 [**设置** > **模型**](#models)
- 您的 API 配置正常工作

如果您使用的是桌面应用：

1. 打开 [**设置** > **API 配置**](#api-config)。
2. 确保至少保存了一个 API 密钥。
3. 点击提供商旁边的 **测试** 以确认密钥是否有效。

<br/>

<a id="the-model-list-is-empty"></a>
### 模型列表为空

打开 [**设置** > **模型**](#models) 并点击 **刷新**。

如有需要：

- 搜索一个模型
- 开启 **仅免费**
- 将一个或多个模型添加到 **已选模型**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### 结果太慢或成本太高

尝试以下一项或多项操作：

- 选择另一个模型
- 使用较短的输入
- 在 [**设置** > **常规设置**](#general-settings) 中关闭 **实时翻译（输入时）**
- 对简单任务使用免费模型（参见 [模型](#models)）

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### 界面语言不正确

点击 [工具栏](#toolbar) 中的地球图标，然后选择您偏好的 **界面语言**。

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### 文本太小或难以阅读

打开 [**设置** > **常规设置**](#general-settings) 并更改：

- **字体系列**  
- **大小**

<br/>

<a id="dashboard-charts-are-empty"></a>  
### 仪表盘图表为空

如果出现以下情况，这是正常的：

- 您仅使用 **免费模型**，并且正在查看 **费用** 数据（可能为零）；**摘要** 中的 **使用** 调用次数图表仍需要来自所选期间的数据
- 选定的 **时间筛选** 不涵盖进行调用的期间 - 尝试 **全部** 进行检查

如果在选择**全部** 后图表仍然为空，请确认调用是否出现在 [**历史**](#history) 或 **所有调用** 选项卡中。

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>  
### 费用显示“不可用”或似乎有误

当您通过**OpenRouter** 使用模型时，应用程序会显示 OpenRouter 报告的实际花费。

对于**其他提供商**（如 OpenAI 直连、Anthropic 直连等），费用是根据 OpenRouter 发布的定价数据估算的。如果未找到匹配的模型价格，费用将显示为**不可用**，并且不会计入您的累计总额。

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>  
### 总费用与您的提供商账单不符

应用程序中的所有费用数据均为**仅供参阅的估计值**，并非正式账单。

要使总费用更接近您实际的 OpenRouter 支出，请打开 [**设置** > **费用跟踪**](#cost-tracking) 并点击 **与 API 密钥用量同步**。

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>  
### 侧边栏中缺少历史页面

**保留执行历史** 可能已关闭。请打开 [**设置** > **常规设置**](#general-settings) 并启用该选项。请注意，启用此选项不会恢复之前已删除的历史数据。

<br/>

<a id="web-app-session-expired"></a>  
### 网页应用：意外重定向到登录页面

您的会话可能已超时。请重新登录。如果频繁发生，请检查服务器配置中的会话有效期设置。

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>  
### 网页管理员：忘记或丢失密码

此情况适用于**自托管网页应用**（Docker），不适用于桌面（Electron）应用。

- 如果还有其他管理员可以登录，他们可以打开 [**设置** > **用户**](#users)，选择该账户，并在那里设置**新密码**。  
- 如果您已**被锁定**，但拥有对机器或容器的**shell 访问权限**，可使用镜像附带的工具重置密码（如果更改了默认名称，请替换 `transrewrt`；如果密码包含空格或特殊字符，请用引号括起）：

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

如果您从未创建其他账户，默认管理员用户名为 `admin`。当您仅传递一个参数时，它将被视为 `admin` 的新密码。

如果从 **源代码检出** 而不是 Docker 运行，请使用：

```bash
pnpm run reset-web-password -- <username> <new-password>
```

该脚本会更新 SQLite 数据库中的用户记录（如果用户缺失，也可以创建 `admin` 用户）。重置后，请使用新密码登录。

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### 仪表盘未显示其他用户的数据（网页端）

只有 **管理员** 才能通过 **用户** 筛选器查看所有用户的数据。普通用户按设计只能看到自己的活动。

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### 我修改了一个提示词但丢失了编辑内容

编辑提示词时，请务必先点击 **保存**，然后再点击 **返回运行**。

<br/><br/>

<a id="quick-tips"></a>
## 快速提示

- 首先使用 [**翻译**](#translate) 确保您的配置正常工作，然后再尝试 [**重写**](#rewrite) 或 [**转换**](#transform)。
- 使用 [**重写**](#rewrite) 进行日常文本优化。
- 使用 [**转换**](#transform) 处理需要可重复工作流的特定任务。
- 使用 [**仪表板**](#dashboard) 来监控使用情况和费用。
- 使用 [**历史记录**](#history) 查看过去操作的完整输入/输出内容。
- 如果您正在构建希望长期保存的提示词库（参见 [Transform Prompts](#transform-prompts)），或希望与他人共享，请定期导出提示词。

<br/><br/>

<a id="disclaimer"></a>
## 免责声明

产品名称和图标归其各自所有者所有，仅用于识别目的。本软件与上述任何品牌无关联，也未获其认可。

<br/><br/>

<a id="license"></a>
## 许可

版权所有 © 2026 小瓦尔德马尔·斯库德勒。

[Apache License 2.0](../LICENSE)
