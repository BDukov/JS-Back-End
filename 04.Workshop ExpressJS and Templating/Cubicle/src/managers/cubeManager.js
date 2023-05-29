const Cube = require('../models/Cube');
const uniqid = require('uniqid');

exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean() ;

    //TODO: use mongooose to filter in DB
    if (search) {
        result = result.filter(cube => cube.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }
    return result;
}

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.create = async (cubeData) => {
    const cube = new Cube(cubeData);

    await cube.save();

    return cube;
}