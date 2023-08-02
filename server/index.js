// llamo el archivo de la lista de tareas
const moduleServiceTasks = require('../data/tasks');

const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  //Definir rutas

  console.log("Se ha realizado una solicitud al servidor.");

  // Convertimos la lista de tareas recibida del modulo en formato JSON
  const data = JSON.stringify(moduleServiceTasks());

  // Enviar la respuesta en formato JSON al cliente con status 200 OK y el tipo de contenido
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(data);
});

// Iniciamos el servidor
server.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
