var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const Products = require('../models/allProducts');
const Users = require('../models/userModel');
const Cart = require('../models/cartModel');
const { cookie } = require('express-validator');


/* GET shop page. */
router.get('/'  ,  async (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5

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

    Products.find().skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('shop',{ items: prodcutGrid , page , theUser:TheUser , userCart:cart })
    }).catch((err)=>{
        console.log(err)
    })

});

router.get('/ages-0-4', async (req ,res) =>{

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5

    
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

    

    Products.find({ages:'0-4'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('byAgeA',{ items: prodcutGrid , page ,theUser:TheUser , userCart:cart })
    }).catch((err)=>{
        console.log(err)
    })

})


router.get('/ages-5-7', async (req ,res) =>{

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5

    
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


    Products.find({ages:'5-7'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('byAgeB',{ items: prodcutGrid , page, theUser:TheUser , userCart:cart })
    }).catch((err)=>{
        console.log(err)
    })

})


router.get('/ages-8-10', async (req ,res) =>{

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5

    
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


    Products.find({ages:'8-10'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('byAgeC',{ items: prodcutGrid , page ,theUser:TheUser , userCart:cart })
    }).catch((err)=>{
        console.log(err)
    })
})

router.get('/ages-12', async (req ,res) =>{

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5

    
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


    Products.find({ages:'+12'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('byAgeD',{ items: prodcutGrid , page , theUser:TheUser , userCart:cart})
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router;



