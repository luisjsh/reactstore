const Sequelize = require('sequelize');
const sequelize = require('../database')

const productImages = sequelize.define('productimages',{
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey:true},
    name: {type: Sequelize.TEXT},
    path: {type: Sequelize.TEXT},
    productsid: {type: Sequelize.INTEGER}
},{
    timestamps:false
});

module.exports= productImages;