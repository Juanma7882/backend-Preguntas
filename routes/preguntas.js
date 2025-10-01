const express = require("express");
const { obtenerPreguntas } = require("../controllers/preguntasController");
const { crearPregunta } = require("../controllers/preguntasController");

const router = express.Router();

router.get("/", obtenerPreguntas);
router.post("/", crearPregunta);

module.exports = router;
