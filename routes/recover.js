var express = require('express');
var router = express.Router();
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require("nodemailer");
const path = require("path");
const { hbsEmail } = require("handlebars-email");
const { check, validationResult } = require('express-validator');
const e = require('connect-flash');


/* GET forget password  page. */
router.get('/', (req, res) => {
    var msgErr = req.flash('error');
    res.render('forgetPass', { msg: msgErr });
});

router.post('/', async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors)
        return;
    }
    const { inputEmail } = req.body;

    // Check if the email exists in the database
    const user = await Users.findOne({ inputEmail });
    if (!user) {
        // Handle the case when the email does not exist
        return res.send('Email not found');
    }

    // Generate a reset token and set its expiration time
    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetExpiration = Date.now() + 3600000; // 1 hour

    // Update the user's resetToken and resetExpiration fields
    user.resetToken = resetToken;
    user.resetExpiration = resetExpiration;
    await user.save();

    // Send the password reset email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.ContactEmail,
            pass: process.env.ContactPassword
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const context = { UserName: `${user.name} ${user.Sname}`, Reset: `<a href="http://${req.headers.host}/reset-password?token=${resetToken}" target="_blank" style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 30px; border: 1px solid #EE5007; display: inline-block; " > Reset Your Password</a>` };
    const template = path.join("views", "email", "forget-passowrd.hbs");
    const eMailTemplate = hbsEmail("forget-passowrd", context);

    const mailOptions = {
        from: process.env.ContactEmail,
        to: user.email,
        subject: `Recover Password :${user.email}`,
        html: eMailTemplate
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // Handle the email sending error
            console.log(error);
            req.flash('error', 'Error sending email')
            return res.send('Error sending email');
        }
        console.log('Email sent: ' + info.response);
        console.log('Password reset sent to  email');
        Email= user.email
        msgScc = 'Password reset sent to email '
        res.render('forgetPass', { msg: msgScc, email:Email })
    });
    

});




module.exports = router;
