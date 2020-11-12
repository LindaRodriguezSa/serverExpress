const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { Console } = require("console");

app.use(bodyParser.json());
let canciones = [
  "Reptilia",
  "Cant stop",
  "The Reason",
  "My sacrifice",
  "bajo el agua",
];

app.get("/music", (req, res) => {
  res.send("<h1>music</h1>");
});

app.get("/songs", (req, res) => {
  res.send(canciones);
});

app.post("/songs", (req, res) => {
  let bodyR = req.body;
  let name = bodyR.name;
  canciones.push(name);
  res.send(canciones);
  console.log(bodyR);
});

app.put("/songs/:id", (req, res) => {
  let id = req.params.id;
  if (id >= 0 && id < canciones.length) {
    canciones[id] = "ejemplo";
    res.send(canciones);
  } else {
    res.status(400).send({ message: "No existe el id ingresado" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
