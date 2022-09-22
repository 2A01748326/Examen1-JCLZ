const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/examen') //Ya no necesita la extension
//Create, Read, Update, Delete (CRUD) ABCC (Alta, Bajas, Cambios, Consultas)

//Servicio para mostrar el formulario
router.get('/pagina', consolaController.getInfo);
//Servicio para procesar los datos del formulario
router.post('/validacion', consolaController.postValidacion);
module.exports = router;
