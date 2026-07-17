---
title: Clave de API
description: >-
  Obtenga una clave de API gratuita de OpenRouter y conecte otros proveedores de
  IA a Transrewrt.
translation_last_updated: '2026-07-17T21:14:48.818Z'
source_file_mtime: '2026-07-17T14:58:48.569Z'
source_file_hash: 540c5b2b785355828a421293195b23c2fec98502888d607638fbb33f93970a2a
translation_language: es
source_file_path: src/content/docs/docs/api-key.md
translation_models:
  - google/gemini-2.5-flash
---



Transrewrt necesita acceso a al menos un proveedor de IA. **No** necesita un modelo de pago para empezar: OpenRouter ofrece modelos gratuitos después de añadir una clave, y varios otros proveedores también ofrecen niveles gratuitos.

Los proveedores compatibles incluyen [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, cualquier endpoint compatible con OpenAI y servidores locales compatibles con OpenAI (Ollama, LM Studio, llama.cpp y similares).

## Fácil vs. Avanzado

- Modo **Fácil** (predeterminado): elija un **ajuste preestablecido** (Gratis (OpenRouter), Estándar, Avanzado o Técnico) asignado a un **proveedor**. Solo aparecen los ajustes preestablecidos con una asignación para el proveedor actual.
- Modo **Avanzado**: elija los modelos directamente. Los ID de modelo usan un prefijo de proveedor (por ejemplo, `openrouter/…`, `openai/…`, `local/…`).

## Clave gratuita de OpenRouter (escritorio)

1. Vaya a [openrouter.ai](https://openrouter.ai) y regístrese o inicie sesión.
2. Abra la página [Keys](https://openrouter.ai/keys) y cree una nueva clave (póngale un nombre; límite de crédito opcional). Puede usar modelos gratuitos sin añadir crédito.
3. En Transrewrt, abra **Settings → API Config**, pegue la clave en **OpenRouter API key** y haga clic en **Test OpenRouter key**.

:::caution
No utilice el modelo **Body Builder** de OpenRouter (`openrouter/bodybuilder`) para traducir, reescribir o transformar; devuelve cargas útiles de solicitud JSON, no texto completado.
:::

## Otras opciones gratuitas

También puedes obtener claves de API gratuitas de Cerebras, Google, Groq, Mistral AI o [NVIDIA](https://build.nvidia.com/) (API compatible con OpenAI), o ejecutar modelos localmente con Ollama, LM Studio, llama.cpp u otro servidor compatible con OpenAI (por ejemplo, `translategemma:4b` a través de Ollama). Establece la URL base de LLM local en la base de API completa (incluye la ruta, por ejemplo, `http://localhost:11434/v1`) en Configuración (escritorio) o `LOCAL_LLM_URL` (Docker).

:::caution
Si utiliza un servidor LLM local desde otro dispositivo o contenedor, configúrelo para permitir conexiones externas (no solo localhost).
:::

## Docker / web

Establezca las claves del proveedor como **variables de entorno** en el servidor (por ejemplo, `PROVIDER_API_KEY`). Los usuarios no pueden escribir claves en la interfaz de usuario del navegador. Consulte [Configuración](/docs/configuration/).

## Lista de verificación de primera ejecución

1. Abra la aplicación y configure el **Idioma de la interfaz** si es necesario.
2. Agregue y pruebe al menos una clave de proveedor (escritorio) o confirme que el servidor tiene claves de entorno (web).
3. En el modo **Fácil**, elija un **Proveedor** en Configuración general; en **Avanzado**, agregue modelos en **Configuración → Modelos**.
4. En **Traducir**, elija un preajuste o modelo y realice una prueba corta; consulte [Traducir texto](/docs/translate/).
