const cubes = require('../db.json');
const fs = require('fs/promises');
const path = require('path');

exports.getAll = (search = '', fromInput, toInput) =>{
   const from = Number(fromInput) || 0;
   const to = Number(toInput) || 6; 
    let result = cubes
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    .filter(c => c.difficultyLevel >= from && c.difficultyLevel <= to);
    return result;
}

exports.save = (cube) => {
    const id = 'a0897' + (Math.random() * 9999 | 0);
    cubes.push({ id, ...cube});

    return fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 2), { encoding: 'utf8' });
};


exports.getOne = (id) => {
    if(cubes.length > 0) {
        const cube = cubes.find(c => c.id == id);
        return cube;
    }
}