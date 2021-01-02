const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');
  });

module.exports = router;