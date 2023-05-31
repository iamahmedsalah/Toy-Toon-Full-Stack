const Brands = require('../models/brandsModel');
const dbproducts = require('../config/DB');
const { default: mongoose } = require('mongoose');


// Connectin To Date Base
dbproducts();

// initBrands


const ages = [
    new Brands  ({
    imgPath:'/images/Brands/baibe.png',
    brandName: "Baibe",
    }),
    
    new Brands  ({
    imgPath:'/images/Brands/disnep.webp',
    brandName: "Disnep",
    }),

    new Brands  ({
    imgPath:'/images/Brands/fishers.png',
    brandName: "Fishers",
    }),

    new Brands  ({
    imgPath:'/images/Brands/funko.png',
    brandName: "Funko",
    }),

    new Brands  ({
    imgPath:'/images/Brands/Halfhead-funko-gear-Thumbnail.png',
    brandName: "POP",
    }),

    new Brands  ({
    imgPath:'/images/Brands/hotwheeels.png',
    brandName: "Hot Wheels",
    }),

    new Brands  ({
    imgPath:'/images/Brands/lego.png',
    brandName: "Lego",
    }),

    new Brands  ({
    imgPath:'/images/Brands/lil.png',
    brandName: "LOL",
    }),

    new Brands  ({
    imgPath:'/images/Brands/marvel.png',
    brandName: "Marvel",
    }),

    new Brands  ({
    imgPath:'/images/Brands/nerfgear.png',
    brandName: "Nerf Gear",
    }),

    new Brands  ({
    imgPath:'/images/Brands/pony.png',
    brandName: "Pony",
    }),

];



for (let i = 0; i < ages.length; i++) {

    ages[i].save().then((err, doc)=>{
        if(err){
            console.log(err);
        }else
        {
            console.log(doc)
            done ++
            if(done === ages.length){
                mongoose.disconnect()
            }
        }
    })





}


