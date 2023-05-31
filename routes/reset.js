  var express = require('express');
  var router = express.Router();
  const Users = require('../models/userModel');
  const bcrypt = require('bcrypt');
  // const crypto = require('crypto');
  // const nodemailer = require("nodemailer");
  // const path = require("path");
  // const { hbsEmail } = require("handlebars-email");
  // const { check, validationResult } = require('express-validator');


  /* GET reset password  page. */
  router.get('/', (req, res) => {
      // const { token } = req.query;
      res.render('resetPass');
    });
    
    router.post('/', async (req, res) => {
      const { token } = req.query;
      const  { userPassword }  = req.body;
          console.log(token)
          console.log(userPassword)
      
      // Find the user by the reset token 
      const user = await Users.findOne({
        resetToken: token,
        resetExpiration: { $gt: Date.now() }
      });
    
      if (user) {
            // Hash the new password
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(userPassword, salt);

      // Update the user's password and reset token fields
      user.password = hashedPassword;
      user.resetToken = null;
      user.resetExpiration = null;
      await user.save();
    
      // Send a response indicating successful password reset
      console.log('Password reset successful');
      res.render('resetPass', {msg:'Password reset successful'})

      }else{
              // Handle the case when the reset token is invalid or expired
              console.log('Invalid reset token or token expired');
              res.render('resetPass',{err:'Invalid reset link or link expired'})
      }
    

    });




  module.exports = router;
