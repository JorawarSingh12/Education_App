const express = require('express'); 
var router = express.Router(); 
const { forwardAuthenticated } = require('../config/auth');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const passport = require('passport');
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Institution = require('../models/institution');

router.get("/", forwardAuthenticated, (req, res) => { 
    res.render('register') 
}) 
router.post('/', function (req, res, next) {
    if(req.body.password !== req.body.confirm_password)
    {
        req.flash(
            'error_msg',
            "Password Doesn't match "
          );
      res.redirect('/register')
    }
    User.findOne({ email: req.body.email }).then(user => {
    if (user) {
            req.flash(
                'error_msg',
                'Email Already Registered. Log in to Continue.'
              );
          res.redirect('/register')
        }
    else{
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
                if(err)   throw err;
            req.body.password = hash
            User.create(req.body)
            .then( (user) =>{
                if(user.type === "student")
                {
                    Student.create({_id:user._id})
                }
                else if(user.type === "teacher")
                {
                    Teacher.create({_id:user._id})
                }
                else if(user.type === "institution"){
                    Institution.create({_id:user._id})
                }
                else
                    throw err
            })
            .then(function (user) {
                req.flash(
                    'success_msg',
                    'You are now registered and can log in'
                  );
                res.redirect("/login/"+req.body.type);
            })
            .catch(err => console.log(err));
        })
    })
}
    });
});     
module.exports = router; 
