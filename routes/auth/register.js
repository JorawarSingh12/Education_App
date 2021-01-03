const express = require('express');
var router = express.Router();
const { forwardAuthenticated } = require('../../config/auth');
const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const Institution = require('../../models/institution');
const StudentSchema = require('../../models/student');
const TeacherSchema = require('../../models/teacher');
const mongoose= require('mongoose');


router.get("/", forwardAuthenticated, (req, res) => {
    Institution.find({},(err, result) => {
        if (err) throw err
        res.render('auth/register', { institutions: result })
    })

})
router.post('/', function (req, res, next) {
    if (req.body.password !== req.body.confirm_password) {
        req.flash(
            'error_msg',
            "Password Doesn't match "
        );
        res.redirect('/register')
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                req.flash(
                    'error_msg',
                    'Email Already Registered. Log in to Continue.'
                );
                res.redirect('/register')
            }
            else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if (err) throw err;
                        req.body.password = hash
                        User.create(req.body)
                            .then((user) => {
                                if (user.type === 'institution') {
                                    Institution.create({ _id: user._id, name: user.name })
                                }
                                else if (user.type === 'student') {
                                    var Student = mongoose.model('student',StudentSchema);
                                    var student = new Student({
                                        _id: user._id,
                                        name: user.name
                                    })
                                    Institution.findByIdAndUpdate(req.body.institution,
                                        {
                                            $push: { students: student }
                                        }, function (err, mod) {
                                            if (err) console.log(err)
                                        })
                                }
                                else {
                                    var Teacher = mongoose.model('teacher',TeacherSchema);
                                    var teacher = new Teacher({
                                        _id: user._id,
                                        name: user.name
                                    })
                                    Institution.findByIdAndUpdate(req.body.institution,
                                        {
                                            $push: { teachers: teacher }
                                        }, function (err, mod) {
                                            if (err) console.log(err)
                                        })
                                }
                            })
                            .then(function (user) {
                                req.flash(
                                    'success_msg',
                                    'You are now registered and can log in'
                                );
                                res.redirect("/login" );
                            })
                            .catch(err => console.log(err));
                    })
                })
            }
        });
});
module.exports = router; 
