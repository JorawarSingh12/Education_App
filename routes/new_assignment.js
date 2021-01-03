const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');
const AssignmentSchema = require('../models/assignment');
const Class = require('../models/class');
const Institution = require('../models/institution');
const SubjectSchema = require('../models/subject');


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
            res.render('new_assignment', { user: req.user, classes: institution.classes })
        })
    }
    else
        res.redirect("/dashboard")
})

router.post('/',ensureAuthenticated, function (req, res, next) {
    
    var Assignment = mongoose.model('assignment', AssignmentSchema);
    var assignment = new Assignment({
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
                            subjects[j].assignments.push(assignment);
                            institution.save(function (err) {
                                if (err) throw err;
                                console.log("assignment updated");
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
