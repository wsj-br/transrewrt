---
translated_at: "2026-03-24T03:22:31.355Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="logo de Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Versión"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licencia: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Herramienta de texto con inteligencia artificial: traduce entre idiomas, reescribe en diferentes estilos y transforma con indicaciones personalizadas, utilizando múltiples proveedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI y Ollama local). Funciona como aplicación de escritorio (Electron) o como aplicación web autohospedada (Docker).

- **Traducir** — entre decenas de idiomas, con detección automática del idioma de origen
- **Reescribir** — corregir gramática, mejorar claridad, formal/informal, acortar, ampliar, nivel técnico
- **Transformar** — indicaciones personalizadas de IA; crea y gestiona indicaciones, con idioma de destino opcional por indicación
- **Historial** — historial completo de operaciones con texto de entrada/salida, filtros y función de exportación
- **Modelos y costos** — elige modelos de cualquier proveedor configurado; panel de costos con registro en SQLite, resúmenes por modelo/operación/día
- **Interfaz de usuario** — interfaz multilingüe (más de 30 idiomas, compatible con escritura derecha a izquierda), fuentes, etc.
- **Modo web** — soporte multiusuario con roles de administrador; las claves API permanecen en el servidor, sin exponerse al navegador
- **Escritorio** — aplicación Electron para Windows y Linux
- **Autohospedaje** — imagen Docker para amd64 y arm64 (lista para Raspberry Pi)

Una vez instalado, consulta la **[Guía de usuario](USER-GUIDE.es.md)** para una descripción completa de todas las funciones.

<small>**Leer en otros idiomas:** [English (UK)](README.es.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**Nota sobre las traducciones de la interfaz y documentación:** Todos los idiomas de la interfaz, excepto el inglés (UK), fueron traducidos mediante modelos de IA; es posible que el lenguaje sea impreciso o contenga errores.

<br/><br/>

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

**Ajustes - selección de modelo**

![Ajustes - selección de modelo](../images/screenshots/es/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Tabla de Contenidos

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Inicio rápido](#inicio-rápido)
- [Instalación](#instalación)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obtener una clave API de OpenRouter](#obtener-una-clave-api-de-openrouter)
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

Reemplace `sk-or-your-key` con su [clave API de OpenRouter](https://openrouter.ai/keys) (o establezca claves de otro proveedor; véase [Configuración](#configuración-y-entorno)). Abra [http://localhost:5000](http://localhost:5000) y cambie la contraseña predeterminada del administrador antes de exponer el servicio.

<br/>

> ℹ️ **NOTA**<br/>
> En Docker, las credenciales de los modelos de lenguaje (LLM) se establecen mediante variables de entorno como `OPENROUTER_KEY`, `OPENAI_KEY`, … (no en la interfaz web). En la versión de escritorio (Electron), configure las claves en **Ajustes → API**.

<br/>

**Windows**

Descargue el último archivo `Transrewrt Setup x.y.z.exe` de [Versiones](https://github.com/wsj-br/transrewrt/releases), ejecute el instalador y luego inícielo desde el menú Inicio o un acceso directo en el escritorio. Introduzca sus claves API en **Ajustes → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

<br/>

**Linux**

Descargue el archivo `.AppImage` desde [Versiones](https://github.com/wsj-br/transrewrt/releases), luego:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Introduzca sus claves API en **Ajustes → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

En Debian/Ubuntu puede necesitar instalar dependencias adicionales primero:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Consulte [Instalación → Linux](#linux-electron) para más detalles.

<br/>

> ℹ️ **NOTA**<br/>
> macOS no es compatible actualmente. Transrewrt está disponible para Windows, Linux y Docker.

<br/>

Una vez que la aplicación esté en ejecución, consulte la **[Guía de Usuario](USER-GUIDE.es.md)** para aprender cómo traducir, reescribir y transformar texto, gestionar indicaciones (prompts) y configurar modelos.

<br/><br/>

<a id="instalación"></a>
## Instalación

<a id="windows-electron"></a>
### Windows (Electron)

- Descargue el instalador más reciente desde [Versiones](https://github.com/wsj-br/transrewrt/releases).
- Ejecute el archivo `.exe` y siga las instrucciones del instalador.
- Primera ejecución: inicie la aplicación desde el menú Inicio o un acceso directo en el escritorio.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descargue el archivo `.AppImage` desde [Versiones](https://github.com/wsj-br/transrewrt/releases).
- Ejecute: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Dependencias adicionales (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consulte [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para más información.

<br/>

<a id="docker"></a>
### Docker

- Descargue la imagen: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Establezca al menos una clave de proveedor mediante variables de entorno (por ejemplo, `OPENROUTER_KEY` para OpenRouter). Pase las variables con `-e` o mediante `docker compose` / `.env` para que los secretos no queden integrados en la imagen.
- Las claves de los proveedores **no** se introducen en la interfaz web; el servidor las lee desde el entorno.

Ejemplo - volumen nombrado para persistencia (clave de OpenRouter mediante variable de entorno):

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
| Puerto   | `5000` (asigne con `-p 5000:5000`)                                                                              |
| Volumen  | Monte `/app/data` para preservar la configuración y la base de datos                                          |
| Variables de entorno | `PORT`, `CONFIG_PATH`, además de claves LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - véase [Configuración](#configuración-y-entorno) |

Para compilar y ejecutar desde el código fuente: `docker compose up --build -d` o `pnpm docker:up` - consulte [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obtener una clave API de OpenRouter

Transrewrt admite múltiples proveedores de IA. [OpenRouter](https://openrouter.ai) es una opción popular porque agrega muchos modelos bajo una sola clave y ofrece modelos gratuitos.

1. Regístrese o inicie sesión en [openrouter.ai](https://openrouter.ai).
2. Abra la página [Keys](https://openrouter.ai/keys) y cree una nueva clave (asígnele un nombre, y opcionalmente establezca un límite de crédito). Puede usar modelos gratuitos sin agregar crédito.
3. **Escritorio (Electron):** pegue las claves en **Ajustes → API**. **Docker:** establezca variables de entorno como `OPENROUTER_KEY` (véase [Inicio rápido](#quick-start)).

También puede utilizar otros proveedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) o ejecutar modelos localmente con [Ollama](https://ollama.com). Consulte [Configuración](#configuration-and-environment) para obtener la lista completa de proveedores soportados y variables de entorno.

Para información sobre límites, uso propio de claves (BYOK) y más, consulte [Autenticación en OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuración y entorno

**Ubicaciones del archivo de configuración**

| Despliegue         | Ubicación de la configuración                    |
| ------------------ | ------------------------------------------------ |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Web / Docker       | `/app/data/config.json` (use un volumen para persistencia) |

<br/>

**Variables de entorno** (solo web/Docker; Electron usa el archivo de configuración local)

| Variable         | Predeterminado           | Descripción |
| ---------------- | ------------------------ | ----------- |
| `PORT`           | `5000`                   | Puerto de escucha del servidor |
| `CONFIG_PATH`    | `/app/data/config.json`  | Ruta al archivo de configuración |
| `OPENROUTER_KEY` | *(vacío)*                | Clave API de OpenRouter |
| `OPENAI_KEY`     | *(vacío)*                | Clave API de OpenAI |
| `ANTHROPIC_KEY`  | *(vacío)*                | Clave API de Anthropic |
| `GOOGLE_KEY`     | *(vacío)*                | Clave API de Google Gemini |
| `DEEPSEEK_KEY`   | *(vacío)*                | Clave API de DeepSeek |
| `GROQ_KEY`       | *(vacío)*                | Clave API de Groq |
| `MISTRAL_KEY`    | *(vacío)*                | Clave API de Mistral |
| `OLLAMA_URL`     | *(vacío)*                | URL base de Ollama (por ejemplo, `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(vacío)*                | Clave API de xAI |

Configure únicamente los proveedores que vaya a utilizar. Los identificadores de modelos están dentro de espacios de nombres (`openrouter/…`, `openai/…`, `ollama/…`, etc.).

**Visualización de costos:** OpenRouter devuelve el costo facturado exacto cuando corresponde. Otros proveedores usan el costo **estimado** basado en los precios públicos de modelos de OpenRouter cuando está disponible una clave OpenRouter; si no existe, el costo de los proveedores no OpenRouter puede mostrarse como `0`. Las estimaciones no son facturas.

<br/>

**Datos y persistencia:** En Docker, monte un volumen en `/app/data` para que `config.json` y la base de datos SQLite persistan entre reinicios del contenedor. Sin un volumen, todos los datos se pierden al detener el contenedor.

**Desarrolladores:** Después de actualizar cambios que reemplazan la configuración anterior de una sola clave, restablezca o combinen `data/config.json` con la estructura predeterminada nueva de `src/config-defaults/config_default.json`, si su archivo local aún usa campos eliminados (`api_key`, `api_url`, opciones de proxy).

<br/>

**Autenticación web:**

- Usuario administrador predeterminado: `admin` / `transrewrt26`.
- Gestione usuarios en **Ajustes → Usuarios**.
- Para restablecer una contraseña: `docker exec <contenedor> reset-web-password '<nombre-de-usuario>' '<nueva-contraseña>'`
  (desde el código fuente: `pnpm run reset-web-password -- <nombre-de-usuario> <nueva-contraseña>`)

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> Cambie inmediatamente la contraseña predeterminada del administrador en cualquier host accesible desde la red.

<br/>

Los ajustes principales (fuente, modelos, idiomas, etc.) están disponibles en los Ajustes de la aplicación.

<br/><br/>

<a id="development-and-architecture"></a>
## Desarrollo y arquitectura

- **Desarrollo:** Configuración, compilación, pruebas e implementación (Electron, Web, Docker) - consulte **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitectura y visión general del sistema:** Estructura de carpetas, tecnologías utilizadas, decisiones de diseño - consulte **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Lanzamientos y etiquetas

- Las **etiquetas de Git** `v`* (por ejemplo, `v1.0.10`) activan el [flujo de trabajo de publicación](.github/workflows/release.yml). Las **GitHub Releases** incluyen el instalador para Windows (`.exe`) y el AppImage para Linux.
- Las **imágenes de Docker** se publican en `ghcr.io/wsj-br/transrewrt`. Las etiquetas de las imágenes coinciden con la versión de Git (por ejemplo, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) más la etiqueta `latest`. Arquitecturas múltiples: `linux/amd64` y `linux/arm64` (por ejemplo, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribución

1. Haz un fork del repositorio.
2. Crea una rama para la funcionalidad: `git checkout -b feature/my-feature`
3. Confirma tus cambios con un mensaje claro.
4. Sube los cambios y abre un Pull Request hacia `main`.

Por favor, sigue el estilo de código existente y prueba tus cambios tanto en modo Electron como en modo web antes de enviar. Consulta [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para instrucciones sobre compilación y pruebas.

<br/>

**Reportar problemas:** Abre una incidencia en [GitHub](https://github.com/wsj-br/transrewrt/issues). Incluye tu plataforma (Windows / Linux / Docker) y la versión de la aplicación (mostrada en el cuadro de diálogo "Acerca de" o en la página de lanzamientos).

<br/><br/>

<a id="disclaimer"></a>
## Descargo de responsabilidad

Los nombres y logotipos de productos pertenecen a sus respectivos propietarios y se utilizan únicamente con fines de identificación. Este software no está afiliado ni patrocinado por ninguna de las marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licencia

Derechos de autor © 2026 Waldemar Scudeller Jr.

[Licencia Apache 2.0](LICENSE)