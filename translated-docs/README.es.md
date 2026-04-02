---
translation_last_updated: '2026-04-02T12:42:29.731Z'
source_file_mtime: '2026-04-02T12:39:14.838Z'
source_file_hash: 0826245f792850f3
translation_language: es
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Versión"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licencia: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

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

<small>**Leer en otros idiomas:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota sobre las traducciones de la interfaz y la documentación:** Todos los idiomas de la interfaz, excepto el inglés (Reino Unido) original, 
> fueron traducidos mediante modelos de IA; la redacción puede ser imprecisa o contener errores.

</small>

<br/>

<a id="table-of-contents"></a>
## Tabla de contenidos

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Capturas de pantalla](#screenshots)
- [Inicio rápido](#quick-start)
- [Obtener una clave API de OpenRouter](#getting-an-openrouter-api-key)
- [Configuración y entorno](#configuration-and-environment)
- [Desarrollo y arquitectura](#development-and-architecture)
- [Informar de problemas](#reporting-issues)
- [Descargo de responsabilidad](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Capturas de pantalla

**Selector de idioma**

![Language selector](../images/screenshots/es/language-selector.png)

**Traducir**

![Translate](../images/screenshots/es/translate.png)

**Transformar - editor de prompts**

![Transform - prompt editor](../images/screenshots/es/transform-prompt-edit.png)

**Panel**

![Dashboard summary — usage](../images/screenshots/es/dashboard-summary.png)

**Historial**

![History](../images/screenshots/es/history.png)

**Configuración - selección de modelo**

![Settings - model selection](../images/screenshots/es/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## Inicio rápido

<details>
<summary><b>Docker (recomendado para autohospedaje)</b></summary>

<a id="docker"></a>

<br/>

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

Establezca al menos una clave de proveedor mediante variables de entorno (por ejemplo, `OPENROUTER_API_KEY` para OpenRouter). Pase las variables con `-e` o mediante `docker compose` / `.env` para que los secretos no queden integrados en la imagen. Las claves de proveedor **no** se ingresan en la interfaz web; el servidor las lee desde el entorno.

<br/>

> ℹ️ **NOTA**<br/>
> En Docker, las credenciales del LLM se establecen mediante variables de entorno como `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (no en la interfaz web). En el escritorio (Electron), configuras las claves en **Configuración → API**.

<br/>

O use Docker Compose:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Consulte [Configuration](#configuration-and-environment) para obtener todas las variables de entorno, como `PORT`, `CONFIG_PATH`, `TZ` y claves de LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Zona horaria del servidor (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

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

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Descargue el último `Transrewrt Setup x.y.z.exe` desde [Releases](https://github.com/wsj-br/transrewrt/releases).
- Ejecute el archivo `.exe` y siga las instrucciones del instalador.
- Primera ejecución: inicie la aplicación desde el menú Inicio o el acceso directo del escritorio.
- Ingrese sus claves API en **Configuración → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

<br/>

> ℹ️ **NOTA**<br/>
> Windows puede mostrar una de estas advertencias de seguridad (normal para aplicaciones sin firmar o independientes):
>   - **Control de cuentas de usuario (UAC)**: "¿Desea permitir que esta aplicación de un editor desconocido realice cambios en su dispositivo?" → Haga clic en **Sí**.
>   - **Microsoft Defender SmartScreen**: "Windows protegió su PC" → Haga clic en **Más información** → **Ejecutar de todas formas**.
>
> Esto ocurre porque la aplicación no está firmada por Microsoft ni por un editor importante; es segura si se descarga desde nuestras versiones oficiales en GitHub (verifique las sumas de comprobación en la página [Releases](https://github.com/wsj-br/transrewrt/releases) junto a cada recurso).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Descargue el archivo `.AppImage` para su CPU desde [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para PC típicos, `arm64` para muchos dispositivos ARM, incluyendo Raspberry Pi 4+), luego:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

En x86_64/amd64 use el nombre de archivo `x64`; en ARM64 use el nombre `...-arm64.AppImage`.

Ingrese sus claves API en **Configuración → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

**Mensajes de consola:** Las versiones empaquetadas para Linux (`x64` y `arm64` AppImages) suprimen las advertencias de desuso de Node en la terminal (por ejemplo, el módulo integrado `punycode`). Si Chromium muestra errores de GPU / EGL como “GLES3 no es compatible”, pero la aplicación funciona, puedes silenciarlos desactivando la aceleración por hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Eso también aplica en amd64; cambie el nombre del archivo para que coincida con su descarga.

En Debian/Ubuntu, puede necesitar bibliotecas de **tiempo de ejecución** adicionales requeridas por Chromium (estas a menudo ya están presentes en instalaciones de escritorio completas). Ejecute los comandos siguientes si es necesario:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

reemplace `libasound2t64` con `libasound2` para `arm64`. Las instalaciones mínimas o personalizadas aún pueden fallar con un archivo `.so` faltante. Instale el paquete con el nombre indicado en el mensaje de error (extras comunes: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). En algunos entornos, puede necesitar ejecutar la aplicación usando `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **NOTA**<br/>
> Actualmente no se admite macOS. Transrewrt está disponible para Windows, Linux y Docker.

</details>

<br/>

Una vez que la aplicación esté en ejecución, consulte la **[Guía del usuario](USER-GUIDE.es.md)** para aprender cómo traducir, reescribir y transformar texto, gestionar indicaciones y configurar modelos.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Obtener una clave API de OpenRouter

Transrewrt admite múltiples proveedores de IA. [OpenRouter](https://openrouter.ai) es una opción popular porque agrega muchos modelos bajo una sola clave y ofrece modelos gratuitos.

1. Regístrese o inicie sesión en [openrouter.ai](https://openrouter.ai).
2. Abra la página [Keys](https://openrouter.ai/keys) y cree una nueva clave (asígnele un nombre y, opcionalmente, establezca un límite de crédito). Puede usar modelos gratuitos sin agregar crédito.
3. **Escritorio (Electron):** pegue las claves en **Configuración → API**. **Docker:** establezca variables de entorno como `OPENROUTER_API_KEY` (consulte [Inicio rápido](#quick-start)).

No use el modelo **Body Builder** de OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traducir, reescribir o transformar: devuelve cargas útiles JSON de solicitudes, no el texto completado para esas tareas. Consulte [Configuración → Modelos](USER-GUIDE.es.md#models) en la Guía del usuario.

También puede usar otros proveedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o ejecutar modelos localmente con [Ollama](https://ollama.com). Consulte [Configuration](#configuration-and-environment) para obtener la lista completa de proveedores compatibles y variables de entorno.

</br>

> ⚠️ **ADVERTENCIA**<br/>
> Si está utilizando Ollama desde otro dispositivo, contenedor o servicio, recuerde configurar Ollama para permitir conexiones externas (no solo localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuración y entorno

</br>

**Ubicaciones del archivo de configuración**

| Despliegue         | Ubicación de la configuración                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (use un volumen para persistencia) |

<br/>

**Variables de entorno** (solo web/Docker; Electron usa el archivo de configuración local)

| Variable             | Descripción                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Puerto en el que escucha el servidor (por defecto `5000`)                                  |
| `CONFIG_PATH`        | Ruta al archivo de configuración (por defecto `/app/data/config.json`)                 |
| `TZ`                 | zona horaria para la hora del lado del servidor (registros, etc.) (por defecto `Europe/London`) |
| `OPENROUTER_API_KEY` | Clave API de OpenRouter                                                           |
| `OPENAI_API_KEY`     | Clave API de OpenAI                                                               |
| `CEREBRAS_API_KEY`   | Clave API de Cerebras                                                             |
| `ANTHROPIC_API_KEY`  | Clave API de Anthropic                                                            |
| `GOOGLE_API_KEY`     | Clave API de Google Gemini                                                        |
| `DEEPSEEK_API_KEY`   | Clave API de DeepSeek                                                             |
| `GROQ_API_KEY`       | Clave API de Groq                                                                 |
| `MISTRAL_API_KEY`    | Clave API de Mistral                                                              |
| `OLLAMA_URL`         | URL base de Ollama (por ejemplo, `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | Clave API de xAI                                                                  |

Configure solo los proveedores que utilice. Los ID de modelo están en espacios de nombres (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Visualización de costos:** OpenRouter devuelve el costo facturado exacto cuando corresponde. Otros proveedores usan el costo **estimado** a partir de los precios públicos de modelos de OpenRouter cuando hay una clave OpenRouter disponible; sin ella, el costo no OpenRouter puede mostrarse como `0`. Las estimaciones no son facturas.

<br/>

**Datos y persistencia:** Para Docker, monte un volumen en `/app/data` para que `config.json` y la base de datos SQLite persistan tras los reinicios del contenedor. Sin un volumen, todos los datos se pierden cuando el contenedor se detiene.

<br/>

**Autenticación web:**

- Administrador predeterminado: `admin` / `transrewrt26`.
- Administre usuarios en **Configuración → Usuarios**.
- Restablezca una contraseña: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> Cambie inmediatamente la contraseña predeterminada del administrador en cualquier host accesible por red.

<br/>

Los ajustes clave (fuente, modelos, idiomas, etc.) están disponibles en la Configuración de la aplicación.

<br/><br/>

<a id="development-and-architecture"></a>
## Desarrollo y arquitectura

- **Desarrollo:** Configuración, compilación, prueba e implementación (Electron, Web, Docker) - consulte **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitectura y descripción general del sistema:** Estructura de carpetas, pila tecnológica, decisiones de diseño - consulte **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Informar problemas

Abra un problema en [GitHub](https://github.com/wsj-br/transrewrt/issues). Incluya su plataforma (Windows / Linux / Docker) y la versión de la aplicación (mostrada en el cuadro de diálogo Acerca de o en la página de versiones).

<br/><br/>

<a id="disclaimer"></a>
## Descargo de responsabilidad

Los nombres de productos e iconos pertenecen a sus respectivos propietarios y se utilizan solo con fines de identificación. Este software no está afiliado ni respaldado por ninguna de las marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licencia

Derechos de autor © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
