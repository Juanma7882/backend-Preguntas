console.log("tamoss")
const express = require("express");
const { obtenerPreguntas } = require("./controllers/preguntasController");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/preguntas", obtenerPreguntas);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


// module.exports = { obtenerPreguntas };