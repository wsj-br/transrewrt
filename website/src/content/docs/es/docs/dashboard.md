---
title: Usar el panel de control
description: >-
  Revisar el uso, el costo y los registros de llamadas: filtrar, exportar y
  administrar los registros almacenados.
translation_last_updated: '2026-07-17T21:14:49.025Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 689c93c2517f806f7976d570b4fc86d30ca048ce906d982429b985ad06dd9250
translation_language: es
source_file_path: src/content/docs/docs/dashboard.md
translation_models:
  - google/gemini-2.5-flash
---



Utilice el **Panel de control** para ver cuánto está utilizando la aplicación y cuánto le está costando (para modelos de pago).

![Resumen del panel de control](/images/screenshots/es/dashboard-summary.png)

:::note
Si solo utiliza modelos **gratuitos**, los importes de los costos pueden ser cero. Los KPI de recuento de llamadas en **Resumen** aún necesitan actividad en el período seleccionado.
:::

## Filtrar los datos

Utilice los botones de filtro en la parte superior para cambiar el rango de tiempo.

:::note
El filtro de **Usuario** solo es visible para los administradores en la versión web. No está disponible en el escritorio.
:::

## Pestañas

- **Resumen** — KPI: costo total, modelos utilizados, recuentos de llamadas y costos por modo, costo promedio por llamada, TPS promedio, modelos principales por recuento de llamadas
- **Por modelo** — llamadas, costo y TPS por modelo; expanda una fila para ver un desglose por modo
- **Todas las llamadas** — registro completo de llamadas (paginado o en tarjetas) con exportación

## Exportar datos

Exporte tablas como **JSON**, **CSV** o **XLSX**.

## Eliminar registros almacenados para un modelo

En **Por modelo** o **Todas las llamadas**, utilice el icono de la papelera para eliminar registros de un modelo.

:::caution
La eliminación no se puede deshacer. Para eliminar por antigüedad o borrar todos los datos de costos, utilice [Configuración → Seguimiento de costos](/docs/settings/#cost-tracking).
:::

## Próximos pasos

- [Historial de navegación](/docs/history/)
- [Configuración](/docs/settings/)
- [Problemas comunes](/docs/common-issues/)
