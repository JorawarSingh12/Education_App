var express = require('express'); 
const { ensureAuthenticated } = require('../config/auth');
var Router = express.Router(); 
   
Router.get('/',ensureAuthenticated,(req, res, next) => { 
//    console.log(req.user)
    res.render('student_dashboard',{student:req.user});
     
}) 
module.exports = Router; 
