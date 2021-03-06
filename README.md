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

## 2. Creando una Base de datos en el gestor **PostgreSQL**
1. Instala postgreSQL en tu entorno local.
   - [Link de descarga de postgreSQL](https://www.postgresql.org/download/)
2. Accede a la línea de comandos sin cambiar de cuenta. *(Si deseas crear un nuevo usuario o un nuevo rol revisa el siguiente link: [Utilizar roles y Bases de Datos de Postgres](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04-es))* 
  - `sudo -u postgres psql`
  
  - Debera ver algo como esto: <br>
    ![Postgres](https://raw.githubusercontent.com/LuceroLuciano/Prissma-API/main/img/1_postgres.png)
  
  - Ejecute el comando `\c` para ver todas las bases de datos locales
  - Crea una base de datos llamada **explorers_api** con el siguiente comando `create database explorers_api;`
  - Ejecuta el siguiente comando `\q` para salir de la linea de comandos de postgres

3. Cambiar el nombre de **Usuario**, **Contraseña** y **Base de datos** en el archivo `.env` del proyecto **Pissma-API**, que es la cedena de conexión que permitira conectarse a la base de datos. Si seguiste las istrucciones para la instalación de postgres y creación de base de datos, es probable que solo tengas que cambiar la contraseña.

## 3. Instalando dependencias del proyecto (Servidor)
1. Abre el proyecto que clonaste **Prissma-API** en tu entorno local
2. Ejecutar el siguiente comando `npm install` para instalar todas las dependencias.   
    ```
    express
    prisma
    cors    
    ```
    Puedes instalarlo de la siguiente manera:
    ```    
    npm install express --save-dev
    npm install prisma --save-dev
    npm install cors --save`
    ```  
     
    
 3. Ejecuta el sigueinte comando `npx prisma migrate dev --name init` para insertar algunos registros en la base de datos. Al terminar se habra creado una tabla con registros usando **prisma**. Revisa en tu base de datos que la tabla y lo registros se realizarón correctamente.
     - Ingresa a la terminal de postgres `sudo -u postgres psql`
     - Lista las bases de datos `\c`
     - Inicia la base de datos **explorers_API** con el siguiente comando `\c explorers_api`
     - Lista las tablas `\dt`
     - Muestra los registros de la tabla **NewMissionCommander** `select * from public."NewMissionCommander";`
     - Presiona `q` o `\q`  para salir de la consola.
 
 Con esto comprobamos que la conexión se realizo satisfactoriamente y el servidor esta funcionando. 
     
4. Ejecuta el servidor con el siguiente comando `node server.js`. Deberas tener la siguiente salida en la consola: 
![Postgres Server](https://raw.githubusercontent.com/LuceroLuciano/Prissma-API/main/img/2_postgres.png)


## 4. Intalando dependencias del proyecto (Cliente)

1. Abre el proyecto que clonaste **client-launchx**
2. Ejecuta el siguiente comando
```npm install```

3. Ejecuta la app con el comando: `npm run serve` <br>
![IMG-Cliente](https://raw.githubusercontent.com/LuceroLuciano/Prissma-API/main/img/3_postgresCliente.png) <br>

4. con esto podrás entrar a la url: `http://localhost:8081/` en tu navegador. 

![IMG-API](https://raw.githubusercontent.com/LuceroLuciano/Prissma-API/main/img/4_API.png) <br>
![IMG-API](https://github.com/LuceroLuciano/Prissma-API/blob/main/img/5_API.png)

De esta forma estarias ejcutando la API desde el Cliente y el Servidor. 


 
           
        
        
    

