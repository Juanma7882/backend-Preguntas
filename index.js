// index.js

const express = require("express")
const { obtenerPreguntas } = require("./controllers/preguntasController");
const app = express();
const PORT = 3000;

// Middleware para parsear JSON en las request
app.use(express.json());

// Ruta que usa tu controlador
app.get("/controllers", obtenerPreguntas);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});