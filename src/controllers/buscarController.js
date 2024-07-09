const { Category, Flight } = require('../models/associations');
const { Op } = require('sequelize');

const SearchVuelito = async (req, res) => {
    try {
        const searchQuery = req.query.search || '';

        const categories = await Category.findAll({
            include: {
                model: Flight,
                as: 'flights',
                where: searchQuery ? { name: { [Op.iLike]: `%${searchQuery}%` } } : {},
                required: false,
            },
        });

        res.render('busqueda/buscar', { categories, search: searchQuery });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { SearchVuelito };