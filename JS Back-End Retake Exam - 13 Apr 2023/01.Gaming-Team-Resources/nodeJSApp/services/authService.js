const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const SECRET = 'someSecret';

exports.findByUsername = (username) => User.findOne({ username });
exports.findByEmail = (email) => User.findOne({ email })

exports.register = async (username, email, password, repeatPassword) => {
    if (password !== repeatPassword) {
        throw new Error('Passwords don\'t match!');
    }
    //Validate password

    // chech if user exists
    const existignUser = await User.findOne({
        $or: [
            { email },
            { username },
        ]
    });

    if (existignUser) {
        throw new Error('Username is taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

   await User.create({ username, email, password: hashedPassword });
}

exports.login = async (email, password) => {
    //user exists
  let user = await User.findOne({email});

    if (!user) {
        throw new Error('Wrong email or password! - user not found');
    }
    //password is valid
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Wrong email or password!');
    }
    //generate token
    const payload = {
        _id: user._id,
        email,
        username: user.username
    };
    const token = await jwt.sign(payload, SECRET);

    return token;
}