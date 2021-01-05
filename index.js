const express = require('express')
const app = express(); 
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const flash = require('connect-flash')
const session = require('express-session');
const passport = require('passport');
var path = require('path');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb://localhost/education',{ useUnifiedTopology: true,useNewUrlParser:true });
mongoose.Promise = global.Promise;
require('./config/passport')(passport)

app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", 'ejs')
app.use(express.static('public'))

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// all routes are mentioned here
app.use("/",require('./routes/homepage'))
app.use("/dashboard",require('./routes/dashboard'))

// authorization routes
app.use("/login",require('./routes/auth/login'))
app.use("/register",require('./routes/auth/register'))
app.use('/profile', require('./routes/auth/profile'));
app.use('/logout', require('./routes/auth/logout'));



app.use('/new_class', require('./routes/new_class'));
app.use('/new_subject', require('./routes/new_subject'));
app.use('/all_api', require('./routes/all_api'));
app.use('/new_assignment',require('./routes/new_assignment'));
app.use('/new_test',require('./routes/new_test'));
app.use('/class_analysis',require('./routes/analysis'))

// error page

app.use(function(err, req, res, next){
  console.log(err); // to see properties of message in our console
  res.status(422).render('error_page',{err: err.message});
});


app.listen(5000, () => {
    console.log(`Example app listening at http://localhost:5000`)
  });