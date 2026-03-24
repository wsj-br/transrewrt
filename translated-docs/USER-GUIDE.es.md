---
translated_at: "2026-03-24T03:18:17.182Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Guía de usuario

<br/>

<a id="introduction"></a>
## Introducción

Transrewrt te ayuda a trabajar con texto de tres formas principales:

- **Traducir**: convertir texto de un idioma a otro.
- **Reescribir**: reformular un texto con un estilo diferente, como más claro, más corto o más formal.
- **Transformar**: procesar texto usando instrucciones de IA personalizadas llamadas *prompts* (instrucciones).

<br/>

Esta guía explica cómo usar la aplicación una vez instalada y en funcionamiento. Para ver los pasos de instalación, consulta el archivo **[README](README.es.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt está disponible como aplicación de escritorio para Windows y Linux, y como aplicación web autohospedada. Esta guía se centra en el uso diario de la aplicación. Cuando algo solo se aplica a una versión, está claramente indicado.

<small>**Leer en otros idiomas:** [English (UK)](USER-GUIDE.es.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tabla de contenidos** 

- [Antes de comenzar](#before-you-start)
  - [Cómo obtener una clave de API gratuita de OpenRouter (aplicación de escritorio)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Empezando](#getting-started)
- [Partes principales de la ventana](#main-parts-of-the-window)
  - [Barra lateral](#sidebar)
  - [Barra de herramientas](#toolbar)
  - [Paneles de entrada y salida](#input-and-output-panels)
- [Traducir](#translate)
  - [Traducir texto](#translate-text)
  - [Selección de idioma](#language-selection)
  - [Ajustes útiles de traducción](#helpful-translation-settings)
  - [Atajos de teclado](#keyboard-shortcuts)
- [Reescribir](#rewrite)
  - [Reescribir texto](#rewrite-text)
- [Transformar](#transform)
  - [Ejecutar un *prompt* existente](#run-an-existing-prompt)
  - [Si aún no tienes *prompts*](#if-you-have-no-prompts-yet)
  - [Crear un *prompt* rápidamente](#create-a-prompt-quickly)
  - [Editar un *prompt*](#edit-a-prompt)
  - [Probar un *prompt* antes de usarlo](#test-a-prompt-before-using-it)
  - [Gestionar *prompts* guardados](#manage-saved-prompts)
- [Panel de control (Dashboard)](#dashboard)
  - [Filtrar los datos](#filter-the-data)
  - [Pestañas del panel](#dashboard-tabs)
  - [Exportar datos](#export-data)
  - [Eliminar registros almacenados para un modelo](#delete-stored-records-for-a-model)
- [Historial](#history)
  - [Filtrar los datos](#filter-the-data-1)
  - [Exportar datos del historial](#export-history-data)
- [Ajustes](#settings)
  - [Ajustes generales](#general-settings)
  - [Modelos](#models)
  - [Idiomas](#languages)
  - [Seguimiento de costos](#cost-tracking)
  - [*Prompts* de transformación](#transform-prompts)
  - [Usuarios](#users)
  - [Configuración de API](#api-config)
  - [Acerca de](#about)
- [Problemas comunes](#common-issues)
  - [La aplicación no traduce, reescribe ni transforma el texto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [La lista de modelos está vacía](#the-model-list-is-empty)
  - [El resultado es demasiado lento o demasiado costoso](#the-result-is-too-slow-or-too-expensive)
  - [La interfaz está en el idioma incorrecto](#the-interface-is-in-the-wrong-language)
  - [El texto es demasiado pequeño o difícil de leer](#the-text-is-too-small-or-hard-to-read)
  - [Los gráficos del panel están vacíos](#dashboard-charts-are-empty)
  - [El costo muestra «no disponible» o parece incorrecto](#cost-shows-not-available-or-seems-wrong)
  - [El costo total no coincide con la factura de mi proveedor](#total-cost-does-not-match-my-provider-bill)
  - [La página de historial falta en la barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicación web: redirigido inesperadamente a la página de inicio de sesión](#web-app-redirected-to-the-login-page-unexpectedly)
  - [El panel no muestra datos de otros usuarios (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Cambié un *prompt* y perdí los cambios](#i-changed-a-prompt-and-lost-the-edits)
- [Consejos rápidos](#quick-tips)
- [Descargo de responsabilidad](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Antes de empezar

Para utilizar Transrewrt, necesitas acceso a al menos un proveedor de IA. Los proveedores compatibles son: [OpenRouter](https://openrouter.ai) (que agrega muchos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, y [Ollama](https://ollama.com) para modelos locales.

No necesitas seleccionar un modelo de pago para comenzar. Tan pronto como añadas tu clave API de OpenRouter, la aplicación activa automáticamente una opción **gratuita** integrada de OpenRouter. Esto te permite empezar a traducir, reescribir y transformar texto de inmediato.

En términos sencillos:

- Un **modelo** es el motor de IA que realiza el trabajo. Los modelos se muestran con un **prefijo del proveedor** (por ejemplo, `openrouter/…`, `openai/…`, `ollama/…`).
- Una **clave API** (o, en el caso de Ollama, una **URL base**) es la forma en que la aplicación se conecta con ese proveedor.

Si estás usando la **aplicación de escritorio**, añade las claves en [**Configuración** > **Configuración API**](#api-config) para cada proveedor que uses. Si solo usas OpenRouter, consulta a continuación [Cómo obtener una clave API](#how-to-get-an-api-key-desktop-app). Si no deseas usar una clave API, puedes instalar Ollama (desde [ollama.com](https://ollama.com)) y usar modelos locales en su lugar.

Si estás usando la **versión web**, el propietario del servidor configura los proveedores mediante variables de entorno, por lo que normalmente no tendrás que introducir claves API tú mismo.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cómo obtener una clave API gratuita de OpenRouter (aplicación de escritorio)

Si estás utilizando la aplicación de escritorio, sigue estos pasos:

1. Ve a [OpenRouter](https://openrouter.ai) desde tu navegador web.
2. Crea una cuenta o inicia sesión.
3. Abre la página de [Claves](https://openrouter.ai/keys).
4. Haz clic en el botón para crear una nueva clave API.
5. Dale un nombre a la clave para poder reconocerla más tarde.
6. Copia la nueva clave API.
7. Vuelve a Transrewrt y abre **Configuración** > **Configuración API**.
8. Pega la clave en el campo **Clave API de OpenRouter** (dentro de **Configuración** > **Configuración API**).
9. Haz clic en **Probar clave OpenRouter** para asegurarte de que funcione.

<br/>

> ℹ️ **NOTA**<br/>
> Puedes empezar usando la ruta gratuita de OpenRouter o cualquiera de los otros modelos gratuitos disponibles sin necesidad de añadir una tarjeta de crédito. En muchos casos, esto es suficiente para comenzar a usar Transrewrt sin necesidad de elegir un modelo de pago. Alternativamente, puedes usar Ollama para ejecutar modelos localmente sin necesidad de ninguna clave API.

<br/><br/>

<a id="getting-started"></a>
## Primeros pasos

Si es la primera vez que usas Transrewrt, sigue este orden:

1. Abre la aplicación.
2. Si es necesario, elige tu **idioma de interfaz** haciendo clic en el icono del globo terráqueo.
3. Si estás usando la **aplicación de escritorio**, abre [**Configuración** > **Configuración API**](#api-config), añade una clave API de al menos un proveedor (por ejemplo, OpenRouter) y haz clic en **Probar** para verificar que funcione.
4. Abre [**Configuración** > **Modelos**](#models) y añade uno o más modelos a **Modelos seleccionados**.
5. Abre [**Configuración** > **Idiomas**](#languages) y selecciona tus **Idiomas principales** si deseas que tus idiomas más usados aparezcan primero.
6. Ve a **Traducir** y realiza una traducción sencilla para confirmar que todo funcione.
7. Una vez que funcione, prueba **Reescribir** y luego **Transformar**.

Este orden es importante. Evita el problema más común al usar la aplicación por primera vez: intentar ejecutar una tarea antes de que la aplicación tenga una conexión API operativa o un modelo seleccionado.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Partes principales de la ventana

La aplicación se divide en tres áreas principales:

- La **barra lateral** en el lado izquierdo.
- La **barra de herramientas** en la parte superior.
- El **área de trabajo** en el centro.

<br/>

<a id="sidebar"></a>
### Barra lateral

Utiliza la barra lateral para navegar por la aplicación. Puedes colapsarla para ganar más espacio haciendo clic en el icono junto al logotipo de la aplicación.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/es/sidebar.png" alt="Barra lateral de la aplicación" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traducir</strong> abre el área de trabajo de traducción.</li><br/>
        <li><strong>Reescribir</strong> abre el área de trabajo de reescritura.</li><br/>
        <li><strong>Transformar</strong> abre el área de trabajo de instrucciones personalizadas.</li><br/>
        <li><strong>Panel</strong> muestra información sobre el uso y los costos.</li><br/>
        <li><strong>Configuración</strong> abre el panel de configuración.</li><br/>
        <li><strong>Historial</strong> muestra el historial de uso con el texto de entrada y salida.</li><br/>
        <li><strong>Usuario</strong> muestra el nombre del usuario conectado (solo en la versión web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra de herramientas

La barra de herramientas cambia ligeramente dependiendo de dónde estés en la aplicación.

- A la izquierda, muestra el nombre de la página actual.
- A la derecha, muestra el **selector de modelo** y el control del **idioma de la interfaz**.

El **selector de modelo** te permite elegir qué motor de inteligencia artificial utilizar para la tarea actual.

  ![Selector de modelo](../images/screenshots/es/model-selector.png)

> ℹ️ **NOTA**<br/>
> Algunos modelos gratuitos pueden no estar siempre disponibles; a veces están fuera de línea o tienen un límite de uso. Si esto ocurre, la aplicación eliminará automáticamente ese modelo de tu lista de modelos disponibles.<br/>
> Para controlar qué modelos aparecen, ve a [**Configuración** > **Modelos**](#models) y edita tu lista de modelos.  
> También puedes abrir la configuración del modelo directamente haciendo clic en el icono del proveedor situado a la izquierda del nombre del modelo en la barra de herramientas.

<br/>

El **icono del globo terráqueo + código de idioma** cambia el idioma de la interfaz de la aplicación, como menús y botones. **No** cambia los idiomas de traducción utilizados en **Traducir**.

  ![Selector de idioma de la interfaz](../images/screenshots/es/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Paneles de entrada y salida

La mayoría de los espacios de trabajo utilizan un panel **Entrada** a la izquierda y un panel **Salida** a la derecha.

El panel **Entrada** muestra:

- Recuento de caracteres
- Recuento de palabras
- Recuento de párrafos

El panel **Salida** puede mostrar:

- Cuánto tiempo ha tardado la tarea
- El coste de esa tarea (si está disponible)
- Tu coste total acumulado
- **TPS** (tokens por segundo)
- Recuentos de caracteres, palabras y párrafos
- El modelo utilizado

Si tienes dudas sobre los términos técnicos:

- **Token** significa un fragmento pequeño de texto. Puedes pensar en ello como parte de una palabra o una palabra corta.
- **TPS** significa cuántos de esos fragmentos de texto ha procesado el modelo por segundo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traducir

Utiliza **Traducir** cuando quieras convertir un texto de un idioma a otro.

![Espacio de trabajo Traducir](../images/screenshots/es/translate.png)

<br/>

<a id="translate-text"></a>
### Traducir texto

1. Abre **Traducir**.
2. Elige un idioma en **De**.
3. Elige un idioma en **A**.
4. Elige un modelo en la barra de herramientas.
5. Escribe o pega el texto en **Entrada**.
6. Haz clic en **Traducir**.
7. Lee el resultado en **Salida**.
8. Usa el botón de copiar si deseas copiar el resultado.

<br/>

<a id="language-selection"></a>
### Selección de idioma

- **De** puede ser un idioma específico o **Detectar idioma**.
- **A** es el idioma en el que deseas obtener el resultado.

Tus **Idiomas principales** seleccionados aparecen en la parte superior de la lista. Puedes configurarlos en [**Configuración** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Ajustes útiles de traducción

En [**Configuración** > **Ajustes generales**](#general-settings), puedes cambiar el comportamiento de la traducción:

- **Traducir automáticamente al pegar** realiza una traducción tan pronto como pegues texto.
- **Copiar automáticamente el resultado al portapapeles** copia el resultado automáticamente tras una ejecución exitosa.
- **Traducción en tiempo real (mientras escribes)** realiza traducciones mientras escribes.
- **Tiempo de espera (ms)** controla cuánto espera la aplicación antes de realizar una traducción en tiempo real.

<br/>

<a id="keyboard-shortcuts"></a>
### Atajos de teclado

En [**Configuración** > **Ajustes generales**](#general-settings), **Comportamiento de INTRO** controla lo que sucede al pulsar `Enter`:

- **Enter** puede ejecutar la tarea y **Mayús+Enter** puede añadir una nueva línea.
- O la aplicación puede hacer lo contrario.

El modo actual también se muestra en el botón **Traducir**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Reescribir

Usa **Reescribir** cuando quieras mejorar el estilo sin cambiar el significado principal.

![Espacio de trabajo Reescribir](../images/screenshots/es/rewrite.png)

Esto es útil para:

- corregir ortografía y gramática
- hacer el texto más claro
- hacer el texto más formal o más informal
- acortar o ampliar el texto
- hacer que el texto suene más técnico

<br/>

<a id="rewrite-text"></a>

### Reescribir texto

1. Abra **Reescribir**.
2. Elija un **Modo**.
3. Seleccione un modelo en la barra de herramientas.
4. Escriba o pegue el texto en **Entrada**.
5. Haga clic en **Reescribir**.
6. Revise el resultado en **Salida**.

El mismo comportamiento de la tecla Intro descrito en [**Traducir**](#keyboard-shortcuts) también se aplica aquí.

<br/>

> 💡 **CONSEJO**<br/>
> Cuando utiliza el modo "**Revisar ortografía y gramática**", aparece un botón `Mostrar cambios` en el panel de salida.
> Haga clic en este botón para alternar la visualización de las correcciones, mostrando u ocultando los cambios específicos realizados en su texto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Transformar

Utilice **Transformar** cuando desee que la IA siga un conjunto personalizado de instrucciones.

![Espacio de trabajo Transformar](../images/screenshots/es/transform.png)

Esta es el área más flexible de la aplicación. Puede utilizarla para tareas como:

- resumir notas
- convertir un texto en bruto en un correo electrónico pulido
- extraer puntos clave
- convertir texto en un formato específico

<br/>

<a id="run-an-existing-prompt"></a>
### Ejecutar una indicación existente

1. Abra **Transformar**.
2. Elija una indicación de la lista de indicaciones.
3. Si aparece un cuadro de **Idioma de destino**, seleccione un idioma si lo desea.
4. Escriba o pegue el texto en **Entrada**.
5. Haga clic en **Transformar**.
6. Lea el resultado en **Salida**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Si aún no tiene indicaciones

Si su lista de indicaciones está vacía, haga clic en **Cargar indicaciones de ejemplo**. Esto añade ejemplos integrados para que pueda comenzar rápidamente.

<br/>

> ℹ️ **NOTA**<br/>
> Las indicaciones de ejemplo se proporcionan en inglés. Tras cargarlas, puede editar una indicación y usar **Traducir indicación** para traducirla a su idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Crear una indicación rápidamente

La forma más rápida de crear una indicación es:

1. Haga clic en **Nueva indicación**.
2. Haga clic en **Generar indicación**.
3. Describa lo que desea que haga la indicación.
4. Elija un modelo.
5. Deje que la aplicación cree un borrador automáticamente.
6. Revise el borrador y haga clic en **Guardar**.

![Generar indicación](../images/screenshots/es/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Editar una indicación

Cuando crea o edita una indicación, el editor aparece a la izquierda y un área de prueba aparece a la derecha.

![Editor de indicaciones Transformar](../images/screenshots/es/transform-prompt-edit.png)

Los campos principales son:

- **Nombre de la indicación**: el nombre que aparece en la lista de indicaciones.
- **Instrucciones de la indicación (opcional)**: una breve sugerencia mostrada al usuario al ejecutar la indicación.
- **Rol del modelo**: el rol general asignado a la IA, por ejemplo, 'Eres un asistente útil'.
- **Instrucciones del modelo (una por línea)**: las reglas específicas que desea que siga la IA.
- **Descripción de salida**: una palabra corta que describe el resultado, como 'resumen' o 'reescribir'.
- **Temperatura (0,0 → 1,0)**: cómo se comportará el modelo; véase a continuación.
- **Preguntar por idioma de destino**: añade un selector de idioma de destino al ejecutar la indicación.

Si el término técnico **Temperatura** es nuevo para usted, piénselo así:

- Una **temperatura más baja** produce resultados más estables y predecibles.
- Una **temperatura más alta** produce mayor variedad y creatividad.

También puede utilizar:

- **`Generar indicación`** para crear un nuevo borrador a partir de una descripción simple
- **`Mejorar indicación`** para perfeccionar una indicación existente
- **`Traducir indicación`** para traducir los campos de la indicación

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> Haga clic en **`Guardar`** antes de hacer clic en **`Volver a ejecutar`**. Si regresa sin guardar, perderá los cambios.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Probar una indicación antes de usarla

El panel de prueba de la derecha le permite probar su indicación con texto de ejemplo antes de usarla en su trabajo diario.

Esto resulta útil cuando:

- está creando una nueva indicación
- está comparando dos versiones de una indicación
- desea verificar el tono, la longitud o el formato de salida

<br/>

<a id="manage-saved-prompts"></a>
### Administrar indicaciones guardadas

Para gestionar las indicaciones guardadas en un solo lugar, abra [**Configuración** > **Indicaciones de transformación**](#transform-prompts).

Allí puede:

- listar y eliminar sus indicaciones
- exportar indicaciones como **JSON**, **CSV** o **XLSX**
- importar indicaciones desde un archivo

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Panel de control

Utilice el **Panel de control** para ver cuánto está usando la aplicación y cuál es su costo (para modelos de pago).

![Resumen del panel de control](../images/screenshots/es/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Si solo utiliza modelos gratuitos, los gráficos relacionados con el costo estarán vacíos.

<br/>

<a id="filter-the-data"></a>
### Filtrar los datos

Utilice los botones de filtro en la parte superior para cambiar el rango de tiempo.

![Filtros del panel de control](../images/screenshots/es/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtro **Usuario** solo es visible para administradores en la versión web. Los usuarios regulares no verán este filtro, y no está disponible en la aplicación de escritorio.

<br/>

<a id="dashboard-tabs"></a>
### Pestañas del panel de control

- **Resumen** le ofrece una visión general del uso y el costo.
- **Por uso** desglosa la actividad por idioma de traducción, modo de reescritura y indicación de transformación.
- **Por modelo** muestra qué modelos ha usado y cuánto han costado.
- **Por día** muestra los totales diarios.
- **Todas las llamadas** muestra el historial completo de llamadas y le permite exportarlo.

<br/>

<a id="export-data"></a>
### Exportar datos

Las tablas del panel de control pueden exportar los datos en:

- **JSON**
- **CSV**
- **XLSX**

Esto resulta útil si desea revisar la actividad fuera de la aplicación o compartir un informe.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registros almacenados de un modelo

En **Por modelo** o **Todas las llamadas**, puede eliminar los registros almacenados de un modelo haciendo clic en el icono de la "papelera".

> ⚠️ **ADVERTENCIA**<br/>
> Eliminar registros almacenados no se puede deshacer. Úselo únicamente si está seguro de que ya no necesita ese historial.

Para eliminar todos los datos o borrar registros según su antigüedad, vaya a [**Configuración** > **Seguimiento de costos**](#cost-tracking). Allí encontrará opciones para borrar todos los datos almacenados o solo los datos anteriores a una fecha determinada.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historial

Haga clic en **Historial** para ver el registro de sus acciones dentro de **Transrewrt**, incluyendo la entrada y salida de cada operación.

![Página de historial](../images/screenshots/es/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar el historial

**Historial** utiliza los mismos filtros que la página del **Panel de control**. Úselos para seleccionar el rango de tiempo.

![Filtros del panel de control](../images/screenshots/es/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtro **Usuario** solo es visible para administradores en la versión web. Los usuarios regulares no verán este filtro, y no está disponible en la aplicación de escritorio.

<br/>

<a id="export-history-data"></a>
### Exportar datos del historial

La página de historial puede exportar los datos filtrados en:

- **JSON**
- **CSV**
- **XLSX**

Esto resulta útil si desea revisar la actividad fuera de la aplicación o compartir un informe.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Configuración

Abra **Configuración** desde la barra lateral para personalizar el comportamiento de la aplicación.

Las pestañas disponibles dependen de la plataforma y su rol:

  | Pestaña               | Escritorio | Web (admin) | Web (usuario regular) |
  |-----------------------|:----------:|:-----------:|:---------------------:|
  | Configuración general |    sí      |     sí      |          sí           |
  | Modelos               |    sí      |     sí      |          sí           |
  | Idiomas               |    sí      |     sí      |          sí           |
  | Seguimiento de costos |   sí      |     sí      |           —           |
  | Indicaciones de transformación |   sí |     sí   |          sí           |
  | Usuarios              |     —      |     sí      |           —           |
  | Configuración de API  |    sí      |     sí      |           —           |
  | Acerca de             |    sí      |     sí      |          sí           |

<br/>

> ℹ️ **NOTA**<br/>
> En la versión web, cada usuario tiene su propia configuración. Ajustes como modelos seleccionados, idiomas, opciones generales e indicaciones de transformación se almacenan por usuario. Los cambios que usted haga no afectan a otros usuarios.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Configuración general

Utilice **Configuración general** para controlar el comportamiento al escribir, si los detalles de ejecución se almacenan en el **Historial** y el aspecto visual.

**Comportamiento**

- **Comportamiento de ENTER** permite elegir si `Intro` ejecuta la tarea o inserta una nueva línea.
- **Auto-traducir al pegar** inicia la traducción tan pronto como pegas texto.
- **Copiar automáticamente el resultado al portapapeles** copia los resultados exitosos automáticamente.
- **Traducción en tiempo real (mientras escribe)** traduce mientras escribe.
- **Tiempo de espera (ms)** establece el tiempo de espera para la traducción en tiempo real.

**Historial**

- **Mantener historial de ejecución** determina si cada traducción, reescritura y transformación almacena el **texto de entrada y salida** para la vista del panel lateral [**Historial**](#history). Al desactivarlo, se solicitará confirmación; si acepta, el texto almacenado será eliminado de la base de datos.
- **Eliminar datos del historial** permite eliminar el texto almacenado por antigüedad (por ejemplo, datos más antiguos que algunos meses, o **todos los datos (limpiar)**) mediante **Eliminar datos**. Esto solo afecta al texto guardado de las ejecuciones para la vista **Historial**; **no** elimina los totales de costos ni el uso. Para eliminar o reducir los datos de **costo**, use [**Configuración** > **Seguimiento de costos**](#cost-tracking).

**Apariencia**

- **Dígitos decimales del costo** cambia cómo se muestran los decimales del costo.
- **Solo web:** **mostrar un margen alrededor de la aplicación** añade espacio extra alrededor de la interfaz.
- **Familia de fuentes** cambia la fuente del texto en los paneles.
- **Tamaño** cambia el tamaño de la fuente.

<br/>

<a id="models"></a>
### Modelos

Use **Configuración** > **Modelos** para elegir qué modelos aparecen en la barra de herramientas.

![Pestaña Modelos de Configuración](../images/screenshots/es/settings-models.png)

La página tiene dos listas:

- **Modelos disponibles** a la izquierda
- **Modelos seleccionados** a la derecha

Los controles útiles incluyen:

- **Buscar modelos...** para encontrar un modelo por nombre
- **Fichas de proveedor** para limitar la lista a un motor (OpenRouter, OpenAI, Ollama, …)
- **Solo gratuitos** para mostrar únicamente modelos gratuitos
- **Actualizar** para recargar la lista
- **Expandir todo** y **Contraer todo** al ordenar por proveedor

Las identificaciones de modelo incluyen el prefijo del proveedor (por ejemplo `openrouter/…` frente a `openai/…`). Las insignias como **OpenAI (OpenRouter)** frente a **OpenAI (directo)** muestran cómo se enruta el tráfico.

Acciones:

- Para añadir un modelo, haga clic en **Agregar** o en cualquier parte de la entrada.

- Para eliminar un modelo, haga clic en **X** junto a él en **Modelos seleccionados** o en **Seleccionado** en la entrada de Modelos disponibles.

- Para vaciar la lista, haga clic en **Deseleccionar todo**. El modelo gratuito obligatorio permanecerá en la lista.

<br/>

> ℹ️ **NOTA**<br/>
> Si no desea añadir créditos a OpenRouter de inmediato, comience habilitando **Solo gratuitos** y seleccione los modelos gratuitos (sin necesidad de tarjeta de crédito). También puede usar Ollama para ejecutar modelos localmente sin necesidad de ninguna clave de API.

<br/>

<a id="languages"></a>
### Idiomas

Use **Configuración** > **Idiomas** para organizar las listas de idiomas utilizadas en la aplicación.

- **Idiomas principales** se fijan cerca de la parte superior de las listas de idiomas en **Traducir** y **Transformar**.
- **Idioma personalizado** permite añadir un idioma que no esté en la lista integrada.

Si añade un idioma personalizado, aparecerá en los selectores de idiomas junto con las opciones incorporadas.

<br/>

<a id="cost-tracking"></a>
### Seguimiento de costos

Use **Configuración** > **Seguimiento de costos** para gestionar la información de costos.

- **Costo total** muestra la suma acumulada.
- **Copiar valor** copia el total al portapapeles.
- **Restablecer costo** reinicia el total almacenado a cero.
- **Sincronizar con el uso de clave de API** establece el total para que coincida con el uso informado por su cuenta de OpenRouter (solo OpenRouter).
- **Uso de clave de API** muestra los detalles de uso de OpenRouter, si están disponibles.
- **Eliminar datos de costo** elimina todos los datos, o solo las entradas más antiguas que una fecha seleccionada.

**Seguimiento de costos:** Cuando usa modelos de OpenRouter, la aplicación muestra su uso y gastos reales basados en datos de OpenRouter. Para todos los demás proveedores, la aplicación estima los costos utilizando los precios publicados por OpenRouter; si no hay un precio disponible, la estimación puede ser cero.

<br/>

> ℹ️ **NOTA**<br/>
> Todas las cifras de costo son estimaciones únicamente para su referencia, no son facturas oficiales.


<br/>

> ⚠️ **ADVERTENCIA**<br/>
> La eliminación de datos no se puede deshacer. Antes de eliminar, asegúrese de hacer una copia de seguridad de sus datos o de exportarlos mediante [**Tablero** > **Todas las llamadas**](#dashboard-tabs), de lo contrario se perderán permanentemente. <br/> 
> Todo el historial relacionado con cada entrada de llamada API también será eliminado.


<br/>

<a id="transform-prompts"></a>

### Transformar indicaciones

Utiliza **Configuración** > **Transformar indicaciones** para gestionar indicaciones en masa.

Puedes:

- revisar tus indicaciones guardadas
- eliminar indicaciones
- importar indicaciones desde un archivo
- exportar indicaciones para respaldo o compartir

<br/>

<a id="users"></a>
### Usuarios

**Web: solo administrador**

Utiliza **Usuarios** para gestionar cuentas de usuario en la versión web. Puedes añadir usuarios, actualizar sus datos, restablecer contraseñas y eliminar cuentas.

<br/>

<a id="api-config"></a>
### Configuración de API

Los proveedores compatibles son: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI y **Ollama** (modelos locales mediante una URL base). Solo necesitas configurar los proveedores que uses.

**Aplicación web: solo administrador**

Las claves API se configuran a través de variables de entorno del sistema o de Docker — no se introducen en la interfaz web. Esta página muestra qué proveedores tienen una clave configurada y permite probar cada uno haciendo clic en el botón **`Prueba`**.

<br/>

> ℹ️ **NOTA**<br/>
> Para cambiar una clave API, actualiza la variable de entorno en la configuración del sistema o de Docker y reinicia el servidor o contenedor.

<br/>

**Aplicación de escritorio**

Utiliza **Configuración de API** para almacenar claves API de cada proveedor que uses. Para Ollama, introduce la **URL base** en lugar de una clave API.

<br/>

> 💡 **Consejo** <br/>
> Si no deseas usar una clave API ni pagar por el uso, puedes [descargar Ollama](https://ollama.com) y ejecutar modelos localmente en tu máquina de forma gratuita. Alternativamente, puedes crear una cuenta gratuita en OpenRouter (sin necesidad de tarjeta de crédito) para usar sus modelos gratuitos.

- Añade únicamente los proveedores que necesites. En **Configuración** > **Modelos**, cada ID de modelo comienza con el nombre del proveedor (por ejemplo `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para añadir una clave API, escribe el valor en el campo de texto y haz clic en **`Guardar`**. Para reemplazar una clave existente, haz clic en **`Editar`**. Para comprobar si una clave funciona, haz clic en **`Prueba`**.

<br/>

> ℹ️ **NOTA**<br/>
> No puedes ver el valor actual de una clave API. Solo puedes reemplazarla usando el botón **`Editar`**.
> Las claves API se almacenan cifradas en el archivo de configuración.

<br/>

Para obtener pasos detallados sobre cómo obtener una clave OpenRouter, consulta [Cómo obtener una clave de API](#how-to-get-an-api-key-desktop-app) anterior.

<br/>

<a id="about"></a>
### Acerca de

La pestaña **Acerca de** muestra:

- el nombre de la aplicación
- el número de versión
- la fecha de compilación
- un enlace al repositorio del proyecto

<br/><br/>

<a id="common-issues"></a>
## Problemas frecuentes

Si algo no funciona como se espera, revisa primero los siguientes puntos.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### La aplicación no traduce, reescribe ni transforma el texto

Comprueba que:

- has seleccionado un modelo en la barra de herramientas
- al menos un modelo aparece en [**Configuración** > **Modelos**](#models)
- tu configuración de API funciona correctamente

Si estás usando la aplicación de escritorio:

1. Abre [**Configuración** > **Configuración de API**](#api-config).
2. Asegúrate de que al menos una clave API esté guardada.
3. Haz clic en **Prueba** junto al proveedor para confirmar que la clave funciona.

<br/>

<a id="the-model-list-is-empty"></a>
### La lista de modelos está vacía

Abre [**Configuración** > **Modelos**](#models) y haz clic en **Actualizar**.

Si es necesario:

- busca un modelo
- activa **Solo gratuitos**
- añade uno o más modelos a **Modelos seleccionados**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### El resultado es muy lento o demasiado costoso

Prueba una o varias de estas opciones:

- elige un modelo diferente
- usa una entrada más corta
- desactiva **Traducción en tiempo real (al escribir)** en [**Configuración** > **Ajustes generales**](#general-settings)
- usa modelos gratuitos para tareas simples (ver [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### La interfaz está en el idioma incorrecto

Haz clic en el icono del globo en la [barra de herramientas](#toolbar) y selecciona tu **Idioma de la interfaz** deseado.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### El texto es demasiado pequeño o difícil de leer

Abre [**Configuración** > **Ajustes generales**](#general-settings) y cambia:

- **Familia de fuentes**
- **Tamaño**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Los gráficos del panel están vacíos

Esto es normal si:

- solo usas **modelos gratuitos** (los gráficos de costos estarán en blanco)
- el **filtro de tiempo seleccionado** no incluye el período en que se realizaron llamadas — prueba con **Todo** para verificar

Si los gráficos siguen vacíos después de seleccionar **Todo**, confirma que las llamadas aparezcan en [**Historial**](#history) o en la pestaña **Todas las llamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### El costo muestra "no disponible" o parece incorrecto

Cuando usas modelos a través de **OpenRouter**, la aplicación muestra el gasto real informado por OpenRouter.

Para **otros proveedores** (OpenAI directo, Anthropic directo, etc.), el costo se estima a partir de los datos de precios publicados por OpenRouter. Si no se encuentra un precio coincidente para un modelo, el costo aparecerá como **no disponible** y no se sumará al total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### El costo total no coincide con la factura de mi proveedor

Todas las cifras de costo en la aplicación son **estimaciones con fines informativos únicamente**, no constituyen recibos oficiales de facturación.

Para acercar el total a tu gasto real en OpenRouter, abre [**Configuración** > **Seguimiento de costos**](#cost-tracking) y haz clic en **Sincronizar con el uso de la clave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La página Historial falta en la barra lateral

La opción **Mantener historial de ejecución** podría estar desactivada. Abre [**Configuración** > **Configuración general**](#general-settings) y actívala. Ten en cuenta que activarla no restaura los datos de historial previamente eliminados.

<br/>

<a id="web-app-session-expired"></a>
### Aplicación web: redirigido inesperadamente a la página de inicio de sesión

Tu sesión podría haber expirado. Inicia sesión nuevamente. Si ocurre con frecuencia, verifica la configuración del servidor respecto a la duración de la sesión.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### El panel no muestra datos de otros usuarios (web)

Solo los **administradores** pueden ver los datos de todos los usuarios mediante el filtro **Usuario**. Por diseño, los usuarios normales solo ven su propia actividad.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Modifiqué un indicador y perdí los cambios

Al editar un indicador, asegúrate siempre de hacer clic en **Guardar** antes de hacer clic en **Volver a ejecutar**.

<br/><br/>

<a id="quick-tips"></a>
## Consejos rápidos

- Comienza con [**Traducir**](#translate) para asegurarte de que tu configuración funcione antes de pasar a [**Reescribir**](#rewrite) o [**Transformar**](#transform).
- Usa [**Reescribir**](#rewrite) para mejorar el texto en tareas cotidianas.
- Usa [**Transformar**](#transform) cuando necesites un flujo de trabajo repetible para una tarea específica.
- Usa [**Panel**](#dashboard) si deseas vigilar el uso y el costo.
- Usa [**Historial**](#history) para revisar operaciones anteriores y su texto completo de entrada/salida.
- Exporta indicadores regularmente si estás creando una biblioteca que deseas proteger (ver [Transformar indicadores](#transform-prompts)) o si deseas compartirla con otros.

<br/><br/>

<a id="disclaimer"></a>
## Descargo de responsabilidad

Los nombres y logotipos de los productos pertenecen a sus respectivos dueños y se utilizan únicamente con fines de identificación. Este software no está afiliado ni avalado por ninguna de las marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licencia

Copyright © 2026 Waldemar Scudeller Jr.

[Licencia Apache 2.0](LICENSE)