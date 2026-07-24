---
title: Configuración
description: >-
  Referencia compacta para General, Modelos, Idiomas, Glosario, Costo,
  Transformar, Usuarios, API y Acerca de.
---



Abre **Configuración** desde la barra lateral para personalizar el comportamiento de la aplicación.

| Pestaña | Escritorio | Web (administrador) | Web (usuario) | Notas |
| --- | :---: | :---: | :---: | --- |
| Configuración general | sí | sí | sí | Incluye **Experiencia de IA** (Fácil / Avanzada) |
| Modelos | sí | sí | sí | Solo cuando la **Experiencia de IA** es **Avanzada** |
| Idiomas | sí | sí | sí | |
| Seguimiento de costos | sí | sí | — | |
| Transformar | sí | sí | sí | Importación/exportación masiva de prompts |
| Glosario | sí | sí | sí | Pares de términos para traducción |
| Usuarios | — | sí | — | |
| Configuración de API | sí | sí | — | |
| Acerca de | sí | sí | sí | |

En el modo **Fácil**, elige la IA a través de los preajustes en la barra de herramientas y el **Proveedor** en la Configuración general; la pestaña **Modelos** está oculta.

:::note
En la versión web, cada usuario tiene su propia configuración (experiencia de IA, proveedor, modelos/preajustes, idiomas, opciones, prompts). Los cambios no afectan a otros usuarios.
:::

## Configuración general

![Pestaña Configuración general](/images/screenshots/es/settings-general.png)

**Experiencia de IA**

- **Fácil** (predeterminado): elige un **Proveedor**. Los proveedores de la nube utilizan preajustes de la barra de herramientas. **LLM local** enumera los modelos locales instalados. **Actualizar catálogo de preajustes** obtiene la lista más reciente de preajustes del repositorio del proyecto.
  - **Gratis (OpenRouter)** — opción de costo cero enrutada a modelos gratuitos disponibles; la calidad y disponibilidad pueden variar
  - **Estándar** — ligero y rentable; ideal para textos cortos, borradores rápidos y uso de gran volumen
  - **Avanzado** — modelo de alta precisión para contenido complejo o matizado, con un costo más alto
  - **Técnico** — ajustado para código, API, documentos de desarrollador y contenido estructurado; conserva el formato y la terminología
- **Avanzado**: elige modelos en la barra de herramientas; gestiona la lista en [Modelos](#models).

También puedes cambiar entre Fácil ↔ Avanzado desde el menú de preajustes/modelos de la barra de herramientas (**Cambiar a modo Fácil/Avanzado**, encima de Abrir configuración).

**Apariencia** — Tema; **Mostrar información de costos en las acciones**; **Dígitos fraccionarios de costo**; margen solo web alrededor de la aplicación; **Familia de fuentes** y **Tamaño**.

**Comportamiento** — **Comportamiento para ENTER**; **Ejecutar automáticamente al pegar**; **Copiar automáticamente el resultado al portapapeles**; **Traducción en tiempo real mientras se escribe**; **Tiempo de espera (ms)**.

**Historial**

- **Mantener historial de ejecución** — almacena entrada/salida para la vista [Historial](/docs/history/). Desactivarlo solicita confirmación y puede eliminar el texto almacenado. Si está etiquetado como *deshabilitado por el administrador*, `HISTORY_DISABLED` está configurado — consulte [Configuración](/docs/configuration/#privacy-mode).
- **Eliminar datos del historial** — elimina el texto almacenado por antigüedad o borra todo. **No** elimina los totales de costos (use Seguimiento de costos para eso).

**Copia de seguridad de la configuración** (administradores de escritorio y web)

- **Incluir datos de uso en la copia de seguridad** (opcional)
- **Configuración de copia de seguridad** — ZIP con configuración, estado, usuarios, preferencias, indicaciones y datos de uso opcionales
- **Restaurar desde copia de seguridad** — diálogo de confirmación con opciones para restaurar y/o borrar datos de uso

Las copias de seguridad pueden moverse entre escritorio y web; restaurar una copia de seguridad de escritorio en la web aplica los datos al usuario administrador.

## Modelos

Disponible solo en modo **Avanzado**.

- **Modelos disponibles** (izquierda) y **Modelos seleccionados** (derecha)
- Búsqueda, chips de **Proveedor**, **Solo gratis**, **Actualizar**, Expandir/Contraer todo
- Los ID de modelo usan un prefijo de proveedor (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
No utilice OpenRouter **Body Builder** (`openrouter/bodybuilder`) para Traducir, Reescribir o Transformar — devuelve cargas útiles de solicitud JSON, no texto terminado.
:::

Añada con **Añadir**; elimine con **X**. El modelo gratuito de OpenRouter es opcional — los modelos seleccionados pueden estar vacíos. Eliminar el último modelo de la barra de herramientas abre **Configuración → Modelos**. Si el modelo actual deja de estar disponible, la aplicación selecciona el siguiente modelo de la lista en lugar de forzar el modelo gratuito.

## Idiomas

- **Idiomas principales** — anclados cerca de la parte superior de las listas de idiomas en Traducir y Transformar
- **Idioma personalizado** — añada un idioma que falte en la lista incorporada

## Seguimiento de costos

- **Costo total**, **Copiar valor**, **Restablecer costo**
- **Sincronizar con el uso de la clave API** — alinear con el uso de la cuenta de OpenRouter (solo OpenRouter)
- **Uso de la clave API** — detalles de OpenRouter cuando estén disponibles
- **Eliminar datos de costos** — todos los datos o entradas anteriores a una fecha

OpenRouter muestra el costo facturado real cuando corresponde; otros proveedores usan estimaciones de los precios de OpenRouter. Las estimaciones no son facturas.

:::caution
La eliminación de datos de costos no se puede deshacer. Exporte primero a través de Historial o Panel de control → Todas las llamadas si necesita una copia de seguridad. El historial de entrada/salida relacionado con esas llamadas API también se elimina.
:::

## Transformar

Gestione las indicaciones de forma masiva: revise, elimine, importe, exporte y cargue indicaciones de ejemplo.

## Glosario

Gestiona los pares de términos aplicados durante la [traducción](/docs/translate/#use-the-glossary). Cada término tiene un idioma de origen/destino y un texto de origen/destino.

- Añadir a través de la fila inferior y **+**
- Filtrar por idiomas o texto
- Importar/exportar CSV o XLSX; descargar plantillas vacías

El escritorio almacena el glosario localmente; la web lo almacena por usuario.

## Usuarios

Solo web (administradores):

- Añadir usuarios, actualizar detalles, restablecer contraseñas, eliminar cuentas
- **Tiempo de espera de la sesión** — cuánto dura un inicio de sesión (de 1 hora a 7 días); los cambios solo se aplican a los nuevos inicios de sesión
- **Revocar sesiones** — cerrar la sesión de un usuario en todos los dispositivos inmediatamente

Cada usuario que ha iniciado sesión (incluidos los no administradores) puede cambiar su propia contraseña o cerrar sesión desde el menú de usuario en la parte inferior de la barra lateral.

## Configuración de la API

Configure solo los proveedores que utilice: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Local LLM** (URL base para Ollama, LM Studio, llama.cpp o similar), y un proveedor compatible con OpenAI opcional y personalizado.

**Web (administrador):** las claves provienen de variables de entorno; esta página muestra cuáles están configuradas y le permite **Probar**. Reinicie después de cambiar las variables de entorno. Consulte [Configuración](/docs/configuration/).

**Escritorio:** introduzca las claves (o la URL de Local LLM) y **Guardar** / **Editar** / **Probar**. Las claves se almacenan cifradas; no puede ver el valor actual, solo reemplazarlo.

:::tip
No se necesita una clave de pago para empezar: utilice modelos gratuitos de OpenRouter, otros proveedores de nivel gratuito o un servidor local compatible con OpenAI como [Ollama](https://ollama.com), LM Studio o llama.cpp (por ejemplo, `translategemma:4b`).
:::

## Acerca de

Nombre de la aplicación, versión, fecha de compilación, licencia, avisos de terceros y enlace al repositorio.
