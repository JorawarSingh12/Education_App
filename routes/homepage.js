var express = require('express'); 
var Router = express.Router(); 
const { forwardAuthenticated } = require('../config/auth');


Router.get('/',forwardAuthenticated,(req, res) => { 
    res.render('home'); 
}) 
   
   
module.exports = Router; 
