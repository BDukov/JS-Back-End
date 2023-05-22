const uniqid = require('uniqid');
const cubes = [
    {
        id: 'u609xaxwlhz8k9dj',
        name: 'The Punisher',
        desctiprion: 'The Punisher is a fictional character appearing in American comic books published by Marvel Comics. The character was created by writer Gerry Conway and artists John Romita Sr. and Ross Andru, with publisher Stan Lee green-lighting the name.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Punisher_%28Frank_Castle%29.jpg',
        difficultyLevel: 6
    },
    {
        id: 'u609xaxwld8sdgsj',
        name: 'The Mirror',
        description: 'The Mirror is a fictional character appearing in American comic books published by Marvel Comics. The character was created by writer Gerry Conway and artists John Romita Sr. and Ross Andru, with publisher Stan Lee green-lighting the name.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Punisher_%28Frank_Castle%29.jpg',
        difficultyLevel: 4
    }
];
exports.getAll = (search, from, to) => {
    let result = cubes.slice();

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

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    }
    
    cubes.push(newCube);

    return newCube;
}