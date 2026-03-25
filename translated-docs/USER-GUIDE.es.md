---
translated_at: "2026-03-25T22:27:37.475Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Guía del usuario

<br/>

<a id="introduction"></a>
## Introducción

Transrewrt le ayuda a trabajar con texto de tres maneras principales:

- **Traducir** - convertir texto de un idioma a otro.
- **Reescribir** - reformular el texto con un estilo diferente, como más claro, más breve o más formal.
- **Transformar** - procesar texto usando instrucciones personalizadas de inteligencia artificial llamadas indicaciones (*prompts*).

<br/>

Esta guía explica cómo usar la aplicación una vez instalada y en funcionamiento. Para los pasos de instalación, consulte el archivo **[README](README.es.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt está disponible como aplicación de escritorio para Windows y Linux, y como aplicación web autohospedada. Esta guía se centra en el uso diario de la aplicación. Cuando algo solo se aplica a una versión, se indica claramente.

<small>**Leer en otros idiomas:** [English (UK)](USER-GUIDE.es.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Aviso sobre traducciones de la interfaz y la documentación:** Todos los idiomas de la interfaz, excepto el inglés original (UK), se tradujeron mediante modelos de inteligencia artificial; el texto puede ser impreciso o contener errores.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tabla de contenidos** 

- [Antes de comenzar](#before-you-start)
  - [Cómo obtener una clave API gratuita de OpenRouter (aplicación de escritorio)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Primeros pasos](#getting-started)
- [Partes principales de la ventana](#main-parts-of-the-window)
  - [Barra lateral](#sidebar)
  - [Barra de herramientas](#toolbar)
  - [Paneles de entrada y salida](#input-and-output-panels)
- [Traducir](#translate)
  - [Traducir texto](#translate-text)
  - [Selección de idioma](#language-selection)
  - [Ajustes útiles para la traducción](#helpful-translation-settings)
- [Reescribir](#rewrite)
- [Transformar](#transform)
  - [Ejecutar una indicación existente](#run-an-existing-prompt)
  - [Si aún no tiene indicaciones](#if-you-have-no-prompts-yet)
  - [Crear una indicación rápidamente](#create-a-prompt-quickly)
  - [Editar una indicación](#edit-a-prompt)
  - [Probar una indicación antes de usarla](#test-a-prompt-before-using-it)
- [Panel de control](#dashboard)
  - [Filtrar los datos](#filter-the-data)
  - [Pestañas del panel](#dashboard-tabs)
  - [Exportar datos](#export-data)
  - [Eliminar registros almacenados para un modelo](#delete-stored-records-for-a-model)
- [Historial](#history)
  - [Filtrar los datos](#filter-the-data-1)
  - [Exportar datos del historial](#export-history-data)
- [Configuración](#settings)
  - [Ajustes generales](#general-settings)
  - [Modelos](#models)
  - [Idiomas](#languages)
  - [Seguimiento de costos](#cost-tracking)
  - [Indicaciones de transformación](#transform-prompts)
  - [Usuarios](#users)
  - [Configuración de API](#api-config)
  - [Acerca de](#about)
- [Problemas comunes](#common-issues)
  - [La aplicación no traduce, reescribe ni transforma texto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [La lista de modelos está vacía](#the-model-list-is-empty)
  - [El resultado es demasiado lento o demasiado costoso](#the-result-is-too-slow-or-too-expensive)
  - [La interfaz está en el idioma incorrecto](#the-interface-is-in-the-wrong-language)
  - [El texto es demasiado pequeño o difícil de leer](#the-text-is-too-small-or-hard-to-read)
  - [Las gráficas del panel están vacías](#dashboard-charts-are-empty)
  - [El costo muestra "no disponible" o parece incorrecto](#cost-shows-not-available-or-seems-wrong)
  - [El costo total no coincide con la factura de mi proveedor](#total-cost-does-not-match-my-provider-bill)
  - [La página de historial no aparece en la barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicación web: redirigido inesperadamente a la página de inicio de sesión](#web-app-redirected-to-the-login-page-unexpectedly)
  - [El panel no muestra datos de otros usuarios (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Cambié una indicación y perdí los cambios](#i-changed-a-prompt-and-lost-the-edits)
- [Consejos rápidos](#quick-tips)
- [Descargo de responsabilidad](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Antes de empezar

Para usar Transrewrt, necesitas acceso a al menos un proveedor de IA. Los proveedores compatibles son: [OpenRouter](https://openrouter.ai) (que agrega muchos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras y [Ollama](https://ollama.com) para modelos locales.

No necesitas seleccionar un modelo de pago para empezar. En cuanto añadas tu clave API de OpenRouter, la aplicación activa automáticamente una opción **gratuita** integrada de OpenRouter. Esto te permite comenzar a traducir, reescribir y transformar texto de inmediato. Alternativamente, también puedes obtener una clave API gratuita de Cerebras, Google, Groq o Mistral AI.

En lenguaje sencillo:

- Un **modelo** es el motor de IA que realiza el trabajo. Los modelos se muestran con un **prefijo del proveedor** (por ejemplo, `openrouter/…`, `openai/…`, `ollama/…`).
- Una **clave API** (o, en el caso de Ollama, una **URL base**) es la forma en que la aplicación accede a ese proveedor.

Si estás utilizando la **aplicación de escritorio**, añade las claves en [**Configuración** > **Configuración de API**](#api-config) para cada proveedor que utilices. Si solo vas a usar OpenRouter, consulta a continuación [Cómo obtener una clave API](#how-to-get-an-api-key-desktop-app). Si no deseas usar una clave API, puedes instalar Ollama (desde [ollama.com](https://ollama.com)) y usar modelos locales en su lugar, como `translategemma:4b`.

Si estás usando la **versión web**, el propietario del servidor configura los proveedores mediante variables de entorno, por lo que no puedes introducir claves API directamente en la aplicación.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cómo obtener una clave API gratuita de OpenRouter (aplicación de escritorio)

Si estás utilizando la aplicación de escritorio, sigue estos pasos:

1. Ve a [OpenRouter](https://openrouter.ai) desde tu navegador web.
2. Crea una cuenta o inicia sesión.
3. Abre la página [Keys](https://openrouter.ai/keys).
4. Haz clic en el botón para crear una nueva clave API.
5. Ponle un nombre a la clave para que puedas identificarla más tarde.
6. Copia la nueva clave API.
7. Vuelve a Transrewrt y abre **Configuración** > **Configuración de API**.
8. Pega la clave en el campo **Clave API de OpenRouter** (dentro de **Configuración** > **Configuración de API**).
9. Haz clic en **Probar clave de OpenRouter** para asegurarte de que funciona.

<br/><br/>

<a id="getting-started"></a>
## Primeros pasos

Si es la primera vez que usas Transrewrt, sigue este orden:

1. Abre la aplicación.
2. Si es necesario, elige tu **idioma de interfaz** desde el icono del globo.
3. Si estás usando la **aplicación de escritorio**, abre [**Configuración** > **Configuración de API**](#api-config), añade una clave API para al menos un proveedor (por ejemplo, OpenRouter) y haz clic en **Probar** para verificar que funcione.
4. Abre [**Configuración** > **Modelos**](#models) y añade uno o más modelos a **Modelos seleccionados**.
5. Abre [**Configuración** > **Idiomas**](#languages) y elige tus **Idiomas principales** si deseas que tus idiomas más usados aparezcan primero.
6. Ve a **Traducir** y realiza una traducción sencilla para confirmar que todo funciona.
7. Una vez que funcione, prueba **Reescribir** y luego **Transformar**.

El orden es importante. Evita el problema más común al usar la aplicación por primera vez: intentar ejecutar una tarea antes de que la aplicación tenga una conexión API funcional o un modelo seleccionado.

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

Utiliza la barra lateral para desplazarte por la aplicación. Puedes reducirla para ganar más espacio haciendo clic en el icono junto al logotipo de la aplicación.

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
        <li><strong>Transformar</strong> abre el área de trabajo de indicaciones personalizadas.</li><br/>
        <li><strong>Panel</strong> muestra información sobre el uso y los costos.</li><br/>
        <li><strong>Configuración</strong> abre el panel de configuración.</li><br/>
        <li><strong>Historial</strong> muestra el historial de uso con el texto de entrada y salida.</li><br/>
        <li><strong>Usuario</strong> muestra el nombre del usuario iniciado (solo en la versión web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra de herramientas

La barra de herramientas cambia ligeramente según dónde te encuentres en la aplicación.

- A la izquierda, muestra el nombre de la página actual.
- A la derecha, muestra el **selector de modelo** y el control del **idioma de la interfaz**.

El **selector de modelo** te permite elegir qué motor de IA utilizar para la tarea actual.

  ![Selector de modelo](../images/screenshots/es/model-selector.png)

Algunos modelos gratuitos pueden no estar siempre disponibles; a veces están fuera de línea o tienen un límite de uso. Si esto ocurre, la aplicación eliminará automáticamente ese modelo de tu lista disponible. Para controlar qué modelos aparecen, ve a [**Ajustes** > **Modelos**](#models) y edita tu lista de modelos.  
También puedes abrir la configuración del modelo directamente haciendo clic en el ícono del proveedor a la izquierda del nombre del modelo en la barra de herramientas.

<br/>

El **ícono de globo terráqueo + código de idioma** cambia el idioma de la interfaz de la aplicación, como menús y botones. **No** cambia los idiomas de traducción utilizados en **Traducir**.

  ![Selector de idioma de la interfaz](../images/screenshots/es/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Paneles de entrada y salida

La mayoría de los espacios de trabajo utilizan un panel **Entrada** a la izquierda y un panel **Salida** a la derecha.

Cada panel también muestra:

| **Entrada**                                                          | **Salida**                                                                                                                  |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Conteo de caracteres <br/>- Conteo de palabras <br/>- Conteo de párrafos   <br/> | - Cuánto tiempo tomó la tarea<br/>- **TPS** (tokens por segundo)<br/>- Conteo de caracteres, palabras y párrafos<br/>- El modelo utilizado |


Si te preguntas sobre los términos técnicos:

- **Token** significa un pequeño fragmento de texto. Puedes pensarlo como parte de una palabra o una palabra corta.
- **TPS** significa cuántos de esos fragmentos de texto procesó el modelo cada segundo.

<br/>

También puedes monitorear el costo de cada operación (si está disponible) y el costo total, activando la opción `Mostrar información de costo en las acciones` en [**Ajustes** > **Configuración general**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Traducir

Utiliza **Traducir** cuando quieras convertir texto de un idioma a otro.

![Espacio de trabajo de traducción](../images/screenshots/es/translate.png)

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
8. Utiliza el botón de copiar si deseas copiar el resultado.

<br/>

<a id="language-selection"></a>
### Selección de idioma

- **De** puede ser un idioma específico o **Detectar idioma**.
- **A** es el idioma en el que deseas obtener el resultado.

Tus **Idiomas principales** seleccionados aparecen en la parte superior de la lista. Puedes configurarlos en [**Ajustes** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Configuraciones útiles de traducción

En [**Ajustes** > **Configuración general**](#general-settings), puedes cambiar el comportamiento de la traducción:

- **Traducir automáticamente al pegar** realiza una traducción tan pronto como pegues el texto.
- **Copiar automáticamente el resultado al portapapeles** copia el resultado automáticamente tras una ejecución exitosa.
- **Traducción en tiempo real (mientras escribes)** realiza traducciones mientras escribes.
- **Tiempo de espera (ms)** controla cuánto tiempo espera la aplicación antes de realizar una traducción en tiempo real.
- **Enter** controla lo que ocurre cuando pulsas `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Reescribir

Utiliza **Reescribir** cuando quieras mejorar el estilo sin cambiar el significado principal.

![Espacio de trabajo de reescritura](../images/screenshots/es/rewrite.png)

Esto es útil para:

- corregir ortografía y gramática
- hacer el texto más claro
- hacer el texto más formal o más informal
- acortar o extender el texto
- hacer que el texto suene más técnico

<br/>

> 💡 **CONSEJO**<br/>
> Cuando utilices el modo "**Revisar ortografía y gramática**", aparecerá un botón `Mostrar cambios` en el panel de salida.
> Haz clic en este botón para alternar la visualización de las correcciones, mostrando u ocultando los cambios específicos realizados en tu texto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>

## Transformar

Utilice **Transformar** cuando desee que la IA siga un conjunto personalizado de instrucciones.

![Área de trabajo Transformar](../images/screenshots/es/transform.png)

Esta es el área más flexible de la aplicación. Puede utilizarla para tareas como:

- resumir notas
- convertir texto en bruto en un correo electrónico pulido
- extraer puntos clave
- convertir texto en un formato específico
- cualquier otra actividad personalizada con el texto de entrada

<br/>

<a id="run-an-existing-prompt"></a>
### Ejecutar un mensaje existente

1. Abra **Transformar**.
2. Elija un mensaje de la lista de mensajes.
3. Si aparece un cuadro de **Idioma de destino**, seleccione un idioma si lo desea.
4. Escriba o pegue texto en **Entrada**.
5. Haga clic en **Transformar**.
6. Lea el resultado en **Salida**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Si aún no tiene mensajes

Si su lista de mensajes está vacía, haga clic en **Cargar mensajes de ejemplo**. Esto añade ejemplos integrados para que pueda comenzar rápidamente.

<br/>

> ℹ️ **NOTA**<br/>
> Los mensajes de ejemplo se proporcionan en inglés. Después de cargarlos, puede editar un mensaje y usar **Traducir mensaje** para traducirlo a su idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Crear un mensaje rápidamente

La forma más rápida de crear un mensaje es:

1. Haga clic en **Nuevo mensaje**.
2. Haga clic en **Generar mensaje**.
3. Describa lo que desea que haga el mensaje.
4. Elija un modelo.
5. Deje que la aplicación cree un borrador para usted.
6. Revise el borrador y haga clic en **Guardar**.

![Generar mensaje](../images/screenshots/es/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Editar un mensaje

Cuando cree o edite un mensaje, el editor aparecerá a la izquierda y un área de prueba aparecerá a la derecha.

![Editor de mensajes de Transformar](../images/screenshots/es/transform-prompt-edit.png)

Los campos principales son:

- **Nombre del mensaje**: el nombre que se muestra en la lista de mensajes.
- **Instrucciones del mensaje (opcional)**: una breve sugerencia mostrada al usuario al ejecutar el mensaje.
- **Rol del modelo**: el rol general asignado a la IA, como por ejemplo 'Eres un asistente útil'.
- **Instrucciones del modelo (una por línea)**: las reglas específicas que desea que siga la IA.
- **Descripción de salida**: una palabra corta que describe el resultado, como 'resumen' o 'reescritura'.
- **Temperatura (0,0 → 1,0)**: cómo se comportará el modelo; véase más abajo.
- **Preguntar por idioma de destino**: añade un selector de idioma de destino cuando se ejecuta el mensaje.

Si el término técnico **Temperatura** es nuevo para usted, piense en él de esta manera:

- Una temperatura **más baja** da resultados más estables y predecibles.
- Una temperatura **más alta** produce más variedad y creatividad.

También puede usar:

- **`Generar mensaje`** para crear un nuevo borrador a partir de una descripción sencilla
- **`Mejorar mensaje`** para perfeccionar un mensaje existente
- **`Traducir mensaje`** para traducir los campos del mensaje

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> Haga clic en **`Guardar`** antes de hacer clic en **`Volver a ejecutar`**. Si regresa sin guardar, perderá los cambios.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Probar un mensaje antes de usarlo

El panel de prueba de la derecha le permite probar su mensaje con texto de ejemplo antes de usarlo en su trabajo diario.

Esto es útil cuando:

- está creando un nuevo mensaje
- está comparando dos versiones de un mensaje
- desea verificar el tono, la longitud o el formato de salida

<br/>

> ℹ️ **NOTA**<br/>
> Puede exportar e importar mensajes guardados en [**Ajustes** > **Mensajes de Transformar**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Panel de control

Utilice **Panel de control** para ver cuánto está usando la aplicación y cuál es su costo (para modelos de pago).

![Resumen del panel de control](../images/screenshots/es/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Si solo utiliza modelos gratuitos, los gráficos relacionados con costos estarán vacíos.

<br/>

<a id="filter-the-data"></a>
### Filtrar los datos

Utilice los botones de filtro de la parte superior para cambiar el período de tiempo.

![Filtros del panel de control](../images/screenshots/es/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtro **Usuario** solo es visible para los administradores en la versión web. Los usuarios normales no verán este filtro y no está disponible en la aplicación de escritorio.

<br/>

<a id="dashboard-tabs"></a>

### Pestañas del panel de control

- **Resumen** te ofrece una visión general del uso y coste.
- **Por uso** desglosa la actividad por idioma de traducción, modo de reescritura y *prompt* de transformación.
- **Por modelo** muestra qué modelos has utilizado y cuánto han costado.
- **Por día** muestra los totales diarios.
- **Todas las llamadas** muestra el historial completo de llamadas y te permite exportarlo.

<br/>

<a id="export-data"></a>
### Exportar datos

Las tablas del panel de control pueden exportar los datos en los siguientes formatos:

- **JSON**
- **CSV**
- **XLSX**

Esto resulta útil si deseas revisar la actividad fuera de la aplicación o compartir un informe.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registros almacenados de un modelo

En **Por modelo** o **Todas las llamadas**, puedes eliminar los registros almacenados de un modelo haciendo clic en el icono de "papelera".

> ⚠️ **ADVERTENCIA**<br/>
> La eliminación de registros almacenados no se puede deshacer. Usa esta opción solo si estás seguro de que ya no necesitas ese historial.

Para eliminar todos los datos o borrar registros según su antigüedad, ve a [**Configuración** > **Seguimiento de costes**](#cost-tracking). Allí encontrarás opciones para eliminar todos los datos almacenados o únicamente los datos anteriores a una determinada fecha.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historial

Haz clic en **Historial** para ver el historial de tus acciones dentro de **Transrewrt**, incluyendo la entrada y salida de cada operación.

![Página de historial](../images/screenshots/es/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar los datos

**Historial** utiliza los mismos filtros que la página del **Panel de control**. Úsalos para seleccionar el rango de fechas.

![Filtros del panel de control](../images/screenshots/es/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtro **Usuario** solo es visible para los administradores en la versión web. Los usuarios normales no verán este filtro, y no está disponible en la aplicación de escritorio.

<br/>

<a id="export-history-data"></a>
### Exportar datos del historial

La página de historial puede exportar los datos filtrados en los formatos:

- **JSON**
- **CSV**
- **XLSX**

Esto resulta útil si deseas revisar la actividad fuera de la aplicación o compartir un informe.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Configuración

Abre **Configuración** desde la barra lateral para personalizar el comportamiento de la aplicación.

Las pestañas disponibles dependen de la plataforma y de tu rol:

  | Pestaña                 | Escritorio | Web (admin) | Web (usuario normal) |
  |-------------------------|:----------:|:-----------:|:--------------------:|
  | Configuración general   |    sí     |     sí      |          sí           |
  | Modelos                 |    sí     |     sí      |          sí           |
  | Idiomas                 |    sí     |     sí      |          sí           |
  | Seguimiento de costes   |    sí     |     sí      |            —           |
  | *Prompts* de transformación |    sí     |     sí      |          sí           |
  | Usuarios                |     —     |     sí      |            —           |
  | Configuración de API    |    sí     |     sí      |            —           |
  | Acerca de               |    sí     |     sí      |          sí           |

<br/>

> ℹ️ **NOTA**<br/>
> En la versión web, cada usuario dispone de su propia configuración. Ajustes como los modelos seleccionados, los idiomas, las opciones generales y los *prompts* de transformación se almacenan por usuario. Los cambios que realices no afectan a otros usuarios.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Configuración general

Utiliza **Configuración general** para controlar el comportamiento al escribir, si se almacenan los detalles de ejecución en el **Historial** y el aspecto visual.

**Comportamiento**

- **Comportamiento de ENTER** permite elegir si la tecla `Intro` ejecuta la tarea o inserta una nueva línea.
- **Auto-traducir al pegar** inicia la traducción en cuanto pegas texto.
- **Copiar automáticamente el resultado al portapapeles** copia automáticamente los resultados exitosos.
- **Traducción en tiempo real (mientras escribes)** traduce mientras estás escribiendo.
- **Tiempo de espera (ms)** establece el tiempo de espera para la traducción en tiempo real.

**Historial**

- **Mantener historial de ejecución** controla si cada traducción, reescritura y transformación almacena el **texto de entrada y salida** para la vista [**Historial**](#history) del panel lateral. Desactivarlo solicita confirmación; si confirmas, el texto del historial almacenado se elimina de la base de datos.
- **Eliminar datos del historial** te permite borrar el texto almacenado según su antigüedad (por ejemplo, anterior a unos meses, o **todos los datos (borrar)**) usando **Eliminar datos**. Esto solo afecta al texto de ejecución guardado para la vista de **Historial**; **no** elimina los totales de coste o uso. Para eliminar o reducir los datos de **coste**, usa [**Configuración** > **Seguimiento de costes**](#cost-tracking).

**Apariencia**

- **Mostrar información de coste en las acciones** controla la visualización del coste por operación (si está disponible) y del coste total en los paneles de salida de Traducir, Reescribir y Transformar.
- **Dígitos decimales del coste** modifica cómo se muestran los decimales del coste.
- **Solo web:** **mostrar un margen alrededor de la aplicación** añade espacio extra alrededor de la interfaz.
- **Familia de fuentes** cambia la fuente del texto en los paneles de texto.
- **Tamaño** cambia el tamaño de la fuente.


<br/>

<a id="models"></a>

### Modelos

Utiliza **Configuración** > **Modelos** para elegir qué modelos aparecen en la barra de herramientas.

![Pestaña de modelos en Configuración](../images/screenshots/es/settings-models.png)

La página tiene dos listas:

- **Modelos disponibles** a la izquierda
- **Modelos seleccionados** a la derecha

Los controles útiles incluyen:

- **Buscar modelos...** para encontrar un modelo por nombre
- **Fichas de proveedor** para reducir la lista a un motor específico (OpenRouter, OpenAI, Ollama, …)
- **Solo gratuitos** para mostrar únicamente modelos gratuitos
- **Actualizar** para recargar la lista
- **Expandir todo** y **Contraer todo** cuando estés ordenando por proveedor

Los identificadores de modelos incluyen el prefijo del proveedor (por ejemplo, `openrouter/…` frente a `openai/…`). Las etiquetas como **OpenAI (OpenRouter)** frente a **OpenAI (directo)** indican cómo se enruta el tráfico.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) es un modelo enrutador, no un modelo de chat general: su respuesta es JSON que describe cuerpos de solicitudes de la API de OpenRouter (por ejemplo, un array `requests` con `model` y `messages`). Si lo usas para **Traducir**, **Reescribir** o **Transformar**, el panel de salida mostrará ese JSON en lugar del texto final. Elige un modelo de texto normal para estas tareas. Consulta la [página del modelo Body Builder](https://openrouter.ai/openrouter/bodybuilder) en OpenRouter.

Acciones:

- Para añadir un modelo, haz clic en **Añadir** o en cualquier parte de la entrada.

- Para eliminar un modelo, haz clic en **X** junto a él en **Modelos seleccionados** o en **Seleccionado** en la entrada de Modelos disponibles.

- Para borrar la lista, haz clic en **Deseleccionar todo**. El modelo gratuito obligatorio permanecerá en la lista.

<br/>

> ℹ️ **NOTA**<br/>
> Si no deseas añadir créditos a OpenRouter de inmediato, empieza habilitando **Solo gratuitos** y elige los modelos gratuitos (no se requiere tarjeta de crédito). También puedes usar Ollama para ejecutar modelos localmente sin ninguna clave de API.

<br/>

<a id="languages"></a>
### Idiomas

Utiliza **Configuración** > **Idiomas** para organizar las listas de idiomas utilizadas en la aplicación.

- **Idiomas principales** se fijan cerca de la parte superior de las listas de idiomas en **Traducir** y **Transformar**.
- **Idioma personalizado** te permite añadir un idioma que no esté en la lista incorporada.

Si añades un idioma personalizado, aparecerá en los selectores de idioma junto con las opciones integradas.

<br/>

<a id="cost-tracking"></a>
### Seguimiento de costos

Utiliza **Configuración** > **Seguimiento de costos** para gestionar la información de costos.

- **Costo total** muestra el total acumulado.
- **Copiar valor** copia el total al portapapeles.
- **Restablecer costo** reinicia el total almacenado a cero.
- **Sincronizar con el uso de la clave API** establece el total para que coincida con el uso informado por tu cuenta OpenRouter (solo OpenRouter).
- **Uso de la clave API** muestra detalles del uso de OpenRouter, si están disponibles.
- **Eliminar datos de costo** elimina todos los datos, o solo las entradas anteriores a una fecha seleccionada.

**Seguimiento de costos:** Cuando usas modelos de OpenRouter, la aplicación muestra tu uso y gasto real basado en la información de costos de OpenRouter. Para todos los demás proveedores, la aplicación estima los costos usando los precios publicados por OpenRouter; si no hay un precio disponible, la estimación puede ser cero.

<br/>

> ℹ️ **NOTA**<br/>
> Todas las cifras de costos son estimaciones únicamente para tu referencia, no son facturas oficiales.

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> La eliminación de datos no se puede deshacer. Antes de eliminar, asegúrate de hacer una copia de seguridad de tus datos o exportarlos a través de [**Historial**](#history) 
> o [**Panel** > **Todas las llamadas**](#dashboard-tabs), de lo contrario se perderán permanentemente. 
> Todo el historial de entradas y salidas relacionado con cada entrada de llamada a la API también será eliminado.

<br/>

<a id="transform-prompts"></a>
### Indicaciones de transformación

Utiliza **Configuración** > **Indicaciones de transformación** para gestionar indicaciones en bloque.

Puedes:

- revisar tus indicaciones guardadas
- eliminar indicaciones
- importar indicaciones desde un archivo
- exportar indicaciones para respaldo o compartir

<br/>

<a id="users"></a>
### Usuarios

Utiliza **Usuarios** para gestionar cuentas de usuario en la versión web. Puedes añadir usuarios, actualizar sus datos, restablecer contraseñas y eliminar cuentas.

<br/>

<a id="api-config"></a>
### Configuración de API

Los proveedores compatibles son: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras y **Ollama** (modelos locales mediante una URL base). Solo necesitas configurar los proveedores que vas a usar.

**Aplicación web: solo administradores**

Las claves de API se configuran mediante variables de entorno del sistema o de Docker, no se ingresan en la interfaz web. Esta página muestra qué proveedores tienen una clave configurada y te permite probar cada uno haciendo clic en el botón **`Probar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Para cambiar una clave de API, actualiza la variable de entorno en tu configuración del sistema o de Docker y reinicia el servidor o contenedor.

<br/>

**Aplicación de escritorio**

Utiliza **Configuración de API** para almacenar claves de API para cada proveedor que utilices. Para Ollama, introduce la **URL base** en lugar de una clave de API.

<br/>

> 💡 **Consejo** <br/>
> Si no deseas usar una clave de API ni pagar por el uso, puedes [descargar Ollama](https://ollama.com) y ejecutar modelos (como `translategemma:4b`) localmente en tu máquina de forma gratuita. Alternativamente, puedes crear una cuenta gratuita en OpenRouter (sin necesidad de tarjeta de crédito) para usar sus modelos gratuitos, o obtener una clave de API gratuita de Cerebras, Google, Groq o Mistral AI.

<br/>

- Añade solo los proveedores que necesites. En **Configuración** > **Modelos**, cada identificador de modelo comienza con el proveedor (por ejemplo, `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para añadir una clave de API, introduce el valor en el campo de texto y haz clic en **`Guardar`**. Para reemplazar una clave existente, haz clic en **`Editar`**. Para verificar que una clave funciona, haz clic en **`Probar`**. Para la URL base de Ollama, haz clic siempre en **`Probar`** para comprobar la conexión.

<br/>

> ℹ️ **NOTA**<br/>
> No puedes ver el valor actual de una clave de API. Solo puedes reemplazarla usando el botón **`Editar`**.
> Las claves de API se almacenan cifradas en la configuración.

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
## Problemas comunes

Si algo no funciona como se espera, revise primero los siguientes puntos.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### La aplicación no traduce, reescribe ni transforma texto

Verifique que:

- haya seleccionado un modelo en la barra de herramientas
- al menos un modelo figure en [**Configuración** > **Modelos**](#models)
- su configuración de API esté funcionando correctamente

Si está usando la aplicación de escritorio:

1. Abra [**Configuración** > **Configuración de API**](#api-config).
2. Asegúrese de que al menos una clave API esté guardada.
3. Haga clic en **Probar** junto al proveedor para confirmar que la clave funcione.

<br/>

<a id="the-model-list-is-empty"></a>
### La lista de modelos está vacía

Abra [**Configuración** > **Modelos**](#models) y haga clic en **Actualizar**.

Si es necesario:

- busque un modelo
- active la opción **Solo gratuitos**
- agregue uno o más modelos a **Modelos seleccionados**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### El resultado es demasiado lento o demasiado costoso

Intente una o varias de estas opciones:

- elija un modelo diferente
- use una entrada más corta
- desactive **Traducción en tiempo real (al escribir)** en [**Configuración** > **Configuración general**](#general-settings)
- use modelos gratuitos para tareas simples (consulte [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### La interfaz está en el idioma incorrecto

Haga clic en el icono de globo terráqueo en la [barra de herramientas](#toolbar) y seleccione su **Idioma de la interfaz** preferido.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### El texto es demasiado pequeño o difícil de leer

Abra [**Configuración** > **Configuración general**](#general-settings) y cambie:

- **Familia de fuentes**
- **Tamaño**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Los gráficos del panel están vacíos

Esto es normal si:

- solo usa **modelos gratuitos** (los gráficos de costos estarán vacíos)
- el **filtro de tiempo** seleccionado no cubre el período en que se realizaron llamadas; intente con **Todo** para verificar

Si los gráficos siguen vacíos después de seleccionar **Todo**, confirme que las llamadas aparezcan en [**Historial**](#history) o en la pestaña **Todas las llamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### El costo muestra "no disponible" o parece incorrecto

Cuando utiliza modelos a través de **OpenRouter**, la aplicación muestra el gasto real reportado por OpenRouter.

Para **otros proveedores** (OpenAI directo, Anthropic directo, etc.), el costo se calcula en base a los precios publicados por OpenRouter. Si no se encuentra un precio equivalente para un modelo, el costo aparecerá como **no disponible** y no se añadirá al total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### El costo total no coincide con la factura de mi proveedor

Todos los valores de costo en la aplicación son **estimaciones con fines informativos**, no estados de cuenta oficiales.

Para acercar el total a su gasto real en OpenRouter, abra [**Configuración** > **Seguimiento de costos**](#cost-tracking) y haga clic en **Sincronizar con el uso de la clave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La página Historial falta en la barra lateral

Es posible que la opción **Conservar historial de ejecución** esté desactivada. Abra [**Configuración** > **Configuración general**](#general-settings) y actívela. Tenga en cuenta que al activarla no se restauran los datos de historial previamente eliminados.

<br/>

<a id="web-app-session-expired"></a>
### Aplicación web: redirigido inesperadamente a la página de inicio de sesión

Su sesión puede haber expirado. Inicie sesión nuevamente. Si esto ocurre con frecuencia, revise la configuración del servidor relacionada con la duración de la sesión.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### El panel no muestra datos de otros usuarios (web)

Solo los **administradores** pueden ver datos de todos los usuarios a través del filtro **Usuario**. Por diseño, los usuarios normales solo ven su propia actividad.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Cambié un indicador y perdí los cambios

Al editar un indicador, haga siempre clic en **Guardar** antes de hacer clic en **Volver a ejecutar**.

<br/><br/>

<a id="quick-tips"></a>
## Consejos rápidos

- Comience con [**Traducir**](#translate) para asegurarse de que su configuración funcione antes de pasar a [**Reescribir**](#rewrite) o [**Transformar**](#transform).
- Use [**Reescribir**](#rewrite) para mejoras cotidianas del lenguaje.
- Use [**Transformar**](#transform) cuando necesite un flujo de trabajo repetible para una tarea específica.
- Use [**Panel**](#dashboard) si desea supervisar el uso y el costo.
- Use [**Historial**](#history) para revisar operaciones anteriores y el texto completo de entrada/salida.
- Exporte sus indicadores regularmente si está creando una biblioteca de indicadores que desea conservar (consulte [Indicadores en Transformar](#transform-prompts)) o desea compartirla con otros.

<br/><br/>

<a id="disclaimer"></a>

## Descargo de responsabilidad

Los nombres y logotipos de los productos corresponden a sus respectivos propietarios y se utilizan únicamente con fines de identificación. Este software no está afiliado ni avalado por ninguna de las marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licencia

Derechos de autor © 2026 Waldemar Scudeller Jr.

[Licencia Apache 2.0](LICENSE)