const express = require('express');
const indexRouter = require('./index');
const flightsRouter = require('./flights');
const categoriesRouter = require('./categories');
const buscarRouter = require('./buscar');
const authRouter = require('./auth');


function routesVuelos(app){
    const router = express.Router();

    app.use("/", router);
    router.use("/principal", indexRouter);
    router.use("/flights", flightsRouter);
    router.use("/categories", categoriesRouter);
    router.use("/buscar", buscarRouter);
    router.use("/auth", authRouter);
}

module.exports = routesVuelos;