---
translated_at: "2026-03-29T01:56:08.795Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Guía del usuario

<br/>

<a id="introduction"></a>

## Introducción

Transrewrt te ayuda a trabajar con texto de tres formas principales:

- **Traducir**: convertir texto de un idioma a otro.
- **Reescribir**: reformular texto con un estilo diferente, como más claro, más breve o más formal.
- **Transformar**: procesar texto utilizando instrucciones personalizadas de inteligencia artificial llamadas *prompts*.

<br/>

Esta guía explica cómo usar la aplicación una vez instalada y en funcionamiento. Para conocer los pasos de instalación, consulta el archivo **[README](README.es.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt está disponible como aplicación de escritorio para Windows y Linux, y como aplicación web autohospedada. Esta guía se centra en el uso diario de la aplicación. Cuando algo solo se aplica a una versión, se indica claramente.

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](translated-docs/US

ER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota sobre traducciones de la interfaz y documentación:** Todos los idiomas de la interfaz, excepto el inglés original (del Reino Unido),
> fueron traducidos mediante modelos de inteligencia artificial; la redacción puede ser imprecisa o contener errores.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tabla de contenido**

- [Antes de empezar](#before-you-start)
  - [Cómo obtener una clave API gratuita de OpenRouter (aplicación de escritorio)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Comenzando](#getting-started)
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
  - [Ejecutar un indicio existente](#run-an-existing-prompt)
  - [Si aún no tienes indicaciones](#if-you-have-no-prompts-yet)
  - [Crear un indicio rápidamente](#create-a-prompt-quickly)
  - [Editar un indicio](#edit-a-prompt)
  - [Probar un indicio antes de usarlo](#test-a-prompt-before-using-it)
- [Panel de control (Dashboard)](#dashboard)
  - [Filtrar los datos](#filter-the-data)
  - [Pestañas del panel de control](#dashboard-tabs)
  - [Exportar datos](#export-data)

- [Eliminar registros almacenados para un modelo](#delete-stored-records-for-a-model)
- [Historial](#history)
  - [Filtrar los datos](#filter-the-data-1)
  - [Exportar datos del historial](#export-history-data)
- [Configuración](#settings)
  - [Configuración general](#general-settings)
  - [Modelos](#models)
  - [Idiomas](#languages)
  - [Seguimiento de costos](#cost-tracking)
  - [Transformar indicaciones](#transform-prompts)
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

- [El costo muestra "no disponible" o parece incorrecto](#cost-shows-not-available-or-seems-wrong)
  - [El costo total no coincide con la factura de mi proveedor](#total-cost-does-not-match-my-provider-bill)
  - [La página Historial falta en la barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicación web: se redirige inesperadamente a la página de inicio de sesión](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administrador web: olvidé o perdí una contraseña](#web-admin-forgot-or-lost-a-password)
  - [El panel no muestra datos de otros usuarios (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Modifiqué un mensaje y perdí los cambios](#i-changed-a-prompt-and-lost-the-edits)
- [Consejos rápidos](#quick-tips)
- [Aviso legal](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Antes de comenzar

Para usar Transrewrt, necesitas acceso al menos a un proveedor de IA. Los proveedores compatibles son: [OpenRouter](https://openrouter.ai) (que agrega muchos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras y [Ollama](https://ollama.com) para modelos locales.

No necesitas seleccionar un modelo de pago para empezar. Tan pronto como añadas tu clave API de OpenRouter, la aplicación activa automáticamente una opción **gratuita** integrada de OpenRouter. Esto te permite comenzar a traducir, reescribir y transformar texto de inmediato. Alternativamente, también puedes obtener una clave API gratuita de Cerebras, Google, Groq o Mistral AI.

En términos sencillos:

- Un **modelo** es el motor de IA que realiza el trabajo. Los modelos se enumeran con un **prefijo del proveedor** (por ejemplo, `openrouter/…`, `openai/…`, `ollama/…`).
- Una **clave API** (o, en el caso de Ollama, una **URL base**) es la forma en que la aplicación se conecta con ese proveedor.

Si estás utilizando la **aplicación de escritorio**, agrega claves en [**Configuración** > **Configuración de API**](#api-config) para cada proveedor que uses. Si solo usas OpenRouter, consulta [Cómo obtener una clave API](#how-to-get-an-api-key-desktop-app) a continuación. Si no deseas utilizar una clave API, puedes instalar Ollama (desde [ollama.com](https://ollama.com)) y usar modelos locales en su lugar, como `translategemma:4b`.

Si estás utilizando la **versión web**, el propietario del servidor configura los proveedores mediante variables de entorno, por lo que no puedes introducir claves API directamente en la aplicación.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Cómo obtener una clave API gratuita de OpenRouter (aplicación de escritorio)

Si estás utilizando la aplicación de escritorio, sigue estos pasos:

1. Ve a [OpenRouter](https://openrouter.ai) desde tu navegador web.
2. Crea una cuenta o inicia sesión.
3. Abre la página de [Claves](https://openrouter.ai/keys).
4. Haz clic en el botón para crear una nueva clave API.
5. Dale un nombre a la clave para que puedas reconocerla más adelante.
6. Copia la nueva clave API.
7. Vuelve a Transrewrt y abre **Configuración** > **Configuración de API**.
8. Pega la clave en **Clave API de OpenRouter** (dentro de **Configuración** > **Configuración de API**).
9. Haz clic en **Probar la clave de OpenRouter** para asegurarte de que funcione.

<br/><br/>

<a id="getting-started"></a>

## Primeros pasos

Si es la primera vez que usas Transrewrt, sigue este orden:

1. Abre la aplicación.
2. Si es necesario, selecciona tu **idioma de interfaz** desde el icono del globo.
3. Si estás usando la **aplicación de escritorio**, abre [**Configuración** > **Configuración de API**](#api-config), añade una clave API de al menos un proveedor (por ejemplo, OpenRouter) y haz clic en **Probar** para verificar que funcione.
4. Abre [**Configuración** > **Modelos**](#models) y añade uno o más modelos a **Modelos seleccionados**.
5. Abre [**Configuración** > **Idiomas**](#languages) y selecciona tus **Idiomas principales** si deseas que los idiomas que más utilizas aparezcan primero.
6. Ve a **Traducir** y realiza una traducción sencilla para confirmar que todo funcione correctamente.
7. Una vez que funcione, prueba **Reescribir** y luego **Transformar**.

Este orden es importante. Evita el problema más común al usarla por primera vez: intentar ejecutar una tarea antes de que la aplicación tenga una conexión API funcional o un modelo seleccionado.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Partes principales de la ventana

La aplicación se divide en tres áreas principales:

- La **barra lateral** a la izquierda.
- La **barra de herramientas** en la parte superior.
- El **área de trabajo** en el centro.

<br/>

<a id="sidebar"></a>

### Barra lateral

Utiliza la barra lateral para navegar por la aplicación. Puedes minimizar la barra lateral para obtener más espacio haciendo clic en el icono junto al logotipo de la aplicación.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/es/sidebar.png" alt="Barra lateral de la aplicación" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Translate</strong> abre el área de trabajo de traducción.</li><br/>
        <li><strong>Rewrite</strong> abre el área de trabajo de reescritura.</li><br/>
        <li><strong>Transform</strong> abre el área de trabajo de indicaciones personalizadas.</li><br/>
        <li><strong>Dashboard</strong> muestra información sobre el uso y los costos.</li><br/>
        <li><strong>Settings</strong> abre el panel de configuración.</li><br/>
        <li><strong>History</strong> muestra el historial de uso con el texto de entrada y salida.</li><br/>
        <li><strong>User</strong> muestra el nombre de usuario del usuario conectado (solo en web).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra de herramientas

La barra de herramientas cambia ligeramente dependiendo de la ubicación dentro de la aplicación.

- A la izquierda, se muestra el nombre de la página actual.
- A la derecha, se encuentra el **selector de modelo** y el control del **idioma de la interfaz**.

El **selector de modelo** le permite elegir qué motor de inteligencia artificial utilizar para la tarea actual.

  ![Selector de modelo](../images/screenshots/es/model-selector.png)

Algunos modelos gratuitos pueden no estar siempre disponibles: a veces están desconectados o tienen un límite de uso. Si esto ocurre, la aplicación eliminará automáticamente ese modelo de su lista disponible. Para controlar qué modelos aparecen, vaya a [**Configuración** > **Modelos**](#models) y edite su lista de modelos.  
También puede abrir la configuración del modelo directamente haciendo clic en el icono del proveedor que se encuentra a la izquierda del nombre del modelo en la barra de herramientas.

<br/>

El **ícono de globo terráqueo + código de idioma** cambia el idioma de la interfaz de la aplicación, como menús y botones. Esto **no** cambia los idiomas de traducción utilizados en **Traducir**.

![Selector de idioma de la interfaz](../images/screenshots/es/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Paneles de entrada y salida

La mayoría de los espacios de trabajo utilizan un panel izquierdo de **Entrada** y un panel derecho de **Salida**.

Cada panel también muestra:

| **Entrada**                                                          | **Salida**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Conteo de caracteres <br/>- Conteo de palabras <br/>- Conteo de párrafos   <br/> | - Cuánto tiempo tardó la tarea<br/>- **TPS** (tokens por segundo)<br/>- Conteos de caracteres, palabras y párrafos<br/>- El modelo utilizado |

Si te preguntas por los términos técnicos:

- **Token** significa un fragmento pequeño de texto. Puedes pensarlo como parte de una palabra o una palabra corta.
- **TPS** indica cuántos de estos fragmentos de texto procesa el modelo por segundo.

<br/>

También puedes supervisar el costo de cada operación (si está disponible) y el costo total, habilitando la opción `Mostrar información de costo en las acciones` en [**Ajustes** > **Configuración general**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>

## Traducir

Utilice **Traducir** cuando desee convertir texto de un idioma a otro.

![Área de trabajo de Traducir](../images/screenshots/es/translate.png)

<br/>

<a id="translate-text"></a>

### Traducir texto

1. Abra **Translate**.
2. Elija un idioma en **From**.
3. Elija un idioma en **To**.
4. Elija un modelo en la barra de herramientas.
5. Escriba o pegue el texto en **Input**.
6. Haga clic en **Translate**.
7. Lea el resultado en **Output**.
8. Utilice el botón de copiar si desea copiar el resultado.

<br/>

<a id="language-selection"></a>

### Selección de idioma

- **Desde** puede ser un idioma específico o **Detectar idioma**.
- **Hacia** es el idioma en el que deseas obtener el resultado.

Tus **Idiomas principales** seleccionados aparecen en la parte superior de la lista. Puedes configurarlos en [**Configuración** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Configuración útil para la traducción

En [**Ajustes** > **Configuración general**](#general-settings), puedes cambiar el comportamiento de la traducción:

- **Traducir automáticamente al pegar**: realiza una traducción tan pronto como pegues texto.
- **Copiar resultado automáticamente al portapapeles**: copia el resultado automáticamente tras una traducción exitosa.
- **Traducción en tiempo real (mientras escribes)**: realiza traducciones mientras escribes.
- **Tiempo de espera (ms)**: controla cuánto tiempo espera la aplicación antes de ejecutar una traducción en tiempo real.
- **Entrar**: controla lo que sucede cuando pulsas `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Reescribir

Utilice **Reescribir** cuando desee mejorar la redacción sin cambiar el significado principal.

![Espacio de trabajo Reescribir](../images/screenshots/es/rewrite.png)

Esto resulta útil para:

- corregir ortografía y gramática (**Revisar ortografía y gramática**)
- hacer el texto más claro (**Mejorar claridad**)
- obtener varias reformulaciones distintas en una sola ejecución (**Versiones alternativas**)
- hacer el texto más formal o más informal (**Formal** / **Informal**)
- acortar o ampliar el texto (**Acortar** / **Ampliar**)
- hacer que el texto suene más técnico (**Hacer técnico**)

<br/>

> 💡 **CONSEJO**<br/>
> Cuando utiliza el modo "**Revisar ortografía y gramática**", aparece un interruptor **Mostrar cambios** en el panel de resultados (junto a **Copiar**).
> Actívelo o desactívelo para mostrar u ocultar las correcciones específicas aplicadas a su texto.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformar

Utiliza **Transformar** cuando desees que la IA siga un conjunto personalizado de instrucciones.

![Espacio de trabajo de Transformar](../images/screenshots/es/transform.png)

Esta es el área más flexible de la aplicación. Puedes utilizarla para tareas como:

- resumir notas
- convertir textos informales en correos electrónicos pulidos
- extraer puntos clave
- convertir textos a un formato específico
- cualquier otra actividad personalizada con el texto de entrada

<br/>

<a id="run-an-existing-prompt"></a>

### Ejecutar un mensaje existente

1. Abre **Transformar**.
2. Elige un mensaje de la lista de mensajes.
3. Si aparece un cuadro de **Idioma de destino**, elige uno si lo deseas.
4. Escribe o pega el texto en **Entrada**.
5. Haz clic en **Transformar**.
6. Lee el resultado en **Salida**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Si aún no tienes indicaciones

Si tu lista de indicaciones está vacía, haz clic en **Cargar indicaciones de ejemplo** en el área de trabajo Transformar. El mismo control está siempre disponible en [**Configuración** > **Indicaciones de transformación**](#transform-prompts) en la fila de importación/exportación. Ambos agregan ejemplos integrados para que puedas comenzar rápidamente.

<br/>

> ℹ️ **NOTA**<br/>
> Las indicaciones de ejemplo se proporcionan en inglés. Después de cargarlas, puedes editar una indicación y usar **Traducir indicación** para traducirla a tu idioma.

<br/>

<a id="create-a-prompt-quickly"></a>

### Crear un aviso rápidamente

La forma más rápida de crear un aviso es:

1. Haga clic en **Nuevo aviso**.
2. Haga clic en **Generar aviso**.
3. Describa qué desea que haga el aviso.
4. Elija un modelo.
5. Deje que la aplicación cree un borrador para usted.
6. Revise el borrador y haga clic en **Guardar**.

![Generar aviso](../images/screenshots/es/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Editar un mensaje

Cuando creas o editas un mensaje, el editor aparece a la izquierda y un área de prueba aparece a la derecha.

![Editor de transformación de mensajes](../images/screenshots/es/transform-prompt-edit.png)

Los campos principales son:

- **Nombre del mensaje**: el nombre que se muestra en la lista de mensajes.
- **Instrucciones del mensaje (opcional)**: una breve sugerencia que se muestra al usuario al ejecutar el mensaje.
- **Rol del modelo**: el rol general asignado a la IA, por ejemplo, «Eres un asistente útil».
- **Instrucciones del modelo (una por línea)**: las reglas específicas que deseas que siga la IA.
- **Descripción de la salida**: una palabra breve que describe el resultado, como «resumen» o «reescritura».
- **Temperatura (de 0,0 a 1,0)**: cómo se comportará el modelo; véase más abajo.
- **Preguntar por el idioma objetivo**: añade un selector de idioma objetivo cuando se ejecute el mensaje.

Si el término técnico **Temperatura** es nuevo para ti, piensa en ello de la siguiente manera:

- Una temperatura **más baja** ofrece resultados más estables y predecibles.

- Una temperatura **más alta** ofrece mayor variedad y creatividad.

También puedes usar:

- **`Generar indicación`** para crear un nuevo borrador a partir de una descripción simple
- **`Mejorar indicación`** para perfeccionar una indicación existente
- **`Traducir indicación`** para traducir los campos de la indicación

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> Haz clic en **`Guardar`** antes de hacer clic en **`Volver a ejecutar`**. Si regresas sin guardar, se perderán tus cambios.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Probar un mensaje antes de usarlo

El panel de prueba de la derecha te permite probar tu mensaje con un texto de ejemplo antes de usarlo en tu trabajo diario.

Esto es útil cuando:

- estás creando un nuevo mensaje
- estás comparando dos versiones de un mensaje
- deseas verificar el tono, la longitud o el formato de la salida

<br/>

> ℹ️ **NOTA**<br/>
> Puedes exportar e importar mensajes guardados en [**Ajustes** > **Transformar mensajes**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Panel de control

Utiliza el **Panel de control** para ver el uso que haces de la aplicación y su costo (para modelos de pago).

![Resumen del panel de control](../images/screenshots/es/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Si solo utilizas modelos **gratuitos**, las cantidades de **costo** pueden ser cero y los resúmenes centrados en costos pueden parecer vacíos. En **Resumen**, **Uso a lo largo del tiempo** y **Uso por modelo** aún se muestran el **número de llamadas** (traducir, reescribir y transformar) cuando haya actividad en el período seleccionado.

<br/>

<a id="filter-the-data"></a>

### Filtrar los datos

Utilice los botones de filtro en la parte superior para cambiar el rango de tiempo.

![Filtros del panel](../images/screenshots/es/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtro **Usuario** solo es visible para los administradores en la versión web. Los usuarios normales no verán este filtro, y no está disponible en la aplicación de escritorio.

<br/>

<a id="dashboard-tabs"></a>

### Pestañas del panel de control

- **Resumen** te ofrece una visión general del uso y el costo. Incluye **Uso a lo largo del tiempo** (una acumulación diaria de **conteo de llamadas** por traducción, reescritura y transformación) y **Uso por modelo** (total de **llamadas por modelo**, incluyendo transformación).
- **Por uso** desglosa la actividad por idioma de traducción, modo de reescritura y promp de transformación.
- **Por modelo** muestra qué modelos utilizaste y cuánto te costaron.
- **Por día** muestra los totales diarios.
- **Todas las llamadas** muestra el historial completo de llamadas y te permite exportarlo.

<br/>

<a id="export-data"></a>

### Exportar datos

Las tablas del panel de control pueden exportar datos en los siguientes formatos:

- **JSON**
- **CSV**
- **XLSX**

Esto es útil si deseas revisar la actividad fuera de la aplicación o compartir un informe.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Eliminar registros almacenados para un modelo

En **Por modelo** o **Todas las llamadas**, puedes eliminar los registros almacenados de un modelo haciendo clic en el icono de "papelera".

> ⚠️ **ADVERTENCIA**<br/>
> La eliminación de registros almacenados no se puede deshacer. Utiliza esta opción solo si estás seguro de que ya no necesitas ese historial.

Para eliminar todos los datos o quitar registros según su antigüedad, ve a [**Configuración** > **Seguimiento de costos**](#cost-tracking). Allí encontrarás opciones para borrar todos los datos almacenados o solo los datos anteriores a una fecha determinada.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Historial

Haz clic en **Historial** para ver el historial de tus acciones dentro de **Transrewrt**, incluyendo la entrada y salida de cada operación.

![Página de historial](../images/screenshots/es/history.png)

<br/>

<a id="filter-the-history"></a>

### Filtrar los datos

**Historial** utiliza los mismos filtros que la página **Panel de control**. Úsalos para seleccionar el rango de tiempo.

![Filtros del panel de control](../images/screenshots/es/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtro **Usuario** solo es visible para los administradores en la versión web. Los usuarios normales no verán este filtro, y no está disponible en la aplicación de escritorio.

<br/>

<a id="export-history-data"></a>

### Exportar datos del historial

La página de historial puede exportar los datos filtrados en:

- **JSON**
- **CSV**
- **XLSX**

Esto resulta útil si deseas revisar la actividad fuera de la aplicación o compartir un informe.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Configuración

Abre **Configuración** desde la barra lateral para personalizar el comportamiento de la aplicación.

Las pestañas disponibles dependen de la plataforma y tu rol:

| Pestaña           | Escritorio | Web (administrador) | Web (usuario normal) |
|-------------------|:----------:|:-------------------:|:--------------------:|
| Configuración general |   sí   |       sí       |         sí          |
| Modelos           |   sí   |       sí       |         sí          |
| Idiomas           |   sí   |       sí       |         sí          |
| Seguimiento de costos |   sí   |       sí       |         —          |
| Transformar indicaciones |   sí   |       sí       |         sí          |
| Usuarios          |    —    |       sí       |         —          |
| Configuración API |   sí   |       sí       |         —          |
| Acerca de         |   sí   |       sí       |         sí          |

<br/>

> ℹ️ **NOTA**<br/>
> En la versión web, cada usuario tiene su propia configuración. La configuración, como los modelos seleccionados, los idiomas, las opciones generales y los prompts de transformación, se almacenan por usuario. Los cambios que realices no afectan a otros usuarios.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Ajustes generales

Utilice **Ajustes generales** para controlar el comportamiento al escribir, si se almacenan detalles de ejecución en el **Historial** y la apariencia.

**Comportamiento**

- **Comportamiento de ENTER** elige si `Enter` ejecuta la tarea o inserta una nueva línea.
- **Auto-traducir al pegar** inicia la traducción tan pronto como pegue un texto.
- **Copiar automáticamente el resultado al portapapeles** copia los resultados exitosos de forma automática.
- **Traducción en tiempo real (mientras escribe)** traduce mientras escribe.
- **Tiempo de espera (ms)** establece el tiempo de espera para la traducción en tiempo real.

**Historial**

- **Conservar historial de ejecución** controla si cada traducción, reescritura o transformación almacena el **texto de entrada y salida** para la vista del panel lateral [**Historial**](#history). Al desactivarlo se pedirá confirmación; si confirma, el texto del historial almacenado se eliminará de la base de datos.

- **Eliminar datos del historial** permite eliminar el texto almacenado por antigüedad (por ejemplo, más antiguo que unos pocos meses, o **todos los datos (borrar)**) mediante **Eliminar datos**. Esto solo afecta al texto guardado para la vista de **Historial**; **no** elimina los totales de coste ni de uso. Para eliminar o reducir los datos de **coste**, utiliza [**Configuración** > **Seguimiento de costes**](#cost-tracking).

**Apariencia**

- **Mostrar información de coste en las acciones** controla la visualización del coste por operación (si está disponible) y del coste total en los paneles de salida de Traducir, Reescribir y Transformar.
- **Dígitos fraccionarios del coste** cambia la forma en que se muestran los decimales del coste.
- **Solo web:** **mostrar un margen alrededor de la aplicación** añade espacio adicional alrededor de la interfaz.
- **Familia de fuentes** cambia la fuente de escritura en los paneles de texto.
- **Tamaño** cambia el tamaño de la fuente.

**Copia de seguridad de la configuración**

- **Incluir datos de uso en la copia de seguridad**: al activarse, el archivo ZIP también contiene el historial de ejecuciones y los datos de las llamadas a la API.

- **Copia de seguridad de la configuración** — crea un único archivo ZIP (`transrewrt-config-backup-AAAA-MM-DD_HHMMSS.zip` en UTC por defecto) que incluye `config.json`, `state.json`, clave de cifrado opcional, usuarios, preferencias, indicaciones personalizadas y datos de uso si ha activado esta opción. Tras una copia de seguridad exitosa, la confirmación muestra el nombre del archivo guardado.
- **Restaurar desde una copia de seguridad** — abre primero un **cuadro de diálogo de confirmación**. Seleccione el archivo ZIP de copia de seguridad dentro del cuadro de diálogo (**Examinar** / selector de archivos o arrastrar y soltar donde se admita), luego revise las opciones:
  - **Restaurar los datos de uso** — importa el historial y uso del ZIP cuando se realizó la copia con los datos de uso incluidos; desactive esta opción si solo desea restaurar configuraciones e indicaciones.
  - **Borrar los datos de uso antiguos antes de restaurar** — elimina el historial y uso existente en esta instalación antes de aplicar la copia de seguridad (opcional; úsese cuando desee una sustitución limpia).

Las copias de seguridad creadas en la versión web o en la versión de escritorio pueden restaurarse en la otra. Al restaurar una copia de seguridad del escritorio en la versión web, los datos se restaurarán en el usuario administrador.


<br/>

<a id="models"></a>

### Modelos

Utiliza **Ajustes** > **Modelos** para elegir qué modelos aparecen en la barra de herramientas.

![Pestaña Modelos en Ajustes](../images/screenshots/es/settings-models.png)

La página contiene dos listas:

- **Modelos disponibles** a la izquierda
- **Modelos seleccionados** a la derecha

Los controles útiles incluyen:

- **Buscar modelos...** para encontrar un modelo por nombre
- Etiquetas **Proveedor** para reducir la lista a un motor específico (OpenRouter, OpenAI, Ollama, …)
- **Solo gratuitos** para mostrar únicamente modelos gratuitos
- **Actualizar** para recargar la lista
- **Expandir todo** y **Contraer todo** cuando estés ordenando por proveedor

Los identificadores de modelos incluyen el prefijo del proveedor (por ejemplo, `openrouter/…` frente a `openai/…`). Las etiquetas como **OpenAI (OpenRouter)** frente a **OpenAI (directo)** muestran cómo se enruta el tráfico.

> ℹ️ **NOTA**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) es un modelo de enrutamiento, no un modelo de chat general: su respuesta es un JSON que describe los cuerpos de solicitudes de la API de OpenRouter (por ejemplo, un array `requests` con `model` y `messages`). Si lo usas para **Traducir**, **Reescribir** o **Transformar**, el panel de salida mostrará ese JSON en lugar del texto finalizado. Elige un modelo de texto normal para esas tareas. Consulta la [página del modelo Body Builder](https://openrouter.ai/openrouter/bodybuilder) en OpenRouter.

Acciones:

- Para agregar un modelo, haz clic en **Agregar** o en cualquier lugar de la entrada.

- Para eliminar un modelo, haz clic en **X** junto a él en **Modelos seleccionados** o en **Seleccionado** en la entrada de Modelos disponibles.

- Para vaciar la lista, haz clic en **Deseleccionar todo**. El modelo gratuito requerido permanecerá en la lista.

<br/>

> ℹ️ **NOTA**<br/>

> Si no desea agregar créditos a OpenRouter de inmediato, comience activando **Solo gratuito** y eligiendo los modelos gratuitos (no se requiere tarjeta de crédito). También puede utilizar Ollama para ejecutar modelos localmente sin ninguna clave de API.

<br/>

<a id="languages"></a>

### Idiomas

Utiliza **Configuración** > **Idiomas** para organizar las listas de idiomas utilizadas en la aplicación.

- Los **idiomas principales** se fijan cerca de la parte superior de las listas de idiomas en **Traducir** y **Transformar**.
- La opción **Idioma personalizado** te permite agregar un idioma que no esté en la lista integrada.

Si agregas un idioma personalizado, este aparecerá en los selectores de idioma junto con las opciones integradas.

<br/>

<a id="cost-tracking"></a>

### Seguimiento de costos

Utiliza **Configuración** > **Seguimiento de costos** para gestionar la información de costos.

- **Coste total** muestra el total acumulado.
- **Copiar valor** copia el total al portapapeles.
- **Restablecer coste** restablece el total almacenado a cero.
- **Sincronizar con el uso de la clave API** ajusta el total para que coincida con el uso informado por tu cuenta de OpenRouter (solo en OpenRouter).
- **Uso de la clave API** muestra los detalles de uso de OpenRouter, si están disponibles.
- **Eliminar datos de costos** elimina todos los datos o únicamente las entradas anteriores a una fecha seleccionada.

**Seguimiento de costos:** Cuando utilizas modelos de OpenRouter, la aplicación muestra tu uso real y gastos reales basándose en la información de costos de OpenRouter. Para todos los demás proveedores, la aplicación estima los costos utilizando los precios publicados por OpenRouter; si no hay un precio disponible, la estimación podría ser cero.

<br/>

> ℹ️ **NOTA**<br/>
> **Todas las cifras de costos son solo estimaciones para tu referencia, no son facturas oficiales.**

<br/>

> ⚠️ **ADVERTENCIA**<br/>

> La eliminación de datos no se puede deshacer. Antes de eliminar, asegúrese de hacer una copia de seguridad de sus datos o de exportarlos mediante [**Historial**](#history)  
> o [**Panel** > **Todas las llamadas**](#dashboard-tabs); de lo contrario, se perderán permanentemente.  
> También se eliminará todo el historial de entradas y salidas relacionado con cada entrada de llamada a la API.


<br/>

<a id="transform-prompts"></a>

### Transformar indicaciones

Utiliza **Ajustes** > **Transformar indicaciones** para gestionar las indicaciones en bloque.

Puedes:

- revisar tus indicaciones guardadas
- eliminar indicaciones
- importar indicaciones desde un archivo
- exportar indicaciones para respaldo o compartirlas
- cargar indicaciones de ejemplo a la lista de indicaciones

<br/>

<a id="users"></a>

### Usuarios

Utilice **Usuarios** para gestionar las cuentas de usuario en la versión web. Puede agregar usuarios, actualizar sus datos, restablecer contraseñas y eliminar cuentas.

<br/>

<a id="api-config"></a>

### Configuración de API

Los proveedores compatibles son: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, y **Ollama** (modelos locales mediante una URL base). Solo necesitas configurar los proveedores que vayas a usar.

**Aplicación web: solo administrador**

Las claves de API se configuran mediante variables de entorno del sistema o de Docker; no se introducen en la interfaz web. Esta página muestra qué proveedores tienen una clave configurada y te permite probar cada uno haciendo clic en el botón **`Probar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Para cambiar una clave de API, actualiza la variable de entorno en la configuración de tu sistema o de Docker y reinicia el servidor o el contenedor.

> ℹ️ **NOTA**<br/>

> **Copias de seguridad de la configuración** (véase [**Configuración general** → Copia de seguridad de la configuración](#general-settings)) pueden incluir dentro del archivo `config.json` del ZIP las claves de proveedor **resueltas**. Restaurar ese ZIP **no** copia dichas claves de vuelta al archivo de configuración persistente del servidor — las claves activas siguen procediendo del entorno y del estado actual del archivo, como se describe allí.

<br/>

**Aplicación de escritorio**

Utilice **Configuración de API** para almacenar las claves de API de cada proveedor que use. Para Ollama, introduzca la **URL base** en lugar de una clave de API.


<br/>

> 💡 **Consejo** <br/>
> Si no desea usar una clave de API ni pagar por el uso, puede [descargar Ollama](https://ollama.com) y ejecutar modelos (como `translategemma:4b`) localmente en su máquina de forma gratuita. Alternativamente, puede crear una cuenta gratuita en OpenRouter (sin necesidad de tarjeta de crédito) para usar sus modelos gratuitos, o bien obtener una clave de API gratuita de Cerebras, Google, Groq o Mistral AI.

<br/>

- Agregue solo los proveedores que necesite. En **Configuración** > **Modelos**, cada ID de modelo comienza con el nombre del proveedor (por ejemplo, `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para agregar una clave de API, ingrese el valor en el campo de texto y haga clic en **`Guardar`**. Para reemplazar una clave existente, haga clic en **`Editar`**. Para verificar que una clave funcione, haga clic en **`Probar`**. Para la URL base de Ollama, siempre haga clic en **`Probar`** para comprobar la conexión.

<br/>

> ℹ️ **NOTA**<br/>
> No puede ver el valor actual de una clave de API. Solo puede reemplazarla usando el botón **`Editar`**.
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

Si algo no funciona como se esperaba, compruebe primero los siguientes puntos.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### La aplicación no traducirá, reescribirá ni transformará el texto

Compruebe que:

- ha seleccionado un modelo en la barra de herramientas
- al menos un modelo esté listado en [**Configuración** > **Modelos**](#models)
- su configuración de API esté funcionando

Si está utilizando la aplicación de escritorio:

1. Abra [**Configuración** > **Configuración de API**](#api-config).
2. Compruebe que al menos una clave de API esté guardada.
3. Haga clic en **Probar** junto al proveedor para confirmar que la clave funciona.

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

### El resultado es demasiado lento o demasiado caro

Prueba una o varias de estas opciones:

- elige un modelo diferente
- utiliza una entrada más corta
- desactiva la **traducción en tiempo real (mientras escribes)** en [**Ajustes** > **Ajustes generales**](#general-settings)
- utiliza modelos gratuitos para tareas simples (consulta [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### La interfaz está en el idioma incorrecto

Haga clic en el icono del globo en la [barra de herramientas](#toolbar) y seleccione su **idioma de interfaz** preferido.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### El texto es demasiado pequeño o difícil de leer

Abre [**Configuración** > **Configuración general**](#general-settings) y cambia:

- **Familia de fuentes**
- **Tamaño**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Los gráficos del panel están vacíos

Esto es normal si:

- solo utilizas **modelos gratuitos** y estás revisando las cifras de **coste** (pueden ser cero); los gráficos del número de llamadas de uso en **Resumen** aún necesitan datos del período seleccionado
- el **filtro de tiempo** seleccionado no incluye el período en que se realizaron las llamadas — intenta seleccionar **Todo** para comprobarlo

Si los gráficos siguen vacíos tras seleccionar **Todo**, confirma que las llamadas aparezcan en [**Historial**](#history) o en la pestaña **Todas las llamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### El costo muestra "no disponible" o parece incorrecto

Cuando utilizas modelos a través de **OpenRouter**, la aplicación muestra el gasto real que reporta OpenRouter.

Para **otros proveedores** (OpenAI directo, Anthropic directo, etc.), el costo se estima a partir de los datos de precios publicados por OpenRouter. Si no se encuentra un precio coincidente para un modelo, el costo aparecerá como **no disponible** y no se sumará al total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### El costo total no coincide con la factura de mi proveedor

Todas las cifras de costos en la aplicación son **estimaciones solo para referencia**, no son estados de cuenta oficiales.

Para acercar el total al gasto real en OpenRouter, abre [**Configuración** > **Seguimiento de costos**](#cost-tracking) y haz clic en **Sincronizar con el uso de la clave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### La página Historial falta en la barra lateral

La opción **Mantener el historial de ejecución** podría estar desactivada. Abre [**Configuración** > **Configuración general**](#general-settings) y actívala. Ten en cuenta que al activarla no se restauran los datos del historial previamente eliminados.

<br/>

<a id="web-app-session-expired"></a>

### Aplicación web: redirigido a la página de inicio de sesión inesperadamente

Es posible que su sesión haya expirado. Vuelva a iniciar sesión. Si esto ocurre con frecuencia, compruebe la configuración del servidor relacionada con la duración de la sesión.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Administración web: olvido o pérdida de contraseña

Esto aplica a la **aplicación web autohospedada** (Docker), no a la aplicación de escritorio (Electron).

- Si otro administrador aún puede iniciar sesión, puede abrir [**Ajustes** > **Usuarios**](#users), seleccionar la cuenta y establecer allí una **nueva contraseña**.
- Si ha quedado **bloqueado** pero tiene **acceso por consola** a la máquina o contenedor, restablezca la contraseña usando la herramienta auxiliar incluida en la imagen (reemplace `transrewrt` si cambió el nombre predeterminado; ponga entre comillas la contraseña si contiene espacios o caracteres especiales):

```bash
docker exec transrewrt reset-web-password '<nombre-de-usuario>' '<nueva-contraseña>'
```

El nombre de usuario predeterminado del administrador es `admin`, si nunca ha creado otras cuentas. Cuando solo se indica un argumento, se utiliza como nueva contraseña para `admin`.

Si ejecuta la aplicación desde un **repositorio fuente** en lugar de Docker, use:

```bash
pnpm run reset-web-password -- <nombre-de-usuario> <nueva-contraseña>

El script actualiza el registro del usuario en la base de datos SQLite (y puede crear el usuario `admin` si no existe). Después de restablecer, inicie sesión con la nueva contraseña.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### El panel no muestra datos para otros usuarios (web)

Solo los **administradores** pueden ver los datos de todos los usuarios mediante el filtro **Usuario**. Por diseño, los usuarios normales solo ven su propia actividad.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### He cambiado un prompt y he perdido los cambios

Al editar un prompt, haz siempre clic en **Guardar** antes de hacer clic en **Volver a ejecutar**.

<br/><br/>

<a id="quick-tips"></a>

## Consejos rápidos

- Comience con [**Traducir**](#translate) para asegurarse de que su configuración funciona antes de pasar a [**Reescribir**](#rewrite) o [**Transformar**](#transform).
- Use [**Reescribir**](#rewrite) para mejorar el redacción de uso diario.
- Use [**Transformar**](#transform) cuando necesite un flujo de trabajo repetible para una tarea específica.
- Use [**Panel**](#dashboard) si desea supervisar el uso y los costos.
- Use [**Historial**](#history) para revisar operaciones pasadas y sus textos completos de entrada y salida.
- Exporte los prompts regularmente si está creando una biblioteca de prompts que desea conservar segura (véase [Prompts de transformación](#transform-prompts)) o si desea compartirla con otros.

<br/><br/>

<a id="disclaimer"></a>

## Aviso legal

Los nombres y los iconos de los productos pertenecen a sus respectivos propietarios y se utilizan únicamente con fines de identificación. Este software no está afiliado ni avalado por ninguna de las marcas mencionadas.

<br/><br/>

<a id="license"></a>

## Licencia

Copyright © 2026 Waldemar Scudeller Jr.

[Licencia Apache 2.0](LICENSE)