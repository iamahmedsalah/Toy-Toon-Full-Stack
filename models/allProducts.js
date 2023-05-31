const mongoose = require('mongoose');

// 1- Create Schema

const productsSchema = new mongoose.Schema({
    productImg: {
        type: String,
        required:true,
    },
    productName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 32,
    },
    info: {
        type: {
            productWorld:String,
            more:String
        },
        required: true,
    },
    price: {
        type: Number,
        required:true,
    },
    brand:{
        type:String,
        required: true,
    },
    brandImg:{
        type:String,
        unique: true,
        required: true,
    },
    ages:{
        type:String,
        required: true,
    },
    chara:{
        type:String,
        
    },
    brandUrl:{
        type:String,
    },
    quantity:{
        type:Number
    },
    
}, { timestamps: true });


// 2- Create Model

module.exports = mongoose.model('AllProducts', productsSchema);