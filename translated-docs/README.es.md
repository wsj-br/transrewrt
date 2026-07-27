<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Herramienta de texto con IA para **traducir**, **reescribir** y **transformar** con indicaciones personalizadas. Utiliza tus propios proveedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, puntos finales compatibles con OpenAI y servidores locales como Ollama, LM Studio o llama.cpp). Ejecútala como una aplicación de escritorio (Windows/Linux) o una aplicación web autoalojada (Docker). No se requiere cuenta en la nube de Transrewrt.

## Características

| Capacidad | Descripción |
| --- | --- |
| **Traducir** | Decenas de idiomas, detección automática, glosarios, refinar con Reescritura |
| **Reescritura** | Claridad, tono, longitud, ortografía y gramática — mismo idioma |
| **Transformar** | Indicaciones de IA personalizadas que creas, editas y reutilizas |
| **Implementar** | Escritorio Electron o web Docker (amd64 y arm64) |
| **Claves** | Tus proveedores, tu host — Ajustes preestablecidos fáciles o lista de modelos avanzados |

![Traducir](../images/screenshots/es/translate.png)

<small>**Leer en otros idiomas:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Inicio rápido

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Reemplace `PROVIDER_API_KEY` con su variable de proveedor (por ejemplo, `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`). Abra [http://localhost:5000](http://localhost:5000) y cambie la Contraseña de Administrador predeterminada. Las claves se configuran mediante variables de entorno (no la interfaz de usuario web).

**Windows** — Descarga `Transrewrt Setup x.y.z.exe` de [Versiones](https://github.com/wsj-br/transrewrt/releases), instala y luego agrega las claves en **Configuración → API**.

**Linux** — Descarga el `.AppImage` de [Versiones](https://github.com/wsj-br/transrewrt/releases), luego:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Detalles de la plataforma (Compose, SmartScreen, librerías apt, banderas de GPU, zona horaria): [Documentos de inicio rápido](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Documentación

Documentación completa del producto (instalación, claves de API, guías, configuración, solución de problemas):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [Clave de API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Configuración](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Traducir](https://wsj-br.github.io/transrewrt/docs/translate/) · [Reescritura](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Transformar](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Problemas comunes](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Desarrollo

- Configuración, compilación, prueba, implementación: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Descripción general de la arquitectura: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Soporte

Abre un problema en [GitHub](https://github.com/wsj-br/transrewrt/issues). Incluye tu plataforma (Windows / Linux / Docker) y la versión de la aplicación (cuadro de diálogo Acerca de o página de Versiones).

## Agradecimientos

Las sugerencias de preajustes en modo Fácil del editor de preajustes utilizan datos de evaluación públicos de:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (se requiere atribución para los datos de la API)

Las licencias de dependencias de terceros y estos avisos de origen de datos se enumeran en [NOTICES](../NOTICES).

## Licencia

Derechos de autor © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Los nombres y los iconos de los productos pertenecen a sus respectivos propietarios y se utilizan solo con fines de identificación. Este software no está afiliado ni respaldado por esas marcas.

<small>

> **Nota sobre las traducciones de la interfaz de usuario y la documentación:** Todos los idiomas de la interfaz y la documentación, excepto el inglés (Reino Unido), se tradujeron con IA utilizando [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); la redacción puede ser imprecisa o contener errores.

</small>
