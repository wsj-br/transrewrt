---
title: Usar o Painel
description: >-
  Revise o uso, custo e logs de chamadas — filtre, exporte e gerencie registros
  armazenados.
translation_last_updated: '2026-07-17T14:58:59.588Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 689c93c2517f806f7976d570b4fc86d30ca048ce906d982429b985ad06dd9250
translation_language: pt-BR
source_file_path: src/content/docs/docs/dashboard.md
translation_models:
  - google/gemini-2.5-flash
---



Use o **Painel** para ver o quanto você está usando o aplicativo e qual é o custo (para modelos pagos).

![Resumo do Painel](/images/screenshots/pt-BR/dashboard-summary.png)

:::note
Se você usar apenas modelos **gratuitos**, os valores de custo podem ser zero. Os KPIs de contagem de chamadas no **Resumo** ainda precisam de atividade no período selecionado.
:::

## Filtrar os dados

Use os botões de filtro na parte superior para alterar o intervalo de tempo.

:::note
O filtro **Usuário** é visível apenas para administradores na versão web. Não está disponível na área de trabalho.
:::

## Abas

- **Resumo** — KPIs: custo total, modelos usados, contagens de chamadas e custo por modo, custo médio por chamada, TPS médio, principais modelos por contagem de chamadas
- **Por Modelo** — chamadas por modelo, custo e TPS; expanda uma linha para uma análise por modo
- **Todas as Chamadas** — log completo de chamadas (paginado ou em cartões) com exportação

## Exportar dados

Exporte tabelas como **JSON**, **CSV** ou **XLSX**.

## Excluir registros armazenados para um modelo

Em **Por Modelo** ou **Todas as Chamadas**, use o ícone da lixeira para remover registros de um modelo.

:::caution
A exclusão não pode ser desfeita. Para excluir por idade ou limpar todos os dados de custo, use [Configurações → Rastreamento de Custos](/docs/settings/#cost-tracking).
:::

## Próximos passos

- [Navegar pelo Histórico](/docs/history/)
- [Configurações](/docs/settings/)
- [Problemas comuns](/docs/common-issues/)
