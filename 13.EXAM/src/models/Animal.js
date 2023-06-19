const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "Name must be at least 2 characters long"]
    },
    years: {
        type: Number,
        required: [true, "Years is required"],
        min: [1, "Years must be minimum 1"],
        max: [100, "Years must be maximum 100"]
    },
    kind: {
        type: String,
        required: [true, "Kind is required"],
        minLength: [3, "Kind must be at least 3 characters long"]
    },
    image: {
        type: String,
        required: [true, "Image is required"],
        match: [/^https?:\/\//, "Image must be a valid URL"],
    },
    need: {
        type: String,
        required: [true, "Need is required"],
        minLength: [3, "Need must be at least 3 characters long"],
        maxLength: [20, "Need must be at most 20 characters long"]
    },
    location: {
        type: String,
        required: [true, "Location is required"],
        minLength: [5, "Location must be at least 5 characters long"],
        maxLength: [15, "Location must be at most 15 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [5, "Description must be at least 5 characters long"],
        maxLength: [50, "Description must be at most 50 characters long"]
    },
    donations: [
        {   
            type: String,
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});
animalSchema.method('getDonate', function () {
    return this.donations.map(x => x._id);
})

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
