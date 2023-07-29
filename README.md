# node-server

- ¿Qué sucedio al usar async y await?

    Al implementar async y await en la función principal de startApp se pudo controlar y esperar que las funciones de eliminar, agregar y completar tareas se ejecutaran completamente, es decir la función principal de inicio esperaba los tiempos de cada función para poder seguir con la ejecución del del código y resolver cada una de las promesas.

- ¿Qué sucedió al usar el método then()?

    Al usar then() observe que las funciones de agregar, eliminar y completar tareas no terminaban de ejecutar las operaciones ya que la función principal startApp() tiene un ciclo while el cual mientras la opción salir del programa no sea true este se ejecuta cada vez que se terminaba una operación del menú lo que ocasionaba que se ejecutara nuevamente la función startApp() sin esperar a terminar la ejecución de código de las demás funciones, también bloquea la ejecución del setTimeout en la función eliminar tareas, de acuerdo a la lógica del programa se optó por usar async / await.

- ¿Qué diferencias encontraste entre async, await y el método then()?

    La diferencia esta que para declarar que una función devuelve una promesa se utiliza la cláusula async y dentro de la función se asigna la cláusula await para esperar que se resuelva la promesa, es decir la ejecución de la función se detiene hasta que la promesa se haya resuelto y luego la función se detiene si la promesa fue resuelta o rechazada.

    El método then() se usa en objetos de tipo promesa y devuelve una función de llamada que se ejecuta cuando la promesa sea resuelta satisfactoriamente, además que se pueden encadenar múltiples llamadas then para procesar datos en cascada.

    En resumen, la cláusula async / await es el enfoque moderno y legible de trabajar con promesas y el método then es la forma tradicional de manejar el comportamiento de las promesas.


Print app task list Node:

![image](https://github.com/fernandolhoyosh/node-server/assets/108826210/bb747a7c-091a-4cd0-b38a-d6f828c29a47)
