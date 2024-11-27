# Backend CINEMADRID
Este proyecto forma parte del contenido de las clases prácticas del Bootcamp de desarrollo Full-stack brindado por la UNTREF en el partido de La Madrid. En esta instancia estamos desarrollando una aplicación backend, implementando Express.js


## 📖 Tabla de contenidos

- [Backend CINEMADRID](#backend-cinemadrid)
  - [📖 Tabla de contenidos](#-tabla-de-contenidos)
  - [🔧 Instalación](#-instalación)
  - [📖 Avance de cada clase](#-avance-de-cada-clase)
    - [Clase 06/11: Creación de proyecto Express y CRUD básico](#clase-0611-creación-de-proyecto-express-y-crud-básico)
    - [Clase 13/11: Arquitectura de aplicación backend](#clase-1311-arquitectura-de-aplicación-backend)
    - [Clase 20/11: Middleware](#clase-2011-middleware)


## 🔧 Instalación

Sigue estos pasos para clonar e instalar el proyecto:

**1.  Clona el repositorio:**

```bash
git clone https://github.com/JuanNebbia/CineMadrid-backend
```
**2. Inicia un proyecto con NPM**

Asegurate de tener instalado Node.js y luego instalá las dependencias con:

```bash
npm install
```

**3. Ejecuta el servidor de desarrollo:**

Una vez instaladas las dependencias, inicia el proyecto con:

```bash
npm run dev
```
Esto iniciará la aplicación en http://localhost:3000.

## 📖 Avance de cada clase

### Clase 06/11: Creación de proyecto Express y CRUD básico 
* **Objetivos:**
  * Aprender a inicializar un proyecto Express y dejar escuchando al servidor.
  * Definir las rutas para los endpoints principales a trabajar.
  * Leer y escribir un archivo a modo de persistencia de datos.
* **Avances**
  * Se inicializa un proyecto npm mediante el comando
  ```bash
    npm init -y
  ```
  * Se instala **Express** mediante el comando
  ```bash
    npm install express
  ```
  * Se agrega el *"type": "module"* y los script de inicio en el archivo **package.json**. El contenido del archivo queda de la siguiente manera:
  ```json
    {
        "name": "backend-2",
        "version": "1.0.0",
        "main": "app.js",
        "type": "module",
        "devDependencies": {},
        "scripts": {
            "start": "node app.js",
            "dev": "node --watch app.js",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "description": "",
        "dependencies": {
            "express": "^4.21.1"
        }
    }
  ```

  * Se crea el archivo raiz **app.js**, se crea la instancia de express y se llama al método *listen()* para dejar al servidor escuchando en el puerto especificado.
  * Se almacenan datos de prueba en un archivo json, en la ruta **src/data/movies.json**
  * Se crean los diferentes endpoints para realizar acciones CRUD con los datos de prueba:
    * **GET global**: obtiene todos los registros.
    * **GET por id**: obtiene el registro con el id especificado en el parámetro.
    * **POST**: genera un nuevo registro con los datos recibidos por body.
    * **PUT**: Actualiza el registro con id especificado en parámetro, con los datos recibidos por body.
    * **DELETE** Elimina un registro con el id especifiado en parámetro.
  * Se agrega el middleware global para procesar las peticiones que incluyen un body.
  ```js
    app.use(express.json());
  ``` 

  ### Clase 13/11: Arquitectura de aplicación backend
* **Objetivos:**
  * Estructurar la aplicación backend en diferentes capas:
    * Raíz
    * Routers
    * Controllers
    * Services
  * Comprender el rol de cada nivel del flujo, y el beneficio de su implementación
  * Distribuir las funcionalidades del sistema en sus respectivos archivos y carpetas
* **Avances**
  * Se crea la carpeta */routes* y los archivos de rutas para cada entidad a trabajar. En este caso */routes/movies.routes.js* y */routes/users.routes.js*. Se mueven los endpoints respectivos a estos archivos y se dejan en el archivo raíz los middlewares de acceso a las rutas.
  * Se crea la carpeta */controllers* y los archivos de controladores */controllers/movies.controller.js* y */controllers/users.controller.js*. Se mueven los endpoints a estos archivos y se los llama desde los archivos de rutas.
  * Se crea la carpeta */services* con los archivos */services/movies.service.js* y */services/users.service.js*. Se mueve a estos archivos las funciones con la lógica y el acceso a la persistencia de datos mediante archivos *.json*

### Clase 20/11: Middleware
* **Objetivos:**
  * Comprender el uso y la funcionalidad de los middlewares en Express.
  * Definir la importancia de los parámetros **next** y **error** en los middlewares.
  * Aplicar el uso de middleware de diferentes tipos:
    * A nivel de aplicación / globales
    * A nivel de rutas
    * Para control de errores
* **Avances**
  * Se añade un middleware a nivel de aplicación para la ruta principal de bienvenida, que simplemente muestra un saludo por consola.
  * Se incorpora a la estructura una carpeta *middlewares* para contener los archivos destinados a tal propósito.
  * Se crean middlewares a nivel de ruta para simular el control de autenticación y roles de las peticiones entrantes. Se encuentran en archivos *auth.middleware.js* y *role.middleware.js*
  * Se agrega un middleware para control de errores en el archivo *error.middleware.js* y se lo invoca en el archivo principal.