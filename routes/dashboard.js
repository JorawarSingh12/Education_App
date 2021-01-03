var express = require('express'); 
const { ensureAuthenticated } = require('../config/auth');
var Router = express.Router(); 
   
Router.get('/',ensureAuthenticated,(req, res, next) => { 
    // console.log(req.user)
    if(req.user.type === 'student')
        res.render('dashboard/student_dashboard',{user:req.user});
    else if(req.user.type === 'teacher')
         res.render('dashboard/teacher_dashboard',{user:req.user});
         else if(req.user.type === 'institution')
         res.render('dashboard/institution_dashboard',{user:req.user});
    else 
        res.render('error_page')
}) 
module.exports = Router; 
