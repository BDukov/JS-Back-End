const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);
    
    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;