const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.get('/new', (req, res) => {
    res.render('sessions/new.ejs');
});

//...farther down the page
router.post('/', (req, res)=>{
    User.findOne({ username: req.body.username },(err, foundUser) => {
        if( bcrypt.compareSync(req.body.password, foundUser.password) ){
            req.session.currentUser = foundUser;
            res.redirect('/');
        } else {
            res.send('wrong username or password');
        }
    });
});

router.delete('/', (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/');
    });
})

module.exports = router;
