---
title: Translate text
description: Convert text between languages, use the glossary, and refine results with Rephrase.
---

Use **Translate** to convert text from one language to another.

![Translate workspace](/images/screenshots/en-GB/translate.png)

## Prerequisites

- At least one provider key (desktop) or server env key (web) — see [API key](/docs/api-key/)
- A **preset** (Easy) or **model** (Advanced) selected in the toolbar

## Translate text

1. Open **Translate** in the sidebar.
2. Choose a language in **From** (or **Detect Language**).
3. Choose a language in **To**.
4. Choose a preset or model in the toolbar.
5. Type or paste text into **Input**.
6. Click **Translate**.
7. Read the result in **Output**, then copy if needed.

**Top languages** appear first in the lists — set them under [Settings → Languages](/docs/settings/#languages).

## Helpful settings

In [Settings → General Settings](/docs/settings/#general-settings):

- **Auto-execute on paste** — runs as soon as you paste
- **Auto-copy result to clipboard** — copies after a successful run
- **Real-time translation while typing** — runs while you type (may increase cost)
- **Timeout (ms)** — wait before a real-time run
- **Behaviour for ENTER** — whether Enter runs the task or inserts a new line

## Refine a translation

After a successful run, **Rephrase…** and a version dropdown appear next to the **To:** selector:

1. **Rephrase…** (no selection) — another full translation of the same input. Up to **five** versions; the model sees prior versions so wording can differ. Click **Stop Translate** to cancel a running rephrase.
2. **Word alternatives** — select words or a short phrase, then right-click or **Rephrase…**. Pick an alternative to replace the span (may widen slightly for grammar). At five versions, only version 5 is updated.
3. Each rephrase or alternatives request uses the model again and may add cost.

## Use the glossary

A **glossary** is source/target term pairs for a language pair. When enabled, matching terms are sent to the model so preferred wording stays consistent.

1. Turn on **Glossary** in the input panel.
2. Translate as usual — terms for that **From** / **To** pair apply automatically.
3. Click **Add to Glossary** (next to **From:**) to capture a new pair quickly.
4. Manage all terms in [Settings → Glossary](/docs/settings/#glossary).

:::note
Glossary terms are matched by language pair. They cannot be used with **Detect Language** as the source.
:::

## Next steps

- [Rewrite text](/docs/rewrite/)
- [Transform with prompts](/docs/transform/)
- [Common issues](/docs/common-issues/)
