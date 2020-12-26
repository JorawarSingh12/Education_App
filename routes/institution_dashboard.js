var express = require('express'); 
const { ensureAuthenticated } = require('../config/auth');
var router = express.Router(); 
   
router.get('/',ensureAuthenticated,(req, res, next) => { 
   const teacher = {
       name: 'Jorawar',
       
   }
    res.render('institution_dashboard',{
        teacher: teacher,
    })  
}) 

   
module.exports = Router; 
