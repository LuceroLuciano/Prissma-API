# Prissma-API
API con Prissma + Express y Base de Datos con PostgreSQL

![Diagrama](https://raw.githubusercontent.com/LuceroLuciano/client-launchx/master/img/diagrama.png)

# Ejecuta el proyeccto en local

## 1. Clona los reposotiroios a tu entorno local

1. Crear una nueva carpeta en su entorno local y clonar este repositorio [Prisma-API](https://github.com/LuceroLuciano/Prissma-API). Este repositorio corresponde al código del Servidor (Backend) <br>
`git clone https://github.com/LuceroLuciano/Prissma-API`
    
2. Crear otra nueva carpeta en su entorno local y clonar el siguiente repositorio [client-launchx](https://github.com/LuceroLuciano/client-launchx). Este repositorio corresponde al código del cliente (Frontend)<br>
`git clone https://github.com/LuceroLuciano/client-launchx`
    
**IMPORTANTE:** Antes de clonar los repositorios, es importante tener instalado lo siguiente: `NodeJS` y  `VUE`, si aún no los instalas, pudes hacerlo de la siguiente manera:
- **Instalación NodeJS**
    - Para Windows ingresa al siguiente link [Desacrga NodeJS](https://nodejs.org/es/download/)
    - Para Linux Ubuntu ejecuta los siguientes comandos:
         - `sudo apt update`
         - `sudo apt install nodejs`
         - `nodejs -v`  es para ver la versión instalada y verificar que se ha instalado correctamente.
     - Tambien es necesrio instalar el manejador de paquetes **NPM** (Normalmente se instala por defecto al instalar `nodejs`)
         - `npm -v` es para ver la versión y asi comprobar que si esta instalado
         - `sudo apt install npm` Instala  **NPM** en caso de no estar instalado
- **Instalación VUE**
    - `npm install vue`
    - `vue -V` muestra la versión comprobando que se instalo correctamente

**IMPORTANTE:** En caso de tener problemas al ejecutar el proyecto, probablemente se deba al cambio de versiones en la instalación de las herramientas de trabajo, por lo que le recomendamos instale las siguientes versiones:
  - `node v16.14.2`
  - `npm  v8.5.0`
  - `vue @vue/cli 5.0.4`

## 2. Crea una Base de datos en el gestor **PostgreSQL**
1. Instala postgreSQL en tu entorno local.
   - [Link de descarga de postgreSQL](https://www.postgresql.org/download/)
2. Accede a la línea de comandos sin cambiar de cuenta. *(Si deseas crear un nuevo usuario o un nuevo rol revisa el siguiente link: [Utilizar roles y Bases de Datos de Postgres](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04-es))* 
  - `sudo -u postgres psql`
  
  - Debera ver algo como esto: <br>
    ![Postgres](https://raw.githubusercontent.com/LuceroLuciano/Prissma-API/main/img/1_postgres.png)
  
  - Ejecute el comando `\c` para ver todas las bases de datos locales
  - Crea una base de datos llamada **explorers_api** con el siguiente comando `create database explorers_api;`
  - Ejecuta el siguiente comando `\q` para salir de la linea de comandos de postgres


           
        
        
    

