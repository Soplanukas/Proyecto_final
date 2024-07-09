const express = require('express');
const router = express.Router();
const { MostrarCategoria, CrearCategoria, MostrarEdicion, EditarCategoria, EliminarCategoria } = require('../src/controllers/categoriesController');

//MostrarCategoria
router.get('/', MostrarCategoria);

//CrearCategoria
router.post('/', CrearCategoria);

//MostrarEdicion
router.get('/edit/:id', MostrarEdicion);

//EditarCategoria
router.post('/edit/:id', EditarCategoria);

//EliminarCategoria
router.post('/delete/:id', EliminarCategoria);

module.exports = router;
