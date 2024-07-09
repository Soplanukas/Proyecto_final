const express = require('express');
const router = express.Router();
const { ObtenerCategoriasYVuelos } = require('../src/controllers/indexController');

//ObtenerCategoriasYVuelos
router.get('/', ObtenerCategoriasYVuelos);

module.exports = router;
