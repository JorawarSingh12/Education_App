const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Institution = require('../models/institution');
const SubjectSchema = require('../models/subject');

router.post('/', function (req, res, next) {
    
    var Subject = mongoose.model('subject',SubjectSchema);
    var cl = new Subject({
        name: user.name
    })
    Institution.findById(req.user.institution,(err,institution)=>{
        institution.classes.findByIdAndUpdate(req.body.class,{
            $push:{ subjects: subject}
        }, (err,result)=>{
            if(err) throw err;
            res.redirect("/")
        })
    })
});


module.exports = router;