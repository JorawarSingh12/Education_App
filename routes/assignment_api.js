const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Institution = require('../models/institution');
const AssignmentSchema = require('../models/assignment');

router.post('/', function (req, res, next) {
    
    var Assignment = mongoose.model('assignment',AssignmentSchema);
    var assignment = new Assignment({
        name: user.name
    })
    Institution.findById(req.user.institution,(err,institution)=>{
        institution.classes.findById(req.body.class, (err,result)=>{
            if(err) throw err;
            console.log(result)
        })
    })
});


module.exports = router;