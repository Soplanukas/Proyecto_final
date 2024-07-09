const express = require('express');
const router = express.Router();
const {RegistrarseUp, irUp, irProfile, IrSignIn, IniciarSesion, CerrarSesion} = require('../src/controllers/authController');

//irUp
router.get('/signUp', irUp);

//RegistrarseUp
router.post('/signUp', RegistrarseUp);

//irProfile
router.get('/profile', irProfile);

//IrSignIn
router.get('/signIn', IrSignIn);

//IniciarSesion
router.post('/signIn', IniciarSesion);

//CerrarSesion
router.get('/logout', CerrarSesion);

module.exports = router;