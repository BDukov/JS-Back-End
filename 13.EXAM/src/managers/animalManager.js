const Animal = require('../models/Animal');

exports.getAll = () => Animal.find().populate('owner');

exports.getOne = (animalId) => Animal.findById(animalId).populate('owner');

exports.create = (animalData) => Animal.create(animalData);

exports.edit = (animalId, animalData) => Animal.findByIdAndUpdate(animalId, animalData);

exports.delete = (animalId) => Animal.findByIdAndDelete(animalId).populate('owner');

exports.getDonations = (animalId) => Animal.findById(animalId).populate('donations');

exports.getByLocation = (location) => Animal.find({ location }).populate('owner');