const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const {secret, userSession} = require('../constants')

const jwtPromise = promisify(jwt.verify);

exports.auth = async (req, res, next) => {
    const token = req.cookies[userSession];
    if (token) {
        try {
            const decoded = await jwtPromise(token, secret);
            req.user = decoded;
            res.locals.user = decoded;
        } catch (err) {
            return res.render('404')
        }
    }
    next();
}

exports.isAuthenticated = (req, res, next) => {
    if(!req.user) {
        return res.render('/')
    }
    next();
}