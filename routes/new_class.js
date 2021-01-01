const express = require('express'); 
var router = express.Router(); 
const { forwardAuthenticated } = require('../config/auth');
const Class = require('../models/class');


router.get("/", (req, res) => { 
    console.log(req.user)
    res.render('new_class',{institution: req.user})    

}) 

router.post('/', function (req, res, next) {
    console.log(req.body)
    Class.create(req.body)
    .then(function (user) {
        req.flash(
            'success_msg',
            'Class Successfully created and students will be notified shortly'
          );
        res.redirect("/new_class");
    })
})
module.exports = router; 
