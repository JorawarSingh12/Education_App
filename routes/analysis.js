const express = require('express');
const { ensureAuthenticated } = require('../config/auth');
const router = express.Router();
const Institution = require('../models/institution');

router.get("/:id",ensureAuthenticated,function(req, res,next){
    var cl = 0;
    Institution.findById(req.user._id,(err,institution)=>{
        console.log(institution)
        var classes = institution.classes;
        for(var i=0;i<classes.length;i++)
        {
            if(classes[i]._id.toString() === req.params.id)
            {
                    cl  = classes[i]
                    break;
            }

        }
        console.log(cl)
        res.render('class_analysis',{clss: cl})
    })    
})


module.exports = router;