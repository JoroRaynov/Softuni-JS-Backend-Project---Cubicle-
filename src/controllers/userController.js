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

router.post('/login', async (req, res) => {
    const token1 = await userService.login(req.body);
    console.log(token1);
   try{
    const token = await userService.login(req.body);
    if(!token){
       return res.redirect('404')
    }
    console.log(token);
    res.cookie('session', token, {httpOnly:true});
    res.redirect('/');

   } catch(err){
  

    res.status(404).render('404')
   }
});


module.exports = router;