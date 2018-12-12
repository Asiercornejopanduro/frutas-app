# FrutasApp

Este proyecto fue creado con [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.
La aplicación gestiona frutas, utilizando un API REST que contiene un archivo .json como BBDD. El archivo está en la raíz del proyecto y se llama **db.json**.

## Arrancar API REST

Navegar hasta la carpeta raíz del proyecto y ejecutar en la consola:
```
json-server --watch db.json

```
## Arrancar la App
Arrancar el servicio de gestión de las frutas navegar hasta la carpeta raiz del proyecto y ejecutar los siguiente en la consola:
```
ng serve --o

```
## Buscador
Para que el buscador funcione deberemos instalar el módulo **Ng2SearchPipeModule**
Para ello estando en la carpeta raíz del proyecto debemos ejecutar en la consola el siguiente comando:

```
npm i ng2-search-filter --save

```

## Contenido de la App

## Componentes
1. Comparador: 
  -Compara precio y calorias de las frutas seleccionadas.
  -Permite buscar la fruta deseada.
  -Añadir al carro de la compra las frutas que se deseen.
2. Crud-frutas (Para acceder a esta vista se debe iniciar sesión)
  -Tabla con los datos de las frutas almacenadas
  -Permite ir al formulario de creación o modificación de frutas.
3. Formulario (Para acceder a esta vista se debe iniciar sesión)
  -Permite crear una nueva fruta o modificar una ya existente.
4. Fruta-card
  -La representacion de cada fruta en HTML y Bootstrap 4.
5. Login
  -Formulario de logeo de la aplicación necesario para acceder a todas las vistas de la misma.

## Guards o filtros
1. BackoffciceGuard: Restringe el acceso a ciertas partes de la aplicación. 

## Models
1. Fruta
2. Linea-producto: El carrito de la compra es un array de Linea-producto.
3. Usuario

## Pipes
1. Oferta: Se utiliza para mostrar las frutas en oferta o todas las almacenadas.

## Providers o services
1. Fruta: Permite realizar un crud básico de frutas.
2. Login: Controla si el usuario que intenta acceder a ciertas partes de la app esta logeado o no.

