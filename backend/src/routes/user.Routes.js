const express = require('express');
const router = express.Router();

//models
const user = require('../models/user')

//query
searchUser = require('../querys/User/searchWithEmail')


//perfil
router.post('/emailverification', async (req, res) => {
    let { email } = req.body
    let userData = await searchUser(email);  
    res.json({ email: userData.email, password: userData.password})
});

router.post('/createNewUser', async (req, res)=>{
    let { email, password } = req.body;
    let emailVerification = await searchUser( email )

    
    if (emailVerification != null) { 
    
    res.json({status: 'wrong email'})

    } else {
    
    await user.create({
        email: email, password: password
    },{
        fields: ['email', 'password']
    })
    res.json({status: 'Saved'})}
});




module.exports = router;