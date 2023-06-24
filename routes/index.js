var express = require('express');
const { loginRequired } = require('../config/jwt')
const Users = require('../models/userModel');
const Cart = require('../models/cartModel');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const { hbsEmail} = require("handlebars-email");
const path = require("path");
// const template = path.join("views", "email", "template.hbs");
// const context = { message:`` };
// const eMailTemplate = hbsEmail("template", context);



// dotenv
const dotenv = require('dotenv');
const { compile } = require('morgan');
dotenv.config({path:'config.env'});
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next)=> {


  
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

      res.render('index',  { title: 'Toy Toon' , theUser:TheUser , userCart:cart });
});


  // Contact Us
router.post('/contact', (req, res, next)=>{
  const context = { message:`${req.body.contactMessage}`, guest:`${req.body.contactName}`  };
  const template = path.join("views", "email", "template.hbs");
  const eMailTemplate = hbsEmail("template", context);
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ContactEmail,
        pass: process.env.ContactPassword
    }
})


  const mailOptions = {
    from: req.body.contactEmail,
    to: process.env.ContactEmail,
    subject:` Message From ${req.body.contactEmail}: Company: ${req.body.contactCompany}`,
    text: req.body.contactMessage,
    html: eMailTemplate,
    replyTo: process.env.ContactEmail
  }


  transporter.sendMail(mailOptions, (err, info)=> {
    if(err){
        console.log(err);
        res.send('error');
    }else{
        console.log('Email Sent' , info.response );
        res.send('success')
    }
})

})


//  End Contact Us





module.exports = router;
