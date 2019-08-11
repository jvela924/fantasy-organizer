const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.get('/new', (req, res) => {
    res.render('users/new.ejs');
});

//...farther down the page
router.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser)=>{
      User.findOne({ username: req.body.username },(err, foundUser) => {
          req.session.currentUser = foundUser;
          res.redirect('/')
      });
    });
});

module.exports = router;
