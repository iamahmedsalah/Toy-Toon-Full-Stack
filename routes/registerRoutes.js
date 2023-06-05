var express = require('express');
var router = express.Router();
const Users = require('../models/userModel'); 
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require("nodemailer");
const path = require("path");
const { hbsEmail} = require("handlebars-email");
const {check, validationResult} = require('express-validator')






// /* GET register page. */
router.get('/', (req, res, next) => {
    var msgErr= req.flash('error');
    console.log(msgErr)
    res.render('register',{msg: msgErr} );
});



router.post('/',async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        return;
    }

    let transporter = nodemailer.createTransport({
        
        service: 'gmail',
        auth: {
            user: process.env.ContactEmail,
            pass: process.env.ContactPassword
        },
        tls:{
            rejectUnauthorized: false
        }
    })


    const{registerFname,registerSurname,registerEmail,registerPhone,TicketForm,registerPassword} = req.body;
    try{

        console.log(req.body)
        const user = new Users({
            name:registerFname,
            Sname:registerSurname,
            email:registerEmail,
            password:registerPassword,
            phone:registerPhone,
            gender:TicketForm,
            emailToken:crypto.randomBytes(64).toString('hex'),
            isVeified: false
        })
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password, salt)
        user.password = hashPassword
        const newUser = await user.save()
        //send verfication mail to user
        const context = { UserName:`${user.name} ${user.Sname}`, verfied:`<a href="http://${req.headers.host}/verifyUser?token=${user.emailToken}" target="_blank" style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 30px; border: 1px solid #EE5007; display: inline-block; " > Verfiy</a>` };
        const template = path.join("views", "email", "confirm.hbs");
        const eMailTemplate = hbsEmail("confirm", context);
        
        const mailOptions = {
            from: process.env.ContactEmail,
            to: user.email,
            subject:` Email Verification:${registerEmail}`,
            html:eMailTemplate
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
        res.render('emailUser',{ registerToCon:user.email})
    }
//     catch{ res.render('emailUser',{ registerToCon:user.email})
// //             Users.findOne({email:req.body.registerEmail}).then((err)=>{
// //             if(err){
// //                 console.log('This email already exist');
// //                 req.flash('error','This email already exist')
// //                 res.redirect('register')
// //             }
// //         })
//     }
})











module.exports = router;
