require("dotenv").config();

const path = require("path");

const express = require("express");

const expressLayouts = require("express-ejs-layouts");

const app = express();

const bodyParser = require("body-parser");

const routesVuelos = require("./routes/router");

const passportConfig = require('./config/passport');

const session = require('express-session');

const cookieParser = require('cookie-parser');

const ensureAuthenticated = require('./middlewares/authMiddleware');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

//Middleware a nivel de aplicacion

app.use((req, res, next) => {
    console.log("Middleware a nivel de aplicacion");
    console.log(req.method, req.url);
    next();
})

//Configuramos vistas

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//configuramos el layout

app.use(expressLayouts);
app.set('layout', 'layouts/base');

//Configuramos session

app.use(session({
    secret: 'KMDsina09ujDCkajsd',
    reserve: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))

//Configuramos passport

passportConfig(app);

//middleware para pasar el usuario autenticado a las vista

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

//middleware para rutas protegidas

app.use((req, res, next) => {
    const excludedRoutes = ['/auth/signIn', '/auth/signUp', '/home'];
    if (excludedRoutes.includes(req.path)) {
        return next();
    }
    ensureAuthenticated(req, res, next);
});

//Llamamos nuestras rutas

routesVuelos(app);

//Levantamos el server

app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
});