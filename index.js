const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hola"));
app.get("/productos", (req, res) => res.send("Hola"));
app.get("/sobre-nosotros", (req, res) => res.send("Hola"));
app.get("/contacto", (req, res) => {
  res.sendfile("./public/contacto.html");
  console.log("here");
});

app.listen(3000, () =>
  console.log("¡Servidor corriendo en http://localhost:3000")
);
