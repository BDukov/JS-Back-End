const mongose = require('mongoose');

const gameSchema = new mongose.Schema({
    name: {
        type: String,
        required: [true, 'Game name is required!'],
    },
    image: {
        type: String,
        required: [true, 'Game image is required!'],
    },
    price: {
        type: Number,
        required: [true, 'Game price is required!'],
    },
    description: {
        type: String,
        required: [true, 'Game description is required!'],
    }, 
    gerne: {
        type: String,
        required: [true, 'Game gerne is required!'],
    }, 
    platform: {
        type: String,
        required: [true, 'Game platform is required!'],
        enum: ['PC', 'Nintendo', 'PS4', 'PS5', 'Xbox'],
    },
    boughtBy: {
        type: mongose.Types.ObjectId,
        ref: 'User',
    },
    owner: {
        type: mongose.Types.ObjectId,
        ref: 'User',
    }
});

const Game = mongose.model('Game', gameSchema);

module.exports = Game;
