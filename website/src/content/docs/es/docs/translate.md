---
title: Traducir texto
description: >-
  Convierta texto entre idiomas, use el glosario y refine los resultados con
  Rephrase.
translation_last_updated: '2026-07-17T14:59:03.440Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ace9ad02a7dc82bf08090597c56e7cc82324e6250beab93fc2dbeaeed8b91675
translation_language: es
source_file_path: src/content/docs/docs/translate.md
translation_models:
  - google/gemini-2.5-flash
---



Use **Traducir** para convertir texto de un idioma a otro.

![Espacio de trabajo de traducción](/images/screenshots/es/translate.png)

## Requisitos previos

- Al menos una clave de proveedor (escritorio) o clave de entorno de servidor (web) — consulte [Clave de API](/docs/api-key/)
- Un **ajuste preestablecido** (Fácil) o **modelo** (Avanzado) seleccionado en la barra de herramientas

## Traducir texto

1. Abra **Traducir** en la barra lateral.
2. Elija un idioma en **De** (o **Detectar idioma**).
3. Elija un idioma en **A**.
4. Elija un ajuste preestablecido o modelo en la barra de herramientas.
5. Escriba o pegue texto en **Entrada**.
6. Haga clic en **Traducir**.
7. Lea el resultado en **Salida**, luego copie si es necesario.

Los **idiomas principales** aparecen primero en las listas; configúrelos en [Configuración → Idiomas](/docs/settings/#languages).

## Configuraciones útiles

En [Configuración → Configuración general](/docs/settings/#general-settings):

- **Ejecución automática al pegar** — se ejecuta tan pronto como pega
- **Copiar automáticamente el resultado al portapapeles** — copia después de una ejecución exitosa
- **Traducción en tiempo real mientras escribe** — se ejecuta mientras escribe (puede aumentar el costo)
- **Tiempo de espera (ms)** — espere antes de una ejecución en tiempo real
- **Comportamiento para ENTER** — si Enter ejecuta la tarea o inserta una nueva línea

## Refinar una traducción

Después de una ejecución exitosa, **Reformular…** y un menú desplegable de versiones aparecen junto al selector **A:**:

1. **Reformular…** (sin selección) — otra traducción completa de la misma entrada. Hasta **cinco** versiones; el modelo ve las versiones anteriores para que la redacción pueda diferir. Haga clic en **Detener traducción** para cancelar una reformulación en curso.
2. **Alternativas de palabras** — seleccione palabras o una frase corta, luego haga clic derecho o **Reformular…**. Elija una alternativa para reemplazar el fragmento (puede ampliarse ligeramente para la gramática). En cinco versiones, solo se actualiza la versión 5.
3. Cada solicitud de reformulación o alternativas utiliza el modelo nuevamente y puede agregar costo.

## Usar el glosario

Un **glosario** son pares de términos de origen/destino para un par de idiomas. Cuando está habilitado, los términos coincidentes se envían al modelo para que la redacción preferida se mantenga consistente.

1. Active **Glosario** en el panel de entrada.
2. Traduzca como de costumbre — los términos para ese par **De** / **A** se aplican automáticamente.
3. Haga clic en **Agregar al glosario** (junto a **De:**) para capturar un nuevo par rápidamente.
4. Gestione todos los términos en [Configuración → Glosario](/docs/settings/#glossary).

:::note
Los términos del glosario se corresponden por pares de idiomas. No se pueden usar con **Detectar idioma** como origen.
:::

## Próximos pasos

- [Reescribir texto](/docs/rewrite/)
- [Transformar con indicaciones](/docs/transform/)
- [Problemas comunes](/docs/common-issues/)
