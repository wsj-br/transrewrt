---
translated_at: "2026-03-25T22:24:57.337Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logotipo de Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versión"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licencia: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Herramienta de texto con IA: traduce entre idiomas, reescribe en diferentes estilos y transforma con indicaciones personalizadas — utilizando múltiples proveedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI y Ollama local). Funciona como aplicación de escritorio (Electron) o como aplicación web autohospedada (Docker).

- **Traducir** — entre docenas de idiomas, con detección automática del idioma de origen
- **Reescribir** — corregir gramática, mejorar la claridad, formal/informal, acortar, ampliar, técnico
- **Transformar** — indicaciones personalizadas de IA; crear y administrar indicaciones, idioma objetivo opcional por indicación
- **Historial** — historial completo de ejecuciones con texto de entrada/salida, filtros y exportación
- **Modelos y costos** — elegir modelos de cualquier proveedor configurado; paneles de costos y uso con registros, resúmenes por modelo/operación/día
- **Interfaz de usuario** — interfaz multilingüe (más de 30 idiomas, soporte RTL), fuentes, etc.
- **Modo web** — soporte multiusuario con roles administrativos
- **Escritorio** — aplicación Electron para Windows y Linux
- **Autohospedaje** — imagen Docker para amd64 y arm64 (lista para Raspberry Pi)

Una vez instalado, consulte la **[Guía del usuario](USER-GUIDE.es.md)** para un recorrido completo por todas las funciones.

<small>**Leer en otros idiomas:** [English (UK)](README.es.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sobre traducciones de la interfaz y documentación:** Todos los idiomas de la interfaz, excepto el original en inglés (UK),
> fueron traducidos mediante modelos de IA; puede que el contenido sea impreciso o contenga errores.

</small>

<br/>

<a id="screenshots"></a>
## Capturas de pantalla

**Selector de idioma**

![Selector de idioma](../images/screenshots/es/language-selector.png)

**Traducir**

![Traducir](../images/screenshots/es/translate.png)

**Transformar - editor de indicaciones**

![Transformar - editor de indicaciones](../images/screenshots/es/transform-prompt-edit.png)

**Panel de control**

![Panel de costos](../images/screenshots/es/dashboard-summary.png)

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
- [Contribución](#contribución)
- [Descargo de responsabilidad](#descargo-de-responsabilidad)
- [Licencia](#licencia)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="inicio-rápido"></a>
## Inicio rápido

**Docker (recomendado para alojamiento propio)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Reemplace `sk-or-your-key` con su [clave API de OpenRouter](https://openrouter.ai/keys) (o establezca claves de otros proveedores; vea [Configuración](#configuración-y-entorno)). Abra [http://localhost:5000](http://localhost:5000) y cambie la contraseña predeterminada del administrador antes de exponer el servicio.

<br/>

> ℹ️ **NOTA**<br/>
> En Docker, las credenciales del LLM se establecen mediante variables de entorno como `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (no en la interfaz web). En el escritorio (Electron), las claves se configuran en **Ajustes → API**.

<br/>

**Windows**

Descargue el último archivo `Transrewrt Setup x.y.z.exe` de [Releases](https://github.com/wsj-br/transrewrt/releases), ejecute el instalador y luego inicie la aplicación desde el menú Inicio o desde el acceso directo del escritorio. Ingrese sus claves API en **Ajustes → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

<br/>

**Linux**

Descargue el archivo `.AppImage` adecuado para su CPU desde [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para PC típicas, `arm64` para muchos dispositivos ARM, incluyendo Raspberry Pi 4+), luego:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ingrese sus claves API en **Ajustes → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

En Debian/Ubuntu puede necesitar instalar dependencias adicionales primero:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Vea [Instalación → Linux](#linux-electron) para más detalles.

<br/>

> ℹ️ **NOTA**<br/>
> Actualmente no se admite macOS. Transrewrt está disponible para Windows, Linux y Docker.

<br/>

Una vez que la aplicación esté en ejecución, consulte la **[Guía de usuario](USER-GUIDE.es.md)** para aprender cómo traducir, reescribir y transformar texto, gestionar indicaciones (prompts) y configurar modelos.

<br/><br/>

<a id="instalación"></a>
## Instalación

<a id="windows-electron"></a>
### Windows (Electron)

- Descargue el instalador más reciente de [Releases](https://github.com/wsj-br/transrewrt/releases).
- Ejecute el archivo `.exe` y siga las instrucciones del instalador.
- Primera ejecución: inicie la aplicación desde el menú Inicio o desde un acceso directo del escritorio.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descargue el archivo `.AppImage` correspondiente (`x64` o `arm64`) de [Releases](https://github.com/wsj-br/transrewrt/releases).
- Ejecute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` en x86_64/amd64, o use el nombre de archivo `...-arm64.AppImage` en ARM64.
- Dependencias adicionales (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Vea [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para más información.

<br/>

<a id="docker"></a>
### Docker

- Descargar: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Establezca al menos una clave de proveedor mediante variables de entorno (por ejemplo `OPENROUTER_KEY` para OpenRouter). Pase las variables con `-e` o usando `docker compose` / `.env` para que los secretos no se incluyan en la imagen.
- Las claves de proveedor **no** se introducen en la interfaz web; el servidor las lee desde el entorno.

Ejemplo: volumen nombrado para persistencia (clave OpenRouter mediante variable de entorno):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opción   | Descripción                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Puerto   | `5000` (mapeado con `-p 5000:5000`)                                                                            |
| Volumen  | Monte `/app/data` para persistencia de configuración y base de datos                                          |
| Variables de entorno | `PORT`, `CONFIG_PATH`, más claves de LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - vea [Configuración](#configuración-y-entorno) |

Para compilar y ejecutar desde el código fuente: `docker compose up --build -d` o `pnpm docker:up`; véase [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obtener una clave API de OpenRouter

Transrewrt admite múltiples proveedores de IA. [OpenRouter](https://openrouter.ai) es una opción popular porque agrega muchos modelos bajo una sola clave y ofrece modelos gratuitos.

1. Regístrese o inicie sesión en [openrouter.ai](https://openrouter.ai).
2. Abra la página [Keys](https://openrouter.ai/keys) y cree una nueva clave (asígnele un nombre y, opcionalmente, establezca un límite de crédito). Puede usar modelos gratuitos sin necesidad de agregar crédito.
3. **Escritorio (Electron):** pegue las claves en **Configuración → API**. **Docker:** defina variables de entorno como `OPENROUTER_KEY` (consulte [Inicio rápido](#quick-start)).

No use el modelo **Body Builder** de OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traducir, reescribir o transformar: devuelve cargas útiles de solicitudes JSON, no el texto completado necesario para estas tareas. Consulte [Configuración → Modelos](USER-GUIDE.es.md#models) en la Guía del usuario.

También puede usar otros proveedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o ejecutar modelos localmente con [Ollama](https://ollama.com). Consulte [Configuración](#configuration-and-environment) para ver la lista completa de proveedores admitidos y variables de entorno.

> ⚠️ **ADVERTENCIA**<br/>
> Si está usando Ollama desde otro dispositivo, contenedor o servicio, recuerde configurar Ollama para permitir conexiones externas (no solo localhost).


Para más información sobre límites, BYOK y otros aspectos, consulte [Autenticación de OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuración y entorno

**Ubicaciones del archivo de configuración**

| Despliegue          | Ubicación de la configuración                                  |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (use un volumen para mantener los datos) |

<br/>

**Variables de entorno** (solo web/Docker; Electron usa el archivo de configuración local)

| Variable         | Predeterminado            | Descripción |
| ---------------- | ------------------------- | ----------- |
| `PORT`           | `5000`                    | Puerto en el que escucha el servidor |
| `CONFIG_PATH`    | `/app/data/config.json`   | Ruta al archivo de configuración |
| `OPENROUTER_KEY` | *(vacío)*                 | Clave API de OpenRouter |
| `OPENAI_KEY`     | *(vacío)*                 | Clave API de OpenAI |
| `CEREBRAS_KEY`   | *(vacío)*                 | Clave API de Cerebras |
| `ANTHROPIC_KEY`  | *(vacío)*                 | Clave API de Anthropic |
| `GOOGLE_KEY`     | *(vacío)*                 | Clave API de Google Gemini |
| `DEEPSEEK_KEY`   | *(vacío)*                 | Clave API de DeepSeek |
| `GROQ_KEY`       | *(vacío)*                 | Clave API de Groq |
| `MISTRAL_KEY`    | *(vacío)*                 | Clave API de Mistral |
| `OLLAMA_URL`     | *(vacío)*                 | URL base de Ollama (por ejemplo, `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(vacío)*                 | Clave API de xAI |

Configure únicamente los proveedores que vaya a utilizar. Los identificadores de modelos están en espacios de nombres (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Visualización de costos:** OpenRouter devuelve el costo facturado exacto cuando es aplicable. Otros proveedores utilizan el costo **estimado** basado en los precios públicos de modelos de OpenRouter si se dispone de una clave OpenRouter; de lo contrario, el costo de los proveedores no OpenRouter puede mostrarse como `0`. Las estimaciones no constituyen facturas.

<br/>

**Datos y persistencia:** Para Docker, monte un volumen en `/app/data` para que `config.json` y la base de datos SQLite persistan tras reinicios del contenedor. Sin un volumen, todos los datos se perderán cuando el contenedor se detenga.

**Para desarrolladores:** Después de aplicar cambios que reemplacen la antigua configuración de una sola clave, restablezca o combine `data/config.json` con la nueva estructura predeterminada de `src/config-defaults/config_default.json` si su archivo local aún usa campos eliminados (`api_key`, `api_url`, opciones de proxy).

<br/>

**Autenticación web:**

- Administrador predeterminado: `admin` / `transrewrt26`.
- Gestione usuarios en **Configuración → Usuarios**.
- Restablezca una contraseña: `docker exec <contenedor> reset-web-password '<usuario>' '<nueva-contraseña>'`
  (desde el código fuente: `pnpm run reset-web-password -- <usuario> <contraseña>`)

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> Cambie inmediatamente la contraseña predeterminada del administrador en cualquier sistema con acceso de red.

<br/>

Los ajustes principales (fuente, modelos, idiomas, etc.) están disponibles en la configuración de la aplicación.

<br/><br/>

<a id="development-and-architecture"></a>

## Desarrollo y arquitectura

- **Desarrollo:** Configuración, compilación, pruebas e implementación (Electron, Web, Docker) - ver **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitectura y visión general del sistema:** Estructura de carpetas, tecnologías utilizadas, decisiones de diseño - ver **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versiones y etiquetas

- Las **etiquetas de Git** `v`* (por ejemplo, `v1.0.10`) activan el [flujo de trabajo de publicación](.github/workflows/release.yml). Las **versiones de GitHub** incluyen el instalador para Windows (`.exe`) y los AppImages para Linux (**x64** y **arm64**).
- Las **imágenes de Docker** se publican en `ghcr.io/wsj-br/transrewrt`. Las etiquetas de las imágenes coinciden con la versión de Git (por ejemplo, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) además de la etiqueta `latest`. Soporte multiplataforma: `linux/amd64` y `linux/arm64` (por ejemplo, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Colaboraciones

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad: `git checkout -b feature/mi-funcionalidad`
3. Confirma tus cambios con un mensaje claro.
4. Envíalos y abre una solicitud de extracción (Pull Request) hacia `main`.

Por favor, sigue el estilo de código existente y prueba tus cambios en los modos Electron y web antes de enviarlos. Consulta [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para las instrucciones de compilación y pruebas.

<br/>

**Informar errores:** Abre un ticket en [GitHub](https://github.com/wsj-br/transrewrt/issues). Incluye tu sistema (Windows / Linux / Docker) y la versión de la aplicación (mostrada en el diálogo Acerca de o en la página de versiones).

<br/><br/>

<a id="disclaimer"></a>
## Exención de responsabilidad

Los nombres y logotipos de productos pertenecen a sus respectivos propietarios y se utilizan únicamente con fines de identificación. Este software no está afiliado ni es respaldado por ninguna de las marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licencia

Derechos de autor © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)