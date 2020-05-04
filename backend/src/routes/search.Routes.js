const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const Op = sequelize.Op

//models
const product = require('../models/products')
const productimages = require('../models/productImages')


router.post('/', async (req, res)=>{
    const body = JSON.parse(JSON.stringify(req.body))
    let { value } = body
    let result = await product.findAndCountAll({
        where: { 
            name: {
                [Op.like]: '%'+value+'%'
            }},
            limit: 4
    })
    res.json({results: result.rows})
})


router.get('/', async (req, res)=>{
    let products = await product.findAll({
        include: [{model: productimages}]})
    res.json({ results: products })    
})

router.get('/:name', async (req, res)=>{
    let { name } = req.params
    let result = await product.findAndCountAll({
        where: { 
            name: {
                [Op.like]: '%'+ name +'%'
            }},
            limit: 4,
            include: [{model: productimages}]
    })
    res.json({results: result.rows })
})

module.exports = router;