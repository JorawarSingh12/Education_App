const express = require('express'); 
var router = express.Router(); 
const { forwardAuthenticated } = require('../config/auth');
const bcrypt = require('bcryptjs');
const Student = require('../models/student');
const passport = require('passport');
router.get("/", forwardAuthenticated, (req, res) => { 
    res.render('register') 
}) 
router.post('/', function (req, res, next) {
    Student.findOne({ email: req.body.email }).then(user => {
        if (user) {
            req.flash(
                'error_msg',
                'Email Already Registered. Log in to Continue.'
              );
          res.redirect('/login')
        }
    else{
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
                if(err)   throw err;
            req.body.password = hash
            Student.create(req.body)
            .then(function (user) {
                req.flash(
                    'success_msg',
                    'You are now registered and can log in'
                  );
                res.redirect("/login");
            })
            .catch(err => console.log(err));
        })
    })
}
    });
});     
module.exports = router; 
