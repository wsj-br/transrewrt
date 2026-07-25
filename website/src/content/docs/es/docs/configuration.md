---
title: Configuración
description: >-
  Ubicaciones de archivos de configuración, variables de entorno de Docker, modo
  de privacidad y autenticación web.
---



## Ubicaciones de archivos de configuración

| Implementación | Carpeta de datos |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (usar un volumen para persistir) |

La carpeta de datos contiene todo lo que vale la pena respaldar:

- `config.json` — configuración y claves de API cifradas (de escritorio)
- `state.json` — idiomas, modelo y estado de vista usados por última vez
- `presets.json` — catálogo de ajustes preestablecidos de modo fácil en caché
- `transrewrt.db` — base de datos SQLite con historial, costos, indicaciones, glosario y usuarios (web)

También puedes crear una copia de seguridad ZIP portátil desde la aplicación; consulta [Ajustes → Ajustes generales](/docs/settings/#general-settings).

## Persistencia de datos (Docker)

Monte un volumen en `/app/data` para que los archivos de configuración y la base de datos SQLite (consulte [Ubicaciones de archivos de configuración](#config-file-locations)) sobrevivan a los reinicios del contenedor. Sin un volumen, los datos se pierden cuando el contenedor se detiene.

## Variables de entorno (web / Docker)

Electron usa el archivo de configuración local. Solo para el servidor web/Docker:

| Variable | Descripción |
| --- | --- |
| `PORT` | Puerto de escucha del servidor (predeterminado `5000`) |
| `CONFIG_PATH` | Ruta al archivo de configuración (predeterminado `/app/data/config.json`) |
| `TZ` | Zona horaria para la hora del lado del servidor (predeterminado `Europe/London`) |
| `HISTORY_DISABLED` | Forzar el historial de ejecución desactivado (`true` / `1`) |
| `OPENROUTER_API_KEY` | Clave de API de OpenRouter |
| `OPENAI_API_KEY` | Clave de API de OpenAI |
| `CEREBRAS_API_KEY` | Clave de API de Cerebras |
| `ANTHROPIC_API_KEY` | Clave de API de Anthropic |
| `GOOGLE_API_KEY` | Clave de API de Google Gemini |
| `DEEPSEEK_API_KEY` | Clave de API de DeepSeek |
| `GROQ_API_KEY` | Clave de API de Groq |
| `MISTRAL_API_KEY` | Clave de API de Mistral |
| `LOCAL_LLM_URL` | URL base completa de la API compatible con OpenAI para un servidor local, incluida la ruta (por ejemplo, Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Clave de API de xAI |
| `NVIDIA_API_KEY` | Clave de API de NVIDIA |
| `ALIBABA_API_KEY` | Clave de API de Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Clave de API de apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Nombre para mostrar de un proveedor personalizado compatible con OpenAI |
| `CUSTOM_PROVIDER_URL` | URL base para un proveedor personalizado compatible con OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Clave de API para el proveedor personalizado |

Las tres variables `CUSTOM_PROVIDER_*` son obligatorias cuando se utiliza un punto final personalizado. Los modelos aparecen en el modo **Avanzado** como `{providerName}/…`.

## Variables de entorno (escritorio)

| Variable | Descripción |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Establezca en `1` para deshabilitar la aceleración de hardware (útil cuando Chromium imprime errores de GPU / EGL en Linux) |
| `HISTORY_DISABLED` | Forzar el historial de ejecución a desactivado (`true` / `1`) — consulte [Modo de privacidad](#privacy-mode) |

## Modo de privacidad

Establezca `HISTORY_DISABLED` en `true` o `1` en el proceso del servidor web/Docker y/o en el proceso principal de Electron para forzar la desactivación del historial, independientemente de `config.json` o las preferencias por usuario. Esto deshabilita el almacenamiento del historial de entrada/salida, bloquea **Configuración → Ajustes generales → Historial** y bloquea las API relacionadas con el historial.

## Autenticación web

- Administrador predeterminado: `admin` / `transrewrt26`
- Gestiona usuarios, tiempo de espera de sesión y revocación de sesión en **Configuración → Usuarios** — consulta [Configuración](/docs/settings/#users)
- Cada usuario que ha iniciado sesión puede cambiar su propia contraseña o cerrar sesión desde el menú de usuario en la parte inferior de la barra lateral
- Restablecer una contraseña:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Cambia la contraseña de administrador predeterminada inmediatamente en cualquier host accesible por red.
:::

:::caution
El servidor utiliza HTTP simple. Si lo expones más allá de localhost o una red de confianza, colócalo detrás de un proxy inverso con HTTPS (por ejemplo, Caddy, nginx o Traefik) para que las contraseñas y el texto no se envíen sin cifrar.
:::

## Visualización de costes

OpenRouter devuelve el coste facturado exacto cuando corresponde. Otros proveedores utilizan el coste **estimado** de los precios de modelos públicos de OpenRouter cuando hay una clave de OpenRouter disponible. Las estimaciones no son facturas.

Para la interfaz de usuario de Configuración (fuentes, modelos, historial, copias de seguridad), consulta [Configuración](/docs/settings/).
