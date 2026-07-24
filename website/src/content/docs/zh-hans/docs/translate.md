---
title: 翻译文本
description: 在不同语言之间转换文本，使用术语表，并通过重述来优化结果。
---



使用 **Translate** 将文本从一种语言转换为另一种语言。

![翻译工作区](/images/screenshots/zh-Hans/translate.png)

## 前提条件

- 至少一个提供商密钥（桌面版）或服务器环境变量密钥（网页版）— 参见 [API 密钥](/docs/api-key/)
- 在工具栏中选择一个 **preset**（简易模式）或 **model**（高级模式）

## 翻译文本

1. 在侧边栏中打开 **Translate**。
2. 在 **From** 中选择一种语言（或选择 **Detect Language**）。
3. 在 **To** 中选择一种语言。
4. 在工具栏中选择预设或模型。
5. 在 **Input** 中输入或粘贴文本。
6. 点击 **Translate**。
7. 在 **Output** 中查看结果，如需要可复制。

**Top languages** 显示在列表顶部 — 可在 [设置 → 语言](/docs/settings/#languages) 中设置。

## 实用设置

在 [设置 → 通用设置](/docs/settings/#general-settings) 中：

- **Auto-execute on paste** — 粘贴后立即运行
- **Auto-copy result to clipboard** — 运行成功后自动复制
- **Real-time translation while typing** — 输入时实时运行（可能增加费用）
- **Timeout (ms)** — 实时运行前的等待时间
- **Behaviour for ENTER** — 决定 Enter 是运行任务还是插入新行

## 布局与键盘

- **Layout toggle** — 面板上方的按钮可在 **side-by-side** 和 **stacked** 输入/输出布局之间切换。该选择适用于翻译、重述和转换，并会在此设备上记住。
- **Enter** 或 **Shift+Enter** 运行任务，具体取决于 **Behaviour for ENTER**（见上文）。
- **Escape** 清空输入面板（或先关闭已打开的菜单或对话框）。

## 优化翻译

运行成功后，**Rephrase…** 和一个版本下拉菜单会出现在 **To:** 选择器旁边：

1. **Rephrase…**（无选区）— 对相同输入进行另一次完整翻译。最多 **five** 个版本；模型会参考之前的版本，因此措辞可能不同。点击 **Stop Translate** 可取消正在运行的重述。
2. **Word alternatives** — 选中单词或短语，然后右键点击或使用 **Rephrase…**。选择一个替代项以替换该片段（为符合语法可能略微扩展）。达到五个版本时，仅更新第 5 个版本。
3. 每次重述或替代项请求都会再次使用模型，可能产生额外费用。

## 使用术语表

**glossary** 是针对某语言对的源/目标术语对。启用后，匹配的术语会发送给模型，从而保持首选措辞的一致性。

1. 在输入面板中开启 **Glossary**。
2. 照常翻译 — 该 **From** / **To** 语言对的术语会自动应用。
3. 点击 **Add to Glossary**（在 **From:** 旁边）以快速添加新的词对。
4. 在 [设置 → 术语表](/docs/settings/#glossary) 中管理所有术语。

:::note
术语表中的术语按语言对进行匹配。它们不能与作为源语言的 **Detect Language** 一起使用。
:::

## 后续步骤

- [重写文本](/docs/rewrite/)
- [使用提示词转换](/docs/transform/)
- [常见问题](/docs/common-issues/)
