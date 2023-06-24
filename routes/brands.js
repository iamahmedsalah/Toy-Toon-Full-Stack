var express = require('express');
var router = express.Router();
const Brands = require('../models/brandsModel');
const Products = require('../models/allProducts');
const Users = require('../models/userModel');
const Cart = require('../models/cartModel');
const jwt = require('jsonwebtoken');

/* GET brand page. */
router.get('/', async (req, res, next) => {
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


    Brands.find().skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('brands',{ items: prodcutGrid , page , theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});

/*  handling  brands  page. */


router.get('/fishers', async (req, res, next) => {
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
    


    Products.find({brand:'Fishers'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleBrand',{ items: prodcutGrid , page ,theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});

router.get('/pop-funko', async (req, res, next) => {
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
    


    Products.find({brand:'POP! Funko'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleBrand',{ items: prodcutGrid , page ,theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/toy-toon', async (req, res, next) => {
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
    


    Products.find({brand:'Toy Toon'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleBrand',{ items: prodcutGrid , page, theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/disney', async (req, res, next) => {
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
    


    Products.find({brand:'Disney'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleBrand',{ items: prodcutGrid , page, theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});

router.get('/pony', async (req, res, next) => {
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
    


    Products.find({brand:'Pony'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleBrand',{ items: prodcutGrid , page , theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});

router.get('/marvel', async (req, res, next) => {
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
    


    Products.find({brand:'Marvel'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleBrand',{ items: prodcutGrid , page , theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});

router.get('/lego', async (req, res, next) => {
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
    


    Products.find({brand:'Lego'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleBrand',{ items: prodcutGrid , page , theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/baibe', async (req, res, next) => {
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
    


    Products.find({brand:'Barbie'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleBrand',{ items: prodcutGrid , page , theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});


module.exports = router;



