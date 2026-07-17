---
title: Descripción general
description: >-
  Qué es Transrewrt y cómo encontrar documentación sobre instalación, guías y
  configuración.
translation_last_updated: '2026-07-17T21:14:49.278Z'
source_file_mtime: '2026-07-17T14:36:51.471Z'
source_file_hash: 6dfcf9cb19e3422d75511ecc06eda72e014214c3e34d95f7fec6d8a05c01896f
translation_language: es
source_file_path: src/content/docs/docs/index.md
translation_models:
  - google/gemini-2.5-flash
---



**Transrewrt** es una herramienta de texto de código abierto impulsada por IA para:

- **Traducir** — entre docenas de idiomas, con detección automática de origen y glosarios
- **Reescribir** — corregir la gramática, mejorar la claridad, cambiar el tono o la longitud
- **Transformar** — ejecutar sus propias indicaciones de IA personalizadas en cualquier texto

Es compatible con muchos proveedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, puntos de conexión compatibles con OpenAI y servidores locales compatibles con OpenAI como Ollama, LM Studio o llama.cpp). Ejecútalo como una **aplicación de escritorio** (Windows/Linux) o una **aplicación web autoalojada** (Docker).

Sus claves, sus modelos, su host: no hay una cuenta en la nube de Transrewrt.

## Cómo se organiza la ventana

- **Barra lateral** — Traducir, Reescribir, Transformar, Panel de control, Historial, Configuración (y el usuario conectado en la web)
- **Barra de herramientas** — título de la página, selector de **preajuste** (Fácil) o **modelo** (Avanzado), e **Idioma de la interfaz** (icono de globo; no cambia Traducir de/a)
- **Área de trabajo** — Paneles de entrada y salida con recuentos, tiempo, TPS y coste opcional

Por defecto, la aplicación se ejecuta en modo **Fácil**: elija un **preajuste** y un **Proveedor** en Configuración. Cambie a **Avanzado** en [Configuración → Ajustes generales](/docs/settings/#general-settings) para ver una lista completa de modelos.

## Primeros pasos

1. [Inicio rápido](/docs/quick-start/) — instale el escritorio o ejecute con Docker
2. [Clave API](/docs/api-key/) — conecte una clave gratuita de OpenRouter u otro proveedor
3. [Configuración](/docs/configuration/) — variables de entorno, rutas de configuración, autenticación web

## Guías

- [Traducir texto](/docs/translate/)
- [Reescribir texto](/docs/rewrite/)
- [Transformar con indicaciones](/docs/transform/)
- [Usar el Panel de control](/docs/dashboard/)
- [Explorar el historial](/docs/history/)

## Referencia y ayuda

- [Configuración](/docs/settings/)
- [Problemas comunes](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
