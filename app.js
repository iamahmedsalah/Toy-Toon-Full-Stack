const createError = require('http-errors');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 7000;
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');
const dbConnection = require('./config/DB');
const dotenv = require('dotenv');
dotenv.config({path:'config.env'});



// Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/loginRoutes');
const registerRouter = require('./routes/registerRoutes');
const vertifyRouter = require('./routes/verifyRoutes');
const shopRouter = require('./routes/shop');
const singleProductRouter = require('./routes/productSingle');
const cartRouter = require('./routes/cart');
const Brands = require('./routes/brands');
const Characters = require('./routes/characters');
// const singleCharacter = require('./routes/singleCharacter');
const forgetPassword = require('./routes/recover');
const resetPassword  = require('./routes/reset');
const { default: mongoose } = require('mongoose');


// Express 
const app = express();

// Connectin To Date Base
  dbConnection();
  console.log(`server is running on port : ${port} `)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs' );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'Toy Toon',
  saveUninitialized: 'false',
  resave:'false'
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));



// Mount Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shop', shopRouter);
app.use('/productSingle', singleProductRouter);
app.use('/cart', cartRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/verifyUser', vertifyRouter);  
app.use('/brands', Brands );
app.use('/characters', Characters);
// app.use('/single-character', singleCharacter );
app.use('/foregt-password', forgetPassword );
app.use('/reset-password', resetPassword )

// Mount Single Rontes
app.get('/login/logout', (req,res)=>{
  res.cookie('access-token', '', {maxAge: 1})
  res.redirect('/')
})


app.get('/emailUser', (req, res) => {
  
  res.render('emailUser');
});


app.get('/Home', (req, res) => {
  res.redirect('https://toy-toon.onrender.com//#section_1');
});

app.get('/Offer', (req, res) => {
  res.redirect('https://toy-toon.onrender.com//#section_2');
});

app.get('/ShopByAge', (req, res) => {
  res.redirect('/https://toy-toon.onrender.com/#section_3');
});

app.get('/ShopBrandCharacter', (req, res) => {
  res.redirect('https://toy-toon.onrender.com/#section_4');
});

app.get('/About', (req, res) => {
  res.redirect('https://toy-toon.onrender.com/#section_5');
});

app.get('/ContactUs', (req, res) => {
  res.redirect('https://toy-toon.onrender.com//#section_6');
});


app.get('/verifyUser', (req, res) => {
  res.render('verifyUser');
});


app.get('/user-profile', (req, res) => {
  res.render('myAcounnt');
});











// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
