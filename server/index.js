const getServiceTask = require('../data/tasks');
/* console.log(getServiceTask.serviceTasks()); */

const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  //Definir rutas

  console.log("Se ha realizado una solicitud al servidor.");
  const data = JSON.stringify(getServiceTask.serviceTasks());

  // Enviar una respuesta al cliente
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(data);
});

// Iniciamos el servidor
server.listen(port, () => {
  console.log("servidor corriendo.");
});
