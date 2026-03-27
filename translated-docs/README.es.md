---
translated_at: "2026-03-26T01:05:11.373Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo de Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versión"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licencia: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Herramienta de texto con IA: traduce entre idiomas, reescribe con distintos estilos y transforma mediante indicaciones personalizadas, utilizando múltiples proveedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI y Ollama local). Funciona como aplicación de escritorio (Electron) o como aplicación web autohospedada (Docker).

- **Traducir** — entre decenas de idiomas, con detección automática del idioma de origen
- **Reescribir** — corregir gramática, mejorar claridad, versión formal/informal, acortar, ampliar, estilo técnico
- **Transformar** — indicaciones (prompts) personalizadas de IA; crear y gestionar indicaciones, idioma de destino opcional por indicación
- **Historial** — historial completo de ejecuciones con texto de entrada/salida, filtros y función de exportación
- **Modelos y coste** — elige modelos de cualquier proveedor configurado; paneles de coste y uso con registros, resúmenes por modelo/operación/día
- **Interfaz** — interfaz multilingüe (más de 30 idiomas, soporte RTL), fuentes, ...
- **Modo web** — soporte multiusuario con roles de administrador
- **Escritorio** — aplicación Electron para Windows y Linux
- **Autohospedaje** — imagen Docker para amd64 y arm64 (preparado para Raspberry Pi)

Una vez instalado, consulte la **[Guía de usuario](USER-GUIDE.es.md)** para una explicación completa de todas las funciones.

<small>**Leer en otros idiomas:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sobre las traducciones de la interfaz y la documentación:** Todos los idiomas de la interfaz, excepto el original inglés (UK),  
> fueron traducidos mediante modelos de IA; la redacción puede ser imprecisa o contener errores.

</small>

<br/>

<a id="screenshots"></a>
## Capturas de pantalla

**Selector de idiomas**

![Selector de idiomas](../images/screenshots/es/language-selector.png)

**Traducir**

![Traducir](../images/screenshots/es/translate.png)

**Transformar - editor de indicaciones**

![Transformar - editor de indicaciones](../images/screenshots/es/transform-prompt-edit.png)

**Panel**

![Panel de costes](../images/screenshots/es/dashboard-summary.png)

**Historial**

![Historial](../images/screenshots/es/history.png)

**Configuración - selección de modelos**

![Configuración - selección de modelos](../images/screenshots/es/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Tabla de contenido

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Inicio rápido](#inicio-rápido)
- [Instalación](#instalación)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obtención de una clave API de OpenRouter](#obtención-de-una-clave-api-de-openrouter)
- [Configuración y entorno](#configuración-y-entorno)
- [Desarrollo y arquitectura](#desarrollo-y-arquitectura)
- [Versiones y etiquetas](#versiones-y-etiquetas)
- [Colaboración](#colaboración)
- [Descargo de responsabilidad](#descargo-de-responsabilidad)
- [Licencia](#licencia)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="inicio-rápido"></a>
## Inicio rápido

**Docker (recomendado para autohospedaje)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Reemplace `sk-or-your-key` con su [clave API de OpenRouter](https://openrouter.ai/keys) (o configure claves de otro proveedor; véase [Configuración](#configuración-y-entorno)). Abra [http://localhost:5000](http://localhost:5000) y cambie la contraseña predeterminada del administrador antes de exponer el servicio.

<br/>

> ℹ️ **NOTA**<br/>
> En Docker, las credenciales del LLM se establecen mediante variables de entorno como `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (no en la interfaz web). En el escritorio (Electron) se configuran las claves en **Configuración → API**.

<br/>

**Windows**

Descargue el último archivo `Transrewrt Setup x.y.z.exe` de [Versiones](https://github.com/wsj-br/transrewrt/releases), ejecute el instalador y luego inícielo desde el menú Inicio o acceso directo del escritorio. Introduzca sus claves API en **Configuración → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

<br/>

**Linux**

Descargue el archivo `.AppImage` adecuado para su CPU desde [Versiones](https://github.com/wsj-br/transrewrt/releases) (`x64` para PCs comunes, `arm64` para muchos dispositivos ARM, incluyendo Raspberry Pi 4+), luego:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ingrese sus claves API en **Configuración → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

En Debian/Ubuntu puede necesitar instalar dependencias adicionales primero:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Vea [Instalación → Linux](#linux-electron) para más detalles.

<br/>

> ℹ️ **NOTA**<br/>
> Actualmente no se admite macOS. Transrewrt está disponible para Windows, Linux y Docker.

<br/>

Una vez que la aplicación esté en ejecución, consulte la **[Guía del usuario](USER-GUIDE.es.md)** para aprender cómo traducir, reescribir y transformar texto, gestionar indicaciones y configurar modelos.

<br/><br/>

<a id="instalación"></a>
## Instalación

<a id="windows-electron"></a>
### Windows (Electron)

- Descargue el instalador más reciente desde [Versiones](https://github.com/wsj-br/transrewrt/releases).
- Ejecute el archivo `.exe` y siga las instrucciones del instalador.
- Primera ejecución: inicie la aplicación desde el menú Inicio o acceso directo del escritorio.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descargue el archivo `.AppImage` correspondiente (`x64` o `arm64`) desde [Versiones](https://github.com/wsj-br/transrewrt/releases).
- Ejecute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` en x86_64/amd64, o use el nombre de archivo `...-arm64.AppImage` en ARM64.
- Dependencias adicionales (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Vea [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para más información.

<br/>

<a id="docker"></a>
### Docker

- Descargue: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Configure al menos una clave de proveedor mediante variables de entorno (por ejemplo `OPENROUTER_API_KEY` para OpenRouter). Pase las variables con `-e` o mediante `docker compose` / `.env` para que los secretos no queden incorporados en la imagen.
- Las claves de los proveedores **no** se introducen en la interfaz web; el servidor las lee desde el entorno.

Ejemplo - volumen con nombre para persistencia (clave OpenRouter mediante variable de entorno):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opción     | Descripción                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| Puerto     | `5000` (mapeado con `-p 5000:5000`)                                                                           |
| Volumen    | Monte `/app/data` para mantener la configuración y la base de datos                                           |
| Variables de entorno | `PORT`, `CONFIG_PATH`, además de claves de LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - véase [Configuración](#configuración-y-entorno) |

Para construir y ejecutar desde el código fuente: `docker compose up --build -d` o `pnpm docker:up` - véase [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="obtención-de-una-clave-api-de-openrouter"></a>

## Obtener una clave API de OpenRouter

Transrewrt admite múltiples proveedores de IA. [OpenRouter](https://openrouter.ai) es una opción popular porque agrega muchos modelos bajo una única clave y ofrece modelos gratuitos.

1. Regístrese o inicie sesión en [openrouter.ai](https://openrouter.ai).
2. Abra la página de [Claves](https://openrouter.ai/keys) y cree una nueva clave (asígnele un nombre y, opcionalmente, establezca un límite de crédito). Puede usar modelos gratuitos sin añadir crédito.
3. **Escritorio (Electron):** pegue las claves en **Configuración → API**. **Docker:** establezca variables de entorno como `OPENROUTER_API_KEY` (véase [Inicio rápido](#quick-start)).

No use el modelo **Body Builder** de OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traducir, reescribir o transformar: este devuelve cargas útiles de solicitud JSON, no el texto completado para esas tareas. Vea [Configuración → Modelos](USER-GUIDE.es.md#models) en la Guía de usuario.

También puede usar otros proveedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o ejecutar modelos localmente con [Ollama](https://ollama.com). Vea [Configuración](#configuration-and-environment) para obtener la lista completa de proveedores compatibles y variables de entorno.

> ⚠️ **ADVERTENCIA**<br/>
> Si está utilizando Ollama desde otro dispositivo, contenedor o servicio, recuerde configurar Ollama para permitir conexiones externas (no solo localhost).


Para información sobre límites, BYOK y más, consulte [Autenticación de OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuración y entorno

**Ubicaciones del archivo de configuración**

| Despliegue          | Ubicación de la configuración                     |
| ------------------- | ------------------------------------------------ |
| Electron (Windows)  | `%APPDATA%\transrewrt\`                          |
| Electron (Linux)    | `~/.config/transrewrt/`                          |
| Web / Docker        | `/app/data/config.json` (use un volumen para persistencia) |

<br/>

**Variables de entorno** (solo web/Docker; Electron usa el archivo de configuración local)

| Variable         | Predeterminado            | Descripción |
| ---------------- | ------------------------- | ----------- |
| `PORT`           | `5000`                    | Puerto en el que escucha el servidor |
| `CONFIG_PATH`    | `/app/data/config.json`   | Ruta al archivo de configuración |
| `OPENROUTER_API_KEY` | *(vacío)*                 | Clave API de OpenRouter |
| `OPENAI_API_KEY`     | *(vacío)*                 | Clave API de OpenAI |
| `CEREBRAS_API_KEY`   | *(vacío)*                 | Clave API de Cerebras |
| `ANTHROPIC_API_KEY`  | *(vacío)*                 | Clave API de Anthropic |
| `GOOGLE_API_KEY`     | *(vacío)*                 | Clave API de Google Gemini |
| `DEEPSEEK_API_KEY`   | *(vacío)*                 | Clave API de DeepSeek |
| `GROQ_API_KEY`       | *(vacío)*                 | Clave API de Groq |
| `MISTRAL_API_KEY`    | *(vacío)*                 | Clave API de Mistral |
| `OLLAMA_URL`     | *(vacío)*                 | URL base de Ollama (por ejemplo, `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(vacío)*                 | Clave API de xAI |

Configure únicamente los proveedores que vaya a usar. Los identificadores de modelos son espaciados por nombres (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Visualización de costos:** OpenRouter devuelve el costo facturado exacto cuando corresponde. Otros proveedores utilizan el costo **estimado** basado en precios públicos de modelos de OpenRouter cuando está disponible una clave de OpenRouter; si no, el costo de no-OpenRouter podría mostrarse como `0`. Las estimaciones no son facturas.

<br/>

**Datos y persistencia:** Para Docker, monte un volumen en `/app/data` para que `config.json` y la base de datos SQLite persistan tras reinicios del contenedor. Sin un volumen, todos los datos se perderán cuando el contenedor se detenga.

**Desarrolladores:** Tras actualizar cambios que reemplazan la configuración anterior con una sola clave, restablezca o combinen `data/config.json` con la nueva forma predeterminada de `src/config-defaults/config_default.json` si su archivo local aún usa campos eliminados (`api_key`, `api_url`, opciones de proxy).

<br/>

**Autenticación web:**

- Administrador predeterminado: `admin` / `transrewrt26`.
- Gestionar usuarios en **Configuración → Usuarios**.
- Restablecer una contraseña: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (desde el código fuente: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> Cambie inmediatamente la contraseña predeterminada del administrador en cualquier host accesible desde la red.

<br/>

Los ajustes clave (fuente, modelos, idiomas, etc.) están disponibles en la Configuración de la aplicación.

<br/><br/>

<a id="development-and-architecture"></a>

## Desarrollo y arquitectura

- **Desarrollo:** Configuración, construcción, pruebas e implementación (Electron, Web, Docker) - ver **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Visión general de arquitectura y sistema:** Estructura de carpetas, pila tecnológica, decisiones de diseño - ver **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versiones y etiquetas

- Las **etiquetas de Git** `v`* (por ejemplo, `v1.0.10`) activan el [flujo de trabajo de publicación](.github/workflows/release.yml). Las **GitHub Releases** incluyen el instalador para Windows (`.exe`) y AppImages para Linux (**x64** y **arm64**).
- Las **imágenes de Docker** se publican en `ghcr.io/wsj-br/transrewrt`. Las etiquetas de las imágenes coinciden con la versión de Git (por ejemplo, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) además de la etiqueta `latest`. Multiplataforma: `linux/amd64` y `linux/arm64` (por ejemplo, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Colaboración

1. Haz un fork del repositorio.
2. Crea una rama para la funcionalidad: `git checkout -b feature/mi-funcionalidad`
3. Confirma tus cambios con un mensaje claro.
4. Súbelos y abre una solicitud de extracción (Pull Request) hacia `main`.

Por favor, sigue el estilo de código existente y prueba tus cambios tanto en modo Electron como web antes de enviarlos. Consulta [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para obtener instrucciones sobre cómo compilar y probar.

<br/>

**Reportar problemas:** Abre un problema en [GitHub](https://github.com/wsj-br/transrewrt/issues). Incluye tu plataforma (Windows / Linux / Docker) y la versión de la aplicación (mostrada en el cuadro "Acerca de" o en la página de versiones).

<br/><br/>

<a id="disclaimer"></a>
## Descargo de responsabilidad

Los nombres y logotipos de los productos son propiedad de sus respectivos dueños y se utilizan únicamente con fines de identificación. Este software no está afiliado ni avalado por ninguna de las marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licencia

Copyright © 2026 Waldemar Scudeller Jr.

[Licencia Apache 2.0](LICENSE)