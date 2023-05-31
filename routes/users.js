var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Users = require('../models/userModel');

/* GET users listing. */
router.get('/', (req, res, next) =>{
  res.send('respond with a resource');
});




module.exports = router;
