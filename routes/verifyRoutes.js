var express = require('express');
var router = express.Router();
const Users = require('../models/userModel'); 




router.get('/', async (req, res) => {
    
    try{
        const token = req.query.token
        console.log(token)
        const user = await  Users.findOne({emailToken: token })
        if(user){
            user.emailToken = null
            user.isVeified = true
            await user.save()
            res.redirect('/login')
        }else{
            res.send('email is verfiy')
            console.log(' email is verfiy')
        }

    }
    catch(err){
        console.log(err)
    }

});






module.exports = router;


