---
translated_at: "2026-03-27T22:53:40.966Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="logotipo de Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versión"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licencia: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Herramienta de texto con inteligencia artificial: traduce entre idiomas, reescribe en distintos estilos y transforma con indicaciones personalizadas, utilizando múltiples proveedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI y Ollama local). Funciona como aplicación de escritorio (Electron) o como aplicación web autoalojada (Docker).

- **Traducir** — entre decenas de idiomas, con detección automática del idioma origen
- **Reescribir** — corregir gramática, mejorar claridad, formal/informal, acortar, expandir, técnico
- **Transformar** — indicaciones personalizadas de IA; crea y gestiona indicaciones, idioma objetivo opcional por indicación
- **Historial** — historial completo de ejecución con texto de entrada/salida, filtros y exportación
- **Modelos y costos** — elige modelos de cualquier proveedor configurado; paneles de costos y uso con registro, resúmenes por modelo/operación/día
- **Interfaz** — interfaz multilingüe (más de 30 idiomas, soporte RTL), fuentes, ...
- **Modo web** — soporte multiusuario con roles de administrador
- **Escritorio** — aplicación Electron para Windows y Linux
- **Autoalojado** — imagen Docker para amd64 y arm64 (listo para Raspberry Pi)

Tras la instalación, consulta la **[Guía de usuario](USER-GUIDE.es.md)** para una explicación completa de todas las funciones.

<small>**Leer en otros idiomas:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sobre traducciones de la interfaz y documentación:** Todos los idiomas de la interfaz excepto el inglés original (UK)
> han sido traducidos mediante modelos de IA; el texto puede ser impreciso o contener errores.

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

**Panel**

![Panel de costos](../images/screenshots/es/dashboard-summary.png)

**Historial**

![Historial](../images/screenshots/es/history.png)

**Configuración - selección de modelo**

![Configuración - selección de modelo](../images/screenshots/es/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Tabla de contenidos

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Inicio rápido](#quick-start)
- [Instalación](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obtener una clave de API de OpenRouter](#getting-an-openrouter-api-key)
- [Configuración y entorno](#configuration-and-environment)
- [Desarrollo y arquitectura](#development-and-architecture)
- [Versiones y etiquetas](#releases-and-tags)
- [Colaboración](#contributing)
- [Descargo de responsabilidad](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Inicio rápido

**Docker (recomendado para autoalojamiento)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Reemplace `sk-or-your-key` por su [clave API de OpenRouter](https://openrouter.ai/keys) (o establezca claves de otros proveedores; consulte [Configuración](#configuration-and-environment)). Abra [http://localhost:5000](http://localhost:5000) y cambie la contraseña predeterminada del administrador antes de exponer el servicio.

<br/>

> ℹ️ **NOTA**<br/>
> En Docker, las credenciales de modelos de lenguaje grandes (LLM) se configuran mediante variables de entorno como `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (no en la interfaz web). En la versión de escritorio (Electron) configure las claves en **Configuración → API**.

<br/>

**Windows**

Descargue el último `Transrewrt Setup x.y.z.exe` de [Versiones](https://github.com/wsj-br/transrewrt/releases), ejecute el instalador y luego lance la aplicación desde el menú Inicio o el acceso directo del escritorio. Introduzca sus claves API en **Configuración → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

<br/>

**Linux**

Descargue el archivo `.AppImage` para su procesador desde [Versiones](https://github.com/wsj-br/transrewrt/releases) (`x64` para PC típicos, `arm64` para muchos dispositivos ARM, incluido Raspberry Pi 4+), luego:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduzca sus claves API en **Configuración → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

En Debian/Ubuntu puede necesitar instalar dependencias adicionales primero:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Consulte [Instalación → Linux](#linux-electron) para más detalles.

<br/>

> ℹ️ **NOTA**<br/>
> Actualmente no se admite macOS. Transrewrt está disponible para Windows, Linux y Docker.

<br/>

Una vez que la aplicación está en ejecución, consulte la **[Guía de usuario](USER-GUIDE.es.md)** para aprender a traducir, reescribir y transformar texto, gestionar indicaciones y configurar modelos.

<br/><br/>

<a id="installation"></a>
## Instalación

<a id="windows-electron"></a>
### Windows (Electron)

- Descargue el instalador más reciente de [Versiones](https://github.com/wsj-br/transrewrt/releases).
- Ejecute el archivo `.exe` y siga las instrucciones del instalador.
- Primera ejecución: inicie la aplicación desde el menú Inicio o un acceso directo del escritorio.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descargue el archivo `.AppImage` compatible (`x64` o `arm64`) desde [Versiones](https://github.com/wsj-br/transrewrt/releases).
- Ejecute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` en x86_64/amd64, o use el nombre de archivo `...-arm64.AppImage` en ARM64.
- Dependencias adicionales (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consulte [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para más información.

<br/>

<a id="docker"></a>
### Docker

- Descargar: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Configure al menos una clave de proveedor mediante variables de entorno (por ejemplo, `OPENROUTER_API_KEY` para OpenRouter). Pase las variables con `-e` o mediante `docker compose` / `.env` para que las credenciales no se incluyan en la imagen.
- Las claves de los proveedores **no** se introducen en la interfaz web; el servidor las lee del entorno.

Ejemplo: volumen con nombre para persistencia (clave de OpenRouter mediante variable de entorno):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

o, si prefiere usar Docker Compose, utilice:

# descargar el archivo compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# editar el archivo para añadir las API_KEYS
vi transrewrt.yml
# iniciar el contenedor
docker compose -f transrewrt.yml up -d
```

<br/>

| Opción   | Descripción                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Puerto   | `5000` (mapea con `-p 5000:5000`)                                                                                                       |
| Volumen  | Monta `/app/data` para configuración y persistencia de la base de datos                                                                 |
| Variables de entorno | `PORT`, `CONFIG_PATH`, además de claves LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - ver [Configuración](#configuracion-y-entorno) |

Para construir y ejecutar desde el código fuente: `docker compose up --build -d` o `pnpm docker:up` - ver [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Obtener una clave API de OpenRouter

Transrewrt soporta múltiples proveedores de IA. [OpenRouter](https://openrouter.ai) es una opción popular porque agrupa muchos modelos bajo una misma clave y ofrece modelos gratuitos.

1. Regístrate o inicia sesión en [openrouter.ai](https://openrouter.ai).
2. Ve a la página [Keys](https://openrouter.ai/keys) y crea una nueva clave (ponle un nombre y, opcionalmente, un límite de crédito). Puedes usar modelos gratuitos sin añadir crédito.
3. **Escritorio (Electron):** pega las claves en **Configuración → API**. **Docker:** define variables de entorno como `OPENROUTER_API_KEY` (ver [Inicio rápido](#inicio-rapido)).

No uses el modelo **Body Builder** de OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traducir, reescribir o transformar: devuelve cargas de solicitud JSON, no el texto completado necesario para esas tareas. Consulta [Configuración → Modelos](USER-GUIDE.es.md#models) en la Guía de usuario.

También puedes usar otros proveedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o ejecutar modelos localmente con [Ollama](https://ollama.com). Consulta [Configuración](#configuracion-y-entorno) para obtener la lista completa de proveedores compatibles y variables de entorno.

> ⚠️ **ADVERTENCIA**<br/>
> Si estás usando Ollama desde otro dispositivo, contenedor o servicio, recuerda configurar Ollama para permitir conexiones externas (no solo localhost).

Para límites, BYOK y más, consulta [autenticación de OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuración y entorno

**Ubicaciones del archivo de configuración**

| Despliegue         | Ubicación de la configuración                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (usa un volumen para mantener los datos) |

<br/>

**Variables de entorno** (solo web/Docker; Electron usa el archivo de configuración local)

| Variable         | Por defecto             | Descripción |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Puerto en el que el servidor escucha |
| `CONFIG_PATH`    | `/app/data/config.json` | Ruta al archivo de configuración |
| `OPENROUTER_API_KEY` | *(vacío)*                 | Clave API de OpenRouter |
| `OPENAI_API_KEY`     | *(vacío)*                 | Clave API de OpenAI |
| `CEREBRAS_API_KEY`   | *(vacío)*                 | Clave API de Cerebras |
| `ANTHROPIC_API_KEY`  | *(vacío)*                 | Clave API de Anthropic |
| `GOOGLE_API_KEY`     | *(vacío)*                 | Clave API de Google Gemini |
| `DEEPSEEK_API_KEY`   | *(vacío)*                 | Clave API de DeepSeek |
| `GROQ_API_KEY`       | *(vacío)*                 | Clave API de Groq |
| `MISTRAL_API_KEY`    | *(vacío)*                 | Clave API de Mistral |
| `OLLAMA_URL`     | *(vacío)*                 | URL base de Ollama (ej. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(vacío)*                 | Clave API de xAI |

Configura únicamente los proveedores que utilices. Los identificadores de modelos están agrupados en espacios de nombres (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Visualización de costos:** OpenRouter devuelve el costo facturado exacto cuando corresponde. Otros proveedores utilizan el costo **estimado** a partir de las tarifas públicas de modelos de OpenRouter cuando se dispone de una clave de OpenRouter; sin ella, el costo de proveedores no-OpenRouter podría mostrarse como `0`. Las estimaciones no son facturas.

<br/>

**Datos y persistencia:** Para Docker, monta un volumen en `/app/data` para que `config.json` y la base de datos SQLite persistan tras reinicios del contenedor. Sin un volumen, todos los datos se perderán al detener el contenedor.

**Desarrolladores:** Después de aplicar cambios que reemplazan la configuración anterior de clave única, reinicia o fusiona `data/config.json` con la nueva forma predeterminada de `src/config-defaults/config_default.json` si tu archivo local aún utiliza campos eliminados (`api_key`, `api_url`, opciones de proxy).

<br/>

**Autenticación web:**

- Administrador por defecto: `admin` / `transrewrt26`.
- Gestiona usuarios en **Configuración → Usuarios**.
- Restablece una contraseña: `docker exec <contenedor> reset-web-password '<usuario>' '<nueva-contraseña>'`
  (desde el código fuente: `pnpm run reset-web-password -- <usuario> <contraseña-nueva>`)

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> Cambia inmediatamente la contraseña predeterminada del administrador en cualquier host accesible por red.

<br/>

Los ajustes principales (fuente, modelos, idiomas, etc.) están disponibles en la Configuración de la aplicación.

<br/><br/>

<a id="development-and-architecture"></a>
## Desarrollo y arquitectura

- **Desarrollo:** Configuración, construcción, pruebas e implementación (Electron, Web, Docker) - consulta **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitectura y descripción general del sistema:** Estructura de carpetas, pila tecnológica, decisiones de diseño - consulta **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versiones y etiquetas

- **Etiquetas Git** `v`* (por ejemplo, `v1.0.10`) activan el [flujo de trabajo de publicación](.github/workflows/release.yml). **GitHub Releases** adjunta el instalador para Windows (`.exe`) y AppImages para Linux (**x64** y **arm64**).
- **Imágenes Docker** se publican en `ghcr.io/wsj-br/transrewrt`. Las etiquetas de la imagen coinciden con la versión Git (por ejemplo, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) más la etiqueta `latest`. Soporte multiarquitectura: `linux/amd64` y `linux/arm64` (por ejemplo, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribución

1. Haz un fork del repositorio.
2. Crea una rama para la función: `git checkout -b feature/mi-funcion`
3. Confirma tus cambios con un mensaje claro.
4. Sube los cambios y abre una solicitud de extracción (Pull Request) contra `main`.

Sigue el estilo de código existente y prueba los cambios en los modos Electron y web antes de enviar. Consulta [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para instrucciones sobre cómo construir y probar.

<br/>

**Reportar problemas:** Abre un problema en [GitHub](https://github.com/wsj-br/transrewrt/issues). Incluye tu plataforma (Windows / Linux / Docker) y la versión de la aplicación (mostrada en el cuadro "Acerca de" o en la página de Versiones).

<br/><br/>

<a id="disclaimer"></a>
## Descargo de responsabilidad

Los nombres y logotipos de productos pertenecen a sus respectivos dueños y se utilizan únicamente con fines de identificación. Este software no está afiliado ni respaldado por ninguna de las marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licencia

Copyright © 2026 Waldemar Scudeller Jr.

[Licencia Apache 2.0](LICENSE)