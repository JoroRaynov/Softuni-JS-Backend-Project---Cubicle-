const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.register = async ({ username, password, repeatPassword }) => {

    if (repeatPassword == password) {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return await User.create({ username, password: hashedPassword });
    } else {
        return false;
    }
}


exports.login = async ({ username, password }) => {

    const user = await User.find({ username });

    if (!user) {
        throw { message: `There is no registered user with this username ${username}`};
    }

    const isValid = await bcrypt.compare(password, user.password);


}