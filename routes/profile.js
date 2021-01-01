const express = require('express'); 
var router = express.Router(); 
const passport = require('passport');
const {  ensureAuthenticated } = require('../config/auth');



router.get("/",ensureAuthenticated, (req, res,next) => { 
    
    res.render('profile',{type: req.user.type})
}) 

      
module.exports = router; 
