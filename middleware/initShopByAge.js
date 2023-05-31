const ByAgeDSchema = require('../models/byAgeDModel');
const dbproducts = require('../config/DB');
const { default: mongoose } = require('mongoose');


// Connectin To Date Base
dbproducts();

// initShopByAge


const prodcuts = [


    new ByAgeDSchema  ({
    imgPath: "/images/Products/2_fpx.jpeg",
    productName: "ٌRemote Car ",
    info: {
        License: " Toy Toon ",
        productType: "Electric Toy",
        more:"12+"
    },
    price: 550,
    }),

    new ByAgeDSchema ({
    imgPath: "/images/Products/3_fpx.jpeg",
    productName: "Yo Gi Yo",
    info: {
        License: " Toy R'us",
        productType: "Card Game",
        more:"12+"
    },
    price: 550,
    }),

    new ByAgeDSchema ({
    imgPath: "/images/Products/3_fpx.jpeg",
    productName: "Mononplay ",
    info: {
        License: " Toy R'us",
        productType: "Card Borad",
        more:"12+"
    },
    price: 550,
    }),

    new ByAgeDSchema ({
    imgPath: "/images/Products/6_fpx.jpeg",
    productName: "x-Shot Gun",
    info: {
        License: " Toy R'us",
        productType: "Plastic Toy",
        more:"12+"
    },
    price: 550,
    }),

    new ByAgeDSchema ({
    imgPath: "/images/Products/20096912_fpx.jpeg",
    productName: "x-Shot 2 Gun",
    info: {
        License: " Toy Toon",
        productType: " Plastic Toy",
        more:"12+"
    },
    price: 550,
    }),

    new ByAgeDSchema (   {
    imgPath: "/images/Products/22819684_fpx.jpeg",
    productName: "Bing Bong",
    info: {
        License: "Toy Toon",
        productType: " Plastic Toy",
        more:"12+"
    },
    price: 550,
    }),

    new ByAgeDSchema (   {
        imgPath: "/images/Products/23971708_fpx.jpeg",
        productName: "Motorcycle",
        info: {
            License: "Toy Toon",
            productType: "Plastic Toy",
            more:"12+"
        },
        price: 550,
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


