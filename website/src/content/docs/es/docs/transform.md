---
title: Transformar con prompts
description: >-
  Ejecute instrucciones de IA personalizadas: cree, edite, pruebe y gestione
  prompts de Transform.
---



Utilice **Transform** cuando desee que la IA siga instrucciones personalizadas: resuma, pula un correo electrónico, extraiga puntos clave, reformatee texto o cualquier flujo de trabajo que defina.

![Espacio de trabajo de Transform](/images/screenshots/es/transform.png)

## Ejecutar un prompt existente

1. Abra **Transform**.
2. Elija un prompt de la lista.
3. Si aparece un cuadro de idioma **De**, establezca un idioma si lo desea.
4. Escriba o pegue texto en **Entrada**.
5. Haga clic en **Transformar**.
6. Lea el resultado en **Salida**.

El [selector de diseño y los atajos de teclado](/docs/translate/#layout-and-keyboard) funcionan igual que en Traducir.

## Cargar prompts de ejemplo

Si la lista está vacía, haga clic en **Cargar prompts de ejemplo** en el espacio de trabajo de Transform (también disponible en [Configuración → Transform](/docs/settings/#transform)). Los ejemplos están en inglés; después de cargarlos, edite un prompt y utilice **Traducir prompt** si es necesario.

## Crear un prompt

1. Haga clic en **Nuevo prompt**.
2. Haga clic en **Generar prompt**.
3. Describa lo que desea que haga el prompt.
4. Elija un ajuste preestablecido (Fácil) o un modelo (Avanzado).
5. Revise el borrador y haga clic en **Guardar**.

## Editar un prompt

El editor está a la izquierda; un área de prueba está a la derecha.

![Editor de prompts de Transform](/images/screenshots/es/transform-prompt-edit.png)

Campos principales:

- **Nombre del prompt** — se muestra en la lista de prompts
- **Instrucciones del prompt (opcional)** — sugerencia breve al ejecutar el prompt
- **Rol del modelo** — rol general para la IA
- **Instrucciones del modelo (una por línea)** — reglas a seguir
- **Descripción de la salida** — etiqueta corta para el resultado (por ejemplo, resumido)
- **Temperatura (0.0 → 1.0)** — más baja es más estable; más alta es más variada
- **Pedir idioma de destino** — añade un selector de idioma al ejecutar

Ayudas: **Generar prompt**, **Mejorar prompt**, **Traducir prompt** (Fácil usa ajustes preestablecidos; Avanzado usa la lista de modelos).

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
