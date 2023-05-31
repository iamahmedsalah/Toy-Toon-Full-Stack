var express = require('express');
var router = express.Router();
const Cart = require('../models/cartModel');
const jwt = require('jsonwebtoken');
const Products = require('../models/allProducts');


/* GET cart page. */
router.get('/', (req, res, next) => {
    res.render('cart');
});




router.get('/:id', async (req, res, next) => {


    // Retrieve the  id from JWT token from the 'access-token' cookie
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
    const cartId = getTokenPayload(token);
    console.log(cartId);


    const productId = req.params.id;
    // console.log(productId);

    try {
        const newProduct = await Products.findOne({ _id: productId });
        const Price = newProduct.price;
        // console.log(newProduct);
        // console.log(Price);

        const cart = await Cart.findById(cartId);
        if (!cart) {
            console.log('add new cart');
            const newCart = new Cart({
                _id: cartId,
                totalQuantity: 1,
                totalPrice: Price,
                selectProduct: [newProduct],
            });
            const savedCart = await newCart.save();
            console.log(savedCart);
            res.render('cart', { cart: savedCart })
        }else{
            var indexOfProduct = -1;
            for (var i = 0; i < cart.selectProduct.length; i++) {
                if(productId === cart.selectProduct[i]._id.toString()){
                    
                    indexOfProduct = i;
                    console.log(indexOfProduct)
                    break
                }
            }
            if(indexOfProduct >= 0){
                console.log('update product' + indexOfProduct)
                cart.selectProduct[indexOfProduct].quantity += 1;
                cart.totalQuantity += 1;
                cart.totalPrice += Price;
                cart.selectProduct[indexOfProduct].price += Price;


                Cart.updateOne({_id: cartId}, {$set: cart }).then((doc,err)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(doc)
                        console.log(cart)
                        res.render('cart', { updateCart : cart });  
                    }
                })
                
            }
            else{
            cart.totalQuantity += 1;
            cart.totalPrice += Price;
            cart.selectProduct.push(newProduct);

            Cart.updateOne({_id: cartId}, {$set: cart }).then((doc,err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(doc)
                    console.log(cart)
                }
            })
            res.render('cart', { updateCart : cart });  
            }



        }
    } catch (error) {
        console.error(error);
    }



});


module.exports = router;






