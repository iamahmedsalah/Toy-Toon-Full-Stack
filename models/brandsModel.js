const mongoose = require('mongoose');

// 1- Create Schema

const brandsSchema = new mongoose.Schema({
    imgPath: {
        type: String,
        required:true,
    },
    brandName: {
        type: String,
        required: true,
        unique: true,
    },
    brandUrl:{
        typt:String,
    }
}, { timestamps: true });


// 2- Create Model

module.exports = mongoose.model('Brands', brandsSchema);