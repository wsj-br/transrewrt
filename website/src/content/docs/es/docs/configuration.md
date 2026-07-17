---
title: Configuración
description: >-
  Ubicaciones de archivos de configuración, variables de entorno de Docker, modo
  de privacidad y autenticación web.
---



## Ubicaciones de archivos de configuración

| Implementación | Ubicación de la configuración |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (utilice un volumen para persistir) |

## Variables de entorno (web / Docker)

Electron utiliza el archivo de configuración local. Solo para el servidor web/Docker:

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
| `LOCAL_LLM_URL` | URL base completa de la API compatible con OpenAI para un servidor local (incluya la ruta, por ejemplo, Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Clave de API de xAI |
| `NVIDIA_API_KEY` | Clave de API de NVIDIA |
| `ALIBABA_API_KEY` | Clave de API de Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Clave de API de apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Nombre para mostrar de un proveedor personalizado compatible con OpenAI |
| `CUSTOM_PROVIDER_URL` | URL base de un proveedor personalizado compatible con OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Clave de API para el proveedor personalizado |

Las tres variables `CUSTOM_PROVIDER_*` son obligatorias cuando se utiliza un punto final personalizado. Los modelos aparecen en el modo **Avanzado** como `{providerName}/…`.

## Modo de privacidad

Establezca `HISTORY_DISABLED` en `true` o `1` en el proceso del servidor web/Docker y/o en el proceso principal de Electron para forzar la desactivación del historial, independientemente de `config.json` o de las preferencias de cada usuario. Esto deshabilita el almacenamiento del historial de entrada/salida, bloquea **Configuración → Ajustes generales → Historial** y bloquea las API relacionadas con el historial.

## Persistencia de datos (Docker)

Monte un volumen en `/app/data` para que `config.json` y la base de datos SQLite sobrevivan a los reinicios del contenedor. Sin un volumen, los datos se pierden cuando el contenedor se detiene.

## Autenticación web

- Administrador predeterminado: `admin` / `transrewrt26`
- Administrar usuarios en **Configuración → Usuarios**
- Restablecer una contraseña:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Cambie la contraseña de administrador predeterminada inmediatamente en cualquier host accesible por red.
:::

## Visualización de costos

OpenRouter devuelve el costo exacto facturado cuando corresponde. Otros proveedores utilizan el costo **estimado** de los precios de modelos públicos de OpenRouter cuando hay una clave de OpenRouter disponible. Las estimaciones no son facturas.

Para la interfaz de usuario de Configuración (fuentes, modelos, historial, copias de seguridad), consulte [Configuración](/docs/settings/).
