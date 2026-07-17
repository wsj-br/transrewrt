---
title: Explorar historial
description: >-
  Revisa ejecuciones anteriores de traducción, reescritura y transformación con
  el texto de entrada y salida completo.
translation_last_updated: '2026-07-17T14:59:02.032Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 79c4a60a79491755299b9de8c5e8f0945ccc6d0b32743e1682fede521dade7fa
translation_language: es
source_file_path: src/content/docs/docs/history.md
translation_models:
  - google/gemini-2.5-flash
---



Abre el **Historial** para ver las operaciones anteriores, incluyendo la entrada y la salida de cada ejecución.

![Página de historial](/images/screenshots/es/history.png)

El Historial utiliza los mismos filtros de rango de tiempo que el [Panel de control](/docs/dashboard/).

:::note
En la **aplicación web**, todos (incluidos los administradores) ven solo su propio historial de ejecución. El filtro de **Usuario** del Panel de control no se aplica aquí.
:::

## Exportar

Exporta la lista filtrada como **JSON**, **CSV** o **XLSX**.

## Si falta el historial

Es posible que la opción **Mantener historial de ejecución** esté desactivada. Habilítala en [Configuración → Ajustes generales](/docs/settings/#general-settings) a menos que el administrador haya establecido `HISTORY_DISABLED` — consulta [Configuración](/docs/configuration/#privacy-mode).

## Próximos pasos

- [Usar el Panel de control](/docs/dashboard/)
- [Configuración](/docs/settings/)
- [Problemas comunes](/docs/common-issues/)
