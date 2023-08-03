// llamo el archivo de la lista de tareas
const moduleTasks = require('../data/tasks');

const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  //Definir rutas
  console.log("Se ha realizado una solicitud al servidor.");

  // Convertimos la lista de tareas recibida del modulo en formato JSON
  const data = JSON.stringify(moduleTasks.tasksList);

  if (req.url === '/' && req.method === 'GET') {
    // Mensaje de bienvenida al cliente en la ruta de inicio
    res.writeHead(200);
    res.end("Welcome to the server dear customer!");
  } else if (req.url === '/tasks' && req.method === 'GET') {
    // Si la ruta es /task el server responde un formato JSON de la lista de tareas al cliente con status 200 OK y el tipo de contenido que es JSON
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    // Si la ruta no existe el server responde con un codigo 404
    res.writeHead(404);
    res.end("Error 404 Not Found");
  }

});

// Iniciamos el servidor
server.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
