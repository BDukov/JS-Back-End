const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (userData) => {
       const user = await User.create(userData);
       
       const result = getAuthResult(user);

       return result;
}
exports.login = async ({ email, password}) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User not found!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Incorrect password!');
    }

    const result = getAuthResult(user);

}

function getAuthResult(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    }
    const token = jwt.sign(payload, "SECRET", { expiresIn: '1h' });

    const result = {
        _id: user._id,
        email: user.email,
        accessToken: token,
    };

    return result;
}