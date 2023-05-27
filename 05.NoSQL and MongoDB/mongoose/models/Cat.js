const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
    },
    age: Number,
    breed: String,
});

catSchema.methods.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

catSchema.virtual('info').get(function () {
    return `My name is ${this.name} and I am ${this.age} years old`
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;