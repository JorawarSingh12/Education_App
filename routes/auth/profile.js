const express = require('express'); 
var router = express.Router(); 
const passport = require('passport');
const {  ensureAuthenticated } = require('../../config/auth');
const Institution = require("../../models/institution")



router.get("/",ensureAuthenticated, (req, res,next) => { 
    
    Institution.findById(req.user.institution, (err, institution) => {
        res.render('auth/profile', { user: req.user, classes: institution.classes })
    })    

}) 

router.post("/",ensureAuthenticated, (req, res,next) => { 
    
    Institution.findById(req.user.institution,
        function (err, institution) {
            if (err) throw err;
            var classes = institution.classes;
            for (i = 0; i < classes.length; i++) {
                if (classes[i]._id.toString() === req.body.classid) {
                    classes[i].students.push(req.user._id);
                }
            }
            var students = institution.students;
            for (i = 0; i < students.length; i++) {
                if (students[i]._id.toString() === req.user._id.toString()) {

                    students[i].class = req.body.classid;
                    institution.save(function (err) {
                        if (err) throw err;
                        console.log("added in class");
                        req.flash(
                            'success_msg',
                            'Added In Class!'
                        );
                        res.redirect("/dashboard")
                    })
                    
                    // .catch(err => console.log(err));
                }

            }
        })
    
}) 
      
module.exports = router; 
