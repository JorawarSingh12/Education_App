var express = require('express'); 
var Router = express.Router(); 
   
Router.route('/') 
.get((req, res) => { 
    res.render('home'); 
}) 
   
   
module.exports = Router; 
