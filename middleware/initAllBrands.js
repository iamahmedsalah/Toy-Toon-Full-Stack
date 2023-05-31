const Products = require('../models/allBrandsModel');
const dbproducts = require('../config/DB');
const { default: mongoose } = require('mongoose');


// Connectin To Date Base
dbproducts();

// initProducts


const prodcuts = [


    new Products ({
    imgPath: "./images/Products/meruem-1.png",
    productName: "Meruem-",
    info: {
        License: " POP! Fumnko",
        productType: "Anime World",
    },
    price: 550,
    brand:'645fb65d0573e4abb4af305a',
    }),

    new Products({
    imgPath: "./images/Products/prime-2.png",
    productName: " Optimus Prime ",
    info: {
        License: " POP! Fumnko",
        productType: " Transformer ",
    },
    price: 550,
    brand:'645fb65d0573e4abb4af305a',
    }),

    new Products({
    imgPath: "./images/Products/reaper-2.png",
    productName: "Reaper ",
    info: {
        License: " POP! Fumnko",
        productType: " Anime World",
    },
    price: 550,
    brand:'645fb65d0573e4abb4af305a'
    }),

    new Products({
    imgPath: "./images/Products/spider-gwen-2.png",
    productName: "Spider Gwen",
    info: {
        License: " POP! Fumnko",
        productType: " MSU World",
    },
    price: 550,
    brand:'645fb65d0573e4abb4af305a',
    }),

    new Products({
    imgPath: "./images/Products/spider-miles-2.png",
    productName: "Spider Miles ",
    info: {
        License: " POP! Fumnko",
        productType: " MSU World",
    },
    price: 550,
    brand:'645fb65d0573e4abb4af305a',
    }),

    new Products(   {
    imgPath: "./images/Products/black-panther-4.png",
    productName: "Black Panther ",
    info: {
        License: " POP! Fumnko",
        productType: " MSU World",
    },
    price: 550,
    brand:'645fb65d0573e4abb4af305a',
    }),



];



for (let i = 0; i < prodcuts.length; i++) {

    prodcuts[i].save().then((err, doc)=>{
        if(err){
            console.log(err);
        }else
        {
            console.log(doc)
            done ++
            if(done === prodcuts.length){
                mongoose.disconnect()
            }
        }
    })





}


