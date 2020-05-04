const Sequelize = require('sequelize');
const sequelize = require('../database')

const user = sequelize.define('users', {
    id: {type: Sequelize.INTEGER, primaryKey:true},
    email: {type: Sequelize.TEXT},
    password: {type: Sequelize.INTEGER}
},{
    timestamps: false
});

module.exports = user;


