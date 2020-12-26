const express = require('express'); 
var router = express.Router(); 
const passport = require('passport');
const { forwardAuthenticated } = require('../config/auth');



router.get("/",forwardAuthenticated, (req, res,next) => { 
    res.render('login') 
    
}) 

router.post("/",  (req, res, next) => { 
    
    passport.authenticate('local', {
        successRedirect: '/student_dashboard',
        failureRedirect: '/login',
        failureFlash: true
      })(req, res, next);
}) 
      
module.exports = router; 
