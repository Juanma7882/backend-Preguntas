const CardService = require("../services/CardService");


const obtenerPreguntas = async (req, res) => {
    try {
        const preguntas = await CardService.listar();
        res.status(200).json(preguntas);
        console.log(preguntas)
        console.log(res)

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error obteniendo las preguntas" });
    }
};

module.exports = { obtenerPreguntas };