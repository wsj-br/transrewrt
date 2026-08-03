---
title: Inicio rápido
description: Instale Transrewrt en Windows o Linux, o ejecute la aplicación web de Docker.
---



Elija la ruta que más le convenga. Todas son gratuitas y de código abierto (Apache 2.0).

## Docker (aplicación web)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Reemplace `PROVIDER_API_KEY` con la variable de su proveedor (por ejemplo, `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) y establezca su valor. Consulte la lista completa en [Configuración](/docs/configuration/#environment-variables-web--docker).

Luego, abra [http://localhost:5000](http://localhost:5000) y **cambie la contraseña de administrador predeterminada** antes de exponer el servicio.

:::tip
En Docker, las credenciales de LLM se configuran con variables de entorno (por ejemplo, `PROVIDER_API_KEY`). **No** se introducen en la interfaz de usuario web. En el escritorio, se configuran las claves en **Ajustes → Configuración de API**.
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
3. Abra la aplicación e introduzca las claves de API en **Configuración → Configuración de API**. Configure al menos un proveedor; OpenRouter es una opción común para modelos gratuitos.

:::note
Windows puede mostrar advertencias de UAC o SmartScreen al instalar la aplicación. Es seguro instalarla si la descarga desde la página oficial de GitHub Releases. Haga clic en "Más información" y "Ejecutar de todos modos" para instalar.
:::

## Linux

Descargue el `.AppImage` para su CPU de [Versiones](https://github.com/wsj-br/transrewrt/releases) (`x64` o `arm64`, incluido Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduzca las claves de API en **Configuración → Configuración de API**.

Si Chromium imprime errores de GPU/EGL pero la aplicación funciona, puede deshabilitar la aceleración de hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS no es compatible actualmente. Transrewrt está disponible para Windows, Linux y Docker.
:::

## Actualización

- **Windows** — descargue el `Transrewrt Setup x.y.z.exe` más reciente de [Versiones](https://github.com/wsj-br/transrewrt/releases) y ejecútelo. La configuración y los datos se conservan.
- **Linux** — descargue el `.AppImage` más reciente y reemplace el archivo antiguo. La configuración y los datos se conservan.
- **Docker** — extraiga la nueva imagen y vuelva a crear el contenedor. Los datos persisten en el volumen `/app/data`:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Próximos pasos

1. [Obtenga una clave de API](/docs/api-key/)
2. Ejecute una traducción simple para confirmar que todo funciona
3. Lea las guías de [Traducción](/docs/translate/), [Reescritura](/docs/rewrite/) y [Transformación](/docs/transform/)
