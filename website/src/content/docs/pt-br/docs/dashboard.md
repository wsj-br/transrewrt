---
title: Usar o Painel
description: >-
  Revise o uso, custo e logs de chamadas — filtre, exporte e gerencie registros
  armazenados.
---



Use o **Painel** para ver o quanto você está usando o aplicativo e qual é o custo (para modelos pagos).

![Resumo do Painel](/images/screenshots/pt-BR/dashboard-summary.png)

:::note
Os valores de custo podem aparecer como **$0** se você usar modelos gratuitos, o provedor não oferecer suporte ao rastreamento de custos ou se você estiver usando um LLM local. Os KPIs de contagem de chamadas em **Resumo** refletem o uso real, independentemente — eles são zero apenas se não houve atividade no período selecionado.
:::

## Filtrar os dados

Use os botões de filtro na parte superior para alterar o intervalo de tempo.

O filtro **Usuário** é visível apenas para administradores na versão web; não está disponível na área de trabalho.

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
