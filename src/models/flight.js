const { DataTypes } = require('sequelize');
const sequelize = require('../../db/sequelize');

const Flight = sequelize.define('Flight', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departuretime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    arrivaltime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Category',
            key: 'id',
        },
    },
}, {
    freezeTableName: true,
});

module.exports = Flight;
