const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const {  ensureAuthenticated } = require('../config/auth');
const Institution = require('../models/institution');
const TestSchema = require('../models/test');


router.get("/", ensureAuthenticated, (req, res) => {
    console.log(req.user)
    if (req.user.type == "teacher") {
        Institution.findById(req.user.institution, (err, institution) => {
            var classes;
            for (var i = 0; i < institution.teachers.length; i++) {
                if (institution.teachers[i]._id.toString() === req.user._id.toString()) {
                    classes = institution.teachers[i].classes
                }
            }
            res.render('new_test', { user: req.user, classes: institution.classes })
        })
    }
    else
        res.redirect("/dashboard")
})

router.post('/',ensureAuthenticated, function (req, res, next) {
    
    var Test = mongoose.model('test', TestSchema);
    var test = new Assignment({
        name: req.body.name,
    })
    // going down to through institution->classes->subjects->assignments
    //  check schema model again to better perform
    Institution.findById(req.user.institution,
        function (err, institution) {
            if (err) throw err;
            var classes = institution.classes;
            for (i = 0; i < classes.length; i++) {
                if (classes[i]._id.toString() === req.body.classid.toString()) {
                    var subjects = classes[i].subjects;
                    
                    for (j = 0; j < subjects.length; j++) {
                    //    console.log("subjects are",subjects[j]._id.toString(),req.user._id.toString())
                        if (subjects[j].teacher.toString() === req.user._id.toString()) {
                            console.log("subject matched",subjects[j])
                            subjects[j].tests.push(test);
                            institution.save(function (err) {
                                if (err) throw err;
                                req.flash(
                                    'success_msg',
                                    'Assignment Added and students notified !'
                                );
                                res.redirect("/dashboard")
                            })
                        }

                    }
                }
            }


        })
})
module.exports = router;
