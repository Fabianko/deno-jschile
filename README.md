# Guía de instalación y despliegue de la aplicación Deno

## Instalación de Deno

Deno es compatible con MacOS, Windows y Linux. Aquí está cómo puedes instalarlo:

### MacOS

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

### Windows

```powershell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

### Linux

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Después de instalar Deno, puedes verificar la instalación ejecutando `deno --version` en tu terminal.

## Despliegue de la aplicación Deno

Una vez que Deno esté instalado, puedes desplegar tu aplicación de Deno de la siguiente manera:

Primero, clona tu repositorio y navega hasta el directorio que contiene tu archivo `crud-mongo.ts`.

```bash
git clone <your-repository-url>
cd <repository-directory>
```

Entonces, puedes ejecutar tu aplicación con el siguiente comando:

```bash
deno run --allow-net --allow-read --allow-write --unstable crud-mongo.ts
```

Este comando ejecuta tu aplicación Deno con los permisos necesarios. Por favor, ten en cuenta que Deno es seguro por defecto, lo que significa que debes otorgar explícitamente los permisos necesarios. En este caso:

- `--allow-net`: permite las operaciones de red
- `--allow-read`: permite la lectura de archivos del sistema
- `--allow-write`: permite la escritura de archivos del sistema
- `--unstable`: permite el uso de características de Deno aún inestables

Debes asegurarte de revisar y comprender los permisos que estás otorgando a tu aplicación.

Finalmente, tu aplicación Deno debería estar en funcionamiento y lista para usar.

