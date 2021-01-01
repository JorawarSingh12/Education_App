const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Institution = require('../models/institution');
const ClassSchema = require('../models/class');

// create new class in the db
router.post('/', function (req, res, next) {
    var Class = mongoose.model('teacher',ClassSchema);
    var cl = new Class({
        name: user.name
    })
    Institution.findByIdAndUpdate(req.body.institution,
        {
            $push: { classes: cl }
        }, function (err, mod) {
            if (err) console.log(err)
        })
});


module.exports = router;