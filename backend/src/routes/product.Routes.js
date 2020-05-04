    const express = require('express');
    const router = express.Router();

    //models
    const product = require('../models/products')
    const productImages = require('../models/productImages')
    const user = require('../models/user')

    //query
    searchUserWithEmail = require('../querys/User/searchWithEmail')
    saveImage = require('../querys/image/saveImage')


    // product information

    router.get('/:name', async (req,res)=>{
        let { name } = req.params;
        
    //-----------Here we search the information of the product ----
        let productResult = await product.findOne({
            where:{
                name
            },
            include: [{model: productImages}]
        })
    //----------------------------------------------------------------

   //-------------the information of the user that sells the product---
        let userResult = await user.findOne({
            where:{
                id:productResult.userid
            }
        })
    //------------------------------------------------------------------

        res.json({productResult, userResult})
    })


    //save product
    
    router.post('/addproduct', async (req,res)=>{
        const body = JSON.parse(JSON.stringify(req.body))

        let { sex, categories, name, price, stock, email } = body;
         
        let { id } = await searchUserWithEmail(email)
        
        await product.create({
            name, sex, price, stock, categories, userid:id
        },{
            fields: [ 'name', 'sex', 'price', 'stock', 'categories', 'userid' ]
        })
        let products = await product.findOne({
            where: {name, sex, price, stock, categories}
        })

        let i = 0;
        
        for (i=0; i<req.files.length; i++){
        await saveImage(req.files[i], products)
        }

        res.json({ status: 'saved'})
    })

    
    module.exports=router;