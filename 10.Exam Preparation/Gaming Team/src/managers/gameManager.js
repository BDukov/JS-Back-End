const Game = require('../models/Game');

exports.getAll = () => Game.find();