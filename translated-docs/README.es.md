---
translation_last_updated: '2026-03-31T22:58:02.487Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: es
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tabla de contenidos**

- [Capturas de pantalla](#screenshots)
- [Tabla de contenidos](#table-of-contents)
- [Inicio rápido](#quick-start)
- [Instalación](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Configuración de la zona horaria](#configuring-the-timezone)
- [Obtención de una clave API de OpenRouter](#getting-an-openrouter-api-key)
- [Configuración y entorno](#configuration-and-environment)
- [Desarrollo y arquitectura](#development-and-architecture)
- [Informar de problemas](#reporting-issues)
- [Descargo de responsabilidad](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Herramienta de texto con inteligencia artificial: traducir entre idiomas, reescribir en diferentes estilos y transformar con prompts personalizados — utilizando múltiples proveedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI y Ollama local). Funciona como aplicación de escritorio (Electron) o como aplicación web autohospedada (Docker).

- **Traducir** — entre docenas de idiomas, con detección automática del idioma de origen
- **Reescritura** — corregir gramática, mejorar claridad, formal/informal, acortar, expandir, técnico
- **Transformación** — prompts personalizados de IA; crear y gestionar prompts, con idioma de destino opcional por prompt
- **Historial** — historial completo de ejecuciones con texto de entrada/salida, filtros y exportación
- **Modelos y costo** — elegir modelos de cualquier proveedor configurado; paneles de costo y uso con registro, resúmenes por modelo/operación/día
- **Interfaz de usuario** — interfaz multilingüe (más de 30 idiomas, soporte RTL), fuentes, ...
- **Modo web** — soporte multiusuario con roles de administrador
- **Escritorio** — aplicación Electron para Windows y Linux
- **Autohospedado** — imagen Docker para amd64 y arm64 (listo para Raspberry Pi)

Una vez instalado, consulte la **[Guía del usuario](USER-GUIDE.es.md)** para una descripción completa de todas las funciones.

**Leer en otros idiomas:**
[Inglés (Reino Unido)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [Inglés (EE. UU.)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)

> **Nota sobre las traducciones de la interfaz y la documentación:** Todos los idiomas de la interfaz, excepto el inglés (Reino Unido) original, 
> fueron traducidos mediante modelos de IA; la redacción puede ser imprecisa o contener errores.

## Capturas de pantalla

**Selector de idioma**

Selector de idioma

**Traducir**

Traducir

**Transformar - editor de prompts**

Transformación - editor de prompt

**Panel**

Resumen del panel — uso

**Historial**

Historial

**Configuración - selección de modelo**

Configuración - selección de modelo

## Tabla de contenidos

- [Inicio rápido](#quick-start)
- [Instalación](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Configuración de la zona horaria](#configuring-the-timezone)
- [Obtener una clave API de OpenRouter](#getting-an-openrouter-api-key)
- [Configuración y entorno](#configuration-and-environment)
- [Desarrollo y arquitectura](#development-and-architecture)
- [Informar de problemas](#reporting-issues)
- [Descargo de responsabilidad](#disclaimer)
- [Licencia](#license)

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

Reemplace `sk-or-your-key` con su [clave API de OpenRouter](https://openrouter.ai/keys) (o establezca claves de otros proveedores; consulte [Configuración](#configuration-and-environment)). Abra [http://localhost:5000](http://localhost:5000) y cambie la contraseña predeterminada del administrador antes de exponer el servicio.

> ℹ️ **NOTA**  
>
> En Docker, las credenciales del LLM se establecen mediante variables de entorno como `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (no en la interfaz web). En la versión de escritorio (Electron), configura las claves en **Configuración → API**.

**Windows**

Descargue el último `Transrewrt Setup x.y.z.exe` de [Releases](https://github.com/wsj-br/transrewrt/releases), ejecute el instalador y luego inicie la aplicación desde el menú Inicio o el acceso directo del escritorio. Ingrese sus claves API en **Configuración → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

**Linux**

Descargue el archivo `.AppImage` para su CPU desde [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para PC típicos, `arm64` para muchos dispositivos ARM, incluyendo Raspberry Pi 4+), luego:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ingrese sus claves API en **Configuración → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

**Mensajes de consola:** Las versiones empaquetadas para Linux (`x64` y `arm64` AppImages) suprimen las advertencias de desuso de Node en la terminal (por ejemplo, el módulo integrado `punycode`). Si Chromium muestra errores de GPU / EGL como “GLES3 no es compatible”, pero la aplicación funciona, puedes silenciarlos desactivando la aceleración por hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Esto también aplica para amd64; cambia el nombre del archivo para que coincida con tu descarga. Consulta [Instalación → Linux (Electron)](#linux-electron) para más detalles.

En Debian/Ubuntu podrías necesitar bibliotecas adicionales en **tiempo de ejecución** que Chromium espera (a menudo ya están presentes en escritorios completos). Usa **`libnotify4`** para las notificaciones de escritorio, **no** `libnotify-dev` (esto es para compilar software, no para ejecutar el AppImage empaquetado):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Imágenes mínimas o personalizadas aún podrían fallar por una biblioteca `.so` faltante; instala el paquete que menciona el error (extras comunes: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Algunos entornos necesitan FUSE para ejecutar AppImages (por ejemplo, `libfuse2` en Ubuntu 22.04+), o usa `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

Consulta [Instalación → Linux](#linux-electron) para el mismo resumen.

> ℹ️ **NOTA**  
>
> macOS no es compatible actualmente. Transrewrt está disponible para Windows, Linux y Docker.

Una vez que la aplicación esté en ejecución, consulte la **[Guía del usuario](USER-GUIDE.es.md)** para aprender cómo traducir, reescribir y transformar texto, gestionar indicaciones y configurar modelos.

## Instalación

### Windows (Electron)

- Descargue el instalador más reciente desde [Releases](https://github.com/wsj-br/transrewrt/releases).
- Ejecute el archivo `.exe` y siga las instrucciones del instalador.
- Primera ejecución: inicie la aplicación desde el menú Inicio o el acceso directo del escritorio.

> ℹ️ **NOTA**  
>
> Windows puede mostrar una de estas advertencias de seguridad (normal para aplicaciones sin firmar o independientes):
>
> - **Control de cuentas de usuario (UAC)**: "¿Desea permitir que esta aplicación de un editor desconocido realice cambios en su dispositivo?" → Haga clic en **Sí**.
> - **Microsoft Defender SmartScreen**: "Windows protegió su PC" → Haga clic en **Más información** → **Ejecutar de todas formas**.
>
> Esto ocurre porque la aplicación no está firmada por Microsoft ni por un editor importante; es segura si se descarga desde nuestras versiones oficiales de GitHub
>  (verifique el hash SHA256 indicado a continuación).

### Linux (Electron)

- Descargue el archivo `.AppImage` correspondiente (`x64` o `arm64`) desde [Versiones](https://github.com/wsj-br/transrewrt/releases).
- Ejecute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` en x86_64/amd64, o use el nombre de archivo `...-arm64.AppImage` en ARM64.
- **Bibliotecas en tiempo de ejecución para Debian/Ubuntu** (Electron/Chromium; igual que en [Inicio rápido → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — use **`libnotify4`**, no `libnotify-dev`. En sistemas mínimos, instale cualquier archivo `.so` que falte y aparezca en la terminal; a menudo se requieren complementos como `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`. AppImage puede necesitar `libfuse2` (Ubuntu 22.04+) o `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Mensajes de GPU:** Chromium puede registrar errores de inicialización de GPU o EGL en algunos sistemas (especialmente ARM); la aplicación aún puede ejecutarse normalmente. Para evitar esos mensajes, inicie la aplicación con la aceleración por hardware desactivada: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (o el nombre de archivo `arm64` correspondiente).

### Docker

- Descargue la imagen: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Establezca al menos una clave de proveedor mediante variables de entorno (por ejemplo, `OPENROUTER_API_KEY` para OpenRouter). Pase las variables con `-e` o mediante `docker compose` / `.env` para que los secretos no queden integrados en la imagen.
- Las claves de los proveedores **no** se ingresan en la interfaz web; el servidor las lee desde el entorno.

Ejemplo - volumen nombrado para persistencia (clave de OpenRouter mediante variable de entorno):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

o si prefiere usar Docker Compose, utilice:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Consulte [Configuration](#configuration-and-environment) para obtener todas las variables de entorno, como `PORT`, `CONFIG_PATH`, `TZ` y claves de LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

### Configuración de la zona horaria

La fecha y hora de la interfaz de usuario de la aplicación siguen la configuración regional y la zona horaria del **navegador**. Para el comportamiento en el **lado del servidor** (registro de eventos y similares), el contenedor utiliza la variable de entorno `TZ`. El valor predeterminado es `TZ=Europe/London`.

Para usar otra zona horaria, establezca `TZ` en su archivo Compose, por ejemplo:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

O pásela al ejecutar el contenedor (Docker):

```bash
--env TZ=America/Sao_Paulo
```

En muchos sistemas Linux puede copiar el nombre de la zona horaria del sistema con:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Una lista de nombres válidos de zonas horarias se mantiene en la [base de datos tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

## Obtener una clave API de OpenRouter

Transrewrt admite múltiples proveedores de IA. [OpenRouter](https://openrouter.ai) es una opción popular porque agrega muchos modelos bajo una sola clave y ofrece modelos gratuitos.

1. Regístrese o inicie sesión en [openrouter.ai](https://openrouter.ai).
2. Abra la página [Keys](https://openrouter.ai/keys) y cree una nueva clave (asígnele un nombre y, opcionalmente, establezca un límite de crédito). Puede usar modelos gratuitos sin agregar crédito.
3. **Escritorio (Electron):** pegue las claves en **Configuración → API**. **Docker:** establezca variables de entorno como `OPENROUTER_API_KEY` (consulte [Inicio rápido](#quick-start)).

No use el modelo **Body Builder** de OpenRouter (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) para traducir, reescribir o transformar: devuelve cargas JSON de solicitudes, no el texto completado para esas tareas. Consulte [Configuración → Modelos](USER-GUIDE.es.md#models) en la Guía del Usuario.

También puede usar otros proveedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o ejecutar modelos localmente con [Ollama](https://ollama.com). Consulte [Configuration](#configuration-and-environment) para obtener la lista completa de proveedores compatibles y variables de entorno.

> ⚠️ **ADVERTENCIA**  
>
> Si está utilizando Ollama desde otro dispositivo, contenedor o servicio, recuerde configurar Ollama para permitir conexiones externas (no solo localhost).

Para límites, BYOK y más, consulte [autenticación de OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

## Configuración y entorno

**Ubicaciones del archivo de configuración**

| Despliegue         | Ubicación de la configuración                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (use un volumen para persistencia) |

**Variables de entorno** (solo web/Docker; Electron usa el archivo de configuración local)

| Variable             | Predeterminado                 | Descripción                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Puerto en el que escucha el servidor                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | Ruta al archivo de configuración                                                                                                     |
| `TZ`                 | `Europe/London`         | Zona horaria IANA para la hora del lado del servidor (registros, etc.); la interfaz sigue la del navegador. Consulte [Docker → zona horaria](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(vacío)*               | Clave API de OpenRouter                                                                                                          |
| `OPENAI_API_KEY`     | *(vacío)*               | Clave API de OpenAI                                                                                                              |
| `CEREBRAS_API_KEY`   | *(vacío)*               | Clave API de Cerebras                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(vacío)*               | Clave API de Anthropic                                                                                                           |
| `GOOGLE_API_KEY`     | *(vacío)*               | Clave API de Google Gemini                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(vacío)*               | Clave API de DeepSeek                                                                                                            |
| `GROQ_API_KEY`       | *(vacío)*               | Clave API de Groq                                                                                                                |
| `MISTRAL_API_KEY`    | *(vacío)*               | Clave API de Mistral                                                                                                             |
| `OLLAMA_URL`         | *(vacío)*               | URL base de Ollama (por ejemplo, `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(vacío)*               | Clave API de xAI                                                                                                                 |

Configure solo los proveedores que utilice. Los ID de modelo están en espacios de nombres (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Visualización de costos:** OpenRouter devuelve el costo facturado exacto cuando corresponde. Otros proveedores usan el costo **estimado** a partir de los precios públicos de modelos de OpenRouter cuando hay una clave OpenRouter disponible; sin ella, el costo no OpenRouter puede mostrarse como `0`. Las estimaciones no son facturas.

**Datos y persistencia:** Para Docker, monte un volumen en `/app/data` para que `config.json` y la base de datos SQLite persistan tras los reinicios del contenedor. Sin un volumen, todos los datos se pierden cuando el contenedor se detiene.

**Desarrolladores:** Después de aplicar cambios que reemplazan la configuración anterior de una sola clave, restablezca o combine `data/config.json` con la nueva forma predeterminada de `src/config-defaults/config_default.json` si su archivo local aún usa campos eliminados (`api_key`, `api_url`, opciones de proxy).

**Autenticación web:**

- Administrador predeterminado: `admin` / `transrewrt26`.
- Gestione usuarios en **Configuración → Usuarios**.
- Restablezca una contraseña: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (desde el código fuente: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **ADVERTENCIA**  
>
> Cambie inmediatamente la contraseña predeterminada del administrador en cualquier host accesible por red.

Los ajustes clave (fuente, modelos, idiomas, etc.) están disponibles en la Configuración de la aplicación.

## Desarrollo y arquitectura

- **Desarrollo:** Configuración, compilación, prueba e implementación (Electron, Web, Docker) - consulte **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitectura y descripción general del sistema:** Estructura de carpetas, pila tecnológica, decisiones de diseño - consulte **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Informe de problemas

Abra un problema en [GitHub](https://github.com/wsj-br/transrewrt/issues). Incluya su plataforma (Windows / Linux / Docker) y la versión de la aplicación (mostrada en el cuadro de diálogo Acerca de o en la página de versiones).

## Descargo de responsabilidad

Los nombres de productos e iconos pertenecen a sus respectivos propietarios y se utilizan solo con fines de identificación. Este software no está afiliado ni respaldado por ninguna de las marcas mencionadas.

## Licencia

Derechos de autor © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
