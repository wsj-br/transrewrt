---
title: Use the Dashboard
description: Review usage, cost, and call logs — filter, export, and manage stored records.
---

Use **Dashboard** to see how much you are using the app and what it is costing (for paid models).

![Dashboard summary](/images/screenshots/en-GB/dashboard-summary.png)

:::note
Cost amounts may show as **$0** if you use free models, the provider doesn't support cost tracking, or you're using a local LLM. Call-count KPIs on **Summary** reflect actual usage regardless — they're only zero if there was no activity in the selected period.
:::

## Filter the data

Use the filter buttons at the top to change the time range. 

The **User** filter is visible only to administrators in the web version; it is not available on desktop.

## Tabs

- **Summary** — KPIs: total cost, models used, per-mode call counts and cost, average cost per call, average TPS, top models by call count
- **By Model** — per-model calls, cost, and TPS; expand a row for a mode breakdown
- **All Calls** — full call log (paginated or cards) with export

## Export data

Export tables as **JSON**, **CSV**, or **XLSX**.

## Delete stored records for a model

In **By Model** or **All Calls**, use the trash-bin icon to remove records for a model.

:::caution
Deletion cannot be undone. To delete by age or clear all cost data, use [Settings → Cost Tracking](/docs/settings/#cost-tracking).
:::

## Next steps

- [Browse History](/docs/history/)
- [Settings](/docs/settings/)
- [Common issues](/docs/common-issues/)
