---
title: 翻译文本
description: 在不同语言之间转换文本，使用术语表，并通过重述来优化结果。
translation_last_updated: '2026-07-17T14:58:56.847Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ace9ad02a7dc82bf08090597c56e7cc82324e6250beab93fc2dbeaeed8b91675
translation_language: zh-Hans
source_file_path: src/content/docs/docs/translate.md
translation_models:
  - z-ai/glm-5.2
---



使用 **Translate** 将文本从一种语言转换为另一种语言。

![翻译工作区](/images/screenshots/zh-Hans/translate.png)

## 前提条件

- 至少一个提供商密钥（桌面版）或服务器环境密钥（网页版）— 参见 [API 密钥](/docs/api-key/)
- 在工具栏中选择的 **preset**（简易）或 **model**（高级）

## 翻译文本

1. 在侧边栏中打开 **Translate**。
2. 在 **From** 中选择一种语言（或 **Detect Language**）。
3. 在 **To** 中选择一种语言。
4. 在工具栏中选择预设或模型。
5. 在 **Input** 中输入或粘贴文本。
6. 点击 **Translate**。
7. 在 **Output** 中阅读结果，然后根据需要复制。

**Top languages** 显示在列表顶部 — 在 [设置 → 语言](/docs/settings/#languages) 中设置它们。

## 实用设置

在 [设置 → 常规设置](/docs/settings/#general-settings) 中：

- **Auto-execute on paste** — 粘贴后立即运行
- **Auto-copy result to clipboard** — 成功运行后复制到剪贴板
- **Real-time translation while typing** — 边输入边翻译（可能会增加成本）
- **Timeout (ms)** — 实时运行前的等待时间
- **Behaviour for ENTER** — 决定 Enter 键是运行任务还是插入新行

## 优化翻译

成功运行后，**Rephrase…** 和版本下拉菜单会出现在 **To:** 选择器旁边：

1. **Rephrase…**（无选择）— 对相同输入进行另一次完整翻译。最多 **five** 个版本；模型会看到之前的版本，因此措辞可能会有所不同。点击 **Stop Translate** 可取消正在运行的重述。
2. **Word alternatives** — 选择单词或短语，然后右键点击或使用 **Rephrase…**。选择一个替代项以替换该片段（为了语法可能略微扩展）。达到五个版本时，仅更新第 5 个版本。
3. 每次重述或替代项请求都会再次使用模型，并可能增加成本。

## 使用术语表

**glossary** 是针对语言对的源/目标术语对。启用后，匹配的术语会发送给模型，从而保持首选措辞的一致性。

1. 在输入面板中打开 **Glossary**。
2. 像往常一样翻译 — 该 **From** / **To** 对的术语会自动应用。
3. 点击 **Add to Glossary**（在 **From:** 旁边）以快速捕获新对。
4. 在 [设置 → 术语表](/docs/settings/#glossary) 中管理所有术语。

:::note
术语表术语按语言对进行匹配。它们不能与**Detect Language**一起作为源语言使用。
:::

## 后续步骤

- [重写文本](/docs/rewrite/)
- [使用提示词转换](/docs/transform/)
- [常见问题](/docs/common-issues/)
