---
title: Configuración
description: >-
  Referencia compacta para General, Modelos, Idiomas, Glosario, Costo,
  Transformar, Usuarios, API y Acerca de.
---



Abra **Configuración** desde la barra lateral para personalizar el comportamiento de la aplicación.

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

En el modo **Fácil**, elija la IA a través de los ajustes preestablecidos en la barra de herramientas y el **Proveedor** en la Configuración general; la pestaña **Modelos** está oculta.

:::note
En la versión web, cada usuario tiene su propia configuración (experiencia de IA, proveedor, modelos/ajustes preestablecidos, idiomas, opciones, prompts). Los cambios no afectan a otros usuarios.
:::

## Configuración general

**Experiencia de IA**

- **Fácil** (predeterminado): elija un **Proveedor**. Los proveedores de nube utilizan preconfiguraciones de la barra de herramientas (**Gratis (OpenRouter)**, **Estándar**, **Avanzado**, **Técnico**). **LLM local** enumera los modelos locales instalados en su lugar. **Actualizar catálogo de preconfiguraciones** recupera la lista de preconfiguraciones más reciente del repositorio del proyecto.
- **Avanzado**: elija modelos en la barra de herramientas; administre la lista en [Modelos](#models).

**Apariencia** — Tema; **Mostrar información de costos en las acciones**; **Dígitos fraccionarios de costo**; margen solo para web alrededor de la aplicación; **Familia de fuentes** y **Tamaño**.

**Comportamiento** — **Comportamiento para ENTER**; **Ejecución automática al pegar**; **Copiar automáticamente el resultado al portapapeles**; **Traducción en tiempo real mientras escribe**; **Tiempo de espera (ms)**.

**Historial**

- **Mantener historial de ejecución** — almacena la entrada/salida para la vista [Historial](/docs/history/). Desactivarlo solicita confirmación y puede eliminar el texto almacenado. Si está etiquetado como *deshabilitado por el administrador*, se establece `HISTORY_DISABLED` — consulte [Configuración](/docs/configuration/#privacy-mode).
- **Eliminar datos del historial** — elimina el texto almacenado por antigüedad o borra todo. **No** elimina los totales de costos (use Seguimiento de costos para eso).

**Copia de seguridad de la configuración** (administradores de escritorio y web)

- Opcional **Incluir datos de uso en la copia de seguridad**
- **Copia de seguridad de la configuración** — ZIP con configuración, estado, usuarios, preferencias, indicaciones y datos de uso opcionales
- **Restaurar desde copia de seguridad** — cuadro de diálogo de confirmación con opciones para restaurar y/o borrar datos de uso

Las copias de seguridad se pueden mover entre escritorio y web; restaurar una copia de seguridad de escritorio en la web aplica los datos al usuario administrador.

## Modelos

Disponible solo en modo **Avanzado**.

![Pestaña Modelos de configuración](/images/screenshots/es/settings-general.png)

- **Modelos disponibles** (izquierda) y **Modelos seleccionados** (derecha)
- Búsqueda, chips de **Proveedor**, **Solo gratuitos**, **Actualizar**, Expandir/Contraer todo
- Los identificadores de modelo utilizan un prefijo de proveedor (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
No utilice OpenRouter **Body Builder** (`openrouter/bodybuilder`) para Traducir, Reescribir o Transformar — devuelve cargas útiles de solicitud JSON, no texto terminado.
:::

Añada con **Añadir**; elimine con **X**. **Desmarcar todo** mantiene el modelo gratuito requerido.

## Idiomas

- **Idiomas principales** — anclados cerca de la parte superior de las listas de idiomas en Traducir y Transformar
- **Idioma personalizado** — añada un idioma que falte en la lista integrada

## Seguimiento de costos

- **Costo total**, **Copiar valor**, **Restablecer costo**
- **Sincronizar con el uso de la clave API** — alinear con el uso de la cuenta de OpenRouter (solo OpenRouter)
- **Uso de la clave API** — detalles de OpenRouter cuando estén disponibles
- **Eliminar datos de costos** — todos los datos o entradas anteriores a una fecha

OpenRouter muestra el costo real facturado cuando corresponde; otros proveedores usan estimaciones de los precios de OpenRouter. Las estimaciones no son facturas.

:::caution
La eliminación de datos de costos no se puede deshacer. Exporte a través de Historial o Panel de control → Todas las llamadas primero si necesita una copia de seguridad. El historial de entrada/salida relacionado para esas llamadas API también se elimina.
:::

## Transformar

Gestione indicaciones de forma masiva: revise, elimine, importe, exporte y cargue indicaciones de ejemplo.

## Glosario

Gestione pares de términos aplicados durante la [traducción](/docs/translate/#use-the-glossary). Cada término tiene idioma de origen/destino y texto de origen/destino.

- Añadir mediante la fila inferior y **+**
- Filtrar por idiomas o texto
- Importar/exportar CSV o XLSX; descargar plantillas vacías

El escritorio almacena el glosario localmente; la web lo almacena por usuario.

## Usuarios

Solo web (administradores): añadir usuarios, actualizar detalles, restablecer contraseñas, eliminar cuentas.

## Configuración de la API

Configure solo los proveedores que utilice: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **LLM local** (URL base para Ollama, LM Studio, llama.cpp o similar), y un proveedor personalizado compatible con OpenAI opcional.

**Web (administrador):** las claves provienen de variables de entorno; esta página muestra cuáles están configuradas y le permite **Probar**. Reinicie después de cambiar las variables de entorno. Consulte [Configuración](/docs/configuration/).

**Escritorio:** ingrese claves (o URL de LLM local) y **Guardar** / **Editar** / **Probar**. Las claves se almacenan cifradas; no puede ver el valor actual, solo reemplazarlo.

:::tip
No se necesita una clave de pago para comenzar: use modelos gratuitos de OpenRouter, otros proveedores de nivel gratuito o un servidor local compatible con OpenAI, como [Ollama](https://ollama.com), LM Studio o llama.cpp (por ejemplo, `translategemma:4b`).
:::

## Acerca de

Nombre de la aplicación, versión, fecha de compilación, licencia, avisos de terceros y enlace al repositorio.
