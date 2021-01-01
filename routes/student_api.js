const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Institution = require('../models/institution');
// update a ninja in the db
router.post('/', function (req, res, next) {
    if(req.user.type === 'teacher'){
        Teacher.findByIdAndUpdate( req.user._id,{institution:  req.body.institution}, function(err,model){
            if(err) console.log(err)
            Institution.findByIdAndUpdate( req.body.institution,{
                $push: { teachers: model._id }
              }, function(err,mod){
                if(err) console.log(err)
                res.redirect("/profile")
                console.log("Updated User : ", mod); 
            })
        } )
    }
    else {
        Student.findByIdAndUpdate( req.user._id,{institution:  req.body.institution}, function(err,model){
           if(err) console.log(err)
            Institution.findByIdAndUpdate( req.body.institution,{
                $push: { students: model._id }
              }, function(err,mod){
                if(err) console.log(err)
                res.redirect("/profile")
                console.log("Updated User : ", mod); 
            })
        } )
    }
});


router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');
  });

module.exports = router;