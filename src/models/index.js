const User = require("./User")
const Category = require('./Category');
const Products = require('./Products')

Products.belongsTo(Category)
Category.hasMany(Products)
