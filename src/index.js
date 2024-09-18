const express = require("express");
const cors = require("cors");

// crear el servidor web
const server = express();

// necesito que mi servidor acepte peticiones externas
server.use(cors());

// establecer el puerto de conexión
const port = 5001;
server.listen(port, () => {
  console.log("Server is running on port " + port);
});
