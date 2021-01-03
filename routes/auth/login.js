const express = require('express'); 
var router = express.Router(); 
const passport = require('passport');
const { forwardAuthenticated } = require('../../config/auth');



router.get("/",forwardAuthenticated, (req, res,next) => { 
        res.render('auth/login') 
}) 

router.post("/",  (req, res, next) => { 
 
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/register',
        failureFlash: true
      })(req, res, next);
}) 
      
module.exports = router; 
