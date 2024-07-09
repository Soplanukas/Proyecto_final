const User = require('../../src/models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');

const irUp = (req, res) => {
    res.render('auth/signUp');
}

const RegistrarseUp = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        if (user) {
            res.redirect('/auth/signIn');
        } else {
            res.json({ message: 'No se pudo crear el usuario' });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const irProfile = (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/auth/signIn');
    }
    res.render('auth/profile', { user: req.user });
}

const IrSignIn = (req, res) => {
    res.render('auth/signIn');
}

const IniciarSesion = async (req, res) => {
    passport.authenticate('local', {
        successReturnToOrRedirect: '/auth/profile',
        failureRedirect: '/auth/signIn',
        keepSessionInfo: true
    })(req, res);
}

const CerrarSesion = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/auth/signIn');
    });
}

module.exports = {RegistrarseUp, irUp, irProfile, IrSignIn, IniciarSesion, CerrarSesion};