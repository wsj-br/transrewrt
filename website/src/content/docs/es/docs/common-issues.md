---
title: Problemas comunes
description: Solución de problemas y consejos rápidos para Transrewrt.
translation_last_updated: '2026-07-17T14:59:01.765Z'
source_file_mtime: '2026-07-17T14:37:17.841Z'
source_file_hash: d60d2f0d1e9289639fd72ad478b6756e4638dce77acf7d2d1795a37653a97f17
translation_language: es
source_file_path: src/content/docs/docs/common-issues.md
translation_models:
  - google/gemini-2.5-flash
---



Si algo no funciona como se espera, compruebe primero estos puntos.

## La aplicación no traduce, reescribe ni transforma

Compruebe que:

- ha seleccionado un **ajuste preestablecido** (Fácil) o un **modelo** (Avanzado) en la barra de herramientas
- en el modo **Fácil**, **Ajustes → Ajustes generales** tiene un **Proveedor** con una clave que funciona (o URL de LLM local)
- en el modo **Avanzado**, al menos un modelo aparece en la lista de **Ajustes → Modelos**
- su configuración de API funciona (escritorio: **Ajustes → Configuración de API → Prueba**)

## La lista de modelos está vacía

En el modo **Fácil**, confirme que el **Proveedor** está configurado y que las claves/URL están probadas. Para **LLM local**, asegúrese de que su servidor local esté en funcionamiento y de que los modelos estén cargados.

En el modo **Avanzado**, abra **Configuración → Modelos**, haga clic en **Actualizar** y añada modelos a **Modelos seleccionados**. Opcionalmente, active **Solo gratis**.

## Demasiado lento o demasiado caro

- Elija un ajuste preestablecido o modelo diferente
- Use una entrada más corta
- Desactive la **Traducción en tiempo real mientras escribe** en Ajustes generales
- Use modelos gratuitos para tareas sencillas

## Idioma de la interfaz incorrecto

Haga clic en el icono del globo terráqueo en la barra de herramientas y elija su **Idioma de la interfaz**.

## Texto demasiado pequeño o difícil de leer

**Configuración → Ajustes generales** → cambie la **Familia de fuentes** y el **Tamaño**.

## El resumen del panel de control aparece vacío

Esto es normal si:

- solo utiliza **modelos gratuitos** y está viendo las cifras de **costo** (pueden ser cero); los KPI de recuento de llamadas aún necesitan datos para el período seleccionado
- el **filtro de tiempo** seleccionado no cubre cuándo se realizaron las llamadas; pruebe con **Todo**

Si los KPI siguen siendo cero después de **Todo**, compruebe [Historial](/docs/history/) o Panel de control → **Todas las llamadas**.

## El costo muestra "no disponible" o parece incorrecto

OpenRouter muestra el gasto real cuando corresponde. Para otros proveedores, el costo se estima a partir de los precios de OpenRouter; si ningún precio coincide, el costo se muestra como **no disponible** y no se agrega al total.

## El costo total no coincide con la factura de mi proveedor

Las cifras de la aplicación son **estimaciones de referencia**, no facturas. Para OpenRouter, use **Configuración → Seguimiento de costos → Sincronizar con el uso de la clave API**.

## Página de historial que falta en la barra lateral

Es posible que la opción **Mantener historial de ejecución** esté desactivada. Habilítela en Configuración general a menos que el historial esté deshabilitado por el administrador (`HISTORY_DISABLED` — consulte [Configuración](/docs/configuration/#privacy-mode)).

## Web: redirigido al inicio de sesión inesperadamente

Es posible que su sesión haya caducado. Inicie sesión de nuevo. Si esto sucede a menudo, compruebe la configuración de tiempo de vida de la sesión del servidor.

## Administrador web: olvidó la contraseña

Si otro administrador puede iniciar sesión, puede restablecer la contraseña en **Configuración → Usuarios**. Si no puede iniciar sesión pero tiene acceso a la shell:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

El nombre de usuario de administrador predeterminado es `admin`. Desde una extracción de origen: `pnpm run reset-web-password -- <username> <new-password>`.

## El panel de control no muestra datos para otros usuarios (web)

Solo los **administradores** pueden ver a otros usuarios a través del filtro **Usuario**. Los usuarios normales solo ven su propia actividad.

## Se cambió un prompt y se perdieron las ediciones

Al editar un prompt de Transform, haga clic en **Guardar** antes de **Volver a Ejecutar**.

## Consejos rápidos

- Comience con [Traducir](/docs/translate/) para confirmar su configuración antes de Reescritura o Transformación
- Use [Reescritura](/docs/rewrite/) para mejoras de redacción diarias
- Use [Transformar](/docs/transform/) para flujos de trabajo personalizados repetibles
- Manténgase en el modo **Fácil** hasta que necesite ID de modelo granulares
- Exporte las indicaciones regularmente si está creando una biblioteca de indicaciones
- Use [Panel de control](/docs/dashboard/) e [Historial](/docs/history/) para revisar el uso y las ejecuciones anteriores

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
