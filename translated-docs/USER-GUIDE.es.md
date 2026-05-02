---
translation_last_updated: '2026-05-01T21:26:14.978Z'
source_file_mtime: '2026-05-01T21:20:11.119Z'
source_file_hash: 253d03c03bd028d8119ce13e1d810e974a386f3e98054a9e750d5ecfbf1c76d0
translation_language: es
source_file_path: USER-GUIDE.md
translation_models:
  - deepseek/deepseek-v3.2
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Guía del usuario

<br/>

<a id="introduction"></a>
## Introducción

Transrewrt te ayuda a trabajar con texto de tres formas principales:

- **Traducir** - convertir texto de un idioma a otro.
- **Reescritura** - reformular texto en un estilo diferente, como más claro, más corto o más formal.
- **Transformación** - procesar texto utilizando instrucciones personalizadas de IA llamadas indicaciones.

<br/>

Esta guía explica cómo usar la aplicación una vez que está instalada y en funcionamiento. Para conocer los pasos de instalación, consulte el archivo **[README](README.es.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt está disponible como una aplicación de escritorio para Windows y Linux, y como una aplicación web autohospedada. Esta guía se centra en el uso diario de la aplicación. Cuando algo solo se aplica a una versión, se marca claramente.

<small>**Leer en otros idiomas:** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Nota sobre traducciones de la interfaz y documentación:** Todos los idiomas de la interfaz, excepto el inglés (UK) original, 
> fueron traducidos mediante modelos de IA; la redacción puede ser imprecisa o contener errores.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tabla de contenido**

- [Antes de empezar](#before-you-start)
  - [Cómo obtener una clave API gratuita de OpenRouter (aplicación de escritorio)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Introducción](#getting-started)
- [Partes principales de la ventana](#main-parts-of-the-window)
  - [Barra lateral](#sidebar)
  - [Barra de herramientas](#toolbar)
  - [Paneles de entrada y salida](#input-and-output-panels)
- [Traducir](#translate)
  - [Traducir texto](#translate-text)
  - [Selección de idioma](#language-selection)
  - [Ajustes útiles de traducción](#helpful-translation-settings)
- [Reescribir](#rewrite)
- [Transformar](#transform)
  - [Ejecutar un prompt existente](#run-an-existing-prompt)
  - [Si aún no tienes prompts](#if-you-have-no-prompts-yet)
  - [Crear un prompt rápidamente](#create-a-prompt-quickly)
  - [Editar un prompt](#edit-a-prompt)
  - [Probar un prompt antes de usarlo](#test-a-prompt-before-using-it)
- [Panel de control](#dashboard)
  - [Filtrar los datos](#filter-the-data)
  - [Pestañas del panel de control](#dashboard-tabs)
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
  - [Prompts de transformación](#transform-prompts)
  - [Usuarios](#users)
  - [Configuración de API](#api-config)
  - [Acerca de](#about)
- [Problemas comunes](#common-issues)
  - [La aplicación no traduce, reescribe ni transforma texto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [La lista de modelos está vacía](#the-model-list-is-empty)
  - [El resultado es demasiado lento o demasiado costoso](#the-result-is-too-slow-or-too-expensive)
  - [La interfaz está en el idioma incorrecto](#the-interface-is-in-the-wrong-language)
  - [El texto es demasiado pequeño o difícil de leer](#the-text-is-too-small-or-hard-to-read)
  - [Los gráficos del panel de control están vacíos](#dashboard-charts-are-empty)
  - [El costo muestra "no disponible" o parece incorrecto](#cost-shows-not-available-or-seems-wrong)
  - [El costo total no coincide con la factura de mi proveedor](#total-cost-does-not-match-my-provider-bill)
  - [La página de Historial falta en la barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicación web: redirigido inesperadamente a la página de inicio de sesión](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administración web: olvidé o perdí la contraseña](#web-admin-forgot-or-lost-a-password)
  - [El panel de control no muestra datos de otros usuarios (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Cambié un prompt y perdí los cambios](#i-changed-a-prompt-and-lost-the-edits)
- [Consejos rápidos](#quick-tips)
- [Descargo de responsabilidad](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Antes de empezar

Para usar Transrewrt, necesitas acceso a al menos un proveedor de IA. Los proveedores compatibles son: [OpenRouter](https://openrouter.ai) (que agrega muchos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, y [Ollama](https://ollama.com) para modelos locales.

No necesita seleccionar un modelo de pago para comenzar. Tan pronto como añada su clave API de OpenRouter, la aplicación activa automáticamente una opción **gratuita** integrada de OpenRouter. Esto le permite comenzar a traducir, reescribir y transformar texto de inmediato. Alternativamente, también puede obtener una clave API gratuita de Cerebras, Google, Groq o Mistral AI.

En lenguaje sencillo:

- Un **modelo** es el motor de IA que realiza el trabajo. Los modelos se enumeran con un **prefijo de proveedor** (por ejemplo, `openrouter/…`, `openai/…`, `ollama/…`).
- Una **clave de API** (o, para Ollama, una **URL base**) es la forma en que la aplicación accede a ese proveedor.

Si estás utilizando la **aplicación de escritorio**, añade claves en [**Configuración** > **Configuración de API**](#api-config) para cada proveedor que utilices. Para uso exclusivo de OpenRouter, consulta [Cómo obtener una clave de API](#how-to-get-an-api-key-desktop-app) a continuación. Si no deseas utilizar una clave de API, puedes instalar Ollama (desde [ollama.com](https://ollama.com)) y usar modelos locales en su lugar, como `translategemma:4b`.

Si estás utilizando la **versión web**, el propietario del servidor configura los proveedores mediante variables de entorno, por lo que no puedes introducir claves de API directamente en la aplicación.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cómo obtener una clave de API gratuita de OpenRouter (aplicación de escritorio)

Si estás utilizando la aplicación de escritorio, sigue estos pasos:

1. Ve a [OpenRouter](https://openrouter.ai) en tu navegador web.
2. Crea una cuenta o inicia sesión.
3. Abre la página [Claves](https://openrouter.ai/keys).
4. Haz clic en el botón para crear una nueva clave API.
5. Dale un nombre a la clave para que puedas reconocerla más tarde.
6. Copia la nueva clave API.
7. Vuelve a Transrewrt y abre **Configuración** > **Configuración de API**.
8. Pega la clave en **Clave API de OpenRouter** (dentro de **Configuración** > **Configuración de API**).
9. Haz clic en **Probar clave de OpenRouter** para asegurarte de que funcione.

<br/><br/>

<a id="getting-started"></a>
## Empezando

Si es la primera vez que utiliza Transrewrt, siga este orden:

1. Abre la aplicación.
2. Elige tu **idioma de interfaz** desde el icono del globo terráqueo si es necesario.
3. Si estás usando la **aplicación de escritorio**, abre [**Configuración** > **Configuración de API**](#api-config), añade una clave API de al menos un proveedor (por ejemplo, OpenRouter) y haz clic en **Probar** para verificar que funcione.
4. Abre [**Configuración** > **Modelos**](#models) y añade uno o más modelos a **Modelos seleccionados**.
5. Abre [**Configuración** > **Idiomas**](#languages) y elige tus **Idiomas principales** si deseas que tus idiomas más usados aparezcan primero.
6. Ve a **Traducir** y realiza una traducción sencilla para confirmar que todo funciona.
7. Una vez que funcione, prueba **Reescribir** y luego **Transformar**.

Este orden es importante. Evita el problema más común al usar la aplicación por primera vez: intentar ejecutar una tarea antes de que la aplicación tenga una conexión API funcional o un modelo seleccionado.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Partes principales de la ventana

La aplicación se divide en tres áreas principales:

- La **barra lateral** de la izquierda.
- La **barra de herramientas** en la parte superior.
- El **área de trabajo** en el centro.

<br/>

<a id="sidebar"></a>
### Barra lateral

Utiliza la barra lateral para moverte por la aplicación. Puedes minimizar la barra lateral para obtener más espacio haciendo clic en el icono junto al logotipo de la aplicación.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/es/sidebar.png" alt="Barra lateral de la aplicación" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traducción</strong> abre el área de trabajo de traducción.</li><br/>
        <li><strong>Reescribir</strong> abre el área de trabajo de reescritura.</li><br/>
        <li><strong>Transformar</strong> abre el área de trabajo de prompt personalizado.</li><br/>
        <li><strong>Panel de control</strong> muestra información sobre el uso y el costo.</li><br/>
        <li><strong>Configuración</strong> abre el panel de configuración.</li><br/>
        <li><strong>Historial</strong> muestra el historial de uso con el texto de entrada y salida.</li><br/>
        <li><strong>Usuario</strong> muestra el nombre de usuario del usuario conectado (solo web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Barra de herramientas

La barra de herramientas cambia ligeramente dependiendo de dónde estés en la aplicación.

- A la izquierda, muestra el nombre de la página actual.
- A la derecha, muestra el **selector de modelo** y el control de **Idioma de la interfaz**.

El **selector de modelo** le permite elegir qué motor de inteligencia artificial utilizar para la tarea actual.

![Model selector](../images/screenshots/es/model-selector.png)

Algunos modelos gratuitos pueden no estar siempre disponibles; a veces están desconectados o tienen un límite de uso. Si esto ocurre, la aplicación eliminará automáticamente ese modelo de tu lista disponible. Para controlar qué modelos aparecen, ve a [**Configuración** > **Modelos**](#models) y edita tu lista de modelos.  
También puedes abrir la configuración del modelo directamente haciendo clic en el icono del proveedor a la izquierda del nombre del modelo en la barra de herramientas.

<br/>

El **icono de globo terráqueo + código de idioma** cambia el idioma de la interfaz de la aplicación, como menús y botones. **No** cambia los idiomas de traducción utilizados en **Traducir**.

![Interface language selector](../images/screenshots/es/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Entrada y paneles de salida

La mayoría de los espacios de trabajo utilizan un panel de **Entrada** a la izquierda y un panel de **Salida** a la derecha.

Cada panel también muestra:

| **Entrada**                                                          | **Salida**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Recuento de caracteres <br/>- Recuento de palabras <br/>- Recuento de párrafos   <br/> | - Cuánto tiempo tardó la tarea<br/>- **TPS** (Tokens por segundo)<br/>- Recuentos de caracteres, palabras y párrafos<br/>- El modelo utilizado |

Si te preguntas por los términos técnicos:

- **Token** significa un fragmento pequeño de texto. Puedes pensarlo como parte de una palabra o una palabra corta.  
- **TPS** significa cuántos de esos fragmentos de texto procesó el modelo por segundo.

<br/>

También puedes supervisar el costo de cada operación (si está disponible) y el coste total, habilitando la opción `Show cost information on the actions` en [**Configuración** > **Configuración general**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Traducir

Utilice **Translate** cuando desee convertir texto de un idioma a otro.

![Translate workspace](../images/screenshots/es/translate.png)

<br/>

<a id="translate-text"></a>
### Traducir texto

1. Abre **Traducir**.
2. Elige un idioma en **De**.
3. Elige un idioma en **A**.
4. Elige un modelo en la barra de herramientas.
5. Escribe o pega texto en **Entrada**.
6. Haz clic en **Traducir**.
7. Lee el resultado en **Salida**.
8. Usa el botón de copiar si deseas copiar el resultado.

<br/>

<a id="language-selection"></a>
### Selección de idioma

- **From** puede ser un idioma específico o **Detectar idioma**.
- **To** es el idioma en el que deseas obtener el resultado.

Tus **Idiomas principales** seleccionados aparecen en la parte superior de la lista. Puedes configurarlos en [**Configuración** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Configuración útil de traducción

En [**Configuración** > **Configuración general**](#general-settings), puedes cambiar cómo funciona la traducción:

- **Traducción automática al pegar**: realiza una traducción tan pronto como pegas texto.
- **Copiar resultado al portapapeles automáticamente**: copia el resultado automáticamente tras una ejecución exitosa.
- **Traducción en tiempo real (mientras escribe)**: realiza traducciones mientras escribe.
- **Tiempo de espera (ms)**: controla cuánto espera la aplicación antes de ejecutar una traducción en tiempo real.
- **Enter**: controla lo que ocurre cuando pulsa `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Reescritura

Utilice **Reescritura** cuando desee mejorar la redacción sin cambiar el significado principal.

![Rewrite workspace](../images/screenshots/es/rewrite.png)

Esto es útil para:

- corregir ortografía y gramática (**Revisar ortografía y gramática**)
- hacer el texto más claro (**Mejorar claridad**)
- varias reformulaciones distintas en una sola ejecución (**Versiones alternativas**)
- hacer el texto más formal o más informal (**Formal** / **Informal**)
- acortar o ampliar el texto (**Acortar** / **Ampliar**)
- hacer que el texto suene más técnico (**Hacer técnico**)

<br/>

> 💡 **TIP**<br/>
> Cuando usas el modo "**Check Spelling & Grammar**", aparece un interruptor **Show changes** en el panel de salida (junto a **Copy**).
> Actívalo o desactívalo para mostrar u ocultar las correcciones específicas aplicadas a tu texto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformación

Utiliza **Transformación** cuando quieras que la IA siga un conjunto personalizado de instrucciones.

![Transform workspace](../images/screenshots/es/transform.png)

Esta es el área más flexible de la aplicación. Puedes utilizarla para tareas como:

- resumir notas
- convertir texto sin pulir en un correo electrónico refinado
- extraer puntos clave
- convertir texto a un formato específico
- cualquier otra actividad personalizada con el texto de entrada

<br/>

<a id="run-an-existing-prompt"></a>
### Ejecutar un prompt existente

1. Abra **Transformar**.
2. Elija un indicio de la lista de indicaciones.
3. Si aparece un cuadro de **Idioma de destino**, elija un idioma si lo desea.
4. Escriba o pegue el texto en **Entrada**.
5. Haga clic en **Transformar**.
6. Lea el resultado en **Salida**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Si aún no tienes prompts

Si tu lista de prompts está vacía, haz clic en **Cargar prompts de ejemplo** en el área de trabajo de Transformación. El mismo control está siempre disponible en [**Configuración** > **Prompts de transformación**](#transform-prompts) en la fila de exportación/importación. Ambos añaden ejemplos integrados para que puedas comenzar rápidamente.

<br/>

> ℹ️ **NOTA**<br/>
> Se proporcionan ejemplos de prompts en inglés. Después de cargarlos, puede editar un prompt y usar **Traducir indicación** para traducirlo a su idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Crear un prompt rápidamente

La forma más rápida de crear un prompt es:

1. Haga clic en **Nueva indicación**.
2. Haga clic en **Generar indicación**.
3. Describa lo que desea que haga la indicación.
4. Elija un modelo.
5. Deje que la aplicación cree un borrador para usted.
6. Revise el borrador y haga clic en **Guardar**.

![Generate prompt](../images/screenshots/es/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Editar un prompt

Cuando crea o edita un prompt, el editor aparece a la izquierda y un área de prueba aparece a la derecha.

![Transform prompt editor](../images/screenshots/es/transform-prompt-edit.png)

Los campos principales son:

- **Nombre de la indicación**: el nombre que se muestra en la lista de indicaciones.
- **Instrucciones de la indicación (opcional)**: una breve sugerencia mostrada al usuario al ejecutar la indicación.
- **Rol del modelo**: el rol general asignado a la IA, como por ejemplo 'Eres un asistente útil'.
- **Instrucciones del modelo (una por línea)**: las reglas específicas que desea que siga la IA.
- **Descripción de salida**: una palabra breve que describe el resultado, como por ejemplo 'resumen' o 'reescritura'.
- **Temperatura (0,0 → 1,0)**: cómo se comportará el modelo; véase más abajo.
- **Preguntar por idioma de destino**: añade un selector de idioma de destino cuando se ejecuta la indicación.

Si el término técnico **Temperatura** es nuevo para usted, piénselo de esta manera:

- Una **Temperatura** más baja ofrece resultados más estables y predecibles.
- Una **Temperatura** más alta ofrece mayor variedad y creatividad.

También puedes usar:

- **`Generate prompt`** para crear un nuevo borrador a partir de una descripción sencilla
- **`Improve prompt`** para perfeccionar un prompt existente
- **`Translate prompt`** para traducir los campos del prompt

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> Haga clic en **`Save`** antes de hacer clic en **`Back to Run`**. Si regresa sin guardar, los cambios se perderán.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Probar un prompt antes de usarlo

El panel de prueba de la derecha le permite probar su prompt con texto de ejemplo antes de usarlo en el trabajo diario.

Esto es útil cuando:

- estás creando un nuevo prompt
- estás comparando dos versiones de un prompt
- deseas verificar el tono, la longitud o el formato de salida

<br/>

> ℹ️ **NOTA**<br/>
> Puedes exportar e importar prompts guardados en [**Configuración** > **Prompts de transformación**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Panel

Utiliza **Panel** para ver cuánto estás utilizando la aplicación y cuánto te está costando (para modelos de pago).

![Dashboard summary](../images/screenshots/es/dashboard-summary.png)

<br/>

> ℹ️ **NOTA**<br/>
> Si solo usas modelos **gratuitos**, las cantidades de **costo** pueden ser cero y los resúmenes centrados en costos pueden parecer vacíos. En **Resumen**, **Uso a lo largo del tiempo** y **Uso por modelo** aún se muestran los **números de llamadas** (traducir, reescritura y transformación) cuando tienes actividad en el período seleccionado.

<br/>

<a id="filter-the-data"></a>
### Filtrar los datos

Utilice los botones de filtro en la parte superior para cambiar el rango de tiempo.

![Dashboard filters](../images/screenshots/es/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtro **Usuario** solo es visible para los administradores en la versión web. Los usuarios regulares no verán este filtro, y no está disponible en la aplicación de escritorio.

<br/>

<a id="dashboard-tabs"></a>
### Pestañas del panel

- **Resumen**: ofrece una visión general del uso y coste. Incluye un apartado de **Uso a lo largo del tiempo** (**conteo acumulativo por día** de llamadas para traducir, reescribir y transformar, mostrado en forma apilada) y **Uso por modelo** (**llamadas totales por modelo**, incluyendo transformar).
- **Por uso**: desglosa la actividad por idioma de traducción, modo de reescritura y indicación de transformación.
- **Por modelo**: muestra qué modelos ha utilizado y cuánto le han costado.
- **Por día**: muestra los totales diarios.
- **Todas las llamadas**: muestra el historial completo de llamadas y permite exportarlo.

<br/>

<a id="export-data"></a>
### Exportar datos

Las tablas del panel pueden exportar datos en:

- **JSON**
- **CSV**
- **XLSX**

Esto es útil si desea revisar la actividad fuera de la aplicación o compartir un informe.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registros almacenados para un modelo

En **Por modelo** o **Todas las llamadas**, puedes eliminar los registros almacenados para un modelo haciendo clic en el icono de "papelera".

> ⚠️ **ADVERTENCIA**<br/>
> La eliminación de registros almacenados no se puede deshacer. Utilice esta opción solo si está seguro de que ya no necesita ese historial.

Para eliminar todos los datos o eliminar registros según su antigüedad, vaya a [**Configuración** > **Seguimiento de costos**](#cost-tracking). Allí encontrará opciones para eliminar todos los datos almacenados o solo los datos anteriores a una determinada fecha.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Historial

Haga clic en **Historial** para ver el historial de sus acciones dentro de **Transrewrt**, incluyendo la entrada y la salida de cada operación.

![History page](../images/screenshots/es/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar los datos

**Historial** utiliza los mismos filtros que la página **Panel**. Utilícelos para seleccionar el intervalo de tiempo.

![Dashboard filters](../images/screenshots/es/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtro **Usuario** solo es visible para los administradores en la versión web. Los usuarios regulares no verán este filtro, y no está disponible en la aplicación de escritorio.

<br/>

<a id="export-history-data"></a>
###  Exportar datos del historial

La página de historial puede exportar los datos filtrados en:

- **JSON**
- **CSV**
- **XLSX**

Esto es útil si desea revisar la actividad fuera de la aplicación o compartir un informe.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Configuración

Abra **Configuración** desde la barra lateral para personalizar el comportamiento de la aplicación.

Las pestañas disponibles dependen de la plataforma y de su rol:

| Pestaña               | Escritorio | Web (administrador) | Web (usuario normal) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Configuración general  |   sí   |     sí     |        sí         |
  | Modelos            |   sí   |     sí     |        sí         |
  | Idiomas         |   sí   |     sí     |        sí         |
  | Seguimiento de costes     |   sí   |     sí     |         -          |
  | Indicaciones de transformación |   sí   |     sí     |        sí         |
  | Usuarios             |    -    |     sí     |         -          |
  | Configuración de API |   sí   |     sí     |         -          |
  | Acerca de             |   sí   |     sí     |        sí         |

<br/>

> ℹ️ **NOTA**<br/>
> En la versión web, cada usuario tiene su propia configuración. La configuración como modelos seleccionados, idiomas, opciones generales y prompts de transformación se almacenan por usuario. Los cambios que realices no afectan a otros usuarios.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Configuración general

Utilice **Configuración general** para controlar el comportamiento al escribir, si se almacenan detalles de ejecución para el **Historial** y la apariencia.

**Comportamiento**

- **Comportamiento para ENTER** elige si `Enter` ejecuta la tarea o inserta una nueva línea.
- **Traducción automática al pegar** inicia la traducción tan pronto como pegues texto.
- **Copiar resultado automáticamente al portapapeles** copia los resultados exitosos automáticamente.
- **Traducción en tiempo real (mientras escribes)** traduce mientras escribes.
- **Tiempo de espera (ms)** establece el tiempo de espera para la traducción en tiempo real.

**Historial**

- **Mantener historial de ejecución** controla si cada traducción, reescritura y transformación almacena **texto de entrada y salida** para la vista del panel lateral [**Historial**](#history). Desactivarlo solicita confirmación; si confirmas, el texto del historial almacenado se elimina de la base de datos.
- **Eliminar datos del historial** te permite eliminar el texto almacenado por antigüedad (por ejemplo, más antiguo que unos meses, o **todos los datos (limpiar)**) mediante **Eliminar datos**. Esto solo afecta al texto de ejecución guardado para la vista de **Historial**; **no** elimina los totales de costo o uso. Para eliminar o reducir los datos de **costo**, utiliza [**Configuración** > **Seguimiento de costos**](#cost-tracking).

**Apariencia**

- **Mostrar información de costos en las acciones** controla la visualización del costo por operación (si está disponible) y el costo total en los paneles de salida de Traducir, Reescribir y Transformar.
- **Dígitos fraccionarios del costo** cambia cómo se muestran los decimales del costo.
- **Solo web:** **mostrar un margen alrededor de la aplicación** agrega espacio adicional alrededor de la interfaz.
- **Familia de fuentes** cambia la fuente de escritura en los paneles de texto.
- **Tamaño** cambia el tamaño de la fuente.

**Copia de seguridad de configuración**

- **Incluir datos de uso en la copia de seguridad** - cuando está activado, el ZIP también contiene el historial de ejecución y datos de llamadas a la API. 
- **Configuración de copia de seguridad** - crea un único archivo ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` en UTC por defecto) con `config.json`, `state.json`, clave de cifrado opcional, usuarios, preferencias, indicaciones personalizadas y datos de uso si lo has habilitado. Tras una copia de seguridad exitosa, la confirmación muestra el nombre del archivo guardado.
- **Restaurar desde copia de seguridad** - abre primero un **diálogo de confirmación**. Selecciona el archivo ZIP de copia de seguridad dentro del diálogo (**Examinar** / selector de archivos o arrastrar y soltar donde se admita), luego revisa las opciones:
  - **Restaurar los datos de uso** - importa el historial/uso del ZIP cuando se realizó la copia con los datos de uso incluidos; déjalo desactivado si solo deseas configuraciones e indicaciones.
  - **Eliminar los datos de uso antiguos antes de restaurar** - elimina el historial/uso existente en esta instalación antes de aplicar la copia de seguridad (opcional; úsalo cuando desees una sustitución limpia).

Las copias de seguridad creadas en la versión web o de escritorio se pueden restaurar en la otra. Al restaurar una copia de seguridad de escritorio en la versión web, los datos se restaurarán al usuario administrador.

<br/>

<a id="models"></a>
### Modelos

Utilice **Configuración** > **Modelos** para elegir qué modelos aparecen en la barra de herramientas.

![Settings Models tab](../images/screenshots/es/settings-models.png)

La página tiene dos listas:

- **Modelos disponibles** a la izquierda
- **Modelos seleccionados** a la derecha

Los controles útiles incluyen:

- **Buscar modelos...** para encontrar un modelo por nombre
- **Chips de Proveedor** para reducir la lista a un motor específico (OpenRouter, OpenAI, Ollama, …)
- **Solo gratuitos** para mostrar únicamente modelos gratuitos
- **Actualizar** para recargar la lista
- **Expandir todo** y **Contraer todo** cuando estés ordenando por proveedor

Los identificadores de modelo incluyen el prefijo del proveedor (por ejemplo, `openrouter/…` frente a `openai/…`). Insignias como **OpenAI (OpenRouter)** frente a **OpenAI (directo)** muestran cómo se enruta el tráfico.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) es un modelo de enrutamiento, no un modelo de chat general: su respuesta es JSON que describe los cuerpos de solicitud de la API de OpenRouter (por ejemplo, un array `requests` con `model` y `messages`). Si lo usas para **Traducir**, **Reescritura** o **Transformación**, el panel de salida mostrará ese JSON en lugar de texto finalizado. Elige un modelo de texto normal para esas tareas. Consulta la [página del modelo Body Builder](https://openrouter.ai/openrouter/bodybuilder) en OpenRouter.

Acciones:

- Para añadir un modelo, haga clic en **Añadir** o en cualquier lugar de la entrada.

- Para eliminar un modelo, haga clic en **X** junto a él en **Modelos seleccionados** o en **Seleccionado** en la entrada de Modelos disponibles.

- Para limpiar la lista, haga clic en **Deseleccionar todo**. El modelo gratuito requerido permanecerá en la lista.

<br/>

> ℹ️ **NOTA**<br/>
> Si no deseas añadir créditos a OpenRouter de inmediato, empieza habilitando **Solo gratuitos** y eligiendo los modelos gratuitos (no se requiere tarjeta de crédito). También puedes usar Ollama para ejecutar modelos localmente sin ninguna clave de API.

<br/>

<a id="languages"></a>
### Idiomas

Utilice **Configuración** > **Idiomas** para organizar las listas de idiomas utilizadas en la aplicación.

- Los **idiomas principales** se fijan cerca de la parte superior de las listas de idiomas en **Traducir** y **Transformación**.
- El **idioma personalizado** le permite añadir un idioma que no está en la lista integrada.

Si añade un idioma personalizado, este aparece en los selectores de idioma junto con las opciones integradas.

<br/>

<a id="cost-tracking"></a>
### Seguimiento de costos

Utilice **Configuración** > **Seguimiento de costos** para gestionar la información de costos.

- **Costo total** muestra el acumulado en curso.
- **Copiar valor** copia el total al portapapeles.
- **Restablecer costo** restablece el total almacenado a cero.
- **Sincronizar con el uso de la clave API** establece el total para que coincida con el uso reportado por tu cuenta OpenRouter (solo OpenRouter).
- **Uso de clave API** muestra detalles de uso de OpenRouter, si están disponibles.
- **Eliminar datos de costos** elimina todos los datos, o solo las entradas anteriores a una fecha seleccionada.

**Seguimiento de costos:** Cuando usas modelos de OpenRouter, la aplicación muestra tu uso real y gastos basados en la información de costos de OpenRouter. Para todos los demás proveedores, la aplicación estima los costos utilizando los precios publicados por OpenRouter; si no hay un precio disponible, la estimación podría ser cero.

<br/>

> ℹ️ **NOTA**<br/>
>  **Todos los valores de costo son estimaciones solo para tu referencia, no son estados de facturación oficiales.**

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> La eliminación de datos no se puede deshacer. Antes de eliminar, asegúrese de hacer una copia de seguridad de sus datos o de exportarlos a través de [**Historial**](#history) 
> o [**Panel** > **Todas las llamadas**](#dashboard-tabs); de lo contrario, se perderán permanentemente. 
> Todo el historial de entrada/salida relacionado con cada entrada de llamada de API también será eliminado.

<br/>

<a id="transform-prompts"></a>
### Prompts de transformación

Utilice **Configuración** > **Prompts de transformación** para administrar los prompts en bloque.

Puede:

- revisa tus indicaciones guardadas
- elimina indicaciones
- importa indicaciones desde un archivo
- exporta indicaciones para copia de seguridad o compartir
- carga indicaciones de ejemplo a la lista de indicaciones

<br/>

<a id="users"></a>
### Usuarios

Utilice **Usuarios** para gestionar cuentas de usuario en la versión web. Puede añadir usuarios, actualizar sus detalles, restablecer contraseñas y eliminar cuentas.

<br/>

<a id="api-config"></a>
### Configuración de API

Los proveedores compatibles son: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras y **Ollama** (modelos locales mediante una URL base). Solo necesitas configurar los proveedores que utilizas.

**Aplicación web: solo administrador**

Las claves de API se configuran mediante variables de entorno del sistema o de Docker; no se introducen en la interfaz web. Esta página muestra qué proveedores tienen una clave configurada y permite probar cada uno haciendo clic en el botón **`Test`**.

<br/>

> ℹ️ **NOTA**<br/>
> Para cambiar una clave de API, actualice la variable de entorno en su configuración del sistema o de Docker y reinicie el servidor o contenedor.

> ℹ️ **NOTA**<br/>
> Las **copias de seguridad de configuración** (consulte [**Configuración general** → Copia de seguridad de configuración](#general-settings)) pueden incluir claves de **proveedor** resueltas dentro del `config.json` del archivo ZIP. Restaurar ese archivo ZIP **no** copia esas claves de vuelta al archivo de configuración persistente del servidor; las claves activas siguen procediendo del entorno y del estado del archivo existente, tal como se describe allí.

<br/>

**Aplicación de escritorio**

Utiliza **Configuración de API** para almacenar las claves API de cada proveedor que uses. Para Ollama, introduce la **URL base** en lugar de una clave API.

<br/>

> 💡 **Consejo** <br/>
> Si no deseas usar una clave API ni pagar por el uso, puedes [descargar Ollama](https://ollama.com) y ejecutar modelos (como `translategemma:4b`) localmente en tu máquina de forma gratuita. Alternativamente, puedes crear una cuenta gratuita en OpenRouter (sin necesidad de tarjeta de crédito) para usar sus modelos gratuitos, o obtener una clave API gratuita de Cerebras, Google, Groq o Mistral AI.

<br/>

- Añada únicamente los proveedores que necesite. En **Configuración** > **Modelos**, cada ID de modelo comienza con el proveedor (por ejemplo `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para añadir una clave API, introduzca el valor en el campo de texto y haga clic en **`Save`**. Para reemplazar una clave existente, haga clic en **`Edit`**. Para verificar que una clave funciona, haga clic en **`Test`**. Para la URL base de Ollama, haga siempre clic en **`Test`** para comprobar la conexión.

<br/>

> ℹ️ **NOTA**<br/>
> No puede ver el valor actual de una clave de API. Solo puede reemplazarla utilizando el botón **`Edit`**.
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
### La aplicación no traducirá, reescribirá ni transformará texto

Compruebe lo siguiente:

- ha seleccionado un modelo en la barra de herramientas
- al menos un modelo aparece en [**Configuración** > **Modelos**](#models)
- su configuración de API está funcionando

Si está utilizando la aplicación de escritorio:

1. Abra [**Configuración** > **Configuración de API**](#api-config).
2. Compruebe que al menos una clave de API esté guardada.
3. Haga clic en **Probar** junto al proveedor para confirmar que la clave funciona.

<br/>

<a id="the-model-list-is-empty"></a>
### La lista de modelos está vacía

Abra [**Configuración** > **Modelos**](#models) y haga clic en **Actualizar**.

Si es necesario:

- buscar un modelo
- activar **Solo gratuitos**
- añadir uno o más modelos a **Modelos seleccionados**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### El resultado es demasiado lento o demasiado caro

Prueba una o varias de estas opciones:

- elige un modelo diferente
- utiliza una entrada más corta
- desactiva la **Traducción en tiempo real (mientras escribes)** en [**Configuración** > **Configuración general**](#general-settings)
- utiliza modelos gratuitos para tareas sencillas (consulta [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### La interfaz está en el idioma incorrecto

Haga clic en el icono del globo terráqueo en la [barra de herramientas](#toolbar) y elija su **Idioma de la interfaz** preferido.

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

- solo usas **modelos gratuitos** y estás viendo las cifras de **costo** (pueden ser cero); los gráficos de recuento de llamadas de **uso** en **Resumen** aún necesitan datos del período seleccionado
- el **filtro de tiempo** seleccionado no cubre el período en que se realizaron las llamadas: prueba con **Todo** para verificar

Si los gráficos aún están vacíos después de seleccionar **Todo**, confirme que las llamadas aparezcan en [**Historial**](#history) o en la pestaña **Todas las llamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### El costo muestra "no disponible" o parece incorrecto

Cuando utiliza modelos a través de **OpenRouter**, la aplicación muestra su gasto real informado por OpenRouter.

Para **otros proveedores** (OpenAI directo, Anthropic directo, etc.), el costo es estimado a partir de los datos de precios publicados por OpenRouter. Si no se encuentra un precio coincidente para un modelo, el costo aparecerá como **no disponible** y no se agregará a su total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### El coste total no coincide con la factura de mi proveedor

Todas las cifras de costo en la aplicación son **estimaciones solo para referencia**, no son estados de facturación oficiales.

Para acercar el total a tu gasto real en OpenRouter, abre [**Configuración** > **Seguimiento de costos**](#cost-tracking) y haz clic en **Sincronizar con uso de clave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La página Historial falta en la barra lateral

**Mantener historial de ejecución** puede estar desactivado. Abre [**Configuración** > **Configuración general**](#general-settings) y actívalo. Ten en cuenta que activarlo no restaura los datos del historial eliminados previamente.

<br/>

<a id="web-app-session-expired"></a>
### Aplicación web: redirigida a la página de inicio de sesión inesperadamente

Es posible que su sesión haya caducado. Vuelva a iniciar sesión. Si ocurre con frecuencia, compruebe la configuración del servidor para los ajustes de duración de la sesión.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Web admin: olvidó o perdió la contraseña

Esto se aplica a la **aplicación web autohospedada** (Docker), no a la aplicación de escritorio (Electron).

- Si otro administrador aún puede iniciar sesión, puede abrir [**Configuración** > **Usuarios**](#users), seleccionar la cuenta y establecer una **nueva contraseña** allí.
- Si está **bloqueado** pero tiene **acceso shell** a la máquina o contenedor, restablezca la contraseña con la herramienta auxiliar que se incluye con la imagen (reemplace `transrewrt` si cambia el nombre predeterminado, y ponga entre comillas la contraseña si contiene espacios o caracteres especiales):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

El nombre de usuario predeterminado de administrador es `admin` si nunca creaste otras cuentas. Cuando pasas solo un argumento, se trata como la nueva contraseña para `admin`.

Si ejecutas desde una **copia del origen** en lugar de Docker, utiliza:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

El script actualiza el registro del usuario en la base de datos SQLite (y puede crear al `admin` usuario si falta). Después de restablecer, inicie sesión con la nueva contraseña.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### El Panel muestra sin datos para otros usuarios (web)

Solo los **administradores** pueden ver los datos de todos los usuarios mediante el filtro **Usuario**. Por diseño, los usuarios regulares solo ven su propia actividad.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Cambié un prompt y perdí los cambios

Al editar un prompt, haga clic siempre en **Guardar** antes de hacer clic en **Volver a Ejecutar**.

<br/><br/>

<a id="quick-tips"></a>
## Consejos rápidos

- Comienza con [**Traducir**](#translate) para asegurarte de que tu configuración funcione antes de pasar a [**Reescribir**](#rewrite) o [**Transformar**](#transform).
- Usa [**Reescribir**](#rewrite) para mejorar el estilo del texto en tareas cotidianas.
- Usa [**Transformar**](#transform) cuando necesites un flujo de trabajo repetible para una tarea específica.
- Usa [**Panel de control**](#dashboard) si deseas vigilar el uso y el costo.
- Usa [**Historial**](#history) para revisar operaciones anteriores y su texto completo de entrada/salida.
- Exporta indicaciones regularmente si estás creando una biblioteca de indicaciones que deseas mantener segura (ver [Indicaciones de Transformación](#transform-prompts)) o si deseas compartirla con otros.

<br/><br/>

<a id="disclaimer"></a>
## Descargo de responsabilidad

Los nombres de productos e iconos pertenecen a sus respectivos propietarios y se utilizan solo con fines de identificación. Este software no está afiliado ni respaldado por ninguna de las marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licencia

Derechos de autor © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
