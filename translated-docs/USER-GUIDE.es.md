---
translated_at: "2026-03-15T22:28:10.651Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Guía de Usuario de Transrewrt

<br />

<a id="introduction"></a>
## Introducción

Transrewrt te ayuda a trabajar con texto de tres maneras principales:

- **Traducir** - convierte texto de un idioma a otro.
- ** Reescribir** - reformula texto en un estilo diferente, como más claro, más corto o más formal.
- **Transformar** - procesa texto utilizando instrucciones personalizadas de IA llamadas prompts.

<br />

Esta guía explica cómo usar la aplicación una vez que esté instalada y en ejecución. Para los pasos de instalación, consulta el [README](../README.md) principal.

<br />

> ℹ️ **NOTA**<br/>
> Transrewrt está disponible como aplicación de escritorio para Windows y Linux, y como aplicación web auto-alojada. Esta guía se centra en el uso diario de la aplicación. Cuando algo aplique solo a una versión, se indicará claramente.

<small>**Leer en otros idiomas:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Índice** 

- [Antes de empezar](#antes-de-empezar)
  - [Cómo obtener una clave API (aplicación de escritorio)](#cómo-obtener-una-clave-api-aplicación-de-escritorio)
- [Primeros pasos](#primeros-pasos)
- [Partes principales de la ventana](#partes-principales-de-la-ventana)
  - [Barra lateral](#barra-lateral)
  - [Barra de herramientas](#barra-de-herramientas)
  - [Paneles de entrada y salida](#paneles-de-entrada-y-salida)
- [Traducir](#traducir)
  - [Traducir texto](#traducir-texto)
  - [Selección de idiomas](#selección-de-idiomas)
  - [Configuraciones de traducción útiles](#configuraciones-de-traducción-útiles)
  - [Atajos de teclado](#atajos-de-teclado)
- [Reescribir](#reescribir)
  - [Reescribir texto](#reescribir-texto)
- [Transformar](#transformar)
  - [Ejecutar un prompt existente](#ejecutar-un-prompt-existente)
  - [Si aún no tienes prompts](#si-aún-no-tienes-prompts)
  - [Crear un prompt rápidamente](#crear-un-prompt-rápidamente)
  - [Editar un prompt](#editar-un-prompt)
  - [Probar un prompt antes de usarlo](#probar-un-prompt-antes-de-usarlo)
  - [Gestionar prompts guardados](#gestionar-prompts-guardados)
- [Panel de control](#panel-de-control)
  - [Filtrar los datos](#filtrar-los-datos)
  - [Pestañas del panel de control](#pestañas-del-panel-de-control)
  - [Exportar datos](#exportar-datos)
  - [Eliminar registros almacenados para un modelo](#eliminar-registros-almacenados-para-un-modelo)
- [Configuración](#configuración)
  - [Configuración general](#configuración-general)
  - [Modelos](#modelos)
  - [Idiomas](#idiomas)
  - [Seguimiento de costes](#seguimiento-de-costes)
  - [Prompts de transformación](#prompts-de-transformación)
  - [Usuarios](#usuarios)
  - [Configuración de API](#configuración-de-api)
  - [Acerca de](#acerca-de)
- [Problemas comunes](#problemas-comunes)
  - [La aplicación no traduce, reescribe ni transforma texto](#la-aplicación-no-traduce-reescribe-ni-transforma-texto)
  - [La lista de modelos está vacía](#la-lista-de-modelos-está-vacía)
  - [El resultado es demasiado lento o demasiado caro](#el-resultado-es-demasiado-lento-o-demasiado-caro)
  - [La interfaz está en el idioma equivocado](#la-interfaz-está-en-el-idioma-equivocado)
  - [El texto es demasiado pequeño o difícil de leer](#el-texto-es-demasiado-pequeño-o-difícil-de-leer)
  - [Cambié un prompt y perdí las ediciones](#cambié-un-prompt-y-perdí-las-ediciones)
- [Consejos rápidos](#consejos-rápidos)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="antes-de-empezar"></a>

## Antes de empezar

Para usar Transrewrt, necesitas acceso al servicio de IA a través de OpenRouter.

No necesitas elegir un modelo de pago antes de empezar. La aplicación siempre incluye un modelo **gratuito** integrado, por lo que para un uso normal es suficiente para comenzar a traducir, reescribir y transformar texto.

En lenguaje sencillo:

- Un **modelo** es el motor de IA que realiza el trabajo.
- Una **clave API** es tu credencial de acceso personal para ese servicio.

Si estás usando la **aplicación de escritorio**, necesitarás una clave API. Para pasos detallados, consulta [Cómo obtener una clave API](#how-to-get-an-api-key-desktop-app) a continuación. En resumen: crea una cuenta en [OpenRouter](https://openrouter.ai), abre la página [Keys](https://openrouter.ai/keys), crea una nueva clave y pégala en [**Configuración** > **Configuración de API**](#api-config) en Transrewrt.

Si estás usando la **versión web**, el propietario del servidor normalmente lo configura por ti, por lo que normalmente no necesitarás introducir una clave API tú mismo.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cómo obtener una clave API (aplicación de escritorio)

Si estás usando la aplicación de escritorio, sigue estos pasos:

1. Ve a [OpenRouter](https://openrouter.ai) en tu navegador web.
2. Crea una cuenta o inicia sesión.
3. Abre la página [Keys](https://openrouter.ai/keys).
4. Haz clic en el botón para crear una nueva clave API.
5. Asigna un nombre a la clave para que puedas reconocerla más tarde.
6. Copia la nueva clave API.
7. Vuelve a Transrewrt y abre **Configuración** > **Configuración de API**.
8. Pega la clave en **Clave API de OpenRouter**.
9. Haz clic en **Probar configuración de API** para asegurarte de que funciona.

> ℹ️ **NOTA**<br/>
> Puedes empezar con la ruta gratuita de OpenRouter o con cualquiera de los otros modelos gratuitos disponibles. En muchos casos, eso es suficiente para comenzar a usar Transrewrt sin elegir un modelo de pago.

<br /><br />

<a id="getting-started"></a>
## Primeros pasos

Si es la primera vez que usas Transrewrt, sigue este orden:

1. Abre la aplicación.
2. Elige tu **Idioma de la interfaz** desde el icono del globo si es necesario.
3. Si estás en la **aplicación de escritorio**, abre [**Configuración** > **Configuración de API**](#api-config), pega tu clave API de OpenRouter y haz clic en **Probar configuración de API**.
4. Abre [**Configuración** > **Modelos**](#models) y añade uno o más modelos a **Modelos seleccionados**.
5. Abre [**Configuración** > **Idiomas**](#languages) y elige tus **Idiomas principales** si quieres que tus idiomas más usados aparezcan primero.
6. Ve a **Traducir** y ejecuta una traducción sencilla para confirmar que todo funciona.
7. Una vez que funcione, prueba **Reescribir** y luego **Transformar**.

Este orden es importante. Evita el problema más común en el primer uso: intentar ejecutar una tarea antes de que la aplicación tenga una conexión API funcional o un modelo seleccionado.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Partes principales de la ventana

La aplicación está dividida en tres áreas principales:

- La **barra lateral** a la izquierda.
- La **barra de herramientas** en la parte superior.
- El **área de trabajo** en el centro.

<br />

<a id="sidebar"></a>
### Barra lateral

Usa la barra lateral para moverte por la aplicación:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/es/sidebar.png" alt="Barra lateral de la aplicación" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Traducir</strong> abre el espacio de trabajo de traducción.</li>
        <li><strong>Reescribir</strong> abre el espacio de trabajo de reescritura.</li>
        <li><strong>Transformar</strong> abre el espacio de trabajo de prompts personalizados.</li>
        <li><strong>Panel</strong> muestra información de uso y costos.</li>
        <li><strong>Configuración</strong> abre el panel de configuración.</li>
        <li><strong>Usuario</strong> muestra el nombre de usuario del usuario que ha iniciado sesión (solo web).</li>
      </ul>
      <br />
      <p>También puedes contraer la barra lateral para obtener más espacio haciendo clic en el icono junto al logotipo de la aplicación.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Barra de herramientas

La barra de herramientas cambia ligeramente dependiendo de dónde estés en la aplicación.

- A la izquierda, muestra el nombre de la página actual.
- A la derecha, muestra el **selector de modelo** y el control de **Idioma de la interfaz**.

El **selector de modelo** te permite elegir qué motor de IA usar para la tarea actual.

  ![Selector de modelo](../images/screenshots/es/model-selector.png)

> ℹ️ **NOTA**<br/>
> Algunos modelos gratuitos pueden dejar de funcionar temporalmente si no están disponibles o han alcanzado un límite de uso. Si eso sucede, la aplicación eliminará automáticamente ese modelo de tu lista.

El **icono del globo + código de idioma** cambia el idioma de la interfaz de la aplicación, como menús y botones. No cambia los idiomas de traducción utilizados en **Traducir**.

  ![Selector de idioma de la interfaz](../images/screenshots/es/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Paneles de entrada y salida

La mayoría de los espacios de trabajo utilizan un panel de **Entrada** a la izquierda y un panel de **Salida** a la derecha.

El panel **Entrada** muestra:

- Recuento de caracteres
- Recuento de palabras
- Recuento de párrafos

El panel **Salida** puede mostrar:

- Cuánto tiempo tomó la tarea
- El coste de esa tarea
- Tu coste total acumulado
- **TPS** (tokens por segundo), que es una medida simple de velocidad
- Recuentos de caracteres, palabras y párrafos
- El modelo utilizado

Si te preguntas sobre los términos técnicos:

- **Token** significa un pequeño fragmento de texto. Puedes pensarlo como parte de una palabra o una palabra corta.
- **TPS** significa cuántos de esos fragmentos de texto procesó el modelo por segundo.

<br /><br />

<a id="translate"></a>
## Traducir

Usa **Traducir** cuando quieras convertir texto de un idioma a otro.

![Espacio de trabajo Traducir](../images/screenshots/es/translate.png)

<br />

<a id="translate-text"></a>
### Traducir texto

1. Abre **Traducir**.
2. Elige un idioma en **De**.
3. Elige un idioma en **A**.
4. Elige un modelo en la barra de herramientas.
5. Escribe o pega texto en **Entrada**.
6. Haz clic en **Traducir**.
7. Lee el resultado en **Salida**.
8. Usa el botón de copiar si quieres copiar el resultado.

<br />

<a id="language-selection"></a>
### Selección de idioma

- **De** puede ser un idioma específico o **Detectar idioma**.
- **A** es el idioma en el que quieres el resultado.

Tus **Idiomas principales** seleccionados aparecen en la parte superior de la lista. Puedes configurarlos en [**Configuración** > **Idiomas**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Ajustes de traducción útiles

En [**Configuración** > **Ajustes generales**](#general-settings), puedes cambiar cómo se comporta la traducción:

- **Traducir automáticamente al pegar** ejecuta una traducción tan pronto como pegas texto.
- **Copiar automáticamente el resultado al portapapeles** copia el resultado automáticamente después de una ejecución exitosa.
- **Traducción en tiempo real (mientras se escribe)** ejecuta traducciones mientras escribes.
- **Tiempo de espera (ms)** controla cuánto tiempo la aplicación espera antes de ejecutar una traducción en tiempo real.

<br />

<a id="keyboard-shortcuts"></a>
### Atajos de teclado

En [**Configuración** > **Ajustes generales**](#general-settings), **Comportamiento de ENTER** controla qué sucede cuando presionas Enter:

- **Enter** puede ejecutar la tarea y **Shift+Enter** puede añadir una nueva línea.
- O la aplicación puede hacer lo contrario.

El atajo actual también se muestra en el botón **Traducir**.

<br /><br />

<a id="rewrite"></a>
## Reescribir

Usa **Reescribir** cuando quieras mejorar la redacción sin cambiar el significado principal.

![Espacio de trabajo Reescribir](../images/screenshots/es/rewrite.png)

Esto es útil para:

- corregir ortografía y gramática
- hacer el texto más claro
- hacer el texto más formal o más informal
- acortar o ampliar texto
- hacer que el texto suene más técnico

<br />

<a id="rewrite-text"></a>
### Reescribir texto

1. Abre **Reescribir**.
2. Elige un **Modo**.
3. Elige un modelo en la barra de herramientas.
4. Escribe o pega texto en **Entrada**.
5. Haz clic en **Reescribir**.
6. Revisa el resultado en **Salida**.

El mismo comportamiento de la tecla Enter descrito en [**Traducir**](#keyboard-shortcuts) también se aplica aquí.

<br /><br />

<a id="transform"></a>
## Transformar

Usa **Transformar** cuando quieras que la IA siga un conjunto personalizado de instrucciones.

![Espacio de trabajo Transformar](../images/screenshots/es/transform.png)

Esta es el área más flexible de la aplicación. Puedes usarla para tareas como:

- resumir notas
- convertir texto aproximado en un correo electrónico pulido
- extraer puntos clave
- convertir texto en un formato específico

<br />

<a id="run-an-existing-prompt"></a>
### Ejecutar un mensaje existente

1. Abre **Transformar**.
2. Elige un mensaje de la lista de mensajes.
3. Si aparece un cuadro de idioma **Objetivo**, elige un idioma si lo deseas.
4. Escribe o pega texto en **Entrada**.
5. Haz clic en **Transformar**.
6. Lee el resultado en **Salida**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Si aún no tienes mensajes

Si tu lista de mensajes está vacía, haz clic en **Cargar mensajes de ejemplo**. Esto añade ejemplos incorporados para que puedas comenzar rápidamente.

> ℹ️ **NOTA**<br/>
> Los mensajes de ejemplo se proporcionan en inglés. Después de cargarlos, puedes editar un mensaje y usar **Traducir mensaje** si quieres adaptar el texto del mensaje para otro idioma.

<br />

<a id="create-a-prompt-quickly"></a>

### Crear un prompt rápidamente

La forma más rápida de crear un prompt es:

1. Haz clic en **Nuevo prompt**.
2. Haz clic en **Generar prompt**.
3. Describe lo que quieres que haga el prompt.
4. Elige un modelo.
5. Deja que la aplicación cree un borrador para ti.
6. Revisa el borrador y haz clic en **Guardar**.

![Generar prompt](../images/screenshots/es/transform-generate.png)


<br />

### Editar un prompt

Cuando creas o editas un prompt, el editor aparece a la izquierda y un área de prueba aparece a la derecha.

![Editor de transform prompt](../images/screenshots/es/transform-prompt-edit.png)

Los campos principales son:

- **Nombre del prompt**: el nombre que se muestra en la lista de prompts.
- **Instrucciones del prompt (opcional)**: una pista breve que se muestra al usuario al ejecutar el prompt.
- **Rol del modelo**: el rol general asignado a la IA, como 'Eres un asistente útil.'
- **Instrucciones del modelo (una por línea)**: las reglas específicas que quieres que siga la IA.
- **Descripción de la salida**: una palabra corta que describe el resultado, como 'resumen' o 'reescritura'.
- **Temperatura (0.0 → 1.0)**: un control deslizante de creatividad.
- **Solicitar idioma de destino**: añade un selector de idioma de destino al ejecutar el prompt.

Si el término técnico **Temperatura** es nuevo para ti, piensa en ello así:

- Una **temperatura más baja** da resultados más estables y predecibles.
- Una **temperatura más alta** da más variedad y creatividad.

También puedes usar:

- **`Generar prompt`** para crear un nuevo borrador a partir de una descripción simple
- **`Mejorar prompt`** para refinar un prompt existente
- **`Traducir prompt`** para traducir los campos del prompt

> ⚠️ **ADVERTENCIA**<br/>
> Haz clic en **`Guardar`** antes de hacer clic en **`Volver a ejecutar`**. Si vuelves sin guardar, tus cambios se perderán.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Probar un prompt antes de usarlo

El panel de prueba de la derecha te permite probar tu prompt con texto de ejemplo antes de usarlo en el trabajo diario.

Esto es útil cuando:

- estás creando un nuevo prompt
- estás comparando dos versiones de un prompt
- quieres comprobar el tono, la longitud o el formato de salida

<br />

<a id="manage-saved-prompts"></a>
### Gestionar prompts guardados

Para gestionar los prompts guardados en un solo lugar, abre [**Configuración** > **Transform Prompts**](#transform-prompts).

Allí puedes:

- listar y eliminar tus prompts
- exportar prompts como **JSON**, **CSV** o **XLSX**
- importar prompts desde un archivo

<br /><br />

## Panel

Usa el **Panel** para ver cuánto estás usando la aplicación y cuánto te está costando.

![Resumen del panel](../images/screenshots/es/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Filtrar los datos

Usa los botones de filtro en la parte superior para cambiar el intervalo de tiempo.

![Filtros del panel](../images/screenshots/es/dashboard-filter.png)

> ℹ️ **INFORMACIÓN**<br/>
> En la versión web, los administradores también pueden ver un filtro de **Usuario**. Esto les permite cambiar entre **Todos los usuarios** y un usuario individual.

<br />

<a id="dashboard-tabs"></a>
### Pestañas del panel

- **Resumen** te da una visión general del uso y el coste.
- **Por uso** desglosa la actividad por idioma de traducción, modo de reescritura y transform prompt.
- **Por modelo** muestra qué modelos has usado y cuánto han costado.
- **Por día** muestra totales diarios.
- **Todas las llamadas** muestra el historial completo de llamadas y permite exportarlo.

<br />

<a id="export-data"></a>
### Exportar datos

Las tablas del panel pueden exportar datos en:

- **JSON**
- **CSV**
- **XLSX**

Esto es útil si quieres revisar la actividad fuera de la aplicación o compartir un informe.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registros almacenados de un modelo

En **Por modelo** o **Todas las llamadas**, puedes eliminar registros almacenados de un modelo.

> ⚠️ **ADVERTENCIA**<br/>
> La eliminación de registros almacenados no se puede deshacer. Usa esto solo si estás seguro de que ya no necesitas ese historial.

Para eliminar todos los datos o eliminar registros según su antigüedad, ve a [**Configuración** > **Seguimiento de costes**](#cost-tracking). Allí encontrarás opciones para eliminar todos los datos almacenados o solo los datos anteriores a una fecha determinada.

<br /><br />

<a id="settings"></a>
## Configuración

Abre **Configuración** desde la barra lateral para personalizar el comportamiento de la aplicación.

Las pestañas disponibles pueden variar:

- **Configuración de API** solo está disponible en la aplicación de escritorio.
- **Usuarios** solo está disponible en la aplicación web, y solo para administradores.

<br />

<a id="general-settings"></a>

### Configuración general

Utilice **Configuración General** para controlar el comportamiento de escritura y la apariencia.

**Comportamiento**

- **Comportamiento de ENTER** elige si Intro ejecuta la tarea o inserta una nueva línea.
- **Traducir automáticamente al pegar** inicia la traducción tan pronto como pegue texto.
- **Copiar resultado automáticamente al portapapeles** copia los resultados exitosos automáticamente.
- **Traducción en tiempo real (mientras escribe)** traduce mientras escribe.
- **Tiempo de espera (ms)** establece el tiempo de espera para la traducción en tiempo real.

**Apariencia**

- **Dígitos decimales de coste** cambia cómo se muestran los decimales del coste.
- **Familia de fuentes** cambia la fuente de escritura en los paneles de texto.
- **Tamaño** cambia el tamaño de la fuente.
- **Solo web:** **mostrar un margen alrededor de la aplicación** añade espacio extra alrededor de la interfaz.

<br />

<a id="models"></a>
### Modelos

Utilice **Configuración** > **Modelos** para elegir qué modelos aparecen en la barra de herramientas.

![Pestaña Modelos de Configuración](../images/screenshots/es/settings-models.png)

La página tiene dos listas:

- **Modelos Disponibles** a la izquierda
- **Modelos Seleccionados** a la derecha

Los controles útiles incluyen:

- **Buscar modelos...** para encontrar un modelo por nombre
- **Solo gratuitos** para mostrar solo modelos gratuitos
- **Actualizar** para recargar la lista
- **Expandir Todo** y **Contraer Todo** cuando está ordenando por proveedor

Para añadir un modelo, haga clic en **Añadir**.

Para eliminar un modelo, haga clic en la **X** junto a él en **Modelos Seleccionados**.

Para borrar la lista, haga clic en **Deseleccionar todo**. El modelo gratuito requerido permanecerá en la lista.

> ℹ️ **NOTA**<br/>
> Si no quiere añadir créditos a OpenRouter inmediatamente, empiece habilitando **Solo gratuitos** y eligiendo los modelos gratuitos.

<br />

<a id="languages"></a>
### Idiomas

Utilice **Configuración** > **Idiomas** para organizar las listas de idiomas utilizadas en la aplicación.

- **Idiomas principales** están anclados cerca de la parte superior de las listas de idiomas en **Traducir** y **Transformar**.
- **Idioma personalizado** le permite añadir un idioma que no está en la lista integrada.

Si añade un idioma personalizado, aparece en los selectores de idioma junto a las opciones integradas.

<br />

<a id="cost-tracking"></a>
### Seguimiento de costes

Utilice **Configuración** > **Seguimiento de Costes** para gestionar la información de costes.

- **Coste Total** muestra el total acumulado.
- **Copiar Valor** copia el total al portapapeles.
- **Reiniciar Coste** restablece el total almacenado a cero.
- **Sincronizar con uso de clave API** establece el total para que coincida con el uso informado por OpenRouter.
- **Uso de Clave API** muestra los detalles de uso, si están disponibles.
- **Borrar datos de coste** elimina todos los datos, o solo las entradas anteriores a una fecha seleccionada.

> ⚠️ **ADVERTENCIA**<br/>
> La eliminación de datos no se puede deshacer. Antes de borrar, asegúrese de hacer una copia de seguridad de sus datos o exportarlos a través de [**Panel de Control** > **Todas las Llamadas**](#dashboard-tabs), de lo contrario se perderán permanentemente.

<br />

<a id="transform-prompts"></a>
### Transformar prompts

Utilice **Configuración** > **Transformar Prompts** para gestionar prompts en lote.

Puede:

- revisar sus prompts guardados
- eliminar prompts
- importar prompts desde un archivo
- exportar prompts para copia de seguridad o compartir

<br />

<a id="users"></a>
### Usuarios

**Solo web - solo administrador**

Utilice **Usuarios** para gestionar cuentas de usuario en la versión web. Puede añadir usuarios, actualizar sus detalles, restablecer contraseñas y eliminar cuentas.

<br />

<a id="api-config"></a>
### Configuración API

**Solo escritorio**

Utilice **Configuración API** para conectar la aplicación de escritorio a OpenRouter o a un proxy Transrewrt.

- **Clave API de OpenRouter** es donde pega su clave.
- **URL API** es la dirección del servicio. Déjelo en el valor predeterminado a menos que le hayan dado uno diferente.
- **Usar Proxy Transrewrt** enruta las solicitudes a través de un servicio proxy en lugar de directamente a OpenRouter.
- **Semilla de Clave** aparece cuando la opción proxy está habilitada.
- **Probar Configuración API** comprueba si la configuración actual está funcionando.

Para obtener pasos detallados sobre cómo obtener su clave API, consulte [Cómo obtener una clave API](#how-to-get-an-api-key-desktop-app) anteriormente.

> ℹ️ **NOTA**<br/>
> Si no está seguro de lo que significan **URL API**, **Usar Proxy Transrewrt** o **Semilla de Clave**, déjelos sin cambios y use la configuración predeterminada de OpenRouter. Más información sobre el proxy está disponible en el [repositorio de Proxy Transrewrt](https://github.com/wsj-br/transrewrt-proxy).


<br />

<a id="about"></a>

### Acerca de

La pestaña **Acerca de** muestra:

- el nombre de la aplicación
- el número de versión
- la fecha de compilación
- un enlace al repositorio del proyecto

<br /><br />

<a id="common-issues"></a>
## Problemas comunes

Si algo no funciona como se espera, compruebe primero los siguientes puntos.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### La aplicación no traducirá, reescribirá ni transformará texto

Compruebe que:

- ha seleccionado un modelo en la barra de herramientas
- al menos un modelo aparece en [**Configuración** > **Modelos**](#models)
- su configuración de API funciona

Si está utilizando la aplicación de escritorio:

1. Abra [**Configuración** > **Config. de API**](#api-config).
2. Compruebe que su clave de API está guardada.
3. Haga clic en **Probar configuración de API**.

<br />

<a id="the-model-list-is-empty"></a>
### La lista de modelos está vacía

Abra [**Configuración** > **Modelos**](#models) y haga clic en **Actualizar**.

Si es necesario:

- busque un modelo
- active **Solo gratuitos**
- añada uno o más modelos a **Modelos seleccionados**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### El resultado es demasiado lento o demasiado caro

Pruebe una o más de estas opciones:

- elija un modelo diferente
- use una entrada más corta
- desactive **Traducción en tiempo real (mientras escribe)** en [**Configuración** > **Configuración general**](#general-settings)
- use modelos gratuitos para tareas simples (ver [Modelos](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### La interfaz está en el idioma incorrecto

Haga clic en el icono del globo terráqueo en la [barra de herramientas](#toolbar) y elija su **Idioma de la interfaz** preferido.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### El texto es demasiado pequeño o difícil de leer

Abra [**Configuración** > **Configuración general**](#general-settings) y cambie:

- **Familia de fuente**
- **Tamaño**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Cambié un prompt y perdí las ediciones

Al editar un prompt, siempre haga clic en **Guardar** antes de hacer clic en **Volver a Ejecutar**.

<br /><br />

<a id="quick-tips"></a>
## Consejos rápidos

- Comience con [**Traducir**](#translate) para asegurarse de que su configuración funciona antes de pasar a [**Reescribir**](#rewrite) o [**Transformar**](#transform).
- Use [**Reescribir**](#rewrite) para mejoras cotidianas de redacción.
- Use [**Transformar**](#transform) cuando necesite un flujo de trabajo reproducible para una tarea específica.
- Use el [**Panel**](#dashboard) si quiere mantener un registro del uso y el coste.
- Exporte los prompts regularmente si está creando una biblioteca de prompts que quiera conservar (ver [Transformar prompts](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Aviso legal

Los nombres de productos y los iconos pertenecen a sus respectivos propietarios y se utilizan únicamente con fines de identificación. Este software no está afiliado ni respaldado por ninguna de las marcas mencionadas.

<br /><br />

<a id="license"></a>
## Licencia

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)