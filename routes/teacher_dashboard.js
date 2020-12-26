var express = require('express'); 
const { ensureAuthenticated } = require('../config/auth');
var router = express.Router(); 
   
router.get('/:id',ensureAuthenticated,(req, res, next) => { 
    res.render('teacher_dashboard',{
        user: req.user,
    })  
}) 

   
module.exports = Router; 
