---
title: Reescribir texto
description: >-
  Mejorar la redacción en el mismo idioma: claridad, tono, extensión, gramática
  y más.
translation_last_updated: '2026-07-17T14:59:02.800Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ca70a1d16518bb9193c83911bfb7be66b19076c48b914b92aba4e9a17f67740f
translation_language: es
source_file_path: src/content/docs/docs/rewrite.md
translation_models:
  - google/gemini-2.5-flash
---



Utilice **Reescribir** para mejorar la redacción sin cambiar el significado principal. El texto permanece en el mismo idioma.

![Espacio de trabajo de reescritura](/images/screenshots/es/rewrite.png)

Los modos incluyen:

- **Revisar ortografía y gramática**
- **Mejorar la claridad**
- **Versiones alternativas** (varias reformulaciones en una sola ejecución)
- **Hacer formal** / **Hacer informal**
- **Acortar** / **Expandir**
- **Hacer técnico**

## Reescribir texto

1. Abra **Reescribir**.
2. Elija un **Modo**.
3. Opcionalmente, establezca **De** al idioma de su texto (o deje **Detectar idioma**).
4. Escriba o pegue el texto en **Entrada**.
5. Haga clic en **Reescribir**.
6. Lea el resultado en **Salida**.

:::tip
En **Revisar ortografía y gramática**, aparece un interruptor **Mostrar cambios** junto a **Copiar**. Actívelo para mostrar u ocultar las correcciones.
:::

:::note
**Versiones alternativas** devuelve varias reformulaciones en una **sola** ejecución, separadas por `----`. Esto difiere de **Reformular…**, que construye un historial de versiones a lo largo del tiempo.
:::

## Refinar una reescritura

Después de una ejecución exitosa, **Reformular…** y el menú desplegable de versiones aparecen en el lado de salida (la misma idea que [Traducir](/docs/translate/#refine-a-translation), pero el texto permanece en el mismo idioma y mantiene el **Modo** actual):

1. **Reformular…** (sin selección) — otra reescritura completa con una redacción diferente. Hasta cinco versiones. Haga clic en **Detener reescritura** para cancelar.
2. **Alternativas de palabras** — seleccione el texto y luego haga clic con el botón derecho o en **Reformular…**.
3. Cada solicitud puede añadir un coste de uso.

## Próximos pasos

- [Traducir texto](/docs/translate/)
- [Transformar con indicaciones](/docs/transform/)
- [Problemas comunes](/docs/common-issues/)
