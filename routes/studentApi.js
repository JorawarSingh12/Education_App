const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// update a ninja in the db
router.put('/:id', function (req, res, next) {
    res.send({ type: 'PUT' });
});

// delete a ninja from the db
router.delete('/:id', function (req, res, next) {
    Student.findByIdAndRemove({ _id: req.params.id }).then(function (student) {
        res.send(student);
    }).catch(next);
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
  });

module.exports = router;