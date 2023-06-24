var express = require('express');
var router = express.Router();
const Products = require('../models/allProducts');
const Users = require('../models/userModel');
const Cart = require('../models/cartModel');
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

    const TheUser = await Users.findById(userId)
    const cart = await Cart.findById(userId)
    console.log(TheUser)
    console.log(cart)
    
    productID = req.params.id
    Products.findById(productID).then((doc,err)=>{
    if(doc){

        var product = []
        product.push(doc)
        console.log(product)

        res.render('productSingle' ,{oneProduct:product , theUser:TheUser , userCart:cart});
    }else{
        console.log(err)
    }
})

})


module.exports = router;