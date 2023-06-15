const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "Name must be at least 2 characters long"],
    },
    image: {
        type: String,
        required: [true, "ImageUrl is required"],
        match: [/^https?:\/\//, "Image must be a valid URL"],
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [1, "Age must be between 1"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [5, "Description must be at least 5 characters long"],
        maxLength: [50, "Description must be less than 50 characters long"],
    },
    location: {
        type: String,
        required: [true, "Location is required"],
        minLength: [5, "Description must be at least 5 characters long"],
        maxLength: [50, "Description must be less than 50 characters long"],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    comments: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                required: [true, "User is required"],
                ref: 'User',
            },
            message: {
                type: String,
                required: [true, "Message is required"],
            } 
    }
]
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;