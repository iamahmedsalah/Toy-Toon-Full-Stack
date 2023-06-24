const express = require('express');
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const router = express.Router();
const {verifyEmail  } = require('../config/jwt')
const {check, validationResult} = require('express-validator')  
const Cart = require('../models/cartModel');

/* GET login page. */
router.get('/' ,(req, res) => {
    var msgErr= req.flash('error');
    res.render('login', {msg: msgErr} );
});


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}


router.post('/', verifyEmail ,async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        return;
    }
    try {   
        const userEmail = req.body.userEmail;
        const password = req.body.userPassword;
        
        const findUser = await Users.findOne({ email: userEmail })
        if (findUser) {
            const match = await bcrypt.compare(password, findUser.password);
            if (match) {
                // create tokem
                
                const token = createToken(findUser.id)
                console.log(token)
                console.log(findUser)

                const cart = await Cart.findById(findUser.id);
                // store token 
                res.cookie('access-token' , token )
                res.render('index', {theUser:findUser , userCart:cart})


                router.get('/my-cart', async (req,res)=>{
                    const cart = await Cart.findById(findUser.id);
                    if(cart){
                        console.log(cart)
                    }
    
                    res.render('cart', {updateCart: cart}  );
                })

                router.get('/user-profile', (req, res) => {
                    var msgErr= req.flash('error');

                    res.render('myAcounnt', {msg: msgErr , theUser:findUser ,userCart:cart}  );
                });

                router.post('/user-profile', async (req, res) => {
                    
                    try {
                        const userId = findUser.id; // Assuming the user ID is provided in the request params
                        console.log(userId)
                        const { firstName, lastName , Phone , Address } = req.body; // Assuming the updated data is sent in the request body
                        console.log(firstName)
                        const updatedUser = await Users.findOneAndUpdate({ _id: userId }, {firstName, lastName , Phone , Address }, { new: true });
                        if (updatedUser) {
                          // User updated successfully
                        updatedUser.name = firstName
                        updatedUser.Sname = lastName
                        updatedUser.phone = Phone
                        updatedUser.address = Address
                        await updatedUser.save();
                        console.log(updatedUser)
                        res.render('myAcounnt' ,{theUser:updatedUser , userCart:cart})
                        } else {
                          // User not found
                        res.status(404).json({ message: 'User not found' });
                        }
                    } catch (error) {
                        console.error('Error updating user:', error);
                        res.sendStatus(500);
                    }
                });
            }
            else {
                req.flash('error','Invailad Passwword')
                console.log('Invailad Passwword');
                res.redirect('login')
            }
        }
        else {
            req.flash('error','User not registered')
            console.log('User not registered')
            res.redirect('login')
        }
    }
    catch(err) {
        console.log(err)
    }

    
    






})





module.exports = router;
