const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');


const secret = 'gkvdsofksdlask234psdjfdfs9dsifsd'

exports.register = async ({ username, password, repeatPassword }) => {

    if (repeatPassword == password) {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return await User.create({ username, password: hashedPassword });
    } else {
        return false;
    }
}


exports.login = async ({ username, password }) => {

    const user = await User.findOne({ username });
console.log(user.password);
    if (!user) {
        throw { message: `There is no registered user with this username ${username}`};
    }

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw { message: `Invalid username or password`}
    }

    let result = new Promise((resolve, reject) => {

        jwt.sign({id: user._id, username: user.username},secret, {expiresIn: '2d'}, (err, token)=>{
            if(err){
                return reject(err)
            }
            resolve(token)
        });

    });

    return result;

}