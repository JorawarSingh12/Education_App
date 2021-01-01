const express = require('express'); 
var router = express.Router(); 
const passport = require('passport');
const { forwardAuthenticated } = require('../config/auth');



router.get("/:type",forwardAuthenticated, (req, res,next) => { 
    // console.log(req.params.type)
    const type = req.params.type;
    if(type === 'student' || type === 'teacher' || type === 'institution')
        res.render('login',{type:req.params.type}) 
    else{
        res.redirect('/')
    }
}) 

router.post("/",  (req, res, next) => { 
    // console.log(req.body)
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash: true
      })(req, res, next);
}) 
      
module.exports = router; 
