# API Actor_Sakila

Esta API permite la gestión de actores en una base de datos PostgreSQL. A continuación, se detalla cada componente y cómo estos trabajan en conjunto.

## 1. Conexión a la base de datos (`database.js`)

Este archivo establece la conexión con una base de datos PostgreSQL usando el paquete `pg`.

### Variables de conexión:

- **host**: Dirección del servidor donde se encuentra la base de datos, en este caso, `localhost`.
- **user**: Nombre del usuario de PostgreSQL, en este caso, `postgres`.
- **password**: Contraseña del usuario, en este caso, `admin`.
- **database**: Nombre de la base de datos, en este caso, `tec_web`.
- **port**: Puerto para la conexión, en este caso, `5432`.

> Si ocurre un error durante cualquier operación de la base de datos, el error se mostrará en la consola y el proceso se terminará.

## 2. Controlador de Actores (`ActorController.js`)

Este controlador tiene varias funciones que permiten operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para actores.

### Funciones:

- **showActors**: Muestra todos los actores.
- **showActorById**: Muestra un actor específico usando su ID.
- **createActor**: Crea un nuevo actor.
- **updateActor**: Actualiza la información de un actor usando su ID.
- **deleteActor**: Elimina un actor usando su ID.

> Para cada función, si ocurre un error en la base de datos, se enviará una respuesta con un código de estado `500` y un mensaje de error.

## 3. Rutas del API (`router.js`)

Este archivo define las rutas que se utilizarán para interactuar con los actores.

### Rutas de Actor:

- **GET** `/actors`: Obtiene la lista de todos los actores.
- **GET** `/actors/:id`: Obtiene un actor específico usando su ID.
- **POST** `/actors`: Crea un nuevo actor. Requiere un cuerpo con `first_name` y `last_name`.
- **PUT** `/actors/:id`: Actualiza un actor existente usando su ID. Requiere un cuerpo con `first_name` y `last_name`.
- **DELETE** `/actors/:id`: Elimina un actor usando su ID.

## Cómo usar:

### Obtener todos los actores:

http
GET /actors

## Obtener un actor por ID:

GET /actors/{ID}

## Crear un nuevo actor:

POST /actors
{
"first_name": "John",
"last_name": "Doe"
}

## Actualizar un actor:

PUT /actors/{ID}
{
"first_name": "Jane",
"last_name": "Doe"
}

## Eliminar un actor:

DELETE /actors/{ID}
