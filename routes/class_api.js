const express = require('express');
const router = express.Router();
const Class= require('../models/class');
const Institution = require('../models/institution');

// update a ninja in the db
router.post('/', function (req, res, next) {
    Class.create(req.body)
    .then( (cl) =>{
        Institution.findByIdAndUpdate( req.user._id,{institution:  req.body.institution}, function(err,model){
            if (err)  throw err
            res.redirect("/profile")
            console.log("Updated User : ", model); 
        } )
    })
        
});


router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');
  });

module.exports = router;