const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Teacher = require('../models/teacher');

// update a ninja in the db
router.put('/teacher', function (req, res, next) {
    Teacher.findByIdAndUpdate({ _id: req.user._id }).then(function (teacher) {
        teacher.institution = req.body.institution
    }).catch(next);;
});



module.exports = router;