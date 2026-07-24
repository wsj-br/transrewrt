---
title: Traducir texto
description: >-
  Convierta texto entre idiomas, use el glosario y refine los resultados con
  Rephrase.
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
- **Copia automática del resultado al portapapeles** — copia después de una ejecución exitosa
- **Traducción en tiempo real mientras escribe** — se ejecuta mientras escribe (puede aumentar el costo)
- **Tiempo de espera (ms)** — espera antes de una ejecución en tiempo real
- **Comportamiento para ENTER** — si Enter ejecuta la tarea o inserta una nueva línea

## Diseño y teclado

- **Alternar diseño** — los botones encima de los paneles cambian entre los diseños de Entrada/Salida **lado a lado** y **apilados**. La elección se aplica a Traducir, Reescribir y Transformar y se recuerda en este dispositivo.
- **Enter** o **Shift+Enter** ejecuta la tarea, dependiendo de **Comportamiento para ENTER** (ver arriba).
- **Escape** borra el panel de Entrada (o cierra un menú o diálogo abierto primero).

## Refinar una traducción

Después de una ejecución exitosa, **Rephrase…** y un menú desplegable de versiones aparecen junto al selector **A:**:

1. **Rephrase…** (sin selección) — otra traducción completa de la misma entrada. Hasta **cinco** versiones; el modelo ve versiones anteriores para que la redacción pueda diferir. Haga clic en **Detener traducción** para cancelar una reformulación en curso.
2. **Alternativas de palabras** — seleccione palabras o una frase corta, luego haga clic derecho o **Rephrase…**. Elija una alternativa para reemplazar el fragmento (puede ampliarse ligeramente para la gramática). Con cinco versiones, solo se actualiza la versión 5.
3. Cada solicitud de reformulación o alternativas utiliza el modelo nuevamente y puede agregar costo.

## Usar el glosario

Un **glosario** es un par de términos de origen/destino para un par de idiomas. Cuando está habilitado, los términos coincidentes se envían al modelo para que la redacción preferida se mantenga consistente.

1. Activa **Glosario** en el panel de entrada.
2. Traduce como de costumbre: los términos para ese par **De** / **A** se aplican automáticamente.
3. Haz clic en **Añadir al glosario** (junto a **De:**) para capturar un nuevo par rápidamente.
4. Gestiona todos los términos en [Configuración → Glosario](/docs/settings/#glossary).

:::note
Los términos del glosario se emparejan por idioma. No se pueden usar con **Detectar idioma** como origen.
:::

## Próximos pasos

- [Reescribir texto](/docs/rewrite/)
- [Transformar con indicaciones](/docs/transform/)
- [Problemas comunes](/docs/common-issues/)
