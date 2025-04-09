# Control-de-Incidencias-del-Banco-del-Sur

Este es un modelo realizado como propuesta para la gestión de incidencias que puedan ocurrir en los equipos
del Banco del Sur, ya sean cajeros, banca online, redes del lugar, entre otro tipo de inconvenientes que se 
pueden presentar y poner en peligro la estabilidad y continuidad del servicio. 

Esta propuesta de un Test Driven Development tiene como objetivo principal de dar seguimiento y control a las incidencias que se vayan registrando al ser reportadas.

### Requisitos de Instalación

* Contar con Node js (preferiblemente de la versión 20 en adelante)
* Tener el gestor de paquetes npm (si instalas Node js este gestor vendrá incluido con él)
* Git (en caso de que utilices el método de clonar repositorio)
* Editor de código Visual Studio Code

### Instalación

***Acceder al proyecto:***

* Método de clonación: clonar el repositorio utilizando git, para ello abres la terminal y ejecutas el siguiente comando:

```
git clone https://github.com/PaolaMarcano/Control-de-Incidencias-del-Banco-del-Sur.git
```

* Método de descomprimir carpeta: puedes descargar la versión de la carpeta comprimida que ofrece GitHub

***Ejecutar el proyecto:***

1. Abrir la carpeta del proyecto en Visual Studio Code

2. Abrir la terminal en el editor de código y ejecutar los siguientes comandos:

```
cd frontend
```

```
npm install
```

```
npm run serve
```

3. Ir a la ruta con el puerto asignado para ver la página, esta ruta se puede ver por consola, pero usualmente se encuentra en la siguiente locación: 

http://localhost:3000/

***Ejecutar el proyecto en modo de TEST:***

Este proyecto tiene una modalidad para el Test Driven Development en el que se utiliza Cypress, un framework de pruebas end-to-end (E2E) basado en JavaScript, lo que permite testear diferentes pruebas en una interfaz con el fin de agilizar el proceso de depuración del código.

1. Abrir la carpeta del proyecto en Visual Studio Code

2. Abrir la terminal en el editor de código y ejecutar los siguientes comandos:

```
cd frontend
```

```
npm install
```

```
npm run test:e2e
```

3. Usar la interfaz que ofrece Cypress para acceder a las pruebas

4. Seleccionar alguna de las pruebas que desea ejecutar

## Autores

* **Paola Valentina Marcano Salas** - *(C.I: 30.975.611)* - [PaolaMarcano](https://github.com/PaolaMarcano)

## Desarrollado para:

Universidad Valle del Momboy

Prof Caryuly Trinidad Rosales Briceño