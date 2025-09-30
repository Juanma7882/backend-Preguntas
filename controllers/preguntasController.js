const CardService = require("../services/CardService");


/**
 * Lista todas las preguntas con sus etiquetas
 * @route GET /preguntas
 * @returns {JSON} - Devuelve un JSON con todas las cartas.
 */
const obtenerPreguntas = async (req, res) => {
    try {
        const preguntas = await CardService.listar();

        return res.status(200).json({
            success: true,
            message: "Preguntas obtenidas correctamente",
            data: preguntas
        });
    } catch (error) {
        console.error("Error en obtenerPreguntas:", error);

        return res.status(500).json({
            success: false,
            message: "Ocurrió un error obteniendo las preguntas",
            data: null
        });
    }
};

// const EliminarPregunta = async (id) => {
//     try {

//     } catch (err) {

//     }
// }

// const CrearPregunta = async (pregunta) => {
//     try {

//     } catch (err) { }
// }

module.exports = { obtenerPreguntas };
