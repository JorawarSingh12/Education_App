var express = require('express'); 
const { ensureAuthenticated } = require('../config/auth');
var Router = express.Router(); 
   
Router.get('/',ensureAuthenticated,(req, res, next) => { 
    console.log(req.user)
    if(req.user.type === 'student')
        res.render('student_dashboard',{student:req.user});
    else if(req.user.type === 'teacher')
         res.render('teacher_dashboard',{teacher:req.user});
         else if(req.user.type === 'institution')
         res.render('institution_dashboard',{institution:req.user});
    else 
        res.render('error_page')
}) 
module.exports = Router; 
