const express = require('express'); 
var router = express.Router(); 
const { forwardAuthenticated } = require('../config/auth');
const bcrypt = require('bcryptjs');
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Institution = require('../models/institution');
const passport = require('passport');

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
    let M;
    if(req.body.type === "student")
    {
        M = Student;
    }
    else if(req.body.type === "teacher")
    {
        M = Teacher;
    }
    else{
        M = Institution;
    }
    M.findOne({ email: req.body.email }).then(user => {
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
            M.create(req.body)
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
