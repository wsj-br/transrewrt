---
title: Descripción general
description: >-
  Qué es Transrewrt y cómo encontrar documentación sobre instalación, guías y
  configuración.
---



**Transrewrt** es una herramienta de texto de código abierto impulsada por IA para:

- **Traducir** — entre docenas de idiomas, con detección automática de origen y glosarios
- **Reescribir** — corregir la gramática, mejorar la claridad, cambiar el tono o la longitud
- **Transformar** — ejecutar sus propias indicaciones de IA personalizadas en cualquier texto

Es compatible con muchos proveedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, puntos finales compatibles con OpenAI y servidores locales compatibles con OpenAI como Ollama, LM Studio o llama.cpp). Ejecútelo como una **aplicación de escritorio** (Windows / Linux) o una **aplicación web autoalojada** (Docker).

Sus claves, sus modelos, su host: no hay una cuenta en la nube de Transrewrt.

## Cómo está organizada la ventana

![Espacio de trabajo de traducción](/images/screenshots/es/translate.png)

- **Barra lateral** — la navegación principal: Traducir, Reescribir, Transformar, Panel de control, Historial, Configuración (y el usuario conectado en la web).
- **Barra de herramientas** — el título de la página, el selector de **preajuste** (Fácil) o **modelo** (Avanzado), el **idioma de la interfaz** (icono de globo; no cambia Traducir de/a), y Ayuda (**?**) que enlaza a esta documentación. El menú de preajuste/modelo también puede **Cambiar a modo Fácil/Avanzado** (encima de Abrir configuración).
- **Área de trabajo** — los paneles de Entrada y Salida, con recuentos, tiempo, TPS y coste opcional. La barra de acciones muestra un pequeño enlace de **versión** de la aplicación (abajo a la derecha) al sitio de GitHub Pages.

Por defecto, la aplicación se ejecuta en modo **Fácil**: elija un **preajuste** y un **Proveedor** en Configuración. Cambie a **Avanzado** en [Configuración → Configuración general](/docs/settings/#general-settings) para obtener una lista completa de modelos, o use el interruptor en el menú de preajustes/modelos de la barra de herramientas.

## Empezar

1. [Inicio rápido](/docs/quick-start/) — instalar en escritorio o ejecutar con Docker
2. [Clave API](/docs/api-key/) — conectar una clave gratuita de OpenRouter u otro proveedor
3. [Configuración](/docs/configuration/) — variables de entorno, rutas de configuración, autenticación web

## Guías

- [Traducir texto](/docs/translate/)
- [Reescribir texto](/docs/rewrite/)
- [Transformar con indicaciones](/docs/transform/)
- [Usar el Panel de control](/docs/dashboard/)
- [Explorar historial](/docs/history/)

## Referencia y ayuda

- [Configuración](/docs/settings/)
- [Problemas comunes](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
