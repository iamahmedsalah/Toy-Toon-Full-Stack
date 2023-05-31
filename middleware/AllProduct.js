const Products = require('../models/allProducts');
const dbproducts = require('../config/DB');
const { default: mongoose } = require('mongoose');


// Connectin To Date Base
dbproducts();



const prodcuts = [


    new Products ({
    productImg: "/images/Products/0-2-3.jpeg",
    productName: "Yalli Fish",
    info: {
        productWorld: " Bath Toy Sponge",
        more:"test",
    },
    price: 550,
    brand:"Pony",
    brandImg:"/images/Brands/pony.png",
    ages:"0-4",
    chara:"",
    }),

    // new Products ({
    //     productImg: "/images/Products/5-6-3.jpeg",
    //     productName: " Dress Barbie",
    //     info: {
    //         productWorld: "Plastic Toy",
    //         more:"test",
    //     },
    //     price: 550,
    //     brand:"Barbie",
    //     brandImg:"/images/Brands/barbie.png",
    //     ages:"5-7",
    //     chara:"Barbie",
    //     }),

    // new Products ({
    // productImg: "/images/Products/darth-vader.png",
    // productName: "Darth Vader ",
    // info: {
    //     productWorld: " Star War",
    //     more:"test",
    // },
    // price: 550,
    // brand:"POP! Funko",
    // brandImg:"/images/Brands/funko.png",
    // ages:"8-10",
    // chara:"Death Vider",
    // }),

    // new Products ({
    // productImg: "/images/Products/Death-Vider.png",
    // productName: "Darth Vider 2",
    // info: {
    //     productWorld: " Star War",
    //     more:"test",
    // },
    // price: 550,
    // brand:"POP! Funko",
    // brandImg:"/images/Brands/funko.png",
    // ages:"8-10",
    // chara:"Death Vider",
    // }),


    // new Products ({
    // productImg: "/images/Products/prime-2.png",
    // productName: "Optimus Prime",
    // info: {
    //     productWorld: " Transformers",
    //     more:"test",
    // },
    // price: 550,
    // brand:"POP! Funko",
    // brandImg:"/images/Brands/funko.png",
    // ages:"+12",
    // chara:"Transformers",
    // }),
    
    // new Products ({
    // productImg: "/images/Products/supergirl-54.png",
    // productName: "Super Girl",
    // info: {
    //     productWorld: "DC World",
    //     more:"test",
    // },
    // price: 550,
    // brand:"POP! Funko",
    // brandImg:"/images/Brands/funko.png",
    // ages:"+12",
    // chara:"Super Girl",
    // }),



    // new Products ({
    // productImg: "/images/Products/groot-C.png",
    // productName: "Groot ",
    // info: {
    //     productWorld: " MSU World",
    //     more:"test",
    // },
    // price: 550,
    // brand:"POP! Funko",
    // brandImg:"/images/Brands/funko.png",
    // ages:"8-10",
    // chara:"Groot",
    // }),


    //     new Products ({
    // productImg: "/images/Products/black-panther-4.png",
    // productName: "Black Panther ",
    // info: {
    //     productWorld: " MSU World",
    //     more:"test",
    // },
    // price: 550,
    // brand:"Marvel",
    // brandImg:"/images/Brands/marvel.png",
    // ages:"8-10",
    // chara:"Groot",
    // }),


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


