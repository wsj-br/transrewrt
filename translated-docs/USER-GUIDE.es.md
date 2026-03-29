---
translation_last_updated: '2026-03-29T20:53:45.828Z'
source_file_mtime: '2026-03-29T01:41:58.369Z'
source_file_hash: 418a9aa7293a9fb4
translation_language: es
source_file_path: USER-GUIDE.md
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Guía del usuario

<br/>

<a id="introduction"></a>
## Introducción

Transrewrt te ayuda a trabajar con texto de tres formas principales:

- **Traducir** - convertir texto de un idioma a otro.
- **Reescribir** - reformular texto en un estilo diferente, como más claro, más corto o más formal.
- **Transformar** - procesar texto utilizando instrucciones personalizadas de IA llamadas prompts.

<br/>

Esta guía explica cómo usar la aplicación una vez instalada y en funcionamiento. Para los pasos de instalación, consulta el archivo **[README](README.es.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt está disponible como aplicación de escritorio para Windows y Linux, y como aplicación web autohospedada. Esta guía se centra en el uso diario de la aplicación. Cuando algo solo se aplica a una versión, se indica claramente.

<small>**Leer en otros idiomas:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota sobre las traducciones de la interfaz y la documentación:** Todos los idiomas de la interfaz, excepto el inglés (Reino Unido) original, 
> fueron traducidos mediante modelos de IA; la redacción puede ser imprecisa o contener errores.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tabla de contenidos**

- [Antes de empezar](#before-you-start)
  - [Cómo obtener una clave API gratuita de OpenRouter (aplicación de escritorio)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Primeros pasos](#getting-started)
- [Partes principales de la ventana](#main-parts-of-the-window)
  - [Barra lateral](#sidebar)
  - [Barra de herramientas](#toolbar)
  - [Paneles de entrada y salida](#input-and-output-panels)
- [Traducción](#translate)
  - [Traducir texto](#translate-text)
  - [Selección de idioma](#language-selection)
  - [Configuraciones útiles de traducción](#helpful-translation-settings)
- [Reescritura](#rewrite)
- [Transformación](#transform)
  - [Ejecutar un prompt existente](#run-an-existing-prompt)
  - [Si aún no tienes prompts](#if-you-have-no-prompts-yet)
  - [Crear un prompt rápidamente](#create-a-prompt-quickly)
  - [Editar un prompt](#edit-a-prompt)
  - [Probar un prompt antes de usarlo](#test-a-prompt-before-using-it)
- [Panel](#dashboard)
  - [Filtrar los datos](#filter-the-data)
  - [Pestañas del panel](#dashboard-tabs)
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
  - [Los gráficos del panel están vacíos](#dashboard-charts-are-empty)
  - [El costo muestra "no disponible" o parece incorrecto](#cost-shows-not-available-or-seems-wrong)
  - [El costo total no coincide con la factura de mi proveedor](#total-cost-does-not-match-my-provider-bill)
  - [La página Historial falta en la barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicación web: redirigido inesperadamente a la página de inicio de sesión](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administrador web: olvidé o perdí una contraseña](#web-admin-forgot-or-lost-a-password)
  - [El panel no muestra datos de otros usuarios (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Cambié un prompt y perdí los cambios](#i-changed-a-prompt-and-lost-the-edits)
- [Consejos rápidos](#quick-tips)
- [Descargo de responsabilidad](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Antes de empezar

Para usar Transrewrt, necesitas acceso a al menos un proveedor de IA. Los proveedores compatibles son: [OpenRouter](https://openrouter.ai) (que agrega muchos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, y [Ollama](https://ollama.com) para modelos locales.

No necesitas seleccionar un modelo de pago para comenzar. Tan pronto como añadas tu clave de API de OpenRouter, la aplicación habilita automáticamente una opción **gratuita** integrada de OpenRouter. Esto te permite comenzar a traducir, reescribir y transformar texto de inmediato. Alternativamente, también puedes obtener una clave de API gratuita de Cerebras, Google, Groq o Mistral AI.

En términos sencillos:

- Un **modelo** es el motor de IA que realiza el trabajo. Los modelos se enumeran con un **prefijo del proveedor** (por ejemplo `openrouter/…`, `openai/…`, `ollama/…`).
- Una **clave de API** (o, para Ollama, una **URL base**) es la forma en que la aplicación accede a ese proveedor.

Si estás usando la **aplicación de escritorio**, añade las claves en [**Configuración** > **Configuración de API**](#api-config) para cada proveedor que uses. Para uso exclusivo de OpenRouter, consulta [Cómo obtener una clave de API](#how-to-get-an-api-key-desktop-app) a continuación. Si no deseas usar una clave de API, puedes instalar Ollama (desde [ollama.com](https://ollama.com)) y usar modelos locales en su lugar, como `translategemma:4b`.

Si estás usando la **versión web**, el propietario del servidor configura los proveedores mediante variables de entorno, por lo que no puedes introducir claves de API directamente en la aplicación.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cómo obtener una clave de API gratuita de OpenRouter (aplicación de escritorio)

Si estás usando la aplicación de escritorio, sigue estos pasos:

1. Ve a [OpenRouter](https://openrouter.ai) en tu navegador web.
2. Crea una cuenta o inicia sesión.
3. Abre la página [Claves](https://openrouter.ai/keys).
4. Haz clic en el botón para crear una nueva clave de API.
5. Dale un nombre a la clave para que puedas reconocerla más tarde.
6. Copia la nueva clave de API.
7. Vuelve a Transrewrt y abre **Configuración** > **Configuración de API**.
8. Pega la clave en **Clave de API de OpenRouter** (bajo **Configuración** > **Configuración de API**).
9. Haz clic en **Probar clave de OpenRouter** para asegurarte de que funcione.

<br/><br/>

<a id="getting-started"></a>
## Primeros pasos

Si es la primera vez que usas Transrewrt, sigue este orden:

1. Abre la aplicación.
2. Elige tu **idioma de la interfaz** desde el icono del globo si es necesario.
3. Si estás en la **aplicación de escritorio**, abre [**Configuración** > **Configuración de API**](#api-config), añade una clave de API para al menos un proveedor (por ejemplo OpenRouter) y haz clic en **Probar** para verificar que funcione.
4. Abre [**Configuración** > **Modelos**](#models) y añade uno o más modelos a **Modelos seleccionados**.
5. Abre [**Configuración** > **Idiomas**](#languages) y elige tus **Idiomas principales** si deseas que tus idiomas más usados aparezcan primero.
6. Ve a **Traducir** y realiza una traducción simple para confirmar que todo funcione.
7. Una vez que funcione, prueba **Reescritura** y luego **Transformación**.

Este orden es importante. Evita el problema más común al usarlo por primera vez: intentar ejecutar una tarea antes de que la aplicación tenga una conexión de API funcional o un modelo seleccionado.

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

Utilice la barra lateral para desplazarse por la aplicación. Puede colapsar la barra lateral para obtener más espacio haciendo clic en el icono junto al logotipo de la aplicación.

<br/>

<table>  
  <tr>  
    <td valign="top">  
       <img src="../images/screenshots/es/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">  
    </td>  
    <td valign="top">  
      <br/><br/>  
      <ul>  
        <li><strong>Traducir</strong> abre el área de trabajo de traducción.</li><br/>  
        <li><strong>Reescribir</strong> abre el área de trabajo de reescritura.</li><br/>  
        <li><strong>Transformar</strong> abre el área de trabajo de prompt personalizado.</li><br/>  
        <li><strong>Panel de control</strong> muestra información sobre el uso y costos.</li><br/>  
        <li><strong>Configuración</strong> abre el panel de configuración.</li><br/>  
        <li><strong>Historial</strong> muestra el historial de uso con el texto de entrada y salida</li><br/>  
        <li><strong>Usuario</strong> muestra el nombre de usuario del usuario conectado (solo web).</li>  
      </ul>  
    </td>  
  </tr>  
</table>

<br/>

<a id="toolbar"></a>  
### Barra de herramientas

La barra de herramientas cambia ligeramente dependiendo de dónde se encuentre en la aplicación.

- A la izquierda, muestra el nombre de la página actual.  
- A la derecha, muestra el **selector de modelo** y el control del **Idioma de la interfaz**.

El **selector de modelo** le permite elegir qué motor de IA utilizar para la tarea actual.

![Model selector](../images/screenshots/es/model-selector.png)

Algunos modelos gratuitos pueden no estar siempre disponibles, ya que a veces están fuera de línea o tienen un límite de uso. Si esto ocurre, la aplicación eliminará automáticamente ese modelo de su lista disponible. Para controlar qué modelos aparecen, vaya a [**Configuración** > **Modelos**](#models) y edite su lista de modelos.  
También puede abrir la configuración del modelo directamente haciendo clic en el icono del proveedor a la izquierda del nombre del modelo en la barra de herramientas.

<br/>

El **icono de globo terráqueo + código de idioma** cambia el idioma de la interfaz de la aplicación, como menús y botones. **No** cambia los idiomas de traducción utilizados en **Traducir**.

![Interface language selector](../images/screenshots/es/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>  
### Paneles de entrada y salida

La mayoría de las áreas de trabajo utilizan un panel izquierdo de **Entrada** y un panel derecho de **Salida**.

Cada panel también muestra:

| **Entrada**                                                          | **Salida**                                                                                                                  |  
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|  
| - Conteo de caracteres <br/>- Conteo de palabras <br/>- Conteo de párrafos   <br/> | - Cuánto tiempo tardó la tarea<br/>- **TPS** (tokens por segundo)<br/>- Conteo de caracteres, palabras y párrafos<br/>- El modelo utilizado |

Si se pregunta sobre los términos técnicos:

- **Token** significa un fragmento pequeño de texto. Puede pensarlo como parte de una palabra o una palabra corta.  
- **TPS** significa cuántos de esos fragmentos de texto procesó el modelo por segundo.

<br/>

También puede supervisar el costo de cada operación (si está disponible) y el costo total, habilitando la opción `Mostrar información de costos en las acciones` en [**Configuración** > **Configuración general**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>  
## Traducir

Utilice **Traducir** cuando desee convertir texto de un idioma a otro.

![Translate workspace](../images/screenshots/es/translate.png)

<br/>

<a id="translate-text"></a>
### Traducir texto

1. Abre **Traducir**.
2. Elige un idioma en **Desde**.
3. Elige un idioma en **A**.
4. Elige un modelo en la barra de herramientas.
5. Escribe o pega texto en **Entrada**.
6. Haz clic en **Traducir**.
7. Lee el resultado en **Salida**.
8. Usa el botón de copiar si deseas copiar el resultado.

<br/>

<a id="language-selection"></a>
### Selección de idioma

- **Desde** puede ser un idioma específico o **Detectar idioma**.
- **A** es el idioma en el que deseas obtener el resultado.

Tus **Idiomas principales** seleccionados aparecen en la parte superior de la lista. Puedes configurarlos en [**Configuración** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Configuración útil de traducción

En [**Configuración** > **Configuración general**](#general-settings), puedes cambiar el comportamiento de la traducción:

- **Traducir automáticamente al pegar** realiza una traducción tan pronto como pegues texto.
- **Copiar resultado al portapapeles automáticamente** copia el resultado automáticamente tras una ejecución exitosa.
- **Traducción en tiempo real (mientras escribes)** realiza traducciones mientras escribes.
- **Tiempo de espera (ms)** controla cuánto espera la aplicación antes de ejecutar una traducción en tiempo real.
- **Enter** controla lo que sucede cuando presionas `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Reescritura

Usa **Reescritura** cuando quieras mejorar la redacción sin cambiar el significado principal.

![Rewrite workspace](../images/screenshots/es/rewrite.png)

Esto es útil para:

- corregir ortografía y gramática (**Revisar ortografía y gramática**)
- hacer el texto más claro (**Mejorar claridad**)
- obtener varias reformulaciones distintas en una sola ejecución (**Versiones alternativas**)
- hacer el texto más formal o más informal (**Formal** / **Informal**)
- acortar o expandir el texto (**Acortar** / **Expandir**)
- hacer que el texto suene más técnico (**Hacer técnico**)

<br/>

> 💡 **CONSEJO**<br/>
> Cuando usas el modo "**Revisar ortografía y gramática**", aparece un interruptor **Mostrar cambios** en el panel de salida (junto a **Copiar**).
> Actívalo o desactívalo para mostrar u ocultar las correcciones específicas aplicadas a tu texto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformación

Usa **Transformación** cuando quieras que la IA siga un conjunto personalizado de instrucciones.

![Transform workspace](../images/screenshots/es/transform.png)

Esta es el área más flexible de la aplicación. Puedes usarla para tareas como:

- resumir notas
- convertir texto informal en un correo pulido
- extraer puntos clave
- convertir texto a un formato específico
- cualquier otra actividad personalizada con el texto de entrada

<br/>

<a id="run-an-existing-prompt"></a>
### Ejecutar un prompt existente

1. Abra **Transformación**.
2. Elija un prompt de la lista de prompts.
3. Si aparece un cuadro de **Destino** de idioma, elija un idioma si lo desea.
4. Escriba o pegue texto en **Entrada**.
5. Haga clic en **Transformación**.
6. Lea el resultado en **Salida**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Si aún no tiene prompts

Si su lista de prompts está vacía, haga clic en **Cargar prompts de ejemplo** en el área de trabajo Transformación. El mismo control siempre está disponible en [**Configuración** > **Prompts de transformación**](#transform-prompts) en la fila de exportación/importación. Ambos añaden ejemplos integrados para que pueda comenzar rápidamente.

<br/>

> ℹ️ **NOTA**<br/>
> Los prompts de ejemplo se proporcionan en inglés. Después de cargarlos, puede editar un prompt y usar **Traducir indicación** para traducirlo a su idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Crear un prompt rápidamente

La forma más rápida de crear un prompt es:

1. Haga clic en **Nuevo prompt**.
2. Haga clic en **Generar indicación**.
3. Describa lo que desea que haga el prompt.
4. Elija un modelo.
5. Deje que la aplicación cree un borrador para usted.
6. Revise el borrador y haga clic en **Guardar**.

![Generate prompt](../images/screenshots/es/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Editar un prompt

Cuando cree o edite un prompt, el editor aparece a la izquierda y un área de prueba aparece a la derecha.

![Transform prompt editor](../images/screenshots/es/transform-prompt-edit.png)

Los campos principales son:

- **Nombre del prompt**: el nombre que se muestra en la lista de prompts.
- **Instrucciones del prompt (opcional)**: una breve sugerencia mostrada al usuario al ejecutar el prompt.
- **Rol del modelo**: el rol general asignado a la IA, como 'Eres un asistente útil'.
- **Instrucciones del modelo (una por línea)**: las reglas específicas que desea que siga la IA.
- **Descripción de salida**: una palabra corta que describe el resultado, como 'resumen' o 'reescritura'.
- **Temperatura (0.0 → 1.0)**: cómo se comportará el modelo; véase a continuación.
- **Solicitar idioma de destino**: añade un selector de idioma de destino cuando se ejecuta el prompt.

Si el término técnico **Temperatura** es nuevo para usted, piénselo de esta manera:

- Una temperatura **más baja** da resultados más estables y predecibles.
- Una temperatura **más alta** da más variedad y creatividad.

También puede usar:

- **`Generar indicación`** para crear un nuevo borrador a partir de una descripción simple
- **`Mejorar prompt`** para perfeccionar un prompt existente
- **`Traducir indicación`** para traducir los campos del prompt

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> Haga clic en **`Guardar`** antes de hacer clic en **`Volver a Ejecutar`**. Si regresa sin guardar, se perderán sus cambios.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Probar un prompt antes de usarlo

El panel de prueba a la derecha le permite probar su prompt con texto de ejemplo antes de usarlo en el trabajo diario.

Esto es útil cuando:

- está creando un nuevo prompt
- está comparando dos versiones de un prompt
- desea verificar el tono, la longitud o el formato de salida

<br/>

> ℹ️ **NOTA**<br/>
> Puedes exportar e importar prompts guardados en [**Configuración** > **Prompts de transformación**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Panel

Utiliza **Panel** para ver cuánto estás usando la aplicación y cuál es su costo (para modelos de pago).

![Dashboard summary](../images/screenshots/es/dashboard-summary.png)

<br/>

> ℹ️ **NOTA**<br/>
> Si solo utilizas modelos **gratuitos**, las cantidades de **costo** pueden ser cero y los resúmenes centrados en costos pueden parecer vacíos. En **Resumen**, **Uso a lo largo del tiempo** y **Uso por modelo** aún se muestran los **números de llamadas** (traducir, reescribir y transformar) cuando hay actividad en el período seleccionado.

<br/>

<a id="filter-the-data"></a>
### Filtrar los datos

Utiliza los botones de filtro en la parte superior para cambiar el rango de tiempo.

![Dashboard filters](../images/screenshots/es/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtro **Usuario** solo es visible para los administradores en la versión web. Los usuarios regulares no verán este filtro, y no está disponible en la aplicación de escritorio.

<br/>

<a id="dashboard-tabs"></a>
### Pestañas del panel

- **Resumen** te ofrece una visión general del uso y costo. Incluye **Uso a lo largo del tiempo** (**conteo acumulativo** por día de llamadas para traducir, reescribir y transformar) y **Uso por modelo** (**llamadas totales por modelo**, incluyendo transformación).
- **Por uso** desglosa la actividad por idioma de traducción, modo de reescritura y prompt de transformación.
- **Por modelo** muestra qué modelos has utilizado y cuánto han costado.
- **Por día** muestra los totales diarios.
- **Todas las llamadas** muestra el historial completo de llamadas y te permite exportarlo.

<br/>

<a id="export-data"></a>
### Exportar datos

Las tablas del panel pueden exportar datos en:

- **JSON**
- **CSV**
- **XLSX**

Esto es útil si deseas revisar la actividad fuera de la aplicación o compartir un informe.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registros almacenados para un modelo

En **Por modelo** o **Todas las llamadas**, puedes eliminar los registros almacenados para un modelo haciendo clic en el ícono de "papelera".

> ⚠️ **ADVERTENCIA**<br/>
> La eliminación de registros almacenados no se puede deshacer. Úsalo solo si estás seguro de que ya no necesitas ese historial.

Para eliminar todos los datos o eliminar registros según su antigüedad, ve a [**Configuración** > **Seguimiento de costos**](#cost-tracking). Allí encontrarás opciones para eliminar todos los datos almacenados o solo los datos anteriores a una fecha determinada.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Historial

Haz clic en **Historial** para ver el historial de tus acciones dentro de **Transrewrt**, incluyendo la entrada y salida de cada operación.

![History page](../images/screenshots/es/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar los datos

**Historial** utiliza los mismos filtros que la página **Panel**. Úsalos para seleccionar el rango de tiempo.

![Dashboard filters](../images/screenshots/es/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtro **Usuario** solo es visible para los administradores en la versión web. Los usuarios regulares no verán este filtro, y no está disponible en la aplicación de escritorio.

<br/>

<a id="export-history-data"></a>
### Exportar datos del historial

La página de historial puede exportar los datos filtrados en:

- **JSON**
- **CSV**
- **XLSX**

Esto es útil si deseas revisar la actividad fuera de la aplicación o compartir un informe.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Configuración

Abre **Configuración** desde la barra lateral para personalizar el comportamiento de la aplicación.

Las pestañas disponibles dependen de la plataforma y tu rol:

| Pestaña               | Escritorio | Web (admin) | Web (usuario regular) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Configuración general  |   sí   |     sí     |        sí         |
  | Modelos            |   sí   |     sí     |        sí         |
  | Idiomas         |   sí   |     sí     |        sí         |
  | Seguimiento de costos     |   sí   |     sí     |         —          |
  | Prompts de transformación |   sí   |     sí     |        sí         |
  | Usuarios             |    —    |     sí     |         —          |
  | Configuración de API        |   sí   |     sí     |         —          |
  | Acerca de             |   sí   |     sí     |        sí         |

<br/>

> ℹ️ **NOTA**<br/>
> En la versión web, cada usuario tiene su propia configuración. Las configuraciones como modelos seleccionados, idiomas, opciones generales y prompts de transformación se almacenan por usuario. Los cambios que realices no afectan a otros usuarios.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Configuración general

Utiliza **Configuración general** para controlar el comportamiento al escribir, si se almacenan los detalles de ejecución para **Historial**, y la apariencia.

**Comportamiento**

- **Comportamiento para ENTER** elige si `Enter` ejecuta la tarea o inserta una nueva línea.
- **Traducir automáticamente al pegar** inicia la traducción tan pronto como pegues texto.
- **Copiar resultado al portapapeles automáticamente** copia los resultados exitosos automáticamente.
- **Traducción en tiempo real (mientras escribes)** traduce mientras escribes.
- **Tiempo de espera (ms)** establece el tiempo de espera para la traducción en tiempo real.

**Historial**

- **Mantener historial de ejecución** controla si cada traducción, reescritura y transformación almacenan **texto de entrada y salida** para la vista [**Historial**](#history) en la barra lateral. Desactivarlo solicita confirmación; si confirmas, el texto del historial almacenado se elimina de la base de datos.
- **Eliminar datos del historial** permite eliminar el texto almacenado por antigüedad (por ejemplo, más antiguo que unos meses, o **todos los datos (limpiar)**) usando **Eliminar datos**. Esto solo afecta al texto de ejecución guardado para la vista **Historial**; **no** elimina los totales de costo o uso. Para eliminar o reducir los datos de **costo**, utiliza [**Configuración** > **Seguimiento de costos**](#cost-tracking).

**Apariencia**

- **Mostrar información de costos en las acciones** controla la visualización del costo por operación (si está disponible) y el coste total en los paneles de salida de Traducir, Reescribir y Transformación.
- **Dígitos fraccionarios del costo** cambia cómo se muestran los decimales del costo.
- **Solo web:** **mostrar un margen alrededor de la app** añade espacio extra alrededor de la interfaz.
- **Familia de fuentes** cambia la fuente de escritura en los paneles de texto.
- **Tamaño** cambia el tamaño de la fuente.

**Copia de seguridad de configuración**

- **Incluir datos de uso en la copia de seguridad**: cuando está activado, el archivo ZIP también contiene el historial de ejecución y los datos de llamadas a la API.
- **Hacer copia de seguridad de la configuración**: crea un único archivo ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` en UTC por defecto) con `config.json`, `state.json`, clave de cifrado opcional, usuarios, preferencias, indicaciones personalizadas y datos de uso si se ha optado por incluirlos. Tras una copia de seguridad exitosa, la confirmación muestra el nombre del archivo guardado.
- **Restaurar desde copia de seguridad**: abre primero un **diálogo de confirmación**. Seleccione el archivo ZIP de copia de seguridad dentro del diálogo (**Examinar** / selector de archivos o arrastrar y soltar donde se admita), luego revise las opciones:
  - **Restaurar los datos de uso**: importa el historial y uso del ZIP cuando se realizó la copia de seguridad con los datos de uso incluidos; déjelo desactivado si solo desea configuraciones e indicaciones.
  - **Eliminar los datos de uso antiguos antes de restaurar**: elimina los datos de uso/historial existentes en esta instalación antes de aplicar la copia de seguridad (opcional; úselo cuando desee una sustitución limpia).

Las copias de seguridad creadas en la versión web o de escritorio se pueden restaurar en la otra. Al restaurar una copia de seguridad de escritorio en la versión web, los datos se restaurarán al usuario administrador.

<br/>

<a id="models"></a>
### Modelos

Use **Configuración** > **Modelos** para elegir qué modelos aparecen en la barra de herramientas.

![Settings Models tab](../images/screenshots/es/settings-models.png)

La página tiene dos listas:

- **Modelos disponibles** a la izquierda
- **Modelos seleccionados** a la derecha

Los controles útiles incluyen:

- **Buscar modelos...** para encontrar un modelo por nombre
- Fichas de **Proveedor** para reducir la lista a un motor (OpenRouter, OpenAI, Ollama, …)
- **Solo gratuitos** para mostrar solo modelos gratuitos
- **Actualizar** para recargar la lista
- **Expandir todo** y **Contraer todo** cuando esté ordenando por proveedor

Los identificadores de modelo incluyen el prefijo del proveedor (por ejemplo `openrouter/…` frente a `openai/…`). Las insignias como **OpenAI (OpenRouter)** frente a **OpenAI (directo)** muestran cómo se enruta el tráfico.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) es un modelo enrutador, no un modelo de chat general: su respuesta es JSON que describe los cuerpos de solicitud de la API de OpenRouter (por ejemplo, un array `requests` con `model` y `messages`). Si lo usa para **Traducir**, **Reescribir** o **Transformar**, el panel de salida mostrará ese JSON en lugar del texto finalizado. Elija un modelo de texto normal para esas tareas. Consulte la [página del modelo Body Builder](https://openrouter.ai/openrouter/bodybuilder) en OpenRouter.

Acciones:

- Para añadir un modelo, haga clic en **Añadir** o en cualquier parte de la entrada.

- Para eliminar un modelo, haga clic en **X** junto a él en **Modelos seleccionados** o en **Seleccionado** en la entrada de Modelos disponibles.

- Para limpiar la lista, haga clic en **Deseleccionar todo**. El modelo gratuito obligatorio permanecerá en la lista.

<br/>

> ℹ️ **NOTA**<br/>
> Si no desea añadir créditos a OpenRouter de inmediato, comience activando **Solo gratuitos** y eligiendo los modelos gratuitos (no se requiere tarjeta de crédito). También puede usar Ollama para ejecutar modelos localmente sin ninguna clave de API.

<br/>

<a id="languages"></a>
### Idiomas

Use **Configuración** > **Idiomas** para organizar las listas de idiomas utilizadas en la app.

- Los **idiomas principales** se fijan cerca de la parte superior de las listas de idiomas en **Traducir** y **Transformación**.
- El **idioma personalizado** te permite añadir un idioma que no está en la lista integrada.

Si añades un idioma personalizado, este aparecerá en los selectores de idioma junto con las opciones integradas.

<br/>

<a id="cost-tracking"></a>
### Seguimiento de costos

Utiliza **Configuración** > **Seguimiento de costos** para gestionar la información de costos.

- **Coste total** muestra el total acumulado.
- **Copiar valor** copia el total al portapapeles.
- **Restablecer coste** restablece el total almacenado a cero.
- **Sincronizar con uso de clave API** ajusta el total para que coincida con el uso informado por tu cuenta de OpenRouter (solo OpenRouter).
- **Uso de clave API** muestra los detalles de uso de OpenRouter, si están disponibles.
- **Eliminar datos de costos** elimina todos los datos, o solo las entradas anteriores a una fecha seleccionada.

**Seguimiento de costos:** Cuando utilizas modelos de OpenRouter, la aplicación muestra tu uso real y gastos basados en la información de costos de OpenRouter. Para todos los demás proveedores, la aplicación estima los costos utilizando los precios publicados por OpenRouter; si no hay un precio disponible, la estimación puede ser cero.

<br/>

> ℹ️ **NOTA**<br/>
>  Todos los importes son estimaciones solo para tu referencia, no son facturas oficiales.

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> La eliminación de datos no se puede deshacer. Antes de eliminar, asegúrate de hacer una copia de seguridad de tus datos o exportarlos mediante [**Historial**](#history)
> o [**Panel** > **Todas las llamadas**](#dashboard-tabs), de lo contrario se perderán permanentemente.
> Todo el historial de entrada/salida relacionado con cada entrada de llamada API también será eliminado.

<br/>

<a id="transform-prompts"></a>
### Prompts de transformación

Utiliza **Configuración** > **Prompts de transformación** para gestionar los prompts en bloque.

Puedes:

- revisar tus prompts guardados
- eliminar prompts
- importar prompts desde un archivo
- exportar prompts para copia de seguridad o compartir
- cargar prompts de ejemplo en la lista de prompts

<br/>

<a id="users"></a>
### Usuarios

Utiliza **Usuarios** para gestionar cuentas de usuario en la versión web. Puedes añadir usuarios, actualizar sus datos, restablecer contraseñas y eliminar cuentas.

<br/>

<a id="api-config"></a>
### Configuración de API

Los proveedores compatibles son: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras y **Ollama** (modelos locales mediante una URL base). Solo necesitas configurar los proveedores que utilices.

**Aplicación web: solo administrador**

Las claves API se configuran mediante variables de entorno del sistema o de Docker; no se introducen en la interfaz web. Esta página muestra qué proveedores tienen una clave configurada y te permite probar cada uno haciendo clic en el botón **`Probar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Para cambiar una clave API, actualiza la variable de entorno en tu configuración del sistema o de Docker y reinicia el servidor o contenedor.

> ℹ️ **NOTA**<br/>
> Las **copias de seguridad de configuración** (véase [**Configuración general** → Copia de seguridad de configuración](#general-settings)) pueden incluir claves de proveedor **resueltas** dentro del archivo `config.json` del ZIP. Restaurar ese ZIP **no** copia esas claves de vuelta al archivo de configuración persistente del servidor — las claves activas siguen proveniendo del entorno y del estado del archivo existente, tal como se describe allí.

<br/>

**Aplicación de escritorio**

Utilice **Configuración de API** para almacenar las claves API de cada proveedor que utilice. Para Ollama, introduzca la **URL base** en lugar de una clave API.

<br/>

> 💡 **Consejo** <br/>
> Si no desea utilizar una clave API ni pagar por el uso, puede [descargar Ollama](https://ollama.com) y ejecutar modelos (como `translategemma:4b`) localmente en su máquina de forma gratuita. Alternativamente, puede crear una cuenta gratuita en OpenRouter (sin necesidad de tarjeta de crédito) para usar sus modelos gratuitos, o obtener una clave API gratuita de Cerebras, Google, Groq o Mistral AI.

<br/>

- Añada únicamente los proveedores que necesite. En **Configuración** > **Modelos**, cada ID de modelo comienza con el nombre del proveedor (por ejemplo `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para añadir una clave API, introduzca el valor en el campo de texto y haga clic en **`Guardar`**. Para reemplazar una clave existente, haga clic en **`Editar`**. Para verificar que una clave funciona, haga clic en **`Probar`**. Para la URL base de Ollama, haga siempre clic en **`Probar`** para comprobar la conexión.

<br/>

> ℹ️ **NOTA**<br/>
> No puede ver el valor actual de una clave API. Solo puede reemplazarla utilizando el botón **`Editar`**.
> Las claves API se almacenan cifradas en la configuración.

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
### La aplicación no traduce, reescribe ni transforma el texto

Compruebe que:

- haya seleccionado un modelo en la barra de herramientas
- al menos un modelo esté listado en [**Configuración** > **Modelos**](#models)
- su configuración de API esté funcionando

Si está utilizando la aplicación de escritorio:

1. Abra [**Configuración** > **Configuración de API**](#api-config).
2. Compruebe que al menos una clave API esté guardada.
3. Haga clic en **Probar** junto al proveedor para confirmar que la clave funcione.

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
### El resultado es demasiado lento o demasiado costoso

Prueba una o más de estas opciones:

- elegir un modelo diferente
- usar una entrada más corta
- desactivar la **Traducción en tiempo real (mientras escribes)** en [**Configuración** > **Configuración general**](#general-settings)
- usar modelos gratuitos para tareas simples (ver [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### La interfaz está en el idioma incorrecto

Haz clic en el icono del globo terráqueo en la [barra de herramientas](#toolbar) y selecciona tu **Idioma de la interfaz** preferido.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### El texto es demasiado pequeño o difícil de leer

Abre [**Configuración** > **Configuración general**](#general-settings) y cambia:

- **Familia de fuentes**
- **Tamaño**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Los gráficos del Panel están vacíos

Esto es normal si:

- solo usas **modelos gratuitos** y estás viendo cifras de **costo** (pueden ser cero); los gráficos de cantidad de llamadas en **Resumen** aún necesitan datos del período seleccionado
- el **filtro de tiempo** seleccionado no cubre el período en que se realizaron las llamadas; prueba con **Todo** para verificar

Si los gráficos siguen vacíos después de seleccionar **Todo**, confirma que las llamadas aparezcan en [**Historial**](#history) o en la pestaña **Todas las llamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### El costo muestra "no disponible" o parece incorrecto

Cuando usas modelos a través de **OpenRouter**, la aplicación muestra tu gasto real reportado por OpenRouter.

Para **otros proveedores** (OpenAI directo, Anthropic directo, etc.), el costo se estima a partir de los datos de precios publicados por OpenRouter. Si no se encuentra un precio coincidente para un modelo, el costo aparecerá como **no disponible** y no se sumará a tu total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### El costo total no coincide con mi factura del proveedor

Todas las cifras de costo en la aplicación son **estimaciones solo para referencia**, no son estados de facturación oficiales.

Para acercar el total a tu gasto real en OpenRouter, abre [**Configuración** > **Seguimiento de costos**](#cost-tracking) y haz clic en **Sincronizar con uso de clave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La página Historial falta en la barra lateral

**Mantener historial de ejecución** puede estar desactivado. Abra [**Configuración** > **Configuración general**](#general-settings) y actívelo. Tenga en cuenta que activarlo no restaura los datos del historial eliminados previamente.

<br/>

<a id="web-app-session-expired"></a>
### Aplicación web: redirigido inesperadamente a la página de inicio de sesión

Es posible que su sesión haya expirado. Vuelva a iniciar sesión. Si ocurre con frecuencia, revise la configuración del servidor relacionada con la duración de la sesión.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Administrador web: olvidó o perdió la contraseña

Esto se aplica a la **aplicación web autohospedada** (Docker), no a la aplicación de escritorio (Electron).

- Si otro administrador aún puede iniciar sesión, puede abrir [**Configuración** > **Usuarios**](#users), seleccionar la cuenta y establecer una **nueva contraseña** allí.
- Si está **bloqueado** pero tiene **acceso shell** a la máquina o contenedor, restablezca la contraseña con la herramienta incluida en la imagen (reemplace `transrewrt` si cambió el nombre predeterminado, y entre comillas la contraseña si contiene espacios o caracteres especiales):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

El nombre de usuario predeterminado del administrador es `admin` si nunca ha creado otras cuentas. Cuando se pasa solo un argumento, este se trata como la nueva contraseña para `admin`.

Si ejecuta la aplicación desde una **copia local del código fuente** en lugar de Docker, use:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

El script actualiza el registro del usuario en la base de datos SQLite (y puede crear el usuario `admin` si falta). Tras restablecer la contraseña, inicie sesión con la nueva contraseña.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### El panel no muestra datos de otros usuarios (web)

Solo los **administradores** pueden ver los datos de todos los usuarios mediante el filtro **Usuario**. Por diseño, los usuarios regulares solo ven su propia actividad.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Cambié un prompt y perdí los cambios

Al editar un prompt, haga clic siempre en **Guardar** antes de hacer clic en **Volver a Ejecutar**.

<br/><br/>

<a id="quick-tips"></a>
## Consejos rápidos

- Comience con [**Traducir**](#translate) para asegurarse de que su configuración funcione antes de pasar a [**Reescribir**](#rewrite) o [**Transformar**](#transform).
- Use [**Reescribir**](#rewrite) para mejorar el texto en tareas cotidianas.
- Use [**Transformar**](#transform) cuando necesite un flujo de trabajo repetible para una tarea específica.
- Use [**Panel**](#dashboard) si desea supervisar el uso y el costo.
- Use [**Historial**](#history) para revisar operaciones anteriores y su texto completo de entrada/salida.
- Exporte los prompts regularmente si está creando una biblioteca de prompts que desea conservar (consulte [Prompts de transformación](#transform-prompts)) o si desea compartirla con otros.

<br/><br/>

<a id="disclaimer"></a>
## Descargo de responsabilidad

Los nombres de productos e iconos pertenecen a sus respectivos propietarios y se utilizan solo con fines de identificación. Este software no está afiliado ni respaldado por ninguna de las marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licencia

Derechos de autor © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)
