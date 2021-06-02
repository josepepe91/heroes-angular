# SuperHero

Este proyecto fué generado con [Angular CLI](https://github.com/angular/angular-cli) versión 12.0.2.

## Pasos para levantar el proyecto

Ejecutar `npm install` para la instalación de dependencias

Ejecutar `npm run json:server` para iniciar el mock server (se ejecutará en el puerto 3000)

Después, en otra consola ejecutar `npm run start` para iniciar el proyecto

Abrir en un navegador la dirección : `localhost:4200`

## Características del proyecto

- Data obtenida de un mock-server que simula el backend `json-server`, la data se encuentra en `./db.json`
- Uso de HttpClient para obtención de datos del mock-server
- Componentes:
  - Lista de héroes paginada, con buscador y opciones de crear, borrar y eliminar
  - Edición/creación de héroes con validación de nombre requerido
  - Dialogo de confirmación de eliminación heroes
- Interceptor que invoca a componente que indique que se espera la data del servicio asíncrono
- Uso de Angular Material
- Uso de Rutas para cada componente
- Lazy loading para módulo de héroes
