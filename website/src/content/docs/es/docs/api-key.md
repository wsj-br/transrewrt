---
title: Clave de API
description: >-
  Conecte Transrewrt a un proveedor de IA de su elección añadiendo una clave
  API, o utilice un modelo local en su lugar.
---



Transrewrt no incluye su propia IA; envía su texto a un proveedor de IA que usted elija. Para conectar un proveedor, debe añadir una **clave API**: un código privado, emitido por el proveedor, que funciona como una contraseña para su servicio. Solo necesita **un** proveedor para empezar, y no necesita pagar: varios proveedores ofrecen modelos gratuitos o niveles gratuitos, y también puede ejecutar modelos en su propio ordenador sin ninguna clave.

Los proveedores compatibles incluyen OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, cualquier endpoint compatible con OpenAI y servidores locales compatibles con OpenAI (Ollama, LM Studio, llama.cpp y similares).

## Paso 1 — Elija un proveedor

Cualquier proveedor compatible funciona. Si no está seguro de cuál elegir:

- **Gratis para empezar**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras y NVIDIA ofrecen modelos gratuitos o niveles gratuitos.
- **¿Ya tiene una cuenta?** Si ya utiliza OpenAI, Anthropic u otro proveedor compatible, simplemente puede reutilizar esa cuenta.
- **¿Prefiere mantener todo en su propio ordenador?** Omita la clave por completo y utilice un [modelo local](#using-a-local-model-instead-no-api-key) en su lugar.

## Paso 2 — Cree una clave API

Los pasos exactos varían ligeramente según el proveedor, pero el patrón es el mismo en todas partes:

1. Regístrese o inicie sesión en el sitio web del proveedor. En **Ajustes → Configuración de API** de Transrewrt, cada proveedor tiene un enlace **Abrir sitio web del proveedor** que le lleva al lugar correcto.
2. Busque la página **Claves API** (a veces en la configuración de la cuenta, el panel de control o el desarrollador) y cree una nueva clave. Algunos proveedores le piden que nombre la clave o que establezca un límite de gasto; ambos son opcionales.
3. Copie la clave. Es una cadena larga de letras y números, que a menudo comienza con algo como `sk-`.

:::note
Trate una clave API como una contraseña: no la comparta, publique ni envíe a nadie. Si una clave se filtra, elimínela en el sitio web del proveedor y cree una nueva.
:::

## Paso 3 — Añada y pruebe la clave (escritorio)

1. En Transrewrt, abra **Ajustes → Configuración de API**.
2. Pegue la clave en el campo de su proveedor (por ejemplo, **Clave API de Google Gemini**) y guárdela.
3. Haga clic en **Probar** junto al campo para confirmar que la clave funciona.

Una vez que la prueba tenga éxito, estará listo: elija ese proveedor en la pantalla principal y comience a traducir.

## Uso de un modelo local en su lugar (sin clave API)

Puede ejecutar modelos en su propio ordenador con Ollama, LM Studio, llama.cpp u otro servidor compatible con OpenAI (por ejemplo, `google/gemma-4-e2b` a través de LM Studio). Nada sale de su máquina y no se necesita ninguna clave API.

Para conectar uno, establezca la URL base del LLM local en la base API completa, incluida la ruta, por ejemplo `http://localhost:11434/v1`. En el escritorio, configúrelo en **Ajustes → Configuración de API**; en Docker, establezca la variable de entorno `LOCAL_LLM_URL` en su lugar.

:::tip
Si utiliza un servidor LLM local desde otro dispositivo o contenedor, configúrelo para permitir conexiones externas (no solo localhost).
:::

## Docker / web

Si utiliza Transrewrt en un navegador, las claves las gestiona quien ejecuta el servidor, no se introducen en la interfaz de usuario del navegador. El administrador establece las claves del proveedor como **variables de entorno** en el servidor (por ejemplo, `PROVIDER_API_KEY`); consulte [Configuración](/docs/configuration/).

## Lista de verificación de primera ejecución

1. Abra la aplicación y configure el **Idioma de la interfaz** si es necesario.
2. Añada y pruebe al menos una clave de proveedor, o configure un modelo local (escritorio), o confirme que el servidor tiene claves de entorno (web).
3. En el modo **Fácil**, elija un **Proveedor** en Configuración general; en **Avanzado**, añada modelos en **Ajustes → Modelos**; consulte [Ajustes](/docs/settings/#general-settings) para los dos modos.
4. En **Traducir**, elija un preajuste o modelo y realice una prueba corta; consulte [Traducir texto](/docs/translate/).

## Si algo no funciona

- **La prueba de clave falla**: compruebe que la clave se copió completamente (sin espacios antes o después) y que no se ha eliminado ni deshabilitado en el sitio web del proveedor.
- **Las traducciones fallan con un error de cuota o crédito**: los niveles gratuitos tienen límites diarios o mensuales; espere, cambie a otro proveedor gratuito o añada crédito.
- **Ningún proveedor aparece en el modo Fácil**: abra **Ajustes → Configuración de API** y confirme que al menos una clave (o la URL de LLM local) está configurada y probada.

Más ayuda: [Problemas comunes](/docs/common-issues/).
