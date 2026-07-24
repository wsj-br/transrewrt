---
title: Problemas comunes
description: Solución de problemas y consejos rápidos para Transrewrt.
---



Si algo no funciona como se espera, compruebe estos puntos primero.

## La aplicación no traduce, reescribe ni transforma

Compruebe que:

- ha seleccionado un **ajuste preestablecido** (Fácil) o un **modelo** (Avanzado) en la barra de herramientas
- en el modo **Fácil**, **Ajustes → Ajustes generales** tiene un **Proveedor** con una clave que funciona (o una URL de LLM local)
- en el modo **Avanzado**, se selecciona un modelo en la barra de herramientas (se permite una lista vacía, pero necesita al menos un modelo en **Ajustes → Modelos** para ejecutar)
- su configuración de API funciona (escritorio: **Ajustes → Configuración de API → Probar**)

## La lista de modelos está vacía

En el modo **Fácil**, confirme que el **Proveedor** está configurado y que las claves/URL están probadas. Para **LLM local**, asegúrese de que su servidor local esté en funcionamiento y de que los modelos estén cargados.

En el modo **Avanzado**, los modelos seleccionados pueden estar vacíos. Abra **Ajustes → Modelos**, haga clic en **Actualizar** y añada modelos a **Modelos seleccionados**. Opcionalmente, active **Solo gratis**. Al eliminar el último modelo de la barra de herramientas también se abren Ajustes → Modelos.

## Demasiado lento o demasiado caro

- Elija un ajuste preestablecido o modelo diferente
- Use una entrada más corta
- Desactive la **Traducción en tiempo real mientras escribe** en Ajustes generales
- Use modelos gratuitos para tareas sencillas

## Idioma de la interfaz incorrecto

Haga clic en el icono del globo terráqueo en la barra de herramientas y elija su **Idioma de la interfaz**.

## Texto demasiado pequeño o difícil de leer

**Ajustes → Ajustes generales** → cambie la **Familia de fuentes** y el **Tamaño**.

## El Resumen del panel de control parece vacío

Esto es normal si:

- solo usa **modelos gratuitos** y está viendo las cifras de **costo** (pueden ser cero); los KPI de recuento de llamadas aún necesitan datos para el período seleccionado
- el **filtro de tiempo** seleccionado no cubre cuándo se realizaron las llamadas; pruebe **Todo**

Si los KPI siguen siendo cero después de **Todo**, consulte [Historial](/docs/history/) o Panel de control → **Todas las llamadas**.

## El costo muestra "no disponible" o parece incorrecto

OpenRouter muestra el gasto real cuando corresponde. Para otros proveedores, el costo se estima a partir de los precios de OpenRouter; si no hay coincidencia de precio, el costo se muestra como **no disponible** y no se agrega al total.

## El costo total no coincide con la factura de mi proveedor

Las cifras en la aplicación son **estimaciones de referencia**, no facturas. Para OpenRouter, use **Configuración → Seguimiento de costos → Sincronizar con el uso de la clave API**.

## Falta la página de historial en la barra lateral

Es posible que la opción **Mantener historial de ejecución** esté desactivada. Habilítela en la Configuración general a menos que el historial esté deshabilitado por el administrador (`HISTORY_DISABLED` — consulte [Configuración](/docs/configuration/#privacy-mode)).

## Web: redirigido al inicio de sesión inesperadamente

Su sesión puede haber caducado. Inicie sesión de nuevo. Si sucede a menudo, pida a un administrador que aumente el **Tiempo de espera de la sesión** en [Configuración → Usuarios](/docs/settings/#users) (un administrador también puede haber revocado sus sesiones).

## Administrador web: olvidó la contraseña

Si otro administrador puede iniciar sesión, puede restablecer la contraseña en **Configuración → Usuarios**. Si está bloqueado pero tiene acceso a la shell:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

El nombre de usuario de administrador predeterminado es `admin`. Desde una extracción de origen: `pnpm run reset-web-password -- <username> <new-password>`.

## El panel de control no muestra datos para otros usuarios (web)

Solo los **administradores** pueden ver a otros usuarios a través del filtro **Usuario**. Los usuarios regulares solo ven su propia actividad.

## Cambié un prompt y perdí las ediciones

Al editar un prompt de Transform, haga clic en **Guardar** antes de **Volver a ejecutar**.

## Consejos rápidos

- Comience con [Traducir](/docs/translate/) para confirmar su configuración antes de Reescribir o Transformar
- Use [Reescribir](/docs/rewrite/) para mejoras diarias de redacción
- Use [Transformar](/docs/transform/) para flujos de trabajo personalizados repetibles
- Manténgase en el modo **Fácil** hasta que necesite IDs de modelo detallados
- Exporte prompts regularmente si está creando una biblioteca de prompts
- Use [Panel de control](/docs/dashboard/) e [Historial](/docs/history/) para revisar el uso y las ejecuciones anteriores

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
