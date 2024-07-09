const express = require('express');
const router = express.Router();
const { SearchVuelito } = require('../src/controllers/buscarController');

//SearchVuelito
router.get('/', SearchVuelito);

module.exports = router;
