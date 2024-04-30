const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Products = sequelize.define('products', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //categoryId
    
});

module.exports = ModelName;