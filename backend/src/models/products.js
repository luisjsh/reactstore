const Sequelize = require('sequelize');
const sequelize = require('../database')

const productImages = require('./productImages')

const products = sequelize.define('products',{
    id: {type:Sequelize.INTEGER, primaryKey: true},
    name: {type: Sequelize.TEXT},
    sex: {type: Sequelize.TEXT},
    price: {type: Sequelize.INTEGER},
    stock: {type: Sequelize.TEXT},
    categories: {type: Sequelize.TEXT},
    userid: {type: Sequelize.INTEGER}
},{
    timestamps:false
});

productImages.belongsTo(products, { foreignKey: "productsid", sourceKey: "id" });
products.hasMany(productImages, { foreignKey: "productsid", sourceKey: "id" });
    
module.exports= products;