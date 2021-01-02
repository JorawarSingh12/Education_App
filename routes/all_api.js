const express = require('express');
const router = express.Router();
const Institution = require('../models/institution');
const ClassSchema = require('../models/class');
const { ensureAuthenticated } = require('../config/auth');

// create new class in the db
router.get('/:typed',ensureAuthenticated, function (req, res, next) {
    Institution.findById(req.user._id,(err,result)=>{

        res.render('all_api.ejs',{user: req.user,result: result[req.params.typed],type: req.params.typed})
    })
    .catch(next)
});


module.exports = router;