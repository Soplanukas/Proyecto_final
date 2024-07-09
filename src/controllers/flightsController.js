const Flight = require('../models/flight');
const Category = require('../models/category');

const MostrarVuelito = async (req, res) => {
    try {
        const flights = await Flight.findAll();
        const categories = await Category.findAll(); // Obtener categorías
        res.render('flights/index', { flights, categories }); // Pasar categorías a la vista
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const CrearVuelito = async (req, res) => {
    try {
        const { name, origin, destination, departureTime, arrivalTime, price, categoryId } = req.body;
        await Flight.create({
            name,
            origin,
            destination,
            departuretime: departureTime, 
            arrivaltime: arrivalTime, 
            price,
            category_id: categoryId
        });
        res.redirect('/flights');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const MostrarEdicionVuelito = async (req, res) => {
    try {
        const flight = await Flight.findByPk(req.params.id);
        const categories = await Category.findAll();
        if (flight) {
            res.render('flights/edit', { flight, categories });
        } else {
            res.status(404).send('Vuelo no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const ActualizarVuelito = async (req, res) => {
    try {
        const { name, origin, destination, departureTime, arrivalTime, price, categoryId } = req.body;
        await Flight.update(
            { name, origin, destination, departureTime, arrivalTime, price, categoryId },
            { where: { id: req.params.id } }
        );
        res.redirect('/flights');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const EliminarVuelito = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        await Flight.destroy({ where: { id: req.params.id } });
        res.redirect('/flights');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { MostrarVuelito, CrearVuelito, MostrarEdicionVuelito, ActualizarVuelito, EliminarVuelito};