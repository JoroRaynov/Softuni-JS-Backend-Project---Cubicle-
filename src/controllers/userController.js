const router = require('express').Router();
const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const userService = require('../services/userService');
const cubeService = require('../services/cubeService');


router.get('/register', (req, res) => {
    res.render('register')
});

router.post('/register', async (req, res) => {
   const registeredUser = await userService.register(req.body);

   if(!registeredUser) {
    res.render('404');
   } else {
    res.render('login')
   }
});

router.get('/login',  (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    console.log(req.body);
});


module.exports = router;