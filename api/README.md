<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Proyecto Full-Stack: Prueba Tecnica Hotelinking

Este repositorio contiene un proyecto: Un Back-end en PHP y Laravel, con una base de datos hecha con MySQL.

## El objetivo del proyecto

Una pequeña plataforma donde un usuario puede acceder, ve una lista de ofertas, y puede,
haciendo click sobre alguna de ellas, generar un código único que se guardará en la base
de datos y después puede revisar que códigos promocionales tiene en una página de
detalle. En la página de detalle, el usuario puede pulsar sobre un botón canjear código que
marcará como canjeado el código de la BBDD y confirmará al usuario que se ha canjeado.

A continuación se detallan los pasos para configurar y ejecutar el proyecto localmente.

## Tecnologías Utilizadas

- **Backend**: PHP, Laravel
- **Base de Datos**: MySQL

## Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos en tu máquina:

- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [MySQL](https://www.mysql.com/)

## Configuración del Backend (Laravel)

## 1. Configurar la base de datos MySQL
   
   Asegúrate de tener MySQL instalado y en ejecución. Luego, crea una base de datos para el proyecto:

**CREATE DATABASE pruebaTecnicaHotelinking;**

## 2. Configurar el archivo .env

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

## 4. Instalar dependencias de Laravel

Ejecuta Composer para instalar las dependencias:

composer install

## 5.Generar la clave de aplicación**

php artisan key:generate

## 6. Migrar y sembrar la base de datos**

Ejecuta las migraciones y los seedeers para configurar la base de datos:

php artisan migrate --seed

## 7. Ejecutar el servidor de desarrollo**

Inicia el servidor de desarrollo de Laravel:

php artisan serve

El servidor de desarrollo se iniciará en http://localhost:8000.

