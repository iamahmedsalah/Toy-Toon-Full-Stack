const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const Users = require('../models/userModel');


const loginRequired = (req, res, next) => {
    const token = req.cookies['access-token'];

    try {
        if (token) {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            if (decodedToken) {
                req.user = decodedToken.id;
                next();
            } else {
                console.log('Invalid token');
                res.status(401).json({ message: 'Invalid token' });
            }
        } else {
            console.log('Token not found');
            res.status(401).json({ message: 'Token not found' });
        }
    } catch (error) {
        console.log('Error verifying token:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const verifyEmail = async (req, res, next) => {
    try {
        const user = await Users.findOne({ email: req.body.userEmail });
        console.log(user);
        if (user && user.isVeified) {
            next();
        } else {
            console.log('User does not exist or email is not verified');
            req.flash('error', 'Please verify your email first');
            res.redirect('/login');
        }
    } catch (err) {
        console.log(err);
    }
};
module.exports = { loginRequired, verifyEmail}