const router = require('express').Router();
const User = require('../models/UserModel');
const userService = require('../services/userService');


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
   try{
    const token = await userService.login(req.body);
    if(!token){
       return res.redirect('404')
    }
    res.cookie('session', token, {httpOnly:true});
    res.redirect('/');

   } catch(err){
  

    res.status(404).render('404')
   }
});


module.exports = router;