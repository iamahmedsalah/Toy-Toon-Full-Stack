var express = require('express');
var router = express.Router();
const Character = require('../models/characterModel');
const Products = require('../models/allProducts');
const Users = require('../models/userModel');
const Cart = require('../models/cartModel');
const jwt = require('jsonwebtoken');


/* GET characters page. */
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
    

    Character.find().skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('Characters',{ items: prodcutGrid , page , theUser:TheUser ,userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});

router.get('/batman', async (req, res, next) => {
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
    

    Products.find({chara:'Bat Man'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page , theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});

router.get('/spiderman', async (req, res, next) => {
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
    

    Products.find({chara:'Spider Man'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page , theUser:TheUser  , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/hxh', async (req, res, next) => {
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
    

    Products.find({chara:'HxH'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page , theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});

router.get('/flash', async (req, res, next) => {
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
    
    Products.find({chara:'Flash'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page , theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});


// router.get('/barbie', async (req, res, next) => {
//     const page = req.query.page * 1 || 1;
//     const limit = req.query.limit *1 || 8;
//     const skip = (page -1) * limit; // skip => (2-1) *5 =5

//     const token = req.cookies['access-token'];
//     const getTokenPayload = (token) => {
//         try {
//             const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//             return decodedToken.id;
//         } catch (error) {
//             console.error('Invalid JWT token');
//             return null;
//         }
//     };
//     const userId = getTokenPayload(token);
//     console.log(userId);

//     const theUser = await Users.findById(userId)
//     console.log(theUser)

//     Products.find({chara:'Barbie'}).skip(skip).limit(limit).then((doc) => {
//         // console.log(doc)
//         var prodcutGrid = [];
//         var colGrid = 4;
//         for (let i = 0; i < doc.length; i+=colGrid) {
//             prodcutGrid.push(doc.slice(i, i + colGrid))
//         }
//         console.log(prodcutGrid)
//         res.render('singleCharacter',{ items: prodcutGrid , page, TheUser:theUser })
//     }).catch((err)=>{
//         console.log(err)
//     })

// });


router.get('/barbie', async (req, res, next) => {
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
    
    Products.find({chara:'Barbie'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page , theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/transformers', async (req, res, next) => {
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

    Products.find({chara:'Transformers'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page, theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/darthvider', async (req, res, next) => {
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
    

    Products.find({chara:'Darth Vader'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page , theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/supergirl', async (req, res, next) => {
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
    

    Products.find({chara:'Super Girl'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page, theUser:TheUser , userCart:cart  })
    }).catch((err)=>{
        console.log(err)
    })

});


module.exports = router;



