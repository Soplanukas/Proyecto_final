const Category = require('../models/category');

const MostrarCategoria = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.render('categories/index', { categories });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const CrearCategoria = async (req, res) => {
    try {
        const { name } = req.body;
        await Category.create({ name });
        res.redirect('/categories');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const MostrarEdicion = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            res.render('categories/edit', { category });
        } else {
            res.status(404).send('Categoría no encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const EditarCategoria = async (req, res) => {
    try {
        const { name } = req.body;
        await Category.update(
            { name },
            { where: { id: req.params.id } }
        );
        res.redirect('/categories');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const EliminarCategoria = async (req, res) => {
    try {
        const id = req.params.id;
        await Category.destroy({ where: { id: id } });
        res.redirect('/categories');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { MostrarCategoria, CrearCategoria, MostrarEdicion, EditarCategoria, EliminarCategoria};

