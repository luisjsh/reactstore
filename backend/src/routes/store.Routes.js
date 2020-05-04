const express = require('express');
const router = express.Router();


router.post('/add-item', async (req,res) => {
    res.json({status: 'Api works'})
})

    module.exports=router;