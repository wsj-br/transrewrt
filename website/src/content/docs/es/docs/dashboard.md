---
title: Usar el Panel de control
description: >-
  Revise el uso, el costo y los registros de llamadas: filtre, exporte y
  administre los registros almacenados.
---



Utilice el **Panel de control** para ver cuánto está utilizando la aplicación y cuánto le está costando (para modelos de pago).

![Resumen del Panel de control](/images/screenshots/es/dashboard-summary.png)

:::note
Los importes de los costos pueden aparecer como **$0** si utiliza modelos gratuitos, el proveedor no admite el seguimiento de costos o está utilizando un LLM local. Los KPI de recuento de llamadas en **Resumen** reflejan el uso real, independientemente; solo son cero si no hubo actividad en el período seleccionado.
:::

## Filtrar los datos

Utilice los botones de filtro en la parte superior para cambiar el rango de tiempo.

El filtro **Usuario** solo es visible para los administradores en la versión web; no está disponible en el escritorio.

## Pestañas

- **Resumen** — KPI: costo total, modelos utilizados, recuentos de llamadas y costo por modo, costo promedio por llamada, TPS promedio, modelos principales por recuento de llamadas
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

- [Explorar historial](/docs/history/)
- [Configuración](/docs/settings/)
- [Problemas comunes](/docs/common-issues/)
