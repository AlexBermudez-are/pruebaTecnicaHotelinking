# Proyecto Full-Stack: Prueba Tecnica Hotelinking

Este repositorio contiene dos proyectos: un frontend en React y un backend en Laravel con una base de datos MySQL. A continuación se detallan los pasos para configurar y ejecutar ambos proyectos localmente.

## Tecnologías Utilizadas

- **Frontend**: JavaScript, React, Bootstrap
- **Backend**: PHP, Laravel
- **Base de Datos**: MySQL

## Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos en tu máquina:

- [Node.js](https://nodejs.org/) y npm
- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [MySQL](https://www.mysql.com/)

## Configuración del Frontend (React)

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/combined-projects.git
   cd combined-projects

2. **Instalar dependencias**

   Navega al directorio front y ejecuta npm para instalar las dependencias:
   cd front
   npm install

 3. **Ejecutar el servidor de desarrollo**

   Después de instalar las dependencias, ejecuta el siguiente comando para iniciar el servidor de desarrollo:
   npm run start

   El servidor de desarrollo se iniciará en http://localhost:3000.

## Configuración del Backend (Laravel)
  
   1. **Configurar la base de datos MySQL**
   Asegúrate de tener MySQL instalado y en ejecución. Luego, crea una base de datos para el proyecto:

  **CREATE DATABASE pruebaTecnicaHotelinking;**
  
  2. **Configurar el archivo .env**

  Navega al directorio api y copia el archivo de entorno de ejemplo:

  cd ../api
  cp .env.example .env
  
  Luego, edita el archivo .env y configura los detalles de la base de datos:

  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=nombre_de_tu_base_de_datos
  DB_USERNAME=tu_usuario
  DB_PASSWORD=tu_contraseña

  4. **Instalar dependencias de Laravel**

  Ejecuta Composer para instalar las dependencias:

  composer install

  5. **Generar la clave de aplicación**

  php artisan key:generate

  6. **Migrar y sembrar la base de datos**

  Ejecuta las migraciones y los seedeers para configurar la base de datos:

  php artisan migrate --seed

  7. ** Ejecutar el servidor de desarrollo**

  Inicia el servidor de desarrollo de Laravel:

  php artisan serve

El servidor de desarrollo se iniciará en http://localhost:8000.
