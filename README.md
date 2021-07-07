# DATA WAREHOUSE

:star: Proyecto Data Warehouse - DWFS de Acámica. :star:

## Recursos y tecnologías utilizadas

- :pushpin:   Node.js.
- :pushpin:   Javascript/HTML/CSS.
- :pushpin:   XAMPP.
- :pushpin:   MySQL.
- :pushpin:   JWT.
- :pushpin:   Express
- :pushpin:   Sequelize
- :pushpin:   Nodemon

## Pasos de instalación e inicialización

### 1 - Instalar Node

Se va a necesitar nodejs. Puedes comprobar si ya lo tienes instalado en tu sistema mediante el comando

`node -v`

### 2 - Clonar proyecto e instalación de dependencias

`git clone https://github.com/egarzon85/datawarehouse.git`

`cd datawarehouse`

`npm install`

### 3 - Creación e inicializacion base de datos

- Descargar e Instalar [XAMPP](http://sourceforge.net/projects/xampp/files/).
- Ejecutar XAMPP e inicializar los servicios Apache y MySQL.
- Abrir el panel de control MySQL. `http://localhost/phpmyadmin/`
- Dentro del panel de control, importar el archivo `/backend/database/datawarehouse.sql`


- Usuario admin  
`email: admin@gmail.com, Password: 1234`

- Usuario regular  
`User: basico@gmail.com, Password: 123`

### 4 - Iniciando el servidor

Desde la terminal ejecute el siguiente comando:

`nodemon backend/servers/index.js`

De esta manera ya tenemos nuestro servidor en ejecución y listo para usar.