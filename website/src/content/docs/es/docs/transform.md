---
title: Transformar con instrucciones
description: >-
  Ejecute instrucciones de IA personalizadas: cree, edite, pruebe y gestione las
  instrucciones de Transform.
---



Utilice **Transformar** cuando desee que la IA siga instrucciones personalizadas: resuma, pula un correo electrónico, extraiga puntos clave, reformatee texto o cualquier flujo de trabajo que defina.

![Espacio de trabajo de Transformar](/images/screenshots/es/transform.png)

## Ejecutar una instrucción existente

1. Abra **Transformar**.
2. Elija una instrucción de la lista.
3. Si aparece un cuadro de idioma **De**, establezca un idioma si lo desea.
4. Escriba o pegue texto en **Entrada**.
5. Haga clic en **Transformar**.
6. Lea el resultado en **Salida**.

## Cargar instrucciones de ejemplo

Si la lista está vacía, haga clic en **Cargar instrucciones de ejemplo** en el espacio de trabajo de Transformar (también disponible en [Configuración → Transformar](/docs/settings/#transform)). Las muestras están en inglés; después de cargarlas, edite una instrucción y use **Traducir instrucción** si es necesario.

## Crear una instrucción

1. Haga clic en **Nueva instrucción**.
2. Haga clic en **Generar instrucción**.
3. Describa lo que desea que haga la instrucción.
4. Elija un ajuste preestablecido (Fácil) o un modelo (Avanzado).
5. Revise el borrador y haga clic en **Guardar**.

## Editar una instrucción

El editor está a la izquierda; un área de prueba está a la derecha.

![Editor de instrucciones de Transformar](/images/screenshots/es/transform-prompt-edit.png)

Campos principales:

- **Nombre de la instrucción** — se muestra en la lista de instrucciones
- **Instrucciones de la instrucción (opcional)** — sugerencia breve al ejecutar la instrucción
- **Rol del modelo** — rol general para la IA
- **Instrucciones del modelo (una por línea)** — reglas a seguir
- **Descripción de la salida** — etiqueta corta para el resultado (por ejemplo, resumido)
- **Temperatura (0.0 → 1.0)** — menor es más estable; mayor es más variado
- **Pedir idioma de destino** — añade un selector de idioma al ejecutar

Ayudas: **Generar instrucción**, **Mejorar instrucción**, **Traducir instrucción** (Fácil usa ajustes preestablecidos; Avanzado usa la lista de modelos).

:::caution
Haga clic en **Guardar** antes de **Volver a ejecutar**. Volver sin guardar descarta las ediciones.
:::

## Pruebe antes del uso diario

Utilice el panel de prueba de la derecha con texto de ejemplo al crear o comparar prompts.

Exporte e importe prompts de forma masiva en [Ajustes → Transformar](/docs/settings/#transform).

## Próximos pasos

- [Ajustes](/docs/settings/)
- [Historial de navegación](/docs/history/)
- [Problemas comunes](/docs/common-issues/)
