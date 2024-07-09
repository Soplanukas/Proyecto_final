const express = require('express');
const router = express.Router();
const { MostrarVuelito, CrearVuelito, MostrarEdicionVuelito, ActualizarVuelito, EliminarVuelito } = require('../src/controllers/flightsController');

//MostrarVuelito
router.get('/', MostrarVuelito);

//CrearVuelito
router.post('/', CrearVuelito);


//MostrarEdicionVuelito
router.get('/edit/:id', MostrarEdicionVuelito);

//ActualizarVuelito
router.post('/edit/:id', ActualizarVuelito);

//EliminarVuelito
router.post('/delete/:id', EliminarVuelito);

module.exports = router;
