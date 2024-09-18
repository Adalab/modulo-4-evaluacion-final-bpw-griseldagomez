const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise")

// crear el servidor web
const server = express();

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "productos"
  })
  connection.connect();
  return connection;
}

// necesito que mi servidor acepte peticiones externas
server.use(cors());
server.use(express.json());

//insertar registro de usuario
server.post("/user", async (req, res) => {
  const connection = await getDBConnection();
  const params = req.body;
  const userQuerySQL =
    "INSERT INTO users (user,name, email, password) VALUES(?,?,?, ?)";
  const [userResult] = await connection.query(userQuerySQL, [
    params.user,
    params.name,
    params.email,
    params.password
  ]);
  connection.end();
  res.status(201).json({
    status: "success",
    result: userResult,
  });
})


//leer registros

server.get("/user", async (req, res) => {
  const connection = await getDBConnection();
  const params = req.query;
  const userQuerySQL =
    "SELECT * FROM users";
  const [userResult] = await connection.query(userQuerySQL, [
    params.user,
    params.name,
    params.email,
    params.password
  ]);
  connection.end();
  res.status(201).json({
    status: "success",
    result: userResult,
  });
})


//Actualizar datos del registro

server.patch("/user", async (req, res) => {
  const connection = await getDBConnection();
  const params = req.body;
  const userQuerySQL =
    "UPDATE users SET email = ?, password = ? WHERE idUser = ?";
  const [userResult] = await connection.query(userQuerySQL, [
    params.email,
    params.password,
    params.idUser
  ]);
  connection.end();
  
  res.status(201).json({
    status: "success",
    result: userResult,
  });
})

//eliminar un registro


server.delete("/user/:idUser", async (req, res) => {
  const params = req.params.idUser;
  const connection = await getDBConnection();
  const sql = "DELETE from users WHERE idUser = ?";
  const [userResult] = await connection.query(sql, [params]
  );
  connection.end();
 
  res.status(201).json({
    status: "success",
    result: userResult,
  });
})


const port = 5000;
server.listen(port, () => {
  console.log("Server is running on port " + port);
});