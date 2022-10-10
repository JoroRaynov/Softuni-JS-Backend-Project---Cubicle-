const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const {secret} = require('../constants')

const jwtPromise = promisify(jwt.verify);

exports.auth = async (req, res, next) => {
    const token = req.cookies['session'];
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

