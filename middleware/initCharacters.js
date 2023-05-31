const Characters = require('../models/characterModel');
const dbproducts = require('../config/DB');
const { default: mongoose } = require('mongoose');


// Connectin To Date Base
dbproducts();

// initCharacters


const ages = [
    new Characters ({
    imgPath:'/images/Character/barbie.png',
    brandName: "Barbie",
    }),
    
    new Characters  ({
    imgPath:'/images/Character/batman.png',
    brandName: "Batman",
    }),

    new Characters  ({
    imgPath:'/images/Character/disney.png',
    brandName: "Chindrala",
    }),

    new Characters  ({
    imgPath:'/images/Character/Harrrypotter.png',
    brandName: "Harry Potter",
    }),

    new Characters ({
    imgPath:'/images/Character/mario.png',
    brandName: "Mario",
    }),

    new Characters ({
    imgPath:'/images/Character/marvel.png',
    brandName: "Thor",
    }),

    new Characters ({
    imgPath:'/images/Character/paw.png',
    brandName: "Pow",
    }),

    new Characters  ({
    imgPath:'/images/Character/pony.png',
    brandName: "Unicorn",
    }),

    new Characters ({
    imgPath:'/images/Character/starwar.png',
    brandName: "Star War",
    }),

    new Characters  ({
    imgPath:'/images/Character/tramsform.png',
    brandName: "Tramsformr",
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


