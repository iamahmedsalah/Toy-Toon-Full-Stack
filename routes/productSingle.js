var express = require('express');
var router = express.Router();
const Products = require('../models/allProducts');
const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');

router.get('/:id', async (req ,res )=>{

    
    const token = req.cookies['access-token'];
    const getTokenPayload = (token) => {
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            return decodedToken.id;
        } catch (error) {
            console.error('Invalid JWT token');
            return null;
        }
    };
    const userId = getTokenPayload(token);
    console.log(userId);

    const theUser = await Users.findById(userId)
    console.log(theUser)
    
    productID = req.params.id
    Products.findById(productID).then((doc,err)=>{
    if(doc){

        var product = []
        product.push(doc)
        console.log(product)

        res.render('productSingle' ,{oneProduct:product , TheUser:theUser});
    }else{
        console.log(err)
    }
})

})


module.exports = router;