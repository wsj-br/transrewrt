---
title: Inicio rápido
description: >-
  Instale Transrewrt en Windows o Linux, o ejecute la aplicación web Docker
  autohospedada.
translation_last_updated: '2026-07-17T21:14:49.417Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: es
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



Elija la ruta que más le convenga. Todas son gratuitas y de código abierto (Apache 2.0).

## Docker (web autohospedada)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Reemplace `PROVIDER_API_KEY=sk-or-your-key` con su clave de API de su proveedor elegido (consulte las opciones admitidas en [Configuración](/docs/configuration/)).

Luego, abra [http://localhost:5000](http://localhost:5000) y **cambie la contraseña de administrador predeterminada** antes de exponer el servicio.

:::caution
En Docker, las credenciales de LLM se configuran con variables de entorno (por ejemplo, `PROVIDER_API_KEY`). **No** se introducen en la interfaz de usuario web. En el escritorio, configure las claves en **Configuración → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Descargue el último `Transrewrt Setup x.y.z.exe` de [Versiones](https://github.com/wsj-br/transrewrt/releases).
2. Ejecute el instalador.
3. Abra la aplicación e introduzca las claves de API en **Configuración → API**. Configure al menos un proveedor; OpenRouter es una opción común para modelos gratuitos.

:::note
Windows puede mostrar advertencias de UAC o SmartScreen para aplicaciones independientes sin firmar. Prefiera las descargas de la página oficial de GitHub Releases y verifique las sumas de comprobación cuando se publiquen.
:::

## Linux

Descargue el `.AppImage` para su CPU desde [Versiones](https://github.com/wsj-br/transrewrt/releases) (`x64` o `arm64`, incluyendo Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduzca las claves de API en **Configuración → API**.

Si Chromium imprime errores de GPU / EGL pero la aplicación funciona, puede deshabilitar la aceleración de hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
Actualmente, macOS no es compatible. Transrewrt está disponible para Windows, Linux y Docker.
:::

## Próximos pasos

1. [Obtener una clave de API](/docs/api-key/)
2. Ejecutar una traducción simple para confirmar que todo funciona
3. Leer las guías [Traducir](/docs/translate/), [Reescribir](/docs/rewrite/) y [Transformar](/docs/transform/)
