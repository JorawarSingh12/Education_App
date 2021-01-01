const express = require('express'); 
var router = express.Router(); 
const { forwardAuthenticated } = require('../config/auth');
const Class = require('../models/class');


router.get("/", (req, res) => { 
    console.log(req.user)
    res.render('new_subject',{teacher: req.user})    

}) 

router.post('/', function (req, res, next) {
    // console.log(req.body)
    Subject.create(req.body)
    .then(function (user) {
        req.flash(
            'success_msg',
            'Subject Successfully Added and Students of the class will be notified shortly'
          );
        res.redirect("/new_subject");
    })
})
module.exports = router; 
