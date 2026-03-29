---
translated_at: "2026-03-29T01:56:10.116Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
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

Herramienta de texto con inteligencia artificial: traduce entre idiomas, reescribe en diferentes estilos y transforma con indicaciones personalizadas — utilizando múltiples proveedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI y Ollama local). Funciona como una aplicación de escritorio (Electron) o como una aplicación web autohospedada (Docker).

- **Traducir** — entre docenas de idiomas, con detección automática del idioma de origen
- **Reescribir** — corregir gramática, mejorar claridad, estilo formal/informal, acortar, expandir, contenido técnico
- **Transformar** — indicaciones personalizadas de IA; crear y administrar indicaciones, idioma de destino opcional por indicación
- **Historial** — historial completo de ejecuciones con texto de entrada/salida, filtros y exportación
- **Modelos y costos** — elegir modelos de cualquier proveedor configurado; paneles de costos y uso con registros y resúmenes por modelo/operación/día
- **Interfaz de usuario** — interfaz multilingüe (más de 30 idiomas, soporte para idiomas escritos de derecha a izquierda), fuentes, etc.
- **Modo web** — soporte multiusuario con roles de administrador
- **Escritorio** — aplicación Electron para Windows y Linux
- **Autohospedado** — imagen Docker para amd64 y arm64 (preparado para Raspberry Pi)

Una vez instalado, consulte la **[Guía de usuario](USER-GUIDE.es.md)** para una descripción completa de todas las funciones.

<small>**Lea en otros idiomas:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

# Transrewrt

> 🐧 🐳 Escrita desde cero en Rust, con soporte para contenedores integrados, esta herramienta de línea de comandos te permite traducir cualquier texto que desees sin depender de aplicaciones de escritorio y ventanas emergentes.

![Captura de pantalla del modo interactivo](img/interactive-mode.png)

---

## Características destacadas

- 🐧 Escrita completamente en [Rust](https://www.rust-lang.org/), esta aplicación es rápida, segura y está bien optimizada.

- 🐳 Incluye soporte integrado para [OpenRouter](https://openrouter.ai/) y [Docker](https://www.docker.com/).

- 🧠 Usa modelos LLM, como `o1-mini` y `GPT-4o mini`, para traducir texto.

- 🔑 Puedes usarlo de forma local sin necesidad de ninguna clave de API. También puedes personalizar cualquier clave de API de proveedores de LLM compatibles como [OpenRouter](https://openrouter.ai/).

- 🔄 Realiza traducciones bidireccionales (fuente → objetivo y objetivo → fuente).

- ⌨️ Modo interactivo para traducir texto sobre la marcha directamente en tu terminal.

- 🌐 Soporta múltiples pares de idiomas de manera sencilla.

- 🧾 Usa un archivo JSON como archivo de configuración para una mayor personalización.

- 📦 Incluye su propio instalador personalizado construido en Rust, que puede instalarse a través de [crates.io](https://crates.io/crates/transrewrt) con [Cargo](https://doc.rust-lang.org/cargo/).

- 🐣 Fácil de instalar y usar.

- 💻 Disponible como aplicación CLI, con soporte para plataformas basadas en Unix y Windows.

---

## Requisitos previos

- Rust y Cargo deben estar instalados. Consulta [Instalación de Rust con rustup](https://www.rust-lang.org/tools/install).  
  (Solo necesario si deseas compilar desde la fuente.)

- [Docker](https://www.docker.com/) debe estar instalado y ejecutándose.

---

## Modo de uso

> 📣 La versión CLI ahora es completamente modular. Por lo tanto, **la forma principal de usar la aplicación** es:  
> `transrewrt [SUBCOMMAND] <OPTIONS>`.  
> Aunque todavía puedes usar las banderas anteriores, pueden eliminarse en el futuro.

Los diferentes subcomandos son:

1. `translate`: para traducir texto.
2. `set`: para cambiar la configuración.
3. `serve`: para ejecutar el servidor local de Docker (actualmente en pruebas).
4. `interactive`: para traducir texto interactivamente en tu terminal.
5. `reset`: para restablecer la configuración actual.
6. `version`: para comprobar la versión.

---

## Instrucciones de instalación

### Instalación desde crates.io

Puedes instalar fácilmente **Transrewrt** desde [crates.io](https://crates.io/crates/transrewrt) usando [Cargo](https://doc.rust-lang.org/cargo/), el administrador de paquetes de Rust.

```bash
cargo install transrewrt
```

⚠️ Asegúrate de que `$HOME/.cargo/bin` esté en tu variable de entorno `PATH`. (En sistemas Unix: generalmente añádelo a tu `.bashrc`, `.zshrc`, etc.)

**Alternativamente**, puedes construir desde la última versión del código fuente:

```bash
git clone https://github.com/Ak38R/Transrewrt.git
cd Transrewrt
cargo install --path .
```

---

### Instalación mediante script bash

Se proporciona un script de instalación (funciona en plataformas Unix):

```bash
bash <(curl -s https://raw.githubusercontent.com/Ak38R/Transrewrt/main/scripts/install.sh)
```

Este script detecta automáticamente tu arquitectura y sistema operativo; luego instala el binario compilado directamente en `$HOME/.local/bin`.

> ⚠️ **NOTA**:  
> Este método no instala la dependencia de Docker, por lo que debes instalarla manualmente si es necesario.

> ✅ **Consejo**:  
> Asegúrate de que `$HOME/.local/bin` esté en tu variable de entorno `PATH`.

---

### Windows

**Transrewrt** tiene compatibilidad básica con Windows. En Windows, puedes seguir el mismo proceso descrito anteriormente.

Puedes instalarlo usando el administrador de paquetes [Cargo](https://doc.rust-lang.org/cargo/) de Rust:

```bash
cargo install transrewrt
```

**O** descargar el binario directamente desde la sección de [Releases](https://github.com/Ak38R/Transrewrt/releases) y añadirlo manualmente a tu `PATH`:

1. Descarga el archivo `.zip` adecuado (normalmente `transrewrt-x86_64-pc-windows-msvc.zip`).
2. Extrae el archivo zip descargado.
3. Añade la ruta del directorio extraído a tu variable de entorno `PATH`.

> ⚠️ **NOTA**:  
> Asegúrate de tener instalado [Microsoft C++ Build Tools (MSVC)](https://visualstudio.microsoft.com/visual-cpp-build-tools/?MSL=1). Se requiere una herramienta de compilación C++ para compilar los componentes nativos del binario.

> ✅ **Consejo**:  
> Puedes usar [PowerShell](https://learn.microsoft.com/en-us/powershell/) o [cmd](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd) para ejecutar `transrewrt`.

---

## Cómo usarlo

### 1. Traducir texto

Ejemplo: traducir del inglés al español:

```bash
transrewrt translate --source en --target es "Hello, how are you?"
```

### 2. Modo interactivo

Inicia el modo interactivo:

```bash
transrewrt interactive
```

Este modo te permite ingresar texto línea por línea y recibir traducciones en tiempo real.

### 3. Establecer una clave API

Configura tu clave API para OpenRouter:

```bash
transrewrt set api-key --value YOUR_API_KEY
```

### 4. Cambiar el modelo LLM

Cambia al modelo `gpt-4o-mini`:

```bash
transrewrt set model --value gpt-4o-mini
```

Consulta la [documentación de OpenRouter](https://openrouter.ai/models) para ver los modelos compatibles.

> ✅ **Consejo**:  
> Puedes usar cualquier modelo disponible en [OpenRouter](https://openrouter.ai/models) siempre que tengas permiso para acceder a él.

### 5. Restablecer configuración

Restablece toda la configuración personalizada al estado predeterminado:

```bash
transrewrt reset
```

### 6. Consultar la versión

Comprueba la versión actual del CLI:

```bash
transrewrt version
```

---

## Configuración

La configuración se almacena en formato JSON en un archivo llamado `config.json`, ubicado en el directorio de inicio del usuario:

- Linux / macOS: `~/.config/transrewrt/config.json`
- Windows: `C:\Users\<user>\AppData\Roaming\transrewrt\config.json`

Puedes editarlo manualmente y personalizar los siguientes campos:

```json
{
  "api_key": "your_api_key_here",
  "source_lang": "en",
  "target_lang": "es",
  "model_name": "o1-mini",
  "auto_execute": false
}
```

- `api_key`: clave de API para OpenRouter (opcional si usas Docker).
- `source_lang`: código del idioma de origen (por defecto: `en`).
- `target_lang`: código del idioma de destino (por defecto: `es`).
- `model_name`: nombre del modelo LLM (por ejemplo, `gpt-4o-mini`).
- `auto_execute`: si es `true`, ejecuta Docker automáticamente cuando comienza la traducción.

📌 Nota: Las opciones de configuración que se establecen mediante el subcomando `set` anulan las configuraciones del archivo.

---

## Servidor Docker local (próximamente)

Ahora puedes ejecutar un servidor Docker personalizado, actualmente en fase experimental:

```bash
transrewrt serve
```

Esto ejecutará `ghcr.io/environments/ollama:latest` (un contenedor Ollama) y permitirá usar modelos LLM locales, eliminando completamente la necesidad de una clave API.

> 🛑 Este subcomando aún no está disponible en todos los sistemas. La compatibilidad mejorará con futuras actualizaciones.

---

## Aplicación Electron (próximamente)

Una nueva aplicación de escritorio basada en Electron está actualmente en desarrollo.  
Consulta la rama [`electron`](https://github.com/Ak38R/Transrewrt/tree/electron) para más detalles.

---

## Contribuir

¡Las contribuciones son bienvenidas!  
Por favor, siéntete libre de abrir una incidencia o enviar un pull request.

1. Bifurca este repositorio.
2. Crea una rama nueva (`git checkout -b mi-nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -am 'Añadir alguna funcionalidad'`).
4. Sube la rama (`git push origin mi-nueva-funcionalidad`).
5. Abre un pull request.

---

## Problemas conocidos

- A veces pueden producirse errores en la detección de idioma. Puede requerir corrección manual de los códigos de idioma.

- El rendimiento puede verse afectado cuando se utilizan modelos grandes sin hardware adecuado, especialmente en traducciones largas.

---

## Preguntas frecuentes

### ¿Necesito una clave de API para usar esta herramienta?

No es obligatorio. Si usas Docker para ejecutar modelos localmente (por ejemplo, usando el subcomando `serve`), **puedes usar Transrewrt sin ninguna clave de API**.

Sin embargo, si deseas usar la API de OpenRouter, necesitarás una clave.

---

### ¿Puedo usar otros LLM que no sean o1-mini?

Sí, puedes usar cualquier modelo compatible con OpenRouter.  
Consulta [https://openrouter.ai/models](https://openrouter.ai/models) para obtener una lista.

---

### ¿Cómo se maneja la privacidad de los datos?

Transrewrt **no almacena ni transmite** tus datos a ningún servidor externo, excepto cuando usas una API externa como OpenRouter. En ese caso, tu texto (sin credenciales) se envía al proveedor de la API siguiendo sus políticas de privacidad.

Cuando usas el servidor local de Docker, todo se procesa localmente, por lo tanto, tus datos permanecen completamente en tu dispositivo.

---

### ¿Por qué elegir Transrewrt?

- Es rápido, ligero y potente.
- Escrito en Rust, por lo que es eficiente y seguro.
- Totalmente personalizable.
- No depende de ninguna plataforma específica.

---

## Licencia

Distribuido bajo la Licencia [MIT](LICENSE).

---

Hecho con ❤️ y ☕ por [Ak38R](https://github.com/Ak38R)

---

<p align="center">
  <img src="img/logo.png" alt="Logotipo de Transrewrt" width="300">
</p>

<span id="lang-list">[English](README.es.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [עברית](README.he.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Қазақша](README.kk.md) · [한국어](README.ko.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</span>

<small>

> **Nota sobre las traducciones de la interfaz y documentación:** Todos los idiomas de la interfaz, excepto el inglés original (Reino Unido),
> se tradujeron mediante modelos de inteligencia artificial; la redacción puede ser imprecisa o contener errores.

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

![Panel de control - resumen de uso](../images/screenshots/es/dashboard-summary.png)

**Historial**

![Historial](../images/screenshots/es/history.png)

**Ajustes - selección de modelo**

![Ajustes - selección de modelo](../images/screenshots/es/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Tabla de contenido

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Inicio rápido](#quick-start)
- [Instalación](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Configuración de la zona horaria](#configuring-the-timezone)
- [Obtener una clave de API de OpenRouter](#getting-an-openrouter-api-key)
- [Configuración y entorno](#configuration-and-environment)
- [Desarrollo y arquitectura](#development-and-architecture)
- [Informar de problemas](#reporting-issues)
- [Descargo de responsabilidad](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Inicio rápido

**Docker (recomendado para alojamiento propio)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Reemplace `sk-or-your-key` con su [clave API de OpenRouter](https://openrouter.ai/keys) (o establezca claves de otros proveedores; véase [Configuración](#configuration-and-environment)). Abra [http://localhost:5000](http://localhost:5000) y cambie la contraseña predeterminada del administrador antes de exponer el servicio.

<br/>

> ℹ️ **NOTA**<br/>
> En Docker, las credenciales del modelo de lenguaje (LLM) se establecen mediante variables de entorno como `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (no en la interfaz web). En el escritorio (Electron), configure las claves en **Configuración → API**.

<br/>

**Windows**

Descargue el último `Transrewrt Setup x.y.z.exe` desde [Releases](https://github.com/wsj-br/transrewrt/releases), ejecute el instalador y luego inícielo desde el menú de Inicio o el acceso directo del escritorio. Introduzca sus claves API en **Configuración → API**. Debe configurar al menos un proveedor; OpenRouter es común para modelos gratuitos.

<br/>

**Linux**

Descargue el archivo `.AppImage` para su CPU desde [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para PC típicas, `arm64` para muchos dispositivos ARM, incluyendo Raspberry Pi 4+), luego:

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

> macOS no es compatible en este momento. Transrewrt está disponible para Windows, Linux y Docker.

<br/>

Una vez que la aplicación esté en funcionamiento, consulte la **[Guía de usuario](USER-GUIDE.es.md)** para aprender cómo traducir, reescribir y transformar texto, gestionar indicaciones y configurar modelos.

<br/><br/>

<a id="installation"></a>

## Instalación

<a id="windows-electron"></a>

### Windows (Electron)

- Descargue el instalador más reciente desde [Lanzamientos](https://github.com/wsj-br/transrewrt/releases).
- Ejecute el archivo `.exe` y siga las instrucciones del instalador.
- Primera ejecución: inicie la aplicación desde el menú Inicio o mediante el acceso directo del escritorio.

<br/>

> ℹ️ **NOTA**<br/>
> Windows podría mostrar alguna de estas advertencias de seguridad (normal en aplicaciones no firmadas o independientes):
>   - **Control de cuentas de usuario (UAC)**: "¿Desea permitir que esta aplicación de un editor desconocido realice cambios en su equipo?" → Haga clic en **Sí**.
>   - **Microsoft Defender SmartScreen**: "Windows protegió su equipo" → Haga clic en **Más información** → **Ejecutar de todas formas**.
>
> Esto ocurre porque la aplicación no está firmada por Microsoft ni por un editor importante; es segura si se descarga desde nuestros lanzamientos oficiales en GitHub
> (verifique el hash SHA256 indicado más abajo).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Descargue el archivo `.AppImage` correspondiente (`x64` o `arm64`) desde [Releases](https://github.com/wsj-br/transrewrt/releases).
- Ejecute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` en x86_64/amd64, o utilice el nombre de archivo `...-arm64.AppImage` en ARM64.
- Dependencias adicionales (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Para más información, consulte [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>

### Docker

- Descargar la imagen: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Establezca al menos una clave de proveedor mediante variables de entorno (por ejemplo, `OPENROUTER_API_KEY` para OpenRouter). Pase las variables con `-e` o mediante `docker compose` / `.env` para que los secretos no queden incrustados en la imagen.
- Las claves de los proveedores **no** se introducen en la interfaz web; el servidor las lee desde el entorno.

Ejemplo: volumen nombrado para persistencia (clave OpenRouter mediante entorno):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

O, si prefiere usar Docker Compose, utilice:

```bash
# descargar el archivo de composición
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edite el archivo para añadir las API_KEYS y ajustar la zona horaria (TZ)
vi transrewrt.yml
# inicie el contenedor
docker compose -f transrewrt.yml up -d

Consulte [Configuración](#configuration-and-environment) para ver todas las variables de entorno, como `PORT`, `CONFIG_PATH`, `TZ` y las claves de LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Configuración de la zona horaria

La fecha y hora de la interfaz de usuario de la aplicación siguen la configuración regional y la zona horaria del **navegador**. Para el comportamiento en el **lado del servidor** (registro de eventos y funciones similares), el contenedor utiliza la variable de entorno `TZ`. El valor predeterminado es `TZ=Europe/London`.

Para utilizar otra zona horaria, establezca `TZ` en su archivo Compose, por ejemplo:

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

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obtener una clave API de OpenRouter

Transrewrt admite múltiples proveedores de IA. [OpenRouter](https://openrouter.ai) es una opción popular porque agrupa muchos modelos bajo una sola clave y ofrece modelos gratuitos.

1. Regístrese o inicie sesión en [openrouter.ai](https://openrouter.ai).
2. Abra la página [Keys](https://openrouter.ai/keys) y cree una nueva clave (asígnele un nombre y, opcionalmente, establezca un límite de crédito). Puede usar modelos gratuitos sin agregar crédito.
3. **Escritorio (Electron):** pegue las claves en **Ajustes → API**. **Docker:** defina variables de entorno como `OPENROUTER_API_KEY` (véase [Inicio rápido](#quick-start)).

No utilice el modelo **Body Builder** de OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traducir, reescribir o transformar: este devuelve cargas útiles de solicitud JSON, no el texto completado para esas tareas. Consulte [Ajustes → Modelos](USER-GUIDE.es.md#models) en la Guía de usuario.

También puedes usar otros proveedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o ejecutar modelos localmente con [Ollama](https://ollama.com). Consulta [Configuración](#configuration-and-environment) para obtener la lista completa de proveedores compatibles y variables de entorno.

> ⚠️ **ADVERTENCIA**<br/>
> Si estás utilizando Ollama desde otro dispositivo, contenedor o servicio, recuerda configurarlo para permitir conexiones externas (no solo desde localhost).

Para obtener información sobre límites, BYOK y más, visita [autenticación de OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Configuración y entorno

**Ubicaciones del archivo de configuración**

| Implementación         | Ubicación de la configuración                                   |
| ---------------------- | --------------------------------------------------------------- |
| Electron (Windows)     | `%APPDATA%\transrewrt\`                                         |
| Electron (Linux)       | `~/.config/transrewrt/`                                         |
| Web / Docker           | `/app/data/config.json` (use un volumen para mantenerla)       |

<br/>

**Variables de entorno** (solo web/Docker; Electron usa el archivo de configuración local)

| Variable         | Predeterminado          | Descripción |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Puerto en el que escucha el servidor |
| `CONFIG_PATH`    | `/app/data/config.json` | Ruta al archivo de configuración |
| `TZ`             | `Europe/London`         | Zona horaria IANA para la hora del servidor (registros, etc.); la interfaz sigue la configuración del navegador. Ver [Docker → zona horaria](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(vacío)*             | Clave API de OpenRouter |
| `OPENAI_API_KEY`     | *(vacío)*             | Clave API de OpenAI |
| `CEREBRAS_API_KEY`   | *(vacío)*             | Clave API de Cerebras |
| `ANTHROPIC_API_KEY`  | *(vacío)*             | Clave API de Anthropic |
| `GOOGLE_API_KEY`     | *(vacío)*             | Clave API de Google Gemini |
| `DEEPSEEK_API_KEY`   | *(vacío)*             | Clave API de DeepSeek |
| `GROQ_API_KEY`       | *(vacío)*             | Clave API de Groq |
| `MISTRAL_API_KEY`    | *(vacío)*             | Clave API de Mistral |
| `OLLAMA_URL`     | *(vacío)*               | URL base de Ollama (por ejemplo, `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(vacío)*             | Clave API de xAI |

Configure únicamente los proveedores que utilice. Los ID de modelos tienen espacios de nombres (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Visualización de costos:** OpenRouter devuelve el costo exacto facturable cuando corresponde. Otros proveedores utilizan el costo **estimado** según la lista de precios pública de modelos de OpenRouter cuando está disponible una clave OpenRouter; de lo contrario, el costo de proveedores no OpenRouter puede mostrarse como `0`. Las estimaciones no son facturas.

<br/>

**Datos y persistencia:** Para Docker, monte un volumen en `/app/data` para que `config.json` y la base de datos SQLite persistan tras los reinicios del contenedor. Sin un volumen, todos los datos se pierden cuando el contenedor se detiene.

**Desarrolladores:** Después de obtener cambios que sustituyan la configuración anterior de clave única, restablezca o combine `data/config.json` con la nueva estructura predeterminada de `src/config-defaults/config_default.json` si su archivo local todavía usa campos eliminados (`api_key`, `api_url`, opciones de proxy).

<br/>

**Autenticación web:**

- Administrador predeterminado: `admin` / `transrewrt26`.
- Gestione usuarios en **Ajustes → Usuarios**.

- Restablecer una contraseña: `docker exec <contenedor> reset-web-password '<nombre-de-usuario>' '<nueva-contraseña>'`  
  (desde el código fuente: `pnpm run reset-web-password -- <nombre-de-usuario> <nueva-contraseña>`)

<br/>

> ⚠️ **ADVERTENCIA**<br/>
> Cambie inmediatamente la contraseña predeterminada del administrador en cualquier host accesible por red.

<br/>

Los ajustes clave (fuente, modelos, idiomas, etc.) están disponibles en la configuración de la aplicación.

<br/><br/>

<a id="development-and-architecture"></a>

## Desarrollo y arquitectura

- **Desarrollo:** Configuración, construcción, pruebas e implementación (Electron, Web, Docker) - consulte **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitectura y visión general del sistema:** Estructura de carpetas, tecnologías utilizadas, decisiones de diseño - consulte **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Informar de problemas

Abra un problema en [GitHub](https://github.com/wsj-br/transrewrt/issues). Incluya su plataforma (Windows / Linux / Docker) y la versión de la aplicación (mostrada en el cuadro de información o en la página de versiones).

<br/><br/>

<a id="disclaimer"></a>

## Descargo de responsabilidad

Los nombres y logotipos de los productos pertenecen a sus respectivos propietarios y se utilizan únicamente con fines de identificación. Este software no está afiliado ni respaldado por ninguna de las marcas mencionadas.

<br/><br/>

<a id="license"></a>

## Licencia

Copyright © 2026 Waldemar Scudeller Jr.

[Licencia Apache 2.0](LICENSE)