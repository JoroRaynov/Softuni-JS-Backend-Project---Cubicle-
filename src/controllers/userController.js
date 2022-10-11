const router = require('express').Router();
const User = require('../models/UserModel');
const userService = require('../services/userService');
const { userSession } = require('../constants')

router.get('/register', (req, res) => {
    res.render('register')
});

router.post('/register', async (req, res) => {
    const registeredUser = await userService.register(req.body);

    if (!registeredUser) {
        res.render('404');
    } else {
        res.render('login')
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {

    const token = await userService.login(req.body);

    res.cookie(userSession, token, { httpOnly: true });
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    res.clearCookie(userSession)
})


module.exports = router;