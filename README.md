# Guía de instalación y despliegue de la aplicación Deno para la charla de javascript Chile Mayo 2023

[!img](https://media.licdn.com/dms/image/D5610AQHWvVDmMmVo0Q/image-shrink_800/0/1684344641117?e=1685584800&v=beta&t=tWR8bfaeyQ6PwNhrztB1Cbriaj5JcxvXmP2zYp8iXdo)
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
En Windows, puedes agregar Deno a tu ruta del sistema ejecutando el siguiente comando en tu terminal:

```powershell
$env:Path += ";C:\Users\$env:USERNAME\.deno\bin"
```
Para que estos cambios sean permanentes, debes agregar la línea correspondiente a tu archivo de perfil de PowerShell. El archivo exacto varía dependiendo de tu configuración, pero generalmente será `$PROFILE.CurrentUserAllHosts` o `$PROFILE.AllUsersAllHosts`.

Estos comandos añaden el directorio bin de Deno a la ruta del sistema, lo que te permite ejecutar `deno` desde cualquier lugar en tu terminal.

### Linux

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Después de instalar Deno, puedes agregarlo a tu ruta del sistema ejecutando el siguiente comando en tu terminal:

```bash
echo 'export PATH="/home/$USER/.deno/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
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

---
Puedes deployar con docker con los siguientes comandos

```bash
# Build the Docker image
docker build -t deno-app -f dev.dockerfile .

# Run the Docker container
docker run -p 8000:8000 deno-app
```

