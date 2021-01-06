var express = require('express'); 
const { ensureAuthenticated } = require('../config/auth');
const Institution = require('../models/institution');
var Router = express.Router(); 
   
Router.get('/',ensureAuthenticated,(req, res, next) => { 
    // console.log(req.user)
    if(req.user.type === 'student')
        res.render('dashboard/student_dashboard',{user:req.user});
    else if(req.user.type === 'teacher')
         res.render('dashboard/teacher_dashboard',{user:req.user});
         else if(req.user.type === 'institution'){
            Institution.findById(req.user._id,(err,institution)=>{
                // console.log(institution)
                res.render('dashboard/institution_dashboard',{user:req.user,institution: institution});
            })    
         }
         
    else 
        res.render('error_page')
}) 
module.exports = Router; 
