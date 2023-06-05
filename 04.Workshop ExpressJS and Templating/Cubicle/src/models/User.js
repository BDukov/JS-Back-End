const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: {
        type: String,
        validate: {
            validator: function (value) {
                return this.repeatPassword === value;
            },
            message: 'Passwords don\'t match!'
        }
    },
});

userSchema.virtual('repeatPassword');

const User = mongoose.model('User', userSchema);

module.exports = User;