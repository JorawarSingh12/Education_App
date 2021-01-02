const express = require('express'); 
var router = express.Router(); 
const { ensureAuthenticated } = require('../config/auth');
const mongoose = require('mongoose');
const ClassSchema = require('../models/class');
const Institution = require('../models/institution');


router.get("/",ensureAuthenticated, (req, res) => { 
    console.log(req.user)
    if(req.user.type == "institution")
        res.render('new_class',{institution: req.user})    
    else
        res.redirect("/dashboard")
}) 

router.post('/', function (req, res, next) {
    // console.log(req.body)
    var Clss = mongoose.model('class',ClassSchema);
    var cl = new Clss(req.body)
    Institution.findByIdAndUpdate(req.user._id,
        {
            $push: { classes: cl }
        }, function (err, mod) {
            if (err) console.log(err)
            req.flash(
                'success_msg',
                'New Class Created !'
            );
            res.redirect("/dashboard")
        })
})
module.exports = router; 
