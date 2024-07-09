const Category = require('./category');
const Flight = require('./flight');

Category.hasMany(Flight, {
    foreignKey: 'category_id',
    as: 'flights',
});

Flight.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category',
});

module.exports = { Category, Flight };
