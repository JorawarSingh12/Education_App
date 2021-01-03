const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');
const Class = require('../models/class');
const Institution = require('../models/institution');
const SubjectSchema = require('../models/subject');


router.get("/", ensureAuthenticated, (req, res) => {
    console.log(req.user)
    if (req.user.type == "teacher") {
        Institution.findById(req.user.institution, (err, institution) => {
            res.render('new_subject', { teacher: req.user, classes: institution.classes })
        })
    }
    else
        res.redirect("/dashboard")
})

router.post('/', function (req, res, next) {
    // console.log(req.body)
    var Subject = mongoose.model('subject', SubjectSchema);
    var subject = new Subject({
        name: req.body.name,
        teacher: req.user._id
    })
    Institution.findById(req.user.institution,
        function (err, institution) {
            if (err) throw err;
            var classes = institution.classes;
            var classreq;
            for (i = 0; i < classes.length; i++) {
                if (classes[i]._id.toString() === req.body.classid) {
                    classreq = classes[i];
                    classes[i].subjects.push(subject);
                }
            }
            var teachers = institution.teachers;
            for (i = 0; i < teachers.length; i++) {
                if (teachers[i]._id.toString() === req.user._id.toString()) {

                    teachers[i].subjects.push(subject._id);
                    teachers[i].classes.push({_id: classreq._id,name: classreq.name,section: classreq.section})
                    institution.save(function (err) {
                        if (err) throw err;
                        console.log("teacher updated");
                        req.flash(
                            'success_msg',
                            'New Subject Added and class notified !'
                        );
                        res.redirect("/dashboard")
                    })
                    // .catch(err => console.log(err));
                }
            }
    
        })
})
module.exports = router;
